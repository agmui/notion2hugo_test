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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR4CWC5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHbDJJfp9B5ngHvVZlnJ%2FRcUTQnn%2FGTPPXSPrn2UUbFJAiEAwT3d78%2FqsI5UkVYQiWn4pYCQXG%2F1xhyMQcU%2Bq343qiwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKTtoMW7ZRLYHh2WISrcA7x5XDoXTYd3SwKsd4dQ23fBxcf8bGjIICCzhZwdQgoXoMrxgIrbgJF55rtO3%2FEtnSPPUERJoMebAf274UzKok9zlRTb7w1b%2FaaxwkOvUtoA5P26v97tSYNyxPn36W3gTIEankYniJDU2lx9rMFBG%2FtLcBK%2BtDDxfaUGZINCmAujN16WgMC5tqHJKSEIj6tZRRPd%2BOf2%2BwORQNkfMDzQIGVZznzF2N3yyUxO7IrtROO%2FBy%2BX5%2BX9S0UFh4e8%2BsGZvuYt4jaXSGG%2FcA40QQBBcY22caxKtIfCeEWpkWLfiUaGF2C0WT5NrlOPiux7rtim10QaHkFG%2FYlrni6Yo6YwQeZPrv4uX9TRe4v2EvF9yHfZ6JxZ%2BEDpQGEl7LfMFjrVwNpnOOviiSiaKzniT2rLZu5UGImpFa0TmOguO9RwS92OmUJx%2FTVNI2X3bRzNsvnClA5Dduu0BuK%2BrB6ElopJTUatIHU14Chfao9wbJ9CQPoqGs%2BNi7QPni46YGK5q6w%2BN8dZrFmNK%2BQH5GfEoMbrv14juDf8ytQW2JAnhpdLGTftA2lB4zb19R%2FlUdFF%2B04hvf3PvF5DUXbPkNELFcjdwHAw10AEL6zDXCCvhGQYjtdgvMHD3wYmXWblJhptMO6XzMQGOqUBBjDDGBy1lbrIY3K6ewNco1DEBVIzSowV0K5p8qdUMMnENASU8kp3TaiUEYfYHgZTujjkNv5qkfYGtE1bEXfvt%2BfOBU6OGBYWS1bm3x6qn5fMp%2B0JQLmTW7HvR5vX2zen%2Fl2W6pp4TJ1bqHuLb9T6oWDGxLNBeF2%2F%2B8fwmwREgjJ1y4C7MRqAGbXV%2Bs5ce%2BSeoCE3OlCPzRlfcgZneG6B5no6sCJj&X-Amz-Signature=8e7193515d2092a4ba0d9516e063306cd8a14db4474721a9cd3191cac0d1577d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR4CWC5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHbDJJfp9B5ngHvVZlnJ%2FRcUTQnn%2FGTPPXSPrn2UUbFJAiEAwT3d78%2FqsI5UkVYQiWn4pYCQXG%2F1xhyMQcU%2Bq343qiwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKTtoMW7ZRLYHh2WISrcA7x5XDoXTYd3SwKsd4dQ23fBxcf8bGjIICCzhZwdQgoXoMrxgIrbgJF55rtO3%2FEtnSPPUERJoMebAf274UzKok9zlRTb7w1b%2FaaxwkOvUtoA5P26v97tSYNyxPn36W3gTIEankYniJDU2lx9rMFBG%2FtLcBK%2BtDDxfaUGZINCmAujN16WgMC5tqHJKSEIj6tZRRPd%2BOf2%2BwORQNkfMDzQIGVZznzF2N3yyUxO7IrtROO%2FBy%2BX5%2BX9S0UFh4e8%2BsGZvuYt4jaXSGG%2FcA40QQBBcY22caxKtIfCeEWpkWLfiUaGF2C0WT5NrlOPiux7rtim10QaHkFG%2FYlrni6Yo6YwQeZPrv4uX9TRe4v2EvF9yHfZ6JxZ%2BEDpQGEl7LfMFjrVwNpnOOviiSiaKzniT2rLZu5UGImpFa0TmOguO9RwS92OmUJx%2FTVNI2X3bRzNsvnClA5Dduu0BuK%2BrB6ElopJTUatIHU14Chfao9wbJ9CQPoqGs%2BNi7QPni46YGK5q6w%2BN8dZrFmNK%2BQH5GfEoMbrv14juDf8ytQW2JAnhpdLGTftA2lB4zb19R%2FlUdFF%2B04hvf3PvF5DUXbPkNELFcjdwHAw10AEL6zDXCCvhGQYjtdgvMHD3wYmXWblJhptMO6XzMQGOqUBBjDDGBy1lbrIY3K6ewNco1DEBVIzSowV0K5p8qdUMMnENASU8kp3TaiUEYfYHgZTujjkNv5qkfYGtE1bEXfvt%2BfOBU6OGBYWS1bm3x6qn5fMp%2B0JQLmTW7HvR5vX2zen%2Fl2W6pp4TJ1bqHuLb9T6oWDGxLNBeF2%2F%2B8fwmwREgjJ1y4C7MRqAGbXV%2Bs5ce%2BSeoCE3OlCPzRlfcgZneG6B5no6sCJj&X-Amz-Signature=96e9c746bc49f80460c9a65ba5b50f0b9c67cae755451fabf54b537b4cb99583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR4CWC5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHbDJJfp9B5ngHvVZlnJ%2FRcUTQnn%2FGTPPXSPrn2UUbFJAiEAwT3d78%2FqsI5UkVYQiWn4pYCQXG%2F1xhyMQcU%2Bq343qiwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKTtoMW7ZRLYHh2WISrcA7x5XDoXTYd3SwKsd4dQ23fBxcf8bGjIICCzhZwdQgoXoMrxgIrbgJF55rtO3%2FEtnSPPUERJoMebAf274UzKok9zlRTb7w1b%2FaaxwkOvUtoA5P26v97tSYNyxPn36W3gTIEankYniJDU2lx9rMFBG%2FtLcBK%2BtDDxfaUGZINCmAujN16WgMC5tqHJKSEIj6tZRRPd%2BOf2%2BwORQNkfMDzQIGVZznzF2N3yyUxO7IrtROO%2FBy%2BX5%2BX9S0UFh4e8%2BsGZvuYt4jaXSGG%2FcA40QQBBcY22caxKtIfCeEWpkWLfiUaGF2C0WT5NrlOPiux7rtim10QaHkFG%2FYlrni6Yo6YwQeZPrv4uX9TRe4v2EvF9yHfZ6JxZ%2BEDpQGEl7LfMFjrVwNpnOOviiSiaKzniT2rLZu5UGImpFa0TmOguO9RwS92OmUJx%2FTVNI2X3bRzNsvnClA5Dduu0BuK%2BrB6ElopJTUatIHU14Chfao9wbJ9CQPoqGs%2BNi7QPni46YGK5q6w%2BN8dZrFmNK%2BQH5GfEoMbrv14juDf8ytQW2JAnhpdLGTftA2lB4zb19R%2FlUdFF%2B04hvf3PvF5DUXbPkNELFcjdwHAw10AEL6zDXCCvhGQYjtdgvMHD3wYmXWblJhptMO6XzMQGOqUBBjDDGBy1lbrIY3K6ewNco1DEBVIzSowV0K5p8qdUMMnENASU8kp3TaiUEYfYHgZTujjkNv5qkfYGtE1bEXfvt%2BfOBU6OGBYWS1bm3x6qn5fMp%2B0JQLmTW7HvR5vX2zen%2Fl2W6pp4TJ1bqHuLb9T6oWDGxLNBeF2%2F%2B8fwmwREgjJ1y4C7MRqAGbXV%2Bs5ce%2BSeoCE3OlCPzRlfcgZneG6B5no6sCJj&X-Amz-Signature=bd4f81fc01adf65718528894c14cf4c287cc1babd3c9b3963d5a049295371efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5443TBC%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE7RI%2FQ2hhqtYDA3OYs2rZGYC8KPo1EfZPuCodOuiz%2BjAiAUsbhRrW1uC8RKRefRIQAcDJKDhZSyL0Yh29MNNYGfxir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMguELJw%2FI0qN2iXOmKtwD4d2d%2FexbWP8YfSm8ec7QTaaid4kOqMHDwOyJ%2B9iaaj%2B6yGpP%2Budm9%2FtnCnfA4f2ZajdLIxT%2BJeOYufLV0feWD9fOgAB2VfsiVC68xqQEVJISYWNMGlk36AJteLKAWoi1HP2cTrTuXQrde8UAsSXYE9E7ZP2%2FkYWF9ltqMWUG3CPzCwkVoybDdvkvKrY7O9RsqYtHiHtV6lQWqR5mh8IS3xfC4hlIW%2BCgcGkIrZg6Vln8cB39UZZwrXxOjCtfJOYtXOQgZz892Dd0g8oTxEr3FAwaoNrhB5I%2Bm8yd%2F1s8Ps0LGb4qGdRqZ2XcjRpKCwxwGTU001ZkV2iWddP8ypBw5G0Ide3TSWxtmry8AIwPSME09WcLF7lNed%2FN9s680RZHoFazTqtmmhJIGxvOUtay0kezAiDDqSYaG2SkhphithhIh7jx0fCRBhQZGQe6kRblxNYnKfLd0L3e9NEN79HpLDQ0CG2PKG9VcOK6DS7AmDpn2MurGwrBlU0N8jADFBSzlxdLd%2FyLrlUfKZ5FY7zMfIu6weti3CUlx6uhQxh1l6qBZraDkSax6Qe4dwsj%2B5I%2FkSJ0RnXC663dnXfjMI2SMBN69prmSNeV4xuCGUjxwHBnhoP8OB7VUEOi5NcwmZbMxAY6pgEA4sXc%2F62ZP13YX1%2B4mSXumXo%2F4DnwXTI6FyD6wmJwDZhJbvYr7kqm3PMR5T65OugHorKCMGnq0yobcePEtPZI3Pff2gKAIKqfm380f%2FrJ5BhS0oiqab%2FG8sGil8HvWqx0bje1NMta0hp0Ef4iIbzEMUeC64xOLyh1%2BjCP4hw8H0tfiAXNSczLE8y93er76qE0IMU7uJ2NpFPGBFG0O5ZgrlLOt2iJ&X-Amz-Signature=c66c3141dacf97bf016056ce9713aa1859fb7448967b2717200238a972b7c132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P53X5L5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDqhbDI4wd8Bu4Txz5TpEm4sJicUB4QA%2Fz2j8hbdcSFGwIgExpTZePpmgcktYmGH74yoZDGFgVQ5pHsQKURQ%2BvUY3gq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDItsM4W5JQycze9gKSrcA3s5ZZ5eljdVUnOg1rUZ0sgQcWNvqEOyNCZDx3T4YsAmgkYuO5aDOnzTcWyFWEYI%2BNwuvvUnJlIwGWma5WSqA%2F6tSZR4inAU34F6tzunuNpavWnCc09hO3n0BfLpS5WZJrCeoVgPY3NzKAyl4FY0dyEJq3qMLWRGeIB1AsvjanJ22pGfCINe8lIivujnYP9YdLMXrBxIUe7ptUJWdyYiSkeKIlYZk4yD%2BjTeMUrooKO%2FyweWWpyPuKFjj%2FRlnBggGlX7vtUydprZa6ce%2F2T5J0Q5e%2Fq6TVd%2FxhT5iOdX7cPAuzZ3dv6hoNcZADVsmSI%2BlKlpa7emKJylg7vJOyWiHHqxFmFWUFNgocVKZL9MlfSUZAd8uzaowmH39dOcKraghQj%2B4BzRTz%2F8Kc1eubJOPNe%2F%2BMYd8ToOSs3uTRtQPkTG37580OuiGLn09exytGfslcM7n5BDNTRBnAHSfpYLNHloWZZVoXAl%2F3hk8PPFpSof7nzt0ZkcDvLwr%2BHyR1s1Nwq9pEePWYOIHmfKyfar7%2FRttbrKMavhf0c1pJRZkQ3cmCZM2WzAOU%2BmHCDynF7q0V5KPqMyTBuGTg7nW74YsJ8hb3vev6tWmLeiQOz9tmR1%2FX%2B%2FBpnjsTxR1QWJMLmXzMQGOqUB9%2BofOB4vt1y8qc2SNxYdmS%2Bp7YKSo3M27El7tLHofOq6jDD83M3JW055JruVptvySdQslbe%2Fuu6tFRWFsQA25%2F5pQBCsOZtEJ7ZFoLsoM%2BiitlACqytphT4wXVABAPpmpD6ePEgkPW3u6%2BikxtyByYJnUgxTxwdhh0%2BmIoiaQlgxubyAuht2LDCqrhTIGiAuyta72L0C7uaVM0qRkEz89Q%2BX38li&X-Amz-Signature=7987c6910d67fd14d8557060682de644e837285c22a26cc707bad301129cf1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLR4CWC5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHbDJJfp9B5ngHvVZlnJ%2FRcUTQnn%2FGTPPXSPrn2UUbFJAiEAwT3d78%2FqsI5UkVYQiWn4pYCQXG%2F1xhyMQcU%2Bq343qiwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKTtoMW7ZRLYHh2WISrcA7x5XDoXTYd3SwKsd4dQ23fBxcf8bGjIICCzhZwdQgoXoMrxgIrbgJF55rtO3%2FEtnSPPUERJoMebAf274UzKok9zlRTb7w1b%2FaaxwkOvUtoA5P26v97tSYNyxPn36W3gTIEankYniJDU2lx9rMFBG%2FtLcBK%2BtDDxfaUGZINCmAujN16WgMC5tqHJKSEIj6tZRRPd%2BOf2%2BwORQNkfMDzQIGVZznzF2N3yyUxO7IrtROO%2FBy%2BX5%2BX9S0UFh4e8%2BsGZvuYt4jaXSGG%2FcA40QQBBcY22caxKtIfCeEWpkWLfiUaGF2C0WT5NrlOPiux7rtim10QaHkFG%2FYlrni6Yo6YwQeZPrv4uX9TRe4v2EvF9yHfZ6JxZ%2BEDpQGEl7LfMFjrVwNpnOOviiSiaKzniT2rLZu5UGImpFa0TmOguO9RwS92OmUJx%2FTVNI2X3bRzNsvnClA5Dduu0BuK%2BrB6ElopJTUatIHU14Chfao9wbJ9CQPoqGs%2BNi7QPni46YGK5q6w%2BN8dZrFmNK%2BQH5GfEoMbrv14juDf8ytQW2JAnhpdLGTftA2lB4zb19R%2FlUdFF%2B04hvf3PvF5DUXbPkNELFcjdwHAw10AEL6zDXCCvhGQYjtdgvMHD3wYmXWblJhptMO6XzMQGOqUBBjDDGBy1lbrIY3K6ewNco1DEBVIzSowV0K5p8qdUMMnENASU8kp3TaiUEYfYHgZTujjkNv5qkfYGtE1bEXfvt%2BfOBU6OGBYWS1bm3x6qn5fMp%2B0JQLmTW7HvR5vX2zen%2Fl2W6pp4TJ1bqHuLb9T6oWDGxLNBeF2%2F%2B8fwmwREgjJ1y4C7MRqAGbXV%2Bs5ce%2BSeoCE3OlCPzRlfcgZneG6B5no6sCJj&X-Amz-Signature=1b7659be8c90509ec3892e6bf104832bbff153d47e961bbead59db8064742710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
