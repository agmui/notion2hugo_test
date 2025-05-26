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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQHUSRD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGxXrm3zAxgPi4d5vf14F2gevKs%2FU%2FHQ55z0zJri8lMdAiBoVWVx%2BsdHv3YFRJrofL%2Fs7An39KNN%2BqD2Oz5bL3ba6Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbYlzJbTWv0p2S44pKtwDEV3xc%2FaubIPITmiwjkrcPR5I88IiNvXS0cHQTvdgVYLVTmnRgtX5vsPJa0JDSg60GdoaNY2vVmgO%2BoUmGCOSh51uf49VfHxUEfUNHQW68SickECy%2Ft2iDLkYkDCRG%2B9RMNQRu56H0XDDVVsoCH%2BmMvgM8oP9GAO4kNzyf%2FtJnietiIGfMeS1O9AEmLBLnFyH0Y0xvIBJZBnfriKWSjmSpwWMYbENop0nXwMhMllbuDwvm8CE3HIJdr0hy9ZMdB6%2FYPQmNcVjCUrnl%2B%2Byu0I60XbLhV6cpAk9uhusiAeS2iNSYZ0bBD%2FlUaev0xEi4JLfnMCuZAfncd7pf%2BOV6Bztung30JyWAj28MwdBBr7CTEmAo0fSWP0C8w08Sul3CwP7LJ6KkWuvl338TWtxut%2Fcdvg4Z0QJ9Daf6wKqOwwetntczAzkq1m9XUqEHCq7YYiUdMzDhcomiUjkEo%2FxwrifZtDbPZ57EG9MbBtddVR4XImCSeGtW5sgCns9rGEQ4tnQBoS9Dqz%2F0psyn32Km5XQMdRaXPWdrSNXvqUkIdeFC7vA%2FJ8ljBXrhbFEW2ohhSjC%2B6l60EJvpRpNN6BHJ7kDlzXPZwQt5TI5iv3i0btvWJueMk%2BNJq51bUjnZVMw553PwQY6pgHX8o3wnonIsgFXAafaeQHn6PFocTIfqXq%2BWbtF53xe6ENBubrogoqG8a5CwUD1rrrFO0C7%2B9cYETC%2Bqwrmda9hoxeM0qlrZg0eXB37RXFn%2F3mnHE5lC607g1Ly7j5IWnbLS2QZm0L7yvbbG0yIV2vCC5%2Bo5ZfBC6aWcWbJvEOUSO%2F6D%2B%2B8ucsv%2BRiukyUQk9%2Bh9UqUGP%2BPegqMSeWAsWJYjDxzIOHg&X-Amz-Signature=5fad9ee5945fb8acc20a82565956ca1ebea90fa93c87365953b1517f9b56ea1f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQHUSRD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGxXrm3zAxgPi4d5vf14F2gevKs%2FU%2FHQ55z0zJri8lMdAiBoVWVx%2BsdHv3YFRJrofL%2Fs7An39KNN%2BqD2Oz5bL3ba6Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbYlzJbTWv0p2S44pKtwDEV3xc%2FaubIPITmiwjkrcPR5I88IiNvXS0cHQTvdgVYLVTmnRgtX5vsPJa0JDSg60GdoaNY2vVmgO%2BoUmGCOSh51uf49VfHxUEfUNHQW68SickECy%2Ft2iDLkYkDCRG%2B9RMNQRu56H0XDDVVsoCH%2BmMvgM8oP9GAO4kNzyf%2FtJnietiIGfMeS1O9AEmLBLnFyH0Y0xvIBJZBnfriKWSjmSpwWMYbENop0nXwMhMllbuDwvm8CE3HIJdr0hy9ZMdB6%2FYPQmNcVjCUrnl%2B%2Byu0I60XbLhV6cpAk9uhusiAeS2iNSYZ0bBD%2FlUaev0xEi4JLfnMCuZAfncd7pf%2BOV6Bztung30JyWAj28MwdBBr7CTEmAo0fSWP0C8w08Sul3CwP7LJ6KkWuvl338TWtxut%2Fcdvg4Z0QJ9Daf6wKqOwwetntczAzkq1m9XUqEHCq7YYiUdMzDhcomiUjkEo%2FxwrifZtDbPZ57EG9MbBtddVR4XImCSeGtW5sgCns9rGEQ4tnQBoS9Dqz%2F0psyn32Km5XQMdRaXPWdrSNXvqUkIdeFC7vA%2FJ8ljBXrhbFEW2ohhSjC%2B6l60EJvpRpNN6BHJ7kDlzXPZwQt5TI5iv3i0btvWJueMk%2BNJq51bUjnZVMw553PwQY6pgHX8o3wnonIsgFXAafaeQHn6PFocTIfqXq%2BWbtF53xe6ENBubrogoqG8a5CwUD1rrrFO0C7%2B9cYETC%2Bqwrmda9hoxeM0qlrZg0eXB37RXFn%2F3mnHE5lC607g1Ly7j5IWnbLS2QZm0L7yvbbG0yIV2vCC5%2Bo5ZfBC6aWcWbJvEOUSO%2F6D%2B%2B8ucsv%2BRiukyUQk9%2Bh9UqUGP%2BPegqMSeWAsWJYjDxzIOHg&X-Amz-Signature=31a6f400bda78febe25b1321406f2a39eb419c990bcf9007fdf6dfd9c311222b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQHUSRD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGxXrm3zAxgPi4d5vf14F2gevKs%2FU%2FHQ55z0zJri8lMdAiBoVWVx%2BsdHv3YFRJrofL%2Fs7An39KNN%2BqD2Oz5bL3ba6Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbYlzJbTWv0p2S44pKtwDEV3xc%2FaubIPITmiwjkrcPR5I88IiNvXS0cHQTvdgVYLVTmnRgtX5vsPJa0JDSg60GdoaNY2vVmgO%2BoUmGCOSh51uf49VfHxUEfUNHQW68SickECy%2Ft2iDLkYkDCRG%2B9RMNQRu56H0XDDVVsoCH%2BmMvgM8oP9GAO4kNzyf%2FtJnietiIGfMeS1O9AEmLBLnFyH0Y0xvIBJZBnfriKWSjmSpwWMYbENop0nXwMhMllbuDwvm8CE3HIJdr0hy9ZMdB6%2FYPQmNcVjCUrnl%2B%2Byu0I60XbLhV6cpAk9uhusiAeS2iNSYZ0bBD%2FlUaev0xEi4JLfnMCuZAfncd7pf%2BOV6Bztung30JyWAj28MwdBBr7CTEmAo0fSWP0C8w08Sul3CwP7LJ6KkWuvl338TWtxut%2Fcdvg4Z0QJ9Daf6wKqOwwetntczAzkq1m9XUqEHCq7YYiUdMzDhcomiUjkEo%2FxwrifZtDbPZ57EG9MbBtddVR4XImCSeGtW5sgCns9rGEQ4tnQBoS9Dqz%2F0psyn32Km5XQMdRaXPWdrSNXvqUkIdeFC7vA%2FJ8ljBXrhbFEW2ohhSjC%2B6l60EJvpRpNN6BHJ7kDlzXPZwQt5TI5iv3i0btvWJueMk%2BNJq51bUjnZVMw553PwQY6pgHX8o3wnonIsgFXAafaeQHn6PFocTIfqXq%2BWbtF53xe6ENBubrogoqG8a5CwUD1rrrFO0C7%2B9cYETC%2Bqwrmda9hoxeM0qlrZg0eXB37RXFn%2F3mnHE5lC607g1Ly7j5IWnbLS2QZm0L7yvbbG0yIV2vCC5%2Bo5ZfBC6aWcWbJvEOUSO%2F6D%2B%2B8ucsv%2BRiukyUQk9%2Bh9UqUGP%2BPegqMSeWAsWJYjDxzIOHg&X-Amz-Signature=6a9f29a0b5461093a144ad5e74843aa88d0c92e712f7000f9ac3b01736b8162e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G77TYQY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE%2FR1y31yrlnWjYdhPantMNvZHDUZrrrh3NBZURvqBG4AiEAp80fr1gh55jrUc9q9VUN%2BvDTU2zTjriy2VUtX2vo3Asq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJ92V0W5dRHRuzqKbCrcAxcfzMvh5BPYC%2B2xTvAUlJkgeWI%2B77kWsDDZqkGwMHTDotOfeAvNBoNFTL7DEJIxWLYQfhYe4gf4t96O%2FIYYyaiGYctRJYaPvb0AZsscI2NmAXr2RMaUx3kG8CuvEfFonqSF7ISZof8fmkKoJS9UWL5AgJ3%2BreLZopJ66cR4cfFpotoYUM3A9trrB3EEpwmxz29s6%2BuzJ3E8iXfxumYYNRAm8zoa6zM%2BuLbbyHldV%2Bz8B4G6xQ2YrledRW1X2DZdxh2DjG5Dp5aKSPQKk%2FLvTdAsn4nL0hc9bxkBuPoE%2B5URPgdZjSLZOliVhm0rj9oQCH0gpnAMEhyAnoq%2B94oPCRYIyWJfQeMw%2BgajpSS3OwrqJpmeyTNhaNih3V%2FiBbTQfoRop1Q4BallQ9kXX%2FHvJqCUwFU%2BBGs2PzEdXklykh8M1Krpzi%2FxKd250kbJ%2Fphr9YcvpNQ3LiQeNew3vYu%2FRh8OQuDmMovPeH8saysdqirE7tEo4xNUJnfZz4CDeptSP5MQARyGm5WpV6aWL6qspRlI4yWdywFOqz54SJCZm3kiNGnYHz4Tz8Y5O1gUjohWM10vLqSPhR0Y%2BTklqYdHS0MqfmywnpZMv%2BuMFo9JHBlCB86hADVJN45ThlbJMPKdz8EGOqUBsiMwxWgXuCVgQfCVc%2BffyuS%2FHcmiBiV8eBiKFvpiBm4hMm4DIIH%2BmiMZ7XnXSBpH%2Fp%2Fa1is7WmV71VrFGDVj8On9c87gJ7yBu5DCXhaP6fu4N6TLSt1lMSEChaG9vQ5DVKZzgN5oYS3KGhvi3Fx4ILDZQ8%2FrmOPBzDhbDMbhDwu2qk%2FWAVmsUXjZzdztsDJ5wuBF%2FksDSO%2FAbXJC%2BpwzUOuCqTyF&X-Amz-Signature=ea81b5e328289b5b6aa561d54b0f47f7aaaf829d0c322c8b3ea85d2d36d77815&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QESHGC%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEEDHI8gi6NQmdylS6WPTvPSMJKwoX70QXHwXoPD7TRpAiBEnDnQ2GyPUi%2BUeJxa3rFoKgkUTan1Mt6mXZhDaXIsnSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM6m3IeXCVJM4mnbZpKtwDtbbflpUR4TJ60mfo5LRZmtxaO1OX4KkWE8tIowH19f3VspN%2BJ%2F9JoZwGPnB6pdZmmf%2FyTmLp%2BAAIC87JrO%2ByLo9Zx9yFduqNvGrYCfsjRBih%2FNgBXvoL4HC4R%2Bmm7X9im3aahKPYVZnqkA9cjumSf65xkTfUyX0eAwNMymp%2F3NBSiuddZyDvQJcluuIVvujsN8bCc0%2FcKTacD1S0HezqcR7AteV6hKsSbvLrU8r7egl0QoLHR2JiUM7ibLmLPvTda9MylXxclVlt%2FEmXMIwtjMBYv3rYOj58HRB1dqVkO9HxLW1hwOjRlS0bD4qXs%2B80i%2BL6C%2BjtkDcjGetfim3xAmuYNfY9fOxZ7y41RoiKPMZe7ig1v5DxGSoeyCNQ1s7xwxsDAt9K4YhTGdCnmMa45FcrR%2B9el4vLph7VOkLlEImlTDZpwQw07pWgv8EaVrAhxX1pXPTaks%2FO5qIIHKzazEjF2q7FpOikYzQWBtzdDmqcCx0Z1T1%2FTbIHeTp9idWf6By0ZFAyhNu65F4NXD4%2B%2F%2FWwPa%2FzRf4kikaO9sWlly52gIm7%2Fht8uM5hVwEUInl8HJhdhs1I8gdmsbx9d%2FdKfD2KAsCfjZbtwUV%2BRoLVnqq3GLqEE2SlfqMj7g8wvp7PwQY6pgH%2FeEjodF75pKMn5FfADsDptneJBwcecUxoEfET4xBOsZXbXCbXzahksRhPbuN0Y60LIH0KffE2z%2FXD1Acl90zk0qFgO%2F3zjp9acJfZNuy9YevSnBzs264xztKHIgvhWgItgC%2BVOpAEAs10H9R4NHSzPULfSKRQKxBbI4SE8yL0kioHEpumZOe%2BozetRSymCUWXt2C1NGYz%2BnonR8U6myGR0P4PW0S3&X-Amz-Signature=b46a6b31a981688917ffcfc8c90d21080fdccabda86d48035339e815772218f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQHUSRD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGxXrm3zAxgPi4d5vf14F2gevKs%2FU%2FHQ55z0zJri8lMdAiBoVWVx%2BsdHv3YFRJrofL%2Fs7An39KNN%2BqD2Oz5bL3ba6Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMbYlzJbTWv0p2S44pKtwDEV3xc%2FaubIPITmiwjkrcPR5I88IiNvXS0cHQTvdgVYLVTmnRgtX5vsPJa0JDSg60GdoaNY2vVmgO%2BoUmGCOSh51uf49VfHxUEfUNHQW68SickECy%2Ft2iDLkYkDCRG%2B9RMNQRu56H0XDDVVsoCH%2BmMvgM8oP9GAO4kNzyf%2FtJnietiIGfMeS1O9AEmLBLnFyH0Y0xvIBJZBnfriKWSjmSpwWMYbENop0nXwMhMllbuDwvm8CE3HIJdr0hy9ZMdB6%2FYPQmNcVjCUrnl%2B%2Byu0I60XbLhV6cpAk9uhusiAeS2iNSYZ0bBD%2FlUaev0xEi4JLfnMCuZAfncd7pf%2BOV6Bztung30JyWAj28MwdBBr7CTEmAo0fSWP0C8w08Sul3CwP7LJ6KkWuvl338TWtxut%2Fcdvg4Z0QJ9Daf6wKqOwwetntczAzkq1m9XUqEHCq7YYiUdMzDhcomiUjkEo%2FxwrifZtDbPZ57EG9MbBtddVR4XImCSeGtW5sgCns9rGEQ4tnQBoS9Dqz%2F0psyn32Km5XQMdRaXPWdrSNXvqUkIdeFC7vA%2FJ8ljBXrhbFEW2ohhSjC%2B6l60EJvpRpNN6BHJ7kDlzXPZwQt5TI5iv3i0btvWJueMk%2BNJq51bUjnZVMw553PwQY6pgHX8o3wnonIsgFXAafaeQHn6PFocTIfqXq%2BWbtF53xe6ENBubrogoqG8a5CwUD1rrrFO0C7%2B9cYETC%2Bqwrmda9hoxeM0qlrZg0eXB37RXFn%2F3mnHE5lC607g1Ly7j5IWnbLS2QZm0L7yvbbG0yIV2vCC5%2Bo5ZfBC6aWcWbJvEOUSO%2F6D%2B%2B8ucsv%2BRiukyUQk9%2Bh9UqUGP%2BPegqMSeWAsWJYjDxzIOHg&X-Amz-Signature=4c0023028550ce748755d0092fbe3859929cdf6f43f2046aaa24839a0955d472&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
