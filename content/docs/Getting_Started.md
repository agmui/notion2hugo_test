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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TONLDIQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDKZcTn499RFP0rUkQfvd5j5BBVrELQufulQiiEB7PnlQIhAMtonUtABVomNz48TZBlm0morcE85ppal7c%2B91pp%2BZC%2FKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc27JALjh28zfR6R8q3ANeoijw2WgfWLSjLhfHeFjWZMULl4KrhPJHLIBNT7VMt8e2a%2FrEG7el60S8No3mq1hTmp66RPYCm8i6L9OaNe7Ju3czPiQVPqTYbnMvxBb%2BxPHQptce%2BhTDszN3GZJDm4CRm5hCqnwWDLGDGexA4LuvhsxuGJlQjtJ8Izb5zpG47ItF6ko8HXwr35icbMoKlUDCbIzWUXWi8K9pxgg4A%2B4MHol34mt4QO3UGAmiin%2FqIzGzsfdn0lgSX34FtutqwyqW8oerr8UxcbA8UwAL6KjDp40pRi%2Fw7XonY9Z2SNkFtmJ47cL4kk8r3I%2BVJDeP39lRYbrVZxLbAvuSr0ZUhlQzZ5WLy5%2BRr5vImGd3YITnRhCAdDuK6hSGb05dpfyWTN91GFQBFPkQLN95i%2B6ODskLkb7vO0OaxuWDYS0UtDsPDhKrLDSy73e3HllomSXqmNdS4UeTgCb7mWnlsWtTplp6gm9Cb9HB70MaTwvI47Jml549LZklUm%2FMTcLhm4loKfIINXZqvzW7klxaDfZL2dN0XcTTIHaRopevVyrjsPL5MTkprPfFgYdHcmTAk25eJRT0VSC%2BBANDbRlKugZ6%2BP4o%2BNy9Xs8CHEcUt%2FHk%2BYhaigIodgCP%2F6YK5qx35jCJ84HBBjqkAbM6yklsAXhVlgadN6KCG%2Fv6afXRtY7EX8KVzZdQq9SIKjPgPt%2BpxbxHaOpkNKHo098JRSIWv4rnesTniRuT%2FPSdsVbiVStUGgJjEYmc5zy28IFxsT65aONfnJ%2BtBMd5sk7fXMdFaUQxID3WazIzG8xRf%2BH3fPjdOwtF55vxRlOlKUjozQzL6KBKwxJW8sBd5OjBZiF%2B7q4cuji5HQrAjy3tLafe&X-Amz-Signature=7305db6a09978b0ccf995d557daf97fc929a9db46fa08b8db22e2857641aec41&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TONLDIQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDKZcTn499RFP0rUkQfvd5j5BBVrELQufulQiiEB7PnlQIhAMtonUtABVomNz48TZBlm0morcE85ppal7c%2B91pp%2BZC%2FKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc27JALjh28zfR6R8q3ANeoijw2WgfWLSjLhfHeFjWZMULl4KrhPJHLIBNT7VMt8e2a%2FrEG7el60S8No3mq1hTmp66RPYCm8i6L9OaNe7Ju3czPiQVPqTYbnMvxBb%2BxPHQptce%2BhTDszN3GZJDm4CRm5hCqnwWDLGDGexA4LuvhsxuGJlQjtJ8Izb5zpG47ItF6ko8HXwr35icbMoKlUDCbIzWUXWi8K9pxgg4A%2B4MHol34mt4QO3UGAmiin%2FqIzGzsfdn0lgSX34FtutqwyqW8oerr8UxcbA8UwAL6KjDp40pRi%2Fw7XonY9Z2SNkFtmJ47cL4kk8r3I%2BVJDeP39lRYbrVZxLbAvuSr0ZUhlQzZ5WLy5%2BRr5vImGd3YITnRhCAdDuK6hSGb05dpfyWTN91GFQBFPkQLN95i%2B6ODskLkb7vO0OaxuWDYS0UtDsPDhKrLDSy73e3HllomSXqmNdS4UeTgCb7mWnlsWtTplp6gm9Cb9HB70MaTwvI47Jml549LZklUm%2FMTcLhm4loKfIINXZqvzW7klxaDfZL2dN0XcTTIHaRopevVyrjsPL5MTkprPfFgYdHcmTAk25eJRT0VSC%2BBANDbRlKugZ6%2BP4o%2BNy9Xs8CHEcUt%2FHk%2BYhaigIodgCP%2F6YK5qx35jCJ84HBBjqkAbM6yklsAXhVlgadN6KCG%2Fv6afXRtY7EX8KVzZdQq9SIKjPgPt%2BpxbxHaOpkNKHo098JRSIWv4rnesTniRuT%2FPSdsVbiVStUGgJjEYmc5zy28IFxsT65aONfnJ%2BtBMd5sk7fXMdFaUQxID3WazIzG8xRf%2BH3fPjdOwtF55vxRlOlKUjozQzL6KBKwxJW8sBd5OjBZiF%2B7q4cuji5HQrAjy3tLafe&X-Amz-Signature=bfc959accb50328e538e16fd3ef942b6e123e3b205bc0d5260681f01766607ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TONLDIQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDKZcTn499RFP0rUkQfvd5j5BBVrELQufulQiiEB7PnlQIhAMtonUtABVomNz48TZBlm0morcE85ppal7c%2B91pp%2BZC%2FKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc27JALjh28zfR6R8q3ANeoijw2WgfWLSjLhfHeFjWZMULl4KrhPJHLIBNT7VMt8e2a%2FrEG7el60S8No3mq1hTmp66RPYCm8i6L9OaNe7Ju3czPiQVPqTYbnMvxBb%2BxPHQptce%2BhTDszN3GZJDm4CRm5hCqnwWDLGDGexA4LuvhsxuGJlQjtJ8Izb5zpG47ItF6ko8HXwr35icbMoKlUDCbIzWUXWi8K9pxgg4A%2B4MHol34mt4QO3UGAmiin%2FqIzGzsfdn0lgSX34FtutqwyqW8oerr8UxcbA8UwAL6KjDp40pRi%2Fw7XonY9Z2SNkFtmJ47cL4kk8r3I%2BVJDeP39lRYbrVZxLbAvuSr0ZUhlQzZ5WLy5%2BRr5vImGd3YITnRhCAdDuK6hSGb05dpfyWTN91GFQBFPkQLN95i%2B6ODskLkb7vO0OaxuWDYS0UtDsPDhKrLDSy73e3HllomSXqmNdS4UeTgCb7mWnlsWtTplp6gm9Cb9HB70MaTwvI47Jml549LZklUm%2FMTcLhm4loKfIINXZqvzW7klxaDfZL2dN0XcTTIHaRopevVyrjsPL5MTkprPfFgYdHcmTAk25eJRT0VSC%2BBANDbRlKugZ6%2BP4o%2BNy9Xs8CHEcUt%2FHk%2BYhaigIodgCP%2F6YK5qx35jCJ84HBBjqkAbM6yklsAXhVlgadN6KCG%2Fv6afXRtY7EX8KVzZdQq9SIKjPgPt%2BpxbxHaOpkNKHo098JRSIWv4rnesTniRuT%2FPSdsVbiVStUGgJjEYmc5zy28IFxsT65aONfnJ%2BtBMd5sk7fXMdFaUQxID3WazIzG8xRf%2BH3fPjdOwtF55vxRlOlKUjozQzL6KBKwxJW8sBd5OjBZiF%2B7q4cuji5HQrAjy3tLafe&X-Amz-Signature=571aaca2fed6d08a2541463e457c03d90fee721f7601e52b4fbc981141bdee41&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYGL26G%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCkXqsC2DMqiMLJPOgXUFtF5%2F%2Fmhkfd9ic4RvUXx8UTCgIgFuivN5BTZUOYFZv4GWuFv4wf34PSN6sDXXlsiGBigA8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBZOPNCZPGhepwGSSrcA26MD%2B%2Byo3iyjIuk2j%2FNmO0HkXnxcHutE3jsUbyiST6jHTMo%2FOpiOAxivY8QO%2BHkpW%2Bgwv1WtTYuxbYmKfHko%2BbTcgGe9KuYo1MnUBOW8Ra%2BcG0kmANMLhDnnDcbwMaWyTFygRG5a%2FbgHSJDufpa9smYIzt4sd4gS4hBmNb5IlyGpMlr%2BD%2FaKEA9LKuJ80krZxC7O6d%2BfMKnWQLU3o10VkA5N6znHkBInaIgwuc7VsWLLtH9Nwz%2Faygvj4HuMLv3yvzwIKWRhciE6fjgp8cZFqv485ZRysSCCsrBHY0HjmSjFtG0FYhYzYt9H1sMKAAB0ZlzV9US9olwdHbqaRriC5jWZFMz4wXGVb9ZW2Bix4yovVQW1ni%2BEzZXIaFnjAPfZIwz%2F6jpmZzH6SHo3%2Bj4IDJUTqjJAH8vuj%2FIHFx84K4wr1ihxziOc43ANCsHB4pCq8vyJ%2Fu3mvYhNu2IWTzE5ZYtyyHT4h9mIiDaq0l1bLODsKfZcQ2YIeymSbrj%2B%2ByZTyfFeJsjKHLnRCWf8N203iqAqxeawH4ikHNrrcYxzcFNwMJywtGeTgyWGjD2nyv3mqaHP2DusN%2Fc6oV5n%2Fn8nwZTYr7UN1ogYlX%2BLlCOtSI66x69UOUiXR07a8mrMLe5gcEGOqUB8%2FH4O%2BWl7Ix%2BCkVO05SI5nYBUDJHq2sQZYQfcvzmr9PqVTMp136AkQKh7fcRVd78tSEYXgtrpCKUuglFwXiORJk4jbcRlpnPoAk2K93axQ%2BX1AEo8cFoRDXANa8qAWqDdPB0%2BY%2FNBmyY5N8bNu9GhtfudfUbBnmYw8cGZD0yljV4HmQTXM7fvfP5IPx%2FrBIFUaGR%2BUbcqzFJyyt3vAfrNg7KpsRw&X-Amz-Signature=b1fbad0f6bf71db93cd3a55c28ade3f64a35a0b2c50f36cbd5b671170685b21f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIAQT7B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCwUdsA3t%2Ff%2F3CiJhU%2F8EcyyTFM3emuZITs15Yf%2FjshvgIhAOonLdD2AHmShcXn8k88RgHH69XXZBIqnn6SLPCxHVMgKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBJXDXnxnxUbhW8rUq3AP1jJLNSkt7%2F4y4wZZ2aDHDW%2BXF6PPu2MLUzRYQEA1mZ%2FUN3lhuxrQnBAm2b1xDBgMW%2F%2FaOTbuF5iqJ07SQCYAjDRfS1OQ2tuHuCRTJLemr07AasLrzWKb4KY2XczU2A3iLkpIccGz%2Bjee%2FkHfNDWGkNwL%2B7WACOW%2BMqZ7dR4LpxID1l5qc1S%2BJw53jD%2B%2FbSwLryk%2Bd3nFxFanSUB%2B2je1MFYQqo9oAXZuET0fzDAryv%2FYq6fv6SPZVuEnD%2FtSukZudxY6f0nX5IRhNX4O9YccQH8JQSs5EfHczz%2FNwvboE9xfG6gcqpbhf3OSJtJUu%2BhHXQVds4PU36xgBd8iHBVH%2BvHyjTeu891DzgikGFmUQZ4a9crF6kTqiWynC0H0Ldf7dRJUakW%2BXqz7GxAps5s56KRJdnaIOE9k83jc1YGd6pojojUQ84iI2v7MiFvtWR47zQ8CvZ8N07asBXRQhM0Rxe8cSMCE630fUqssXKLl9KFw6wtbPxbmraii10m%2BEmaYKw4waJoEPz9xnZ0EMvAZIQqarKBmDrWV8Rzd5jnG5iyIY2dwdRgMMWKtA5H8Qc%2FxNgTayWpnHrglY09gixkFdvp9gavNwupL%2FfmhQzx%2FCIvT3NL1FVBxLvsnaGjD9uIHBBjqkAQgKi92T68GzEef%2FZNXokWt9Sa6BE2ODVmMmazldJ%2BJuRM0LzykF4dMgOyeg1hWoQPDjqxd3ELWVyprzoJFM73ezEHa%2FXBxhhyqNgPe6e6kBPgRpR91PQj0%2F1Se%2FBgIs5e4UKe%2F8g5osjtNLHenkn95bZinq4P6lne1ZoMnpukfRoqSgwU4lWgP5UVX65j5MRWE9Rltqsy0Ki56Fn6l%2FnE5kGFc9&X-Amz-Signature=a9a76f93b03ac36b2336adf201b7ae4c1a2d0e75bc0390fc32aa7f1424e02f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TONLDIQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDKZcTn499RFP0rUkQfvd5j5BBVrELQufulQiiEB7PnlQIhAMtonUtABVomNz48TZBlm0morcE85ppal7c%2B91pp%2BZC%2FKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc27JALjh28zfR6R8q3ANeoijw2WgfWLSjLhfHeFjWZMULl4KrhPJHLIBNT7VMt8e2a%2FrEG7el60S8No3mq1hTmp66RPYCm8i6L9OaNe7Ju3czPiQVPqTYbnMvxBb%2BxPHQptce%2BhTDszN3GZJDm4CRm5hCqnwWDLGDGexA4LuvhsxuGJlQjtJ8Izb5zpG47ItF6ko8HXwr35icbMoKlUDCbIzWUXWi8K9pxgg4A%2B4MHol34mt4QO3UGAmiin%2FqIzGzsfdn0lgSX34FtutqwyqW8oerr8UxcbA8UwAL6KjDp40pRi%2Fw7XonY9Z2SNkFtmJ47cL4kk8r3I%2BVJDeP39lRYbrVZxLbAvuSr0ZUhlQzZ5WLy5%2BRr5vImGd3YITnRhCAdDuK6hSGb05dpfyWTN91GFQBFPkQLN95i%2B6ODskLkb7vO0OaxuWDYS0UtDsPDhKrLDSy73e3HllomSXqmNdS4UeTgCb7mWnlsWtTplp6gm9Cb9HB70MaTwvI47Jml549LZklUm%2FMTcLhm4loKfIINXZqvzW7klxaDfZL2dN0XcTTIHaRopevVyrjsPL5MTkprPfFgYdHcmTAk25eJRT0VSC%2BBANDbRlKugZ6%2BP4o%2BNy9Xs8CHEcUt%2FHk%2BYhaigIodgCP%2F6YK5qx35jCJ84HBBjqkAbM6yklsAXhVlgadN6KCG%2Fv6afXRtY7EX8KVzZdQq9SIKjPgPt%2BpxbxHaOpkNKHo098JRSIWv4rnesTniRuT%2FPSdsVbiVStUGgJjEYmc5zy28IFxsT65aONfnJ%2BtBMd5sk7fXMdFaUQxID3WazIzG8xRf%2BH3fPjdOwtF55vxRlOlKUjozQzL6KBKwxJW8sBd5OjBZiF%2B7q4cuji5HQrAjy3tLafe&X-Amz-Signature=164f4cc569eb70afcdc1cdd2e4072c4d945b1b51bf7aa66b4d57a745e6defae0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
