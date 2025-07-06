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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPGV2GA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAegNagZ6ssbhXSeaY%2FNOszKTlts5VezxACDUUbnSX4dAiBqKkgSsQBujSTeGQCMDNytaW7fOj%2B%2B8lsoSWP%2BacCChCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMP9K2ueTMCVgdDzHyKtwD1tAmI3k2iEfd7I6LX8bt8VvsVLjZWDk3x%2Fwr66MYUj0T8syO4TAVfGMDj8hUZQMQvmVPFH6HhFvVS7eBsjalmw6ccOu6IxsYnoTUKrwg8axwhj8dQro3rAqXwTLikxtgwC6dxZdKbtXhCJvaeq38%2FlwC7QNyAhxEEsXii6QeLxfdr6Ic%2Bl1ybkLOLNfYo10%2FmoU3sxV8wQIrbBaYpxDDzZuNouX%2FgTpjz5o03k6hYyEeLkh2eXTS9GentOU1MUz2r4CBmh1493r2tTB1hc%2FEVSBegmYqn09NJIDqmilXNtebL9MOl4I%2FPyxGADwvxY%2BZgCdGdsiWL2tiY5aftngjIg4sX%2FSDT3%2BXZnwkHVidBfggnvNdfjCQvt3pz18Klopz2RIntqAlEbmT5md47Qfyuh0oM9yRZDqkR0fDqhn2c8OIUC6%2FrIMTEtPSEtFDsw5RoOor5euj9wP32hE115eQzExiORe6SFDXNntHz%2FP3KgO9qxEH%2BmWYJhWa5ZGzAQNbU1WpiNtL5tM0qPB7gGztOkLJYlbY3IzorWJeeRiYt7kOrBLKxja3llAb6TXcHiTNEwo5YhjdGME8lC9Xt4EBgVdCcrhTZOB7PNjabo2LjaGlmWFnNJGoXDVYx2Mw2MuowwY6pgFeUQHVx7w6abG0FN%2FyoSK0flh7bYjaRBeZt1VgIL%2BExqAnvaCeWoit9Pt66SjQjjKXx%2F0mIbTelcLZCY3or23P5i00kAEZVMyuSomqchLrLiVd3rp9W4lFJhbcf4RKOfeAInRmGYs4KMqyl4p7Hr%2FWLUvhT6uI3FojK7FiByVwbhR9VO%2FGLqql6heD2isoMpORPamHk8vxfzUDVEifotMUTCAThEy9&X-Amz-Signature=ccfa868d649bdd1342852bf09deb1845cf19cf934f185d34bfa96d91f9cd5509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPGV2GA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAegNagZ6ssbhXSeaY%2FNOszKTlts5VezxACDUUbnSX4dAiBqKkgSsQBujSTeGQCMDNytaW7fOj%2B%2B8lsoSWP%2BacCChCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMP9K2ueTMCVgdDzHyKtwD1tAmI3k2iEfd7I6LX8bt8VvsVLjZWDk3x%2Fwr66MYUj0T8syO4TAVfGMDj8hUZQMQvmVPFH6HhFvVS7eBsjalmw6ccOu6IxsYnoTUKrwg8axwhj8dQro3rAqXwTLikxtgwC6dxZdKbtXhCJvaeq38%2FlwC7QNyAhxEEsXii6QeLxfdr6Ic%2Bl1ybkLOLNfYo10%2FmoU3sxV8wQIrbBaYpxDDzZuNouX%2FgTpjz5o03k6hYyEeLkh2eXTS9GentOU1MUz2r4CBmh1493r2tTB1hc%2FEVSBegmYqn09NJIDqmilXNtebL9MOl4I%2FPyxGADwvxY%2BZgCdGdsiWL2tiY5aftngjIg4sX%2FSDT3%2BXZnwkHVidBfggnvNdfjCQvt3pz18Klopz2RIntqAlEbmT5md47Qfyuh0oM9yRZDqkR0fDqhn2c8OIUC6%2FrIMTEtPSEtFDsw5RoOor5euj9wP32hE115eQzExiORe6SFDXNntHz%2FP3KgO9qxEH%2BmWYJhWa5ZGzAQNbU1WpiNtL5tM0qPB7gGztOkLJYlbY3IzorWJeeRiYt7kOrBLKxja3llAb6TXcHiTNEwo5YhjdGME8lC9Xt4EBgVdCcrhTZOB7PNjabo2LjaGlmWFnNJGoXDVYx2Mw2MuowwY6pgFeUQHVx7w6abG0FN%2FyoSK0flh7bYjaRBeZt1VgIL%2BExqAnvaCeWoit9Pt66SjQjjKXx%2F0mIbTelcLZCY3or23P5i00kAEZVMyuSomqchLrLiVd3rp9W4lFJhbcf4RKOfeAInRmGYs4KMqyl4p7Hr%2FWLUvhT6uI3FojK7FiByVwbhR9VO%2FGLqql6heD2isoMpORPamHk8vxfzUDVEifotMUTCAThEy9&X-Amz-Signature=8094aa47ce775dfcd1588194d8be48b2c8e4c0303fab3d40cac3ade506fa3fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPGV2GA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAegNagZ6ssbhXSeaY%2FNOszKTlts5VezxACDUUbnSX4dAiBqKkgSsQBujSTeGQCMDNytaW7fOj%2B%2B8lsoSWP%2BacCChCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMP9K2ueTMCVgdDzHyKtwD1tAmI3k2iEfd7I6LX8bt8VvsVLjZWDk3x%2Fwr66MYUj0T8syO4TAVfGMDj8hUZQMQvmVPFH6HhFvVS7eBsjalmw6ccOu6IxsYnoTUKrwg8axwhj8dQro3rAqXwTLikxtgwC6dxZdKbtXhCJvaeq38%2FlwC7QNyAhxEEsXii6QeLxfdr6Ic%2Bl1ybkLOLNfYo10%2FmoU3sxV8wQIrbBaYpxDDzZuNouX%2FgTpjz5o03k6hYyEeLkh2eXTS9GentOU1MUz2r4CBmh1493r2tTB1hc%2FEVSBegmYqn09NJIDqmilXNtebL9MOl4I%2FPyxGADwvxY%2BZgCdGdsiWL2tiY5aftngjIg4sX%2FSDT3%2BXZnwkHVidBfggnvNdfjCQvt3pz18Klopz2RIntqAlEbmT5md47Qfyuh0oM9yRZDqkR0fDqhn2c8OIUC6%2FrIMTEtPSEtFDsw5RoOor5euj9wP32hE115eQzExiORe6SFDXNntHz%2FP3KgO9qxEH%2BmWYJhWa5ZGzAQNbU1WpiNtL5tM0qPB7gGztOkLJYlbY3IzorWJeeRiYt7kOrBLKxja3llAb6TXcHiTNEwo5YhjdGME8lC9Xt4EBgVdCcrhTZOB7PNjabo2LjaGlmWFnNJGoXDVYx2Mw2MuowwY6pgFeUQHVx7w6abG0FN%2FyoSK0flh7bYjaRBeZt1VgIL%2BExqAnvaCeWoit9Pt66SjQjjKXx%2F0mIbTelcLZCY3or23P5i00kAEZVMyuSomqchLrLiVd3rp9W4lFJhbcf4RKOfeAInRmGYs4KMqyl4p7Hr%2FWLUvhT6uI3FojK7FiByVwbhR9VO%2FGLqql6heD2isoMpORPamHk8vxfzUDVEifotMUTCAThEy9&X-Amz-Signature=8f908ebc5bc963d8969bb47b92b776ec5b115c293b13e3de3df7029633c989d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIN5YMC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDgO836rQuCI9noZHqbBvBL4rWTcdFPNDNpu9V9bp5H7AiBNXyKxj2oDincJbju1joEgDaasPzZYDOy8D0b%2FZ%2BeDhCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM7tb9iVZp%2Fb61cc1SKtwDcsrxtAQ9d3Y011rYADvudwhKeWib5RbGpk3pl4YEZp4ePTAKQyG2V68AM28ESKFbRy%2FPW19fxAPrT98LQLbu5ACoDNg6oLfFXi2V8A85CUgF3%2FvV%2B1q1FrpgduyezglbXu6%2BmbKfmrhH3aPk47TzU8Yj8xIeiCcE96Nq1oNhvlcXXRx5io2efI3%2FMZYiwadttgFQRKAuVxWdhBEsimUcB8ehR8%2Bj4bxWuiKqlxE3pV9RTtDU4oBs7cm%2FdM33yggGUavpqGeMpElmrhPoC5x1q3zHqBaVAQmDVVNAhb4%2FMpCqb0TKFK83eVTLZQmXuxFzfVKzVhA4sIDVtcGSDAJcDYVO16sYXBoi%2FwERPB7EiQckIkU3uSM4TO7AEY4x2WGgAKxUffs1yUKQxZcHdk5kNSdGhT7FnL5exE4vzphYvWWv04TBA3jRQVlZZ%2BlIlXGNQP3yIG1PD33z79bTfwGVXXzi5GTj%2BnlMdQFmyOwU%2FyPWh%2BOr80DqOgqzLTsja9NOBkUb6NF5YmhY7LxExOM6ehvMu2hyOSRRUOJbpSFbgDJ2i1BL0eJUM4nnzNHuug%2Bu8K7k2BacapSwGcgMrVH1x0eAgTwYUBzkUhPngyU80MQlVeR5%2BDlXi7iN%2FCswkbCowwY6pgEG%2B94p89rq%2Fpjflpz0lY8nZFZxhMtKfvEPffE5qatEJQ57sHKqaxj2kqjeR%2B%2FO8HUT3evVhAdVcgQY1moWLptR%2F5bLFMSz2gB0zDDEmAJQS%2FAr0JOu0g0OzVvJ%2FJscENLEhWddKYVMNZir%2BC3b7aKxtBCzpFt9Xn31lKsCVq3ogVXHytVaUyUIzpvqbYbVbLpLxM%2BfTiuw73WFgD3%2FWUfJBDoZPm41&X-Amz-Signature=e32b7236f73cd1bd4c564061e0c92115ae893a6b89ee8ea127dbbd78d62ec097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UR63LI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDt%2Bv1zus8o2DWQtu%2FDHQONz6vWstS7DRpPXw4r0smxbAiBwpnObyiP7ZjoJ42p0J8PZ%2BZoxsCBMLs2zcaeq3DKbmir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLjeVY2RwMk7wAsPkKtwDX5JhzmTLnBeLsnpbMEEDOe%2FNvHZYCS5cCwOYVlZUavuSxwwLk3LDWtg16HvJNe3PS4QyF%2FA5i8G2uuVGd8OsvjWUEmEu24BM%2F9ZXSO8N3xMuR6ij84yNrN8PVmCQW3MuZkLz%2BBLi41vhC0JXQn3nMlH4Yhx9QNDVzb7aTLqEFQShEqjfvFWwGMh4NqupvtL%2BsqQ%2BcgyTrj9CFm4ICQGoQs9zqdshfnXCDDU5V46nmZ6CCwUyftxx3Axfv4j5tCifL%2BbsmOluOiRuOCuZq6KIu2SZqg8jqJWqzETPUL7xJNzKk5dBAR7BsN213Wu51WtANSivyr1T9tYn53HipvjVDt5Av0iRC%2Bys0Ce4y1Sj1GzCHfl8d5Zokky4NTFxP68n%2FNasbBfPz0qnKgTKCdOlo0yo0ZN9YMZb6XIHCjmjlBkCu%2FEiQpvXgTH3Wd40hql8HDKYdOgN0092rxqCbRbIzIiacF5KGIOHASNfKqV0sjVYpQaUU66PtnUF5mRKzaQTd9bybPQyPJxa1j%2FzviJ%2BxsH7ENiKmigwUaguofCV9h66vg5upnI%2FfKDLwLYWqg6KwQPSaVhGtNyeAI803oFh73ttLYtBrvhwh8BpuHQS2r2mDT39j3ICPjxfQ%2Bgwt7WowwY6pgHlfLHGvCLUPwBDysT5mcXiJ1iVL5Qgq4wZ%2Bqu8XpclKNiM97YoPGAELWy611%2FjUE1AXfjfV7t0TOgqildp3xxjVbT1F%2FHa0tHdirWbVbAnwglGpboqgqDLXY3am187PK1hZFeJloWH1yKKAccs6yz31QQi9BKYI1ee6R8PQU0pmoiU5tSlMfxLwOwrxDKObsXKImbL6i%2F30%2FHBblQ0FHyvVOXvOC3L&X-Amz-Signature=e3210209ac363819b81e0a58854c1e2db8dec0db15cf46a017374c01b9ea7f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPGV2GA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAegNagZ6ssbhXSeaY%2FNOszKTlts5VezxACDUUbnSX4dAiBqKkgSsQBujSTeGQCMDNytaW7fOj%2B%2B8lsoSWP%2BacCChCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMP9K2ueTMCVgdDzHyKtwD1tAmI3k2iEfd7I6LX8bt8VvsVLjZWDk3x%2Fwr66MYUj0T8syO4TAVfGMDj8hUZQMQvmVPFH6HhFvVS7eBsjalmw6ccOu6IxsYnoTUKrwg8axwhj8dQro3rAqXwTLikxtgwC6dxZdKbtXhCJvaeq38%2FlwC7QNyAhxEEsXii6QeLxfdr6Ic%2Bl1ybkLOLNfYo10%2FmoU3sxV8wQIrbBaYpxDDzZuNouX%2FgTpjz5o03k6hYyEeLkh2eXTS9GentOU1MUz2r4CBmh1493r2tTB1hc%2FEVSBegmYqn09NJIDqmilXNtebL9MOl4I%2FPyxGADwvxY%2BZgCdGdsiWL2tiY5aftngjIg4sX%2FSDT3%2BXZnwkHVidBfggnvNdfjCQvt3pz18Klopz2RIntqAlEbmT5md47Qfyuh0oM9yRZDqkR0fDqhn2c8OIUC6%2FrIMTEtPSEtFDsw5RoOor5euj9wP32hE115eQzExiORe6SFDXNntHz%2FP3KgO9qxEH%2BmWYJhWa5ZGzAQNbU1WpiNtL5tM0qPB7gGztOkLJYlbY3IzorWJeeRiYt7kOrBLKxja3llAb6TXcHiTNEwo5YhjdGME8lC9Xt4EBgVdCcrhTZOB7PNjabo2LjaGlmWFnNJGoXDVYx2Mw2MuowwY6pgFeUQHVx7w6abG0FN%2FyoSK0flh7bYjaRBeZt1VgIL%2BExqAnvaCeWoit9Pt66SjQjjKXx%2F0mIbTelcLZCY3or23P5i00kAEZVMyuSomqchLrLiVd3rp9W4lFJhbcf4RKOfeAInRmGYs4KMqyl4p7Hr%2FWLUvhT6uI3FojK7FiByVwbhR9VO%2FGLqql6heD2isoMpORPamHk8vxfzUDVEifotMUTCAThEy9&X-Amz-Signature=21dd3f693d5b933aab92623504f4b4f2cfb2d0c61ef4615a92d60caba667a3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
