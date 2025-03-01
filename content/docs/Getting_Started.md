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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OLQI57%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEUjS7Ysw65Le%2BqrtaZ1ZFz%2Ba%2FDvXQliS5NfKAFY4ICQAiEA6rLV40uodigGY%2FOtTODKs2K1iHsPF4LZG8A2D6%2Bsd44qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBrXibpKlTmHgW0BCrcA%2FJrRpAryOEvNSj%2BIijpKN%2FADLSZBnUN8udvaLZkm%2BNaxuJg5jYK%2FwxiEhRCSoVLw1X9xr4p%2BhFPd%2FiXKRATT%2FB3ixA37%2FH%2F%2FDihrpGSWx4wjJTcufZ1Or2BiVamCCnsNSNvYaLXyHynloZJhLJt68HwrKeVAzrQ6y8Ii1oeG5kF4h1iCBhCrP5dOROvdEOOo2YF1HqD4vd%2B9pfS8Pn4kwvm39w6i5M5UyyWsLUYF8JVq0AL%2FZaHLgmIvHfwIIgegl3hqRLuN%2FdyeQWNyWzaj6WKesYMH%2B8%2Fb4dRKKNMV%2BqE1Ap1pW0ftBPJosnE9%2BI5thzvEnFgXWTbb5QiGj1w%2FtxCXoAuNSj9%2Bp0ZrGomhwqBgCkRxkOm5CTrTXlzTY3QKqU%2BMniUjmUYt8%2F%2FlTPtu8O8fW8l3FQzJIsyTHvIPN%2BWu1oJmZl%2BXbTLnOBzw3cHL1qYHHs7B8nqP%2Fk8dLA24S%2Bf4G4h2%2F6oykYPv9XaJSc%2F6ClgH1ZmkK%2Btz8x8mlZnbgoRfPWkZHtvwkj0fhbaidPX0k7IE2HRXcbh3UxY2xBQ43QJp%2BT7Jq6Fdu%2Fu4FCrKj%2B1fGhPfWD37GAJLgktHy%2BbRy7CpPxZVIFHInn8ZaNwu3NwNAgzaIht9yWyML%2BVjL4GOqUB%2FSiKugmBfF46JRa27GdTkB1n436f2nvzXWaNtMYSl%2BcF3s6xDjfNgk6J8v4F3rWowgeaQlZowc6hUiL6U3OErNEVmlMdMlGbSAxqSC1w0tpBBTXw%2BtmvfZ8LqZMc0mMq7wsRcuYonl9f6NbGiG8m1ph5bRJMCcEF1Il9uxFTzX52pVv6iwBb%2Fp2e4GYg87CwRaAMQThUfmsror7410odrMP4cUsC&X-Amz-Signature=1915ebf3cfcd8d8869e32078d5517904a85fd226215414e160ea4b937ee21ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OLQI57%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEUjS7Ysw65Le%2BqrtaZ1ZFz%2Ba%2FDvXQliS5NfKAFY4ICQAiEA6rLV40uodigGY%2FOtTODKs2K1iHsPF4LZG8A2D6%2Bsd44qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBrXibpKlTmHgW0BCrcA%2FJrRpAryOEvNSj%2BIijpKN%2FADLSZBnUN8udvaLZkm%2BNaxuJg5jYK%2FwxiEhRCSoVLw1X9xr4p%2BhFPd%2FiXKRATT%2FB3ixA37%2FH%2F%2FDihrpGSWx4wjJTcufZ1Or2BiVamCCnsNSNvYaLXyHynloZJhLJt68HwrKeVAzrQ6y8Ii1oeG5kF4h1iCBhCrP5dOROvdEOOo2YF1HqD4vd%2B9pfS8Pn4kwvm39w6i5M5UyyWsLUYF8JVq0AL%2FZaHLgmIvHfwIIgegl3hqRLuN%2FdyeQWNyWzaj6WKesYMH%2B8%2Fb4dRKKNMV%2BqE1Ap1pW0ftBPJosnE9%2BI5thzvEnFgXWTbb5QiGj1w%2FtxCXoAuNSj9%2Bp0ZrGomhwqBgCkRxkOm5CTrTXlzTY3QKqU%2BMniUjmUYt8%2F%2FlTPtu8O8fW8l3FQzJIsyTHvIPN%2BWu1oJmZl%2BXbTLnOBzw3cHL1qYHHs7B8nqP%2Fk8dLA24S%2Bf4G4h2%2F6oykYPv9XaJSc%2F6ClgH1ZmkK%2Btz8x8mlZnbgoRfPWkZHtvwkj0fhbaidPX0k7IE2HRXcbh3UxY2xBQ43QJp%2BT7Jq6Fdu%2Fu4FCrKj%2B1fGhPfWD37GAJLgktHy%2BbRy7CpPxZVIFHInn8ZaNwu3NwNAgzaIht9yWyML%2BVjL4GOqUB%2FSiKugmBfF46JRa27GdTkB1n436f2nvzXWaNtMYSl%2BcF3s6xDjfNgk6J8v4F3rWowgeaQlZowc6hUiL6U3OErNEVmlMdMlGbSAxqSC1w0tpBBTXw%2BtmvfZ8LqZMc0mMq7wsRcuYonl9f6NbGiG8m1ph5bRJMCcEF1Il9uxFTzX52pVv6iwBb%2Fp2e4GYg87CwRaAMQThUfmsror7410odrMP4cUsC&X-Amz-Signature=63707abc5f6338cfe4f8e0d6e62620dec21554f43114b71dd278519c56549026&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4CCRAU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDTc2fHB1y4o1%2FqYU9j5IjzVXI5o4ei3%2FAN2r%2B%2FIhve1AiEAiwlEije9jIc%2FAsgGay7Eb1daXBjeW%2F26sisjnLjR3OAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BzJk91IK%2FXVA9y2SrcAxQJ1dUMhADSm8D%2FKzN5bi8fMTqBL7QBwsOapSZUnlmARhY7%2FmFLq1C8LuT4y4Vhysbfokvv9fMxwOsAclO5WDWJk4IRdTch3gXO%2FY3tjdI%2BJrn7LkGku344pz8DRou1b%2FCzZ6qc3YVQdBWmRMKSKWKKTqfIIewKPrIcEymylx1qddxgfmDkChJegfLvkpvPa5TEDOhp1RrOWZgxeoYQMMxNPa3tLJv8DZt9bTJkUvkK54tM3%2BTcIKdMvnVJt3%2BRDY9HzskLgsJxjTeLrSkkqYF%2FT%2FYcU6zc9NW7LEAJyO8NAeNA4AuPD97lOZwyDoSUMk9JgqDAPoFIdWYj9SJ9P41p6jO9dD7zRvqRNS039iM3Ck1S9DnTkazBhPLvDM%2BtTYUPtKMbG8clMvhRdp5aQMrRx8mMHyywEE9YX0wvXVtKxjOO9R57fAsFgOQspN8VpBFwYZwdszVVSyxIz%2FwBWQvZFR9NuAhbvBti858ge3WmM1Sk8Yc7HE2zKrgTYnysqadAIrRAFCFs8UdzYBhcgeJRuXx3VoVHQUF5oAjBvfHSx1ztU77jUAny89TEHVcK7snJ5JSdjE0Ub2Kn4%2BT40mZ8CD8xJ0LVG0O8Z2JKMrswbiMGGFhQxjarXX3MMJSVjL4GOqUB3SYEPvMNYoNoqqCBKzd7VQPDkWpz5Ra5j8D8GUCmUt7ih662%2F0bGhdkdDRZ3HM5t1Pi0ixYfLLibjsk53Lc0%2BI9eFRtnRvIHlDHRjSP41i7W%2B4%2Fia8%2FZ5jbZ5c1NVdnUpt1Z6899VJZxEHQ2DWJYOWmpIzNBfblLMKV9uF5FICgaQEms7wowIg%2FTRM7pToLbU8ox3p9s02mPstqxvzzCu6PF%2FgDa&X-Amz-Signature=12fcb100148e70f79b359313f0d0db599a72dba52522aa900c1ea4ed91957df9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HBW2OK2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHGPeAp%2FOOMv24D3wHxZiVa%2BjYf0LQb%2FOgpSsAYPHf9QAiEAqNF8ynr9QZLYbW%2FOdMmR8dUWj80SE2C5ihlEvvKzR0EqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJi6tcrYfq0dxslk5yrcA25OwlqGbPhqBts6QkNBDPDlpmKLW1NeNFl0HMdprYhMzhuyUI4t1gH89%2BB8gxjH3bpvdfURER8N7T6jJyA7GBawb3AF%2BjKgR1uHPRbdguAOmaqK0PGNw%2B22q6tfO%2FiyexEjzJ3%2FdUSOKRNkadbgBnTsbF5XZWSwjCzul8lu5T1EQaIiQOBx3Clk7yMax%2FHFJw3594WEwjguwqtnCzRLc8EgTwDnj53gUl2%2BHas8vbreEsK6dVywsHB2n%2B652dHM11fDQzONPp3cAmYcS0Ea6hrf8fOVJLhFpAS56mambxJmoFHoBZrQrSDzoWz0s26bShxoL7GIqhJ325U%2BTtnh%2BAdOYCYkXg%2FEM9IUCkBcysbOu5ogNRrzQU7JuuIP%2F4RQzOqYZQfUTiG%2F0NWV8zW%2BVKaIW%2B5VIPwG7suDvn%2F4l4WYcDnIn5%2BSpdKgEwZl%2B7wSuhSQ%2BRB%2B8axURwTCONafz2QMDQX49Wzu%2BrZhWxVsKDd6BmRkJfD3q3UDpy7IoRLYKRd%2F4xpaDVtNq5bbVcgSKFzyzic9%2BaUXEHqD65DgEkiYmNR%2FiDM7BaJMR1V%2Bn%2BxAUhPzgg4VQYEyin%2BDQj5fy2KPGZZ7V%2Fe%2Blsao9gsmqfsFe5fH%2BWS01gqFdjE0MJeVjL4GOqUB5obv25mXJvwXpjrQP8W0OjESx%2F3LRK8kP90%2FpyeXVXt3numgT%2BAi9WDepn8EsNWQsZ2hwvqhQWT4DrQzqR7TdEYwZPV7Gq%2BY8gF0PoCz8tRLPfsQ4rXsZ2rXt41pJYPQ8V0hfy1hTIZylXzgm%2FnHvq2cL76PyMtIDgVBZG0scl4SSKsGXyvnWZH1bAUpGtPTFnS0hFPflnXU726S3rb9UBKX0gZi&X-Amz-Signature=2ed887d0d722bc5f127438b8dba69a0debc6a25d6a6b39f00304a7ddbd4174f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OLQI57%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEUjS7Ysw65Le%2BqrtaZ1ZFz%2Ba%2FDvXQliS5NfKAFY4ICQAiEA6rLV40uodigGY%2FOtTODKs2K1iHsPF4LZG8A2D6%2Bsd44qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBrXibpKlTmHgW0BCrcA%2FJrRpAryOEvNSj%2BIijpKN%2FADLSZBnUN8udvaLZkm%2BNaxuJg5jYK%2FwxiEhRCSoVLw1X9xr4p%2BhFPd%2FiXKRATT%2FB3ixA37%2FH%2F%2FDihrpGSWx4wjJTcufZ1Or2BiVamCCnsNSNvYaLXyHynloZJhLJt68HwrKeVAzrQ6y8Ii1oeG5kF4h1iCBhCrP5dOROvdEOOo2YF1HqD4vd%2B9pfS8Pn4kwvm39w6i5M5UyyWsLUYF8JVq0AL%2FZaHLgmIvHfwIIgegl3hqRLuN%2FdyeQWNyWzaj6WKesYMH%2B8%2Fb4dRKKNMV%2BqE1Ap1pW0ftBPJosnE9%2BI5thzvEnFgXWTbb5QiGj1w%2FtxCXoAuNSj9%2Bp0ZrGomhwqBgCkRxkOm5CTrTXlzTY3QKqU%2BMniUjmUYt8%2F%2FlTPtu8O8fW8l3FQzJIsyTHvIPN%2BWu1oJmZl%2BXbTLnOBzw3cHL1qYHHs7B8nqP%2Fk8dLA24S%2Bf4G4h2%2F6oykYPv9XaJSc%2F6ClgH1ZmkK%2Btz8x8mlZnbgoRfPWkZHtvwkj0fhbaidPX0k7IE2HRXcbh3UxY2xBQ43QJp%2BT7Jq6Fdu%2Fu4FCrKj%2B1fGhPfWD37GAJLgktHy%2BbRy7CpPxZVIFHInn8ZaNwu3NwNAgzaIht9yWyML%2BVjL4GOqUB%2FSiKugmBfF46JRa27GdTkB1n436f2nvzXWaNtMYSl%2BcF3s6xDjfNgk6J8v4F3rWowgeaQlZowc6hUiL6U3OErNEVmlMdMlGbSAxqSC1w0tpBBTXw%2BtmvfZ8LqZMc0mMq7wsRcuYonl9f6NbGiG8m1ph5bRJMCcEF1Il9uxFTzX52pVv6iwBb%2Fp2e4GYg87CwRaAMQThUfmsror7410odrMP4cUsC&X-Amz-Signature=303c68f554d7e9dd5bdb6d047ec1ab1c4e67932d9200845a49dceee1bd0f71c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
