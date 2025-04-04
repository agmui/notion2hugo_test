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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQ3XNKS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPjaOeUyWB6kfwYmpjuaPC%2B2WiUP6q%2B%2FINkUB1rd19IAiBuP%2Fbq%2F1CicNftY7QSC1u3KKFIZn7YaLjFMHSVr9T6ECqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMni1R6R1qys%2BBFPLTKtwDxwtyvJJYNGJfMN648kHz2nW8v4eYV38BF%2F397j3Lzy3boX2y%2B8qm0b8ROq13h7omSp6X0Pha0O91f8GwAOSlzQ3TPzsJeDyrqL0uDAE%2BYUEI5pInwGUpcWhWUbbS3lqAtPEv5sqOEwYMabHR2v38uq9Xlfg%2BISUjEqaYjPVDKyaspcju4vCYx1XYGvK6Ymdrv7E9VXa%2B3F5yvpypTDHWAH5dteQNmm1ygdvxtHH7i6Warm4M21ZXvs%2FOcs3jpiUJuNf1RYzReF4cXVHGOQ7grChpN6IJ9YKZFV2JpoJRjY1FCGvT2prYRd4Cespp7ZhhAQYlAoeaWjSrCeqRhFYjGlVBjQqOjVwq7RLkXroA9%2BfYAC1X%2Fuk7ufNoW82SCWPdzElMTmgz3sMwgVg8k5SiXibuZhuMBdW%2BxLZ%2BMd4eSFwjoa1itg%2BygXHKPhRMZjpT9SWokGFSiuj5n41hs0h%2FVsFVa9LjNXC24sjH6CRQCycjNmYeskNaQFpO3qfVejRYGIgq%2Bx2LdFYiN9oYiVYCVuBeuvih7wldXpDUm5aYwhc3MJh5N93bvNK47JcJa0sEVwQATiMcl22wrwG5JkcJl7FZS7JiT3KLClS3fXkyYH2ejus5Gqelw6uf5Jcw7Ku9vwY6pgEN96cfihipweTMEQ4Rt7xrQXxzE8NVi9J%2FK4XZSy6xjlJEy3TOWhKN94IKq58fVaZD59EPv5HVbQ0B7JVyf9Suses0rLJMmO0QqFRgavwui2J%2B5B0OP8BYE4VYTcDeGMLvZn15KjhrmdHFSWL53PZLEHFefAw0%2F9N35VXZe3VXl6ttO8%2FgSMcsqsSBub%2BSIFwuTHuKoM6MIQfYWZvNSaEeL0N8yO0S&X-Amz-Signature=90cfa8f49aa2b412c4365d76d74cc0789308de15f14ab156dbb9bb4c9bb74835&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQ3XNKS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPjaOeUyWB6kfwYmpjuaPC%2B2WiUP6q%2B%2FINkUB1rd19IAiBuP%2Fbq%2F1CicNftY7QSC1u3KKFIZn7YaLjFMHSVr9T6ECqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMni1R6R1qys%2BBFPLTKtwDxwtyvJJYNGJfMN648kHz2nW8v4eYV38BF%2F397j3Lzy3boX2y%2B8qm0b8ROq13h7omSp6X0Pha0O91f8GwAOSlzQ3TPzsJeDyrqL0uDAE%2BYUEI5pInwGUpcWhWUbbS3lqAtPEv5sqOEwYMabHR2v38uq9Xlfg%2BISUjEqaYjPVDKyaspcju4vCYx1XYGvK6Ymdrv7E9VXa%2B3F5yvpypTDHWAH5dteQNmm1ygdvxtHH7i6Warm4M21ZXvs%2FOcs3jpiUJuNf1RYzReF4cXVHGOQ7grChpN6IJ9YKZFV2JpoJRjY1FCGvT2prYRd4Cespp7ZhhAQYlAoeaWjSrCeqRhFYjGlVBjQqOjVwq7RLkXroA9%2BfYAC1X%2Fuk7ufNoW82SCWPdzElMTmgz3sMwgVg8k5SiXibuZhuMBdW%2BxLZ%2BMd4eSFwjoa1itg%2BygXHKPhRMZjpT9SWokGFSiuj5n41hs0h%2FVsFVa9LjNXC24sjH6CRQCycjNmYeskNaQFpO3qfVejRYGIgq%2Bx2LdFYiN9oYiVYCVuBeuvih7wldXpDUm5aYwhc3MJh5N93bvNK47JcJa0sEVwQATiMcl22wrwG5JkcJl7FZS7JiT3KLClS3fXkyYH2ejus5Gqelw6uf5Jcw7Ku9vwY6pgEN96cfihipweTMEQ4Rt7xrQXxzE8NVi9J%2FK4XZSy6xjlJEy3TOWhKN94IKq58fVaZD59EPv5HVbQ0B7JVyf9Suses0rLJMmO0QqFRgavwui2J%2B5B0OP8BYE4VYTcDeGMLvZn15KjhrmdHFSWL53PZLEHFefAw0%2F9N35VXZe3VXl6ttO8%2FgSMcsqsSBub%2BSIFwuTHuKoM6MIQfYWZvNSaEeL0N8yO0S&X-Amz-Signature=560633f4a45320eab2ea584a09cf79f5603dc5206f40d2fedb1b0d80e5c4ff51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PFOFN5L%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs8K28qeCcKhYCcsAokwsclPJBHT03G6hTfEAeCF33zQIhAICCuH3v%2BoB7Q23DHl5jwmP2u7SHKP%2BpvdJEH%2F2I%2FUFUKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7oidjeQ0lD1AAwioq3AMow%2BaB%2F%2Bqzvxmj3wENJSNOKdzL4im2pLQ%2BpIqNrM8uBOlW0jYs6oIGfqhX0mRpqOYpS1Hk5%2BiIlfZhRpc6O9YQ6YHHS4%2BVnUYFaJ7WQiwzOf%2FaYV1v1Nktl58mFaM07qDsFsyfZp6PeWK5USkJIV3JXG9LDyaAzP1tjD2xH5wMmT74x4Ay6G9VtYg%2BfYMPByKUAWv2r2%2FaNCppfm%2BE2kY%2BWucRsaP0E9DzhMmXgEoFx7u6NsxCNb87WDKVY01B6USIQDVf4EEN00L5MpgBav2INqPQo1uCYeM9K3anH8Vn7l8FC4%2Fk8tfFjsMkPWX%2FlAciTXheCgeg4%2FP9BPRLIqpDe4ow1Zp2UUYQSz%2BQwaio70gqbS4IuFhaVV9UFqBmT7TpuA0lpnM4yCTuArJ0xgN%2B9UynE8kazBA9OAZQ%2B4nGCiqInhof08sQvfzbohT6yU%2FsYzQrtKdQ1oQhp3myo8977a3vcIsW68fPAJgZBxPnA5D%2FiCeng4um06UjTCUXOw3wyhrDqZHRBBSdvuVlLe0dCbPmXE8AHcx6jS8S4DoW3BGek%2FgRZ%2F9ZN4VCDx4m%2FHxJA77GYmv8L6hf97i12T32NEam9%2BLi0sI5hN628iIIpPBcoN3vwXqDrRlSoDC0rL2%2FBjqkAVfxO51Olt832ujsVCJXyCNw0tZ%2B1dagCntzedA5OEze3ZqMFm11guUEHPs94FQzj4YrXaduN2FzUlw6ovLRI7z1iByMRBbv9YjjYMZSCbatpWNzFZOEwmVHKC6WujF%2BFDgfDDYnQMW1KriPhYScUx4F83OZ5gr5bJgWlKtToGOXVAQB359XbVvk6uRvWDgoe9CKPr2mOPj4vgA7581WMpS%2BTSBj&X-Amz-Signature=ebb857078a3d1d4d44f9709ff9e9e4bdea388cc66d669604f06134306591032a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJARLYX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYeH3LrNFPwcM5kXpexSQUhgaI8LunsdFJxIdZ%2FOaOKAiBTiV2%2FwRzbVub4%2BQ2%2FaajeWpMFgmttdwkY3c3Y3t0VEiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx5SrOgYxXCXJra0cKtwDjc5Q60IQzmrpFZm2W%2BsvWJz5W9Kz5zh5V9bJJVbq%2F8a%2BZRFcuLNrsy9pVYfnjm68wiOkT9EkVFzX8z1iIdAcGR2DmnkDHq%2BoxhsbGa2QMCBfJxqHqlItWQZc%2FFoiwNWU6fJmm4kseMvufGAcj2PnFqgH1bGnGFevjOn9mVUkdmfjFwNpQZuWYt9nXx52OSHAJgpwAVbJ9%2FZAEaF0NciDoEaXPPrWLSaDxAzuGl02VQ9a3m009TzBMksFbWVLC2GWaBZhceD12XltfC1nK560wR0RxpXhZgu5W7GBzQdmme%2BEX1zHwUzcU9YmoD%2B4CNW13%2BmtbtojzLo7QiYMXMl2CzoF5zYqYKELBJCSzWt%2FMWUXkxPb4M05WJ9Ud3YIhCgxjETYnc4kqrJyH7siAxiho4Gtxgzaxkn7m8lH2RMnbW%2BDTxCvN7wY3k0ZChoaxxSf3L8VS%2BjMzLdTY3AJ7k4iJvu3%2ByBXZS2HMGWNawRFoO%2B7pJZuXMXwp3Suesc1cxAxXYnepKfR2mos%2FK9Pt7kJS0DSmafGnvmbeXrzSKmSKHlDIhRYGPLYAe%2B%2Fb6X2nXjMbYXmrCavchlw%2BaP3sMGh2eMF5094gpCS4lZ2PE3VnkvfEGjSL%2FhON1v%2Bw5owyK29vwY6pgE0suqXCIzrQAKfvlwrhiU0elR%2Fwxk4tAwzfR0fGrtgEKpwoL1WXh%2FL6ht6rfDG9muEfe7QTrXmGMcknxM1ectip8REetEGZ9tln4X6PxG7zp%2FoQAZ0NnT%2BBtJ%2BNcHt8ZChiQIgO%2B6gJZd0Ho9e3G7ncUEKc%2FX9oCynrY7O902qqvPassgYVPfl4cT8v8%2FJ33JHBKAIax%2FAdEJMe7ugH%2BW8hDGy%2BnC7&X-Amz-Signature=ac7696ccec79c90f03752256d37df00963f3da60b6926f77334ae5f16d828606&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQ3XNKS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPjaOeUyWB6kfwYmpjuaPC%2B2WiUP6q%2B%2FINkUB1rd19IAiBuP%2Fbq%2F1CicNftY7QSC1u3KKFIZn7YaLjFMHSVr9T6ECqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMni1R6R1qys%2BBFPLTKtwDxwtyvJJYNGJfMN648kHz2nW8v4eYV38BF%2F397j3Lzy3boX2y%2B8qm0b8ROq13h7omSp6X0Pha0O91f8GwAOSlzQ3TPzsJeDyrqL0uDAE%2BYUEI5pInwGUpcWhWUbbS3lqAtPEv5sqOEwYMabHR2v38uq9Xlfg%2BISUjEqaYjPVDKyaspcju4vCYx1XYGvK6Ymdrv7E9VXa%2B3F5yvpypTDHWAH5dteQNmm1ygdvxtHH7i6Warm4M21ZXvs%2FOcs3jpiUJuNf1RYzReF4cXVHGOQ7grChpN6IJ9YKZFV2JpoJRjY1FCGvT2prYRd4Cespp7ZhhAQYlAoeaWjSrCeqRhFYjGlVBjQqOjVwq7RLkXroA9%2BfYAC1X%2Fuk7ufNoW82SCWPdzElMTmgz3sMwgVg8k5SiXibuZhuMBdW%2BxLZ%2BMd4eSFwjoa1itg%2BygXHKPhRMZjpT9SWokGFSiuj5n41hs0h%2FVsFVa9LjNXC24sjH6CRQCycjNmYeskNaQFpO3qfVejRYGIgq%2Bx2LdFYiN9oYiVYCVuBeuvih7wldXpDUm5aYwhc3MJh5N93bvNK47JcJa0sEVwQATiMcl22wrwG5JkcJl7FZS7JiT3KLClS3fXkyYH2ejus5Gqelw6uf5Jcw7Ku9vwY6pgEN96cfihipweTMEQ4Rt7xrQXxzE8NVi9J%2FK4XZSy6xjlJEy3TOWhKN94IKq58fVaZD59EPv5HVbQ0B7JVyf9Suses0rLJMmO0QqFRgavwui2J%2B5B0OP8BYE4VYTcDeGMLvZn15KjhrmdHFSWL53PZLEHFefAw0%2F9N35VXZe3VXl6ttO8%2FgSMcsqsSBub%2BSIFwuTHuKoM6MIQfYWZvNSaEeL0N8yO0S&X-Amz-Signature=f98416a789341a26d612cf6bba6eb6bcfb6141af6f278d5ad653ddb7615b716f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
