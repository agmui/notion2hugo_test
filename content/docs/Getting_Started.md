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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFHOT7M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDosgr9kMcfHZZn6DdsX4rGu6WkRwwX%2BW1UzYfcW1wUVQIhAMeKs6He5XfiO5zeP2TALycNUFw29vpru9VCck08r0IPKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzimzFN5vfGo5is1eAq3AOhNWYw%2B48Qemw6JdmREogUnKjVJxvg1Jtrq2uC7A98p2zD7%2Bgn7Xshdbgk27b0Lhke6%2FG8Iie4m79Ox6w3dZkIqPPI1ksYAiYkLPg9lHj03805WrJYrfqRQcGBKP0O2r33X0Zj4pQqRm%2FpsQ5EUJvtpwouZcbvyxFIerKxoVsbNpWFTiS7KK%2BmtY5gK2qV8avRjqI9eGjDuM1tb1ZnAHXOSaUWs4mPbwjKQOmO30J0MCt0rRy9Iodi%2FxZcah59Q9IQlAeiKUEhkk0MskqyrPZ4JIX5to0jaRchModbS423fOq7xgdv3UtpnjgBOtntLBkrt%2BRCExh8JsKrJDr19atyTKso7QBQSrSb%2BJKNRc49uIo2eq7BiJynXupo6edkGpDj4zRYXT0rj1dLPitwQ2NJQuGJMnXhRuTwHgXP1h1lGqsVz%2F%2BSfgKGlojjbFr9Q0Y5jxtWIEz36GGB%2B7rOQZjKsLq6j7BmXMf7JSo1W63uIw3AI%2FL817lCfsNUZ6L%2Fo37LGwXB%2Beu3iSP2rICLFIo9ShDdQQxDeAveHJOiODVbILBRzpzBKGRmJ32D%2BPw3OOJ3sX%2BMjjAi6Xy9sFgSCGhrk8tgExo%2F8aTe%2BfIztkibE0QUApODd64t5sNgoTCxmKPEBjqkAfiYSPWaZSP4qIM5YZB9w5nFPpyrnMvlW3V%2FePZB6nR%2BvUncbaTmJN3S5Lr79Sp14TDWrosLSuQ8SEHIF9fe5LWBlrx1vQYWX7iCkFEm7IxwSe23MdkgMMcMz9HqAC4PQwINPq8pQdffZRfchVs0YVZOZb5uhWDHBVGVgBhVtriy3S59vbJRfOitIDjL%2Fa3T3F78xsjetjE4CbfAgwAkH1TRCAd9&X-Amz-Signature=e691ce02a2e27f5f32addc9c79f5c71a652b44040614a80e84b643273fb49c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFHOT7M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDosgr9kMcfHZZn6DdsX4rGu6WkRwwX%2BW1UzYfcW1wUVQIhAMeKs6He5XfiO5zeP2TALycNUFw29vpru9VCck08r0IPKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzimzFN5vfGo5is1eAq3AOhNWYw%2B48Qemw6JdmREogUnKjVJxvg1Jtrq2uC7A98p2zD7%2Bgn7Xshdbgk27b0Lhke6%2FG8Iie4m79Ox6w3dZkIqPPI1ksYAiYkLPg9lHj03805WrJYrfqRQcGBKP0O2r33X0Zj4pQqRm%2FpsQ5EUJvtpwouZcbvyxFIerKxoVsbNpWFTiS7KK%2BmtY5gK2qV8avRjqI9eGjDuM1tb1ZnAHXOSaUWs4mPbwjKQOmO30J0MCt0rRy9Iodi%2FxZcah59Q9IQlAeiKUEhkk0MskqyrPZ4JIX5to0jaRchModbS423fOq7xgdv3UtpnjgBOtntLBkrt%2BRCExh8JsKrJDr19atyTKso7QBQSrSb%2BJKNRc49uIo2eq7BiJynXupo6edkGpDj4zRYXT0rj1dLPitwQ2NJQuGJMnXhRuTwHgXP1h1lGqsVz%2F%2BSfgKGlojjbFr9Q0Y5jxtWIEz36GGB%2B7rOQZjKsLq6j7BmXMf7JSo1W63uIw3AI%2FL817lCfsNUZ6L%2Fo37LGwXB%2Beu3iSP2rICLFIo9ShDdQQxDeAveHJOiODVbILBRzpzBKGRmJ32D%2BPw3OOJ3sX%2BMjjAi6Xy9sFgSCGhrk8tgExo%2F8aTe%2BfIztkibE0QUApODd64t5sNgoTCxmKPEBjqkAfiYSPWaZSP4qIM5YZB9w5nFPpyrnMvlW3V%2FePZB6nR%2BvUncbaTmJN3S5Lr79Sp14TDWrosLSuQ8SEHIF9fe5LWBlrx1vQYWX7iCkFEm7IxwSe23MdkgMMcMz9HqAC4PQwINPq8pQdffZRfchVs0YVZOZb5uhWDHBVGVgBhVtriy3S59vbJRfOitIDjL%2Fa3T3F78xsjetjE4CbfAgwAkH1TRCAd9&X-Amz-Signature=11f541d73cbf44e2f759b177292523d3b7b62bd94944f3db0e9b5320a84d7e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFHOT7M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDosgr9kMcfHZZn6DdsX4rGu6WkRwwX%2BW1UzYfcW1wUVQIhAMeKs6He5XfiO5zeP2TALycNUFw29vpru9VCck08r0IPKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzimzFN5vfGo5is1eAq3AOhNWYw%2B48Qemw6JdmREogUnKjVJxvg1Jtrq2uC7A98p2zD7%2Bgn7Xshdbgk27b0Lhke6%2FG8Iie4m79Ox6w3dZkIqPPI1ksYAiYkLPg9lHj03805WrJYrfqRQcGBKP0O2r33X0Zj4pQqRm%2FpsQ5EUJvtpwouZcbvyxFIerKxoVsbNpWFTiS7KK%2BmtY5gK2qV8avRjqI9eGjDuM1tb1ZnAHXOSaUWs4mPbwjKQOmO30J0MCt0rRy9Iodi%2FxZcah59Q9IQlAeiKUEhkk0MskqyrPZ4JIX5to0jaRchModbS423fOq7xgdv3UtpnjgBOtntLBkrt%2BRCExh8JsKrJDr19atyTKso7QBQSrSb%2BJKNRc49uIo2eq7BiJynXupo6edkGpDj4zRYXT0rj1dLPitwQ2NJQuGJMnXhRuTwHgXP1h1lGqsVz%2F%2BSfgKGlojjbFr9Q0Y5jxtWIEz36GGB%2B7rOQZjKsLq6j7BmXMf7JSo1W63uIw3AI%2FL817lCfsNUZ6L%2Fo37LGwXB%2Beu3iSP2rICLFIo9ShDdQQxDeAveHJOiODVbILBRzpzBKGRmJ32D%2BPw3OOJ3sX%2BMjjAi6Xy9sFgSCGhrk8tgExo%2F8aTe%2BfIztkibE0QUApODd64t5sNgoTCxmKPEBjqkAfiYSPWaZSP4qIM5YZB9w5nFPpyrnMvlW3V%2FePZB6nR%2BvUncbaTmJN3S5Lr79Sp14TDWrosLSuQ8SEHIF9fe5LWBlrx1vQYWX7iCkFEm7IxwSe23MdkgMMcMz9HqAC4PQwINPq8pQdffZRfchVs0YVZOZb5uhWDHBVGVgBhVtriy3S59vbJRfOitIDjL%2Fa3T3F78xsjetjE4CbfAgwAkH1TRCAd9&X-Amz-Signature=9b297070451fa34a237798c8b8c31ecc1bb4c7ada54115208ffdc80ef8cea8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3FCOQW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHSjWXUIbmuHSnPfovNITuyOVwGrMVE8piMbch220Ox7AiEA%2F5ZGvjgwNXl1%2Fx%2B9bv4rC8FkaAy1ZMGsQGo9s8uEglAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmNJWAYIfTXth%2F0OCrcA%2BxKQMshAvix1J8IIXKxCKjQtbOruvfjuQxz%2BhVXGaA%2FAX%2BIp0L9o2%2FN6YQo9pCh4yazlZBtsPElH8T5RPC90pM4sGqAFOR1DdrHALELQ5G5jdcvIwncU0Kpjge7tUInd4hy499dtKfezcqbTEsNHLKxkrD4pU9cYr3UZYdwiDud1%2BtGSe2xApfE8CO9Nlf3%2BmtvhT%2Fra5s1pNoYPuqB%2B0HXlvvc1QcYPcsPg8aP9FxGjULIBX140K%2BfdcNNUAbh150F5NOjFyHsHRKRaqHf1%2FKoaC43BuUrCIzcl%2BeJ2cASz12UPksxWGc48PRukMwDMzJTSzMR4oUkP4CwNxekMuzSLY7F8AMK3b3ZY4EtDYH0HEB5%2FSV1f7K9WmgVByohfs6%2FvlCeZlLgcyNUiTNB%2Bk1poEU4bqeqNFMTXHgPR1DlbU7pvjvVndCyKUAau2ySy54agjRdHeM3b2hVO%2F4zCByYC%2BvQqVsWdCRCTThD4QthHewoS%2B9bhgnhxmtCrp66U3NwpEOkMHWJlpR%2F75POYu1AeVA55nj7vTacSPokk6DR7OQoKoAou2tyGcZcslbkbPK5UWfFn5CYGIYANxfF4LgVShxOO0Jn%2B6Witep2CfIyTX%2BeNbD4F4%2BIPMygMKWYo8QGOqUBVQwKGkx6bNEXvj%2BM5nGHjcUevhdxoBIKs7rqZAkNQLD%2FTN1zmSffjTtpuZrQ1xORJit4WoZMEToalYfWUz2NEMDJOrotwtfhz3z1PnjzFLlFaps%2BqAs2APJHs9UR45FlkmIpbVR8%2FwUtFsJpOjiRuw2G%2FsjMYDnDaj3R%2FwdyfmpjJTAJFbtlkf3skcGFjN0rNi0wTkJyT0a5lB6cp7ZdF9MAblU4&X-Amz-Signature=e9189709102da1ea0396e054b319a885f552073022a9d35dfa9f4e141a04b0b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHD22CM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCEIqLfCVTpmWBnZ8t0D7c1WdcgyMOcGxxIeV%2BgYJ%2BOjQIhANDEIVHVRdTetTfMuUxtsgsQX2fslOAxcK5QAEa6BUk%2FKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVo5%2Fk%2B7WkADjRgw0q3AP3xNHeAuPoohKVyKn75MgcQk1c65YMkbkXFcqktNrM24MJVcFg8VkoWjQnQ5EKU0fDi7RYsSJvPTvY24pz6zbqPZTEXkNQoHlX5aOs9E2sy66zdCcVH%2BAPAc6A8YyAvElGpln%2BjxJrtf3xjPJhbUX2pB%2BSYoXlNEHabAGY21ZKw5mOm5L9zFjl%2B08zDf8lRXwvUWeXHc8OAeOmY4lD4tK04am%2FonD2P70vjnj69KXbMSEOW7Xl4qL%2FgP3w964wMmXHfXx9CporOoUP3hf%2FrJQiNFK6ANYrs4gTpUe32Tu6FTkVPSfjUINqtVlYYEBxQOG3wp0j05XvNU2E7TSmwVm94M3JLz0n24SpBw9P5kuNIMidY7E0WIOq5OJAlzqoU%2BttfgtGtqUN7112I1QO5MDYyq5%2FdeBDIg7vPkAgzPQ6uUF9K%2F2iTpiz280w%2B88caUHTlfWHVEqMfQfSEfZ2%2FGrRIh%2Bzt4dM1BhYFx%2FP5u3fne4a8rbrdtzYRJU3w7%2Byiq6%2BFpXenFcRbF14IFo8bkCOvv1k4vXJb2WpUxf8MP4i59WzD%2FTddSwfmF%2BVE5Ws52rObd9ESxMriiTxX1betJbDUhnnAxIW3Aoa0btU3byF3LEDDptBrROsNPeC0DDrl6PEBjqkAWcnyyJJhykm%2BV1%2BL2FXatpYRX8Yq49SyJKAASlqOPWlDozTRWSa27dQrxKAofq7As%2Fs8QfNkaN%2BCAyQBf2%2BJi7huiSvwNjg75GBl4mXpo3MktJZD9FrYIjyugj7aT4wgG9m4EPoiAStP6VjdKRipe35DQVs%2BnNoCGVE37wrDEHAzO94iQxHb0uArManm1vPkM91PJQUadGXSDBJPiVAT1O6YE3R&X-Amz-Signature=3979d174f714140a142c03f40b277f7a7aa94b9ed37bf2ef3695787159e91d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFHOT7M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDosgr9kMcfHZZn6DdsX4rGu6WkRwwX%2BW1UzYfcW1wUVQIhAMeKs6He5XfiO5zeP2TALycNUFw29vpru9VCck08r0IPKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzimzFN5vfGo5is1eAq3AOhNWYw%2B48Qemw6JdmREogUnKjVJxvg1Jtrq2uC7A98p2zD7%2Bgn7Xshdbgk27b0Lhke6%2FG8Iie4m79Ox6w3dZkIqPPI1ksYAiYkLPg9lHj03805WrJYrfqRQcGBKP0O2r33X0Zj4pQqRm%2FpsQ5EUJvtpwouZcbvyxFIerKxoVsbNpWFTiS7KK%2BmtY5gK2qV8avRjqI9eGjDuM1tb1ZnAHXOSaUWs4mPbwjKQOmO30J0MCt0rRy9Iodi%2FxZcah59Q9IQlAeiKUEhkk0MskqyrPZ4JIX5to0jaRchModbS423fOq7xgdv3UtpnjgBOtntLBkrt%2BRCExh8JsKrJDr19atyTKso7QBQSrSb%2BJKNRc49uIo2eq7BiJynXupo6edkGpDj4zRYXT0rj1dLPitwQ2NJQuGJMnXhRuTwHgXP1h1lGqsVz%2F%2BSfgKGlojjbFr9Q0Y5jxtWIEz36GGB%2B7rOQZjKsLq6j7BmXMf7JSo1W63uIw3AI%2FL817lCfsNUZ6L%2Fo37LGwXB%2Beu3iSP2rICLFIo9ShDdQQxDeAveHJOiODVbILBRzpzBKGRmJ32D%2BPw3OOJ3sX%2BMjjAi6Xy9sFgSCGhrk8tgExo%2F8aTe%2BfIztkibE0QUApODd64t5sNgoTCxmKPEBjqkAfiYSPWaZSP4qIM5YZB9w5nFPpyrnMvlW3V%2FePZB6nR%2BvUncbaTmJN3S5Lr79Sp14TDWrosLSuQ8SEHIF9fe5LWBlrx1vQYWX7iCkFEm7IxwSe23MdkgMMcMz9HqAC4PQwINPq8pQdffZRfchVs0YVZOZb5uhWDHBVGVgBhVtriy3S59vbJRfOitIDjL%2Fa3T3F78xsjetjE4CbfAgwAkH1TRCAd9&X-Amz-Signature=8593cdd401603eee061fa6d9212ff4dd3a6d6334dbc955dc61551900f266bd8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
