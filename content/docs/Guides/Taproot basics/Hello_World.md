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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TIJUEVA%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOinFcGPpCEVXG9oGXHUYHWVHx5c8spgMkCeyde5nlaAiASPyT7BZN8jRp%2BrPmxXrQqk8zBDbiu1R4QARAIzM38gyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfD8jmRuIvedHyoAKtwDh%2B%2BaSXq4E1vt9clulAn6TILZm6r7UgICWprpGe5TXTvl%2Ft%2BikZrCIKWzW%2BFccvbyh3xxrDcXryMU2sQSqWdY9BISDjkkOC1BWA%2BRO9ZAx8Oe5zg4J%2BJxUDRNUPdpckgW4O2zKfQq2aHlqn4%2F4pzMN0RWtTYZcr72S%2Blbt%2Fo14VdR%2FGQenKsrWr4UCbfn1u%2FOv9kMHTvS7ZI%2Br1rBxYdMmVWzhB%2ByFtrDiXII9yuFAvr5cgd8262wNtv5VC36Ah4YvkKxEXeSZZVD%2BlxwnavzCDjKx555%2FLtRbv9WOqh3QiVT%2FNKURLhpr9AhtbT6PJxK3LVCz8EqnhItsaCYhJEQeIt1oNjHRE3ByafjfdgPD%2F2Vhd%2FtFKQRPtx8Z1AbGIwfWBheiD0wPeFgMHz2LoNr86ZabLzLonLBBaOT0l3RrECI5y1F0xB0%2BVdF5U6qRQ19IjpKOh3oWyrL5ut8r%2FyO1H82iY3FLXNGjrKGhaGW3RqUNmg8H5HKYGmAxxcD2Lm3vnKTg2Y6YQyXOAkGou1Jx6o16pye7%2B9a7a3sWVZsSNAfBrjxOq9%2FdoSTPg3Zz%2FCiJ7CscJlSM2az6%2F%2BV2gU6je5XNKywnJrY3PCHvfaI1Qn9sAPisA%2Bfjas4wLUwiILwywY6pgGfzFnCXxLy7HYmh50XAP0Pttrp0Vf1XzbLsAgrQMWOPu15Wrvq2%2F2pe4SfBUQJ5%2FQ0I667t7zNi0XltyAR1jiwGtQj%2B%2BxOUAGUUzjJWWTMAWtgMI4ejYmMRc%2Fx9ppwVa0gwQUTnFewQeDY%2FHkueyXP86fdtzR1YM2gWVcziXh96aadb35AteixmwapzurEsokl6Es0ddg8bBZf3u0y2l2twkJ4CoCw&X-Amz-Signature=ae09969fb3db353148dad19b3889ad6cbc3d2f6e9be8ed23405f638df0192864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TIJUEVA%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOinFcGPpCEVXG9oGXHUYHWVHx5c8spgMkCeyde5nlaAiASPyT7BZN8jRp%2BrPmxXrQqk8zBDbiu1R4QARAIzM38gyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfD8jmRuIvedHyoAKtwDh%2B%2BaSXq4E1vt9clulAn6TILZm6r7UgICWprpGe5TXTvl%2Ft%2BikZrCIKWzW%2BFccvbyh3xxrDcXryMU2sQSqWdY9BISDjkkOC1BWA%2BRO9ZAx8Oe5zg4J%2BJxUDRNUPdpckgW4O2zKfQq2aHlqn4%2F4pzMN0RWtTYZcr72S%2Blbt%2Fo14VdR%2FGQenKsrWr4UCbfn1u%2FOv9kMHTvS7ZI%2Br1rBxYdMmVWzhB%2ByFtrDiXII9yuFAvr5cgd8262wNtv5VC36Ah4YvkKxEXeSZZVD%2BlxwnavzCDjKx555%2FLtRbv9WOqh3QiVT%2FNKURLhpr9AhtbT6PJxK3LVCz8EqnhItsaCYhJEQeIt1oNjHRE3ByafjfdgPD%2F2Vhd%2FtFKQRPtx8Z1AbGIwfWBheiD0wPeFgMHz2LoNr86ZabLzLonLBBaOT0l3RrECI5y1F0xB0%2BVdF5U6qRQ19IjpKOh3oWyrL5ut8r%2FyO1H82iY3FLXNGjrKGhaGW3RqUNmg8H5HKYGmAxxcD2Lm3vnKTg2Y6YQyXOAkGou1Jx6o16pye7%2B9a7a3sWVZsSNAfBrjxOq9%2FdoSTPg3Zz%2FCiJ7CscJlSM2az6%2F%2BV2gU6je5XNKywnJrY3PCHvfaI1Qn9sAPisA%2Bfjas4wLUwiILwywY6pgGfzFnCXxLy7HYmh50XAP0Pttrp0Vf1XzbLsAgrQMWOPu15Wrvq2%2F2pe4SfBUQJ5%2FQ0I667t7zNi0XltyAR1jiwGtQj%2B%2BxOUAGUUzjJWWTMAWtgMI4ejYmMRc%2Fx9ppwVa0gwQUTnFewQeDY%2FHkueyXP86fdtzR1YM2gWVcziXh96aadb35AteixmwapzurEsokl6Es0ddg8bBZf3u0y2l2twkJ4CoCw&X-Amz-Signature=15bb6a9fe8adf2afbdeabe617bf29238a8da58c4c0c85266b6eed251e32b6a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
