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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBLYGF6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvtIoqF58%2BwsUfrdmRuj8Mei%2B3ybAS8T96O7ITBlCm2wIhAMl%2BMO9xMNlyxMgfbJz0V3Uye5F2%2Fm%2B4%2Bf84ep80NrHNKv8DCC4QABoMNjM3NDIzMTgzODA1IgxXWLoLz%2BX%2FijMpH2cq3APf4dUgna6F6OeFOTHpTqNaybMfs10noTJeQAeQ7W%2FggxcDkpnWjCXIlNib9usy10oFRc5LYHM908oBZjeEkUeF2lixi2vqYBag4TR18sLG3tIaLA5pSLKF2MTQfplnBEzW37Rmlq8FClnnVU5mxub%2FKO%2BALG2v86bzoYRqNV6Q117t23Ri3vg%2BkOVHXyP5D8knVDtrOGkZRJHoC%2FMn3BstZJTLTDvRT1Lm%2FBWH7Og9HPs3xVjfClazySw6tQpa6efQVmMlaIC0i0UnVG54HzK7YGIkFN6FhJpqcCdaqoJBojLM6K1DwrLNqkbYb0ej759Mrn9bLbRWeAOuCUYg2qDXJFe%2F7t2Xd4Qch6Bg1AT4et588wb1LCemf1zy6vB46hDQ4RJIzjSzFcV8yb1bhJvm7JmVuWFhzUp3%2Bgx%2Bkr6qTBSS3wYd%2BK%2BxOGMdL6zQDKNOJG1eUUEkRc%2F%2BZhe5mwrz0rkvCqA%2BhhMg7m7iGj%2B3funLfqM1BtP46Az0BDlPclpL9M4tJHMoB%2FbjTyvQcPODwns5HSm2hPd0GIlQ8SOL0M7NDitXyndivAkC0j%2FRHQ8mXIo62oNX6X9h9lO0rytBLka9WViVgQuZF%2BPsxJp5jVlz91x1Z%2B5VDr%2FjFzCy%2Bo%2B%2FBjqkAcz%2B0sqlfZrTR1gaz%2BnvYqYIfjJK0oV6G1U6%2Feo5ZOrs1iFzWprcUYDzjnZ4w%2Fdt4MdtRbSxYw%2FMbe4ONwrfFoYpLXq7X4eoNXEPnvBrjZrAyA1KqIngoBFkF3eHSxM%2Bpl6TQ8Cbj2dTKU6fbX%2F5%2FG6B3T36YNF1NxF%2FgEbOUczY71w0UiiHsnLtawiQGnTV%2F9vW5nDOV5jiLEsnNvQN%2FCwuIJWL&X-Amz-Signature=349c9ae78f304e359889cfedc9572d2802fa8f6308a006d80df647fd267258d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBLYGF6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvtIoqF58%2BwsUfrdmRuj8Mei%2B3ybAS8T96O7ITBlCm2wIhAMl%2BMO9xMNlyxMgfbJz0V3Uye5F2%2Fm%2B4%2Bf84ep80NrHNKv8DCC4QABoMNjM3NDIzMTgzODA1IgxXWLoLz%2BX%2FijMpH2cq3APf4dUgna6F6OeFOTHpTqNaybMfs10noTJeQAeQ7W%2FggxcDkpnWjCXIlNib9usy10oFRc5LYHM908oBZjeEkUeF2lixi2vqYBag4TR18sLG3tIaLA5pSLKF2MTQfplnBEzW37Rmlq8FClnnVU5mxub%2FKO%2BALG2v86bzoYRqNV6Q117t23Ri3vg%2BkOVHXyP5D8knVDtrOGkZRJHoC%2FMn3BstZJTLTDvRT1Lm%2FBWH7Og9HPs3xVjfClazySw6tQpa6efQVmMlaIC0i0UnVG54HzK7YGIkFN6FhJpqcCdaqoJBojLM6K1DwrLNqkbYb0ej759Mrn9bLbRWeAOuCUYg2qDXJFe%2F7t2Xd4Qch6Bg1AT4et588wb1LCemf1zy6vB46hDQ4RJIzjSzFcV8yb1bhJvm7JmVuWFhzUp3%2Bgx%2Bkr6qTBSS3wYd%2BK%2BxOGMdL6zQDKNOJG1eUUEkRc%2F%2BZhe5mwrz0rkvCqA%2BhhMg7m7iGj%2B3funLfqM1BtP46Az0BDlPclpL9M4tJHMoB%2FbjTyvQcPODwns5HSm2hPd0GIlQ8SOL0M7NDitXyndivAkC0j%2FRHQ8mXIo62oNX6X9h9lO0rytBLka9WViVgQuZF%2BPsxJp5jVlz91x1Z%2B5VDr%2FjFzCy%2Bo%2B%2FBjqkAcz%2B0sqlfZrTR1gaz%2BnvYqYIfjJK0oV6G1U6%2Feo5ZOrs1iFzWprcUYDzjnZ4w%2Fdt4MdtRbSxYw%2FMbe4ONwrfFoYpLXq7X4eoNXEPnvBrjZrAyA1KqIngoBFkF3eHSxM%2Bpl6TQ8Cbj2dTKU6fbX%2F5%2FG6B3T36YNF1NxF%2FgEbOUczY71w0UiiHsnLtawiQGnTV%2F9vW5nDOV5jiLEsnNvQN%2FCwuIJWL&X-Amz-Signature=e83f77352bd7c595f85eaf4299fc46824481b0867a6940e68bb1826b3d5d0bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCXSP3KC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BfOIRiOLETocKiQDno6wDv3JztuAn2fwL5ViJdH9KMAiEAu%2FGnee5RWHuijcYYjhCYbabtJesGoPMXfVgcfBQczSkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH0aNFqqiqRDoIRT%2FircA0kXRsJEKSZWkHFJ3LCq16yWirtiW5cE5u%2F8qp8kz4C3MWMfEjv4JuvOEjrR07XfztPO7Ep%2FRjs4uFdso4Ns2sNcbQsssqHyArNwIuXn2DsM9kjIwRsYuQpdAIP24F%2FRQnW5tWGajTr6wVeS5aDojNjaqFGo%2BfmZ%2FfKbhZEA9yiIkGtP7xYg9t7fR2JefqIM%2BImH72X9lal1l1GZfKD12D997JsQDSoFEC7RbpKZNFfSjb3UwcCvW1EtLuZmOdiE68w%2BtvRI2tYKUdPJnNK5fn7EbN6wzwikm7nmvv5IaTGUJAkAvMETYLfDJkDe04MW6RNK%2FjCsLWZu8QtMR9kRAXvIIPDVGORDcyceJOXiTf3jEDizBQfVzBqLRF8KlBJRw%2B6ckKDfmteGc900IYKL3JqTZwo2ZccJNTnAksghbI3uhT3g1xWDxZe35tYriF%2FfHyPaTKq6IGiHmpAk%2Bqs%2Br28F7oDI9QvuOuPZaJ6c2uF85fva4%2BLPoQMX%2BDWtD521u2nMTCqcfkcX8Gi3wFvBSn6czuSkCgrBnjgVgT9NbTofqsAy6pZYprjTlfzYD4%2Bl%2BjY6NGWn9KS2DHJtBC2U%2BhoVBUgcGxcLw5FooyiKCBxqzmHys9lmO9k1NtdjMKj8j78GOqUBELb2pHsg0IegPTndivEDszTZXO4WaPp8NdiTSX%2BnCzNQqCBYK1eHjVGnytug%2Fr6fI6TSmT8wHGa5EPcKjqQeA2jGMOJ87uHp0B4mdJwfgqugIVqM1UzXgin3KWDocGFiUt49WNLJP%2F0ZPdnMz7F0CwbWAvNDFd9ShWajCTlYW%2B9v5cJW3TbWL59vS94Ux4%2Fmb0o6HR4SpmJeYy5h5Y3b6B3GYGtE&X-Amz-Signature=26b0786c57d7a76d9bce03e2f02d9ac713f5ee82558846eb25feaf9f6ccf9e08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBHQWMW5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFT6Gv7NiO4xGiIOdWR%2FZlUwYonPMxsnxun21WAxnQmfAiA%2F1Pq9fDv%2BlC4yRMDo0G39TvH%2B1ZPL282TfmOY2Cp78yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMgKKvkpIAMzwn9YeMKtwDZNqD3hOjH7AFOAsfPtLiVIevikvxZHeOi%2F%2FIqLNDr0b6HOyiSl8oAk1jaFpk1j%2BxvRLiJz%2FvT6G%2B9FjmQKR6ac0ssmqxefTCbo7MRbySxM%2FmkgMNSog6irL0L18lD%2FH7NsuLjuVjrASs8JioH3JkFneSWaFJCbUuj%2BVR6YIK9%2Fhj7ojytOg%2BLmKj8ZCkDedQGgCF9%2Bz02wdLGcgI6syI1sAILGkffTwS4b3Rndj1yZdKGC3p%2FpU4UVLmNbsBuXSgPqG24w6QMKiz1PHG8W8wSIz7cpceDPFz5pW0Ec9I6V33qELc1LMSiUe10xPYcyLN6PGUwDXQjEzGO6d0YdAVGx2VhTGehD%2FpWfOABJHVgl5F06qCwuw4GeRAh2o90kImkv%2FOBVsZOUGOOgBrVA4s8RX9N2%2BLKgdyX6Brefy%2BJCoPzQ1AG5Nec%2F1SLVPWx9B7Uj3peqBu3brCRLpC04rmXmRrP9yJd63yX%2BEvof%2FO1XuRxAIgTsNbnseVefK%2B61J%2BSoQqq8UIwq3%2B717wgoqA7wYtctxrz4wLUob46%2BG7eCcRX7N5lmK73IQGUI607M0ovrjX%2FxOr5pL%2FPoDTUe8Pb38gdKZNRhVi%2BIsAqiJXpJtqG2xscQwTa3qGpwYwsPyPvwY6pgGVliTguh58CpZ%2BC60WJV9oibkta1oMTolK7aZUxAdNQ%2FV%2FJ0LMILQQlVZQIZ4XoJHZhEde%2FBb8Wy7c6KjVi5gLrRpGY35mhC3a%2B1PN8jjcnCfja0mGi7iIZgUztvnxcdtDrogtK%2FmXSTwQH8PTAdGpPUOLUnnF4al0m%2Bsd0j0hpum57Y1ztDcrUKjSbxrkhRBjZkYShBUSXRgov3faAiqO3ibV%2FmuM&X-Amz-Signature=96b2afd9dae59f2a044abf2ffbb5578470cd72a016e7b7a57bcf1d91865414f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNBLYGF6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvtIoqF58%2BwsUfrdmRuj8Mei%2B3ybAS8T96O7ITBlCm2wIhAMl%2BMO9xMNlyxMgfbJz0V3Uye5F2%2Fm%2B4%2Bf84ep80NrHNKv8DCC4QABoMNjM3NDIzMTgzODA1IgxXWLoLz%2BX%2FijMpH2cq3APf4dUgna6F6OeFOTHpTqNaybMfs10noTJeQAeQ7W%2FggxcDkpnWjCXIlNib9usy10oFRc5LYHM908oBZjeEkUeF2lixi2vqYBag4TR18sLG3tIaLA5pSLKF2MTQfplnBEzW37Rmlq8FClnnVU5mxub%2FKO%2BALG2v86bzoYRqNV6Q117t23Ri3vg%2BkOVHXyP5D8knVDtrOGkZRJHoC%2FMn3BstZJTLTDvRT1Lm%2FBWH7Og9HPs3xVjfClazySw6tQpa6efQVmMlaIC0i0UnVG54HzK7YGIkFN6FhJpqcCdaqoJBojLM6K1DwrLNqkbYb0ej759Mrn9bLbRWeAOuCUYg2qDXJFe%2F7t2Xd4Qch6Bg1AT4et588wb1LCemf1zy6vB46hDQ4RJIzjSzFcV8yb1bhJvm7JmVuWFhzUp3%2Bgx%2Bkr6qTBSS3wYd%2BK%2BxOGMdL6zQDKNOJG1eUUEkRc%2F%2BZhe5mwrz0rkvCqA%2BhhMg7m7iGj%2B3funLfqM1BtP46Az0BDlPclpL9M4tJHMoB%2FbjTyvQcPODwns5HSm2hPd0GIlQ8SOL0M7NDitXyndivAkC0j%2FRHQ8mXIo62oNX6X9h9lO0rytBLka9WViVgQuZF%2BPsxJp5jVlz91x1Z%2B5VDr%2FjFzCy%2Bo%2B%2FBjqkAcz%2B0sqlfZrTR1gaz%2BnvYqYIfjJK0oV6G1U6%2Feo5ZOrs1iFzWprcUYDzjnZ4w%2Fdt4MdtRbSxYw%2FMbe4ONwrfFoYpLXq7X4eoNXEPnvBrjZrAyA1KqIngoBFkF3eHSxM%2Bpl6TQ8Cbj2dTKU6fbX%2F5%2FG6B3T36YNF1NxF%2FgEbOUczY71w0UiiHsnLtawiQGnTV%2F9vW5nDOV5jiLEsnNvQN%2FCwuIJWL&X-Amz-Signature=79744c674b89ad2c25c593e6cd4fc6ffc50edf3ec6a3283c1de96b0d38303e07&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
