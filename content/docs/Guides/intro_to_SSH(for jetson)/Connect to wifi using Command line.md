---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRF6E6B%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEX1TmkESRw9AAgmlChZuRTUCaX4%2BCo1UwJ7h9UpdXgUAiAIH33s8I6u9%2B%2Fg%2BnBMyd2tHbu67a8XjdIppHImPIPV%2FSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMg226vamnoMw%2BU0haKtwD%2FnI5uCIqLHTNqLYT7fcrN9MftxFMfZJJ3tnS%2FRUlfNSlzx%2B8Swqcm5KVEQJDWaCsf8z5FsUgE2Y%2FXySnPcFogqVAWxZlPrMGafuX6ftrRV%2B%2BdM67PCQAAQWkXQ9nl7dPf5nlmySkfc0uroO3HVbd9TFHsI2Wk0qItn%2BTc73X4p5patExQCKXBp5EyuLRdKPop2Z0TOdJ1bqqfP2pXRHEesr2unZ9bcWUM6kz6JBg%2FofMEtybX%2BEDCwZY%2FSDXaeM3Uy3lSZQc6GR8mcgRR3iatPTYk8qI%2B5EXlBaKG9AuxKtWpVlTbiCXRrVT%2FcIyS10Oldz2aP4y9KPFYmcAE9KsYpvTBBTyqvAPqXu1lY82GwV%2F3YA20yirvydU2Q2CC2MjPwUZt6CCSIuJuuvadqzhd2dTtaayEgdNe7b%2FzXh1UAIVNb1xLFMoSFCmv6JqaCh5fcdgG1OV8LDOmNG1PWpaTLWkqQ9x%2BwTrU0NbbsD1bpJR47s1HcDhoSf8N8nnSon2IHoWNJ%2BHXj2E0i7HfFfo8ctp5IMFAnCkLMS0D%2BiYBYxd%2Fa6TsYniA06nLkL5fVFZlQ4A4BKPcWJp%2Bkpam1gGOLDQ93krCLKVVoMldz50yYNeRfbx1cdNnHm0O%2Bsw25b4yQY6pgEh9gK0hbKHDXCFShacG250VJxXvDgoAk6AaFM4siUjf24qnpke%2BizAi9nzY9KTH05H4Rc0YI%2FautpJP3L5iAwNSV3I%2F3IHZHgLNoqghg2FoQJV3lF2V7VXgR%2FeSqs6uNFqPseCH1jan9v4xuBfRAUI5H8Hua7f%2FZWnJn1onofD9Y6%2BQwBSRdCOplkY4nPQcfUY9%2B4H4AaNQGQSypXI1Q8QTDTWlT%2Fl&X-Amz-Signature=b7e4df893ffe4ef07fe2105d9c30d1d12ca578fe6dbc8a12c182d35403859766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
