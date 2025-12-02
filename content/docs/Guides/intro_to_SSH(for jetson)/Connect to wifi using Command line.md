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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6SPTNY%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDVZ7qn9EplQp197LH%2BcRMIFeqonabPvi6hIWtDOYWMXAiA9LF086v4H8MHk%2BnOKmED9S6kJX8b7CsSVAeGz021auyr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMbhup2de3zi0f%2BSB2KtwDtH6LHkxXfvXXiW9%2Bovrf7ONE5urCnzH2VpwcMxqvMHMJdj8ck%2FzN6A4%2BNUZ0S88Lbn3SLXgAmKILcxFy0sO0TlYvzNfAuYFcIOtFiht5kgbYFENsQ%2FiZFRZVu88Q9fRQl%2F4m0FYQD5ewjS9KEY%2BDrmUMjah3D%2B9JKXZR9ezHLKxMdm4DD8%2BuHJD%2BwkH%2FXPPjOq%2FnP5Wz4tVMpXn5ZICYTuHEaQUCe%2FzBwl20ITxJ%2BhcXD01iDFpRBriwOb1xMprkZdZrWQS8tI6PA5imYXVKHvisn1ug9ad6FOTujfOfd7r5Fr%2FbeELqUxbLIrrz8%2Bz11R9p7uinruyoxK9y3%2FrZxAE39CcvG8857VEM7Ju0INTp1o5C8xZHIowtSVCjA4ZCIKSi1Z1JJR3oAWx9Jy8v4qzHzIBIJrEy4ce7nTPxHgao5EB9kiZkYvEyt8iGycmVdv%2F8dA7WbqTe%2F4H4md%2BNyI%2FWMtZQKn4eLYY4J%2FRfWe%2Ba3vo7ha1ObB2Y0friGIjbJXneyBiNwNtCrScXnzHfBvvgXXR7IZSd4urdCKRwIenp3a2PAPGOrKdkcQGjqmCDWLSSvKv2y81XObWT6UNYTnNe0TQoT1IF8zZ3MMSYmuLRoeurYdQ76RAIeVIwmd64yQY6pgE1xlOzE8mqZETxCkwIGfWhefPXQsOJOJBnWP3GGaG86A9i2qvVghHrNqrf6zcdcIjOAy%2BFTEfEsWNwSYB%2BPCBsbYc3Ryk4kfwen8q6%2B8rY9GOMImWagm1cZw18v93wDRzn4JuZqVahrgsJE4uUAUUJv0nFESHjGEK43NYxpqWKI62QEArxIkaX3Rtko0o%2Fs4dp2idt5kU5k43m%2FxLDDvwLYad8m%2FZZ&X-Amz-Signature=a01f88e64f7bc1ae4bc2bdd282791bddac58367f2b1c0bebf59d08f76e5169f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
