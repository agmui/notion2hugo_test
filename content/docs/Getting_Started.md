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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KWV23YW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMyz2jk8nQ%2FK%2F29IIgyGj%2Bi8%2BEUZ0yMSz6LOjCEj3eSgIgWOj4Rf4pnX3zpCcieN9QVayI%2BtLaVPi7NR3IQAWAJE4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoTQ8VRHP1T3v2pnyrcA1xnS%2BN4jmZMehX7h8lDlhgqK7%2BOdX8Bx4UUy%2B1uoWADXm%2FS%2FlIdojsUsOs0psBXRs5HowlECddwFkMNX4gyVA1nZjNs6f%2FbeTjYK7%2Fp32549LOt7os95X0aiPGWxP%2FR4Gfl8DC30zZ9cKFntiLjliDOtkYytiVKWdgcd%2FqA%2B1oizI0wNRuDibYPg4I3cxFD42MgvC7ctQckvAbtroB9FxznJOc7MiMTbyApUbk42PMPZs%2FFj2zY9cGnefr6ALOpjnm5SiOoqnM95wkIg17ScYeQVIDosbhoxJU72BHSWZwOjvXMjuO1YDb7BrgxMr0Hz1wr5gNEMCIH5ow8slSuHiyTjJYzOWwDIeE%2F5cdr1oSLvP997JHLxsnfZ4wzp3KQ7nOMtV1OWaBtwxNFj%2BTW%2FbjkUQ2ob8RZsy8nDKPyVVOSjHcYROoGFAM1llTZfx4LcuzffSQzSfI1FbiS0h1IAsfZqqIBv7JEipieP5vHIRvZWGqzBYIysfcHX08Ts6PM3xr%2BWV4JKl4%2BoEgwQOWsh3VAhUSMxpEZmwSCRn2JTQjSF9X7oW%2Bc8BJToI4jTt3lGCLryRkNCqLgXebiluRmiYtxCHGHJcB1NZ2hX6AKZC1SAeTSVZ8GnID3c%2FHKMKKy48EGOqUB%2FKjEJmevxH1N12vhWDQ7q5D%2BStt5TsWwfalnwaSIzY9R7cEFknmIsmt6HuYG6qm1NUGqRxu20XrTrNpd2IoVANv7g9C0C17aL%2BSWdq8scy1XZIFXnxCoQ5BmqEhhYcVSpGy2GwQWX70MOZzQ3JUQjtClI0fx951YCUD24v0NO9COc6ImM3PbWsLOcYxVmEMdzKTD1PTtAaIRhuKF0ooiUL2FY2sG&X-Amz-Signature=70621eb98b9c950429b30fe0459ebdbc9ae9d4cc2b0d956c870ba7438a23e8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KWV23YW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMyz2jk8nQ%2FK%2F29IIgyGj%2Bi8%2BEUZ0yMSz6LOjCEj3eSgIgWOj4Rf4pnX3zpCcieN9QVayI%2BtLaVPi7NR3IQAWAJE4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoTQ8VRHP1T3v2pnyrcA1xnS%2BN4jmZMehX7h8lDlhgqK7%2BOdX8Bx4UUy%2B1uoWADXm%2FS%2FlIdojsUsOs0psBXRs5HowlECddwFkMNX4gyVA1nZjNs6f%2FbeTjYK7%2Fp32549LOt7os95X0aiPGWxP%2FR4Gfl8DC30zZ9cKFntiLjliDOtkYytiVKWdgcd%2FqA%2B1oizI0wNRuDibYPg4I3cxFD42MgvC7ctQckvAbtroB9FxznJOc7MiMTbyApUbk42PMPZs%2FFj2zY9cGnefr6ALOpjnm5SiOoqnM95wkIg17ScYeQVIDosbhoxJU72BHSWZwOjvXMjuO1YDb7BrgxMr0Hz1wr5gNEMCIH5ow8slSuHiyTjJYzOWwDIeE%2F5cdr1oSLvP997JHLxsnfZ4wzp3KQ7nOMtV1OWaBtwxNFj%2BTW%2FbjkUQ2ob8RZsy8nDKPyVVOSjHcYROoGFAM1llTZfx4LcuzffSQzSfI1FbiS0h1IAsfZqqIBv7JEipieP5vHIRvZWGqzBYIysfcHX08Ts6PM3xr%2BWV4JKl4%2BoEgwQOWsh3VAhUSMxpEZmwSCRn2JTQjSF9X7oW%2Bc8BJToI4jTt3lGCLryRkNCqLgXebiluRmiYtxCHGHJcB1NZ2hX6AKZC1SAeTSVZ8GnID3c%2FHKMKKy48EGOqUB%2FKjEJmevxH1N12vhWDQ7q5D%2BStt5TsWwfalnwaSIzY9R7cEFknmIsmt6HuYG6qm1NUGqRxu20XrTrNpd2IoVANv7g9C0C17aL%2BSWdq8scy1XZIFXnxCoQ5BmqEhhYcVSpGy2GwQWX70MOZzQ3JUQjtClI0fx951YCUD24v0NO9COc6ImM3PbWsLOcYxVmEMdzKTD1PTtAaIRhuKF0ooiUL2FY2sG&X-Amz-Signature=edefbb4bf4fe1fb46e31640f97f63af5cfded334a108e1980f7aa01b2d1dd16f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KWV23YW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMyz2jk8nQ%2FK%2F29IIgyGj%2Bi8%2BEUZ0yMSz6LOjCEj3eSgIgWOj4Rf4pnX3zpCcieN9QVayI%2BtLaVPi7NR3IQAWAJE4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoTQ8VRHP1T3v2pnyrcA1xnS%2BN4jmZMehX7h8lDlhgqK7%2BOdX8Bx4UUy%2B1uoWADXm%2FS%2FlIdojsUsOs0psBXRs5HowlECddwFkMNX4gyVA1nZjNs6f%2FbeTjYK7%2Fp32549LOt7os95X0aiPGWxP%2FR4Gfl8DC30zZ9cKFntiLjliDOtkYytiVKWdgcd%2FqA%2B1oizI0wNRuDibYPg4I3cxFD42MgvC7ctQckvAbtroB9FxznJOc7MiMTbyApUbk42PMPZs%2FFj2zY9cGnefr6ALOpjnm5SiOoqnM95wkIg17ScYeQVIDosbhoxJU72BHSWZwOjvXMjuO1YDb7BrgxMr0Hz1wr5gNEMCIH5ow8slSuHiyTjJYzOWwDIeE%2F5cdr1oSLvP997JHLxsnfZ4wzp3KQ7nOMtV1OWaBtwxNFj%2BTW%2FbjkUQ2ob8RZsy8nDKPyVVOSjHcYROoGFAM1llTZfx4LcuzffSQzSfI1FbiS0h1IAsfZqqIBv7JEipieP5vHIRvZWGqzBYIysfcHX08Ts6PM3xr%2BWV4JKl4%2BoEgwQOWsh3VAhUSMxpEZmwSCRn2JTQjSF9X7oW%2Bc8BJToI4jTt3lGCLryRkNCqLgXebiluRmiYtxCHGHJcB1NZ2hX6AKZC1SAeTSVZ8GnID3c%2FHKMKKy48EGOqUB%2FKjEJmevxH1N12vhWDQ7q5D%2BStt5TsWwfalnwaSIzY9R7cEFknmIsmt6HuYG6qm1NUGqRxu20XrTrNpd2IoVANv7g9C0C17aL%2BSWdq8scy1XZIFXnxCoQ5BmqEhhYcVSpGy2GwQWX70MOZzQ3JUQjtClI0fx951YCUD24v0NO9COc6ImM3PbWsLOcYxVmEMdzKTD1PTtAaIRhuKF0ooiUL2FY2sG&X-Amz-Signature=fba250547dd67a2856507c77da6fb550fda23778202884f0030098f5a3033bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKJ6J27%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFG5T0w0Hb5gEjKoO0zXf8J%2BWBOTaVZ%2FO6uuxjJ07jmSAiEAgcmKGz0kVs71SRQWK%2BEgruDFPT%2BbSSREQMQCpoSeqVYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4QIj7VRd9CPNt10CrcA14ySla%2BTwwaXWoBkPn1og3QNTo4u3c8sGo4cahTwT9J%2F7qwVuNBFfnQUxAV2%2F7711t9HMUfDhHl4hs9N9rhFHvnvJJ84PuHSP87487R1rp6s%2Fr2ptpE8g4UouuRUkZMFAIHQSkeB2GBAOCWVF1fCfwiN53K%2FT1HfLXUV%2FLQ%2FURDaK%2BtffADyo2DIbfDEFvurQAIQ0qhVWtLPPLzD7mmGUEGCAFEvOLm2dGuujLLgMTDjrpDvCOA8G6TRGfSUmM4n8hjgFcYY2%2Bncis9nUYe7hujBvv1QfwGP%2Fpa5U1DByShaWXnX01xpZO1UGFqA2iZ2vekGoXreYWVg0754eLkThivnhOugcynL6RzIkQC%2FURlQWAqhnLm6IvLiAZaNFxvEnNpzg9cr2pr0MznRMctzP02w%2F1Ll7COqF6tdRXUfjAyiOMD58K%2Fjr%2Bcx9aoUydwTpZ1NrS3m5dj7LICGPd4H%2F6pIcaaD28iGIJ8zlbYd9%2BzzLtyzQlN8d9ZuHbOBjYp7N1xSDREGdsQmARcESWCyN%2BAIRlZkvAC898G%2B2UPN9pP3879QUbKqHFCaThxNG2aJNlQZ%2B7CIoEqN0Rr2IzhGVLiItYcaUEem8E5mE8u8NL3xUfR46kUEk%2FpBwpmMLuy48EGOqUB26uUxUzEwERnTLrQ%2B6OOLUqPixYPbZkRNTnHuWOEhBVa4%2BM0xBW6ppaSGbAY31MpWog3yyhx8zhPLahpy3BNn0oEbUsuKt%2BwKFUJgP5QyjqM2z1du39m%2BjI6lFJS7p%2BiOi0FonJr1WYHSgzREjCk%2FUx%2Ft8hqmrf7gdHhcW5CwVKv8FddxjyKqrCXWySckII2vsdHjduPa4Zus8LNwWZ32ZcDKFAu&X-Amz-Signature=ddf1451fd6917cebeffd3c97ee25e54a1c4b4008f5843f5a88bbeacca5a24834&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBU2PBG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZA0MKvzo4N84q%2BOxAxb7%2FEdhQ9ZIDeXIEclbWGQj1nQIgTRNrYOnLpBdENEcyqpmLIKzTU4WVf4FbdX0LQqWvqeUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJOoEQ6lAbTGHoFdircA7GjulzMGHA7QEx63vAIKyqTeRDemCpdf2OdNUxiizqJWsJBoQTgZgapAYcq5%2F6BgttG8SRf4CwMeRbKJj4knEoPz9cjGSoDIz8MXqkU7cjaCHfKOAgLmuBUSA1tJupagLzeVoGLcPoYa8%2BDdK%2BF3UsfP0OTTHu4TQwAIpe62yyfjkoFd3hwURUiL1u6OE81vQmyM6k84GEE%2BbhUI%2BAspNesjQQ0WFOMzJpb9gCd8RVJiMGszyFEbxxgYuACKW%2BgHVeS5ZSxteulLdui8duc5kMPyNmHJDurdlOqRzbIOKrz31hFBWdbTjUXLO5MUvg98QiA2I0LnhwtprWI6JaK9quj%2FzunBZMjTAvqAAaP8x0tFfFUE6l8Bkqw1RQ7NNvLv3N0GXcwICG9QtPb7KMZ8XNwK7wneCWwwr1gnQbL0%2FmQf3GoELSM8t7vnDF4cXiYwWFhRV3u6cja2oJxnE%2F7s7jgdi8giC4MEuY6GqERdaJGu9KOUqJ5lCOzKjhkYn2I1fyI80pa18VYwq6mC3PQSjvqanvrGrt0Newh%2FrVq5K7pAhE7NN0vY0N5vdBJx%2F3hKVhhtWgEzIC%2BXXYMtAKymkPeX7twptXDNWqGgY2BHnC8uru1JxZB2BV0tHGTMNiy48EGOqUB8CHrrtJjD7AwG1Zy4ljF1KcL0C2EdeyQu93Eh4GoGMnkA2EK%2BYa7BSUTxSoPP7jPGvI%2FFZYwxak7Pf4w1alJm8JlCzjdXQzFXHL0b9%2F4Nfk%2FmTAl6wINQZKTIhGSd1RZgz5UBoBLN9rPvf5ygdhcsYBXG%2BIL8RPQxt1hsX3I2iEdgtTi9Jb77hn%2FE7PjPSWlpHZSxhQDCiI9VPZw5g0Ew2K26mTf&X-Amz-Signature=563c96639b7c0d8b5409b3f501adfae504faa8b76fb95926a08eef74bb3c20e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KWV23YW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMyz2jk8nQ%2FK%2F29IIgyGj%2Bi8%2BEUZ0yMSz6LOjCEj3eSgIgWOj4Rf4pnX3zpCcieN9QVayI%2BtLaVPi7NR3IQAWAJE4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoTQ8VRHP1T3v2pnyrcA1xnS%2BN4jmZMehX7h8lDlhgqK7%2BOdX8Bx4UUy%2B1uoWADXm%2FS%2FlIdojsUsOs0psBXRs5HowlECddwFkMNX4gyVA1nZjNs6f%2FbeTjYK7%2Fp32549LOt7os95X0aiPGWxP%2FR4Gfl8DC30zZ9cKFntiLjliDOtkYytiVKWdgcd%2FqA%2B1oizI0wNRuDibYPg4I3cxFD42MgvC7ctQckvAbtroB9FxznJOc7MiMTbyApUbk42PMPZs%2FFj2zY9cGnefr6ALOpjnm5SiOoqnM95wkIg17ScYeQVIDosbhoxJU72BHSWZwOjvXMjuO1YDb7BrgxMr0Hz1wr5gNEMCIH5ow8slSuHiyTjJYzOWwDIeE%2F5cdr1oSLvP997JHLxsnfZ4wzp3KQ7nOMtV1OWaBtwxNFj%2BTW%2FbjkUQ2ob8RZsy8nDKPyVVOSjHcYROoGFAM1llTZfx4LcuzffSQzSfI1FbiS0h1IAsfZqqIBv7JEipieP5vHIRvZWGqzBYIysfcHX08Ts6PM3xr%2BWV4JKl4%2BoEgwQOWsh3VAhUSMxpEZmwSCRn2JTQjSF9X7oW%2Bc8BJToI4jTt3lGCLryRkNCqLgXebiluRmiYtxCHGHJcB1NZ2hX6AKZC1SAeTSVZ8GnID3c%2FHKMKKy48EGOqUB%2FKjEJmevxH1N12vhWDQ7q5D%2BStt5TsWwfalnwaSIzY9R7cEFknmIsmt6HuYG6qm1NUGqRxu20XrTrNpd2IoVANv7g9C0C17aL%2BSWdq8scy1XZIFXnxCoQ5BmqEhhYcVSpGy2GwQWX70MOZzQ3JUQjtClI0fx951YCUD24v0NO9COc6ImM3PbWsLOcYxVmEMdzKTD1PTtAaIRhuKF0ooiUL2FY2sG&X-Amz-Signature=1cec4a00debc8d3bffe50515ec733141c9f533d83efcf9d23504f4ee915aca70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
