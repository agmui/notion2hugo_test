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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SV6HQE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6Fa9xsVQdiAZaSsMfatRuv7W4gssIz6KCTHmxk5zO3AiAhWdXxt9XnA%2FesUBrsovobbEVdhybNqiGeMgFx3oXJjyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmL0VYB%2BOos4dp409KtwD5eCmNzND8ln7OxxWWmcTuqWvnZ1NYbAPrBzvz0l%2Fbl8U0gs1ZZAzKVRtLfu59wPnG9p67DD7CbvZAlprVbHgLvxhVyEDmb40sf2HD%2BfuLGTLISaIQVVRejcUeIFYCFdkJJAByihE7IAzqeWWeWoPqt%2BriaIfQxKXmR8mNUWmC8ccBj6YUlapgcbRCQOAtk%2B1Z%2BGzzDjSni7vBMIzzhiso44r%2F0tHhe42CnyL3f%2FgcYj8b5W4lL2dJkRq8YI3Uf4B3j%2FhVpwYv%2BRd6iyO0iUHSxpuKAAuoXm4wq2drT5sk35WTYZOul9qLbm4p2ktcoIog8TFwW1WRNMUoWbrKMwNhllUnXzamaf7KEpigkzvNHp5N%2FfeagBiDz6Kf94VEd8ort6PIPDaDPUZlF4JRUAVvzHNvZXner3tnRSET3XJw9QA9HnOO96cMIQrXEB1F3oC0nRAlxHKN%2BhGvREp%2Bqm9GgIsKQHpESh7UWYzx%2ButKxpPLevy5teYi7m6KOW1t2pA5xXWAEhaW1UAq%2FFV11FuDklatGDkSwGaOPw1W%2F27LsZcs3r%2B3ugRkoKEjdJUqeFx9wJ20zuNkEGOKJ8a9wFz5JuBnzvdmBgIsavHVRugZ825e1EAMtGPUp3zCY8w4pzKwwY6pgH2UjVRS5NForh3gWZjjWKtdwOVZH0PbYY8aTudwLZfTgmS6Amrw2JfdEcHXPTg%2BMB%2BMTVlhfRlQr2Y3WEjIxUroAj%2FjYXsu4rjemwYWavUyrlqXVPQo5Qkf9nO78GkQzkeBADhlO1oYfbyLHgjGxl%2FWTjRwX6nG%2Bbsu%2B%2FG3Ps%2BsGGwzNI%2F%2BlIoovxE5nBTAKxMoM5H8Re8Ngf2dLj9KpswV8llWQMa&X-Amz-Signature=728675e39639f50b48144b6497264255887aa54f028953c2b665b963408769a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SV6HQE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6Fa9xsVQdiAZaSsMfatRuv7W4gssIz6KCTHmxk5zO3AiAhWdXxt9XnA%2FesUBrsovobbEVdhybNqiGeMgFx3oXJjyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmL0VYB%2BOos4dp409KtwD5eCmNzND8ln7OxxWWmcTuqWvnZ1NYbAPrBzvz0l%2Fbl8U0gs1ZZAzKVRtLfu59wPnG9p67DD7CbvZAlprVbHgLvxhVyEDmb40sf2HD%2BfuLGTLISaIQVVRejcUeIFYCFdkJJAByihE7IAzqeWWeWoPqt%2BriaIfQxKXmR8mNUWmC8ccBj6YUlapgcbRCQOAtk%2B1Z%2BGzzDjSni7vBMIzzhiso44r%2F0tHhe42CnyL3f%2FgcYj8b5W4lL2dJkRq8YI3Uf4B3j%2FhVpwYv%2BRd6iyO0iUHSxpuKAAuoXm4wq2drT5sk35WTYZOul9qLbm4p2ktcoIog8TFwW1WRNMUoWbrKMwNhllUnXzamaf7KEpigkzvNHp5N%2FfeagBiDz6Kf94VEd8ort6PIPDaDPUZlF4JRUAVvzHNvZXner3tnRSET3XJw9QA9HnOO96cMIQrXEB1F3oC0nRAlxHKN%2BhGvREp%2Bqm9GgIsKQHpESh7UWYzx%2ButKxpPLevy5teYi7m6KOW1t2pA5xXWAEhaW1UAq%2FFV11FuDklatGDkSwGaOPw1W%2F27LsZcs3r%2B3ugRkoKEjdJUqeFx9wJ20zuNkEGOKJ8a9wFz5JuBnzvdmBgIsavHVRugZ825e1EAMtGPUp3zCY8w4pzKwwY6pgH2UjVRS5NForh3gWZjjWKtdwOVZH0PbYY8aTudwLZfTgmS6Amrw2JfdEcHXPTg%2BMB%2BMTVlhfRlQr2Y3WEjIxUroAj%2FjYXsu4rjemwYWavUyrlqXVPQo5Qkf9nO78GkQzkeBADhlO1oYfbyLHgjGxl%2FWTjRwX6nG%2Bbsu%2B%2FG3Ps%2BsGGwzNI%2F%2BlIoovxE5nBTAKxMoM5H8Re8Ngf2dLj9KpswV8llWQMa&X-Amz-Signature=da28570e1d2c9ba0cacedbca45153a486b009dbd209a4c3ba8586a8c01cf8304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SV6HQE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6Fa9xsVQdiAZaSsMfatRuv7W4gssIz6KCTHmxk5zO3AiAhWdXxt9XnA%2FesUBrsovobbEVdhybNqiGeMgFx3oXJjyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmL0VYB%2BOos4dp409KtwD5eCmNzND8ln7OxxWWmcTuqWvnZ1NYbAPrBzvz0l%2Fbl8U0gs1ZZAzKVRtLfu59wPnG9p67DD7CbvZAlprVbHgLvxhVyEDmb40sf2HD%2BfuLGTLISaIQVVRejcUeIFYCFdkJJAByihE7IAzqeWWeWoPqt%2BriaIfQxKXmR8mNUWmC8ccBj6YUlapgcbRCQOAtk%2B1Z%2BGzzDjSni7vBMIzzhiso44r%2F0tHhe42CnyL3f%2FgcYj8b5W4lL2dJkRq8YI3Uf4B3j%2FhVpwYv%2BRd6iyO0iUHSxpuKAAuoXm4wq2drT5sk35WTYZOul9qLbm4p2ktcoIog8TFwW1WRNMUoWbrKMwNhllUnXzamaf7KEpigkzvNHp5N%2FfeagBiDz6Kf94VEd8ort6PIPDaDPUZlF4JRUAVvzHNvZXner3tnRSET3XJw9QA9HnOO96cMIQrXEB1F3oC0nRAlxHKN%2BhGvREp%2Bqm9GgIsKQHpESh7UWYzx%2ButKxpPLevy5teYi7m6KOW1t2pA5xXWAEhaW1UAq%2FFV11FuDklatGDkSwGaOPw1W%2F27LsZcs3r%2B3ugRkoKEjdJUqeFx9wJ20zuNkEGOKJ8a9wFz5JuBnzvdmBgIsavHVRugZ825e1EAMtGPUp3zCY8w4pzKwwY6pgH2UjVRS5NForh3gWZjjWKtdwOVZH0PbYY8aTudwLZfTgmS6Amrw2JfdEcHXPTg%2BMB%2BMTVlhfRlQr2Y3WEjIxUroAj%2FjYXsu4rjemwYWavUyrlqXVPQo5Qkf9nO78GkQzkeBADhlO1oYfbyLHgjGxl%2FWTjRwX6nG%2Bbsu%2B%2FG3Ps%2BsGGwzNI%2F%2BlIoovxE5nBTAKxMoM5H8Re8Ngf2dLj9KpswV8llWQMa&X-Amz-Signature=78b9e7260a5eaf19e4a29fc9432258b60db113578c79768e3de776fdbe7b53b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6BND2L%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZ8FHKpZXiXpl3uRcNbfL9q%2Btszrej9nrydnHG5DBnCAiEA8TAsrPqnUnguuJuGZcp9CwvcZFDxGuEsXJpMof76rlYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyPqfCfVyds1D5EsircA6oHJWQMoOkCfhIOtdbuMaBPav7H82hi13VQcE2B56xcpJIQ7SApCs4O7AQssFhhHrlcwKeVCTFriATvZeMqYBKshnptS8jAEajVfzQtNYaqSKudUCX1iehkopuxCpMs1xJ22THw2232YKGTQyZFMUL0F0rFaAEgzZj67tb3IY17%2Fw1gLhbe8e3%2F4soJ45xkf849m5zQeNoZxbnqTRvQO3aOBEYB57gtgq3OUZ0KNbwyRTS3FBxiP8g7TRrvVygN%2B0z%2Fm%2BUbHYqPUfFhRhhH3z9cFIeIsHARg%2FxJcDNzGZhrVjuBRKQ7%2BSJBa1YT64mgnUIXVKbFyOA5IIX51uaqXKPiIuzIhhRI525lu9DYv9QFArcg2IZXG00I7UV2Jmi0ynJ%2Fy34XgUxkgoHcuK41pj2UdMYXdDpa0Gtz7VePtWK%2BrzzNj7w1p0o94HKyvL0HYniKfLQPBpCF1b72Ts4HftZG2Gi%2FZfshXTpBRonM0el%2FM4Nc3WeLmdQmUva2WqZ0V4%2BOz12UnR11XTX%2F5%2BJJRBHvaEfvx3fFsZbpgFdOgl%2FPNUrB%2BqRHP0wYyFECetm7ZF9QykXTa6FmnlNeG9K0MePY49QAPiugdLRrUaG%2FLUE1pyecrF3hbpLVVpQwMNmeysMGOqUBJ4mUoR2GglK4oUpe887L7McvxfMSYlJCmaiN7X4xOsK8CwuQwzhl5Zta6wmBorsoBPmzmfCcFtA%2ByTN%2FLIBor2u7Fk5mTO4N0nueHliA%2BFeil5BrJE4cLDDF1vQrBYMTcPL8F63zEmRrBPKQIeeCgXz%2FwBEDohJclBwHR0cRf1OAcGLXWoPwkkiT41qXkBYbZdGYSArFiODcVHXSg0lLCLgOwmP4&X-Amz-Signature=4c25c8b6e550eec8a8c3ff2504c9ba1fb285133dbcc90bf75b80f7885d492a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA24QNPW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQJJAO5UojMoHaR032cdr%2BoSvuRJ%2BUtaQYMnbqDx%2FJGQIgBov9oH8hzsLAE%2FYgx2FNpTsr%2BpMqTP4V8rLiolkjFxsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO23DbDrVVkjDPLr3CrcA2vnCbbjLLnxTZMIm%2BXlVdEhRCvpZOiPYS4fWx4Rq%2BUROc7nUKitSag7ra0IJKNefdRrD5ii40%2B%2BJaH5S3SJRDnh7qQ%2F%2FfgD4MROCpsW3Zxr7%2BoOPJC21VKbTS9EtWUTAvU0mSZIVh6b%2FOtrxUCl972rDGRD2dyZ6qI15hpTwnGsAdz6J%2Bu7YLguaPJ4bNvlWktyUk%2Fg7L%2F34gSqXxrknue6p62Gie1xq3nxLyd%2FOpVKEMcYY6SOnx7iE5Jo9IxLTy4q2kTjKUMgMUwgETRZ1v9yGMjFnzaxmAZPOg%2BpbLewuD4p43rSWKr1xQAGeN9uZguZYWYXUqLRQztFPcvc%2FlePVzJTKOYGQUsQOKqH9JVkni92KcOo7%2BZy1lCt9tUcy5gYP1A1E4z9iGJYx2WlRJps2eGdhQpo3opK7mV%2BFHVAuXF6xTAE%2BC6Ga%2BSmAln%2F1qtnBDEIZGR3J3fBKulsj89ELZ8jtxb%2F1g1m6J0UIpxXUAMyOkO0hEUMgcTa6H0qiAerTsAdtsq0nSyCQPtdzbeROxA56F5wZwZ%2BfbgEt9xDqKClxUJqrRC33K%2FyF9pcI8Xa5iTYPR62TYlMXE30%2FWU10NnPa73skZD%2F5hwMJNT8JXyc1SFi4sDGfXbRML6WysMGOqUBU7KOQR34SCX2%2BiBdetVm4yIOefgA97kx5r6a72YYekPxyvFuXJSvSc%2BH9Pl89Q27ECqsHRfFWqbxnEo%2F9Yn%2F%2B6gl9H7KYuQXp77i2zEpA2AkSkG5RG3ZZYT2KhTOhn6M2tR1P7z6pMI4sisR8kCibxlYfOOClYy1mPRRMmzWMqcaJoTe3Dv9j5h0Jf2JZlPA4gLe7ntodR4H7KqPYGmBenzxNDRa&X-Amz-Signature=dd7c5914c4d67c1629a29cb1176c2d921d5aee2d8e47845e90c4827fa5117180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SV6HQE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6Fa9xsVQdiAZaSsMfatRuv7W4gssIz6KCTHmxk5zO3AiAhWdXxt9XnA%2FesUBrsovobbEVdhybNqiGeMgFx3oXJjyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmL0VYB%2BOos4dp409KtwD5eCmNzND8ln7OxxWWmcTuqWvnZ1NYbAPrBzvz0l%2Fbl8U0gs1ZZAzKVRtLfu59wPnG9p67DD7CbvZAlprVbHgLvxhVyEDmb40sf2HD%2BfuLGTLISaIQVVRejcUeIFYCFdkJJAByihE7IAzqeWWeWoPqt%2BriaIfQxKXmR8mNUWmC8ccBj6YUlapgcbRCQOAtk%2B1Z%2BGzzDjSni7vBMIzzhiso44r%2F0tHhe42CnyL3f%2FgcYj8b5W4lL2dJkRq8YI3Uf4B3j%2FhVpwYv%2BRd6iyO0iUHSxpuKAAuoXm4wq2drT5sk35WTYZOul9qLbm4p2ktcoIog8TFwW1WRNMUoWbrKMwNhllUnXzamaf7KEpigkzvNHp5N%2FfeagBiDz6Kf94VEd8ort6PIPDaDPUZlF4JRUAVvzHNvZXner3tnRSET3XJw9QA9HnOO96cMIQrXEB1F3oC0nRAlxHKN%2BhGvREp%2Bqm9GgIsKQHpESh7UWYzx%2ButKxpPLevy5teYi7m6KOW1t2pA5xXWAEhaW1UAq%2FFV11FuDklatGDkSwGaOPw1W%2F27LsZcs3r%2B3ugRkoKEjdJUqeFx9wJ20zuNkEGOKJ8a9wFz5JuBnzvdmBgIsavHVRugZ825e1EAMtGPUp3zCY8w4pzKwwY6pgH2UjVRS5NForh3gWZjjWKtdwOVZH0PbYY8aTudwLZfTgmS6Amrw2JfdEcHXPTg%2BMB%2BMTVlhfRlQr2Y3WEjIxUroAj%2FjYXsu4rjemwYWavUyrlqXVPQo5Qkf9nO78GkQzkeBADhlO1oYfbyLHgjGxl%2FWTjRwX6nG%2Bbsu%2B%2FG3Ps%2BsGGwzNI%2F%2BlIoovxE5nBTAKxMoM5H8Re8Ngf2dLj9KpswV8llWQMa&X-Amz-Signature=0b808f31bcf88daf1213a201abc8c418d0a8d9c09fb471b433a2464d952c5028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
