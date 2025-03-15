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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WX3P65Z%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB48K%2FbT2skv0wHex5mxyEQolWtnhyzXdXBqdSwsM%2BvyAiBibY8MW%2FkHgcN5JJW9IaNkdQJroqrf1N4THF0kok%2FrxSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMuHfiHq8%2Bi4IItOOsKtwDt8bv4ofFdR893tT9FSs2URwofwh6koY%2BIbguGbcUlEF1TP6NybhonYe6xr1ulyzDW5aUA9HmuRNZ61H%2BNCzc0VonmBvhhJWzVkWnHuH3Eqn%2BQL%2F0R6h7pipo55T7XBQtJlAmnSLS8UX7sovlVA%2Bjag%2FX4KOv2soSSnCt4rHPDlO8Q0cRHz4py85c927rh8ed25NTnNyirpZieAEnsA7AK1kxV2DEF5FZH67D5PK0X57%2FgmIrLH%2FgHXcN5RHdGUydiekHl5uQqKHgEHIDdDuPMLSUH4rgcJl8gVzOVMQMPBbxW8gE4KJPFOadNt2n46zdP6o3ByQhk0BPH%2BaA4Rjb0obktG8WbUM%2FDckMuao%2F4pZsvbxa6ZM%2FtkO7rMWJX9RvgeC1W7ZWcrs6FUV3zzD0wmpw8HsKrVfw5Da6RUl2dKxmAr0JoWsCPQ66QochX%2BwTACpz6fITbL5w2%2BEccAo2pcnlFTMGoqfdBMFy4j5mtfC0%2FLb6W2BqmA49bvhtmcXyY3Kz09LyP2TspX2DuCFix0OoZLLJx4cRX8Bd1x3wNCN4c7zw1XkbdP0c%2FYZKiSrpywcEVO82PIib8aDnyy9XBDUv68WfdGf0TCrNmIvl0lyV6A5moVTd4xEZdKEwwsPXvgY6pgF3EFiCy2bN65JNMzYZR%2BJoQtH39w%2FFmswaDYW8GWdqHaaNAgO9GB3pVGp0VGznyOllP50c0mVl1kwpw71z7%2B6bw6dHUclXqiL0lXwl5HO775drrTjp3Hoa4j6VbVYEFPFohAxiQtp27Kcufr6Cy21Xe0zjssQHrwWHhAzAJZtDAUukjsmkddsjV2AcCXb5qpa1KU406nw6ZQiW1K9LADmoCWvTzUC4&X-Amz-Signature=515e2a4718e01796d54ac1a450d68d84c1e6b67f2cf64cfc3f10877815800535&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WX3P65Z%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB48K%2FbT2skv0wHex5mxyEQolWtnhyzXdXBqdSwsM%2BvyAiBibY8MW%2FkHgcN5JJW9IaNkdQJroqrf1N4THF0kok%2FrxSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMuHfiHq8%2Bi4IItOOsKtwDt8bv4ofFdR893tT9FSs2URwofwh6koY%2BIbguGbcUlEF1TP6NybhonYe6xr1ulyzDW5aUA9HmuRNZ61H%2BNCzc0VonmBvhhJWzVkWnHuH3Eqn%2BQL%2F0R6h7pipo55T7XBQtJlAmnSLS8UX7sovlVA%2Bjag%2FX4KOv2soSSnCt4rHPDlO8Q0cRHz4py85c927rh8ed25NTnNyirpZieAEnsA7AK1kxV2DEF5FZH67D5PK0X57%2FgmIrLH%2FgHXcN5RHdGUydiekHl5uQqKHgEHIDdDuPMLSUH4rgcJl8gVzOVMQMPBbxW8gE4KJPFOadNt2n46zdP6o3ByQhk0BPH%2BaA4Rjb0obktG8WbUM%2FDckMuao%2F4pZsvbxa6ZM%2FtkO7rMWJX9RvgeC1W7ZWcrs6FUV3zzD0wmpw8HsKrVfw5Da6RUl2dKxmAr0JoWsCPQ66QochX%2BwTACpz6fITbL5w2%2BEccAo2pcnlFTMGoqfdBMFy4j5mtfC0%2FLb6W2BqmA49bvhtmcXyY3Kz09LyP2TspX2DuCFix0OoZLLJx4cRX8Bd1x3wNCN4c7zw1XkbdP0c%2FYZKiSrpywcEVO82PIib8aDnyy9XBDUv68WfdGf0TCrNmIvl0lyV6A5moVTd4xEZdKEwwsPXvgY6pgF3EFiCy2bN65JNMzYZR%2BJoQtH39w%2FFmswaDYW8GWdqHaaNAgO9GB3pVGp0VGznyOllP50c0mVl1kwpw71z7%2B6bw6dHUclXqiL0lXwl5HO775drrTjp3Hoa4j6VbVYEFPFohAxiQtp27Kcufr6Cy21Xe0zjssQHrwWHhAzAJZtDAUukjsmkddsjV2AcCXb5qpa1KU406nw6ZQiW1K9LADmoCWvTzUC4&X-Amz-Signature=a965551e417a6a4d83335592e18216e8974ce34492cba02606fbcb32ca15e0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
