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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6UNXJV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJfehpx2r5maiCt2KZ7oYgtKY31OkUnlTiPAHD2icPuAiEA6pK3Olx2YC7KkgRJD1wXb26ISX4QdGMILY9I0uJmddoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGYQYDioSAaLVxbYtircA8I1Q%2BpMjP1zQ1MoD29G0gIx2eJBpfkjdxXUo75zUo090R%2BNE4k1lFcB6jpY79TnkbPidzBpOHZag3w1UkLrNbsnEBFYix%2B1NAMt2dVheOg0ZWEE%2Bd4drCdpqCtkLK96afNS5op32mYYXNP0zXhkmrqgQ8ThZttPqg7FfBFtcqIkwdluotXTnbl%2BAvgDsQSxiQ%2BRfGkt9OTlyM39RQJyWsmcJOnYKcY46ZewFVj039wZtUr8U1Sq7%2BCUY%2Bu%2BF0Zs5pgxv8Znbq2EFdtoL7VlDqezjMaNKGk2VKGl6Eft3PccMRFLMq7w9INf7wREH7Pgd4khZc92xO4Q%2BzWZ1kG2fE65Weu%2Fec41HpWIXAC4yPL0hNUOiBmg6rwGjyFJlKBgk3bNtR6aXYnwgx89NcPuRAm8JT1Ca3zAWbLjLq%2FD04qYpKqRrjLwhsMv3q3gFkx9U1O9to238i2F%2BOcPSiXyDSwlx6i6ktQr50eR4ScMDm9ZetKnMsx81plqIy1iAfWhaxFtkEWK%2FzV2P%2BFJZqjKLYNN7VdCkpSmMeWW6TU8sGAZ9yWHI%2BZYdQNKolFRv%2Bxbxu%2Bl69yBFhrs0MkTcbLF5vBjqX1ZQeQPFDmXS3Uq39OSRvqrzzjnNQB9tDibMLO4wL8GOqUBhGFXHP%2FIwU%2BEYSIKUYt9MOi3DgLXCz9d94bFdZj24vw3KZMl4mIn7bEL2ej611SxqKwiXdtAwoPeM3gS8Hyp3Hde91nHxVLbSYGlRxzcsXULDUTccMJvMtvcvTWiJHr%2BS9LeOdDp8ySEv7AosldRfAD%2Bltw85R9v2HCP0C38ltSU7jLYbAa2LyQnxiygZoN%2BXTK8frLDYKZD%2FP7UQPiL39%2Fk8ry%2F&X-Amz-Signature=83834455c14572982497f3c2238bbd3c807742249f6331fd9f8f333a23ea3513&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6UNXJV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJfehpx2r5maiCt2KZ7oYgtKY31OkUnlTiPAHD2icPuAiEA6pK3Olx2YC7KkgRJD1wXb26ISX4QdGMILY9I0uJmddoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGYQYDioSAaLVxbYtircA8I1Q%2BpMjP1zQ1MoD29G0gIx2eJBpfkjdxXUo75zUo090R%2BNE4k1lFcB6jpY79TnkbPidzBpOHZag3w1UkLrNbsnEBFYix%2B1NAMt2dVheOg0ZWEE%2Bd4drCdpqCtkLK96afNS5op32mYYXNP0zXhkmrqgQ8ThZttPqg7FfBFtcqIkwdluotXTnbl%2BAvgDsQSxiQ%2BRfGkt9OTlyM39RQJyWsmcJOnYKcY46ZewFVj039wZtUr8U1Sq7%2BCUY%2Bu%2BF0Zs5pgxv8Znbq2EFdtoL7VlDqezjMaNKGk2VKGl6Eft3PccMRFLMq7w9INf7wREH7Pgd4khZc92xO4Q%2BzWZ1kG2fE65Weu%2Fec41HpWIXAC4yPL0hNUOiBmg6rwGjyFJlKBgk3bNtR6aXYnwgx89NcPuRAm8JT1Ca3zAWbLjLq%2FD04qYpKqRrjLwhsMv3q3gFkx9U1O9to238i2F%2BOcPSiXyDSwlx6i6ktQr50eR4ScMDm9ZetKnMsx81plqIy1iAfWhaxFtkEWK%2FzV2P%2BFJZqjKLYNN7VdCkpSmMeWW6TU8sGAZ9yWHI%2BZYdQNKolFRv%2Bxbxu%2Bl69yBFhrs0MkTcbLF5vBjqX1ZQeQPFDmXS3Uq39OSRvqrzzjnNQB9tDibMLO4wL8GOqUBhGFXHP%2FIwU%2BEYSIKUYt9MOi3DgLXCz9d94bFdZj24vw3KZMl4mIn7bEL2ej611SxqKwiXdtAwoPeM3gS8Hyp3Hde91nHxVLbSYGlRxzcsXULDUTccMJvMtvcvTWiJHr%2BS9LeOdDp8ySEv7AosldRfAD%2Bltw85R9v2HCP0C38ltSU7jLYbAa2LyQnxiygZoN%2BXTK8frLDYKZD%2FP7UQPiL39%2Fk8ry%2F&X-Amz-Signature=ecb14f3456296fbdf43ee5eee248c41204df555056cd7c73f9550f217022539b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4P3V5R%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6zYDIy%2FOO7gZxbfasKTAt%2BW5Iz35Hr6C0MXpNI6Vv6wIgEonYo5fv0jhsZ%2BE7Gd0rIZs0vvFjqn06%2BfQzK34pME0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBPRhFZ%2BLQlh1LvzAircA7FHVmQS9pwE4R5u57HskixQEtzQf4cHAh7WRu3DEIuo%2FXkI3P%2Fb%2BmwziR43tKripP9kO95NS2cxkSNEiT2HfSNi2OXg%2FytQ5dlo7EFHm8dAXVTFCLSADpyq8PRmFA70uLMKMBUlWwYm01kKSSpt34oX5bpRNgYiSrgaWISSU0tcsYOILHezVB9IflMi1LSudhrf0iCaaWKMO3EJMpxD1fyF%2FNdmcS3FwYvAOuFfSkKVrrqBQKFW%2BH5WdBb3lOOnLEOaMqbY2sjf8Sor2ewLZuUVY0OzWR%2B3pihWRcPGuNtANiZmwV4ijvh8uHXBAc3B4D%2B0TrO4JAEyS%2BzOwRSecsWbS%2BVx%2FbsHnez7yCNB00SsVqABhuokrcqWEs1XhZC0NkZlIbAGjwCFWb6mUuHloCEh3uTV49Bv9rG61NnCy0vd0KEJukoSc9kR%2BH7HekkNE06lV6fut33xYlfIVN4zJsYh4HeFCZDJ8Q63Rkx77EjsBJZdX2DAhG97AQ%2FryZ8VjeDfNB7CUuta6fLojCcCYMdPjBRQJt6m0n3gbDdRGS5nWX%2Fce%2FVV8r5nJF%2FPd2EuziPh6zuZjRiqIHEn%2BocEcUVNAE0UqsO%2B5cUs%2BZDqW2xUdCS4Bd3ZJuuSTrBEMIO5wL8GOqUBG6wL2sFsp%2F60C2bpc%2Fdn2YRM%2FBbfVgvdblUT8b0h6fZvQlmpwXOB6shHl1uTM24nEsREWOnN%2BV3RbEEO8875w%2FXmleE0ZoYSyEGHRzng0RV0BDgch%2B%2B89NasB2bcj5%2FARbTWl6XOcBTA0B5tQliYJoYHouTBCyNeqmIe%2BJ42wRjoNq3GmbQDPTBeIfNFZBGuQexUdj0HNnMHfaQs6qJbByWf4Rns&X-Amz-Signature=13fcb4337b9bd43a5f92608811aa039f1a3d806c42aed89a5ff4d642ba96e935&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX5YZBUY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDayoO9ty%2FQUPk7LkQSlltDTlVb%2FwXnWD6NjE2XY%2F8HjgIgN8kGz9SL9uCRpdCNUUwCVtpv7%2BYjyBotKqaHVY1fFqwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA01NPM9i3xoVb2WfSrcA0Iu7%2BdK2QGuzuStENcn4G%2FmxrpEOrkZkgKa8bj8oAHtO44rasenYi7nGgaF6hJ4DrHn2rU98RZbk4FpAu6CrLQEDjgfalarB4df6Ck%2FzrLXjeT3T9Dho3NkG4od83%2B9Zz0jG48yGamxPylqYv%2FIvuFOYLB8egb3nOoZ9v3MCzpHC4x8sViIbI8Q2XijPEURWoIztZSOkfLPpQX7eigsdUnH3o5fbesURzKOshSCBaPDW2sEbzIubwvurP5zFuZAD2T%2FbG1Vg%2BGBBbWMJoVfxDiAUNiyjm3RWOrbFG7fUcNrH%2B%2BPwiYp8wY26YthKmeofWohuUTcjrMWQSYeg25oNiinui3wtZldMfJWfeLQAqAAAPA21PTf0Egva%2FZMR2uMLLwvAh7V2rMNM7v1jS5WltpI3rc6eJQ%2B4h9vHUKjvpRfxQ73ZcdYwgWoVqv8evk%2FLULNS8zOdYRqibhb9BH7JX6d2R3%2FOFcuQYYyh9gEwkBn1re6oXeP%2FJyeGJ8ydbbwTYQMrnC%2FdCjhR%2FMTEMP9HnHtDEvKDUuWyAsimSjAfp%2BC3aSfe%2B1ZAyn03qmMXhvyT%2FRAfmNx4an%2BickO3LgBP6E%2FMZ12q9GmonuQjBAfFjTfExPvMq6RQdw5GfC2MIO5wL8GOqUBV5aWTkJg3%2F7kWetWmEMVGHqDJNZscynmPSqtXebrewyY6BQb6ljwTOiKHQBr8uFJrOktrvKA7c57b91O52nttTU%2Fe0WGUeQSZGE7CY8A8dUZiO2WIvcWfxr2efbq%2B2J9BjTsCEAG%2BnmZGP1f9OUMbEAwmTfkEAJvZPLb8%2BwRPcN9XPNputPHJunaF43p%2BSnDrRryvzSNCaDEFFznlnWUv%2BS84mzN&X-Amz-Signature=495e24cb38cd8d85b00e22e1beadb9923bd0e21630e6f131bfcc42c6ad738bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE6UNXJV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJfehpx2r5maiCt2KZ7oYgtKY31OkUnlTiPAHD2icPuAiEA6pK3Olx2YC7KkgRJD1wXb26ISX4QdGMILY9I0uJmddoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGYQYDioSAaLVxbYtircA8I1Q%2BpMjP1zQ1MoD29G0gIx2eJBpfkjdxXUo75zUo090R%2BNE4k1lFcB6jpY79TnkbPidzBpOHZag3w1UkLrNbsnEBFYix%2B1NAMt2dVheOg0ZWEE%2Bd4drCdpqCtkLK96afNS5op32mYYXNP0zXhkmrqgQ8ThZttPqg7FfBFtcqIkwdluotXTnbl%2BAvgDsQSxiQ%2BRfGkt9OTlyM39RQJyWsmcJOnYKcY46ZewFVj039wZtUr8U1Sq7%2BCUY%2Bu%2BF0Zs5pgxv8Znbq2EFdtoL7VlDqezjMaNKGk2VKGl6Eft3PccMRFLMq7w9INf7wREH7Pgd4khZc92xO4Q%2BzWZ1kG2fE65Weu%2Fec41HpWIXAC4yPL0hNUOiBmg6rwGjyFJlKBgk3bNtR6aXYnwgx89NcPuRAm8JT1Ca3zAWbLjLq%2FD04qYpKqRrjLwhsMv3q3gFkx9U1O9to238i2F%2BOcPSiXyDSwlx6i6ktQr50eR4ScMDm9ZetKnMsx81plqIy1iAfWhaxFtkEWK%2FzV2P%2BFJZqjKLYNN7VdCkpSmMeWW6TU8sGAZ9yWHI%2BZYdQNKolFRv%2Bxbxu%2Bl69yBFhrs0MkTcbLF5vBjqX1ZQeQPFDmXS3Uq39OSRvqrzzjnNQB9tDibMLO4wL8GOqUBhGFXHP%2FIwU%2BEYSIKUYt9MOi3DgLXCz9d94bFdZj24vw3KZMl4mIn7bEL2ej611SxqKwiXdtAwoPeM3gS8Hyp3Hde91nHxVLbSYGlRxzcsXULDUTccMJvMtvcvTWiJHr%2BS9LeOdDp8ySEv7AosldRfAD%2Bltw85R9v2HCP0C38ltSU7jLYbAa2LyQnxiygZoN%2BXTK8frLDYKZD%2FP7UQPiL39%2Fk8ry%2F&X-Amz-Signature=533d74bc44f5e9ecf44f168802aecf8e79d5aa457353af8619a1e1272cc4bae6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
