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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FRJRUT%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN5foe4sjZn5sn%2B2Zos1NMhZOrCBbxmaefpYy03fZqfAiAZ98i20hz4wXXKzSat2XowP8ULU1rgptO6xQicPJ5gqyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3PYUukXS%2F65XsnXkKtwD5JV1c1yr2xMeZ8nZLW9708jcQLEIdLVgL9LESbigXZ%2FPFHrDSRBzHVv6BWGnMBT3AE2MA54iI8mxzqHv4ev7MQaHSMYliPewK0De9HKRi%2FKwuJp46Hf3kcSJiuHX7CM9CfmBcBm40tDhvhfCJxLmaW%2BK77XHeMYRUqN1K5UgDlBMtpRYWgMwdQr4CArZNNjURmDZCA%2FYilbEA8ppU3K9wSEBHehrSoj30byBzqM0rHjXs33JMQpZl3k6c1sqsbmDmTsP3wMahi7%2FEZteaW3cKU50vhyl3NoV5TPEll0kxIMU%2Bz69L7E%2FrqjlqAE8ZWtfYwbGOTIKpujcWvOXBrsGkPIlv6FLzcqFH7nup1ZfJoFMY8n4qCP8vZ3XgVBDee0jobT9O52QciA8ctggr98cLHSoQ7RIY1%2FyanAg32myhYaY95cvsBQM%2FJ2L4c38fjdZDC%2BOBJfY%2FWebzBwu5RdVNV8AeIi2V8%2B%2FxPEjSIJRNpR9SlQKfm5WztX5XlZ3qsqADiZquuzlSsKFVdxAa0qfqhFqufE%2FSyPoMDwKv5j8rYmZ1LVXZYVdG6uDyC2Db9q0elFrG8E8KKJKpxVcj36mb57pngvKY2yyx74J9Abw%2Bnv56vUlCN1XjUTbFV4wg%2BP7zgY6pgF9cVNIxyKIbRfQYC%2B%2BC36Kyk9DhPFQ9ncTdNohI3apij1F2zXbARn687%2Fw%2BpkUXaq6EvpedxR%2B9Voeg8EutFDcaAWAvxYsrOdC3YryxSzvaW1MCR9mhgo3OrqqAw2Xk%2ByxxWMlFm%2BJY5JsRMpxHY3ZOQ%2BflbjNuhVhCsILjONUHYzhtLmNm29YubP4cYWH9LBFToDxxyCQxxpuh1Vzz3dv93tghmDQ&X-Amz-Signature=37906f17ba6afab7472e934d272776163149548ebf80b164e5060b85cb52d62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
