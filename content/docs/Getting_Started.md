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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSINILW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0HwFCBrLx1%2BcxY7CbJ4dziy40KmKN0Jp5mGxD7%2BqqlAIgBQHhm3SSQsSvapbKs%2F3LnFEr41tQtgmzW%2BBH2kwaFcsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGnhqwl2dhF6NxMOyrcA2LLzuSk9tiwm9md%2BXHfpwO0f%2BEz9GnjXfp8cHhVAH8kn3IW5ERPJqnO7GuzR%2BqBcndSy1zC7sFXkgqpjJzwiYERx%2BCFYETde788bIqP7YzDtTaBGTSHCu9IBTs5i7pfxa2pFpLydms3ZNyJep31iyR2PBxZbDK0fyjrhHiZFLGsAvZ73rBQbEJ5BrtztvWpdegE0xBnRFtfwDO76U3VxflCBRs%2FtCi17X8lQkh%2BXj0HHctulyyY6cEs%2BQ6%2FlownlPZygFujnqJJq%2FcMNopBZiANg81KawBT%2FpyOkxOJGzqsVCfB2SZXv%2BR9WptDRSOGBfeP3%2BEepEoY7KWWUTTHOwwLxSdrWM%2Bbv6iVx22bJ8GTsIAQpIDpTeBvNh3QlCeFMDMiA3h%2FupxFY30V0bONduRzwZ1CjQbdEiV3qsAc9s6GOdduSFYztgKJwo4afkhbbP1DHsFXZNDlV0ipWregUOwsZGLR1W79%2F4j2OjNNy3NI%2FVA%2F0JISITq%2B%2Faf%2FS6ROSsWEq2lSrNXxAyAPhmb34xM7DkDH1Hq3qprAyBhEJp3%2F3UrZcLiYMW5Abc1D2AbpS%2F1Q%2BlJpMElXe%2FMry8HBOn3FHProx5iU2hNLz3tomUZlf8A9LlWNir50gcQ8MLW2wcAGOqUBYsZhz1qKKioMYoLbEnw7H29jZgWaBTcgXnYAeyQKaG8MZMePpEY280ek35v62DoyGkmI16n2PZqMXqz9d1EfxyIhFATNhsjay%2FKXL3yTVwv7FpXoGnqAYbvPTFvV3pr5gY2srp0b6vy48LcM7EyWzJizvUSgAh%2B2rFOGrLekw2ZkZRkk6WjPK2A0ZF37IqAMmsvvNWkVturuQb92PKwBa37yFlB%2B&X-Amz-Signature=1d9c83aeb868bb27d6c09ea904f27991fbf9f5bdcad2af14e4bed338a3e63bc0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSINILW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0HwFCBrLx1%2BcxY7CbJ4dziy40KmKN0Jp5mGxD7%2BqqlAIgBQHhm3SSQsSvapbKs%2F3LnFEr41tQtgmzW%2BBH2kwaFcsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGnhqwl2dhF6NxMOyrcA2LLzuSk9tiwm9md%2BXHfpwO0f%2BEz9GnjXfp8cHhVAH8kn3IW5ERPJqnO7GuzR%2BqBcndSy1zC7sFXkgqpjJzwiYERx%2BCFYETde788bIqP7YzDtTaBGTSHCu9IBTs5i7pfxa2pFpLydms3ZNyJep31iyR2PBxZbDK0fyjrhHiZFLGsAvZ73rBQbEJ5BrtztvWpdegE0xBnRFtfwDO76U3VxflCBRs%2FtCi17X8lQkh%2BXj0HHctulyyY6cEs%2BQ6%2FlownlPZygFujnqJJq%2FcMNopBZiANg81KawBT%2FpyOkxOJGzqsVCfB2SZXv%2BR9WptDRSOGBfeP3%2BEepEoY7KWWUTTHOwwLxSdrWM%2Bbv6iVx22bJ8GTsIAQpIDpTeBvNh3QlCeFMDMiA3h%2FupxFY30V0bONduRzwZ1CjQbdEiV3qsAc9s6GOdduSFYztgKJwo4afkhbbP1DHsFXZNDlV0ipWregUOwsZGLR1W79%2F4j2OjNNy3NI%2FVA%2F0JISITq%2B%2Faf%2FS6ROSsWEq2lSrNXxAyAPhmb34xM7DkDH1Hq3qprAyBhEJp3%2F3UrZcLiYMW5Abc1D2AbpS%2F1Q%2BlJpMElXe%2FMry8HBOn3FHProx5iU2hNLz3tomUZlf8A9LlWNir50gcQ8MLW2wcAGOqUBYsZhz1qKKioMYoLbEnw7H29jZgWaBTcgXnYAeyQKaG8MZMePpEY280ek35v62DoyGkmI16n2PZqMXqz9d1EfxyIhFATNhsjay%2FKXL3yTVwv7FpXoGnqAYbvPTFvV3pr5gY2srp0b6vy48LcM7EyWzJizvUSgAh%2B2rFOGrLekw2ZkZRkk6WjPK2A0ZF37IqAMmsvvNWkVturuQb92PKwBa37yFlB%2B&X-Amz-Signature=d2864129715208a7b78cedd1de178fd51140e36ea9f83fc637bf524c60d17178&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTK6QBL%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3dtxOW%2B4Rf3%2BqXppxfXiHoAz0TOEtsdtcDjgH%2F728jgIgIITTK2fRG5Y8mRsJ9sYocWLF6WW%2BO1hp6sMutE5Dej4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlq%2F6ZfVPLcIqclSircA7Q1Rad5hbd%2Boe%2FOQ81h2MUD%2Fwk0jzURicNgkuTL7j5Qcok7F46KxclroHzS4BeIES2RUk3ijUMFWCZnB0BqK78Og7xZLN0KlTd0t9UL9%2FtiQj9OZ2J9RTvvSYOzbmQxnic1rX0rc5MzNn4CevvCCnHFDYiUftyubtUB1BVZu%2FVrhWTve23JoxGPCu2ZdymcCm0ttE94oVnK2h4xyorq1MxR00JqcI1eO%2FY5Dyz3KL3mYtwmBmquQCB%2FMa06Uuq08DdM0NRkSU60h7XTtVCSDX5DMn3H2kw2yEIp%2FyO6dfmSMrC%2Bk9oAxa2sFjRvf1B8ul4BtOoTXSR4movhWr49jGgsyG8lETxmUj222dWSyqF25SA7z11EH8kwbsKGrOU8bgsWTt1KjrDGfV2aj0NjHy2TzxevrboFQkUpXwqYs9ynbWdanAQ0awvAuoZdXFChx%2Bhqd9fpBdpBIBksoZWUmzWofhHhWNiZYDuj%2B0C3DK8LbrXZw%2FtFJ2xhtUR30UczfJdf2GzJBsy4V%2B5NeMpYC7oZP1Mm4zpQUTAUMZgFPIxt8G6hTZLYPupYlPcbfJV18c%2BDIlyfpnapv95llOGW%2FSR2p3%2BwS7W6BV4X0X4TLWTEqgh%2BYljUhONTn8x3MNy2wcAGOqUBSbE4KX4oPmUmPUaBLkzxtsON0KqfOwopZCggrVZOKLN3YKhjiUbLC6Er8NJHGS5XEDddk6fJMAWRp4CABYTsYQHPKCXZM2HU61Z5ZM8EcD%2FoifaB2urNCUqPQUntvQHliwO6%2F9k%2FaGgXrFMbFytLJSrlz2qck0pytdumq7awGhVvyBQ2gyb%2FziAB5Re8iHhw4DtbwnPA0UcJ%2FCWDY1k1gOn6Kn22&X-Amz-Signature=e9424a5253353177e055ae8f5a82915f2780c7d13a4cc0a504a9b4991a601974&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4XUQ5DP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzCARgIedPuqqsKEvztAJPO2fZmX1WlQe%2BCP1nvCLZEQIhALs6z32Z6mjOtAXLvidmFgs8kkCS4Wtneo6GORkwT4dEKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBTqpaA211NIVR10cq3AMqo5o1dQO3eCARMUWX65MXeirkLtEexdwYmiA9T70aOxIF8dsTBwa4B6O3gAX%2F7QtbkHPZeOgByrB90rluBkYcNzAzt8HL4LXBr%2Fm2M9seZnMMKKP9dD%2FknL6VZb0cPrHOnMrWXTLLO%2F8mk3YZQqvQ6QIAFCctwCifvHnI0J%2FinlO8L15saeZ7KCiW7ZWYxXM7JFJJQ5%2BQygDCZn1%2BZxTTn4V5RcFIIWylaWrdxOlt34plZVswz4b%2FGmI3ktCh8oJ68%2B5zI1zmZMqlaDMZ2d%2FSp31fLkHNYzEkzZ7yS%2BK%2B8UO03yVup9b9PbilIygZCc3lPn8zNhzhO7eoXIJYb0MkQa9xNlDOKh7NrPIhJ%2BV89OKO%2FAyf0R9nwmCK8%2FzD2ixtum6yzK0yUbJWzEgg9Wavs5PAUy6lQ2BgRfv5mT7Tn0URmV8WAYxve3uQF%2BwU5X335bJTCawQlFaUWzE0dPm5WmGFjiZOaRrA3jXvVStnEjvNh9KiYsuXfJUvPYREijz9QW%2B1fKDFt5ZfUKXj%2BslQnc7%2Fyz7%2FSBG4DXPZmxFyVulpn3pSo34Vq2omEDFEnLDutcLhmLEjcrmkbWsZuuG5ANOYAZ4D8S4A9IDEAoF%2FtSrB7WyF%2FxjYuZio9jC1tsHABjqkAYS7E4tLibDgx%2BvPmxNxRqH1abARR5TBIvLnxvVEl5eZ8Eqkgul30t2ff58D6T75Cg8Csv7IOdixwG1RowFfKoOiq6Y8dy2dxGlL9FZ5ft2WGKrGCg%2B049AG8lLhnQIUIbL%2B2zDXCNDIYs1mlovn7C%2F%2F2%2FeOQbGuYyLZ5x9sqjscimhEBxpMa0lVMtcv%2BEc5x%2B2rS0UmCofZqh64829edA2FOEJf&X-Amz-Signature=6b7679649bc2c854e42d9fbeb2f2c3f300b2261347d26d681ae89fdf6e2c500e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSINILW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0HwFCBrLx1%2BcxY7CbJ4dziy40KmKN0Jp5mGxD7%2BqqlAIgBQHhm3SSQsSvapbKs%2F3LnFEr41tQtgmzW%2BBH2kwaFcsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGnhqwl2dhF6NxMOyrcA2LLzuSk9tiwm9md%2BXHfpwO0f%2BEz9GnjXfp8cHhVAH8kn3IW5ERPJqnO7GuzR%2BqBcndSy1zC7sFXkgqpjJzwiYERx%2BCFYETde788bIqP7YzDtTaBGTSHCu9IBTs5i7pfxa2pFpLydms3ZNyJep31iyR2PBxZbDK0fyjrhHiZFLGsAvZ73rBQbEJ5BrtztvWpdegE0xBnRFtfwDO76U3VxflCBRs%2FtCi17X8lQkh%2BXj0HHctulyyY6cEs%2BQ6%2FlownlPZygFujnqJJq%2FcMNopBZiANg81KawBT%2FpyOkxOJGzqsVCfB2SZXv%2BR9WptDRSOGBfeP3%2BEepEoY7KWWUTTHOwwLxSdrWM%2Bbv6iVx22bJ8GTsIAQpIDpTeBvNh3QlCeFMDMiA3h%2FupxFY30V0bONduRzwZ1CjQbdEiV3qsAc9s6GOdduSFYztgKJwo4afkhbbP1DHsFXZNDlV0ipWregUOwsZGLR1W79%2F4j2OjNNy3NI%2FVA%2F0JISITq%2B%2Faf%2FS6ROSsWEq2lSrNXxAyAPhmb34xM7DkDH1Hq3qprAyBhEJp3%2F3UrZcLiYMW5Abc1D2AbpS%2F1Q%2BlJpMElXe%2FMry8HBOn3FHProx5iU2hNLz3tomUZlf8A9LlWNir50gcQ8MLW2wcAGOqUBYsZhz1qKKioMYoLbEnw7H29jZgWaBTcgXnYAeyQKaG8MZMePpEY280ek35v62DoyGkmI16n2PZqMXqz9d1EfxyIhFATNhsjay%2FKXL3yTVwv7FpXoGnqAYbvPTFvV3pr5gY2srp0b6vy48LcM7EyWzJizvUSgAh%2B2rFOGrLekw2ZkZRkk6WjPK2A0ZF37IqAMmsvvNWkVturuQb92PKwBa37yFlB%2B&X-Amz-Signature=d02b4d187a09c53098f38b8578deddc96023125f2c7c99722fd9acf9c371e126&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
