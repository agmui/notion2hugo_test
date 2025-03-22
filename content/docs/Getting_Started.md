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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KE5YTZS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCWO9iu9wS0xWKxmnWYydTBf9d0YEJnzb6Z%2BT3hcmx6RQIgXkbyefoeN6phVYypJaPonQjYwbi9%2FggY6C2ROYNlJWIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGr8LkXEbtajHVSldircA4aPH1vNYqTZs8Ey%2BHBcxrCc7pfUjYAqtM4G31b2hZeXIDULOSXJrXkMzOZVlNyjyYI0H3tlEg2znXayJLvgfFkK1iWXCl3S1KQeCtIuzZRMW8mfgV%2FBI6QUGFnIDAkz81fIuOiph1TyK2DBdmq1yktTGyTwS%2Bw0GSxu9Fvt9PXO%2F5EB%2F8KhZ1g1drn3t%2FN5KasTkNLybjjMTIVqSsxjfQGxvH6AOaqKLnprjKRqv4KSEz8WnfC60mvGFoQpXh%2FjdS%2BA50CptqRKzPknZQn5GHaWjwjHdGn4XnR84%2F5jD0xOrLfrT8tg4MOCJ2d6Ne%2B9NfGoANn9NiqqzGsfZvsiVGSYaAN%2FgVJdAa8oYrRPSGeX%2Fqv7LD%2FygZM%2BmwdF2OE0%2BCPAO7Tt1e%2BadwBJ%2Fo3NL2V7K%2FRdv50QEkrOrpFdfRbXHJwwTIOhQnmYcPRIKvU6VTC2XhCNrPI3WzueRMmYiGMhkgsDCJ1f%2BwmB8osXSPf%2FJrHvXsON1sn9jEZdTujv5EaR2r%2BvHqFgKbL0ewVcmvbkBlupLR%2FXQd1OJUygaWzjlpBPg98OIGStpwp189EnfLzFHqEJhZCcpwb%2FNgc2avK5Mnh242VUl2yYA5VK3kvys2drh4b8BYjz%2F02aMN7r%2Bb4GOqUBSAMVQJLxDg1jO9EM%2BVhIltRWRKOSeXPqN89nvRFvw%2FVB6FxeHGiDtClqtJyvkg6fDPkHmY41MLQ47RHnmr%2FYZoUwnhqQxj7AqvP29NzKz918daMst%2BbQEBkwWru9gDe5%2BU3hEn0x1NlYs7Z%2B7%2BNGQqMYUDOliw6cXyZSL644Cscm%2FQPD4eRSK22m%2BgVVbM2V8PMd4xuxBGkkS1PdYT%2FedbBVUhs0&X-Amz-Signature=b22cc274480d46db6b52a98f6a284099906b17876e52c56c84adfb1d94ea9423&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KE5YTZS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCWO9iu9wS0xWKxmnWYydTBf9d0YEJnzb6Z%2BT3hcmx6RQIgXkbyefoeN6phVYypJaPonQjYwbi9%2FggY6C2ROYNlJWIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGr8LkXEbtajHVSldircA4aPH1vNYqTZs8Ey%2BHBcxrCc7pfUjYAqtM4G31b2hZeXIDULOSXJrXkMzOZVlNyjyYI0H3tlEg2znXayJLvgfFkK1iWXCl3S1KQeCtIuzZRMW8mfgV%2FBI6QUGFnIDAkz81fIuOiph1TyK2DBdmq1yktTGyTwS%2Bw0GSxu9Fvt9PXO%2F5EB%2F8KhZ1g1drn3t%2FN5KasTkNLybjjMTIVqSsxjfQGxvH6AOaqKLnprjKRqv4KSEz8WnfC60mvGFoQpXh%2FjdS%2BA50CptqRKzPknZQn5GHaWjwjHdGn4XnR84%2F5jD0xOrLfrT8tg4MOCJ2d6Ne%2B9NfGoANn9NiqqzGsfZvsiVGSYaAN%2FgVJdAa8oYrRPSGeX%2Fqv7LD%2FygZM%2BmwdF2OE0%2BCPAO7Tt1e%2BadwBJ%2Fo3NL2V7K%2FRdv50QEkrOrpFdfRbXHJwwTIOhQnmYcPRIKvU6VTC2XhCNrPI3WzueRMmYiGMhkgsDCJ1f%2BwmB8osXSPf%2FJrHvXsON1sn9jEZdTujv5EaR2r%2BvHqFgKbL0ewVcmvbkBlupLR%2FXQd1OJUygaWzjlpBPg98OIGStpwp189EnfLzFHqEJhZCcpwb%2FNgc2avK5Mnh242VUl2yYA5VK3kvys2drh4b8BYjz%2F02aMN7r%2Bb4GOqUBSAMVQJLxDg1jO9EM%2BVhIltRWRKOSeXPqN89nvRFvw%2FVB6FxeHGiDtClqtJyvkg6fDPkHmY41MLQ47RHnmr%2FYZoUwnhqQxj7AqvP29NzKz918daMst%2BbQEBkwWru9gDe5%2BU3hEn0x1NlYs7Z%2B7%2BNGQqMYUDOliw6cXyZSL644Cscm%2FQPD4eRSK22m%2BgVVbM2V8PMd4xuxBGkkS1PdYT%2FedbBVUhs0&X-Amz-Signature=899898947fe4778780afee41fefac4c35f8867974ad232d1c99631e300107f63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJW57FK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCID203wWQ9Y9O645ybUxKiXfktQqShiFSu9W1doXR2fECAiAvOcStBiAPiUFI6sF6JGFE0vDn0jKFyHI0vouCEE08hiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf8uf4l9RXtwv6SxYKtwD7sUCiTQc0yrApnjzCuqYrq3GWfzFSSVmqyab94nuFzfCZIxUNvOk9UqPYCYSYf%2FR4ZQrwuhJnCPdCvfnabD1v7e48ss66YeZ0vf5tT771QwzznSSoGLMe1YdYaggeZ6cn10cBaf4vRV%2Ffs%2FXu2Ko0MwedUjfQ81D6%2FKHkzK8oVccH1nutEJHLxFQWMYT4WCPgGmblWOYsyZp3jDWMYAeeSA2zoZk%2FG78TpE3kWFRnx49yDrzHPy9JAMTOHCAyAUU7Gb1W1gOkSSv9oyg6kt5sqc4YgqhzMdZU%2FaV%2Bndwg410pwGD23PEOvdcFirlp4xyDL1UiHYMXv9gt52M0g8BxEiSewhlIFvtclbTHBCTXctzSdOOrq9iNd0slGKnEJsFN%2F42J%2F%2BPiRnykYltErSYkkF%2Bh9hZcjxNDwErNhZ%2Fjw%2BuyiXf4bqa4tJWWc15oO5GJhMtk5Llw7upHbLy354R8H%2BhoU7uyNCAZnwWusg%2Bcz%2Be3zSz5FNpzSI61hJLnA4XWw2xPBSU7uT2oXyESsN6dHjanWSOwpjY7VXlQ5EUYqeX9SayGw1hBx1UqFFzPJKjZQHEJE2KYNuA4BGGWdl62D8fj3f5xDpD1qAo6fccmQufBoncBE8KpJ9GqC8wquz5vgY6pgEjeU66IFSscr9zPwojFDKcwTH0YT4tY4uSWWJWQ%2FDDdB3BhqUsDyY1CLmkhsskx0yB1aYFOeT9SJbJ8IWcZGHMVLmGuiVkLSq3SUKzo4QBCIcTkRjhehpBMtss7X%2Fkg5IusE%2F2ZqguUXFYR5EukKLcg14OGgywpD45OkrmLPMsmEZO634TWwIRl%2B%2FSrseodOgj19Ih7tEvF8RUidWpVoXVB6GujxxP&X-Amz-Signature=2edda2ffd519ba747ec295c2a019f040ad194430accfc6e151fc9de384603194&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJE7ZMGI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDQ8RCt8ijAL4rYSsEwyaXjHuf8kYbvyviNlQlLwNbhsQIhAIw4GdsqBaX6Owy7WnB1wQh8no67wBAx5NFnQgrwSXrpKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWIkLw1fMeBQaf%2BzEq3APsIysECs3M9CscylKC3DA74kWwDgi%2FRzIkRBpMAlOFpQjrHqYuzFHb1Usana3uZ4y%2Btdhjj0HqQ%2BDlSMDpa3LavMNI3beU%2FX9cx7Kv%2BGx7bPGymZTCZriMhJL5CYKnKX0WhwM2UwLMb0C6tGU6qPstM3hg78NKpWTp%2BRxAKrZidgBmaImRePnAnvLyDOmlC6bje2D0hnJNgnXFEXAMAFkiGnnrRNKFBLOwGknyLYmhaCiPoRAovZ5ILSLQ8kX5Wv3oDz4tP77wj8sIBZ2msMwi5Q6oCfQP8fwGr0ajNz4GKN%2BVetCnNeop5QCKyZ31VMFBbey5pd1z92jpVgeatkhXAYw6MiwAxMq6URecISWq%2BhOFIv1LUqVyYgBQHecdArFtRsmpNUL6hjEPA4Po57Qb6OEd5srJ%2B5CRAJNJW7hDv0uQmsoAHXOpGqyEtLgYIW4%2BXaumqSeq5ab1Kqy5pLJJ5Q6lBr%2B5Y2ogNhsAPza1Zgz04sIebT6FTGIge%2FKsbpqOaB4nX3y4opInMjrr97FLUhav96L9ZcqNOUsk%2FqAm9fpZjGjJRjeLeQKzdS7XSuL0nbKKnEIFCqUUFRpEzFstgsDq9bkYfJxuijgBkRR1lNLMdReMHvEHPKybKDDY7Pm%2BBjqkAVkXxRnFk7vksvxUb%2FZjvz2gqkItc4PbQCdY%2BqXJDemvfal0LCHyU4PLBJ06SlLopyuDTKD7QWhykHi2iVkHUzZBRKPmsB53U%2FlapBNOX59zcCKHiiaSuEWiCnIHE2RPSRxZ24CbpfcJgwKbCyCSxKtFBPNnlge%2FcuXqOoeC8q34wMGDcWRfrXCLxiK53x1DA2Sulf1IEoERBd56eaIuvLM3qTBj&X-Amz-Signature=9c777f62ed4783a804b212f6f9cef109363705fb3fef962e66b23250a5770fef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KE5YTZS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCWO9iu9wS0xWKxmnWYydTBf9d0YEJnzb6Z%2BT3hcmx6RQIgXkbyefoeN6phVYypJaPonQjYwbi9%2FggY6C2ROYNlJWIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGr8LkXEbtajHVSldircA4aPH1vNYqTZs8Ey%2BHBcxrCc7pfUjYAqtM4G31b2hZeXIDULOSXJrXkMzOZVlNyjyYI0H3tlEg2znXayJLvgfFkK1iWXCl3S1KQeCtIuzZRMW8mfgV%2FBI6QUGFnIDAkz81fIuOiph1TyK2DBdmq1yktTGyTwS%2Bw0GSxu9Fvt9PXO%2F5EB%2F8KhZ1g1drn3t%2FN5KasTkNLybjjMTIVqSsxjfQGxvH6AOaqKLnprjKRqv4KSEz8WnfC60mvGFoQpXh%2FjdS%2BA50CptqRKzPknZQn5GHaWjwjHdGn4XnR84%2F5jD0xOrLfrT8tg4MOCJ2d6Ne%2B9NfGoANn9NiqqzGsfZvsiVGSYaAN%2FgVJdAa8oYrRPSGeX%2Fqv7LD%2FygZM%2BmwdF2OE0%2BCPAO7Tt1e%2BadwBJ%2Fo3NL2V7K%2FRdv50QEkrOrpFdfRbXHJwwTIOhQnmYcPRIKvU6VTC2XhCNrPI3WzueRMmYiGMhkgsDCJ1f%2BwmB8osXSPf%2FJrHvXsON1sn9jEZdTujv5EaR2r%2BvHqFgKbL0ewVcmvbkBlupLR%2FXQd1OJUygaWzjlpBPg98OIGStpwp189EnfLzFHqEJhZCcpwb%2FNgc2avK5Mnh242VUl2yYA5VK3kvys2drh4b8BYjz%2F02aMN7r%2Bb4GOqUBSAMVQJLxDg1jO9EM%2BVhIltRWRKOSeXPqN89nvRFvw%2FVB6FxeHGiDtClqtJyvkg6fDPkHmY41MLQ47RHnmr%2FYZoUwnhqQxj7AqvP29NzKz918daMst%2BbQEBkwWru9gDe5%2BU3hEn0x1NlYs7Z%2B7%2BNGQqMYUDOliw6cXyZSL644Cscm%2FQPD4eRSK22m%2BgVVbM2V8PMd4xuxBGkkS1PdYT%2FedbBVUhs0&X-Amz-Signature=93faebeffb770f5cc918fccd106001bd708bf2ee90e1a71895627daf8ceaf2c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
