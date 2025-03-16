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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZH2NAL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCauMm0h%2B5%2BLAtc0E2Lm2N8cJpHhtLy0d5YcPiRpZpjXgIhAMIE3YL7B4zB1Xor1EzN8z%2BbJfNOV96TOoJv7LYDhL%2FoKv8DCCUQABoMNjM3NDIzMTgzODA1IgzjJ%2Fb66AwETMSE3u8q3ANmTIcgTd%2FtHsDZaPc7EfTycAkdWiSErmE5e%2BS%2FovuZNb2r2jS05RVNFRn1pKpJ1WpavOYuXWJyBJYAaMTzjNFG4QPhV5phnn4NNSv4iiDpkx42Veo3nfHr5h4hX64AXt10VqotplM5z5ZqAuCX%2FDf4eaFXy%2B0uztKGgG1XAGRrjYFJXsCYFJehQZBiM5945VsJ%2FZjQpHVDL5GSu2FuBZTGG8d6j51sYVu9LnSb7N8rxeZ2jeNTcLjghetVbk%2Fwo1MpvLHy0pxQ%2FiAPNnHPhrrqYylGeUBgbDhsql73PGsMR40lin%2F6xfcS%2FzhK4TjWn%2BWyIUYk8NI8Ayr04yokoQt80A0sQ4VrHB6OdtNbKJeu7rzmGGey5FKzhafsF3965CzB6Ce1a945Y1%2FWm43x%2BkSWOn2hn%2FreVvaJRII0bLzNcTux%2Fdh50W%2Fe2GDPBWhk1cGn4SzrRGzV5cttN%2ByNEpAAtJmgWn91hveUz5yOcbujLAWRJE%2BzhHD4362F0WRC9qSnAAWLK4t9gBOuNhS9SOn4HIo5Rapq5ESlNnt97ExWYVpeR5fUOxHK10nBFGQWiYdJSn8KWgeMdEH2lPLt%2Bby2Cf3tg2Q51lnjD%2FA3cuNEp902cN6XqLuEvJZ9PDD7k9m%2BBjqkAfRkYnFHd3eZfQCKe0fbnzI8VrZ7UV8b%2FM5ZOCstZ0HBKJRyHzVdzXO%2BnDw4%2BThx5MxM8EbcCzkTafpXP4ItiN9Xngq7cR8eGmzgudUT4V9SMLAodMtsVM7ovrsrb9AE07048ejoFHslb3cAWZoXIIif7h0oVcj0Ae6UxGMYjTxNgJTOTGskKY9tuoJmy75Sr1%2FiSILbkyMbYWwL86pQgWxEZSfm&X-Amz-Signature=31e17f06d162f70d521c44ab1b76cc3d401967d64d88757367402ebb56521d07&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZH2NAL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCauMm0h%2B5%2BLAtc0E2Lm2N8cJpHhtLy0d5YcPiRpZpjXgIhAMIE3YL7B4zB1Xor1EzN8z%2BbJfNOV96TOoJv7LYDhL%2FoKv8DCCUQABoMNjM3NDIzMTgzODA1IgzjJ%2Fb66AwETMSE3u8q3ANmTIcgTd%2FtHsDZaPc7EfTycAkdWiSErmE5e%2BS%2FovuZNb2r2jS05RVNFRn1pKpJ1WpavOYuXWJyBJYAaMTzjNFG4QPhV5phnn4NNSv4iiDpkx42Veo3nfHr5h4hX64AXt10VqotplM5z5ZqAuCX%2FDf4eaFXy%2B0uztKGgG1XAGRrjYFJXsCYFJehQZBiM5945VsJ%2FZjQpHVDL5GSu2FuBZTGG8d6j51sYVu9LnSb7N8rxeZ2jeNTcLjghetVbk%2Fwo1MpvLHy0pxQ%2FiAPNnHPhrrqYylGeUBgbDhsql73PGsMR40lin%2F6xfcS%2FzhK4TjWn%2BWyIUYk8NI8Ayr04yokoQt80A0sQ4VrHB6OdtNbKJeu7rzmGGey5FKzhafsF3965CzB6Ce1a945Y1%2FWm43x%2BkSWOn2hn%2FreVvaJRII0bLzNcTux%2Fdh50W%2Fe2GDPBWhk1cGn4SzrRGzV5cttN%2ByNEpAAtJmgWn91hveUz5yOcbujLAWRJE%2BzhHD4362F0WRC9qSnAAWLK4t9gBOuNhS9SOn4HIo5Rapq5ESlNnt97ExWYVpeR5fUOxHK10nBFGQWiYdJSn8KWgeMdEH2lPLt%2Bby2Cf3tg2Q51lnjD%2FA3cuNEp902cN6XqLuEvJZ9PDD7k9m%2BBjqkAfRkYnFHd3eZfQCKe0fbnzI8VrZ7UV8b%2FM5ZOCstZ0HBKJRyHzVdzXO%2BnDw4%2BThx5MxM8EbcCzkTafpXP4ItiN9Xngq7cR8eGmzgudUT4V9SMLAodMtsVM7ovrsrb9AE07048ejoFHslb3cAWZoXIIif7h0oVcj0Ae6UxGMYjTxNgJTOTGskKY9tuoJmy75Sr1%2FiSILbkyMbYWwL86pQgWxEZSfm&X-Amz-Signature=a69900e4353fd249cb1304ab995be24dfbdc5cbc786282458a805280419d9155&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALO4TD4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGGVfjGTOEbxnzd114D0D%2BXXu0C1V4WtxuBy0cH%2FfgGAiEAhnYd8trtGEiuW%2FV8YoMRzMXp%2FQwJgfnO1yYirWFAYygq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHGVI0TblVo1JPSXqircAw%2FZ5v8A8tRvRpoPvxTT9vr0bD5Whi8IuyvYz1UwazOq7Po5EbYWlX2aW1lnmEUBI7sc43W7aNDG3mlTn1WPJj4q5ANku6KM%2ButBcRdInCuv4GhYqhUtH%2BSFo1GeNNCrwwkmzI3LP936fOLPW1LErkwBfcyRPHtsm0SSdIOWekLQ%2FYYy3oCpnsaOYPeMnch9yJU11ppx8qYsbJd7iODDuz9J6s8l3chWk9t%2FzHkvxSsK7K5viJsbCg0Zx4NpLqbo9LvYBeEk7psJpBZQ3Y19NxBPEmSIFoOvK1GuxJGt9p55huyVwCy5QaBTjkGSE%2FjkODDHMTXP4pX2vJColxiYALo1NRiegJJuX%2Fn%2FrT8yA%2BK5V8TpV0QEiMthWvikJ0JOtbO4owD71%2BrQVMndaZkFJ8gVoElkrYeG%2BCkYn2BhdxdDT5sBTht%2FUFR3BsKtpCbkB3kW%2FCC%2BIc9L4HRS2oFMnL5p2kwna3C00x8PMpsm2dTReETFqnTyFRG8VBpX2QqX0iZv6L6AqBBD3J1yH9GkV%2BwyA%2FIDuPWu9qDOvUkDRuAsy686JHs%2FMXBWGTJoKPhljXlvIP9LpYm%2FYSkPDysDn0GLVeXAQuvBPfrrnhpTpc1wubn4P5qE8B18872hMLWx2L4GOqUBd6h3rIdLiAfVTr%2F15GhRcF3CYXiyRCaPiM6jGTpgy9TAKGvMcaeEB7NSb57zQQ6CUIJj%2Bm0HBG3U7EF1yeF93I41ljpEDNevPEhKxPd82An2%2B6Ye59yAWTtS14yshNd4eP8fg5zrwXijVRzrWriuxQDnm5Re%2FwQvY30F55zkfliDYlq1oUOt3rCpN9s0JEmxz0pkNdkRknrk57FSY5NzKW2dBFXr&X-Amz-Signature=330899f9dc9913e0550ee6fc4bbded5164e854ccdbd7ac8858a904c87e7f4517&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC2SYIDG%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpxbl4qgh3WziAaimpx9HzMVumAf%2FUSyhlzKb5tK8tFAIhAMbW%2FePsE9tlLzsaN4FX7KuJjjP56O5wIl3%2BZxcl4XsUKv8DCCYQABoMNjM3NDIzMTgzODA1IgwsgqBh4C0yYg5KlZUq3AMGKjBrMfdQ2rEpSJGRXhRHCm%2Bh%2BRf5ImtNpfmGR%2FLegT0Nf1iU38CNuE6RuTQx9Zp8kC9mYQkmosi7dYmuMtAZB3g%2FeSMjhYDRC5Cj7OgTIOVlMH5%2BIGz0SSJsaf%2FKRh%2FAmex7OcwgGOYyDC7kT%2FRdxq1FmzvayLPfTgX7Oy2Z4hQjryDOW7h2Dh9F0ITFRLy7glVYfFnlz79YlH4g%2Ff5GtIDlseori%2B2VNt3plg6rTVt82UykCqKS8oaPcGE8Ji3rlS%2BogAtFUufC7TIrRnTTni1a7hXYyRfvAgR5uZ5M4NNHzNhqGPdk1sK7eK9YikCabdOiylELQ67SfVMylukFeMqDl1VvkdnQzdBHSiVVlNcEcQc08xq0SFTzBPhVI4otDYEwdxIFX1Gn2Q6HWlSqvr%2FNt4mLOGnzfLHZBAx6Zj8%2FpS%2Fp2UPZSfz61cetocDR3xDhvCKraTm1RuMwj9Dg9ElwqIsSxtXj0uskyxvWcglRGALaOvdNfSa7cMsc41uNx1dYJMUpC4P8wgty6xE4tmM3MHHe%2B6DgumxdDV%2Be9zF4RbWAu1wn0G2Fnk4NshK892DcAnW6CeGePL0o5AGNzy0eU6dpUTRpdvt89TnqegY6SQ8rbDDat%2FcOFTCOptm%2BBjqkAYu9AFzvRRau1yo2Dco1W7WCSLPaZ%2Fb9UXTx%2FmSgKtEg89FEm5ui7ZTXGbawzTbG%2FwC041eVqFgMWY3M%2Fv8Mo9V%2FxPOcPCNO9I%2F7n9hrEgKwkeetLb7pVo7ZB9ekmdrY8RXygSeAEnt58GItmq1LnU4h3NNHsfT2nSYYvTxlS4zQD4mSmhcl6YpWhkYFmXT4ifWk6stAIt5ZXN0Sp59uzFtxu5PK&X-Amz-Signature=4ef42cafecaf3825e8fe27636a022bb541fafbbd2cf01911c78868501043d26d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ZH2NAL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCauMm0h%2B5%2BLAtc0E2Lm2N8cJpHhtLy0d5YcPiRpZpjXgIhAMIE3YL7B4zB1Xor1EzN8z%2BbJfNOV96TOoJv7LYDhL%2FoKv8DCCUQABoMNjM3NDIzMTgzODA1IgzjJ%2Fb66AwETMSE3u8q3ANmTIcgTd%2FtHsDZaPc7EfTycAkdWiSErmE5e%2BS%2FovuZNb2r2jS05RVNFRn1pKpJ1WpavOYuXWJyBJYAaMTzjNFG4QPhV5phnn4NNSv4iiDpkx42Veo3nfHr5h4hX64AXt10VqotplM5z5ZqAuCX%2FDf4eaFXy%2B0uztKGgG1XAGRrjYFJXsCYFJehQZBiM5945VsJ%2FZjQpHVDL5GSu2FuBZTGG8d6j51sYVu9LnSb7N8rxeZ2jeNTcLjghetVbk%2Fwo1MpvLHy0pxQ%2FiAPNnHPhrrqYylGeUBgbDhsql73PGsMR40lin%2F6xfcS%2FzhK4TjWn%2BWyIUYk8NI8Ayr04yokoQt80A0sQ4VrHB6OdtNbKJeu7rzmGGey5FKzhafsF3965CzB6Ce1a945Y1%2FWm43x%2BkSWOn2hn%2FreVvaJRII0bLzNcTux%2Fdh50W%2Fe2GDPBWhk1cGn4SzrRGzV5cttN%2ByNEpAAtJmgWn91hveUz5yOcbujLAWRJE%2BzhHD4362F0WRC9qSnAAWLK4t9gBOuNhS9SOn4HIo5Rapq5ESlNnt97ExWYVpeR5fUOxHK10nBFGQWiYdJSn8KWgeMdEH2lPLt%2Bby2Cf3tg2Q51lnjD%2FA3cuNEp902cN6XqLuEvJZ9PDD7k9m%2BBjqkAfRkYnFHd3eZfQCKe0fbnzI8VrZ7UV8b%2FM5ZOCstZ0HBKJRyHzVdzXO%2BnDw4%2BThx5MxM8EbcCzkTafpXP4ItiN9Xngq7cR8eGmzgudUT4V9SMLAodMtsVM7ovrsrb9AE07048ejoFHslb3cAWZoXIIif7h0oVcj0Ae6UxGMYjTxNgJTOTGskKY9tuoJmy75Sr1%2FiSILbkyMbYWwL86pQgWxEZSfm&X-Amz-Signature=5a73178f7d1420b969f1e8727cecf4a9802f8afec89b08c813bd08fe16414a11&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
