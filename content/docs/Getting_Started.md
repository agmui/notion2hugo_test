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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75S6UN4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIG4%2BKIYi%2FitnXor9hUSdsHIt749GEwEErtyyuoahRYauAiEAm2EtXgMFUWZQEA6vMpxGH7D%2BhGKTHHRbifNbvMjAVEQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3UY3GmxZT4Nvt7%2FSrcA%2FbpRIZOT67J1frmVQKdV59jZLWJVzNLf73n5oVt7JcTXdQKXdOsHh5FpsalDWALbx6QT1U0HUDJy96UL9Az%2FE27yhhx9ATqPId58yA2jJjxaFKMuL5VNVOa8XZvdwRs34b%2F8VIjVfZZBAEXQxE4xo5ZaFsogR1qhCPSZ0Ns%2BOrz3%2BKwaWZjo%2BZ3v63gWn99dmgzpgJhd88V4%2Bv2si5MDJ98En6pAsUk2O1%2FO%2FeGLrHGRVT3CiEYFoPS4QjxNTU1AiUZEIjjpaYkCISQx1O8ndWjHpYcFkVND%2BRPcakNnf5RpJponzANHV8ogRDOl%2BrZq4bzp7Y%2Bylx6nCtLPOY9VPq%2BKG8B3bo4%2FK1ss1gE26YcN0%2Fi%2BQaynVMDBc4b6LPWhGnEzN6UsUOnowxRCn4TXbD%2FrcEG7tCllJ1tcl%2BEBb%2BnsiZ8S5VdJDJEcXDaEhKw7mgtMmtuEas1I4flO0ParjpUxW%2BEOksQLAznu1h2HLBDykOQguE2tpkBTryF%2FmHvZM5SwhDU%2FrQw27v914ucas%2FyAOnfx43tPceYam7Re4%2FCPz72Sv7qmIFUY01TqOvarLPTdtO8cCVYQsX3RRHC35TPoQ98Lu1OdBY962D8FVp%2BInZDUiWIZ%2FVOfTutMMm00cQGOqUB4SnAfWdD3OF5jqjQGlhVI9yBprB%2B2kdgkXXD3%2BbFtxHRW1Z3Sjiybx5tKzyfpVnBpY4pldPnm5LiSu7RAEQAKwAYBJaWb%2FjKwMhpMNQbyCVvjmDh4jopSb1VurqLEg8vnmSQ%2BLC6wLD8jehQbEKLHP359EyNR%2F%2BTwuxC%2BR0mY2GHsgPQKVloZZCAU9UH%2F84lKPHw%2BKqHCgfwKmGxhJhMD2g78bL8&X-Amz-Signature=c4226205e0f209873ad33e514910d4e974dd613df4ee8dd9e5024edbdc14060c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75S6UN4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIG4%2BKIYi%2FitnXor9hUSdsHIt749GEwEErtyyuoahRYauAiEAm2EtXgMFUWZQEA6vMpxGH7D%2BhGKTHHRbifNbvMjAVEQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3UY3GmxZT4Nvt7%2FSrcA%2FbpRIZOT67J1frmVQKdV59jZLWJVzNLf73n5oVt7JcTXdQKXdOsHh5FpsalDWALbx6QT1U0HUDJy96UL9Az%2FE27yhhx9ATqPId58yA2jJjxaFKMuL5VNVOa8XZvdwRs34b%2F8VIjVfZZBAEXQxE4xo5ZaFsogR1qhCPSZ0Ns%2BOrz3%2BKwaWZjo%2BZ3v63gWn99dmgzpgJhd88V4%2Bv2si5MDJ98En6pAsUk2O1%2FO%2FeGLrHGRVT3CiEYFoPS4QjxNTU1AiUZEIjjpaYkCISQx1O8ndWjHpYcFkVND%2BRPcakNnf5RpJponzANHV8ogRDOl%2BrZq4bzp7Y%2Bylx6nCtLPOY9VPq%2BKG8B3bo4%2FK1ss1gE26YcN0%2Fi%2BQaynVMDBc4b6LPWhGnEzN6UsUOnowxRCn4TXbD%2FrcEG7tCllJ1tcl%2BEBb%2BnsiZ8S5VdJDJEcXDaEhKw7mgtMmtuEas1I4flO0ParjpUxW%2BEOksQLAznu1h2HLBDykOQguE2tpkBTryF%2FmHvZM5SwhDU%2FrQw27v914ucas%2FyAOnfx43tPceYam7Re4%2FCPz72Sv7qmIFUY01TqOvarLPTdtO8cCVYQsX3RRHC35TPoQ98Lu1OdBY962D8FVp%2BInZDUiWIZ%2FVOfTutMMm00cQGOqUB4SnAfWdD3OF5jqjQGlhVI9yBprB%2B2kdgkXXD3%2BbFtxHRW1Z3Sjiybx5tKzyfpVnBpY4pldPnm5LiSu7RAEQAKwAYBJaWb%2FjKwMhpMNQbyCVvjmDh4jopSb1VurqLEg8vnmSQ%2BLC6wLD8jehQbEKLHP359EyNR%2F%2BTwuxC%2BR0mY2GHsgPQKVloZZCAU9UH%2F84lKPHw%2BKqHCgfwKmGxhJhMD2g78bL8&X-Amz-Signature=431316c27e419043e1d200be796a24e5712f2b63d442becad3dffd103d8847f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75S6UN4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIG4%2BKIYi%2FitnXor9hUSdsHIt749GEwEErtyyuoahRYauAiEAm2EtXgMFUWZQEA6vMpxGH7D%2BhGKTHHRbifNbvMjAVEQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3UY3GmxZT4Nvt7%2FSrcA%2FbpRIZOT67J1frmVQKdV59jZLWJVzNLf73n5oVt7JcTXdQKXdOsHh5FpsalDWALbx6QT1U0HUDJy96UL9Az%2FE27yhhx9ATqPId58yA2jJjxaFKMuL5VNVOa8XZvdwRs34b%2F8VIjVfZZBAEXQxE4xo5ZaFsogR1qhCPSZ0Ns%2BOrz3%2BKwaWZjo%2BZ3v63gWn99dmgzpgJhd88V4%2Bv2si5MDJ98En6pAsUk2O1%2FO%2FeGLrHGRVT3CiEYFoPS4QjxNTU1AiUZEIjjpaYkCISQx1O8ndWjHpYcFkVND%2BRPcakNnf5RpJponzANHV8ogRDOl%2BrZq4bzp7Y%2Bylx6nCtLPOY9VPq%2BKG8B3bo4%2FK1ss1gE26YcN0%2Fi%2BQaynVMDBc4b6LPWhGnEzN6UsUOnowxRCn4TXbD%2FrcEG7tCllJ1tcl%2BEBb%2BnsiZ8S5VdJDJEcXDaEhKw7mgtMmtuEas1I4flO0ParjpUxW%2BEOksQLAznu1h2HLBDykOQguE2tpkBTryF%2FmHvZM5SwhDU%2FrQw27v914ucas%2FyAOnfx43tPceYam7Re4%2FCPz72Sv7qmIFUY01TqOvarLPTdtO8cCVYQsX3RRHC35TPoQ98Lu1OdBY962D8FVp%2BInZDUiWIZ%2FVOfTutMMm00cQGOqUB4SnAfWdD3OF5jqjQGlhVI9yBprB%2B2kdgkXXD3%2BbFtxHRW1Z3Sjiybx5tKzyfpVnBpY4pldPnm5LiSu7RAEQAKwAYBJaWb%2FjKwMhpMNQbyCVvjmDh4jopSb1VurqLEg8vnmSQ%2BLC6wLD8jehQbEKLHP359EyNR%2F%2BTwuxC%2BR0mY2GHsgPQKVloZZCAU9UH%2F84lKPHw%2BKqHCgfwKmGxhJhMD2g78bL8&X-Amz-Signature=2c5734342f008ed84b7f3b9c47be4d0f0c46be0ee18c69d6e490c8dcbea81ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5A7F3PQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDs7zj5nq2kWr5ukFDksuyHtym2XghGTXY13scX55tH1gIgbXYGAv8Zim1AVyLOgUY2VHibLBDrZ5Xe%2FJAkWyCNWnQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjl9PpjuvKy%2BzZsgCrcAwLM8Z4PRhYc%2FEEbUDQtQRiUAuB5ZEBlzVnvuFBz3EcpiWDk2oBThscN%2BpwdYGL7uu9EbYdJWXY3Vwn%2BLNeAo1m0rrnPGd%2Fs3BAO8ursH%2FR7Fa0%2FQ4AHHKbUyTZEaMeXHijGlzhuWiYLztsVafVPMwwXkGYvYoRP0xggFxOTfnGlzW4quLKOpnjnta3u1VKJYKk%2F5VJi3nu6lyCL1y4ntGIOpK1MQXyiwed1WF0mkOvYztfzdI2O%2B0iI9B7zollLpLMJX5gS5L4cHknZZMUCLYotVEAqF23qE%2FaGR91KQuT75AAHp3ikhfVZ5SpNHNvU077RJLLRfNmVJFctvJY95Jb%2FK5%2Fxo6H8BlfKw9pVY7fv%2BjPuxqxa7TCXGMxEvOaXBjBEoJHwx8FLNUeXIkxzFXOpGjRV2mejsn8rZA0kLqmcdFQ6JUOoJZrvhKcfAQe3q2PyltGga6D0nVtPBRBfVNUgy2ht5xtcc4644PzEmyqLx6HfqhWkW%2BbjT3TVOhjOIqIK7MNvcMVDUQHAw98kJ5Bj7LcVq4SN%2FvL9OGNv9I6OjgzVGvkzP4F1DUmBS0Dh1IW50BiR7xvdjM3xt0OYTBYz%2Fbi7FtRUzqzcYAg1tm5uitPjoafZl9lGLWIkMO200cQGOqUBbtJFu%2BNgiBxkhVl2G5EDvSssH%2B0Q2d1rlPrIKI1bWJYTvgptOy6iHe3I%2FxjwG8UWjtspdb%2BTTYT8%2FDL9UDYkUynSDNvtOImC2yHn69etKQ2d0v9rDTVNPzkjKzuTkjgT37ci81XFD6jdbLrSI1otYtVZ9H6FBqd0z1tgOPwlqUSLwdha68z3%2FUJr%2B8cIuTTWNgupo15XL3pjGI63CJqd0xjikNyA&X-Amz-Signature=fa8210c777867f8a8ba81b374bed131c1fdbd325057cb819c593383ccaf111c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QI77H2V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIG5Q38A2GcmKoDDPZp9jBcBjb4LptunZ2fn4wukUOs41AiAMx4dG1fwUR9UA9SRapvkUBGJBYCa4E0yiprwiEUFimCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRDzOeTep4I0i4Es%2BKtwDyMTYsDUekLEsU5SqcESMTaL%2BxV35xX1Exxzj8y7%2F%2FlO9hxLkLjkPpFD87u0ke5rImALMGGHWpVcvHczuDVtjpMJX3vP1gDMcI%2BD%2FAjFZZ5r%2Fs5h4H5WhFQzBU%2FWWmripbVnRQkQwVGoU%2BYXW%2Fk7wnh%2BbpB9GdJ3njRWDYS8iBuBloptQCgNIU8rcypSdJfpDY0ghIpsc72WgVveRhF9sEhUsvYxx9Wozv4RQ8C7mls%2FCTncXnCo0dnDsMJrrAU%2FgIf8U53f%2FZz00MEmREvK5%2FiYIQc9UOPr5LXWkqjkTfIHlU7vPDWiuh1zMMmXGM5QPI71HntGwjmXcyoVc9gvPI3sEWPFC%2Bn06Xk3fMWEcOEW%2FaPPRPHu5EKnlvF1JFDUUZsudNYH2r3tcsc18uEI9j2I3FF2TZvWdb7xbcX9MEivPp%2BTNECyBS6syncFMWwOiUtUZubhaLs3iM2xaRWLl8D6oFtd89Nnf2YV%2F0umWIuNHboaNAULehecHNWS2MxD90Hby4NaK%2F99Y5C1Z1LEglQbb35A4NHw0qvuNwx%2FTqUEXm6%2FtulIkNVRbXwlSrp6FNz%2B7wgqleboq1YcP6bBvDpZlMSgTc%2Bz3rnvTAUxR%2BI8k07XR9pPp%2BTpXmOowg7bRxAY6pgFiB3w4geRpuLNZn%2B1xyy%2B%2FPXW%2BElSj5KBqhvLnXxNtN66lDRYUUoTUWV54xPEAfrRde7nZYDlcDxagwrq%2FE2c19fikrUNsQuJEz9KxqxPNX8GsnA4OLMe%2FBW6vjd1v9croTEKFvjCIqgehR6RxuTOT4wLsJDTbU4jgmXCeTIBnsMdAo%2BHt1FidnjAAEUIoIO6kgFSiKhjIQFBYuAHcLf6PUpPQi78o&X-Amz-Signature=fe2632b3d9bdace4a5f238bd410f9785ff69549f70f93ba623a6925d7f23dc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75S6UN4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIG4%2BKIYi%2FitnXor9hUSdsHIt749GEwEErtyyuoahRYauAiEAm2EtXgMFUWZQEA6vMpxGH7D%2BhGKTHHRbifNbvMjAVEQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3UY3GmxZT4Nvt7%2FSrcA%2FbpRIZOT67J1frmVQKdV59jZLWJVzNLf73n5oVt7JcTXdQKXdOsHh5FpsalDWALbx6QT1U0HUDJy96UL9Az%2FE27yhhx9ATqPId58yA2jJjxaFKMuL5VNVOa8XZvdwRs34b%2F8VIjVfZZBAEXQxE4xo5ZaFsogR1qhCPSZ0Ns%2BOrz3%2BKwaWZjo%2BZ3v63gWn99dmgzpgJhd88V4%2Bv2si5MDJ98En6pAsUk2O1%2FO%2FeGLrHGRVT3CiEYFoPS4QjxNTU1AiUZEIjjpaYkCISQx1O8ndWjHpYcFkVND%2BRPcakNnf5RpJponzANHV8ogRDOl%2BrZq4bzp7Y%2Bylx6nCtLPOY9VPq%2BKG8B3bo4%2FK1ss1gE26YcN0%2Fi%2BQaynVMDBc4b6LPWhGnEzN6UsUOnowxRCn4TXbD%2FrcEG7tCllJ1tcl%2BEBb%2BnsiZ8S5VdJDJEcXDaEhKw7mgtMmtuEas1I4flO0ParjpUxW%2BEOksQLAznu1h2HLBDykOQguE2tpkBTryF%2FmHvZM5SwhDU%2FrQw27v914ucas%2FyAOnfx43tPceYam7Re4%2FCPz72Sv7qmIFUY01TqOvarLPTdtO8cCVYQsX3RRHC35TPoQ98Lu1OdBY962D8FVp%2BInZDUiWIZ%2FVOfTutMMm00cQGOqUB4SnAfWdD3OF5jqjQGlhVI9yBprB%2B2kdgkXXD3%2BbFtxHRW1Z3Sjiybx5tKzyfpVnBpY4pldPnm5LiSu7RAEQAKwAYBJaWb%2FjKwMhpMNQbyCVvjmDh4jopSb1VurqLEg8vnmSQ%2BLC6wLD8jehQbEKLHP359EyNR%2F%2BTwuxC%2BR0mY2GHsgPQKVloZZCAU9UH%2F84lKPHw%2BKqHCgfwKmGxhJhMD2g78bL8&X-Amz-Signature=daf0a143c84783a9d6b2998987b53fb5864d44f5a3a6d8fa919c930465a743e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
