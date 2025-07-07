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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRX377NL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCsRNbcvbRzbmUsB%2F21Afo9AL9Dz4qY0EPdxNbdgl45bgIgaxfRwch%2FpvuKpfX1bYX%2BBQ3hTQAAxk9A14BtTtkL8TQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAfl4ASyQHC%2BoWtk4ircA%2F9iTCy2FJMGHQ8dbPRZKD%2BH71CUpWMR8cPnxdyg9zjoaxq5E1Gdn9dCv%2FKveSGRGKW252Cs7yiMzh8qay2LCD6xSZ09SSC%2BAlNNyuLvSLEdkTqInyV3HzyUAYBz5USKbwWamMKdOdz9SOniyJOXM%2BWALPKcMKu8xmYIQCogk1j9F8zHt2vxoFYr4XM%2F07%2FaZurri03mnnxJauFun6NBjIfVG0r2fxoNF73e5I6Rmc%2FGeeTeNpJ74ItTuy%2BmGcz0ucGxFRCgK6DjtO%2Bi9j32xLXB6KjIGuOIxpsXJoWH%2FzRN%2BNMyVjozliBJ2gjWps6g39LQkxu0a%2Bw0eEZAjv6A3WLfZjmZbKBNDm%2BR94mwyQOdb5%2F1JL0RRMQeBCBhY3C7oUTbIB%2BVbZRrf1%2BGEr9wtc4zL8yoc9RYPap8X7Is87k1zovmwcL2n7Jgbh4QBOHQDO3PXKTv7JB6acNi3QdMIWpn3nJ2ECUyUBwIGadNIZlSqKHGgrar1amzkcx80kUvNtpMlH%2BckdQ0v1oLeNTkMeq%2FFKYTEbruQ5qHil8aMrD%2FXB6Gu%2B99CIis5Gz2C8tyKeK5sOlp5%2BE7CLOr%2FgsGKRFPX2KpHARDJJJhc8zintoAbtrJTZNBUvvPlSWGMMeLrMMGOqUBZLs3l2YArHzu%2BRriOTATxdMuvzobXkYIgfTXu6zPBdXeWlf%2F6mBTXuYRS4zQMRnoq2phyU2%2FibXwsm3xz2XlJQa%2BKo55L7LfnmKGc2S0vr9yvmHoNwzMDqKJqB%2Bau4qwTUePTlvN9yoBb%2FcHobgXaLQfwqnhwMm1fR5SI9AcpTHPzgEmMwJEoWyFVcNrIO9A9onCOffd2w40fsB57ijyyMhhZQCt&X-Amz-Signature=f69e364a9c6627935bbdfbc0c1721b1d57a013b87d4ff3fa3294ad68b03237db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRX377NL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCsRNbcvbRzbmUsB%2F21Afo9AL9Dz4qY0EPdxNbdgl45bgIgaxfRwch%2FpvuKpfX1bYX%2BBQ3hTQAAxk9A14BtTtkL8TQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAfl4ASyQHC%2BoWtk4ircA%2F9iTCy2FJMGHQ8dbPRZKD%2BH71CUpWMR8cPnxdyg9zjoaxq5E1Gdn9dCv%2FKveSGRGKW252Cs7yiMzh8qay2LCD6xSZ09SSC%2BAlNNyuLvSLEdkTqInyV3HzyUAYBz5USKbwWamMKdOdz9SOniyJOXM%2BWALPKcMKu8xmYIQCogk1j9F8zHt2vxoFYr4XM%2F07%2FaZurri03mnnxJauFun6NBjIfVG0r2fxoNF73e5I6Rmc%2FGeeTeNpJ74ItTuy%2BmGcz0ucGxFRCgK6DjtO%2Bi9j32xLXB6KjIGuOIxpsXJoWH%2FzRN%2BNMyVjozliBJ2gjWps6g39LQkxu0a%2Bw0eEZAjv6A3WLfZjmZbKBNDm%2BR94mwyQOdb5%2F1JL0RRMQeBCBhY3C7oUTbIB%2BVbZRrf1%2BGEr9wtc4zL8yoc9RYPap8X7Is87k1zovmwcL2n7Jgbh4QBOHQDO3PXKTv7JB6acNi3QdMIWpn3nJ2ECUyUBwIGadNIZlSqKHGgrar1amzkcx80kUvNtpMlH%2BckdQ0v1oLeNTkMeq%2FFKYTEbruQ5qHil8aMrD%2FXB6Gu%2B99CIis5Gz2C8tyKeK5sOlp5%2BE7CLOr%2FgsGKRFPX2KpHARDJJJhc8zintoAbtrJTZNBUvvPlSWGMMeLrMMGOqUBZLs3l2YArHzu%2BRriOTATxdMuvzobXkYIgfTXu6zPBdXeWlf%2F6mBTXuYRS4zQMRnoq2phyU2%2FibXwsm3xz2XlJQa%2BKo55L7LfnmKGc2S0vr9yvmHoNwzMDqKJqB%2Bau4qwTUePTlvN9yoBb%2FcHobgXaLQfwqnhwMm1fR5SI9AcpTHPzgEmMwJEoWyFVcNrIO9A9onCOffd2w40fsB57ijyyMhhZQCt&X-Amz-Signature=2f5af663aec2eb57544e0f6ed701d8d28f104a32ba10c6a9f94e0583ea6e608b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
