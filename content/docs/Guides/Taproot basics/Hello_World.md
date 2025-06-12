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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGWSGQL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEtsncG3dcJcPImN%2F5vCtZWgYxv9LBZPYGgptJgIr%2BSaAiEA4OLedDj%2F%2BbHiACV7S3I1uzdRgLeRrNyRwYmRJ1G7oY0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAbmRBfR2enwBcHbSrcAz1nqBZ069oWY4eCpmhy7bLiWzHOp0MRVf4%2Fgp4Rtq%2FJTOj%2FDH3htvwdkqlT2HrPybBmbQyS7ZStYZ%2Fo8KFbRABt39JgoAeQr2AUHi5g6uYtuzqIzcnMb5atCBIBdc%2FHTS%2BXrIDItpma3afqVOk2idsEbBbN7%2F3eXv9yYiNs%2FVoNCh5XFevEfzhcaWLQCr1hLoLZ71JkrpBtdfFfXMP2zpPrOXTH12zDdL2v1kZje833G7RA%2FU%2FIKxNByjETd5ED6PKnNBE5okHntNhOevDN5NrY2zIClmS3vhXcMJQJsYM7NNstMYDjk4qKig%2B1Vj4S2Qsp1XSLcRYA7GhNzC0ZTKMuLGZVZ7SnkcXW7%2BVLmT8AljTRwMdEtnTFvHJfziuOz9geObVjNJDCV9srScA76UAXEgTHNdYe%2BAIyxMXHMjIEQEEkWbn70jGMwBMaKM0F4DOsHHX3N66p2RtWrBfRjdoIDwOAfuGf8WuKhmYAaOEErF8uFElZ%2FXOTOjHtw6tAsUslTmd%2FAcRp3NucdTNphxLYMhb%2FdJ61fbehQbUivfAojwzdCy%2BzPrm6eyiJV6OdfvrbZMFe%2BgVggkg8SadcaU6%2BrBKcZGMdMloQk5%2BO86xxcVIpUd6CuQ4POzq5MPiIqsIGOqUBPblIFbOmWBE2%2Bck1IgiASOGPuev5qsSROg8uAoOggpaMZjmC2RwW8xNeQqLgAyHh7cZUCgFNP0pEw5hs%2FReCpK2R%2BWgjBLmQJPa9guWIvDNFrPbRksNSNlCrhNPlb8FxRfyVL%2BMmXER3RljQfvi9cyI5H%2BTXLuY7tyN7WKmPNQvMx6NPnAaTzrObvqKBLeFPKTMnsvx6Dny1r%2FaJPjV%2BLmCalrBV&X-Amz-Signature=dc04d751dfca490a25fdf4c8f67f00729313c5dc58425703dc11dd9f664091d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGWSGQL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEtsncG3dcJcPImN%2F5vCtZWgYxv9LBZPYGgptJgIr%2BSaAiEA4OLedDj%2F%2BbHiACV7S3I1uzdRgLeRrNyRwYmRJ1G7oY0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAbmRBfR2enwBcHbSrcAz1nqBZ069oWY4eCpmhy7bLiWzHOp0MRVf4%2Fgp4Rtq%2FJTOj%2FDH3htvwdkqlT2HrPybBmbQyS7ZStYZ%2Fo8KFbRABt39JgoAeQr2AUHi5g6uYtuzqIzcnMb5atCBIBdc%2FHTS%2BXrIDItpma3afqVOk2idsEbBbN7%2F3eXv9yYiNs%2FVoNCh5XFevEfzhcaWLQCr1hLoLZ71JkrpBtdfFfXMP2zpPrOXTH12zDdL2v1kZje833G7RA%2FU%2FIKxNByjETd5ED6PKnNBE5okHntNhOevDN5NrY2zIClmS3vhXcMJQJsYM7NNstMYDjk4qKig%2B1Vj4S2Qsp1XSLcRYA7GhNzC0ZTKMuLGZVZ7SnkcXW7%2BVLmT8AljTRwMdEtnTFvHJfziuOz9geObVjNJDCV9srScA76UAXEgTHNdYe%2BAIyxMXHMjIEQEEkWbn70jGMwBMaKM0F4DOsHHX3N66p2RtWrBfRjdoIDwOAfuGf8WuKhmYAaOEErF8uFElZ%2FXOTOjHtw6tAsUslTmd%2FAcRp3NucdTNphxLYMhb%2FdJ61fbehQbUivfAojwzdCy%2BzPrm6eyiJV6OdfvrbZMFe%2BgVggkg8SadcaU6%2BrBKcZGMdMloQk5%2BO86xxcVIpUd6CuQ4POzq5MPiIqsIGOqUBPblIFbOmWBE2%2Bck1IgiASOGPuev5qsSROg8uAoOggpaMZjmC2RwW8xNeQqLgAyHh7cZUCgFNP0pEw5hs%2FReCpK2R%2BWgjBLmQJPa9guWIvDNFrPbRksNSNlCrhNPlb8FxRfyVL%2BMmXER3RljQfvi9cyI5H%2BTXLuY7tyN7WKmPNQvMx6NPnAaTzrObvqKBLeFPKTMnsvx6Dny1r%2FaJPjV%2BLmCalrBV&X-Amz-Signature=50c4c6b68ae65a9e5cec0cc093dd693c2f268b3ac6ae7d4457b1ebf718c76679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
