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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFFKNN5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZBoZuAHiTF1F7GVRYzKPEyCZpEgd0Ib4uykb6rtBEgIgUuunSTcrlsTzmWEcX2iqlnwXaRA9YxWY7ycK3wrSMqAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV3TVI%2Bn%2B9iMIxaPCrcA8IrAUSnu056S753NQL1HW7FmxOTmxs7HpBZDCYYW3exTGGQHwkMvykyn4IacflVTSWL3VcSMRddUTUr3XJuovemAD%2FLuYo253wO1rLJb1GW3Lb5T0brH2u%2BHC0O9DJcLvTcNyD5stPhKtD44bEGc8D3CjDoOZFezjtniposgyv3r5uCIaakpFfO7GAnVXyEHDC4bgFpXkqlpflmUvqtaiant15fNpIvmiwgSVydfjRjL46Qr5ho6%2BbT4RlXwSXFVdQnHmbUbpf4gZaZpY063CYceFUY%2FC9z0J4ULz8VLWbJqMi5Tya2Uh3Xm5FqNGo0%2FNIyqXEo4GlDZSg35yd7dnsMRuHczT6J%2BTuuVGUWahjqy4FpuSFsZQvDvCVCcQuD5M2gKdOjE0Ec2xw802E6hEx6M4vqZ4qgVRwBWOHdQMhy87vzPyfuJ0sotRunboJSrJsxtBWbGcNybDobyKzYm4tP4cUSztCKeE%2Bjpnd2%2Fk%2FQIun5bOLsmNWgFGIzcggUg%2BA3PG%2Fjw%2BaSsas3qG0AIVK5AME6wO0BIaMrC0ko8gyf0scUfR95lDvWN5tP6iYQrl3wk%2FfXc%2F0JDGRe54%2FD2yeH5Tj8RMeXXLIeMIsEqFOXb%2BaJTkD2jukbfnS1MMeZ4b0GOqUBi9qehZAssDnV79Z6zQyNVmyVzNoDPbfXVlFMfjnNnU1PZQLfqM5qglJChOpCawdF5bhI%2BR5wQUe5p9ht1Prgg2nTC7NzIClTT%2BNGOUpLdyN1VlseDEB3YKu%2FTGZnNkYcxGcjh19PJxnj1ROVFcw%2BIMZh8AZotUOlszSG44Zz3%2BS5bxOLAD8%2F6Xz7upHJzJyWyJZeF%2FNChMYaI75RslcRcDWGTDqB&X-Amz-Signature=fde199640c2cc2fc3175dfeb20917b5351a45e4b794e40172524d5e44b949e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFFKNN5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZBoZuAHiTF1F7GVRYzKPEyCZpEgd0Ib4uykb6rtBEgIgUuunSTcrlsTzmWEcX2iqlnwXaRA9YxWY7ycK3wrSMqAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV3TVI%2Bn%2B9iMIxaPCrcA8IrAUSnu056S753NQL1HW7FmxOTmxs7HpBZDCYYW3exTGGQHwkMvykyn4IacflVTSWL3VcSMRddUTUr3XJuovemAD%2FLuYo253wO1rLJb1GW3Lb5T0brH2u%2BHC0O9DJcLvTcNyD5stPhKtD44bEGc8D3CjDoOZFezjtniposgyv3r5uCIaakpFfO7GAnVXyEHDC4bgFpXkqlpflmUvqtaiant15fNpIvmiwgSVydfjRjL46Qr5ho6%2BbT4RlXwSXFVdQnHmbUbpf4gZaZpY063CYceFUY%2FC9z0J4ULz8VLWbJqMi5Tya2Uh3Xm5FqNGo0%2FNIyqXEo4GlDZSg35yd7dnsMRuHczT6J%2BTuuVGUWahjqy4FpuSFsZQvDvCVCcQuD5M2gKdOjE0Ec2xw802E6hEx6M4vqZ4qgVRwBWOHdQMhy87vzPyfuJ0sotRunboJSrJsxtBWbGcNybDobyKzYm4tP4cUSztCKeE%2Bjpnd2%2Fk%2FQIun5bOLsmNWgFGIzcggUg%2BA3PG%2Fjw%2BaSsas3qG0AIVK5AME6wO0BIaMrC0ko8gyf0scUfR95lDvWN5tP6iYQrl3wk%2FfXc%2F0JDGRe54%2FD2yeH5Tj8RMeXXLIeMIsEqFOXb%2BaJTkD2jukbfnS1MMeZ4b0GOqUBi9qehZAssDnV79Z6zQyNVmyVzNoDPbfXVlFMfjnNnU1PZQLfqM5qglJChOpCawdF5bhI%2BR5wQUe5p9ht1Prgg2nTC7NzIClTT%2BNGOUpLdyN1VlseDEB3YKu%2FTGZnNkYcxGcjh19PJxnj1ROVFcw%2BIMZh8AZotUOlszSG44Zz3%2BS5bxOLAD8%2F6Xz7upHJzJyWyJZeF%2FNChMYaI75RslcRcDWGTDqB&X-Amz-Signature=de5b7cf98423d3c44f4f0eb6fefd8031e557ca6fcdfeb1dd3b83a3f51c8a769f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNG5XWXW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpDchHjuPZbbsPUWjzhEgN6C8JJInsFu1pfoT%2Fs1mj1AiEAkR0xqlbzuiwU%2FHyJrTNVtdqfwjiZUFYzRin4g%2FoqrAEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRjXK9CQicNVw2auyrcA5VlgxAlvTDNxDmZq5AC4ZkplxIziJWzVXQxY24IudzAFzqybZeS%2FCDMudM5j%2FndaHK1Fmg0f9KVHOUa8i4D%2FURcRfzq6s6dtOkPiSrenCvjBcHMbuEO3vnz4Rwyr%2FDIduB7TRXhcRQCA519pnx9woAWOcAEJI89Q%2BW2pj75Mw4UFI%2BA%2FU01qVB8%2B0Ovuv9NtWhNvGKkbkdYwS0rO1nxCqLQvIC5l44ZgbwzQy0bFC8Y2Id0ALXgw4flHnmM4LmqGU0VgdcqDtdRpljd3VFyNpy4ptSYIu7og0bnKxWRhxxyAk%2BMuii3r002FWurxbWPAMU0LtG6u1EMkS7Nl71Us46duv83QsERFq6bjyUzr7y5X9pxSaxZIF2LnDmEoJPbnsmfGMAUy2hOoU2BgW1cXqeESWk4%2Fjjj7c1CyO36H18xe6mzRrmLX%2FDjsoUaCsoj8N%2FcfjWONPXa6k4nzMionWykijTfBQvPi%2BxuIKTLRIuG79mGpc%2BQk0XeRIY3VOjFRnaUIcQLD58tEiQ3VNtlWzzbW9VBjNwfl81e8L12dh4Gy5Vj7SzxTN5zRdn6TxpiPJYGwE%2FuAGW26MjL3i8YqTUuS5CeOWMzYxrweNteFQVKGCIpbc5ecPRTCiyGMOCY4b0GOqUBEGHLWVpIZpu0%2FVJfexF0Gs7WhB%2Ba6bNFeiaErAUgPY%2FrMGMNvHHBuwM%2FFxS23r%2BczLX5hMQePLrmmucFYWPxXURAS5sVpqxa81ik6kQVXqYu19xhZgBFKqGHc4RVHmft8zQtKfod5dYJUGJPnOHIsF8%2BsCMBtBbzWI1dtnx7NwC8YXOJYX2t%2FjZHbhJSliMtPSQsYgUfv6XOz9r3I2y5KMFQcIKj&X-Amz-Signature=ebfefef9a3e821bef482b0f54522207ad6efe7b7c9ea3c5d7b9ac387f10ef74f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEICMQD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEe6CgMpOx3RrM2gMEYHQwmyi4GitYN5SySX0OxsSn8ZAiBiwes8w4DqHbqH0PiRZ5Xf%2BUAiHhtWjyu4CnaurCQoziqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejc%2FZwSh3tlWn%2BLTKtwD247nUakv43C30T4AhMghIQk32YDTXZNDsS%2BWB6r1wii3nnM2EelOdMZ2G1D9dSgUwn3W9LkmM0JBZEIha3Zmu0BFeaMbISc%2FEljicodfVbtbi1FxOs5cFlNfGHXJSQ56JSBIdniyhvczu6ZlOpnCk%2B4UN0zVZXMuOl5Qrdpi8VjzVvs5Ip1fISDhndCq8B8yEhoDzWfzAbq2jAMjtonzYt3M934JddU7SB%2BsmQqvIqLE8su9lPoLnIfWsx%2BRIW2A6oWkOosl64wdxr2HT3fr9YEsALO6ZPUbPG5eNxqS9sOPRaPReqoK9a38NK8JgLNa5E%2FOUg7oNBhgDTFN4yz8dWwN9aOn6t03VWZaEDRImrrfLWD9LUvoIiPa7JjKy4fko8IddLnxzwlJhplbv4%2BXSMRMqnBUD9AOW6UFTy7iCY75t4T24wm%2BrXCCUOd95oVLvdpOh0xR8BQTTg7p9OlxlDQ243taagml%2BNagVNFE4VRrmqmUUoij%2FzRMsR2o%2FzPSqXSRShZo%2Bzsr6r7fDqXoxp7MhnYAsx9XBZm%2BWtOUkBuPFHw0IuxUL3%2FjF1PKVn1flETtMnE3ukqSQpo2ANGQIQjcbIcessWRG5%2BugCGuNTlJtX1kkoTD7aNcUVswx5nhvQY6pgHJ0JRkhebE285B75vVF%2BwwjqOF%2BzOtgldSR5Yqf%2FDhmJlAV6FCAZaSRGgId6WHWGCYjFCC8HzKF8LDQ%2BVin6AFswf%2FlGZ7ASsEMpUkb6OPzGwZG7n9njRIJbQRKmSzYp7WCMkHTWQrBOGZoY64LFwXJf898XofTogYALQBvqpt0e%2BFddvAWlcrCfPnP7xN4rVc4G2s1Exx1nymyRdfvTjWq%2B9yyyZQ&X-Amz-Signature=6150667cccc4ad646334d67f2eb5c541259019d4699e7f538c260d56538b4041&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFFKNN5%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZBoZuAHiTF1F7GVRYzKPEyCZpEgd0Ib4uykb6rtBEgIgUuunSTcrlsTzmWEcX2iqlnwXaRA9YxWY7ycK3wrSMqAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFV3TVI%2Bn%2B9iMIxaPCrcA8IrAUSnu056S753NQL1HW7FmxOTmxs7HpBZDCYYW3exTGGQHwkMvykyn4IacflVTSWL3VcSMRddUTUr3XJuovemAD%2FLuYo253wO1rLJb1GW3Lb5T0brH2u%2BHC0O9DJcLvTcNyD5stPhKtD44bEGc8D3CjDoOZFezjtniposgyv3r5uCIaakpFfO7GAnVXyEHDC4bgFpXkqlpflmUvqtaiant15fNpIvmiwgSVydfjRjL46Qr5ho6%2BbT4RlXwSXFVdQnHmbUbpf4gZaZpY063CYceFUY%2FC9z0J4ULz8VLWbJqMi5Tya2Uh3Xm5FqNGo0%2FNIyqXEo4GlDZSg35yd7dnsMRuHczT6J%2BTuuVGUWahjqy4FpuSFsZQvDvCVCcQuD5M2gKdOjE0Ec2xw802E6hEx6M4vqZ4qgVRwBWOHdQMhy87vzPyfuJ0sotRunboJSrJsxtBWbGcNybDobyKzYm4tP4cUSztCKeE%2Bjpnd2%2Fk%2FQIun5bOLsmNWgFGIzcggUg%2BA3PG%2Fjw%2BaSsas3qG0AIVK5AME6wO0BIaMrC0ko8gyf0scUfR95lDvWN5tP6iYQrl3wk%2FfXc%2F0JDGRe54%2FD2yeH5Tj8RMeXXLIeMIsEqFOXb%2BaJTkD2jukbfnS1MMeZ4b0GOqUBi9qehZAssDnV79Z6zQyNVmyVzNoDPbfXVlFMfjnNnU1PZQLfqM5qglJChOpCawdF5bhI%2BR5wQUe5p9ht1Prgg2nTC7NzIClTT%2BNGOUpLdyN1VlseDEB3YKu%2FTGZnNkYcxGcjh19PJxnj1ROVFcw%2BIMZh8AZotUOlszSG44Zz3%2BS5bxOLAD8%2F6Xz7upHJzJyWyJZeF%2FNChMYaI75RslcRcDWGTDqB&X-Amz-Signature=672a623a2ecc20c78abb62df103695f51143f3fe075d287542e8165421df6388&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
