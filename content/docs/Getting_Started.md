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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUYIKJF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCg1PshZevbYwYrU6Sp0A%2FKRgMG8YDt8i40ThNleSYwLAIhAJDj7kIWelQwdrA43bf%2BtDEgG%2Bnxu9Kzsb%2Bn6sMHos%2BiKv8DCCcQABoMNjM3NDIzMTgzODA1Igx3GQIWtqbXbFQ25rcq3AMFIz9myx1nVGm%2FgZZ7WOOcY2YWv7QaHoxqFCHYvf7PizblVCLduwyEVyCETWhKe1BQ63DLQ3a2EJT30yfYRPhf7W0vNKnTMvzEAy9szBCtSU5UXbJhmCtoByprDJtaPDDVN5TbwhQCAzY3ZVDMs0n3A%2BRuJbqYk3TRFJbyhyJd2gh%2F22obfp0lX6uEWF5ePe%2F%2BRvkkpdBDNevb23rD7TVkk2KL%2BIkljTrHZ%2B5DBxGDahawNzltxC8RgXvTyVLypagPI88lP6YRZEiE%2F%2FKXUufRfCBrFs7eFbKsaFFue1BzBcLRkNMMunfqKOWQnXffpm%2FmvRJ%2BB7RaTu7SqIBM91UFbqMvgafkvkz4Q0PuWdZ2FFkfhrb7tSxQiXSMTvQujf3y3LcvxyrCP6Z%2Bz5s5pOsbFin%2FeZntRId7d%2FrVHzO7lXSjHOZWUvrLI7KmpOUBk9xF7e6qmtPzR1B4WwfVaM7nHWtlGmT%2B9LdyK6asNGIYA%2BQw8r%2FbwLVPnVAoDGuCkgdPzLZmdM9NgfcbfoUIYGBaqDBK5%2B19FoPBpJgtU7SQLHRxtuX1EbCNCrvxDVXsukH83Ka%2BZkg08wSMJbuZljiM9uDBTi1Gzp52VdB3IwaPE1A4U9PDUPBBpthBtzDD1crBBjqkAX50m9AIS9s0t6RpJ62%2Btbx%2B8tOWnxl2zq2k6xSQHCOeCzg%2BHEGlOwQ%2BGha8WrbaHUmb%2FrYswxNVbE2bFm2FWE%2B4IjKtcoVtOf70CMR7Gi3oF7FTdQSh8MpCJ2h%2FJuhIOwfA5ud3I9RmZ%2BRKeKyXxhx0N3GHUnYSaXJCCqL5aV46Je8e%2FxAOXWvudbYElBrjmUmlTVX0Os0WHI266o1p7VjxPlUP&X-Amz-Signature=326facd6b2505a4966ea84eae6ef3de53abe891ea701178a9e79c2d2afc3e2f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUYIKJF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCg1PshZevbYwYrU6Sp0A%2FKRgMG8YDt8i40ThNleSYwLAIhAJDj7kIWelQwdrA43bf%2BtDEgG%2Bnxu9Kzsb%2Bn6sMHos%2BiKv8DCCcQABoMNjM3NDIzMTgzODA1Igx3GQIWtqbXbFQ25rcq3AMFIz9myx1nVGm%2FgZZ7WOOcY2YWv7QaHoxqFCHYvf7PizblVCLduwyEVyCETWhKe1BQ63DLQ3a2EJT30yfYRPhf7W0vNKnTMvzEAy9szBCtSU5UXbJhmCtoByprDJtaPDDVN5TbwhQCAzY3ZVDMs0n3A%2BRuJbqYk3TRFJbyhyJd2gh%2F22obfp0lX6uEWF5ePe%2F%2BRvkkpdBDNevb23rD7TVkk2KL%2BIkljTrHZ%2B5DBxGDahawNzltxC8RgXvTyVLypagPI88lP6YRZEiE%2F%2FKXUufRfCBrFs7eFbKsaFFue1BzBcLRkNMMunfqKOWQnXffpm%2FmvRJ%2BB7RaTu7SqIBM91UFbqMvgafkvkz4Q0PuWdZ2FFkfhrb7tSxQiXSMTvQujf3y3LcvxyrCP6Z%2Bz5s5pOsbFin%2FeZntRId7d%2FrVHzO7lXSjHOZWUvrLI7KmpOUBk9xF7e6qmtPzR1B4WwfVaM7nHWtlGmT%2B9LdyK6asNGIYA%2BQw8r%2FbwLVPnVAoDGuCkgdPzLZmdM9NgfcbfoUIYGBaqDBK5%2B19FoPBpJgtU7SQLHRxtuX1EbCNCrvxDVXsukH83Ka%2BZkg08wSMJbuZljiM9uDBTi1Gzp52VdB3IwaPE1A4U9PDUPBBpthBtzDD1crBBjqkAX50m9AIS9s0t6RpJ62%2Btbx%2B8tOWnxl2zq2k6xSQHCOeCzg%2BHEGlOwQ%2BGha8WrbaHUmb%2FrYswxNVbE2bFm2FWE%2B4IjKtcoVtOf70CMR7Gi3oF7FTdQSh8MpCJ2h%2FJuhIOwfA5ud3I9RmZ%2BRKeKyXxhx0N3GHUnYSaXJCCqL5aV46Je8e%2FxAOXWvudbYElBrjmUmlTVX0Os0WHI266o1p7VjxPlUP&X-Amz-Signature=b1f3ee14c17a1dee335c45b9e2bc1e2d39c66c0dd9abc79a6f8f83a736276784&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUYIKJF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCg1PshZevbYwYrU6Sp0A%2FKRgMG8YDt8i40ThNleSYwLAIhAJDj7kIWelQwdrA43bf%2BtDEgG%2Bnxu9Kzsb%2Bn6sMHos%2BiKv8DCCcQABoMNjM3NDIzMTgzODA1Igx3GQIWtqbXbFQ25rcq3AMFIz9myx1nVGm%2FgZZ7WOOcY2YWv7QaHoxqFCHYvf7PizblVCLduwyEVyCETWhKe1BQ63DLQ3a2EJT30yfYRPhf7W0vNKnTMvzEAy9szBCtSU5UXbJhmCtoByprDJtaPDDVN5TbwhQCAzY3ZVDMs0n3A%2BRuJbqYk3TRFJbyhyJd2gh%2F22obfp0lX6uEWF5ePe%2F%2BRvkkpdBDNevb23rD7TVkk2KL%2BIkljTrHZ%2B5DBxGDahawNzltxC8RgXvTyVLypagPI88lP6YRZEiE%2F%2FKXUufRfCBrFs7eFbKsaFFue1BzBcLRkNMMunfqKOWQnXffpm%2FmvRJ%2BB7RaTu7SqIBM91UFbqMvgafkvkz4Q0PuWdZ2FFkfhrb7tSxQiXSMTvQujf3y3LcvxyrCP6Z%2Bz5s5pOsbFin%2FeZntRId7d%2FrVHzO7lXSjHOZWUvrLI7KmpOUBk9xF7e6qmtPzR1B4WwfVaM7nHWtlGmT%2B9LdyK6asNGIYA%2BQw8r%2FbwLVPnVAoDGuCkgdPzLZmdM9NgfcbfoUIYGBaqDBK5%2B19FoPBpJgtU7SQLHRxtuX1EbCNCrvxDVXsukH83Ka%2BZkg08wSMJbuZljiM9uDBTi1Gzp52VdB3IwaPE1A4U9PDUPBBpthBtzDD1crBBjqkAX50m9AIS9s0t6RpJ62%2Btbx%2B8tOWnxl2zq2k6xSQHCOeCzg%2BHEGlOwQ%2BGha8WrbaHUmb%2FrYswxNVbE2bFm2FWE%2B4IjKtcoVtOf70CMR7Gi3oF7FTdQSh8MpCJ2h%2FJuhIOwfA5ud3I9RmZ%2BRKeKyXxhx0N3GHUnYSaXJCCqL5aV46Je8e%2FxAOXWvudbYElBrjmUmlTVX0Os0WHI266o1p7VjxPlUP&X-Amz-Signature=df1cfa848a299aa1ae5acfb94a324ab3fe0b4f889c9710a8790c41e3195a99e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFZJEIU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIFM3I4GtJkwJmvamGi0M%2FSrWCx5DJdyBL4OUEKGMXk3zAiEA1S6r%2F5OUk%2B8NU4ITle7QVSTrCpK8S72QtU9CwGauZgMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDH7Cotqp9ZC7U95U2CrcA884qTCJcxsOo9Ab6jye5GMepr4u%2F6s9nmaD3Bxhz96N3kZ65LXVqOFHT0KUYX3qIVsp2FgYQin7hOreLT%2B4bXz3wIBO6osJogkX80oMb%2BoRhIhNaRRKmoYof4bReqaKecmbIz9ozx37To%2FnNZvvdPSLjyy3XXL5x%2BvIst4%2BvlJRzuT2M5VbnLhDFJ7QHLI2ldDl4F47NnMHv0yf1l24HrXJzRtVOknyZ5Hi7Jqc8YIRm7vzQRLKkvMgRf%2FplgXPpggxe4nl4XPR4rH1z7h0%2Bu5RUFIabEcLjiEepi%2BJcXIbhXXIBxWRyWwswwhV31dk6Nw36fnP%2FkSqc4I%2FqJUj7wsr95dP5mseJbrplf2dCrzdap%2BruDBsFMsXYJyCXZYE0R0zNaQDVME6%2FpCZ4Y3NLP80VdpWY5yhniYznI4uLrG83DraSbNFm0PfS3Xwj6dKbmFWBcABBPpGYYMNjcZvWolLV56xV986dmuYavW0qEqxp0QPB3txHLWj80%2BMxpxA8jAzAl0OkBqgEEi%2FW2vpnVGWvGdhNXwIvvVpnP70UydtWVjcFtFhaDg5IAsqqpOa%2F0XtSiq12bAWldJlgofRR6moiLdYsfAJTRsPqhkCC1gvFsWE5Ufqx3vRlnGCMMHpysEGOqUBg7QoKsSpzK3nCD8Q%2BGLN5Iwa6m%2B0Mp1%2F5%2BCXe23pmdbUW66wmWRFKKqoZisabOhk8yLybpW855rTvv7JEW2NLMZ2tBUOWDwRfdRUqHT9K1sKhAut2PkHVlZ7MdsCtuX6sIPLI3HW9SgHgk21lrfw%2FrULYtKefy4opylc1jZ1VEcAs%2BF3QCzGfI2acchLEw3%2FMfE4On%2Fn%2BDEeZhj8io4sF6NmcZ3Q&X-Amz-Signature=d2a62f017ff5aa38bb0318e64270caf38c7b47fe54dca8fbea6a2444522aabc7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFY4POSE%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIF6AvamrYCLVLaLv17emCCk5wv47Na7L1oJYhUPUi5eYAiAxPFsIGn1D33EKrdzw5yIWpI1hjjc7ouHwYI6bMNqjUCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM4WGgwa9WgtbdvT6lKtwDJcMUsrdhLuh0JYGweFIACaafETPHdAZXXShei%2BA4Bd12Tje0voVVe8okUTDUU1xuc6LJe8O7EDbTDdGEOGjuI%2BlN7vjeVlKOiAP%2Fgdwj%2BxNxB2fJ3ab%2FePfm0DpAJC8udS%2BSfkrSnZ4d44VH2TC%2BXGmPSo%2FlF4C84N72uXfZkW1y30WFreLCnzEmoPwI2wGbAI0m2eCQ18EJ2z1UazboF0NtZhBQ2v0Y8ww3JiVP1C6dhS6Mlshy4PkLXs7vktNCZsZ63gnWIhVV0v%2FQFq%2Bc%2BJShEDbky2rqNpTENQU7F41EWCRj28cBOxzGa0pD4vy2SNqzhRs2nMAryL5Bq4Xm6BmBN1962KMttUrSVrqvf1S8hHiSWIWcuk5fKzuElZcQLAfZftHc%2FFhnMWGYJveCf%2FEd3YrWxJ5zwUK7Wv0j8PAFydCP42fzFy0DY3jArH9xJFZRegpZF8IFMFGW0FoUxHYds1uEVWLdYdEUlfVU7aww1KTVZ1%2BHL7qD3irpgxWtB6m%2BzHXq0CfK9HO88gk3EBDae5mqw7eVqgTZWaimU7ROjVUcNKwRB3kuUcReo%2Fl%2BOoufuByhW7uXdHJh8vAPvmPjwmTCYH%2BkZ0V6PWHQ3GV6M3OV%2B4h4SdkYCPYw07%2FKwQY6pgGAa3iyKJcEFF5ZJ03x%2Bo5ILWoTgfFr0%2FaCbZ74sUyG4Ec28gZ6xPBoZ%2FLb8yJa3wPzFG46eNqIFL1AL82rBe7zHVB%2BU3gLLTbfTBMQvgRIPd2H67Sz1OxGZm%2FoaajHsO0yQjMl9C2C4FfhuQTi4IennzRHpgJgp%2B8QcoKq2ucB3yrgQ00tZJKmBVZCHU5TZwTqKiSfClJAStcNsHN2GFHL7cgAOjP2&X-Amz-Signature=066ef82b0ea64b3dd6739a33d330efc71f9bb289aa63e3908b48f736aacd2c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PUYIKJF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T090733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCg1PshZevbYwYrU6Sp0A%2FKRgMG8YDt8i40ThNleSYwLAIhAJDj7kIWelQwdrA43bf%2BtDEgG%2Bnxu9Kzsb%2Bn6sMHos%2BiKv8DCCcQABoMNjM3NDIzMTgzODA1Igx3GQIWtqbXbFQ25rcq3AMFIz9myx1nVGm%2FgZZ7WOOcY2YWv7QaHoxqFCHYvf7PizblVCLduwyEVyCETWhKe1BQ63DLQ3a2EJT30yfYRPhf7W0vNKnTMvzEAy9szBCtSU5UXbJhmCtoByprDJtaPDDVN5TbwhQCAzY3ZVDMs0n3A%2BRuJbqYk3TRFJbyhyJd2gh%2F22obfp0lX6uEWF5ePe%2F%2BRvkkpdBDNevb23rD7TVkk2KL%2BIkljTrHZ%2B5DBxGDahawNzltxC8RgXvTyVLypagPI88lP6YRZEiE%2F%2FKXUufRfCBrFs7eFbKsaFFue1BzBcLRkNMMunfqKOWQnXffpm%2FmvRJ%2BB7RaTu7SqIBM91UFbqMvgafkvkz4Q0PuWdZ2FFkfhrb7tSxQiXSMTvQujf3y3LcvxyrCP6Z%2Bz5s5pOsbFin%2FeZntRId7d%2FrVHzO7lXSjHOZWUvrLI7KmpOUBk9xF7e6qmtPzR1B4WwfVaM7nHWtlGmT%2B9LdyK6asNGIYA%2BQw8r%2FbwLVPnVAoDGuCkgdPzLZmdM9NgfcbfoUIYGBaqDBK5%2B19FoPBpJgtU7SQLHRxtuX1EbCNCrvxDVXsukH83Ka%2BZkg08wSMJbuZljiM9uDBTi1Gzp52VdB3IwaPE1A4U9PDUPBBpthBtzDD1crBBjqkAX50m9AIS9s0t6RpJ62%2Btbx%2B8tOWnxl2zq2k6xSQHCOeCzg%2BHEGlOwQ%2BGha8WrbaHUmb%2FrYswxNVbE2bFm2FWE%2B4IjKtcoVtOf70CMR7Gi3oF7FTdQSh8MpCJ2h%2FJuhIOwfA5ud3I9RmZ%2BRKeKyXxhx0N3GHUnYSaXJCCqL5aV46Je8e%2FxAOXWvudbYElBrjmUmlTVX0Os0WHI266o1p7VjxPlUP&X-Amz-Signature=37f727f223523091575906c843f8c1926a3893acec3521b450217a2dddc37846&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
