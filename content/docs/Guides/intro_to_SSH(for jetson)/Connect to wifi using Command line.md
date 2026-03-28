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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVY7EF7S%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHXlhbpV0wwipZIL7L85m56WED4T66ha1AhxpJa0DzjmAiEArtxcx4WOin877K72CLioseXT5lp94%2FO%2BrD59%2Bq2f6nQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSm7HV7hGgxDyRIWSrcA2tzjKL2NoEj%2BdzucIY2%2FFT%2FHL1ezdwONNTASXZpnUtUPBbEle%2F3JT1JPkmNtM%2Fm%2FUcQ17ApOWuNDVPVMvEFxlAIlr%2FWpFRuGX23AC%2FFLbvLrAkUivJvTzDb8w4EVXP2ytbkQRXVY83zw%2FNF62N4%2B6TdtP6SN1%2FBwbOeGYlBignAdTNkrj9Y3m0AbRVBI%2FRD45yUzTF%2BrjFmw1OTvY5z5GQjG3wVks2Su67inZ59XGLSLOdZPTZrVZNW3fzRX%2FlSQzh7BPsjE7J4FE1xxhSMGykI5pcGHNLX9FnoU%2BNhv4nvXcPMVh5BwCHDpomL8MN9EzffvQH6LURtlli7TbFrIyhgNtTb%2BYaJSKoOiEKNdn5wkLQOIRItM5Du7MYfFaYMkfgGo3s8Necmv6nNMnhKBw%2F5UgJ9XLmGeH1LNWvtZEfwOxw8%2FVe3dNgm6BFwBEsntuf4wiAFhL8CDgtT4ACK4iVsTwwF%2FWxCHGHHjt5WOCsCkG0FmA8mLDDTJ9i5ksGiOJH%2FTmO5bBzG590NQS8BHsF4chOi6oMX0%2FLzrgHSMya0OxR6UBRx8crpAildgZcIxaVBqHdj75kS8QhcA0mcC5cOBZbvJUIJhUHGemNEH%2FB1YGTZW0ZJ0dGcj%2BQmMPTsnM4GOqUB0dbvf%2BWFdY7Rmkw%2BRS6AvZ0Q5BWDRqjeQ%2FsffCLf%2FCbiq6I%2B2B4j4lJWRyPgy5Jv%2FfEVbuj3LPSoafocoQ11HuWnXuKu2WxnkHGi4LUvBOW6t4JPVAfwzn31zC%2FvQZ%2F%2BNUYDfO%2Fivmqen3Tb1nGBItsC4ZoASKnTwyVaGtbV%2BxRRyTJ3Tb3qHCDzWGGEAWyvdYaNVP02k0LDJ4UVukajHyLVRrUW&X-Amz-Signature=1541f1a03f0927fc0e9ab8ac95900eb2f82017e7c7f3c466fc9c7c9ee6081a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
