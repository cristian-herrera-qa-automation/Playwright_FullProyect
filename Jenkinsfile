pipeline {
    agent any

    stages {

        stage('Install Dependencies ✅✅') {
                    steps {
                        // Es buena práctica instalar los binarios de navegadores aquí también
                        bat 'npm install'
                        bat 'npx playwright install'
                    }
                }

        stage('Run Playwright Tests 🧪🧪') {
            steps {
                // ✅ Ejecuta scripts de package.json
                bat 'npm run "%script%"'
            }
        }
        }
        post {
        always {
            publishHTML target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',          // Asegúrate de que tu playwright.config.ts exporte a esta carpeta
                reportFiles: 'myreport.html',  // Asegúrate de que el archivo se llame así
                reportName: 'Playwright Test REPORTE',
                reportTitles: 'The Report'
            ]
        }
    }
}