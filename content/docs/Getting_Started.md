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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DVOQRM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDEhwqHPCToCwcCyaLCmKL6Fh%2Bq93w7fHk8bjcbEKFIpgIhAMPK9b0VJCw6q1pMt3fe43mQ5xndqBhyZ73e7S%2B4lNxLKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpLdVMYYuKCxdfENYq3ANvV0m0j%2F428Toh1C2y%2BjjqyMJMXaXieZIpRMrbWnD6ny7xxs%2BYLsUTllUNqEzhL%2BXKUSvMHkKXFGuIigLdPTwg%2FqUhSgqJyR%2BFGAv53NOfNnN97bMc5wNBtJedlg1DhmRWBkgTIiXQUbflNJzHR7XI00QmEH5XJJa3ucQYbtjCMtjBbsSfIFkjFjs6V0fVuTJB3EyelLHk3wRK0e8dqFEG5MMzQLuijwAeesgTKkzb%2Fwu%2BTPFpZLqKS5oD8%2BxpGKvJ63cldGM7rV%2BH0rnFlqDhsfQDk77f8sY1a%2F%2FammF69GYOuSQCFoRhqJG0sgEn1zDEOBknQQ7%2F7PRwOl2%2ByNWSErACR4xvrBjXK655hHaxOTagetQjW5t1CA3gpzOzsZBKL2HpiuSptHKnUjt5efXmRUs4ZAr9BofLpnAQZobOwDnaQ2nNEn98t7vjn1HbheekAqkSZgkjo3nM4t1dvTywdivCyqQahM%2FaGy6Th2DbDHz1PDSoUl1CNYasFCo%2Feh2oLyxhQdteUqstN1ZDpoGZpSPQOqclBsVPTd%2FUdPn5DHujQWCVRjoXM1zU8QlkT3DVLZPxFU5p1ukBDURuBaHX9HcXVnQWMpCiLnRYSChWHVqBMyJOTW05rvkkeTDZupvABjqkAdVVBX4XDw%2BAlJKRSjvHix82v6RfQPKHJTgpg0CQWr%2BsSYMM6bxGNqOyX95wVt7OV0EWGUjMhMdsWXeNuRbDTFFlNMTY75cMht6hH3oo%2F%2B2AJi2pnlCPVv3R3OyvUVMcphh7gv4HgHmDPpkXocD4njjaQgGKnK5iDS5KRYtV5cwzGhslUdT9Kdi2PcEovSKpxS%2Fc2FEWKJ%2FpfxI33VwUQBFFjPZc&X-Amz-Signature=4c03c5cc49c02cb77f7800f31b5dfe7b6ecdb2f8869b03493ff0ec5c23fdd299&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DVOQRM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDEhwqHPCToCwcCyaLCmKL6Fh%2Bq93w7fHk8bjcbEKFIpgIhAMPK9b0VJCw6q1pMt3fe43mQ5xndqBhyZ73e7S%2B4lNxLKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpLdVMYYuKCxdfENYq3ANvV0m0j%2F428Toh1C2y%2BjjqyMJMXaXieZIpRMrbWnD6ny7xxs%2BYLsUTllUNqEzhL%2BXKUSvMHkKXFGuIigLdPTwg%2FqUhSgqJyR%2BFGAv53NOfNnN97bMc5wNBtJedlg1DhmRWBkgTIiXQUbflNJzHR7XI00QmEH5XJJa3ucQYbtjCMtjBbsSfIFkjFjs6V0fVuTJB3EyelLHk3wRK0e8dqFEG5MMzQLuijwAeesgTKkzb%2Fwu%2BTPFpZLqKS5oD8%2BxpGKvJ63cldGM7rV%2BH0rnFlqDhsfQDk77f8sY1a%2F%2FammF69GYOuSQCFoRhqJG0sgEn1zDEOBknQQ7%2F7PRwOl2%2ByNWSErACR4xvrBjXK655hHaxOTagetQjW5t1CA3gpzOzsZBKL2HpiuSptHKnUjt5efXmRUs4ZAr9BofLpnAQZobOwDnaQ2nNEn98t7vjn1HbheekAqkSZgkjo3nM4t1dvTywdivCyqQahM%2FaGy6Th2DbDHz1PDSoUl1CNYasFCo%2Feh2oLyxhQdteUqstN1ZDpoGZpSPQOqclBsVPTd%2FUdPn5DHujQWCVRjoXM1zU8QlkT3DVLZPxFU5p1ukBDURuBaHX9HcXVnQWMpCiLnRYSChWHVqBMyJOTW05rvkkeTDZupvABjqkAdVVBX4XDw%2BAlJKRSjvHix82v6RfQPKHJTgpg0CQWr%2BsSYMM6bxGNqOyX95wVt7OV0EWGUjMhMdsWXeNuRbDTFFlNMTY75cMht6hH3oo%2F%2B2AJi2pnlCPVv3R3OyvUVMcphh7gv4HgHmDPpkXocD4njjaQgGKnK5iDS5KRYtV5cwzGhslUdT9Kdi2PcEovSKpxS%2Fc2FEWKJ%2FpfxI33VwUQBFFjPZc&X-Amz-Signature=cf038e9d31e0001a26fe2487658896881a84c604beaac2e178411d8b0a71b9b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCWRTACJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQC6D%2Fn%2FefYTDREIgPlQmTb4cSinM9%2FYFoY2AgZeHJ6etgIhALI6tpq%2BEbs58eVVKtGLvONnMnweW1Qjf4nRpP5Y5mCdKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8Bbf8srhtD6ZhfKQq3ANT7%2F%2F%2Fg1%2BsiTiblSePbwF%2FZ0CK931BbZPIWhNQ9wwxbKAQYIOsA8S%2BCZTq9SPJHobY%2Bz3Ma58VnncRWRqmIIUQ0hrd0Vu%2FGGXcm2zcsps0yAFhaGqHg3rFMgPZVYoVNO46IDNc5HDmJHrlr45%2BCrYXOyRWF%2Fo%2BM0f3YWT0noLbaKOHcvj8mr5Jx8CMruP0bJ33d8e%2BOZ7ZubLE9Sm8M1yGJRoLPxzPf3YKDGLJdF7q1Ujrw6LXy2hlvXgvXol%2FnjUnW5xSLBCQOFN68t7ATzIzpWFlqq0ucDCr%2BbuRCBILcqT2hA%2FfCbNckJUQY0kX0PK9TJL8IkxIZCGvcpQD02Oewiw5Xlbg0iBWM%2BgQolVIO61sRYXlDPQj6dbPZNYytd1jUMBrmmh3vaHTVqJCjPAH5FVBwe6YlqwT%2F87pg39Rmj%2FFkDk3KU7eaNVzpxQSADwuHNPuenHMpOwRBnzhpVAj8FyY7SqNxkyfIjTuCzBnScaESOGQS1ShN%2Bvy4Ugk5r%2BckJPCHDbgyz4P8cks%2BQDKDuBCeGKR9CJ6sjWNONZJxXBcmfqLMutgvoHrwCgoa5LnIfv7Xp%2BJuZRWlxLkrt20bZJuaMW5k5s9jR2qu%2Brqp0P72bVn1nzYbQNOBzCMu5vABjqkAR7FEd1W4MdmntkdtBvniLhXPNJ0PzKcp%2BpS5r1kfDdp6ygrCoI%2FBGlmsrsFlsbDfk0vUtRvHLqquhk1GkydxNamK2YZqTGt2rJZ41V1Su%2BFtcOlA4z14P0Pt%2BDCmc%2BUYhRgHFg%2FHH%2Bxd%2F7mquyghiwH7KNXvMuoi22MNB0cBWRDJpgYXweHDjLuBxCY6bUtRR71HYq8Xlnp8M4j7RySpSQFHgbk&X-Amz-Signature=a8a350258eb7f51b4217a537b70aa8270bb37958fec165a96e1525713ff1c05a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DFTO3RQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDWlhiLACXO0oxKLXLgkUvPo6GAoYetXKAMIRW2tGzJIgIgasWefxTLwxv%2Fm8JeaYUWcPhTYOtLPt6zntmg62AkdpQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSl60FD9ErGMjeoHyrcA8%2B%2Ff%2Fasimm%2B%2BBPtxOH%2F8Qc%2FGy4NBHa0is%2FZIKOtsLEeo6tDu1DomlmB1Eji01Se17SAi63XwCi0eiQH0dZTFbPh9xz8W%2B8Zre4vNcj41XzfddigZrdq13%2FxOCEjPmQG9StnUyuYC9JTHbiCkFajn6NiejlYbR0F2YRenZoFCncD7spOe4lmQeE3Ek%2F4SPWKxUmcovc5xN4jmaSaucXOwns25mmUIb3XxrJqFI0fRdI%2B3mK%2Bb2gap8C1klVg9qmm8q001shY56ATSGjAh5UQpBDcq7aV8LeLVqjnsk%2BremdgdVRev2D9XaoFgqFQtIgeg3OjAuuKlyGoZkzdO7EZwFJHlv77VI1olp0OE%2B4iMfkO32xbCSdBSzD0j%2BmdQHZwRjcrS83TlVHsewJ7eeuiSLq%2BJXUuDpR8IrTYSJLKG9Q5t7Lp3ISwayq5yIYqY%2FmAKuk%2FdOg8ne%2BCQEoV08PxHdg7GSm9uzhiPvsWWNIEb%2FR%2FZbaz88WTjAWBUwcQ7ayEc8Me49Ef2K9a6pAbjPX%2FeHvptWLBib8R6bML6rpyHdyFlnCs%2BHgKs%2BtvZXB5rYlgrKWEc1u16x%2BuLrg8ihyT8eKHqmSQG8cqpc4%2BP%2FgX4gFiLsL1%2FOL5GVE8pbnDMPG6m8AGOqUBbYg9NBwATT4ftaoStykfpJOOjCgp9GAEPjibgJIxKWobTMpJ9yLW%2FHP25kO8xv1S0CVTHZGA6ukV2OG9NuJ%2F1xDmQTSN%2FcbrIVjKi%2BDRuDg49nzl5NpSl9jmZuwa58uKFZOo4vr9kuBiSHRMQd%2Fi0rnPDRw8PY3PmQtaho8Fho45wyrSCAE3sqmqM729LmDl2xmbSxUka3h%2FYsTouKAmF%2BhAQMK2&X-Amz-Signature=c17f12a5373abefac4d0e17195194e93327f6dc4c0ba0b047f04faf2d387e9cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4DVOQRM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDEhwqHPCToCwcCyaLCmKL6Fh%2Bq93w7fHk8bjcbEKFIpgIhAMPK9b0VJCw6q1pMt3fe43mQ5xndqBhyZ73e7S%2B4lNxLKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpLdVMYYuKCxdfENYq3ANvV0m0j%2F428Toh1C2y%2BjjqyMJMXaXieZIpRMrbWnD6ny7xxs%2BYLsUTllUNqEzhL%2BXKUSvMHkKXFGuIigLdPTwg%2FqUhSgqJyR%2BFGAv53NOfNnN97bMc5wNBtJedlg1DhmRWBkgTIiXQUbflNJzHR7XI00QmEH5XJJa3ucQYbtjCMtjBbsSfIFkjFjs6V0fVuTJB3EyelLHk3wRK0e8dqFEG5MMzQLuijwAeesgTKkzb%2Fwu%2BTPFpZLqKS5oD8%2BxpGKvJ63cldGM7rV%2BH0rnFlqDhsfQDk77f8sY1a%2F%2FammF69GYOuSQCFoRhqJG0sgEn1zDEOBknQQ7%2F7PRwOl2%2ByNWSErACR4xvrBjXK655hHaxOTagetQjW5t1CA3gpzOzsZBKL2HpiuSptHKnUjt5efXmRUs4ZAr9BofLpnAQZobOwDnaQ2nNEn98t7vjn1HbheekAqkSZgkjo3nM4t1dvTywdivCyqQahM%2FaGy6Th2DbDHz1PDSoUl1CNYasFCo%2Feh2oLyxhQdteUqstN1ZDpoGZpSPQOqclBsVPTd%2FUdPn5DHujQWCVRjoXM1zU8QlkT3DVLZPxFU5p1ukBDURuBaHX9HcXVnQWMpCiLnRYSChWHVqBMyJOTW05rvkkeTDZupvABjqkAdVVBX4XDw%2BAlJKRSjvHix82v6RfQPKHJTgpg0CQWr%2BsSYMM6bxGNqOyX95wVt7OV0EWGUjMhMdsWXeNuRbDTFFlNMTY75cMht6hH3oo%2F%2B2AJi2pnlCPVv3R3OyvUVMcphh7gv4HgHmDPpkXocD4njjaQgGKnK5iDS5KRYtV5cwzGhslUdT9Kdi2PcEovSKpxS%2Fc2FEWKJ%2FpfxI33VwUQBFFjPZc&X-Amz-Signature=efaf2a07ba96815f9d94d04390a626540d40738bc0cfbbb6ad2fca877cc83229&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
