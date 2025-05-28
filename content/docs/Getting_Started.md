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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SP2VSJU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEutdAen%2FF9wcWd5GP7NWQP01vXldMaA87zm1%2B0k0pY8AiEAlNvkoZo%2FA9cV%2F%2FMyZ0D7Q8s3vtaz2XSN8XaeitlAtH0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBjR1pPQfU29vjMcTSrcA2jr6MLh5k9XFj1AOPKdAQ3AUgPdJSpMYG1WLdI5Zxqoz3LSTawskpW2ofLJGdr%2BZam4n0D9yUXwSEflWRaqCNWvX5y4K%2BXyryurB02eQuBqglN3Nhzt80m2gJ53T8Tv5bbOf6TJJnDWJAiWKonfP5WCvgkXzJOIsVuHWobo0pFtXr%2BXgQu1bbtdUX3ACGQOEY4LSG%2FID%2FM6TK%2B9oON%2FeBhEUZQbMCNIbXs4UFzgq6Eh%2FQzLXCu0w8OaBAkn84Cp0ypvYAiGESMQbnxWW9yw6OsccGh6zpy%2BuEtcHnZNcsa%2BeHe8ed5LwPtAjMwKGc4xpKtqTaEaT%2BmyfKCWZVu9b8K5Gk9Dx%2FqWy99aSCfdoJsaPOBUYVwEo%2FsorB2FtdIIXQH51RgIK9bOs4DY5FoQuAtjAzeh%2B0qfJCuMW9kMNXXgWUxLwbdYdUiTQ2hBBARdOnzsUXmaMytW8ZX2qHXFR8IAJ0HvlkV6bo%2B14FklfH5qy4rd88lgrjM%2FNTEar6YIxJau4cB0WQVN0kGlN452pR4VAf6stuF1MnouYT1mFittFJevzK2kLfFHn5zHM1RV0NQhrVOgXnNG3fLY9v7Z1xiOKQDlzVUWQQj0AB8Nw5t6nVjjs6OsyGYvF7Q6MIal2cEGOqUBAMy77moWpCAYLpmJTPPdJXUw3hfb%2FCSAlr6jiAcS1ZnH1nqWPteFh1dNoDlTvHOmhwypG1OpBMLT6d5yyirG1iUyHqnucaYTwc%2F28mcNOkUd358t%2FalW5ak9OObDZNh0VuTaFe%2BgaeZHsahXFdnsItDgD%2B7bU3BnzxR0ZPB4PeYr4Hht%2FTX1IIArwTYm5UWnFIzCJAMZCqu4l0jHoYaM5YGgKr7I&X-Amz-Signature=910b7b74f9fdea44795faafc5e3fe0ce8f0f07ab3d3850f3c5cf71ffb3bc5f78&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SP2VSJU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEutdAen%2FF9wcWd5GP7NWQP01vXldMaA87zm1%2B0k0pY8AiEAlNvkoZo%2FA9cV%2F%2FMyZ0D7Q8s3vtaz2XSN8XaeitlAtH0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBjR1pPQfU29vjMcTSrcA2jr6MLh5k9XFj1AOPKdAQ3AUgPdJSpMYG1WLdI5Zxqoz3LSTawskpW2ofLJGdr%2BZam4n0D9yUXwSEflWRaqCNWvX5y4K%2BXyryurB02eQuBqglN3Nhzt80m2gJ53T8Tv5bbOf6TJJnDWJAiWKonfP5WCvgkXzJOIsVuHWobo0pFtXr%2BXgQu1bbtdUX3ACGQOEY4LSG%2FID%2FM6TK%2B9oON%2FeBhEUZQbMCNIbXs4UFzgq6Eh%2FQzLXCu0w8OaBAkn84Cp0ypvYAiGESMQbnxWW9yw6OsccGh6zpy%2BuEtcHnZNcsa%2BeHe8ed5LwPtAjMwKGc4xpKtqTaEaT%2BmyfKCWZVu9b8K5Gk9Dx%2FqWy99aSCfdoJsaPOBUYVwEo%2FsorB2FtdIIXQH51RgIK9bOs4DY5FoQuAtjAzeh%2B0qfJCuMW9kMNXXgWUxLwbdYdUiTQ2hBBARdOnzsUXmaMytW8ZX2qHXFR8IAJ0HvlkV6bo%2B14FklfH5qy4rd88lgrjM%2FNTEar6YIxJau4cB0WQVN0kGlN452pR4VAf6stuF1MnouYT1mFittFJevzK2kLfFHn5zHM1RV0NQhrVOgXnNG3fLY9v7Z1xiOKQDlzVUWQQj0AB8Nw5t6nVjjs6OsyGYvF7Q6MIal2cEGOqUBAMy77moWpCAYLpmJTPPdJXUw3hfb%2FCSAlr6jiAcS1ZnH1nqWPteFh1dNoDlTvHOmhwypG1OpBMLT6d5yyirG1iUyHqnucaYTwc%2F28mcNOkUd358t%2FalW5ak9OObDZNh0VuTaFe%2BgaeZHsahXFdnsItDgD%2B7bU3BnzxR0ZPB4PeYr4Hht%2FTX1IIArwTYm5UWnFIzCJAMZCqu4l0jHoYaM5YGgKr7I&X-Amz-Signature=813f30425c41e715df6d606df40d376c97afa3eda1d7c5c0aa2169bcf4b3048e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SP2VSJU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEutdAen%2FF9wcWd5GP7NWQP01vXldMaA87zm1%2B0k0pY8AiEAlNvkoZo%2FA9cV%2F%2FMyZ0D7Q8s3vtaz2XSN8XaeitlAtH0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBjR1pPQfU29vjMcTSrcA2jr6MLh5k9XFj1AOPKdAQ3AUgPdJSpMYG1WLdI5Zxqoz3LSTawskpW2ofLJGdr%2BZam4n0D9yUXwSEflWRaqCNWvX5y4K%2BXyryurB02eQuBqglN3Nhzt80m2gJ53T8Tv5bbOf6TJJnDWJAiWKonfP5WCvgkXzJOIsVuHWobo0pFtXr%2BXgQu1bbtdUX3ACGQOEY4LSG%2FID%2FM6TK%2B9oON%2FeBhEUZQbMCNIbXs4UFzgq6Eh%2FQzLXCu0w8OaBAkn84Cp0ypvYAiGESMQbnxWW9yw6OsccGh6zpy%2BuEtcHnZNcsa%2BeHe8ed5LwPtAjMwKGc4xpKtqTaEaT%2BmyfKCWZVu9b8K5Gk9Dx%2FqWy99aSCfdoJsaPOBUYVwEo%2FsorB2FtdIIXQH51RgIK9bOs4DY5FoQuAtjAzeh%2B0qfJCuMW9kMNXXgWUxLwbdYdUiTQ2hBBARdOnzsUXmaMytW8ZX2qHXFR8IAJ0HvlkV6bo%2B14FklfH5qy4rd88lgrjM%2FNTEar6YIxJau4cB0WQVN0kGlN452pR4VAf6stuF1MnouYT1mFittFJevzK2kLfFHn5zHM1RV0NQhrVOgXnNG3fLY9v7Z1xiOKQDlzVUWQQj0AB8Nw5t6nVjjs6OsyGYvF7Q6MIal2cEGOqUBAMy77moWpCAYLpmJTPPdJXUw3hfb%2FCSAlr6jiAcS1ZnH1nqWPteFh1dNoDlTvHOmhwypG1OpBMLT6d5yyirG1iUyHqnucaYTwc%2F28mcNOkUd358t%2FalW5ak9OObDZNh0VuTaFe%2BgaeZHsahXFdnsItDgD%2B7bU3BnzxR0ZPB4PeYr4Hht%2FTX1IIArwTYm5UWnFIzCJAMZCqu4l0jHoYaM5YGgKr7I&X-Amz-Signature=938958d492970149514f43b8c46a6c30d24effcdd7690d52a94ffbbccfa66cab&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V7NCRRQ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVO%2Fg2TokUSz7%2BzdjuRSMPSSbUxkA7iWZqgauFDO6PywIhAPePryVkoazB3tFytyjcDEuZfD4LaEDC9OTcyMMFj%2FLLKv8DCGkQABoMNjM3NDIzMTgzODA1IgykFWiGigyyxJNucvMq3APyxwAxORkoODuQH8x88BmXnpbg03ip69b3LRueLpnZKuQgFQPbQJVvYbsPvAXBWCL%2FqOV4zf0yP05ICCtDANR%2FABU6ER5b%2BEPvMoFBPf7gH1CJ3ydKw6qUFnvY8wJIju4SmdROe%2BdvADCOdljQwQzSvHeBYNpaRj9ZVq7oI7WBlCeYIC%2FGkbe2inkMcvyeHt8u3wvulsn8t49y8jQjrMNXkylZ%2BKuVqcWbIOMWh2mPEkAfBqoESOQWUwPJnjt8QlO9tkeCqkcK8%2FMAh6BHTKWZUTBtf9xayUMKqKOfPleQ7dJHeKfgZMcsb6kMLq5%2Bfh%2BZD2na%2B2vlZFB5OZmOb1Ae23u5AjchRRkb%2BuwJKJ0YkOcHONiFIm8wDE%2FrVT5EgJcUFgdPfJTlXGFu2Iw%2Fu4Pa4qKgELUHu3n3Cv1taSyDL6A%2Bqtzoa8Z9y8LlM%2FH74UHvkjHLui8MAjixN3jqpamgPAyUokMDWAWeTcY4uvcxsJQ%2FlJOq2vOubfmVZIGEflef5yedHLIk4frhn36%2BEYSt%2FVEKc8egSw31QWh3jgykcWJeJLld%2BVZSb9%2B2zGv6mlBWduepvHxhXNOfGJwTvvjbXR3CO1HnB744dvuwQ%2F3SUqcTarhnnN5btEBugTCQpNnBBjqkAUlNvkCAEmO6LVgFz9xQDtJfR%2FLgz4RWuUkT%2F%2BM9krlBU8OwhLqeWG7Yavgo79mveVQExNCe3Q1M7Y4VjoS%2BVurEFna6llGswN32kdBTGvKdkg9IlHcKx4TtVsh4JhJNirFSTUBlZOOUwvH7mTOnadtdwsLvIxYomsdp1FHFhi5wI%2BKyN0U6rVRDu%2Bwms5RGKZGl1PXOZc19zVRV0GdvFMR%2BFSQO&X-Amz-Signature=9a43d11b5578e4f0c0ca82aa09a6163a2a9d498ad7cb81b14518067c9de0cb69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDTQ4NQ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1ueoNArDKyVizw%2BYPZWaooxPcFtGv4Lsc5GcXiXF3IAIhAMNuUW0KRzAKAnhU2UKBvQ9LFPEEPpAW6wiKGiypYSVsKv8DCGkQABoMNjM3NDIzMTgzODA1IgwaM7jIS43MHimnpJsq3APp9gWxtobT5IyqDZgY8II2MNtWvz9%2FNiCx3qB5rrXvgdUGxEr%2BZJPG6gf1jMycj5vYeqLRvFaxMSuzfq4rlZSbvqDZTEZHNBKXHXDJRwWXn0tgM2tmenfFbWJGnpe9VR58ULnG0skXEIamJYex6NIIRB1b4MRJSF3nLofIedaecAa3cEDzRA%2B7Z94zzHsAnAspY7g9Ve0oNm9F5VP52Vxw9ISXaT%2Ffa0qsY%2B3AjuhIyEpeuG%2FLwV%2FzbTOYUwg%2B%2BM97JIgOxuTfVRY6b3v9akyje%2FfWlNE2eipiyqjHo%2FiqIevXT4XaQM3XGlWhFfX%2FJNQRozFC4VEDiMPcUkuE6XcId3SFq5Kust8bc4UsgX1wyqeZB0kJfO6GwVWzZtXCrQS2%2BBE7tWgek3Oz3lo1lv6dioxQ%2F7VBetrcFbyiatXiwZMSz%2BRe3lO5p384l8i41QMdrGMA%2BqxzYFDWHkAfINqdfv5jDGpNF7a1yA8lu%2FmlV7Y6PAZlvtX2dbfF16qFulwlGxUXj6a420FOnjyIvIm6NV2Wngf7B29ORSQRlb%2BMdtXgEpp9GXWREnrjgdGVbh9JAo7vRf5RK0gf1LC8d%2BDMxxMzf8lwkN9S5HpKElFZ4tkA7lOZDlCiJ%2FELkjDRpNnBBjqkAZcvTunBHkIUy6V9h%2F9NbaIOY%2BlWup2SEzJB%2F%2FbV0On31ppYjOpsKuKY9IPTNyTyClmeoPuiiBMuqH8GPBKNP1kwoEYWanu9kb%2BOcdWRKXO1kKLWCud%2B%2BBMXB3NBPC9P%2ByTgj9ZPgMIZMLvBcj85H6jFNUR9zzQlk3zV3Fk3SleqavTycgTUm5KgB13bqM4%2FRajqo6C2L%2BFNl6z5fjgnu7Zj6bbN&X-Amz-Signature=0d19a5a10076487f4664d6209a44159db8a814a92e693dec9628f6964bdd2e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SP2VSJU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEutdAen%2FF9wcWd5GP7NWQP01vXldMaA87zm1%2B0k0pY8AiEAlNvkoZo%2FA9cV%2F%2FMyZ0D7Q8s3vtaz2XSN8XaeitlAtH0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBjR1pPQfU29vjMcTSrcA2jr6MLh5k9XFj1AOPKdAQ3AUgPdJSpMYG1WLdI5Zxqoz3LSTawskpW2ofLJGdr%2BZam4n0D9yUXwSEflWRaqCNWvX5y4K%2BXyryurB02eQuBqglN3Nhzt80m2gJ53T8Tv5bbOf6TJJnDWJAiWKonfP5WCvgkXzJOIsVuHWobo0pFtXr%2BXgQu1bbtdUX3ACGQOEY4LSG%2FID%2FM6TK%2B9oON%2FeBhEUZQbMCNIbXs4UFzgq6Eh%2FQzLXCu0w8OaBAkn84Cp0ypvYAiGESMQbnxWW9yw6OsccGh6zpy%2BuEtcHnZNcsa%2BeHe8ed5LwPtAjMwKGc4xpKtqTaEaT%2BmyfKCWZVu9b8K5Gk9Dx%2FqWy99aSCfdoJsaPOBUYVwEo%2FsorB2FtdIIXQH51RgIK9bOs4DY5FoQuAtjAzeh%2B0qfJCuMW9kMNXXgWUxLwbdYdUiTQ2hBBARdOnzsUXmaMytW8ZX2qHXFR8IAJ0HvlkV6bo%2B14FklfH5qy4rd88lgrjM%2FNTEar6YIxJau4cB0WQVN0kGlN452pR4VAf6stuF1MnouYT1mFittFJevzK2kLfFHn5zHM1RV0NQhrVOgXnNG3fLY9v7Z1xiOKQDlzVUWQQj0AB8Nw5t6nVjjs6OsyGYvF7Q6MIal2cEGOqUBAMy77moWpCAYLpmJTPPdJXUw3hfb%2FCSAlr6jiAcS1ZnH1nqWPteFh1dNoDlTvHOmhwypG1OpBMLT6d5yyirG1iUyHqnucaYTwc%2F28mcNOkUd358t%2FalW5ak9OObDZNh0VuTaFe%2BgaeZHsahXFdnsItDgD%2B7bU3BnzxR0ZPB4PeYr4Hht%2FTX1IIArwTYm5UWnFIzCJAMZCqu4l0jHoYaM5YGgKr7I&X-Amz-Signature=880a1a9d9d50712fc3223acc14ab4e8f71f4198581eec71b450c8f227e4ac445&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
