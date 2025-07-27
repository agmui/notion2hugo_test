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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXZFGIDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBBJJ2qN6NfCsC%2F13TmOaZT%2FccwIjk%2BpgT%2FUQq1nAQnDAiEA7ZK4qOZ%2B2k3F78FxKL6E1H%2BB59e%2BFKy1oNkMRPnV2Fgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBIqaREg60TnFrfDPSrcA8ySmrPgXrbpmK6cRqhyPZOEBCgT79oGakAow9eCjRCC8KkMtar0N8VjJyoJGmblNNMC%2F1ijvjnJOoCuF6jyLZt32V1ZNrz5EXdRcCdPiMO411nU4z1rAVP3wgTfdeoedtJ03CBbm12KAnU2bRUqL%2FgRuJa8xFjkvM4woLFkL2D6sLfnHkltDBYSIRd%2FSuMUuyIMAuzBq6vlTdKpnfMoTdQYNz6F5Lx5qohc1QO9gmxxKR2tOr4J9ftv7k85JKoyQH0uv9dVljOVAcxskx%2BKBOmzk7UfQVRqz4KTcPhXVdl8GGrnL8GBXlzXYNfvv35XhFzc4AHlrgPhCAOZBpy2Tog5QVDuT9ikBva0EHlYUXeNvG7OkUa8mtWnO3wRytwQ7b8NXiY6GazuXkjLWyuFsqC%2B6S%2BBwte2OE0i2X9gjKb4ky6NM8KIXlZcSkwyx05KyVYtnOYkxsDrEA4i6dfO64UaJyttrpEgBahXgyzkHYwoMjY9%2FZ3q%2FrY2kCZIyIoKwxDQ%2FdYmC%2F29A7BONn7Oco1yY8j2T6VIl9MBBvBg6FLLYKXxthudPXRaI7%2B8XgwBpfF6OX8Zg%2FnvFLZX31XRGiLZXnbQKW2xcqg%2BIjpAck8ZO5OShiMUnthnojrIMIv%2FmMQGOqUBk2nBvNnzjdZGnSCS34dIVDGl6TT5VjQQdzPzuw7svgDhDnoHybrnu1BABhhWUYcURUbUyf%2FdDWvNJIX9gCNelAcS%2FoVtQi9z3VtPAdiuiXJ5mJfu1FDx9ACNtu6T9d4e8FH6rWWnKtHAvrx7I8pwr7cRgnJJx0FMBA3nf8heJFpZW3J7B%2BkTiopBRETuXOXfL%2Bj1pcQ8nYUURVTC9hYVSMD7LBTi&X-Amz-Signature=f172f82bccd6399158188f071b0a9ebae2f24f65fe3d3c948964b438e0c0e919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXZFGIDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBBJJ2qN6NfCsC%2F13TmOaZT%2FccwIjk%2BpgT%2FUQq1nAQnDAiEA7ZK4qOZ%2B2k3F78FxKL6E1H%2BB59e%2BFKy1oNkMRPnV2Fgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBIqaREg60TnFrfDPSrcA8ySmrPgXrbpmK6cRqhyPZOEBCgT79oGakAow9eCjRCC8KkMtar0N8VjJyoJGmblNNMC%2F1ijvjnJOoCuF6jyLZt32V1ZNrz5EXdRcCdPiMO411nU4z1rAVP3wgTfdeoedtJ03CBbm12KAnU2bRUqL%2FgRuJa8xFjkvM4woLFkL2D6sLfnHkltDBYSIRd%2FSuMUuyIMAuzBq6vlTdKpnfMoTdQYNz6F5Lx5qohc1QO9gmxxKR2tOr4J9ftv7k85JKoyQH0uv9dVljOVAcxskx%2BKBOmzk7UfQVRqz4KTcPhXVdl8GGrnL8GBXlzXYNfvv35XhFzc4AHlrgPhCAOZBpy2Tog5QVDuT9ikBva0EHlYUXeNvG7OkUa8mtWnO3wRytwQ7b8NXiY6GazuXkjLWyuFsqC%2B6S%2BBwte2OE0i2X9gjKb4ky6NM8KIXlZcSkwyx05KyVYtnOYkxsDrEA4i6dfO64UaJyttrpEgBahXgyzkHYwoMjY9%2FZ3q%2FrY2kCZIyIoKwxDQ%2FdYmC%2F29A7BONn7Oco1yY8j2T6VIl9MBBvBg6FLLYKXxthudPXRaI7%2B8XgwBpfF6OX8Zg%2FnvFLZX31XRGiLZXnbQKW2xcqg%2BIjpAck8ZO5OShiMUnthnojrIMIv%2FmMQGOqUBk2nBvNnzjdZGnSCS34dIVDGl6TT5VjQQdzPzuw7svgDhDnoHybrnu1BABhhWUYcURUbUyf%2FdDWvNJIX9gCNelAcS%2FoVtQi9z3VtPAdiuiXJ5mJfu1FDx9ACNtu6T9d4e8FH6rWWnKtHAvrx7I8pwr7cRgnJJx0FMBA3nf8heJFpZW3J7B%2BkTiopBRETuXOXfL%2Bj1pcQ8nYUURVTC9hYVSMD7LBTi&X-Amz-Signature=23e96091ae173cc38cebaedde72494d4b9ae2bf5e604708fb42c3d32e5222aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXZFGIDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBBJJ2qN6NfCsC%2F13TmOaZT%2FccwIjk%2BpgT%2FUQq1nAQnDAiEA7ZK4qOZ%2B2k3F78FxKL6E1H%2BB59e%2BFKy1oNkMRPnV2Fgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBIqaREg60TnFrfDPSrcA8ySmrPgXrbpmK6cRqhyPZOEBCgT79oGakAow9eCjRCC8KkMtar0N8VjJyoJGmblNNMC%2F1ijvjnJOoCuF6jyLZt32V1ZNrz5EXdRcCdPiMO411nU4z1rAVP3wgTfdeoedtJ03CBbm12KAnU2bRUqL%2FgRuJa8xFjkvM4woLFkL2D6sLfnHkltDBYSIRd%2FSuMUuyIMAuzBq6vlTdKpnfMoTdQYNz6F5Lx5qohc1QO9gmxxKR2tOr4J9ftv7k85JKoyQH0uv9dVljOVAcxskx%2BKBOmzk7UfQVRqz4KTcPhXVdl8GGrnL8GBXlzXYNfvv35XhFzc4AHlrgPhCAOZBpy2Tog5QVDuT9ikBva0EHlYUXeNvG7OkUa8mtWnO3wRytwQ7b8NXiY6GazuXkjLWyuFsqC%2B6S%2BBwte2OE0i2X9gjKb4ky6NM8KIXlZcSkwyx05KyVYtnOYkxsDrEA4i6dfO64UaJyttrpEgBahXgyzkHYwoMjY9%2FZ3q%2FrY2kCZIyIoKwxDQ%2FdYmC%2F29A7BONn7Oco1yY8j2T6VIl9MBBvBg6FLLYKXxthudPXRaI7%2B8XgwBpfF6OX8Zg%2FnvFLZX31XRGiLZXnbQKW2xcqg%2BIjpAck8ZO5OShiMUnthnojrIMIv%2FmMQGOqUBk2nBvNnzjdZGnSCS34dIVDGl6TT5VjQQdzPzuw7svgDhDnoHybrnu1BABhhWUYcURUbUyf%2FdDWvNJIX9gCNelAcS%2FoVtQi9z3VtPAdiuiXJ5mJfu1FDx9ACNtu6T9d4e8FH6rWWnKtHAvrx7I8pwr7cRgnJJx0FMBA3nf8heJFpZW3J7B%2BkTiopBRETuXOXfL%2Bj1pcQ8nYUURVTC9hYVSMD7LBTi&X-Amz-Signature=9852ae82d5ea8458a4555dd8aff83f0c8cbb51a033550a17f244e358be21a467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAQB2TB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHxIv1DZbIp5R5jWVwGXikKwlO%2BUwnD%2FpWMJiQ3INCBbAiAvhRwLVBeGFh2QDVZSaa0qOtb8pU0Z2n1NFdkM3tRQFCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFSsrNMIbUzJrCz%2FQKtwDBxD9f3t%2BKMXL39JziQOVItJ%2FdSiqPEJVfjeYPQrbu8w%2BDt9qkyVHy3a2nouwUwlka1825miDin7ytE9QaPzdnovUHElYRumpoJWwSjzgRs9prQKSxIVgW5c6CC%2F%2F8rb9CmNQIYkYYZNIoPcyTN3LGABY4FiaohpX3u3o6O9zM%2BWw8l4l23zrIs46KcXimCzOxAkn4G8rwNVxn3IJ03heqi4q85xWcYNHltdB0ogLZpBITQXXl6Y0a77xIYcNKJK%2FAXU5%2BoOATLKxjxtCAdnGbhyxX1j4VT6nZPWjxa%2B8NjiNCA4kACm%2BF4tjsjSKOa%2FXL10XMt9Pu12LTWM8BtPhEwno9I6j%2FCTIXvhs1LYCnqpbaDRaZhCONENI%2Fa0gPNf17eaYhGqgVAVv2frXjmrChzYKHGzAJP8W43RBVLB%2F9TSUIRQzMkCHknew%2BEmzGPKHvPTyBTH7nND1WHUu8qNhFaDL4cvFHaYUvHMmIhpIWyve4qHx%2FsSzWoKrQ42%2B%2Fiba32LP6ajg5sp5dqS4ydgbn%2BXJee0kmfq58CKc%2FYB1FbKH0kV4RMIQjeLfAhRVHeED0E0oeGMTYqvvZmn95y6M%2FgwHhaIlZnqNqJf9Em6lcESnOidKLo30fVqnOuswiYiZxAY6pgGTjjDKgcmLiSv%2F9XTtYTKvZA5EHVJWRZHSLsnhOuYfruFuiA2phUjoUZKpGMRbLq3o%2BTLXnN0L928YG0%2BDA0C1Rx1JNlKjD%2FqhbjZDUZfDK%2B0KhOeAMhyCwabIQ0rvvleJnF06KmY19K1J8EFlF2GPyCcfgj%2F0L%2Fd%2B1VgTCuQtz95ZbGDs1s2WCq9zgy8DouuybXUT%2BhLWdS6P35gzqwDUxyXosbLp&X-Amz-Signature=aa61fc5ae65b4231d506f103f62d815f2c0ec5f9e9b934f571b684f6af052c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAIL5RT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDL5SDQdWzTlRbVSrM4c3TLs6pYlCO%2BVUGVefExL9v6%2FAiBWcEublDJNJhquWmFADEoSj0HPX3UMBVAurefEKVlpFir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMQ9uD9yOKoZmfI3DYKtwDBGw%2FbuwbUCtrs7J%2FJLXE%2BBaRL7EMQU4D3hZEUuiVXd41T%2BjiX8MSy2%2FxpS%2FGE%2FvJMCJAWNLc3tAe%2BQL2Dz%2F4e%2B%2FyGENKkIDjbBkB1GDfA46d%2FuiBCCbOTW0fR3FVHYyitEas6GkVtYAOoz9UMadyFBW4cvFMKCn3QVuiitXuiBw8AItto%2FlTyVDklayMIlzevjvPbYnLnli%2BNSgPtCoCJTZNCWZEDTIVOv8%2BLjl22G%2Bwvunu%2Fmb4lDrBXpgLEFGfv8U7vvZQMdeSR988Fcjih2L2b%2FWzeQS%2F7Pob6ZNYZCDpA7%2FvKuHpWyZmNaDBa3Ekmv%2B%2Fw567tNzH6dutnMB4AsFDW5pHruZnIsqj3lO9yZNhRXujBi7jyqS7fENSQCEx6VYblMVe1PYYbCjQqEpVJoN%2FUn5CUuWo%2BI8wQ1iLp8lfIJb77%2BHHDkCPirxJcAq1uQ%2FpF%2FgJwJa85r23k8p4Otku%2Baydcg0QPlDCsRwt26leuWSbM2MWhPNKhZwnBgiThDgRMcKp7zHNAFMw%2FCH%2BMJr0RV4eEzKXIXQcEIvezlgegCZS5V0chd%2BwF7cqwsyS%2BUR9VHBe0Z7Z0SL7YtMTAvu%2F7vceLlRHpYubBm%2FfpGm1I9uLdahB5zSwM%2BwwyICZxAY6pgHZpLjpbFn%2BuScQsIud%2F%2Fxz%2B6YbwbXzAP%2BNbRglNHm%2FxFvV8PBRdfauhL3wg66Y1nuOF7ZZ2ns319S4pURVPou5ZCLfCS%2Fjw0JZR70o12AxGM759iQbQ%2FK9YHjJFoLQ0ofjcHWwh7xeoBesfobL96imLiL8LOMgKduvAkh08682qmOIKOYzqufNo7Iz%2BwgHpMR2VXYb%2FcxhFNDJSpF8JgHG5YkBpE5C&X-Amz-Signature=4104b498dbb2f20768076b608c33dc065cd4b8999bbe50b40572bbe07b3549f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXZFGIDM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBBJJ2qN6NfCsC%2F13TmOaZT%2FccwIjk%2BpgT%2FUQq1nAQnDAiEA7ZK4qOZ%2B2k3F78FxKL6E1H%2BB59e%2BFKy1oNkMRPnV2Fgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBIqaREg60TnFrfDPSrcA8ySmrPgXrbpmK6cRqhyPZOEBCgT79oGakAow9eCjRCC8KkMtar0N8VjJyoJGmblNNMC%2F1ijvjnJOoCuF6jyLZt32V1ZNrz5EXdRcCdPiMO411nU4z1rAVP3wgTfdeoedtJ03CBbm12KAnU2bRUqL%2FgRuJa8xFjkvM4woLFkL2D6sLfnHkltDBYSIRd%2FSuMUuyIMAuzBq6vlTdKpnfMoTdQYNz6F5Lx5qohc1QO9gmxxKR2tOr4J9ftv7k85JKoyQH0uv9dVljOVAcxskx%2BKBOmzk7UfQVRqz4KTcPhXVdl8GGrnL8GBXlzXYNfvv35XhFzc4AHlrgPhCAOZBpy2Tog5QVDuT9ikBva0EHlYUXeNvG7OkUa8mtWnO3wRytwQ7b8NXiY6GazuXkjLWyuFsqC%2B6S%2BBwte2OE0i2X9gjKb4ky6NM8KIXlZcSkwyx05KyVYtnOYkxsDrEA4i6dfO64UaJyttrpEgBahXgyzkHYwoMjY9%2FZ3q%2FrY2kCZIyIoKwxDQ%2FdYmC%2F29A7BONn7Oco1yY8j2T6VIl9MBBvBg6FLLYKXxthudPXRaI7%2B8XgwBpfF6OX8Zg%2FnvFLZX31XRGiLZXnbQKW2xcqg%2BIjpAck8ZO5OShiMUnthnojrIMIv%2FmMQGOqUBk2nBvNnzjdZGnSCS34dIVDGl6TT5VjQQdzPzuw7svgDhDnoHybrnu1BABhhWUYcURUbUyf%2FdDWvNJIX9gCNelAcS%2FoVtQi9z3VtPAdiuiXJ5mJfu1FDx9ACNtu6T9d4e8FH6rWWnKtHAvrx7I8pwr7cRgnJJx0FMBA3nf8heJFpZW3J7B%2BkTiopBRETuXOXfL%2Bj1pcQ8nYUURVTC9hYVSMD7LBTi&X-Amz-Signature=15cce6b3cd86a0059f7f2d2a755f11d3f8cb448b93cbe8a38d278334aa08e61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
