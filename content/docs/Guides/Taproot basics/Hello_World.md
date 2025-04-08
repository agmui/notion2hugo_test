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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7NADKC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKlHa7mxPHoCew2id3KC7Xv%2BCtkPEegY1w8LOP1aRQ3AiAyxSWQdbXmcLtDaJgzNz5qXrXPlnDWsN1f%2FubH1ud%2Foyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMv9YidrMtrFsg4YwBKtwDJCdupKl5mYUhLR3x35ihxmLM%2B9v8G1tUjnlTfiLCDBNn6S1OYxD%2B28KBdwOTX%2FtROZ%2FpJc3y5XIjAcXeDM0ZhYnrQe9jV6sMPkAHTI9lRhtE6U18%2F6KjgO5utBZGtQcaEIEgNvcRPmhFMUTlNx%2FfqU9wu%2FR2uaus3gk5GgGpJEPzaytayrQ99i1w7CwdmlcRUVP6%2B48hq9PY%2BCTmlLfb2XUe4YdMyoGaS8FY%2BhHHx6LH4nsrx2YJ9hzBBMMAJI10kSH7b78Aj4TR%2FD1fO%2BQ%2F0mPEmbfN4B8w%2FnAaizrKGECdNfxzJB3FxfQFdr9eIu%2B3vZhapJTl6BqJ8WWaJLgH8UeN6YlcbY4gL%2BKh7r6uBltZ6aNYy%2Fn7Z46dMUbK7lIjnZt46j1yVWLAhmBTwScpleJyjLTxzsZhIeYGs97bhEPxXu%2F8hsIlIRrsp%2B7D0RQQ2Y88ezNbugtLPR9xeoxp9v8oOaHmP5P1efenRuzu3nmLe8ppVjSCt10Q0ObmYNXIjdb7UKg7mGRTEqZTq7RgCbeu%2BV5jvgnWW0U%2FAf1NWG1TZ9M7rT0Q3AZT4lO49jeKscybhIdMcobPJdlnwXmZJDo4BvMOaM4X2GB2Pi%2Fpu3kwGetmkixcqqf0T4swgaXUvwY6pgFUdL84VTrUS9EpqAy7U69xjkAnwS5KH%2BNM09vy4uvcbbBahN%2BRP%2Ft5SIF20vb26gD1zl4wKuW4Zju%2BpWkVrAnIanIkKGwrffSPvcLS3wcp5aF7KQcCbd4n2k3FmQeByd16xH7EkwJpjiFrkaqImxnYTdyDgRoFk3mC31nC8axMg7ipk066EqSOaEd7O6ZHSMZBnz4k7LmL9bGQqdmxB9Ad6wThf9xi&X-Amz-Signature=b51c110f6486a62ce523345d7926143e61313e532cd0134b52a79f4ef3269f98&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7NADKC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKlHa7mxPHoCew2id3KC7Xv%2BCtkPEegY1w8LOP1aRQ3AiAyxSWQdbXmcLtDaJgzNz5qXrXPlnDWsN1f%2FubH1ud%2Foyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMv9YidrMtrFsg4YwBKtwDJCdupKl5mYUhLR3x35ihxmLM%2B9v8G1tUjnlTfiLCDBNn6S1OYxD%2B28KBdwOTX%2FtROZ%2FpJc3y5XIjAcXeDM0ZhYnrQe9jV6sMPkAHTI9lRhtE6U18%2F6KjgO5utBZGtQcaEIEgNvcRPmhFMUTlNx%2FfqU9wu%2FR2uaus3gk5GgGpJEPzaytayrQ99i1w7CwdmlcRUVP6%2B48hq9PY%2BCTmlLfb2XUe4YdMyoGaS8FY%2BhHHx6LH4nsrx2YJ9hzBBMMAJI10kSH7b78Aj4TR%2FD1fO%2BQ%2F0mPEmbfN4B8w%2FnAaizrKGECdNfxzJB3FxfQFdr9eIu%2B3vZhapJTl6BqJ8WWaJLgH8UeN6YlcbY4gL%2BKh7r6uBltZ6aNYy%2Fn7Z46dMUbK7lIjnZt46j1yVWLAhmBTwScpleJyjLTxzsZhIeYGs97bhEPxXu%2F8hsIlIRrsp%2B7D0RQQ2Y88ezNbugtLPR9xeoxp9v8oOaHmP5P1efenRuzu3nmLe8ppVjSCt10Q0ObmYNXIjdb7UKg7mGRTEqZTq7RgCbeu%2BV5jvgnWW0U%2FAf1NWG1TZ9M7rT0Q3AZT4lO49jeKscybhIdMcobPJdlnwXmZJDo4BvMOaM4X2GB2Pi%2Fpu3kwGetmkixcqqf0T4swgaXUvwY6pgFUdL84VTrUS9EpqAy7U69xjkAnwS5KH%2BNM09vy4uvcbbBahN%2BRP%2Ft5SIF20vb26gD1zl4wKuW4Zju%2BpWkVrAnIanIkKGwrffSPvcLS3wcp5aF7KQcCbd4n2k3FmQeByd16xH7EkwJpjiFrkaqImxnYTdyDgRoFk3mC31nC8axMg7ipk066EqSOaEd7O6ZHSMZBnz4k7LmL9bGQqdmxB9Ad6wThf9xi&X-Amz-Signature=8a491443562d7125232edc5c846584a31ab7cb80c7602c00e70ab2aba08a2c40&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
