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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZGKS26T%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID86tcY9NK%2BBGnqeRqYsr3K14rvJZffx7nGxhZ7lFZRWAiBizXOXnZbcODmwwhkpXFMYvd1JwVULcizm3rdjNd%2FT%2FCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMOQgy8awM%2F4hGkA80KtwD1duJi%2FqwwJNMkad1UVoqUU3A%2FVD%2BZM9HKlwb8jkrmeJEveUFRk33hZYUZQUJEZlge4bX7GpIFna0m5y78AFU1Zz3enQmmrkoPRNwR2h0%2FBjAHFP2hS3MwJ%2BdQCFPS6z0SFUCtyulrUAkuLbKGmsMmHE7Z0qnM0eFR2u0ZXimRSDFkOu7jSNl39jz%2BTVvPYZXAEIKZ5bEg3riZF8A9yE2RkJ9Cee0JGd8qc7CTnzpnxUcbfCpHqyWs6GxWw0nw0g8lHlv8NsAx2DpHlEZ9TT0%2F1WZbs6OOrzOYEd2tt0CKtOsHAdj3wcxN9QpvwcQ8j4Qin%2FbvP0jX9Hu1oFaGFR5l4V%2FPEtaBbJUshMjetM9Fgmg3MNe9%2FvYP5zE4bGIDqO8XfCTeFueX54sseNnh4%2B%2F8RguMHojo4npcEFZq2mvsLEZULymEeQVbXKop7NKEE5dtddsc8R8FZb7u3gtFwDUJ7prxhUKXMjPkrlFP6jNDa9P9c%2FAMQjo5WeajSlm3DcIIQRBJesetO1GMgGoJVD%2BD1yTZse%2F1FNfBomLxFoKXBI2RkQW4CeUzNC9ajYdrcjlX68k8NR2XcV4lcjih63RgtOduHcEqG36Im%2Bl2Q8bqgREatzEcNwfjtCq%2B%2B4wwe%2FrwAY6pgEsw%2FYGOnOqhkI8gMKVXp0dUraXhKEK5vs2AnNGkl2voGKmG%2BU9Z%2BH54FUtIIoLm8pc0dIL6r8fiaReCgLzV7SPk17slEyvIAmUjd61Jj%2B78h4j7D8g1RdsLR5G%2FRBmb4E7LGUA7cEY0TFtmMHRqmHeKsInYCgcYEZncfjc%2F8EB11bIvI5RI8iQekJIJ%2BRHla53oK5RGsidt75GbQ%2Fdj5ll9oSGXa%2Fl&X-Amz-Signature=6a60de4cea3d7c505a0f0c8b1c33fbc0beca51c93e713b335e76db577a90f8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZGKS26T%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID86tcY9NK%2BBGnqeRqYsr3K14rvJZffx7nGxhZ7lFZRWAiBizXOXnZbcODmwwhkpXFMYvd1JwVULcizm3rdjNd%2FT%2FCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMOQgy8awM%2F4hGkA80KtwD1duJi%2FqwwJNMkad1UVoqUU3A%2FVD%2BZM9HKlwb8jkrmeJEveUFRk33hZYUZQUJEZlge4bX7GpIFna0m5y78AFU1Zz3enQmmrkoPRNwR2h0%2FBjAHFP2hS3MwJ%2BdQCFPS6z0SFUCtyulrUAkuLbKGmsMmHE7Z0qnM0eFR2u0ZXimRSDFkOu7jSNl39jz%2BTVvPYZXAEIKZ5bEg3riZF8A9yE2RkJ9Cee0JGd8qc7CTnzpnxUcbfCpHqyWs6GxWw0nw0g8lHlv8NsAx2DpHlEZ9TT0%2F1WZbs6OOrzOYEd2tt0CKtOsHAdj3wcxN9QpvwcQ8j4Qin%2FbvP0jX9Hu1oFaGFR5l4V%2FPEtaBbJUshMjetM9Fgmg3MNe9%2FvYP5zE4bGIDqO8XfCTeFueX54sseNnh4%2B%2F8RguMHojo4npcEFZq2mvsLEZULymEeQVbXKop7NKEE5dtddsc8R8FZb7u3gtFwDUJ7prxhUKXMjPkrlFP6jNDa9P9c%2FAMQjo5WeajSlm3DcIIQRBJesetO1GMgGoJVD%2BD1yTZse%2F1FNfBomLxFoKXBI2RkQW4CeUzNC9ajYdrcjlX68k8NR2XcV4lcjih63RgtOduHcEqG36Im%2Bl2Q8bqgREatzEcNwfjtCq%2B%2B4wwe%2FrwAY6pgEsw%2FYGOnOqhkI8gMKVXp0dUraXhKEK5vs2AnNGkl2voGKmG%2BU9Z%2BH54FUtIIoLm8pc0dIL6r8fiaReCgLzV7SPk17slEyvIAmUjd61Jj%2B78h4j7D8g1RdsLR5G%2FRBmb4E7LGUA7cEY0TFtmMHRqmHeKsInYCgcYEZncfjc%2F8EB11bIvI5RI8iQekJIJ%2BRHla53oK5RGsidt75GbQ%2Fdj5ll9oSGXa%2Fl&X-Amz-Signature=df12fdb043a4182fcabcaae9d076e0f952f31a005e8138d2e93ed0c0814353cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZGKS26T%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID86tcY9NK%2BBGnqeRqYsr3K14rvJZffx7nGxhZ7lFZRWAiBizXOXnZbcODmwwhkpXFMYvd1JwVULcizm3rdjNd%2FT%2FCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMOQgy8awM%2F4hGkA80KtwD1duJi%2FqwwJNMkad1UVoqUU3A%2FVD%2BZM9HKlwb8jkrmeJEveUFRk33hZYUZQUJEZlge4bX7GpIFna0m5y78AFU1Zz3enQmmrkoPRNwR2h0%2FBjAHFP2hS3MwJ%2BdQCFPS6z0SFUCtyulrUAkuLbKGmsMmHE7Z0qnM0eFR2u0ZXimRSDFkOu7jSNl39jz%2BTVvPYZXAEIKZ5bEg3riZF8A9yE2RkJ9Cee0JGd8qc7CTnzpnxUcbfCpHqyWs6GxWw0nw0g8lHlv8NsAx2DpHlEZ9TT0%2F1WZbs6OOrzOYEd2tt0CKtOsHAdj3wcxN9QpvwcQ8j4Qin%2FbvP0jX9Hu1oFaGFR5l4V%2FPEtaBbJUshMjetM9Fgmg3MNe9%2FvYP5zE4bGIDqO8XfCTeFueX54sseNnh4%2B%2F8RguMHojo4npcEFZq2mvsLEZULymEeQVbXKop7NKEE5dtddsc8R8FZb7u3gtFwDUJ7prxhUKXMjPkrlFP6jNDa9P9c%2FAMQjo5WeajSlm3DcIIQRBJesetO1GMgGoJVD%2BD1yTZse%2F1FNfBomLxFoKXBI2RkQW4CeUzNC9ajYdrcjlX68k8NR2XcV4lcjih63RgtOduHcEqG36Im%2Bl2Q8bqgREatzEcNwfjtCq%2B%2B4wwe%2FrwAY6pgEsw%2FYGOnOqhkI8gMKVXp0dUraXhKEK5vs2AnNGkl2voGKmG%2BU9Z%2BH54FUtIIoLm8pc0dIL6r8fiaReCgLzV7SPk17slEyvIAmUjd61Jj%2B78h4j7D8g1RdsLR5G%2FRBmb4E7LGUA7cEY0TFtmMHRqmHeKsInYCgcYEZncfjc%2F8EB11bIvI5RI8iQekJIJ%2BRHla53oK5RGsidt75GbQ%2Fdj5ll9oSGXa%2Fl&X-Amz-Signature=20949beea01b491d14e63ce19ec4c4c3af7a61b39a809572c7c48873aa7bae47&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S32M2TG6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FGG0vHX4Q3e07RharKPyG%2BMnM7u%2BduBMbdVfPWVy%2FUAiEA%2FtZVtHBW3wJGNoJaoNkNxru6shjhTRDhWK3DNQWtsWEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLBODFn7N%2FlaLdaOMircA0f4WyR6YDyyezePbuXZLfwFpDgfbvZjIveL11YIe7JAza3e1QPZaVja6OI2Ncqinks0mOqJXt3p%2F6XUghzL4QXEufSWTrL0HJKnUwjynORpRL93eNhbWvEwHc8pah%2FXS5eK59rAT4kyd0DUeo7MFe2wqcZo2tXnml9b1%2BP7Ix1M9WbgtRWewffeIf%2F6dAJ7mkdzKARNPoQdmBrx8zt0qlk6bmqq2tGsldEK7dbEw%2FqSUU3OQ4tbImNwj3BcYfjlHuD%2FAyabmtA9rq6rwscgQmV4RyXJLh48%2FKUoazdK412%2BbNDwPmI1Wt%2Fq%2B3eWM0N4yvJVbjHBfVpzHgtnt13i56NCSJZJbTZW0KOHRoBqj85iLOvQmdSLq80NTBhrRAA8j40a2Fb4TMch44%2BBvBLeOCGQzvAtkwpoV7ExaaUS4mlczg%2FZZGtvugmsnnrA7Q8P9lRaC%2FKrfJxSBiRA9249VGJed539m3BFR7j139DtyJVJi%2B%2BITIRRoXtIxpQFLfzr0xCToo1VYYG%2BBZmJwLK4RvMhYgZaFmYcy0ltogfaphcdRKwEjH1N9nGsZFRuNP0AaZyxWT1BaWSm%2Bj9jmcJfS0ymuZQmgiK5EYs4we7%2BmBb%2Bb8e2WDzeQWuBx6lcMK7w68AGOqUBLlfRWfYMTvVf%2BYk%2FGTzG1R95SogQObHrEoskeDYRBLBisnuh4po1voDWvqfxfraRCEUcIqCXRJA02%2B729Jq4TnooWXNts4kj%2FL%2BN3RdZ4srqA1D3qN235sbSmtB2SuVtvhIRgUK2GzocYsJ104kF7mdZv6SwOm9TCIiRjbNqn9pEM1J2YlImv%2B2aKKrlRqRzuOqJRrt2rqIGTls5UTPQOc5ZgpEM&X-Amz-Signature=bd8f0ef03d4f872398878f194fddd971d9794875e6f622e620f98ee75683e1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDOZZJT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkQYYghInc0tplZcTZQtFWr1903J0xTt%2FC3RPoFVOVAAiB5%2BJc6V%2B%2FhhFAcHvCLaVhoUOYdr%2FKrWmV%2Bb0oyXcAZMir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMY00YxcnDDLED307EKtwDHMYGkm0Whsse5J%2Fm8PKm4NC5aFoUt5T%2B9CC31OdhWe%2BxGzR4J%2BtWQO7LwPtGVbFW54OTRDlLvDaKDLSLUdyE7rmPNgCqE4IoK4KB%2BQYFWxyuDQxElEnjsDd5oykSPQ5qYHMJ13hELlrmO3%2FRMilXAW2PP8gmldUG5qR%2Fe0zXYsbKN5ugRc92td0klAy4PMhBvelCnGA%2B2X2%2FnNv3e8A8d1i6ILmwet7isK65SC9TF8hQFR2weOETHBBknP6rCmpz0dzkTjeKVOHYwtnv7rfWqLM%2BRp5YqXrghnk0hR%2FvphNLpm3jc9zjTPYHKdGZPrWG32ZWcMw2K5C6zDuqchMKYL9M%2B8mptSIU0f3yyxwELq%2BWVbPA8FabCUwoZ33sGBZVjnC4PtJE3tLnc0J5%2Bn19ar%2BX095AnOqpRmJVcUKm8b905UOT%2F9q%2BLjWfrB3XRb7RitceFSysDq2ePxQ2gM0d1lZgglSmsJHwd%2BlaX7EDc%2BkLTpt78QXRCGCpcPfGWtJQ9Gff8w38dkDULQulcsXjSf9WbrRrvTg8i4TUJTG8FgXWFBB9de0n0JxdFhStkgNe1Fnd%2BN7c50el21QPQlIk6p0v%2FNIX%2BnX82Nd0C2amSyKbRSOekUdN9l1oj8EwjPDrwAY6pgHyDfpGL%2BrhsZWBATErfpJ45Rj7ASHxtTE%2BMahEqtim%2BADTEQFPsHCe2zyXAGzaCZ0JJPaogdJYuEFu%2BYXpe6Y0%2Fo3CNULFVHuJtnT2a535nZDE22WJTAGyOnEfNs6yh7Ja6CcETFM0PUmNQTOTigfPHcNjIVUK19418yMobjp92mCuAxnVMZrIkjAeOz1rViExjrzGZ3flowjagHjxtMCEbxIQIAZ4&X-Amz-Signature=ee6e5a5ae548b9575648749808233972448b9f001e6f0bebdcce7e0cfe75a23f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZGKS26T%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID86tcY9NK%2BBGnqeRqYsr3K14rvJZffx7nGxhZ7lFZRWAiBizXOXnZbcODmwwhkpXFMYvd1JwVULcizm3rdjNd%2FT%2FCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMOQgy8awM%2F4hGkA80KtwD1duJi%2FqwwJNMkad1UVoqUU3A%2FVD%2BZM9HKlwb8jkrmeJEveUFRk33hZYUZQUJEZlge4bX7GpIFna0m5y78AFU1Zz3enQmmrkoPRNwR2h0%2FBjAHFP2hS3MwJ%2BdQCFPS6z0SFUCtyulrUAkuLbKGmsMmHE7Z0qnM0eFR2u0ZXimRSDFkOu7jSNl39jz%2BTVvPYZXAEIKZ5bEg3riZF8A9yE2RkJ9Cee0JGd8qc7CTnzpnxUcbfCpHqyWs6GxWw0nw0g8lHlv8NsAx2DpHlEZ9TT0%2F1WZbs6OOrzOYEd2tt0CKtOsHAdj3wcxN9QpvwcQ8j4Qin%2FbvP0jX9Hu1oFaGFR5l4V%2FPEtaBbJUshMjetM9Fgmg3MNe9%2FvYP5zE4bGIDqO8XfCTeFueX54sseNnh4%2B%2F8RguMHojo4npcEFZq2mvsLEZULymEeQVbXKop7NKEE5dtddsc8R8FZb7u3gtFwDUJ7prxhUKXMjPkrlFP6jNDa9P9c%2FAMQjo5WeajSlm3DcIIQRBJesetO1GMgGoJVD%2BD1yTZse%2F1FNfBomLxFoKXBI2RkQW4CeUzNC9ajYdrcjlX68k8NR2XcV4lcjih63RgtOduHcEqG36Im%2Bl2Q8bqgREatzEcNwfjtCq%2B%2B4wwe%2FrwAY6pgEsw%2FYGOnOqhkI8gMKVXp0dUraXhKEK5vs2AnNGkl2voGKmG%2BU9Z%2BH54FUtIIoLm8pc0dIL6r8fiaReCgLzV7SPk17slEyvIAmUjd61Jj%2B78h4j7D8g1RdsLR5G%2FRBmb4E7LGUA7cEY0TFtmMHRqmHeKsInYCgcYEZncfjc%2F8EB11bIvI5RI8iQekJIJ%2BRHla53oK5RGsidt75GbQ%2Fdj5ll9oSGXa%2Fl&X-Amz-Signature=8d02be113419bfbd70e7685b408a72c84e672b4fc10684f04dd4d542a9f74777&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
