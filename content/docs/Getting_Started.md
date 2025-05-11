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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIO4WSCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIB6HEKYgfUMEReBL%2FLdHjFOF00p9CRsDGD%2Bs%2FZZTFLU3AiAdV5LoC%2FXAeVB63t%2F5nk8neVm28eZ6H88%2F%2B%2FItyMPssiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOp%2FeoAhzqd0eVOvjKtwDDqtWxZlftu7fwb5S0l3eudz9cnBa8Hzq3aTguJiZnH2A6%2F9bl29Gx3IO3zdkFhXL1nrj5N2tFeUR4B%2BU1Uq9QQwqz3AO3mrk4j9VS1Rx9RtgEI8x5lXM4HbuMDzrMZzzePkzjPXqGs5wF4KiWYY7FBy3eW5NsO76Im%2FcJWNP7H51RPuvD%2B5f2BHuugEwDUwGcF4LCaBMZDQH6t8peX%2BZWagtm%2FGWMQGoDc9c5qbxiFlAni%2BlyvcVc7ZE0tdX7Zpg%2B0aCPXmcV3z39AR3bk4aadvE6R%2Bb%2FFYDP%2FFBbQNyZ4cgxQ2DXucEor4DJYlFpRHqX%2FuvyiAwlyTSu0zDxZwTMmiMWJYTmOdDhln5Z2ksmtKZynpsXbKEM3n8%2F6N4S0khTfHXQBdyBQDHRMmRIWoKk9zl6b0Uq%2BuV6w4CSS3AdWUh4A8gG6sBi5sJ%2FFjyD4IJNor%2Fft63bVfT85funnHml4pK8u%2BM6V1eAE9wJubQLRBOglubZFrOIu%2FeaUUAu4SHzBjKIaejb%2FkAc6HDL%2B4MiNDWJTULX9RU2UxDmsMnkERDA9CINtS30gyeYC2mtixadEPdlbg5IWXQGVZ05kKEK3nOZl%2BVkeXHP7hfJKC457Ad4C49EmPcAzhpXJIwwN6AwQY6pgGf5Mfox0VWGzVNOJqCF8i1mdXE0JHopGTE90gaY05z1omo1ZbQPpccbijby4HGIDVK63yFkGpcs4OfGCGzJIE5GQ6pWo2G9%2BSW2230qbU%2FClizRgmYyLjvf2HTwns5N4I6PQmVKxLzneuKjV%2BVm32j%2BzrIo83YU2hcRPIbzhl1MdiiT74%2F90RB6lqb6NmS1ZrMX2mh0p0OgkBIc8Xu6%2Fd8gUNnamPI&X-Amz-Signature=73ce784f22b810b725dad01c4be29dea8079f583e0306c73ca9b570b0523dfe9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIO4WSCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIB6HEKYgfUMEReBL%2FLdHjFOF00p9CRsDGD%2Bs%2FZZTFLU3AiAdV5LoC%2FXAeVB63t%2F5nk8neVm28eZ6H88%2F%2B%2FItyMPssiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOp%2FeoAhzqd0eVOvjKtwDDqtWxZlftu7fwb5S0l3eudz9cnBa8Hzq3aTguJiZnH2A6%2F9bl29Gx3IO3zdkFhXL1nrj5N2tFeUR4B%2BU1Uq9QQwqz3AO3mrk4j9VS1Rx9RtgEI8x5lXM4HbuMDzrMZzzePkzjPXqGs5wF4KiWYY7FBy3eW5NsO76Im%2FcJWNP7H51RPuvD%2B5f2BHuugEwDUwGcF4LCaBMZDQH6t8peX%2BZWagtm%2FGWMQGoDc9c5qbxiFlAni%2BlyvcVc7ZE0tdX7Zpg%2B0aCPXmcV3z39AR3bk4aadvE6R%2Bb%2FFYDP%2FFBbQNyZ4cgxQ2DXucEor4DJYlFpRHqX%2FuvyiAwlyTSu0zDxZwTMmiMWJYTmOdDhln5Z2ksmtKZynpsXbKEM3n8%2F6N4S0khTfHXQBdyBQDHRMmRIWoKk9zl6b0Uq%2BuV6w4CSS3AdWUh4A8gG6sBi5sJ%2FFjyD4IJNor%2Fft63bVfT85funnHml4pK8u%2BM6V1eAE9wJubQLRBOglubZFrOIu%2FeaUUAu4SHzBjKIaejb%2FkAc6HDL%2B4MiNDWJTULX9RU2UxDmsMnkERDA9CINtS30gyeYC2mtixadEPdlbg5IWXQGVZ05kKEK3nOZl%2BVkeXHP7hfJKC457Ad4C49EmPcAzhpXJIwwN6AwQY6pgGf5Mfox0VWGzVNOJqCF8i1mdXE0JHopGTE90gaY05z1omo1ZbQPpccbijby4HGIDVK63yFkGpcs4OfGCGzJIE5GQ6pWo2G9%2BSW2230qbU%2FClizRgmYyLjvf2HTwns5N4I6PQmVKxLzneuKjV%2BVm32j%2BzrIo83YU2hcRPIbzhl1MdiiT74%2F90RB6lqb6NmS1ZrMX2mh0p0OgkBIc8Xu6%2Fd8gUNnamPI&X-Amz-Signature=a7dd2d7687133fde91fdba3d645976b45949b2b9f987f970e012e8d99fff77b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIO4WSCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIB6HEKYgfUMEReBL%2FLdHjFOF00p9CRsDGD%2Bs%2FZZTFLU3AiAdV5LoC%2FXAeVB63t%2F5nk8neVm28eZ6H88%2F%2B%2FItyMPssiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOp%2FeoAhzqd0eVOvjKtwDDqtWxZlftu7fwb5S0l3eudz9cnBa8Hzq3aTguJiZnH2A6%2F9bl29Gx3IO3zdkFhXL1nrj5N2tFeUR4B%2BU1Uq9QQwqz3AO3mrk4j9VS1Rx9RtgEI8x5lXM4HbuMDzrMZzzePkzjPXqGs5wF4KiWYY7FBy3eW5NsO76Im%2FcJWNP7H51RPuvD%2B5f2BHuugEwDUwGcF4LCaBMZDQH6t8peX%2BZWagtm%2FGWMQGoDc9c5qbxiFlAni%2BlyvcVc7ZE0tdX7Zpg%2B0aCPXmcV3z39AR3bk4aadvE6R%2Bb%2FFYDP%2FFBbQNyZ4cgxQ2DXucEor4DJYlFpRHqX%2FuvyiAwlyTSu0zDxZwTMmiMWJYTmOdDhln5Z2ksmtKZynpsXbKEM3n8%2F6N4S0khTfHXQBdyBQDHRMmRIWoKk9zl6b0Uq%2BuV6w4CSS3AdWUh4A8gG6sBi5sJ%2FFjyD4IJNor%2Fft63bVfT85funnHml4pK8u%2BM6V1eAE9wJubQLRBOglubZFrOIu%2FeaUUAu4SHzBjKIaejb%2FkAc6HDL%2B4MiNDWJTULX9RU2UxDmsMnkERDA9CINtS30gyeYC2mtixadEPdlbg5IWXQGVZ05kKEK3nOZl%2BVkeXHP7hfJKC457Ad4C49EmPcAzhpXJIwwN6AwQY6pgGf5Mfox0VWGzVNOJqCF8i1mdXE0JHopGTE90gaY05z1omo1ZbQPpccbijby4HGIDVK63yFkGpcs4OfGCGzJIE5GQ6pWo2G9%2BSW2230qbU%2FClizRgmYyLjvf2HTwns5N4I6PQmVKxLzneuKjV%2BVm32j%2BzrIo83YU2hcRPIbzhl1MdiiT74%2F90RB6lqb6NmS1ZrMX2mh0p0OgkBIc8Xu6%2Fd8gUNnamPI&X-Amz-Signature=a3661e538eb446c391d1378416248b09b852426293e136237e9ad90ac92fdc67&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMESMC3V%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHBFJiFIQ5kGSnO14T0pg9d7QlSBVtrtnz6E7P6wJ3iMAiAZselXu9lJBL05tepxGW%2Fjz3XOVvDoXjMXNj8pLHNl%2BCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIdxu%2FYX%2FNBPDfYjZKtwDAfqw43AeD9tM4JyqZmp7EDFEo4a1oyVqaJZUHb2lGhYWtytaeOkZT6%2FVBzXL9X8eHP6441JQOx5Ap24tu1mKnjt64J%2Fxn2wCMZvAV98x6NXPoI%2FlmXULUoRPCB%2BYGe1guNqKJ3fK%2BSjM%2FxM4cXiYs35SWnhMvScadbaxDKIseAbFuUjuoZwvnN6AfcwEk%2F7Cz9FcQxl5fKxT1mUAu%2Bw%2BZTHqOej%2F1nBrlHEI5TOUdZoW5DzKtVi4vpZly%2BSld92XJ7%2BWbkyIffJA3R2mJx4zovC851M44VPuKCvNQdOo4KTQZIgWwI3NVejtgcsLjtSirXhOrShMXRBWEhraIYcpSjEQMUNGIwggMbNnlbVi8K2ajk3toEcXTg166wBG80ekwQ%2FuMG6wR48ZMc217BfkSZIHuh%2FuFfRu3d9GGoCttPIP%2FixM7MNlkGEjRkDpoWGRJKnzgIBf%2FMr5D%2Bc7P2p1ZCRPcS3EIELQEyd1WAfMMv%2B%2BDRjGkZJco78Bu9LLxvvk6c51JCpdNmn7a5zvbNttm0WzUpobwSa0fXUsdrndKCAZ5o8HiEhUnNa%2FObp7tOPjTUMAIycFM9FTwnCN9PgV24%2BcwGUeR9F93otTEf8vST0CY3iZytmB24RwzC4wpZCBwQY6pgHe1dnwN6I92C6hzm2EPb7ECXKwDaAqxXCP8E%2FbyN4ub3GUg4VpyzmnbkNqV3Rl9NmXhvHlvXMk9s9QSBTYf4OTO6AOZaMZFiEzdAW5GftEP2OaUI%2Bqz7NpygKY4fL3tcq1zsDmcImM0Pl28F2Msv7fjKBt09P8H8Zr5i2r3abFn7Y2WQCA9%2BqRjZ70Nrs9vFc20QN5UBTn7TUdy%2FBorf%2FKozT124cS&X-Amz-Signature=8bb5ab8439a90559e9317bb7d4d7ff774497a1642b5c625d643a3501801d5be3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQ7C4CE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAYLLj5NLshd00XfVFuXELeRGXakhI1vySsdNw8dXw3IAiBFEnYOkiZVrAPinSRAevnhofKRV8wU2VnhtOeGDVYw%2FyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9EMoqN%2B0CzSGQ2FMKtwDYfOEJOzQOpv9P2JDPyrCIWt2TEj8R4P%2FNADCOzfuUSmi8Yw7%2Fwlt140WQtbuNpO0dHMmPwTl0RR%2B9CVRj8BBFM7c%2Bsyfrne31NCNkUHyuo6vk%2B6hvJOt7XnLipOeV3Dnu0rB4YNKv1K94RMcWZ9kgZi3nOCigr%2FTSu0KAhpO8ySov1T2GCKjXiAJ1A0%2Fk%2BWGqVdYEmOmlzu%2Bz%2FVo%2FMG5F2Ut5UvFTFwKCpJjNkGRbi%2F80BnwqO4KW3Ch5jV44fjhBe9UUOPU3qGy0Ozy9sxPIl2warTMu785jCZ5TOyVeYjCPEtdOO7KsgA2gwWSZDrJAHVJLSffJni%2F1Js%2FWKskRaGhT6Gm1TPw1OZnrqdRmfxe34mhHHqQjLe5jpp9Uxo1JIsSzbysOtZ9N7is4y5WIB%2FZA8ErTz08BQS2ASUGW7JsWIy7jR%2FqRSpnsNGHju4nz7vvpGXpx8UrAdtXQZ8zaFD0IYo%2BalrcHOsdGqo0Um%2BRFB2sjgdJ0%2BpLplsG0xd119jPM9iq2VvWqNlz0sDODYgaJhedXxue14ufWAJ%2FBqlsYJkUwvnRUoSn2Vnz6215GcVaRDhEwPljQlG%2BqaniWlkgPWzpVongb8%2BpY1WD1iJ3G2gLst25hJTCI8swtt6AwQY6pgFDErQhQ34%2BeqIAjz4iktx2bdJPy5Xw8zovbNsKOzDkbSs1AyIqHVGm%2B4nKNT7z4eat63sQdQ5Z8l7vHHCf1963P8hcZeIniXqNPoj5DKY8laarpwHix3G3YTBYt1Jfl%2BA7NnrL2EX%2FxhlySRcWf6HoQU%2FdXcJeJg92rSLtwcffhb1iJ30Yh8lQE9YKOmYZ894TYjSn%2FW0n99KlZwipafspM6V5B5go&X-Amz-Signature=3fce4c526f0a961e5f86db86080c52b20cb17c73706c17f866b881245ae8786f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIO4WSCG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIB6HEKYgfUMEReBL%2FLdHjFOF00p9CRsDGD%2Bs%2FZZTFLU3AiAdV5LoC%2FXAeVB63t%2F5nk8neVm28eZ6H88%2F%2B%2FItyMPssiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOp%2FeoAhzqd0eVOvjKtwDDqtWxZlftu7fwb5S0l3eudz9cnBa8Hzq3aTguJiZnH2A6%2F9bl29Gx3IO3zdkFhXL1nrj5N2tFeUR4B%2BU1Uq9QQwqz3AO3mrk4j9VS1Rx9RtgEI8x5lXM4HbuMDzrMZzzePkzjPXqGs5wF4KiWYY7FBy3eW5NsO76Im%2FcJWNP7H51RPuvD%2B5f2BHuugEwDUwGcF4LCaBMZDQH6t8peX%2BZWagtm%2FGWMQGoDc9c5qbxiFlAni%2BlyvcVc7ZE0tdX7Zpg%2B0aCPXmcV3z39AR3bk4aadvE6R%2Bb%2FFYDP%2FFBbQNyZ4cgxQ2DXucEor4DJYlFpRHqX%2FuvyiAwlyTSu0zDxZwTMmiMWJYTmOdDhln5Z2ksmtKZynpsXbKEM3n8%2F6N4S0khTfHXQBdyBQDHRMmRIWoKk9zl6b0Uq%2BuV6w4CSS3AdWUh4A8gG6sBi5sJ%2FFjyD4IJNor%2Fft63bVfT85funnHml4pK8u%2BM6V1eAE9wJubQLRBOglubZFrOIu%2FeaUUAu4SHzBjKIaejb%2FkAc6HDL%2B4MiNDWJTULX9RU2UxDmsMnkERDA9CINtS30gyeYC2mtixadEPdlbg5IWXQGVZ05kKEK3nOZl%2BVkeXHP7hfJKC457Ad4C49EmPcAzhpXJIwwN6AwQY6pgGf5Mfox0VWGzVNOJqCF8i1mdXE0JHopGTE90gaY05z1omo1ZbQPpccbijby4HGIDVK63yFkGpcs4OfGCGzJIE5GQ6pWo2G9%2BSW2230qbU%2FClizRgmYyLjvf2HTwns5N4I6PQmVKxLzneuKjV%2BVm32j%2BzrIo83YU2hcRPIbzhl1MdiiT74%2F90RB6lqb6NmS1ZrMX2mh0p0OgkBIc8Xu6%2Fd8gUNnamPI&X-Amz-Signature=61f4fc94781dd2e492d44da38ca8d70e43eb2a47862f5505b935ae1e3e57b993&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
