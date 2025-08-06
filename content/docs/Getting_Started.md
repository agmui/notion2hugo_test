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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQAE4GGG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICkMsyktjgS7nffdZ7P%2BImrXB7eZQv%2BgcVqK7MmZUZT9AiBQhlFYYmfMWKqJHSkU0JlgUzgxxlF0lkxlpIfMYRn0YSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMO7r9rDjWqwBW6rKMKtwDWPdFf%2BczpZbZmQDIdP1PME5b63yxJwxFRei%2Bpa0JF7YQbVG94OJAA%2B3QIjBSC21kGL2KKTabrckQ3kxSxW%2BVTkORdYY71Ewmaz443C8pWyJZD7lNc%2BpVe2i2n%2BhZhlEiAbPxNhq1PN6ADP3LuZ1%2FNzgyn5DJNxn%2FKD9B8L6Q3iykS3Ku51j0xxzLx8udPobxb%2BSj1HmKMHe6rnHy%2FD05me%2FkNGMywVb7pOzCAV3ipj%2BuKVxE%2Ft9pxCRHWyV8YFYidFJcM5hSY%2F576G%2F9xdIfRZimCPvhTI93xno8fnrNZHIVULAUxk36Lij%2Fm94Z7PQDucspYyrrMgq7YEAUea9r%2FTbBwlhm6inNrY%2BSLBHpciyrYX6N8%2FEtc%2BwxBcpeIHAPme3UBBs8O4H6dWerjlG3XdfqGqsDDJQ4rP1a2UvRnSo5%2Br0F%2FVdM4BvIs7ixHrezcgt%2Bcs6MzlPyWaHh7GBa90A1%2BIT5odpLBsyqlJGI2rIVBIcTzs8xHEvr4%2FkGtD5K1poDc5s%2FvwJ0MnF20Ik2Zb9QLPnGgh0nKBpnUZPoshZqkCoX7kyfgXQ8at8Jn7C5ef%2B6XovUhePhQQYrRriVcljiPEk1kiauE4u5qEdM61fkECUtS7%2FzZHVov7QwycvLxAY6pgHI2LjnBvteMOMB6wd8bfvDVQO0VfiGGI6aYgTenlUYVEf%2BYN4C5EQS3wP6JsmYJuJH9JaPuUUyvSeeCE1mDfcXi89r7OsuoAuIDVkzTXC5a%2BkOzo7MWLfe8iCxXS3tLD%2B6d7V71%2F7l2NLyzpHEs9%2FHp9IYlNIZJsbBrBW7zjrvCJqkN7c24hlBYdxT4vIwZnZZJkshfvxktP%2Fl5oAz7zMdWQjCdQpf&X-Amz-Signature=0b4a95e24213d158167950cbf41a401ca6a1bd523deeca4318029a2b769a23fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQAE4GGG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICkMsyktjgS7nffdZ7P%2BImrXB7eZQv%2BgcVqK7MmZUZT9AiBQhlFYYmfMWKqJHSkU0JlgUzgxxlF0lkxlpIfMYRn0YSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMO7r9rDjWqwBW6rKMKtwDWPdFf%2BczpZbZmQDIdP1PME5b63yxJwxFRei%2Bpa0JF7YQbVG94OJAA%2B3QIjBSC21kGL2KKTabrckQ3kxSxW%2BVTkORdYY71Ewmaz443C8pWyJZD7lNc%2BpVe2i2n%2BhZhlEiAbPxNhq1PN6ADP3LuZ1%2FNzgyn5DJNxn%2FKD9B8L6Q3iykS3Ku51j0xxzLx8udPobxb%2BSj1HmKMHe6rnHy%2FD05me%2FkNGMywVb7pOzCAV3ipj%2BuKVxE%2Ft9pxCRHWyV8YFYidFJcM5hSY%2F576G%2F9xdIfRZimCPvhTI93xno8fnrNZHIVULAUxk36Lij%2Fm94Z7PQDucspYyrrMgq7YEAUea9r%2FTbBwlhm6inNrY%2BSLBHpciyrYX6N8%2FEtc%2BwxBcpeIHAPme3UBBs8O4H6dWerjlG3XdfqGqsDDJQ4rP1a2UvRnSo5%2Br0F%2FVdM4BvIs7ixHrezcgt%2Bcs6MzlPyWaHh7GBa90A1%2BIT5odpLBsyqlJGI2rIVBIcTzs8xHEvr4%2FkGtD5K1poDc5s%2FvwJ0MnF20Ik2Zb9QLPnGgh0nKBpnUZPoshZqkCoX7kyfgXQ8at8Jn7C5ef%2B6XovUhePhQQYrRriVcljiPEk1kiauE4u5qEdM61fkECUtS7%2FzZHVov7QwycvLxAY6pgHI2LjnBvteMOMB6wd8bfvDVQO0VfiGGI6aYgTenlUYVEf%2BYN4C5EQS3wP6JsmYJuJH9JaPuUUyvSeeCE1mDfcXi89r7OsuoAuIDVkzTXC5a%2BkOzo7MWLfe8iCxXS3tLD%2B6d7V71%2F7l2NLyzpHEs9%2FHp9IYlNIZJsbBrBW7zjrvCJqkN7c24hlBYdxT4vIwZnZZJkshfvxktP%2Fl5oAz7zMdWQjCdQpf&X-Amz-Signature=f512dd61cdcd7e3d2474af031afb8a4968e50626531f0e0c731d12f167029e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQAE4GGG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICkMsyktjgS7nffdZ7P%2BImrXB7eZQv%2BgcVqK7MmZUZT9AiBQhlFYYmfMWKqJHSkU0JlgUzgxxlF0lkxlpIfMYRn0YSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMO7r9rDjWqwBW6rKMKtwDWPdFf%2BczpZbZmQDIdP1PME5b63yxJwxFRei%2Bpa0JF7YQbVG94OJAA%2B3QIjBSC21kGL2KKTabrckQ3kxSxW%2BVTkORdYY71Ewmaz443C8pWyJZD7lNc%2BpVe2i2n%2BhZhlEiAbPxNhq1PN6ADP3LuZ1%2FNzgyn5DJNxn%2FKD9B8L6Q3iykS3Ku51j0xxzLx8udPobxb%2BSj1HmKMHe6rnHy%2FD05me%2FkNGMywVb7pOzCAV3ipj%2BuKVxE%2Ft9pxCRHWyV8YFYidFJcM5hSY%2F576G%2F9xdIfRZimCPvhTI93xno8fnrNZHIVULAUxk36Lij%2Fm94Z7PQDucspYyrrMgq7YEAUea9r%2FTbBwlhm6inNrY%2BSLBHpciyrYX6N8%2FEtc%2BwxBcpeIHAPme3UBBs8O4H6dWerjlG3XdfqGqsDDJQ4rP1a2UvRnSo5%2Br0F%2FVdM4BvIs7ixHrezcgt%2Bcs6MzlPyWaHh7GBa90A1%2BIT5odpLBsyqlJGI2rIVBIcTzs8xHEvr4%2FkGtD5K1poDc5s%2FvwJ0MnF20Ik2Zb9QLPnGgh0nKBpnUZPoshZqkCoX7kyfgXQ8at8Jn7C5ef%2B6XovUhePhQQYrRriVcljiPEk1kiauE4u5qEdM61fkECUtS7%2FzZHVov7QwycvLxAY6pgHI2LjnBvteMOMB6wd8bfvDVQO0VfiGGI6aYgTenlUYVEf%2BYN4C5EQS3wP6JsmYJuJH9JaPuUUyvSeeCE1mDfcXi89r7OsuoAuIDVkzTXC5a%2BkOzo7MWLfe8iCxXS3tLD%2B6d7V71%2F7l2NLyzpHEs9%2FHp9IYlNIZJsbBrBW7zjrvCJqkN7c24hlBYdxT4vIwZnZZJkshfvxktP%2Fl5oAz7zMdWQjCdQpf&X-Amz-Signature=b33fb272532f03e3832f0ddec1e4e88b4363929247bf86bd2ba7ba87bbdf983b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLGDXJ5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDzt3f4x%2FKDf7tVtGGnw3vU9bej4kU2FPd4OnbicpJ%2FUgIhAKD4zOtOoMD8ovbHk7sqGVV3hH6wTz%2FrxUQZT4Ap4TVNKv8DCG4QABoMNjM3NDIzMTgzODA1IgysMIi3dQ9IbdZbaQcq3AOE0nWP3zdLj4BE0zHnPvL%2Fjz7QgFBj2IYvfzAuQo3SCr%2Bk16eqJkVW%2FyzhW2%2FJsBQgYBd62Nabw7Qi330k89gQys14Id%2FmD9EGjTvgKwBB0vmwhuK6f1oULaPgDLovELG4HwIyDqu5FMOL5HloUgnU1Ekz32YXzFAyWnAyaJotZ9XfLbiGLYpaSLbGdwlnZ9yXD1DipQUqglT5V1rkjNxe2pWhul4EEllvlUQsncYephDr5aEzvdi%2FGzF4Jv9URMq2h%2F5ob4Nhk2tSO%2BEXRP%2F7KHBxPUfuO%2BpsYROA41PbGRvwlMhufFcxu8Tn6OvHrY86ruFJ5Uim1tMHKfmbHx%2FyVhl3K4t87dfey6GBpWDxRkdniH3X%2FAE%2BRAekb4tFbJKpavJ39A7JuaP3iXZIra2jz5w1cTKbmnE9uUCOo36022oXkMzWy02qswSdYxFJpUJd3GCGAHy8vsUYyG2jGWsF8%2FYYBI5MO4w1wDlo9gkFr56PNveihKUhl55MGUlXNadqpP091Jc4bsVmem8b81IJEVbXg7Wyh3uteir4IavfbcNaEqVfN26Fomv7x80SHa5gYBJzu3DDuSG2lSG1sBF7WrowKN0K133Yb8yigpXM6W81Qys2Qez079AL%2FDCny8vEBjqkARdV3BowMZZIqpSY84BLhoKTvsF%2FyEwzQCRKq6DW9LNrMKP5mPw6IfxnZktR5Y4EZcNTt3ZXaAAoqHJdIOLbWO8h7ioJvVIzw7R7PVciaaBpcmEcFk6adiTaNdWkmx2cY9JT65vRzqo0oFgr51z4did55qJCSYTHRxO0fUE4FnasFl3OYsmIimP7xOJmFv8YHpbeZ%2BPttul1lTTRajRdqoO2YJO%2F&X-Amz-Signature=247440b2eb32d60463745c1a5602bc66c50294a98aaa49c4cee9f7c237854183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJ5H3HR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCcXQv3R4ItIU2CdSUd7A7qeCTj05z1FfkOpsx966kesQIhALEHeMhtsnkUnIvu%2FU8AecowVBAsdEQDPUElopOr9lZuKv8DCG4QABoMNjM3NDIzMTgzODA1IgwnviakR93Wmumuod8q3ANBvpoQmP78lE9J2Zl%2BZkZM9sKZkWRo4hxxhEjemYG8szJ2HwO5nYtDEl6UAV7KFAdrwDNe%2FEu0%2Fqb1MkEJnkA0PQx%2BYfYPoKso4zvEGiltfYfZqxOG4R8PoS0VEUtJvJuxBfaOZobijUQXgyoEYQ2NyA498Tr9JLHuj8OnmCz2%2F%2FmqJg7Vs5SbiupWGrvD9MpYI7daHkmYDz8QHDfziMVUEqCivHe7W8%2F2Z665M8Hg%2BdAjt63%2Baonk3j7JIYRBWlDNxrXUYRpw87LRIrR8mIk4pQkJygujtV4z5lmLP9PXC6THo00nQOW%2FaOZvELrR0%2FenaLdxkquzKlMw42Y65x2HsKU1qIBeXwlaXFQzQ4YHsLN0ELABEWccK5hmVR%2FgOANguZ6YkNVy9ttpziZlJO9MAVJKGz%2BJQ5jwnNvyEhPbGWnziTcwouuTVlTSqyGeecKAuDsQtIJ%2BE6BcanE3GHCyYdL68lOqgkRyW%2FfQOSaT8dEmSOjctiwEu%2FUoaW03R6Sj%2Bf24vtXKxemC3x%2F5%2FvaCD0ehBCPTEQKQRofTeTNfaNZc440iwccO7%2B%2BwsvDlElU2b0jW4mE5RvyBl%2BLvSMWijYP%2F8U55vs55r9j1j8avfwMSN0Q%2BuRFZYnmCVjCfy8vEBjqkAW3NA5Fs12f%2FO86X%2Bgso72QDPlpK1fxWey3BjcA4kzFY5HSU6i8CDtwaEoaXwd%2FNlRIaGMOTMMuCg8BTiqIWQbu0fbM0tEWueAfzohHMAChpEwzflhdTRVislGiOJhAFbX8i6BlvQdRMLwC8vRlElDhv4czCuT0bANoBd2K%2F9Gtix40EaxaExtBCU9o1O%2BSdKkNiUgfyu8GMTwWXa%2B%2FlnLtx%2BePc&X-Amz-Signature=a780950780a3e05f1b240bf7cb329dc5d7bb5ae1f6a808391bbffe7bf558ee8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQAE4GGG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCICkMsyktjgS7nffdZ7P%2BImrXB7eZQv%2BgcVqK7MmZUZT9AiBQhlFYYmfMWKqJHSkU0JlgUzgxxlF0lkxlpIfMYRn0YSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMO7r9rDjWqwBW6rKMKtwDWPdFf%2BczpZbZmQDIdP1PME5b63yxJwxFRei%2Bpa0JF7YQbVG94OJAA%2B3QIjBSC21kGL2KKTabrckQ3kxSxW%2BVTkORdYY71Ewmaz443C8pWyJZD7lNc%2BpVe2i2n%2BhZhlEiAbPxNhq1PN6ADP3LuZ1%2FNzgyn5DJNxn%2FKD9B8L6Q3iykS3Ku51j0xxzLx8udPobxb%2BSj1HmKMHe6rnHy%2FD05me%2FkNGMywVb7pOzCAV3ipj%2BuKVxE%2Ft9pxCRHWyV8YFYidFJcM5hSY%2F576G%2F9xdIfRZimCPvhTI93xno8fnrNZHIVULAUxk36Lij%2Fm94Z7PQDucspYyrrMgq7YEAUea9r%2FTbBwlhm6inNrY%2BSLBHpciyrYX6N8%2FEtc%2BwxBcpeIHAPme3UBBs8O4H6dWerjlG3XdfqGqsDDJQ4rP1a2UvRnSo5%2Br0F%2FVdM4BvIs7ixHrezcgt%2Bcs6MzlPyWaHh7GBa90A1%2BIT5odpLBsyqlJGI2rIVBIcTzs8xHEvr4%2FkGtD5K1poDc5s%2FvwJ0MnF20Ik2Zb9QLPnGgh0nKBpnUZPoshZqkCoX7kyfgXQ8at8Jn7C5ef%2B6XovUhePhQQYrRriVcljiPEk1kiauE4u5qEdM61fkECUtS7%2FzZHVov7QwycvLxAY6pgHI2LjnBvteMOMB6wd8bfvDVQO0VfiGGI6aYgTenlUYVEf%2BYN4C5EQS3wP6JsmYJuJH9JaPuUUyvSeeCE1mDfcXi89r7OsuoAuIDVkzTXC5a%2BkOzo7MWLfe8iCxXS3tLD%2B6d7V71%2F7l2NLyzpHEs9%2FHp9IYlNIZJsbBrBW7zjrvCJqkN7c24hlBYdxT4vIwZnZZJkshfvxktP%2Fl5oAz7zMdWQjCdQpf&X-Amz-Signature=f6b21860f1ecb6a229b475282a32bc1699a32de51f37bf46be06aba630ea5850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
