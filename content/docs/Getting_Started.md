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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2AB43J%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPvatlDpZvkt%2BOU3LG%2BO%2B6DnMWYozSUgzEZjLZpdKIdwIgA2q064LpEGavNr%2FZ1YOU5g2n8ca4avr5ITFJcN4On70qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM51K8%2BC9tsqWtpveyrcAws4wdJpVIH6ZoSMMMSI7EELrXtIpwbz3Gr7n4I4SVq2AmnN8YkUylZh6lkJt7vQjJZWeLydNGnmnRaIbFzoL9LFyaFCj6GH5wd9RRWY5pSmiyMPZFYv%2FhVgEj9fmfcTK5KCSKkU3AXAKHUdT05x%2F%2FLKupC%2BYa2GNOq7jPB0dznXB7TevTR6kc9ZAiKAPf2F4hLHFhDZqeaLbFOFzSJZawQEuuslgDlmB%2BIc%2BenO70dx1jeGXId31xRi%2FytWBtz%2B8hj4y57oiKFucl4ZT5qDU3795dfiejKE%2BjM9UEhwRCYZtqWv6zTzQlzsRI%2BSlxFFxZR4y5NmrNWG%2BJy6EyEQ5Ikbp7n1VCUx2Jylr63SUGAFSKXRYL35%2BJcF2atpb1BsUcdTLMFC2587vPlFGijGyyM9hvZcz2QjYxO6cQCD%2FcADJmjOHPQG6I0M%2Fjq%2F6zfY18t84qLHHuD3P2QO3VDgZFEWhAkObyRn6iVw9GIQ7%2FajdhjIT7soz%2FNXpCAEa9RjguAU6HITmLP9P%2B5d%2BxkIUmEqevarDPbAEfJcUPT8Y5JkBRB8fgW%2F2XBvi23%2BqjwtZ3A9U7a%2B4k6poSa3vHsgEGbEM3DVUTQyEZMNz0eGwqlk83QiIHfnXSqGYSyrMLHlpcIGOqUBSuU0K65Q0GbfmXTJTrEFAKYLMJa0R59btphi7EBYx2OKTuVa05E3d1vUHG%2BwDIl4Bhdfx8iotrdVxL5tSH%2BQDkMRqSWG%2FgJwkrOC%2FmP6aZyq24dK4jCksrwaDJQZM6hjKOQLurxDAoNrgX2EeAb5fwCHZPJNaPntYiDyBNrL4vPlj9Ot0v35R254eKOmgkTeEOyQN8zvk73cs3vs4mkEzlKcoiyQ&X-Amz-Signature=43c8edd0b615d0aacf3a0df777bf012cd88b060d78d1d7345e940779656b7995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2AB43J%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPvatlDpZvkt%2BOU3LG%2BO%2B6DnMWYozSUgzEZjLZpdKIdwIgA2q064LpEGavNr%2FZ1YOU5g2n8ca4avr5ITFJcN4On70qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM51K8%2BC9tsqWtpveyrcAws4wdJpVIH6ZoSMMMSI7EELrXtIpwbz3Gr7n4I4SVq2AmnN8YkUylZh6lkJt7vQjJZWeLydNGnmnRaIbFzoL9LFyaFCj6GH5wd9RRWY5pSmiyMPZFYv%2FhVgEj9fmfcTK5KCSKkU3AXAKHUdT05x%2F%2FLKupC%2BYa2GNOq7jPB0dznXB7TevTR6kc9ZAiKAPf2F4hLHFhDZqeaLbFOFzSJZawQEuuslgDlmB%2BIc%2BenO70dx1jeGXId31xRi%2FytWBtz%2B8hj4y57oiKFucl4ZT5qDU3795dfiejKE%2BjM9UEhwRCYZtqWv6zTzQlzsRI%2BSlxFFxZR4y5NmrNWG%2BJy6EyEQ5Ikbp7n1VCUx2Jylr63SUGAFSKXRYL35%2BJcF2atpb1BsUcdTLMFC2587vPlFGijGyyM9hvZcz2QjYxO6cQCD%2FcADJmjOHPQG6I0M%2Fjq%2F6zfY18t84qLHHuD3P2QO3VDgZFEWhAkObyRn6iVw9GIQ7%2FajdhjIT7soz%2FNXpCAEa9RjguAU6HITmLP9P%2B5d%2BxkIUmEqevarDPbAEfJcUPT8Y5JkBRB8fgW%2F2XBvi23%2BqjwtZ3A9U7a%2B4k6poSa3vHsgEGbEM3DVUTQyEZMNz0eGwqlk83QiIHfnXSqGYSyrMLHlpcIGOqUBSuU0K65Q0GbfmXTJTrEFAKYLMJa0R59btphi7EBYx2OKTuVa05E3d1vUHG%2BwDIl4Bhdfx8iotrdVxL5tSH%2BQDkMRqSWG%2FgJwkrOC%2FmP6aZyq24dK4jCksrwaDJQZM6hjKOQLurxDAoNrgX2EeAb5fwCHZPJNaPntYiDyBNrL4vPlj9Ot0v35R254eKOmgkTeEOyQN8zvk73cs3vs4mkEzlKcoiyQ&X-Amz-Signature=3d4045655cb1a480806c1ee7dba32a4c27f9581dbfb423a3ae4c7c35ee981dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2AB43J%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPvatlDpZvkt%2BOU3LG%2BO%2B6DnMWYozSUgzEZjLZpdKIdwIgA2q064LpEGavNr%2FZ1YOU5g2n8ca4avr5ITFJcN4On70qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM51K8%2BC9tsqWtpveyrcAws4wdJpVIH6ZoSMMMSI7EELrXtIpwbz3Gr7n4I4SVq2AmnN8YkUylZh6lkJt7vQjJZWeLydNGnmnRaIbFzoL9LFyaFCj6GH5wd9RRWY5pSmiyMPZFYv%2FhVgEj9fmfcTK5KCSKkU3AXAKHUdT05x%2F%2FLKupC%2BYa2GNOq7jPB0dznXB7TevTR6kc9ZAiKAPf2F4hLHFhDZqeaLbFOFzSJZawQEuuslgDlmB%2BIc%2BenO70dx1jeGXId31xRi%2FytWBtz%2B8hj4y57oiKFucl4ZT5qDU3795dfiejKE%2BjM9UEhwRCYZtqWv6zTzQlzsRI%2BSlxFFxZR4y5NmrNWG%2BJy6EyEQ5Ikbp7n1VCUx2Jylr63SUGAFSKXRYL35%2BJcF2atpb1BsUcdTLMFC2587vPlFGijGyyM9hvZcz2QjYxO6cQCD%2FcADJmjOHPQG6I0M%2Fjq%2F6zfY18t84qLHHuD3P2QO3VDgZFEWhAkObyRn6iVw9GIQ7%2FajdhjIT7soz%2FNXpCAEa9RjguAU6HITmLP9P%2B5d%2BxkIUmEqevarDPbAEfJcUPT8Y5JkBRB8fgW%2F2XBvi23%2BqjwtZ3A9U7a%2B4k6poSa3vHsgEGbEM3DVUTQyEZMNz0eGwqlk83QiIHfnXSqGYSyrMLHlpcIGOqUBSuU0K65Q0GbfmXTJTrEFAKYLMJa0R59btphi7EBYx2OKTuVa05E3d1vUHG%2BwDIl4Bhdfx8iotrdVxL5tSH%2BQDkMRqSWG%2FgJwkrOC%2FmP6aZyq24dK4jCksrwaDJQZM6hjKOQLurxDAoNrgX2EeAb5fwCHZPJNaPntYiDyBNrL4vPlj9Ot0v35R254eKOmgkTeEOyQN8zvk73cs3vs4mkEzlKcoiyQ&X-Amz-Signature=abdf41a3d7ffbe997c2edf9565dcc9c60aa5a733e093bd9e50e201f752bb0c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LIWTUQK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgBavc9yhsejIUFfWPc1IWeStQK8nU3sX5Puf6UNLkQQIhAJH6VYX0B47Pnc2cQU6Zj6wIvtYSZ6IAhIaN40smtKDzKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGr6dcsQPPtu%2BjD3Yq3AOFLW%2B%2BVk5oKyJhNzO5oKTalMj3fO%2FOggTr0zlsQfuDolkPXrhXpysFnvIoggzcGyUaqXoPCmaogsNwSG9EBGbYRdGLK%2F%2BHjXcWUAJf5XfXE%2BWOqwUCdQlzPFQOOt57uJP1%2Fr5Ahy%2B%2ByxDRRfb4Fy%2Bebn2R70jeXtRGJX16sGOkvmDW5anFYed0Xi9cX2LM41%2Bj9gsKowIvIvhVKmDnYY6rbXO%2F6JIdJulJnXmRc7%2Fq%2BIW7BB%2Bv6egPC%2BQw0hA86g%2BImDVhQtes3sVlC6K%2Fw7X8SgyUX8bcJT0uo%2B0CLwxz2GGu6SgclvuXczKqpSHksk7tZ98QlGpkWQCMR6HchYtUIUU13mhKuXCj9qbbP8lXqTP2GjHKIwBNUrQEfj9Yw1jMtXSQ71ac3xF9W4Lp6GAlIGoXK44zl%2BNt0p4JIer2kuKMdfCn3lPTS7mLEZAPm6iwfN2hCbuXLRcjKYuIUcbItJ4rLNYCrhTKwdcWR6CIREpzUjlnbClkIue7zDcmpM5%2FzROQ5086zEz%2BtyUDYf9ciVSnShdCbGnuTEdboFVHBTyCIUDpzGySgGVo%2F83hP%2B5ImGcyKYcf%2F45AcaiWCxnOwnBfUWDP%2By4gqeqqnCYFrZLL7wywfVCj2lpCXDD%2B5aXCBjqkAbgTAHdHPMzRbpV7C%2FZ6edip%2FFwDY8qbbnYBxteIbMXPHKvpTdFSSa9mjXC6zJzBUTu0Of%2FIVmrFYUEkB2GPbA1iqxDzgpIdKFrSizYRgMxOQSDe8LKYqXXG92hkNpJLsHYC%2FNxy6s2r2xjmCUsyrV0KpPNhbxF35r5oXftZTOu9RWNCySHBCk38nUHp6crpMQ0JTbjV7r%2BzvJk%2FEbvXXPgGybcM&X-Amz-Signature=63afcad646cdecfaec0959ba871e2cbd7dc58e8eeeaea63d2bfcad5477d59247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MDI2FCV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2qDGEJkCuelWOq31Btr4%2BbODf9C60hhwP0nPbuBecQgIgIpTsgt2lNyqEWHdj46Wt5smLOxkdxCQi9mAdKOLobt4qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPX18Sh%2Fy%2FzPQCnxnircA6r4SNIvZj7AoYEovFtXKU9caPbGbQ63RJ%2BRhbrjKRWS5nAlgB2bThOmecHxkfob3r2ZDGieH8stwIYSBhW9Y%2FGLfEbZAelKaMeH9u2GuGj6vmohxdGBOpCfTsbfvUcqrh4S8qiuCflAZT8pybQuhMWcIbU9IvNXwoh%2F%2F2c6cZzJrywZJPbKgoosraYXleMwfg%2F3vQP8sgjdjGUsZm3bWBRdI2jSHcZkJauVcI56zLJepZIdZaMyoZoWoXBhEOlqFEn67xyU3b1G9fMS2Yl4h51DceTtq%2FsTlFFQT2aqoAk0vvSdioSlvuKtMSVTBLnC%2Bjo7EJsJBnqs7KSuZ0XHisJDsWhtCzqgSvqNhud32yDeOK1jJQ5n61zkAXBBVgq91hazgfbsCG1ZACvhKfWuT007WW8MS7Z4W70njB0sJ1%2FTJDUHPtMf0NLn3UHI3LN3w6Es%2BNc3bf5Z5RNIDGWJqg8GYiFFOD3NEo%2FbOND9FY3aL10pWum63UuJrMOUOcgbs0OqrZLunxvsMtHjnUuchysKq4mJcwJRjWqbpJPLzyACUKBj9Y2tXZOM1qQ4rrOw7Z9wCMxpBLejFcGg8v4tCEt6U1mn1%2BGpIwKMAcrFAMsOAMyUAZXOr83EuEi7MKP4pcIGOqUBKAvlTWt%2BnZA7liL7S%2BWcwXzeGeBqRfWQZPEDiNu%2BvMU6NqK%2FePT8Ueh8tyBZlLXDJf0gVUxUg6dlP5DbN7dJrB%2BKY3r9XVek%2Brv6MAJScn6tGwsNoSndFzcH2dR2KkNHL0E5C%2B3cORPJbOoAOFjuoBHm1xpoyYnJVVAw57uAq%2B0AD2NUzLp8yuCwN61X84EuG4s3Hzb3EwNFieilw3a8f8Qpx7hI&X-Amz-Signature=b09367a1cf5b347a977fee0e8af551c1ab64c6bbb94cd8e241dfa03a0902234a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2AB43J%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPvatlDpZvkt%2BOU3LG%2BO%2B6DnMWYozSUgzEZjLZpdKIdwIgA2q064LpEGavNr%2FZ1YOU5g2n8ca4avr5ITFJcN4On70qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM51K8%2BC9tsqWtpveyrcAws4wdJpVIH6ZoSMMMSI7EELrXtIpwbz3Gr7n4I4SVq2AmnN8YkUylZh6lkJt7vQjJZWeLydNGnmnRaIbFzoL9LFyaFCj6GH5wd9RRWY5pSmiyMPZFYv%2FhVgEj9fmfcTK5KCSKkU3AXAKHUdT05x%2F%2FLKupC%2BYa2GNOq7jPB0dznXB7TevTR6kc9ZAiKAPf2F4hLHFhDZqeaLbFOFzSJZawQEuuslgDlmB%2BIc%2BenO70dx1jeGXId31xRi%2FytWBtz%2B8hj4y57oiKFucl4ZT5qDU3795dfiejKE%2BjM9UEhwRCYZtqWv6zTzQlzsRI%2BSlxFFxZR4y5NmrNWG%2BJy6EyEQ5Ikbp7n1VCUx2Jylr63SUGAFSKXRYL35%2BJcF2atpb1BsUcdTLMFC2587vPlFGijGyyM9hvZcz2QjYxO6cQCD%2FcADJmjOHPQG6I0M%2Fjq%2F6zfY18t84qLHHuD3P2QO3VDgZFEWhAkObyRn6iVw9GIQ7%2FajdhjIT7soz%2FNXpCAEa9RjguAU6HITmLP9P%2B5d%2BxkIUmEqevarDPbAEfJcUPT8Y5JkBRB8fgW%2F2XBvi23%2BqjwtZ3A9U7a%2B4k6poSa3vHsgEGbEM3DVUTQyEZMNz0eGwqlk83QiIHfnXSqGYSyrMLHlpcIGOqUBSuU0K65Q0GbfmXTJTrEFAKYLMJa0R59btphi7EBYx2OKTuVa05E3d1vUHG%2BwDIl4Bhdfx8iotrdVxL5tSH%2BQDkMRqSWG%2FgJwkrOC%2FmP6aZyq24dK4jCksrwaDJQZM6hjKOQLurxDAoNrgX2EeAb5fwCHZPJNaPntYiDyBNrL4vPlj9Ot0v35R254eKOmgkTeEOyQN8zvk73cs3vs4mkEzlKcoiyQ&X-Amz-Signature=f7cfafea792ae34034a8e61dcc7cf41db1056f342eaa445366274c10e131255f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
