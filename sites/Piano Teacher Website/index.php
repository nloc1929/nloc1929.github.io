<?php
// Check if the form has been submitted
if (isset($_POST['url'])) {

    // Get the URL from the form
    $url = $_POST['url'];

    // Construct the API URL with the user-provided URL
    $api_url = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={$url}&key=AIzaSyCabc0C-h2gKn_Lh-DC4Rm_o5_OwwjkTTo&strategy=mobile";

    // Fetch the data from the API using cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $api_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $data = curl_exec($ch);
    curl_close($ch);

    // Decode the JSON response
    $json = json_decode($data, true);

    // Page Speed Insights Scores
    $initialUrl = $url;
    $overallCategory = isset($json['loadingExperience']['overall_category']) ? $json['loadingExperience']['overall_category'] : NULL;
    $scoreCLS = isset($json['loadingExperience']['metrics']['CUMULATIVE_LAYOUT_SHIFT_SCORE']['category']) ? $json['loadingExperience']['metrics']['CUMULATIVE_LAYOUT_SHIFT_SCORE']['category'] : NULL;
    $scoreINP = isset($json['loadingExperience']['metrics']['EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT']['category']) ? $json['loadingExperience']['metrics']['EXPERIMENTAL_INTERACTION_TO_NEXT_PAINT']['category'] : NULL;
    $scoreTTFB = isset($json['loadingExperience']['metrics']['EXPERIMENTAL_TIME_TO_FIRST_BYTE']['category']) ? $json['loadingExperience']['metrics']['EXPERIMENTAL_TIME_TO_FIRST_BYTE']['category'] : NULL;
    $scoreFCP = isset($json['loadingExperience']['metrics']['FIRST_CONTENTFUL_PAINT_MS']['category']) ? $json['loadingExperience']['metrics']['FIRST_CONTENTFUL_PAINT_MS']['category'] : NULL;
    $scoreFID = isset($json['loadingExperience']['metrics']['FIRST_INPUT_DELAY_MS']['category']) ? $json['loadingExperience']['metrics']['FIRST_INPUT_DELAY_MS']['category'] : NULL;
    $scoreLCP = isset($json['loadingExperience']['metrics']['LARGEST_CONTENTFUL_PAINT_MS']['category']) ? $json['loadingExperience']['metrics']['LARGEST_CONTENTFUL_PAINT_MS']['category'] : NULL;
    // Lighthouse Results
    $auditFCP = isset($json['lighthouseResult']['audits']['first-contentful-paint']['displayValue']) ? $json['lighthouseResult']['audits']['first-contentful-paint']['displayValue'] : NULL;
    $auditLCP = isset($json['lighthouseResult']['audits']['largest-contentful-paint']['displayValue']) ? $json['lighthouseResult']['audits']['largest-contentful-paint']['displayValue'] : NULL;
    $auditTBT = isset($json['lighthouseResult']['audits']['total-blocking-time']['displayValue']) ? $json['lighthouseResult']['audits']['total-blocking-time']['displayValue'] : NULL;
    $auditCLS = isset($json['lighthouseResult']['audits']['cumulative-layout-shift']['displayValue']) ? $json['lighthouseResult']['audits']['cumulative-layout-shift']['displayValue'] : NULL;
    $speedIndex = isset($json['lighthouseResult']['audits']['speed-index']['displayValue']) ? $json['lighthouseResult']['audits']['speed-index']['displayValue'] : NULL;
    $auditTTI = isset($json['lighthouseResult']['audits']['interactive']['displayValue']) ? $json['lighthouseResult']['audits']['interactive']['displayValue'] : NULL;
    // Lighthouse Values
    $firstCP = isset($json['lighthouseResult']['audits']['first-contentful-paint']['numericValue']) ? $json['lighthouseResult']['audits']['first-contentful-paint']['numericValue'] : NULL;
    $speedIndexVal = isset($json['lighthouseResult']['audits']['speed-index']['numericValue']) ? $json['lighthouseResult']['audits']['speed-index']['numericValue'] : NULL;
    $largestCP = isset($json['lighthouseResult']['audits']['largest-contentful-paint']['numericValue']) ? $json['lighthouseResult']['audits']['largest-contentful-paint']['numericValue'] : NULL;
    $totalBT = isset($json['lighthouseResult']['audits']['total-blocking-time']['numericValue']) ? $json['lighthouseResult']['audits']['total-blocking-time']['numericValue'] : NULL;
    $cumulativeLS = isset($json['lighthouseResult']['audits']['cumulative-layout-shift']['numericValue']) ? $json['lighthouseResult']['audits']['cumulative-layout-shift']['numericValue'] : NULL;
    $valueTTI = isset($json['lighthouseResult']['audits']['interactive']['numericValue']) ? $json['lighthouseResult']['audits']['interactive']['numericValue'] : NULL;

    // FUNCTION TO CALCULATE TOTAL PERFORMANCE PERCENTAGE
    function calculatePerformanceScore($firstCP, $speedIndexVal, $largestCP, $totalBT, $cumulativeLS)
    {
        $firstCP = (1 - ($firstCP / 6000)) * 10;
        $speedIndexVal = (1 - ($speedIndexVal / 12000)) * 10;
        $largestCP = (1 - ($largestCP / 8000)) * 25;
        $totalBT = (1 - ($totalBT / 3000)) * 30;
        $cumulativeLS = (1 - ($cumulativeLS / 0.82)) * 25;
        $metrics = [$firstCP, $largestCP, $totalBT, $cumulativeLS, $speedIndexVal];
        $result = 0.0;
        foreach ($metrics as $metric) {
            $result += $metric;
        }
        return floor($result);
    }
    $performanceScore = calculatePerformanceScore($firstCP, $speedIndexVal, $largestCP, $totalBT, $cumulativeLS);

    $metrics = [$firstCP, $speedIndexVal, $largestCP, $totalBT, $cumulativeLS];
    $totalMetrics = 0.0;

    foreach ($metrics as $metric) {
        $totalMetrics += $metric;
    }
    if ($totalMetrics == 0) {
        $performanceScore = 0;
        $overallCategory = "The website address you entered could not be analysed by Google. <br>Contact us to find out why.";
    }

    // CHECKS VALUES AND CHANGES FONT COLOR
    // Overall Category
    if ($overallCategory == 'FAST') {
        $classOC = 'green';
    } else if ($overallCategory == 'AVERAGE') {
        $classOC = 'orange';
    } else if ($overallCategory == 'SLOW') {
        $classOC = 'red';
    } else {
        $classOC = 'grey';
    }
    // Performance Score
    if ($performanceScore >= 90) {
        $classPC = 'green';
    } else if ($performanceScore >= 50 && $performanceScore <= 89) {
        $classPC = 'orange';
    } else {
        $classPC = 'red';
    }
    // LCP Page Speed
    if ($scoreLCP == 'FAST') {
        $classLCP = 'green';
    } else if ($scoreLCP == 'AVERAGE') {
        $classLCP = 'orange';
    } else {
        $classLCP = 'red';
    }
    // CLS Page Speed
    if ($scoreCLS == 'FAST') {
        $classCLS = 'green';
    } else if ($scoreCLS == 'AVERAGE') {
        $classCLS = 'orange';
    } else {
        $classCLS = 'red';
    }
    // INP Page Speed
    if ($scoreINP == 'FAST') {
        $classINP = 'green';
    } else if ($scoreINP == 'AVERAGE') {
        $classINP = 'orange';
    } else {
        $classINP = 'red';
    }
    // TTFB Page Speed
    if ($scoreTTFB == 'FAST') {
        $classTTFB = 'green';
    } else if ($scoreTTFB == 'AVERAGE') {
        $classTTFB = 'orange';
    } else {
        $classTTFB = 'red';
    }
    // FCP Page Speed
    if ($scoreFCP == 'FAST') {
        $classFCP = 'green';
    } else if ($scoreFCP == 'AVERAGE') {
        $classFCP = 'orange';
    } else {
        $classFCP = 'red';
    }
    // FID Page Speed
    if ($scoreFID == 'FAST') {
        $classFID = 'green';
    } else if ($scoreFID == 'AVERAGE') {
        $classFID = 'orange';
    } else {
        $classFID = 'red';
    }
    // FCP Lighthouse Value
    if ($firstCP <= 1800) {
        $classFCPLight = 'green';
    } else if ($firstCP > 1800 && $firstCP <= 3000) {
        $classFCPLight = 'orange';
    } else {
        $classFCPLight = 'red';
    }
    // Speed Index Lighthouse Value
    if ($speedIndexVal <= 3400) {
        $classSILight = 'green';
    } else if ($speedIndexVal > 3400 && $speedIndexVal <= 5800) {
        $classSILight = 'orange';
    } else {
        $classSILight = 'red';
    }
    // LCP Lighthouse Value
    if ($largestCP <= 2500) {
        $classLCPLight = 'green';
    } else if ($largestCP > 2500 && $largestCP <= 4000) {
        $classLCPLight = 'orange';
    } else {
        $classLCPLight = 'red';
    }
    // TBT Lighthouse Value
    if ($totalBT <= 200) {
        $classTBTLight = 'green';
    } else if ($totalBT > 200 && $totalBT <= 600) {
        $classTBTLight = 'orange';
    } else {
        $classTBTLight = 'red';
    }
    // CLS Lighthouse Value
    if ($cumulativeLS <= 0.1) {
        $classCLSLight = 'green';
    } else if ($cumulativeLS > 0.1 && $cumulativeLS <= 0.25) {
        $classCLSLight = 'orange';
    } else {
        $classCLSLight = 'red';
    }
    // TTI Lighthouse Value
    if ($valueTTI <= 3800) {
        $classTTILight = 'green';
    } else if ($valueTTI > 3800 && $valueTTI <= 7300) {
        $classTTILight = 'orange';
    } else {
        $classTTILight = 'red';
    }

?>
    <!-- DISPLAY OVERALL RESULTS -->
    <!DOCTYPE html>
    <html>

    <head>
        <title>Website Speed Test</title>
    </head>

    <body>
        <div class="resultsPage">
            <div class="centerSection">
                <h1>WEBSITE SPEED TEST</h1>
                <hr>
                <p><strong>Website URL Tested</strong><br> <?php echo $initialUrl ?></p>
                <div class="mainResults">
                    <?php
                    if ($overallCategory != NULL) : ?>
                        <p><strong>Page Speed Score</strong>
                        <p>
                        <h3 class='<?php echo $classOC; ?>'><?php echo $overallCategory ?></h3>
                    <?php endif; ?>
                    <p><strong>Performance Score</strong></p>
                    <h3 class='<?php echo $classPC; ?>'><?php echo $performanceScore ?>%</h3>
                </div>
            </div>
            <div class="resultsSection">
                <?php if ($scoreCLS != NULL || $scoreINP != NULL || $scoreTTFB != NULL || $scoreFCP != NULL || $scoreFID != NULL || $scoreLCP != NULL) : ?>
                    <!-- DISPLAY PAGE SPEED INSIGHTS -->
                    <div class="pageSpeedInsights">
                        <h2>PAGE SPEED INSIGHTS</h2>
                        <table class="metricTable">
                            <tr>
                                <th colspan="2">PAGE SPEED INSIGHTS</th>
                            </tr>
                            <tr>
                                <th>Speed Metric</th>
                                <th>Result</th>
                            </tr>
                            <?php
                            if ($scoreCLS != NULL) : ?>
                                <tr>
                                    <td>Cumulative Layout Shift (CLS)</td>
                                    <td class='<?php echo $classCLS; ?>'><?php echo $scoreCLS ?></td>
                                </tr>
                            <?php endif; ?>
                            <?php
                            if ($scoreINP != NULL) : ?>
                                <tr>
                                    <td>Interaction to Next Paint (INP)</td>
                                    <td class='<?php echo $classINP; ?>'><?php echo $scoreINP ?></td>
                                </tr>
                            <?php endif; ?>
                            <?php
                            if ($scoreTTFB != NULL) : ?>
                                <tr>
                                    <td>Time to First Byte (TTFB)</td>
                                    <td class='<?php echo $classTTFB; ?>'><?php echo $scoreTTFB ?></td>
                                </tr>
                            <?php endif; ?>
                            <?php
                            if ($scoreFCP != NULL) : ?>
                                <tr>
                                    <td>First Contentful Paint (FCP)</td>
                                    <td class='<?php echo $classFCP; ?>'><?php echo $scoreFCP ?></td>
                                </tr>
                            <?php endif; ?>
                            <?php
                            if ($scoreFID != NULL) : ?>
                                <tr>
                                    <td>First Input Delay (FID)</td>
                                    <td class='<?php echo $classFID; ?>'><?php echo $scoreFID ?></td>
                                </tr>
                            <?php endif; ?>
                            <?php
                            if ($scoreLCP != NULL) : ?>
                                <tr>
                                    <td>Largest Contentful Paint (LCP)</td>
                                    <td class="<?php echo $classLCP; ?>"><?php echo $scoreLCP ?></td>
                                </tr>
                            <?php endif; ?>
                        </table>
                    </div>
                <?php endif; ?>
                <?php if ($auditFCP != NULL || $auditLCP != NULL || $auditTBT != NULL || $auditCLS != NULL || $speedIndex != NULL || $auditTTI != NULL) : ?>
                    <!-- DISPLAY LIGHTHOUSE RESULTS -->
                    <div class="lighthouseResults">
                        <h2>LIGHTHOUSE RESULTS</h2>
                        <table class="metricTable">
                            <tr>
                                <th colspan="2">LIGHTHOUSE RESULTS</th>
                            </tr>
                            <tr>
                                <th>Speed Metric</th>
                                <th>Result</th>
                            </tr>
                            <?php
                            if ($auditFCP != NULL) : ?>
                                <tr>
                                    <td>First Contentful Paint</td>
                                    <td class="<?php echo $classFCPLight; ?>"><?php echo $auditFCP ?></td>
                                </tr>
                            <?php endif; ?>
                            <?php
                            if ($auditLCP != NULL) : ?>
                                <tr>
                                    <td>Largest Contentful Paint</td>
                                    <td class="<?php echo $classLCPLight; ?>"><?php echo $auditLCP ?></td>
                                </tr>
                            <?php endif; ?>
                            <?php
                            if ($auditTBT != NULL) : ?>
                                <tr>
                                    <td>Total Blocking Time</td>
                                    <td class="<?php echo $classTBTLight; ?>"><?php echo $auditTBT ?></td>
                                </tr>
                            <?php endif; ?>
                            <?php
                            if ($auditCLS != NULL) : ?>
                                <tr>
                                    <td>Cumulative Layout Shift</td>
                                    <td class="<?php echo $classCLSLight; ?>"><?php echo $auditCLS ?></td>
                                </tr>
                            <?php endif; ?>
                            <?php
                            if ($speedIndex != NULL) : ?>
                                <tr>
                                    <td>Speed Index</td>
                                    <td class="<?php echo $classSILight; ?>"><?php echo $speedIndex ?></td>
                                </tr>
                            <?php endif; ?>
                            <?php
                            if ($auditTTI != NULL) : ?>
                                <tr>
                                    <td>Time to interactive</td>
                                    <td class="<?php echo $classTTILight; ?>"><?php echo $auditTTI ?></td>
                                </tr>
                            <?php endif; ?>
                        </table>
                    </div>
                <?php endif; ?>
            </div>
        <?php
    }
        ?>
        <div class="centerSection">
            <!-- HTML FORM FOR URL -->
            <form method="post">
                <label>Enter a URL:</label>
                <input type="text" name="url">
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    </body>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        .centerSection {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            padding: 2em;
        }

        .resultsPage {
            border: 1em #CCC solid;
            border-radius: 20px;
            max-width: 60%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .resultsSection {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: row;
            margin-top: 0;
            padding-top: 0;
        }

        .metricTable {
            min-width: 400px;
        }

        .pageSpeedInsights,
        .lighthouseResults {
            padding: 2em;
            text-align: center;
        }

        .green {
            color: green;
        }

        .orange {
            color: #FFA400;
        }

        .red {
            color: red;
        }

        .grey {
            color: #222;
        }

        .mainResults {
            margin: 0;
            padding: 0;
        }
    </style>

    </html>