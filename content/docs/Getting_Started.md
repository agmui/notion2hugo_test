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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65RTEE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCGSYQmeVkmPXT%2BExNt7nXbY2L5rOfSVAy73FX7OAlKOwIgZFaSNC3rlCOBxtrzwsDXGxVdzkEHBQl27nbqTM76RHMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN79KWaXswKCNMv8CyrcA90CRhUHu1VU%2Fg23sOPP1bC4x2%2FIF6J%2BWwWF9KSeyuuyWUw0%2FPGDxyN6XHCuuvkdhzj6eDkDHtna3KNAX97ASkXrK%2FIhNjeNJhctCZzHGG9qohgmieBMqyIDUUXIV6QdvGwfE9KYZ2SU6%2BBamzRzRactBUBTb3%2FD5S15CX2hWEAUEEnXf8YQJWCLw4Gp338qWEpchgjlQyx7r1IuriMh0Iyxv3QzOp9HoXGmBWfTt2IHx8Ptn61McVsPuDgHak3pGWozIGdRFhT9%2Fkyc%2BHYVOcFoHPS8KF8Ez36ItW9xYCTQqsrNRLjEBz6VXuNGUnRx%2BNdG0akyihDa3tftJ0glSsSVOCH9mHpkSiayTvbqmNks%2FK0BUS0RsgWjz1%2F9euWPijS45Rskjv4DNPDsj6sYHnQSnpDGJUMYPzkZlR45NfV%2BCwu13yn4boklopM%2B1rKTA5iF7eQSTcSShmtbbbdToC0bVJ%2FPCC4Cs5tltq2wRaSYnJjgT7%2FaaS23OCZ57XfkXL%2F4lORw8qJmcgWi3XS%2Fe8%2BlrmN8NvG2NsKbut1GryGKrquct2BWP3oELZZ4JRYn%2FvE5XVlXOGWE42iQzYhhkd8c7Ly1EPDQDUQ8EJx3QNbrEg0BuOYfV%2BvVRfsjMMKov8EGOqUBFHGxa5%2BtL%2FCHe5p6%2BGWhqElw9uhdLTU%2BT3oDz9jBgAWSBgXPow1bmg1JPHpqt7bZlBi6%2FKYTOCA%2F5YySMAhGrYurQ%2BLQcz73PCy8LLKL2PpVbr3gfNDThDCib2FQBDAo0x%2BLcGqe86yhqs0%2FlKICytBlwRAzOqK0YcbbIu63cT6lDCl7JRWuYUvWzgDjwsgLyWNc9KHXJXbEf%2BcCgU4yOLHwG5p3&X-Amz-Signature=371bed6b45ffcb208afc13595ecc1a2edfa972785dffdb0cc4c3d4b45ea80669&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65RTEE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCGSYQmeVkmPXT%2BExNt7nXbY2L5rOfSVAy73FX7OAlKOwIgZFaSNC3rlCOBxtrzwsDXGxVdzkEHBQl27nbqTM76RHMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN79KWaXswKCNMv8CyrcA90CRhUHu1VU%2Fg23sOPP1bC4x2%2FIF6J%2BWwWF9KSeyuuyWUw0%2FPGDxyN6XHCuuvkdhzj6eDkDHtna3KNAX97ASkXrK%2FIhNjeNJhctCZzHGG9qohgmieBMqyIDUUXIV6QdvGwfE9KYZ2SU6%2BBamzRzRactBUBTb3%2FD5S15CX2hWEAUEEnXf8YQJWCLw4Gp338qWEpchgjlQyx7r1IuriMh0Iyxv3QzOp9HoXGmBWfTt2IHx8Ptn61McVsPuDgHak3pGWozIGdRFhT9%2Fkyc%2BHYVOcFoHPS8KF8Ez36ItW9xYCTQqsrNRLjEBz6VXuNGUnRx%2BNdG0akyihDa3tftJ0glSsSVOCH9mHpkSiayTvbqmNks%2FK0BUS0RsgWjz1%2F9euWPijS45Rskjv4DNPDsj6sYHnQSnpDGJUMYPzkZlR45NfV%2BCwu13yn4boklopM%2B1rKTA5iF7eQSTcSShmtbbbdToC0bVJ%2FPCC4Cs5tltq2wRaSYnJjgT7%2FaaS23OCZ57XfkXL%2F4lORw8qJmcgWi3XS%2Fe8%2BlrmN8NvG2NsKbut1GryGKrquct2BWP3oELZZ4JRYn%2FvE5XVlXOGWE42iQzYhhkd8c7Ly1EPDQDUQ8EJx3QNbrEg0BuOYfV%2BvVRfsjMMKov8EGOqUBFHGxa5%2BtL%2FCHe5p6%2BGWhqElw9uhdLTU%2BT3oDz9jBgAWSBgXPow1bmg1JPHpqt7bZlBi6%2FKYTOCA%2F5YySMAhGrYurQ%2BLQcz73PCy8LLKL2PpVbr3gfNDThDCib2FQBDAo0x%2BLcGqe86yhqs0%2FlKICytBlwRAzOqK0YcbbIu63cT6lDCl7JRWuYUvWzgDjwsgLyWNc9KHXJXbEf%2BcCgU4yOLHwG5p3&X-Amz-Signature=a985991977a48b45513653ce061b4756e69c469ce4e95d84e2b629fbf8b33ab3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65RTEE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCGSYQmeVkmPXT%2BExNt7nXbY2L5rOfSVAy73FX7OAlKOwIgZFaSNC3rlCOBxtrzwsDXGxVdzkEHBQl27nbqTM76RHMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN79KWaXswKCNMv8CyrcA90CRhUHu1VU%2Fg23sOPP1bC4x2%2FIF6J%2BWwWF9KSeyuuyWUw0%2FPGDxyN6XHCuuvkdhzj6eDkDHtna3KNAX97ASkXrK%2FIhNjeNJhctCZzHGG9qohgmieBMqyIDUUXIV6QdvGwfE9KYZ2SU6%2BBamzRzRactBUBTb3%2FD5S15CX2hWEAUEEnXf8YQJWCLw4Gp338qWEpchgjlQyx7r1IuriMh0Iyxv3QzOp9HoXGmBWfTt2IHx8Ptn61McVsPuDgHak3pGWozIGdRFhT9%2Fkyc%2BHYVOcFoHPS8KF8Ez36ItW9xYCTQqsrNRLjEBz6VXuNGUnRx%2BNdG0akyihDa3tftJ0glSsSVOCH9mHpkSiayTvbqmNks%2FK0BUS0RsgWjz1%2F9euWPijS45Rskjv4DNPDsj6sYHnQSnpDGJUMYPzkZlR45NfV%2BCwu13yn4boklopM%2B1rKTA5iF7eQSTcSShmtbbbdToC0bVJ%2FPCC4Cs5tltq2wRaSYnJjgT7%2FaaS23OCZ57XfkXL%2F4lORw8qJmcgWi3XS%2Fe8%2BlrmN8NvG2NsKbut1GryGKrquct2BWP3oELZZ4JRYn%2FvE5XVlXOGWE42iQzYhhkd8c7Ly1EPDQDUQ8EJx3QNbrEg0BuOYfV%2BvVRfsjMMKov8EGOqUBFHGxa5%2BtL%2FCHe5p6%2BGWhqElw9uhdLTU%2BT3oDz9jBgAWSBgXPow1bmg1JPHpqt7bZlBi6%2FKYTOCA%2F5YySMAhGrYurQ%2BLQcz73PCy8LLKL2PpVbr3gfNDThDCib2FQBDAo0x%2BLcGqe86yhqs0%2FlKICytBlwRAzOqK0YcbbIu63cT6lDCl7JRWuYUvWzgDjwsgLyWNc9KHXJXbEf%2BcCgU4yOLHwG5p3&X-Amz-Signature=896d999a8ae4b0d928dfae572802442f2ddbd2ccf363b2c6a4e211cb13f368d6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYRDAXN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD5sIKjl5128cRh%2BLhkg%2Fu%2Fbu3y%2F%2FIT9LUluXY610drlgIgYwHlIYyRQvpRNS91yH51tTyVl%2BCNnwwzUuB9St3oUWQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZ4Pe6Ka6d2SFkEsircA%2FwqJq7XOPjJs7ZSEVVBTsm5bOB4vquf6uSMiqqpSCDQHvt0gucfgGGmqjY01sFiXBNxXNAE8vNb2RT8rNdoNUfvuPvahkvNB2yjrGbJOrXVnwjOJY3TTGmQVqRdwpiJbmorKLCS7DqgKZ2wJplyxonYObseblC53hBG4b1S%2BlbQ7nP%2FGCr5MLyWwjmo6Auv%2BXBmItm8dvMJ7bz6d4qoZm5klntS90So%2B2heaRsqeUT2J91gHB497CbxGcgn0Dx2rIRxvtMzWkOE7Na51LYO2MnCxzGMuiBgLrygeZw9fYCFO%2BYhkkr9sR%2BQanvOHBjspP0bIU5SJorJNUuqOB3uyGjWbiXa1c1WD7YovJ93Rg6z8%2FxXYIF5nz35YdsgBb6yqqmC%2BdgTABFzqEVAeB2O3ZHysbN1bOgBXY%2BZyAvUnQcohpeqr0MBSyTRfBVwR888%2BHRsMzh%2BmKFAC9w3MSiaHUVe%2FRNeHgcezcSBTgx%2F5VaWmEEIdmGgAr5SXkb06RZf2ZVZxOMN%2FGmKbja3UU0bI6FcGwCR95iiI6It1upq%2BRHsdBltU1ISoo%2FY3l3nL38VNDGu7Hs4XXg1XqAsa%2B%2F5LeWVMjcOhAxZvnjfluxtTyDkHtd8V%2F9ZvzQHRxoiMPynv8EGOqUBkfdYLobWt4lYXk%2BbWavh%2BQMD2R3aUq%2Fhog5l4BKyZFSQ7HqQeOyTuT%2BBWDdn%2B6xfXvO9ZF6wYwnarS6%2BsdqajdAAFges4EPte6y8qe3MdrFQs8Ri1yUxO3oZMGbemhSUa49%2FhCy7TYEsAC8oubnezZe2jN0DUvAvFS3Kh2fWkM5af2GoVzZaIssdJ96Wv8h0rels1dIPi2q7wetd%2BZp9AMI6B1kp&X-Amz-Signature=e58e5362b20acd6f36853bdb0c1909e99e632d60831563ab1672ae8a95d68052&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQXUMLU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIDK5hrp0jHLO0oxgybxyGco%2FGY2RIVoZTyWDo8UopnkfAiBIhv3fOk%2BylcP6gyf3y3yjqEeLgt9dq%2FsOLa2suf5gniqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJr96fx3cnUnHFhrKtwDze%2BaDJeuGLeo6l%2FqhKcBT%2BMFu4%2B2YNXQHba6sx1N7mslcNHdkykdBRIayU7aqXmIFXGli07YBr1up0xpqkuIL%2FaiLHiufwv2cMCXR56LXMnqPmcffvFut7awVg2uQxYN3eHiNvVvnodnc8H6ff8outNUnvpWkfMhpQgWHebHbzyGyogoOURXW13rSINMyj%2B6fsp8vCLSDwvU%2BxWwO9bYvUrjGJeKMV0FSg9rTY5oPzhSUjUxP0sSyfU09gaMDUS66r7Zv4l53LFQ9wGR3fuGAB1V2PHcUaU0IX7YxQZSVBWMW96aGUwvI0V3TAM8OQ9OrAPRbCeHQjQjJRWlmWc09rdLiBjCmf9%2FC2Ypxex%2FWDojUn8PCP2nwlIj9Cj167bHKKSqki8xqdu6pj%2FdTfzVEO3vK8hB%2BQ5ne7kYwJc8rhGxqwCWyjcSM%2F0VcqRENIXrbt92XdqgXtKFTs7jfk32ewjTyO9eIjlpRAlDLcPc226bFS3OJU9XZhFlQerQn%2BxOi%2BrlklAkyb223lpxDr1gj%2BTwJTk%2F32vUrr0T%2BWj5zsOT4yl2Fj8HjVWxr2GZ%2FGRmpao3SPCiZLbJ11tqV5rrj5roHVm8YIGbK%2FfX0j2MuYVsPvhjnwD9Mf0n4HEwyqi%2FwQY6pgFciZI3bo4hv6qg0YJRGoS8GomuDgqhIX8vxchKb6zknZpWh2Drs%2BqJ8DD%2F54oHjFJdZPnK7QeLTmWGNT4Ng6pI556op47vm42KsvusUlIibNM9WhZbeBPbyfUxTPNULmjuEuQKupYoPojRAQfP%2BHtojUhZOf%2FszWfO%2FmlmtmXrAswUSNMfWhDhwsDroNnn%2BarOz8AI2VV%2BlCt210b8Zb%2BU%2B%2BT4G5R4&X-Amz-Signature=88fea3fe1f0ff4492e947743dbdac44c354fdbf83e8bf8c7b8a973a22d2134a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C65RTEE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCGSYQmeVkmPXT%2BExNt7nXbY2L5rOfSVAy73FX7OAlKOwIgZFaSNC3rlCOBxtrzwsDXGxVdzkEHBQl27nbqTM76RHMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN79KWaXswKCNMv8CyrcA90CRhUHu1VU%2Fg23sOPP1bC4x2%2FIF6J%2BWwWF9KSeyuuyWUw0%2FPGDxyN6XHCuuvkdhzj6eDkDHtna3KNAX97ASkXrK%2FIhNjeNJhctCZzHGG9qohgmieBMqyIDUUXIV6QdvGwfE9KYZ2SU6%2BBamzRzRactBUBTb3%2FD5S15CX2hWEAUEEnXf8YQJWCLw4Gp338qWEpchgjlQyx7r1IuriMh0Iyxv3QzOp9HoXGmBWfTt2IHx8Ptn61McVsPuDgHak3pGWozIGdRFhT9%2Fkyc%2BHYVOcFoHPS8KF8Ez36ItW9xYCTQqsrNRLjEBz6VXuNGUnRx%2BNdG0akyihDa3tftJ0glSsSVOCH9mHpkSiayTvbqmNks%2FK0BUS0RsgWjz1%2F9euWPijS45Rskjv4DNPDsj6sYHnQSnpDGJUMYPzkZlR45NfV%2BCwu13yn4boklopM%2B1rKTA5iF7eQSTcSShmtbbbdToC0bVJ%2FPCC4Cs5tltq2wRaSYnJjgT7%2FaaS23OCZ57XfkXL%2F4lORw8qJmcgWi3XS%2Fe8%2BlrmN8NvG2NsKbut1GryGKrquct2BWP3oELZZ4JRYn%2FvE5XVlXOGWE42iQzYhhkd8c7Ly1EPDQDUQ8EJx3QNbrEg0BuOYfV%2BvVRfsjMMKov8EGOqUBFHGxa5%2BtL%2FCHe5p6%2BGWhqElw9uhdLTU%2BT3oDz9jBgAWSBgXPow1bmg1JPHpqt7bZlBi6%2FKYTOCA%2F5YySMAhGrYurQ%2BLQcz73PCy8LLKL2PpVbr3gfNDThDCib2FQBDAo0x%2BLcGqe86yhqs0%2FlKICytBlwRAzOqK0YcbbIu63cT6lDCl7JRWuYUvWzgDjwsgLyWNc9KHXJXbEf%2BcCgU4yOLHwG5p3&X-Amz-Signature=5becc31a81a94de86440cd053c0aac77f0787f79eca63061326dbaa935f0a223&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
