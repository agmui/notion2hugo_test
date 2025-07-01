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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UW6ZKZN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwf2rLHzU3xxyAcndLq%2FQsPsVei3ndL%2Bd3CxDvRHFR9wIgXaK4Hu85gvysk4TNXEsE7%2FYpFo15VYrFSX7aV%2FS%2FiZwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP49fMZ9QLl14cdVCrcA43TsrK%2FClGj598Bz8nR9PyaDW25k6C4lXWLbosthaAfbqDwRSm5RaChSKZNxHzOnYt2qqkH4LMnOX%2BCBOQGqPEMgU%2BjIVjlpQlG7n0WThHEHDXQkADdWIiawPIRNZEK8pS5l%2FM8TGi%2Fkww4lNV5ecE0GTHrLpNZIuoPiOdqbF%2BFblfpPIJETDXsHFaFe4tZ7a30uM4NoJsvgUP3at2RKi1R0ALPewgOzVagJSeFZIkhNc5PXmQ%2Bewi3Oeve7C3B6Op0ALlHbobC%2F8PLGCJ03oQc4n2deNM55FSzHPc9lsaLfjDM3Zk%2B7yXfjKf46hYKttOzRDiOiFV%2BF7g7ozuO6XXdzmP2S8qyBjgVF4yyvP17WEFNRHHmtLP1358kDDoQzsKJzKCK8Ofql0gcBoki1IY8BMslCx0omqceCYjldig08maWk2%2B8JNJC0Ejp%2FW0ptdXv70MhJg84u%2F8WmE%2BXWHjLjnFZ4S%2FTwDatm4i%2BR219y4mM3KUg%2F66N%2BcQvyY4gTmKDNKLK4TEMcEhhWwgbGGPOUJzFvg%2FkcRRT8kDwYSP15SatxpF9eA2FU35iwYbcj4bLZM7Q37Ym9MGw3yl7KSrbAZTJz8x5Ez8nn0ZF%2FzpMdztsUP%2Bpj6s1GDSfMLzOjsMGOqUBuoxoLSo5px1GiKfAJFh5YCp9D6dllBb3md%2BTrcvKrms%2Fn8pAF5O4qmu1hseAclK1PFVHrqBYndQzyUEBNh0sy139qANJ3oJuJ9EiWqkU5aG6t51LLBqteSovA9WUSdxQv%2BZp1%2FX4v4sVP05ZxXsdZuEehwBpHurpszJWVnZ3kFhwvrlOgtFGrerozepDjpyjBe28XkRy8kslZrlltRMnO%2FkgW7Ky&X-Amz-Signature=7e7aa55a926a10793704e6df6a78235b1586e666741eeeb23c84fe27fbc63662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UW6ZKZN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwf2rLHzU3xxyAcndLq%2FQsPsVei3ndL%2Bd3CxDvRHFR9wIgXaK4Hu85gvysk4TNXEsE7%2FYpFo15VYrFSX7aV%2FS%2FiZwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP49fMZ9QLl14cdVCrcA43TsrK%2FClGj598Bz8nR9PyaDW25k6C4lXWLbosthaAfbqDwRSm5RaChSKZNxHzOnYt2qqkH4LMnOX%2BCBOQGqPEMgU%2BjIVjlpQlG7n0WThHEHDXQkADdWIiawPIRNZEK8pS5l%2FM8TGi%2Fkww4lNV5ecE0GTHrLpNZIuoPiOdqbF%2BFblfpPIJETDXsHFaFe4tZ7a30uM4NoJsvgUP3at2RKi1R0ALPewgOzVagJSeFZIkhNc5PXmQ%2Bewi3Oeve7C3B6Op0ALlHbobC%2F8PLGCJ03oQc4n2deNM55FSzHPc9lsaLfjDM3Zk%2B7yXfjKf46hYKttOzRDiOiFV%2BF7g7ozuO6XXdzmP2S8qyBjgVF4yyvP17WEFNRHHmtLP1358kDDoQzsKJzKCK8Ofql0gcBoki1IY8BMslCx0omqceCYjldig08maWk2%2B8JNJC0Ejp%2FW0ptdXv70MhJg84u%2F8WmE%2BXWHjLjnFZ4S%2FTwDatm4i%2BR219y4mM3KUg%2F66N%2BcQvyY4gTmKDNKLK4TEMcEhhWwgbGGPOUJzFvg%2FkcRRT8kDwYSP15SatxpF9eA2FU35iwYbcj4bLZM7Q37Ym9MGw3yl7KSrbAZTJz8x5Ez8nn0ZF%2FzpMdztsUP%2Bpj6s1GDSfMLzOjsMGOqUBuoxoLSo5px1GiKfAJFh5YCp9D6dllBb3md%2BTrcvKrms%2Fn8pAF5O4qmu1hseAclK1PFVHrqBYndQzyUEBNh0sy139qANJ3oJuJ9EiWqkU5aG6t51LLBqteSovA9WUSdxQv%2BZp1%2FX4v4sVP05ZxXsdZuEehwBpHurpszJWVnZ3kFhwvrlOgtFGrerozepDjpyjBe28XkRy8kslZrlltRMnO%2FkgW7Ky&X-Amz-Signature=2a0aaf979012e8dfcffa9834e496bafe5dc3e5dc0da6363349825cc308836fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UW6ZKZN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwf2rLHzU3xxyAcndLq%2FQsPsVei3ndL%2Bd3CxDvRHFR9wIgXaK4Hu85gvysk4TNXEsE7%2FYpFo15VYrFSX7aV%2FS%2FiZwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP49fMZ9QLl14cdVCrcA43TsrK%2FClGj598Bz8nR9PyaDW25k6C4lXWLbosthaAfbqDwRSm5RaChSKZNxHzOnYt2qqkH4LMnOX%2BCBOQGqPEMgU%2BjIVjlpQlG7n0WThHEHDXQkADdWIiawPIRNZEK8pS5l%2FM8TGi%2Fkww4lNV5ecE0GTHrLpNZIuoPiOdqbF%2BFblfpPIJETDXsHFaFe4tZ7a30uM4NoJsvgUP3at2RKi1R0ALPewgOzVagJSeFZIkhNc5PXmQ%2Bewi3Oeve7C3B6Op0ALlHbobC%2F8PLGCJ03oQc4n2deNM55FSzHPc9lsaLfjDM3Zk%2B7yXfjKf46hYKttOzRDiOiFV%2BF7g7ozuO6XXdzmP2S8qyBjgVF4yyvP17WEFNRHHmtLP1358kDDoQzsKJzKCK8Ofql0gcBoki1IY8BMslCx0omqceCYjldig08maWk2%2B8JNJC0Ejp%2FW0ptdXv70MhJg84u%2F8WmE%2BXWHjLjnFZ4S%2FTwDatm4i%2BR219y4mM3KUg%2F66N%2BcQvyY4gTmKDNKLK4TEMcEhhWwgbGGPOUJzFvg%2FkcRRT8kDwYSP15SatxpF9eA2FU35iwYbcj4bLZM7Q37Ym9MGw3yl7KSrbAZTJz8x5Ez8nn0ZF%2FzpMdztsUP%2Bpj6s1GDSfMLzOjsMGOqUBuoxoLSo5px1GiKfAJFh5YCp9D6dllBb3md%2BTrcvKrms%2Fn8pAF5O4qmu1hseAclK1PFVHrqBYndQzyUEBNh0sy139qANJ3oJuJ9EiWqkU5aG6t51LLBqteSovA9WUSdxQv%2BZp1%2FX4v4sVP05ZxXsdZuEehwBpHurpszJWVnZ3kFhwvrlOgtFGrerozepDjpyjBe28XkRy8kslZrlltRMnO%2FkgW7Ky&X-Amz-Signature=ffc4890678c26c14845ada574d16a7968add4792532bc94c89cce898f3c951f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBY7WWF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2ymryzP8m77zARaJKkwAzhPc09bc2pLpDNppI2IJ3sAIhAIsW%2Fv8xzailAwNwtGUt%2FaDCjjiQNBF9QRvGmCjN39WUKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9K5thGz8OyOpfDBYq3AP5w70quNflhoBXOlW4VqM%2BG2MXUNoWO7TQW5lOMiDwrCgpg0%2FEzp7dJYiemHYYzjRsxeGeh74S7rRhqr4gJK3r3iQFVkYMvrneGlyDv1yRuiR6gerXYbhwk8luRXAW1C2yevhMgZ5SVS5%2BiFwBFh0LfoIJ6zvHFwJOL9xlLyLZ9IkNTH6kpLwbPdIwJPLrc7karoqS1MahR5YT1jTkEBlZmKT7QFuRkW6kEKpTy1e7hv4gIi5e1ezXR3VkRH%2FxDCueQyORvWNCsvI1fitGhLNOFxVVd%2FoTFGIRwN1oXd%2FocqWftphhbCRDtgnsP%2F1%2FqBx7S%2BruNM6Mk7Lq%2B0OtI5kxA2fTJ5tcUbYpt2pzJdDquQj7831Y6Ht5Q7kIpYFQk9jM1q9UatYsYcjii3xIZ1wFtNkt38ZCttzOUE8jopmgQ97dYE8uw54SzxBszslpAI6xzY%2FdQslNqgK86ywvi7vfxcRpIKEAfeJDDOTYdE2YQRheCLPfZM36CcYtM3AHBko0seljsRhGR%2Bgf4yqs%2FiVDvZzmBZ6M9cJKDOach7rDtTNdJygOKTCSa9d7a%2Bosgbyz5ZiPCO8ogtPFhN6jlHzD5pUGGF7BwT3TAFxoPAcOF1M%2FnV11tJ294t2ueDCUzo7DBjqkAcvRKc9TBqHFTdpwgBsa2rexdzCUg7uw1TasP2FS0lftxdscC2Hw%2FZnJrkSAfhrPaLTMNhrjy3J8w42uDGO8FQ%2Fbyl31hjhCI2POWQ3VWdkbwgWb1bu7%2FOmPk98qZabjvDl7NM9%2BlbkUdyqmZIYaUa6hOuLC99H%2Bl3%2F2DLowjmIJdGqbUee6QTnkQbw6%2FeiNGHuAp7E8%2FOybEZ8YKXzTu0piCV%2Bz&X-Amz-Signature=038c9a89770172ff58da56535bd51b7584b136d72044e6fa6e82055fd0cbf566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ABOXLHE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BGicyXkNPRQbEQJ7ZP0MiSMI2%2F%2FKHTwThd8Kb4UPggIgfZE%2BakuBoJJmGKgyLCN8uO%2B3ET5iKQ4EO%2FFz7x%2BXHTkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFazrKNrYNcZ%2B7PCSrcAyusJyjhzsp5KaKLGCKFsbvIrWZV2yH5OWvt6mNLKfr5tHOh47AVLOct9vHLgIXNcIJ2fWA7waQE2wvuN%2FuzmJ0n4jb3JYZWA7VPDt%2FaeptN9Ys3MDamjYr2kI1bNqXHMVTCr1FOA3kdlRY93DjTRKYi2tQfsXV%2BSaQ3%2B5u2FcjDU%2Fc2tOuKhLGnXTSq3VD8iuZ8kYwBYL5WF7qzmyiELhbXpeRvYyGPhYMkFPBeHEqXV37pB71Fxk6%2Bf%2FzwQ5sSsQlSBfHPDHmja4qcuaMbTAOlNswy%2BIo313Ohc44w6XiK6OgXiOMlvY%2FGX9bW9cHYb9DWeAofrC%2BVa8mPNUnwGD84KiqF25lhg92DGckwH%2Bb8vWuV5GRi1pe4%2FHy46Ko9gJoCW6bxLJFD1XSMTbtO%2B8aW6VE6VeFc1GR6%2F175os%2F1%2F4509UBE4QatgKaZJozg5ZnzzmR266%2BbS9cC0A7PnbD29hpKcThowodHIDFDFrBbux5V3v8NsR0VxekFTEjQfclqCvqWpZ1v3Vs4N%2Brv4TVd1c66G8lU3AAXHiEwa0gOXGSQ8ElFVRZT9vEpj7w6cusxbu3kEfreu47A4oPlXI6qAj%2BAUowY1ZgABBs1h3ejBBiB1XEMjqGaQ3woMMLPjsMGOqUBRKwDT3tUDpF9OwvAUTOqLQpch8K7zOlyRKApee6wizuuBoiTXiJDIhXYSYXyPwc04zAxr3V615N9XlTjx6hAzWiO00LamA1X408LGHAimPAikC1NjYyWEaNVks0KdIlVomRjGFoEDwvhk%2BvVl6EDyyavpeRe0VTm0JQ07DYGvjW5imU5claJq3JEOeysosRRjBA5x6p1lWFtp47E0dYx%2BPGGdnrd&X-Amz-Signature=ba291c0c6ef433db419da1f28241a4202eabbb73811e9353bab409829ff9a948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UW6ZKZN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwf2rLHzU3xxyAcndLq%2FQsPsVei3ndL%2Bd3CxDvRHFR9wIgXaK4Hu85gvysk4TNXEsE7%2FYpFo15VYrFSX7aV%2FS%2FiZwqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP49fMZ9QLl14cdVCrcA43TsrK%2FClGj598Bz8nR9PyaDW25k6C4lXWLbosthaAfbqDwRSm5RaChSKZNxHzOnYt2qqkH4LMnOX%2BCBOQGqPEMgU%2BjIVjlpQlG7n0WThHEHDXQkADdWIiawPIRNZEK8pS5l%2FM8TGi%2Fkww4lNV5ecE0GTHrLpNZIuoPiOdqbF%2BFblfpPIJETDXsHFaFe4tZ7a30uM4NoJsvgUP3at2RKi1R0ALPewgOzVagJSeFZIkhNc5PXmQ%2Bewi3Oeve7C3B6Op0ALlHbobC%2F8PLGCJ03oQc4n2deNM55FSzHPc9lsaLfjDM3Zk%2B7yXfjKf46hYKttOzRDiOiFV%2BF7g7ozuO6XXdzmP2S8qyBjgVF4yyvP17WEFNRHHmtLP1358kDDoQzsKJzKCK8Ofql0gcBoki1IY8BMslCx0omqceCYjldig08maWk2%2B8JNJC0Ejp%2FW0ptdXv70MhJg84u%2F8WmE%2BXWHjLjnFZ4S%2FTwDatm4i%2BR219y4mM3KUg%2F66N%2BcQvyY4gTmKDNKLK4TEMcEhhWwgbGGPOUJzFvg%2FkcRRT8kDwYSP15SatxpF9eA2FU35iwYbcj4bLZM7Q37Ym9MGw3yl7KSrbAZTJz8x5Ez8nn0ZF%2FzpMdztsUP%2Bpj6s1GDSfMLzOjsMGOqUBuoxoLSo5px1GiKfAJFh5YCp9D6dllBb3md%2BTrcvKrms%2Fn8pAF5O4qmu1hseAclK1PFVHrqBYndQzyUEBNh0sy139qANJ3oJuJ9EiWqkU5aG6t51LLBqteSovA9WUSdxQv%2BZp1%2FX4v4sVP05ZxXsdZuEehwBpHurpszJWVnZ3kFhwvrlOgtFGrerozepDjpyjBe28XkRy8kslZrlltRMnO%2FkgW7Ky&X-Amz-Signature=8ef8fdc9af49eeea7e04573b935ca32b8874e227b52450692e602ed707e258aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
