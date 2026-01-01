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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOD2BZSU%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIED1a4jfFZTmF4QhJMW4pmzJpC7XmPNm1JT%2Bn3BrIee5AiEA5JZ1eL3jWqQPRgLdptR%2B%2FcX4GAUDr6QEMxujGSwxCXoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfPtnOS6uEGZ0LMgyrcAw7vmyokKkcVicCPv0V6GOTKYx4mlnKnwCa5AkbQRmiRV%2F%2Bgc2FCf2b%2BYb%2FPNV3dXW3DTpPWfw7xbu3q7IFqORqHvbEwfJfkwCGy0A1br1Zw%2FycsUR6BTcCG9l44FkV9jO6CMBkDZQVLnSeY867tcCRPAUeQFF7Lq8wF3P2SV12PFVTca%2Fo0%2B8B1sgQJpbAXHBA2%2FPW5SjTYpoU1fSpVAe3NGSxhhUlzwGWniT2a3Y1ISfEjRvn%2Bt37jK6BdaGWOx%2BPLKgdD4Gmvtecx0DeFPB3%2Fd04gnmYX%2B5fQ%2BW7m7yGS84yVxkuLVvusqy%2Foiex%2FRS6iJOGMDMnq0BSGoeA6NX8j8Of89q%2FEVrBuq1UNZfKgFort9LfRlmP4yUGpchQy%2FXvbb89BNJe6m850%2BUIUT2Gr%2FZZZ3TwwpHMt5ptcc2QpPMzBvoiFpJf7iXr4aZ2rozuVYfoJY9Yc6jH7CacmjUA%2FI1dBuExl58rH2unugxLD%2Bqq8uSStK3jOw%2B6LMMGWU00IZ6JYG%2BtxmaFzuQ70ryHxCoiwyyZioDLTR8gpwNOWW5UQvhlezEzyyQSyhyLWzVhDj7CmzjxGNwDIJ7FW8njt%2FnOOi5IQ3fqQhCyQQVWTIahpcUKh2SK%2BGuLqMKqF18oGOqUBf%2B7G0cOKMDltpgSp4G3cKO8MtZYsm5SC77D%2BIjUjrX22qjh8pYf%2B1WlVsnseyMo%2BNRWJ0O1p1Pb69DuR8n73Z%2BMtShY4n%2BLDCzpyXMIio59fW%2BN5xzbPAhX51gIbRRHqPvfggTbfqFLK9OQy6g9AObptvj13us0G%2Bb4Ikn%2B9ThLXKuGGBy1nvjmJMDCeE0lg%2FSQa7E6GHpBWFvcmBM3M9unZJPYY&X-Amz-Signature=90ff83d5245096f434ac6ce8c94511d35c90b9d7cec006a9558ebe9e585b2c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
