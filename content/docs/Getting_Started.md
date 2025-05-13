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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FN7GWMS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBTqSJndO5ZP5PQLakQ7%2BBzZE61t%2F4ftNns343ZnS6eQAiBGsh%2B98rA9HJnV3rB0UvQY%2FzDXz4lPi5KhgwBxmai7sCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkXcwYcGrmmJPAmnKtwDK5C7wWVOmyLp2jSfCl69hcWo3uwsl7hBHHo0gqbx5d0dYVkw%2FPQYU4Vd0xfdjvUjM7AnHiPwn%2F%2Fp9C%2BE1uVWSWXrET0kkWYwnosjEarr%2FWvb1DimSFS%2BWBrrHlE9dyKcZnbp7MVBsgbCc%2BsDIed6rfCqzsLtuBF7JcXXmBIsbdJ0HvH9AL7MzH3Xi%2F1RifoCpI0LFLSBEc%2B7lcVAQuNWut5hlIG1ZO7P8e0n%2BoHVj3BNsfmHuNfZ3bzmY1QXbpzdpmS8NVLZgRi66AptMsBWOFGWdN%2BFT0%2FGSP7oMCd2AL9RVha7FZcAN5PNtgyJU%2FoXKG3eluT%2BxWr%2B%2FE3fBwtBI6NXdUkfcRxCwmnRGsUNJWF5OlojE%2FjveBlG5jakrBDoIRCqDzaU%2FykdyGE6XjsCcfcidQ2583Uv%2F4FiRH6URgQ6ooNONUXLzVqbXjIBWX3usQTP%2BX8LTmpLRDlJUYhW8Ffwcfc9ORaRQhxE3j17bdfOZVLV7JCYr5EnmgfUBg1nwxKXaVg56oIzyMNM32zD1xUU02kC7F0uTWvuuZbWxQ8TeyvA%2FigmjdwOvVMgkdYnPh1sqH%2Bq3e9L4M7SoNJxU%2FBQ1zWldGQVp7jh7YUpd1Lt7wpX1c6qZxv27%2Fcw%2FsGMwQY6pgHUi9w0NP%2FTXZaJ2yEB5rQ6R7%2B1h%2FobPNxRc70rpRrPaXq%2FoI8sBFKEtb9L%2BmloU0P0wcKjnY5e0OFbOe9ljyKj4MGL9k28CLdc9ftcct5nBDACGxEYnIlt6%2Bl8pQeAQ4eYvCN2PIcRZ1tTMNobzM%2BApUZ7NuFso4jY67f356aJo9hpPIE0WVMCAb5Z26%2BC5tVmHEDaEPY0matBQZuwTO9hzcIti7cj&X-Amz-Signature=0f9a0f3864f0a33196f3abbbba2836e13df5d65c913ff23a84859c51b18c463c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FN7GWMS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBTqSJndO5ZP5PQLakQ7%2BBzZE61t%2F4ftNns343ZnS6eQAiBGsh%2B98rA9HJnV3rB0UvQY%2FzDXz4lPi5KhgwBxmai7sCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkXcwYcGrmmJPAmnKtwDK5C7wWVOmyLp2jSfCl69hcWo3uwsl7hBHHo0gqbx5d0dYVkw%2FPQYU4Vd0xfdjvUjM7AnHiPwn%2F%2Fp9C%2BE1uVWSWXrET0kkWYwnosjEarr%2FWvb1DimSFS%2BWBrrHlE9dyKcZnbp7MVBsgbCc%2BsDIed6rfCqzsLtuBF7JcXXmBIsbdJ0HvH9AL7MzH3Xi%2F1RifoCpI0LFLSBEc%2B7lcVAQuNWut5hlIG1ZO7P8e0n%2BoHVj3BNsfmHuNfZ3bzmY1QXbpzdpmS8NVLZgRi66AptMsBWOFGWdN%2BFT0%2FGSP7oMCd2AL9RVha7FZcAN5PNtgyJU%2FoXKG3eluT%2BxWr%2B%2FE3fBwtBI6NXdUkfcRxCwmnRGsUNJWF5OlojE%2FjveBlG5jakrBDoIRCqDzaU%2FykdyGE6XjsCcfcidQ2583Uv%2F4FiRH6URgQ6ooNONUXLzVqbXjIBWX3usQTP%2BX8LTmpLRDlJUYhW8Ffwcfc9ORaRQhxE3j17bdfOZVLV7JCYr5EnmgfUBg1nwxKXaVg56oIzyMNM32zD1xUU02kC7F0uTWvuuZbWxQ8TeyvA%2FigmjdwOvVMgkdYnPh1sqH%2Bq3e9L4M7SoNJxU%2FBQ1zWldGQVp7jh7YUpd1Lt7wpX1c6qZxv27%2Fcw%2FsGMwQY6pgHUi9w0NP%2FTXZaJ2yEB5rQ6R7%2B1h%2FobPNxRc70rpRrPaXq%2FoI8sBFKEtb9L%2BmloU0P0wcKjnY5e0OFbOe9ljyKj4MGL9k28CLdc9ftcct5nBDACGxEYnIlt6%2Bl8pQeAQ4eYvCN2PIcRZ1tTMNobzM%2BApUZ7NuFso4jY67f356aJo9hpPIE0WVMCAb5Z26%2BC5tVmHEDaEPY0matBQZuwTO9hzcIti7cj&X-Amz-Signature=3e660fa34dcddc67b155ef062b1561af0a515c537e7f92f7229fabb2ff24f9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FN7GWMS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBTqSJndO5ZP5PQLakQ7%2BBzZE61t%2F4ftNns343ZnS6eQAiBGsh%2B98rA9HJnV3rB0UvQY%2FzDXz4lPi5KhgwBxmai7sCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkXcwYcGrmmJPAmnKtwDK5C7wWVOmyLp2jSfCl69hcWo3uwsl7hBHHo0gqbx5d0dYVkw%2FPQYU4Vd0xfdjvUjM7AnHiPwn%2F%2Fp9C%2BE1uVWSWXrET0kkWYwnosjEarr%2FWvb1DimSFS%2BWBrrHlE9dyKcZnbp7MVBsgbCc%2BsDIed6rfCqzsLtuBF7JcXXmBIsbdJ0HvH9AL7MzH3Xi%2F1RifoCpI0LFLSBEc%2B7lcVAQuNWut5hlIG1ZO7P8e0n%2BoHVj3BNsfmHuNfZ3bzmY1QXbpzdpmS8NVLZgRi66AptMsBWOFGWdN%2BFT0%2FGSP7oMCd2AL9RVha7FZcAN5PNtgyJU%2FoXKG3eluT%2BxWr%2B%2FE3fBwtBI6NXdUkfcRxCwmnRGsUNJWF5OlojE%2FjveBlG5jakrBDoIRCqDzaU%2FykdyGE6XjsCcfcidQ2583Uv%2F4FiRH6URgQ6ooNONUXLzVqbXjIBWX3usQTP%2BX8LTmpLRDlJUYhW8Ffwcfc9ORaRQhxE3j17bdfOZVLV7JCYr5EnmgfUBg1nwxKXaVg56oIzyMNM32zD1xUU02kC7F0uTWvuuZbWxQ8TeyvA%2FigmjdwOvVMgkdYnPh1sqH%2Bq3e9L4M7SoNJxU%2FBQ1zWldGQVp7jh7YUpd1Lt7wpX1c6qZxv27%2Fcw%2FsGMwQY6pgHUi9w0NP%2FTXZaJ2yEB5rQ6R7%2B1h%2FobPNxRc70rpRrPaXq%2FoI8sBFKEtb9L%2BmloU0P0wcKjnY5e0OFbOe9ljyKj4MGL9k28CLdc9ftcct5nBDACGxEYnIlt6%2Bl8pQeAQ4eYvCN2PIcRZ1tTMNobzM%2BApUZ7NuFso4jY67f356aJo9hpPIE0WVMCAb5Z26%2BC5tVmHEDaEPY0matBQZuwTO9hzcIti7cj&X-Amz-Signature=44a494ae99e30c41bb41b0d92fa37aba6991b64c9aa1074c34dda3204b7e4a07&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTEKD2U%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDJGqaFjCjMs6DBL9O66iLO5SyccEvXzKv7G5wvasqjCgIgANMnp5xXMHJJ%2FBuPuP6cpK3bC0VxBBF2WmWuIfBcNKcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCx7sdtn%2FE2mJcatSrcAztJItMT691dYjE2SaOmdGG3BCC2o2inV289mtzuridJIYMI5UiO0e65S7w0RGFqGcMHIBwQN1VcAEP8GhpLULxGsQ738Nm8T3%2Bhv3HSxJjT9trsEw9Mf%2FgKtfUkDLqeZpDTIRcItgweTWYRVpbfrL8UFlmqEtoXHx%2BQYOeJW2quCDTzF9fI%2BqNf%2BKADAmuc0Ex0qotbi4yGfamIbfrka3yPa5r6xoDlPE3nLlmbXrzkhaUfdPONObDYuwwz592lvdMKssmWeH12yFuMlmI0WWeKmyvqzbTsolfzDNG%2F61Mggorbyf2WXMutXKcMRgxUovstWxt31oYprwaB1r%2Fj%2FWaFBisDrbSk10SmKIl4kTkoW2IL9AoqP%2BwLB7sm1SRANoYwzaPgNoh%2BuUErI9sbbC3CjzqZpsmeBQGtNgGs5EVjKQIWCbtPIxl55ValGqWWj%2BbC9SX0xLbSU2Ccvc0kP%2BKksqt29h3Ypxu%2BgoyueaTsNfXg1Lf%2BElrYEEeRTiT%2F24xbYQQc%2BDVfyRcXxSBVNQyU%2BfdplHxD4X60v2rP9%2BPsgSMju3rRhAw3DicWGSEhllMUC5ZEE5T1y%2Fn0Tj0toe%2B5Ftaqe5qGGjXyeNIDs4hTNQnEieCKqHtwss5xMOHBjMEGOqUBMJOisazcGxClGLr9BRpLT0GIiE6yR5kR18uyidKY4%2BN1lirJ4lNr52nQ9d0MRKHmsopxp0aI7k1tkrVP8N57jkwcT2TSR0x45DkYnFsj%2Ftj0hU2E41dICOFQsrJu7OY9OO7jZhJBsm7yPGTyMTUQaTlTYbl1ElWIbZJg3pJGVz3c2owuXX677Wh3AOwTbC9fRw6D%2BxASyQ3v5uFCYy7r99ePGqyC&X-Amz-Signature=034a6c281ba72f86349fa3582ca3b089695addbb19d99dff1c2add74539f7919&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654U4NP2F%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGJoC%2FZ4gfDKFEvZyfwfKat6LyphS0vAnagLuWw%2BdM%2FfAiEAr4M32ak1sWA23Rvi01AOdaKy52eUeMGdf3KvZh45qHAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmWjzsZ8HTpIO1cbSrcA0Ql7NSvG1fiWsW8IBN89zp80hQlIXsmFBwlLo4f37Eg6HdIV0nKsw%2Fg9HP3Fe3tsLy1u%2Fhnhq1SCNSmqs41f%2F2pv4rb5iDMNMsBqG5KrfAmuHEspMy%2F137FFVY9gY5gK2cZNfbC8VHWqB0U1fvBaRl21rno9vmcPJN%2BQSCCwJhyEYbYJGrq2iR%2BKuRc%2Bw4owuhlDXeLbNaebhbPy0KDQyGRJ9UqOI5KY65wzvMfOD1W%2F3MJ92wcu8ZcCgC5dlExIe8OBUySVEffuIwsIrFw3hTKLFJp3yzUjrIaICWhLhateMMUXEiUWCxAsovIM2yFf%2BjVsq19thYqtJ7V1KS89RJn2dl5xKs6xNbvCrRkhy%2FruFp9XjRJY666%2BD%2FXEHrpXW0XTSYjV0tqSsFacwIOifr4g3bo%2BBUmb4Qc7J50TMrWNFXA5UVoFSc42DnVEnslletOdz5MfxMH2bHmGiiawCeIivDjCs9cLamPlNX1qRZH6khrGxnba7kcNvZ3L9MbojDgazK1S90z4kx4Mc%2BwzfjHCMo1qBYOTrVEqE7n47Ht4rFXTDjvEycuFb666TuaBf0vHSuYal9ZshHhzduMAzIRC13ndyqsOtrYNCHyPctvDxWfayr%2Fp7pKm0flMNLBjMEGOqUB5buu95Ex65Ew0XqFTUZDVanPlEkChYWzuXynbtFOoyCpm0dcaXEWBwnstRoX56tmDca%2B5BlHhjR3DOOn4Ndb2QFp0%2B7Ue3fhPHKU625Eznvr2DtLhEZLfMUqFSBWQ9FMakv4yGCbkjFDY349jZLpcA2ia0uL2EGJI24vtws72m%2BTlfJFORb9qZBuR4QRe97Qi1Bh6aJ50v8mbd08c8%2FmD%2FNVAu8Z&X-Amz-Signature=fd5ea9c053c7d58cdec968832a5d403c1040a36b2437befceb9fac666c1e0a56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FN7GWMS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBTqSJndO5ZP5PQLakQ7%2BBzZE61t%2F4ftNns343ZnS6eQAiBGsh%2B98rA9HJnV3rB0UvQY%2FzDXz4lPi5KhgwBxmai7sCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGkXcwYcGrmmJPAmnKtwDK5C7wWVOmyLp2jSfCl69hcWo3uwsl7hBHHo0gqbx5d0dYVkw%2FPQYU4Vd0xfdjvUjM7AnHiPwn%2F%2Fp9C%2BE1uVWSWXrET0kkWYwnosjEarr%2FWvb1DimSFS%2BWBrrHlE9dyKcZnbp7MVBsgbCc%2BsDIed6rfCqzsLtuBF7JcXXmBIsbdJ0HvH9AL7MzH3Xi%2F1RifoCpI0LFLSBEc%2B7lcVAQuNWut5hlIG1ZO7P8e0n%2BoHVj3BNsfmHuNfZ3bzmY1QXbpzdpmS8NVLZgRi66AptMsBWOFGWdN%2BFT0%2FGSP7oMCd2AL9RVha7FZcAN5PNtgyJU%2FoXKG3eluT%2BxWr%2B%2FE3fBwtBI6NXdUkfcRxCwmnRGsUNJWF5OlojE%2FjveBlG5jakrBDoIRCqDzaU%2FykdyGE6XjsCcfcidQ2583Uv%2F4FiRH6URgQ6ooNONUXLzVqbXjIBWX3usQTP%2BX8LTmpLRDlJUYhW8Ffwcfc9ORaRQhxE3j17bdfOZVLV7JCYr5EnmgfUBg1nwxKXaVg56oIzyMNM32zD1xUU02kC7F0uTWvuuZbWxQ8TeyvA%2FigmjdwOvVMgkdYnPh1sqH%2Bq3e9L4M7SoNJxU%2FBQ1zWldGQVp7jh7YUpd1Lt7wpX1c6qZxv27%2Fcw%2FsGMwQY6pgHUi9w0NP%2FTXZaJ2yEB5rQ6R7%2B1h%2FobPNxRc70rpRrPaXq%2FoI8sBFKEtb9L%2BmloU0P0wcKjnY5e0OFbOe9ljyKj4MGL9k28CLdc9ftcct5nBDACGxEYnIlt6%2Bl8pQeAQ4eYvCN2PIcRZ1tTMNobzM%2BApUZ7NuFso4jY67f356aJo9hpPIE0WVMCAb5Z26%2BC5tVmHEDaEPY0matBQZuwTO9hzcIti7cj&X-Amz-Signature=0c567ff736be28595edd0667dd0b1302a5e9d553fe72f667bcbcd6c895305d24&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
