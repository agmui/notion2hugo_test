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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SM7NPZ7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcPN9TYBpUD8yYtpM%2BmfehR6GcrWDZwAhq9p29nDspMgIhAOU0%2FBOTjNayw8sea%2BBp1tiI4kQV9NiPGVvJW2SckZ2OKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw37cjT3Vp5h9%2BlRWsq3AM9OsezVA7mTjp81GjOg%2FsTAEqydHe9dK5gHGs42CEqHGgfxfQsWddn4%2FJ6G%2Bt0g1%2B1AsVp6JSuD%2BCkfInPztl%2FU9sRZosyYrLAYkv6ttiLMUzCUEyuKF5ADqSYfFiCgM5%2B7Rb0yPcJ38GraQnRjLhi0RdjtTunYS8O6LEiwMwutShXfZ6jIzVfjFjU1CO7MEv9vZKLJoEeACYE9H5h%2BrDaVb9FFfq%2BNkSVYV84N01pzxuVIcDx2ZC6DOzGeCh6ABXn91OmP5NiEwExxD8WFbAq4rUAV8CVwbMCYOfOzUaO0JKI66ccPx32bGm1Zw3Pmmf7BTZ2eXRNzt%2F9oIaZOwf%2Fs%2FEPH7yS3fGXwWeb9tTn6teR43FTGNVu4uD3LMP3nzZ%2F5XaPntoTAfH0ZFUvyzSNRdw46E5unGGnvFz7hREnVYnx3kSWyMxwpBVvXiwFBvUtrMwmYb9kQUy9sSxlQAs6r4u8FBbX9HwxKXMldp6cUymmhe53zb34ef8We60%2FzfBpllERo8NsvNHG017AWmTY%2FtN5tv3Lld4H3jV747lVRnqZLBz7Vnd4eo7BGZfWrq4rc7UCy02pRbwE9TK029UYwMiakaYVnEfqpCJ2c8nobSGQee27kI6SLcfahTDtuZ2%2BBjqkAQeVZbfiWCw2OcrO2wbMrppijWUKtLyhxAxoQyLkx0P1SnF%2BURugW52DCjPsW37xFzrVDeJlzfj28YQ41d41vWeK4OSaqB%2BSobF%2BX3Vwcz00fli8c7w8%2FsBU82IHySOp%2BD6JBcHUk%2FVogorwZOahiwXR%2BkKn3Lrd0nzUb6kA5aDL5lAv8ynnFfu6Ng%2FyS8V%2F1W%2BEAjoTvZd%2BW%2Fe6ZHbO6g8L17xz&X-Amz-Signature=0598aaef0a0187f631ca997ddb372a1691fab2e407786438e330595d2ae95b60&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SM7NPZ7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcPN9TYBpUD8yYtpM%2BmfehR6GcrWDZwAhq9p29nDspMgIhAOU0%2FBOTjNayw8sea%2BBp1tiI4kQV9NiPGVvJW2SckZ2OKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw37cjT3Vp5h9%2BlRWsq3AM9OsezVA7mTjp81GjOg%2FsTAEqydHe9dK5gHGs42CEqHGgfxfQsWddn4%2FJ6G%2Bt0g1%2B1AsVp6JSuD%2BCkfInPztl%2FU9sRZosyYrLAYkv6ttiLMUzCUEyuKF5ADqSYfFiCgM5%2B7Rb0yPcJ38GraQnRjLhi0RdjtTunYS8O6LEiwMwutShXfZ6jIzVfjFjU1CO7MEv9vZKLJoEeACYE9H5h%2BrDaVb9FFfq%2BNkSVYV84N01pzxuVIcDx2ZC6DOzGeCh6ABXn91OmP5NiEwExxD8WFbAq4rUAV8CVwbMCYOfOzUaO0JKI66ccPx32bGm1Zw3Pmmf7BTZ2eXRNzt%2F9oIaZOwf%2Fs%2FEPH7yS3fGXwWeb9tTn6teR43FTGNVu4uD3LMP3nzZ%2F5XaPntoTAfH0ZFUvyzSNRdw46E5unGGnvFz7hREnVYnx3kSWyMxwpBVvXiwFBvUtrMwmYb9kQUy9sSxlQAs6r4u8FBbX9HwxKXMldp6cUymmhe53zb34ef8We60%2FzfBpllERo8NsvNHG017AWmTY%2FtN5tv3Lld4H3jV747lVRnqZLBz7Vnd4eo7BGZfWrq4rc7UCy02pRbwE9TK029UYwMiakaYVnEfqpCJ2c8nobSGQee27kI6SLcfahTDtuZ2%2BBjqkAQeVZbfiWCw2OcrO2wbMrppijWUKtLyhxAxoQyLkx0P1SnF%2BURugW52DCjPsW37xFzrVDeJlzfj28YQ41d41vWeK4OSaqB%2BSobF%2BX3Vwcz00fli8c7w8%2FsBU82IHySOp%2BD6JBcHUk%2FVogorwZOahiwXR%2BkKn3Lrd0nzUb6kA5aDL5lAv8ynnFfu6Ng%2FyS8V%2F1W%2BEAjoTvZd%2BW%2Fe6ZHbO6g8L17xz&X-Amz-Signature=4a29d792ec3eadbac6265916705105a866543285c78d6dedca06e00efb77b585&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVKC7TV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0xjA4kMPBVK9ASeDM9jx3yDxZw0L3FOtpMU6FCEo52QIhAMV%2BRFsdQ0arQYP7MvzIzFndFMoyWwdVnmZ3zdXss%2BgZKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQDd%2FExRTiYrJGAN4q3APatLrkScjp%2FQP%2FqkBEcpqgsQwQvuzxM5cjIOJzdWz8BGwxW9z%2F1XMZd3T1%2BqoLm7%2B%2F5wFZeFg5u26qZnzzgJcJqZBS7S%2F%2B4xHpPIOPTLXxTaenkcL%2BAfygee6hm0aUe6KGZ6i6C%2BZtthjhz%2F%2Fj1jshAwDwlluW8Qzw63FmGJNXEnSjaZ75kt2JuXMq4cvQMFckjyxlI9xIG8AmbxyUycvOw6U%2F7ZHMlC20P0FTJ3XB1GH5Y3IbEiCu%2Fu9AbH%2FmhZ60wUm75suI%2BeWH%2F0GnkdZ%2BZg%2F13ObTq3cCZLCJQ4h1VzA%2FVkzGcBMzfyfwvu3TsNvoE9yFn9ui6O2bhEaE6qJwmnniEHxWgXo59w1oASqDlbkEszQlcbpiggp8TlkKg9UNiwBucPqm9dOvROcgC22lw%2F0BUPZI80wX1zKXxDRdOVgSacMLHvHl4Ei%2BW3KydEf9Bc3BxyY%2FAniSxYmxGcf%2FX%2FtY4aa4ziVY8Z4foOxSyWt3HCj9KVZYKGFfG%2BH%2Bnr9ti%2FL8f%2BsIG3jAo%2B7TAlEhHCMnucrAA1Sn4DGv%2BIMGaZkhdTkeX1UsndArPzRHR6VFCFK6lFIAGNn7wFPZHG%2Fk5kWD2m16ifgmD9SybqOwl6t7DJBhL26tndiBlTCEup2%2BBjqkAZRLg%2Bk9brdp0RbBuIZVJWRhkZMUnyvNAXlJsxT7IvswhH2VnygDMuiLX2H7dW%2BvzBwjbZXjkDttxZF%2FGvZDgRawwOQvSXiuyGSm%2Bp%2FKN7u7kOqirm%2Fukm6NAk5WB%2FiqQjEAyN%2F8H1WGkKhIM3CSL9GLl39HhGcQgI0QDyu9zUqYOAWwsfhdfIZdQe2y8vxOX3DWRR88RTZi%2FVaFxzo9UzueZozG&X-Amz-Signature=ef6fba1e63c10f823cfa67479c7d699ddfe9a3e50caf1116540505e8b2ef25f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKYYZBBD%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAikJ4EtGZRfW7k1CxmHGRSN6IvyouRk4Iqt%2BnDUUA86AiAJ22NBU4uE%2FPBE0olmm9ZRFpZD%2Fd1oZpa9aeGrWTJmwyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YJ%2BYTvxx%2FwqmO5bKtwDflj6t3kNDmZGNOCU7lO%2FCy4Fm9b48OdkJoutePRigQG6uwKvPNfuUHukcC2P7Ytj5huol4PlX9uSEs7PmYRIZavUM%2BRN3r8NAaucPckViCqjjuQw0bFV%2BrDwVyjLWIffjSvuE%2FB%2FEUD%2FQMsyjl1QdpBZ8V3gvYDBotBD328tvHciQHnmbGYV5w7UojnlBS7JhMdRSZgELLrnEd2PZcE%2Bk%2BdmCKBX3JReJQ2wlONaPeJjzk6GID4puaXVI6QFUJH%2BDEBsSVBhD%2FslPYnNTEZwrzFMmcvRBeSGQH2UM%2FcIHerX%2BJA3WOTo1DfXfzXhcT5Qf6yf9SVO8DzaWMmhS5LMVaGJAnHwXw%2B%2BbqtDmy21PrCSqueYpX8k97hbmoU7GL3bQHu591jyAbf1LyWMHwLOCbN1e9mimAkJ7vHSEGdYvMy7LP%2BDIQeNmokaRNm5g%2BZflI9rC3ob1mS%2B9H0%2FWngmJIjalLiHB%2FncQDObTwRB%2BthD6C66yn9sfRBaSpQBSm5%2B2KcA2s786qJrfVdegJaW7ms1qfxDcSzzEmE5uv5swIZAt0IoiQqbIgLHuKDyefoto8SCZ4t4gkd9ZPxGbJV7gPivz6YmUtGMj55BEbdDgoqLmcXVDn6NNEvw8ucw4rmdvgY6pgFZAPRdJVn3Hh1y06m8wgQ00ok3KMCYUrgE3ij78VeOtnOi%2F8YfStrCFcAcjzcAKE0SuDFvZXwERyh4FXneM71LNzj4v8KUf4CA6sw48l30OCLFq75r5rdIUYFwBFwA4nqZWFapBP3CQ%2BLP9r8U7%2BGjiWazlXQMiKJQkLlmY9N8J%2BCvw0LfUVX%2Bnk%2BZLpslnqqBaxBO9j039cTulHIWEKHyQfAo11w%2B&X-Amz-Signature=726ef515313b41f345f8af4c68eac612d478f9b58597bd15ef659a7299c50316&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SM7NPZ7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcPN9TYBpUD8yYtpM%2BmfehR6GcrWDZwAhq9p29nDspMgIhAOU0%2FBOTjNayw8sea%2BBp1tiI4kQV9NiPGVvJW2SckZ2OKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw37cjT3Vp5h9%2BlRWsq3AM9OsezVA7mTjp81GjOg%2FsTAEqydHe9dK5gHGs42CEqHGgfxfQsWddn4%2FJ6G%2Bt0g1%2B1AsVp6JSuD%2BCkfInPztl%2FU9sRZosyYrLAYkv6ttiLMUzCUEyuKF5ADqSYfFiCgM5%2B7Rb0yPcJ38GraQnRjLhi0RdjtTunYS8O6LEiwMwutShXfZ6jIzVfjFjU1CO7MEv9vZKLJoEeACYE9H5h%2BrDaVb9FFfq%2BNkSVYV84N01pzxuVIcDx2ZC6DOzGeCh6ABXn91OmP5NiEwExxD8WFbAq4rUAV8CVwbMCYOfOzUaO0JKI66ccPx32bGm1Zw3Pmmf7BTZ2eXRNzt%2F9oIaZOwf%2Fs%2FEPH7yS3fGXwWeb9tTn6teR43FTGNVu4uD3LMP3nzZ%2F5XaPntoTAfH0ZFUvyzSNRdw46E5unGGnvFz7hREnVYnx3kSWyMxwpBVvXiwFBvUtrMwmYb9kQUy9sSxlQAs6r4u8FBbX9HwxKXMldp6cUymmhe53zb34ef8We60%2FzfBpllERo8NsvNHG017AWmTY%2FtN5tv3Lld4H3jV747lVRnqZLBz7Vnd4eo7BGZfWrq4rc7UCy02pRbwE9TK029UYwMiakaYVnEfqpCJ2c8nobSGQee27kI6SLcfahTDtuZ2%2BBjqkAQeVZbfiWCw2OcrO2wbMrppijWUKtLyhxAxoQyLkx0P1SnF%2BURugW52DCjPsW37xFzrVDeJlzfj28YQ41d41vWeK4OSaqB%2BSobF%2BX3Vwcz00fli8c7w8%2FsBU82IHySOp%2BD6JBcHUk%2FVogorwZOahiwXR%2BkKn3Lrd0nzUb6kA5aDL5lAv8ynnFfu6Ng%2FyS8V%2F1W%2BEAjoTvZd%2BW%2Fe6ZHbO6g8L17xz&X-Amz-Signature=4178a09fe298ce6ea5061e393498ee2e9bbbe41fbe4e69011abe67a17d7bc9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
