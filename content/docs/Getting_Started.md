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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXVKJDX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGzgIlhHI7TgVBXOjPHSuV0%2FKJUCWjPBbS6EsTLvXxl2AiEA2sVnaCzOfPrwbhC5aHJFP9F37dnDD5DsT%2FvkW3FcsuYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsCUqnUos%2F099HCrCrcA9M52i%2B27KpohhtpK1Rd6DyY26B2qcbCmxh6tfkgWOzWSKjunUqgEsET%2FBJoo3ER%2B4mqRjAy9cZYnFpWmL8ZDZrvHRioWrdCbze9YKZn7kl6Rh2RzK9ysW6EE94%2BYgZkD88wce%2FUjhArfyPYcf9%2BJvEkzOtes6V37nCmbkhKPWzSwWNKid8Cqc0k7F2gq88CzHGrQbKRO8Y6aJ99bg1sL3e7PCgECEf6O1Og0GcR%2Ft%2Bl6Xr0jW3lqh3WCP99i021MpT1PnQLV5L9WZ2BDrbZaDN6Mja9KnTifO6dsNdbotPI%2Bw0QMzZCBAcFbzjNUdFXfVc4uzxW9SZswVjgg32pA7zccZNujQzka5U3MbP3b%2BkP1eVx8EdGrGHvbIvYz2usEExyCq6vsZPSrET8rZ9b6N1LGb6oCCPypYYHYj20dNAfD5y1ake7P3yuVNAnz88ukv7QoqojhfC%2BC6fEJUJvo%2FQyPDPVCw%2BdyM7dlRI%2F39QQc%2F7bddr9c%2B3DwGYpN2O3kdxRNMFDvMT6nBufapAlPgYt6%2F4tWyWooSQpEWLurD1OTKAD6qtiyxk0kXFvrSL4HsZ20Llf5RWV57rnnCLYqITIuZNWNU1U6Q%2Fv2eGGOhZstJNn4haHZcj6LCEiMIXEz70GOqUBz3VeLr85F2J29w5W6%2BsVqBL7clZ%2BNHSBDp9RxsaqMAw2gmDhWPjGRR7gfEinbGAWv3KqkMjzG2VRZaZnyfjGyEGWvNOBLPGG7UkydFVT9xvNyyLk4YeaID7DmjuM7Cul2lDAgQmPzJ3%2FvEPwOfLbZV0shZ9SGahAZlKJuNj65vBZEj30rOh3uyV1je5WZYtpmpb5E8zgfsMYaxKOwvavZyeweYaZ&X-Amz-Signature=f94641f724c28692a0e6952d4e9c7a6300b7f6071112630f9f9dbdca12efc2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXVKJDX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGzgIlhHI7TgVBXOjPHSuV0%2FKJUCWjPBbS6EsTLvXxl2AiEA2sVnaCzOfPrwbhC5aHJFP9F37dnDD5DsT%2FvkW3FcsuYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsCUqnUos%2F099HCrCrcA9M52i%2B27KpohhtpK1Rd6DyY26B2qcbCmxh6tfkgWOzWSKjunUqgEsET%2FBJoo3ER%2B4mqRjAy9cZYnFpWmL8ZDZrvHRioWrdCbze9YKZn7kl6Rh2RzK9ysW6EE94%2BYgZkD88wce%2FUjhArfyPYcf9%2BJvEkzOtes6V37nCmbkhKPWzSwWNKid8Cqc0k7F2gq88CzHGrQbKRO8Y6aJ99bg1sL3e7PCgECEf6O1Og0GcR%2Ft%2Bl6Xr0jW3lqh3WCP99i021MpT1PnQLV5L9WZ2BDrbZaDN6Mja9KnTifO6dsNdbotPI%2Bw0QMzZCBAcFbzjNUdFXfVc4uzxW9SZswVjgg32pA7zccZNujQzka5U3MbP3b%2BkP1eVx8EdGrGHvbIvYz2usEExyCq6vsZPSrET8rZ9b6N1LGb6oCCPypYYHYj20dNAfD5y1ake7P3yuVNAnz88ukv7QoqojhfC%2BC6fEJUJvo%2FQyPDPVCw%2BdyM7dlRI%2F39QQc%2F7bddr9c%2B3DwGYpN2O3kdxRNMFDvMT6nBufapAlPgYt6%2F4tWyWooSQpEWLurD1OTKAD6qtiyxk0kXFvrSL4HsZ20Llf5RWV57rnnCLYqITIuZNWNU1U6Q%2Fv2eGGOhZstJNn4haHZcj6LCEiMIXEz70GOqUBz3VeLr85F2J29w5W6%2BsVqBL7clZ%2BNHSBDp9RxsaqMAw2gmDhWPjGRR7gfEinbGAWv3KqkMjzG2VRZaZnyfjGyEGWvNOBLPGG7UkydFVT9xvNyyLk4YeaID7DmjuM7Cul2lDAgQmPzJ3%2FvEPwOfLbZV0shZ9SGahAZlKJuNj65vBZEj30rOh3uyV1je5WZYtpmpb5E8zgfsMYaxKOwvavZyeweYaZ&X-Amz-Signature=0b84ac6338be0b48d1fc08f9b2a784c89cb0d86d1b5817a6e704af354da17a70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4O7J7JN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAY6KsFOpNhTjb0s33gMzdq%2FCnlSoUboyo1XEnz4iY3GAiAxKCywscGpBs0xU0MN9CwAShNJRxEz2Kt3M4YM%2FUc9hiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMSidu6fy96hGZb0%2BKtwDamkyPp1mxknyt2XBylkhBRoGVqcQnlnmdIXaBhe3Z3n%2BgR1yTqxTRqMmI%2F80wbmkh1HPS%2FGDQFr2b4FusmiFk29s8aiUBoI2cqn7845kKKSFX%2BqXjMjEAzqaSeIhD1McJiSdYDAi3xc9HJKFC7oPeo9DRgXOQfSf5XGPeOzIhgmA6PetZXzA1mWY6uJ756dVXKiIzZlqBhB%2B7HOkqnqZI8HRgKWZN9uWEyKKJ3j3Czpgrs6PP%2BHB7G7Z2eJzkQ3%2BXhIK3cwz9DQhLHlg6P1mVb0B%2FxNxfdFuBbajQhn%2FPMsPucdKtbCv%2BQFsDldSJ9Chr4DV2x%2B20UUF6MVA%2FDDSTREiTKvzWVCU%2FqZ901Xqe9%2FSZxXL4dLsn5KVqXplZjysOQLR%2BpGXspRSep8xTQduevTWEVw1lkauvCajCaFyjsvmG0wLoa7YPMNYvmaX0Lhq6P%2B8qiQ8uOSFqY4DqpgAoTtl7CJ1ccCOggd8WwrPoknKO8cn7%2FQWTbQtHWKy0G%2Fgq81UW0GPJvBoKscber4sxOCyrwYWqe5EcCucWw94RdrFORwW2zM8Kltz4m3VRDAD2De8B0JM0HHuuDQeJZWhlwU9vNuOdKczk44O%2FdxucYY8SX2f1BoXj9qMVUQw3sTPvQY6pgGqz1Q0eciptxH5s9bAw7vV%2BYTcdpaoE8FbYy1vhFbaW7Z0l9j6v2o4CmrHTpkLn%2BLopqEP0qrgoieAVPMdPTJEXBIP3c%2BjJtq9U6hWSl3BLZzxjpM0JWdV8SHntOJQO6IjtTDBNAaAexMqYDphpBKJnmQwS6M9ESQVcjYZqHYtBgcaNfqaOasQYJ7L4VJ6IVH9zNh7OLb075Mf9gFmk1xZnMnwQQPJ&X-Amz-Signature=2e4da2cb313bc96d2495c57b631d8beb05243ea770cb21d80428ecb98fb2acbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6LXZ52M%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD5u%2Fx2e8Ej%2B%2FnYnQ1j6XYzCnuMCZKMwz%2BX3HUzffrFAQIhAObMszcF1Pw%2BXGsuCdBBi3xQQ5k33xvkE7VKYrDkAKX6KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP0jHqgdHNTrKmqTcq3AN2KnQ%2BNgemZK2j4cjRHuVdu5PF1bHgPo1mkqZAY9vs6bumn5aQRpZZ7ZZyB2dTmdLev6sAbf6tRPtCCH3vbL9ma6m2axu82wdj3c4ZukJTy5IF1K%2BsBtPyh%2Ffaa8Rn%2F%2B1ZgZ1y8JAHRyRNsiIU9%2BQ8Iy38dMV4LVBnTp5jbgL1xiZlBbsjD6xA8OYxNtCaggW8qoiuaHAuw2%2FL4vwXDnUIsuxmkQvgquY1sCKIzKXUJuPalAxXNtjVI%2FOjoUIXVGFkSDz1TM10fNQVOQcCc5Z9SjLVRgaNOnDffhGJsWfVB101xnjUlx%2FjtRa6HqfCMUArqzV6kDMm3SlabxjRqY%2FXouwJP9UB3mG7sVDZ1RCtzMqLujbAiC6BO1XIrqOLsOUVVI%2FtmVNIyWV8OnbdnTa%2F5KkVyTEJHK208qcodJbFdqj7wgSeYHZVvx%2FfpCh7EbYAVJNFSTfWJy6FSZ6gcyNj%2Fy0nJWDRo9ZmiTtjU4aj%2B9AaYAS9Ho%2BefTcjjqApgZqiiS5yPy5rZjKsJvMZePdO8ZPW63qSpHJo6rZfxLvntb5hT5u3oO%2B3Am4nbnH4IF0jGzBI%2Fa1mAnkFx412pkDPc9ZnWOJRT5ugE6g9cAuXdoq39AqPVxKgtOAo7zCjxc%2B9BjqkAQ3vUEfIppoDU9cGc0qqgNfCvFZz1NqBfjRU%2FoRFI61LYwZRm77uRFm2BhygLTQwrdqb%2BHgBr%2FSge62raeghICA49X2cTLWVDVT%2FpV0HWjmim%2F1wTfDMuKex6R7eZIIcerjjWLGUCeI8Yux8izc41DzST0pRHWDxZebEuNJLM6PgZSRmNM7U4l6WKYbq3i%2BueIlHuj%2BWagN3Anrtw6o0o2OozVhU&X-Amz-Signature=9260099f671a017dcea370a6fb957ee8c0dfbbc6ef8368e9c32fd2b8736008c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXVKJDX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGzgIlhHI7TgVBXOjPHSuV0%2FKJUCWjPBbS6EsTLvXxl2AiEA2sVnaCzOfPrwbhC5aHJFP9F37dnDD5DsT%2FvkW3FcsuYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsCUqnUos%2F099HCrCrcA9M52i%2B27KpohhtpK1Rd6DyY26B2qcbCmxh6tfkgWOzWSKjunUqgEsET%2FBJoo3ER%2B4mqRjAy9cZYnFpWmL8ZDZrvHRioWrdCbze9YKZn7kl6Rh2RzK9ysW6EE94%2BYgZkD88wce%2FUjhArfyPYcf9%2BJvEkzOtes6V37nCmbkhKPWzSwWNKid8Cqc0k7F2gq88CzHGrQbKRO8Y6aJ99bg1sL3e7PCgECEf6O1Og0GcR%2Ft%2Bl6Xr0jW3lqh3WCP99i021MpT1PnQLV5L9WZ2BDrbZaDN6Mja9KnTifO6dsNdbotPI%2Bw0QMzZCBAcFbzjNUdFXfVc4uzxW9SZswVjgg32pA7zccZNujQzka5U3MbP3b%2BkP1eVx8EdGrGHvbIvYz2usEExyCq6vsZPSrET8rZ9b6N1LGb6oCCPypYYHYj20dNAfD5y1ake7P3yuVNAnz88ukv7QoqojhfC%2BC6fEJUJvo%2FQyPDPVCw%2BdyM7dlRI%2F39QQc%2F7bddr9c%2B3DwGYpN2O3kdxRNMFDvMT6nBufapAlPgYt6%2F4tWyWooSQpEWLurD1OTKAD6qtiyxk0kXFvrSL4HsZ20Llf5RWV57rnnCLYqITIuZNWNU1U6Q%2Fv2eGGOhZstJNn4haHZcj6LCEiMIXEz70GOqUBz3VeLr85F2J29w5W6%2BsVqBL7clZ%2BNHSBDp9RxsaqMAw2gmDhWPjGRR7gfEinbGAWv3KqkMjzG2VRZaZnyfjGyEGWvNOBLPGG7UkydFVT9xvNyyLk4YeaID7DmjuM7Cul2lDAgQmPzJ3%2FvEPwOfLbZV0shZ9SGahAZlKJuNj65vBZEj30rOh3uyV1je5WZYtpmpb5E8zgfsMYaxKOwvavZyeweYaZ&X-Amz-Signature=422696fe40f536b4bc0fceba725b710a1359505e82ac788dd1063c8420f0e3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
