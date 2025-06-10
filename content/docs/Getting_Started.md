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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OFULTSS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeg1ODyR3LfFFTPXkAXVSFB65EcBz612G4iJCAAibhhAiEAwzMS%2FZ%2FbzkaEmQxFXcVE60bxxxpL6QTqoYFYdCAysEQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFdECwvt0XRCioUGircAxOFV%2F%2Fq96rAaFlQ7jGs8KlVM4cfXLaAAX%2B%2FvPdRq4oWdfmd%2F2UZMTHTeHszXAJ2LdaWmTtL3sUk4YPswROslQiNx9L4MOCdfrSGBbLbKfEVptFtudFVOc%2F8iH30JuDFE8PE1f%2Bj6zN%2FUZYrby7lg8%2BTMSjaAfzE%2FaIguvYtBB6ENfr0aU1femQ7VZ1exkqHZvOnkz1Hm5I86p9M8Uf65x5aFOyN5aPxbJutBO18KKCHpWyN4k6aRW8%2BFDr1L%2BzEbSYdpOdyVaYygrHfGEmxc4AngakbowUpdNNFoqgdk6xH%2Fk8HZwCfxiwq8ln6xX9S5W7K6iIYgHDFeYjUp4z4Ba4RBrySCBMdHWvyUw%2B8tVm6pgSTWQCfE45k%2FkAALlPuwIqUui6%2FP6pG6jgk4QlB9ZIRIXLa5WxQsUD%2FpDvIa3%2BXxcwWA8h0m0Gg%2F53TNPVdf15kPPRP64ta6FEAZkXcjrs0sV7oWYUJQyN5WvLVdEaT9EsjYxphp6V5huKOT4UNeC46UWEhCQ2WqbUyIv0LbD%2FnLhK57XO%2FZkVq36plhxdBKhFK5aYrGM8Gvn1RPceRpiOoZN5bXjZo7A46kHYq6TYM5VVLDDUb2gPtq2nulbHjxv68MPGz0ed3EkHMMMGHn8IGOqUB38prltFJ%2FI4xRcV3RuKJ5zPoIlcRhAcC4UVnihL0iSeEEVdB7kLqwVR8c1Y2MEqC6DkC7J5aMbgRO4gnNTy8PeslGkj%2FKnAR39peCgAfGR%2F6bpf%2FCYh8ni81D90aR1a0DWNF1DqZ1uK3ZtfR5rZq08TFHv9iN1pzhW1Ftpj8mP2bYKTsSOWdEe6FH1ITj28HyLC3mkpAvp0Nw9OfEHHEPey7uYXl&X-Amz-Signature=30a0addd175c67a5dc69c41e99ba2d756a302608ccb16ee190379f9aac89eaeb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OFULTSS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeg1ODyR3LfFFTPXkAXVSFB65EcBz612G4iJCAAibhhAiEAwzMS%2FZ%2FbzkaEmQxFXcVE60bxxxpL6QTqoYFYdCAysEQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFdECwvt0XRCioUGircAxOFV%2F%2Fq96rAaFlQ7jGs8KlVM4cfXLaAAX%2B%2FvPdRq4oWdfmd%2F2UZMTHTeHszXAJ2LdaWmTtL3sUk4YPswROslQiNx9L4MOCdfrSGBbLbKfEVptFtudFVOc%2F8iH30JuDFE8PE1f%2Bj6zN%2FUZYrby7lg8%2BTMSjaAfzE%2FaIguvYtBB6ENfr0aU1femQ7VZ1exkqHZvOnkz1Hm5I86p9M8Uf65x5aFOyN5aPxbJutBO18KKCHpWyN4k6aRW8%2BFDr1L%2BzEbSYdpOdyVaYygrHfGEmxc4AngakbowUpdNNFoqgdk6xH%2Fk8HZwCfxiwq8ln6xX9S5W7K6iIYgHDFeYjUp4z4Ba4RBrySCBMdHWvyUw%2B8tVm6pgSTWQCfE45k%2FkAALlPuwIqUui6%2FP6pG6jgk4QlB9ZIRIXLa5WxQsUD%2FpDvIa3%2BXxcwWA8h0m0Gg%2F53TNPVdf15kPPRP64ta6FEAZkXcjrs0sV7oWYUJQyN5WvLVdEaT9EsjYxphp6V5huKOT4UNeC46UWEhCQ2WqbUyIv0LbD%2FnLhK57XO%2FZkVq36plhxdBKhFK5aYrGM8Gvn1RPceRpiOoZN5bXjZo7A46kHYq6TYM5VVLDDUb2gPtq2nulbHjxv68MPGz0ed3EkHMMMGHn8IGOqUB38prltFJ%2FI4xRcV3RuKJ5zPoIlcRhAcC4UVnihL0iSeEEVdB7kLqwVR8c1Y2MEqC6DkC7J5aMbgRO4gnNTy8PeslGkj%2FKnAR39peCgAfGR%2F6bpf%2FCYh8ni81D90aR1a0DWNF1DqZ1uK3ZtfR5rZq08TFHv9iN1pzhW1Ftpj8mP2bYKTsSOWdEe6FH1ITj28HyLC3mkpAvp0Nw9OfEHHEPey7uYXl&X-Amz-Signature=0b3c4b6e859c4be892af7cbfc9a6dd96ce9fb731059406fa695700ad085c0773&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OFULTSS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeg1ODyR3LfFFTPXkAXVSFB65EcBz612G4iJCAAibhhAiEAwzMS%2FZ%2FbzkaEmQxFXcVE60bxxxpL6QTqoYFYdCAysEQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFdECwvt0XRCioUGircAxOFV%2F%2Fq96rAaFlQ7jGs8KlVM4cfXLaAAX%2B%2FvPdRq4oWdfmd%2F2UZMTHTeHszXAJ2LdaWmTtL3sUk4YPswROslQiNx9L4MOCdfrSGBbLbKfEVptFtudFVOc%2F8iH30JuDFE8PE1f%2Bj6zN%2FUZYrby7lg8%2BTMSjaAfzE%2FaIguvYtBB6ENfr0aU1femQ7VZ1exkqHZvOnkz1Hm5I86p9M8Uf65x5aFOyN5aPxbJutBO18KKCHpWyN4k6aRW8%2BFDr1L%2BzEbSYdpOdyVaYygrHfGEmxc4AngakbowUpdNNFoqgdk6xH%2Fk8HZwCfxiwq8ln6xX9S5W7K6iIYgHDFeYjUp4z4Ba4RBrySCBMdHWvyUw%2B8tVm6pgSTWQCfE45k%2FkAALlPuwIqUui6%2FP6pG6jgk4QlB9ZIRIXLa5WxQsUD%2FpDvIa3%2BXxcwWA8h0m0Gg%2F53TNPVdf15kPPRP64ta6FEAZkXcjrs0sV7oWYUJQyN5WvLVdEaT9EsjYxphp6V5huKOT4UNeC46UWEhCQ2WqbUyIv0LbD%2FnLhK57XO%2FZkVq36plhxdBKhFK5aYrGM8Gvn1RPceRpiOoZN5bXjZo7A46kHYq6TYM5VVLDDUb2gPtq2nulbHjxv68MPGz0ed3EkHMMMGHn8IGOqUB38prltFJ%2FI4xRcV3RuKJ5zPoIlcRhAcC4UVnihL0iSeEEVdB7kLqwVR8c1Y2MEqC6DkC7J5aMbgRO4gnNTy8PeslGkj%2FKnAR39peCgAfGR%2F6bpf%2FCYh8ni81D90aR1a0DWNF1DqZ1uK3ZtfR5rZq08TFHv9iN1pzhW1Ftpj8mP2bYKTsSOWdEe6FH1ITj28HyLC3mkpAvp0Nw9OfEHHEPey7uYXl&X-Amz-Signature=c906a33f8254ce1c08f9eea6129a0aaf3a5354ee8df13506f0ed3c5f6ef72f27&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UYTUN3N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZx6huBk2DxwhkNFZA3gmzhpmis5Fk3QtNJ%2Fxxa%2B%2BocAIhAN03lZSL8c%2BrMVGJRqcAm4Fv6ewOORMmx5bQOIuqiVysKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG%2B7AtNnSUJg6e%2B7oq3ANg1QlfJJyWLMNyf1Yvx3ziBNoHoTQKJlGazATr3%2Ban9Vs%2B8fNRZygBBwEr0CRcHWVaWGNHmlzc%2Fr4pAHeNHGkmyRz6tqleRGkT0AtekN4v1yIH06dLRlhpg48yTptUrHipU7%2FT5k2L%2BlSu1qXEm9kUJ402x7a2zXjlpEvVahnAvxMODfoMA8iwR4dATHqbfkwKZiMzmlIuLKNWCFo9ZPRm15JB8mDRric%2BJk6V1gWQ674x2ho95vTgNJHNVkZ74FTmzS%2BIR34UQW%2Bki0hRYyjATjF2oLBaXHGpNufqj3J%2BNPHJrw77E2%2BRII749xEpzo%2FPPbTbIxAspSMQoCmOsSowvHqw5crOez6g5pAoPogw46X7tEodG0T2%2Bg%2FuwGuXd1bworsML%2B02QLBI2xmf8i6oLmF4giDyUwdkkJRa3FXSiT5UTlcCFFZoL15hhpbWmcBoPFS0jLgHc42oUEfKJntAC6EcNoB3poBpWM95Gms3A6bZkD13rRcdMRkmEwGWTfk0UDiXTEFkaGFM07AopVE85l0Amzdqr22%2FQYmX5vu58qx2IF3Dbcbx3cH4CwvgzUIKsQ6X%2Fy9UUoEa9pUYRf8M6%2BrnKe64w3cdM6jTxiAm7hG%2F10XCKdsqcU3yUjCkiJ%2FCBjqkAV7xXUQAtEFJFIvcF2qP060eOpVLnEncEISSKyP9Q6bE6y1ttt2lWUG4zHmoDqOaHcjhM2XOqvT06cxjp1MXnvJFJu%2B5VDzJeFkzpVrYB5mCBGWEUP%2BuET7OaxtnhgxOxPw22Uuv17cObBYF1rl1fWwX2j%2BN3EpbgjwhpM8Pf6aZX0TvMo4alvm4tDI1YXti6knE7rcTGywR0Ewx7HOzYMQ9LsDc&X-Amz-Signature=e5249ba38961081f59349e124547850465ab3968624b78442f5237a21911b3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DBZ6N7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG51EKSjd9TqbdQcReDguRnTY0nS50c5pU5zqPLHrfBmAiEAq30eqUJNTnVIqVreAgMWiCn2S5RtBOAKON0BDh3AxRUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzRRgPtIeMH0%2BHZdircA2h4MJVjBGExX7X6sAgvoFppLrtrml7DGYDIUz9M03r9R3j2zVTTP52sihumQ9mTOp0BGp7E1bd7CHsXrVhXCNkfdmcTgd4%2FR7jHD8aOLsb%2FuNLOq8DBpeZVUjnqqjKwE%2BmJkzU2y1kr8UZ97ysn8f0KAeoJaqRzmV4eQyimTRVofbAJHRI0Nn2A6lhfUtIN9A0722IFk3cCfADo7XKXM4tD36POQH%2FO51kzqqJsCybuOlLfKSO97iAvi97iWy8yowe3Ac2UIN%2FQX0emmP2vugEJDiPjjJMVzgFj0qNKYETd7JjhV1IihLv7MEEJulec99e9HNs84SWOD7wTqdbhAF6sD6M8ZOY7LmOEXt71eM1fphqm0kG8vvK4d%2FLxdISGrvxFdN3XlAsZMm%2B9Zqpq%2BWK%2BE4RSMkS3yQzOs6jq%2BtuYFwO7pROVpWN68pIvS305wtXu5Nk8K2JDWLpQkpNyiUhnGTpvp02lBYryFyVZsyLmft4%2FesOLeD1CGqGq7yW2xtcqkNdmfTCJWUeAZNtKsi2AvfqWWd6s40x%2FdDZlmq%2Bci791f%2F5fKVj61rkKcJLmkVgtZC81tkH6n5nWMTDxPJKsBh9lf4LnbfglABxgpt3IThYQdlQDC1DIK2EXMKKIn8IGOqUBP0y2q%2B1x6H5uj%2BWorXZLz4wVRkLVy29b077iX0Um1h4a9b%2FazmbELnhXmQTxJUfz2pK8K5q0qwyCvE8kmErSIpNTDlmJ2bi25UWx6Eu0JPT6lQVri2EpdmAqxpFAe3r9JyXOpKlaJZJnFfS%2BRUh5eSDsTGxYBRxYhchSsSs3JDBG82kJlreSFmnjJKPSzAXqeuskhY5QIe5TWonyaeg3pWBrN4Jy&X-Amz-Signature=eb621e945a62b45c14d5855310067ff50ce1566182f2a525b78b0b01bd5a1e36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OFULTSS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeg1ODyR3LfFFTPXkAXVSFB65EcBz612G4iJCAAibhhAiEAwzMS%2FZ%2FbzkaEmQxFXcVE60bxxxpL6QTqoYFYdCAysEQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFdECwvt0XRCioUGircAxOFV%2F%2Fq96rAaFlQ7jGs8KlVM4cfXLaAAX%2B%2FvPdRq4oWdfmd%2F2UZMTHTeHszXAJ2LdaWmTtL3sUk4YPswROslQiNx9L4MOCdfrSGBbLbKfEVptFtudFVOc%2F8iH30JuDFE8PE1f%2Bj6zN%2FUZYrby7lg8%2BTMSjaAfzE%2FaIguvYtBB6ENfr0aU1femQ7VZ1exkqHZvOnkz1Hm5I86p9M8Uf65x5aFOyN5aPxbJutBO18KKCHpWyN4k6aRW8%2BFDr1L%2BzEbSYdpOdyVaYygrHfGEmxc4AngakbowUpdNNFoqgdk6xH%2Fk8HZwCfxiwq8ln6xX9S5W7K6iIYgHDFeYjUp4z4Ba4RBrySCBMdHWvyUw%2B8tVm6pgSTWQCfE45k%2FkAALlPuwIqUui6%2FP6pG6jgk4QlB9ZIRIXLa5WxQsUD%2FpDvIa3%2BXxcwWA8h0m0Gg%2F53TNPVdf15kPPRP64ta6FEAZkXcjrs0sV7oWYUJQyN5WvLVdEaT9EsjYxphp6V5huKOT4UNeC46UWEhCQ2WqbUyIv0LbD%2FnLhK57XO%2FZkVq36plhxdBKhFK5aYrGM8Gvn1RPceRpiOoZN5bXjZo7A46kHYq6TYM5VVLDDUb2gPtq2nulbHjxv68MPGz0ed3EkHMMMGHn8IGOqUB38prltFJ%2FI4xRcV3RuKJ5zPoIlcRhAcC4UVnihL0iSeEEVdB7kLqwVR8c1Y2MEqC6DkC7J5aMbgRO4gnNTy8PeslGkj%2FKnAR39peCgAfGR%2F6bpf%2FCYh8ni81D90aR1a0DWNF1DqZ1uK3ZtfR5rZq08TFHv9iN1pzhW1Ftpj8mP2bYKTsSOWdEe6FH1ITj28HyLC3mkpAvp0Nw9OfEHHEPey7uYXl&X-Amz-Signature=840406684846be29286375fbe9637c4159648657e9279b7ba2900afb27073413&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
