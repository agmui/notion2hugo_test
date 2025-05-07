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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIKWZKZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBhT%2F%2BYuCwO5IlcApU0HCLTYqcnS%2Br%2BUWA3K5HZ%2FEAaAiBxUeVFQ2kC239jiDfq2FKMDkOPkoVa4hxkB%2FJlTKc5PSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMa6A0t9qnId5MNh04KtwDGByZbN%2By3ceuZhIky6G5gCnbRIzEQQ%2B0NH2Dt1UHw3WN5IULhUG3K%2B0LJJl35bA0fniD0%2BAg14st0IEv4HRQyenw1VuxgiM8WJQwOeZI9wbHSSP8okjskoF0qpn043RgB%2BPNihCzwJu9xMGrjRzbtBMUajq0VkTZNTdJ9pXBuNTwuS9sJsqTVJD4deE3MNL1lZUsz%2FrtL40r%2B%2B3VuELwgm7sBLVur1lUkpW0B8tWrboRt5urFh%2BWIKiOANnyKjFZ2zw9dD8y3pWqxricCulIWzFIbO8mXtM8p3ClfZCfxsf46jabwQCt7QszQgC8C7avsZFquj7TtgI%2FiPIBeGu1cKADA8V7LUQU1cY7T2o2dWRvXknqF6UzV0P4Bh3wy3iev3ShhOSVcu5%2FriHacqucSDWzoD38cDqIVBScTxRJmxUihub50YkslKuuLsxX0eL32KnlQg1PghaH136z%2BaZjSqP0tQi%2F1ifOuE1MjzoYtY8NnJX64LODU4EQyh7I0iTYIG9Eo3c2djcbxSrtb2jiD3JeE%2Feg2bHyK%2FNiQxj39Tws%2B3uNztdq2J%2F%2Bw4YCF0ppx1TixC0bncZ1a14%2FqX%2B1z9KzcqZERpYqHOeQEzft6ZqpQPiPW0nEEIsTHT8wv9DtwAY6pgGkuB02YRiXDvSDRuKk5Rvq7fVfRTBTuAGjze2PNMYBudni9On8iYiPRjhEVuLd%2Bkcvpu%2Fz5Xex9BD%2FaYkDLMERCjnCFH9SOFAuD8dApMoTV7hK9CLCBfp4h5XW3fg96Lt2kBd1EeL2fdiLNzLex6OpjXWXfE30HYEp2N2GZ2kJw9yKeoQjRt46Brus%2F7l5SQTT1B9bAMljaEhr0xnbR2gC4kIJb%2Ftk&X-Amz-Signature=ca503a041866dca1c8135f20210c8ba106f49e862a8ce045f4b1118fa8daeb63&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIKWZKZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBhT%2F%2BYuCwO5IlcApU0HCLTYqcnS%2Br%2BUWA3K5HZ%2FEAaAiBxUeVFQ2kC239jiDfq2FKMDkOPkoVa4hxkB%2FJlTKc5PSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMa6A0t9qnId5MNh04KtwDGByZbN%2By3ceuZhIky6G5gCnbRIzEQQ%2B0NH2Dt1UHw3WN5IULhUG3K%2B0LJJl35bA0fniD0%2BAg14st0IEv4HRQyenw1VuxgiM8WJQwOeZI9wbHSSP8okjskoF0qpn043RgB%2BPNihCzwJu9xMGrjRzbtBMUajq0VkTZNTdJ9pXBuNTwuS9sJsqTVJD4deE3MNL1lZUsz%2FrtL40r%2B%2B3VuELwgm7sBLVur1lUkpW0B8tWrboRt5urFh%2BWIKiOANnyKjFZ2zw9dD8y3pWqxricCulIWzFIbO8mXtM8p3ClfZCfxsf46jabwQCt7QszQgC8C7avsZFquj7TtgI%2FiPIBeGu1cKADA8V7LUQU1cY7T2o2dWRvXknqF6UzV0P4Bh3wy3iev3ShhOSVcu5%2FriHacqucSDWzoD38cDqIVBScTxRJmxUihub50YkslKuuLsxX0eL32KnlQg1PghaH136z%2BaZjSqP0tQi%2F1ifOuE1MjzoYtY8NnJX64LODU4EQyh7I0iTYIG9Eo3c2djcbxSrtb2jiD3JeE%2Feg2bHyK%2FNiQxj39Tws%2B3uNztdq2J%2F%2Bw4YCF0ppx1TixC0bncZ1a14%2FqX%2B1z9KzcqZERpYqHOeQEzft6ZqpQPiPW0nEEIsTHT8wv9DtwAY6pgGkuB02YRiXDvSDRuKk5Rvq7fVfRTBTuAGjze2PNMYBudni9On8iYiPRjhEVuLd%2Bkcvpu%2Fz5Xex9BD%2FaYkDLMERCjnCFH9SOFAuD8dApMoTV7hK9CLCBfp4h5XW3fg96Lt2kBd1EeL2fdiLNzLex6OpjXWXfE30HYEp2N2GZ2kJw9yKeoQjRt46Brus%2F7l5SQTT1B9bAMljaEhr0xnbR2gC4kIJb%2Ftk&X-Amz-Signature=cde37b1a76adbfa649866b70e8f287e40abc1d342a204b512a09d5967bff7240&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
