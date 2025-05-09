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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFZMEWZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLNh7V31DcWcw0fvnEj7QyfezupuxzNFa%2B6ndX%2FHS5WgIhALw35XD0WiWwXzz83W04NbE3kW1PPEvxD5cjAy7Enl9sKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjCsw4xUh64lZVWpEq3AM4jOEBNb7NcmHe2B1egsTsHkT1ZjMjWetyFmzZQ6bUnlC3XsYAXpSjzo3RYfS4sUHFyb37%2BRO0G8M31LM1QVkLPDC7KAPct%2Fllcsuiy1J3Zk4eZNuUfVyRmlVEB1DyrALuGxghNMKn6wa3bng%2BBql7BoR6Vm8cZbs0W926HstTvyWVlnpugRD43DZVmvNlNJkV3cclchiYx8jx%2FEw0sZpfY0NNSnCw06DRmgtRvKAwEi1JBPrl37lfuDAN2vds%2FdOxcvL3osFeR3r9j0SQoCki76KnTxPrrf4WO5maM%2BxdvGmZT07G31F0qyvcUOB%2BXEdRYOH1JW3Ku6LSyTDpAMULfcBzagMzz29CQ9h6v7pWkf5rdmnrMVU8UAkiTOsbPs%2BTdQMNv17BCk2nW0PGscxEMhqsBWlCLULO%2B%2B%2F6CNkVKFIy7agD5584q%2BrGyo9CFcUdeTLMuHT4gR5EQ%2BPVn4BoPFidE01sSKZbZK1kndZhOKuhY%2FSDeL4dovvLQNRIxiBHjBMXczX7ZYtjxJvK4zTaXN5bfpoGGl8m3ZgsgK9o%2FXAm2thks7voXsUgvfOI2MrogGn0IF8ahezUf%2F5sm0EQuLDYlkc%2Be9MKGO7N6RTM4NZsrhHN9srOpoL9PzDA%2FvXABjqkAUqOHq6NDnuu9sbNwOaipm2UgjJAAc4jr%2B%2FapCDOAUSidO2XYAFaWBIAuDL2egO1vqcBsbzdFR8IhJSrAZT%2FtVwiWmyYZhZzMxun4WKHzNfZXAh6rRP2xMswROfEkPrJsq%2BSH%2FtmzFZpXF3rTHIGAhTHvN5dwic7GAL%2FDWR86DMEBODdtrZDui2kDm%2FM%2BU%2B0xNYO0I1457w7%2FC%2BooDYcTX5BUNNQ&X-Amz-Signature=43afa334351d7ca911e129fa25723d5cdcb380ebb9c616191326d696aec4f182&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFZMEWZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLNh7V31DcWcw0fvnEj7QyfezupuxzNFa%2B6ndX%2FHS5WgIhALw35XD0WiWwXzz83W04NbE3kW1PPEvxD5cjAy7Enl9sKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjCsw4xUh64lZVWpEq3AM4jOEBNb7NcmHe2B1egsTsHkT1ZjMjWetyFmzZQ6bUnlC3XsYAXpSjzo3RYfS4sUHFyb37%2BRO0G8M31LM1QVkLPDC7KAPct%2Fllcsuiy1J3Zk4eZNuUfVyRmlVEB1DyrALuGxghNMKn6wa3bng%2BBql7BoR6Vm8cZbs0W926HstTvyWVlnpugRD43DZVmvNlNJkV3cclchiYx8jx%2FEw0sZpfY0NNSnCw06DRmgtRvKAwEi1JBPrl37lfuDAN2vds%2FdOxcvL3osFeR3r9j0SQoCki76KnTxPrrf4WO5maM%2BxdvGmZT07G31F0qyvcUOB%2BXEdRYOH1JW3Ku6LSyTDpAMULfcBzagMzz29CQ9h6v7pWkf5rdmnrMVU8UAkiTOsbPs%2BTdQMNv17BCk2nW0PGscxEMhqsBWlCLULO%2B%2B%2F6CNkVKFIy7agD5584q%2BrGyo9CFcUdeTLMuHT4gR5EQ%2BPVn4BoPFidE01sSKZbZK1kndZhOKuhY%2FSDeL4dovvLQNRIxiBHjBMXczX7ZYtjxJvK4zTaXN5bfpoGGl8m3ZgsgK9o%2FXAm2thks7voXsUgvfOI2MrogGn0IF8ahezUf%2F5sm0EQuLDYlkc%2Be9MKGO7N6RTM4NZsrhHN9srOpoL9PzDA%2FvXABjqkAUqOHq6NDnuu9sbNwOaipm2UgjJAAc4jr%2B%2FapCDOAUSidO2XYAFaWBIAuDL2egO1vqcBsbzdFR8IhJSrAZT%2FtVwiWmyYZhZzMxun4WKHzNfZXAh6rRP2xMswROfEkPrJsq%2BSH%2FtmzFZpXF3rTHIGAhTHvN5dwic7GAL%2FDWR86DMEBODdtrZDui2kDm%2FM%2BU%2B0xNYO0I1457w7%2FC%2BooDYcTX5BUNNQ&X-Amz-Signature=5faee7f2733850ebed0be42bc906d4f731af996414bf2959e3ad3cd05f4eed08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFZMEWZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLNh7V31DcWcw0fvnEj7QyfezupuxzNFa%2B6ndX%2FHS5WgIhALw35XD0WiWwXzz83W04NbE3kW1PPEvxD5cjAy7Enl9sKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjCsw4xUh64lZVWpEq3AM4jOEBNb7NcmHe2B1egsTsHkT1ZjMjWetyFmzZQ6bUnlC3XsYAXpSjzo3RYfS4sUHFyb37%2BRO0G8M31LM1QVkLPDC7KAPct%2Fllcsuiy1J3Zk4eZNuUfVyRmlVEB1DyrALuGxghNMKn6wa3bng%2BBql7BoR6Vm8cZbs0W926HstTvyWVlnpugRD43DZVmvNlNJkV3cclchiYx8jx%2FEw0sZpfY0NNSnCw06DRmgtRvKAwEi1JBPrl37lfuDAN2vds%2FdOxcvL3osFeR3r9j0SQoCki76KnTxPrrf4WO5maM%2BxdvGmZT07G31F0qyvcUOB%2BXEdRYOH1JW3Ku6LSyTDpAMULfcBzagMzz29CQ9h6v7pWkf5rdmnrMVU8UAkiTOsbPs%2BTdQMNv17BCk2nW0PGscxEMhqsBWlCLULO%2B%2B%2F6CNkVKFIy7agD5584q%2BrGyo9CFcUdeTLMuHT4gR5EQ%2BPVn4BoPFidE01sSKZbZK1kndZhOKuhY%2FSDeL4dovvLQNRIxiBHjBMXczX7ZYtjxJvK4zTaXN5bfpoGGl8m3ZgsgK9o%2FXAm2thks7voXsUgvfOI2MrogGn0IF8ahezUf%2F5sm0EQuLDYlkc%2Be9MKGO7N6RTM4NZsrhHN9srOpoL9PzDA%2FvXABjqkAUqOHq6NDnuu9sbNwOaipm2UgjJAAc4jr%2B%2FapCDOAUSidO2XYAFaWBIAuDL2egO1vqcBsbzdFR8IhJSrAZT%2FtVwiWmyYZhZzMxun4WKHzNfZXAh6rRP2xMswROfEkPrJsq%2BSH%2FtmzFZpXF3rTHIGAhTHvN5dwic7GAL%2FDWR86DMEBODdtrZDui2kDm%2FM%2BU%2B0xNYO0I1457w7%2FC%2BooDYcTX5BUNNQ&X-Amz-Signature=e90abd636a9ff71356df3f485a92e4ed8b8454842ad79a2c8b3df491a404da1a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWREFQAM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyTyP2Zwa7O8am%2FQt7cTKJorBc%2FEushgNZfk1DK9VoZAiEAoFnQVviq%2FqhZlfkdzfJqOGin4hxExwwf%2BnjjyemjhDoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCExDdvw8Fn7ErP5NircAz9UsFzHXXNh74c6jxy7Xtc8JU%2FjQNUggubxIaF%2FmwGo55z83%2FMKm8MFDv5J%2FGfMJPfKG07qTH26eAQwNveCLlRk9AuPhgqIdz1U3z0k89YXDNl6Q2K%2BncQbXQmKF0p6RcSEmp14ydR2j8TBRw5F%2B6TMDqyXmGi32LhP6z2Ejg9MAPQqcwa38hfV%2BuwZD%2BEeGKwkZxwfKAF52IhlRa4yplO7ZqOdgTTZy6cG6OSKgSiHP7mSPC2gfTfQYbA%2Fa%2FUtqC%2FkU0eVirL6v2FQHCOaeH6CrqyGPvgnu2v%2F%2B%2BD4t1L3F4Us%2FlumWOs47qxZ7hYC3sFJvJtpwdacRbL4RitCqlRIOKrX2NfE0R0C52WVxD7Mq5EWvLnzNI%2BkCOsVxS49mf1nm5lX%2FyPs68eYRKksTq9b%2BnDDkGdfN52NayIre%2FfvQdxhP62lEWMSzXI7y4JzLacjUgxgpbVq%2BY7%2FvXd3BBx6mFZjG3JTSx5voCS3EkJEvq7YhDg8Kj5xLR3ZnXRQSPnLA8ecYSzWF5gMR%2B8yNkm93ePUzzaxbF4iChluz3%2BlR3BM5xfucmXGg%2FUMILhz%2BOhVXAOa8qmk9GXXuLk%2BcRKRngl83AAow5HK3v6nBh4BMxYJx2Z5SesfRRBiMMX%2B9cAGOqUB3dcla4OneKKCcbbgm0mD7chqsvs5Hp8jQvIsOrhtz3VQJ9CTYLPuzL5nr2%2FianjO2F1pOBkLv80QGZTOmL6QynslNtRGgM81nLuRmhhJRXM%2BR8LdRmoIOPcmb5G%2FGR17Jr3z5Vb574C68LtqKCEVoqxFQOTqStq4RfapysOrdQ6HkoRB1a9rZPt34y6HESVIiFvZrM7mI6J9AVhV%2FfhzSfFZ5t7Z&X-Amz-Signature=13cc66d463df7955e0ddd7047c7276beff2f86d9b590fd41b198354101d5f5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBRLYKT%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyPUAAz7J%2FS0uNX1chvX0juJ%2BauzGI%2BTFwberRr1x2kAiEA8kJk76lbEQA0ynudppUT38TVk3sxvh8NNTBnVkmTXocqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyatJp9nsm%2BD%2FeA5ircAwaV1qHEW%2BId3%2FHbeLVVahbOtPXtPiBJLh%2F2bicWxtImgJ%2Behg4kbwpX3MAhZOjAEGPw8mDCd0DWd64POXwVWaoFWInHW9Xa39XOMqDUI97ICl1FOSkPTPSBDg5nXOSluYcHj1DXhBpA6GFHwqTOHkEDvXvxoLMD9%2FXyOJfzjDZB%2BDkd3IPx4pRay7v6gBjlN5pyw4SJUKS9xPsuiOAowZv0PHAQ0nXQ%2BgVCCYFir3QvuN%2F7NAx7lmbeVg6mAEa%2BdSeWMBI9cAhuLycoqZBWtzfMoKovDeQiaOabHTruuaxqln0cN%2F3v5KJxHCiGEsqeIRy1%2FPThf1QisFk6GligO0AePE6lJdH5UHMzRyTSUqtS1MtVbU%2Ff2w0UOYPPeMCC%2Fe%2FLMvGkwaM0hEuGktbXxKhp0qfJ87x3u1ofOFP6siiR9F%2FvIaP%2BxL%2BrBLary47zEIyZ0hzQUjltXJPmur6nsQRhSqJrQCH%2BuRvejn1TpmoIx9OMQ%2BQvdk%2FOnHLBvL%2FCkz2Ys3VW1AKUhPPogyFugeotdKyq0NQh7LSqH0YNGIeuU5M8kus11K3x%2FuibWfc6PYwhvPK07PeYbonAGn5sjmkhDFOuPf%2FLV20%2FUsjBFCvSRs6X9R68BPHd%2Fa7TMNX%2B9cAGOqUBZk1CaII2LO0TM%2F4n0dZqJLOROXoqggL3IpDCbaTMiT6V6Z6%2F1bqlfKSGr0RQD4XMouxDN3QsJM9Jn1NrzACHSUDshvpJYkxHhxM5RBlvLL5zk20faFwYSjMMVOIRZCFPpJwB1tBNu4Iyti5IA%2Bv%2FSYkQQgJ4VkgYtE%2F2xP6xNuB4etzMYEdIH%2Bik31ZJNjOl0GkYK9xvbP3gfDRGL1w1BbKNLnht&X-Amz-Signature=19234015deaed4711153b511ccbf2e5a2c008e9051c7327ad90b62bcd0fdb815&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFZMEWZ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLNh7V31DcWcw0fvnEj7QyfezupuxzNFa%2B6ndX%2FHS5WgIhALw35XD0WiWwXzz83W04NbE3kW1PPEvxD5cjAy7Enl9sKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjCsw4xUh64lZVWpEq3AM4jOEBNb7NcmHe2B1egsTsHkT1ZjMjWetyFmzZQ6bUnlC3XsYAXpSjzo3RYfS4sUHFyb37%2BRO0G8M31LM1QVkLPDC7KAPct%2Fllcsuiy1J3Zk4eZNuUfVyRmlVEB1DyrALuGxghNMKn6wa3bng%2BBql7BoR6Vm8cZbs0W926HstTvyWVlnpugRD43DZVmvNlNJkV3cclchiYx8jx%2FEw0sZpfY0NNSnCw06DRmgtRvKAwEi1JBPrl37lfuDAN2vds%2FdOxcvL3osFeR3r9j0SQoCki76KnTxPrrf4WO5maM%2BxdvGmZT07G31F0qyvcUOB%2BXEdRYOH1JW3Ku6LSyTDpAMULfcBzagMzz29CQ9h6v7pWkf5rdmnrMVU8UAkiTOsbPs%2BTdQMNv17BCk2nW0PGscxEMhqsBWlCLULO%2B%2B%2F6CNkVKFIy7agD5584q%2BrGyo9CFcUdeTLMuHT4gR5EQ%2BPVn4BoPFidE01sSKZbZK1kndZhOKuhY%2FSDeL4dovvLQNRIxiBHjBMXczX7ZYtjxJvK4zTaXN5bfpoGGl8m3ZgsgK9o%2FXAm2thks7voXsUgvfOI2MrogGn0IF8ahezUf%2F5sm0EQuLDYlkc%2Be9MKGO7N6RTM4NZsrhHN9srOpoL9PzDA%2FvXABjqkAUqOHq6NDnuu9sbNwOaipm2UgjJAAc4jr%2B%2FapCDOAUSidO2XYAFaWBIAuDL2egO1vqcBsbzdFR8IhJSrAZT%2FtVwiWmyYZhZzMxun4WKHzNfZXAh6rRP2xMswROfEkPrJsq%2BSH%2FtmzFZpXF3rTHIGAhTHvN5dwic7GAL%2FDWR86DMEBODdtrZDui2kDm%2FM%2BU%2B0xNYO0I1457w7%2FC%2BooDYcTX5BUNNQ&X-Amz-Signature=a32519f5aaedf5ab88fbe1bfc88d3ac57664c88c7f61518ccec32f3b73f01422&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
