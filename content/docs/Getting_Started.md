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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGAOP2DX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKNQXkxDmy%2F1gXzJCEVvI2FA3ed%2FZOYD7SQHvmobpp2QIhAMFqmm5Kr4v1%2FXDOZHxXfqJHICtOh3R0cGWCCINqqFmzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMBjOEe7YlQtHUN9gq3AOkUdGRhUn57r14tQ1LQOvSKf3hgPQaxJsTL6LoOEFiugLDyZj9rGa9BjZKmsgRlQTcw7DEpd4u7xMYpob9uAkTYY75Bb20Rm3H%2FgIakhdYOUxOyo9UfsbKPIXpIymPg8U%2FLKW29gV93N2RdpBJ65mWoOhXg4ob5Ebej%2BMEoqbtwyXb42GpA2TuleQnaMq3z%2BRB8XtxI%2FIdklUn3WWSk%2FcViAYYElKOoLkCEclayDWmtewkJayxr9k5TMeOyZf4jLKW3BQUP7ZNFwlYsB6W9Ps4fCO5QdOXXDO2zrFzz4vx47tlr4JSJvuOQ9X30Zuq4I7fF4RYhutROQSJuzFU2EMY6xl2zfigWR9piFm%2FsaryrYUdoA231QlzOHfHU5NhLnasPNEqX%2B9sVwontzNHdPsD68oDbASxmdAqQZeCSkhucVLO7FLekawlTZmT16msojDded%2BWX%2BpoBCAs%2Bl9DwGXCBhi57GKmNo3oDv06jZ6qPxIJtHO9AtDcTpN%2Bh0%2FZAuvPwzxMG%2Bo1epkXqXaiDFe0ssK9pFZ1pG7q4Cc%2FwHIvxlhwFkAlRFF4w3VR0ZwKXjZX5ir%2Fx8YPLCu9ei%2BX84dDNhdIpSGso9QtLY0u5DFoOVnOlKdciBRQjblvgTC8zovDBjqkAZyxSHctRW3lApdADnwfmKrO0LrBhtuwvUOvFxYF0uJh1T3nTw2o%2Bj%2BE6dCyG%2F9VFx92x%2F9A0jjsYAkfMXscDl5vISR1fN0Tyt26v3%2Bidl4O23vNXO2iMVAiOe%2B0xoG9GpPCQ%2F3SMtylOODw0lykAIrU83wAtJDkpwHLgemzkxTmZ6ob6pSMql4gBVT%2F4%2FfABGgXJiFMkJIPyC38P5gzcYdfTjhJ&X-Amz-Signature=c6d0b450a66d6961d650724a014e3f456fa0db357d89e87af86f71d602cca351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGAOP2DX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKNQXkxDmy%2F1gXzJCEVvI2FA3ed%2FZOYD7SQHvmobpp2QIhAMFqmm5Kr4v1%2FXDOZHxXfqJHICtOh3R0cGWCCINqqFmzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMBjOEe7YlQtHUN9gq3AOkUdGRhUn57r14tQ1LQOvSKf3hgPQaxJsTL6LoOEFiugLDyZj9rGa9BjZKmsgRlQTcw7DEpd4u7xMYpob9uAkTYY75Bb20Rm3H%2FgIakhdYOUxOyo9UfsbKPIXpIymPg8U%2FLKW29gV93N2RdpBJ65mWoOhXg4ob5Ebej%2BMEoqbtwyXb42GpA2TuleQnaMq3z%2BRB8XtxI%2FIdklUn3WWSk%2FcViAYYElKOoLkCEclayDWmtewkJayxr9k5TMeOyZf4jLKW3BQUP7ZNFwlYsB6W9Ps4fCO5QdOXXDO2zrFzz4vx47tlr4JSJvuOQ9X30Zuq4I7fF4RYhutROQSJuzFU2EMY6xl2zfigWR9piFm%2FsaryrYUdoA231QlzOHfHU5NhLnasPNEqX%2B9sVwontzNHdPsD68oDbASxmdAqQZeCSkhucVLO7FLekawlTZmT16msojDded%2BWX%2BpoBCAs%2Bl9DwGXCBhi57GKmNo3oDv06jZ6qPxIJtHO9AtDcTpN%2Bh0%2FZAuvPwzxMG%2Bo1epkXqXaiDFe0ssK9pFZ1pG7q4Cc%2FwHIvxlhwFkAlRFF4w3VR0ZwKXjZX5ir%2Fx8YPLCu9ei%2BX84dDNhdIpSGso9QtLY0u5DFoOVnOlKdciBRQjblvgTC8zovDBjqkAZyxSHctRW3lApdADnwfmKrO0LrBhtuwvUOvFxYF0uJh1T3nTw2o%2Bj%2BE6dCyG%2F9VFx92x%2F9A0jjsYAkfMXscDl5vISR1fN0Tyt26v3%2Bidl4O23vNXO2iMVAiOe%2B0xoG9GpPCQ%2F3SMtylOODw0lykAIrU83wAtJDkpwHLgemzkxTmZ6ob6pSMql4gBVT%2F4%2FfABGgXJiFMkJIPyC38P5gzcYdfTjhJ&X-Amz-Signature=79e48f5708e189dea33a0d86a8d7b28b5c8f81cbf0d2d762644e693fb43eb334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGAOP2DX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKNQXkxDmy%2F1gXzJCEVvI2FA3ed%2FZOYD7SQHvmobpp2QIhAMFqmm5Kr4v1%2FXDOZHxXfqJHICtOh3R0cGWCCINqqFmzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMBjOEe7YlQtHUN9gq3AOkUdGRhUn57r14tQ1LQOvSKf3hgPQaxJsTL6LoOEFiugLDyZj9rGa9BjZKmsgRlQTcw7DEpd4u7xMYpob9uAkTYY75Bb20Rm3H%2FgIakhdYOUxOyo9UfsbKPIXpIymPg8U%2FLKW29gV93N2RdpBJ65mWoOhXg4ob5Ebej%2BMEoqbtwyXb42GpA2TuleQnaMq3z%2BRB8XtxI%2FIdklUn3WWSk%2FcViAYYElKOoLkCEclayDWmtewkJayxr9k5TMeOyZf4jLKW3BQUP7ZNFwlYsB6W9Ps4fCO5QdOXXDO2zrFzz4vx47tlr4JSJvuOQ9X30Zuq4I7fF4RYhutROQSJuzFU2EMY6xl2zfigWR9piFm%2FsaryrYUdoA231QlzOHfHU5NhLnasPNEqX%2B9sVwontzNHdPsD68oDbASxmdAqQZeCSkhucVLO7FLekawlTZmT16msojDded%2BWX%2BpoBCAs%2Bl9DwGXCBhi57GKmNo3oDv06jZ6qPxIJtHO9AtDcTpN%2Bh0%2FZAuvPwzxMG%2Bo1epkXqXaiDFe0ssK9pFZ1pG7q4Cc%2FwHIvxlhwFkAlRFF4w3VR0ZwKXjZX5ir%2Fx8YPLCu9ei%2BX84dDNhdIpSGso9QtLY0u5DFoOVnOlKdciBRQjblvgTC8zovDBjqkAZyxSHctRW3lApdADnwfmKrO0LrBhtuwvUOvFxYF0uJh1T3nTw2o%2Bj%2BE6dCyG%2F9VFx92x%2F9A0jjsYAkfMXscDl5vISR1fN0Tyt26v3%2Bidl4O23vNXO2iMVAiOe%2B0xoG9GpPCQ%2F3SMtylOODw0lykAIrU83wAtJDkpwHLgemzkxTmZ6ob6pSMql4gBVT%2F4%2FfABGgXJiFMkJIPyC38P5gzcYdfTjhJ&X-Amz-Signature=c1d2c23d83b17f85b7b19d47d67ff69b8c3efe98ee0057bd4a19cf302a607b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4XFLAYE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHINRv0amq0PXYSWo%2BlFGZg5KZdkBzK3Dj59C38ytb%2B9AiEA%2BAoifbXlXDwWCPZ%2F7RM4%2BXEkDz9KR7klrfddppx65CMqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8RtdolE6jjnqErWircA8OKB%2BsIA0vdYon3NFzJYI25Vlh8CTrldmsIQruZJXoizWufFnFdjuXRrfo1mqFjZq%2FzBdsNPnBoY3vv%2BcmS4bmUb9IzXMqIUTjJVZ8RBCAXGoaZ4BMrsOG5PsQ7QvthlWoP99V5wPNOfY6M6gD9d4H1EuVshEkvlgINUAfVXSSsChIu8dmGzbr8JvrbvGd1OdlHdXtVKzVzxM3Gw9kNPfaqjGecHL9kvQ35f8biIDk8zn1Lnuy1fSJp6W4IdNrpFTdWXQsPLYBUjr%2BS0LyaPE6U0lZTZR%2BsGu%2BlxXR3b8un1zsRK5v1ZAGjO1CX%2FlVhZBDAwbaaEtVpCYQjU%2FKrZqoi%2FRPPJPxH2aC0WdjYVO9rIIjI7kw%2FQopOmk2uJPsLHRh8MdlVFjG7MbNnZ1TW%2FkL2V%2B8mXd%2F6W9sutAcbzXE0k7QeswXghdS98tyoX0qFOpKSoH2%2Bd9lpYiMEX4wzXE2KGZ%2B1JvrquPWZ%2FJi5w7z%2BQRibhbk0g1MPRl8x4ybAVzhA8vINmuyXwXhJ%2B5E1YJYGEylW%2FWk%2BvkgJ8f5qd9z54VRKcTE3Bdmnv6NZCKl5WFNInHBTmAYA9%2FtA2ydsYPUnLu9eTH%2B0gz9LOUq3iFKnbdZjK7yDTQVUHFRHMO3Ni8MGOqUBjoxTWINrGEsuBFlUQVfcswLIqLq7ncsv%2FixYh5qS3ubW5MedaU6bOx4c9nWMuzI4JLeHCPUBizv0eZs18cO%2F5r3xDyL0alAmSsPfxqo6Qg2J0j7tImWfjU2Umd2O8Zf67oU1f2basG%2BsQN7%2B05iDaMgs24QmOj7O5gjW%2BEbY14BYiGVw9iDA4m6BacRDQYnzVWdVyTClreAXJKUBC%2BoBiy4bwCmg&X-Amz-Signature=b82e489da525f05b953fb15a46b70a3d8f991c6c9c4848c94b77b721e508a6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A4622T7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsZVOkgq2zxnYf9oYnPqic5DKYh%2FDfZuyfUxJ5gbWJ2AIgQt0E%2F8cVdKvMY5e%2B5%2B58wWP%2BnjJ7pql0E1OYudX4AfUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJA9%2FI55dD1MzG%2Bq3CrcA5xY7emHFiPYIIV7ukvJmJFny4wPrrMWeHYr9xDS6sRREncBXOau2iYtrJMxfWHn0tC0tLa%2BS%2FzWWuvTYxQYHc7lHPo1d7cWLT1evv1mwewezZDSMZaOf3U14qkqjcaYvmoZit%2FixMGs5VT%2BM0JweBVfnyNifthoaxH3KY%2FSm%2FNK3k%2B2PWyiGxcs7Fs2s6Y4iNlzcFN0SlCPlwekq3Yy6CCvdx5ZGT%2BVIBP6zg5ifgmtcrKFlZ7xnaZACj8pvXuckjr5cTYeCdMjmJ1L6adnSTmqTyHTic69ZSs4%2Bg9wt4jgljL2Jo6AFi4DqKhkiinu2PiY8vCFZdSc8GNv2HNzvJtvvSBRszAdkkDmlaUz%2FRDcdsHeLkYEe6BIhSMg5hISaKYovD9xo1%2BTNEKRUJgodZRh8B06%2FP1QpbekelrNsZWVKSh16hNjtXOsHS9Y8OUjWtfomvIIHOP5lNJxFUwj%2F4l8MeVNLzmwfmf7qxeq9HsH7VIRzpci86nVsCkaONzdxvOGq%2FHZftlzGNZSMp6u1uQ4ktO1RerQ4vxj%2By6wkqMMUqEpCvoFRKX6fwJ0QQ4Njl9z6ioi0v%2B05iSGLdGTEsP4qZZN4nglWye%2Bnr9Mmt26Vba%2FzGXD%2F99vAfg8MJfOi8MGOqUBVNv5INOPKXpN%2F3yhtJeTljn3q5KWa2JtCCegeB%2Fp1EYArZHl1lIsvLZesnsbnMU%2Fcabb2QDUWkQJENrLDcJipf7j1%2BOXiLn37lmqi3YnxhjVJcSSGB%2FiVoqTrTf1Fwes%2B03fJiypqvubAAezAeOin0xq129QQLsrCKtO24sQAwzf6p7J7CJzIg1F57YshsJgZC%2FSy%2BdCeqVPkBZve8nNiYkxyc84&X-Amz-Signature=50346eeed1838c38aa33bffd3941cd2fbe24ca56b72aa1b3711877389c358c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGAOP2DX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKNQXkxDmy%2F1gXzJCEVvI2FA3ed%2FZOYD7SQHvmobpp2QIhAMFqmm5Kr4v1%2FXDOZHxXfqJHICtOh3R0cGWCCINqqFmzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMBjOEe7YlQtHUN9gq3AOkUdGRhUn57r14tQ1LQOvSKf3hgPQaxJsTL6LoOEFiugLDyZj9rGa9BjZKmsgRlQTcw7DEpd4u7xMYpob9uAkTYY75Bb20Rm3H%2FgIakhdYOUxOyo9UfsbKPIXpIymPg8U%2FLKW29gV93N2RdpBJ65mWoOhXg4ob5Ebej%2BMEoqbtwyXb42GpA2TuleQnaMq3z%2BRB8XtxI%2FIdklUn3WWSk%2FcViAYYElKOoLkCEclayDWmtewkJayxr9k5TMeOyZf4jLKW3BQUP7ZNFwlYsB6W9Ps4fCO5QdOXXDO2zrFzz4vx47tlr4JSJvuOQ9X30Zuq4I7fF4RYhutROQSJuzFU2EMY6xl2zfigWR9piFm%2FsaryrYUdoA231QlzOHfHU5NhLnasPNEqX%2B9sVwontzNHdPsD68oDbASxmdAqQZeCSkhucVLO7FLekawlTZmT16msojDded%2BWX%2BpoBCAs%2Bl9DwGXCBhi57GKmNo3oDv06jZ6qPxIJtHO9AtDcTpN%2Bh0%2FZAuvPwzxMG%2Bo1epkXqXaiDFe0ssK9pFZ1pG7q4Cc%2FwHIvxlhwFkAlRFF4w3VR0ZwKXjZX5ir%2Fx8YPLCu9ei%2BX84dDNhdIpSGso9QtLY0u5DFoOVnOlKdciBRQjblvgTC8zovDBjqkAZyxSHctRW3lApdADnwfmKrO0LrBhtuwvUOvFxYF0uJh1T3nTw2o%2Bj%2BE6dCyG%2F9VFx92x%2F9A0jjsYAkfMXscDl5vISR1fN0Tyt26v3%2Bidl4O23vNXO2iMVAiOe%2B0xoG9GpPCQ%2F3SMtylOODw0lykAIrU83wAtJDkpwHLgemzkxTmZ6ob6pSMql4gBVT%2F4%2FfABGgXJiFMkJIPyC38P5gzcYdfTjhJ&X-Amz-Signature=ec38a097ec02bf2c4266acdc3bbef210400a9fcd1d15a34c1f37e876169fb39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
