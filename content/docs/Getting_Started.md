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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVDS2KY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEfPiks6Y%2F9IRWL6s%2FpMqDKDsu%2FeSPRFG3PoXKbIPdtCAiBI%2BBeW3ccqTJBq6WOpp4sSgdApEg3Jb7pPXboSShHj8iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMscIb6MvM%2BYXPiSJkKtwDrfDppcCEuq9mSoHMTaO802hCTy434UokEQl9tU34t%2FprlcnVx2mta%2B2TO9K7XRdYeIFXgr9k%2B7wHo0FNBpNR1GtjhFnSN2JVIQLqD9HuODS0oxUqFgMBpuZg3uq%2F8F4YWxR65SY5XEDwFW%2FZsI6pTthtSD1h6wCVGuAEtvailZ%2BIj9PWrtLMbPam33%2Fpx375luijIym4icl15RbQQIc0MWMc6M124u6HG9ZYu54E7UEO5MLtJdfSHPLTDwlz3re%2BSe0rExwc0XZT15XblNkqRKf%2BwBytbMULEq%2FOUzKbrS%2BS38Uuq3bazDGuekgn3wTUjfh2l6SSyXUIblfEmr4eiaFXe%2FOVw1G0Lv3%2FOsExmsTFe5DAzdDExiaWbWCxNPRmnEV3od72Z%2B447%2BZCkwK0JCsUvWG0GS20qT8oBaSiv2LHzNkTBn7txi1b6nISymeaNooEemElYJ9O5UUJh49ymR7SChsvgI6M%2FvkzRkvWyypuYOZqHv36roYEt%2FNBEazbwK%2BjPWB00VvpjpM%2BCxwjoQ5IfOIKleBgDP%2Fq61nyBO3nsnBtSe8UVSg%2FUioR9mxXH%2BCCl0ifikPyyOj857gF%2FlmbTFMqroQkK3VUucnz7oyuKtzUsOq%2BM6PTK5wwiOiGwQY6pgH0o%2FcUU225%2Fcfnh%2Bgq1zSdsul2hdHkQCzs6RAX5WAqippInySfZorNAt%2FrwZeGf%2BLx%2Br2v40ZugcKwdaUr%2F40YqVnuiHIrvackDz3c0l4ZhI5fxpUhJRXg8%2BK4B02glOjwvInK1xllhzRSzPNar4f%2BkGqNBAF6WEA73%2F2yJEjS314VUigoLHCo8srZq3O%2FuH7xunX9WzJ5xtMtr8ycbs4TvszWKni9&X-Amz-Signature=7e8e3fdda5be1f0760023a1c9f09cb122b6100f72c3b4732a89554739270767d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVDS2KY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEfPiks6Y%2F9IRWL6s%2FpMqDKDsu%2FeSPRFG3PoXKbIPdtCAiBI%2BBeW3ccqTJBq6WOpp4sSgdApEg3Jb7pPXboSShHj8iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMscIb6MvM%2BYXPiSJkKtwDrfDppcCEuq9mSoHMTaO802hCTy434UokEQl9tU34t%2FprlcnVx2mta%2B2TO9K7XRdYeIFXgr9k%2B7wHo0FNBpNR1GtjhFnSN2JVIQLqD9HuODS0oxUqFgMBpuZg3uq%2F8F4YWxR65SY5XEDwFW%2FZsI6pTthtSD1h6wCVGuAEtvailZ%2BIj9PWrtLMbPam33%2Fpx375luijIym4icl15RbQQIc0MWMc6M124u6HG9ZYu54E7UEO5MLtJdfSHPLTDwlz3re%2BSe0rExwc0XZT15XblNkqRKf%2BwBytbMULEq%2FOUzKbrS%2BS38Uuq3bazDGuekgn3wTUjfh2l6SSyXUIblfEmr4eiaFXe%2FOVw1G0Lv3%2FOsExmsTFe5DAzdDExiaWbWCxNPRmnEV3od72Z%2B447%2BZCkwK0JCsUvWG0GS20qT8oBaSiv2LHzNkTBn7txi1b6nISymeaNooEemElYJ9O5UUJh49ymR7SChsvgI6M%2FvkzRkvWyypuYOZqHv36roYEt%2FNBEazbwK%2BjPWB00VvpjpM%2BCxwjoQ5IfOIKleBgDP%2Fq61nyBO3nsnBtSe8UVSg%2FUioR9mxXH%2BCCl0ifikPyyOj857gF%2FlmbTFMqroQkK3VUucnz7oyuKtzUsOq%2BM6PTK5wwiOiGwQY6pgH0o%2FcUU225%2Fcfnh%2Bgq1zSdsul2hdHkQCzs6RAX5WAqippInySfZorNAt%2FrwZeGf%2BLx%2Br2v40ZugcKwdaUr%2F40YqVnuiHIrvackDz3c0l4ZhI5fxpUhJRXg8%2BK4B02glOjwvInK1xllhzRSzPNar4f%2BkGqNBAF6WEA73%2F2yJEjS314VUigoLHCo8srZq3O%2FuH7xunX9WzJ5xtMtr8ycbs4TvszWKni9&X-Amz-Signature=f0b4ad15055381024a19699b8008cf97a2153744489603ad4d6fe8969f36407f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVDS2KY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEfPiks6Y%2F9IRWL6s%2FpMqDKDsu%2FeSPRFG3PoXKbIPdtCAiBI%2BBeW3ccqTJBq6WOpp4sSgdApEg3Jb7pPXboSShHj8iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMscIb6MvM%2BYXPiSJkKtwDrfDppcCEuq9mSoHMTaO802hCTy434UokEQl9tU34t%2FprlcnVx2mta%2B2TO9K7XRdYeIFXgr9k%2B7wHo0FNBpNR1GtjhFnSN2JVIQLqD9HuODS0oxUqFgMBpuZg3uq%2F8F4YWxR65SY5XEDwFW%2FZsI6pTthtSD1h6wCVGuAEtvailZ%2BIj9PWrtLMbPam33%2Fpx375luijIym4icl15RbQQIc0MWMc6M124u6HG9ZYu54E7UEO5MLtJdfSHPLTDwlz3re%2BSe0rExwc0XZT15XblNkqRKf%2BwBytbMULEq%2FOUzKbrS%2BS38Uuq3bazDGuekgn3wTUjfh2l6SSyXUIblfEmr4eiaFXe%2FOVw1G0Lv3%2FOsExmsTFe5DAzdDExiaWbWCxNPRmnEV3od72Z%2B447%2BZCkwK0JCsUvWG0GS20qT8oBaSiv2LHzNkTBn7txi1b6nISymeaNooEemElYJ9O5UUJh49ymR7SChsvgI6M%2FvkzRkvWyypuYOZqHv36roYEt%2FNBEazbwK%2BjPWB00VvpjpM%2BCxwjoQ5IfOIKleBgDP%2Fq61nyBO3nsnBtSe8UVSg%2FUioR9mxXH%2BCCl0ifikPyyOj857gF%2FlmbTFMqroQkK3VUucnz7oyuKtzUsOq%2BM6PTK5wwiOiGwQY6pgH0o%2FcUU225%2Fcfnh%2Bgq1zSdsul2hdHkQCzs6RAX5WAqippInySfZorNAt%2FrwZeGf%2BLx%2Br2v40ZugcKwdaUr%2F40YqVnuiHIrvackDz3c0l4ZhI5fxpUhJRXg8%2BK4B02glOjwvInK1xllhzRSzPNar4f%2BkGqNBAF6WEA73%2F2yJEjS314VUigoLHCo8srZq3O%2FuH7xunX9WzJ5xtMtr8ycbs4TvszWKni9&X-Amz-Signature=e6ac2d9ac9f93a64257e05011692caaaec24c62db084cdc9af5dc6d17d3db468&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5UL7LAV%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIF4nt7TbsNfOx%2BrNexQjuHDK5MKHb2rD7f%2FZjM7p82ZVAiBgqhIiONSrRSAXJ4vG3C8Kfsvcf3tGYzFkrqVNh0A8MiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwY%2B4%2BWXr1UQF%2B%2BuGKtwD6dxk4zIRwEZRL1SBsvPRWC583K%2F8Nb%2FFkGnYlHEI4fvUgud4N1MLYz33X98HY%2FH0Y7NXrkhi0GeN5oYipMb%2FJNrTsvqKo6vtTcr%2F7yXDKos%2B6pUenuR0LyT%2FcsHv5LNSKPqc4KmIraCavVpuGDOC81MBOhu6rR1BLreM5oH1R0BJKVmZ6mWJIB0VzproI%2BRJaMZj1fk2xiByWDgl1GdLJdOiqtQbR5bmvcnBVcqIaROnA80%2BicMH2blcwofsgcI2ozeqFTAzeew%2FkFAvDH7xlmG4laijAuYDXlDRBU5hSG2VKkNa9zOaBn5dEQz3jcCCibxKcpgtUEVlst6uk3HvJY1fgSozyIK1CVqblgHLFxUb4ZlI4OJVEzuwS76ScNojus2cqw5sMrsUkjKDDPWJ1QJodY8jEI06QDlWgHZBbKkT5RfSO%2FBtvZiPDCd9E51DNYAcDTjuaJc%2FUuITpzPB2JSJQowxEQyEcKlsLxjZAyS%2B7vpfu5C1edAfYEcZh8c2%2FA7wb4NoLTCJNEEkG3TA%2Blwi2zL2qi6nEwJ7hOJtlWNqy%2B8zN3Lkj8nUr%2FUJnDBvfRQnD3gypJJOYmSPVnkOhA5%2FvLm9pCPX%2Bi9bFiEELVy8eYWsRYZStK3ajNcw1OiGwQY6pgH67my9lChkiM2znnKoxDeQLxd7CBFolIpFSU%2BKntydPOphXbdzON8hM31s9BqoMBNR%2BpDej2gXEg8do7Zyp2fzhuCZrHD62nnIXu0paRF9sT5LP0ytR1KcyxANp9lzctRNBaT1b6uy2khVIzzTKd9N157siQ%2F5QRtYY7f0M7NGuCaTDB2qw9R7wOzpcILxFuGFsvq%2BW2OXRMWok116ugnfY8otrDhf&X-Amz-Signature=a3cbed96cf6a3e61059e2a0ce5a036ffe564b922804a13f9a7defd51244526e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKE2OTIF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHdxITCuR0W21mUD8XUUxHX6%2F%2FnOrPO5apWnnFFkqHBNAiB%2FzHzryQw%2BOKSmjg6n9ylIcDmhvNXlXnxSNVXyzoYkRiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsZyePK8BvoAT52riKtwDmASNQDY8%2FM5XPVbJa%2FwmF4EmJrIBLJ25xzpJJUGbE1oRrDjM78QHGnV4rEz%2FAQOvE2ygzY66EystWq%2FiWbPp7VU6liq4v9M0uMfZU9yWpjGgiwlJoFtWqWj4hK22SMC4L71gOFm6FDJSUVT6Lk8yx2zETTsljukhJJUxxnC4YqTJ4lSS%2BifWUabtTdVmdOjtWMTc4fRh32nurLF8Cek6VLjUXDjUR0K5LBKzB6lVTIyx1rn6Pm4xD5k0EEOwoU2ZPeeVrC8Ou1o%2FAkagKZTEo%2BQDHqI2uMkritkx3koK1ywfD9bgHviEdFJYO4Legq2w1ytLfSUrZvHsUqrFsBLefImLhvAsrDlceOq5zlFQrSY8KqAwrCZGhnSrAhi8aUxJOwvq5k1GxOMj97aQxYoSZl8zUSo9Qd0B2fx%2Bps901P7yhnJPtn0QUnaNeMKy2kSwKURjWSJBSW5js22Q4s6%2F4jkADigjfzhgYkP312oYoWZ%2FwwMB9ca2eXSnvbuOGZqxL2vt8ODIu9hUvDaG9zlDQL7deJZRV9eK96uEX85r85qTW38RoqnpPNtuBPodc4oHFC9rfGaRDv%2FiLNHmLeys%2FNKRZ6QAm4vmJqo85Q%2BPAYF6TwD81SUoY9PJxlkwvuiGwQY6pgFs9sFoW2JZAgJ9KisQNUPUd4S%2FkbDpMKLuNGfp9ZDULlsnj3VYzxprq5ALjNREmtiQ2azLg0qm5omMmPawATVe8ABs2GWvJh04WIhVKY0j7eiW2LxXARYZCKjvzKCfGiQaKcGwKvCPgNNcvJ%2BYdk%2Fv0S0NCA%2BPAYbzAGbKudSqLRTHsRjLDITGozJxrim7xzZS2dNfgRaFzLLqI047%2FGRtHiJyfL1Y&X-Amz-Signature=a2994c1f3ad940bb613da2e0694f308935373b1f1123641c500ce73fc6e18f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVDS2KY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEfPiks6Y%2F9IRWL6s%2FpMqDKDsu%2FeSPRFG3PoXKbIPdtCAiBI%2BBeW3ccqTJBq6WOpp4sSgdApEg3Jb7pPXboSShHj8iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMscIb6MvM%2BYXPiSJkKtwDrfDppcCEuq9mSoHMTaO802hCTy434UokEQl9tU34t%2FprlcnVx2mta%2B2TO9K7XRdYeIFXgr9k%2B7wHo0FNBpNR1GtjhFnSN2JVIQLqD9HuODS0oxUqFgMBpuZg3uq%2F8F4YWxR65SY5XEDwFW%2FZsI6pTthtSD1h6wCVGuAEtvailZ%2BIj9PWrtLMbPam33%2Fpx375luijIym4icl15RbQQIc0MWMc6M124u6HG9ZYu54E7UEO5MLtJdfSHPLTDwlz3re%2BSe0rExwc0XZT15XblNkqRKf%2BwBytbMULEq%2FOUzKbrS%2BS38Uuq3bazDGuekgn3wTUjfh2l6SSyXUIblfEmr4eiaFXe%2FOVw1G0Lv3%2FOsExmsTFe5DAzdDExiaWbWCxNPRmnEV3od72Z%2B447%2BZCkwK0JCsUvWG0GS20qT8oBaSiv2LHzNkTBn7txi1b6nISymeaNooEemElYJ9O5UUJh49ymR7SChsvgI6M%2FvkzRkvWyypuYOZqHv36roYEt%2FNBEazbwK%2BjPWB00VvpjpM%2BCxwjoQ5IfOIKleBgDP%2Fq61nyBO3nsnBtSe8UVSg%2FUioR9mxXH%2BCCl0ifikPyyOj857gF%2FlmbTFMqroQkK3VUucnz7oyuKtzUsOq%2BM6PTK5wwiOiGwQY6pgH0o%2FcUU225%2Fcfnh%2Bgq1zSdsul2hdHkQCzs6RAX5WAqippInySfZorNAt%2FrwZeGf%2BLx%2Br2v40ZugcKwdaUr%2F40YqVnuiHIrvackDz3c0l4ZhI5fxpUhJRXg8%2BK4B02glOjwvInK1xllhzRSzPNar4f%2BkGqNBAF6WEA73%2F2yJEjS314VUigoLHCo8srZq3O%2FuH7xunX9WzJ5xtMtr8ycbs4TvszWKni9&X-Amz-Signature=93858166ce69588c2ecd77b6d1ecdea08436bc4c13ccf7b3c7c3fadb2ca56206&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
