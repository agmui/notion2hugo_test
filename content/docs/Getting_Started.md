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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JA2SNSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSYJOeGTvIdRDNiC2pSiJ5Z5CAfOyUqqPFH%2F07mfttwIgb7kkGFevYMCXvdZNXVUZ01k%2BZLRxeDJFUrh2YSlY2z0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTneOt5hcLKNkdtpircA5EBFMnl791uaN6kcAQLzT%2Bxs46wqnIU3%2BA2Nd8VMECImk5GjxEmrM%2BFCIqcf9DKKddr1yX4YcsYDX9zJ9iqO9reKyIeVYe%2F6Km9igvlOGk1ULGa74iNenC%2By2h76PiuZabGwYWoaPx7K9YG7WM8UXR3DiqBR9WNmXS2x28JYeppO6ohBUP9R0xDWqbG0jR251FDMem38UeR%2BrQRef7hsCUNFwININb%2Fx5thmRulC4Hy1dfrsBs8aRK9SqMKPMDtIe0COJgyVVWIjHvA4i0HDBn53waTKSCFE6yQbsF7mQZqP51%2FQFfvzXMWuQnSidkPlmBLGsgEbzGxKTqyZtFtF7KES64zsef6wZ1%2Bh%2BKj3Q2UFbtLj0PMBzY0c3H5ihenIoFMEj4RjqiI9H%2Brqt%2FsnHDNxrbUhNEPUXjmS%2FCdcwdwaxrYk7etI4wxcMyTfGdHkoJqigPrY9NfE310qS5eyNIhOQxmNak%2FODK%2F2jxnVKG%2B6bs7vuoJ%2F1avjrPM2Ung73zEQCwucJcBdH6TeiApBbK6U5mDQ4M94CXLf%2FzqskDCPv2OSi%2BkUNz999EMSTmRyz7wtcdDhAkfkyvKF2Qt7ijlH%2Fb7QoTH7ejpWzwNmr2dz%2Fh2VlkkJxFKhTTRMKyutcMGOqUBvx5WBW47yhYqk%2Bv5KKOsmoSOEOZFUJcbRNCfV40Pq4G0lxPbkwu94pUh5vS4CdajI4VmLeuHm6XYh8wRs0V%2FrrILaJJxvJlmJ3fH%2FyooWSRDgpsNoK%2F5h%2F2ueIURlaspBPoDVRm0IlwQQKobgT3EvvXvNs6wr983oxv87A74zVPv7i%2F5Z%2BuqzGFhyy3V6i7SEAt9qV2SAPV3OLG5fVPc75QNPwfr&X-Amz-Signature=11c75ef472951d2b3aa57a04a749cd7bda24a484b1b3f2de2383c1b35b6a603e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JA2SNSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSYJOeGTvIdRDNiC2pSiJ5Z5CAfOyUqqPFH%2F07mfttwIgb7kkGFevYMCXvdZNXVUZ01k%2BZLRxeDJFUrh2YSlY2z0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTneOt5hcLKNkdtpircA5EBFMnl791uaN6kcAQLzT%2Bxs46wqnIU3%2BA2Nd8VMECImk5GjxEmrM%2BFCIqcf9DKKddr1yX4YcsYDX9zJ9iqO9reKyIeVYe%2F6Km9igvlOGk1ULGa74iNenC%2By2h76PiuZabGwYWoaPx7K9YG7WM8UXR3DiqBR9WNmXS2x28JYeppO6ohBUP9R0xDWqbG0jR251FDMem38UeR%2BrQRef7hsCUNFwININb%2Fx5thmRulC4Hy1dfrsBs8aRK9SqMKPMDtIe0COJgyVVWIjHvA4i0HDBn53waTKSCFE6yQbsF7mQZqP51%2FQFfvzXMWuQnSidkPlmBLGsgEbzGxKTqyZtFtF7KES64zsef6wZ1%2Bh%2BKj3Q2UFbtLj0PMBzY0c3H5ihenIoFMEj4RjqiI9H%2Brqt%2FsnHDNxrbUhNEPUXjmS%2FCdcwdwaxrYk7etI4wxcMyTfGdHkoJqigPrY9NfE310qS5eyNIhOQxmNak%2FODK%2F2jxnVKG%2B6bs7vuoJ%2F1avjrPM2Ung73zEQCwucJcBdH6TeiApBbK6U5mDQ4M94CXLf%2FzqskDCPv2OSi%2BkUNz999EMSTmRyz7wtcdDhAkfkyvKF2Qt7ijlH%2Fb7QoTH7ejpWzwNmr2dz%2Fh2VlkkJxFKhTTRMKyutcMGOqUBvx5WBW47yhYqk%2Bv5KKOsmoSOEOZFUJcbRNCfV40Pq4G0lxPbkwu94pUh5vS4CdajI4VmLeuHm6XYh8wRs0V%2FrrILaJJxvJlmJ3fH%2FyooWSRDgpsNoK%2F5h%2F2ueIURlaspBPoDVRm0IlwQQKobgT3EvvXvNs6wr983oxv87A74zVPv7i%2F5Z%2BuqzGFhyy3V6i7SEAt9qV2SAPV3OLG5fVPc75QNPwfr&X-Amz-Signature=5a1819757f17b9da01097b147c03e03f658a6f77a081f8fccad8a9bc763167d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JA2SNSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSYJOeGTvIdRDNiC2pSiJ5Z5CAfOyUqqPFH%2F07mfttwIgb7kkGFevYMCXvdZNXVUZ01k%2BZLRxeDJFUrh2YSlY2z0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTneOt5hcLKNkdtpircA5EBFMnl791uaN6kcAQLzT%2Bxs46wqnIU3%2BA2Nd8VMECImk5GjxEmrM%2BFCIqcf9DKKddr1yX4YcsYDX9zJ9iqO9reKyIeVYe%2F6Km9igvlOGk1ULGa74iNenC%2By2h76PiuZabGwYWoaPx7K9YG7WM8UXR3DiqBR9WNmXS2x28JYeppO6ohBUP9R0xDWqbG0jR251FDMem38UeR%2BrQRef7hsCUNFwININb%2Fx5thmRulC4Hy1dfrsBs8aRK9SqMKPMDtIe0COJgyVVWIjHvA4i0HDBn53waTKSCFE6yQbsF7mQZqP51%2FQFfvzXMWuQnSidkPlmBLGsgEbzGxKTqyZtFtF7KES64zsef6wZ1%2Bh%2BKj3Q2UFbtLj0PMBzY0c3H5ihenIoFMEj4RjqiI9H%2Brqt%2FsnHDNxrbUhNEPUXjmS%2FCdcwdwaxrYk7etI4wxcMyTfGdHkoJqigPrY9NfE310qS5eyNIhOQxmNak%2FODK%2F2jxnVKG%2B6bs7vuoJ%2F1avjrPM2Ung73zEQCwucJcBdH6TeiApBbK6U5mDQ4M94CXLf%2FzqskDCPv2OSi%2BkUNz999EMSTmRyz7wtcdDhAkfkyvKF2Qt7ijlH%2Fb7QoTH7ejpWzwNmr2dz%2Fh2VlkkJxFKhTTRMKyutcMGOqUBvx5WBW47yhYqk%2Bv5KKOsmoSOEOZFUJcbRNCfV40Pq4G0lxPbkwu94pUh5vS4CdajI4VmLeuHm6XYh8wRs0V%2FrrILaJJxvJlmJ3fH%2FyooWSRDgpsNoK%2F5h%2F2ueIURlaspBPoDVRm0IlwQQKobgT3EvvXvNs6wr983oxv87A74zVPv7i%2F5Z%2BuqzGFhyy3V6i7SEAt9qV2SAPV3OLG5fVPc75QNPwfr&X-Amz-Signature=033d0a3149797a722c40f5233062e902d1e6aee57a15ad25a0808eb7a0092698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKYSOAJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEid0mDj%2F1n0KghrHfyX8%2F4UvvC%2FVz9kzU36VFE%2BieRfAiB%2BlZazoamotrU3CC22bpgxUlya9M7KG1pyFj7ogSJDFCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBrYlT%2BZpzrDi9HfcKtwDWUehWAml1lEj1CBNk%2BRQlqvsqZF03eNz1H%2BxbbKGaZqLtaHjywWB0w8JLCLsJ6Wx2eHdBpl%2F1mlQYwJ63BCUvwJXoMeJ3T%2BaL%2FcKrxrCePjhFMMQhitprBBMrY%2FLIk8wBeiwc%2Bjq8G3gve2zZVi8uzdVNPMb37fG%2FFF9T7PhjvAeDiumOzFKJia8BrdrWFIhAUoXSxOXugZBo9vnQ59VkKn6SDqqxXDw8%2B0uBZLTeg%2BSFe%2FygS6zBlCDUMCY5wv1WVZ1tqxgc8M%2FR0bpCJoYbrQHikPtMngyv1yj%2F1BTerMDOB6WlnQsWZf28zVqwtE63C6sNAkZHuACCke8qU5JDv4fI%2BOPdvQUhHfCMCp6O7jq9OREEKoIPjyJxOC5aC4Hg3e2Gxx9qHNk1w3Jsi2itiUr54aYtmAH7RkQFuQxfBQVJvdoNZS7XRC3tJ5dybN5MoaRmRdLU2wL2AZ02sBtDG7%2FeXsYs3sfunVQvDbNYprgqIupe%2FeqmvyLQdFEleP958hgNQUTwyTF5Md6jlYa30iGaHTCGfBp0gGB8nJlHKIr2gbmlZU2cY%2By3aXLvQhuMjdrzrvi3qWBjrBBpcNgWlXlnOU3qmPd5GUiy%2FckDeLFdQ7M3iaY7IKefSswl661wwY6pgFvwSTkmWgFL%2B5DHIVlTxkYtA7EAwrZO6vjWe4tT1AhuxitS6327percbGmnh0w0a6jtooAAArIe2po2JehV7iOrvBoacLrIkLKcjyldmGEQAoJteochUh1kLhYzU9i0W6v1DZHadk9yFsWRQofgSBoJbOHwkUh%2FenKXsugm0dNx22VMC%2BhDq%2BeflH9eala8%2BaM8ibqdOY3uF2%2BkrSEKpdewBlFx7LA&X-Amz-Signature=953b979b9f6c8c1f9a6e0e5b8b79d82a287f509d1898dfa2533f6e83d7b8ee2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL4PYAEL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATfLTOx0aUSUKk3teSEm%2F%2FdQGJTdO2rkjgZBS0vVLGnAiAfwm8WfmV7y1aXpjdz3uT86ZzMuP%2FDRBZvfjmlKhg83CqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWKWQyRLjsd4L1ydFKtwDTaTynu5AHvlB8YXkq0uE8x1AqF2t9J%2FlVlIrXA1zoKB2%2FyilgrtinGjbk3sncP%2Fs8e5BT9dobD%2BFJtAQ17DQi26SlkduhucVUGrN6OTm6oV7%2FUQqZtR%2F5pCbibihrf5JRTcF%2FOnHOaJRGbDeruRiqFsBS6MRG1rYuuvqsailqx6QGPJH92PcpaA8NZ2krVhmd27H0f3Q%2BItug24KW9gXCAi7X8E%2BXRY1mFO%2FlRYPo9elrBdGYGAkcnlf5KHHUK8PivWSEd94adEBIwedVg47PFKuYmCs2cw%2B6mO%2B8v2UJmK7imhFz4sQMI%2BlPlkm5o5ZPioSwhFIR5SVt4c2B5HerZBysd%2By0UExYQVXneEAE7%2B%2FHwQFWRAkosHXFQd1OvtZiFgrojQ5Xhqk1i3v%2BoLRoIZRRtrjfBixfzqCEVoTRTI8gPJkrgWY9CdoVdKxW0QKEWCYtfPlD%2FxKB2DGe%2BBzN6Wo7nUsaNU0X1vUgWFER6%2F0aGtloRVzvGkr6plBTI541d26o9IWwtZfFXgQ9clBwU7xqPZikmGb9qsrh%2BpUK%2FqZcsEhrr9hkekX5wDDELzvgbCxw9UeNh9ZnTdzqRDnhTHwZIcxFjGOMeQZiVLIm9fxFDl9cNEoJ19lwwAwr621wwY6pgFeXxc4HmA%2FgsEkDY7S%2Fhg1p7EYxWhwMfeLD2RLl%2FXyv7M3GUNTLs06MXbgaDp2sImDNxCeIFtEFQT4iN5H7ptk2oqdgiYYtGXOgqqy2Bq3oFZhyxVUUvY44HZQtAruBHy1ocIDPRSZ9Wd6FOjm%2BeZakAh2gvN6b5sjZDQYLXwDwZ4UCJldtYsg6cz%2BSSCRTylUiJUbnkoSaaPo5TKeL%2FTb%2FsH7EMp1&X-Amz-Signature=9b34fda73d87a0f395da52bd2bac41f81044b487818f96b3b9e921060a3fa8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JA2SNSY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSYJOeGTvIdRDNiC2pSiJ5Z5CAfOyUqqPFH%2F07mfttwIgb7kkGFevYMCXvdZNXVUZ01k%2BZLRxeDJFUrh2YSlY2z0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTneOt5hcLKNkdtpircA5EBFMnl791uaN6kcAQLzT%2Bxs46wqnIU3%2BA2Nd8VMECImk5GjxEmrM%2BFCIqcf9DKKddr1yX4YcsYDX9zJ9iqO9reKyIeVYe%2F6Km9igvlOGk1ULGa74iNenC%2By2h76PiuZabGwYWoaPx7K9YG7WM8UXR3DiqBR9WNmXS2x28JYeppO6ohBUP9R0xDWqbG0jR251FDMem38UeR%2BrQRef7hsCUNFwININb%2Fx5thmRulC4Hy1dfrsBs8aRK9SqMKPMDtIe0COJgyVVWIjHvA4i0HDBn53waTKSCFE6yQbsF7mQZqP51%2FQFfvzXMWuQnSidkPlmBLGsgEbzGxKTqyZtFtF7KES64zsef6wZ1%2Bh%2BKj3Q2UFbtLj0PMBzY0c3H5ihenIoFMEj4RjqiI9H%2Brqt%2FsnHDNxrbUhNEPUXjmS%2FCdcwdwaxrYk7etI4wxcMyTfGdHkoJqigPrY9NfE310qS5eyNIhOQxmNak%2FODK%2F2jxnVKG%2B6bs7vuoJ%2F1avjrPM2Ung73zEQCwucJcBdH6TeiApBbK6U5mDQ4M94CXLf%2FzqskDCPv2OSi%2BkUNz999EMSTmRyz7wtcdDhAkfkyvKF2Qt7ijlH%2Fb7QoTH7ejpWzwNmr2dz%2Fh2VlkkJxFKhTTRMKyutcMGOqUBvx5WBW47yhYqk%2Bv5KKOsmoSOEOZFUJcbRNCfV40Pq4G0lxPbkwu94pUh5vS4CdajI4VmLeuHm6XYh8wRs0V%2FrrILaJJxvJlmJ3fH%2FyooWSRDgpsNoK%2F5h%2F2ueIURlaspBPoDVRm0IlwQQKobgT3EvvXvNs6wr983oxv87A74zVPv7i%2F5Z%2BuqzGFhyy3V6i7SEAt9qV2SAPV3OLG5fVPc75QNPwfr&X-Amz-Signature=35c2f0eece5620dcb4f042e767e625fece8c84e003ce0c5062440bfea3f3a544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
