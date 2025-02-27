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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLH645K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDOpBbxahcDDW8TU2OpTHfe%2FD%2FMxpIgXOyk0sF3%2BKUjYQIgedHGYSY97kgS2fiKel7LpbHvPpakHoYYrpNSs71v7dkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFG2%2BN7eN8TDEPmiQircA%2B7gojK5fCq4F2rzZGRpwuXTgYTVH9i%2FzIeO%2FMiPL9fwV8oHxkzZchcz3sAi5djDD43C29yLEtcEDojWOVK0wX2aV7X17SbFUAKTDd%2FkykQtTH9sGk9Tqz7xQF6CAtKMKBfY7GBLWzbLSV7G9LxGjxwfCTbtceRwIFWHwJI3JKoJEwyOjIzy4L%2FUwkDlDuxwsjR%2BfMmtb8ee7YaBXCER%2Bl%2BpfHz3bZ5RwdzS6AtDxMK7WR%2FekXMXM5WuD41Ixi5Um%2B9ILJOOeJgcOetBzywj9Nc6kNxu%2FNMMLqZNONICnIexJa8V77sC83FWwaHV3CTJ5f%2BfxKkgI1tKCBCjss3nmtAPOCxjMdoJ3L4XsRGJfaVsRQ7tHNh%2FafGVOJTWwC%2FkNl7xxFVVATAHuCJoB%2FnSJMSObZJ9PUqzkF8hse%2FRCPmuYuVOXCkoI3DnpWUK1Z9eaRgOzQsbAT12mCsFyr093LMv0RVikWmtq4id9gx6GyK%2FljZq1%2FCWgRCZT850B88Mu1BOmATcVtl2%2FXPunJgZUdQEzJI5uDVR%2Bbyiojhpu0y3632BR6DDTa4ZHAPi2yZy%2FDVOIO8DZfIW8u4WkrE6ivvqwa29VLjR9ua0hT9xsr1jfvII0kWDjY3HeDL9MNm0gr4GOqUBloBAbgiHE95YkFTiSQJegqdseDgc3WJu%2B8G0aZCbJdhi8tiLlHMZLagNJXsxeBaZ5SW1nbrPHi%2BBLdKHW%2B%2B2cSpFUNBjLzSH6qsNjBwEayFRHiznTVhu5Hb0WKsLjeVQty775fc7gXpCpOMNk3%2BSGNC6PPyOT%2FgtraR1DwpycCiCXL1TkrzgsQu4MiU3naLx4s17r%2BpOnuQUlrMLkbx74lo2ied%2F&X-Amz-Signature=0294d8bc7d49898f3ce288ccafef9bae38278f69848c2cee4bea8e9fef014cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLH645K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDOpBbxahcDDW8TU2OpTHfe%2FD%2FMxpIgXOyk0sF3%2BKUjYQIgedHGYSY97kgS2fiKel7LpbHvPpakHoYYrpNSs71v7dkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFG2%2BN7eN8TDEPmiQircA%2B7gojK5fCq4F2rzZGRpwuXTgYTVH9i%2FzIeO%2FMiPL9fwV8oHxkzZchcz3sAi5djDD43C29yLEtcEDojWOVK0wX2aV7X17SbFUAKTDd%2FkykQtTH9sGk9Tqz7xQF6CAtKMKBfY7GBLWzbLSV7G9LxGjxwfCTbtceRwIFWHwJI3JKoJEwyOjIzy4L%2FUwkDlDuxwsjR%2BfMmtb8ee7YaBXCER%2Bl%2BpfHz3bZ5RwdzS6AtDxMK7WR%2FekXMXM5WuD41Ixi5Um%2B9ILJOOeJgcOetBzywj9Nc6kNxu%2FNMMLqZNONICnIexJa8V77sC83FWwaHV3CTJ5f%2BfxKkgI1tKCBCjss3nmtAPOCxjMdoJ3L4XsRGJfaVsRQ7tHNh%2FafGVOJTWwC%2FkNl7xxFVVATAHuCJoB%2FnSJMSObZJ9PUqzkF8hse%2FRCPmuYuVOXCkoI3DnpWUK1Z9eaRgOzQsbAT12mCsFyr093LMv0RVikWmtq4id9gx6GyK%2FljZq1%2FCWgRCZT850B88Mu1BOmATcVtl2%2FXPunJgZUdQEzJI5uDVR%2Bbyiojhpu0y3632BR6DDTa4ZHAPi2yZy%2FDVOIO8DZfIW8u4WkrE6ivvqwa29VLjR9ua0hT9xsr1jfvII0kWDjY3HeDL9MNm0gr4GOqUBloBAbgiHE95YkFTiSQJegqdseDgc3WJu%2B8G0aZCbJdhi8tiLlHMZLagNJXsxeBaZ5SW1nbrPHi%2BBLdKHW%2B%2B2cSpFUNBjLzSH6qsNjBwEayFRHiznTVhu5Hb0WKsLjeVQty775fc7gXpCpOMNk3%2BSGNC6PPyOT%2FgtraR1DwpycCiCXL1TkrzgsQu4MiU3naLx4s17r%2BpOnuQUlrMLkbx74lo2ied%2F&X-Amz-Signature=04c5c7982c55799ee93acd70a0a334d94ac8af8bd83348934ef0a783f99877e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVYVLT7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDD8Qa8xLgp16%2B653f7jFNScfzxDC5EKxgXhxpbOkvyrgIgZ%2FyXioml9dHVLGMuXS2Hn8%2FIiRZ7SPMk%2F7IiUmeS3zkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAHVAkPX6WLgwPLuLCrcA0Gw%2Bos8SMa76V2Ya6Xu3PQ8cOXxD7evekixeX1F9wvQqj4T5cC4CrRB7A2KkDOAWngW5%2BlmcvaN9SyB2%2FY8hlHFD5g%2BfBTZnrwYNYMhCUf8bSc6goTFLHN2ZHOOkKAgbE9bPN9Zjz5tn0Eq%2B6LFQM5SRKKnsTT5DxhRqFyM%2FyeV4JoBGkkRkNV8dto%2BgcBPsYo8kVDSN39Sx7cnu84eFY0HbIqI6aSGFAKUNnz9ywF7z6taqrvRcjFojrbN6tfSGqKPz1jc8QAUuAcxySTRu4LOAauDlUGB12mHAHqOH9vEuG3c2QXorHdYnPbFAf2mkwLppEBSWMCCVFuMKlweThwIc3gvnCAdLjp0YIJCLKkq7kOPEmRpbq1u5UBUUXBb4Mblfu7QUktd1GZWEzAXrGYM4t8BRmmFeMOdftYd2EQgdaz46unmkxpPlFm%2B1G%2FsPUtnC7WpnEy2Zan47MmQIq2xr5hU0ORiyYQW9z39yjNsK%2BW4H5MKnwVzmG%2B7%2FXiDvf9PVcIlKlvvj62uNHiEVqUoBf4iAT8%2FBNG7%2BBQZKJKlijCWUZ6YJlnwRLpu9aiWIwUZFlK9ceqBoX9AV%2FSKA12MyB0WP8idKeGLiAywSPriuzsmRZliD7%2FQf3b7MKezgr4GOqUBZRuKWZHeT5tHhikoAvvfZAM5D1rNM92hzesJyImcoI3nnVAhzqlSQsjiFG9ZN9n8Lyl815L31I9As5wWOXYlFDFahMrFEDwIR2A6UabMhotcS7Um%2BPbAI2unzTlBSNf1jTwhq7uuPOhxyoATAwqWOEs1t1YjBA4uOlpl8HkiMP7yTR2cQ5FbWTotZLmGOddXcOc6JnkGYViJid2lQGzEKz8oLqkj&X-Amz-Signature=55023c59394417e626d152989f5bf8ec81d9be59f43703adff12d7fcd50793a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD3OE5E%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCT%2BHM5vkD3POOBEUgWZZwgimf4P8pD83t4K%2FeKq4AZdwIhAIFX3XaWvtp141IDvqfNS%2B6Ss7K2K2IoysVzbmd6HV8YKv8DCHoQABoMNjM3NDIzMTgzODA1IgwFzY3ILsTQ1CH6Yk0q3APSRfVNjdpS3csNyc%2BuXsDuyb0n9%2FgGU0HL5iiwNKGQ1ahh%2B8NpOgHXBSnozmMGXnqWEATO5T4s0gnlrUG8RhlORKJLwkRBZpgTdZ%2B0OT1kLT4Z4tUf43feTG%2FYTh80qZtoIPaUXF1ep3mXIDsUtR1x1qDBE7bOJ8py0pFiphnk%2FqnKKu9nMyIVt9ZILeUIncmcivlgKTxXTB9XT%2FPwaZtppQjGudaQL4nJcsoOBsXpVSe55kh1V%2BzLJ8F8kLArQUib%2FXBODRmfSIM84hPKhlVe4CC7A43FTKt5t6dPvggLsrAdnrLUBNXtloUo3CVbxXjEx78Pp0yOzqrvF%2FQ0hYtJQTYfNXdQ7bk8rdIWJMMjFwhMI9yvKZqynjh%2FlRmaxc5%2BKRWW4NbupL3u9fEnnneWanKS00kbBflCm%2BEymUcPjLUAJCCwDzOoQ4XBWjp6rBPGvccUKjNE7FZcmp5CclmwDmIS8WQ%2Bf9sSJ4ZkIqmAGWiKzEEh9AwDZtjN6IXygpSQghyfHtnlS1Fmokekne6ZK1TpKw%2BVZMyDgFz5zjSdhTMNDLp%2F4WhrhmNfgUhXPBcLlPXuI3n9yUx5VuFF5E%2BrmtptSDAXTqJJ6VcrLG1x86%2FR9bQccbiCIh5WTjC2tIK%2BBjqkAShLg8fZqNyf4oWS%2BLR4CoZo6s2fI79I121KiK1XbIIrl8iPZlavpUld%2FCCwqIitpkZBDdMavPvA8hk%2FL%2F6V3Nq9rh0xtPAVJRR4YOVyEPQ7nlcJxoVKjer3mlcXubufqDPVJZL4ZXbQycHXZSdY1dzxNFOKmxQxN5jaKc%2B4R17u%2FU30AdTby%2F4kOuLzGU03vwwqKnKJtAsR%2FsYk6yKePB6mqr6U&X-Amz-Signature=6f4e5e420a79e533cc0dc31912ee9c8924647597165f16f38c507358e72890bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XLH645K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDOpBbxahcDDW8TU2OpTHfe%2FD%2FMxpIgXOyk0sF3%2BKUjYQIgedHGYSY97kgS2fiKel7LpbHvPpakHoYYrpNSs71v7dkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFG2%2BN7eN8TDEPmiQircA%2B7gojK5fCq4F2rzZGRpwuXTgYTVH9i%2FzIeO%2FMiPL9fwV8oHxkzZchcz3sAi5djDD43C29yLEtcEDojWOVK0wX2aV7X17SbFUAKTDd%2FkykQtTH9sGk9Tqz7xQF6CAtKMKBfY7GBLWzbLSV7G9LxGjxwfCTbtceRwIFWHwJI3JKoJEwyOjIzy4L%2FUwkDlDuxwsjR%2BfMmtb8ee7YaBXCER%2Bl%2BpfHz3bZ5RwdzS6AtDxMK7WR%2FekXMXM5WuD41Ixi5Um%2B9ILJOOeJgcOetBzywj9Nc6kNxu%2FNMMLqZNONICnIexJa8V77sC83FWwaHV3CTJ5f%2BfxKkgI1tKCBCjss3nmtAPOCxjMdoJ3L4XsRGJfaVsRQ7tHNh%2FafGVOJTWwC%2FkNl7xxFVVATAHuCJoB%2FnSJMSObZJ9PUqzkF8hse%2FRCPmuYuVOXCkoI3DnpWUK1Z9eaRgOzQsbAT12mCsFyr093LMv0RVikWmtq4id9gx6GyK%2FljZq1%2FCWgRCZT850B88Mu1BOmATcVtl2%2FXPunJgZUdQEzJI5uDVR%2Bbyiojhpu0y3632BR6DDTa4ZHAPi2yZy%2FDVOIO8DZfIW8u4WkrE6ivvqwa29VLjR9ua0hT9xsr1jfvII0kWDjY3HeDL9MNm0gr4GOqUBloBAbgiHE95YkFTiSQJegqdseDgc3WJu%2B8G0aZCbJdhi8tiLlHMZLagNJXsxeBaZ5SW1nbrPHi%2BBLdKHW%2B%2B2cSpFUNBjLzSH6qsNjBwEayFRHiznTVhu5Hb0WKsLjeVQty775fc7gXpCpOMNk3%2BSGNC6PPyOT%2FgtraR1DwpycCiCXL1TkrzgsQu4MiU3naLx4s17r%2BpOnuQUlrMLkbx74lo2ied%2F&X-Amz-Signature=36d74b9d9b00928c5730f026b9db97953bc34e3046f0c29d9f3f1bacff5b0352&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
