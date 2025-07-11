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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY6QHJF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkp2PA%2B8uaa52fVOozZFQTBvGmoo3mMDXEityBQ6xFOAiBpGMUwuUSQgzkua6VbePEb8Gt%2FUNLbDTi3R6sj1JVP1iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeCykdmNne9eVV2MKtwDgHqrbwvKxkQ1W4xoP%2B%2FB0oBE6RVE0h2ZVIuzyx%2BYcr8lVhs9ZNUaMakeqp4SWrjWzym9gNDTIER5QxYQge7v4AazND18IGG3gWOZ1qiF6tieGAStZ9wM81jFaSB8%2F6%2B86cNfGL2tjEJfbo%2FI1Zj5NoQBXr7euGTcwLeL1vd05UM19nx0etMvUkz0wGd4SGgeeHU6OEdcF5owp5drgK5E6%2BnljC5mQtqHij1kUFBjq8rH7TNCjWUc3WUwaKAcFstG%2BbggQ7QNhstFji9z%2FfdsfryayhC9fT%2FlY6i9hIwg9JBo1fFB9Ix17BVZHz5o7hCP1BrOUdgXpup19PY3Bs8er2QGtdiRrmIZu8oj%2FY57Z4QahhJlcdDkH2lmQ5PkNwqNLkjyUq%2FHpZ5b1BTrHG4F0RykCdQuZgSJJonbvFheOdDVxJgDoLQEQNhMclrVHSibrvdI0CBYU65nsrfsObeh3loGnIlailz7V0l11FTFnlzGoVJZoq2h9bI6cx8P8vTGlkb1fhWQOn0EbOpFYgh9t2k3gtIt6zPNLzV5dzaVRJ9ZYdr2PEzqa%2FEfGMIQtqwEkOEmW0GNteR%2BkHHkcORGSidm37GKYD2%2BzuxOSgvnGIputjFDOh%2Bg%2B%2Bkyi80wtqfDwwY6pgEiBTdjbY%2BnjZQ3GSWuo9etpHq3lJOEX3tIgFZBBYqQCw8HBPdhrKhJEAa%2B35zxSaGBQBwXo6f%2FBDLe5flmpPuMVSa4T87E%2F%2BzcwYLv9GFPu%2FasLCVvKqd4XyqvpTVH%2BtxtX7Lk36ob5%2BF%2BtvG320ihr5h%2BRlC1UCsii933AsACXoBWbZdl8YlR5raqpS1RL6MMJZsHP2%2F0eC01olij9dfxC9KY1pv9&X-Amz-Signature=b2470931fb2090311fbf0f9d98547df11db053327c92370716bb03e07a519869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY6QHJF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkp2PA%2B8uaa52fVOozZFQTBvGmoo3mMDXEityBQ6xFOAiBpGMUwuUSQgzkua6VbePEb8Gt%2FUNLbDTi3R6sj1JVP1iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeCykdmNne9eVV2MKtwDgHqrbwvKxkQ1W4xoP%2B%2FB0oBE6RVE0h2ZVIuzyx%2BYcr8lVhs9ZNUaMakeqp4SWrjWzym9gNDTIER5QxYQge7v4AazND18IGG3gWOZ1qiF6tieGAStZ9wM81jFaSB8%2F6%2B86cNfGL2tjEJfbo%2FI1Zj5NoQBXr7euGTcwLeL1vd05UM19nx0etMvUkz0wGd4SGgeeHU6OEdcF5owp5drgK5E6%2BnljC5mQtqHij1kUFBjq8rH7TNCjWUc3WUwaKAcFstG%2BbggQ7QNhstFji9z%2FfdsfryayhC9fT%2FlY6i9hIwg9JBo1fFB9Ix17BVZHz5o7hCP1BrOUdgXpup19PY3Bs8er2QGtdiRrmIZu8oj%2FY57Z4QahhJlcdDkH2lmQ5PkNwqNLkjyUq%2FHpZ5b1BTrHG4F0RykCdQuZgSJJonbvFheOdDVxJgDoLQEQNhMclrVHSibrvdI0CBYU65nsrfsObeh3loGnIlailz7V0l11FTFnlzGoVJZoq2h9bI6cx8P8vTGlkb1fhWQOn0EbOpFYgh9t2k3gtIt6zPNLzV5dzaVRJ9ZYdr2PEzqa%2FEfGMIQtqwEkOEmW0GNteR%2BkHHkcORGSidm37GKYD2%2BzuxOSgvnGIputjFDOh%2Bg%2B%2Bkyi80wtqfDwwY6pgEiBTdjbY%2BnjZQ3GSWuo9etpHq3lJOEX3tIgFZBBYqQCw8HBPdhrKhJEAa%2B35zxSaGBQBwXo6f%2FBDLe5flmpPuMVSa4T87E%2F%2BzcwYLv9GFPu%2FasLCVvKqd4XyqvpTVH%2BtxtX7Lk36ob5%2BF%2BtvG320ihr5h%2BRlC1UCsii933AsACXoBWbZdl8YlR5raqpS1RL6MMJZsHP2%2F0eC01olij9dfxC9KY1pv9&X-Amz-Signature=e5d2174079afb2f3721b7b0532bfeb1c4ab96c50b3392d492f3d2e7276504bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY6QHJF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkp2PA%2B8uaa52fVOozZFQTBvGmoo3mMDXEityBQ6xFOAiBpGMUwuUSQgzkua6VbePEb8Gt%2FUNLbDTi3R6sj1JVP1iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeCykdmNne9eVV2MKtwDgHqrbwvKxkQ1W4xoP%2B%2FB0oBE6RVE0h2ZVIuzyx%2BYcr8lVhs9ZNUaMakeqp4SWrjWzym9gNDTIER5QxYQge7v4AazND18IGG3gWOZ1qiF6tieGAStZ9wM81jFaSB8%2F6%2B86cNfGL2tjEJfbo%2FI1Zj5NoQBXr7euGTcwLeL1vd05UM19nx0etMvUkz0wGd4SGgeeHU6OEdcF5owp5drgK5E6%2BnljC5mQtqHij1kUFBjq8rH7TNCjWUc3WUwaKAcFstG%2BbggQ7QNhstFji9z%2FfdsfryayhC9fT%2FlY6i9hIwg9JBo1fFB9Ix17BVZHz5o7hCP1BrOUdgXpup19PY3Bs8er2QGtdiRrmIZu8oj%2FY57Z4QahhJlcdDkH2lmQ5PkNwqNLkjyUq%2FHpZ5b1BTrHG4F0RykCdQuZgSJJonbvFheOdDVxJgDoLQEQNhMclrVHSibrvdI0CBYU65nsrfsObeh3loGnIlailz7V0l11FTFnlzGoVJZoq2h9bI6cx8P8vTGlkb1fhWQOn0EbOpFYgh9t2k3gtIt6zPNLzV5dzaVRJ9ZYdr2PEzqa%2FEfGMIQtqwEkOEmW0GNteR%2BkHHkcORGSidm37GKYD2%2BzuxOSgvnGIputjFDOh%2Bg%2B%2Bkyi80wtqfDwwY6pgEiBTdjbY%2BnjZQ3GSWuo9etpHq3lJOEX3tIgFZBBYqQCw8HBPdhrKhJEAa%2B35zxSaGBQBwXo6f%2FBDLe5flmpPuMVSa4T87E%2F%2BzcwYLv9GFPu%2FasLCVvKqd4XyqvpTVH%2BtxtX7Lk36ob5%2BF%2BtvG320ihr5h%2BRlC1UCsii933AsACXoBWbZdl8YlR5raqpS1RL6MMJZsHP2%2F0eC01olij9dfxC9KY1pv9&X-Amz-Signature=121695c5e33a70e46b3f85ffa6f18ece6ab2d9b50082ad45389dc544c17ea777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RNCOVJ3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7lWTh3PhfIOov%2B2NlUHm3DZGRzJvef568o1fWd%2FdQ5AiBjVvcKPHOuDhMvWuzqtVAjH2xJ12XQH5OALpkr4r%2BcryqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWhhMeKi4P6NtfP5BKtwDOgYCjkk%2BVfQmKOo5B%2FJ47BK63UMF30TGmYNZdZj9DJPR27ABwOCFn2YDxDTsAFQ%2FGn0nbIdGls8dCVxdEbE9xJY1mqmYBUhua1bPrkycCOpUGOJhZkI7cdL3wVGHzcVILeiAdog%2BxqmhOVKaeKBIeYuNVYuXbUh7pRlFbJwDl2ykXTBonYzEnlNTO%2FFdlG3RkCzFBT1jerCy5bIh881NU%2BSNMik4IyEZ23KJfADlVs84OAh%2FO%2Bt%2FQRl5hsrCpjYEC7S%2B8qqT2vsts7Tc9FmeBfL8fPOf7p9NovO8Xhk1z0SPSe6if9Y6bvteIJC3KaQMrgzPUUvinpIUkdgztSejOdUX6Kkqs8IAehmiMTWF5eRZ8LcRYQAjac6O5vDCn%2BI%2BC9Q6iF7o1PIH4VKF7TezPiG7%2FJxFfedWSOOQwG3NS80RXG2IO%2FoTjKRxSOaKi2Y%2BFFbWiPwpFMJwuFjn850SEoDDIhk0ouw4OT71%2Fl%2BKBdaQY2lioC%2FVTmoftvQNMEr3a1E2p7BrNOqbNbAvy1F3d19aXoyyvt6gaFH%2BjfnaN1WZDMpZ7utj8UfnmJUCkvG6PZ6DkZ9eHabicL1tDcyffJz7Quhu4BillcueAV%2B%2B%2BKwdVgrnkCgqB0fU5VMwzKfDwwY6pgFpJetXLWrDjErJQHUW6ZXB%2BxlCeSxGcFabr%2BUjmWqiquMyupKgRDtWBBnfwu3LLMhjkLO36jdV0LxtP4L17%2BdNg8JwWR842nUTOJcEfHdbbcyuwTt740MKEpo0JW5LOnWRrCD4YXRRUpoT%2B6Pc9T93vnA0c2LuksGuKT8YEVHRq3BMObxtmkZysPSAGDA6jPWCPoE1nfANBWdBKk78Cwnbmzuu0BGe&X-Amz-Signature=accdff5c798c2fc0bc82fcb16b4fd2a9f972a8466a8a74fd956d4971853798bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5HVSMJV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7X9HeOr8BtaqXf0LIdV099gZzph2c1YB9jdaYrpKr9AiEA5Avuk6YJGpYXVbuuWf%2B2dy3I1mxHc%2FCBC9yE0DrGHYcqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3X0B3NPzGg4fwptSrcA4M%2BF0pF0FmSU9Kvub6HPI%2F7XFTY0Md%2FhdiQWuMxsEOlYHEsEOcUzPuKMnUqZIduSA66D2APszPVVCe1nSFvTCTO4sBLFWE9LvAPHscvmwhumZF0s%2FiJZ2blGTQ7FhFvvKZD5M%2FHeTxOlxv9jDulsyO57nRImqFbTlQl7mcceO3lSiXX3e3yH52cExHLBZER6Yudg7%2Bh%2BJ0WXDYbko4hxu8hV88N8ZYjOWdxqtPZ%2B5DL0q21Qi6sUkkGiHSQjEWc4HivBrM4e5Qh2UWFbdovFNALBBS9CquxTx618VvzGCHLciNgySBN7u6skB%2BIY0VmEFJxJKL1lUExr7nkRxSIWr%2BbRBaIYn4cddWKGLojqSMf0FOBZ32UxqylAUPW3kdBDd95011EP2N5c%2F7g0GE2pHQn2N1l1a0QT68dyUesiGXEPBHX%2FSh%2BHHgaZ7sYegyEW%2BEomlA0qoe8%2B7kQDpNKegB1tOlMngUACBVhN%2BxwtUQPUydIptnL1QUr9VWmvY6E0G%2Bw2MaZ47DKLGu%2FkVxK%2BUxp22pr%2FQufKht0EkO85xrrSbqagQPjIKLxyM%2Bdyv7IQYLLueNc0gnWHgPi8scctUgXgMyy8gc%2BwcWnpoSW%2FtlyIK6eooFdNzrIJjsIMPKnw8MGOqUBzfXjIipUrREmUY0llY4SFGDKhkZAbJvYgwBm4kQVEMdO%2BrlVx2BxSmBENN0TMW3qsWZN5oNMakyuxs2K2yERt134tMAiR2%2Bu4dwkXdHgmFJCbKjqy1nYtfOYwV29DS5yYokmLhloZvTl%2Bw1gV4iIZ8MzwGkI0Kl7avX4zzt34moSM%2FH7de2niunoYunHqC2kETJYjH%2B8n2zODQbOGR7wD9vHVSN7&X-Amz-Signature=9754b8b5ddd763f5440e4bfdd4224838fa6963089ef0595f5ad8b7e352e006ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY6QHJF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkp2PA%2B8uaa52fVOozZFQTBvGmoo3mMDXEityBQ6xFOAiBpGMUwuUSQgzkua6VbePEb8Gt%2FUNLbDTi3R6sj1JVP1iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeCykdmNne9eVV2MKtwDgHqrbwvKxkQ1W4xoP%2B%2FB0oBE6RVE0h2ZVIuzyx%2BYcr8lVhs9ZNUaMakeqp4SWrjWzym9gNDTIER5QxYQge7v4AazND18IGG3gWOZ1qiF6tieGAStZ9wM81jFaSB8%2F6%2B86cNfGL2tjEJfbo%2FI1Zj5NoQBXr7euGTcwLeL1vd05UM19nx0etMvUkz0wGd4SGgeeHU6OEdcF5owp5drgK5E6%2BnljC5mQtqHij1kUFBjq8rH7TNCjWUc3WUwaKAcFstG%2BbggQ7QNhstFji9z%2FfdsfryayhC9fT%2FlY6i9hIwg9JBo1fFB9Ix17BVZHz5o7hCP1BrOUdgXpup19PY3Bs8er2QGtdiRrmIZu8oj%2FY57Z4QahhJlcdDkH2lmQ5PkNwqNLkjyUq%2FHpZ5b1BTrHG4F0RykCdQuZgSJJonbvFheOdDVxJgDoLQEQNhMclrVHSibrvdI0CBYU65nsrfsObeh3loGnIlailz7V0l11FTFnlzGoVJZoq2h9bI6cx8P8vTGlkb1fhWQOn0EbOpFYgh9t2k3gtIt6zPNLzV5dzaVRJ9ZYdr2PEzqa%2FEfGMIQtqwEkOEmW0GNteR%2BkHHkcORGSidm37GKYD2%2BzuxOSgvnGIputjFDOh%2Bg%2B%2Bkyi80wtqfDwwY6pgEiBTdjbY%2BnjZQ3GSWuo9etpHq3lJOEX3tIgFZBBYqQCw8HBPdhrKhJEAa%2B35zxSaGBQBwXo6f%2FBDLe5flmpPuMVSa4T87E%2F%2BzcwYLv9GFPu%2FasLCVvKqd4XyqvpTVH%2BtxtX7Lk36ob5%2BF%2BtvG320ihr5h%2BRlC1UCsii933AsACXoBWbZdl8YlR5raqpS1RL6MMJZsHP2%2F0eC01olij9dfxC9KY1pv9&X-Amz-Signature=4f631f2597803531e150f33532d42d6a97595d72690b49aad62d50049572daeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
