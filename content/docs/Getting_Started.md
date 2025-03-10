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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVIKO4U%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCUy8O9KJHT3aNBQjdT5eVLl5KPTfQNHW1Bc44GbDipkAIhAP8kwJRK%2BurYRh1gx6LhAB5vf3FGpf6TaHQnWEpthK9qKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3rGFrBPPsm9q4Troq3AMWxyuMRWxiTtXsxdaNSssEs735x%2F392PccjyS8lFEW8zBBiM9fFkHYDzrfX1e3oFjqMKKSnDcjUFkCgvrb2NNr6ZfEh4sw%2FroCRJ%2FKN7AVpqtRybOi9R5jdiCgE2%2FTbs3zDNm9g0vcbXR0qtCcnmBssdlb04F9wkBbZn%2BN%2BxS7zv2e8TWV3%2B2fCkkSPIrQd%2FWoiHyOJddFa%2FuYh2eeff5%2BuPerYI7qemAsqIAAIV9KR1aiJ200OswLpvbhXcNhaErli%2FbuC6EmbAijnPAqewrvE6sHD%2Bz%2FzsaQpthnlxflIgGVX%2B7yoBJCKt56VX4n1yCRSwHbD%2FRF2jtXbLACKNtWvWiR1ETiKMN88GjMDiiY4Vw9LiPiHv3nc9lkX9AsfOuhIoxqt72MnV%2BZEdVnp4ggCFN8UKMzCFtm73fLl7uWQw4RXQ9lZ3DbdhT0ZDDdIzoOIYZnspwN8%2FVQs0Jze7ftn69etE4snXpWV7%2B2iioKmvaP%2B6NHR5EtIlvhkCSP5Ttsx4lPzGxvu882UGBxBxvMFDW7Y0LOBft4cENauH0mO62N3WoiJHxlUmAiMuI2MBsau%2BE9FLhIKb8cpOBQWRDmdRnG8B66H9S2%2FB37fduNjGsjeEk%2BfTskMMrgpzDg6bq%2BBjqkAXklZWDaxSW%2FHffSisOdVv1X1%2FWAmHLkrhQWoE9nHvkl785zgQlBESbiIf1stiA%2FBNZUyz6bZpL4D28iXL37K14Fgp0QC9vTjEsiXrrcIdJoYF6YjJh8r6dYQ6aQHWuA99n6%2BoKyxoYjL9y8l1O5oZ4QfHXUJ4mqdmRHP25M7DnBpFkLHDz0jxAGrk%2FVT5nRfNOcMzfzMpTNu1y%2Fu1VkogYAcOUj&X-Amz-Signature=25af714f0c91c26f96280f774aa4897a4d110f79b76ea2873d3d724d6827bb87&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVIKO4U%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCUy8O9KJHT3aNBQjdT5eVLl5KPTfQNHW1Bc44GbDipkAIhAP8kwJRK%2BurYRh1gx6LhAB5vf3FGpf6TaHQnWEpthK9qKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3rGFrBPPsm9q4Troq3AMWxyuMRWxiTtXsxdaNSssEs735x%2F392PccjyS8lFEW8zBBiM9fFkHYDzrfX1e3oFjqMKKSnDcjUFkCgvrb2NNr6ZfEh4sw%2FroCRJ%2FKN7AVpqtRybOi9R5jdiCgE2%2FTbs3zDNm9g0vcbXR0qtCcnmBssdlb04F9wkBbZn%2BN%2BxS7zv2e8TWV3%2B2fCkkSPIrQd%2FWoiHyOJddFa%2FuYh2eeff5%2BuPerYI7qemAsqIAAIV9KR1aiJ200OswLpvbhXcNhaErli%2FbuC6EmbAijnPAqewrvE6sHD%2Bz%2FzsaQpthnlxflIgGVX%2B7yoBJCKt56VX4n1yCRSwHbD%2FRF2jtXbLACKNtWvWiR1ETiKMN88GjMDiiY4Vw9LiPiHv3nc9lkX9AsfOuhIoxqt72MnV%2BZEdVnp4ggCFN8UKMzCFtm73fLl7uWQw4RXQ9lZ3DbdhT0ZDDdIzoOIYZnspwN8%2FVQs0Jze7ftn69etE4snXpWV7%2B2iioKmvaP%2B6NHR5EtIlvhkCSP5Ttsx4lPzGxvu882UGBxBxvMFDW7Y0LOBft4cENauH0mO62N3WoiJHxlUmAiMuI2MBsau%2BE9FLhIKb8cpOBQWRDmdRnG8B66H9S2%2FB37fduNjGsjeEk%2BfTskMMrgpzDg6bq%2BBjqkAXklZWDaxSW%2FHffSisOdVv1X1%2FWAmHLkrhQWoE9nHvkl785zgQlBESbiIf1stiA%2FBNZUyz6bZpL4D28iXL37K14Fgp0QC9vTjEsiXrrcIdJoYF6YjJh8r6dYQ6aQHWuA99n6%2BoKyxoYjL9y8l1O5oZ4QfHXUJ4mqdmRHP25M7DnBpFkLHDz0jxAGrk%2FVT5nRfNOcMzfzMpTNu1y%2Fu1VkogYAcOUj&X-Amz-Signature=f7f3d753b266f86bb81a6eddd49ca583e5cb37525e3452c99512b30869fe4857&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7PEZGL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCuk9MQHA2MWqWGafDvVNDz8PL%2Bvnx%2F7zp1q%2FiZyiSbVgIhAP87Gx96pBhXdX9v6S4ZsAiHRO5mhla%2BCFJkMRL%2FT%2BapKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbWMrLbDXGuIopp20q3APcx2Z1pgseT1R%2FBlgHjKVcKjMfeezrnwplPwAV6G%2FD1CE2ZFKFEFndwX7lvrbOi6I3SIkAV4KMNsjrLoDGWttEHNrszgMOyIaZ2iqUGXTmtbRNXH6YYAtVNcjufu5PtUqLyNlugxu6kBMCRcjLe04K7ax7X7iXPWKCGeEo6CgtjIMbAOwS%2FLeq7uELslJD2BcqzH9MNONSJ%2B8VkRxhqH8M2wpyaCNhwJ1adqdWcRvUYgFIIM8os4l1EOP%2ByMML44yaySfuT0Nb6Xvkk%2B7ok7%2F1PTWpZyNJj3oIDRgo0OmQtRVHCYi6IlPXC8ul9YpwGgwn7CKrgnMZn7%2FPVUF4MQXA%2FDYTL5MQWkVk77UZxOi6Cp2lYsm6GmIPJI1w1g14bC8S291DoOMT826C2uYhhnjZqDY%2F0wnOkHmzGkISmZhV%2BaYb6UtCb32MXXx2oCzpB18QA1Pjjn74Pum3mWLpMdK1YwzT04FyFofkcK1extQdNDhf7m3YPBP1CWuCGWGVXPNADT3s28Ctl8g5WbGq9bWTNRO6W3b9dtHz3B5smCjGRiX8F5tWDIY3uknxkjNsQk04T1y1KObtsE2XLpi%2FRq1fWr9F3cfoy6SPBRvvOrkiWhjgGh8j0dbrtwm2BzCF6bq%2BBjqkAchKF6ocLDBu1gQ59q4vhqjOs28wo2v10dMpjFLE%2BB8g0HV5TvokJHIClY5cAAsAjg9%2FghVkW6lNbqByKolER8Bk%2FHL2LeVG4LZDXeS3nZCZT%2FU42LmeSlxVve6UKcQ0mNlc31e%2BESwqvKh%2B8XRMHWFmXhfAnfsizzsgY6tDJsnuwXxstVqEszkLRsZbkWr15L3QZc2ufGGA7mcyyv81e5UEPvds&X-Amz-Signature=2489550a2da485c1e429e52648cd09ae0099c60bdedc800b3a652807d8a2402e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU5UDXSY%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJFMEMCHyzYjmlK5QQPKDcVGZEfBYsps6DVcEPyUpJXt1gZTg0CIBXB%2BzrDL0Q4mDp%2B1aT6ue8grk18ZsHjwxon1L82OZGPKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB4HY69%2BJKSKA4rPwq3AOGjuFZLPm2mN2GdZDcXPNXUXQ%2BqaL2T5XAgOvs8fWIrmGWSG4W0JqArFjvcJSZeX72EGG7ZClSwTlECvJpsCavuL7M4omwWWCVg68cEXT%2BMCJkRCVUxPrZbvIRZ03Nirjdh%2BguQDvn1zImtRCHFZ2HrPFh58MjC9st3WC5znVKJWx%2BEhLZdHh0hTvP9A8wXxOqOaieos2ZvsChoUQH%2BB9Rwnk2v32ZE5Iv4qK0DxbgfCLKUJLv6KTSTzytHj4P%2BRPQ5%2FLOZMEEeE1JDM3I5eT8%2Fp2XMBJ7tH6o0Uh%2BK3vVmr7z7TeHvyKCcbocQBLqb8B4bat37JyVUoWa8S2Ol5qkCVWs7aE5knThPDq3ygblkXseRXRPuGGt5x9C6l7otKB90ZCHl6ZFA1YOZF2xRa9H1fZRDkRhlL8E6OsEIPWWuCkipU0%2FxrWswfQed7JGgY6XSFEdPLPHIqMx5KXXAnfSLVVEZuLw9nRjbQnUt6OQDyhb6jHX4AwKf%2BbSXwIgJTnBhS0O4lZi56r5rXAEX%2FO0phgcOjZBaE727OZZ9uEpBicefki%2BOEpap7ss9CLgKpkaXPtG7C7jn8G%2BWotdlmeTrlKe%2Fx89IBAm8SdJPn5kGGsQpTdUuggKiiJ%2F4zDk6bq%2BBjqnAd5GYrJ6BoinIupd%2FkGJDSOcwFvtToOITmwGkxVGt%2FhkqhmZFXOBOSFJsLvgnagT%2Bl8kO5uSD47asvM7eJu1KpBOJM7QA5U4Y7FZbaB%2FLPS84IZI8qYQQdgoZ51T7OS93oL14IfUHkSDIb%2Bbemw5%2ByNg%2FJht6elt%2BxCQ2xk2E6abuSTjCEuuHnYgavrZ0B%2FYYcpxARGFVVi%2FEWlNs5Lldc4mJ178Y64N&X-Amz-Signature=509d92b2a7e8a7d4f6d5f70a9adb660c35ee168b1f7aae6cc5662e00af7f8fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVIKO4U%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCUy8O9KJHT3aNBQjdT5eVLl5KPTfQNHW1Bc44GbDipkAIhAP8kwJRK%2BurYRh1gx6LhAB5vf3FGpf6TaHQnWEpthK9qKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3rGFrBPPsm9q4Troq3AMWxyuMRWxiTtXsxdaNSssEs735x%2F392PccjyS8lFEW8zBBiM9fFkHYDzrfX1e3oFjqMKKSnDcjUFkCgvrb2NNr6ZfEh4sw%2FroCRJ%2FKN7AVpqtRybOi9R5jdiCgE2%2FTbs3zDNm9g0vcbXR0qtCcnmBssdlb04F9wkBbZn%2BN%2BxS7zv2e8TWV3%2B2fCkkSPIrQd%2FWoiHyOJddFa%2FuYh2eeff5%2BuPerYI7qemAsqIAAIV9KR1aiJ200OswLpvbhXcNhaErli%2FbuC6EmbAijnPAqewrvE6sHD%2Bz%2FzsaQpthnlxflIgGVX%2B7yoBJCKt56VX4n1yCRSwHbD%2FRF2jtXbLACKNtWvWiR1ETiKMN88GjMDiiY4Vw9LiPiHv3nc9lkX9AsfOuhIoxqt72MnV%2BZEdVnp4ggCFN8UKMzCFtm73fLl7uWQw4RXQ9lZ3DbdhT0ZDDdIzoOIYZnspwN8%2FVQs0Jze7ftn69etE4snXpWV7%2B2iioKmvaP%2B6NHR5EtIlvhkCSP5Ttsx4lPzGxvu882UGBxBxvMFDW7Y0LOBft4cENauH0mO62N3WoiJHxlUmAiMuI2MBsau%2BE9FLhIKb8cpOBQWRDmdRnG8B66H9S2%2FB37fduNjGsjeEk%2BfTskMMrgpzDg6bq%2BBjqkAXklZWDaxSW%2FHffSisOdVv1X1%2FWAmHLkrhQWoE9nHvkl785zgQlBESbiIf1stiA%2FBNZUyz6bZpL4D28iXL37K14Fgp0QC9vTjEsiXrrcIdJoYF6YjJh8r6dYQ6aQHWuA99n6%2BoKyxoYjL9y8l1O5oZ4QfHXUJ4mqdmRHP25M7DnBpFkLHDz0jxAGrk%2FVT5nRfNOcMzfzMpTNu1y%2Fu1VkogYAcOUj&X-Amz-Signature=d73426cd65fe95a0b4a89923ea12e79d9d3618d6681a008f36135e1d6a7fe7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
