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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3ZDYUF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIOnZp54grmLbopfpCqGYObsyy0jUhhjyZ05l%2FpLPihAiBOuQ4ls9WpSRUN5Hgg571FBLWKwFL7z6C%2BOeDlMHcKwir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMMKmuGVIMje6BpRNsKtwDbDsBYN0Qb0fWA7UEJWumiTpYvNxeSc3g8eF5%2B%2BcXBxJ5X3NBeT5tUxGGeaBpiPOHP7NoOhfwtj86QhynhfzvzVAU%2BEzLIDsc82uvHFQvDdFQrG9f7UBoHzYmnmuSqFPWgmwriFronWvyuJ9DgNTeA83nOhJKUqt6NyBr0ue6kltTkuUXBNXqAEt5AgPV9mgXOtfoa8hC48YtK0M%2Fb4DvKdAt9TZWhRS2Me9rHDFXzQM9Qjhj9i6OlFeBWDYpp5eZpjAfb6oYPAtBJpxvuMUHCVR9jUmLMoZHmRsOxbiaBCpVWdRkToj0nNCvuM0DWWmaxvK17vdIjEFQ47PcdA%2B5cV9FDL0YUofnyyDh5UXYMXcB3cx%2BajeVKoz48bmbVEWd8dTlOKhYs6OTr4agrfLNyiMOcAKjdyZ67pDNVZl%2BHPjIr7FEI3PRetamN6Se8ZsB%2BjvvcrRNxr5RvK03mx0M94t6JN1UuIZGZqYqQdAdxYd8sGNifYGgGXVeC7mc%2FIOBdKsa42g07q2SBk7s1uY9aPteFwNeHWbxYgWANSCv7tNfUrt%2F2Cd6pBJbukQtHzo2aRVdya9%2BsjFFuOEXaG6N7xW3musChHbB2y%2FV0Z%2BUPKIEH7Hf1%2BL2ArZRzwAw9LLtwAY6pgFBrXuaOSjhF6I%2Bh5sQLTvq772y7UEfSJv35trlStFVJkDsWvNE79Kqp0rqsLIdjaVMbkvH7YIQ4%2F7XajhMwtMv6CvOalWImCjDeBNaphG4e0170bdPcNueCsqZLrlMHY%2BbranS0SAQ7rdBJyuiHEYH5zT%2BZTYLmtMs07FJ%2B4U5zd9RZ5rhFfCT%2F54PX7sseV8fU3LWwGACKYrhurOwBaDL4j4iKzXe&X-Amz-Signature=b2a6f6729208cfd29340ef380ac13e4299dd4d642a85a5f63f346050015f665c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3ZDYUF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIOnZp54grmLbopfpCqGYObsyy0jUhhjyZ05l%2FpLPihAiBOuQ4ls9WpSRUN5Hgg571FBLWKwFL7z6C%2BOeDlMHcKwir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMMKmuGVIMje6BpRNsKtwDbDsBYN0Qb0fWA7UEJWumiTpYvNxeSc3g8eF5%2B%2BcXBxJ5X3NBeT5tUxGGeaBpiPOHP7NoOhfwtj86QhynhfzvzVAU%2BEzLIDsc82uvHFQvDdFQrG9f7UBoHzYmnmuSqFPWgmwriFronWvyuJ9DgNTeA83nOhJKUqt6NyBr0ue6kltTkuUXBNXqAEt5AgPV9mgXOtfoa8hC48YtK0M%2Fb4DvKdAt9TZWhRS2Me9rHDFXzQM9Qjhj9i6OlFeBWDYpp5eZpjAfb6oYPAtBJpxvuMUHCVR9jUmLMoZHmRsOxbiaBCpVWdRkToj0nNCvuM0DWWmaxvK17vdIjEFQ47PcdA%2B5cV9FDL0YUofnyyDh5UXYMXcB3cx%2BajeVKoz48bmbVEWd8dTlOKhYs6OTr4agrfLNyiMOcAKjdyZ67pDNVZl%2BHPjIr7FEI3PRetamN6Se8ZsB%2BjvvcrRNxr5RvK03mx0M94t6JN1UuIZGZqYqQdAdxYd8sGNifYGgGXVeC7mc%2FIOBdKsa42g07q2SBk7s1uY9aPteFwNeHWbxYgWANSCv7tNfUrt%2F2Cd6pBJbukQtHzo2aRVdya9%2BsjFFuOEXaG6N7xW3musChHbB2y%2FV0Z%2BUPKIEH7Hf1%2BL2ArZRzwAw9LLtwAY6pgFBrXuaOSjhF6I%2Bh5sQLTvq772y7UEfSJv35trlStFVJkDsWvNE79Kqp0rqsLIdjaVMbkvH7YIQ4%2F7XajhMwtMv6CvOalWImCjDeBNaphG4e0170bdPcNueCsqZLrlMHY%2BbranS0SAQ7rdBJyuiHEYH5zT%2BZTYLmtMs07FJ%2B4U5zd9RZ5rhFfCT%2F54PX7sseV8fU3LWwGACKYrhurOwBaDL4j4iKzXe&X-Amz-Signature=40cdf935ce77eb7a0fefeddc844a230fb0e049ac9799dc898c367cfc81b61d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3ZDYUF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIOnZp54grmLbopfpCqGYObsyy0jUhhjyZ05l%2FpLPihAiBOuQ4ls9WpSRUN5Hgg571FBLWKwFL7z6C%2BOeDlMHcKwir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMMKmuGVIMje6BpRNsKtwDbDsBYN0Qb0fWA7UEJWumiTpYvNxeSc3g8eF5%2B%2BcXBxJ5X3NBeT5tUxGGeaBpiPOHP7NoOhfwtj86QhynhfzvzVAU%2BEzLIDsc82uvHFQvDdFQrG9f7UBoHzYmnmuSqFPWgmwriFronWvyuJ9DgNTeA83nOhJKUqt6NyBr0ue6kltTkuUXBNXqAEt5AgPV9mgXOtfoa8hC48YtK0M%2Fb4DvKdAt9TZWhRS2Me9rHDFXzQM9Qjhj9i6OlFeBWDYpp5eZpjAfb6oYPAtBJpxvuMUHCVR9jUmLMoZHmRsOxbiaBCpVWdRkToj0nNCvuM0DWWmaxvK17vdIjEFQ47PcdA%2B5cV9FDL0YUofnyyDh5UXYMXcB3cx%2BajeVKoz48bmbVEWd8dTlOKhYs6OTr4agrfLNyiMOcAKjdyZ67pDNVZl%2BHPjIr7FEI3PRetamN6Se8ZsB%2BjvvcrRNxr5RvK03mx0M94t6JN1UuIZGZqYqQdAdxYd8sGNifYGgGXVeC7mc%2FIOBdKsa42g07q2SBk7s1uY9aPteFwNeHWbxYgWANSCv7tNfUrt%2F2Cd6pBJbukQtHzo2aRVdya9%2BsjFFuOEXaG6N7xW3musChHbB2y%2FV0Z%2BUPKIEH7Hf1%2BL2ArZRzwAw9LLtwAY6pgFBrXuaOSjhF6I%2Bh5sQLTvq772y7UEfSJv35trlStFVJkDsWvNE79Kqp0rqsLIdjaVMbkvH7YIQ4%2F7XajhMwtMv6CvOalWImCjDeBNaphG4e0170bdPcNueCsqZLrlMHY%2BbranS0SAQ7rdBJyuiHEYH5zT%2BZTYLmtMs07FJ%2B4U5zd9RZ5rhFfCT%2F54PX7sseV8fU3LWwGACKYrhurOwBaDL4j4iKzXe&X-Amz-Signature=ad398470ed9b9723f7e3f81b3ac597fa1ff9bc3d8d282c3d2c7f9574f419d44b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74MGLDL%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7qLNQmW0AL0MK3swvQfgw%2FVT0GA0URgIdmQgFgZiJwIgEz0rgkFHGxtHM3seqAirwAyEVW0H5SZlc5cTM0Rq0XMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDP%2Ft89qJ3cFogdxBtCrcAy%2BOgmGv81Q5ngmVjBbAyMrm5l9tak%2BV1OIBeNzCje3ox6bng3Igp3e3cqZ4dw3k%2BqyJKwwnAOk9BaAsA2o6aUFC4H%2FVmnwTSn200f2cbJ9grRuGsXIIEeRBCM8%2BGIu3TFYDMjDauPMJTm%2F9g%2F9OP5MWiZ%2BPZknjtYoOQlbyGpsAKBaJyhqZa9RZIDofB7H%2FFiF29kj3%2FrurMsuBI8myJyNXWBxpHWny8gRZS7a%2FnwPRf86YJ7ZuKurQ3yPZji9vUmhPUKE6aSrHhBEVQvYgI%2FZvRc9LsXfTiFJOcjzvOMDJyyp5gys4uSegOSGw4yRGz2V4aUCOAgyW3uexgJpiFYErymX%2FUngHMgJ6c8lgIEZaNVhssmUHrSq4iRUO%2BEJX3SnpcfaUom2Vp9PxzTtXBSa%2BuiLI3MiqFTQq1o%2Fo0C%2BQsS9%2BJlKwYCh3GQ%2FOBNrX3wPrwmNeLTYd1AZPD2eBbpFhkKEPMH91e3CFQ9ZmiRCx0niREFoPHgQr55eh%2FSzcXl7%2FoIF%2FoEWMAiPd9K6yZlitJNsn6XabrzHtz5Fd5bf7a1otJHV%2BWtufVw4S%2BztC2FmL3C138F3H%2Be0798jPhUOvrjnc%2BVBYYx5fkkvz5syTKkJaJ7HK2nc%2B44vpMPCz7cAGOqUBQ%2B3r1LiP2AFt1trL3WwuZCUYGVevW%2FwXu67OyyzjvWwrPnvJjkP%2FTW4yyWLCHOxwKPRjpIdTH9oo9hD9rEeEwEzoSqT4%2BiHudFoYlqGtaHsMmMaeCID9e%2BxQbCa3qpLFS0TgR48RBW7obV0lO%2BNbJWx5fDp6wXXNvYzqOj5blnW%2BgTRVW7reIqjXS%2FfwMnUA%2BRCx2ET2u6upBi0oCoElplfE0nus&X-Amz-Signature=48b717349cb446adefb87a53915ec3aa694b449243cdd18d54d748a56b77fa8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PIWZJME%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUvKw7rp1LgRIHpx%2BRjZo0uyzsZCIKsCMTrif5yzkzOAiEAvhzErXEad201V7McqbpCBbjl1liZAIbkjjfji3rFA34q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLo%2BaUovDKYCcVjOdyrcA1eDIN3jyRipvFGO9CiL1IfLD5oBWtUXq1sytV4xHM76J%2BAc%2FogB0uXsZSI9rWEJbahYcYiZoST6yhmA8y8b5shOjUT2SqBlSc62BKvJM44Oadzu0kSlPPqO8WliGhjgQmDCY1a4j1VBm6sQnoIL%2FjtWXYjLA59hNfQ4tf8PLLKImoSbf8G0eliaoRHRFxf9MkNpVOABCTbodm%2Fz3%2B3vYrQ2pkOHA7szGlK6WX8aHKwMbBAROKOOCjZz5%2BUsaSceM5HZOjwgJvRXfbWlLY7Bujq02%2BppAnA2HGRd9WNQs9XucQcvv8I7Drnn9mhBtkDjlpyPbEDijInVm4Yo4y30%2BZmPvvzT3rUr895eM4Gp%2FmEeoUuP40YcSX3CZ3x9bQXx4UdqP1w4AlbiDcGsIWagFAlo3svnHE5uQSbC7uoq2tCPWZcu194A%2BhJzieh4yVt%2FWM8WGuWKQGdZLSMs4oWOmYWQntRZAmW4Oosh6N6A3ASpMZdFvXvdKS3IpjOGDz%2FwTJddOocWqHbxD%2FhzMQVQkd%2FISvZ1V%2BUduwlb3bZzNJ3WRucuVF5dzoAioDkXx6lBM5dsdrOuybGnAU2qERiWGo7Xcskl69Nv0o0asrFfW0YP2Y8XTeLxUF59gediMJSz7cAGOqUBJLj1uVfckpgWOfnhRLKY8QqrRvMk2daRGx3MadLz0OsTB1L8vGFxaawNGfEyu22Mp1F1BIVFnI4waqHOfk7i8H%2BMnyL5kCRALojWK%2F%2FVcb5%2B5XhyhLjvLUO%2F46Tl4BDjJISsp4oi1alKncRyPsgFCcts3agz1J1dTAILBWtXfPcY103Ba%2FP%2BuFxhlnHv%2BY9XfqnAxkqpQqAx4JRDGU2aSgDuRQOd&X-Amz-Signature=d7bf9054db4f990bfdaea0a25e667f829b5bf0e92a8fe62322091ffcbf78f678&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3ZDYUF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIOnZp54grmLbopfpCqGYObsyy0jUhhjyZ05l%2FpLPihAiBOuQ4ls9WpSRUN5Hgg571FBLWKwFL7z6C%2BOeDlMHcKwir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMMKmuGVIMje6BpRNsKtwDbDsBYN0Qb0fWA7UEJWumiTpYvNxeSc3g8eF5%2B%2BcXBxJ5X3NBeT5tUxGGeaBpiPOHP7NoOhfwtj86QhynhfzvzVAU%2BEzLIDsc82uvHFQvDdFQrG9f7UBoHzYmnmuSqFPWgmwriFronWvyuJ9DgNTeA83nOhJKUqt6NyBr0ue6kltTkuUXBNXqAEt5AgPV9mgXOtfoa8hC48YtK0M%2Fb4DvKdAt9TZWhRS2Me9rHDFXzQM9Qjhj9i6OlFeBWDYpp5eZpjAfb6oYPAtBJpxvuMUHCVR9jUmLMoZHmRsOxbiaBCpVWdRkToj0nNCvuM0DWWmaxvK17vdIjEFQ47PcdA%2B5cV9FDL0YUofnyyDh5UXYMXcB3cx%2BajeVKoz48bmbVEWd8dTlOKhYs6OTr4agrfLNyiMOcAKjdyZ67pDNVZl%2BHPjIr7FEI3PRetamN6Se8ZsB%2BjvvcrRNxr5RvK03mx0M94t6JN1UuIZGZqYqQdAdxYd8sGNifYGgGXVeC7mc%2FIOBdKsa42g07q2SBk7s1uY9aPteFwNeHWbxYgWANSCv7tNfUrt%2F2Cd6pBJbukQtHzo2aRVdya9%2BsjFFuOEXaG6N7xW3musChHbB2y%2FV0Z%2BUPKIEH7Hf1%2BL2ArZRzwAw9LLtwAY6pgFBrXuaOSjhF6I%2Bh5sQLTvq772y7UEfSJv35trlStFVJkDsWvNE79Kqp0rqsLIdjaVMbkvH7YIQ4%2F7XajhMwtMv6CvOalWImCjDeBNaphG4e0170bdPcNueCsqZLrlMHY%2BbranS0SAQ7rdBJyuiHEYH5zT%2BZTYLmtMs07FJ%2B4U5zd9RZ5rhFfCT%2F54PX7sseV8fU3LWwGACKYrhurOwBaDL4j4iKzXe&X-Amz-Signature=02415beee989d1a752ab1b487ec59b171dcbe63ce63262506003b2042908db2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
