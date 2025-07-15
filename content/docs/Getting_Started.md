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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32KT26I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCID4rnWg%2FxhLqImk%2BxV13BsMGUC7tJ4i%2FIfIM14RqrOhgAiEAw3Ov9NbTlFGvKT9ANbbZ4wpNPsDxdMnJOUuq7iQA0uQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN03YR%2FoVJuTJa%2Bm0CrcA7krdL5PbSVyi3yxsFnBRKFP75mbUmobteOYC7DQmPuOD35b7ss2KHKm7fbBl1aqvYJGtHYK4eqIbUJ9hUfbKohZn4dNR2l8K6vehCycZpjW1BDm8QyR1LmRyFVuomgm0eym9QFSniOgkP8sI3b6zXhXwUoyIhqPCtIWsN7oER5LK6CvLAgACOVeq6FbGtVnwPAszNJ6uR02yvVxWB9ip%2BFBHsx%2FI4IdVyIcGjBxm8aS4rYdSryzE5dKiNP4XoU%2BpP0SBjb8byXn1I6Y4H9935N30ISeFAwU00vPYWhoNK%2Bka2sEPTE8vyJzfYXNjnxk4ZIF3svOO6X5LX1GO%2FTmGbkeVO%2BOh%2FRI3628qag25GJWR5KEptYMBnW5umIxalDBIDKkqgiptS9ZVZF5wNRJx8iwxIxq1f%2BUe9sB%2F%2FkWABnIY2q3syqM3xXzGkbbPg5L974lt9RphzFvfv8JUUQPpWnm0z2QYK89LlX3ioj9S0juhsksSAEYNRYa81uDdCpK%2BtrJRfMcloMvv1yvw5Oj5IpvtYCAuz%2FAukjX95u7xR7rkVkHucE6xOglX%2BajwN2e6%2FFX95JluFwG5sQbyXgc%2Fagz8JfW%2BHoOcK8B5qu6dZSNL7wryABJot0CwrG8MI%2BC2MMGOqUBbPS3KQm7jJkdZDJ1E4ArrQMCjRfXJjYVJpE7p2pbDkqegccOfkRMNm4aGHgrVKBuK%2BPgvY94R%2FxEkvkNVhBvbuGHTc%2Fn%2FQ4LERsg4yefqj9qWRtxQPklmi%2FNgWFKynT1kA8PuRHixDMuxiA63gL%2BjQpFguW6wgvnmUg2Uk%2FGCUFvJf9d3q2cLfoNY2%2FrWlXH1B4secVQmUQIaZZwPTXjTMHHMkpf&X-Amz-Signature=8a526229f74aeff61ac5c920a0ff6ec2bb13a8000a91e34125653d39a3a216ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32KT26I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCID4rnWg%2FxhLqImk%2BxV13BsMGUC7tJ4i%2FIfIM14RqrOhgAiEAw3Ov9NbTlFGvKT9ANbbZ4wpNPsDxdMnJOUuq7iQA0uQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN03YR%2FoVJuTJa%2Bm0CrcA7krdL5PbSVyi3yxsFnBRKFP75mbUmobteOYC7DQmPuOD35b7ss2KHKm7fbBl1aqvYJGtHYK4eqIbUJ9hUfbKohZn4dNR2l8K6vehCycZpjW1BDm8QyR1LmRyFVuomgm0eym9QFSniOgkP8sI3b6zXhXwUoyIhqPCtIWsN7oER5LK6CvLAgACOVeq6FbGtVnwPAszNJ6uR02yvVxWB9ip%2BFBHsx%2FI4IdVyIcGjBxm8aS4rYdSryzE5dKiNP4XoU%2BpP0SBjb8byXn1I6Y4H9935N30ISeFAwU00vPYWhoNK%2Bka2sEPTE8vyJzfYXNjnxk4ZIF3svOO6X5LX1GO%2FTmGbkeVO%2BOh%2FRI3628qag25GJWR5KEptYMBnW5umIxalDBIDKkqgiptS9ZVZF5wNRJx8iwxIxq1f%2BUe9sB%2F%2FkWABnIY2q3syqM3xXzGkbbPg5L974lt9RphzFvfv8JUUQPpWnm0z2QYK89LlX3ioj9S0juhsksSAEYNRYa81uDdCpK%2BtrJRfMcloMvv1yvw5Oj5IpvtYCAuz%2FAukjX95u7xR7rkVkHucE6xOglX%2BajwN2e6%2FFX95JluFwG5sQbyXgc%2Fagz8JfW%2BHoOcK8B5qu6dZSNL7wryABJot0CwrG8MI%2BC2MMGOqUBbPS3KQm7jJkdZDJ1E4ArrQMCjRfXJjYVJpE7p2pbDkqegccOfkRMNm4aGHgrVKBuK%2BPgvY94R%2FxEkvkNVhBvbuGHTc%2Fn%2FQ4LERsg4yefqj9qWRtxQPklmi%2FNgWFKynT1kA8PuRHixDMuxiA63gL%2BjQpFguW6wgvnmUg2Uk%2FGCUFvJf9d3q2cLfoNY2%2FrWlXH1B4secVQmUQIaZZwPTXjTMHHMkpf&X-Amz-Signature=2a9b341c0ceedd28505ecc55013ffd50bc7cac91c633f5b19d6711e326f9cfae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32KT26I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCID4rnWg%2FxhLqImk%2BxV13BsMGUC7tJ4i%2FIfIM14RqrOhgAiEAw3Ov9NbTlFGvKT9ANbbZ4wpNPsDxdMnJOUuq7iQA0uQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN03YR%2FoVJuTJa%2Bm0CrcA7krdL5PbSVyi3yxsFnBRKFP75mbUmobteOYC7DQmPuOD35b7ss2KHKm7fbBl1aqvYJGtHYK4eqIbUJ9hUfbKohZn4dNR2l8K6vehCycZpjW1BDm8QyR1LmRyFVuomgm0eym9QFSniOgkP8sI3b6zXhXwUoyIhqPCtIWsN7oER5LK6CvLAgACOVeq6FbGtVnwPAszNJ6uR02yvVxWB9ip%2BFBHsx%2FI4IdVyIcGjBxm8aS4rYdSryzE5dKiNP4XoU%2BpP0SBjb8byXn1I6Y4H9935N30ISeFAwU00vPYWhoNK%2Bka2sEPTE8vyJzfYXNjnxk4ZIF3svOO6X5LX1GO%2FTmGbkeVO%2BOh%2FRI3628qag25GJWR5KEptYMBnW5umIxalDBIDKkqgiptS9ZVZF5wNRJx8iwxIxq1f%2BUe9sB%2F%2FkWABnIY2q3syqM3xXzGkbbPg5L974lt9RphzFvfv8JUUQPpWnm0z2QYK89LlX3ioj9S0juhsksSAEYNRYa81uDdCpK%2BtrJRfMcloMvv1yvw5Oj5IpvtYCAuz%2FAukjX95u7xR7rkVkHucE6xOglX%2BajwN2e6%2FFX95JluFwG5sQbyXgc%2Fagz8JfW%2BHoOcK8B5qu6dZSNL7wryABJot0CwrG8MI%2BC2MMGOqUBbPS3KQm7jJkdZDJ1E4ArrQMCjRfXJjYVJpE7p2pbDkqegccOfkRMNm4aGHgrVKBuK%2BPgvY94R%2FxEkvkNVhBvbuGHTc%2Fn%2FQ4LERsg4yefqj9qWRtxQPklmi%2FNgWFKynT1kA8PuRHixDMuxiA63gL%2BjQpFguW6wgvnmUg2Uk%2FGCUFvJf9d3q2cLfoNY2%2FrWlXH1B4secVQmUQIaZZwPTXjTMHHMkpf&X-Amz-Signature=4460f09d4746730c740e9dbd7d73734fd15eff0b8672a8cf87c401f8282e46cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ42NDJY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCcBcfIIxYfDblfI7r7bLDn8eV6ZUw%2FL1JQK79FEUeJ4gIhAItDVKYmj5V12ta8c%2FiyXRwxaCiyetT5MYD2m7Ins%2BESKv8DCEAQABoMNjM3NDIzMTgzODA1Igzrsc%2BgKLf3CQAwEYoq3AN4eeBIXED256E2UUlQ2AMfDHCbjr9Ya0hR6tytd%2BG1sqq7Hl%2FMVsPAVwVg4QZHTVO9n%2BJkN7MJG5JBTEST9IhdfU1EER1k11c%2BwMnAuCzEbd3eNY6EmrKJXKNPCcJE1cGGI2xXxiX0x8iCgkUWVEMq311ujbB8010JL8pDXWuS0IvoK%2B9rA6rdCNRcwHYBtwszYvzbpf8%2FeFhTUxgI2IyTGh2lr%2Bg6hTBIdhW41uwZEvAcQQguupKgD%2FYFfxguUQ4sgW8WGSmcQopB59dohh1NkpfUoVqwq9c0rKC10CdgxdHrkqv9cy3nW2ATBRTSn6DnV1pJMfUXYyjdDeMRS1sLBtl%2B%2F%2F1MQaqerIf%2B45iJhFjESqVF1ZXuBV4%2Fvf70d%2F7Wq4%2BoVba6IVXhNiGUmaXgQoTK9eFWmDBCz6OmaCnDu3cIC8rpRyNHJnkVc0Wpz2ztIp%2BupyM4y2oIJvB5CHGeZTawDndLtm1yt1%2FL%2F8Nebacy3rpOooj3SeBK%2BFU4Nf0fVDdUz2%2Bbop7YSEnPrlc9AgOTJPQsh8Aird04BIEuA9lNiXJdjDkcAMoCYrfMGbxPSljcIT7esKbfs3fQvGzuPKWZpfW6SScB6XmpTimFpJC8IeV2oe3YG0RGITCkgtjDBjqkAULfw01SGIWW17qXgQwe9rms6Zz1YplHQxYOIW%2BqBqMiMUViZqzWe9BfvXWq0f7gFz2sDCNQdwjHPXIHBdxYkGcCjbCy5bDXq%2BhbcpMAKhSPBJ%2FFFJpop2NmgybiDTJR0%2FSYD0qiteXtVkOn6Ku5Kogt22Tq6Ei9aSVsiNDURF7h3i9cVe4%2BrnX%2BsFMvFmkk4iD%2Br5GCy9un8RKqBuU3fgysD4Mr&X-Amz-Signature=80fdbe023153e68089768f6e70b522e33979a45f6f3dfccdec3834d22f9bdb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37IWSGS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBbsQuvJ4oFh3RteQSLqgzQzhqvbNQYuS%2Fidtd4hiTjmAiEA6JfJpIbtgYbSWSKWH67IjWefXKFaGRRLKWkhh7gWvsgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKZJ9ZioLNFWgGKsCSrcA9eanjFmSM96QI0mR0bjyIGl8TM%2BumKEwqaAzt8yXyveU%2Fdl1akApZ5spChUzLOXI4HsZ%2FG%2FIf0%2BCDBNOgKM8krifiktT%2BnwlmChq9Uf1JMbIsYt8Z6YIiYK0%2BxvCVjRUr6lepPOK68MKh3f7zUha%2ByZ7voDKP1OaO5Jnc69rfb857nAV1OlSAc%2FCTpehqOzBq7LGCJ93B4SlQst7yRhnwmSDkGsMm5oFzdq%2FM3iWKArT5gs2ylQZCGtVwlpXqZYoo4X%2BkzU3uez4hz7prVsadTvICxl3%2Bko5dBwusznZNAiU69JYMJdk%2BEY6NFItrxwHE3GW34LIF5ovVz70zS6FSSk%2BMt56T9jldBGhcD7qAEGd%2F4dGOlSi%2B21Q1h9ZKkOz%2FovcVNWt%2BzY8OVZwZNc6B3Y9AAq8iR9YIFewnGHnd%2BtpJjjika2Djygt%2FAc4lAW%2F6VPg6vInZMAWDdgCMmR3hR2MHEbklTfDHlgFjFA5kWv26ovc9fJtq4WGbfNSWDjmdPFIZ7owNCNo2ZNuMmhtco2clooTvukdFRP0SlWx9pA0fODSxh7GtT9T%2FXxbKmkHgY3JQf2DKKR4jTOw6EinTW6n%2FDH0Pj%2FBxWDBfKSOuc%2BasXDlT48dxGMNmByMIuB2MMGOqUB2kghP%2BbR4mzsJWNaVQuVXQ%2BXEeAID1GI4%2B%2FBICFjd0e38k7o04ZDdYm7Xs5bDm6kkP9pIejKzG27L4VAhdofWYftjEK8EPK7Ub95FpIy05d0EtX%2FTuO5fHxOLfjw5C4qaW4iMzUaqlRIRB1ZNVlc0%2Blp2EOF2qIvXwnhfUBPNi3p4xbGj9aYycTnHnyN25QPVOWTwf1jYJs8Le%2BZz6B43kEmEm2s&X-Amz-Signature=9c4664e70adea35b8482a683200d6eb67742c76ed68998f4d18728f9455d482e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U32KT26I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCID4rnWg%2FxhLqImk%2BxV13BsMGUC7tJ4i%2FIfIM14RqrOhgAiEAw3Ov9NbTlFGvKT9ANbbZ4wpNPsDxdMnJOUuq7iQA0uQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN03YR%2FoVJuTJa%2Bm0CrcA7krdL5PbSVyi3yxsFnBRKFP75mbUmobteOYC7DQmPuOD35b7ss2KHKm7fbBl1aqvYJGtHYK4eqIbUJ9hUfbKohZn4dNR2l8K6vehCycZpjW1BDm8QyR1LmRyFVuomgm0eym9QFSniOgkP8sI3b6zXhXwUoyIhqPCtIWsN7oER5LK6CvLAgACOVeq6FbGtVnwPAszNJ6uR02yvVxWB9ip%2BFBHsx%2FI4IdVyIcGjBxm8aS4rYdSryzE5dKiNP4XoU%2BpP0SBjb8byXn1I6Y4H9935N30ISeFAwU00vPYWhoNK%2Bka2sEPTE8vyJzfYXNjnxk4ZIF3svOO6X5LX1GO%2FTmGbkeVO%2BOh%2FRI3628qag25GJWR5KEptYMBnW5umIxalDBIDKkqgiptS9ZVZF5wNRJx8iwxIxq1f%2BUe9sB%2F%2FkWABnIY2q3syqM3xXzGkbbPg5L974lt9RphzFvfv8JUUQPpWnm0z2QYK89LlX3ioj9S0juhsksSAEYNRYa81uDdCpK%2BtrJRfMcloMvv1yvw5Oj5IpvtYCAuz%2FAukjX95u7xR7rkVkHucE6xOglX%2BajwN2e6%2FFX95JluFwG5sQbyXgc%2Fagz8JfW%2BHoOcK8B5qu6dZSNL7wryABJot0CwrG8MI%2BC2MMGOqUBbPS3KQm7jJkdZDJ1E4ArrQMCjRfXJjYVJpE7p2pbDkqegccOfkRMNm4aGHgrVKBuK%2BPgvY94R%2FxEkvkNVhBvbuGHTc%2Fn%2FQ4LERsg4yefqj9qWRtxQPklmi%2FNgWFKynT1kA8PuRHixDMuxiA63gL%2BjQpFguW6wgvnmUg2Uk%2FGCUFvJf9d3q2cLfoNY2%2FrWlXH1B4secVQmUQIaZZwPTXjTMHHMkpf&X-Amz-Signature=16079e3e22148d3e3170042ccc7fe97233d3f5c558d03a604e34b08c2130f0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
