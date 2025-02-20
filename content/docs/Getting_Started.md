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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCGYVNG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU%2FUGeabnfNldOFZ0h005uAGtBmSerffNVYsc0ne1UaAiBgxv4DhFXWie4MNv9ZWX%2BLAOdn9VuP59SA4UyjPGt9GCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn8quHeCcySDV9UgiKtwDQtnvj85WF5WfyP8B94D9WtjNdnzlIo3eU9AuyueYOujh2YJDFNa6duMfCw3N8NszCd9kRBX36XpZlCszf5cwumFfOY7mRT2cxCVBZyUn7L%2FR7RSLd2xVSb7SvANRANMT4Lpzw8qmmJVQVwS0Ua5wvK1Iu4ig7muBdLgNVqTD0HfiyHg0UXRJdZSk6rWd0HyuhKTbHqJYlg7Grm%2FH%2BnrPfo1WWUMnpnJ63BYjnk2wI6aDBdV2pFQV9d31v%2FzfdMQ0rvU5qLqO6H5NEX8%2FSHKSX3HOJhDAozssd4tXEr%2FLCVAuC%2BRXMFlCfWp7%2F0TBZtL9b%2FHsYAFlZ8Zum2RqO%2B6MIFISRY%2F4Bnh8N5c3rvQqrjNw%2FyzB9N3fk%2BuCtgY01exHNTF9vxTTQHCVYI70Jjpu1F7iH3xdItIJvRzssvslz7z5C6xKhxSavqAjfSy5P77v4W3MOEObs6BV44XE1JL5B4mt3C8slOtVrdWQot1xo8KikNYsd37vrRiudwBzaJVDByd7a7STXisrhHAwDGoIOU5SPVS1iXeiPdcubhVoc%2FaIFCTHz3O0y5o42KUGUF838857738rkXVkgRwsay9h0CTSnvLluOG4t5e%2B9OnGSZWCaP8nDSTh%2Bdsd2LkwxI3evQY6pgGBCkhvKkSXN24%2FQLVPAvzfjgTYPhZ%2FxuDlDkUdATtm3jVkl3t3vDl%2B096Xc4f6suiWqx97VhN5dhBQAT2WLszWVsYiWgdCjpk4QvHRBX6jYDEMbsRpEN%2BFc7bPP4Qcq3pP%2FnK79%2Bq5kgFzLyLMWrW%2Fy97GGWW8NTocoyZTQIUb13hIoVMy2kjWh4sAiXdYW7H%2FUwu68Mdld57Sgd4HeUeZrMsFUE1y&X-Amz-Signature=c3ce4b77bed144883dba6d454968ea12863c5b4ae2cebef1eed8a7c7b52c3e14&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCGYVNG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU%2FUGeabnfNldOFZ0h005uAGtBmSerffNVYsc0ne1UaAiBgxv4DhFXWie4MNv9ZWX%2BLAOdn9VuP59SA4UyjPGt9GCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn8quHeCcySDV9UgiKtwDQtnvj85WF5WfyP8B94D9WtjNdnzlIo3eU9AuyueYOujh2YJDFNa6duMfCw3N8NszCd9kRBX36XpZlCszf5cwumFfOY7mRT2cxCVBZyUn7L%2FR7RSLd2xVSb7SvANRANMT4Lpzw8qmmJVQVwS0Ua5wvK1Iu4ig7muBdLgNVqTD0HfiyHg0UXRJdZSk6rWd0HyuhKTbHqJYlg7Grm%2FH%2BnrPfo1WWUMnpnJ63BYjnk2wI6aDBdV2pFQV9d31v%2FzfdMQ0rvU5qLqO6H5NEX8%2FSHKSX3HOJhDAozssd4tXEr%2FLCVAuC%2BRXMFlCfWp7%2F0TBZtL9b%2FHsYAFlZ8Zum2RqO%2B6MIFISRY%2F4Bnh8N5c3rvQqrjNw%2FyzB9N3fk%2BuCtgY01exHNTF9vxTTQHCVYI70Jjpu1F7iH3xdItIJvRzssvslz7z5C6xKhxSavqAjfSy5P77v4W3MOEObs6BV44XE1JL5B4mt3C8slOtVrdWQot1xo8KikNYsd37vrRiudwBzaJVDByd7a7STXisrhHAwDGoIOU5SPVS1iXeiPdcubhVoc%2FaIFCTHz3O0y5o42KUGUF838857738rkXVkgRwsay9h0CTSnvLluOG4t5e%2B9OnGSZWCaP8nDSTh%2Bdsd2LkwxI3evQY6pgGBCkhvKkSXN24%2FQLVPAvzfjgTYPhZ%2FxuDlDkUdATtm3jVkl3t3vDl%2B096Xc4f6suiWqx97VhN5dhBQAT2WLszWVsYiWgdCjpk4QvHRBX6jYDEMbsRpEN%2BFc7bPP4Qcq3pP%2FnK79%2Bq5kgFzLyLMWrW%2Fy97GGWW8NTocoyZTQIUb13hIoVMy2kjWh4sAiXdYW7H%2FUwu68Mdld57Sgd4HeUeZrMsFUE1y&X-Amz-Signature=53fbb61b438744ff1c9c5cb99ab1f684c97c415255a7e0fe41f92abd6ea6c622&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS4PUNZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVsLlJ0VUM9qdPc6aNIrQ%2Fvml2ZJ7bxUvCOnQjIsCc9gIhANWhO2z1Y0%2FBcccAfwF0IXRV%2Fetf3%2FUX9oZ5C3ggClDBKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbTSS9ok4RFZC7XBYq3ANwE2ZASlw91LaIzNEPf5PrYbDBpRsZ0CYlD5OVBoYKgMb7jKN5Yt1%2FSD1agr%2FN5tsNOuDrTTaGjgkcEgMgFKQhU8XHemIpYbCEJxRqD9bY%2FaxmuCcnBve4Z8yBIWdzurK9lEk%2FvYx5O7dPGGJkFULiihOT0M23e7810ceZSkuxbrXyCWsSmrIP95v%2FZvKuET4KzkEeAEurZxjcFB4iiKIfhhahcg9URc84qeQ4E9yMu10%2B1exhsKdvWQgwbePSXJy%2BA6pPpZNieCnHzWI2Q0YXQdOm%2BaVDo8Ao2Zdhexoh%2BR1Rd5bReKcBLtPYyLAaO1VJJDIcjHtHkAIvM%2FBK2NHgDQRKR1IyxpEFQZGED0r0n%2F%2F1nSSIj5e%2BV08nS2Eqb6XzTy8vexPgSXWXWZ7VDPKbkbexrGHNSa%2BM7A3CVv1jh%2BZdXqbPQka8NgFwEgACjzmp7DusALrOu3zbf3hb7wjXm1EN45H8NgwIeKMp870VAL0bPJnWg77WkQLcakL1WpfydpAUVBgjXO6YjnqU58mvfTKfoUqKwtv9VCI%2BBG%2F6ZTeXke39T5SyFWd5yRZ109F8JCVjnySoCx9BZzZRm%2F%2FQVDfucYl0P9c7ie%2F%2BVjrK4gK%2BFztfeo5ZtSyL2DDLjd69BjqkAdlQxc2eFqfNwR71QNbOH652HkI%2FeIuPmdOCy598SVDpDNDUe6nboYPbKNT1NXpXTYkva3xeVRVLQASCOSo2GnkrZywcD3FpcGJPVpmaBr19lXMgqktamYB%2BzDI9bOST2gSVwG%2FJqSOr8cL1%2Fl%2BYc2sZU%2FtGR%2FgeYidOksuc8iDBmF9e%2FDucSnFLFCkHBrgXh2zSX8tX3BCoy713MK2ouR3Izw8r&X-Amz-Signature=cb4ea94c1544480d461e5af2978141158ab88023c37dbdca14936a1c5fff2bda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3P7LJKS%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz2SJKZqzXFcZqD09UxzJWjEAe3sgxEUOjqIb6B%2B2%2B%2FAIgBVzrB3EjzELccGqTFu%2BXUTT0x6OfXGJ%2F0g%2BGu172gLgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPW1tcggZ5U013IBISrcAxbPW3c797xTHv6iPpLBwTbOGlAQz0%2B%2FvJBaUEHFO1Zsesxyo9fym3xiUs8pFHysvzvS5tJjckoH27xW7R4CrYVoe1w4eaM87ymGrS6HkQ6H%2F2CiuMsIpnfjexO1rk9UUY9pMZi45zpqNM4giME7poBj5sCKHnZYIFn03ZJWqZTNpsSufz8ZShsDhrnbow7MFaqKnPbZ%2FmrlBbt%2BKOZu8tKruMyPKhhHH0cAIUQ0HRWGN3Tt7SxWMXtlJUf10kZv5jUbdWzsW1ega%2B9GI4xUkdHY9OvNNIvlHPtQvghPg79zD4hKHEyrEyFI30wgnzn62byVaWQ%2BCE9L9PEOQN7YtkBoCWAZZGR7exVOMTTKQtP%2FvW6uq%2BRCAAqg565eXRpo5l6PbOlwVgLi4qjeg9rooSHlnhdlm9EwQ%2FLGmR%2FinKbsbMcPBEAjPhlu%2BhrjzLdvFQgQSgvyB2ymwN7Lap%2BDD6bXbkhJFg5lTu76fnUwzNBLnZ%2BS9oZz3IKDMA%2FuxeBK59CCTE7tBYu1ATjslNQB5SC0CN1YPiq0G4ezecm992NHoApaJkt4uNdE8t2v9%2F1LqbZtGhe2YYV61R7J5Q0Jtoi22eVQF8nWD4p1ztBXEVsvwUh%2FqOgZamiX8%2BSAMOmN3r0GOqUBndzB9nxshSDVT7roxevnl%2B7iPqikG1fnAbiqy8kLii96KbW%2BYtcB6L%2BQCDnhC1%2FyGsU%2BWgLmxLQlS9d%2Fj2iq54jCmW7UaCwr3C9wBswbNm83qJMoZ3rXQgG0fQ4InXZk4GtyQXXj50zeQ7Jn9W%2F7K8eUWM%2FZTvHmBEB2aeoIsqIl2wFoAf5%2FQgKDacPqfFKxRve1LGkAgLZN3tidhHhp%2B%2FDq6imE&X-Amz-Signature=12c49414c6bdaf68779fe52a40f3487473d8058ee46c108801ba16d41a8b7a96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCGYVNG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU%2FUGeabnfNldOFZ0h005uAGtBmSerffNVYsc0ne1UaAiBgxv4DhFXWie4MNv9ZWX%2BLAOdn9VuP59SA4UyjPGt9GCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn8quHeCcySDV9UgiKtwDQtnvj85WF5WfyP8B94D9WtjNdnzlIo3eU9AuyueYOujh2YJDFNa6duMfCw3N8NszCd9kRBX36XpZlCszf5cwumFfOY7mRT2cxCVBZyUn7L%2FR7RSLd2xVSb7SvANRANMT4Lpzw8qmmJVQVwS0Ua5wvK1Iu4ig7muBdLgNVqTD0HfiyHg0UXRJdZSk6rWd0HyuhKTbHqJYlg7Grm%2FH%2BnrPfo1WWUMnpnJ63BYjnk2wI6aDBdV2pFQV9d31v%2FzfdMQ0rvU5qLqO6H5NEX8%2FSHKSX3HOJhDAozssd4tXEr%2FLCVAuC%2BRXMFlCfWp7%2F0TBZtL9b%2FHsYAFlZ8Zum2RqO%2B6MIFISRY%2F4Bnh8N5c3rvQqrjNw%2FyzB9N3fk%2BuCtgY01exHNTF9vxTTQHCVYI70Jjpu1F7iH3xdItIJvRzssvslz7z5C6xKhxSavqAjfSy5P77v4W3MOEObs6BV44XE1JL5B4mt3C8slOtVrdWQot1xo8KikNYsd37vrRiudwBzaJVDByd7a7STXisrhHAwDGoIOU5SPVS1iXeiPdcubhVoc%2FaIFCTHz3O0y5o42KUGUF838857738rkXVkgRwsay9h0CTSnvLluOG4t5e%2B9OnGSZWCaP8nDSTh%2Bdsd2LkwxI3evQY6pgGBCkhvKkSXN24%2FQLVPAvzfjgTYPhZ%2FxuDlDkUdATtm3jVkl3t3vDl%2B096Xc4f6suiWqx97VhN5dhBQAT2WLszWVsYiWgdCjpk4QvHRBX6jYDEMbsRpEN%2BFc7bPP4Qcq3pP%2FnK79%2Bq5kgFzLyLMWrW%2Fy97GGWW8NTocoyZTQIUb13hIoVMy2kjWh4sAiXdYW7H%2FUwu68Mdld57Sgd4HeUeZrMsFUE1y&X-Amz-Signature=e2d8318542ef43414abdecfa0d6b1643c7a699bcc6f9364af8a132588b418cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
