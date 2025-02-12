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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=481bf7f5b961d76a7343b42ee568506bd6ed3fb0cfabc305aa57c8cfab23b70d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=d1e99d1b2c434f00b106b8c9641a459f4c2f222caa644b20030ce3ad7df72cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665356SOBP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLkI7D%2F8JLrMHJDYHxqo3DWxhb00l4yZ2U4fqbePhVEwIgGLAKjDb6hxLu2ftaJUcj%2Bnlc3zfOI86GVwkqBCrnA%2BYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmTAoxyIbwUlTFpOircAznWrSPAnHBJZu2vRJEF8qLxVY9N655b1cu0kx1I9JW%2FIAOXrXzH7WgXbnQp5CvkQqAk%2FhffOTq6gZD3t4BS7hAayz2%2FLgpWAmwaOLV%2FKU%2FR%2BmvVn3l0SNgZBrrhVf9DZfP%2BTq0QDfG2ulcqXd4W5xbghaAufjHYo9rwSkrq5PeCbwi%2FL0Bqh5gH9nWwKMDdg2mjmUYyLMMEDO3XUCiJ3fyIhJRqLMZgkU0ojsJ3liUnu0IZt8G29DEtTQm5a22spZkAANeWBsi13Zu8LFhQyPEhxW7mbJOd4W0gxIZ8EWsu6W6C0Wr%2FrFUrMxkZLLaJlUCgPH6RixyxBWFOzSvRs9x2GX%2BDOTDnSfGOKWuHA2FGx8tI43243U1tAY0e3dwU5wTRLUV7VgsMl3MPL5VQ%2FKXNqilrYMDGvGVYQBkUb59Vpev9VAfcxYWoRclDZYuXBwCsg1gDFxBfWj14DfWrcHI9nMiGNMDktMytLRfPFEe%2BQ3qs0m3brl9xA3lhMZtIMAa8Sn7eSMMvb6zftL%2FcZIjOfDedZT8m1yMHHFyntNgJFI%2BGT2lzCPNCX4lMzoB5no9TpTUlhYsmFUuR1g7kwz%2Bo8UWku7IzApmY2KxEaeK6ozRl5KABNRZzTqBSMLnur70GOqUBcH8oBToUYkPYkveBSUwZlXf8UTF%2F5jMUvQaGWgUj%2F%2BMyX7LgnrCn8h%2FSE%2Bfqts0bPyfB0IcUSuEuv1XCFk%2FaNtOhnWLLua6S9nwyGsw01Ac4A7T5%2BNK4Wb2VvMEcfAGdAbhkYy%2BXmRzCMmrnZMe9zhapaHg0%2BH9ZrN4%2B7HzCNU9cW9cqO6QpBAR6YaUhDQlBMpSPYi0dJYOBpaehJhqklqrwWQ%2BJ&X-Amz-Signature=60c8e1cbe204c788477942a91f4e7b33fbd7c4da40977a0c24ad682b1922651a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZZTOZM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0jqDjzKwwA9bHmVUZYuReFrkZurPaqK0ENCTMQ5y0BAiBXRgWZEowAMOi1LIlltXBVlG3sAC8ks5MRoAN5zeRObyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVMPD3tMWsYPm2bcAKtwDcNaKOGG%2FbbxC3HpHEGJ89hWDBSMhub6ZCjCoqW6yyQL5rG59Smy9f0DrqFA50T9aCefO17T%2FN%2BOw23p5z4lpzVi8KDhUV3343p6YArYh4pxEzJZSIgceVUMMgdBjhGbWtQgg18Eudzr7P6zztwG%2By0cjfsJT558TqZUCawUCBBDMwI6exS1QF6xcWlAU2tkBmc02nPkbFkGqD4Z0vp38HMsLauvzHFVqUXELXAsSEJWYKKggTg5ywkKRVBqOBv61QFXwVMD%2BV6xrcy5MxFOZ2P%2Bgsd5NCNZs9o6fWEvQHWL39wJHjjnq%2FIikQypHV2SbOmZn%2BJ6J89bpf6EW7%2FcaCI9iDIebmkouuL29utTiFvs5j7ajLEGBAQLGV7pPJFFalIt8zT%2B772WWQsDuLso4Llm0K3chO%2Fwytu7KK4sZtT0p3Rx2AHTX91o611y%2BaC1Ch3B3PLIbUMHIH4o%2FkAT7gchv8HIfppuKaMM4CDIrBETlmsyZm74PcqO5nJ9U5i03INXBSAz6Eeyl40EH1hygon1vvsYe6GsYNoUB%2Fs%2Fwh4wVPXB6F1Xri8LBV6Ojd0FEno1IdOuzpxMFgtrc4r2UdI%2FBhBkJpYzDfDdgUI7eNm%2FJoZVFbHElEXhN89AwlOavvQY6pgETSQvMbR2sKAbYEaDTC1XraDNZ65Fv6yOpjcmswhq%2B2VeeGLQPvZZ0yk%2F9%2BIGHOovZKwmQKKyetvjz%2BZ7QHpcQTaCQHRNOgWZc7oOASAv68LYTFnSzn%2FWkx%2Fy%2BGxTynBEHfOuBWTPawONXrin%2FKeWX0PDbdoeaSoMf5tUvxJ0f4l7T1dAnP68CY0VdN7tYwsb8c0qJsffSjFTUpCDJ%2BjkuyCLf2hGV&X-Amz-Signature=892571e9c891f6b331bcf00779f96c2a2f883838a2297abe71774c87d565ed51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=d1e21defcb454dd85eae7f23f365178bcd5343823df093fa5f506d5ccd2b0a68&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
