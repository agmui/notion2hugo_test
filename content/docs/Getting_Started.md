---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3A44SR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHvGJ2XggBlZxdeMCCC%2FAhseyOXGRdtCh%2BvWRUJI26HlAiEAs%2BOZwxaxa3G90zDRzxBkS4RBQybOna4Wng9TYULZOC0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMq11ITTAmktDaxqtyrcA5jwvOEi0kJBdD5lQW%2FY2NsYo0Xv8lwrHv8JIJIYXJpCjGFYGvbx6DqTcJ7XIA8CEeSmKV1PpDjzP4ue62PO6xm%2FXSWiPrTl0biOWU8KwvBBXRRTtor9%2FWBBmg7n5XZqIqSybC4mprCxWw0nWNNUk00iADyFXj00ViNSgpK0VahuLSRMBTHgV9QnSec3YeNvz9uhE%2FsVcER4uIFOzRgZxOjZROVe%2Fo%2BAiOkG54EgC8JYQ5C9sNmAOuuMP%2Fke9KFnolp5tqmLAXZ8v3YykaPRaABpiwhK6wUYmI%2FXbLGCquZBj6Q9PoEVUZY8LBUVhN28izVNgAZmurQ8DkXdwBawlNnS68vN8JzpAZnt%2FA%2FUqlJb1nHz0p3De31rTYMCBZaidEbtezZNugZf0ewg8043Xn1xitekO4Hl0piDQUQGE2E1nlgqZIaBmuW%2FkWRQIDbW%2FoB4g5LpT1FWsGNoSaCdr%2BdpiPKYUhx8fYjA0AO2ambiHsuR2UeR6FcdyXg8Abjoe0n4sGRv0H1bRaiI%2B8w7Zpy2GK%2FQ67%2FqHcYnAIGikxpgKW1g4YAqMXWzAH20RvwsHD4kDNlGAgUpN2JtaHzdIDqXFW0Osqyxtqg6IK8x7b9iXFOHnSyIHrJkm63DMO6w0sMGOqUBHkgrqRNVSsP3YXVgsL5x35yWCktSk5jHQuqgb2N2k8Muxv6cSxrEUY36SvShYqtNYc75v7hnQf7YjfG0ZzCrmeMriI%2BZARdBQmN7zI1MGpOe44Puk9m4Oi0%2B8pnHENOlj%2FqFwhp5VJudRJItWVNIDmReVXJXMrQ6A5yqq6THBzkRlQBHBF9mpMS9InR8VzCByY3ZMDxd91MBv7co5nYXrUMNWA5X&X-Amz-Signature=4335cfa4fbbbb605ed1392f7bf803f1a3b43c0f5aba8e9d35013eeb7980bc024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3A44SR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHvGJ2XggBlZxdeMCCC%2FAhseyOXGRdtCh%2BvWRUJI26HlAiEAs%2BOZwxaxa3G90zDRzxBkS4RBQybOna4Wng9TYULZOC0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMq11ITTAmktDaxqtyrcA5jwvOEi0kJBdD5lQW%2FY2NsYo0Xv8lwrHv8JIJIYXJpCjGFYGvbx6DqTcJ7XIA8CEeSmKV1PpDjzP4ue62PO6xm%2FXSWiPrTl0biOWU8KwvBBXRRTtor9%2FWBBmg7n5XZqIqSybC4mprCxWw0nWNNUk00iADyFXj00ViNSgpK0VahuLSRMBTHgV9QnSec3YeNvz9uhE%2FsVcER4uIFOzRgZxOjZROVe%2Fo%2BAiOkG54EgC8JYQ5C9sNmAOuuMP%2Fke9KFnolp5tqmLAXZ8v3YykaPRaABpiwhK6wUYmI%2FXbLGCquZBj6Q9PoEVUZY8LBUVhN28izVNgAZmurQ8DkXdwBawlNnS68vN8JzpAZnt%2FA%2FUqlJb1nHz0p3De31rTYMCBZaidEbtezZNugZf0ewg8043Xn1xitekO4Hl0piDQUQGE2E1nlgqZIaBmuW%2FkWRQIDbW%2FoB4g5LpT1FWsGNoSaCdr%2BdpiPKYUhx8fYjA0AO2ambiHsuR2UeR6FcdyXg8Abjoe0n4sGRv0H1bRaiI%2B8w7Zpy2GK%2FQ67%2FqHcYnAIGikxpgKW1g4YAqMXWzAH20RvwsHD4kDNlGAgUpN2JtaHzdIDqXFW0Osqyxtqg6IK8x7b9iXFOHnSyIHrJkm63DMO6w0sMGOqUBHkgrqRNVSsP3YXVgsL5x35yWCktSk5jHQuqgb2N2k8Muxv6cSxrEUY36SvShYqtNYc75v7hnQf7YjfG0ZzCrmeMriI%2BZARdBQmN7zI1MGpOe44Puk9m4Oi0%2B8pnHENOlj%2FqFwhp5VJudRJItWVNIDmReVXJXMrQ6A5yqq6THBzkRlQBHBF9mpMS9InR8VzCByY3ZMDxd91MBv7co5nYXrUMNWA5X&X-Amz-Signature=ce9066a76cc8d80f0aaa12fef9ea3053de870a7ae0df80779948d7c2a9d03205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3A44SR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHvGJ2XggBlZxdeMCCC%2FAhseyOXGRdtCh%2BvWRUJI26HlAiEAs%2BOZwxaxa3G90zDRzxBkS4RBQybOna4Wng9TYULZOC0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMq11ITTAmktDaxqtyrcA5jwvOEi0kJBdD5lQW%2FY2NsYo0Xv8lwrHv8JIJIYXJpCjGFYGvbx6DqTcJ7XIA8CEeSmKV1PpDjzP4ue62PO6xm%2FXSWiPrTl0biOWU8KwvBBXRRTtor9%2FWBBmg7n5XZqIqSybC4mprCxWw0nWNNUk00iADyFXj00ViNSgpK0VahuLSRMBTHgV9QnSec3YeNvz9uhE%2FsVcER4uIFOzRgZxOjZROVe%2Fo%2BAiOkG54EgC8JYQ5C9sNmAOuuMP%2Fke9KFnolp5tqmLAXZ8v3YykaPRaABpiwhK6wUYmI%2FXbLGCquZBj6Q9PoEVUZY8LBUVhN28izVNgAZmurQ8DkXdwBawlNnS68vN8JzpAZnt%2FA%2FUqlJb1nHz0p3De31rTYMCBZaidEbtezZNugZf0ewg8043Xn1xitekO4Hl0piDQUQGE2E1nlgqZIaBmuW%2FkWRQIDbW%2FoB4g5LpT1FWsGNoSaCdr%2BdpiPKYUhx8fYjA0AO2ambiHsuR2UeR6FcdyXg8Abjoe0n4sGRv0H1bRaiI%2B8w7Zpy2GK%2FQ67%2FqHcYnAIGikxpgKW1g4YAqMXWzAH20RvwsHD4kDNlGAgUpN2JtaHzdIDqXFW0Osqyxtqg6IK8x7b9iXFOHnSyIHrJkm63DMO6w0sMGOqUBHkgrqRNVSsP3YXVgsL5x35yWCktSk5jHQuqgb2N2k8Muxv6cSxrEUY36SvShYqtNYc75v7hnQf7YjfG0ZzCrmeMriI%2BZARdBQmN7zI1MGpOe44Puk9m4Oi0%2B8pnHENOlj%2FqFwhp5VJudRJItWVNIDmReVXJXMrQ6A5yqq6THBzkRlQBHBF9mpMS9InR8VzCByY3ZMDxd91MBv7co5nYXrUMNWA5X&X-Amz-Signature=cc5023145dbd1facaf1ec3f27570bd863d852307a08c03332bc387b8a872bcdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IQSZUG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIASLZkyNkxC36JFdIENhkL9bwWg1VmfVv3Rbd3XoJ%2FymAiAA8n2riCBZuoYemQK%2BKbb3Y0x1nyvZSAxaHk3J5hm39Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMXCfDTXMUGxlSjSm3KtwDIUFfSc4zjDAsZbSvxamtOMnCgSJGFALWMtRMejUP6GwOKBM2OdLWiTjuhxkbMgOq4viV0%2BS4Ms39KA9p9nwNDbwBeYSLERQXrhx0JTk%2FxXuxFZBODiBddsx%2FGNklmkiidSUiT6GPo7KNw5Yelawfw0uwYb4839q0RjB9KELfBC8iRssMG5RVldPafG%2BR1HB2m9k4gG58yrJarcYPPyYDGSVpXIdyc7WfUp2kl0YbrA1QLDvM8rdqeZXn%2Fz9Xfi%2FmppvT%2FIaY8ZwjaVv60NwQDBGb3noNxenCvC3eyS%2BoSeEfdBXnP8bj4S%2FOrjD3iiTgYUJ0AlUOPQd%2F5G6WbpQ3kKsehvBKaR%2BZp7BgFMPegaVIUjVPttelym3wl4KIxGOrYunMV089KSUgtq41DCk4DYynHAn5BMzK26%2BQc%2Fsw%2BDFr6fPzVUYTPokMk%2F6NfFa5Xt9E2mLX8tQPDsOs3RmzoA%2BSve7D%2BFu4h%2FNQO2SmueMpeXA5oJbhbTT5taBcI5u19s9Wh%2FBPmfbF5josTdVvbmf1iLv255HV34%2FnqrPY0lvaIWMa7M1Znyjk%2F%2F4ZJvgiNj8TSKTE9VkXOnL0aC4ZGuIXn2ZQh0joM2dzAi3z7gIZIQdTNCCB5l9GvTMw1LDSwwY6pgFH%2F3X2QmEF%2BbGnZEDIjNDY2cQ8Dtu8z3XBPjAmxJRQNSvLvUaQfPQPSjON2fGnIMKrVRMO2MXptIoj0hQPX1AuX9f7rm0OzooRLO%2Bpq6rPh82c5yAjDyGs3fKv2iNjxFtJaSN6IgjA3ng5ZJGIBcd2R6Y4JBVqFm4o90oYmN51eZoxLRb4aIIvVDTcBz3Sgh8juuhg8v3HR3o50SvZ%2FbYiGmnI%2BJ0X&X-Amz-Signature=7d455aed101ae43ccb222695ede5625a4f564cb04f1c84ab33f4cac110427963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STOI5FRH%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDzkOOd1BV9Ov8YNef9w9uD3%2BTUiy%2BkeTckKST5C6IoHwIgAgOsJZZ5DIAvVMYcyBsHNsb3ov22kl4iBHV4sUAObYwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDP8S3LW%2BfREjlXAP6ircAxqM9b3rJOqXZ2b1zSEN0fkJU9wu21WxOpI60qpz9bQHAzvbPc1vQwAGq0KHCEsiD0XazC4xFrKb8INWKD7Ahd%2FI2sxJ9%2F3dsMEa%2FniYNCdU3YjLYv%2BMA9C%2BYSO6RaJJG0zIZDNkj4cqLy0rnzHPoR7eUI55CL4fsMzMh2H%2F6Srma2xsP67k%2Fgm33F%2BIyCASG%2BMI1HlyQEkiU9TvS2GMTxNkw5hwJs8zmvQlLKJdgziiOd0pUcjg9u9xUuh561n8IbYkAPZtrvke41THX7nKfmINQU5k%2BviALZ7tMg15ITkYskdCwUk1wi32UYQu7A6%2BB%2BJzq79Dmw24Rmb4Lz0sDRAtojqmpnqfvTlodRetowtZW0Kl126YHgNTEagL4v%2FnntxKxuP9kSjZoj1bgdtd7cKXjVpRJdYPaLlpuW2YBOSDGeCtyRFHTfWgS9a0DOzotNw7zpZyecydKgnfYQSTDGDyYcekA8T2uqo7ACli7T53eMyPUxmmDNKtEAYTOM7ajCWCSC7GbyttHwQo1goz37dphL%2Born79DdnMlM2iOOrh2HNm%2F7Di4wOcC8UxOBNvhAHG%2FENGoGScWNqy49ot1XQagvSWS1irii%2FnYbAZRcpGhp1omJEWIjeepoa2MIXP0sMGOqUBp6vXRsoxWbNM3gt4gc%2BKAL3G9acG23h1hKlf9qsAcnZNc2hIb%2BVRRIV1iNi02GNfcKJAl%2F77AI7ZmkNJON88c1e8TyEEiiKk%2FaSWXxWB0lMR8FWcKn9kKzFXIYO2iEJ3R80oKVaN%2FtezVOVqg6ACDtqy0tnxTzNWeO3lZ6eeDmjycQ9X5%2Bbs2pE%2BsKhU9amoG2zsQzgyOMYmSI1YZiLSLcyf1CGP&X-Amz-Signature=fb0cf5a36585943e42d2cae0acc8b24f82faa68d56711e55d5b834f54ff35052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E3A44SR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHvGJ2XggBlZxdeMCCC%2FAhseyOXGRdtCh%2BvWRUJI26HlAiEAs%2BOZwxaxa3G90zDRzxBkS4RBQybOna4Wng9TYULZOC0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMq11ITTAmktDaxqtyrcA5jwvOEi0kJBdD5lQW%2FY2NsYo0Xv8lwrHv8JIJIYXJpCjGFYGvbx6DqTcJ7XIA8CEeSmKV1PpDjzP4ue62PO6xm%2FXSWiPrTl0biOWU8KwvBBXRRTtor9%2FWBBmg7n5XZqIqSybC4mprCxWw0nWNNUk00iADyFXj00ViNSgpK0VahuLSRMBTHgV9QnSec3YeNvz9uhE%2FsVcER4uIFOzRgZxOjZROVe%2Fo%2BAiOkG54EgC8JYQ5C9sNmAOuuMP%2Fke9KFnolp5tqmLAXZ8v3YykaPRaABpiwhK6wUYmI%2FXbLGCquZBj6Q9PoEVUZY8LBUVhN28izVNgAZmurQ8DkXdwBawlNnS68vN8JzpAZnt%2FA%2FUqlJb1nHz0p3De31rTYMCBZaidEbtezZNugZf0ewg8043Xn1xitekO4Hl0piDQUQGE2E1nlgqZIaBmuW%2FkWRQIDbW%2FoB4g5LpT1FWsGNoSaCdr%2BdpiPKYUhx8fYjA0AO2ambiHsuR2UeR6FcdyXg8Abjoe0n4sGRv0H1bRaiI%2B8w7Zpy2GK%2FQ67%2FqHcYnAIGikxpgKW1g4YAqMXWzAH20RvwsHD4kDNlGAgUpN2JtaHzdIDqXFW0Osqyxtqg6IK8x7b9iXFOHnSyIHrJkm63DMO6w0sMGOqUBHkgrqRNVSsP3YXVgsL5x35yWCktSk5jHQuqgb2N2k8Muxv6cSxrEUY36SvShYqtNYc75v7hnQf7YjfG0ZzCrmeMriI%2BZARdBQmN7zI1MGpOe44Puk9m4Oi0%2B8pnHENOlj%2FqFwhp5VJudRJItWVNIDmReVXJXMrQ6A5yqq6THBzkRlQBHBF9mpMS9InR8VzCByY3ZMDxd91MBv7co5nYXrUMNWA5X&X-Amz-Signature=b3b6ab204d237ff8445791b4f3a3480578ed93066d3b8411f18c88b4baaf86b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
