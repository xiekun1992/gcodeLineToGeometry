const data = [0,0,0,-10,-10,0,-10,-10,0,-10,-10,0,-10,-10,0,-10,-10,0,-10,-10,0,153.94900512695312,178.0780029296875,0.2800000011920929,153.94900512695312,178.0780029296875,0.2800000011920929,153.94900512695312,178.0780029296875,0.2800000011920929,154.48599243164062,177.61399841308594,0.2800000011920929,155.07200622558594,177.21400451660156,0.2800000011920929,155.69900512695312,176.8820037841797,0.2800000011920929,156.36000061035156,176.6230010986328,0.2800000011920929,157.04600524902344,176.44000244140625,0.2800000011920929,157.7469940185547,176.3350067138672,0.2800000011920929,158.4709930419922,176.30099487304688,0.2800000011920929,158.6479949951172,176.2989959716797,0.2800000011920929,160.97500610351562,176.2989959716797,0.2800000011920929,161.76300048828125,176.30999755859375,0.2800000011920929,162.4709930419922,176.36000061035156,0.2800000011920929,163.16900634765625,176.48899841308594,0.2800000011920929,163.84800720214844,176.6959991455078,0.2800000011920929,164.49899291992188,176.97799682617188,0.2800000011920929,165.11399841308594,177.33200073242188,0.2800000011920929,165.68600463867188,177.7519989013672,0.2800000011920929,166.20700073242188,178.23399353027344,0.2800000011920929,166.6699981689453,178.77200317382812,0.2800000011920929,167.07000732421875,179.35800170898438,0.2800000011920929,167.4010009765625,179.98599243164062,0.2800000011920929,167.66000366210938,180.64700317382812,0.2800000011920929,167.8419952392578,181.33200073242188,0.2800000011920929,167.94700622558594,182.03399658203125,0.2800000011920929,167.97999572753906,182.7519989013672,0.2800000011920929,167.98199462890625,182.9290008544922,0.2800000011920929,167.98199462890625,185.30499267578125,0.2800000011920929,167.97300720214844,186.03199768066406,0.2800000011920929,167.9239959716797,186.74000549316406,0.2800000011920929,167.79600524902344,187.43800354003906,0.2800000011920929,167.58999633789062,188.11700439453125,0.2800000011920929,167.3090057373047,188.7689971923828,0.2800000011920929,166.95700073242188,189.38499450683594,0.2800000011920929,166.53700256347656,189.95700073242188,0.2800000011920929,166.05599975585938,190.47900390625,0.2800000011920929,165.52000427246094,190.9429931640625,0.2800000011920929,164.9340057373047,191.343994140625,0.2800000011920929,164.3070068359375,191.677001953125,0.2800000011920929,163.64700317382812,191.93699645996094,0.2800000011920929,162.96200561523438,192.12100219726562,0.2800000011920929,162.25999450683594,192.2270050048828,0.2800000011920929,161.5290069580078,192.26100158691406,0.2800000011920929,161.3520050048828,192.26300048828125,0.2800000011920929,158.94400024414062,192.26199340820312,0.2800000011920929,158.24600219726562,192.2530059814453,0.2800000011920929,157.53799438476562,192.20399475097656,0.2800000011920929,156.83999633789062,192.0760040283203,0.2800000011920929,156.16099548339844,191.8699951171875,0.2800000011920929,155.50900268554688,191.58900451660156,0.2800000011920929,154.89300537109375,191.23599243164062,0.2800000011920929,154.3209991455078,190.8159942626953,0.2800000011920929,153.8000030517578,190.3350067138672,0.2800000011920929,153.33599853515625,189.79800415039062,0.2800000011920929,152.93499755859375,189.21200561523438,0.2800000011920929,152.60299682617188,188.5850067138672,0.2800000011920929,152.34300231933594,187.9250030517578,0.2800000011920929,152.16000366210938,187.23899841308594,0.2800000011920929,152.0540008544922,186.53799438476562,0.2800000011920929,152.02000427246094,185.79100036621094,0.2800000011920929,152.01800537109375,185.62100219726562,0.2800000011920929,152.0189971923828,183.18800354003906,0.2800000011920929,152.0279998779297,182.5229949951172,0.2800000011920929,152.07699584960938,181.81500244140625,0.2800000011920929,152.20599365234375,181.11700439453125,0.2800000011920929,152.41299438476562,180.43800354003906,0.2800000011920929,152.69400024414062,179.78700256347656,0.2800000011920929,153.0469970703125,179.17100524902344,0.2800000011920929,153.4669952392578,178.5989990234375,0.2800000011920929,153.94900512695312,178.0780029296875,0.2800000011920929,153.94900512695312,178.0780029296875,0.2800000011920929,154.53500366210938,178.3520050048828,0.2800000011920929,154.53500366210938,178.3520050048828,0.2800000011920929,155.06500244140625,177.9340057373047,0.2800000011920929,155.63999938964844,177.58099365234375,0.2800000011920929,156.2530059814453,177.2989959716797,0.2800000011920929,156.89500427246094,177.09100341796875,0.2800000011920929,157.5570068359375,176.9600067138672,0.2800000011920929,158.16700744628906,176.91000366210938,0.2800000011920929,158.6479949951172,176.8990020751953,0.2800000011920929,160.97500610351562,176.8990020751953,0.2800000011920929,161.7550048828125,176.91000366210938,0.2800000011920929,162.42799377441406,176.95899963378906,0.2800000011920929,163.08999633789062,177.08799743652344,0.2800000011920929,163.73300170898438,177.29400634765625,0.2800000011920929,164.3470001220703,177.5749969482422,0.2800000011920929,164.92300415039062,177.92599487304688,0.2800000011920929,165.45399475097656,178.34300231933594,0.2800000011920929,165.9320068359375,178.82000732421875,0.2800000011920929,166.35000610351562,179.35000610351562,0.2800000011920929,166.70199584960938,179.92599487304688,0.2800000011920929,166.98399353027344,180.53900146484375,0.2800000011920929,167.1909942626953,181.1820068359375,0.2800000011920929,167.3209991455078,181.843994140625,0.2800000011920929,167.37100219726562,182.44900512695312,0.2800000011920929,167.3820037841797,182.9290008544922,0.2800000011920929,167.3820037841797,185.29800415039062,0.2800000011920929,167.3730010986328,186.02499389648438,0.2800000011920929,167.32400512695312,186.697998046875,0.2800000011920929,167.19700622558594,187.36099243164062,0.2800000011920929,166.99200439453125,188.00399780273438,0.2800000011920929,166.71200561523438,188.6179962158203,0.2800000011920929,166.36199951171875,189.19500732421875,0.2800000011920929,165.9459991455078,189.7270050048828,0.2800000011920929,165.47000122070312,190.2050018310547,0.2800000011920929,164.9409942626953,190.62399291992188,0.2800000011920929,164.36599731445312,190.97799682617188,0.2800000011920929,163.7530059814453,191.26100158691406,0.2800000011920929,163.11099243164062,191.47000122070312,0.2800000011920929,162.44900512695312,191.6009979248047,0.2800000011920929,161.83299255371094,191.65199279785156,0.2800000011920929,161.3520050048828,191.66299438476562,0.2800000011920929,158.95199584960938,191.66299438476562,0.2800000011920929,158.25399780273438,191.6540069580078,0.2800000011920929,157.5800018310547,191.60499572753906,0.2800000011920929,156.91799926757812,191.4770050048828,0.2800000011920929,156.27499389648438,191.27200317382812,0.2800000011920929,155.66000366210938,190.99200439453125,0.2800000011920929,155.08399963378906,190.64100646972656,0.2800000011920929,154.552001953125,190.22500610351562,0.2800000011920929,154.07400512695312,189.74899291992188,0.2800000011920929,153.65499877929688,189.218994140625,0.2800000011920929,153.302001953125,188.6439971923828,0.2800000011920929,153.0189971923828,188.031005859375,0.2800000011920929,152.81100463867188,187.38900756835938,0.2800000011920929,152.67999267578125,186.7270050048828,0.2800000011920929,152.62899780273438,186.10800170898438,0.2800000011920929,152.6179962158203,185.62100219726562,0.2800000011920929,152.61900329589844,183.1959991455078,0.2800000011920929,152.6280059814453,182.531005859375,0.2800000011920929,152.677001953125,181.85800170898438,0.2800000011920929,152.80499267578125,181.19500732421875,0.2800000011920929,153.01100158691406,180.552001953125,0.2800000011920929,153.29100036621094,179.93800354003906,0.2800000011920929,153.64199829101562,179.36199951171875,0.2800000011920929,154.05799865722656,178.8300018310547,0.2800000011920929,154.53500366210938,178.3520050048828,0.2800000011920929,154.53500366210938,178.3520050048828,0.2800000011920929,154.6479949951172,179.0760040283203,0.2800000011920929,154.6479949951172,179.0760040283203,0.2800000011920929,155.11900329589844,178.6439971923828,0.2800000011920929,155.63900756835938,178.2740020751953,0.2800000011920929,156.20199584960938,177.9720001220703,0.2800000011920929,156.7969970703125,177.7429962158203,0.2800000011920929,157.41700744628906,177.58999633789062,0.2800000011920929,158.1840057373047,177.50999450683594,0.2800000011920929,158.6479949951172,177.49899291992188,0.2800000011920929,160.97500610351562,177.49899291992188,0.2800000011920929,161.74600219726562,177.50999450683594,0.2800000011920929,162.38299560546875,177.5590057373047,0.2800000011920929,163.00799560546875,177.68699645996094,0.2800000011920929,163.61300659179688,177.89199829101562,0.2800000011920929,164.18699645996094,178.17100524902344,0.2800000011920929,164.7209930419922,178.52000427246094,0.2800000011920929,165.20799255371094,178.93299865722656,0.2800000011920929,165.63999938964844,179.4040069580078,0.2800000011920929,166.00900268554688,179.9239959716797,0.2800000011920929,166.31100463867188,180.48699951171875,0.2800000011920929,166.53900146484375,181.08299255371094,0.2800000011920929,166.69200134277344,181.7030029296875,0.2800000011920929,166.77099609375,182.46600341796875,0.2800000011920929,166.78199768066406,182.9290008544922,0.2800000011920929,166.78199768066406,185.2899932861328,0.2800000011920929,166.7729949951172,186.01699829101562,0.2800000011920929,166.72500610351562,186.6540069580078,0.2800000011920929,166.59800720214844,187.2790069580078,0.2800000011920929,166.3939971923828,187.88400268554688,0.2800000011920929,166.11500549316406,188.45899963378906,0.2800000011920929,165.76800537109375,188.99400329589844,0.2800000011920929,165.3560028076172,189.48199462890625,0.2800000011920929,164.88600158691406,189.9149932861328,0.2800000011920929,164.36599731445312,190.28500366210938,0.2800000011920929,163.8040008544922,190.58799743652344,0.2800000011920929,163.20799255371094,190.81700134277344,0.2800000011920929,162.58900451660156,190.9709930419922,0.2800000011920929,161.8159942626953,191.052001953125,0.2800000011920929,161.3520050048828,191.06300354003906,0.2800000011920929,158.95899963378906,191.06300354003906,0.2800000011920929,158.26100158691406,191.0540008544922,0.2800000011920929,157.625,191.0050048828125,0.2800000011920929,156.99899291992188,190.8780059814453,0.2800000011920929,156.3939971923828,190.6739959716797,0.2800000011920929,155.82000732421875,190.39500427246094,0.2800000011920929,155.28399658203125,190.0469970703125,0.2800000011920929,154.7969970703125,189.63499450683594,0.2800000011920929,154.36500549316406,189.1649932861328,0.2800000011920929,153.9949951171875,188.64500427246094,0.2800000011920929,153.69200134277344,188.08200073242188,0.2800000011920929,153.46299743652344,187.48699951171875,0.2800000011920929,153.3090057373047,186.86700439453125,0.2800000011920929,153.22900390625,186.0919952392578,0.2800000011920929,153.21800231933594,185.62100219726562,0.2800000011920929,153.21800231933594,183.20399475097656,0.2800000011920929,153.2270050048828,182.53900146484375,0.2800000011920929,153.2760009765625,181.90199279785156,0.2800000011920929,153.4040069580078,181.27699279785156,0.2800000011920929,153.60899353027344,180.6719970703125,0.2800000011920929,153.88699340820312,180.09800720214844,0.2800000011920929,154.23599243164062,179.56300354003906,0.2800000011920929,154.6479949951172,179.0760040283203,0.2800000011920929,154.6479949951172,179.0760040283203,0.2800000011920929,155.23599243164062,179.33700561523438,0.2800000011920929,155.23599243164062,179.33700561523438,0.2800000011920929,155.69900512695312,178.9550018310547,0.2800000011920929,156.20799255371094,178.63800048828125,0.2800000011920929,156.75399780273438,178.39199829101562,0.2800000011920929,157.32899475097656,178.22000122070312,0.2800000011920929,158.2010040283203,178.11000061035156,0.2800000011920929,158.6479949951172,178.0989990234375,0.2800000011920929,161.03900146484375,178.0989990234375,0.2800000011920929,161.73699951171875,178.10899353027344,0.2800000011920929,162.3350067138672,178.1580047607422,0.2800000011920929,162.92100524902344,178.28599548339844,0.2800000011920929,163.48500061035156,178.49000549316406,0.2800000011920929,164.01600646972656,178.76699829101562,0.2800000011920929,164.50599670410156,179.11300659179688,0.2800000011920929,164.9459991455078,179.52099609375,0.2800000011920929,165.3280029296875,179.98300170898438,0.2800000011920929,165.6439971923828,180.4929962158203,0.2800000011920929,165.88999938964844,181.0399932861328,0.2800000011920929,166.06199645996094,181.61399841308594,0.2800000011920929,166.17100524902344,182.48199462890625,0.2800000011920929,166.1820068359375,182.9290008544922,0.2800000011920929,166.1820068359375,185.2830047607422,0.2800000011920929,166.17300415039062,186.00999450683594,0.2800000011920929,166.125,186.60699462890625,0.2800000011920929,165.99899291992188,187.19400024414062,0.2800000011920929,165.79600524902344,187.75799560546875,0.2800000011920929,165.5189971923828,188.2899932861328,0.2800000011920929,165.1739959716797,188.781005859375,0.2800000011920929,164.76699829101562,189.2209930419922,0.2800000011920929,164.30599975585938,189.60400390625,0.2800000011920929,163.7969970703125,189.92100524902344,0.2800000011920929,163.25100708007812,190.16799926757812,0.2800000011920929,162.67599487304688,190.34100341796875,0.2800000011920929,161.7989959716797,190.45199584960938,0.2800000011920929,161.3520050048828,190.46299743652344,0.2800000011920929,158.9669952392578,190.46299743652344,0.2800000011920929,158.2689971923828,190.45399475097656,0.2800000011920929,157.67100524902344,190.406005859375,0.2800000011920929,157.0850067138672,190.2790069580078,0.2800000011920929,156.52099609375,190.0760040283203,0.2800000011920929,155.98899841308594,189.7989959716797,0.2800000011920929,155.49899291992188,189.45399475097656,0.2800000011920929,155.05799865722656,189.0469970703125,0.2800000011920929,154.67599487304688,188.5850067138672,0.2800000011920929,154.35899353027344,188.0760040283203,0.2800000011920929,154.11199951171875,187.5290069580078,0.2800000011920929,153.94000244140625,186.9550018310547,0.2800000011920929,153.82899475097656,186.0760040283203,0.2800000011920929,153.8179931640625,185.62100219726562,0.2800000011920929,153.8179931640625,183.21200561523438,0.2800000011920929,153.82699584960938,182.5469970703125,0.2800000011920929,153.875,181.94900512695312,0.2800000011920929,154.0030059814453,181.36300659179688,0.2800000011920929,154.20599365234375,180.7989959716797,0.2800000011920929,154.48399353027344,180.26800537109375,0.2800000011920929,154.82899475097656,179.77699279785156,0.2800000011920929,155.23599243164062,179.33700561523438,0.2800000011920929,155.23599243164062,179.33700561523438,0.2800000011920929,155.8209991455078,179.61900329589844,0.2800000011920929,155.8209991455078,179.61900329589844,0.2800000011920929,156.2740020751953,179.29200744628906,0.2800000011920929,156.76800537109375,179.0330047607422,0.2800000011920929,157.29400634765625,178.8470001220703,0.2800000011920929,157.8419952392578,178.73800659179688,0.2800000011920929,158.53900146484375,178.7010040283203,0.2800000011920929,158.6479949951172,178.69900512695312,0.2800000011920929,161.031005859375,178.69900512695312,0.2800000011920929,161.72900390625,178.70899963378906,0.2800000011920929,162.28500366210938,178.7570037841797,0.2800000011920929,162.82899475097656,178.88400268554688,0.2800000011920929,163.3489990234375,179.08700561523438,0.2800000011920929,163.83399963378906,179.36300659179688,0.2800000011920929,164.2760009765625,179.70399475097656,0.2800000011920929,164.66400146484375,180.1060028076172,0.2800000011920929,164.99000549316406,180.55799865722656,0.2800000011920929,165.24899291992188,181.05299377441406,0.2800000011920929,165.43499755859375,181.57899475097656,0.2800000011920929,165.54299926757812,182.1269989013672,0.2800000011920929,165.5800018310547,182.81900024414062,0.2800000011920929,165.58200073242188,182.9290008544922,0.2800000011920929,165.58200073242188,185.27499389648438,0.2800000011920929,165.572998046875,186.0019989013672,0.2800000011920929,165.5260009765625,186.5590057373047,0.2800000011920929,165.39999389648438,187.1020050048828,0.2800000011920929,165.197998046875,187.6230010986328,0.2800000011920929,164.9239959716797,188.10899353027344,0.2800000011920929,164.58299255371094,188.55099487304688,0.2800000011920929,164.1820068359375,188.94000244140625,0.2800000011920929,163.72999572753906,189.26699829101562,0.2800000011920929,163.23599243164062,189.52699279785156,0.2800000011920929,162.7100067138672,189.71400451660156,0.2800000011920929,162.16299438476562,189.822998046875,0.2800000011920929,161.46099853515625,189.86099243164062,0.2800000011920929,161.3520050048828,189.86300659179688,0.2800000011920929,158.97500610351562,189.86300659179688,0.2800000011920929,158.27699279785156,189.85400390625,0.2800000011920929,157.72000122070312,189.8070068359375,0.2800000011920929,157.177001953125,189.68099975585938,0.2800000011920929,156.656005859375,189.47799682617188,0.2800000011920929,156.1699981689453,189.20399475097656,0.2800000011920929,155.72900390625,188.86199951171875,0.2800000011920929,155.33999633789062,188.46200561523438,0.2800000011920929,155.01300048828125,188.00999450683594,0.2800000011920929,154.7530059814453,187.51499938964844,0.2800000011920929,154.56700134277344,186.98899841308594,0.2800000011920929,154.45799255371094,186.44200134277344,0.2800000011920929,154.41900634765625,185.7259979248047,0.2800000011920929,154.41799926757812,183.22000122070312,0.2800000011920929,154.427001953125,182.55499267578125,0.2800000011920929,154.47500610351562,181.99899291992188,0.2800000011920929,154.6009979248047,181.4550018310547,0.2800000011920929,154.8040008544922,180.93499755859375,0.2800000011920929,155.07899475097656,180.44900512695312,0.2800000011920929,155.4199981689453,180.00799560546875,0.2800000011920929,155.8209991455078,179.61900329589844,0.2800000011920929,155.8209991455078,179.61900329589844,0.2800000011920929,156.00999450683594,180.25900268554688,0.2800000011920929,156.00999450683594,180.25900268554688,0.2800000011920929,156.40199279785156,179.92799377441406,0.2800000011920929,156.84100341796875,179.66099548339844,0.2800000011920929,157.3159942626953,179.4669952392578,0.2800000011920929,157.8159942626953,179.34800720214844,0.2800000011920929,158.55599975585938,179.3000030517578,0.2800000011920929,161.02200317382812,179.2989959716797,0.2800000011920929,161.72000122070312,179.3090057373047,0.2800000011920929,162.23199462890625,179.35699462890625,0.2800000011920929,162.72900390625,179.48300170898438,0.2800000011920929,163.2010040283203,179.6840057373047,0.2800000011920929,163.63699340820312,179.95700073242188,0.2800000011920929,164.0240020751953,180.29299926757812,0.2800000011920929,164.35499572753906,180.68600463867188,0.2800000011920929,164.62100219726562,181.125,0.2800000011920929,164.81500244140625,181.6009979248047,0.2800000011920929,164.9340057373047,182.10000610351562,0.2800000011920929,164.9810028076172,182.83599853515625,0.2800000011920929,164.98199462890625,185.26800537109375,0.2800000011920929,164.97300720214844,185.9949951171875,0.2800000011920929,164.92599487304688,186.50599670410156,0.2800000011920929,164.80099487304688,187.00399780273438,0.2800000011920929,164.6009979248047,187.4770050048828,0.2800000011920929,164.32899475097656,187.91200256347656,0.2800000011920929,163.9929962158203,188.30099487304688,0.2800000011920929,163.6009979248047,188.6320037841797,0.2800000011920929,163.16200256347656,188.8990020751953,0.2800000011920929,162.68800354003906,189.093994140625,0.2800000011920929,162.18800354003906,189.21400451660156,0.2800000011920929,161.44400024414062,189.26199340820312,0.2800000011920929,158.98199462890625,189.26300048828125,0.2800000011920929,158.28399658203125,189.25399780273438,0.2800000011920929,157.7729949951172,189.20700073242188,0.2800000011920929,157.27499389648438,189.08200073242188,0.2800000011920929,156.80299377441406,188.88099670410156,0.2800000011920929,156.36700439453125,188.60899353027344,0.2800000011920929,155.97900390625,188.2729949951172,0.2800000011920929,155.6479949951172,187.88099670410156,0.2800000011920929,155.38099670410156,187.44200134277344,0.2800000011920929,155.18600463867188,186.9669952392578,0.2800000011920929,155.06700134277344,186.46800231933594,0.2800000011920929,155.0189971923828,185.7100067138672,0.2800000011920929,155.01800537109375,183.22799682617188,0.2800000011920929,155.02699279785156,182.56300354003906,0.2800000011920929,155.07400512695312,182.052001953125,0.2800000011920929,155.1999969482422,181.5540008544922,0.2800000011920929,155.4010009765625,181.08200073242188,0.2800000011920929,155.67300415039062,180.64700317382812,0.2800000011920929,156.00999450683594,180.25900268554688,0.2800000011920929,156.00999450683594,180.25900268554688,0.2800000011920929,156.00999450683594,180.25900268554688,0.2800000011920929,159.23199462890625,181.9340057373047,0.2800000011920929,159.23199462890625,183.51300048828125,0.2800000011920929,160.71200561523438,184.9929962158203,0.2800000011920929,160.78199768066406,185.06300354003906,0.2800000011920929,160.78199768066406,185.06300354003906,0.2800000011920929,160.78199768066406,185.06300354003906,0.2800000011920929,159.21800231933594,185.06300354003906,0.2800000011920929,159.21800231933594,183.49899291992188,0.2800000011920929,160.78199768066406,183.49899291992188,0.2800000011920929,160.78199768066406,185.06300354003906,0.2800000011920929,160.78199768066406,185.06300354003906,0.2800000011920929,161.3820037841797,185.66299438476562,0.2800000011920929,161.3820037841797,185.66299438476562,0.2800000011920929,158.6179962158203,185.66299438476562,0.2800000011920929,158.6179962158203,182.8990020751953,0.2800000011920929,161.3820037841797,182.8990020751953,0.2800000011920929,161.3820037841797,185.66299438476562,0.2800000011920929,161.3820037841797,185.66299438476562,0.2800000011920929,161.1820068359375,185.66299438476562,0.2800000011920929,160.71200561523438,184.9929962158203,0.2800000011920929,160.1750030517578,184.78199768066406,0.2800000011920929,160.1750030517578,184.78199768066406,0.2800000011920929,159.4969940185547,184.10499572753906,0.2800000011920929,159.4969940185547,184.10499572753906,0.2800000011920929,160.0189971923828,183.7779998779297,0.2800000011920929,160.0189971923828,183.7779998779297,0.2800000011920929,160.50100708007812,184.25999450683594,0.2800000011920929,160.50100708007812,184.25999450683594,0.2800000011920929,160.1820068359375,184.25999450683594,0.2800000011920929,160.1820068359375,184.25999450683594,1.2799999713897705,161.08200073242188,185.36300659179688,1.2799999713897705,161.08200073242188,185.36300659179688,1.2799999713897705,158.91799926757812,185.36300659179688,1.2799999713897705,158.91799926757812,183.19900512695312,1.2799999713897705,161.08200073242188,183.19900512695312,1.2799999713897705,161.08200073242188,185.36300659179688,1.2799999713897705,161.08200073242188,185.36300659179688,1.2799999713897705,161.48199462890625,185.76300048828125,1.2799999713897705,161.48199462890625,185.76300048828125,1.2799999713897705,158.51800537109375,185.76300048828125,1.2799999713897705,158.51800537109375,182.7989959716797,1.2799999713897705,161.48199462890625,182.7989959716797,1.2799999713897705,161.48199462890625,185.76300048828125,1.2799999713897705,161.48199462890625,185.76300048828125,1.2799999713897705,161.28199768066406,185.76300048828125,1.2799999713897705,161.01199340820312,185.29299926757812,1.2799999713897705,160.4510040283203,185.1820068359375,1.2799999713897705,160.4510040283203,185.1820068359375,1.2799999713897705,160.90199279785156,184.7310028076172,1.2799999713897705,160.90199279785156,184.7310028076172,1.2799999713897705,160.90199279785156,184.1649932861328,1.2799999713897705,160.90199279785156,184.1649932861328,1.2799999713897705,159.88499450683594,185.1820068359375,1.2799999713897705,159.88499450683594,185.1820068359375,1.2799999713897705,159.31900024414062,185.1820068359375,1.2799999713897705,159.31900024414062,185.1820068359375,1.2799999713897705,160.90199279785156,183.60000610351562,1.2799999713897705,160.90199279785156,183.60000610351562,1.2799999713897705,160.55799865722656,183.3780059814453,1.2799999713897705,160.55799865722656,183.3780059814453,1.2799999713897705,159.09800720214844,184.83799743652344,1.2799999713897705,159.09800720214844,184.83799743652344,1.2799999713897705,159.09800720214844,184.27200317382812,1.2799999713897705,159.09800720214844,184.27200317382812,1.2799999713897705,159.99200439453125,183.3780059814453,1.2799999713897705,159.99200439453125,183.3780059814453,1.2799999713897705,159.427001953125,183.3780059814453,1.2799999713897705,159.427001953125,183.3780059814453,1.2799999713897705,159.09800720214844,183.70700073242188,1.2799999713897705,159.09800720214844,183.70700073242188,1.2799999713897705,159.3179931640625,183.70700073242188,1.2799999713897705,159.3179931640625,183.70700073242188,2.2799999713897705,161.01199340820312,185.29299926757812,2.2799999713897705,161.08200073242188,185.36300659179688,2.2799999713897705,161.08200073242188,185.36300659179688,2.2799999713897705,158.91799926757812,185.36300659179688,2.2799999713897705,158.91799926757812,183.19900512695312,2.2799999713897705,161.08200073242188,183.19900512695312,2.2799999713897705,161.08200073242188,185.36300659179688,2.2799999713897705,161.08200073242188,185.36300659179688,2.2799999713897705,161.48199462890625,185.76300048828125,2.2799999713897705,161.48199462890625,185.76300048828125,2.2799999713897705,158.51800537109375,185.76300048828125,2.2799999713897705,158.51800537109375,182.7989959716797,2.2799999713897705,161.48199462890625,182.7989959716797,2.2799999713897705,161.48199462890625,185.76300048828125,2.2799999713897705,161.48199462890625,185.76300048828125,2.2799999713897705,161.28199768066406,185.76300048828125,2.2799999713897705,161.01199340820312,185.29299926757812,2.2799999713897705,159.16000366210938,185.1820068359375,2.2799999713897705,159.16000366210938,185.1820068359375,2.2799999713897705,159.0970001220703,185.11900329589844,2.2799999713897705,159.0970001220703,185.11900329589844,2.2799999713897705,159.0970001220703,184.55299377441406,2.2799999713897705,159.0970001220703,184.55299377441406,2.2799999713897705,159.7259979248047,185.1820068359375,2.2799999713897705,159.7259979248047,185.1820068359375,2.2799999713897705,160.29100036621094,185.1820068359375,2.2799999713897705,160.29100036621094,185.1820068359375,2.2799999713897705,159.0970001220703,183.98699951171875,2.2799999713897705,159.0970001220703,183.98699951171875,2.2799999713897705,159.0970001220703,183.4219970703125,2.2799999713897705,159.0970001220703,183.4219970703125,2.2799999713897705,160.85699462890625,185.1820068359375,2.2799999713897705,160.85699462890625,185.1820068359375,2.2799999713897705,160.90199279785156,184.66000366210938,2.2799999713897705,160.90199279785156,184.66000366210938,2.2799999713897705,159.61900329589844,183.3780059814453,2.2799999713897705,159.61900329589844,183.3780059814453,2.2799999713897705,160.18499755859375,183.3780059814453,2.2799999713897705,160.18499755859375,183.3780059814453,2.2799999713897705,160.90199279785156,184.09500122070312,2.2799999713897705,160.90199279785156,184.09500122070312,2.2799999713897705,160.90199279785156,183.5290069580078,2.2799999713897705,160.90199279785156,183.5290069580078,2.2799999713897705,160.75,183.3780059814453,2.2799999713897705,160.75,183.3780059814453,2.2799999713897705,160.6820068359375,183.5989990234375,2.2799999713897705,160.6820068359375,183.5989990234375,3.2799999713897705,161.01199340820312,185.29299926757812,3.2799999713897705,161.08200073242188,185.36300659179688,3.2799999713897705,161.08200073242188,185.36300659179688,3.2799999713897705,158.91799926757812,185.36300659179688,3.2799999713897705,158.91799926757812,183.19900512695312,3.2799999713897705,161.08200073242188,183.19900512695312,3.2799999713897705,161.08200073242188,185.36300659179688,3.2799999713897705,161.08200073242188,185.36300659179688,3.2799999713897705,161.48199462890625,185.76300048828125,3.2799999713897705,161.48199462890625,185.76300048828125,3.2799999713897705,158.51800537109375,185.76300048828125,3.2799999713897705,158.51800537109375,182.7989959716797,3.2799999713897705,161.48199462890625,182.7989959716797,3.2799999713897705,161.48199462890625,185.76300048828125,3.2799999713897705,161.48199462890625,185.76300048828125,3.2799999713897705,161.28199768066406,185.76300048828125,3.2799999713897705,161.01199340820312,185.29299926757812,3.2799999713897705,160.4510040283203,185.1820068359375,3.2799999713897705,160.4510040283203,185.1820068359375,3.2799999713897705,160.90199279785156,184.7310028076172,3.2799999713897705,160.90199279785156,184.7310028076172,3.2799999713897705,160.90199279785156,184.1649932861328,3.2799999713897705,160.90199279785156,184.1649932861328,3.2799999713897705,159.88499450683594,185.1820068359375,3.2799999713897705,159.88499450683594,185.1820068359375,3.2799999713897705,159.31900024414062,185.1820068359375,3.2799999713897705,159.31900024414062,185.1820068359375,3.2799999713897705,160.90199279785156,183.60000610351562,3.2799999713897705,160.90199279785156,183.60000610351562,3.2799999713897705,160.55799865722656,183.3780059814453,3.2799999713897705,160.55799865722656,183.3780059814453,3.2799999713897705,159.09800720214844,184.83799743652344,3.2799999713897705,159.09800720214844,184.83799743652344,3.2799999713897705,159.09800720214844,184.27200317382812,3.2799999713897705,159.09800720214844,184.27200317382812,3.2799999713897705,159.99200439453125,183.3780059814453,3.2799999713897705,159.99200439453125,183.3780059814453,3.2799999713897705,159.427001953125,183.3780059814453,3.2799999713897705,159.427001953125,183.3780059814453,3.2799999713897705,159.09800720214844,183.70700073242188,3.2799999713897705,159.09800720214844,183.70700073242188,3.2799999713897705,159.3179931640625,183.70700073242188,3.2799999713897705,159.3179931640625,183.70700073242188,3.2799999713897705,159.3179931640625,183.70700073242188,3.2799999713897705,159.3179931640625,183.70700073242188,330,0,183.70700073242188,330,0,350,330]