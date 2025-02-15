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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAB44PG3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDXGZbGuweIvrXDnz6Lp2bYesqxD%2BOUM%2Bj0rcOTRySibAIgBz7Cm1AQid9bvsfxhrdOrjYvZ1smBpAzxRHwhla2zaIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFhDVODL4AZFMgKnxyrcA57hoPscWn4HwAWLjui8yeHFKhG3KrqUObQfq4F2sxWRBiK38o18Kd%2FaqvlZxaP%2B0czyV%2FqyxOZfGml7AM0TW87Mmw%2Bowe3b3kr01yTjNTn5iG7ggEAqjTS%2FNk%2FX916wrsjWvtao7bHypoTca19%2B45INrTlWzveOT6%2Bz21wIrn31SRuzc5Es%2F9cj0oUtaF6argNdwx6B0iknIQSk1wabzeR6JdjtRhRVF7odjOIG0AA%2BL8rJkRQVQhzULQs9grTUUkJ0G3kR1TYLXIrPqjtru9FlXIV0ItxZP2CNHj12c2wIYMpRJUMgz1LUheYVX%2Fmm6epq10sVcXTIJ3mQ6zelbdOc1KdU9vDOVFKANhW3OPGubfnK7fM%2BLBl7Vx6C4el9vIs5YrpJF1eMuFZfhXb3FD1kkiJXDPJUcgoSvVi0jscqWhqEtGjzEYIGtDEQYNLtka0jRONcFqFkHsXsmt2%2BPTpdUzMI4eWXPgyDAedaaNO6wRmLVHf3Ax05fLz9ccMQFSgZIQ%2FSsQtO%2BIKtjH7gVj1WOdwFgE9%2BICyL3DlrN5qQ9%2FsPZ1mvK3%2BLpD8%2BOvGdzcByLPUYacoBWFPcitX7xI0UL%2F9a8wCfsnCSJ6coFi5jXU%2BqjlJtV%2FsnY31bMJu%2Fwb0GOqUBZjwFIX8afkSP0HuT2RV60bh%2FBpFFk%2Fy7S3wZnQbTQTknVluQHZ4Tehw5YMk0N8ekdg%2BVE4hv5T0BEPn%2B24xOTM5sC7lfgMR%2FpPMXU9q9gD4NNTbWg%2Fplak8IB6eTJKIYsLV6o0lSPHKI94RFnuML3hUWyIVJ4%2Br8omM%2FGoWfBzFk2Iw5%2BZ%2FUd8CwApKiqErT3HyK%2BSfWU%2BhJ%2FGL79Bu3LW4Az5ln&X-Amz-Signature=957be4c215e58440d328f4786ec6dc20bad659b4113c1dfebfc4b095948e6690&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAB44PG3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDXGZbGuweIvrXDnz6Lp2bYesqxD%2BOUM%2Bj0rcOTRySibAIgBz7Cm1AQid9bvsfxhrdOrjYvZ1smBpAzxRHwhla2zaIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFhDVODL4AZFMgKnxyrcA57hoPscWn4HwAWLjui8yeHFKhG3KrqUObQfq4F2sxWRBiK38o18Kd%2FaqvlZxaP%2B0czyV%2FqyxOZfGml7AM0TW87Mmw%2Bowe3b3kr01yTjNTn5iG7ggEAqjTS%2FNk%2FX916wrsjWvtao7bHypoTca19%2B45INrTlWzveOT6%2Bz21wIrn31SRuzc5Es%2F9cj0oUtaF6argNdwx6B0iknIQSk1wabzeR6JdjtRhRVF7odjOIG0AA%2BL8rJkRQVQhzULQs9grTUUkJ0G3kR1TYLXIrPqjtru9FlXIV0ItxZP2CNHj12c2wIYMpRJUMgz1LUheYVX%2Fmm6epq10sVcXTIJ3mQ6zelbdOc1KdU9vDOVFKANhW3OPGubfnK7fM%2BLBl7Vx6C4el9vIs5YrpJF1eMuFZfhXb3FD1kkiJXDPJUcgoSvVi0jscqWhqEtGjzEYIGtDEQYNLtka0jRONcFqFkHsXsmt2%2BPTpdUzMI4eWXPgyDAedaaNO6wRmLVHf3Ax05fLz9ccMQFSgZIQ%2FSsQtO%2BIKtjH7gVj1WOdwFgE9%2BICyL3DlrN5qQ9%2FsPZ1mvK3%2BLpD8%2BOvGdzcByLPUYacoBWFPcitX7xI0UL%2F9a8wCfsnCSJ6coFi5jXU%2BqjlJtV%2FsnY31bMJu%2Fwb0GOqUBZjwFIX8afkSP0HuT2RV60bh%2FBpFFk%2Fy7S3wZnQbTQTknVluQHZ4Tehw5YMk0N8ekdg%2BVE4hv5T0BEPn%2B24xOTM5sC7lfgMR%2FpPMXU9q9gD4NNTbWg%2Fplak8IB6eTJKIYsLV6o0lSPHKI94RFnuML3hUWyIVJ4%2Br8omM%2FGoWfBzFk2Iw5%2BZ%2FUd8CwApKiqErT3HyK%2BSfWU%2BhJ%2FGL79Bu3LW4Az5ln&X-Amz-Signature=6ec14e3f67861b4a57a4150688ecefb84704701c6f6d25b35bdca03a9f42c385&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCR2NZT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICJpvDHlF1f2YScpXWm2rc3l1RR08PAaZdQXqvB3z%2BgVAiEAkhcCO2oJ%2FS6HAmLx6Wt8nw7opE5FB0dEgZ1OGD5MEz8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBbEDNu18wYrSORUiCrcAw2a8Ixw3EqhaqBgrWCtBBfVVPLGLYNBhplTzYxtt11T9mEqc7kdDqcXVSODcOYHp%2FWrQlT3f4HzaAnXAywSOL44ypX74sJZ1PM5Sutgs8AWhfo9v7y0ttByyKSG1eCLlKg7lhojYY6gKAUL%2FhBOYnXJ3LZBKJwfln8WeuJv4NzHepNUgbF9vnPMx44hXHQBiOH0XypuI%2Fz3TqZnP%2FmzeYOJQxhmQSukkr36AXRx%2BkRSPP4qQ%2FjWttwXQ54pz%2FlpjcUsF5h748Ll1eKyWUC3kjYz%2Bswkr1cdJofMxGuDGAlsP8BLUODfETD7XXrzfTZHGLQDPhgE2nHr7YR7ZfC9KlnUa9IF5tz%2Fi0pqh%2BdiJwQSlqXCXxOfinVLVk94qdk9WS2eV5MrOaZphnEj1ig9HAygPcwHvqB43mAA1jgmx6Q3lO5Qxpydw1NqF4fvRF9PRHGa98giXJnoyVJ2fWQFNql3DZiaDjNR5ExJfW4Cc6FojfOMUSIE%2BEs4KgDee6nzdDzuN8GpVzzx%2FuoB9vkCyCwzuWKmJ5esQZrzwklIxtUIfdFamtn8VvOZ%2FcIf%2Bq%2BUK4cKA7Wo9PqgjrD1uiQo83OSLo%2FUO4NaSfkGO89ArLAGFPT03Y25N%2B3aoNiIMM6%2Bwb0GOqUBh92EP5%2BNlZ%2B7csv%2F1PSwtBxrBO9kjxZZdFTeyE5y7vvsVINM5Lxd7EDKgxSALPSMCeEZc2vfUFDijmeld8jvCehCKab1ghewBaENRBRmgI86hFarlR8CfYmnILJh7GfHRCf8o5TphoLq1j9jIEJkfEln%2Fxww%2BViErr6MI65qtKR6iy8zJr5BPzgyEFEt93K3hOxHFhUhAAP02RCnHi0NvVGnOLAH&X-Amz-Signature=286b7686048acc90a2c8e24080e4f1c756900bd24776a954502f1dc0183cb882&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C3HSIN6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGirqmxCbRG4Zx%2ByA9U4sN%2BUk90kvszycp5eR8mEe04FAiEAki8Q8Hqm%2FHWu6VY61JyPzT30tiSmlVsrq5KcYs6dE3Eq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDIVsy4KTgCHP2visQSrcA0g5347OTgn%2BHwJ9IS045V83bXBAVZRJWlTnCxPl%2FDIvd%2FTY3dDKZJu%2F2d%2FsaXalhNuICpDjX%2FmsRyuD9KkkSKkMGjo5plVnUYXscRtlBTTh%2BrjlP3SrtqUVpS6STiMKEE%2FTWwDYn7%2FggnWqW%2FSZ7iku%2FaU7VpWi1bjKPc9ejkpSlPgKch56mK%2Bm07NgEXcWBbBTgmk0cGwF6DzxMe7vk8m7JPrYMQIKUqcPt7Zaot%2BIfl0pyrO7y69A2Xis%2FmLoEWT3coAoRBuhBxtMYXFCr%2FKuRAjSZmzQxT5AuwE9Sm5UnArm1pEOArZo%2F6CGpeNB1z4%2FhW%2FIsDcYnHV8cOckFg%2BSbUi4qrCXbahuyQ0E4bYyAl8Ijw6483Joj%2F2PIxWFKCEX61ls2o%2FWzZRvYkbeAvE90k%2BUktyj9sfjePgYlf%2B%2FB1aRIlsO8DMYGg%2FlPcjUbn6MEM1AhboMpjCIVb2QIwuUPDqpNrsfG0ETmBjcbvfJUftl8IWzpk5wc6rGd82r%2F2m3R2613aoWSMc%2BL0ypq13Rk0quANpCuYyKskvWF4iRRY1twqIEzgThEhjbWvHWAovWHVeDGbj6YbOLcbbH4w6A20D764NfpIStgUk0K3ZSznjJDIF0GRKXvpRVMLe%2Bwb0GOqUBZpddDWX9YTDI6MDH9lxC8TtDIJHXG48ehgAGaHwjh%2Ft%2B1opTQXeEewKRIF8YDM3%2BeGOF9UF4CMEGvLnV9Zn9WKpUCux%2F%2FsuDVUm4Z878ti%2BW9o0SfDiyyFU8Tsp%2BPJ3jBJxEswbaeRnHBjxISbPsvcVoNEl3O9jICAw0IIvE9rKm4dx5Rhf5nyWmYWAalxtrZQfDZC%2FoNmaSvY9bXt0i8ssqnEXl&X-Amz-Signature=f58d3791d1e2b897d0a013b353af05b97427f38727c0875a1bc4d679fc35a85a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAB44PG3%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDXGZbGuweIvrXDnz6Lp2bYesqxD%2BOUM%2Bj0rcOTRySibAIgBz7Cm1AQid9bvsfxhrdOrjYvZ1smBpAzxRHwhla2zaIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFhDVODL4AZFMgKnxyrcA57hoPscWn4HwAWLjui8yeHFKhG3KrqUObQfq4F2sxWRBiK38o18Kd%2FaqvlZxaP%2B0czyV%2FqyxOZfGml7AM0TW87Mmw%2Bowe3b3kr01yTjNTn5iG7ggEAqjTS%2FNk%2FX916wrsjWvtao7bHypoTca19%2B45INrTlWzveOT6%2Bz21wIrn31SRuzc5Es%2F9cj0oUtaF6argNdwx6B0iknIQSk1wabzeR6JdjtRhRVF7odjOIG0AA%2BL8rJkRQVQhzULQs9grTUUkJ0G3kR1TYLXIrPqjtru9FlXIV0ItxZP2CNHj12c2wIYMpRJUMgz1LUheYVX%2Fmm6epq10sVcXTIJ3mQ6zelbdOc1KdU9vDOVFKANhW3OPGubfnK7fM%2BLBl7Vx6C4el9vIs5YrpJF1eMuFZfhXb3FD1kkiJXDPJUcgoSvVi0jscqWhqEtGjzEYIGtDEQYNLtka0jRONcFqFkHsXsmt2%2BPTpdUzMI4eWXPgyDAedaaNO6wRmLVHf3Ax05fLz9ccMQFSgZIQ%2FSsQtO%2BIKtjH7gVj1WOdwFgE9%2BICyL3DlrN5qQ9%2FsPZ1mvK3%2BLpD8%2BOvGdzcByLPUYacoBWFPcitX7xI0UL%2F9a8wCfsnCSJ6coFi5jXU%2BqjlJtV%2FsnY31bMJu%2Fwb0GOqUBZjwFIX8afkSP0HuT2RV60bh%2FBpFFk%2Fy7S3wZnQbTQTknVluQHZ4Tehw5YMk0N8ekdg%2BVE4hv5T0BEPn%2B24xOTM5sC7lfgMR%2FpPMXU9q9gD4NNTbWg%2Fplak8IB6eTJKIYsLV6o0lSPHKI94RFnuML3hUWyIVJ4%2Br8omM%2FGoWfBzFk2Iw5%2BZ%2FUd8CwApKiqErT3HyK%2BSfWU%2BhJ%2FGL79Bu3LW4Az5ln&X-Amz-Signature=0577583c4c057e4dfc9691210d9ebb323fd81629e81647548cf7c7f476d20dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
