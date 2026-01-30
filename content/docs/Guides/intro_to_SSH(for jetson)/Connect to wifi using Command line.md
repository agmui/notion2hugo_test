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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TWSG5OD%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3K0qp0IqibXLwOt0W1mXCi7pv1%2FOmt9r8FlobSN4hRAiEAxt4KijMxwUck3ntpy5KtqTGC86Pi5tuXuFjQ2A54kUoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPObi%2FzISbRN1jYoyyrcAx9EHmEoCbsBJur0jofMcyBlAmLORd3x1T4dm2TqTKIZG3uww2zG%2Bf%2FmwyseE6xMEPeC8fBC6m%2FwmW4Cl1rBy%2FaW1Z0je1T5TevNMxlwxYQ8FeAa495BMOQyU9MuY1iRm%2FAJmGkHsaniuH2E6wmcCXrz4s%2FXXt8fcuoOi%2FPvzxSA1TY7q%2BrzSE108qO2Xf2A3XlRZt%2BZoJGkRMcmEWzAQI%2BaV6xCJijRrWWwnhSHmtVsxjV1icNXWFhIhJd8W2wjqdFZ1%2FGBZgg4iVdoJ47Qwhwm%2BrlJpDcrqhbSEwAyIolHLmaBOw5LB7OxSI1%2Fij2U5Apx8aDXvyUZfhpE9w%2FYoHMPGk0T88LOY0DnidnfH2bc8g%2Bc96w7kC5yNtWojVG5tVEiy447crWL3oIy5ZLmY20peuBjX1Tl4zKKfoQPwYeVew0hQl8MF212DgSobkNjg0bKdoQeMCdCgTiIIAd0XMIfS%2FxkUboyBY1Av8C9aetyG0zkvnX76XSK97hxFdgYjn0KEEeBa6oCX0T9N7iyCtE8o3HykbuKj3o24MK1N1Jy4BAUl7uRyE0CSlO23R%2FrnGJaw7AFV6XNCTPxGGnZl2CCWwZQpcLxKKy7%2FOtIzTss29Ktr4WArO342t73MOSB8MsGOqUB4E84A6qWKSRu1pa5N%2Fab7q4QOcxUPMbMDh31RmDYt%2Ba3yP86sNKkm4ywQgNYTf2XKWrN%2BII6rs0IC51CmHTBCNl4S7lugE%2BVctnzyOLaj%2BxEiifBH35MQNmfAZExvL1O%2FE%2BxQitjRqLXllgYNdmAb0mYuKoQWFQpwaLD1dxvhznGSod8b9vy4woEzGTCUtM34N%2BqnGLVlkJhVGVD7TxFWwNBm2V9&X-Amz-Signature=3a3cb947a62822a074a6db5f48b27628dcac825c529545029daf01b0296b9a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
