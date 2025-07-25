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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62VCTEM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCda%2BsDh6OzfOrkxrDYqpB9S1tXqRje0UrG4Xx7m1MIpAIhAJwyJh%2BB%2FiYgJuH935ZEx%2BCrytzP8%2FQTk1SBNpNlbUbeKv8DCEUQABoMNjM3NDIzMTgzODA1Igx8dsgf8Dv%2BQo0et0wq3APlrUx06%2B%2B4kBGDESsYUH024c1QlFmqVb2DPx0c%2BJ2qJAJ9I71X0lEWlceEi7wZeHJczVnJhE4Q255Ak2MqAdkBBUZHteCEhDm67CreBtVVHwo42XCPDzk5eYe2K3bEHwCh7NsOo3sCWl%2BDjj45Ls0JkZRZqSSrfQRB9xWayyHBeGNs7zSgFltZi8ehf7pMM5qVekWrFKUkcWdN7qF6Q%2BOMETwK9uyxfwjd%2FjfP12soehfz%2BWFJFuP7E1NnlCdshuEPH7VlJELnQIwaduz1E%2Bx6qYtUcikNNOlqa9mQUVe1eImjTdHbLLXdKqi1LUr5boaNeRNOEA6Z0dcLGdSzbRIFxr4AnwS9p8RJV1M2fznhJxnjFAD0qw7DPSd4hkKwhFFiW9D52Fj3wPgo94yM3k4f2FK4K006QWmR6Rcjng92ErNOq2%2FSieH9c4Pifx2RDy0tBbrx0Www4SJ9Z6uHQhCmYyrIN%2FQZ66%2FSUdBmHlLoAV99MQKd9o%2F%2Fu4%2Fto7vIAQj%2F1zQnINK2FmFADxlh8FNqcgc05HV1kCsfpdPM3ZaV0OS19GN%2BQW9EOWlpyeHy8NvrryCK%2FvHdoFvCQLPLWWpsX%2FDvb1S%2FdriTATbW5KZPzsX6XKJYhPqnntV9ezCo4Y3EBjqkAUlcBqi2leS8srDH%2FomoBHIYbMPW%2FDARNUxfmyllGq7r3Kbv7kmcHlXWGWw%2F5cTqPb%2FnGSJH1jK70YVexrg%2FiEBLbsHRa9Zl5oLPAPkVcf1ph5B4f4RayO67SK4CbkJxNMc1AHiA2gOp8TU4rPw6bxlpg6y82q7czEmbRzjy2A6ylLpXhjuaBDUMCo7UrjPQ0VS%2B8UNf8OoHpLiHxHQWnBeFDsAS&X-Amz-Signature=210d6e42632669d5844e2478f4497162ac39cec48298bf84846b54b97e02352e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62VCTEM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCda%2BsDh6OzfOrkxrDYqpB9S1tXqRje0UrG4Xx7m1MIpAIhAJwyJh%2BB%2FiYgJuH935ZEx%2BCrytzP8%2FQTk1SBNpNlbUbeKv8DCEUQABoMNjM3NDIzMTgzODA1Igx8dsgf8Dv%2BQo0et0wq3APlrUx06%2B%2B4kBGDESsYUH024c1QlFmqVb2DPx0c%2BJ2qJAJ9I71X0lEWlceEi7wZeHJczVnJhE4Q255Ak2MqAdkBBUZHteCEhDm67CreBtVVHwo42XCPDzk5eYe2K3bEHwCh7NsOo3sCWl%2BDjj45Ls0JkZRZqSSrfQRB9xWayyHBeGNs7zSgFltZi8ehf7pMM5qVekWrFKUkcWdN7qF6Q%2BOMETwK9uyxfwjd%2FjfP12soehfz%2BWFJFuP7E1NnlCdshuEPH7VlJELnQIwaduz1E%2Bx6qYtUcikNNOlqa9mQUVe1eImjTdHbLLXdKqi1LUr5boaNeRNOEA6Z0dcLGdSzbRIFxr4AnwS9p8RJV1M2fznhJxnjFAD0qw7DPSd4hkKwhFFiW9D52Fj3wPgo94yM3k4f2FK4K006QWmR6Rcjng92ErNOq2%2FSieH9c4Pifx2RDy0tBbrx0Www4SJ9Z6uHQhCmYyrIN%2FQZ66%2FSUdBmHlLoAV99MQKd9o%2F%2Fu4%2Fto7vIAQj%2F1zQnINK2FmFADxlh8FNqcgc05HV1kCsfpdPM3ZaV0OS19GN%2BQW9EOWlpyeHy8NvrryCK%2FvHdoFvCQLPLWWpsX%2FDvb1S%2FdriTATbW5KZPzsX6XKJYhPqnntV9ezCo4Y3EBjqkAUlcBqi2leS8srDH%2FomoBHIYbMPW%2FDARNUxfmyllGq7r3Kbv7kmcHlXWGWw%2F5cTqPb%2FnGSJH1jK70YVexrg%2FiEBLbsHRa9Zl5oLPAPkVcf1ph5B4f4RayO67SK4CbkJxNMc1AHiA2gOp8TU4rPw6bxlpg6y82q7czEmbRzjy2A6ylLpXhjuaBDUMCo7UrjPQ0VS%2B8UNf8OoHpLiHxHQWnBeFDsAS&X-Amz-Signature=ae7ace25be938f8f028ece1d5d1598d1bfc112ca3c7cd5d83f7a685bf350b8a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62VCTEM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCda%2BsDh6OzfOrkxrDYqpB9S1tXqRje0UrG4Xx7m1MIpAIhAJwyJh%2BB%2FiYgJuH935ZEx%2BCrytzP8%2FQTk1SBNpNlbUbeKv8DCEUQABoMNjM3NDIzMTgzODA1Igx8dsgf8Dv%2BQo0et0wq3APlrUx06%2B%2B4kBGDESsYUH024c1QlFmqVb2DPx0c%2BJ2qJAJ9I71X0lEWlceEi7wZeHJczVnJhE4Q255Ak2MqAdkBBUZHteCEhDm67CreBtVVHwo42XCPDzk5eYe2K3bEHwCh7NsOo3sCWl%2BDjj45Ls0JkZRZqSSrfQRB9xWayyHBeGNs7zSgFltZi8ehf7pMM5qVekWrFKUkcWdN7qF6Q%2BOMETwK9uyxfwjd%2FjfP12soehfz%2BWFJFuP7E1NnlCdshuEPH7VlJELnQIwaduz1E%2Bx6qYtUcikNNOlqa9mQUVe1eImjTdHbLLXdKqi1LUr5boaNeRNOEA6Z0dcLGdSzbRIFxr4AnwS9p8RJV1M2fznhJxnjFAD0qw7DPSd4hkKwhFFiW9D52Fj3wPgo94yM3k4f2FK4K006QWmR6Rcjng92ErNOq2%2FSieH9c4Pifx2RDy0tBbrx0Www4SJ9Z6uHQhCmYyrIN%2FQZ66%2FSUdBmHlLoAV99MQKd9o%2F%2Fu4%2Fto7vIAQj%2F1zQnINK2FmFADxlh8FNqcgc05HV1kCsfpdPM3ZaV0OS19GN%2BQW9EOWlpyeHy8NvrryCK%2FvHdoFvCQLPLWWpsX%2FDvb1S%2FdriTATbW5KZPzsX6XKJYhPqnntV9ezCo4Y3EBjqkAUlcBqi2leS8srDH%2FomoBHIYbMPW%2FDARNUxfmyllGq7r3Kbv7kmcHlXWGWw%2F5cTqPb%2FnGSJH1jK70YVexrg%2FiEBLbsHRa9Zl5oLPAPkVcf1ph5B4f4RayO67SK4CbkJxNMc1AHiA2gOp8TU4rPw6bxlpg6y82q7czEmbRzjy2A6ylLpXhjuaBDUMCo7UrjPQ0VS%2B8UNf8OoHpLiHxHQWnBeFDsAS&X-Amz-Signature=73b8674dd7c9b5abd10898f5931227e44943772ca8b6055e5fbb80bca6a55f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLH4XJTQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF7iwzSOMXjjEoyT2IaDhMrWE4FcNdIEFdfd7T0JWGChAiEA6iBtuqM6EvGqHzDFiwLLjiEIjOtYk8ezzDa1FEY6CB8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIG4tTyePOI7mhc5ByrcA89DQZ%2Bcx7T6u6%2BxYFlaBJy%2F28y9hWnPxsRrReeXM9gitYJNL%2BrwkI8XsC%2Fh1cbqnxF2XRdX7z6MENzjQSquXSJuV0AgAbE8uHIT96zSmx4VoR9HNgc%2FaVcHT%2Bs%2FMjmylGYSmLriIzCgCsy8M89SB44u5Zm48ZpzXGZ2SzmAme28rqTEvgqS3CRPo6rgpN1Ao8VJVUHtI%2B3QaQ9fW9kImweLFasU8IaB7FcGoyttWvfg1dcQF0W4woEaB7Ec4qOqPdsAPoNWF65HqZmOi2l7rQMnEWOx2vrHB5gD%2B92UvrabtDUw25CFWSvodena2%2FHoOJ9fo8%2FRQtC3n9K%2FW26FZAK%2BWOZcjcTxwh1m6g00dvyBWHlQ2z6JlsHzDF7kn5xlOj%2BqfDhlStU2urCk9Wxu4M7R%2FhfTkm%2F9uMgssbkuXwKtjjgozw1kLzhXOfzTyXOCdK5s8wT3k8Gjc4gevhMe82bwwRGhWMhMt7NjvLo1Kh1WYt5j95D0TyKMTG4oe69uCG0B%2FYyIRe6eqtn%2F2HOfHLofdeOnsb7Ue27mPo2YZqzINUYcN1Y1PjuS25ubrqh3iD07Bm7jMohJFmVyx7V3TGNte5wV%2BAc5SejHyNsq6PTaoxCe0NHUYhnAdOIZMLnhjcQGOqUBfZPr2ADf%2F4jm8FWUKSB3FJwA2kRb8GwVffini2sy2g04za91tT91TS%2F9ClCZAOPOGgt9I6Lb352sdQievKF%2FoQ6m3cCg3wLn4TfFEchJIje3RM8rRcZGmCKyfhT%2BrLquQ3komeOqLHnxkV96GZc0I5dwHzLORu7TmS5e20SXM6M1Q%2F5ZIqb0FMByUw8Gf9FQHENjTgz92P3ncaAjYdcQJ8zdJZSp&X-Amz-Signature=4c40feb55bb2f5344c218d96c6d55d801f7c2197aab0805a4d9d1ed458d4d6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQCTXRAR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCfrjuXEZ0b3Sgn3jfTaZ0z8nZF6vkzc0mrBUW%2Bb5dMywIhAN%2FI13oIDILx6jF2QJlkCkOiCVBYB%2FxWdz%2FC6R%2Bnm0bOKv8DCEUQABoMNjM3NDIzMTgzODA1IgxhOaSBopSeQV74M0kq3AOA6nWVzpQWp5IEPvr3BoWiRIWvGEGgzSPTkLvlEkNecnpCMtQMtm0O1QdtEdfORPGtRWrLDwRmDUonZcHFgtYQUgQCSNsYgxcuBUTLmWZkO2zHPSiSOmSqZn%2F8sui1nITxRmB661KEqmK8%2FIYLmiClVbYBqyYWINdbfSRwwsNrzGvJ5rQPLiVjwDox5ig9CpMgBWZoj340H42XLm0dUZj4CYL8gfmWlFxfoH03yaUP7RaOPyaPRbmdXr04TofvJI%2F7dIq5xVEpfd8AEHUlNsmFq28aQtCH8Uce6LncfCyJejQgMJner0YVa7rWu3nK7joUQzXYMWU017Hk79HQUdTXFWCLDK9WJ%2BlCq%2FEt6aVROXWeO8CGkqiSljAHeOlGFm6nu03hFYjoy1KZ1aPSoBMqKnJK4AhtjAEOf0j4N08rGlYyS276gp8bCMU%2FqU6rRnFcEdQnpmN2Wa0zycxBIxn726qqckvWvywAXo8C0bXKJUO1yi4ckzpf%2FzGHyoWsvHvD1qWAlqx5NNWPxVp9933ldQI%2F0XOf3517lf91AsKtsPI15Vx6zHaPFNnIHp3cT8LJL9%2FxpMbBDfgMEV1HnTGHV5wDmF1o6wz%2Fyd0WN2DKOt1Hd%2FF5T23MbyomKzDz4Y3EBjqkAXqG8CG8yD9ZZZTZMS8ktAyh7%2BOrb%2FtuBhsGdNKv8L5K8pTefK%2B8gcXvKObIhXexyrGROac9LHOLYP%2FNXraJvv5AWVo5tIH4iXnOyr%2BHHXgsExNTFc7oqrnOhyAneQMZ%2FgkxDnQkPgb3iuSQP4PyiFhwl94vYlL4U4BXZXzjwCaY0RYI9nBFx1nWi68yI9VAK3ItZHoCfH9qgYktWhSAoTFAUef%2B&X-Amz-Signature=36322070e9c4f4b6dd37579d15411cd6907be87f3f20ed1308acc815d8c1be1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62VCTEM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCda%2BsDh6OzfOrkxrDYqpB9S1tXqRje0UrG4Xx7m1MIpAIhAJwyJh%2BB%2FiYgJuH935ZEx%2BCrytzP8%2FQTk1SBNpNlbUbeKv8DCEUQABoMNjM3NDIzMTgzODA1Igx8dsgf8Dv%2BQo0et0wq3APlrUx06%2B%2B4kBGDESsYUH024c1QlFmqVb2DPx0c%2BJ2qJAJ9I71X0lEWlceEi7wZeHJczVnJhE4Q255Ak2MqAdkBBUZHteCEhDm67CreBtVVHwo42XCPDzk5eYe2K3bEHwCh7NsOo3sCWl%2BDjj45Ls0JkZRZqSSrfQRB9xWayyHBeGNs7zSgFltZi8ehf7pMM5qVekWrFKUkcWdN7qF6Q%2BOMETwK9uyxfwjd%2FjfP12soehfz%2BWFJFuP7E1NnlCdshuEPH7VlJELnQIwaduz1E%2Bx6qYtUcikNNOlqa9mQUVe1eImjTdHbLLXdKqi1LUr5boaNeRNOEA6Z0dcLGdSzbRIFxr4AnwS9p8RJV1M2fznhJxnjFAD0qw7DPSd4hkKwhFFiW9D52Fj3wPgo94yM3k4f2FK4K006QWmR6Rcjng92ErNOq2%2FSieH9c4Pifx2RDy0tBbrx0Www4SJ9Z6uHQhCmYyrIN%2FQZ66%2FSUdBmHlLoAV99MQKd9o%2F%2Fu4%2Fto7vIAQj%2F1zQnINK2FmFADxlh8FNqcgc05HV1kCsfpdPM3ZaV0OS19GN%2BQW9EOWlpyeHy8NvrryCK%2FvHdoFvCQLPLWWpsX%2FDvb1S%2FdriTATbW5KZPzsX6XKJYhPqnntV9ezCo4Y3EBjqkAUlcBqi2leS8srDH%2FomoBHIYbMPW%2FDARNUxfmyllGq7r3Kbv7kmcHlXWGWw%2F5cTqPb%2FnGSJH1jK70YVexrg%2FiEBLbsHRa9Zl5oLPAPkVcf1ph5B4f4RayO67SK4CbkJxNMc1AHiA2gOp8TU4rPw6bxlpg6y82q7czEmbRzjy2A6ylLpXhjuaBDUMCo7UrjPQ0VS%2B8UNf8OoHpLiHxHQWnBeFDsAS&X-Amz-Signature=16e2d833e78cb5f5c98624cd4c18624680794fa13f6642f9e5ff124883031b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
