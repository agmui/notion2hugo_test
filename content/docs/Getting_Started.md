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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCHZM2I%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjZxsmgphqIFG3qgLi9f6azuDzE5OWkJbRf9ZI%2ByxH2AiEAkA7ajrwDdGNpkY9Rlf2zbmGUT5EbRSr5Qi84bbUzgRYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgq7IQ9WXhefdAwJCrcA0ZAoGZ%2BxQALCkDM5L6wV8s4u4Drq%2FlpwnINwYBkw3EAl3%2FbgSrT3JF0an5d9E%2BgcwQNnEC8d%2BLtp0UY56WIC%2FH%2BAv1im2HmJu%2BU0Ob3J8KwKEMXRzrDaRKoR0yUKHwk6ETrt%2BVxYiPccPP66zFxbVxS9%2B4mMy5UfClvs9c3jE0KJx1AdrKX2UoUBcLJ2vKLVo3kqjTWEYfkTOh%2FS9sn3zfs%2Bd77ckpNKeJqLUfd%2BNYubT7%2FDTNl4FRL91NRP1V47W%2BaHZKNgADFM0zBoSOhtuTQMytUEi9NgtBdc7YjcLwxaq25MLP3IUjN6SycB4Wb9CcSIt4ALACYk2EEgri1aTVGSNyZ5Sp50bn2bPy11RviCFHS7voyf57K4wHw2b9dUr%2F8%2BnyfvSbymyRdb0o23giA5Kql9LEmDtbsXvJcumO2zX2%2BCbDjWJ5WZ%2BXEvMWrtC5o5S9tKzVTMKZb%2FOzXknqfp62rgTu6YWXuI3xeFNO7fY903Ux1oFPCv64AR1WRRPROsokd7nNbvTiLd3bjoNaTn5ug7pS9VO%2FMgtnA5PqXg%2BYL1Bis%2Flp91tNpPP3UzqbEzZOnuK6HFtGayHILF5PRXMu1YONaSQeWL1Yw1%2BVTZ7djGyFblzGaJgirMIPi%2FrwGOqUB1un5Rj4DifiwlnHK5B%2BY%2Fl%2F5D%2BijZbqXSJZe3tQNWYfprOqlkPdrMKGUDrRpVGK4vjp1AUy%2B%2FW1UH3z1OaLUhWE6zWnuG6PRnyH5DH%2FAisoBdbX0DEVOlDyXOmAN6KTIWgfJeF0MsJgJ2mSxL6TcTH2VLS3Se31VZeygbl3qokQXb92S5UR8yYInxRylokUE8cqXT4X6iW0XVVPKUf0fIbK7pqow&X-Amz-Signature=cd63ecdbf28331268e8e6f4e82970b37080caf0d27a2b21d1a77b24e5a6b4600&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCHZM2I%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjZxsmgphqIFG3qgLi9f6azuDzE5OWkJbRf9ZI%2ByxH2AiEAkA7ajrwDdGNpkY9Rlf2zbmGUT5EbRSr5Qi84bbUzgRYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgq7IQ9WXhefdAwJCrcA0ZAoGZ%2BxQALCkDM5L6wV8s4u4Drq%2FlpwnINwYBkw3EAl3%2FbgSrT3JF0an5d9E%2BgcwQNnEC8d%2BLtp0UY56WIC%2FH%2BAv1im2HmJu%2BU0Ob3J8KwKEMXRzrDaRKoR0yUKHwk6ETrt%2BVxYiPccPP66zFxbVxS9%2B4mMy5UfClvs9c3jE0KJx1AdrKX2UoUBcLJ2vKLVo3kqjTWEYfkTOh%2FS9sn3zfs%2Bd77ckpNKeJqLUfd%2BNYubT7%2FDTNl4FRL91NRP1V47W%2BaHZKNgADFM0zBoSOhtuTQMytUEi9NgtBdc7YjcLwxaq25MLP3IUjN6SycB4Wb9CcSIt4ALACYk2EEgri1aTVGSNyZ5Sp50bn2bPy11RviCFHS7voyf57K4wHw2b9dUr%2F8%2BnyfvSbymyRdb0o23giA5Kql9LEmDtbsXvJcumO2zX2%2BCbDjWJ5WZ%2BXEvMWrtC5o5S9tKzVTMKZb%2FOzXknqfp62rgTu6YWXuI3xeFNO7fY903Ux1oFPCv64AR1WRRPROsokd7nNbvTiLd3bjoNaTn5ug7pS9VO%2FMgtnA5PqXg%2BYL1Bis%2Flp91tNpPP3UzqbEzZOnuK6HFtGayHILF5PRXMu1YONaSQeWL1Yw1%2BVTZ7djGyFblzGaJgirMIPi%2FrwGOqUB1un5Rj4DifiwlnHK5B%2BY%2Fl%2F5D%2BijZbqXSJZe3tQNWYfprOqlkPdrMKGUDrRpVGK4vjp1AUy%2B%2FW1UH3z1OaLUhWE6zWnuG6PRnyH5DH%2FAisoBdbX0DEVOlDyXOmAN6KTIWgfJeF0MsJgJ2mSxL6TcTH2VLS3Se31VZeygbl3qokQXb92S5UR8yYInxRylokUE8cqXT4X6iW0XVVPKUf0fIbK7pqow&X-Amz-Signature=c54b3597b0b800abc008a5e4e596831315161d9074291ad12988a0f27e4a838a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJN7N2L%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyjNuTrP8lj5Tp6jbMCHoRDQ5%2F3GfLvQQMx01PXUDrEAiEAzuFpwsGUDKolBA9YjJoyrzBpoWnpA5C%2FwN5hgAd3vAoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6ntyAFjgSa6w7uGircAy1JrUTXn%2Be4Cbs84BbMhnikTt6ZWEiSCwlMs1nqY%2FdN938lHjTLP67pRTEJIrQn%2F%2BCXMB3jYUJrBSVQgVzLcos8%2BiY5AhBvF2psmrFLcbWrrfTEgJefeq3USHRebMWl5xe1TsN%2Fdbn2DZsaSljf11cfczwwMWZ%2Bj%2FyRkTVZ4A6C9a6o2lzAnK%2F9H5dXfyleQLRU4FPWQGBj41Pli1Y0jd5sWLOeF%2FJhpjjzb82%2BGGIKweMsqXICYfY7MEsw7W4ADM1s6i8Appl%2BxcwMWaYvfa%2F1hQKOeR3b3Bpg7SNwqy2JG5ozkdpMrFF9B8tXjcZQGCTC2%2BNzZkfHGmvQ%2Bubf5uVCOk8zdU0Ci17fCkPGDsbvJ%2BeXo7EnZMxMByqju9uBk494nPtHHb2NmZNc%2Be%2BB8C4t%2FT5%2BkjvvXKxJr63f7YmM2ALXso%2BF1CAtQzuc8O%2BSonuIu%2B8jICKpH6RUXMe2xSnWbwUEECEbhtDroP%2FQ3FMAFdDua%2BV4dh3wyKMDWktRkFjY2%2B9BpKh1uyIHQufOeBtzdxXF0jYCYPyxxmxN0Dm6naolNy%2F%2FbG6SvNLtrlDLRZagbUIJwITnTPMb3VfKwuzGF0c4zqa2HEXFUwnu3cva1EiaKqjQLoWYQDB3MIrd%2FrwGOqUB0dq8%2F05%2BFrYweaU2%2FYhX%2F67ErYfZyRhccdEWz6Bzv%2Bfy2FdcRLj5bDEzXStXGTBtbn00Z09nJAGsf%2F1BH4ZWTf8jMy1lIuovg%2B8XXyttoWOTp8eKXCVftixJCMZoOn40JvCyWGHa58wT9IXmkCLgn0CB5o3khdtnzcahe2Z9X76FdzWyhcExqFjpTGSwdVqEcG5bpnnZ86vOotZvXCU0ydVOI63a&X-Amz-Signature=41ac7801af7716b1a9864e9ae558972215fbb0c0f3f87c5bf8568cfc96ac7460&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3A3LOK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkdcuuCBnW7IUExg%2BnHNx9z70uQW07sEFq7GiqX3vGEQIhAOEEuAlqlGjTHSOf%2BbfZ5FXXq%2BDZwhST8AywtVym7GvWKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4Q%2FMMGr2cZP5ST5kq3APx5S9OtKMDvod7bUWXkoN6T9Emo8Pjy%2BndFt9DqueywblbU9I%2Fwo6sHmBpb5aO%2F4jMKeocHICuqDFsxedUh6w%2BL1oB784RP%2FML3agTrZ2iwjdCTYFbFPFXheg8fsi7bTfi79%2Bvp2ZqQn%2Bf3rcxCFd15bxTP1z9av2rINSQYFtAs%2BOb%2FMV0wMefhMX1%2BqVRQF8NgbH%2BWagJ39eTkGfwZNUGtsAuWkXMlJes%2BVbrFL%2FypGa7s1YvQvmDEDuhCTtYeoxoOq5fz9bpkRYp8nR3sWwiIlEtwBX3yzhsavQPldIkzjfv9zt917a%2FhRK20Kx1hJxm8xw80%2BCKdZ80ENXW1yLnf0igP07hNs9EXgsR%2ByRaId4b64FWjAJ%2B%2BU%2BNWWAekrDOMZGKtDGJFXtVKxtZjRuhtvu3JENBkgMKRJKoYpFRwtQ5Qv%2FqRpHvzciaNO6M17c%2FpnZeauvyVkGk2G1EmePquUTbz1QNsqos%2BxEXy%2FF0Q%2BcnY02MxHB17pHCOYqhwD%2BPr4xNzaO2VC1BZgSSyD8h0AGYZvKpxeu80dZ4dCfCBrxLKshFmYyQQs92BQpHPYPwj4EGAIHsLd%2BwliHRvhHYEGgevOAj%2FfTVMVoqL6b9sCNnrDYPUql5J5M12DCI3v68BjqkAXvHVcUHlX7JRwQsByux3kPvB4lDerCHJ1X5OnmpCe33RNDstD3JCNS%2BIB5gSordownMW02YeOTaXz0nESdJuL0KW9L%2FuzmAZUHLpp9WmStndlXjhge%2BMj2bDQ0G53l0rVySCldreVP%2Fkjln6LRoA%2F1xHH1xDNBSflw9WHlHPpba9zFHbjqGCNICdTEFWKPDwjlnAEDReo8%2FMsD5yceH94vnCwKY&X-Amz-Signature=aafe0d389f4de78cd95da485ad844a7f398f6bc19de342725666f98afa8f1167&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCHZM2I%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjZxsmgphqIFG3qgLi9f6azuDzE5OWkJbRf9ZI%2ByxH2AiEAkA7ajrwDdGNpkY9Rlf2zbmGUT5EbRSr5Qi84bbUzgRYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgq7IQ9WXhefdAwJCrcA0ZAoGZ%2BxQALCkDM5L6wV8s4u4Drq%2FlpwnINwYBkw3EAl3%2FbgSrT3JF0an5d9E%2BgcwQNnEC8d%2BLtp0UY56WIC%2FH%2BAv1im2HmJu%2BU0Ob3J8KwKEMXRzrDaRKoR0yUKHwk6ETrt%2BVxYiPccPP66zFxbVxS9%2B4mMy5UfClvs9c3jE0KJx1AdrKX2UoUBcLJ2vKLVo3kqjTWEYfkTOh%2FS9sn3zfs%2Bd77ckpNKeJqLUfd%2BNYubT7%2FDTNl4FRL91NRP1V47W%2BaHZKNgADFM0zBoSOhtuTQMytUEi9NgtBdc7YjcLwxaq25MLP3IUjN6SycB4Wb9CcSIt4ALACYk2EEgri1aTVGSNyZ5Sp50bn2bPy11RviCFHS7voyf57K4wHw2b9dUr%2F8%2BnyfvSbymyRdb0o23giA5Kql9LEmDtbsXvJcumO2zX2%2BCbDjWJ5WZ%2BXEvMWrtC5o5S9tKzVTMKZb%2FOzXknqfp62rgTu6YWXuI3xeFNO7fY903Ux1oFPCv64AR1WRRPROsokd7nNbvTiLd3bjoNaTn5ug7pS9VO%2FMgtnA5PqXg%2BYL1Bis%2Flp91tNpPP3UzqbEzZOnuK6HFtGayHILF5PRXMu1YONaSQeWL1Yw1%2BVTZ7djGyFblzGaJgirMIPi%2FrwGOqUB1un5Rj4DifiwlnHK5B%2BY%2Fl%2F5D%2BijZbqXSJZe3tQNWYfprOqlkPdrMKGUDrRpVGK4vjp1AUy%2B%2FW1UH3z1OaLUhWE6zWnuG6PRnyH5DH%2FAisoBdbX0DEVOlDyXOmAN6KTIWgfJeF0MsJgJ2mSxL6TcTH2VLS3Se31VZeygbl3qokQXb92S5UR8yYInxRylokUE8cqXT4X6iW0XVVPKUf0fIbK7pqow&X-Amz-Signature=8748307c8b57825f4ecd0cc89f970cef5054e20330f6c249efe0e05ef2800a46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
