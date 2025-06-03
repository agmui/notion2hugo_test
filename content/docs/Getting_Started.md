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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JPYLI4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxJf6oOg6EbNPrWK3HcM3aqDai1usi149%2FHwfcIxEVTQIgfjd0UGX%2FrH3jPLRkNYZchvesnVvxXUZv8lnrBuYeR%2Bwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFoLPKH7v%2BNm3%2Fmu%2FyrcA5dMvUkcJ7PqUrhmG6L0avVh094fuqHkFjCiS6rwshg3I416mrGyq2aAp%2FYiTv6LViOrEpuXIGSctaSKrROproTza%2FDZ31y5ixA2lJlI2%2FDspzvLOC%2FfTwpPhHVUu%2BC%2Fc68Ah8EQUYJTaRf3QExSLcUdkFAAyRaQH7lZsWuYHTcybFVgfx3eYg0NWPEX2s1MPrXKuSNf5n17Mbr0NNjxlYxNXvs77MbHOV7dB8u72x6Uyo4wZ5GhqZoJmuwarcHFD8mCDpPCgmmEOQNxlDgZcnajGlGtR%2By5FxU%2FxAL7BBaFiTnjSneB7ogPnWlzazGrVq0K5gV5xCP967xVZ9FjX2s51L2CyKiVNviyhMjEnfjtwLfQ2SvTPWmvw%2Fo5ZDnpJZEFjZ42FQV9v6PWm3G8BZl83WLZNmdPP9yXOprItlkkXgUVf71xpVRRjU0swgHHBGwTda2Lh7WG0hsPU6FBGnl1V1TgkdCvoFAcbZOYXq3A4Ki4QGCeHRAq6XNhoCxHctdyeIPxiOTswqUCzdCKfqYOwduZ1cu4E9cSokZ%2Bn%2F2OwbBynpd44my82%2ByMQV1Lcujd4udI7v7dufEIxKc9S%2BG%2FUzR1k7%2BxdL1ZqQ%2F050QhQ%2BVq49Ndlv78pzwZMJTS%2FMEGOqUBcYb6TyPb5nO%2BSAQ36IJoh6GkthQtYNW%2FnP82aCxnNZqW4ybMA2dKrZRywQmXMFUXCzmQqAnMbhCROXqIeQd8A6MxcNTag54YiTaGFPrhSQr14f0kHbzb0HPp4UHQavXBidghOawmCI56yHvzaxF9yC3Ym97J0VfNOiwJonprcShQy8SVjUQOZ%2BZWMUdxGYjKqoj%2Bu8TJg%2BXBEaIbONvphOc2v%2F3Y&X-Amz-Signature=2d6aafb0bd7751287400011e8f37a010ad0aca01c6f6463d2d28405aa163fa07&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JPYLI4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxJf6oOg6EbNPrWK3HcM3aqDai1usi149%2FHwfcIxEVTQIgfjd0UGX%2FrH3jPLRkNYZchvesnVvxXUZv8lnrBuYeR%2Bwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFoLPKH7v%2BNm3%2Fmu%2FyrcA5dMvUkcJ7PqUrhmG6L0avVh094fuqHkFjCiS6rwshg3I416mrGyq2aAp%2FYiTv6LViOrEpuXIGSctaSKrROproTza%2FDZ31y5ixA2lJlI2%2FDspzvLOC%2FfTwpPhHVUu%2BC%2Fc68Ah8EQUYJTaRf3QExSLcUdkFAAyRaQH7lZsWuYHTcybFVgfx3eYg0NWPEX2s1MPrXKuSNf5n17Mbr0NNjxlYxNXvs77MbHOV7dB8u72x6Uyo4wZ5GhqZoJmuwarcHFD8mCDpPCgmmEOQNxlDgZcnajGlGtR%2By5FxU%2FxAL7BBaFiTnjSneB7ogPnWlzazGrVq0K5gV5xCP967xVZ9FjX2s51L2CyKiVNviyhMjEnfjtwLfQ2SvTPWmvw%2Fo5ZDnpJZEFjZ42FQV9v6PWm3G8BZl83WLZNmdPP9yXOprItlkkXgUVf71xpVRRjU0swgHHBGwTda2Lh7WG0hsPU6FBGnl1V1TgkdCvoFAcbZOYXq3A4Ki4QGCeHRAq6XNhoCxHctdyeIPxiOTswqUCzdCKfqYOwduZ1cu4E9cSokZ%2Bn%2F2OwbBynpd44my82%2ByMQV1Lcujd4udI7v7dufEIxKc9S%2BG%2FUzR1k7%2BxdL1ZqQ%2F050QhQ%2BVq49Ndlv78pzwZMJTS%2FMEGOqUBcYb6TyPb5nO%2BSAQ36IJoh6GkthQtYNW%2FnP82aCxnNZqW4ybMA2dKrZRywQmXMFUXCzmQqAnMbhCROXqIeQd8A6MxcNTag54YiTaGFPrhSQr14f0kHbzb0HPp4UHQavXBidghOawmCI56yHvzaxF9yC3Ym97J0VfNOiwJonprcShQy8SVjUQOZ%2BZWMUdxGYjKqoj%2Bu8TJg%2BXBEaIbONvphOc2v%2F3Y&X-Amz-Signature=e8575af73e687be3a6518b3da461c38a39d0d6b8717613ea924bbfe4482f5733&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JPYLI4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxJf6oOg6EbNPrWK3HcM3aqDai1usi149%2FHwfcIxEVTQIgfjd0UGX%2FrH3jPLRkNYZchvesnVvxXUZv8lnrBuYeR%2Bwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFoLPKH7v%2BNm3%2Fmu%2FyrcA5dMvUkcJ7PqUrhmG6L0avVh094fuqHkFjCiS6rwshg3I416mrGyq2aAp%2FYiTv6LViOrEpuXIGSctaSKrROproTza%2FDZ31y5ixA2lJlI2%2FDspzvLOC%2FfTwpPhHVUu%2BC%2Fc68Ah8EQUYJTaRf3QExSLcUdkFAAyRaQH7lZsWuYHTcybFVgfx3eYg0NWPEX2s1MPrXKuSNf5n17Mbr0NNjxlYxNXvs77MbHOV7dB8u72x6Uyo4wZ5GhqZoJmuwarcHFD8mCDpPCgmmEOQNxlDgZcnajGlGtR%2By5FxU%2FxAL7BBaFiTnjSneB7ogPnWlzazGrVq0K5gV5xCP967xVZ9FjX2s51L2CyKiVNviyhMjEnfjtwLfQ2SvTPWmvw%2Fo5ZDnpJZEFjZ42FQV9v6PWm3G8BZl83WLZNmdPP9yXOprItlkkXgUVf71xpVRRjU0swgHHBGwTda2Lh7WG0hsPU6FBGnl1V1TgkdCvoFAcbZOYXq3A4Ki4QGCeHRAq6XNhoCxHctdyeIPxiOTswqUCzdCKfqYOwduZ1cu4E9cSokZ%2Bn%2F2OwbBynpd44my82%2ByMQV1Lcujd4udI7v7dufEIxKc9S%2BG%2FUzR1k7%2BxdL1ZqQ%2F050QhQ%2BVq49Ndlv78pzwZMJTS%2FMEGOqUBcYb6TyPb5nO%2BSAQ36IJoh6GkthQtYNW%2FnP82aCxnNZqW4ybMA2dKrZRywQmXMFUXCzmQqAnMbhCROXqIeQd8A6MxcNTag54YiTaGFPrhSQr14f0kHbzb0HPp4UHQavXBidghOawmCI56yHvzaxF9yC3Ym97J0VfNOiwJonprcShQy8SVjUQOZ%2BZWMUdxGYjKqoj%2Bu8TJg%2BXBEaIbONvphOc2v%2F3Y&X-Amz-Signature=2042e10d5c092be15757a54a89adbdb7ae053851ff299518aea89fdd8e691586&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UPDAZ2M%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD48ZQdUGzXX9LII3lgJoFjG7SmNy0SzWZV8w9rjzbPOQIgUkHyWJ0leigbc4z4bob6K5%2F%2BPVMGBGI%2BUPmeTZEj2Tgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDC%2BFfQ9noFX%2FOSe52ircA8KZD0%2F1nYWE%2FrnmjDI%2BmFlsFqia58qXiVuC5cuM96%2B3PGRz%2BHn6wdK4zYLXr%2FmGI2xjvaRF1sl1NwYoT%2Bv9vIYulhGhW2bephGKH9RQXhfo4KS3YsSeblrL1Hn1NVkJEyqxde%2BTO5ZYo6Jzt9xvQw7aTZCeCfSmQf2IPpWmfqzsMBkwqDT8sAekI5BRcGuwr%2BtDxfcXfETIg2DWsrvMAJEQBFez0xC0J3gLxj7VMXuCzO1d7uR3CwppnKhoiveJkPqM16Ba7yLfibRFcHNf2LD3RBEZwxs3ySzJW5tTbKbNmsYv4bDOxsDbnKeWIcEteaderEzG4gOH8NDT8AhyI479oVNWMg88BekxnLIZgBngI9PQVfNZO2yTn36%2Fmeu9pqGpuOHaPDaMAg9VVylltZkY4rBipttDXUid7VRBISRhRa4kSWxz4IOEG3xDlSLOYCJ1bwyj0TJ4yPkYnNNIq90mY4qZTroPM6fEsb3l7J36yAwH20cxmBtY%2BKzwNqxqzdvyUoYnTcwgOVYd3LfdgOt%2FZrukg4355zK2OmabltD2RD57OtHwtfqtF1bNRzR9TsMQmLNLsTwgOeHvwpbP7IpFQZ2i%2Bru2wtgckHMaQSC2KwaGGz2FxxXBoQHbMOjS%2FMEGOqUBzQGT2ISfWxmjr8564OkubfotZAqJ%2FsS9%2Fv6mYvC2JaEJIBtghEUzq05ErAVD5ruavtA7Hgq7CfB9MxUTkG9fYVYh%2FcarAt%2FGWCGBFEO%2FvZ0B6NAwghYjxTSb11L1IvotuqyJID6MO78ntHcL702eKNwGysitkBbHC8jiralfVrANYmBKWT22zOMh2QM%2F5%2BBUeLDLS0%2B1DpzXNP%2FlvpeEaWFeyBac&X-Amz-Signature=a0fc289590e8a55ad06d1bebcc4673c64d16244b27cf82cc75372ee15df5ba2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYI7XGJE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCPLzaN3PaHn%2BTcYb9jyQBGjZcucfago1iWI7N2botjqwIgZ6sPeOUmdOtXHy9mar1xyUPrKugmIJyNYLnnc0242ucq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAGns25sJ4xGdhiyVSrcA5aojdBThE0pWA3mWO8emBDZjQoXlpPgago42L0mmLo5jfFsdyFsCyr8zldkAmwKCzutwdh048jp9UIcQl8fBZN84JIWiX7yZAo3KI16f2qzA598SROge0CqioaaUPgnY%2Fk7%2BaJB4j9hL7DYkzn1G9L8iOIuGViIX6dksSr9FlENZ2m4lqJDR9iVGdYD7xWHco2AsXf2xeiammuFGlQGkiIANiJx7x5iA3wb9RIMOuM%2F%2FmuPrE5AqLdo4DTc6us8GtmgONsPDTILvcJndYFsFEUE%2FM6Y5sNDAF%2Fq%2BJY6v5BVR7Uu8Ainzaq4YWzlr6F%2BeTssR5A2qhR8d6XP8COcMYqPydWyXGUZviIkUTaSbIU%2F0H1wr5I9Ptp7aB%2Bhz4%2FyMYAvpsS9zoTUvte7TwAJpZiIKqatBFpPFvjsiSCZdomnm4Ulq6uLHVM5783o1g22HyFXJWwkCp%2BfOeMrd16cKyXf7uSpTWuVploDlZyBPbBN4Hr%2FovN5DinZ9AMLxmrnQ12aFToJt6zzf0U4%2F4hS0JGeBVPUHAvXkOjx23vft59TOQ9hcCruHy8Yc2wTJSaC%2B%2B4WWnTJw0mNWks5i1XMJdoEt0mt1W0G4jUv6zMeFKqEPri6Go%2FgvG7MHSPDMN7S%2FMEGOqUByC0rDrB7LXP%2Fyro7AOpj8bOGMC5j1UBMhWdAx16W2QdmWGwBUzS4itpmEjWnnXx5gFdZ64MdudobdaijAVfh3EOdCUEY%2FvcYfU%2B1fGF2j%2BH3rl7NIib%2BOOWzaKJQuazQW7O%2FFcDdsunt9qapgFE4Y7XTneTu7JlV8mPSJtvVke4KHBvxyi6GJ1y7gk7erxjnCM7q9sh37XnJPMWau9R1mT8CneSD&X-Amz-Signature=8caafeb8ca74743e9c007685e8c4abcb46437d2ae9690a204f378064ac54daf5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JPYLI4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxJf6oOg6EbNPrWK3HcM3aqDai1usi149%2FHwfcIxEVTQIgfjd0UGX%2FrH3jPLRkNYZchvesnVvxXUZv8lnrBuYeR%2Bwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFoLPKH7v%2BNm3%2Fmu%2FyrcA5dMvUkcJ7PqUrhmG6L0avVh094fuqHkFjCiS6rwshg3I416mrGyq2aAp%2FYiTv6LViOrEpuXIGSctaSKrROproTza%2FDZ31y5ixA2lJlI2%2FDspzvLOC%2FfTwpPhHVUu%2BC%2Fc68Ah8EQUYJTaRf3QExSLcUdkFAAyRaQH7lZsWuYHTcybFVgfx3eYg0NWPEX2s1MPrXKuSNf5n17Mbr0NNjxlYxNXvs77MbHOV7dB8u72x6Uyo4wZ5GhqZoJmuwarcHFD8mCDpPCgmmEOQNxlDgZcnajGlGtR%2By5FxU%2FxAL7BBaFiTnjSneB7ogPnWlzazGrVq0K5gV5xCP967xVZ9FjX2s51L2CyKiVNviyhMjEnfjtwLfQ2SvTPWmvw%2Fo5ZDnpJZEFjZ42FQV9v6PWm3G8BZl83WLZNmdPP9yXOprItlkkXgUVf71xpVRRjU0swgHHBGwTda2Lh7WG0hsPU6FBGnl1V1TgkdCvoFAcbZOYXq3A4Ki4QGCeHRAq6XNhoCxHctdyeIPxiOTswqUCzdCKfqYOwduZ1cu4E9cSokZ%2Bn%2F2OwbBynpd44my82%2ByMQV1Lcujd4udI7v7dufEIxKc9S%2BG%2FUzR1k7%2BxdL1ZqQ%2F050QhQ%2BVq49Ndlv78pzwZMJTS%2FMEGOqUBcYb6TyPb5nO%2BSAQ36IJoh6GkthQtYNW%2FnP82aCxnNZqW4ybMA2dKrZRywQmXMFUXCzmQqAnMbhCROXqIeQd8A6MxcNTag54YiTaGFPrhSQr14f0kHbzb0HPp4UHQavXBidghOawmCI56yHvzaxF9yC3Ym97J0VfNOiwJonprcShQy8SVjUQOZ%2BZWMUdxGYjKqoj%2Bu8TJg%2BXBEaIbONvphOc2v%2F3Y&X-Amz-Signature=daaf81da8b4e7168e6e80ba8f524d6a483aa0bbc582bd1c42c8082fcaf2a25e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
