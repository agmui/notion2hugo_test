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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSEERBX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCRNzPkvM3P5BPOVPcCCiWWjOCw9QSTX1yuEb626G7b%2FwIhAIVJuBsni%2FGk544U5pOEw4CRoxLbEXhB7Q2MO34iN1ySKv8DCHYQABoMNjM3NDIzMTgzODA1IgzYGtSrJvJSmxJ1P4Iq3AOvHL7GXV4Tykn8f96A9Qo6Q%2BoTr0WgBpjuHUjOezhUHpUmOoLAtmbgjVCLMf1hxTBKM41%2BuSL%2B7OYpdOxYhyeckq5rLqZbDuLHY3VPLBlZDEZNaX6p7xCc6rtN8pNOGdVC%2FOcAI3CbaSdmT9bs2gww%2F%2FN%2B6kAIVa%2Bpjd%2FEveCIS4i1bXjLViYIOp%2B6s7ygSEOKnYiA15nu%2BzM%2FBi4vzFTySGKfqGc6%2BNDR1%2BkxvRgLKv3KNzm5Kwfw3Ah873BToOajLnLM4KBcob%2Fe5aRX3ND1TwRi%2BCB3IzYNE%2BuE1or%2Bgbl2XNfAqfXdg1gl3ql4PQk448fK2fxomGMl207G5c1QxJjIb0cK5VYjAmAyIQbFrsxWmGBl%2BHKwh1zG%2FTrRaytvHwMgfczPGxHM%2Fo3frISWWj6aoOZuB%2B6raQVjZnZY1Rqw%2B0906nqZLu0LfTAaWA5kurURcaJnqWw6BHbUrz3M2Ie8wv6Hg1FUHOlzmhIDyUbDV3CCfuxbrJOMaZJMu6zrzs4gx%2FO7XnX4bEXtdSNnd%2Fygo%2B6WcGkFMZQXA2SCZNer3wyIpJiV533ktknYwsqIy3k7bDlHS%2BForwq51TO7pd7H0%2FnXdVWHnc1nNgPp0%2FvQTdlwO1muDWPgLjCLjK%2FDBjqkAfqbOUEZ14hNgXunIObAbwbWSc9l23mSSL5ofmcN0isI215nl29PMG%2FKroQXVRtPtWitCI2fhJbL7qxYAQfaDU8O3H4ZDlCBo%2BGd7vz%2BpSkBLsZExNdDujK4KWBVhRlonBFABOOTRyj2OZXPZXxyuTue1%2BohiEgSFkAEDMtfbrNByyDO06IRQQAj%2FrsHZwt2TT0hHHGtA4ZMvZHo9ROfvUEA9X7I&X-Amz-Signature=4b7fcd602825f349eb4d41c482cbbe8b8cde71d1c344a803dc50f2cb5529c324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSEERBX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCRNzPkvM3P5BPOVPcCCiWWjOCw9QSTX1yuEb626G7b%2FwIhAIVJuBsni%2FGk544U5pOEw4CRoxLbEXhB7Q2MO34iN1ySKv8DCHYQABoMNjM3NDIzMTgzODA1IgzYGtSrJvJSmxJ1P4Iq3AOvHL7GXV4Tykn8f96A9Qo6Q%2BoTr0WgBpjuHUjOezhUHpUmOoLAtmbgjVCLMf1hxTBKM41%2BuSL%2B7OYpdOxYhyeckq5rLqZbDuLHY3VPLBlZDEZNaX6p7xCc6rtN8pNOGdVC%2FOcAI3CbaSdmT9bs2gww%2F%2FN%2B6kAIVa%2Bpjd%2FEveCIS4i1bXjLViYIOp%2B6s7ygSEOKnYiA15nu%2BzM%2FBi4vzFTySGKfqGc6%2BNDR1%2BkxvRgLKv3KNzm5Kwfw3Ah873BToOajLnLM4KBcob%2Fe5aRX3ND1TwRi%2BCB3IzYNE%2BuE1or%2Bgbl2XNfAqfXdg1gl3ql4PQk448fK2fxomGMl207G5c1QxJjIb0cK5VYjAmAyIQbFrsxWmGBl%2BHKwh1zG%2FTrRaytvHwMgfczPGxHM%2Fo3frISWWj6aoOZuB%2B6raQVjZnZY1Rqw%2B0906nqZLu0LfTAaWA5kurURcaJnqWw6BHbUrz3M2Ie8wv6Hg1FUHOlzmhIDyUbDV3CCfuxbrJOMaZJMu6zrzs4gx%2FO7XnX4bEXtdSNnd%2Fygo%2B6WcGkFMZQXA2SCZNer3wyIpJiV533ktknYwsqIy3k7bDlHS%2BForwq51TO7pd7H0%2FnXdVWHnc1nNgPp0%2FvQTdlwO1muDWPgLjCLjK%2FDBjqkAfqbOUEZ14hNgXunIObAbwbWSc9l23mSSL5ofmcN0isI215nl29PMG%2FKroQXVRtPtWitCI2fhJbL7qxYAQfaDU8O3H4ZDlCBo%2BGd7vz%2BpSkBLsZExNdDujK4KWBVhRlonBFABOOTRyj2OZXPZXxyuTue1%2BohiEgSFkAEDMtfbrNByyDO06IRQQAj%2FrsHZwt2TT0hHHGtA4ZMvZHo9ROfvUEA9X7I&X-Amz-Signature=a00cba0071897b238c44b1a9fc95f0b45a6a03b61f77c46833a4422f7989702e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSEERBX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCRNzPkvM3P5BPOVPcCCiWWjOCw9QSTX1yuEb626G7b%2FwIhAIVJuBsni%2FGk544U5pOEw4CRoxLbEXhB7Q2MO34iN1ySKv8DCHYQABoMNjM3NDIzMTgzODA1IgzYGtSrJvJSmxJ1P4Iq3AOvHL7GXV4Tykn8f96A9Qo6Q%2BoTr0WgBpjuHUjOezhUHpUmOoLAtmbgjVCLMf1hxTBKM41%2BuSL%2B7OYpdOxYhyeckq5rLqZbDuLHY3VPLBlZDEZNaX6p7xCc6rtN8pNOGdVC%2FOcAI3CbaSdmT9bs2gww%2F%2FN%2B6kAIVa%2Bpjd%2FEveCIS4i1bXjLViYIOp%2B6s7ygSEOKnYiA15nu%2BzM%2FBi4vzFTySGKfqGc6%2BNDR1%2BkxvRgLKv3KNzm5Kwfw3Ah873BToOajLnLM4KBcob%2Fe5aRX3ND1TwRi%2BCB3IzYNE%2BuE1or%2Bgbl2XNfAqfXdg1gl3ql4PQk448fK2fxomGMl207G5c1QxJjIb0cK5VYjAmAyIQbFrsxWmGBl%2BHKwh1zG%2FTrRaytvHwMgfczPGxHM%2Fo3frISWWj6aoOZuB%2B6raQVjZnZY1Rqw%2B0906nqZLu0LfTAaWA5kurURcaJnqWw6BHbUrz3M2Ie8wv6Hg1FUHOlzmhIDyUbDV3CCfuxbrJOMaZJMu6zrzs4gx%2FO7XnX4bEXtdSNnd%2Fygo%2B6WcGkFMZQXA2SCZNer3wyIpJiV533ktknYwsqIy3k7bDlHS%2BForwq51TO7pd7H0%2FnXdVWHnc1nNgPp0%2FvQTdlwO1muDWPgLjCLjK%2FDBjqkAfqbOUEZ14hNgXunIObAbwbWSc9l23mSSL5ofmcN0isI215nl29PMG%2FKroQXVRtPtWitCI2fhJbL7qxYAQfaDU8O3H4ZDlCBo%2BGd7vz%2BpSkBLsZExNdDujK4KWBVhRlonBFABOOTRyj2OZXPZXxyuTue1%2BohiEgSFkAEDMtfbrNByyDO06IRQQAj%2FrsHZwt2TT0hHHGtA4ZMvZHo9ROfvUEA9X7I&X-Amz-Signature=450b1d36fa9ac670c695e6bbf0803e38a164d55375f587294b5fea7972f342bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRADEQ35%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFJ1vGa7hlEA9tmY6SxQtuueNqm3I7N6f9dcyWd4GHqhAiEAohq8tl%2Fp8cCoqH8m6NjdZ6uRmfqpxO296wdrTXqs2NMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPu0SLt62NhaBIZNfCrcA025OBRDTPpgJN7bBUnG%2BHkDWIfNIfpMCOLco%2BaLAIjfa6BN2w2jegkeq2nnOE8LAzkTwiy8hAcAqjnhGu7D1bSQCDmNuiVcE%2FRB1Ct7HGL7mAj9a0Ddc%2FkijyVbroZnTUxUY%2BxyRFj1GLu3KSA9Jr6b%2F6Dm%2BYXkuu7efDjoyZvoKj8OpN8Pr2Xs8j9f9v9lbQIOflN5XvIgnNzBCnAwbnfNjb%2BAcUkACqTZ5xkZoVB9ryeLDj5xARVvvCnSvkxRjxNkD8gMyP9Y5DXYwc2jzFf5koXKP2RMfavdVG7WkYigyKlPifmc7vVn51Qt5irvybHQdk%2BwSnYjfYPYQ6J%2BGL9Rjsu4cvUPoMflFCcA%2F2BB0iywBng1aFL75i%2FyciDea21EvxuwOXu%2FJvc1vTl%2BHGPzOAzDd9xIsLWNwsv0ja7WDFIRXaUFpQgXJuKEQvoVR9kxoQ0apVF19OdEMvTdU2lk0a3tP9I9Vkl5l9dpntQ2u2IIeQM0iZX7lT%2FF%2FW8k7KwbDBpYcwDzsZEi94HlohAbVwVxXKXZeSv173jEI8kBzKJN8V%2FUOpYhUd2u%2B4qkV2VHk%2B1zwWKfHa2hbvQy1cJvF%2BMTtufOcOED0%2B3K1oyzzimnJygZS2%2BbjAo1MNCMr8MGOqUBGUMWokhBGKQ%2BFEKmLgXKwVlpR5aEOMQs6Lh%2FQyw44Cml33wCaqIbg7Cj3kU7GBVMVL8fQggfV%2BCj2W49BDcPtP0Ltk4eEbTw7jWn%2BNGg42Y3ISQl%2FrZQOcGCflEa%2BmImZnFuMr71qPMpHKvzwDFv0qiYayEEXojFxwIf7hwlub1m7EEPLxiftU0g1yBdVDMqZodjeHLAICkYuPdBzwy7X7UD53aJ&X-Amz-Signature=d0e53f887cea66946336ff2fb96cc14a681db3f51396fa019c6c21ea84dbb43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUT4H3PK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBuMAo3sSLhJj3WhIa52%2B8EIvXYgLSUy0DCfcDRV5DGIAiBzE6zz7rsTclXjC215rNm%2BbzpbWJ2ZRxLk7taZcc0ZvCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMiPgmuQ1Dh5IJx6onKtwD89MKNCQIvwgBPdnGMPCOKXkj%2FNEZQVa0owx1yBjCO%2F6793nTZlUoFeA%2B9coWQ4k6jF2yGeQeWUf%2BiKuj9GEN9QJQi2wwaytmV6cH%2FnpGzlhZ8kx88QSevIkSSW9QQuPCedMd3R0p%2F3fZT82962cGv1CjwtUCUePQKq%2BhUD9WW6Jtxi0hbGEP1VmB43vYesumCfjCUXQhEcyTzr4cDOZNY90cl0RtlwjdvhuBxdmvqMJcE4njmlHI5XXIac4hiQBIVVqKVr%2FYE3pBxxWxJvmZfDnAN9Uwt2uAlzegVN3pjxK4QqYPKm5et9DC7iMfRwcYZiELdK7Th1rcQp1Lj9KjNZeaIOTwKv4LEeuCT3GP0XqjsEFca7KpG8HydsFxrwn%2BKQgS045YKtupSAdUqrZVqrWBggIXaIWIDQXCQ0%2F1IWQEuxTq7%2Fi7iO4HDf%2Boy6w5xMLHyLWsYbTOalHSPnGcElwywiD%2BDo7DBFnGFFuPSp1V%2FZJH9%2BIVKGB4mWKdf9Yp%2Fll5029J%2FdVkf%2FXzROriKMOQ6YmjR%2FhHLgOXvA0uSr4zdmMY9tqlWAERWLl2GIg5cVYJYeGgDph8nmEi6A6GrfN85nCHV3JT1q98KK1WVKvxO55N%2FJ5Lql8DnIsw0IyvwwY6pgGx1Njnb0%2BZmPa52irRccM5OUZLzaDS9RexmnDYXCLYJLe5XhxTl8c3xcbWZoryagAg74ODTQ4tIccxHbeLR%2BPNvw4soJH93K5TlUgox%2FrxsE47CCJTyGU9vmCxXbiER%2Beut2APPP5gW050uGeX93eBazxjod6Po1VIVlW%2F%2Bvu90rOmHQO0QQdUv%2B2Ea7nbvKhTSA5bVH2rflqenzteaW8v8ZmDg5DH&X-Amz-Signature=7837411ca398fb5cb14fc78496d27485440707d86bf2f0f18796608530659a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPSEERBX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCRNzPkvM3P5BPOVPcCCiWWjOCw9QSTX1yuEb626G7b%2FwIhAIVJuBsni%2FGk544U5pOEw4CRoxLbEXhB7Q2MO34iN1ySKv8DCHYQABoMNjM3NDIzMTgzODA1IgzYGtSrJvJSmxJ1P4Iq3AOvHL7GXV4Tykn8f96A9Qo6Q%2BoTr0WgBpjuHUjOezhUHpUmOoLAtmbgjVCLMf1hxTBKM41%2BuSL%2B7OYpdOxYhyeckq5rLqZbDuLHY3VPLBlZDEZNaX6p7xCc6rtN8pNOGdVC%2FOcAI3CbaSdmT9bs2gww%2F%2FN%2B6kAIVa%2Bpjd%2FEveCIS4i1bXjLViYIOp%2B6s7ygSEOKnYiA15nu%2BzM%2FBi4vzFTySGKfqGc6%2BNDR1%2BkxvRgLKv3KNzm5Kwfw3Ah873BToOajLnLM4KBcob%2Fe5aRX3ND1TwRi%2BCB3IzYNE%2BuE1or%2Bgbl2XNfAqfXdg1gl3ql4PQk448fK2fxomGMl207G5c1QxJjIb0cK5VYjAmAyIQbFrsxWmGBl%2BHKwh1zG%2FTrRaytvHwMgfczPGxHM%2Fo3frISWWj6aoOZuB%2B6raQVjZnZY1Rqw%2B0906nqZLu0LfTAaWA5kurURcaJnqWw6BHbUrz3M2Ie8wv6Hg1FUHOlzmhIDyUbDV3CCfuxbrJOMaZJMu6zrzs4gx%2FO7XnX4bEXtdSNnd%2Fygo%2B6WcGkFMZQXA2SCZNer3wyIpJiV533ktknYwsqIy3k7bDlHS%2BForwq51TO7pd7H0%2FnXdVWHnc1nNgPp0%2FvQTdlwO1muDWPgLjCLjK%2FDBjqkAfqbOUEZ14hNgXunIObAbwbWSc9l23mSSL5ofmcN0isI215nl29PMG%2FKroQXVRtPtWitCI2fhJbL7qxYAQfaDU8O3H4ZDlCBo%2BGd7vz%2BpSkBLsZExNdDujK4KWBVhRlonBFABOOTRyj2OZXPZXxyuTue1%2BohiEgSFkAEDMtfbrNByyDO06IRQQAj%2FrsHZwt2TT0hHHGtA4ZMvZHo9ROfvUEA9X7I&X-Amz-Signature=1c12e0163c88b77247898657e8a2277ff327029a5b79120b9e9501bef9dd76d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
