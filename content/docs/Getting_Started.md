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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJ3PXHZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyX%2BjFoE8mff%2BHGCXswFS6nVPK60lJ6jxcqw2RMG5b1AiEAgd6ePzJdF3b2vRQkvSmnS3RlYFIQHUVZ1FiCdk1zgwUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsBn8KdiAfj5DA%2FRCrcA9Ooca0zPxk%2BYjUFBAF5361WzSHmNkbVMsLZAQdHOlAgFBhBWUGpQLQXJ%2Fh1idfdt%2FQX41yz8T%2F8XcXarhYJXzxBrP7oQnU%2FEDcOezMnszLuqi91m9YjPHkN9U6yAsuGIo7O7NXd1omvjjdlwVwvslOc0y8EELkxg23372QKWR0sO7uYrodshxHMMdK9Ng2qWRoF6Q0dzJWi4G1TIvdOY8TWnjytvTQNIpFCWfVaIc7UY3Z%2BVbCDJTLRWuJLX16QfZ%2Bh79Gs0W8o2d9c2jnTfCou0ecXybBgAWjpls6KSZY4%2BWsjZ0Wfm8X%2BZRgN0ok0BXXm%2BclwwqncdlkBzeg4Un648Iv9XwbV8CjYEvbLI9fhdyWHvajiLpIyxHp%2BoaYgQhEs1gDc%2Bg1rlrrlES4jbxZJLD074hBqFLleX3Y1WxlMZupTKpt74h3wCptsyT1odlEkC0c%2F8ELfpUpkBWdV03yKapynmwNFnVSbpWjHZ25h8NAjhxevYMWEf%2FgoLsA6hvdf2UzPv8YbKTN5YkW0NAU3GjmZspQzHyOZvZJu4IBuqcTWSVEWtKz%2BxGWOPZF58%2FxLW2nUicVFh4H9l3mmHSpNmucpkT6jXuC%2FT5b4w%2Fu4mJFNbVU%2BgAvMOw5LMISG6L0GOqUBR4iYMvqCH8RnvnohxDTAZNMixZ0rPCCSqz6YPXyPfhqJDVqScEo1ZSBaAMwRMbNmoJofsZcHuZAW6hy8S2adzzLoUOoPO1eRGKBRnSZWULgN1DYKNebBxsYQ2bpnPR7n8zL%2FIIS8GQFzlHugUG7%2FKCCC%2B5FGnS2k3MD9hHoboAuY8ZBFdIy%2BBNZ1muiNESXI519iVkjWNkJbK88hotiHUlUuOF1V&X-Amz-Signature=d7f108255031a347fe730891705783fb14beda3a1c9f329eaef1898427fa31ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJ3PXHZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyX%2BjFoE8mff%2BHGCXswFS6nVPK60lJ6jxcqw2RMG5b1AiEAgd6ePzJdF3b2vRQkvSmnS3RlYFIQHUVZ1FiCdk1zgwUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsBn8KdiAfj5DA%2FRCrcA9Ooca0zPxk%2BYjUFBAF5361WzSHmNkbVMsLZAQdHOlAgFBhBWUGpQLQXJ%2Fh1idfdt%2FQX41yz8T%2F8XcXarhYJXzxBrP7oQnU%2FEDcOezMnszLuqi91m9YjPHkN9U6yAsuGIo7O7NXd1omvjjdlwVwvslOc0y8EELkxg23372QKWR0sO7uYrodshxHMMdK9Ng2qWRoF6Q0dzJWi4G1TIvdOY8TWnjytvTQNIpFCWfVaIc7UY3Z%2BVbCDJTLRWuJLX16QfZ%2Bh79Gs0W8o2d9c2jnTfCou0ecXybBgAWjpls6KSZY4%2BWsjZ0Wfm8X%2BZRgN0ok0BXXm%2BclwwqncdlkBzeg4Un648Iv9XwbV8CjYEvbLI9fhdyWHvajiLpIyxHp%2BoaYgQhEs1gDc%2Bg1rlrrlES4jbxZJLD074hBqFLleX3Y1WxlMZupTKpt74h3wCptsyT1odlEkC0c%2F8ELfpUpkBWdV03yKapynmwNFnVSbpWjHZ25h8NAjhxevYMWEf%2FgoLsA6hvdf2UzPv8YbKTN5YkW0NAU3GjmZspQzHyOZvZJu4IBuqcTWSVEWtKz%2BxGWOPZF58%2FxLW2nUicVFh4H9l3mmHSpNmucpkT6jXuC%2FT5b4w%2Fu4mJFNbVU%2BgAvMOw5LMISG6L0GOqUBR4iYMvqCH8RnvnohxDTAZNMixZ0rPCCSqz6YPXyPfhqJDVqScEo1ZSBaAMwRMbNmoJofsZcHuZAW6hy8S2adzzLoUOoPO1eRGKBRnSZWULgN1DYKNebBxsYQ2bpnPR7n8zL%2FIIS8GQFzlHugUG7%2FKCCC%2B5FGnS2k3MD9hHoboAuY8ZBFdIy%2BBNZ1muiNESXI519iVkjWNkJbK88hotiHUlUuOF1V&X-Amz-Signature=76876529f553703114c66b2a4638220ad50e787e82c949ca5b8b2d72b97e9ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLGP33J%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAllouWvrrmlyTpFtUUHGDgIgnlh3Yx1MhNtKRXEWOH8AiEA4pTkih4jgc7MfQdWGyE2qtC09mtf7pbpaHFjMw%2Fe78YqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCM%2Fv9N4c40fwjrBTircA%2BijhayeIY1FmI4cjj%2FbIMn%2BzPijM7WbZv0iXbWLyF0G1thwv7tz8NSvfNeKzGDXPNrX3GyEh1kzZxYQZ5SmMi0EeOwBr3j975RCXv1fIp3kyHZ7K2b7lTQHtEojOnzOP%2F%2FUw0%2FDBXaUjPPsY4B%2BieWKlJrSSiyUrG%2B15ZwGMa1ltST3o8yip1bbLM7mT2wrKU8%2B6%2B64ECRLroQ58RKItSFD55IeVomNzaFcbDwwx5PqWceNGE%2FXVv7YrvubEgrxrWaVef6YOCN9PanebhAqESZmbDGJsseJkRJQ4818VkjqllMacrAsZpxw0dNjj3GHjrEkoNpdnnmBhO%2B2YsyUR3EXHaCAEcqGgF%2FheRoutu6T00qZIVsffG3sk2tG0EYcBrRjwvNcdhlaBeSSTMgE3Dj9uyEBADun5cmTeoHwuOn2v4%2FOjVj9esCx5M0E%2BRzIVNy%2BeCExqmt%2F%2BhDpjPNMXAdTvbv37VsNvTp2B%2FL33PgvBx9g%2BQd2Y0Hi8Oe8AiKxC0%2BDSOnQpFNg3sZ%2Fm9HRsAnH6Z1rJ7vzpZ59ZBq%2FjQ1NU35FtpK9gsSt8ZK7NmANzity1TFuG3SiQziZ9R599RvO6LIXHZjbihJZcel6wandPkO6d7DIWqNRIxA1MOmG6L0GOqUBfY8Q0%2BJRuTfwWpFEYqM8j8DeSU4cF6kugr5uoMB6qdbFU46UmsnjFdKfFPpCdlZVjlxEHyGtXQbCsR870K30OOcv0jY72xlsbFb%2B5DO0jadt2YrKfzdipX0eQn9uKvNlpNPo7Cc6loX%2Fgxy94zlKCi%2Fd3l3MfZk4Hvpxg2TDHzdfxe9UY4sjA1H4AtnnpRBDEVCvjXBuIgxpfCR6WNwIJcHG0g3o&X-Amz-Signature=89e90739d74146d31b03e77b3f814973d78cf2dc7fd0622db89606c5ca4dfcff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBYDHD5W%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKuvS1OK4pb7VgmBMlVUdkpYz5IuaH8l%2F4w5Bw8ovoLAiEAgb7g0TxmqbuR33gvlKN5IdYyTHrbeEFPT6rAaQhhLU4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuVnEdQOJIB0FUMRyrcA1j5lDYNXzNYxBhPN%2FDMELKmC0awYPBC5of%2BqFEzHlP91DT7GSmSn4gJcCqTJgzYtdzg1SQ%2B1kuTE%2FgU7KVh4X2Jho8YVgVZq2IJhaMQ3wtSUpVBkojQF6nLc8CUhLYAQIVlkh9uYXIvQZZxTXzA1zo8%2FzdiJFxcDdA%2B7fr7uuBqojnRuvPRwP7x7TlziHW5h%2BADhQI6EvGGpnX8cQAfTgZdWmEitr19H40YV3%2BEEiFfCPLOR3lDMWVJm%2F8ddwAlo19X%2FK3biUXKTG0326BLIrFPop3swRqUwQtfMHa5I4vkALZOMCWJNJgMNzPrl6mvcOsRsNXPGab3T9muhp4cMOTPKYe1yMJ2D96LZG74gEIMroW1xf3uqHEtD%2BWcFFoLyjF%2FGazW6Udi4b%2F4OwI3FXPLaEkOWdNyai3zpW4V7vw1aZYR%2BZr4wF4538%2BsCoEETthFfjHCfqipyT8kkqdKfJM7Bss8yM%2BiCHlwkg3fw048uwTDLxwFdOp%2B6sOWA7VrMPHXfosdppIRCfSBj4X4DdkKRCLBJFsV%2BWGp%2BGw6gRYzTVdbXo0UbxJyJIS%2Fbuoy2PmRiHq6H9hwyzyyhYIU50imO60bVa6sYFTD%2Be0tZIkGOJ%2FSY%2FzzilHPeE1dMKmI6L0GOqUBUTPah70VWDHIGuDliIDHqzsy9XX%2BgyvZGYUjQf%2B664UiIP8FW75%2BfoJOZvrguet3HjRZhGt8QUCmTiZmfndUa1S1AearnJSZxCI6kapaSSEZF1n3lxvzjIY8Oz0bRv8UAM%2FmroW6KPQtWY8V5%2BHU6a5oV8DXkxQDhBCNxDv0KFYm%2B18iXdNvZzx5xFkP%2FTQVFN0a6aCfEiA8AYTG%2FZVlGw79IQk0&X-Amz-Signature=36f9538fcf015b9a560c72b6fa76ffe8aacfedb8179f9c45a56043fdbdca72d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJ3PXHZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyX%2BjFoE8mff%2BHGCXswFS6nVPK60lJ6jxcqw2RMG5b1AiEAgd6ePzJdF3b2vRQkvSmnS3RlYFIQHUVZ1FiCdk1zgwUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsBn8KdiAfj5DA%2FRCrcA9Ooca0zPxk%2BYjUFBAF5361WzSHmNkbVMsLZAQdHOlAgFBhBWUGpQLQXJ%2Fh1idfdt%2FQX41yz8T%2F8XcXarhYJXzxBrP7oQnU%2FEDcOezMnszLuqi91m9YjPHkN9U6yAsuGIo7O7NXd1omvjjdlwVwvslOc0y8EELkxg23372QKWR0sO7uYrodshxHMMdK9Ng2qWRoF6Q0dzJWi4G1TIvdOY8TWnjytvTQNIpFCWfVaIc7UY3Z%2BVbCDJTLRWuJLX16QfZ%2Bh79Gs0W8o2d9c2jnTfCou0ecXybBgAWjpls6KSZY4%2BWsjZ0Wfm8X%2BZRgN0ok0BXXm%2BclwwqncdlkBzeg4Un648Iv9XwbV8CjYEvbLI9fhdyWHvajiLpIyxHp%2BoaYgQhEs1gDc%2Bg1rlrrlES4jbxZJLD074hBqFLleX3Y1WxlMZupTKpt74h3wCptsyT1odlEkC0c%2F8ELfpUpkBWdV03yKapynmwNFnVSbpWjHZ25h8NAjhxevYMWEf%2FgoLsA6hvdf2UzPv8YbKTN5YkW0NAU3GjmZspQzHyOZvZJu4IBuqcTWSVEWtKz%2BxGWOPZF58%2FxLW2nUicVFh4H9l3mmHSpNmucpkT6jXuC%2FT5b4w%2Fu4mJFNbVU%2BgAvMOw5LMISG6L0GOqUBR4iYMvqCH8RnvnohxDTAZNMixZ0rPCCSqz6YPXyPfhqJDVqScEo1ZSBaAMwRMbNmoJofsZcHuZAW6hy8S2adzzLoUOoPO1eRGKBRnSZWULgN1DYKNebBxsYQ2bpnPR7n8zL%2FIIS8GQFzlHugUG7%2FKCCC%2B5FGnS2k3MD9hHoboAuY8ZBFdIy%2BBNZ1muiNESXI519iVkjWNkJbK88hotiHUlUuOF1V&X-Amz-Signature=555e4e318eebfcae9622ebeb397d110e83d5925920134a8f962200b73be8e723&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
