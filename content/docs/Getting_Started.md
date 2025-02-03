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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O67EMTF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFZVEFyg%2FsWfiFJFjPoFdNkAVEzCKGbdZp2oHO00n0xZAiEAyIbMK1NkyUl6V%2FLibWJk%2FDh6BbpszsexGhORvKXcxzgq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCglFUMub%2Fey08vVRircA%2BTOsn1U%2FtpGO%2BSSnNK%2FMK4K%2BHLD1rk9%2Bpon9fs%2FyYtKSm9rekHArwIIfjXCiVdX5xULMd%2BFp4DSklxlt79Z7QH%2FRr3UCxity3js0qAqVeZcsN0phxBtxG8PP9nmzQ%2FVxkhA3jkEOTVwGRrykgsVLvf9voi4IoMLyL1HL2rcbPf9g4Cz8LK3bkdzgNTWjTizqiN2wXRaK%2FqJN9JXKQnAFQQ3kJUZVWk1kYbLRmFPT43v0Zqy7SpZPjv3%2Bu4BcnN085MDt28BomUODaX%2B%2FQVbOG4M%2BLNej17p3pqyL%2BWNxmM5%2BI%2FTak17PxSXtIF8AXuXA8zudNomHixUui1z8knBegkkiSSHJ4uLu6f%2Fvnret0NO2eVkgPyNz1BrfJZgP5g8f4wx%2FeOj%2B0rueqQ1TCm3YAg7BjcKbS%2B8M8%2BmXvuKmR%2BX1m4Y87TzGgwifSSslleoxk%2FimM8IjdQkkSq07xZVPXDsYlFdC5Lu99Aol4v9SiN84q95SFg3WdjwPkrTTz4hYJkJwmjK1%2Fp1b5pf9QmIJVRX4vckmXWe9sC389zIp4Z5YzId7xBS0Kw6sFkMxg6awxmjw0MOTD41BMuFxv91ycTg5c3i2zDL6qEAHaZN3RGIeu37niWM6T0a8j51MKvMg70GOqUBbP06ZcSG6G%2B1mQf%2FSTa2aXBOcPW3NAwH2G8P7eMluaYxrjh%2FIOaQi1oexHY7WFqvKLL8ddzIyUGk%2Fo1CRWK1h1WN4FiXItwM6VcbPKeBQlGDiWPt%2BNEZU%2BkJCpW6MnwtCimM2Z1584dr3OobQ0KrxCLt%2FP9eAFi543lDrsFR2Yykk19pWLE1kaGvhWVdCs0cUc55D2Q7kAcWKHjoHSNshVKuQ1QK&X-Amz-Signature=9ccfd0a3c0c4ef9f16a975a43fc89776365a700d67aff626fd48389a2cedd818&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O67EMTF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFZVEFyg%2FsWfiFJFjPoFdNkAVEzCKGbdZp2oHO00n0xZAiEAyIbMK1NkyUl6V%2FLibWJk%2FDh6BbpszsexGhORvKXcxzgq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCglFUMub%2Fey08vVRircA%2BTOsn1U%2FtpGO%2BSSnNK%2FMK4K%2BHLD1rk9%2Bpon9fs%2FyYtKSm9rekHArwIIfjXCiVdX5xULMd%2BFp4DSklxlt79Z7QH%2FRr3UCxity3js0qAqVeZcsN0phxBtxG8PP9nmzQ%2FVxkhA3jkEOTVwGRrykgsVLvf9voi4IoMLyL1HL2rcbPf9g4Cz8LK3bkdzgNTWjTizqiN2wXRaK%2FqJN9JXKQnAFQQ3kJUZVWk1kYbLRmFPT43v0Zqy7SpZPjv3%2Bu4BcnN085MDt28BomUODaX%2B%2FQVbOG4M%2BLNej17p3pqyL%2BWNxmM5%2BI%2FTak17PxSXtIF8AXuXA8zudNomHixUui1z8knBegkkiSSHJ4uLu6f%2Fvnret0NO2eVkgPyNz1BrfJZgP5g8f4wx%2FeOj%2B0rueqQ1TCm3YAg7BjcKbS%2B8M8%2BmXvuKmR%2BX1m4Y87TzGgwifSSslleoxk%2FimM8IjdQkkSq07xZVPXDsYlFdC5Lu99Aol4v9SiN84q95SFg3WdjwPkrTTz4hYJkJwmjK1%2Fp1b5pf9QmIJVRX4vckmXWe9sC389zIp4Z5YzId7xBS0Kw6sFkMxg6awxmjw0MOTD41BMuFxv91ycTg5c3i2zDL6qEAHaZN3RGIeu37niWM6T0a8j51MKvMg70GOqUBbP06ZcSG6G%2B1mQf%2FSTa2aXBOcPW3NAwH2G8P7eMluaYxrjh%2FIOaQi1oexHY7WFqvKLL8ddzIyUGk%2Fo1CRWK1h1WN4FiXItwM6VcbPKeBQlGDiWPt%2BNEZU%2BkJCpW6MnwtCimM2Z1584dr3OobQ0KrxCLt%2FP9eAFi543lDrsFR2Yykk19pWLE1kaGvhWVdCs0cUc55D2Q7kAcWKHjoHSNshVKuQ1QK&X-Amz-Signature=8bfa5026cf82d4460caac4fad4a2887f0b0f0d0c179012fcd02591663858e7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5DS46O%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDYZy9ev15pVBFLePEOoCKY%2F1N0dclUuNvBIwk9oqlj%2FAIhAJgVH2WZu16Valj3DjsvCnRLxa%2BVGWliG2xUS964BxYKKv8DCBkQABoMNjM3NDIzMTgzODA1IgzdNF0vr%2FJkuFNSDyQq3AOooXfJc3jYx6ZndH9YZ%2FR5vMJBXlZP6bMQ1iC4KlTtYIYDCyg7TpIZcWSwMaeKoxVqFOi7M1%2F1HgM07ZkKoe3awKMpzBE862P3rgUfRRokt9uzWIFibbZ02orOY3WtzYd7wklBK2uYIFoXB2QfbYqPLdnxPYa3RddmgxHrLiRNpL4fF38MPPn29tYrEwDLJurSzzdhjYjRT%2BEL25ikXCjt9wwMLiNjCpup1tOsnK2OgO%2B6q0kmbBQsSJJMPBBaLo23Aey1XlkfPOt0u5sHrZccCc9BSPQtaxsHGR0sB1Yasv6C5NvRu7m%2F%2BYRSWFBhfDBeNTG4KQb5JPk7AxjWCJYUBGSDGWhawyhAJYCxyT9JIGPnpmj9GDbb07QRGoit73FkA1n1kEqR5hdX63YMuZI0jLeot2%2FmNJZePvAOKaZsBAPCzU1bKYFZiPpbigDMciKnC8MXuY5WuUyFXVdFluvVTFTTDyUkytx8LRfNbsldGwjBWO95YN1SpHxt9PS%2BhpF7ujcOlzG0phIaOM1sK2gFpKia52leJ8aUDScE3n9G33%2FoMBmOhGFuWifZhREewLh6XfnsEbahYX2XcQcfYuWxxniM2BBTxsyqaBYRgQZNoF88h%2BVx75sh3uIb%2BDDby4O9BjqkAUoYKFx6meeEAP5b3s%2FTRWpFXulVQQGycnOSd36UXnHp2fAFMDurEpDeWzOxZCN2d1cjfWdMWWv1t%2FELbcDk8YkCu%2Fd4%2BnH1Nr4bIDm0kzwdetAzfN3Lh%2BpTSGhysYmJeAKSRfl07sIxgpgLVB%2Fb%2FJzocqr%2B8WAu21iNiMrgPCGmRYrjif3jEpZgP9ECWrQTf4IEV69rvtHE0AB%2BGNwRYw6g%2FsSI&X-Amz-Signature=61b4d3aef1b118ce42f3a5276f9da9ad55a9a9eea0418b86826571010e7aaa98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCUPHH7%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCrCJXypZGcyiSjXacD9sEo3Ojlfv%2BJfe84MPEQNRTsowIhALEsEvVwupvb%2Fvch4GIUMhixEztQ6h4fbEqKh235711gKv8DCBkQABoMNjM3NDIzMTgzODA1IgzsRHS%2FWK6WAFevnzAq3AMCoWFMo6RufFwaWF5nfBE5Y7gT64TOE7SFa1I7y45ngxQ%2B4d%2BVIo%2BWqF2uhg%2B%2Fe4RovxUQ58V7scvrcZvAK8GUSZJQAPtBQNMc5EezRoIiZDSPKIaCBn%2FUJDSaIHhRcIGquem3zYIrvi2wDAmlABsbAV4U3J%2Fnye85uD03ZsV%2B6YtD4KPnoSzybqGWvuWWxpCY2ycRn80guI6hBHDykSZgGP7soOLXRoBSvJWKMIINqDjR22CyRETL58cP2B1hUd48N7kK5LPd3ZnBeZEiP8m8fL1BnYI6oqeCst9%2BBjjMQZ2rW67gXVZIKZrt%2Ba7YhhNQUTWhVhw%2B%2B%2BDu4Q9lzyeGrN%2FMD0%2FB46yVCfa4AwvAIc8mbevKcD%2F4SsnTU5bJ3WyQYS8BrmXd7AUKu28SCTqjflP3sWVTVG%2FHY8WRChAHaA9T0WYzHe3bIQqIpx6ryMrYw1%2BQmGeBlYbB0RGX%2BHG%2BbeiYKE9uphVwAorNvgTv8XQJmaHddKJ2xU1wYSRPbq1rJqj%2BDUd0yRBrUCibc9Lr62J4%2BSC1uEwqnmmjiIPcGcyEJ4kNOJivfNBNiHDIG9iL0s20GibWif7XgB7Y5KdOv8xRWKOxwRd7l2KZk9Olf03JIXsRctgVNhXytDDqy4O9BjqkAb%2F2kJED9ENcf7oGuBxGtbXRypkzIMOENsh5J1gtQDZXtuYXGuzkLznyuAP1RNeom%2Bn3RlESOF9tkx8kkgImkpMptWA4P1Fs6Fd9kE0%2BPKn6pw6hDX4neLag5GF9ReOtIYDpIPKxLWGKCIqONdGfAsnEt5QonZpp702jSKZaCry8DNjoBISpKXgkZT%2FNdfhhUSsXjBvEHy3B%2Bg%2F61NPv1is8JW4J&X-Amz-Signature=61aca747b43d87cb7c441a5573e3923c4b436f4ccb5c0773086dc3debf9d3fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O67EMTF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFZVEFyg%2FsWfiFJFjPoFdNkAVEzCKGbdZp2oHO00n0xZAiEAyIbMK1NkyUl6V%2FLibWJk%2FDh6BbpszsexGhORvKXcxzgq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCglFUMub%2Fey08vVRircA%2BTOsn1U%2FtpGO%2BSSnNK%2FMK4K%2BHLD1rk9%2Bpon9fs%2FyYtKSm9rekHArwIIfjXCiVdX5xULMd%2BFp4DSklxlt79Z7QH%2FRr3UCxity3js0qAqVeZcsN0phxBtxG8PP9nmzQ%2FVxkhA3jkEOTVwGRrykgsVLvf9voi4IoMLyL1HL2rcbPf9g4Cz8LK3bkdzgNTWjTizqiN2wXRaK%2FqJN9JXKQnAFQQ3kJUZVWk1kYbLRmFPT43v0Zqy7SpZPjv3%2Bu4BcnN085MDt28BomUODaX%2B%2FQVbOG4M%2BLNej17p3pqyL%2BWNxmM5%2BI%2FTak17PxSXtIF8AXuXA8zudNomHixUui1z8knBegkkiSSHJ4uLu6f%2Fvnret0NO2eVkgPyNz1BrfJZgP5g8f4wx%2FeOj%2B0rueqQ1TCm3YAg7BjcKbS%2B8M8%2BmXvuKmR%2BX1m4Y87TzGgwifSSslleoxk%2FimM8IjdQkkSq07xZVPXDsYlFdC5Lu99Aol4v9SiN84q95SFg3WdjwPkrTTz4hYJkJwmjK1%2Fp1b5pf9QmIJVRX4vckmXWe9sC389zIp4Z5YzId7xBS0Kw6sFkMxg6awxmjw0MOTD41BMuFxv91ycTg5c3i2zDL6qEAHaZN3RGIeu37niWM6T0a8j51MKvMg70GOqUBbP06ZcSG6G%2B1mQf%2FSTa2aXBOcPW3NAwH2G8P7eMluaYxrjh%2FIOaQi1oexHY7WFqvKLL8ddzIyUGk%2Fo1CRWK1h1WN4FiXItwM6VcbPKeBQlGDiWPt%2BNEZU%2BkJCpW6MnwtCimM2Z1584dr3OobQ0KrxCLt%2FP9eAFi543lDrsFR2Yykk19pWLE1kaGvhWVdCs0cUc55D2Q7kAcWKHjoHSNshVKuQ1QK&X-Amz-Signature=fe390624c3310cbc0cff86f92324a28a5a3ce5b96dd6978129a84ec8c40efa48&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
