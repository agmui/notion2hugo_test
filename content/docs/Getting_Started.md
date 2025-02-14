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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3L5PKW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFaJRMih9Zdo%2BiwlNqJu6a444y%2FLEiZS%2BnW8KKgnhHJoAiEAyhrka6OpiG34BMJ2fgl7MDv4CjpI%2BRug31FWSJVwes0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDChWylkMA2S%2FrJxyDSrcA2iu2ybaqrjrymacnWOJ70mInnwc0taWoWpdDSTiCGd%2FgJrs3GOm9M9a1kpOkPvORboKU85FrXZK5p%2BP5laMvncaVyVspSVtppF%2FnQ8an%2BvHgzwGXn74iwwXJd9Qvh4ODoEICWJzG%2FP%2Bl6OxVqKV6NQ4HCX%2BTeC0QB1%2Fb0nfpVJLT2yw1YpaESpMJzmjTZ7oUxLyvCN2voLQx9Ok7OJkd2tknErUPNnDFyanOBj45J8t6fJR2XGHesD9tq6xpAG0RUUG0u%2FuaPFgrJQANSi5vtuW2%2BfMOIvLO0Umqs0e3H%2F1ZVYmwOcaLhKWSj0qLS3OA8Ez1lkbjJq5PS%2FWmPxkwml7qXIFWPfc26YE0LLihwiG5alR8UM6q1FR9F8QId9j8RQ2jZfG75VM6nfqytJh%2B8Sgr0NLy7Gd7K%2FBt%2BlrFDItxRzk8%2Fjql2Y36nN9ueNG24nIuFjuEFDoaDcATA7J5169Ue5rKPyMLmaGSIch72wxhFKKu18%2Bl5eyPR4ptUOZVbNZOL7XsNVl24GYBD8zm5qqzZD8q0hFVo5VNSdPq%2B5k%2FjccRZFrfnY69SsdQ55HQ%2BLzd0p3ZUvdYHdTVwlCM236bhAD8lC0A0S90LT24mOrldoEaAxa%2Fcnq6QMbMOzqvL0GOqUBDb8oH1BIW0fvZ8sKyNKRB1yCBRM4wiAiOT6WW%2Ba%2BAFppgFq0padKtj7%2Fjp%2BzG6XLHEzKoSZS3broj%2F%2BU7ej7KT5xMvrfwbGgc%2BoSGS2ugSCYM%2FtkerzVRymggPqiO43NjySmt35m9nKWqiWuzRq%2Bpt8K99YopmC1%2FfEvpWq9xofKZHcoA4C0JiBIpMVW9Sg9m9mhK8N7Wm4SziFGcq9RZ9Ul1t4B&X-Amz-Signature=6017d392a2372b98fdfc1a4ebd8de6555ce3974dbdafbcb47317f6909ccd1f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3L5PKW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFaJRMih9Zdo%2BiwlNqJu6a444y%2FLEiZS%2BnW8KKgnhHJoAiEAyhrka6OpiG34BMJ2fgl7MDv4CjpI%2BRug31FWSJVwes0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDChWylkMA2S%2FrJxyDSrcA2iu2ybaqrjrymacnWOJ70mInnwc0taWoWpdDSTiCGd%2FgJrs3GOm9M9a1kpOkPvORboKU85FrXZK5p%2BP5laMvncaVyVspSVtppF%2FnQ8an%2BvHgzwGXn74iwwXJd9Qvh4ODoEICWJzG%2FP%2Bl6OxVqKV6NQ4HCX%2BTeC0QB1%2Fb0nfpVJLT2yw1YpaESpMJzmjTZ7oUxLyvCN2voLQx9Ok7OJkd2tknErUPNnDFyanOBj45J8t6fJR2XGHesD9tq6xpAG0RUUG0u%2FuaPFgrJQANSi5vtuW2%2BfMOIvLO0Umqs0e3H%2F1ZVYmwOcaLhKWSj0qLS3OA8Ez1lkbjJq5PS%2FWmPxkwml7qXIFWPfc26YE0LLihwiG5alR8UM6q1FR9F8QId9j8RQ2jZfG75VM6nfqytJh%2B8Sgr0NLy7Gd7K%2FBt%2BlrFDItxRzk8%2Fjql2Y36nN9ueNG24nIuFjuEFDoaDcATA7J5169Ue5rKPyMLmaGSIch72wxhFKKu18%2Bl5eyPR4ptUOZVbNZOL7XsNVl24GYBD8zm5qqzZD8q0hFVo5VNSdPq%2B5k%2FjccRZFrfnY69SsdQ55HQ%2BLzd0p3ZUvdYHdTVwlCM236bhAD8lC0A0S90LT24mOrldoEaAxa%2Fcnq6QMbMOzqvL0GOqUBDb8oH1BIW0fvZ8sKyNKRB1yCBRM4wiAiOT6WW%2Ba%2BAFppgFq0padKtj7%2Fjp%2BzG6XLHEzKoSZS3broj%2F%2BU7ej7KT5xMvrfwbGgc%2BoSGS2ugSCYM%2FtkerzVRymggPqiO43NjySmt35m9nKWqiWuzRq%2Bpt8K99YopmC1%2FfEvpWq9xofKZHcoA4C0JiBIpMVW9Sg9m9mhK8N7Wm4SziFGcq9RZ9Ul1t4B&X-Amz-Signature=d69e3ccc6874089839c2c84b3784e8fb6a57c91e52d91a6a76a4439360c06379&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFZIZN35%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDM%2F1qM3%2Bwp7nhGObZBqdJE%2BnSfTtA4emsbVWNd8AFKqQIhAJnSUiQkBLJkvgP96PTQi5qzx4E2KhZVESgg3E4Twx0EKv8DCC4QABoMNjM3NDIzMTgzODA1IgwgHqVGjQlAZnzRRRIq3AMavfIaIwqljgzqvRA2uCTx45Vwl%2B4f05giimZbjhCJUhnVyllQS6yQ4lIxYmipp1O60fAyrqxbWheKOvK3et1imq1yKtLxwwHnD0l%2BnHLWgmmjRR2u4BNbu2Qq1%2B6ypenq0G74pTpsjIZe%2FWVCMDSh3YW2RTyv6JRG6gyzOX%2FuZP8iR1GW%2FxSZpEHsy7pHfOSD5NnTD1vj4xWoeEp%2FeW%2Bgax0vQ%2F%2Bq615gB4e8KeM9PNJiYoRZHNm8W0dsy2YVKsYxJT7kLlCA%2BzMsLNWnKTJ0qgyHlSfqBXzwhVCaXQJg3t9VELaP3pKhLINufOTfeCk2daJ0%2BwNmO1LTOonmFwJKOx9lB%2FQ0cKqQd8O%2BsnTc3eKjoylbd%2BP1w1WAHdTvfxxHCR0uT0nT1oScKUxicu%2BOFkHuYE1hMLtvEhmptcR84n5uy0Az180c7bwHYivv%2BFZOCu6s5zLP3th4FfLCu6F33dWdg2iOQhsWRB2zlBO%2F8v%2BZLA15xuT8pSD4kiAvfXj9EbeSKPUp19FRY%2BrrVQPBh7IW8IXlbIKJyKSq12LnFr7tGY%2Beu6TOCXmPbog81wTVD6f53fUt9bhY%2Btl5SaSNGqa77mqzNGgXjkQ8OKnwKXCf%2FcCFynIAYBgkRTCc67y9BjqkAad3ULoJzB1VKm%2FMRFf%2FijvSBMhPVfvRHhppp%2Fwyt78qCZ6foBwwMwfFEXai2iwtehUks3sBrg7UNZeIY%2BHqRksLfERuRFKcNmpvzFEC4urwPKEwUWIx6Y3Tigxpmph%2F3lSI4bjRISuRtciU1OlZrcqz96nyfBff77iYLr3caG3lU0Lu67KUJNb7JqEEcaq5pJhH73GBGLYl%2BW4qgX3QrltJ0HST&X-Amz-Signature=adcc9e3b9736115ec7074f8ef203720dfe823e3079a92785d7a98f5110477e53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6SJZRN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCBfx9h8OwgZb9Xr16T8hRlVvQ0PRwDp%2B9BVgK9V0k%2BVgIhALpk2V2pJJ2ad97xxQnqhymJg8Iz0i2ef3l%2FTipMNz9UKv8DCC0QABoMNjM3NDIzMTgzODA1Igzf6I8oZwZs1y2gVYsq3APEOo%2BWMRHfNBC05PMz%2BY2stutfB3IlPTWBC5E9TkGPNXkll5R7MWc%2BeU2e10%2FdFB8Evy23Uyl6lzwTvdS3O2gO2jRPIaWhiU0KItjEsM%2BWTBFvPS%2BkcPC2e5Cf38PZ%2B9RmNEoyJvJ%2FkJc6xHWfUTRHXtsm%2FahMfJAlCt79MPbIU6yIU98t5x3xn8%2F7ZzHQ5iVQfCnLTgz2QJe0NlFG1hvbb7MKN%2Bups90ggA4AdOfaT5Vrndu7LXMr0ywFoKy3iqG4SfVl%2Fs1ubzKqkxmrl9QrIWE2MDic%2FXnjfLN858IvcA8FeEqElbJ7c7EYuqEj1KmnAXwCPhE2z7U4%2Bp74HMF%2FOFmjIgBcKFApK8nQB0lWwqf%2BFtUutRJtOsPNbjkI1IFpWZeTI8NA81rLVsX2XaFNu89CsTjRkiKOg5KY0pZ27%2FOXmhsBAARZGAw2ZJ8kIkvPUdEUdP3KVRy5V0gYtWMW5Utt2idz2iFozaHpOmGeVdpuLqBfcV9lIufDaEqq9m%2FlK3vXSJLm6RaHEw5jlMK01npl4hg0RjGkIMsEotl55zgx4Sp6IVNoQoaAj9zkiPoy%2FZrGe6m6FekXzLmu7akDD99lzg5ctKjWDSJpCw0REiSuH7%2Fu9KEh4cv5DzCK67y9BjqkAdNfInQjnwrzPTTSKwdvBU95VSoQV6HuAddyVHm4UxLkX0qfY0H4iTjoSz8u3it4%2FgDmv3%2BqptaGjDTmhqD%2FewYNZD3AQ1RFvmQ68JIg0OL8V786J0HGWEU%2B3o9UgpFwYUkUw%2BaYvT%2BOQU6zBzWx%2B6keu%2Fp74UpbIEQBzOCxnW7JIqRXRPVqdqtVuEs0R%2BSfHxB8yEFdeZic4T4SLrRJmR56P4PE&X-Amz-Signature=04ab0f4627488207bc7c5c277230325141707447dbeda76e032a6faf39acfc57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3L5PKW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFaJRMih9Zdo%2BiwlNqJu6a444y%2FLEiZS%2BnW8KKgnhHJoAiEAyhrka6OpiG34BMJ2fgl7MDv4CjpI%2BRug31FWSJVwes0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDChWylkMA2S%2FrJxyDSrcA2iu2ybaqrjrymacnWOJ70mInnwc0taWoWpdDSTiCGd%2FgJrs3GOm9M9a1kpOkPvORboKU85FrXZK5p%2BP5laMvncaVyVspSVtppF%2FnQ8an%2BvHgzwGXn74iwwXJd9Qvh4ODoEICWJzG%2FP%2Bl6OxVqKV6NQ4HCX%2BTeC0QB1%2Fb0nfpVJLT2yw1YpaESpMJzmjTZ7oUxLyvCN2voLQx9Ok7OJkd2tknErUPNnDFyanOBj45J8t6fJR2XGHesD9tq6xpAG0RUUG0u%2FuaPFgrJQANSi5vtuW2%2BfMOIvLO0Umqs0e3H%2F1ZVYmwOcaLhKWSj0qLS3OA8Ez1lkbjJq5PS%2FWmPxkwml7qXIFWPfc26YE0LLihwiG5alR8UM6q1FR9F8QId9j8RQ2jZfG75VM6nfqytJh%2B8Sgr0NLy7Gd7K%2FBt%2BlrFDItxRzk8%2Fjql2Y36nN9ueNG24nIuFjuEFDoaDcATA7J5169Ue5rKPyMLmaGSIch72wxhFKKu18%2Bl5eyPR4ptUOZVbNZOL7XsNVl24GYBD8zm5qqzZD8q0hFVo5VNSdPq%2B5k%2FjccRZFrfnY69SsdQ55HQ%2BLzd0p3ZUvdYHdTVwlCM236bhAD8lC0A0S90LT24mOrldoEaAxa%2Fcnq6QMbMOzqvL0GOqUBDb8oH1BIW0fvZ8sKyNKRB1yCBRM4wiAiOT6WW%2Ba%2BAFppgFq0padKtj7%2Fjp%2BzG6XLHEzKoSZS3broj%2F%2BU7ej7KT5xMvrfwbGgc%2BoSGS2ugSCYM%2FtkerzVRymggPqiO43NjySmt35m9nKWqiWuzRq%2Bpt8K99YopmC1%2FfEvpWq9xofKZHcoA4C0JiBIpMVW9Sg9m9mhK8N7Wm4SziFGcq9RZ9Ul1t4B&X-Amz-Signature=6aeb569ea09291b3123f6d58af13a8978df7f165c03e5f892f1f262f86087579&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
