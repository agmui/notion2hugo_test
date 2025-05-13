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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7ETR6A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCkj%2F2O6L2%2Fg3zsSpL8Q63erxpA8OlSmMTuSDTuwqUqxQIhALBKswc6KVyHpcWX8cyXRkmZNShPXzo1kuC3uo3gFWYSKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5a3%2FSsRY1CDypJOEq3AOcEEinnr1E0qSakxZLHy4DBz6sS1PXhoFlFEPc5Y0HgCfRoE2ylK3rWNGOe0B0lGJ4JHe2frw2jdMawSvNuczUjiMtYkQAMtogCMmRIPbcAKR292k%2BIqz7nm4jIhqTRy%2BZHGiBUsJb%2FNjRgXRQPYbveFYNCPnfJsDiJTV24UhY4rR%2BoVf7G8%2BQIB0UhLBUOls%2B2g1Z8h8dK87HjTnhBFNNkZiVxc4GgflKO%2FPjICyOT1OAV6pA8mih8E8h6pnptanG8ccg3cVUcG8CAUPW%2BalbED5PC6pJorDj4L1IuOFb2MT%2FycvrV9mC8XamVLTuAtS3wMVK9FUHjpNP6VV3peOLmXoIS%2BMMag7E6z%2BOhNrcshJWODL0qiozV1a3naOJ5xmYpJRkwW1R3AHkvcjjvxwZeZq4Sj9tg7EzjTBpCc0D2STq1m5h%2F3FMCZggQxXjoEZO8sTy3DxqKw7BBivVrlVLYcAaCm9GYzd2xR40mYHuhZtv27fBuzFbwqin6WWzLmc6yMRWTAlgQnkdO%2B6F0PsMgeIpFcS%2FQkF6TZe6zsf1aL07vObZF7LkePkcfobsFmEZ9ya18dljPTFYE7A52BLbBGTSldpzOVdcaVaDnCGaySgmhTamoMqzspnygjDGjY7BBjqkAbvyS2HhBXgp13AhXmmwX1aGE%2BlGfDngyxSjL9tm%2BycKqYsdDfReVzt6ullyw%2BUXuJoZTtmwP%2FHbgxs8y9%2FXhnsaxetKCgDiVBLYIhFD6YXvTbBjuez2AO3Vo3%2FGV3SE5E8qSY15Dx5XhD1t8M916MzC0r3LoJnq3KHgJX9Zy2LMloYTbmj6ifEM7nW5jaqaQSqlUe%2F0jy%2ByMWSUR9PnJBd1unTA&X-Amz-Signature=8310706cd5bf7b8313917f93f5c76a90ddee6c225c2e94ad947392ca3968181a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7ETR6A%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCkj%2F2O6L2%2Fg3zsSpL8Q63erxpA8OlSmMTuSDTuwqUqxQIhALBKswc6KVyHpcWX8cyXRkmZNShPXzo1kuC3uo3gFWYSKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5a3%2FSsRY1CDypJOEq3AOcEEinnr1E0qSakxZLHy4DBz6sS1PXhoFlFEPc5Y0HgCfRoE2ylK3rWNGOe0B0lGJ4JHe2frw2jdMawSvNuczUjiMtYkQAMtogCMmRIPbcAKR292k%2BIqz7nm4jIhqTRy%2BZHGiBUsJb%2FNjRgXRQPYbveFYNCPnfJsDiJTV24UhY4rR%2BoVf7G8%2BQIB0UhLBUOls%2B2g1Z8h8dK87HjTnhBFNNkZiVxc4GgflKO%2FPjICyOT1OAV6pA8mih8E8h6pnptanG8ccg3cVUcG8CAUPW%2BalbED5PC6pJorDj4L1IuOFb2MT%2FycvrV9mC8XamVLTuAtS3wMVK9FUHjpNP6VV3peOLmXoIS%2BMMag7E6z%2BOhNrcshJWODL0qiozV1a3naOJ5xmYpJRkwW1R3AHkvcjjvxwZeZq4Sj9tg7EzjTBpCc0D2STq1m5h%2F3FMCZggQxXjoEZO8sTy3DxqKw7BBivVrlVLYcAaCm9GYzd2xR40mYHuhZtv27fBuzFbwqin6WWzLmc6yMRWTAlgQnkdO%2B6F0PsMgeIpFcS%2FQkF6TZe6zsf1aL07vObZF7LkePkcfobsFmEZ9ya18dljPTFYE7A52BLbBGTSldpzOVdcaVaDnCGaySgmhTamoMqzspnygjDGjY7BBjqkAbvyS2HhBXgp13AhXmmwX1aGE%2BlGfDngyxSjL9tm%2BycKqYsdDfReVzt6ullyw%2BUXuJoZTtmwP%2FHbgxs8y9%2FXhnsaxetKCgDiVBLYIhFD6YXvTbBjuez2AO3Vo3%2FGV3SE5E8qSY15Dx5XhD1t8M916MzC0r3LoJnq3KHgJX9Zy2LMloYTbmj6ifEM7nW5jaqaQSqlUe%2F0jy%2ByMWSUR9PnJBd1unTA&X-Amz-Signature=3cc1d4e8c9b1dfb003b8e5eb82c163706e7cab556799beae7c77a2e3760fa631&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
