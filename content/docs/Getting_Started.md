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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI2SRK6W%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDGBc2RBL1OrrLJJoXH2d7EQK80WAEt2vHfImKtCbqDvwIhAJL%2F%2FhABzDUnoLPW8ap9MXHbNukiKDriuneyJ2jHmoq4Kv8DCHAQABoMNjM3NDIzMTgzODA1Igwp%2Bog7xQWIOCzn90Mq3AMhsqxUJs5UF5ppRu6bSkOVlI%2B66eQdSTmE2CF4HX4NWf%2FXt%2BvSb6wN4ynAwhkVnFs8xsGtP4ZDyd0dSUfNWt3MN4p%2BJj7QG6JVEyuQJXxYOhKtOazr5tbOc1U3fRECdqhbzSujqiH3KHnqpOU1yZqbA3yYR3KvJMGTPr7nF2HPbsq1kLTXMrRScOmQ5TQeAPkIVfpvuetPC2eId1qHpCx%2F5WS2xQ8jch7FUJJkbC%2BTBrNZrvdNZjcZNylJ738QGkW6IDCGlm8haNCRJRbx8OraChMug0uJKJUsaXDuz9ef28YQ8vtbQ0ojuJLLoHFQQjdOYyLc8eobdCcbxr0DM2LmYSrux7%2FacRUatD7w%2Fig55JaTEH9fPMoOt5k6QEaoYuc6CLNXPRYhbvkSTWNL5gKJLnQDBAi44jRIV3%2FNEAoP25anQTCodjNuncd2lU7%2BmZdSZA1L52Yqd5Gf%2FQIWhszRoSpk%2FHMXXZFGpKEGrbmcSYo036eyF5bJ02Smqlriph37sdmjOEibjK1rN8DwI9y9Ux%2Bn7Cj6S0xivTEt34D9MhIIKXEtHWWHIYEQvqPPg1ohTHhNFfEuouytZ0t4JyZG8AgukKjFlkFWGttzI%2FqdOo6gWka6Bl1pf0KZBDDwjIC%2BBjqkAamWCqrJJBL4%2BU06LskknthU85J6f97jzlI3zgp6a1eoS0MmTOFvJONDYlnnFlRDLoZjxzCLIhV2V8GgfoundkjNbHFUnXek6%2FcnuD909AqhUHw56mQNssB7UcOUu1U13HSmlkL3%2BKkTrR9RP7Mr8JjFyQh2q7mX7BlOJS8oc8wCsK1SrfDfymPXzgHPLO0ME4m%2Fl%2BPdx1tdPK49U8eRPJHIsosR&X-Amz-Signature=15d66c33a09302d5ed37686ac35d64027aed965b8797b2d81a8c4f2bed03be02&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI2SRK6W%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDGBc2RBL1OrrLJJoXH2d7EQK80WAEt2vHfImKtCbqDvwIhAJL%2F%2FhABzDUnoLPW8ap9MXHbNukiKDriuneyJ2jHmoq4Kv8DCHAQABoMNjM3NDIzMTgzODA1Igwp%2Bog7xQWIOCzn90Mq3AMhsqxUJs5UF5ppRu6bSkOVlI%2B66eQdSTmE2CF4HX4NWf%2FXt%2BvSb6wN4ynAwhkVnFs8xsGtP4ZDyd0dSUfNWt3MN4p%2BJj7QG6JVEyuQJXxYOhKtOazr5tbOc1U3fRECdqhbzSujqiH3KHnqpOU1yZqbA3yYR3KvJMGTPr7nF2HPbsq1kLTXMrRScOmQ5TQeAPkIVfpvuetPC2eId1qHpCx%2F5WS2xQ8jch7FUJJkbC%2BTBrNZrvdNZjcZNylJ738QGkW6IDCGlm8haNCRJRbx8OraChMug0uJKJUsaXDuz9ef28YQ8vtbQ0ojuJLLoHFQQjdOYyLc8eobdCcbxr0DM2LmYSrux7%2FacRUatD7w%2Fig55JaTEH9fPMoOt5k6QEaoYuc6CLNXPRYhbvkSTWNL5gKJLnQDBAi44jRIV3%2FNEAoP25anQTCodjNuncd2lU7%2BmZdSZA1L52Yqd5Gf%2FQIWhszRoSpk%2FHMXXZFGpKEGrbmcSYo036eyF5bJ02Smqlriph37sdmjOEibjK1rN8DwI9y9Ux%2Bn7Cj6S0xivTEt34D9MhIIKXEtHWWHIYEQvqPPg1ohTHhNFfEuouytZ0t4JyZG8AgukKjFlkFWGttzI%2FqdOo6gWka6Bl1pf0KZBDDwjIC%2BBjqkAamWCqrJJBL4%2BU06LskknthU85J6f97jzlI3zgp6a1eoS0MmTOFvJONDYlnnFlRDLoZjxzCLIhV2V8GgfoundkjNbHFUnXek6%2FcnuD909AqhUHw56mQNssB7UcOUu1U13HSmlkL3%2BKkTrR9RP7Mr8JjFyQh2q7mX7BlOJS8oc8wCsK1SrfDfymPXzgHPLO0ME4m%2Fl%2BPdx1tdPK49U8eRPJHIsosR&X-Amz-Signature=4196ba28e534e6f7a595884b0c70f2a643af3544128edd13fde4fb359da8d27b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICZ6SD3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAk5%2FmroZnB60VPHhFjp5VQLLC%2FT5aDONYvi3pmcxC9tAiEApHrR81E5oR0imV9dHKWCDXpzTF%2FooAup894S8zliH3gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDP1BkSFI6%2BcIqOySryrcAyuwxZMr3rrD6tazjouvFiGRo%2FSzSTq%2BHgVxZre41%2FzIdJNLCDxcTb2vOTedMuKRj8K9qTozLbvVkFRQbu4DD2Ffbroo6TgQ5%2BF%2BIi%2F16Yi0RanVOSPYlbYkPpSkgjbECItYXVJN4x%2FA1wIkvsPRKH%2FnLwzKcpAF7%2FwTUAWqlzCwWrSedpsJl%2BU%2Fu4LzW3GChj%2F5%2BItkdygOOwMbs6JIRQ7XqdbtWS9aZonEnE5JSfithYkdUiW53G4aUxOU6Mxm7YwK9UrFWQb3s6xN9I2MPdLbJwUz687ir19iFdzGIkujoccHP%2BePRhJvQKeX2F8gtiMSq9qXpcMiJohqZyIIz%2Fp3p8ze3YmQ31YUuE1dv3StD%2FmFoN2FJ7fSjvEUfvZUhyP4Y%2B7yZSqnkfYaWwrdyPZrblnSK8LoKzhUGsefS1bNy3PTwXfSfEPoWlfIONU6QwL%2F%2B5DTdfNERSTO0aH9E3nJ36Z5QO%2BMn2qfz1BX5ajvcMntRozVIE6Oj%2BKOT84QScEK68sb2AmQ8hRCsdNORa5jznxiDU%2BFCOqmFz5L5ECBLpZ9lq%2BhRVf2FVy290D7IEiSNdW4vYekuA3lDm4QJcgsQ4KmmaEcfjS0EoOpODuOV8QjhAlDqErtoX2gMPmLgL4GOqUBDNJaj1Hio%2FXcInoz6a8LGXf3xSnApYWSLwk3QqZKiyQdKPu3rOjBOZkNhaGlSpb5ZNfyDmLoezasmEm0qrinw0%2B28qK9XkqMM79T2Mfwv%2F11u9ecJuN0CFzUAqXY1c87KmtnYQ2H7tQKYgqGztU%2FeKKlCLfrU2ufJIXzrCDr50wSEulmrO77nObr53HPNY%2BHwIU51DP1oa1f3p7o4CQfBNmbChUT&X-Amz-Signature=a653518e049739689d986b0af0ddf1319a8c7fc98a79b9ba1ac0d2f45612a804&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBCCBQFZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDQvJ%2FAKhBtnYhYVG5Dx28nTe%2FXHm1FC%2ByxO%2BZxMasWNAiAPIikjzgSkWrAq%2FuVjEXu%2FODLICJM5g1vAIhFb5u6exir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMX0JUpK9pRx%2Bt5rPDKtwD81MTn9Xintu1XxuVodr52vuAbuV%2Bdf4o57SEdErh0JxC6SXMQQRuUyvTNoqSz8%2Fe%2BsD3XF4CIOWbaGXf0sg87yZpqhBc3lV6MlTQrcOheFAacFsfcQz0UcMyY5%2B4XyjZUpb6bQ5FwJycebh0E6QslEgPhGhYLKWoI6R3DrCDjqKxaajPPOZh1bmvg8lnXnUl3BNEmsTdZ%2BaBzRFs3tNC44g9k9IiVfrsbpvOoOviFqG7NKLonEBimiWza5gksIMY%2FqiaYGhmzIBkLi%2BFZimpUMWr3vJBV1f%2Fh1HiaFPSVnFVgN3oezcaN7AnJXbYt9vAcoryhW4J%2FPDZlE9d1OmEfR4nlVUth6giWqNdcQhQGvJq282dcccOLFRvHj0b%2B7GZEMnkVHxsD%2FxDXomfpfU2UVuv1u4XURHzauwILklTbXtdD6b%2FRRN8G3XSHvjdnqxHk19PqHFL2dW%2BwkAPRgMHpwkiB4Edihq4eCzi5bmPy5JUXBMZd%2FRgcN5NFEURt5gsx75ffy7ubdlyIUk0xw8KioaAkieEOYiaLICLEGSupAeuxkLOfHWa5ul7YfCKR0x%2F0kYrYbrI%2BFM24LZx0R7ivPSJeulU37tHh9ijbr5VSWGLSSIGIELtxrRy%2B7UwxYuAvgY6pgGg0uji2bGlDBgMLqoDR2e0lKHRLFAVi8exZJZ9NcLzjZLbE1qalKBJhVfydfKPXss1mY8yB%2B8VPBDcp86x74k%2BbLaGyv22itWHpqccgY4ypjVCbUl4U8PPeVWk5wQhWmqSDHnk34QZQyk%2FwrVvDxZb%2F4BZLfP3QSEM%2FZuEnb5uTfe5uJPzKMD3anQj2OKYN8SI3xDgg%2Fn37yvFYW4Ph%2Bh3O0qNu5Yx&X-Amz-Signature=70fd64d2bf7ff6a63e441b99d4a0f96086a2ace045fb4bdc83b68217a8960c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI2SRK6W%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDGBc2RBL1OrrLJJoXH2d7EQK80WAEt2vHfImKtCbqDvwIhAJL%2F%2FhABzDUnoLPW8ap9MXHbNukiKDriuneyJ2jHmoq4Kv8DCHAQABoMNjM3NDIzMTgzODA1Igwp%2Bog7xQWIOCzn90Mq3AMhsqxUJs5UF5ppRu6bSkOVlI%2B66eQdSTmE2CF4HX4NWf%2FXt%2BvSb6wN4ynAwhkVnFs8xsGtP4ZDyd0dSUfNWt3MN4p%2BJj7QG6JVEyuQJXxYOhKtOazr5tbOc1U3fRECdqhbzSujqiH3KHnqpOU1yZqbA3yYR3KvJMGTPr7nF2HPbsq1kLTXMrRScOmQ5TQeAPkIVfpvuetPC2eId1qHpCx%2F5WS2xQ8jch7FUJJkbC%2BTBrNZrvdNZjcZNylJ738QGkW6IDCGlm8haNCRJRbx8OraChMug0uJKJUsaXDuz9ef28YQ8vtbQ0ojuJLLoHFQQjdOYyLc8eobdCcbxr0DM2LmYSrux7%2FacRUatD7w%2Fig55JaTEH9fPMoOt5k6QEaoYuc6CLNXPRYhbvkSTWNL5gKJLnQDBAi44jRIV3%2FNEAoP25anQTCodjNuncd2lU7%2BmZdSZA1L52Yqd5Gf%2FQIWhszRoSpk%2FHMXXZFGpKEGrbmcSYo036eyF5bJ02Smqlriph37sdmjOEibjK1rN8DwI9y9Ux%2Bn7Cj6S0xivTEt34D9MhIIKXEtHWWHIYEQvqPPg1ohTHhNFfEuouytZ0t4JyZG8AgukKjFlkFWGttzI%2FqdOo6gWka6Bl1pf0KZBDDwjIC%2BBjqkAamWCqrJJBL4%2BU06LskknthU85J6f97jzlI3zgp6a1eoS0MmTOFvJONDYlnnFlRDLoZjxzCLIhV2V8GgfoundkjNbHFUnXek6%2FcnuD909AqhUHw56mQNssB7UcOUu1U13HSmlkL3%2BKkTrR9RP7Mr8JjFyQh2q7mX7BlOJS8oc8wCsK1SrfDfymPXzgHPLO0ME4m%2Fl%2BPdx1tdPK49U8eRPJHIsosR&X-Amz-Signature=e7400650489dac76edb8904f722fdc9d20cfb95bc3a7cfe80804d3db37aec6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
