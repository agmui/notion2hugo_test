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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQB3X2RR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC1AoK6D3zGwmR%2FCwbOKvL7TnxKdxdwLKLoif6EtVmkyAIhAPq7sDwIuTx459wSD6ioFYdiTUu%2BCd9veurI%2BsoGxPwjKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxujyZVUv%2BtYXREyYEq3AN4VJ6WHM4KwlxcIGTK7RstXl3MRcw2QGsNA3jzmvz3Quoq3DqfwR3DVPFt7kkWurqSjqQdXuHfX%2BbXpNNKhRiOKn%2FCrbQgjUYSSVwWtW6evh6ElySVYMkAJ%2F8AX3sCwRbrPhR70dYnXH38hXRVRVe%2FXgOlxtF7t0gOe5z7AntqbI2JpraJcz2JCGiXgplvQ%2BSOhPjUeeYRHN9X3qCg%2Bjz0Rb0ePQxVfAqoq5aGoWyaMvOQ%2FLEGc0KJqUddQ4L%2FYQkobX4SHVA%2Fn0094Rd2Qe%2BMsAeajJa%2Bj9PXqhLOBy%2F%2FiDG8Rp94afTFPa1xVuplhBMzraEvpuUL9b2wNN9sslpRKxdjFNELo0qDFwn0G%2FaRxYoFZRAyCQL5SeB8gDCzYtJxDtrrILrmPcpyWjXRjUdT%2F%2FBUgGX6ShqoSmS6rWNIO3%2FBtx1%2Fqv0d%2F7mgPJyMSNta%2Fa9jz0DE6WQ3cs0x86SPNf7d4Bh3qrA5kLsGBoTN5SxeiD8OVowC018ppm5iZK%2Bcf28kw6fu7c1aBJrv%2FgZsS2QH8G9PzwrgYhKDgGIap5OBs9GwBz%2FTy17Iao6nM0F4wNIIgaeeKFdOJMhMyBbUmCMtLqd9%2FBKRtXbciRz%2FWgmz9r9Y4b6bFup%2F4zDTrqi%2FBjqkAVMk06XJ%2F8NaN4xOye2SUgISwT2etBueIPIkeLHDmDHy9RzJ%2Bxduffhz9M9aFvZF3bUO1S0er6SrDii1rNeEqPH%2BZ0xB9YReqmSIPhsHZqIhfBYK63vFscv4V1Cdm%2FyjgksPYILa%2Frzcb6F0RYms%2FQV567VRjIqKqc5STIpY4aBBCKJv91TiwbJ64k1AZSHMW%2BXy1lIlK4zVZOZJOWCyh02MPm45&X-Amz-Signature=2052d931bf85ffe9e1b1f8b0a4a2d924489ee3a563a63957526effa7606f92f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQB3X2RR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC1AoK6D3zGwmR%2FCwbOKvL7TnxKdxdwLKLoif6EtVmkyAIhAPq7sDwIuTx459wSD6ioFYdiTUu%2BCd9veurI%2BsoGxPwjKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxujyZVUv%2BtYXREyYEq3AN4VJ6WHM4KwlxcIGTK7RstXl3MRcw2QGsNA3jzmvz3Quoq3DqfwR3DVPFt7kkWurqSjqQdXuHfX%2BbXpNNKhRiOKn%2FCrbQgjUYSSVwWtW6evh6ElySVYMkAJ%2F8AX3sCwRbrPhR70dYnXH38hXRVRVe%2FXgOlxtF7t0gOe5z7AntqbI2JpraJcz2JCGiXgplvQ%2BSOhPjUeeYRHN9X3qCg%2Bjz0Rb0ePQxVfAqoq5aGoWyaMvOQ%2FLEGc0KJqUddQ4L%2FYQkobX4SHVA%2Fn0094Rd2Qe%2BMsAeajJa%2Bj9PXqhLOBy%2F%2FiDG8Rp94afTFPa1xVuplhBMzraEvpuUL9b2wNN9sslpRKxdjFNELo0qDFwn0G%2FaRxYoFZRAyCQL5SeB8gDCzYtJxDtrrILrmPcpyWjXRjUdT%2F%2FBUgGX6ShqoSmS6rWNIO3%2FBtx1%2Fqv0d%2F7mgPJyMSNta%2Fa9jz0DE6WQ3cs0x86SPNf7d4Bh3qrA5kLsGBoTN5SxeiD8OVowC018ppm5iZK%2Bcf28kw6fu7c1aBJrv%2FgZsS2QH8G9PzwrgYhKDgGIap5OBs9GwBz%2FTy17Iao6nM0F4wNIIgaeeKFdOJMhMyBbUmCMtLqd9%2FBKRtXbciRz%2FWgmz9r9Y4b6bFup%2F4zDTrqi%2FBjqkAVMk06XJ%2F8NaN4xOye2SUgISwT2etBueIPIkeLHDmDHy9RzJ%2Bxduffhz9M9aFvZF3bUO1S0er6SrDii1rNeEqPH%2BZ0xB9YReqmSIPhsHZqIhfBYK63vFscv4V1Cdm%2FyjgksPYILa%2Frzcb6F0RYms%2FQV567VRjIqKqc5STIpY4aBBCKJv91TiwbJ64k1AZSHMW%2BXy1lIlK4zVZOZJOWCyh02MPm45&X-Amz-Signature=82eb1f6c4fb71a1dd4fbae87ddfe42e0ed90bf9e31adbca54c1594565f29eb2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MMMWBPD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDPmQqt2fi7NJiEAfbqlxs7yPOxNL2e%2FpG9ocK0OBZYrAiBd2ZhHAOSCe3%2FhY3iTR3g%2F8iLChpdWw9PBn1tThGWpjSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCw8%2BD%2F66hoi%2Bx2HIKtwD9b22ozH15%2F59vfs1zS68XTfhGnLzyuKTLYKJtgm29InumpklF%2BozvzcqwuT3OaoMn4BFTGjAuJ2mQuR8sK9%2B5iTWTNf%2BVF7Z439Vbu%2FS4Fjl8O0DungD1gppWWBJzbe0T13tpvUGEuDuWcrgDWf02LqjVftlEjedDKKFkJyR18VBRo6KQTGs9F3KkpYKzLWm4nZv7WQriSLLnWvvEz7x8PHk0rh1r8YFbZ5zAVohk0VtER7Vme1jc%2BAtCiX%2FnIMVqrixxGFbbbwzg%2BI6qTA7ku5uR0hLhl75jcVvL39O4fzAhYyM2lkXnGXw9EoF2XwAEMYV2EkObAQL4CwQDk7JDa7U3mTNV3y4WGBxs1h3q%2Fx6toR7yxGWafzpXSWhuwEFCfZdwTONSHb6mpFNosVF30shTD8AW7zCENboFmenmLH%2Bory7ug0BVUkSDmz%2BgOXNyYxelE8eTe8QLwLRFxExoTEqpgUYzwkL%2BoS1YC61nySZUYIFpdpCDkQIgVuQC%2B2w0fEM9gbfWXZkXsTlNnEvYZHOJlEOhI4LbAze6dy34lzo42iTeBi8bWbG2%2BPRRQvSFGmXddWFPxUekw6qdf4cIH9QHufBMGDSu9flAvwyNyNGpTpLjJ2efs%2FqaUEw6a%2BovwY6pgGfyeIoQbs4iAB4aU7pJfJge9VHxHSmU0kRJdYkNZU0onumR0R%2BrB0EuUbnasa5vvHHwwpkn3qukYvfdzymvEFMwAVfs9DxHgdv6Xy%2BCSN1ctOJxCKTyV%2B7f4EphQSxnV%2F%2BDKIa9ZNY3nhvPa6lTFPBzuGfhzJkVaB2mi%2BBPRD%2BZMzh7QDBWi%2BASZ6Vibr9ZITRdHbOLW%2BKeoLURtqRdRsc%2BxkawMRI&X-Amz-Signature=e8677e3dd9830004d7dc06791a21c01c6c29a019b9103f0905c073db56c38ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNGGHWHQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIF%2Bclv%2FwoP8NJPzSky2lbfi7m8hyEVGMkmTochFPWPG4AiEA224UkJqTppW035lHbBss3mQnFg3pqqv1b8NwMzIbYMgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLNtxxFE5jtLx6AGCrcA4FtjbNuaZS3rKD4OGqAkpy0qWH%2FLz8wRp2kC3tVTvSJ1nvTlVzv9cHoO%2BUWrX7jaM7EVPqRdFjQ9m4qa6Re6SfOJHLrv1RdxHXTMwx%2BYsfeD%2FnnTEfsy8HjWqRe7s3UmL6f64U9kR8KcrkRz4ZZC1C3OEZxxEltFHG74zkRt6HU7xM55i5YUCvnbW1quo3UnRQlJu7aM%2BpqxSVFpyyrDgo70yyiymhzzI%2BpehL6ZveILc49FPhYOdk2kfuC0xkPvbYNAunRrOMBkcTq6bZtYn6CV%2FUsjSfITlg6JFHjmbdz3UaAuIBDJ3rW5vBVEeuQFGOrXi%2B9tka15ZVmNkEgjQbb3q56V3qp5vScqaxM6kQuwDEw6epAYrfMNXOcy45dv5AzmbcUSdemxey4KZOdXV0UF4mUuleO0LbgzS5YyQHNS%2BAmFcTC3FG8FUkJDlN%2BWOUKlNKHj9X774jjH7xciPv%2BcQt%2BNEQEiV7ODMWq9Ousbtvw6S1kOViWZ9TjwyxwTR9J%2BfdaKhj%2BA9T7L%2BFAr0z2ghYU6UVUjvhLznuchSKLHwUFslLtQlAFlG%2B3xqz8OIgddneOp8Sx3oOsR6ietVy%2FGcvkftBTGA8D0GUlASyNK017wGeWRo471f2hMJevqL8GOqUBEo%2BSCBgUtQlzM48uh6kw2GGdmREknB%2Bea3l%2Bzwnwrtnn6e9Y2QNi2WvJu0bA2HhMEmMWGnfPa0H%2Bo%2BCxkbDqjdHKlhwEjsFWiTTEiauHJBsgGpXbXR4xPv8UxIav8UwRpQ57F30SXUfb7Ciw%2BPZyGiemL5AEMXE6dZNSnRexDY70PnOJVfZk0hzI%2FuYjwoTOg5x%2Fo4si8UK4aS3AvWkVjk3f2BNH&X-Amz-Signature=5dbbe26863bde241e5340c1a1bd544a90500006a6c16d2752dce9e2420b04cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQB3X2RR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC1AoK6D3zGwmR%2FCwbOKvL7TnxKdxdwLKLoif6EtVmkyAIhAPq7sDwIuTx459wSD6ioFYdiTUu%2BCd9veurI%2BsoGxPwjKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxujyZVUv%2BtYXREyYEq3AN4VJ6WHM4KwlxcIGTK7RstXl3MRcw2QGsNA3jzmvz3Quoq3DqfwR3DVPFt7kkWurqSjqQdXuHfX%2BbXpNNKhRiOKn%2FCrbQgjUYSSVwWtW6evh6ElySVYMkAJ%2F8AX3sCwRbrPhR70dYnXH38hXRVRVe%2FXgOlxtF7t0gOe5z7AntqbI2JpraJcz2JCGiXgplvQ%2BSOhPjUeeYRHN9X3qCg%2Bjz0Rb0ePQxVfAqoq5aGoWyaMvOQ%2FLEGc0KJqUddQ4L%2FYQkobX4SHVA%2Fn0094Rd2Qe%2BMsAeajJa%2Bj9PXqhLOBy%2F%2FiDG8Rp94afTFPa1xVuplhBMzraEvpuUL9b2wNN9sslpRKxdjFNELo0qDFwn0G%2FaRxYoFZRAyCQL5SeB8gDCzYtJxDtrrILrmPcpyWjXRjUdT%2F%2FBUgGX6ShqoSmS6rWNIO3%2FBtx1%2Fqv0d%2F7mgPJyMSNta%2Fa9jz0DE6WQ3cs0x86SPNf7d4Bh3qrA5kLsGBoTN5SxeiD8OVowC018ppm5iZK%2Bcf28kw6fu7c1aBJrv%2FgZsS2QH8G9PzwrgYhKDgGIap5OBs9GwBz%2FTy17Iao6nM0F4wNIIgaeeKFdOJMhMyBbUmCMtLqd9%2FBKRtXbciRz%2FWgmz9r9Y4b6bFup%2F4zDTrqi%2FBjqkAVMk06XJ%2F8NaN4xOye2SUgISwT2etBueIPIkeLHDmDHy9RzJ%2Bxduffhz9M9aFvZF3bUO1S0er6SrDii1rNeEqPH%2BZ0xB9YReqmSIPhsHZqIhfBYK63vFscv4V1Cdm%2FyjgksPYILa%2Frzcb6F0RYms%2FQV567VRjIqKqc5STIpY4aBBCKJv91TiwbJ64k1AZSHMW%2BXy1lIlK4zVZOZJOWCyh02MPm45&X-Amz-Signature=72368f3928fa3e53a92fc07b8a904f49355dfdb819ba02d63f11d098d7ee071e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
