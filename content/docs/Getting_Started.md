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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWQMC7X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCDSFqUHCsYx4xiCeD0AIL3s6nvkJD5d5ygAjt%2BLj4YQQIgCJHWYdPDxdDLSZURyP%2B%2FEQqtYaxcx4CHe01ssmaK0hkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8LHrC1q%2FzutDckFSrcA5spWbfaDnL37FNGL2IpvKosi8Y4B5OWh%2BpRG3k5v3pF7ahb6MYKcCPssQZby8ab29Jv5uOBOiV1a75dquFHfTc%2BJyXZ0jemrFN4JPjW4JpAO3YVneMPbWIwdsMrbcTI0aBgHQGvrM7iOzqzWksg3zbQRMD2mpZKIvTh8rtLSlBRrwkaaV6JAM%2BzIg63MhlkU6SKeX3D577WdZQj0yJBnHU4ezR3LCHOdrxulZCfYceZnUJkMeX1ZOoJgPxuLG8yIM6KhBT5LnQKJiI3Nu7eqNopmx5t%2Febe5opzdX7Vw1YIzLyYgbLNevcenqhnqApSrSSO67qM%2FwTt0fZYE1DWj1nAWNMk5bRjYDCV9qoRH4PktTDYNZOdscNeWm8sSnByDiJGiD3GoHkW3rA5h4OvMbyvll6JH0a2zo4USUwczYLOSXutVmRPlMpYd3a94ZDfbh74BiEkBx9x8cCoQub71oaewAA67Mtahy36SbGgYQKGwhdnjNW6oi%2FM%2F79giTwS%2BbLX1gbWEDjvmV%2B%2BQIBw0Zi3%2BkWg%2BbY6Rge1tYA3BOzwHF6FAY0KsS2e%2Fy752qSWO44wRjkBwdVpUlyGWrgAslk0TvY5iRinEG1fjDCeAEruHbF47fwYVi3fHfjIMMChucEGOqUB%2FoSHBV0ClWEa%2BUGiDnHgMHESgs%2Bkh%2FxRjePcN4akV4rPUgnCfDNko04IFqyblrlwuzlUC1Ega3GwOzDsC5Zi8Usfh%2BdJSoFmUNwfEZew9uOf8G3YltuhgOlhKOSK%2Bs5GAazgxbM2S6ccG6aIAOcPoCP%2BaQgWAj6kE8OGRGTUGLKdIordByTO%2BYu2GD2tI1aoExRYEBAk8JdAMee8cgLGGVGaVkYI&X-Amz-Signature=d3f034125e2cc797d54dcb6665137d1425331ad5af0f086a8a1e6adcfa3d931d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWQMC7X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCDSFqUHCsYx4xiCeD0AIL3s6nvkJD5d5ygAjt%2BLj4YQQIgCJHWYdPDxdDLSZURyP%2B%2FEQqtYaxcx4CHe01ssmaK0hkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8LHrC1q%2FzutDckFSrcA5spWbfaDnL37FNGL2IpvKosi8Y4B5OWh%2BpRG3k5v3pF7ahb6MYKcCPssQZby8ab29Jv5uOBOiV1a75dquFHfTc%2BJyXZ0jemrFN4JPjW4JpAO3YVneMPbWIwdsMrbcTI0aBgHQGvrM7iOzqzWksg3zbQRMD2mpZKIvTh8rtLSlBRrwkaaV6JAM%2BzIg63MhlkU6SKeX3D577WdZQj0yJBnHU4ezR3LCHOdrxulZCfYceZnUJkMeX1ZOoJgPxuLG8yIM6KhBT5LnQKJiI3Nu7eqNopmx5t%2Febe5opzdX7Vw1YIzLyYgbLNevcenqhnqApSrSSO67qM%2FwTt0fZYE1DWj1nAWNMk5bRjYDCV9qoRH4PktTDYNZOdscNeWm8sSnByDiJGiD3GoHkW3rA5h4OvMbyvll6JH0a2zo4USUwczYLOSXutVmRPlMpYd3a94ZDfbh74BiEkBx9x8cCoQub71oaewAA67Mtahy36SbGgYQKGwhdnjNW6oi%2FM%2F79giTwS%2BbLX1gbWEDjvmV%2B%2BQIBw0Zi3%2BkWg%2BbY6Rge1tYA3BOzwHF6FAY0KsS2e%2Fy752qSWO44wRjkBwdVpUlyGWrgAslk0TvY5iRinEG1fjDCeAEruHbF47fwYVi3fHfjIMMChucEGOqUB%2FoSHBV0ClWEa%2BUGiDnHgMHESgs%2Bkh%2FxRjePcN4akV4rPUgnCfDNko04IFqyblrlwuzlUC1Ega3GwOzDsC5Zi8Usfh%2BdJSoFmUNwfEZew9uOf8G3YltuhgOlhKOSK%2Bs5GAazgxbM2S6ccG6aIAOcPoCP%2BaQgWAj6kE8OGRGTUGLKdIordByTO%2BYu2GD2tI1aoExRYEBAk8JdAMee8cgLGGVGaVkYI&X-Amz-Signature=05e0e3feb4174e725866b5d58691750f85784bc44640cb5179aaf69ad3c67e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWQMC7X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCDSFqUHCsYx4xiCeD0AIL3s6nvkJD5d5ygAjt%2BLj4YQQIgCJHWYdPDxdDLSZURyP%2B%2FEQqtYaxcx4CHe01ssmaK0hkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8LHrC1q%2FzutDckFSrcA5spWbfaDnL37FNGL2IpvKosi8Y4B5OWh%2BpRG3k5v3pF7ahb6MYKcCPssQZby8ab29Jv5uOBOiV1a75dquFHfTc%2BJyXZ0jemrFN4JPjW4JpAO3YVneMPbWIwdsMrbcTI0aBgHQGvrM7iOzqzWksg3zbQRMD2mpZKIvTh8rtLSlBRrwkaaV6JAM%2BzIg63MhlkU6SKeX3D577WdZQj0yJBnHU4ezR3LCHOdrxulZCfYceZnUJkMeX1ZOoJgPxuLG8yIM6KhBT5LnQKJiI3Nu7eqNopmx5t%2Febe5opzdX7Vw1YIzLyYgbLNevcenqhnqApSrSSO67qM%2FwTt0fZYE1DWj1nAWNMk5bRjYDCV9qoRH4PktTDYNZOdscNeWm8sSnByDiJGiD3GoHkW3rA5h4OvMbyvll6JH0a2zo4USUwczYLOSXutVmRPlMpYd3a94ZDfbh74BiEkBx9x8cCoQub71oaewAA67Mtahy36SbGgYQKGwhdnjNW6oi%2FM%2F79giTwS%2BbLX1gbWEDjvmV%2B%2BQIBw0Zi3%2BkWg%2BbY6Rge1tYA3BOzwHF6FAY0KsS2e%2Fy752qSWO44wRjkBwdVpUlyGWrgAslk0TvY5iRinEG1fjDCeAEruHbF47fwYVi3fHfjIMMChucEGOqUB%2FoSHBV0ClWEa%2BUGiDnHgMHESgs%2Bkh%2FxRjePcN4akV4rPUgnCfDNko04IFqyblrlwuzlUC1Ega3GwOzDsC5Zi8Usfh%2BdJSoFmUNwfEZew9uOf8G3YltuhgOlhKOSK%2Bs5GAazgxbM2S6ccG6aIAOcPoCP%2BaQgWAj6kE8OGRGTUGLKdIordByTO%2BYu2GD2tI1aoExRYEBAk8JdAMee8cgLGGVGaVkYI&X-Amz-Signature=a283cc1047df976f90ac2472aa7cb07366b56e6afc37d451f718219d5a04a103&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXV7ZZD%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDR7H14sdBR4nVicLjSkxuKTFl85fKDMax7hsgnNPTIcwIhAI%2BERHLl%2Bfq3vY%2BtIKCdx9lLUxAKPa1Junh68ACdmEbOKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr8tTOFqgpW51chPYq3ANoNAOSdyu7pDDL9VCotBnmXLkHvOFjMV%2FD%2BXWmRQLciBG5v%2FZLMsEhZNpNDDWAJIuIFNLObIayl5xsezzq7KjCwVSwGe5yEeBSY1vEmOXF2jnN%2FdETuEv8F8edKP5ogwUFqqwNdtM9aHNp9U5fUA3ZOw%2FhA1UNEwDxeUfVpDrDBYONzBYKM2gF4tBlHYbMtXyzHRe%2BdkF3Sth3sqcbo%2FGBT7T69F1YewG2I1ZQlXEmQWp5Q1r3hi3rnFntZiPNRLi1Sca80uJPy2H98EeQQ%2FKBhO3GVyppfelwSHAyRWvw3ab8Nw2RrjwghJCKuzYdfmMtACjrervlAqJ9ue0TsJL1BEXMZAA8ia8NBcJs4QPntF%2BzJME50grRJPpVsMJ4%2FjppgIHAaHKza9TY4%2FTqqUwGl9X4WRTUuFZM%2Fkye9qP7XMRK6pXFzKyGSteHUeLQDXSAOZoLFi0ef%2FJZ59IPc%2Fpniua5kVplGS5CdDGI%2BasGGintxIJvjeX5K4FRk%2F98APtawSt8wMzoQebHI6UIaSJDqgE90S0KG%2Fh3Wbpb8v7AVIAlvBoH0rp0Em8jGn5ZvR56%2BaVsQ%2BU8F3yigCkN3yDQH9EbbLm0YW1L49JgOiQqsSYkNCM2T23kHzGhGjDsobnBBjqkATLc2nF%2B8uALXFZnFPe6fg5ofize62lem5fEb2sHTw1VEYpaOcjAYLsc7%2BAC%2BacwIWcGi2nkNIKWIwFtMT%2BDxrQOFHwLEilJ%2B7Na4kvbIH%2B6OBtNO%2B2KoUwQOJSwztfIACu1zCbV%2FsQDF76xJf0SXaNJUz0yNs0rE%2F8vUippKbTP0P3Br0QYf5FS95jjpJfdT8gCsFcmv1LJh1K7RO8%2Bef2ZMqYy&X-Amz-Signature=85319ccc4c673879c7b3f96e013538b459f319071c9c9a380545892510cdb85c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GN4523%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCeE%2F1MmT0BFxlcoUX%2FUMNiHxGnylYVaShu2eYTP9EMQQIgTWgjWawEbIcmHv6R3EDS9tA7xUQKwepEpYMlXobAbMwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoe6QxpYO8lo09HjCrcA%2BATlPcIVwqUUqlPfB5NG0UowL9znBBBUvq4WuwAVvT0hu0Pq7FqV%2FgNY6IUn8P8BtLE6HUGLb0FLzhA7P7iv8XACOl9dcCbj1Z4WRJ%2Fx2Q4nCKcV8yBpDreGMr8t4Im7fa0zgeSRhrUAyfV7VIoF%2BvkRy5RjLXmPbkPdkWs0gJgMp5Br1Y3uK8DMUTtSqByNskfYWv00aD9MSdBcUI6tQsV0Zt0VCamTPQ%2F4W78x7BvtRFsBcCfDUyisysHylShSAug8s5%2FcrS4u%2FcKZGUKx9eGkJRZq8sYy5XFPQZmNLeiTB2HBXOm2LFpAiBj%2BN%2Bel%2BBv%2FNcX3P%2BwsTefD4QHH%2BSFaPjjafVm9eG3TOE5eLpJy554WsTa4rEDGv9KUPFZ1rqtjpVmtEE%2BrK5%2B94n71syL97%2BnCnnOJwNy2BGEx0K%2BP7aHajY7yde55e41gJWcY1an2LNQhyxsfDPuZ1Bb1EkLkrNAL19I3vJYD4kYHhgi391hGcyaRB5apf6zoPlF1e5KBlT12MIMWMNcnyPrl5GXAhg26aKGdaaZxx0NmrRpcTzdqqqyxyOA0gGd1d%2FebDBtcJjDaukZQWg%2BJiQgOnjDNQcL42qWCGZozXBjbuph4Nm6HJGj2kWUsBAqMNWhucEGOqUB74SMG%2FVRiOzWdHK4mvQ%2B1F7fDdjrrK3xsnTRaIK0l7J82YEt2MB3JVNemiUmBOuE9OkQAvkaCnPZ8O2VDHekQAMxwdrUTDm3YDjftFbOHNOeuQPnutWsGsWU%2F5bHFODZ%2FEC2N19W4GOZ%2BX%2B9GQ0G9GDd9Xa04zS8uXl5ENgdI9J8mDGLiirU1VgkptrfxceDbMUxXc5Rgdg7hLxaDJo67ZJRoa8n&X-Amz-Signature=be12431f4568886fc2061659247800452ad5f7aa79c2fcc397b630f1369306dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWQMC7X%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCDSFqUHCsYx4xiCeD0AIL3s6nvkJD5d5ygAjt%2BLj4YQQIgCJHWYdPDxdDLSZURyP%2B%2FEQqtYaxcx4CHe01ssmaK0hkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8LHrC1q%2FzutDckFSrcA5spWbfaDnL37FNGL2IpvKosi8Y4B5OWh%2BpRG3k5v3pF7ahb6MYKcCPssQZby8ab29Jv5uOBOiV1a75dquFHfTc%2BJyXZ0jemrFN4JPjW4JpAO3YVneMPbWIwdsMrbcTI0aBgHQGvrM7iOzqzWksg3zbQRMD2mpZKIvTh8rtLSlBRrwkaaV6JAM%2BzIg63MhlkU6SKeX3D577WdZQj0yJBnHU4ezR3LCHOdrxulZCfYceZnUJkMeX1ZOoJgPxuLG8yIM6KhBT5LnQKJiI3Nu7eqNopmx5t%2Febe5opzdX7Vw1YIzLyYgbLNevcenqhnqApSrSSO67qM%2FwTt0fZYE1DWj1nAWNMk5bRjYDCV9qoRH4PktTDYNZOdscNeWm8sSnByDiJGiD3GoHkW3rA5h4OvMbyvll6JH0a2zo4USUwczYLOSXutVmRPlMpYd3a94ZDfbh74BiEkBx9x8cCoQub71oaewAA67Mtahy36SbGgYQKGwhdnjNW6oi%2FM%2F79giTwS%2BbLX1gbWEDjvmV%2B%2BQIBw0Zi3%2BkWg%2BbY6Rge1tYA3BOzwHF6FAY0KsS2e%2Fy752qSWO44wRjkBwdVpUlyGWrgAslk0TvY5iRinEG1fjDCeAEruHbF47fwYVi3fHfjIMMChucEGOqUB%2FoSHBV0ClWEa%2BUGiDnHgMHESgs%2Bkh%2FxRjePcN4akV4rPUgnCfDNko04IFqyblrlwuzlUC1Ega3GwOzDsC5Zi8Usfh%2BdJSoFmUNwfEZew9uOf8G3YltuhgOlhKOSK%2Bs5GAazgxbM2S6ccG6aIAOcPoCP%2BaQgWAj6kE8OGRGTUGLKdIordByTO%2BYu2GD2tI1aoExRYEBAk8JdAMee8cgLGGVGaVkYI&X-Amz-Signature=1f7d7570f71d726a101280889b442934777d1767843684525de16e34d4493412&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
