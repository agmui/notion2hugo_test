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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4JT6Z3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA1pk%2F%2BDnmrYCjhtIkPYkK6bV0wfkRoMSxsU0ZWyTG0CAiEAyBVB8V4hrMdqTcsPkRQtZgxrqtsTHmHwVSuOGBWGwz0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCuTlos1cHWX5KB5ByrcAzJSf%2BzCiU%2BMuH3vg9DazHwOun9ewfXbTQBsx2gsKhpZITwN1PobFwKdo7C3pdAYCEeeT%2FUtAqH%2BC1TT1p0RohMQ851a0IV%2FbDJFqIuGnfbMvlxmhAi1wSgIooXpOB7AFJY%2BBKI3bFVFRUBW%2BVeQkwVFZJVUaA%2BovkbSB8XO1HrDBz61%2BcrxBnvX31FotzSmlmQyjJPsZUeipOazj8xboaeEPGA%2FzCQvzG4tPiBhHibvpQ%2Br5PZywHrf%2F4Gc9p2VBTuaQw7ZgHMcvjWq0qfDOvrTP%2Ba7AYrUMfvtOGoYSc0xD%2BwG2dUtS8evEg73VdNPbgqeUu4JhSZh2J4s4eLk6980WeJfzFeKcujQZfPD6FMz0xf0Ztn2oSZgedU6Lg77CRbRUykryd3PaScE9LWvCsmTAxo6w6O3dZlKzCdFd%2BtEX6V9mv8HRz6%2FPFwQJd%2BeMYYfFAUPK1Osr1U045OYSfHLPnwXLOWcthUV7eHMXx89eM0Y%2FcBJ2N5YKtKGcSKJpTvO7FcZyFbiohb3op8ilq7THLU0mzoRnBE1e0%2Bx%2Fbfn39%2BEOs9VuoeVBhF%2Bpxj8gaAssjsKKcyYhfVJKBdvE0CwdDKn6CigRajdR7plFh3rbVXCIxMKnt%2Fuwn2ZMKmdxMQGOqUBRzQK813wlStNnbR8rOSWa%2B5LMBC1czrNvUB7%2BL3ITmSB7YB547SqkhtIiTn%2FDTdQfXYbI9xe9Uul4ce8lk0eMYH8uCyfkduS6t85BU8ftK2b0RHIuR0HRjEI3bxTGoRdIcnqG3BS6pQW4uyPD86TE5qhd%2Bo6L9IWRz2V31odHOztDQnw2AWKhLqM6dD7KdA4qpVWvgP3xT%2BfmtTqMt%2BrQLv7g9aO&X-Amz-Signature=e14a8d9f41c49cb551071cb988e9496741af904a5c525c15377318c9d6823f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4JT6Z3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA1pk%2F%2BDnmrYCjhtIkPYkK6bV0wfkRoMSxsU0ZWyTG0CAiEAyBVB8V4hrMdqTcsPkRQtZgxrqtsTHmHwVSuOGBWGwz0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCuTlos1cHWX5KB5ByrcAzJSf%2BzCiU%2BMuH3vg9DazHwOun9ewfXbTQBsx2gsKhpZITwN1PobFwKdo7C3pdAYCEeeT%2FUtAqH%2BC1TT1p0RohMQ851a0IV%2FbDJFqIuGnfbMvlxmhAi1wSgIooXpOB7AFJY%2BBKI3bFVFRUBW%2BVeQkwVFZJVUaA%2BovkbSB8XO1HrDBz61%2BcrxBnvX31FotzSmlmQyjJPsZUeipOazj8xboaeEPGA%2FzCQvzG4tPiBhHibvpQ%2Br5PZywHrf%2F4Gc9p2VBTuaQw7ZgHMcvjWq0qfDOvrTP%2Ba7AYrUMfvtOGoYSc0xD%2BwG2dUtS8evEg73VdNPbgqeUu4JhSZh2J4s4eLk6980WeJfzFeKcujQZfPD6FMz0xf0Ztn2oSZgedU6Lg77CRbRUykryd3PaScE9LWvCsmTAxo6w6O3dZlKzCdFd%2BtEX6V9mv8HRz6%2FPFwQJd%2BeMYYfFAUPK1Osr1U045OYSfHLPnwXLOWcthUV7eHMXx89eM0Y%2FcBJ2N5YKtKGcSKJpTvO7FcZyFbiohb3op8ilq7THLU0mzoRnBE1e0%2Bx%2Fbfn39%2BEOs9VuoeVBhF%2Bpxj8gaAssjsKKcyYhfVJKBdvE0CwdDKn6CigRajdR7plFh3rbVXCIxMKnt%2Fuwn2ZMKmdxMQGOqUBRzQK813wlStNnbR8rOSWa%2B5LMBC1czrNvUB7%2BL3ITmSB7YB547SqkhtIiTn%2FDTdQfXYbI9xe9Uul4ce8lk0eMYH8uCyfkduS6t85BU8ftK2b0RHIuR0HRjEI3bxTGoRdIcnqG3BS6pQW4uyPD86TE5qhd%2Bo6L9IWRz2V31odHOztDQnw2AWKhLqM6dD7KdA4qpVWvgP3xT%2BfmtTqMt%2BrQLv7g9aO&X-Amz-Signature=24a1ab9ea4d9f17fa81f40fffe3d065142ff462cb6cd3303e7be6958aa430942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4JT6Z3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA1pk%2F%2BDnmrYCjhtIkPYkK6bV0wfkRoMSxsU0ZWyTG0CAiEAyBVB8V4hrMdqTcsPkRQtZgxrqtsTHmHwVSuOGBWGwz0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCuTlos1cHWX5KB5ByrcAzJSf%2BzCiU%2BMuH3vg9DazHwOun9ewfXbTQBsx2gsKhpZITwN1PobFwKdo7C3pdAYCEeeT%2FUtAqH%2BC1TT1p0RohMQ851a0IV%2FbDJFqIuGnfbMvlxmhAi1wSgIooXpOB7AFJY%2BBKI3bFVFRUBW%2BVeQkwVFZJVUaA%2BovkbSB8XO1HrDBz61%2BcrxBnvX31FotzSmlmQyjJPsZUeipOazj8xboaeEPGA%2FzCQvzG4tPiBhHibvpQ%2Br5PZywHrf%2F4Gc9p2VBTuaQw7ZgHMcvjWq0qfDOvrTP%2Ba7AYrUMfvtOGoYSc0xD%2BwG2dUtS8evEg73VdNPbgqeUu4JhSZh2J4s4eLk6980WeJfzFeKcujQZfPD6FMz0xf0Ztn2oSZgedU6Lg77CRbRUykryd3PaScE9LWvCsmTAxo6w6O3dZlKzCdFd%2BtEX6V9mv8HRz6%2FPFwQJd%2BeMYYfFAUPK1Osr1U045OYSfHLPnwXLOWcthUV7eHMXx89eM0Y%2FcBJ2N5YKtKGcSKJpTvO7FcZyFbiohb3op8ilq7THLU0mzoRnBE1e0%2Bx%2Fbfn39%2BEOs9VuoeVBhF%2Bpxj8gaAssjsKKcyYhfVJKBdvE0CwdDKn6CigRajdR7plFh3rbVXCIxMKnt%2Fuwn2ZMKmdxMQGOqUBRzQK813wlStNnbR8rOSWa%2B5LMBC1czrNvUB7%2BL3ITmSB7YB547SqkhtIiTn%2FDTdQfXYbI9xe9Uul4ce8lk0eMYH8uCyfkduS6t85BU8ftK2b0RHIuR0HRjEI3bxTGoRdIcnqG3BS6pQW4uyPD86TE5qhd%2Bo6L9IWRz2V31odHOztDQnw2AWKhLqM6dD7KdA4qpVWvgP3xT%2BfmtTqMt%2BrQLv7g9aO&X-Amz-Signature=8c41c2fb5c8551e1817d3e171df3e6fd7e3ad94c24ceab2f04f694257d6c68d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR3HRM3K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGmjV8cBBzaUbJKr%2FfcOy4AxjPgE%2Boz347Vc35bi8OB9AiAqy15tosnsAcyUgiHxKcod48O3QS5KC8JyJXLPxcF4oir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMR%2FCzsiaDjWHlymvsKtwDgK8jZuZejCvDFe2XLJpKYzrHKrqCkq9mcouWlGa0G9jTzm0%2FnCJMw46Is0I0XrpxKouEb0jTe6dX%2FWiS1wE%2BM%2BrcdpGQ7UPgUhRtprYm0eUF0LW0JyXQK4XYBxp3J2KS5iZ2%2B2AqW0GdRFEkfvF4%2FfDCHn3HXS2I2Oo0Lhz2FKMSQB3gSuSSF3MazLLS8Iu5oifFOp5bpUTgwZE2YC4C0dbww1qSvWDrptgManLyzo02%2FZEN%2FpD7TKprVdKK3KF3jqUCRBGfPY3ClMyv1yKjT5SeR2ZU86A2OQOdFd1%2BQpqq5jL5FKhJ436cSkUqkZnF5%2F%2Bu%2FEH3ViuJISxudYm9obToI5oYmz5FHFuilXRLPN%2F%2BoJ7j2g%2FBwlp%2BNe6vAij0VMJe5bEXay6ECS2Bjtd%2F2vDSO3XMVXC2Rcro0tScTqR7nfVXwWDJIW%2FQxv5hPx8HZtg2B%2BtK%2Fl%2BIaNbNQIFiIp%2FBXF1buEoNM4fAZI2H78lbaWCZ5erGYzVgzSaJYK6FfIqp5yfe6Uziuq%2BrcHkYf0HnkHMYUrUERW%2FoNCeSZE2yOCuFEZmLSvffhU9liPhmmafiqk8c6eRqCrCW7%2FFUxsiHLZCyiBwuVEzuVoYwg6cEAPFsyPu5gch44Vcw%2FJzExAY6pgGQdYCMuCNDBu4xkBRWpOSKASXFXZrVymHeuVJobVQZ4Hm4%2FZaS7hYZelr2xTOy%2FRA5xIvNxcjYLcNrYKf%2FCi4uSGDw42GGYF6qIZw6Z4VrDPint2fPWuiSgVPB9fKuGujVek2DZnap4QIiFO8BCO%2F1eZk5Uu10yocm2WYfkunsj59WUXmFCmbyksz70u7WQoR3WcyrLiJ1p54Xdy43zppseD3RDfmm&X-Amz-Signature=cc24a512c6362f76138aebc8628fba332288bf70919dbd623e50d10a7aaa2d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLY7MNC6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIC2YWNjg2%2F42iHPVXGON8z0glBBEVWlHfnUzkjM%2BVj%2F6AiEAljDJ5rtBF8aN365l98qfn2QLlbglYBG1GIk50EvkTxkq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKeN1yrpm7rg%2BkyHPyrcAyObO2esKWhmh0uNcQYCJT%2BaM5kvkW1E1IzFnw%2FOVSBNJ8ZuNffV%2BfHmnr8p66AfHxvvdK6K7bt%2Bh8K9jWFhl%2B7R621Xx2VqE936S8qPyA%2BiIZ%2BdfvX4TqyAgoZmeIfo0JhuUJ%2Fo29P0W6KbaJHLgLwDeHZawjNwMhmvb4VUG1D4%2FFgqzGLS2yiSL16QTDI4rxUKTBs9LK9j44Kb91Z9HhJe7OCPuhlhXpnkQE96gQhgy0WeiaOPhSd8I5godCF5U%2BSXJgF568cnUt4dQfYCP2nVGtOYHcxJkhd2FIgdE4e1ozAOItn2PowfdHbhVvtRFqZR9QCF7GDMvOJ7Fq5pMj627g7HrzW3emGMAFGgH9Bdw4XK63XjZvDCxWdNqoFoaUDp92ihZ0cvUw8O3O63THunWiAob6lL9aSX2mPl1WCsqLB1yIv48Iz116CXFrcCo2bz2w%2FoVigqRpGLe%2Bdr8XVgN%2BcS%2BZ1Y6%2FGRVNSdNXRT4nh3EfRedYCz%2FDMggj1NVCweBtvEdUYI5j67XCpY6oujUrKrVOoG17tce%2B51P7AukKBlFO9Fnt69hYhR5kw23nyWAekA2it1JFeqP0pcmlmsajq46ysZ92hGi3IoPs%2FFWyT7TN912ASJHYkvMMCdxMQGOqUBf9XX6r3ttgl5%2FJGFTH5RrWeqWBUkBBmd%2B1z7jttGsMfmyh6Yof89b7Rp3qY4JdO%2BG0tPb1JEEsQaL6S6J8J03E8ENUAVWOfigDWtV7Pc5BNaUGJaa9%2Fgdb0HJXEFu1szXUkIS%2BKEC2sWcXdGQ988ej22M6kj8hoM8berht5VMouEoJ3C9%2FQmvb1Q8T2lT0li6A7fXLT%2FY9qG%2FyuPgDbCoNfsrkXA&X-Amz-Signature=143906c580c05f3be1f93dfefd78aff29ff31c91a307dc5effea68d9db3c4a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4JT6Z3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIA1pk%2F%2BDnmrYCjhtIkPYkK6bV0wfkRoMSxsU0ZWyTG0CAiEAyBVB8V4hrMdqTcsPkRQtZgxrqtsTHmHwVSuOGBWGwz0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDCuTlos1cHWX5KB5ByrcAzJSf%2BzCiU%2BMuH3vg9DazHwOun9ewfXbTQBsx2gsKhpZITwN1PobFwKdo7C3pdAYCEeeT%2FUtAqH%2BC1TT1p0RohMQ851a0IV%2FbDJFqIuGnfbMvlxmhAi1wSgIooXpOB7AFJY%2BBKI3bFVFRUBW%2BVeQkwVFZJVUaA%2BovkbSB8XO1HrDBz61%2BcrxBnvX31FotzSmlmQyjJPsZUeipOazj8xboaeEPGA%2FzCQvzG4tPiBhHibvpQ%2Br5PZywHrf%2F4Gc9p2VBTuaQw7ZgHMcvjWq0qfDOvrTP%2Ba7AYrUMfvtOGoYSc0xD%2BwG2dUtS8evEg73VdNPbgqeUu4JhSZh2J4s4eLk6980WeJfzFeKcujQZfPD6FMz0xf0Ztn2oSZgedU6Lg77CRbRUykryd3PaScE9LWvCsmTAxo6w6O3dZlKzCdFd%2BtEX6V9mv8HRz6%2FPFwQJd%2BeMYYfFAUPK1Osr1U045OYSfHLPnwXLOWcthUV7eHMXx89eM0Y%2FcBJ2N5YKtKGcSKJpTvO7FcZyFbiohb3op8ilq7THLU0mzoRnBE1e0%2Bx%2Fbfn39%2BEOs9VuoeVBhF%2Bpxj8gaAssjsKKcyYhfVJKBdvE0CwdDKn6CigRajdR7plFh3rbVXCIxMKnt%2Fuwn2ZMKmdxMQGOqUBRzQK813wlStNnbR8rOSWa%2B5LMBC1czrNvUB7%2BL3ITmSB7YB547SqkhtIiTn%2FDTdQfXYbI9xe9Uul4ce8lk0eMYH8uCyfkduS6t85BU8ftK2b0RHIuR0HRjEI3bxTGoRdIcnqG3BS6pQW4uyPD86TE5qhd%2Bo6L9IWRz2V31odHOztDQnw2AWKhLqM6dD7KdA4qpVWvgP3xT%2BfmtTqMt%2BrQLv7g9aO&X-Amz-Signature=e2574d98ac4950fe163e0620701e7bd8ed1106f55ab0b5596b60bde635353f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
