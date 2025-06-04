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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PT673WM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC6H3LHsh%2BHnm67W3TccP6LfBykAsRTBdnkOGZZ4zPRPQIhAKn4YgQ0J4EQHKRsWmPBOJCsnKylXGFisbanNJN6YYmKKv8DCDQQABoMNjM3NDIzMTgzODA1IgwRWIhBB1DB2%2FLys3sq3AOMvSOu7%2B9hP2yYJYi4RhVkwS0SRGV%2BsF1PMnnE%2BDl0aFAJDOfE3oY8UY6QrXZ0GsTsZg60uxmWdTOa6osHPmK5uGYCgzxPrEkau4lPSaOQeg4U1DzXPm1fDGRkv9U2pFS5gJPQh9vdA2W0WfHdNdrwXM32NMyp0AkVd21ZBeHs9g8jysZehA2%2BOWcoG3BXGU1zQZ%2FVVzY33kAX8IOvbs4FmdWJerQaDHs4AVKm6%2Fosi5vJtKyT96D1WMEtWp5l09Rqa8cMWac53m7Weey9TDebSoGQ%2FHHch8CbeYBJsbkY182WgZafTHe6A2COC3OQ9xqJZumPA1aty78%2F3v7pEmg2g1fhDlYeHGkXs7fhIniGOUY%2F%2BhBss912hvOmPCwgiXJwSrAuoqNUJRpP2XyUUqxx5%2FS4LlUOUQFGh4ROnP5cSwasgu6zRukzkukochh2yf5jGRI28xHnqONc4NCSsaisKWzIY9gPOeVqyXpqc8Arc1v%2BMI%2B6CEuGErGYwkpMhWQjI%2BnP7j2%2FLDfqJrFNTBCFffWLHNoG9xqAxXxOoKtc%2F9ftteRoVb07QMaPb9HPXjcQ6fOhFPJSfK4%2FhIxQT4hjUAw2802mUo1OhpHhHaG%2FXh%2FzsVuKmF80kCjQ%2FDDbrYLCBjqkAUfiyrlLi9oAhU%2B9duD%2FAb9WyLBetgv%2Bxdt3MmiqvlsMASGbVymryaxtLquFIN43GR5RKqkixd8SfnYbwOa3kEPtPlf%2BAmawI%2BIczk73zApNyKEHjqmpQRo1Mkt7lputSTyn6a5KfE3QprgbN3ET6qa%2BEeN%2FEy8ClImPaiPprpG1EDp5g6ter5XHeijr4vYEyq3VfFxTDQxfKhuGwkTDo38padPa&X-Amz-Signature=ef2c5230baad664d7f9fc499cb172a2b074df06b097b8c78a11cf70ab883d3e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PT673WM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC6H3LHsh%2BHnm67W3TccP6LfBykAsRTBdnkOGZZ4zPRPQIhAKn4YgQ0J4EQHKRsWmPBOJCsnKylXGFisbanNJN6YYmKKv8DCDQQABoMNjM3NDIzMTgzODA1IgwRWIhBB1DB2%2FLys3sq3AOMvSOu7%2B9hP2yYJYi4RhVkwS0SRGV%2BsF1PMnnE%2BDl0aFAJDOfE3oY8UY6QrXZ0GsTsZg60uxmWdTOa6osHPmK5uGYCgzxPrEkau4lPSaOQeg4U1DzXPm1fDGRkv9U2pFS5gJPQh9vdA2W0WfHdNdrwXM32NMyp0AkVd21ZBeHs9g8jysZehA2%2BOWcoG3BXGU1zQZ%2FVVzY33kAX8IOvbs4FmdWJerQaDHs4AVKm6%2Fosi5vJtKyT96D1WMEtWp5l09Rqa8cMWac53m7Weey9TDebSoGQ%2FHHch8CbeYBJsbkY182WgZafTHe6A2COC3OQ9xqJZumPA1aty78%2F3v7pEmg2g1fhDlYeHGkXs7fhIniGOUY%2F%2BhBss912hvOmPCwgiXJwSrAuoqNUJRpP2XyUUqxx5%2FS4LlUOUQFGh4ROnP5cSwasgu6zRukzkukochh2yf5jGRI28xHnqONc4NCSsaisKWzIY9gPOeVqyXpqc8Arc1v%2BMI%2B6CEuGErGYwkpMhWQjI%2BnP7j2%2FLDfqJrFNTBCFffWLHNoG9xqAxXxOoKtc%2F9ftteRoVb07QMaPb9HPXjcQ6fOhFPJSfK4%2FhIxQT4hjUAw2802mUo1OhpHhHaG%2FXh%2FzsVuKmF80kCjQ%2FDDbrYLCBjqkAUfiyrlLi9oAhU%2B9duD%2FAb9WyLBetgv%2Bxdt3MmiqvlsMASGbVymryaxtLquFIN43GR5RKqkixd8SfnYbwOa3kEPtPlf%2BAmawI%2BIczk73zApNyKEHjqmpQRo1Mkt7lputSTyn6a5KfE3QprgbN3ET6qa%2BEeN%2FEy8ClImPaiPprpG1EDp5g6ter5XHeijr4vYEyq3VfFxTDQxfKhuGwkTDo38padPa&X-Amz-Signature=5798cc94ea8cf85811f8db1c70b86b528d3412196eea9573892e56803764e487&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PT673WM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC6H3LHsh%2BHnm67W3TccP6LfBykAsRTBdnkOGZZ4zPRPQIhAKn4YgQ0J4EQHKRsWmPBOJCsnKylXGFisbanNJN6YYmKKv8DCDQQABoMNjM3NDIzMTgzODA1IgwRWIhBB1DB2%2FLys3sq3AOMvSOu7%2B9hP2yYJYi4RhVkwS0SRGV%2BsF1PMnnE%2BDl0aFAJDOfE3oY8UY6QrXZ0GsTsZg60uxmWdTOa6osHPmK5uGYCgzxPrEkau4lPSaOQeg4U1DzXPm1fDGRkv9U2pFS5gJPQh9vdA2W0WfHdNdrwXM32NMyp0AkVd21ZBeHs9g8jysZehA2%2BOWcoG3BXGU1zQZ%2FVVzY33kAX8IOvbs4FmdWJerQaDHs4AVKm6%2Fosi5vJtKyT96D1WMEtWp5l09Rqa8cMWac53m7Weey9TDebSoGQ%2FHHch8CbeYBJsbkY182WgZafTHe6A2COC3OQ9xqJZumPA1aty78%2F3v7pEmg2g1fhDlYeHGkXs7fhIniGOUY%2F%2BhBss912hvOmPCwgiXJwSrAuoqNUJRpP2XyUUqxx5%2FS4LlUOUQFGh4ROnP5cSwasgu6zRukzkukochh2yf5jGRI28xHnqONc4NCSsaisKWzIY9gPOeVqyXpqc8Arc1v%2BMI%2B6CEuGErGYwkpMhWQjI%2BnP7j2%2FLDfqJrFNTBCFffWLHNoG9xqAxXxOoKtc%2F9ftteRoVb07QMaPb9HPXjcQ6fOhFPJSfK4%2FhIxQT4hjUAw2802mUo1OhpHhHaG%2FXh%2FzsVuKmF80kCjQ%2FDDbrYLCBjqkAUfiyrlLi9oAhU%2B9duD%2FAb9WyLBetgv%2Bxdt3MmiqvlsMASGbVymryaxtLquFIN43GR5RKqkixd8SfnYbwOa3kEPtPlf%2BAmawI%2BIczk73zApNyKEHjqmpQRo1Mkt7lputSTyn6a5KfE3QprgbN3ET6qa%2BEeN%2FEy8ClImPaiPprpG1EDp5g6ter5XHeijr4vYEyq3VfFxTDQxfKhuGwkTDo38padPa&X-Amz-Signature=242e2ba719aeed79e19dfc17e2f308fc6face38b825dd5ca2e493d5c163842fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBD2BBUT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDxFYi5WAYnI1niQ0SS8GdRSuNbOBw7jG6LMOo7vsNLPwIhAMSyUCK6bYqySDUBlFcsATjPduVDvY1sgynfBcQGmjEQKv8DCDQQABoMNjM3NDIzMTgzODA1Igz2zm35m2Tydqs6OqMq3AO9%2F9jHCcjwGkTbQembl%2Fqu1G4T0kIFmNSWLiHKKUKyn04wrHr4t9l%2BqoV8lklAx%2FL7JlmWvRu7x1kAVtnL4rAc6eXZ24HO7cmCmnBYUVJzlWT6ZteZCXSfvBtaBAtJcKCh5ITCdganjmoJJ7mZFX4ONqQsjRUUOMebGh8xPG1UGyusgQfzP5fzA3%2BYG0xPg%2Blc%2FjGny82NdgWhiC%2BnppXoymG0dcOq53%2B7d0eJJLbPVXxOBds%2FgnhAaNRqUoXowUzhqpsASqdl8MGGnotLI4ObC%2Fjk8%2BX%2Fn4zkzfSrOTzQsa%2BQqwYCvMpEwRdlS25Vy0tCQ0i7qGAQAYpVruCX0o46ztpm5d9ZGJoQjA%2Bx08mRB%2F1U7h0naIxeGDeWC33Q6tM5LKJMwF8xNT4IVQXZJ6ixpgVoaBZGoVc8IXAjXprvoDctCisq1nMN7WtR23QkaQ3JnhldEO2F3fXzlmBPbZS%2BCTJNVu1IJkfYokF8HA62xV1F4dWe34Yp8Umed92LlEoa6%2B209ldnQvatpxze6LTHjw3HisbbIBqVhVs4SKttGeFNFBKV8aqVjCuz%2BKa%2BHfys%2Ba4Rw7OON7pJftD852WkvGuHLtpzPb22%2B9pwugfdwIzabbhkRZw27dDmtjCLroLCBjqkAVejg4twAo6lZQBAXoXk%2B98yEcMagZlOsnbvFAreFi00FwG1A%2FqMHMZ2HT51K8p0WCh3nhlfjnnTwk%2BpPqGHMKbGaldVk0gDGZDixZmjG%2FBw5G%2Bo%2BUvyfDHA75t6A1ISUs9zNZHFPivgdGkLI9mvocVWL8seW4wL0aFf2Uz6Y4O3odGjDCHMKTHQLhN4pBFppEEuMB3jJoT4k9hvwT0WYBcQ49tL&X-Amz-Signature=cfc4f43cde5e95aeecb597ff35fd4a761354ba98acf3768d1c206d96cea12ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCIGACO%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICLtBJTlaMVz7N3dJbt6ZbjB%2Fup7vpZtTxfPu0JedpzvAiEAgmlo78q%2Br4sAuA1CPipdzDq99h9xpfuXvKNRL0AfpNsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDmiv6onIHRGTh4HMyrcA8a4FN0atTzCpc2YqrQVx5oCMsIps42ztL5ZmOJdnjl1PXBIlgLKZ4Ld%2BtVQYL4FBnsBvyKq98xFparkVaoNzsCNOkm60U8tSNjUGswEfYqbfVbifiMx6Qjb0w2dX4iu1WkqIV7ROqIkqjiwvnco6%2Fwu2ruOUJBFT1U6Yk7uTfcyQNrOfBHCLPUxqVjkeriGsVTV8BNYpVc9ch9SCXkDou2AO9n%2BsFfjwVMxM8pKwPyVyNccs5kJ7xpz12zxorS76tu9hMUzPBawu6mA7Fc71zZVo1HImbmBc8BOgvCuKUOexh0Qngsq0UqoNrJegG6ClcajVZsUFoVmto%2BsBE%2FvZXeHX6RtqBksCb7BKq6aQ8FM9O5cQ9Rz6ZTcbOBzIYaI6zuI9z%2FaUsJYnrOvCL6WdHoiC%2BsewyQT%2FhiyFKkzHfyTFxncD%2BfOlEEZL13%2BnWr8%2Bcqttn7B5Nty4cuLwq1vCl59jwE0I2coitSGCYNcbh45aREbvtJNs2553PzsvNQ2EPGXQq3URxFxe%2BEZIoDnqOyd1r1fq5ih%2F2rEtc0Juf672jZmLxGhNmuXs%2Fm8uX3jVkjGFAiYunbwWoVWo6Xz%2BAFcdtQQMGOpn9HSBPZKpw2lJ8TJfLAkKKAq3Vd8MOatgsIGOqUB0Of3HMeLLV8LmG5UtnfJ8tJkam%2F9GRnHonGs2YxrpIuRUUsoe1yIzZXdGNQ2TsBexDQKHSTmksLIU4u%2Bljk1EjRz%2FZSoiTw9NFFzj9YD924BJMhSklY3nfkh4%2BmgKj%2B5OaDr5b%2BXDdaC7e2oRe3NwU4FxE4EZB4vEXZ2a5TqJzmFJzvve%2F7NdNMeiHsDb%2B3UD1lKsWPnExdqJtCJqLraYSEPKvU%2B&X-Amz-Signature=6b36235c5bdc1d25b4a9a0985056d45ba3a3270b28d219d41e394b9dd1beb524&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PT673WM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC6H3LHsh%2BHnm67W3TccP6LfBykAsRTBdnkOGZZ4zPRPQIhAKn4YgQ0J4EQHKRsWmPBOJCsnKylXGFisbanNJN6YYmKKv8DCDQQABoMNjM3NDIzMTgzODA1IgwRWIhBB1DB2%2FLys3sq3AOMvSOu7%2B9hP2yYJYi4RhVkwS0SRGV%2BsF1PMnnE%2BDl0aFAJDOfE3oY8UY6QrXZ0GsTsZg60uxmWdTOa6osHPmK5uGYCgzxPrEkau4lPSaOQeg4U1DzXPm1fDGRkv9U2pFS5gJPQh9vdA2W0WfHdNdrwXM32NMyp0AkVd21ZBeHs9g8jysZehA2%2BOWcoG3BXGU1zQZ%2FVVzY33kAX8IOvbs4FmdWJerQaDHs4AVKm6%2Fosi5vJtKyT96D1WMEtWp5l09Rqa8cMWac53m7Weey9TDebSoGQ%2FHHch8CbeYBJsbkY182WgZafTHe6A2COC3OQ9xqJZumPA1aty78%2F3v7pEmg2g1fhDlYeHGkXs7fhIniGOUY%2F%2BhBss912hvOmPCwgiXJwSrAuoqNUJRpP2XyUUqxx5%2FS4LlUOUQFGh4ROnP5cSwasgu6zRukzkukochh2yf5jGRI28xHnqONc4NCSsaisKWzIY9gPOeVqyXpqc8Arc1v%2BMI%2B6CEuGErGYwkpMhWQjI%2BnP7j2%2FLDfqJrFNTBCFffWLHNoG9xqAxXxOoKtc%2F9ftteRoVb07QMaPb9HPXjcQ6fOhFPJSfK4%2FhIxQT4hjUAw2802mUo1OhpHhHaG%2FXh%2FzsVuKmF80kCjQ%2FDDbrYLCBjqkAUfiyrlLi9oAhU%2B9duD%2FAb9WyLBetgv%2Bxdt3MmiqvlsMASGbVymryaxtLquFIN43GR5RKqkixd8SfnYbwOa3kEPtPlf%2BAmawI%2BIczk73zApNyKEHjqmpQRo1Mkt7lputSTyn6a5KfE3QprgbN3ET6qa%2BEeN%2FEy8ClImPaiPprpG1EDp5g6ter5XHeijr4vYEyq3VfFxTDQxfKhuGwkTDo38padPa&X-Amz-Signature=42fa14229577482a267736524e6d746e5f5e33a665b21149170d67db2ab12f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
