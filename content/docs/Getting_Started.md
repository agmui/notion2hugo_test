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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIZXQEH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDrm6bWOT93QhI6%2Bhn8aMWI2qdUJBjGxHP%2Fkyxp9nknAwIhAPyA9SiuRq%2FF2ycAJyUy6PDLZQUhybkekVh3F6sanlsSKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbC6cqcIy1zhc0GQUq3AOPzqFOQmOeD23phm84mnZY%2B3u2LlvDllfqHOGSbmllZ8zcG08AY5W4RUNN%2BKVSAnDBX7wB1zf8djxG9S%2FHd8REGNf1zbapxyWJA8UUpYyQI8LNuRuPBj1uUALxqJWg%2F7FwmED6%2FuC0Br8DDiOznzPDSrbE7cqsrOZzrdNziDHHbBGvV%2B0fETlCkwBosqTcTs6SMgOSeT%2Fi8nAgj9eC3byCmasoi9SwjTIt6nUAL%2BCmFkcFNaop8lMBAkjMtDNseNDvPn%2BIb3fk%2Fw6yLzEHMK3QnzZRecxqlTs42kYFgUKknlBvzW6ZNhKaqT1U4jzApl0WHh47nULeIS6BbZmgrjoY3plUr4yMRSxOWIeO7eOS9It1Rdx94fxcIEl8FiYYQ0Gr0EJ7ehehRMZXW3l7w3c7bYxxRQ9cj6u%2Ba2LPACzwM8iGYonRNp4nB9RLyZBQQVPiuMPmsxVpMfK%2BFncHx0a6NpKKhnMR53DszdJz4kQkJabgjLyNcLSJCjpOsAwbqMkAqxnrDjjEpAL42nQFvTkNMbr1xWRN1nbojj%2F7%2BEN1efJ9%2BsmklepB4xK1KGRCxwgDM0BJ3DdCkqY8y9%2Bcl0zd9GJ6PBJLaGswlqSPHkizSvfuKk%2FBmDYqIrEv3zC13Na9BjqkAUj2CZxUowXJR1kzEuHWFIUqknLHU3btE1clngVJsoE5Ur2Mx1sqG1%2BzXRQIXenFx6iFMQkU0kmfbiwfxVY1%2FFhlD9W2ggnd4YgbMPfrC7zpPuID%2FAuVTiflw7ICYW0p%2BfCLsTbMjE7PELz7GE5TosPMFdomRJKHC039MI3zqlxRW%2B8KGseJ7l4yRErEqsdGWHf7dGK7pWdI2pMhSb%2FD%2B87aT3FX&X-Amz-Signature=5203d14eeda0fe10ab076b7ac07d902c28bdb12cc99c623191bde6b76421bc21&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIZXQEH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDrm6bWOT93QhI6%2Bhn8aMWI2qdUJBjGxHP%2Fkyxp9nknAwIhAPyA9SiuRq%2FF2ycAJyUy6PDLZQUhybkekVh3F6sanlsSKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbC6cqcIy1zhc0GQUq3AOPzqFOQmOeD23phm84mnZY%2B3u2LlvDllfqHOGSbmllZ8zcG08AY5W4RUNN%2BKVSAnDBX7wB1zf8djxG9S%2FHd8REGNf1zbapxyWJA8UUpYyQI8LNuRuPBj1uUALxqJWg%2F7FwmED6%2FuC0Br8DDiOznzPDSrbE7cqsrOZzrdNziDHHbBGvV%2B0fETlCkwBosqTcTs6SMgOSeT%2Fi8nAgj9eC3byCmasoi9SwjTIt6nUAL%2BCmFkcFNaop8lMBAkjMtDNseNDvPn%2BIb3fk%2Fw6yLzEHMK3QnzZRecxqlTs42kYFgUKknlBvzW6ZNhKaqT1U4jzApl0WHh47nULeIS6BbZmgrjoY3plUr4yMRSxOWIeO7eOS9It1Rdx94fxcIEl8FiYYQ0Gr0EJ7ehehRMZXW3l7w3c7bYxxRQ9cj6u%2Ba2LPACzwM8iGYonRNp4nB9RLyZBQQVPiuMPmsxVpMfK%2BFncHx0a6NpKKhnMR53DszdJz4kQkJabgjLyNcLSJCjpOsAwbqMkAqxnrDjjEpAL42nQFvTkNMbr1xWRN1nbojj%2F7%2BEN1efJ9%2BsmklepB4xK1KGRCxwgDM0BJ3DdCkqY8y9%2Bcl0zd9GJ6PBJLaGswlqSPHkizSvfuKk%2FBmDYqIrEv3zC13Na9BjqkAUj2CZxUowXJR1kzEuHWFIUqknLHU3btE1clngVJsoE5Ur2Mx1sqG1%2BzXRQIXenFx6iFMQkU0kmfbiwfxVY1%2FFhlD9W2ggnd4YgbMPfrC7zpPuID%2FAuVTiflw7ICYW0p%2BfCLsTbMjE7PELz7GE5TosPMFdomRJKHC039MI3zqlxRW%2B8KGseJ7l4yRErEqsdGWHf7dGK7pWdI2pMhSb%2FD%2B87aT3FX&X-Amz-Signature=aca2cf3eecff2c37686841a5f75630db5cac17742eb05148831619fce1aa124e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJAW5S2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCQVABzJuBytLcKmAO0u31t2Ik7b2hP4QNTzuoAp43rewIhALQRVEeV9tEyz%2FY0LS%2BszeTLjt0HfsEo1ItV6MfwqcpeKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvHuXCRscBXHEEwMoq3APEJQph7f6xmk7MOpn2XNR61DWAusmcY%2BkWvE3LPB41s50WFrwtcq%2BjRmsH4TQyZCZVTz5b%2FzgxtYAW1wbb9AFdWTVQMayALElVEaTRU3GEH%2BVNG%2BSzbgEBzOtjE5xfvWPIiMtnCnxdwPS3TNJDCRZPCRVGOkFkqUJ0kXE9shOblyozqki5DuFussDnO81AAMSpkdaW23fbEjcAqvY5JY5HS9qRzTS%2Fi7NMcV075fcGPvSxOK3O%2B5e3fmt1%2Br%2BjvBo9fePIcMrYfsUthBNkj0cpdHwpyDMUFqRkvCtN3yHavkogZjqy81uMILkEjIlvjrZq07e5Clu36Tqeie%2B%2FnFdsLdQ5KHQA7p6W2cQnHPAGIVvV8mnMj6BYoFVmZSyxjNrCrJ6PVRT90B%2F4EiV6mvXTeIfMW4oDcl5WwOdpwRC9OxqjxgsTGBe2gie4BoMC2rg94F7RbYnfRSjcsImtMWkhUDXB%2BZPTDAlUGlqhk3mCpu0ZXr%2FP0AYorT7TTaD05PNEuJr9IjL8bG4yJ5kSkHhmrK1%2B1n545oE39w7ukh4OD2x%2FX7LdNuf57%2BnipAA8VNh%2BT%2B5dlj2Psk%2Fyx%2B01F6uhZJvnjMyQukelGE8Q%2F5KwYWnXdX7LyY%2FS5lc4%2FzC329a9BjqkAZ%2Fk0ASEDmGLgzKoM4aCyPD9YOSVd%2FKrBAEjDwT7Pf3Jwo9%2FnXtIAYKDP0Zi%2FbBdIkyMEmKk5Go2CjWEqyKTyU9hPAEcR%2B8WThgLBlk%2BuFcqpYP68pEb4mm5PX1SRSGEQDeomtfx9vSobKGZfmyHeYT76VcpU3jxt7qgZWp4lVeg1PGmuikBz2yL1fluWR7wDYfqPEK4vgSQ18Gz64jwh1wK%2FsDq&X-Amz-Signature=868e92eb8032555e0d71765e13c38704eb173229db35d3751fc06b2c623efd7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EDKWYS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIQCJyGWVvnqlamwwAynx02whhzjbVTuQOWShzVDYOfNqbAIfLyX0cKToJWLXIvDcw%2Br0Bv4X8%2BTC117UHh2xv7lcVSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPFD0g2z6kjMgUZwKtwDUuv%2Be%2Fo9J67ys4ISGgYoZn1JAQ6lUd42XG08daVD6PIldnLomIsPz7bcj0POM%2FB8U9%2BFh4fZxThH0t72CZSd%2FxpNOwX1muMhj8Eps%2B%2B6wlrplOZ2DWJTQr9xrSt%2FaBH1S3j399%2FLZmvL9lOMFZMr3aq8LuLM6NbpP1%2BhIlAHqPuwydph%2FQ0igAWOD%2BaHDrqMLHhf%2FWedznZtsCYxv0jJ0f5eYqXKidCJhXv6O1XoytNAvQOaSOFhoIrDmLQ2NGlBuKbfoTn2B65htj1WpPVnCDmbwGF0Eexku%2FLhftTdKCkMpie00sWz7dZNPbmBvEZkgwmGt0ycl3J%2BcWTh%2B1BlEDheCAO9zLZ83Gh6bMLf9GETdN6nU49TVF6CENyySecBNo5IShatj26vtAfv%2B9rCPfJjU6qydJ1V%2FFG%2BOxBAi87P%2Fx%2BCLoJuoVRa3mnziI%2BaaZ7tQrglNRCOKx3xNZN%2Fi%2FotWGSY7E5LfMCgUO%2BQ1YkjHNxGCXbG%2Bx%2FyhjNJt7wdQfR5GetQZ3Hj33uvQObvZV1Lty2PFOlMBhQJ0EAQXFHFgvegdLP9qvyqrlfuabIL1ZxbOuCzUIANB1dl82oEPy0tHD6KHQ6pFOeyMebSaM9BJiaTkT%2FSM7prGtcwstvWvQY6pgH%2BPB2cHbd4p1HGzeRJKCKI6iSpQrykKCMKHvZqRxlS5Dwk5xx07rOSTAwuplw1rNRCJMzkOUJUSExAguSCaJxaiV%2F60ctfdKR3KQfpesfz2TD86tW1PNG7dVTwC6HiLNCFYYfsqxw91tIwRd1IcJd3llQvMoRDxnByNAoqXkKUNzHXCAu6amV4%2FlEA1EHCW121LQnDv9EbhbNu6kSiirt9wuI11sDs&X-Amz-Signature=94d76493f6472b1bb11dbc0240f6bcca24e1953882f9178228de5ff59bdb274d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIZXQEH%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDrm6bWOT93QhI6%2Bhn8aMWI2qdUJBjGxHP%2Fkyxp9nknAwIhAPyA9SiuRq%2FF2ycAJyUy6PDLZQUhybkekVh3F6sanlsSKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbC6cqcIy1zhc0GQUq3AOPzqFOQmOeD23phm84mnZY%2B3u2LlvDllfqHOGSbmllZ8zcG08AY5W4RUNN%2BKVSAnDBX7wB1zf8djxG9S%2FHd8REGNf1zbapxyWJA8UUpYyQI8LNuRuPBj1uUALxqJWg%2F7FwmED6%2FuC0Br8DDiOznzPDSrbE7cqsrOZzrdNziDHHbBGvV%2B0fETlCkwBosqTcTs6SMgOSeT%2Fi8nAgj9eC3byCmasoi9SwjTIt6nUAL%2BCmFkcFNaop8lMBAkjMtDNseNDvPn%2BIb3fk%2Fw6yLzEHMK3QnzZRecxqlTs42kYFgUKknlBvzW6ZNhKaqT1U4jzApl0WHh47nULeIS6BbZmgrjoY3plUr4yMRSxOWIeO7eOS9It1Rdx94fxcIEl8FiYYQ0Gr0EJ7ehehRMZXW3l7w3c7bYxxRQ9cj6u%2Ba2LPACzwM8iGYonRNp4nB9RLyZBQQVPiuMPmsxVpMfK%2BFncHx0a6NpKKhnMR53DszdJz4kQkJabgjLyNcLSJCjpOsAwbqMkAqxnrDjjEpAL42nQFvTkNMbr1xWRN1nbojj%2F7%2BEN1efJ9%2BsmklepB4xK1KGRCxwgDM0BJ3DdCkqY8y9%2Bcl0zd9GJ6PBJLaGswlqSPHkizSvfuKk%2FBmDYqIrEv3zC13Na9BjqkAUj2CZxUowXJR1kzEuHWFIUqknLHU3btE1clngVJsoE5Ur2Mx1sqG1%2BzXRQIXenFx6iFMQkU0kmfbiwfxVY1%2FFhlD9W2ggnd4YgbMPfrC7zpPuID%2FAuVTiflw7ICYW0p%2BfCLsTbMjE7PELz7GE5TosPMFdomRJKHC039MI3zqlxRW%2B8KGseJ7l4yRErEqsdGWHf7dGK7pWdI2pMhSb%2FD%2B87aT3FX&X-Amz-Signature=770635883f175ee6bf532a0776cf36b1d6c5265a8c0155e8b902897395bd1ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
