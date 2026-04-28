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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D5HSYFE%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCwFNqLkLR8y%2B3XLNP4VGV6ZPB5I6smDBuYahqvXoF2mQIhALfTSTHNSffLJd3jnEuB7yc7ePaCczaUxioD9FrV6cdNKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjTrYm7eO5g5F2NSUq3ANHRfhEWwX3cTYlQHqogUihOcJzKfrD2ccwfBkpymTPrxFCuClHLoLmUtJcavsMlqKaB6RZUd%2BWj2w0qcu%2Fk%2FTsi27ttylHned2NrhVHoTPhjx5sIGW7QKQ%2FFqwEGcL96IC2hNGslSKJbKjBZonO%2FfKkaKdrswDNt1lHLI2YO5jj9bTV89JG3LSgFh2q4DA8Aqf5UC3ybYofx6lGExKQV83FvSuOwhsu%2BrhiU0mWl12X%2F62aWNpkHwMK6f%2FLfe3NzdTr1bqxWJ%2FvauMOyfl7v1MCFV5nwHhBIy5MfwvywkudPdLxJGnlhLbGWjQyO1MKTSX%2FcCTe1cU64K%2Fn23ePecsP46%2FcdwF63eh4pJVVfUEcebb8c8JAAsL2V6NXqRWKKUOTRt%2FQ0BDw2Z3nzf01JlE%2FAYftwCUnQ7nD%2BWuK0eMQmog%2FZAWqCnBpZQwPKQ6enpgsWAP8P%2Bx1DAkbzhVyN8BAPbHbT3en8U1Eg%2BIugLKnxUSXX6rfGeliV0LDuPz2n4pgjGvBUvbq9zFYPn%2BnHD9lnIpKVqftiGqQ3qHLn%2F5dCJiPxR2z1T5XGtWg%2FAIultKKNQWvbHr7xv5JCh2VZYxLCZnC%2FdsAsZmTB8A9cAeJChOpaoEGpOZJX5rjDDWo8DPBjqkAf4AiSZ8dZzi96QjKFQ9I0Y9IhTiuilgRa45rZy9Bp8c00O9X2DXJpMbhdrWRHN9CBqtGtXLHVpptU4gGgGts8XpHI28PQBxbMQrO7RyK3Gs%2B0ncqCxD%2FdGk00xo0muiOTVwR78WuxlnW33JY5jWUDlHFCq9%2FfgvIrLjjs0I9kCq5UX4orc2OsHfST9Z21Cj58cz9%2FO6mRHIyn92CyX3SiHOotO%2F&X-Amz-Signature=dab9fc8d89cb77e5afabe9690ca1c9b2cd18f034cda950a841e17f9415f6953f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
