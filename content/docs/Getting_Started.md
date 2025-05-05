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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNFXILM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrfOYSecrK938hgWG8ZJrArZCni%2FU3CYrH0GDuoZL05AiEA06JLJvBgd5MJBNAtBihNiRLVtBOmS%2B%2FbXF9scYl7FXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGjtNkPveSQOCwhITyrcA0ixJE4ZgyG0vjU8AtaN08MC9R98FxztONYn5pheR%2BNwg3ewTv27rdgXgSLSS7yJ9o6RKPAUpeVl5dkKcYYNrfm9fV7Ca7VGSD9KzCz4gihVyUimA7SYvgbEjcUnay1dyu1k%2FzyeQMVNQc3aQXOsha65bmlRABtGGiSc52BLwyU7lHRSnEsmpDmJQAb0T510KcoGBn8Ig0oq9ui8vx9IBwY04atDHzuGhgCZv3PEvfMuJ%2BC3TDAFX4b4ksMlOaqbWyE2Kj3zPEV%2BcIEB0RTsubZS38l%2FXR8FSfbpqmjXm0WGlsQdZRKDt%2BStFZiTW8WQenlDmNmLaoK8VAY5Bl2wPuHeCtatSvpe0rISA4Q6BJxDlBEQD2dd7gpkekNGDuEQXtCpfC6nTV14FPYdc6WLRIlWpTob90bIrVgTBmospBWLeU9aImJxMa%2BMHkRmxi27pWOjSjf446sg298Ubb5zXv%2Bzged3REJcNWqE4UdvePdw6NaxzkcON%2FIBqoA0d0r1L6TuWxXSlp8S3C%2BqcKklj4RjDD0sNoZpBlVFznnakaWpDcTNeCVfmadYbmOb5rKNMiOPLA%2F1vTMOXnvCMh8dxcRM%2BvL9gKPOxltlowWfZN%2BE%2FE1V1vU%2F%2B98UkhBpMOGw48AGOqUBLApckeA%2FN%2FyCk%2FHJTG4dDhBTgpA%2FFFZQ4rS2H1CeCQNkEcS%2B6uz3Y8kTAl1sGptmkdso9bM7EUUoIGz5NX7DEFphZRpB1421jMm66ppfbVZsZ21V49g%2FXnOG%2FS9E3rbDwuzJbh6NY9oUodQHvLif2Ssz9XOrAvTLWN%2B0gaiWXdPD9nPccIqcKhdQ3KAedIugHHNplY5XjXWJVNdupgz53Dqk8%2F9r&X-Amz-Signature=ef9723521e646ce309f254572cf56b5bf9ca7c5411476cbc7e391e2445ec672f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNFXILM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrfOYSecrK938hgWG8ZJrArZCni%2FU3CYrH0GDuoZL05AiEA06JLJvBgd5MJBNAtBihNiRLVtBOmS%2B%2FbXF9scYl7FXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGjtNkPveSQOCwhITyrcA0ixJE4ZgyG0vjU8AtaN08MC9R98FxztONYn5pheR%2BNwg3ewTv27rdgXgSLSS7yJ9o6RKPAUpeVl5dkKcYYNrfm9fV7Ca7VGSD9KzCz4gihVyUimA7SYvgbEjcUnay1dyu1k%2FzyeQMVNQc3aQXOsha65bmlRABtGGiSc52BLwyU7lHRSnEsmpDmJQAb0T510KcoGBn8Ig0oq9ui8vx9IBwY04atDHzuGhgCZv3PEvfMuJ%2BC3TDAFX4b4ksMlOaqbWyE2Kj3zPEV%2BcIEB0RTsubZS38l%2FXR8FSfbpqmjXm0WGlsQdZRKDt%2BStFZiTW8WQenlDmNmLaoK8VAY5Bl2wPuHeCtatSvpe0rISA4Q6BJxDlBEQD2dd7gpkekNGDuEQXtCpfC6nTV14FPYdc6WLRIlWpTob90bIrVgTBmospBWLeU9aImJxMa%2BMHkRmxi27pWOjSjf446sg298Ubb5zXv%2Bzged3REJcNWqE4UdvePdw6NaxzkcON%2FIBqoA0d0r1L6TuWxXSlp8S3C%2BqcKklj4RjDD0sNoZpBlVFznnakaWpDcTNeCVfmadYbmOb5rKNMiOPLA%2F1vTMOXnvCMh8dxcRM%2BvL9gKPOxltlowWfZN%2BE%2FE1V1vU%2F%2B98UkhBpMOGw48AGOqUBLApckeA%2FN%2FyCk%2FHJTG4dDhBTgpA%2FFFZQ4rS2H1CeCQNkEcS%2B6uz3Y8kTAl1sGptmkdso9bM7EUUoIGz5NX7DEFphZRpB1421jMm66ppfbVZsZ21V49g%2FXnOG%2FS9E3rbDwuzJbh6NY9oUodQHvLif2Ssz9XOrAvTLWN%2B0gaiWXdPD9nPccIqcKhdQ3KAedIugHHNplY5XjXWJVNdupgz53Dqk8%2F9r&X-Amz-Signature=7cc89e3d305a4bae9bb11408117d27041e7589683b0c123bc5f2d25afa006e28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNFXILM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrfOYSecrK938hgWG8ZJrArZCni%2FU3CYrH0GDuoZL05AiEA06JLJvBgd5MJBNAtBihNiRLVtBOmS%2B%2FbXF9scYl7FXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGjtNkPveSQOCwhITyrcA0ixJE4ZgyG0vjU8AtaN08MC9R98FxztONYn5pheR%2BNwg3ewTv27rdgXgSLSS7yJ9o6RKPAUpeVl5dkKcYYNrfm9fV7Ca7VGSD9KzCz4gihVyUimA7SYvgbEjcUnay1dyu1k%2FzyeQMVNQc3aQXOsha65bmlRABtGGiSc52BLwyU7lHRSnEsmpDmJQAb0T510KcoGBn8Ig0oq9ui8vx9IBwY04atDHzuGhgCZv3PEvfMuJ%2BC3TDAFX4b4ksMlOaqbWyE2Kj3zPEV%2BcIEB0RTsubZS38l%2FXR8FSfbpqmjXm0WGlsQdZRKDt%2BStFZiTW8WQenlDmNmLaoK8VAY5Bl2wPuHeCtatSvpe0rISA4Q6BJxDlBEQD2dd7gpkekNGDuEQXtCpfC6nTV14FPYdc6WLRIlWpTob90bIrVgTBmospBWLeU9aImJxMa%2BMHkRmxi27pWOjSjf446sg298Ubb5zXv%2Bzged3REJcNWqE4UdvePdw6NaxzkcON%2FIBqoA0d0r1L6TuWxXSlp8S3C%2BqcKklj4RjDD0sNoZpBlVFznnakaWpDcTNeCVfmadYbmOb5rKNMiOPLA%2F1vTMOXnvCMh8dxcRM%2BvL9gKPOxltlowWfZN%2BE%2FE1V1vU%2F%2B98UkhBpMOGw48AGOqUBLApckeA%2FN%2FyCk%2FHJTG4dDhBTgpA%2FFFZQ4rS2H1CeCQNkEcS%2B6uz3Y8kTAl1sGptmkdso9bM7EUUoIGz5NX7DEFphZRpB1421jMm66ppfbVZsZ21V49g%2FXnOG%2FS9E3rbDwuzJbh6NY9oUodQHvLif2Ssz9XOrAvTLWN%2B0gaiWXdPD9nPccIqcKhdQ3KAedIugHHNplY5XjXWJVNdupgz53Dqk8%2F9r&X-Amz-Signature=9bbaaeee1670f61a17174cdb4df5b3820ca878f4df19acd251ff2589c19f7e64&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4AFUB7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVMqcEtUiRqWb2cKxrfGP9R%2Fmn%2FhnnWA7KIYSvWIT0zAiEA9vQCmZvlzRb6YpzJ7r6BAqvwbpXKQkKku6e8HdXPdxYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJkXoSD6pxXOlLFJbSrcA7zdA3iP%2Fne%2B4V3F6WUBkVymk8KvZBpXWrWj3n8qoq4EObEuyKhiuYxEhrwwxxPblIST7cHAjOxU5QniPYHay8MHvMgNkothaOuiGAfb4Jm9bR4AYBwMLSM%2By0g8d%2F9pwIsunk1W7he5QysA%2BUuRA2%2Fo2ZuXRqjId1TTS%2Blmd%2FMxl0iG6JppmgD8dGIQnJnYCtki7Kn%2FtqZDLhr%2BI6F%2F6%2BaQtGGetyMn1gAA3QkKwfnqS27fFnnW8XSFz2tHkc4X8SE3wqRzepIu3wSBODetVVN2b0rvaY%2Bpk04C19kToplY8hhyQJ8CIcChDRjRcBV4lgISl7SuDAobfZMa77NSIFiwgYg1C4Dw5hZ5f1jkBBt4jxwehqhzkeOQtYqdjNeWwP37xu0%2FcjUvk2KanfUUmjpXm5MWfQfoyzjAaNZf8b6hv52KueSpI6ITIxn3fCwuI9%2BRhlK9aVhVFK6EgHSlAuretgVKZbmNc9RYypdLW1lKvg9q12mYymHj58qZbbd8MTBxPsZM2SvdaAv5PGQRtmszp0KlJydYV80QRprQfxNESacSvFVnEqAwmu4CaWyG6tusSWLF5so%2BUT51EQLg8zd7esRbcoyoBiH1GK1kCgtfTKMkWhxo7Sy3ayamMPiw48AGOqUBgNCfObzYfcD%2FXhMN4oexiuN0zd5WjRqhNKv3cdG6S18vE7NjnCzg3DDQwJ3wvdmtOgU2zbj8sWbolLF7nsnoGw6nxBtcRztTsR3nAZZOYLRgPqWZMQ1cTboStGw5p%2B1ue13O%2FMYDaGsdR1CNbs3eS4zkldufSyhwsCJDGEJKEVIcyxSESPJeywWbdZ3MmQrlStLpprtUAI5v2LK2OLG7H3sFEgnb&X-Amz-Signature=746bc41d33a4ed506db1e292a3b5ec7897ec158bb8672b4c28d0b706b062ae68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PVJL5XB%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtT5A38cgIo6ruTvZPsCuhS%2BDmNzHeKieZE5ZkxcKJ6AiEAoNEAhLdX5zjnA0iFVwJknAMf0kPWIb1UfKNuzBn5XH8q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKbOJVwQaf2BZU8EzircA3l8KXpGoVSi9gz0G3IfhU4WIGkhc8OIHMotfxOIeeeu8deDcaGFY58jwnULn5E2puEejw935lbdGcJRhpc2kooGRp2ULEZxooH%2FdSGVihhSPelLRRcfZc3Q3adycvirktyCfkjYxH9z%2BYKzkD00V4WyTLtfSH0U2Ai5fxPwmkUi3VWL%2BU1ARKqI4%2FYtMF5y0fvGHlaIHJzJZvq1xxUJfuuPnNp75I5OEVgOgGy7qP%2BOQuh6OhJ1N89mtpAkZoIKxCN6be9LYRoe%2Fm7eocoLzW9YFdVZFmC1ulnUAvsQdM%2Fi3XyT7jT2txlFFOGgJQQ13V%2BXOpCJjagCwNf%2FcUkjDlpbe8Y1se6vJccwb2vywxxOYYBcW18GddXZW7wgZZF59gD5SAthxhaWkbS14JtJEgDoW9gxINz%2Bc%2Fr4brEfP5obZzAmfk1YZqFqxjEW39YiVIFZdo2ygv9gnS0QJGMaTcFQrxQYBBkgdFBB%2FwctYrWH6uUEnD52e%2FMkX04PL8OT6JhssyX90B1lju8bLUooEgN32T3mtn6Wub5NQ26XSI%2FsZgklNd8eajuboikr0NecXiN8susKaSexVNSHtIWY7%2FRmqBb4Fzp%2FDIGSX9uB%2FSw3pjozF%2BvqCntnecuYMOWw48AGOqUBs79FT%2By7XlUtYSHx%2FFmbpfmQtvYN5SL%2FHYlzy9tdL0HoQ4Lc%2FsFa7Rk9arkkoMQhKQeKamvCJUAA8lkFpT6gJe%2F0oLDKt%2FZgDkF2euZRiEBeue8M%2B8V7cJijihdd8%2B%2ByIUqh5qJm2YuD5kVEd2wO7xTVaY%2FMc4UTfVAemVqqmN%2BkyUBBIKf3LmgxanCzGvLmj2XONUyouTZthWW%2B8XL0KI7PkGta&X-Amz-Signature=0292aed5bfb345a636c8675ee228f05fe58953417befc77896f19ef8cce7bf57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNFXILM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrfOYSecrK938hgWG8ZJrArZCni%2FU3CYrH0GDuoZL05AiEA06JLJvBgd5MJBNAtBihNiRLVtBOmS%2B%2FbXF9scYl7FXIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGjtNkPveSQOCwhITyrcA0ixJE4ZgyG0vjU8AtaN08MC9R98FxztONYn5pheR%2BNwg3ewTv27rdgXgSLSS7yJ9o6RKPAUpeVl5dkKcYYNrfm9fV7Ca7VGSD9KzCz4gihVyUimA7SYvgbEjcUnay1dyu1k%2FzyeQMVNQc3aQXOsha65bmlRABtGGiSc52BLwyU7lHRSnEsmpDmJQAb0T510KcoGBn8Ig0oq9ui8vx9IBwY04atDHzuGhgCZv3PEvfMuJ%2BC3TDAFX4b4ksMlOaqbWyE2Kj3zPEV%2BcIEB0RTsubZS38l%2FXR8FSfbpqmjXm0WGlsQdZRKDt%2BStFZiTW8WQenlDmNmLaoK8VAY5Bl2wPuHeCtatSvpe0rISA4Q6BJxDlBEQD2dd7gpkekNGDuEQXtCpfC6nTV14FPYdc6WLRIlWpTob90bIrVgTBmospBWLeU9aImJxMa%2BMHkRmxi27pWOjSjf446sg298Ubb5zXv%2Bzged3REJcNWqE4UdvePdw6NaxzkcON%2FIBqoA0d0r1L6TuWxXSlp8S3C%2BqcKklj4RjDD0sNoZpBlVFznnakaWpDcTNeCVfmadYbmOb5rKNMiOPLA%2F1vTMOXnvCMh8dxcRM%2BvL9gKPOxltlowWfZN%2BE%2FE1V1vU%2F%2B98UkhBpMOGw48AGOqUBLApckeA%2FN%2FyCk%2FHJTG4dDhBTgpA%2FFFZQ4rS2H1CeCQNkEcS%2B6uz3Y8kTAl1sGptmkdso9bM7EUUoIGz5NX7DEFphZRpB1421jMm66ppfbVZsZ21V49g%2FXnOG%2FS9E3rbDwuzJbh6NY9oUodQHvLif2Ssz9XOrAvTLWN%2B0gaiWXdPD9nPccIqcKhdQ3KAedIugHHNplY5XjXWJVNdupgz53Dqk8%2F9r&X-Amz-Signature=c43ca76a184017a735b2587f70b97251d51509cfde8c8448ba955357558802d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
