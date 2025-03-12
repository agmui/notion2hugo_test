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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJLMXHA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGf1niOwWOcn5Zs32Gxd0FKl8Om9ilQklzpxaX6BRC2eAiAgHzBfInec8b4kZ41SqW4yMEa5bgrZO8kIce6EzyYXCiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnOctxy2Rnx4BCovKtwDtSHMbqCap%2FJctLpKeqDagshi9zQWGE7fdmvNw6rhbYYdGSh%2FxFOWW0eJJ9qb5rJDb4%2B7BHisSII%2FWFl3D96h7nTcsudfqN1suf7wNoanext561K1MB1aHaUWIyFV2lWHqPdiQuF600381ryM4mgYsr9umjZ%2FSVwqvueOaCtoxkVlL0YgdkAzZsMZBDizonNZOfz88OdjzjYhOo9rEsJxMHX0DSppK83%2BpX%2FoAjmYB07TRIM21KgP82KXUp5z9Ptocfg4kzIYwRd9Jcj9NGLMvAr84zMb7crN2gRpD9ioH%2FlJtMnJlgqUMaO3tPl9VBzYxujQNokFJ80uuVF8YxBQpcblNXsOUw4d5I1pRWdZzyux16jtFt3ugtQvICRWVvs4oVbHlINEgVaiAcUxs%2BoLiUVVLg3hQ%2FC64fIYDZ3k41GxO9zc%2FddXjReMNOurMez%2FPM8EwuvUcl5AR7x1woDUn70gjgpgYS7H21EhHFKlhmti2WY7HUh%2FCqsy9Qk%2BVd5mIFgVvZYvth4s%2BGyQJhPzB%2Fap1G%2Fw8dQYHgecgyB%2FjMkrVpxbN2H%2B0CdPhGJ8UiX6gi1d4mFGhPzbeF6oTjVZZRjJAcm3DMyMHmfUqPSJ%2BgZSdK%2FvgGWFgi1yQ44wsuDGvgY6pgGkfPpAc3GEifq5bCV3Q1DgoNn2LZa3Tl5F62MttDuYc8I%2FtZjRPdsW4gB3IPoAo7Y54cWx7M1Z5mXLrRM9aLXlgaLBibp0CkCzpBUAaVdi1QzYoLpMJm8%2BwV0dNbA2XQ6%2Fn1BqMci5T3UqyU16l9RATMusxh34NE8xk4V%2FQ7rnHP%2BgZGJZvaapjFOknSRxwUspfrJ2cfiCwHdP0DPqAxfbgnToxnRE&X-Amz-Signature=4226893104650ac6d810d34ca25fb1ac9a7083861c758a6b502d6660ff15b58a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJLMXHA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGf1niOwWOcn5Zs32Gxd0FKl8Om9ilQklzpxaX6BRC2eAiAgHzBfInec8b4kZ41SqW4yMEa5bgrZO8kIce6EzyYXCiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnOctxy2Rnx4BCovKtwDtSHMbqCap%2FJctLpKeqDagshi9zQWGE7fdmvNw6rhbYYdGSh%2FxFOWW0eJJ9qb5rJDb4%2B7BHisSII%2FWFl3D96h7nTcsudfqN1suf7wNoanext561K1MB1aHaUWIyFV2lWHqPdiQuF600381ryM4mgYsr9umjZ%2FSVwqvueOaCtoxkVlL0YgdkAzZsMZBDizonNZOfz88OdjzjYhOo9rEsJxMHX0DSppK83%2BpX%2FoAjmYB07TRIM21KgP82KXUp5z9Ptocfg4kzIYwRd9Jcj9NGLMvAr84zMb7crN2gRpD9ioH%2FlJtMnJlgqUMaO3tPl9VBzYxujQNokFJ80uuVF8YxBQpcblNXsOUw4d5I1pRWdZzyux16jtFt3ugtQvICRWVvs4oVbHlINEgVaiAcUxs%2BoLiUVVLg3hQ%2FC64fIYDZ3k41GxO9zc%2FddXjReMNOurMez%2FPM8EwuvUcl5AR7x1woDUn70gjgpgYS7H21EhHFKlhmti2WY7HUh%2FCqsy9Qk%2BVd5mIFgVvZYvth4s%2BGyQJhPzB%2Fap1G%2Fw8dQYHgecgyB%2FjMkrVpxbN2H%2B0CdPhGJ8UiX6gi1d4mFGhPzbeF6oTjVZZRjJAcm3DMyMHmfUqPSJ%2BgZSdK%2FvgGWFgi1yQ44wsuDGvgY6pgGkfPpAc3GEifq5bCV3Q1DgoNn2LZa3Tl5F62MttDuYc8I%2FtZjRPdsW4gB3IPoAo7Y54cWx7M1Z5mXLrRM9aLXlgaLBibp0CkCzpBUAaVdi1QzYoLpMJm8%2BwV0dNbA2XQ6%2Fn1BqMci5T3UqyU16l9RATMusxh34NE8xk4V%2FQ7rnHP%2BgZGJZvaapjFOknSRxwUspfrJ2cfiCwHdP0DPqAxfbgnToxnRE&X-Amz-Signature=7449d3ff55a5d04fc834b98a99ebf7a856c73a6409c7c808ad31ffbceb6a573d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFONTBM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCEVBNUp9zHdCch8i58yK4qi%2BRvxJNGSf8VWelGmDli7wIhAK9gZVmILd%2BP%2FsSoyl4sreWuwfDsB2mgxwAaLDZAALLOKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUThrPbBCXA9CCzHAq3APTHFm35yksa4Rf5NLnN%2FlHJzNrjyOYd7vGOnM8AHzDanHzRNp7zhOJnb3lU68dlyl%2BJCVfzfre8b%2FX6y%2BgtOK%2Bwg3a9tY5uK%2FmsvWOZnENcrJ9RY8%2BkMRB4mUhfw7%2Be3CCXEUBBJti7vnKwnW41GsouCgwvBVtvn5HWFwbeD2IfoDcAQWFAO%2BVzL67DzxgdWW%2FsUZ4FX59VPT479b4ZvALX%2BAYeG5uE7XjEv5%2FqEFCs7D7B11VJTDymVTxPY4RkUt7czsCa5pD4zorA4PLYm0Z2ERCQIrvRWeAM3TxW8LQZeRvUrPhwuNHm%2F7VZv1XDeECvHeASWZU%2FSS1myZG%2BZ2gYrY3c%2FSv1HPeTvuKzqKdWlnY9G0NwXpTWh2ynI%2Fas7ZX%2FLLl4OopNvz6twlraKAZtSsbfXeBn%2BcGKv0gonE32Bp5GA2oMBGQ2xILnv0PY7PytWvrg04lq9Z5Ki%2FkeJ07FmEN9B285VbjW5L5h0mKg5BhUHD3tiK2340c7NkOfwI4ECICg%2Fa5RsSazNn7ogN%2Fb%2FC4UpU3wnY%2BIYx6Bzqm9mzAUo1%2BwovR48J9eWHNSFppwzE9Z%2BCN%2BHoSapC%2BP%2B1IAnkHTwyxYep1UvfAL4JiJi3fXAQCGhNSoxCMujCw4Ma%2BBjqkARGChxdYoxD0uSB8TYjHNLFUN3qpubS6dz7kxUsX%2BIkldUY0qE3NjK5IqCL2qoO4IaJ1eHXrMGfTt3QEMfGi2Jju3IobQm%2FC7eYnzlYm3cnsRpaYwbfnV80rsP1bckfcMOoX8LjpMhrjwnyTdJyhDa%2BR8Hog7bMmeseiWNhWdAZ0bimoLGvtHETZipNc4AW7MSWb5y03U4Bz%2Bwm0iXzHBN2TeBDM&X-Amz-Signature=7ce65d82e996c708924d944e62e99f5231b7fb652d2d781747dfd6ce7cec9488&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX256NZA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD1p%2F2umR2KSJdp740%2FBF1vveKb48Aoe%2B0KuqSJtmqC9wIhALYw3pmlOaaf%2BZBRRcw4IlheV6fqNhZQyrZwrISxOZIwKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkoYPG3FYsLKsAUC4q3ANFl1hke1eg4ODeC8P5r7vIkSZCbWDdfsSVBscbAYrQHa8X0t1s5SCMM2t14Kyr95e8RjePNjwQ4dAQymuaORQcK4vpnUgaUpJLkUgyoJT7KnIH6oGJipJkEB2EEwMwEe3vpyzCn7HKHptDZOsPWQdFXDyIG3f%2FjDQTlTARUsqUPHkC7j1sZZ1iVa398efXuKlOILrTi2tVeTot0iQFnHNEFPBxs%2BM%2F7e81G0i%2BS%2FwAIBw5Z5fYxUxmkrElS01Fxs2Uw8b17NaH6zfuz6KrEp%2BBgA0Dpuw8p%2BaoIAfsbIIDU8ch4CO7C%2BG8VwS2knDs9xWdEmkDh%2FcaI%2BurptQFcDILX5d1JIg1GJsYqHlkwVLTdXeqcLLGtXBfw1%2F%2F5wGIKY8cePVFMPrXNh67Qhwy3n7glvZlNEZukH8055jgaMetPuCCdpn60V508y%2F8nwD5KCpInm8aLypRZgvk%2BN3Haz4P6rcETuQRKVavzTq6ciqRNaxnl6QtZJWYFqHG9aVGGiUPxAA4HcZHmjCPwtbOEWw0meMXOYpGMyH42rTUD2PwWhUEaYAcJ6N%2ByvrAIR4g7u9Fl9XwlD2wPQSBGEuiFvsPfJ8AAddjooe2cG25Hq3qBwxAlftey%2FYlQaytxTD738a%2BBjqkAdws9MlFBswOQbKTyofvG7wlWhmqtVSScmJLMhC%2FGgtQEkejeAywYzkhsrOZVF9Wd1fnKBxBvg6KFRMoHJSX%2Bv4eB3uUBkwZ7CAqnxa2jB00WYfYYezGpQWV54mmSdvQo98OJ7u%2B27FtFmQamMMNcGX0wBseWPezP17v2DDYQk451bCmoNfsKAAOo7coTr3d8b2DF6w03ZjFDlzVhsm7wy4tF2Ja&X-Amz-Signature=f8ab327e2c4330541017c58c4f7a64a95cca10800b27f00573dd11ff71eacfdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTJLMXHA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGf1niOwWOcn5Zs32Gxd0FKl8Om9ilQklzpxaX6BRC2eAiAgHzBfInec8b4kZ41SqW4yMEa5bgrZO8kIce6EzyYXCiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJnOctxy2Rnx4BCovKtwDtSHMbqCap%2FJctLpKeqDagshi9zQWGE7fdmvNw6rhbYYdGSh%2FxFOWW0eJJ9qb5rJDb4%2B7BHisSII%2FWFl3D96h7nTcsudfqN1suf7wNoanext561K1MB1aHaUWIyFV2lWHqPdiQuF600381ryM4mgYsr9umjZ%2FSVwqvueOaCtoxkVlL0YgdkAzZsMZBDizonNZOfz88OdjzjYhOo9rEsJxMHX0DSppK83%2BpX%2FoAjmYB07TRIM21KgP82KXUp5z9Ptocfg4kzIYwRd9Jcj9NGLMvAr84zMb7crN2gRpD9ioH%2FlJtMnJlgqUMaO3tPl9VBzYxujQNokFJ80uuVF8YxBQpcblNXsOUw4d5I1pRWdZzyux16jtFt3ugtQvICRWVvs4oVbHlINEgVaiAcUxs%2BoLiUVVLg3hQ%2FC64fIYDZ3k41GxO9zc%2FddXjReMNOurMez%2FPM8EwuvUcl5AR7x1woDUn70gjgpgYS7H21EhHFKlhmti2WY7HUh%2FCqsy9Qk%2BVd5mIFgVvZYvth4s%2BGyQJhPzB%2Fap1G%2Fw8dQYHgecgyB%2FjMkrVpxbN2H%2B0CdPhGJ8UiX6gi1d4mFGhPzbeF6oTjVZZRjJAcm3DMyMHmfUqPSJ%2BgZSdK%2FvgGWFgi1yQ44wsuDGvgY6pgGkfPpAc3GEifq5bCV3Q1DgoNn2LZa3Tl5F62MttDuYc8I%2FtZjRPdsW4gB3IPoAo7Y54cWx7M1Z5mXLrRM9aLXlgaLBibp0CkCzpBUAaVdi1QzYoLpMJm8%2BwV0dNbA2XQ6%2Fn1BqMci5T3UqyU16l9RATMusxh34NE8xk4V%2FQ7rnHP%2BgZGJZvaapjFOknSRxwUspfrJ2cfiCwHdP0DPqAxfbgnToxnRE&X-Amz-Signature=2b375a1afa76745e34e50c3c04b7f9341a890de91634f85b04235a90e862583c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
