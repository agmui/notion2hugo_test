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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLQWPRG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC0OErQprBrynQOz7%2FlRfRk%2B3SJtp%2FJTwN4pk7GCWrkVwIgHoGK8wDTpgZWGLVkRm%2BOZyUQGRfhJ1jAVDR9d9R1NAoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxMZHSiwHYKORia6yrcAy47oaP8zXiuX9v2ZFDGruBGs9vKYh%2FOnOw%2ByVImnOsisLOUqjO%2Bl80lKRZP0KtEwyqPxD8GW%2FMR6r4erMkpr3Q3kyFwdILG%2FAHqnvTijimyx3O7nshp9zPuNlgrg6FbtcN3HCyiFOd6VCvKCGIWfpbrt8Kk%2F0OnlR%2FSXb1EtToMwzdu%2BX0uGjPbx5L6qnIefPiRkfdBRR8SCCQSQkm4LcHz1VO7ooONTwFLMbGYpdQPC4tg7BFChwvuhUrZ2KOe60LXQ6D21gWC8gY6Ija%2Ba7gzyNIk9kZcyO7UQZBUlBp4kCOIy3MeAEuFrg328%2BkWEE5H92hOS1TYYXhRfJB02DIB%2B7LAlTvHeXvvJw%2FDyRd3%2F4EV9%2B1DQfrfKvd%2Fe7Jd%2BRCmgD%2FrwfekYgT5qtSR4bmVDVGFCAM4I%2BIv2oqlFasDn3zk7FdIR%2BWty5YcUwGDuAokMMoiwwrwyVRMKOIqFcMh7axiRIPMPfBldEIFFXoSOcxc2eN7eJYH2b2NuhFEUoqowboE8fy0bnXV6y0D31sqCdKCdOuY6Xejv2EkPg5PTlMTQMGnbyQllVB2Unuz7h9bw1oF8qU6HE6M2X2Z9n7BTc3VD5KQB8lMrz5Uw0HzfoRbvGYoigRmBDfnMJSdycAGOqUBREUwpyIAGsmlV0N%2FqhHUvuee%2BA3ISRwwQmDKDAc4ny6aYecVpqKL1LRLgZXYBu6K3qBTW4higPXw9E1azPdlsOZc84O%2Bs4Uw8%2F5xzYH2v2maJg3bXm%2BIwQGYqLVoe6qJ7c4qEzoMp3hDVZ4BZaHBG6VMWEIxpmeZ%2Bd1cdAL%2FWameJsO%2Bskzp4FwCY48VadQJF3UHgM9NcLvZ6KK%2B2kaB1rSZhvG0&X-Amz-Signature=830b41697abf1753df9adfc53782051c26a74bb4911dc519eb0292d70908d8ed&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQLQWPRG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC0OErQprBrynQOz7%2FlRfRk%2B3SJtp%2FJTwN4pk7GCWrkVwIgHoGK8wDTpgZWGLVkRm%2BOZyUQGRfhJ1jAVDR9d9R1NAoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxMZHSiwHYKORia6yrcAy47oaP8zXiuX9v2ZFDGruBGs9vKYh%2FOnOw%2ByVImnOsisLOUqjO%2Bl80lKRZP0KtEwyqPxD8GW%2FMR6r4erMkpr3Q3kyFwdILG%2FAHqnvTijimyx3O7nshp9zPuNlgrg6FbtcN3HCyiFOd6VCvKCGIWfpbrt8Kk%2F0OnlR%2FSXb1EtToMwzdu%2BX0uGjPbx5L6qnIefPiRkfdBRR8SCCQSQkm4LcHz1VO7ooONTwFLMbGYpdQPC4tg7BFChwvuhUrZ2KOe60LXQ6D21gWC8gY6Ija%2Ba7gzyNIk9kZcyO7UQZBUlBp4kCOIy3MeAEuFrg328%2BkWEE5H92hOS1TYYXhRfJB02DIB%2B7LAlTvHeXvvJw%2FDyRd3%2F4EV9%2B1DQfrfKvd%2Fe7Jd%2BRCmgD%2FrwfekYgT5qtSR4bmVDVGFCAM4I%2BIv2oqlFasDn3zk7FdIR%2BWty5YcUwGDuAokMMoiwwrwyVRMKOIqFcMh7axiRIPMPfBldEIFFXoSOcxc2eN7eJYH2b2NuhFEUoqowboE8fy0bnXV6y0D31sqCdKCdOuY6Xejv2EkPg5PTlMTQMGnbyQllVB2Unuz7h9bw1oF8qU6HE6M2X2Z9n7BTc3VD5KQB8lMrz5Uw0HzfoRbvGYoigRmBDfnMJSdycAGOqUBREUwpyIAGsmlV0N%2FqhHUvuee%2BA3ISRwwQmDKDAc4ny6aYecVpqKL1LRLgZXYBu6K3qBTW4higPXw9E1azPdlsOZc84O%2Bs4Uw8%2F5xzYH2v2maJg3bXm%2BIwQGYqLVoe6qJ7c4qEzoMp3hDVZ4BZaHBG6VMWEIxpmeZ%2Bd1cdAL%2FWameJsO%2Bskzp4FwCY48VadQJF3UHgM9NcLvZ6KK%2B2kaB1rSZhvG0&X-Amz-Signature=e1e50593819ecc621e4a214d4a4eec05cee4213154d48397ec17e02e2bd54ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
