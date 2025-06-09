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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFYLBWI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD24TLpHKQfQgMyfDTOpzE6da3YBdRAr8wTpBEaSA6xdgIhAOY6yULjsHKxUKx%2F%2FVmkbLOdJSFLbWn3x%2F1oC%2FA%2BxQIJKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAmfZcd8pxs%2Fm8aXsq3APKTkIYCU%2FTosLpEN677dMY8tyvhMT6ayOGW9QRrEJCzmPvhHgsA54M7AqUYLjE5eeqiv%2BWEvHD07g1vTToeTAQFbUUOIixgcVY%2FL99kkFEVJB%2FHQTsi2A8fTKFDaqk82sUo8kb3UDjtSAQSxdj7n%2FwU0gwsu4qOsnihsB7O3OZXKmWgddwA%2Fbivq23SQLd6yIcyd4VAJrJ0zBmIWzrL2NLy4016dUZRpiSMx4j%2FT6RIAh47gBS0Z%2Fofl6GFOL6%2ByE%2FlQ6XuD200j%2Fjk2PnbUtQIidpmg1%2F2mhstD%2BegVovFchplydjhm7qsTq%2BhOHT2IXGU%2BAhGtdBO%2B%2FHWwYmWHCqo%2FYiIUD%2F5fgjTV7G98VSGGiTUVJIobrJqqKvVxo%2FCcwGGgWxoun7Nwg87hzzVhWcnNKX3FXK5RRUI99HraAEUzuzk%2FopuOP2Ls9YCYoMYzVE7n0THWZAHSd3J%2B5dyCKfKKWGuG%2Bx11nMI6SEyw5tQmyZ3iWL5ibM9acuHmBev9ZvwCuQ3wRBwugd75E9M5lFocX4aIggDdhg6pCzoTTCg3TbGsG34shdOIQjCWaLrqv8ClE4NcPQlUiniIle2f3%2FmGk2HPyLgKLqBv9tRR5YuJFgWdzIgjI0uVs0TjDSx53CBjqkATj0l2PYd%2BkHM4XQGPlpbPUaZTVYBA9GUKz4dMnPF7HGdaJIkIm2M%2BJpTYgLOsDdziybIEh%2BhwT7RgoPHyJyI5yKO40nIxtH1IwB8iGHg3ZWnOMiCEqwBbhQal7UrRTWsPGSpxxN3%2F8%2FQJ0oc2wmBBTEpAPgzYxeg7DxP0Y3dQLCMrGBxkpVNgtOFBBQmmhpaMU%2BS7udaqjfplSkKBjAR%2FgSdMAx&X-Amz-Signature=5fe8490aec080ce9cf78856bcb123c4ff9da49ea695409de3430d1c4daf18ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFYLBWI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD24TLpHKQfQgMyfDTOpzE6da3YBdRAr8wTpBEaSA6xdgIhAOY6yULjsHKxUKx%2F%2FVmkbLOdJSFLbWn3x%2F1oC%2FA%2BxQIJKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAmfZcd8pxs%2Fm8aXsq3APKTkIYCU%2FTosLpEN677dMY8tyvhMT6ayOGW9QRrEJCzmPvhHgsA54M7AqUYLjE5eeqiv%2BWEvHD07g1vTToeTAQFbUUOIixgcVY%2FL99kkFEVJB%2FHQTsi2A8fTKFDaqk82sUo8kb3UDjtSAQSxdj7n%2FwU0gwsu4qOsnihsB7O3OZXKmWgddwA%2Fbivq23SQLd6yIcyd4VAJrJ0zBmIWzrL2NLy4016dUZRpiSMx4j%2FT6RIAh47gBS0Z%2Fofl6GFOL6%2ByE%2FlQ6XuD200j%2Fjk2PnbUtQIidpmg1%2F2mhstD%2BegVovFchplydjhm7qsTq%2BhOHT2IXGU%2BAhGtdBO%2B%2FHWwYmWHCqo%2FYiIUD%2F5fgjTV7G98VSGGiTUVJIobrJqqKvVxo%2FCcwGGgWxoun7Nwg87hzzVhWcnNKX3FXK5RRUI99HraAEUzuzk%2FopuOP2Ls9YCYoMYzVE7n0THWZAHSd3J%2B5dyCKfKKWGuG%2Bx11nMI6SEyw5tQmyZ3iWL5ibM9acuHmBev9ZvwCuQ3wRBwugd75E9M5lFocX4aIggDdhg6pCzoTTCg3TbGsG34shdOIQjCWaLrqv8ClE4NcPQlUiniIle2f3%2FmGk2HPyLgKLqBv9tRR5YuJFgWdzIgjI0uVs0TjDSx53CBjqkATj0l2PYd%2BkHM4XQGPlpbPUaZTVYBA9GUKz4dMnPF7HGdaJIkIm2M%2BJpTYgLOsDdziybIEh%2BhwT7RgoPHyJyI5yKO40nIxtH1IwB8iGHg3ZWnOMiCEqwBbhQal7UrRTWsPGSpxxN3%2F8%2FQJ0oc2wmBBTEpAPgzYxeg7DxP0Y3dQLCMrGBxkpVNgtOFBBQmmhpaMU%2BS7udaqjfplSkKBjAR%2FgSdMAx&X-Amz-Signature=c4b1a4f8c7618e1742462be0c2f5a414559d16fdbca91a5c55a224c84d6e584b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFYLBWI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD24TLpHKQfQgMyfDTOpzE6da3YBdRAr8wTpBEaSA6xdgIhAOY6yULjsHKxUKx%2F%2FVmkbLOdJSFLbWn3x%2F1oC%2FA%2BxQIJKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAmfZcd8pxs%2Fm8aXsq3APKTkIYCU%2FTosLpEN677dMY8tyvhMT6ayOGW9QRrEJCzmPvhHgsA54M7AqUYLjE5eeqiv%2BWEvHD07g1vTToeTAQFbUUOIixgcVY%2FL99kkFEVJB%2FHQTsi2A8fTKFDaqk82sUo8kb3UDjtSAQSxdj7n%2FwU0gwsu4qOsnihsB7O3OZXKmWgddwA%2Fbivq23SQLd6yIcyd4VAJrJ0zBmIWzrL2NLy4016dUZRpiSMx4j%2FT6RIAh47gBS0Z%2Fofl6GFOL6%2ByE%2FlQ6XuD200j%2Fjk2PnbUtQIidpmg1%2F2mhstD%2BegVovFchplydjhm7qsTq%2BhOHT2IXGU%2BAhGtdBO%2B%2FHWwYmWHCqo%2FYiIUD%2F5fgjTV7G98VSGGiTUVJIobrJqqKvVxo%2FCcwGGgWxoun7Nwg87hzzVhWcnNKX3FXK5RRUI99HraAEUzuzk%2FopuOP2Ls9YCYoMYzVE7n0THWZAHSd3J%2B5dyCKfKKWGuG%2Bx11nMI6SEyw5tQmyZ3iWL5ibM9acuHmBev9ZvwCuQ3wRBwugd75E9M5lFocX4aIggDdhg6pCzoTTCg3TbGsG34shdOIQjCWaLrqv8ClE4NcPQlUiniIle2f3%2FmGk2HPyLgKLqBv9tRR5YuJFgWdzIgjI0uVs0TjDSx53CBjqkATj0l2PYd%2BkHM4XQGPlpbPUaZTVYBA9GUKz4dMnPF7HGdaJIkIm2M%2BJpTYgLOsDdziybIEh%2BhwT7RgoPHyJyI5yKO40nIxtH1IwB8iGHg3ZWnOMiCEqwBbhQal7UrRTWsPGSpxxN3%2F8%2FQJ0oc2wmBBTEpAPgzYxeg7DxP0Y3dQLCMrGBxkpVNgtOFBBQmmhpaMU%2BS7udaqjfplSkKBjAR%2FgSdMAx&X-Amz-Signature=d94b851bd5c3f758c35a88a5c7b0208b02eb45b88ab0c41fa6c12493e231abf4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMFADNQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx8eTaNWocV3VipqYwN9q9X4AONHsLjyx7V%2FvYyPJa%2FAiBxwU2ms5mCqdKejgfrcHXNnCMrYcuc6xrN%2Bs%2FkHLwaFCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlJ1bq6kSaK8cmXlwKtwDuQFwf1agluqxOJ78LYIwj2mR7M68LhcbmmxBxExnrVVfGOG3mV6C7qu0GNWspxcWDLEeieopp%2B6WxT3QvArpY6xVCFsk2u0%2Fgs08016DnXnKWjkLg9DZ7PyKCBP1SgjFoYo63YO9e8f9T6ApfDRqt6IpXzX%2F8cdCYKRIcH79fM7AQ%2BZ6z1vUHdQPnu%2Ba72I3piCQDx2q9XSijPD%2BfzXf3l8eJldV1wU28vN37r0zW%2FPw6Ng7%2BW5Fs%2Fhk8%2BxyLZhiQQjTrywxR3Rfuqu4FwSYP1IluqipYmU1rTOHrsv%2FtpQgpAPNwExu6nZCfrT9ymqyyIcUAwdGTRsUD5AT0a0lMJ%2F1NrBrX%2BziQuFOLE1lVjxiCcxQvySB59v4ZVwzBDXoAbny3BJRt4BWSz34GkJjUzqHjG6DV2hgg4y3dO6BCxcQdT%2FwzOP3rZMHzxdxPO%2FXh9ZJKemcZIxrLA38J8QvZcwtClKa%2BEvyeB6bc4M9SNiVMXCwdqT0QXsAZ5gCyx%2FZQozQot5ldrmHFcncdxqzfT9xrAwGEjnZ0FtabK9SJtj8RA6aTWS5GqFa5LljhOpgxaSYLA7xVR2nZYdwqUDhMoiFSFw4hbt6AUoEEU2rAtqRbT9rPuD%2FHiRekqIwnMSdwgY6pgH%2BBD3ZvK6c322MOuvZGtlt9Enc9DiT0DRHivOEWC6sNCABK86xiMxyDGSvYBp2RlYiu9KGDAVFzv%2BXWlk%2FTAYeuJuYmRSKZ7zYeFnrnf%2FC2YQ9OcxelmongK4P67iDWIuI1VEfKjKXY9%2FUemZnaV2NZdxSb6nVb6C%2FX%2FdfgyE%2BfxVmaA31zsw42FFivQl7VOpCOFNrItBWUkICXmD3MUMs40pr9c%2Fb&X-Amz-Signature=5368c0271beae4675c5a717e9a10f59336d5ad6aa09af6ac87827b12719e1eea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4EEI4T%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY6EDCNf7y%2BG%2BT6gttzl11ficvgjk47pG0GuPJwD0yYAIge2nwYTQ%2FOsYFKeq%2FdCNcmgE6IzUavXRT5pNZh96fJLsqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsbe6mwE8zeD1YVOSrcA5hquhaeT91yxbEF2NXLANT6A6ItytftjECgYnQ2RY6RoQhZffFxhbvlBwnrdsrwmG%2FPI5Gw7gZIRnDa7ec2A2lKBcFPFkcRdrX3cJa7dBNFDqDE8BgJluXmycDdmFJXvJKKUKe4VBT29Ot5J%2FiuLghTCQgzpzWjd%2F4MkH22Yn5gRpC8m6mUwtwFRRbQOZ4gXdWiSpIQrq2D9wLdrvkNr9DI2WMbReQIvuRau5iJtXaCL0a%2BSDVlfartJ%2BIDUtept7WaPxp8umsWfqtOfIG29x0g3Fj2nGLB%2Fs4POHy6VWvI8BsqcGv%2F62Stsl0%2B%2BCdP0NlpEfVwrFxG%2FPBpHMbJ6GdyqF31W1HxwDYZu8PYq1iFMQaD2oljZXJGZ0ZUuEnWNRMe1D93pCVlv3ocQHTTha4fyk09ZPLkSP7kFBgZOeU5wrzFVj%2BE0G3%2BOKptBHIG%2BHZ3FJzLRjfXNt4sfr9TpFvnbYKzVctFBNGa%2BGEyr6j3H6zjWWps7q44QgFsmc66Jk%2FbjX7cCuh14RDzqhvntV4CwXtuSjig5JgeBEhzKvRzyNr5CzT%2FEMXtIe3Tx1886Xoau1Xb3Ri6MmW8Wp%2FwgxHWGrEt9gROudCvcC8H5107DyUJETPe%2F4CM%2FqtSMJrEncIGOqUB6rWNa4WJhen2oP1OYfdM9FqOxlK59yPxCJhDCc%2FqM1UOze25nbgUgI00vOo6yhxqC2Mypdgqfel1XmKQJBbNoO8Ey7l2Jjp1ir3l%2BYAVgZoQlOfTNNjSoIaH8z%2B3MAGwomeCbiRJ1DZ8mw1HhPJ5%2BHv75A%2BayL3I%2BCE%2BeRRAP3o1rwfLr21XNyrlQBpCQntwgqUV3qt98UZNvaVz4L3U1pSXqQ6Z&X-Amz-Signature=e51046bc25f13e510a83992f8e2d21be8b3e1a5e4fdec2d8f3eac6312ed718ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHFYLBWI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD24TLpHKQfQgMyfDTOpzE6da3YBdRAr8wTpBEaSA6xdgIhAOY6yULjsHKxUKx%2F%2FVmkbLOdJSFLbWn3x%2F1oC%2FA%2BxQIJKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAmfZcd8pxs%2Fm8aXsq3APKTkIYCU%2FTosLpEN677dMY8tyvhMT6ayOGW9QRrEJCzmPvhHgsA54M7AqUYLjE5eeqiv%2BWEvHD07g1vTToeTAQFbUUOIixgcVY%2FL99kkFEVJB%2FHQTsi2A8fTKFDaqk82sUo8kb3UDjtSAQSxdj7n%2FwU0gwsu4qOsnihsB7O3OZXKmWgddwA%2Fbivq23SQLd6yIcyd4VAJrJ0zBmIWzrL2NLy4016dUZRpiSMx4j%2FT6RIAh47gBS0Z%2Fofl6GFOL6%2ByE%2FlQ6XuD200j%2Fjk2PnbUtQIidpmg1%2F2mhstD%2BegVovFchplydjhm7qsTq%2BhOHT2IXGU%2BAhGtdBO%2B%2FHWwYmWHCqo%2FYiIUD%2F5fgjTV7G98VSGGiTUVJIobrJqqKvVxo%2FCcwGGgWxoun7Nwg87hzzVhWcnNKX3FXK5RRUI99HraAEUzuzk%2FopuOP2Ls9YCYoMYzVE7n0THWZAHSd3J%2B5dyCKfKKWGuG%2Bx11nMI6SEyw5tQmyZ3iWL5ibM9acuHmBev9ZvwCuQ3wRBwugd75E9M5lFocX4aIggDdhg6pCzoTTCg3TbGsG34shdOIQjCWaLrqv8ClE4NcPQlUiniIle2f3%2FmGk2HPyLgKLqBv9tRR5YuJFgWdzIgjI0uVs0TjDSx53CBjqkATj0l2PYd%2BkHM4XQGPlpbPUaZTVYBA9GUKz4dMnPF7HGdaJIkIm2M%2BJpTYgLOsDdziybIEh%2BhwT7RgoPHyJyI5yKO40nIxtH1IwB8iGHg3ZWnOMiCEqwBbhQal7UrRTWsPGSpxxN3%2F8%2FQJ0oc2wmBBTEpAPgzYxeg7DxP0Y3dQLCMrGBxkpVNgtOFBBQmmhpaMU%2BS7udaqjfplSkKBjAR%2FgSdMAx&X-Amz-Signature=8690af375527931fc9b8374fe712fa86880dbc2ea2fa67c10d17be42d0dacc29&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
