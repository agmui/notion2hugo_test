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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5JN7H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCvEtKZXB0bdomtm%2BLPmurnMCSBHGpE87LoYMtyumN6zAIhAOVvfrC43fMi0OcYpWVKdB%2Fi%2FDEg60tzWdG8y72ZbRH1KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLSyGg0aBh7ToQrAq3ANz1kQdSmRL%2FNqe0WHd4jdSh8VS0hSRPV2FegmZeBPHcvnbd5%2B5b0lDLuWccYahLeifnodgsfTesI5j%2FCtO5x%2FpiDxjWTKgcLxfYbrIouADN02%2BUlVuQiEOV%2BDJ0hQhRns%2BLXjXQVIAa0SCaW1iNINf1R%2Fdef4sIvzeh256Mlp1BQjkt178%2BV4OHQ4RU708HfzSm0kt%2FbXxFd8jZvmSN79%2FOsR%2FsJt2TrBm3CwGadTppwO0bP5SZ3zdNp%2B62rbRwXHELspfxnvUPqDUzhAQj6LNaVnqzf%2BYzKs7O%2FDn4E%2FVzA3b8j%2BdgfNWV3PkIb6ZJc28a3gj31cZB1uiRHt%2BYB9h1XRhK3ndy4f7NB55kfAC%2BBDjlsQwq%2B39mINmLp5sH5tPMAjLOVy5qaCWNjr2Qe6E8MOTk5gEZtInroDUwdiZJNqKOu1AndiYOD7UFrmu%2BaTIahaqZNLc6WVKV0YiebP%2Fln8TMvuq2FULbeKOKnKI0GQ4vnut2llrdZ7fOiBPMYaWGaEesoMUwYZ4DFbGS9NpdQCCEBpjeqRpUsYHY7qF6bOboiCctE7r0aTPPLguBm%2FGOLGMnbNTOoI6puXhQRr1gPLB6kN9rCnPYq6NQMOelJYWOMYC%2Fs1K%2FShpGTDJ2pXABjqkAW%2BCRKGCizJKdFNdU93J%2F%2BMaFJcKQBQ3%2F%2Frpag7VmNxJ8GYNkbFzMa9JnDFl75%2BGOsth0FBloDB5BrRnOjLX0TJC34cwEloaQt2gHgcs14YJI%2BcMD6iYKMcKvglWdArAJO591uAMeRxxr%2BUSHm7Vo1qVVlZG2KreeRlJLLJHngXxwus7A01SBfOTqaCGfFcnhts%2FCbtrdmC877K3YvW14RJROui2&X-Amz-Signature=f06918ff2e1fef10594cc25de04c61461538c3fe598a9d36b69fb14d09a4cf53&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5JN7H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCvEtKZXB0bdomtm%2BLPmurnMCSBHGpE87LoYMtyumN6zAIhAOVvfrC43fMi0OcYpWVKdB%2Fi%2FDEg60tzWdG8y72ZbRH1KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLSyGg0aBh7ToQrAq3ANz1kQdSmRL%2FNqe0WHd4jdSh8VS0hSRPV2FegmZeBPHcvnbd5%2B5b0lDLuWccYahLeifnodgsfTesI5j%2FCtO5x%2FpiDxjWTKgcLxfYbrIouADN02%2BUlVuQiEOV%2BDJ0hQhRns%2BLXjXQVIAa0SCaW1iNINf1R%2Fdef4sIvzeh256Mlp1BQjkt178%2BV4OHQ4RU708HfzSm0kt%2FbXxFd8jZvmSN79%2FOsR%2FsJt2TrBm3CwGadTppwO0bP5SZ3zdNp%2B62rbRwXHELspfxnvUPqDUzhAQj6LNaVnqzf%2BYzKs7O%2FDn4E%2FVzA3b8j%2BdgfNWV3PkIb6ZJc28a3gj31cZB1uiRHt%2BYB9h1XRhK3ndy4f7NB55kfAC%2BBDjlsQwq%2B39mINmLp5sH5tPMAjLOVy5qaCWNjr2Qe6E8MOTk5gEZtInroDUwdiZJNqKOu1AndiYOD7UFrmu%2BaTIahaqZNLc6WVKV0YiebP%2Fln8TMvuq2FULbeKOKnKI0GQ4vnut2llrdZ7fOiBPMYaWGaEesoMUwYZ4DFbGS9NpdQCCEBpjeqRpUsYHY7qF6bOboiCctE7r0aTPPLguBm%2FGOLGMnbNTOoI6puXhQRr1gPLB6kN9rCnPYq6NQMOelJYWOMYC%2Fs1K%2FShpGTDJ2pXABjqkAW%2BCRKGCizJKdFNdU93J%2F%2BMaFJcKQBQ3%2F%2Frpag7VmNxJ8GYNkbFzMa9JnDFl75%2BGOsth0FBloDB5BrRnOjLX0TJC34cwEloaQt2gHgcs14YJI%2BcMD6iYKMcKvglWdArAJO591uAMeRxxr%2BUSHm7Vo1qVVlZG2KreeRlJLLJHngXxwus7A01SBfOTqaCGfFcnhts%2FCbtrdmC877K3YvW14RJROui2&X-Amz-Signature=5fec9a20a73e400b6354bcca8bc3bff605e8486ac560bebfa3b4734fd96eca38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KWZSL4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIHvqDaANVlBZhATwPOTBTkRULZ7OWeNK72Ps9UtVZeWJAiBixcuhIqByBGy1ZIsHz70BbBOXhdHLkU7p3Po6CVFfvSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtJwgsp4j5R0X316pKtwD%2FdBM4iuBzDmcxPpcaiAvi6RVJi%2BU%2Fx0Ik8Qlc%2B4nj9O3rFL5Lk0nCPZmnn3l9dY1qN9TZW7AEaugvREgUJjxC3%2Fiw%2BECD%2BvnZtTIk8%2FSLIqV1hhTbQIeIj27U3tY8BnlPfbN5X9SjJxB0Yh1Tu6WIULBkdVUrFbCTFOTcrTuCJHaysIMRaIawGQdG3Sbeb6PSVzg1x%2FFbYJ29lC4lXYQ5RvQ2UqkJ0xl5lSwzflRx456i88tt%2FH2fjUant0T9rVoDMjcKqmCJQtjJ44nAKFhvSQ6%2BPhAg6uuizr8xBh5W8o4l96bkRtf4iS3ty%2FwupchOvVKy40YJtFyLGzLtJiY7muA9UeICD7Dyg0b%2FAOcmf0D852V5VS6sbY8QvV1FtSKQFtoH8fza4PlXdfz43ihwelmppcVs2EKVcDqAOJo2yDVH3DUso%2FcspbdQP1PfmNvknpu1jhBpyqhmauUSRU2PUjWUEGAmxfSEQOLWUGbPPhhggXMU4dl1DfvgUSdyZIgKnDU29M4InJk2UcmcSoZLEhEx7szaIiALNMRCkttFeWKON62vEy4dAwcW%2FyM8g1kVm%2FON08uXQMjKUy0I9FPnZPBLeRgW%2FzqoOAoye34ewfgTXhFoKpGHhzR44AwztuVwAY6pgHKMk9%2FG0LtB1%2BS5RjDyqA7HhXbDxVtWr7QOIk4V3%2BbgpnWs2%2ByLebhjXvCOjH1DazJWLGE1jc1Y%2FX6ulIR%2F3NUalm0K1enkUigqeKKThpqOvhXzVXk9Ytmi%2B1RhEX6n0JFy%2Bv3hQd8IpBGgVrpBHKH1JFs0lYwlDA0mGZqvfvXuWKXuS8IgWLp26D8E7Y7lscQO7oNjAabrweu1ptOazEc9%2BBbayo0&X-Amz-Signature=b0270555725fa9faa01f00889fc40268660aec4f1239d4764127d75a91f28ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFSX747%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIF%2BC5sinNwy7fh9q9Ul4xhuFtk9SgdoX2nGWZGySK8UXAiB625MrVUihUL0uHefVCf21seMi093UGzW3iBEp572cJiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F27YCBiD28%2BHdyPEKtwDwvgbJhf1UhPLZTOEEK5maVWG7NgORYJFk8pYm2ZUgsz0E4eV%2FtN93yPL%2FGxoZGsSLHR8YU1Wx36OZUK39dNeEvsBuoHp5NEqdQZbsgHIuPfoVRzXZ1O23y1aCAFMHgVluKIVbUgmOlV46IZ%2FzMcvE0fnO0hNXkgHiz%2BfL58UDDusXTic4m2pMQJSqf6SR9Tx4CD25yBQ1UJk0FPPGjHujXUK8jS6WIrskDI7M16JB2HJRIPLCOYer206r0SYnVrmCKquDenA9XyxsELOlQA3jwYKPEsU38dcz5%2FxQ0rnRabOwM6NozZqYCvqyNi7bviP0hiWFDdbpsmZaC74%2FycJ4eDfhnPcK9P1ux9EKvfnwuWHamdOUpJ1lyHzuni28FGp4FqW7T%2B5p3KQ60YJPdOWYxRmiri3Ald6d90wxp0qJK9KPuRxpjWhaeeD71bttBi1f4vxPhIUzEwaVYC8fjI9l%2Btrlamt8AP1%2FekMwr1%2BEzKCnsEz3z8FbX%2BhqqwD1OeTvP2xD8C2gIKM93Mnvdousz7FqzM%2B6%2Fvd8YdP3RABdAEJMoeGpQP1app37Ce94mlcRCor%2FK1KumeiRW1X9KHh0o4aD85lFrmAfNwD96MxrvkWdICgp%2FQukfUBxUEwpduVwAY6pgExV3N4M3CLTp3hLGgaqyimOZHU4qMtiHO%2FslM6cD6p5TSA3J3%2FWTg3wfd3H0jxO7Pp6X61mveniOmgD3p7IKfTLBKdHy3EQfsuF7Q31Mb7wUXC7x1bhJij8fDtI6YazUfGk8q2og8Qsgs2jZYFmp5ltvT%2B7LRxN%2Fgvjp2mbrSUQYpXv3Co0rKyunxHGc0%2BtLVVlwIdaCCWiK12FUfANe9F0NePD2O9&X-Amz-Signature=b59eff5a354ad9981c84b000b6b643807a66f33f54cda76d04c3da282744dd40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642D5JN7H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCvEtKZXB0bdomtm%2BLPmurnMCSBHGpE87LoYMtyumN6zAIhAOVvfrC43fMi0OcYpWVKdB%2Fi%2FDEg60tzWdG8y72ZbRH1KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLSyGg0aBh7ToQrAq3ANz1kQdSmRL%2FNqe0WHd4jdSh8VS0hSRPV2FegmZeBPHcvnbd5%2B5b0lDLuWccYahLeifnodgsfTesI5j%2FCtO5x%2FpiDxjWTKgcLxfYbrIouADN02%2BUlVuQiEOV%2BDJ0hQhRns%2BLXjXQVIAa0SCaW1iNINf1R%2Fdef4sIvzeh256Mlp1BQjkt178%2BV4OHQ4RU708HfzSm0kt%2FbXxFd8jZvmSN79%2FOsR%2FsJt2TrBm3CwGadTppwO0bP5SZ3zdNp%2B62rbRwXHELspfxnvUPqDUzhAQj6LNaVnqzf%2BYzKs7O%2FDn4E%2FVzA3b8j%2BdgfNWV3PkIb6ZJc28a3gj31cZB1uiRHt%2BYB9h1XRhK3ndy4f7NB55kfAC%2BBDjlsQwq%2B39mINmLp5sH5tPMAjLOVy5qaCWNjr2Qe6E8MOTk5gEZtInroDUwdiZJNqKOu1AndiYOD7UFrmu%2BaTIahaqZNLc6WVKV0YiebP%2Fln8TMvuq2FULbeKOKnKI0GQ4vnut2llrdZ7fOiBPMYaWGaEesoMUwYZ4DFbGS9NpdQCCEBpjeqRpUsYHY7qF6bOboiCctE7r0aTPPLguBm%2FGOLGMnbNTOoI6puXhQRr1gPLB6kN9rCnPYq6NQMOelJYWOMYC%2Fs1K%2FShpGTDJ2pXABjqkAW%2BCRKGCizJKdFNdU93J%2F%2BMaFJcKQBQ3%2F%2Frpag7VmNxJ8GYNkbFzMa9JnDFl75%2BGOsth0FBloDB5BrRnOjLX0TJC34cwEloaQt2gHgcs14YJI%2BcMD6iYKMcKvglWdArAJO591uAMeRxxr%2BUSHm7Vo1qVVlZG2KreeRlJLLJHngXxwus7A01SBfOTqaCGfFcnhts%2FCbtrdmC877K3YvW14RJROui2&X-Amz-Signature=a8cb366c418191f6b8815dcb3b548be62f6dc600fdffa0a247263ddcab3bf8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
