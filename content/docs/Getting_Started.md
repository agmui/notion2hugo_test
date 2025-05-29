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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZYEHP5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqzbIc7AOBgb0yRY3Z%2FuuRUXfo93u9tm4zYTKKP3%2BwSAiEA%2BJGwF9lBJg9faSD0tdH0wYDQnihld%2FQLf%2BptR1eHVcgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZk9MZQOUcInaJz4CrcAzJKJL6193xY5aJyfqNKNnIcLDd4sHuzqm6IIikN2tZTOQipsAxpTpN7Dn67IQ3CSRvOkKy7nZycjDKkJV5hfivnsUr9xyFWyLdz9errZWh2Dbb3XOk3pYWO0zFDaaA3mug%2F9q50cESYlCE%2FLGerulOMnBeVXyuOJ82whXXfwKO3asTV8Pq%2FGthUMcs6RsXTPete%2FxkyRZhiS7%2FQKF83L517jPsL7pZN66dF6h87vBkWc0LEQUMv%2BMk6%2F5UpQ3Ni%2FTPqG2uhCHtJdWLCIKxldlxSEQMDyexdwkHqw4%2FX421QHfSYTsi4hfBm%2Fyz9Yv084FO46aZcykP2VGnTPUFbKIcO9zaKt9wod0evdVi7zU9VWBmdKTup%2F85Un2Ft1h99yoZ%2B23yf8gDjeP4nUjRpep5WZSJtBAPv5YoV%2F5XhCXOUmczYActUd%2Fl9PpcI397qNg%2B5S10igsICxF%2Bb8KzGlydLCSBKC0oefZXENP1XVm64yB0cZezBm6PNUw1KfudCf8NqHfOEA1lJ6QedbkvoayJ76vvP%2Bpq3%2BFhLROan3mKboBNNYdOBAADdc6B9oNO17KjEoxZsD6fHc58GW6xB%2BiGz%2Br8xZXpFRKGTehGAjnxVaDN74qATcgucyZCEMKGI38EGOqUBVVi2fzueqXySht3HLC3kARvok1B7cSvdyfS6fKwFRYMJ%2FypOPbIasQEKrlMLO%2FjCdE5a9mxnh3oUO28Hg1Z0TKaqWsJR%2FqDAhaYRJQ1YqAA8sSEFsUP8GCT8N1GdGXnMIhOBiGDava3vzeFS8dj0MIhLSolgKcSXNXjA6gO20fbHu6ugVYG9oYMyk9dvjYeUBQurYt20s4wIqcpB1NzHcm%2BxUMNt&X-Amz-Signature=bd4429cc7ab37b6e0df0ce0c938bb9585302fa068f1cd59a1d7fad461dddf419&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZYEHP5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqzbIc7AOBgb0yRY3Z%2FuuRUXfo93u9tm4zYTKKP3%2BwSAiEA%2BJGwF9lBJg9faSD0tdH0wYDQnihld%2FQLf%2BptR1eHVcgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZk9MZQOUcInaJz4CrcAzJKJL6193xY5aJyfqNKNnIcLDd4sHuzqm6IIikN2tZTOQipsAxpTpN7Dn67IQ3CSRvOkKy7nZycjDKkJV5hfivnsUr9xyFWyLdz9errZWh2Dbb3XOk3pYWO0zFDaaA3mug%2F9q50cESYlCE%2FLGerulOMnBeVXyuOJ82whXXfwKO3asTV8Pq%2FGthUMcs6RsXTPete%2FxkyRZhiS7%2FQKF83L517jPsL7pZN66dF6h87vBkWc0LEQUMv%2BMk6%2F5UpQ3Ni%2FTPqG2uhCHtJdWLCIKxldlxSEQMDyexdwkHqw4%2FX421QHfSYTsi4hfBm%2Fyz9Yv084FO46aZcykP2VGnTPUFbKIcO9zaKt9wod0evdVi7zU9VWBmdKTup%2F85Un2Ft1h99yoZ%2B23yf8gDjeP4nUjRpep5WZSJtBAPv5YoV%2F5XhCXOUmczYActUd%2Fl9PpcI397qNg%2B5S10igsICxF%2Bb8KzGlydLCSBKC0oefZXENP1XVm64yB0cZezBm6PNUw1KfudCf8NqHfOEA1lJ6QedbkvoayJ76vvP%2Bpq3%2BFhLROan3mKboBNNYdOBAADdc6B9oNO17KjEoxZsD6fHc58GW6xB%2BiGz%2Br8xZXpFRKGTehGAjnxVaDN74qATcgucyZCEMKGI38EGOqUBVVi2fzueqXySht3HLC3kARvok1B7cSvdyfS6fKwFRYMJ%2FypOPbIasQEKrlMLO%2FjCdE5a9mxnh3oUO28Hg1Z0TKaqWsJR%2FqDAhaYRJQ1YqAA8sSEFsUP8GCT8N1GdGXnMIhOBiGDava3vzeFS8dj0MIhLSolgKcSXNXjA6gO20fbHu6ugVYG9oYMyk9dvjYeUBQurYt20s4wIqcpB1NzHcm%2BxUMNt&X-Amz-Signature=716f56105c66e86cd1465eb617b80d5eb362ad4d3d23c10c37f6e60d446ffa63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZYEHP5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqzbIc7AOBgb0yRY3Z%2FuuRUXfo93u9tm4zYTKKP3%2BwSAiEA%2BJGwF9lBJg9faSD0tdH0wYDQnihld%2FQLf%2BptR1eHVcgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZk9MZQOUcInaJz4CrcAzJKJL6193xY5aJyfqNKNnIcLDd4sHuzqm6IIikN2tZTOQipsAxpTpN7Dn67IQ3CSRvOkKy7nZycjDKkJV5hfivnsUr9xyFWyLdz9errZWh2Dbb3XOk3pYWO0zFDaaA3mug%2F9q50cESYlCE%2FLGerulOMnBeVXyuOJ82whXXfwKO3asTV8Pq%2FGthUMcs6RsXTPete%2FxkyRZhiS7%2FQKF83L517jPsL7pZN66dF6h87vBkWc0LEQUMv%2BMk6%2F5UpQ3Ni%2FTPqG2uhCHtJdWLCIKxldlxSEQMDyexdwkHqw4%2FX421QHfSYTsi4hfBm%2Fyz9Yv084FO46aZcykP2VGnTPUFbKIcO9zaKt9wod0evdVi7zU9VWBmdKTup%2F85Un2Ft1h99yoZ%2B23yf8gDjeP4nUjRpep5WZSJtBAPv5YoV%2F5XhCXOUmczYActUd%2Fl9PpcI397qNg%2B5S10igsICxF%2Bb8KzGlydLCSBKC0oefZXENP1XVm64yB0cZezBm6PNUw1KfudCf8NqHfOEA1lJ6QedbkvoayJ76vvP%2Bpq3%2BFhLROan3mKboBNNYdOBAADdc6B9oNO17KjEoxZsD6fHc58GW6xB%2BiGz%2Br8xZXpFRKGTehGAjnxVaDN74qATcgucyZCEMKGI38EGOqUBVVi2fzueqXySht3HLC3kARvok1B7cSvdyfS6fKwFRYMJ%2FypOPbIasQEKrlMLO%2FjCdE5a9mxnh3oUO28Hg1Z0TKaqWsJR%2FqDAhaYRJQ1YqAA8sSEFsUP8GCT8N1GdGXnMIhOBiGDava3vzeFS8dj0MIhLSolgKcSXNXjA6gO20fbHu6ugVYG9oYMyk9dvjYeUBQurYt20s4wIqcpB1NzHcm%2BxUMNt&X-Amz-Signature=7004107df010e657808fb97a5f48562f53613c4e1516fcc55089a4a59c231c13&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW52JVGT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6e9HE%2Fkon5pg4QawUkRI26sZRBqTSMUY35c4cvJNlogIhAOdFQri03pAxkkANLdRkrST5HTZZwQ58%2B%2BOnag6edzhBKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvgv6MLRm7V0JcIqQq3APWhr9Wp3MGYRe7CblwYKDdLpqBNgXd8oK%2FXcOvzslnNeDAyf6RasV6oISzS5ipZmaaod1qYIf%2BSt8mfeOO7iDcH46hzR0wI91J4ihqdBX%2BxdglmoTwyab12FC3hueHu%2FpYbkYuE2ZrIPjefZdUSoyUSkwq01qDRXgMRwAB6xPXA1j%2FFCjQ2q0UV8WqXwnrah8an55MV2SMjo5dfQ1jeWNUC8kOW%2BXOXUbFj7H%2FscHnWorE6Gu39OH4%2FCDwcgypjr3RjqsiqVM2RDpLwHko84a64YVXcZrXXcKFYfDr8hS9pQy0Y%2Bg8Cr%2BUqDzRU6OjPYalpYZkef4j5QFRTsURNT3QpKRnUitj%2By%2FOcr80qhplEo1ZuZSP7woCF1QMQdHXoW9UnU6HcRl5BoGbgmHixXW%2Fj8rX8W8nbH2oD2PodCJ7rMXfHWxY0shAKyO16eXwUBdcjr4niC6hVh8Ni6IHihkq1bVQxiZaq3xLEhv34kaSQnNzqQYRQxpaan8KhpCk4aQUPh3NDOQnsMkJHXJOwrO4DnQcUY19Rg6PSvX1pzayTvqn8BpbNIJceRr7iCNZ9V6rLoeqQSYK1S6QeG0dAwMeB1hg2%2F9bimOwrkceF1hFUeq4YjG4bNqb%2BoPehzDOiN%2FBBjqkAQMVeqQOG9yVfkPUqdcspQursxY2pnjvVb5MtWXz6o3VbxSXD5uKo0HnMIk%2FDmM61ILUG7Rx9dyYIzFzXGHH6ZFjsfLdUYx1%2FtiddalbgL0pgmi0mU09QX%2FU09lgqlX1ab4FIgoi%2Bl6H2UEPFefMKKVyiB77Cifm6mbeQx9hKEL7R7jv7UBjTYWploL%2F9On%2BkX7PmjHYip94oe0DadLz1rs7F%2BV%2B&X-Amz-Signature=320c0df2d5ea4b6871a346d1485a3592c942dfde0493809719411b01a9a26e92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWG2TJXS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7IgXeRdHSlV3p1wjGEe5SEn%2B4%2BgLFHvnGh9KeXGyMLAiEAs8s%2FPxnGSOMDIuDvj3H0YhBEVcilBXLuMq%2FESlUPgKQqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXSqkUD%2F1z0i%2FfdkCrcA1uDNxKy%2B%2F9xSt9GwIOfcuSzYnFTsmUP%2BEow5HvT9rUKOkcYAyu3g1CuiUvpOitUCQT4bRSbfm9seVtkKP8svk6gEtyWPG0LaHXXM2OyW4NHUmDwHLzOybf%2BqfGIfZzsHMwGspRR7%2Bwx7HxE5yEUoWa7aX6n0vvLGF48xV3FxYfCV7pwyI7k8LvwJvEyTQluGOfke9WlHEhJxt4yCj1BujyTg6O%2Fhb6l3VeMheVA2wI4ThhC%2B37REQ7%2BoCF%2BO%2BR7Dyktu%2Be0O1y0pRElHE%2BX1Kc8xPxTxa996kogwUQpNDoFQWKcBF275VmxCIJxnrjMCjXOSMkS4urekNstzoNLQ%2BiWmD0IsoCSMryuW4tnkItW1waKBJAhCLlsajiBTtaXT9pcJJEU61QcDOvoTPj7hB3UAPS1DLR3r451hdG8pzBeUak633LPAhT8vg31aussnJrTOUPicZlxAOdbS%2FrdCHgCtVB97JYGKlKbqaYGWAv3gSOIZWPyLOfycl%2F9ZKJaqg2%2BocUh%2B%2Fb%2BObTU7xNDT8vnkxyNr5bGYKmoiWzx%2Ba12AbYa1PkmjKhAMCUhqqduY4vIxjlURu%2F2LX63zfJv9vD3q%2Ba8FksiZ4oQSyl1d25nWWFWtYnw0kgsFy0kMPeI38EGOqUB1%2BYjb4wM%2BxBnE4VsHXMk7YZm2KDh2SAj%2F%2FuU0kuS2%2FG8odPFDsELArXcN38q7e9AblShC6Uh%2BMqzJSwk61OhLKzDpzwUGsy6XZBlIDiZSf%2B5Aatv8CEIvq61upckwKQbEyVkiYQ42DMbAuEftxU3ZDL%2B63gqwCoTHOTNWYBKPLVHUCAeqT14jyIy%2F%2F108qW%2Fn1UjVMaQ38PyliU1%2FXQOsMt6cSiz&X-Amz-Signature=31d20d7760348a7dbb214363ddaf5bd8e3b721aec0f0d6e6afd9f5b36931df3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZYEHP5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqzbIc7AOBgb0yRY3Z%2FuuRUXfo93u9tm4zYTKKP3%2BwSAiEA%2BJGwF9lBJg9faSD0tdH0wYDQnihld%2FQLf%2BptR1eHVcgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZk9MZQOUcInaJz4CrcAzJKJL6193xY5aJyfqNKNnIcLDd4sHuzqm6IIikN2tZTOQipsAxpTpN7Dn67IQ3CSRvOkKy7nZycjDKkJV5hfivnsUr9xyFWyLdz9errZWh2Dbb3XOk3pYWO0zFDaaA3mug%2F9q50cESYlCE%2FLGerulOMnBeVXyuOJ82whXXfwKO3asTV8Pq%2FGthUMcs6RsXTPete%2FxkyRZhiS7%2FQKF83L517jPsL7pZN66dF6h87vBkWc0LEQUMv%2BMk6%2F5UpQ3Ni%2FTPqG2uhCHtJdWLCIKxldlxSEQMDyexdwkHqw4%2FX421QHfSYTsi4hfBm%2Fyz9Yv084FO46aZcykP2VGnTPUFbKIcO9zaKt9wod0evdVi7zU9VWBmdKTup%2F85Un2Ft1h99yoZ%2B23yf8gDjeP4nUjRpep5WZSJtBAPv5YoV%2F5XhCXOUmczYActUd%2Fl9PpcI397qNg%2B5S10igsICxF%2Bb8KzGlydLCSBKC0oefZXENP1XVm64yB0cZezBm6PNUw1KfudCf8NqHfOEA1lJ6QedbkvoayJ76vvP%2Bpq3%2BFhLROan3mKboBNNYdOBAADdc6B9oNO17KjEoxZsD6fHc58GW6xB%2BiGz%2Br8xZXpFRKGTehGAjnxVaDN74qATcgucyZCEMKGI38EGOqUBVVi2fzueqXySht3HLC3kARvok1B7cSvdyfS6fKwFRYMJ%2FypOPbIasQEKrlMLO%2FjCdE5a9mxnh3oUO28Hg1Z0TKaqWsJR%2FqDAhaYRJQ1YqAA8sSEFsUP8GCT8N1GdGXnMIhOBiGDava3vzeFS8dj0MIhLSolgKcSXNXjA6gO20fbHu6ugVYG9oYMyk9dvjYeUBQurYt20s4wIqcpB1NzHcm%2BxUMNt&X-Amz-Signature=f68eca3964497b38419bc0fd90e2f807e63ced8c1a347545c9269eadfc4c3891&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
