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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILOPQZ6%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvPJ%2BShd2Lt18Ls65ol6mmYUebxzJHJ4J%2Bs8ays%2F6Y5AIgPBr6EhpmvuU%2B2j6ayTaQMHd0alZa%2F4Hr1QmKdMj5UHUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMQlvk9D61PsmEtcGCrcA9fQ3GKI5lbZBSF7TKOUTDg%2F9yYSqsPx7ZoICBZRtgwn2vTktfFc2jv6UE6paOM5OFiKFexBrOdiM1sIl%2Brd%2BSpq9kQgpVm8HHTMJ3KLK2%2BFquVZZC9XUNvjIShNZifeEJtdohHwHiA70DlYjxzDmiFO2r%2F05ow6EBTtJ67yxdaoeHeIuD%2FYkB%2B8rw2we%2FpmBH82hc%2BvPHi%2BGNYCGCxNb5ELVZj9okI4xNo3Ha3QzwDLYtAROcdUPQgqMh73PLQyB7Ki2Rfszbv8czPITAWR4BiiaeluRfs9chXNoL6BsLht1VWyTQzFbUSt6sN4O6Nicw5VP3x1zWRuhjB2mAi4o5W73GBolJqDAecxGBKesIPrtq9Swacu3Hrhbj5sr6eX%2F1EbM4ZlW2xAhtkcBvjytTwmdqq0Ac5NeAoIDIX7Lda410AXhdmgzLE1PwPPEEQeAEAiQ5ifRui3uiEtONY7Q%2FV%2BRhJ8OWjJHCjhrTz62AcMT5Wi3mRs2vPkUkNz1RplCTPCl7z78V%2BzQ1vimMAqcmGHMMy26gb3JzrQZ2boTsOQqnNmc8bhxETmHS%2Fw3s78GcBnCjBeVGeUsMrwsuSwYqB7uP8uZw3t9r47hFppZyjDO4RQ4TCaDgrBcOOWMJmHhsAGOqUB9wNcWnN0RAaxOZkmp%2BITJePiJ2NJD7aQP3Pi0%2FNnP4vC%2BqbcdJmMenWfrB%2BRATlCHou8DtLlUk40XIJCknSS8S6XP2aFoX4Tayg8NteeqeGxIQCJc6p9f9DNf04a3EmTR56cdAX1%2BNn9LNIVQokQ2hvEVq7DkUj5t%2FZPK8sQMmk8KSG6VsbZ%2BTD%2FgQhbMRGa2wpgBdvJEzWdxDXF%2FQ%2B%2BAx9RsRC%2B&X-Amz-Signature=eb99fb5b7a7ca57de9d39c1bdc70665edddf6aef80f5298db56de9703a9917cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILOPQZ6%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvPJ%2BShd2Lt18Ls65ol6mmYUebxzJHJ4J%2Bs8ays%2F6Y5AIgPBr6EhpmvuU%2B2j6ayTaQMHd0alZa%2F4Hr1QmKdMj5UHUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMQlvk9D61PsmEtcGCrcA9fQ3GKI5lbZBSF7TKOUTDg%2F9yYSqsPx7ZoICBZRtgwn2vTktfFc2jv6UE6paOM5OFiKFexBrOdiM1sIl%2Brd%2BSpq9kQgpVm8HHTMJ3KLK2%2BFquVZZC9XUNvjIShNZifeEJtdohHwHiA70DlYjxzDmiFO2r%2F05ow6EBTtJ67yxdaoeHeIuD%2FYkB%2B8rw2we%2FpmBH82hc%2BvPHi%2BGNYCGCxNb5ELVZj9okI4xNo3Ha3QzwDLYtAROcdUPQgqMh73PLQyB7Ki2Rfszbv8czPITAWR4BiiaeluRfs9chXNoL6BsLht1VWyTQzFbUSt6sN4O6Nicw5VP3x1zWRuhjB2mAi4o5W73GBolJqDAecxGBKesIPrtq9Swacu3Hrhbj5sr6eX%2F1EbM4ZlW2xAhtkcBvjytTwmdqq0Ac5NeAoIDIX7Lda410AXhdmgzLE1PwPPEEQeAEAiQ5ifRui3uiEtONY7Q%2FV%2BRhJ8OWjJHCjhrTz62AcMT5Wi3mRs2vPkUkNz1RplCTPCl7z78V%2BzQ1vimMAqcmGHMMy26gb3JzrQZ2boTsOQqnNmc8bhxETmHS%2Fw3s78GcBnCjBeVGeUsMrwsuSwYqB7uP8uZw3t9r47hFppZyjDO4RQ4TCaDgrBcOOWMJmHhsAGOqUB9wNcWnN0RAaxOZkmp%2BITJePiJ2NJD7aQP3Pi0%2FNnP4vC%2BqbcdJmMenWfrB%2BRATlCHou8DtLlUk40XIJCknSS8S6XP2aFoX4Tayg8NteeqeGxIQCJc6p9f9DNf04a3EmTR56cdAX1%2BNn9LNIVQokQ2hvEVq7DkUj5t%2FZPK8sQMmk8KSG6VsbZ%2BTD%2FgQhbMRGa2wpgBdvJEzWdxDXF%2FQ%2B%2BAx9RsRC%2B&X-Amz-Signature=26a49b006774167f505c775612e2290b575446fa5b3234e65ea65a925343554f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQIQAXE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBN0xt6eGcdIh3PgqAFDMvwPmRDdR7V93RIlXS7tQAPwIgIfjlQ3HQQjGMelGXWp3aL0cZgyaJr7NQ84RDx2dj8fIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDPvL00itQ0ScW5OzIyrcA9xm%2Fm9CVush42E8L9dCapneQhwCoY6K5W0iY3U3h0pkpF4nNzuKP91ijgPXMC9XJIh9Ew4wH1bKkBEhR1%2FVy88UMXPzWSGUyG475aldhiKwSzNfZy3CeiqY4WFaEn7sIrl7uA9ADIu4VGuVeEv6wbA7wSr8CAlUdXwXRqUg1DC0tvBPbCYljJyQIgG6cdfqBHcDVJuSSY0P2Gm5Jyb9NoGlTyhLHGkc1aMSt9UH9Sb6pGFB4%2BEYpRgxPofEyQJHxnKSS5wNeTozHh4ve00kW%2BBWb9nS4SOQ5%2F8Wcqy3AQRvptdqYKkDxBUc3C7tlh1jxCRff6wGHF2uxvxbPNY6qsFdO9hJc51KDheA81lwutUr8uodeB%2BeYwaHR2gTibmfQVTD5GEU2cmX7S%2B4gh%2FAUGr%2F0NkWjuUA%2FXQQrAU8JhjJWRxRHc2%2B%2B5VkGWvezSN7wrrNUjmkFXy1F1CZfJ0CA41uqKnxdQl5xK4eIP5nlVY%2Bg%2BMndareRmFsprHVLnrcu9SWhyNLXqllBSLtGUmudgUmVkdhq%2FDEchBCuBfjDPm7zp04YZVc4R%2FRxV8JnzvshDqN6fPocMcrkU9ZJGvt5qBIoX4rSHF%2B%2FW0ctK0MPjCzutMGqEcQ4Qzm%2FNnwMNSHhsAGOqUB2QNG2aa%2FlgsEo1hDTSCpbvkxiDVHN%2BhWsKBfTu6Xoe%2FkiHpHP3btcslJiViZrnuElRUemsm82FElrY84CkGI99LNIqSOgr%2FPO2GaC9zMa5Vl%2F5WlaK8j%2BBcAsHq3xSw7Ad5KLgTH8MX7m%2BfjplJ8rgjeclAguVTnvmtKu3sclN%2F3ojmW1F%2BxJ%2FXHYDkYieb4QEQktGjZxZst1lYh2tLImBEiO7hq&X-Amz-Signature=72cbca39f96cec2b9466179a7695ae63aa1c4ce8e2d0f17695f8c575e2e1e155&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZIBUV5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4eAY5Ng4C5pJ%2BTUl6y3Nlo754pFQv5fEeTiWkoZ0OmAiBMvMw7Coib28EFyQTJM50C0YRuWs%2BLnFPm%2BhY14zD3bSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMTIYztIkFv0ARdOSmKtwD0oHY5Kxyw%2BJ5eKsJe%2BCF7BpMRJyLO4QvZ%2BOLGsZ%2FtVXj4fb3PUo5OP65K3Jx00dDNTYHE6W1SSL1TSScKH%2B%2BFpM3T9nOxmt33ck8WTOaJb%2FV074qyAoC2jkN3MSVSBFkrhGCInGXyn6hRsHXpH0HWW5gSIC5NeIFN9tenKPQq7prMSVse%2FceuNxqyxg1%2BFrq%2BN8KwEnTVahFwec2VhDoHtJoC8%2F1cLy1ddd3DEndkNuRa1arn6cjO2Dx3JjYEU4jSPXmibD12wIvD0f9u2wPKDs8F%2B66a2o7nPf5GAysQZ5GcdAK5aKr9KMk1xHkCZzTsicxYBOnTbgGByJmBHYjNJilcqtsgu0GgL3lwWnGNKN9k9zjk03rLVe0tw8gEtMMdDysUKMTCyYX%2BV93%2FBFaZb2tO%2BJsBu4n7%2F7lS9i0YFZb%2BBqsP3zscUinGnx7eSyuYShQS0nPsXeebAuzASTYWcOsQbx4Us0uiI2zmzRdt59yK95Lu1ki4IIzgXfGInyx%2BIcwDcKfZpBlplnNs1OgBrzu21I%2F9%2FuuWPH801ekwwtnEaEPZNbRhJdA5HJGwhU8lJAaaKG9zXt3%2B5Od20hnLJ1UZCWISLDPR%2FSBYIA4zG34UWWvutVAe5c%2FYZQw0IeGwAY6pgHdbn2y6BFu1OVSTsL21q4eCDfA9G3EymzfGqEx55WU2qQoBJTlJP94JIP1sQnV3SddwBre4ttncvI6JAUkQQ%2B1H2uJsh3flJLLAkTyIDQFv6wTV7SOOTeZe8QEIyPBiPg5h5Z8IXLQCXTw%2F6D2XmrW0PN48YFRV%2BwWymNp%2FkNK%2BxtRnuSy7d1J5rlCAjawm0EbUoXwRihUHX%2B40Wiu%2FS7KhVOhAhHh&X-Amz-Signature=d7c69204511f8e751023b8872d03f92ef418eee3885f399374956fb581804b46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILOPQZ6%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvPJ%2BShd2Lt18Ls65ol6mmYUebxzJHJ4J%2Bs8ays%2F6Y5AIgPBr6EhpmvuU%2B2j6ayTaQMHd0alZa%2F4Hr1QmKdMj5UHUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMQlvk9D61PsmEtcGCrcA9fQ3GKI5lbZBSF7TKOUTDg%2F9yYSqsPx7ZoICBZRtgwn2vTktfFc2jv6UE6paOM5OFiKFexBrOdiM1sIl%2Brd%2BSpq9kQgpVm8HHTMJ3KLK2%2BFquVZZC9XUNvjIShNZifeEJtdohHwHiA70DlYjxzDmiFO2r%2F05ow6EBTtJ67yxdaoeHeIuD%2FYkB%2B8rw2we%2FpmBH82hc%2BvPHi%2BGNYCGCxNb5ELVZj9okI4xNo3Ha3QzwDLYtAROcdUPQgqMh73PLQyB7Ki2Rfszbv8czPITAWR4BiiaeluRfs9chXNoL6BsLht1VWyTQzFbUSt6sN4O6Nicw5VP3x1zWRuhjB2mAi4o5W73GBolJqDAecxGBKesIPrtq9Swacu3Hrhbj5sr6eX%2F1EbM4ZlW2xAhtkcBvjytTwmdqq0Ac5NeAoIDIX7Lda410AXhdmgzLE1PwPPEEQeAEAiQ5ifRui3uiEtONY7Q%2FV%2BRhJ8OWjJHCjhrTz62AcMT5Wi3mRs2vPkUkNz1RplCTPCl7z78V%2BzQ1vimMAqcmGHMMy26gb3JzrQZ2boTsOQqnNmc8bhxETmHS%2Fw3s78GcBnCjBeVGeUsMrwsuSwYqB7uP8uZw3t9r47hFppZyjDO4RQ4TCaDgrBcOOWMJmHhsAGOqUB9wNcWnN0RAaxOZkmp%2BITJePiJ2NJD7aQP3Pi0%2FNnP4vC%2BqbcdJmMenWfrB%2BRATlCHou8DtLlUk40XIJCknSS8S6XP2aFoX4Tayg8NteeqeGxIQCJc6p9f9DNf04a3EmTR56cdAX1%2BNn9LNIVQokQ2hvEVq7DkUj5t%2FZPK8sQMmk8KSG6VsbZ%2BTD%2FgQhbMRGa2wpgBdvJEzWdxDXF%2FQ%2B%2BAx9RsRC%2B&X-Amz-Signature=10ca5baeb6d8f797c651f54099076556f95fe91548704abfad556fca46eb8ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
