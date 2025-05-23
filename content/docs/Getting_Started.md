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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JL44GKC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDO5yVbZYwQEd%2Bgfp9UsMBYmxvOvw5dXwBE7iGTT7QvRwIhAJFyi5cc9r5Hst2cQKY%2B7%2F%2BB%2BgFEzn71Ng1iXkyFL8%2BpKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy6ixRBM8jCOY%2BxXIq3AM%2BEr2mUw%2FDEWwkevlgQ0s5f0iIz%2BgoXXgWz8EQB6KxZWCdWj0bSkH4K8AjoZKpvxJ%2F0adKVD7Bq4BPEbnx13qTULP5d9ua2FDNWeDU%2FR%2Bcp%2BC1CScrb4bgax8wdTdSvW0%2FrayORgSHPS8wXICMGP0wqT52VaYI0qF5kvbMUiEGecryKlqI5t8xmzdvJvSFBnysJhKESapss9zlOCHkpkeljgLFp8Tze5pvnO%2BhyZrbduNCap3%2BpMpNQYr46fc3yiotZq433uBu2ZBM5zMQm4zObkqkLpQahuwz2TncfcOtekjWmJlyhVd1S9d8Z0KtXMR3kMCdNW00R0G6RQsQx2iEeULbFAbIkA6KbeU0o5gCNONlYcJ3f085Fcd11RkBoqCYuaJR0VF2Q6qW7f0tF1YK12fwmCBFAuWNuYA7dMComM4Y%2BbFigO2Ca4U6fq2oR8uqDrp%2F24DUlwjunJ3Tlx34lk8uy2524ePX9DH6KqdSsGJ9vWmG9%2F0d9xxceyjDKCIOkl27CQ0xAERF4YCKZ8o%2BtYZMcVUk6ULYsvYNn8aKC5UXBEz%2FzY4%2F2OdF%2Fkk7wNe2Vr4zoQCVAAW3O2jh9%2FS%2BAY7NZz9CDuC5nxl%2BWidxcSgRPr9vB%2BzE0shWuTDMyb7BBjqkARSmYM9p2DeNtmG8rPx2OjLCK9cYUsvTYtE1fSeT7e7qP8qi49OHSZW6%2BSh9INlBAbVD9gh7F%2BnY%2BbxtcvNp9ahEsPPSgPpP1mHlWlCGwXVOQzZOEFOlGsKp14XSz3bOvg6dRRVlrGclGdc8F6cB7c%2Fz8eJuRhN2ApT%2F5A3ySuY3fh7gaUx1rweYdL98AszM0U4TbEwMkNte39j8kY2zS2iN14fz&X-Amz-Signature=e97a2f9a29514a2b3a2e8793ed471b156c4a1f7ccf7385885f4a85e7f06493fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JL44GKC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDO5yVbZYwQEd%2Bgfp9UsMBYmxvOvw5dXwBE7iGTT7QvRwIhAJFyi5cc9r5Hst2cQKY%2B7%2F%2BB%2BgFEzn71Ng1iXkyFL8%2BpKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy6ixRBM8jCOY%2BxXIq3AM%2BEr2mUw%2FDEWwkevlgQ0s5f0iIz%2BgoXXgWz8EQB6KxZWCdWj0bSkH4K8AjoZKpvxJ%2F0adKVD7Bq4BPEbnx13qTULP5d9ua2FDNWeDU%2FR%2Bcp%2BC1CScrb4bgax8wdTdSvW0%2FrayORgSHPS8wXICMGP0wqT52VaYI0qF5kvbMUiEGecryKlqI5t8xmzdvJvSFBnysJhKESapss9zlOCHkpkeljgLFp8Tze5pvnO%2BhyZrbduNCap3%2BpMpNQYr46fc3yiotZq433uBu2ZBM5zMQm4zObkqkLpQahuwz2TncfcOtekjWmJlyhVd1S9d8Z0KtXMR3kMCdNW00R0G6RQsQx2iEeULbFAbIkA6KbeU0o5gCNONlYcJ3f085Fcd11RkBoqCYuaJR0VF2Q6qW7f0tF1YK12fwmCBFAuWNuYA7dMComM4Y%2BbFigO2Ca4U6fq2oR8uqDrp%2F24DUlwjunJ3Tlx34lk8uy2524ePX9DH6KqdSsGJ9vWmG9%2F0d9xxceyjDKCIOkl27CQ0xAERF4YCKZ8o%2BtYZMcVUk6ULYsvYNn8aKC5UXBEz%2FzY4%2F2OdF%2Fkk7wNe2Vr4zoQCVAAW3O2jh9%2FS%2BAY7NZz9CDuC5nxl%2BWidxcSgRPr9vB%2BzE0shWuTDMyb7BBjqkARSmYM9p2DeNtmG8rPx2OjLCK9cYUsvTYtE1fSeT7e7qP8qi49OHSZW6%2BSh9INlBAbVD9gh7F%2BnY%2BbxtcvNp9ahEsPPSgPpP1mHlWlCGwXVOQzZOEFOlGsKp14XSz3bOvg6dRRVlrGclGdc8F6cB7c%2Fz8eJuRhN2ApT%2F5A3ySuY3fh7gaUx1rweYdL98AszM0U4TbEwMkNte39j8kY2zS2iN14fz&X-Amz-Signature=7165ba9bf200e0df8f592d473266d569d7420b7004efac2afa50bcd6af099655&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JL44GKC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDO5yVbZYwQEd%2Bgfp9UsMBYmxvOvw5dXwBE7iGTT7QvRwIhAJFyi5cc9r5Hst2cQKY%2B7%2F%2BB%2BgFEzn71Ng1iXkyFL8%2BpKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy6ixRBM8jCOY%2BxXIq3AM%2BEr2mUw%2FDEWwkevlgQ0s5f0iIz%2BgoXXgWz8EQB6KxZWCdWj0bSkH4K8AjoZKpvxJ%2F0adKVD7Bq4BPEbnx13qTULP5d9ua2FDNWeDU%2FR%2Bcp%2BC1CScrb4bgax8wdTdSvW0%2FrayORgSHPS8wXICMGP0wqT52VaYI0qF5kvbMUiEGecryKlqI5t8xmzdvJvSFBnysJhKESapss9zlOCHkpkeljgLFp8Tze5pvnO%2BhyZrbduNCap3%2BpMpNQYr46fc3yiotZq433uBu2ZBM5zMQm4zObkqkLpQahuwz2TncfcOtekjWmJlyhVd1S9d8Z0KtXMR3kMCdNW00R0G6RQsQx2iEeULbFAbIkA6KbeU0o5gCNONlYcJ3f085Fcd11RkBoqCYuaJR0VF2Q6qW7f0tF1YK12fwmCBFAuWNuYA7dMComM4Y%2BbFigO2Ca4U6fq2oR8uqDrp%2F24DUlwjunJ3Tlx34lk8uy2524ePX9DH6KqdSsGJ9vWmG9%2F0d9xxceyjDKCIOkl27CQ0xAERF4YCKZ8o%2BtYZMcVUk6ULYsvYNn8aKC5UXBEz%2FzY4%2F2OdF%2Fkk7wNe2Vr4zoQCVAAW3O2jh9%2FS%2BAY7NZz9CDuC5nxl%2BWidxcSgRPr9vB%2BzE0shWuTDMyb7BBjqkARSmYM9p2DeNtmG8rPx2OjLCK9cYUsvTYtE1fSeT7e7qP8qi49OHSZW6%2BSh9INlBAbVD9gh7F%2BnY%2BbxtcvNp9ahEsPPSgPpP1mHlWlCGwXVOQzZOEFOlGsKp14XSz3bOvg6dRRVlrGclGdc8F6cB7c%2Fz8eJuRhN2ApT%2F5A3ySuY3fh7gaUx1rweYdL98AszM0U4TbEwMkNte39j8kY2zS2iN14fz&X-Amz-Signature=5a4b979e0fa9ac31e11f28a5df676549aca447b90d21097c2609d83935aafcad&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RANRAJC2%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIFia7fK7x43fWCSJIuhDKikrhts336%2F2vuWURqjTFFmmAiB5bJymuHxFIc9hNgtc8A9oT266XJcVDkYIUuv9Tu%2FFgCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKfSpha2DNuY0OvWKtwD8CJtYn7OwWcCqp%2BqEmeBu01I3ZtfeVDeqCzYiU49KuKYV07%2BiW4iwusZmLo8C3OfgoPgD6hxBPtf%2FJnvGTx%2Fkz1oyjEAAKtrIZqJTpUV1gbrzHbJbm%2Bo4r6N2Jf0le%2BHmmMbm5pgrM4tLBF4rL1fD1WAoOjJodtmkoMW0vkuD3rS2Ubyg36d94GaIKIOs%2FiFKWwJ3TfSONdYHIIBWs0ZLTzjQV4xf9bscZLsUS6wWIEI4ou7uJVprgv42CLVjJ2Jh7Whm6ENHDFLeFOSX4OTnhm%2F3Qi5bkBasAVIA78pa1PXg21ZDSUtlWPKiyPW4NnJoZT%2F83GHyB0FXmboXrgM1deChtEw%2FrVPcYU0mtzAEe4UqE18PfrxGY9D8jy62Ox9QH%2FZe2GJ5XvVyDxJ9CIXXj%2Bmpiiosxi4OgLIc%2BIwFuSRGtJPU2NUo3fVu9DZJ0jtTBP3hYxzwRuD4jv5hSLr7CxrDvi%2FFvmF1oUNs%2BHYj82Hzx9%2BevNVGDlW%2FOQ092mUnaF5jM7sau7ZdL5Gwb0XGLzkMI9CI7Ykl4EYkj0jGEda7Xz2Pb39qumG7vqjYM51cq427NPpZH4o%2BnKkKiRgtb3uJqwqyt%2FJD3sZZ5qazNGMWBecKsEL3oiRI%2FIwy8m%2BwQY6pgGnu%2BwEHhsulDwcMT6aFq65EVUKalUvSxfIphKBT9Hgzev9V%2FFRghiGmp0ieV7aADZU%2BOe6viDvqOczsGLhpbQjoIndb%2Bb2ZGubwGTb5fnKT6agTX2yOzyE5zNY1g7qKpqAnOD1Js%2F8ayisGrQzFOm%2BoIgFcG8FwwFQyPlw7qsR75eS2%2B8gsBU8JlXogKLtaLAdRkZ3LSJvjB5MzXLcUoUUz8Z4XzXO&X-Amz-Signature=dabcf26e05b11a740d8aa1d2059231f101f30d63eebc558611ab3327c5dcbbde&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BB6CFFF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFSmemPRf%2FjywZAF40K5VEzRs16fDI6RJJ7F4snfuI%2BDAiEA0DUmM2Lz86OjHMK9Mhsa6yOYlOyQG0MZmgTn%2Bv65ID4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP2%2BIsEn49ajJKCZircAysLXP6f03LcKKwznCVG5oaj%2BGJ%2F9bacb4uE2IO6vlFVWCEtmrk4cxtx4%2Fl15ixy9bOcqql6aJkva1tuRJ%2B5zkDMrhXisLmMwRInqlS%2BKhnWJbOkRAq61kiB9Ww1B%2FoMxRu5Z7CcXwBkzXSEB6Iwo5tK2yHo3kfzDmQJ7TNegojhJPED0o67NsF7wJxe%2BsYHTEuakkGndkfJ4KL53ms5m746ffoDH88AaSef%2F%2B0VfhSs4l9O%2BnDNSpw%2FUkKUxYgihIKkBml1JjTNzhURy1oxryQfKzowzGpf5U9u9SqRNNi8ydRhLi%2BZPqPxQPk%2B2HMx6MUOYO6oW8P6rTD5gnag3%2BQ5Omz7WzJCAFutXq4NsDc2ZxwtqwSAIQxqZEmdS34i%2F0bXIiBP7wV%2BIEd09cIl40YI38n7GDVXv%2Fw66LpoOE2XwcV0Rig1p3zXJHSEzgyY%2Fp5w8hO9hK9EzNozdBEynMDUj8os31MImnnM3570oi2jivyuCc3BEILXhqf96X4FwFL8HF967uYudNL5KMNH6yuzWWcsJFrddMatw%2BV2Ttvs0fljUejk0GcbVNeoOAPXYFVovEB5x9s4jvsTg0MesntyxNYlZirXklxl7JqKihdEMGoYqjvu7IQBKAVuMM%2FJvsEGOqUBZ90V0zpEwBbY1CaSG3ZAVksJwtblcucIdQwx62Rb2LeiPmcAhFMfOAvMYi3xA9LVm5p0JVcZ7YQw9iR9xIjGtW3cY4GhDanGCCzGxFSNOz7zkwLHU5k1i6M9rvXLFKswof8phoRYzBx0OvKypMKj1DxLVZAdYIZTsTWi5ChzIBnq3XUzOfEkPDNVc6CaKflqJOgowtaHHZk%2B%2BLFFfxRW6Z6NOEfJ&X-Amz-Signature=b97328ca71632a952149f85613112e9bb73c2f3b2d76735cf7b303e457be2a15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JL44GKC%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDO5yVbZYwQEd%2Bgfp9UsMBYmxvOvw5dXwBE7iGTT7QvRwIhAJFyi5cc9r5Hst2cQKY%2B7%2F%2BB%2BgFEzn71Ng1iXkyFL8%2BpKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy6ixRBM8jCOY%2BxXIq3AM%2BEr2mUw%2FDEWwkevlgQ0s5f0iIz%2BgoXXgWz8EQB6KxZWCdWj0bSkH4K8AjoZKpvxJ%2F0adKVD7Bq4BPEbnx13qTULP5d9ua2FDNWeDU%2FR%2Bcp%2BC1CScrb4bgax8wdTdSvW0%2FrayORgSHPS8wXICMGP0wqT52VaYI0qF5kvbMUiEGecryKlqI5t8xmzdvJvSFBnysJhKESapss9zlOCHkpkeljgLFp8Tze5pvnO%2BhyZrbduNCap3%2BpMpNQYr46fc3yiotZq433uBu2ZBM5zMQm4zObkqkLpQahuwz2TncfcOtekjWmJlyhVd1S9d8Z0KtXMR3kMCdNW00R0G6RQsQx2iEeULbFAbIkA6KbeU0o5gCNONlYcJ3f085Fcd11RkBoqCYuaJR0VF2Q6qW7f0tF1YK12fwmCBFAuWNuYA7dMComM4Y%2BbFigO2Ca4U6fq2oR8uqDrp%2F24DUlwjunJ3Tlx34lk8uy2524ePX9DH6KqdSsGJ9vWmG9%2F0d9xxceyjDKCIOkl27CQ0xAERF4YCKZ8o%2BtYZMcVUk6ULYsvYNn8aKC5UXBEz%2FzY4%2F2OdF%2Fkk7wNe2Vr4zoQCVAAW3O2jh9%2FS%2BAY7NZz9CDuC5nxl%2BWidxcSgRPr9vB%2BzE0shWuTDMyb7BBjqkARSmYM9p2DeNtmG8rPx2OjLCK9cYUsvTYtE1fSeT7e7qP8qi49OHSZW6%2BSh9INlBAbVD9gh7F%2BnY%2BbxtcvNp9ahEsPPSgPpP1mHlWlCGwXVOQzZOEFOlGsKp14XSz3bOvg6dRRVlrGclGdc8F6cB7c%2Fz8eJuRhN2ApT%2F5A3ySuY3fh7gaUx1rweYdL98AszM0U4TbEwMkNte39j8kY2zS2iN14fz&X-Amz-Signature=929b9fd1d33467508cbe78786a95c35c991b722e5cae11e388ab76572619f8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
