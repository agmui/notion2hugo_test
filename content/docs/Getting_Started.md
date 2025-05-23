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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4CWQPR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICwTAjJ0zGdPb9pDAPMRbFdHhVWlUauoj4fFZnXK5HZiAiBOHja7IEDp9fqb0GQYaQjW0JXsJWW33%2FDViOfEe9p0fyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGbu0usb7CeBMgDkKtwD1cgrEUUsl6yKIYubJfF%2FGLR0SOHzzim19jK1TvuAsmI%2FgEs6ZS6t1ixsecPEHU09lpenU82OyQ5%2BoXMy7YnCCl6a9B203oVCfvHsQ1FYCx7%2BeR6UnTrzO4FVBMrfDuZpcbhv1nbycskhHb2p8XQOA0m7Q07aH9%2FBMmVyMIU1q%2FUeLu4PWarHttuI26vuSCm5TW54liPn0xnsWVi%2FKbuk67tDoptueeDyqwBoGaHq1Q%2FvLoEq%2F8gBC40rXRelfeTKBfucswHoV3hS%2Bn%2FFPhhUn3Hrdb7X%2FfGasrKsUopAOKt10n3iQECbX7U9ZuXNziGYCKlPWcuUVHMHVoknZ3vaX%2F3o%2FAATeGOadXez%2B6DYTBDAeP1PcS4IZgOhUQJPg8pKjvNlYuXaBbu814BJuPGFQD%2FV2PcXmk%2F%2FoxPLeupwgK%2Bmos3ge%2BwTofaDHtL8Ja0tJCP3maK4w7CO6g9MWtR4AeQHoTJ2Ptdw1SuUbK6O1d0wegNocmpmpAjq0lEAk4OB2%2FjfKviaatrqE%2FLbCfsysMP4Q9B5KKUtqp1A7iwoThli54r0dp3Kg5B6lhiL58s6B0Bxni6CQ3GcvC3fmnSATgkFkIG3ps3ISn381W4J4V3gExkiiAOfWCiWLL0wvafCwQY6pgG2SIEOmxr%2BIj%2Flfi8f1VbVEZb8%2FYzG%2FL65SlPY79%2BuQG1EXyCYvHLtNla2bAFEDxLHGrPRZipsRNxYId17vV22pJmUsZ8sEs0kzkWJEpt76JQXNma%2Ffb2jvhLAPySpoOyQ%2FlW5vMNShA%2BeRszgbvExj%2BvGWtIItKM3UFjrg7IKaLUSM5YcRDYDkMDrkwQlA%2FXxH%2BKWafq0zgQ2w4KSdpwop0G8Wy0P&X-Amz-Signature=c972ab7ad7212572247bf6f372ce80cc80b0b86a8053a84b12f3cdfcbe518a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4CWQPR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICwTAjJ0zGdPb9pDAPMRbFdHhVWlUauoj4fFZnXK5HZiAiBOHja7IEDp9fqb0GQYaQjW0JXsJWW33%2FDViOfEe9p0fyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGbu0usb7CeBMgDkKtwD1cgrEUUsl6yKIYubJfF%2FGLR0SOHzzim19jK1TvuAsmI%2FgEs6ZS6t1ixsecPEHU09lpenU82OyQ5%2BoXMy7YnCCl6a9B203oVCfvHsQ1FYCx7%2BeR6UnTrzO4FVBMrfDuZpcbhv1nbycskhHb2p8XQOA0m7Q07aH9%2FBMmVyMIU1q%2FUeLu4PWarHttuI26vuSCm5TW54liPn0xnsWVi%2FKbuk67tDoptueeDyqwBoGaHq1Q%2FvLoEq%2F8gBC40rXRelfeTKBfucswHoV3hS%2Bn%2FFPhhUn3Hrdb7X%2FfGasrKsUopAOKt10n3iQECbX7U9ZuXNziGYCKlPWcuUVHMHVoknZ3vaX%2F3o%2FAATeGOadXez%2B6DYTBDAeP1PcS4IZgOhUQJPg8pKjvNlYuXaBbu814BJuPGFQD%2FV2PcXmk%2F%2FoxPLeupwgK%2Bmos3ge%2BwTofaDHtL8Ja0tJCP3maK4w7CO6g9MWtR4AeQHoTJ2Ptdw1SuUbK6O1d0wegNocmpmpAjq0lEAk4OB2%2FjfKviaatrqE%2FLbCfsysMP4Q9B5KKUtqp1A7iwoThli54r0dp3Kg5B6lhiL58s6B0Bxni6CQ3GcvC3fmnSATgkFkIG3ps3ISn381W4J4V3gExkiiAOfWCiWLL0wvafCwQY6pgG2SIEOmxr%2BIj%2Flfi8f1VbVEZb8%2FYzG%2FL65SlPY79%2BuQG1EXyCYvHLtNla2bAFEDxLHGrPRZipsRNxYId17vV22pJmUsZ8sEs0kzkWJEpt76JQXNma%2Ffb2jvhLAPySpoOyQ%2FlW5vMNShA%2BeRszgbvExj%2BvGWtIItKM3UFjrg7IKaLUSM5YcRDYDkMDrkwQlA%2FXxH%2BKWafq0zgQ2w4KSdpwop0G8Wy0P&X-Amz-Signature=17f02510f7dbc5226a707bf72553fbae7d99073f7222f213f3f7d468597a41b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4CWQPR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICwTAjJ0zGdPb9pDAPMRbFdHhVWlUauoj4fFZnXK5HZiAiBOHja7IEDp9fqb0GQYaQjW0JXsJWW33%2FDViOfEe9p0fyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGbu0usb7CeBMgDkKtwD1cgrEUUsl6yKIYubJfF%2FGLR0SOHzzim19jK1TvuAsmI%2FgEs6ZS6t1ixsecPEHU09lpenU82OyQ5%2BoXMy7YnCCl6a9B203oVCfvHsQ1FYCx7%2BeR6UnTrzO4FVBMrfDuZpcbhv1nbycskhHb2p8XQOA0m7Q07aH9%2FBMmVyMIU1q%2FUeLu4PWarHttuI26vuSCm5TW54liPn0xnsWVi%2FKbuk67tDoptueeDyqwBoGaHq1Q%2FvLoEq%2F8gBC40rXRelfeTKBfucswHoV3hS%2Bn%2FFPhhUn3Hrdb7X%2FfGasrKsUopAOKt10n3iQECbX7U9ZuXNziGYCKlPWcuUVHMHVoknZ3vaX%2F3o%2FAATeGOadXez%2B6DYTBDAeP1PcS4IZgOhUQJPg8pKjvNlYuXaBbu814BJuPGFQD%2FV2PcXmk%2F%2FoxPLeupwgK%2Bmos3ge%2BwTofaDHtL8Ja0tJCP3maK4w7CO6g9MWtR4AeQHoTJ2Ptdw1SuUbK6O1d0wegNocmpmpAjq0lEAk4OB2%2FjfKviaatrqE%2FLbCfsysMP4Q9B5KKUtqp1A7iwoThli54r0dp3Kg5B6lhiL58s6B0Bxni6CQ3GcvC3fmnSATgkFkIG3ps3ISn381W4J4V3gExkiiAOfWCiWLL0wvafCwQY6pgG2SIEOmxr%2BIj%2Flfi8f1VbVEZb8%2FYzG%2FL65SlPY79%2BuQG1EXyCYvHLtNla2bAFEDxLHGrPRZipsRNxYId17vV22pJmUsZ8sEs0kzkWJEpt76JQXNma%2Ffb2jvhLAPySpoOyQ%2FlW5vMNShA%2BeRszgbvExj%2BvGWtIItKM3UFjrg7IKaLUSM5YcRDYDkMDrkwQlA%2FXxH%2BKWafq0zgQ2w4KSdpwop0G8Wy0P&X-Amz-Signature=ea487abd8addc2601b1d2102a8f433e2a56775dd03d77e415b203bce714c2f57&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCAW7GR5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCwhO79T%2FrI%2Fn%2BMv26oHkV%2FyrvEyM2jWT2VKpLG6vWm1AIhAMDMejhptUVX3snbmU2yVizZh7kdRmCdL9gj4uRJBKe9KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJWUt5gi6kIFQIgo8q3ANj9q%2Fbv2dUQG7puqcuus1HEOr0AlTxtA6KGmjRpWjU%2Bx23Zzue4GszIBkOzmVJuEkzrcXhgF%2FjPnPGAXKiAvukLyaougFdkiYW5layA3jE0NJajKvko0za8aZEoDN8RbPcFTrW1pfMr%2FCXvOrnxlGtPqiRwKn3eiQiA6YuW5IZHRse%2FVpyszFl9%2FcsI20DufO5X9sga8FgyY1e72Mvmj0xPy962xuby6GCS4VryborIYnxb5o4NSjA373dZUI1rvtrV2m%2FSKZCrtcFVgnAwlHWqd%2F1M3k9qbyICGkYcTqK%2FeTQCl5%2B5rkijg8jbhrN%2BqW9Bw2PtbCMPpTSv0YmDW9vFDeO7ibKmyMQTrjwUdIQ1LjO41WDcQAGbAkZXQpfeBn82kPVBkcHAnjtTqqJ1W0Q48OlvKWm%2FiaMrfBxAbJYA%2FFlaosJBES7P9yNBR4UhrbUUF5Jc4Lk36F%2FfQdvFyZlZqntuvtOs5aVcVL2T1uPS3btFHYGdjw9TNzr7ONOXBweYe%2B%2BMOpSu0Mz6kg1Cjawx4qolg8ZlrWgNd%2BZfCmFuCtAJmzg76VjVfOLCqVRvq%2BoSOVYnfhnGwJzEulkcGqn4LqL958EvVoIJ6BtPmneAsF4r94Le484NMI7szCnp8LBBjqkASAsXOTzvmlT2helx9P7t4zz7rScj2wGlZJvyaEnYTtpA%2FoZdTMglKFFiU%2BMiRaolPetu9OMRN4CPL%2FMwX0GxDPKvIx3B%2BAJFyIUo%2BGuJKc0EUve6NS5CZf3Ej6wxwWHPo%2BdW%2Bxa0sJbfwusZk4nAMbBE%2FhTBUd9QCG%2FLCHt%2FCYTjW3LvoE5bDhIgXwrHfSo3YrfRQke5Euav35YvC8a4jlUwnuq&X-Amz-Signature=2af51593e5f7d4da47af1145ba25f738d63a8dc2ea897af5f93afd6d198d6aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS5SGXW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCSdTP2MTx1pqY8yj731Rodpf5CjENGh2YsLAXQZAX6hAIhAKtK%2F3xofEROgx506AJTZJ%2B%2B%2BiYqbkm7%2FYFlUSWPfzWBKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR5tzMgkKJkKfvHnYq3AP%2FSyVGCp3rSz4uvBwzcPUpEM7NWD85irmJcUlXsJppQBaDH992soWgmzEgsYV%2F6c0%2B7qd5DXAGSrg4s2dT5xOKe3%2BYJeXLOwvkzWP53bGVvE72Xj15xxtGFqfimXn8E97IZbsRTbGSpny8CA9hM3Uu%2FZ41oce4PESetWwiBwtIZpP0%2Bm4OAxJVMjn2MNqUuDLrWNevZlXIUO4zYg0INCUiPru%2FTTtR2qO9PZfE1JR0PY%2B3SrhUgIGeHLOkzxiP1b%2BqABoNK2xD2%2BDBZmg6IDCksOlpcU81XJ6ZwSpqHWm2KeB4IfZ%2FlhqT1AmCoq%2Bg6xLE6vN%2FfHr9adkBrqtDgMtyIoHFnqeEXeFZsqk9BEfsDq5APYHQanu2Nz57yzSUAWi9eConrTP13vT5hZFLnvzJsf1lfbdHUwT5qtwR7GxVW0NnYk8o7ilCfbIOiAT0uGWfCLJMQ8wTN0F6%2FHvs32c%2FqJCxQGPYhs8oOYny5D49NFdAvdR%2FyTOCznU60dip9nsUOT3h0H5IQEfvpyjlvGyEXXygsYOKlZnigwxJA2%2FIkc8du6blBXPgoR7kPouQOM3lEFrsxb%2BkCY6snnXcpPr6l7X9gHFwESV9sYycQ7snGts7sfCryXH38erRHjDAp8LBBjqkAWRCMxmdicJQ6zqZtMblwSInq%2B6mlMGPmVuF36sdoRMwdqlKJidYVNCKlZrCotMe6lyXwuk%2FfOwqGLEwXf3Id%2BDWs4IDg3%2BFTJswH3qnHLzXzCFY2vtdROBFROYVXFpLesOXlaC63RpS9LuBQlMPs3JHNAq%2FmfxXrsSZcjsxhhK2OA4b%2BRvaZ72uB87tP0FSLQeTxqe7RLi5FTzBlcACHFHc%2FWtQ&X-Amz-Signature=ae02f21ab502574be8f8586d592d22a942ae7034ae81ee502e0a4607c5438dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4CWQPR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICwTAjJ0zGdPb9pDAPMRbFdHhVWlUauoj4fFZnXK5HZiAiBOHja7IEDp9fqb0GQYaQjW0JXsJWW33%2FDViOfEe9p0fyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGbu0usb7CeBMgDkKtwD1cgrEUUsl6yKIYubJfF%2FGLR0SOHzzim19jK1TvuAsmI%2FgEs6ZS6t1ixsecPEHU09lpenU82OyQ5%2BoXMy7YnCCl6a9B203oVCfvHsQ1FYCx7%2BeR6UnTrzO4FVBMrfDuZpcbhv1nbycskhHb2p8XQOA0m7Q07aH9%2FBMmVyMIU1q%2FUeLu4PWarHttuI26vuSCm5TW54liPn0xnsWVi%2FKbuk67tDoptueeDyqwBoGaHq1Q%2FvLoEq%2F8gBC40rXRelfeTKBfucswHoV3hS%2Bn%2FFPhhUn3Hrdb7X%2FfGasrKsUopAOKt10n3iQECbX7U9ZuXNziGYCKlPWcuUVHMHVoknZ3vaX%2F3o%2FAATeGOadXez%2B6DYTBDAeP1PcS4IZgOhUQJPg8pKjvNlYuXaBbu814BJuPGFQD%2FV2PcXmk%2F%2FoxPLeupwgK%2Bmos3ge%2BwTofaDHtL8Ja0tJCP3maK4w7CO6g9MWtR4AeQHoTJ2Ptdw1SuUbK6O1d0wegNocmpmpAjq0lEAk4OB2%2FjfKviaatrqE%2FLbCfsysMP4Q9B5KKUtqp1A7iwoThli54r0dp3Kg5B6lhiL58s6B0Bxni6CQ3GcvC3fmnSATgkFkIG3ps3ISn381W4J4V3gExkiiAOfWCiWLL0wvafCwQY6pgG2SIEOmxr%2BIj%2Flfi8f1VbVEZb8%2FYzG%2FL65SlPY79%2BuQG1EXyCYvHLtNla2bAFEDxLHGrPRZipsRNxYId17vV22pJmUsZ8sEs0kzkWJEpt76JQXNma%2Ffb2jvhLAPySpoOyQ%2FlW5vMNShA%2BeRszgbvExj%2BvGWtIItKM3UFjrg7IKaLUSM5YcRDYDkMDrkwQlA%2FXxH%2BKWafq0zgQ2w4KSdpwop0G8Wy0P&X-Amz-Signature=cad1d4f2ad0a8f031025c7e92d1ba79d77660265c44918c9a75a2726ead4faa9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
