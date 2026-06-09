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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3IMC5SI%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyd9GlTMOYcjNB2ism1EZSL670mB8tTlGyBJNx2l3KOgIhAIkvAcTpZw5wEQFfdNQfrRYIA7jOHvIZJ9fDodDfK%2BONKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNd5hXvGKA1KLIlXMq3AOy4QGS93p9zDg4hVf7dZ8mwefjzu5nUa2zgRFpiAz9pgGZ0XBqt%2FLh%2FuRAaluKn%2BrhIqgL2BqsHu2KlaC1YC5N4tegTDNFHY6f9r31tNRapwTSae3wZAVeM4rR76zanU%2F7qhYCAFd9MJLwkN0%2FGFsATaRiKbuhjbk3x06EYkjGY4eaF8UsJsK%2FZCJM%2BsE3cWN%2FAxXJ5A4oCzx2P0H8%2F%2B30pBd19iAb60YVch%2B6JFsbsxKJKnKINRk3PeUHvTT5ZwX2d7zrd5qjohr12LQIBFyDb3KzTjMa%2B9UCtoveTLBV%2BAEPnWtElUt6QCt4WJyfqMf2RpNGv6BuSJGRTtwY7fS81hNzMjSGspX8uhdxwcs%2Bu5o3XsL%2FcTMy4TkeT0K3htK8LWgLBrjhXOVbcBdcJUnL%2BHKUgspaXnTvboEVKtfTQMp%2Fl6K%2FHMH3DAf4yWavrq%2F0nk2ii2zOAVXucfa69LtPnkwNwIHC1jthtKHQDMQiUQm5gWzYbCOO%2FqrhRChEK6c%2BUUkGWYtGjPLV8gvyb68NOaH%2BrKeTz97GnhnMX9B8JEjOjdDAXIBD%2FCGsCrvhUeiDIBkw1UAedeyS3FSRGTo4f3dpD51XB%2FzipVKOWAojAfZMEkxO%2FK2yKzPabjDnhp7RBjqkAcq9sBFI1JyUDofkl0SEEJRbwbDfUT9WzHxZFohTc2h0cmlYDPZLk4zetjZPuyU0pGJx7xsxU7w0%2Bou7V3cZE8UWVFW7qnTRPRjIpWJfC%2B7Be3%2BEzt8FnZqiLrt6oMiRTzwky%2F1X6%2FpgcKSqs7D1LwHQICDOREIzcxB2oX%2Ft%2Fkz30S4kvXcYt8RNxbrzvbN8%2FcsFI87FNaB9IZ3myLAlGGCZiaBm&X-Amz-Signature=c84891652dae4d03159a47902b56ac77a6a6646aa819e04f86e08965b53c00c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
