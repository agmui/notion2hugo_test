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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4WEA7ZD%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaeBE9H3eRBQ8hbZ%2BcYLse0MTs1K1XEKoa7WQ0el8n6gIhALea6YdF2p2VDURJ%2FrPXLsgJqxZivUuzYN2W9lKMzw%2BvKv8DCFEQABoMNjM3NDIzMTgzODA1Igxc9QkHceL%2B4Yrokh8q3API71Xsv8vYxKeZ%2F0PwiyAZAN%2F470YH60lklcoUjcM%2FLBG7tbD6onssFesuE9sVpIWvqYIV833Cl4uixaoMU4LlScIQXrAjHY6kGIxJ5n0jMn33MJ5tUr7d5xChPHoym2sGyISDS7z3MeMllzBE%2BK4X96RCbwdwOLe%2FcdB5IAqss5ubjC2oqceO8Q3J88mhgwe3%2BcOEMLTRXWVpVD%2Boe4HYJAxMETGBNWxilyRKNvTwX2x5NaTIFK60g9YTDbcyEfh6hlO37EvWHTUct8WCkqAj94xEQ7VIO9wuiys2tZ5refTa0KHNsQUzU7l8vTzx%2FjBA%2F4eq2o8h1ioH%2BNW5pvUk86oACa7TAV5v37m%2BvPqfvfI04BNZ6ZcAc2SAjK82D%2B1cUIJjtClnGefwuc8jF2vFMnmFCoWKNVClTXNagDNuNaeqdzUkdmnIWmizmJ4ez9MPI%2BMYgolScPPwgYJgnxhpMXD8PzB87qBXujkrWi2WKt7BvX1Onb59aWrEhAgn3gpL1%2B3CRribJAW%2BsWiIjaXUdg2vnb9QCUXVcOfgLEwBGablELvA01Zjsw9OIqJfbYQiNOeLW5U4TcVWoJi5pWkT%2B3Wnldx2132BzGQBfDux6exhLtuk0h9xNiyExDC%2BqrbHBjqkATn%2FChYEIqOCLhLkPrwffQdYryYs%2BQWDYOTzvA75jWeelNJizxhJrb%2F3mxsTSXAE%2FLd9DS5ibzMtTQqmKNtI%2BJU%2FykvlGuBgxpn%2Byv4MlVCy4Y7W1eBiA4GSPDjSMPTxs%2BVwl%2BoPjNoBuvpQFj6eqki6duN%2BXfhMeZNsYZteiPkVK%2FZszeyZ66QTUcTafbYqFBw00W5gVV%2BRQwDXsQX7Hf8IruOC&X-Amz-Signature=d93b8fa518e40b77941c6b441429a1e9ab48212a739004eaaeae7f683079b190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
