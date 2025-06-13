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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIM5MBL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQC9sQKFZOK1ZtV6WnGWPv6kvjkSesZ1hdLfNirAm1QD4QIhALofgYFaaJQLuHzI40K4NxydYCjie9S6qWDiFe%2BOPqnhKv8DCBkQABoMNjM3NDIzMTgzODA1IgxeLNNr91SyXh3sdnMq3AMz%2FZrkL%2B5ZGxaM6BQZ9fqo14GPlSdFNdKsOieqHasH8NZCMjGqqbseOFXA4hxy8emGS65iCYQMFzvDL3Zgx73UFBt0Kde8gyPySQeHq3sKRa2fbizvoIJBKZamhaH%2B7UUqug%2BFtfKe3UY80QkRiCuSoQFEdS7P%2F3omGfhGMd4m0lZuv8mS1fH5KlFt1BQ2X%2B8JMZrGX7PQxQ6LBYpy6u4yQWJb%2BKblHCIieYH2D5doMvzTXgObLQphQhEyjmit%2BanKeJ%2BWjNd1%2BZsCTa1VfaO%2BAgdN8ibD6m18vBriTOzw4pif4%2Buro91v7%2FFGEKTw1Jl5v4oIiKGIrwJ2%2B2fc6qJkyVYiKbk%2BR3df0%2BtfIDHJbIoXcLqawJhqAcwGDOtQSpSrmbX%2FKURTUAvJSXr40VgsKR48%2BRbMf%2F5a5Qu6EJykNSkx1Zd1sqvjxKLJBeNBq3P9zdZuHaVlBFYlRmp8wpLvzRzUGJsEACv3OYqbumOWzB%2BTLpuO%2Bsg3B0pcUdh%2FoSh0PX2PabvKl2W48LadI6hI8NTfNaFG1694OsAfhvGMVWnNrGBNz%2BfUfaijngQPzy%2FMoqab203lENk9UqNTllWYoaGx1LahibATpEb1jG3Od3C0O%2FwTdfFf%2BmanKjDhlrHCBjqkAV4LCM4gq4S4rX7Y0jJ3566CNShNMNlNy74x93u22z5FFzbVlIRi9sJ0FmIGUTX827K3QNWu3F6tbnTbKnCeclyFZUxrbbqZECLq557Bm%2B7XyksK90bJaZ0keOju6yK5uqWwU%2BURN1zakPVaqibHcqDMf1GgdMi7xPcN6DKajklvtR4s3IeEf%2FcUgZ58pDpJqYKp50u3AJPKiYwMih23J%2FlRzw9B&X-Amz-Signature=5ba25916a2831e5cdc2e96fb69cdcd9445626706aa3bb95b08e617bbd2087175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIM5MBL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQC9sQKFZOK1ZtV6WnGWPv6kvjkSesZ1hdLfNirAm1QD4QIhALofgYFaaJQLuHzI40K4NxydYCjie9S6qWDiFe%2BOPqnhKv8DCBkQABoMNjM3NDIzMTgzODA1IgxeLNNr91SyXh3sdnMq3AMz%2FZrkL%2B5ZGxaM6BQZ9fqo14GPlSdFNdKsOieqHasH8NZCMjGqqbseOFXA4hxy8emGS65iCYQMFzvDL3Zgx73UFBt0Kde8gyPySQeHq3sKRa2fbizvoIJBKZamhaH%2B7UUqug%2BFtfKe3UY80QkRiCuSoQFEdS7P%2F3omGfhGMd4m0lZuv8mS1fH5KlFt1BQ2X%2B8JMZrGX7PQxQ6LBYpy6u4yQWJb%2BKblHCIieYH2D5doMvzTXgObLQphQhEyjmit%2BanKeJ%2BWjNd1%2BZsCTa1VfaO%2BAgdN8ibD6m18vBriTOzw4pif4%2Buro91v7%2FFGEKTw1Jl5v4oIiKGIrwJ2%2B2fc6qJkyVYiKbk%2BR3df0%2BtfIDHJbIoXcLqawJhqAcwGDOtQSpSrmbX%2FKURTUAvJSXr40VgsKR48%2BRbMf%2F5a5Qu6EJykNSkx1Zd1sqvjxKLJBeNBq3P9zdZuHaVlBFYlRmp8wpLvzRzUGJsEACv3OYqbumOWzB%2BTLpuO%2Bsg3B0pcUdh%2FoSh0PX2PabvKl2W48LadI6hI8NTfNaFG1694OsAfhvGMVWnNrGBNz%2BfUfaijngQPzy%2FMoqab203lENk9UqNTllWYoaGx1LahibATpEb1jG3Od3C0O%2FwTdfFf%2BmanKjDhlrHCBjqkAV4LCM4gq4S4rX7Y0jJ3566CNShNMNlNy74x93u22z5FFzbVlIRi9sJ0FmIGUTX827K3QNWu3F6tbnTbKnCeclyFZUxrbbqZECLq557Bm%2B7XyksK90bJaZ0keOju6yK5uqWwU%2BURN1zakPVaqibHcqDMf1GgdMi7xPcN6DKajklvtR4s3IeEf%2FcUgZ58pDpJqYKp50u3AJPKiYwMih23J%2FlRzw9B&X-Amz-Signature=f6c076d0be5ba1523e4f3243933972a0e738a8c466a3d43a089b28d6c7ebe128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIM5MBL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQC9sQKFZOK1ZtV6WnGWPv6kvjkSesZ1hdLfNirAm1QD4QIhALofgYFaaJQLuHzI40K4NxydYCjie9S6qWDiFe%2BOPqnhKv8DCBkQABoMNjM3NDIzMTgzODA1IgxeLNNr91SyXh3sdnMq3AMz%2FZrkL%2B5ZGxaM6BQZ9fqo14GPlSdFNdKsOieqHasH8NZCMjGqqbseOFXA4hxy8emGS65iCYQMFzvDL3Zgx73UFBt0Kde8gyPySQeHq3sKRa2fbizvoIJBKZamhaH%2B7UUqug%2BFtfKe3UY80QkRiCuSoQFEdS7P%2F3omGfhGMd4m0lZuv8mS1fH5KlFt1BQ2X%2B8JMZrGX7PQxQ6LBYpy6u4yQWJb%2BKblHCIieYH2D5doMvzTXgObLQphQhEyjmit%2BanKeJ%2BWjNd1%2BZsCTa1VfaO%2BAgdN8ibD6m18vBriTOzw4pif4%2Buro91v7%2FFGEKTw1Jl5v4oIiKGIrwJ2%2B2fc6qJkyVYiKbk%2BR3df0%2BtfIDHJbIoXcLqawJhqAcwGDOtQSpSrmbX%2FKURTUAvJSXr40VgsKR48%2BRbMf%2F5a5Qu6EJykNSkx1Zd1sqvjxKLJBeNBq3P9zdZuHaVlBFYlRmp8wpLvzRzUGJsEACv3OYqbumOWzB%2BTLpuO%2Bsg3B0pcUdh%2FoSh0PX2PabvKl2W48LadI6hI8NTfNaFG1694OsAfhvGMVWnNrGBNz%2BfUfaijngQPzy%2FMoqab203lENk9UqNTllWYoaGx1LahibATpEb1jG3Od3C0O%2FwTdfFf%2BmanKjDhlrHCBjqkAV4LCM4gq4S4rX7Y0jJ3566CNShNMNlNy74x93u22z5FFzbVlIRi9sJ0FmIGUTX827K3QNWu3F6tbnTbKnCeclyFZUxrbbqZECLq557Bm%2B7XyksK90bJaZ0keOju6yK5uqWwU%2BURN1zakPVaqibHcqDMf1GgdMi7xPcN6DKajklvtR4s3IeEf%2FcUgZ58pDpJqYKp50u3AJPKiYwMih23J%2FlRzw9B&X-Amz-Signature=edd5c457c97d63caf15e31c8397a881f54dcb0b64709ceaad0466b93c280f1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LTI54XD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDMoPIKSxhwlytoIjOSuou%2Fj0R9lQMOf4RyfH7lZBvF8AIgA7MBu1XgSuPi4REDhJTp8YJUtrYt7jVIOEMiFDCpcWYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCjqdUdeICnSPlrc%2FSrcA%2B2pPyAka3YaDgO6PlqoI1IFePse0Zpe%2BM2LLZ9vzIz5rdxA3Sc2dGfZYvWSMfzZN8rMqn8MVuB848zrC2d5Ode08S9toJLVqFP3OCfRVlEkfCeuFfRSZbVKKP6Uk%2BkQVALnQqlDd7Yrpo49eZXOu9wyu1TDGfvmSFrVdUaXSBIacTV5%2Fd7q1IO0SZpubxf8yTtEzl1cjlBeQEJGVKwIPy4ypdvXCqL7PWPOaKBQIQViUjNdIGaOvSDvYDFFwoe3e2MI4026%2Bm4q537Cd%2BZIVxOk4bq1tERv3wYLFaVLpjrojiYp1e%2BWNGkskbC5nsqEoJQvHk5VTcbpLubIkSehQEpu0LMhjrn6Vz3%2FmujEMUICdmo6ym8vtntus56ZqX0Xp8TzQC4EDCh0OLf0E5nn8p5myfKGU4Z%2BgPunD7aTQWNdpko2%2BLEq8YYUeWgRxV6CCmIvxmdUtW82kSiHBqjl1hQ99SP0NvXrjuEPp4Fw2GZJzNuUwSbztNP%2F4ifEZ7xHu7nnl8%2BCqu5TzCcvsKEUNp14jNWMo6ofBwy%2Ba2b02gnSabYYLVTvKwG6aEAwB545nLOn5TfPhZo4iXsEneiBDXDh1AKchv3boM3cQhYSv4hq%2Fgb89olKD9GlcIRYMN%2BWscIGOqUBocjw9VlQ0lLIJn4hOfdcxHfhVze781G3PTbKwQXcKgwqKwkw0Gwc9LNIMwzH2U9RwMB6R1BHnEw2P%2Fz6m5FCNuJNS685y2TrzcQ4ZJQF4xT0dDdQMPrcteEPN66PLUBQrLTvgNcltykGUr14Wh7UDsZFTFv5wAPMKsWulV2EbigOtwwtgHqMeiY5bSf1iAYpvYS7VfWfFt0au30DK1FCM7i8Djyg&X-Amz-Signature=39d0f0c0aa6d259e738459b0676c0ff5855c02b2f71abf3bd86d5f8a4340e2da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IS7H4NF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIASafnoIdbtgjOfTDLTxO6ra6yex9iOK1ulTqG0vpbiCAiBgL6r5ddnOQ8ANpzegshUgaOUmrIF1FUqmqh%2BmiLGa4Cr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMl1eKKI9P3APJiyF7KtwDebpZ06Shb6huHBj8Qjf%2FGXpX7pwJyZLmsJ7OyyoZgJDNVo%2B5ZzkUlPueGv1pYv0niyMHMh3e1%2FlwV5X0NDRuLwpMKvM7C%2Bu0AcqU9MKjNZM2CR5FSSiOM0C%2BDzFnIl4wqpwNNnKAFsMwvKsVMyi0MqLl%2B5tpzLYYawlhsBOU9bTtFgM0yluwKiXDp2w6MvP6CJajE7%2FBbbSkHarPT92ugW5CtASz7PLdj9rq866nvgawR%2FhpXXxfcoGqEho0zB1ZiyQtplYhzI0a7YhH3xt3xmwf%2FnpnA9wsgyWTxH%2BgiLPb8WRHqUfnD8jWGXgD3u%2F0L7PuGmZWoF4%2BH66a%2FGw7UIiYro%2BotMC8uYMn%2FqpI2VFS9AKYqgL7hTAnvdvmythLuX6EIPtiXCVCTlkiqoFuaZ7W2b64mQMRImX9qg%2B1dt9XDodkDpVaeggn45eA2eDwV1SOmEm8DfzVNoVRGMT3FolZ%2BJIVpHVlD2eruhMtjRGjF2IsrwYWESSu%2Bl5dQQlPXQ5VDJW6Q4EruAsIe7OXSE5N0XKxUo2hFQ6VDat%2BSmUMNp7ehIwEKJFeg4lKawDbRMrBJB0RnZzAQspAPfRREDM%2BMkrcMqShHWgi7fEk907COSGuSlwz3XcCG6owipixwgY6pgEEeaHocpkO7cnVChTLvIq8gxe5PtC%2B%2FVxt2lVgXCcjuPtF2yTClprE1fi0LJRAEhoCeMhae%2F53to2lTz7L%2BFSOveOjHtVzreCYTdi96mer6J1CJXIqjmqpH1pcMsXqKuWh2kuFrfooY9JtZmUjNvq1TuRTtmaWuR52QM2ceQYBXt6zs1bZ7GYM0w6QonuRRAe2%2BLXp8PMIsYWsAnmHNCviE2DeMD4u&X-Amz-Signature=92c810cb4f065fc155e7f4af9ec2e655e1f0ab40a1e46fc6e54abc42febc52a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIM5MBL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQC9sQKFZOK1ZtV6WnGWPv6kvjkSesZ1hdLfNirAm1QD4QIhALofgYFaaJQLuHzI40K4NxydYCjie9S6qWDiFe%2BOPqnhKv8DCBkQABoMNjM3NDIzMTgzODA1IgxeLNNr91SyXh3sdnMq3AMz%2FZrkL%2B5ZGxaM6BQZ9fqo14GPlSdFNdKsOieqHasH8NZCMjGqqbseOFXA4hxy8emGS65iCYQMFzvDL3Zgx73UFBt0Kde8gyPySQeHq3sKRa2fbizvoIJBKZamhaH%2B7UUqug%2BFtfKe3UY80QkRiCuSoQFEdS7P%2F3omGfhGMd4m0lZuv8mS1fH5KlFt1BQ2X%2B8JMZrGX7PQxQ6LBYpy6u4yQWJb%2BKblHCIieYH2D5doMvzTXgObLQphQhEyjmit%2BanKeJ%2BWjNd1%2BZsCTa1VfaO%2BAgdN8ibD6m18vBriTOzw4pif4%2Buro91v7%2FFGEKTw1Jl5v4oIiKGIrwJ2%2B2fc6qJkyVYiKbk%2BR3df0%2BtfIDHJbIoXcLqawJhqAcwGDOtQSpSrmbX%2FKURTUAvJSXr40VgsKR48%2BRbMf%2F5a5Qu6EJykNSkx1Zd1sqvjxKLJBeNBq3P9zdZuHaVlBFYlRmp8wpLvzRzUGJsEACv3OYqbumOWzB%2BTLpuO%2Bsg3B0pcUdh%2FoSh0PX2PabvKl2W48LadI6hI8NTfNaFG1694OsAfhvGMVWnNrGBNz%2BfUfaijngQPzy%2FMoqab203lENk9UqNTllWYoaGx1LahibATpEb1jG3Od3C0O%2FwTdfFf%2BmanKjDhlrHCBjqkAV4LCM4gq4S4rX7Y0jJ3566CNShNMNlNy74x93u22z5FFzbVlIRi9sJ0FmIGUTX827K3QNWu3F6tbnTbKnCeclyFZUxrbbqZECLq557Bm%2B7XyksK90bJaZ0keOju6yK5uqWwU%2BURN1zakPVaqibHcqDMf1GgdMi7xPcN6DKajklvtR4s3IeEf%2FcUgZ58pDpJqYKp50u3AJPKiYwMih23J%2FlRzw9B&X-Amz-Signature=88bc2e43268de106aa83eef62c8d4f50f5c9c644943a348c61bcac888c9ace32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
