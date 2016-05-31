wx.config({
          debug: true,
          appId: "{$signature['appid']}",
          timestamp: "{$signature['timeStamp]}",
          nonceStr: "{$signature['nonceStr']}",
          signature: "{$signature['signature']}",
          jsApiList: [
                        'addCard'
                     ]
});

