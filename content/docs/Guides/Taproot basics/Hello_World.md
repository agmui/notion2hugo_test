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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PGDMI5R%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIE6ZIIY4JISujIUCKgTT09gg8ifPwNOGv7Ku3QsrEprOAiEAxaB5tBYAIBff91dDys6FcnJwO9YOCZeyPJ7B4GiUNeMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEPtYyJeyTsXa%2BAb6CrcAwmdMYX5lROMnUUvHyxufg1n2IInoHkAWPFX%2FuEhQOpsLIQ7hq5FXrYfytCxdf05w1NYQT74w%2FUMQv49PdKs2%2BycwRxYKFqZHAEEZ14oARlTAqPShyXt%2B%2B%2BKj1lo35iDbfZCqW%2B293Yzf1iFCb6VpNkVF%2FXmqLu6tUU6LRdRNyue9zO3zVAy7MvBmtBYi757zLqLiPuBfodaF6qxVGmx25kfCF66i%2BO8tn7SH78altfMJKvG5K%2B3sdl3mUieciMx5ljFx%2BI2pHfSAIWke2f9ToBxkIURmigTlhyAd4S0zFmri6WT1Wtbj33cLywAnrQbYhzSYJ9eRCumLR3hJxrGdfhDRDPmdHY2PETMDTUT%2BVDt4tSAk3ty8j2xlrNEVFQ4dkMl%2BNXAuoWuiT6vSeDxAEkr2HnQwZ67jRK%2FKYd0K06bQ5SvOUCiNntbF5GGdLjg78It3e29ro0TXSTBG6tqEwLvDtfAM6ZEkDVwHZDj0K8hRrnhYl8hPQtZQgd9prJOGtJeve5cny%2BtjN8s%2BDNt0LjJ6oTNuK4K3AXTgo9zY2Kok2J2No06L9l9H1dXyozhjlATt809Yw4lv01oflMfV4y43BbKGD0RFxtF1VewCWspXVDC%2FITs14qXf7nXMLDI0MMGOqUBFWY8%2Bwr0xXhdQzdXkm5XiF%2FFWuML48CMo%2FdQ3omkuMKRzu8hfvrgZpuJ3VTAEGbrF%2BuVN0j5Cr%2F7g32eZSKd4dWb0cbzBYWMgKWCbqUtlBMKP4vzyxqnrzj7aXNxNlZVVyZbQT6tupZDqrHOi5nlF4VF1tkHaNslslTYyx8ADKMVUNhOi8ZcJSP3CRnP4DLQcfPLugF4NM2cytoW1EjEhbyquN0m&X-Amz-Signature=31cc4ea4c60cb4de14c12fd01c5a6338c4778abef35edbfe0c600074d6fe42f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PGDMI5R%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIE6ZIIY4JISujIUCKgTT09gg8ifPwNOGv7Ku3QsrEprOAiEAxaB5tBYAIBff91dDys6FcnJwO9YOCZeyPJ7B4GiUNeMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEPtYyJeyTsXa%2BAb6CrcAwmdMYX5lROMnUUvHyxufg1n2IInoHkAWPFX%2FuEhQOpsLIQ7hq5FXrYfytCxdf05w1NYQT74w%2FUMQv49PdKs2%2BycwRxYKFqZHAEEZ14oARlTAqPShyXt%2B%2B%2BKj1lo35iDbfZCqW%2B293Yzf1iFCb6VpNkVF%2FXmqLu6tUU6LRdRNyue9zO3zVAy7MvBmtBYi757zLqLiPuBfodaF6qxVGmx25kfCF66i%2BO8tn7SH78altfMJKvG5K%2B3sdl3mUieciMx5ljFx%2BI2pHfSAIWke2f9ToBxkIURmigTlhyAd4S0zFmri6WT1Wtbj33cLywAnrQbYhzSYJ9eRCumLR3hJxrGdfhDRDPmdHY2PETMDTUT%2BVDt4tSAk3ty8j2xlrNEVFQ4dkMl%2BNXAuoWuiT6vSeDxAEkr2HnQwZ67jRK%2FKYd0K06bQ5SvOUCiNntbF5GGdLjg78It3e29ro0TXSTBG6tqEwLvDtfAM6ZEkDVwHZDj0K8hRrnhYl8hPQtZQgd9prJOGtJeve5cny%2BtjN8s%2BDNt0LjJ6oTNuK4K3AXTgo9zY2Kok2J2No06L9l9H1dXyozhjlATt809Yw4lv01oflMfV4y43BbKGD0RFxtF1VewCWspXVDC%2FITs14qXf7nXMLDI0MMGOqUBFWY8%2Bwr0xXhdQzdXkm5XiF%2FFWuML48CMo%2FdQ3omkuMKRzu8hfvrgZpuJ3VTAEGbrF%2BuVN0j5Cr%2F7g32eZSKd4dWb0cbzBYWMgKWCbqUtlBMKP4vzyxqnrzj7aXNxNlZVVyZbQT6tupZDqrHOi5nlF4VF1tkHaNslslTYyx8ADKMVUNhOi8ZcJSP3CRnP4DLQcfPLugF4NM2cytoW1EjEhbyquN0m&X-Amz-Signature=81a5703740ce867555f5a10731ef4faf4db561c59aab641681b45e41067b98c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
