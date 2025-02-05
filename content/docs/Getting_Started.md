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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5Q3B5E%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEsni0HFCeiyHQLhxW7dW1IdhGCzIn9oBCHj1bzt9V3OAiEAoRnpq3ennz9%2BwQ%2BAwH3%2FoCqL%2FKLLWQFD9PTHnGb8jisq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDZeawplt8Qz2%2BTD9CrcAwsmYUcVWajDVS3xM43bjO6zQ5Mu0YMqqOBRpQOxDNhjD%2BQocoEyAb73oYBzTSlcY5IDgL0lw8r4SNihNXO4kkPNdEXNae1GR2gM6Gbr1qOUVvZvQS9XZ3XmJwlFWAqrEqlcHBm4pbme6n3s8ggOBziifnzlVr8DuE5jSvsqE4XDtf%2FLxccOq%2BrOyH2M%2Fj6tO93MzsVS9waPht4%2BEfw39QoFVunEOzCguojmhel%2BPOv2hVMUh%2FHMW%2B73Ck5ep%2Fg1PACvrWf2Q4%2Fd9chm%2FiUF%2BhkmlHohR5AEoQWkPm39u0hohWy0o5AVu7RX28m23x9KWZLgdqNuZOZpBDsDxi51mAVi98YBNxlPg19zsUJzG4sDby7gXTf2G8%2B7LDbti9hNwDwstnbPB0kvU5oLVtxHBDLOgX24a5jo4wd8TMSky7pjgKMBLiB2LEoZIdCTlM1o3WIrYiGaS8ZKJrI4TAmbkHoMwoGX9D93XpM5gOBVt8zWJsxY758JJCVbMesV05UJZhHVEvnzJ2TFjv%2BZ484Jw2iFfd%2FcZAAZeJAT5HH7Zo9YKL06PtqBdq6yPgyT0CpmqJPyirvFx2piiuoymaxsauWtHprbVrOibjsrzMp4wFS9vRuXleHYGYDBXUgtMJbRjL0GOqUBYNn%2B%2Bqnyw9xHRcweGi%2BfyBV7sOMYkr2l%2FDvxqRRCYp6OYYyOJvO6SJnR0J%2B1%2Ffz0P2Txo%2Bo7X%2FjizR3bXlZJ2cze537Ufw0jUiilTF5Fo0f%2Bst%2FxUnIiqzdiTNQ%2BtfLLjBRQud%2BK8NQYBJkDXK%2FzGbb5lv60K%2FkO%2FlB6b669DQaivp2AOi9dhF7BC%2BnZwypO1Mlj953gvp54hxtu5fqss9NiuLtD&X-Amz-Signature=c7c975572d8de8fbe7e5b81bd689b3e64e80c06bc142bb9c891655ae9cb67924&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5Q3B5E%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEsni0HFCeiyHQLhxW7dW1IdhGCzIn9oBCHj1bzt9V3OAiEAoRnpq3ennz9%2BwQ%2BAwH3%2FoCqL%2FKLLWQFD9PTHnGb8jisq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDZeawplt8Qz2%2BTD9CrcAwsmYUcVWajDVS3xM43bjO6zQ5Mu0YMqqOBRpQOxDNhjD%2BQocoEyAb73oYBzTSlcY5IDgL0lw8r4SNihNXO4kkPNdEXNae1GR2gM6Gbr1qOUVvZvQS9XZ3XmJwlFWAqrEqlcHBm4pbme6n3s8ggOBziifnzlVr8DuE5jSvsqE4XDtf%2FLxccOq%2BrOyH2M%2Fj6tO93MzsVS9waPht4%2BEfw39QoFVunEOzCguojmhel%2BPOv2hVMUh%2FHMW%2B73Ck5ep%2Fg1PACvrWf2Q4%2Fd9chm%2FiUF%2BhkmlHohR5AEoQWkPm39u0hohWy0o5AVu7RX28m23x9KWZLgdqNuZOZpBDsDxi51mAVi98YBNxlPg19zsUJzG4sDby7gXTf2G8%2B7LDbti9hNwDwstnbPB0kvU5oLVtxHBDLOgX24a5jo4wd8TMSky7pjgKMBLiB2LEoZIdCTlM1o3WIrYiGaS8ZKJrI4TAmbkHoMwoGX9D93XpM5gOBVt8zWJsxY758JJCVbMesV05UJZhHVEvnzJ2TFjv%2BZ484Jw2iFfd%2FcZAAZeJAT5HH7Zo9YKL06PtqBdq6yPgyT0CpmqJPyirvFx2piiuoymaxsauWtHprbVrOibjsrzMp4wFS9vRuXleHYGYDBXUgtMJbRjL0GOqUBYNn%2B%2Bqnyw9xHRcweGi%2BfyBV7sOMYkr2l%2FDvxqRRCYp6OYYyOJvO6SJnR0J%2B1%2Ffz0P2Txo%2Bo7X%2FjizR3bXlZJ2cze537Ufw0jUiilTF5Fo0f%2Bst%2FxUnIiqzdiTNQ%2BtfLLjBRQud%2BK8NQYBJkDXK%2FzGbb5lv60K%2FkO%2FlB6b669DQaivp2AOi9dhF7BC%2BnZwypO1Mlj953gvp54hxtu5fqss9NiuLtD&X-Amz-Signature=f729ee44b68cda47ec87f3eaa44bd7bc08f41dc5c04c22d9d2fd04c34640fb61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XZQPB5X%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEirNYgmFGB3raVlA%2FA7lVOupwsb2YVFkTdmEYdNf5ajAiBHx0J8TeVP9sRuBYeReMpLZpawicNx0Ti%2FQL8ubBThZyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMcQcOWpKk%2BfT3a6MFKtwDwGjRG2kpOdrbHgP8iZkBtBhcU2YQeyYYaU0QJw4q3QygfNyFOy6ZjIvnFwyjh2AaNE2%2BmrlGXsl22F15kOd4bkImt3NRJi87WvgOTnelG2mGynuJmkedTZsgyE4wd0T6Dxb339ZTznAFqmfhNyVTZUw%2Bm%2By0tfgK8ZjezxoNA8CXZqK3kPgISGDNjrWsB6HNJe2EiR3XTS1q0rJPwn4lEL7Uy9HbkuET1xa6p9DcbuwHWmAbmbwcaM1t9gTIfwwU1a%2BNGHqyXBBcoe%2FEWEA4YxipeAc088B1bxlVkEWKi1k%2BQwg9fb5iYZGc54md0d8xR9TgFlQas2e%2FcjoJA5aujJ0kih4zRiXEG%2BAG5kVJqAlJDFRkBUGWtdLnCa598U3dQpIzhXUSBn5FZEkr%2BQTUJGBDGq17PWQBL5RoqiZMAoOpHd2kXANRWaZzgRx6jTf4toLgVQpdwdkCZmk8j1qzJxu2s0EaliYLNTGLIW7RiMcSF3vf2Nb%2FuDwyHcqSj4X0OGKvt%2B%2BxAWs4SFg1CG5M3KaonLkhWNDHikj51Ixw4i1zb%2BUN5uvwtd4f0D22ArAVvPnu8FwDblTAT%2FlKVLdhiX8AF0rGLLvaB5DXkDBiUc9iuSA2jqqdH%2FBnxRgwntCMvQY6pgFCnXQxc3D9N8d5hX0y39qja5gGYJRFwID6BFLlImUQ8TUARt%2FhYLng09j5%2Fkn6z5mq19%2BvJ%2BgFl19On1QdCicF2KMzoAosQz1vO1gYi4vvxn0soD44N%2FVvugMDl0mrXVZKsRls1Qtg26P1Jqw1I41jmj8E52eAZgMJ%2BxuiRd%2BooErATD6A6poYtJSJRU7y4AawtmpoPdL9dcjfGCv%2B5zn2TXMqLGYK&X-Amz-Signature=c8b842b4a2f9f5c885c2cb4f5db66f0f808798962566aebd61756e28e8576012&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP5DYDKY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDDpZICCbH1KxkQ1pEx17Oip%2Bm9OGRTUrHjR2WVIRsVGAIhALAF53t9WxD%2BEEdzkIW%2B2SBWwIQ3of%2BabgLTdtEHyeDoKv8DCEIQABoMNjM3NDIzMTgzODA1IgwAd6eyIAdIyEZDDIYq3APQ%2B4hRDsX39KtsQp8k4N%2F4%2B%2Bary1DKRg51y3mh12vCcA6n6i6t1gzd9xRP9PPOmnp4oMdxT%2BRCPXJUIzdTq22TTgZLDn01Df5wWvSst35SzchAhqKkEyLTUk6jaNTXnhjtunj9XfC6S5ElWga7mia8oJH8OCZd2doi1CpxBcGNW8dM76QzruVbFzX2oa5HJnE1hCU4gK5am4bT9Xsk6ODG4G2MdsFBTv6AjK223CGwgIRFsnI9GpiMF2IYEIq9a15xK%2BFCVZpS88GM1fb31RHl02QskX4t4SgI7QSRKA3D%2FyyNQyCQL6xH%2FAy%2BBzqr0MmoDSgPo%2B7AzwC4KlYwMrPpCARz%2FESAxTG8qP2t99nRYwGLr6f1RBIPiM33ld%2Blbv%2BnIrs9STLB7AJ4vaBVUageuIsd0Olb3yio732egYQiOPkT9LeXGBsOkp17aFd46FxeqOE8nFYABxhdNVHClW4R3t0szu5JC5%2FO3k9jBD4YPTGdlpdGctmk7dxRzTIvoBZEpdSQggCIEkKogEXPetJeXw8wj3zNTQ3Vq%2FxdbjizZhqboLowkdkWaGEpQKdZYWRIy0ePvID6t24x1YrLo9RhsN1nuxvdnq0mnSe0mWdc89y0%2FNfFegjy5TAmRzDu0Iy9BjqkAbsWYQ7kvFN3sR4EWmrISw5t4Ffk3O0qIkkQ%2FiJoszSNp%2BR9NG3g9M1aAEVjKU6vMBlCYnAhFBWhE5WONbjiONxkPVeJI%2FjRbg8fQRtYRTIR88WiulctnycoiOYhSGU0iJPqWSnN1e0WTPqlEYvJtEtW4xDhKPfrvLMWNwV2wTlHnWX5d4mbgIfz%2FHQ0erCUV0CL282%2BLkI77suzx%2BrS3uDuTE%2Bv&X-Amz-Signature=418f0998cc4de9ec21126d632896722dad3730fb3684d167f4dca95227dadcd5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5Q3B5E%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEsni0HFCeiyHQLhxW7dW1IdhGCzIn9oBCHj1bzt9V3OAiEAoRnpq3ennz9%2BwQ%2BAwH3%2FoCqL%2FKLLWQFD9PTHnGb8jisq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDZeawplt8Qz2%2BTD9CrcAwsmYUcVWajDVS3xM43bjO6zQ5Mu0YMqqOBRpQOxDNhjD%2BQocoEyAb73oYBzTSlcY5IDgL0lw8r4SNihNXO4kkPNdEXNae1GR2gM6Gbr1qOUVvZvQS9XZ3XmJwlFWAqrEqlcHBm4pbme6n3s8ggOBziifnzlVr8DuE5jSvsqE4XDtf%2FLxccOq%2BrOyH2M%2Fj6tO93MzsVS9waPht4%2BEfw39QoFVunEOzCguojmhel%2BPOv2hVMUh%2FHMW%2B73Ck5ep%2Fg1PACvrWf2Q4%2Fd9chm%2FiUF%2BhkmlHohR5AEoQWkPm39u0hohWy0o5AVu7RX28m23x9KWZLgdqNuZOZpBDsDxi51mAVi98YBNxlPg19zsUJzG4sDby7gXTf2G8%2B7LDbti9hNwDwstnbPB0kvU5oLVtxHBDLOgX24a5jo4wd8TMSky7pjgKMBLiB2LEoZIdCTlM1o3WIrYiGaS8ZKJrI4TAmbkHoMwoGX9D93XpM5gOBVt8zWJsxY758JJCVbMesV05UJZhHVEvnzJ2TFjv%2BZ484Jw2iFfd%2FcZAAZeJAT5HH7Zo9YKL06PtqBdq6yPgyT0CpmqJPyirvFx2piiuoymaxsauWtHprbVrOibjsrzMp4wFS9vRuXleHYGYDBXUgtMJbRjL0GOqUBYNn%2B%2Bqnyw9xHRcweGi%2BfyBV7sOMYkr2l%2FDvxqRRCYp6OYYyOJvO6SJnR0J%2B1%2Ffz0P2Txo%2Bo7X%2FjizR3bXlZJ2cze537Ufw0jUiilTF5Fo0f%2Bst%2FxUnIiqzdiTNQ%2BtfLLjBRQud%2BK8NQYBJkDXK%2FzGbb5lv60K%2FkO%2FlB6b669DQaivp2AOi9dhF7BC%2BnZwypO1Mlj953gvp54hxtu5fqss9NiuLtD&X-Amz-Signature=4a62546dc2fe9eed2ec350214b32d5c49b2d041e9708d07de466238ed31cb5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
