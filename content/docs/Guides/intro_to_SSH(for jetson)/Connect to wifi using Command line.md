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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UOVSEH%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYDUppQuEmJqyuoAlg5LVq%2FWoiEKXdi8BQLFJN1igcrQIhAO%2BdGFaOyIprdOXZ4Zn8hkP36sR79udb%2BlK5tbWUZNdhKv8DCHsQABoMNjM3NDIzMTgzODA1IgzFo2XpjDqJ%2FElQb%2Bwq3AM8krSKbpBaKNSe8yrGlCSlZI0evDbP0FCo5%2FCHDwxIS9qfh9Z54eofCWeJh1bmBc2tD%2BJyqnN6bgBxBLnO2Gc1AxppbdZYtHQV7v8pj%2Bqyh0i2%2BJScC11sYUzw8UxubbiX1lZ0ed5pEF81FQAKZHtTEu%2BnLbB8JzMrepMEJbbJKJLBd%2BdKHoqH385AHFsrRKesT6zVvGAtScarkRsyZC3GHpo0BltDibYt9We%2FoTlORIAzIsRxC23iqvYIVEO%2Fj8fdE6b%2BUMOcmXm0UaskR4Ki8wWAtap%2FCviv7ZVuPrb2LDe6l%2FXYYt8R9HaU8uVUrvO3rnxpGPQebe4YZ45DI05%2BCpQtjndVmqBVew1EUpdNUGhn1vdaNFN0cGBMFxQ4kOBojLPe4IwAM6cwJKbbHJv2p3pXpphQwYVn8JYiZ3dqignGHblTXAZ72fqrLt0Oyyf82FEDYxecpLKxtdPz7irFSptcGwV0YiKeIBOW67F%2FrPY1N5%2FzBz5pbwI7q3sQG%2FwGfm9xxC951oS7dcvEO5VGmfwYRoUHQ8harnD7WtpsaP7QAMAAXFqvoOcvPdG3YmOaQg%2FT4KW2b3xpV4ApQ6N8xeE1GXDfwJ6%2FbF9T6hew4lV5KMlBVF5q7FUD4zD%2B9erLBjqkAU3nIkU9T3pqtAYXtNGWw63CEVmyP%2FNVwMJ6EAs77bc6r2iAhsk0C9b%2B%2Bfcfk02AVMZ1npBQ3GI1R2OhMYk%2F7LGqTaIKF%2FfZ8p6SUlNrjBJJUJY290pbrRFs%2BYrMgm%2BxBNFETT%2FT18Y4cPDsabtQcsxDcTYX06z%2BEBPLlzngyNf9RyIennflcW4vmF38oOe1%2FlM4hhpwUhQvW1enZO2rJoU9G0k5&X-Amz-Signature=63ba21c708be0d7af361c5ac5b2c8d51ccb0ccf9fe5b151411835ee2f11033a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
