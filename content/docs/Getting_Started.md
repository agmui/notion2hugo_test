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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRIH2K2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC5GahDgUW14PweIV6YAcHcxmiSGaIIlgUFft7q%2Bzq%2FQAiEAy%2BThm97BoDepga7e%2B8PV9T6StQ20PiI1e9xhfU0ewGIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBo%2BZ33OPQDbFkxePSrcA%2BspVuAyBfVr%2BvRxwx8FWIEPaYR3N8hAQCRcOdk%2FmaYXT9RIUFVnmzT%2BHTOv2GYfYsicRsfQcCUMEWuXjIgpxfgRcRp9Rv7%2BBUhkycLw5HGa9ERqBPdLIM1VvwiuIBTJuAQKWY%2Fl8FCPQvo7hGGmvCbSfNw0At90Lf4QIeBoJk6djLpRycTglkx3Z3Ab44Qo2jEMHfGQkZEakdI5gny9iH3dlMLfNGZbFFaya%2FtqZKWhNvjOBEXeCF1O%2F9Bv5KjFp9uFoGzba%2FaRO%2BD%2BsWCRRDbXohaOexufskv0vHcIWz4RO1lxo03aX3NIifA99XQ1lrnzHACFAqxHP7UBLPX1KE0595lrwmUc9KiFXQqUkN47as6mc8JPh0098tDkMRejHHxv3dG8%2BRHk0lzHzzs0dWfugcYGTADohMOsAesV%2FiUkFz0SKwU75q0%2F%2BhJU6F2%2BpEi%2BzeoMB%2FxnWhq4YlBociDluAbzQO19YsNiKfNE2dB6tJZclyprAyDeHCuJGsCB5tDYJXkOJjvB6otaPb%2F%2BwAghwDI28SixS471oP4AVjfLbFXNdCy36u75a9JfPhT59JSs8gOU%2B1ZObGnNUkKjUeBtoRIXfvl84eYvdvu8J3om0gbRO9tTmjevUe%2FhMI2C%2Bb0GOqUBVak2U5CHj27%2FHNDAqH%2BQzbMv%2FGrw0S26nQnM6OjxnHYZ%2FP%2FouA9ITw4RgF%2F8bcjteoetI6qfOuQM5f06T66doFSDbt2o44KbJjPq4BiJ6JndyIEc2RBKUUr8D%2FeH3Uoen%2BOloh%2FgUchGYQKykgGru72ARu5PDv9zZhiXOjezJoSL4hIxHu%2BJY74dXp6v99nEVOdHRaYAusCXE%2Bxmjm3Uhw6b1w9u&X-Amz-Signature=a265f07092cff7c056e02060d62f0d311117b1b0255766ab753af197c7f1720b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRIH2K2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC5GahDgUW14PweIV6YAcHcxmiSGaIIlgUFft7q%2Bzq%2FQAiEAy%2BThm97BoDepga7e%2B8PV9T6StQ20PiI1e9xhfU0ewGIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBo%2BZ33OPQDbFkxePSrcA%2BspVuAyBfVr%2BvRxwx8FWIEPaYR3N8hAQCRcOdk%2FmaYXT9RIUFVnmzT%2BHTOv2GYfYsicRsfQcCUMEWuXjIgpxfgRcRp9Rv7%2BBUhkycLw5HGa9ERqBPdLIM1VvwiuIBTJuAQKWY%2Fl8FCPQvo7hGGmvCbSfNw0At90Lf4QIeBoJk6djLpRycTglkx3Z3Ab44Qo2jEMHfGQkZEakdI5gny9iH3dlMLfNGZbFFaya%2FtqZKWhNvjOBEXeCF1O%2F9Bv5KjFp9uFoGzba%2FaRO%2BD%2BsWCRRDbXohaOexufskv0vHcIWz4RO1lxo03aX3NIifA99XQ1lrnzHACFAqxHP7UBLPX1KE0595lrwmUc9KiFXQqUkN47as6mc8JPh0098tDkMRejHHxv3dG8%2BRHk0lzHzzs0dWfugcYGTADohMOsAesV%2FiUkFz0SKwU75q0%2F%2BhJU6F2%2BpEi%2BzeoMB%2FxnWhq4YlBociDluAbzQO19YsNiKfNE2dB6tJZclyprAyDeHCuJGsCB5tDYJXkOJjvB6otaPb%2F%2BwAghwDI28SixS471oP4AVjfLbFXNdCy36u75a9JfPhT59JSs8gOU%2B1ZObGnNUkKjUeBtoRIXfvl84eYvdvu8J3om0gbRO9tTmjevUe%2FhMI2C%2Bb0GOqUBVak2U5CHj27%2FHNDAqH%2BQzbMv%2FGrw0S26nQnM6OjxnHYZ%2FP%2FouA9ITw4RgF%2F8bcjteoetI6qfOuQM5f06T66doFSDbt2o44KbJjPq4BiJ6JndyIEc2RBKUUr8D%2FeH3Uoen%2BOloh%2FgUchGYQKykgGru72ARu5PDv9zZhiXOjezJoSL4hIxHu%2BJY74dXp6v99nEVOdHRaYAusCXE%2Bxmjm3Uhw6b1w9u&X-Amz-Signature=9cf359602cfb7fa79cd3f9c08721f450aca18149c51a4dafb230981d0f829a38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDUM5PB6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIArlxZGHxpNJdxWT1hyEfVUXKEsiqD8B%2FsLCMJjIlVDbAiEAvg27pQdwgEwvRVAJuKZMrkXr%2Ffp7pB3Gp2yb7NIuBw4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHkq6SKISPd6KZtQ3SrcA%2FS2rwtt3di5LifZfJFbJo%2FdDyc0fkx%2BpObrNv45DnM8EkB02VZyDx3GGFTJ8ohWXOKVYu17tJRe3pUpzLlrktHvwffqyc9RiUAIQmHHcU0IwIhHwUt3lRCSTcUViP9eDZPzli3z91nyGzzV12s1aOU5AykW3nAGrHkFNP60tLdGiCjLxO4C5%2FczU6xnnWvVIzO5vI3KYs6cVt3FY2o10836HKlNiAgwZlh%2FUZGX5WzRAmy8SlcBPo6nIU4rA8TKWGjBdsbgQnlxzcHoAHFWSib8PgGmsdR6mTGKlrhr03%2Bx8irOjj546Sp8lmMPm3ejOzZKwsH26i42NHbaBNF3JWCd5YCFo6aoR%2FD3LvGRyeISnHyTh4rOSSRnFKoFiFt7GbOmJF2Rw2ibSc9rqiEHLzZ9HljBD5MpLAnA76uJAkhisAk%2F0cCR%2FuMS4%2BQXMTX2r3VLJM1BHmjeWxEIuAYl94ohcWbxvrxbLblxsCUuXFgt5IMwfXxpCw%2B7i88wqzenjF3Sl1sU4cZxq2o6cOgs9OWbhHguyAeSW4hJE%2By2uVwTe7WKh5AEmjQv%2FVNxXUc8I3XLByUfBSH9%2Fmbl9Q5h0SUo2WGa7mbIoW6Amdxj%2BobwPYTUAY60TyGG1R2XMIKC%2Bb0GOqUB1oZXvNRQtksfee8bfXv9K2W0seX9VCd77AiCEhEZzQVR%2F6S5qxry6Xtac3IaRWmb876mx%2F%2B78IXZ%2BQTRbLx2xynnK91%2BthOEkIIjKIoLf8Fkt9%2Bhx2pAac%2Bbvqa%2FUVj5N9arvBFoWtNF5ICss0KgViV5z62oiuADVlyQgOVKkJjMkATQ7maMA0j4j4MdqUcZe%2FvQCdw8Zh3GAHyuHxGzM9mehIWR&X-Amz-Signature=a4b53f3d9c9a295164c5e72d66392e261ea9f7d7ada591d309f729f1a5af494b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R6ZQ7PN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDDZQJ6NO0NfRonyTw1xT2ol86TaQa0RBevAHr%2FTOG04AiEA3Fdc1SXNQ5LYqqiMxuTRbaNkPvQBUOQReQmWbvruOFoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBYoob%2FoppCZ5HNSWyrcAxQG5wZwznBlqqs6J%2FIMxUOw4xNV%2BfvQDhi1woQw7XSJdcUdmMDPudkGhKs6GM6ipiQzeSmc40FunQ47edIsU3YCgZWaQ5j9paaxFd6WpQ2VgoN%2F3UndffI%2B7NXZbR2%2F5SJerASba948MZOnxWhYvo93Vios0c0J7Rrm%2FjpLkclTn5dtYZ8iQR5FX8miNO%2FVALZpmAdlwGf%2F441E0KKIX9Qe7kjubpWfCT6hdJ4yUL4FUNkSBKMFIR7fap8S0TRgDB1P8wSFO%2BtxuJVIJzwR7PGMEgaa4rAncXvDyApJAby0w5GrrTHXJYdVrnmzVetPY5fMAWkB0Ho9nwhowEqH31NY8kpeMAN5%2FWND5YIkxo98SriYiy7ZS3kq2m5layKBvYudys%2FkRQVCcyZKrS%2FcoGq92njLq%2FAiJ3fGxqRfigbLZcWH45IZ8GYbWVGA1MY5vAb5N3orTFLhArGZkRSPQKAu8mw0%2BTVtcoWoCbjJ%2F7Kebari9ZSaI44q8ev8MPPoeSGxrHd6aN3XrsZzvEjQXwyHnxgL6%2BzlmZPukeZ%2Fd7317UQUYBz6eRPP6P6JkdYVYcgEXz%2B7TLagwYAsRRtQuYKN6jIqECG7eu8ongWE8b9G66eNg4J8AYi3FT2jMMKC%2Bb0GOqUBNGamS5%2BIIC7UitvJQDxCOG9TUpjdPJD%2FC0QML0g9d8QOjLIQIp%2FRo4rHbkcuUzAz7eTd%2ByEHKbftiEcrFwGrsF1cU%2BznaQoEpxC9wIyimu%2Fh1z7y%2FzsV9O0MU8M%2Fno0lF2PVd6w8zlWjBCkW%2FYLBKpPmvwWKXw%2FWUq3028cNYfvHuid56EgldGjmt3YOtQaaMgTLcGVJE79yPC6aHmQOXNu%2BXcUR&X-Amz-Signature=6131126d85c04f9554e199229d243141458bf30bab146007f6ddfe3c0d78bb8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRIH2K2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIC5GahDgUW14PweIV6YAcHcxmiSGaIIlgUFft7q%2Bzq%2FQAiEAy%2BThm97BoDepga7e%2B8PV9T6StQ20PiI1e9xhfU0ewGIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBo%2BZ33OPQDbFkxePSrcA%2BspVuAyBfVr%2BvRxwx8FWIEPaYR3N8hAQCRcOdk%2FmaYXT9RIUFVnmzT%2BHTOv2GYfYsicRsfQcCUMEWuXjIgpxfgRcRp9Rv7%2BBUhkycLw5HGa9ERqBPdLIM1VvwiuIBTJuAQKWY%2Fl8FCPQvo7hGGmvCbSfNw0At90Lf4QIeBoJk6djLpRycTglkx3Z3Ab44Qo2jEMHfGQkZEakdI5gny9iH3dlMLfNGZbFFaya%2FtqZKWhNvjOBEXeCF1O%2F9Bv5KjFp9uFoGzba%2FaRO%2BD%2BsWCRRDbXohaOexufskv0vHcIWz4RO1lxo03aX3NIifA99XQ1lrnzHACFAqxHP7UBLPX1KE0595lrwmUc9KiFXQqUkN47as6mc8JPh0098tDkMRejHHxv3dG8%2BRHk0lzHzzs0dWfugcYGTADohMOsAesV%2FiUkFz0SKwU75q0%2F%2BhJU6F2%2BpEi%2BzeoMB%2FxnWhq4YlBociDluAbzQO19YsNiKfNE2dB6tJZclyprAyDeHCuJGsCB5tDYJXkOJjvB6otaPb%2F%2BwAghwDI28SixS471oP4AVjfLbFXNdCy36u75a9JfPhT59JSs8gOU%2B1ZObGnNUkKjUeBtoRIXfvl84eYvdvu8J3om0gbRO9tTmjevUe%2FhMI2C%2Bb0GOqUBVak2U5CHj27%2FHNDAqH%2BQzbMv%2FGrw0S26nQnM6OjxnHYZ%2FP%2FouA9ITw4RgF%2F8bcjteoetI6qfOuQM5f06T66doFSDbt2o44KbJjPq4BiJ6JndyIEc2RBKUUr8D%2FeH3Uoen%2BOloh%2FgUchGYQKykgGru72ARu5PDv9zZhiXOjezJoSL4hIxHu%2BJY74dXp6v99nEVOdHRaYAusCXE%2Bxmjm3Uhw6b1w9u&X-Amz-Signature=82d451a0a848aa37d1d562d3c5e04a8cac044570c52bfa2fdd9ca751fd842d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
