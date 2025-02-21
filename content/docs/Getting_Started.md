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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYV3RWNR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfNoVXGbrC3IRjoUHXK8qI204jHveSvdWtHxEHnlGVoAiAi%2BJh1hHQXyP1gJAu4DVTHqtY%2BwEUFFmjUQmZzAPfoQiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDChMSCud2wyw0aGaKtwDpfysNunuqb4dZ4P8VUshk4SkcVicqGpSa3p3dyehQ4pYW5wP84eH2HHNvuqud35m98lOtqK6J2RVqkrmKe1Cdn1s6DxVkCLtkz2KKa2jQJR4NfaYiJv4Rx1gtG8hlLHJjafnFpw%2FlxZj1mj3xxT4Ro2CsnofyUBv9optH%2Bs6k%2BzdvC84IfWAsY4A51n23BZeeLmULwLIB5NEt5dgXnL7sCu39SnPVijZ38anf3GIG4Z5FK89xBu0puI7GNGb81S1OZm2GizQB5M5ce3DyqclE%2FEaCxHGSZXPlCTgj4SKl3zv0nmeCtr9AGdwpIYoV8dizdpn3cRSqzKY9jvF9tVJIk3mDoQ45LPQH1W6lSFuMEsAO%2BOn2%2FjYlE6KDZjA25hhgAuCTs7ZM%2BlvCnrqG61oUhw0r7JHGB4WJHyOZRNIVGUGjhiCtuVDSaf%2B6W5SDCaWNDoplI7AjgCktzx7xS0tGHD5tYAuMuYUHNcKcxdYoDVH%2BRYCwah%2BGckdn%2BUt4VwZ16h7p5UnXpvOS%2FAF3tNuSyvmft3U7X5mHl2a4NQg0%2FY4HxAHmAB1fxC3nOAm0DVzQF8QKy8mQnRX%2BROmX%2BaEYOlsmXos0kmeco%2FHgBPL%2BneysyxWffKIBszJHAIw%2F4DjvQY6pgFq1He%2FoMZS6HqNIofrsTx4qrg%2FoohlKTuDjSb7pPKuK1xksMb3VdNa8iV7X61pNTr4fDLUlDdx6Oceo%2BfayMYM2oUN7na3xU6oytYaMZhRWWGpGzsS8KoEHT9NDQ1J%2Fxrpnalya0A3aJu8FHMm4hrFad7oZ1SibKG2TvAqaBsZGjkEpFb0JPEFmibqNWI1aVA5hX7OvVI9D14v6lrdLvWtQ4J%2Fz5pm&X-Amz-Signature=aae60b05ad52a3850314a187b4ab226b3ae3b3028307a06168af6835ac558722&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYV3RWNR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfNoVXGbrC3IRjoUHXK8qI204jHveSvdWtHxEHnlGVoAiAi%2BJh1hHQXyP1gJAu4DVTHqtY%2BwEUFFmjUQmZzAPfoQiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDChMSCud2wyw0aGaKtwDpfysNunuqb4dZ4P8VUshk4SkcVicqGpSa3p3dyehQ4pYW5wP84eH2HHNvuqud35m98lOtqK6J2RVqkrmKe1Cdn1s6DxVkCLtkz2KKa2jQJR4NfaYiJv4Rx1gtG8hlLHJjafnFpw%2FlxZj1mj3xxT4Ro2CsnofyUBv9optH%2Bs6k%2BzdvC84IfWAsY4A51n23BZeeLmULwLIB5NEt5dgXnL7sCu39SnPVijZ38anf3GIG4Z5FK89xBu0puI7GNGb81S1OZm2GizQB5M5ce3DyqclE%2FEaCxHGSZXPlCTgj4SKl3zv0nmeCtr9AGdwpIYoV8dizdpn3cRSqzKY9jvF9tVJIk3mDoQ45LPQH1W6lSFuMEsAO%2BOn2%2FjYlE6KDZjA25hhgAuCTs7ZM%2BlvCnrqG61oUhw0r7JHGB4WJHyOZRNIVGUGjhiCtuVDSaf%2B6W5SDCaWNDoplI7AjgCktzx7xS0tGHD5tYAuMuYUHNcKcxdYoDVH%2BRYCwah%2BGckdn%2BUt4VwZ16h7p5UnXpvOS%2FAF3tNuSyvmft3U7X5mHl2a4NQg0%2FY4HxAHmAB1fxC3nOAm0DVzQF8QKy8mQnRX%2BROmX%2BaEYOlsmXos0kmeco%2FHgBPL%2BneysyxWffKIBszJHAIw%2F4DjvQY6pgFq1He%2FoMZS6HqNIofrsTx4qrg%2FoohlKTuDjSb7pPKuK1xksMb3VdNa8iV7X61pNTr4fDLUlDdx6Oceo%2BfayMYM2oUN7na3xU6oytYaMZhRWWGpGzsS8KoEHT9NDQ1J%2Fxrpnalya0A3aJu8FHMm4hrFad7oZ1SibKG2TvAqaBsZGjkEpFb0JPEFmibqNWI1aVA5hX7OvVI9D14v6lrdLvWtQ4J%2Fz5pm&X-Amz-Signature=46d979eca6cb39581edb062f9205666cfbe82ba81bf814bd8f2e655801bd2d75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSDPA3W%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGn4USgtowUpyjKnCtITUL958Ly5t61RwlO9AZ8W4zoeAiBpEmphkqD6efPBcks5uDoHXrCBbxGRPlnVQY2XSJ2MtiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQGH3WUUouHxG6j7VKtwDe%2FgarGWfxpsneTkBZZnCbX9p%2BIvr14Iu5GASnShTijZdviC45i%2BljDhJpd0BL4D5pyaURO1QERZ4dOK%2FtFpAlIHorQbhhN9PY34Zs6vVVWyBRyhKqeHvD1V%2BbgUKgsLhnEEN5O0KAaZv2oPvKhzH4tI1aYR5gLkewzstBqMq7aN6l%2Fy0SGV2cYU2St0lnHLhnaeW8lst1dHRj1GUEmWbc%2BgCFCiHsPVtXKRJDN%2FjNQcdzU4E%2B21g8okbSPrBNPKz2qepLqk%2FaFB9bQ7WrnTwtAWTBF64IJqfa8lde%2BxxzAJv4Sfdf%2BwaVHyJKhie%2BciHSV8I6%2FUB3WctDbrHbo75BNKB%2FFoyG%2BIMklB0yue0PWTcKlkt6p54JDfqAYUMK96Z3qVowVo9QbzAPHTOfYMXi4B%2BuJMh2hctXicEZSop2PoWNzktrUhtHfy5gZ9ljPLZQ%2F3AC2nU4Nm475mNiemqZUuCZhgFZP9nAtX9sn1YJAMG1BoNSmc%2F75da3gTXkNC7RvgWFUa7OqD8M4foIrtEEdORli%2BwIKm3Vs5N05Wev9PUTLyD%2Fxc443XvWD2gNMCL6OT%2BrakTY%2Fwxm7ZyMqBogl4YDpXyrGblcGESDglVVGvAU2HZ2BSBYgK3owswvoDjvQY6pgHPi4xrLiGHfY2QFz%2FBYzarNbtp7Dx4zAtfuWg8nFe50QfhuBnnr3XAc4oPe6qoxUVpkoBNaERhp%2B9qzfjpq0OCMJKLmAqZWJv0gWYiJKtrR4r2P2IbYPCVB3mQN2oaZsZeggKAYAaPuwv5vlOlRn9k%2BKsj7Z%2FLYZ02%2BBrdEBEr%2BsBLZ%2F%2BsbtaiwinnZNadliZiFdRmDd79EHmWbjtI6UuO%2FHhKG0dk&X-Amz-Signature=267fad4914636a731d11a66283c46ff00515045049b67e0de1ac2a467f779c31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264AJTGA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBels22Dqqb%2FetnopiZG0VEEDgVsY2CnJW%2FK3jmEsXeAiBDvXilQpOu3Bdebeyzq88cOjDLo3ci427UVdwjKBdnESqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYP2%2FN0SXVZWTnN2BKtwDVsKMWCU5wfZu6kOKrOkCUXeIw8zNHsMNUbWzPlGUZj%2BYTgE9DhqMMZh2B6VoS1CPw5mE0DHlL96AY%2FUzrSHdW4FCPAFtAmip4FH46z1Js9P5nkIsxUJlAT3V85qydRJM%2B1GJzbzpIt9Yq1YdfQRnlhPlAWvEPphaKnYCJC%2Fuh6bQPYrR89eMKCweDzMGnolFFLwfrl%2FjNg7RxrgJjtVO8A31PH%2B7snYUF%2B8IqjJ1gx56niBzFZ3x1OM5nFl9U%2FfKc0Jzy5mlMDFDpYXsNbcwDS%2FvLRdNypBE%2BZsJKyij836RYp%2FXkrkH4%2FYr8RxKmKrM2Mx5WrAeFu2nz4byOWP5FYwTs9zFMPXWqaEA6SdktN3zvpRLKGIYirRoPykm8zT0Tb3Q5Rx8w5X%2FqhQJ%2Bcnnr9LxJqG9tw8jQ4GgYdRIvOWb2CYx5FeEDZ%2FODkWCgKSawdl9gqulhF90UAVV0gQc%2BaCLbvZ1ny0OKlNwfqS6AN6CPiOZ5RWl8kQbl7KwjE6SRgNgq3j9YXXaBAO6XqVqQ4MOshhHsCcrXK0rjx61%2Fay8MW%2FN3T3Y764yrUm7s%2FWk2ilDJBpVT6DxaaJLr0j32FMgoJdzPnXaPv7f7PgcMD%2FCR9mNQUI57M62ggswqIHjvQY6pgFK1WO2rMUDqtqL7H5MTPehpcNk%2FOOcabKmigUX%2FYE9mLtx2ur5okIQeDA%2FTLQSpOmOg8CtTJ0ZHqsGNSPZsXv9mRzp1XZhKlI3eQ0fTGwyRWJt9n4w2tM7Fsjc4HtVCjo3CySsCdxxUlgLhVt58rwXwGuZZmx6C1F%2BEVCdeyYH1QPTTa1kYG8dD5T2pyjlrGfuNEmMJxSaSCLcEGpUQ2sZ4lqAnW3s&X-Amz-Signature=0749ecee35ac46b046e93c1d5c53fd682170091b3e34888b3f6c4b3b6745045a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYV3RWNR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfNoVXGbrC3IRjoUHXK8qI204jHveSvdWtHxEHnlGVoAiAi%2BJh1hHQXyP1gJAu4DVTHqtY%2BwEUFFmjUQmZzAPfoQiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDChMSCud2wyw0aGaKtwDpfysNunuqb4dZ4P8VUshk4SkcVicqGpSa3p3dyehQ4pYW5wP84eH2HHNvuqud35m98lOtqK6J2RVqkrmKe1Cdn1s6DxVkCLtkz2KKa2jQJR4NfaYiJv4Rx1gtG8hlLHJjafnFpw%2FlxZj1mj3xxT4Ro2CsnofyUBv9optH%2Bs6k%2BzdvC84IfWAsY4A51n23BZeeLmULwLIB5NEt5dgXnL7sCu39SnPVijZ38anf3GIG4Z5FK89xBu0puI7GNGb81S1OZm2GizQB5M5ce3DyqclE%2FEaCxHGSZXPlCTgj4SKl3zv0nmeCtr9AGdwpIYoV8dizdpn3cRSqzKY9jvF9tVJIk3mDoQ45LPQH1W6lSFuMEsAO%2BOn2%2FjYlE6KDZjA25hhgAuCTs7ZM%2BlvCnrqG61oUhw0r7JHGB4WJHyOZRNIVGUGjhiCtuVDSaf%2B6W5SDCaWNDoplI7AjgCktzx7xS0tGHD5tYAuMuYUHNcKcxdYoDVH%2BRYCwah%2BGckdn%2BUt4VwZ16h7p5UnXpvOS%2FAF3tNuSyvmft3U7X5mHl2a4NQg0%2FY4HxAHmAB1fxC3nOAm0DVzQF8QKy8mQnRX%2BROmX%2BaEYOlsmXos0kmeco%2FHgBPL%2BneysyxWffKIBszJHAIw%2F4DjvQY6pgFq1He%2FoMZS6HqNIofrsTx4qrg%2FoohlKTuDjSb7pPKuK1xksMb3VdNa8iV7X61pNTr4fDLUlDdx6Oceo%2BfayMYM2oUN7na3xU6oytYaMZhRWWGpGzsS8KoEHT9NDQ1J%2Fxrpnalya0A3aJu8FHMm4hrFad7oZ1SibKG2TvAqaBsZGjkEpFb0JPEFmibqNWI1aVA5hX7OvVI9D14v6lrdLvWtQ4J%2Fz5pm&X-Amz-Signature=49026fea3b36017c4462e00ddff6e3ab757ed7a990f9142369bf265b756b4f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
