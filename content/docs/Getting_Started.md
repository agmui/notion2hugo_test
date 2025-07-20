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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIUKYV7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx3EgGWGXxeAHYSBMJsxVxFcgi3J6Z33ycgt89sRcFgIgRQM64vR8N32s0GVImK1znfbxgzcAbowoKSWxHpeEP3cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjbHNOVLhLsrWGPIircAzqvsfNfkV3sbSPuRFT6iK3N0hPfH%2FZgGpCeYlBqJwmMfSEBQUOYUTuxoEB4QejKQt6imG98jELxH9lRTnURMFY8mCk7x2STjNjOQtsigJ0OWoXbSJiHTr7XJV9NpXiDn%2B9xzLt40O8%2FEM7Lp26QJZqT%2FtvC%2FVz3nmNkDF%2BErOHB6jFjcGjJuKEK%2F%2B0izStwiN7qXnBkrdGQwO9DOkEOXJMjvk9o6caFUjEd%2F3jzZo%2FzTPYFW2Ccf5iuoWGm85BmlNVUeV7HxmGvTteu4mNfXpajxzy2DoxOgL4Ru5%2FOKSOaCzCuGwEDbSbUYlxE57Lj7ZhlZk9eEjT4YH9yxW74s7BYR3qWvMJ%2BIukzS0p53RRRW44SbTR3X02JnKftZsivAgHlXFPuZ27otAK%2BK9by%2FztDe4fRc3xTSRoO0BJzttagsuh%2BEW8jbC3GfTg5tsuKRlwi9L2I7hByKmPLGcHcnJNYkO4JE4tgCGYidaia86H%2Fj3BD7qptGn5pSgyRKn6NXJw4kWk8DbhUiAFret%2BYpI3hvmKiacuYtLDVNykdmCiA%2BjrIR14YgDSTS3PgQZMg%2B9RyknIPOVxQkg6pSgFGzFgcIyvqc1f2w0emIyZKDbzzUD76TuoE5WEiT009MOi%2F8sMGOqUBmtJ5ZGU4uACtqIGUCUGxaZhW1L6N2UZiY2oF95KDi8YtbGiGWmBZqxMV9K0ZmY8IW%2FB6zATS5VCLTeoUP9QK%2FgXTNODnC8O2M6u88fHyc0rbjPsQGEn6BL%2FYHTjJJeD69XwO0Eg2JLr7YAp2NsyYpZh2Bu5813r0YWpXs3cGoKWzm48McTIFxGRDDlrhjT0n4kcW9%2Fh%2Fu%2BG26JNsJqP6YGUtelHs&X-Amz-Signature=c145a411b293168299e9e9693d6ce70942882dc7b534f7bc6f03d9ec4fa564d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIUKYV7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx3EgGWGXxeAHYSBMJsxVxFcgi3J6Z33ycgt89sRcFgIgRQM64vR8N32s0GVImK1znfbxgzcAbowoKSWxHpeEP3cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjbHNOVLhLsrWGPIircAzqvsfNfkV3sbSPuRFT6iK3N0hPfH%2FZgGpCeYlBqJwmMfSEBQUOYUTuxoEB4QejKQt6imG98jELxH9lRTnURMFY8mCk7x2STjNjOQtsigJ0OWoXbSJiHTr7XJV9NpXiDn%2B9xzLt40O8%2FEM7Lp26QJZqT%2FtvC%2FVz3nmNkDF%2BErOHB6jFjcGjJuKEK%2F%2B0izStwiN7qXnBkrdGQwO9DOkEOXJMjvk9o6caFUjEd%2F3jzZo%2FzTPYFW2Ccf5iuoWGm85BmlNVUeV7HxmGvTteu4mNfXpajxzy2DoxOgL4Ru5%2FOKSOaCzCuGwEDbSbUYlxE57Lj7ZhlZk9eEjT4YH9yxW74s7BYR3qWvMJ%2BIukzS0p53RRRW44SbTR3X02JnKftZsivAgHlXFPuZ27otAK%2BK9by%2FztDe4fRc3xTSRoO0BJzttagsuh%2BEW8jbC3GfTg5tsuKRlwi9L2I7hByKmPLGcHcnJNYkO4JE4tgCGYidaia86H%2Fj3BD7qptGn5pSgyRKn6NXJw4kWk8DbhUiAFret%2BYpI3hvmKiacuYtLDVNykdmCiA%2BjrIR14YgDSTS3PgQZMg%2B9RyknIPOVxQkg6pSgFGzFgcIyvqc1f2w0emIyZKDbzzUD76TuoE5WEiT009MOi%2F8sMGOqUBmtJ5ZGU4uACtqIGUCUGxaZhW1L6N2UZiY2oF95KDi8YtbGiGWmBZqxMV9K0ZmY8IW%2FB6zATS5VCLTeoUP9QK%2FgXTNODnC8O2M6u88fHyc0rbjPsQGEn6BL%2FYHTjJJeD69XwO0Eg2JLr7YAp2NsyYpZh2Bu5813r0YWpXs3cGoKWzm48McTIFxGRDDlrhjT0n4kcW9%2Fh%2Fu%2BG26JNsJqP6YGUtelHs&X-Amz-Signature=5a84c20e870f414365e2141d97453041c1207112d6294f4772ea4a8b6829eab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIUKYV7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx3EgGWGXxeAHYSBMJsxVxFcgi3J6Z33ycgt89sRcFgIgRQM64vR8N32s0GVImK1znfbxgzcAbowoKSWxHpeEP3cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjbHNOVLhLsrWGPIircAzqvsfNfkV3sbSPuRFT6iK3N0hPfH%2FZgGpCeYlBqJwmMfSEBQUOYUTuxoEB4QejKQt6imG98jELxH9lRTnURMFY8mCk7x2STjNjOQtsigJ0OWoXbSJiHTr7XJV9NpXiDn%2B9xzLt40O8%2FEM7Lp26QJZqT%2FtvC%2FVz3nmNkDF%2BErOHB6jFjcGjJuKEK%2F%2B0izStwiN7qXnBkrdGQwO9DOkEOXJMjvk9o6caFUjEd%2F3jzZo%2FzTPYFW2Ccf5iuoWGm85BmlNVUeV7HxmGvTteu4mNfXpajxzy2DoxOgL4Ru5%2FOKSOaCzCuGwEDbSbUYlxE57Lj7ZhlZk9eEjT4YH9yxW74s7BYR3qWvMJ%2BIukzS0p53RRRW44SbTR3X02JnKftZsivAgHlXFPuZ27otAK%2BK9by%2FztDe4fRc3xTSRoO0BJzttagsuh%2BEW8jbC3GfTg5tsuKRlwi9L2I7hByKmPLGcHcnJNYkO4JE4tgCGYidaia86H%2Fj3BD7qptGn5pSgyRKn6NXJw4kWk8DbhUiAFret%2BYpI3hvmKiacuYtLDVNykdmCiA%2BjrIR14YgDSTS3PgQZMg%2B9RyknIPOVxQkg6pSgFGzFgcIyvqc1f2w0emIyZKDbzzUD76TuoE5WEiT009MOi%2F8sMGOqUBmtJ5ZGU4uACtqIGUCUGxaZhW1L6N2UZiY2oF95KDi8YtbGiGWmBZqxMV9K0ZmY8IW%2FB6zATS5VCLTeoUP9QK%2FgXTNODnC8O2M6u88fHyc0rbjPsQGEn6BL%2FYHTjJJeD69XwO0Eg2JLr7YAp2NsyYpZh2Bu5813r0YWpXs3cGoKWzm48McTIFxGRDDlrhjT0n4kcW9%2Fh%2Fu%2BG26JNsJqP6YGUtelHs&X-Amz-Signature=1e208ca4a9cb197665698afd6f13ce560a82401fa6bc6c874c8a0464b03bc909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXM5GC7I%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICF1AknR%2FI%2Fu4GliJYF86bmH58M7QGJLrp7rVjTVADmWAiABwPybTzaOZyP4PIH1gS%2FxbdoQ7J%2Bgql92KnIBPNasHCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGCBC7XQEiiexU8QlKtwDKROdhja09LPUw2A%2BULXSIy3mFjqdm%2BtBa5sEReWkuhRAGubnuFqbk9TpprLPntrOuexS%2ByUL%2B1QBACCBqCk%2Fnj5bUsvuiiyJrRhS8tqaPwEBB5zW%2Fq%2FLIm%2BumHUCKb3E14byhQau6q9vM9AxUIlXerwYe3l64fhEJ%2FWyhr8BsiBJtGJ3ytzxVAywB8Taqp3UjSIbHBXvM19YYkSV1LFIZPfsWuHvhFtENruwCVPkkBbnR92gxImt9m8edVN3084OxiH7NlRP7ea8J73PKIqXfvh71tOhsbwBFqgCr%2Fbs%2BwVeBH7G%2B%2BLOjOduCX3BSxTcJ6uPRPgGeNRBQVjLItkaOVX2fAdgJrP9qljJUp9pnsP82GmoA%2FC5lkoLYWux301vsmSTOv59g%2F6CH0kNmG0AN6bF9JiZ0wxgC884ewNYcVgddH%2BMariANaNpbYMKVvXkGGGOUWQBNld9tqkonLJxyyltzwMMoIIo%2BeMITSk%2B3TZsFSRR5WJrO20FDz4vkuk2WCFfXpTkrM6bTUF%2B5OYNFPdyH2wHPUcnufAieD%2BMofaAEQM6yp4e1bPsgZuNqnSi18bxHMyV%2B0K%2FkHLz0H%2FVrJ4f3Lsol3sGDK%2BlCoc4KPXB%2BxoF6GnYSP%2FOVGsw8bjywwY6pgHLfdZfXKgsQY61YJDilGdrbJ0gmGO6Pnk2PfWvHLeG1dMrDJa%2FhsFfEo5xs8iaaLy6olouhUAzHFeciGtV0QGy6ZRok%2FT%2BP8mZtxrskNsMizn2exxd2iFW7naknnBCfEIaCvdj4OsOwRiYSqKYmJWm769QrHz5iBFBw%2BpOaS%2B9USTs5pRGtpXPdjQIRPtTyXtWF72DLik4yeve7GuDZRHBb74P3sax&X-Amz-Signature=de0c42782df90826b665f0b9f97df89288e48f7a651a764b64819d3733bd8367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF53CBY7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3ATlVL77Rd1KpGeAM3mBC3wiWdIoxXTCDWHaxmXhv9AiEAmqAX%2FN70zZEk6e7%2BYUkYcfaBFXC1GWT5ByZhCx%2FqUAoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcfmRvZFfP68LF94CrcA4HJzi1DgbvllayhxcID662u182Tx%2Bt%2FGqQI%2BIBQauxXanAsV2jAxCbw5%2BubRbMe%2BxYa5whLQKI%2F6PdtuR2lE0e3CsZ%2Fbr0WmTKJbiISJ4qVHdnfW86Faj5FVV4JAmSqeLQ9XQWCXWT8k7uj3Z2S79dRozEBSU9pgoAyQT0gjS8Z3wYeoH6JqaNJ%2B2I9l094hXAeMdMYmpmNscTrobfVYZmUqTrKmpcRHAvucWZoQbEho2o9%2BJTutBWzx6TpZKpXo5sUo%2FGP%2FNJCzk%2BDfVY9isexnV1hKuCTfpqaYAAyDPSjdrd9c7UtTczdyVfxM09%2FpYV7K0fdm3T4Oi5EmZhatoZUKsPymvBO3cG975Nj0HeVgjOTIrPGix%2FCvwcgONEGNT8JGPPEXKLN6KK9wJa2be%2FnTTiDZanOvGF15rWLm%2FYN8ctRHLtJhShh%2F0wolCosH%2BrD9VUAhxuY8UcKsGY5Qs9NT%2B8vMq2BLO9KbUHjo4z%2BcRGFaWjK%2FtihYcDWs9ELnAxmw6t2XZhN5SFve1wYRVYN1LzW%2B6sVsTQ1Np1nBahDxdkJnS0Rbc9j7%2Ftugx85hGdY3ThPSAg2vDkE3wvWDTFAg%2BSONdgXIWh%2BPgeEl7wFResTd4p3KAI3TdJdMKbA8sMGOqUBMP%2B6hHUHAHqw1%2FDd9xBaMpAx9gdcHOHv5q6AR37119KZr30ScHsiqYa1xNnwJL5bjEpSyYlAxh5AWioc8dv4w2RMF1B7RbD%2FlDh%2BsWVtmMzeNZRvHw1NBtyL235eIjSq7zjkh0eWtn6OjaefUVze4BnTAziqpVcsFMaE376HvWu17dpQQHG6pU4P05kws%2FJvTZEPn%2B2gynZQopOYBYScB3896mCP&X-Amz-Signature=04d3b9e1d2104c625a41a37ee134a8332d3a1f223d0c5bea9d4c8f4cad1e4b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIUKYV7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUx3EgGWGXxeAHYSBMJsxVxFcgi3J6Z33ycgt89sRcFgIgRQM64vR8N32s0GVImK1znfbxgzcAbowoKSWxHpeEP3cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjbHNOVLhLsrWGPIircAzqvsfNfkV3sbSPuRFT6iK3N0hPfH%2FZgGpCeYlBqJwmMfSEBQUOYUTuxoEB4QejKQt6imG98jELxH9lRTnURMFY8mCk7x2STjNjOQtsigJ0OWoXbSJiHTr7XJV9NpXiDn%2B9xzLt40O8%2FEM7Lp26QJZqT%2FtvC%2FVz3nmNkDF%2BErOHB6jFjcGjJuKEK%2F%2B0izStwiN7qXnBkrdGQwO9DOkEOXJMjvk9o6caFUjEd%2F3jzZo%2FzTPYFW2Ccf5iuoWGm85BmlNVUeV7HxmGvTteu4mNfXpajxzy2DoxOgL4Ru5%2FOKSOaCzCuGwEDbSbUYlxE57Lj7ZhlZk9eEjT4YH9yxW74s7BYR3qWvMJ%2BIukzS0p53RRRW44SbTR3X02JnKftZsivAgHlXFPuZ27otAK%2BK9by%2FztDe4fRc3xTSRoO0BJzttagsuh%2BEW8jbC3GfTg5tsuKRlwi9L2I7hByKmPLGcHcnJNYkO4JE4tgCGYidaia86H%2Fj3BD7qptGn5pSgyRKn6NXJw4kWk8DbhUiAFret%2BYpI3hvmKiacuYtLDVNykdmCiA%2BjrIR14YgDSTS3PgQZMg%2B9RyknIPOVxQkg6pSgFGzFgcIyvqc1f2w0emIyZKDbzzUD76TuoE5WEiT009MOi%2F8sMGOqUBmtJ5ZGU4uACtqIGUCUGxaZhW1L6N2UZiY2oF95KDi8YtbGiGWmBZqxMV9K0ZmY8IW%2FB6zATS5VCLTeoUP9QK%2FgXTNODnC8O2M6u88fHyc0rbjPsQGEn6BL%2FYHTjJJeD69XwO0Eg2JLr7YAp2NsyYpZh2Bu5813r0YWpXs3cGoKWzm48McTIFxGRDDlrhjT0n4kcW9%2Fh%2Fu%2BG26JNsJqP6YGUtelHs&X-Amz-Signature=798704e9b70e7a21079c234ecfb8c646a2e2ca65a898b7dadce485988ff2a080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
