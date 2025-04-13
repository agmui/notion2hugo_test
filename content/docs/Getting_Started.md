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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY75EVNZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFtqieaNgQ5jvj6QT7p1y5V3MBDp4TdNlVTsP6WhbrwcAiBMIAJi89M5hETJRuH3YfVIi%2FZvVPzVrrIlPSiWJ%2FFYdCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9dz9tfSeAfEL6ZWqKtwDOe5PlZNILgxkJG6xe7d%2BEeMGOwX8vlGUmoc6z9gtbU0RYrX7B21PVn1g8KS0QnZsbB7IaIyZABgn87erJwnY%2BUAlhD5rQu0%2BuoIt7OWPmlvrBgUN8eJbAnJI%2FNW610aVHHh4owPmmgyrPqSgxwRYoTzrUs6KosENoQYjuLL%2FDAiaOeUXD%2BBHiit1ehs2ErBfCTGrydL%2B0%2FZQVrQMDuZJNGm0dXDpBMMswBOIY9F6s%2B68dv7wMxl2RMK429OB7VNeQ9nyIkat9bCnZ3xHeHQAFw1RMncyZO%2FLiBZdcyu7phjgxWp7oMgLveSDxGUJ08qrlKaZ2Zo6%2Fx05M5V5tAkmZfFCQt6QlkAUUCToneSY9lsTA3%2Be5W8gLy7Y4mn%2BYbc1H7HXteD73K1a0eeQoUQu%2Bo33HXCyiloFcAmo5KrtTsmRXimSoF2XTVBdqS6DN7%2FQLlvgqy1cgsM%2BymJDWjdENpMZvIWbchkQiIL%2B20tKPPbH65lCpnNrrNL1EIa2ZdW2VLgDjHQ8nUHNYjzqnyu3vZE1E5kW4VSPNMNvPBu882zvdQTLtbc6LrQ7lk4WBy40szDKXvefoOwmKcQq7qVgCFKAzBXz04W%2FjQG%2Bsxtz%2B9AMbMA3oKEMVcrsgKkwpL3uvwY6pgF5Sj0tHUM5MN%2FQXJkZheU%2FkfjhyhylPMdZ9Z1ku6HPKZn%2BG3xtR1%2B%2FbUObvZBQC8PBhyq53G0QSb4wiCMsJR0D4UMvNsqtWqKKpRJ1xGjkVVKLLEUK1JhHZrXrXEwrBA5xWAl2HKMWddshshO%2FMFp8d00TiV7%2ByMzLiMTris9ooTh1uP8Gq6rE7rh2K4lnaQc3ePOZLklAzoT%2BxJRFqvOUKD%2B%2F%2FpLw&X-Amz-Signature=b4b393ddf5cc5dd4d7b4e1246b815f397dcd365ea14e7ecae501637975cd8d68&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY75EVNZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFtqieaNgQ5jvj6QT7p1y5V3MBDp4TdNlVTsP6WhbrwcAiBMIAJi89M5hETJRuH3YfVIi%2FZvVPzVrrIlPSiWJ%2FFYdCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9dz9tfSeAfEL6ZWqKtwDOe5PlZNILgxkJG6xe7d%2BEeMGOwX8vlGUmoc6z9gtbU0RYrX7B21PVn1g8KS0QnZsbB7IaIyZABgn87erJwnY%2BUAlhD5rQu0%2BuoIt7OWPmlvrBgUN8eJbAnJI%2FNW610aVHHh4owPmmgyrPqSgxwRYoTzrUs6KosENoQYjuLL%2FDAiaOeUXD%2BBHiit1ehs2ErBfCTGrydL%2B0%2FZQVrQMDuZJNGm0dXDpBMMswBOIY9F6s%2B68dv7wMxl2RMK429OB7VNeQ9nyIkat9bCnZ3xHeHQAFw1RMncyZO%2FLiBZdcyu7phjgxWp7oMgLveSDxGUJ08qrlKaZ2Zo6%2Fx05M5V5tAkmZfFCQt6QlkAUUCToneSY9lsTA3%2Be5W8gLy7Y4mn%2BYbc1H7HXteD73K1a0eeQoUQu%2Bo33HXCyiloFcAmo5KrtTsmRXimSoF2XTVBdqS6DN7%2FQLlvgqy1cgsM%2BymJDWjdENpMZvIWbchkQiIL%2B20tKPPbH65lCpnNrrNL1EIa2ZdW2VLgDjHQ8nUHNYjzqnyu3vZE1E5kW4VSPNMNvPBu882zvdQTLtbc6LrQ7lk4WBy40szDKXvefoOwmKcQq7qVgCFKAzBXz04W%2FjQG%2Bsxtz%2B9AMbMA3oKEMVcrsgKkwpL3uvwY6pgF5Sj0tHUM5MN%2FQXJkZheU%2FkfjhyhylPMdZ9Z1ku6HPKZn%2BG3xtR1%2B%2FbUObvZBQC8PBhyq53G0QSb4wiCMsJR0D4UMvNsqtWqKKpRJ1xGjkVVKLLEUK1JhHZrXrXEwrBA5xWAl2HKMWddshshO%2FMFp8d00TiV7%2ByMzLiMTris9ooTh1uP8Gq6rE7rh2K4lnaQc3ePOZLklAzoT%2BxJRFqvOUKD%2B%2F%2FpLw&X-Amz-Signature=61557ffff241ac7ab36288b990e2e38d65f6afd9de113efa2f12ce047f8f9a08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDCQJZS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICN9rFhH3jIjz7mLLgKlQjF5jtq%2F20WptjSYodxvr%2FOLAiAlEXlmN7QRT%2BII037Iu%2Bh2%2BMiIl6v4Yw61EAYKxXutGyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYdM%2BkxnnnK1v3kUgKtwDBfK6BPptmMn4yC3bxY0uf5TwpNKcSiIFATUiuzSOWr3L0%2FDXcPa0HJVem4mYf19z5xkKfme%2BVjEy0L81wwTUEnVc1l9qShxQehA5QdremqJdoX6dpAXnsFzyb9ZASou7SFf6NVK2tkSgTwkbKrRQbnAr%2BVxiGeOqEf3R%2BRLlyOUmt4zQC9gcYpapUslolRwXoiUDybeCaLYZ58we%2BTDSyT6AGcvyPyS89rVCwO0MoBuowtyXI2NQEOKF0X8CEU0ll2%2FWB%2BbdO8j3TUmigQdvHvPouUryqh085CUYD7UgQFESYBfDgpz2C8VDSIHEGnDbyp4DFV17Aia%2BExa%2BrrNct1cuJiykt0TscGknhQCEfwv4RByEf4nD%2BP8EqGbMADmAo4SQqET1Nguj2j6X8M5uR0UxuorrsvPnWFKBAtmbK%2FAjcDwUT5g3OWX8iniYhmSbkvksM83zcDfwsLJEYtOt%2BP%2FxFGexWtOwDhjecNLZ2nlY1uWpO0vGHF9rwsrQUBmptIhiwk1H9xnmsry%2BljrCWBI5%2B5JtKywiV5OHAFEjLj38mPv%2BP244Yk8ux0VhddvqGBW9rg%2F0Y%2BFqqFvxTloOGWmj43eenv0EEvNNak84KErSrjycmpLeBRUXGEIwor3uvwY6pgG95RgH3kPJfaVR0fTKcSaagZu59yd5czMOKdPIo2leSi4HcI567mjPlZS1vTR%2FWJV9WtQrccHn9NCKJlVezjMaIQFvtgqDOz5rd8pa4TnwaeANZlTR9btwiG2VWjrUjNt60p%2Bp%2FGhD%2B0N3K3eLV2RbDs7fs9ncVdKvv99vuw3XiVWMnDlHkVqATWbeqo3etQ0pXaG5tro7UP%2B0v36SBxDv8aZJ8zH2&X-Amz-Signature=d412ff71bdea0b32dd5c23317c4cb3b5c404fd6915625c63229ef92822cf3b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3GUIVV3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDPsYvhLSBaBpHkFaFFYovrGBaucV2eRSx0zx9LJN6VEAiBHp0kLwol%2Fc%2FJKacdq8jPGLEfWd%2B6eyDY1%2FUN3oU7OniqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGxEsBUXTajoGNB7KtwD2Z2ceyoTbAFLFs%2FpAn56FKfS9t7zNlxeCYjNyKfPyQVAbcB29%2FqlKYb8GN37%2FHLO3%2Fb4G1Onxm1yIWvexKGubL64dEm%2BJ%2FkbPQu4ZnsiwNv%2BQWC489NY8sblGaq5JePfLwg3j08Epm3mpkSTctS9vvtjODX9YlvYqXQjX2rYkKdqUFK6fWVaDWvwu0hDKaEdlNeaZly3ojkGYOKk6XHWHox8p%2FyzgxZ8wbxIopQR8UK1jxmnhhIkbhLn8rf8Gwzevwk%2FSHzQbs8n2%2BPiaq%2FG8m%2Bc9kXZ%2BR0XNWOBhAIcmbaWUgu6LKK7iAFyc5jszUFyX07fh1yUodmkXqTQv6ZZmX6HR1pt%2FcTmpsW4XW8xKgVXnxVONpw%2FuAaQpX0vTgLL9v%2BaKFdGQT4pL6C%2FKQ04IA%2Bx8Tdk1AqzIfWsz0q7OWODxMlWtA0nFW5PPgSP5aBKcqRt3CDaS3fVgznVcsNcW%2Fr%2F02g0PVSDCWSig%2BxU0fc4acJ5oBIbIE3%2FEjRmdL%2BuhaFtIkqCnkuk2m9XnZsy%2B3vgXK4xoFZSvHLFvs34voOqv1YXgTZFpUeqmyExjqDmJ7X6QE2U2i0OPCo6WeXjBdOFUJKv7pXjKRucKjl8sdviLj96Dc%2FS1B3Q06Qw1L3uvwY6pgFJouNMugVmlpsHGo7Dcen2WMKPtfHlirIj0VRumI6aGsnfhXBzA2F0LXbg3lyqm%2B0ujnAYuWvjpAuP4fvrNjzq2K1K8eOw1YPQw2yj4jggQ1xFbRHMt%2BVw5W1J6LhDTBPjfmTrKohNyKx6FH464eYU37suTfoHiUVhUhE3CG8SL7RbC1xwcEu3aG26Nt%2B7UxcKFwYe%2FrgVBO4psgaENWZwBWorayMl&X-Amz-Signature=dc3370810d0d37efc32c0e29460f6d7fafdb343eb49522ef2f7897b643cad05e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY75EVNZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFtqieaNgQ5jvj6QT7p1y5V3MBDp4TdNlVTsP6WhbrwcAiBMIAJi89M5hETJRuH3YfVIi%2FZvVPzVrrIlPSiWJ%2FFYdCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9dz9tfSeAfEL6ZWqKtwDOe5PlZNILgxkJG6xe7d%2BEeMGOwX8vlGUmoc6z9gtbU0RYrX7B21PVn1g8KS0QnZsbB7IaIyZABgn87erJwnY%2BUAlhD5rQu0%2BuoIt7OWPmlvrBgUN8eJbAnJI%2FNW610aVHHh4owPmmgyrPqSgxwRYoTzrUs6KosENoQYjuLL%2FDAiaOeUXD%2BBHiit1ehs2ErBfCTGrydL%2B0%2FZQVrQMDuZJNGm0dXDpBMMswBOIY9F6s%2B68dv7wMxl2RMK429OB7VNeQ9nyIkat9bCnZ3xHeHQAFw1RMncyZO%2FLiBZdcyu7phjgxWp7oMgLveSDxGUJ08qrlKaZ2Zo6%2Fx05M5V5tAkmZfFCQt6QlkAUUCToneSY9lsTA3%2Be5W8gLy7Y4mn%2BYbc1H7HXteD73K1a0eeQoUQu%2Bo33HXCyiloFcAmo5KrtTsmRXimSoF2XTVBdqS6DN7%2FQLlvgqy1cgsM%2BymJDWjdENpMZvIWbchkQiIL%2B20tKPPbH65lCpnNrrNL1EIa2ZdW2VLgDjHQ8nUHNYjzqnyu3vZE1E5kW4VSPNMNvPBu882zvdQTLtbc6LrQ7lk4WBy40szDKXvefoOwmKcQq7qVgCFKAzBXz04W%2FjQG%2Bsxtz%2B9AMbMA3oKEMVcrsgKkwpL3uvwY6pgF5Sj0tHUM5MN%2FQXJkZheU%2FkfjhyhylPMdZ9Z1ku6HPKZn%2BG3xtR1%2B%2FbUObvZBQC8PBhyq53G0QSb4wiCMsJR0D4UMvNsqtWqKKpRJ1xGjkVVKLLEUK1JhHZrXrXEwrBA5xWAl2HKMWddshshO%2FMFp8d00TiV7%2ByMzLiMTris9ooTh1uP8Gq6rE7rh2K4lnaQc3ePOZLklAzoT%2BxJRFqvOUKD%2B%2F%2FpLw&X-Amz-Signature=f3b5f4163dd14c78b3b981a1a34604d51fbd1b014d804e4f0d63c6e9d69163e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
