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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667YJKCF5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAxS8NjQC1%2BqX%2BSAyb5wR6oU8q%2FiCkADgm7Ia6E2GhsVAiEAjSDBDj25DeAHxGBIZ%2BpUqjyRpsS0Z7ermM1tM9YNy3Aq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMJ3MAMbQR%2BSidCN7ircA0Tw%2BKZcrz8%2Bv%2BRbfGFihcScJ7WRlXWtUCk6SRYljT30zYnQbKfYAVx4S28z5ALTq6un5D6r6gP6Ys0tstVqbJKcFXH%2BYcWuBBnUS1a7D2pBH4tq9jz3MfFfgtK3bKhzWJrqVCvRFyJFpVVkhW0julq5rG3k6tZn3NrKAP%2BKYUngS8TBV9tmktT%2BKeRdTfQEDrpwBv0SFOI4hM9Q3%2B7ZoOkCPr%2BIyjjYU2Wm9ynWzN%2FwKBZ6Q8x0Js0NWJipwXHjkI3Z40C4nNmHHYXuLmbiyzpU%2FtMxMibxAVn386DKa90sSoy2sFLBOrACdeCeGOBatf9dT3PLtDliZJkN7mdbZOpGRgLoeJooSld2AynY%2BxzRVcqmFot8R%2BvVVV%2BhLnCR%2FDX3TDJ5pr976Vh%2FPiVsM%2FoXhzCnAUMmgFwKvg9b9hD%2B2oFD7BUGZZBf7mXwpmKLNgLz9ECH15322d6jN4vJkiTECv%2BRtNiAMrEQa9kfcKhsBpFcbGavCncM1m6UkJc78N1XDqMLoRHnpoOi5JgkXusFNqM1cVDoWsSevPF8WPBBuzOGa%2FGk2%2B9apFcGMrAvFn3%2F7pxqTEVwLplXrkBADyQP5V%2FBCgZ0Cwa2%2F%2FR3%2B7qDZ2Y0RXywvfD4dvh5MKGK5MMGOqUBjJh5sf18s97m2%2FPKnMBx5IOTAwwC2CbvT8jHuMLJsaD6VXKBAHcsGUHz%2BNfdG9wuTYrl7%2FLVAU5gzArDtJMmb72MEIqcIfzKmSVLPoorwFiufxl2Vyu1SAdMJ0uk0ZtQF%2FDoMrLDhAVPH%2BKfzpl1VmuNQb%2BEwDjdh5nGaYs4E8vx2hZqBedl9C8rH2KP%2BCtpq0KKbWNKYUSwxN7wDgrdaOZWK3ra&X-Amz-Signature=44522f398589e4f597a56d734e372c9b41de4ebea0aa11aceec3a696d3238cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667YJKCF5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAxS8NjQC1%2BqX%2BSAyb5wR6oU8q%2FiCkADgm7Ia6E2GhsVAiEAjSDBDj25DeAHxGBIZ%2BpUqjyRpsS0Z7ermM1tM9YNy3Aq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMJ3MAMbQR%2BSidCN7ircA0Tw%2BKZcrz8%2Bv%2BRbfGFihcScJ7WRlXWtUCk6SRYljT30zYnQbKfYAVx4S28z5ALTq6un5D6r6gP6Ys0tstVqbJKcFXH%2BYcWuBBnUS1a7D2pBH4tq9jz3MfFfgtK3bKhzWJrqVCvRFyJFpVVkhW0julq5rG3k6tZn3NrKAP%2BKYUngS8TBV9tmktT%2BKeRdTfQEDrpwBv0SFOI4hM9Q3%2B7ZoOkCPr%2BIyjjYU2Wm9ynWzN%2FwKBZ6Q8x0Js0NWJipwXHjkI3Z40C4nNmHHYXuLmbiyzpU%2FtMxMibxAVn386DKa90sSoy2sFLBOrACdeCeGOBatf9dT3PLtDliZJkN7mdbZOpGRgLoeJooSld2AynY%2BxzRVcqmFot8R%2BvVVV%2BhLnCR%2FDX3TDJ5pr976Vh%2FPiVsM%2FoXhzCnAUMmgFwKvg9b9hD%2B2oFD7BUGZZBf7mXwpmKLNgLz9ECH15322d6jN4vJkiTECv%2BRtNiAMrEQa9kfcKhsBpFcbGavCncM1m6UkJc78N1XDqMLoRHnpoOi5JgkXusFNqM1cVDoWsSevPF8WPBBuzOGa%2FGk2%2B9apFcGMrAvFn3%2F7pxqTEVwLplXrkBADyQP5V%2FBCgZ0Cwa2%2F%2FR3%2B7qDZ2Y0RXywvfD4dvh5MKGK5MMGOqUBjJh5sf18s97m2%2FPKnMBx5IOTAwwC2CbvT8jHuMLJsaD6VXKBAHcsGUHz%2BNfdG9wuTYrl7%2FLVAU5gzArDtJMmb72MEIqcIfzKmSVLPoorwFiufxl2Vyu1SAdMJ0uk0ZtQF%2FDoMrLDhAVPH%2BKfzpl1VmuNQb%2BEwDjdh5nGaYs4E8vx2hZqBedl9C8rH2KP%2BCtpq0KKbWNKYUSwxN7wDgrdaOZWK3ra&X-Amz-Signature=13e4fb3adaf2b41dddbf7b30f10b946b5f6684bc14f4d34276b750221b72a71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
