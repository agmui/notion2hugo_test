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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINXPKXG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGD10EqwWH3586Vmb30ym62UMBU00z%2BAnP2Xzrei4AeAiB9vzLfV%2BSAFIhmjy4hzr%2FkKgzvK32tAVS04SlaoBk21CqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsA3u7oU6bmccopnlKtwD8%2FCSHyC4l919KEK31FQyecBTq51Sp%2FCW%2Bqcf2%2FClKM1dzNdxQ0bwocgOYx1MfdMd5RsPQ12IM6UEL0OacdeGEKrwNqBdz5BiOOBPnkqpBJcwxxJzsuE4JkbQS2hPFEnD7HGeEBXCGfswsVnqf80OBtlYwticFpqxDBNLiGJOEZbMq6dTkUp5NI7TIm9GpaRlwCYFgDBELfleyrO3seQdR2yZHFY3ikpcHOUDmS5uUL3bSM3%2BVvJZzL8I64IfhBcjvu367p0kUAKz%2BJRitEnWipf9rqrssuhnooz1GKnYHcppQ4ZidGaThjSwuLcLrqFVJNogzLG2OI8oSiWVvITvP0akv43Czpsi%2BvTUh2T3Uxwq4k517yoP8bwpg5wVPmp1LFrp3f8ZJKvjjApUzmflYuMSN2CPqeuOtGWZdfo6ZUU0mZ9%2B2zWzP2FqJv96mTAL%2B5p8iRG0HkSwQzeqwEfqhymyHozO987qicNwlBfRfMxFxnuOlWq%2BFH7llrhCpgLt2r3DPagR2xRb5nUjVNbv%2BlJtRwfP40h6jN04Ii8AXylrdG4uW4T%2BM5XXXrNhVvd7%2F1tBAxCoqQTA%2B9ZabUekNFV2mkLO9WGGBZnKLbNnDalQfsQ6%2BJuyksSm7CAwvpPxwwY6pgFAspkKIQoYxZ9H3h36UKFBEu%2BlIi3USS%2FGjXG6mHmWVhJhy12KKXydUXxC7TnLSIKOwldWQkvwYxE3oGawGe6yb%2FGYaZT0JSs%2FNztWrcEHBqIPAVBVBOhhoL3xbrijJOgnsFA7LXg%2FhX9CDrYE7B1WoRbbm%2FDkjpRq%2FWzVQavDkT1K%2BS6fqTtWMFrtvQXpWMFXaBCjWMujklRU07CdowfcJEv1FlbJ&X-Amz-Signature=00af458d06d848091d4c5b56e0f3a058c07416e13592b3ce977789d295f9d137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINXPKXG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGD10EqwWH3586Vmb30ym62UMBU00z%2BAnP2Xzrei4AeAiB9vzLfV%2BSAFIhmjy4hzr%2FkKgzvK32tAVS04SlaoBk21CqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsA3u7oU6bmccopnlKtwD8%2FCSHyC4l919KEK31FQyecBTq51Sp%2FCW%2Bqcf2%2FClKM1dzNdxQ0bwocgOYx1MfdMd5RsPQ12IM6UEL0OacdeGEKrwNqBdz5BiOOBPnkqpBJcwxxJzsuE4JkbQS2hPFEnD7HGeEBXCGfswsVnqf80OBtlYwticFpqxDBNLiGJOEZbMq6dTkUp5NI7TIm9GpaRlwCYFgDBELfleyrO3seQdR2yZHFY3ikpcHOUDmS5uUL3bSM3%2BVvJZzL8I64IfhBcjvu367p0kUAKz%2BJRitEnWipf9rqrssuhnooz1GKnYHcppQ4ZidGaThjSwuLcLrqFVJNogzLG2OI8oSiWVvITvP0akv43Czpsi%2BvTUh2T3Uxwq4k517yoP8bwpg5wVPmp1LFrp3f8ZJKvjjApUzmflYuMSN2CPqeuOtGWZdfo6ZUU0mZ9%2B2zWzP2FqJv96mTAL%2B5p8iRG0HkSwQzeqwEfqhymyHozO987qicNwlBfRfMxFxnuOlWq%2BFH7llrhCpgLt2r3DPagR2xRb5nUjVNbv%2BlJtRwfP40h6jN04Ii8AXylrdG4uW4T%2BM5XXXrNhVvd7%2F1tBAxCoqQTA%2B9ZabUekNFV2mkLO9WGGBZnKLbNnDalQfsQ6%2BJuyksSm7CAwvpPxwwY6pgFAspkKIQoYxZ9H3h36UKFBEu%2BlIi3USS%2FGjXG6mHmWVhJhy12KKXydUXxC7TnLSIKOwldWQkvwYxE3oGawGe6yb%2FGYaZT0JSs%2FNztWrcEHBqIPAVBVBOhhoL3xbrijJOgnsFA7LXg%2FhX9CDrYE7B1WoRbbm%2FDkjpRq%2FWzVQavDkT1K%2BS6fqTtWMFrtvQXpWMFXaBCjWMujklRU07CdowfcJEv1FlbJ&X-Amz-Signature=4369131188ed2c20aed839d32cfc406ea5d5c102f5a16476384e1603d1f97348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINXPKXG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGD10EqwWH3586Vmb30ym62UMBU00z%2BAnP2Xzrei4AeAiB9vzLfV%2BSAFIhmjy4hzr%2FkKgzvK32tAVS04SlaoBk21CqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsA3u7oU6bmccopnlKtwD8%2FCSHyC4l919KEK31FQyecBTq51Sp%2FCW%2Bqcf2%2FClKM1dzNdxQ0bwocgOYx1MfdMd5RsPQ12IM6UEL0OacdeGEKrwNqBdz5BiOOBPnkqpBJcwxxJzsuE4JkbQS2hPFEnD7HGeEBXCGfswsVnqf80OBtlYwticFpqxDBNLiGJOEZbMq6dTkUp5NI7TIm9GpaRlwCYFgDBELfleyrO3seQdR2yZHFY3ikpcHOUDmS5uUL3bSM3%2BVvJZzL8I64IfhBcjvu367p0kUAKz%2BJRitEnWipf9rqrssuhnooz1GKnYHcppQ4ZidGaThjSwuLcLrqFVJNogzLG2OI8oSiWVvITvP0akv43Czpsi%2BvTUh2T3Uxwq4k517yoP8bwpg5wVPmp1LFrp3f8ZJKvjjApUzmflYuMSN2CPqeuOtGWZdfo6ZUU0mZ9%2B2zWzP2FqJv96mTAL%2B5p8iRG0HkSwQzeqwEfqhymyHozO987qicNwlBfRfMxFxnuOlWq%2BFH7llrhCpgLt2r3DPagR2xRb5nUjVNbv%2BlJtRwfP40h6jN04Ii8AXylrdG4uW4T%2BM5XXXrNhVvd7%2F1tBAxCoqQTA%2B9ZabUekNFV2mkLO9WGGBZnKLbNnDalQfsQ6%2BJuyksSm7CAwvpPxwwY6pgFAspkKIQoYxZ9H3h36UKFBEu%2BlIi3USS%2FGjXG6mHmWVhJhy12KKXydUXxC7TnLSIKOwldWQkvwYxE3oGawGe6yb%2FGYaZT0JSs%2FNztWrcEHBqIPAVBVBOhhoL3xbrijJOgnsFA7LXg%2FhX9CDrYE7B1WoRbbm%2FDkjpRq%2FWzVQavDkT1K%2BS6fqTtWMFrtvQXpWMFXaBCjWMujklRU07CdowfcJEv1FlbJ&X-Amz-Signature=3dbcb4d03042f3ff9809fe0019c276f18a0f33fe010dc7bc201f221f1ccc187d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PK3XGWT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDajUsPF%2Fq7tfi2XSwVa2AKfLJurG1f2gnD%2Bh57O0aPBgIhANtZxmTY6BwvDx6v%2BMKB6XNYY8Y3k%2B33Abwv2Rh94C30KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpojI%2FJm7ZUzfoDkwq3APE%2FePPsO8BZwQUvLoIE7IApM%2BMSWxzwhil5wN06gNgu2vrX0EPavh6Rde2MmQQFcRm31sKk7PqYSrm2xf3B97ReMoapgCC0a9x%2BTsdvSFAEYdhJhilHJUTstF6CiKlYnYZcMDdOLQ77bKebaAhKMKie6D9nXcrFcHBg2usjiVg2uMPUYicuY1vjZUNbzCPW%2F7LdYlBbw5tZ0L%2Fpmgo4XvdCoy%2BwtJix8a%2Ba%2Fov%2FywV8QVBDZwywujgtaLBByIWqO8mkXtTakQEPTEq9k1gqlNSKoDC3ALEyahhbL1SchzFf0o6q6yyE%2FieZZOvr59skzlO0wZkLqheuJk2h30AVz4uESyWyDrns1KjoxXnDJyFQcEq1CnNM2PjLFe%2FqOcjwV7FxI6pSF4uTKSof90ZxOxLvaeQ6UfQ9mXj0rOOwt9IDPAoyYANtTAgkRa4AFY8bUtPDeHHbPflMbD%2B%2Bugh1%2F6vH0QQAfBo7Q45KTbECnCG3hUcWrr0iOVH5Ko7P%2B%2B%2FICzEwChajVbHw2VNol2jloKYdbbGGg6oelP%2FYJgFSdzvHnuH05n57qRSzu%2BTG1gDutSen1605U2bjGzDfa%2FxTd5S72v7VHbPl38NkRDsWGMRdy5j5mvJ7DoWLvg9IjC2l%2FHDBjqkAWZ6GJETc37FdI%2BnbpeIfPd5%2Fcxanr6rrTeExB%2Bncr9UX%2FsRaXQ1g%2BAMDB5rWHIILqduwAn3sB9nJdbhDKkzaTWt6q1V6VOIN8VfWUHabKjtDhyi9hfGFZaOSn%2BeLqpTPDowo78Z7M2yg5ghoWAM%2Fz3UbLWuAUods3ZrPlq14XQ4FgDJv%2BJM9%2FDPhWJbWDr6EeWBHM399qyJ2xyTA9maAXKVvvj9&X-Amz-Signature=2448d75e94f5c070a61991e51b75890c869d059191aec379e115f6ff293422e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJTBYA7V%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx%2BFOFHIIvfcsU0m7jdWgA63O3GD0NK0xf0OtyPOcunwIhAO7E6fE3VmyiJtz4%2B2VerUdFRmnK5G0jWAZoqw%2BQpv32KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr4uJ1s9%2Fx8aGMb5Eq3AOBR73BlBAig6E4MMg1BbQEtei%2FQrn15iPgkNdjp48t%2Fgg2yJPWavj0XKVMBvpqILVoMrNoM1PZz4%2BI%2FihTQKPHyxUEHwSlfbj8EkJ%2Fy9jK2jGVM%2B3y%2BGsQ2rn6DeW6XhzoFkeRew76I%2BrvMZlLF8mnuU1kB9BpQMhAwehtgw93F7le91qCksZ6nwHezrlvIgJb6glugwJjM3p5vw3bivr7zFgUKglUlua8D0PPsTf2gA1qyW1JUQZ8qsj4p2yYGRXBJKvin7bJIJi9oyZTEK74%2FK8TrdszgEo2bQlX%2FXUNi668UOoe%2Fo02X8CHG3vXkrOrkoEemDsFL5mjTZuxGUe%2B0qfGrxkCipZwpW4htGipnEBj2xQDM1dC%2Beawyoo5WmQwK1xcc1EY5rQtKFe8GeAapnybmV0Tq6Kn7%2BCBigzsnwL6yZ8uF8qe%2B1zF0OyQ%2BxY%2BBPp6G3BdueRbIgiSs%2BCz0lVLOfDtLgbIbSHn1ZMZNdJQ83%2BgBEf0Fu361pv2DViPzQLkW3XKO9wdsbvyATy4qRquxgoSNb8JgUrso%2BNRgxdQf44nqUp9mjO1A9SoQA1B%2Flh3lgBLEz4foYUfIQEl21S%2B0EJx7bDCoWAlUXOANZQmnx%2BkP5EYjb%2F7UjCHl%2FHDBjqkAWALpGZKUAM9%2BpGiFQeIpb5%2FHKFcZwFphaZAQTLfHKaCSUnAQA2Q3VtGiiL%2F0ZIJ3RCT2%2FNf%2BEsy4qXYceBoS0aFcHqvScOTRf%2FCF034PWF81UOwjZtE0lh%2BpnXe0R36GA4SW4DxbBeR1CtH%2FXxJKaAYxdINVJd8g5MqlQDNjbdOvYU%2BjRSP6xkuvlOuQOVkPMRzfOI1rfTlMUHVfPpcxH0KBN%2Fq&X-Amz-Signature=db1156d2847df038ecdcadb66011c462fed481f332673750c329ff8aab3cb7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TINXPKXG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGD10EqwWH3586Vmb30ym62UMBU00z%2BAnP2Xzrei4AeAiB9vzLfV%2BSAFIhmjy4hzr%2FkKgzvK32tAVS04SlaoBk21CqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsA3u7oU6bmccopnlKtwD8%2FCSHyC4l919KEK31FQyecBTq51Sp%2FCW%2Bqcf2%2FClKM1dzNdxQ0bwocgOYx1MfdMd5RsPQ12IM6UEL0OacdeGEKrwNqBdz5BiOOBPnkqpBJcwxxJzsuE4JkbQS2hPFEnD7HGeEBXCGfswsVnqf80OBtlYwticFpqxDBNLiGJOEZbMq6dTkUp5NI7TIm9GpaRlwCYFgDBELfleyrO3seQdR2yZHFY3ikpcHOUDmS5uUL3bSM3%2BVvJZzL8I64IfhBcjvu367p0kUAKz%2BJRitEnWipf9rqrssuhnooz1GKnYHcppQ4ZidGaThjSwuLcLrqFVJNogzLG2OI8oSiWVvITvP0akv43Czpsi%2BvTUh2T3Uxwq4k517yoP8bwpg5wVPmp1LFrp3f8ZJKvjjApUzmflYuMSN2CPqeuOtGWZdfo6ZUU0mZ9%2B2zWzP2FqJv96mTAL%2B5p8iRG0HkSwQzeqwEfqhymyHozO987qicNwlBfRfMxFxnuOlWq%2BFH7llrhCpgLt2r3DPagR2xRb5nUjVNbv%2BlJtRwfP40h6jN04Ii8AXylrdG4uW4T%2BM5XXXrNhVvd7%2F1tBAxCoqQTA%2B9ZabUekNFV2mkLO9WGGBZnKLbNnDalQfsQ6%2BJuyksSm7CAwvpPxwwY6pgFAspkKIQoYxZ9H3h36UKFBEu%2BlIi3USS%2FGjXG6mHmWVhJhy12KKXydUXxC7TnLSIKOwldWQkvwYxE3oGawGe6yb%2FGYaZT0JSs%2FNztWrcEHBqIPAVBVBOhhoL3xbrijJOgnsFA7LXg%2FhX9CDrYE7B1WoRbbm%2FDkjpRq%2FWzVQavDkT1K%2BS6fqTtWMFrtvQXpWMFXaBCjWMujklRU07CdowfcJEv1FlbJ&X-Amz-Signature=13c9fd79782e4aa547cf88bad85a83367742ecbcc82733c7143f9572c343ec4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
