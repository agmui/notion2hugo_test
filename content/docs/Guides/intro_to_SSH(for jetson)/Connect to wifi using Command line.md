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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HDGHRZ%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCE0vFa4vcGDaGKcdUxLCAUpK4Ct9062bFhXDJ8zR1eFgIhAJaQDMVC3U2WHlpeDIk3yeaN1o8rvhYeVme4MrGxKrynKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igypu8CK0TL2%2BbMHrF0q3AMZNajBwEtmiIQYGmNKrASfp%2FOws1W%2F7hj8Qz%2FuwQ0LxXK1MQpBj7VJc7Jp5sIg4CimiTnOxIElxZlqscTsTkB6irvKwo8lruwf1J9yBhiZ1b4L8HvSIIUpI42L9PSeUeUzJizEwBCDS9XOGx4vPsPYu1TCNzuZyM2MAx3cifnnsFc4pGja3HZllvryRJZmcAO7KtTYm2RSw74udtdAFLdZp1JpS%2BcmrJKQbZabLUYZBgT%2BLxxV0tV%2FsTeSDTfNe8OPVuy%2BojhUatb%2BqzQ7gDyOUFBUsnEqc%2B2XVsQUdSg1ZJLqf8r7RlmZNRrHbn3kJktjPgyt59%2BbEB2r2P46tNDmHLeyKtQfFASdLNcSe7ucajhtdK0Lw9huIleetlPnugqCFh%2B0Hw8kRDNcVgKK0qgN8lV%2F02ii6zhXJqhJwULv3e3cJ18CeXdWN7%2FtwYxoizaYOUtkD21G0NZ7j5EAaftsYRpFifn7alATG4AHDVajzM84A7mGNlqBTZryQ5KCzo8%2FTL36OAixlRcsUTISWjBgqouixfpTT3B5Eug%2B6x5zziks8ydQhwZXdAKOrQAlqzuYtDr68Vp6l%2By3lqwC075GRs40HtqtWZYg94Q5RV84KbRBrUfgBRwE5Ft0LDDp1e3JBjqkARsipY5G42zvHUHA3SLOWzunLTfjuaJ8Gehbw2tr1xwljOOvLn2xZQPXW3ocF6rNON2tTu4Rhl09FzoSRwupOdYj8yP41F6alCpy3bCpKv5fS34WXH2%2B4OrtC5MZ1co2mYIVtWMqHp%2FoT4uCtbP1cDqQTLdOfNdTXsNIZcEsTsufHCtfL%2F0iv1dw1%2Btg3BTzHAxb%2B5SO1fRaild4n96%2FNDSzWguo&X-Amz-Signature=20c849d24c6782237424ecbb5c16513ea7d8f7f2049cb3667bc2814dfd7ce32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
