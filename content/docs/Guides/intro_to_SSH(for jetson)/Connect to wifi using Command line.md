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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ZCR27M%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFqRFXHFZH3MVCffEr%2BeEY6OgR80LyjS0EPB5G3pNyycAiBP60%2BbRPnCxY0XcCiQG2pp2EMsISPf0HSGNjpI5SalMyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2BLk6O6bgfUSQ5dKKtwDWSfRL0reCvsrghf0FHdzNvC6STHmtymWv7HtA%2Fox2x8tM9JVeYcWkqvD6vy1FF4lTEuKbUl40j3KR4M3ZgPPG1QHLg5BuofwkLnaJ6CRVITNthymyI%2F%2FiSJ6w6VlKb%2BZ8htKXP5XShY%2BYGv8nd3G0S5Zud%2FO6u83%2F%2FJli%2B4PBmqElgI37bQC3J4vomWfdhdQ9jZF6JYatuSlGQ6JzMUo2Waf5nJpTtRPpwDscZFThQpkbEs88jqNiUST3eCfMM%2BDBKkM3kTNRONdGoME9u6iO3sG8WrCWhQ5wBkz2sO%2F5aAAQufbCE0E09a%2BSZFKf1ftVPaxPsTR3zUPykpQiUXkpCLr%2FJUhS8tc%2B9jtu3IOooA4uJBt%2B9v%2BHqtOfsrWUn%2BoOpHa3r8ABx%2F81hFIIv9O%2FdnDFLLR%2Bdq7DH%2FxSRJc5BxcwORSK5U5VyyZzEIUqye3EvD1Kx7LBrhctkI045B1efJwmT76A6Zf29%2Bc5yr3hyKifj02GDKuN2vXKvVaLKo6GkagfwTnO2c6tjAmH%2FlOyM1xfWw4T6rcYyGL5%2FAOLBLx3ioAzMuOmayD8KNJ8QsiOjZNMZMYkIJD65FrTRfEVCh01EFqp0kd70skES6VJ%2B%2BqeUT1JXBukpw2VI8w%2BZiX0gY6pgEyNp%2BQRriYrYQCSqvEr%2FzblRDLBHxaMRz65gC1ER%2BIlDnEm2%2FJkjJXYdCfAkgfmBv42Cf7YtyDVRw1lLfwNIPmSKnjCwfnh5IkKbfJY5d730CGVVsTUAWuavfhQw6QCjnJ4Yh5WspFppvh63XZAt0tVnqBZWddo3coggHdjYiBo4ZdS5JX53pp4RTgdXAqSMFWkgN7x9iwtSKAYhCLMLfsE5Kcmu9%2B&X-Amz-Signature=85ea0cc683b9d2b5878118595886225980646cc603ec55c6403abfac6a731530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
