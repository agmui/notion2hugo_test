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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4K47MHG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDWXVXrgm9MbsPMwkDZQp9ALgOSVwR9zdf3o2kV6JJ2awIgNUckrsrc31AlAVD4Liun6oqLDlbGEwC7AXPgasxT%2FcYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAIZx2%2Biv3FmpE99ZircAxG2WPNtEws%2Fom4c%2BV3kbFOpEpHI%2FetTBYgzDbpLz1x%2F0KvfoTrdjePcyxds7Hu%2BZ9BIss%2FRIjJ%2BAJQTmLWXetoMXNbaSYgTnhj89%2F01qSf%2FGqIlU72EEMFYNQMJZQVgNgVDzmtPikOwQJ4hFNoMXoEf8cEzLI4U3eI3uDqBIBhRGg4DLxqCIvB%2BCpQBN8THI4uCjW6xl%2BuwYB6iEQ4vN6gTvBXD0pJBhDRBhuPBsacmEmm6oxXNcvN2JdRhKhwCuVs0iP4A7CabLXVjQzif3lkR8OV%2BNJn%2BbRk9ZKlOwTU9iBnGBU3kfGeydXWq18i2jloi%2FHT5feThRoR8v0QVYZYmUrPQg04xp%2B%2FoNMcxAuBCuJbzAbIBA2Ah7WDxsYY%2BF%2BJOxHk0qWhFU8Q%2FIAIgU6lSe3RqZTGuvTfW%2BnqIG4ET2MXqQrE3eZwNLi0eaDGmhhcxtjooBrp6s9a8%2F3XcobznXpSvEghvYQFAqxn%2F8C7iinJ04Ny0Gm4S06j1ZgisbHtUwUgLMOHa3GKzj2Zk%2BzWm6UmUiSpZ%2FfuRHWOcPHtaH4sUzzVI7fZBlkRY549dnCr5i9K0s6T%2F9DR31XAV3iOpvcw%2F%2B%2BRR22iFPxuA1Xut0KXHQFvZ2O3tkIeDMJ22kb0GOqUBlEB551Z7Wzg3A8XbgmYuyrDXv4YBThVrPWIHY%2F7fgRg%2F%2BTGBHQkircOtYwXkvajnEDHZCLiLGYuBwuWYqSvVGm5ed7t5mXeBu%2FMEHUH7wot9u7nXzL84N5IYbr7GvYdaEnuy3AfhzsEQDrL2Jn2CNoWlfXauOvStGNrL029YivvVLNEfPsLMf95Qw46B5GDlEWAkdSRjr2ixYNdUrWeidoyVUpjU&X-Amz-Signature=3d73769f071fe65a9364abe03d48fce90182ff87e6c94a4ab264dd2ae2c5e9eb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4K47MHG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDWXVXrgm9MbsPMwkDZQp9ALgOSVwR9zdf3o2kV6JJ2awIgNUckrsrc31AlAVD4Liun6oqLDlbGEwC7AXPgasxT%2FcYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAIZx2%2Biv3FmpE99ZircAxG2WPNtEws%2Fom4c%2BV3kbFOpEpHI%2FetTBYgzDbpLz1x%2F0KvfoTrdjePcyxds7Hu%2BZ9BIss%2FRIjJ%2BAJQTmLWXetoMXNbaSYgTnhj89%2F01qSf%2FGqIlU72EEMFYNQMJZQVgNgVDzmtPikOwQJ4hFNoMXoEf8cEzLI4U3eI3uDqBIBhRGg4DLxqCIvB%2BCpQBN8THI4uCjW6xl%2BuwYB6iEQ4vN6gTvBXD0pJBhDRBhuPBsacmEmm6oxXNcvN2JdRhKhwCuVs0iP4A7CabLXVjQzif3lkR8OV%2BNJn%2BbRk9ZKlOwTU9iBnGBU3kfGeydXWq18i2jloi%2FHT5feThRoR8v0QVYZYmUrPQg04xp%2B%2FoNMcxAuBCuJbzAbIBA2Ah7WDxsYY%2BF%2BJOxHk0qWhFU8Q%2FIAIgU6lSe3RqZTGuvTfW%2BnqIG4ET2MXqQrE3eZwNLi0eaDGmhhcxtjooBrp6s9a8%2F3XcobznXpSvEghvYQFAqxn%2F8C7iinJ04Ny0Gm4S06j1ZgisbHtUwUgLMOHa3GKzj2Zk%2BzWm6UmUiSpZ%2FfuRHWOcPHtaH4sUzzVI7fZBlkRY549dnCr5i9K0s6T%2F9DR31XAV3iOpvcw%2F%2B%2BRR22iFPxuA1Xut0KXHQFvZ2O3tkIeDMJ22kb0GOqUBlEB551Z7Wzg3A8XbgmYuyrDXv4YBThVrPWIHY%2F7fgRg%2F%2BTGBHQkircOtYwXkvajnEDHZCLiLGYuBwuWYqSvVGm5ed7t5mXeBu%2FMEHUH7wot9u7nXzL84N5IYbr7GvYdaEnuy3AfhzsEQDrL2Jn2CNoWlfXauOvStGNrL029YivvVLNEfPsLMf95Qw46B5GDlEWAkdSRjr2ixYNdUrWeidoyVUpjU&X-Amz-Signature=304a4efba3e1d6c920ae07fae478e8555aa991a721b7039dea0d4c3badd39b38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMTTA6U%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDaePJkFcp6oqtC3FWDEesc%2BIH2tkiiUNB8ODFNIfe53AIhANlp%2FW3VLyMJumyO4xy7EfZIasKybhy%2ByCZc7be9cIW%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igy4x9WrfrGc%2FWDLdjEq3AMx1UwT838O60qYjFqAWsgHLMpU1IhoPF%2FOPjXAV0RGqayd8vU%2BAyMszyUjgE7DbxkGa%2FH7xobIYFlCPwHTHbEgMYNUntsGabBqjoKxpQQfvXraqWttelH7nEW0JMNruxA3gLnmsjE9OCVrvqr%2FEskgho7ozKclTGkbBvi8jj9JfRSkhzN1oS9H4syo0UVUDwiWosmspscOPA4j%2B23bfcKo49hpXFa1iytwko2rfqm1a7TRDG98S9CLfdnXvBNiNShqjDIPHAGfrZp2yGGEPFwi9GsZxVVMcao3gQ%2F3DRBdJYCWDbaFxhOzbtmgWb6oGIAaPVQl2Ha8ufDJXTcZFEF4yBLMrlZvg2XyP1Bt7%2FVcc5P6fm87M6uI6iD3xwHfAOs3MCAkIpnwhxC21qPWxcDsVRqgxz6yMhc1ncZbAJm0OB%2BSPqDpEdjIi4n301Sha4PPn9%2Bj8c2Sz9nl0K9qiBAq5RgbcGjQbfbC8VwrYzsDypQgmJHapEEIPhEto3FVGNU7jSSiBjTzpDZ3H2Rz%2FzwWA9jmA7IkC2V7GooHJWBToyalL7%2FBTWcNLjvi8Evymr3il4D6yuaNuU36kzzhX0vVwnOjIWQyUJScASHxXCIx%2BpvLaoQDVF3ALYUH0DCHtpG9BjqkAez3nlRdTAGBOubl4x7gO4mcpnaJBdi3JOrDIuhLCuEior79xLTGIf223JhQf7TsYDEG48jXvLea4la57C1QFGyQGurVgQVjHSIujz3msC7iHuiGqzzXx5Rffh30xEXm%2Frwp6M%2F2Iv8gCZmadse26CdsNeXOgfRnBL9rBpGKp%2FG3XGa5Jl63bMaQ4ThZZKy607jDI1SeNbIT8d2fsaV29DnAVCrr&X-Amz-Signature=63072132370c207e6f6ac391a74d8731ee20663599f58f6e0cd30da0547cb21d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5W6KPE7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGdDnCOOoV1OrdAdhHkq1Um0CTvZrHtzAMfkuIxF%2Bm7aAiAULZNNW%2Buo48W9iHPcUSb5274ZRzDXtaX5rQYIxTX6Xir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMpy1olzGeqylFqzQ1KtwD4iX%2BdFsfxsQz8AOkre4tt2B3HRgdMe8UVOjvAGgsTD8JH123OvVP3FICz1lVneOYFg3CzuKVkgazDXthCGBop7mdJl3KSzqLFkYhMU5L5wiENKrPaFipAvKP5SXuMguV1dtvH8kWIqzXkNexQslJTh26%2FeSPr6GTtZjF9UCgu73l7AivWRgnrcgwLh5x1BMylsxOryj51qJ6tHSbJ5KLNgpEf77kxa8%2FDISQrAQcQnJBjQlqBUW%2BoK%2BZBX2xb%2FUIlZP3C6QGmMMbCO7PmL8khq02Nd09CjemTG0bqLAjQQGFPJjmNITlNvMrmkE0etJo%2B%2FGPjgY03z31v%2FjIYfeRC7AWEFasq1OdpkMV5cA1iQcs0mnucNSihJ4%2BIlVBX0holKJE78FqvVA74%2FdSzqq%2F4KgrzAGLMjz0ZGwWuMfUY%2BiiBgydGJSPxN0bi%2BIk0LGANFbKzHDyi0sV%2B3ANq6RyOJvPTLq8pjF0FDpjnjXaW8WLP3W8EPzbmzOwTa1OAVxnf6iKHdk6Upn00RPDvlmWR%2FMIB80XxVceEEjqH7i%2F8SgINW7VrkXJJt7k5hVwKu0GzLtEafCemO%2BnIIloTdqc%2FL5MvD5PTvMTM8fAOBgd0ROAHHWR3YohZvlX7Okw87WRvQY6pgEKuLN6dy9Iy8XeiTurXEpyyHqaoO571yAk7rQhudHLkpAJ6a72h1jIhPu22%2FXFMEwDi733XXJuOikiyOOy0Vs1hoSuP6SOuIzlBipWQiAnxoiCTQVK%2FGYrP3r3CliO8rmriYH9tEG7GQLVpSKExdyHvx2ZfIjoXabjBwVyT3L8PaFWMV5ENljMpqQD55xOv1ICpkUtkngK8rgibhPmM5clSpNDkfUs&X-Amz-Signature=e4131268f020672f56ac2f711d283c8d8c21498b85483a60213062701a926014&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4K47MHG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDWXVXrgm9MbsPMwkDZQp9ALgOSVwR9zdf3o2kV6JJ2awIgNUckrsrc31AlAVD4Liun6oqLDlbGEwC7AXPgasxT%2FcYq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAIZx2%2Biv3FmpE99ZircAxG2WPNtEws%2Fom4c%2BV3kbFOpEpHI%2FetTBYgzDbpLz1x%2F0KvfoTrdjePcyxds7Hu%2BZ9BIss%2FRIjJ%2BAJQTmLWXetoMXNbaSYgTnhj89%2F01qSf%2FGqIlU72EEMFYNQMJZQVgNgVDzmtPikOwQJ4hFNoMXoEf8cEzLI4U3eI3uDqBIBhRGg4DLxqCIvB%2BCpQBN8THI4uCjW6xl%2BuwYB6iEQ4vN6gTvBXD0pJBhDRBhuPBsacmEmm6oxXNcvN2JdRhKhwCuVs0iP4A7CabLXVjQzif3lkR8OV%2BNJn%2BbRk9ZKlOwTU9iBnGBU3kfGeydXWq18i2jloi%2FHT5feThRoR8v0QVYZYmUrPQg04xp%2B%2FoNMcxAuBCuJbzAbIBA2Ah7WDxsYY%2BF%2BJOxHk0qWhFU8Q%2FIAIgU6lSe3RqZTGuvTfW%2BnqIG4ET2MXqQrE3eZwNLi0eaDGmhhcxtjooBrp6s9a8%2F3XcobznXpSvEghvYQFAqxn%2F8C7iinJ04Ny0Gm4S06j1ZgisbHtUwUgLMOHa3GKzj2Zk%2BzWm6UmUiSpZ%2FfuRHWOcPHtaH4sUzzVI7fZBlkRY549dnCr5i9K0s6T%2F9DR31XAV3iOpvcw%2F%2B%2BRR22iFPxuA1Xut0KXHQFvZ2O3tkIeDMJ22kb0GOqUBlEB551Z7Wzg3A8XbgmYuyrDXv4YBThVrPWIHY%2F7fgRg%2F%2BTGBHQkircOtYwXkvajnEDHZCLiLGYuBwuWYqSvVGm5ed7t5mXeBu%2FMEHUH7wot9u7nXzL84N5IYbr7GvYdaEnuy3AfhzsEQDrL2Jn2CNoWlfXauOvStGNrL029YivvVLNEfPsLMf95Qw46B5GDlEWAkdSRjr2ixYNdUrWeidoyVUpjU&X-Amz-Signature=d336fe0f553a189dd1499ad052a66e1f7fb7cdda328df6cf7a5a3cdd45f8f0f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
