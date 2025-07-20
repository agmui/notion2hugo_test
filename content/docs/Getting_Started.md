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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTYMBMW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS75Z1tyu77MkvEx7HtR7RKJS5Rlge8y31HlyKLoJ%2FtAiEAjgSNq4rDJ0gIGAO0OHDPqx2CgSSilJyrWUFHUnTOQNAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeI8REFzEBK8SY2cyrcA7nYjnv1SjnEOYg8dYBttGwZC03j7L5WDC1OZ8uhLQq4tleAZLod1eJHuqtJ4kpC%2Be4Ebhg4erQSD%2Fq%2FBAvr%2BntjvGBjhvSI5DBhnpjsyaGAemrLJtAi%2FIgtK6rBV0z4GsC6rCEk6EtivBa5W93KEEmQSJL%2B61E4Cs14AXIW968irq1n2r9jgH83tx3jk7GwUSwEcFjtToW6aORfj8frnHEs4VciGWu6xfNYlHCrmdSPDJUxTX%2FO61eSWLb1grhXUTkq4Cg0OnKk03eSnapa2QrfOM21dIlMZ28ZDQR7JqirzmLB653yVq9vu2Ul2kzIEnpkqeY9kfWRauQ%2F%2B0NLqXMl0nU80llUg2bB1rC5gyrBb5cBADMuFEAtwKHkWGhBHpjG0o2A4%2Bz%2F5DxRJzF9Jh82uj26Wq38CrF81z6Vpd0W8PeeP9wvInY4LQLiXWRY3zP1zgc3hFsAQ3upQZ%2Bmm3Yoy%2F07AEqSJfHgJ3CbK%2Bkhr%2BgQL%2BQWzzUrJddo4PlX6H%2FBdGqQoR8wvLeVF6BF1uu89j7K93bo8OY2ogYMgJ2XnvwhIsqUvvgzIl84p3a427yodP3rcJp7Tr8JFsL5kw7yd%2FF8MCpRQY6ivtESw7K%2BYpQu1MQNJmI9rUfaMLK18sMGOqUBgdye%2FDkjzsrQCQm3Mj%2FDuQBn3k9GbmmigQ39bz3H%2F2i3lAUJsWwy%2Beng%2F10kKfvEvh1i7Tz9hWwF0RiT7%2FopaZS9buoNr4GM0oBmLiMoil%2BkVDkz8IBLm%2BnhVY2i%2BsuqS%2Fz4ug4HKw9XssggqfoM54Lt1rJQyEP9ywyd556wrF4mRJP42wvGu4qUnbMOEo4TXguO432H6aNxEwLagTrdJzSWVyMs&X-Amz-Signature=0a08de477f5c62407098c8e9d823034490939dbf6fc3d81c64b842630a0728bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTYMBMW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS75Z1tyu77MkvEx7HtR7RKJS5Rlge8y31HlyKLoJ%2FtAiEAjgSNq4rDJ0gIGAO0OHDPqx2CgSSilJyrWUFHUnTOQNAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeI8REFzEBK8SY2cyrcA7nYjnv1SjnEOYg8dYBttGwZC03j7L5WDC1OZ8uhLQq4tleAZLod1eJHuqtJ4kpC%2Be4Ebhg4erQSD%2Fq%2FBAvr%2BntjvGBjhvSI5DBhnpjsyaGAemrLJtAi%2FIgtK6rBV0z4GsC6rCEk6EtivBa5W93KEEmQSJL%2B61E4Cs14AXIW968irq1n2r9jgH83tx3jk7GwUSwEcFjtToW6aORfj8frnHEs4VciGWu6xfNYlHCrmdSPDJUxTX%2FO61eSWLb1grhXUTkq4Cg0OnKk03eSnapa2QrfOM21dIlMZ28ZDQR7JqirzmLB653yVq9vu2Ul2kzIEnpkqeY9kfWRauQ%2F%2B0NLqXMl0nU80llUg2bB1rC5gyrBb5cBADMuFEAtwKHkWGhBHpjG0o2A4%2Bz%2F5DxRJzF9Jh82uj26Wq38CrF81z6Vpd0W8PeeP9wvInY4LQLiXWRY3zP1zgc3hFsAQ3upQZ%2Bmm3Yoy%2F07AEqSJfHgJ3CbK%2Bkhr%2BgQL%2BQWzzUrJddo4PlX6H%2FBdGqQoR8wvLeVF6BF1uu89j7K93bo8OY2ogYMgJ2XnvwhIsqUvvgzIl84p3a427yodP3rcJp7Tr8JFsL5kw7yd%2FF8MCpRQY6ivtESw7K%2BYpQu1MQNJmI9rUfaMLK18sMGOqUBgdye%2FDkjzsrQCQm3Mj%2FDuQBn3k9GbmmigQ39bz3H%2F2i3lAUJsWwy%2Beng%2F10kKfvEvh1i7Tz9hWwF0RiT7%2FopaZS9buoNr4GM0oBmLiMoil%2BkVDkz8IBLm%2BnhVY2i%2BsuqS%2Fz4ug4HKw9XssggqfoM54Lt1rJQyEP9ywyd556wrF4mRJP42wvGu4qUnbMOEo4TXguO432H6aNxEwLagTrdJzSWVyMs&X-Amz-Signature=ab9ba77f3d1ff4b1f6cd9d3a93452aef4f2d89adb0eb9decc1cd3287e704e375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTYMBMW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS75Z1tyu77MkvEx7HtR7RKJS5Rlge8y31HlyKLoJ%2FtAiEAjgSNq4rDJ0gIGAO0OHDPqx2CgSSilJyrWUFHUnTOQNAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeI8REFzEBK8SY2cyrcA7nYjnv1SjnEOYg8dYBttGwZC03j7L5WDC1OZ8uhLQq4tleAZLod1eJHuqtJ4kpC%2Be4Ebhg4erQSD%2Fq%2FBAvr%2BntjvGBjhvSI5DBhnpjsyaGAemrLJtAi%2FIgtK6rBV0z4GsC6rCEk6EtivBa5W93KEEmQSJL%2B61E4Cs14AXIW968irq1n2r9jgH83tx3jk7GwUSwEcFjtToW6aORfj8frnHEs4VciGWu6xfNYlHCrmdSPDJUxTX%2FO61eSWLb1grhXUTkq4Cg0OnKk03eSnapa2QrfOM21dIlMZ28ZDQR7JqirzmLB653yVq9vu2Ul2kzIEnpkqeY9kfWRauQ%2F%2B0NLqXMl0nU80llUg2bB1rC5gyrBb5cBADMuFEAtwKHkWGhBHpjG0o2A4%2Bz%2F5DxRJzF9Jh82uj26Wq38CrF81z6Vpd0W8PeeP9wvInY4LQLiXWRY3zP1zgc3hFsAQ3upQZ%2Bmm3Yoy%2F07AEqSJfHgJ3CbK%2Bkhr%2BgQL%2BQWzzUrJddo4PlX6H%2FBdGqQoR8wvLeVF6BF1uu89j7K93bo8OY2ogYMgJ2XnvwhIsqUvvgzIl84p3a427yodP3rcJp7Tr8JFsL5kw7yd%2FF8MCpRQY6ivtESw7K%2BYpQu1MQNJmI9rUfaMLK18sMGOqUBgdye%2FDkjzsrQCQm3Mj%2FDuQBn3k9GbmmigQ39bz3H%2F2i3lAUJsWwy%2Beng%2F10kKfvEvh1i7Tz9hWwF0RiT7%2FopaZS9buoNr4GM0oBmLiMoil%2BkVDkz8IBLm%2BnhVY2i%2BsuqS%2Fz4ug4HKw9XssggqfoM54Lt1rJQyEP9ywyd556wrF4mRJP42wvGu4qUnbMOEo4TXguO432H6aNxEwLagTrdJzSWVyMs&X-Amz-Signature=7ec954752a78564ef07e9b5ded9d49f4f5ff75408464475bdb6959c928ee1232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFZG4AAX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY0nLRpPHAFEQWvkwMW7e4IyJ0WNE6Z1X96nbniungDAiA1UivK%2FrMeEeJ0xe2DZWZdee7NlQMrBu%2BlqNABqUotUSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeS8w1HbZZhgYfRnBKtwDhqQnt3fIV8Lix5tIESCkzvVhtyoa1%2B7JgW0O4sJeGGG4uiRT6Ub65gKjMpYjF1QuCOIYOQvcwxU7a1F2BqWPtpM30pGCLMPtK%2B%2FJDqLZCQA690IL42TRPY4XxIaIB%2FBkCVlav8axusjKcPqbDuDnOWMPyQ67ITnyNKD7taGAg9qDmicoQS6njQK7k%2BeHLz8aMOy%2BI7%2FOqHkD%2FbhtPH0oc5l2dZqTl7ZIXdioUOoEcOZmmtfjKUUlEQUMtEk5I%2FrE31sNa9hN%2F%2FlZBYhD7KpZMf15SPRnvtyavsUi66wMHKQ2UhCbfab3XAyY3p%2FtB0glo%2FJo39F96JXo%2Ba9bKXanR8EZ0wloE6QdPNer7tgIapGUabMq3uijmwPMObt0b1Z7r0LXD6f3rfo9LSfTpDdgdFb9s1o5JMt6DlsHRcAqZQN%2BK%2B4eEbZF3kVUBScz3kZA%2Fz4u1A1hgtofZFwJ2b0Yz8E1PhrQZglzcE1sVxWUZ8dLXkYCx6YFbANIUMVNJ2zuiD%2BckeMunL%2Bn52q8w74mINcxto%2BLGtMkUwE9O0A6Vz4zzapsvaEEdTi1q9fpzYH4vFYj91MaC2vzmmePWbePKFhdnJHbd5CUb4uTlyb46kf7DH%2FpFDSjaVMPwHkw07PywwY6pgEVH8Osarf0vYoeV6ekiysq5dHYC7Qu00dbkGkzKBselQx3IbQbNBqWkViZxmMlH7PsyMBZjSu2dpwy2laTnSF7XeJQOO86UPW8bqPAH0SerwKliP0HUcAhMx6WBy3IJ66aQPtfh1y%2F8bAn%2BFPhEFOl3gpqRGqjxM871SW04nIzRIHGQkvaH0fc7EoJS0G8Lo7p6Ja4YKCLiC5Sz23BIvylYt1GLrfA&X-Amz-Signature=2720bbc3922b57de85721ec660e7d68cc1382bf6797a37abe9124b44e04f5a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677XSEYYV%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3dRQdx%2FtoLF6iEjPNUpwOEoPzN3NGL%2FUtlKKG2q0jdwIhAO%2FaG1BlfYv1xQ%2F242Za1mZq0WB%2BwMUPKDOFy8y2mni0KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOoFCTy%2BpHfJQdMFkq3AONla3zMYea%2FTOCDJuxatXCOaIRDTCjd%2BlY51YeTxkhuV3EaQQP9wptATc9JJ8omd2%2Ft1tAvGf0oC5ESJcAF8FJzSkePcZz7eDVekmdZPBWLKKGwhR7dA5M9P8GvOIYWsQV0PksS%2Bu1%2FKOmQtLh1%2F49Rd1G6PNn9l%2BRPcxqo7xbIEus5tY79GipoQyaYj1tjzkp6lABIUOI79TlPqt8LXnVfLRk1aum9pS8yzUi6Z2QA4KuTVOmH79AKGpxKs2aZim%2Fibb9lklUbmD2aePE%2BJE%2F37hut1sl9j5%2BI0xPiKe2hejH6RtG0ZbOGH0n5oTvnWK1OubK1jaoHua05KHpJaXQv8%2F%2B%2BHLp490QqBeIS7uDk%2Fn1tE80lCqzK8TogEXDMQK%2BKEViE%2BPE404Bf1iIwKVTL3egX17%2BdE2nXGj1qXVGD5usY8lH61mzILYscZN4mIJSRq2ZKr3INisZzasQ5y8BMBGM6iN8wvInuoPtTWUcnqE3LdnQ34YSJ99UDO7FWfJ%2FhcMYxBGhRZn1vD4eBeJiIjRAcrnqZuMz%2BueYbS%2FkaHOsIYiMSgWUTXyITX6ssLuEOqN%2FjJ0doJjrYAss3odO1JyS2klx%2F17zhmaqxV%2Fwip8PJanwXBAu%2Fax8LjCdrPLDBjqkAb64XTqBYb0LjItHrDXM7MSPz5G%2F%2FsmGAhSZZ4NCrDK1KXVs3lU49K43Yhpn5WHI%2Bn0n5Ubd2AWW%2Bkjct4PE2BpJc%2BlKhXjxGs%2Fze5%2B%2BViBHgANSsjl8GF7wOBW%2BhjY49p7DyYHDGBmkK8NXE2DrL4u48iDsuxtJZtPnD7WeJKCM%2FSijjADEp1rNunDelPIOw%2BJDvLfnavdTmeOXfvnivhTLXaH4&X-Amz-Signature=bc484900051b85efeda244ecb9a2b6d2dcc40e73c3bd5aaf1658dac9db199c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTYMBMW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS75Z1tyu77MkvEx7HtR7RKJS5Rlge8y31HlyKLoJ%2FtAiEAjgSNq4rDJ0gIGAO0OHDPqx2CgSSilJyrWUFHUnTOQNAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeI8REFzEBK8SY2cyrcA7nYjnv1SjnEOYg8dYBttGwZC03j7L5WDC1OZ8uhLQq4tleAZLod1eJHuqtJ4kpC%2Be4Ebhg4erQSD%2Fq%2FBAvr%2BntjvGBjhvSI5DBhnpjsyaGAemrLJtAi%2FIgtK6rBV0z4GsC6rCEk6EtivBa5W93KEEmQSJL%2B61E4Cs14AXIW968irq1n2r9jgH83tx3jk7GwUSwEcFjtToW6aORfj8frnHEs4VciGWu6xfNYlHCrmdSPDJUxTX%2FO61eSWLb1grhXUTkq4Cg0OnKk03eSnapa2QrfOM21dIlMZ28ZDQR7JqirzmLB653yVq9vu2Ul2kzIEnpkqeY9kfWRauQ%2F%2B0NLqXMl0nU80llUg2bB1rC5gyrBb5cBADMuFEAtwKHkWGhBHpjG0o2A4%2Bz%2F5DxRJzF9Jh82uj26Wq38CrF81z6Vpd0W8PeeP9wvInY4LQLiXWRY3zP1zgc3hFsAQ3upQZ%2Bmm3Yoy%2F07AEqSJfHgJ3CbK%2Bkhr%2BgQL%2BQWzzUrJddo4PlX6H%2FBdGqQoR8wvLeVF6BF1uu89j7K93bo8OY2ogYMgJ2XnvwhIsqUvvgzIl84p3a427yodP3rcJp7Tr8JFsL5kw7yd%2FF8MCpRQY6ivtESw7K%2BYpQu1MQNJmI9rUfaMLK18sMGOqUBgdye%2FDkjzsrQCQm3Mj%2FDuQBn3k9GbmmigQ39bz3H%2F2i3lAUJsWwy%2Beng%2F10kKfvEvh1i7Tz9hWwF0RiT7%2FopaZS9buoNr4GM0oBmLiMoil%2BkVDkz8IBLm%2BnhVY2i%2BsuqS%2Fz4ug4HKw9XssggqfoM54Lt1rJQyEP9ywyd556wrF4mRJP42wvGu4qUnbMOEo4TXguO432H6aNxEwLagTrdJzSWVyMs&X-Amz-Signature=842599c809ab07c0d500a22016b27fc3ffad64a576f71fd2ca7e40de4b16de2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
