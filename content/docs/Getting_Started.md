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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JMOG2DA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCxgB6mRqReg0ebkLiMWv2TFbAqYND7ftu8PIySBgrd7wIhANP77ZuSuAnxaQBr4hYnue9KeFqPC%2FAumB80v7qsI%2FQyKv8DCCAQABoMNjM3NDIzMTgzODA1IgwTpvV696S9mAgGuqcq3ANYOs5arROMD95v%2F1mpmiYBkPwAmrI%2BMpC3mDxhs3hok4E13koLJpP9AzBEeUpDOAt%2B0EV6FT94Y%2FSMLIHzLwIQfwtyNlS7aUYMbPrcBBo0tML7MdvzboKuJRNcELzMj7N2awx7Mb3WRESCmizsf7OmSKoQhq87PWZXY5ydT54igGwsBC0k6ZHW9IU4oUHJ7%2BZpPbaGGiKjn96mD37vTZUMY7ETQ%2BaXgaKoYKz%2F%2B2UI5HrHpmpsfOMUCNUnL4ylL4Jgg6iwLwLCWgpUgCYvWQJ5cHfnojL3HwzBXryhmUdBeLTHSpPPeLBD%2B%2FZ9HhGMU9e807ud4d%2B85K01vk%2BSrzpqE%2BvCxsIQSV10lX5d%2B%2B9VffD%2B%2FoeEkZB6MsqqTJsqV6Jb1%2Fb84FKM%2BIKqB0WY5YhskHe34qSm78ZZgSXqjepHCzxvT1kwJE%2Ft%2B0B8Piv55VI0B67JE3m4M2RKMirS14tU%2FunipWGfjh0cMnfkXYD75cjsXFTHR9%2Bx6XdZTSRL3dGPNfJ3%2BNEWuYJFMJg88m4nD%2B%2F9V9YmzrCHGKJqPeWD%2BMx2pFr4TllurJjQrzsf1ZGKvRNw5wCWG%2FckgxPYFMJ6ZKuFmIy9Yh44IChHjymAl0KlgWHPA%2FDUxCT7uDD%2FnMnBBjqkAZJ8SYyVJvyD5glBZ0ZZwryoOd%2BQ2%2Fqk9Mq1sYLqAK5PZsUkTBSUAyKg3xsFq18cyS3cg%2FJ75Q35loV6kpqu0V4TZqIaYXhwuE7afcbOFKfN5dD1LURcEdhmeHOs6FqoxA7llrdW1%2BGMdJpiF%2B4qZhr3Iip%2FWKQEruuSjd91WH7YiOBRhPyunNG2nN63s6p3rqN9aMUU94IOCBMh3qFdWdt9kYtS&X-Amz-Signature=8144f9a558082e5b06ee83bd28f5db6e89c3295138273c0e93c03ec0c47cb881&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JMOG2DA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCxgB6mRqReg0ebkLiMWv2TFbAqYND7ftu8PIySBgrd7wIhANP77ZuSuAnxaQBr4hYnue9KeFqPC%2FAumB80v7qsI%2FQyKv8DCCAQABoMNjM3NDIzMTgzODA1IgwTpvV696S9mAgGuqcq3ANYOs5arROMD95v%2F1mpmiYBkPwAmrI%2BMpC3mDxhs3hok4E13koLJpP9AzBEeUpDOAt%2B0EV6FT94Y%2FSMLIHzLwIQfwtyNlS7aUYMbPrcBBo0tML7MdvzboKuJRNcELzMj7N2awx7Mb3WRESCmizsf7OmSKoQhq87PWZXY5ydT54igGwsBC0k6ZHW9IU4oUHJ7%2BZpPbaGGiKjn96mD37vTZUMY7ETQ%2BaXgaKoYKz%2F%2B2UI5HrHpmpsfOMUCNUnL4ylL4Jgg6iwLwLCWgpUgCYvWQJ5cHfnojL3HwzBXryhmUdBeLTHSpPPeLBD%2B%2FZ9HhGMU9e807ud4d%2B85K01vk%2BSrzpqE%2BvCxsIQSV10lX5d%2B%2B9VffD%2B%2FoeEkZB6MsqqTJsqV6Jb1%2Fb84FKM%2BIKqB0WY5YhskHe34qSm78ZZgSXqjepHCzxvT1kwJE%2Ft%2B0B8Piv55VI0B67JE3m4M2RKMirS14tU%2FunipWGfjh0cMnfkXYD75cjsXFTHR9%2Bx6XdZTSRL3dGPNfJ3%2BNEWuYJFMJg88m4nD%2B%2F9V9YmzrCHGKJqPeWD%2BMx2pFr4TllurJjQrzsf1ZGKvRNw5wCWG%2FckgxPYFMJ6ZKuFmIy9Yh44IChHjymAl0KlgWHPA%2FDUxCT7uDD%2FnMnBBjqkAZJ8SYyVJvyD5glBZ0ZZwryoOd%2BQ2%2Fqk9Mq1sYLqAK5PZsUkTBSUAyKg3xsFq18cyS3cg%2FJ75Q35loV6kpqu0V4TZqIaYXhwuE7afcbOFKfN5dD1LURcEdhmeHOs6FqoxA7llrdW1%2BGMdJpiF%2B4qZhr3Iip%2FWKQEruuSjd91WH7YiOBRhPyunNG2nN63s6p3rqN9aMUU94IOCBMh3qFdWdt9kYtS&X-Amz-Signature=12ed60722212307b571a710efd3700bd796cfc53aa3de3a06042984775c16778&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JMOG2DA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCxgB6mRqReg0ebkLiMWv2TFbAqYND7ftu8PIySBgrd7wIhANP77ZuSuAnxaQBr4hYnue9KeFqPC%2FAumB80v7qsI%2FQyKv8DCCAQABoMNjM3NDIzMTgzODA1IgwTpvV696S9mAgGuqcq3ANYOs5arROMD95v%2F1mpmiYBkPwAmrI%2BMpC3mDxhs3hok4E13koLJpP9AzBEeUpDOAt%2B0EV6FT94Y%2FSMLIHzLwIQfwtyNlS7aUYMbPrcBBo0tML7MdvzboKuJRNcELzMj7N2awx7Mb3WRESCmizsf7OmSKoQhq87PWZXY5ydT54igGwsBC0k6ZHW9IU4oUHJ7%2BZpPbaGGiKjn96mD37vTZUMY7ETQ%2BaXgaKoYKz%2F%2B2UI5HrHpmpsfOMUCNUnL4ylL4Jgg6iwLwLCWgpUgCYvWQJ5cHfnojL3HwzBXryhmUdBeLTHSpPPeLBD%2B%2FZ9HhGMU9e807ud4d%2B85K01vk%2BSrzpqE%2BvCxsIQSV10lX5d%2B%2B9VffD%2B%2FoeEkZB6MsqqTJsqV6Jb1%2Fb84FKM%2BIKqB0WY5YhskHe34qSm78ZZgSXqjepHCzxvT1kwJE%2Ft%2B0B8Piv55VI0B67JE3m4M2RKMirS14tU%2FunipWGfjh0cMnfkXYD75cjsXFTHR9%2Bx6XdZTSRL3dGPNfJ3%2BNEWuYJFMJg88m4nD%2B%2F9V9YmzrCHGKJqPeWD%2BMx2pFr4TllurJjQrzsf1ZGKvRNw5wCWG%2FckgxPYFMJ6ZKuFmIy9Yh44IChHjymAl0KlgWHPA%2FDUxCT7uDD%2FnMnBBjqkAZJ8SYyVJvyD5glBZ0ZZwryoOd%2BQ2%2Fqk9Mq1sYLqAK5PZsUkTBSUAyKg3xsFq18cyS3cg%2FJ75Q35loV6kpqu0V4TZqIaYXhwuE7afcbOFKfN5dD1LURcEdhmeHOs6FqoxA7llrdW1%2BGMdJpiF%2B4qZhr3Iip%2FWKQEruuSjd91WH7YiOBRhPyunNG2nN63s6p3rqN9aMUU94IOCBMh3qFdWdt9kYtS&X-Amz-Signature=3f36d849c35bab86ef02883bd7b4e43397c47a126e5b9dd9c6c85bef57d87356&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3JUQHZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCKjkrv3A2%2Fn2vEgp8Vkd5rZEi6%2FXhLzDj0iZNMiJap%2BgIhAMIDpH1GxzQ9pAD2jMuhzQXfzsmYIdnw70K6iwDuy3upKv8DCBsQABoMNjM3NDIzMTgzODA1IgxBwa4DzHfcrXN97icq3ANq2tbdkTNMoDuuFa8uedypDDUtv16Obuj3ZycWoDt9aG7T8hXiUztB3S%2FQ7swTnLI1zSjRgt%2BqvmW5ZPt%2BVpLT4Aq2ZtfvimWlz%2B5y7B%2BA6vjSlC2fPFiAKu4sljbZD7l2fs5WzJJh4zvDS3ZmrQ7VtBa0f9ZXRF7m8iYwvpO0%2BGLsQcFhsnufWrLUtM7R397qSJaMM%2BvmlOrHayD6yAK4dlQ5wEsHHowyxsA7VwEl8F45ii66WCSp2t7FJlvJyhJPj%2ByPxjLErwXJI3Ts3y2YhegRjX99ItoWTwYOfMmvUVTz5xw2NF7lJE9H4lmiJ5IOrq7eJFwu38W7A9o9e4q5M50Q33Q5sWPL%2Fz3SxUEtMtg%2B8Aol9nNlgWO4Tj6Bc2p3NkYuP3NLTnNBy%2Fr2usTUaBEBxwlyzMZkJ31jdSd1cUqk%2FqZ37guLJf23CAWVeY3%2BnPE%2BOO02Dm9krYDZMw8gqtvWBkVPN43Z0rPoa995I7ZjMeRTn4SeV3S0kDfGz%2ByocAX5p7dl6VpVFMp6D%2FOxstAPbSqGnU%2FR4Tfq7hDm5QBL%2FcgOeYlokrWTOAfkWfIZPdYQ7gdp632Kn%2BEJs%2FaIeUlv9pe49h5%2B8BmeZOvfgWvgcM3TWJ1kDER42TDrlcjBBjqkAV727f1KEXQ9DpANRSBn6W2VE7BWA3DGJOCz%2FpXPC67U2cHozXY1jR60zYKinJdwFoKMHdOlA7J6YAAAJh26RvDUvoubACyh21FIAXXfZVp2dIygaxFJD6R%2BE4PmON1HEkRu61%2Fk8ozCpR8jLN%2BKTtNdqDrSIoRZ1VrvGJhLIIorP6RNOaGuB3i8MFIFgdlfWX8bsT4qfsv2AD0laIY7yNafyNVg&X-Amz-Signature=3e989f52c48b277ebb7e2949f3ef062945647405895e07e9722801f67a85c3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUFAU27D%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDxhmgXBuyl7xhCzCeITrBM%2BkFaPKfy5XafsTDa%2B%2BXW8wIgetMk0ZOw7PrLGVn%2ByqwZ%2FMh9uxF%2BoGped8U%2FyVvEVv4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLDhBSgIV1mZ%2Bs8iQCrcA%2BTPAae2C4xlRIeAIfseEfIrEiw5kmzFiyUf9D4XEETLHCxI3R%2F%2Fvb3bRer6SYFNMFVNSrvwFgqfME2mc8niYDZzgBAlWUtZGKzCEPcqois%2FezYryFrPQGX%2F8xMeAT1kLZhOZ7py2zzZi2jeXo2Y8aOPeOw4iMXFqgSLpL2sysuB%2B8QthWJWoBUiDYft2N6Nranew8Imwstfuenf7gFspF%2FBR2vQOlH1ucUHoHGG9gCzLZyO9GVX2zPCSxwZM%2B9ba5%2FSy%2BoukZW6SXLvQw%2B82Ymm7vrUdSa9EDxeTN7g4cMPwdTCBELGcmU5Wlhs7TxbgpFfpBRsGy%2B%2BXJonH%2FyMliUnvjsZVUd5fLnE6VP%2ByjwqK5k8IAAsoFCue8u8UMogcFBGHat7pVWUc9Faw8ayaFS22cnjUD6ydiVmuupnXtxlFQuw3qI%2FAbXU6O5xwfF8i4CydhPggbbzrIBU6gZ8B5p6mAgKlglS1WmHpKR%2FYAiPdKbkCQBJ6QjAbqhjzRLuaQ0WXUy3qXJ2byIf09P8ekkjRcRZf781Gcf%2FOueH91aD6mURW7yROUZD6n0v%2FBoOQVjfRkwGfjADHB3C59hSzyOT0Y6k0UWaldLXlTGJStTMCKeL7RfkUSwlfExZMIeWyMEGOqUBvsXVEsViWUvXTfcKWe5lzrwDvjMTTtGKJn%2BwuFbekuRwWC%2BRCPkkWZ9jXHLUk75VJ1QCY8br%2FuIsSdlo3Ab%2FENfbSVddmJ4Aivtl0V5oJ%2FdSz11BRF95MD5JXTha4lJVhPLAtV45YGr0qw1wK%2Fo7QYd3KFAl4aeI4GyhVsxdMRyLVym8FLlm20dkxGb2YPVX6ekKwg5PRRjWEWp6FSALIvrn9PZq&X-Amz-Signature=9876fd2d3d308327aa1f19cebe8c945e2ace2927c99346416af3e2b8f0a52f29&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JMOG2DA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCxgB6mRqReg0ebkLiMWv2TFbAqYND7ftu8PIySBgrd7wIhANP77ZuSuAnxaQBr4hYnue9KeFqPC%2FAumB80v7qsI%2FQyKv8DCCAQABoMNjM3NDIzMTgzODA1IgwTpvV696S9mAgGuqcq3ANYOs5arROMD95v%2F1mpmiYBkPwAmrI%2BMpC3mDxhs3hok4E13koLJpP9AzBEeUpDOAt%2B0EV6FT94Y%2FSMLIHzLwIQfwtyNlS7aUYMbPrcBBo0tML7MdvzboKuJRNcELzMj7N2awx7Mb3WRESCmizsf7OmSKoQhq87PWZXY5ydT54igGwsBC0k6ZHW9IU4oUHJ7%2BZpPbaGGiKjn96mD37vTZUMY7ETQ%2BaXgaKoYKz%2F%2B2UI5HrHpmpsfOMUCNUnL4ylL4Jgg6iwLwLCWgpUgCYvWQJ5cHfnojL3HwzBXryhmUdBeLTHSpPPeLBD%2B%2FZ9HhGMU9e807ud4d%2B85K01vk%2BSrzpqE%2BvCxsIQSV10lX5d%2B%2B9VffD%2B%2FoeEkZB6MsqqTJsqV6Jb1%2Fb84FKM%2BIKqB0WY5YhskHe34qSm78ZZgSXqjepHCzxvT1kwJE%2Ft%2B0B8Piv55VI0B67JE3m4M2RKMirS14tU%2FunipWGfjh0cMnfkXYD75cjsXFTHR9%2Bx6XdZTSRL3dGPNfJ3%2BNEWuYJFMJg88m4nD%2B%2F9V9YmzrCHGKJqPeWD%2BMx2pFr4TllurJjQrzsf1ZGKvRNw5wCWG%2FckgxPYFMJ6ZKuFmIy9Yh44IChHjymAl0KlgWHPA%2FDUxCT7uDD%2FnMnBBjqkAZJ8SYyVJvyD5glBZ0ZZwryoOd%2BQ2%2Fqk9Mq1sYLqAK5PZsUkTBSUAyKg3xsFq18cyS3cg%2FJ75Q35loV6kpqu0V4TZqIaYXhwuE7afcbOFKfN5dD1LURcEdhmeHOs6FqoxA7llrdW1%2BGMdJpiF%2B4qZhr3Iip%2FWKQEruuSjd91WH7YiOBRhPyunNG2nN63s6p3rqN9aMUU94IOCBMh3qFdWdt9kYtS&X-Amz-Signature=9131f7cb713a6690dd93b763caf57bacd80062c203f598f131a1348ed3b06029&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
