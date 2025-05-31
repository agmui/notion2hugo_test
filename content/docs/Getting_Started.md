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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZHWGBH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKkw4WQsCnMqp0SEHinHSX83CytPXof8LkPhDInFMOAIgGlqqcTDYrP6XG2XEiP3U%2BbRN6BU76IGML63vNKA03x0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABCaIWOB6z5qE0iGircA3V69VgRIhtX9l4geCVlKOcu7Ggh%2FveMK7IRmyuxrhAOCGtB%2FEoYYzRklQWqQ%2FebJhomJLCB0twjMXRTtSIGFzCBKrFvOBwNc99vV09%2Bo%2BD27xvQ47kwz0%2BUsh%2BpmkdlpPD0q9E%2B0j5W6Gh4joWCIecWxL3UtJ6YhMkFyQZQUO%2BZkKblB6evIO7oCNhYon2bQ30yxA6W8aoLJg37Fs5b7AWFe548pOroqnpSvDaN51FoIMwEQ0zNiR6iobxvCvb6%2Bxsnb9HXxtExxbndAEjmsiMsT7LVbyOfKNn88BWUWcmVlrLaGkf5BXUsQbR3%2BRT5vh8RlMU550Cs0OLmMJfhl8Y%2FhVlfmI5ymsfIgBQI3kO7HfdOqiXWsjsxn%2FrIx9hSJh0l%2Bj8SRhdDQ2HAIDCB846nEToJj0dGXVTpPHLDMZDR7%2FobrsZY%2BlX6y3EDk4XHxIMJb5aodHjHN%2Bu%2Fr1ygdbDRn%2FujGzQhOCoiKdGcrlkyaFlHqvRf856gtlHjEynUFT0Ud3FV6gK3u7HJ542OKWAIEdmgjq4rZUudhK1obMWi9FQHoUm1bBg9xcMuvjFlymknJ4hlNuslKDOgR4JwEo2V%2FkDKuvuGf64c0eg1AJ9PjX70CmEvsgE3J3xRMNbo7MEGOqUBJ1xx3STc0rJy7SDTdg5L3ZbUGOy46IcRSTTdiXdud1mAz%2FBLBmC4rOn6mq050esKpVAt0NO%2F0P1gd6ft1TUQrWUjxWffIZOXaA4ZF%2BheRDKkWl%2BTkmO1QX1NrQRyiMyYYqG4wp3ioDWYsyTlxWCFuC6SBdXQw4%2Fc5u6expwtRJXSHh%2FLabgCVoTNbz9xIBDIN6V9nrDtuR6GBAgdlhRhhzj33Yqd&X-Amz-Signature=a95642fbf9006d4e4fcfd54e7eb1daae235550c2e40583f46230558ab15af165&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZHWGBH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKkw4WQsCnMqp0SEHinHSX83CytPXof8LkPhDInFMOAIgGlqqcTDYrP6XG2XEiP3U%2BbRN6BU76IGML63vNKA03x0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABCaIWOB6z5qE0iGircA3V69VgRIhtX9l4geCVlKOcu7Ggh%2FveMK7IRmyuxrhAOCGtB%2FEoYYzRklQWqQ%2FebJhomJLCB0twjMXRTtSIGFzCBKrFvOBwNc99vV09%2Bo%2BD27xvQ47kwz0%2BUsh%2BpmkdlpPD0q9E%2B0j5W6Gh4joWCIecWxL3UtJ6YhMkFyQZQUO%2BZkKblB6evIO7oCNhYon2bQ30yxA6W8aoLJg37Fs5b7AWFe548pOroqnpSvDaN51FoIMwEQ0zNiR6iobxvCvb6%2Bxsnb9HXxtExxbndAEjmsiMsT7LVbyOfKNn88BWUWcmVlrLaGkf5BXUsQbR3%2BRT5vh8RlMU550Cs0OLmMJfhl8Y%2FhVlfmI5ymsfIgBQI3kO7HfdOqiXWsjsxn%2FrIx9hSJh0l%2Bj8SRhdDQ2HAIDCB846nEToJj0dGXVTpPHLDMZDR7%2FobrsZY%2BlX6y3EDk4XHxIMJb5aodHjHN%2Bu%2Fr1ygdbDRn%2FujGzQhOCoiKdGcrlkyaFlHqvRf856gtlHjEynUFT0Ud3FV6gK3u7HJ542OKWAIEdmgjq4rZUudhK1obMWi9FQHoUm1bBg9xcMuvjFlymknJ4hlNuslKDOgR4JwEo2V%2FkDKuvuGf64c0eg1AJ9PjX70CmEvsgE3J3xRMNbo7MEGOqUBJ1xx3STc0rJy7SDTdg5L3ZbUGOy46IcRSTTdiXdud1mAz%2FBLBmC4rOn6mq050esKpVAt0NO%2F0P1gd6ft1TUQrWUjxWffIZOXaA4ZF%2BheRDKkWl%2BTkmO1QX1NrQRyiMyYYqG4wp3ioDWYsyTlxWCFuC6SBdXQw4%2Fc5u6expwtRJXSHh%2FLabgCVoTNbz9xIBDIN6V9nrDtuR6GBAgdlhRhhzj33Yqd&X-Amz-Signature=da2cf4657137fd99e84bd70955e2adffea3201ce8704f38504aa6e204ec9e354&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZHWGBH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKkw4WQsCnMqp0SEHinHSX83CytPXof8LkPhDInFMOAIgGlqqcTDYrP6XG2XEiP3U%2BbRN6BU76IGML63vNKA03x0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABCaIWOB6z5qE0iGircA3V69VgRIhtX9l4geCVlKOcu7Ggh%2FveMK7IRmyuxrhAOCGtB%2FEoYYzRklQWqQ%2FebJhomJLCB0twjMXRTtSIGFzCBKrFvOBwNc99vV09%2Bo%2BD27xvQ47kwz0%2BUsh%2BpmkdlpPD0q9E%2B0j5W6Gh4joWCIecWxL3UtJ6YhMkFyQZQUO%2BZkKblB6evIO7oCNhYon2bQ30yxA6W8aoLJg37Fs5b7AWFe548pOroqnpSvDaN51FoIMwEQ0zNiR6iobxvCvb6%2Bxsnb9HXxtExxbndAEjmsiMsT7LVbyOfKNn88BWUWcmVlrLaGkf5BXUsQbR3%2BRT5vh8RlMU550Cs0OLmMJfhl8Y%2FhVlfmI5ymsfIgBQI3kO7HfdOqiXWsjsxn%2FrIx9hSJh0l%2Bj8SRhdDQ2HAIDCB846nEToJj0dGXVTpPHLDMZDR7%2FobrsZY%2BlX6y3EDk4XHxIMJb5aodHjHN%2Bu%2Fr1ygdbDRn%2FujGzQhOCoiKdGcrlkyaFlHqvRf856gtlHjEynUFT0Ud3FV6gK3u7HJ542OKWAIEdmgjq4rZUudhK1obMWi9FQHoUm1bBg9xcMuvjFlymknJ4hlNuslKDOgR4JwEo2V%2FkDKuvuGf64c0eg1AJ9PjX70CmEvsgE3J3xRMNbo7MEGOqUBJ1xx3STc0rJy7SDTdg5L3ZbUGOy46IcRSTTdiXdud1mAz%2FBLBmC4rOn6mq050esKpVAt0NO%2F0P1gd6ft1TUQrWUjxWffIZOXaA4ZF%2BheRDKkWl%2BTkmO1QX1NrQRyiMyYYqG4wp3ioDWYsyTlxWCFuC6SBdXQw4%2Fc5u6expwtRJXSHh%2FLabgCVoTNbz9xIBDIN6V9nrDtuR6GBAgdlhRhhzj33Yqd&X-Amz-Signature=d9b7c03b92dbf87122ec5db569f079197066ede8935bc637a771c12a464b8e26&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3Q3FDD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlzhJU5f4NU8jfWK5kZpTnMpkVhkCSD4r1O5oY0WPwOAiAqt6G3AZOi52ycsQH5AJVxurBCVOxSGN%2BplauA6WHgTiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3VzGUEfPAPFLL0dfKtwDGiQaFeJkhuCYB12qtVxTYTMpFH6Vy3pk1QYh%2BFfg4r1Di8tyX9ViKU5Osv%2BoxiIXluzxOJ6yl99eA6B5wuvKp5QGDsb%2FKG5yLq3P%2F6CZTOGq8il%2BWurXsvKfHiIs55CsNdrnNqXYj1bvQd%2BardV39xYCk0opqNNdBYgSOGrlzujVyB8rZPGAsCX4GLA8ZvmmtB4%2BvLrxv5DBRx1lpd1c2whcLeRIs2v8Tt6Q4CXglS%2F8PBmCRpQNByU1jKdFr3Gy5YqlEHXssHy1p58ZUX8gxHZApPwbFBhCvLvHeAoR%2Bx1avlmRzRJwFrlxCCHLKuG6%2FcjAVkL5MRE3FeY3W0cOU7VKzNj3lwvLq8k653VRO02bz4Sdm8V861eoPuVSD6dRG4uM%2FG%2BjbqE9QiTcuCjnHPDrrjfwo4WsCcJjoNb4Po5QEcQxyafsb22FlG5yHALFRArsZlya0AtslwBuhRY1hKxbpZmXycXP3O2hu31DjqPHpyPyIP0W9Ryuph8MscKHymeEC4gdGijxU9ZuKCN0jrSvG4plw9PFUUYtmZECMCjJZji%2FVPXpGp6sndRGv982cdb3vAOtD30dDe5BjbEXg%2FgbgKXYod7fjZZrQl8vCMZ66asl9FvvMjcPsdYw1MntwQY6pgFq66JxYASaVL8zSbWmJieZq%2BpL%2BRb7p8XbFWdyYx0TncPoztzfvI2JWODt9Kr%2BrGjW9uX5J6JkabDKxv%2BTlZWIXUCJocBvirLqXBAl3jBqsKwcGJLW4Zf1SvxvXPPa5X6b7GjiAN0a%2BRAcOUHVQWOP0ng2qMoLiWY6wk8bzJ1KWsgyJkB1xYiTT3Oq3MmSsvuhccwIQ2k0PXQmTa8EbMCnEwUiEeK%2F&X-Amz-Signature=8dc5c706612f1bc5e4d3af90384b520f16b97007ce6551a5bd2108cc6726a676&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JGMJPCO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLBadSAZYtOGUkFxabN0MGAmO6Bxjl4Pi0vPcwetYV2AiAZCR4g2ntmRSPY0sETB%2BedsLcM45weUsACWgUZ0FnHyyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUFzgaH4mQut%2FpzsYKtwDacofHQV7s4tuWrUzPQpdZvT0i1Fl6vKA1KEt1FSnX3DZ2wkOasq2PusUSpBmK5Amcg3oVL4X3aFtXpushbDFEgJomKTIAWIgelOlgVppZs3SrQXqDeS40vx8Ryjl6qdpxRdYzuzHD1T5WbnTiUUtsY%2FUSZRS2cQtiuNYi1blAmg0dE3GBbh9VZv6pEBaLVZw48M%2BlsaGp%2FdF48FKoLAZYZ0S3WtiIj2803PYzTeG1uRdteciiykAERhT%2BHe%2Bv52zor7qmbU6NTD98EADhqs9AIFKSATlNsxIsoMN5h9C0tjF1tcatAJk3UIThsBlNL3Gs6CKOPvMLygIKPkipysqMmpgAXMaQ%2BDZyOWHsdb9D4N1uQQXyTA8e4Tjweiv%2B8Z%2FKjIwuYlutRAxsRIrspMu8EIlMITbzptNyRk6EyaJYJHnrJKyJWGqb3DrDUxiBdLrjTZ4eGMwxcDC7XpvA1LjaW1nRVvCyboUtN2jzmrOs0%2B62dqEvaysOSdznRxlK6HXAFDU4%2FlqLHlTe58AV15flZjOE4Gu9DCQ5f0DgIG5kxqZERnKnbIqHy6F6ZCLwyGdW%2BhMr3uMqzVVRtvBGuW1dCZhaTrZgsEfr3YSqDWmcA4wOPkFYQ3ihm7Qu3YwsdvswQY6pgHiIdQvIew7MIMZfUlmMlgXFdJBffDvyrqBbvPF%2Bgw1pzWasBR3df4mJviAczMxiDlIgKkGtD6mOTqtxR9E023qJ8LOEBGz%2BN2uWKOXiu1Zwmj7Bh4n0g1aagiXiBe5TpuAKu%2Fi6%2BRYaKWJKI7MoBpPBuJ%2Fpvw8uTuQmP%2BqD%2BLgwLjf%2FY76w09dwpKbPsx6Y4zvhj85DpHfN3VVB4FR8MDzsMSxVJrs&X-Amz-Signature=302c554b7cf372bedf21f809e3816b4a480b5951310dbda812c9d9825b1d024f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZHWGBH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuKkw4WQsCnMqp0SEHinHSX83CytPXof8LkPhDInFMOAIgGlqqcTDYrP6XG2XEiP3U%2BbRN6BU76IGML63vNKA03x0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABCaIWOB6z5qE0iGircA3V69VgRIhtX9l4geCVlKOcu7Ggh%2FveMK7IRmyuxrhAOCGtB%2FEoYYzRklQWqQ%2FebJhomJLCB0twjMXRTtSIGFzCBKrFvOBwNc99vV09%2Bo%2BD27xvQ47kwz0%2BUsh%2BpmkdlpPD0q9E%2B0j5W6Gh4joWCIecWxL3UtJ6YhMkFyQZQUO%2BZkKblB6evIO7oCNhYon2bQ30yxA6W8aoLJg37Fs5b7AWFe548pOroqnpSvDaN51FoIMwEQ0zNiR6iobxvCvb6%2Bxsnb9HXxtExxbndAEjmsiMsT7LVbyOfKNn88BWUWcmVlrLaGkf5BXUsQbR3%2BRT5vh8RlMU550Cs0OLmMJfhl8Y%2FhVlfmI5ymsfIgBQI3kO7HfdOqiXWsjsxn%2FrIx9hSJh0l%2Bj8SRhdDQ2HAIDCB846nEToJj0dGXVTpPHLDMZDR7%2FobrsZY%2BlX6y3EDk4XHxIMJb5aodHjHN%2Bu%2Fr1ygdbDRn%2FujGzQhOCoiKdGcrlkyaFlHqvRf856gtlHjEynUFT0Ud3FV6gK3u7HJ542OKWAIEdmgjq4rZUudhK1obMWi9FQHoUm1bBg9xcMuvjFlymknJ4hlNuslKDOgR4JwEo2V%2FkDKuvuGf64c0eg1AJ9PjX70CmEvsgE3J3xRMNbo7MEGOqUBJ1xx3STc0rJy7SDTdg5L3ZbUGOy46IcRSTTdiXdud1mAz%2FBLBmC4rOn6mq050esKpVAt0NO%2F0P1gd6ft1TUQrWUjxWffIZOXaA4ZF%2BheRDKkWl%2BTkmO1QX1NrQRyiMyYYqG4wp3ioDWYsyTlxWCFuC6SBdXQw4%2Fc5u6expwtRJXSHh%2FLabgCVoTNbz9xIBDIN6V9nrDtuR6GBAgdlhRhhzj33Yqd&X-Amz-Signature=4dd42a9d0bd3aaaa4d1c6ed3a8787ffe716a13c1b492c54c2ce9a8536a662368&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
