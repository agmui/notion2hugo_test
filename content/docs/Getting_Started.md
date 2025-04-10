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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T77LS4ZL%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGUGqsANYPzr6uT2Wtc4BhaX8q0gVhS8ojBl%2FGYmkgouAiB9eVpyBdmqxO2mHlt1uT6Bqr9JCoW0z75PNJBczFu1ByqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyfNbiBFIzdLZUDBQKtwDQwwFIdeRceiSXw0LZTH138j5iBbQgDegyhyrAGsCfAGWzrzj0qqitIWomJDTpIpsy92dDI4SrmOAD8t0uzG%2Baabp8MV8jSSIw7XXnj%2FERP3F0vqICt6YC4x%2BHXZtaaoNmv%2BqCCu5gdy%2BfBq3b65TtwCAh%2BY3ogF%2BQIHeaVylRSbTw7M6NFEVamNFftlHBIscIyGNALHu%2FNhbFwcFJnyPAiFFI1px9JZgo7mNDXlf%2Fap%2BIuz8Ctv1%2BisefvGk2M57wLYw20BJymKrKtNugHbXspKP%2FQ1zU0bJjExUD%2ByZTTAy6Sk8C4%2BhdZ1%2BydIGuUwBLhXcLHVl%2B6pMfETvvDv9azbeTO3%2FiqINfdYOPshWMi4DSamviyx2L0Jmc80MjP00U41Xfja6KnE8humTlFysnxstGGArmIEPvUm3GDPmARaf79yhvljAgeM9ZRqP0fCFPu64U3vPVBTVvh4qdBiO%2FAptqpsxOX1nbPB%2BrJ3vgV4jnUVx9wnqMSYMRT3sesKZbnoekDViWZZAei4Xiq%2B%2FmadJ0yU8JEjbgqrzRnSvVDKTeUGof18B1ZvqQwMTAfhZ9R939A3QFV%2BsDQEBP9lTQYVWNrDbkYubnFFqZQoSlGNHeLKUgSCe1K9iRzYwnofgvwY6pgEWSoJCqqeS7gi6ng%2FONqs0zmw26PbMCA7f1htxoA0muiM7AFTjkuGwERSCm4mzEy14PLga1MN9%2FNG1U6dpLbCjcSjINBcyv8xHesN8tJfkm%2BtVhIIieYuicCXj2yjngX6MsITQr%2FQygvetW75Z91w9JZfVvBItbEP%2FDo1G8lHSge7XIaWsXqzyumFjI9PwH5h74yDpLSCJmm8Xh8jaP45JXBU%2Fmznc&X-Amz-Signature=02e2fc6e5b2653aac2b7c116dd554c699efa884c64d38c807f8ad1730ce8928c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T77LS4ZL%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGUGqsANYPzr6uT2Wtc4BhaX8q0gVhS8ojBl%2FGYmkgouAiB9eVpyBdmqxO2mHlt1uT6Bqr9JCoW0z75PNJBczFu1ByqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyfNbiBFIzdLZUDBQKtwDQwwFIdeRceiSXw0LZTH138j5iBbQgDegyhyrAGsCfAGWzrzj0qqitIWomJDTpIpsy92dDI4SrmOAD8t0uzG%2Baabp8MV8jSSIw7XXnj%2FERP3F0vqICt6YC4x%2BHXZtaaoNmv%2BqCCu5gdy%2BfBq3b65TtwCAh%2BY3ogF%2BQIHeaVylRSbTw7M6NFEVamNFftlHBIscIyGNALHu%2FNhbFwcFJnyPAiFFI1px9JZgo7mNDXlf%2Fap%2BIuz8Ctv1%2BisefvGk2M57wLYw20BJymKrKtNugHbXspKP%2FQ1zU0bJjExUD%2ByZTTAy6Sk8C4%2BhdZ1%2BydIGuUwBLhXcLHVl%2B6pMfETvvDv9azbeTO3%2FiqINfdYOPshWMi4DSamviyx2L0Jmc80MjP00U41Xfja6KnE8humTlFysnxstGGArmIEPvUm3GDPmARaf79yhvljAgeM9ZRqP0fCFPu64U3vPVBTVvh4qdBiO%2FAptqpsxOX1nbPB%2BrJ3vgV4jnUVx9wnqMSYMRT3sesKZbnoekDViWZZAei4Xiq%2B%2FmadJ0yU8JEjbgqrzRnSvVDKTeUGof18B1ZvqQwMTAfhZ9R939A3QFV%2BsDQEBP9lTQYVWNrDbkYubnFFqZQoSlGNHeLKUgSCe1K9iRzYwnofgvwY6pgEWSoJCqqeS7gi6ng%2FONqs0zmw26PbMCA7f1htxoA0muiM7AFTjkuGwERSCm4mzEy14PLga1MN9%2FNG1U6dpLbCjcSjINBcyv8xHesN8tJfkm%2BtVhIIieYuicCXj2yjngX6MsITQr%2FQygvetW75Z91w9JZfVvBItbEP%2FDo1G8lHSge7XIaWsXqzyumFjI9PwH5h74yDpLSCJmm8Xh8jaP45JXBU%2Fmznc&X-Amz-Signature=9f07e0d08555fd39e84fa57a29d9419cd960871452d1c11c586e232b85902666&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULFTCK6O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD%2BUsPKHYiZ%2BNnPhOppn9y6IAa7rbaOXgrh6w2YlCUDXgIhALHZq6cRT3rqe8LAcCdUTq5VgofoqwySkly%2Bqi4b0s0eKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzapeVWZolMK5piLsYq3APc%2BunA%2BRwTll%2Bz7S7s%2Fnje4Rp5F4yJe0wG1fdD6upuhYwcdknuGoP4wWvejv3pB5nVKsz8cA%2FqJd6jCXKkcaYj4sbVvSDau%2BPFa0%2FN4eli6cQkwq3uPKKdggub5%2Bef7P6OKwOLbieKyfa%2BERXjYRqpzBP%2Fyctfq%2BoApEwmL7%2BnpAnqNeUtdM1zUciiWCutLZTSFv2Yl5HI4HE6eEuTJzlM0R2IcsRajuz%2B9dcazSj%2BC33AKwbnFozdl0cG9ybTR6TAE9C7%2Bmdq25E5gCklUQe7i4RHa81Hto8d55xkKYLee3ZWPWcplAMTc27HPX5yoePf%2Bfynh6RGIl6FhZchghTpbRtxJBl2uphEnA1IGgSMo%2F%2FUqASE%2BEgLSFvw1EyFNMB2Z1CLIL1gETC6iZLzzBg2DUzBdkyNaiUmDp%2FBe69P7MSdZEmEYvZdgVh2lZ18sKvb9dwYglyxIBVUPgFVDzrG1WwgIHZ1XzLtJC9y6jmM5eJ4n%2F79KPwfepMmk3FGwGn5ar2fcnIWwYOGnRS3ye7gt4%2B4bw3Ot8I3xZhVgCS8bZG94Awq96QNsaUVfuQCQs3xLMDKQwGjWdWlIprRkO7rRR8%2FI04tIT9C1LVNM8EI5hgUxLzhxsGA%2F6OMzDCqh%2BC%2FBjqkAZ%2B8fKEQGs4p3wWFrWA0ia45oW8eAqFF41wQerQvG1PlWUWHcHimddrDHS3KAI9l2Uz2wohYQRawt2nCXHHwttJA7v41bmdIHdChM42eZInXUMZzYejz65W6XBS26oNvCqJ6%2F%2FuRHUEjTFDajAWMpxp3QyLKhu%2B8Ps84z9L23rPt3FkqPVO6GlsnR4rxF86eSmni3k7abmkAaQZttOKImEdP0cne&X-Amz-Signature=844199fe1e3390ebe1d565af4ef3c6aa1ddf9db590045193cfafb5a8befb196d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U563TZDG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD6%2F6IdqwFZa9AyFMFzhfGBFWZwz%2FUkfT2LYzST%2BFO6owIgG0ongx84idndOFuscR1Pf782AH9%2BstQRtGje7C1akKcqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOAxNFUd6SNVbvbvoCrcA9JbM0o2HiUssm2ouVbG%2B4wLBrQ2qHCzMaRRdjlfJIb%2F2fr2CTcfhGX7k%2BHTU6bk6zb2UFroFiMJ9ryvKQ39oDHiiDUvuIZWRQ3XZHxVCLXnOlmHYoSfsBIZKiVp4gj3uW9N15yuHcC8OtoimGV%2By3vOXkn7aguuXoB%2FBxfD0R7KigISjjpJ%2BjQj6GcWkI9qXSdhOiv438boLjPabhJeZfK4JUVxO2i0Ho3ihQJzF6r91jXHeVUq8lTEc1X1APs17EvdHK54qm6Zb9587Z%2BWR6Q14BEsKQOQ0EaABmjadPqS6AdlHNTsKroy3QxF7r6ZxYnN%2BsWMQo4vE3PoS4TTvsTOQRsQd14AkEJWas6%2FR8xfKwIPGhhLFot6EEA%2B77eKaLgFW0WgW1jXqYRXjTLYdRcuEqnNfnSEVr3BhklEhYninNS9qS3v%2Bmq0SLQLRNeHBUnwQoA3g15Y%2BK5VJJ8D2zz61jlOUDvq8OvKLZM40tdol7fEYzC8T5iIDfuSvg6rCdNEhPM2v7r%2BORq%2FnXjk%2BeoTruf2m3gn9MsnKeijO819%2F3YVFHvdBtKAyed1FAV70AaGxlSYzD10tlB2VR9HqBM7ug%2Fzbi1Ts6IhE%2FU7YX92xm3S0%2Bmxq1HyBIYIMPmH4L8GOqUB7nWRJla56uanl%2BcUORJLm2rrt0o4PTsYdvRYpuB4GIVRK0XV1A0yxjTkZFd%2BeSeU1NRSu6Twz8KmEjN4SB6IFXBm37Tlej48TdTqcwW%2BDhIV0lpvm264MS4zTxS3GZRbIy8SmxbNY4tGVdXZUIz3qWOExSIRql5JJ7MQHuKRbrY0%2BQiqKgAxKByHQ6a3YFgbmOPP8UXXlzNymGYN6xLBe9RXDHK9&X-Amz-Signature=30261a89c0a9d61afc55d46d98b23ce3ab6cfbb8445fcd406172102d4bc89575&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T77LS4ZL%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGUGqsANYPzr6uT2Wtc4BhaX8q0gVhS8ojBl%2FGYmkgouAiB9eVpyBdmqxO2mHlt1uT6Bqr9JCoW0z75PNJBczFu1ByqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyfNbiBFIzdLZUDBQKtwDQwwFIdeRceiSXw0LZTH138j5iBbQgDegyhyrAGsCfAGWzrzj0qqitIWomJDTpIpsy92dDI4SrmOAD8t0uzG%2Baabp8MV8jSSIw7XXnj%2FERP3F0vqICt6YC4x%2BHXZtaaoNmv%2BqCCu5gdy%2BfBq3b65TtwCAh%2BY3ogF%2BQIHeaVylRSbTw7M6NFEVamNFftlHBIscIyGNALHu%2FNhbFwcFJnyPAiFFI1px9JZgo7mNDXlf%2Fap%2BIuz8Ctv1%2BisefvGk2M57wLYw20BJymKrKtNugHbXspKP%2FQ1zU0bJjExUD%2ByZTTAy6Sk8C4%2BhdZ1%2BydIGuUwBLhXcLHVl%2B6pMfETvvDv9azbeTO3%2FiqINfdYOPshWMi4DSamviyx2L0Jmc80MjP00U41Xfja6KnE8humTlFysnxstGGArmIEPvUm3GDPmARaf79yhvljAgeM9ZRqP0fCFPu64U3vPVBTVvh4qdBiO%2FAptqpsxOX1nbPB%2BrJ3vgV4jnUVx9wnqMSYMRT3sesKZbnoekDViWZZAei4Xiq%2B%2FmadJ0yU8JEjbgqrzRnSvVDKTeUGof18B1ZvqQwMTAfhZ9R939A3QFV%2BsDQEBP9lTQYVWNrDbkYubnFFqZQoSlGNHeLKUgSCe1K9iRzYwnofgvwY6pgEWSoJCqqeS7gi6ng%2FONqs0zmw26PbMCA7f1htxoA0muiM7AFTjkuGwERSCm4mzEy14PLga1MN9%2FNG1U6dpLbCjcSjINBcyv8xHesN8tJfkm%2BtVhIIieYuicCXj2yjngX6MsITQr%2FQygvetW75Z91w9JZfVvBItbEP%2FDo1G8lHSge7XIaWsXqzyumFjI9PwH5h74yDpLSCJmm8Xh8jaP45JXBU%2Fmznc&X-Amz-Signature=15a8ecf51efe94d45a97d05691b1d0c26308922032f0a2103cd29ec610b4c86c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
