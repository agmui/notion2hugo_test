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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JAQKWPB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtQOxjxg0ai6oaFyLb0SbpgHHYs8zwxnAhdm8A4dykAAiAgI8hsW3bKw3aUSJqAdIT2Ldk1%2BuKgqpVQCDxzO%2BO%2FGSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78%2BKBPmQNG2SSzbmKtwDfw5JYE7VUFVAud4bdKOGIsBvMvF0hwvmc3v%2F0Z40rIwBaB9L1eQvOYkobb9aIMXkgAASf9%2FeGtZYsfLxbFuI%2BUz6wuu%2FvzM85MACg%2BNDC01IkMdpQzAFyXk%2BYm5qXhlhfCASmjr6vJjxqS8zVCCFLqkWs6OOIsxFZIBEuR7SiFy%2F2hZ40ezLkrvB5LmWc3RiJOCcxcGzHiukQxKZWqDaazcIsZDW82cu8p4vZUcNgkvxNjAmcNZsOO%2BeC94reJH0Y6cTwE4dNl8y3pwztt6rKQsNqIEHbF2z0y5izrQwEz4Ych6OB5EMKgFZ2fIaU6yxVsm5foz%2Blme6qqd3SAMg3XckZA4I6qs6ZZkarcQgOKZ1ywIld1mimp%2B147eVt8YUdFqngNRqZ2zJEjEiLoK2qXKgC%2F0VpEY%2B4VwXe3xfeUlRFyr%2FsVgcWysgwO3sQDz7NnPbIhiNIii8uA8alYo9Y%2BuSuNLDI5TUxV1cbVxu98X%2B26C9yvQh3tqNLD7TOgEY%2BjluI8dHrs2uLpntcbGpKeuTo%2BMhXUnfv9QRmTizTxhDNIa1%2Ftmcb44oHw0jz3U92c%2FMT8rsnukCpOAn6QdZpiolJLtOwJ0IyfqYehZdzNIUdyOYjAp1xZC5NXYwp9jMwwY6pgEBEGP8ZifK5f3SCbi%2Bme4zIHt8ENWpt8J%2Fux1%2B6JLfz60RMYNsWkcib4kfgx1iLZ7BMuAfqHYKQGW3PByCKTbO4Mut%2BaCWY0dbPLZVUnndgFoazZN16OKDA99FiSuBqI4A3zkpG6cGHKZs0NHaFktuLpEhkKfwrRz%2BlVMhz%2B3XFj2u7R0RQagn0oOZ0d4I2%2BO8pMORnfVXf6CTM%2BA7h7ZrN2eLnRjH&X-Amz-Signature=fd64f37ea173fcb63f6b9d74e5297a1e5abf85cd41548066269191516a01d8ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JAQKWPB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtQOxjxg0ai6oaFyLb0SbpgHHYs8zwxnAhdm8A4dykAAiAgI8hsW3bKw3aUSJqAdIT2Ldk1%2BuKgqpVQCDxzO%2BO%2FGSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78%2BKBPmQNG2SSzbmKtwDfw5JYE7VUFVAud4bdKOGIsBvMvF0hwvmc3v%2F0Z40rIwBaB9L1eQvOYkobb9aIMXkgAASf9%2FeGtZYsfLxbFuI%2BUz6wuu%2FvzM85MACg%2BNDC01IkMdpQzAFyXk%2BYm5qXhlhfCASmjr6vJjxqS8zVCCFLqkWs6OOIsxFZIBEuR7SiFy%2F2hZ40ezLkrvB5LmWc3RiJOCcxcGzHiukQxKZWqDaazcIsZDW82cu8p4vZUcNgkvxNjAmcNZsOO%2BeC94reJH0Y6cTwE4dNl8y3pwztt6rKQsNqIEHbF2z0y5izrQwEz4Ych6OB5EMKgFZ2fIaU6yxVsm5foz%2Blme6qqd3SAMg3XckZA4I6qs6ZZkarcQgOKZ1ywIld1mimp%2B147eVt8YUdFqngNRqZ2zJEjEiLoK2qXKgC%2F0VpEY%2B4VwXe3xfeUlRFyr%2FsVgcWysgwO3sQDz7NnPbIhiNIii8uA8alYo9Y%2BuSuNLDI5TUxV1cbVxu98X%2B26C9yvQh3tqNLD7TOgEY%2BjluI8dHrs2uLpntcbGpKeuTo%2BMhXUnfv9QRmTizTxhDNIa1%2Ftmcb44oHw0jz3U92c%2FMT8rsnukCpOAn6QdZpiolJLtOwJ0IyfqYehZdzNIUdyOYjAp1xZC5NXYwp9jMwwY6pgEBEGP8ZifK5f3SCbi%2Bme4zIHt8ENWpt8J%2Fux1%2B6JLfz60RMYNsWkcib4kfgx1iLZ7BMuAfqHYKQGW3PByCKTbO4Mut%2BaCWY0dbPLZVUnndgFoazZN16OKDA99FiSuBqI4A3zkpG6cGHKZs0NHaFktuLpEhkKfwrRz%2BlVMhz%2B3XFj2u7R0RQagn0oOZ0d4I2%2BO8pMORnfVXf6CTM%2BA7h7ZrN2eLnRjH&X-Amz-Signature=9adc50efc1b6f0e1ef952eb6ff6d0781a8e4e32c4f65952176efb3d53e593207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JAQKWPB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtQOxjxg0ai6oaFyLb0SbpgHHYs8zwxnAhdm8A4dykAAiAgI8hsW3bKw3aUSJqAdIT2Ldk1%2BuKgqpVQCDxzO%2BO%2FGSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78%2BKBPmQNG2SSzbmKtwDfw5JYE7VUFVAud4bdKOGIsBvMvF0hwvmc3v%2F0Z40rIwBaB9L1eQvOYkobb9aIMXkgAASf9%2FeGtZYsfLxbFuI%2BUz6wuu%2FvzM85MACg%2BNDC01IkMdpQzAFyXk%2BYm5qXhlhfCASmjr6vJjxqS8zVCCFLqkWs6OOIsxFZIBEuR7SiFy%2F2hZ40ezLkrvB5LmWc3RiJOCcxcGzHiukQxKZWqDaazcIsZDW82cu8p4vZUcNgkvxNjAmcNZsOO%2BeC94reJH0Y6cTwE4dNl8y3pwztt6rKQsNqIEHbF2z0y5izrQwEz4Ych6OB5EMKgFZ2fIaU6yxVsm5foz%2Blme6qqd3SAMg3XckZA4I6qs6ZZkarcQgOKZ1ywIld1mimp%2B147eVt8YUdFqngNRqZ2zJEjEiLoK2qXKgC%2F0VpEY%2B4VwXe3xfeUlRFyr%2FsVgcWysgwO3sQDz7NnPbIhiNIii8uA8alYo9Y%2BuSuNLDI5TUxV1cbVxu98X%2B26C9yvQh3tqNLD7TOgEY%2BjluI8dHrs2uLpntcbGpKeuTo%2BMhXUnfv9QRmTizTxhDNIa1%2Ftmcb44oHw0jz3U92c%2FMT8rsnukCpOAn6QdZpiolJLtOwJ0IyfqYehZdzNIUdyOYjAp1xZC5NXYwp9jMwwY6pgEBEGP8ZifK5f3SCbi%2Bme4zIHt8ENWpt8J%2Fux1%2B6JLfz60RMYNsWkcib4kfgx1iLZ7BMuAfqHYKQGW3PByCKTbO4Mut%2BaCWY0dbPLZVUnndgFoazZN16OKDA99FiSuBqI4A3zkpG6cGHKZs0NHaFktuLpEhkKfwrRz%2BlVMhz%2B3XFj2u7R0RQagn0oOZ0d4I2%2BO8pMORnfVXf6CTM%2BA7h7ZrN2eLnRjH&X-Amz-Signature=13d30c1a77b6c6e95d1930031fe5aa272f3ec4526ea604e49c4f739095106070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPYAXDC%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxHo80Y4yBPsYnLWFnVaTPXBCSroJMM44a11u5Tr5zxAiEArt59o%2BQgVxf9gLPj8wnq%2B13ZGNIXngEXQi4BoP44S3sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEU%2F%2BIJ7LrKojOoqFCrcAx%2BiCQljPg2t5PPuXy7tz7EzGG1U4fsIUc64eIk9MYqmjCmoyW80vYxKV%2B2vEpCnBbGTatcRLZ%2Blb7jLol%2B5LGXwpbC0EMH4EGxfM5R5nFYZgcydYR8dJKFwg%2B9TiXS3sXg4LWi411O8rQv4aq4s8todQhV08sdah6dqecLAZDjMVhMiP7qlroOK8rQioklbpTndshTlgHJvyahAbz18DvL9sZY0nagJva7jb2OD5M6cgyh0pnrWcfaNqbAMKKCIjPcmzRItTbdUjcRC2auMnqK874x3fCUCpxYEx3sNbOrDUdmajC%2Fi8DCEWh8XQ5qNZfvbu4CtCKD%2BHIwHaliypV7m37qywkLLxRLnBV6Bqvynhr5eVFyxrqOyElYnK4wX5c8cWAVtheCT7rOtdx4x9OFHZWiMmC%2BH%2BFqFQVxgHmX7IoXrJBviKlRay4R7CRZeV7CKw32MDIap%2BAo3br6mj%2Fe1iVH1ermStKbk4unVuYV%2BFKvWDscd94lkoJsmb09VtQPZImRX7bJwtmPgzDDv1mU6BRJG65MuZn9iaq0JxcHI1Coii6Uldlg6kKPpvuely%2FG30oA8fpvMKGv5d3RB9lF1oVeGcAx8q6sPMYbtmdOwTHEC206xkzL7TcOXMOTYzMMGOqUBDJmk24pot8x16bWvM%2FY%2BCcfLO1kdQ6xCegh%2ByTH7B4BczVn4Cem21y8Ju%2FHizGxpw7fcGdaaYSr4mo%2BISBMZ%2FD3vVrY8bKvafeYxiKvgx4GCYx01rYKBgF8SvrGeZjyaKyJ9OBcVgD9kksOrqsX%2FngCrIWE7OqzjSifCnmh5MpfRaUvW9K4oMzUuIurpJzmP7zEejYmzfz1CVA2gl4lW3N0gjNX0&X-Amz-Signature=0ec646c9e4f44d4182a7f5d775c96cb9357ba80e2a399381d593124930d6234d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDATVNWE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyRuuLLNLeWtwnH1Xatzt0LGr2qmShAyqwMcXWitnQJAIhANKEUDtvY2tK%2F9vMhTaJmbm7GoBdm7aI6pfGRzU5wV4bKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdatBgYi2mY7aSfAq3AM0UijbRhXuKNUrXeh4SMB8kX7z5yQPAuG83tFupAUdRqZLoXos9Xl4j4X2DAETRjl6dclhHaNp%2BrOtXqmNduWXzpzKmdSpei3wARMuKVVUKvnW0Esv%2B287uojkVTM9kBXvevoomuSi9cgRRf8nWbglj754bcH5qtwFqI7ugqugcbFhxAS06WbFSHDfxa2LYGVL%2BK8pqE%2F568IhuI7Sh8JW6OAm0RoHegDS2THnQvNNhpH9WF8XyHy5GrHNgmsWdJ5R2tW%2FU4d%2BsiWpSQNlgXLkw5Cp7%2BdE4pCrTtPJTqkzIqcvDUVxwftvHwiUaPpfpczB8T%2F2A3Fjm%2BjQnvzoXs3R%2Br6kWVkarM9cwhX8BeiHtr9VDmSW3eODfsbSsYHlIo5Ozu9Yn70Kph3SpqfGvA%2FBThcj%2BfvOp1ifYcz5isX3SSWIJvmxWlnFtUWaET7saUKjMS8gCVwC35Hc4NFUeuvkwLBRxKQxUwoOX7my9hwnDO1XkCamEtR7Sv5oL0pcGyZn%2Bjw0gQbctQE6AgjXXcshOdaanFQVZ1hefkDWLvj%2Btb1FerqtOTdzLaRBnVsRLr458NpsaN2uqJDok9ioGWPD4dzitXF9DWZCqMdWn%2FTPLKcLTjSfFTGqj%2FOxeTC42MzDBjqkAQlqKhMGzXx2cCsqghGIMuK%2BezS7FAv7KqfnTSz11Ycu0bK%2B09HXRkrjwWtT%2Btb1LmE0GDHhYwYScEG3VLQLmF5F7i8raUFj4OSfgULN5t5gtmb8n8yXwW68zRzISthhSXrZweF9b7iKiddXRD1aLEf0bZcNjEFV3kncY7MarS6eWuwBRFKSjxamaynON1dNU90vYR1hoGSFnDffL36v2pmjEg8c&X-Amz-Signature=5703900bada4e1522b4247c9dea82b9df74990ebf4872e757deef481909812b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JAQKWPB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtQOxjxg0ai6oaFyLb0SbpgHHYs8zwxnAhdm8A4dykAAiAgI8hsW3bKw3aUSJqAdIT2Ldk1%2BuKgqpVQCDxzO%2BO%2FGSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78%2BKBPmQNG2SSzbmKtwDfw5JYE7VUFVAud4bdKOGIsBvMvF0hwvmc3v%2F0Z40rIwBaB9L1eQvOYkobb9aIMXkgAASf9%2FeGtZYsfLxbFuI%2BUz6wuu%2FvzM85MACg%2BNDC01IkMdpQzAFyXk%2BYm5qXhlhfCASmjr6vJjxqS8zVCCFLqkWs6OOIsxFZIBEuR7SiFy%2F2hZ40ezLkrvB5LmWc3RiJOCcxcGzHiukQxKZWqDaazcIsZDW82cu8p4vZUcNgkvxNjAmcNZsOO%2BeC94reJH0Y6cTwE4dNl8y3pwztt6rKQsNqIEHbF2z0y5izrQwEz4Ych6OB5EMKgFZ2fIaU6yxVsm5foz%2Blme6qqd3SAMg3XckZA4I6qs6ZZkarcQgOKZ1ywIld1mimp%2B147eVt8YUdFqngNRqZ2zJEjEiLoK2qXKgC%2F0VpEY%2B4VwXe3xfeUlRFyr%2FsVgcWysgwO3sQDz7NnPbIhiNIii8uA8alYo9Y%2BuSuNLDI5TUxV1cbVxu98X%2B26C9yvQh3tqNLD7TOgEY%2BjluI8dHrs2uLpntcbGpKeuTo%2BMhXUnfv9QRmTizTxhDNIa1%2Ftmcb44oHw0jz3U92c%2FMT8rsnukCpOAn6QdZpiolJLtOwJ0IyfqYehZdzNIUdyOYjAp1xZC5NXYwp9jMwwY6pgEBEGP8ZifK5f3SCbi%2Bme4zIHt8ENWpt8J%2Fux1%2B6JLfz60RMYNsWkcib4kfgx1iLZ7BMuAfqHYKQGW3PByCKTbO4Mut%2BaCWY0dbPLZVUnndgFoazZN16OKDA99FiSuBqI4A3zkpG6cGHKZs0NHaFktuLpEhkKfwrRz%2BlVMhz%2B3XFj2u7R0RQagn0oOZ0d4I2%2BO8pMORnfVXf6CTM%2BA7h7ZrN2eLnRjH&X-Amz-Signature=6fb2ccdee5ba403b1593b2ddbc3053196de4c4f6809505b82a492c8e9560aa8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
