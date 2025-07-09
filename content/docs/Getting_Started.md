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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHZRVUN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaEGh%2FdeXDQ2k9pGLkbmZNZjVjxv2xD5vtqzuWE3yp%2FAiBNB%2F%2FbxPxiv3iOpgVoTYHPX8f4ui6lrMeruQiqYo6iUSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSwaxvoWl0V7KrfIjKtwDWoSeY5dZUN6HLpjZ7wGTl%2F%2FxK6RGadHJqL7QzBCfxnKc9qxOf5hp38%2FS9pAjfjdGh6%2FDidMQexnuH7afTcIF12vjtg2V3TztOUfujcsxiWX6bkoaBpEqCrJ7TbIas7HzXovS0gKw9wBZJTmBhCaMdGbt3TLFjUkoeqIWnkfSnIsIP63%2BukcAJtZn4Wt65dLIUpoXtQGWnMUJz6sG%2FkDdHrHm3tFvMs9IzK8GaSW60hPYpJD8qbELIjFsixVPGpCUAcztMaHn9Nh8FlFi6M6A0pYfoZO3Lu0QrxRtwWi6MoabM3F1ciaTsf44zdU%2BVJlVbUXU1910jR%2BgHHFmQBUX3cMQLW6kXVLv1r71qDRrtxP4r5ndQZDRBN5bxDVbIn2Yz1jwlOotKG%2BwDITZdSNK8XNvWuvWar3lLliSYF7NOE1nLSyjHI8tK0I9DsNmMWAYpsn%2B1%2BY4t4g%2BemMb24kIqMaxP6ysL3tBdbcsIL71QDVZuTSXfDHP%2FdGF8PT6n3oYXuPj9TykyHl2Ik7Eo4zxy%2BNoQliVIJRMwr2pFof82ucaZijGwAsM1tkQFFBgnpY%2B%2BB%2FQ2QY5Lf0lFn3JX1aXTsr950WhymH32hfyE8zLenN1UxQE8pLMRlah9Xswq%2B%2B6wwY6pgE5FPBgITnlwNzmz0%2FAbSqZJ7xvAEvJJFnHzV8KFaNFefuP5XotJRG4uYxll1B4BFe8P7mPQ0fMzVG3EIRMsHmCm%2F6EePkzC%2FC4Cob4J9Gt5SMDTjAklCFqssFuFnbnenhCGlvHcyPpX0eEgB9EIO0PLmvjJzs51GXz9E6TV2fXFGn6I5dRziSwXtyVansJhDc%2BCSzSxRo994GKdMC9Eg2PmyaKCRss&X-Amz-Signature=d84b6aa5a8498be712f109b36336cc2323e68295397533fd62805d50fbf99fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHZRVUN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaEGh%2FdeXDQ2k9pGLkbmZNZjVjxv2xD5vtqzuWE3yp%2FAiBNB%2F%2FbxPxiv3iOpgVoTYHPX8f4ui6lrMeruQiqYo6iUSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSwaxvoWl0V7KrfIjKtwDWoSeY5dZUN6HLpjZ7wGTl%2F%2FxK6RGadHJqL7QzBCfxnKc9qxOf5hp38%2FS9pAjfjdGh6%2FDidMQexnuH7afTcIF12vjtg2V3TztOUfujcsxiWX6bkoaBpEqCrJ7TbIas7HzXovS0gKw9wBZJTmBhCaMdGbt3TLFjUkoeqIWnkfSnIsIP63%2BukcAJtZn4Wt65dLIUpoXtQGWnMUJz6sG%2FkDdHrHm3tFvMs9IzK8GaSW60hPYpJD8qbELIjFsixVPGpCUAcztMaHn9Nh8FlFi6M6A0pYfoZO3Lu0QrxRtwWi6MoabM3F1ciaTsf44zdU%2BVJlVbUXU1910jR%2BgHHFmQBUX3cMQLW6kXVLv1r71qDRrtxP4r5ndQZDRBN5bxDVbIn2Yz1jwlOotKG%2BwDITZdSNK8XNvWuvWar3lLliSYF7NOE1nLSyjHI8tK0I9DsNmMWAYpsn%2B1%2BY4t4g%2BemMb24kIqMaxP6ysL3tBdbcsIL71QDVZuTSXfDHP%2FdGF8PT6n3oYXuPj9TykyHl2Ik7Eo4zxy%2BNoQliVIJRMwr2pFof82ucaZijGwAsM1tkQFFBgnpY%2B%2BB%2FQ2QY5Lf0lFn3JX1aXTsr950WhymH32hfyE8zLenN1UxQE8pLMRlah9Xswq%2B%2B6wwY6pgE5FPBgITnlwNzmz0%2FAbSqZJ7xvAEvJJFnHzV8KFaNFefuP5XotJRG4uYxll1B4BFe8P7mPQ0fMzVG3EIRMsHmCm%2F6EePkzC%2FC4Cob4J9Gt5SMDTjAklCFqssFuFnbnenhCGlvHcyPpX0eEgB9EIO0PLmvjJzs51GXz9E6TV2fXFGn6I5dRziSwXtyVansJhDc%2BCSzSxRo994GKdMC9Eg2PmyaKCRss&X-Amz-Signature=86760fd5a6d546b8f73bba6580857f51a189d125e2a364a864f4a4da9198e1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHZRVUN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaEGh%2FdeXDQ2k9pGLkbmZNZjVjxv2xD5vtqzuWE3yp%2FAiBNB%2F%2FbxPxiv3iOpgVoTYHPX8f4ui6lrMeruQiqYo6iUSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSwaxvoWl0V7KrfIjKtwDWoSeY5dZUN6HLpjZ7wGTl%2F%2FxK6RGadHJqL7QzBCfxnKc9qxOf5hp38%2FS9pAjfjdGh6%2FDidMQexnuH7afTcIF12vjtg2V3TztOUfujcsxiWX6bkoaBpEqCrJ7TbIas7HzXovS0gKw9wBZJTmBhCaMdGbt3TLFjUkoeqIWnkfSnIsIP63%2BukcAJtZn4Wt65dLIUpoXtQGWnMUJz6sG%2FkDdHrHm3tFvMs9IzK8GaSW60hPYpJD8qbELIjFsixVPGpCUAcztMaHn9Nh8FlFi6M6A0pYfoZO3Lu0QrxRtwWi6MoabM3F1ciaTsf44zdU%2BVJlVbUXU1910jR%2BgHHFmQBUX3cMQLW6kXVLv1r71qDRrtxP4r5ndQZDRBN5bxDVbIn2Yz1jwlOotKG%2BwDITZdSNK8XNvWuvWar3lLliSYF7NOE1nLSyjHI8tK0I9DsNmMWAYpsn%2B1%2BY4t4g%2BemMb24kIqMaxP6ysL3tBdbcsIL71QDVZuTSXfDHP%2FdGF8PT6n3oYXuPj9TykyHl2Ik7Eo4zxy%2BNoQliVIJRMwr2pFof82ucaZijGwAsM1tkQFFBgnpY%2B%2BB%2FQ2QY5Lf0lFn3JX1aXTsr950WhymH32hfyE8zLenN1UxQE8pLMRlah9Xswq%2B%2B6wwY6pgE5FPBgITnlwNzmz0%2FAbSqZJ7xvAEvJJFnHzV8KFaNFefuP5XotJRG4uYxll1B4BFe8P7mPQ0fMzVG3EIRMsHmCm%2F6EePkzC%2FC4Cob4J9Gt5SMDTjAklCFqssFuFnbnenhCGlvHcyPpX0eEgB9EIO0PLmvjJzs51GXz9E6TV2fXFGn6I5dRziSwXtyVansJhDc%2BCSzSxRo994GKdMC9Eg2PmyaKCRss&X-Amz-Signature=e7f466a70540df25ca5a0689c99991053649355878452b076631680b73f936ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNPCWVC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwF7jN93nV%2FZ66aiMPoeR1Rt0LOn7X537cnRhoAI5qgAiAfsnvVvNV35svfH0zl6wShgps7ZZqzOgPutmBBHLWYtiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGO0YfqSfAK0xM5rPKtwDZxCyiVhVJ%2BMFGX6jW5DukQ34bSosNcNaxndGR2YcyGN2WBouV19fc5CzGoTTRwcoY1em8z6FloNzNS00ozX6N%2FEI%2BV43VfSR76Gu%2Fz7HvVLht8M5zMIuWMMw%2BZ6VPvPqy3%2ByFklKVaNjCKOUwkRZxC%2BaH75xgx%2FAcd%2F%2FvpLcQuZpy6NJiYrMkfiYEDSQfcH6PM5hj9n5LUrJnNZ74bB4RwJst%2FvDSBSIbP2L8z%2BsmCQLEWbGTWOGDIZGLbfFGGCUEPtwNvOHCsqcteUn75eYMxpEBzgVO5XBLVwbEJP5pPGySVTk9Mv9uBa3H1iySUcbxjRzTfa20wQYkt8k%2FBMB0i1Rp564f%2F6G1P8OhXQTf6SCd5WznENvvn2Hn37kOuUdBHtxNk11xTdRu5XtzFuuw1lHWXM9SRdxQKPeVwB2UBwnJdjXr8ZyZ6QDoYMIzulhoaJBF2I2Aqy5vms6QBkrggdJo%2B67d9dE12n%2B13iCO1k3p3NeXd1mz3xSKQfVbZ9EmbrdvFCHGEah%2FDHqayL6vL0taTiEcENn6ygXhC0eM0ruivY4VdZl3OKdhpZPMXARq9C5V9dzGkvlVlfMHMnXaMJAdn3A49rxN%2BTklxLaJsQOYbQQzTOtD%2Fv4GBswte%2B6wwY6pgHXsN3sg9b6SpZC2%2BPJTgfw%2FtTezvho2JrpwhA%2Be2ML3jJmPU%2F%2F1hROt8D1gAFBtKPpjFJinAyYeC2uQW2xCkG6LZOhGyAqnBxt4C%2BDw23SKwZciCKUd20XyfxEMFY9o0677Yjq%2BXrRh7jHHmOSi0iR59TjJa95f0M9clIn19%2Bx2PwGWmqS1KwM%2FfiOeomxrz2jQDniIT8EkOq4LFObXsJosEviJ8tN&X-Amz-Signature=dc21e8f4333211559095cd400b9fd83d94343d234bd987fb089595ab18c73add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PVKCQTK%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHu3YbnR%2FP0kOVfgbfrFIagFMww%2Fa0cEJxYB1Rfd7DOxAiEA%2FrSJ2yHS4v8Q37E4sw123Em%2Fjgoeq8jNhAP02ltHcsAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwU4Q%2FZuRwpT6VhYyrcAyFqRhYiE5nlok4%2F1wvJcNaAD1DbzgBQxB52l%2FoTkCcoPh%2FHAGReDDndHxPfTOm%2BdenpEX7uxtpz3zOJNKvhUzJ%2BF9V89sxvQSwWQ6bcpT3ZkDHXMtM%2FY3lMFmEviTWkKMORPdsCR7f2lHTvjgYJBKIPr2EZwKNcGRoFVY2c%2B9mtdU0dcxVvcvges4dkCDNs%2BZAwoZYUsUSa1ZKKsLFbI%2FOiYDakLVLKhiWJBTz1wftxZrjjHhAf%2FLJABHmzinN8LLeAqu31T08FhYLAcPwJgCSjCp9WwB6mrmiwMHNZiZfAajahnueu%2FJuXpoMrtfFUezKbVN4mqHwQEP8YX0BK2iM4%2FLs6bTYNC%2FNJtHmo6dwxCiBqeL6lwWd%2FGF7AdulFer45YaeHjOpvO5fCSNQ2GGoAZ986t4k4P5jl5v01pRTovIqfMJc4KlHLoW4DKDN8V9c8DBh8MFPaipXksgaNtsylpMUzfoJd%2BvbuDrwM81BOjYsoXQal%2FdE02uQOyjaA5XnGZPnPr8sibut1yPBpQf1Rk5uez85patmUpsIvEcR5geo3thitHeObWqqPZsSTTtY9vpExOo13zomC09MlA7vo1dp94%2FgDy9QiZsldW8cEGxp00Bsas7DE%2BnZaMOfvusMGOqUBGZtvsRCnJAKB%2BGzYXUeHOHDnu1Otu8oNjF3sN08jUoH8dYn758vGZbA2b9w9lu%2FT%2FWA27SXnyvp%2FZkg94pK3yJyZQR5UmVGUqf7Sj7qLrB7vrafNNeljyFJL%2B0d1fvfzrGl2tZ8jKJ%2BuwADL5wA3USNSOnoAPOLqOPshqSIuJOe3jE2cu6cE2m8wHqtyYlV1x7JLeIYugo7Gr%2BsUW77JUzLufMWf&X-Amz-Signature=a6768cac1d2908f39f4c35100c89cbc00df1a71fa8aec6710c476be1459f710c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHZRVUN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaEGh%2FdeXDQ2k9pGLkbmZNZjVjxv2xD5vtqzuWE3yp%2FAiBNB%2F%2FbxPxiv3iOpgVoTYHPX8f4ui6lrMeruQiqYo6iUSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSwaxvoWl0V7KrfIjKtwDWoSeY5dZUN6HLpjZ7wGTl%2F%2FxK6RGadHJqL7QzBCfxnKc9qxOf5hp38%2FS9pAjfjdGh6%2FDidMQexnuH7afTcIF12vjtg2V3TztOUfujcsxiWX6bkoaBpEqCrJ7TbIas7HzXovS0gKw9wBZJTmBhCaMdGbt3TLFjUkoeqIWnkfSnIsIP63%2BukcAJtZn4Wt65dLIUpoXtQGWnMUJz6sG%2FkDdHrHm3tFvMs9IzK8GaSW60hPYpJD8qbELIjFsixVPGpCUAcztMaHn9Nh8FlFi6M6A0pYfoZO3Lu0QrxRtwWi6MoabM3F1ciaTsf44zdU%2BVJlVbUXU1910jR%2BgHHFmQBUX3cMQLW6kXVLv1r71qDRrtxP4r5ndQZDRBN5bxDVbIn2Yz1jwlOotKG%2BwDITZdSNK8XNvWuvWar3lLliSYF7NOE1nLSyjHI8tK0I9DsNmMWAYpsn%2B1%2BY4t4g%2BemMb24kIqMaxP6ysL3tBdbcsIL71QDVZuTSXfDHP%2FdGF8PT6n3oYXuPj9TykyHl2Ik7Eo4zxy%2BNoQliVIJRMwr2pFof82ucaZijGwAsM1tkQFFBgnpY%2B%2BB%2FQ2QY5Lf0lFn3JX1aXTsr950WhymH32hfyE8zLenN1UxQE8pLMRlah9Xswq%2B%2B6wwY6pgE5FPBgITnlwNzmz0%2FAbSqZJ7xvAEvJJFnHzV8KFaNFefuP5XotJRG4uYxll1B4BFe8P7mPQ0fMzVG3EIRMsHmCm%2F6EePkzC%2FC4Cob4J9Gt5SMDTjAklCFqssFuFnbnenhCGlvHcyPpX0eEgB9EIO0PLmvjJzs51GXz9E6TV2fXFGn6I5dRziSwXtyVansJhDc%2BCSzSxRo994GKdMC9Eg2PmyaKCRss&X-Amz-Signature=bff2f3b1e5ee17c7573ee0cb735e7fedf32963ae0ca06baab3320e2b5c3d734e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
