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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKBDENXG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGBNIQJtapP%2B%2FIn6mUBN6rUHnPWkOQZjU5CMzXhC2%2F3UAiB7Ss6LzwM9PtWD8AjE3GkRn%2FP4xWXo2MMypnTXWJ7cdCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMztAQ9L7looy432PzKtwDnpdobgibsCDMwXFPqZ3c0NMXP3FVAMV3NqBfKx3OZPWEqIUAa5HFPReaBqeRX70RolXB1PCM6zpbUnBfk7Chsnrj37OLHi%2BSOvc%2FatLfhFyvk%2F95ktZXv4ENamtIR5LyCB29cIAj4XlbP5TS%2FKx2GIeyWiSeq8MeUpT1LF9Mzgn%2BhtLCtOUYquy02p1Z%2BTMXKSQIsKDhFEUQ8UIpG717Dv2V%2F%2B9s%2BRP6WJcGBh4gpXqqUbwS6BbodUTQ7WwFs1pBLwC5MEE7AdXXVt9LW0mTvpIxFPTX2oEfulikk3BNUwjtr%2FaW5xKTE%2BtjPxTGIybX0AIire5Vxvefafn9xj6ZJrLeCkOH1010AJf2ujn0ci9qhEgV4OxyB3%2Fal8%2B0Q2zhGPAumXpDsAjLFo7KOylrICiprTquuyO8gZHnHYZXAyHvIyk0mBvX%2BCEHN%2BzoxTwX9P%2FynmeZ8K8LmUWscRukWVlXwZUaQulZKyyGKB2wO%2FByBXMptFV3v5HFwOGd93LYJkQP%2Fa77jIeVX6xozwmRbWP6I19sp8wTAf2jiXBzcToU9TEq%2FRU8dwpzQhwffuYn7ze6QWUH5zqRSP46hWDXrW0x%2B1csXcLtzelnTvq%2FFrCvByHIjHiQD%2BkbHb8wkeKuwwY6pgHREtH4Q%2BlFZ12dtRn69ll5Oe3SQ%2B6YrI1Et3t3LMaVxsFbHkjqtaexaA6NUNUkagOuFFL5%2FoYbEVeNf74C%2F5c7HTxZav%2FDHh%2FQvY%2FRwRjiJwfv5lrgHFxjx9tOYsXdKherN0JbIUZ3z8WM6z8%2BowNIXJTjsS%2BML8AVckueHtdy0iNYxDWZYhUi4OsNCkUTY3jXawKPqXt2yVzRd5wVp4Pl9M4qOUKX&X-Amz-Signature=9e1464e6f4f6c6a6ef23027abb87f83382c23e58459fe4c6986b273fd36cc442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKBDENXG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGBNIQJtapP%2B%2FIn6mUBN6rUHnPWkOQZjU5CMzXhC2%2F3UAiB7Ss6LzwM9PtWD8AjE3GkRn%2FP4xWXo2MMypnTXWJ7cdCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMztAQ9L7looy432PzKtwDnpdobgibsCDMwXFPqZ3c0NMXP3FVAMV3NqBfKx3OZPWEqIUAa5HFPReaBqeRX70RolXB1PCM6zpbUnBfk7Chsnrj37OLHi%2BSOvc%2FatLfhFyvk%2F95ktZXv4ENamtIR5LyCB29cIAj4XlbP5TS%2FKx2GIeyWiSeq8MeUpT1LF9Mzgn%2BhtLCtOUYquy02p1Z%2BTMXKSQIsKDhFEUQ8UIpG717Dv2V%2F%2B9s%2BRP6WJcGBh4gpXqqUbwS6BbodUTQ7WwFs1pBLwC5MEE7AdXXVt9LW0mTvpIxFPTX2oEfulikk3BNUwjtr%2FaW5xKTE%2BtjPxTGIybX0AIire5Vxvefafn9xj6ZJrLeCkOH1010AJf2ujn0ci9qhEgV4OxyB3%2Fal8%2B0Q2zhGPAumXpDsAjLFo7KOylrICiprTquuyO8gZHnHYZXAyHvIyk0mBvX%2BCEHN%2BzoxTwX9P%2FynmeZ8K8LmUWscRukWVlXwZUaQulZKyyGKB2wO%2FByBXMptFV3v5HFwOGd93LYJkQP%2Fa77jIeVX6xozwmRbWP6I19sp8wTAf2jiXBzcToU9TEq%2FRU8dwpzQhwffuYn7ze6QWUH5zqRSP46hWDXrW0x%2B1csXcLtzelnTvq%2FFrCvByHIjHiQD%2BkbHb8wkeKuwwY6pgHREtH4Q%2BlFZ12dtRn69ll5Oe3SQ%2B6YrI1Et3t3LMaVxsFbHkjqtaexaA6NUNUkagOuFFL5%2FoYbEVeNf74C%2F5c7HTxZav%2FDHh%2FQvY%2FRwRjiJwfv5lrgHFxjx9tOYsXdKherN0JbIUZ3z8WM6z8%2BowNIXJTjsS%2BML8AVckueHtdy0iNYxDWZYhUi4OsNCkUTY3jXawKPqXt2yVzRd5wVp4Pl9M4qOUKX&X-Amz-Signature=026b3eb555d155e8d05414a970de714da84b80c4d275d974da948077d1f2e6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKBDENXG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGBNIQJtapP%2B%2FIn6mUBN6rUHnPWkOQZjU5CMzXhC2%2F3UAiB7Ss6LzwM9PtWD8AjE3GkRn%2FP4xWXo2MMypnTXWJ7cdCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMztAQ9L7looy432PzKtwDnpdobgibsCDMwXFPqZ3c0NMXP3FVAMV3NqBfKx3OZPWEqIUAa5HFPReaBqeRX70RolXB1PCM6zpbUnBfk7Chsnrj37OLHi%2BSOvc%2FatLfhFyvk%2F95ktZXv4ENamtIR5LyCB29cIAj4XlbP5TS%2FKx2GIeyWiSeq8MeUpT1LF9Mzgn%2BhtLCtOUYquy02p1Z%2BTMXKSQIsKDhFEUQ8UIpG717Dv2V%2F%2B9s%2BRP6WJcGBh4gpXqqUbwS6BbodUTQ7WwFs1pBLwC5MEE7AdXXVt9LW0mTvpIxFPTX2oEfulikk3BNUwjtr%2FaW5xKTE%2BtjPxTGIybX0AIire5Vxvefafn9xj6ZJrLeCkOH1010AJf2ujn0ci9qhEgV4OxyB3%2Fal8%2B0Q2zhGPAumXpDsAjLFo7KOylrICiprTquuyO8gZHnHYZXAyHvIyk0mBvX%2BCEHN%2BzoxTwX9P%2FynmeZ8K8LmUWscRukWVlXwZUaQulZKyyGKB2wO%2FByBXMptFV3v5HFwOGd93LYJkQP%2Fa77jIeVX6xozwmRbWP6I19sp8wTAf2jiXBzcToU9TEq%2FRU8dwpzQhwffuYn7ze6QWUH5zqRSP46hWDXrW0x%2B1csXcLtzelnTvq%2FFrCvByHIjHiQD%2BkbHb8wkeKuwwY6pgHREtH4Q%2BlFZ12dtRn69ll5Oe3SQ%2B6YrI1Et3t3LMaVxsFbHkjqtaexaA6NUNUkagOuFFL5%2FoYbEVeNf74C%2F5c7HTxZav%2FDHh%2FQvY%2FRwRjiJwfv5lrgHFxjx9tOYsXdKherN0JbIUZ3z8WM6z8%2BowNIXJTjsS%2BML8AVckueHtdy0iNYxDWZYhUi4OsNCkUTY3jXawKPqXt2yVzRd5wVp4Pl9M4qOUKX&X-Amz-Signature=ae9917045c902aa445365c26e682674e12fdcfb086095e24fdd24382f50b632e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652HSMVSP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIAFB830f%2B7WB9iUvW9yccxS5OSbf%2BC%2F0en6YfQL9XlGSAiAKbg309ZE0WvAjxUfXpimjUGTb9PSmQS5x7cQ6cKYIuSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVut3LiaAP90hDbChKtwDWWnZmZJFmSFt6yxlsMJoNO%2B290BiHKr8Ohy%2Fj1y0sSaXwSt2HOxuLZt6aOvjpB2%2Fd%2Bl27WMTjpIlUoqDrwmWjsYjkdjfhgvTmo0WwXEigkSrYIQrach%2BklVa7XfT1NWbChE5wAhvvA3pab7Tqu5%2BGCl96BvzuGAHQBPe3irtMau8j9%2BrmS2V36zo9qEOJ9Nahr%2BRtDlB%2BB6VYkz3KRP06Rv7ZQr%2F1y13kkeTnu5I5%2FtWTheW%2B6COksqhBcX9xqMtHyLGFVBCM67c8RFfGGRHEVxzUlMt4OQ2ziGB9J9DUJNfRVq5YVg5VbJxLSM7qY%2BJleQ4h38lsxICFlmruzkvwVBK6hvqzaR6cIwSUTVbukk67YSxc6OyFX2cVSG57xaQFM0UK7vWBga%2B%2FStnyM6UH43vrGHuWbRtDAgnGD%2B%2BM4dUXZSKulICc6cnjNrWiwFk9egFNrfskLNljIL7ha19hMvKD7YQQkHqX1bwaMMhZ37sR2vjK6Qf9vCnI0R7LK%2B%2F5zNxH8ZvDfAIIKRGx8nlAlx8ADa8Fa49WHtIyeIU12D5%2FG7cEVx0V9hVxGWlu%2B1isrgkTInuNK1veVMDN5rSfW8HrlS7dp3Iv2dKcmQIsCq7vFBNhFb7BwD7slkw1OGuwwY6pgGxfnrlsA3YigVOPQtQ38q%2FHiXVAgOF1Vcjr0i4qQQtbAeUbhC9A2iryjcjoBEARX14nZwsmhprXaMOrQuNcMruNns49S6XyRiQj%2B0jbUuZcxS7qNQFeLTS3javggqvYw32BPQMsXmIFBSggz3RRQyYSqNUxnMFO%2BmrqikxIMOu5yBx%2FNWBXhHzTAEKEYAbXd6kv6X2VaWdz2FICKYf7yLWG5SWccbm&X-Amz-Signature=72f1089e3a4c715a36529582d6f6ea9b9987f28a2f5d1638056d774adb678528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRBD4VMN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFGxZBPVq4BYoyPIzOMaPx0z%2FVz27eQHidHvqJnQyZyOAiB0ZRAI6R4NjzNpX%2BwdCwkZDyfdlvISUqnwyUZhwGrmdSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM4zTK9fFULg%2BRDK2uKtwDX2OlIUed8r8hBCywo6aINWI2AG0cubdQUa5CBDKGqyiSDT1JApSwDQwmE%2Bpym4bYie8O2TrUM8R6Fe1U7PRBdNIvAKzKzY3yuM2zpu6mxjcVTAp7UQ5zPiTaOT0efbH4bEIwOdYt8i7MPytIwlW80%2Fw3UZRh%2FYBTqW6WqeQ80IKFcJIgUAfzYpZQbuZ07aA%2FKa40brcvhv%2BBSHGBSw6qTQQB5WL7Bb5lVTJydBQJyN6UG5nUbSc7WoQQZ9moD9tbJPLKC25fuBC6d5Zdi0rhqy9UpviI9ESXsOyPIH7l51l4o6XRER96mqJfdPl4oluKSnE%2BTY1a9jdKGQOBKdtWSpXGG9pWUDZx3ghbstD0AAp6eN8yxPBVkc6xE8JOq%2F2Qcsu%2FIAOnuzShQu4LTqI9VOQTZ98VGG0QXWYt39finRQIbkWd34D%2FzZbpAqyYaYGyS7qlyeL5FrrBR0sCbDY9C%2BDKry%2FMHyszbOEt32FmbJ%2BoJZ01xNv%2FYPzzRlkGIDl3XH6EdD%2Bsnhk64ed%2FORBojeA3KkG2JsrNDolrNDe3gBjEwDPSTNk5f5xgYU4pEFcaRMZItH89g%2FaDJcxa3VoDSzIK3VOanJrUVBnTbG%2B12cKSAvOrcLCxVpux71cwl%2BKuwwY6pgE2uKuQa4uTU1wRmKlipakSHamNOQE9TVuXL8mW%2BHT4IDuOQYsHWK5OD3syBn7%2BQmuSnMIYDfv30aHHCriAzgf58Z9sJOHBpSRZXYEhhh0bqHWAfyFHHTaDgNfX6P0IfKi2jPGK%2BSrR5CfLu71g0wvyLEH9VVn4RiDPKBwB9CfdBAQ%2F4XI%2BUt%2F2%2FxvNMWom1PQaSAMPz82yZeaiSvaBms7bSNDnmdCW&X-Amz-Signature=a327f90a1489b9798442b5a4788858f55098a87b97186a038d3fef9d0a51055d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKBDENXG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGBNIQJtapP%2B%2FIn6mUBN6rUHnPWkOQZjU5CMzXhC2%2F3UAiB7Ss6LzwM9PtWD8AjE3GkRn%2FP4xWXo2MMypnTXWJ7cdCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMztAQ9L7looy432PzKtwDnpdobgibsCDMwXFPqZ3c0NMXP3FVAMV3NqBfKx3OZPWEqIUAa5HFPReaBqeRX70RolXB1PCM6zpbUnBfk7Chsnrj37OLHi%2BSOvc%2FatLfhFyvk%2F95ktZXv4ENamtIR5LyCB29cIAj4XlbP5TS%2FKx2GIeyWiSeq8MeUpT1LF9Mzgn%2BhtLCtOUYquy02p1Z%2BTMXKSQIsKDhFEUQ8UIpG717Dv2V%2F%2B9s%2BRP6WJcGBh4gpXqqUbwS6BbodUTQ7WwFs1pBLwC5MEE7AdXXVt9LW0mTvpIxFPTX2oEfulikk3BNUwjtr%2FaW5xKTE%2BtjPxTGIybX0AIire5Vxvefafn9xj6ZJrLeCkOH1010AJf2ujn0ci9qhEgV4OxyB3%2Fal8%2B0Q2zhGPAumXpDsAjLFo7KOylrICiprTquuyO8gZHnHYZXAyHvIyk0mBvX%2BCEHN%2BzoxTwX9P%2FynmeZ8K8LmUWscRukWVlXwZUaQulZKyyGKB2wO%2FByBXMptFV3v5HFwOGd93LYJkQP%2Fa77jIeVX6xozwmRbWP6I19sp8wTAf2jiXBzcToU9TEq%2FRU8dwpzQhwffuYn7ze6QWUH5zqRSP46hWDXrW0x%2B1csXcLtzelnTvq%2FFrCvByHIjHiQD%2BkbHb8wkeKuwwY6pgHREtH4Q%2BlFZ12dtRn69ll5Oe3SQ%2B6YrI1Et3t3LMaVxsFbHkjqtaexaA6NUNUkagOuFFL5%2FoYbEVeNf74C%2F5c7HTxZav%2FDHh%2FQvY%2FRwRjiJwfv5lrgHFxjx9tOYsXdKherN0JbIUZ3z8WM6z8%2BowNIXJTjsS%2BML8AVckueHtdy0iNYxDWZYhUi4OsNCkUTY3jXawKPqXt2yVzRd5wVp4Pl9M4qOUKX&X-Amz-Signature=16adeac844cfb390c5ed7e8e82a5eef3787833500b29060bc1cebd5763e81cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
