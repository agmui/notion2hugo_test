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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY4DK46V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLos7hVwLhTLrOqzzV3dBMCzkZAWf0DZt4XeAfILnm5AIgLXtfVd1BxfTWUpb4HwB06C9onGZ0P1qEwa8Xcg%2FKQz8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmAU9dUdFDQa6o7uSrcA%2F1W9aUapAPqLMlynVZpOBCjjxas11QL1olHSCcXogp5tduUTUCrl4pyfi3M3tbSJa7a4H6gvJt1zlB9X8cZA3waD6MPnj5lwUhk7kXDHD8tcSJV0bJ88wvlno2fCthyiyuSs%2FRBxycwmg%2FWhoqEu4%2B7WnPFXqZlOgwdyRCLHyXzmd3vGAmRm%2BOBYETNgPy4D0tKzCrSORgaUoerStUzGfyiGyOUfFK3Nz3xlQzcLPbUM9zHkEGfVjnPxLKIA9se6T8qLojh4aUMGj4GFFpzJ2Qn5ERNzfkj1Dp9f%2FoXu3fd8u%2Fm1CO3iayh7TNfqcER4wZO%2Bo%2FNpT1lwOUNVIm07i4RBGdG4dwb5%2B2UT0pz%2B%2FGM%2BEfC5j5F7dQIrGpu3eeaebaX0TLTmnKSuZIilwJ0JiTcu8CI4ZdvkCF0%2BzjIbk7WMcgIZOL2tazZZALEyNJVT8nix06DY2EpZWXWYu3kB59Whm4ZhlUS77pW9N7dbu7xBBbXPHfWgIS811x2m7DwdFF5b8ZVzU9LO%2B5988THgy07ytmpFgWD2k5UJrB1If9%2BqSkepet36TN9gMEiB5K8F0H33qK12gf3cvgMVfJvz6pA%2BppjC31EyT0j1eWfVErF5gih6abGi6POjt0mMMqxzb4GOqUBdIyIvqWxIR5wqD8p2tDMGPXFPXjOf%2BRWGT6RNRrS4qG4ZBLX7y0haMSdSx4eOuXYSzdU%2B687VtZSvIQHy%2FJ6%2FC02Ep7s3PW%2BfVIYV%2Fr3SRe0YNHM0%2FoN%2Bzr%2BT9XsRQx3iaDPNmya%2Fat8Um4tulasVU06p2q9bwnIEMJq4yUHxiMJVGb2xAQxqJWygFPlfHmWq7uIUs4G9IET9o9aJQKo1BhB38GN&X-Amz-Signature=2c5ff1885f7a54b111cd2e6c27219b49a5afbc39e45061a2d47555c7a289eb19&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY4DK46V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLos7hVwLhTLrOqzzV3dBMCzkZAWf0DZt4XeAfILnm5AIgLXtfVd1BxfTWUpb4HwB06C9onGZ0P1qEwa8Xcg%2FKQz8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmAU9dUdFDQa6o7uSrcA%2F1W9aUapAPqLMlynVZpOBCjjxas11QL1olHSCcXogp5tduUTUCrl4pyfi3M3tbSJa7a4H6gvJt1zlB9X8cZA3waD6MPnj5lwUhk7kXDHD8tcSJV0bJ88wvlno2fCthyiyuSs%2FRBxycwmg%2FWhoqEu4%2B7WnPFXqZlOgwdyRCLHyXzmd3vGAmRm%2BOBYETNgPy4D0tKzCrSORgaUoerStUzGfyiGyOUfFK3Nz3xlQzcLPbUM9zHkEGfVjnPxLKIA9se6T8qLojh4aUMGj4GFFpzJ2Qn5ERNzfkj1Dp9f%2FoXu3fd8u%2Fm1CO3iayh7TNfqcER4wZO%2Bo%2FNpT1lwOUNVIm07i4RBGdG4dwb5%2B2UT0pz%2B%2FGM%2BEfC5j5F7dQIrGpu3eeaebaX0TLTmnKSuZIilwJ0JiTcu8CI4ZdvkCF0%2BzjIbk7WMcgIZOL2tazZZALEyNJVT8nix06DY2EpZWXWYu3kB59Whm4ZhlUS77pW9N7dbu7xBBbXPHfWgIS811x2m7DwdFF5b8ZVzU9LO%2B5988THgy07ytmpFgWD2k5UJrB1If9%2BqSkepet36TN9gMEiB5K8F0H33qK12gf3cvgMVfJvz6pA%2BppjC31EyT0j1eWfVErF5gih6abGi6POjt0mMMqxzb4GOqUBdIyIvqWxIR5wqD8p2tDMGPXFPXjOf%2BRWGT6RNRrS4qG4ZBLX7y0haMSdSx4eOuXYSzdU%2B687VtZSvIQHy%2FJ6%2FC02Ep7s3PW%2BfVIYV%2Fr3SRe0YNHM0%2FoN%2Bzr%2BT9XsRQx3iaDPNmya%2Fat8Um4tulasVU06p2q9bwnIEMJq4yUHxiMJVGb2xAQxqJWygFPlfHmWq7uIUs4G9IET9o9aJQKo1BhB38GN&X-Amz-Signature=9e47fdeefb52225bae6cd7812282bb194336ba5de3aa53f79ba9f0cbec2247a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466632KGGL6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC66o9MNxO9zp%2BYRYKGkkxzj99sLWCqZsOLCU7VLxywLwIhAJeXhpSOIDdpXlHNhxOmUAcY%2B0%2Ffeiv1MCyTGrAin87KKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNzJoMvPXuVoAl4IEq3ANuiAYQupZQ9P%2BCQoPAhp0%2FJbNK%2B%2BaMecH%2B0CFxMtPLa%2FR0mTZtc2k6p3JMzM3VIQuhy4kasWJfsWPIWP1zkBNYf2a1Ozl44Ju3Nr5RmWrguVts5vBRRP8mBZv%2B0iF0V7VoL2g1aSViXoadSNXJf5ZPsZfX7tPdKOJWAmGdKQFz%2FpD7UkxD7yFKzVkqRa3qOBuJZTtl9%2BHE44hg7IBr7bHdIRrIs8PHUp5RYPBoTHVBhz1zLaaDIuAjbQCPebJ%2BY1QLQHE1Tf4JF5%2BaMl47Ji2Yy2vDtO3ykjYPxWwomklf4uXaprE9Gwj7PwcAJd%2Bn71fijNloE1ZV3lPbz91EUPEYTkDAkXmiNPH1oNTl4sa1dMSyPz8rYMvvv%2FY3UA6EkRACrJHvT3cWrtxQt9XChfOUCEtaPocjwB%2BFAUL2NH36nnwO3yB%2ByIMue2XDMDtqu60gLE7BPZHyKjfTilT3jGqJ78GOQ7Wid%2BNLCWi%2B%2B1J46sYu0UxPMhSjUA1b2lEPvItFF0OGW4eMykaFCAgysLbtrmyOAGDDXu0Gs3jXqrgk7jlykDsqIYnkMNzph2nDivEgeU%2FWUdynXQSKEUoI5JRrOGZx0WFBHPomRZa9Z0Nmb8lNHUKJhuWNBHlwsjC2sc2%2BBjqkAfJnp7R80q%2FJzz7FVudU2yhppLH2e6qlsWJk2Lj6gzQbeMidgwtUI7wenGQWH7PKGuzY4AbETYg1IjV9Gfl0ceuGpLYw%2F%2BQAShAdGoA20e%2Ffin%2B3llfrs31rDaEWFu%2BQyWLJxemEAWIklPe0KtIj%2B0bphnladViaMJmGGK%2BOFRH%2BYvmUj10BJ0G0z1yvvpUBG0jP9KAI1194O2N4yVZS0TxrE39x&X-Amz-Signature=0cbb59a51cff1f644cb639bff3f50a69cd19c2f771bdf8ce3bb82f1ea7dfd083&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYMFGNU%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbuwXVuuOD1XM1fYa%2BvlEtRbRARAblxAsDwqYyKm68XAiEAwWMei%2Fks%2FKcN%2BWGcX%2BmHfZpYaNpJ%2FRNso2E4brzFaUcqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrdcAig8aOHeOtVISrcA5lOM0aoN4VJinZQ43V39dO8RFkJ0TyOGHEGzdCXGEH24rxjOr%2Bex0B1VTF6csRy7jx4fFONkhkcmH9ZLdBTt5TmmaMVp9VGb2C4qcgNqXUu6im2Vx2Dn4VuC8OSzZRT7o6n%2FlNgjlaWsNyJV7RihrhRsGHA6EOANBuQwSZfmdnBAoQ01P8VKEP3l3rp1hldxwQ03GazpWKNjUfSxn316nPEj7h6Dv6PgJjgopYQyl9w2vXsfXe6EhGPEVS81IpJrni9J0ia2G0O7qZE0%2BoYiF0c9o6ykxzCa%2BZv7MyEBPpldaiqTs%2BVAKRi98Ysbom2zJXJ8XvFHjCK8jqEFBEHa4AP9Qh4Ah7YxMX7v84yJosdeZ5bgn93p3EiYFxnhxKUm%2FU%2Fg3wtBVhImIzrj2CeErKuDOFfsEFUQsH6qHZmQQ5kPkeXI8hC8UHBtxmchr3r00fJHyas%2Fq1%2B%2FBGKIK91H6J5b954iLUCjt%2BZSKDHVyFe%2B7eEX9lAdnZbIhXQqOSmpSRBMV6AjHKaM475NJ3mdqAeurEeh54QAD50SHcZzYJ8Dbuf39WOQv1zhP05wQFPBMk73%2Fha%2BnFa8%2FUBCgHf7OQ%2Fk8uLiFz7oG3sP2IscjbA1vWUOSsCJHVOnBY4MLaxzb4GOqUBHHM%2FePRWKXnmkYvXhg9lBSP7m4SxgGNgRvkuPMyeGoJYyFOMotHXUq%2FxyuZ3qn4X4Ia3207J2ikGogqkZtAF3mJMeLrBJaTN%2FsiqDv1rC%2BU1uKkoG4yo6kKd3RS8JtG9UZSBIkr1DTq78XORoq5t1bCAwrtDVHgNVl38AzFHG9BUd%2BqXEqd3FgtTQza8m6ooPOVsNitNuXUu5V1igARzigrTi68w&X-Amz-Signature=acb32abb9e2df0b6388c6bc233f0d379722e0957216276c20c8067293fc7c541&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY4DK46V%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLos7hVwLhTLrOqzzV3dBMCzkZAWf0DZt4XeAfILnm5AIgLXtfVd1BxfTWUpb4HwB06C9onGZ0P1qEwa8Xcg%2FKQz8qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmAU9dUdFDQa6o7uSrcA%2F1W9aUapAPqLMlynVZpOBCjjxas11QL1olHSCcXogp5tduUTUCrl4pyfi3M3tbSJa7a4H6gvJt1zlB9X8cZA3waD6MPnj5lwUhk7kXDHD8tcSJV0bJ88wvlno2fCthyiyuSs%2FRBxycwmg%2FWhoqEu4%2B7WnPFXqZlOgwdyRCLHyXzmd3vGAmRm%2BOBYETNgPy4D0tKzCrSORgaUoerStUzGfyiGyOUfFK3Nz3xlQzcLPbUM9zHkEGfVjnPxLKIA9se6T8qLojh4aUMGj4GFFpzJ2Qn5ERNzfkj1Dp9f%2FoXu3fd8u%2Fm1CO3iayh7TNfqcER4wZO%2Bo%2FNpT1lwOUNVIm07i4RBGdG4dwb5%2B2UT0pz%2B%2FGM%2BEfC5j5F7dQIrGpu3eeaebaX0TLTmnKSuZIilwJ0JiTcu8CI4ZdvkCF0%2BzjIbk7WMcgIZOL2tazZZALEyNJVT8nix06DY2EpZWXWYu3kB59Whm4ZhlUS77pW9N7dbu7xBBbXPHfWgIS811x2m7DwdFF5b8ZVzU9LO%2B5988THgy07ytmpFgWD2k5UJrB1If9%2BqSkepet36TN9gMEiB5K8F0H33qK12gf3cvgMVfJvz6pA%2BppjC31EyT0j1eWfVErF5gih6abGi6POjt0mMMqxzb4GOqUBdIyIvqWxIR5wqD8p2tDMGPXFPXjOf%2BRWGT6RNRrS4qG4ZBLX7y0haMSdSx4eOuXYSzdU%2B687VtZSvIQHy%2FJ6%2FC02Ep7s3PW%2BfVIYV%2Fr3SRe0YNHM0%2FoN%2Bzr%2BT9XsRQx3iaDPNmya%2Fat8Um4tulasVU06p2q9bwnIEMJq4yUHxiMJVGb2xAQxqJWygFPlfHmWq7uIUs4G9IET9o9aJQKo1BhB38GN&X-Amz-Signature=abf09c653656b4b9456d26a185d59865431dc49c355e0dfeee46916e95537b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
