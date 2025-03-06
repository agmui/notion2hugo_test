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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWCVW5D%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcdmIN6zVXVZxIsko949n8wjvymr5KKyzjTs6X71QHZAiEAjnt8%2B9jvyxctAln0%2BAjCw5naW69DooUqslpIFn%2FHXnwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHPHsLvMHoVrplK%2FaCrcAyqJDodurC2SdoCMd%2FuT23z4g12sMalSgQOrH9U4sYcb%2FHNRTxpZqPAOnVz%2BiJdXw5OYZ%2B4H%2BOjxmbZM2oY6f5y08%2B0xO4bKuLeBm8juBjbuIYhmmYu%2FXtMeQKPsSQIS4KP8Su378lRVzefEMj6auWNwbWGday0ss4f%2FdHRyPVL4DziKQExJHdRBLxJRlfVKDyLwtNzeV2lY%2FrBRHL3NhLpnOFfDuZxS8gARhGPgAz%2F%2B67qTdSWj1f3DnVi7QNMa5cAZ1B%2FaCqIIYyRwzbDNvcuRNIM8dpQnQCiKtmQe6pLUfqaeu6SNrtfuVNkPLjkpWNEN%2FtJxioqPDnM5GifJdZgG9vUpl3xcZ1KOsQMIqz7mfcpWQJH75LCWgyCE4GOCg4o7eiiVELGrAnutuOn5oScmKfbzTLXi%2B%2F%2B6orphM5Pq57tDmFipivG8J2cvk0ucmpzjQ5%2BrNfcpQdEPVpJWGCYZk7u8DYBmIjYPvf6YQ6vDsO%2BUY0WYXhR0HL%2FmUBOtsFFwwjKMUPFr6AFhnOIMGsx8rPrcYrO8FfqubBFEPGveiE1LbBe89l9zkrlJf04FYOhJmZ36Za%2BenvmMKW8HtyRux7GXLIaVfz4CmaMIZq9bZpJVfIZL9dCQoQdAMJSRpr4GOqUByI4CtxD%2FlL59wYrii%2Fcmxa37pnAsM0AZOcM8IjXtUO0%2BDeIF%2Bwqtjs9h%2Brx5yY2j%2FrJxtUS556JCt5a1X%2B0tjq2YFkQE5ZNIDfrHcfp4yMCNWcbhIaFUos0CuuATKxn9p1%2B5yufDWvwSVEKAJ2Nb9tS12RtJ%2BUc1UOFMZcJ3bUv63QgAOrPVodGDC0roIPTd%2BoATnjo5LQTRlr8vqy6GoCE%2B%2FgJl&X-Amz-Signature=840734301bf6bf4ba13f12dc5fb149312daf6fbeaf6312e47443b14a2f5295a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWCVW5D%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcdmIN6zVXVZxIsko949n8wjvymr5KKyzjTs6X71QHZAiEAjnt8%2B9jvyxctAln0%2BAjCw5naW69DooUqslpIFn%2FHXnwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHPHsLvMHoVrplK%2FaCrcAyqJDodurC2SdoCMd%2FuT23z4g12sMalSgQOrH9U4sYcb%2FHNRTxpZqPAOnVz%2BiJdXw5OYZ%2B4H%2BOjxmbZM2oY6f5y08%2B0xO4bKuLeBm8juBjbuIYhmmYu%2FXtMeQKPsSQIS4KP8Su378lRVzefEMj6auWNwbWGday0ss4f%2FdHRyPVL4DziKQExJHdRBLxJRlfVKDyLwtNzeV2lY%2FrBRHL3NhLpnOFfDuZxS8gARhGPgAz%2F%2B67qTdSWj1f3DnVi7QNMa5cAZ1B%2FaCqIIYyRwzbDNvcuRNIM8dpQnQCiKtmQe6pLUfqaeu6SNrtfuVNkPLjkpWNEN%2FtJxioqPDnM5GifJdZgG9vUpl3xcZ1KOsQMIqz7mfcpWQJH75LCWgyCE4GOCg4o7eiiVELGrAnutuOn5oScmKfbzTLXi%2B%2F%2B6orphM5Pq57tDmFipivG8J2cvk0ucmpzjQ5%2BrNfcpQdEPVpJWGCYZk7u8DYBmIjYPvf6YQ6vDsO%2BUY0WYXhR0HL%2FmUBOtsFFwwjKMUPFr6AFhnOIMGsx8rPrcYrO8FfqubBFEPGveiE1LbBe89l9zkrlJf04FYOhJmZ36Za%2BenvmMKW8HtyRux7GXLIaVfz4CmaMIZq9bZpJVfIZL9dCQoQdAMJSRpr4GOqUByI4CtxD%2FlL59wYrii%2Fcmxa37pnAsM0AZOcM8IjXtUO0%2BDeIF%2Bwqtjs9h%2Brx5yY2j%2FrJxtUS556JCt5a1X%2B0tjq2YFkQE5ZNIDfrHcfp4yMCNWcbhIaFUos0CuuATKxn9p1%2B5yufDWvwSVEKAJ2Nb9tS12RtJ%2BUc1UOFMZcJ3bUv63QgAOrPVodGDC0roIPTd%2BoATnjo5LQTRlr8vqy6GoCE%2B%2FgJl&X-Amz-Signature=493db96ffc22b7244744c01a2a2c802c89971cd94ed81e29bf2cb00a8d92a5a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K42VMNT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC43k5T3TAHWM%2B9ZfgVpnZCTYJTlpAkElrSq%2BRCuFkUgIgYxW1d6pNGTvQR6HQaSPh5hkq7tVIMH7O3OC2fVnq374q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD9UHWa2bETM5N5gjyrcA%2BWzHPU%2B4NNk6qSrDQ%2FIUfAFXKK7MMemKSmFlfX%2Ft9PwzZa9LzPlCOrgkpjCMGL8ywyDEKTPq9bbsE62c%2FujpTxGKMzWv%2BoXMu5P0Rf9YfsNcrhtgwNBcizaZClNq%2Bplwqq4lYy0e3fswpy%2F%2FkPbFAVAQPdKJHUoQ0LpvsvOFm7bkmkkqWbxNXLLXTmh2mte%2BBjfvya7ih4PcRr1Y5Mfk%2Bak8OQoA%2F3sxjtiHaL6V%2B8Fr%2FwjDXUXSfAxGGXuM3CjiXgqF7dWxj7ib3mZcZrhF1MXdzuHnF3N9pMJRhQZ6ZSN%2BnV9bU1N3xx71tOjZHgJhmjn%2Bc2843CpblUpNWalVMBr9gH8TB6OlilRmoh%2BNVmKrcSnovOlILz%2BBd6WWOUZw8ckyFJoBt4WmLyu2XnAsTuIwotNVeLZLrKr3JpUXnVGl%2BTPVpP3ekqPpIJhxlSB%2BHfUanq%2B0ZwOwAdGRtGQo99H25jhg81cZGzDit1MTBxJaZ1ZveRp5qc9ZmOdZZgYlaSAI7V90HQfbOu1PY1vaCL87Cy65FadsYQxtTITKhP%2ByUUSgtCXOch805P%2BgmFeD8WNkthPJ%2FeVUJ3EKQqDH6uL4ad0ngUYhUKhBshd9iWn2jrNJpQOpP1SpMVJMIGSpr4GOqUBXFAdqT5hv15ueiVGtoWXWw4M15dYtes5e7%2FzvRKvl417VTi57zffF%2FZcMzshmDhfgm2vPI44bIRbrmqXMB0RmLAZLIsTDybX5dLIPgFSz9I3WIUMnG6Par%2BcxZbxbVCmVlJk8BAJRn9CwXp%2FzVXp3gZGiyQQNa5ZrPvOlmotH6IpGI8DKEdj%2F8sr%2FEifBpteee40Auo6F92BnqKJYY1c0tu%2BCny9&X-Amz-Signature=15d0a648ec8a13d58394eceb96f98f31ee67a580603739b2130e5707704e4e58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWV5XBST%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICakFYPf7A0WUyjRjqvvDK9Lq%2BfChB1u1NSmEBlunjxNAiEA0jgRruB6tpDBda83UGOxjptynQWa0hMsED5Rh7%2BBvG8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDL2i7Fi6YyZepEslKSrcA9Urgkv0i%2Fj%2FKR97NR7oOxKwUIPyydb4gVyXtVkUYlk4gtZJFppv8Vr4bMG8oEmxHo0OOGU25lB60Gp1rWv2%2Fc34%2B03IifL%2FtW8HcA5z6qHBiGsPmNfYSG6bw9cZ54KlTlL51VC3k8XKZgfAnG%2FWXbZtX1WeYTa%2BC2ikALFY3zPw42yXN4QnGG2mNPbs1B9NCwVWL7xOPtIjXsFd%2Fohf2w7Eg%2FnPxDoOCALsnzmuoCX4K9QXBfmgj2%2BPzoWCBjZGq4piIryH2LUtN8HtBmmIqCt5bbK0Nh5XZIhmb%2BrMq98cjrxStwxc%2FdJ508rvmTIYQhVsYDXIj%2Fi%2BHuZs4EKKFhE7RLLQlpU45o14ZOX1%2BcCY3bFRKP%2FyipfZD85dhYvR9LurUq%2Bni79bjnWiPFIu7uSdpDtXTBW8xGX6jC8uOeUqFHnwj576U64Wck3%2BVW41F51nVl3%2BBtcQdLeR6ELqP65SebLjYtIjr%2FapNKZzeECT6xwOStZKoIBdczkxOqJBaUfeAJKFF3ETPoeDbTilHufObGq1bG%2FwwLmCGMr633QECc1Yd39qY7CT9RMvli7VaBbDN3bi9gLK5Pk7AuLeDJEkUvya1WD%2BD6Z3xYzJ4ifeWj0F%2BfrCWDPK0PaEML2Rpr4GOqUBZtMuF4KBTBSfdhmxFfRLp7LS6vNuAY%2FybYvK9UAhqtgq333EE9Z9bvhCVa%2Bf3alYXL8ItN0R29AOje%2BlDt7P5%2BnCW%2BdV%2BpQrIviql3IeeEgjIEyut%2B%2FIE%2FevrPIZjGCbVk%2F7VCgY5heqXS%2FlWJmwSk3Ok4XIXhUy0a7ZeHoEifnpkhHx877FO2pzwb23jmV6QJcc%2FBABIfwq3Vddm0D%2BjqvoUrKq&X-Amz-Signature=a2d1bd578eb14ff855c4264105a74792f8789924adc5358313d286822e7e6a58&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMWCVW5D%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcdmIN6zVXVZxIsko949n8wjvymr5KKyzjTs6X71QHZAiEAjnt8%2B9jvyxctAln0%2BAjCw5naW69DooUqslpIFn%2FHXnwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHPHsLvMHoVrplK%2FaCrcAyqJDodurC2SdoCMd%2FuT23z4g12sMalSgQOrH9U4sYcb%2FHNRTxpZqPAOnVz%2BiJdXw5OYZ%2B4H%2BOjxmbZM2oY6f5y08%2B0xO4bKuLeBm8juBjbuIYhmmYu%2FXtMeQKPsSQIS4KP8Su378lRVzefEMj6auWNwbWGday0ss4f%2FdHRyPVL4DziKQExJHdRBLxJRlfVKDyLwtNzeV2lY%2FrBRHL3NhLpnOFfDuZxS8gARhGPgAz%2F%2B67qTdSWj1f3DnVi7QNMa5cAZ1B%2FaCqIIYyRwzbDNvcuRNIM8dpQnQCiKtmQe6pLUfqaeu6SNrtfuVNkPLjkpWNEN%2FtJxioqPDnM5GifJdZgG9vUpl3xcZ1KOsQMIqz7mfcpWQJH75LCWgyCE4GOCg4o7eiiVELGrAnutuOn5oScmKfbzTLXi%2B%2F%2B6orphM5Pq57tDmFipivG8J2cvk0ucmpzjQ5%2BrNfcpQdEPVpJWGCYZk7u8DYBmIjYPvf6YQ6vDsO%2BUY0WYXhR0HL%2FmUBOtsFFwwjKMUPFr6AFhnOIMGsx8rPrcYrO8FfqubBFEPGveiE1LbBe89l9zkrlJf04FYOhJmZ36Za%2BenvmMKW8HtyRux7GXLIaVfz4CmaMIZq9bZpJVfIZL9dCQoQdAMJSRpr4GOqUByI4CtxD%2FlL59wYrii%2Fcmxa37pnAsM0AZOcM8IjXtUO0%2BDeIF%2Bwqtjs9h%2Brx5yY2j%2FrJxtUS556JCt5a1X%2B0tjq2YFkQE5ZNIDfrHcfp4yMCNWcbhIaFUos0CuuATKxn9p1%2B5yufDWvwSVEKAJ2Nb9tS12RtJ%2BUc1UOFMZcJ3bUv63QgAOrPVodGDC0roIPTd%2BoATnjo5LQTRlr8vqy6GoCE%2B%2FgJl&X-Amz-Signature=0a47de98f1fc0029d783816e9f6811de39312d6cd936b23c57b77d9cee9e1bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
