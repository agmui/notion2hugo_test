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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLEWGTS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEOYJckEl6ZoDs4lorjrP7NUX4Ti5jwK061zKixqNND%2BAiEAhYdHbhoWdU4q3KTqy31j8Pum7J6o9mD1%2F5MnXLPrLfAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDyAL8Aon%2BKiu5p%2BASrcA72hItuprwjpEp5NVhBWBC7O8Fd7nV8wrSfNtIn%2BwLvxLyY9oNNKoIQB%2F5%2Fx%2B4DRuT4RsUENSFRK%2BVlf1ZVa8YMkZBOLWf7rzXRsGQRxVDkqatG8tPz9noJm3d9Xasp99f5qlSooLygptTnHZ%2FYdInziaC3mS%2FAbyJBeNxrlhlH2SnhsVQoa8%2F2N9FYBLJECwRHD%2F8qSFuXuJpl9heJfZXba%2FLvCvkbt48HHrRs6oQYCeS3JkNi7dC1lfyb44thpVvpYSDDI%2FriL%2Bw0jvffdBQkuGjytfVhU7GyuspD5HgDtJ9P4JK%2Bb0qSOYFbHlQi3FgravlSqDEN7W5feKG8p4ekIlChTCfS6zFfbgRaj%2Faygv%2Bt06igtP%2BeJMBwRRzygUyMAvrKFAeGvMFgChi16jrhIWXxlZDmy8jCbB6E8kq5Hcffy1kN2xV%2B6u1K0reNHG%2BQzzZN3RRpz9kCvbt8Hl2aVrWJcPE3GGLZvmSLDVhxgZNKUYj4DyJHjd7L2HCxhSEPuYFDw329OWzXgcXFunt7VUTDcn5f5m816Z5rpHHP7EsTdv3x8eIPM%2Fr5UxGOhCLDJvihZrW9fRg5DSA4faJhaBxU709M8LkdFZeAxdUmcEYJpYT%2BrCnjYuEAfMKiyicQGOqUBFFvjps8AeotsZ0799ft8rjyI%2BtwjO1MC%2B9j%2BbRGceTdVk7Cqfgbr6U56RHlxYItYSLdwqjblqxLFQxpUqBn%2FnFx6Y8ATqejChW3L3sDF2I%2Fh6US7poN9D6WyDQtr2c%2FQJup0EWzIPndwjFuHX3PUojar%2BGU8ZCJiDQ2ZAF6n7FwssHvxSP1aGAZzBVxO4Nmyu9Me4lgLEQjVbn6cd10bBb4HbVdB&X-Amz-Signature=6a9876a8e73e9a64fca943503f6a331f291472411cb4b6a687bc81ba77f35763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLEWGTS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEOYJckEl6ZoDs4lorjrP7NUX4Ti5jwK061zKixqNND%2BAiEAhYdHbhoWdU4q3KTqy31j8Pum7J6o9mD1%2F5MnXLPrLfAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDyAL8Aon%2BKiu5p%2BASrcA72hItuprwjpEp5NVhBWBC7O8Fd7nV8wrSfNtIn%2BwLvxLyY9oNNKoIQB%2F5%2Fx%2B4DRuT4RsUENSFRK%2BVlf1ZVa8YMkZBOLWf7rzXRsGQRxVDkqatG8tPz9noJm3d9Xasp99f5qlSooLygptTnHZ%2FYdInziaC3mS%2FAbyJBeNxrlhlH2SnhsVQoa8%2F2N9FYBLJECwRHD%2F8qSFuXuJpl9heJfZXba%2FLvCvkbt48HHrRs6oQYCeS3JkNi7dC1lfyb44thpVvpYSDDI%2FriL%2Bw0jvffdBQkuGjytfVhU7GyuspD5HgDtJ9P4JK%2Bb0qSOYFbHlQi3FgravlSqDEN7W5feKG8p4ekIlChTCfS6zFfbgRaj%2Faygv%2Bt06igtP%2BeJMBwRRzygUyMAvrKFAeGvMFgChi16jrhIWXxlZDmy8jCbB6E8kq5Hcffy1kN2xV%2B6u1K0reNHG%2BQzzZN3RRpz9kCvbt8Hl2aVrWJcPE3GGLZvmSLDVhxgZNKUYj4DyJHjd7L2HCxhSEPuYFDw329OWzXgcXFunt7VUTDcn5f5m816Z5rpHHP7EsTdv3x8eIPM%2Fr5UxGOhCLDJvihZrW9fRg5DSA4faJhaBxU709M8LkdFZeAxdUmcEYJpYT%2BrCnjYuEAfMKiyicQGOqUBFFvjps8AeotsZ0799ft8rjyI%2BtwjO1MC%2B9j%2BbRGceTdVk7Cqfgbr6U56RHlxYItYSLdwqjblqxLFQxpUqBn%2FnFx6Y8ATqejChW3L3sDF2I%2Fh6US7poN9D6WyDQtr2c%2FQJup0EWzIPndwjFuHX3PUojar%2BGU8ZCJiDQ2ZAF6n7FwssHvxSP1aGAZzBVxO4Nmyu9Me4lgLEQjVbn6cd10bBb4HbVdB&X-Amz-Signature=eb7096c9c25e77a8fbf9892dba3c1f42d01121e61a42866d41cab9b3d2f3af4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLEWGTS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEOYJckEl6ZoDs4lorjrP7NUX4Ti5jwK061zKixqNND%2BAiEAhYdHbhoWdU4q3KTqy31j8Pum7J6o9mD1%2F5MnXLPrLfAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDyAL8Aon%2BKiu5p%2BASrcA72hItuprwjpEp5NVhBWBC7O8Fd7nV8wrSfNtIn%2BwLvxLyY9oNNKoIQB%2F5%2Fx%2B4DRuT4RsUENSFRK%2BVlf1ZVa8YMkZBOLWf7rzXRsGQRxVDkqatG8tPz9noJm3d9Xasp99f5qlSooLygptTnHZ%2FYdInziaC3mS%2FAbyJBeNxrlhlH2SnhsVQoa8%2F2N9FYBLJECwRHD%2F8qSFuXuJpl9heJfZXba%2FLvCvkbt48HHrRs6oQYCeS3JkNi7dC1lfyb44thpVvpYSDDI%2FriL%2Bw0jvffdBQkuGjytfVhU7GyuspD5HgDtJ9P4JK%2Bb0qSOYFbHlQi3FgravlSqDEN7W5feKG8p4ekIlChTCfS6zFfbgRaj%2Faygv%2Bt06igtP%2BeJMBwRRzygUyMAvrKFAeGvMFgChi16jrhIWXxlZDmy8jCbB6E8kq5Hcffy1kN2xV%2B6u1K0reNHG%2BQzzZN3RRpz9kCvbt8Hl2aVrWJcPE3GGLZvmSLDVhxgZNKUYj4DyJHjd7L2HCxhSEPuYFDw329OWzXgcXFunt7VUTDcn5f5m816Z5rpHHP7EsTdv3x8eIPM%2Fr5UxGOhCLDJvihZrW9fRg5DSA4faJhaBxU709M8LkdFZeAxdUmcEYJpYT%2BrCnjYuEAfMKiyicQGOqUBFFvjps8AeotsZ0799ft8rjyI%2BtwjO1MC%2B9j%2BbRGceTdVk7Cqfgbr6U56RHlxYItYSLdwqjblqxLFQxpUqBn%2FnFx6Y8ATqejChW3L3sDF2I%2Fh6US7poN9D6WyDQtr2c%2FQJup0EWzIPndwjFuHX3PUojar%2BGU8ZCJiDQ2ZAF6n7FwssHvxSP1aGAZzBVxO4Nmyu9Me4lgLEQjVbn6cd10bBb4HbVdB&X-Amz-Signature=14ae6749fc4ef2b79c6b0ef24a039630ee1608bc1d7d53815003e5adb96669ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IYEZK5O%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC1xAROWrERoRQs5UDM8%2FTPF2DsPo%2BftEBmNZhpzWqzCwIgYLXA4eDT5o8TmoqpLBH567%2B%2FooF2Pci2TwQxBeg11cMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDC7rr3hWtpGwHymZwCrcA35fqS0rNk252cz%2FJdmqCmWvSn7yr6UP5wWaqVyYwdd9zPRLF00UaAVCkWyC82xtlGYZpUGsTtorf0NIS9yQ2LBHayUIRSIianJmCG%2B9b%2BblbINv0CZcAKod2LZBUlKl9dffmkgP0QUTLcIv5tWCTeQraN6OEMFwc%2B68%2B4ZBZQWDFycusG%2BfuspW2JI9oWcZtSlJM%2FXk%2BqSrjxnlD4iuxJhg4U1yRk7SbeeawpgMI1dc4%2F6LfsoEul%2FLEiy2hT5lXl3sAu5D9DeK6WJ%2BAvAEqQzCs7VZ79aqlqnU8yYYJS5A3oh6J9VVjPhZ3URn6jCU%2FXV6heOV7jxW3JHh949ILv%2FI%2B%2FoHlHx6QDiaK%2FIb6uCzT398PswTBvWkt6vjqY0w%2BsmHopIdLDlPop8rc0Y52vNhXAukoln5Zihjq2VF4f9MCbxwdqM%2FBKN8bc1lid1%2FC3vVqvN%2Ftm%2BkZVvZj6wDzjOeT0EqqjgY38VapoGaxiAzbv9%2BdeQqCOjPD1P8HJxEuAoWP872kcyJSP1uijMvzv44mS8i9ImgU4I1krNmt2%2Bw1jbhjBYJt9eyYKItmpRJMJFwwzeDKwdItcGfhBJQ932OQRTdvC5iLgRIX9m76shJkFCt2O4aCjUgguQYMOGwicQGOqUBm4mG%2BjdIcrgTNT6Iup27rmuBTe4lA%2FY1Yj0QY2%2BzOs%2F5sLI8ov0tNRYqRuCyrGeEAgme%2Fk1WVHrpddQZMjjV%2BPVTdyQ9UZ872y%2Fsk5%2FRhsnG2FAh4R43vsddyDL5dq8uOgQoQ1juIjJ%2BoIY4SGToIpcnU8v69dz3MSE5EL%2FlLpjPstB9wxldy7MblV7RQ5qTa8i5XIqwmH7hQypMK5f%2BbEB%2BCtsk&X-Amz-Signature=e2228d6d063cc9cde13fb02d6565660053a04095e404509987d174479a2d2f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIMHDOW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDGqlPTnDcMK3jRTOyw8FF6km9iMGGGUQuibEWSgoq8lQIgCGk6lVaXCNVEl1WWlo8fKoPz8X28pzqePPK1pIxzPpgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKpOR8piENbqvwFrkCrcA9KuAuopboM1FQIqxWOk1%2BghbOYYDdO2ucmJfTnzykmoiZTlf1dAW8kWFcv2%2FPK%2FZ9xKMv0ijFXKlKrqV1AtE%2BIQ4drUjlN53RkQR7eV29vVp0scu1RvZrHlDnlqgP31xa8yN2VxU%2BOo1qThTlAa5%2BBGgftp3%2BYEjml93csJu0%2Fp4TakyeSzezKmRCIK3LPXsXx6eMOa0JTHhLqlOFnhWzyXP1iOxDdmun%2Fb%2B3FT%2BEjn39T2DfLCtnaJPs6TsbGnmU1jzxzWIFu2dsIl9SZm%2BF5y1O7E9yd6vsELP4Mes0nffGDF2L4UWxJ8O80NC42k4JxnQejlnSBZ2K%2Br0VEMQRryMrh9Djh%2Fl0SYehFJR7vZ0z6SITWhFwy6U4TMmrQB3AVJMppmcwAm6GyzlOsM3SeLi8gsvM4GgOeACQg69epxq44kbAksxQsD%2B6t9tsjw88X84Yj%2BtSSNokpJcUsvepCvYrSQeiyRWHn0g6bIiGis4gMXIvwHVGS%2FDKC6TR9R35HhUFsW%2FTnN9vpi61utoKytfK8Zl8UzL1AMj%2Ff%2FJb160%2BOlRJcdcXoCRe%2FyRuTyhzlF0kY%2FXDy9C223yVIcU8B29boT%2Bp4xzUIem5ItqOpdKlRk%2BN1NXCFzo1trMIaxicQGOqUBa7cVejQwYrVBPCPf9UMLzjjwJ9dY38h3kMVQssU4m%2F7ldECHphu6jpOVih%2BsI7P%2BL1FVnutPe1MN0rBw4uCIERGH2cF8Icj5x87rtzg5GuH3Uvd0reqthn0eBeoYJrkiHLhSEa%2BjsV%2F%2BeOBZnxHIbZNy9kbxAAle6P6%2FSk%2FfdcNcR3uFK2bn1X4CuawUILvSbbzc7HSC%2BzLAhyeLkPL3%2FIPrTp9p&X-Amz-Signature=055c07b936a96b25798d669a75782178b3e23abeccd084170171a395452c84db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLEWGTS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEOYJckEl6ZoDs4lorjrP7NUX4Ti5jwK061zKixqNND%2BAiEAhYdHbhoWdU4q3KTqy31j8Pum7J6o9mD1%2F5MnXLPrLfAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDyAL8Aon%2BKiu5p%2BASrcA72hItuprwjpEp5NVhBWBC7O8Fd7nV8wrSfNtIn%2BwLvxLyY9oNNKoIQB%2F5%2Fx%2B4DRuT4RsUENSFRK%2BVlf1ZVa8YMkZBOLWf7rzXRsGQRxVDkqatG8tPz9noJm3d9Xasp99f5qlSooLygptTnHZ%2FYdInziaC3mS%2FAbyJBeNxrlhlH2SnhsVQoa8%2F2N9FYBLJECwRHD%2F8qSFuXuJpl9heJfZXba%2FLvCvkbt48HHrRs6oQYCeS3JkNi7dC1lfyb44thpVvpYSDDI%2FriL%2Bw0jvffdBQkuGjytfVhU7GyuspD5HgDtJ9P4JK%2Bb0qSOYFbHlQi3FgravlSqDEN7W5feKG8p4ekIlChTCfS6zFfbgRaj%2Faygv%2Bt06igtP%2BeJMBwRRzygUyMAvrKFAeGvMFgChi16jrhIWXxlZDmy8jCbB6E8kq5Hcffy1kN2xV%2B6u1K0reNHG%2BQzzZN3RRpz9kCvbt8Hl2aVrWJcPE3GGLZvmSLDVhxgZNKUYj4DyJHjd7L2HCxhSEPuYFDw329OWzXgcXFunt7VUTDcn5f5m816Z5rpHHP7EsTdv3x8eIPM%2Fr5UxGOhCLDJvihZrW9fRg5DSA4faJhaBxU709M8LkdFZeAxdUmcEYJpYT%2BrCnjYuEAfMKiyicQGOqUBFFvjps8AeotsZ0799ft8rjyI%2BtwjO1MC%2B9j%2BbRGceTdVk7Cqfgbr6U56RHlxYItYSLdwqjblqxLFQxpUqBn%2FnFx6Y8ATqejChW3L3sDF2I%2Fh6US7poN9D6WyDQtr2c%2FQJup0EWzIPndwjFuHX3PUojar%2BGU8ZCJiDQ2ZAF6n7FwssHvxSP1aGAZzBVxO4Nmyu9Me4lgLEQjVbn6cd10bBb4HbVdB&X-Amz-Signature=c0ea33323f69bb0c5ef0fbdb06f1e3f5358384e6092d6eea275e2c0b4442a7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
