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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQKYBV4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFyu6FMI7GgCly6j%2F12DXnj6ZzNVi9ZFh0sl4u7HLUwAIhANYcdN0GL2F%2BI%2BfFr5j3UUCoNnzznOTBboIppkX2nucrKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqgtv67RrWgaq67lMq3AOvJeUxDCbjJzGMv00DQT%2FFfg2PiE2wm8HJcsrrvOZCsx0UXoaLO3akmr7i3SyGsQSeiiGpmwBtG3gIPhNWW52vlG2JblhT6%2BYsnRqFB87dWqqa%2FP7LirBFq2jh5uK6r5Nr3SiLSnpuvwAl9GXZZzwBYJ1dC1mgOu4gbiktySftLM0JzpSLvxq1LTeKODzGvDL7cOK7zXSMDfLDw%2B3eTB57q7VDAGVODpWQcHRDQoQexYybUfmgUgfZDb1YI6d2H79lvnDzJIPHeh0%2Fd3S5ZPaW2vc7ExBAWLSDXiAk2bRDPkQCo9NylZjggOCVAavwiN29G1u8Gqpv3aj12jlTbjjvLqhGBW2zegoWT0DbvZ91SdyQSxOEhcZhU3uEZqO7hML%2BLL2MJgvt2OXXvuw4r54MWJ4cTGswUMSu85p5QJ2vgYI1Mnbxzv08Pdsh6mCrOZb5QtXUhVBaAANurbUJuNZ4mI9Z%2FvX7tXlctkiI%2Ffhky0LnlkrzJ6o85v1SbdQ%2FW6OQFPJRJ9TjNxu8FCYUnStpi5QpW2Hap0J2R2hraoSpDLQf0gL4rqlSNX84Qj2Gj9yPXHlsYPYeANTKQdMtG%2Bl98tLTxnBq%2FYcuAXFA4ixEqJjYSzgGbR17Sl5QUDCm2MzDBjqkAdR1M5%2B4p77GB4pmaqFs2Jg0JM24PmZamn1lnQZ%2Fr%2F4Rgdo9551%2BpRbUuspuVV9U%2BQrlI8RLQLm5fo8ctTNHF2h%2BnIMP6HLHlC42MVvpO2FtIpXtMSvn4pE2Vv36%2BDjfycrQiTzFrF0rjxoZCa8uUc5YFzTKU7yFIoH88Czg9j%2BX7GUP%2FnvnIx%2B02aOK22lDNHIFnUQstQg%2BKZCswThzzwDK45Qg&X-Amz-Signature=7fd1cb52d6eb66af3ff1f5a1902655f44c903f83bfe6968c333a80d5a429c0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQKYBV4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFyu6FMI7GgCly6j%2F12DXnj6ZzNVi9ZFh0sl4u7HLUwAIhANYcdN0GL2F%2BI%2BfFr5j3UUCoNnzznOTBboIppkX2nucrKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqgtv67RrWgaq67lMq3AOvJeUxDCbjJzGMv00DQT%2FFfg2PiE2wm8HJcsrrvOZCsx0UXoaLO3akmr7i3SyGsQSeiiGpmwBtG3gIPhNWW52vlG2JblhT6%2BYsnRqFB87dWqqa%2FP7LirBFq2jh5uK6r5Nr3SiLSnpuvwAl9GXZZzwBYJ1dC1mgOu4gbiktySftLM0JzpSLvxq1LTeKODzGvDL7cOK7zXSMDfLDw%2B3eTB57q7VDAGVODpWQcHRDQoQexYybUfmgUgfZDb1YI6d2H79lvnDzJIPHeh0%2Fd3S5ZPaW2vc7ExBAWLSDXiAk2bRDPkQCo9NylZjggOCVAavwiN29G1u8Gqpv3aj12jlTbjjvLqhGBW2zegoWT0DbvZ91SdyQSxOEhcZhU3uEZqO7hML%2BLL2MJgvt2OXXvuw4r54MWJ4cTGswUMSu85p5QJ2vgYI1Mnbxzv08Pdsh6mCrOZb5QtXUhVBaAANurbUJuNZ4mI9Z%2FvX7tXlctkiI%2Ffhky0LnlkrzJ6o85v1SbdQ%2FW6OQFPJRJ9TjNxu8FCYUnStpi5QpW2Hap0J2R2hraoSpDLQf0gL4rqlSNX84Qj2Gj9yPXHlsYPYeANTKQdMtG%2Bl98tLTxnBq%2FYcuAXFA4ixEqJjYSzgGbR17Sl5QUDCm2MzDBjqkAdR1M5%2B4p77GB4pmaqFs2Jg0JM24PmZamn1lnQZ%2Fr%2F4Rgdo9551%2BpRbUuspuVV9U%2BQrlI8RLQLm5fo8ctTNHF2h%2BnIMP6HLHlC42MVvpO2FtIpXtMSvn4pE2Vv36%2BDjfycrQiTzFrF0rjxoZCa8uUc5YFzTKU7yFIoH88Czg9j%2BX7GUP%2FnvnIx%2B02aOK22lDNHIFnUQstQg%2BKZCswThzzwDK45Qg&X-Amz-Signature=55de2e42f73acb25fd66cb965688bb46aba3fa6274b2df627f365198dbaf1517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQKYBV4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFyu6FMI7GgCly6j%2F12DXnj6ZzNVi9ZFh0sl4u7HLUwAIhANYcdN0GL2F%2BI%2BfFr5j3UUCoNnzznOTBboIppkX2nucrKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqgtv67RrWgaq67lMq3AOvJeUxDCbjJzGMv00DQT%2FFfg2PiE2wm8HJcsrrvOZCsx0UXoaLO3akmr7i3SyGsQSeiiGpmwBtG3gIPhNWW52vlG2JblhT6%2BYsnRqFB87dWqqa%2FP7LirBFq2jh5uK6r5Nr3SiLSnpuvwAl9GXZZzwBYJ1dC1mgOu4gbiktySftLM0JzpSLvxq1LTeKODzGvDL7cOK7zXSMDfLDw%2B3eTB57q7VDAGVODpWQcHRDQoQexYybUfmgUgfZDb1YI6d2H79lvnDzJIPHeh0%2Fd3S5ZPaW2vc7ExBAWLSDXiAk2bRDPkQCo9NylZjggOCVAavwiN29G1u8Gqpv3aj12jlTbjjvLqhGBW2zegoWT0DbvZ91SdyQSxOEhcZhU3uEZqO7hML%2BLL2MJgvt2OXXvuw4r54MWJ4cTGswUMSu85p5QJ2vgYI1Mnbxzv08Pdsh6mCrOZb5QtXUhVBaAANurbUJuNZ4mI9Z%2FvX7tXlctkiI%2Ffhky0LnlkrzJ6o85v1SbdQ%2FW6OQFPJRJ9TjNxu8FCYUnStpi5QpW2Hap0J2R2hraoSpDLQf0gL4rqlSNX84Qj2Gj9yPXHlsYPYeANTKQdMtG%2Bl98tLTxnBq%2FYcuAXFA4ixEqJjYSzgGbR17Sl5QUDCm2MzDBjqkAdR1M5%2B4p77GB4pmaqFs2Jg0JM24PmZamn1lnQZ%2Fr%2F4Rgdo9551%2BpRbUuspuVV9U%2BQrlI8RLQLm5fo8ctTNHF2h%2BnIMP6HLHlC42MVvpO2FtIpXtMSvn4pE2Vv36%2BDjfycrQiTzFrF0rjxoZCa8uUc5YFzTKU7yFIoH88Czg9j%2BX7GUP%2FnvnIx%2B02aOK22lDNHIFnUQstQg%2BKZCswThzzwDK45Qg&X-Amz-Signature=0fd5476bb1e32f8584f6e3acfc90cb2e5b65de9c95dae506870a7035acd8cadf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QONYDJMH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAchOCZ4bfMEcfhMUUT%2FExdyXudzsP10UuaIIXrHSBM9AiEA%2FLpowxYwCeVs%2BoEV7sHHAqcXgD04xUBBYsusp0asWJEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYE3rOxZONCZZOsmSrcA7IUMgsuwi5MXIEwSRtA0syZXoOGwRugc%2Bbig3JpbYWHDfpjgCE%2FdAmKemeHa01UdksHIzlunhnIytTOdDYImmTMb1ZXVKllNJO2d6nm4iXFBHHicBu87C%2FA0Zk9HRjN0djLvDr93XokYXjbTqK9Qm5RaMgQByTKH8Y61MejgcAUJCfM7b3RcEF5N%2FPVblsLxfWvkbfVqc%2BuCaRL4gbzy8H%2Bx6vcTUAtP4%2FSV63LNhNh4BRrYLa89oh7dyMnSo%2F%2FTQA1r%2BuNgtu8bKMvoO%2BKdJq%2F%2BVB%2BVQ38kboq2UwKAtt4uKcyTVo5pbPxLax6tr%2BjYwT6JLN1PuWzNcLJRrs3GkF8X3pC3zVFCzKGev1a2iezUx1RvY07by2ibOjekrtzoaPPAulYPq3%2BSQxrWD05rD0jjWtY8HxDQFI8ceItjtpcWm7RaW17VqqImd8JRvSFW6d0H48yyv%2FiV4EWCnJQNYvirrU98qFxCPdpxIbs9tm5R5vWRa3H%2FmjTH%2BGKdYEsuSHQjmtLq7naK4Fb5xAd7PPdCPCtQa67sB69Ysa9BXVmOqffUtVn3aocUaMFRjvZUhpaLU3odK7FsgSm1Wyx%2BgZCJ7Y7pRhsbzY1aZfQLa4LIexeoArujF2HrHf0MKjYzMMGOqUBM9Aw36L%2F3A5%2FCq0Z1uBGRmjgmSUglHhsvv2pPvCLp3ssrgPxJPJp0d2JwFmbVGI56PtUCB3Vv3e2mAbHWRM616PMuJntio%2BgU996QJLKIdHax7fJBpPMAj8PiP5N3dhIJta3sLXkboLv%2BrcoVtOlpeT2cZgrQMneifi9Axa78ZVByOYbYLZnP64Yzfmp3E46YpF4GThWO6UGUAASZf5xJRZZSjiV&X-Amz-Signature=2d4dd380801b8e69f0a18f0eb99f3859cd99a493f504b4f73a7d0a6946fa022f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAAJHYPX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPQLmHsBMD9yKY3714ccnberTJTSSLhaCwtN4B0CfpDAIhAMU1deRUSXU1i7rjsAR0TAV40ATe9wA6tBTnLGKAwklcKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIAOKnncCwqwM6BxAq3AOKF2Z6nqfTASg5z5S0Og5nHwIhbsYpd8uBWKRjJNg6q5yo6LJu0V%2FOswnFnJ%2FZk51w%2FUROamp9V5Yyd6AW8ml%2B9iETBgnpM6sxjabhwrFkJUj7jaqoTzLcypmD5HSZR4VjCtkg4B28I9ea%2BpkxZcy%2FJiU00sm%2Fg3Sk1Os5%2BBVbbhnRay1B40IHSSRjXdXgbDFYk5ryC7aSrxBCn59j3%2FWTUfoB77ighURyptYi%2FQk7Z78dgqHJ7cbVUod5jrFe0ZT7iR1uYynK%2BM%2FK4WIyxrWFSyrpHtz%2Fo5O8Fi2x%2FqJyBgCpFQ2S0%2FwsHy5LAMgSOLYHyNAEcrPEH9TXKmJjoiBABPRkKpiXShoc%2FOOkCxM1%2FkX1P9YnMEEFNJXqM49PzRGOIONRbAUcSTE0gMKUh23T5ufZRKLl1e3i39leStE9XOf7ST%2BGiJM0YLq%2B3Hri654JKP4r4Ch2TS1quA8tuNVjaQL9kdBylvjQ1HLrz%2FVteW%2BmdIv9W1F8VCXyswCDaaVFd4lvxRyOHTs6sNCVh7M68hQTBLBFGGSly6uq%2ByTaGtJxRNXiKm9mlz9UhVBTotZ7WKUfyFZ%2FSZwTvnu6OGZKBZEa74welgWm16KqNZPQC4liBloQ7dMVuCO4KDDP2MzDBjqkAYdIk8xC2vkQag4wt%2F6WHIgqztIfncT4iUuXFiOh3oTsSEpVk%2B8wJoJ1Lklw77mYtueTETIK3U6duOjN3wL0BD5ieW0qKKfIB3E9zdbX4DEiQqiRdtvZqifdHspHeInUu%2BrkNK2vgrRuxIzy%2B%2FLw062QPXASPw56bF46HcyoFW0fjUICAlNeq6TlOlBI%2BEBgTRScxnrN1Z6u2%2FoNDdQ3lWpsyfBe&X-Amz-Signature=dbdf29dc13e6f6b7dcc66145034b1d93bb818c9d85926bb56610aa0cd28c3f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQKYBV4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFyu6FMI7GgCly6j%2F12DXnj6ZzNVi9ZFh0sl4u7HLUwAIhANYcdN0GL2F%2BI%2BfFr5j3UUCoNnzznOTBboIppkX2nucrKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqgtv67RrWgaq67lMq3AOvJeUxDCbjJzGMv00DQT%2FFfg2PiE2wm8HJcsrrvOZCsx0UXoaLO3akmr7i3SyGsQSeiiGpmwBtG3gIPhNWW52vlG2JblhT6%2BYsnRqFB87dWqqa%2FP7LirBFq2jh5uK6r5Nr3SiLSnpuvwAl9GXZZzwBYJ1dC1mgOu4gbiktySftLM0JzpSLvxq1LTeKODzGvDL7cOK7zXSMDfLDw%2B3eTB57q7VDAGVODpWQcHRDQoQexYybUfmgUgfZDb1YI6d2H79lvnDzJIPHeh0%2Fd3S5ZPaW2vc7ExBAWLSDXiAk2bRDPkQCo9NylZjggOCVAavwiN29G1u8Gqpv3aj12jlTbjjvLqhGBW2zegoWT0DbvZ91SdyQSxOEhcZhU3uEZqO7hML%2BLL2MJgvt2OXXvuw4r54MWJ4cTGswUMSu85p5QJ2vgYI1Mnbxzv08Pdsh6mCrOZb5QtXUhVBaAANurbUJuNZ4mI9Z%2FvX7tXlctkiI%2Ffhky0LnlkrzJ6o85v1SbdQ%2FW6OQFPJRJ9TjNxu8FCYUnStpi5QpW2Hap0J2R2hraoSpDLQf0gL4rqlSNX84Qj2Gj9yPXHlsYPYeANTKQdMtG%2Bl98tLTxnBq%2FYcuAXFA4ixEqJjYSzgGbR17Sl5QUDCm2MzDBjqkAdR1M5%2B4p77GB4pmaqFs2Jg0JM24PmZamn1lnQZ%2Fr%2F4Rgdo9551%2BpRbUuspuVV9U%2BQrlI8RLQLm5fo8ctTNHF2h%2BnIMP6HLHlC42MVvpO2FtIpXtMSvn4pE2Vv36%2BDjfycrQiTzFrF0rjxoZCa8uUc5YFzTKU7yFIoH88Czg9j%2BX7GUP%2FnvnIx%2B02aOK22lDNHIFnUQstQg%2BKZCswThzzwDK45Qg&X-Amz-Signature=c8a2dbd19bbe11a518269e6fbad387be4ceed4e28b2cc633c54af23a7d170a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
