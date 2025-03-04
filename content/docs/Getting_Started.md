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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PFCLFX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOM2Ihfl3HZEau0xQZttxRKKfJkNKeOncoouBvP0afdAiBVMrMRwwDQHthvBfunWYJAXOIC4R6J%2F0sGOk%2B9i4HoSCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjISsgWfbuDTBt3XXKtwDSGvo2i69s%2BHXO6bkCrmz1Wrn2%2BmwnBg5HcZw8urZYgYUGCxpLCvon1ggF5aHEn2FIG86%2B3ELrcV8Y71taKpcSTzLUjYdtYQZqoUVyR%2FJvi%2B%2B2xhlzcfvm%2F41%2Fwy5j0Zt4kYYdTvIpBFrXef16x26mCOOYv9MS3QQ5Vzm59gdxiWSSMeIvrs99gr8F4FhoanPWeNxF6%2BnfEgiPfzZ5op8oCnKFtREyNzri%2FiRFJUkeJK5%2BIp2yDosu7arCTajfgvbYhbiXCj%2Fh7ClkbMlVSU4wLhgmIR2ii9ezQKY8y1wwWfx2LwaYE3LigC%2F9EJnMWn2sapd4NwjadvCY8qol1HsW%2BUQuuKAaRMpFDX%2BkxLXueujz8ZBxMNM1C8kLUbtFmIMpCrpzxtOYt1B%2BAj44StAoo9BonKI78VRs4dFEiwPC18eIxVNKOf0vb1mzwOnaK8x%2FeI3CnMqBVwGUPntMaX7c%2FPqZUd9AEeLoDhQzx60a98M1nSf6kdBdjXJtq2RTmH%2FlnqgvvwU%2BZFriWHrpT63EL0V5FR7483cSk8NzMKJyTgORB3Qk48gjS40xLSMevVJ6k1wvHSqT2PMc9w1M5nWnx%2BQGb0hVj%2Ftrs8efRyEVfFrCRgfnCsS%2FRb5QYow8a6cvgY6pgH%2FaURXjJA4EegZwDhwBDSDNFfXFH0cYG4dP8po%2FwFH4N5fYlXn9jy6%2BmFCRK6c4F4rzPMeDF6RrkNlwbvBKauKdGu3muDuwk6Ho%2BUGlMaKkGwD6M%2B5BifZwK4Uy33zmBAIGjGxy9%2FqU4LCNRIPc73hguOR9gMuKM2YApJj6ubKHQM6Y2RPQ01Vvk7I65vtdJLRqCDivCNgWxuLuWLomTNfKWMUCf4t&X-Amz-Signature=636d411a87817395cbd6e200bf59b58de162cb87355dac3a0f356d666dc73593&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PFCLFX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOM2Ihfl3HZEau0xQZttxRKKfJkNKeOncoouBvP0afdAiBVMrMRwwDQHthvBfunWYJAXOIC4R6J%2F0sGOk%2B9i4HoSCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjISsgWfbuDTBt3XXKtwDSGvo2i69s%2BHXO6bkCrmz1Wrn2%2BmwnBg5HcZw8urZYgYUGCxpLCvon1ggF5aHEn2FIG86%2B3ELrcV8Y71taKpcSTzLUjYdtYQZqoUVyR%2FJvi%2B%2B2xhlzcfvm%2F41%2Fwy5j0Zt4kYYdTvIpBFrXef16x26mCOOYv9MS3QQ5Vzm59gdxiWSSMeIvrs99gr8F4FhoanPWeNxF6%2BnfEgiPfzZ5op8oCnKFtREyNzri%2FiRFJUkeJK5%2BIp2yDosu7arCTajfgvbYhbiXCj%2Fh7ClkbMlVSU4wLhgmIR2ii9ezQKY8y1wwWfx2LwaYE3LigC%2F9EJnMWn2sapd4NwjadvCY8qol1HsW%2BUQuuKAaRMpFDX%2BkxLXueujz8ZBxMNM1C8kLUbtFmIMpCrpzxtOYt1B%2BAj44StAoo9BonKI78VRs4dFEiwPC18eIxVNKOf0vb1mzwOnaK8x%2FeI3CnMqBVwGUPntMaX7c%2FPqZUd9AEeLoDhQzx60a98M1nSf6kdBdjXJtq2RTmH%2FlnqgvvwU%2BZFriWHrpT63EL0V5FR7483cSk8NzMKJyTgORB3Qk48gjS40xLSMevVJ6k1wvHSqT2PMc9w1M5nWnx%2BQGb0hVj%2Ftrs8efRyEVfFrCRgfnCsS%2FRb5QYow8a6cvgY6pgH%2FaURXjJA4EegZwDhwBDSDNFfXFH0cYG4dP8po%2FwFH4N5fYlXn9jy6%2BmFCRK6c4F4rzPMeDF6RrkNlwbvBKauKdGu3muDuwk6Ho%2BUGlMaKkGwD6M%2B5BifZwK4Uy33zmBAIGjGxy9%2FqU4LCNRIPc73hguOR9gMuKM2YApJj6ubKHQM6Y2RPQ01Vvk7I65vtdJLRqCDivCNgWxuLuWLomTNfKWMUCf4t&X-Amz-Signature=717431f63a2ef9a082df0b5b0f89f19bdf7a08cf6eb2809b02ef34da4ea39f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH4UUZSZ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfDQVU2wuX5EV%2BhgsRK3iPQAYq5zPpsv0u1PfLetVWMQIgKRtBh3%2BUqNUaLSkm7jGR74i8zVsxADt%2BCANm3lDl2zsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAd3OumamEx8SQYrZircAyGAmJe0QBqxRtPTSh8SBexlWGdfEjwzUthnop%2F1nQ31Ihp6j1IeJg4M8Tze8An63%2FwklLakyR3EW%2Bw2rW%2FFmVTT9PU6CR7Hq%2BldCC0Py%2F8RsYvJLy2lKzu4LvhzdqflOFZyAfGykkF%2FOaK0mRW0V3LWdyGwJbcuUQ9ABnYsNwqVlSA%2Bj6MrrCm99tBj5MdpI9heUz%2FPiINt2TCcN9mmJylubuQ9on%2Ffechrp%2Bucdu%2By3dkW6YR8UtsP7XqyW%2BxxrJY5zgzv1CZoImjzUXYQdlVEI05Ngp5S1QmOmdPQQZS7sRcvhJFJwUS5bvVNls%2FoSjVjrWt8ttXgMMosDmVYQpFNaErEslrG9figmhf8uyKeeaPnXEQjvBEoAoyh4Zjs87EvSACwwDrOknFK9z7k4OdWiTt6lmiZNu3SpSb%2BpEnUUa1msMXkUZEPrYKUecdX6QGc2wsR9P9v1%2BXH44z03qIH0oIAGe2cAzYQJA25Ui4uLF7QTNzYJQYsMkG5ZdPhQarheE0LrSedwhIVxUOW7Mv28O%2FBXwxKbnkPsgnPd2ecRY2eqVGfPnHqfI5vIbwValem6%2By86HEIoPZxRfcls7MT5DDJBtHuBz7m8vl1MgVfDNCnw%2F%2FfFzniC5r1MJqvnL4GOqUBxLEpxME2bL6wRxe7%2Bt2sUkEsRcO5NkF0nwikPpilQRLGu3kOogHi%2FIdKhUYKQparH%2Fluz%2FIf5oGllWylT%2Fn5iS7jbtpCmVhyjGfbMMv7kqogcgi8Q3yFj5uEbPXp4MbCJQND1ZAZ5EtqEgAfBXSYXC8SPRQdyT5k%2Bcbam01%2FmDAwSGr6XnZJqRyv3KgRo7UaLgyOQLWes1a4IQzxiuPE9O%2FMpOVE&X-Amz-Signature=d50da87e1d8274349d158b244095eee83e451183cb00eed1dfe78977c6309482&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S62F6FGM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADXVH8HqQq%2FzxALd9BaGF3jkl9EhEALQUSKr%2Fl7gv9ZAiEAzja2JyDJs7Rh4%2Fq4PBEVGzolwNjOdAXIJJRkpo%2B5aeIqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN39AH5yU90QlLrDHircAw36NcNFEo3oFDj0E30GPigyTRgcrIxptfTgv8i%2FIgJkcWJu%2BKtlrMTD3HUe%2FdNasDYABfyVh0Vsvi1OiOppXRQRJFJYP5Jg6K3XR9X13iLfdM948krR5tFcYBW5Wpjd0bh%2BFCn4e0y0w%2FMxok%2BbKvxZfkEah3n5TufCPXoL8MNcH%2BRkC00%2BSQ0knNkIc09TresmNIoTvtw%2BHqM4WbY%2B1hAwhS5padaKdZwn%2BxZPDSztEFTya2Bn2f2ofiNrS0a4Wph1vC9a0tAa1FIj7JCqD7jrpx%2FDUBWWz08z9gWrSO%2F6uvB7WSigJit4%2B5Fz0OqfWwnfVXbAYkwCtJhj0g2LrhGMHJW%2BqkAdoCvpBMUfUisR%2F2txlGYy9exX5jvQM%2B1RFcRQzxJ4iKbSmqtyoChtB4t1oVJ1Pj%2FYSrRdqUGddYoRZjOOegbpusKE8%2Bn2qYFSI0HAQlr9A9BPRCr%2Fn3H5Hi74IYN4tISxnuIJff0ol%2FpzBGOOsMrJ2U46PsPq1n%2BVZY98PougDpjZYv7fxvo2dS40dgIeoPwAO5qy7a8RGDF5BFVXNgvJ9XooGpqrl9vIm0HCiMDvtNa352jR0kuFQhHgWlhYL3odzZb%2FmmhXqMqiW8WRCYhHZSAnqkERMLiunL4GOqUBa4SnX8SqvDK4nNtJ8LAYhMOxsHM6Baj4UTXfCpavRcKrRcRCJoZvvyyzEC14Bb9MX6i7R6zQ7y2kh1MwEyLHR3HIrcvF0DaIaSonpQ9OXnArn2SBxV%2Bckt4NLzSqR6vshOEMHS3t1Fk2w%2B%2BMeUbmSIUDojXn6r%2FID1Z%2BWVqcXYx282Ha38b7EkfQZ%2BthdZM8TCHb27oxwFtlfiAI48FW2gSmDXeB&X-Amz-Signature=d1300f471a745db25d2d798f2076e55ebb2be14a1a690f18f8e75a91d36edda6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PFCLFX%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOM2Ihfl3HZEau0xQZttxRKKfJkNKeOncoouBvP0afdAiBVMrMRwwDQHthvBfunWYJAXOIC4R6J%2F0sGOk%2B9i4HoSCqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjISsgWfbuDTBt3XXKtwDSGvo2i69s%2BHXO6bkCrmz1Wrn2%2BmwnBg5HcZw8urZYgYUGCxpLCvon1ggF5aHEn2FIG86%2B3ELrcV8Y71taKpcSTzLUjYdtYQZqoUVyR%2FJvi%2B%2B2xhlzcfvm%2F41%2Fwy5j0Zt4kYYdTvIpBFrXef16x26mCOOYv9MS3QQ5Vzm59gdxiWSSMeIvrs99gr8F4FhoanPWeNxF6%2BnfEgiPfzZ5op8oCnKFtREyNzri%2FiRFJUkeJK5%2BIp2yDosu7arCTajfgvbYhbiXCj%2Fh7ClkbMlVSU4wLhgmIR2ii9ezQKY8y1wwWfx2LwaYE3LigC%2F9EJnMWn2sapd4NwjadvCY8qol1HsW%2BUQuuKAaRMpFDX%2BkxLXueujz8ZBxMNM1C8kLUbtFmIMpCrpzxtOYt1B%2BAj44StAoo9BonKI78VRs4dFEiwPC18eIxVNKOf0vb1mzwOnaK8x%2FeI3CnMqBVwGUPntMaX7c%2FPqZUd9AEeLoDhQzx60a98M1nSf6kdBdjXJtq2RTmH%2FlnqgvvwU%2BZFriWHrpT63EL0V5FR7483cSk8NzMKJyTgORB3Qk48gjS40xLSMevVJ6k1wvHSqT2PMc9w1M5nWnx%2BQGb0hVj%2Ftrs8efRyEVfFrCRgfnCsS%2FRb5QYow8a6cvgY6pgH%2FaURXjJA4EegZwDhwBDSDNFfXFH0cYG4dP8po%2FwFH4N5fYlXn9jy6%2BmFCRK6c4F4rzPMeDF6RrkNlwbvBKauKdGu3muDuwk6Ho%2BUGlMaKkGwD6M%2B5BifZwK4Uy33zmBAIGjGxy9%2FqU4LCNRIPc73hguOR9gMuKM2YApJj6ubKHQM6Y2RPQ01Vvk7I65vtdJLRqCDivCNgWxuLuWLomTNfKWMUCf4t&X-Amz-Signature=9958e3a2759ea2be5b11b32d8ab129b1459deca01ec3d5a033ad3c08e907d27f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
