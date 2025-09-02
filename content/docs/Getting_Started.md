---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4BFXSK%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElSUrj3YoJW7Qe%2B5XtkM9n0a36YLb%2BWRfrIxqq7izzNAiBNnhS3TBD9WgYQ2YVioHk%2FVAhvac%2FCP%2Fgn0Hvh%2B2ZBTSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMj4D1Gyav0wbh99dCKtwD5viYZ3pnyiyQLgYv8CqRnQg28BV6%2F7yoWkytbEn4qHduBKZxfzDThQ3lBmIV2g28%2FPSwEV18R2GLxyVue7VB7JnbYb96lZSc6YFHPIMDrsl%2BwGe8t2IyXlzDMoHhd0M4aeSQ%2BO94c%2BEgD2Cjzp8aKRlXSgh5u95o1UD3TA51MBkRHCG4DxHk3BGO8ulsGLm7xDugTZW00IM9ge1fA0ilcDqkhY9kHVLTYUprdmMrCXEb%2BSuAZHMVQX4%2F0I6qQ8viUaiCXYJOHRcBwysUbN%2Fgie0xyf9EOe0KiTecHQKpRM2eM41zU6xmLh%2FF14qd%2BCTSEG%2FrorHRGewxgitAXxey%2FhVpQa1Z1a0vknWgrdpBERf85YeDILBlnuMbxxqUha6d8XDpyTFNnFNxlDDGa%2FbRHGZ4nZDc%2FynweXMfQHccAK8ItsW86HTohJnhqvHWKFawx37vz6rcgtJMhTqLEJlBggJhfn6zi4flWIBKK%2Bn400ZxUGp%2FE6Zo9%2FJ9SyqCDTMxVMKomgFuoAkYH%2BTUQKCEvDCWhpcr5Hae0ATgnOSWhTSlOUyXsxMmDKxzuFv9bmbnc3K5r9UoQ4eY5rGob%2BgGrzCTfQGl2kGBCnjJ%2Bd2zz9OEBV0CiRHd3OItaEQwn4vZxQY6pgEP8KmoFWmonvlQbNVrzm0l9eI1FQmLap16VJzZAKd5Zs25T5swYT4NgzfJAUZGNmHRuy5QzGOcmtDucV4CSge4yNI%2B0z1dYR9QA12DAodPaj0l3EwrxXPug2wSGcYYClhbx%2BXwd39UdHJ7wph6MB2Eosc50HUdkWQmrNcL9S30JQkJFrtsuirgTUsw6gZEZI5s%2FeiRc8ZllTOKL18QTdQDjPl%2FjYbv&X-Amz-Signature=c53979a3fa0269e2e8dc762da015d19799f85bac1ea8111d25529aedc317ab8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4BFXSK%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElSUrj3YoJW7Qe%2B5XtkM9n0a36YLb%2BWRfrIxqq7izzNAiBNnhS3TBD9WgYQ2YVioHk%2FVAhvac%2FCP%2Fgn0Hvh%2B2ZBTSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMj4D1Gyav0wbh99dCKtwD5viYZ3pnyiyQLgYv8CqRnQg28BV6%2F7yoWkytbEn4qHduBKZxfzDThQ3lBmIV2g28%2FPSwEV18R2GLxyVue7VB7JnbYb96lZSc6YFHPIMDrsl%2BwGe8t2IyXlzDMoHhd0M4aeSQ%2BO94c%2BEgD2Cjzp8aKRlXSgh5u95o1UD3TA51MBkRHCG4DxHk3BGO8ulsGLm7xDugTZW00IM9ge1fA0ilcDqkhY9kHVLTYUprdmMrCXEb%2BSuAZHMVQX4%2F0I6qQ8viUaiCXYJOHRcBwysUbN%2Fgie0xyf9EOe0KiTecHQKpRM2eM41zU6xmLh%2FF14qd%2BCTSEG%2FrorHRGewxgitAXxey%2FhVpQa1Z1a0vknWgrdpBERf85YeDILBlnuMbxxqUha6d8XDpyTFNnFNxlDDGa%2FbRHGZ4nZDc%2FynweXMfQHccAK8ItsW86HTohJnhqvHWKFawx37vz6rcgtJMhTqLEJlBggJhfn6zi4flWIBKK%2Bn400ZxUGp%2FE6Zo9%2FJ9SyqCDTMxVMKomgFuoAkYH%2BTUQKCEvDCWhpcr5Hae0ATgnOSWhTSlOUyXsxMmDKxzuFv9bmbnc3K5r9UoQ4eY5rGob%2BgGrzCTfQGl2kGBCnjJ%2Bd2zz9OEBV0CiRHd3OItaEQwn4vZxQY6pgEP8KmoFWmonvlQbNVrzm0l9eI1FQmLap16VJzZAKd5Zs25T5swYT4NgzfJAUZGNmHRuy5QzGOcmtDucV4CSge4yNI%2B0z1dYR9QA12DAodPaj0l3EwrxXPug2wSGcYYClhbx%2BXwd39UdHJ7wph6MB2Eosc50HUdkWQmrNcL9S30JQkJFrtsuirgTUsw6gZEZI5s%2FeiRc8ZllTOKL18QTdQDjPl%2FjYbv&X-Amz-Signature=96668a780fd56470532485c3cc9d6685a4b43bbdef6450af8eb08a560cbc6b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4BFXSK%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElSUrj3YoJW7Qe%2B5XtkM9n0a36YLb%2BWRfrIxqq7izzNAiBNnhS3TBD9WgYQ2YVioHk%2FVAhvac%2FCP%2Fgn0Hvh%2B2ZBTSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMj4D1Gyav0wbh99dCKtwD5viYZ3pnyiyQLgYv8CqRnQg28BV6%2F7yoWkytbEn4qHduBKZxfzDThQ3lBmIV2g28%2FPSwEV18R2GLxyVue7VB7JnbYb96lZSc6YFHPIMDrsl%2BwGe8t2IyXlzDMoHhd0M4aeSQ%2BO94c%2BEgD2Cjzp8aKRlXSgh5u95o1UD3TA51MBkRHCG4DxHk3BGO8ulsGLm7xDugTZW00IM9ge1fA0ilcDqkhY9kHVLTYUprdmMrCXEb%2BSuAZHMVQX4%2F0I6qQ8viUaiCXYJOHRcBwysUbN%2Fgie0xyf9EOe0KiTecHQKpRM2eM41zU6xmLh%2FF14qd%2BCTSEG%2FrorHRGewxgitAXxey%2FhVpQa1Z1a0vknWgrdpBERf85YeDILBlnuMbxxqUha6d8XDpyTFNnFNxlDDGa%2FbRHGZ4nZDc%2FynweXMfQHccAK8ItsW86HTohJnhqvHWKFawx37vz6rcgtJMhTqLEJlBggJhfn6zi4flWIBKK%2Bn400ZxUGp%2FE6Zo9%2FJ9SyqCDTMxVMKomgFuoAkYH%2BTUQKCEvDCWhpcr5Hae0ATgnOSWhTSlOUyXsxMmDKxzuFv9bmbnc3K5r9UoQ4eY5rGob%2BgGrzCTfQGl2kGBCnjJ%2Bd2zz9OEBV0CiRHd3OItaEQwn4vZxQY6pgEP8KmoFWmonvlQbNVrzm0l9eI1FQmLap16VJzZAKd5Zs25T5swYT4NgzfJAUZGNmHRuy5QzGOcmtDucV4CSge4yNI%2B0z1dYR9QA12DAodPaj0l3EwrxXPug2wSGcYYClhbx%2BXwd39UdHJ7wph6MB2Eosc50HUdkWQmrNcL9S30JQkJFrtsuirgTUsw6gZEZI5s%2FeiRc8ZllTOKL18QTdQDjPl%2FjYbv&X-Amz-Signature=ebde46f4255d4fe730e7e79b4db885fd24ee522c7779bcc0cea2a31d02028cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W62BL56%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBctjOAGHrGXhFHra%2BPdAsePmssw2RfaK6IFv7OeduMOAiBFBi2EN0SfoigAHb5kIlLqWgdMApq88b8mbTVW8jDQiCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2wrasNYND6p4dbbjKtwDDQlM4hMIYxUwaMmp26J%2Be7ltiIuJ2ysmEz70JsJuhwx6h7URLIcY3LyCrg%2B7A2XUKs4MnotroaGK0FzH01nBbM1H6wGwSzZ0NZbPkH%2Bm0Zx1TwyaJ%2FObcZt96L48G96GUIW7uHcgK0epF2cY%2BBTaMqXZmvAwUy1JJ2isPeskpkpH33v4enhR%2FP1rUKqoUD2dJf816Lcp3gseSbxFixTjYb1vz7y3bzfXmMew5VHl3f%2BFvA6KHOFB2znsgC%2FFueLY%2BqeW%2FCG%2BYktl4CrntKfyIhF2Wx08CmWewTPOegYs5awS8kpEUt6KQaKQ%2BpMpn5TzOxVO7PtXWVvmeqd6fdfjLpjc2hMcqzMxnKPfi2mVoT1EZbwjudeC45%2FouMzucIox3M1iqQd6t1bIsK5cK9RLU9M5ZLfmEK5cOIT8ogI%2Fklhc6rrl282C8NfXwaJlloDNPtjizr7YeDOaUW3n96yBEDAiDtk28KK7DogXThnBgur3I1277oKHDj6DJRQnxSMM7o4a0vTnND7gZDkxx8vf%2FdM3bzJLQVEttLDkeDV4ef2MVZr3s13Xy5SwDRAihaeHHUwFHksBAjzhz9GQKewyEZpmUdwZEaNHjdNEMrlMVTmyagoHvxT7OEyZEUcwmYrZxQY6pgGh48pAajmYC1qmOOMP5jyI97OLAsivX6S%2F5I9TCAaovtIKxCNcUHme4XhtadmkEwxjeYwxstozBZbYQ1A4hcPRtiTn2QzpDpzH9vpF3V3dcEuxwz66muIN%2BE%2BhcQbW5h50wgjhvJ%2BgAZmS%2F1CWcPJDGGQYb6P79t2kPpDlpgceXJao4r78f7HiTzejsTBPXduiN3icjtL6lQn5W152TZ1IU9KoeAY0&X-Amz-Signature=d1dfd92af1520a7e40da2f2e9c046d76f0246993ec02771743aa927887672f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZFP3WF%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjgRntF692F9rBBdjTSlbpwbqlZquML03JCa1ssbrO7wIgYJ%2BteKDFIwBVJrHcNS3NfMC16rkyT%2FN4oiAIEmo1%2BLEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD5Y83AdaoxwT5qvKSrcA%2BbV6YyTns11Q91uWROmtNubDT%2FaleCU3hM%2BAJtovRel9DzmBGsCatDalcVsagIUxFsw1lLrBBBGzN7x%2ByGaoENGWOFEzejWDwUTC6pkyJQtHsvvwiHbohi89oH0vN%2BI2ygpcB1kxaRmnXG89W0JxrUE%2BlFz7p6DKsXtREJeKXTkiT7r2SL5p7lh5vJ2dYhQf7zsxF6cxLbKYP6e6emJYx62TSXfrlPzEsnURo3PJgFykra70ROzY3z%2FVpiuCDnUX1F7Nzjl1Jpn%2Fk%2BHTYe2GZuFMoO8gk4bsTAgnEv0u1lwiQQAH0mK5B74p7JszvzcvCQ0dHaa0il40MkRofLAj8OtT55ifKmV7FHRAaagVb7sG609jtWGLWd4bZiUDHlTiMvchBbq11lwEx39YgjE%2B7U3pdqUKr6lQHVOkFDAxTVmbot883b2pZ7JgCNudjuUWW3BSAivUcPln622wMGNp%2BiBiyGnM6D5JQ4nquD1vn2dylEbiSZY4NZeoK1f6%2FCmlRnv1M3N1M%2F%2FjHvX%2FXzAEP1gh5QehRz1NOol5e49kSIOn9lh%2B9TGGpF79FtqVtgn7T8o06jAtZ%2BFUpqteElnfQobD%2B2rU1ghHKoUZE9nrfqTheWPIPdq8O%2F1GxncMP%2BL2cUGOqUB7p%2B3fGWxlnCI3CYR1CIvNkBoCA%2BcZXv92E8r6krwIU2XS%2FsaW5wXMhFhb2achD%2BE1fBPztcCgVv%2BB%2FNXqB7ULcp8LKa3ToVRMF%2FOuG2nypIZA7F8hqE7hb9euDEJkyUoL2sc6yzVAaa8%2F6E%2BF%2FVcQk9skcAoQNhU9MelUSOD7hrDssQDJIvhz2YAi1yu4cGUtrEtGATPSl6QKAx%2FQtRFkiaCCOHd&X-Amz-Signature=77fab8d7b02697fcb2f77bb6bab3f89706d20862ebc70e7d0e1ec3379265464f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4BFXSK%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElSUrj3YoJW7Qe%2B5XtkM9n0a36YLb%2BWRfrIxqq7izzNAiBNnhS3TBD9WgYQ2YVioHk%2FVAhvac%2FCP%2Fgn0Hvh%2B2ZBTSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMj4D1Gyav0wbh99dCKtwD5viYZ3pnyiyQLgYv8CqRnQg28BV6%2F7yoWkytbEn4qHduBKZxfzDThQ3lBmIV2g28%2FPSwEV18R2GLxyVue7VB7JnbYb96lZSc6YFHPIMDrsl%2BwGe8t2IyXlzDMoHhd0M4aeSQ%2BO94c%2BEgD2Cjzp8aKRlXSgh5u95o1UD3TA51MBkRHCG4DxHk3BGO8ulsGLm7xDugTZW00IM9ge1fA0ilcDqkhY9kHVLTYUprdmMrCXEb%2BSuAZHMVQX4%2F0I6qQ8viUaiCXYJOHRcBwysUbN%2Fgie0xyf9EOe0KiTecHQKpRM2eM41zU6xmLh%2FF14qd%2BCTSEG%2FrorHRGewxgitAXxey%2FhVpQa1Z1a0vknWgrdpBERf85YeDILBlnuMbxxqUha6d8XDpyTFNnFNxlDDGa%2FbRHGZ4nZDc%2FynweXMfQHccAK8ItsW86HTohJnhqvHWKFawx37vz6rcgtJMhTqLEJlBggJhfn6zi4flWIBKK%2Bn400ZxUGp%2FE6Zo9%2FJ9SyqCDTMxVMKomgFuoAkYH%2BTUQKCEvDCWhpcr5Hae0ATgnOSWhTSlOUyXsxMmDKxzuFv9bmbnc3K5r9UoQ4eY5rGob%2BgGrzCTfQGl2kGBCnjJ%2Bd2zz9OEBV0CiRHd3OItaEQwn4vZxQY6pgEP8KmoFWmonvlQbNVrzm0l9eI1FQmLap16VJzZAKd5Zs25T5swYT4NgzfJAUZGNmHRuy5QzGOcmtDucV4CSge4yNI%2B0z1dYR9QA12DAodPaj0l3EwrxXPug2wSGcYYClhbx%2BXwd39UdHJ7wph6MB2Eosc50HUdkWQmrNcL9S30JQkJFrtsuirgTUsw6gZEZI5s%2FeiRc8ZllTOKL18QTdQDjPl%2FjYbv&X-Amz-Signature=93574028318b55a4355353e87930ab9bf600bdbc0d2808c893856fbb51007438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
