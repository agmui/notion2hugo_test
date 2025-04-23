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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5LLIZZ2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHbBhaqF%2FC1LhnrjZ%2BsOH6rMr9Xf8OLdke%2FKsfXNEqdtAiBdBKET9XV1rZIH%2B%2F2ViuJHyh9wCHAX1SzZXYhsdWx10yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbtUNgrhDmDTqE904KtwDEYV%2FKLyHEiE3PBdmdvhc0sF528Ku5E6UafTr7y7iYENcta0l9ekcNaqpopKp7ieFsFoKLY0mCxgQB4wVGgIYQG7cLq0roEd7QI%2BX3wx%2BB9yG%2BpO7k4ZJgEA%2BuyBdtbvbhA%2F9Fo773Py1LdGKludCARzqsDuuqNdvUXsypuy03ISbenH2ImX24brK00nOk5nPnYsfspNwTkCkJ2hOxJNONmPGl8dsB2HJTFegq8nWRVa3mhvYHJrhng0aaHbMMlawqaQYi33MJg6I66EjyRa1ebaOXrywpplM%2F%2FC%2FD%2Fo6JfxFS0lfyGxXNh%2Bfu8ZlhLYMF7aEReqXwTrvAsEedZqS1gqpLBUXAnD4xv1xVx1aCQP7mxxC%2FPavwkDEiz4R63szHAndkpHVkiAcIZb4SUplgB44gJePRQ0YzIUUvyKxMuxj5nsQo91jZZlSO8UZRNi3wpMdic17Wn5JVCoWTKFaWEhWWRrEPSexdRom3OVxyvYw9G3tW77WP5ay2qymaqvIXsMXBnJTMcXz4r%2ByQtf6ZW54bTK38LWbntJRk1GIAKFTWQLy6k8%2B8cxPzK0Ytn%2BJkuhaBCFc%2BNlhbCu2r7nzTzzuR7Ppy977jrig58tAcJ4%2FvgfYjZItKLDlThIwofOgwAY6pgEMJQ47DgarRc7wAfhRZa2fzHc%2Fi3GvrQc3bxlGzhp37KTp4qvnqZ1f%2F9%2FVN%2Bt9th1fDw1IGH7Ar4CnkevGV9z%2B0ylWP16wfwDstxUFYVjxp6bmOain5r12DBUdp%2FEOc%2FSy5THSl6e6jlU%2FVCLiFraejNEtPqaVLI0N%2FbQHFouU%2BMGc1JgZDbYNybcjVAbZ1NJNrtfwuCqRxkP5fZl%2BsPtIgMv%2F4jeq&X-Amz-Signature=770a2d91a2f92280b25b43913e76edc31fd7dc49d9295b5ce5abf4e054095898&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5LLIZZ2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHbBhaqF%2FC1LhnrjZ%2BsOH6rMr9Xf8OLdke%2FKsfXNEqdtAiBdBKET9XV1rZIH%2B%2F2ViuJHyh9wCHAX1SzZXYhsdWx10yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbtUNgrhDmDTqE904KtwDEYV%2FKLyHEiE3PBdmdvhc0sF528Ku5E6UafTr7y7iYENcta0l9ekcNaqpopKp7ieFsFoKLY0mCxgQB4wVGgIYQG7cLq0roEd7QI%2BX3wx%2BB9yG%2BpO7k4ZJgEA%2BuyBdtbvbhA%2F9Fo773Py1LdGKludCARzqsDuuqNdvUXsypuy03ISbenH2ImX24brK00nOk5nPnYsfspNwTkCkJ2hOxJNONmPGl8dsB2HJTFegq8nWRVa3mhvYHJrhng0aaHbMMlawqaQYi33MJg6I66EjyRa1ebaOXrywpplM%2F%2FC%2FD%2Fo6JfxFS0lfyGxXNh%2Bfu8ZlhLYMF7aEReqXwTrvAsEedZqS1gqpLBUXAnD4xv1xVx1aCQP7mxxC%2FPavwkDEiz4R63szHAndkpHVkiAcIZb4SUplgB44gJePRQ0YzIUUvyKxMuxj5nsQo91jZZlSO8UZRNi3wpMdic17Wn5JVCoWTKFaWEhWWRrEPSexdRom3OVxyvYw9G3tW77WP5ay2qymaqvIXsMXBnJTMcXz4r%2ByQtf6ZW54bTK38LWbntJRk1GIAKFTWQLy6k8%2B8cxPzK0Ytn%2BJkuhaBCFc%2BNlhbCu2r7nzTzzuR7Ppy977jrig58tAcJ4%2FvgfYjZItKLDlThIwofOgwAY6pgEMJQ47DgarRc7wAfhRZa2fzHc%2Fi3GvrQc3bxlGzhp37KTp4qvnqZ1f%2F9%2FVN%2Bt9th1fDw1IGH7Ar4CnkevGV9z%2B0ylWP16wfwDstxUFYVjxp6bmOain5r12DBUdp%2FEOc%2FSy5THSl6e6jlU%2FVCLiFraejNEtPqaVLI0N%2FbQHFouU%2BMGc1JgZDbYNybcjVAbZ1NJNrtfwuCqRxkP5fZl%2BsPtIgMv%2F4jeq&X-Amz-Signature=b4d47390fb5d57ff4950bfa0892a781ee253112f8cce82ab0661ae61a232eaf5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5JFCPC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCf67Ntf2Yuzbd%2BgrHRVKWGSMpReEVf%2Flq%2FxvIqYctc7gIgBl6GQ3wH8kzX4d6BdDOu%2BYWUMuP9Ko1tDOiwAMtmGWcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImSD8pFm3yqIGiTUircAyFn6XK3azR7oAxML3s1zC%2FqUjoPYII4Awm7LVk%2B0SsjJ1vWXNcDSmm%2FLw15i8KLy%2FJ3drmSQibACCuKh26dbNeQOCycgITD6nDDySq6CUw8bUVoNTv7tK2zsgF3PJ3orVvxiVKVY9KXzkpfAqTaKjld7%2FEAYezxQbIo1%2F4SIcuGdGwVl%2BYez6eezYgX%2FFO5Af%2FplIEjIiVfUvNRZVAhFkXuNinFDZs6dH%2Fc4I%2F%2FFTde5xBrp3jAY4GeGazBWt4760gMFigvbVM%2FRcxAJCpdAY8EW7we%2FChynwvUZRcYq%2B6xt11Xsq9B7Z8mJG9AKKfbVNiPLgbM%2BldrQulBgaPaut3f18VaBKtEcmRnQZOFkUoIV88TboWiGSYfF2HjoA7MEu3nmsAd11wB%2Bo2h6Ha5xIodzMAa4EluzAwQM%2BQvqcqtGp%2FtebHlkQZS6lubSghou7DK0IFPVQgLK9y5dPnky8BxNMLzuEJxgIqv%2BS%2FUfdcCHSlxqtAbAzPEeQ0cGogGdqOPgaOkpSLtoamzfko4TT61YyYvS%2Bp%2FrCTO914Y9wqKavEoowcZEgt7SrqF3bNUf7iMPuZQHlt1pprEpwYKGoahpII%2FmiOiBiPHBx%2BKMBPIW5FOKFAsKgngydh0MPyDocAGOqUB3%2FweRrxPPBCOtpA%2Bg4i8M5%2BTGE99EDjBVUDE46iVvhdefB1qW9Yo8xdTYGbVJt5K6ONFDShipJkySEqLFAV0P3XWQejqd2scG46L0Vhs%2BgoQHKz0my9BqkQ1cwnO9hYSw5VhmhvXeFLPLxj%2Fx%2FZXBSmv%2Bry4kLBYIqvRAw%2FZAhdzMBUtjkc5mA2YwGPq%2FJV2uEwV2z4cyPTPMTk8BK3%2Fz0skraVg&X-Amz-Signature=3f46b2a7731b72e9672e428004334d9e8fd5db3bc10e6e530631557a3c8bb696&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYF7VRH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC40q8eUNmiA7Trqi%2BmVvEsIGiHpjT5rsuomRtRmynNOgIhAMHsqyOSPDks%2FsAc%2BrjCuzOrfDuE8q8HNSrmlRGzC5PKKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaAbjn4iitlzxiXogq3AO3InyVzXZo59p2WthtxvBH9KSesYlhJmIaUR7FZDXx5aUjUgPz88jLiUnKocBpfkXQe53aBOXweAvbzTN0jep4px%2F4VzEbwCA5Lhr%2F%2FRgGZVZ6vxF7HmXlRwvD3Z%2B2u2l40%2BAR7zx7OoSV7v39fy9nZQgH%2F1V0Z4jEy3uetkJauseAsDl8IZoc%2F9vYzCjpGXSJJRWcSCmbvZb5Gksp6dk1fecf%2BIxjrJHvR6Agi%2BNDT5SddPznZh88DNr0r6GpqiTjJCRIkJgE792YFozrbxYhocz%2BBJn0sFDFUq1Pwp7g%2Bn8gSQ1T7dG8V89d0YaxT%2FcomcIMojIv2hZIFyJSktYndMr9ay8DESjUJMEDSfl1HOf4HgVD6pscY52%2Fr1uPdjvY52h5qlMpawpAs%2Bw4Hv1DSu0UnG5Md3RMcDKm1pNb31eQ3jN%2FvPVR%2FdvKs90PEOxUSdhzqT%2BDyQ6ThiKvhNe0rLZWS0r98akYiviwxVkF3R2wTEOlKEz9aEc%2FafFTmOiBKuU0RGaGNLP3TzOt1byjRiJtFcquv2fSUsJzaq0tCgwGZgWs60oe3EgY5mgO9DMKr894v0S%2F1I%2Bqs5bXtmHpBvdMNwdSxBfYlGYAWwHI7bazM573KK2%2F%2BSVsHzD68qDABjqkAcldCnt0PQIjVIx5dnJ6eBEfbLjiXWe8W0RSiXlh29UFMPbDwq9ilSaaYHv5ol9OMGJ%2FSlXc0%2FdIpwMmO%2F30U38KFN05QKzQL6WQBoKyGUtbE5CEpP5wfPwoIq9ZcIz3%2Bo526MBAbAQjktZaYfthrIPN3SjLirQzDk7CHmusg%2FEXTdWofYaSw1QEkR2cbLpD%2Bg5%2Bn8YQ3hXxfkHmc8jHXlIzuo%2Fj&X-Amz-Signature=9b6793c33217fad5a365ac873f60fd2b7d61d03d0d6d8cd843a417ccb0f8e4e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5LLIZZ2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHbBhaqF%2FC1LhnrjZ%2BsOH6rMr9Xf8OLdke%2FKsfXNEqdtAiBdBKET9XV1rZIH%2B%2F2ViuJHyh9wCHAX1SzZXYhsdWx10yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbtUNgrhDmDTqE904KtwDEYV%2FKLyHEiE3PBdmdvhc0sF528Ku5E6UafTr7y7iYENcta0l9ekcNaqpopKp7ieFsFoKLY0mCxgQB4wVGgIYQG7cLq0roEd7QI%2BX3wx%2BB9yG%2BpO7k4ZJgEA%2BuyBdtbvbhA%2F9Fo773Py1LdGKludCARzqsDuuqNdvUXsypuy03ISbenH2ImX24brK00nOk5nPnYsfspNwTkCkJ2hOxJNONmPGl8dsB2HJTFegq8nWRVa3mhvYHJrhng0aaHbMMlawqaQYi33MJg6I66EjyRa1ebaOXrywpplM%2F%2FC%2FD%2Fo6JfxFS0lfyGxXNh%2Bfu8ZlhLYMF7aEReqXwTrvAsEedZqS1gqpLBUXAnD4xv1xVx1aCQP7mxxC%2FPavwkDEiz4R63szHAndkpHVkiAcIZb4SUplgB44gJePRQ0YzIUUvyKxMuxj5nsQo91jZZlSO8UZRNi3wpMdic17Wn5JVCoWTKFaWEhWWRrEPSexdRom3OVxyvYw9G3tW77WP5ay2qymaqvIXsMXBnJTMcXz4r%2ByQtf6ZW54bTK38LWbntJRk1GIAKFTWQLy6k8%2B8cxPzK0Ytn%2BJkuhaBCFc%2BNlhbCu2r7nzTzzuR7Ppy977jrig58tAcJ4%2FvgfYjZItKLDlThIwofOgwAY6pgEMJQ47DgarRc7wAfhRZa2fzHc%2Fi3GvrQc3bxlGzhp37KTp4qvnqZ1f%2F9%2FVN%2Bt9th1fDw1IGH7Ar4CnkevGV9z%2B0ylWP16wfwDstxUFYVjxp6bmOain5r12DBUdp%2FEOc%2FSy5THSl6e6jlU%2FVCLiFraejNEtPqaVLI0N%2FbQHFouU%2BMGc1JgZDbYNybcjVAbZ1NJNrtfwuCqRxkP5fZl%2BsPtIgMv%2F4jeq&X-Amz-Signature=e70f9b106d601442bc312b1c8644f02765808af200fb1a35ebbfc761250670b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
