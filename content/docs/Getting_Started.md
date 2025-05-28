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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKCAARL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzuZPvvrdwcSXYdG4%2BMYPWM3FCd3B00BLW%2FdpDu37O%2BAiEAjq7NdNOqm1nx05SERp%2Bewgy7B7WzzGdfkArXOxO9ppUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFYxiP4OseEgqSrySircA2xmrTi6ucQVGVl06ey6OdsL8dD8ohfkUmXDQXGf5P3BeQHpByJsIq5HLLoX76V%2FN1XjKKmDx1cID8hnotuqkCMSG2kCKAgGirqjRfdisHViuGVN5Q0TBOreKVXEtJpbpyhYfjFBOZ54GEKnu94zBX8h1eqzaG0Tk8Y%2Bu9SIVlTiXBFB1aF3kX%2FRmegCGRcJm5pMWJH%2BYkvdDFMoK5m85nXdfWEJGu%2BMtGmE%2Bmjgd7UvQDNJXAtRMb%2FEAMmrQKW9P0uMLdHiQKRMOKgLicb2UqK%2Bj2E%2BdBF6Mb6mhs1MqrKamGUcyEtjFb9Bf53V8c8dW5x89F7g%2FJPpFMouSNIwBO4fIedQ9rgc%2BXXOB7ehlDapwgpUkQH48LjKx%2BpijxUjGhyQDW9FKDrg8nUq7BVlfXVZXtfaRkbizoDd4FQquHkKmeWdnIm%2FGqP90qg4Ipfq8MflApQKvDkYkWJwl57EA61rWpElfSYiLn%2BcGNnKJGbgfnkp1kYYQW2f6NKoe8RCyOn9sohoiHFu8I3F7PaE3nVkt15iEWpcBYr8zVuO5E4JBr5PYaG%2B52bNvTlrVsGdovMk5A6GQn4dwhWKJ6t9kO5e9iwZoZ2u3vTJwyLTiWilZokYLPZyVzXzsjHTMNf43MEGOqUBgaU%2Bf%2B8VZDfN4OYVYcVGkr7HGjxN%2F0ADQC%2FsjsD2mFal%2BDxyjcEJnUCLMM9VC6burKkdJWSMZk%2B1%2Bx2AVuVWIZ9yNJbvdqP%2FbfgkL1fMMuWVRss6yqflDqImOdPzfNqHuiTBHoaSupGHm2ijOPgzBMMM%2BTFEZEwikpIfXYwmm%2BVm7OVgR6OwdWb8Nvn075KRJ7zoMZHm4Tg3cUIZUXDnDyrCsskX&X-Amz-Signature=1d7b7b694d05ff55fb799f93b74c4557dfa2731d9b00c64ed9fd703cdef4494c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKCAARL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzuZPvvrdwcSXYdG4%2BMYPWM3FCd3B00BLW%2FdpDu37O%2BAiEAjq7NdNOqm1nx05SERp%2Bewgy7B7WzzGdfkArXOxO9ppUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFYxiP4OseEgqSrySircA2xmrTi6ucQVGVl06ey6OdsL8dD8ohfkUmXDQXGf5P3BeQHpByJsIq5HLLoX76V%2FN1XjKKmDx1cID8hnotuqkCMSG2kCKAgGirqjRfdisHViuGVN5Q0TBOreKVXEtJpbpyhYfjFBOZ54GEKnu94zBX8h1eqzaG0Tk8Y%2Bu9SIVlTiXBFB1aF3kX%2FRmegCGRcJm5pMWJH%2BYkvdDFMoK5m85nXdfWEJGu%2BMtGmE%2Bmjgd7UvQDNJXAtRMb%2FEAMmrQKW9P0uMLdHiQKRMOKgLicb2UqK%2Bj2E%2BdBF6Mb6mhs1MqrKamGUcyEtjFb9Bf53V8c8dW5x89F7g%2FJPpFMouSNIwBO4fIedQ9rgc%2BXXOB7ehlDapwgpUkQH48LjKx%2BpijxUjGhyQDW9FKDrg8nUq7BVlfXVZXtfaRkbizoDd4FQquHkKmeWdnIm%2FGqP90qg4Ipfq8MflApQKvDkYkWJwl57EA61rWpElfSYiLn%2BcGNnKJGbgfnkp1kYYQW2f6NKoe8RCyOn9sohoiHFu8I3F7PaE3nVkt15iEWpcBYr8zVuO5E4JBr5PYaG%2B52bNvTlrVsGdovMk5A6GQn4dwhWKJ6t9kO5e9iwZoZ2u3vTJwyLTiWilZokYLPZyVzXzsjHTMNf43MEGOqUBgaU%2Bf%2B8VZDfN4OYVYcVGkr7HGjxN%2F0ADQC%2FsjsD2mFal%2BDxyjcEJnUCLMM9VC6burKkdJWSMZk%2B1%2Bx2AVuVWIZ9yNJbvdqP%2FbfgkL1fMMuWVRss6yqflDqImOdPzfNqHuiTBHoaSupGHm2ijOPgzBMMM%2BTFEZEwikpIfXYwmm%2BVm7OVgR6OwdWb8Nvn075KRJ7zoMZHm4Tg3cUIZUXDnDyrCsskX&X-Amz-Signature=a9888393783db26fa1060cd41be8c285256bc6902830de6a53cbfe62f192cc58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKCAARL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzuZPvvrdwcSXYdG4%2BMYPWM3FCd3B00BLW%2FdpDu37O%2BAiEAjq7NdNOqm1nx05SERp%2Bewgy7B7WzzGdfkArXOxO9ppUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFYxiP4OseEgqSrySircA2xmrTi6ucQVGVl06ey6OdsL8dD8ohfkUmXDQXGf5P3BeQHpByJsIq5HLLoX76V%2FN1XjKKmDx1cID8hnotuqkCMSG2kCKAgGirqjRfdisHViuGVN5Q0TBOreKVXEtJpbpyhYfjFBOZ54GEKnu94zBX8h1eqzaG0Tk8Y%2Bu9SIVlTiXBFB1aF3kX%2FRmegCGRcJm5pMWJH%2BYkvdDFMoK5m85nXdfWEJGu%2BMtGmE%2Bmjgd7UvQDNJXAtRMb%2FEAMmrQKW9P0uMLdHiQKRMOKgLicb2UqK%2Bj2E%2BdBF6Mb6mhs1MqrKamGUcyEtjFb9Bf53V8c8dW5x89F7g%2FJPpFMouSNIwBO4fIedQ9rgc%2BXXOB7ehlDapwgpUkQH48LjKx%2BpijxUjGhyQDW9FKDrg8nUq7BVlfXVZXtfaRkbizoDd4FQquHkKmeWdnIm%2FGqP90qg4Ipfq8MflApQKvDkYkWJwl57EA61rWpElfSYiLn%2BcGNnKJGbgfnkp1kYYQW2f6NKoe8RCyOn9sohoiHFu8I3F7PaE3nVkt15iEWpcBYr8zVuO5E4JBr5PYaG%2B52bNvTlrVsGdovMk5A6GQn4dwhWKJ6t9kO5e9iwZoZ2u3vTJwyLTiWilZokYLPZyVzXzsjHTMNf43MEGOqUBgaU%2Bf%2B8VZDfN4OYVYcVGkr7HGjxN%2F0ADQC%2FsjsD2mFal%2BDxyjcEJnUCLMM9VC6burKkdJWSMZk%2B1%2Bx2AVuVWIZ9yNJbvdqP%2FbfgkL1fMMuWVRss6yqflDqImOdPzfNqHuiTBHoaSupGHm2ijOPgzBMMM%2BTFEZEwikpIfXYwmm%2BVm7OVgR6OwdWb8Nvn075KRJ7zoMZHm4Tg3cUIZUXDnDyrCsskX&X-Amz-Signature=9ed8362682e5d159a8e47df2a5cb3d426e6512d388d491f227eccbb2fcd32801&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXK3NQ3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDva1Gj1Pw2Iz7ktvR8oimkbHec9%2Bg1LWmPwWvm79qgkgIgGhMpnCYJixTaID93Z3WSA%2BbTRBYYWbxjyn0DmkBUWEEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDL8wbnIX%2Ftz7toRBtSrcA%2FXAPtvy8VGJlErNbGVisQ%2Bh%2FzW%2F5tlzfo2Gkeu679HRd4%2FjmQvWDvQCQx6%2F%2Bdtm7cWCwSypspDQFp2N%2BVMeiRsOEgPGX2d7smQGuqyiEMtn9BLLBS2kShcY7LWxsSaB9k8ZHz8DK3%2FcCATTpi%2FFMLba1ylMizcLp%2FjdT%2BtOPquQKwm27HBjaDxI1FcO28SK0Op14ha%2FfVCFNgErGlRU1fN6MbMVYQ7BadjKhRTTdyE7wXmi2EtaS6K%2BimloPzYaRC2Mg9yEU2whceHfaaCtJSuztFCHGr1uJxv9U%2FSofOk408UOF9eng78TOg6fYizBaC9mo%2Fzi8QZfWAEePXFHPAcuF3VjTjq%2B%2F2JkV8DABOY0cw%2BkmZ7Zv4LCbiy4H6q%2F0rbqvyZXQRQ2OVzCnByPIBu5m%2BMIfFNrw3l3RYq%2FlIgX3pV1UcqYirBEEUbEgUcjtBH2lXFw2MLK2pJ0UmYvJ7YakSJOA7HGMXIBcRUxDoshpv05cnq5WvA9hsxY9jV1aOVkleF2qXFXMAsgmlJwtKMBAVOQ4UaALRCiOhZ124iWCma%2FqL5DtAc58hOrZJgTQIQiwIkX3b1MrDZC2Hls2aD%2BhdA8kanA9LoUKnsqKA7%2Bf6Av4iaT0VU0%2Bn%2FyMM343MEGOqUBQ4CriAPc%2FurwEd0aZB1zuv7l7Jv6w5WXwVKWQl%2F0KR3jJPvgZqBmylJDBiFKtjA1eTw4msdAIYqb%2FBvp7q5flAXhdZelRIUDGlteJd1fEXxjA4P2VXPs8A2370wS9d4R6dqZL5iL%2FRjVy6k%2BoOU%2B5dg4kph%2FIl%2BxVwwvlqI3hAKH5uY5V9g8Ftf6L5BaVOeenShhM6hwQaQC8cvCboPQpJq3j3dc&X-Amz-Signature=6aa8e91c7210124e61513a14201bfbdf5b22244ae9c1cf2698b52783a96c3710&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3HQH6O%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKlTAc9X66ACx6TUB3dLqqtIDutybv%2FSb6VhRKubf9fAiACS7WpyqEg2tXdpg625WIRLcjFF5V7evYND4%2BIwVKdPyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMo%2FeIWuxQOdckieVmKtwDOS71l9gW1UPjxxKt84jXM3YULEdbUcj3UnGgjwFuJy6BfMidb2G7nKtP7V8Dxt1Sum6aDJ3tSdGxFeFBw4MMyjlvMCNu%2FAsGKEsIGhlc%2Bie5u6%2BD2hHlo0CcJsjxKCFg2s4CE85EQMmoOcrbqm%2BBdJXebI3aVvrnD1yMJr220OSp2XT2VRjW49m4YNT6VnB56lZIxFMXCrhYqIuu8RqAnXrRPW8CbMUXM0jdFsUe5UXMBBh6KHpCl5IMN7BKM7H1cE2N6nZg7%2BVWHOEuDiLCZD4HjMpQO3b90CjQDMfOoeqTevCg4%2FAE3TENi5H5R8iTc0RRGNxpM5%2FHAo1RjoK8NnXLLWvE7O2y6%2Bdb9ktYs5MeqTYV9UPvmgjPMUQT6jfwmjoszL3gGzP6j8tgzCb4ctPzwRlPI3r2XE5y25U1%2B5uDi2DaecNlrELn%2Bb4NfIS5VNlGfk6kqiQo0iU6jrzjTg2r%2FxcNOCf%2BGSRcO%2FZP9pz1%2FtIboaboJXphkxnOcE0FxBmXJ2Pn3eQ%2FbSmO60mydzA%2Bi24O3W99AtcdfC14%2FqriMjxqOEtCcDSs4ctm62KpGy3Me8jbtaadk9l3LezEAwdr67FZmkpZquCrRQ3NkkIca%2BlDKT2f8sQvjmIwyI3dwQY6pgH0oy%2BQW5lDeJoKC6hpw8Hnnw6pnH6q6rt6m0WN9WjmkpjRWtTajUA8JChaGQFHurAY0zEtdPW9lccsDCqJyoW5ZUBIzB6E%2Bhx5jI4pPOn6hZ9Pr0BjYweTzxugaXmdmsVTAz2hitnDie81SaUoN5lScbdPa1LjrPBCtsXDORIIdH%2FDKb3%2BT1OIyrQWmbXMOFdd5jCUyYulfjIE9ZgFAztp%2F5%2Fz%2FDDy&X-Amz-Signature=8e40f65b9c144d16a6bf30c8d486d03252a078b8db8b61c57a2d9c2b163c99c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKCAARL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzuZPvvrdwcSXYdG4%2BMYPWM3FCd3B00BLW%2FdpDu37O%2BAiEAjq7NdNOqm1nx05SERp%2Bewgy7B7WzzGdfkArXOxO9ppUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFYxiP4OseEgqSrySircA2xmrTi6ucQVGVl06ey6OdsL8dD8ohfkUmXDQXGf5P3BeQHpByJsIq5HLLoX76V%2FN1XjKKmDx1cID8hnotuqkCMSG2kCKAgGirqjRfdisHViuGVN5Q0TBOreKVXEtJpbpyhYfjFBOZ54GEKnu94zBX8h1eqzaG0Tk8Y%2Bu9SIVlTiXBFB1aF3kX%2FRmegCGRcJm5pMWJH%2BYkvdDFMoK5m85nXdfWEJGu%2BMtGmE%2Bmjgd7UvQDNJXAtRMb%2FEAMmrQKW9P0uMLdHiQKRMOKgLicb2UqK%2Bj2E%2BdBF6Mb6mhs1MqrKamGUcyEtjFb9Bf53V8c8dW5x89F7g%2FJPpFMouSNIwBO4fIedQ9rgc%2BXXOB7ehlDapwgpUkQH48LjKx%2BpijxUjGhyQDW9FKDrg8nUq7BVlfXVZXtfaRkbizoDd4FQquHkKmeWdnIm%2FGqP90qg4Ipfq8MflApQKvDkYkWJwl57EA61rWpElfSYiLn%2BcGNnKJGbgfnkp1kYYQW2f6NKoe8RCyOn9sohoiHFu8I3F7PaE3nVkt15iEWpcBYr8zVuO5E4JBr5PYaG%2B52bNvTlrVsGdovMk5A6GQn4dwhWKJ6t9kO5e9iwZoZ2u3vTJwyLTiWilZokYLPZyVzXzsjHTMNf43MEGOqUBgaU%2Bf%2B8VZDfN4OYVYcVGkr7HGjxN%2F0ADQC%2FsjsD2mFal%2BDxyjcEJnUCLMM9VC6burKkdJWSMZk%2B1%2Bx2AVuVWIZ9yNJbvdqP%2FbfgkL1fMMuWVRss6yqflDqImOdPzfNqHuiTBHoaSupGHm2ijOPgzBMMM%2BTFEZEwikpIfXYwmm%2BVm7OVgR6OwdWb8Nvn075KRJ7zoMZHm4Tg3cUIZUXDnDyrCsskX&X-Amz-Signature=9fa23bf4aa06d79c049fff746a88d69048f9c00f5d09fadbd574f0d3787ed96b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
