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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN45UA4D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDNwalG41HNTZ1WcO6uI2k8KzXnnM%2Bl2PHQvkrvAKxiLAIhAIZtnJkukV6%2BfOyAMyTQTJi7uUsQRSNh%2Bb9eURrvA7BuKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEwxnAZYduC9T1Np0q3AOG3xA8nDwhipv99JrtnHRiIhHtj5L1m4UD1rgIeE6mm5ztW%2B5DguHMzvwhYiK%2FeZq068op41zR%2FOyjEyixw9gDzzzZTwfHWozViIFWpd10I%2FBfOfUzrhQR7qb2GX0K%2FX2b0Eb%2Fhfbqnn50x%2F%2Boipge8Ra6KavNquxDKsLGKiRCKN8VO9wULOKDj49Kv4fwESL76RCLsBtm36W8VdTao90hZAnf2J%2FI2RCeFQuX96mJ6EpUKR6iT52BAlflZXGPb%2FjR2wrJFpWPk8aMIOIZ4qdBLUvRH09Zs7%2BPX3JKYVnU9Uj4KRVql%2BmO06dFGksBC0ZkEvHeww67Ol%2B9YD%2BXEexX2bLs%2BYySRJhLaoZy5c59YgGJc5%2F7KL3YHKNEW6r%2FMKF%2BISgxoMQVIKr%2BC%2B56PgfOLtnncv3%2F0B81jAO9%2BdkvGKubKAzBKZ0T9o%2BFmOf1zmQHQax1fC6Ejh%2FvJ6k1Cei9arQqpqOtWfy6Ka7GRZTr2Acyed3NA3CahKI4rkBJnKtrKIuZFz6bi4OoWSgkopHbCTjwljrSL9udVy6lL4W9RII3LWhi3DcnGIhH85JOJKw1Ke5zCUlx%2FU75aWr%2FBxXe7Vf3Qut1h2iWWBSBcUYXwTtje9IeajcR%2FaP1ujCD7NDABjqkAdIJzI91HyT%2FitdvKFPZh16HRtF7fnIaGsWIEYBkAu7wdwL45AAOHw%2BMeK00r3l1LSaP67mmvCfbjVU3Xh33c8kSlq3yCqwtDotIEQ2H4yYu3TFHp80LLSDHzh7JDM29y74wunWZwUfjqqeXRP3A%2Fw0nzU93hWsw41UL1PWClkNkZlbF1uN5LFHYvQd774m0Xi7wfFoUMLXt%2FjybrdgYESIfIYw2&X-Amz-Signature=1a30a4ac1635a40726db737b7be169bfe3480f9b71c40e4ccdc756cc1e4cec4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN45UA4D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDNwalG41HNTZ1WcO6uI2k8KzXnnM%2Bl2PHQvkrvAKxiLAIhAIZtnJkukV6%2BfOyAMyTQTJi7uUsQRSNh%2Bb9eURrvA7BuKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEwxnAZYduC9T1Np0q3AOG3xA8nDwhipv99JrtnHRiIhHtj5L1m4UD1rgIeE6mm5ztW%2B5DguHMzvwhYiK%2FeZq068op41zR%2FOyjEyixw9gDzzzZTwfHWozViIFWpd10I%2FBfOfUzrhQR7qb2GX0K%2FX2b0Eb%2Fhfbqnn50x%2F%2Boipge8Ra6KavNquxDKsLGKiRCKN8VO9wULOKDj49Kv4fwESL76RCLsBtm36W8VdTao90hZAnf2J%2FI2RCeFQuX96mJ6EpUKR6iT52BAlflZXGPb%2FjR2wrJFpWPk8aMIOIZ4qdBLUvRH09Zs7%2BPX3JKYVnU9Uj4KRVql%2BmO06dFGksBC0ZkEvHeww67Ol%2B9YD%2BXEexX2bLs%2BYySRJhLaoZy5c59YgGJc5%2F7KL3YHKNEW6r%2FMKF%2BISgxoMQVIKr%2BC%2B56PgfOLtnncv3%2F0B81jAO9%2BdkvGKubKAzBKZ0T9o%2BFmOf1zmQHQax1fC6Ejh%2FvJ6k1Cei9arQqpqOtWfy6Ka7GRZTr2Acyed3NA3CahKI4rkBJnKtrKIuZFz6bi4OoWSgkopHbCTjwljrSL9udVy6lL4W9RII3LWhi3DcnGIhH85JOJKw1Ke5zCUlx%2FU75aWr%2FBxXe7Vf3Qut1h2iWWBSBcUYXwTtje9IeajcR%2FaP1ujCD7NDABjqkAdIJzI91HyT%2FitdvKFPZh16HRtF7fnIaGsWIEYBkAu7wdwL45AAOHw%2BMeK00r3l1LSaP67mmvCfbjVU3Xh33c8kSlq3yCqwtDotIEQ2H4yYu3TFHp80LLSDHzh7JDM29y74wunWZwUfjqqeXRP3A%2Fw0nzU93hWsw41UL1PWClkNkZlbF1uN5LFHYvQd774m0Xi7wfFoUMLXt%2FjybrdgYESIfIYw2&X-Amz-Signature=788ed9e46241b2de88e233648312e0ebcde4909011c332bebcab24b99aa7a70e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN45UA4D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDNwalG41HNTZ1WcO6uI2k8KzXnnM%2Bl2PHQvkrvAKxiLAIhAIZtnJkukV6%2BfOyAMyTQTJi7uUsQRSNh%2Bb9eURrvA7BuKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEwxnAZYduC9T1Np0q3AOG3xA8nDwhipv99JrtnHRiIhHtj5L1m4UD1rgIeE6mm5ztW%2B5DguHMzvwhYiK%2FeZq068op41zR%2FOyjEyixw9gDzzzZTwfHWozViIFWpd10I%2FBfOfUzrhQR7qb2GX0K%2FX2b0Eb%2Fhfbqnn50x%2F%2Boipge8Ra6KavNquxDKsLGKiRCKN8VO9wULOKDj49Kv4fwESL76RCLsBtm36W8VdTao90hZAnf2J%2FI2RCeFQuX96mJ6EpUKR6iT52BAlflZXGPb%2FjR2wrJFpWPk8aMIOIZ4qdBLUvRH09Zs7%2BPX3JKYVnU9Uj4KRVql%2BmO06dFGksBC0ZkEvHeww67Ol%2B9YD%2BXEexX2bLs%2BYySRJhLaoZy5c59YgGJc5%2F7KL3YHKNEW6r%2FMKF%2BISgxoMQVIKr%2BC%2B56PgfOLtnncv3%2F0B81jAO9%2BdkvGKubKAzBKZ0T9o%2BFmOf1zmQHQax1fC6Ejh%2FvJ6k1Cei9arQqpqOtWfy6Ka7GRZTr2Acyed3NA3CahKI4rkBJnKtrKIuZFz6bi4OoWSgkopHbCTjwljrSL9udVy6lL4W9RII3LWhi3DcnGIhH85JOJKw1Ke5zCUlx%2FU75aWr%2FBxXe7Vf3Qut1h2iWWBSBcUYXwTtje9IeajcR%2FaP1ujCD7NDABjqkAdIJzI91HyT%2FitdvKFPZh16HRtF7fnIaGsWIEYBkAu7wdwL45AAOHw%2BMeK00r3l1LSaP67mmvCfbjVU3Xh33c8kSlq3yCqwtDotIEQ2H4yYu3TFHp80LLSDHzh7JDM29y74wunWZwUfjqqeXRP3A%2Fw0nzU93hWsw41UL1PWClkNkZlbF1uN5LFHYvQd774m0Xi7wfFoUMLXt%2FjybrdgYESIfIYw2&X-Amz-Signature=522471ce2a33d948b2ba164019a4dfe921092f44a9eed5f051e63bfc15d968eb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHIHHS4G%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDSNdBpDeR3Zbz9CYd5aL3KtIKDY8UQqEHBvOt8eLX2TAIgec3I9Dr63aaGz4Ab4TEMs6ppS%2B0yq78m2SAxLnZ%2BhiUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxmkTv7whIf4fjvByrcAxzlvYrZC0CTJoVDZt9e%2BpndhLgaOA0rHRTGtNRtYTM5y4fx6VOcxXN%2Bt9%2Fl%2FRdksuvGPJNhrp9UGMNG%2FW3qRNWcXakfSYT1pxuJSjGvHCqw3zsG0VHjkjXqGVRCNj3V9OgoDgSqWS%2BmDR9Yd1Wu%2FqPxTatknDdj%2BY4OOGYZoe4c8A3qO2cUIgAdZ9r2iyFrU9Ap841ato2FhCAqtqoogYiNLr4ntjUfVyGrNV0kxBpZvwjnI5OgpfOB%2BwjL5RzhYbZQjyW%2ByQfxvLlGvjfHYsSEu3cwlFq9dGuHnxxaiGBEj9t45dncnej0yppQc8KaVouGT8jjlmirFkQp2cONeklLZObAbY4SicVt%2B0K%2F9I0qc5L5oLegLcyGhmOj%2BGIwD6ABaknDYJEpwFK%2FRM8B0y%2BQxZibJu3eP%2BHy6pWnhZ1dyTyKtULTM1KQEHe0iS4FINRnijl2%2FkMUVTERROKLreJEH7QNQAGgmtoPfTo4VDlD5NbTRe5DITuCqwfIWlgErFxqAylbyr9MhbR4dqHr4cS1%2FqplZNLMp6MIIyMujWDW8Ytszx5puOc3x00ESGw5gOI%2B3iUzCVu1qbao2UEjFXXasr58c1uZv9mMHdfAhIb0QgVvggDAP24SOSNUMNjs0MAGOqUBn15uqn45WOIsYaa8OwfBVi2qCC2HV1s1DoIK9Z19BFfdvFxBWzXeweNEGuM%2Bx8IwaYkJDCl%2BxeNWM5%2B7lHOvvha1%2F55GY%2ByCahRu4oM8tWjLTpZ5UVYG%2FPIXkeRYnD7O1womh236Rpv5YUT1E9qS6QtcOg9Qlsoi6UT%2Fl6RQ64k7aEBHwCuDq5Mp8mcguGFmbGQvzIupFraDiC6a%2Bs1CT%2FiKrLfC&X-Amz-Signature=cb51918efcadfb0d39cee6cf53bdfd986dab0d28442fd806ec222f8117a6baa7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTMADP4V%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDbMrRg5PCAb9v5Qb4iTPexElW5aIdjvGhF61W4zlVvRQIgD4tprjKOSXR0Oo%2FNJRELMi5zjSI4fBdJfKQxcFAJHkMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCumUtysIlB4z8TayrcAyxgRvFDVGGme%2Bcjdhc4beieZz1dXDhfXHPTc7TZBwT6VzU1ke%2F1zXBMI7FtqpD16Paya%2F7rMQykCVPD0aHjNNTdp7qjb14zf78sRe7bc7p%2Bve4sTB8aWFxFk1TUcnLSOe8V2BOeP31vJccfl0%2Fmti5CRLCoc1GqGON96EV5I9BmWhm9q75xj9N9aNnmLghKKRlABLI%2BWBtA%2F2wHqUjPxB6252%2BYf4K4uerMDSPkgQZR74%2BAMR2RNqQUKYR0mr9hacPrxysk3WEBdcZn4AwXZcnzgwhP9gTxbHD7Rj548sAAi21zq%2BGPigfLFL2G%2BfnFaDykV%2BbB0Ef5Z4Qh3KTNlu9vPlV2ff%2Bc7XfzxX2HZLq6TokXi5IPFG23v2y9tGlB4eHBXzVbwraW%2BSqaKYtK%2FgT%2Bqc%2FA0PW0qqY93jMuMYxtVBdvCkmFBcMlGFghdpXWcxD0srFKq4psrR9mvRvezP2qOUCGeBAMqCYsLeCPryySjcd07WXpvT32JU7cZQV175E%2FuXqhbgs9FCL6etJESE%2BZ0KKeepZh2aU%2Bcx%2FE%2F%2FK0kQwU1wQ2ozvlxaTycjkXEUD%2Fs6LfrEjjFnw6WvFD6PLjsdnBbWsCpAIbWsTemZ13uEhW6OzPK2GsVWPUMPfr0MAGOqUBzbArSOTQzEFTH93u8unt6V0umZPITJbdwzQr6cxX11Gvzxhqzl9lfwkjORUHv%2FCMTruNAvp%2BrikVWVX8DbbiaqzTcBUraaMPlqW8P75P4RNmu0DNghEsnXLw0J7atOdpSPKxxjrLdtr%2FG6Q21cCkPZ2R5IbxD3BEJVQXcTnyvpt%2FPLmXIAe1WqQ1xJxnozkSNeOml3BFgu7ZjbxYZzGiTfaDP1rM&X-Amz-Signature=41165ef5de130c7cf35b477f5204126ddb3db6c6b1aac8a0e78947b8acb3d371&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN45UA4D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDNwalG41HNTZ1WcO6uI2k8KzXnnM%2Bl2PHQvkrvAKxiLAIhAIZtnJkukV6%2BfOyAMyTQTJi7uUsQRSNh%2Bb9eURrvA7BuKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEwxnAZYduC9T1Np0q3AOG3xA8nDwhipv99JrtnHRiIhHtj5L1m4UD1rgIeE6mm5ztW%2B5DguHMzvwhYiK%2FeZq068op41zR%2FOyjEyixw9gDzzzZTwfHWozViIFWpd10I%2FBfOfUzrhQR7qb2GX0K%2FX2b0Eb%2Fhfbqnn50x%2F%2Boipge8Ra6KavNquxDKsLGKiRCKN8VO9wULOKDj49Kv4fwESL76RCLsBtm36W8VdTao90hZAnf2J%2FI2RCeFQuX96mJ6EpUKR6iT52BAlflZXGPb%2FjR2wrJFpWPk8aMIOIZ4qdBLUvRH09Zs7%2BPX3JKYVnU9Uj4KRVql%2BmO06dFGksBC0ZkEvHeww67Ol%2B9YD%2BXEexX2bLs%2BYySRJhLaoZy5c59YgGJc5%2F7KL3YHKNEW6r%2FMKF%2BISgxoMQVIKr%2BC%2B56PgfOLtnncv3%2F0B81jAO9%2BdkvGKubKAzBKZ0T9o%2BFmOf1zmQHQax1fC6Ejh%2FvJ6k1Cei9arQqpqOtWfy6Ka7GRZTr2Acyed3NA3CahKI4rkBJnKtrKIuZFz6bi4OoWSgkopHbCTjwljrSL9udVy6lL4W9RII3LWhi3DcnGIhH85JOJKw1Ke5zCUlx%2FU75aWr%2FBxXe7Vf3Qut1h2iWWBSBcUYXwTtje9IeajcR%2FaP1ujCD7NDABjqkAdIJzI91HyT%2FitdvKFPZh16HRtF7fnIaGsWIEYBkAu7wdwL45AAOHw%2BMeK00r3l1LSaP67mmvCfbjVU3Xh33c8kSlq3yCqwtDotIEQ2H4yYu3TFHp80LLSDHzh7JDM29y74wunWZwUfjqqeXRP3A%2Fw0nzU93hWsw41UL1PWClkNkZlbF1uN5LFHYvQd774m0Xi7wfFoUMLXt%2FjybrdgYESIfIYw2&X-Amz-Signature=a616263f2ac4942b5d3600a8178493aa2aabf03c89035c69ca7d70fba18898a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
