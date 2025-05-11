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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLG25MO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDBp1sUAkQgrzKlnWUkaw%2BBwNa8aA5NAv9RVHFA8PdKRgIgajA7By1lX8d6QbudCNu5QYK94mXbaqlG41Vb8uJAfssqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3xpXQvBfeTtqiO0CrcAx8QuLaEMq%2BT7X2mGGq6hmSkfYp2W6G7xVQqP0qhZl5rMMcJfLFOGiW%2Bn94yycyymkQFbbhMPRP92ObGBXVwuOyTYsKH6FBb82KNXMJgiJ5oO7Yw%2BU%2FILzX6TVVhKULSChhF474K8Y7QyUZzJSMqFteh77HPAyihB56CUl02JZPSpqrKYgCW5mdoCyuuje6iLapaZACp%2FjVLYlGsFfUuz1T0gRavhI7MAuGHc8TSGo26vzVzYPBDtr09Y%2FUyaF0lyExR%2FQa7MOw8Djksihrl0tm6C93XUNyDr%2F2AHe8PdgzlDDg8sbNRcSfSuboIcOgowWpQhdR1QjEtG9462z32n3TL6EYRt8pntuIanZUGi9f%2B05GZaZivtwWpbdQCBmq4af8C%2FI%2F1fWG9Rw%2FAgTto8vWveiM%2FP9mtPX%2Bn9YP0R1rbWmbCuT7Wm0siM62AlmGKUxfUkS2JxkIqtcus7x4UC2PpBpG%2F4UiQ5NyKf1%2Fk43IMIn51b9zUkKz8SvjBLNloccYnbiSUzvfH93RcJ5Oq3rm3cx1YDoBmvLEYaA0GY7zXrDj69oj3RqiTZq3KhpBy2fVLbTT4FoLrHog%2FpalpGcpfQ4NCO2HL%2B5UlZ78d2SvOC%2B0nO5oYBFcos7mFMIPVhMEGOqUBnu5mEXROvyoBjEFQZWyuxUgfV3CWTAfyiBPhEFBnbhkm8rBNGCbjXMRwKiPFHEqz4iw0v6xBlm%2B%2B51%2BXezW1qbDqPqE1WUTbJnBJ0aDwbH7RjBtrwgFMu9Hs4f1%2FjFXOrRSeWmh7oMw82zxHKib5GVSliOsha5Nhxnph0olyirmaFIPLE8YfixIM4yxe4bWcgLniNXKZYhsqJWg4nnHAcK6jw7XB&X-Amz-Signature=31a4e9a0d56472a8ed052e71d381d8e9b36f3ecb11333d8dac6cbeb163cf8fac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLG25MO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDBp1sUAkQgrzKlnWUkaw%2BBwNa8aA5NAv9RVHFA8PdKRgIgajA7By1lX8d6QbudCNu5QYK94mXbaqlG41Vb8uJAfssqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3xpXQvBfeTtqiO0CrcAx8QuLaEMq%2BT7X2mGGq6hmSkfYp2W6G7xVQqP0qhZl5rMMcJfLFOGiW%2Bn94yycyymkQFbbhMPRP92ObGBXVwuOyTYsKH6FBb82KNXMJgiJ5oO7Yw%2BU%2FILzX6TVVhKULSChhF474K8Y7QyUZzJSMqFteh77HPAyihB56CUl02JZPSpqrKYgCW5mdoCyuuje6iLapaZACp%2FjVLYlGsFfUuz1T0gRavhI7MAuGHc8TSGo26vzVzYPBDtr09Y%2FUyaF0lyExR%2FQa7MOw8Djksihrl0tm6C93XUNyDr%2F2AHe8PdgzlDDg8sbNRcSfSuboIcOgowWpQhdR1QjEtG9462z32n3TL6EYRt8pntuIanZUGi9f%2B05GZaZivtwWpbdQCBmq4af8C%2FI%2F1fWG9Rw%2FAgTto8vWveiM%2FP9mtPX%2Bn9YP0R1rbWmbCuT7Wm0siM62AlmGKUxfUkS2JxkIqtcus7x4UC2PpBpG%2F4UiQ5NyKf1%2Fk43IMIn51b9zUkKz8SvjBLNloccYnbiSUzvfH93RcJ5Oq3rm3cx1YDoBmvLEYaA0GY7zXrDj69oj3RqiTZq3KhpBy2fVLbTT4FoLrHog%2FpalpGcpfQ4NCO2HL%2B5UlZ78d2SvOC%2B0nO5oYBFcos7mFMIPVhMEGOqUBnu5mEXROvyoBjEFQZWyuxUgfV3CWTAfyiBPhEFBnbhkm8rBNGCbjXMRwKiPFHEqz4iw0v6xBlm%2B%2B51%2BXezW1qbDqPqE1WUTbJnBJ0aDwbH7RjBtrwgFMu9Hs4f1%2FjFXOrRSeWmh7oMw82zxHKib5GVSliOsha5Nhxnph0olyirmaFIPLE8YfixIM4yxe4bWcgLniNXKZYhsqJWg4nnHAcK6jw7XB&X-Amz-Signature=b77020c570870712a8e98101dbebf479533b7b8cef0ead601e9b16b06d33778d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLG25MO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDBp1sUAkQgrzKlnWUkaw%2BBwNa8aA5NAv9RVHFA8PdKRgIgajA7By1lX8d6QbudCNu5QYK94mXbaqlG41Vb8uJAfssqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3xpXQvBfeTtqiO0CrcAx8QuLaEMq%2BT7X2mGGq6hmSkfYp2W6G7xVQqP0qhZl5rMMcJfLFOGiW%2Bn94yycyymkQFbbhMPRP92ObGBXVwuOyTYsKH6FBb82KNXMJgiJ5oO7Yw%2BU%2FILzX6TVVhKULSChhF474K8Y7QyUZzJSMqFteh77HPAyihB56CUl02JZPSpqrKYgCW5mdoCyuuje6iLapaZACp%2FjVLYlGsFfUuz1T0gRavhI7MAuGHc8TSGo26vzVzYPBDtr09Y%2FUyaF0lyExR%2FQa7MOw8Djksihrl0tm6C93XUNyDr%2F2AHe8PdgzlDDg8sbNRcSfSuboIcOgowWpQhdR1QjEtG9462z32n3TL6EYRt8pntuIanZUGi9f%2B05GZaZivtwWpbdQCBmq4af8C%2FI%2F1fWG9Rw%2FAgTto8vWveiM%2FP9mtPX%2Bn9YP0R1rbWmbCuT7Wm0siM62AlmGKUxfUkS2JxkIqtcus7x4UC2PpBpG%2F4UiQ5NyKf1%2Fk43IMIn51b9zUkKz8SvjBLNloccYnbiSUzvfH93RcJ5Oq3rm3cx1YDoBmvLEYaA0GY7zXrDj69oj3RqiTZq3KhpBy2fVLbTT4FoLrHog%2FpalpGcpfQ4NCO2HL%2B5UlZ78d2SvOC%2B0nO5oYBFcos7mFMIPVhMEGOqUBnu5mEXROvyoBjEFQZWyuxUgfV3CWTAfyiBPhEFBnbhkm8rBNGCbjXMRwKiPFHEqz4iw0v6xBlm%2B%2B51%2BXezW1qbDqPqE1WUTbJnBJ0aDwbH7RjBtrwgFMu9Hs4f1%2FjFXOrRSeWmh7oMw82zxHKib5GVSliOsha5Nhxnph0olyirmaFIPLE8YfixIM4yxe4bWcgLniNXKZYhsqJWg4nnHAcK6jw7XB&X-Amz-Signature=d06918ecbedd202ed442dd434fbbbd7c978f6724ad6eba127dfb42b8d3d0340f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPLLCP5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCKcknle3ZXQQTD9eNdEb5q0MtVVXNJUjgLe193U%2FpcKwIhAK1tOqP916CdWIuoeNKmjMDU4coomvcMDoAOPQB7iXDRKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysoPuOG%2BUCldL1bNkq3AMiNjcFGdNY9QCpN1lkmhmOL5hguhrhB56QHiPrGs4em5vSPBykITwPwFFqk%2FIdrS5GCgiD2FEvn%2FuTvdP%2BD0s2%2F5qkSPpm9CnmCzThUtNxmLtQbG2AetK85dfA5gM14fvBa1Z1SKxkeI5xlWDEdMxqA6foTZpLTeMCJ8QKP71FqFqwzW3i9gIA9kaOI6RiVjkayOF8C6SZuMg1vIARjm9ZyqizufRi3FHmhmfUuLEsYK0zoHkPZKR4%2FA%2BmEXQT8wUnUakfGEH7UvOsciF%2FglpOIkHA5MerLCKuBco60Yd%2BpxEn%2F7%2BZRaWDRWvGSowBxnr2BzyA1reeibk8ONt%2FoYrNfe%2FWORRSYZDtOz7T5goPHLCVR3LRndspIhcFo6TnnBb52PxccRxxk7jeeWOYtQyCxwaV%2FFsk7ZApJAshTAJkZfkyzpgxkju%2B16QRwb8rkrPk30oAdlnTDoKYAKwy8l6TUDAN6gzXfHp0Rz57xwqkmF7XzQ2nuQApKEXbUpCc8IvY%2BotVd0AM7wIs01w4JLeXHYc1f9PkUYdWz7QeeUv6fFMqfkZOs29Uohg1DIvLF3wC6%2BW66PGVRGxqah9Q%2Bl7CEYJn%2FhLrVVrtwB%2BMfrPDHBQO3W5Ul%2FQdzbjKlzCI1YTBBjqkATQFK8pu82xze0HCpASVasCKirNLvWW3vtd1b3wDhpSZAshyYsSOpgH%2BHYlWOAqVHdM8TBxBrZJKIPO2WXqVgyxA8O1XaPdlWK5wKjwQGAGbBtPulCvpp4V4KN0yHZI14%2FLzkREbDMGeA2ybKSAdh2ODyKWtV88G1RSfengCwril7cPmSOz6kw%2F%2BM676c5KilX2F%2BS%2Fz%2Flv8gehqg9Bsy%2BheLWHZ&X-Amz-Signature=06c62af04a6abedef21705dd225b5907a698d4e72a9b1b25f111614390a24d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663O6UBHD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEtf6JJPT8FjmhOpFreO2RQdZUdvwUUEDUgexGk4fdYyAiEAjwKew7dz%2FunbLZUbkG%2FR70sjDTv7zX6GpIEhA1wVSYgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHligmC9ul7MWah8uircA4ESj%2FEmMMjxtFKgS%2BRGRz0TVUddTmUHVg6vg%2BNy7P4GKn5oixdeSmYKtOqS2LKPWnQijXc5auiCX3hQCKGd3Az2PRxMxFR6oBNLKvIq4rehwcjODhVIPwqTWutQ2f4%2B%2FIYZ5tZaMtToXUj37aDZIzhIcXig%2FGWmItbuBAFzVTYd5LbHUxUeXFBoWovELE1S8IupMv9TmxjVbsdMdXP1eld1TIq4kCP%2FXnhYQ5RuAkYw0%2BtoOn7f8g8nxAP9rf37%2FJciF2sSGXP4lVXu1DsLjU5GmNc%2FYmJoHqGX%2F6kyq7RaJrrfH8YHpepD9Deql1uqAJxpcJ3ZFRT%2BNeL3sY3zkR04i03UsEzzWlFjpiquHlamsugZPJza1dXmXVxi0SmKwwEgzQR83%2B%2BB6nY19QMjDPm4D0DeaiDL0yjZYXAXS4FnA%2BxAJx8V4nJzgPUr82AD26XRSUxUtGwUQ%2F56JAke8ufNTOvGEBlyBfY41fFtk4GJgvn1KYJBgn1dE3FNAz4H3Di4NWwlIkZWq%2BSedoAgaCokFK8fIeBUbR86WHCVXMklAIR%2F%2FBMyf4TFhCEXYaDCRuJ5h5hOcmyun7n%2BSs%2BXpW%2FTDmd4dGLZQGIrIkyl4xfGGsdUmO66xWEGePZQMIHVhMEGOqUBnz0bVbeAU9j2iICM4szjfpTlmGXefJkExTAZtMsVHZYemSWdacjkuqghq3KEL0vjm2UjyWWww6%2BtZOx8bVZQ6u%2BKI3k7dprqZTtebJ1d%2FkPygw08hR7SfnLAJZH5yxjsin8v0Ob3qkBiPHtQjvoX0y6mdqH2XVFTC7Lywyxd4B56PKJZ%2FrKvU50CHyU0LsN5wle6v4NCmj4nbsDONSvgeogNS2yd&X-Amz-Signature=be5e1b22e3d981b68dd232d1d01e2ca4d8dceb349aa0004f3f99ad396e879434&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLG25MO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDBp1sUAkQgrzKlnWUkaw%2BBwNa8aA5NAv9RVHFA8PdKRgIgajA7By1lX8d6QbudCNu5QYK94mXbaqlG41Vb8uJAfssqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3xpXQvBfeTtqiO0CrcAx8QuLaEMq%2BT7X2mGGq6hmSkfYp2W6G7xVQqP0qhZl5rMMcJfLFOGiW%2Bn94yycyymkQFbbhMPRP92ObGBXVwuOyTYsKH6FBb82KNXMJgiJ5oO7Yw%2BU%2FILzX6TVVhKULSChhF474K8Y7QyUZzJSMqFteh77HPAyihB56CUl02JZPSpqrKYgCW5mdoCyuuje6iLapaZACp%2FjVLYlGsFfUuz1T0gRavhI7MAuGHc8TSGo26vzVzYPBDtr09Y%2FUyaF0lyExR%2FQa7MOw8Djksihrl0tm6C93XUNyDr%2F2AHe8PdgzlDDg8sbNRcSfSuboIcOgowWpQhdR1QjEtG9462z32n3TL6EYRt8pntuIanZUGi9f%2B05GZaZivtwWpbdQCBmq4af8C%2FI%2F1fWG9Rw%2FAgTto8vWveiM%2FP9mtPX%2Bn9YP0R1rbWmbCuT7Wm0siM62AlmGKUxfUkS2JxkIqtcus7x4UC2PpBpG%2F4UiQ5NyKf1%2Fk43IMIn51b9zUkKz8SvjBLNloccYnbiSUzvfH93RcJ5Oq3rm3cx1YDoBmvLEYaA0GY7zXrDj69oj3RqiTZq3KhpBy2fVLbTT4FoLrHog%2FpalpGcpfQ4NCO2HL%2B5UlZ78d2SvOC%2B0nO5oYBFcos7mFMIPVhMEGOqUBnu5mEXROvyoBjEFQZWyuxUgfV3CWTAfyiBPhEFBnbhkm8rBNGCbjXMRwKiPFHEqz4iw0v6xBlm%2B%2B51%2BXezW1qbDqPqE1WUTbJnBJ0aDwbH7RjBtrwgFMu9Hs4f1%2FjFXOrRSeWmh7oMw82zxHKib5GVSliOsha5Nhxnph0olyirmaFIPLE8YfixIM4yxe4bWcgLniNXKZYhsqJWg4nnHAcK6jw7XB&X-Amz-Signature=9ef380f6ab21c85a9abeae54b14b36c9505f67d4be046ba1b074c9851bcbe4c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
