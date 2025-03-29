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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4SJSZC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIB3tRMiEU8vwmeMjmlWsY8PS3OMaB%2BpEYBs6uY5YG%2BiaAiB3aoFDj0ek2UHuWwo6f6%2FytnrGJbvFJCzyJaD1tlPbwCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMUUuEHV5rKgZnp6ZUKtwDhHK%2F2FiOE90S5URoy7VK%2Byli5%2F7gOiZKvPuY9%2FW7yct952y0LD9Ny4jr34swDfseCsZPCPADW%2Fl8858pREBb3xvNf3QmLG%2B54zBjt1QYpuDXyU2eGI8GttNArXMKI2cZhdeeEs0zOErswt%2FD%2BWdbeLlIfGPVmBtJFT%2BlIW1Pl7tI5RYL1Z8BYNzEl5U7Xq75xwCcgHNcmSM5csjdiT%2F6Gui6JTOKibdj7yDCfLLokcqBOFv4fHySY5uj%2BOsMXitAnopDVXOCcGa3QH%2FTmb7PotfOC2Oss0zYXivrTWmKCl8L%2F%2BLKZBPQ43erd2bVQmeqy0AEmNAfCIHYeL9yWS2rN%2FbUoqlZIB0Dx7P0fA65CaenNvts%2FW4hGavAcFOdLLWSe7UuehoAM8FzTuuvqUAyon6sskTm5NrY%2B%2FqYevEc1Tq0d%2FeoR%2BhmAOSZeD0AoqpozWDtzLgwAv1dHjwCAkCGM2V6PlbK9kn%2FELLWZf7BifC1Y3k8FwSPfuj2zkAjeCsozoLxIvrK8USvXJr1m8W5oFJxFBo6UtPKVh65x0%2FFQ%2FhFeklO8rw%2F0x%2Bmh31GU8AbMne6u9emNYy7g%2FihqPf5aPLxQAnI85AGmgmYqPkwSG6pycjr9Rgwa4BRCw8ww4qhvwY6pgHoA5%2F77Ybu61jKaFbCRpaGH2nco9UDLwCjMYuygoWeE3ZD%2BTEVBOtP8wpTSNyP4rUaatP09rmrssj0cfU5f4%2B1wrZCjD2fy5Wos%2Ba69eKim4vW24IryMN72bRwGeNuiieiM%2Bx0nKOQmZjdOYCDm41LUYJgK%2Bg2sasyM0DP7yfFsq5Fx34aYMvStoofNEbi0tEL7e4RJZzXkSSH809axCpDj%2FY82SGW&X-Amz-Signature=d128a6df7a6fd522a158727250b93efeb48afaed92d0b7f8c972311c5dbde1d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4SJSZC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIB3tRMiEU8vwmeMjmlWsY8PS3OMaB%2BpEYBs6uY5YG%2BiaAiB3aoFDj0ek2UHuWwo6f6%2FytnrGJbvFJCzyJaD1tlPbwCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMUUuEHV5rKgZnp6ZUKtwDhHK%2F2FiOE90S5URoy7VK%2Byli5%2F7gOiZKvPuY9%2FW7yct952y0LD9Ny4jr34swDfseCsZPCPADW%2Fl8858pREBb3xvNf3QmLG%2B54zBjt1QYpuDXyU2eGI8GttNArXMKI2cZhdeeEs0zOErswt%2FD%2BWdbeLlIfGPVmBtJFT%2BlIW1Pl7tI5RYL1Z8BYNzEl5U7Xq75xwCcgHNcmSM5csjdiT%2F6Gui6JTOKibdj7yDCfLLokcqBOFv4fHySY5uj%2BOsMXitAnopDVXOCcGa3QH%2FTmb7PotfOC2Oss0zYXivrTWmKCl8L%2F%2BLKZBPQ43erd2bVQmeqy0AEmNAfCIHYeL9yWS2rN%2FbUoqlZIB0Dx7P0fA65CaenNvts%2FW4hGavAcFOdLLWSe7UuehoAM8FzTuuvqUAyon6sskTm5NrY%2B%2FqYevEc1Tq0d%2FeoR%2BhmAOSZeD0AoqpozWDtzLgwAv1dHjwCAkCGM2V6PlbK9kn%2FELLWZf7BifC1Y3k8FwSPfuj2zkAjeCsozoLxIvrK8USvXJr1m8W5oFJxFBo6UtPKVh65x0%2FFQ%2FhFeklO8rw%2F0x%2Bmh31GU8AbMne6u9emNYy7g%2FihqPf5aPLxQAnI85AGmgmYqPkwSG6pycjr9Rgwa4BRCw8ww4qhvwY6pgHoA5%2F77Ybu61jKaFbCRpaGH2nco9UDLwCjMYuygoWeE3ZD%2BTEVBOtP8wpTSNyP4rUaatP09rmrssj0cfU5f4%2B1wrZCjD2fy5Wos%2Ba69eKim4vW24IryMN72bRwGeNuiieiM%2Bx0nKOQmZjdOYCDm41LUYJgK%2Bg2sasyM0DP7yfFsq5Fx34aYMvStoofNEbi0tEL7e4RJZzXkSSH809axCpDj%2FY82SGW&X-Amz-Signature=608f6f0aada9b6a2598d49a68c574cb4be22db7073380ec781bde27da6276ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGS43ZF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCY6r9TF21vyc258BVG7HbyGY467z9xN78PIGm7m07BswIgMzZazLOCLUaOvY9KFGT5tSxEU1qoAZ7rQoriU10nYE4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAaUyo42PbzsJcV0JircA9WP5kL4EIT5oo6LTN5z3C8O2tXKkuWSOnrhO%2BBK9IXOvFoxQSSCWv2r65gVam9YrYAcds1c24O1oqdUEcCle%2BAv6mmPhRwE1Uen%2FhjWj9lmazX2FQ%2F5ZnP06%2F0thrSzoec8Wa4dxHApKky62AHf8lQ%2BzmGx%2Bz4wPaLK87oepUvqit9W6QO4WAQlqS%2Bjiudu0NQWmVPyJeFUXhO8Av1gOjDk7%2FULZcRe5S7%2FjX0ZE7etjieRE7KVOujqbxf1IMBxBMdktICvdQbyCSyPJV7neW39MGw8MqpMRogEed3r6yT%2FMpVcT7P4JlpYwEDIX9%2FEgnUKPpJBWhCcarmG7xbaDjGLJeSQ38EzHxyy8a362YrdHXuR3lzYRSBmekQXaGRgHks0mb3OTJiKQIzvUsCIVgUrG7nR%2FBWloAnBHfP7hgU7ehdOdX5boWkAF%2B2rhcibhcnhKd8%2B2J%2BxkQQ8IJ5iInIQ2iZdzs%2BC4j47ITSLNetrirEW9bcuYmLSwj2LxjLdDVOcM%2BjoOeYBBWxtsz4DLL3g9OlsgNprA1MDMgcpCpdugxanM9iQZzAB65AtxWnbNojCC%2BStUuaw%2F56x5RyxmU7AWa892sw2d0EJbG9YkYmEXePrKvV4BCGVXF6BMICLob8GOqUBMUCZdQNP6KsghaQDgb%2F30gXGC2KiTSpCdBWOXqB7JUPquVZZqMhy3n3G7wlLszgCqN2lfiloRs3LMpvuvFO0dzg1Fvntch3Xk9i1C5eCiio%2ByPYfdNVCpjri5TOU1i3hSDfQCnMf2E3LZV5Lt9a1aVlXHLWCDqWWdgdP59mGaXkbkHk4kKW1SKr4mSkUXEhLrPNZMI9HVPcU5O7gE1ejUwebbf1j&X-Amz-Signature=cb515bef3fbbac4db0bec3c4e95aeaea3c9114f1be2621915985d12aa1e8af56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUXI4LCS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIEbviubUdNs%2BzQGhnuqyPooRNCNoQ6VunQByu%2BHTf2i3AiEA0SUIevdFEDhPwJoCnp6YqyiPPTrqieJTNXFz2X5RHTUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPd%2Bswa2wqZa%2FBHOwCrcA187eTj54ebPju4A1I4NJs3tTo%2B8vF5Eg6fs%2FbMjX5Q4ScPlZmNGmb04sYlNCIxt2%2BGBHHDwViSpAJoikuJuHy%2FIQBqKsGbx5NbJ%2FSHDmPP%2F4yNVSrF0Kenj7jIdxyVsK9GJ36zNb9mvk3yz1HbuWLFQO4addpHb7LJamB7DJoY7gS8eO8VkZN%2FDdtz6elmy3Q91e1ttV8%2BXUDSlMZtoPF9fyOp2NS3568lYGMHvqR3kIZTL4EjiUf5jGyfWG%2Fvr2Y0THW9PakwrEgygI85hB9tD%2Bfr4jOchpCXA8dBl8mxeWPPBLv3nf9x%2BMzOddU2V0Wzp4G7L2ZAYjAXbk63cVOZrxGar0GYv%2Bz6rhouinfUPqblRZ4GIwOGb6TOD2HWMpQHjGdIcc2cEaCW0jBVUOKzc5tRACvD52ee2qrrFLqGxVws2IGl5sOF20mASswVx6u%2BZ2a47HA7nPpNE5BkTa5pHHejjiDLWrpD9UMMsioLAOwLGIJo4Ot4iWAYThYMESNCt9xhw6HIblBOIjCa3tL%2FNhBz4%2FpKhI42fOGaV4JbNf10i9TQvJLxdV8AizV7URjCAesMeJV8X2%2BHZ4hJ7I2kc3s5tBZCIj24kvxVd8zbP%2FAP5jYzUvNyfsMgMMPSKob8GOqUBQwXlZ77Jgsb4WYT0P8UweV5z3HrJ%2BCBrQkR89XsSEaOZwFviC%2FD5bu%2Buv05M90EqnbCn9nyLCvdoF3hx6ah4Aw04qPbWurPc23TXxOFxCOioa%2Fu6kRAeBU3QbKiD2vRgVREOnonyR9du%2BiChniNzStQywT%2B4U%2By%2FkMHMASFSSODiHMTpf%2F6qRuvREfTQ3lTyh6a3dBfT1%2FM9x50Vtc1dfsAK2WTG&X-Amz-Signature=1173e2201c2bf592147a7d06495a192a3585ebeb83a47ed73501f59ab5d8db49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4SJSZC%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIB3tRMiEU8vwmeMjmlWsY8PS3OMaB%2BpEYBs6uY5YG%2BiaAiB3aoFDj0ek2UHuWwo6f6%2FytnrGJbvFJCzyJaD1tlPbwCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMUUuEHV5rKgZnp6ZUKtwDhHK%2F2FiOE90S5URoy7VK%2Byli5%2F7gOiZKvPuY9%2FW7yct952y0LD9Ny4jr34swDfseCsZPCPADW%2Fl8858pREBb3xvNf3QmLG%2B54zBjt1QYpuDXyU2eGI8GttNArXMKI2cZhdeeEs0zOErswt%2FD%2BWdbeLlIfGPVmBtJFT%2BlIW1Pl7tI5RYL1Z8BYNzEl5U7Xq75xwCcgHNcmSM5csjdiT%2F6Gui6JTOKibdj7yDCfLLokcqBOFv4fHySY5uj%2BOsMXitAnopDVXOCcGa3QH%2FTmb7PotfOC2Oss0zYXivrTWmKCl8L%2F%2BLKZBPQ43erd2bVQmeqy0AEmNAfCIHYeL9yWS2rN%2FbUoqlZIB0Dx7P0fA65CaenNvts%2FW4hGavAcFOdLLWSe7UuehoAM8FzTuuvqUAyon6sskTm5NrY%2B%2FqYevEc1Tq0d%2FeoR%2BhmAOSZeD0AoqpozWDtzLgwAv1dHjwCAkCGM2V6PlbK9kn%2FELLWZf7BifC1Y3k8FwSPfuj2zkAjeCsozoLxIvrK8USvXJr1m8W5oFJxFBo6UtPKVh65x0%2FFQ%2FhFeklO8rw%2F0x%2Bmh31GU8AbMne6u9emNYy7g%2FihqPf5aPLxQAnI85AGmgmYqPkwSG6pycjr9Rgwa4BRCw8ww4qhvwY6pgHoA5%2F77Ybu61jKaFbCRpaGH2nco9UDLwCjMYuygoWeE3ZD%2BTEVBOtP8wpTSNyP4rUaatP09rmrssj0cfU5f4%2B1wrZCjD2fy5Wos%2Ba69eKim4vW24IryMN72bRwGeNuiieiM%2Bx0nKOQmZjdOYCDm41LUYJgK%2Bg2sasyM0DP7yfFsq5Fx34aYMvStoofNEbi0tEL7e4RJZzXkSSH809axCpDj%2FY82SGW&X-Amz-Signature=34eb07fa3dbf4bfa45403c1ee4f43819b8d6ac6c07e678ee80c4590928df46a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
