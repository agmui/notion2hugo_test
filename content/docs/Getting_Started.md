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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2ARSTD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZnidh0i7vePg%2B%2FiW2%2Fl1wZdxCnJelACZIEYv6wXUaDAiB8fls%2Bvpqu2RX1HgGrQjKVEf5Oul1zphWwPyHLdMDyGyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMvBvqBALmbvk2bWdXKtwDae9wkfVtA%2B3Op087vzQQjr5S2uhi9kgsZt90kTx01rVa28%2FfOVBV6gfiWbKxhM3Kt%2B91PK6t%2FYSBoCCAsvdoPMvfQhJUh0Au46oRVKZcG%2FykgalLOXCVEN4H8MECxx2uwzl7Cn8YQuJjZNGgu3CCR8ft%2FgF%2FTNw%2BoAfDDJl8GhLVXyTQL4%2Fp5uU4%2B9%2FaGLlcgZ%2FP6LmMFWjJzmJ%2FML6QLRBYhfCLu0pThv%2Bl8AWhLi4SejpeQB9oTBUD9cGPzHN9t8mEfSTOztiWVVBBD71VGzh90tst%2BgTFAQ62k1ObeZwV%2Fz0jz%2FHt7vb69AI9sp%2BlUlsK7%2BvwJ68YNzsCsl6NOXGSOf7U0OyQ01smN2FGQc4i11ZiQHGbVYprqeC7sJz6cY6fXQnBxSP%2B%2B%2FcmEeew%2FvqwzZ%2FMDfETvb8cPZaiAIf5erb96%2BNyvja%2Ftv1i55BcbH26DMm9pKog7c%2BfZwfpnUalwlkuswuDgy0x%2FTRadg8DCNSgkmyVSwhKTQBJdpewp2c%2F4GH3MN4Da%2Bid5Kz6dHKCTse1wJyUlEBW6fdBGK%2FbNv4zx0PKhJyYn6OhU6MufUKiMtZT5f9j2q0TxI3HdJIAZxbYvqjvd%2BHSc0RM262bQef6pKOXQInWjIYw3cCowQY6pgHOlnmCNJPrjdiV%2FqO%2FUyhGomJAVmGtSaJbBwt4xfuUkjFKrDcil1%2BNuWgdwtY3L3FH1qBau07MPQ9iHeTOoUmtNuGyM74Ds28LsWJSH9iIv%2BmXv6VjiPZEwk29RCbiqFwAtsl9tpsMapgS4Lv44RHFPTHEojpbXjLSmCiVWKSB41WcoR6KyrwoN3GByao5i8h%2Fq2sGYeFA3TNz%2BNiJbtZxszSdCYEO&X-Amz-Signature=bab5bb53a3d1c0061ea002f5ca706f52aef8d71a0da1b52e8cc13fac67aa233c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2ARSTD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZnidh0i7vePg%2B%2FiW2%2Fl1wZdxCnJelACZIEYv6wXUaDAiB8fls%2Bvpqu2RX1HgGrQjKVEf5Oul1zphWwPyHLdMDyGyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMvBvqBALmbvk2bWdXKtwDae9wkfVtA%2B3Op087vzQQjr5S2uhi9kgsZt90kTx01rVa28%2FfOVBV6gfiWbKxhM3Kt%2B91PK6t%2FYSBoCCAsvdoPMvfQhJUh0Au46oRVKZcG%2FykgalLOXCVEN4H8MECxx2uwzl7Cn8YQuJjZNGgu3CCR8ft%2FgF%2FTNw%2BoAfDDJl8GhLVXyTQL4%2Fp5uU4%2B9%2FaGLlcgZ%2FP6LmMFWjJzmJ%2FML6QLRBYhfCLu0pThv%2Bl8AWhLi4SejpeQB9oTBUD9cGPzHN9t8mEfSTOztiWVVBBD71VGzh90tst%2BgTFAQ62k1ObeZwV%2Fz0jz%2FHt7vb69AI9sp%2BlUlsK7%2BvwJ68YNzsCsl6NOXGSOf7U0OyQ01smN2FGQc4i11ZiQHGbVYprqeC7sJz6cY6fXQnBxSP%2B%2B%2FcmEeew%2FvqwzZ%2FMDfETvb8cPZaiAIf5erb96%2BNyvja%2Ftv1i55BcbH26DMm9pKog7c%2BfZwfpnUalwlkuswuDgy0x%2FTRadg8DCNSgkmyVSwhKTQBJdpewp2c%2F4GH3MN4Da%2Bid5Kz6dHKCTse1wJyUlEBW6fdBGK%2FbNv4zx0PKhJyYn6OhU6MufUKiMtZT5f9j2q0TxI3HdJIAZxbYvqjvd%2BHSc0RM262bQef6pKOXQInWjIYw3cCowQY6pgHOlnmCNJPrjdiV%2FqO%2FUyhGomJAVmGtSaJbBwt4xfuUkjFKrDcil1%2BNuWgdwtY3L3FH1qBau07MPQ9iHeTOoUmtNuGyM74Ds28LsWJSH9iIv%2BmXv6VjiPZEwk29RCbiqFwAtsl9tpsMapgS4Lv44RHFPTHEojpbXjLSmCiVWKSB41WcoR6KyrwoN3GByao5i8h%2Fq2sGYeFA3TNz%2BNiJbtZxszSdCYEO&X-Amz-Signature=5f3023a01a6ae3eeb31525ccab5b74d29d7cce3097940aa4a31c183d5879e63d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2ARSTD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZnidh0i7vePg%2B%2FiW2%2Fl1wZdxCnJelACZIEYv6wXUaDAiB8fls%2Bvpqu2RX1HgGrQjKVEf5Oul1zphWwPyHLdMDyGyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMvBvqBALmbvk2bWdXKtwDae9wkfVtA%2B3Op087vzQQjr5S2uhi9kgsZt90kTx01rVa28%2FfOVBV6gfiWbKxhM3Kt%2B91PK6t%2FYSBoCCAsvdoPMvfQhJUh0Au46oRVKZcG%2FykgalLOXCVEN4H8MECxx2uwzl7Cn8YQuJjZNGgu3CCR8ft%2FgF%2FTNw%2BoAfDDJl8GhLVXyTQL4%2Fp5uU4%2B9%2FaGLlcgZ%2FP6LmMFWjJzmJ%2FML6QLRBYhfCLu0pThv%2Bl8AWhLi4SejpeQB9oTBUD9cGPzHN9t8mEfSTOztiWVVBBD71VGzh90tst%2BgTFAQ62k1ObeZwV%2Fz0jz%2FHt7vb69AI9sp%2BlUlsK7%2BvwJ68YNzsCsl6NOXGSOf7U0OyQ01smN2FGQc4i11ZiQHGbVYprqeC7sJz6cY6fXQnBxSP%2B%2B%2FcmEeew%2FvqwzZ%2FMDfETvb8cPZaiAIf5erb96%2BNyvja%2Ftv1i55BcbH26DMm9pKog7c%2BfZwfpnUalwlkuswuDgy0x%2FTRadg8DCNSgkmyVSwhKTQBJdpewp2c%2F4GH3MN4Da%2Bid5Kz6dHKCTse1wJyUlEBW6fdBGK%2FbNv4zx0PKhJyYn6OhU6MufUKiMtZT5f9j2q0TxI3HdJIAZxbYvqjvd%2BHSc0RM262bQef6pKOXQInWjIYw3cCowQY6pgHOlnmCNJPrjdiV%2FqO%2FUyhGomJAVmGtSaJbBwt4xfuUkjFKrDcil1%2BNuWgdwtY3L3FH1qBau07MPQ9iHeTOoUmtNuGyM74Ds28LsWJSH9iIv%2BmXv6VjiPZEwk29RCbiqFwAtsl9tpsMapgS4Lv44RHFPTHEojpbXjLSmCiVWKSB41WcoR6KyrwoN3GByao5i8h%2Fq2sGYeFA3TNz%2BNiJbtZxszSdCYEO&X-Amz-Signature=fd0b3e6eeba370d105769e98f43994567f0740e29cd4d7d39fc3f256076e4546&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZML4OQBS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKWNvELqhV2fN8%2FsTd2Wi%2F9LfNxzT2Bs6lhgJ6kijzxQIgfxhP7YrZB%2FnjChUZvR9NDzgO0VP7bzuPERUis4jo0wcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKETcY9UOkWd5gbZPyrcA%2B97baMYmc0fBzqmDu1jkucOXwExmqYzyg6RUI60havOCSzpsoUv%2Buflwq2w3X9iZ80xkEDYovyjSsnO7eIvGn8S1zmpkrQY4NYKR%2FM2LgvhG6lEcprmOlO5mYGR403d2N3IanJlOQRER%2FkVB7C4%2FodzEeTaqzSjYk5izuSMyijKMU13EO2%2BfkYsYr19HGVQx%2BeZdEjmpQci8zs728wZmQX%2BoMU7NL4hb7WaJX5po8HbmFmzlH6gU5IaSCHe81ppNmK0XSD47Kl8i4KagXZ5Ec8x5RZOnm5IKS%2B21hfzWFYg3vjyDeMZzOjCiFrCB5WBgs4Cfd%2FlbXARwDamREmuGEobBtE7%2F7a99hTJorM2XDWQ7AIwV3b%2F911phMOPW91kOrhtlcZWlLj3yk%2FTY86avhLloh1%2Fh7Ru9zamNtn9kpgacnJj45GEImsuZI7ZSssZ16hgARcoTvr22CXvH1XAKKr7VQD4VJ3jooC1KYiYcAFItnm%2BKoXY6ecMDIyOamyTbv5W%2FUOQmtzeIAsNmvp9LouRAewN3eK5baG2poimJGD1Lo%2FHFotbtrjzshN5LpVEBWs7QbIIJQFJwXEQA7%2B%2Fs7VmCinWxPHfyD%2B0d%2F9LMs%2BZiezAh7a0pcLKrGTsMMvBqMEGOqUBo%2B4FktbAs9dqO8M0WPZpbQCjUBZr6kKQaYSt7acm382mXOVK9k21yMJ1qPDwcBXQCm3JOBZYvE8wfCBblvxZ4mZeyakqjox83kV1bfTxwWMLw7kCGxcXahbsNMkK74rIvVnr6Nlun6ljVM1ygFCrJ8Ag2mZ3lSC5NqQ7VheUwFQeVR4YPNrSGZ1qMU4u%2B2sJYqW1rWzem6LXw17kJxwkxtmOUDr9&X-Amz-Signature=1dfc50a81176bbd421128e32c5ee38215447ded6f21ef8335e3101541c9533ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2F6B2A7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1e7laUga2ZNMdLbwrbGN9RNuBl%2FUyt2Xu9ckQ%2B13JZAiAhi3dJdpcwBSmrCu3yDrpN2%2BWhpeqIU2i%2F97tCDtaLRir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMKNVuF9ynMfQ6j5NnKtwDtqFAUyZqWVS%2B1H%2BAM4YIDURKdJ%2BNc%2BbBctlXTS%2BgDSpqAei7QczEiImjHl61savlI3C9wdDJ6qjSiWx9OIn2VJSm1PH9N3gnXfovGDRKedRcD7gCzIkdvEs46hjT8XYmK4jkMcf0nHwRvoQzPqAJ%2FW168vQXPOKBlCKh%2BbBp41YrGDPQRfIzDR%2BQzGleYPJ1aBn67Ph9cfrUM2OiyW1nOXUCgvXpdqwCP1xevxXxnQ5F8lh8eeqKwFt1zaK%2BwQ74Q1%2BHHao797GlvXvbkNknb9e6WmoAiynUw6K35ua8oCDFNqY6x4dad%2BmJnDjVR0HXNUQwkNQrrnRZk4kpO7PJUJwC%2BWlgIEoWmco%2FOatoexfyw3%2BaGzmp5mwmZFp4LBBF6e4e6SI%2BOZPblKXloxuZfvutld8j1T5NTqtpZNCZyS8Q25lRXNMK5Ugqi%2B24yX5uj2o9VfQUaJiYvorjEROrBOYkoPiMBTREw4wY%2FFvD3ybMVZMi4jEOCbqhKx2StFeeKqlJoIiVeGHVA1u7O2DsCCq9xx8lN8QdNdEGZV0yDTH28Y5ns5ZGj8m7jnHabSYCFDecdImVNf%2BWLVikMQB%2BKaUHhLCz%2Bk5mR9yoBjfGlBEmZc9OdXz4YdUwHiwwkcGowQY6pgF28mKQe0sjTib9ODAHrYXPM0LdGrfpHe6W6Jc4dC48IWrPunGVSiurrVpUH%2B%2F5UXJg33Sq%2FuPCNXrykFFfvNkFLrgMcvF%2BeffvdWUiZQDTot2mAyvYbT%2FfygR9k%2FkxE8nJ6WhaLAU%2FE9%2BO4UET5sRINF7B9qb0jb2vqt9R9FoIfvPPDGIxJybvEaP1mTbkZpXtwGCPXy9pytDgEz%2FJA0%2BOezxjemqf&X-Amz-Signature=b84ed21304d80393f4f9324e0c01f48a01e15d9d85529e8489ec7142b5fedd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2ARSTD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZnidh0i7vePg%2B%2FiW2%2Fl1wZdxCnJelACZIEYv6wXUaDAiB8fls%2Bvpqu2RX1HgGrQjKVEf5Oul1zphWwPyHLdMDyGyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMvBvqBALmbvk2bWdXKtwDae9wkfVtA%2B3Op087vzQQjr5S2uhi9kgsZt90kTx01rVa28%2FfOVBV6gfiWbKxhM3Kt%2B91PK6t%2FYSBoCCAsvdoPMvfQhJUh0Au46oRVKZcG%2FykgalLOXCVEN4H8MECxx2uwzl7Cn8YQuJjZNGgu3CCR8ft%2FgF%2FTNw%2BoAfDDJl8GhLVXyTQL4%2Fp5uU4%2B9%2FaGLlcgZ%2FP6LmMFWjJzmJ%2FML6QLRBYhfCLu0pThv%2Bl8AWhLi4SejpeQB9oTBUD9cGPzHN9t8mEfSTOztiWVVBBD71VGzh90tst%2BgTFAQ62k1ObeZwV%2Fz0jz%2FHt7vb69AI9sp%2BlUlsK7%2BvwJ68YNzsCsl6NOXGSOf7U0OyQ01smN2FGQc4i11ZiQHGbVYprqeC7sJz6cY6fXQnBxSP%2B%2B%2FcmEeew%2FvqwzZ%2FMDfETvb8cPZaiAIf5erb96%2BNyvja%2Ftv1i55BcbH26DMm9pKog7c%2BfZwfpnUalwlkuswuDgy0x%2FTRadg8DCNSgkmyVSwhKTQBJdpewp2c%2F4GH3MN4Da%2Bid5Kz6dHKCTse1wJyUlEBW6fdBGK%2FbNv4zx0PKhJyYn6OhU6MufUKiMtZT5f9j2q0TxI3HdJIAZxbYvqjvd%2BHSc0RM262bQef6pKOXQInWjIYw3cCowQY6pgHOlnmCNJPrjdiV%2FqO%2FUyhGomJAVmGtSaJbBwt4xfuUkjFKrDcil1%2BNuWgdwtY3L3FH1qBau07MPQ9iHeTOoUmtNuGyM74Ds28LsWJSH9iIv%2BmXv6VjiPZEwk29RCbiqFwAtsl9tpsMapgS4Lv44RHFPTHEojpbXjLSmCiVWKSB41WcoR6KyrwoN3GByao5i8h%2Fq2sGYeFA3TNz%2BNiJbtZxszSdCYEO&X-Amz-Signature=2d5540c621b984987f710352b22275d49dc1f0ba04460aa56074206712ba4eec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
