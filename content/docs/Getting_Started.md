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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PQPYBZS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJglTPvX%2FUeMasCqsUkjcxccgWKeRwo90OgPclyEgLGAiEA0W%2BGrDEiwlpX6xmLmxmhqdAtYM%2FbrgJrg4H7KZiiWaEq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHh9E0ocavNx25ng2yrcAztjMo1DXBxJJARNBYgAVYYkzVhyZqJSWOJJNWm4UiUibXn9DL4%2FaoRvRks90Ipvc57AEOk5VfCO018tsT4hTw%2FmDuNYRvsdZq8tWqPw6vfk61dY9iwHdvcu28Xi9stgkXi0nzyUse6efv%2Bq2JBAMqInM4Owqvhpn8SAj20%2F6FcPcU6%2FfGXp8mXuzfEcvviQQ2BdNe8ScvyfiSLoasXRaIaOVsm4EJKmhsc48eVkIKS0CgCPZVUSYlDWrfjE8Lf%2BIGunAcxdWa9GTPe4GZ8X3Rb4QdAnkcLibgGAGSx6WC0eLdsCMJO6eIsAPSyDDlgzZMlphQAtFisNE%2F25lorbt8HrvCG%2F6Tx3jiQKO%2FD1biqfN3tJwvhIWCLrt8BPqPIkoX9uIaAQJ0XbODUwZiFDWv7nFBgkfu86m1%2B3ECgGQ8YFzDl1xd7ribZWcQ5T2BAEze6SuQ33jhEvBCCNhw5JQKxYamrcsIrVdiFwKbj7KLsA1EyoTpfcnNEed7nS8pdXVqz0o588%2B5bhW5Sb%2BlyqxjmV9RjlSqG1Q1NScxQ2bkdPMu%2FBbJ9Kgw5jDh1eQsmfcrgiZg5%2B4HIeTgkAFP2mwIe27lDGs7naZRkQcJBxnTqcFsHRxBUuC%2BJSX5lQMNCbhcAGOqUB%2FNXFKR%2BvKVS%2Bmy7ifpOtDQKJCrzNGWUaZTvmejNU5gm2PGYtq9PqHfbAYKflQM0F%2FHlzTt%2BogVGZYETkPGEoQVpQE%2FlPBazqB2oHHQ5cW7rEkWjHIAla3cWsV5fLbOizeTlNkMznpmiZihPqdLY35kpH%2BtCnIx2vPzLEC4UoKhENUzoEA6h8Zkeo%2Biz3ihoHUt2FrL%2FyaLpNUcn3iz9I9TgRI%2BT9&X-Amz-Signature=f10f60948c6db12d8503ab83fd88811a074ed24c77e53c80c00f67dc89cbcc3e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PQPYBZS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJglTPvX%2FUeMasCqsUkjcxccgWKeRwo90OgPclyEgLGAiEA0W%2BGrDEiwlpX6xmLmxmhqdAtYM%2FbrgJrg4H7KZiiWaEq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHh9E0ocavNx25ng2yrcAztjMo1DXBxJJARNBYgAVYYkzVhyZqJSWOJJNWm4UiUibXn9DL4%2FaoRvRks90Ipvc57AEOk5VfCO018tsT4hTw%2FmDuNYRvsdZq8tWqPw6vfk61dY9iwHdvcu28Xi9stgkXi0nzyUse6efv%2Bq2JBAMqInM4Owqvhpn8SAj20%2F6FcPcU6%2FfGXp8mXuzfEcvviQQ2BdNe8ScvyfiSLoasXRaIaOVsm4EJKmhsc48eVkIKS0CgCPZVUSYlDWrfjE8Lf%2BIGunAcxdWa9GTPe4GZ8X3Rb4QdAnkcLibgGAGSx6WC0eLdsCMJO6eIsAPSyDDlgzZMlphQAtFisNE%2F25lorbt8HrvCG%2F6Tx3jiQKO%2FD1biqfN3tJwvhIWCLrt8BPqPIkoX9uIaAQJ0XbODUwZiFDWv7nFBgkfu86m1%2B3ECgGQ8YFzDl1xd7ribZWcQ5T2BAEze6SuQ33jhEvBCCNhw5JQKxYamrcsIrVdiFwKbj7KLsA1EyoTpfcnNEed7nS8pdXVqz0o588%2B5bhW5Sb%2BlyqxjmV9RjlSqG1Q1NScxQ2bkdPMu%2FBbJ9Kgw5jDh1eQsmfcrgiZg5%2B4HIeTgkAFP2mwIe27lDGs7naZRkQcJBxnTqcFsHRxBUuC%2BJSX5lQMNCbhcAGOqUB%2FNXFKR%2BvKVS%2Bmy7ifpOtDQKJCrzNGWUaZTvmejNU5gm2PGYtq9PqHfbAYKflQM0F%2FHlzTt%2BogVGZYETkPGEoQVpQE%2FlPBazqB2oHHQ5cW7rEkWjHIAla3cWsV5fLbOizeTlNkMznpmiZihPqdLY35kpH%2BtCnIx2vPzLEC4UoKhENUzoEA6h8Zkeo%2Biz3ihoHUt2FrL%2FyaLpNUcn3iz9I9TgRI%2BT9&X-Amz-Signature=6b2dfd1a1ec7a598a823d9501732bc3f5ec9fd1cc52e07b61605b7bb4769ed08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4RRDJ6Z%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaeb3%2BczOQLWiI%2FOLsqVgMWpC8ZWOUHeHYoaeC5FCzyAIhAMaeAoN%2BbSZK%2FoHqOqo2GeCazBdq11CtEM4EoXchRhGmKv8DCGQQABoMNjM3NDIzMTgzODA1IgxNw3sDf72cpCAp6hkq3APQSON%2F57rwbx1phGUMe9j%2BmQ7aXzlpV4OF3%2BrYGxZrwX8ENVbvUk4URfIA0w%2F%2Fy8k1%2F95sludC7myg5M%2BBNOM0Mbc0fEKVabDYigdp%2FqvRgk2UZPWoGiXzpeqaJcjRku1FteAqcqe5WnRJ0zdvCUaFYsCUx%2B003i321gzLpzRqMjj8zMZRMM5vUpBDBbv0nIE4NpYL%2Bb0FOzPmYBNcRpiOBAwIzSPKOCUBM1j0rpv4WD%2BP5YbsyayS7BClY4s0UsmNqsbixRON4E9uR5glYAPnmLVn1I8%2BpNsVNUCbejoVOHpy1oJEDh18BwTNRpZ6VKY%2FjCkcGzu%2B9CqoGrw%2BsEDMCmpLX%2BiGvyd1yA4dj%2FghDiS1ELu3XKRdpZLYS7%2BJpurpYZjOQZlZYkN4qeRoiDz3j3z5%2F9e15ri%2FUpz14Yw11cwqfC605U6dMzMO5fJ%2FdoxqreFGfa2X3OMf%2FTDiZIVpwHt1abF2F3UmsER011XKGLp%2BkYZZcsAnLgoTn%2BeA0AVKYH3H2yAo6OCGUWp9PIRd4mz5DDypI7kaiWUrKSc1klOqVSEVd6o2AwXjWYaWpkZJ6ikdQ%2BrLGbcWEQJMM2ueJUIKy4vjlQoFFiZdnHCXPFql7MdcfSkECMAnITCwnIXABjqkATjqfWUUnsyfsKjlopaNUbkZYHVwGE24QZgBIr53mVNWArVE4UaNM9GYJ%2BzvsHNFqUu%2FQwrlpSLUJUUxnZlrsO1YV64ajyvK7z%2BRp4gzL9Ml99WoiQVlcZAcDMQh%2Fi26aTTVedgr3DnA3dLC6RhIiuRPwUE44kae7NCEytAP8mNZinebQaNjpMwT35oRHnTOnXbRotVPTEA6Z9p5XTnNdrPEZPRz&X-Amz-Signature=abd8ff57f6ff654423a50ec566cfb94970100b1fd8aba70921e20049d80f1eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOJCL227%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbw%2FQMo0bO5bipqgFvxJ6p%2BjDsx67LuJ2ujSubrWNXJwIhAP3s%2Bdt%2F5a16rrMDPf2gcQ4m15qJ0Hf58Zxo9kOwov8KKv8DCGQQABoMNjM3NDIzMTgzODA1IgyyoCq7h1vZgu2bk0Aq3AMwY49zOl7%2FKB2LW9AyiPIAGlUSW9N7WMGQRKMg%2FEgydqCf7rLSZKEEIyxCwwhmUBy%2F0ip1gh62SuUJ2d%2B02UMjksFXrb72El8%2Bsenr0NfMdVQCTijHiVyTtxVlZy6NNiwFlsloQ%2B6xpgaYhBAbN%2FK7oxt5XhKNJgQPhumYDgz4jYID64iR8kqJ5O6i4pz7y0TrHgb%2Bf%2B%2FSbRE%2BXig%2BHKBGoADQvsS9c4wlfy%2B5EQ%2FCYkcVY22W738A8nU9MsRm7n3RdEj0sxUqqz8%2F1h5%2B8t%2B1Cwe4nXPCBoUjbwbqOmbqinYtFyDaKLmT9iPDJI0DUKsFqIOEn74Pm017%2FS6Xej%2FmNjZ5T2bQNpQRRkmRdAnIStpDLTVS3A54Hdvdv4gTHy3LsLE51g6chPSTYkaUon0jheWGvHFZor39Hp12lA5%2BwUItmkCT7%2Fxhq9j6KMi3iT88m4qyz1QA7PZjowfpN4r1dP6QqZHY5q6NQaxYCBMj3Lnr3yDKBIjfWSwEh%2FYvKsPT7mJRwezQeCs%2Fi4%2BS36GCn5o1Y3Oxjt9rwIhaNoPrYxKyQYqn3oOcgwtcdKXXqJFT7ejLbJt7zk0piZAKtcLAUTl39raItrOG4nr2WJgGQeasiNkrjA6agmOgvTDnm4XABjqkAfuoABIukSYEBlXowiaYCzdSaWt7LDYpgz2OBGLOSV0bxc%2FQUzzbVc%2FtJhCw2EhNfAZ0GaheXRkXODuqX59umcjzKOKLdOtnlYKM%2FTvj8swwxrvbqYahMDDYlbR3jxiV%2BGnUHAd%2FhknCcmxBiz3J9KCE7hKIYr0ft3hfLF1efguP1XcHZCBF9q1tXpGL0Z5lZEB5xDqzWiHxGXY9QfDnuxuxc7gM&X-Amz-Signature=21ee3f00f433d2781783041a9f8acb7855b7d6ead058edd15dff2c442de633ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PQPYBZS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJglTPvX%2FUeMasCqsUkjcxccgWKeRwo90OgPclyEgLGAiEA0W%2BGrDEiwlpX6xmLmxmhqdAtYM%2FbrgJrg4H7KZiiWaEq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHh9E0ocavNx25ng2yrcAztjMo1DXBxJJARNBYgAVYYkzVhyZqJSWOJJNWm4UiUibXn9DL4%2FaoRvRks90Ipvc57AEOk5VfCO018tsT4hTw%2FmDuNYRvsdZq8tWqPw6vfk61dY9iwHdvcu28Xi9stgkXi0nzyUse6efv%2Bq2JBAMqInM4Owqvhpn8SAj20%2F6FcPcU6%2FfGXp8mXuzfEcvviQQ2BdNe8ScvyfiSLoasXRaIaOVsm4EJKmhsc48eVkIKS0CgCPZVUSYlDWrfjE8Lf%2BIGunAcxdWa9GTPe4GZ8X3Rb4QdAnkcLibgGAGSx6WC0eLdsCMJO6eIsAPSyDDlgzZMlphQAtFisNE%2F25lorbt8HrvCG%2F6Tx3jiQKO%2FD1biqfN3tJwvhIWCLrt8BPqPIkoX9uIaAQJ0XbODUwZiFDWv7nFBgkfu86m1%2B3ECgGQ8YFzDl1xd7ribZWcQ5T2BAEze6SuQ33jhEvBCCNhw5JQKxYamrcsIrVdiFwKbj7KLsA1EyoTpfcnNEed7nS8pdXVqz0o588%2B5bhW5Sb%2BlyqxjmV9RjlSqG1Q1NScxQ2bkdPMu%2FBbJ9Kgw5jDh1eQsmfcrgiZg5%2B4HIeTgkAFP2mwIe27lDGs7naZRkQcJBxnTqcFsHRxBUuC%2BJSX5lQMNCbhcAGOqUB%2FNXFKR%2BvKVS%2Bmy7ifpOtDQKJCrzNGWUaZTvmejNU5gm2PGYtq9PqHfbAYKflQM0F%2FHlzTt%2BogVGZYETkPGEoQVpQE%2FlPBazqB2oHHQ5cW7rEkWjHIAla3cWsV5fLbOizeTlNkMznpmiZihPqdLY35kpH%2BtCnIx2vPzLEC4UoKhENUzoEA6h8Zkeo%2Biz3ihoHUt2FrL%2FyaLpNUcn3iz9I9TgRI%2BT9&X-Amz-Signature=b46eb2c292443fdcecf60b5ab14641ef017abe15b50a52b17d865a41c435445e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
