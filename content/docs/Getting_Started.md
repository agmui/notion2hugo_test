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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMRVE7X%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDHxh4VlrqqIetMhDBX6RYJ8a2CdKASl7XSD%2FN6WJo0bwIgZh0PQllEx2HnKnjPyr%2BzHbS5ltDxKuEHLIfTM2ZcayUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkmTM%2BBTf5Fxu5zhCrcA%2FTCmry%2F4%2B1iH8YEpd4hpaSW3I3U5Cx5fESH1ISJFUnvu3DfVTEyPg5lkR8l3ynjXU8NLond8FICT%2FXAM4gh8TvbYcsldH7j5EMwjz5%2B8dULIzS%2FvbcFhd%2BEds6owyrn5UvtcrozYk9tHoZZkqqlo%2BlgkTIFPVk5V0%2BgUHJyl4CdnRd%2B2M7KeJ1zS3dLnIVRPISe%2BDJzQYpdO2Vh%2B7banXJ6pH15wBFlgTukcOV5xlNDkFzRu1GntaLODFEliOu%2BxDQzVZ%2B7t%2FpDV3G49wK6r7ijin6Ds7kINCTWv186vvFqe%2FQ7Omn4BXPI9azl%2FQ3m1vM%2FV3yFQPHqezZubdKH%2FbDsS8eNXoY6vFbEdYgwWDoIknU3BgcetFdsRvP7N5Qt1pFlF2pljRy18TaZUDCeC05lBekEToCnMWY6FRv2T%2F2ymNl4SjKa3XhhH3RPoO3qtAsP5CLprWQCO14NAJjIWOdPU9pbC4h8NSZsPhYLayZlQJhizpJ%2FzY5XMOE65mqhjb41JW76PgwQ3k28mM7e13Z5Auyb6wXZrSByYPhUr9khoo0hg981V%2FMimdKx90qmeJj6TLwZJEjmZGh2%2FJ6MbGLCA0HUCh3Q%2F1280bLhP37e%2BpHzKGStp7u38a9iMIn71r0GOqUBbqMc%2FeF7el83n9XnFMrnb6vvuCy7GQP9pHDKd4zbstWtbdJrLUuAhK7tx8CftiaASKWFirWYL1VbVYGBxcKFVs%2BgORSdEYRRI0VI6iAinBAMHpgPWMgeYo7OZtm08tHEuDy%2FOktoKu6lujEngNFjhi54Or7Hc1IDw50DMN%2BIL6efiORQ4W9qzrIpCrdg2plEcJAhlBejPsr4y7fb1r3YxzHeflnz&X-Amz-Signature=ff11b67613ea18beba8791717dcf012b99fcc9d15850b559745e99587d0e81f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMRVE7X%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDHxh4VlrqqIetMhDBX6RYJ8a2CdKASl7XSD%2FN6WJo0bwIgZh0PQllEx2HnKnjPyr%2BzHbS5ltDxKuEHLIfTM2ZcayUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkmTM%2BBTf5Fxu5zhCrcA%2FTCmry%2F4%2B1iH8YEpd4hpaSW3I3U5Cx5fESH1ISJFUnvu3DfVTEyPg5lkR8l3ynjXU8NLond8FICT%2FXAM4gh8TvbYcsldH7j5EMwjz5%2B8dULIzS%2FvbcFhd%2BEds6owyrn5UvtcrozYk9tHoZZkqqlo%2BlgkTIFPVk5V0%2BgUHJyl4CdnRd%2B2M7KeJ1zS3dLnIVRPISe%2BDJzQYpdO2Vh%2B7banXJ6pH15wBFlgTukcOV5xlNDkFzRu1GntaLODFEliOu%2BxDQzVZ%2B7t%2FpDV3G49wK6r7ijin6Ds7kINCTWv186vvFqe%2FQ7Omn4BXPI9azl%2FQ3m1vM%2FV3yFQPHqezZubdKH%2FbDsS8eNXoY6vFbEdYgwWDoIknU3BgcetFdsRvP7N5Qt1pFlF2pljRy18TaZUDCeC05lBekEToCnMWY6FRv2T%2F2ymNl4SjKa3XhhH3RPoO3qtAsP5CLprWQCO14NAJjIWOdPU9pbC4h8NSZsPhYLayZlQJhizpJ%2FzY5XMOE65mqhjb41JW76PgwQ3k28mM7e13Z5Auyb6wXZrSByYPhUr9khoo0hg981V%2FMimdKx90qmeJj6TLwZJEjmZGh2%2FJ6MbGLCA0HUCh3Q%2F1280bLhP37e%2BpHzKGStp7u38a9iMIn71r0GOqUBbqMc%2FeF7el83n9XnFMrnb6vvuCy7GQP9pHDKd4zbstWtbdJrLUuAhK7tx8CftiaASKWFirWYL1VbVYGBxcKFVs%2BgORSdEYRRI0VI6iAinBAMHpgPWMgeYo7OZtm08tHEuDy%2FOktoKu6lujEngNFjhi54Or7Hc1IDw50DMN%2BIL6efiORQ4W9qzrIpCrdg2plEcJAhlBejPsr4y7fb1r3YxzHeflnz&X-Amz-Signature=e6aa908ed92d68eb61ecbce7d86ae1c2f9d9955fd5b6b013ccbc532b7ca0f764&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEP2O3WZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD6uVfNTWqdWk4t41H05%2BFUAicfsXDIa5ODcmVxWGbHOwIhAI44eNSlCF8NCCj1U%2BSlqDSb%2BA7EeBUnJeiN%2Bhh%2Bv1PoKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTI7p%2BnHY86M%2F%2BMh4q3AOL8RcE%2B7yQdkPA6pNmgR4%2FoAyf6uytNXtGZxo8DcatSsr9TASRDPJJe23az1q%2B5Mf9Cdao%2BqpyPdlFH01wDXeX%2F24%2FtYwA1zFOaL%2BhNG7pVEhCnrnnNeWoRIm4RqWKx4mC1BP3sEnLeO%2BE%2F6H9YXrHyt%2FqO%2Fq9Ft5hdfQVZUhdjoVV5ueRTPr8uN2t7jVOzep0BjQTNoh8EoBF60kWia7HIoJax1%2B%2Fe0sB4obQGQQzp8mSQ9VFWw4jBb8md2btVVlYsG%2BIec5umdMlbXlwcsPsJiU96cUzEoUjkj6l7c15PPvh4BOj2YIBZ0k7ZF25pMgxdFkzQ0J%2Fj2VvgK7kktoRMNbttrDgs09O%2FXD28nC8bLX7K%2F9rogU5EsWjwxx4mxijq0R7zyQ4wRx5bzhTW9qdHX4%2BnW6fvpxMuEJr%2F3vhJCGdfIgVvzvTSsG5JsFtu4lP7jKDajqdHT2vVzIPWuFfGCOP1Hhh%2BUnjGu3ogChd5l5UJf5KGr8Y8I8wzdJeclP7EFkQBlKPBQClyh%2FDrR5NHRDMHoHZtrnjPVI1f9GuCU7Wc7NygNisX8Z%2BT9x9abBWcb%2B0uS0Ybm2S7DWa7j%2FBXRHIOiWeF%2Fppn%2FCWP%2BL41UWjepdKZzmSRrSURzCL%2B9a9BjqkATRgxG57ebJiMLPKZq7umuJV9ODnS%2BHoWmM1ijD6Iu%2BFbpjlPsMvKw%2FsD68FFlMwyLNx2UEPFztBDojAGvD4xtKQfXqcXGTLwtM72l1B0fLsJOUEcR0JdW2Sv%2FNLni9Z2Y1mWYWFi4JfCFkeqQRQllnoAW6jYNQEXlAtxtj8xkZEKGvUp5DOTG%2FTXnp5y0VoK5uYVytUdwX5Aio%2FmxQ6I3vt7%2FKS&X-Amz-Signature=ec52788dc374c5fbc6d876cfe856af73691ef1e3a4e1f0722a9e4bfee2d52f90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGHOAV3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDRF8ssHrr7aoGOMGTW%2BFcy7lyxmF1qNGEcp2a4UauWaAIhAK8Zev9xWl57D11LgWp%2B%2BITLxr9HFlN7Ckxk7xS87JR8KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzj2f5cw1OQy0caU%2F4q3AM4NAvZH45PQ3ERCvlfwKA1KZq0dSNrAraSs2ay0BUHVA3adexsfQe5wnz1%2FN5R7zKG5r5RNt7t6Y4Y5VvJC6xZ9Nbeo8wkmDt0kUGiNiidf3e3T2wxJQavhVMuFTcfUMqZrbEU%2Feg8FbVBMhv8DjcX00Cs%2FYg9yhUWOD6XMl%2Fhq0Sg9SWw8v1KdPjuwNMNi1Ydr35nOa2xPEy%2FCr0%2F%2BBXmEtSBxLlfyaNCVxC3SzdxtTi4qi7M6fDpv9R7NS3WVRdyMPX2bQhKFrnzIlgciUoIjKdpcp6x%2FMt%2F13HqkIllf8WoKFkHRHHBW5m2K5woTlhQFNYQBYLg0%2B1g7mh0XIu08yRJiRTrfrwWk6QOkspejFlkIxNhLTnvRqRCCUkd2EEpMU0O9DyMZpvgw0h9cH1CIVNr6u%2FiR0UvIU%2BphUN2y6ip3g4KXcTJV97biY1M9NT63XOkQdJDcOk%2FVtXueLAzNeY0q6vUBc%2Fu35hZ%2FbCIxYJaPJYNRDbnZI3UZQi6xyrMdOP9W8ydaCokXyaSEWBqJmINifgokRQHJk4rYKWwTEoAVQ7DWvdOXz3z9xcjGVH3bdYeBcweQaWewDPCry9knKOpime6AhaslMzlzbi9lqJxMT1FdHt9rz21%2BDCz%2B9a9BjqkAXQ%2FM%2FpQXzaWgsKGNxaiSfs8KALGpD3UUfUJaCGjaQV6E7%2Fp3M%2F4JlbZBI1PqEgbrvAopW9sRw6gOB53MI1s4mWpLrXvgh6ua846FVqcz4RfLkb3fnPkV8Rmdi1WigGXB%2FoqcZTOJe8IvvjEWAPea3dGfWUg%2FnkQydcR%2F7GHUtxsA%2FYikrFNGxDDjSL1ae3Z8ntrS6vnk7s8Y08kMttPlZ1N8p1f&X-Amz-Signature=0cb19ea6d9dc8a50868cb88dc9928272cef00775be92fda908d43109879daae9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMRVE7X%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDHxh4VlrqqIetMhDBX6RYJ8a2CdKASl7XSD%2FN6WJo0bwIgZh0PQllEx2HnKnjPyr%2BzHbS5ltDxKuEHLIfTM2ZcayUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkmTM%2BBTf5Fxu5zhCrcA%2FTCmry%2F4%2B1iH8YEpd4hpaSW3I3U5Cx5fESH1ISJFUnvu3DfVTEyPg5lkR8l3ynjXU8NLond8FICT%2FXAM4gh8TvbYcsldH7j5EMwjz5%2B8dULIzS%2FvbcFhd%2BEds6owyrn5UvtcrozYk9tHoZZkqqlo%2BlgkTIFPVk5V0%2BgUHJyl4CdnRd%2B2M7KeJ1zS3dLnIVRPISe%2BDJzQYpdO2Vh%2B7banXJ6pH15wBFlgTukcOV5xlNDkFzRu1GntaLODFEliOu%2BxDQzVZ%2B7t%2FpDV3G49wK6r7ijin6Ds7kINCTWv186vvFqe%2FQ7Omn4BXPI9azl%2FQ3m1vM%2FV3yFQPHqezZubdKH%2FbDsS8eNXoY6vFbEdYgwWDoIknU3BgcetFdsRvP7N5Qt1pFlF2pljRy18TaZUDCeC05lBekEToCnMWY6FRv2T%2F2ymNl4SjKa3XhhH3RPoO3qtAsP5CLprWQCO14NAJjIWOdPU9pbC4h8NSZsPhYLayZlQJhizpJ%2FzY5XMOE65mqhjb41JW76PgwQ3k28mM7e13Z5Auyb6wXZrSByYPhUr9khoo0hg981V%2FMimdKx90qmeJj6TLwZJEjmZGh2%2FJ6MbGLCA0HUCh3Q%2F1280bLhP37e%2BpHzKGStp7u38a9iMIn71r0GOqUBbqMc%2FeF7el83n9XnFMrnb6vvuCy7GQP9pHDKd4zbstWtbdJrLUuAhK7tx8CftiaASKWFirWYL1VbVYGBxcKFVs%2BgORSdEYRRI0VI6iAinBAMHpgPWMgeYo7OZtm08tHEuDy%2FOktoKu6lujEngNFjhi54Or7Hc1IDw50DMN%2BIL6efiORQ4W9qzrIpCrdg2plEcJAhlBejPsr4y7fb1r3YxzHeflnz&X-Amz-Signature=f5cfe26d1770581ef6c4cc4f7ef3ad4a50c368cd5dcb18949b33f4aeab303288&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
