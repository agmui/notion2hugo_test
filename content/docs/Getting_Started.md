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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTUXYKP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtWN2HgeOhQpXpTp%2FpgghqYhPNFxhIezH5i%2Fm4SUbU9AiEA0Rdrcgrwh1Q3uOmcaB0C9%2FwCTfUTDZ4wVy21GWIDtlMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWdDBMSuGedSIz9SCrcA0PP9Ny8HVJn2Ntl4OLyTCVl68xfPuJHQJ6%2F4wfesqi7z%2BGEZ8aYV%2Bg7k1xFlVH3TqA2Jw2BBTjAaTCNLvslVLrWKGkW6kXy%2FBZiKa9zqpGDhjn26l0wZuNqESnXQIbyshnXJjzKPHt3LR4uOVk%2F%2B2sfwKSEabJlw35WHr%2FACx9T9FJCuGJPJcLToRLjQb3AFTDUwumt8RTfImG1IPTUzf%2BPmOQuYSWFocwzq6luFjO0C%2FO20ymyloqpYOhhrT7rLlMib8Wl9iyBrYEze32F%2Fnbk9nWlsB%2BG15KJz1J4zS0F1%2ByhCOSAk6tHNU3y8H%2B%2BCdLX4HmKBgvD12Q9MD4PJd%2Ff5rB6uFNcswHWKQURllrehX5Xqalb7v5xFY7%2BQIzFUF1KkmNN7HhkGL201Q1%2BvLLz7WgXkdKNOi9AF%2F2sOeBTnRQ9LNovwl7LXKwHNG5bAWYg0qIv8xHPZzyocc3D%2B4ImVSydky%2BvVU8Dy3KYiIZioQ7KD9xci7Anzv%2BndxPDcVocCaTi%2FCgmTDObnCe6a%2BwJDyKNbfqte%2BLZatXqmz73bJe2ZNmXztucC0UzUZw65lNZwbSS6Zs%2FT1namPeDWhuL%2Bz0I4auYgCLtoSHPKH%2BWIRTUO%2FOOXj7i28LdMMidrcQGOqUBJRam9pc%2FcVhu9e0XbDhLYO9xbNvo1ZKfv36%2Fcotr3NWEjsGvdfvfmpzIYgExC9naxpgQwSry8LGMVH1uGvA0UIH163DOzu6AlL4HgQztx31dFZbhFrTplkYGhDlRIWcDCGXyYi5Ae8P4uYBGxYfAF8WkunVBXoTmxx%2BEhAwiCA4AhSvp6BnDjAasQEjaC0HgTOIcQ0fqsQCOLKvNg5sNcsfXEpp3&X-Amz-Signature=bc0d67573726ec9ecc99273f15f489da9c7cc9771d8f077b0aaa16dd80563822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTUXYKP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtWN2HgeOhQpXpTp%2FpgghqYhPNFxhIezH5i%2Fm4SUbU9AiEA0Rdrcgrwh1Q3uOmcaB0C9%2FwCTfUTDZ4wVy21GWIDtlMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWdDBMSuGedSIz9SCrcA0PP9Ny8HVJn2Ntl4OLyTCVl68xfPuJHQJ6%2F4wfesqi7z%2BGEZ8aYV%2Bg7k1xFlVH3TqA2Jw2BBTjAaTCNLvslVLrWKGkW6kXy%2FBZiKa9zqpGDhjn26l0wZuNqESnXQIbyshnXJjzKPHt3LR4uOVk%2F%2B2sfwKSEabJlw35WHr%2FACx9T9FJCuGJPJcLToRLjQb3AFTDUwumt8RTfImG1IPTUzf%2BPmOQuYSWFocwzq6luFjO0C%2FO20ymyloqpYOhhrT7rLlMib8Wl9iyBrYEze32F%2Fnbk9nWlsB%2BG15KJz1J4zS0F1%2ByhCOSAk6tHNU3y8H%2B%2BCdLX4HmKBgvD12Q9MD4PJd%2Ff5rB6uFNcswHWKQURllrehX5Xqalb7v5xFY7%2BQIzFUF1KkmNN7HhkGL201Q1%2BvLLz7WgXkdKNOi9AF%2F2sOeBTnRQ9LNovwl7LXKwHNG5bAWYg0qIv8xHPZzyocc3D%2B4ImVSydky%2BvVU8Dy3KYiIZioQ7KD9xci7Anzv%2BndxPDcVocCaTi%2FCgmTDObnCe6a%2BwJDyKNbfqte%2BLZatXqmz73bJe2ZNmXztucC0UzUZw65lNZwbSS6Zs%2FT1namPeDWhuL%2Bz0I4auYgCLtoSHPKH%2BWIRTUO%2FOOXj7i28LdMMidrcQGOqUBJRam9pc%2FcVhu9e0XbDhLYO9xbNvo1ZKfv36%2Fcotr3NWEjsGvdfvfmpzIYgExC9naxpgQwSry8LGMVH1uGvA0UIH163DOzu6AlL4HgQztx31dFZbhFrTplkYGhDlRIWcDCGXyYi5Ae8P4uYBGxYfAF8WkunVBXoTmxx%2BEhAwiCA4AhSvp6BnDjAasQEjaC0HgTOIcQ0fqsQCOLKvNg5sNcsfXEpp3&X-Amz-Signature=d211eb17a6e1c4956f0ee5fe32c24741f3bee0dd16eb996e2e2f545431946d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTUXYKP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtWN2HgeOhQpXpTp%2FpgghqYhPNFxhIezH5i%2Fm4SUbU9AiEA0Rdrcgrwh1Q3uOmcaB0C9%2FwCTfUTDZ4wVy21GWIDtlMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWdDBMSuGedSIz9SCrcA0PP9Ny8HVJn2Ntl4OLyTCVl68xfPuJHQJ6%2F4wfesqi7z%2BGEZ8aYV%2Bg7k1xFlVH3TqA2Jw2BBTjAaTCNLvslVLrWKGkW6kXy%2FBZiKa9zqpGDhjn26l0wZuNqESnXQIbyshnXJjzKPHt3LR4uOVk%2F%2B2sfwKSEabJlw35WHr%2FACx9T9FJCuGJPJcLToRLjQb3AFTDUwumt8RTfImG1IPTUzf%2BPmOQuYSWFocwzq6luFjO0C%2FO20ymyloqpYOhhrT7rLlMib8Wl9iyBrYEze32F%2Fnbk9nWlsB%2BG15KJz1J4zS0F1%2ByhCOSAk6tHNU3y8H%2B%2BCdLX4HmKBgvD12Q9MD4PJd%2Ff5rB6uFNcswHWKQURllrehX5Xqalb7v5xFY7%2BQIzFUF1KkmNN7HhkGL201Q1%2BvLLz7WgXkdKNOi9AF%2F2sOeBTnRQ9LNovwl7LXKwHNG5bAWYg0qIv8xHPZzyocc3D%2B4ImVSydky%2BvVU8Dy3KYiIZioQ7KD9xci7Anzv%2BndxPDcVocCaTi%2FCgmTDObnCe6a%2BwJDyKNbfqte%2BLZatXqmz73bJe2ZNmXztucC0UzUZw65lNZwbSS6Zs%2FT1namPeDWhuL%2Bz0I4auYgCLtoSHPKH%2BWIRTUO%2FOOXj7i28LdMMidrcQGOqUBJRam9pc%2FcVhu9e0XbDhLYO9xbNvo1ZKfv36%2Fcotr3NWEjsGvdfvfmpzIYgExC9naxpgQwSry8LGMVH1uGvA0UIH163DOzu6AlL4HgQztx31dFZbhFrTplkYGhDlRIWcDCGXyYi5Ae8P4uYBGxYfAF8WkunVBXoTmxx%2BEhAwiCA4AhSvp6BnDjAasQEjaC0HgTOIcQ0fqsQCOLKvNg5sNcsfXEpp3&X-Amz-Signature=65408b3d676c55165a9089d78c8fe6b20cd533e9a0e0331621b76bdfd24dd8fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS6Z4RD2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID960APaFjQftW%2FpE52b2JE4qWNZHAtd2Kuk5tiTXF1fAiAEbApn%2B%2FKxu6%2BQ27C8MyAT171pqBhFKplo6LqkyV9SdCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIhaLuoibY%2B7vaiaTKtwDJ2KdkEefXhujzWbtbEkHNIwm3JzQHHvHV47vhIXd8oHE%2B0TrDqpRRStRdqNBtzB%2FsGDPNMvAHLDGdREZom1qhfkd6Af386KccGS1x0DOBDQDHinPMJT71XoUarhxCk9VkbSd%2FRBRBQJ%2BS4j08aaTxZxsE98Y0zo1qz7bgnQ06vIXBrZjCgzHJyKJ9daZqp7y3vtiy%2BSH4i%2Fxj3jPPGkCtevh0ySSV2kDFCOs6M848ZOnPH6dviEuil6W35ocIyhKSIGgVkNlVQH1Fu0O68PA0PnNU8bmBMsCVFOjNjxMH9nRkt%2FXfB%2BLjyceRVODzh9FQL6u59IjAW8tf6afbGrYbdaGV14u0ApEsAMO0WpTHliXcA23%2FuM%2BW466NS27etXyt6x8ANzPToM5Du43gNTIN2S5T8ELCfpli3Tld9b41cwgjTY1sGw7TznCnYxDIDWi%2BiE5BwPyJzh0A7wdNW3pOnXyi9lV86OrDcLKAJB1KNcnYx07a%2FcwkFKA8RFEGjxv3WuFCEbeyb0OscOffks3Aytt0r8m2z2EJTcfTiWe41Xze%2BAfKF9bll3b%2BJqW0GqE0cHufXiyL1YiRPkIJwAte5ukHticz07AU%2BPuvOj645Xnbo8WlppvhtAWtmMw%2BZytxAY6pgEsxYoxt2JxXwsgyiSYa5Fz9iYI7lO8%2Fl1qnh0P%2BX156y0pNJLRlhhvL2LcMIf7Htl8j2sixwaqTD%2FTEGfRaLJHF0CNdVhmaxcmmfLEUEjTgTpUTTIPVtAl%2B%2BNsBuR%2FMy6K07ifNp8CUGux9Kviih0AL7ZRAPssZ6C%2FbTgXDQXOHVC3EUCjBHbt08amPKB9IhYnGC%2FPbfg%2B%2Fe2UlmuSBIi26QaTuxl6&X-Amz-Signature=123933afd8f4c9a6374007fffd63f704102735a9a4b7e48946607a9ba673b67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ADX4BX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMExtd%2FHJxw%2BYET%2F6d6KcmaRyBFI%2Bpv9vBYBH3EPgCkAiEA4XzwgqLJ8LzbcpViLusQwyBSinNPreM5PCC%2Bmbi%2FHr4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6KY8MYP%2BT2JPAOyCrcA9V%2FBN83sS3BqKD8IXS5MSSQOuJZUtCXDQeUckEbcD3axUu2jteSdC7%2FMzC1txNPWvKagAsvSnnHXE2QI5NcduLjSVwFOnY3bFc79zySQCDJSyherx51xSe%2FifdiM4UJXCnD7V6OxZaU%2BW6nqRboVyOEtfS2bxWFbIVC69l14X4hsUp12n4qIjdN0CB4Dzwhae2GDIdexPHI0PvlzUsJSLaDfWsioM5MK9%2BETKQdrKvjMHDpIVEK31zanuAknYCmqx4w11ZazuwxRsSTpdoUlIY7eZSU1CIyWc89Od6izILMkCyXYo8nlPz0o5TurvZ7webOL9lBMFMSgY7fGjEoyrRkd4u%2Bzg6Tkv19PGBKUKHiJB1E10R1jFpvuFMSodd00dTSTAWN%2FeauJtTJSCprXHnj5Op6L7sV2GmIpg2DKl7lh7VRKjCmOAomVs8a0SsPKmaRgXleJw0B4je3gRoWIAP%2FwPK3WCfl4tD0rQdZyt83EIrQ9whJEro8%2FWK3jcxSWFX4KFgscHGdVT8cWz9DOf17c4VP1WfFP6MMBcZ1%2FqXgGTI%2Fbzwo%2Bw5zZCY70hB4O7IbI35dydH4lw0AmTBIHRz0NIJjbkPvPQ7U9YCz2oFYcelxMr3jBnpP4AZiMNmcrcQGOqUBPCuOCxboibxhmIgAvca%2FW9AEZfioW8Kd5TEFjEb0278fdXsl7WXTmPXZ4bhXWltM5A%2Bu5uTrJaHuzCTGx%2FJ7lHSy%2FochDqHQwZWLzITvJtkwwWumUVuA56c%2FxLvCwvRGarhURkAU8TQiIEsvMcsQUQrlvYZqBcXYF8FY6Ki5%2F3NQhQkClmcdvFoRvZTjdofVBiZdNKwtvXGrITm53rg%2FjwYMZzxi&X-Amz-Signature=7e0a19c8dc5138fbf73d9166414ac8400cffcd2dee64589964f3550c728f2827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTUXYKP%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtWN2HgeOhQpXpTp%2FpgghqYhPNFxhIezH5i%2Fm4SUbU9AiEA0Rdrcgrwh1Q3uOmcaB0C9%2FwCTfUTDZ4wVy21GWIDtlMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWdDBMSuGedSIz9SCrcA0PP9Ny8HVJn2Ntl4OLyTCVl68xfPuJHQJ6%2F4wfesqi7z%2BGEZ8aYV%2Bg7k1xFlVH3TqA2Jw2BBTjAaTCNLvslVLrWKGkW6kXy%2FBZiKa9zqpGDhjn26l0wZuNqESnXQIbyshnXJjzKPHt3LR4uOVk%2F%2B2sfwKSEabJlw35WHr%2FACx9T9FJCuGJPJcLToRLjQb3AFTDUwumt8RTfImG1IPTUzf%2BPmOQuYSWFocwzq6luFjO0C%2FO20ymyloqpYOhhrT7rLlMib8Wl9iyBrYEze32F%2Fnbk9nWlsB%2BG15KJz1J4zS0F1%2ByhCOSAk6tHNU3y8H%2B%2BCdLX4HmKBgvD12Q9MD4PJd%2Ff5rB6uFNcswHWKQURllrehX5Xqalb7v5xFY7%2BQIzFUF1KkmNN7HhkGL201Q1%2BvLLz7WgXkdKNOi9AF%2F2sOeBTnRQ9LNovwl7LXKwHNG5bAWYg0qIv8xHPZzyocc3D%2B4ImVSydky%2BvVU8Dy3KYiIZioQ7KD9xci7Anzv%2BndxPDcVocCaTi%2FCgmTDObnCe6a%2BwJDyKNbfqte%2BLZatXqmz73bJe2ZNmXztucC0UzUZw65lNZwbSS6Zs%2FT1namPeDWhuL%2Bz0I4auYgCLtoSHPKH%2BWIRTUO%2FOOXj7i28LdMMidrcQGOqUBJRam9pc%2FcVhu9e0XbDhLYO9xbNvo1ZKfv36%2Fcotr3NWEjsGvdfvfmpzIYgExC9naxpgQwSry8LGMVH1uGvA0UIH163DOzu6AlL4HgQztx31dFZbhFrTplkYGhDlRIWcDCGXyYi5Ae8P4uYBGxYfAF8WkunVBXoTmxx%2BEhAwiCA4AhSvp6BnDjAasQEjaC0HgTOIcQ0fqsQCOLKvNg5sNcsfXEpp3&X-Amz-Signature=c2cb10e654f19e057eb9c23700f04703f6fa41b69480e90295cbc7c88a2e3773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
