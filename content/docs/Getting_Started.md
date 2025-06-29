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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W2ACCAM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdB9LIFeL6bQ2tlcY%2FNGdKJhlDRDX1G8HgNPSSHvp3YAiEAja1kAUWO%2Bw%2FmviBiDGxbTAaKusd%2BSPYymnqWMAd7en8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETZ3yeK%2FF3I6xk1eCrcAx1MFjmxMi%2FFRQqhrJ%2BU7PoNTtoinllFb6Vw%2FtbP1Z1cFMWuoKScBDFA9tQT8Nfch54mwkn0Gt5eBLjRFN%2FuDAtRN8pq4hWVnb%2FQRsaZPDW8NY5OJkg8jI9QsPTBCAQq%2Bvn34GDjGom9l%2FeBX2I67nTl3dvSwDhS9C81dYtokfOSczuNjT%2BgXEbBv8bIlT9XQjfX5nlLEqrDmg%2Bs492VpXXXnE6UwQXSMqPOs7fdgDZ%2FSvcBkhjPhtZtdmmuOgR3uhL4M85mN3lPm0NSTCXLwF87ORCCJz1poRgBKHzjWTga8cBwEEBnYpeFc5VqHf%2FkcKX%2B67NLgXbEdcbSkbRraWtRIG%2Br9aSbHa6IAOi3PQi60j4Ci0kgsM6QNLnPNM5yv0smrLZgdHBA3%2B2QyHOH1xyMMWiRDRCPQcnnSP3icayHeadjnV6k%2FdsWgKwMohaiAIfWpfbp7TE9x2KAE0fBvVZjogOM9vPeypW%2FLvINQi%2Bqr1bvPjMwsVQ4NiNm6XXOsC2AJnH5C%2BK46Q39m4hV148IqFz%2BDSuNd%2BBcZuuF1JxjNS6NfHrkFbNY0DCUmooB1HAl5M%2F6Q%2BmrbDGXPOCWe%2FVCH63Md2ulM8Gc5JsomM5BAEby84JjXui2bHmRMIfwhMMGOqUBsReY4GhdTdFId%2BVkSufBUFDQVAw8Zvy0eLkYPBqp35v%2BGB5aRc0RtFb8KuRLdKDL92iZxBpUlAjF6v3Bqv6Ba6QgAqn80PGz3tqY9rWp%2BkGYQAuOwmcOZVJp%2FAbqwEcLbN3lM9WAUy2mUgT7J7HqA5MpmEVqtq41SSZUTgp5iqAWKLk2vtXyQCoUWw7cEA3xuTne2sj8suSczWFyWRiqjp%2Fx8oil&X-Amz-Signature=b6f6bd3c9fa3a4311bb2ec41b1ca0df3e6925d9bb473fe769f05c428b022eab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W2ACCAM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdB9LIFeL6bQ2tlcY%2FNGdKJhlDRDX1G8HgNPSSHvp3YAiEAja1kAUWO%2Bw%2FmviBiDGxbTAaKusd%2BSPYymnqWMAd7en8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETZ3yeK%2FF3I6xk1eCrcAx1MFjmxMi%2FFRQqhrJ%2BU7PoNTtoinllFb6Vw%2FtbP1Z1cFMWuoKScBDFA9tQT8Nfch54mwkn0Gt5eBLjRFN%2FuDAtRN8pq4hWVnb%2FQRsaZPDW8NY5OJkg8jI9QsPTBCAQq%2Bvn34GDjGom9l%2FeBX2I67nTl3dvSwDhS9C81dYtokfOSczuNjT%2BgXEbBv8bIlT9XQjfX5nlLEqrDmg%2Bs492VpXXXnE6UwQXSMqPOs7fdgDZ%2FSvcBkhjPhtZtdmmuOgR3uhL4M85mN3lPm0NSTCXLwF87ORCCJz1poRgBKHzjWTga8cBwEEBnYpeFc5VqHf%2FkcKX%2B67NLgXbEdcbSkbRraWtRIG%2Br9aSbHa6IAOi3PQi60j4Ci0kgsM6QNLnPNM5yv0smrLZgdHBA3%2B2QyHOH1xyMMWiRDRCPQcnnSP3icayHeadjnV6k%2FdsWgKwMohaiAIfWpfbp7TE9x2KAE0fBvVZjogOM9vPeypW%2FLvINQi%2Bqr1bvPjMwsVQ4NiNm6XXOsC2AJnH5C%2BK46Q39m4hV148IqFz%2BDSuNd%2BBcZuuF1JxjNS6NfHrkFbNY0DCUmooB1HAl5M%2F6Q%2BmrbDGXPOCWe%2FVCH63Md2ulM8Gc5JsomM5BAEby84JjXui2bHmRMIfwhMMGOqUBsReY4GhdTdFId%2BVkSufBUFDQVAw8Zvy0eLkYPBqp35v%2BGB5aRc0RtFb8KuRLdKDL92iZxBpUlAjF6v3Bqv6Ba6QgAqn80PGz3tqY9rWp%2BkGYQAuOwmcOZVJp%2FAbqwEcLbN3lM9WAUy2mUgT7J7HqA5MpmEVqtq41SSZUTgp5iqAWKLk2vtXyQCoUWw7cEA3xuTne2sj8suSczWFyWRiqjp%2Fx8oil&X-Amz-Signature=6c618b51f1b60bc40944e0984eb862417277a2b3dd0540277165e15b83916adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W2ACCAM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdB9LIFeL6bQ2tlcY%2FNGdKJhlDRDX1G8HgNPSSHvp3YAiEAja1kAUWO%2Bw%2FmviBiDGxbTAaKusd%2BSPYymnqWMAd7en8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETZ3yeK%2FF3I6xk1eCrcAx1MFjmxMi%2FFRQqhrJ%2BU7PoNTtoinllFb6Vw%2FtbP1Z1cFMWuoKScBDFA9tQT8Nfch54mwkn0Gt5eBLjRFN%2FuDAtRN8pq4hWVnb%2FQRsaZPDW8NY5OJkg8jI9QsPTBCAQq%2Bvn34GDjGom9l%2FeBX2I67nTl3dvSwDhS9C81dYtokfOSczuNjT%2BgXEbBv8bIlT9XQjfX5nlLEqrDmg%2Bs492VpXXXnE6UwQXSMqPOs7fdgDZ%2FSvcBkhjPhtZtdmmuOgR3uhL4M85mN3lPm0NSTCXLwF87ORCCJz1poRgBKHzjWTga8cBwEEBnYpeFc5VqHf%2FkcKX%2B67NLgXbEdcbSkbRraWtRIG%2Br9aSbHa6IAOi3PQi60j4Ci0kgsM6QNLnPNM5yv0smrLZgdHBA3%2B2QyHOH1xyMMWiRDRCPQcnnSP3icayHeadjnV6k%2FdsWgKwMohaiAIfWpfbp7TE9x2KAE0fBvVZjogOM9vPeypW%2FLvINQi%2Bqr1bvPjMwsVQ4NiNm6XXOsC2AJnH5C%2BK46Q39m4hV148IqFz%2BDSuNd%2BBcZuuF1JxjNS6NfHrkFbNY0DCUmooB1HAl5M%2F6Q%2BmrbDGXPOCWe%2FVCH63Md2ulM8Gc5JsomM5BAEby84JjXui2bHmRMIfwhMMGOqUBsReY4GhdTdFId%2BVkSufBUFDQVAw8Zvy0eLkYPBqp35v%2BGB5aRc0RtFb8KuRLdKDL92iZxBpUlAjF6v3Bqv6Ba6QgAqn80PGz3tqY9rWp%2BkGYQAuOwmcOZVJp%2FAbqwEcLbN3lM9WAUy2mUgT7J7HqA5MpmEVqtq41SSZUTgp5iqAWKLk2vtXyQCoUWw7cEA3xuTne2sj8suSczWFyWRiqjp%2Fx8oil&X-Amz-Signature=1901c340b41dc3aca63b8bf7f007c38aa709caf6725ebf41d9df5bb7d1843f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERTOJ5H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOe4TB5WCtJZj5S0cmNktpUQ9Jeq7vue6fKhDZVSZSvwIhAPldUn1U683rodMfcbz3Xc4fMnS1dqIC36m166veoxJZKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsWSXhxvCLhankB9Yq3AOBAh1gYKdiC5BHC2Auds6gNsurp2l4yDpkWbDWv98p39N0PIfM9ucNKqqclvo%2F7oLpoOVNQjs1N3YToibhqT96v7piyzNKGbTijbI3aVhKgJSPF41LzH2Z5FQx8Mp6xvQrWY309OWjE9gKe52I8WCgomkf65D2YPDLo%2Fm8yZC8XkJbi1DS8aD8hKQ2MnUASl6bYjIUIJ6cFEOmpucrJAzUec4hUUHujWt7QjAQrMgqImTt0M2BvckrOJ5jcCWBk6M9gqXDg4SiEYy4RPJ6C74D%2FAoWl1UIr85KoTerS6HyJDo7F%2BsAdZleHSRIkfSks9WctyNwNEgQ%2FhW7Eiu3NFaOutTLlmvqafKyH3R4lWqlrHMBevDV5KAa%2B2Lm12kmWpQtiSIysg4LTjFUsz%2BAIUGus5lUcuaINx7IV0jQwqcd8TzZJ1a%2BDckdJo8uYWu17JmWeKZEM3pa56Fp8Rh%2FeWEM%2FYBw2RH36gH8XvgnDAOypJghQCK58k%2B5A3yQplq1i9JsRW5MXIrgEt0Z%2F4HaSlH%2FTbPYdVi33misW4urz4FPZFxNBONrx1u75TJ0b8oWV6niJ9TPzOXxH02FD25w7ZxjxNUaiEqrYdUFfKypOc1XrmzrdiwExCPbVHOtZjCIu4TDBjqkAc5DkNxydbmTpvHzW5AALVlm0c3UWbGNoLJmZMljBWGcKhVU%2BZg6Ya%2BG4df7n0HKkSZqqbeLdGJWnD50arIWOk4hlJ5jdHusq5pgkRHDpdzTFO%2FtS2fffsm4y5swCUbk%2Bsh6shqGAEZMYO%2BrzY7EfOn6D87oagpABzA3zNaT%2FtFSDSjHkKYz1E6%2BJMDK%2Bf8KOj%2B79mM4KbWSzzBhRBuXrtzOVhv7&X-Amz-Signature=8993a059f604dc7b6a3a8f745907bb5d0883d4ee208077cb611cb6b094050161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RX4U5ZH%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnY%2BhF%2B0bYZ0qTk0MemZpfqm1eeH7dlXeZM7VKcqnPxAiEAoH2VR7SNQRUpgK2zUfSr10g5fqTNmUw7NaTIiThDE8oqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAf8lpdJ1oq6Xxj9bCrcAzradTQQUMyzb77QHVTUYQ%2B%2BJlPcI%2B4gYEAZjFBBBzRGj88uOIHGViceieOtV6kuL25Ny3WEtl%2FGp7YAfn3giNr1AvumUDNru%2FuMzgfth2cG97HWiQmmy0WwvbyeaB%2F1jEZdc4Nf1vL%2F4jWd95KfKxyKhjk9myVhSM2v%2BbNJXh1MTsI5yMPfUYqSP7sEs2g3lYPR3MuFk%2FlMbnKQWUvzqbjmVqTQIkjjBFnO%2B8onHfv38GZ3sKZwHUdxh9VBSXvBY0hewyCoKnQyb7Mr6Ub2QDwYJcovqbAH9asPW1EXVkMhJH5q0WlwjPL4dd0bfY3uh9kz5IIWEcTOFZfBbi%2BxV%2BJhYvRuJ4VrhlmEf0%2B%2FOpgFSPqNZxJLeqF%2F08Ui8tao6g4IX1z%2FMysDRc%2FW3Du5WITcghh%2BJ7O7O%2FJIAgXc1h7v2ggE92LZ8G3hz6MGbBlVhXCz%2FQ9arwT3vafOgypYcSRug51feSbPbnNdhzAHiR8BcQSWshxpK3HAda32wtzrhqLw0UsoO48f8zTt%2F7iq49xPF%2BPVg8Fen5tEZCZ5hFYheWAuwRQMf0nkfxI52RFWkGecWG8%2BF0nfv5tm5I3Vwf7Et8UzvkYxbI3Iq1PNQgdkp3OWM%2Faut%2BCe2agDMI28hMMGOqUBToA5pMf6Pkqw5Iv4OKI1eSZCUYicpsO2h46TdRZdGAcPU9084X3NFH7OQE%2FmJFxQLoXmvG7%2BfUcmEIaC6e7l0e6r008YlmKqHQQNrC7TWCDKp4TnopLhh7442p7googLgN%2FS0yX1QtFdgz0eO0R4Dz3gzcGMik%2F1h19CNMdibT6yT%2FglhVgB%2FksWHPOjgVM8E%2FAQWEaHPL6pp5Rg6eQ2mGP5x35U&X-Amz-Signature=a6dd16ace030242cd814c65ad672b4cf39f902436334982449897689c743c79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W2ACCAM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdB9LIFeL6bQ2tlcY%2FNGdKJhlDRDX1G8HgNPSSHvp3YAiEAja1kAUWO%2Bw%2FmviBiDGxbTAaKusd%2BSPYymnqWMAd7en8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETZ3yeK%2FF3I6xk1eCrcAx1MFjmxMi%2FFRQqhrJ%2BU7PoNTtoinllFb6Vw%2FtbP1Z1cFMWuoKScBDFA9tQT8Nfch54mwkn0Gt5eBLjRFN%2FuDAtRN8pq4hWVnb%2FQRsaZPDW8NY5OJkg8jI9QsPTBCAQq%2Bvn34GDjGom9l%2FeBX2I67nTl3dvSwDhS9C81dYtokfOSczuNjT%2BgXEbBv8bIlT9XQjfX5nlLEqrDmg%2Bs492VpXXXnE6UwQXSMqPOs7fdgDZ%2FSvcBkhjPhtZtdmmuOgR3uhL4M85mN3lPm0NSTCXLwF87ORCCJz1poRgBKHzjWTga8cBwEEBnYpeFc5VqHf%2FkcKX%2B67NLgXbEdcbSkbRraWtRIG%2Br9aSbHa6IAOi3PQi60j4Ci0kgsM6QNLnPNM5yv0smrLZgdHBA3%2B2QyHOH1xyMMWiRDRCPQcnnSP3icayHeadjnV6k%2FdsWgKwMohaiAIfWpfbp7TE9x2KAE0fBvVZjogOM9vPeypW%2FLvINQi%2Bqr1bvPjMwsVQ4NiNm6XXOsC2AJnH5C%2BK46Q39m4hV148IqFz%2BDSuNd%2BBcZuuF1JxjNS6NfHrkFbNY0DCUmooB1HAl5M%2F6Q%2BmrbDGXPOCWe%2FVCH63Md2ulM8Gc5JsomM5BAEby84JjXui2bHmRMIfwhMMGOqUBsReY4GhdTdFId%2BVkSufBUFDQVAw8Zvy0eLkYPBqp35v%2BGB5aRc0RtFb8KuRLdKDL92iZxBpUlAjF6v3Bqv6Ba6QgAqn80PGz3tqY9rWp%2BkGYQAuOwmcOZVJp%2FAbqwEcLbN3lM9WAUy2mUgT7J7HqA5MpmEVqtq41SSZUTgp5iqAWKLk2vtXyQCoUWw7cEA3xuTne2sj8suSczWFyWRiqjp%2Fx8oil&X-Amz-Signature=70746b319ffd4bc546d87806a0dd01cf8caa2423ce0400d369044e2ea9740e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
