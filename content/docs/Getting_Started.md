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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTETNSM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDzN%2BW694rNkC41S8H6V55lToCQnwvKPu8lyv9WEN1QQwIgfzd%2BKfwIpwt1l3dITcswwhVU5OpRYUZEZd1vf5Ls%2FxYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgmZ45ETYINF7RKGSrcA0mpLiep07YDybifKN3lJdb3qHF85zMwFMbAFUfdINalZFoh%2FjeLZdDgLeunOxW%2FJvMka8CCnMz2e2qop%2FzUKEns%2BFpRJ9P32xpKJaapBuOsiL2KNvRZceypDiDCQDvm9KXgiSp6KwjYsHiZlkP%2FUxMQ07tZWmGtPxHiRomfKSVK3HFM1v%2BTrZ6HopWcHi6MAe3B7DRG3izwIZoeB6u%2BY6HfaKKvrNbEKDan5V8YGaIYBTipHmbExsQhOlFlDYpgk18QWxfh3cbOLScIbNVBtVCT5Ah0un%2Fbv6Vu1pjbSzo6%2F4gX7ZyT7xcRjXPJs5uqBEi0TruZiFdK6T3mraExtK%2F5STBKSFuPmdrp7NkB%2BMn1jlxSOcXwa55T0kd%2BEXaLNVfJjfxPHvxw81gHywK7WdhCSwg57U4SYnXbn8O1GtX4yFfyumBb%2BLX5pV5h8Gz%2FmYRGxXPkEg6LdO0a5lPLMwZIKIC4Nwt3jkHCx3QYx29Ly9xSQA0uYiwkmmri42IoJyPfu%2BO0ch29lkH0C64UlMJmMo0s0%2FDDVZbw%2BdUcLoiV%2Fw%2BEKkoObgz7beVYDVi70LYAp53dwUz63Y1a%2F2TdEM5SAzaePfE4UGdOhG2CRrYZtGMBtBKSHBkn60HLMKv%2F0L0GOqUBJb6pADrVTZbDpSdozA6l%2F0ao5DgKaKsIAJKwT73uLc8M30bsfkvnyQP76xH4I0AwDLK5BNEc3iB2vcI8fcouiximjc7%2BrbGGXEFrzJNM%2BR6%2B%2F%2B8heW%2FaDsNOa5sGYkFVv7xp99h1iWIXnmS9d2DvulJL1%2FR6xUq%2FBoZZCZo4wcJXloivvRG%2Fok%2BykB7QA205SlZ9W0pLVOduV8i1nFIVebXbM%2FhC&X-Amz-Signature=2cdf3be3620b1aacdf7f715d28c7971813f5ca69f7f566a9ffcb6cd529a9f081&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTETNSM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDzN%2BW694rNkC41S8H6V55lToCQnwvKPu8lyv9WEN1QQwIgfzd%2BKfwIpwt1l3dITcswwhVU5OpRYUZEZd1vf5Ls%2FxYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgmZ45ETYINF7RKGSrcA0mpLiep07YDybifKN3lJdb3qHF85zMwFMbAFUfdINalZFoh%2FjeLZdDgLeunOxW%2FJvMka8CCnMz2e2qop%2FzUKEns%2BFpRJ9P32xpKJaapBuOsiL2KNvRZceypDiDCQDvm9KXgiSp6KwjYsHiZlkP%2FUxMQ07tZWmGtPxHiRomfKSVK3HFM1v%2BTrZ6HopWcHi6MAe3B7DRG3izwIZoeB6u%2BY6HfaKKvrNbEKDan5V8YGaIYBTipHmbExsQhOlFlDYpgk18QWxfh3cbOLScIbNVBtVCT5Ah0un%2Fbv6Vu1pjbSzo6%2F4gX7ZyT7xcRjXPJs5uqBEi0TruZiFdK6T3mraExtK%2F5STBKSFuPmdrp7NkB%2BMn1jlxSOcXwa55T0kd%2BEXaLNVfJjfxPHvxw81gHywK7WdhCSwg57U4SYnXbn8O1GtX4yFfyumBb%2BLX5pV5h8Gz%2FmYRGxXPkEg6LdO0a5lPLMwZIKIC4Nwt3jkHCx3QYx29Ly9xSQA0uYiwkmmri42IoJyPfu%2BO0ch29lkH0C64UlMJmMo0s0%2FDDVZbw%2BdUcLoiV%2Fw%2BEKkoObgz7beVYDVi70LYAp53dwUz63Y1a%2F2TdEM5SAzaePfE4UGdOhG2CRrYZtGMBtBKSHBkn60HLMKv%2F0L0GOqUBJb6pADrVTZbDpSdozA6l%2F0ao5DgKaKsIAJKwT73uLc8M30bsfkvnyQP76xH4I0AwDLK5BNEc3iB2vcI8fcouiximjc7%2BrbGGXEFrzJNM%2BR6%2B%2F%2B8heW%2FaDsNOa5sGYkFVv7xp99h1iWIXnmS9d2DvulJL1%2FR6xUq%2FBoZZCZo4wcJXloivvRG%2Fok%2BykB7QA205SlZ9W0pLVOduV8i1nFIVebXbM%2FhC&X-Amz-Signature=a4a25f079cc078b279f3c185cc3e61eef95ef3b435b03f14e9d6ede34413a51c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOIWC5PQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHkr3hp9e%2BI52FZG28GIVbxGVM1rY6W3%2FW5oSWWTt8obAiBJvE%2B6%2FcqIvyVbRr%2F9obrDSwIh5q2%2BgMW3%2FURdEqhR4yqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FBuES2zHbv5nvQ2XKtwD4odb9NmLDzp8hDm5137QD3IYR8BG%2F2YqVj5KCFWTrQIOSHj92h2fqRqWqpa%2F0LFSfS6u1GXyRffeV4hqYQwZbF1%2BSiJK933UsP8v4AogLqzRImO33a85mroOzd1Qz9aa1rdgIAZ6G0kwfNFx8Ho81katUcrSuwtLiNMnrVHCDZX%2FM%2FGU2e%2BM2sNIAWXwQ9f%2B1I3ajKjSCabkrI4TUm%2BkwfY5wFS%2BkJaezFf5modLZTNFvohuOiVJFLdf2wGuAskHBy8ThngmgzLioVmic4KGZROXw1QaawKkI9IitDEOBhKjlMGrR8zpxh5eF4VAa199Ws%2BERY%2BALQgTgtLNVXjzy4wvACgHmQOHehy9rGXno1klagDD48Kor%2FP2Z4ZME11QrdwAo71IEUojjYO6L02iZqoBtewvoo9YFgcbqRDWyjsKSoF%2BpxHpNwqHRvYeggHsFeqCXGTxS%2B7UArQhrwG92b9BBwGaF24xwZketf3CSborl2SLrXj%2Bmy0xW4AvI3uByUkfkf8qHZwT4lI8AE7RX%2BzaO%2FWAqsZzSM%2FaN3lwskvGppzvSMHG2RwbZsXLmfr2GMK%2BJNHWgWqgLvdtoL7mb%2FAAo4m63GRw3e8yAimrVJvpZeZv5e8dYe1edw4w5f7QvQY6pgHu1Es5PmipWif9OIeu3xwbX7%2Fug4Atje8BtESe70gtulYXFt7Gmb5OsVRNofqP3wv0dECNFYMBoSepo6C9ROeM66XV8tJuVRFSYpOB8kingqu0m2fKlePR6VDVR7%2FdAT3HZnsnVKNXwZ%2FWtewg36Q7W50oIsolp8o9vKbT%2FcEoVPDXB5F7Wk5H05uB2d0CI7mwxKtj1%2Bo%2BE5wvZmNCQ1sMKOY0LTN7&X-Amz-Signature=30e3eef3296a6cc53887bd6291916a29cc38742ef653abe90612655cbcc7e86b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AVP3DRZ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDcsXqBOuOYhiUpy1i0pLNnxPsM%2FH5sHvo%2FlvBfrq4QeQIhAKW3cUG5AGgpiTB1mXwU9G9qtZI%2BUP%2F87LXxnp%2BrldZKKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnGcZXVXHXWNXMWQIq3AMXr94wUhNUQPpXxLwJmRC9y%2FInYRGGhL2JFNoVOpCSOA2N7bxvu0dpX3LNtk49Ukw7wiqXKVn6jM%2B%2FHCR77dfzZ%2FHI8hRwtrPpBaOmaYdAJxTmph8D5mJcSP62Rz1YECCzk6AQposiIRCy0s%2FwSkiIoouSwYkURC5%2FQ076x6Tle0ydPC82Cz%2F9LqlMwW4m8vPmfNvNV5f4YFrswvyV8NuApy1NdY1hTLkUC5MYv3QTo3nJTCNsv6PLNZC%2F9o3JBbbN37ZDwRGHWA9WmCZ1SGoz10bRFrk8ZnA8QS70qNXM0OMxuybndrNJtMP6PTKhtuKfY6GwTY%2FlsJ8Fvhi1cPlIfTxMgTzAui%2FACOOIKlRag6uYmJB7lQLGYoQCEgOMPJcpMTB1ghHu5kufDsCZIq9iYIdejQmglZYbcSc1p3drHSNv4fpjF0HAyxSGaNuE63QBcHATkkikajFsRac6Wbrzev8SUTXbvc6fMdRRcVjlxtl8kxKbAwUBH90FJypzUKOE65K0fiKufiX4NfTxXc49XTLYdAfbpBYnjBjCRd2IMcsQdiCGH4tjNN6BACJoY6vQgvf%2FHRKsqO%2BFOH0sGyxVfCqfHb8RmUuFzmj94MVR1hCqFQC5DFMXSwGjZDC2%2FtC9BjqkAfy9hY0qo52PZbMXWAMM9EzcakltCQFwyC3RX8YeorrkHRkMudiGztE9bQEimCP%2BICG5xEfRlZeiWKv2tr3iP%2BUO3eHrHe6TS%2FOP%2Fjwhrgps4nq7FJa8CXchY7e0lRQ%2FuvyjEB5PqVpcb79mOZwNuESlH1US4W28YlsmMidsy8kQd1RRM3vFtLmYiXE8A2XJNGtcWcKeHTuI8DOpMFuP7FwKv3or&X-Amz-Signature=109f689a61dce43edf521edd3e7b0bca6c46bba071a69e32e89fa1c83d54a1e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTETNSM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDzN%2BW694rNkC41S8H6V55lToCQnwvKPu8lyv9WEN1QQwIgfzd%2BKfwIpwt1l3dITcswwhVU5OpRYUZEZd1vf5Ls%2FxYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgmZ45ETYINF7RKGSrcA0mpLiep07YDybifKN3lJdb3qHF85zMwFMbAFUfdINalZFoh%2FjeLZdDgLeunOxW%2FJvMka8CCnMz2e2qop%2FzUKEns%2BFpRJ9P32xpKJaapBuOsiL2KNvRZceypDiDCQDvm9KXgiSp6KwjYsHiZlkP%2FUxMQ07tZWmGtPxHiRomfKSVK3HFM1v%2BTrZ6HopWcHi6MAe3B7DRG3izwIZoeB6u%2BY6HfaKKvrNbEKDan5V8YGaIYBTipHmbExsQhOlFlDYpgk18QWxfh3cbOLScIbNVBtVCT5Ah0un%2Fbv6Vu1pjbSzo6%2F4gX7ZyT7xcRjXPJs5uqBEi0TruZiFdK6T3mraExtK%2F5STBKSFuPmdrp7NkB%2BMn1jlxSOcXwa55T0kd%2BEXaLNVfJjfxPHvxw81gHywK7WdhCSwg57U4SYnXbn8O1GtX4yFfyumBb%2BLX5pV5h8Gz%2FmYRGxXPkEg6LdO0a5lPLMwZIKIC4Nwt3jkHCx3QYx29Ly9xSQA0uYiwkmmri42IoJyPfu%2BO0ch29lkH0C64UlMJmMo0s0%2FDDVZbw%2BdUcLoiV%2Fw%2BEKkoObgz7beVYDVi70LYAp53dwUz63Y1a%2F2TdEM5SAzaePfE4UGdOhG2CRrYZtGMBtBKSHBkn60HLMKv%2F0L0GOqUBJb6pADrVTZbDpSdozA6l%2F0ao5DgKaKsIAJKwT73uLc8M30bsfkvnyQP76xH4I0AwDLK5BNEc3iB2vcI8fcouiximjc7%2BrbGGXEFrzJNM%2BR6%2B%2F%2B8heW%2FaDsNOa5sGYkFVv7xp99h1iWIXnmS9d2DvulJL1%2FR6xUq%2FBoZZCZo4wcJXloivvRG%2Fok%2BykB7QA205SlZ9W0pLVOduV8i1nFIVebXbM%2FhC&X-Amz-Signature=4fa1c85ad119c26f83b4d95241123529440124303745ca99fb8e4958c2c7a0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
