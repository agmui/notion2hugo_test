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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY6XAM2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2F%2FYc%2Be97kygdbUtUI7efEjwMSnx5nfUzo7GKjuFx2AiB3JmIGDXAAipUv26Z2reZn%2Fg%2F8B8ambArIwvjI%2B1GYPSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnCQVdOTx0EfWETHNKtwDh2rJ6oyEfZhFdqQWdim4mCfNtRJ%2FLjz%2F7coseiQu%2BzYVoGhkxBHKhKQQ%2FoPx9AYb1wsCNe3269PQ8RsV9KS14%2BGBJB19eHxNNo99HOuwd0FWFOr9aAC4PtFoRko31WdM3mELM59fpYdg7%2FglJSEiySURJUBKmJOJGV9PwTSXJ9oi1KIL3Atjj1SZH9RDTt%2FWRorqu8qivHm%2FXYgr5Kyify9PwqNTDpUQsGiWngz3683VaoEen9bOKm2I%2BTCjTiwPq5ytyLCKGWMAE2TAh9Z2KF2LO6fS2uDUqxzSLbsfvF%2Fj6Vv3PnoO6rBPwmWXVW30UP8OxFK8%2F3L2vPqkSyEuXGLLRdyWJxpjqPWBoqWrPxpsoGrYjc2JDBqi%2FlFd2QEUr1PvqgXgmEu5psB7DbvKkQ8zRejqp1Iu3kaQPWW1q6OVN%2BR6ffQhhFfpgFMnkTfQ%2BL2ehqjHzuEy39jgi%2FqiEzpOoi860eHru7og%2BKkvt%2F1zep%2FrSap7K19%2F5VZbDenpPt%2FYjMqsdHE9C92p1dusuT1px8HN0rwS9viTMPnQS79c1UlFJitfgtLFsMBcm86Qki8s1ffzoycV%2B9idrexVtEBqI9ZV%2FNMgszt9C4f0IbQCXJgnjNO10KicvBUwiKn9wgY6pgENcfqpY4fTdPK%2Ff%2BMPHrB1Y%2Bb4XsatzlQ7g2Ib2nI3OCw1st%2FczryroLzuU%2F4o3oBX5rCpL1jFmbzKpbuYkPJAVuwOmpwdmQS5vrHY7mnYFN4nZaXAylEBPg7Tuk5oTZgpcVqF3iPML5gnoeWWUVbYl%2F7hqtV68gOBLTwuHGmutkC1lUjTrZivxwPRSV5J05uhcw1ANJBdrzTVJvuOrgD%2F3HcS7UmG&X-Amz-Signature=22e4e301a5f9dc7f6ae648dd74e22aa7ed25b7f58f8623b1537fb197266ed6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY6XAM2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2F%2FYc%2Be97kygdbUtUI7efEjwMSnx5nfUzo7GKjuFx2AiB3JmIGDXAAipUv26Z2reZn%2Fg%2F8B8ambArIwvjI%2B1GYPSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnCQVdOTx0EfWETHNKtwDh2rJ6oyEfZhFdqQWdim4mCfNtRJ%2FLjz%2F7coseiQu%2BzYVoGhkxBHKhKQQ%2FoPx9AYb1wsCNe3269PQ8RsV9KS14%2BGBJB19eHxNNo99HOuwd0FWFOr9aAC4PtFoRko31WdM3mELM59fpYdg7%2FglJSEiySURJUBKmJOJGV9PwTSXJ9oi1KIL3Atjj1SZH9RDTt%2FWRorqu8qivHm%2FXYgr5Kyify9PwqNTDpUQsGiWngz3683VaoEen9bOKm2I%2BTCjTiwPq5ytyLCKGWMAE2TAh9Z2KF2LO6fS2uDUqxzSLbsfvF%2Fj6Vv3PnoO6rBPwmWXVW30UP8OxFK8%2F3L2vPqkSyEuXGLLRdyWJxpjqPWBoqWrPxpsoGrYjc2JDBqi%2FlFd2QEUr1PvqgXgmEu5psB7DbvKkQ8zRejqp1Iu3kaQPWW1q6OVN%2BR6ffQhhFfpgFMnkTfQ%2BL2ehqjHzuEy39jgi%2FqiEzpOoi860eHru7og%2BKkvt%2F1zep%2FrSap7K19%2F5VZbDenpPt%2FYjMqsdHE9C92p1dusuT1px8HN0rwS9viTMPnQS79c1UlFJitfgtLFsMBcm86Qki8s1ffzoycV%2B9idrexVtEBqI9ZV%2FNMgszt9C4f0IbQCXJgnjNO10KicvBUwiKn9wgY6pgENcfqpY4fTdPK%2Ff%2BMPHrB1Y%2Bb4XsatzlQ7g2Ib2nI3OCw1st%2FczryroLzuU%2F4o3oBX5rCpL1jFmbzKpbuYkPJAVuwOmpwdmQS5vrHY7mnYFN4nZaXAylEBPg7Tuk5oTZgpcVqF3iPML5gnoeWWUVbYl%2F7hqtV68gOBLTwuHGmutkC1lUjTrZivxwPRSV5J05uhcw1ANJBdrzTVJvuOrgD%2F3HcS7UmG&X-Amz-Signature=f3ca6fd906bdfab93d48a22b692e292efbe28ce5b05d85cd109827bee4dc5c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY6XAM2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2F%2FYc%2Be97kygdbUtUI7efEjwMSnx5nfUzo7GKjuFx2AiB3JmIGDXAAipUv26Z2reZn%2Fg%2F8B8ambArIwvjI%2B1GYPSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnCQVdOTx0EfWETHNKtwDh2rJ6oyEfZhFdqQWdim4mCfNtRJ%2FLjz%2F7coseiQu%2BzYVoGhkxBHKhKQQ%2FoPx9AYb1wsCNe3269PQ8RsV9KS14%2BGBJB19eHxNNo99HOuwd0FWFOr9aAC4PtFoRko31WdM3mELM59fpYdg7%2FglJSEiySURJUBKmJOJGV9PwTSXJ9oi1KIL3Atjj1SZH9RDTt%2FWRorqu8qivHm%2FXYgr5Kyify9PwqNTDpUQsGiWngz3683VaoEen9bOKm2I%2BTCjTiwPq5ytyLCKGWMAE2TAh9Z2KF2LO6fS2uDUqxzSLbsfvF%2Fj6Vv3PnoO6rBPwmWXVW30UP8OxFK8%2F3L2vPqkSyEuXGLLRdyWJxpjqPWBoqWrPxpsoGrYjc2JDBqi%2FlFd2QEUr1PvqgXgmEu5psB7DbvKkQ8zRejqp1Iu3kaQPWW1q6OVN%2BR6ffQhhFfpgFMnkTfQ%2BL2ehqjHzuEy39jgi%2FqiEzpOoi860eHru7og%2BKkvt%2F1zep%2FrSap7K19%2F5VZbDenpPt%2FYjMqsdHE9C92p1dusuT1px8HN0rwS9viTMPnQS79c1UlFJitfgtLFsMBcm86Qki8s1ffzoycV%2B9idrexVtEBqI9ZV%2FNMgszt9C4f0IbQCXJgnjNO10KicvBUwiKn9wgY6pgENcfqpY4fTdPK%2Ff%2BMPHrB1Y%2Bb4XsatzlQ7g2Ib2nI3OCw1st%2FczryroLzuU%2F4o3oBX5rCpL1jFmbzKpbuYkPJAVuwOmpwdmQS5vrHY7mnYFN4nZaXAylEBPg7Tuk5oTZgpcVqF3iPML5gnoeWWUVbYl%2F7hqtV68gOBLTwuHGmutkC1lUjTrZivxwPRSV5J05uhcw1ANJBdrzTVJvuOrgD%2F3HcS7UmG&X-Amz-Signature=4ad5599621546d20d4fe680ba746fb4bad245b35262691ee8c1b904c3e49faa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOL324LE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B6hkVYmXx%2BvPdg4BJNRQBiVqapsy8Td2FTovXh4hNgAIgXZm8K6A42B0HDwxBlSwwSg1F97GU4Awy%2Fmlnq%2BCon9YqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrpD0Sp8K82i0XWOCrcA4xcfsqaAP%2FtURI35jkJnJP1ZZtZrUfJiWK1jfrcjJS9sZdwiEVQbfPBgXtcBpsp4s1mfnqrZ%2Bl6uGGVH%2Bzuw7HHNTErJUJ80jEY02VaaIpGBNLUie7aYl68baeQ4TMWwVcYdBe0SkNoC%2F4itlhUwc8Dge447Rtjn0nv9opro5fLes%2FrtXw2KZzQ6Nb6zIbbbdCmmXsZ%2FkuDBnPG4lnqMVHUTALleLAXnS5nWCDOPXvo7ui4%2B%2BbJTvndsbf3yrs4peHjOBLXWU5M%2FPFE%2Bf4TWBfIXOj9APj%2FALZ%2FRF%2FHtjMQHAawIE2KtliyehtzePNanqblRjWafwF698GV5GjCZPCP0EHZ80S68oSUwRFTq9%2BZhHVtHVgejGNri2LL3QRmyiJxvooBmrBkXm7cLuM5DlS0LTIvNF4UnZ%2BVn79L%2FHilg5Ti2Wju9VIjTi9Crq%2BOQhFBNBjNyuZTZCwGRDOevMHZRJGVPk759zGRQ0qLeebavJ0FSpAlHliBeVnkhZ71vQpSO3efgkYivfhgZ5eqTGfaPBJIeHCKfFDynDrrSMfE3kzKhVPgOnY50%2BMI5oSf3nSLzSwo%2BYCTnLPYbJNmkybA9heTjGYxiTGe%2BcFVlJBaxonTM91C8WbI5%2BDZMLGo%2FcIGOqUBfg%2B5yzNgqi0XjpREPvw3G%2FzNM0KerwhQMMDxefRuT7U9G0Mx3biPKmnEBhGGGdnXh%2Fk7gCE6yvKQZeXmYbHMWXCBj0%2BJalYl4lEgqkr0nkQEllsSIGLfWWziXAiCi%2B3dKjdfAbaFIDKcX%2Bl3ebd2KZpR5KlAG3IDf1xpa2746y9SD0uWT5FIThGIsfnSZHo3DFDtCubntPylYWqRbMPspyojUYpO&X-Amz-Signature=859db3089c373b5a13ba81f924733e5271d293606e22664141738358996df2c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5PPK7B6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9nOyJpnYBunTSRPI45G0xW4oVjyQqtc4y%2Fn45ODyQBAiBQfrEtVAwLsByDGnUNx%2BwkMS4xS%2BFfNrunnqXwfpsqryqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2PQwtr850EHllmU5KtwDuL9fmVz%2Fs2546YZx3K9DqjOfJOaIPzxbWpU2VIpIWA0qraTa%2FV09DGTQjI82tiMBzJu7yZRDluO%2B42ucWuokEyhZholKXRpUvwk8RvhR3WzEUWNDVR3z%2BkUHlgglg36i1ssF%2FZuvhgin7FPDrOwO8Gat8AvOCx1cVdS88ysX9M%2FxI7AiVGVbYOjtKXJssVxrFpGvIS2f3DMjz12O9FBBT8jcs9tj9HqYrhnsPWYifPY%2BhJwmiH2gA%2BMqmAYSD5vaWWJtxkD54opkTWxNhNUYsdVetKweYYp%2Fzhd6PORVADNk6evBFLlumUV4RKKB8U4DimBpphcL%2F4sTxg36KhnhBgNda%2FSsUbWnNY%2BRZFy%2FxSXar6OysHeM4d3h4qwdzgCifkUL2SEh0wpoBSlK8HWknPcKTBw82FzPEfr%2FJzoLTyiUcRpYnu07donq%2BV%2Fwu2FpPAXmdRGrEbGTvumzpyXlCLVsgLLSRwV3S%2Bp9JmA6mIeWl9IAD7SblOUI0HauGxLeeLhpmjgUHT01m4b7Z2ESPp806D1wHv6OlGhaw%2Fh%2F4Xu4f2zXNpaj0GTl3gThdhk%2BT2EjMW5QVHuH5JplgKwiDe7YLUEKBhAGIzejdO%2F9rFCPBamJp5Tl5QH0pFwwl6j9wgY6pgF%2BMgBu02ONPU4ZqB3K9eQzPG5vJVsAQAi%2BqlG1OSSH1Dyfe1leK%2Bo%2FHu8OBhkB5r6xunocofwn0CaslUenZWPa1ZgBVYlGZ1e6o9kGKEsYox47dJqSfoVxHCcPt%2By3LzkV3bbtj7u97DFgey3b4eI8im7WU3GU5wmTLw%2Bl2koFYeBgqfw51Qxh64dajeAqAR%2FGa%2BsbCs9rIk98IzXzo3dF%2BiPtOW4A&X-Amz-Signature=0e42482300eaf938aee27f8f28b7064930c8a4d0c6a473b7cb3cc7e35029ab76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY6XAM2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2F%2FYc%2Be97kygdbUtUI7efEjwMSnx5nfUzo7GKjuFx2AiB3JmIGDXAAipUv26Z2reZn%2Fg%2F8B8ambArIwvjI%2B1GYPSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnCQVdOTx0EfWETHNKtwDh2rJ6oyEfZhFdqQWdim4mCfNtRJ%2FLjz%2F7coseiQu%2BzYVoGhkxBHKhKQQ%2FoPx9AYb1wsCNe3269PQ8RsV9KS14%2BGBJB19eHxNNo99HOuwd0FWFOr9aAC4PtFoRko31WdM3mELM59fpYdg7%2FglJSEiySURJUBKmJOJGV9PwTSXJ9oi1KIL3Atjj1SZH9RDTt%2FWRorqu8qivHm%2FXYgr5Kyify9PwqNTDpUQsGiWngz3683VaoEen9bOKm2I%2BTCjTiwPq5ytyLCKGWMAE2TAh9Z2KF2LO6fS2uDUqxzSLbsfvF%2Fj6Vv3PnoO6rBPwmWXVW30UP8OxFK8%2F3L2vPqkSyEuXGLLRdyWJxpjqPWBoqWrPxpsoGrYjc2JDBqi%2FlFd2QEUr1PvqgXgmEu5psB7DbvKkQ8zRejqp1Iu3kaQPWW1q6OVN%2BR6ffQhhFfpgFMnkTfQ%2BL2ehqjHzuEy39jgi%2FqiEzpOoi860eHru7og%2BKkvt%2F1zep%2FrSap7K19%2F5VZbDenpPt%2FYjMqsdHE9C92p1dusuT1px8HN0rwS9viTMPnQS79c1UlFJitfgtLFsMBcm86Qki8s1ffzoycV%2B9idrexVtEBqI9ZV%2FNMgszt9C4f0IbQCXJgnjNO10KicvBUwiKn9wgY6pgENcfqpY4fTdPK%2Ff%2BMPHrB1Y%2Bb4XsatzlQ7g2Ib2nI3OCw1st%2FczryroLzuU%2F4o3oBX5rCpL1jFmbzKpbuYkPJAVuwOmpwdmQS5vrHY7mnYFN4nZaXAylEBPg7Tuk5oTZgpcVqF3iPML5gnoeWWUVbYl%2F7hqtV68gOBLTwuHGmutkC1lUjTrZivxwPRSV5J05uhcw1ANJBdrzTVJvuOrgD%2F3HcS7UmG&X-Amz-Signature=95eaa972503386a6a0a5e478feb559f6ffe75e8b29a54a5a61d1c9b8317a83ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
