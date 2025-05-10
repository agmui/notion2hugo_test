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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP25YP7S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUYO%2F6e54mron8OEL4J6kdqE7%2B2YuFUEc5PG4ALJeGNAiEA74URSKESvGkk5uUrHgB9JzskqDe1b14y1LUXfN3dZF8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhDmsrTA9bFCOBjjSrcA%2BgF0dN5chCZ1yVYbPGW0KUhw93qJWRVxDsLhMrxE07PHcTjHpivWCq4bOKb6ZUEtkMqebpmYtxppQXPfxxqi8FbgxAj0NGL7C0xKeJ4%2BZ5TlLzvwyuYVIhBbmf%2FK2Wx6tXWGxiqpN1AvkQ8bTvBFtNFcM44CelLUQxImNo4kcftiTFSwsXww7XylxZpdP36P49OBBoTqMZtbwk3PupVEo8tAGlkW9POQivn6DJ%2Bw8gxZ090Nw1SteelAEe6%2BPFDKGuUiMRnceUAbpIs7VFTylnn8Er76PkX4p8cXYiiW6uno6I0wme7a7qMgyySDx4QhUEYZixeCQlyN%2BuQNy4ez6tPfbzfdkfu32KchuHtMzNhht2ZDg2nv3QgfKKh6Us3Y%2Blvo96KWl9dHjzVRcljF%2F0GeW2gB3Ieimhm1ngKJzUqvDcrin%2FMqFkhWjW4RsVPI6Dmz%2BFdz7%2B679ZhcZfSKngkTmBNO923vNNxd4furWvEsBbpWcPzclCn2fvvVNT85b6lhgyFqGXLJJU9Db9blyMFw3OPZToeNP2%2F%2F%2F0EMBJK19tha0PNcf6BsBMRCG5nyYADFNAy1iA9CjeF%2BWxp2DwfaAEAvBxz0IPMttcBpZ7bfXoa6Dr%2Bt0ISeTNWMOuP%2FMAGOqUBWGm85XQj9gbazngvcMuq6eKq4k202Uy2e995HY544h%2FHuVAh2CpjaujFMyiTcEsnu1IWmZZUcIjxPlQA6vffJxIMk5gJRF8vgefQChfhG4miQOreEMok7lCo%2Fs58ZC7Zx8sAZ0tP44ayLZnIaMLIAitkDTBELHzle0oaOMXRbHlLwX1AIDn3Spm4mxUl%2FzCEvZom7GljVB%2BmfuAa%2FrEg5vQxhLXQ&X-Amz-Signature=6ce10e018aae4cd806702c23c7617dac7ac03096292656f1d6337eeb61b24ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP25YP7S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUYO%2F6e54mron8OEL4J6kdqE7%2B2YuFUEc5PG4ALJeGNAiEA74URSKESvGkk5uUrHgB9JzskqDe1b14y1LUXfN3dZF8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhDmsrTA9bFCOBjjSrcA%2BgF0dN5chCZ1yVYbPGW0KUhw93qJWRVxDsLhMrxE07PHcTjHpivWCq4bOKb6ZUEtkMqebpmYtxppQXPfxxqi8FbgxAj0NGL7C0xKeJ4%2BZ5TlLzvwyuYVIhBbmf%2FK2Wx6tXWGxiqpN1AvkQ8bTvBFtNFcM44CelLUQxImNo4kcftiTFSwsXww7XylxZpdP36P49OBBoTqMZtbwk3PupVEo8tAGlkW9POQivn6DJ%2Bw8gxZ090Nw1SteelAEe6%2BPFDKGuUiMRnceUAbpIs7VFTylnn8Er76PkX4p8cXYiiW6uno6I0wme7a7qMgyySDx4QhUEYZixeCQlyN%2BuQNy4ez6tPfbzfdkfu32KchuHtMzNhht2ZDg2nv3QgfKKh6Us3Y%2Blvo96KWl9dHjzVRcljF%2F0GeW2gB3Ieimhm1ngKJzUqvDcrin%2FMqFkhWjW4RsVPI6Dmz%2BFdz7%2B679ZhcZfSKngkTmBNO923vNNxd4furWvEsBbpWcPzclCn2fvvVNT85b6lhgyFqGXLJJU9Db9blyMFw3OPZToeNP2%2F%2F%2F0EMBJK19tha0PNcf6BsBMRCG5nyYADFNAy1iA9CjeF%2BWxp2DwfaAEAvBxz0IPMttcBpZ7bfXoa6Dr%2Bt0ISeTNWMOuP%2FMAGOqUBWGm85XQj9gbazngvcMuq6eKq4k202Uy2e995HY544h%2FHuVAh2CpjaujFMyiTcEsnu1IWmZZUcIjxPlQA6vffJxIMk5gJRF8vgefQChfhG4miQOreEMok7lCo%2Fs58ZC7Zx8sAZ0tP44ayLZnIaMLIAitkDTBELHzle0oaOMXRbHlLwX1AIDn3Spm4mxUl%2FzCEvZom7GljVB%2BmfuAa%2FrEg5vQxhLXQ&X-Amz-Signature=ea02560cdab700bcea0c0078f703c3321391da378cc40baa83f455cc5cd36966&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP25YP7S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUYO%2F6e54mron8OEL4J6kdqE7%2B2YuFUEc5PG4ALJeGNAiEA74URSKESvGkk5uUrHgB9JzskqDe1b14y1LUXfN3dZF8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhDmsrTA9bFCOBjjSrcA%2BgF0dN5chCZ1yVYbPGW0KUhw93qJWRVxDsLhMrxE07PHcTjHpivWCq4bOKb6ZUEtkMqebpmYtxppQXPfxxqi8FbgxAj0NGL7C0xKeJ4%2BZ5TlLzvwyuYVIhBbmf%2FK2Wx6tXWGxiqpN1AvkQ8bTvBFtNFcM44CelLUQxImNo4kcftiTFSwsXww7XylxZpdP36P49OBBoTqMZtbwk3PupVEo8tAGlkW9POQivn6DJ%2Bw8gxZ090Nw1SteelAEe6%2BPFDKGuUiMRnceUAbpIs7VFTylnn8Er76PkX4p8cXYiiW6uno6I0wme7a7qMgyySDx4QhUEYZixeCQlyN%2BuQNy4ez6tPfbzfdkfu32KchuHtMzNhht2ZDg2nv3QgfKKh6Us3Y%2Blvo96KWl9dHjzVRcljF%2F0GeW2gB3Ieimhm1ngKJzUqvDcrin%2FMqFkhWjW4RsVPI6Dmz%2BFdz7%2B679ZhcZfSKngkTmBNO923vNNxd4furWvEsBbpWcPzclCn2fvvVNT85b6lhgyFqGXLJJU9Db9blyMFw3OPZToeNP2%2F%2F%2F0EMBJK19tha0PNcf6BsBMRCG5nyYADFNAy1iA9CjeF%2BWxp2DwfaAEAvBxz0IPMttcBpZ7bfXoa6Dr%2Bt0ISeTNWMOuP%2FMAGOqUBWGm85XQj9gbazngvcMuq6eKq4k202Uy2e995HY544h%2FHuVAh2CpjaujFMyiTcEsnu1IWmZZUcIjxPlQA6vffJxIMk5gJRF8vgefQChfhG4miQOreEMok7lCo%2Fs58ZC7Zx8sAZ0tP44ayLZnIaMLIAitkDTBELHzle0oaOMXRbHlLwX1AIDn3Spm4mxUl%2FzCEvZom7GljVB%2BmfuAa%2FrEg5vQxhLXQ&X-Amz-Signature=a7a45aeed17f0ca61c7c7af8609e79d8c5b77d42cb072428185927cdbde5e4ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UV2H5FR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSGVdNYNmHzLCJSrqcIIrNqLhHpswhECjAYExUdr9VHAIgc1S8fC26KBV9kwz48hpSGG3xtn59h839Oyl0JtkffGAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVmVfR%2BqrB85Mh%2FQCrcA%2BXN6z3uMO6NokvO2aTTEjC4tHgie0JUikNaYQG9p8cRQtp1RbxlkPX3eCo1Vmc9mQaGXfe98Qg5fqimlTHDu%2BW2lhm6QLoDVQ3PP43iNDr%2BG31D0JTTq1usc7e%2BYP9TGjh2JN4lFjKbD1yN8071nslBUL6rkwA90uYWavbjIeg6XbbfrMWhFg%2BnCiqUrcTtlEQX4%2B3RbF5PuO%2BMNKxXqG5HIWHkPQX4APXWuBCfv7rCLFoaSkNzBAL6dqKUTkhRg968tQq90t1ZZXFmUrtxGDBTqFR83jnSZ3iuKA6LBILOxkopSHM5tapuwWkx3M0nZwLjPjz4B%2FgyIY4LnpHNlr42nyOO67%2F2DQLjHOMLKYwYjNHnkwGRJylRgxI4fWaGmb0ChPwiT5m5%2FiMF6y6KlryitRU8OtuFhhseGrYMvh9mYKq%2F5%2BC61nrjJ%2B6aWtZd0hOFofdDPm4hAtRRsoPRDpzMNhQQUTduV0t40YDttKoM8WI66YdoKdwMoD2RAVWn4Cp9huxZbKIHDYUHc%2B%2FCtO39u7XAEfmNWMc9ThY80ZS14wALt6MtIpH8P1DWOX3%2BxTB3giR9IobGA468iRGiN5582bdOZlmaFQ0Phxqub7sNTs9I%2FbUD4LW77GHQMN6R%2FMAGOqUBXuAFJ5sDImr3Rz9SfFyLe67ZvVhn8j0qxQDPZdNSSiNThKRpsyFN8OkquwUCQ3RcxBsWq3AGoG3Wcl4iWOqq0MtYvMBY%2F%2BdVNyep8gYZ98I9ssvbwjFwYrLNPxmpxhDheLhEr%2BkylJ5UxROmS%2FDJRXkblSgVRvGvl7QFdZ8%2BLWsyrKchN9peJVAR7Z3DFrEyNat0%2F6zTMaydbvRmfr6%2F%2FeVX3vZq&X-Amz-Signature=7bc655f5fbf992c70f0e3552882712527663ca33c586d4e6ad40b1287001ad88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOO365HL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSD0OGmpcJunu1OjcTtkL%2FtLetLT0TIxsIOY8UpfyE7wIgAIVTP1yBCZQd0BRmMiGV%2FdCOOq6XDKiFhYLGwQVpyXkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHepZ61i0TjWEk1htSrcAyyoh0Z%2FvWbpQ341WHiTON4OTPX%2FKkrJdeBVYjfWGtsbvy%2B69wUTALJojCDiHnW4xKJ0B5h33e%2F8bg1%2BmR%2BHcKmNAB8m%2FXaObJ2D48yvj%2BBDBsvvAFG3zzVYmUzDSS9v6q8P0gFvOBwWaESWtwHeo4xzoBKOS1lOJlO6nk7CcAMKy5zUZQ6lM4sUXuAyvftaoKo9OAUTLPqEldmkN%2B3k6dGca3k0rdg%2BnHAobtCwhQG3U3Ci9bNn%2FkVKxy40N%2B95TPiUxrBmFOVnA%2FVYGmHAAVAUxwXkxzdI53gbdLEhL21dasIVwLq%2BQBEUrO6jlHCUgCz3IFRniPXNJRtIT%2BWn2%2FsUUnL8umJEygR3OONldhi2j00%2FxP1%2BARfyJzb46IZDiDfulVtKK6bhd2qpSEMP1prPeHJArtSvCsfpGniMNpKkOAstisrb0wBxNnHfBIUJ%2BRx79SEXEYKR5dmhDg4nHNOyGxz47z1R4Gtfkmz79aWNWExA%2FaELXLvexbvdtK6KCqahUc8G%2BK4lJkaBM4X7BzP1lqpaRB3aIiuuoLB4pZJs2%2Bic8QOV%2FVzCP%2FjbUIAr2bLyMtmYrsmYZTdR230O8hNytDCI6q1ygNp6KloENSe%2FNTgzvb%2FIOgiauK9rMPiW%2FMAGOqUBgx3XHps4N7Yhv25M14QSjqY0ieKpfzNVqjV1UCZlPCHSvcQk6R7xvsitexbi9BvZ1uIsSQT7uAlkyIZO0aYOkU7DuSO7QaRCOTkyDYqmmkgR%2BNxwbXniASByhtftqXyn4nIffDchhi89eDVB4AON0VeDPcbI6LX4mBLsD4fZUFHPFqumFaCZBI12GHj1FJNYAr%2FvDhPvowxZ8tBcIUjFwNhXvNPo&X-Amz-Signature=f4ae8ae5627de48e41d61507a51769d016cff46a17aa36c68be1ebc16335d457&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP25YP7S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUYO%2F6e54mron8OEL4J6kdqE7%2B2YuFUEc5PG4ALJeGNAiEA74URSKESvGkk5uUrHgB9JzskqDe1b14y1LUXfN3dZF8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhDmsrTA9bFCOBjjSrcA%2BgF0dN5chCZ1yVYbPGW0KUhw93qJWRVxDsLhMrxE07PHcTjHpivWCq4bOKb6ZUEtkMqebpmYtxppQXPfxxqi8FbgxAj0NGL7C0xKeJ4%2BZ5TlLzvwyuYVIhBbmf%2FK2Wx6tXWGxiqpN1AvkQ8bTvBFtNFcM44CelLUQxImNo4kcftiTFSwsXww7XylxZpdP36P49OBBoTqMZtbwk3PupVEo8tAGlkW9POQivn6DJ%2Bw8gxZ090Nw1SteelAEe6%2BPFDKGuUiMRnceUAbpIs7VFTylnn8Er76PkX4p8cXYiiW6uno6I0wme7a7qMgyySDx4QhUEYZixeCQlyN%2BuQNy4ez6tPfbzfdkfu32KchuHtMzNhht2ZDg2nv3QgfKKh6Us3Y%2Blvo96KWl9dHjzVRcljF%2F0GeW2gB3Ieimhm1ngKJzUqvDcrin%2FMqFkhWjW4RsVPI6Dmz%2BFdz7%2B679ZhcZfSKngkTmBNO923vNNxd4furWvEsBbpWcPzclCn2fvvVNT85b6lhgyFqGXLJJU9Db9blyMFw3OPZToeNP2%2F%2F%2F0EMBJK19tha0PNcf6BsBMRCG5nyYADFNAy1iA9CjeF%2BWxp2DwfaAEAvBxz0IPMttcBpZ7bfXoa6Dr%2Bt0ISeTNWMOuP%2FMAGOqUBWGm85XQj9gbazngvcMuq6eKq4k202Uy2e995HY544h%2FHuVAh2CpjaujFMyiTcEsnu1IWmZZUcIjxPlQA6vffJxIMk5gJRF8vgefQChfhG4miQOreEMok7lCo%2Fs58ZC7Zx8sAZ0tP44ayLZnIaMLIAitkDTBELHzle0oaOMXRbHlLwX1AIDn3Spm4mxUl%2FzCEvZom7GljVB%2BmfuAa%2FrEg5vQxhLXQ&X-Amz-Signature=01c35b488929478e83e65da5aff360a5f4fa320fd42ac40bb061395bfafdaa1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
