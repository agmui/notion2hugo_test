---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CTZLCH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEY9Le2hseuhoh4n8iG4AfdjaGOQBWvmBzUrl2axiMhgIgDR65LvkaSKKIZfve%2FQjhvkYm0k6wnUvOi8f4Ugxss9Mq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJx75VO4RgTrrF1IxCrcA2ZEtfIfXKe6euefybQLGmeZ8f0gc8GDr8%2BvZLXqmVCLeSwcXw6HK%2FxWnxb93tvG7LamET%2Fl3DVZPeElTU1QRICPOtj8rM7HCgQBCZgntpQbhUwfb8veNfyT7EGPEnRIEjjWRb%2Bba0t8VbzsVfNmlbRfE7OnQQ2GM%2BuxCz6mlC6pLHqcdFVo5HJvHnaONaqFesKE2D%2BM%2BEjlvmadU2FNVdi4f9rxgsR%2Bb8YtCsnljz%2BMwiSie%2FrZz%2B4icog4J8IUoj41lHiswvrd9nRUwVaKwJKRBD6syWRZDJE1fmHW4Gh0ywlEsfSTb%2Bn3MhYjiJc6E25Q4DAl00v0uVQ%2FEWvCSUNskrt0A2SbURQhyeUK8AqffiSCWoxN%2FRyFeglAHJv28T2AVZeZjiyzngK1v78JF5aUz9XMdDZAypixzZSobS8cScjMHim0qsEhXPHYiGPnOVq%2BP2LeNdEWwJEE6PM6iZ0RJwtW1gTNSJApIHO08TLyO%2BqjQKn2VBeqjuzzrZy2JFp0O6MaMbKUyJ66TmOXoYlnesLzK43zbEgAtpZeKbnoGYaC9EdCA7V5rZPD5XNuAqApELWmuBSzURuWqb%2Fladld0BNcXiaBgH2KqK7hK2OobrE4loWq7HnpKxBmMNWSxr8GOqUBqLy%2BWaAqMqfYMdvTBRWZfI6vTorPPIbcVs0fuzYvMsiY%2F2nRpiI47%2FqkpDW1buyGK4ATTTcktL70aRE5h4MGdT3ODMhK3gjGj1wUwMmTw8JUouf%2FJVQwX6mg51o%2BdHWcqa32jgxmcGHs9TmR8hMEZVMY0se%2FktG27x8xYbw7Dv5Jdej7ND9deTnCtiZIBO%2FPiI91KGswlkftdtJIRiNZjYMGVwnH&X-Amz-Signature=92e33d9b60a7953edee2b6b1eb4b9c63cad59b7657718b6bcbc1d2e7bd11e7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CTZLCH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEY9Le2hseuhoh4n8iG4AfdjaGOQBWvmBzUrl2axiMhgIgDR65LvkaSKKIZfve%2FQjhvkYm0k6wnUvOi8f4Ugxss9Mq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJx75VO4RgTrrF1IxCrcA2ZEtfIfXKe6euefybQLGmeZ8f0gc8GDr8%2BvZLXqmVCLeSwcXw6HK%2FxWnxb93tvG7LamET%2Fl3DVZPeElTU1QRICPOtj8rM7HCgQBCZgntpQbhUwfb8veNfyT7EGPEnRIEjjWRb%2Bba0t8VbzsVfNmlbRfE7OnQQ2GM%2BuxCz6mlC6pLHqcdFVo5HJvHnaONaqFesKE2D%2BM%2BEjlvmadU2FNVdi4f9rxgsR%2Bb8YtCsnljz%2BMwiSie%2FrZz%2B4icog4J8IUoj41lHiswvrd9nRUwVaKwJKRBD6syWRZDJE1fmHW4Gh0ywlEsfSTb%2Bn3MhYjiJc6E25Q4DAl00v0uVQ%2FEWvCSUNskrt0A2SbURQhyeUK8AqffiSCWoxN%2FRyFeglAHJv28T2AVZeZjiyzngK1v78JF5aUz9XMdDZAypixzZSobS8cScjMHim0qsEhXPHYiGPnOVq%2BP2LeNdEWwJEE6PM6iZ0RJwtW1gTNSJApIHO08TLyO%2BqjQKn2VBeqjuzzrZy2JFp0O6MaMbKUyJ66TmOXoYlnesLzK43zbEgAtpZeKbnoGYaC9EdCA7V5rZPD5XNuAqApELWmuBSzURuWqb%2Fladld0BNcXiaBgH2KqK7hK2OobrE4loWq7HnpKxBmMNWSxr8GOqUBqLy%2BWaAqMqfYMdvTBRWZfI6vTorPPIbcVs0fuzYvMsiY%2F2nRpiI47%2FqkpDW1buyGK4ATTTcktL70aRE5h4MGdT3ODMhK3gjGj1wUwMmTw8JUouf%2FJVQwX6mg51o%2BdHWcqa32jgxmcGHs9TmR8hMEZVMY0se%2FktG27x8xYbw7Dv5Jdej7ND9deTnCtiZIBO%2FPiI91KGswlkftdtJIRiNZjYMGVwnH&X-Amz-Signature=115897e9f3f25f19aa4f69f6675c89560faad9ee87e8ffe6895e4a903b5d0a54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6AYANX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC60ya8C6ZBv2zJBU602tJkHk4oSpTk8Fq0GMCVfSs%2FlwIgVwg%2FlGN%2FpZG7vIuglF5ZrfUqBpUbeCHk653CbOseHAUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLH2qlEGdbQlRmYx4SrcA94jrLu%2BzjcyL7bUqIYyAtqrbzROIxVdtblhMCgLr2J3Hm%2Bvody1SlBLHL%2BrAysZvRd22BYpUlkM0a2a%2B92PwzaXAqHf2Q9weT4CSRVnUkQiFhb1Ut5swsGUtrS5mwem8ZBMzQu67j9PUXkiocEQbzy00rVufW%2Bi6%2F634bQzvlHkXtngXlM4W98ZJCJcq476DzgtPS%2F2qDKzX15ayfXxOuierZsJpvQ%2FoCGwdd%2FFkgHm85sCJNC%2BcVOw2m6Cnokvx5gLpDB7TMPOkTeGIqD7IceGwJjWAzd1PB1QjZ1MUuoeyVZUUFuY6iT9ngFxrIuEmTY9c3EYH7PmQ%2BrmkQ9wji7%2BijfIOA45tScC4FRhLu%2FeJNCek%2FOiGUN5w8hDC9GGIESdM8dKsEgYrHOB4zBVAVzuFXjkLSL%2FpvIq%2FXLHAhnEZ47%2F9rtuvcT6NedP3yWC3vwzquBm6NegAf50kNXPWgdbl2IGKqr2KV8BMeqcez6EXDNGdUNxnRp%2Fw7tAIqzT%2BtVhLemr7FkZ7UJW4JVkw0Q%2FSv2sIBZV6f%2ByEcUXxP42hU40S4HWBbvHjqnBxGupqLqarZR6Wj6zuoYdso1sRpkjuewxVrOjQyDz8GTLE4MWEdvXd6BCi9QNwzZBMMuSxr8GOqUBhYdC1yJnIeYiIriGbFJCd6mPBtsADvRwRb%2Bi97O%2BuyNhfGMwTKffVa5J6M4vhaniysG8%2BYGc7GTFh777QadHD5D2tcNLc8AtQn07dvmzYmg%2FH5njhGizDdtTYWjBzTUzRTlUTEastQGxLFR4dDKszP5Q3jVdYvn7NZVIMf0Jzal%2FKEqlje3N3%2Ft%2BCSm4QsgIFlvScAE3feG7wQtcmIoL%2BtiOGkgc&X-Amz-Signature=94d598c7e16d2725b2fb387eb09a38b88ab20c9908c05b2da43735f66956e1ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYZ24R6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmS2zmERv4JoSfGc6OyqxuFVOgZSECneHOQG8dNFKrNAiEA4qJqki%2Bh4bxfd%2BFcjC%2Bjout0%2FzHnaHnmsWrPb8ktCuYq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFI%2BM11RegfrWmccnircA6o%2FoNIMLYpGmgaSLNd9ng7Ye1j41smwEqGoFz5wXdyMMAncmM%2FuAEjzKJ%2B7%2Fv3X%2Bc%2B6cAE7kc26JScFbdeIHcbY1n5KHC2PcmPsaS9mHlrNIouo8oeFsf51NlgBWiptRd%2B6UlXdhc2UxUj3Z%2FdKoYxgSQKqo5Z2K8bg9GgyTc6n%2Bwxe6NZOVzjYMeQru0VQD8fYgDKFylTMIbjC4rDG89vkBoUoj25XZ8KoTqkwLlT1qfb4dYEE5Vo5HEs6A%2Bv5Hl5F47tX4Y%2BMb22Fk4Qy%2B19eeUgfwbUKbQbtgSFTdGKjHc1jVZnbECvr8FaelWGcWC3dXPvdM0u%2BHCxMQ4km0Axf9u9DgdOdJ3iTF8M7HneurpJsOM%2BOwgi8x5Puha7n6rnRKbgHS5hys5QGizUcQHD5Zh8pA4inYbNvEncR74qzwuImoSpa%2FZdQixIY1Iq8vjviidZiUOKkEhQ0eH6M1ruGarLNwiKG7flpGWK34IsHvWZa%2BM8tx%2B9lh1Ux2fTzXDFtDQmsx%2FJDLk1PKm4xJT%2B1BNOwPnw7ArR27cr3Uj4407udOxYaXdQTW1qcP2jiq3KqxpKb2vCjvBuaWtSC5bBezEFrauq9SJEBTvgG9yh0yhbveeJjyJ8a012JMPaSxr8GOqUBUHshs9uYBVrCDU4hkFlMMljYH9FTNH8NVM7o66wxu1XoqrV5FZCfmIHUOhIiktlSdj6Jg%2B5m6itH6Yns37nErc9R0Y1aV1i6OVVYuo5uLjc%2FM%2FXq%2BFMnH8dd0tTs0yzRc0kyMU5390j1GQ%2BHAkoIv5MA%2F9nJ1a47GTFBO1FjtPwDQU9iCEIblN82xQU8SH2BbjAJ8bVcww6CLLUHtl4VEaCtOc6A&X-Amz-Signature=f6b7a1daa2ceda5139968bc61704da235d601334148ca079a13efc9c445c9c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635CTZLCH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEY9Le2hseuhoh4n8iG4AfdjaGOQBWvmBzUrl2axiMhgIgDR65LvkaSKKIZfve%2FQjhvkYm0k6wnUvOi8f4Ugxss9Mq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJx75VO4RgTrrF1IxCrcA2ZEtfIfXKe6euefybQLGmeZ8f0gc8GDr8%2BvZLXqmVCLeSwcXw6HK%2FxWnxb93tvG7LamET%2Fl3DVZPeElTU1QRICPOtj8rM7HCgQBCZgntpQbhUwfb8veNfyT7EGPEnRIEjjWRb%2Bba0t8VbzsVfNmlbRfE7OnQQ2GM%2BuxCz6mlC6pLHqcdFVo5HJvHnaONaqFesKE2D%2BM%2BEjlvmadU2FNVdi4f9rxgsR%2Bb8YtCsnljz%2BMwiSie%2FrZz%2B4icog4J8IUoj41lHiswvrd9nRUwVaKwJKRBD6syWRZDJE1fmHW4Gh0ywlEsfSTb%2Bn3MhYjiJc6E25Q4DAl00v0uVQ%2FEWvCSUNskrt0A2SbURQhyeUK8AqffiSCWoxN%2FRyFeglAHJv28T2AVZeZjiyzngK1v78JF5aUz9XMdDZAypixzZSobS8cScjMHim0qsEhXPHYiGPnOVq%2BP2LeNdEWwJEE6PM6iZ0RJwtW1gTNSJApIHO08TLyO%2BqjQKn2VBeqjuzzrZy2JFp0O6MaMbKUyJ66TmOXoYlnesLzK43zbEgAtpZeKbnoGYaC9EdCA7V5rZPD5XNuAqApELWmuBSzURuWqb%2Fladld0BNcXiaBgH2KqK7hK2OobrE4loWq7HnpKxBmMNWSxr8GOqUBqLy%2BWaAqMqfYMdvTBRWZfI6vTorPPIbcVs0fuzYvMsiY%2F2nRpiI47%2FqkpDW1buyGK4ATTTcktL70aRE5h4MGdT3ODMhK3gjGj1wUwMmTw8JUouf%2FJVQwX6mg51o%2BdHWcqa32jgxmcGHs9TmR8hMEZVMY0se%2FktG27x8xYbw7Dv5Jdej7ND9deTnCtiZIBO%2FPiI91KGswlkftdtJIRiNZjYMGVwnH&X-Amz-Signature=9b94dee589667f2f3eba3af4dfe78056357479cf9dcfcc4019f7cd152848ccd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
