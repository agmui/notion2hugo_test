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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MYMUBHC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2aPCATIyOxpjhY2PCAmeJJebp5A2Dz1mCMdqgfOHemAiEAiIzUSUC1Pjlstl32qGSY%2FW01hhS6m7Y0hezcu90m2aEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHl5LJMWSSVH%2Bnl4yyrcAwI6jJ2LpWnqeOZt4jQdecVbnXRxWGd2xcXIgIRRAKmqbpF86E3wvfL%2BQOJAecZHi1R3QcdzYR05NBBi%2F01doQYLHpUTsi7es9J8rhkZ1vcM664WMlGx4HIiwhqQGK4gnMJ68i3dm7KpdUp%2B03iw%2FYSMcckG38PKqtRvguwsnANGBa8v9fS%2Fua%2By0JodvlpPNopYdMS3LP2CMvfA3Tm5%2BA%2BD1u51OG1It8CHbYetcK1IxmKRFxfyOJJgeqhAmryoEDSkWOkk5WP45qK3%2FWqNF5oe5Xp9t%2BuY%2FI9SDGbkMFWiEFd3C6An9Qnw0%2B03bW3PBVZeGmAHwi7xh7P3sVqFyiFNoNyHbOlXAatepyo0iTskzUUkM2jGsVaJx6wFaye59gcMVlZh1VcM0dEdBCkx3fcyUmGuU2PvGZh9d%2Bo7p8AipaKkeIc6oXSCpSN1MifIKQ9IkhebVhQcdfJlK2JXAgDiGfnfQYUroQsTeNhKv0dLt%2FsjtSEcz801DkRNsVE9M3JwDvRxOtCrm8KQaMtHiN%2F7Rog5AMYJhxa8VoqDQ%2FJ3E36V6FEKkw%2Fahzb1JX5JGJLgbRxU9iIXdeGJnwHMOLNijIjGr4GidcvtTTGDP0afqLKHdA9gpOskCaE5MLSDhcAGOqUBgLTNFOx8FqNUf0%2FkaLX5TP5pYEeX7G9E2nICf77EN%2BhM%2FQkN2yVMg%2Bq0c4GJF7Ixf3nIqt9ioB0RQbUoVxmPQnvHF%2Ft6wLA9HkqlWWkRCzAFJZ51Yz%2Bb%2FIXT2oDxUSXyN4%2FLK9wVgptxCinDAlE%2B%2Bha7ngj0019I1UGHtoly36T3kg9Q%2Fo4vcqi%2FRYWS8swR2T%2Fz75BZwukc78Ye3Uzf0WeCAMoI&X-Amz-Signature=0dfa7231deb1a4ed539894a6be24a2d714c92d8fcb206f7857d09493068b7113&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MYMUBHC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2aPCATIyOxpjhY2PCAmeJJebp5A2Dz1mCMdqgfOHemAiEAiIzUSUC1Pjlstl32qGSY%2FW01hhS6m7Y0hezcu90m2aEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHl5LJMWSSVH%2Bnl4yyrcAwI6jJ2LpWnqeOZt4jQdecVbnXRxWGd2xcXIgIRRAKmqbpF86E3wvfL%2BQOJAecZHi1R3QcdzYR05NBBi%2F01doQYLHpUTsi7es9J8rhkZ1vcM664WMlGx4HIiwhqQGK4gnMJ68i3dm7KpdUp%2B03iw%2FYSMcckG38PKqtRvguwsnANGBa8v9fS%2Fua%2By0JodvlpPNopYdMS3LP2CMvfA3Tm5%2BA%2BD1u51OG1It8CHbYetcK1IxmKRFxfyOJJgeqhAmryoEDSkWOkk5WP45qK3%2FWqNF5oe5Xp9t%2BuY%2FI9SDGbkMFWiEFd3C6An9Qnw0%2B03bW3PBVZeGmAHwi7xh7P3sVqFyiFNoNyHbOlXAatepyo0iTskzUUkM2jGsVaJx6wFaye59gcMVlZh1VcM0dEdBCkx3fcyUmGuU2PvGZh9d%2Bo7p8AipaKkeIc6oXSCpSN1MifIKQ9IkhebVhQcdfJlK2JXAgDiGfnfQYUroQsTeNhKv0dLt%2FsjtSEcz801DkRNsVE9M3JwDvRxOtCrm8KQaMtHiN%2F7Rog5AMYJhxa8VoqDQ%2FJ3E36V6FEKkw%2Fahzb1JX5JGJLgbRxU9iIXdeGJnwHMOLNijIjGr4GidcvtTTGDP0afqLKHdA9gpOskCaE5MLSDhcAGOqUBgLTNFOx8FqNUf0%2FkaLX5TP5pYEeX7G9E2nICf77EN%2BhM%2FQkN2yVMg%2Bq0c4GJF7Ixf3nIqt9ioB0RQbUoVxmPQnvHF%2Ft6wLA9HkqlWWkRCzAFJZ51Yz%2Bb%2FIXT2oDxUSXyN4%2FLK9wVgptxCinDAlE%2B%2Bha7ngj0019I1UGHtoly36T3kg9Q%2Fo4vcqi%2FRYWS8swR2T%2Fz75BZwukc78Ye3Uzf0WeCAMoI&X-Amz-Signature=45a182c0a85c1ea26eb7bfea7207522ceedf49aa640266f470443e986993b261&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466453EJX7Y%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW%2B6HmaY7eaX%2FuYXCzJzWo3JiF47x3yjMNC8XyjaaDeAiEA9WnpiZQrOUNEG0hOA4hVVXOENOn7S9eR24qBguR6e%2Fgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGDYOawqpmfgouc2kircA4D5TB8nHE3eY%2BtStL33chgqv2TL9RioJgtDdsfkS%2BfXUDaWEIhJgqgjS3%2FjvYyYAAT%2FnPZhj8FWQfmqg0%2F7BGwpECsL08ZE2g11KQGLEcL2J%2F0woOHv57EZ6mXsp3F%2FV8eRzCleiHN7l14prs%2B86KfmzgRr%2FcT9NnO4NSyfBULBAUku2aNI9oegafvaNT%2FoLs6OTz4msxmCoAfkaXitajnBLIJsx%2BMi8v35nPmCtAq97TWmOIbbGZ5VHj6ZstzEFSvi%2BxFOdZbH8WGaYvxNagl13c2Vpgc1%2FXy8T7k9NR3w8N9Gd04rVdxivwjFwqTVNg6QHaOnMEQT6LerxDG16Vy%2FPHDJcxGlQfn1eHlQNBKv3BWgAumAi%2FsBenbr%2BB9FL8hE%2BPWyajyuKVaA84T7DA5rlwdapnKdU6z%2F1i3gHVngMQW8c%2BxmNl48VLmax53qiu7J6Q6tzW1RVBQPNdGtJmWGg6LxtJGADxH%2F%2B6TiZ8ZR5pG%2FNfANEYk0fTARbIeIL1ZqYCE5KaXnUWIYz3K0O17h%2FvmPJWSOVQxRstdXcQ%2BgxPaAY%2BgYIsnVJIMM2lONRQURCumoxWfeOtB40KK6TvwPfE5U2uFFI7GO8DrldLscRjHTulZ4W4Lby7iPMPeChcAGOqUBzO8D5hYz%2FONy4FTYThJ%2FX7RLy8jIFK3%2FWt9JgIhk4EdPILPXNDS0wMXcaFh2ZS15SZU2YrAvG4GCjhoLZ%2BA5jCB6Y6por%2FNeqM6xyOGRI3ElnQ0QhqgS2PZOy5s2d5xT8RAHNNp6qOKTonMQRd9FFQ3DbDmAynbMWe5yMOfjmL0AmGoJ9dkbvRg9ybFHtjLKCCMXO4uHLxewTiHF4GOkxHb6fwe8&X-Amz-Signature=82b26f7a9807230b50391505a28b72d2e1758ea13fb1448a19950d4864bfa7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5PJVBB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6xziXwANrgNmyNUcmK8R2pmDc%2Bu7WLWOZlOOxlvbKaAiAbdpjFJKmO9Y9HPo7i5w0azz74fYpVMwTbZiv93eK6cyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM3%2F3PydWUpmNwAi%2FPKtwDy3MmuOotvB4Ld85mxYoqtiiZFdhQ4T7nrbjJ8lqzeKqf8hryk7HJ8m2ajXfOFrKNwlwcnI%2BTEN0PT7kJ4znD8dARjkOuaokPs0x%2BEUsEqlU572na66j7Yql2YWWEXABQeA07PTyBCKarBLT7A94gRs7lMrAtoIJJK0dsX7veZsJZZTE01Fi3cVD5rfbIlmzGwY834tgaM1wFyTzridYAPTksPgVVRuxM0tyVvENVjgZFF1sG6d5vqxohUOm3%2Bh5AFxbGFhywx1xGkcr8Vw8uyBnUeas8CfnFJBtkLLWT0v%2FIh%2Fxx6UKmx5TW31VcPiW197ldI4odPm3QhXb7gzOleMofJODsgjuGPLvzQbf80n2MGsZu%2BqPpYAkPB92dXSoDlW%2F0jxg6XTFcwUBJ6nx3P%2BUFUcb7Y1dT2dlxADXczoKoQqSERXQZJgyJScRkjG1DrtmBrarmNGxcBWxuB0x%2B437On9qcZoS2449%2FYNm7Uxm%2Baegk0p7EhiOMmem6woJ%2FtzBcOHDJnTNxTuZIMStHuqS5WhtP2YB1IHKHZImzdSt%2BGI3casWWjSay7w3pxATjl2F2tk05v30U7n8zsLewbokfTFw1G%2BPqOYsnJlfPJBoxaTGoYmKDYDmyN28wnoKFwAY6pgFIiRFaEGvI4LugkiYoMsjCYvLlHrbdImAHN3Hs3TWNUhSwDs4newx96U484II2cHhjguQCqP1sEnAo6aQ3haHPIqAQqh2UqhMK5OpmiXapbLRj%2B0hI%2F%2F%2FizxjMITyLCROWyniAl91XzmSw3Aw9RMzgIUrbZ16Q9phBaicJeP0ELKh3Eyav30aEy7fsU0WTub06mFefwWpx6rdp5c19hwy4NSK%2Bgj6B&X-Amz-Signature=3b00d15ca9b92fd210f1f31f705319a84436fd00f728c2404a02725361407410&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MYMUBHC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2aPCATIyOxpjhY2PCAmeJJebp5A2Dz1mCMdqgfOHemAiEAiIzUSUC1Pjlstl32qGSY%2FW01hhS6m7Y0hezcu90m2aEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHl5LJMWSSVH%2Bnl4yyrcAwI6jJ2LpWnqeOZt4jQdecVbnXRxWGd2xcXIgIRRAKmqbpF86E3wvfL%2BQOJAecZHi1R3QcdzYR05NBBi%2F01doQYLHpUTsi7es9J8rhkZ1vcM664WMlGx4HIiwhqQGK4gnMJ68i3dm7KpdUp%2B03iw%2FYSMcckG38PKqtRvguwsnANGBa8v9fS%2Fua%2By0JodvlpPNopYdMS3LP2CMvfA3Tm5%2BA%2BD1u51OG1It8CHbYetcK1IxmKRFxfyOJJgeqhAmryoEDSkWOkk5WP45qK3%2FWqNF5oe5Xp9t%2BuY%2FI9SDGbkMFWiEFd3C6An9Qnw0%2B03bW3PBVZeGmAHwi7xh7P3sVqFyiFNoNyHbOlXAatepyo0iTskzUUkM2jGsVaJx6wFaye59gcMVlZh1VcM0dEdBCkx3fcyUmGuU2PvGZh9d%2Bo7p8AipaKkeIc6oXSCpSN1MifIKQ9IkhebVhQcdfJlK2JXAgDiGfnfQYUroQsTeNhKv0dLt%2FsjtSEcz801DkRNsVE9M3JwDvRxOtCrm8KQaMtHiN%2F7Rog5AMYJhxa8VoqDQ%2FJ3E36V6FEKkw%2Fahzb1JX5JGJLgbRxU9iIXdeGJnwHMOLNijIjGr4GidcvtTTGDP0afqLKHdA9gpOskCaE5MLSDhcAGOqUBgLTNFOx8FqNUf0%2FkaLX5TP5pYEeX7G9E2nICf77EN%2BhM%2FQkN2yVMg%2Bq0c4GJF7Ixf3nIqt9ioB0RQbUoVxmPQnvHF%2Ft6wLA9HkqlWWkRCzAFJZ51Yz%2Bb%2FIXT2oDxUSXyN4%2FLK9wVgptxCinDAlE%2B%2Bha7ngj0019I1UGHtoly36T3kg9Q%2Fo4vcqi%2FRYWS8swR2T%2Fz75BZwukc78Ye3Uzf0WeCAMoI&X-Amz-Signature=83757e0b2e035c916c46b5377fa357425b548cc2b12f6e3620f1b9f707f7d541&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
