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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSEHFW2Y%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB0oxaJFf9u2E52BqAAxBehUjwC4Zos3NwR4x7ybdlKGAiEAuJz27%2BdqDfQeZ7HGrjMLcdcPZSjPdTkuQD966EE%2BRKsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGu3rx4G25qd%2F%2Bdk3CrcAzqAHPivctyE5cEN5vbKz2RzYZFyyUA%2F3azuw5RB9v%2FNRrP%2BT%2BK1cbpWDB6s04jtLnGuE1h2H33Hue4yo8s%2FLuKBYF3y%2B8a3j%2Fw%2FAp6YZNDzrz81qGo3uy4BjilwmWfJzXeinORPwQB0tUUAlTZH79ia9KyrBdQhgojoKqX6moAMcbQMtkf9w5%2BxB9pzNx57kQXuYVddJVugiOSsF%2Fpiv0wgQf%2FzkFHDEC7Of71sfNtE19rWDBFCfu6N%2BNjjFWl54niWW5MZQhM%2BK%2BYERT%2FyyV%2BhUT0jJAhC8wE10ZZFXPmht%2B2dW7%2F28XhEyrg49YfmoAnrD2gHxk495wrHvwsflelshinADxsMfu3ka%2F4c3kVO2NlhIgvj1BWWoM9lnfFVFal2OUREXfjNIIlP%2BVChy39yaavx%2Fdl%2F56Ir6bEzDQwFb6SgNQtGUhyd7oTGQdzbJDgfR2U7rxWrJLS5LX3jGP3uXF%2F2%2F4KtOVGoLb87jk5csYenX04DNr0jn%2FilmwqrhIsXSCSjzDYMELXqNfacGEV8gHGE50mmm%2BKsHO8X6afbUrnEvkJry%2B59oKctG7Qa1X8Q1WzZbi3rQKxVZtCcxebr8vtjn%2F1qZqB996h%2FHCL6CiSd85OxZXRykuTgMOXrwL4GOqUBVNfN00OF1f00NuYHUskVOpM8eDo5ZrY%2FpiiWU8n1uvaQZoCWwTgmBRVhZe1Fy%2BEZKeSEFW0mcMS4f9fFpJyENBZbx3lsl%2BuBUuPnwXI6UAwuqj8o9NCh05h%2BwYxtvK%2FYJpT1MSdhZgQYBQMJfu%2F4uEhZbWJY48Zxhzw0pG7wujS8Rd%2BhYfrFkIM1xYgx9vaj5XuuIBp%2BojKipgi4ddBl8b16R7ZE&X-Amz-Signature=40cd988f9ba8454f807403e9df81b64bef50239097392f2e84f2b0c09502bf84&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSEHFW2Y%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB0oxaJFf9u2E52BqAAxBehUjwC4Zos3NwR4x7ybdlKGAiEAuJz27%2BdqDfQeZ7HGrjMLcdcPZSjPdTkuQD966EE%2BRKsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGu3rx4G25qd%2F%2Bdk3CrcAzqAHPivctyE5cEN5vbKz2RzYZFyyUA%2F3azuw5RB9v%2FNRrP%2BT%2BK1cbpWDB6s04jtLnGuE1h2H33Hue4yo8s%2FLuKBYF3y%2B8a3j%2Fw%2FAp6YZNDzrz81qGo3uy4BjilwmWfJzXeinORPwQB0tUUAlTZH79ia9KyrBdQhgojoKqX6moAMcbQMtkf9w5%2BxB9pzNx57kQXuYVddJVugiOSsF%2Fpiv0wgQf%2FzkFHDEC7Of71sfNtE19rWDBFCfu6N%2BNjjFWl54niWW5MZQhM%2BK%2BYERT%2FyyV%2BhUT0jJAhC8wE10ZZFXPmht%2B2dW7%2F28XhEyrg49YfmoAnrD2gHxk495wrHvwsflelshinADxsMfu3ka%2F4c3kVO2NlhIgvj1BWWoM9lnfFVFal2OUREXfjNIIlP%2BVChy39yaavx%2Fdl%2F56Ir6bEzDQwFb6SgNQtGUhyd7oTGQdzbJDgfR2U7rxWrJLS5LX3jGP3uXF%2F2%2F4KtOVGoLb87jk5csYenX04DNr0jn%2FilmwqrhIsXSCSjzDYMELXqNfacGEV8gHGE50mmm%2BKsHO8X6afbUrnEvkJry%2B59oKctG7Qa1X8Q1WzZbi3rQKxVZtCcxebr8vtjn%2F1qZqB996h%2FHCL6CiSd85OxZXRykuTgMOXrwL4GOqUBVNfN00OF1f00NuYHUskVOpM8eDo5ZrY%2FpiiWU8n1uvaQZoCWwTgmBRVhZe1Fy%2BEZKeSEFW0mcMS4f9fFpJyENBZbx3lsl%2BuBUuPnwXI6UAwuqj8o9NCh05h%2BwYxtvK%2FYJpT1MSdhZgQYBQMJfu%2F4uEhZbWJY48Zxhzw0pG7wujS8Rd%2BhYfrFkIM1xYgx9vaj5XuuIBp%2BojKipgi4ddBl8b16R7ZE&X-Amz-Signature=bb8f5661a158189fd9e3a63a57b3faf4b3ef43f675900ca67165042d20193685&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB7XUW3P%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDAYFToCr6CThkK1WBiUv%2FBwbLtjAfgcvT2lGT0QfXNJAiAt8Ti1u9Fn0BOA6DabZLfEgOIeUYoZVQvwHVKtPvVuyCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMah4PYNI9RYY70utOKtwDzYRohkufuPraBlS2KDUxFM53fQ%2BVD%2BTCPtWsTsj4fxW%2F0lS7grPI7bk0pO167sU0%2FWEdDC%2F7AqDgThzKuMCek9MAeb72GK7YAtPdeKbygX0VnQOsf9ElsqoND8KODRJ7m09wZmrBweAXIKX%2BkRO%2Fav3o5Qaabk1csiqDpq%2BDadMh7U4lNvF2jOel9JI2ZAQvV5pg%2FUBLH17p2k2wkJlRytx9nr%2FmM9JfTXrqr8Qzi%2BWDVmp6GEAStcuBpyXudpQUE%2FCiA2%2F6EBPg0hSVIgFxv0xpVG0bXbTu2NeuYcHZ6NqV3Ij1nmDb5cU9fNn26Txn9u6evbQ65jHX1sZHDuCIJJn5iXziEzRlgloRM4DpBB4nt2AwsnOKTDXMtdMWdnvNSOkmf%2B8vcpNrW2mbP%2BB7ZlTZlde0GEr2CTGyq2a22%2BOD8YgAC62yV%2FHmdwToyIJu4skRohSRxQnazZi6fUTl7DlMDmzbGicbL9K2YL45Fj5ZMPKw31zyBU5rROfaj%2FxcFa0Zl9tRp4khtvU8LoUlSpQXcpK%2FeO69tn0exbkNTQ8nLOVsUOJKINbAhjcb7MSJ3RqwNwnkLtTmuu3s3uoAtLhad1tLtTidfRdI1L%2FfLozL5ZxEUN5W%2FI77BWUw3erAvgY6pgEo9CzJi29lmrSxi9hzcECsxE5y3582ZWvpKbf%2F4Is9Ai%2BNRKdKhYLXIPirzppHjqnnHJFS2i7yNB%2BjfZJh7oExsX6VIh4j%2F9g0OGAwDU0VH6NTQE3DzHqKuLDl0CTUVrQ0DFHZ1juPjFLOC0y4wOXLuCf%2B0oMMBNUByfxe6WiKDZCb0Ns26%2F0%2FOwbNst%2FSQbS4OJT4cQHEyrz3bHL3zbGTqCI5r1v7&X-Amz-Signature=d1f613681c5dfe08b1f29f174ce52db7507f8a068c4bc0f2750ab04985c7e0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXPC4BN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCE%2Fyc0r%2BLekdE5rMx4UrqpLKFRT3KrNisO%2FAvwSUj%2BFwIgFx8oQlTgIO8wGAwCaYj5E9CQh%2BUX4z4h7KOEgOyrCLgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlb5svP3%2FdQBmrWqCrcA59V%2FhnZ9Xo4hFXmYeXyVTGt6IoR5NKdLcOc4PS55rp5mHfL0I4mKbFRwi0W2XBHi1dXdEVjxKTGI%2Be2TVNKCBcowESN0xVanN%2B9sZQhmDbOf8FNu2LNxKVLAJLg67mP6T1Fy3sNo9BUxvOVidKrN%2FemJ13A9JAJK3LYpP5vB%2FqZGJBMA%2F6coKXhQBZaxQ2ogevWxFNR35yKvuakFTEjq2L%2FEChRVelMdXvZGvPn80UCefSx%2Fvm%2Fw9DnUZayeLGRWc0XCS5uNHday3p3bqxh4j2vMUKP2Cg1pwNSFpHMQ9khTtNHioqf3n7c9%2BIjt9pFm5%2BlEb2NEcr1LAmI0sjx5vD%2Fv7wyamhXZJXzWrOMW18LJxwFUDauaVK143cT7YgSP6ejXIcMTmpR0W8KAb9IcPrxpKKSF49XDLBvxoemSqus3GUfJ63vkKeEK%2FHtXqcMtMfqHj0GJXaVXKawCG4ApcES%2FKZun7h4CuFL7uvZdjb%2BFedNUNzmrnZe%2Fo6M4Sbod45XQ8q0HljSMrNFm45aR9Kn69dddngTH5sAPm1w%2B4r%2Fflx4ZxAx8Kv0EWT8o%2B%2BcydA%2FQq4%2BRk782hEkqbZUd7FjgPqPewK0E75vZ6gXDk7USiJxIQmpf%2B5NxuQSMOPqwL4GOqUB85QmnkmwXbRkjtjcXnpmhRm7F%2FGlLIEHDLlCe3XIQtu0OAGuEtPvpgkekhxTLuQ2SK4rRMrVcNhm6408vjzJT436uWmPA7UP9DKzpyDwGf9B0sbcC9rH1KZ%2F5IskmaWurn0d8MI5FaFOe6lNs6oSdzqLVINfYbkYdfl9mdv7M401pWPOTy%2BnhJGupOF1yXtx2sNEtC0RI9Lehryvbc%2BLNAIcQ1Hv&X-Amz-Signature=c837e96e6ca9a1bc80129f8165dcaca726263f9efbabb9c4cae27a366e34132b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSEHFW2Y%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIB0oxaJFf9u2E52BqAAxBehUjwC4Zos3NwR4x7ybdlKGAiEAuJz27%2BdqDfQeZ7HGrjMLcdcPZSjPdTkuQD966EE%2BRKsqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGu3rx4G25qd%2F%2Bdk3CrcAzqAHPivctyE5cEN5vbKz2RzYZFyyUA%2F3azuw5RB9v%2FNRrP%2BT%2BK1cbpWDB6s04jtLnGuE1h2H33Hue4yo8s%2FLuKBYF3y%2B8a3j%2Fw%2FAp6YZNDzrz81qGo3uy4BjilwmWfJzXeinORPwQB0tUUAlTZH79ia9KyrBdQhgojoKqX6moAMcbQMtkf9w5%2BxB9pzNx57kQXuYVddJVugiOSsF%2Fpiv0wgQf%2FzkFHDEC7Of71sfNtE19rWDBFCfu6N%2BNjjFWl54niWW5MZQhM%2BK%2BYERT%2FyyV%2BhUT0jJAhC8wE10ZZFXPmht%2B2dW7%2F28XhEyrg49YfmoAnrD2gHxk495wrHvwsflelshinADxsMfu3ka%2F4c3kVO2NlhIgvj1BWWoM9lnfFVFal2OUREXfjNIIlP%2BVChy39yaavx%2Fdl%2F56Ir6bEzDQwFb6SgNQtGUhyd7oTGQdzbJDgfR2U7rxWrJLS5LX3jGP3uXF%2F2%2F4KtOVGoLb87jk5csYenX04DNr0jn%2FilmwqrhIsXSCSjzDYMELXqNfacGEV8gHGE50mmm%2BKsHO8X6afbUrnEvkJry%2B59oKctG7Qa1X8Q1WzZbi3rQKxVZtCcxebr8vtjn%2F1qZqB996h%2FHCL6CiSd85OxZXRykuTgMOXrwL4GOqUBVNfN00OF1f00NuYHUskVOpM8eDo5ZrY%2FpiiWU8n1uvaQZoCWwTgmBRVhZe1Fy%2BEZKeSEFW0mcMS4f9fFpJyENBZbx3lsl%2BuBUuPnwXI6UAwuqj8o9NCh05h%2BwYxtvK%2FYJpT1MSdhZgQYBQMJfu%2F4uEhZbWJY48Zxhzw0pG7wujS8Rd%2BhYfrFkIM1xYgx9vaj5XuuIBp%2BojKipgi4ddBl8b16R7ZE&X-Amz-Signature=a54f2e02638556e98825ceda2d7a1700b94c6a1dc3affd857dbb268bb95454ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
