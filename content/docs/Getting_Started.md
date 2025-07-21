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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43FCNGA%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSaH%2B0BALxtf%2BDdIh9dF2%2B5Y2UluUNrtOQI3c2Fc2W4AIhAJJLsfQkHL549DD24Fdn%2F5iae5p0GSp0iEw8rHwrE%2BVrKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB9tdqphWUYgNT2KMq3APEd5dNB%2FPUOPeoekzLvFaEmQTMLuC4T4w4fLmBgX%2FtXqbIYIQTE19lK2iey4K0dc%2F40A%2FmL4Kg%2BmeVR6vsWEkk9%2BW8grf5%2BiNw8B244UDTF7Q1R%2FG78wpGw4Ris3IzPDKWwacueeDzi4vQMQkEPcFlTVpYMk5eF5R4sCa%2F4GbZT9j%2BOEphSGBxH5gKRQKcnomX%2FLs7WwKx87sSxsvWTsJRoLDwDZXZuISDCsi6j3sMFRGSi%2BSAN2c34l%2FjACs%2BuQwwHpgb%2FSfnBI5493wDgSa%2BRruIYbesqsm6xLGB914P%2FyhNB8IbppzBV9ofVB6JghObZajbGDSF05QjZiFB3x%2F6abF5T7RF8rYxJ4EM9RJK9xOyr2CAVQWcXINQz3ERO72tKUdmbOtZlapTD0ROi0QfP8Y%2FFM0jOmApNf26Pwgn3exCNFR1a2NCP4zPZit3WtA94vRGN1HjEVJh20giIe3XGSzV6xISrpaV39i4MPVQglqsn1XMO0QL%2FI16nfdTqo1urRRLVgHE6SAke2G7hiEq0dd0HNtSAAQTDO%2BnMqfkSwiciIL8%2F4Aw2KranqLaIQu8A2zUQYOqOSg2MjocTRVSuaKb1G73EqVOpc2tvJtBtMpU3JHtCltG59E19TDzxvbDBjqkATum6QogjRbYxdKIQ4CzPVN9PjdsTrUhIJMk0u7x6VOd8ncP6qBd1Q5pHA8%2Bccv%2FiLz2iU45LCBKZY3PMSJAPkvic5Gtxzz7c8uNrY3cWPrxLJu4qr38Jo4tXGiz3CT9cqUr05Xj5lfsFKahuYXzcaDhInKRrtRdMAMnJ6F05sSffpdT55LvCRLsooX61RR6pVLKsV%2F62THU0vIn3QXaXUuryXsf&X-Amz-Signature=6d1421b0cebd2f747d674050e8295d20f63a796979706a13b2012bed0210fd5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43FCNGA%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSaH%2B0BALxtf%2BDdIh9dF2%2B5Y2UluUNrtOQI3c2Fc2W4AIhAJJLsfQkHL549DD24Fdn%2F5iae5p0GSp0iEw8rHwrE%2BVrKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB9tdqphWUYgNT2KMq3APEd5dNB%2FPUOPeoekzLvFaEmQTMLuC4T4w4fLmBgX%2FtXqbIYIQTE19lK2iey4K0dc%2F40A%2FmL4Kg%2BmeVR6vsWEkk9%2BW8grf5%2BiNw8B244UDTF7Q1R%2FG78wpGw4Ris3IzPDKWwacueeDzi4vQMQkEPcFlTVpYMk5eF5R4sCa%2F4GbZT9j%2BOEphSGBxH5gKRQKcnomX%2FLs7WwKx87sSxsvWTsJRoLDwDZXZuISDCsi6j3sMFRGSi%2BSAN2c34l%2FjACs%2BuQwwHpgb%2FSfnBI5493wDgSa%2BRruIYbesqsm6xLGB914P%2FyhNB8IbppzBV9ofVB6JghObZajbGDSF05QjZiFB3x%2F6abF5T7RF8rYxJ4EM9RJK9xOyr2CAVQWcXINQz3ERO72tKUdmbOtZlapTD0ROi0QfP8Y%2FFM0jOmApNf26Pwgn3exCNFR1a2NCP4zPZit3WtA94vRGN1HjEVJh20giIe3XGSzV6xISrpaV39i4MPVQglqsn1XMO0QL%2FI16nfdTqo1urRRLVgHE6SAke2G7hiEq0dd0HNtSAAQTDO%2BnMqfkSwiciIL8%2F4Aw2KranqLaIQu8A2zUQYOqOSg2MjocTRVSuaKb1G73EqVOpc2tvJtBtMpU3JHtCltG59E19TDzxvbDBjqkATum6QogjRbYxdKIQ4CzPVN9PjdsTrUhIJMk0u7x6VOd8ncP6qBd1Q5pHA8%2Bccv%2FiLz2iU45LCBKZY3PMSJAPkvic5Gtxzz7c8uNrY3cWPrxLJu4qr38Jo4tXGiz3CT9cqUr05Xj5lfsFKahuYXzcaDhInKRrtRdMAMnJ6F05sSffpdT55LvCRLsooX61RR6pVLKsV%2F62THU0vIn3QXaXUuryXsf&X-Amz-Signature=7e2c3e20e4ed21da6214461a209a0e31748b434d526325c963ae59c88df7580e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43FCNGA%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSaH%2B0BALxtf%2BDdIh9dF2%2B5Y2UluUNrtOQI3c2Fc2W4AIhAJJLsfQkHL549DD24Fdn%2F5iae5p0GSp0iEw8rHwrE%2BVrKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB9tdqphWUYgNT2KMq3APEd5dNB%2FPUOPeoekzLvFaEmQTMLuC4T4w4fLmBgX%2FtXqbIYIQTE19lK2iey4K0dc%2F40A%2FmL4Kg%2BmeVR6vsWEkk9%2BW8grf5%2BiNw8B244UDTF7Q1R%2FG78wpGw4Ris3IzPDKWwacueeDzi4vQMQkEPcFlTVpYMk5eF5R4sCa%2F4GbZT9j%2BOEphSGBxH5gKRQKcnomX%2FLs7WwKx87sSxsvWTsJRoLDwDZXZuISDCsi6j3sMFRGSi%2BSAN2c34l%2FjACs%2BuQwwHpgb%2FSfnBI5493wDgSa%2BRruIYbesqsm6xLGB914P%2FyhNB8IbppzBV9ofVB6JghObZajbGDSF05QjZiFB3x%2F6abF5T7RF8rYxJ4EM9RJK9xOyr2CAVQWcXINQz3ERO72tKUdmbOtZlapTD0ROi0QfP8Y%2FFM0jOmApNf26Pwgn3exCNFR1a2NCP4zPZit3WtA94vRGN1HjEVJh20giIe3XGSzV6xISrpaV39i4MPVQglqsn1XMO0QL%2FI16nfdTqo1urRRLVgHE6SAke2G7hiEq0dd0HNtSAAQTDO%2BnMqfkSwiciIL8%2F4Aw2KranqLaIQu8A2zUQYOqOSg2MjocTRVSuaKb1G73EqVOpc2tvJtBtMpU3JHtCltG59E19TDzxvbDBjqkATum6QogjRbYxdKIQ4CzPVN9PjdsTrUhIJMk0u7x6VOd8ncP6qBd1Q5pHA8%2Bccv%2FiLz2iU45LCBKZY3PMSJAPkvic5Gtxzz7c8uNrY3cWPrxLJu4qr38Jo4tXGiz3CT9cqUr05Xj5lfsFKahuYXzcaDhInKRrtRdMAMnJ6F05sSffpdT55LvCRLsooX61RR6pVLKsV%2F62THU0vIn3QXaXUuryXsf&X-Amz-Signature=8832b2143b3b4f760e4223f9b41dda5b571feb47e67ece1278e144c9bb629319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXH75LQ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM6jpVk1Iv5klIC%2F01uj%2Fa36OM8KpThP6svrQ4ac7dMAIgVt0F4yfkRQ7IX3ITweFjxunnRIZUbYz%2BWUG2RWWloJYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0s%2B9%2Frpjc2x9POxCrcA4nb%2BdJKvlxnOTfr58SOwDMLNDNdji0w4VIvpS122Aq5KoqZAR1z7teNEAoJfRIhzOYAost%2B7bPEObd5GhOPE4gxhiUD3TbG8LaO85hYxGL7i3o5iHaNrNyv%2FL0OIhJvF5Mt7DhcG%2FBhxxTTRkejgWSKV95Us094u0TCXKWiXn8oIeqHeHomLiog1lbUw%2ByB9pJzp96WZfZXWQp4NAG%2BYFPFNdBElLg7EOh9koht1k8Ps26srH7ao7SylWhkBE%2FkwuNoaZZOnXw23zxqyfjFFqA%2FopY1LTgmPAei%2Fw99BIp7Zmnmw7JlnMCMCdSUKabtIXyQ3LqXLskJr1L4T%2Fgq%2BpoT7nHz3zEv5VVIXVPgnnUncDHocuFJqQcfKJykSJU2bNg5t5YDYjsVGJvHosTqbkz5RqvTRZl7fUD2iR%2FRr%2FwGMq706HQ7X5URlDFJgmVwXWD0hW82f%2BpRPirYeFTYmlTWi8I9hj%2FaG6ZoXDFMLgNBqejXZ6ezySg5q%2F0XNQJvo%2FG2wVukeZqsuv43C%2FgrnUj564LfN733v79%2FnghM9SBAnepxlaSPWUMrbaK9nFJXv%2BAvo7oaqbK4kLRkDcyClMkg2A%2FzTCV%2FcOnxGY3C%2FW4L7%2BLLQ7luNGok%2FuxnMLrI9sMGOqUBSQsb69Um5eYllFwkpUJO7pW7RItObgUJ4RY6SEvu7NFoc0%2FIS8IM591NIFVOuffSSC%2BG6%2FveVaGyxcoSVuEmRDPm4mj82l31fAynEsjqX55ooaJZHtVc6MOXGinqDXcrDdRwn21cFgI9nKJogykevd17mae6LghgFwgH5mmoHIAYSMYCCcjAtKlDZvhXVhFfog8mFekh7gGtHp383p9JnE9JVOUr&X-Amz-Signature=4a3e65efb4e75dcacef55f4b9a3a42ebfd84c72c92d0d852cfb4e57d60926fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D25KDGE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdldMHgS3jLBW2%2F5jQm90UTkfGnHcMTxqeUirRzTsRjgIgayOKCuKjUJAMgJoTUr5OGovQtQhfVc3p%2BiDZM%2B2%2F6ucqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGc1f9UenvruS9NwtSrcAwLJdQ%2BxoseAxN4IgLPWISJggZJZNS3KCEoJA%2B27NNlo6329sCyyZfEARoPYjyhpEb%2BhZukVqNpzqENdOq4nsZ5643e1HluVonyiR8Dn08Uq79a9IOBD64s6rtJDS%2F6csoarS6JZ8D%2Bpv%2FJY94l66sbLxyPAqxrt9Cowo3lTqYcZc7u1cKQFX1jrKvxRv%2BEHAjbxWDCM7a1GK0n4ezlSlotwchmJcdHL2TA1WW9GfogsSyPC%2FD29RsY1Q1JMLq%2BSqZ1G%2B5T6Hj6oHkN9kIU6L5I6YHrIvlCXsUOx7AGDQJaUz0tz79F0DgQAMTXhJzqoXdXpxqbqIY%2F%2FppWNQ2zfIvisV%2BBLOYpSwMv6pUFP2%2Fqf9fKB%2FRgHFvDUJ3e9o0eOq1Pg77iOgK0zLIrJOByOI5JBlNsaTJ1EJ4ElKkWK9Jgwvari1%2FxTQRgioFAURVkfDWW2Ro6HYF50ji3QBcFaCPxP6N9p3FYUAtnDh06ARX8grZtBOfJD%2FkrS%2FOwVusK%2BsQa7E8JDYNKfZg1viytkiXNyQGtpShkSmfEMDaeOe47%2BQQqQXimNqBgIimBpOiSZwml0eKmMMwrbPiRhmA097fFuQEZgOQOdNtjS7frAHpbpama2J0KsBJEQzkg0MOfH9sMGOqUBDpXgtoZ%2BNmjYXmh%2F6Am5fjeZhUlgFZ3MqKXDHmolMsFtx%2FrXXEKuU7Xhgp1nbpCG58CIfI3sLt6%2B%2FwauimxqqWu3fn7YMPnfsWFLlRh5G98YCvblCUPjEbbvF2FlBDmlmpZhRz0pZnTMSxx0ugWxb6NQZsn%2Biri%2BAo2OcEHT%2FL9qfddu9OEvwhTdgsJq9s5qnonrFTq7X4Cx%2BZNfNNIN%2Fh4gA1UF&X-Amz-Signature=9d1b6469c6af6460e0240071cf37896a9347bc234dfa33db5c4ca3facb3316c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43FCNGA%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSaH%2B0BALxtf%2BDdIh9dF2%2B5Y2UluUNrtOQI3c2Fc2W4AIhAJJLsfQkHL549DD24Fdn%2F5iae5p0GSp0iEw8rHwrE%2BVrKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB9tdqphWUYgNT2KMq3APEd5dNB%2FPUOPeoekzLvFaEmQTMLuC4T4w4fLmBgX%2FtXqbIYIQTE19lK2iey4K0dc%2F40A%2FmL4Kg%2BmeVR6vsWEkk9%2BW8grf5%2BiNw8B244UDTF7Q1R%2FG78wpGw4Ris3IzPDKWwacueeDzi4vQMQkEPcFlTVpYMk5eF5R4sCa%2F4GbZT9j%2BOEphSGBxH5gKRQKcnomX%2FLs7WwKx87sSxsvWTsJRoLDwDZXZuISDCsi6j3sMFRGSi%2BSAN2c34l%2FjACs%2BuQwwHpgb%2FSfnBI5493wDgSa%2BRruIYbesqsm6xLGB914P%2FyhNB8IbppzBV9ofVB6JghObZajbGDSF05QjZiFB3x%2F6abF5T7RF8rYxJ4EM9RJK9xOyr2CAVQWcXINQz3ERO72tKUdmbOtZlapTD0ROi0QfP8Y%2FFM0jOmApNf26Pwgn3exCNFR1a2NCP4zPZit3WtA94vRGN1HjEVJh20giIe3XGSzV6xISrpaV39i4MPVQglqsn1XMO0QL%2FI16nfdTqo1urRRLVgHE6SAke2G7hiEq0dd0HNtSAAQTDO%2BnMqfkSwiciIL8%2F4Aw2KranqLaIQu8A2zUQYOqOSg2MjocTRVSuaKb1G73EqVOpc2tvJtBtMpU3JHtCltG59E19TDzxvbDBjqkATum6QogjRbYxdKIQ4CzPVN9PjdsTrUhIJMk0u7x6VOd8ncP6qBd1Q5pHA8%2Bccv%2FiLz2iU45LCBKZY3PMSJAPkvic5Gtxzz7c8uNrY3cWPrxLJu4qr38Jo4tXGiz3CT9cqUr05Xj5lfsFKahuYXzcaDhInKRrtRdMAMnJ6F05sSffpdT55LvCRLsooX61RR6pVLKsV%2F62THU0vIn3QXaXUuryXsf&X-Amz-Signature=b55d5875e4ed412c8d9f94a2a713913e27747bb35bda1a2e097fa1d32280dde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
