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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3GGXLZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDk981J3kD08029n8wM%2FcdEhorbYjPVEM1wnIR6gLUGHAIgJtUFCfqCswGFAigJ7W5AkDW2n2c1VFrOS4u7TfyDU54q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJA26txReBKLEnMl%2BSrcA8OoEx8pvHVBLUln3HwYZjviAclfdrFaDLW9asguUhREgVcSZKAeWio9eoozP%2B4UbKmnRkElBgbP4R%2FjmORQeaFKKOkAaa%2FkmNQjJ%2FOkPbTcU3bGCltDdzu%2FiKCD4uPDDJeM2V2ce20hCL1hBziAyqhsfEJ0%2BT6KQcdBNgJcngAaeClkjVLQpnCEYKaoZ4HZfJxfn09GhGIA19lwvMBC4uduAu1gA9XeTJdpohusgPKNC05yp1sbUQeJSH0L74VHPZqZ1yL9s%2Bz%2BEdII5hHKKcWFpYludIY8hfvpROA1agZBg7elKK0lI7yXt33blum5qL20XQLfeE9ubnPHyL4ORNBs6xvG1fhCUpR7iUzc4ixseSRMMN8keIKG1icDScGxWKGAc2QgyyB6KeQ3ULT4O%2BxcjNQQ%2BoQT%2FBc27r1iILndTdV6PJliiID5h%2BMy9cUAYV8MVz97WNN3zuUdxDduZ%2FVzSecvT%2FYLFJL2lvIdEtJ5hM0Uj%2FHlHGXcxeUb5%2F1Fu9k587VjrWFKddur%2F%2F%2BHDPFdz47KUJKgb0PGGtzrhBfYclv9YCBCD3RWZCAM31BjMPA2gkjn8MdxdH074uwGaNOVGEKx%2BTIGYbJ1ukaFY0jgnrd4sM%2BYWPJK%2BOw3MOjLy8QGOqUBBBnhX63%2BQmXLaq6KZa2z0ydBTHOy%2Bbf%2Bwo7NBz9rXkmrstm5yXsJOS8XsyekkuP4fmFE6UPYsKIgSJgUOGOXSJH1zQoodSLShA7rdPYiWAHqOn5Z0KluXTrCvX8cJk7kIYVhbWQzwQNetHHnyb1OW72BV2HQCnLKn%2BLpG0yrub%2B4xw6Qqs6F%2FdRVsuyplg%2BXFbVrxc7TiEnbHdJxiYJfnYZWPTuX&X-Amz-Signature=d47098dd1792d942b224489eccd20beadcfed19837e99177f48063b171900890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3GGXLZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDk981J3kD08029n8wM%2FcdEhorbYjPVEM1wnIR6gLUGHAIgJtUFCfqCswGFAigJ7W5AkDW2n2c1VFrOS4u7TfyDU54q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJA26txReBKLEnMl%2BSrcA8OoEx8pvHVBLUln3HwYZjviAclfdrFaDLW9asguUhREgVcSZKAeWio9eoozP%2B4UbKmnRkElBgbP4R%2FjmORQeaFKKOkAaa%2FkmNQjJ%2FOkPbTcU3bGCltDdzu%2FiKCD4uPDDJeM2V2ce20hCL1hBziAyqhsfEJ0%2BT6KQcdBNgJcngAaeClkjVLQpnCEYKaoZ4HZfJxfn09GhGIA19lwvMBC4uduAu1gA9XeTJdpohusgPKNC05yp1sbUQeJSH0L74VHPZqZ1yL9s%2Bz%2BEdII5hHKKcWFpYludIY8hfvpROA1agZBg7elKK0lI7yXt33blum5qL20XQLfeE9ubnPHyL4ORNBs6xvG1fhCUpR7iUzc4ixseSRMMN8keIKG1icDScGxWKGAc2QgyyB6KeQ3ULT4O%2BxcjNQQ%2BoQT%2FBc27r1iILndTdV6PJliiID5h%2BMy9cUAYV8MVz97WNN3zuUdxDduZ%2FVzSecvT%2FYLFJL2lvIdEtJ5hM0Uj%2FHlHGXcxeUb5%2F1Fu9k587VjrWFKddur%2F%2F%2BHDPFdz47KUJKgb0PGGtzrhBfYclv9YCBCD3RWZCAM31BjMPA2gkjn8MdxdH074uwGaNOVGEKx%2BTIGYbJ1ukaFY0jgnrd4sM%2BYWPJK%2BOw3MOjLy8QGOqUBBBnhX63%2BQmXLaq6KZa2z0ydBTHOy%2Bbf%2Bwo7NBz9rXkmrstm5yXsJOS8XsyekkuP4fmFE6UPYsKIgSJgUOGOXSJH1zQoodSLShA7rdPYiWAHqOn5Z0KluXTrCvX8cJk7kIYVhbWQzwQNetHHnyb1OW72BV2HQCnLKn%2BLpG0yrub%2B4xw6Qqs6F%2FdRVsuyplg%2BXFbVrxc7TiEnbHdJxiYJfnYZWPTuX&X-Amz-Signature=738ae55df6e0acf7e23912e4215a22ed84a3a969918c5ebf502178f74d56ec2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3GGXLZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDk981J3kD08029n8wM%2FcdEhorbYjPVEM1wnIR6gLUGHAIgJtUFCfqCswGFAigJ7W5AkDW2n2c1VFrOS4u7TfyDU54q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJA26txReBKLEnMl%2BSrcA8OoEx8pvHVBLUln3HwYZjviAclfdrFaDLW9asguUhREgVcSZKAeWio9eoozP%2B4UbKmnRkElBgbP4R%2FjmORQeaFKKOkAaa%2FkmNQjJ%2FOkPbTcU3bGCltDdzu%2FiKCD4uPDDJeM2V2ce20hCL1hBziAyqhsfEJ0%2BT6KQcdBNgJcngAaeClkjVLQpnCEYKaoZ4HZfJxfn09GhGIA19lwvMBC4uduAu1gA9XeTJdpohusgPKNC05yp1sbUQeJSH0L74VHPZqZ1yL9s%2Bz%2BEdII5hHKKcWFpYludIY8hfvpROA1agZBg7elKK0lI7yXt33blum5qL20XQLfeE9ubnPHyL4ORNBs6xvG1fhCUpR7iUzc4ixseSRMMN8keIKG1icDScGxWKGAc2QgyyB6KeQ3ULT4O%2BxcjNQQ%2BoQT%2FBc27r1iILndTdV6PJliiID5h%2BMy9cUAYV8MVz97WNN3zuUdxDduZ%2FVzSecvT%2FYLFJL2lvIdEtJ5hM0Uj%2FHlHGXcxeUb5%2F1Fu9k587VjrWFKddur%2F%2F%2BHDPFdz47KUJKgb0PGGtzrhBfYclv9YCBCD3RWZCAM31BjMPA2gkjn8MdxdH074uwGaNOVGEKx%2BTIGYbJ1ukaFY0jgnrd4sM%2BYWPJK%2BOw3MOjLy8QGOqUBBBnhX63%2BQmXLaq6KZa2z0ydBTHOy%2Bbf%2Bwo7NBz9rXkmrstm5yXsJOS8XsyekkuP4fmFE6UPYsKIgSJgUOGOXSJH1zQoodSLShA7rdPYiWAHqOn5Z0KluXTrCvX8cJk7kIYVhbWQzwQNetHHnyb1OW72BV2HQCnLKn%2BLpG0yrub%2B4xw6Qqs6F%2FdRVsuyplg%2BXFbVrxc7TiEnbHdJxiYJfnYZWPTuX&X-Amz-Signature=3e6eacf1a99bee2eab95c2d020c1e97f0d3eb4f142b7da97aec32648ebdabf18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BIGMMLR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIBQ7l8GRKVxZf%2Fu6dFDP8B%2FMWZD0DFkJUWIamm%2BJSm%2BLAiEAyVUMarIRdp1iiue%2BsQlDsIf41wWFxEw8jc%2FHRsJdcbkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFsBYERcr80YbafqhyrcA5PfEQsZlRT%2FMGQEe9JKt6XAHAR0h8H69W5AMu9FydWDu3FpKgRfc9wnKn0wwWJAL%2BWqWuMTs88oZDEBMRTfPX1z3JvoXC6MjjUqmBo32awaqcD1sr%2FqRs21j%2B50F%2BNt2kQXswzG%2Fzl7W5EHuw6Z2Rkt7%2FEzazV%2B2QT4C1ll7LMrC6zMjDD6HvKX8c1053mUY5eiSimcwcoOjOjm3MZceNl%2FeqSUTdaAV797YA%2BknATGK3K9YGDsF%2FX869ImXRplozGXnC5KiY89jpe39SdVoh9FXU53fclKVD45%2FlonUW2%2BpTavdPPtKH4RvTiP9ywyW9xEEwu5Lb8oI%2BMOUBRGwNG64I%2FR%2FzB8%2BeqEQwmBgeZ%2FY1iunjSK29s4ln29zepeSucEZ7QqRImRR8PIVQoGCkRQ6FcwwLRXNk6solm%2BFkBIHxp730M03fw5vogxjwM4%2FUF9NEROWZuiB%2BC9P5ynjObPxb3%2Fcru%2FJgGwCCwGCjL%2F9TBVCsbPRr9dagF3IGEYmhma5czirg59%2F5OmR7A5p97NeY6sxBL1Mrh5DR5yoVFmsGWTYV5Cfc2MOMe9ww6UcjNmBU39lGX3IqwcF7L4dR0jHaIkvkcDdcRQCm3EwiBEuAsyvOwkiuUkQoFYMJTLy8QGOqUBC%2B4PvDAbUggwpO4%2Bt1DxqRGVTTmxhWIIQZxzfI7dFxoNjwcB9Quj68vO7tYmXwWzqAUqcmGRkZdCssAlVVCPfdex%2BnbBx%2FNqtUGHsxncXeWCqFNOJt5gyQcpqBYQqmAlHRGicpCPBUFhVPXo3unQZ8x6NjynlFZ66p2ksjOafnJZr3DBsV%2BCPeX7u5SDtXHvZfLUr7uVTfUV%2Ff4wAS9Kw5b4fjx6&X-Amz-Signature=ec9e5cdac36d9dfa87518fc9c6e2795c52ed5e04ed853daa95d1667f2291ef5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NB5N2G3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDS97YZM6xIVJ%2B2sK5CTo55gXkEnVnR%2Fa65ekdLwhSC0QIhAKP%2FFhFLcNgXU7U3l99RHaIU9PpZrEgHMf13QjfVlNhnKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSr4hOcARfOwXP%2BlAq3ANZsB8s25DNAfoehssy4%2F0CZGU%2FV32o7w9qY021vC6FWrflYzDvNzOKO33uX%2BWE1j7pRhfplgM%2FJuh%2BdislAmtHT5Zh7bd86OZyYI2nSHq5Gf0gtrtSl%2BIZt4tg%2FvaGq4Thgkttr4L%2FPRqmbMhUPvBSslN53MWVsyqPMuZ7b4dpHACA6pAuULgofVLA3NmBZKtGwdvffPzG3LOQKT2wGyCv1POkJEbVhmFyWd5JDbv4fvr7F%2BOg7xsGZPZw5Pr60T%2BgUy1lheNr00vYAqgIsetfsngy9p%2Fv3GusZN1N8%2FUr%2BXMifmGnaRm7%2FK6m20YPnLT0RYriRFhv3%2BzvdkPQ%2FyRyZ2gFRSE20Gl0ii3Jk4BP7%2BQBSAiePDPF4rB8b9WmBjT65fjfI5Lh7uld3d4dnsMjZRuyJ6vZxjgrEcfuETGZb8rfRBFKue28hGFL%2FLzxLYnHsW6R9OrSYRIsnGTPqxyGWijrgrlQhSOtSZdYZT4zfoyk3FdJwDHObeejTJegKsF3qb6v1BVNx8F3%2BwuCq0BiCa9WBZwdia4EX26iXR21foE%2FpMdljZUXkK9z4ieSGmvr3sH0mvVhhcXTHTx85LAd7owEJuVuRamLGuggL%2FbjYtCYupEQdODDlROyITDtysvEBjqkAZWP%2FrE88KRIohUKKIn64nsXUornJy1yTL%2BRUAtnBEFXiY%2FnaGxMFUg2Lg3NbYYSUbX8Az0%2BdWi%2B0zPmZUziBjURB1C%2F76XGJoVmycBpAoEny2pdD6Fz%2FUbSYFgmOGtPeOgmZsvBAnxeMnX6tUd4b6HfvV55xWozNAEudDxqaBD8aQ2RGrfLcGukfsL9dwI1xdxwyCtlwy9uZCzcZCALqf%2FyQZ3o&X-Amz-Signature=d0eabd75c5ba7b3ffd15367c5bc373fb36ca9596812bfdbe58540be0a6f5c498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3GGXLZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDk981J3kD08029n8wM%2FcdEhorbYjPVEM1wnIR6gLUGHAIgJtUFCfqCswGFAigJ7W5AkDW2n2c1VFrOS4u7TfyDU54q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJA26txReBKLEnMl%2BSrcA8OoEx8pvHVBLUln3HwYZjviAclfdrFaDLW9asguUhREgVcSZKAeWio9eoozP%2B4UbKmnRkElBgbP4R%2FjmORQeaFKKOkAaa%2FkmNQjJ%2FOkPbTcU3bGCltDdzu%2FiKCD4uPDDJeM2V2ce20hCL1hBziAyqhsfEJ0%2BT6KQcdBNgJcngAaeClkjVLQpnCEYKaoZ4HZfJxfn09GhGIA19lwvMBC4uduAu1gA9XeTJdpohusgPKNC05yp1sbUQeJSH0L74VHPZqZ1yL9s%2Bz%2BEdII5hHKKcWFpYludIY8hfvpROA1agZBg7elKK0lI7yXt33blum5qL20XQLfeE9ubnPHyL4ORNBs6xvG1fhCUpR7iUzc4ixseSRMMN8keIKG1icDScGxWKGAc2QgyyB6KeQ3ULT4O%2BxcjNQQ%2BoQT%2FBc27r1iILndTdV6PJliiID5h%2BMy9cUAYV8MVz97WNN3zuUdxDduZ%2FVzSecvT%2FYLFJL2lvIdEtJ5hM0Uj%2FHlHGXcxeUb5%2F1Fu9k587VjrWFKddur%2F%2F%2BHDPFdz47KUJKgb0PGGtzrhBfYclv9YCBCD3RWZCAM31BjMPA2gkjn8MdxdH074uwGaNOVGEKx%2BTIGYbJ1ukaFY0jgnrd4sM%2BYWPJK%2BOw3MOjLy8QGOqUBBBnhX63%2BQmXLaq6KZa2z0ydBTHOy%2Bbf%2Bwo7NBz9rXkmrstm5yXsJOS8XsyekkuP4fmFE6UPYsKIgSJgUOGOXSJH1zQoodSLShA7rdPYiWAHqOn5Z0KluXTrCvX8cJk7kIYVhbWQzwQNetHHnyb1OW72BV2HQCnLKn%2BLpG0yrub%2B4xw6Qqs6F%2FdRVsuyplg%2BXFbVrxc7TiEnbHdJxiYJfnYZWPTuX&X-Amz-Signature=3e4d3a31fe65b0beb292b41fa4e18b991df19447e4cb3fc412e261537efb45cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
