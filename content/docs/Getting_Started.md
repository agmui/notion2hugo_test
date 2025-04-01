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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSUS7ZSA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFPB%2FeqgAB9E6aJN%2Brk3KVVEBaBo%2BFp6S%2BKk9GiBrsi6AiBX%2Bglcre7PNUh2S2uq83U1m1wuqnyDBaumwA6m1p358SqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eJQq3qFt6JGFSyUKtwDmceWKD7KU9w1h0vT5k%2FW0GwmQna89ZwNEEYzykBu%2FttkQImV01SqpaXSw8M1vXL9Ze%2FJbNHtlXO39CQod4fO7%2BdypohuowXoMYx6G9uq%2FhSE4fCUoGZM3bFZunb1V0L2vj%2BidQZxHR6xR2giUnTDOt%2BoPtxhqvNadIEzSgn4alYzqQzIWwRnxPYR799G67H%2B1wWX7LxW3EVulv6CF8CYXjuNMVW5RTXXtbxXVPF1HMiaU6d%2FmpUTfdOId7tyjA7k2HoKO19%2Fhzk64qAjwm0MA8j5hpUt00kkMzpBYq2NdbFKfd8qdwj1z%2BsG2Q9OG4i%2BD6PSbMxeTGnfXWXiuPTXPqVwMnU%2Bc%2Fk%2FO921l0%2BzRbEHfptfk7i95nvbydlXGFk2P7EYc%2BQMvUwMJtwuwStRaCuH1a2V2g7NVmpnCXcLzlH1PugLJDgSxnUn4r0sO4SifGPhYWRrm1GDdWu55DGy%2FE9FUgpnh4LKCRh1GfR5PP9KscyQ%2BROJeFIKcs%2F4tYY2wIh5DXgtjCoFazrzJ8%2Fho1Y4K0wVcG8dCjH54n7k1nIg6d%2B2N6ZNRCnKBZYZkmEv6F8Fv8VM%2BOcnfRpvpr%2BrHOU8%2FdH5%2B%2Fy37Wnxzwc7xBzNLoznqGCTxnHGkYkw6eyvvwY6pgFrg6CTIHcY5KAig7Om5ZAFnqM7YUquIV5Lrv%2Brd2v3qOtYKGJrNw7LQAGXw8NsvDe6qvpl3jIBoxjo9n8LHM065RdMgiWrLYStcC4lzdNmCCis%2BbAVxqFO07S9TkpH0CCG5NtfCEhgBqLbEAOGphaoPKESAhsRhQKyT%2F2KgsOIQDspqDwcetT8sjkZera8XdyiVxEip6Rv%2BO7NOJXANJxl6ATozmtT&X-Amz-Signature=4ec85d359fde7910546a54baca1751f74dd2e2999538623fccae2765ae63b309&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSUS7ZSA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFPB%2FeqgAB9E6aJN%2Brk3KVVEBaBo%2BFp6S%2BKk9GiBrsi6AiBX%2Bglcre7PNUh2S2uq83U1m1wuqnyDBaumwA6m1p358SqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eJQq3qFt6JGFSyUKtwDmceWKD7KU9w1h0vT5k%2FW0GwmQna89ZwNEEYzykBu%2FttkQImV01SqpaXSw8M1vXL9Ze%2FJbNHtlXO39CQod4fO7%2BdypohuowXoMYx6G9uq%2FhSE4fCUoGZM3bFZunb1V0L2vj%2BidQZxHR6xR2giUnTDOt%2BoPtxhqvNadIEzSgn4alYzqQzIWwRnxPYR799G67H%2B1wWX7LxW3EVulv6CF8CYXjuNMVW5RTXXtbxXVPF1HMiaU6d%2FmpUTfdOId7tyjA7k2HoKO19%2Fhzk64qAjwm0MA8j5hpUt00kkMzpBYq2NdbFKfd8qdwj1z%2BsG2Q9OG4i%2BD6PSbMxeTGnfXWXiuPTXPqVwMnU%2Bc%2Fk%2FO921l0%2BzRbEHfptfk7i95nvbydlXGFk2P7EYc%2BQMvUwMJtwuwStRaCuH1a2V2g7NVmpnCXcLzlH1PugLJDgSxnUn4r0sO4SifGPhYWRrm1GDdWu55DGy%2FE9FUgpnh4LKCRh1GfR5PP9KscyQ%2BROJeFIKcs%2F4tYY2wIh5DXgtjCoFazrzJ8%2Fho1Y4K0wVcG8dCjH54n7k1nIg6d%2B2N6ZNRCnKBZYZkmEv6F8Fv8VM%2BOcnfRpvpr%2BrHOU8%2FdH5%2B%2Fy37Wnxzwc7xBzNLoznqGCTxnHGkYkw6eyvvwY6pgFrg6CTIHcY5KAig7Om5ZAFnqM7YUquIV5Lrv%2Brd2v3qOtYKGJrNw7LQAGXw8NsvDe6qvpl3jIBoxjo9n8LHM065RdMgiWrLYStcC4lzdNmCCis%2BbAVxqFO07S9TkpH0CCG5NtfCEhgBqLbEAOGphaoPKESAhsRhQKyT%2F2KgsOIQDspqDwcetT8sjkZera8XdyiVxEip6Rv%2BO7NOJXANJxl6ATozmtT&X-Amz-Signature=da70233be7e4778065438a39165d0bbb4e36d722136e1c81693c982429759f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUYUNEOD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIA5OH6alz9ewVPNyD%2FVDmiWFVPUFewdDdwjbpX8IjWgPAiBdCmVlr8CyoBmRw9UQl4iwoTILRqfT7kfPgw4D6J%2BOhCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVUraMKbNpddas6XKtwDX%2FDVmF5r4QbExHm149zjDK9%2F8L6a3IUu8idPF38LHQqzCcxqwJFlhpco8vH3jjjf4hMoo7Bw9SETayVec4P2NVS%2FBmDhTztwTxD1Ic2Dgb4Ry4DiPR13SYppwSkgSisvuwnro%2FlDPLPk%2BETzmRy%2B%2BsQKDheqVk5lO4SwFllbFRlQQV7OM0R54BXWCkzEGMA0Na1knAURRNqQDpVb%2BBy9G%2Fc4tpBPWu%2Fyl6DEOpoA8%2F6ee2ieXZQYvelxhZqbsSW8Yy8QlIWN1zIKHcbl7SoMDdJApOwupZEDfD2f%2Fi38jPQcBhKe2yCiyvQPUjnrSk6J33fgEQWGdpXQThWSIJO5cN5s0%2BaSjeuKgkSddk9phgQfhzU%2FOvD2YXDRaqNx%2F3oOMUtWyORsIPonmIT0238NrLVXN1wPoYrUd4IHJ1agY11EmtA4euTke264LTEBBtQd6PVm8%2Fq0dp3oWob7Y1yARh8dsfZWBbS816dNOC4bZST6PGC9B%2BBjwbyIfoenQiOZmwD%2F5Ag1x43%2Be0eVCL713MCyy43B3u87panXIb8meKh1YoGXDk07aaPX5%2BS8vJsWUWvhld%2B8RtRNI%2FQdH6OssVcdnUDUPE2avmdOzjgy5KCfg4zeeKixeOvptq8w1OyvvwY6pgET2lSTFMI2O62rOum%2BZNxnJLP4yJY18Nho4HlfOY8M%2BIMwwLSN%2BrohFmsK2w2omsPGG%2B36iJDx6U2dFhNnxgqR3QWbnWMLhJlP1hbKWjdd0R%2FrCoyrb7d7Px2KUy8pYybiPJ9zFwq4jRM3FijLExKvxKqYvVjLwGjAEbS6TtNGbpTkn5bLJWbfK%2BZMnxd04vzLRFAs3dzXsGxp%2B%2Fv5MUP87L9xd%2Fp0&X-Amz-Signature=22c8da11da34df73ca9bd8f405c53a0b0e4f977bde9258aeb7aef7ff89096cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUS4STH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC8vvYhIZRZiNYCf%2BOZ9tPa9N0C5BswzU%2FbFghG5HcWMwIhAM6bSF8Xlo1MEJIPGmB4FqK0Ax3xoBL1VPYsTr2YzlyeKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUp94V%2Fb5WSpGXRZoq3ANLIdgvmQ3nN5MbhJAFotdLnhl05tXzJdo4ByQUyCK8OqZ89nr0M1ANq%2B6c%2F2ceyiy8q1v49XEmAz4RZnJgkMQVFrWtqXYliZHLMGMkqgRnc3p2VWAxFCVSegs0l0nzkX3MAjJOafYPAywlYGT79LVnHCZy%2Biy1sHCdHzGLfAzx%2FZGTB7CgnhelJy9yd6XnfeV7mpCn62R0d5qip29vKBnHriO2kKz5lYCWtGYDnKrS%2BAvHexBGZrn1CjtgnkGcZk7%2FsISD4YmSw8UriJfWum4KBDGfMjM90O8%2FfVVbu9Xjv4plWupn%2BS69PXl2ZK5Lf3P9T6J2%2FhUdv3nEAtff02ykE6fpDk6alTC%2F9JWQsWVhTyQd1j1Vow3gJ2ucEy%2FEfjpjHFMA8ddoCglAmS3ARYkv53fVrpgIgcF0AYPVI1pVvkTYVAmT%2BnFfuo4H3EkVn8U108u2enH69mdOPgBbv7JKYdYGmdGNXCsl4iyDZjHe%2F66e%2Fy6XDNESUbCpQCx9%2F2xJeqUiHhwvJjl%2FSidtwyXyJ7e0rl60UgIWahM1QIDnYXeMhyd9xkVsm6kvL5mc37V%2B3OhIncvucuVLZnOW9NgSQNwIWY4BUVhPzNn%2Fn8BbPJk3g1%2BNt1ew%2BhuVpzCf7K%2B%2FBjqkAXRiguc%2Fzv9s10dLwByij7CAOiPhgZTh8WD2QoN8U4t9d39v9uQha5Sgxv6i65s3YLwFG5XW0Wz9oYH2JHSosRN85Tm5x4dpD1jVj05ge8vV8v%2Fydc59urO8PIqbK5WukUdBrhINL%2FaSw%2FIeBqS6JzZxyo1I0rBBB8tHNQYsiegx2xZxgpBpyBtdPHvnmfyCWSOT3xw8bn%2FaJoOHMQBMVgeXll6J&X-Amz-Signature=99cb97589c3cd295effa8eedbc97abbe06b218883b7a61039b21649d7800159f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSUS7ZSA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFPB%2FeqgAB9E6aJN%2Brk3KVVEBaBo%2BFp6S%2BKk9GiBrsi6AiBX%2Bglcre7PNUh2S2uq83U1m1wuqnyDBaumwA6m1p358SqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eJQq3qFt6JGFSyUKtwDmceWKD7KU9w1h0vT5k%2FW0GwmQna89ZwNEEYzykBu%2FttkQImV01SqpaXSw8M1vXL9Ze%2FJbNHtlXO39CQod4fO7%2BdypohuowXoMYx6G9uq%2FhSE4fCUoGZM3bFZunb1V0L2vj%2BidQZxHR6xR2giUnTDOt%2BoPtxhqvNadIEzSgn4alYzqQzIWwRnxPYR799G67H%2B1wWX7LxW3EVulv6CF8CYXjuNMVW5RTXXtbxXVPF1HMiaU6d%2FmpUTfdOId7tyjA7k2HoKO19%2Fhzk64qAjwm0MA8j5hpUt00kkMzpBYq2NdbFKfd8qdwj1z%2BsG2Q9OG4i%2BD6PSbMxeTGnfXWXiuPTXPqVwMnU%2Bc%2Fk%2FO921l0%2BzRbEHfptfk7i95nvbydlXGFk2P7EYc%2BQMvUwMJtwuwStRaCuH1a2V2g7NVmpnCXcLzlH1PugLJDgSxnUn4r0sO4SifGPhYWRrm1GDdWu55DGy%2FE9FUgpnh4LKCRh1GfR5PP9KscyQ%2BROJeFIKcs%2F4tYY2wIh5DXgtjCoFazrzJ8%2Fho1Y4K0wVcG8dCjH54n7k1nIg6d%2B2N6ZNRCnKBZYZkmEv6F8Fv8VM%2BOcnfRpvpr%2BrHOU8%2FdH5%2B%2Fy37Wnxzwc7xBzNLoznqGCTxnHGkYkw6eyvvwY6pgFrg6CTIHcY5KAig7Om5ZAFnqM7YUquIV5Lrv%2Brd2v3qOtYKGJrNw7LQAGXw8NsvDe6qvpl3jIBoxjo9n8LHM065RdMgiWrLYStcC4lzdNmCCis%2BbAVxqFO07S9TkpH0CCG5NtfCEhgBqLbEAOGphaoPKESAhsRhQKyT%2F2KgsOIQDspqDwcetT8sjkZera8XdyiVxEip6Rv%2BO7NOJXANJxl6ATozmtT&X-Amz-Signature=443f5461985308dd59cb2e06b29b3258a6e6fed6b6cfa21ce8e71cfa099a473a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
