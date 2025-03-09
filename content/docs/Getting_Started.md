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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFWKDBA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAUvaVy4mEjTovyGacoEvGrdxGpvkYp%2BxDlggmtdVpobAiEAqZ1jeUQJpxTOAL%2Badbqoeje%2F1z89GcFEWYH0P775hRMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCX5pSArzltyB4hRnCrcA9FaR8zsxxPCmWIC3SPfd%2BdtJ925fKdRkHHFsFD2hciqWSzUkcm5oAnqQWkLbVG2WtWaZkPZxEe0MKRw8i%2BqHbRjfD1%2FwchdAnbXI%2FpMGgN4JUGsPSLyKyE7GS1PQ%2B6zojSFBgLdY2TrxL7nwIk5o29QTuznyZGjop%2FHk1yg24iW59SEVOd%2FFz0bkkczwFMVmUVoVgGqg19gnq15q9%2B%2FRp72PBulY9RN6XpT5hnVeBrnXxWdKeV%2B5W7XDERDWUeAzLcKGqFpHItXGo81JN5P%2FqVPfl%2F1p6dRiyeX1GlShVuImr%2BTW20FhvU3rhvHMJsWjJDk%2FbNT3uQFQ19%2BWSx6dkdEG5TwljkZ6uZiqJW3yFSPoCR%2FUgzCpSAimSLKmWlTZbwhCKBh89HAo8GCAM%2FrN8r2ItQRFJV3MtOvZJOcQ8trnEMTcFtL2RmXWi1nVsWfaxKdmq1YgLI4yC4zt2loCUZYYVJ6aBuznPPTJU0vH3bFq7fanrKXvLAUu8cxr35dTtrlmYGzQOlXTjjQWHxkS8y2sys7GiX5YcNIVtzKtTdH9VGyuXM%2BHtTmltQ34eTM1XEBBIkGLW%2FI%2BS88xX8sEjO78Q57DqHXXQ4lXylPtoK5l10PPxnn%2BVIVkMVOMKrps74GOqUBfqdImWyK9gO%2FppimVl7GCmNLxqtMfbu2hebNwO1rBdNhD%2B2Sa3JvKMT0KQHaO1ReTjNC%2BWh6B8xRgpdShRKNqgXSG%2FZ%2B%2Fwt1c3yUgIBbKb4mkCHiqDEsxBWlZpr3GlqNTrqn7nqAAgfqSVM0ApatPlidXlF0ZQFDFTNoR0hvod9g6eXnu8wB8%2FBOz4V9ibEMRde%2FwgBswei9aJqB14vK9aru5e%2FD&X-Amz-Signature=b5260a83560daaa26a943e6c16ba9395d0a63506d6de52a49e0226cebe9eebbe&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFWKDBA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAUvaVy4mEjTovyGacoEvGrdxGpvkYp%2BxDlggmtdVpobAiEAqZ1jeUQJpxTOAL%2Badbqoeje%2F1z89GcFEWYH0P775hRMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCX5pSArzltyB4hRnCrcA9FaR8zsxxPCmWIC3SPfd%2BdtJ925fKdRkHHFsFD2hciqWSzUkcm5oAnqQWkLbVG2WtWaZkPZxEe0MKRw8i%2BqHbRjfD1%2FwchdAnbXI%2FpMGgN4JUGsPSLyKyE7GS1PQ%2B6zojSFBgLdY2TrxL7nwIk5o29QTuznyZGjop%2FHk1yg24iW59SEVOd%2FFz0bkkczwFMVmUVoVgGqg19gnq15q9%2B%2FRp72PBulY9RN6XpT5hnVeBrnXxWdKeV%2B5W7XDERDWUeAzLcKGqFpHItXGo81JN5P%2FqVPfl%2F1p6dRiyeX1GlShVuImr%2BTW20FhvU3rhvHMJsWjJDk%2FbNT3uQFQ19%2BWSx6dkdEG5TwljkZ6uZiqJW3yFSPoCR%2FUgzCpSAimSLKmWlTZbwhCKBh89HAo8GCAM%2FrN8r2ItQRFJV3MtOvZJOcQ8trnEMTcFtL2RmXWi1nVsWfaxKdmq1YgLI4yC4zt2loCUZYYVJ6aBuznPPTJU0vH3bFq7fanrKXvLAUu8cxr35dTtrlmYGzQOlXTjjQWHxkS8y2sys7GiX5YcNIVtzKtTdH9VGyuXM%2BHtTmltQ34eTM1XEBBIkGLW%2FI%2BS88xX8sEjO78Q57DqHXXQ4lXylPtoK5l10PPxnn%2BVIVkMVOMKrps74GOqUBfqdImWyK9gO%2FppimVl7GCmNLxqtMfbu2hebNwO1rBdNhD%2B2Sa3JvKMT0KQHaO1ReTjNC%2BWh6B8xRgpdShRKNqgXSG%2FZ%2B%2Fwt1c3yUgIBbKb4mkCHiqDEsxBWlZpr3GlqNTrqn7nqAAgfqSVM0ApatPlidXlF0ZQFDFTNoR0hvod9g6eXnu8wB8%2FBOz4V9ibEMRde%2FwgBswei9aJqB14vK9aru5e%2FD&X-Amz-Signature=1d9cfebf08ba523592b0164d9a3c0edb08df784fd8a12f60f75c9d94f8a2a42a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7IVWWWY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIFOXvuLwa7AmPc%2BZCymuvTVVz%2FpH6NCFvj0HNaQxZWnAAiEA4VKlwrnV5%2BTfqzyhgYjZHU9ZRe5FRo%2FIUMi7QYFk6wwq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDMfDk06OIN4oQh%2FDCrcA5i7S3XhQBUmXH7RdTKNmRWJ9EVw2GQ0uNJhUE3hZ%2BflEjwVtdAkP3qyfN1A75bOEyywPCBJbP2Mxs84p2rVN4qkr5enEGs%2B8Hb3fG1%2FWMM%2FMX6VmnQDaaEIPd0lVuVZr2AvD%2Bq4Mj0VC2IhRIMcBm5zWFE0XRSbzd2pVCeKQLeWlXWiH%2FOY6hLck69NsMaJpI6SLOU%2FrD1ZphkAF276qRoseYNsNF67gC3XoTsqsEAzi09HsYz4tbeSskchU8ECcwbz1S1DP44s1QulIxXj90oSjoM0pQLRiFY74WBRmTd4vsuLoFmnlh5CWp8Ss8sGinnxVkfXz%2BgT4FpzD4RVO1fEloooUwYk%2BiXYBehK1YCoE2snTJbPWogsD3MKqf81uuSsQ8mptNaq8FHGG3D6p1QgYowJhCZ0rfRH%2BSF7p34YCE4CRvrIeb8Yq%2BKhY6hNYqboV3KyTFb1Vfw9nFFEVk2hZXLmXjk2ENEYEMei2F8tdNaQem2Te0%2F5ylfr%2BC58xlZtlmKKCC5JvvrNBY5xGXyUvb0axBWqIzSYBhIIiLafOsw2lW4W8BV5F4TOYJeHeA3SAVIBlrai3ofctV6tMgiuthGPnlUIqThlysmTP78%2FBOYMh%2F6R9lADl8UEMLPps74GOqUBFNsJJrfj7pmp3JEa5b2LIrkQX1FdI3do6yRMmSuKEKQrriT%2FI6AObUygz1aQy%2B3I9NzPdhbYK0Me7qMN7BruhkMafuCKfhpUyGjFEVDUAoSyr9NFtAyt%2FpXxN4Bora1BELe4Q07QcN6pkyUp2dL4XMY32WNpw0euAAnBOdFHtSIAVtwBIgL6SOtp9IqqW1AQRfNdSflCpadTAgCljEnbRYGnoWKg&X-Amz-Signature=20b85ff68fc1de8f5aa56fb16d91cc065aa3006df137aec1e156e3767c99baaa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3BGGXPX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEHYtQy8MMR27ltSaZ9PAEgF%2FN0r4H1Y9ZhhWYyQld55AiBJVaCGR%2FGskEEqgtI69Bql7P7p9Cr4JqZh34DlJ%2FaM9ir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMJev9ZygKqOEFApg%2BKtwDW7sth8vtJKGyiXCZFIG8mB6lHrPu1BtGPhStLKSXQb1YKgYh044HUcU7wXgxlKOpMpnnL72EKb3bJSXHTBILSOKtUYWwgBOH%2B0JNHof%2BDSuUCMY3UTzj0aJRpuLOzXvK0beioBLym5vR0eZ07b0hEvT5YwbVeAdvS5ZieGPnGc6V%2FLCmfa5kSDhk7Hb9lcl2zkI2wzw8yO62D8vjG78o6xoIia9MsWFjuPcHP9LnScn3PQrYO%2Bn%2BpcbEXXALEUVK1gHZk0G8gAcrTEmsGFpUsl%2Bjz4VpNNZeNIEGUl9r0SNDTLeRdDefbDqSJBm7z4Jvr%2F0V0R6qZgmGAvGv5UrXIC3hgsXzfi2ubS%2F5cipyUA3ADUIkgtEAsN6F918hX8dwgzPGHUU9AHil%2BPftZbbX6SOWOx9I%2FhIu0oClUIy5z6olUAN3z%2Bf6UFLvjoJNWVwdrieBlCqI8IBwdCmckzpYjcd0Rj9utVkihEKlNVPBGz36pCjnXXE5gVTm2g00kpLDrtas6D7PSXBrGD0oNMe70Ap%2FPmilmwiTmLwPfBkKkeT5mQIuEVXyd0v%2FdYmgXqm6gDrIAWJmpWdpNiSQVIckldfnwdZP0R5%2BFRdgi%2BgxwOupexru5CM61UyAXwMwo%2BmzvgY6pgHU2ksGQ6CvpgGJ3kvdMMs2hLpcMHnjzcNm0ODSvxOWthVoD6Fun75gfZe9S%2BsQSPhR30i55t2XJuqzuf5PDkFx4KVphbiNN2D%2FroOxVCQE6OyAJ9tVeTTIvDvbE7L9fa1h8lGCCFRqY8k9%2BX%2BkqvIKXRmG0r80Y8AZmimfSbTTaoj8cLVFNNzYMkSvsbNBY3mWg2ZXQ6KGs3rQPJ6l8heKDMgcgdAL&X-Amz-Signature=0dd9d32203f0607b33e6a5517fa7e350a17355db0c30c6ccb90ef31f471df53e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFWKDBA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAUvaVy4mEjTovyGacoEvGrdxGpvkYp%2BxDlggmtdVpobAiEAqZ1jeUQJpxTOAL%2Badbqoeje%2F1z89GcFEWYH0P775hRMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCX5pSArzltyB4hRnCrcA9FaR8zsxxPCmWIC3SPfd%2BdtJ925fKdRkHHFsFD2hciqWSzUkcm5oAnqQWkLbVG2WtWaZkPZxEe0MKRw8i%2BqHbRjfD1%2FwchdAnbXI%2FpMGgN4JUGsPSLyKyE7GS1PQ%2B6zojSFBgLdY2TrxL7nwIk5o29QTuznyZGjop%2FHk1yg24iW59SEVOd%2FFz0bkkczwFMVmUVoVgGqg19gnq15q9%2B%2FRp72PBulY9RN6XpT5hnVeBrnXxWdKeV%2B5W7XDERDWUeAzLcKGqFpHItXGo81JN5P%2FqVPfl%2F1p6dRiyeX1GlShVuImr%2BTW20FhvU3rhvHMJsWjJDk%2FbNT3uQFQ19%2BWSx6dkdEG5TwljkZ6uZiqJW3yFSPoCR%2FUgzCpSAimSLKmWlTZbwhCKBh89HAo8GCAM%2FrN8r2ItQRFJV3MtOvZJOcQ8trnEMTcFtL2RmXWi1nVsWfaxKdmq1YgLI4yC4zt2loCUZYYVJ6aBuznPPTJU0vH3bFq7fanrKXvLAUu8cxr35dTtrlmYGzQOlXTjjQWHxkS8y2sys7GiX5YcNIVtzKtTdH9VGyuXM%2BHtTmltQ34eTM1XEBBIkGLW%2FI%2BS88xX8sEjO78Q57DqHXXQ4lXylPtoK5l10PPxnn%2BVIVkMVOMKrps74GOqUBfqdImWyK9gO%2FppimVl7GCmNLxqtMfbu2hebNwO1rBdNhD%2B2Sa3JvKMT0KQHaO1ReTjNC%2BWh6B8xRgpdShRKNqgXSG%2FZ%2B%2Fwt1c3yUgIBbKb4mkCHiqDEsxBWlZpr3GlqNTrqn7nqAAgfqSVM0ApatPlidXlF0ZQFDFTNoR0hvod9g6eXnu8wB8%2FBOz4V9ibEMRde%2FwgBswei9aJqB14vK9aru5e%2FD&X-Amz-Signature=b5ed50a3e37cc08a383da0e6b3bb7935a45b257a0abe3a33a244a4799e59af64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
