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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRC5KPJ3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtywnZXnEDWfY5GrOLc8DGwgkVSAYisFkYm0aNUcMEsAiAEU7asYQN4g00h0VNcvUCuGUO%2BJELbBP0iSu8nL4UYKCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMrOqeH8hpSzn2Nr7yKtwDgCRT944F20yHpPKgNEddpMhTDFEYsIryIkVk87bzgylm4ylb6rz80eKQEBZRYE91e%2BNq%2F3TVKkwocESmLRHnp5UEdRkYJ0xzcUqO9Py%2F46plp%2B22PgYcswDuaJIDQtTGq9DrDcGCFsUd0OVR8Gqmth0G8E6Rn3JfTQAtdP8aqnJQOI6vJYJVW%2Flj57ee5zyptGRAW2%2BBE1dI%2FREtmwFgN%2F%2FUaDbLFbAMqK%2BBjEGUZ1flIPTWh%2BVswexqol3cZSwyyYeC2wCV0wcceIZcygazWgUOjWMB0rK2VcUMLSl9DcVnV3lQUQKbDaNBLl%2B3r3ZY1d32Ttgn79zoUExz%2F8abHy%2FIyp9gShmKHZ902ljaGsJKs80yT53GTlc1t8LwMwg2yOKhqQgSNkFoKloNmdvDspVY3QcOtSrCjK9gVW5l4f8y1mWzU28CCmx%2BDVFLt1VEWk0S9NMghdflGmrxUqHIPafHZA2wNAFSCiBlLyNE9iyJp9kvGjkez7qDiTMrHzFPtVKqGanQf3QyrI9kYdjvQZZ1ZTcQ54WrbRfE2KvSo5ffW1HACXudgVW5u%2FCXjiTL62nFg4z04ujGS9WaFH7F%2BbRw6RxLlBy06p7YhRne1dbzFM0ijPxxMbdCOo0wkLrRvwY6pgFc8uWm9RiWGe01QFnKnrH94vPx6848aIxURc%2FvqHG9YqKxz2%2FNU9h7lGjAoD6kUR0f4vlTBhtAxGUCnLEFcNYJbIPJJBw9VE4Ahw1swjzVs%2FKKkrkTD8MnimelcUTwNsteCySq9l4jRMB2urvrm0X99BSXMB%2BkHvAsYO1TmD2xsRnT7QI8%2FMGtbehsPt7K3vqTLdv8qfA88TP74%2F57807fNFbAsyv2&X-Amz-Signature=b2408dc10d2e3482378a37276151e0847a97d4258faed5c6db76d421cce8c6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRC5KPJ3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtywnZXnEDWfY5GrOLc8DGwgkVSAYisFkYm0aNUcMEsAiAEU7asYQN4g00h0VNcvUCuGUO%2BJELbBP0iSu8nL4UYKCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMrOqeH8hpSzn2Nr7yKtwDgCRT944F20yHpPKgNEddpMhTDFEYsIryIkVk87bzgylm4ylb6rz80eKQEBZRYE91e%2BNq%2F3TVKkwocESmLRHnp5UEdRkYJ0xzcUqO9Py%2F46plp%2B22PgYcswDuaJIDQtTGq9DrDcGCFsUd0OVR8Gqmth0G8E6Rn3JfTQAtdP8aqnJQOI6vJYJVW%2Flj57ee5zyptGRAW2%2BBE1dI%2FREtmwFgN%2F%2FUaDbLFbAMqK%2BBjEGUZ1flIPTWh%2BVswexqol3cZSwyyYeC2wCV0wcceIZcygazWgUOjWMB0rK2VcUMLSl9DcVnV3lQUQKbDaNBLl%2B3r3ZY1d32Ttgn79zoUExz%2F8abHy%2FIyp9gShmKHZ902ljaGsJKs80yT53GTlc1t8LwMwg2yOKhqQgSNkFoKloNmdvDspVY3QcOtSrCjK9gVW5l4f8y1mWzU28CCmx%2BDVFLt1VEWk0S9NMghdflGmrxUqHIPafHZA2wNAFSCiBlLyNE9iyJp9kvGjkez7qDiTMrHzFPtVKqGanQf3QyrI9kYdjvQZZ1ZTcQ54WrbRfE2KvSo5ffW1HACXudgVW5u%2FCXjiTL62nFg4z04ujGS9WaFH7F%2BbRw6RxLlBy06p7YhRne1dbzFM0ijPxxMbdCOo0wkLrRvwY6pgFc8uWm9RiWGe01QFnKnrH94vPx6848aIxURc%2FvqHG9YqKxz2%2FNU9h7lGjAoD6kUR0f4vlTBhtAxGUCnLEFcNYJbIPJJBw9VE4Ahw1swjzVs%2FKKkrkTD8MnimelcUTwNsteCySq9l4jRMB2urvrm0X99BSXMB%2BkHvAsYO1TmD2xsRnT7QI8%2FMGtbehsPt7K3vqTLdv8qfA88TP74%2F57807fNFbAsyv2&X-Amz-Signature=285a2beb978358ac568f4c59649bcc3da67225dc3e1e30c5de945d47906f0d95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CN55AOL%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeBYA6X2wg76I7xbmGz2dlXYLgG9%2BWeEo3KTdoxY8tFAiAmac6UMAoS7GePaNCFSq1el4O2ohNrPZufHQVNPL%2BM%2BCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMj18QyE3v37BusX7XKtwDK%2FoDcW2av8rAswRUNQ1iZVNOpm9A8IPaqtA1wCMob0WLpXlRoEifZJjrkw8aqhhKdfw9zOeVZA46%2F7%2F7hx5NlMAfwvEovhrrTfvUsxGakMcKQ%2BoEXjdKfyefcQqwBNIaRV3gzHeTgHdtnqCUP%2Fw%2BLJRYS964TpLWkqqSPbhEyCtuAnComlrjFsnjiXYYKJEetoGSbZKT47oCf5f%2BgB3NqfEv96D60pDPQQaj2CrE8H1ZzTkwXCdDm3F8lO065EuNOCPKp4YYrzF7%2F0OlVp1xtrQfTcWYnEbLCZUFQQJ93rMn3x0x5NX%2F33Kkfiec1pXF03xjqTqoK5o3eFk5wuWCeg%2FJLa7nGotH%2Baaz9841oVicoHpKKXWWgYXu6EXtyiHn2%2BM%2BQE6NFOI%2ByOJ4x%2Bnxm1K0GBqSu8taFhpnoC8eJdP2%2BpxAn62n4RZapW2XBBsuwnhqx6gECeEoQoq0%2Fj4cn%2FEtNw5WjFwjtpL%2BlGXeDrsVq5Y7Ymr3ZWFSJ1N%2B95RB3hvC9o7%2BanXMU1a3w34gJp9gRsDDAyY99WF%2Fh04CHoMMuk6Br8tDnsshqlKuzq%2BkWd7T2oImfF8X0S%2FrjZ%2FTBHwIlvVLB1Rgsv%2FVK2Yra6FXj9Nd6x9ZI6c8Urcwh7rRvwY6pgGtjz%2B%2FJQtEFi%2FHpg0uNpI2ILhMIswmmMAQTemVShpByRjkjZ4djMVfPygddnAPG9%2FR%2FWmOYm2KNVlnfcdD%2FK9zO0xrmR3psH6ntCS34G7of3Cy7oSJAwfryLJ4MTe9khvL7CCRqVPEWbITETw3FFe%2FjuzuENCyA1DOeNK4Ogf%2FeTwOy1T6eBB0wZ6F%2BrRgMU1GAEIDNxncmt3k2%2BJ9YoI%2FbByMY4%2Bv&X-Amz-Signature=b3308b952939707a593111cb28f5b0703ba38dfa2cadd7a390e873dec9e1c057&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ID7CDS2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF57lW3lCJtsBDZOwRZFIPnK0pq9JXoF5T4EpXA3KK3eAiEAzhGB5z0E%2BnMMttY9zhNNmfZx%2BH%2B9ThVfwuIUKlz5rWcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDF3m4uHrSj4u5yu3bCrcA4C%2BUZChtSaFE2e%2BIO9ZTDUmik%2FkrU40ry8k5oTW3ncKFhBfgLwK2RJIvMYvQT%2FwXcIQZwupLPTi%2B7e2DTPLbF8c1djXclTYTZgeiMffm1cAj%2FV2dmSMGxrjiulD7Nu8iCc2030%2BRP9vCBbnuJwL%2BEqX58%2Bs%2FDLQW6TLtWNCwzC5ytumJvBrF%2B31tLSN8zmjCAoGd%2B1Nqj73YXg3ESaS16XlDDJcrKX9CDNSZV15Z3BoSE09UcV6Nefo9f9EEOvIbHS6tE8iFS6ixPlys8onqTnrGwN8sJmEYhbFWFfFnI%2FWZNQupU66diXP2xpDfwMFRrg3G0AP6aO3K4iwfbkWLRHvLrYRu4O0UMP3ovVFPCLE1rJCUuOT7dny7S4PZlTp%2FcBYZ0840MXRHPsE4dV1FmLktlUlK1vNy5aUY9AiSq%2BrIkQhpFIm4POiVENANBhC9fDx8n%2BxTlYBSakqdh9mC78V1wNc69bauSystEbHC%2BL2nj%2FlatG8SdJr3qGwYL56xN6ygMeVePDVIez3W5wE%2Bn6qLyzOmoPCDEJ97bBX0v7LRyZ7z9Lw4myjf6X1pJmkFgvLBLhKatOJ003iyEyjekrCbPoCHuRX9Bwnnu%2BilgJ5nruaZ%2B0izE3iyiGGMOS50b8GOqUBOQjpXxnPPaXnzUzrHrG6dJnOsd4kx3Q86rhY%2BjFSzoHkRh9gf008JxF8HZLnAO%2B%2BV4qh9%2BozOgcdbr7ch94I%2BQNhgRWYj0LY%2BLwxML81g3QsLLQ9zkhTBLvsPpLV3JkGM4VF4Cb4SMe3xesuCXGUdc6RWVG26%2BNOrclZFYcEHV4UVWYeGEkcrnFXPPRZHvWazlsfbWOjX%2B9vQAHg%2BPop3PlN4QuX&X-Amz-Signature=17ca1363d599da23ba3a58786c7cbb25848e76c95ce1e30b41176b17752da535&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRC5KPJ3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtywnZXnEDWfY5GrOLc8DGwgkVSAYisFkYm0aNUcMEsAiAEU7asYQN4g00h0VNcvUCuGUO%2BJELbBP0iSu8nL4UYKCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMrOqeH8hpSzn2Nr7yKtwDgCRT944F20yHpPKgNEddpMhTDFEYsIryIkVk87bzgylm4ylb6rz80eKQEBZRYE91e%2BNq%2F3TVKkwocESmLRHnp5UEdRkYJ0xzcUqO9Py%2F46plp%2B22PgYcswDuaJIDQtTGq9DrDcGCFsUd0OVR8Gqmth0G8E6Rn3JfTQAtdP8aqnJQOI6vJYJVW%2Flj57ee5zyptGRAW2%2BBE1dI%2FREtmwFgN%2F%2FUaDbLFbAMqK%2BBjEGUZ1flIPTWh%2BVswexqol3cZSwyyYeC2wCV0wcceIZcygazWgUOjWMB0rK2VcUMLSl9DcVnV3lQUQKbDaNBLl%2B3r3ZY1d32Ttgn79zoUExz%2F8abHy%2FIyp9gShmKHZ902ljaGsJKs80yT53GTlc1t8LwMwg2yOKhqQgSNkFoKloNmdvDspVY3QcOtSrCjK9gVW5l4f8y1mWzU28CCmx%2BDVFLt1VEWk0S9NMghdflGmrxUqHIPafHZA2wNAFSCiBlLyNE9iyJp9kvGjkez7qDiTMrHzFPtVKqGanQf3QyrI9kYdjvQZZ1ZTcQ54WrbRfE2KvSo5ffW1HACXudgVW5u%2FCXjiTL62nFg4z04ujGS9WaFH7F%2BbRw6RxLlBy06p7YhRne1dbzFM0ijPxxMbdCOo0wkLrRvwY6pgFc8uWm9RiWGe01QFnKnrH94vPx6848aIxURc%2FvqHG9YqKxz2%2FNU9h7lGjAoD6kUR0f4vlTBhtAxGUCnLEFcNYJbIPJJBw9VE4Ahw1swjzVs%2FKKkrkTD8MnimelcUTwNsteCySq9l4jRMB2urvrm0X99BSXMB%2BkHvAsYO1TmD2xsRnT7QI8%2FMGtbehsPt7K3vqTLdv8qfA88TP74%2F57807fNFbAsyv2&X-Amz-Signature=b905a18d257d4c197f1a55622ccada123f0939f2861d094fb43e7a39140e86bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
