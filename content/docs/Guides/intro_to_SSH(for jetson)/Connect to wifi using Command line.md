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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MXN36GJ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFCobEIizfhAPisrDVjcrSVx0GPBy7u3Wht0zwhZPxvDAiEA6%2BQSD0Q0XkVlPQaN4kgkSpWu69y4h9NOHlULt2KfDjQq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCSnvdWLG56DEkBjsSrcA8Cb0fT9NA6m%2Fdk5hd8mtWKtlp%2BqrzyONtIbcn6PHZLneKd%2B3DerT2%2BL2HfGtGewa2oozFnOpbtom%2F9omAI5%2Fq1Y2%2FtVIyRAjuITYgZOxW37c66R0wQNoqgjA%2B%2F4bSSgFUpHMTPxXFpwrhgIcFc84f4UAFUpcvmHfcm5O0yE0GQQav2AWweGBgvpOg1mNHOqtT42z5bOBT9MToQNUgLn%2FRjWm7ZiuTQLMeDNDdT19bzorcDS55k28enyGMD0sYX7Hh85L%2F2m8I6PyHraocWPh2NY%2Fo5yjXc9KFceNOnK3qy7FKaPfgRV9VXAkrfziPDsZgKnq%2F7hp9iJscy04BGoel09hvVyb1FKWXyU23%2FyHNacUrsYGrN0jXVYQYa%2BSdksK%2Bzo886Tb8EPk%2F73SpKg1KGKgDyghW9p95brkF2jY9BtZ96QbkXJbsXSxCcg1ggYVnBEZcMDkUbYQiAX44LfGzKENshr53Lr1a2I7nVvG3Ju%2FT21So1mDPpRvwF1MU8VUwSRB4%2Ft%2B6Met05MbrhTaPsr0vmN47c1Xl2PF3mBDHlyOOZncvKyV6jJBPFoVzBrqbXAMXGWX9ggizk4mJUg4slhlJAoL1Qfndk0iXFMPFcSNYKx1ibQdKTwZmcKMMv8stEGOqUBskQBpRLgyQNmU3UFi4s6bjkkePka53y0mSAC0S4hljzhIWEqxPaaJe94NF8jepEujN%2FSqoMJV%2FHZ26Fl5bp43hTPc3kO3BuDEiZdxgLFaQp0fS87te3xcwjdFCdq3I0TBp0JDEaQN2yWq2YkM6tZdzzyCQjxtKIczYchwPtailN4lBsHr2lnV0ZmhZDUvl8uUA4h23TyBVAUvKYdzVYCEu%2BT52Na&X-Amz-Signature=c9393c283cbb510cd0c34caa9a197b42226341deb8be2110333cb098e4e30531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
