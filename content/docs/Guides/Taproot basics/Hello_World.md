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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623DLH4GB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4lRMFDa2Qut936WKUSocqKd16aIAhwPCR4cnTMMv3JQIgBtgj0J73gCTOrjmSRwIuZ7knubJeFQ%2FYICrwpr9bvzUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDU3nDdo8KOHkfk8mCrcA43gFwKQN0WrzFGKBV4VeFLLri%2Fbg%2BX1fkjS1oquR2ud4N3caB39Z5yJN%2BfwRFS8jRShPfD%2BsATLavNI9%2FVioct7QB9dpUxHaHWI1Qd66yj981cPohKr4HKx8beBB792zYmTE6YrX94R2s1w8TtIYFQ28eikb%2B2PZh7DxdtdxPlnzaWPbvkFNxyd7TO97%2FZ6CcCfd%2B8Pt7YFscFo8XhYtgdL5l8Ctgc71fCDX2KZjt5br9630jn3bxlu6t%2FolM3cjBg4NjfAzlr9s2ggPxqV0Z5Pji3OuqOJxqHu%2BgMmbftZT0%2BClWkXpufD6WU59En%2BE0NNEJPGz0Twbhk9bryx%2BbjyvowtDHuYTA%2BCYY4A878HMKWjW3yI%2FhUQhrdRLj2k6y7MyTPf5AakjMLFqXcm5b6EqXSBIRwoo740gyVYEXJ0hLLi7%2BMkEi9cdPItvikyVWK4P9JBs4re9FmbnNXoxTtJagXnIIc8%2BXXKakpeaTsd%2B%2FWbqmJChhwOTqT3HCDUXmbBY0I7I2rc94%2FqK%2BPMmmOz%2BLUKKGhvmWyNmdS5RrDKe%2FW%2B31vZ1wCZv33%2BAqEcbO3QEOW353gwN%2BKw415CUfz0vSeNH25MFjgRvTt2HIVf8J%2BUxTjcJtYx2A%2ByMOvk8sAGOqUB%2F%2FQ4s6MJbW%2BWRJF6BmTODvGSzA4GusZaD7kPiYx0JMM2hpROBjG%2FLGISzyXnNkZGyyjUWnOBsIsC2zt8G437avgsuQSKdLmpIA8FCSOCnMPTpgOeKd%2B%2FNWv26CZ7bE7AfOGV08eBCHpbyCbmerzlUWixe4EhYGDzp01%2BPsuZ%2B155iOieFbTCTux2YAF2l34qDP%2BihANcvF6yrpc2ZlH8BZuJzMKl&X-Amz-Signature=652f513a7b8bba7d389a609a61a06a07c254b133224c920d69cbeab730d5d690&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623DLH4GB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4lRMFDa2Qut936WKUSocqKd16aIAhwPCR4cnTMMv3JQIgBtgj0J73gCTOrjmSRwIuZ7knubJeFQ%2FYICrwpr9bvzUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDU3nDdo8KOHkfk8mCrcA43gFwKQN0WrzFGKBV4VeFLLri%2Fbg%2BX1fkjS1oquR2ud4N3caB39Z5yJN%2BfwRFS8jRShPfD%2BsATLavNI9%2FVioct7QB9dpUxHaHWI1Qd66yj981cPohKr4HKx8beBB792zYmTE6YrX94R2s1w8TtIYFQ28eikb%2B2PZh7DxdtdxPlnzaWPbvkFNxyd7TO97%2FZ6CcCfd%2B8Pt7YFscFo8XhYtgdL5l8Ctgc71fCDX2KZjt5br9630jn3bxlu6t%2FolM3cjBg4NjfAzlr9s2ggPxqV0Z5Pji3OuqOJxqHu%2BgMmbftZT0%2BClWkXpufD6WU59En%2BE0NNEJPGz0Twbhk9bryx%2BbjyvowtDHuYTA%2BCYY4A878HMKWjW3yI%2FhUQhrdRLj2k6y7MyTPf5AakjMLFqXcm5b6EqXSBIRwoo740gyVYEXJ0hLLi7%2BMkEi9cdPItvikyVWK4P9JBs4re9FmbnNXoxTtJagXnIIc8%2BXXKakpeaTsd%2B%2FWbqmJChhwOTqT3HCDUXmbBY0I7I2rc94%2FqK%2BPMmmOz%2BLUKKGhvmWyNmdS5RrDKe%2FW%2B31vZ1wCZv33%2BAqEcbO3QEOW353gwN%2BKw415CUfz0vSeNH25MFjgRvTt2HIVf8J%2BUxTjcJtYx2A%2ByMOvk8sAGOqUB%2F%2FQ4s6MJbW%2BWRJF6BmTODvGSzA4GusZaD7kPiYx0JMM2hpROBjG%2FLGISzyXnNkZGyyjUWnOBsIsC2zt8G437avgsuQSKdLmpIA8FCSOCnMPTpgOeKd%2B%2FNWv26CZ7bE7AfOGV08eBCHpbyCbmerzlUWixe4EhYGDzp01%2BPsuZ%2B155iOieFbTCTux2YAF2l34qDP%2BihANcvF6yrpc2ZlH8BZuJzMKl&X-Amz-Signature=30fc51dd8fa3517f7060ec8a35a12015a7c298c9e102c6cd5f8fa80a41375cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
