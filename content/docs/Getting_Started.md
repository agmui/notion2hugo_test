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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCUYNIXJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDSeQEesVLyOkLR9DCd7ZC5Cu0Ct8%2FU2XPZttCBQdB%2BagIhANeKd%2BwlraPiODQJ6ZDJf33UPvBQbkmCGIxk5h5qg412KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLMAylPiYAU1KZv8Qq3ANehVV8P85qFv8OyM9BTgE5tXphf%2BTkCBAlV0tJUou1rbXxKpINto7Me2U8xDvbEPvvym41zSySX2o8u2CG%2BkOGDxPK8uge%2F7IBxs6k2m9FZOkFej101jfVnxJ%2FZR%2BU7aEq3GAplieeUqYABMreqfYys2YShNVDRJ8exlJSnydOt7KT5y57WcUw5tnIoIwhRAnVYrn%2FCsy%2FhZTQFaYmXTjXRfGtHZ%2FKKqhVQfsKcTxgxexkNs3uN9zm5uTr4wy9K%2F4brfeDhma1zNeeokXo4U3EwDBUzgRUDF7VrSPMR8XjRmmLEkhmbT5yINDLqG8sUASFtD%2BqQldJbNT%2FTbYrtkxj7Z2qHch57YLvHb84r4qf1nhNpz04f667nkZ3%2FcHe6d6PIH3mCk896D5HyLWQTI5x5omYP5MbBx72d4LvBPSRqghXEi3XxxxjkGV9mTxIdCZavpUMypw2BHDK3RAOSgp2ivo1zUSuTIWROiM98adCsvhOAUjz3NqmAaqSfVHTeD3uhRALNRrvYt%2F6ps32%2BmJadUTwYK4QOZspWhuMN0p4CgBryYn97lDZjsZGQuDGy%2F2KFPjUVTdV2u0t1YzKcfc9VcPHuHEAuvpAooyO%2FA6Ke6RkzN6ESa4GEo0SSTC8uZ%2FEBjqkAYqvIcwVRBT7Cd46JNLltU1TVbVdhLV8ygFZ9beQkpv1o3v7549FbJN50lRqoUn%2FRtrh%2Fz8yVFIRpwMPASZjOGFdmGb5NwHzztG0H9TkbcALqBdO7cEK9kBUd9Sdo6UAyY13LJ6F%2BiYGWocNm9jpSVSgITtvKr6ZO7MTbfE1ZvwC8uT1WUglwEfIifJEYf6tpsvuY4dKvv4rJgQwNesSr7baqJ5o&X-Amz-Signature=33e50e3ce2a726cd6d391da3ee18b8049076cd1283c46c422316b425fc1bcabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCUYNIXJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDSeQEesVLyOkLR9DCd7ZC5Cu0Ct8%2FU2XPZttCBQdB%2BagIhANeKd%2BwlraPiODQJ6ZDJf33UPvBQbkmCGIxk5h5qg412KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLMAylPiYAU1KZv8Qq3ANehVV8P85qFv8OyM9BTgE5tXphf%2BTkCBAlV0tJUou1rbXxKpINto7Me2U8xDvbEPvvym41zSySX2o8u2CG%2BkOGDxPK8uge%2F7IBxs6k2m9FZOkFej101jfVnxJ%2FZR%2BU7aEq3GAplieeUqYABMreqfYys2YShNVDRJ8exlJSnydOt7KT5y57WcUw5tnIoIwhRAnVYrn%2FCsy%2FhZTQFaYmXTjXRfGtHZ%2FKKqhVQfsKcTxgxexkNs3uN9zm5uTr4wy9K%2F4brfeDhma1zNeeokXo4U3EwDBUzgRUDF7VrSPMR8XjRmmLEkhmbT5yINDLqG8sUASFtD%2BqQldJbNT%2FTbYrtkxj7Z2qHch57YLvHb84r4qf1nhNpz04f667nkZ3%2FcHe6d6PIH3mCk896D5HyLWQTI5x5omYP5MbBx72d4LvBPSRqghXEi3XxxxjkGV9mTxIdCZavpUMypw2BHDK3RAOSgp2ivo1zUSuTIWROiM98adCsvhOAUjz3NqmAaqSfVHTeD3uhRALNRrvYt%2F6ps32%2BmJadUTwYK4QOZspWhuMN0p4CgBryYn97lDZjsZGQuDGy%2F2KFPjUVTdV2u0t1YzKcfc9VcPHuHEAuvpAooyO%2FA6Ke6RkzN6ESa4GEo0SSTC8uZ%2FEBjqkAYqvIcwVRBT7Cd46JNLltU1TVbVdhLV8ygFZ9beQkpv1o3v7549FbJN50lRqoUn%2FRtrh%2Fz8yVFIRpwMPASZjOGFdmGb5NwHzztG0H9TkbcALqBdO7cEK9kBUd9Sdo6UAyY13LJ6F%2BiYGWocNm9jpSVSgITtvKr6ZO7MTbfE1ZvwC8uT1WUglwEfIifJEYf6tpsvuY4dKvv4rJgQwNesSr7baqJ5o&X-Amz-Signature=d55f9cae8e3fc18e7cf7359c6cb8ee367fb792b56b232c61aa502f3f1e2b850e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCUYNIXJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDSeQEesVLyOkLR9DCd7ZC5Cu0Ct8%2FU2XPZttCBQdB%2BagIhANeKd%2BwlraPiODQJ6ZDJf33UPvBQbkmCGIxk5h5qg412KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLMAylPiYAU1KZv8Qq3ANehVV8P85qFv8OyM9BTgE5tXphf%2BTkCBAlV0tJUou1rbXxKpINto7Me2U8xDvbEPvvym41zSySX2o8u2CG%2BkOGDxPK8uge%2F7IBxs6k2m9FZOkFej101jfVnxJ%2FZR%2BU7aEq3GAplieeUqYABMreqfYys2YShNVDRJ8exlJSnydOt7KT5y57WcUw5tnIoIwhRAnVYrn%2FCsy%2FhZTQFaYmXTjXRfGtHZ%2FKKqhVQfsKcTxgxexkNs3uN9zm5uTr4wy9K%2F4brfeDhma1zNeeokXo4U3EwDBUzgRUDF7VrSPMR8XjRmmLEkhmbT5yINDLqG8sUASFtD%2BqQldJbNT%2FTbYrtkxj7Z2qHch57YLvHb84r4qf1nhNpz04f667nkZ3%2FcHe6d6PIH3mCk896D5HyLWQTI5x5omYP5MbBx72d4LvBPSRqghXEi3XxxxjkGV9mTxIdCZavpUMypw2BHDK3RAOSgp2ivo1zUSuTIWROiM98adCsvhOAUjz3NqmAaqSfVHTeD3uhRALNRrvYt%2F6ps32%2BmJadUTwYK4QOZspWhuMN0p4CgBryYn97lDZjsZGQuDGy%2F2KFPjUVTdV2u0t1YzKcfc9VcPHuHEAuvpAooyO%2FA6Ke6RkzN6ESa4GEo0SSTC8uZ%2FEBjqkAYqvIcwVRBT7Cd46JNLltU1TVbVdhLV8ygFZ9beQkpv1o3v7549FbJN50lRqoUn%2FRtrh%2Fz8yVFIRpwMPASZjOGFdmGb5NwHzztG0H9TkbcALqBdO7cEK9kBUd9Sdo6UAyY13LJ6F%2BiYGWocNm9jpSVSgITtvKr6ZO7MTbfE1ZvwC8uT1WUglwEfIifJEYf6tpsvuY4dKvv4rJgQwNesSr7baqJ5o&X-Amz-Signature=e86133b656e5f5b517b0a49388d74f2d4a56044b1743c16c77936294ec5da552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYADQRRF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGaiE5IIvUh04mPNpmxz34eqr1hLXDtTyBbQe9EGoCp6AiEAkkPdJKQwLLd%2BRfyjtgfQG1xFrIxzP9co4IMnb6BMClsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlFt8lK6%2BBMjjnoRSrcA%2FVAqN6dSmV6Lo3GG%2FoUMrTrxE16OhpSVQazmIyTlVBkpv2Js1U%2B11ggklqorOGyO3pmidjO35pXg7duV8kJ%2BjePK9h3x4qQdC2CtGm6PCDy7efjgSva71HVcimyMlbZOml98zOfHUmvwwfIaq9E8EgIP91YwseHThR6144uS%2B6jLNbHhsW4aCIxUN9hPF1OHcGRp3A6HlQiN2%2Fnb736Sjh%2BrABjmLe5qBi3gmsnuL%2FLoA9twPYPv%2FCHF53yHhGj1ZbCSJgg19E9qMacaJiIvbJAaDOtfKSn8l9n09GUlvvxI%2BeR8COfE021Lor8RNLxXje35835sIV9juaBRmCZ92fX3y1Qf229cGABQwflka%2BA5plpO9AxrkaZY5FO1FO5qZJ5CONUP%2FjyGG3ufN9cM1dGUcEBoQxAvkAlSdvFm35DAJRvS5%2FtrVoabFrZ1neJOv4ZPnOadPjwpW46heQOvNY20r3%2Bxjm7XxdGT2UHIOUxIWj4S8%2BMHXq4oyeTpo%2F9GUVETdeyxCuMPYKwMtn6gF6AaBsfdEZcrJ%2BBoMdCZcLPaiPZd9NloEPUy2A30mGf%2FhD4665t1izcLqs2e%2Ba1e00Jqc7SWiX7AVCVEla0tIVkzAegA%2BQXiY1ALnTNMLu5n8QGOqUBehpCid%2BzY0Mnt1Ghj%2BTGibNxDmgVfTpaU226BbDihDamvn75A9wmTlYmMhxlYE1xlIwEhok0GPrap0RNRMUBYqvZv4zZm99OcUJMWL0sZD2ahKWm%2FkhcugoklB55sHTcV1GT%2F5ERIAJxV%2BdRW8rLP%2BjV8tq32dKcQCKaAeYMBzPPGJzneVSRJRRW0GsIIxVRh0VJI2TEmxXYAeiCITI5jV%2Fa5ZIf&X-Amz-Signature=0c00effd7072fb1c063009e93333e5e0947f6518c48738e503370c49e913804b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRMUOR6Z%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAIu%2BNIxWT34H1HYcJofZWb7hoGfGNXC2xAC45%2Bjy2BsAiEA34kV2ebTG4bfz8TwMMYtjFJBYrF0Ye%2BgtipqFOr7f3wqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVWbdkWRKThGtT4rCrcA0I1LlpYqg%2F0tDZVPFii3Mw9BuSTYK%2BP21A8DHjK0UwjnKZlTv6ca5qoDa3lT%2FzBIcrDffTmT7Rg6bX1lum1JD1A0qOdbfMmz6Iqa8QGktRrwVpUytdaZB8f%2ByjTDUDONzRXs9D%2BoJ6kAxNOKg2l4%2BqnU4TM6SBijgkEmkLI5BjnUDcd2zjIVUSOoElIwXO0mKqaW6dH%2Fage3MBhzTmbox1npF7AdQstdYiHoGTmbS2EFKmXA5liduzIT3Q%2FrPsVdMDh6gR%2BuiRfPQ2JHH0TPX4R8fJK2oMHbovFQ5%2Fbzute377mZ5%2B26QgeHC2yZo%2FdW1cNvsF5ZV2QlMEzBgBGxb3roisets3rBg7BzM%2F%2F%2BbwouMJRagHrY2R0pzy8vKsCmDt7DmSLOqpT02ACjXy%2FbGrjAf83tjhw1gQrz0JhS5VnmJbyU%2F3ujaBTmVhXICU4YDeTpRJM70qli6ZcKrqmtEdlTBlJK8GHYyWTnJFJsllc%2Bojcvoo4C%2Fo%2B9O6FN%2F39YoKKfzOCrA6Y2UgxqUsCB%2B%2FbpJlTuLZjZ%2BbCfL3n%2FUUlhfcrw%2B4mT1xKoyMjjroVqly9VYuMhyK6HSRBpj1vpcZZerd4ZS3Qrk9wem%2Fco5%2F%2FB0BBy5uL6KOKY9UDMOu5n8QGOqUBegdOZDxPsLVeegWGUY94s8F2mYNcQ8PRgBCftnZtJkduZFcdhdlr52rKkJhs4kuKTZ%2FCkYP48fR43wQEcTq0nI62fW5zY4y8ONbUAaBlta44UKwBAmBhN8fZEm5QVayUHHHwHe%2BbZcroS0%2Biww7arm8m7zUKGUa0Uqk3S%2Fu5MAT06oPxDVXmszVGCMEF03%2FQ1ZqJIXyTHBZ%2BxmcZ7Sa%2B0G1QfUD4&X-Amz-Signature=e25b27d4a69be6a2b1364c1c5ef315e8a99214650369bd24e414c250e7185205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCUYNIXJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDSeQEesVLyOkLR9DCd7ZC5Cu0Ct8%2FU2XPZttCBQdB%2BagIhANeKd%2BwlraPiODQJ6ZDJf33UPvBQbkmCGIxk5h5qg412KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLMAylPiYAU1KZv8Qq3ANehVV8P85qFv8OyM9BTgE5tXphf%2BTkCBAlV0tJUou1rbXxKpINto7Me2U8xDvbEPvvym41zSySX2o8u2CG%2BkOGDxPK8uge%2F7IBxs6k2m9FZOkFej101jfVnxJ%2FZR%2BU7aEq3GAplieeUqYABMreqfYys2YShNVDRJ8exlJSnydOt7KT5y57WcUw5tnIoIwhRAnVYrn%2FCsy%2FhZTQFaYmXTjXRfGtHZ%2FKKqhVQfsKcTxgxexkNs3uN9zm5uTr4wy9K%2F4brfeDhma1zNeeokXo4U3EwDBUzgRUDF7VrSPMR8XjRmmLEkhmbT5yINDLqG8sUASFtD%2BqQldJbNT%2FTbYrtkxj7Z2qHch57YLvHb84r4qf1nhNpz04f667nkZ3%2FcHe6d6PIH3mCk896D5HyLWQTI5x5omYP5MbBx72d4LvBPSRqghXEi3XxxxjkGV9mTxIdCZavpUMypw2BHDK3RAOSgp2ivo1zUSuTIWROiM98adCsvhOAUjz3NqmAaqSfVHTeD3uhRALNRrvYt%2F6ps32%2BmJadUTwYK4QOZspWhuMN0p4CgBryYn97lDZjsZGQuDGy%2F2KFPjUVTdV2u0t1YzKcfc9VcPHuHEAuvpAooyO%2FA6Ke6RkzN6ESa4GEo0SSTC8uZ%2FEBjqkAYqvIcwVRBT7Cd46JNLltU1TVbVdhLV8ygFZ9beQkpv1o3v7549FbJN50lRqoUn%2FRtrh%2Fz8yVFIRpwMPASZjOGFdmGb5NwHzztG0H9TkbcALqBdO7cEK9kBUd9Sdo6UAyY13LJ6F%2BiYGWocNm9jpSVSgITtvKr6ZO7MTbfE1ZvwC8uT1WUglwEfIifJEYf6tpsvuY4dKvv4rJgQwNesSr7baqJ5o&X-Amz-Signature=de72e85c5f91992cd9fbff5bf297b9ff33891b9853b476379c2183243929d795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
