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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GMIFJZT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC1K%2BvN1rXrVKLcR%2BaEAHVOZVh90dMk1yOjV5drFufUnAIgN75LSwolsRInZfbbgPCZdpLN5OA5BsHIi10OcnaECLsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFhLo1qiiwO3pD1lQyrcA%2FhBsXdH431waOVibhbD0Eyyp5PNrnxqI%2BTLwEnhPtlhY0HAX%2FpFaRu9D32P02TvIum%2F8dOyr0z8dDSsLez3zcC0KHMKXVLew7mMzadlCAQIPmN9I67FYSo2dmTfL4LPPvh3ykQkJSPbgD6lRk2lss%2FrEa0scWK8iiIMKdWXsfn9euS%2FxWIyXWO65ysZ0Y29m2O2lGQP6sYefBrJEIhqi83umgglvR27i1hcpiDNPPAKFAOOs3iaKNhSKbJnJtktFhwh%2FU%2FWcDx3j08j%2BkPZhRzht2PcaIyc%2B18UbYU02jHcoK8Yb3C7qR9QdiDm1Lo6f0B76TNpVcqm2mQPZoP8M9GstHDi1npl4gxmtcwcZO5OukLjPyJgihufJaZNoYB%2FAq%2Ba4euMgGZQvbqYRNvqE7My%2Brxume2G3WsiYKPhgxCEgGmyStI8zt4Bt%2FcBnD9bd4l6HT4aGzLn4dHI1KlSuJEdh8UIFnVJgkCcwrl2yO3X1c4Gi7m29Vuv%2F6ECrTctRUPs8rrGIQyUJe9L2FUGRykYdCUvGbkxBvaQNkdj4SVuHHk%2BDLdnVbLNXubbXEBTUG7gttw4z7XGsBc6r4JxeD5i5rvgNMETmUoMWIPyC4il6a080dJmrnC0e6nBMM%2Fwgr4GOqUBopIkQXaw2Hodnt0uBDa42GyWVzxYxksv6N7A8zgUXANS5IYbpz2kLML%2FQd%2FTxkjMQYKYt%2FTsH7Y%2BqVCYMHINL7yycI54OxvYaCdX%2FagCZLUFUajbrTnYIoSNik4u60Tj9%2FPSroW1irIddk%2BdqMdUfLTkUOmXDdymyd3T0%2Btzs76GszPksfYFPFoWAC4jIGosUXw8snK9tYN5ojGxgi8wrFvXT1fG&X-Amz-Signature=5bbd0e5bd898983fee7a1d55e144e2b61855d7eeb9d7bb4904ed82118c3176a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GMIFJZT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC1K%2BvN1rXrVKLcR%2BaEAHVOZVh90dMk1yOjV5drFufUnAIgN75LSwolsRInZfbbgPCZdpLN5OA5BsHIi10OcnaECLsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFhLo1qiiwO3pD1lQyrcA%2FhBsXdH431waOVibhbD0Eyyp5PNrnxqI%2BTLwEnhPtlhY0HAX%2FpFaRu9D32P02TvIum%2F8dOyr0z8dDSsLez3zcC0KHMKXVLew7mMzadlCAQIPmN9I67FYSo2dmTfL4LPPvh3ykQkJSPbgD6lRk2lss%2FrEa0scWK8iiIMKdWXsfn9euS%2FxWIyXWO65ysZ0Y29m2O2lGQP6sYefBrJEIhqi83umgglvR27i1hcpiDNPPAKFAOOs3iaKNhSKbJnJtktFhwh%2FU%2FWcDx3j08j%2BkPZhRzht2PcaIyc%2B18UbYU02jHcoK8Yb3C7qR9QdiDm1Lo6f0B76TNpVcqm2mQPZoP8M9GstHDi1npl4gxmtcwcZO5OukLjPyJgihufJaZNoYB%2FAq%2Ba4euMgGZQvbqYRNvqE7My%2Brxume2G3WsiYKPhgxCEgGmyStI8zt4Bt%2FcBnD9bd4l6HT4aGzLn4dHI1KlSuJEdh8UIFnVJgkCcwrl2yO3X1c4Gi7m29Vuv%2F6ECrTctRUPs8rrGIQyUJe9L2FUGRykYdCUvGbkxBvaQNkdj4SVuHHk%2BDLdnVbLNXubbXEBTUG7gttw4z7XGsBc6r4JxeD5i5rvgNMETmUoMWIPyC4il6a080dJmrnC0e6nBMM%2Fwgr4GOqUBopIkQXaw2Hodnt0uBDa42GyWVzxYxksv6N7A8zgUXANS5IYbpz2kLML%2FQd%2FTxkjMQYKYt%2FTsH7Y%2BqVCYMHINL7yycI54OxvYaCdX%2FagCZLUFUajbrTnYIoSNik4u60Tj9%2FPSroW1irIddk%2BdqMdUfLTkUOmXDdymyd3T0%2Btzs76GszPksfYFPFoWAC4jIGosUXw8snK9tYN5ojGxgi8wrFvXT1fG&X-Amz-Signature=2abe8243bc9e3f79e7cce71fb8dc9bbbf64c5f1036dd6bfc5d8c083255044256&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4HXU4J%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC%2FKgn2WGFq9LymaZRpkam9iR5rqEOD%2BMluX%2BgqN2go3AiEAmjDgzFnaSbFje8joFY2LHiqhpAU2r0RjKxHE386LGw4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDG1rFHE34nDpFNou2CrcAxClJRElp%2BjYWk7EJ%2Bl87IlyKYHkfseWkF1Iq7s%2F%2B6FqkrsJRiJOx%2BDbliXBMABCcT93tM%2B9SOlddAqH2Jdj3D0SQ9hgEn1QsOUpmItSI%2FRuF%2BHJeHD4oBymgtl417w7D8UcNMKgFkHVPbqF5EOFy19T5CXBm0StsnzfUeJz1CMPbWhR3WRVmdtqW%2FUTr%2Bk4ZQTUHrhyHkafmxQ5lJ%2BhIgh2RqtonDnRmcpnTH0KGrGqjrE8mDDY3%2BLOq2cvXJiw7I3jPpNvMGRo4erCZvV%2Bu5OtEtDVG0xzx7o%2BuqsO1%2FYSSM0eFdKg%2BRmyWwEJ1cv9xPQgPPqxW1si4dwBNXPxOYs4BrtjhRP3wrtmBt2RLta0blJslgX0%2Biaw4%2BW95CxB919kTFwHdPw8HSXGgGn0I%2Bzf5P3iKN9%2FSLg4pQIcZ8pqL5Mah8N5DfAIgqzMO1equCEneqMKplLEEKCYARo2oEUwRy41tZYOyscCJxvqQDYXqF5z8t%2B146065naZ3pYpgDYY%2FP5VOsFuk7eVo5XdJL%2BeaHzVfQQ%2BSmX7hO2njPIodk05O%2BcK3iMCjFGGYhP7rjn85Hh142y%2BPTbIemCnJ425PMyo5GYfHYGhVahydaYH56bZ3eGWtbTCsK1eMNbwgr4GOqUByLdHPlo8C84Mru9hRyWNQySeLHggWVwN4RUY2%2BIaumFeTWtxOz9i%2FF4Mq%2BCQ6PrE4N%2F5N8pMA2yAiQTeM4BActH2FOpNg%2B0%2FPDj5cCGFUOy%2FUdlq5Hv%2BfwTaU1yVWcVwr7xP%2BatWDJ5ypVdNdzMfjAwOyRDpB9lr%2F8561Fo1eLQ8GiOvlj0xij0mYZQbEqWtpxcu50Y9AC4AEohGOLWBjjfzR8YB&X-Amz-Signature=1852f0e5bd622dc475520daa00c9f9290b44d1f0116dc2ab7e9e956809a6edc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXBER2R4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIElOspg5VTYPQkNzNZfFno%2BAXwYK8mGZsg8qLnQDPMdLAiBuZ8tv%2BQ2NuQjFWT7jbOEmT9L3VfXOlrJIbTT1Es1OLyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMzYUauZ2q8zIxplQOKtwDENYt45a07QEY%2BGi6mZlH0V0agYiAljYI69pm%2FFud8T3GU5ofpO37KlD6hX67f4MX4SMZh6XT1qcahsubj9rePV056oWoXHSVhEmTO4KBLlBMVnet%2FkITHc3atW6jAYdCX0NK9l6aeSCsERJfqvFlNY3KnBKBrRt8z6OfP69ZJIftl7%2FWhEFj0FIR0SAbUT%2BcH7ho9feRrjlQ3GuCl3PBQJlGzpCRRQk04TJubhoUXAGjx6zoRBi7J3%2B3yraDON1rmNKa0wZfIgjuHFFM6cPJCPe8%2F4%2BxOZJKRIuH9vO%2BN0fep7cCYtMGpDHJXSGA9Yl7UIhj%2BW7r3o6AcKjx16iYug2vqG5K%2BhMnDMXbh3gzytXdwUOj0yHDDIKS4qcsEEBTvyhRAVL%2B1lT6IUVyDzVHwkyipG2v9XAo1hLtXgR4%2FnVIN0N7usrH09gvfPv7IfJyUe6yoyCzo3n3i1RDeTW4hP%2FtR%2BPjOM82fb07p2pixH8B3AAuS3GXCZ0hNmGI21MOqgQbjB3UW8wkPjpEpYVlOkO2CDDFzZom1fNi0niqc4ms4sC08fBx6djYu7jcqmlRFJ%2FDZxxiEi4YXngANtzCpt3EGqRmWGIehM6wZD2NHPj0okoD8L3vx%2BOpU90w6vCCvgY6pgHhpgUhrycYzjS9cAlHlBR%2BejnBUsa8SpaTivk0QBLJUvEQs%2BlhUOD5FhsiDf%2BexvbwcVg9NnHNSrq7%2FkjgGdrzrxVqbWVIcbDyEyhV%2FGNPWkQN054p6NULOe9OB5k4fRGJXKZIecNxHe4TtQwoo6NEkMrUCQ2mc4QcbYtpkFwDZ3pr9B5xpRsTzItLm10uT8la6tgqBwrwiKWXH%2FAQ5IdVRIMiXffO&X-Amz-Signature=79a33065225a0b639cfd3b901e0e78a1c0031d58244ade5220043eab06732d20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GMIFJZT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC1K%2BvN1rXrVKLcR%2BaEAHVOZVh90dMk1yOjV5drFufUnAIgN75LSwolsRInZfbbgPCZdpLN5OA5BsHIi10OcnaECLsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFhLo1qiiwO3pD1lQyrcA%2FhBsXdH431waOVibhbD0Eyyp5PNrnxqI%2BTLwEnhPtlhY0HAX%2FpFaRu9D32P02TvIum%2F8dOyr0z8dDSsLez3zcC0KHMKXVLew7mMzadlCAQIPmN9I67FYSo2dmTfL4LPPvh3ykQkJSPbgD6lRk2lss%2FrEa0scWK8iiIMKdWXsfn9euS%2FxWIyXWO65ysZ0Y29m2O2lGQP6sYefBrJEIhqi83umgglvR27i1hcpiDNPPAKFAOOs3iaKNhSKbJnJtktFhwh%2FU%2FWcDx3j08j%2BkPZhRzht2PcaIyc%2B18UbYU02jHcoK8Yb3C7qR9QdiDm1Lo6f0B76TNpVcqm2mQPZoP8M9GstHDi1npl4gxmtcwcZO5OukLjPyJgihufJaZNoYB%2FAq%2Ba4euMgGZQvbqYRNvqE7My%2Brxume2G3WsiYKPhgxCEgGmyStI8zt4Bt%2FcBnD9bd4l6HT4aGzLn4dHI1KlSuJEdh8UIFnVJgkCcwrl2yO3X1c4Gi7m29Vuv%2F6ECrTctRUPs8rrGIQyUJe9L2FUGRykYdCUvGbkxBvaQNkdj4SVuHHk%2BDLdnVbLNXubbXEBTUG7gttw4z7XGsBc6r4JxeD5i5rvgNMETmUoMWIPyC4il6a080dJmrnC0e6nBMM%2Fwgr4GOqUBopIkQXaw2Hodnt0uBDa42GyWVzxYxksv6N7A8zgUXANS5IYbpz2kLML%2FQd%2FTxkjMQYKYt%2FTsH7Y%2BqVCYMHINL7yycI54OxvYaCdX%2FagCZLUFUajbrTnYIoSNik4u60Tj9%2FPSroW1irIddk%2BdqMdUfLTkUOmXDdymyd3T0%2Btzs76GszPksfYFPFoWAC4jIGosUXw8snK9tYN5ojGxgi8wrFvXT1fG&X-Amz-Signature=20668c23e0caf813925db1a06d7d3e885cf7363e9527eb0c61542510538730d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
