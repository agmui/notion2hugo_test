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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2U756Q%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYUkhZdsCGW0ZYAK%2F%2BZMGTmQxaIrxiZVNzG8XDkminQAiEA7go0Bxjf52nwneLYp%2FHPIwdL0Z03XaOcSQm3Q3JUHPAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDADfYgsVLxrNl4KpACrcA5Rm78aGufYJojvJQbDORc7n4cxny8er%2FbBo2z5rgptp2b49wp6ysdZOtmB%2BU9UgnfD1gYaHCyBZK6ZuJithbRGzLuu4qOWX9zNrax5cz%2FW4vfmgrNwULKzW8VvqlsfuVvfGPh4MXxR2xybsNtPKxgFH6AHiariEUnGHyjjh7hblC99tulez9iQv8%2FKCExjVrf%2BNB6IMyj6Zd%2FY3OH3d67a%2B6ablyYG0cv2gGDEVrAHNFNSOWKq9IomGeJmjRvchoF1CIEXUE7VLio4oCNtyrtNfD%2F0OuKoM7QNN6IVRRPYspcrhlIueh4L3O4F02PBjkewCNkJBSgarcJkCCVpVWHrXAOTkNRTHVCt%2FcZPRnOjX0%2FdgO9klXRRSclH7dQBtBc2lUuknjdAo5ICBbgyHhGagAXegBcY5Uocq7C%2FU%2BrFZy0%2Bg2pgpA5KsW60UzeWr10P2ihYGX3oO4sh8EBlW27CN1k%2FGraxbK0QnTSy%2BKKePhQI0e0K4cUK8YG8eZiD%2BSU%2F6P%2BIYpSp4QtLx02eAw7qgrJw1GwBRUNEeQZnA%2FtgF6mqG6ZCnOtzn6i9bETghQUN3l5rKw9E8QdHEDcjQNySH17kz5WXZyiJmt4C5Eu9OZ4LYeBItULXlw7e%2BMOeu1MEGOqUBUKBBI75SmNorM1%2BZXWH%2BOsRVtiUx0rZbdb%2BzkiLjPrwRh3ISyYKHjF9Kpjs1CmUDXDwLQ%2BaGUf0H7Wq9jY5glptGjpBnFbaXULbh7akhUY5p8c9YUNhvsidfY9eI6xWYZiCJUHRPaexYLOB87jVAZUisC903IpvJCNtWXqNZ33Rl131UnhbqjLZ%2FnpUeGxEONBrMkEyQZ98IvhXuvSzDEshrUauF&X-Amz-Signature=488790c2e44a4008336e865e92c0c6e6d03431566fd39090360d4a7836032837&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2U756Q%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYUkhZdsCGW0ZYAK%2F%2BZMGTmQxaIrxiZVNzG8XDkminQAiEA7go0Bxjf52nwneLYp%2FHPIwdL0Z03XaOcSQm3Q3JUHPAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDADfYgsVLxrNl4KpACrcA5Rm78aGufYJojvJQbDORc7n4cxny8er%2FbBo2z5rgptp2b49wp6ysdZOtmB%2BU9UgnfD1gYaHCyBZK6ZuJithbRGzLuu4qOWX9zNrax5cz%2FW4vfmgrNwULKzW8VvqlsfuVvfGPh4MXxR2xybsNtPKxgFH6AHiariEUnGHyjjh7hblC99tulez9iQv8%2FKCExjVrf%2BNB6IMyj6Zd%2FY3OH3d67a%2B6ablyYG0cv2gGDEVrAHNFNSOWKq9IomGeJmjRvchoF1CIEXUE7VLio4oCNtyrtNfD%2F0OuKoM7QNN6IVRRPYspcrhlIueh4L3O4F02PBjkewCNkJBSgarcJkCCVpVWHrXAOTkNRTHVCt%2FcZPRnOjX0%2FdgO9klXRRSclH7dQBtBc2lUuknjdAo5ICBbgyHhGagAXegBcY5Uocq7C%2FU%2BrFZy0%2Bg2pgpA5KsW60UzeWr10P2ihYGX3oO4sh8EBlW27CN1k%2FGraxbK0QnTSy%2BKKePhQI0e0K4cUK8YG8eZiD%2BSU%2F6P%2BIYpSp4QtLx02eAw7qgrJw1GwBRUNEeQZnA%2FtgF6mqG6ZCnOtzn6i9bETghQUN3l5rKw9E8QdHEDcjQNySH17kz5WXZyiJmt4C5Eu9OZ4LYeBItULXlw7e%2BMOeu1MEGOqUBUKBBI75SmNorM1%2BZXWH%2BOsRVtiUx0rZbdb%2BzkiLjPrwRh3ISyYKHjF9Kpjs1CmUDXDwLQ%2BaGUf0H7Wq9jY5glptGjpBnFbaXULbh7akhUY5p8c9YUNhvsidfY9eI6xWYZiCJUHRPaexYLOB87jVAZUisC903IpvJCNtWXqNZ33Rl131UnhbqjLZ%2FnpUeGxEONBrMkEyQZ98IvhXuvSzDEshrUauF&X-Amz-Signature=ccdef04cbf2303fab08fa983ca9d476beecec3b786c5d5df1551cb3f1bb6b1a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2U756Q%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYUkhZdsCGW0ZYAK%2F%2BZMGTmQxaIrxiZVNzG8XDkminQAiEA7go0Bxjf52nwneLYp%2FHPIwdL0Z03XaOcSQm3Q3JUHPAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDADfYgsVLxrNl4KpACrcA5Rm78aGufYJojvJQbDORc7n4cxny8er%2FbBo2z5rgptp2b49wp6ysdZOtmB%2BU9UgnfD1gYaHCyBZK6ZuJithbRGzLuu4qOWX9zNrax5cz%2FW4vfmgrNwULKzW8VvqlsfuVvfGPh4MXxR2xybsNtPKxgFH6AHiariEUnGHyjjh7hblC99tulez9iQv8%2FKCExjVrf%2BNB6IMyj6Zd%2FY3OH3d67a%2B6ablyYG0cv2gGDEVrAHNFNSOWKq9IomGeJmjRvchoF1CIEXUE7VLio4oCNtyrtNfD%2F0OuKoM7QNN6IVRRPYspcrhlIueh4L3O4F02PBjkewCNkJBSgarcJkCCVpVWHrXAOTkNRTHVCt%2FcZPRnOjX0%2FdgO9klXRRSclH7dQBtBc2lUuknjdAo5ICBbgyHhGagAXegBcY5Uocq7C%2FU%2BrFZy0%2Bg2pgpA5KsW60UzeWr10P2ihYGX3oO4sh8EBlW27CN1k%2FGraxbK0QnTSy%2BKKePhQI0e0K4cUK8YG8eZiD%2BSU%2F6P%2BIYpSp4QtLx02eAw7qgrJw1GwBRUNEeQZnA%2FtgF6mqG6ZCnOtzn6i9bETghQUN3l5rKw9E8QdHEDcjQNySH17kz5WXZyiJmt4C5Eu9OZ4LYeBItULXlw7e%2BMOeu1MEGOqUBUKBBI75SmNorM1%2BZXWH%2BOsRVtiUx0rZbdb%2BzkiLjPrwRh3ISyYKHjF9Kpjs1CmUDXDwLQ%2BaGUf0H7Wq9jY5glptGjpBnFbaXULbh7akhUY5p8c9YUNhvsidfY9eI6xWYZiCJUHRPaexYLOB87jVAZUisC903IpvJCNtWXqNZ33Rl131UnhbqjLZ%2FnpUeGxEONBrMkEyQZ98IvhXuvSzDEshrUauF&X-Amz-Signature=311eb1c4985bb790fc225b5207eba78a18a547a2ffd577ac260bf5124c3d40fc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIHJEHVN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9B4h2pEmkJpug5JvpT3fMukaYxgh%2Fwk%2BGEXec0MwbTAiEA0Bx7ljL5nflmgQT%2FoB1%2B9PWd%2B60LjaHdrvhm%2Fc6Yb8Mq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLJp%2BAcbhmu7Zx5o6SrcA%2FhzTkekD0rr01%2Fy0%2B7xV8HCsuVyPrslzfayrVrDzaxdRj8ifkaUN92eFi14H8s75Ckah3dIRg41cjE9%2FrPL%2FKisur8wVVTGMzYKkYF0ew2JG9CCGpmuUwuCf3y4hDXl0f%2BlK5Jtvb756pkncJX%2FA0c4gTOTPyL7AR5EuLxliBVuqbnSSr5gUTp2sx9%2BFzIrIT2E0QUYe9k%2F1ekdFvYmU63hwymBmUxgqf9RWgmpJnGuTTT%2BRNNen60dxRaR1Nr7KScjlAlNjHubrCSHppCvxJdXZTbOpudwx5bIJFl45AdM5bIuju78mSHcG%2B9N8GK5YpH%2BxKZHVidiWl5oZadrcyWSKQ%2FQe4oOtgdVQKJjQgXJeLZ5ngelmXNvF5E8zLg7ib6qNnvKx9LkA%2Bh0Ooq9XN6mJBnKWrirLtDiFXuO6H4jgoMtcyW8Kh%2Bdteo3s7MvK017ytcvJU4wOe3NhDyk7PWHglO%2Be8D%2FZgEsA6ANzgNRiJMq8eILkfYHvTqsQsCvwsthC6wNpvQ6NTa5w71NbwmDMcB%2F71alTRS7L9VGCVzqBhXOrn3FRSAR%2FL4NmMEjAPoGCQHHqAIMBQVpgRlKkJR9X1pRvZlnX9ywlfBTyIoMrWHtPY3GaJbQE%2BpuMNXL1MEGOqUBhiffmnRV0dYefDwYO%2BAkFRAfRgsWfG3n1SRsgKO3PuCraLRqpspu%2BCo5u1l%2FXMEqCeDQ02h7flonWY6HqBcIqnES1EUKgZ%2BTgS7DYT24Bs2j4XFww09%2BW8kswjteOJMryNVktHuTOcyMqsVYkVgWGQl1%2FipVPLSgfwRy2nlRTJOL6f15F%2BWop0Sxf2pKINQYfgqHZnHi6c2wN%2BcNxAx388ssXj4Y&X-Amz-Signature=fbeb677bc45b260430b183103e22672c70b160c7e2100b2bd607fd2e38edaec9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZYCYNV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbjF7ZGz1Hcdb7qr0Gji4AFYaWpEKBGv1lHHu38IG91QIgNbM5ok7KER5fYIF1vb55yCbeX6jgPPWzvnBe0Dvd7wkq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCeG4MKh0bNFbDYGmCrcA6cPw8hN0N%2FqTOzbvTDEX9pQcn%2B36H4X85x54m2gYJtXc%2BKQfKBwbg1SsgvCVzc84j5rOW%2BHWKr%2Bj2I5gfCCBQKVGKQTqW7jBWNNVlHPqvG0wucM1ZBpC95t9RI3YOYER2ACAK5IXbkkW0UNOdX12OKDt3ezPrLmPEXnvpBc4ikgecyails%2BYhfHg5XP48NApvwunVP2APFMXQ89jPuStt918x61tL60d3OVVieJemZQ9atZWhj%2F8eZxWH%2FWJgu1fRsc1xRkiTNpSzwM6uomIZGRSBFFyF4IMok3pNAMg3q2J7OyFNyMJsXPgolcfurOkwaPeGe%2BV280WYnJc23ZacZc2ySjqadJv2tUoxNl%2BIeYg738fuZLgtE9pZ2H62ssiVCS2DCrw7oKvL2ZB6eC7H0zw%2FgA8HzeJTDZk%2BvFyaopYlXVXIKrp7FONazV3bxA%2BPB71e4JN22%2Fp2L%2BCC%2BqZZlKSRBYvm1qinn3wblKxjzTsW9Us6A41JnpFhB1lJj2SWa%2Bd0skmRYLlGWLbYC8%2FAuwfj6UK3KdEM7Fgb7IjNXVZK0rUt9Vr66cgKJx2oXTUMpuP16gkvuGZJzU7n%2FEHRBckw3cymO8TXP%2BxYoiV3Ec4JD0BiZUmodyx4jVMP2W1MEGOqUBpEtlDr9IFghlXi6rwe7lDFvOT4b2kje9JD2%2FrDCCW5d%2FPgDszCG8pcq%2Bryo%2BgREzMHH805rhOACCxmPp7Nro9NDKaW%2BKsSY763axtgDN7HX0ygG0vmmKJ2Yx38%2FwYk1m8xo9FOR0FA%2FaOEJJOvcwyebWwV3qEcgRvycxeTCsBoEx509GTtjDcaHgzY%2BAhaEePtekv6fGaiZVUG8%2FrSNU%2Fy5H4of3&X-Amz-Signature=1100fabd5854809caac2f788161e363ea9af9a5b91fa181379bb365c2de60b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2U756Q%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYUkhZdsCGW0ZYAK%2F%2BZMGTmQxaIrxiZVNzG8XDkminQAiEA7go0Bxjf52nwneLYp%2FHPIwdL0Z03XaOcSQm3Q3JUHPAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDADfYgsVLxrNl4KpACrcA5Rm78aGufYJojvJQbDORc7n4cxny8er%2FbBo2z5rgptp2b49wp6ysdZOtmB%2BU9UgnfD1gYaHCyBZK6ZuJithbRGzLuu4qOWX9zNrax5cz%2FW4vfmgrNwULKzW8VvqlsfuVvfGPh4MXxR2xybsNtPKxgFH6AHiariEUnGHyjjh7hblC99tulez9iQv8%2FKCExjVrf%2BNB6IMyj6Zd%2FY3OH3d67a%2B6ablyYG0cv2gGDEVrAHNFNSOWKq9IomGeJmjRvchoF1CIEXUE7VLio4oCNtyrtNfD%2F0OuKoM7QNN6IVRRPYspcrhlIueh4L3O4F02PBjkewCNkJBSgarcJkCCVpVWHrXAOTkNRTHVCt%2FcZPRnOjX0%2FdgO9klXRRSclH7dQBtBc2lUuknjdAo5ICBbgyHhGagAXegBcY5Uocq7C%2FU%2BrFZy0%2Bg2pgpA5KsW60UzeWr10P2ihYGX3oO4sh8EBlW27CN1k%2FGraxbK0QnTSy%2BKKePhQI0e0K4cUK8YG8eZiD%2BSU%2F6P%2BIYpSp4QtLx02eAw7qgrJw1GwBRUNEeQZnA%2FtgF6mqG6ZCnOtzn6i9bETghQUN3l5rKw9E8QdHEDcjQNySH17kz5WXZyiJmt4C5Eu9OZ4LYeBItULXlw7e%2BMOeu1MEGOqUBUKBBI75SmNorM1%2BZXWH%2BOsRVtiUx0rZbdb%2BzkiLjPrwRh3ISyYKHjF9Kpjs1CmUDXDwLQ%2BaGUf0H7Wq9jY5glptGjpBnFbaXULbh7akhUY5p8c9YUNhvsidfY9eI6xWYZiCJUHRPaexYLOB87jVAZUisC903IpvJCNtWXqNZ33Rl131UnhbqjLZ%2FnpUeGxEONBrMkEyQZ98IvhXuvSzDEshrUauF&X-Amz-Signature=480064b5b83d9fa8fead505d18271e86e6aad55dadbd42f2b3a53d4ff5308c04&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
