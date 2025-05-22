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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWKT6HX6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDmBStUfFbvsGbqCGgDTJD4mno3xBdXap8aZZCVUEFKcQIhANgydl1ykYdMKIYEWsYyfiQAENMY70eD4xCjbN0VTQfBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx43SqPmLW2w11vRUcq3APkH5mAWu1iUcEMIELiiiEA4c4hcb%2Fnca3sEqgzxarPhatnqIPIzxpaux6zPuIAwow3ETpIso8Ycvh%2B86PdqqCd9bJwwUdcrLK3NGFORJW3FyglrkDxIK1tN7W6IMyP0Ac7QPHLQkxCsjDDzEe0PpCBo61Z9qcr9UO737AB5OVZQ6kj%2FV0gRDlXubtKSfJgBRlcbqLfn6WkebI1ZMkk9XEEvLo4Bcu1bku87UDnXnXgu8Y54nQS9W8J25L6TCUoeou6%2BK%2FM%2BJrqMI53rYmfwo%2B6VscR%2FN6tpND7M66fVyUnrMGuwlz%2BC5jKBaVyfnuc5c%2F9e2x%2B%2BNxIq%2F1QmNv6Yx4a5nmVfeslnsIsRBjNhnyR%2F3U0hbrrvo3fLmJlCf%2B9mZTvvswC1v9vyrx%2BsdwS0d39yTooS3T8D422m2gbTz%2BHCbVB%2BVSJIThaoxpdRqVGUi4s9BNd%2BUOtY014%2BLnjrrvU1t6b5oE51qoX1q71IZ%2Bb0pXiyPFucIJpEx2fAWtcIcVXhkP8GGzQpC9FVOZOoHrppbmprZLl%2B9odchBHzM9z8gDGpB22pZheroC2XC12aw0Sy%2BeJSGEZx9%2FNlAIGEeXecDbnJnvwhsEprz9i9FqfBm47AdplvQ2WgCyJdTC3k7rBBjqkATHUSGrpqPJEHGy743MzCsCKPtp853pBAL5GRYBikg81IrG5BTe7p150WYBRGhc76NZFCArsICpC1Er55Tq2OqWoqf4QRad%2F4AqfkCzTE%2B660JVIs4lzAIHx9zhFSpy0lqu4jtyaovVa7%2F%2FXlqUyx%2B9B0eKtShJUSrhODLGlGsR55WOEqcXKroWNhIK%2BiOrhKTav7xBCgSPdRk3CHsXWTjy%2Fb4Y4&X-Amz-Signature=92a55c75005efc8ec6576929c3b3e9250bd6743fe5073a02cfc62428e678d18f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWKT6HX6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDmBStUfFbvsGbqCGgDTJD4mno3xBdXap8aZZCVUEFKcQIhANgydl1ykYdMKIYEWsYyfiQAENMY70eD4xCjbN0VTQfBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx43SqPmLW2w11vRUcq3APkH5mAWu1iUcEMIELiiiEA4c4hcb%2Fnca3sEqgzxarPhatnqIPIzxpaux6zPuIAwow3ETpIso8Ycvh%2B86PdqqCd9bJwwUdcrLK3NGFORJW3FyglrkDxIK1tN7W6IMyP0Ac7QPHLQkxCsjDDzEe0PpCBo61Z9qcr9UO737AB5OVZQ6kj%2FV0gRDlXubtKSfJgBRlcbqLfn6WkebI1ZMkk9XEEvLo4Bcu1bku87UDnXnXgu8Y54nQS9W8J25L6TCUoeou6%2BK%2FM%2BJrqMI53rYmfwo%2B6VscR%2FN6tpND7M66fVyUnrMGuwlz%2BC5jKBaVyfnuc5c%2F9e2x%2B%2BNxIq%2F1QmNv6Yx4a5nmVfeslnsIsRBjNhnyR%2F3U0hbrrvo3fLmJlCf%2B9mZTvvswC1v9vyrx%2BsdwS0d39yTooS3T8D422m2gbTz%2BHCbVB%2BVSJIThaoxpdRqVGUi4s9BNd%2BUOtY014%2BLnjrrvU1t6b5oE51qoX1q71IZ%2Bb0pXiyPFucIJpEx2fAWtcIcVXhkP8GGzQpC9FVOZOoHrppbmprZLl%2B9odchBHzM9z8gDGpB22pZheroC2XC12aw0Sy%2BeJSGEZx9%2FNlAIGEeXecDbnJnvwhsEprz9i9FqfBm47AdplvQ2WgCyJdTC3k7rBBjqkATHUSGrpqPJEHGy743MzCsCKPtp853pBAL5GRYBikg81IrG5BTe7p150WYBRGhc76NZFCArsICpC1Er55Tq2OqWoqf4QRad%2F4AqfkCzTE%2B660JVIs4lzAIHx9zhFSpy0lqu4jtyaovVa7%2F%2FXlqUyx%2B9B0eKtShJUSrhODLGlGsR55WOEqcXKroWNhIK%2BiOrhKTav7xBCgSPdRk3CHsXWTjy%2Fb4Y4&X-Amz-Signature=06c8d2ee0143aa7bd61266dc15cf44ca8df4938a2a52aba5854e4c94a58f92e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWKT6HX6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDmBStUfFbvsGbqCGgDTJD4mno3xBdXap8aZZCVUEFKcQIhANgydl1ykYdMKIYEWsYyfiQAENMY70eD4xCjbN0VTQfBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx43SqPmLW2w11vRUcq3APkH5mAWu1iUcEMIELiiiEA4c4hcb%2Fnca3sEqgzxarPhatnqIPIzxpaux6zPuIAwow3ETpIso8Ycvh%2B86PdqqCd9bJwwUdcrLK3NGFORJW3FyglrkDxIK1tN7W6IMyP0Ac7QPHLQkxCsjDDzEe0PpCBo61Z9qcr9UO737AB5OVZQ6kj%2FV0gRDlXubtKSfJgBRlcbqLfn6WkebI1ZMkk9XEEvLo4Bcu1bku87UDnXnXgu8Y54nQS9W8J25L6TCUoeou6%2BK%2FM%2BJrqMI53rYmfwo%2B6VscR%2FN6tpND7M66fVyUnrMGuwlz%2BC5jKBaVyfnuc5c%2F9e2x%2B%2BNxIq%2F1QmNv6Yx4a5nmVfeslnsIsRBjNhnyR%2F3U0hbrrvo3fLmJlCf%2B9mZTvvswC1v9vyrx%2BsdwS0d39yTooS3T8D422m2gbTz%2BHCbVB%2BVSJIThaoxpdRqVGUi4s9BNd%2BUOtY014%2BLnjrrvU1t6b5oE51qoX1q71IZ%2Bb0pXiyPFucIJpEx2fAWtcIcVXhkP8GGzQpC9FVOZOoHrppbmprZLl%2B9odchBHzM9z8gDGpB22pZheroC2XC12aw0Sy%2BeJSGEZx9%2FNlAIGEeXecDbnJnvwhsEprz9i9FqfBm47AdplvQ2WgCyJdTC3k7rBBjqkATHUSGrpqPJEHGy743MzCsCKPtp853pBAL5GRYBikg81IrG5BTe7p150WYBRGhc76NZFCArsICpC1Er55Tq2OqWoqf4QRad%2F4AqfkCzTE%2B660JVIs4lzAIHx9zhFSpy0lqu4jtyaovVa7%2F%2FXlqUyx%2B9B0eKtShJUSrhODLGlGsR55WOEqcXKroWNhIK%2BiOrhKTav7xBCgSPdRk3CHsXWTjy%2Fb4Y4&X-Amz-Signature=b0917225f3a2171c5e4eb19169b50cb69244bb8e9ba672e49aa66fb950118bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FL2FSVP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQChVsAqBXLKCJbqE5t4tLsjzM7qHEKprE1jaaeGEr5fggIhAMgQ2EyVvI9OlFKFfTCbjhG1lLczVXhyAziy9Etxm2VTKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQG1oQC0XD%2FysDNn4q3AOGOyLCv1HCsgV3UpxLtK4qvEBBwNGanF%2FXWPHBb3XlMAANEgjkteDNWCshXQNi7ANefMFWdMBmsUjtZCLmD77QpflGNQBSAHW3sLs3KAwkHs8EJqXxcS4mnG1sfqb1gwWOYv3SQfgWbh9Vdtz9MIyBzochGmCYXiGiiElyihiDS476TaI4EcwLixGQU4CYH5hj1SKIscak2PilSCKYDfY2GhN7DhHxkbQbWctby69qVBh9Nmm1x6bW%2BN%2FDeDLrZPSakKvBS8Ax8XxXSm8Bj0VbKLtvm1Ql1B2JMmjO2dZaiwXhXrcs4hljvJ%2F465yjSDAuIQgTDd94h47k0EYiSmr528wGZejO0RwA7oZi4RMIKY6Mdl0QBiD650I2XvieexmNXT1CFAbtCz0QvvxT%2FiBk4chx8qngHTad%2BLkApQdKztTaxRiQrdrCmEdblfUGA8h2ob4r6FIlA1gttWdtvx%2BBk7q4qjT7ZCenB0dq4n7UKzyp%2BSSrnJBXDz1EmNd0sbdGOYBT7OjceoUP%2B4yF8eZk44lObS4ZpL12bD6EShnMP5a6kVn2yVY%2BFj65yD%2FDB3lFRu9DtddIEvC82KMXcwrMyWpRE5GS1HW7Wcf5NUm1jrulfYQ%2Bcf%2BfwX4aszCJlLrBBjqkASdavbR%2ByD9IZO470HgMOPMaKpqs7JSjAJGXZ69pqcM8%2BuMy2k1%2F5y2XmZNpLv7Ms2%2Ff1nuV7BwrgsJ1nB1vWl5oxHhdwtLB9lXMSf7%2Bo8WKQqkdYHI1mRkBYNonRxwbeuiPzpItR3tseGYnUnn%2FaWjS49OANzJSrQyB5kKjlstEVjznwvRxn6S%2FkrUTFJMN5J1RqgwUhCkoDfca219eHaxxwmBg&X-Amz-Signature=63e3cc5938c2fbb89453e961f4034323afcde728a30d68c354c2a61b98ba4ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FN5GQM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCK7M2qd62WfM1RW7qUbSCXdujjLW25GEB%2BbpBfdLWtKgIgbAmUC9AGugLY%2BHBHjsjdogUc39X7S5%2B%2F%2B99g%2Fi0gkSUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDTk0mDg6sISyTnrSrcA53sWfFugeI7fw%2Fx7fBDSF32%2BHN2VNi%2BWCkYVGrhQXTYKzepNkBDWwL2V5aR4dYq%2Fx7wAujqsfcsq71IiHzSLJ0hAoEPPa%2BEc9uSLWIVQkLFqh7LH4je95ui%2FcQbwoD1XHgmKlb%2B%2Fe1NkaCozuC%2B7nilcDBp0cnMk4mp%2Bzk2yJxG9mJIILEq0ALlsmUeV1WX6PJXpiVZKYtIKGpadFqgDoYONMxo08reX2NWXbZKqGtnmdgIMhd4mehwXvOGYwnPAn5X1Wo%2FwoaFLcb0V3hBH8u%2FzM9a7i%2Fu9Xcv7dWOaKMNglTjkXxOUtgRLirTS2tipymwkNOnp4XNpS08djPS%2FBrKk13eLnGMPA78sm5mkLRiRV6d85ZIRFpM0uYYD3qtXMJ%2Ba8QsYxM5RK4WUJ5RABK7YAJ5hOpVwdrUog%2B7w1ENh4RV%2BoCOHCt5tzOyet2DpblZAp%2F6mvvueVHpGbXYnmMDOsaTFGWP5jQRaUIgnqRN4R6RVAFmr%2F8cE0yYCxiKA2SDOhYK0W3i6MVL15rI61qtMJSEaxT2MLEt4hcuP7foD5ZcPmZ5n1J3wfjsaigcyD8rkdXU%2BfxOgqkhG6XEv6ee%2BM33l4QomMWt3vLNXIFuuT8vC09yjO6iucHvMJCUusEGOqUBqWPdhr3XsSYZYwuyPHMJuNEy%2B8A7mFhenf%2FnynAfSrjO48Y3zREYh5CdM4rZeJ3cplKHuIq55bfHUlnel9Up0Ew09NepCJFWLjaNz7QdC3x7qMV1cvw7xys%2FThhBCPhsZ90cyP9jNsXLVwCvztmcmqveiV%2FQ8d3N4UIdFf6tB3%2BDML7F%2BB7zN4PZY%2FDhQIliud6mDBL6ffmCe9bTEAZgBBAf6MvS&X-Amz-Signature=5a372f4a19754444eaf989156765921c47ba3775a212dc890acb33df14bb6999&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWKT6HX6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDmBStUfFbvsGbqCGgDTJD4mno3xBdXap8aZZCVUEFKcQIhANgydl1ykYdMKIYEWsYyfiQAENMY70eD4xCjbN0VTQfBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx43SqPmLW2w11vRUcq3APkH5mAWu1iUcEMIELiiiEA4c4hcb%2Fnca3sEqgzxarPhatnqIPIzxpaux6zPuIAwow3ETpIso8Ycvh%2B86PdqqCd9bJwwUdcrLK3NGFORJW3FyglrkDxIK1tN7W6IMyP0Ac7QPHLQkxCsjDDzEe0PpCBo61Z9qcr9UO737AB5OVZQ6kj%2FV0gRDlXubtKSfJgBRlcbqLfn6WkebI1ZMkk9XEEvLo4Bcu1bku87UDnXnXgu8Y54nQS9W8J25L6TCUoeou6%2BK%2FM%2BJrqMI53rYmfwo%2B6VscR%2FN6tpND7M66fVyUnrMGuwlz%2BC5jKBaVyfnuc5c%2F9e2x%2B%2BNxIq%2F1QmNv6Yx4a5nmVfeslnsIsRBjNhnyR%2F3U0hbrrvo3fLmJlCf%2B9mZTvvswC1v9vyrx%2BsdwS0d39yTooS3T8D422m2gbTz%2BHCbVB%2BVSJIThaoxpdRqVGUi4s9BNd%2BUOtY014%2BLnjrrvU1t6b5oE51qoX1q71IZ%2Bb0pXiyPFucIJpEx2fAWtcIcVXhkP8GGzQpC9FVOZOoHrppbmprZLl%2B9odchBHzM9z8gDGpB22pZheroC2XC12aw0Sy%2BeJSGEZx9%2FNlAIGEeXecDbnJnvwhsEprz9i9FqfBm47AdplvQ2WgCyJdTC3k7rBBjqkATHUSGrpqPJEHGy743MzCsCKPtp853pBAL5GRYBikg81IrG5BTe7p150WYBRGhc76NZFCArsICpC1Er55Tq2OqWoqf4QRad%2F4AqfkCzTE%2B660JVIs4lzAIHx9zhFSpy0lqu4jtyaovVa7%2F%2FXlqUyx%2B9B0eKtShJUSrhODLGlGsR55WOEqcXKroWNhIK%2BiOrhKTav7xBCgSPdRk3CHsXWTjy%2Fb4Y4&X-Amz-Signature=3149327ae76c8a8c7780ab5c28742af077eedf7104fd204f1e474fd8abf45337&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
