---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y6CDAWT%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FmPusp%2BMEd%2BIGmzAf2bvFyp70TBA5ZDJdobapedtf0wIhAMeL8iYx9ZXvA7ixTNjTsJWCzmsSqa9akR7gIT9vb5NhKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkhldFY1QjDLTOGnMq3AMN%2B7nTed6lws7U44EHBOY99hV%2BnMVRwuYX%2FwdevsXB6Ez2ZmgvP%2Bq9R4wJzxZZWOUosE%2F3H0%2FiCHFc8N8ANuGU6vzFxqC0VEfntIzHdglpRwll07g7RgZBBOGKJpZ4yuA4BHmFsGjThbtgcdfjuEbuOdMIg%2F7RyWVg8ONLcuCoe1kbXuSoNNJUfe%2BqJHu8BKtEa7dHPi3gni5Bnj%2FuN2ptwrPRoA4%2Bc6ZctCrYHIGbjDHC%2FVx8K23dltGHt2trydPoJQIpv98x%2BsIMXK1Z%2FPY0e%2FplirE1Js6gHXYd94acHRUQ3YjFf6i5mDGvZ0N%2FGYJtzmaTm4DpvN4aYRWLX410Gb%2FlzVrgkyqUQZ0SLCDNeWtm4AyHmqYSD8kar6Xo4SRs8vvJnVA1S6dkY4pb4R1axJOiB8%2FlmalxdQBRzD9%2FPk9%2FMPvkSIwnSONYx1ACM6WIzjmexxrXpuJWjYfRY6VkQQW5VEupskdXBjjb50WgW9D0h76oBzrxGrNpLWr7Zz6YwGeN1uilS1EyqNfVsPdA3M3MFTu0nY1j4kedH0ArBPLs2UgrhufHvUOWyLCiaJ4MZPB63AV0tNoBVsXzIROSwK9kdi9z5li6Yi254cCk2GG%2Byt5knO4bwy%2Bk1jDL4Mi%2BBjqkAU1nRUxff%2Fw17MryN9PvOvB8dRe1iyhzAqSocEUX1siuzYjU4bmvLxN0z4ofVi1iAP5EfYNV2ykqvD%2BxKhD4JRAypEEEQneXUQEIXDDGoIgsoxkS%2FU5tZJdcKrhu34mWrio%2B%2BgyXVSI8cRTJuSWXUijKLghCyeZ%2BZC%2BAHYs5uTFbALYksG2dkVyTup3Z2oqAkf68TCx%2FXUUTS9Vyp4hxX6Qj0wf7&X-Amz-Signature=f680ed72a9b0b19739114544414a0bf0f95d8dd03cee9c6a0a1f20004970eb78&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y6CDAWT%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FmPusp%2BMEd%2BIGmzAf2bvFyp70TBA5ZDJdobapedtf0wIhAMeL8iYx9ZXvA7ixTNjTsJWCzmsSqa9akR7gIT9vb5NhKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkhldFY1QjDLTOGnMq3AMN%2B7nTed6lws7U44EHBOY99hV%2BnMVRwuYX%2FwdevsXB6Ez2ZmgvP%2Bq9R4wJzxZZWOUosE%2F3H0%2FiCHFc8N8ANuGU6vzFxqC0VEfntIzHdglpRwll07g7RgZBBOGKJpZ4yuA4BHmFsGjThbtgcdfjuEbuOdMIg%2F7RyWVg8ONLcuCoe1kbXuSoNNJUfe%2BqJHu8BKtEa7dHPi3gni5Bnj%2FuN2ptwrPRoA4%2Bc6ZctCrYHIGbjDHC%2FVx8K23dltGHt2trydPoJQIpv98x%2BsIMXK1Z%2FPY0e%2FplirE1Js6gHXYd94acHRUQ3YjFf6i5mDGvZ0N%2FGYJtzmaTm4DpvN4aYRWLX410Gb%2FlzVrgkyqUQZ0SLCDNeWtm4AyHmqYSD8kar6Xo4SRs8vvJnVA1S6dkY4pb4R1axJOiB8%2FlmalxdQBRzD9%2FPk9%2FMPvkSIwnSONYx1ACM6WIzjmexxrXpuJWjYfRY6VkQQW5VEupskdXBjjb50WgW9D0h76oBzrxGrNpLWr7Zz6YwGeN1uilS1EyqNfVsPdA3M3MFTu0nY1j4kedH0ArBPLs2UgrhufHvUOWyLCiaJ4MZPB63AV0tNoBVsXzIROSwK9kdi9z5li6Yi254cCk2GG%2Byt5knO4bwy%2Bk1jDL4Mi%2BBjqkAU1nRUxff%2Fw17MryN9PvOvB8dRe1iyhzAqSocEUX1siuzYjU4bmvLxN0z4ofVi1iAP5EfYNV2ykqvD%2BxKhD4JRAypEEEQneXUQEIXDDGoIgsoxkS%2FU5tZJdcKrhu34mWrio%2B%2BgyXVSI8cRTJuSWXUijKLghCyeZ%2BZC%2BAHYs5uTFbALYksG2dkVyTup3Z2oqAkf68TCx%2FXUUTS9Vyp4hxX6Qj0wf7&X-Amz-Signature=199a36e69e6353b99391f2d04334e173b82ea6e74843830ec2e294bf5c2f47da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
