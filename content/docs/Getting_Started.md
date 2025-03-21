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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVHBZEF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCoD%2BGi2V%2FjnUQykswKSvT1vaR6oSINBHMqwtdd%2B6umyQIhAIBH54PcOLnBeqEJpHPKuP9Kd101IOg6Hiz502aCZ%2BpxKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxS1F5wIMKUP9oJebcq3ANNDbAbdjcRMcY8XFu2%2BNLVpoBaW%2F4RNr7IlOpfjO%2BPVxcdrz3%2BN2EfDh3D6HK2ndNI3wBeZRlvC4O4D9iyNmp7ffkD2gfADwxhTeAZfQz3P1CxQDvgboiiPcb5uIU3XgXzc9GIXcvim22zQMDpicgcgxEt4y%2Bu5MEAxc2PSE3pNn6V2cePfZ0nYqjDOmJa3dSLCaRyk16rkvtNFBK44zhU9SlJO%2BZW3rudo%2FkzT4sh%2FFb7OAasuAmysyfDEQGtmFC3HeAeOBHMVVRSsrbfm06p56N9YJdu9zYjmQ%2F8hLmmVDD1wR0PdHAgJKarZn0roT%2BeofGzzafuiYY8q3%2BXiHQgM9SVB9NNFR1EZeppp5RAyZv7q6Pz1rEXA3RIdIysWPorKf7Jxz6fGendakzdBuB1Rte7ORiqkRELjxEpJKBi0BNaJRB22y1DFv43gMPSzDMkf7Vz396OkCEB44ddA2yCEnfJHM4Qo7TbZRDxv4nL18dGAGTOrcTUh50q3mWsPMOHVo%2FqHF9qW6Ww6s1XafetejyEjBJfGr3RhaNRKcqPDx2nvDUHz2Gy3bxVv%2FBU8yQV%2BBxBS4zXpXpGrUE%2BenDCcqJfWAnLdPdbW%2FxTBPcErnFyzxe3D2LmcjkcujD%2B1%2FS%2BBjqkAakeZN1KxVJNrN5eNh4%2FxaC9VPklepDZMBZ9vTywvys1EtzH8hhk0r94Zm31QcIXSm0%2FFKAihkUxZPpRVrS1DOnhnxtuj5H%2B2pped1kv9QskfU5XJuxhjp8Tyq7j8dVmzsxk4p9x9CMgxVSWNEgxbdMq2RCDnmJoz8pih4vnufQiEyVeVqbRzzwhBFR6IwRyyfG6oPaV6SoQihr0zhq2XWa83PCk&X-Amz-Signature=6164c598bcad5bbfd9ea47f5a71368efe587e27cb757009f4686b7cb158605aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVHBZEF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCoD%2BGi2V%2FjnUQykswKSvT1vaR6oSINBHMqwtdd%2B6umyQIhAIBH54PcOLnBeqEJpHPKuP9Kd101IOg6Hiz502aCZ%2BpxKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxS1F5wIMKUP9oJebcq3ANNDbAbdjcRMcY8XFu2%2BNLVpoBaW%2F4RNr7IlOpfjO%2BPVxcdrz3%2BN2EfDh3D6HK2ndNI3wBeZRlvC4O4D9iyNmp7ffkD2gfADwxhTeAZfQz3P1CxQDvgboiiPcb5uIU3XgXzc9GIXcvim22zQMDpicgcgxEt4y%2Bu5MEAxc2PSE3pNn6V2cePfZ0nYqjDOmJa3dSLCaRyk16rkvtNFBK44zhU9SlJO%2BZW3rudo%2FkzT4sh%2FFb7OAasuAmysyfDEQGtmFC3HeAeOBHMVVRSsrbfm06p56N9YJdu9zYjmQ%2F8hLmmVDD1wR0PdHAgJKarZn0roT%2BeofGzzafuiYY8q3%2BXiHQgM9SVB9NNFR1EZeppp5RAyZv7q6Pz1rEXA3RIdIysWPorKf7Jxz6fGendakzdBuB1Rte7ORiqkRELjxEpJKBi0BNaJRB22y1DFv43gMPSzDMkf7Vz396OkCEB44ddA2yCEnfJHM4Qo7TbZRDxv4nL18dGAGTOrcTUh50q3mWsPMOHVo%2FqHF9qW6Ww6s1XafetejyEjBJfGr3RhaNRKcqPDx2nvDUHz2Gy3bxVv%2FBU8yQV%2BBxBS4zXpXpGrUE%2BenDCcqJfWAnLdPdbW%2FxTBPcErnFyzxe3D2LmcjkcujD%2B1%2FS%2BBjqkAakeZN1KxVJNrN5eNh4%2FxaC9VPklepDZMBZ9vTywvys1EtzH8hhk0r94Zm31QcIXSm0%2FFKAihkUxZPpRVrS1DOnhnxtuj5H%2B2pped1kv9QskfU5XJuxhjp8Tyq7j8dVmzsxk4p9x9CMgxVSWNEgxbdMq2RCDnmJoz8pih4vnufQiEyVeVqbRzzwhBFR6IwRyyfG6oPaV6SoQihr0zhq2XWa83PCk&X-Amz-Signature=c1f1e92b2cf8093b2a705a49f3ca77611e83cd47731f77e4e71ebd055f14bbe3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXOP6D3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF8D12ITJSYSDlzv4d8yPSHlBUwR0LO8QM%2BJ6iCdv%2BMdAiBalMM3Zd%2FWzEIJCG6Ab%2BM56dPDly7ESPYuec5bwN7ksSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtIKatpckZEzycHvhKtwDcmKAoi2f%2FMMwww%2FGIdQDRDcKsFIEI4nhsadSG2imA%2BEGFi9Y4T5wJwLyetV4mjgH92G1dPG7rxDLkKJQ8YmeISO40opwZY0ZBdiDp6ac4JlSQHSNX5J%2BPh6IcHRiTkReWiFD4lKmU9NVHmraL7mXQsRzVuoUbDuFVTIR8BF56ipjOGc%2BKuqvLMDB93vlvUR0pnoXBwwryVE9hGfiGgTfdO0sOB5S4VQh4Z6cNhvzOyQFvrYFGJCHDG77qfraBFm35Rhq7qZuAbUP1O1%2FeBiIGo5Xsug0tdFjLs9TX6Vebruwa3lCeL0zlJMClmMoy%2F65lovHwCLDajls8uINvv96kZ%2B8%2F40hciRDKeqw30ARSn42Jk6CPTDzVHyqR3RjyPvkK5ZvwJ02%2BMPJYW0e%2FlrmusTfJdMMJoxfZqqn96PoiWwFWdX5rkOghdsKe%2B5PbdtSt2%2BBSHzOX6G74465a080vu610o9ayoQ9rFm2mwoyGQLlyCt95Ux9oyA0g9JxEhceFNLNFlcZv3UzYPnc6VYDaEw1Eqjr5adAcH8cBqgvNhnn57ihzRogvPdg5TKYOBm5rIk4vOIkx8vdpRV9v8ZyEDRx4%2BgulxtlQl0Lth3FsRmZGRv6jCQGh77IDZgw19f0vgY6pgEDCcQi7YCXVgMw9u%2FCae2jXmlpjCxiIQOdZnhaZYF%2FIYXgfbjpopbqI5T3CjOja0YEdubY9GSs9YslbRCRO4FtPJrMizvxQ2gLg5u3%2B%2Fzyj49jPPfGKSxiLpS6CbnLgL6cCp32Nott%2FN7yj7r6C54CRWjmLJTGnn6EVz%2F4TH2HibtIQ1yc%2Fk0ZG5eBszCGjWUkDymV3hi1CXDyNzhs26Y%2Bm6xmAzJE&X-Amz-Signature=e33c3cc14b0c61df887e74a9a9422fc2ab804fce98583c44d4aacc47d0eb2f02&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SBD4N67%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHokE0xeDl4dihTLb9NPDz9pRI5Qa8FkGWzSOqavGgnwAiAsEvWDGsxdvnVlhVGAYHndAWwE8BnqFqA7h6WCeoBcFyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSquDvo5HQFHmAbHiKtwDZ4INFzIQ44wSJ3gciqC2mO1L%2F0FICHfaEIhZHj1KPjqkvZ2ZjvGeUqfO7hht5RLSRbiVdc1KTpFMN8baqbwQcMbvTlRBWy%2FxXff5%2Br9ICXGuXQeLsxsImLC9BDgmCYkOvdvV4YZw92t6Okn32c%2Bh8jo6Iqw0%2BePsaQXtXmJ%2BjSbJS3wL0lkF6lkGeGvHNf0TE4kTeSjEB88gZRxQLhTFgfIyLrSPuDjbFVcM9lST0AVNmBrFN9llhCa383fpApx0momHcAGd7%2B%2BmB3jobSaOHHd%2BdYJlDNafDFol5GehrVNm%2FrplF0xRWAlBh3orFbGBh6xHIXdeiBnEJeQmr%2F6Ad31rHLuZwhc%2FNbo53lyj8%2Bzbbhl1%2F7jtL7B6iGKoIyeUgw%2Fah%2FpX62H5Nu%2FuPHx37h7acV2Mbal7lQqjJfHmCRHOmLvMgvtrHSRlwj3jim%2FCNpR%2Baf6VsTxoHHVMnNimcnvdV6iTthbHsqPFREDuyFUgGTbWc%2BnYWWfAzDUeFWEy%2Fq6QrljFRisDXR9zDxnLfRG%2FqD1%2BqrR7qaXbobwXdEQMrSCSqqT%2Fah0oAXB%2BfekLNYG5TvgQnW7yd2Ya%2BKCM38VKbIN36aEelm4UA1QJ5lbeyV1diE785XU5REQwj8r0vgY6pgEuksthYcpjMlJRqUBOV9C10MavafsO%2B1g3%2BEuB36SEMBVSZBnmTqeFWqEVgp3GNBBCuXWeBwltzPOlxe10CyTk5QN0r9Dq6hfCaoCw5VCd%2Bv%2B6Y%2FPvTqWrsLzbOem6G2SMqSAvKK3ku1MUMy7VXbbCiaUyEiV%2Ftrgb22nvJuovsVgWN%2Bb3%2B1lMNqbMxBhAYtGKzX1Ao%2BGR64f%2BppbpyC3p3Y6EZ7T7&X-Amz-Signature=0c61eef11640cb2ac7f34c0a093fb764f05bc7535db8b2f1c3828e434ad1ecb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVHBZEF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCoD%2BGi2V%2FjnUQykswKSvT1vaR6oSINBHMqwtdd%2B6umyQIhAIBH54PcOLnBeqEJpHPKuP9Kd101IOg6Hiz502aCZ%2BpxKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxS1F5wIMKUP9oJebcq3ANNDbAbdjcRMcY8XFu2%2BNLVpoBaW%2F4RNr7IlOpfjO%2BPVxcdrz3%2BN2EfDh3D6HK2ndNI3wBeZRlvC4O4D9iyNmp7ffkD2gfADwxhTeAZfQz3P1CxQDvgboiiPcb5uIU3XgXzc9GIXcvim22zQMDpicgcgxEt4y%2Bu5MEAxc2PSE3pNn6V2cePfZ0nYqjDOmJa3dSLCaRyk16rkvtNFBK44zhU9SlJO%2BZW3rudo%2FkzT4sh%2FFb7OAasuAmysyfDEQGtmFC3HeAeOBHMVVRSsrbfm06p56N9YJdu9zYjmQ%2F8hLmmVDD1wR0PdHAgJKarZn0roT%2BeofGzzafuiYY8q3%2BXiHQgM9SVB9NNFR1EZeppp5RAyZv7q6Pz1rEXA3RIdIysWPorKf7Jxz6fGendakzdBuB1Rte7ORiqkRELjxEpJKBi0BNaJRB22y1DFv43gMPSzDMkf7Vz396OkCEB44ddA2yCEnfJHM4Qo7TbZRDxv4nL18dGAGTOrcTUh50q3mWsPMOHVo%2FqHF9qW6Ww6s1XafetejyEjBJfGr3RhaNRKcqPDx2nvDUHz2Gy3bxVv%2FBU8yQV%2BBxBS4zXpXpGrUE%2BenDCcqJfWAnLdPdbW%2FxTBPcErnFyzxe3D2LmcjkcujD%2B1%2FS%2BBjqkAakeZN1KxVJNrN5eNh4%2FxaC9VPklepDZMBZ9vTywvys1EtzH8hhk0r94Zm31QcIXSm0%2FFKAihkUxZPpRVrS1DOnhnxtuj5H%2B2pped1kv9QskfU5XJuxhjp8Tyq7j8dVmzsxk4p9x9CMgxVSWNEgxbdMq2RCDnmJoz8pih4vnufQiEyVeVqbRzzwhBFR6IwRyyfG6oPaV6SoQihr0zhq2XWa83PCk&X-Amz-Signature=352ab1150c264f924653d9f113ab09e0ad1d5e691f80d0c1fb6fe00073281fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
