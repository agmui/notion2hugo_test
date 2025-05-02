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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQAEREB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDTND70QBGXH4JBj%2Bb4xs2w%2FDALqiowVa7XDb4HoS55EwIhALsqWSAEU12YIzB%2FB8KjhplFo52CTL6yhT%2BmglGIoJA7KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9XSnxe9oSxQvdhHoq3AM0Bwi%2B9SvD7I7QFdBQQRSfOViPiZOqqRea8IH7Frhc5By%2BrWV8erbTr2e0Jk9OiST%2FCULsQduedspfITkzU9DwulRwIL%2FXKGou1k8jFQiVvmI6bJd9f69nMelBG6QNxP9sQ3xDyEOg4PgsPCEHl3TeIok6a0EC1f0eXbn4%2Bw%2FLXMjOZsWUNvkn36aQ7F5P%2B0yT6xp9TT19GPwkKQzIwvV0liIRHOBjbg3x%2FjWsbHZV7E7HtyZiG6zGA0HG7ETNb7KudeP9oE%2FpgBOo3vJ8V84iYgAG%2BO1CmRQj%2FnBHqHxeSG%2F6vGvsMFo9Y6W1Pys9WhxHCbESK5biSHwsFzx%2ByB26k8jvRvg8TOJJBkJHUHmjPZ38HFg%2Beb6SnHSrzyfjQ09lOijRiKN0bSCKWRHNNKW%2FCpCopYwoBCz7nDCh5QWI5xo40RM6Y%2BBLAFWpE084KGqfUOoMdR5f%2B2NVBsKXpX2AOoOql2KNUyBJCTdKs8riLNCWRLWAPdxMp%2BzrFzRJMMTx2uTxnMpBtIhXg37212JjfPMnw3ZS7DT5b9C6jUaHaPWBWY0ws9ur%2FZ%2FmwFTRpm1b7%2FTrgQZ9omCXqC8VDIjkzMl2fNXuu%2BFqm%2B9FnCt9l%2FFglEINX7JsET1%2FaTCa2dHABjqkAXCHgsc8GcFdP%2BnEqORbA8jCxHLqTwnJOvfavqWTeEqcTYLOpoqAMIGX7YzbvwyiDLRE1%2BirsAk6ZKuQ%2BeZEUab%2FLXyURByTApPDYk38TMJOf%2BGGp1YQbmwNFb8COLE5Yqw8pxvdBzVB%2FCF8et%2BPH6LIYnn%2BrmACDSd43U4YMH0jeNNxqnQxhKH93dyD4y9hAufhH6HWKBZpFipivwSofSYXCDLR&X-Amz-Signature=0e70bd15dbe8019d46306653db1ff8c491ec743b15f0ad16ef7505eacc263a32&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQAEREB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDTND70QBGXH4JBj%2Bb4xs2w%2FDALqiowVa7XDb4HoS55EwIhALsqWSAEU12YIzB%2FB8KjhplFo52CTL6yhT%2BmglGIoJA7KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9XSnxe9oSxQvdhHoq3AM0Bwi%2B9SvD7I7QFdBQQRSfOViPiZOqqRea8IH7Frhc5By%2BrWV8erbTr2e0Jk9OiST%2FCULsQduedspfITkzU9DwulRwIL%2FXKGou1k8jFQiVvmI6bJd9f69nMelBG6QNxP9sQ3xDyEOg4PgsPCEHl3TeIok6a0EC1f0eXbn4%2Bw%2FLXMjOZsWUNvkn36aQ7F5P%2B0yT6xp9TT19GPwkKQzIwvV0liIRHOBjbg3x%2FjWsbHZV7E7HtyZiG6zGA0HG7ETNb7KudeP9oE%2FpgBOo3vJ8V84iYgAG%2BO1CmRQj%2FnBHqHxeSG%2F6vGvsMFo9Y6W1Pys9WhxHCbESK5biSHwsFzx%2ByB26k8jvRvg8TOJJBkJHUHmjPZ38HFg%2Beb6SnHSrzyfjQ09lOijRiKN0bSCKWRHNNKW%2FCpCopYwoBCz7nDCh5QWI5xo40RM6Y%2BBLAFWpE084KGqfUOoMdR5f%2B2NVBsKXpX2AOoOql2KNUyBJCTdKs8riLNCWRLWAPdxMp%2BzrFzRJMMTx2uTxnMpBtIhXg37212JjfPMnw3ZS7DT5b9C6jUaHaPWBWY0ws9ur%2FZ%2FmwFTRpm1b7%2FTrgQZ9omCXqC8VDIjkzMl2fNXuu%2BFqm%2B9FnCt9l%2FFglEINX7JsET1%2FaTCa2dHABjqkAXCHgsc8GcFdP%2BnEqORbA8jCxHLqTwnJOvfavqWTeEqcTYLOpoqAMIGX7YzbvwyiDLRE1%2BirsAk6ZKuQ%2BeZEUab%2FLXyURByTApPDYk38TMJOf%2BGGp1YQbmwNFb8COLE5Yqw8pxvdBzVB%2FCF8et%2BPH6LIYnn%2BrmACDSd43U4YMH0jeNNxqnQxhKH93dyD4y9hAufhH6HWKBZpFipivwSofSYXCDLR&X-Amz-Signature=82d0fef5d29dfe23f009858ccc6893390759c1d2afedfa4fbe38943f6c28acca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQAEREB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDTND70QBGXH4JBj%2Bb4xs2w%2FDALqiowVa7XDb4HoS55EwIhALsqWSAEU12YIzB%2FB8KjhplFo52CTL6yhT%2BmglGIoJA7KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9XSnxe9oSxQvdhHoq3AM0Bwi%2B9SvD7I7QFdBQQRSfOViPiZOqqRea8IH7Frhc5By%2BrWV8erbTr2e0Jk9OiST%2FCULsQduedspfITkzU9DwulRwIL%2FXKGou1k8jFQiVvmI6bJd9f69nMelBG6QNxP9sQ3xDyEOg4PgsPCEHl3TeIok6a0EC1f0eXbn4%2Bw%2FLXMjOZsWUNvkn36aQ7F5P%2B0yT6xp9TT19GPwkKQzIwvV0liIRHOBjbg3x%2FjWsbHZV7E7HtyZiG6zGA0HG7ETNb7KudeP9oE%2FpgBOo3vJ8V84iYgAG%2BO1CmRQj%2FnBHqHxeSG%2F6vGvsMFo9Y6W1Pys9WhxHCbESK5biSHwsFzx%2ByB26k8jvRvg8TOJJBkJHUHmjPZ38HFg%2Beb6SnHSrzyfjQ09lOijRiKN0bSCKWRHNNKW%2FCpCopYwoBCz7nDCh5QWI5xo40RM6Y%2BBLAFWpE084KGqfUOoMdR5f%2B2NVBsKXpX2AOoOql2KNUyBJCTdKs8riLNCWRLWAPdxMp%2BzrFzRJMMTx2uTxnMpBtIhXg37212JjfPMnw3ZS7DT5b9C6jUaHaPWBWY0ws9ur%2FZ%2FmwFTRpm1b7%2FTrgQZ9omCXqC8VDIjkzMl2fNXuu%2BFqm%2B9FnCt9l%2FFglEINX7JsET1%2FaTCa2dHABjqkAXCHgsc8GcFdP%2BnEqORbA8jCxHLqTwnJOvfavqWTeEqcTYLOpoqAMIGX7YzbvwyiDLRE1%2BirsAk6ZKuQ%2BeZEUab%2FLXyURByTApPDYk38TMJOf%2BGGp1YQbmwNFb8COLE5Yqw8pxvdBzVB%2FCF8et%2BPH6LIYnn%2BrmACDSd43U4YMH0jeNNxqnQxhKH93dyD4y9hAufhH6HWKBZpFipivwSofSYXCDLR&X-Amz-Signature=80386fcf55480d774529ecb1df6095b881d22f4ee13fa70e834616c2ccf7df22&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQPZNSV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIFZ46CJcyAtUZdYhdgw5IpG%2BbA2FhRr10qSFAFC86k0YAiBiB49drWoAVN2U8hvj35KDA0XjfemQ1YJ898r9Tt80gCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjLA182lz6eyC%2BCxlKtwDOJpJ%2BO%2FqADnBwwGgIgIAfMsu8WN54OKLGKBCYquwQH7jiydiHRdsGu1L4TzhnJt5yxSpG3CoAXUxx29WPfdBolpfdSKx0tqyMAD02qh1ROE2k107N9U4QxGOHvyGXP1hxJ0yCpMIx1CR8hV4CmQIYUi7XilijITt%2BaxuTyVztjb5T7deQ9FbMbnLhfKC4YbpXjksu2CcH9sTOiAlOuYse9tyNWXHbp%2BhuTdzo%2Frz2LXUXHUBOX1Cca5bXxQ%2BaOHT%2FRUeIOT4xzJNQYNFA90VS2FnD4OTrC5RZM7d6TfF%2BoRJzE8WKNisTFeuPZGdsXEPyzAuozzS0ziCKuaw%2FMF6X0yBIxJFZXspg1PPUANQ%2B4tpL%2BsXrIP7epH%2BAZvZBUKj2MugNxjnmgsJPk81K2%2BuHU%2BO3XHfFRtOpJse8bQI%2BJA5GFVsSBnYy74RYK%2Bt3zhbefTRhkUMfYobnbxjhE3dvdS0gaGGj1ocUXMG692RJCBrl6h06oSfGo0mE7fG%2BO%2B%2F3bBoBO7%2F%2Bmg9S7Uo1tvAjY3A8atqVhu%2FeAcATKtIaZsKMkYsku3Wpv3QOZ8kCB4KZaVnI%2FSFhmU3LjIUvuhWZx0whUCff2eIPJpgZJvXnoWwQV5WfDtIxPqp2Xcwo9nRwAY6pgGn3he%2FlylTborosq4Z3mOG4cy5HquobuTl8%2FCuzfOksoEPLyznf62FJAfD8JlItcj97nq6H0UqFCK%2FkCOkyZT2W1bIf0AVh9pm%2BJIE48dvwaW%2F30ov4GZAEdZyF2OMQOeaPkQKdEJUS%2FiLStgo4BFZyguobl0r6H9ysGrJN3YFnEfAHyQOdFmEV81D5ewL%2BE%2Fj8y16Kgo2qEsUhIyjhvcvRVoaLota&X-Amz-Signature=3ddadd2ac2357fb5a64422b0c54152ee58f8d7fbd6a618134bc2f38dc1704607&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I3HZBFE%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIER6wE5G2iFtF%2Flz89Tqe85c2%2BXrtPdiKxh09J%2BV7vFKAiEA1BPFXFuaPWOiypqL7MrAoM7tzimewl1KN6A2fxJ9%2F90qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzx4Ef60FYsXrINAircA428DGHvagpOOb122TBs7WzIlJjsEEyohv4qAXPxcPsCgMxB0Z%2BLeyhcxhjk%2BBQjDco8wvNyaHChaYlOwRLkcPQ059TZyter1fO6ugPROWMj3eurRCst12J9%2Fy15HD3X3P49hvJVK7Yw0BFeyKDPVV7%2Bp6J4AtYD6oJ4e8XO9%2FOO49cF2MolmJ2wpt%2BfCZQOR2IqK5ATTq05E8gfVSs6xXiM%2Fn9aF2w2Ax6Dk2LZVLatSQuTil1lL%2FJ095n7BjbLt1quX7ArXe%2FZIdCbjTpQTSAecGVFYbdXIW%2Fv9Oa8cDspjKSlpM4o2I6qtKyMyELd9%2FxGri%2BAIjNU2SN7NS08V7hFXemNPXtFHpxeDsp4YNQVZfD7alQxdajyxwxzNQdQs%2Bvifoy964KQkfHxtTw9u5C4%2F9BIZKrvwSWC2%2BvdcWLZu5Vpew4BxlHixljx4vcAvqLstz6t6bcPWm9MsLr4b%2BH5LmkYfImX7gRrhcmRvKOtDsHiOUXBLJu0z0TT4HyuDukP8qQRPXq3uOmROEDpaBPPaqEhoPQ7J%2FwsOSAJDz%2BjAegiP9eeuJBq5Bz4MPOLl6uHQRTDP%2B8JJ5JyV2BE2vk%2FjSzkkleNAyFawi6GPb9KtQFwCzFi56be%2BnxzMKDZ0cAGOqUBMFY2yo74qQn9DNXU0CM1NATdjPiYRLOhW8IBf3n2hPQHYKFtiCv5%2FXpmLzj5QQfoMrahVBMgB1PQVEzGk5Kp5d3kSkGSHOEpV3ApkpSHMaZP%2BQPzrQR8F7n5OkOymDEsknkxzScJJDy4WcU9fWobqH%2B9uWHVtpzOFnFQ5o75%2FPfSlexiv5bK3t7OV6aJrmeyyfjaDJlpoOFGQcehYR20LqrjECRy&X-Amz-Signature=e756d438cb1b972b117fbb1ccfca8a0717199c3ece6b44e25e880a1bf5491c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQAEREB%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDTND70QBGXH4JBj%2Bb4xs2w%2FDALqiowVa7XDb4HoS55EwIhALsqWSAEU12YIzB%2FB8KjhplFo52CTL6yhT%2BmglGIoJA7KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9XSnxe9oSxQvdhHoq3AM0Bwi%2B9SvD7I7QFdBQQRSfOViPiZOqqRea8IH7Frhc5By%2BrWV8erbTr2e0Jk9OiST%2FCULsQduedspfITkzU9DwulRwIL%2FXKGou1k8jFQiVvmI6bJd9f69nMelBG6QNxP9sQ3xDyEOg4PgsPCEHl3TeIok6a0EC1f0eXbn4%2Bw%2FLXMjOZsWUNvkn36aQ7F5P%2B0yT6xp9TT19GPwkKQzIwvV0liIRHOBjbg3x%2FjWsbHZV7E7HtyZiG6zGA0HG7ETNb7KudeP9oE%2FpgBOo3vJ8V84iYgAG%2BO1CmRQj%2FnBHqHxeSG%2F6vGvsMFo9Y6W1Pys9WhxHCbESK5biSHwsFzx%2ByB26k8jvRvg8TOJJBkJHUHmjPZ38HFg%2Beb6SnHSrzyfjQ09lOijRiKN0bSCKWRHNNKW%2FCpCopYwoBCz7nDCh5QWI5xo40RM6Y%2BBLAFWpE084KGqfUOoMdR5f%2B2NVBsKXpX2AOoOql2KNUyBJCTdKs8riLNCWRLWAPdxMp%2BzrFzRJMMTx2uTxnMpBtIhXg37212JjfPMnw3ZS7DT5b9C6jUaHaPWBWY0ws9ur%2FZ%2FmwFTRpm1b7%2FTrgQZ9omCXqC8VDIjkzMl2fNXuu%2BFqm%2B9FnCt9l%2FFglEINX7JsET1%2FaTCa2dHABjqkAXCHgsc8GcFdP%2BnEqORbA8jCxHLqTwnJOvfavqWTeEqcTYLOpoqAMIGX7YzbvwyiDLRE1%2BirsAk6ZKuQ%2BeZEUab%2FLXyURByTApPDYk38TMJOf%2BGGp1YQbmwNFb8COLE5Yqw8pxvdBzVB%2FCF8et%2BPH6LIYnn%2BrmACDSd43U4YMH0jeNNxqnQxhKH93dyD4y9hAufhH6HWKBZpFipivwSofSYXCDLR&X-Amz-Signature=978d74fca02b1a42dfd6137804ced7794ae9c2ce9d836a10abac1145e4342448&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
