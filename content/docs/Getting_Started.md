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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KF4B4O3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAfUqrcUsckpoP0zxAm8ktYwgFKk%2BMzpS4uPqN7LG03bAiAdhEVzjD%2FWgPGDbvTCMcXs%2BEcK2NlavzvBKVtJE94b%2BCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMfTRWalLXtU%2FTFLwtKtwDX2EoyZjCt8JLmwrkSWzPLkOhLygLontv44zVP4RNYSoFCFTCCRH2G5ZUAI%2F1hWC%2Bp49khTxHfeWjeROAk%2BTXJ7mvHGraBU0Uyh6t4TjrqImvFh2iMAX8m8BA9dbb4GU29Fw%2B88NNXKhVSBppcazkHe42ayVmpfjoCPlA%2FzkypZJfjrUgvkQlNoAxZG76dL3bVoTQMRQG1tDr6sZ6%2FIsUOvQebOzbrdORafW8mOSrf90XbHEss9RhbUvSYgcOEugj80MZmwn0cE%2FQs28n6gBFkEbsF6pwESQDhiftJtzVzTPzJIfplbvXVSAByv5KgvQe2U5eiW2%2Fwv1qG6PKEhhT5Acb4eapKMFr9veLakEWjExLm2mdzkipvqg8KLNzSilsYARSpOiaIfbIYZBtbQE0F%2F6kadWyzeMolWk3ecRVYGQzb9W%2FDz3o2MfEmYnY3pPvi6ALhtiR0IhTXxmBZzTeAjLJE%2FRIuG2%2FUwOqNbsJmN2Gb9yaIrHarhT60a3Z4CO6BGMMVJ9AYOfiOm1LpXUIMmX6QpZDqoTe31wMmrXRq%2Fzhli9YKoJMAI55dyT%2FPU823bTCJJ390Bg%2BzpPvVSBxowTX8iO%2BaJPAppSq8Ev0f3QEc8u2t%2B%2FMn%2B%2BR6Hkwv5ufwwY6pgGlzdMlnm%2F6h2z6CqQwDPWckbEOgKUZsInN%2Fxty5V2VYk%2Ba87mLEcd7KM7eBjQRjv1HtyHsFlbylbYxILCZM8KDiT2DL58uDm38xNPG7WqePmoLjawk3BkrrwyFMqdj3PBay9M36PTHVoUGId3nL9%2B%2BrANlnE97iyJA5rgfoFckFLjCO%2FN8zjl7DXpqt%2Fd%2FjTNCwTJf8QE25FnsriIlnu4KrjcsVob5&X-Amz-Signature=a28c3178ed3debe15342015ca8ed00281912453580206593ace6cbe7f09ed089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KF4B4O3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAfUqrcUsckpoP0zxAm8ktYwgFKk%2BMzpS4uPqN7LG03bAiAdhEVzjD%2FWgPGDbvTCMcXs%2BEcK2NlavzvBKVtJE94b%2BCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMfTRWalLXtU%2FTFLwtKtwDX2EoyZjCt8JLmwrkSWzPLkOhLygLontv44zVP4RNYSoFCFTCCRH2G5ZUAI%2F1hWC%2Bp49khTxHfeWjeROAk%2BTXJ7mvHGraBU0Uyh6t4TjrqImvFh2iMAX8m8BA9dbb4GU29Fw%2B88NNXKhVSBppcazkHe42ayVmpfjoCPlA%2FzkypZJfjrUgvkQlNoAxZG76dL3bVoTQMRQG1tDr6sZ6%2FIsUOvQebOzbrdORafW8mOSrf90XbHEss9RhbUvSYgcOEugj80MZmwn0cE%2FQs28n6gBFkEbsF6pwESQDhiftJtzVzTPzJIfplbvXVSAByv5KgvQe2U5eiW2%2Fwv1qG6PKEhhT5Acb4eapKMFr9veLakEWjExLm2mdzkipvqg8KLNzSilsYARSpOiaIfbIYZBtbQE0F%2F6kadWyzeMolWk3ecRVYGQzb9W%2FDz3o2MfEmYnY3pPvi6ALhtiR0IhTXxmBZzTeAjLJE%2FRIuG2%2FUwOqNbsJmN2Gb9yaIrHarhT60a3Z4CO6BGMMVJ9AYOfiOm1LpXUIMmX6QpZDqoTe31wMmrXRq%2Fzhli9YKoJMAI55dyT%2FPU823bTCJJ390Bg%2BzpPvVSBxowTX8iO%2BaJPAppSq8Ev0f3QEc8u2t%2B%2FMn%2B%2BR6Hkwv5ufwwY6pgGlzdMlnm%2F6h2z6CqQwDPWckbEOgKUZsInN%2Fxty5V2VYk%2Ba87mLEcd7KM7eBjQRjv1HtyHsFlbylbYxILCZM8KDiT2DL58uDm38xNPG7WqePmoLjawk3BkrrwyFMqdj3PBay9M36PTHVoUGId3nL9%2B%2BrANlnE97iyJA5rgfoFckFLjCO%2FN8zjl7DXpqt%2Fd%2FjTNCwTJf8QE25FnsriIlnu4KrjcsVob5&X-Amz-Signature=d6dd5a0271dc74653a6c8b2826eee250c0556969953b8fdd3ee91ae47aa1358e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KF4B4O3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAfUqrcUsckpoP0zxAm8ktYwgFKk%2BMzpS4uPqN7LG03bAiAdhEVzjD%2FWgPGDbvTCMcXs%2BEcK2NlavzvBKVtJE94b%2BCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMfTRWalLXtU%2FTFLwtKtwDX2EoyZjCt8JLmwrkSWzPLkOhLygLontv44zVP4RNYSoFCFTCCRH2G5ZUAI%2F1hWC%2Bp49khTxHfeWjeROAk%2BTXJ7mvHGraBU0Uyh6t4TjrqImvFh2iMAX8m8BA9dbb4GU29Fw%2B88NNXKhVSBppcazkHe42ayVmpfjoCPlA%2FzkypZJfjrUgvkQlNoAxZG76dL3bVoTQMRQG1tDr6sZ6%2FIsUOvQebOzbrdORafW8mOSrf90XbHEss9RhbUvSYgcOEugj80MZmwn0cE%2FQs28n6gBFkEbsF6pwESQDhiftJtzVzTPzJIfplbvXVSAByv5KgvQe2U5eiW2%2Fwv1qG6PKEhhT5Acb4eapKMFr9veLakEWjExLm2mdzkipvqg8KLNzSilsYARSpOiaIfbIYZBtbQE0F%2F6kadWyzeMolWk3ecRVYGQzb9W%2FDz3o2MfEmYnY3pPvi6ALhtiR0IhTXxmBZzTeAjLJE%2FRIuG2%2FUwOqNbsJmN2Gb9yaIrHarhT60a3Z4CO6BGMMVJ9AYOfiOm1LpXUIMmX6QpZDqoTe31wMmrXRq%2Fzhli9YKoJMAI55dyT%2FPU823bTCJJ390Bg%2BzpPvVSBxowTX8iO%2BaJPAppSq8Ev0f3QEc8u2t%2B%2FMn%2B%2BR6Hkwv5ufwwY6pgGlzdMlnm%2F6h2z6CqQwDPWckbEOgKUZsInN%2Fxty5V2VYk%2Ba87mLEcd7KM7eBjQRjv1HtyHsFlbylbYxILCZM8KDiT2DL58uDm38xNPG7WqePmoLjawk3BkrrwyFMqdj3PBay9M36PTHVoUGId3nL9%2B%2BrANlnE97iyJA5rgfoFckFLjCO%2FN8zjl7DXpqt%2Fd%2FjTNCwTJf8QE25FnsriIlnu4KrjcsVob5&X-Amz-Signature=b9b7695f77b4be61925dacc0eb00e2e6ce78788e60ede29676c31bf21d9b4e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZIX2ZRL%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCKkCvsJt4dTIBKz4nlfPKEtSXfPVFAaEK012AHGscpzQIhAKT9Wr8%2BakJz6qbZS18Fm1XiqBV9bOcdIQGLPbu2pCwWKv8DCC4QABoMNjM3NDIzMTgzODA1Igx%2FiOLQ%2BXtInzVs60Aq3AOj4VXnh5nz3NEOy%2B8QOiliARAeT1YZZPQYRJt9xpK0ccFn6zuSK0f4zMAQ87oyYWTF2d9ANRgIgmSUWBDMVeRAwVaFGD9nZBCiQld%2BJgbEhhzJWIBLuDzdlpmhmmi3u%2FYvZfkZLcQejsRG6MvVZCKoQfJZzOAqx6GJX8zP4JNjYcQIgqJyqZ%2F1qk9KbFQ4hfbbqeLeRaYHxZOaYsWlBGGaTilPU54TvF3wQco%2FGCL5WLqLldH4uucUE%2FgqISpNNb8Gc13hDZQ5gd%2BlGN%2BG2I4iLxmC4w2%2BzUqaYWwumUeOVAQ6j5ruCgQsWV5VKbOmcuRWl%2BwIH%2FkSXE4iS%2BXsqDaN%2Fy19z%2B1t3cnsnp8kwSGGgH28pRsFS3nihDWde2LmXnT%2BJaZidy8zpI0ZOoh%2Fbhh5tmTW5XT9SmmhAscKQD6Vjw2%2FaJc3WE9GMsvI9GeYL6PfUyCl3Y07c8ElMZ9PqaaV1YFqRmuFaMCAn%2FdCECxPMhpXyYEPSYw%2FdedspXe3Xu1WCgwpU3HxMtQpd0BbKcJA9Pza4V0E6544mVQPcuFNr%2BXZESyeLeyqtp1n925v2loYR%2B8%2BiigD0UKX8trfzACYnlHXSNbLeGDxczuoiDFZ6BO3a0QoX64lUPg4sTC8m5%2FDBjqkAUeZ5QqAoyisXRjsm4SyGQgt35vVdkB56QZMgRmhVB0BK2lAQVxRjq7QyshKM8TVCXLpzCQq%2B4G8EvjHaiX7VueyWuQD5mnqfu8O279mMesXjfBl2A86o%2FqIPr5DHCJIBX6CbeIRwbV19z8ZtWefcDih%2FBJimhwFQ5G7fq4TyWV895%2BdKLLuXkJnU4%2FM8kqXSrP8iy9GjZSONOplVVJpNek7sENY&X-Amz-Signature=9a96993d51afe8585ff0d3930e5aeab5f7258e52c45c501aa497d72083db35db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPEI3RM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDGHIZOvhG06t1B2Nmw8feX4F4wc6GcyzwSlWZDad9YsAiEAsmQRoTS7zCK3lqN%2FVHEmNI7qIA4jutInEjR%2FJphxcHcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHBhFxw2nX7d0wTnDCrcA%2B9y6bpSvXG5s7fNeB7DbJklTU%2FwG27XHLN2nqg7ddlr64zvzUQX%2FicjUkYg%2FwH%2Frg3lY8B2b5pBuhzXPwpwUdVIatZLl6HuS23lLEkvjDvZDU5PAIW5kNJ%2BY40veAvOzBOmpGDVvMnt6Uv73Cw7KECh2k15fKUjHtJNsvlbijSiRFHKiQ409b6hbQDg1YCsbs7mPb4XuYPBn8lEwzoJRLqbZUXoXgO2e9%2FujRpdmuJKzMzALG40VmdLwJWwYt0p3iC36IBKrZfSjswOIImS3NFPi3gc8tQpJtoQb%2BSX10hw9nfFvNBikFtjNjiJwEwQMIoGAeZGBB%2F8ZIZNyzAgDNOpZ%2BRCawBYcK3sNu7Kqi4D4A1hkIrvdzel%2FFTTjnBu%2BELSUvzGt%2B07%2BuKvcYNQaUMuHo0DZ6zU1j6QWFaor89ClDcGKIkXXegACCLVcd9qyzyumvEXMVR6hH3KUX4EzOiuHQCpjQx6kljtrvM8bdnRrpEdJPoY5ZKmLQYD4DZZhMhY%2FwrGhoZMCSIa6%2B%2BD0dGvI9uwEpNJTuMeri34T6OB8tcfrimDLxeCdAytwHkiSycuKEITBJR6ZkwRT%2F4%2FoU6ICo2s9VfqdN0t3GCXI0pZxyb6hsg68mZVDY3lMMqcn8MGOqUBQtnl%2BR8D3Pq1ryHoJMG0%2BpbRx%2BUvx0EGQQvbz9g2oFpBKE8gk7RnkxNG9A1Uyd61nE6zl0zdnny0AKXggvlCMQ2A%2BjOP0Yi0kcdPWUVcgX%2BgLXtkYgs1FDIMHMhR9IF0AD2evShP1Myi3lkc4MFsPGZmwnuhzTLPOYrmWzWnxMv16SznGeh3Qt5D%2FuphFykY3i7hGaVhZWINaVU2Y4QBAAud%2BTw9&X-Amz-Signature=ead1aa1fb88d1d08f590c4a91cc1d6b9888f0a8fcbf3f194d30220a716b654e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KF4B4O3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAfUqrcUsckpoP0zxAm8ktYwgFKk%2BMzpS4uPqN7LG03bAiAdhEVzjD%2FWgPGDbvTCMcXs%2BEcK2NlavzvBKVtJE94b%2BCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMfTRWalLXtU%2FTFLwtKtwDX2EoyZjCt8JLmwrkSWzPLkOhLygLontv44zVP4RNYSoFCFTCCRH2G5ZUAI%2F1hWC%2Bp49khTxHfeWjeROAk%2BTXJ7mvHGraBU0Uyh6t4TjrqImvFh2iMAX8m8BA9dbb4GU29Fw%2B88NNXKhVSBppcazkHe42ayVmpfjoCPlA%2FzkypZJfjrUgvkQlNoAxZG76dL3bVoTQMRQG1tDr6sZ6%2FIsUOvQebOzbrdORafW8mOSrf90XbHEss9RhbUvSYgcOEugj80MZmwn0cE%2FQs28n6gBFkEbsF6pwESQDhiftJtzVzTPzJIfplbvXVSAByv5KgvQe2U5eiW2%2Fwv1qG6PKEhhT5Acb4eapKMFr9veLakEWjExLm2mdzkipvqg8KLNzSilsYARSpOiaIfbIYZBtbQE0F%2F6kadWyzeMolWk3ecRVYGQzb9W%2FDz3o2MfEmYnY3pPvi6ALhtiR0IhTXxmBZzTeAjLJE%2FRIuG2%2FUwOqNbsJmN2Gb9yaIrHarhT60a3Z4CO6BGMMVJ9AYOfiOm1LpXUIMmX6QpZDqoTe31wMmrXRq%2Fzhli9YKoJMAI55dyT%2FPU823bTCJJ390Bg%2BzpPvVSBxowTX8iO%2BaJPAppSq8Ev0f3QEc8u2t%2B%2FMn%2B%2BR6Hkwv5ufwwY6pgGlzdMlnm%2F6h2z6CqQwDPWckbEOgKUZsInN%2Fxty5V2VYk%2Ba87mLEcd7KM7eBjQRjv1HtyHsFlbylbYxILCZM8KDiT2DL58uDm38xNPG7WqePmoLjawk3BkrrwyFMqdj3PBay9M36PTHVoUGId3nL9%2B%2BrANlnE97iyJA5rgfoFckFLjCO%2FN8zjl7DXpqt%2Fd%2FjTNCwTJf8QE25FnsriIlnu4KrjcsVob5&X-Amz-Signature=5090ba8324381f4bf8f489427a1545e873d0b0218076e7de2ea4103985ab4ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
