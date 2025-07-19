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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLN6UKXF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDczgP1LNxvrxDIa37mm4t%2FcFiMLovAw4gXti5Fb7ZX6QIgCQenJZbSLjbuF3AEieElwzVRu56Y4AbGUJ2UjKpk7J4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp2urvgehcoj3tzYircA%2Fs6SJkKQYYwejIoBrUA5CFGr3KpYaBRuyZp9Uer1osR0OglSVXItKu0ojLzjCAjHxHn13B%2Fe3mad7kM135xdxWKHN50wN6Gb1PZAG6vzI2pS%2B7ptM83aE3K%2BUYBbmMtN5KC6jPwEapgqOsTAODLU0OVNPCbH1qVU1eDqFqnrQCa2dbIp01vQ2IQWUNSre2KfVwkX%2F0pZkmgCETNsEbohXY4kwQuWI3I5z5DdmkRweYubVCPFA%2BWi2QDtRyXP%2FNAnZVlycFn5Sbh8EZxscwQMM6bx%2F4ad7NR2mUbJlDSxxd0Y4ocPpmnOjgHjpQSTQXEx4tu8eOLPE6l7uBsOH7PhJFDicwRYhI1oIokHZuSgWhYw5PWzqXXRkHmPMLjzj2DwUx3Ef2SoKjR7flk%2Fqp0emBAUpPyePxARVFvtqZxqQQ2wN%2BbwGyzEnT8Gp2yz5dmo2ToehmSyWWbszGFciNJf0mFtWJS%2BOnhKJJbAJoCH3R5yPn8vktEocHqwJ8k8USMpsxREDys3mhjRlXaVhhOHgklzhV5LjZjTpc21SDypgQs2awHb33tc0ISXV9PtHRy7gpmVzojPVjDGg2VOUv0eaa4juWI%2F%2FoPX80imbQ455wsRfnMJ26C1eu1pYPQMNy47sMGOqUB42b1wmMUzu%2BqRlryNFPbfSi6GTGhQh9JKZgsl6wmu9elbxz68QKGV4IYbTuW1LcNhmOX45na%2BoEzCBiyGWYxT0oA95%2FP7h1hQms2ow9wjI0kLF8D277TO%2FZD9pR50djwBhpf%2BBZXOHvX7%2FGMfSGx3ZlRmdbOXPJyLg%2B%2B9dU%2BeaCmy6%2F8CPCyW8JZguFGnMrOSFhEmGaqZu7PCtkFWL6bz%2FoXyiS4&X-Amz-Signature=930bbc51bc4e04bc799e07eecb59bc2ea1f6e5afc3f8764af8a31721a66c9986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLN6UKXF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDczgP1LNxvrxDIa37mm4t%2FcFiMLovAw4gXti5Fb7ZX6QIgCQenJZbSLjbuF3AEieElwzVRu56Y4AbGUJ2UjKpk7J4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp2urvgehcoj3tzYircA%2Fs6SJkKQYYwejIoBrUA5CFGr3KpYaBRuyZp9Uer1osR0OglSVXItKu0ojLzjCAjHxHn13B%2Fe3mad7kM135xdxWKHN50wN6Gb1PZAG6vzI2pS%2B7ptM83aE3K%2BUYBbmMtN5KC6jPwEapgqOsTAODLU0OVNPCbH1qVU1eDqFqnrQCa2dbIp01vQ2IQWUNSre2KfVwkX%2F0pZkmgCETNsEbohXY4kwQuWI3I5z5DdmkRweYubVCPFA%2BWi2QDtRyXP%2FNAnZVlycFn5Sbh8EZxscwQMM6bx%2F4ad7NR2mUbJlDSxxd0Y4ocPpmnOjgHjpQSTQXEx4tu8eOLPE6l7uBsOH7PhJFDicwRYhI1oIokHZuSgWhYw5PWzqXXRkHmPMLjzj2DwUx3Ef2SoKjR7flk%2Fqp0emBAUpPyePxARVFvtqZxqQQ2wN%2BbwGyzEnT8Gp2yz5dmo2ToehmSyWWbszGFciNJf0mFtWJS%2BOnhKJJbAJoCH3R5yPn8vktEocHqwJ8k8USMpsxREDys3mhjRlXaVhhOHgklzhV5LjZjTpc21SDypgQs2awHb33tc0ISXV9PtHRy7gpmVzojPVjDGg2VOUv0eaa4juWI%2F%2FoPX80imbQ455wsRfnMJ26C1eu1pYPQMNy47sMGOqUB42b1wmMUzu%2BqRlryNFPbfSi6GTGhQh9JKZgsl6wmu9elbxz68QKGV4IYbTuW1LcNhmOX45na%2BoEzCBiyGWYxT0oA95%2FP7h1hQms2ow9wjI0kLF8D277TO%2FZD9pR50djwBhpf%2BBZXOHvX7%2FGMfSGx3ZlRmdbOXPJyLg%2B%2B9dU%2BeaCmy6%2F8CPCyW8JZguFGnMrOSFhEmGaqZu7PCtkFWL6bz%2FoXyiS4&X-Amz-Signature=281c2b8a552af5eaee859870caccb8fa14fabce096907529a4f43c77e650fd13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLN6UKXF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDczgP1LNxvrxDIa37mm4t%2FcFiMLovAw4gXti5Fb7ZX6QIgCQenJZbSLjbuF3AEieElwzVRu56Y4AbGUJ2UjKpk7J4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp2urvgehcoj3tzYircA%2Fs6SJkKQYYwejIoBrUA5CFGr3KpYaBRuyZp9Uer1osR0OglSVXItKu0ojLzjCAjHxHn13B%2Fe3mad7kM135xdxWKHN50wN6Gb1PZAG6vzI2pS%2B7ptM83aE3K%2BUYBbmMtN5KC6jPwEapgqOsTAODLU0OVNPCbH1qVU1eDqFqnrQCa2dbIp01vQ2IQWUNSre2KfVwkX%2F0pZkmgCETNsEbohXY4kwQuWI3I5z5DdmkRweYubVCPFA%2BWi2QDtRyXP%2FNAnZVlycFn5Sbh8EZxscwQMM6bx%2F4ad7NR2mUbJlDSxxd0Y4ocPpmnOjgHjpQSTQXEx4tu8eOLPE6l7uBsOH7PhJFDicwRYhI1oIokHZuSgWhYw5PWzqXXRkHmPMLjzj2DwUx3Ef2SoKjR7flk%2Fqp0emBAUpPyePxARVFvtqZxqQQ2wN%2BbwGyzEnT8Gp2yz5dmo2ToehmSyWWbszGFciNJf0mFtWJS%2BOnhKJJbAJoCH3R5yPn8vktEocHqwJ8k8USMpsxREDys3mhjRlXaVhhOHgklzhV5LjZjTpc21SDypgQs2awHb33tc0ISXV9PtHRy7gpmVzojPVjDGg2VOUv0eaa4juWI%2F%2FoPX80imbQ455wsRfnMJ26C1eu1pYPQMNy47sMGOqUB42b1wmMUzu%2BqRlryNFPbfSi6GTGhQh9JKZgsl6wmu9elbxz68QKGV4IYbTuW1LcNhmOX45na%2BoEzCBiyGWYxT0oA95%2FP7h1hQms2ow9wjI0kLF8D277TO%2FZD9pR50djwBhpf%2BBZXOHvX7%2FGMfSGx3ZlRmdbOXPJyLg%2B%2B9dU%2BeaCmy6%2F8CPCyW8JZguFGnMrOSFhEmGaqZu7PCtkFWL6bz%2FoXyiS4&X-Amz-Signature=4907661d8d026ebdcded18ccd1cfade638f51f229d2f7901970c8a89c142c52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCSD2SOI%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBo7mwI5fEMA7IieOQZURjd8DROpjkIGgOKs88dC6gptAiEA0GRHvIAzvHXdb2LVBAb75owFpywloMiUVztKBk6rIKQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWn4FhCeCf7u6qhPircAyZNhs1GpunrYt5k5fqA%2Fs9jnj5fM%2B5Zj5FWcFQyU2LCJzYEqhojmleIsNBKrNaVoQV46MNoQrEekZ81pu532JVzIvbZBFeHuErU48zXrChbVG7fN34sb1RaAh0SEIXzLK%2BvMfYPWRHL%2B06fs6L2ZIBNgmnZZIZpPOMZvqF4HXwFOxo6qnLQx6oBv4%2Bih1GnGWACFhfchkxwBEFCGKGd7AfNhMjfAW95maiKG27lN0cfZ6LxJoIGtwKjCzX%2FSUXaeuBVb%2FL54GJczgk95cS8Dt5fQNWi6ABMnY7wllIzvKDLRySmH3Yq8B%2Fov0e77pNJi%2FhXzq8heoUPP4eXrOfrfC2SlKhoE%2Bgwzk17OfKNFjOvtwxCkG4JUjWiJqUvvUBN7D%2BhHXWukBkA4tptP0UYWD%2FH0suojwy89rdt66Y1Xa%2BUb3SrHqE4VCV6p9Ay0NMa5XW%2BehuKUra53te1KW1vBfb6OVU1XLzWyTUqrdUa9Rc9lw3DH57vm5wy%2BY%2B3%2Bu%2BN9pL2OaK%2B7S1%2BNLEWRle7WtTHrJzQ5hNWfHUw%2Fsi%2BFVfQMnhAeUCne%2FZvowi0ghpAKZ7a9rp6dX5y%2BpxhUU93%2Fug4GaZBDdTZTNSAK3gg98Zc8%2FlwEhA3n%2BI%2Biw%2FDMO%2B37sMGOqUB5kQpCsQJMOc6NhxHZt8MsvGKBKDz6Eg1nbH91Gm1o5g6b2nKNCK001TaoCnlRMZuFnxJwXhQKjHJHYLltoEApOR9tVOSar6X6BZfEwI99qT7NisjxxqMSDYHv%2BB1TF9i4EkLH%2FMWniArZsO0cKkSeR4Np8UT4D2H7l8%2BrVOtb2kfGYum4Fao9uPn%2FRJrcrzmlaIogWN6dLWRE3s%2BSmaydFIwW8mt&X-Amz-Signature=389c8ff7107e8a96d5f92f0908f0e9da9689cc664fb634b528001e41c5a1bf60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KO77TSV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFVx0gh4UStIV5nT5CwNkWFZXoJpteFdOEDWuHDlLv2AiEAvsYwXiocdEEO2eHXt5ShHYh4la90Lvb7PiryHgjLOv4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISuHGQRrrljMf9m2yrcAyBsC0XrEY3lvCKln0k9Gie8SgR8hoEemO%2BsJqeUwJMHdvoP%2BkaKEVkNUUSFLCVBF4fz8eeZ8oJlcVRC7dQq94feJfhs9STHlDhrfI30QEh0bShub6sORmpkKk1%2BZ51H3PO9%2BDDkLRVxYhrPalp6v7B%2BiyCgVSubtoDHsEjQGX60z%2BXrjC1S3ouRR5CuH%2BvfuZwjogJBFaEsY80VwFheMpKqpmmKBWOKV0NPd9IECmw65ldPhMfFEUq7K1yKB%2B%2Bi3xJnA6V592a5%2Fw0GSQD3zCOW9gUSEWpZakbso9Rgw7LkhGblMzzqTWctuXqP7i7qc%2FOOfL9kwDFGoBCuivssVqXdL3VJjUhyZU9fPNR%2Bajui%2Fn9bzsp60%2FGy4VgHbHr8Mc27qJ9sIbXYqU3F5XRRyu7b5fBjdAWigrCtU7PuX2zmv7muc836CVn576tnTkWhJOg4LpuBtjkz8S7%2B1IiL09TGbKT%2BRFddC8RKWcUW6ds8UdzHKb2l0s4zxrkK9yDFxpzvbRbheXkEHyBvXxv8UKlbTTGaaDsJi%2FSNhOa2to0OG90kmYvmPMURbQNfIqZ77v%2BH0LFHp%2Bc5cDtdUSFoatJhZ7phhXZco%2FvaZ4W7Zuyh5BQNPDotG5rS1rbJMPS47sMGOqUBqlNEaL0e9FhPY25snYhQDwI%2BuPZaeIeFhxyPxYFoD7Lgq9JpIjaZSqKG9Z%2FThSkgJVzk7GKu96rcaT3%2BFzdL3xbaQe68eKHIx%2FMYr6Mhh1RmDWSBjIhZ2izMkYwHBKVNeT3WDEOKYQFjj%2FAtQnJIEWA%2FECT5qAd2K5yUqTau9J1sU3TmBc4Qp6zz%2BITAIV07ch35R%2FLKRXJi7rmL0sy%2F2PDj1uG6&X-Amz-Signature=cdbd3dec411abfdf2cc92464bf8c3aea0806b927c453621ff6318fbc501bc8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLN6UKXF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDczgP1LNxvrxDIa37mm4t%2FcFiMLovAw4gXti5Fb7ZX6QIgCQenJZbSLjbuF3AEieElwzVRu56Y4AbGUJ2UjKpk7J4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp2urvgehcoj3tzYircA%2Fs6SJkKQYYwejIoBrUA5CFGr3KpYaBRuyZp9Uer1osR0OglSVXItKu0ojLzjCAjHxHn13B%2Fe3mad7kM135xdxWKHN50wN6Gb1PZAG6vzI2pS%2B7ptM83aE3K%2BUYBbmMtN5KC6jPwEapgqOsTAODLU0OVNPCbH1qVU1eDqFqnrQCa2dbIp01vQ2IQWUNSre2KfVwkX%2F0pZkmgCETNsEbohXY4kwQuWI3I5z5DdmkRweYubVCPFA%2BWi2QDtRyXP%2FNAnZVlycFn5Sbh8EZxscwQMM6bx%2F4ad7NR2mUbJlDSxxd0Y4ocPpmnOjgHjpQSTQXEx4tu8eOLPE6l7uBsOH7PhJFDicwRYhI1oIokHZuSgWhYw5PWzqXXRkHmPMLjzj2DwUx3Ef2SoKjR7flk%2Fqp0emBAUpPyePxARVFvtqZxqQQ2wN%2BbwGyzEnT8Gp2yz5dmo2ToehmSyWWbszGFciNJf0mFtWJS%2BOnhKJJbAJoCH3R5yPn8vktEocHqwJ8k8USMpsxREDys3mhjRlXaVhhOHgklzhV5LjZjTpc21SDypgQs2awHb33tc0ISXV9PtHRy7gpmVzojPVjDGg2VOUv0eaa4juWI%2F%2FoPX80imbQ455wsRfnMJ26C1eu1pYPQMNy47sMGOqUB42b1wmMUzu%2BqRlryNFPbfSi6GTGhQh9JKZgsl6wmu9elbxz68QKGV4IYbTuW1LcNhmOX45na%2BoEzCBiyGWYxT0oA95%2FP7h1hQms2ow9wjI0kLF8D277TO%2FZD9pR50djwBhpf%2BBZXOHvX7%2FGMfSGx3ZlRmdbOXPJyLg%2B%2B9dU%2BeaCmy6%2F8CPCyW8JZguFGnMrOSFhEmGaqZu7PCtkFWL6bz%2FoXyiS4&X-Amz-Signature=a236ed51a68ca401b11a485cdd1fe0bbca4a2e08f94807f36d180b40e186b6d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
