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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LRVGTEO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDcZxOALiTB7%2BOmS57lquNAnWzOhG%2F%2FTzdS7vs2ZJOM9gIhAPJfiZ72M8YlVKXPABrmVVweWF40tDyBELmfVCSR71NZKv8DCFoQABoMNjM3NDIzMTgzODA1IgztK7R3e9451mb0H6sq3AOZ1j4VlbnLKc2cZ2euMOrEO4CM%2FVe%2BF%2FOoWeIwQN9lVfMC6oX8eInR4sPoJLeHCGtbmXqy%2B%2BaLi79Pw%2FKPouOkdvKJWdSCgtrMZCbSfeO%2BnWSYxuf3Ss%2F%2Fa70mi0TdZeXednrBK%2BpGgwWlWHsqWbMta0DhMSGYM9Gyc208IYubzkzwMN%2BGAvqeIFBmUhWjJJMCaB7SNSIesVxUBrfVLc1vknUPuJqxm2EhBzSszBO8Mug1qc2Xog8KhpRbUWQ72j2s0HQnHCkeAmeeKkOJTyIjdBNvXPrkSCNy4sEKIvvAiLtBQEh2O%2FapXq6BsgU04h6XQ%2FZHR4z%2FoVUghVP9WLMB5JocwJqst%2B6vXG7t3sHxXKhgC%2FL0pa2u2U4AkTmf%2FS9zTVo%2BiOCI%2BmYJDOKhHE%2FjdVX136%2FANjHODHOUxXImz%2Bw1pacWL1ALGBEncUUFNzRcqi%2BpH99r%2FhUKZLEqLeIaFniUw%2FgRINIpOP9wYpYkR3YuJ9z%2B4tQSQGULi%2FXb7FSgkvsNllSF5yvazLhgtP2W9mTlLg8Cn%2FnmHJozKa2JVHD71idRXORbOoiPznMd44ZQfmu8RCmh5rOmhWgCyQL86BhkJuVyp8g0nfV2g6KErEqVcgxz%2FBhOAtWgwzCe7pG9BjqkAdpkSPtY8pR0VOP2C65qp9NqnbxZU7oEYl1LRuAI3weFT%2BVs1OZprFD5NfYVd2nFIgdt06MI%2BeIQh9ebMRQZFgFILlCybR6WOUBdqH15lfUlwu%2F%2BesAUyuFkv7EjBaP8zvSnqZWWc1qceghOSpghpcGyArlr1QIW02Z1XWxiqDsEBJExXh6PObLtZtHHq00UXA9wZXhEgtWoOm%2BJ1v5%2BapxS1gso&X-Amz-Signature=dd4285c376bef8aef9f7e7c400890b1af571bd756007da07ab251544d41b2b84&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LRVGTEO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDcZxOALiTB7%2BOmS57lquNAnWzOhG%2F%2FTzdS7vs2ZJOM9gIhAPJfiZ72M8YlVKXPABrmVVweWF40tDyBELmfVCSR71NZKv8DCFoQABoMNjM3NDIzMTgzODA1IgztK7R3e9451mb0H6sq3AOZ1j4VlbnLKc2cZ2euMOrEO4CM%2FVe%2BF%2FOoWeIwQN9lVfMC6oX8eInR4sPoJLeHCGtbmXqy%2B%2BaLi79Pw%2FKPouOkdvKJWdSCgtrMZCbSfeO%2BnWSYxuf3Ss%2F%2Fa70mi0TdZeXednrBK%2BpGgwWlWHsqWbMta0DhMSGYM9Gyc208IYubzkzwMN%2BGAvqeIFBmUhWjJJMCaB7SNSIesVxUBrfVLc1vknUPuJqxm2EhBzSszBO8Mug1qc2Xog8KhpRbUWQ72j2s0HQnHCkeAmeeKkOJTyIjdBNvXPrkSCNy4sEKIvvAiLtBQEh2O%2FapXq6BsgU04h6XQ%2FZHR4z%2FoVUghVP9WLMB5JocwJqst%2B6vXG7t3sHxXKhgC%2FL0pa2u2U4AkTmf%2FS9zTVo%2BiOCI%2BmYJDOKhHE%2FjdVX136%2FANjHODHOUxXImz%2Bw1pacWL1ALGBEncUUFNzRcqi%2BpH99r%2FhUKZLEqLeIaFniUw%2FgRINIpOP9wYpYkR3YuJ9z%2B4tQSQGULi%2FXb7FSgkvsNllSF5yvazLhgtP2W9mTlLg8Cn%2FnmHJozKa2JVHD71idRXORbOoiPznMd44ZQfmu8RCmh5rOmhWgCyQL86BhkJuVyp8g0nfV2g6KErEqVcgxz%2FBhOAtWgwzCe7pG9BjqkAdpkSPtY8pR0VOP2C65qp9NqnbxZU7oEYl1LRuAI3weFT%2BVs1OZprFD5NfYVd2nFIgdt06MI%2BeIQh9ebMRQZFgFILlCybR6WOUBdqH15lfUlwu%2F%2BesAUyuFkv7EjBaP8zvSnqZWWc1qceghOSpghpcGyArlr1QIW02Z1XWxiqDsEBJExXh6PObLtZtHHq00UXA9wZXhEgtWoOm%2BJ1v5%2BapxS1gso&X-Amz-Signature=f477d4ebc1a98e714d5cd43bdf9e5fe2987ee2b3cd45fb2d246eaf901c94d799&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJVCQRLE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIDHWI3eD8oeuckvlSvAKb7YGhilZMmHqPdHDn2sHRePBAiB3vB4NillmqAyMqY5nPrwSZwmNsD7K0733iwPis6YqUSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMP9KN2LPJNw3zjQKbKtwD7KYS%2F8xCX6wFBlnXVbanPKEdfHbh4N6gnmB5TQJywxOE7G0H7THP2EQsTS%2BywwthOeFl%2F%2Bht0l92l4sB0KVVrIBTysADbYvlMU%2FDqZqct%2BDrA%2FSjdWmBEgWSGLLToVUEXNZbiqXBlBy1EMqClsiv0XN1VoKaXulOOrEc2sOIlEn3Jh8IvKJWU0OXN7eKXJ%2BpO91XGCAPkZKXatJz4N1%2FMyp2BTfP8GP7D1Y0kspJL0ECQmizRocs3eA3o%2BmaY%2BYurtEx3XfVf7Wd5vYDPu5BSafinOxDdZ24r6BWc85Ks2Pp37j8Kcd4n3Io7W8TclU9w7%2BXyMd4tKBeTo30bPuKNJIWZxMnIi0ePLfqJOB7VpAu3guUFHfmHF51ApYr2MVX4XZ4XuMbwpoUu3lhWIAQiuIS9oaFhF8wYosLRvwHs%2BqszCCcMGVj9jEmgjL2U9z%2FEFcedG2eCg%2Fr4De8%2FI%2FCnCOGxXhWsXSshkSFy0tldIjm69j0MRS9UqgOE6yig1ujRmmj44cGCfo9pWgQEDxwEDN%2BHfNyGxDiFUG%2B7WKmmca9i5sXU2cWBeTtlvcWx9HBN8vTomNMGXZOeVQfGh2Nl%2FNb8PYR0PXBsc1DaD1QUqaAX%2FbU2Df51GeKNDswg%2B2RvQY6pgHLnV8i48WtXLRy4qSwrs63V48FKhLy34daJWLS4TyshW%2BAAK510BzZWVviwRCcc%2FMPL2ofPrgp7vE72cTn2xglthSezo1h1lcVNMjPeQdxiGYUhdn8QPl%2BINFJIudtERdSELpObOxRB4XzDNQ1abH3JdKhjzjbGJP4sJWAEHa5qDfLDpDaMuqmKJ%2F%2FBE7jefITaX8udwL0XjjiwLD3EvI3kMhP6TUn&X-Amz-Signature=e43143b8ce1fcdff6136bd3efdef91c37a3ac845449fe06e751f8ead2110a0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3LPAOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG82WCbKS92H1g5OmT6vRp5MZPD9upkr0g8sRG%2F0skq%2FAiAX2Rlf2kIUU4XN97SBdYJr6DlzwBMgSs744u%2FFBehNJir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMQtxVttwkxfO%2FP93rKtwDmb8MpcGYP%2BHe7senCZH%2BEqwOA%2B8PWk6hUCGBpeeTBP6m8Cp6CEQaS62zbuCQegW3LjvNfjsYcCO%2FvJwhPRSp6pT0u%2BGbZxzGtfkOXYCn0Le8fiHnHDLYT9RMXsjPXJZPQ5buXj6oV0xslRENSVFg0mlvy4bc1AMkUu1409shYsU97F%2FgG7LJK4tajSXOmhVZWFVyt5iVgw03Dsg7bjD6crhx%2B1uwTBqtEbyzrpdIChdwYiY6j2VjbG%2FpMOkIHywLPPPLsi3l3%2BWT2Je40i2Jg5T8YnR5pyUFm9W7TfdVbIJEWCzlW%2B2MVmeyOIXJYj2q%2F%2F3wLQ28NbfZWk6i4honqPbTkl2hcpJAebtiztzXgqTiF%2BAKPDmOe4u7GmK3UsT8wNhuZjm5Mh29MsdcbbkLh0COeAoxZzpWlGf%2B3WXm9myL6aN76A9%2BkGNbSxoKbqj4%2FA0M6F%2FkOdF4aYmaJaja9o8JW6d%2BbHPX6PTc3Xc230BBsgLSsVGz7dZJuqtQHKGkD3JjTNBODlTnb0V0GX%2FzsTmuOU76sPmomTqdHWFNjZOXlkbgG80kjAvBjsza5WALmLljAipCyF%2F5UHT4VJ%2BlM8bHhpj8fZHDq6pgZFnyBjcFDjyckDqPzZxrkCgwie6RvQY6pgFUGDsFO8zEhYpNsCyzp%2Fq1fXq%2BIsLDRO7ATrTDyuzOGGsfYwcz73zI5cwGAKLFWU0PrMhbEALAFk1VZ1lGcYXFMJGym2UToYeaZ2l5D%2Fq%2BEuf79%2BZtMwX1nK%2B8yICQaZsadT2VfL12iYtAcA9KyKjux14hA8XRK5txo2MZYWKhJ7YQDDXPjcTthjSnVsY3XwkGJEkwNXMkqCifGriJB7dmz6y258cf&X-Amz-Signature=91ddfd21de9a47d46d965386028fd473fdad1ddc322cac71fcd3b5501317cd49&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LRVGTEO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDcZxOALiTB7%2BOmS57lquNAnWzOhG%2F%2FTzdS7vs2ZJOM9gIhAPJfiZ72M8YlVKXPABrmVVweWF40tDyBELmfVCSR71NZKv8DCFoQABoMNjM3NDIzMTgzODA1IgztK7R3e9451mb0H6sq3AOZ1j4VlbnLKc2cZ2euMOrEO4CM%2FVe%2BF%2FOoWeIwQN9lVfMC6oX8eInR4sPoJLeHCGtbmXqy%2B%2BaLi79Pw%2FKPouOkdvKJWdSCgtrMZCbSfeO%2BnWSYxuf3Ss%2F%2Fa70mi0TdZeXednrBK%2BpGgwWlWHsqWbMta0DhMSGYM9Gyc208IYubzkzwMN%2BGAvqeIFBmUhWjJJMCaB7SNSIesVxUBrfVLc1vknUPuJqxm2EhBzSszBO8Mug1qc2Xog8KhpRbUWQ72j2s0HQnHCkeAmeeKkOJTyIjdBNvXPrkSCNy4sEKIvvAiLtBQEh2O%2FapXq6BsgU04h6XQ%2FZHR4z%2FoVUghVP9WLMB5JocwJqst%2B6vXG7t3sHxXKhgC%2FL0pa2u2U4AkTmf%2FS9zTVo%2BiOCI%2BmYJDOKhHE%2FjdVX136%2FANjHODHOUxXImz%2Bw1pacWL1ALGBEncUUFNzRcqi%2BpH99r%2FhUKZLEqLeIaFniUw%2FgRINIpOP9wYpYkR3YuJ9z%2B4tQSQGULi%2FXb7FSgkvsNllSF5yvazLhgtP2W9mTlLg8Cn%2FnmHJozKa2JVHD71idRXORbOoiPznMd44ZQfmu8RCmh5rOmhWgCyQL86BhkJuVyp8g0nfV2g6KErEqVcgxz%2FBhOAtWgwzCe7pG9BjqkAdpkSPtY8pR0VOP2C65qp9NqnbxZU7oEYl1LRuAI3weFT%2BVs1OZprFD5NfYVd2nFIgdt06MI%2BeIQh9ebMRQZFgFILlCybR6WOUBdqH15lfUlwu%2F%2BesAUyuFkv7EjBaP8zvSnqZWWc1qceghOSpghpcGyArlr1QIW02Z1XWxiqDsEBJExXh6PObLtZtHHq00UXA9wZXhEgtWoOm%2BJ1v5%2BapxS1gso&X-Amz-Signature=80e669a304be4d95d640aa9bccc43cfa8dbf19cb04390cf7baaefc544b62c7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
