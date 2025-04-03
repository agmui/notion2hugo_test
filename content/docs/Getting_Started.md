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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5WA2WI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHTb2y3rm2S7f3CNDT1MhIVkdsALSED1z9GlPjrxFCdZAiEAjdzlZTnnbJjgoAUr3AZepraY6fXNzmA94f4Vbta%2F4RoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0gWIATdTudsF0D6CrcA02N%2BGdU%2Fo6fZbJQa9TxrhCy6fanO%2F0ZK1ocO55S6VUW5l6Hgu8TKTzTBe4WGDJ7ej9IUEiR0Awirv771%2FHJ4tmSu2AE7UJ99Cp1XmY0jJsXK6P85tSoLESbUxbrt42HFAeUBbiVErFVmdECX999jbvAFKmQ4jCmJgeOOErQTHf0gjcb%2FwXfU%2BLNBuSKfPgIF1ezFu2v%2Bpp3%2FJvdXBPAnLZtGfAeKUMYsOvlb61NWESzOTkQgAFv%2F%2FpEnSC9lb7qkYVRw1GUujcoYo29XAKa8GSAs9Y%2FEmVPYjZL1V1NbBmj1g0dK5WU8W71geNU9kadhXxv23Wjh%2Fzts6X55eMbeuC5prd4nz%2Ba3QWKckmeX3wcF4tqir5N4Hr2hbQmCuMV54lb4P0ilg9BPeZY1IBJLsAoDNeyhrcK2R97fZsja46ho8RsAbFExgqZvVBgIjX68XF4aRW8z4U5p0aoFjxp5ZnCcsfbmjiaY3%2F7ZdKaDsvJYOcTNOClfshy6x8gs53GM9Tev%2BRtZP27X6q12VCEC7TrdzRoniCtGyJttq4rLW0p2FGNIIEFebk7qhvaDcmvMlaMM7c1nM3s%2B%2BJcrlaou6FH6SgS8pYDuQNuSgbTRk1lPaDo5xx4o5r9Pa%2FIMJKuuL8GOqUBQd3%2FroshObaak%2BpiXjJ6woj5UNHTMBpYPXO1Ln%2B7APW92zpgaHR66o%2BJuCEO5NOd0GlvB0VOrXQ8zxVcGADPqStDdTwdmyS13UFtf6LZ7ZzJeJOvKaMJ4vWI%2FV0AvCDcUubtxXgMoDo%2FURpfOxinav302iV%2Flqsd13ccCzw39xlT3azwyp3UPgpoZ6FatdKhbJdX7sAL0QabFiiMiHTxU%2FBJhTUk&X-Amz-Signature=8fd243007b389a9da31d3b0171a0b901c61c2d7eb54ce611c077bc0f603b7ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5WA2WI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHTb2y3rm2S7f3CNDT1MhIVkdsALSED1z9GlPjrxFCdZAiEAjdzlZTnnbJjgoAUr3AZepraY6fXNzmA94f4Vbta%2F4RoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0gWIATdTudsF0D6CrcA02N%2BGdU%2Fo6fZbJQa9TxrhCy6fanO%2F0ZK1ocO55S6VUW5l6Hgu8TKTzTBe4WGDJ7ej9IUEiR0Awirv771%2FHJ4tmSu2AE7UJ99Cp1XmY0jJsXK6P85tSoLESbUxbrt42HFAeUBbiVErFVmdECX999jbvAFKmQ4jCmJgeOOErQTHf0gjcb%2FwXfU%2BLNBuSKfPgIF1ezFu2v%2Bpp3%2FJvdXBPAnLZtGfAeKUMYsOvlb61NWESzOTkQgAFv%2F%2FpEnSC9lb7qkYVRw1GUujcoYo29XAKa8GSAs9Y%2FEmVPYjZL1V1NbBmj1g0dK5WU8W71geNU9kadhXxv23Wjh%2Fzts6X55eMbeuC5prd4nz%2Ba3QWKckmeX3wcF4tqir5N4Hr2hbQmCuMV54lb4P0ilg9BPeZY1IBJLsAoDNeyhrcK2R97fZsja46ho8RsAbFExgqZvVBgIjX68XF4aRW8z4U5p0aoFjxp5ZnCcsfbmjiaY3%2F7ZdKaDsvJYOcTNOClfshy6x8gs53GM9Tev%2BRtZP27X6q12VCEC7TrdzRoniCtGyJttq4rLW0p2FGNIIEFebk7qhvaDcmvMlaMM7c1nM3s%2B%2BJcrlaou6FH6SgS8pYDuQNuSgbTRk1lPaDo5xx4o5r9Pa%2FIMJKuuL8GOqUBQd3%2FroshObaak%2BpiXjJ6woj5UNHTMBpYPXO1Ln%2B7APW92zpgaHR66o%2BJuCEO5NOd0GlvB0VOrXQ8zxVcGADPqStDdTwdmyS13UFtf6LZ7ZzJeJOvKaMJ4vWI%2FV0AvCDcUubtxXgMoDo%2FURpfOxinav302iV%2Flqsd13ccCzw39xlT3azwyp3UPgpoZ6FatdKhbJdX7sAL0QabFiiMiHTxU%2FBJhTUk&X-Amz-Signature=d011238d073117a7c0f6d997da15172566c17d7e36c33de3697c45dd1f857e31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNTOKXK%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHLuQEUWGQtcVTy0eSvFaydgQtQ2SKrs%2Fu3R3HElhqPIAiEA%2FVhfEwQ4TF5EKHBX1OoMaEsawvYfW8%2F3%2BsH6pB88Qv0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyRnbp8%2FBaXmaraQircAxNUWaXcVXqaOGyJTuwPmanfLLBoaH6%2BbxZ0IUTavQk7%2F0LJnhiVfrtlfcOOXljMFTmFRl3V8dL6aZb%2BVgE53I%2FHCzB9BYsb8woMAwSnN3qfeLvRnWS7HnCZzSIshha3KCyM1m1crwb4gsBIJ7ShFuPatUPN5JhL6bVlRmKbCbmFyxsvc9jCLtqg0CEUX4sm6aPbssC%2BA5Z1Yo9o0FhUUGR5QidAjbK8Z7XbuXa8bmIVnBvrMKn9Tb8eE1SVIXbA4tA4LfexKYlThlvFQOaOWtOQAsjAFdQXr8%2B0fZRIHyntyogMtBvwAu3GCik5zM9WBIHxvWlJNEZRFPw7ES%2BDNwpYxPAsKweQJOdaz0GyP1UyBfj%2BURWgqeGn8Xwiw0hG%2FZX%2FwHDRr2LC21YVOhduzJpXAhrgC0ILYOKQuLjNs7ygi20WplXyPyzlnArY7TuDAiLcBO1tWl0ALk99qvf4rn%2BP%2BkFKLZMXqQzFxina9nlSXdIJZEUmVb6NyKk3vvbU7cO757ANIHwJnScmNgkbmtRYmNRwWvp4ghnVf3pdCb%2BkiFALMHMJPskch%2BvxbukwMSIgEG55lCqm9v5QkGflNeBNycgF%2BeZ%2B3NVGvTukApndm6hXe5dacgSKT1VRMOuuuL8GOqUBpiHmPROKjeAKv0EOprECanq64p08ej0g%2BJuhTC5fmOZ70lOjIQzf8psFgDozoHwxD9dFmIFgqeKgR7AfKJPOCCalbQAPnie9IrxPPKAG7GTWvWgcvgplc0yhvILSqTDXE1DQ45no6P0P17mfrbHXzPuQIgl8EYJqzL1KnwUE5VCvg1AUOGP%2BXNbWPpfJxqQUvyVS1XdB8%2BK4ULRdfyn%2BA%2BiPjFPY&X-Amz-Signature=63d4a9935cfb7d2276e2c4f104b77bb31c0bf50bee4fd892de27af2146c4bd3a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D7OXCTO%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDD3S%2BzftSHuk5phaqT3YzTTJOdwgn3yz7qBHlJwlBR9AiARdU9tso5AGpH%2BRmFtRdD0tcd4SnNYN%2F%2F8Ph2R%2FiPkHiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS6idN%2F%2FCi44RIRrtKtwDhZAd3fkJFz6al587phNsyaGORuvu5oBYXI0noZDzmw8Yb3Y4taa7PA9ElrgW1qpKMRJ38CFGL6MPGPYs3MGyRE4X8L%2B8TBLGTa66ueLvthAbgQwVkrzZ%2BX%2FRO4vpvxhtug573W9i1X7EYrkgFNOlJ1EhhLkyjrFqKY17rOrishB%2BQRWPEMgQD%2FcJmCCTnbQzbJdXmQ1xIfCYvM3bJG6ue%2F0x0LGn0hVT4OQwt%2FZt%2FCmyB9tu8wZ6OGzfAKVQVGAQQac11To%2F7bThmF29nSqmESq39Q%2BZDhrJohcEuPdZGtg8FyewOTOjqkQCkzdnxqgbWAhnhMTXechqvfV8D01aQCs1o1epHZLYMwWzh3csLS6ySULJaAyjc6rWa0N3YOyKonqK5g3pJvNVKhrIAMEqdZfifLYziPmYRGfHTtjubZgdLtRTs%2FX999er3730lJ4BAK4oclpRZVihKlrVRnd%2BYFNOkLWgUDQe7aKf25quYZenWSAsnxzBR6PKeFSyR6qKJzAB3rs9XZZvJVpN8wTH7XVXQ1A3lO%2FgX8CQxBeeyvcBAMMiScAO%2BPUMaFD%2B9oQtov2wmk3qjtGPIN40qPXOYHT5Apy%2FYVLKCQCENFKGuM79HUXdGaLNP4k%2BV3Ew1664vwY6pgGhZl12T%2B2Bx81MEP2HxyABdZWRdneDDSoXRSInTfWvnU%2BnA9OJNw6ftZNj%2Bn%2Fbnf1MzFobsL%2Fu0u9WrXQ5CZcOu5KSRh96T2zauBgTLp5DQvRWbxaZQqQndy2nMdYtEfH4vKd10GZrhJ8f0fLgi0ufm6rfeMhXoW64se101jsPsYxHFo%2FZO6E9unzdfQq7xvwqZAerel%2B6snPUI36dtyYdhRLpnL4T&X-Amz-Signature=17d9dbb76a23e48541620ac12fcb7ac8796ade12fd46ec56d4f100a489aaf445&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5WA2WI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHTb2y3rm2S7f3CNDT1MhIVkdsALSED1z9GlPjrxFCdZAiEAjdzlZTnnbJjgoAUr3AZepraY6fXNzmA94f4Vbta%2F4RoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0gWIATdTudsF0D6CrcA02N%2BGdU%2Fo6fZbJQa9TxrhCy6fanO%2F0ZK1ocO55S6VUW5l6Hgu8TKTzTBe4WGDJ7ej9IUEiR0Awirv771%2FHJ4tmSu2AE7UJ99Cp1XmY0jJsXK6P85tSoLESbUxbrt42HFAeUBbiVErFVmdECX999jbvAFKmQ4jCmJgeOOErQTHf0gjcb%2FwXfU%2BLNBuSKfPgIF1ezFu2v%2Bpp3%2FJvdXBPAnLZtGfAeKUMYsOvlb61NWESzOTkQgAFv%2F%2FpEnSC9lb7qkYVRw1GUujcoYo29XAKa8GSAs9Y%2FEmVPYjZL1V1NbBmj1g0dK5WU8W71geNU9kadhXxv23Wjh%2Fzts6X55eMbeuC5prd4nz%2Ba3QWKckmeX3wcF4tqir5N4Hr2hbQmCuMV54lb4P0ilg9BPeZY1IBJLsAoDNeyhrcK2R97fZsja46ho8RsAbFExgqZvVBgIjX68XF4aRW8z4U5p0aoFjxp5ZnCcsfbmjiaY3%2F7ZdKaDsvJYOcTNOClfshy6x8gs53GM9Tev%2BRtZP27X6q12VCEC7TrdzRoniCtGyJttq4rLW0p2FGNIIEFebk7qhvaDcmvMlaMM7c1nM3s%2B%2BJcrlaou6FH6SgS8pYDuQNuSgbTRk1lPaDo5xx4o5r9Pa%2FIMJKuuL8GOqUBQd3%2FroshObaak%2BpiXjJ6woj5UNHTMBpYPXO1Ln%2B7APW92zpgaHR66o%2BJuCEO5NOd0GlvB0VOrXQ8zxVcGADPqStDdTwdmyS13UFtf6LZ7ZzJeJOvKaMJ4vWI%2FV0AvCDcUubtxXgMoDo%2FURpfOxinav302iV%2Flqsd13ccCzw39xlT3azwyp3UPgpoZ6FatdKhbJdX7sAL0QabFiiMiHTxU%2FBJhTUk&X-Amz-Signature=eec66c131188e1ac34ddc8669c03fcd07e5c93edbc0a2045b6bf31d79df677e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
