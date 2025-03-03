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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6KLIRGY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBluv03PrJ%2BrqawPA2oCcx%2BArwoJxSf7Ey3s67fu2grwIhAONK1HoI6b8nHi7FIUtVIKkS11uFYDp%2BvlsAr2ukTzsKKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLug3K2Kwc9dBb0aEq3APUQynPQ%2BOIjvuj8eMODfgwg7rM8l14aoZTBYgPv6ix9sXgZUVXfkLrH9oGX3iGvC7H9W%2BQyRXiAR1nPiNBWA3%2BEJn6qQQLFv6JBMKXH3iP0EdTuY2l8DCUysR55qPiIlnMu0%2BM1p22G7E2qra%2BpYQhqCTWhAv7QtDkrJsIIXgmcRJ0B4GUTkc%2FNrJCj2rwVKAWORAW1qKsRhasRNHraC0iM2NOl4dzuIN%2FeBDp0G9wEpns7q3bgnT%2BcWZsdnELLabd%2FTG8AIdnMTuwbxxw3jBgGWK%2BzNUjgxNPvVnMDQaUWPmZZDN6ktNVhzOeDLORK1STPdYVbnz%2FMZ0eisT9xzxspsj1cVJkwprTGybm9S05x5NWB6TC%2BlEJS8KB%2BaGcCIc6cSxs3ZgDzGQEePACUwhRGwKIdiB7%2BUnRu0pRVv2dV5osbuLiScPacKNxmi%2Bz0gO6vytN3K5XFPS0ALZcPOZ4LdhnHGJeBRhywJMQ6v51%2FVrHH1HuJH289ZuoQuHbX3r8IwSwrywIBglWWDYFbNjPIvOdzDexkhuxd6v0Pg8e91LKakryBEkKlK%2Bb3cRFt0FT6NiE8Ml%2FJRA0lOqrqTUzvrwbSsV0DWknNQBouZPvUWIF69Alx%2B6gzdjj9jDtn5S%2BBjqkAbcVwvjreDSNp1Zt435QTGvW8U%2FFG9m0Ylku6gCaiDcI0XR8HMJZ3bsc2rzijZCDjgPPe3270Reb%2FA3BCjo0ZBo03uYVjaWkyAAbaQhTfxxY14BK%2FIhukLxHdoaB9xbftZYjXTOWw9tW3LAiPnPMLW2M1f8dhw%2BTbfGuOKGa%2BoLJq8InxwiEFEMNZiMsUfmd%2FmyhZeH%2FmYyGHn5VBFAR328V%2B8eF&X-Amz-Signature=6126a0c3c93397572048c2c309c0ff8d0900ca18d6d9853c538a62fe0dc05e15&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6KLIRGY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBluv03PrJ%2BrqawPA2oCcx%2BArwoJxSf7Ey3s67fu2grwIhAONK1HoI6b8nHi7FIUtVIKkS11uFYDp%2BvlsAr2ukTzsKKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLug3K2Kwc9dBb0aEq3APUQynPQ%2BOIjvuj8eMODfgwg7rM8l14aoZTBYgPv6ix9sXgZUVXfkLrH9oGX3iGvC7H9W%2BQyRXiAR1nPiNBWA3%2BEJn6qQQLFv6JBMKXH3iP0EdTuY2l8DCUysR55qPiIlnMu0%2BM1p22G7E2qra%2BpYQhqCTWhAv7QtDkrJsIIXgmcRJ0B4GUTkc%2FNrJCj2rwVKAWORAW1qKsRhasRNHraC0iM2NOl4dzuIN%2FeBDp0G9wEpns7q3bgnT%2BcWZsdnELLabd%2FTG8AIdnMTuwbxxw3jBgGWK%2BzNUjgxNPvVnMDQaUWPmZZDN6ktNVhzOeDLORK1STPdYVbnz%2FMZ0eisT9xzxspsj1cVJkwprTGybm9S05x5NWB6TC%2BlEJS8KB%2BaGcCIc6cSxs3ZgDzGQEePACUwhRGwKIdiB7%2BUnRu0pRVv2dV5osbuLiScPacKNxmi%2Bz0gO6vytN3K5XFPS0ALZcPOZ4LdhnHGJeBRhywJMQ6v51%2FVrHH1HuJH289ZuoQuHbX3r8IwSwrywIBglWWDYFbNjPIvOdzDexkhuxd6v0Pg8e91LKakryBEkKlK%2Bb3cRFt0FT6NiE8Ml%2FJRA0lOqrqTUzvrwbSsV0DWknNQBouZPvUWIF69Alx%2B6gzdjj9jDtn5S%2BBjqkAbcVwvjreDSNp1Zt435QTGvW8U%2FFG9m0Ylku6gCaiDcI0XR8HMJZ3bsc2rzijZCDjgPPe3270Reb%2FA3BCjo0ZBo03uYVjaWkyAAbaQhTfxxY14BK%2FIhukLxHdoaB9xbftZYjXTOWw9tW3LAiPnPMLW2M1f8dhw%2BTbfGuOKGa%2BoLJq8InxwiEFEMNZiMsUfmd%2FmyhZeH%2FmYyGHn5VBFAR328V%2B8eF&X-Amz-Signature=729dd6194f6c98067599d0ca9a72e6cd8ba5821e73a8bbeef82faa62817829fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L2J2IZP%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgqwrAt6NiJbYjmC%2FfXsP6wwOOUJJXPFER3krdOkO0%2FgIgSDDWsXO4pTEPSbLN2FUl6i%2BVfwuv%2Bhn3idxNeAKB9D8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGNI9MdhfwN11rQdSrcA%2B04rA6RdgOfkmmFuZGB8HkQz%2BLR8rYo7y7KyMPCSFhs3eww2xd0Wh2Pa9LOC9uUbJrqfBvgBZ7UFJ5j3hd6kPCzgTNJVqFuhfwR5NOB2Ik1ku6rdYWEPfFnG7i22tlAUmpV6cR0QD0MoGk9DSsZMtip1CI%2FL81GXEJ08WRp%2FG5KO5w8eHLNxwywvCjzQJvUnRsV%2FNZ7mk0IH3dPv4MAB%2Fm%2BySi3RDJMh8wGSPSL7MojDtICgIytYIFSgyrUOqddHhW6PQY%2BIp3dMsw2kvhBpDX%2B2OVpSq14U5pb55ZQme2FUiM026EN1IIk%2B2NAIiCyYjrR3qb2mrxrkgdl6ryBNX6sJ4ZFxsaIk31Jqg%2F6mPHvcZkhwYfKCpK7aypmqtgzEyDqBLGJbtNCQWa%2BoFUEoBvHEGqQVooyWkDZn%2B2%2F%2FrfQ%2Fo6jWJskcMAngm8JQmszuScV0kAVxEvz4Vw3RPsxtTpfkaNrNQxLRWH6HrU4%2BVbDAzBKLFp99QmqU%2BmPGS6az5Wx5abczCtBcnCwUJ2xI%2BjSBQhU1E3infW7%2F%2FHRzcOSUpcjPxYWBko6c4IhTuJ%2BFonQH5BcqoTFHYuDfr0RetQalSv9cYbzTAPxChpt5XY2BWkOqxOtI0Zyz3x%2FMJKDlL4GOqUBr6zaPi3KC%2FVUchNyykbLoJatZJNWKjKDG2CPgFjCwhwCzZpsFqnOowVGKkZ2N9DgB7n0GElbHY9fcF7f0NUXa83wb%2FnPmSE6jI6YSNBINUMIC5fGGpkpNkFSo%2BMeOAllNH7ZWHL22oTOwySk4FV5L4qswZ%2F5ZPycvZUk7R7mitXfLc4qSYVtdON0n1rH4A21nKHBFkEc%2BTyPrjlkaDZsW8SYV8a7&X-Amz-Signature=62a42cc50617275bbe099a23346168634df25e4e1bc027c930ec45ceb01c0417&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBWM4E5N%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM5hyjo8cTwVkcTAnr3IejecNY9DfQcoIpvrxJyCAXGAIgQXNHsxW2ku7peV205NiidcwmyhPhT%2FDABY0oltAGUmYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfPZJxaLwWhh9wP9SrcAxpsFmiM9oSDNFlzPDjZAJhMqHU9ww8PKV725KzncMtVXz%2FcW53Xrr%2BxVR1UcPw8NNZ%2BCWsfROn3SUa1gX6P4%2BMi7cjjpsO9J4wU9XH8sWIG6bxqPG%2BbksxHGFyBsZwZc8y1aUael%2BAm8rOVp7D7b7K1ZNK01LWhp983TNXJPP%2BSToflZP%2FgaSM%2Bo%2FJ%2BhaKODRg0DZrBObIK0eCbIGsdd7AWb0xQi9927ICr1lJYQoIUXklTDt8XTr10Qt8X%2BMOga%2B5k6%2BoA%2FVs%2BGkZ8eScimZ9PIKpakVzePMFddgyijuP0EaB%2FlgpvwAwIGksE%2FURGrQdFiZIUKkcURIVmA%2BDrG6GBKKWbkCSIit5fymiUH68I8jSyiODDfkpgT49TH35w0TNyG107%2F4qVheLydDNI0797RugKTyGwFFWm4W18Lda4sl1HUSmp%2BcE126GUu6NMWFwGeFBLShGkHjE3klRJf%2Bc0ckpA7sZBoGH0%2BSOlFXSYTqqD2wpAxZjPkcbVIvKDqRcK%2FTkSl8715MmHdWhoOPLLSbhYuDtYL9j4WlOu9ICz%2BHm%2FGnNmbkOCLoAZPOlnLSnQHlgKsu0gjg9POx8fVyEd24GH75nM2HFo8ReaU3gbHCJNSBSTxomsNywAMNaflL4GOqUBnpDyHWrUWYa%2F3ipjYUOBwFNUz%2Bx%2FbUftf14Yk0HMbSDujD7x3k1zcnvDIZSr5yOpXH9QFGmHQ3qci2VXSeaMMe9oqHUxqgBPTPtZoF3VXpzuACTxQzrJQBGv0DdNP9ylHs5tshlf%2BdInhJszCKW2zH3LfR7Z40zWn6Gwv5wZqTtuuA%2Fm9TVWi7X1wIwvdrfExNUacKutyiqqRYNnyiX%2F5xXuQ0hv&X-Amz-Signature=a2a42d53f0a217f73546ef4bfbf254b6091fbd194c3d3f134a8ec23d360da90f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6KLIRGY%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBluv03PrJ%2BrqawPA2oCcx%2BArwoJxSf7Ey3s67fu2grwIhAONK1HoI6b8nHi7FIUtVIKkS11uFYDp%2BvlsAr2ukTzsKKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLug3K2Kwc9dBb0aEq3APUQynPQ%2BOIjvuj8eMODfgwg7rM8l14aoZTBYgPv6ix9sXgZUVXfkLrH9oGX3iGvC7H9W%2BQyRXiAR1nPiNBWA3%2BEJn6qQQLFv6JBMKXH3iP0EdTuY2l8DCUysR55qPiIlnMu0%2BM1p22G7E2qra%2BpYQhqCTWhAv7QtDkrJsIIXgmcRJ0B4GUTkc%2FNrJCj2rwVKAWORAW1qKsRhasRNHraC0iM2NOl4dzuIN%2FeBDp0G9wEpns7q3bgnT%2BcWZsdnELLabd%2FTG8AIdnMTuwbxxw3jBgGWK%2BzNUjgxNPvVnMDQaUWPmZZDN6ktNVhzOeDLORK1STPdYVbnz%2FMZ0eisT9xzxspsj1cVJkwprTGybm9S05x5NWB6TC%2BlEJS8KB%2BaGcCIc6cSxs3ZgDzGQEePACUwhRGwKIdiB7%2BUnRu0pRVv2dV5osbuLiScPacKNxmi%2Bz0gO6vytN3K5XFPS0ALZcPOZ4LdhnHGJeBRhywJMQ6v51%2FVrHH1HuJH289ZuoQuHbX3r8IwSwrywIBglWWDYFbNjPIvOdzDexkhuxd6v0Pg8e91LKakryBEkKlK%2Bb3cRFt0FT6NiE8Ml%2FJRA0lOqrqTUzvrwbSsV0DWknNQBouZPvUWIF69Alx%2B6gzdjj9jDtn5S%2BBjqkAbcVwvjreDSNp1Zt435QTGvW8U%2FFG9m0Ylku6gCaiDcI0XR8HMJZ3bsc2rzijZCDjgPPe3270Reb%2FA3BCjo0ZBo03uYVjaWkyAAbaQhTfxxY14BK%2FIhukLxHdoaB9xbftZYjXTOWw9tW3LAiPnPMLW2M1f8dhw%2BTbfGuOKGa%2BoLJq8InxwiEFEMNZiMsUfmd%2FmyhZeH%2FmYyGHn5VBFAR328V%2B8eF&X-Amz-Signature=06648502c39a245688f1bba02033abdf35aaaec9ba412505249717941cc3f0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
