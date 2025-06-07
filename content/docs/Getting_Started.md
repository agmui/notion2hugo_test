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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRERGFX4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV3qI7GVCH2vIMFjqxGMVJY57whtFsxSpHCYEowWNb%2BAiBx%2BF4SJk5vdh6eeJmVmn6ZNULmrI821g3HuY%2FeD%2Fv1bCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX27l2km7Eta0ZjpTKtwDeOc2Wlm09uCE1UeA56m6GFpD8i6QbIQzGZHjERCf0tGKb2KwSe1t7STic%2FpV4I%2BnJwChpJVZgLhtLB%2BxS3Jx8d%2BDNK6LynzRIXMyMFammemLa7yr4sfDqWm9FhSi43klr4Erj7%2FWiZDjN7SutR34yj51jKezyrMnYfhRC3sGCeEK7uCJoRG%2Bx5EKlVAI%2Fw62r7QDH6UgSJcYv8Mc%2B%2BzRoY41P9pS2z9brnFy2duSF%2Bjc8IVSZguIULpww%2FgT2o7Bcn%2FiptONklr10t1EvyZS0vAW4bXiwz4am0zk2s2jkMGspVzYHeAIX9gMtQNnNV3vS3dc3GyroKOWZJkn2DaZ15jyCK9Rgc%2B%2BNdjzVrrC2AsxMZWH9bU7LduhUVoNMRMM9j2UkuLZAH43BfgqNymOXQtZM3nae7BMU%2FG5xu9gHphKSQbPI5kmq7xGnYHUnp2iPYVXiGRYD2W5f4tqc2ydHkZIia8P6cco9GSo6LeSvCd7TaCPRscRD7nx7D8Ar%2FPpnq%2Bq%2Fosr%2BS1YQBYA%2FNKqUM5bly29VB8NB66RLd0OC0PFjzbYwFd5RCntJg2eiLREiICgHUqLxOYdG6%2B86W%2FP1sQ3hjb2v9pKlEQvG1NyCYP2CQx1bFv4VEg84lAwjNOSwgY6pgEaERGI%2Fs20SZCJ8QrPZ7mpmZOCg60H4a%2BgTWwEx4lDQubBlNwvaKwx0IddDbgZ%2Fn2SDbITtNGaOAYpi0eN9btLjCrUFyq5oqlKlmody1EuFdCaSNqYRKICiGOMkirgEmW2%2FtfLqtIZkyrK%2F8fdZPr9gGDz2GIYPrpDgQhGPxc7zno8KbFGvKMYiOA63PvRfiPMQbYvWpP8bcVPP%2B%2FdDEhKQZxLa2Ph&X-Amz-Signature=a4d365f6dfa20ca1d06e680f13c51a34a1ef7cd03736c2f1b83087d33d7950e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRERGFX4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV3qI7GVCH2vIMFjqxGMVJY57whtFsxSpHCYEowWNb%2BAiBx%2BF4SJk5vdh6eeJmVmn6ZNULmrI821g3HuY%2FeD%2Fv1bCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX27l2km7Eta0ZjpTKtwDeOc2Wlm09uCE1UeA56m6GFpD8i6QbIQzGZHjERCf0tGKb2KwSe1t7STic%2FpV4I%2BnJwChpJVZgLhtLB%2BxS3Jx8d%2BDNK6LynzRIXMyMFammemLa7yr4sfDqWm9FhSi43klr4Erj7%2FWiZDjN7SutR34yj51jKezyrMnYfhRC3sGCeEK7uCJoRG%2Bx5EKlVAI%2Fw62r7QDH6UgSJcYv8Mc%2B%2BzRoY41P9pS2z9brnFy2duSF%2Bjc8IVSZguIULpww%2FgT2o7Bcn%2FiptONklr10t1EvyZS0vAW4bXiwz4am0zk2s2jkMGspVzYHeAIX9gMtQNnNV3vS3dc3GyroKOWZJkn2DaZ15jyCK9Rgc%2B%2BNdjzVrrC2AsxMZWH9bU7LduhUVoNMRMM9j2UkuLZAH43BfgqNymOXQtZM3nae7BMU%2FG5xu9gHphKSQbPI5kmq7xGnYHUnp2iPYVXiGRYD2W5f4tqc2ydHkZIia8P6cco9GSo6LeSvCd7TaCPRscRD7nx7D8Ar%2FPpnq%2Bq%2Fosr%2BS1YQBYA%2FNKqUM5bly29VB8NB66RLd0OC0PFjzbYwFd5RCntJg2eiLREiICgHUqLxOYdG6%2B86W%2FP1sQ3hjb2v9pKlEQvG1NyCYP2CQx1bFv4VEg84lAwjNOSwgY6pgEaERGI%2Fs20SZCJ8QrPZ7mpmZOCg60H4a%2BgTWwEx4lDQubBlNwvaKwx0IddDbgZ%2Fn2SDbITtNGaOAYpi0eN9btLjCrUFyq5oqlKlmody1EuFdCaSNqYRKICiGOMkirgEmW2%2FtfLqtIZkyrK%2F8fdZPr9gGDz2GIYPrpDgQhGPxc7zno8KbFGvKMYiOA63PvRfiPMQbYvWpP8bcVPP%2B%2FdDEhKQZxLa2Ph&X-Amz-Signature=4a161efc41c790f0b30c5c3a4c0c861cbb3d65d153a113246952f9b2cae5b65a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRERGFX4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV3qI7GVCH2vIMFjqxGMVJY57whtFsxSpHCYEowWNb%2BAiBx%2BF4SJk5vdh6eeJmVmn6ZNULmrI821g3HuY%2FeD%2Fv1bCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX27l2km7Eta0ZjpTKtwDeOc2Wlm09uCE1UeA56m6GFpD8i6QbIQzGZHjERCf0tGKb2KwSe1t7STic%2FpV4I%2BnJwChpJVZgLhtLB%2BxS3Jx8d%2BDNK6LynzRIXMyMFammemLa7yr4sfDqWm9FhSi43klr4Erj7%2FWiZDjN7SutR34yj51jKezyrMnYfhRC3sGCeEK7uCJoRG%2Bx5EKlVAI%2Fw62r7QDH6UgSJcYv8Mc%2B%2BzRoY41P9pS2z9brnFy2duSF%2Bjc8IVSZguIULpww%2FgT2o7Bcn%2FiptONklr10t1EvyZS0vAW4bXiwz4am0zk2s2jkMGspVzYHeAIX9gMtQNnNV3vS3dc3GyroKOWZJkn2DaZ15jyCK9Rgc%2B%2BNdjzVrrC2AsxMZWH9bU7LduhUVoNMRMM9j2UkuLZAH43BfgqNymOXQtZM3nae7BMU%2FG5xu9gHphKSQbPI5kmq7xGnYHUnp2iPYVXiGRYD2W5f4tqc2ydHkZIia8P6cco9GSo6LeSvCd7TaCPRscRD7nx7D8Ar%2FPpnq%2Bq%2Fosr%2BS1YQBYA%2FNKqUM5bly29VB8NB66RLd0OC0PFjzbYwFd5RCntJg2eiLREiICgHUqLxOYdG6%2B86W%2FP1sQ3hjb2v9pKlEQvG1NyCYP2CQx1bFv4VEg84lAwjNOSwgY6pgEaERGI%2Fs20SZCJ8QrPZ7mpmZOCg60H4a%2BgTWwEx4lDQubBlNwvaKwx0IddDbgZ%2Fn2SDbITtNGaOAYpi0eN9btLjCrUFyq5oqlKlmody1EuFdCaSNqYRKICiGOMkirgEmW2%2FtfLqtIZkyrK%2F8fdZPr9gGDz2GIYPrpDgQhGPxc7zno8KbFGvKMYiOA63PvRfiPMQbYvWpP8bcVPP%2B%2FdDEhKQZxLa2Ph&X-Amz-Signature=45f7f33a89a56d78f201e611122d2aba3635ac86e76a8c75da4c2120c8abae8f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5L5VCV7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQPA0PTeGWbRp7Zy43moCYRR4uh0YgyMzLUuAEv8xrSAiAK2IsAPDB5E%2FuiYUwR%2F0gQpqb0U4Aiou2BjmNUuNfmwSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMnqDOSskbxoJPHsTzKtwDZ5l1WHB7w9OWj40iBRqYYjbmrmmFtx0mpF2W1tJ5jl9C5Gje6TQhwZwrR5Kqm8c7g5gxPhtgT0cSTxOP7l5Y%2B1H5HlM45MrQKrVNScP03DYkmE16fiLO8RA5BFvyHJr9u%2BB%2FHinuTyJd1rUuk%2F11tyGuhklqPEchx89DgmyOObHKvI35ZIp%2BI%2FdtgajstBeTmzmu%2BhEjYFmNZBpQTJDaDyy2wOZEhxCSDsiPOJdKOCsCKt9gT9Hv0yXaXWZky2fxv0AZzIHeSrSbQXB0jFDIR6rkJrAoTZ%2BnAla9ZDQts9uxSBjGFkKTUEq%2FACrLmr6cKgOR36zeKMf5nMwF5PcGmrDr%2FMAeKBm4u8yJKDkXfa%2Fubk2mBz9GIfQI%2FVVOIu77M%2BmG1CMH6Ua%2BvlieavbDKhroBXmKkbVcBmq%2FiBXG2I3oOZAaO31G%2FVJvIgA60ueG9NkkHHMjTo7bebij5UYRfSSxyS6tr68yPM9A2oeIPPRzXDZBIRzbPikps4elNffGUK10WsAneA8RBhghhIacmjGylUdNcDcEiNbcKYHeDd9ZdSr0iEj%2Bw3HBGDXS15zvORo0ib9uO2VbaGRu7XOn%2FXUC3WrW1NeI%2BOwG4xvNyxAfnowJUpmLs%2BxjLDUw6tKSwgY6pgGo211gbR0yCK2%2FAHF4cLJ1dKnAz5g%2BD2ymMov1h%2BKXMfwd8mpc%2BdWbjobDE30PlhRFOQJCrS4yf50MOfZpT8VIbFSXcGJer9v0OEWzpe%2FCJm4fQ%2BGgYPrlNQl%2Fbjg2eeapMUAqkwwiBLijRY7K3qZ8LOcgeEAJldHlHnUHD9lL8kyOFr%2F2msDJFpLv43Slqk67Lxhf0KntNuGevj6snc3mFZNo%2FZxk&X-Amz-Signature=e893ea9eb19604a11880a12dde51320ff12c552ff1b3ba20cdbdbbc58941322b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TE2MABQ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiSZpyBy8TyeGBZ0KkPazLIWosJLMWImcQFF3ovDJtvQIgeotXnw7ymqX3ZiSwLOMYAbcu1bHXHItq6MNdNnXpjrgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFqcfqeTBK7FAqRVgyrcA1MD%2FqfVV4WE6OXt4HQkPwH6Er%2FP%2Fxkc4YFHKhHJsWP7TQI7S8%2FWvWql2uOJRWMZQfwK2ctnM3ClCAU7fqeIP%2FyZAUsd2JEwQbPstHBetq0ThdN2OJlWVZ3%2FlECaGpU7RacD%2FHQo3J98TDTIkWfGQJFgHT6LePFF9jlwsn6zg6E%2BWGGP4%2FBOaxcdhir05f0vM2BwTvD6rBf3fK3d2rSx2l9T2fJ5WEbW5huLpF4MvRSh4AN7IBfIjktnPI5wERHYY4VHIYRqczjun8qhejVqvB0rjo52oQKXAFutl8bhClB5u0NaipXntPWlqPtQKjTyrdj7ArSY5PBb236kJVGo7FRkPHLTnSoAHq8mQ22euft8sXRWhTPPVSPnVrRxkfNFxSzvaoBHhkWA%2FB23O87n0%2BdRHhbbhrn1PlkSuqSN7WAyhD67sRZ2g0xxoPLg0ZwOl7w%2BIgvFGhTXkiV%2F7UMP6y7gnvnye31S7L0s%2BgYdn%2FF8PSUNLFUxvFgMJlo8p7jo1mo9w9e1AQJZ0GllPOIV5%2FbjqJEzuGn9kMde2qX95rdMwctwLGK2%2BmhMqDabgGDGHMjqp8wxvCEszlDrTB83ikaZDamm%2FUURdVt9VIBXPqTTV%2B6zr8TuLLbr7OgwMO%2BVksIGOqUB%2FRqhUO2EvSzvX1QMy0yi0uMOhfSUkbbnJtMg7Le6JoDLGk9YCDxna%2FqZPMV2Aa0hU0luPvJDr33yoshjVxGIXTkcRAdD8bdrg6mB%2FvagsbtoXy3WkqrU%2BkkuRB1FZC1xNE1Y4wEyLkFcWFIvWlSxgRvxCf3HrtQ16RMvBKcSl0r9QK9LJ4Ppp6BCxzW7zbRZjy7sTFoMhJXFVNMFaMvXjkuPNWy2&X-Amz-Signature=a178b5166325c68e381f5aa6dea48c87d897d7583a9ca8d75d874859f46b4182&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRERGFX4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV3qI7GVCH2vIMFjqxGMVJY57whtFsxSpHCYEowWNb%2BAiBx%2BF4SJk5vdh6eeJmVmn6ZNULmrI821g3HuY%2FeD%2Fv1bCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMX27l2km7Eta0ZjpTKtwDeOc2Wlm09uCE1UeA56m6GFpD8i6QbIQzGZHjERCf0tGKb2KwSe1t7STic%2FpV4I%2BnJwChpJVZgLhtLB%2BxS3Jx8d%2BDNK6LynzRIXMyMFammemLa7yr4sfDqWm9FhSi43klr4Erj7%2FWiZDjN7SutR34yj51jKezyrMnYfhRC3sGCeEK7uCJoRG%2Bx5EKlVAI%2Fw62r7QDH6UgSJcYv8Mc%2B%2BzRoY41P9pS2z9brnFy2duSF%2Bjc8IVSZguIULpww%2FgT2o7Bcn%2FiptONklr10t1EvyZS0vAW4bXiwz4am0zk2s2jkMGspVzYHeAIX9gMtQNnNV3vS3dc3GyroKOWZJkn2DaZ15jyCK9Rgc%2B%2BNdjzVrrC2AsxMZWH9bU7LduhUVoNMRMM9j2UkuLZAH43BfgqNymOXQtZM3nae7BMU%2FG5xu9gHphKSQbPI5kmq7xGnYHUnp2iPYVXiGRYD2W5f4tqc2ydHkZIia8P6cco9GSo6LeSvCd7TaCPRscRD7nx7D8Ar%2FPpnq%2Bq%2Fosr%2BS1YQBYA%2FNKqUM5bly29VB8NB66RLd0OC0PFjzbYwFd5RCntJg2eiLREiICgHUqLxOYdG6%2B86W%2FP1sQ3hjb2v9pKlEQvG1NyCYP2CQx1bFv4VEg84lAwjNOSwgY6pgEaERGI%2Fs20SZCJ8QrPZ7mpmZOCg60H4a%2BgTWwEx4lDQubBlNwvaKwx0IddDbgZ%2Fn2SDbITtNGaOAYpi0eN9btLjCrUFyq5oqlKlmody1EuFdCaSNqYRKICiGOMkirgEmW2%2FtfLqtIZkyrK%2F8fdZPr9gGDz2GIYPrpDgQhGPxc7zno8KbFGvKMYiOA63PvRfiPMQbYvWpP8bcVPP%2B%2FdDEhKQZxLa2Ph&X-Amz-Signature=f93c0e537d7e43ea5430afb7f42f156dffe2936d8a709fbd6643c4d306a752c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
