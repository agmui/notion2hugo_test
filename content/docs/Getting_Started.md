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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJ4KDHY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnONvaGb%2BKkM5ppukZrY1SWBagKKGMZhTbrgcDwo9KdAIgOzECS6ybTC8l3PlSTpL4Ek%2F7hQNpoknvHwll%2BMw4Au4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEmADTNGqaAHNw99CrcA0GHHTjG9aBjLBFq05lGn1oqdCyoZ8Tqbwu1Cm3B5BSyq8ECrB9OgN39KlUeFg8oWEf%2BcTkaGuV5t%2BkAOjS%2B886g1Qx0lyjdCUniVnFgF3owwioY14aafICH%2Ff8bB%2FhXrZ6j3vezplVpzjsfhhBLLffXUuiPN%2FbjC7hlOuvXugjnPN1OvymL8W4Cy7Hj9NFS7N2TF5oOSzHY0YgpWt3uUHkG0tVA9N7qZ8sQikGNESCaAqxhCw2XIi4r6m6CUG4drlNpJSiiuwHny2%2F2RWD62A6OK4ACsbOwp0%2B%2FgyCbFJakn3rThnJfipqAQjZLee4L7E86VNgtWXMple%2BUMNZ9UMMogGey3NGp9gUSk9zMwMZY59kg8OsAPGJ2KlNiX%2BYkRBbAGK8Ua0UUimbw8uUx6XS9BbYo7N08XExfbYoBSP1TVH%2FW7pJ9dbiAth%2BQ5QTk%2F6hHW9dXR4TAkOEhsunzqNOUf2jSXWk6Bz79RzZAq0Im0AfMzPWPnOljoISeRfI1zsMmySfRChiKcImgGkjeXQpCYTgqPXvXleR1Mt2EjlpPNUMvWAjpy0gBDrMfMBX8A%2F4BbHkqWPFNNXD9cYe8uKDpwE00ZR2cL%2BnTtpOH7kB1P%2BUSmAG6eL3xw5hWMKf6%2FcIGOqUBqaDmghjB0kmuP3p2cDEOHws25LhbpXqQW%2BVxNLgmPDGW7fW6UheyW3ur61D6if2MmsAtNl08GpJDysPtjik1gf%2FmOX5hyd29wcdknoUAw4Nia8OUg881OppdOYpb748VZIP7t%2FLAGVrdJS6cqVlhoVY4fxzyOZggn9Axt6DAJjahcaV7LR43z2qtwdR%2BuX8OVC9NW9J9Ee3Gm4Mnk7nLfbheATPc&X-Amz-Signature=3ec84b270c5b25b15b10a1b7083b874e06a108b62d2d1b545567d000b6560b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJ4KDHY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnONvaGb%2BKkM5ppukZrY1SWBagKKGMZhTbrgcDwo9KdAIgOzECS6ybTC8l3PlSTpL4Ek%2F7hQNpoknvHwll%2BMw4Au4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEmADTNGqaAHNw99CrcA0GHHTjG9aBjLBFq05lGn1oqdCyoZ8Tqbwu1Cm3B5BSyq8ECrB9OgN39KlUeFg8oWEf%2BcTkaGuV5t%2BkAOjS%2B886g1Qx0lyjdCUniVnFgF3owwioY14aafICH%2Ff8bB%2FhXrZ6j3vezplVpzjsfhhBLLffXUuiPN%2FbjC7hlOuvXugjnPN1OvymL8W4Cy7Hj9NFS7N2TF5oOSzHY0YgpWt3uUHkG0tVA9N7qZ8sQikGNESCaAqxhCw2XIi4r6m6CUG4drlNpJSiiuwHny2%2F2RWD62A6OK4ACsbOwp0%2B%2FgyCbFJakn3rThnJfipqAQjZLee4L7E86VNgtWXMple%2BUMNZ9UMMogGey3NGp9gUSk9zMwMZY59kg8OsAPGJ2KlNiX%2BYkRBbAGK8Ua0UUimbw8uUx6XS9BbYo7N08XExfbYoBSP1TVH%2FW7pJ9dbiAth%2BQ5QTk%2F6hHW9dXR4TAkOEhsunzqNOUf2jSXWk6Bz79RzZAq0Im0AfMzPWPnOljoISeRfI1zsMmySfRChiKcImgGkjeXQpCYTgqPXvXleR1Mt2EjlpPNUMvWAjpy0gBDrMfMBX8A%2F4BbHkqWPFNNXD9cYe8uKDpwE00ZR2cL%2BnTtpOH7kB1P%2BUSmAG6eL3xw5hWMKf6%2FcIGOqUBqaDmghjB0kmuP3p2cDEOHws25LhbpXqQW%2BVxNLgmPDGW7fW6UheyW3ur61D6if2MmsAtNl08GpJDysPtjik1gf%2FmOX5hyd29wcdknoUAw4Nia8OUg881OppdOYpb748VZIP7t%2FLAGVrdJS6cqVlhoVY4fxzyOZggn9Axt6DAJjahcaV7LR43z2qtwdR%2BuX8OVC9NW9J9Ee3Gm4Mnk7nLfbheATPc&X-Amz-Signature=008073c8bbd95d833d29e80934ce234ae689a199a8fd9f4ab7b47f8d2247f96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJ4KDHY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnONvaGb%2BKkM5ppukZrY1SWBagKKGMZhTbrgcDwo9KdAIgOzECS6ybTC8l3PlSTpL4Ek%2F7hQNpoknvHwll%2BMw4Au4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEmADTNGqaAHNw99CrcA0GHHTjG9aBjLBFq05lGn1oqdCyoZ8Tqbwu1Cm3B5BSyq8ECrB9OgN39KlUeFg8oWEf%2BcTkaGuV5t%2BkAOjS%2B886g1Qx0lyjdCUniVnFgF3owwioY14aafICH%2Ff8bB%2FhXrZ6j3vezplVpzjsfhhBLLffXUuiPN%2FbjC7hlOuvXugjnPN1OvymL8W4Cy7Hj9NFS7N2TF5oOSzHY0YgpWt3uUHkG0tVA9N7qZ8sQikGNESCaAqxhCw2XIi4r6m6CUG4drlNpJSiiuwHny2%2F2RWD62A6OK4ACsbOwp0%2B%2FgyCbFJakn3rThnJfipqAQjZLee4L7E86VNgtWXMple%2BUMNZ9UMMogGey3NGp9gUSk9zMwMZY59kg8OsAPGJ2KlNiX%2BYkRBbAGK8Ua0UUimbw8uUx6XS9BbYo7N08XExfbYoBSP1TVH%2FW7pJ9dbiAth%2BQ5QTk%2F6hHW9dXR4TAkOEhsunzqNOUf2jSXWk6Bz79RzZAq0Im0AfMzPWPnOljoISeRfI1zsMmySfRChiKcImgGkjeXQpCYTgqPXvXleR1Mt2EjlpPNUMvWAjpy0gBDrMfMBX8A%2F4BbHkqWPFNNXD9cYe8uKDpwE00ZR2cL%2BnTtpOH7kB1P%2BUSmAG6eL3xw5hWMKf6%2FcIGOqUBqaDmghjB0kmuP3p2cDEOHws25LhbpXqQW%2BVxNLgmPDGW7fW6UheyW3ur61D6if2MmsAtNl08GpJDysPtjik1gf%2FmOX5hyd29wcdknoUAw4Nia8OUg881OppdOYpb748VZIP7t%2FLAGVrdJS6cqVlhoVY4fxzyOZggn9Axt6DAJjahcaV7LR43z2qtwdR%2BuX8OVC9NW9J9Ee3Gm4Mnk7nLfbheATPc&X-Amz-Signature=0be6339e26f882501089f43e384e9a90a1c11e37646d178841c3dc009ba88485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPVLVA7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdf4p75i3cL0zinBbpD069LDNYW5rnusO6Y5IDnMAlOAiEA%2BWWzwqMfXf%2BePqgR0vlrHPwXuuZUnwhu2%2Fld%2FaqQst8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAecSarSf45DpjTCxSrcA3qiWeDcKh2DVxZ1akoEzSekPFNgT4cK1CdnEUAOBndOqEaqmLLTy3skZYhKmFaPeO9du7eKgE8E%2BiuUPI40wnf124VBwM37S0wu0qN%2BG0D0ok4pEcJQbdP9bR3ZG04yoCYpDQXs4NtzbwgLYEKobGZO8NWgy7BlEzbkQo5VGXJVgv7etWfo91%2Bv3cq9VY02bc3eEVA3BJlajRB3ctCrKsaN9NL9Obekeuv2CIE40Bug6b4Phu0%2B%2FF3iMUoUbkK%2BMvp%2FStUDXOPzTDZykzUBkucRQg9sRM9bJeVTbKZE2sQsXf5SmtKfzx5Go9D4py5e4b7DcRkTX0RmOLokEhAnx2wHHIxuMlE1CWbrp5w3YVCTX1f2NsY2SXxH2%2FjxiJ3LI6nCXhmPKhnzSxt1cOF3o3NN%2B5i4XNpMt52Cv8SJSP06XqyJ7dWRxCH%2FtR7OANYQDlEkFtRl8csERnZIUqSDOrk61VXN7HOVPdeannqKgljpLPnDVrwUG8dG31YoVndY9DmjVFfUFidI0WWaWFkTgNA9bQ8JyD%2BaAfXm2mWShWG9TY1WDRTTHX7qD%2BfqJDxDRRgzqJbzRk7JFoMAAb3kx3hMcuMwbX5vX%2FhbMOgLdxJnq0isx7EOS81Au0TVMK%2F6%2FcIGOqUBRm8zt1GlR1m8dglX9GGqVb6PDkUf%2FrTMQqSOE4Pokj1lVYFCEdKOHXo%2BiW7RwV7t%2F8DfDi4iQG37pEX7kWRLgTSaekPw8yQFTzKppFkFM8YxVNEF79U350MFcomC%2BuBjB5kTk9jFI3OYy4nj98XJUjc70pgIrCed7eMdJD%2FIaDKF4QTPPtC3eM%2FQLogUzFnzjVHepOn4fFQZxSgmjvIoaOfXl3ke&X-Amz-Signature=2e993b852965f7de068ab35b09c72d03c69e20ce9a0811dcf1ef6a6bab51c69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5TFA4V%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSOd3mqiaDfp2Kz%2FJ1KeiK4wVMYHgtuz%2F9Y%2BDwxH1sDAiEA%2BkAW%2BX8Z9NqYPeNF19AyTRAFSFCQiDt25IqORufk%2Be4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEit4K1p5zhUh33PircA4DO8PYyIiu02mVF8LOFbTkF%2Bee5l0oIn6EKj24466ydhi1kJ7J2sGu8jWR6arle%2Bjm4o3cHgR7qiYlRIju7RGbAOUbLFXISdIBa4HeULs0yIRLC0wFbQNugsnIXND4oPa2iW4Qw9b%2BXOWocL4jhqVoG63kBHwDTosjrHqKKAF2jft5B5qGKtxmyr3qCi2%2Bja0VjXcPEWIJHpPp5gEgnDbTp5oTYdmbxo%2FqIuohI%2FViE90GkOQnTpDiOStT2C0eZoz3osoqatFIWU%2BfyetoBo2UtFE3L6pACDHMEt59wnNkeM%2Fh8Wl%2F4mIg3hxP2amgM%2BqryK2qoz0%2FFNj3Hb8bXRkz8THRKXTvLUkgF2iHq8rAVolOQwNNoAaNkA%2Bs7vJwpqUKzpZHFtzqAogma4O9bQvW8UiVUBooFpDH7AcSOa1wh4YZEj31afTxOobgz3PCO0LxD0ZxxNBSkAAI8sBb0uYkO7o0EhWXwbnanpl%2Fglf3mhScDmueF5dJtkkyqym3UnQdEDCl7VzmgxJQ%2B6UMMWaimTiw2u8MCPi7NQ0evOq3i%2FEPs3sztUYkL0DbzDTw%2BNiA7Bug1IvHjKJlBXt%2BHPNI2OhxRhzJAqfeB3ZoYqNNvDzqNB5%2F4ualV%2BYNsMLj6%2FcIGOqUBwNcP7jF2Bt%2BmUDpQLSy4PaBEHNG55POHcBdvlpscSjuKa7YiYMfJiSHW3TBoqCKRoMh9MyKkDEsEuL%2BvDa0z8SI%2BHujI05d4yfAO0rzk8ioE%2FWbo2TqxK%2BCEpPuhKjyIh%2B%2BQmbp3ymkHQmvGo4eiYG3hoO%2BPNtCrX1omJu6WqwVX0WlcqoSsFAXJQ%2FAPvCkck%2Bm2HqIKM%2By6QcazNn9Qmk1NW1sq&X-Amz-Signature=c628f012456f9cda85115e97676776d74afeec6139889789764b86e9771c5b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJ4KDHY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnONvaGb%2BKkM5ppukZrY1SWBagKKGMZhTbrgcDwo9KdAIgOzECS6ybTC8l3PlSTpL4Ek%2F7hQNpoknvHwll%2BMw4Au4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEmADTNGqaAHNw99CrcA0GHHTjG9aBjLBFq05lGn1oqdCyoZ8Tqbwu1Cm3B5BSyq8ECrB9OgN39KlUeFg8oWEf%2BcTkaGuV5t%2BkAOjS%2B886g1Qx0lyjdCUniVnFgF3owwioY14aafICH%2Ff8bB%2FhXrZ6j3vezplVpzjsfhhBLLffXUuiPN%2FbjC7hlOuvXugjnPN1OvymL8W4Cy7Hj9NFS7N2TF5oOSzHY0YgpWt3uUHkG0tVA9N7qZ8sQikGNESCaAqxhCw2XIi4r6m6CUG4drlNpJSiiuwHny2%2F2RWD62A6OK4ACsbOwp0%2B%2FgyCbFJakn3rThnJfipqAQjZLee4L7E86VNgtWXMple%2BUMNZ9UMMogGey3NGp9gUSk9zMwMZY59kg8OsAPGJ2KlNiX%2BYkRBbAGK8Ua0UUimbw8uUx6XS9BbYo7N08XExfbYoBSP1TVH%2FW7pJ9dbiAth%2BQ5QTk%2F6hHW9dXR4TAkOEhsunzqNOUf2jSXWk6Bz79RzZAq0Im0AfMzPWPnOljoISeRfI1zsMmySfRChiKcImgGkjeXQpCYTgqPXvXleR1Mt2EjlpPNUMvWAjpy0gBDrMfMBX8A%2F4BbHkqWPFNNXD9cYe8uKDpwE00ZR2cL%2BnTtpOH7kB1P%2BUSmAG6eL3xw5hWMKf6%2FcIGOqUBqaDmghjB0kmuP3p2cDEOHws25LhbpXqQW%2BVxNLgmPDGW7fW6UheyW3ur61D6if2MmsAtNl08GpJDysPtjik1gf%2FmOX5hyd29wcdknoUAw4Nia8OUg881OppdOYpb748VZIP7t%2FLAGVrdJS6cqVlhoVY4fxzyOZggn9Axt6DAJjahcaV7LR43z2qtwdR%2BuX8OVC9NW9J9Ee3Gm4Mnk7nLfbheATPc&X-Amz-Signature=12fe1f587e8428cbe017ab3e4feefeb563139555955b19be8950b53cc126a9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
