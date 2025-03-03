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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622O2K3E3%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHC5eszCU7auIa8GmepgZ90OFQD0YUizvXZwok4qBIkJAiEA3%2FJcXdfK9os5zFw2KRAixv%2F5UtYorqSQs0BEF0BSYB4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOui1lof3QNWHcocyrcA28GScHhoL4kbLREv%2FNRgpXMYAdVhA0EH52GBw24jtVVKluG3QDQ1KfhX9dsDXLruy6wMuPqwjN7oAL%2BHtJP0NstpmVbEgwqqRsv6zNcMY4vC6Tqu%2FlxenU0oms2adeUqSmmqxb8%2B4134BKXh5l1ITXGdOHIfd3OdoAoOE3YdbKPHXuwgiG%2BKLZPutSr3y3r6UpND9hMPAHv7NG4RlddE9%2BRykwwSC6GcnmnAQXnQ6pqxJ%2Bx8TRwyvDUGc8XVr3WJyzZIlDZDjkcjniyA%2FrXwbXcmxzoJuQqw1eNJVNJlEnG8IogOb8%2Fkrtn%2F7X7QGpLIqeeGosXfljRvRSTzpY1ibFhspwNh57pcbSIwMz67mHrixqYDCLtk2TbbB4BKiuCOqPzS%2FQEtU%2FIj4S267KKo6wfv2A1swMjL9Ttsp2G0rL73uv%2F2kQ%2B%2BVIt3hzsQacvrdFhZHpmy5T5lZ78JByHFJu%2FaQdr73pCAwGOSaVDqY6caBCdskmb1I5EyKHrUqW5%2B4iIlLT8bXSMew9oaXjH%2BfIpZwCeUvM2yGV331Ib5ZsoMxGBhpbVRzTjYrPA%2BN1B8AC6x8Fcfp1h%2B%2FL%2F522YZ1740XLJ9GbC2vVnw8ffMaYPmnlJxInL%2BNgxcmxMMIjalr4GOqUBceeVnRIMsLuV9TzXYkkqRVQTC4%2BJiiPcAjVakkI5dhdAYVv0bTmwM8iQqn7kmcwrz0nyvDbxHpumE5w4Vm9JwHXuKeezta%2B1b3xfoNgwo1XyqX18jEbm48lTfnq3%2Bs%2FFGAmqn1U7nWheXCMEqp29vfyvpSPiq5TtrB%2BjUP6rq6f6165z3p%2FhQqIrmBffpMfvxHkCbvSfJ4RGFmtwP4ahKo4uKJmn&X-Amz-Signature=4d8a8ddb4622361bf4ade62cd91b41488d50f432f3ff031667561f46ca370fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622O2K3E3%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHC5eszCU7auIa8GmepgZ90OFQD0YUizvXZwok4qBIkJAiEA3%2FJcXdfK9os5zFw2KRAixv%2F5UtYorqSQs0BEF0BSYB4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOui1lof3QNWHcocyrcA28GScHhoL4kbLREv%2FNRgpXMYAdVhA0EH52GBw24jtVVKluG3QDQ1KfhX9dsDXLruy6wMuPqwjN7oAL%2BHtJP0NstpmVbEgwqqRsv6zNcMY4vC6Tqu%2FlxenU0oms2adeUqSmmqxb8%2B4134BKXh5l1ITXGdOHIfd3OdoAoOE3YdbKPHXuwgiG%2BKLZPutSr3y3r6UpND9hMPAHv7NG4RlddE9%2BRykwwSC6GcnmnAQXnQ6pqxJ%2Bx8TRwyvDUGc8XVr3WJyzZIlDZDjkcjniyA%2FrXwbXcmxzoJuQqw1eNJVNJlEnG8IogOb8%2Fkrtn%2F7X7QGpLIqeeGosXfljRvRSTzpY1ibFhspwNh57pcbSIwMz67mHrixqYDCLtk2TbbB4BKiuCOqPzS%2FQEtU%2FIj4S267KKo6wfv2A1swMjL9Ttsp2G0rL73uv%2F2kQ%2B%2BVIt3hzsQacvrdFhZHpmy5T5lZ78JByHFJu%2FaQdr73pCAwGOSaVDqY6caBCdskmb1I5EyKHrUqW5%2B4iIlLT8bXSMew9oaXjH%2BfIpZwCeUvM2yGV331Ib5ZsoMxGBhpbVRzTjYrPA%2BN1B8AC6x8Fcfp1h%2B%2FL%2F522YZ1740XLJ9GbC2vVnw8ffMaYPmnlJxInL%2BNgxcmxMMIjalr4GOqUBceeVnRIMsLuV9TzXYkkqRVQTC4%2BJiiPcAjVakkI5dhdAYVv0bTmwM8iQqn7kmcwrz0nyvDbxHpumE5w4Vm9JwHXuKeezta%2B1b3xfoNgwo1XyqX18jEbm48lTfnq3%2Bs%2FFGAmqn1U7nWheXCMEqp29vfyvpSPiq5TtrB%2BjUP6rq6f6165z3p%2FhQqIrmBffpMfvxHkCbvSfJ4RGFmtwP4ahKo4uKJmn&X-Amz-Signature=66114220dc8743b344880037cd71c50ad66e058c0211fe70b9cc0436afd9af2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7EAMWJO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEe85NE6BCQM4gbfHtF7qbur1pQhKDx3BDB7E2H0tNIwIhAPxHnwW7jKpGe1WY8uSLJvG97f63iE6JrxLzRBy2GZnPKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHGlNIzKWo0XSUJ7Yq3ANb3RNaABgSdl6NYb3KQFwwzV5k48jGBUlKq0mFhdPyTtt25wecNyCO%2Fd1AiL3vq8pTScdHNiWnQleaUgmMciNF4TD5w4BohCx0M3qc6c4vhoIcusMtNp7LBJgLhf4fwMvTgae%2FwqDom2Jmk3UYSLqhSDnaYCNVWKXefra%2BsZuGLKkj75stWYa8dXqfUU6Tg07iiUCOz1q6N6va%2F0yphXC41bLeu5efHRa52G1Y5PAgf1xqIh1gjc3s766oRw7%2BaNlqkt%2F4I%2F4O7Q1WAEyv16VZ0oKXv%2Bh838TsMnbxqfV9wZdoYxTU%2Bh7gMxKei6JvYulYXNwREd9QIU1QJgwcb3mQG%2Bmwgcy9msaUUdlOjKyKBG4NP%2Bef8b7UgHSKxmxBWe8QtcBQv4PhfZZMh9xqpebyJVf24PHNSgYH20xjnH8mAjmfrBVIgOi2tmT6opwNUmPw%2FLUH0MZCmNqG7NTfAXh8atf0gyvdRZjX%2FQ3CBcE1EqxyRH1xOcBWswUg4sjEDWVitF7Ns0yaNtWapgEjM354JN1z44UmpvkhW9vyMVf5PXG6lI5pbolN3f66C4GBVXwI35v2e2AgEbs7o7C5R1S5KzIYx%2FHsieMHReKXuCOnNFmZwFTeAAgxvcuHPjDt2Za%2BBjqkAYb3fHgEk8gRy3Q1Efmt%2F0mtUbQVPdOAOvOEXfml8s7d3tas92kwvNa4lOPFXCHNl95ZvabJROzaiz2t38zHnjk2Su3jFFj43SMGvHG2A5uuYcT15eAgnDjoWdpxVReYz2cTgupsmGBbJ09NjHCZeAGtilY4U5iVcnk6E1KvlJ%2FrpL12nsIzpsJ8hnQphzJ9%2FgCVYjYDNHjQRR%2BIk6fME%2FgRulOv&X-Amz-Signature=6f75a6bd52810fe646cbd2a7791c208542a2253bb8557c90a88c84f4b17c2251&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QONH2Q5K%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ErFm%2FTC5dVCP4xc%2FXliQlHw4%2B0f2CMOmj6aHv6j0kgIgNVO7EadD9qoEJcSTJmJ2Hlcidv2GwP0phDpYTrH4hrYqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUXFUErQ4AGSR%2FZkyrcAx7jrLvYbhgyR%2FPYb7CrEZmdNbA%2F8CwOXZRcQqVbXsL45MkgjIntz%2BaWeXl2luT14lev7%2B6mvHJvPVlA1IlQcsRf5i1P%2FjMQPUQTnOl6XD7wL376myQ3Fy23koy3oFpGilSn%2F7yufINZv6oIe1wCm2uLRYIdsyj95sUJ9YaCiYBmyUG9lzRrxIX%2BtYTnyb5fUk7t%2FcxwjA8U%2FqfxZZPPG3XbRuiD%2FQHnvZun5Hf147jADyx4akj%2FOKJGIG9EGlS618D2%2BJ1d4q3JGknIR5mlZezunb%2BNca3Th8suFxYSxA%2FFPgEj5h4AOlldy0ffN4OHKWeuyPCwdOVdu%2Fc%2B4fS8qCKMu1bX37%2BD2y5g7O2CsJozosY8x8DvVv39QlwnlMani%2BzKpDc55oXZqi35EP5fRJdIhLz21pQS1kaA5EfApg45Im4%2Bc0%2FRie0pp628DmGjriek68pB5vfQAuXen9zp3w%2Bm%2Fcmkj1Z8lL07K1Zi0dnW83WN2w%2FvA76eZZ4q1If154sFmpQZycuWO3zMGgzdyfg0ME1vIKKEV%2FMMfZ6Wit%2BAUrnuWqizOXQUk0ngYsxQd0DMmRBW5S%2BotZ9yIP4PaSaXmBOc70DmVIB6E8j8OK2LcZ83%2F7Zj%2Flm%2FlbBdMNzalr4GOqUBoLKCMHQ0kK2dTwrocFQFQqcEQVOvtzkv80ixgmUCVHOf32XKLtFEdcZDLAl%2FBx6JdqU65wZe3FEF20fkD3VLeCPIXoLTXjZ4Dg4xBTSab8z0ifjWgx%2F%2BxAbUzuOf5FiNZNOnXbbhixw%2BKkJ2%2BLVg5%2FTTqqgFy2Z2MJ8nN3XyRq%2Ba18%2FPvjqKrTpFd3JgxsmxQqSm13rOI4iubeRNczEvroxHXOkn&X-Amz-Signature=2ef63b13e4010aef671e4ac4bb4b82974ca597428a93a775c905c3ef96d05f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622O2K3E3%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHC5eszCU7auIa8GmepgZ90OFQD0YUizvXZwok4qBIkJAiEA3%2FJcXdfK9os5zFw2KRAixv%2F5UtYorqSQs0BEF0BSYB4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOui1lof3QNWHcocyrcA28GScHhoL4kbLREv%2FNRgpXMYAdVhA0EH52GBw24jtVVKluG3QDQ1KfhX9dsDXLruy6wMuPqwjN7oAL%2BHtJP0NstpmVbEgwqqRsv6zNcMY4vC6Tqu%2FlxenU0oms2adeUqSmmqxb8%2B4134BKXh5l1ITXGdOHIfd3OdoAoOE3YdbKPHXuwgiG%2BKLZPutSr3y3r6UpND9hMPAHv7NG4RlddE9%2BRykwwSC6GcnmnAQXnQ6pqxJ%2Bx8TRwyvDUGc8XVr3WJyzZIlDZDjkcjniyA%2FrXwbXcmxzoJuQqw1eNJVNJlEnG8IogOb8%2Fkrtn%2F7X7QGpLIqeeGosXfljRvRSTzpY1ibFhspwNh57pcbSIwMz67mHrixqYDCLtk2TbbB4BKiuCOqPzS%2FQEtU%2FIj4S267KKo6wfv2A1swMjL9Ttsp2G0rL73uv%2F2kQ%2B%2BVIt3hzsQacvrdFhZHpmy5T5lZ78JByHFJu%2FaQdr73pCAwGOSaVDqY6caBCdskmb1I5EyKHrUqW5%2B4iIlLT8bXSMew9oaXjH%2BfIpZwCeUvM2yGV331Ib5ZsoMxGBhpbVRzTjYrPA%2BN1B8AC6x8Fcfp1h%2B%2FL%2F522YZ1740XLJ9GbC2vVnw8ffMaYPmnlJxInL%2BNgxcmxMMIjalr4GOqUBceeVnRIMsLuV9TzXYkkqRVQTC4%2BJiiPcAjVakkI5dhdAYVv0bTmwM8iQqn7kmcwrz0nyvDbxHpumE5w4Vm9JwHXuKeezta%2B1b3xfoNgwo1XyqX18jEbm48lTfnq3%2Bs%2FFGAmqn1U7nWheXCMEqp29vfyvpSPiq5TtrB%2BjUP6rq6f6165z3p%2FhQqIrmBffpMfvxHkCbvSfJ4RGFmtwP4ahKo4uKJmn&X-Amz-Signature=019313d13eec689d7268cd78694deb60de11dd4b2ced8b89e65bd19a2fc03ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
