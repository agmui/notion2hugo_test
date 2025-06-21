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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJX4BPG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwKaudMbO5Se5%2Ff53xGCLxzujONtB%2BYg6teE6VpFBPQIhALTbbc9mi%2Fne32yr4uo8EGJnvpOarWv2CxR9r4eKyNbOKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww2OHLUeX%2F3ECzM%2F8q3AMYJR%2BssZYtW%2Bg1fdVIrehJ%2FtNnfAt0Void5wz8eL1zoM8clArchNImdy2sc0iHs4mLvTKWollA7FYEyGiv8jL3xV2mVd2avwOQV6aDPgxPyVPPduWv%2BI3XPgreqCQZoow4NaHeGOf8aBoAL5jTMbpxgSsnKrg9vz4FBKCnS0U3jjT97r1r7A3FERqYS%2Fg0zxKF5tw2TPlGND7tePYdKqS97EosH9bO3afdw5ulNXNYxooZ7w6KhBRm1eGYJLaF%2BBFSYLfKTgHtZWhA95j0AMEcJ33pmoOVokn9wYbSpLEcsV%2Fk6T9cMBLC4n%2FkCtYx8J0uCFWkSwsDD6YJLhrkgSYxG2LrQUS9dkZnYKlsewQZAAjVCz3E8zFHObSXR7dglaUMi1qw3%2BXWmkPIEe901ELGTOthFoicNPagsvBT5ndK6zMZOVWMEXL2BluSrQjJgj4k9mvh9qxkNA16a4S4DDleNlQyaox1D2DU6C9JGGnx7w%2FYTnl6cHpAokEaE912hitgGXvUxz9RCBf2PWCM1IW20vRbG69G7k2Nl7T3rq4OFYOok06Cz%2FT430eSfp6I5X1M%2Fgc0RM2i%2FaoRdV7LFipgxjvj9lEmAu1hTjXyQeDOWisviVefbMgCDeQT2zDij9vCBjqkAY3sw42uf6tJBwMxYCAHyylnUbrhX%2Bh%2BlLQdMwWlb7m%2FF2t4VOy1osFdZuTZkpitYf6JGfjeBXKI1VphLhCW%2FH9wRS5ClEDJ1Mxi3TotegZyY3ARicuuiGXcxKevKz6Hqu%2FEF7S0lQ8ea1Yj%2BkVm0LAPCtnNzr5BfPGM%2BG2tp2mkhFynWmwp3TRoktq%2F0HqMYqnF%2Blc1vCwQshpkuapQ2A6l6N5U&X-Amz-Signature=6114d8228f8718a85b961ce37110b298b2531bceef6a486b2f8c744524848070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJX4BPG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwKaudMbO5Se5%2Ff53xGCLxzujONtB%2BYg6teE6VpFBPQIhALTbbc9mi%2Fne32yr4uo8EGJnvpOarWv2CxR9r4eKyNbOKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww2OHLUeX%2F3ECzM%2F8q3AMYJR%2BssZYtW%2Bg1fdVIrehJ%2FtNnfAt0Void5wz8eL1zoM8clArchNImdy2sc0iHs4mLvTKWollA7FYEyGiv8jL3xV2mVd2avwOQV6aDPgxPyVPPduWv%2BI3XPgreqCQZoow4NaHeGOf8aBoAL5jTMbpxgSsnKrg9vz4FBKCnS0U3jjT97r1r7A3FERqYS%2Fg0zxKF5tw2TPlGND7tePYdKqS97EosH9bO3afdw5ulNXNYxooZ7w6KhBRm1eGYJLaF%2BBFSYLfKTgHtZWhA95j0AMEcJ33pmoOVokn9wYbSpLEcsV%2Fk6T9cMBLC4n%2FkCtYx8J0uCFWkSwsDD6YJLhrkgSYxG2LrQUS9dkZnYKlsewQZAAjVCz3E8zFHObSXR7dglaUMi1qw3%2BXWmkPIEe901ELGTOthFoicNPagsvBT5ndK6zMZOVWMEXL2BluSrQjJgj4k9mvh9qxkNA16a4S4DDleNlQyaox1D2DU6C9JGGnx7w%2FYTnl6cHpAokEaE912hitgGXvUxz9RCBf2PWCM1IW20vRbG69G7k2Nl7T3rq4OFYOok06Cz%2FT430eSfp6I5X1M%2Fgc0RM2i%2FaoRdV7LFipgxjvj9lEmAu1hTjXyQeDOWisviVefbMgCDeQT2zDij9vCBjqkAY3sw42uf6tJBwMxYCAHyylnUbrhX%2Bh%2BlLQdMwWlb7m%2FF2t4VOy1osFdZuTZkpitYf6JGfjeBXKI1VphLhCW%2FH9wRS5ClEDJ1Mxi3TotegZyY3ARicuuiGXcxKevKz6Hqu%2FEF7S0lQ8ea1Yj%2BkVm0LAPCtnNzr5BfPGM%2BG2tp2mkhFynWmwp3TRoktq%2F0HqMYqnF%2Blc1vCwQshpkuapQ2A6l6N5U&X-Amz-Signature=e67cdcc56f4e6007fea2e1870a37b37b78fd32a07fd3a2dcebe31a9cc0586bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJX4BPG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwKaudMbO5Se5%2Ff53xGCLxzujONtB%2BYg6teE6VpFBPQIhALTbbc9mi%2Fne32yr4uo8EGJnvpOarWv2CxR9r4eKyNbOKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww2OHLUeX%2F3ECzM%2F8q3AMYJR%2BssZYtW%2Bg1fdVIrehJ%2FtNnfAt0Void5wz8eL1zoM8clArchNImdy2sc0iHs4mLvTKWollA7FYEyGiv8jL3xV2mVd2avwOQV6aDPgxPyVPPduWv%2BI3XPgreqCQZoow4NaHeGOf8aBoAL5jTMbpxgSsnKrg9vz4FBKCnS0U3jjT97r1r7A3FERqYS%2Fg0zxKF5tw2TPlGND7tePYdKqS97EosH9bO3afdw5ulNXNYxooZ7w6KhBRm1eGYJLaF%2BBFSYLfKTgHtZWhA95j0AMEcJ33pmoOVokn9wYbSpLEcsV%2Fk6T9cMBLC4n%2FkCtYx8J0uCFWkSwsDD6YJLhrkgSYxG2LrQUS9dkZnYKlsewQZAAjVCz3E8zFHObSXR7dglaUMi1qw3%2BXWmkPIEe901ELGTOthFoicNPagsvBT5ndK6zMZOVWMEXL2BluSrQjJgj4k9mvh9qxkNA16a4S4DDleNlQyaox1D2DU6C9JGGnx7w%2FYTnl6cHpAokEaE912hitgGXvUxz9RCBf2PWCM1IW20vRbG69G7k2Nl7T3rq4OFYOok06Cz%2FT430eSfp6I5X1M%2Fgc0RM2i%2FaoRdV7LFipgxjvj9lEmAu1hTjXyQeDOWisviVefbMgCDeQT2zDij9vCBjqkAY3sw42uf6tJBwMxYCAHyylnUbrhX%2Bh%2BlLQdMwWlb7m%2FF2t4VOy1osFdZuTZkpitYf6JGfjeBXKI1VphLhCW%2FH9wRS5ClEDJ1Mxi3TotegZyY3ARicuuiGXcxKevKz6Hqu%2FEF7S0lQ8ea1Yj%2BkVm0LAPCtnNzr5BfPGM%2BG2tp2mkhFynWmwp3TRoktq%2F0HqMYqnF%2Blc1vCwQshpkuapQ2A6l6N5U&X-Amz-Signature=e884681135ef41144f4b8ecf88a029e3e54cfb339ac94c9f1b196eef53163b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y32VGZVT%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxfxjrWIC5HaISIqwoTt0dQMvBQ4pFFwxnLT19PZi50QIhAM1AgQT%2FSzTvpQEWIq9Nm3CQYAtZk2xC2PzFbm5w9IS0KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQXtbytAp6hdv9J%2FMq3AM7T5xJZt5kd6r5ThV1qglifDw1JRrAUXv2LzmdHOuIg2GDtwY6uflaEiRzd6YJ4T5XWcabCkbLtRdk6RKVWyN5Z1dQ3aFlFBLEa6mMhr0KkxqZNGLpP8x2SK6Z%2FbXNEYJRBtVUtiusHAlqvZcF47HnTiue9FhNt1priENeKutf9Mht7vLQ8eaK51qBFkH7MvvkTWc0tvcUl8yPQdaFfb86iaTPAhIOwdfYhdoUWuETP4xGJgg8fHKvukggo9X5dX0U9HTVeeB689%2BQ7dIUoVaYpmnmpAzavkyq3mHhRlIqaFggFaHcSctLD3adXbf6uJYLXXwyQ0Xf2PmWib4Rv4GfFmAdb%2BAhYPgOLzVdcz4xk9qkB9tUgBfWHQWkz%2Fv2YQqBj9YCypPFMT0b2pM%2BnVQTGieg53j70HrmNkoGCtORCC2kQLJcD2KgBIxXFZ8E9Jk05XCHCgLV%2B2xkZbQeNO%2FZS8xCvludEyuOVc7dZNJdxVKFAAP6OX0ISND%2BDWcVg2SFWcvKkpJUUebSNxEKvJiH%2FR8qlY6kwxJANgLQZCIEKCIbiZxeJcRhQq3SmDt5FpDrX6VzV%2FS2Gkvb8tLTG366Ij4wbyriXdV%2BkJFyrFxk2TZytWWT1kCu0z16OjDbj9vCBjqkAZEfW8IuTf8sZd6jlOx1dkt3W1CdnBFa0TRhm42EfDk5xowvqTA63gqHUkeimFx4uhujTyqJE93b3NEc%2BeHtlHfX2tuI%2Bih%2BB2Pm8v2e88323V8M%2FPS8TKc47iMYe6Vwzi4N%2Fh2Gbt%2Fj31iaJGXWJupyNESAQhhI2pO3nLFDob4c2FO8U90zWolGpdbmMEifKYZNBN4lOmqBniaLxdj9Th7Y1szm&X-Amz-Signature=bd23f71023052764be4af8e6e148685747a40e1a82caa375ec114bfc0fc5aa13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5WOT6F%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWewYXp8DTqsSxVgLfGxxn0LIMS5TCVsdEZA1mAaSWoQIgAfitbTn%2BkHjne6FTVNF8ql81iQ3%2BscqGHts2PCx%2FrC0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKn%2BGizn9iYQzhPLnyrcAzLZMSof5kbf5QwxRtmkl%2Fks2KpY6S%2BeJOdOWLsHcFLYU8OJUFzX7MMgqxVeDKNP0cHlDsMGKVSXXU03ddicVh1V48wr%2F%2BjRR5F01gk4gzHhhUA0eJDz%2FxTH2cEgUGAgU55%2FYuIOL3o7H3iQcjRHE8JtnDFUMPR0WZ97MtybKI5LwAhvn8lPAhrYwUkSAeO6BE4U4HBzNpidV%2B6qtl3globKfFLBZt7a3hoZYbURqmcqFq8U2BFjk07BZuONJ37Wb3PnzcWguSEwZE7x58MdddQK%2BHNco%2B6DhH8UIAQNRUTb3ITb09igOXTijh0g7RhBaP5qSZ6JghWGICb1AaHgtVhgs334n5lk1TcXE1oNjhvuxUYvm4RHo6Vp8jiZNfb%2B1clo4FwtrgSDATybbEdPhL%2BccSAvb9IWa6XJ5Ft6HbcLx7g45IET4%2BQky0j1Pl0f2QUCOr29AZEn2hAFPxLcqPTG5%2Fg2mECGZPgsKi6%2BNKB68Ujrpj8td%2FdPqq6G1EbIHLQJMMcvCOSXa8CN3VmOmqlR5IuS8IoLKjL4y5ksrz%2BfcQqkpSLnkYBNa%2BWN8sgBaJKEcwVf9G2j8SMBt38aXLBftFF4wrpfAnN8KTCs5ixWR5HL2VtTRIKLnP7MMKKP28IGOqUB9BKGx%2B6meGxgnL2eBev9IqVvNAeWAzPfWiraJE5b4CpQjQb2Rz89G2JoZQ08RFonS2ozaP8qOk5V0mfYAyv0kdqf%2Fbcx5%2FL7yfhqH9HQ490M8SHp1g7tOkzQGAbqq%2F1UdM3Bom8uzpaxbACxAvglK2IRJjNlH0Uo3PN47JkpdPzglCBWkkF5rbsMxKzBSsk0CwtPgHCt60E29OGDyRAxd2fhXgbl&X-Amz-Signature=5fc5fa5ed08de5c39f9d0042fc6b5c16aea0d35cfba9c4690e950cc390cece5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJX4BPG%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwKaudMbO5Se5%2Ff53xGCLxzujONtB%2BYg6teE6VpFBPQIhALTbbc9mi%2Fne32yr4uo8EGJnvpOarWv2CxR9r4eKyNbOKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww2OHLUeX%2F3ECzM%2F8q3AMYJR%2BssZYtW%2Bg1fdVIrehJ%2FtNnfAt0Void5wz8eL1zoM8clArchNImdy2sc0iHs4mLvTKWollA7FYEyGiv8jL3xV2mVd2avwOQV6aDPgxPyVPPduWv%2BI3XPgreqCQZoow4NaHeGOf8aBoAL5jTMbpxgSsnKrg9vz4FBKCnS0U3jjT97r1r7A3FERqYS%2Fg0zxKF5tw2TPlGND7tePYdKqS97EosH9bO3afdw5ulNXNYxooZ7w6KhBRm1eGYJLaF%2BBFSYLfKTgHtZWhA95j0AMEcJ33pmoOVokn9wYbSpLEcsV%2Fk6T9cMBLC4n%2FkCtYx8J0uCFWkSwsDD6YJLhrkgSYxG2LrQUS9dkZnYKlsewQZAAjVCz3E8zFHObSXR7dglaUMi1qw3%2BXWmkPIEe901ELGTOthFoicNPagsvBT5ndK6zMZOVWMEXL2BluSrQjJgj4k9mvh9qxkNA16a4S4DDleNlQyaox1D2DU6C9JGGnx7w%2FYTnl6cHpAokEaE912hitgGXvUxz9RCBf2PWCM1IW20vRbG69G7k2Nl7T3rq4OFYOok06Cz%2FT430eSfp6I5X1M%2Fgc0RM2i%2FaoRdV7LFipgxjvj9lEmAu1hTjXyQeDOWisviVefbMgCDeQT2zDij9vCBjqkAY3sw42uf6tJBwMxYCAHyylnUbrhX%2Bh%2BlLQdMwWlb7m%2FF2t4VOy1osFdZuTZkpitYf6JGfjeBXKI1VphLhCW%2FH9wRS5ClEDJ1Mxi3TotegZyY3ARicuuiGXcxKevKz6Hqu%2FEF7S0lQ8ea1Yj%2BkVm0LAPCtnNzr5BfPGM%2BG2tp2mkhFynWmwp3TRoktq%2F0HqMYqnF%2Blc1vCwQshpkuapQ2A6l6N5U&X-Amz-Signature=fdf6dae0922ea1b79e34ca6867b7fd6f014edeb0534fe4286cae010d1ed63b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
