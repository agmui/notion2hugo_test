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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDZHKHY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeFywOfy2rK9RVT1F5phSDvF%2BZHSG0zS3sUU9NS%2BIozgIgS3gHwpRlnHf%2Bq5dIP0%2FhAE6nOpIVS3K%2BAhhCNMZvm3QqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM2HLxwUino%2BlHy1ircAw73PpvaWxf9ZIVFPw8%2F%2BPgTTu0gLtns3k8%2F3OHb%2BBnFMCk1kC%2F%2Fv7bnHmR7j5Vhputc3PD9zIkEGUiEhyvwowPkkOxl2tD1HWLn%2Bjo%2F%2FYA8%2BWWd6bSNEoKaEpvZDTCOiFo%2BNg16RRyjBejm71AU1bnEqqV7w9WC0LQr%2Bqctv61oCeol117Bpx2DsjljtPjVPgO835n1mWW0BS8xUMuVC6SZcfgSnR4dV4KeU84jOIHontLfM0tR%2FCaYBQR2w8G8qHSLE%2FCTY3zErJBfpF3G9j4e1TgVDkg8S9gviFPvEIy91SVCmKzXPF9%2Bon7RYCad1xvhDlPTG%2FSMhRvi2QX5SrHi4uOarVkmyNt6GQUxYWEjScMU%2BYGq%2Bxmw7yczvt5mtlKwFLukLEtcTR%2F411M9j%2FDYcamT0iOuapqtJnYl22hr3JrRuRBZWKhlEAwrrnRTQE6gVpiItS5aOVXCChld2sPPv2cO0zd1oqA0VBgFP38xnjQezY3ab3OFCVVDv08J3JrQK3H2VvmOPGHhEyA0SsVTa6eGSChXF7lvejufDDuR2eIPcgDuD%2BMjr60jicEla0itIOPJp5oaMkrb%2BpnlrVT90zNacbhgOA3xSntYrdxy%2BN5d%2BM1k9Dj8dBe4MIb64L0GOqUB7EVCBMRWGq7LP2vxY1WQtvEer0%2FIv4RmHtcL5Bnrqzdw2NfPx6a1jMfaviba8dlTsL6KbWms3nGG48I%2BLXbaN5KjVmgEMWSNF1wn5xSByDeu6pyYe6qBa3jtY%2Bu4J4h5NOxBfcK2hUZAgupBDzbCL2keiEDOZo0Bwema0tL1FbpviNcpHy4ed7wgVC%2FVawqH9gJv%2B27PgndWOGaxNFw9F5u1WCT7&X-Amz-Signature=b913b3726bf593e21cec791b1762c86a21c0f755666a774b4bd86eba60410983&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDZHKHY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeFywOfy2rK9RVT1F5phSDvF%2BZHSG0zS3sUU9NS%2BIozgIgS3gHwpRlnHf%2Bq5dIP0%2FhAE6nOpIVS3K%2BAhhCNMZvm3QqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM2HLxwUino%2BlHy1ircAw73PpvaWxf9ZIVFPw8%2F%2BPgTTu0gLtns3k8%2F3OHb%2BBnFMCk1kC%2F%2Fv7bnHmR7j5Vhputc3PD9zIkEGUiEhyvwowPkkOxl2tD1HWLn%2Bjo%2F%2FYA8%2BWWd6bSNEoKaEpvZDTCOiFo%2BNg16RRyjBejm71AU1bnEqqV7w9WC0LQr%2Bqctv61oCeol117Bpx2DsjljtPjVPgO835n1mWW0BS8xUMuVC6SZcfgSnR4dV4KeU84jOIHontLfM0tR%2FCaYBQR2w8G8qHSLE%2FCTY3zErJBfpF3G9j4e1TgVDkg8S9gviFPvEIy91SVCmKzXPF9%2Bon7RYCad1xvhDlPTG%2FSMhRvi2QX5SrHi4uOarVkmyNt6GQUxYWEjScMU%2BYGq%2Bxmw7yczvt5mtlKwFLukLEtcTR%2F411M9j%2FDYcamT0iOuapqtJnYl22hr3JrRuRBZWKhlEAwrrnRTQE6gVpiItS5aOVXCChld2sPPv2cO0zd1oqA0VBgFP38xnjQezY3ab3OFCVVDv08J3JrQK3H2VvmOPGHhEyA0SsVTa6eGSChXF7lvejufDDuR2eIPcgDuD%2BMjr60jicEla0itIOPJp5oaMkrb%2BpnlrVT90zNacbhgOA3xSntYrdxy%2BN5d%2BM1k9Dj8dBe4MIb64L0GOqUB7EVCBMRWGq7LP2vxY1WQtvEer0%2FIv4RmHtcL5Bnrqzdw2NfPx6a1jMfaviba8dlTsL6KbWms3nGG48I%2BLXbaN5KjVmgEMWSNF1wn5xSByDeu6pyYe6qBa3jtY%2Bu4J4h5NOxBfcK2hUZAgupBDzbCL2keiEDOZo0Bwema0tL1FbpviNcpHy4ed7wgVC%2FVawqH9gJv%2B27PgndWOGaxNFw9F5u1WCT7&X-Amz-Signature=7593afc141ed43a6ce07ea5d2f121a36492a4071e24653829681b2240ee639e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTXB2U7%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAk%2BvF9shGx1DkaOmquUISvydEYFArkxp0PeqhaNZiVAiB6v25UPxGUcG%2BHo7VsjubnqKZFq2dI1ja%2FEzDKx9oe2SqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGo3NJKBlrjB9s8SxKtwDJudc7nJNMZ2Pw%2FM5x23%2FIsxkTxsBhk8kvVl4iqtM1%2Bjq5w1q%2FtSVGmaLy976fu3kQXL6Fu6aopS9v%2Bp9nuZN8XRGOvt%2BIfCPsoOKwCV5VcfZNZPO1jBIxczE2aDbsD1Axeb8Ff9MMZG9rr%2BZZBZuAaPW3fhg6R7agJMQbFaT93VUADtN5g55uCeCnAPBSG%2Fc2dKAHw6lfIgcodnDYVw3tCdlkUlB9FlQyHWdvipa3RU5zMbkNU9Rh52FBKnITK8cDlGzMz8DptaEjc9rGA%2BhWPP9hUKafKEulu1mRdXuX2w2eOUiFuSy%2FJftMPPwN2vJqJmTilQWh%2FHY8rHqd%2BoBJNctyEd136RC1VtLMh3Gg18jytPG5f106xRVk2UWoCiLP04fY3psjO0VkB7RmBe7mSubXzhJsf1BiKzmEYw8nYmrj6dS8SvUuAQPJtwSFw2OFyl81aMamlxNJEDUmMrCehXekQiC4msvcW0NGJOBe1qh0bwXuDqc7potPvtLZpGK6dUWxUZw8tMaTj5sRZlgeEc%2FGgKC5H7%2F34KUCqzFdp2IQIoH8P3vsetYSlDtu4Ss7%2FiCzYObiBuECN996LZTwSTiYd6fjg7D3yoj9ol0pmTfujI1HKxjYQfm5igwi%2FvgvQY6pgHZSktkQHUQrTbGF1w1fAM1VJlK6V7nqvWTeoe9e5%2B6mtyyfKCFPWhLZCQY%2BS52InG2H1%2FjDm2hJxOYy6CsnMVGMhpRKkuzq08b2fpd64mKEdTMz9uo%2BhD%2FOMlAKD2Tc%2BFEGBpFNWj2EDpN4kdB7drlx%2BFqm0vtBp9u848ehtp3MHT%2FPlCTpD0infDz4mPNKu3ikdoClYatfSpWwZAxd3ZG1SXE8lr0&X-Amz-Signature=fdcfdd2368beaf52bd5c3c0147f888fbdd9f0f5b57a47adc54cadc18c0755ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTAOCYAF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnaV7ieit5sN3hfrhb5UGPzIZpO9Q1kHDKszyqmccnoQIgB4fQ4RdhitoFQ5nNasehiy8KWM8xRDtIVdrJ741XmZUqhgQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWmOe4HrN8Ym6zcZCraA7PyXUrF1sVM1bCdXqXQ0swGQbMOzNXNwQWngoqcSSPttGa8uMe8t1K%2FxxhjEGWigr2Ni%2BPX5OgxOtUrMi5mJMbl%2BHT18%2Bqyat3b55u0FZLdPGyWkSsIPs7Lxv0QUhrF0LMlki5cnhgkG3O45fvK7C0yEoRd6YEQBZDeG6U2hlKhqSZ%2BRXDjr5AwnOj47vRaDkOtAJeoTkU8Oa4Dmf%2FjoueTfIzDP1l1KWdrOZ4GVDyPcHtaM7JTxfvHryAd15WIg7WP8I25jhtfW6J7CljSCB4rEjxDd7iECQaBZqTuUxFl51I71NZyQLbaNiL%2B0DJFyvoZ%2BovuzhwsBRqUwUv42l4sFvVP7Ux%2FXgqinv8uASZe5tF26kvmVy6oFpHWfgLf%2BXKgybN1ozwQoEEsJqWil6m49hwRbqerdD93Nd9c3FYtyLO5L8SN8jnNff3AGynSJa7NlL4dJm9hqevadHmoPOH4u4ZdRKJ7M8AGbEmQdGgNUFnnuJJxHWL%2FBxybAg9KTupt8k3OL4fASVQelIyFyWbP9peejNRWQJzb6CouBIljf3a5OpRZU0ybSQTdWdKLYuJ3vfkmv5lJuYMWDRV9AC9nbB9iAt%2Bcw6enUgJ0QVCXs09%2FBOg9fJXgLTC%2F%2BOC9BjqlAeM0LJvwL%2FANbnPyfNoTeANRWUFRO%2BHj9%2FfKGo32ARjcvubSdRfindeUxyCP0gAHEF19wfnEnrh8cFaKbwWtfb%2BKuQVswZNTV0cvD4cM1mlnLMArAnwb0klVTqRf8GMEI4tlvtKC%2B5Dm7ARV7uNKvl3uS5FPWppkuvB2C5qjWYM2H%2FGpaoegBNCBGCA2dmtsSnUjV3J6i5BiPccZLedZLTeC5Y6hMw%3D%3D&X-Amz-Signature=a6ba226e107146f0fae07d7f2d62db0f83aacc96abd36ed09895bc4a3c275a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDZHKHY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeFywOfy2rK9RVT1F5phSDvF%2BZHSG0zS3sUU9NS%2BIozgIgS3gHwpRlnHf%2Bq5dIP0%2FhAE6nOpIVS3K%2BAhhCNMZvm3QqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM2HLxwUino%2BlHy1ircAw73PpvaWxf9ZIVFPw8%2F%2BPgTTu0gLtns3k8%2F3OHb%2BBnFMCk1kC%2F%2Fv7bnHmR7j5Vhputc3PD9zIkEGUiEhyvwowPkkOxl2tD1HWLn%2Bjo%2F%2FYA8%2BWWd6bSNEoKaEpvZDTCOiFo%2BNg16RRyjBejm71AU1bnEqqV7w9WC0LQr%2Bqctv61oCeol117Bpx2DsjljtPjVPgO835n1mWW0BS8xUMuVC6SZcfgSnR4dV4KeU84jOIHontLfM0tR%2FCaYBQR2w8G8qHSLE%2FCTY3zErJBfpF3G9j4e1TgVDkg8S9gviFPvEIy91SVCmKzXPF9%2Bon7RYCad1xvhDlPTG%2FSMhRvi2QX5SrHi4uOarVkmyNt6GQUxYWEjScMU%2BYGq%2Bxmw7yczvt5mtlKwFLukLEtcTR%2F411M9j%2FDYcamT0iOuapqtJnYl22hr3JrRuRBZWKhlEAwrrnRTQE6gVpiItS5aOVXCChld2sPPv2cO0zd1oqA0VBgFP38xnjQezY3ab3OFCVVDv08J3JrQK3H2VvmOPGHhEyA0SsVTa6eGSChXF7lvejufDDuR2eIPcgDuD%2BMjr60jicEla0itIOPJp5oaMkrb%2BpnlrVT90zNacbhgOA3xSntYrdxy%2BN5d%2BM1k9Dj8dBe4MIb64L0GOqUB7EVCBMRWGq7LP2vxY1WQtvEer0%2FIv4RmHtcL5Bnrqzdw2NfPx6a1jMfaviba8dlTsL6KbWms3nGG48I%2BLXbaN5KjVmgEMWSNF1wn5xSByDeu6pyYe6qBa3jtY%2Bu4J4h5NOxBfcK2hUZAgupBDzbCL2keiEDOZo0Bwema0tL1FbpviNcpHy4ed7wgVC%2FVawqH9gJv%2B27PgndWOGaxNFw9F5u1WCT7&X-Amz-Signature=ac6fe2725b81000c5cca300bcdd62fd294ba8dd8da9cdcd3f2e4c002f466edd7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
