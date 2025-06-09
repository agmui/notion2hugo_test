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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZIITKJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgDPXA6DPR%2BiklcMBO2CaFcUT%2BalOxfnrL7LDqLGjvrAiBbBYpu4iXAmVhlp62tCIVdUyW8TjvXKtvqtxhN4uzujyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC48KEzVqRKaNm%2BTBKtwDcAqIRd1r6EWmn77fzGMM%2B2qk6Q3hDYtaKAb3%2FVB%2BxjsTzSL3UnKqnqBQMobcB6baeGfqMN2D0bT9OfhQs5WBgLbzOyLLphTeU5WtUhvBCLIqOvB3jxFal6C6WGa90ROEdfg9b9DRm4E8gm8rVImuU593EKfxIaS6mtOuO50SDXvn22BhUOL6CO6c7co2L%2BvNd86MU0k1l%2BcZy3Lsr5QnxTb3iaeaV41ef6F6oDe5u8%2BH2lmqdmtZhPtvbUOPpAGFRi1%2Fx6Iy7XtfX68SQcIdIIEPq2y1%2FCXfC0lzayXaD5vbeg%2BnIMEmAGbI9rPUrIIjSCzfcnnS8VuD2ZTR3nCxNT909vN81aKlPm%2FsGRoRAz0fkJk7SFH1MffZasQduLkqtXnTJmNh08kF2ojIwOOTHsnW4Is1C%2FbtzQdFLX6zMtjtp9MCTWtzotFa%2FqRaqDrejBMqMBA7Lqc4vo6pww4fLDzECojzju0o6EVxZu1LBplvEXn9BK3rARgqgrViiOUygNsbYkFZydSREE0hXrxCHkbiM3D4BAFDUDrAyH1AmJdNlYTpjOXQ6UVLo2WcUac3mMaki1vClOqBD2hs3fxPjkQkShWvyWn01gjK%2Bbdv2SLYP%2B0sHjEyS9TFxl4wo9abwgY6pgFtOfiuYLUxYesvusTCAPrlfAclWzbZyWSWxr8qfWwFljOzCMBcitWtNMVo138lzUSOM2ftjdiRoG6q6p4GfJUocPa7Sv2LW3x1OXOfR2l1NhzRbefOlH2Dacp6MlF4opJkqCOVa5i106Os8ZwafEkXRq2Py1C9Uym687N%2BaKQdmz8OESGsCdtVX3TMbk594oSJ3wCmlh%2BVv8GFFWxK91LzDqPwRDk6&X-Amz-Signature=69c93ca095b5e013a67ae28f2ee7ba87f52ae4183a05ea26d590be60acc6e1af&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZIITKJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgDPXA6DPR%2BiklcMBO2CaFcUT%2BalOxfnrL7LDqLGjvrAiBbBYpu4iXAmVhlp62tCIVdUyW8TjvXKtvqtxhN4uzujyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC48KEzVqRKaNm%2BTBKtwDcAqIRd1r6EWmn77fzGMM%2B2qk6Q3hDYtaKAb3%2FVB%2BxjsTzSL3UnKqnqBQMobcB6baeGfqMN2D0bT9OfhQs5WBgLbzOyLLphTeU5WtUhvBCLIqOvB3jxFal6C6WGa90ROEdfg9b9DRm4E8gm8rVImuU593EKfxIaS6mtOuO50SDXvn22BhUOL6CO6c7co2L%2BvNd86MU0k1l%2BcZy3Lsr5QnxTb3iaeaV41ef6F6oDe5u8%2BH2lmqdmtZhPtvbUOPpAGFRi1%2Fx6Iy7XtfX68SQcIdIIEPq2y1%2FCXfC0lzayXaD5vbeg%2BnIMEmAGbI9rPUrIIjSCzfcnnS8VuD2ZTR3nCxNT909vN81aKlPm%2FsGRoRAz0fkJk7SFH1MffZasQduLkqtXnTJmNh08kF2ojIwOOTHsnW4Is1C%2FbtzQdFLX6zMtjtp9MCTWtzotFa%2FqRaqDrejBMqMBA7Lqc4vo6pww4fLDzECojzju0o6EVxZu1LBplvEXn9BK3rARgqgrViiOUygNsbYkFZydSREE0hXrxCHkbiM3D4BAFDUDrAyH1AmJdNlYTpjOXQ6UVLo2WcUac3mMaki1vClOqBD2hs3fxPjkQkShWvyWn01gjK%2Bbdv2SLYP%2B0sHjEyS9TFxl4wo9abwgY6pgFtOfiuYLUxYesvusTCAPrlfAclWzbZyWSWxr8qfWwFljOzCMBcitWtNMVo138lzUSOM2ftjdiRoG6q6p4GfJUocPa7Sv2LW3x1OXOfR2l1NhzRbefOlH2Dacp6MlF4opJkqCOVa5i106Os8ZwafEkXRq2Py1C9Uym687N%2BaKQdmz8OESGsCdtVX3TMbk594oSJ3wCmlh%2BVv8GFFWxK91LzDqPwRDk6&X-Amz-Signature=679c0cec42b99281374a278d9f0844f50f226cf922649787b8621e07d0e13b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZIITKJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgDPXA6DPR%2BiklcMBO2CaFcUT%2BalOxfnrL7LDqLGjvrAiBbBYpu4iXAmVhlp62tCIVdUyW8TjvXKtvqtxhN4uzujyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC48KEzVqRKaNm%2BTBKtwDcAqIRd1r6EWmn77fzGMM%2B2qk6Q3hDYtaKAb3%2FVB%2BxjsTzSL3UnKqnqBQMobcB6baeGfqMN2D0bT9OfhQs5WBgLbzOyLLphTeU5WtUhvBCLIqOvB3jxFal6C6WGa90ROEdfg9b9DRm4E8gm8rVImuU593EKfxIaS6mtOuO50SDXvn22BhUOL6CO6c7co2L%2BvNd86MU0k1l%2BcZy3Lsr5QnxTb3iaeaV41ef6F6oDe5u8%2BH2lmqdmtZhPtvbUOPpAGFRi1%2Fx6Iy7XtfX68SQcIdIIEPq2y1%2FCXfC0lzayXaD5vbeg%2BnIMEmAGbI9rPUrIIjSCzfcnnS8VuD2ZTR3nCxNT909vN81aKlPm%2FsGRoRAz0fkJk7SFH1MffZasQduLkqtXnTJmNh08kF2ojIwOOTHsnW4Is1C%2FbtzQdFLX6zMtjtp9MCTWtzotFa%2FqRaqDrejBMqMBA7Lqc4vo6pww4fLDzECojzju0o6EVxZu1LBplvEXn9BK3rARgqgrViiOUygNsbYkFZydSREE0hXrxCHkbiM3D4BAFDUDrAyH1AmJdNlYTpjOXQ6UVLo2WcUac3mMaki1vClOqBD2hs3fxPjkQkShWvyWn01gjK%2Bbdv2SLYP%2B0sHjEyS9TFxl4wo9abwgY6pgFtOfiuYLUxYesvusTCAPrlfAclWzbZyWSWxr8qfWwFljOzCMBcitWtNMVo138lzUSOM2ftjdiRoG6q6p4GfJUocPa7Sv2LW3x1OXOfR2l1NhzRbefOlH2Dacp6MlF4opJkqCOVa5i106Os8ZwafEkXRq2Py1C9Uym687N%2BaKQdmz8OESGsCdtVX3TMbk594oSJ3wCmlh%2BVv8GFFWxK91LzDqPwRDk6&X-Amz-Signature=7ebad14bfc132fda517c9c8f364278f09bfe22f6cb12a166dec8ebb5c520b34c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5G7FTPJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMSy1rYMJatKR4f2mWKnmufAA4HCtMrtQYqaBod0WjyAiA1RBtE7f04NF6lIXMo0FT42t%2FDSGd%2F%2F2yBlC11RavvMSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1p8ZiAX6OqRvrYiMKtwDt6sVMYJOggaZxPbu0Q18PLhyrrVcf7l7w1xeOLWVMUsA1MtUdXKXaieOFGJ7U3k6FvhoUSoUD0CfmOft6La6RHfDEiCiB5aXmsTqzjo4m9DJXto618vIxuekE%2BtXYq%2FgbpbmsYMlU%2FyMScC4GFHTN3OpNU9w9AhfNFbBV0LSVd3UFc%2BGGH9eRE5eLnAdZ%2FLOUeSgl0a64%2Bsa4OJvsdaFO%2FQ7qLN4EAgoAnjUK7rjB5h3J%2B7DW1pS8uZRPHEd%2F8gnP3GTKFWRCvEFGOijbL1z7aCg6vScK6s3UNQLd2JXTnpcwsdmkwZIKRAUBcUeYtsDxeOPtnuzcfnaLN2gtL6IHK%2BDTqxwZtwA1VIgQUdZW7%2BtFoMZDierurPNK4kP%2BFt%2F46PBftR6eXGSjy2Vq1CoubJs89r1y6UPd6oF07KhW2A2AwGrg39xjC2NbeNCPv6sxycMmNJ4rcrTy%2BsC1akcwX6y8xHrPXdMybl90fds1dfxQIOUi9eSccUJIEPQXYsFAvOAjGR%2BKE9yc1Ucy%2FCiSGJcYzxZzzyaQ1uFCpAbs3B3IhNyZnDHuZrbLxF4DkZAsGRTeZFTIgBAB9Zyl%2BU%2Fh1AG7s4ldUwh6LXphYPYohULSUl61RHfRqzV32Qws9abwgY6pgFK49tRieBP797VZaiVmzDOouc3LHNFNgVPfHjKc%2FZN8SnM89%2BwMlM82sXa5QLrlXfU9U7sJQFx7Oz8l%2FKwR8K6vzokmQIRsvl5NOcmkIdiPLBMeCasXSJ5s0VQJ7gT2J6U3xWlzImSPOxHBCrVHQWlMj9yU4JOcUMGduUTUAg0qHv4hH2gR%2BHFZUuV6IEgja%2BBfiPhOlC3qoNK9XvVBVeJFuSrwgfG&X-Amz-Signature=d1b2251140403e5f1ee5e1d8019a28b756e8a823f99e601d51b409df0231ac67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6NUPF3Y%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcuti2hmQjGvvbrN8t%2BTb8t7b4jBYw5IMcKNikVjcZfAiAmROJryaWR8At7q6PP5Aw0oeZEctj32LU9lvc2AfAQSSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFI%2B9lfa1549cvrbHKtwDyl82o%2FDIC0qeTT5owMhgAHmNwmDyo21%2FyItY5SF2jaWw%2BZ%2FBZH%2Fj4sLYEIhkGHvYdIbLz1yEXkSHDZbtK%2BiI5XlQ0tMk%2FyYgyBdv2Zatx7p9B2XK3JLlAxxgkQqX%2BoEwnvvQA%2B3MfVXdI%2FlsfRbZCXYdnT13q5g4G%2Fb49XxdYfQpQk1Opg%2FmwKBLJPXE7rfYCeMtLfxtzTno6iqtYVFT833uFeKzBcOeJ06N83fDsrVUe%2FlWC6BN5nh6Ru2x0c5OKgCnjyGXw7FS6m4d%2FB%2FQ4zvCdm52HTuDrwN0cxPhKKBCYdiOYfBzhutF9Inv%2BeAKu7ebDt8l1bwxnW%2FCnbxpisEyRcTnFqjXMXJtwI2xaGD7fdKjejHLzadXwRfuhDIr57BxCoC0X9O0suhBD9xCi0QIByYZjafGB028oRnFz1yxlQm%2FxmLi5TTKGcx7wbXWMEr%2F9zJ1lBiF4jW0ErAJGf6Ztb565V3XuNRt%2BTj8VqIQimMA09%2FPzL4OkRbWoEyi9ZyXpzwUVUEbHprSKFkDtUbS5JE3W1pzfnRlRSJ3nr8%2BbEmq%2FMVo8ee3iXAs%2FUCHKDYsvuFL9rxLRyAfX9jrpUQ62%2B6mbD8UOokkr3G%2BmBt2yoN%2B8WEncfNurEYwp9qbwgY6pgF%2BxLSu3CM1tRPPRvdsMHB%2Fw%2FXXkL%2FOJLSTgKHiDqU4z7y4H3QaHjGytHBr8EoKFDxxYW0tjjf316RSet%2FmlxEZydDbVunm4UmZI2jaNeqHBddpFf%2B0FfZ%2F6aG0mcbqb1yY80BsGwxzx2ZSDdzxlweJyiuw5XkAABf85g5dQ4x0HWTewcglifHtP6TPfLb7LmjeDiy5rHhcPZdE1P%2BFGNB2SNGXnIGb&X-Amz-Signature=114e35f3a3b0858b8df7bb5ffe7196dd347eb34aec3e5280363a6b273d1ecf8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZIITKJ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgDPXA6DPR%2BiklcMBO2CaFcUT%2BalOxfnrL7LDqLGjvrAiBbBYpu4iXAmVhlp62tCIVdUyW8TjvXKtvqtxhN4uzujyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC48KEzVqRKaNm%2BTBKtwDcAqIRd1r6EWmn77fzGMM%2B2qk6Q3hDYtaKAb3%2FVB%2BxjsTzSL3UnKqnqBQMobcB6baeGfqMN2D0bT9OfhQs5WBgLbzOyLLphTeU5WtUhvBCLIqOvB3jxFal6C6WGa90ROEdfg9b9DRm4E8gm8rVImuU593EKfxIaS6mtOuO50SDXvn22BhUOL6CO6c7co2L%2BvNd86MU0k1l%2BcZy3Lsr5QnxTb3iaeaV41ef6F6oDe5u8%2BH2lmqdmtZhPtvbUOPpAGFRi1%2Fx6Iy7XtfX68SQcIdIIEPq2y1%2FCXfC0lzayXaD5vbeg%2BnIMEmAGbI9rPUrIIjSCzfcnnS8VuD2ZTR3nCxNT909vN81aKlPm%2FsGRoRAz0fkJk7SFH1MffZasQduLkqtXnTJmNh08kF2ojIwOOTHsnW4Is1C%2FbtzQdFLX6zMtjtp9MCTWtzotFa%2FqRaqDrejBMqMBA7Lqc4vo6pww4fLDzECojzju0o6EVxZu1LBplvEXn9BK3rARgqgrViiOUygNsbYkFZydSREE0hXrxCHkbiM3D4BAFDUDrAyH1AmJdNlYTpjOXQ6UVLo2WcUac3mMaki1vClOqBD2hs3fxPjkQkShWvyWn01gjK%2Bbdv2SLYP%2B0sHjEyS9TFxl4wo9abwgY6pgFtOfiuYLUxYesvusTCAPrlfAclWzbZyWSWxr8qfWwFljOzCMBcitWtNMVo138lzUSOM2ftjdiRoG6q6p4GfJUocPa7Sv2LW3x1OXOfR2l1NhzRbefOlH2Dacp6MlF4opJkqCOVa5i106Os8ZwafEkXRq2Py1C9Uym687N%2BaKQdmz8OESGsCdtVX3TMbk594oSJ3wCmlh%2BVv8GFFWxK91LzDqPwRDk6&X-Amz-Signature=e499a842e23eb0508e36ed38733dbf3b45d25a0b5ccbeed393d26c5a928c5858&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
