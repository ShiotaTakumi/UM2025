// js/main.js

// Cytoscape SVG extension を登録
// Register the Cytoscape SVG extension
if (typeof cytoscapeSvg !== 'undefined') {
  cytoscape.use(cytoscapeSvg);
}

// JSON ディレクトリ構造に合わせて、選択肢を定義
// Define the selection options based on the JSON directory structure
const dataMap = {
  sample: {
    n4: ['1.json']
  },
  polyhedron: {
    n4: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n5: Array.from({ length: 2 }, (_, i) => `${i + 1}.json`),
    n6: Array.from({ length: 7 }, (_, i) => `${i + 1}.json`),
    n7: Array.from({ length: 34 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 257 }, (_, i) => `${i + 1}.json`),
    n9: Array.from({ length: 2606 }, (_, i) => `${i + 1}.json`)
  },
  pyramid: {
    n4: ['1.json'],
    n5: ['1.json'],
    n6: ['1.json'],
    n7: ['1.json'],
    n8: ['1.json'],
    n9: ['1.json'],
    n10: ['1.json'],
    n11: ['1.json']
  },
  bipyramid: {
    n5: ['1.json'],
    n6: ['1.json'],
    n7: ['1.json'],
    n8: ['1.json'],
    n9: ['1.json'],
    n10: ['1.json'],
    n11: ['1.json']
  },
  prism: {
    n6: ['1.json'],
    n8: ['1.json'],
    n10: ['1.json'],
    n12: ['1.json']
  },
  antiprism: {
    n6: ['1.json'],
    n8: ['1.json'],
    n10: ['1.json'],
    n12: ['1.json']
  },
  pyramid_var_1: {
    n6: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n7: Array.from({ length: 2 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 2 }, (_, i) => `${i + 1}.json`),
    n9: Array.from({ length: 3 }, (_, i) => `${i + 1}.json`),
    n10: Array.from({ length: 3 }, (_, i) => `${i + 1}.json`),
    n11: Array.from({ length: 4 }, (_, i) => `${i + 1}.json`)
  },
  pyramid_var_2: {
    n6: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n7: Array.from({ length: 5 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 11 }, (_, i) => `${i + 1}.json`),
    n9: Array.from({ length: 20 }, (_, i) => `${i + 1}.json`),
    n10: Array.from({ length: 34 }, (_, i) => `${i + 1}.json`),
    n11: Array.from({ length: 54 }, (_, i) => `${i + 1}.json`)
  },
  prism_var_1: {
    n6: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n7: Array.from({ length: 2 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 2 }, (_, i) => `${i + 1}.json`),
    n9: Array.from({ length: 3 }, (_, i) => `${i + 1}.json`),
    n10: Array.from({ length: 3 }, (_, i) => `${i + 1}.json`),
    n11: Array.from({ length: 4 }, (_, i) => `${i + 1}.json`)
  },
  octahedron_var_1: {
    n6: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n7: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 5 }, (_, i) => `${i + 1}.json`),
    n9: Array.from({ length: 15 }, (_, i) => `${i + 1}.json`),
    n10: Array.from({ length: 45 }, (_, i) => `${i + 1}.json`),
    n11: Array.from({ length: 112 }, (_, i) => `${i + 1}.json`)
  },
  pyramid_var_3: {
    n7: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 3 }, (_, i) => `${i + 1}.json`),
    n9: Array.from({ length: 9 }, (_, i) => `${i + 1}.json`),
    n10: Array.from({ length: 17 }, (_, i) => `${i + 1}.json`),
    n11: Array.from({ length: 32 }, (_, i) => `${i + 1}.json`)
  },
  pyramid_var_4: {
    n7: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 2 }, (_, i) => `${i + 1}.json`),
    n9: Array.from({ length: 5 }, (_, i) => `${i + 1}.json`),
    n10: Array.from({ length: 8 }, (_, i) => `${i + 1}.json`),
    n11: Array.from({ length: 14 }, (_, i) => `${i + 1}.json`)
  },
  pyramid_var_5: {
    n7: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n9: Array.from({ length: 2 }, (_, i) => `${i + 1}.json`),
    n10: Array.from({ length: 3 }, (_, i) => `${i + 1}.json`),
    n11: Array.from({ length: 4 }, (_, i) => `${i + 1}.json`)
  },
  pyramid_var_6: {
    n7: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n9: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n10: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n11: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`)
  },
  pyramid_var_7: {
    n6: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 2 }, (_, i) => `${i + 1}.json`),
    n10: Array.from({ length: 3 }, (_, i) => `${i + 1}.json`)
  },
  unremarkable_var_1: {
    n6: Array.from({ length: 1 }, (_, i) => `${i + 1}.json`),
    n8: Array.from({ length: 3 }, (_, i) => `${i + 1}.json`),
    n10: Array.from({ length: 7 }, (_, i) => `${i + 1}.json`)
  },
};

// Cytoscape インスタンスとオリジナル要素を保存する変数
// Variables to hold the Cytoscape instance and the original elements for reset
let cyInstance = null;
let originalElements = null;

// グラフを読み込んで描画する関数
// Function to load a JSON graph and render it with Cytoscape
function loadGraph(path) {
  console.log('[loadGraph] fetching:', path);

  // 既に Cytoscape インスタンスがあれば破棄
  // If a Cytoscape instance already exists, destroy it before creating a new one
  if (cyInstance && typeof cyInstance.destroy === 'function') {
    cyInstance.destroy();
    cyInstance = null;
  }

  // 指定されたパスの JSON ファイルを取得
  // Fetch the JSON file from the specified path
  fetch(path)
    .then(response => {
      // HTTP レスポンスが OK でなければ例外を投げる
      // Throw an error if the HTTP response is not OK
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(data => {
      // 取得したデータをディープコピーして保持（リセット用）
      // Deep-copy the fetched data for resetting later
      originalElements = JSON.parse(JSON.stringify({
        nodes: data.nodes,
        edges: data.edges
      }));

      // Cytoscape インスタンスを生成
      // Create a new Cytoscape instance and render the graph
      cyInstance = cytoscape({
        container: document.getElementById('cy'),
        elements: {
          nodes: data.nodes,
          edges: data.edges
        },
        layout: { name: 'preset' },
        minZoom: 0.5,  // ズームアウトの下限 / Minimum zoom level
        maxZoom: 2,    // ズームインの上限 / Maximum zoom level
        style: [
          {
            selector: 'node',
            style: {
              width: '12px',               // ノード幅 / Node width
              height: '12px',              // ノード高さ / Node height
              'background-color': '#000',  // ノード色（黒）/ Node color (black)
              label: 'data(label)',        // ラベルに data.label を表示 / Show data.label as node label
              'font-size': '18px'          // ラベルフォントサイズ / Label font size
            }
          },
          {
            selector: 'edge',
            style: {
              width: 1.5,                  // エッジ幅 / Edge width
              'line-color': '#000'         // エッジ色（黒）/ Edge color (black)
            }
          },
          {
            selector: 'edge[highlighted = "true"]',
            style: {
              width: 1.3,                  // 強調エッジ幅 / Highlighted edge width
              'line-color': '#303030',     // 強調エッジ色（灰色）/ Highlighted edge color (gray)
              'line-style': 'dashed',      // 点線スタイル / Dashed line style
              'line-dash-pattern': [6, 3]  // 点線の長さと間隔 / Dash length and gap
            }
          }
        ]
      });

      // 辺クリックでハイライト切替
      // Toggle edge highlight on click
      cyInstance.on('tap', 'edge', evt => {
        const e = evt.target;
        const currently = e.data('highlighted') === 'true';
        e.data('highlighted', currently ? 'false' : 'true');
      });
    })
    .catch(err => {
      // エラー発生時にコンソールとアラートに出力
      // Log and alert on error
      console.error('[loadGraph] error:', err);
      alert('グラフの読み込みに失敗しました: ' + err.message);
    });
}

// グラフを中央に配置する関数
// Function to re-layout and center the graph
function centering() {
  if (!cyInstance) return;
  cyInstance.layout({ name: 'preset' }).run();
  cyInstance.center();
}

// ページ読み込み後に初期化＆イベント登録
// Initialize on page load and set up event listeners
window.onload = () => {
  // セレクトボックスとボタンの要素を取得
  // Get references to select boxes and draw button
  const typeSelect = document.getElementById('typeSelect');
  const nSelect    = document.getElementById('nSelect');
  const fileSelect = document.getElementById('fileSelect');
  const drawBtn    = document.getElementById('drawBtn');

  // fileSelect を更新する関数
  // Function to update the file list based on current type and n selection
  const updateFileOptions = () => {
    fileSelect.innerHTML = '';  // 既存オプションをクリア / Clear existing options
    dataMap[typeSelect.value][nSelect.value].forEach(f => {
      const opt = document.createElement('option');
      opt.value = f;
      opt.textContent = f;
      fileSelect.appendChild(opt);
    });
  };

  // nSelect を更新する関数
  // Function to update the n list based on current type selection
  const updateNOptions = () => {
    nSelect.innerHTML = '';  // 既存オプションをクリア / Clear existing options
    Object.keys(dataMap[typeSelect.value]).forEach(n => {
      const opt = document.createElement('option');
      opt.value = n;
      opt.textContent = n;
      nSelect.appendChild(opt);
    });
    updateFileOptions();  // ファイルオプションも更新 / Also update file options
  };

  // typeSelect による nSelect 更新イベント
  // Update n options when the type selection changes
  typeSelect.addEventListener('change', updateNOptions);
  // nSelect による fileSelect 更新イベント
  // Update file options when the n selection changes
  nSelect.addEventListener('change', updateFileOptions);

  // Draw ボタン押下時の処理
  // On Draw button click, construct path and load graph
  drawBtn.addEventListener('click', () => {
    const path = `json/${typeSelect.value}/${nSelect.value}/${fileSelect.value}`;
    console.log('[Draw] path=', path);
    loadGraph(path);
  });

  // 初期描画のための初期オプション設定とロード
  // Set initial options and perform first graph load
  // 初期の type と n のオプションを生成 / Populate initial type and n options
  Object.keys(dataMap).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    typeSelect.appendChild(opt);
  });
  updateNOptions();  // n と file のオプションも初期化 / Initialize n and file options

  // 初回ロード / Initial load
  const initPath = `json/${typeSelect.value}/${nSelect.value}/${fileSelect.value}`;
  console.log('[Init] path=', initPath);
  loadGraph(initPath);

  // ラベルの表示状態を保持する変数
  // Variable to store current label visibility
  let labelVisible = true;

  // ラベル表示・非表示ボタンのイベント設定
  // Set up event listener for the "Toggle Labels" button
  const toggleLabelBtn = document.getElementById('toggleLabelBtn');
  toggleLabelBtn.addEventListener('click', () => {
    if (!cyInstance) return;

    labelVisible = !labelVisible;

    // スタイルを更新（labelだけ切り替え）
    // Update node style (toggle label visibility only)
    cyInstance.style()
      .selector('node')
      .style({
        label: labelVisible ? 'data(label)' : '',
        width: '12px',
        height: '12px',
        'background-color': '#000',
        'font-size': '18px'
      })
      .update();
  });

  // SVGダウンロードボタンのイベント
  // Event handler for the SVG download button
  const downloadSvgBtn = document.getElementById('downloadSvgBtn');
  downloadSvgBtn.addEventListener('click', () => {
    if (!cyInstance || typeof cyInstance.svg !== 'function') {
      alert('SVGダウンロード機能が利用できません。');
      return;
    }
    // 元のSVGを取得
    // Retrieve the original SVG
    const svgStr = cyInstance.svg({ scale: 1, full: true });
    // 座標を小数点以下7桁に丸め
    // Round coordinates to seven decimal places
    const roundedSvg = svgStr.replace(/-?\\d+\\.\\d+/g, match => parseFloat(match).toFixed(7));
    // Blob化してダウンロード
    // Create a Blob and trigger the download
    const blob = new Blob([roundedSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${getCurrentDateTimeString()}.svg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  // 現在日時をファイル名用に生成
  // Generate a timestamp string for the filename
  function getCurrentDateTimeString() {
    const d = new Date();
    const pad = n => n.toString().padStart(2, '0');
    return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
  }
};