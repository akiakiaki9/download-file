import React from 'react';

const File = () => {
    const downloadFile = () => {
        // URL для скачивания
        const downloadUrl = 'https://utweb.rainberrytv.com/gui/index.html?v=1.5.0.6158&localauth=localapi820d2fdd1368daf8:#/dashboard';

        // Создаем временную ссылку
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', ''); // Указываем, что это скачивание
        document.body.appendChild(link);

        // Кликаем по ссылке
        link.click();

        // Удаляем ссылку из DOM
        document.body.removeChild(link);
    };

    return (
        <div style={styles.container}>
            <h2>Скачать файл</h2>
            <button
                onClick={downloadFile}
                style={styles.button}
            >
                Скачать
            </button>

            <div style={styles.info}>
                <p>Ссылка для скачивания:</p>
                <p style={styles.url}>{'https://utweb.rainberrytv.com/gui/index.html?v=1.5.0.6158&localauth=localapi820d2fdd1368daf8:#/dashboard'}</p>
            </div>
        </div>
    );
};

// Стили компонента
const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    button: {
        padding: '12px 24px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '20px 0',
        transition: 'background-color 0.3s',
    },
    info: {
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        textAlign: 'left',
    },
    url: {
        backgroundColor: '#e9ecef',
        padding: '10px',
        borderRadius: '4px',
        fontSize: '14px',
        wordBreak: 'break-all',
    },
};

// Альтернативная версия с использованием хуков для состояния
const DownloadComponentWithState = () => {
    const [isDownloading, setIsDownloading] = React.useState(false);

    const handleDownload = () => {
        setIsDownloading(true);

        const downloadUrl = 'https://utweb.rainberrytv.com/gui/index.html?v=1.5.0.6158&localauth=localapi820d2fdd1368daf8:#/dashboard';

        // Используем window.location для редиректа на скачивание
        window.location.href = downloadUrl;

        // Сбрасываем состояние через 2 секунды
        setTimeout(() => {
            setIsDownloading(false);
        }, 2000);
    };

    return (
        <div style={styles.container}>
            <h2>Скачать файл</h2>
            <button
                onClick={handleDownload}
                style={{
                    ...styles.button,
                    backgroundColor: isDownloading ? '#6c757d' : '#007bff',
                }}
                disabled={isDownloading}
            >
                {isDownloading ? 'Скачивание...' : 'Скачать'}
            </button>
        </div>
    );
};

// Еще один вариант с использованием тега <a>
const DownloadLinkComponent = () => {
    const downloadUrl = 'https://utweb.rainberrytv.com/gui/index.html?v=1.5.0.6158&localauth=localapi820d2fdd1368daf8:#/dashboard';

    return (
        <div style={styles.container}>
            <h2>Скачать файл</h2>

            {/* Способ 1: Простая ссылка с download атрибутом */}
            <a
                href={downloadUrl}
                download
                style={{
                    ...styles.button,
                    display: 'inline-block',
                    textDecoration: 'none',
                    textAlign: 'center',
                }}
            >
                Скачать через ссылку
            </a>

            {/* Способ 2: Кнопка с window.open */}
            <button
                onClick={() => window.open(downloadUrl, '_blank')}
                style={{
                    ...styles.button,
                    backgroundColor: '#28a745',
                    marginLeft: '10px',
                }}
            >
                Открыть в новой вкладке
            </button>
        </div>
    );
};

export { File, DownloadComponentWithState, DownloadLinkComponent };
export default File;