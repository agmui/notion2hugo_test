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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYKRVWZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIF6Al9xDd0%2Bh38OF1U40G3JIVrBMCLXMzsMO3lzqdF63AiEAhzmTFf2GfzlFFINiVO4JQP9t%2BIZThJxSUc8Gq3%2Fqxjcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDF6EpTBkW5nRwdCY4CrcAxxUIkU2bwzdaQgCF74NPp%2Bl0ziOTZbIJCho%2F1UeBwyUTGVTU%2FIRhq96BwRS2YdUnU2IsurvqQRdE8zYnVjXnjCAGp3s3yMbKHQasVMJ8Y%2BjeieJWx%2Fp83iVIzX%2BdBbNLpSfmryMGriZUdIV5vheNAhh3%2BTWiz8OCiUJMt74pBR53vA8QpYKf6E1mkXbk%2Bhl3N5tGcrQbH3jyEtSsdF7JFC8DnbRl7dtoBo1UNzdX3UzkH3GubLkZKPMBBfVb7vWs7oRwSKfstM5VYsqN6yhTBLbV7jvXhKUDozBdOMUpf%2FqF5dNSPTp0nIWazlXr8sTkVLLuXA5fsRvTY9ebbMMQdTCnotiLrEhQk5LgmPWCLMioRiXvb8OL4HNbFXP1iCjxtj5OwCSOV7FiFZ9G0c87%2F6fmaASVQBTmvbMJfWIWbxyAcEw9eqOtnw4FATqTQyyTCPSUD9EQ9bGYL4b8C2sycJN4zp14hN6s5ewCOcT6eo4L88dJKq3WRZKxRy0xNVkQ2XqM8vz9Pzej61imrIo0WPhZyZFldlqWidF7j%2BzNAZCavAlq6pm0Ge9ePzlWT7gjlMGdGLQ1VU7%2FVR%2BXA2Vj%2BgroojE%2BylBMvS%2BHYLNYpAgP8z%2F4hHAbg17spnuMIDk%2Br0GOqUBduAz9y3tGVIa9PsXUx1ML%2F9Zku6WdPlnhZGEG%2Bu9Nw3Itt%2BvSSVkIMTCpOSfotK0MZMINQyxyhmYV0PsYaG7gNYsbF0M69YvhEYD5lmr%2FOLCboTZPmc%2FcnSjqrfJM78KeqAvUHqflmMtyzptn6kXA0kphdi6TnlAUGw%2FIbUg332atula4Q%2BULJuQuWg65oeR3l2GUeFvTtINFhkR%2B583DmdopNzq&X-Amz-Signature=06a49b2f3e4d58e6e5f24789696c84ab3844975e1ce23752ac4e67596517f748&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYKRVWZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIF6Al9xDd0%2Bh38OF1U40G3JIVrBMCLXMzsMO3lzqdF63AiEAhzmTFf2GfzlFFINiVO4JQP9t%2BIZThJxSUc8Gq3%2Fqxjcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDF6EpTBkW5nRwdCY4CrcAxxUIkU2bwzdaQgCF74NPp%2Bl0ziOTZbIJCho%2F1UeBwyUTGVTU%2FIRhq96BwRS2YdUnU2IsurvqQRdE8zYnVjXnjCAGp3s3yMbKHQasVMJ8Y%2BjeieJWx%2Fp83iVIzX%2BdBbNLpSfmryMGriZUdIV5vheNAhh3%2BTWiz8OCiUJMt74pBR53vA8QpYKf6E1mkXbk%2Bhl3N5tGcrQbH3jyEtSsdF7JFC8DnbRl7dtoBo1UNzdX3UzkH3GubLkZKPMBBfVb7vWs7oRwSKfstM5VYsqN6yhTBLbV7jvXhKUDozBdOMUpf%2FqF5dNSPTp0nIWazlXr8sTkVLLuXA5fsRvTY9ebbMMQdTCnotiLrEhQk5LgmPWCLMioRiXvb8OL4HNbFXP1iCjxtj5OwCSOV7FiFZ9G0c87%2F6fmaASVQBTmvbMJfWIWbxyAcEw9eqOtnw4FATqTQyyTCPSUD9EQ9bGYL4b8C2sycJN4zp14hN6s5ewCOcT6eo4L88dJKq3WRZKxRy0xNVkQ2XqM8vz9Pzej61imrIo0WPhZyZFldlqWidF7j%2BzNAZCavAlq6pm0Ge9ePzlWT7gjlMGdGLQ1VU7%2FVR%2BXA2Vj%2BgroojE%2BylBMvS%2BHYLNYpAgP8z%2F4hHAbg17spnuMIDk%2Br0GOqUBduAz9y3tGVIa9PsXUx1ML%2F9Zku6WdPlnhZGEG%2Bu9Nw3Itt%2BvSSVkIMTCpOSfotK0MZMINQyxyhmYV0PsYaG7gNYsbF0M69YvhEYD5lmr%2FOLCboTZPmc%2FcnSjqrfJM78KeqAvUHqflmMtyzptn6kXA0kphdi6TnlAUGw%2FIbUg332atula4Q%2BULJuQuWg65oeR3l2GUeFvTtINFhkR%2B583DmdopNzq&X-Amz-Signature=cf5a8fb5dd82e4ae06e7695baafbe83029c86ff0d63811bd24f1d7e683ab964d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSPX3LP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDKdbNspvbzoebL3L01BdLTrJjy20oC4NTj%2BNR%2B%2F6SJPgIhAKJisNdU2O%2Fw5dwXdNjx7y14FE8GAyKC%2B1FMPpGuuBtNKv8DCFcQABoMNjM3NDIzMTgzODA1IgzX01pMPUlLYfqQ4%2F8q3AO%2FNU9O3yDyDvsuxbV4aDRpQJDBAW77K2ltCKkB5S%2BRQQSPWAOvMXirWYon7bwbBsNrWMdhdxHvMasAR9%2FwbJT9MUSWG2GRbQu6%2BVgKK2PecT4f%2Forgo2F1aOjZSEIpLoGakzTJWroIVP8faqhwTL%2FPh%2FIK77WjlpEPOwTv%2F6YC51fvYwNwrl4YdfMNsvzo9Ku1bQK8VP9M%2FzXUey7IykWhgaIQwsJ%2FEotNOP49QXW%2Bwx1VhhzoMbfKOKHlM2QZP9%2BnbdZn3L7HCn4BnA97GXYgyUxUi8FlHD2grNQZCorSINdvGZEt%2BzsUOcSbc07XNOpd%2B3yeFDv8aFpR%2FeBtlBFh6hvGfBh77aROitBs6EYsZsnzG7q6GPJClCBlHylu23b0FVaTz7UZLVE2tHVTF2zrQD4babi0hDebWIphCXGgPKgPrHV4uL9eRw8HBJYrQJl6RZ%2FL2c1HuwH29LpfPg4M8cn2L1lYQs99GGjwfbSAcjwLfupbat9M2VerpoOI29jw6lvo%2BJFE4mv8Ertk%2Fwh%2FU22gIeWDyAq1Wl3R83ZmprvHkckI%2BrVEQSLOaChOQgBdEEpIhReVwnH31Ua1vA80B0wcwk1yOENxGlFXc0d5%2BJ7JkAcnJon35cQ0rTDc4%2Fq9BjqkAVnhmRDZODyegS2y0nea%2FN2BlfFXAvyPsRsIeyWrW4WpSIO3g%2BpvUWw7jqy4e3VxIibi5ToNoi8SYJCandwu3Y0fLN9hP5GM0ydTTEaseM3PV4p586Fo8%2BJOnJRtExWG18AyjWiz%2BafT9sGl80lVI5wkWGpRCF0ddfhdCXgX99AzW5pCfuoZ2Y1Lwa6tyZ8u2GSY62ftcWO3pDfl4mgyTKytt9ST&X-Amz-Signature=ef3cda9f5f5ab804f9120841ac4665a528c05d204714db8b098f47ac76a512a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX527YAU%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCJ9si%2Fs4VZS7Z84IAU3iGCLG4SbZ8t2b31a%2Bgtd2GTugIgE48QbIgC4PfuAdOt4IWfHcfIXMBAN1xSry4ymUmaHooq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIl%2B7eF%2B%2FaspVfxdHSrcA8dmrkRmubBnVzfOBWqKA3o0Bh9QaqCEanhvU6314xLf5frSetISrJNYv1MrPchF77RnvzjDP%2BH48ExoTSHcMC7uJ3KPKXKmDhn0xemB7ViVgzCrNMAJrN7WrsG8v7vObJ%2FPOZrnr1qe%2B7wV1MVAw%2FycNlAFVehN5XsQb%2BLfu1RAhjq3BYs7OY0x25inxIjzibGuFfdXGTUoH7%2F8x0O0Nk5gLMz7AZUoGiJ2amBmJjph0re3DXZyg90UOtKJScVDVQsOItY%2FBmidFV1bhrM7iiCi7LAz2FWrHARKJkqhFSPu%2BXhHzx7xiai%2Foc61igsU9s5axNrBCV9AJ3pboIA3pC%2Btz%2F2immyva1N9adtWG9rlIw1%2B4S8V0D8ulFkF%2FA5351I3XBA4aEPaVjwY4tBWBMy4R0VpmTXvg3lU8cOBYobRv5pLPpmT3pf2K0jU08xCw5j5j29BRYtKvTmAZLK91PuYvoKqHonAcXmxL7ImSAUZlmUcuwwByVFAqRRFczFYH6hk09zOjSNxY3yKidjvmTjaYH00gSJzcrzPgcaIwbeGGSy5CjjE87ptlHBVlYp04p%2BIE3RrX%2BkEf%2FzIfdkfqrm0dleTOBH9gfT8zEXlxHxxyP%2B%2FNyd1a4QzTqRuMN3j%2Br0GOqUB6f0jVes%2F1dGX0kVJQJm7cHUTarQbJQDNt0y3awr09MH%2FXHY07uRFcly7GMQ%2BvtPtmn6Qy%2FHV8Oy8pNwEYDfBb73l5xYGCGTLDszlGwI88SnXqiUC96QxtRQ3VTJMuBhPzaYWzvVf%2BVHYJ2ALlpxzVxunv0e%2FG%2F5ImUY2h59z%2Fud2qrJTcf4j%2Bh4Q1NXaSmDGzj73ppImsPO06i0jUszRvb3CUL0E&X-Amz-Signature=7d66b5a43517b24288cac21fef38c59f098ba8a19eadd25ab82fe71cd35dd8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYKRVWZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIF6Al9xDd0%2Bh38OF1U40G3JIVrBMCLXMzsMO3lzqdF63AiEAhzmTFf2GfzlFFINiVO4JQP9t%2BIZThJxSUc8Gq3%2Fqxjcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDF6EpTBkW5nRwdCY4CrcAxxUIkU2bwzdaQgCF74NPp%2Bl0ziOTZbIJCho%2F1UeBwyUTGVTU%2FIRhq96BwRS2YdUnU2IsurvqQRdE8zYnVjXnjCAGp3s3yMbKHQasVMJ8Y%2BjeieJWx%2Fp83iVIzX%2BdBbNLpSfmryMGriZUdIV5vheNAhh3%2BTWiz8OCiUJMt74pBR53vA8QpYKf6E1mkXbk%2Bhl3N5tGcrQbH3jyEtSsdF7JFC8DnbRl7dtoBo1UNzdX3UzkH3GubLkZKPMBBfVb7vWs7oRwSKfstM5VYsqN6yhTBLbV7jvXhKUDozBdOMUpf%2FqF5dNSPTp0nIWazlXr8sTkVLLuXA5fsRvTY9ebbMMQdTCnotiLrEhQk5LgmPWCLMioRiXvb8OL4HNbFXP1iCjxtj5OwCSOV7FiFZ9G0c87%2F6fmaASVQBTmvbMJfWIWbxyAcEw9eqOtnw4FATqTQyyTCPSUD9EQ9bGYL4b8C2sycJN4zp14hN6s5ewCOcT6eo4L88dJKq3WRZKxRy0xNVkQ2XqM8vz9Pzej61imrIo0WPhZyZFldlqWidF7j%2BzNAZCavAlq6pm0Ge9ePzlWT7gjlMGdGLQ1VU7%2FVR%2BXA2Vj%2BgroojE%2BylBMvS%2BHYLNYpAgP8z%2F4hHAbg17spnuMIDk%2Br0GOqUBduAz9y3tGVIa9PsXUx1ML%2F9Zku6WdPlnhZGEG%2Bu9Nw3Itt%2BvSSVkIMTCpOSfotK0MZMINQyxyhmYV0PsYaG7gNYsbF0M69YvhEYD5lmr%2FOLCboTZPmc%2FcnSjqrfJM78KeqAvUHqflmMtyzptn6kXA0kphdi6TnlAUGw%2FIbUg332atula4Q%2BULJuQuWg65oeR3l2GUeFvTtINFhkR%2B583DmdopNzq&X-Amz-Signature=54e4c8023863a95fd27efb1f0d7c0c823e89a2a20b970839779fdafb7e780b83&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
