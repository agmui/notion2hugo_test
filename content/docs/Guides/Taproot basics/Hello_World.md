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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUHPCBR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEn8x1zgN41epme%2BgeffemZqWYXG4mFWv7yCEUj1CMHQAiB4kAigcB4RvjGtKd3KxPIT0YstexI8K7isLdOGOfKO9yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMR5sNMl4gnCzBmfomKtwDCNo0%2B5VrEwrd%2BnaRutZ4%2B5GbkYCUxuH01IYiM23DuOlnFNdAjDKpz%2FWaRjahQ3XCV%2FugMTSOqTgdIK5cm318O9VZ0I8PWhqNd696%2FmPc5knDrc3kK9STCTRG50nHWaJfLuGRmdqHQ0Mft0vJJM2EdD1aGfS4zoiATLrCdT3woyrtSEnbV9ZYqLAczJdW17Ckc2v0MSkyhP5VA3uxziAKgg%2BFGnTkpbV6RFfF9Mx13v0y5ijl1LoReYITyb9y1CUPZSUOe5Gc0ARi96fy8BPm%2BvQDC42tO2TeVxXeZIucaKd2h5vpt445IXHFWXmXOqBVf71P7wRGWFSZ3rRzfmAoAVM48qtKGBI0ovp87QL1OL9Xkgh93NimZs233GupGm%2B9cgdb6Kw6G4aG9cFH8%2F%2FttasCczyp2iuqDmim9v%2BaDwVlUgEC7cRTZCvcFPqsw59AMhqpzhof8haKM0pYHoX5EjIbver8ELECOkbhpwHd1PSjHaVrLRPKTyxWZwMwlUxk0Foh5fFIpodqdL0viVJePBS7Pn5e%2BF%2BTJQAhpxx66ARbrenK7gB%2FgwZmCcjwKOtycubhSG7MkUZYj9PHbfIbW%2Bsa%2F71zhjKKON%2Fm3sqP5s%2BzmNHhpSoxdnER0c4wlPDdvgY6pgGVs30VrFqk6P%2FbLTJ3aev1mKwKaiR96PFV8HdDgOs10cpqlqvUuae0S4n3LVfAWNYbalk%2BNQPaeQnYg6s7ucOLhwcY%2FFxGWO73fJafDUAtm3Dp6o%2B25SfYGsQrL2AbfJmwN6gUg0BrOoaw2VU4%2BTNe28oSM6iX6voBFinuaPHNnZ09dywgmudDrKSfguMwU5gALMN%2B0%2FpsC3ksb0sa1NEUSNhe0u8u&X-Amz-Signature=18994aa347e0cf0a96e8330a6ea381869ae290e6723452b56c3cd84c6d4cfe08&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUHPCBR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEn8x1zgN41epme%2BgeffemZqWYXG4mFWv7yCEUj1CMHQAiB4kAigcB4RvjGtKd3KxPIT0YstexI8K7isLdOGOfKO9yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMR5sNMl4gnCzBmfomKtwDCNo0%2B5VrEwrd%2BnaRutZ4%2B5GbkYCUxuH01IYiM23DuOlnFNdAjDKpz%2FWaRjahQ3XCV%2FugMTSOqTgdIK5cm318O9VZ0I8PWhqNd696%2FmPc5knDrc3kK9STCTRG50nHWaJfLuGRmdqHQ0Mft0vJJM2EdD1aGfS4zoiATLrCdT3woyrtSEnbV9ZYqLAczJdW17Ckc2v0MSkyhP5VA3uxziAKgg%2BFGnTkpbV6RFfF9Mx13v0y5ijl1LoReYITyb9y1CUPZSUOe5Gc0ARi96fy8BPm%2BvQDC42tO2TeVxXeZIucaKd2h5vpt445IXHFWXmXOqBVf71P7wRGWFSZ3rRzfmAoAVM48qtKGBI0ovp87QL1OL9Xkgh93NimZs233GupGm%2B9cgdb6Kw6G4aG9cFH8%2F%2FttasCczyp2iuqDmim9v%2BaDwVlUgEC7cRTZCvcFPqsw59AMhqpzhof8haKM0pYHoX5EjIbver8ELECOkbhpwHd1PSjHaVrLRPKTyxWZwMwlUxk0Foh5fFIpodqdL0viVJePBS7Pn5e%2BF%2BTJQAhpxx66ARbrenK7gB%2FgwZmCcjwKOtycubhSG7MkUZYj9PHbfIbW%2Bsa%2F71zhjKKON%2Fm3sqP5s%2BzmNHhpSoxdnER0c4wlPDdvgY6pgGVs30VrFqk6P%2FbLTJ3aev1mKwKaiR96PFV8HdDgOs10cpqlqvUuae0S4n3LVfAWNYbalk%2BNQPaeQnYg6s7ucOLhwcY%2FFxGWO73fJafDUAtm3Dp6o%2B25SfYGsQrL2AbfJmwN6gUg0BrOoaw2VU4%2BTNe28oSM6iX6voBFinuaPHNnZ09dywgmudDrKSfguMwU5gALMN%2B0%2FpsC3ksb0sa1NEUSNhe0u8u&X-Amz-Signature=90dabe0d1f6e2bb4f1491d061bcfdab5d9f8cf0ea6e8ed09a574d7f0fdb9b095&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
