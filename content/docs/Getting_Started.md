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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652HPLZHG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBErYp3JzwdlhF%2BUaBPIDU%2B7mhe3E5QC37LQGe8l%2FukXAiBXt50wgFc%2F7BrjvbzIy6GkYbj4yY5zk9EQEMG8ghQ9air%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMSwzAjtdpv1TPTLPzKtwDfnT%2F%2Bfm2%2FOR4FCun5TNQXdDlKdeqWQvfzCa6uZA0JRJactCG9W9Tk1i9jezId5wgeJTSV0W1%2F7t3vCAv6SIvL2VTAkbDK5N8c8YIP7X21fj9wG1NE6DVyymejobNcD0EQie2CGp%2Fz%2BGn%2FOdeDdAo%2FjPXQFqM6vj8Ce4TvJKMHSr55eV4uDBTQqhWyhNVC8MoGq3ZcB4XOldDOmTpo7ZI%2B%2Bw8gVuW%2Fs7YUD%2FJMaT%2BfqVj6dY6mqoKBRJNKx3elgaipibXCwj3vtwjSjBbWtu%2BS23OOgkz0ExaNJZNSoOztj7bMQSF31ZsZP9Q5baaOdtnXUWVgjC3Rz%2FPGNAJ0yHaZ6%2FuTtYhrG3JFZAoYwdBlZ3qskIzmBn2Moc8tPwLVD%2BKTA8pNFUlucujC6kR1ClptC4kaIfAxO5I7M7v9UbNNY8ihtKQhYoM6qgyv4ZMqvejBeu%2BD%2BDgqkYg2nkAqE9Kbn5kyC7%2BHkLpBk6r6xe85Fuq1gGiBfXkmF7ifjmBndiNxs1JT61mE%2FdIgfF%2BhL%2FhJLVPV2W1d4ZJanJRNuAiVX%2Bp5Hx%2BK3g0fzeKR2%2F0yI4PEiplCgmVdaqBufuLOv6Y5big75VqT230pjHn7rpZyGADZR%2B5MeEBVYXeT2ww4fH8vwY6pgFYPF09%2BBTKucUzNYLuWSkv0cGWFa4uvPDRd7h1qIOnTgC5G1r67xhvM5%2Fnv%2FaOJ9HG%2BQF9nfLDhNpOSVXsy%2FTp4mIMTv2%2BwfgeeyaLhonn%2BsE64DscMbrsYPOyypqbkucJ9SW%2BsMpwGjFz4j5dKn48Sm7KLtth9%2FhkccG0DBjmiD2Bz78RekqqgtGjDhT7g8ABZe349AycvB6RdY0W2OwiLSQUajjq&X-Amz-Signature=c25238522a74946cfda91fde065227410d5e316bb31f2d4864670ff6b10cf87b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652HPLZHG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBErYp3JzwdlhF%2BUaBPIDU%2B7mhe3E5QC37LQGe8l%2FukXAiBXt50wgFc%2F7BrjvbzIy6GkYbj4yY5zk9EQEMG8ghQ9air%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMSwzAjtdpv1TPTLPzKtwDfnT%2F%2Bfm2%2FOR4FCun5TNQXdDlKdeqWQvfzCa6uZA0JRJactCG9W9Tk1i9jezId5wgeJTSV0W1%2F7t3vCAv6SIvL2VTAkbDK5N8c8YIP7X21fj9wG1NE6DVyymejobNcD0EQie2CGp%2Fz%2BGn%2FOdeDdAo%2FjPXQFqM6vj8Ce4TvJKMHSr55eV4uDBTQqhWyhNVC8MoGq3ZcB4XOldDOmTpo7ZI%2B%2Bw8gVuW%2Fs7YUD%2FJMaT%2BfqVj6dY6mqoKBRJNKx3elgaipibXCwj3vtwjSjBbWtu%2BS23OOgkz0ExaNJZNSoOztj7bMQSF31ZsZP9Q5baaOdtnXUWVgjC3Rz%2FPGNAJ0yHaZ6%2FuTtYhrG3JFZAoYwdBlZ3qskIzmBn2Moc8tPwLVD%2BKTA8pNFUlucujC6kR1ClptC4kaIfAxO5I7M7v9UbNNY8ihtKQhYoM6qgyv4ZMqvejBeu%2BD%2BDgqkYg2nkAqE9Kbn5kyC7%2BHkLpBk6r6xe85Fuq1gGiBfXkmF7ifjmBndiNxs1JT61mE%2FdIgfF%2BhL%2FhJLVPV2W1d4ZJanJRNuAiVX%2Bp5Hx%2BK3g0fzeKR2%2F0yI4PEiplCgmVdaqBufuLOv6Y5big75VqT230pjHn7rpZyGADZR%2B5MeEBVYXeT2ww4fH8vwY6pgFYPF09%2BBTKucUzNYLuWSkv0cGWFa4uvPDRd7h1qIOnTgC5G1r67xhvM5%2Fnv%2FaOJ9HG%2BQF9nfLDhNpOSVXsy%2FTp4mIMTv2%2BwfgeeyaLhonn%2BsE64DscMbrsYPOyypqbkucJ9SW%2BsMpwGjFz4j5dKn48Sm7KLtth9%2FhkccG0DBjmiD2Bz78RekqqgtGjDhT7g8ABZe349AycvB6RdY0W2OwiLSQUajjq&X-Amz-Signature=adc41904947218182d6a4671c2b5ef688b1af56e0b2e605280a601598742cebb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLPHWQCU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvYMDU8%2BrPvjtPHLltU8zMyhT69PcGrf8PVl7MDImULAiEA2UwwF7fMufjLVqpNg4oblm0GbhJWsQWnBMe2VzMNXVAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGUATFyvt8JzoJGBUyrcAzk74cHl9g%2FRS%2FWlanRojJph8%2F%2F94G4WvbcsaY88KX7gVQSHtCl7gJWjwF38FK1i37wQUbBD%2FTs8S63D%2BHJy859rT6StI%2FMqNzXXtr8xIq4Hez7BtZr44wZ1UJrEQj8VvEEWGmgBVlXufuWi9S6CJZ6ZsVWyCw2ky30DylpgXdNKQTJ3yqYuUeqq94Z%2Bp0%2F%2B2grLJIMztAcwQuF9B43BFfPLENJ7mktOYzfQoD6BWrIAL5BuJYjZZBHhNs3q8%2F3Qh5JCrwFrFn1Wl%2Fy7Bmy3aMPRjstJk7nTBbB2pu3d1twy2lTyzui%2FGQOtbAp5CKKPptzIPxGT31BBL5dCdLH8uRt6Z7xSumKHzvx5vuSgVwVdw5ysEkljq%2BegDOIlNXf2%2F74Te6d6wwUwUdLm29P8TLKLVJonI25Y3%2BOPLQ6ArWMt9yB8nzpzXuvrzOlG4hrzSaI4SI7R2QwI6KPMIEEMbETDlVrsND6RPuCF%2BbYPaEEl0Y1xzoNquPnsh%2B3YQRZhOsxntX8sIW2f97pBRY6laUJZq62c6kwi0sjOn83LTQzKY5zoMFpRfPo0Vsr9GohgIRO8Zm8cm3FuP1TEnN0L%2FZ%2Bqp%2BlWP6wtH9SUl%2B5t8jVFqsOaSRckguX3qe7GMMrx%2FL8GOqUBNIbBLftB2kZY%2FvYcaVXkMqiph7IA6FTBzZcMOwi1CLfe26QikC%2F29lWG9S8FnSAaW3CPnvLFUpz0Ot3TEcy9VCshq53v9gYmgnfZz3ZYXeI1Ij0xWhDb6LY0np274NDEAJ3GTmmGSP1wiEfBlyXuOvBMWAPqzgUYIqT5e9qc0Q8wvYo4SvXNC6qNZOrHzfri%2FYd6f4CKoDn1cA88h2ZyOn%2FqjNGw&X-Amz-Signature=83cfbb837d8b4b005e16d8e00d6cb6f00a4ad4887cfaa4375fed1fbb1292cad8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDVY57K%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx3X1WXTH2Ugl4aWhZViS76Uw2mOIBpC6G2Q%2BqFvLosgIhALfu6hLX%2FYmFfc8P4cExZaxWriHqU7NWB2Pn8vszqiTpKv8DCD4QABoMNjM3NDIzMTgzODA1IgxoWttqFpD3fAPeKKwq3AP%2Fora%2BJ%2F2Ih%2Fi8FQRZdbkdUsstss1md%2BtABDo8fwH8ENohlVlLOtJ5AtglbfK3LUlu9NqjdT6UmfSLKtd36yOa7elGLBQxePIvP%2FyAg%2FddNL83ssotS7qZjv57qHS8uWOVjEVg5rYMjGo7cxvSkR1glbOGBE%2FtsDk7E8kBH4ewazrIoacuLsBI9d0b3tZwNxv8GGZ9BKBaq94KUgM5BvH%2Fp3LCBVWrHXCv1Dkif1MnLctlOIhzfd0SCkpphQiBlEwsEYXpPIuWJOW3hwViCIChg74tJsz6n8ubjcdu4mApLySQO%2Fg41JeSzbtbvVbkhOaiIVQhz6EK6RXF%2BYegOlvU7uUtyqNefFhl6bnhzlWKoANtL7fpwzO%2BvhEx53Y9c4KJLE8aiwdIgwbbf%2FC0Vwg0c6Qy9kkUaVRTOgkmCnjmr7ek80CAuqPy83xMdvnT33dmClFL7TdBQ7qp1SpApr2SL4w%2FvAnsmTaioDZdJOQplrj%2B4xksZKqEpdLfU8II8qIWjoKNR5X03LY0yW0iXV5N7TRsl84MZonVlI4B7%2BwN2jfOWoA%2Fa%2FL3%2FEU2rZY%2BJq2XuLTUshz60iPaV1snoTIn1XhpOZyxlteXJl58ODca68FZHObF1U6nOOnl8DDj8fy%2FBjqkAfSbBxTbUV8%2BpeUwzm2aZUIegSs9Ma9CXd2wDbDM7iQCU1219axg9%2Fqn8T%2FJIymxSDrC2QJ3U9jckwRY%2BPrS6vq5hv0i%2Fq9uppoOyFDN8RHapm80qt7su5tDkwDmkFXH267lPPmUcAxaL%2F15IGxHIM%2BTzjNQQbPDBbZIotKc0TEyytjGPi5tDG4fOmKHiE9oTsf8kftvKC5jG3zc97emBdd4t9gd&X-Amz-Signature=871abfa6171974631df2aafba582d3b6c548100d53a0255a59bfde126e2d9cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652HPLZHG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBErYp3JzwdlhF%2BUaBPIDU%2B7mhe3E5QC37LQGe8l%2FukXAiBXt50wgFc%2F7BrjvbzIy6GkYbj4yY5zk9EQEMG8ghQ9air%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMSwzAjtdpv1TPTLPzKtwDfnT%2F%2Bfm2%2FOR4FCun5TNQXdDlKdeqWQvfzCa6uZA0JRJactCG9W9Tk1i9jezId5wgeJTSV0W1%2F7t3vCAv6SIvL2VTAkbDK5N8c8YIP7X21fj9wG1NE6DVyymejobNcD0EQie2CGp%2Fz%2BGn%2FOdeDdAo%2FjPXQFqM6vj8Ce4TvJKMHSr55eV4uDBTQqhWyhNVC8MoGq3ZcB4XOldDOmTpo7ZI%2B%2Bw8gVuW%2Fs7YUD%2FJMaT%2BfqVj6dY6mqoKBRJNKx3elgaipibXCwj3vtwjSjBbWtu%2BS23OOgkz0ExaNJZNSoOztj7bMQSF31ZsZP9Q5baaOdtnXUWVgjC3Rz%2FPGNAJ0yHaZ6%2FuTtYhrG3JFZAoYwdBlZ3qskIzmBn2Moc8tPwLVD%2BKTA8pNFUlucujC6kR1ClptC4kaIfAxO5I7M7v9UbNNY8ihtKQhYoM6qgyv4ZMqvejBeu%2BD%2BDgqkYg2nkAqE9Kbn5kyC7%2BHkLpBk6r6xe85Fuq1gGiBfXkmF7ifjmBndiNxs1JT61mE%2FdIgfF%2BhL%2FhJLVPV2W1d4ZJanJRNuAiVX%2Bp5Hx%2BK3g0fzeKR2%2F0yI4PEiplCgmVdaqBufuLOv6Y5big75VqT230pjHn7rpZyGADZR%2B5MeEBVYXeT2ww4fH8vwY6pgFYPF09%2BBTKucUzNYLuWSkv0cGWFa4uvPDRd7h1qIOnTgC5G1r67xhvM5%2Fnv%2FaOJ9HG%2BQF9nfLDhNpOSVXsy%2FTp4mIMTv2%2BwfgeeyaLhonn%2BsE64DscMbrsYPOyypqbkucJ9SW%2BsMpwGjFz4j5dKn48Sm7KLtth9%2FhkccG0DBjmiD2Bz78RekqqgtGjDhT7g8ABZe349AycvB6RdY0W2OwiLSQUajjq&X-Amz-Signature=12e76a415cf6f7f0026d4136a191bc3816ff6830daa1de47d20297482d5a99b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
