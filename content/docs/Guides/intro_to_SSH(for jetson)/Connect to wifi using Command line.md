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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXZUDLZE%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQC1fEOILlh6zgiV89BSOfFv%2BWncMcvz1F1L513kH0mbYAIgTTKopQdkgrsINMHmhdBebiPrAznqnagAXCjIKoywG6gq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJe6c7x3r6u14AIMhyrcAyQool%2BtDSPS4yKXHwSaXKn4IEjyJJx3ZtQYEKvAl%2BDgqRWsMJbkwhRJulKf5jamhVS3evV54Cd4fn1tfFdH0IHK9k%2BkUxi84cS5l9rNY9ramlgNuq77eqVC6rNXpwi9STMK0kbqfsVey3nPKYDLLj7t8DFmwwkCDhSMYsoXbvQblADn%2BGDxTlHvNpctaYMcpQrQL4Cflx6d8wF%2FHAYFvqHmV2Ua6hPTtSCtZ8adK8LiDoTgNurRV1P2WmiNrpb443kfSB%2B2mMqeVKdL4FCsUtli5JaTNu169YlBRioOw1g9TW5bF0H4foS47KUNxOanSj2b9wtOGROAXl9LT%2F0K8rRxHUeZ0wFAUFwnFFnlZOPOhZk9dsJ9qp1ygCHmHD%2F0iRmc61uEaIBZz5AQk8wfCdNkr6KxZubzL33ojis7oGamFjlt9T9pOw%2B3hyX09mTDGI9dzhBlKyR7CDcVPhstpJNyFCqkfpZLrVWY4Ovk%2BDimFg8x5oPtMMLbfGfL9qoO9QkS1JATwZxwZ0%2BUKu1ohl9BOpxyKVUzDkfxSRaycc6VT6LXo%2BDS%2BNbfNu%2BQqu8Hom%2BS1bB%2BtoOSlLNCibYMUo6OWfuWTCVd71GM6Z2eY3uUHZIUQhyHNtIV1ojJMLOE%2BcwGOqUBKxZ09WeZjRBfx%2F1c8Vl4ww3uOQ6Mk3yPGL98FMLpRZtwBoXdiXI9yN4QtDV6RO1gmdDnPG1GWYQqaMAurwb2I%2F7CxSNIthrVj7D19bIEASPfHV2gbrzz7%2F2XYarvRRNhkI7QO4jQZzrpy8DEdAorkfQuK4KEdtvUoFwRf71r3JMUaMusnrJKeullmPA2eWSLD64Eo%2FCnL8kE1OuXitS8Mro2XshW&X-Amz-Signature=c334daf699216d9067b952ec03152074c156fe30b2865e7172d5b4bd7feb6b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
