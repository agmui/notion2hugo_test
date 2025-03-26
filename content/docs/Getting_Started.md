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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU47HM3I%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI2sAOx%2FESKcC7iHDrjLk1SWZoNggfuCp5cE1OU4lilQIhALApi3EDbG%2BE%2BtPJOWP0sacAdVH0iNjiedYT1gfDFzsvKv8DCCUQABoMNjM3NDIzMTgzODA1Igx1MlvyiWCzgj8NwMAq3AM8a5d1CgNBu2E8tvdm8DK17UZmtv9WlYPf5XO1l60QK1803tkbtnWasg1VY%2FLbameLP2rKQmijQXKPlHlg2BRBhzDaZHi%2F7EI93E1rms9ZUiJ69K9XwlWfHItW0Suok67ngFKJcwzIJThOwhw5dt6slPBb8VpspVwTdfl7OgSaYrUjb1QM5dWhrmaRXeanFyUOW0W5WJGzHUX0N%2BelplkFqzYxsiElfT6MAe%2FdF1NMkZVfjXOEUdxh2Zp5hPuO2tuce1i5%2FQ%2FxVjXulZNRe%2Fexz3dpT1nIqzqxh4bbRSkiU6qMbP%2Buvokt6osu6pHXbH9sUqzUvKsxBRaWniRw0gd4GfZqdFcANd5PyVS1HFreFcznP5qQT7LgkBSRjR%2F46ih8NzRDNj2Z4LJX07R70O1fs64WyvfaGzD9gyH4IeXKxPigf46ywDMDqt8EvAJ%2FQ9xS39gevHMqZXQ7veL0CAWHNlov%2FotZMN7Ki1A93h8HxVlxpHgAGVslG2QQWdIzUBc4K%2BpTw8FcdhVijIu2kop3NodayksWgNZ4jCSb8nIVER3Sdm69xEFOrJvmEHob22cNhAaygD2CFPSVe8bxcbxdhPG%2Bt59P8Xz7ASdqP2q%2FmC2h9yRLZGyxuM6wnDDC6o2%2FBjqkAWSQQGXbvt%2BAwAQ1euBtSTrbBAd2WtH4EyDBqfxBEYvCvEFgbWPwJ1RB6j5vRhDT5BkdW2du8RetK61fwVvCqV9LMAjxdFnaWozwGTJghicX1WAqAuqrJT5IJkVeQNNHsC5sQMtEViRl0nfYQjQJwl0gxpZm0M6Jo5iDhYsijy0MAljlfD6xuHOASH0xqm1Xt0EQuh2HIDw2UAgykuKh8tSVfip3&X-Amz-Signature=b8a3b97b4ad88cf6cb09b8d14ba22af0b4a058e1760147c77077711678b8be64&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU47HM3I%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI2sAOx%2FESKcC7iHDrjLk1SWZoNggfuCp5cE1OU4lilQIhALApi3EDbG%2BE%2BtPJOWP0sacAdVH0iNjiedYT1gfDFzsvKv8DCCUQABoMNjM3NDIzMTgzODA1Igx1MlvyiWCzgj8NwMAq3AM8a5d1CgNBu2E8tvdm8DK17UZmtv9WlYPf5XO1l60QK1803tkbtnWasg1VY%2FLbameLP2rKQmijQXKPlHlg2BRBhzDaZHi%2F7EI93E1rms9ZUiJ69K9XwlWfHItW0Suok67ngFKJcwzIJThOwhw5dt6slPBb8VpspVwTdfl7OgSaYrUjb1QM5dWhrmaRXeanFyUOW0W5WJGzHUX0N%2BelplkFqzYxsiElfT6MAe%2FdF1NMkZVfjXOEUdxh2Zp5hPuO2tuce1i5%2FQ%2FxVjXulZNRe%2Fexz3dpT1nIqzqxh4bbRSkiU6qMbP%2Buvokt6osu6pHXbH9sUqzUvKsxBRaWniRw0gd4GfZqdFcANd5PyVS1HFreFcznP5qQT7LgkBSRjR%2F46ih8NzRDNj2Z4LJX07R70O1fs64WyvfaGzD9gyH4IeXKxPigf46ywDMDqt8EvAJ%2FQ9xS39gevHMqZXQ7veL0CAWHNlov%2FotZMN7Ki1A93h8HxVlxpHgAGVslG2QQWdIzUBc4K%2BpTw8FcdhVijIu2kop3NodayksWgNZ4jCSb8nIVER3Sdm69xEFOrJvmEHob22cNhAaygD2CFPSVe8bxcbxdhPG%2Bt59P8Xz7ASdqP2q%2FmC2h9yRLZGyxuM6wnDDC6o2%2FBjqkAWSQQGXbvt%2BAwAQ1euBtSTrbBAd2WtH4EyDBqfxBEYvCvEFgbWPwJ1RB6j5vRhDT5BkdW2du8RetK61fwVvCqV9LMAjxdFnaWozwGTJghicX1WAqAuqrJT5IJkVeQNNHsC5sQMtEViRl0nfYQjQJwl0gxpZm0M6Jo5iDhYsijy0MAljlfD6xuHOASH0xqm1Xt0EQuh2HIDw2UAgykuKh8tSVfip3&X-Amz-Signature=a94fa8f837a102adbd9e706d61409920fc2c63e128fd0773b3efd8096f7b264d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5KOXBVU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4XPifKhuj3ZgDCSjwoZ6GFGOx6F0e%2BnBQ8tlnogLc4AiASxGd%2FBfu1OxBMZsQRcReRK9wQBWXaXj25Rq%2F9m8pw3ir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM4A8zrhbTArpsUfryKtwDL5pS3%2F1bAdYrrZeB%2B6YJaD8MmMj10Cl0mTOFAxybjJDc1lqy7kz1KjW050OO4TQNGA8y%2BQCTcvBrKU4JtAddzmviJeCkw%2BYGpNUv%2F4WgQpoFik4un7McB06nxeChrufYzQUQ02NWlsLu4w5GNjQGU1miQoxIVm2maLLD8KaVUcUpTV9DDr6H2dp8fTk1XByAGN%2B90d09DpPE6f2PW0joSeCD1sJWxDmCsw%2BTXbNCDz5WzFRa6aLzNzVjz73zTNldNvsk2uqGMpbURM6U%2B2UEf0z30pdT93dHeNWNpwbwc1V2S0dDwGaBnXTHr6smMhPq0CwsQIc9TPlAYxryzLx3U68Mf84r4Mb%2Bt%2B8ODLeI5YD%2BUu0MVo1blQlmvBlCcuoreY%2FPuY4P%2B3Q0RJotfZ9B8lkIhXEu7PvnpWY%2Fi7j645MUUg9OyjYudpbNZ3tx%2BhWUYp7twweMg0vP2aosYCL7FJejJWgxabyJjIacIfEdXq8ZrtirL%2FjxrfIPxAra06%2F%2B4nntt0F7lF3YyHGKr1PlDKcf%2F0grMDBik60WA0GEQqHe%2B4YXiHmioJmERly3pflUWZoLpiiepOtVEOBkHacQ9Qp97wHKM5sCozNTrLfahP%2FhTfMYkGEf2lxM%2BfEwieqNvwY6pgEzBXQBTshscir8sSrgrSVeg1UQCAsPaEcZkcL2sbh31bYFpPlA6OAU9HjwWC%2FEXcdEY8DlOjPxnqD%2F6ZAywfDjDgCrcs8%2B9BEq8yfWKhISgDTcCLG6VU7EMIX%2FIRajlB4tzTlyyVrZ3karBOxznDKjpuHg%2BTzRi8fdqcut49qsbhAOjh4e2hrFNsn2Dvaz5dH9l8BjBPXH6ggdKJdhuy3MZa36ii6y&X-Amz-Signature=67afb6d82134c3360789413b8d71ed0585859cf8d514d2a304707462965c566a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHJNP2L%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMsnKBHwrHZaiDXtbTAqvjrwklSdrRrTOfJz2e%2B2uRiAiAKKuZiJB8YFTfaDel6WwCdQz7D3LZs8PRI1cS09mlXXyr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM4QGTnu1zCeZvqS1yKtwDHRVGIAjfpcxBN%2FMUs0WJxCj2OJSwciEi%2FjQAWAF6mX5o9PcoBH6JUM5aRunsb%2FahTmJ%2FPQ%2FDCCBagwOQIoh0PIKkbemDdYup%2Bs50kD8GlXQsn0Yb7K9veaY7gEsBJyPj3kooRwwXkCiDbFursONlaV5j9BDqqMjJKFQjyRDZVGwpDfwhFY2LuXfnknH6Hj%2BqL28rLwC2retgZCDzYI4nOtwKZYU30XET1swiAlG4Ju9kKT23%2FeUB6UVWhIgB10ksn%2BfHJFaCO5INHpB4RB0MfH1BcPd8Ed2AQ13ofJu09bF52BUp%2FyJ%2FdksIjywCrEnDjq2Bn1MOQlKGIEHz1pR8nPg8rSrUMPkCfZ%2BUX22RYgXo2rR8dGdAR8MRtpajNA90LE8f5o3jPz0VWTKDvZwvN0Unwwf9QcqOh3%2B1hm3utRUsbB5dIvpLTFo7T9I%2FCJ0KIusWsOJ1F8oyVnyNjTr3Dx8I%2Fzo7ivpBCpEQDXa0zAXL%2FQ%2BvwIIVkiTV2whG3FHUS%2BKA5CNjFiwiqzWhM35fHczYb%2FNJYbHMa5NWBXi7wgw8rHBpfc3DXJpLPsMZsNO8c9UTSkjXNjjSdkc5WkQMke46%2FnS%2Bl81D7I9mGSIPWhCPyNhmB1f911fgg2Ew7uqNvwY6pgGEDt7FlpjKmKxvVT3Qjjbww56tky6vg5bitnXPk30uLbmMulBIhVD2gellJBqq5OjMir0VO13%2FW1BPh%2BtBsQ6Ctb3L914D%2FPJq2lfBMHTCD%2FBVUkdidWsu645SEkygHoC4UyyLDQNay7dfJPr6uFvMTPSxSPh8HXTUwjhTdjJYw5gxE8Mj2wrdpzaleqRcZUekWZbVREhcCUrGChU3Y5RHgbEIxU3w&X-Amz-Signature=07406fc4f32922e207e0089f539d212590773c74408b924419c642f9a8e438c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU47HM3I%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI2sAOx%2FESKcC7iHDrjLk1SWZoNggfuCp5cE1OU4lilQIhALApi3EDbG%2BE%2BtPJOWP0sacAdVH0iNjiedYT1gfDFzsvKv8DCCUQABoMNjM3NDIzMTgzODA1Igx1MlvyiWCzgj8NwMAq3AM8a5d1CgNBu2E8tvdm8DK17UZmtv9WlYPf5XO1l60QK1803tkbtnWasg1VY%2FLbameLP2rKQmijQXKPlHlg2BRBhzDaZHi%2F7EI93E1rms9ZUiJ69K9XwlWfHItW0Suok67ngFKJcwzIJThOwhw5dt6slPBb8VpspVwTdfl7OgSaYrUjb1QM5dWhrmaRXeanFyUOW0W5WJGzHUX0N%2BelplkFqzYxsiElfT6MAe%2FdF1NMkZVfjXOEUdxh2Zp5hPuO2tuce1i5%2FQ%2FxVjXulZNRe%2Fexz3dpT1nIqzqxh4bbRSkiU6qMbP%2Buvokt6osu6pHXbH9sUqzUvKsxBRaWniRw0gd4GfZqdFcANd5PyVS1HFreFcznP5qQT7LgkBSRjR%2F46ih8NzRDNj2Z4LJX07R70O1fs64WyvfaGzD9gyH4IeXKxPigf46ywDMDqt8EvAJ%2FQ9xS39gevHMqZXQ7veL0CAWHNlov%2FotZMN7Ki1A93h8HxVlxpHgAGVslG2QQWdIzUBc4K%2BpTw8FcdhVijIu2kop3NodayksWgNZ4jCSb8nIVER3Sdm69xEFOrJvmEHob22cNhAaygD2CFPSVe8bxcbxdhPG%2Bt59P8Xz7ASdqP2q%2FmC2h9yRLZGyxuM6wnDDC6o2%2FBjqkAWSQQGXbvt%2BAwAQ1euBtSTrbBAd2WtH4EyDBqfxBEYvCvEFgbWPwJ1RB6j5vRhDT5BkdW2du8RetK61fwVvCqV9LMAjxdFnaWozwGTJghicX1WAqAuqrJT5IJkVeQNNHsC5sQMtEViRl0nfYQjQJwl0gxpZm0M6Jo5iDhYsijy0MAljlfD6xuHOASH0xqm1Xt0EQuh2HIDw2UAgykuKh8tSVfip3&X-Amz-Signature=91eaf1b17a8dfecd4c993140f9092bd72d307ab0bdf3a1af48d55ff11c8e53bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
