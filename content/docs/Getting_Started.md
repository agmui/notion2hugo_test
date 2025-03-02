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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLERZ4Z%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC%2F2wYa7VVAXUDnOqb%2B7%2BU4G7KEMWwiifGHab2o8TiU6AIhAKcMcJFeIG4vTl4zDDpISdVkpFyE8JL%2BX44jmj3PQlpXKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4EvxU7qRUoS85KqMq3AOPiROFA21CLGXgeQFkQwkxW4vYw031Q9HG92nam92zlIkvbWa0YOyxreF0VJZHzZkmZR3g061i7egsLPU3u%2BBAx33boJspjYRGLOz%2B97SSnl%2F%2FN5LXDEfN%2BzGIqMRb5YO716EtDo74myUeZpTh2D89HfoW6sRAASPPovUfw%2B1KR2n7D%2BJfdk9cR8aJUjxcDa1KdKPLOuwTj4UPWthbkmtSA4uogYSiGrC3ZEPwAj1p%2BclAx8cDU%2BvJyn85MrI5pU7SZUfulBIpxStYE%2BuyYU9XfZ6sdvJrNM9qGqvs%2FR%2BPbVF5zDfh2OMADTGAUs8iVgVmrJZi6qbe%2FGYsx1KpoEmbZj2feL0zjG5AIgfx7P6aOCVfepNnwZwU%2FbXoHvznUDkH6FDLkHvArT0cbRMMwSrXyBPtt%2FE04VTddnU3G1wF1xK1bbS3mUSlP7CX0K1II0CCkVlY55BwkGPuCo3oDMH8b3ti%2FVEJYSGBuSqZr4DdpwePPZIaAw7KDhLOCWOCFhbqk4LluOLyPe4RMSEWloP43xuCyuXuMX860d56jIGSRBz8xMPhQ1cfSkqepnQXCECpLLUCAGBpSNcdIndqDcxZO0PBUuogV4GTbu5DNaMsv8e0ZKa9ngQSjymAwDDj9o6%2BBjqkARvCcS%2BC9E8fWxoWHOQD51lCdELQ%2BrLftfHq%2BjXxrURtIJQ6O0o13nWLudgCvSl88ADut84ED0NJbXVR7oUV0ZZVvA4%2B2YyYjifllEyQSgdH5LrwzeQIFICfRQ%2B6h75Fo8rhv07C3VfGfCc3zleVxMAJCIgXjKZuv8xcQ0M%2FcZJO6onT8XHOBkVGnAd5I4TaHVNCbjm1euFdOwJuYA3527yRNXq7&X-Amz-Signature=501bf7b862075ff2e60d56d1501ada9d573889ffd46095bc8c094c559f0d8e56&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLERZ4Z%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC%2F2wYa7VVAXUDnOqb%2B7%2BU4G7KEMWwiifGHab2o8TiU6AIhAKcMcJFeIG4vTl4zDDpISdVkpFyE8JL%2BX44jmj3PQlpXKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4EvxU7qRUoS85KqMq3AOPiROFA21CLGXgeQFkQwkxW4vYw031Q9HG92nam92zlIkvbWa0YOyxreF0VJZHzZkmZR3g061i7egsLPU3u%2BBAx33boJspjYRGLOz%2B97SSnl%2F%2FN5LXDEfN%2BzGIqMRb5YO716EtDo74myUeZpTh2D89HfoW6sRAASPPovUfw%2B1KR2n7D%2BJfdk9cR8aJUjxcDa1KdKPLOuwTj4UPWthbkmtSA4uogYSiGrC3ZEPwAj1p%2BclAx8cDU%2BvJyn85MrI5pU7SZUfulBIpxStYE%2BuyYU9XfZ6sdvJrNM9qGqvs%2FR%2BPbVF5zDfh2OMADTGAUs8iVgVmrJZi6qbe%2FGYsx1KpoEmbZj2feL0zjG5AIgfx7P6aOCVfepNnwZwU%2FbXoHvznUDkH6FDLkHvArT0cbRMMwSrXyBPtt%2FE04VTddnU3G1wF1xK1bbS3mUSlP7CX0K1II0CCkVlY55BwkGPuCo3oDMH8b3ti%2FVEJYSGBuSqZr4DdpwePPZIaAw7KDhLOCWOCFhbqk4LluOLyPe4RMSEWloP43xuCyuXuMX860d56jIGSRBz8xMPhQ1cfSkqepnQXCECpLLUCAGBpSNcdIndqDcxZO0PBUuogV4GTbu5DNaMsv8e0ZKa9ngQSjymAwDDj9o6%2BBjqkARvCcS%2BC9E8fWxoWHOQD51lCdELQ%2BrLftfHq%2BjXxrURtIJQ6O0o13nWLudgCvSl88ADut84ED0NJbXVR7oUV0ZZVvA4%2B2YyYjifllEyQSgdH5LrwzeQIFICfRQ%2B6h75Fo8rhv07C3VfGfCc3zleVxMAJCIgXjKZuv8xcQ0M%2FcZJO6onT8XHOBkVGnAd5I4TaHVNCbjm1euFdOwJuYA3527yRNXq7&X-Amz-Signature=ef0e405107ec96ce3775fc9e0ccda1e9861ed67b44950363472f2475534f7d29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLERZ4Z%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC%2F2wYa7VVAXUDnOqb%2B7%2BU4G7KEMWwiifGHab2o8TiU6AIhAKcMcJFeIG4vTl4zDDpISdVkpFyE8JL%2BX44jmj3PQlpXKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4EvxU7qRUoS85KqMq3AOPiROFA21CLGXgeQFkQwkxW4vYw031Q9HG92nam92zlIkvbWa0YOyxreF0VJZHzZkmZR3g061i7egsLPU3u%2BBAx33boJspjYRGLOz%2B97SSnl%2F%2FN5LXDEfN%2BzGIqMRb5YO716EtDo74myUeZpTh2D89HfoW6sRAASPPovUfw%2B1KR2n7D%2BJfdk9cR8aJUjxcDa1KdKPLOuwTj4UPWthbkmtSA4uogYSiGrC3ZEPwAj1p%2BclAx8cDU%2BvJyn85MrI5pU7SZUfulBIpxStYE%2BuyYU9XfZ6sdvJrNM9qGqvs%2FR%2BPbVF5zDfh2OMADTGAUs8iVgVmrJZi6qbe%2FGYsx1KpoEmbZj2feL0zjG5AIgfx7P6aOCVfepNnwZwU%2FbXoHvznUDkH6FDLkHvArT0cbRMMwSrXyBPtt%2FE04VTddnU3G1wF1xK1bbS3mUSlP7CX0K1II0CCkVlY55BwkGPuCo3oDMH8b3ti%2FVEJYSGBuSqZr4DdpwePPZIaAw7KDhLOCWOCFhbqk4LluOLyPe4RMSEWloP43xuCyuXuMX860d56jIGSRBz8xMPhQ1cfSkqepnQXCECpLLUCAGBpSNcdIndqDcxZO0PBUuogV4GTbu5DNaMsv8e0ZKa9ngQSjymAwDDj9o6%2BBjqkARvCcS%2BC9E8fWxoWHOQD51lCdELQ%2BrLftfHq%2BjXxrURtIJQ6O0o13nWLudgCvSl88ADut84ED0NJbXVR7oUV0ZZVvA4%2B2YyYjifllEyQSgdH5LrwzeQIFICfRQ%2B6h75Fo8rhv07C3VfGfCc3zleVxMAJCIgXjKZuv8xcQ0M%2FcZJO6onT8XHOBkVGnAd5I4TaHVNCbjm1euFdOwJuYA3527yRNXq7&X-Amz-Signature=78282afe07348693c47ee5bfac17db54ce32d68656b1b1a30ddb33d1a171ce82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7R54AU6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC8U34vEMPXhUg3NAq760Vobsk8LZ0MPz9Dq1WfJMnadQIgSct1egfGX3nfiJ295XS%2FH7EzCHAM2B6p8Qjn4nStTx8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi1GnQ5Nq04tEoFQircA70IxRorif0pcKaA5m8MTHsx5lN9uawKmU1IYHTZbRKXGKwENDkPqqtX9ggbzyjUqwBovocExP%2BPxBSgaMj993rpazXJdnVkVXw7GWomOwctm6S9nmjw8s%2BBm3TAruw2NZY5tLG6P4kz9%2FTrMWQ%2FqL4kzwuhOLc%2BEXnLU9GmTTdZU95vrNumWH3lnLIn%2BZ36G688Tk4lxTFEEvj7pV6qNsiqAzgWDb2otYBukN9%2FM7rKohSXhIjha6blNITCNXf7lcE%2BufX6v8FBzAzn7ZhF6yZ6M%2BFPTPEAa41rKesnx1q1GJdJciFoe5XPmFGtybD2suGmYKev2cpOI7LcxozpXt54wC3CLuvYnbvGe%2B7F%2FoGsixvNpvO4N74pq0T6lRNsCD1942XgSO3soyc2nMnWA5H6vx%2FbdG%2Fm8E1cY2p6FGElDqWaE6NuSCoFUOUThUw0fGkwLxPPYKRWoJ8Zyuje1cKiB63ycghP3BZ8OtpDCDXIlONFRtVYXIg1N2ahkyqHzQ4HLpymEMuuE61sax2Xx3QNsEU49DxB9dNIw8Dqm6ebuK6MnR%2F2gAK%2BFw3%2FAP5peNOShB34FTBQsxwwYxKdViHmxgjVsbFrYoRKclaH9VBqmNqvVcIEZ3mWT377MKX2jr4GOqUBjr0xCl3MGeX5ZmGOx%2FJnvDggF95Hg%2FHko%2BZ3QcW18CAZNj33N9iTceg5B7o8liXJplFGgZr0xUN6nhMsV%2FSvrKANQhprHFJOJ8GmJRytSDrIsltDWr8w1AhYpO78KSz4yi2YRAz6hYk76xpU3Gsv%2BWUhCo3hbTM6uGY6QSUjeXEgN5ONUi2SVvWskeaAl%2FwB6vU4JmHJrVtiLHJeTC5KAJ6TkCD9&X-Amz-Signature=f2e25cc3db130823cd6df6e51c62dac7068ac90e9360751fc229b021338e2d12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLERZ4Z%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC%2F2wYa7VVAXUDnOqb%2B7%2BU4G7KEMWwiifGHab2o8TiU6AIhAKcMcJFeIG4vTl4zDDpISdVkpFyE8JL%2BX44jmj3PQlpXKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4EvxU7qRUoS85KqMq3AOPiROFA21CLGXgeQFkQwkxW4vYw031Q9HG92nam92zlIkvbWa0YOyxreF0VJZHzZkmZR3g061i7egsLPU3u%2BBAx33boJspjYRGLOz%2B97SSnl%2F%2FN5LXDEfN%2BzGIqMRb5YO716EtDo74myUeZpTh2D89HfoW6sRAASPPovUfw%2B1KR2n7D%2BJfdk9cR8aJUjxcDa1KdKPLOuwTj4UPWthbkmtSA4uogYSiGrC3ZEPwAj1p%2BclAx8cDU%2BvJyn85MrI5pU7SZUfulBIpxStYE%2BuyYU9XfZ6sdvJrNM9qGqvs%2FR%2BPbVF5zDfh2OMADTGAUs8iVgVmrJZi6qbe%2FGYsx1KpoEmbZj2feL0zjG5AIgfx7P6aOCVfepNnwZwU%2FbXoHvznUDkH6FDLkHvArT0cbRMMwSrXyBPtt%2FE04VTddnU3G1wF1xK1bbS3mUSlP7CX0K1II0CCkVlY55BwkGPuCo3oDMH8b3ti%2FVEJYSGBuSqZr4DdpwePPZIaAw7KDhLOCWOCFhbqk4LluOLyPe4RMSEWloP43xuCyuXuMX860d56jIGSRBz8xMPhQ1cfSkqepnQXCECpLLUCAGBpSNcdIndqDcxZO0PBUuogV4GTbu5DNaMsv8e0ZKa9ngQSjymAwDDj9o6%2BBjqkARvCcS%2BC9E8fWxoWHOQD51lCdELQ%2BrLftfHq%2BjXxrURtIJQ6O0o13nWLudgCvSl88ADut84ED0NJbXVR7oUV0ZZVvA4%2B2YyYjifllEyQSgdH5LrwzeQIFICfRQ%2B6h75Fo8rhv07C3VfGfCc3zleVxMAJCIgXjKZuv8xcQ0M%2FcZJO6onT8XHOBkVGnAd5I4TaHVNCbjm1euFdOwJuYA3527yRNXq7&X-Amz-Signature=16bae1925cc060a86c20c0f489df1f58d5742ae9f2d9eadb2833bb8287791f86&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
