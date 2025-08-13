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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHLF6A7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9wEBPWHFGYI%2FZ1nKOxrPbClEM6eg82eHY%2F6Bq2qKClAiEA4t7PlHIaoyD%2Bvcp6EWjv0zksAri0SHtEvGYy8jBJwPMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE9Uj%2FraTiZwuSii%2BSrcAxMegH%2Bb6lhuK9lXn5WKp7A%2BhJ%2Fn1UvqT7LwcNGekr9yljcTU%2BYMMauh%2Fffi3dHTcH4R38i08VfaXcRoBoDdtGv0PEcInGWJAgskA1fSagLALrHaUCOWDl5dS2E4lzAjywCFkMJpKHrcjrwXPRDkMN5cEko0OPJrOT6e%2BBOWMVe%2FY7051FCVC%2BuXuCQh7D8p5YnmgZ2p4yVsOrDteAD1hhHEwAECpbLAidlSWNf2eC0RekdoCByAhQJUTFbXFu2R1fV%2BCfjPTx2TDvcCDHexWvk8olH3E%2FobfobcIBZ2Wck9K%2FNe8VftZJDLQFn2TLnmt04SVj71iGNJxyPvxSQC5i1M5L3r8g8jw1q1DGJZKgCyoV2pFswK96gEhgMFwI1N%2BCsEUdYpf9dimlAJ4GsvhwM%2B2jo58OpsqH3Faq0sNgHV690tpaWG4iWFbKBrEh0giePLZzUnePAgQR9xrAe%2B1tJf5c0wIBfMjYmqmzWEQZbFn%2FMqvT0RnxE8tDgYqOT3DoQGlf%2FtXMJowPhel4IM%2FqXc76JaSZeXeDvvhn4rBWLp0jY5%2BKwQt65f%2Ffd%2F8xpIWFoEl6Kq%2FhysKs3W%2BEj4yxc1MGcfF7Hf3bsY9yyf5iZlbY5emxdT5AbMe4dMMP%2FF88QGOqUBXC3YXGQZHlfFeDlqpF83rQlMTm8iR86XkHbEJfBQXleb%2FjJJJh8MOMysIeDzP3u4mij4KJx9VGGNeJLMHViC%2Bc8BMdSyZ3EiF1WQ%2BM8jN%2FaWAThA7X0o7RySZPS3lPgAK5pkfWcI26Q%2B6P8zhKVYc6Ie1RDYh1%2BvrsgbGxgC%2BreiXcYm38wQP6rDuo%2FbIgnL86Ceqjn%2F%2FLBiO2NyQskm39HX8dbk&X-Amz-Signature=433c572d65ab1e73aaef204a1608637917991672227bd72ec329c3d0f8d80393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLHLF6A7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9wEBPWHFGYI%2FZ1nKOxrPbClEM6eg82eHY%2F6Bq2qKClAiEA4t7PlHIaoyD%2Bvcp6EWjv0zksAri0SHtEvGYy8jBJwPMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE9Uj%2FraTiZwuSii%2BSrcAxMegH%2Bb6lhuK9lXn5WKp7A%2BhJ%2Fn1UvqT7LwcNGekr9yljcTU%2BYMMauh%2Fffi3dHTcH4R38i08VfaXcRoBoDdtGv0PEcInGWJAgskA1fSagLALrHaUCOWDl5dS2E4lzAjywCFkMJpKHrcjrwXPRDkMN5cEko0OPJrOT6e%2BBOWMVe%2FY7051FCVC%2BuXuCQh7D8p5YnmgZ2p4yVsOrDteAD1hhHEwAECpbLAidlSWNf2eC0RekdoCByAhQJUTFbXFu2R1fV%2BCfjPTx2TDvcCDHexWvk8olH3E%2FobfobcIBZ2Wck9K%2FNe8VftZJDLQFn2TLnmt04SVj71iGNJxyPvxSQC5i1M5L3r8g8jw1q1DGJZKgCyoV2pFswK96gEhgMFwI1N%2BCsEUdYpf9dimlAJ4GsvhwM%2B2jo58OpsqH3Faq0sNgHV690tpaWG4iWFbKBrEh0giePLZzUnePAgQR9xrAe%2B1tJf5c0wIBfMjYmqmzWEQZbFn%2FMqvT0RnxE8tDgYqOT3DoQGlf%2FtXMJowPhel4IM%2FqXc76JaSZeXeDvvhn4rBWLp0jY5%2BKwQt65f%2Ffd%2F8xpIWFoEl6Kq%2FhysKs3W%2BEj4yxc1MGcfF7Hf3bsY9yyf5iZlbY5emxdT5AbMe4dMMP%2FF88QGOqUBXC3YXGQZHlfFeDlqpF83rQlMTm8iR86XkHbEJfBQXleb%2FjJJJh8MOMysIeDzP3u4mij4KJx9VGGNeJLMHViC%2Bc8BMdSyZ3EiF1WQ%2BM8jN%2FaWAThA7X0o7RySZPS3lPgAK5pkfWcI26Q%2B6P8zhKVYc6Ie1RDYh1%2BvrsgbGxgC%2BreiXcYm38wQP6rDuo%2FbIgnL86Ceqjn%2F%2FLBiO2NyQskm39HX8dbk&X-Amz-Signature=7c277e6734894bec6c6f223cbf4bdf51d04066a65b5d70f71174d4c7f59dcc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
