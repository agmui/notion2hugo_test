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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO2JHWEM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDKmNBZs3BmbCrRHQsc4UPN9hzkZJ2FOl%2B4U8lvlpII8QIhAODkRaTt31bkzbPddsIRbpZ%2Bjz6j3YI22bUhK8LAn%2FCnKv8DCGEQABoMNjM3NDIzMTgzODA1IgxJAuDegqOzRlTcksIq3ANVW90i%2FvOn65z68VBAPcbnrLIemA%2BDEFZ0%2FbLQjdjBHNIRkNbBQaLBPzUH4bfO8anzRdc4UGydJn1KitQu62RLzS%2BQ9OX6%2Bp%2B%2FS4votj9tG8N6QVx30na7KDbnu8rQuSY10XlQIpCP38a6rg%2BB5zaY5yfoTacFG6iKbtAEgEq6T2Q97muJnkL9%2FkQTOjWkwCZZrC6Z5aK4ilGssmtG%2BRsmRoRhz3yoUkL7TCWuiNHmI8U36Ww2gGFzhKd90%2F1TRkogo4XAVNC7JP%2F6gtQ8W7kEWZ9jaDrjPcAQITUzijX4eKd2wOojJQX4MQviu56PtbcEebncHSgm0e4NO9JGog0hZ6%2BPuxM4YIYJLDpPXck94v4SLa9UTGbnBushkEaw2IJErXAl8UwNFmb2DXK6LuMETraTzU%2FT0ZnV8c2mPBS%2B1JCU60Z8x89Q2tGMmJdVz8VQYFImSMi6RDRF79qTmciY420LkZEkMxxsFQoDLms5fnwdLNvVVtpOygSLh%2FX1ZXnpRQ7fIyWcJU2IKOnCVvPigmvzCvhpRuTHEm%2FMSkrYHB3V%2FXNjwd3IJB8LHP5oHufgYQJ8Uqbovm07wLPg9QY9KY0xZzdiJX4kATW8bST%2B%2F3cYQT9rYdvLNiOH5jCJ1LG%2BBjqkARU14%2BBVU7oHqlDGzCx2WR9TEu3fvwY9cfEdKOxBoKGVL%2BKXpL1ra0MW22CuaA80nzV0G%2BSnFw27Zfxua6GkrJks16sErlgxiGDyQmpwXKCXks3Qx%2BEpy8%2B2SP0ul5bmym55XRdOlch3e35TGQs7w63LVod0uZ8GCdM8slKScV0%2FqsCjqeG1elc0Sf%2F%2BE%2BBXUSBayn27Tc7e7Ud6wRJq8oHfiHSQ&X-Amz-Signature=91e914b5a13cf9daf438f9e623608cf0ee167d83b4b86318a14977182a5f88f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO2JHWEM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDKmNBZs3BmbCrRHQsc4UPN9hzkZJ2FOl%2B4U8lvlpII8QIhAODkRaTt31bkzbPddsIRbpZ%2Bjz6j3YI22bUhK8LAn%2FCnKv8DCGEQABoMNjM3NDIzMTgzODA1IgxJAuDegqOzRlTcksIq3ANVW90i%2FvOn65z68VBAPcbnrLIemA%2BDEFZ0%2FbLQjdjBHNIRkNbBQaLBPzUH4bfO8anzRdc4UGydJn1KitQu62RLzS%2BQ9OX6%2Bp%2B%2FS4votj9tG8N6QVx30na7KDbnu8rQuSY10XlQIpCP38a6rg%2BB5zaY5yfoTacFG6iKbtAEgEq6T2Q97muJnkL9%2FkQTOjWkwCZZrC6Z5aK4ilGssmtG%2BRsmRoRhz3yoUkL7TCWuiNHmI8U36Ww2gGFzhKd90%2F1TRkogo4XAVNC7JP%2F6gtQ8W7kEWZ9jaDrjPcAQITUzijX4eKd2wOojJQX4MQviu56PtbcEebncHSgm0e4NO9JGog0hZ6%2BPuxM4YIYJLDpPXck94v4SLa9UTGbnBushkEaw2IJErXAl8UwNFmb2DXK6LuMETraTzU%2FT0ZnV8c2mPBS%2B1JCU60Z8x89Q2tGMmJdVz8VQYFImSMi6RDRF79qTmciY420LkZEkMxxsFQoDLms5fnwdLNvVVtpOygSLh%2FX1ZXnpRQ7fIyWcJU2IKOnCVvPigmvzCvhpRuTHEm%2FMSkrYHB3V%2FXNjwd3IJB8LHP5oHufgYQJ8Uqbovm07wLPg9QY9KY0xZzdiJX4kATW8bST%2B%2F3cYQT9rYdvLNiOH5jCJ1LG%2BBjqkARU14%2BBVU7oHqlDGzCx2WR9TEu3fvwY9cfEdKOxBoKGVL%2BKXpL1ra0MW22CuaA80nzV0G%2BSnFw27Zfxua6GkrJks16sErlgxiGDyQmpwXKCXks3Qx%2BEpy8%2B2SP0ul5bmym55XRdOlch3e35TGQs7w63LVod0uZ8GCdM8slKScV0%2FqsCjqeG1elc0Sf%2F%2BE%2BBXUSBayn27Tc7e7Ud6wRJq8oHfiHSQ&X-Amz-Signature=7f92bff58841d3e7bb7a741f48b79e9378e16be000f87384fb92e15324448fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNW2AZE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDA0irZ0ScRBCrlxEtg8HNx6bsHuDUC6T7lsGW3FraseAiEA9HpDPo6QJFaQX1kR%2FKr2fCtR%2BghK8p7gIZfsr%2FCStjwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJJnjQ2JEb%2BFrHEZDCrcAwVj5ik0N4pRdqPdIVKKjbXOtB9PPqyJt4kn0HRfVPcWvAnqs7Q2vqUU64hZmdTivGCzKoCZzzDId1SQzU7toSuipMgIuh2QtEDQOWBvCIH4nRvkUve0sggAK89hxtqkIfzIaPJFOTNRZjrjA6HsM3iKMWA8looqslOTcd4IalI5%2Fz5ArcFyfabUbVgoxbytjkGrYKc1TwUaKVWBMPPrST4nOVQlTVd0GCPGkQzQifkwJhsjiVwMlouoMfQHmQALKFhrS7nYIz%2F1XYSL5%2FpVZeiCMw%2FEbBxszslESUFKulZTdqqhxO%2BrPNRseJK0t5Q6%2BZ4AR3GB5UVmVKNeCRnUo785RLKyAYiFbzS7hYYJLeXjArCIR%2BUy5L9xVcdrb06HfBaLjrkPfGGqzVDFrrelWUaTZU5OBii44mJ8Xp5VERbT4TdXCT6EIXvPzarqauOMA9srHrKKgt%2FMzPsRrgAk0ltggWsjsl9wbna3I6tZ99Bc9S9WksLu01yx7Fx2D5oRoRebbR466ZMiBxOurbsbjbB4IGrNNm%2F6f2v8sg3SDEYIx%2FVC%2Fq7DNw6kXgAJUIDe%2BjnEPUoscsKDG4J7pbNByFjrui3DsTsKPad7VX3xZPDLtWEs%2BnbRBlbBSK26MNzUsb4GOqUBWUV1vzj27cc12h%2ByWMxXn3LLC5RfRmKleMjO7YYwaNWjH%2F%2B4PjPe%2B8i3IiIOu%2FJNNMqsV4aOCcIsWJeyUAOzMOPLrdsi3umuHNd5uBACDNv9XmKfNNwynvgyiRck0OPvDyU1xXt%2B%2FkqHCZBj7cv1ESEjHJbDDeHgsyhPFmU8uVTFNN13kg50iuBjbVxNny8KEU6SUFPZEeta8WHsY85QRxk1E1HP&X-Amz-Signature=84202acd10acdfdde388ddca47c124d9c4a57c13685520671e96cf51ffd2fe42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQDJWEOX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD51uoc3yLbZQpW%2Fr7H7BN6GRQ1KLXZc1whDJi3Z6y79AIhAPR0R92B97YvIqRbUquesyQcbCfj3HXm6XyC4JRRE%2BLPKv8DCGEQABoMNjM3NDIzMTgzODA1Igw3SHaJh8LaqouZyhAq3AMXIrzEARe%2BnrgaW5wGOKi2QPvo%2BHNzy8LLQuRfzP5GVixWShfrVHIRIYz8Du%2Fb3Xt6So2R1raC4y%2F8YA2A5SJmeHyAEcB%2FLGNDneaEs5PF2Ont7DOXYWhSkKGNU0T6C2WsTZJF9IZ5Da462VAu9nTB8R110Xk7q1KqVSpGqUoviPt2XCw35DQvWNSQkIIbeIDqk8S7nTbSTmQ%2BffaBSPaZgdBXNKBvO9HIJ5MA0RLHoLyc4tmey2AMRqBWeQ3WyTtX9STPscY%2BaDcIrzKirjIqiysfL1PJoB1Y7pk3KsFrP9a6aq9H4z7K3SmWT6AUiwiXvSui4azGLWi8OQqBrZhm%2FHMF73UQx3uCrv%2F13Tsca4cI7eB%2BNMNBj7uRCVgTN4GdBKp0WC1uIH6a01kyFuWo9OUqvKITqgZghK2KbEbFTLkbZbGN3yWCZOx6XvS%2F73BLpLCifRnSLTej0VN72VNui6Uj9W6vgRgMYXKgXbJ%2FGsIU6GPgpEsj9k5P%2FgugsnOc0JTdcfQd6Jf1KmsCoIxR8%2F1%2FOZ3A7pCYghXE1YRzzwduwqej%2Bm3S6tLqICMFjHynN4rZMx4bOnVIGalvhLJQ07JwPODrXbiMLW4tu0KBiPJUpX0X528ASr7oKjD81LG%2BBjqkAQMA6y4gm8OOWTKez294Flh%2BsPdN8QmkEurgNpnfCXt5C5Uiq6cnGm9aVl%2FLAnf7eKhZw73QrrWUErAUsQ20KQF3aPBdnAzf9q3SeDtW9ojuZVAcTsCVjH53eGNquyHBq9%2B5fsThFeh26XHKtg%2Fww5KF2e2K975Iyqdbjouc8uxkSBHIdun8LnSUPfnsYfi4R5PgkJ0qrK0c%2FQ7KwxgPcNRE031h&X-Amz-Signature=331df198cc5a1f132d225dfcf786ca7af81331c496b8e9c3c185953bacf6f6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO2JHWEM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDKmNBZs3BmbCrRHQsc4UPN9hzkZJ2FOl%2B4U8lvlpII8QIhAODkRaTt31bkzbPddsIRbpZ%2Bjz6j3YI22bUhK8LAn%2FCnKv8DCGEQABoMNjM3NDIzMTgzODA1IgxJAuDegqOzRlTcksIq3ANVW90i%2FvOn65z68VBAPcbnrLIemA%2BDEFZ0%2FbLQjdjBHNIRkNbBQaLBPzUH4bfO8anzRdc4UGydJn1KitQu62RLzS%2BQ9OX6%2Bp%2B%2FS4votj9tG8N6QVx30na7KDbnu8rQuSY10XlQIpCP38a6rg%2BB5zaY5yfoTacFG6iKbtAEgEq6T2Q97muJnkL9%2FkQTOjWkwCZZrC6Z5aK4ilGssmtG%2BRsmRoRhz3yoUkL7TCWuiNHmI8U36Ww2gGFzhKd90%2F1TRkogo4XAVNC7JP%2F6gtQ8W7kEWZ9jaDrjPcAQITUzijX4eKd2wOojJQX4MQviu56PtbcEebncHSgm0e4NO9JGog0hZ6%2BPuxM4YIYJLDpPXck94v4SLa9UTGbnBushkEaw2IJErXAl8UwNFmb2DXK6LuMETraTzU%2FT0ZnV8c2mPBS%2B1JCU60Z8x89Q2tGMmJdVz8VQYFImSMi6RDRF79qTmciY420LkZEkMxxsFQoDLms5fnwdLNvVVtpOygSLh%2FX1ZXnpRQ7fIyWcJU2IKOnCVvPigmvzCvhpRuTHEm%2FMSkrYHB3V%2FXNjwd3IJB8LHP5oHufgYQJ8Uqbovm07wLPg9QY9KY0xZzdiJX4kATW8bST%2B%2F3cYQT9rYdvLNiOH5jCJ1LG%2BBjqkARU14%2BBVU7oHqlDGzCx2WR9TEu3fvwY9cfEdKOxBoKGVL%2BKXpL1ra0MW22CuaA80nzV0G%2BSnFw27Zfxua6GkrJks16sErlgxiGDyQmpwXKCXks3Qx%2BEpy8%2B2SP0ul5bmym55XRdOlch3e35TGQs7w63LVod0uZ8GCdM8slKScV0%2FqsCjqeG1elc0Sf%2F%2BE%2BBXUSBayn27Tc7e7Ud6wRJq8oHfiHSQ&X-Amz-Signature=3670923b7ad27cea1df2f184586cd1684f788d2b52adb5cf0c31cddeec6372d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
