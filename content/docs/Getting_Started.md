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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4SJ2GY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFfGudCDhncXg47m0reUcsHEWAHOjd3T5h1N1l%2F8ukmeAiEAhDqQ5eZNSXXM65%2Be9r%2Fs%2Fz9kZeosVUF3Dg43uEAwj1EqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQI0CA8XBMZRzhK3ircA7NSRycVgc%2FMt6%2FdHADWGNtKUbOng21QzWQG%2BF5c6VBsiY2WO7qg1RqZjvFg983ZhexL9FiVWmI9Y%2Bmm5MFxe6pC7TExec7CnKo9PVGqorej0hVwjJSt2pZwLrDqiiSzVc1TD3Mtm9RzPg11rhk5wmMHMvcPJ1sBxdZmp8yEkn6ClP7b2HkqQnSl4Q2ZDediNYyzVRv3T%2BmZnYjKZmjs8BOkDBhX6%2Fti0AxnWRNAempbT8HbWSu6qb9djyMFyYrQhoabhiXavVHWK03KfjCxq1Qo%2FDxAv6AFddmkN2qI3CwHDofV53pPaA1HN9znha3ke5l7FFQ6WajLyJEceOgGrG%2FLi6xeXvXpJi0utRL9jVaDiOKwIkdinUvYPsv%2FWx54daNZZhATSTGlV2EP5do5qJzrJiy1RO6PTTMFNWX4df7gKq4oK7KixzIqwpppIlz2OtJsQ21j0OC1cR4sWdhmyIzr657a3WIzvQKnQraFmJ%2BcH3MFkCvPH4PCnimgcHgulP41qYIrUHzKFlqGB1YVM2PSEZ6rbDlcHQ9wm0v5KGZaRjgJabcLoVpbC7xWEOMhMR4r6hC6g9ezMGcbmlxQm7gVRlxG16bx5jILzOAZPPVMjkEQz1davaWXmThUMLru378GOqUBnHCDRpETeLSvTZQ6eQSDdM6s81kJ1GWEQ3sdyhjU2pJIk6yNzP5d%2FMWBHOUpRP2osS8K6XFpRpbmWCW7%2BAcpFaUz%2FpjvAKYARcI9mJUY5fJWGmKBSVFGj8vmizx3b3ZAJg0E%2BKuqgH6vPO39mmBDdltZh2avTb7mAszoPJyWgxBZVO87Bbe4kxkrdhelohTAR%2F%2BEFoUuV2doDH6CaYaucu6viq6g&X-Amz-Signature=06b742c40d3b86b691bec185e392065eb819d914616bb5621d24095ad5c0c3e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4SJ2GY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFfGudCDhncXg47m0reUcsHEWAHOjd3T5h1N1l%2F8ukmeAiEAhDqQ5eZNSXXM65%2Be9r%2Fs%2Fz9kZeosVUF3Dg43uEAwj1EqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQI0CA8XBMZRzhK3ircA7NSRycVgc%2FMt6%2FdHADWGNtKUbOng21QzWQG%2BF5c6VBsiY2WO7qg1RqZjvFg983ZhexL9FiVWmI9Y%2Bmm5MFxe6pC7TExec7CnKo9PVGqorej0hVwjJSt2pZwLrDqiiSzVc1TD3Mtm9RzPg11rhk5wmMHMvcPJ1sBxdZmp8yEkn6ClP7b2HkqQnSl4Q2ZDediNYyzVRv3T%2BmZnYjKZmjs8BOkDBhX6%2Fti0AxnWRNAempbT8HbWSu6qb9djyMFyYrQhoabhiXavVHWK03KfjCxq1Qo%2FDxAv6AFddmkN2qI3CwHDofV53pPaA1HN9znha3ke5l7FFQ6WajLyJEceOgGrG%2FLi6xeXvXpJi0utRL9jVaDiOKwIkdinUvYPsv%2FWx54daNZZhATSTGlV2EP5do5qJzrJiy1RO6PTTMFNWX4df7gKq4oK7KixzIqwpppIlz2OtJsQ21j0OC1cR4sWdhmyIzr657a3WIzvQKnQraFmJ%2BcH3MFkCvPH4PCnimgcHgulP41qYIrUHzKFlqGB1YVM2PSEZ6rbDlcHQ9wm0v5KGZaRjgJabcLoVpbC7xWEOMhMR4r6hC6g9ezMGcbmlxQm7gVRlxG16bx5jILzOAZPPVMjkEQz1davaWXmThUMLru378GOqUBnHCDRpETeLSvTZQ6eQSDdM6s81kJ1GWEQ3sdyhjU2pJIk6yNzP5d%2FMWBHOUpRP2osS8K6XFpRpbmWCW7%2BAcpFaUz%2FpjvAKYARcI9mJUY5fJWGmKBSVFGj8vmizx3b3ZAJg0E%2BKuqgH6vPO39mmBDdltZh2avTb7mAszoPJyWgxBZVO87Bbe4kxkrdhelohTAR%2F%2BEFoUuV2doDH6CaYaucu6viq6g&X-Amz-Signature=d6ccdcadd9c0ed56fcf0813fe47644881eb7894b9d1e787fafaf133db90decc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5D5PPHB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIATrtLSnpjvoNX5vLvaiInHfmk2HyFrjt5J2vru5Xjv0AiEAieRlIYiZ42nFCZlFY5lc%2F%2FgP7EgaCbKjyJCq1WS0%2BYcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlhtQRo5iO7obiwkSrcA3A%2ByaO%2FsENd4SorosCs%2FW0NSGRN%2FtFWwWe2UsyTJIEIuF6vKC2rWVVgjj%2FMcnyxdj5rK1Vc9LvSkQ69sts7ZlzkOxpW5p17jvWiXbgfFbEUoFisC%2BLF2TU6V%2BoK3SmhLX8rFyKy1vvK4%2BCjWNMG3WafFDAR3CV%2B7nVljwTFKGfVCQPkKCGKFRRAPDdSpkvRguTD1XpyQf6GYsvLm9WtOzCKRtNswdFlwzKxf1mrcQf7mpvRkCiwR09vdwXX5IcXdU0A5r8Yz0cbHa%2FFrq8StO50FvSPrP5exMnHsCewWscybYcibDGohNLmtgz8eEEFKizD7g425G41B5zNceHUhdVy2MOG%2B%2FC0zRWriCV93JMv6gg2TspbczkZtYZFH1CmvOyjqxhv5q%2FRNO3y8IhQEZ1KDmDyK1BnBAir7MB%2Fsa8xOxokf3LhRG3onn7q7ltIHIh07ArTMnRzxmtT4A4pGUjGBnjj766lJZCWHyGVCReSqZtYEZyFnYI8vDc1N11eBV%2BBJXOr2lw%2FUdyPo4dcKBlAhQKLHEVMeJ3ksmtSqamgPnImJTMG0HQTBNXkjpqvbgy1hulqcaAY69v5Mcf7SVB4njnqLIWFy9zfavXm3Bn3qQxE%2FyINs11f9ZbDMMHu378GOqUBQDUuyvQ3msdivDJlDVGV0idzMujk24GAsUIIJZf7GY1184wmtmsGRNpIdimiYtIL1L2fuw4Ohk2uehUHjW%2F061CC16rRb%2F4AOwOAK1BTRZuAPm%2FwT891oWfChDnPHvcJ0cW83WUJFkLsWDReOBoC8iz6jsssfv1pUG7QYPNdK68LTKyRLnTI1rbfXP%2FIYGIjLjfHsnJu3PL32hK%2B%2FYUhx8CLwKSL&X-Amz-Signature=7c2a80b4c5aba4dcf95dc26dcec03b163c800acc3fe357e290c0ea04457a895c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YRDNO7X%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICfJIRBmUttD6enpQOEiBxhxlI1KYNKwIWluJxpBh%2F7uAiBVPLZKicRxiP5vRzmUQDrlbCPxlfZiSNYosv2vZeUdNSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq38%2F3FSB%2Buu3iiTXKtwD4zQqqqImw9yBOcBLGz%2FIC7F7sC8TzyqEqOxD%2BfZ%2F5dJJ4AIrpq%2FjqZFoR2RoC0CKuvE7p%2FONFrtdL%2BSnj6GRPuz1STT5bidpjTT7LjMWIi5RmbbN2QG5cJNisTwK0KsqfDTLPN8Lj6Lzk1LMZ%2BTAfaqH%2BGfChfHywKXUwS6cHfS41TxZhxmJKZGUFXEA%2FVTHulEHTYGjIicNcdx85iecvJaAIV7pN9WcCnKCKOoc8OX8BR4H7LXi2zSoWhl668qZzPqJLCJSYrD%2BbkbyVyUez3TUb9Dau3XTHoG1Z2c%2FkyzxYCndmEM6M52o1BaqqkNPKKEStOmUFrsPoJ7X3%2B0IroAnHrdeGMLQhBsiYOSjryIsleAbti%2FdXLMga5Af6NsiDvc%2B3hl8OfGS%2BphBrlVsB3kIyiCIVa9%2F5y4%2Fgm7bCPhbF2sizPxNF2nlzKxUiMFJa%2FdZUUJvghwaO4VDCK%2Fmjab%2BHyeZ3e1mlFk%2BaeYsgWclqNFkdBPPkLGfJI0dETaL9a16usO27zxUHPYA5%2FMePL%2FZry%2Bbhot%2BRR3UUJlwfG2aR270ZBRANPlUsbHmq1V66c1d%2Brk5dCSJAnPAL68IeKR8Nf%2FLtPQD1z0nTbfd6ZPR0bYKNjbzQZB0VZYwyu7fvwY6pgEzwYi6hAoklgI%2FgEzEJFxw3rOAoTPVy4dnLPz9o7%2B4rhKzIaB0LzLQQ8G%2BDq5%2FrsThSaHk7hP6wCqd1bJY2lyNiCVx2jEEgxdIb78VDNt1Hx21jHEbU11wr6Sp4nf3nV2tnhB813liodc2VYk1oWoqX7dGNdZUhBEHXpD%2ByLQ53yilrCCrRtQhIe1ZY2y9cMsL2XpO0MsJcMgkvj1fJ4C3iB95SZlR&X-Amz-Signature=b4716a0c833ad76fb87315da2f13d6c5220009fcd33569e253c6b4f8179cd323&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4SJ2GY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFfGudCDhncXg47m0reUcsHEWAHOjd3T5h1N1l%2F8ukmeAiEAhDqQ5eZNSXXM65%2Be9r%2Fs%2Fz9kZeosVUF3Dg43uEAwj1EqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQI0CA8XBMZRzhK3ircA7NSRycVgc%2FMt6%2FdHADWGNtKUbOng21QzWQG%2BF5c6VBsiY2WO7qg1RqZjvFg983ZhexL9FiVWmI9Y%2Bmm5MFxe6pC7TExec7CnKo9PVGqorej0hVwjJSt2pZwLrDqiiSzVc1TD3Mtm9RzPg11rhk5wmMHMvcPJ1sBxdZmp8yEkn6ClP7b2HkqQnSl4Q2ZDediNYyzVRv3T%2BmZnYjKZmjs8BOkDBhX6%2Fti0AxnWRNAempbT8HbWSu6qb9djyMFyYrQhoabhiXavVHWK03KfjCxq1Qo%2FDxAv6AFddmkN2qI3CwHDofV53pPaA1HN9znha3ke5l7FFQ6WajLyJEceOgGrG%2FLi6xeXvXpJi0utRL9jVaDiOKwIkdinUvYPsv%2FWx54daNZZhATSTGlV2EP5do5qJzrJiy1RO6PTTMFNWX4df7gKq4oK7KixzIqwpppIlz2OtJsQ21j0OC1cR4sWdhmyIzr657a3WIzvQKnQraFmJ%2BcH3MFkCvPH4PCnimgcHgulP41qYIrUHzKFlqGB1YVM2PSEZ6rbDlcHQ9wm0v5KGZaRjgJabcLoVpbC7xWEOMhMR4r6hC6g9ezMGcbmlxQm7gVRlxG16bx5jILzOAZPPVMjkEQz1davaWXmThUMLru378GOqUBnHCDRpETeLSvTZQ6eQSDdM6s81kJ1GWEQ3sdyhjU2pJIk6yNzP5d%2FMWBHOUpRP2osS8K6XFpRpbmWCW7%2BAcpFaUz%2FpjvAKYARcI9mJUY5fJWGmKBSVFGj8vmizx3b3ZAJg0E%2BKuqgH6vPO39mmBDdltZh2avTb7mAszoPJyWgxBZVO87Bbe4kxkrdhelohTAR%2F%2BEFoUuV2doDH6CaYaucu6viq6g&X-Amz-Signature=d71573f6963d67a10cf47d687cb8935dad380d71f5cf0579451ad2190c81ae30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
