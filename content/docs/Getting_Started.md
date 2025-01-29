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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUZ2GNA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0f081yNIKemlF3YHjrZBYliAtpe0wUD3gWQXdamMF%2BwIhAJxTCqYdMTaWI6igEcMShJUgFZRP0qfgvQ2BXitsZc%2BvKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3tEeEhSeVR1IzxpUq3APdrrr1cyfmboPe67jSJYHChr%2BzhhkxelNasuc3epVaV%2FNuKazPzUP6woQLEiA0L4rbMB36ttfld35%2BilGLl33ZlNPwhF2Svdz%2BvllWx61rTjfLlKZwqwg2AU0%2BeSnCCLSgIi2gifNOmIjhgEagk1Yr0EFdu7KsAYByoUjuLqew%2BKEBmvzru%2BdEJpHTxUoR6HmC1TcIKXeJ%2B4XYf2teAeoQn2m7RbanAs8OLftGdcP3TSRbbADp259StCvazMBiBwArV9LZSJfOdkjYF1%2B%2BMWS1aFqtRak7YRv7K2MmUjtkLPen2dvENd32MxSE9uRKI88CWUpbcSBQ2jwHQ18yn7gvrmvfppzsQq7NIxPDyc67rk9munmnU30D4wcTqLSDRnfA9yQeqSRj2I4cK8W2bjaMJAGc66nfh2f1InPiP24iYzFpOlXG4L57p16JOKjaXYNHuI8g9vfU%2Bt02xNHdX%2F97u0Bq%2FDzy3wQDJHn9HW%2BpbnnkrmFCresiVKgqunUZYbrN9FeGEbIbUgId%2FpiZOivgKLDhpP2PBvINU8pFpUzMY%2FFc08Le17em2XW8bTddTHbxi9sfhrlw6Q3ZcTv886NvBNcjKiuAIyV4egl3aAXUtXQz%2B%2BM%2BIvEhpenPCjCnyOe8BjqkAV%2FfpvdWPojEKmimldW4nFbRCwOHEvrQrYcyY62HG%2F%2F6Gqaqmv3bIwBNXmFBM9OjqUKpZO%2BkkTfJuWT2JEtya%2BpayjweVqBzIqKNQww6554rgHLnVolabo5tMaHaIFdgQ05A5NIVhXIWkZk9E0H9iEH9of7FvE4qnrSlluLZD5wymtFNt42%2BgAyHq4qlo%2BVpknWnzki0KMMNSv81mE50g6Yklj1%2B&X-Amz-Signature=3b9e7948a235be958fef170771fd13828c928ad48f918a09a38e9c011abe02fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUZ2GNA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0f081yNIKemlF3YHjrZBYliAtpe0wUD3gWQXdamMF%2BwIhAJxTCqYdMTaWI6igEcMShJUgFZRP0qfgvQ2BXitsZc%2BvKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3tEeEhSeVR1IzxpUq3APdrrr1cyfmboPe67jSJYHChr%2BzhhkxelNasuc3epVaV%2FNuKazPzUP6woQLEiA0L4rbMB36ttfld35%2BilGLl33ZlNPwhF2Svdz%2BvllWx61rTjfLlKZwqwg2AU0%2BeSnCCLSgIi2gifNOmIjhgEagk1Yr0EFdu7KsAYByoUjuLqew%2BKEBmvzru%2BdEJpHTxUoR6HmC1TcIKXeJ%2B4XYf2teAeoQn2m7RbanAs8OLftGdcP3TSRbbADp259StCvazMBiBwArV9LZSJfOdkjYF1%2B%2BMWS1aFqtRak7YRv7K2MmUjtkLPen2dvENd32MxSE9uRKI88CWUpbcSBQ2jwHQ18yn7gvrmvfppzsQq7NIxPDyc67rk9munmnU30D4wcTqLSDRnfA9yQeqSRj2I4cK8W2bjaMJAGc66nfh2f1InPiP24iYzFpOlXG4L57p16JOKjaXYNHuI8g9vfU%2Bt02xNHdX%2F97u0Bq%2FDzy3wQDJHn9HW%2BpbnnkrmFCresiVKgqunUZYbrN9FeGEbIbUgId%2FpiZOivgKLDhpP2PBvINU8pFpUzMY%2FFc08Le17em2XW8bTddTHbxi9sfhrlw6Q3ZcTv886NvBNcjKiuAIyV4egl3aAXUtXQz%2B%2BM%2BIvEhpenPCjCnyOe8BjqkAV%2FfpvdWPojEKmimldW4nFbRCwOHEvrQrYcyY62HG%2F%2F6Gqaqmv3bIwBNXmFBM9OjqUKpZO%2BkkTfJuWT2JEtya%2BpayjweVqBzIqKNQww6554rgHLnVolabo5tMaHaIFdgQ05A5NIVhXIWkZk9E0H9iEH9of7FvE4qnrSlluLZD5wymtFNt42%2BgAyHq4qlo%2BVpknWnzki0KMMNSv81mE50g6Yklj1%2B&X-Amz-Signature=506c465b61d10c3928ef7f5c82cb5cb31421e5b64ee785c2efd0e17c99569216&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665G3I6WU%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFynNeuHEFtGOc3f4W5q%2B%2BKJ2HOfChzW%2FcO79zBT2FhoAiA1U0PXz01cZQ3zOkCN4lsko%2FpnmpHokGCMWFeP3svaWSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmcm2SFmNOttnb3JKtwDrY6m3qMdeWRVFwrlSDwUCMweMYqbaqsrOsVXPtqQSDrEkavTJPCAuORRfcjHb6TLJbD9MGLbfzNdWuZYb39uoUdFTTpiF2mWIhM0yJnZZgxuVZ9Jvj2dAbOPcIBxaX7OScBBLaN31BFhssrAY960wOtRsm8A5kYAoUe9ICoaOs17PSgNUOc%2BG7IY5RdfkY3lHLh1VS4%2FNd%2B83Rw3mFQWDcVNhgRI7fXFDzK%2BPlshkjwjySjtyDWKCJ3eLgk4B0kpj6FApt8br%2BQUbhSRDBC6867SxW3BJ8ASeROjsluYaobRWPtWtPLyMyFDIX5UuBvwMCoirKo8b8vzp71oVoZEpmKqVwXP6QoFUtdkSYL%2BHzI0bjPktoqM6ZKElsTY9bNTRFPA0o83bXkawjxKMTFrqHodCnR9PMu7FCOwD9bOKs6njZc%2F6zx%2FaI6kskOeCKzCxm%2Bm3z91QHpoREK%2BIXT9soEHqqbcY9RmB5FiUTZb4MWh7I50wZQpfff8mShxOy8mdUuGjFYGKy0GbyE7vbIFQ0bMv3zeNThPaeX6hu2vhtmHhCV3ue8Zrhf1YeSiUcgjcRdZCw0CVWYzhkU2%2BYVj6qbP%2BfcPv3ek8EZ4LUUm6apxq0QAvowot15yyF4w9cnnvAY6pgEyWqgkQYzsvnHYvaX%2B7zytuyXMs0aUIIjbTRuiaNmuU8qfshyNjK25ugCTftlZ1r1aw3C0i305MI6GN1Y%2BvANYkNCIthcsFcyb%2BfPaRrYArKMZ9NhAq5fxOGwVTvR%2FHuAS%2BrqZPRnQBCkiBPWhWlWNaR0r5fNU62I4hxXkMva%2FjIBgKndh6%2Bc92tO8dRLAfi34DL6aNqlWifxU07I14U1VT4obmHqx&X-Amz-Signature=b64f8978b5fbf76a599c55ad3d404d8619e1913d871cb5a70ec0226157b768bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VALKA54L%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUBnimU8NFF51p6gt8W20lFFNJR03qptr8YjmPJkZWaAIgXAhwopePUe%2BYyjwJwq0c47ezFoV%2FB%2FrnktHdXxoFrmsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmgDKzB1Fn4kzq2tyrcA4zdwpvKz7Rjjr%2FSfo%2FLuq5uFDlPyN3QfxxSWNzsy6wjZAKa9S64dArhGCnuR3X75rKAt8dEzyQPmedPzbphEuKd3KzpVyKgz7NSlSKD6a68DlXzQ5qlXmDsQMRI1Vjrzn2u5KhTbNeAlpUgWAjTKMlNT%2FXSmN2dySL29puMFrgHXVBVBRR93fd7Cs1VjFibS1LuZ%2FkO7U4BAgprpIVIsiHerbw%2BqeLuGl3i8XCfNqvNLEqM8%2FG5ITfJra6roKGgXJFX6em3P8QQzgF7L4YmQLZQtOl7cAa%2FlbK2L7n%2FJBriRnLy47xGfijVxqr%2FRDl9uS%2FGpfkZiJWsUuqDU36aKHGpSedi%2F72dqFQrPuHAf4uYur3O97ZvTGqCdYvRQTqh58g3OPAnbphTS39%2FEES4URjtrGbkD55bkAsuL%2BiPA1UIaXVFB7oMhBZN6pPkqUOFBJq3zoWqOw8Wg7ZQBnxtTTa6cGMYf8eLYUIv7a20R7e8t9AXFDC%2BT9ZzVwxcsYG0Ia0l2MM%2FcaoRt%2FjJMSqoRRw%2B5MpUYhwvoY0ONvJUxcFJtBo1KVhj6iSkjnvJVqg%2FMShVvGW9Re4mWYRhHcF%2FufEVox2Z2AhB9n%2FjEWlE%2Bn76rzegu8nKAf81YKtTMITJ57wGOqUBZGWO3%2F1FJFojrIertIsEkVbxwLIoY6e2jNDC3BwqskU9Ezx%2B%2FtkLTOdLas6wDHieOXiXtctUpsCDUpIx32VfyMHt7lq0gTdBAlTJWjJ4%2B1Jv5U57DQReaTXdYwnw0uASA7NRqA9%2FAUzN9cxjocJrM1600oK8Dx5StoHdCTPy2T56A33XunIC%2BOBfinFlNLIPPPRviC9oU4T7pVD90A%2Bl3I4xVmg7&X-Amz-Signature=98169ab8d91667efe7ec95fc4b994036fc78b3fb6e15579175bcea6f054e2f76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUZ2GNA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0f081yNIKemlF3YHjrZBYliAtpe0wUD3gWQXdamMF%2BwIhAJxTCqYdMTaWI6igEcMShJUgFZRP0qfgvQ2BXitsZc%2BvKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3tEeEhSeVR1IzxpUq3APdrrr1cyfmboPe67jSJYHChr%2BzhhkxelNasuc3epVaV%2FNuKazPzUP6woQLEiA0L4rbMB36ttfld35%2BilGLl33ZlNPwhF2Svdz%2BvllWx61rTjfLlKZwqwg2AU0%2BeSnCCLSgIi2gifNOmIjhgEagk1Yr0EFdu7KsAYByoUjuLqew%2BKEBmvzru%2BdEJpHTxUoR6HmC1TcIKXeJ%2B4XYf2teAeoQn2m7RbanAs8OLftGdcP3TSRbbADp259StCvazMBiBwArV9LZSJfOdkjYF1%2B%2BMWS1aFqtRak7YRv7K2MmUjtkLPen2dvENd32MxSE9uRKI88CWUpbcSBQ2jwHQ18yn7gvrmvfppzsQq7NIxPDyc67rk9munmnU30D4wcTqLSDRnfA9yQeqSRj2I4cK8W2bjaMJAGc66nfh2f1InPiP24iYzFpOlXG4L57p16JOKjaXYNHuI8g9vfU%2Bt02xNHdX%2F97u0Bq%2FDzy3wQDJHn9HW%2BpbnnkrmFCresiVKgqunUZYbrN9FeGEbIbUgId%2FpiZOivgKLDhpP2PBvINU8pFpUzMY%2FFc08Le17em2XW8bTddTHbxi9sfhrlw6Q3ZcTv886NvBNcjKiuAIyV4egl3aAXUtXQz%2B%2BM%2BIvEhpenPCjCnyOe8BjqkAV%2FfpvdWPojEKmimldW4nFbRCwOHEvrQrYcyY62HG%2F%2F6Gqaqmv3bIwBNXmFBM9OjqUKpZO%2BkkTfJuWT2JEtya%2BpayjweVqBzIqKNQww6554rgHLnVolabo5tMaHaIFdgQ05A5NIVhXIWkZk9E0H9iEH9of7FvE4qnrSlluLZD5wymtFNt42%2BgAyHq4qlo%2BVpknWnzki0KMMNSv81mE50g6Yklj1%2B&X-Amz-Signature=89bce5ad2b7773dcd3d93997acff6ae6f40d64f4de8525315ee2a73b7f62fb4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
