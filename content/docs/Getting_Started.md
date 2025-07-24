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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZG35IR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDo%2F9E5NH7wuapEbf9zS4xSAgpVFn%2BfhhQycXtbe7RaVAiEA7ejAMqE7ciWKpoxfr059jS8SMYAUSR1mKeFR78OQ%2BI0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK%2F1zjZ9PjwTbCRutSrcA5QZH37yKufU1KsZjYfjdTBJjo0l4ZQTSl8iSGX%2FNR%2BsHWV7%2Bg3d7b51Ptcf05Y3CL2HexUKudwXYQcPqbQSDN4hllR2uYdzy9Rn4RVysZbOiHlDtuUQD19CpCOqZjm6xCtkjWxFF1f4tTA6zu692bfM1EmlTeAtTICrOTzytVjyZSaIKkvrMsbBAjlOJg6NNi5bXmMIcAxSwdjmKGWJEz3qdqzRr%2B8kYUwjZ5gqejVb2eXYGS7DLWeqUDwx6d8FkbK0JvA3CkSJ0Ts2fniv28c8Kr2vNef2PzxHTyFhDCO693s%2FPCbUhRVxmZdcBuaQG2jSqtgRDhf0CoD8ZDmRGChRi3TERuRHICvvieKOuZuYRkMKB62HpdaeUT%2BnSlcRefOgp2wS%2FsTu1DXpXC%2BHjd08cXaZadQR1k3y4Q3F%2BSNbYSHDlU8jCfytiS718eV0ODLWz%2F59MF5pzbgJw0z7eRmAZw7I%2BDSj68WRi7i1P6Yo60TOWFZ58WBdOxs1G6OCIS471tV0S%2BwOzXm59wzWJy%2FxW%2BEUriAuncu15cDc%2BN6WaQ%2BX3zPu3IHEO9lFilPT%2FvU4zBgUCVhee4UluOHVLNLcUPjM7NhmHSwPtovVDjF9LO6ieZzSVA0vzhivMMnXisQGOqUBe2WyEGwieJYUZWrXVizullOki77RBgB73yQqXPffikSe7t%2FOyWLo2%2F3ilFhduSku4golzGAl8sS00pvCAbHa4ARb19zESTVAqcxhoPZiUDGCP%2FzIfZXXw8Oxiz00Q0zHYYHGkLfpb3i%2BEvXamC3PdIMBDr5ijaeHoHSBclXEJ9Of0stm4e5DcqT3KL5odohVhgTa5d4q221qHp5Wg4GfdR936XJO&X-Amz-Signature=8f39cdfb7fe632858a84e7134411c63a4dc4886b23ef52fba4959c58bdd8963d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZG35IR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDo%2F9E5NH7wuapEbf9zS4xSAgpVFn%2BfhhQycXtbe7RaVAiEA7ejAMqE7ciWKpoxfr059jS8SMYAUSR1mKeFR78OQ%2BI0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK%2F1zjZ9PjwTbCRutSrcA5QZH37yKufU1KsZjYfjdTBJjo0l4ZQTSl8iSGX%2FNR%2BsHWV7%2Bg3d7b51Ptcf05Y3CL2HexUKudwXYQcPqbQSDN4hllR2uYdzy9Rn4RVysZbOiHlDtuUQD19CpCOqZjm6xCtkjWxFF1f4tTA6zu692bfM1EmlTeAtTICrOTzytVjyZSaIKkvrMsbBAjlOJg6NNi5bXmMIcAxSwdjmKGWJEz3qdqzRr%2B8kYUwjZ5gqejVb2eXYGS7DLWeqUDwx6d8FkbK0JvA3CkSJ0Ts2fniv28c8Kr2vNef2PzxHTyFhDCO693s%2FPCbUhRVxmZdcBuaQG2jSqtgRDhf0CoD8ZDmRGChRi3TERuRHICvvieKOuZuYRkMKB62HpdaeUT%2BnSlcRefOgp2wS%2FsTu1DXpXC%2BHjd08cXaZadQR1k3y4Q3F%2BSNbYSHDlU8jCfytiS718eV0ODLWz%2F59MF5pzbgJw0z7eRmAZw7I%2BDSj68WRi7i1P6Yo60TOWFZ58WBdOxs1G6OCIS471tV0S%2BwOzXm59wzWJy%2FxW%2BEUriAuncu15cDc%2BN6WaQ%2BX3zPu3IHEO9lFilPT%2FvU4zBgUCVhee4UluOHVLNLcUPjM7NhmHSwPtovVDjF9LO6ieZzSVA0vzhivMMnXisQGOqUBe2WyEGwieJYUZWrXVizullOki77RBgB73yQqXPffikSe7t%2FOyWLo2%2F3ilFhduSku4golzGAl8sS00pvCAbHa4ARb19zESTVAqcxhoPZiUDGCP%2FzIfZXXw8Oxiz00Q0zHYYHGkLfpb3i%2BEvXamC3PdIMBDr5ijaeHoHSBclXEJ9Of0stm4e5DcqT3KL5odohVhgTa5d4q221qHp5Wg4GfdR936XJO&X-Amz-Signature=0a6f7d515a8e4dc29dcc410869a0884437ede56c4ac85b80f299d4d533831be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZG35IR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDo%2F9E5NH7wuapEbf9zS4xSAgpVFn%2BfhhQycXtbe7RaVAiEA7ejAMqE7ciWKpoxfr059jS8SMYAUSR1mKeFR78OQ%2BI0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK%2F1zjZ9PjwTbCRutSrcA5QZH37yKufU1KsZjYfjdTBJjo0l4ZQTSl8iSGX%2FNR%2BsHWV7%2Bg3d7b51Ptcf05Y3CL2HexUKudwXYQcPqbQSDN4hllR2uYdzy9Rn4RVysZbOiHlDtuUQD19CpCOqZjm6xCtkjWxFF1f4tTA6zu692bfM1EmlTeAtTICrOTzytVjyZSaIKkvrMsbBAjlOJg6NNi5bXmMIcAxSwdjmKGWJEz3qdqzRr%2B8kYUwjZ5gqejVb2eXYGS7DLWeqUDwx6d8FkbK0JvA3CkSJ0Ts2fniv28c8Kr2vNef2PzxHTyFhDCO693s%2FPCbUhRVxmZdcBuaQG2jSqtgRDhf0CoD8ZDmRGChRi3TERuRHICvvieKOuZuYRkMKB62HpdaeUT%2BnSlcRefOgp2wS%2FsTu1DXpXC%2BHjd08cXaZadQR1k3y4Q3F%2BSNbYSHDlU8jCfytiS718eV0ODLWz%2F59MF5pzbgJw0z7eRmAZw7I%2BDSj68WRi7i1P6Yo60TOWFZ58WBdOxs1G6OCIS471tV0S%2BwOzXm59wzWJy%2FxW%2BEUriAuncu15cDc%2BN6WaQ%2BX3zPu3IHEO9lFilPT%2FvU4zBgUCVhee4UluOHVLNLcUPjM7NhmHSwPtovVDjF9LO6ieZzSVA0vzhivMMnXisQGOqUBe2WyEGwieJYUZWrXVizullOki77RBgB73yQqXPffikSe7t%2FOyWLo2%2F3ilFhduSku4golzGAl8sS00pvCAbHa4ARb19zESTVAqcxhoPZiUDGCP%2FzIfZXXw8Oxiz00Q0zHYYHGkLfpb3i%2BEvXamC3PdIMBDr5ijaeHoHSBclXEJ9Of0stm4e5DcqT3KL5odohVhgTa5d4q221qHp5Wg4GfdR936XJO&X-Amz-Signature=5fb0a9a1225a96bbb867c8a447501388e4c0eafd1675f38887808375e450bea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FF7P7SR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCICl5kPiDpE49ruweGbmv1S5gu1d4DOpRl5nwTgMaxJhuAiEA%2BXWprt7Y51XNCcKhV7LoiEu5zlxPacGMsj8k2MqrKeQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHA9pLFSjrVKq5LXOSrcA5ToQZVT7vIaVc%2FJNzyJ6rpbsWKGDS7d6XNmrZAzpq%2FAiBjoXjrxS2KD1f%2FEW3hm%2F%2BBSQTJRMLy9Rt9SxhqWBeFSx8zpUiVLuR5UYfBJrHqs9j1RjQT%2BiG22OSl%2B6PFi7Eble6bLld7fUQdjAObIG%2FU2ktYhZ7CqG0%2BxrkJTXfSJxq3sKoB1XIvy3vYxzufZ3oLEM%2Fh2ZKxigmqcVIn3bZVwkuWGedpnfXK4FtchZJPWppmsy2spxqzdiYLp1D%2BX9WHOoID%2B5Nv31D08bN1qqQq3qn%2BNVaimA1IBGU4OAz2jYuvRzTY2bxk6PpaNphcfCX0dLqWJFlzrdGYMDRcHrpUNvP1O%2Fd64bmXLIQNDRz%2BPt5KwGphrr%2Fgn5syOQRatDL0y0qSXUOSow8VZrtZ9xKR4XP7EIxqxkVHACdmO2siwmnJ5OYg0HNhf4JoxYC%2FH9E78jtK9WzRpzO%2BJUb0%2BtzFh3S9jtbZIVJNL%2FbVvCrxOUVoQFIo2Fz9h9Czhgnk9r8Tvo7k8NfiuROruovwDXGT0F4RL%2BqYRWBFeR93sBOpjFPHYtLo9prsFov5J4WXdx%2FuCRBb3wZhWjvLX30JpeUEwhR%2BAHumu2fFaOKIQ3s1fhz2XxDjFr5qMzzW3MIvYisQGOqUBoA0u%2BDD5CbUrR5ReY1Mfdkh38cCphnLOZnZZiig0dzNfxDicNVVFGCEyQnlbWVtP%2F0pl6sd8Xgmh1ghZDLl7HUy2o1tYCd1lBdQJvoeZfiKZbBrPSvpYn77fVPQu48834od%2F1wX9hhOggAa30LvQQ4lYA8YCsk1g0%2FX3zTfUgMSBbKcM5kyDV2ICj64eDMM83pGA%2BTcFc3pcquOqZScDE4glf3zZ&X-Amz-Signature=d2a2d036d083e93b0b6d23df989163bced12cf04a69f9a1930d3ff54170733a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUSORSYX%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDVleWspe2MQES%2BXf%2BQVyJthPCmp3Oh40hcKmnn7loxkAiAI8qJFEYCtZFGm5erquz%2B34U8bLa64Lnnuf2LGqINiQSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMFqjioLeSHB2UbfBrKtwD4LXUAOrtOXPt6Rkc8NsSiH1tDg814TfW3OuY3C7oXa%2BgIbDUiRHGlHMoGisDJvRA8AIEnlAX6B2Dh0Sl1NTPrp%2BlLRr%2FkRI8EqXRyk%2Bt6jXhKKKnZscghiaZSVXkwGwsLhx0zUS6DGD3GoUh7WTeq4EfUZfLpYzPoxKsIwZmhoNqnBnPt6n4f8yzp%2FeJYdmokBdQRQWJLPm1uXrAzDYdvYeAMn5bmYIPJrBEYo%2FUgXr%2FLQVdpjLVvhEECxuqMs6CZNkfcFSmEq4B2IkgNpBCJTvSdmWUz0daikj%2Bjav3nYIFRIdgPZ7P8wUoE2lC9EVJHO78Q2m%2FlEVtlQrwepm%2FDQnJPgOsWwuBzHMEwjJLPLwuNM3xomzPpijbR8sOtjZPXxd1b5LhzTzisezp%2ByQMPoDOkmibKeSyr%2BDQXyXzjdS%2FfZNX1ZuYpdeq0vgbraM4g5ozMCQhIen5xYOTnD8ZTZK9i9TxN%2FXYXPp2nte1wc5x9caJzfIskcTSE3JqWrvszx6M4iecc6Z9utWOfRooSWPxQINDAsJsvEXw90e2bfcpsNjMGe4g2udwMMUQ%2Bk5OpYeMmhUlTkIrZ3EXULV4Pr4gQPSaT0ZhItr4MvA29eqGlWNLlKV6HIsEccow%2BdeKxAY6pgEfqUCxyAk%2BbQq%2B0BZaufjNVWsIyymdT96zB6RJUPbCEzZvP165IBTIOEPHjL0nvx2Hdk%2FQgw7iEhK2YXAWhhYD4goQ33nmvAx6M%2BVRmLL74NH66j3%2FsDrX%2FZyBwI2R3hepKfF91jNHVRKdwHeuWQp0OC22fu9Y0%2Fgue09J83F1UZULoPeXUeJhHoqKfhZeeKQikqdbdHWmYrSqRyPJ1d8tOir3n5wA&X-Amz-Signature=3c59df219866e181dec86f1166b49d1f0595e1e485fa5f4f33862e56862d606f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ZG35IR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDo%2F9E5NH7wuapEbf9zS4xSAgpVFn%2BfhhQycXtbe7RaVAiEA7ejAMqE7ciWKpoxfr059jS8SMYAUSR1mKeFR78OQ%2BI0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK%2F1zjZ9PjwTbCRutSrcA5QZH37yKufU1KsZjYfjdTBJjo0l4ZQTSl8iSGX%2FNR%2BsHWV7%2Bg3d7b51Ptcf05Y3CL2HexUKudwXYQcPqbQSDN4hllR2uYdzy9Rn4RVysZbOiHlDtuUQD19CpCOqZjm6xCtkjWxFF1f4tTA6zu692bfM1EmlTeAtTICrOTzytVjyZSaIKkvrMsbBAjlOJg6NNi5bXmMIcAxSwdjmKGWJEz3qdqzRr%2B8kYUwjZ5gqejVb2eXYGS7DLWeqUDwx6d8FkbK0JvA3CkSJ0Ts2fniv28c8Kr2vNef2PzxHTyFhDCO693s%2FPCbUhRVxmZdcBuaQG2jSqtgRDhf0CoD8ZDmRGChRi3TERuRHICvvieKOuZuYRkMKB62HpdaeUT%2BnSlcRefOgp2wS%2FsTu1DXpXC%2BHjd08cXaZadQR1k3y4Q3F%2BSNbYSHDlU8jCfytiS718eV0ODLWz%2F59MF5pzbgJw0z7eRmAZw7I%2BDSj68WRi7i1P6Yo60TOWFZ58WBdOxs1G6OCIS471tV0S%2BwOzXm59wzWJy%2FxW%2BEUriAuncu15cDc%2BN6WaQ%2BX3zPu3IHEO9lFilPT%2FvU4zBgUCVhee4UluOHVLNLcUPjM7NhmHSwPtovVDjF9LO6ieZzSVA0vzhivMMnXisQGOqUBe2WyEGwieJYUZWrXVizullOki77RBgB73yQqXPffikSe7t%2FOyWLo2%2F3ilFhduSku4golzGAl8sS00pvCAbHa4ARb19zESTVAqcxhoPZiUDGCP%2FzIfZXXw8Oxiz00Q0zHYYHGkLfpb3i%2BEvXamC3PdIMBDr5ijaeHoHSBclXEJ9Of0stm4e5DcqT3KL5odohVhgTa5d4q221qHp5Wg4GfdR936XJO&X-Amz-Signature=fbafe82b43e1bd1cf857063aff90dc732f976f1166a43450d31b68030ff6b0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
