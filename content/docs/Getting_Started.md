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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3FKXEB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3N%2FL%2BJQIF5OgH7H2hKtYchuypWR5HadKnpQumg7eRMAIgI%2FuRnp1ZLsdIlboJKtP2XlrnU9Vq7FksrnmdgwCANq0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOdswrOz3g%2FuAmpRuSrcA55xcaGUPOh7P2LB5InjU%2BHYWiwsvZ40cvqcFlHfgndY1RB7JC0EmsdPZXKblNHeHqxG8boMn9W%2BeyMBbwPIKXT4gJzl%2FIUh3QWuR%2F00rd%2FbBEg7Ck3%2Fa%2FbW0PIFlX%2B8ei4Y8xkHFa0ostA%2FnpHMzlOLNrw65g5MbITjpOK9fVsKzP00kgY1NQJFG%2FJY5nHd0LnboCp1EUqWu6n3a5y8RmKhEktMaj78ea3TvzQWHbeUNZQ73WyPWV8MSe9b0mNpzE0%2BWpeNYgqs8n2PyS7E6VEXkpGmY5HdBH2qPwAn3kh%2FA4xwtfGEhctZzN%2FZQLkWW0blE7lepRxWBiHkrTsN3Xo0YQKKqKUKJHq4hpIBhy9NuNhgzoJ%2BCQVN4EQXkdgd2MW3zzShNpNb0T5eHd2oAPfGqqblSdo4NR5GnVFh3LcIgCh58X4gZ4MDYyq9aor12l945yOkArPUEuazXZP%2FdR1juiSROTEQvvtKqb9rF4srf0WSBggsdD0GBvu4ARndqGXpotJRG36%2B8NPMq5ERfPUQlm5V5tCfxBHJ%2BSz6n3e2aEqmNven5uIya8aueOR00peF8KSUqFQU5qH%2BqzJ9On%2B57rSzLRrdytHHfbRUg1AfYbhR1RxtGQDWUtpwMIHuwL8GOqUBmXRlrwEJUhkB1SFCQPDtqSlVhISKwzRtf14J44xikUvgfQWBo8I2Ei3TfjnrUuRHvoJD6Sz0bxxkvPCyN84%2Fs2VjJ%2BHgsxX%2BFnUyvfkP21WtkS7KXCRfQdtr7Jj4UBv4Nt6HP4Uo2M7fK9NavhioMYCYDUdNfGdXbhFaTmd7WfLVNT6uDLTpB67joDnk%2BUj0Y9ILweeD4SDsMgXdJfBQ9e3adeTO&X-Amz-Signature=8a016a3bf38c1956bde0a1fc3a08e9260791516e05274c21a9d777c6248e1119&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3FKXEB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3N%2FL%2BJQIF5OgH7H2hKtYchuypWR5HadKnpQumg7eRMAIgI%2FuRnp1ZLsdIlboJKtP2XlrnU9Vq7FksrnmdgwCANq0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOdswrOz3g%2FuAmpRuSrcA55xcaGUPOh7P2LB5InjU%2BHYWiwsvZ40cvqcFlHfgndY1RB7JC0EmsdPZXKblNHeHqxG8boMn9W%2BeyMBbwPIKXT4gJzl%2FIUh3QWuR%2F00rd%2FbBEg7Ck3%2Fa%2FbW0PIFlX%2B8ei4Y8xkHFa0ostA%2FnpHMzlOLNrw65g5MbITjpOK9fVsKzP00kgY1NQJFG%2FJY5nHd0LnboCp1EUqWu6n3a5y8RmKhEktMaj78ea3TvzQWHbeUNZQ73WyPWV8MSe9b0mNpzE0%2BWpeNYgqs8n2PyS7E6VEXkpGmY5HdBH2qPwAn3kh%2FA4xwtfGEhctZzN%2FZQLkWW0blE7lepRxWBiHkrTsN3Xo0YQKKqKUKJHq4hpIBhy9NuNhgzoJ%2BCQVN4EQXkdgd2MW3zzShNpNb0T5eHd2oAPfGqqblSdo4NR5GnVFh3LcIgCh58X4gZ4MDYyq9aor12l945yOkArPUEuazXZP%2FdR1juiSROTEQvvtKqb9rF4srf0WSBggsdD0GBvu4ARndqGXpotJRG36%2B8NPMq5ERfPUQlm5V5tCfxBHJ%2BSz6n3e2aEqmNven5uIya8aueOR00peF8KSUqFQU5qH%2BqzJ9On%2B57rSzLRrdytHHfbRUg1AfYbhR1RxtGQDWUtpwMIHuwL8GOqUBmXRlrwEJUhkB1SFCQPDtqSlVhISKwzRtf14J44xikUvgfQWBo8I2Ei3TfjnrUuRHvoJD6Sz0bxxkvPCyN84%2Fs2VjJ%2BHgsxX%2BFnUyvfkP21WtkS7KXCRfQdtr7Jj4UBv4Nt6HP4Uo2M7fK9NavhioMYCYDUdNfGdXbhFaTmd7WfLVNT6uDLTpB67joDnk%2BUj0Y9ILweeD4SDsMgXdJfBQ9e3adeTO&X-Amz-Signature=337b31f0c074379a908223910b08e590a55e8ec8ce2e8302945c3ecbb3b476d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TNPEP2%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs0AachMqMUtg0ksuoJQKMHtKEyM9ScolAe5XZr28b1AIgVxTxdVDjxCvNQ4K6TW1ZEm%2BsTCVlsrkP3hKlnJtEVPUq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOth21t1TyBHve20dyrcA%2B%2Fi%2FClhjYmckrMgCGD5nuXz2mLg5bOC%2BQCor8%2BdtAN2gYtDGWMj%2FM9ndTsV7bMTeg6UBWqVzCniaeia4keuSOj%2Ful1ECSZzQkYoILSXWtQk3sEkVWyQ0qhcXI%2Bkp%2B6MBGt1L3XzaOK1Rwbu5HqtriBihYjGP%2FLVlen2YatKWD%2F%2BejtXEt%2Ff%2F%2BjvqF82qquqS%2BVrV491C8ogPJJGkObCVKzZ5CJnRv%2FhoGQqaIb4ThaupsP45QK7kNwxtUMoPYRxAd0ePBVV6kJKseINVZKAdfbADhPbdBlKG4n%2FglmnzHnUClygPXchRahN%2FCwsafvST6NBlFXk5zQ%2Bzx3qg8Y4QOpsxBEbQ6mEE5YCywSRtpHqwtgLrguisNMkHTdhWIJHToU%2FMVHl99J3LFom%2BPgysl0Rc4RVxfunONbAzm%2B1%2FKyFYJdldtS0MY7YNgWGjW9urNiLLataPxegVJHbl17%2Fe3yR1lHDqeHkc6NJyreFQdjz%2BSde%2F%2FMhI8L5kPUDbY%2F8Vgm0a3SXkxcg5sBbd8pjegxIIcJplDQ7u%2FhlfyYtEnfKAEJPw%2BAJbnfqocMaDqZctAt8d1Z5%2Bjy%2FKYKnEVtJs1hfqJS%2F1N0D%2FLHJXZzxUXywdkYmwNvZ6oZb7%2B6uMILvwL8GOqUBycObtI1YhaIuPS%2BPrnyIG82RgmXFLGF%2BUnq2D%2FCJkDeuvipU8zoK9pduZJfFpfNA3ObmDTMUnArVbphJuckpTtZwT8mL%2B9sPFD92v0vnTf%2FJa4bmLvIta4kAsIZUOcI%2FvBUk3Zh2Xdeo3ptGGLz2vTMomgC68gHBaXXEk1nZoyehSUKgkla7VmFMsu7uXi%2FfYdcZu3fe%2BLuwqZI8cfE4T0j6M72%2F&X-Amz-Signature=62518c2ef810c49f1facdfba1112dd959f9c21e6339d4b39ab7dd294da6f42e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABEVEJM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfivavC17vKbH6oVPZArXK%2Fow5NpdE9aTu03S5G0q4wIhAP93QwHwEe2bpaBaAdbuo9mMpknRFLrr2QlR2PmSjDNJKv8DCB0QABoMNjM3NDIzMTgzODA1Igz3xikl1ecbSQHOrpMq3ANeMRdHvfJiIQGb0rejzLOVPF1JkwZVICR5ZcvUlDaoMY3gGEU0PeGghrVfByUOHH7LJqXOPzSevKZtpiMKDTEMsMdSmzC3SlvsQ9Pj%2Bs8x9SFWCz8rPn%2FBLuJvcN09hBoloX8x8tzpor0k1XCnH2Zl5WAHSdmRRr%2F%2FjZFYD%2BivG8irMLsgO5tkgaUxr1zj%2Fom7HKXwoY75ZudSYnfee%2F8FToMv4%2BIftj8wd1%2BkAut3bLiSPxlnN3bq%2F4xXfZ8vfqltywGeyFgIzuZ%2FNyWPVX5r5ofaN6GmUS56OFlBhuM5BXO8lDg3kM6ngljCbO6YG9Riht1dTuXOpqijt9V9haeU16vjb0Gmh58QRWfY90LjGESsBCH0cP1caiBQzsCrc2ORklGADKc2kR0REGQx8PwnDYPweYoN81SZ9NeiEnzfsKFxk6JHoLBrdWkII1h8e0crICetsjuW5N2nvnjAL7lkGZDf1xuXCzHEi6osO%2B8E0qBSjiuUfoKyWMKFkixSVzfwgzWg2tCn6n8O2MbKppMUz0gTCq0Dh7TgTdftp5so7mhZOAnIxp%2F2ix9uJzJhXfdtGMddDflGOJYCdsXOM5PPMgbJd564wsrKR4byDj%2FEFAvyw7wd92M0XhWLjjDp7sC%2FBjqkAY1SZTd6HoTFHpNLivJjaUjPCXynCPtl91szglPwbQOavAxS%2FJnKnC8pQ%2Fljg8vsXSC95wuDCJ74lNRzLlFgC9PDM0AqbtBjV9pRIOtkfO6%2BLjT9PGa4RI8laKtu0yTQcXKWf6zW6CKUt9nSUwfxYCarHY%2FUCwSii2H8f7%2B4Si6RkMXQV2XlUtVgN%2BfT1DxnW22j1ttt%2BC1jm%2FlA5NNfupdgokn8&X-Amz-Signature=4849d1bb598d25445d419a4b150d78bf8362cbe0bf57b689f5d5847270527003&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3FKXEB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3N%2FL%2BJQIF5OgH7H2hKtYchuypWR5HadKnpQumg7eRMAIgI%2FuRnp1ZLsdIlboJKtP2XlrnU9Vq7FksrnmdgwCANq0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDOdswrOz3g%2FuAmpRuSrcA55xcaGUPOh7P2LB5InjU%2BHYWiwsvZ40cvqcFlHfgndY1RB7JC0EmsdPZXKblNHeHqxG8boMn9W%2BeyMBbwPIKXT4gJzl%2FIUh3QWuR%2F00rd%2FbBEg7Ck3%2Fa%2FbW0PIFlX%2B8ei4Y8xkHFa0ostA%2FnpHMzlOLNrw65g5MbITjpOK9fVsKzP00kgY1NQJFG%2FJY5nHd0LnboCp1EUqWu6n3a5y8RmKhEktMaj78ea3TvzQWHbeUNZQ73WyPWV8MSe9b0mNpzE0%2BWpeNYgqs8n2PyS7E6VEXkpGmY5HdBH2qPwAn3kh%2FA4xwtfGEhctZzN%2FZQLkWW0blE7lepRxWBiHkrTsN3Xo0YQKKqKUKJHq4hpIBhy9NuNhgzoJ%2BCQVN4EQXkdgd2MW3zzShNpNb0T5eHd2oAPfGqqblSdo4NR5GnVFh3LcIgCh58X4gZ4MDYyq9aor12l945yOkArPUEuazXZP%2FdR1juiSROTEQvvtKqb9rF4srf0WSBggsdD0GBvu4ARndqGXpotJRG36%2B8NPMq5ERfPUQlm5V5tCfxBHJ%2BSz6n3e2aEqmNven5uIya8aueOR00peF8KSUqFQU5qH%2BqzJ9On%2B57rSzLRrdytHHfbRUg1AfYbhR1RxtGQDWUtpwMIHuwL8GOqUBmXRlrwEJUhkB1SFCQPDtqSlVhISKwzRtf14J44xikUvgfQWBo8I2Ei3TfjnrUuRHvoJD6Sz0bxxkvPCyN84%2Fs2VjJ%2BHgsxX%2BFnUyvfkP21WtkS7KXCRfQdtr7Jj4UBv4Nt6HP4Uo2M7fK9NavhioMYCYDUdNfGdXbhFaTmd7WfLVNT6uDLTpB67joDnk%2BUj0Y9ILweeD4SDsMgXdJfBQ9e3adeTO&X-Amz-Signature=0e29d92aec419a6e7f01d00cb2a88171591d668031eb6560c036d23c8fe2a421&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
