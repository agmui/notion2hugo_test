---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MVJAAZB%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByysMb3I9cnVhz7DqTqtaMo%2FVIj1gtsx866t0USjjRMAiAK%2FNdPVmBXe73qt6qjN6JwP26Ql03yF97MAGU%2BAQN9WyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKcshANgQrM0X%2FW3KtwDPeO6O2FAVkYy%2BKpnOYnMQ68wkvY78eoQJauANpelocjIW64OO5ny3mJHfD57VgH6HH2t%2FBicNMENvjjRTO2HMqGimJJis6U9StXxURDB69%2F%2FpAk3LdI%2FyvRtifLmHg%2Fb1AeO3Xbx01z0gn4UL6V7lFFROqCiVWchI3hwNbujLOruUlDMQvvq8AwaiJAAz%2ByZQYRSDULwny8rzQwMMsuLs5%2Fn7cGqeUEVWXFtGy6feURqG2DdByxBl8HgziKqphw1hjY3igk0Lqedm0v8%2FMQmr8vvFOWk853at4A6lPs2q0W%2BBE1CBAHsFKpXzzlbxfEUXBF7fZ9NOXqdQHwd2iWpSkSxBZBnrYTGiDTbQCkBMo7oplKLplzPqYunISTh%2F8Pto2wbpMKXHz4GfS1g69zoW6J%2Bzq9DjjlkJGZJuumiubItDzV34XPW%2BcMwWviqSpodg10YVFL0lK%2Bir5MRl5NEx2xzMeQ4c2zISiWmPcCdmaOE1lcWKzm1tZjYkhecf1gjSxMJHFvPbYTD4t3ruJ4RjRJw57Vrc4ReZN2sc7AKMaGXORlzybN8tZzfi0WvKM5KzGsxK5ifl6TxukS9yCcefgP%2Fdrdi09ipISCG7uQ8I3koLzhYHTAUScxa12QwnN21ywY6pgFYHeaekZ6n7RZux%2FygYqwCB8mftSyRyDPT3z9HeMPdzjWHBaH8eSXZVekH9RzW0vTy3bEfGm3MXsywdvCJA6gIIrAZ0GUOS8GcJf%2FRXnW9eIA7iNnnjEb%2BSl8q3LtgeDmYMo51QjV%2B%2BrHVKzlcbsNpOhCU3lZotlCwXc%2B1L8rGWRi0nq%2BTpt97hfpjpjQsjnjdjDfZo%2Fcxa2Th38uhIsI0Cu6mmFyy&X-Amz-Signature=d44a9edfc6e8fb97d05e69ee85102b98ffda3d7c31042911bc57dd29005f7f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MVJAAZB%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByysMb3I9cnVhz7DqTqtaMo%2FVIj1gtsx866t0USjjRMAiAK%2FNdPVmBXe73qt6qjN6JwP26Ql03yF97MAGU%2BAQN9WyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKcshANgQrM0X%2FW3KtwDPeO6O2FAVkYy%2BKpnOYnMQ68wkvY78eoQJauANpelocjIW64OO5ny3mJHfD57VgH6HH2t%2FBicNMENvjjRTO2HMqGimJJis6U9StXxURDB69%2F%2FpAk3LdI%2FyvRtifLmHg%2Fb1AeO3Xbx01z0gn4UL6V7lFFROqCiVWchI3hwNbujLOruUlDMQvvq8AwaiJAAz%2ByZQYRSDULwny8rzQwMMsuLs5%2Fn7cGqeUEVWXFtGy6feURqG2DdByxBl8HgziKqphw1hjY3igk0Lqedm0v8%2FMQmr8vvFOWk853at4A6lPs2q0W%2BBE1CBAHsFKpXzzlbxfEUXBF7fZ9NOXqdQHwd2iWpSkSxBZBnrYTGiDTbQCkBMo7oplKLplzPqYunISTh%2F8Pto2wbpMKXHz4GfS1g69zoW6J%2Bzq9DjjlkJGZJuumiubItDzV34XPW%2BcMwWviqSpodg10YVFL0lK%2Bir5MRl5NEx2xzMeQ4c2zISiWmPcCdmaOE1lcWKzm1tZjYkhecf1gjSxMJHFvPbYTD4t3ruJ4RjRJw57Vrc4ReZN2sc7AKMaGXORlzybN8tZzfi0WvKM5KzGsxK5ifl6TxukS9yCcefgP%2Fdrdi09ipISCG7uQ8I3koLzhYHTAUScxa12QwnN21ywY6pgFYHeaekZ6n7RZux%2FygYqwCB8mftSyRyDPT3z9HeMPdzjWHBaH8eSXZVekH9RzW0vTy3bEfGm3MXsywdvCJA6gIIrAZ0GUOS8GcJf%2FRXnW9eIA7iNnnjEb%2BSl8q3LtgeDmYMo51QjV%2B%2BrHVKzlcbsNpOhCU3lZotlCwXc%2B1L8rGWRi0nq%2BTpt97hfpjpjQsjnjdjDfZo%2Fcxa2Th38uhIsI0Cu6mmFyy&X-Amz-Signature=35c6bdf6d74be6b99471b88e0a0e5f9da4acdb4b18b3096b636ab062851a82f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MVJAAZB%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByysMb3I9cnVhz7DqTqtaMo%2FVIj1gtsx866t0USjjRMAiAK%2FNdPVmBXe73qt6qjN6JwP26Ql03yF97MAGU%2BAQN9WyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKcshANgQrM0X%2FW3KtwDPeO6O2FAVkYy%2BKpnOYnMQ68wkvY78eoQJauANpelocjIW64OO5ny3mJHfD57VgH6HH2t%2FBicNMENvjjRTO2HMqGimJJis6U9StXxURDB69%2F%2FpAk3LdI%2FyvRtifLmHg%2Fb1AeO3Xbx01z0gn4UL6V7lFFROqCiVWchI3hwNbujLOruUlDMQvvq8AwaiJAAz%2ByZQYRSDULwny8rzQwMMsuLs5%2Fn7cGqeUEVWXFtGy6feURqG2DdByxBl8HgziKqphw1hjY3igk0Lqedm0v8%2FMQmr8vvFOWk853at4A6lPs2q0W%2BBE1CBAHsFKpXzzlbxfEUXBF7fZ9NOXqdQHwd2iWpSkSxBZBnrYTGiDTbQCkBMo7oplKLplzPqYunISTh%2F8Pto2wbpMKXHz4GfS1g69zoW6J%2Bzq9DjjlkJGZJuumiubItDzV34XPW%2BcMwWviqSpodg10YVFL0lK%2Bir5MRl5NEx2xzMeQ4c2zISiWmPcCdmaOE1lcWKzm1tZjYkhecf1gjSxMJHFvPbYTD4t3ruJ4RjRJw57Vrc4ReZN2sc7AKMaGXORlzybN8tZzfi0WvKM5KzGsxK5ifl6TxukS9yCcefgP%2Fdrdi09ipISCG7uQ8I3koLzhYHTAUScxa12QwnN21ywY6pgFYHeaekZ6n7RZux%2FygYqwCB8mftSyRyDPT3z9HeMPdzjWHBaH8eSXZVekH9RzW0vTy3bEfGm3MXsywdvCJA6gIIrAZ0GUOS8GcJf%2FRXnW9eIA7iNnnjEb%2BSl8q3LtgeDmYMo51QjV%2B%2BrHVKzlcbsNpOhCU3lZotlCwXc%2B1L8rGWRi0nq%2BTpt97hfpjpjQsjnjdjDfZo%2Fcxa2Th38uhIsI0Cu6mmFyy&X-Amz-Signature=d49bbb29395bda51cae48916b3c650b0976cd83f211014ffee4817e15ffddcb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57SKXSC%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHt%2BFuSetCPxGr7qyZlGIvACYoILfdaDAspXXhBFopVAIgE15fBcQTvdMrs3JS%2FD4poSKnfduqXZbAWKy2G7fNWoYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCC6RltY%2BiRkTywy%2BSrcA%2FhAE5Uu8q%2B%2F%2BOsQxDXTv6tWV%2BJ13eP79auT37JBACHYMXSHSRELzwROSfwn2LiwFJpxpvE9xRMlQgB47405i%2B0FJlOOYOXbgjShAikVieX%2FzZuaGz7KU4LkzDRoHjMsHjSpxd32QzMTQ%2BgDfJlzmgt09p9tLXRanDG41C1mLp0xag%2BPC1ljMn0UDcGE%2BtghyRbaEulrhTqW8KsgbGojGhU7UGxCMjSPKdmfrV4cjVCjvix7U7wwxKS4%2FYP0h8ja8vIy2jcIA7PNlPerdUJVT5dLV%2BBzMIcoshuz5%2FI1%2Bnwn%2Fbb%2BA8AbdJe7bc8mJA%2BZm4zw%2FP%2FMdlYOTmfnSo8CWDddNg%2BP6VTpbbVxRgmU6OSCmuM%2FYGidMfkda4tRyyw%2BfPNbwBwAlEwoHvW7x4uriS89lDm21trsjbqF%2FmOXHakeXlPPkUPdkmDLiqCzNLSyyw8R92fdlf6XxLckOqmryXDJEdTlZUD7v92qVAvtt5L9XxgJqy9s8s3imE2V6mJm6Ve0FdZ65iMWxeAGT7%2B1vzWPHrRB1pmX4ggQZDjwJzILS7p%2FgoJuiMqNOxsIMQS56norJeoOID19Cripf0hTFZn%2B3lc45a0QmuYsPRUhgeFzopTi8Z3Kro%2F4QDJGMLLdtcsGOqUBF7%2FmeVKFeLmwclE%2FcM58f9hx4Us%2Fy7KiGACGt0dAwOSpgc9TttLIvmYJnFH2RCvirGH2HVzeEoVxLcLzl266le9xwQrltByYcFdhXUK5J%2FFr%2BHWXQuis6jDJqfvXay1%2F68snzdxyb8FbNLC8rrXsMresBamrWL2kGZb4R5iTVCL%2BG2pQTY%2BbbCuq533Cz%2F6tn9ME5sRZOvT%2F3qEZNEZCmltGKBYz&X-Amz-Signature=71bf8a498a7263a653073b57dc8aab8e235fd75b06eee72516bccc08d3f82b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6ULBT2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8f84RAMTTic2xIy3GoR3akwrcEq3XwppSjr0P7%2FaQwgIhALTH3dNRU7w2jcZrl7fV1J5AlV5gO8d731%2FtnFPHKLVoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqMTvSUFCfMJpKrzIq3AO59zoM2zOz8nS%2FlP6fjoh8ipEgWLX1340icwuJE%2FDzuM3QbbYzZ8mgieWuNk6xxEIPHvEqzmtdDdevPbSmGsQQXPnKskOUg1x0FE2mkA92x7Nr8d%2B93HDNr1SgflPWCYcj7QjLeMCr4hNmJHKDtoBDj0YmWYpE4N%2F3MkhoVfDAzdACeZZO%2F%2FLo5DAc8j4dU%2BrbRpzo0Cc0%2F6wRjrfDmKOrzhFfb6IXKVxrQG1223qWhlGs3NpU9h6EMsFc0HQ%2FUroLBJN6PW%2BeqE5L1D1VVjayAO%2B8IZSFUdSsbT3uH0EZEEP3qtKIZMyb0ssadFOQRYYnadW9O3f6I1%2BYfsHwxm0XizKipEJkmoVrpilDWWOeJhLoeTj4xxdiY8A1YC%2BrUlv6xIsuUOIFSsIDDf8pH5VbyMHiR6fxqsG6TXrsTo%2By%2BUw7%2BquQHzdYr0VM9OC6Y4TehAzH0qdAMv7UXjX%2F9tCPoW7Rhi3BGCMh%2B2q4kZquZ%2BVYq9l%2BLLoahk1QQZvLVL1dHafHnvNcw%2F87lqQ%2BMbr%2FnZKM8czCmku%2Fi0r58qICECPDdsrMes8%2FsPyfcyurM9s6vfaLXVLvHVUCA4%2Bh3lBRMSHcLUSd2nDWPRSjgb1qfWZckIGFKTjcP5KpAzCy3bXLBjqkAUazCrqhILXwaWCBPvmlTY5wB6esY3Wo67Y%2FkcgO5iWfSE571iEghEJGhLl2m9Yh7Y83DmJzvyhhyctN9NgehJQ8Be%2BMhXPvxp%2BsYCW5worWPhXgc3HI6XPZxothSjl6w0XcxC6YGSXNdVX31xi9sH2G8QL%2F7FpYrj%2Fo82zIrwAOmi%2F6NTSikwM5h3kbnhanrSb3WHLpqRieESx74Z2Zop3dtpnV&X-Amz-Signature=a42b94ddfe7c2dcf4b2fcdbc566a4e3a0271f8e8799de7c9e8533cc444ce64c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MVJAAZB%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByysMb3I9cnVhz7DqTqtaMo%2FVIj1gtsx866t0USjjRMAiAK%2FNdPVmBXe73qt6qjN6JwP26Ql03yF97MAGU%2BAQN9WyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKcshANgQrM0X%2FW3KtwDPeO6O2FAVkYy%2BKpnOYnMQ68wkvY78eoQJauANpelocjIW64OO5ny3mJHfD57VgH6HH2t%2FBicNMENvjjRTO2HMqGimJJis6U9StXxURDB69%2F%2FpAk3LdI%2FyvRtifLmHg%2Fb1AeO3Xbx01z0gn4UL6V7lFFROqCiVWchI3hwNbujLOruUlDMQvvq8AwaiJAAz%2ByZQYRSDULwny8rzQwMMsuLs5%2Fn7cGqeUEVWXFtGy6feURqG2DdByxBl8HgziKqphw1hjY3igk0Lqedm0v8%2FMQmr8vvFOWk853at4A6lPs2q0W%2BBE1CBAHsFKpXzzlbxfEUXBF7fZ9NOXqdQHwd2iWpSkSxBZBnrYTGiDTbQCkBMo7oplKLplzPqYunISTh%2F8Pto2wbpMKXHz4GfS1g69zoW6J%2Bzq9DjjlkJGZJuumiubItDzV34XPW%2BcMwWviqSpodg10YVFL0lK%2Bir5MRl5NEx2xzMeQ4c2zISiWmPcCdmaOE1lcWKzm1tZjYkhecf1gjSxMJHFvPbYTD4t3ruJ4RjRJw57Vrc4ReZN2sc7AKMaGXORlzybN8tZzfi0WvKM5KzGsxK5ifl6TxukS9yCcefgP%2Fdrdi09ipISCG7uQ8I3koLzhYHTAUScxa12QwnN21ywY6pgFYHeaekZ6n7RZux%2FygYqwCB8mftSyRyDPT3z9HeMPdzjWHBaH8eSXZVekH9RzW0vTy3bEfGm3MXsywdvCJA6gIIrAZ0GUOS8GcJf%2FRXnW9eIA7iNnnjEb%2BSl8q3LtgeDmYMo51QjV%2B%2BrHVKzlcbsNpOhCU3lZotlCwXc%2B1L8rGWRi0nq%2BTpt97hfpjpjQsjnjdjDfZo%2Fcxa2Th38uhIsI0Cu6mmFyy&X-Amz-Signature=7211a50c244ab2acbb684fbbdd2961b1d2d5b19f8c1b5939fce4945ea539fc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
