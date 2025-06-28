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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JG3LVXE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM9xxVXqd99PpC9l6nSLxAJkrZxVDPpCJ08q8%2BG3B9NgIhAOCuU5XnLZt2NX%2FOIm39q8C6aGN8OYXgG88L%2B%2FVgmO30KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZHCUBHpQ1ZVMZ7zsq3APOJRf4vIwr9OgwoUQe65c%2FOTBY5qiYUkyA%2FdKmRubOPd1n20zYcw0X%2BKMxBTdHbucROtbDwLQoBtGBkOlhiY0DpsKmOC7dwX4%2FJGovQJ4hhQ%2B7a847%2FQl5xcM7pU%2BXmFCR2JPomRnfbxBwcF%2FzCf3T63l9fL%2B05kNGKJ2qqeWo5wgLERxep3N%2BNi6xos0Z4k4zlkK9bvKtEatvZ5Mmrq3lP59rnGoBZCi%2FvT0ngXdwe%2BxFuwnHcYUic1vpAYffrRJtVaHy5Iq1zQTg7NpVAfS%2BkOEqd2PwHHUTSj6Tpqmzm8xx2Bs9Z3CP8xwZW86P6r2Ts%2FNTveeRnS1%2FG1v7juFfj9XV6UayOimLPFv23UaFdq5z%2BUH%2BTdjeCmIV%2FgLvRk46qIZtDkrayOZjyav5GOD2P6z%2F9Hawo8wfsU5uPN3XDcGqoGlgfaG%2BRZxYhqCI7Cf4TaJpQPxnFuN4nQe77O74PQk6MRDprQrjCJV%2Firt4VUKxAiEldR7%2BrPRikpHwsletWnTOrosP2U%2BVLfI1wKXnxZPebQvyHbAXy8Ck647NOLa7HJFd0QvorZV%2BLSGyHnCCrMW0kIEJICOn23I2QMSHKy%2B7cDzCBv2kPjh5hawHNsliSql7eqaKd3HqPDDhoP7CBjqkAWpve%2Fqa9FXDwGfYCbhqep2EA7Hgx33tR66jcqYKM8w8jewvfhfk0QS0JxLLA9Wfx7VWp7K09Cax5b0XukDRENQnbQMA6K1VPvSbJOoXXQEk1j%2FuMxL%2B2m5ucnH9d8D3QuLBYvw%2B%2BiSjpxtEUnapmeKAWYD53QOHoZcE2LvssKx7e5qoqlhvriDsRxv7prS7Pbo6D7uelfb4ip%2B7pUx7XVJiScCY&X-Amz-Signature=dd36788ae7e45f78e44c01af7b5d9527f5dc25cd57029dac0f464ccdc94df88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JG3LVXE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM9xxVXqd99PpC9l6nSLxAJkrZxVDPpCJ08q8%2BG3B9NgIhAOCuU5XnLZt2NX%2FOIm39q8C6aGN8OYXgG88L%2B%2FVgmO30KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZHCUBHpQ1ZVMZ7zsq3APOJRf4vIwr9OgwoUQe65c%2FOTBY5qiYUkyA%2FdKmRubOPd1n20zYcw0X%2BKMxBTdHbucROtbDwLQoBtGBkOlhiY0DpsKmOC7dwX4%2FJGovQJ4hhQ%2B7a847%2FQl5xcM7pU%2BXmFCR2JPomRnfbxBwcF%2FzCf3T63l9fL%2B05kNGKJ2qqeWo5wgLERxep3N%2BNi6xos0Z4k4zlkK9bvKtEatvZ5Mmrq3lP59rnGoBZCi%2FvT0ngXdwe%2BxFuwnHcYUic1vpAYffrRJtVaHy5Iq1zQTg7NpVAfS%2BkOEqd2PwHHUTSj6Tpqmzm8xx2Bs9Z3CP8xwZW86P6r2Ts%2FNTveeRnS1%2FG1v7juFfj9XV6UayOimLPFv23UaFdq5z%2BUH%2BTdjeCmIV%2FgLvRk46qIZtDkrayOZjyav5GOD2P6z%2F9Hawo8wfsU5uPN3XDcGqoGlgfaG%2BRZxYhqCI7Cf4TaJpQPxnFuN4nQe77O74PQk6MRDprQrjCJV%2Firt4VUKxAiEldR7%2BrPRikpHwsletWnTOrosP2U%2BVLfI1wKXnxZPebQvyHbAXy8Ck647NOLa7HJFd0QvorZV%2BLSGyHnCCrMW0kIEJICOn23I2QMSHKy%2B7cDzCBv2kPjh5hawHNsliSql7eqaKd3HqPDDhoP7CBjqkAWpve%2Fqa9FXDwGfYCbhqep2EA7Hgx33tR66jcqYKM8w8jewvfhfk0QS0JxLLA9Wfx7VWp7K09Cax5b0XukDRENQnbQMA6K1VPvSbJOoXXQEk1j%2FuMxL%2B2m5ucnH9d8D3QuLBYvw%2B%2BiSjpxtEUnapmeKAWYD53QOHoZcE2LvssKx7e5qoqlhvriDsRxv7prS7Pbo6D7uelfb4ip%2B7pUx7XVJiScCY&X-Amz-Signature=5dcfe79d7fb5a7dd1ce12562795eb84eb3942babcc7a1074db6f0c6af60e848a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JG3LVXE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM9xxVXqd99PpC9l6nSLxAJkrZxVDPpCJ08q8%2BG3B9NgIhAOCuU5XnLZt2NX%2FOIm39q8C6aGN8OYXgG88L%2B%2FVgmO30KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZHCUBHpQ1ZVMZ7zsq3APOJRf4vIwr9OgwoUQe65c%2FOTBY5qiYUkyA%2FdKmRubOPd1n20zYcw0X%2BKMxBTdHbucROtbDwLQoBtGBkOlhiY0DpsKmOC7dwX4%2FJGovQJ4hhQ%2B7a847%2FQl5xcM7pU%2BXmFCR2JPomRnfbxBwcF%2FzCf3T63l9fL%2B05kNGKJ2qqeWo5wgLERxep3N%2BNi6xos0Z4k4zlkK9bvKtEatvZ5Mmrq3lP59rnGoBZCi%2FvT0ngXdwe%2BxFuwnHcYUic1vpAYffrRJtVaHy5Iq1zQTg7NpVAfS%2BkOEqd2PwHHUTSj6Tpqmzm8xx2Bs9Z3CP8xwZW86P6r2Ts%2FNTveeRnS1%2FG1v7juFfj9XV6UayOimLPFv23UaFdq5z%2BUH%2BTdjeCmIV%2FgLvRk46qIZtDkrayOZjyav5GOD2P6z%2F9Hawo8wfsU5uPN3XDcGqoGlgfaG%2BRZxYhqCI7Cf4TaJpQPxnFuN4nQe77O74PQk6MRDprQrjCJV%2Firt4VUKxAiEldR7%2BrPRikpHwsletWnTOrosP2U%2BVLfI1wKXnxZPebQvyHbAXy8Ck647NOLa7HJFd0QvorZV%2BLSGyHnCCrMW0kIEJICOn23I2QMSHKy%2B7cDzCBv2kPjh5hawHNsliSql7eqaKd3HqPDDhoP7CBjqkAWpve%2Fqa9FXDwGfYCbhqep2EA7Hgx33tR66jcqYKM8w8jewvfhfk0QS0JxLLA9Wfx7VWp7K09Cax5b0XukDRENQnbQMA6K1VPvSbJOoXXQEk1j%2FuMxL%2B2m5ucnH9d8D3QuLBYvw%2B%2BiSjpxtEUnapmeKAWYD53QOHoZcE2LvssKx7e5qoqlhvriDsRxv7prS7Pbo6D7uelfb4ip%2B7pUx7XVJiScCY&X-Amz-Signature=a5ffb96e784892c06d72fb92decbb97fee5f27ee7d5493d87e5beaeb1b0a0a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V6PTIA7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw38GAWwNwy5Dar%2BnDMXBTOFg52TYONyPNzb5c0HYf4gIgUgvmIt3uxUO1Oq6jL3p52BNhvkg0%2BxUP3RmTVf9n7XoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSs7r6buL7Y1EbU%2BircAxWMcEElnsErs26zTsDWOQR1sT37OX9fiTX9nxkFpGFZkNMeKTz3KsK%2BI9bJhg6YfapzwJd1kkxa1accyWjRUAwdL8iDuQmZ48cNM8ClmnhW2Qylwee2Exm3%2BaY7pfLPMhuftpHFXv16v13dyjALZWxiqaHx%2B3IjFVH0l9zXc%2FRhs9%2Fv4iccFcNng00fcFDRXa2Ev3VAYQ6AYTQv75mofFU3B5slDKlWULcUCPYRVkGOhtgUOgyahmglLntHhgSLKk9pGvdMq8LBH%2FnPtax0rZvkaAwdErR3MbysI37BaS%2FGfO0W43DIDDaFIwcVPNakUVDaj1W%2BodvcfvtJ6OhvM8sxpQRACqC0Md5df2OzEpLtb9gz%2Bk5knXDtPK5oZb0violfp4tL4WHAa2cOGlnIHrDpsmKo%2BOqzKgEFcQtc942wgTuG%2Fu5X50K2ydsw%2BTIqSAt%2BSS0zFyBcqZnB7vwHrzdhco1IG2%2BbaD4%2FltbxwFUZB53%2FFVSv30N%2F%2FkJXIJKO8xAvy0hnSp3sp9BOHHgOarMU6dWE8Q6TgwtGuRH3d3GAe0Vvx97Kz9m0y9Hql7s85KgQR74Bvs%2BGID%2F4smiWt5e5Kn4Nbc8g5yXqLUJTnKTsF1vNijCsdmDpMkPGMPKg%2FsIGOqUBurKnvEmuqcXrb8uiIYe9IsbqT%2F1%2FdMpXasfrlJ%2BWnqw5yzQ8%2BeX4S9C0sb0JptbUmVYG6TAIjU%2Fn%2BO%2FUWCNuqazP7Wv9MUHS4BjKfFEo4ZvbgSgNiBOk58p6gZY%2FaY5NNdXDrF5PStkACjYdie4sjnue7arAMnW1Ll0dXCSP8VzhZC5UF007rTy6hJKt%2FL8Xw4CwuQU1w4TMiDqaLPkF8G2Jsh0Y&X-Amz-Signature=4370c9f4cd50e545a242929b5fb491bbe2789cc36fd6f0b40b836ae1abde2449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VFJNOAK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeYsrGDmMrT9dW%2BinqniJAKunNQT4oNI5nYrbADYxHuAiAHk0ZjQ1fVKbhI2vi3AATJurLLBdT8f78xG7shTd2OLCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGJ%2BhgXgunB1vJmZKtwDyHkyDK4s7JUmn5PMeSlKxk7%2B%2BgQ9CBlhVAX592EFK%2FDbfjQsIjQ8ORZilkRoljXRR%2FHdBLBYNPG8hkwlUsjdKgF3CDvqOBl92R%2FZBrPpe3WyxZLopv2ps7E5JElZ251QS6tymktyp5DihTCV9BhCw9TgPigKDWsotLcJ4mjiwhocDnifj9EXDm1ap%2Bqkp7F%2B6L5te%2BvIvjCjbyB9Hyw8MFetjaAbYL3niMnIdKkltsPzYMU%2FxKTgd4alZumECIvucRPsOqSPNm1elIGYI8%2F4HQkoHWER2lCBPs%2Brljkyr6OFeBJUxjjjblVW7aXD8ksXDrI%2BIbOqlOlMT2CiDXi8y1wFgTC3IHWAZ9t4zm1kXiI2ddMw9i5dAHCWxLvztvPPif7CyutoH3KRbWgxz6yqx2YBDTSuq6t22%2F67BOZ1btAaxwZXHMgwuiBBB6RtEquXLwYwB1Ktc4iwXcY7d4JMKK3%2BD6uce47WvCW%2BeQ8%2BeW9z42hcgHYb6CVN%2BdCDipz%2BsO%2FWkPaN%2BHhSdwdU9hhITuunG9EL0hIhzullmvElysIVCYHoNbtXyOtFkmYmPbGwvK2j7sdNWfqkFJonH3zIlz%2BALOy%2Bjt5fsRH%2FY6NcRiV8z4yZVh3C7vr4dsYwyaD%2BwgY6pgGEdx3X1OcEWed0oRgqKBeZBxuFg0zwgyZ0hWv1j8Cq4738So%2BGBIQINESVMD5b8pOPfcqDBYUE0i1bAVCO9M9xQAdxeoVbz950HEt3frLFwCGFVxw5HJoACaWs34GvYc%2Fka%2F5x0%2FFi9fLfoYPFQRlsP0AlEYfKjGwq2k0%2BxVrW307IgL6fKMcK8UDNZvk5aaI1OK3K0JQWBqK4RWzAd0%2B5wL5fk0Rh&X-Amz-Signature=24ec5fc138a37c4ce4f2b8b2fa8e2f998809d12b0d766ad412a384c6a6f5f1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JG3LVXE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM9xxVXqd99PpC9l6nSLxAJkrZxVDPpCJ08q8%2BG3B9NgIhAOCuU5XnLZt2NX%2FOIm39q8C6aGN8OYXgG88L%2B%2FVgmO30KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZHCUBHpQ1ZVMZ7zsq3APOJRf4vIwr9OgwoUQe65c%2FOTBY5qiYUkyA%2FdKmRubOPd1n20zYcw0X%2BKMxBTdHbucROtbDwLQoBtGBkOlhiY0DpsKmOC7dwX4%2FJGovQJ4hhQ%2B7a847%2FQl5xcM7pU%2BXmFCR2JPomRnfbxBwcF%2FzCf3T63l9fL%2B05kNGKJ2qqeWo5wgLERxep3N%2BNi6xos0Z4k4zlkK9bvKtEatvZ5Mmrq3lP59rnGoBZCi%2FvT0ngXdwe%2BxFuwnHcYUic1vpAYffrRJtVaHy5Iq1zQTg7NpVAfS%2BkOEqd2PwHHUTSj6Tpqmzm8xx2Bs9Z3CP8xwZW86P6r2Ts%2FNTveeRnS1%2FG1v7juFfj9XV6UayOimLPFv23UaFdq5z%2BUH%2BTdjeCmIV%2FgLvRk46qIZtDkrayOZjyav5GOD2P6z%2F9Hawo8wfsU5uPN3XDcGqoGlgfaG%2BRZxYhqCI7Cf4TaJpQPxnFuN4nQe77O74PQk6MRDprQrjCJV%2Firt4VUKxAiEldR7%2BrPRikpHwsletWnTOrosP2U%2BVLfI1wKXnxZPebQvyHbAXy8Ck647NOLa7HJFd0QvorZV%2BLSGyHnCCrMW0kIEJICOn23I2QMSHKy%2B7cDzCBv2kPjh5hawHNsliSql7eqaKd3HqPDDhoP7CBjqkAWpve%2Fqa9FXDwGfYCbhqep2EA7Hgx33tR66jcqYKM8w8jewvfhfk0QS0JxLLA9Wfx7VWp7K09Cax5b0XukDRENQnbQMA6K1VPvSbJOoXXQEk1j%2FuMxL%2B2m5ucnH9d8D3QuLBYvw%2B%2BiSjpxtEUnapmeKAWYD53QOHoZcE2LvssKx7e5qoqlhvriDsRxv7prS7Pbo6D7uelfb4ip%2B7pUx7XVJiScCY&X-Amz-Signature=c7febc062fa2ef0189a68e25ae926d8b515f65e9258d7de1465c87b5b5e09ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
