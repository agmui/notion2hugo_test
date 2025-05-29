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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA45FUMI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIES4ldCH4qP%2FdICBXupYPMVAPGPG%2FCOvtgxBv2GB25pCAiA%2FxyDo2YS0AmISGqZd9peZulwkH7nByMUwYo7GtLVOMSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7ZHDsHlVSEOieR%2FKtwD0GfIDrl9SvfVxB75L03PZKfLrhDrhwg0LzfOY9u5NUXXTUKgLgJyjGQRb3amEf9YTVe6IG3kTeGMVCYuQZRD9f3idzEApzJsKX1n5EY5egHNacQ3sCpzGaziIrJXIvfgUWgT3xHaZhmc3zxnZn8wtLnpFdG7YWoXIu3ZsISeueE7C56r6DPqhyb9vNlg5feWFvsTHetTae%2BMf7dUvZtk3weoR3OKEnNUcMv7Y4Vv7WlC5aFjsFep7MaNlfnZxKA1AXoeRXQenbh%2BIIRTnLez%2BUZDcYqM22eoK3uHq38u9%2Fu632UdlhNi1rnxlK9GbnTzcHNNr2vkt7%2FBYIwCRwCIw8QpMlA6UkIUFRKVJ2KAbWRJ%2B40hqAcjYPuz%2FceZHCOo35KrHfxAQ4fIobnjP85Mad3H0DoYv%2BZYXqqec%2Bv87pyUeBHHJiR1NcYMfLP%2BVFH49xVxJlvJAbO5AzOgSat1KRGuILhUhxutnWmAg1kELjLdzxn%2FoRL85skPNnnu%2FESK0fTtoSPA3jKe8QU33hY%2FcRKk%2Bra1uvHB4OdnPmuXEf9kh0f5VAdtczd4hODfk6MkzzKVuLsGQXS1VOJ%2FnSofL0L5awx%2Bt1092sNhlBg8rAgoSGCT%2FOCnBG0mx3Yw26PgwQY6pgHznfOIn0Zyt7lhy%2FyvnIUqpiG%2BAPqNIjP6%2Fw6HvH%2BA0VFwSwenr87JTETyd6aeC7edNgx5J2vg3KNvY%2BeNRqTvsvbU7mTNqhlczOO1j%2BhkAPewXLl4%2BeRqfFYlHox4gKN3Ca7OMHaKCojXdMkoK%2FYUs%2FRjltHBeKZUiHIbs8XVK8XlZXAmnZQM6vS%2B8zkWutmU14atGt301v1puMis4Yb3FUrfBho8&X-Amz-Signature=decf6f2acb3903816a2e2a22968c7f1ae3b51ca58db8b3d48e33c3432c3bb378&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA45FUMI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIES4ldCH4qP%2FdICBXupYPMVAPGPG%2FCOvtgxBv2GB25pCAiA%2FxyDo2YS0AmISGqZd9peZulwkH7nByMUwYo7GtLVOMSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7ZHDsHlVSEOieR%2FKtwD0GfIDrl9SvfVxB75L03PZKfLrhDrhwg0LzfOY9u5NUXXTUKgLgJyjGQRb3amEf9YTVe6IG3kTeGMVCYuQZRD9f3idzEApzJsKX1n5EY5egHNacQ3sCpzGaziIrJXIvfgUWgT3xHaZhmc3zxnZn8wtLnpFdG7YWoXIu3ZsISeueE7C56r6DPqhyb9vNlg5feWFvsTHetTae%2BMf7dUvZtk3weoR3OKEnNUcMv7Y4Vv7WlC5aFjsFep7MaNlfnZxKA1AXoeRXQenbh%2BIIRTnLez%2BUZDcYqM22eoK3uHq38u9%2Fu632UdlhNi1rnxlK9GbnTzcHNNr2vkt7%2FBYIwCRwCIw8QpMlA6UkIUFRKVJ2KAbWRJ%2B40hqAcjYPuz%2FceZHCOo35KrHfxAQ4fIobnjP85Mad3H0DoYv%2BZYXqqec%2Bv87pyUeBHHJiR1NcYMfLP%2BVFH49xVxJlvJAbO5AzOgSat1KRGuILhUhxutnWmAg1kELjLdzxn%2FoRL85skPNnnu%2FESK0fTtoSPA3jKe8QU33hY%2FcRKk%2Bra1uvHB4OdnPmuXEf9kh0f5VAdtczd4hODfk6MkzzKVuLsGQXS1VOJ%2FnSofL0L5awx%2Bt1092sNhlBg8rAgoSGCT%2FOCnBG0mx3Yw26PgwQY6pgHznfOIn0Zyt7lhy%2FyvnIUqpiG%2BAPqNIjP6%2Fw6HvH%2BA0VFwSwenr87JTETyd6aeC7edNgx5J2vg3KNvY%2BeNRqTvsvbU7mTNqhlczOO1j%2BhkAPewXLl4%2BeRqfFYlHox4gKN3Ca7OMHaKCojXdMkoK%2FYUs%2FRjltHBeKZUiHIbs8XVK8XlZXAmnZQM6vS%2B8zkWutmU14atGt301v1puMis4Yb3FUrfBho8&X-Amz-Signature=ddbe8e6c76fd193673b08f239d4d25060a47a45bb9629e2d33d4ac45b8b7b909&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA45FUMI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIES4ldCH4qP%2FdICBXupYPMVAPGPG%2FCOvtgxBv2GB25pCAiA%2FxyDo2YS0AmISGqZd9peZulwkH7nByMUwYo7GtLVOMSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7ZHDsHlVSEOieR%2FKtwD0GfIDrl9SvfVxB75L03PZKfLrhDrhwg0LzfOY9u5NUXXTUKgLgJyjGQRb3amEf9YTVe6IG3kTeGMVCYuQZRD9f3idzEApzJsKX1n5EY5egHNacQ3sCpzGaziIrJXIvfgUWgT3xHaZhmc3zxnZn8wtLnpFdG7YWoXIu3ZsISeueE7C56r6DPqhyb9vNlg5feWFvsTHetTae%2BMf7dUvZtk3weoR3OKEnNUcMv7Y4Vv7WlC5aFjsFep7MaNlfnZxKA1AXoeRXQenbh%2BIIRTnLez%2BUZDcYqM22eoK3uHq38u9%2Fu632UdlhNi1rnxlK9GbnTzcHNNr2vkt7%2FBYIwCRwCIw8QpMlA6UkIUFRKVJ2KAbWRJ%2B40hqAcjYPuz%2FceZHCOo35KrHfxAQ4fIobnjP85Mad3H0DoYv%2BZYXqqec%2Bv87pyUeBHHJiR1NcYMfLP%2BVFH49xVxJlvJAbO5AzOgSat1KRGuILhUhxutnWmAg1kELjLdzxn%2FoRL85skPNnnu%2FESK0fTtoSPA3jKe8QU33hY%2FcRKk%2Bra1uvHB4OdnPmuXEf9kh0f5VAdtczd4hODfk6MkzzKVuLsGQXS1VOJ%2FnSofL0L5awx%2Bt1092sNhlBg8rAgoSGCT%2FOCnBG0mx3Yw26PgwQY6pgHznfOIn0Zyt7lhy%2FyvnIUqpiG%2BAPqNIjP6%2Fw6HvH%2BA0VFwSwenr87JTETyd6aeC7edNgx5J2vg3KNvY%2BeNRqTvsvbU7mTNqhlczOO1j%2BhkAPewXLl4%2BeRqfFYlHox4gKN3Ca7OMHaKCojXdMkoK%2FYUs%2FRjltHBeKZUiHIbs8XVK8XlZXAmnZQM6vS%2B8zkWutmU14atGt301v1puMis4Yb3FUrfBho8&X-Amz-Signature=b58ed6f534eb8dc31a90746b132903d251fb1879133c07a8e28c4ae3441e2109&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAUIVPBE%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqkDh63eqb0yXumhZ6q6V3n%2F2m1UT4NG0rImGja7s2BwIgdzBUWDU2lW826dpDe8%2FGHJjfYt0DJORhqD4ZDACSBHgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUhfiX73OjMgmGyoSrcA%2BRfg%2BpifApnUCXojgAmBJG1J9A2lPIdAEl9JFfNTcVsqalcqilbVEXvTFzVSLV7qZuBY9Lf0K9pHYLf4gwzKiRiK5ePAXxGdVJRjJOS5HSnVQBGGNx7K%2FkuXUTeB2KMoL7SPHM396Kj779OEgKmjbQ87umGIYE2Zj3URoNYEciuOCIVPQPXYCh02KZ4C39oV6DKxyByPcUjbWCz14X%2FHxxRREyCEolBS7Y4Xo5JHUqLm9H8uUGDmWRzsooptOJxZ5tMKlzaHKVcGtUL3UsJ6lbHg%2BTh1P3GXbb4zoGwUGKGVD4gG27ben5GFmjUEN8rg6F8UAEe1yNWGvpa5xXArja0pArCS8C7dBG2GGXN05V11or21E%2FSRhSY5YpOxuvs7jQOK4sj68%2BfhtgwsWS9%2BZzovTj2qNK6AfxvGFlqYdmHFdIv0e6uX6x%2FFm0A8jQ38kcm0f7Q9IP5u2XzG3e2SwkJof77rGOQgKuQbWkB%2FTCDEL9sBeDeMdEXE1sS5BqQQi10JZZV2OQvSciP6q5N0dOYpUzvg4D1sgMbr6lQRqvnHu%2B9jBR46CMwTxGdR24aypWUQHtG9Gmf9KU91yvKtXXbbpXjjLcBrctdosRCm2ilg4mddQbAbghp43NQMJ%2F938EGOqUBaeH6aartC%2BDfw2GtDOgUMr9fH4szze6nw0tbTTmztk2xIFl6e1fjttREI3K%2BQCD60RR%2B88IS9F7eVOnPqABqoBcOkyXsx13ZPl0E%2FXZVNKpJcQqcjC7xDrXWt8KvCcd7AMaurtJ417EcroK6wpG6%2Bqbr%2Bu%2BspJCwp6m9shccRsq6kL5t%2BNS0RFQdb2QEccTVHYQhsuqhb92%2FWU1I4UJMIOOdIEnP&X-Amz-Signature=9cb4baad6cad9e94769d3ab6ec0fcedc43e19bf9b3a5b9e2f58adb8926fc9233&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KXG7JS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4Y%2BciGgREQScFCRx5YKLa6npX2HgBAcwlQKpzXKFSKgIhAOUPxGOdZF3PXUj3MOnugNL9CBBN9LoNhE5jAUJBHBU%2BKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxgDhzokUAqW0sOxQq3AP9cpOKi60hOkIU4HeviamIS82hlsJ6wYLz4HwwVglmtRWjJdIKIjz2wEKE9ZNMwmBqbhRnsjhJXI2MIeyWAMBACGr5FPj9bv3bLWNJpLjWlF0afQlRzjm5sl4AuGhttZXTMEiQwn8Z%2B1Jc0uUiZUwoJftpBM3Llro6LAFFXEiFEbY2js8nLyEKU%2F%2FaA1ayPVtGYmTLKfndO0XxjVDQs%2BJ38N3Yq%2B5fNdLx1NdCrBuxRJEt2RgO0o0hYq4v58SVnHrSzzWUoPcUitpvGO5rCjQGvuxTWDz%2FpNHrxescBb2BXqAGXne03jvcH50tbv6RMKpBP67sSAQjNGvWACCK38ZsHWmx%2FYIR79JTU1U22SvXrGo8lHjjtT8M8Pa5xb6BpkGhAw0lYYXlV3jcEWs57KWQc%2BIgcyii%2FOvaeFs3dyi84dnCrG2%2FQFCCmD71%2FD%2FejpulSMoWmcVxrj0R3GlIU9DhhExcix7z9MoINEUp%2Bti7wb7YO28ELzDzSHt0ZYSmyH%2FRnix1HqpVXDihVWfTMEl%2Fln4PPAhSeMrG6XXKaUrIeYPDYgztFT1R5GMqNkJV%2F%2FdA7zdKEq8fRD8rFoIWKZMXVcIsCIgMnZRsCVMCzHMsZF5y%2FL49hE2%2FA9cwmjDy%2FN%2FBBjqkARpisXwQ75weMPXAekBZnGN5TtpOF9yZx5hFaan2objYqM6eROxS3IDgO1jw8ft3V3CuQHDLyRc9CJN5LLmxQ%2F0EC1JSHcCqFknhyX9lIip4ZW1EMkhwQMNljGOaNaIeGc5H2KxpvqE1gRFtJzo7w8J3v70dPzmHto8bryFxosdyYPEszruEUWBPVAZeHxzFQGImOxUQC%2FVetnvJU%2BVBiRat%2BqR3&X-Amz-Signature=f9129adbbe3560a153a558211f5dcaa0641493a80755ee450e76e1ceaf5fcb36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA45FUMI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIES4ldCH4qP%2FdICBXupYPMVAPGPG%2FCOvtgxBv2GB25pCAiA%2FxyDo2YS0AmISGqZd9peZulwkH7nByMUwYo7GtLVOMSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS7ZHDsHlVSEOieR%2FKtwD0GfIDrl9SvfVxB75L03PZKfLrhDrhwg0LzfOY9u5NUXXTUKgLgJyjGQRb3amEf9YTVe6IG3kTeGMVCYuQZRD9f3idzEApzJsKX1n5EY5egHNacQ3sCpzGaziIrJXIvfgUWgT3xHaZhmc3zxnZn8wtLnpFdG7YWoXIu3ZsISeueE7C56r6DPqhyb9vNlg5feWFvsTHetTae%2BMf7dUvZtk3weoR3OKEnNUcMv7Y4Vv7WlC5aFjsFep7MaNlfnZxKA1AXoeRXQenbh%2BIIRTnLez%2BUZDcYqM22eoK3uHq38u9%2Fu632UdlhNi1rnxlK9GbnTzcHNNr2vkt7%2FBYIwCRwCIw8QpMlA6UkIUFRKVJ2KAbWRJ%2B40hqAcjYPuz%2FceZHCOo35KrHfxAQ4fIobnjP85Mad3H0DoYv%2BZYXqqec%2Bv87pyUeBHHJiR1NcYMfLP%2BVFH49xVxJlvJAbO5AzOgSat1KRGuILhUhxutnWmAg1kELjLdzxn%2FoRL85skPNnnu%2FESK0fTtoSPA3jKe8QU33hY%2FcRKk%2Bra1uvHB4OdnPmuXEf9kh0f5VAdtczd4hODfk6MkzzKVuLsGQXS1VOJ%2FnSofL0L5awx%2Bt1092sNhlBg8rAgoSGCT%2FOCnBG0mx3Yw26PgwQY6pgHznfOIn0Zyt7lhy%2FyvnIUqpiG%2BAPqNIjP6%2Fw6HvH%2BA0VFwSwenr87JTETyd6aeC7edNgx5J2vg3KNvY%2BeNRqTvsvbU7mTNqhlczOO1j%2BhkAPewXLl4%2BeRqfFYlHox4gKN3Ca7OMHaKCojXdMkoK%2FYUs%2FRjltHBeKZUiHIbs8XVK8XlZXAmnZQM6vS%2B8zkWutmU14atGt301v1puMis4Yb3FUrfBho8&X-Amz-Signature=7113171172ffe377d7045bc8b42e21400ce5e6f09448f3fa115ac9361de548cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
