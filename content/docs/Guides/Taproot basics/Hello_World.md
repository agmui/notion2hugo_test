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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BEXXMUC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCVybJCzDwPOJGbcoZFL24MH3t81W5cou8Pxtk6bLwCBwIgEb6fdmELoQJwVjGkF8fjUnHvcoq4d5mwZJD9Vw%2FKxG8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FLHhpmOPGuYCjfGSrcAzdCiJBhq7GdEPbivyTt2k4e9GBihqqELKbSDRTcU2XYbcWLeiGPiq4UmyFFk8MB1KPQKMU8VqXuDX%2FAUwcfjslP0Ki9Lzv3CcAj%2BVOBPOHnbiaT5ogRDB3QTCex67i1gR%2BswoRHCwh72cPcsYJUp3GRew81XzpQaLFT46gImk4qb0lXmcQKXEPFc11smW2O5d2WXwBwrM9r%2F2b%2BMe5b9koTGkDBIO6Neeb24P2FtQGpBY%2FSxdJJM2rqylg%2Bht%2BgmGejnGxjXMAEzjVihjrHceyIsfjILaE2InYKbWMr3s1B92FPS2G7nCmBPSMjIrmf6VL4HcqmFujsNO8KGh2Rt%2BzXC5TGccRAx%2BoXxsjTGutrDzoNPzvmiRmMF7NxzXGvWPhmxfeDoNKAUyKPjP74JpkmMeUmqt5FwJ4OOcbTaEj9%2BB6Z5jODnZigdDeT2fA63AfuENFcY3P1LgB4njWPTnQYlYGKVfJxiKkkoEQeuGJuhZlEaue1SbxzvSez9oyREIk8CgQSeILlPHFavDKWuAvJHDfDMkZ%2FmIiB8uka8fOwW1SlD0d02J%2FuJP1WLQsQEESJJV04oUEp2YQKszX25KwiCv2JdPndO1vb8BJp9ZrV1301T4nFW2XsDsEOMLDCncAGOqUBymLY1evtHhn4Hp0JQxq76uyU%2Bpu6rY5pkjBGTDIU3yDYjEZQaZgXPmT3Z2F8knAeKZlsp2yp1adhZapoxaNBcLfc27%2FpmKQrgatPGJc6Ptjp2kewFSW3gIRfhAGgsqwqglluKsSTyvBFxYN2T1dEs1L%2F%2FZofDa3i2QCr4y9Zkciz1eEvuTCOqVk4lLldpwzdUSBQ2Y%2B6JEelvqnlSuwTzhTbxjhY&X-Amz-Signature=5cdd52eac3d275d09804c53d6845b9bc2f95adde8644ba738ab0e48ef9afffdc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BEXXMUC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCVybJCzDwPOJGbcoZFL24MH3t81W5cou8Pxtk6bLwCBwIgEb6fdmELoQJwVjGkF8fjUnHvcoq4d5mwZJD9Vw%2FKxG8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FLHhpmOPGuYCjfGSrcAzdCiJBhq7GdEPbivyTt2k4e9GBihqqELKbSDRTcU2XYbcWLeiGPiq4UmyFFk8MB1KPQKMU8VqXuDX%2FAUwcfjslP0Ki9Lzv3CcAj%2BVOBPOHnbiaT5ogRDB3QTCex67i1gR%2BswoRHCwh72cPcsYJUp3GRew81XzpQaLFT46gImk4qb0lXmcQKXEPFc11smW2O5d2WXwBwrM9r%2F2b%2BMe5b9koTGkDBIO6Neeb24P2FtQGpBY%2FSxdJJM2rqylg%2Bht%2BgmGejnGxjXMAEzjVihjrHceyIsfjILaE2InYKbWMr3s1B92FPS2G7nCmBPSMjIrmf6VL4HcqmFujsNO8KGh2Rt%2BzXC5TGccRAx%2BoXxsjTGutrDzoNPzvmiRmMF7NxzXGvWPhmxfeDoNKAUyKPjP74JpkmMeUmqt5FwJ4OOcbTaEj9%2BB6Z5jODnZigdDeT2fA63AfuENFcY3P1LgB4njWPTnQYlYGKVfJxiKkkoEQeuGJuhZlEaue1SbxzvSez9oyREIk8CgQSeILlPHFavDKWuAvJHDfDMkZ%2FmIiB8uka8fOwW1SlD0d02J%2FuJP1WLQsQEESJJV04oUEp2YQKszX25KwiCv2JdPndO1vb8BJp9ZrV1301T4nFW2XsDsEOMLDCncAGOqUBymLY1evtHhn4Hp0JQxq76uyU%2Bpu6rY5pkjBGTDIU3yDYjEZQaZgXPmT3Z2F8knAeKZlsp2yp1adhZapoxaNBcLfc27%2FpmKQrgatPGJc6Ptjp2kewFSW3gIRfhAGgsqwqglluKsSTyvBFxYN2T1dEs1L%2F%2FZofDa3i2QCr4y9Zkciz1eEvuTCOqVk4lLldpwzdUSBQ2Y%2B6JEelvqnlSuwTzhTbxjhY&X-Amz-Signature=60387858b78b11c85388ea078802bda1416343229f8c2dab675683cc6b3d7d27&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
