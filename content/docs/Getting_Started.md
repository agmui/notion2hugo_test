---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HXKQZLY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDLH8heWnGDnvTGAJTrSr6WAJzb%2Bw87%2B1WTl95V9mttnwIgQ8%2BfgAU%2Fu998Hc1zit1fSFpye7GLm5yv36996556M7kqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECF%2FwRejp%2BHodOCqircA4ujhp26VmnqsGnDPZDTE7OkEsIMqq1Pe9ocBHAxT0fuR16pDbe5%2FWanlrO1ZqcbN%2F7n9JyP%2B3JkZD%2FOvj1Rs9yXqe0Cb3d3T2WdfDNHU7ZdmGkOFqKNkQAZ9soZXyftFRPRuz6HqKXmYF4LDMR%2FIWmz8BFjtazh8FDyWFLup5yjPjtinpYCRus%2BUcw4FKRMTDzrPqVBPi8S%2BnBOd3RIlJVzREzsTpiYhySNrIIICSoln8LItpqsoMSNqODAgvTKtkMQq75tVBc3v29DFt8%2FzeQKRJiKxX6JUVyxF0tzHJMwAXvv4uYpTGYqPIJhV8Ec2DZUq35kJamR4WYcsqAi0jn19wMMiNV%2F%2B1ZHq%2Bgnlk30Zn%2FdwDNwbHGY9Wb9PhZEDgOb1aVHq31ctW1ccdpHYaMDmRY96iOiSnjSHx%2FacruE4DTPXV%2F%2FWjwNlO80ocd4%2Foz0Po0RzoYZYnfyZKW1aHV6dcK90mT7xX9YWVVng2H8D2i%2B7u1J8YmFBzeISRSg0dpeqC9JK2OB8%2BgFZW20s6mv4OA5GuZCN3vcHZJBLuKrKMl%2Fgp6KtbY51ncVPOkCrj%2BTM21uG0Ypbx7m2HfpYcEn3s4UyADDBnjijDAQThqEO1JCVbhL1BUM%2Br2fMPacr78GOqUB6oMsD6TZ4mHarMvM3Xcj4A3RvS4n8xFECiWwPJClsOY9NPg7t3MOSDyuxwhcFb0UXZq0%2BLl%2BY%2FLQiUkEZG1Z5lOpCV%2Fy9SBjDZ2HDBXmSkfYXQNUbcWZd3N%2BUmo83PVjvRa939Q0ei0rQRE%2BZTvOZePCVODL9mnku%2Bjg3oLbQvU8fDESAJb6LYoFHZg9bT60CmKyeLBamMsQJdAW1dzVZrvjrePW&X-Amz-Signature=d958e373b262f84bc2c8c50d01e087661627053d0430fe87649d89e71807ffb9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HXKQZLY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDLH8heWnGDnvTGAJTrSr6WAJzb%2Bw87%2B1WTl95V9mttnwIgQ8%2BfgAU%2Fu998Hc1zit1fSFpye7GLm5yv36996556M7kqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECF%2FwRejp%2BHodOCqircA4ujhp26VmnqsGnDPZDTE7OkEsIMqq1Pe9ocBHAxT0fuR16pDbe5%2FWanlrO1ZqcbN%2F7n9JyP%2B3JkZD%2FOvj1Rs9yXqe0Cb3d3T2WdfDNHU7ZdmGkOFqKNkQAZ9soZXyftFRPRuz6HqKXmYF4LDMR%2FIWmz8BFjtazh8FDyWFLup5yjPjtinpYCRus%2BUcw4FKRMTDzrPqVBPi8S%2BnBOd3RIlJVzREzsTpiYhySNrIIICSoln8LItpqsoMSNqODAgvTKtkMQq75tVBc3v29DFt8%2FzeQKRJiKxX6JUVyxF0tzHJMwAXvv4uYpTGYqPIJhV8Ec2DZUq35kJamR4WYcsqAi0jn19wMMiNV%2F%2B1ZHq%2Bgnlk30Zn%2FdwDNwbHGY9Wb9PhZEDgOb1aVHq31ctW1ccdpHYaMDmRY96iOiSnjSHx%2FacruE4DTPXV%2F%2FWjwNlO80ocd4%2Foz0Po0RzoYZYnfyZKW1aHV6dcK90mT7xX9YWVVng2H8D2i%2B7u1J8YmFBzeISRSg0dpeqC9JK2OB8%2BgFZW20s6mv4OA5GuZCN3vcHZJBLuKrKMl%2Fgp6KtbY51ncVPOkCrj%2BTM21uG0Ypbx7m2HfpYcEn3s4UyADDBnjijDAQThqEO1JCVbhL1BUM%2Br2fMPacr78GOqUB6oMsD6TZ4mHarMvM3Xcj4A3RvS4n8xFECiWwPJClsOY9NPg7t3MOSDyuxwhcFb0UXZq0%2BLl%2BY%2FLQiUkEZG1Z5lOpCV%2Fy9SBjDZ2HDBXmSkfYXQNUbcWZd3N%2BUmo83PVjvRa939Q0ei0rQRE%2BZTvOZePCVODL9mnku%2Bjg3oLbQvU8fDESAJb6LYoFHZg9bT60CmKyeLBamMsQJdAW1dzVZrvjrePW&X-Amz-Signature=da138ff4ecac99472cef058817ef0e80e405aca3af9087f2c3f6cfadf51d6866&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGNPWRS%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEQJ2Y7BK6uJkmqLE6zrMb%2B6T7jKTLBBB4riQ%2Blu%2FZfcAiEA8yjB8i5jnTvFkt%2FhIQHB51EfiFU0ayWrUVuHqsdnR50qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqj6f8vEaA2mpDYhCrcA0F8E%2FSJmTDxMComk1WENQJSTqIYqtwn%2FKWa9PLEkjz2I1WdjZcNZlK2PT%2FPY%2BrxdSBr76TOR9j6oIZDDVCEU9Wz0jVNA0V5YR%2FmoEAftyZYn4WWjPpXketo2CK9B9pcHGkdkntpJ1AFBalnf1H5zoJ0QQ%2BxUJS%2FqbWP53nZJsg9SoDr8JIotLWVq%2BLN8YaqVt3qUsWGuxZnu1OdcIqqk6ijMBcQUaE0Vl1zRVXfX6qwvQgXiJQMY0NPM6aJhKi0NwqIoN3bXKq2Eb9KFadHgcZgODdNA3xLR6WqsiLeHPI7fArVeXIvIKtsLt8X7LuIb1W%2Buv2IDsWRrwxqvSSNi%2By1IcqK8OCObvQF%2BgVCOdhK53Mz2cHFp2odjmhqCw1xQlLcu7WeiQKl9Sb7MzK3sO6ShVd2qUOvLp4NuNlqCDxWLz1z07DriVY8LG73fEZxRivN5Iownag7u1YSaNU2aTEGOZXgPT629QSqJ0qEuRuV6ceB%2FTvc2AkF0LPHke5LNM7Yn5nAoInMa6u2YuRa6bGC694EK7OCJgpGLnuNeoUoQ6M2Jt6yaly3P5gAv%2FtKTRh8B%2FgNVn9c6Xomc9qJMZjGZmuE9kfX%2FWjoMu7a7AvDlyg%2BnWLrkkLKKI6gMP%2Bcr78GOqUBSysoYNtLKTIJ6o9vDBpRW9s6H31Nc95OsTC9fIjiDvXNoZYYJMLUmJwJZpqNDnKYYrsAD8SHGQFhfKoUmeYT7NQMvnsjiG6FNb01l9IHkoDp5hMAkqbnnuAPtP%2BlHiZMIVa%2F4tdCKjPRqIH%2BfKnfjniqNO3WpC48WjxYEz20WOer%2Br04JpdNHvygZDBLmtOOZyp0z2%2BIIF1AuRNDfMzz0r04Pslm&X-Amz-Signature=340c781996b0a6bb4de8d48b4f8cb3a71980f98bcf3f1bcae0f7c8efb531576f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2RMDLL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQC7EFPyZPUoCwtl7DuWCtmTgQMWzUSFpDCDzE4qIlN9HgIhAIQc7Lx7YjE5QjHasDl8wiFL0ZpBqX%2FK7UeDhRVKs3EfKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5YyS0l%2BzavAwu4I8q3ANQ8wlwmAAn65wNiNubMsJxHRU5kicZvt7BJ8S8pb1qI43n9hsuj1CuOJ1lWVJLlfSuX57nAovH%2F04ECsH7T9i6hukOVusrsFL1FKoXmNot47t2cr7OMFGX%2FyNoD7mJ2%2FemOp%2B9FaK0QwkCnpRF5ZAd8V2WX22v94218mmPYpyzhdQkKeKuIzYm2bin%2Flrv8mqobM0S9EgGI9cj8CqSNG9hq8oHmuFQ%2BDbYIVxNn0tLgKtT1P0%2BEqRlfp9rU3VeTUsCvDEfbBU4Mg4ZYLaeVe%2Bbgy7eoHKB4yZvu9anf6l%2BdM%2FUpvTSz%2BEYwxEeuQdjzFmdz9rB4Zxwe1VGzf12JRPpzMgt1qC0Mfw8okaltrlwbUSJUR1ythvz7nzbKKKlkd%2BBURLjz4Znp%2FgwAGdbZ29gV%2FRvkc1rNMhLrKvWgJ%2Fm2eic%2BQZGY0tGgruL%2Bmj9%2BKTArGItGH0rRPl3vTxNoEdXnBAEKxfDDhN7wpnIHVsdq0nqQXhRgg8Kv7V0pQDj4UGkVsTpgNsH4CxuIfuTJOa7NNCiDBrpazbleMZxKmI8bvXvU%2FVTQO1R2JsCTdaySazOwjHR6BCe2QkmtanrGY3qoXGNlYzHLjdJG9E8y8BcuMkHzeroOjdfSC%2BRjTD2nK%2B%2FBjqkAZK%2FJK9ZEa%2BG3vkdc2hOR%2BL8xQmvQlYLH8uBIn4I05ZCDk0DwpmYdEOek%2F6eJTzK55pkScQt%2FpIqMJjZv3x%2BfNDxlxxLgp6VMdETR1CzIaPtS2fw8VVBgy2cLYrhMNGG83QHf2ien5Xrm5AUhMbZyNk7tPdD48nX8h3HJtAQiC4XyPS05T8N5uAPIKlSycGbx0LpecyGDVwT6%2FLfrhaNSqXkmV1G&X-Amz-Signature=a83b1c287c852fa15197dc1042930c5f92246dd0079eaccdb44da3bde122299b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HXKQZLY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDLH8heWnGDnvTGAJTrSr6WAJzb%2Bw87%2B1WTl95V9mttnwIgQ8%2BfgAU%2Fu998Hc1zit1fSFpye7GLm5yv36996556M7kqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECF%2FwRejp%2BHodOCqircA4ujhp26VmnqsGnDPZDTE7OkEsIMqq1Pe9ocBHAxT0fuR16pDbe5%2FWanlrO1ZqcbN%2F7n9JyP%2B3JkZD%2FOvj1Rs9yXqe0Cb3d3T2WdfDNHU7ZdmGkOFqKNkQAZ9soZXyftFRPRuz6HqKXmYF4LDMR%2FIWmz8BFjtazh8FDyWFLup5yjPjtinpYCRus%2BUcw4FKRMTDzrPqVBPi8S%2BnBOd3RIlJVzREzsTpiYhySNrIIICSoln8LItpqsoMSNqODAgvTKtkMQq75tVBc3v29DFt8%2FzeQKRJiKxX6JUVyxF0tzHJMwAXvv4uYpTGYqPIJhV8Ec2DZUq35kJamR4WYcsqAi0jn19wMMiNV%2F%2B1ZHq%2Bgnlk30Zn%2FdwDNwbHGY9Wb9PhZEDgOb1aVHq31ctW1ccdpHYaMDmRY96iOiSnjSHx%2FacruE4DTPXV%2F%2FWjwNlO80ocd4%2Foz0Po0RzoYZYnfyZKW1aHV6dcK90mT7xX9YWVVng2H8D2i%2B7u1J8YmFBzeISRSg0dpeqC9JK2OB8%2BgFZW20s6mv4OA5GuZCN3vcHZJBLuKrKMl%2Fgp6KtbY51ncVPOkCrj%2BTM21uG0Ypbx7m2HfpYcEn3s4UyADDBnjijDAQThqEO1JCVbhL1BUM%2Br2fMPacr78GOqUB6oMsD6TZ4mHarMvM3Xcj4A3RvS4n8xFECiWwPJClsOY9NPg7t3MOSDyuxwhcFb0UXZq0%2BLl%2BY%2FLQiUkEZG1Z5lOpCV%2Fy9SBjDZ2HDBXmSkfYXQNUbcWZd3N%2BUmo83PVjvRa939Q0ei0rQRE%2BZTvOZePCVODL9mnku%2Bjg3oLbQvU8fDESAJb6LYoFHZg9bT60CmKyeLBamMsQJdAW1dzVZrvjrePW&X-Amz-Signature=3f465f344c7a8733aae0ca1595db0f07ed5e88c4f7c1e82d201ee162926bb0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
