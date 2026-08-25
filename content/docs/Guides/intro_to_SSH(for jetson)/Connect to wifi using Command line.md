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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64FNMUF%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDrTStVTQOxCbEtYDRpBjHiMrdqQUdZd90dy1qNdfcbmAiEA277Or24qK1RLiqTYfkkMHXF3qWyK5OVMhJVreIalBRgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqQj9gk9JcHC4kepyrcA7X75b471b5IE2q%2Bw08LQU6RU8QKl4nL67CDnn51DVrShpNhkwVKgzB0vMSWbmt1dYUc7zTKjColahQrI0GbZ%2FI4B6DYts8aytiiOTaynptlC9sAp%2BDFgTCvwCopdElYsWIK%2BdUJIcFcmjHJtxNk8znVs1S3oWzoX78sWuxedtvaqq8oasyHVc3JLHPBz8tydMQWLLlVoZD85c0FL6f0sd3b0xu%2FcdQR9pwhLccPURlYCY1JrWIqDw6ozFNQSLHkSKi6I%2BOdnsmHRS3wEVE4jHJnF5cxofcK1KPCkNhpe67NZrpth7EDN%2BUjd%2BbL04gWiu%2FcrpPdv4e7kji%2BVNEzH7YkF1QOQFJGGSIcMAV%2Fx%2FPS6YmpAl%2BazK5kVjtCpC9e62VI9EV1eB3WsNpsao5r93nsGn39Q21u3Icyf%2FpMSgOHX59hLoMw2dWdnjVnku1toIbhC6sWBqXETFMtbrOdyeGt5kqhe%2FS%2B4PBh4A0FSa1UEUj85LQLpOUES74oFDXvRTdChYGVQ7xamP3idV7VYoyuSB8nronTsJPlG7oxPLVYaztaYs2I8fOy978pdk18619%2Fhf2gmeUjbX8JRIJN8N1kFgYEcL1aPw9ikaYFthE2ebx7yg8qJhUc0a2AMIrUs9QGOqUBBLPH2tXCAKACxAPv2npNwjvFGdWyyCt5xAH72VrZiziqJXCNtjbdeN30RUtujH%2BridQ4PZu5MjjmbvOWhcPXMNh32MUKnc3sYkH5ga1RDr66wyECAvVJT4H0AJP2utg0iTIQ%2FcLgC%2BaxL7SjDerGFlX6xrkP6ZShxi8kwpSrE80KG30IATbVJH%2FTJUNB44%2FcbxWXFXv6d4LEyHMfXg2gbsaoVyVq&X-Amz-Signature=ad37a83ba72ce2fb3a2d80434469d6b601c843ea59fb79b7fb96a019cfddec20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
