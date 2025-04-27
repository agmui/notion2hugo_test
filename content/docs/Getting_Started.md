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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U25JLN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLZ5cqe7Y946l2p0PxOnJYyy1nwLxG4sJLmUPRc%2BRPfAiA1Bl2LJOCYpGI8CbDgTXs9vJCfcKZRHfZhoMQsyPtyyyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMXjK2pI%2Bi7Tb0U1rjKtwDQk8CBY%2BeQYMJ0e0fM1L7HlMBmlaupmTFuaxoqh39q6dtVrI84DT5MbKQhwfGvi%2FRsWMiy0RWWww2N1nccYTHNQ5v8X0HeCy2ifLE%2FoJjFpjA49aZ%2FDdQ9EthvwG%2BlNLiChpvjhG8V4%2FQn%2BoYayqwYW1daH45jfMCj12b40cvv7t%2BfRaxyq5IYTNP6kOEmH1F%2FhhwgHCZK5g4YA%2FI3zNdyur%2BT3bvAOwyPyNYtrfH8%2FDvCfQxlQqE5SyIG9Yag6Qoiup6EWRo0YJra%2FK55WZvlh7YN70CndTPFqfkoZPQNZ5uCLRZMZX%2FqF1AnIQ6k0BALq0yJI6kpUshKBTZHKOkgxAcWQiz8MuNa5L2kIIh2V3bAHk4Bm%2BDMpZT6ljBEQ8JpgMC9G8dC44X2CFexFjI6%2Bi0jaIQDAlnjzKgp6aljHAlHRcuWP6l8leEgZt1Juq0ilymdqkXyK9uJog%2FiCnzikRm36RqLQVvFboLq2w4ynty2znhhTNEmjoTyzMrdgen%2BXRoBXkbqGcK5DPAPyzfDVlpshhVRz7TFnxMdyNevgKW6dhhfcHLjlhi%2B18ltIbot7keP%2Br3q3Dk7O%2Bf9vd6yzVTNCDG62a2Ak60eYUbcnrjBHRIQkgI4wC4TqwwvtO2wAY6pgFNAIGT9PYuPEbnG87Nxjz%2FJSDLXZaBsM8mKvO96IrwE2AesKXo7CSsoGyEVcRG5SgWw5iWBXA3VszRVu7KWyyEJ%2BKTGf7hzXxgBjf8D84wnv%2BSXry5EyV8I7mvmXTjTCNe0WDUlkztz0XJBs0Pv61enks2vX56bUtfdZeh8ojT1tIKsEuJKhsVZe8his8dfkCd056aZraZNjRgDmtkWT6B5HKwaKxN&X-Amz-Signature=d0126ee6bd0a4a789a7e255d0571583023ae5a5d04bcb262f1970f6adedb2191&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U25JLN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLZ5cqe7Y946l2p0PxOnJYyy1nwLxG4sJLmUPRc%2BRPfAiA1Bl2LJOCYpGI8CbDgTXs9vJCfcKZRHfZhoMQsyPtyyyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMXjK2pI%2Bi7Tb0U1rjKtwDQk8CBY%2BeQYMJ0e0fM1L7HlMBmlaupmTFuaxoqh39q6dtVrI84DT5MbKQhwfGvi%2FRsWMiy0RWWww2N1nccYTHNQ5v8X0HeCy2ifLE%2FoJjFpjA49aZ%2FDdQ9EthvwG%2BlNLiChpvjhG8V4%2FQn%2BoYayqwYW1daH45jfMCj12b40cvv7t%2BfRaxyq5IYTNP6kOEmH1F%2FhhwgHCZK5g4YA%2FI3zNdyur%2BT3bvAOwyPyNYtrfH8%2FDvCfQxlQqE5SyIG9Yag6Qoiup6EWRo0YJra%2FK55WZvlh7YN70CndTPFqfkoZPQNZ5uCLRZMZX%2FqF1AnIQ6k0BALq0yJI6kpUshKBTZHKOkgxAcWQiz8MuNa5L2kIIh2V3bAHk4Bm%2BDMpZT6ljBEQ8JpgMC9G8dC44X2CFexFjI6%2Bi0jaIQDAlnjzKgp6aljHAlHRcuWP6l8leEgZt1Juq0ilymdqkXyK9uJog%2FiCnzikRm36RqLQVvFboLq2w4ynty2znhhTNEmjoTyzMrdgen%2BXRoBXkbqGcK5DPAPyzfDVlpshhVRz7TFnxMdyNevgKW6dhhfcHLjlhi%2B18ltIbot7keP%2Br3q3Dk7O%2Bf9vd6yzVTNCDG62a2Ak60eYUbcnrjBHRIQkgI4wC4TqwwvtO2wAY6pgFNAIGT9PYuPEbnG87Nxjz%2FJSDLXZaBsM8mKvO96IrwE2AesKXo7CSsoGyEVcRG5SgWw5iWBXA3VszRVu7KWyyEJ%2BKTGf7hzXxgBjf8D84wnv%2BSXry5EyV8I7mvmXTjTCNe0WDUlkztz0XJBs0Pv61enks2vX56bUtfdZeh8ojT1tIKsEuJKhsVZe8his8dfkCd056aZraZNjRgDmtkWT6B5HKwaKxN&X-Amz-Signature=140d94ab8642e809c4997ddc2f5acc97a94b10a58f3d127c80dcb63d7a8bd27e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQDZSR2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmP3gf9NHwuFF8ETaN7ZBECV1KdF403InPnsIiIUUSwAiAXHaDW6Ww0xgSMha7qw3EG9NWLkXE2e5n2k6l5cb1i5ir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMnHXPfiRLIW4BbfQBKtwDnx2DAfKsl9fZaHUKUhQHP11PqLSz36EMDXrLefW6TCJtcBuUZNqelXAZSeXQGoRr%2F6rCvuIUfWwL%2FG%2BBMyBy%2Bz6FxcPSg3O9Xdb85hSaHdCJE3QAdSP53J3fTboVpHS5GPQGQ4CN%2BxfI8TvgyF1B3B5lFia0G7SaBNpBKjlnHszSms2sYiz03YTE0hY3Uox8RaiMXaomQ%2FFTcAtwBqNjBOVWKFBntxkuV5vT3hJogyoZJIqmBOPB7CvB0m1my2VLRh4eNcUwLLQzDYplBp5jn%2BvH7rQXVIatvsGB%2BzbePZ%2FlTW6AYvoToVT0decx1qLDRtK2Fw2fufEgEu9jYmtP2iUiZ5nHet6Kl96sFCGH1eWu%2F1LgfbDhQ14apirEVbJJKZwloUGV7Ke53DM5StEZjsK3uZWPTHUYCut4OMpNgS%2FFc0VaebW0VCfdXKJiT63t1Jo4Pd638xmmGoEX%2FtXxzXzB7YCacpJ7G2dOLUOpEjpZ%2FdnwZ782JtnW6AwRkdX6sZK4thfFYHMorHBBVnxAxpmhgyfvPZHNHY4yviua8Yy4n3Wt5MxCnRBXDT6H4GM3xvyG5JZxlC3B0YdQ8iiEiuOquxG1tvWQZ9xv9IkZgxiqTu51IrlwilZJUWgwtNO2wAY6pgHFHZdT1fPejKQGKMUjlXqtQVSwe9CCD8jGPSRvzeXXTQ5NFJZcruRe7ybjztoYWnttQllTQ44%2FQwAdc1ynVGs519e4%2B6LSM5qoOM3uiZVP8U8iRHJOgSRZ8%2BcfxEa5oHH3rvrKGQqJohAhfKUCZwSFqmoS8D49oTyNy%2FHcOvGN4VZnXSKeEmq1DykZi7O7e%2BG%2FhpKWRYl7lTOOKnPGSR8ljS0ynkxd&X-Amz-Signature=6686d54c1bc41bd471de38f3bd4cb7bd73c257741c673c508c1c246555eb5379&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCC4JVWN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEHllcn6aitt72SezkO3FBM4gtlJYi7b%2BZXsgDq56wvgIhAN7%2BQBSqxgP3iANaRECrdVOeLVU4sjueQrg5wEOjwwXFKv8DCFUQABoMNjM3NDIzMTgzODA1Igwc9wyqTrJsiNdRynAq3AO90xcW1WkgFtGWVhV3HHxjryKAVH1wez5VDb8snS78ktsf5jB06nqCuy2TOG1pJxxZ5pNWr0068VMor3ZJ68jWUoiZevB15fgC0B5OcGrPjfuTSz3DOtukupNKnmbddX0u%2Bi5QI4pWFSfpDg%2F21Hy%2BOvvDAHG9jeo8IzhrWHdEfsFv%2BCjsdUHcK3TJRlfnRCdKe2a7fTHArKMfZE1OIsTo0UsKwrz2eQBHUAb1cFqwar0AhXzobkT41pjX1eU%2FLybBnPGym5qZxFnbka7bYwtx%2FnmpjBZ1fzpC%2FExXNIplYNPQioGQuoBX2W81DuBCFZtJ62hwqi%2Fr64tH4Pnm1MMqSSZe0CijrKD5zyrXvTlt1CcFylrrjRGxlaGLZ2NMhyq7FWH4jq5hPYapMOHlIjWcXj5oQeIVIDn%2Fn3xqeMiY4SHsp39jnkX%2FqyaweaxTz7i3QdfkG%2FsrkTKKP0kYvgaaZXFjmrFg1mX8MzjAGqocoiupVDIq%2BOoJuo7SjsG%2BQ8zqPBJ9%2F8bqj9QVxRSd0GsO7juFFUWd6dw%2FDlTFR3RWQg5dipqj%2FUJmI7F8Fq20k0UxBcgLdcfhHOjzYTmCR59Rc7j0FVIemnibJAYSLc4py6bSKmkB8xGQzt4uojCD1LbABjqkASq%2B0ZIoiY0n6sOueh3GfNIi%2F%2FpeuVf6sa9za7igrCufiKAfZ40iNuR9QKWuID%2FxYzRYs0ZVFvo5xJXrYh2ZGZp%2FkdlhotX6GCASP5dW33mQ2WjkWTQKFZRKx0GPDDokw%2FjqXij9NaSxsxdmXR9pzqDErxdDYMARMVcQf8QfF1RE6aMKfoQExU0Ksued8NQkDcr13BKFp3RTQGb3qft1JdsEhJGE&X-Amz-Signature=262521cbf1a37d29ef846734e819a09342acfc1dee4c8690302c967d60dc7289&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5U25JLN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLZ5cqe7Y946l2p0PxOnJYyy1nwLxG4sJLmUPRc%2BRPfAiA1Bl2LJOCYpGI8CbDgTXs9vJCfcKZRHfZhoMQsyPtyyyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMXjK2pI%2Bi7Tb0U1rjKtwDQk8CBY%2BeQYMJ0e0fM1L7HlMBmlaupmTFuaxoqh39q6dtVrI84DT5MbKQhwfGvi%2FRsWMiy0RWWww2N1nccYTHNQ5v8X0HeCy2ifLE%2FoJjFpjA49aZ%2FDdQ9EthvwG%2BlNLiChpvjhG8V4%2FQn%2BoYayqwYW1daH45jfMCj12b40cvv7t%2BfRaxyq5IYTNP6kOEmH1F%2FhhwgHCZK5g4YA%2FI3zNdyur%2BT3bvAOwyPyNYtrfH8%2FDvCfQxlQqE5SyIG9Yag6Qoiup6EWRo0YJra%2FK55WZvlh7YN70CndTPFqfkoZPQNZ5uCLRZMZX%2FqF1AnIQ6k0BALq0yJI6kpUshKBTZHKOkgxAcWQiz8MuNa5L2kIIh2V3bAHk4Bm%2BDMpZT6ljBEQ8JpgMC9G8dC44X2CFexFjI6%2Bi0jaIQDAlnjzKgp6aljHAlHRcuWP6l8leEgZt1Juq0ilymdqkXyK9uJog%2FiCnzikRm36RqLQVvFboLq2w4ynty2znhhTNEmjoTyzMrdgen%2BXRoBXkbqGcK5DPAPyzfDVlpshhVRz7TFnxMdyNevgKW6dhhfcHLjlhi%2B18ltIbot7keP%2Br3q3Dk7O%2Bf9vd6yzVTNCDG62a2Ak60eYUbcnrjBHRIQkgI4wC4TqwwvtO2wAY6pgFNAIGT9PYuPEbnG87Nxjz%2FJSDLXZaBsM8mKvO96IrwE2AesKXo7CSsoGyEVcRG5SgWw5iWBXA3VszRVu7KWyyEJ%2BKTGf7hzXxgBjf8D84wnv%2BSXry5EyV8I7mvmXTjTCNe0WDUlkztz0XJBs0Pv61enks2vX56bUtfdZeh8ojT1tIKsEuJKhsVZe8his8dfkCd056aZraZNjRgDmtkWT6B5HKwaKxN&X-Amz-Signature=0fd3d46a9d194826fcc543082c12a9d71591c527d41dda60023ea570263dc5e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
