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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWCLE6F2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHUUXfa64qz%2FN3ORP4w2q5SoSV%2FB5T0TVcA2kGfnsnDAiEAw1IozBZE2rYr4FBa%2FW6%2BU%2BTRyH%2BxZ%2FNTFPa5dBQEr%2B0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLceqWCo8rEolye3ByrcA5TL0j1a4GI8efhOSU0%2B6WRTMLb17ZwsyOilv%2BTsyHJg%2B9s0m2uo%2F8Ly1kn3EZr0F9G4DkA%2Ft0qWWIkdD4ScJaPnxlsFwwGdmOFg%2BFZ5MLTELDCvxNKccak%2B35wEbPJu29b4vsonzdBG6gulSTElhBj1wd5NZd7%2FFlR9WqMVYv%2Fsrut7HSzop9tKbpiP3%2FscZWQOnioz86kYnbbiJ6Xj3yE5dcZYpyHbOjDCm4Nqg%2BaiOdqwthb0jaDKZL8IMGF3Cs7SOjcqGpEGk6NEbMzqE3FZDDC5UzolIrZrkiEU3V7mxP%2FtveehoZGDCtWwYhUlJHVbrPVAoVt1JkaLltH8mC1UHpW1V54GW6rgl1%2BZjMNVDQgh1gP74axshcq5uHsy3uNPnQCsgbJ22WMdg7RU%2F30J%2Fojp8Bjxt2z32jnGRQLqIahFVMO1vK1SZG9LXjp7EoJudYU723V1CfqDnE61O7NF2dQeQ3HjtzVw20BRTCwAO9KL32qPzAjFUpoDK3Z4FSZpHeGcJ2e2vDm0OBQalv8D0W6XjzupHjzLERHF4xfyL9Dzg80EsThtNePiNpBc8IayoxtD9Qia43ACKcmaFN9q4%2B9WxuNG71VBRYD4Gs6S8f2FcaFiFe9hAHymMODqisMGOqUB6tXpKSvRN3vW%2FETEl2Uswisru%2FaiDv8Ruyr5%2Fjsss7XYN3mXqhDIIOnEnYtOx262Qg5gLX1rR6TVlTnNQg4wh86RIejDfQZaFRcSfDiYj2wGDbG745bOhHAPo2zlsUrDAdjn7g7bAeEiGk22ssqH0qBNRNCU82%2BCaqpM0D%2BhBw916z5A1t1L0EO2X00%2B398wssG4GjmdJUUCVhR2UoIPl1g3vPGx&X-Amz-Signature=1570d0282ec670c22ed3115471ff322d713f17fa8b78dd9c7a18ea8007aa49f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWCLE6F2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHUUXfa64qz%2FN3ORP4w2q5SoSV%2FB5T0TVcA2kGfnsnDAiEAw1IozBZE2rYr4FBa%2FW6%2BU%2BTRyH%2BxZ%2FNTFPa5dBQEr%2B0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLceqWCo8rEolye3ByrcA5TL0j1a4GI8efhOSU0%2B6WRTMLb17ZwsyOilv%2BTsyHJg%2B9s0m2uo%2F8Ly1kn3EZr0F9G4DkA%2Ft0qWWIkdD4ScJaPnxlsFwwGdmOFg%2BFZ5MLTELDCvxNKccak%2B35wEbPJu29b4vsonzdBG6gulSTElhBj1wd5NZd7%2FFlR9WqMVYv%2Fsrut7HSzop9tKbpiP3%2FscZWQOnioz86kYnbbiJ6Xj3yE5dcZYpyHbOjDCm4Nqg%2BaiOdqwthb0jaDKZL8IMGF3Cs7SOjcqGpEGk6NEbMzqE3FZDDC5UzolIrZrkiEU3V7mxP%2FtveehoZGDCtWwYhUlJHVbrPVAoVt1JkaLltH8mC1UHpW1V54GW6rgl1%2BZjMNVDQgh1gP74axshcq5uHsy3uNPnQCsgbJ22WMdg7RU%2F30J%2Fojp8Bjxt2z32jnGRQLqIahFVMO1vK1SZG9LXjp7EoJudYU723V1CfqDnE61O7NF2dQeQ3HjtzVw20BRTCwAO9KL32qPzAjFUpoDK3Z4FSZpHeGcJ2e2vDm0OBQalv8D0W6XjzupHjzLERHF4xfyL9Dzg80EsThtNePiNpBc8IayoxtD9Qia43ACKcmaFN9q4%2B9WxuNG71VBRYD4Gs6S8f2FcaFiFe9hAHymMODqisMGOqUB6tXpKSvRN3vW%2FETEl2Uswisru%2FaiDv8Ruyr5%2Fjsss7XYN3mXqhDIIOnEnYtOx262Qg5gLX1rR6TVlTnNQg4wh86RIejDfQZaFRcSfDiYj2wGDbG745bOhHAPo2zlsUrDAdjn7g7bAeEiGk22ssqH0qBNRNCU82%2BCaqpM0D%2BhBw916z5A1t1L0EO2X00%2B398wssG4GjmdJUUCVhR2UoIPl1g3vPGx&X-Amz-Signature=2321a0720644108b7106369d150943ce8f3a62883661791f6e19dc1df067fc21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWCLE6F2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHUUXfa64qz%2FN3ORP4w2q5SoSV%2FB5T0TVcA2kGfnsnDAiEAw1IozBZE2rYr4FBa%2FW6%2BU%2BTRyH%2BxZ%2FNTFPa5dBQEr%2B0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLceqWCo8rEolye3ByrcA5TL0j1a4GI8efhOSU0%2B6WRTMLb17ZwsyOilv%2BTsyHJg%2B9s0m2uo%2F8Ly1kn3EZr0F9G4DkA%2Ft0qWWIkdD4ScJaPnxlsFwwGdmOFg%2BFZ5MLTELDCvxNKccak%2B35wEbPJu29b4vsonzdBG6gulSTElhBj1wd5NZd7%2FFlR9WqMVYv%2Fsrut7HSzop9tKbpiP3%2FscZWQOnioz86kYnbbiJ6Xj3yE5dcZYpyHbOjDCm4Nqg%2BaiOdqwthb0jaDKZL8IMGF3Cs7SOjcqGpEGk6NEbMzqE3FZDDC5UzolIrZrkiEU3V7mxP%2FtveehoZGDCtWwYhUlJHVbrPVAoVt1JkaLltH8mC1UHpW1V54GW6rgl1%2BZjMNVDQgh1gP74axshcq5uHsy3uNPnQCsgbJ22WMdg7RU%2F30J%2Fojp8Bjxt2z32jnGRQLqIahFVMO1vK1SZG9LXjp7EoJudYU723V1CfqDnE61O7NF2dQeQ3HjtzVw20BRTCwAO9KL32qPzAjFUpoDK3Z4FSZpHeGcJ2e2vDm0OBQalv8D0W6XjzupHjzLERHF4xfyL9Dzg80EsThtNePiNpBc8IayoxtD9Qia43ACKcmaFN9q4%2B9WxuNG71VBRYD4Gs6S8f2FcaFiFe9hAHymMODqisMGOqUB6tXpKSvRN3vW%2FETEl2Uswisru%2FaiDv8Ruyr5%2Fjsss7XYN3mXqhDIIOnEnYtOx262Qg5gLX1rR6TVlTnNQg4wh86RIejDfQZaFRcSfDiYj2wGDbG745bOhHAPo2zlsUrDAdjn7g7bAeEiGk22ssqH0qBNRNCU82%2BCaqpM0D%2BhBw916z5A1t1L0EO2X00%2B398wssG4GjmdJUUCVhR2UoIPl1g3vPGx&X-Amz-Signature=266d93c793ffa7f5bfcac644d2be89241b397bf48ab2cdec90ca827bbe921716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6AYPBD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5Ab8QhGnRFOS8AOhrjHZTFjbrGIDDEG7KXFzZdxsjjAiEAtlLx%2FPoJn9Y%2F9hoOOTQON1%2Fy0SmOrLujGP0uHlj9I8gqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtWBvjCD7q%2FImNXmSrcA%2FQnYOomZ0ICu2wZ54%2FWOr9Ok0LDhiHxkbUKYhmdpIFS3B9pYcWtd%2BRHe1%2FzNafnWW0P1Ivy9LnxQa4mnPzvC82zhNlpL5Tdc0Moq82Fr%2BzGwksqGnqYm7CeBZv7ddJrES%2FmL1Ix4uGH9QGzmtKdBpctQcULNsz9ghqwZftAQQ0upxQ7CflvM8NYXA6taIjormgDJnpNIeMSS%2BDtB5lHSHVravdC1wmxxlU9lqCLT%2BIZlXAXfjtoHKmlOYKcSPMZdIrR3lKsQPOnOW%2FQkyZTj3MYb9zdTDaMbOAW39%2Bv5phNx9h9s0RJyNW9fmm%2BwSigLozRbmhFs%2FFf%2B41CIH%2FdurmRpHgxCIUGpqP%2F5%2F6mNUCjQ9Vldjjeqv50Upxcj3uGejW2xBr8Og8bzAty6eiSXn62L%2F9Mkc01MSXZiJVncmJ73u3iZ4XwgfxK6F7YCo0qCGu8hej1yWiHRkxXaZ7GxApexjwq77gMxydRnDy5h39fY34xikFSIJaM0f3fEFRKcxtMHrpS%2Bfsf6qqZ3WMMD0ZuiSv8o%2BJfJcLkEBdOCAN47zb269RTWRbIxbEmbqg7dn7hSAR%2B2gUwdPodFfZJMfydzaaoBNlr6qorw%2B3OoUyyJNdq3oa8fP1kJObwMJnrisMGOqUBzhP1AaEEhoFLMt%2BDg8BStzC1WVKKsInmpmAopdatW5SCF4G3CoFPZT9pBR6Zciyv1HtcAlLUAPMzQfCIFoGX5e4Nug35scJoYuZ2r4JRTSkdnq8QQwdePlyEYjvJSaJRsbTvI8lUPUkc%2Fe5wf1R5SXkK%2FV4CX22IwrgN6Xdu8%2FgIR1n3XKdSTg4h3uRaY%2FxUMv8Cms%2F9rwSgES7rB9wEh%2FIGS1hM&X-Amz-Signature=504a5d26c348b111e4216c4ac5d5f8745ef64a79f96c1ad4e340c09f103ad1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NGE2R4%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChKmQ5ySUxEqZMqnxcWJEksSADrAYYNxe1PuJn3iZ%2BsQIhANvU9CRfQc8S%2Biu7TI4pMT24Qn2fOwK5aOhpCl5eEsG2KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzECOg8hrlZls8tKzEq3AOr71ceLDe%2FylhTQVIdh2hkLfupZJT3vjWqTZa6ENRMSlExOl3KLO1K%2BxrNLdkf28B7%2Bx6znfzPXno6URUjSSy7qGb6g6MdNsgV711fSaJjrkWfeVX9o1Qrms2kS4bhlv38leJaGVsymO4HhLblQ2Rx5AkjWOnUjLjhm0X2wTjF5R%2F2btG3CE%2BxEYM8NY%2FPwIxditANc1P88Psw%2Bb9EJL3frDZi6DLQhVD%2F83r8qh06kcfIRZ%2FBqYMDiezp%2B%2F5aW1w0pLI2aGtU%2BQ2J8BYAf3aYEx1gDk9LW52Zq8%2FLxiMcoPyo31d4b9y2TkyS7k2a62NB3ufpbZEToTHxiXt1IqMyU%2Fe%2F4MeJxkYgBlOmiGpQ6Vl%2FsJHILPf38AgZh7CckABKwuXPfyMaapvFkocGVuswuRWdYypd7m19eBdYOshHBThAPq%2BWs6ZwLU73i58QF9OnYEJot2Ddpefdzyr8WncUWPYJgL3dcE01sCoDQew27BZo3%2BB1mgsRm7LCj%2BTPAiOphfj5W%2Fmk6BdNQ8CUD5MJjOKVnS74Sygdr9k%2Byp5J3PEVO992SvJi6V4Epf69w%2Fm3IvQDzgF9waP%2F0sgBN1LUokmgRzJprQPzUKOU9OHNixYLu%2B4SZExqjWTIEDDp%2F4rDBjqkAajZ5Z1jbVh2PLcfUelfjERXE43IXxRVfRRCY%2B6ubwFcT3GH5rh26zTb%2BwtI8KzLZ9baMG1ByIShJr9lhwf4oFz9J%2FTZFXfVNR%2BplFyMzSn2Ts7dogJdrEOJKgH1C3U%2Fo6xlnNAbJ74vTMR5DzZBUFYlwT41dwyrNvvnzWEufzXhESBBtcPlaaxntwxw3niEfJxn%2BZ8GrRW4tyhTx9Um6M1n7M0e&X-Amz-Signature=d8d2ab17266630379a54cfe337ec1df92c3b0bc72d6bd93b1d8b25c3fab2f2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWCLE6F2%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHUUXfa64qz%2FN3ORP4w2q5SoSV%2FB5T0TVcA2kGfnsnDAiEAw1IozBZE2rYr4FBa%2FW6%2BU%2BTRyH%2BxZ%2FNTFPa5dBQEr%2B0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLceqWCo8rEolye3ByrcA5TL0j1a4GI8efhOSU0%2B6WRTMLb17ZwsyOilv%2BTsyHJg%2B9s0m2uo%2F8Ly1kn3EZr0F9G4DkA%2Ft0qWWIkdD4ScJaPnxlsFwwGdmOFg%2BFZ5MLTELDCvxNKccak%2B35wEbPJu29b4vsonzdBG6gulSTElhBj1wd5NZd7%2FFlR9WqMVYv%2Fsrut7HSzop9tKbpiP3%2FscZWQOnioz86kYnbbiJ6Xj3yE5dcZYpyHbOjDCm4Nqg%2BaiOdqwthb0jaDKZL8IMGF3Cs7SOjcqGpEGk6NEbMzqE3FZDDC5UzolIrZrkiEU3V7mxP%2FtveehoZGDCtWwYhUlJHVbrPVAoVt1JkaLltH8mC1UHpW1V54GW6rgl1%2BZjMNVDQgh1gP74axshcq5uHsy3uNPnQCsgbJ22WMdg7RU%2F30J%2Fojp8Bjxt2z32jnGRQLqIahFVMO1vK1SZG9LXjp7EoJudYU723V1CfqDnE61O7NF2dQeQ3HjtzVw20BRTCwAO9KL32qPzAjFUpoDK3Z4FSZpHeGcJ2e2vDm0OBQalv8D0W6XjzupHjzLERHF4xfyL9Dzg80EsThtNePiNpBc8IayoxtD9Qia43ACKcmaFN9q4%2B9WxuNG71VBRYD4Gs6S8f2FcaFiFe9hAHymMODqisMGOqUB6tXpKSvRN3vW%2FETEl2Uswisru%2FaiDv8Ruyr5%2Fjsss7XYN3mXqhDIIOnEnYtOx262Qg5gLX1rR6TVlTnNQg4wh86RIejDfQZaFRcSfDiYj2wGDbG745bOhHAPo2zlsUrDAdjn7g7bAeEiGk22ssqH0qBNRNCU82%2BCaqpM0D%2BhBw916z5A1t1L0EO2X00%2B398wssG4GjmdJUUCVhR2UoIPl1g3vPGx&X-Amz-Signature=4a673b86eed6be32507c8c09a9d81c4083b67fb35fe5aa4f2f5dbe9fe97e1677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
