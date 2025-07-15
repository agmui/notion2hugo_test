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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJ4UPSA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFCiT1T8QAMVJNQUoHZJbFW00lz5cW4uKoMuwKqjQj6VAiALPF0b%2FWjYBR2OlUt1WmsupxZnLobreAYjDzMDZ3oIxyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMhrCJCLZBy7Jaim20KtwDuHR97VKleCELq2hoNkeetjcB7CAQ0iq%2F9NBVRC%2FHlPHwXW3Lpkey9rpTijOLANmL6h5AW1YifUWUydC7Kom91RxMqTMUi0%2F0bYD%2BnyEhB3vWx0T4zDTK4iMMQIDEkJv1zl%2FexfhjjBPbGvamurtKbyg7aXthxLkiFkG2t0UeWim2VTHr%2BC4M3GlvkgPHYrnzgMiBppTwvhwURkFBKHGtKciyXxpPbZlkl%2BGFLzA5fDoG7YevWG3g%2BPn19LCdsLUbOWPEnEGK5sbPonhmAae08zJFjzizdl%2BJ2VqjFKF0WG0%2FOgZhqgFAjbtOdzAbOTxdszE7q3sLn8JN4eHzsoXjmgTxKQEC37wHe%2BT1c52fSWTgYrflihzeTHSXV3em9FFWK5xXOz8yla05oobHJwdXU9ltHQdHEkxMbT43u3fpm5dHN0oYSZ1GKJ1QJHyPWo583Y%2Fa1xkuNfrx4TXPF8IxmLAzKg9vtzqcLRWB0TWvRa70wI%2FkUhSLRUxeImVvY8TUE5eY0E%2Bi%2FNKvnJVFuGg0Nb0DaIqpEctL9UDUxZQ52t%2FbFuKudpZv6bWDq20YN1h%2B7pcPimoi0efjFDG4HyRR7FiyByge2Hc%2FR%2BA%2FzqaWXVBYVVH3xdiEPtjrsv0w0%2F7WwwY6pgH95MyntqXT40QxyePo7m9mXGGUlr9xshQX3zd4zgvKPxUsQNH9ZXxawI1DKkSQmd3jaJS%2FBOAkVzKUzp3j6cewxN0oeO7u%2B9krOxN4zCPc7O8XvjNickQnZAVfAsw7KFj0X9J6mcmSrN9xwIe7ZIEJwN8GCTju%2FLuBKI7CR4V3jHAzPGacAicb37DiX51jFIY4QJ52zRmc2q0WGG1lONOg2WJaLVgC&X-Amz-Signature=fce9255b665774a125a1b0090a3b051754771ddd8419fd48e288398f4a9bb090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJ4UPSA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFCiT1T8QAMVJNQUoHZJbFW00lz5cW4uKoMuwKqjQj6VAiALPF0b%2FWjYBR2OlUt1WmsupxZnLobreAYjDzMDZ3oIxyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMhrCJCLZBy7Jaim20KtwDuHR97VKleCELq2hoNkeetjcB7CAQ0iq%2F9NBVRC%2FHlPHwXW3Lpkey9rpTijOLANmL6h5AW1YifUWUydC7Kom91RxMqTMUi0%2F0bYD%2BnyEhB3vWx0T4zDTK4iMMQIDEkJv1zl%2FexfhjjBPbGvamurtKbyg7aXthxLkiFkG2t0UeWim2VTHr%2BC4M3GlvkgPHYrnzgMiBppTwvhwURkFBKHGtKciyXxpPbZlkl%2BGFLzA5fDoG7YevWG3g%2BPn19LCdsLUbOWPEnEGK5sbPonhmAae08zJFjzizdl%2BJ2VqjFKF0WG0%2FOgZhqgFAjbtOdzAbOTxdszE7q3sLn8JN4eHzsoXjmgTxKQEC37wHe%2BT1c52fSWTgYrflihzeTHSXV3em9FFWK5xXOz8yla05oobHJwdXU9ltHQdHEkxMbT43u3fpm5dHN0oYSZ1GKJ1QJHyPWo583Y%2Fa1xkuNfrx4TXPF8IxmLAzKg9vtzqcLRWB0TWvRa70wI%2FkUhSLRUxeImVvY8TUE5eY0E%2Bi%2FNKvnJVFuGg0Nb0DaIqpEctL9UDUxZQ52t%2FbFuKudpZv6bWDq20YN1h%2B7pcPimoi0efjFDG4HyRR7FiyByge2Hc%2FR%2BA%2FzqaWXVBYVVH3xdiEPtjrsv0w0%2F7WwwY6pgH95MyntqXT40QxyePo7m9mXGGUlr9xshQX3zd4zgvKPxUsQNH9ZXxawI1DKkSQmd3jaJS%2FBOAkVzKUzp3j6cewxN0oeO7u%2B9krOxN4zCPc7O8XvjNickQnZAVfAsw7KFj0X9J6mcmSrN9xwIe7ZIEJwN8GCTju%2FLuBKI7CR4V3jHAzPGacAicb37DiX51jFIY4QJ52zRmc2q0WGG1lONOg2WJaLVgC&X-Amz-Signature=90616fef0817625d86e19c95e615bb09c26728eb2315a8b90f8b55a36e03b806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJ4UPSA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFCiT1T8QAMVJNQUoHZJbFW00lz5cW4uKoMuwKqjQj6VAiALPF0b%2FWjYBR2OlUt1WmsupxZnLobreAYjDzMDZ3oIxyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMhrCJCLZBy7Jaim20KtwDuHR97VKleCELq2hoNkeetjcB7CAQ0iq%2F9NBVRC%2FHlPHwXW3Lpkey9rpTijOLANmL6h5AW1YifUWUydC7Kom91RxMqTMUi0%2F0bYD%2BnyEhB3vWx0T4zDTK4iMMQIDEkJv1zl%2FexfhjjBPbGvamurtKbyg7aXthxLkiFkG2t0UeWim2VTHr%2BC4M3GlvkgPHYrnzgMiBppTwvhwURkFBKHGtKciyXxpPbZlkl%2BGFLzA5fDoG7YevWG3g%2BPn19LCdsLUbOWPEnEGK5sbPonhmAae08zJFjzizdl%2BJ2VqjFKF0WG0%2FOgZhqgFAjbtOdzAbOTxdszE7q3sLn8JN4eHzsoXjmgTxKQEC37wHe%2BT1c52fSWTgYrflihzeTHSXV3em9FFWK5xXOz8yla05oobHJwdXU9ltHQdHEkxMbT43u3fpm5dHN0oYSZ1GKJ1QJHyPWo583Y%2Fa1xkuNfrx4TXPF8IxmLAzKg9vtzqcLRWB0TWvRa70wI%2FkUhSLRUxeImVvY8TUE5eY0E%2Bi%2FNKvnJVFuGg0Nb0DaIqpEctL9UDUxZQ52t%2FbFuKudpZv6bWDq20YN1h%2B7pcPimoi0efjFDG4HyRR7FiyByge2Hc%2FR%2BA%2FzqaWXVBYVVH3xdiEPtjrsv0w0%2F7WwwY6pgH95MyntqXT40QxyePo7m9mXGGUlr9xshQX3zd4zgvKPxUsQNH9ZXxawI1DKkSQmd3jaJS%2FBOAkVzKUzp3j6cewxN0oeO7u%2B9krOxN4zCPc7O8XvjNickQnZAVfAsw7KFj0X9J6mcmSrN9xwIe7ZIEJwN8GCTju%2FLuBKI7CR4V3jHAzPGacAicb37DiX51jFIY4QJ52zRmc2q0WGG1lONOg2WJaLVgC&X-Amz-Signature=227933afc66e7783674b6b11f10831fc557ba7b826947a13692d167fec288e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNXFHVUN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIGfrRw725c%2FGLkBCc4vi3QCy9Dy%2BOHO3HcaPX5UcYHktAiBZdNprPnvUgMQAjzv73Oe0R%2BYrSiarEl0e60o7jNHmlCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMwBFNJXHvL3jabNEeKtwDLhS2V16rwRkFJDPngKUtJExinEjvkld8Y3zi0LjHE6SLQGJAn16anbuSDx%2BNTk1M0TnHL8XcoHOi8FJZVtAIR5G8kjJLvY5Fy4JoaKgI3mhUMus%2BDNA4YrOivaetOjgVM4PZJiNOwewvPtApUoLGUmF6i8knp9vWJQGZ4SwuX9ci%2Brn%2F%2BuaIZCYQf1a48Ma%2BFGAwIsCbNT7UvCGU6sjRNhRYNnB2Fg4VzKxMDpyyq2MgBfVIMwMS%2FUazOIvWKo1eXXeKTGCbDAm%2F9VHV3B7779tviO11H6g3xR5JW1Z5Wd7eIa7Y%2BS3e40WwtMmcxT%2BkSXMR8DxnWtcca56oit9ajDYt7M3WeYQuEDmWMlZ%2BK517Y2K7uQbqtpl7TY4XnKo9CcEm631bwL6n%2Fw2%2F1IGCzKv1xZY2fNBm7P3GpA7TMuGL9eM7zg0%2F9q%2Fg%2FbEgPDomMMSkjFi%2B%2Ba2lnbecYDRx%2BMWYj2hFQY2g%2BOD7vsSrGmyaLe5TMzIJDtt%2FRjGXCJ5BFPKvd71DOgrqVca8l0SA8REQoPw5AUnmYV5KZjAgamZZFUdKTMnAxLIpULQzToIUrm%2F4IW3SGcQ3H4nZrLqTJkxVTo4omLUJm%2FzbLUjOsd98yLNoGpynwKmp1yMw%2B%2F3WwwY6pgHNtg%2BV1EW589%2BnOMtylVnvXW0%2B4j%2FkRy8vDqyPjRv06b1j%2FEdoivMwy9Vv6LG8xUwY5EXoRcmh1XLzMfS%2FeLeNWBBb99Nvwy%2Bd2inFI71PKIfrPvjLb4RYC2IGLY3KLoVn%2BsTA6fVHLn%2FqZPs5iMhqSvI3EnqYzEwf7Mivf1Cqo8%2BJQ5%2B4N8zKu0nyeeck2bvN0bE6ViuMjj0nfTqsLAqlshG%2BA84c&X-Amz-Signature=919f240ef442c6c63df4c5e579174cf004c4fd0880de553421acdcd6e548ff8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4P2REP5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCxx22XLWd4du8IwqB2UQsrDgKhxERD7cka4G6JJ2cqVAIgMqckcuvh0YypHagaQrFlsWUXxlF0J%2BbkyZLwfFGzstIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPAuzy%2FAZBxaeMQI4ircA39Y7W%2Bjx3zzSJtWaXYHofpdaM1itq18h%2BjXI3adjutWOUP1pYdokGKnaoRhmNRy4%2F%2FGdOgdSklg41G6vkqqFNDcbiuAac2Am8mCZekI00%2Bk6VbNd2QuA8PYPtKxNSWnoxkX%2F9Nw4GfD%2Favra3cgzUMvfJBOUZeHeL6DYvcLZUmAxQ98QhowgaQ%2Fz6YzaATcwxHMfnVBIsKyH5N1nPZv9YscmWgqk%2BLu%2BphKIDhDOEPoaAufjm6J%2Bvx8Vp%2F5H9rlGfbo9CPW3GdHQRiqykkZmpSVIioJ6xVpjzIey0l4KrXpx6yQXWMJ3M%2Bd%2Bw%2Bo3Lf7jUDgrbxzJPstHD33Zss48QfmVmqg%2FCeHMUU0qeIA0R4HuEi3x17S8k9nWgnX%2B86PsCp%2FlkQPuhMdjbz41ifqM2UHypyUlz80a51gHVf3o8g%2BhXy9ce9CPgHu4Yr5cS%2Bs%2F9%2FMMhT3tmPu2SQIjWEch3nu8FrwOaY7b%2FalOxHYbCt4yXJ8kI16upNyNNXVg%2FAS%2BSNBiN1NoT5byWsZ61gbD8%2B5rZ%2BNj2WsB89DArmGPHYTLTEOk9UT1%2FRF5%2F9G8ijA7Iiol2OzXA5G9gkgK5deZBbIWduzNy13V3DwJUaY19Zew5uE%2B6PtR5gfOjvtMIL%2B1sMGOqUB3jlNYru%2BgSHATxp0%2BnItDRLlQUrpnWhrbnHSddsaBJ5dzsQOz9WB4GSHVSM46on3nW4my3%2FioE5e%2FGpnl6DDFQLEziOUdqkNJVh9q%2F%2Fq36WS1rKRqzyvBIr4vF48fPThFV4%2BZm1saB0Vhffl2hKzU4%2B9IwLKNrNzo7LRbochhTS3oooekhc41l3bl0qYsp0p1nIqf5ENh0OJ4F1qSmPEaUp18ZEc&X-Amz-Signature=c6f941fc6c490dc46ffb32a37989b93cf6e785e5045cb5640fe56dde16f5e6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJ4UPSA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFCiT1T8QAMVJNQUoHZJbFW00lz5cW4uKoMuwKqjQj6VAiALPF0b%2FWjYBR2OlUt1WmsupxZnLobreAYjDzMDZ3oIxyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMhrCJCLZBy7Jaim20KtwDuHR97VKleCELq2hoNkeetjcB7CAQ0iq%2F9NBVRC%2FHlPHwXW3Lpkey9rpTijOLANmL6h5AW1YifUWUydC7Kom91RxMqTMUi0%2F0bYD%2BnyEhB3vWx0T4zDTK4iMMQIDEkJv1zl%2FexfhjjBPbGvamurtKbyg7aXthxLkiFkG2t0UeWim2VTHr%2BC4M3GlvkgPHYrnzgMiBppTwvhwURkFBKHGtKciyXxpPbZlkl%2BGFLzA5fDoG7YevWG3g%2BPn19LCdsLUbOWPEnEGK5sbPonhmAae08zJFjzizdl%2BJ2VqjFKF0WG0%2FOgZhqgFAjbtOdzAbOTxdszE7q3sLn8JN4eHzsoXjmgTxKQEC37wHe%2BT1c52fSWTgYrflihzeTHSXV3em9FFWK5xXOz8yla05oobHJwdXU9ltHQdHEkxMbT43u3fpm5dHN0oYSZ1GKJ1QJHyPWo583Y%2Fa1xkuNfrx4TXPF8IxmLAzKg9vtzqcLRWB0TWvRa70wI%2FkUhSLRUxeImVvY8TUE5eY0E%2Bi%2FNKvnJVFuGg0Nb0DaIqpEctL9UDUxZQ52t%2FbFuKudpZv6bWDq20YN1h%2B7pcPimoi0efjFDG4HyRR7FiyByge2Hc%2FR%2BA%2FzqaWXVBYVVH3xdiEPtjrsv0w0%2F7WwwY6pgH95MyntqXT40QxyePo7m9mXGGUlr9xshQX3zd4zgvKPxUsQNH9ZXxawI1DKkSQmd3jaJS%2FBOAkVzKUzp3j6cewxN0oeO7u%2B9krOxN4zCPc7O8XvjNickQnZAVfAsw7KFj0X9J6mcmSrN9xwIe7ZIEJwN8GCTju%2FLuBKI7CR4V3jHAzPGacAicb37DiX51jFIY4QJ52zRmc2q0WGG1lONOg2WJaLVgC&X-Amz-Signature=0ea48e86896cc7a2ad926d04e181fa73a0e80785ae4d3db894c3c988ce77e5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
