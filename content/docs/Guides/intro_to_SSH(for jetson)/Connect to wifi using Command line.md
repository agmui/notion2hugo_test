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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GZ6UUBM%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCTBtjWoRzR%2FP%2BiU3Vf6jCa0iH7RKjS%2Ft%2B%2FOU%2Ba52VspgIhANspJ91zj%2FqwblM6ns8r42IsS%2Fa%2BJivFAyaFDev8fywLKv8DCAoQABoMNjM3NDIzMTgzODA1Igwq7VblkOiK6SZq8WAq3AOfG%2FpksMcPNsfTmUcoHxXG1eKoue0Vc4wdFEnbVfL4MlJ%2BCH%2BQ%2Fe2TUj8IJn2X82VQR%2Fn2s9zu%2BzOBItBXAIgdWMqSzzSNNIxU2KyUF1%2F9rkhJOYpbDTYfuznBBbyqOkUU%2F8ScFMASIrHRzpaoXW9V%2BQuMR5luq22JX8VQHcOc0BDgj6oxIX%2FmnimguhI55fOXxaBCeLlxGVP5TIKsbVFCkTqj1xgt9yyHq3%2Bhc9bBWEECQpCos%2BNfpSMYZxVAs6XmgWJ68y%2FNAU2quX%2FPQgdo9NzuOdzhFgRquq3fW1N7zpQMIwGPwlkQhp1ktpaejHzDyzHV%2B3KC3wIB0F%2FKacZ7Vv4hT%2B3dtGRkTLPfO7AzakhR7Mg4RtLpVt0VX3gaXziHI%2FVvfg4qF8U1sEO4uadb3TXSexYKUu8BcnkDXkoaLdVCZqgB7LT2elmT0vH1%2BjhLRZ6BoS6eWvUBEwUa9lOeCBHqFDJ%2FhFlq01gNiI%2BJijwmLyxdw1iSn%2Fsca4q2riS0%2F22IwFCBDJeq4SYV6R7BjQ1OesxaL8DVO4KUUNRwSaFjk4iq7Jx6w6zeMVS%2FdL8FKwJl2vb%2FUqMAbdQ5WclpkoCWuckZmCvYFs1z1jR0oNzyn1qosu2dyd97QzCYnbPNBjqkAfnfMBl095QSmOCimcoD4jStNW1CyVTvXIdZFo%2FtANcy2Tk9W46cZz37FIVBdDOKaKtzdAjvNOH17jm3OFiaLSP2FqQCTvtwi0TXKqNWDmxrbEl3192V8vEx%2FohFsYtTs9b%2F7APewLCpvU6G1RldIM%2FqOWs2VveFhWz71wcM1dbi5NwC9LlORAbVz3d2rzAaDJ%2FO8c5DOoWhldws2gcNPF3IzJAz&X-Amz-Signature=f73be164c175e9205a541580722ae2c308e29a7a8455c15c3f839949f42f9f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
