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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GIPCKP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDdLL2%2F%2FfV%2F36p%2BSdNijCxJnhcjE%2FJ40uZedbigpd8yzgIgUzchFyxIiuT7YbIh1%2FuRFhLmAuM2iUqWFxtXZzlMvAUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDS025a2ehnoa6jdxCrcA54fygPIxLRFr%2FqdK5gK4mpqderCjiUCEIOGAlgW4UlLRT9O0GHbs7IMupeG6JP4mj1BA4iUSfZIw5%2BCXV7zS4eefrUUa9tteF3QkNWKfV0Yf3ZPiB1Ty8v4a8lJCnZ3lusxzFeF%2FEacxNFgOFv39QVaxzpcXDfJ%2FOaDRYKwOd3qQrmINtGme%2FhWKktUqGTtaFu3vW7vekMWBgNDEIGPZfFzgaulmwpxxVIb19jqrB15h0sPCBPmRjtIue5pgWf%2BanjccdQdXRAifu7EmWlemRzWTWwdbmA0FrbKLkhT8w7LUxnUmbCbnPYPLGbFBXSKU55YmfcTD2rragnTJpaFP5LwfEDkgQTTaTkSyvfQEQD1VAxvAvKem00G7yDZUu9arAe1t62kAnZEHTPpCqAUxd678SKLFme1DVtySdubmo1bLxLbzOhconLRFfCeQuaXHcs4Af3jUoszoIzLurODR8I%2FxTz5qJba5HW0OG69E0qcDHsHAs%2BWIlqHbrvbDgm14QUREevbkCHHGFxSzH7C6yMnkU5SxAWzzQa8yDnXPqJlQKwF40qX8WymQ8NEme62pWN79WDtIcvZXMWOUqjVwWAq03I0DqQt6CINPyVLqEI8STAP5Hh4bOJj9agcMLPt%2F70GOqUB7q24M7gIYV8WkxHZrfKU7tvsbqnPgyZ0LZrmlDnm3Ec7DPeLZ32s4l8Fl2nxSqysqGC2XbXW3BKRRvW3HBen7HsVQVn2fDghr5Ws5Ma8XiUBztUZp9eGmGepq0ZjVSj1KTNYdR%2FcI7HaTomllzba4Y8OPctrGXhfMNPxPwOS4yyL6WLhGNtNpLBwqBDJZC3sBUydiEB2tgLsBsGqwjWTmX3gHZzl&X-Amz-Signature=3fd30178562d699af0148d22b9dce1093293f79e0fbcd9d5c7c5282f6a3ef38c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GIPCKP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDdLL2%2F%2FfV%2F36p%2BSdNijCxJnhcjE%2FJ40uZedbigpd8yzgIgUzchFyxIiuT7YbIh1%2FuRFhLmAuM2iUqWFxtXZzlMvAUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDS025a2ehnoa6jdxCrcA54fygPIxLRFr%2FqdK5gK4mpqderCjiUCEIOGAlgW4UlLRT9O0GHbs7IMupeG6JP4mj1BA4iUSfZIw5%2BCXV7zS4eefrUUa9tteF3QkNWKfV0Yf3ZPiB1Ty8v4a8lJCnZ3lusxzFeF%2FEacxNFgOFv39QVaxzpcXDfJ%2FOaDRYKwOd3qQrmINtGme%2FhWKktUqGTtaFu3vW7vekMWBgNDEIGPZfFzgaulmwpxxVIb19jqrB15h0sPCBPmRjtIue5pgWf%2BanjccdQdXRAifu7EmWlemRzWTWwdbmA0FrbKLkhT8w7LUxnUmbCbnPYPLGbFBXSKU55YmfcTD2rragnTJpaFP5LwfEDkgQTTaTkSyvfQEQD1VAxvAvKem00G7yDZUu9arAe1t62kAnZEHTPpCqAUxd678SKLFme1DVtySdubmo1bLxLbzOhconLRFfCeQuaXHcs4Af3jUoszoIzLurODR8I%2FxTz5qJba5HW0OG69E0qcDHsHAs%2BWIlqHbrvbDgm14QUREevbkCHHGFxSzH7C6yMnkU5SxAWzzQa8yDnXPqJlQKwF40qX8WymQ8NEme62pWN79WDtIcvZXMWOUqjVwWAq03I0DqQt6CINPyVLqEI8STAP5Hh4bOJj9agcMLPt%2F70GOqUB7q24M7gIYV8WkxHZrfKU7tvsbqnPgyZ0LZrmlDnm3Ec7DPeLZ32s4l8Fl2nxSqysqGC2XbXW3BKRRvW3HBen7HsVQVn2fDghr5Ws5Ma8XiUBztUZp9eGmGepq0ZjVSj1KTNYdR%2FcI7HaTomllzba4Y8OPctrGXhfMNPxPwOS4yyL6WLhGNtNpLBwqBDJZC3sBUydiEB2tgLsBsGqwjWTmX3gHZzl&X-Amz-Signature=add8cf86ec83db269efd6abd74ee651523f7e88c6f1ac7bab1e2d7e4d7c7138b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3Q3NCNC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDGz6VWluC1ZixW6J6pCaVTtvfh0TGhrx3us5FxHqRb7AiBVDYk68D%2BcqXoegCIADSi%2BJMbRZwVg00bRVgpEjpsX0Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM%2FNgqBTI1fSJXC3oIKtwDonCceR%2BjKKI%2B21lxdSesdVZNoVXSGGTNtWxvFPLvwjl0Rm%2FhdUZZL8RuEpzjJFuk6uyae0tL7wttEBE1tfqMMOwYz9YL6PxZTQkHyggbuCkeu8XelhQZNUrSuVmwtOdZVcnIlNqPdOX%2FgSTaa3MfN3s%2FhGeczfhomeK3lETdPPnwcdmRoJ4i4aJjwbZnLpevqOv5fOXaPhFW023chBTLGbfPZrOYzO%2FLfZDZbQ75Meb5Y%2FZcreOkgegsp4S5ffFvpOElfxPb%2F07BNKxE1bGl7djAN53jv0eDnh%2FIuo61jS%2F1ZEUdZJnS5e2RmywCWuOBMyEVIIIuzXYi3Sjal6yryyLQHVfjC%2FHh0bxiKn4nerDGVj0Ioaj9c1yndO0lLQugliAyQFBB4D%2F3%2FWJCIhlClHjFBBOZ03NUmMShoFt3y0rpmDPnJ6HRcB1UXXWCEIGC1wBtTxPgqWsNQwNeb9Mq2qiWcukD1sBGzJzzgemIgiO9Qhwkp9w3tq4tBR2i%2F9mW9KsVyIWitChYrDo5ybqnxa7DBydMySbteh42vdsbaYG6oGDC365axpgE4B8B5AZm%2BLHKXosGw9RdGyd%2FnvMS%2BiM8GlpD3K0LDLZwTnFk5BzoK1E9jce%2FEJ8eMygw2e3%2FvQY6pgEBWrsxzrBB0Av2vs9Xnm%2FKkKsc2hma8WJo8ccJQPjKwGIPbvE4C1jRtA01g4Wh%2BoIhmKWl7%2BpMKF2LhpnCUfj0kDYPYMqBiWXPb6au5j7qoPw9jWMD4tBvMn6XVn8%2But6BFqT%2FyTDcJoTeKRZA9EjVl3Tbu4MYZjCWA5JEYLk8ZDML6SBIUlYey3CG1klRNz8SiS00%2BWffWJI0s1kFrLLHlIWG0U2r&X-Amz-Signature=209036ed502b09e5d0fa63919f1863482327e5575a45fcb671cf9daeaa17a515&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFUDIRI4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICO6d49xF2ME3s4O%2BEXhLKYID2qrTlNh2%2BDZ0fC3YrouAiEAyl06G1yeThu0t6y9Uqmy%2FYFx9%2B5U%2FmA7QHN5ggRVnQ0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAAb%2BMyExZvHVE469CrcAyjI6Lwva5LgpBGQ6FChrbvQzJ48DalPyYYS2tRL9paf4ZjUTq%2BQ4iKOgZ7gZVZdTJYdXJGQEitEjzbgdczq%2FX9znIi4OaHtyORXb8p5KreFHuQktaRmziRygURr4KO4WzFKkkkJRQULH4ZZI9HynikK5U4%2Fav0lm63sFji766G7bU5Q1xCUOwlnsRhFfHeZqUdZ74pJIJ34D57798HlJ%2BoNBWKlXF2dbnCZvtF0kLa1lZMFWeluIfR70j7eeBPXXfI31TeH9qACFis0%2BMv%2BG1t7mTkFjYQuT1vgtKvPFgx%2FnOzaPrWmJKqroR3S12slwYh5FHi4MeQDpD5uV8%2FAwKv6sn4JDfrTnFnjiiLXjmKSHGOF0%2B6Cc0JOTJupJJsexgHyp4bXwAuOF6PVtaxu3qrnFwsHu1AU4Sjj%2BZJbUABsETLgttETqY9UU28Hb%2FjocNnb%2BW1RpXwY1CVtd0xtOe12xaMCC%2FXkmXC%2B8%2F56DuzkGbOVju7SYmDRIGojUVGYfZEpwxqDacPZCEQJyd1LpXE3oc1tol4ATyxpnmYghCfhRPW5ErwFnTWDRRgdro5S%2FD2bohwjNO1CW%2BfOTYppeBwtyJY9TVzBowb3fqNcLoNzwB%2BJpCtheSXfbBJdMPzt%2F70GOqUBbR8olE0D78LWh6jCCbSqIDc3CJd%2Bl%2BRfZLke7AJ9bgmzWY%2F4N9kUoF%2BtZICm9FTPJa8iaeVyJewDd8G85eWJmdM6%2BNZHzlwtjHG3y%2FGgtuyaFVTCe8GfHbWxuagc2Nm38vnjy3uFwNvqm2qyggpL2TwLoK8aRdbL85jZF1eZ0Xj3u9LW0CxjwKTxr%2FBLjVn0DjQc%2FBVQLePf4AjAIfIOQU2pG9uM&X-Amz-Signature=fe980ec5905980c05f6f34ffd5eeae9c67dfe8ae4f9d385eed8d6e0de65140e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GIPCKP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDdLL2%2F%2FfV%2F36p%2BSdNijCxJnhcjE%2FJ40uZedbigpd8yzgIgUzchFyxIiuT7YbIh1%2FuRFhLmAuM2iUqWFxtXZzlMvAUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDS025a2ehnoa6jdxCrcA54fygPIxLRFr%2FqdK5gK4mpqderCjiUCEIOGAlgW4UlLRT9O0GHbs7IMupeG6JP4mj1BA4iUSfZIw5%2BCXV7zS4eefrUUa9tteF3QkNWKfV0Yf3ZPiB1Ty8v4a8lJCnZ3lusxzFeF%2FEacxNFgOFv39QVaxzpcXDfJ%2FOaDRYKwOd3qQrmINtGme%2FhWKktUqGTtaFu3vW7vekMWBgNDEIGPZfFzgaulmwpxxVIb19jqrB15h0sPCBPmRjtIue5pgWf%2BanjccdQdXRAifu7EmWlemRzWTWwdbmA0FrbKLkhT8w7LUxnUmbCbnPYPLGbFBXSKU55YmfcTD2rragnTJpaFP5LwfEDkgQTTaTkSyvfQEQD1VAxvAvKem00G7yDZUu9arAe1t62kAnZEHTPpCqAUxd678SKLFme1DVtySdubmo1bLxLbzOhconLRFfCeQuaXHcs4Af3jUoszoIzLurODR8I%2FxTz5qJba5HW0OG69E0qcDHsHAs%2BWIlqHbrvbDgm14QUREevbkCHHGFxSzH7C6yMnkU5SxAWzzQa8yDnXPqJlQKwF40qX8WymQ8NEme62pWN79WDtIcvZXMWOUqjVwWAq03I0DqQt6CINPyVLqEI8STAP5Hh4bOJj9agcMLPt%2F70GOqUB7q24M7gIYV8WkxHZrfKU7tvsbqnPgyZ0LZrmlDnm3Ec7DPeLZ32s4l8Fl2nxSqysqGC2XbXW3BKRRvW3HBen7HsVQVn2fDghr5Ws5Ma8XiUBztUZp9eGmGepq0ZjVSj1KTNYdR%2FcI7HaTomllzba4Y8OPctrGXhfMNPxPwOS4yyL6WLhGNtNpLBwqBDJZC3sBUydiEB2tgLsBsGqwjWTmX3gHZzl&X-Amz-Signature=c863cd97482af547a1793046d9b5edfd114aa06eedf29863b00f27daa60542ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
