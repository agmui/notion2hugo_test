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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIKBWT26%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBk0Ek67EJzF3K1VXJf%2BKx4g%2BDnf%2BzKWR19HkIAXoEV2AiB1NciINieCQub56WkT9f1cvYmcNKpvzK4j%2F8xE9ulQfSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuuynARUVuNQ94xRAKtwDkV6RT7bgbPfkQRvCzuwtAESRMMcimYK4oReZ3TNh3fEPi%2BDc30lSJzxFVreHws8oJ%2FNTdw1%2BEXmJoIEaCZX8g4KWRg%2FzoJDkAcajCvW3deDIuuZinFNgqb3dbRpKHoSpWwsWDp7oMPsKJF1rBZ0ekUUXyeLmEPvq5kAZIyjyAXTaz6fmwRc8QeJcKDVYUMy0MqXaLmdj%2FBDhkyQQUBi4RNxF4BcTUOtC1GKsYrrCvuTYM44HimVkeOZIfXzrvqGin71e3ieapeMLG0%2Fi%2FqQp5GFoevVJc%2FGXaV%2FxdUzhua3KfgshOCEEYBK85Omt%2Fm7LGyL1Zvxj2tJmFpftYmQ7uW%2FE7X3xUA9VQ6cbbxj7j%2Bh1Ftu01%2FPo102Xs%2FEN3m%2FUVQYSTH3HFFCdzdONSu6eF2tawsUGxzCB0VWVZAfSA5OwNrEBHRFGM01YyLaeKIN6W7eyqnFjIAgdLHw8oE4u08OvFi5sT9iaMlKLaSwJENRNEeBLFNpTGdBNVdcjaO5IEpa8h3RiPDNFRJC1aLAFVqlbaPTVGQW0k1NvXri0D4cIbz8mwaNscXRd6bNy4LRy4dM%2FWgL3PIogD4jF7ZpYlT3m9L8O212dJgNe80eaD1%2BHezh9bTIAOkHo%2BgIw2cz%2FvgY6pgE7l719y2i9DzziqHo%2Fz%2BQPDJmuq3BUkTH5YxcE0uQCzddlyrIPaWbF7r4SBoDJuafr%2Fe%2BEd0BDXLz3yEQ4HCA%2FQctdvvXvJROgBNnazwtvRnmBVOcE%2F4jnB2a2OwT3cwFpjzPgWLCMNzt7lxDJin%2FX5KXFHsjA2eCnOvEqY47H37pg6Qfues11Gb39ZwvSzE5UWR3liMvF%2B50zVCBeAnL07mfYI6iZ&X-Amz-Signature=271e940fdfde766ee2e3deb3b106dd73fedaaab886c70717f95a4a550b39e38f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIKBWT26%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBk0Ek67EJzF3K1VXJf%2BKx4g%2BDnf%2BzKWR19HkIAXoEV2AiB1NciINieCQub56WkT9f1cvYmcNKpvzK4j%2F8xE9ulQfSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuuynARUVuNQ94xRAKtwDkV6RT7bgbPfkQRvCzuwtAESRMMcimYK4oReZ3TNh3fEPi%2BDc30lSJzxFVreHws8oJ%2FNTdw1%2BEXmJoIEaCZX8g4KWRg%2FzoJDkAcajCvW3deDIuuZinFNgqb3dbRpKHoSpWwsWDp7oMPsKJF1rBZ0ekUUXyeLmEPvq5kAZIyjyAXTaz6fmwRc8QeJcKDVYUMy0MqXaLmdj%2FBDhkyQQUBi4RNxF4BcTUOtC1GKsYrrCvuTYM44HimVkeOZIfXzrvqGin71e3ieapeMLG0%2Fi%2FqQp5GFoevVJc%2FGXaV%2FxdUzhua3KfgshOCEEYBK85Omt%2Fm7LGyL1Zvxj2tJmFpftYmQ7uW%2FE7X3xUA9VQ6cbbxj7j%2Bh1Ftu01%2FPo102Xs%2FEN3m%2FUVQYSTH3HFFCdzdONSu6eF2tawsUGxzCB0VWVZAfSA5OwNrEBHRFGM01YyLaeKIN6W7eyqnFjIAgdLHw8oE4u08OvFi5sT9iaMlKLaSwJENRNEeBLFNpTGdBNVdcjaO5IEpa8h3RiPDNFRJC1aLAFVqlbaPTVGQW0k1NvXri0D4cIbz8mwaNscXRd6bNy4LRy4dM%2FWgL3PIogD4jF7ZpYlT3m9L8O212dJgNe80eaD1%2BHezh9bTIAOkHo%2BgIw2cz%2FvgY6pgE7l719y2i9DzziqHo%2Fz%2BQPDJmuq3BUkTH5YxcE0uQCzddlyrIPaWbF7r4SBoDJuafr%2Fe%2BEd0BDXLz3yEQ4HCA%2FQctdvvXvJROgBNnazwtvRnmBVOcE%2F4jnB2a2OwT3cwFpjzPgWLCMNzt7lxDJin%2FX5KXFHsjA2eCnOvEqY47H37pg6Qfues11Gb39ZwvSzE5UWR3liMvF%2B50zVCBeAnL07mfYI6iZ&X-Amz-Signature=d3076e12092ae974462d98918ad222ef3821fce879f9e279840a3bb79916a4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B6UE2B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCpmNisJHswjyM2ntJY0QSlWvVJ19X9VFl6e2YpAj2uegIgT8xHwTgY%2F0kazAWxNFIYRQlx%2BR%2BMSAmF0AcKSIXSAtEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmG6eMQUF7Vay8AuSrcA0aLEgdjdSTGgS%2F%2FnT6udiRUrSQWtHqddoaxDEJuNxJ%2BxOvv7i1gHY6utHrbOilylOyv2XmfCNykxfolkKfwZ9gWfzu92Bp0k%2BC8lulPSnmTZ%2B3gM91Ht4yfow0KjuvfA6ZTL8Qm33hieuV4R7U9dwHcWUBO2j2T3fpQhcprdPeJlZtpdiU5YGM0XHBDPMfPD7zCsOdhlDbU63wiHrZ%2FVBMwWw%2FBbsTh%2F13fYnoiiNcDflEPesDUrbK4uNsEkgamrajFWgV0rPWQhiVTppeOpMoBVYmWDDqWuUXDRuVvqphSrf%2B1OWJhO6hxisgKnt%2FPj84AZYZpMYnHbP%2BB6lCvumoKg%2BKQ%2FgHQva6s2E0l5XrKec6uaU%2F%2FB%2BJdPviAkIjpY9v4cbYXlJhncSHiMrv3zEAMqmLYs2ttG%2BgsHNkndf9rJVQTLUeeweafNzIOQYON8ZzDQVNIhAnoUgm71bPRD7CXW%2FiQ6CKtod5s65IEOFZUf7pnHC7J93Mq9x6VZd%2FL5F0V9yo1IIWcD1uIsCekHUMjH8lFHes0LnFrsd6eu%2BDUVVxkSXshD8NtJSxHKgl9CFlEiLwF0WIpYr5Qe8C4c%2BuIRypNSC5KgR4ywuBuBbeUXphamdHWm8AUlwu7MJ3N%2F74GOqUB3h%2Bx76lGYSHEmJegtC5R%2BJ0279Wtm%2BOu%2BnCkNkkPuURjcH7cMZLozjIbHUPBqyM4rSUcXRGkNiwt652V067wwCnHU0CVYAVAztC5HfPzWgu8qzspcwPyfSMK%2F6mcQNyEYDeJc4otE0SuKrl2a3ELdtWx%2BSYm7eEvuqd9T%2BqdllcHDPluRpeVpVrQCpQxDdIvQcA1on78eFqiaDrl6Uxsda5oCWtI&X-Amz-Signature=5a897f590833ec040f1843f93df4bd5fdfeeea6cab0bccaa4d3bd846b8f8ceb5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU4SQ7B%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDstS4fGVDe48LPJw23edgZ%2Fhzv%2Fu%2FPTBRbjZrf6TXleAIgeWrWul%2Bq9raF69TFBfkuMpAUNBuN9kblm91yPg7vXaIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS5%2B7slelxMCaDQUyrcA9mOiQRIqp4gfure6boi7mpSzwQ9HnTLPwcArSMfZfnmhSsqsrt6UVpvKG4z02YSu%2BzbPSuETWBzMZc%2FfxGly4IYMMH03KGR4yz01yhAE2YiHGXjeRjDtNFbx5M6JItWYGn7IqrhXA4Gv5R2ogPXEhURv0xTAcLDp7JdsCZ684vI0Q8iiMOs4ANnrZi3eOxkJYoFgLzSlBjm7l1N3UcikLc3hJTBUp7vgEN%2B9gz17f4HX3Y8zVixSoTnEtdthpBGBuSQ30ZTpjLC0zue3nwtkBTIEqXkSoHcZq7f5v2EvhOI912tN0ESORenLlqe1j83cqMm7ui98Y8LkJV3T%2B1E3njlZq9qfhxtlXp1j8nMAMdQN87eg%2FsIozlCUBY2PiueJVizCCacx1Bap6SePlzjm7kLMnjIeoepj2p7jZ5uyUNssnb5dd0QElOp3IZatNSrSeY8VBZJsh%2B32%2BoJQIBa1urfp0S919YfUdgoET%2BVN41F%2FakdWw1AGBorpXOl0rO6BU9v8CFitDJgHMfCRXSPpqZWA3iOQPoB3ikjlgAfQUc1TMIRKFlKEjC%2F6wLHYi6P4ISIfEJ1C0Ma7JOH5yX1pTrtsv1P7O%2BDpoqbrU5cMxpOSx93ROvSshz%2F5fuKMPvM%2F74GOqUBHzJNxw7GpxhtpLU9YxxQ4ZWzcWGVm%2B4ZaZWQKODrz1PkyYNqpcNc%2FV4qgRvulj5TzKcA5ENRgkUbznFUqwwzbfRIHJVf9ft3nmgvcps8N1EYH9vAfMI%2BQ8yXB%2BUcVXTcg8LdFKk3PlEugiavosWUWvvVRg3pMz%2FCaUgIobtHMXJNWEbdCIKdNz9WXZvHhXCBjo2Q4%2FLHOb0RpvzZ1eqpW0JM6DiR&X-Amz-Signature=8e50f2acab5e8683d52dac329e82aaa7dc62da214d4c12d48c6de2cc0f836a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIKBWT26%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBk0Ek67EJzF3K1VXJf%2BKx4g%2BDnf%2BzKWR19HkIAXoEV2AiB1NciINieCQub56WkT9f1cvYmcNKpvzK4j%2F8xE9ulQfSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuuynARUVuNQ94xRAKtwDkV6RT7bgbPfkQRvCzuwtAESRMMcimYK4oReZ3TNh3fEPi%2BDc30lSJzxFVreHws8oJ%2FNTdw1%2BEXmJoIEaCZX8g4KWRg%2FzoJDkAcajCvW3deDIuuZinFNgqb3dbRpKHoSpWwsWDp7oMPsKJF1rBZ0ekUUXyeLmEPvq5kAZIyjyAXTaz6fmwRc8QeJcKDVYUMy0MqXaLmdj%2FBDhkyQQUBi4RNxF4BcTUOtC1GKsYrrCvuTYM44HimVkeOZIfXzrvqGin71e3ieapeMLG0%2Fi%2FqQp5GFoevVJc%2FGXaV%2FxdUzhua3KfgshOCEEYBK85Omt%2Fm7LGyL1Zvxj2tJmFpftYmQ7uW%2FE7X3xUA9VQ6cbbxj7j%2Bh1Ftu01%2FPo102Xs%2FEN3m%2FUVQYSTH3HFFCdzdONSu6eF2tawsUGxzCB0VWVZAfSA5OwNrEBHRFGM01YyLaeKIN6W7eyqnFjIAgdLHw8oE4u08OvFi5sT9iaMlKLaSwJENRNEeBLFNpTGdBNVdcjaO5IEpa8h3RiPDNFRJC1aLAFVqlbaPTVGQW0k1NvXri0D4cIbz8mwaNscXRd6bNy4LRy4dM%2FWgL3PIogD4jF7ZpYlT3m9L8O212dJgNe80eaD1%2BHezh9bTIAOkHo%2BgIw2cz%2FvgY6pgE7l719y2i9DzziqHo%2Fz%2BQPDJmuq3BUkTH5YxcE0uQCzddlyrIPaWbF7r4SBoDJuafr%2Fe%2BEd0BDXLz3yEQ4HCA%2FQctdvvXvJROgBNnazwtvRnmBVOcE%2F4jnB2a2OwT3cwFpjzPgWLCMNzt7lxDJin%2FX5KXFHsjA2eCnOvEqY47H37pg6Qfues11Gb39ZwvSzE5UWR3liMvF%2B50zVCBeAnL07mfYI6iZ&X-Amz-Signature=390b69a2bb9678fdc544839521fd4526376809cc798cfbe1184cf3d61a149214&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
