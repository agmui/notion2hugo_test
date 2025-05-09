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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2AALKX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF0TNraO%2BnKTpg4mD4fr%2FOzGMaEueYXttOQCZKmyXwAwIhAOfLC6GvK2aqswuWF8cWZfKdoLT9bVkhLUtMXhjFm0BUKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9FcouCrVaMobKMtYq3AO4wqOOSYvBHkqichj8irfqeZ39FckmHXD6vv%2FNcVB3y8FbsAJ9c3WCEdsxM0SW9K0DoxkM96zjKtwXiV2vwYf20BWgGMGNIkfKjwi9TI4hGwa%2Fac58b5ErEtedSt%2FSab8sjFJDca3M4W%2BFN%2FpQKufn6az1rCryV1A7tgl6fzWIx8EevcdcZILMhXeQ0cvzWOnfbabZj6u5gQ6tBm14QoJRP3wv9Yl8%2F%2BfbnnPPk%2BQi2Sj9xadxQppTZLKFn0C%2BBpJy%2BF%2BYDTWjRKhQg9HQq%2FZMqIZsgiJpeZK0ysb5UV%2BbKtT7Nr6jfk%2B%2B%2Fvrjqei1iGKIDbMg0QsjYRjKOhLhT2YB3BbOt2Io46zAazVTQ81sSPtxI5%2BO0%2BBDTc8Ib9vgZ0w00nujq3b0SMygpDQAL0lhQKBIuEQqbsDwwSTl9TWRTtmrsNdnt5UVLwWfVNhPXl0BhqAaepL6PdrUOrUIaXaJ4XERnUm8QyswoSa73Lb2horYIh15%2FMV6Qycx0qhYyWVFPIJVBC4%2BgqRG3CAHKJI8XNsyXsc9JQe%2FUU9mdmGJo5VKGjGtni5umSdcvcA4hJ%2F7bWmiOJLByMm3UmUQ%2Bv7csGnJs3LxXMOWeeCrSzoexqDAs5RM4Xjrl%2FDcczCa4fbABjqkAfc%2FgMIuGUKq4mmpfQ7G5LBFzoe2HHefWnLKOeOGGwE%2FTuK37mCQ%2FIkwhfXGFXg0ndbZIC4AQtzjdnaZC5mhWUV%2Bbx5dP3SGutiEPuPDNE8dKonnpUYqlmGmRNQoOuPoyFmRIGWfynqhI3OROtJCjEuiBKDLkeVWvX4wMBc7XT4L1ZrQuzavG12N58wB%2BcQn%2BccUSZwk86UTnQNkfgpAWf1WIzBU&X-Amz-Signature=fb109e15b6bcc52e7924daf453d629932ffdd9cfa1ca41f43fa548f023f2b2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2AALKX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF0TNraO%2BnKTpg4mD4fr%2FOzGMaEueYXttOQCZKmyXwAwIhAOfLC6GvK2aqswuWF8cWZfKdoLT9bVkhLUtMXhjFm0BUKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9FcouCrVaMobKMtYq3AO4wqOOSYvBHkqichj8irfqeZ39FckmHXD6vv%2FNcVB3y8FbsAJ9c3WCEdsxM0SW9K0DoxkM96zjKtwXiV2vwYf20BWgGMGNIkfKjwi9TI4hGwa%2Fac58b5ErEtedSt%2FSab8sjFJDca3M4W%2BFN%2FpQKufn6az1rCryV1A7tgl6fzWIx8EevcdcZILMhXeQ0cvzWOnfbabZj6u5gQ6tBm14QoJRP3wv9Yl8%2F%2BfbnnPPk%2BQi2Sj9xadxQppTZLKFn0C%2BBpJy%2BF%2BYDTWjRKhQg9HQq%2FZMqIZsgiJpeZK0ysb5UV%2BbKtT7Nr6jfk%2B%2B%2Fvrjqei1iGKIDbMg0QsjYRjKOhLhT2YB3BbOt2Io46zAazVTQ81sSPtxI5%2BO0%2BBDTc8Ib9vgZ0w00nujq3b0SMygpDQAL0lhQKBIuEQqbsDwwSTl9TWRTtmrsNdnt5UVLwWfVNhPXl0BhqAaepL6PdrUOrUIaXaJ4XERnUm8QyswoSa73Lb2horYIh15%2FMV6Qycx0qhYyWVFPIJVBC4%2BgqRG3CAHKJI8XNsyXsc9JQe%2FUU9mdmGJo5VKGjGtni5umSdcvcA4hJ%2F7bWmiOJLByMm3UmUQ%2Bv7csGnJs3LxXMOWeeCrSzoexqDAs5RM4Xjrl%2FDcczCa4fbABjqkAfc%2FgMIuGUKq4mmpfQ7G5LBFzoe2HHefWnLKOeOGGwE%2FTuK37mCQ%2FIkwhfXGFXg0ndbZIC4AQtzjdnaZC5mhWUV%2Bbx5dP3SGutiEPuPDNE8dKonnpUYqlmGmRNQoOuPoyFmRIGWfynqhI3OROtJCjEuiBKDLkeVWvX4wMBc7XT4L1ZrQuzavG12N58wB%2BcQn%2BccUSZwk86UTnQNkfgpAWf1WIzBU&X-Amz-Signature=0f3f52b0928bc5f7d04dd5b301ef3a2e661325b4aabae40977a1fb0cc961d2cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2AALKX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF0TNraO%2BnKTpg4mD4fr%2FOzGMaEueYXttOQCZKmyXwAwIhAOfLC6GvK2aqswuWF8cWZfKdoLT9bVkhLUtMXhjFm0BUKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9FcouCrVaMobKMtYq3AO4wqOOSYvBHkqichj8irfqeZ39FckmHXD6vv%2FNcVB3y8FbsAJ9c3WCEdsxM0SW9K0DoxkM96zjKtwXiV2vwYf20BWgGMGNIkfKjwi9TI4hGwa%2Fac58b5ErEtedSt%2FSab8sjFJDca3M4W%2BFN%2FpQKufn6az1rCryV1A7tgl6fzWIx8EevcdcZILMhXeQ0cvzWOnfbabZj6u5gQ6tBm14QoJRP3wv9Yl8%2F%2BfbnnPPk%2BQi2Sj9xadxQppTZLKFn0C%2BBpJy%2BF%2BYDTWjRKhQg9HQq%2FZMqIZsgiJpeZK0ysb5UV%2BbKtT7Nr6jfk%2B%2B%2Fvrjqei1iGKIDbMg0QsjYRjKOhLhT2YB3BbOt2Io46zAazVTQ81sSPtxI5%2BO0%2BBDTc8Ib9vgZ0w00nujq3b0SMygpDQAL0lhQKBIuEQqbsDwwSTl9TWRTtmrsNdnt5UVLwWfVNhPXl0BhqAaepL6PdrUOrUIaXaJ4XERnUm8QyswoSa73Lb2horYIh15%2FMV6Qycx0qhYyWVFPIJVBC4%2BgqRG3CAHKJI8XNsyXsc9JQe%2FUU9mdmGJo5VKGjGtni5umSdcvcA4hJ%2F7bWmiOJLByMm3UmUQ%2Bv7csGnJs3LxXMOWeeCrSzoexqDAs5RM4Xjrl%2FDcczCa4fbABjqkAfc%2FgMIuGUKq4mmpfQ7G5LBFzoe2HHefWnLKOeOGGwE%2FTuK37mCQ%2FIkwhfXGFXg0ndbZIC4AQtzjdnaZC5mhWUV%2Bbx5dP3SGutiEPuPDNE8dKonnpUYqlmGmRNQoOuPoyFmRIGWfynqhI3OROtJCjEuiBKDLkeVWvX4wMBc7XT4L1ZrQuzavG12N58wB%2BcQn%2BccUSZwk86UTnQNkfgpAWf1WIzBU&X-Amz-Signature=41918977141a05b96d16bd1868def86c40e8969f09b9dc0219c44df24aaf2faf&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3L3NGS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3NRSru%2F2XO1J4ZVdJgNR7h4ve8bDwi9FudA90QmWLQAiAT%2FjHco23BkO7iXoC5tlsui4mHahA8nWdciebTIULXvyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAJX4lnkN4RspCLWtKtwDbaGwCcHk7kcwDCD9qKLdqJC1ksdyNWO6u3VeEkj%2FirY59qA7hu1USPVhIMgHdwnrIU%2FYDott1D32J8MfddmwJOXaFRNke0RP92ZZZaRLEG%2BVxg8NUSIo1wr6jGRv94g7El9qKxOy%2Bgt67L1QsQMic13FLOWvaMi2%2B1fMzW5ZhQah2tOVs8Fip2Ku78YEcxwiDYzomHOZCKlRuvXXGkkOAVZ9RXheHrSyuOuGBYTDeMTzYW8EXkAjIPzt7tTLINE6ph9JdGNutG1NA0d5z0OT0fwXO0kLzWJlMe22q12fa26VqiOhaBAmJMQOwBjdsavxYW8b0f521U8sm%2F0EkHUN72kC7UZp76I1pFPST2igccnfjcuq4SKsOnj7qec0yp5hjX%2B%2BZ0SyrgPkeKfwmpKqe1KxT4lEA5d6NcCooVc1CgHPr7q9tQp16cGlOTyLdQr7Scvx0fEiZpCKvPIGHO9BRkdDDAnlYAgIKaBeYbjE1ZUbP3USJU3GzoRxouxEEnuw821TuPCPpoBfVG2dEk3Y45vB3ye9qB3BDY%2BH6WIjj2jfpTN1LfRocsjhfvhotJSgQGffuBmEXTLhwgVwCPAa5dl4Uis7cBQ7nIIi6sN%2F8y9S9J0qoQ66md3aljgwvuH2wAY6pgGZ2obJFKNRuq4rwax6KSVbx982J69zO1qLs8jQS12g2coH0Md1BagsXMxkx%2B982%2FMlQe7Pj%2FxYdH1DBzfHMw04Gw%2FVMWCruwsUfrCKNcEEphP1uwKtWy4y2SgMdToghOX3HL3pF%2FjjCyrT7plPAxUlved5IiMsjsIZfvyCxdYlKO4AbEJYf8jGFHSwmiJIQNQ44XGD0kjJqxjzFQWsa%2BG0GxUHQ%2FGz&X-Amz-Signature=7812c91bc2f89b19a188da4eff144a90d65e60eb14fc0734c082fab4b49f42fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ES3P6L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBde5JYc8TdWER4oyOWGo8G82Ob7kgCkXOY3wkHibSJrAiEAornSHt2iJRU%2B1kPUFBaByWZUgeeuH7Rl18pNa%2BckPh4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDsswMvfmM3boTOdSrcA5RvTdQk06d3mvcnGjHUgy7y3mRuVmC5ksHZAbKyqJJcDDqpN49PHBck10F7%2BdBdEhXr%2BlTGez0Xc2gNoCelp5rhMQRVVeTeF%2FE8ILPfM8M4X8AeMcaL5sQg%2Bz1jrZhCalrqLtGWb8Lgdlh2NuocJ5AEoJFKhCwqraQ8CDHue1b8o8w8EFz%2FRTKwX8mjtGm3KOY9vpMyPQUCW%2BS7lJI7weEpfeu0vNoKgOJ97y6lfjOdj%2FgiKik%2BORTKJl0G%2BEq7u%2B9l2i%2FzPXXPIJCXX7XfsgF6DaiH4xsAF9yp7y4nXtvNFln%2FMCcGaPpmEpC6%2FyONZLtHkFm1mhNRcI4JH3Fo0%2BU%2B2x%2BMk1ldk4R2TD40Nd5hwjSxqicv8wJtP6JJQQPBM8AOZRKT2rfewZcrz%2BNEL6VXxEQR7bEF0RYAo1SZNM8WWPqEWVFJcuIlScA80q7EJUhPr7rr85RZfbZfsRrneC8RxXe%2FXRQNymHlrD3KrNtuXDJ1uGGGKcyyJTHv2hQq4sc2Rzml0%2BUIAuLkNcLuVXHDpxe%2BxjOlewxX7c2Z9%2BWppcfLS27bJ46SSC1%2FsdxDB8sL8OY%2BOSAcTawFlqnwYTBNZxucYbvghiRvi3RmkEKPbCYcIqzxymeyccbPMILh9sAGOqUBdLw%2FtPq3zdyUOOIwv2bef00gsBdt8m6jTRwoT%2F9FhbxSVkeB3YIQtpkag%2BYeway6RmsD%2BEF1%2BTZfIDyCzhYdvfH1Odb71iDQfPXARtPlyn%2B7nAtBmAU%2FwjnSg5qzw5qwHDER%2BEsr1jm8vGDCDtUqLVXO3Fg%2Fa467YDpS%2FRcWBcsWcYQUb6qXqO3AOOjFufK5YZOpG7JYhac8Lbc03U6ydmhjg63%2F&X-Amz-Signature=e45abb61b9ec6a3b54f2c3a0b1086028b28bdb4902500b546594fc89ffbf80e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X2AALKX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF0TNraO%2BnKTpg4mD4fr%2FOzGMaEueYXttOQCZKmyXwAwIhAOfLC6GvK2aqswuWF8cWZfKdoLT9bVkhLUtMXhjFm0BUKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9FcouCrVaMobKMtYq3AO4wqOOSYvBHkqichj8irfqeZ39FckmHXD6vv%2FNcVB3y8FbsAJ9c3WCEdsxM0SW9K0DoxkM96zjKtwXiV2vwYf20BWgGMGNIkfKjwi9TI4hGwa%2Fac58b5ErEtedSt%2FSab8sjFJDca3M4W%2BFN%2FpQKufn6az1rCryV1A7tgl6fzWIx8EevcdcZILMhXeQ0cvzWOnfbabZj6u5gQ6tBm14QoJRP3wv9Yl8%2F%2BfbnnPPk%2BQi2Sj9xadxQppTZLKFn0C%2BBpJy%2BF%2BYDTWjRKhQg9HQq%2FZMqIZsgiJpeZK0ysb5UV%2BbKtT7Nr6jfk%2B%2B%2Fvrjqei1iGKIDbMg0QsjYRjKOhLhT2YB3BbOt2Io46zAazVTQ81sSPtxI5%2BO0%2BBDTc8Ib9vgZ0w00nujq3b0SMygpDQAL0lhQKBIuEQqbsDwwSTl9TWRTtmrsNdnt5UVLwWfVNhPXl0BhqAaepL6PdrUOrUIaXaJ4XERnUm8QyswoSa73Lb2horYIh15%2FMV6Qycx0qhYyWVFPIJVBC4%2BgqRG3CAHKJI8XNsyXsc9JQe%2FUU9mdmGJo5VKGjGtni5umSdcvcA4hJ%2F7bWmiOJLByMm3UmUQ%2Bv7csGnJs3LxXMOWeeCrSzoexqDAs5RM4Xjrl%2FDcczCa4fbABjqkAfc%2FgMIuGUKq4mmpfQ7G5LBFzoe2HHefWnLKOeOGGwE%2FTuK37mCQ%2FIkwhfXGFXg0ndbZIC4AQtzjdnaZC5mhWUV%2Bbx5dP3SGutiEPuPDNE8dKonnpUYqlmGmRNQoOuPoyFmRIGWfynqhI3OROtJCjEuiBKDLkeVWvX4wMBc7XT4L1ZrQuzavG12N58wB%2BcQn%2BccUSZwk86UTnQNkfgpAWf1WIzBU&X-Amz-Signature=2237ffd493e9f1e9d2bedadec3623c2e6f6086988d4b96fa83e89e7d717381b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
