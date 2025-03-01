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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3G4VG5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCf5SPPokA6XvkOyogO8zg8FMIpTbz9JcmdoCx74rlOnAIgbfiZIipCTZX6Gj%2FB%2F%2BwxKZSm6056FPfDCJEWQi7YKDYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh3k8fVig%2BsG%2BALByrcA84VH6hEvcQMxlx%2Bjt1gre12HTpncNhO469LVvAVAqY%2F%2BhLEl9P27G759E3G9mcmr0aC0KnLCWvu6Ktx1yIKXaXHFgsZc2clVVEptYr4FIhNwUPZkItFx1ynopZrvcBuNRXUonSfywOfTRRczfBwipfQ9wljM3wBmpSDlzxPkTFMgapxtrm2SrYKEAxQQsctoH5zvmWy0zCbxKM7d59C9dVkyzTSKiElSHWN702nfk2SzFMpTwdEijDRXPl%2FRUYvbrxAztTym7BIR%2FEkZm1ccbPlgf2sVx%2FxoOULaVpQafXNR6peEtbqnfvQeWWeb9jFkeieBQC1TOHajL7LebSIKaK6I7WvCUJUPd1DY4v7srksZG3XG4ukqzvdODXgzip2UAqs2r5JJ1N7GLPXgtrWaVttzgn%2BqcnCy0D25PZBVcNsA2ni%2B1lBwS%2B6Xu%2Ba%2BZErESRt4n1Y3EsSTBBDgo8PgeHnC2M5u1BmYANEkCmTe%2BBSZr2pBze60gSQnRp928TE2GUMQLwNvJU5cewn%2Feh5zDM9Mp%2F4%2FyE6qwl%2BZuzT9eZTBCH8V49LOXDy7EEi1OqqEepcO5hW3VtJPJeMDO3UrJykL6G1mtCgprovBX3yRQepiS8tChIbQsVGrzWaMLTHjb4GOqUBtgYy%2BtDvhE18H63RGZx%2FDkr5iyQnhwmE5aV7JzEiyysSvctnwpBehSthv9Bs0kkiLnQJF2UxJNXln7196NsXQBCsi0%2FLc9KGU6GjIRlfmJ2GtyYvRIaBoM8dkBCwBSupBtfJyCOfGVdkC%2FfxYQrDK96lHiaRVz5WFsybnZT7FaJOinfjz3lcx4yBl3U069RCgANg%2F0DY1M6g3tPn%2FIAMPOLN0z6s&X-Amz-Signature=081cefd40fb5283749db079cd6513dd61e080904ab589e375846a5437435e51d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3G4VG5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCf5SPPokA6XvkOyogO8zg8FMIpTbz9JcmdoCx74rlOnAIgbfiZIipCTZX6Gj%2FB%2F%2BwxKZSm6056FPfDCJEWQi7YKDYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh3k8fVig%2BsG%2BALByrcA84VH6hEvcQMxlx%2Bjt1gre12HTpncNhO469LVvAVAqY%2F%2BhLEl9P27G759E3G9mcmr0aC0KnLCWvu6Ktx1yIKXaXHFgsZc2clVVEptYr4FIhNwUPZkItFx1ynopZrvcBuNRXUonSfywOfTRRczfBwipfQ9wljM3wBmpSDlzxPkTFMgapxtrm2SrYKEAxQQsctoH5zvmWy0zCbxKM7d59C9dVkyzTSKiElSHWN702nfk2SzFMpTwdEijDRXPl%2FRUYvbrxAztTym7BIR%2FEkZm1ccbPlgf2sVx%2FxoOULaVpQafXNR6peEtbqnfvQeWWeb9jFkeieBQC1TOHajL7LebSIKaK6I7WvCUJUPd1DY4v7srksZG3XG4ukqzvdODXgzip2UAqs2r5JJ1N7GLPXgtrWaVttzgn%2BqcnCy0D25PZBVcNsA2ni%2B1lBwS%2B6Xu%2Ba%2BZErESRt4n1Y3EsSTBBDgo8PgeHnC2M5u1BmYANEkCmTe%2BBSZr2pBze60gSQnRp928TE2GUMQLwNvJU5cewn%2Feh5zDM9Mp%2F4%2FyE6qwl%2BZuzT9eZTBCH8V49LOXDy7EEi1OqqEepcO5hW3VtJPJeMDO3UrJykL6G1mtCgprovBX3yRQepiS8tChIbQsVGrzWaMLTHjb4GOqUBtgYy%2BtDvhE18H63RGZx%2FDkr5iyQnhwmE5aV7JzEiyysSvctnwpBehSthv9Bs0kkiLnQJF2UxJNXln7196NsXQBCsi0%2FLc9KGU6GjIRlfmJ2GtyYvRIaBoM8dkBCwBSupBtfJyCOfGVdkC%2FfxYQrDK96lHiaRVz5WFsybnZT7FaJOinfjz3lcx4yBl3U069RCgANg%2F0DY1M6g3tPn%2FIAMPOLN0z6s&X-Amz-Signature=69823b280fc594850757bfcd5349a10018c1d764de0b167d5849763c588fdda3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
