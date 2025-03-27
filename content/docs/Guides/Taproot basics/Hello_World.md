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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN55MC3B%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrBbTpPlUvCP%2BuH6Sferd0i14xYzlBXcWwhpoFn42HAIgKF1KTAqsxZpIKWamYDHMgPWgTD5%2FqmAjnDIuTxlhTW8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJnScQOWCSyL3YmSFCrcA3fBfBcXc3LkNrwCuK2ZjKZheKSTOO3OqeFUj4Y%2B9AeJnCcNZud%2FQfSJ%2Bf8aVB1W1iuMinzaBS%2FDRDan2qH9aaVL53Kfao%2BJ2upb2h0%2FcfQ10yXwp%2BSvelhHU7kS94k4Me8kb4g9O5QjM6Q2kL3dZsnOG7eMK2z7ciLNXTEQpWHHpy4zuE271vWKCMuxqYGcq9VbCw8PJxULlEaWdncSmnslVkVStkiIwUPQinlyP3%2BALeSlDGIMp%2FOJcKEbkWl%2ByOSrbKXdGN%2Fcma8VuPWeyuShIc3pq7lkctj59l1WuXnxUqlA%2F%2FzbG4YPEJ9vmN%2BvcNCNas%2FpSu6devQWufwEGL9i1XoJpvofHbzSgB4ao8m%2BRzhaA9f9GGgyho66TDamFhZC%2B1CxRULF7347ShIc94sJeCEodoOWxeHMQ1JhHxAcfFrOI182I10FeZili7Q9UcYapuUVIRobHtgamBmhiVz9YOSWOlC%2BYbk2KQ%2BIfy8wtOLP3Dc0lf9dDMBpbTUmVpabOtQ3k%2FAa0wnKMC4JNk1bxFow5lz%2F7uBzBbv8M8HVZzTuu6NzpOTqIGzBNN0VrlMqRHqb6uf8I4lvMwkrJXiUYGVlRy6%2Bqb4bj630h%2Fjafn0VtYF2ZUFr7onmMLjdlr8GOqUBBy8SO3w1FL%2BCi0EcCPTDrd%2F0zdYHVEEfK1P5Q3dYCnRe2yj04iN8gf7hdtB6GRwLllPdfMnhO7ZbjT8u7Ee6ZiMXJ43A60xjq4QxeK6wMH7al5pt%2F%2BbyPWw707K%2FnJufptoeQ%2Bq5BrTFAZdb2ypsPCRkElHxKdYgVb%2Bja9ZuAF17Zwl75xv4%2BFtjwSbKk0QWGGVkMYBVKyG5xdois%2BOejZ%2BgiOpd&X-Amz-Signature=092b24c5c04b745ae03c9393b751eda9e6fe439caf040bff8b0180af1bde21ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN55MC3B%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBrBbTpPlUvCP%2BuH6Sferd0i14xYzlBXcWwhpoFn42HAIgKF1KTAqsxZpIKWamYDHMgPWgTD5%2FqmAjnDIuTxlhTW8q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJnScQOWCSyL3YmSFCrcA3fBfBcXc3LkNrwCuK2ZjKZheKSTOO3OqeFUj4Y%2B9AeJnCcNZud%2FQfSJ%2Bf8aVB1W1iuMinzaBS%2FDRDan2qH9aaVL53Kfao%2BJ2upb2h0%2FcfQ10yXwp%2BSvelhHU7kS94k4Me8kb4g9O5QjM6Q2kL3dZsnOG7eMK2z7ciLNXTEQpWHHpy4zuE271vWKCMuxqYGcq9VbCw8PJxULlEaWdncSmnslVkVStkiIwUPQinlyP3%2BALeSlDGIMp%2FOJcKEbkWl%2ByOSrbKXdGN%2Fcma8VuPWeyuShIc3pq7lkctj59l1WuXnxUqlA%2F%2FzbG4YPEJ9vmN%2BvcNCNas%2FpSu6devQWufwEGL9i1XoJpvofHbzSgB4ao8m%2BRzhaA9f9GGgyho66TDamFhZC%2B1CxRULF7347ShIc94sJeCEodoOWxeHMQ1JhHxAcfFrOI182I10FeZili7Q9UcYapuUVIRobHtgamBmhiVz9YOSWOlC%2BYbk2KQ%2BIfy8wtOLP3Dc0lf9dDMBpbTUmVpabOtQ3k%2FAa0wnKMC4JNk1bxFow5lz%2F7uBzBbv8M8HVZzTuu6NzpOTqIGzBNN0VrlMqRHqb6uf8I4lvMwkrJXiUYGVlRy6%2Bqb4bj630h%2Fjafn0VtYF2ZUFr7onmMLjdlr8GOqUBBy8SO3w1FL%2BCi0EcCPTDrd%2F0zdYHVEEfK1P5Q3dYCnRe2yj04iN8gf7hdtB6GRwLllPdfMnhO7ZbjT8u7Ee6ZiMXJ43A60xjq4QxeK6wMH7al5pt%2F%2BbyPWw707K%2FnJufptoeQ%2Bq5BrTFAZdb2ypsPCRkElHxKdYgVb%2Bja9ZuAF17Zwl75xv4%2BFtjwSbKk0QWGGVkMYBVKyG5xdois%2BOejZ%2BgiOpd&X-Amz-Signature=cfaaeeaa159d3897679dd76fdee1eca2fa1e3f1d3d44fc6563df17e499e9981d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
