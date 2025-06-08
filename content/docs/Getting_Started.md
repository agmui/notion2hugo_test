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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ3BPWF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfcPFgpjxKg491GuSyUytV%2FvC77uWl%2BmGVgJwKA2fprAiAd6BabeA3jhtqGGHcp9ik%2FNa7iTGb62KYqMJp6nokbjCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTVrR0ky0w6iH2aQKtwDetZVgqAqpUMvNAyH0VNORQ%2FzZjyMPBbGQgvXGRQDlh%2BC%2FSr6649Cmy9W1JPM1%2F6UR8ZQ68M0U8ikWsqJ%2FyJH7iMX2dal4Iiip2IsWZwN2UAUEcLHv9Nq9t8HbdrSHdteSDv4VXzuYnca%2FjPrywgKuXzT6cNuiW%2FPlHaDGVVZ%2FzBz%2BWePen8ii3sgnP8r13efI4IzY7nHYecN2TcMHzOi0Px4ipsT%2FNDgZxsvN%2FXMAzRc1tAvoTfteDLxK8jAS4sx7Q8h4T4%2By969mtk9rKeSFdvfgG7UWO5QzzNLwKeIGDE3CwfZ9PzH7FmxWOXwQdz2anml1Qb4FNSjNZza8Uevztx6tJDZ%2BR6cwf73V9lKsY0jq%2F8O%2FbSBhIoRCPaJaqwXzDhxsNB32Ra7lpgL1gbDL1WvWaHqMqHeXzBv%2Fpnm0Aiaj%2FVTSjIKviXYpmAdqo6i4QqoJUk4fbGYTxJWEhcvpd1J7AYWNd51HxRatfCtVJYp5C5LygozPBrmdYS2PqSwJ8cZxqxQDb8sGnFS%2BCReSccbEiXcf2ZsP7x5SZ4Z3qKCyCXdj47SpQxuM2Agi3dfzORxtVQmXKevud8moj955%2BWaP%2BrByRvifBPgFzXQp05FBuWRDhNKn7lbkhwwvbKWwgY6pgFnN%2FPsk6Xx63m7DeZWIQoNa%2FQDSE4fAoCWDj94Xdi8%2FmvKGfCqn2ig4dI%2BWthu%2BboxawjGRxDBr0Gw%2F1TJlDNOFJXSjdqY%2BWupb1e0ehgHKhy6a1wdskLOPB%2BFLF91Qc6pEXvx6XQOuHZ3t137kJVYlQpoYbM%2FKewlSnKTgVShV5gC9bHNmQCugwK3LAN0%2B3kMpQXBgBWSPoh9qR6VUxhs02upFVop&X-Amz-Signature=6ccda1e0cea7ad95b607af885d028ced6bc7570c57be42656a3e653d3a235e95&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ3BPWF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfcPFgpjxKg491GuSyUytV%2FvC77uWl%2BmGVgJwKA2fprAiAd6BabeA3jhtqGGHcp9ik%2FNa7iTGb62KYqMJp6nokbjCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTVrR0ky0w6iH2aQKtwDetZVgqAqpUMvNAyH0VNORQ%2FzZjyMPBbGQgvXGRQDlh%2BC%2FSr6649Cmy9W1JPM1%2F6UR8ZQ68M0U8ikWsqJ%2FyJH7iMX2dal4Iiip2IsWZwN2UAUEcLHv9Nq9t8HbdrSHdteSDv4VXzuYnca%2FjPrywgKuXzT6cNuiW%2FPlHaDGVVZ%2FzBz%2BWePen8ii3sgnP8r13efI4IzY7nHYecN2TcMHzOi0Px4ipsT%2FNDgZxsvN%2FXMAzRc1tAvoTfteDLxK8jAS4sx7Q8h4T4%2By969mtk9rKeSFdvfgG7UWO5QzzNLwKeIGDE3CwfZ9PzH7FmxWOXwQdz2anml1Qb4FNSjNZza8Uevztx6tJDZ%2BR6cwf73V9lKsY0jq%2F8O%2FbSBhIoRCPaJaqwXzDhxsNB32Ra7lpgL1gbDL1WvWaHqMqHeXzBv%2Fpnm0Aiaj%2FVTSjIKviXYpmAdqo6i4QqoJUk4fbGYTxJWEhcvpd1J7AYWNd51HxRatfCtVJYp5C5LygozPBrmdYS2PqSwJ8cZxqxQDb8sGnFS%2BCReSccbEiXcf2ZsP7x5SZ4Z3qKCyCXdj47SpQxuM2Agi3dfzORxtVQmXKevud8moj955%2BWaP%2BrByRvifBPgFzXQp05FBuWRDhNKn7lbkhwwvbKWwgY6pgFnN%2FPsk6Xx63m7DeZWIQoNa%2FQDSE4fAoCWDj94Xdi8%2FmvKGfCqn2ig4dI%2BWthu%2BboxawjGRxDBr0Gw%2F1TJlDNOFJXSjdqY%2BWupb1e0ehgHKhy6a1wdskLOPB%2BFLF91Qc6pEXvx6XQOuHZ3t137kJVYlQpoYbM%2FKewlSnKTgVShV5gC9bHNmQCugwK3LAN0%2B3kMpQXBgBWSPoh9qR6VUxhs02upFVop&X-Amz-Signature=748b0dc2f78739fa1bb77a45c0a42fb6dabdfa5d3e1b3ccadd8282e998a3d981&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ3BPWF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfcPFgpjxKg491GuSyUytV%2FvC77uWl%2BmGVgJwKA2fprAiAd6BabeA3jhtqGGHcp9ik%2FNa7iTGb62KYqMJp6nokbjCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTVrR0ky0w6iH2aQKtwDetZVgqAqpUMvNAyH0VNORQ%2FzZjyMPBbGQgvXGRQDlh%2BC%2FSr6649Cmy9W1JPM1%2F6UR8ZQ68M0U8ikWsqJ%2FyJH7iMX2dal4Iiip2IsWZwN2UAUEcLHv9Nq9t8HbdrSHdteSDv4VXzuYnca%2FjPrywgKuXzT6cNuiW%2FPlHaDGVVZ%2FzBz%2BWePen8ii3sgnP8r13efI4IzY7nHYecN2TcMHzOi0Px4ipsT%2FNDgZxsvN%2FXMAzRc1tAvoTfteDLxK8jAS4sx7Q8h4T4%2By969mtk9rKeSFdvfgG7UWO5QzzNLwKeIGDE3CwfZ9PzH7FmxWOXwQdz2anml1Qb4FNSjNZza8Uevztx6tJDZ%2BR6cwf73V9lKsY0jq%2F8O%2FbSBhIoRCPaJaqwXzDhxsNB32Ra7lpgL1gbDL1WvWaHqMqHeXzBv%2Fpnm0Aiaj%2FVTSjIKviXYpmAdqo6i4QqoJUk4fbGYTxJWEhcvpd1J7AYWNd51HxRatfCtVJYp5C5LygozPBrmdYS2PqSwJ8cZxqxQDb8sGnFS%2BCReSccbEiXcf2ZsP7x5SZ4Z3qKCyCXdj47SpQxuM2Agi3dfzORxtVQmXKevud8moj955%2BWaP%2BrByRvifBPgFzXQp05FBuWRDhNKn7lbkhwwvbKWwgY6pgFnN%2FPsk6Xx63m7DeZWIQoNa%2FQDSE4fAoCWDj94Xdi8%2FmvKGfCqn2ig4dI%2BWthu%2BboxawjGRxDBr0Gw%2F1TJlDNOFJXSjdqY%2BWupb1e0ehgHKhy6a1wdskLOPB%2BFLF91Qc6pEXvx6XQOuHZ3t137kJVYlQpoYbM%2FKewlSnKTgVShV5gC9bHNmQCugwK3LAN0%2B3kMpQXBgBWSPoh9qR6VUxhs02upFVop&X-Amz-Signature=86872228e04c79dfb6386150c6216455cf309768d3c4b7cba28e3c343872034e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJWZGPBO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGZC9n2TQPrJdNzbVLD3gWiWbuQtK7mJD4zhU9DBi7GQIhAMy27uO%2FCmL0DCueRC2LCWBiRIG801HnqiGhTl0ZK9XKKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdi9Y%2F5kr58N2dc7sq3AMMvcJ4qls8%2BT4FC9%2BqoTCTGfA6TCLk6hDhWmK1TjzB02AWbMhgwIYX2srh0nkyPYYXp3kVd3fPIJ7jmtz3qAnD%2BHaV%2FNKVRZpFuhG3JGYufQldn0cD68tQVL%2FWrkPfrkiX%2BDSL5a2%2FFnvCaMXhTGBG99A3dpW%2F%2BZyGp%2FXQ2D%2BjxYqqYhZldGtuUbtq%2FS9%2F1qUKpwhlW7qkhkOhfw6Qa%2FJHdNlfYzGZb0AglN6t4rrTKt9zWsK0X%2BsmBGitkHUrX%2FakSFWs%2B8VQTfhhtlrg2jvmqZlj%2FB%2BwgEBv5JI5YFGdxtCUG5qiD1lEuv8Ey25FbiSx3B99xF0xfPCv69YlILfgKJgrsBJhACm8VE8hP1rkQfZlWmO3xmZS2KR7RHUpFbp7igNWxsgp%2Bb8WlQdEtUmZfHJcv1OX9Sj%2Fomak6otifXzEbeYqEIqo1NSpY0AARv47j1gZLTWIHzXeXudgLL5UmyRFqfeiE6FQ0vQ5R4est18Y7O7HyqSMM2pQLBS4JGxXDX5xxsA%2Fc8n139C7SwT7wbQ%2FRZI9d9PmyMjtP23ovKCVvqo9iiK3helSCt4VoQMdJlrgryf4hkTbZ46yjsCV1WIPA3jxppiz0n%2FcaaQUj3ThSeSpgjApUbizADCYs5bCBjqkAbejTKRD6na7%2Fet0CX4eEHr5ffBsF1s21NLWSlW17l7ZQs96o5ACBGbNhSsuRUiKrpXFPEvKhcfxy7L7eHeJ6RR7Wg64YWxCLEJF4fqPm3B2MeqQBnChv7WfA8zemf9atqc6zqEaw90yaDfuvWNO35IoZJI1wIijbDB2bIT%2B4Hghy8FFI%2F3zo0e3C0NnFzGnC0DoIKdZgDbzFej9P1trbhS7OXFw&X-Amz-Signature=bc635312b34f24c3ba48eab13e0ba8e7e82dea2e60909d82c4034f451763e9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM7Z2UPX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMtXp20yhaq1ceilUyVDE2y4T7Ols5w5aq%2FQUCwkvDJgIgETErV%2FPzesDRnz7RXQW7o8%2F73FWreouE2SXr44y2Y0cqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOLK9erqQuTOQ1mMSrcA1LEUB5EylPRCQRdrPjq3oOI4KMF6ZJVJt53q9L8F9WTy6vHhbXvOryNN87RHCBA01WjiNleN54eFrGp3E%2BL6eSvyiuJrNAp9%2B1Uonj7HxgiCqmBjWvEvOrJN92xTzaaLmvP%2BCemguoyo7qOH1XAfUhFfZUB4TwNY8nHtenKEFhGxfNYFWMFu2uH5QERDw4xqM1aywGBEhB62Sk3bHsy2wMkuqqU7%2BCfQRaAYqiq40GsnORTcsZ8yqsTtyYPOD2U8%2FG26y1DBmouVK3n6fjH4dK2Fz09urgu%2FyW0FE%2BRczEgBYDdgwV%2B6nFpCsDy1xcNFhJgdviQ2GRQDUc8ATyyxzD3lYM%2BYHGa69v09ipKa3kTyEzaQ6zWs6dtXomfzI7UWHnT%2Fj%2BhjVpJ8oc7QeTMwvtq8kvc6CpjfV4T59wUBXvH8kIV1RWGHzFUFDgqx02RIZBUFLffAEFg%2FeBXVOVdIppxNU%2BJ7tM7obpdJHU1kkFxmRfVJmpye3e3ePHxdoBmgOCT9v35sTyKVlLdJKILuD9uclw5b1AnSBdVTs%2FxaVnV5e6Y5EqSdfdM20TwmnwxNG1YQUKfo%2BMdsrV2AkVS75ATtG1jat0VhKaqFIo0mpSROLVegwSjNN2PkaqXMK6zlsIGOqUBoQz1QYiAFHTpr%2B6IF1h91EkHh3JP%2FpxzBF4EZx0wlAgOCAevqgzcXyoeF2%2F9B6GTsFXe%2FWv%2FFCtfx1ZOvgSajiJMRDxseB5tIMH4EPWQSGqIxFls7rUUvyA1J8j7wat0tXNxIeH2OLMKf2WbE87mSDO2%2BlUSXEgSivvcT0opQiqfeZks%2BTpLJhX%2Fi5cPeOnw%2Bh0nXfzc2vJk7vpzmtPMrsZh8Gu7&X-Amz-Signature=4d6a2acb3d06ef70abc308579976c0b82a90f578a4394f26a9b1b3e57864c136&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ3BPWF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfcPFgpjxKg491GuSyUytV%2FvC77uWl%2BmGVgJwKA2fprAiAd6BabeA3jhtqGGHcp9ik%2FNa7iTGb62KYqMJp6nokbjCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BTVrR0ky0w6iH2aQKtwDetZVgqAqpUMvNAyH0VNORQ%2FzZjyMPBbGQgvXGRQDlh%2BC%2FSr6649Cmy9W1JPM1%2F6UR8ZQ68M0U8ikWsqJ%2FyJH7iMX2dal4Iiip2IsWZwN2UAUEcLHv9Nq9t8HbdrSHdteSDv4VXzuYnca%2FjPrywgKuXzT6cNuiW%2FPlHaDGVVZ%2FzBz%2BWePen8ii3sgnP8r13efI4IzY7nHYecN2TcMHzOi0Px4ipsT%2FNDgZxsvN%2FXMAzRc1tAvoTfteDLxK8jAS4sx7Q8h4T4%2By969mtk9rKeSFdvfgG7UWO5QzzNLwKeIGDE3CwfZ9PzH7FmxWOXwQdz2anml1Qb4FNSjNZza8Uevztx6tJDZ%2BR6cwf73V9lKsY0jq%2F8O%2FbSBhIoRCPaJaqwXzDhxsNB32Ra7lpgL1gbDL1WvWaHqMqHeXzBv%2Fpnm0Aiaj%2FVTSjIKviXYpmAdqo6i4QqoJUk4fbGYTxJWEhcvpd1J7AYWNd51HxRatfCtVJYp5C5LygozPBrmdYS2PqSwJ8cZxqxQDb8sGnFS%2BCReSccbEiXcf2ZsP7x5SZ4Z3qKCyCXdj47SpQxuM2Agi3dfzORxtVQmXKevud8moj955%2BWaP%2BrByRvifBPgFzXQp05FBuWRDhNKn7lbkhwwvbKWwgY6pgFnN%2FPsk6Xx63m7DeZWIQoNa%2FQDSE4fAoCWDj94Xdi8%2FmvKGfCqn2ig4dI%2BWthu%2BboxawjGRxDBr0Gw%2F1TJlDNOFJXSjdqY%2BWupb1e0ehgHKhy6a1wdskLOPB%2BFLF91Qc6pEXvx6XQOuHZ3t137kJVYlQpoYbM%2FKewlSnKTgVShV5gC9bHNmQCugwK3LAN0%2B3kMpQXBgBWSPoh9qR6VUxhs02upFVop&X-Amz-Signature=3a5075e024806b4165355b3264486ca1982f5165fca9356a0cfee70401e12ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
