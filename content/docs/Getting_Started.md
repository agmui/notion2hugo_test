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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQKUV7X%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCJRcPvkrXEaXFgEtQGBPn41lJkeqpeodgCcADA6DozKQIgLvQTWOUPPfj%2B8KE4aVB%2Fz0cvSQnvn0S9EFis0m3PCt8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDC6CRmclFpW7P4esSircA1J074ZxlmzsuGea8BsAI9N6RK3uqsllKnwU927XIMNZNQ%2BKbSmLGGuznAfh8B3Bgmbg%2F1ljtORB5dSQtoZQYzi8FQ8TrEL5NC%2Fi%2FtpC27y2%2BxDpETiX1Me9sV0WbS5GZUvrCyC15FpbWQkVxBN6J3kcvWKZymZWdcaEMhN8sdb%2F%2BRaKD8fj2RrHvGuPUV1FGRreMbubdVNxOrRsrYOB0zqFiWSZ%2FgfrwwDY6SfMyeccZv7vFgQ2aGYlIwZ1OXN4Fl1VZXg2PT4ZJP6PKF6LFq1LSdCfZsfwMfSRkbPXYJ9I2OD6ktebpBySLexhnW9%2BvTNfb2eyej4%2BjmPdBoj51os1OVAQSpGSNT%2FeING%2BwTJk97xOP2Ab0OD%2FRBTqUL9%2FwgLP0qC%2BP5ZuFys%2FVeI%2FDRf8XKw4Jmkg1u94lSyfK5pc3R9ozmFy%2FXIRfMYQhalIxqPpmi%2BlxEIshejAdBDA0FleEhA7RzBghVo8QHxm%2FxXe7Iw3FuDOC05TaI4fhyPM9sbh3mWwHTIuWuWR5q79jsiwLXM4zIsotX6l%2BFBna9dZr1MnmnZb2KAdMZhxpRKsz93L%2FQYfX%2FtkSF%2BwYFXhoQ0jvHrS%2Fy1YFz2RycrkrQAYnXznKkIALIE3SeROMJyYxsEGOqUB2XE5S7vK8VO1qStM11TQh2F5gv1nrdjYlWEILEpAcL4zYurN17QR19KJ2g7Dn%2BhAmE%2FCED3bizzw%2F5fZ6zI5mzCTV9q4fdzE%2FRSIM9s6b79PBXFfQskZlQ0U6IkctUUA6wIBMhEEjhmkZ%2F6P6gDB57BAZDZw%2Bk5FZj9HZf%2ByD%2BCw4XwpWUOHlAFnailWI%2FE6ZxYOm3EXQC22ItSv7hzmijr57jfK&X-Amz-Signature=c12175d61c59974a3e8ab783f447dfb5f651d5f008544078aeccc7e813aeb4d9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQKUV7X%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCJRcPvkrXEaXFgEtQGBPn41lJkeqpeodgCcADA6DozKQIgLvQTWOUPPfj%2B8KE4aVB%2Fz0cvSQnvn0S9EFis0m3PCt8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDC6CRmclFpW7P4esSircA1J074ZxlmzsuGea8BsAI9N6RK3uqsllKnwU927XIMNZNQ%2BKbSmLGGuznAfh8B3Bgmbg%2F1ljtORB5dSQtoZQYzi8FQ8TrEL5NC%2Fi%2FtpC27y2%2BxDpETiX1Me9sV0WbS5GZUvrCyC15FpbWQkVxBN6J3kcvWKZymZWdcaEMhN8sdb%2F%2BRaKD8fj2RrHvGuPUV1FGRreMbubdVNxOrRsrYOB0zqFiWSZ%2FgfrwwDY6SfMyeccZv7vFgQ2aGYlIwZ1OXN4Fl1VZXg2PT4ZJP6PKF6LFq1LSdCfZsfwMfSRkbPXYJ9I2OD6ktebpBySLexhnW9%2BvTNfb2eyej4%2BjmPdBoj51os1OVAQSpGSNT%2FeING%2BwTJk97xOP2Ab0OD%2FRBTqUL9%2FwgLP0qC%2BP5ZuFys%2FVeI%2FDRf8XKw4Jmkg1u94lSyfK5pc3R9ozmFy%2FXIRfMYQhalIxqPpmi%2BlxEIshejAdBDA0FleEhA7RzBghVo8QHxm%2FxXe7Iw3FuDOC05TaI4fhyPM9sbh3mWwHTIuWuWR5q79jsiwLXM4zIsotX6l%2BFBna9dZr1MnmnZb2KAdMZhxpRKsz93L%2FQYfX%2FtkSF%2BwYFXhoQ0jvHrS%2Fy1YFz2RycrkrQAYnXznKkIALIE3SeROMJyYxsEGOqUB2XE5S7vK8VO1qStM11TQh2F5gv1nrdjYlWEILEpAcL4zYurN17QR19KJ2g7Dn%2BhAmE%2FCED3bizzw%2F5fZ6zI5mzCTV9q4fdzE%2FRSIM9s6b79PBXFfQskZlQ0U6IkctUUA6wIBMhEEjhmkZ%2F6P6gDB57BAZDZw%2Bk5FZj9HZf%2ByD%2BCw4XwpWUOHlAFnailWI%2FE6ZxYOm3EXQC22ItSv7hzmijr57jfK&X-Amz-Signature=3b76c9b2695ad8d907b1cf4ba1837bdf6c08f97e2732b3e2c4c76511226d2f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQKUV7X%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCJRcPvkrXEaXFgEtQGBPn41lJkeqpeodgCcADA6DozKQIgLvQTWOUPPfj%2B8KE4aVB%2Fz0cvSQnvn0S9EFis0m3PCt8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDC6CRmclFpW7P4esSircA1J074ZxlmzsuGea8BsAI9N6RK3uqsllKnwU927XIMNZNQ%2BKbSmLGGuznAfh8B3Bgmbg%2F1ljtORB5dSQtoZQYzi8FQ8TrEL5NC%2Fi%2FtpC27y2%2BxDpETiX1Me9sV0WbS5GZUvrCyC15FpbWQkVxBN6J3kcvWKZymZWdcaEMhN8sdb%2F%2BRaKD8fj2RrHvGuPUV1FGRreMbubdVNxOrRsrYOB0zqFiWSZ%2FgfrwwDY6SfMyeccZv7vFgQ2aGYlIwZ1OXN4Fl1VZXg2PT4ZJP6PKF6LFq1LSdCfZsfwMfSRkbPXYJ9I2OD6ktebpBySLexhnW9%2BvTNfb2eyej4%2BjmPdBoj51os1OVAQSpGSNT%2FeING%2BwTJk97xOP2Ab0OD%2FRBTqUL9%2FwgLP0qC%2BP5ZuFys%2FVeI%2FDRf8XKw4Jmkg1u94lSyfK5pc3R9ozmFy%2FXIRfMYQhalIxqPpmi%2BlxEIshejAdBDA0FleEhA7RzBghVo8QHxm%2FxXe7Iw3FuDOC05TaI4fhyPM9sbh3mWwHTIuWuWR5q79jsiwLXM4zIsotX6l%2BFBna9dZr1MnmnZb2KAdMZhxpRKsz93L%2FQYfX%2FtkSF%2BwYFXhoQ0jvHrS%2Fy1YFz2RycrkrQAYnXznKkIALIE3SeROMJyYxsEGOqUB2XE5S7vK8VO1qStM11TQh2F5gv1nrdjYlWEILEpAcL4zYurN17QR19KJ2g7Dn%2BhAmE%2FCED3bizzw%2F5fZ6zI5mzCTV9q4fdzE%2FRSIM9s6b79PBXFfQskZlQ0U6IkctUUA6wIBMhEEjhmkZ%2F6P6gDB57BAZDZw%2Bk5FZj9HZf%2ByD%2BCw4XwpWUOHlAFnailWI%2FE6ZxYOm3EXQC22ItSv7hzmijr57jfK&X-Amz-Signature=f30060ad57da14b2250a53041f4f925ca5a2058af5cefb3526ac307c932b43a8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OXK2JGA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCUx2F2orV7wpUg6rjt64ljkpmwGrxFjNXe2oeAZYmzQwIhAKG4%2FAPoyRDkbPMeGlbKFFMkUxhSTs8GDN%2FxNvzv%2FqdUKv8DCBEQABoMNjM3NDIzMTgzODA1IgyFunFJ2CaIF0bqd0wq3ANRCd8skksG6LcrBblA6gZ9m6o3NlAS4A9AH2NPDnokO5NuADIhbQvv1EUN3%2BtP8cRdniPsdH5mJ8rTSBzxgK4zgBXNwufD9UL5wlStHUGMzgJZNbTqzr930pI3Bp5%2FCVdp5kSdc5As5zTTYhm94Na3ivQgt3Fv2UQPhOzjsYlCCMBd4w6iypY1VwuA1tDonbOa3oXESWpOME%2Fqq5%2FfDYRTEpuBdyxKyqgRbBPyCQoRNY8zyAJSnETpTQZJ5ltqyZVKnF0lT9AY6HWvrybFY5qtAK7mRO1ExzHOfzvUTgK1P8ywR%2Bmr%2Bw%2FTWl6fMhXHOgiImqpilZorsI%2FLr3NUARTINiyz6F%2BkmkyLT5WK5v0ym6WO%2F8baqeA8dbd5k%2FEohDd8%2FgYRKggVQ6KKYnZb84C%2FZzPCp9yy8tpDGLQMHYw0KoZvCXX9L%2F8JGfkOfwEzfY%2FDvIa72EC30M%2BYKYYybwWENgoSe61gNY7JkqE5fQwrAqSke4OwEBFpFJ6Pdxc97Tu4GU4JnvgEbvGpSNCq1LQwSGLNSxWf6LDqW2zB3XhP6q2wOTSI70Qj1fZmacneaN5zNpL8ueK0acVNuAIqrINWCv7dmzo09axUK%2Fl6L1Ez90XUxkvouwRr7pifujCRgcbBBjqkAfbYaDqKY%2FYTEIf2SoR%2Fy0vlk51mFs6aEg2obRRqAzyxTbb2OC8YxUVrUdzyNRGtPNNShW%2FFBo9i707zlWb2ymdUMzSSE4YENXmFYERJqvgHda%2BVc%2BRiAf47Jb28zqfnQiAl%2BxFb26YDIT2iibMm34W2FTCX%2B2YpV44kNSF9mmBnb%2F7NhbMJ8rWj7mQB7JcMDdVJ2EQb%2BD3qrBS54VFQJZMIqN0W&X-Amz-Signature=1e334ab7bc501b47546acefb7f1e316c533e793d8496a98f108e323329e5017e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJAVV2DB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD4AWPduuL%2FU35OnQNRHhPK9Vm6%2BFAM01ORMQC4celRSwIgaHjVGL4TrXfAQbzXWpykqXM7ob89x1ym9XnstmWdI9Yq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKuM9qibDqRXoph8aircAyavyLKEj3N2HEuNz3uOWboqsVw6Q7V12N%2BMDoyVxXTu9MqvAO2pTszfRJ%2BYDUYZTPXq%2BzHijuwM3pH0uFDJRkEaCgf%2FCUQyAKPkI5m0Y24W6EK7kLh9UssMWkMLsZ%2F51gp6TIYMZFQWtK7Tz5FSIqxg7rlJiLbhkFXTCyddX7NbLijfbnKDlLgR40%2FggxU67x7T%2BpGLWsM4GPVvOkWM7p8p0oW%2B1ZeRrXYoB7KVBrrivz74ttsYISdZfTwOfyQ1Rh3hRtT17oOIzZHDR0jRH68tSvvqoskw7KzhoBNUWvZi8pieqH4vZUBHk%2Brx%2B5hO3W4oVpa%2F1wpprt0KYpMamZeLSqvP0N1hMBKuyjKlb2si9Rf71OAQUHi5Ihyi%2F%2FJP8HcLku%2F8YIgfcAz2w9J%2B8CXAGGKmTT5UlR6gE0TwUUAd1dZhF%2BdcXs9sweE79ryn7DVUYdh0eaa8xB9p3C9tKtmbvtFCFO6FAhH1l%2B8CuUYu%2FdsrxOt1UFAZgaDN2r982ElUqQdOtAwXd%2BaWreCPhRZrSSSqq%2BfrEvCp6nLn6%2FALI1TBIPWu7SVkd11jImUXJTGOq%2Bg0FPEcecqDdViA6%2FM1b8fkWihlJQiuPDWz4cmVZ%2FeorhlxEJm4tby3MPqAxsEGOqUBvKQFlRcfAnLbJVOt%2FsyjTK6pbHKCIuHQfWKmbb0KG%2B0y8LfiC8CWhMW1xw0vwaEpxKIzhZnAmhD8Qb2Qx6Mw%2Bbogrxptcs2o%2Bedaaj7wBgSCP4V4iukOlU4N06OFRsaEaKwtOnwYOiyGFArAzviw%2FF9uhuxwwC337htgDOW%2FUI8J%2FHhSwfsWVwTQUf9WMClBJgij4BwngqJhMI3D1Tr6iE4U1e1W&X-Amz-Signature=70ec17b4365a5e724db3f58e0a8d38b9e8cdfbe5d9c4e2429991dbce4942ee41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAQKUV7X%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCJRcPvkrXEaXFgEtQGBPn41lJkeqpeodgCcADA6DozKQIgLvQTWOUPPfj%2B8KE4aVB%2Fz0cvSQnvn0S9EFis0m3PCt8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDC6CRmclFpW7P4esSircA1J074ZxlmzsuGea8BsAI9N6RK3uqsllKnwU927XIMNZNQ%2BKbSmLGGuznAfh8B3Bgmbg%2F1ljtORB5dSQtoZQYzi8FQ8TrEL5NC%2Fi%2FtpC27y2%2BxDpETiX1Me9sV0WbS5GZUvrCyC15FpbWQkVxBN6J3kcvWKZymZWdcaEMhN8sdb%2F%2BRaKD8fj2RrHvGuPUV1FGRreMbubdVNxOrRsrYOB0zqFiWSZ%2FgfrwwDY6SfMyeccZv7vFgQ2aGYlIwZ1OXN4Fl1VZXg2PT4ZJP6PKF6LFq1LSdCfZsfwMfSRkbPXYJ9I2OD6ktebpBySLexhnW9%2BvTNfb2eyej4%2BjmPdBoj51os1OVAQSpGSNT%2FeING%2BwTJk97xOP2Ab0OD%2FRBTqUL9%2FwgLP0qC%2BP5ZuFys%2FVeI%2FDRf8XKw4Jmkg1u94lSyfK5pc3R9ozmFy%2FXIRfMYQhalIxqPpmi%2BlxEIshejAdBDA0FleEhA7RzBghVo8QHxm%2FxXe7Iw3FuDOC05TaI4fhyPM9sbh3mWwHTIuWuWR5q79jsiwLXM4zIsotX6l%2BFBna9dZr1MnmnZb2KAdMZhxpRKsz93L%2FQYfX%2FtkSF%2BwYFXhoQ0jvHrS%2Fy1YFz2RycrkrQAYnXznKkIALIE3SeROMJyYxsEGOqUB2XE5S7vK8VO1qStM11TQh2F5gv1nrdjYlWEILEpAcL4zYurN17QR19KJ2g7Dn%2BhAmE%2FCED3bizzw%2F5fZ6zI5mzCTV9q4fdzE%2FRSIM9s6b79PBXFfQskZlQ0U6IkctUUA6wIBMhEEjhmkZ%2F6P6gDB57BAZDZw%2Bk5FZj9HZf%2ByD%2BCw4XwpWUOHlAFnailWI%2FE6ZxYOm3EXQC22ItSv7hzmijr57jfK&X-Amz-Signature=2d0af7beed6653055fe055a51da9a65541ff325da1b791a6c2e15e6be2ea7cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
