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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKQZTA5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpN%2BrNQyMseAeYMIdAoZ7EcEDyfdBLt6mxHN6oTL7N6AIgeFDnx8lE376rnhDfNsJNFh3Yo9cRnt8Voj1cwt%2FESiUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaFeW0cy98x%2BeYh8SrcA9P9komN9YJeLYauahheaWlVWgvHCuRFaFtKJnnJL1LQsMFYJQ9BGkFII8D%2FOvKFDqDFaU%2FsuHs4k88Ow%2FeTZbpcnO48KhcflW8mK7WcqwtiC%2FJ4vzQmHF4XBxT1JGW6bMQQnJv0x2Y4GhYT5sN7%2BL6%2Fe3OqQu%2BUM6DBLeb4UJfhXyZhKPwmtPenlvsAzYYz37PcfZoFh%2BRbuOIE%2FUvpVTDf2tvI2o%2Fq8zg0oSRFmcFYa0fiTYbtqS97ixyQ%2BdpJxEcXuVltEX97Fm2DlC0RVB4YH5npEyelTZJq1xzZ5G4TYluSBdA%2F5TxCTw7IL7uNoT98v4jtw0ZExfY7gaSDCaw3ytLbXdlGo3h%2BjCykvvB8WipVRba6bZDxQ6VU55R1CgOG0Saaxo%2Bkj8L3eIfbU2cjY3h6I%2BqBU2GHWZz0xsa0MLai9jSy4mVfGFtdXAlvf7zOQo0tE1POwIeZWeU8VUIlAcpQ8SeXQT7YZIzbbTH6c70vJ6YjUWcuCIIynrB8bdv2t%2F88swpY4j%2BtRyFvB9CzXzJ%2BYDjWXVJ0HFiA9cFr6333uORX5S%2BJe5r6klZ8CDvNs3H2yH%2Bq5418ViOj4AX8KppC%2B2tzMqVf6bLfjyKpawKk1S7d76fja7CYMKO58rwGOqUBWB%2FPeX3OEP2glYy%2FduY%2FONfvZ3hybKKJayHpyEof0dTNll0Cw5ik5fAlO9VsOxG8qw7DTN3sey1MKK%2BoBwTmcb0xlJXQnn7R5UggdzNP4KPXGwSSKqPCpg9WBINg2zgz6fTqSNDBh9Rr85dp51bpzne24aji%2Fmb8QKmgoedQeiKZbI%2FPMqj0oPoiRiGFy8X6x%2BikEykLliy6aGXab18Z54IQGaBN&X-Amz-Signature=0e6609cd18da4e7846e2f154c3426944b896a18fcd6a1444469b321b17f7410f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKQZTA5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpN%2BrNQyMseAeYMIdAoZ7EcEDyfdBLt6mxHN6oTL7N6AIgeFDnx8lE376rnhDfNsJNFh3Yo9cRnt8Voj1cwt%2FESiUqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaFeW0cy98x%2BeYh8SrcA9P9komN9YJeLYauahheaWlVWgvHCuRFaFtKJnnJL1LQsMFYJQ9BGkFII8D%2FOvKFDqDFaU%2FsuHs4k88Ow%2FeTZbpcnO48KhcflW8mK7WcqwtiC%2FJ4vzQmHF4XBxT1JGW6bMQQnJv0x2Y4GhYT5sN7%2BL6%2Fe3OqQu%2BUM6DBLeb4UJfhXyZhKPwmtPenlvsAzYYz37PcfZoFh%2BRbuOIE%2FUvpVTDf2tvI2o%2Fq8zg0oSRFmcFYa0fiTYbtqS97ixyQ%2BdpJxEcXuVltEX97Fm2DlC0RVB4YH5npEyelTZJq1xzZ5G4TYluSBdA%2F5TxCTw7IL7uNoT98v4jtw0ZExfY7gaSDCaw3ytLbXdlGo3h%2BjCykvvB8WipVRba6bZDxQ6VU55R1CgOG0Saaxo%2Bkj8L3eIfbU2cjY3h6I%2BqBU2GHWZz0xsa0MLai9jSy4mVfGFtdXAlvf7zOQo0tE1POwIeZWeU8VUIlAcpQ8SeXQT7YZIzbbTH6c70vJ6YjUWcuCIIynrB8bdv2t%2F88swpY4j%2BtRyFvB9CzXzJ%2BYDjWXVJ0HFiA9cFr6333uORX5S%2BJe5r6klZ8CDvNs3H2yH%2Bq5418ViOj4AX8KppC%2B2tzMqVf6bLfjyKpawKk1S7d76fja7CYMKO58rwGOqUBWB%2FPeX3OEP2glYy%2FduY%2FONfvZ3hybKKJayHpyEof0dTNll0Cw5ik5fAlO9VsOxG8qw7DTN3sey1MKK%2BoBwTmcb0xlJXQnn7R5UggdzNP4KPXGwSSKqPCpg9WBINg2zgz6fTqSNDBh9Rr85dp51bpzne24aji%2Fmb8QKmgoedQeiKZbI%2FPMqj0oPoiRiGFy8X6x%2BikEykLliy6aGXab18Z54IQGaBN&X-Amz-Signature=a1c649789816b3e5078ec51125ef8ccfaf4d1429f97b3323a32639d6396fefaa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
