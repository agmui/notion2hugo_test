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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWIZCJQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCUmzbNrvgaFLZQ2bs126cxsEPrJhbx8BsZ7v%2Fmu%2B2vQQIgJbwwSBt%2FC2WKgZLgYDl21rxZpXug1yqjpgCZRzvC1jIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCFju0Xjs5LJyYP8CrcA6rV1Kj%2F8gcosr59nYc3mwQceDYX%2BGMxIivKSMTnw2pLV%2FuxOdU1DMSeVwkwZbWpGt2vJui47Y1m2JGny5VwR%2BL52GrcOYxZK1ABI6b7XMbRAKYoEsWRNfTJ8KYGIJgeV6vYhORpL3cnD%2Bh%2F6i5exms6iY%2BFM03Ti37zdvDKkqJnvGDhKtBW8TGq1Q%2FRuve2LobZT2IGX8upuJM%2B%2B5Z4UAhjY%2FGJGTqRXW%2FkQidRkCs2g5WEex13%2F9Qn9rWx2OljovePKcvRguc5vtlkpYc1nOvP3XkP1zt2xfxWvKiNl3e4Byk%2BcwU3LqXb2GhxOBZZVIbG8KezIIC29gZcWmMMfzEBG%2FNOiX4dmsiaZxbTFdKDzCG5FIDwWA%2BjasnzPNBzsIaVAbq6oj5LIubS1nKdZcVIZvuXX9F7lQ4%2B0Gx94pASNrY%2Bnbv7CX0KXmBRVXk7GVkWsrdlpPVmOnzrUJF%2FKzhDHRqEeNApb6yfl7aDi%2FnjKFbjWLP1lHR4C98yb%2BYrco9M3Bz2OmGjkCTD939biXw40kl50Yfr%2B25OBfq3UTvOPipVw5qqnTs3p3nTfMBD6BISVmL%2BWD%2F7SxYDPwQzKbudSIbbwpJY%2BNlzvYaDZ90bNSvmxjrlCgYX2fpIMK%2Bi0MQGOqUBcJ7j6nfUv%2FUQiQWoPDOxm7oUWaZLU%2BojsNS4OA%2BvUNpl%2B0julzQCE3ohLV2cYihtOHDMxa01uyA3U5PlGPGRJMuIxaBbN6i91pwp05jXAQE5tvAsOdymfOKW4O5czP0trRp8J9Wgnr3hB3%2FYu%2FjauhDhFJDLpeLD0P5AELGGqqEvN45K6nLrP0FPQPkh7x1ppkAvuBtcfcQB3QAYnrfDecX2w7fU&X-Amz-Signature=f2e0eff10955eadac013f1ff8bd56352eeb7f7c45866b9d6c27d1304d01aa723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWIZCJQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCUmzbNrvgaFLZQ2bs126cxsEPrJhbx8BsZ7v%2Fmu%2B2vQQIgJbwwSBt%2FC2WKgZLgYDl21rxZpXug1yqjpgCZRzvC1jIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCFju0Xjs5LJyYP8CrcA6rV1Kj%2F8gcosr59nYc3mwQceDYX%2BGMxIivKSMTnw2pLV%2FuxOdU1DMSeVwkwZbWpGt2vJui47Y1m2JGny5VwR%2BL52GrcOYxZK1ABI6b7XMbRAKYoEsWRNfTJ8KYGIJgeV6vYhORpL3cnD%2Bh%2F6i5exms6iY%2BFM03Ti37zdvDKkqJnvGDhKtBW8TGq1Q%2FRuve2LobZT2IGX8upuJM%2B%2B5Z4UAhjY%2FGJGTqRXW%2FkQidRkCs2g5WEex13%2F9Qn9rWx2OljovePKcvRguc5vtlkpYc1nOvP3XkP1zt2xfxWvKiNl3e4Byk%2BcwU3LqXb2GhxOBZZVIbG8KezIIC29gZcWmMMfzEBG%2FNOiX4dmsiaZxbTFdKDzCG5FIDwWA%2BjasnzPNBzsIaVAbq6oj5LIubS1nKdZcVIZvuXX9F7lQ4%2B0Gx94pASNrY%2Bnbv7CX0KXmBRVXk7GVkWsrdlpPVmOnzrUJF%2FKzhDHRqEeNApb6yfl7aDi%2FnjKFbjWLP1lHR4C98yb%2BYrco9M3Bz2OmGjkCTD939biXw40kl50Yfr%2B25OBfq3UTvOPipVw5qqnTs3p3nTfMBD6BISVmL%2BWD%2F7SxYDPwQzKbudSIbbwpJY%2BNlzvYaDZ90bNSvmxjrlCgYX2fpIMK%2Bi0MQGOqUBcJ7j6nfUv%2FUQiQWoPDOxm7oUWaZLU%2BojsNS4OA%2BvUNpl%2B0julzQCE3ohLV2cYihtOHDMxa01uyA3U5PlGPGRJMuIxaBbN6i91pwp05jXAQE5tvAsOdymfOKW4O5czP0trRp8J9Wgnr3hB3%2FYu%2FjauhDhFJDLpeLD0P5AELGGqqEvN45K6nLrP0FPQPkh7x1ppkAvuBtcfcQB3QAYnrfDecX2w7fU&X-Amz-Signature=5ff0a0970084a303ce2659de5ff530d16468ef345cd16f671f2f7fa2db69075c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWIZCJQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCUmzbNrvgaFLZQ2bs126cxsEPrJhbx8BsZ7v%2Fmu%2B2vQQIgJbwwSBt%2FC2WKgZLgYDl21rxZpXug1yqjpgCZRzvC1jIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCFju0Xjs5LJyYP8CrcA6rV1Kj%2F8gcosr59nYc3mwQceDYX%2BGMxIivKSMTnw2pLV%2FuxOdU1DMSeVwkwZbWpGt2vJui47Y1m2JGny5VwR%2BL52GrcOYxZK1ABI6b7XMbRAKYoEsWRNfTJ8KYGIJgeV6vYhORpL3cnD%2Bh%2F6i5exms6iY%2BFM03Ti37zdvDKkqJnvGDhKtBW8TGq1Q%2FRuve2LobZT2IGX8upuJM%2B%2B5Z4UAhjY%2FGJGTqRXW%2FkQidRkCs2g5WEex13%2F9Qn9rWx2OljovePKcvRguc5vtlkpYc1nOvP3XkP1zt2xfxWvKiNl3e4Byk%2BcwU3LqXb2GhxOBZZVIbG8KezIIC29gZcWmMMfzEBG%2FNOiX4dmsiaZxbTFdKDzCG5FIDwWA%2BjasnzPNBzsIaVAbq6oj5LIubS1nKdZcVIZvuXX9F7lQ4%2B0Gx94pASNrY%2Bnbv7CX0KXmBRVXk7GVkWsrdlpPVmOnzrUJF%2FKzhDHRqEeNApb6yfl7aDi%2FnjKFbjWLP1lHR4C98yb%2BYrco9M3Bz2OmGjkCTD939biXw40kl50Yfr%2B25OBfq3UTvOPipVw5qqnTs3p3nTfMBD6BISVmL%2BWD%2F7SxYDPwQzKbudSIbbwpJY%2BNlzvYaDZ90bNSvmxjrlCgYX2fpIMK%2Bi0MQGOqUBcJ7j6nfUv%2FUQiQWoPDOxm7oUWaZLU%2BojsNS4OA%2BvUNpl%2B0julzQCE3ohLV2cYihtOHDMxa01uyA3U5PlGPGRJMuIxaBbN6i91pwp05jXAQE5tvAsOdymfOKW4O5czP0trRp8J9Wgnr3hB3%2FYu%2FjauhDhFJDLpeLD0P5AELGGqqEvN45K6nLrP0FPQPkh7x1ppkAvuBtcfcQB3QAYnrfDecX2w7fU&X-Amz-Signature=78df478c77789d9f652eaa9e397bf6b0f73dde8460cbd6a7953f797b3fcafa17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJOWPZMF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIB4Jb60ph0r3s0Qw%2FMOVAWNEJmMvHsPyA6hUdwWeh8rpAiEAluvYouyrmu7KM%2B5I1XlnlQCHtT4lQ9HpGoIS7JBuWagqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEotLk9GD4Mnn3ii%2FyrcAxamFPhG%2BXKP%2BSJfiQAotWk0ryOxotyMul5DEkcsUjuo7M4EI8MNd68d4kz10vaD4H2BZ8XC8YMiyl2FNiepm%2F4l0HG7RPoVEfelX%2FRX1oCGSUNDusN1gUfIYlQZ1GZm8g37URQzO0vxAr6MC3fLGK9o52EAET%2FKB7G05%2B%2BCsGMHyIPnCW8HcNzWgKRE7%2FqY7HCCa5%2FQnGfAqo%2FJHrz40duF2Ypnyv16iAjAkC4dzEkVIZV9ophZVtpeMGna2ehkwXz8hMseB83z%2FAcELWs28UUQgkWMplw82Ebf5dnRkvLE33C%2FaJ%2BZ9YXSQbpg1lWTbNtoFDge47QsQ8Cde3%2BRwJmK3gi5y3qt1tTMD6JkEwWfX75S00PCsbPGAn%2BFAM22Mx%2FHPd3V4%2BktJU6ldT497zr9f3HiNl3w540ZYPJ8N8bGeiYJXohF25sQU8GEgitCLLcxdfSKqzVmn3zWm%2BVoy9vD6%2BZP3RZ0wxhmHtducskKX2M5hwfagSItOFqzgXrtR2rSBEUgRae7lSUnqACS%2BG9fPag%2Bylkh%2FmwlguxzWAmBDJOhuYOaTJyxPSStywFaa5rfNpRKPow%2BvM5vQu2df6pCclo0xunCstbhwJzhqzfaFA41uryurW7whAv3MIyi0MQGOqUBy%2BvN4uJFtE27X0vcsoXZ2A%2F%2FT4E2YZfb7EIa4t4fmIXH4BG7Y%2FZTUt3ukMN%2F6yL5x4rE9e7spgLXL5JwGQVA5bP%2FIB1515Jqnoiwue9gDAy6sFzSMk2RnLi0spuGvXI1%2FbKlUuYSwp5LS5RMtqCpBktTKy0TX1HimUUED817%2BD1Qb1c6hyXB%2FEIFpWHL07pnAqGeZRa7UzlCXnV6XFpQpx%2BOyatz&X-Amz-Signature=c9891ddd3167ad9db8646e3c812915dec73bf41daf86b26a3f5c16e86ed25cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEH5D7RB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEBa3mGZZVqZexdCIamkZ0e5Io%2BYlbwRPT5lr2idD4j4AiEAsI3tGLNLCTyjG5U7mlMktxRn9aQfH5zAY3Sb82TNRacqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt3ODUJpn23cBbKeCrcA5gtO4b%2FKYvHuCq2%2FuzZCS%2FAgiXA1vzfLUXdtLoWDdn52x3SUWqhiWWqYZUhp4QIDegBx6kvQVngwqN%2FQZAQvPdc2WRmgRi3X4lIhBYYsVuEEWNX71CgxLx76TG3U6l1BxrBUtLDMz8G8jLFHqMEguDivH%2FPVu28%2FGJtZzFYORBTe0I4xUyHkip9oIXSLLHP3Du5UJFg5EaEqa6Sf9cD5lld7BGMRfMdLoEA3lEarniNkK%2FEIbFUnKCkjZyPaZLQziOP3z5AV9%2FzQKPyV0CXHX6NClop3BagWoi51YxaDVybRlY%2BwVtMEgNalWdrGYK8DI7DmOVnJFNsEduWAdyO%2Bxo0QpMbIsKqBoggJ9ShduFrTyDmOp46oJ%2FA2IuekCY5jYyh6XAWY%2FW6l%2FrGhYqWq8cZ858mu%2F7mxhVnGGVuls%2Bnex4Ua9W4jWleAE3SexWf5QsSFU0ugjSoFYGca38JvqwokPURjA67nvhR6A1ormXE619aa8c5wS1KVcC4Bz5xcpgXmUdwAT6iUqC2In7igGsv3ukpxicxC8DTikAuS4z1rPYsXF480rqXj0m67xXHfIwyUju%2FgpGIoAjiJSuxmtVbGCInEE8RhYgWBuxgTxKrHPMcBZ87YUAYUhVUMP6i0MQGOqUBKloJMNm68%2B2YlfxobBZvxjRwqCC65wYl88rDmeg1lXsBeSdrcHFSycdO5j2PLSw4B8RquSjhthBROUm1jfv124C5R9%2F1w1H8iAcyZlrv6sNnqOYQocpYEPenpu7I1QJ4BV4uLyc4oiz06ECjVE%2BzZ2P5xSCzoFfmKkuXYby7Ihl8nSm9i47eaVqa0JjKGZoSvd%2FJAkfJwGIdJppJcIXyLFW5dD0N&X-Amz-Signature=735f333cdddc1ae9cec6ed3ae2e846f0d01239040542b4a48f6ffad641ebdb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWIZCJQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCUmzbNrvgaFLZQ2bs126cxsEPrJhbx8BsZ7v%2Fmu%2B2vQQIgJbwwSBt%2FC2WKgZLgYDl21rxZpXug1yqjpgCZRzvC1jIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCFju0Xjs5LJyYP8CrcA6rV1Kj%2F8gcosr59nYc3mwQceDYX%2BGMxIivKSMTnw2pLV%2FuxOdU1DMSeVwkwZbWpGt2vJui47Y1m2JGny5VwR%2BL52GrcOYxZK1ABI6b7XMbRAKYoEsWRNfTJ8KYGIJgeV6vYhORpL3cnD%2Bh%2F6i5exms6iY%2BFM03Ti37zdvDKkqJnvGDhKtBW8TGq1Q%2FRuve2LobZT2IGX8upuJM%2B%2B5Z4UAhjY%2FGJGTqRXW%2FkQidRkCs2g5WEex13%2F9Qn9rWx2OljovePKcvRguc5vtlkpYc1nOvP3XkP1zt2xfxWvKiNl3e4Byk%2BcwU3LqXb2GhxOBZZVIbG8KezIIC29gZcWmMMfzEBG%2FNOiX4dmsiaZxbTFdKDzCG5FIDwWA%2BjasnzPNBzsIaVAbq6oj5LIubS1nKdZcVIZvuXX9F7lQ4%2B0Gx94pASNrY%2Bnbv7CX0KXmBRVXk7GVkWsrdlpPVmOnzrUJF%2FKzhDHRqEeNApb6yfl7aDi%2FnjKFbjWLP1lHR4C98yb%2BYrco9M3Bz2OmGjkCTD939biXw40kl50Yfr%2B25OBfq3UTvOPipVw5qqnTs3p3nTfMBD6BISVmL%2BWD%2F7SxYDPwQzKbudSIbbwpJY%2BNlzvYaDZ90bNSvmxjrlCgYX2fpIMK%2Bi0MQGOqUBcJ7j6nfUv%2FUQiQWoPDOxm7oUWaZLU%2BojsNS4OA%2BvUNpl%2B0julzQCE3ohLV2cYihtOHDMxa01uyA3U5PlGPGRJMuIxaBbN6i91pwp05jXAQE5tvAsOdymfOKW4O5czP0trRp8J9Wgnr3hB3%2FYu%2FjauhDhFJDLpeLD0P5AELGGqqEvN45K6nLrP0FPQPkh7x1ppkAvuBtcfcQB3QAYnrfDecX2w7fU&X-Amz-Signature=4fe92d32893f7b50ec34e9008b9f9e716d7a47624f1ef330ad3c507d8558be51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
