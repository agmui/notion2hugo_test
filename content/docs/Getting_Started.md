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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S4FTMT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJf%2FLgZBYwDzm5cGAx72DSKjI2Ng8bvJmYnCq%2BN7TNlQIgY%2BswLASnhMw5rIs3VInkZiiAKWrSV%2FQ9%2FtWJTB2Qqfcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJttqCcXaGAMWs%2Bj4ircA1fOMADK2WZXnGYkiQZKYzYs1aUYiDRCd7p81FCF8hc22%2BGIHMNZ4LC9I6yt%2FZKv0xmorZb65frTBOr8w6vLENgpcUo3tS1F5hOEUr27HolPVgWY7TEXOBFljeORaEBsWalsAzh0Gyf7UpxDo%2FwILOShoDuQkwFhsonHxRo0xx4wvWuh6idWg3OFfI20fbq5Kgd89z%2FUTVvqyqG1t2ol5LH0GzC4kK%2F%2FuCrk2VaWhSvZbFVeXnEnIVHgK1YjHqkjz9zyaem0w%2Bjv%2BCzmCW34TdkpYt7M7MSlJrVZ36aX6F6SIcc6nF8KNh3s5Vin7d7KaaRG8s%2FIfxHKo7Rc0Nc%2BYpFOy%2BKF4sBOUeS5Zkxe2O3xgzY%2BhKOUwk7PQJtjZ%2B%2BxS3qYePghLCit5r9zWymQ8khqEOiJcTobGtqgYWgiR2EmhImqmIAeaY5jZEFm2T%2Fjyk%2FPANaHgY%2F6XBZKzQABj%2Bf5UsttLCB5KQeBW33JbGjPkhOC3mqZag4YkH2gFfcEy7hir38jOrE9QYCb%2BlPQtuB2ndKqlh1QoTSzfkX8vwTJHe9ukgv3dyvvUqa%2F5B%2BYnFxWn914OgFFpUYJ0aMbswxIvden4P5ADzcNrOCvFXJbxdE3u4PwdDEgiiWvMN6hjMIGOqUBhuWIWzjq1Aq2QPjHxs1JR5UrgbnmHfqhtwIg3bcXY9UukoOopWb0IAFbzUT2QifU5z%2FV1uLp1OBHpltbywJC8n%2BJaLBlRruKzF25nR0LMkQILGJ15GhNX%2FwY2tdDCFmCuFnQIM8qwY9fNryAPFXVc2OQxrqqOo8V9Umjh5Iz8YwuEf%2B2XG11dRK0ZZ03lC7bSQa5R32eqYSzJ3CkD59DN%2Fm4k5sf&X-Amz-Signature=0a2cbee12eda0e29a45f9d5cbae9c2ed67d06194d29dd32ac4308d98e3358f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S4FTMT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJf%2FLgZBYwDzm5cGAx72DSKjI2Ng8bvJmYnCq%2BN7TNlQIgY%2BswLASnhMw5rIs3VInkZiiAKWrSV%2FQ9%2FtWJTB2Qqfcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJttqCcXaGAMWs%2Bj4ircA1fOMADK2WZXnGYkiQZKYzYs1aUYiDRCd7p81FCF8hc22%2BGIHMNZ4LC9I6yt%2FZKv0xmorZb65frTBOr8w6vLENgpcUo3tS1F5hOEUr27HolPVgWY7TEXOBFljeORaEBsWalsAzh0Gyf7UpxDo%2FwILOShoDuQkwFhsonHxRo0xx4wvWuh6idWg3OFfI20fbq5Kgd89z%2FUTVvqyqG1t2ol5LH0GzC4kK%2F%2FuCrk2VaWhSvZbFVeXnEnIVHgK1YjHqkjz9zyaem0w%2Bjv%2BCzmCW34TdkpYt7M7MSlJrVZ36aX6F6SIcc6nF8KNh3s5Vin7d7KaaRG8s%2FIfxHKo7Rc0Nc%2BYpFOy%2BKF4sBOUeS5Zkxe2O3xgzY%2BhKOUwk7PQJtjZ%2B%2BxS3qYePghLCit5r9zWymQ8khqEOiJcTobGtqgYWgiR2EmhImqmIAeaY5jZEFm2T%2Fjyk%2FPANaHgY%2F6XBZKzQABj%2Bf5UsttLCB5KQeBW33JbGjPkhOC3mqZag4YkH2gFfcEy7hir38jOrE9QYCb%2BlPQtuB2ndKqlh1QoTSzfkX8vwTJHe9ukgv3dyvvUqa%2F5B%2BYnFxWn914OgFFpUYJ0aMbswxIvden4P5ADzcNrOCvFXJbxdE3u4PwdDEgiiWvMN6hjMIGOqUBhuWIWzjq1Aq2QPjHxs1JR5UrgbnmHfqhtwIg3bcXY9UukoOopWb0IAFbzUT2QifU5z%2FV1uLp1OBHpltbywJC8n%2BJaLBlRruKzF25nR0LMkQILGJ15GhNX%2FwY2tdDCFmCuFnQIM8qwY9fNryAPFXVc2OQxrqqOo8V9Umjh5Iz8YwuEf%2B2XG11dRK0ZZ03lC7bSQa5R32eqYSzJ3CkD59DN%2Fm4k5sf&X-Amz-Signature=0f986ef32c06d9e6bf344b0c06c62fbeadf3d81b20f94fe3141963f8a2f1ec80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S4FTMT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJf%2FLgZBYwDzm5cGAx72DSKjI2Ng8bvJmYnCq%2BN7TNlQIgY%2BswLASnhMw5rIs3VInkZiiAKWrSV%2FQ9%2FtWJTB2Qqfcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJttqCcXaGAMWs%2Bj4ircA1fOMADK2WZXnGYkiQZKYzYs1aUYiDRCd7p81FCF8hc22%2BGIHMNZ4LC9I6yt%2FZKv0xmorZb65frTBOr8w6vLENgpcUo3tS1F5hOEUr27HolPVgWY7TEXOBFljeORaEBsWalsAzh0Gyf7UpxDo%2FwILOShoDuQkwFhsonHxRo0xx4wvWuh6idWg3OFfI20fbq5Kgd89z%2FUTVvqyqG1t2ol5LH0GzC4kK%2F%2FuCrk2VaWhSvZbFVeXnEnIVHgK1YjHqkjz9zyaem0w%2Bjv%2BCzmCW34TdkpYt7M7MSlJrVZ36aX6F6SIcc6nF8KNh3s5Vin7d7KaaRG8s%2FIfxHKo7Rc0Nc%2BYpFOy%2BKF4sBOUeS5Zkxe2O3xgzY%2BhKOUwk7PQJtjZ%2B%2BxS3qYePghLCit5r9zWymQ8khqEOiJcTobGtqgYWgiR2EmhImqmIAeaY5jZEFm2T%2Fjyk%2FPANaHgY%2F6XBZKzQABj%2Bf5UsttLCB5KQeBW33JbGjPkhOC3mqZag4YkH2gFfcEy7hir38jOrE9QYCb%2BlPQtuB2ndKqlh1QoTSzfkX8vwTJHe9ukgv3dyvvUqa%2F5B%2BYnFxWn914OgFFpUYJ0aMbswxIvden4P5ADzcNrOCvFXJbxdE3u4PwdDEgiiWvMN6hjMIGOqUBhuWIWzjq1Aq2QPjHxs1JR5UrgbnmHfqhtwIg3bcXY9UukoOopWb0IAFbzUT2QifU5z%2FV1uLp1OBHpltbywJC8n%2BJaLBlRruKzF25nR0LMkQILGJ15GhNX%2FwY2tdDCFmCuFnQIM8qwY9fNryAPFXVc2OQxrqqOo8V9Umjh5Iz8YwuEf%2B2XG11dRK0ZZ03lC7bSQa5R32eqYSzJ3CkD59DN%2Fm4k5sf&X-Amz-Signature=2cab359d85cde32c68b059071332d7b3a7f4699727e6bb1a4508f79007f9411c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJAHUKB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEb3VEa9jcQ3RkrulBpDT%2B85WESl2v3QAfznwFSFPTCsAiACJIBQTgidSMxPiL9ZCNYv6vbpDgHl6CW5h8OXjaEC5Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMJcVFoqw%2FbJH7vyByKtwD5aS7q1AHVpIjJhN%2FOdoQrF%2B%2B%2BCE7RnFqxGrSttnwWOu3QaO7kmFh87jZ3QlBfRbWaG05VR1ghN%2B8lzWfID3LxwU2HmAs%2FKm4brkgMa%2BdsXFWRtzRmFB3Te8b6csXTYB5QtWCLfAaUr2lNcpWqtr5Ktl%2FEGgx1PZN2P%2BT7r3nC1GZOKk%2FdGa75aijH5cpWqenrTIx7AVMwGr0e%2BGAT6T2cfsGfK6rYR7NgCrtS6XNCb58H3FRsdmfm7kz9uMsP73ejP0Ex%2F7WfiJaHG%2FfkWGcMK9RrGQrSUMKfufqwCEhpyLZ%2B2UwNy1dKtvZyYDndOidmVOgXLw%2FrN%2BoOOvhE%2FeS4BHYF2nLG4jvDx%2F7ml62C3Hlsfgp8Pzlx6HU0%2Fniqm1YwKQdpqIFaxuSRN1PJq%2BTqeM4FIIfSRKc5a00tCHKRfrOwqrnqki2iNOJhLMnfU%2FK2LkDuLx3IlxlLbgZOD4T5asiRxpWX52CDsUzL4r4Wgm8ofjb7caG4HTWh9x2JoJ6kwku3Ugqr0yl5WLl0GBGTXXJVRijY3hvwoMgkcpsArZhbjB02J3k77QDIgNm8OZK4bjFb1XzLOOlHp%2BEC%2FKO%2FRHGfoXv78qAayEMEzix6UEGqKCcbgMmnlAmXngw9qGMwgY6pgGWaydhKedCQqNiNmPVhuUVluwXnsG4LgBRYZ0K9odChavJu0Kc5f13J%2FACcsEdvVH%2F3RIvmhA6o%2B1uK1c4Wv7%2BeOwpipo24jWSM%2F%2Bqz5ccxUHiXQ9Y4vROT%2FIJU7yKxbWd8nZu733vFLe5Kb0l3P2ysilnfldMKJ8n2frN%2FnSyjFR29xX6Ky0lHhf0%2BmhiNhU8mxmoG29dFC58yUq42iDKCRtn%2BTHJ&X-Amz-Signature=971cdec34bc1e7154fc66d780ea05336e0c8802f555f6356d88c515001a2a878&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EA4VJJ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2NAKRBPY9M0ya31DgHHV%2BJqP%2FeUbd3JGFbNDuO398wIhAOZ3PRc%2BoEJCAyKeNbxM7lcnzzJzEeaZiUG96iR93BtjKv8DCGEQABoMNjM3NDIzMTgzODA1Igxsz7mp0qidU7NB9Vwq3APhltzQeGgW098BqQhdu6hh1rWxsPeW8mnPyhZVdNiASj9p6wZhTkriQeBTOJGAOuXqIsJMAiPXyogyg%2FDgSaAav7%2BfhVPV1yJM0GSmu8pqqw6MND5WaAKUd5t4JcfQyDFvnjAyU%2B8LgN9nNNH9JQlxiz5kreyp1kvUVq0zEtGo9teEPeAMJwjlgIEY3Xp6qh0gesZTtpyxxN5YMB%2FTXxZZywc4nIA7dVshRz8GKG3yPFTFJvPkctLSDafxOYcb7gFiCRJaraZuk9X1x8ddImn1j8CGjsMHlXlESwXp0rKo%2B8L5K5j2587nRW49YaE3d5jKTO4l8E8sdejLlf1nCaVHVYjMpa9KNd2i51YPls4FwZEJrxrGZ9b0GKcIOimU%2F8GFuzXp5S%2FOrjltrOVmmIxEHIv1Njm8MbDiLtsfrDzBol477330u6OQzeFxyQIRHFCr8fm3mX7Wsp%2BrYd3XMRnxwarDOGzXHRDJqdO12sunh12gxwcccNDM5%2BYP6LCwcDaqTVBjzlhL%2FfWHmr3LGxs9l6mpmQ4Y7HfUR3inIzCL4XyFvXrHWGhVsBBR6wtcIOq4adYNAmNhRob0LlVEf2m4smu7p2sn4ezlwgTqftNF%2B5UiVmLG08WZAySVcTD%2BoYzCBjqkAToBjdk2j54GZxkMMpUrooYfH0OGdd4P3%2Bp0P3h7eXrOjXbaiXy6eGaG0lYPASJlRc%2Bfoxm9SwnCTWfs7wIipKnFER1GkX8YRyZZUIOsOjGlllylv6zWQiaUmwsLy57f%2BW1qH%2B3KLTxYeMplzlntLfjWt9scz8GsuXEw2sl8nlt74zcPitqX7GwBCB6kCoac35G0YMJD0UOXDXU%2Bfo1%2BneHSMNvr&X-Amz-Signature=52507be7e52f59229948760bb2d7986d0c7308e73e4c1e474586104961364872&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S4FTMT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJf%2FLgZBYwDzm5cGAx72DSKjI2Ng8bvJmYnCq%2BN7TNlQIgY%2BswLASnhMw5rIs3VInkZiiAKWrSV%2FQ9%2FtWJTB2Qqfcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJttqCcXaGAMWs%2Bj4ircA1fOMADK2WZXnGYkiQZKYzYs1aUYiDRCd7p81FCF8hc22%2BGIHMNZ4LC9I6yt%2FZKv0xmorZb65frTBOr8w6vLENgpcUo3tS1F5hOEUr27HolPVgWY7TEXOBFljeORaEBsWalsAzh0Gyf7UpxDo%2FwILOShoDuQkwFhsonHxRo0xx4wvWuh6idWg3OFfI20fbq5Kgd89z%2FUTVvqyqG1t2ol5LH0GzC4kK%2F%2FuCrk2VaWhSvZbFVeXnEnIVHgK1YjHqkjz9zyaem0w%2Bjv%2BCzmCW34TdkpYt7M7MSlJrVZ36aX6F6SIcc6nF8KNh3s5Vin7d7KaaRG8s%2FIfxHKo7Rc0Nc%2BYpFOy%2BKF4sBOUeS5Zkxe2O3xgzY%2BhKOUwk7PQJtjZ%2B%2BxS3qYePghLCit5r9zWymQ8khqEOiJcTobGtqgYWgiR2EmhImqmIAeaY5jZEFm2T%2Fjyk%2FPANaHgY%2F6XBZKzQABj%2Bf5UsttLCB5KQeBW33JbGjPkhOC3mqZag4YkH2gFfcEy7hir38jOrE9QYCb%2BlPQtuB2ndKqlh1QoTSzfkX8vwTJHe9ukgv3dyvvUqa%2F5B%2BYnFxWn914OgFFpUYJ0aMbswxIvden4P5ADzcNrOCvFXJbxdE3u4PwdDEgiiWvMN6hjMIGOqUBhuWIWzjq1Aq2QPjHxs1JR5UrgbnmHfqhtwIg3bcXY9UukoOopWb0IAFbzUT2QifU5z%2FV1uLp1OBHpltbywJC8n%2BJaLBlRruKzF25nR0LMkQILGJ15GhNX%2FwY2tdDCFmCuFnQIM8qwY9fNryAPFXVc2OQxrqqOo8V9Umjh5Iz8YwuEf%2B2XG11dRK0ZZ03lC7bSQa5R32eqYSzJ3CkD59DN%2Fm4k5sf&X-Amz-Signature=7f7bc25c95879b46c965e23a5e2f21796f38906ac39e65336859ae5fbbf7f976&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
