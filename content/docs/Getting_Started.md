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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL2KGFP5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDN6hwWU0SriYIf8xq4TwBePA6KhISHwC6RN1qMolZgNwIhAK%2Bl0TEMWQkNf5gdByoNDxYO4edQtxuHv8BMUlc9c4tAKv8DCEQQABoMNjM3NDIzMTgzODA1IgzN%2FHbnGkTkARlcnNwq3ANnkcyyuU8T4WfNGZ%2BLvPFqday7b2Nlq29HaWt%2FttbNpAfO8rVtbN5%2FlFZ7ucDULgO802P6w68H8bHUSNPlIMvDX48Pmn6D4TLnHE1upfwQjsZb1VBMff%2Fyosw2sVj89gRfA%2FpQXtdXvg8ntEjpzG%2BGTBE64%2FAp%2Bo%2FPvuOh7B5uaOZJVDuakMYwt%2FO1SmDEZXeW8euyhHG%2BjcYIzU5%2BwKPpFh5j7%2F8q%2FRcYjcOkbwuMd0zrIXHGx%2FWI4DSmBVqeNypgt5OvKP0iZOS4wYrqGesY9YDIPapUKWuWR6wcE6wyEdunOoMn3ps34s5%2FeJHQ9xN4fQEJhSiYF6PYGLNbrpymgYL4Le%2FWDmF6tkcrkuxjF740prCd%2FFTtfLHY%2FPXMYOOzmWttPcR88pmPVQzFn%2F1N%2BNDYjPSov%2Fr4RkUwz%2FQajmIb3kHfLgSiDgGvKYTF26PfSR8nxxZ1mQ%2BT5EFdlgJAMOBzljl5J9TYaim%2Bej8yK95NmoI2uhNZNbJwmgGtc5gZx%2Fxp9W3NyH%2BFoH6sL1KXlH%2BrlKPlKdxdCxrDl6JZBVOxgFmnu9NxAV38DHQT8tjrfJ9GvDtlUbMRse%2F%2BVWocM1DRK9QIRBtuTB1P2di%2BkKqC0DfmmF0yr7SErjDti429BjqkAafV7qm6STY3WZmlVp8lEIdh%2BK312DuBxpxgNih0IUNcAuyiV4qPyrWsc5RHWTRu2rdufqy9SHi8KflaBvd9dnZE1Fs7Shp3grYfxhVcp4pBqFRodqZ9E%2Flc0jBetkhrQoLtvjERxxzj0JsCQA5UHn520%2Bvn%2BbWQqZFyBGKnrkr2Z2WI2tsXbDHZz3q92RObdpeT9dRio4ruDjELIriXY2v4fUO5&X-Amz-Signature=cd600bd6d3ee2b75a47974e50c7da1e68fe392fc90fc63b93f396c858f9821a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL2KGFP5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDN6hwWU0SriYIf8xq4TwBePA6KhISHwC6RN1qMolZgNwIhAK%2Bl0TEMWQkNf5gdByoNDxYO4edQtxuHv8BMUlc9c4tAKv8DCEQQABoMNjM3NDIzMTgzODA1IgzN%2FHbnGkTkARlcnNwq3ANnkcyyuU8T4WfNGZ%2BLvPFqday7b2Nlq29HaWt%2FttbNpAfO8rVtbN5%2FlFZ7ucDULgO802P6w68H8bHUSNPlIMvDX48Pmn6D4TLnHE1upfwQjsZb1VBMff%2Fyosw2sVj89gRfA%2FpQXtdXvg8ntEjpzG%2BGTBE64%2FAp%2Bo%2FPvuOh7B5uaOZJVDuakMYwt%2FO1SmDEZXeW8euyhHG%2BjcYIzU5%2BwKPpFh5j7%2F8q%2FRcYjcOkbwuMd0zrIXHGx%2FWI4DSmBVqeNypgt5OvKP0iZOS4wYrqGesY9YDIPapUKWuWR6wcE6wyEdunOoMn3ps34s5%2FeJHQ9xN4fQEJhSiYF6PYGLNbrpymgYL4Le%2FWDmF6tkcrkuxjF740prCd%2FFTtfLHY%2FPXMYOOzmWttPcR88pmPVQzFn%2F1N%2BNDYjPSov%2Fr4RkUwz%2FQajmIb3kHfLgSiDgGvKYTF26PfSR8nxxZ1mQ%2BT5EFdlgJAMOBzljl5J9TYaim%2Bej8yK95NmoI2uhNZNbJwmgGtc5gZx%2Fxp9W3NyH%2BFoH6sL1KXlH%2BrlKPlKdxdCxrDl6JZBVOxgFmnu9NxAV38DHQT8tjrfJ9GvDtlUbMRse%2F%2BVWocM1DRK9QIRBtuTB1P2di%2BkKqC0DfmmF0yr7SErjDti429BjqkAafV7qm6STY3WZmlVp8lEIdh%2BK312DuBxpxgNih0IUNcAuyiV4qPyrWsc5RHWTRu2rdufqy9SHi8KflaBvd9dnZE1Fs7Shp3grYfxhVcp4pBqFRodqZ9E%2Flc0jBetkhrQoLtvjERxxzj0JsCQA5UHn520%2Bvn%2BbWQqZFyBGKnrkr2Z2WI2tsXbDHZz3q92RObdpeT9dRio4ruDjELIriXY2v4fUO5&X-Amz-Signature=27e0826748e4c64f3304d459a4ee9ac1cf01cc945c0f2dfed16d0d945d2f2329&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6WFSPV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIGXhGVGhVlCwqRQaJtB1ZQPp%2BRbD7gsdvYBMtgga9UOsAiEAxi7rkGoEl2NlDddNiVWqHV78QCcP0UxPavabmj8wv0kq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCSQhMlDeeHjZ%2BTPNyrcA%2FJOlh9z7unggUBJban%2BHJt8z6YWL9q83h8UnF6dddIyhuoOP49Wc1jtHHrrwQdVBnsx4MGaiL1B58ErtnE2TuLIjS6LaT9Bn00Qc7uQlA1yEvV0Duma1xcPrKS9v2LDibWMxqiL%2FvaFlreC1biEx%2BpXnqHrTdruDMg5odqBtfziUZ784lFgvqgf1zcBzfnbJiSya8%2F46Br1OojlTWHTgsXsKHlV4gr%2BvB%2Bs86ajNZ7ZbiuDG%2F34%2BYNT5tc7mxkqxauFxaho%2BU1duHXAK6nQAnrh842RIVxi5jNWR9qmR2%2F0cKvLzasDhnaMIV9MZqJfRulNQud0Zpi9L0LPHX5j2OyymqM7n5oN7sK0aRcryM7GqMNm6z4Vld2pZhEuly%2BtPdYGUWHMRn%2BEI5VqhVIqPL5xifLUCkg3rCafxqxBJn%2BepanIHR%2F0hbO1efyy%2BgZryTn%2FlD77%2FR3quXLbdx5h8next3kJyaii%2FpQ%2FkofPRfer41qbuNK0lFqsbCA1cJKNa6lQO9RXrdnE9yWqO%2BwUup%2FLoS9ySwBs4sovZmNubJMq%2FhbvlJVGxVB1gZF6UNoezNXkrOJumKJMvE%2FBISvPQCmWNFILB%2FiRC%2Ba1DbZP4WQRmODlDgvJcJ6eFTxwMIaMjb0GOqUBghCL0irufjNMFhtkfz1hPNhgYW%2FrMUeBrHJZqgHFDyX3dSboc2v2%2F6uJK99fWoz4qVXd3dynE8hA21xOaBXbVPKz3S%2FlOTYV8e6Ed5YkfrQhA%2FK673SorxrZ4IKZpwV%2B%2B8odtOtKgLBA3P2yq9d%2F%2Ba9hlj2%2B6I1FM4W0fMUaHhlUQOMqDWOnWdQ31%2FnkXQ1ISq3PzlAO%2BeWcGGAWH4PSv%2BeiCGba&X-Amz-Signature=1c5ef522a0f5bf7784a483358d41d66a0a0e5835357c1ee25d4bd6e08b4bf00d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3JYE4Z%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDtZJvtbEzaCPYrdP1P44rLN6cEsH%2BZFi4vtly6aMphUQIgW8w0j7CaJEj9ZhmMZ9BDETkYNNAA44MVsRgXVpFYSboq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEMU%2Frk7DFzk73wTqircA2oMkeEuBESKdmWR3M0jgbwBw2symx%2Fe0aeHnxx%2FjISLTCiJCTp1ldgHNEl%2FEk5JZ1ou%2BzwTPZ%2FHmwed3Pk2ZXclgqTLBzKtUw8E5QSexIMRE%2BnoQ1qve7zlXHCVpKxHDRdFQ0cexPeOwq%2BWDwXJQxqrGvF0m%2FguYgqBrFIaLhjPi3Ziu%2BFCXj1SFeyDNRq0%2F8AkedzTxEN8F5zt%2FH%2BXwJZIpqaY0tIR%2FYXkMiKfXGeX%2BTwbFDsIqSW6aWV3xoUUO%2FNnayJEECEy2UgRyprSAWtVQLj%2BmAiSHuAQzuaWrK4ZPjyszymcH3Eynai1wcC80uLBXRbp6zwc8teoUHq2d%2BzxL0tYB2kmKGleqO65pq7LSDWJwcQT75OWgOo9LpEdnfm8v4JWXZEGh%2B2cUsVVdgbO83Ojc3SDgbnxgNP2hdem79SPsBVzHSPgBvRkFvoXxmB89c5J8eYBPMmSdbCSEzMUKIwZiSL0K1mgWji2skP35OcaK0ojs16X%2F8hUZI7KYYtLW2XNGCCGRVC81Q2MhmRdreTlgMocNcNzvQEpT%2F65hDKratYPxpfW8yDsyycN4sL6Vgpy%2FlPrPkHz5p5ocppmeRf9UkXvk4ftvk6v80C%2FmCZsTGsrs2LSt32mMP6Ljb0GOqUB8bOi3%2BBt2B%2FauySpHlpiL1R2UTnncjrOPw2L%2FEm79XTztprgjurh%2BvVP7a5hHdm6PDiRkHQmMSMXDt3aDlQ1XiOb%2BKLXN%2FH9OAj%2FJN4S3dfY8q5i5TLZIs9y0sopvqY7Nm1JTjSjKajQM2zCSR9bZAujet4hcBPs9vuHss19s0CpBAZL5Sep%2BbyGEJjl6BhbLp12koOoCYQem%2BcI5C7fkCZ3QFM8&X-Amz-Signature=5ed2cedbabfed872f5f5dd7e95ae9f8da018ca49a55362e22096c52c81f75955&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL2KGFP5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDN6hwWU0SriYIf8xq4TwBePA6KhISHwC6RN1qMolZgNwIhAK%2Bl0TEMWQkNf5gdByoNDxYO4edQtxuHv8BMUlc9c4tAKv8DCEQQABoMNjM3NDIzMTgzODA1IgzN%2FHbnGkTkARlcnNwq3ANnkcyyuU8T4WfNGZ%2BLvPFqday7b2Nlq29HaWt%2FttbNpAfO8rVtbN5%2FlFZ7ucDULgO802P6w68H8bHUSNPlIMvDX48Pmn6D4TLnHE1upfwQjsZb1VBMff%2Fyosw2sVj89gRfA%2FpQXtdXvg8ntEjpzG%2BGTBE64%2FAp%2Bo%2FPvuOh7B5uaOZJVDuakMYwt%2FO1SmDEZXeW8euyhHG%2BjcYIzU5%2BwKPpFh5j7%2F8q%2FRcYjcOkbwuMd0zrIXHGx%2FWI4DSmBVqeNypgt5OvKP0iZOS4wYrqGesY9YDIPapUKWuWR6wcE6wyEdunOoMn3ps34s5%2FeJHQ9xN4fQEJhSiYF6PYGLNbrpymgYL4Le%2FWDmF6tkcrkuxjF740prCd%2FFTtfLHY%2FPXMYOOzmWttPcR88pmPVQzFn%2F1N%2BNDYjPSov%2Fr4RkUwz%2FQajmIb3kHfLgSiDgGvKYTF26PfSR8nxxZ1mQ%2BT5EFdlgJAMOBzljl5J9TYaim%2Bej8yK95NmoI2uhNZNbJwmgGtc5gZx%2Fxp9W3NyH%2BFoH6sL1KXlH%2BrlKPlKdxdCxrDl6JZBVOxgFmnu9NxAV38DHQT8tjrfJ9GvDtlUbMRse%2F%2BVWocM1DRK9QIRBtuTB1P2di%2BkKqC0DfmmF0yr7SErjDti429BjqkAafV7qm6STY3WZmlVp8lEIdh%2BK312DuBxpxgNih0IUNcAuyiV4qPyrWsc5RHWTRu2rdufqy9SHi8KflaBvd9dnZE1Fs7Shp3grYfxhVcp4pBqFRodqZ9E%2Flc0jBetkhrQoLtvjERxxzj0JsCQA5UHn520%2Bvn%2BbWQqZFyBGKnrkr2Z2WI2tsXbDHZz3q92RObdpeT9dRio4ruDjELIriXY2v4fUO5&X-Amz-Signature=32b586991e7b6c32ed86b3efb2cf3a06683ae489997ba267fa769f009cf2c24f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
