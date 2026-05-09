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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOVWL4E%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIBnPo27TS1xeDgn8ckRLMMczJTMkFBMwUoqdpHSIH19NAiEA1bDk%2Fj7QTessARDYQpZslLCDyc%2BwrT8BwsuDTWH%2BI00qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMypgFzgr6USPhP8SrcA%2F2a2XBtH6%2BYbzu5CyD2cYhR%2B%2F3pdqr2N21jU67yCJFrioHXN%2B7bS%2FOKqa2zO3iIhziMyBWJImvqyS7ujvpBxVmWt7c4g5521e9MmkOyuxqvVElJEWPWZvlcys2AWcNaar96nKlFiH%2FVGcKGmNXjJA2Gy6cq8enh2k2Qj%2FVn7x%2FeZ01q9W97xhBcgyF3T78asypTTOrb33TqzTwdG4M72R1dn%2BgKLITPWoTUgC4PpUMHlaPkGKbSEj9XtvQz%2FXTIJ4k3Zyrz27vKiuzS6r2hIfmV%2FzYgH7%2FsRE2Jj9bSEZcDRoChpZpEPZ8tZUCdg%2FpQwO3KDTVQuV%2FVUXZ4wKKflZ1yc5itTEImfGhw3OKNZat0thcitq%2FNOGdHyCeGMr%2FRgnkM6zdlEiKgbR8ppMLd66n1u8UJqg6ikuWIIAbxjn%2Fo%2FC3E%2Bewtcsvw8i0eZd3I5jWUSLY%2BZGQ953RZCut6wvLVR6bdrski88zqM3rctkrAK5j7ZpgX2Xiqgj9CCuw6G8Rksty%2FgORHmLDKIY%2BIkkEB7hL9l%2BGGx5OvRMA6xNvmJzL6HnjHYb%2FFPlbJhG53TVjwzmSZHVQRzzWEk9rP6BFJ1myKITeiJVTxbq6%2BWVFnpzGPsNJ0GEVFbiFMMPSy%2Bs8GOqUBOmOLBRTNv7EoExnjNQJQhHg1jay7r3jgYTVlH%2BQPMqY2di7pelNDAOdbvGLDrp0JnI5s3Id8mqohseffOnBuW3O9Kxk22PPPjCXwDJQo7UQrTDRJdFmc8CYkxM8%2FD%2FJNUOJkFoJ5XI1t1W0LfjVY5s6rvSJeXWN80LdcJGgkTI3rIfobumCvVoSrYwSjPAfNfl8LxakY%2BkYeB6jPdhTWxqxykwVg&X-Amz-Signature=a1da3739c73d3ff86fbc9c94761348c7c4dce76d14113f0ad766814d4609bf0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
