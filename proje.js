                    function gosterBildirim() {
                      const bildirim = document.getElementById("bildirim");
                      bildirim.style.display = "block";
                
                      setTimeout(() => {
                        bildirim.style.display = "none";
                      }, 5000); // 5 saniye göster
                    }
                
                    // İlk bildirim
                    setTimeout(gosterBildirim, 2000); // 2 saniye sonra başla
                
                    // Her 2 dakikada bir tekrar göster
                    setInterval(gosterBildirim, 2 * 60 * 1000);