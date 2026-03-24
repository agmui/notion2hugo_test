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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP73YUNM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTYFhlJqRicBX2pr2lFQdRt%2FM2zP2Atquy2unSpkRGJgIhAMrNLUy%2BD885XPbd6E6mRb4XeN6dUAxXaK6PzrDhcaIjKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYgYomzmHBuUF%2F4nYq3ANmWD4UYl3TcJJdzwEW2xCV3y5vcBItK5lZqatxQixfZxYPkvBCRZc42D%2FlVGQ%2BgCtw1AZRNgcqEXKAa0QquW6%2FVUKUHM5dWmapp5L35iVUjY3vnWBnPFodQO1JamEbaDGQxp2J6b5catnN688u6VNJScMkI5GbgOMT7kh%2Fx%2BHo0RmLXmnhy4KrU4NECM5ihoW9BSSa8S%2FkkHDoD0JMy8EIJq0KbMT%2Bl%2FE%2B%2Bgyr9Tf%2Bk8ra6BUtc79n%2Bxs3WFTyp3MnbFEsx%2FJ73PMg%2BzXPlYfq2JCi3RH45A4oE0hpbrwp1bMCBav7rASfq6hFzdC4PXaRnoHCyPD5a5Oh1P82CnCdQQZ9bwMv4dg61YEg2GNfC6yZR7XvkLDMySK%2F%2B%2BM%2F9q2OmIFgyjBhTztaLCXefB4VPjUPmCc6Cc6p0vmDzl987%2Bkp%2FDGhdMEIKt3PtdrFcCcYIlwKibVO88Ow2YUigkE8O%2FrIRhfv%2BzDA8fI9arHX7OWTy1yBrsrl1a7fK6yQmIW%2B18ptqV9h5mr1jM67EvL7bjGMvrYT2L2%2FBK%2FtvRTxnAn%2B%2Bpuu8Gcw2D5c1dMGaHAnHL61oy1%2F5uhZIUTvg8yyRbUrXMxoO64lJXGTV%2FraWjWeASDY6cKt9r%2FEzDCryIfOBjqkAR4YK63oykoTI4TVYQQRjqCn93J4lAvjzhSPI75dzHWu%2FHWK8C5zg%2Fvc1PWn9%2BfrRQDu%2FWKD5MtD3sAbs0uZ54c6ltsjz%2FbzSvq1wMZirt5cNQOSVIo2qS2fTKB31ylv4algC8k0HjllNOI45AdUtbjq5pnPUcHAhEniduONWNmCZOrkL5EEqbtCfliJaOLVlKnug5ux4ev0rlwXxEkBjWLOrQX9&X-Amz-Signature=188bd81f1db99550016778c0537b5a2d76a6ce0dd45aa7e99ca88328fb0dc4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
