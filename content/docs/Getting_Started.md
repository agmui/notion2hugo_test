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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYVQHGE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE%2FlRJGkjVc0OuPNy8F4r3HrZTaFuYo6dThjRqXDpU4AiEA0BHEUKdJZWHvlDTed4mUPAJaYf7XVoPk8GH2AYu0CUoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjVgkrgVSujeELNXircA6KldZdQ%2BMrVEqftcqRcHKHRb3QlHY9AlOW8XtDhMLPHSfck5x3uG5%2BzQ5dxqCfrF3ma0zGeY%2Fd%2FIe2AuqeNULNtregETDQ%2BWmR1x4CH1lcs1o5EeXhdjmajpnyAvBAvW5jVx6XXl6gIfKQUso4Zw6w4KZMsarnnTJCWuYRGwBxYGNpuWhkr0Ibn9Y9NfpggyAdfRXsFvqKCtshvp7FlY0%2BCVVCnlAMkmMetsyVSklPd4CGH7hwOpd8%2B4faB7GYEl42eeQ2rBDefxz7yD0wBQT4GL2ibOrEaJgYCitgKOkfrFVr5JBNreWO2oTXSQrVWliUw920TK7O362j9GE7OVyCPKWGRX3F5UKiBL7ZBzYxI0Ixg3UpxT46Z871obp%2Fds3AER473FVSr5prmEoRG94GJ7Ks3rK0RBZpGvwhIyc9DuUOYVvy5dYAR%2FaN6NgJcXYluEPgBgbwfqfW14Jy3s%2FmI0%2FpSIVHHP%2B1edVLyPu9tX21Tep1nMqljwY3cpgdLJOVqaowtZRlYvN8T9F6Ot4CE%2Fq7iC%2F4aayjMx4q23HELvubGaPeqWNEnr18vu9AimUxLIK2Az1mXLSbMG7cnyQ7VQHU5%2FNA2SH3ymGZZgM%2BTDC85VA7zaeCIpARdMK3%2F9MMGOqUBd4jUKc2kVW4l0q4m6ZrLswIPvPiQu1KPgScO66%2FHHYZ3Q9bJ6w%2FOCKdZ%2Br2RlybrxjF4TXv5xSVriy9YVYqyWxSGWv32A4xMgYfFfpF6NLK%2FsOXkjc%2FPBRLCHjUtxh45pgApNGzzVTiol5%2Fxoypo3SSi1LBPastZZsgL4nUDvicm%2FLgZVHjzSRKClcmmJUgy7fbqb2Q9JB7JRG1G2W3ZJKyt4Wi%2F&X-Amz-Signature=3f78a30220866c8ef215183ae0a2d6d3d93a7458b878850efe5f2d0a275088b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYVQHGE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE%2FlRJGkjVc0OuPNy8F4r3HrZTaFuYo6dThjRqXDpU4AiEA0BHEUKdJZWHvlDTed4mUPAJaYf7XVoPk8GH2AYu0CUoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjVgkrgVSujeELNXircA6KldZdQ%2BMrVEqftcqRcHKHRb3QlHY9AlOW8XtDhMLPHSfck5x3uG5%2BzQ5dxqCfrF3ma0zGeY%2Fd%2FIe2AuqeNULNtregETDQ%2BWmR1x4CH1lcs1o5EeXhdjmajpnyAvBAvW5jVx6XXl6gIfKQUso4Zw6w4KZMsarnnTJCWuYRGwBxYGNpuWhkr0Ibn9Y9NfpggyAdfRXsFvqKCtshvp7FlY0%2BCVVCnlAMkmMetsyVSklPd4CGH7hwOpd8%2B4faB7GYEl42eeQ2rBDefxz7yD0wBQT4GL2ibOrEaJgYCitgKOkfrFVr5JBNreWO2oTXSQrVWliUw920TK7O362j9GE7OVyCPKWGRX3F5UKiBL7ZBzYxI0Ixg3UpxT46Z871obp%2Fds3AER473FVSr5prmEoRG94GJ7Ks3rK0RBZpGvwhIyc9DuUOYVvy5dYAR%2FaN6NgJcXYluEPgBgbwfqfW14Jy3s%2FmI0%2FpSIVHHP%2B1edVLyPu9tX21Tep1nMqljwY3cpgdLJOVqaowtZRlYvN8T9F6Ot4CE%2Fq7iC%2F4aayjMx4q23HELvubGaPeqWNEnr18vu9AimUxLIK2Az1mXLSbMG7cnyQ7VQHU5%2FNA2SH3ymGZZgM%2BTDC85VA7zaeCIpARdMK3%2F9MMGOqUBd4jUKc2kVW4l0q4m6ZrLswIPvPiQu1KPgScO66%2FHHYZ3Q9bJ6w%2FOCKdZ%2Br2RlybrxjF4TXv5xSVriy9YVYqyWxSGWv32A4xMgYfFfpF6NLK%2FsOXkjc%2FPBRLCHjUtxh45pgApNGzzVTiol5%2Fxoypo3SSi1LBPastZZsgL4nUDvicm%2FLgZVHjzSRKClcmmJUgy7fbqb2Q9JB7JRG1G2W3ZJKyt4Wi%2F&X-Amz-Signature=d7bdfd3dee31cda20ffdfe1abac64833210bb6ca0d8cafa1678fa6760256a226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYVQHGE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE%2FlRJGkjVc0OuPNy8F4r3HrZTaFuYo6dThjRqXDpU4AiEA0BHEUKdJZWHvlDTed4mUPAJaYf7XVoPk8GH2AYu0CUoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjVgkrgVSujeELNXircA6KldZdQ%2BMrVEqftcqRcHKHRb3QlHY9AlOW8XtDhMLPHSfck5x3uG5%2BzQ5dxqCfrF3ma0zGeY%2Fd%2FIe2AuqeNULNtregETDQ%2BWmR1x4CH1lcs1o5EeXhdjmajpnyAvBAvW5jVx6XXl6gIfKQUso4Zw6w4KZMsarnnTJCWuYRGwBxYGNpuWhkr0Ibn9Y9NfpggyAdfRXsFvqKCtshvp7FlY0%2BCVVCnlAMkmMetsyVSklPd4CGH7hwOpd8%2B4faB7GYEl42eeQ2rBDefxz7yD0wBQT4GL2ibOrEaJgYCitgKOkfrFVr5JBNreWO2oTXSQrVWliUw920TK7O362j9GE7OVyCPKWGRX3F5UKiBL7ZBzYxI0Ixg3UpxT46Z871obp%2Fds3AER473FVSr5prmEoRG94GJ7Ks3rK0RBZpGvwhIyc9DuUOYVvy5dYAR%2FaN6NgJcXYluEPgBgbwfqfW14Jy3s%2FmI0%2FpSIVHHP%2B1edVLyPu9tX21Tep1nMqljwY3cpgdLJOVqaowtZRlYvN8T9F6Ot4CE%2Fq7iC%2F4aayjMx4q23HELvubGaPeqWNEnr18vu9AimUxLIK2Az1mXLSbMG7cnyQ7VQHU5%2FNA2SH3ymGZZgM%2BTDC85VA7zaeCIpARdMK3%2F9MMGOqUBd4jUKc2kVW4l0q4m6ZrLswIPvPiQu1KPgScO66%2FHHYZ3Q9bJ6w%2FOCKdZ%2Br2RlybrxjF4TXv5xSVriy9YVYqyWxSGWv32A4xMgYfFfpF6NLK%2FsOXkjc%2FPBRLCHjUtxh45pgApNGzzVTiol5%2Fxoypo3SSi1LBPastZZsgL4nUDvicm%2FLgZVHjzSRKClcmmJUgy7fbqb2Q9JB7JRG1G2W3ZJKyt4Wi%2F&X-Amz-Signature=1eec70cce75d5288a8177cbc3d9c7a6c23ed35ad314670cc010f0bc58b17813c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3ALDRJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU5%2FNP6VvVOBiv%2FE2Vk9pmjRqG98d2j7jI3aL2FLJPpQIhAL9YjQjO2zKD8PSvsxkoABX7O1dkfgt187E7dcmOG6WuKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjxRbT%2FWjw2h57m6wq3AOitTQ0x8nm6F89suQHnMYdghiUKMz0tXBnLM2VF%2BlLp45RcYMZHo2OQHeuCRI78yJo0GTdfRgRLooF2LEFjyXRhf320j2F%2BGjDCUq%2B5B69TfeYIqNV9MCYgMpd54VeTHEYT%2FF8X3QKfoEUeb1FyCBYB69OTZbqcvQCdyyHAbuU2ZhREzzoyEBeDXedXxl3O83%2FyALaexFCSb5KADtYQxEdppOuO4eYDP%2FLYlTeLkFjL2smsEHp6gxuQG0Cy4XDacSBt5X%2BwOZq1KlNLyOXnYtuABWpw%2FIKElsnbWDTnLdvxiq%2Fa39BC9aI9y53TkLHtAYNubjNsJlTE52H1Lul4rk8RMgfmd9oTc4gaplAEcJDsZQ96PqX6dYvBl7UwpZDYMJSISIrJLpQmBzIJt3bBm3d2WbFPsKIFOJNJlgR9ro6U8cAU84hKckkNsMU9jK3Hdk0uM%2BCHGmB2xEShbSdvEw2%2F%2BRCwOmFHnNdT%2B8%2BTgsjbBeCiAzTAfJqv8LBo%2FVODVW%2BnjgvGOfz5HyoFVwiAh%2BXUTjyIDFnIl%2FlxmLaslsHUWL1lZW0WRzd396Yl2zpCt3CZgRRHt8ruzcoy9JHY1dEZGS0LLxMlJo0JwnQBk%2B%2BddcuNXDm2wA%2FsHQHLTCt%2F%2FTDBjqkAcTRC5GE3LizBObjpRfk5T%2FVeI%2BBNR%2BBF45MsPwcyjfyKG647gEnl3RYezQNO2TlyF759SvyOThu1RTpkzBVeozgdyTVW7ysDcr4Gj0x%2BWMTE42%2F7LfKyQK2C8uuYGLhB1DYuQ4aDdzDX0sL%2Fmzl%2FglJZOjS36wFajUekSZKBw2h3h2hr364I4Ep4nuRG1tf3yQ14NpiS8OyIfupSVnd%2BrSYRRqR&X-Amz-Signature=cfc9b76a36a443c4bdd1e241bbd1d29cd06e4e8fb10667f7d06ab5e127e7ee72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGGIEBCV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS%2BbFETgGmzYot1D6fOMUmnn9JaIzJifBuNwDzHROZcAiEAr8ce3l7yRKcmrlcxZMMIoGVyOZPf9ClEqAsS%2BVQF1gQqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgp9n8GwCZRMXpSircAyukyRjjsF8v1qXiv5gnFgUMyZPuazvUY9elm2wZLU2gDvvGv%2F180blVVLViQa8o%2BbXzeGOUXy0bTSJfVEvxtNCm6juw%2BKnNEgJkMriQSDHXw2WiBeLAIvn34A0cSUIffs182VOPRAvztLXWaY3ZiqxiQvTXoMk5uf%2Fah18D5um47Ht5XFU6p7ndkuAyflj7GPma1EIgxqJrvyg6XBGj8KweW1cuWI5uYMNGYhnofS9aGohzhUnJNa77dsZi9Ng8BphFAhnNGZEohKdg6Xyi3eW0UxlhG8j7EDVaWCqVQD5I%2FubWKc7y3d6uZk03P87MSnDdYckBVkPGJSs0BFiirdYFIDjSFk7jtq%2FSC2qJZLqjCITd4sv2dyAlVoISuBP0AXCXhgNVRmG4eo4cVhB8xnco5pToS5qQkTolkstDs5jOli8txVMpmPTBy8y%2BjtmVsocYDpEVNRxvuWSZg4NeVZMt%2F8fo4Jw3bu1wubPW5y4X9iYO%2BfNuJ4ToqgpMXZU1ZK4b4EqZrR96ezS3CWwnaHgBKmO6utMWg6oVUAVQ3%2Brue2jBjE3GM%2F4hQsTBSVUY%2BM4m5RXx2n%2F2eVdCDRN52fxd0YH0j04jWrNqs9aOUz4E%2F272qs6g9uLoTGIlMN2P9sMGOqUB%2FNRlsWCLydcEo1BYbqwUKvEXqWmKniVQwTHVfT7WQ1kfDByvdir7rEhAKwAy%2FKkEOU9yBteZJp6xXO5j3XshMS%2FOwyHa2T3Z7lL0T%2FR4fC3sddEds25IW8%2FX%2Ffpdxv2WdlKPqtmrYSqqhrwVTB716GnWOe8eAfHYeGm6vThN%2B62V69MjZkM5e0ZS2FxYaXJlRlXi9mooB6wdsH%2BDRjlninF%2FhQ9T&X-Amz-Signature=5757f6840f671a6a75875c4b921cfbc506d683a4b2ead36fa299bc1eab680670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYVQHGE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE%2FlRJGkjVc0OuPNy8F4r3HrZTaFuYo6dThjRqXDpU4AiEA0BHEUKdJZWHvlDTed4mUPAJaYf7XVoPk8GH2AYu0CUoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjVgkrgVSujeELNXircA6KldZdQ%2BMrVEqftcqRcHKHRb3QlHY9AlOW8XtDhMLPHSfck5x3uG5%2BzQ5dxqCfrF3ma0zGeY%2Fd%2FIe2AuqeNULNtregETDQ%2BWmR1x4CH1lcs1o5EeXhdjmajpnyAvBAvW5jVx6XXl6gIfKQUso4Zw6w4KZMsarnnTJCWuYRGwBxYGNpuWhkr0Ibn9Y9NfpggyAdfRXsFvqKCtshvp7FlY0%2BCVVCnlAMkmMetsyVSklPd4CGH7hwOpd8%2B4faB7GYEl42eeQ2rBDefxz7yD0wBQT4GL2ibOrEaJgYCitgKOkfrFVr5JBNreWO2oTXSQrVWliUw920TK7O362j9GE7OVyCPKWGRX3F5UKiBL7ZBzYxI0Ixg3UpxT46Z871obp%2Fds3AER473FVSr5prmEoRG94GJ7Ks3rK0RBZpGvwhIyc9DuUOYVvy5dYAR%2FaN6NgJcXYluEPgBgbwfqfW14Jy3s%2FmI0%2FpSIVHHP%2B1edVLyPu9tX21Tep1nMqljwY3cpgdLJOVqaowtZRlYvN8T9F6Ot4CE%2Fq7iC%2F4aayjMx4q23HELvubGaPeqWNEnr18vu9AimUxLIK2Az1mXLSbMG7cnyQ7VQHU5%2FNA2SH3ymGZZgM%2BTDC85VA7zaeCIpARdMK3%2F9MMGOqUBd4jUKc2kVW4l0q4m6ZrLswIPvPiQu1KPgScO66%2FHHYZ3Q9bJ6w%2FOCKdZ%2Br2RlybrxjF4TXv5xSVriy9YVYqyWxSGWv32A4xMgYfFfpF6NLK%2FsOXkjc%2FPBRLCHjUtxh45pgApNGzzVTiol5%2Fxoypo3SSi1LBPastZZsgL4nUDvicm%2FLgZVHjzSRKClcmmJUgy7fbqb2Q9JB7JRG1G2W3ZJKyt4Wi%2F&X-Amz-Signature=df887ee68bfda4d4a155f49646e34ff76b326c6926fc0f41c1cac117c175e516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
