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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DH5R7N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIYo3CIR9aCYLnf%2Fq1OUbDjQ%2Fbe42%2FlPj8IRoK2o4KuAiEA%2BF1bgGix4kH9fLWGWiOIVnySrQAr4ZEXQsYqzKGRT6oq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAHfvpJFUNPo0deJ2SrcA2Beb%2FhBUSHMsMdL%2BAkLLToH049kCCbl9E2Tbw8AagJ9725bPrSYrLxkz4SLBfB8w673M3G4r5IuVnc4lV0qu26LC5WW2MsPXOlLM%2FwE9A33WHJMAR826LLHJhlnBGXdI6DpWjWzLbhn9Qz%2BcQu86cuiFXMPliW3iMg0cIA7l1c8%2FeLyB20VdCZgCKoJn51KD9jZNc1ZPYmwg5OrcTNH2OvLrLB7PeWkor4a%2FA8u2uY2Zebq5ySHyoNb0b3mX1uH2QWkrE1kOPjj7XgRyWXuOrOmxwFpnLLpBkQxrv9WA%2B1Q7tUNrZx8Kp9lYzad5Lky%2Fr%2BshxzKj5jAm6xzNu4lULfmBTs9jbI8tqgwIbBC1A%2BHSJ7XRKg7nAEP9H4iVW3CTAh0tC%2BtBG%2Fi9BKnkKSgOWLxUrhXXhzUMBCAD3FltKq7hmimRsPOcT%2BQAubxybpwAKBUhAzo1649P3gvL3Gd4WKNSJGildoY2l%2B1dGFqNV95CeBnyhMLPwBDOKw3r8F5HSuJYKkY7qhOszM5Rf57T8a9tM5ipQyfO%2BTISR%2FIjxqU92QZedSF50FgtQFtGBvSpX1%2FgqoGdvQ1LcZYcc4BHoOfqrJj6vL1tNk8HAbAtdDWbUgvsUwJmj31kMjkMI3Lo8EGOqUBybFTtg7yB1FxqlnvDgpdFBxTMsS%2BYsj55uCKo9cDJ6pn2cvs%2F9MUO7xaFd6%2FmRGVvqmCsp8HzxU9oMZuLhUci6FrOpAlVxJV%2F0zx3dzUhWb2LPL%2FC38cFkapON7wXtVxknDQFYDx%2BDL%2B2AeCdPzzbAGrkcuzNtQWKVoEBziAETB%2FyqwSg7YmcLpaa2AB%2F9cPrPeJ3Vwzj%2BUQHvYtxubBljn2zRCy&X-Amz-Signature=8cb74b045b5c7a9fdfe57ae42459cc8286f636adcd150840eef59f2af6d62a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DH5R7N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIYo3CIR9aCYLnf%2Fq1OUbDjQ%2Fbe42%2FlPj8IRoK2o4KuAiEA%2BF1bgGix4kH9fLWGWiOIVnySrQAr4ZEXQsYqzKGRT6oq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAHfvpJFUNPo0deJ2SrcA2Beb%2FhBUSHMsMdL%2BAkLLToH049kCCbl9E2Tbw8AagJ9725bPrSYrLxkz4SLBfB8w673M3G4r5IuVnc4lV0qu26LC5WW2MsPXOlLM%2FwE9A33WHJMAR826LLHJhlnBGXdI6DpWjWzLbhn9Qz%2BcQu86cuiFXMPliW3iMg0cIA7l1c8%2FeLyB20VdCZgCKoJn51KD9jZNc1ZPYmwg5OrcTNH2OvLrLB7PeWkor4a%2FA8u2uY2Zebq5ySHyoNb0b3mX1uH2QWkrE1kOPjj7XgRyWXuOrOmxwFpnLLpBkQxrv9WA%2B1Q7tUNrZx8Kp9lYzad5Lky%2Fr%2BshxzKj5jAm6xzNu4lULfmBTs9jbI8tqgwIbBC1A%2BHSJ7XRKg7nAEP9H4iVW3CTAh0tC%2BtBG%2Fi9BKnkKSgOWLxUrhXXhzUMBCAD3FltKq7hmimRsPOcT%2BQAubxybpwAKBUhAzo1649P3gvL3Gd4WKNSJGildoY2l%2B1dGFqNV95CeBnyhMLPwBDOKw3r8F5HSuJYKkY7qhOszM5Rf57T8a9tM5ipQyfO%2BTISR%2FIjxqU92QZedSF50FgtQFtGBvSpX1%2FgqoGdvQ1LcZYcc4BHoOfqrJj6vL1tNk8HAbAtdDWbUgvsUwJmj31kMjkMI3Lo8EGOqUBybFTtg7yB1FxqlnvDgpdFBxTMsS%2BYsj55uCKo9cDJ6pn2cvs%2F9MUO7xaFd6%2FmRGVvqmCsp8HzxU9oMZuLhUci6FrOpAlVxJV%2F0zx3dzUhWb2LPL%2FC38cFkapON7wXtVxknDQFYDx%2BDL%2B2AeCdPzzbAGrkcuzNtQWKVoEBziAETB%2FyqwSg7YmcLpaa2AB%2F9cPrPeJ3Vwzj%2BUQHvYtxubBljn2zRCy&X-Amz-Signature=78a66dfdd7ca155677a41e5bb1508b5494bc7c74568ef30952eeeb96ecc6f961&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DH5R7N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIYo3CIR9aCYLnf%2Fq1OUbDjQ%2Fbe42%2FlPj8IRoK2o4KuAiEA%2BF1bgGix4kH9fLWGWiOIVnySrQAr4ZEXQsYqzKGRT6oq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAHfvpJFUNPo0deJ2SrcA2Beb%2FhBUSHMsMdL%2BAkLLToH049kCCbl9E2Tbw8AagJ9725bPrSYrLxkz4SLBfB8w673M3G4r5IuVnc4lV0qu26LC5WW2MsPXOlLM%2FwE9A33WHJMAR826LLHJhlnBGXdI6DpWjWzLbhn9Qz%2BcQu86cuiFXMPliW3iMg0cIA7l1c8%2FeLyB20VdCZgCKoJn51KD9jZNc1ZPYmwg5OrcTNH2OvLrLB7PeWkor4a%2FA8u2uY2Zebq5ySHyoNb0b3mX1uH2QWkrE1kOPjj7XgRyWXuOrOmxwFpnLLpBkQxrv9WA%2B1Q7tUNrZx8Kp9lYzad5Lky%2Fr%2BshxzKj5jAm6xzNu4lULfmBTs9jbI8tqgwIbBC1A%2BHSJ7XRKg7nAEP9H4iVW3CTAh0tC%2BtBG%2Fi9BKnkKSgOWLxUrhXXhzUMBCAD3FltKq7hmimRsPOcT%2BQAubxybpwAKBUhAzo1649P3gvL3Gd4WKNSJGildoY2l%2B1dGFqNV95CeBnyhMLPwBDOKw3r8F5HSuJYKkY7qhOszM5Rf57T8a9tM5ipQyfO%2BTISR%2FIjxqU92QZedSF50FgtQFtGBvSpX1%2FgqoGdvQ1LcZYcc4BHoOfqrJj6vL1tNk8HAbAtdDWbUgvsUwJmj31kMjkMI3Lo8EGOqUBybFTtg7yB1FxqlnvDgpdFBxTMsS%2BYsj55uCKo9cDJ6pn2cvs%2F9MUO7xaFd6%2FmRGVvqmCsp8HzxU9oMZuLhUci6FrOpAlVxJV%2F0zx3dzUhWb2LPL%2FC38cFkapON7wXtVxknDQFYDx%2BDL%2B2AeCdPzzbAGrkcuzNtQWKVoEBziAETB%2FyqwSg7YmcLpaa2AB%2F9cPrPeJ3Vwzj%2BUQHvYtxubBljn2zRCy&X-Amz-Signature=3a8b59408f8db3a49e9685e3f1c42a019cd533cf98fc5bd26ec538dedac34fac&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z26KH3G5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtNlTrudNg8g3Az27aI%2BLCWparCpmITlaWwQIB29Z9igIhALITyNMfkLj4Ci23Bq36gEKIidowdvt26FsjobqCJsn0Kv8DCGUQABoMNjM3NDIzMTgzODA1IgzvzwaG1o6BJ8jtn4Aq3AM7NBnOS6LhqByRxkd5Xa81I9%2FHmI9LH69WFbFpHI8rLfIjZ83UuRHCU0uAO8VuCR0yJmE1ic%2B7eav63qmsN8U4vtSPBPL6aoZqyFOlIvXCpTHGIHLkDkZCAY2%2FirQN9tzryQOTcbL1f9ojyum5IJ8tXR2fFvfrlLnm1lfBGmIr5pFis9D01h0Yn83Sujx8InS20gS0yuM%2BfCiSG9qqmgG8pAwJ%2BlFSN9debI0SBq9tTiGUzxkOh7sJztcGjg4myd75wM8TFwJ%2FBi6027sCUHeRTa162OJgkIFZmm5Y8i2dG9VqxXKXwWs%2F067mP6xaH4vtx144P%2BvEfU6AHc6qSoi2VH7GrF7jbCbA%2FyjR3IIVeAkWEhslFF0dxjs5SnaOrbzIkYE1%2Bk7g6W5XYwHon6mymbNo5Hy93IRgF1tQBX%2FhYFZdngDq9WiAJN6rDOJLcJ8JomF1Lu7b6ah8%2F0fpWY1pBRFHrD%2B%2BRqlYO6WdeiDTtjboV6%2BwfZuUPbdxe0Ck8x940xuxteArhiCAGHojezaH3Octl6kN4YVenvGNtk1eYGQx%2BOsY6WGx0XL4V0%2BawNeZl%2BOh7kSUPPf0l9pAf7Ctc4KXlNWG9QkFCZD2FDYTFIbmB5zOxtfTlXAHNzC1y6PBBjqkAUbCuCpSYw9ipN4W09JCAgVgWjvJjIpUKchEANDwFYF3MlHKt9ala80VR9oGKu6sVbcxNdpF6o5WR8ZTY%2B6ykLDk0%2FmEljw5bMYeOVQgNPJy6%2FlM0O0Ih9aXOhj5ZoSTO8Cun8z11QAUsDn0ex4GjI08IUOX%2FRT3WdUU69NdDiMhgf6diF4%2FGQWmodVGJmao0q3Xb9GwwyIgpmCnISQ9iB5uhBBv&X-Amz-Signature=15a7cabc5a3ea6b1501478a8dd223a419708a69e9ad5118ad1f20c54c838ddb1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3ZKJWS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmKCohnTMHoQ2mKMQ0ftDZgx1ZrTL0%2BBI94FniooJwsAIhAK3XOMCINxmstE0qeE7ZLh4iqawR7HchDgSFMAFcRkHUKv8DCGUQABoMNjM3NDIzMTgzODA1Igw7ptQdo%2B5SEJkTJxkq3AOQkgTEg%2FVtLWQhTLmZFAf3qBYlAc2QGWkf3vIbcpPgVQ80URgHcqkVfOSKRTFzV8iEz%2BVpA5yoBEeN5INU%2FtxSgAqoXKh09GRXVqCKkSZFtLrmeYTIyZMj5kvQP6gZbJymtNhCpvWCrbn9QUlDEPdLbJm%2B6pIciE4lGIIHpNCPErf9mOiPdZhA1DQMhy%2ByGQObSBOpH%2F5GtIsx8%2BMGgSYssc9R8yg2ZXV19mWJC%2FbJilN%2B5y1GkmL%2FGH7jOUQyQpFFdQ3XxBxg7M1hDwnJ7wo4Ob9Bet0xQbMSKJSO5cJgxWQBSyJjpGDI6j9egKuGaeUBzzrjFBV%2F7gA8B%2FmC%2BI5eOQUWu%2F6GeBnLsVHqURjtvUF94AZnWXp6KCqjHTFepRIsXq9TfI4jg2Re2WVAj3DyaNW1xIifSig0basvCYeKZhrz1XkjNJd%2B2sW9ioonKheGHgLV9%2FsKTGSM2wWmM9pcpKLUmxbEb7y22M52kZVdXtA8zEbg2It25eiR3PLGzJAm8oJzzRR8INF3zFlyARENOcGP%2Fnn7UwwUaJ85JahgRx8CpQfu6c4wM642YiVxpmYBURBYfYMDp6B1P7382%2BXwXPTP2Fo9RDO96VNhZncnYC9qafvlo80qSy15ajDby6PBBjqkAU54%2FrCLLMT0KFuorr2txS6nkDTQg8bsl414Xn4uNtIdtEJCew9o2G2v%2ByOKHBPYgz1ukJspYBuIUwHNc%2Bg%2FDz5qJSh5l2tU%2FrTE9pGAe4AuQyujX%2BMq29c8qoPKiitDZXdxLAiw2ZA8b06z9K7mIIT%2FB%2FoHAByZJ%2FZsZNbqOeTNOFa70F4j1FPofxmD1KAuEDp0Cumh%2B0yAFvQ3JnaLI5dE0mb6&X-Amz-Signature=2dcbf88de4134a8320880a56a55c4e5277af5b0af7a76983d8abf9fd3a35ef9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DH5R7N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIYo3CIR9aCYLnf%2Fq1OUbDjQ%2Fbe42%2FlPj8IRoK2o4KuAiEA%2BF1bgGix4kH9fLWGWiOIVnySrQAr4ZEXQsYqzKGRT6oq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAHfvpJFUNPo0deJ2SrcA2Beb%2FhBUSHMsMdL%2BAkLLToH049kCCbl9E2Tbw8AagJ9725bPrSYrLxkz4SLBfB8w673M3G4r5IuVnc4lV0qu26LC5WW2MsPXOlLM%2FwE9A33WHJMAR826LLHJhlnBGXdI6DpWjWzLbhn9Qz%2BcQu86cuiFXMPliW3iMg0cIA7l1c8%2FeLyB20VdCZgCKoJn51KD9jZNc1ZPYmwg5OrcTNH2OvLrLB7PeWkor4a%2FA8u2uY2Zebq5ySHyoNb0b3mX1uH2QWkrE1kOPjj7XgRyWXuOrOmxwFpnLLpBkQxrv9WA%2B1Q7tUNrZx8Kp9lYzad5Lky%2Fr%2BshxzKj5jAm6xzNu4lULfmBTs9jbI8tqgwIbBC1A%2BHSJ7XRKg7nAEP9H4iVW3CTAh0tC%2BtBG%2Fi9BKnkKSgOWLxUrhXXhzUMBCAD3FltKq7hmimRsPOcT%2BQAubxybpwAKBUhAzo1649P3gvL3Gd4WKNSJGildoY2l%2B1dGFqNV95CeBnyhMLPwBDOKw3r8F5HSuJYKkY7qhOszM5Rf57T8a9tM5ipQyfO%2BTISR%2FIjxqU92QZedSF50FgtQFtGBvSpX1%2FgqoGdvQ1LcZYcc4BHoOfqrJj6vL1tNk8HAbAtdDWbUgvsUwJmj31kMjkMI3Lo8EGOqUBybFTtg7yB1FxqlnvDgpdFBxTMsS%2BYsj55uCKo9cDJ6pn2cvs%2F9MUO7xaFd6%2FmRGVvqmCsp8HzxU9oMZuLhUci6FrOpAlVxJV%2F0zx3dzUhWb2LPL%2FC38cFkapON7wXtVxknDQFYDx%2BDL%2B2AeCdPzzbAGrkcuzNtQWKVoEBziAETB%2FyqwSg7YmcLpaa2AB%2F9cPrPeJ3Vwzj%2BUQHvYtxubBljn2zRCy&X-Amz-Signature=82bd7e36c117e35825692e607c90eb5e0189a698a213f4c276e568603175098f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
