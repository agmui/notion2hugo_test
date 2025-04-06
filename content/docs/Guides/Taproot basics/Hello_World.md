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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HL2BOJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTGumxewfTOsjJ9eG32NHal3XUhIH2WqSQYTQ%2FQESLwIhAMv70vyQwohm4K1vz8%2F6FTG4T5E74ZOqy9PkgOQP9vX5Kv8DCEIQABoMNjM3NDIzMTgzODA1IgxdY%2FWHpMZZFqObCgMq3AMdqOFFmy3aVHSHKH8FOZ9W2OmLhV1uAXXwWzVmaPJmMKf5WMdVGCZAG6vXSuctfQyuDbYD4luXiO2gdj05pfkqixp6m%2Bmq%2Fh3LVNLmIWMqF887LGFuaBeguoLEO%2BupTj%2BvfYn9YYf5G4P%2FmJSSEovgFtlTht0I%2Bj%2BRycnwamFQFDAi4GLD0pJ%2Ftr5YYIMDsZTqn2gW07NQtKm1TuWcLanpCdavnjf1gC4GXcQ6%2Bj7%2F0jZBvmH2XWrN01U6WfRkF3wCiygld4r01w73sXFHnympNj8UhzchmnEUqkzlqUpjz9jADtwGiU4qPTMDcFib%2FHqkKwgTWSW8fqZpVc85pLTrI32iLxKhSHnVjDeSweQ5T58OGJVeNAfFwj4BjTWhk%2B32sV2B2%2FfiC%2FzMWDqNThXpCbX3x2j6tGZJxFNcQXhW2IJgZ1DaFTMGOV6VjYhnX09bHFD6lD15WWKPjwX77obRIaSok4W4tsh8j41l7rV0czm9Mefd%2BQsEP8LYcqikAWyF7pWWyRcJ97rqWrU4dqrVHltatd5inVaVueRX204VtG7gFvbbrjVM0gYXGmiESk76WUatUhjFJxbw2ZFAtOD94DJp0rfesFjbFviiW2ldUMwuxZ3nUJBiXXDNTjC1%2F8i%2FBjqkAboZJQ7uUax%2BXS1FKkkLV8lEvhMg4lwrdIO6YTJdzXTosoIklIjK3sUJ4kIf4kMdpc2Zdj5YXFWOggpy1JBU%2FS2PCRtgN9sPJnrhaxmnF4psipQgZXBIxzwp2ooouLY%2FafrW4XtQZdPhcUoskdIP9kY5LxUPgCf7q9vynXdw8eEXSjXHTYzsXpK0hJRQ8wYUcRBVLrTJIHpXDugHo5EIBtKSeV6O&X-Amz-Signature=2280a00ca79c01cad5016681bf0f8fb5498070cc378094267608fe727f7f697e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3HL2BOJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZTGumxewfTOsjJ9eG32NHal3XUhIH2WqSQYTQ%2FQESLwIhAMv70vyQwohm4K1vz8%2F6FTG4T5E74ZOqy9PkgOQP9vX5Kv8DCEIQABoMNjM3NDIzMTgzODA1IgxdY%2FWHpMZZFqObCgMq3AMdqOFFmy3aVHSHKH8FOZ9W2OmLhV1uAXXwWzVmaPJmMKf5WMdVGCZAG6vXSuctfQyuDbYD4luXiO2gdj05pfkqixp6m%2Bmq%2Fh3LVNLmIWMqF887LGFuaBeguoLEO%2BupTj%2BvfYn9YYf5G4P%2FmJSSEovgFtlTht0I%2Bj%2BRycnwamFQFDAi4GLD0pJ%2Ftr5YYIMDsZTqn2gW07NQtKm1TuWcLanpCdavnjf1gC4GXcQ6%2Bj7%2F0jZBvmH2XWrN01U6WfRkF3wCiygld4r01w73sXFHnympNj8UhzchmnEUqkzlqUpjz9jADtwGiU4qPTMDcFib%2FHqkKwgTWSW8fqZpVc85pLTrI32iLxKhSHnVjDeSweQ5T58OGJVeNAfFwj4BjTWhk%2B32sV2B2%2FfiC%2FzMWDqNThXpCbX3x2j6tGZJxFNcQXhW2IJgZ1DaFTMGOV6VjYhnX09bHFD6lD15WWKPjwX77obRIaSok4W4tsh8j41l7rV0czm9Mefd%2BQsEP8LYcqikAWyF7pWWyRcJ97rqWrU4dqrVHltatd5inVaVueRX204VtG7gFvbbrjVM0gYXGmiESk76WUatUhjFJxbw2ZFAtOD94DJp0rfesFjbFviiW2ldUMwuxZ3nUJBiXXDNTjC1%2F8i%2FBjqkAboZJQ7uUax%2BXS1FKkkLV8lEvhMg4lwrdIO6YTJdzXTosoIklIjK3sUJ4kIf4kMdpc2Zdj5YXFWOggpy1JBU%2FS2PCRtgN9sPJnrhaxmnF4psipQgZXBIxzwp2ooouLY%2FafrW4XtQZdPhcUoskdIP9kY5LxUPgCf7q9vynXdw8eEXSjXHTYzsXpK0hJRQ8wYUcRBVLrTJIHpXDugHo5EIBtKSeV6O&X-Amz-Signature=29c054a07a1c74afa8450321af7c14dcda075b60d5a229b748295cc48d767a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
