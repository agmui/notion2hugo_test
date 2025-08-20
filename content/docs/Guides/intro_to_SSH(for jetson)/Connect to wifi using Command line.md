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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNWETYB%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeornwF4Sla1x1aeK3RsAraTizfem%2FdziT1gpZCs%2B4xAiBpOl90%2FD8%2BlPHuMSVmGq%2FRt1nGTSMGtgN%2BJiwFoNf%2BwSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEshUDuyFEnG33UcIKtwDe3plVzgKQcnYFN3Vh1W8ggZ7YCve%2FkBX51RsDEGtnSmWEuEFxUW2ihl2HPVX%2BjfBTX5BAPRtc9rMD0V2zJUiDDBJ7awMdbNvMzeb5Jat3GF%2BqsNJNfV5vw5y8hWcfts2Mi%2Bspe5FqMHnnvGin7SK%2BPn%2FSb%2FnO6nAsrvxwcwzctOk5sZj%2FaqRtPmHbljvFHtP5y%2Byb28s%2Flkvlvd7%2BBREdKfyrGAVJ74LMZ%2B9VlqfhTre9AXqXc%2B1D60qrtakia0SbqAuaR2OGSoeHJWbr7yQcBUozQ2xNVMFrzxymmu%2FCghoSU1RTP5%2FySxhQ%2BmmzEnSCNgwjZQa6uKmg1eEJk9ldELx%2Fvu4n4s6Kzuwqog2VHZZP3bvhq1i5P8pXk9aUubIBV%2Fwb2ynYzanH6NvCIPea%2BsoLeYZ6equEVWzHn%2BYfucrGSc7BPtD%2BnWG1%2Fg7i9AUw3%2BUjGYuA87Ds58J5sFS9nLf6Qqpfwf7KbJG9IkzUQj45y1zkdEXmR9KR4KHipKimwRs9yjfcEq%2F4aX1E7xOokdfB%2FDi3UClRD2EPeeSZT6srT%2Bpzf72bmv4jOKqdtvKe4K1%2B0hPX2rlM%2B2i3jg4J3OyTlnVEyxzExGkYdNAgHOVTKDWEE4Eq2c4Ua4w%2BveVxQY6pgHPD9MovUvJpSRqnRv4rQmmgeMjzqamXRgspWY%2F1lq15%2FKJsXb6Y3yqbqgx1HKOlR63Lqgpt%2BXj5EeVINTU%2Fg2GvE2IHZMKcrbuwac1%2Fojsd3p0do%2F%2F30ruTr067IaHiIZQF4W5yDIuiRDbKEuQ75yKRuGrdiPtgyq6WooARyvKRZ5xvmxcLV%2F%2BWMZjJKAb7o7VtcMyH80vQGBMa7GN3OyXgRQZLCVC&X-Amz-Signature=fdc6ea85ae127fc914dcf4a5834f65f2bcfe5296919345ebc93f55a31101c7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
