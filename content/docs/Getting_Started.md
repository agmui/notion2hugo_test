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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KGIZXY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnNIA4OcwoBtsyIvhsLLJcXK4kWsXDMzHqBfjEAmtqIAiAl%2FjsIug6s666T6Zsx3V%2FUkBzWoIYDAOV7IJeQgX5ZMSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM%2F%2Fdl6KqPZlUrnF2tKtwDTfl4g91Te%2B5qrYn5qqSs1PfnC5sXPK5KkXaTBD%2Bphvyvils2xGKKOJixslAP1%2BH1oxE6XYYhQibv9OhmstR20Lb2RO45hewtUqwStIahH2g89s6jpxBSzzH%2Fs0Ce4cgYx8xgADcxJXlUPJoLU6ud%2FTZYGjUm2CIzMVFX3eufdz%2BgJTLQXqyZwRwtih8KK81DfhrCH%2BdAy4HxDWe4BSXgPOQ3sLPJy66Y8Npfd0JZjv2sKWVwa5njkMg1mxSHc1c0og6by7u2wUJh829ix2w15BhQl4RJN2rWZpJmGinYILuw3yWnkNVGNvMeqFhjbOVfGbJIoEL5oK1vnGKSx59dztTyGQhvV47jsW3cIdT442EJENx%2F9DsBYRx62cSlyjIOEIOIaLeKZbcmn4GvJKAWPrf4CkgI8Bbgrmv0z2dQQqJfOnkbZ%2BAXTOMbtVQ0626t1MDpBxHhc5N2G13wL6eU1JQbzJbhewn%2FYSGCuBx7CQayJJ%2BuQr%2BUhXDFtGAt4EP0t%2FZfCDjVFTFirc939zZv%2BHYmEKSiF9xgT0UItjVVX7KdDOg%2FisdgZQARok4itZ3Gcbee%2F5J%2Bz3xeV5tQnKl0YH0ekQfLh5oabOXkfCWN1mqYOFkypbsp8u%2BWqOcwp8SewQY6pgGhfDD%2FMvuFCB4TRHjY7%2Fc%2FeaIECsEIOATRcBNdsUyiMRXcdzaw40N95XIP1xBZi52rAAX4lG8SmeAymDCAUMBEXTmiC%2BSwcw6ew1wg4gSXyVYcHRsEefJAypQa11aHwcOmRFvNaGwLKVKrAbouTm5UtSuMt%2B5LD2%2F%2BA6YdUHOYJwl4Y5IFA%2F%2Bj3b8tJyHqA4NyL%2FMJzs7mFmnoMQpc3Fyz90dQk0Rp&X-Amz-Signature=4e526136cff2dd323f3ff7c4c64e87bfd8b933af677c5db7a3f354ae1256e38c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KGIZXY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnNIA4OcwoBtsyIvhsLLJcXK4kWsXDMzHqBfjEAmtqIAiAl%2FjsIug6s666T6Zsx3V%2FUkBzWoIYDAOV7IJeQgX5ZMSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM%2F%2Fdl6KqPZlUrnF2tKtwDTfl4g91Te%2B5qrYn5qqSs1PfnC5sXPK5KkXaTBD%2Bphvyvils2xGKKOJixslAP1%2BH1oxE6XYYhQibv9OhmstR20Lb2RO45hewtUqwStIahH2g89s6jpxBSzzH%2Fs0Ce4cgYx8xgADcxJXlUPJoLU6ud%2FTZYGjUm2CIzMVFX3eufdz%2BgJTLQXqyZwRwtih8KK81DfhrCH%2BdAy4HxDWe4BSXgPOQ3sLPJy66Y8Npfd0JZjv2sKWVwa5njkMg1mxSHc1c0og6by7u2wUJh829ix2w15BhQl4RJN2rWZpJmGinYILuw3yWnkNVGNvMeqFhjbOVfGbJIoEL5oK1vnGKSx59dztTyGQhvV47jsW3cIdT442EJENx%2F9DsBYRx62cSlyjIOEIOIaLeKZbcmn4GvJKAWPrf4CkgI8Bbgrmv0z2dQQqJfOnkbZ%2BAXTOMbtVQ0626t1MDpBxHhc5N2G13wL6eU1JQbzJbhewn%2FYSGCuBx7CQayJJ%2BuQr%2BUhXDFtGAt4EP0t%2FZfCDjVFTFirc939zZv%2BHYmEKSiF9xgT0UItjVVX7KdDOg%2FisdgZQARok4itZ3Gcbee%2F5J%2Bz3xeV5tQnKl0YH0ekQfLh5oabOXkfCWN1mqYOFkypbsp8u%2BWqOcwp8SewQY6pgGhfDD%2FMvuFCB4TRHjY7%2Fc%2FeaIECsEIOATRcBNdsUyiMRXcdzaw40N95XIP1xBZi52rAAX4lG8SmeAymDCAUMBEXTmiC%2BSwcw6ew1wg4gSXyVYcHRsEefJAypQa11aHwcOmRFvNaGwLKVKrAbouTm5UtSuMt%2B5LD2%2F%2BA6YdUHOYJwl4Y5IFA%2F%2Bj3b8tJyHqA4NyL%2FMJzs7mFmnoMQpc3Fyz90dQk0Rp&X-Amz-Signature=8a993ea478eb400ee644f7667a19b25116cbc3ab8cb22019edff6462b362d46d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KGIZXY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnNIA4OcwoBtsyIvhsLLJcXK4kWsXDMzHqBfjEAmtqIAiAl%2FjsIug6s666T6Zsx3V%2FUkBzWoIYDAOV7IJeQgX5ZMSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM%2F%2Fdl6KqPZlUrnF2tKtwDTfl4g91Te%2B5qrYn5qqSs1PfnC5sXPK5KkXaTBD%2Bphvyvils2xGKKOJixslAP1%2BH1oxE6XYYhQibv9OhmstR20Lb2RO45hewtUqwStIahH2g89s6jpxBSzzH%2Fs0Ce4cgYx8xgADcxJXlUPJoLU6ud%2FTZYGjUm2CIzMVFX3eufdz%2BgJTLQXqyZwRwtih8KK81DfhrCH%2BdAy4HxDWe4BSXgPOQ3sLPJy66Y8Npfd0JZjv2sKWVwa5njkMg1mxSHc1c0og6by7u2wUJh829ix2w15BhQl4RJN2rWZpJmGinYILuw3yWnkNVGNvMeqFhjbOVfGbJIoEL5oK1vnGKSx59dztTyGQhvV47jsW3cIdT442EJENx%2F9DsBYRx62cSlyjIOEIOIaLeKZbcmn4GvJKAWPrf4CkgI8Bbgrmv0z2dQQqJfOnkbZ%2BAXTOMbtVQ0626t1MDpBxHhc5N2G13wL6eU1JQbzJbhewn%2FYSGCuBx7CQayJJ%2BuQr%2BUhXDFtGAt4EP0t%2FZfCDjVFTFirc939zZv%2BHYmEKSiF9xgT0UItjVVX7KdDOg%2FisdgZQARok4itZ3Gcbee%2F5J%2Bz3xeV5tQnKl0YH0ekQfLh5oabOXkfCWN1mqYOFkypbsp8u%2BWqOcwp8SewQY6pgGhfDD%2FMvuFCB4TRHjY7%2Fc%2FeaIECsEIOATRcBNdsUyiMRXcdzaw40N95XIP1xBZi52rAAX4lG8SmeAymDCAUMBEXTmiC%2BSwcw6ew1wg4gSXyVYcHRsEefJAypQa11aHwcOmRFvNaGwLKVKrAbouTm5UtSuMt%2B5LD2%2F%2BA6YdUHOYJwl4Y5IFA%2F%2Bj3b8tJyHqA4NyL%2FMJzs7mFmnoMQpc3Fyz90dQk0Rp&X-Amz-Signature=fafcd43c1a8f2cce1720fa718aebdc65381ea784443239407f952f828b3cd297&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJHK5JBP%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BH5mq5rM1LUDE4PFSMirhasnjKe%2F5ELM0l9ZS5bBl3AIhAIXJ%2Bo7gfHH7vvxeov6fYHoPtv8p4Bn558oljlT5qPYWKv8DCE4QABoMNjM3NDIzMTgzODA1IgyWZe0bs6enD%2FlEluQq3AP2I1bv%2FwC%2BUdNhwFi9gV3kBouT4do%2B1KD11RSOAW8MYBTpAvTjkOgpl4eIoLPWH%2BVbvrYszUEno2H20JpHI1SCkt7xXr6x6QpOPhHqYRMDzz%2BiZAfO42XLWCmuM4RgwmryeUhSc9w%2BVWMrKY4qsdJfolgnAl4Cf19zLdGOzzOUVKYWFMDribRWKFXtpEKYyEfvSgpGGaFdJdo9OUIu1JXZ6GkcegCrRvElGYwavqNtHTW73ZWRh36QQY7vSzvab9ZfXXR0N%2F5hKIMa38w%2F51QgdvSXuYOxAW1T6Uz53t9TbL7h16rXlgbE60HE%2F%2FawZvYZR3aU1S0k8QJAssAUiV0cBycBNMksBr3xU1vHiW8lGCoHbL8sCw6G8zKo0He330M4MZFlsbLRNWcE0gT47JA98IDnEyfsas2rq7z94xFjt39X699N1xybKa7W7N8ws6gWE9IPOErdKpypuNGc5PGMJegYF9faT%2Fus34wMcpRwT0qyzJBaLuZiONzXiZTEZW4IOPamNCnjxjJHCESw3quyWnkLGu%2BmOYcDmEiT13ppLL2HqqQebH3UB%2FtLTwqzuP0TTh4xqBJd1OWlUGw%2BM4la6exRct%2BhNn46VYHIPPR6SSfnlpqr8PGqayDRyjCyxJ7BBjqkAciGLyQ0LA%2B7VplwKoKRSxhs8OHQ0OSSGNYa81UiTb1FqrqlCG4LdNbH5POeJwR3giAJGvU86kQEUICr5kFHf6ijAaf3IxmK%2FXGim%2BP40EraNgxzjiU3jMU3m%2F8eBpZPV1%2F3CVvx9pirpJjHSSNHG5ocHhBZvwPhEepN62imnXt%2BWhJZ8%2F%2BnOEiMvgS0jBZOE3Zqz7Uv4HgRRB1UsKC8Aee%2FgB7f&X-Amz-Signature=c30c21fd86fbaa82407b145edda77be068b1eb2564fc7ce0e1276c99e668ff4b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7LM3CQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5piFQhhaePvDnxmJmOCAvYohsU8jKpR2MLJqmabN8YAiB%2B0nPJ6aLfYJJ8KaEhRe%2BGOsZJMJeBqXtbVUlPZhXiWSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMPHjGV2TJ6MfZO0gyKtwDfHQf9E5j6yHRsafKs2q%2FVbN0bTCmTqL8GtEawcdJt7uniL9U%2BH7mUbTp7Uap6vUzxAhwLhSLGQjYuZfWCT6%2Foyw5JM07LpwLqb9oB2q8PRhq7HmN%2BA0nI1tMOeVNChzOeqp2vfRPOpp92ifWhzmbXsCZPmv7uIYkvqbRjPxHRi%2BolDjQriSyFmYHMDLlIF3ETterMTX41AH%2BBcHJ9a7twgHE6wTVenuOezisFSb5zXpDkApGsbDxThALk%2FyVRuXgdK5eBT11InZm%2Fd5fmQvztaBwYEiHnpvoiTAR3Crl5athVTgyBUJE2hC7mDe6IaQ2X8akOH%2BRSkH9uxQlkQq6nFYJ6wQ3wNZNDvCEfDGmtKM1UF0LJIc%2BIt04uVJnNod%2F%2Bdy6jWlBWAQ5WIZU%2FtSxWuC%2FuRUFvxtRGM1%2F%2BMc6nJEqd20RExw7bUFktM4Mq2NS7JNolqhjJ2bXSFVOvy59MDLSQSifxALT8A4Tv9aLg121I2xUIoZeS2PZ7DXtNCe2h6NZvTwbRjmhddoJqWrD2W5up5Ai%2BVOeEbMGlEwKuCaLmyXv7x1p8sQ4bOkik1uAJN4zL497E2Yf9vThLi2XBunHCNSqUn0Shpc%2FYVbbXcxxKnuKFhzqFfX%2BHrcwvMSewQY6pgE1cYSFdffL0gBrVZtRBEv%2Fy2HGNPQ%2FcsyPtyEJYJ1JzgkNDWHu7bVir4YGoD0XZ215LQNIZtoGCkRgQPfN9NRdTP19SstqxM94%2BDzVTOo7uWeSeh63vEqMiwTervqbVIFmz45NprREjtL%2Fo0BvEqc7wgi0lpcN506fXFxmDfz3UEtBLmOLBNkyc4DTE5M4dl4Jr2qmjlNIK34S%2BSZy0vFDvbs1300T&X-Amz-Signature=a5c092b2cb8f4191ec79e0a02bf87a1a98663af4e4f2727b0e836c8d1fb62a32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KGIZXY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnNIA4OcwoBtsyIvhsLLJcXK4kWsXDMzHqBfjEAmtqIAiAl%2FjsIug6s666T6Zsx3V%2FUkBzWoIYDAOV7IJeQgX5ZMSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM%2F%2Fdl6KqPZlUrnF2tKtwDTfl4g91Te%2B5qrYn5qqSs1PfnC5sXPK5KkXaTBD%2Bphvyvils2xGKKOJixslAP1%2BH1oxE6XYYhQibv9OhmstR20Lb2RO45hewtUqwStIahH2g89s6jpxBSzzH%2Fs0Ce4cgYx8xgADcxJXlUPJoLU6ud%2FTZYGjUm2CIzMVFX3eufdz%2BgJTLQXqyZwRwtih8KK81DfhrCH%2BdAy4HxDWe4BSXgPOQ3sLPJy66Y8Npfd0JZjv2sKWVwa5njkMg1mxSHc1c0og6by7u2wUJh829ix2w15BhQl4RJN2rWZpJmGinYILuw3yWnkNVGNvMeqFhjbOVfGbJIoEL5oK1vnGKSx59dztTyGQhvV47jsW3cIdT442EJENx%2F9DsBYRx62cSlyjIOEIOIaLeKZbcmn4GvJKAWPrf4CkgI8Bbgrmv0z2dQQqJfOnkbZ%2BAXTOMbtVQ0626t1MDpBxHhc5N2G13wL6eU1JQbzJbhewn%2FYSGCuBx7CQayJJ%2BuQr%2BUhXDFtGAt4EP0t%2FZfCDjVFTFirc939zZv%2BHYmEKSiF9xgT0UItjVVX7KdDOg%2FisdgZQARok4itZ3Gcbee%2F5J%2Bz3xeV5tQnKl0YH0ekQfLh5oabOXkfCWN1mqYOFkypbsp8u%2BWqOcwp8SewQY6pgGhfDD%2FMvuFCB4TRHjY7%2Fc%2FeaIECsEIOATRcBNdsUyiMRXcdzaw40N95XIP1xBZi52rAAX4lG8SmeAymDCAUMBEXTmiC%2BSwcw6ew1wg4gSXyVYcHRsEefJAypQa11aHwcOmRFvNaGwLKVKrAbouTm5UtSuMt%2B5LD2%2F%2BA6YdUHOYJwl4Y5IFA%2F%2Bj3b8tJyHqA4NyL%2FMJzs7mFmnoMQpc3Fyz90dQk0Rp&X-Amz-Signature=5bac86a2c6275cf9af58e4d42c5b1d1d36c0a62d25964e4bd0833705a49ed37c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
