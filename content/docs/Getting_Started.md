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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADOCQB3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQh4cYJeuWngnx99jfYKH8ISGFDNuZ8SjLBBskgeq2oAiEAxtHBwvTWFpJmQxcKHEOTTjbZgV4coc10hGxNddQqH9wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xkZTX0FAX44xsQSrcA79NMmpn%2F0QWlWMcMGKFIJeTiojO0d1PGg67IZjp2LAOf8juSW8%2FmnmB5V5E%2F50v6ScYEqtpTCZUEF9ej%2FJFY4o6Aj6nh6RFVaeFFA4I3VQ7kZx5fxPQd8%2BZ0SpUn6Rg2jG3Cow2XIcH1R9QZfXFkUfb%2BOjXl1M0aMVMnFiFYmQDhZPmFB6LFJSF75USlcc%2FY8wYH15T9coi7%2F1YFYxlUIpavGU2SWAFvnrer6l3n%2BJy8o8V%2BQVz5nr%2FK2YoEMBHv9n4r9qCJGeqs4F8SJ2AemVdTJT4%2FDqKiJtGQ8sVUmImms%2FwVwoXSsXZvNLebw1WVoRLYuLPCop3YA%2FVpAa0nYPXl22P0a75%2BS2EGnJ4tTZaE%2FevmUPK3g3BkU6NN6aYkvuUL2jTovuuDU8xOepz%2Fb527ZlordgK8B3WKU505s5jn%2FFPoGNF4udRCZPpyUFSw8w0ftIBSYKmv%2FL%2B%2FssD%2FKvx1b59E%2BMbupYVV4MdJVk0v%2BjkbHPbszXbeTR14bXTBcVbqzWpKtnzcsJuP%2FgU8Z%2Bf8RgFKd98QopN7NU8mjTQyt4Ij9W0MJQe9C4VgSNRHx6O62elitQFwcNKXs6nzG6w60ewZZGSmHHAlSQKPg0wyth68S2Vodu7EAJcMKWz%2BsMGOqUB1vnQTz9%2FK7aCOltIIoZKkX8usx8MhO7bVekW1wP%2BL6PaJGnnmeMhYquYiicgmcBKB2WXDiZp3HpOts7Lz4ieSv%2FiO%2F%2FF5sD3ty6BCMhztPTvgzZCk32wy44TzxyZyO7HB32D90cLu9PN3%2BIPY0H3mUdRDBJYs2n8UDTrwZ6fHALbcp3dvRUHBlEOTE9KaAnGI7NNlCoeoglUjlJVLQamrfQ998Qy&X-Amz-Signature=6b0b3f55ce862be81df90a94429b5e81470b00e1faf7eef42c5fb07c5a7ac3fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADOCQB3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQh4cYJeuWngnx99jfYKH8ISGFDNuZ8SjLBBskgeq2oAiEAxtHBwvTWFpJmQxcKHEOTTjbZgV4coc10hGxNddQqH9wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xkZTX0FAX44xsQSrcA79NMmpn%2F0QWlWMcMGKFIJeTiojO0d1PGg67IZjp2LAOf8juSW8%2FmnmB5V5E%2F50v6ScYEqtpTCZUEF9ej%2FJFY4o6Aj6nh6RFVaeFFA4I3VQ7kZx5fxPQd8%2BZ0SpUn6Rg2jG3Cow2XIcH1R9QZfXFkUfb%2BOjXl1M0aMVMnFiFYmQDhZPmFB6LFJSF75USlcc%2FY8wYH15T9coi7%2F1YFYxlUIpavGU2SWAFvnrer6l3n%2BJy8o8V%2BQVz5nr%2FK2YoEMBHv9n4r9qCJGeqs4F8SJ2AemVdTJT4%2FDqKiJtGQ8sVUmImms%2FwVwoXSsXZvNLebw1WVoRLYuLPCop3YA%2FVpAa0nYPXl22P0a75%2BS2EGnJ4tTZaE%2FevmUPK3g3BkU6NN6aYkvuUL2jTovuuDU8xOepz%2Fb527ZlordgK8B3WKU505s5jn%2FFPoGNF4udRCZPpyUFSw8w0ftIBSYKmv%2FL%2B%2FssD%2FKvx1b59E%2BMbupYVV4MdJVk0v%2BjkbHPbszXbeTR14bXTBcVbqzWpKtnzcsJuP%2FgU8Z%2Bf8RgFKd98QopN7NU8mjTQyt4Ij9W0MJQe9C4VgSNRHx6O62elitQFwcNKXs6nzG6w60ewZZGSmHHAlSQKPg0wyth68S2Vodu7EAJcMKWz%2BsMGOqUB1vnQTz9%2FK7aCOltIIoZKkX8usx8MhO7bVekW1wP%2BL6PaJGnnmeMhYquYiicgmcBKB2WXDiZp3HpOts7Lz4ieSv%2FiO%2F%2FF5sD3ty6BCMhztPTvgzZCk32wy44TzxyZyO7HB32D90cLu9PN3%2BIPY0H3mUdRDBJYs2n8UDTrwZ6fHALbcp3dvRUHBlEOTE9KaAnGI7NNlCoeoglUjlJVLQamrfQ998Qy&X-Amz-Signature=a2451b05603d805bf9f530b128b39db09cc1a756c1706dd619c6462e11e95cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADOCQB3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQh4cYJeuWngnx99jfYKH8ISGFDNuZ8SjLBBskgeq2oAiEAxtHBwvTWFpJmQxcKHEOTTjbZgV4coc10hGxNddQqH9wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xkZTX0FAX44xsQSrcA79NMmpn%2F0QWlWMcMGKFIJeTiojO0d1PGg67IZjp2LAOf8juSW8%2FmnmB5V5E%2F50v6ScYEqtpTCZUEF9ej%2FJFY4o6Aj6nh6RFVaeFFA4I3VQ7kZx5fxPQd8%2BZ0SpUn6Rg2jG3Cow2XIcH1R9QZfXFkUfb%2BOjXl1M0aMVMnFiFYmQDhZPmFB6LFJSF75USlcc%2FY8wYH15T9coi7%2F1YFYxlUIpavGU2SWAFvnrer6l3n%2BJy8o8V%2BQVz5nr%2FK2YoEMBHv9n4r9qCJGeqs4F8SJ2AemVdTJT4%2FDqKiJtGQ8sVUmImms%2FwVwoXSsXZvNLebw1WVoRLYuLPCop3YA%2FVpAa0nYPXl22P0a75%2BS2EGnJ4tTZaE%2FevmUPK3g3BkU6NN6aYkvuUL2jTovuuDU8xOepz%2Fb527ZlordgK8B3WKU505s5jn%2FFPoGNF4udRCZPpyUFSw8w0ftIBSYKmv%2FL%2B%2FssD%2FKvx1b59E%2BMbupYVV4MdJVk0v%2BjkbHPbszXbeTR14bXTBcVbqzWpKtnzcsJuP%2FgU8Z%2Bf8RgFKd98QopN7NU8mjTQyt4Ij9W0MJQe9C4VgSNRHx6O62elitQFwcNKXs6nzG6w60ewZZGSmHHAlSQKPg0wyth68S2Vodu7EAJcMKWz%2BsMGOqUB1vnQTz9%2FK7aCOltIIoZKkX8usx8MhO7bVekW1wP%2BL6PaJGnnmeMhYquYiicgmcBKB2WXDiZp3HpOts7Lz4ieSv%2FiO%2F%2FF5sD3ty6BCMhztPTvgzZCk32wy44TzxyZyO7HB32D90cLu9PN3%2BIPY0H3mUdRDBJYs2n8UDTrwZ6fHALbcp3dvRUHBlEOTE9KaAnGI7NNlCoeoglUjlJVLQamrfQ998Qy&X-Amz-Signature=ed167f3b0e87fb4f55f838bb4ebb0476d71c4600c5e7e8dcb849d9057488c474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJDKSAVE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID09leje%2FnB2R769LZm8dWp0P%2B%2FE7gUUGHAMsPoucBoMAiEA0%2F6DKyzx9Kj1DkCxxtMIFqzRlKe6wHdMUeiJKv2ejiwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBN2Dg7iJKmT8dBrsSrcA2PRTkaXmtlvy5Gn7T7G53x6qCWbqlGyjEI52TMB4ayO48u4KXp7PpBIbzjWJLOX9NZNwnIBbeVQtk6fUAUUjrVDUlANXHKU4KYb0KFMKVs%2BjelYsIH2ByEwQKbgYG6gsMY%2F11%2FveSogBX7s54ESp9euqMqfnl2P%2FVfITVdNRHdSBserXHog7X25W%2Bn3fazV0PhWCXgM%2FdEMHLJwItIeq2FV64UufOA%2BNPQL8QWNzBQIWah4tzHMfihV3Xj6v2J9Y6YQcvYcVzKoEpzFbpXQa7P6TTi8Ao1hXS50FxlTKK2L8x1K49LqqJ5356mc2AVKl0BZsqGbt0aNYHzqPpr86Ygohn1Ql%2FDLQJKJBMV3xoqeJ%2BTaimZ7aD%2FXnEtKfodwwQdFDdVFY0kFYFUiA9u0FTYBtpzif9TZlKGtYbPrwuSMEe53L8N6DKh7ImMU3lJ1xQriAgZ4j1g1FHzzHU2dJgsddXlbpUomNuYLllOEloReD63NSMIZyejtQ5XCELAoKWLhXnQcw2J%2BBki4FpezxbT66PbilXJdAs8khfbRZjp%2FTlw7vNNk96gv8MzqHV1BHRnhh%2BxU6o2tELrnM%2FNKGaeOJql%2BqMOH%2FXRGITp1OBurIWTgg0IBT5vIr2qIMPqy%2BsMGOqUBf9FQNtzzs%2Bc%2B06hMnXQFzHsmkqD%2BcRl%2Fm8ruTi5TJB2zCiXnzwR4Mu5sYWkP%2BmFeG6vPnkLHFyUpK9rU%2FYryYHmTjF6neXgoAi0VLLzcEz5DAB6%2FD46iuXvIuub66Gm4vhyoF9ybvSWmZdpNtPymEo22ErEtoVIxdESx3dzqTzn2JI9k%2BfflYWjJv3BfCJk38CjffNtouKZ66sSEYNPoymQ5Ej9s&X-Amz-Signature=ab0952c2445f171a84545465eca89d9756f5c7a048a4ba15173d55e09d785468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7WRQ5J%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcP11j3FHkeSXqhQZqYUEl3l%2FICsczRp0pQJE8UiNZbQIhAL6r8o%2F%2BxbGuLaKeZXL2vpVx6FDrXMI0ZDPcyaiJ5N22KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn5H8wmvizA3bPSYwq3APuet7PePNgUhJKEMkRvjBdNZmI%2BI%2FTAop8yKSt8T9Ixmx0If5HUSp5X%2FP8Mkdx8yM7D8hQ1J%2FnK%2FD8mkARJk6yZ0iyrpA4eixNuPNR3Ae6HQUQdsfgT3DJvVtpDOBaz5oqtcYcXuh9U6R5Erk1tKdoGpfTvsfjV%2B5g6ETur5Y4OQrSIe8pYtGigS1PuZItq%2Bn%2FlwUo9AOV5Pa86xmC0Ls8GnQIZL1hU9gtq856oH5WaVW652VC2dwj9lQJrrFQAIytMYT8dmjt4QmF%2FLLd2tB79c%2FOfSaxEHtYipNtYtJ94dpSPn5mHmvnPCcyOWGooMJZVLupfQKJLauuk6rhHEpFpfymI4OtFbKMC0Mz3wDuu5nfWGkuyCyr0tFfw67HHUIUFRbtJBU6cfY4pjBPfHIYzqssQpGqvAe%2FvpzeVaPCLkHBWTtjTQvKzWjpGhva7TUvT0ugqQ0QQFmlew6RGyhdsocKk%2BFUZuUcx2WNtWPSV7KRgjxT%2BZbkuOYfIFMB4XKFBfNrIS51uJ6SA2LCLFSrYTVYLPCK8BQCauy2cd8qfilDWy5%2BhpEvLnrNdHd2JxX1fsQjmgO1L%2FJTF4RKQxwx1Ttx3F3EywXImVAb1WmCWt9HNROcCwOakbRPGjCus%2FrDBjqkAX7iBIF095HLiN%2BTOllEid1HZzg6Xc2VtZM6APwzaNBzoTp9LZb%2Fs%2BRiOSgGO2lr3IH%2FTcRR87c6QV8E1Li4Ry0y8UFEn4%2FCmajdWg8ih6jOEmzPebiPsOQc3lbGTjARmVykSk9vCR%2FeLNWEhSaEpZlmzPdHnlc2BwodS8emFrZt3%2Bd6nRZqxWtDgz315dKLMpeSmb6EuTzpt%2Bw7GGXXY%2B6Ko%2FKj&X-Amz-Signature=7a41a6f15d3ab785efcb8f5bc4aedc1253097f253c46b65abf20cea1ec00b094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADOCQB3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQh4cYJeuWngnx99jfYKH8ISGFDNuZ8SjLBBskgeq2oAiEAxtHBwvTWFpJmQxcKHEOTTjbZgV4coc10hGxNddQqH9wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xkZTX0FAX44xsQSrcA79NMmpn%2F0QWlWMcMGKFIJeTiojO0d1PGg67IZjp2LAOf8juSW8%2FmnmB5V5E%2F50v6ScYEqtpTCZUEF9ej%2FJFY4o6Aj6nh6RFVaeFFA4I3VQ7kZx5fxPQd8%2BZ0SpUn6Rg2jG3Cow2XIcH1R9QZfXFkUfb%2BOjXl1M0aMVMnFiFYmQDhZPmFB6LFJSF75USlcc%2FY8wYH15T9coi7%2F1YFYxlUIpavGU2SWAFvnrer6l3n%2BJy8o8V%2BQVz5nr%2FK2YoEMBHv9n4r9qCJGeqs4F8SJ2AemVdTJT4%2FDqKiJtGQ8sVUmImms%2FwVwoXSsXZvNLebw1WVoRLYuLPCop3YA%2FVpAa0nYPXl22P0a75%2BS2EGnJ4tTZaE%2FevmUPK3g3BkU6NN6aYkvuUL2jTovuuDU8xOepz%2Fb527ZlordgK8B3WKU505s5jn%2FFPoGNF4udRCZPpyUFSw8w0ftIBSYKmv%2FL%2B%2FssD%2FKvx1b59E%2BMbupYVV4MdJVk0v%2BjkbHPbszXbeTR14bXTBcVbqzWpKtnzcsJuP%2FgU8Z%2Bf8RgFKd98QopN7NU8mjTQyt4Ij9W0MJQe9C4VgSNRHx6O62elitQFwcNKXs6nzG6w60ewZZGSmHHAlSQKPg0wyth68S2Vodu7EAJcMKWz%2BsMGOqUB1vnQTz9%2FK7aCOltIIoZKkX8usx8MhO7bVekW1wP%2BL6PaJGnnmeMhYquYiicgmcBKB2WXDiZp3HpOts7Lz4ieSv%2FiO%2F%2FF5sD3ty6BCMhztPTvgzZCk32wy44TzxyZyO7HB32D90cLu9PN3%2BIPY0H3mUdRDBJYs2n8UDTrwZ6fHALbcp3dvRUHBlEOTE9KaAnGI7NNlCoeoglUjlJVLQamrfQ998Qy&X-Amz-Signature=ccdd3f68521617cd9370c59f3984ca54f8b84466e7f415b8488afc6dde39fa8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
