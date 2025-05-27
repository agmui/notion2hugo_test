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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7IZJP6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk18dm37o2bC%2BoBMVvs5sOtCd29ACaDQOM3diHXw0K5AiEA0U%2BF2hGYU%2B3e35Sz9EsHoK%2BDly06pi5QDsid22ev4OQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJEP9r5iIQseDHnUSrcA5szvuHaMdMGMglTfzUVrMbObAheV9QLJMEdwQHgv4WCARicF%2BfGfbsXor1Ia%2BN1AXvKGbzRWbIwL96W6qmvEr5gp2HGoa0onDVt6hstLX84wbjoPP8Q3FjrkALfn0XV%2FNY8qqUL516FMLswwkzmlDLfpr%2FEuKTBBwFA%2BH3RWxu6A5WG10zkI4kuRbq%2FN29olEusyCpNI9LONmbEJpyCPOiybgOhgAX39JqWtgm2CJ1X9wdn0YBualVQDZEWhiJKgT8rMmJOGhkAU0Qkr93otJW%2BDOEdkhSAtjHx7o8LlLeXnvZ9pJVSdzNfSf%2Ft2xusxhF3o05V5w2vozEV7sI1mbfW8SUXKAUhBEv4KfH1S%2BvwZnqSeFOd4U96e802SDxJXlwn46fvhL8DvZOgicZJGqBASNe0mHnixOqWeBDro91MaH86CbZK%2BHqS33vWnZKeWLc19PjwKLCpZmL4IwiLMpZCq955EYL3koyIrbXUCr7VXgaX%2FmEA3fbI%2FOeSyTRnt15VjuiKI9n54YODg%2FjuOnZGIj%2BQeMFXr4ZAKtbrPES5DlIVJgCy3ZxaAhV9klZGCM3%2FZI3ZjGR%2B%2FYGHgZHiAPOykWcNZW7%2Fo1P%2BQNq%2FiHfEXCCcvBzaPib4BYY0MOX%2B1sEGOqUBb9Uc7ro52gc%2BkpTKADLHdm1A%2Ft1YjCi79%2Bmw%2B3hda7kgAbXkK4l9ThvTg1uxZ7fBoItC60ptBoO4wP0X4L%2FfcyY43Uoy8AocH1qSD82k900IZZw824LdIq7EoEoJUz1OzJuSGGu1UK9UiqrWFn7WMGNNG226rK8DA10bybIs7w6mI6dQ0tdnPyG64rNnS2qx9nkUDtZKK9CeAM4aQoCbQaugxw0b&X-Amz-Signature=b615565778d2ddcbf25fcdf629b83fc7ed60defd618df12a276538157a55f3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7IZJP6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk18dm37o2bC%2BoBMVvs5sOtCd29ACaDQOM3diHXw0K5AiEA0U%2BF2hGYU%2B3e35Sz9EsHoK%2BDly06pi5QDsid22ev4OQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJEP9r5iIQseDHnUSrcA5szvuHaMdMGMglTfzUVrMbObAheV9QLJMEdwQHgv4WCARicF%2BfGfbsXor1Ia%2BN1AXvKGbzRWbIwL96W6qmvEr5gp2HGoa0onDVt6hstLX84wbjoPP8Q3FjrkALfn0XV%2FNY8qqUL516FMLswwkzmlDLfpr%2FEuKTBBwFA%2BH3RWxu6A5WG10zkI4kuRbq%2FN29olEusyCpNI9LONmbEJpyCPOiybgOhgAX39JqWtgm2CJ1X9wdn0YBualVQDZEWhiJKgT8rMmJOGhkAU0Qkr93otJW%2BDOEdkhSAtjHx7o8LlLeXnvZ9pJVSdzNfSf%2Ft2xusxhF3o05V5w2vozEV7sI1mbfW8SUXKAUhBEv4KfH1S%2BvwZnqSeFOd4U96e802SDxJXlwn46fvhL8DvZOgicZJGqBASNe0mHnixOqWeBDro91MaH86CbZK%2BHqS33vWnZKeWLc19PjwKLCpZmL4IwiLMpZCq955EYL3koyIrbXUCr7VXgaX%2FmEA3fbI%2FOeSyTRnt15VjuiKI9n54YODg%2FjuOnZGIj%2BQeMFXr4ZAKtbrPES5DlIVJgCy3ZxaAhV9klZGCM3%2FZI3ZjGR%2B%2FYGHgZHiAPOykWcNZW7%2Fo1P%2BQNq%2FiHfEXCCcvBzaPib4BYY0MOX%2B1sEGOqUBb9Uc7ro52gc%2BkpTKADLHdm1A%2Ft1YjCi79%2Bmw%2B3hda7kgAbXkK4l9ThvTg1uxZ7fBoItC60ptBoO4wP0X4L%2FfcyY43Uoy8AocH1qSD82k900IZZw824LdIq7EoEoJUz1OzJuSGGu1UK9UiqrWFn7WMGNNG226rK8DA10bybIs7w6mI6dQ0tdnPyG64rNnS2qx9nkUDtZKK9CeAM4aQoCbQaugxw0b&X-Amz-Signature=598df16aabcca860be84d52d635c94cee39f1884175cbb8a02bbe63a546d98ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7IZJP6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk18dm37o2bC%2BoBMVvs5sOtCd29ACaDQOM3diHXw0K5AiEA0U%2BF2hGYU%2B3e35Sz9EsHoK%2BDly06pi5QDsid22ev4OQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJEP9r5iIQseDHnUSrcA5szvuHaMdMGMglTfzUVrMbObAheV9QLJMEdwQHgv4WCARicF%2BfGfbsXor1Ia%2BN1AXvKGbzRWbIwL96W6qmvEr5gp2HGoa0onDVt6hstLX84wbjoPP8Q3FjrkALfn0XV%2FNY8qqUL516FMLswwkzmlDLfpr%2FEuKTBBwFA%2BH3RWxu6A5WG10zkI4kuRbq%2FN29olEusyCpNI9LONmbEJpyCPOiybgOhgAX39JqWtgm2CJ1X9wdn0YBualVQDZEWhiJKgT8rMmJOGhkAU0Qkr93otJW%2BDOEdkhSAtjHx7o8LlLeXnvZ9pJVSdzNfSf%2Ft2xusxhF3o05V5w2vozEV7sI1mbfW8SUXKAUhBEv4KfH1S%2BvwZnqSeFOd4U96e802SDxJXlwn46fvhL8DvZOgicZJGqBASNe0mHnixOqWeBDro91MaH86CbZK%2BHqS33vWnZKeWLc19PjwKLCpZmL4IwiLMpZCq955EYL3koyIrbXUCr7VXgaX%2FmEA3fbI%2FOeSyTRnt15VjuiKI9n54YODg%2FjuOnZGIj%2BQeMFXr4ZAKtbrPES5DlIVJgCy3ZxaAhV9klZGCM3%2FZI3ZjGR%2B%2FYGHgZHiAPOykWcNZW7%2Fo1P%2BQNq%2FiHfEXCCcvBzaPib4BYY0MOX%2B1sEGOqUBb9Uc7ro52gc%2BkpTKADLHdm1A%2Ft1YjCi79%2Bmw%2B3hda7kgAbXkK4l9ThvTg1uxZ7fBoItC60ptBoO4wP0X4L%2FfcyY43Uoy8AocH1qSD82k900IZZw824LdIq7EoEoJUz1OzJuSGGu1UK9UiqrWFn7WMGNNG226rK8DA10bybIs7w6mI6dQ0tdnPyG64rNnS2qx9nkUDtZKK9CeAM4aQoCbQaugxw0b&X-Amz-Signature=6bb5c2c167ab4dbe9bdf327f13b48f670fd48709ecf20b278efbd05ba175d34a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6HVI2J%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTXpBQghpUvkf1iiZzyFt%2Fhl0%2BtuMyWOfwsdbO3dtYjAiEAkZikIfiPn7DDTr4D0tSmWnI3DuqwPrs6aBJnmT1Wjn4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBDClbbKlaSY5%2FxWmyrcAwkOecRNJFm3U57LzsOHLcpkwK3T2p%2FeKZTE9f5TnyLzzOQOm5mpdy9Vze5EUppdu9h%2BB2TxkvokbwhEYEENSMascwyKZKTDIS8H0kSlShbD%2Bh4lvRQmXYO0NXlDmHDTL3pUAZR%2FqVncwFhG68XzrTMaWwstpARB9hITTKpwfzeIl%2FEbYIuxmrvHdK87WT0ZMIkM%2Fb3gRQ9%2FOdcwZ%2F2zGbn3Yuo0wxWUVioBYgnKuXCjqJsOGFrusN5ZXEZgOKF8V8HS06L6I8fQ3Ym%2FXSrIfHSEp%2FKTkkyAmadxGMfTCmtdO6OX5WSGd2iM%2Fv1fwT1J3HomZRLEaLEjE7T850tijnKWEenb%2F00xtiFBL41Ldqqp89BdYvDzFNXF8aUGjiGWTaDlzeLhnliAUEj%2BDM2Dak3OzTZrNsj6jyqTpUMOnYNryhk11axdhVlh%2FSfdA4DKKD2LeHXcKPxpowGOA6SgDjTTISOrxuPVvaFvfHEJZbPL6oa4JHyjKyh6XYzZFiHy4fmZAhuVUlaAcdGHTZTpVLlRmagUoY3G7lIgjsVW50FQuU9k%2FWn3Slo%2FeSqCkeSzz5e7lMI2NPHPPE1Sbuxv6%2Bb7%2FRVBWmLnrPoUs0j91UL4AdiqNzqtc1QU11y9MLb91sEGOqUBbzvPupqfq1kCc40hq3HDdpD5rXuxCRiYF82ZSUUHucR42ql%2F0EAhNvoAlsAxObahF4DWYYAYYWRDbGRhYalA7LvUfON37uOIhFaYBWi7brDndmeMQ7B16T4Dj52qqZhj69x9QRQ%2FSfjgm74xM7hsphQ631%2B2go4UfbO%2F9VcE1yrl%2B2zbJB7%2Byd1EtgrIqueb1dD%2FFZeKWoKoQDZI9qcL9AqDQvLh&X-Amz-Signature=2e781373128f0c3471081bdd26aa26948a9694263c0858b51d7e8de98490c015&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK6KWAM5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlKpgPnIEImAECFQvtS7Y3jfyl8QeUsaM3IVlJztv4EAiEA51lhTsvcyWlSFx8uRgMvMkLi40jz1MEm4ybGrlBbCAsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDEQ0D73E4pABF4as8CrcA8PVvEdb4IpQiF3vLVzzDOIhGU48X24pjH9Otj1ivUszQcBlEw7II5673V47X0lSa3khd%2FZJMFaUtGB6cj5zipwt40DhEvD%2FscZMNx91jALpqJuPVsOrDFjxgiBiOypI5Qe9o%2BnfGZcqg%2BJ49mK4DVPHkgDq45bwaneuObDTZs3jbwMVOMBh0ZCjYV1XWYpBAndVO0gHBdUJhfQWwC4Z83LuKNXTN0ixwcArG2SzDJei2iSOL9N8d9hhrHUha8dMziqzs0%2B9ANPxezAdWxCASryY1INeIrFzJGYalr3Wj%2F%2FwcUdH7GqCH7ue%2FXdsmPghY42qJn6MWfos3ea4fp11bAc%2FFWVePUKJhQIRSG95gLHWhyzXyNeE3MIVPhH3%2F8kbzk97UhMsenEaQB%2FbkzSaJJrqKF7LV%2BFShe2bYoIfWufx6dvtu70x%2BhYYP90L9aBuwiw7sj00ytE%2BdcJGqFwL2doAXQ0cqBluwsg8JYOJyIZTGN1RMAqQ566IMjOGNdA64tOmZ3iAgCeCibWOdOgHrtt3EOVssjgJyLakCnLiNggNmBO0DhdzmQ4sngtVS4D8lnFLnxm3KiH0nVK5k7unVW%2BBGBcmfZbxZldlH4Cz03TxTcsHoy73daVVsyMtMM381sEGOqUB8jhumNNB3sy%2F7JQqcbHX3sJD9La%2F%2FkARH7wKmZpTH6qRLg%2FE2DPJJdeq4UtqdVnhhN7MYerffJs80k79UtBJU3mzod0EolrwvZwGRqlSuTQ7K7LXgrKSaqYDNmxFfWU6BbES41hpZhtgDYc3Mx3mEKR8qtRMftDgDCzZYisIPsT5CjewkDxK38kiGPi7%2F67aa3gbXiM32jFbAwClGyavaElB0EtB&X-Amz-Signature=b258a34a7f4817c56d830150a9764b92bd87cea5f6f90b0b26e46d5e54bdd2cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7IZJP6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHk18dm37o2bC%2BoBMVvs5sOtCd29ACaDQOM3diHXw0K5AiEA0U%2BF2hGYU%2B3e35Sz9EsHoK%2BDly06pi5QDsid22ev4OQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHJEP9r5iIQseDHnUSrcA5szvuHaMdMGMglTfzUVrMbObAheV9QLJMEdwQHgv4WCARicF%2BfGfbsXor1Ia%2BN1AXvKGbzRWbIwL96W6qmvEr5gp2HGoa0onDVt6hstLX84wbjoPP8Q3FjrkALfn0XV%2FNY8qqUL516FMLswwkzmlDLfpr%2FEuKTBBwFA%2BH3RWxu6A5WG10zkI4kuRbq%2FN29olEusyCpNI9LONmbEJpyCPOiybgOhgAX39JqWtgm2CJ1X9wdn0YBualVQDZEWhiJKgT8rMmJOGhkAU0Qkr93otJW%2BDOEdkhSAtjHx7o8LlLeXnvZ9pJVSdzNfSf%2Ft2xusxhF3o05V5w2vozEV7sI1mbfW8SUXKAUhBEv4KfH1S%2BvwZnqSeFOd4U96e802SDxJXlwn46fvhL8DvZOgicZJGqBASNe0mHnixOqWeBDro91MaH86CbZK%2BHqS33vWnZKeWLc19PjwKLCpZmL4IwiLMpZCq955EYL3koyIrbXUCr7VXgaX%2FmEA3fbI%2FOeSyTRnt15VjuiKI9n54YODg%2FjuOnZGIj%2BQeMFXr4ZAKtbrPES5DlIVJgCy3ZxaAhV9klZGCM3%2FZI3ZjGR%2B%2FYGHgZHiAPOykWcNZW7%2Fo1P%2BQNq%2FiHfEXCCcvBzaPib4BYY0MOX%2B1sEGOqUBb9Uc7ro52gc%2BkpTKADLHdm1A%2Ft1YjCi79%2Bmw%2B3hda7kgAbXkK4l9ThvTg1uxZ7fBoItC60ptBoO4wP0X4L%2FfcyY43Uoy8AocH1qSD82k900IZZw824LdIq7EoEoJUz1OzJuSGGu1UK9UiqrWFn7WMGNNG226rK8DA10bybIs7w6mI6dQ0tdnPyG64rNnS2qx9nkUDtZKK9CeAM4aQoCbQaugxw0b&X-Amz-Signature=fac516935043835a0f00d5b8b6b37af8c4567a298b2d923679e68e50a854945b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
