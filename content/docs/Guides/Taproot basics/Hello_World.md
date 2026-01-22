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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624MRUZOF%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICBw8n0rIkH0%2FG02ckgu3fcM%2B28ngZu%2FBJ6Bz%2BNu2ZWbAiAYSB5BGsPsCb%2F8PnzcEwcfQ2lfNJBmJ0jeaMdPKrvG8iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJcfDutT05F0FHD5KtwDE38wA%2Fan%2BLGF9iIXBnW6tE7gk6leNKOFP0ikVXcoLT17bQc9ZjxV4v2v%2F03sJFIPqoAo3XIS8rypDHgfhvqL%2B9GUnTOHTSIEWm9jm4cKhLFx3iKPGErE9OSx1gFd%2F8F2UUVLUMWGW6Fpd0p4YsgSMC3eUDOg6GhTVqOqw3fFTk7LjAbeZwNBR9TdZv%2BiHXg0mYVyOm4s3hyJJLwCJklkA7dwzxtLCn2qTP2gON4z5yOvsLCs1rvcoHRRGIoB2eqqKg6ZjetuGgKTxFgufVbSxTe%2F6pxBt5HZGWYdEa8oJja4BK70R%2F4boXn6IBzlvgyGJglTFlXPMNSnUV8OwiHeVS%2BgyiIDrMMFEDotdqbkOxG9TA6mKSPvd1H%2Falf1GoiboIi0w3UQqZWVoTuWVSo0KplICWHP%2F6F4F7%2Fp%2FTR7raowDY4C4rqOzQRVpRrC4mHb9CO2Zd79Oy2awXlFytM2kgW1x%2FilO17%2BYn8f4%2FjJOch%2FI1%2B4f%2F0DR%2BncN2NVN5VKfL5%2B5mBLmbaqT2GVOepPGHtssh1uUXKpo3BOOQiGe3DZ6TnT4bs7RvIrFwDD90CkO6vUhTs2VhOH36KhioT9K194l5P2Qu2PyMFlnr16p2T4YbrDgKDXZitcsDswztfFywY6pgGbqOOTXRhlx%2FmmksnWOAuKHMYeES0PV9FJNR8avFzWE0CknXIBGpL6OdpyBJDgwElH5rJjtZeuCOYAhHMVXd7tBqcWOz4kl1am1fKQCLMFa6Dr8mwKTE4uerF6rFjBhsiJDOyyn5ecBIEezQSMt3uKk8WBL4grh7UPf1yHjx17ADIaMGzQCudk9C0oWg2b0UF4GfQVabPgr%2FF2kQ%2BcjeGvFtcpi9s6&X-Amz-Signature=315a3137661298ed46f75568ac5f330b5df47fcf0cd5b0c04daf661089aa2f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624MRUZOF%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICBw8n0rIkH0%2FG02ckgu3fcM%2B28ngZu%2FBJ6Bz%2BNu2ZWbAiAYSB5BGsPsCb%2F8PnzcEwcfQ2lfNJBmJ0jeaMdPKrvG8iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJcfDutT05F0FHD5KtwDE38wA%2Fan%2BLGF9iIXBnW6tE7gk6leNKOFP0ikVXcoLT17bQc9ZjxV4v2v%2F03sJFIPqoAo3XIS8rypDHgfhvqL%2B9GUnTOHTSIEWm9jm4cKhLFx3iKPGErE9OSx1gFd%2F8F2UUVLUMWGW6Fpd0p4YsgSMC3eUDOg6GhTVqOqw3fFTk7LjAbeZwNBR9TdZv%2BiHXg0mYVyOm4s3hyJJLwCJklkA7dwzxtLCn2qTP2gON4z5yOvsLCs1rvcoHRRGIoB2eqqKg6ZjetuGgKTxFgufVbSxTe%2F6pxBt5HZGWYdEa8oJja4BK70R%2F4boXn6IBzlvgyGJglTFlXPMNSnUV8OwiHeVS%2BgyiIDrMMFEDotdqbkOxG9TA6mKSPvd1H%2Falf1GoiboIi0w3UQqZWVoTuWVSo0KplICWHP%2F6F4F7%2Fp%2FTR7raowDY4C4rqOzQRVpRrC4mHb9CO2Zd79Oy2awXlFytM2kgW1x%2FilO17%2BYn8f4%2FjJOch%2FI1%2B4f%2F0DR%2BncN2NVN5VKfL5%2B5mBLmbaqT2GVOepPGHtssh1uUXKpo3BOOQiGe3DZ6TnT4bs7RvIrFwDD90CkO6vUhTs2VhOH36KhioT9K194l5P2Qu2PyMFlnr16p2T4YbrDgKDXZitcsDswztfFywY6pgGbqOOTXRhlx%2FmmksnWOAuKHMYeES0PV9FJNR8avFzWE0CknXIBGpL6OdpyBJDgwElH5rJjtZeuCOYAhHMVXd7tBqcWOz4kl1am1fKQCLMFa6Dr8mwKTE4uerF6rFjBhsiJDOyyn5ecBIEezQSMt3uKk8WBL4grh7UPf1yHjx17ADIaMGzQCudk9C0oWg2b0UF4GfQVabPgr%2FF2kQ%2BcjeGvFtcpi9s6&X-Amz-Signature=5a87a34c5c5c9b3b2c3645679a5ceae042a4f7bfdd5c27183d98780d74e18fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
