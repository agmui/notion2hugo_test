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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFWWIP3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBTkmpybikZxbvMZT6YSSmWfRpTADHClenwoAjlRLcOBAiAtMCquYfHZvjYznj9fsAVxU7kODNpzP7d3abGuFYm5XSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM2thb1M29sbzTTRv8KtwDs90SoQRF%2FSv9kc%2F76O9%2B5unzKzj3Px5vtZfJNc%2FV%2Bg7xXUO%2BMwK7jYdIxtbl%2Fi0OYGzNZgSB9G63vrHC2Q9WlLVwP6vK2RMreZ0apVXMnslcpEAj4DX64gqRehRM4Nlv5dZrK%2FFeb4tjTMdgrZf576xdtnQ1Ql%2B0yIxDAgFnC%2FQPFhUHoF2gNzp%2FDEdQs%2BJHMPXzsZYksT6pzQG8u0CL6GhkR%2Fh5ayV78t5JroHWKTb%2F4O1TeIJiG1ivF5EYX035BKQO0mLjisOrb9DzExhoYF%2B1ycyYaPVv2%2F68F3nRajmz61nimkjphfwYocG6YFW%2B%2FP1eGpc41dwdy4qDcBvBtso7oWAqnp7Bboq2J2k7NIxZYO4%2BWPbmcFa4qIi4Cv9nQzwlhdsHcD%2FW9q2h7pnXuj7SYZukxYjp9S%2BW2u9lGM0E9SRZ5E6yfGXVwT1EauEd6sY0J4DvEc6ztGapyeR56pLLMeIZ0vdIqsnb4X3YLEDUoNCR3D5Ip0fyO%2BrwExn94ebRgtZr7aLJXL%2FfmcfEC7MHXzmkS8EhqkZntUrtiB3nAMSIzKFudvoU4TydQDL969VHVqmLaLLG2XsLFI6idhJXolcdb%2BrDxd2psnHBnShc%2FPONMtTz8nizolowrc3owgY6pgEcHjH%2F3ar6XKmT4kpDWC6FKgx8xhnAcrqnbdzPNvN6GR9aBl7pD3suAUCdfsKqFIEeOGqlsD89mcaI95foYcWs284lm60%2BoA3fGjM8oARB2S4xYeBxkes5k3gpiyse4zDu20suDFjWVn8yiBqsikNQU4NQkBH5zX09ZEBXaKdYyIfIjnuioLFyLEIh%2FM2Ya5dOWkTTrVYiWtsBafspyt85BifSTTOz&X-Amz-Signature=03027942799148c7af5a72695023fa1d84d5fdf2627e5f614fd636ba29a083fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFWWIP3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBTkmpybikZxbvMZT6YSSmWfRpTADHClenwoAjlRLcOBAiAtMCquYfHZvjYznj9fsAVxU7kODNpzP7d3abGuFYm5XSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM2thb1M29sbzTTRv8KtwDs90SoQRF%2FSv9kc%2F76O9%2B5unzKzj3Px5vtZfJNc%2FV%2Bg7xXUO%2BMwK7jYdIxtbl%2Fi0OYGzNZgSB9G63vrHC2Q9WlLVwP6vK2RMreZ0apVXMnslcpEAj4DX64gqRehRM4Nlv5dZrK%2FFeb4tjTMdgrZf576xdtnQ1Ql%2B0yIxDAgFnC%2FQPFhUHoF2gNzp%2FDEdQs%2BJHMPXzsZYksT6pzQG8u0CL6GhkR%2Fh5ayV78t5JroHWKTb%2F4O1TeIJiG1ivF5EYX035BKQO0mLjisOrb9DzExhoYF%2B1ycyYaPVv2%2F68F3nRajmz61nimkjphfwYocG6YFW%2B%2FP1eGpc41dwdy4qDcBvBtso7oWAqnp7Bboq2J2k7NIxZYO4%2BWPbmcFa4qIi4Cv9nQzwlhdsHcD%2FW9q2h7pnXuj7SYZukxYjp9S%2BW2u9lGM0E9SRZ5E6yfGXVwT1EauEd6sY0J4DvEc6ztGapyeR56pLLMeIZ0vdIqsnb4X3YLEDUoNCR3D5Ip0fyO%2BrwExn94ebRgtZr7aLJXL%2FfmcfEC7MHXzmkS8EhqkZntUrtiB3nAMSIzKFudvoU4TydQDL969VHVqmLaLLG2XsLFI6idhJXolcdb%2BrDxd2psnHBnShc%2FPONMtTz8nizolowrc3owgY6pgEcHjH%2F3ar6XKmT4kpDWC6FKgx8xhnAcrqnbdzPNvN6GR9aBl7pD3suAUCdfsKqFIEeOGqlsD89mcaI95foYcWs284lm60%2BoA3fGjM8oARB2S4xYeBxkes5k3gpiyse4zDu20suDFjWVn8yiBqsikNQU4NQkBH5zX09ZEBXaKdYyIfIjnuioLFyLEIh%2FM2Ya5dOWkTTrVYiWtsBafspyt85BifSTTOz&X-Amz-Signature=f9984886bc29e6cdfe804c19f5dd4882ab09d8602cb57f4ef79c38aee7bebe18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFWWIP3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBTkmpybikZxbvMZT6YSSmWfRpTADHClenwoAjlRLcOBAiAtMCquYfHZvjYznj9fsAVxU7kODNpzP7d3abGuFYm5XSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM2thb1M29sbzTTRv8KtwDs90SoQRF%2FSv9kc%2F76O9%2B5unzKzj3Px5vtZfJNc%2FV%2Bg7xXUO%2BMwK7jYdIxtbl%2Fi0OYGzNZgSB9G63vrHC2Q9WlLVwP6vK2RMreZ0apVXMnslcpEAj4DX64gqRehRM4Nlv5dZrK%2FFeb4tjTMdgrZf576xdtnQ1Ql%2B0yIxDAgFnC%2FQPFhUHoF2gNzp%2FDEdQs%2BJHMPXzsZYksT6pzQG8u0CL6GhkR%2Fh5ayV78t5JroHWKTb%2F4O1TeIJiG1ivF5EYX035BKQO0mLjisOrb9DzExhoYF%2B1ycyYaPVv2%2F68F3nRajmz61nimkjphfwYocG6YFW%2B%2FP1eGpc41dwdy4qDcBvBtso7oWAqnp7Bboq2J2k7NIxZYO4%2BWPbmcFa4qIi4Cv9nQzwlhdsHcD%2FW9q2h7pnXuj7SYZukxYjp9S%2BW2u9lGM0E9SRZ5E6yfGXVwT1EauEd6sY0J4DvEc6ztGapyeR56pLLMeIZ0vdIqsnb4X3YLEDUoNCR3D5Ip0fyO%2BrwExn94ebRgtZr7aLJXL%2FfmcfEC7MHXzmkS8EhqkZntUrtiB3nAMSIzKFudvoU4TydQDL969VHVqmLaLLG2XsLFI6idhJXolcdb%2BrDxd2psnHBnShc%2FPONMtTz8nizolowrc3owgY6pgEcHjH%2F3ar6XKmT4kpDWC6FKgx8xhnAcrqnbdzPNvN6GR9aBl7pD3suAUCdfsKqFIEeOGqlsD89mcaI95foYcWs284lm60%2BoA3fGjM8oARB2S4xYeBxkes5k3gpiyse4zDu20suDFjWVn8yiBqsikNQU4NQkBH5zX09ZEBXaKdYyIfIjnuioLFyLEIh%2FM2Ya5dOWkTTrVYiWtsBafspyt85BifSTTOz&X-Amz-Signature=10cd74c9e4d93240c69b3e8746564331d9c0b32e635736631dc60988321dec63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDSS4BF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEsM8oniRu2YTuB6IZMlPUOfVc70g%2FUMjqVbRGQ5sPIdAiA%2BXhuDdy95aKxNEKCqq0cEBvGgLuqlU6LazPXA%2BZGqUir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMhKcWbs7W1UZzNkZLKtwDrnMGR%2BNFwfd0pdFJtDLVucDd%2BCN6Q%2BiXM8hepAZw9ZbOB9%2BmhtpXpOmwdKItBf%2BrEpfd6ShcEQMTfJjenjbzFPkej5ySOWmS7GOD7%2FUF1KR7JIrik1RGVbPyKJBb%2BBwLgqy16Pcziegoh9pJYg2qXPfk87zvs9YxTMa%2BjinGcgK%2FIfB1d5cqfR9JJxDfLC0Mg%2BHcAqL4URyAK859f4qTOofDx%2FVAjNUaZaCJbSb3zzdt8MdERFNZveYMlKDMOb5jtAKLCiqu7FDP71xiIjKqTsQwrOMhVqXT03aQ8l0NZR7zEucFUgZYLvWR1yjRFOgqn4HxJgVoYdwfTER5DXveZJgcxstxv02A%2BKFmJ09QCZ5AsCuYnSx6f5PVLJl3djdbnfKNZsKfggwCwCnhfKJkisywkKCxR6FhPOkYHkAD%2Bvt7ugvK89h%2FKcdLxfODuSOx3WZI5BRkwmzDXmimbb30NpbyaiLOS20VJDqzN8hUv9rNSVYssrZnLtJt07dCA1msqGwDqV6%2FMmqxqGAtlStCsC6pGhBIr6aGTGGZv1yBU0T%2FiBVoJTcTDvTTGlbwLSHe225rXf7jCnxxmgtnJ1oErPpT%2Blw0fCNJN3SHXdOYsYZXkKoy1fhcs7Qa%2F6Awhc3owgY6pgE763eiOz5w5nBKH65e7OYII293wSZKI3Z6DDZHSRjbsAF8Z3b3qxUzAANlPce%2FnS2r9coGNR1TqrhCfR9%2FLInBh7jjPRaTeulnGGjWb6%2FkD7KcHlq%2BX4hBzIpUTFIoSvrZs4lTIvLAOdJ4IOfPqFCPhrnvrhEeChPadBbNHX379CnoT8vWNv6RAXmofw888Lu2oVuitzdErNIvtHkY7mjjdob6OK3q&X-Amz-Signature=bcb21c007e70f39bf0c96c63d6ea26490f71e55f5743a946099b9df8d750ea38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ62SDV3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCRfbZIhMvZNJZFaDL%2FsAuF8lhkTQJw%2FpwX8kF6B1jhygIhAPz6RmCub6j1CTcv2icEeW7M67d1awGKvIJnBSCIIcVwKv8DCCMQABoMNjM3NDIzMTgzODA1IgzMd8h7PeFc1NLsppgq3ANVV4TDlaTcwLFRPBm17Yt25haEYwBub6bHHGvvxY37Z8BqwTyeG44zv3EWob4rheeV9f9lixYpESH5iZcjd5%2BF8HLI2FmlU65Akf6cyq%2FjcHAJAySIBLMEgGlUxB5u658feKz2kTnDkzwBQS2hS64kyMHDRVl9b1lwVxmBPNeiA54LGHF30CF9IrrQduwYjqyMe42ArTeSyhRt5UwyamzhQ0DMqAo2f16DvmrW0W%2FrqmZXxkv0Q4bkFwRO0U5ysJhXUw8qiWA8XSA9%2BaSci%2FLjKREQP%2BCAUyGmkc6rpiB4tY%2BuJP4cBi3pvfhkkppEMRh3w79pf528qeauwSu5UUH3UK7G5tYjBsFnzaGXY9YdyOtEQYkhojBA46BuDG%2F8j5EpHnLixV2Lg2x2rbDkFS2J0FGALO%2BSUUOBlX2TXmZMXyMI%2FtGj7sV78nGH7u9RK3bomS5%2Fnn5lC7TGZs%2Fa%2F9gNgad9Adher%2FsKAtNkRoB6KxLvB2UVKXieAJDVIEXxOWynfc22L%2BBdPTysb2NE5vXNj4sg%2FlbxsTZCEWW0ZJNa6Q6Kebq1gFXbQKm10iOYyWtixzGiH1NpZn5Z5ogtjvzEGQwo2oxQcu%2FzuAwQzzWpPfPA4BIGo9LTpPi61jDulOjCBjqkARcIyMWHV6mUS4Rzb9vPB9JqAkKxCLGt8qxxhhPq7lVJnYSfrb8sQ%2FWVM9qws5q9EtO6d1Gcbva%2BujTR%2F4S4hx4pCvqfc7VDldXeBFEgZFlHxwWlkr4prXaqgwYFbg%2BPB%2F0Waa%2F9aTiUH1ZtaZBi2oNafJxzzys2f7uFum3kjXPvz4WlAbQ21hQrR0pBBzGp9Ls3YKpXUTQuNEQNE34A17%2BiTBEx&X-Amz-Signature=f92c5bf240d6b8714a95ddfa82db6fee5bb6f410d9f2cf476780dc1de6684f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFWWIP3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBTkmpybikZxbvMZT6YSSmWfRpTADHClenwoAjlRLcOBAiAtMCquYfHZvjYznj9fsAVxU7kODNpzP7d3abGuFYm5XSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM2thb1M29sbzTTRv8KtwDs90SoQRF%2FSv9kc%2F76O9%2B5unzKzj3Px5vtZfJNc%2FV%2Bg7xXUO%2BMwK7jYdIxtbl%2Fi0OYGzNZgSB9G63vrHC2Q9WlLVwP6vK2RMreZ0apVXMnslcpEAj4DX64gqRehRM4Nlv5dZrK%2FFeb4tjTMdgrZf576xdtnQ1Ql%2B0yIxDAgFnC%2FQPFhUHoF2gNzp%2FDEdQs%2BJHMPXzsZYksT6pzQG8u0CL6GhkR%2Fh5ayV78t5JroHWKTb%2F4O1TeIJiG1ivF5EYX035BKQO0mLjisOrb9DzExhoYF%2B1ycyYaPVv2%2F68F3nRajmz61nimkjphfwYocG6YFW%2B%2FP1eGpc41dwdy4qDcBvBtso7oWAqnp7Bboq2J2k7NIxZYO4%2BWPbmcFa4qIi4Cv9nQzwlhdsHcD%2FW9q2h7pnXuj7SYZukxYjp9S%2BW2u9lGM0E9SRZ5E6yfGXVwT1EauEd6sY0J4DvEc6ztGapyeR56pLLMeIZ0vdIqsnb4X3YLEDUoNCR3D5Ip0fyO%2BrwExn94ebRgtZr7aLJXL%2FfmcfEC7MHXzmkS8EhqkZntUrtiB3nAMSIzKFudvoU4TydQDL969VHVqmLaLLG2XsLFI6idhJXolcdb%2BrDxd2psnHBnShc%2FPONMtTz8nizolowrc3owgY6pgEcHjH%2F3ar6XKmT4kpDWC6FKgx8xhnAcrqnbdzPNvN6GR9aBl7pD3suAUCdfsKqFIEeOGqlsD89mcaI95foYcWs284lm60%2BoA3fGjM8oARB2S4xYeBxkes5k3gpiyse4zDu20suDFjWVn8yiBqsikNQU4NQkBH5zX09ZEBXaKdYyIfIjnuioLFyLEIh%2FM2Ya5dOWkTTrVYiWtsBafspyt85BifSTTOz&X-Amz-Signature=90473bcc72393283d51e43b4b41f08cee0eb39ae2ee8b8d4f19ae28a2a6b7bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
