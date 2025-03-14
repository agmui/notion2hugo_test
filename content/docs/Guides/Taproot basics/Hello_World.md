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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBEJQUQ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNL%2FIueXrPUiAykkKztiR4zWGPaVvgfE5Rf0k0JrTxrQIhAInKO2ctU%2FdKybD7NnTHJaFp%2B%2Ba%2BCAJshkqhFHgZE9RcKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh4RZ%2BQrPp0%2BfsIw4q3ANoZLCpvbTeu9pYevvK67IelGd0o8nE6%2FeYiwEas730W3O6QeTcmWNb0IVxgOuqX6LvctERGZCDZUVgwxO3LcxAfG9qMTNkJ0pIyvmYuNkW3p4mHw7o0HrDKEXkQBtbmnyRPFqGlbRVt7j%2B7ErkKvTsHrllJIp9EQ1Fs92J2kbTuxfI5%2BqeCzlIHvLPmxdrEr9OoRBuchB0gE2weH5dYBGrzxbZZASLGOvbFofJEWIwjp2zXsK%2B4kySnQhjBpI%2B6OalKZXWCh8R%2BT7UXVOcWcA5mC9MUpGNVnjEaRSRVsSZLRoa2PQzLYuk2KpJveHThMJ0jPj6aOWwjFrnfPlP9oSP7MeF1cxiTdTxqMMHC0cvQ50wgh5OtWpj%2FHvlr39MK0okWWZ7qU15TdOI164gqFrWlZN155vyDFQlk%2FWIZXCqTApyUalqtGkDCvhfm%2FP5CzKP%2FL8e530gjdA9Zlgpj%2BvhrqUufgfgvogcDIn4gv4ALVbz9LZYmgKkmQtczOc2QrSw3m0THO1fO1wJT5g4oe%2BxB1qQMX2GQEK%2BAVTF8%2BrMgHYZ8bWPqonekoAL33GaJLUjW0yJpClPuDj%2FhEnBpDmYTQU4p8STzXTPDnPkvbQpESLY%2F3WT72RkMYOnZjCb782%2BBjqkAeVhNB%2FCwCh3FESY8RDI9yZ11Pq2rr1gyM0FdCMCYt46iTGPrz%2FgF6UO3%2F5sdKYBIkCbV4ZYPKkcSU3nC%2B5J%2FM%2BkMBv7xg9bquvS8xGCTmoFf5tmHcBohBFlLSab%2F4c2nCCX5LnWQBGLODY4o2GPlr3IEszl8T%2FSzKN3Al%2FAjjexW0aGSaQi2K29g3YwRKxtCrbST3N4AiKsHESwbTaBF5AAiFnU&X-Amz-Signature=3b7150360ea3dcbc1348e59dc177b1d60e598f2fc946b33b9c40bc10d8ded165&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBEJQUQ7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNL%2FIueXrPUiAykkKztiR4zWGPaVvgfE5Rf0k0JrTxrQIhAInKO2ctU%2FdKybD7NnTHJaFp%2B%2Ba%2BCAJshkqhFHgZE9RcKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh4RZ%2BQrPp0%2BfsIw4q3ANoZLCpvbTeu9pYevvK67IelGd0o8nE6%2FeYiwEas730W3O6QeTcmWNb0IVxgOuqX6LvctERGZCDZUVgwxO3LcxAfG9qMTNkJ0pIyvmYuNkW3p4mHw7o0HrDKEXkQBtbmnyRPFqGlbRVt7j%2B7ErkKvTsHrllJIp9EQ1Fs92J2kbTuxfI5%2BqeCzlIHvLPmxdrEr9OoRBuchB0gE2weH5dYBGrzxbZZASLGOvbFofJEWIwjp2zXsK%2B4kySnQhjBpI%2B6OalKZXWCh8R%2BT7UXVOcWcA5mC9MUpGNVnjEaRSRVsSZLRoa2PQzLYuk2KpJveHThMJ0jPj6aOWwjFrnfPlP9oSP7MeF1cxiTdTxqMMHC0cvQ50wgh5OtWpj%2FHvlr39MK0okWWZ7qU15TdOI164gqFrWlZN155vyDFQlk%2FWIZXCqTApyUalqtGkDCvhfm%2FP5CzKP%2FL8e530gjdA9Zlgpj%2BvhrqUufgfgvogcDIn4gv4ALVbz9LZYmgKkmQtczOc2QrSw3m0THO1fO1wJT5g4oe%2BxB1qQMX2GQEK%2BAVTF8%2BrMgHYZ8bWPqonekoAL33GaJLUjW0yJpClPuDj%2FhEnBpDmYTQU4p8STzXTPDnPkvbQpESLY%2F3WT72RkMYOnZjCb782%2BBjqkAeVhNB%2FCwCh3FESY8RDI9yZ11Pq2rr1gyM0FdCMCYt46iTGPrz%2FgF6UO3%2F5sdKYBIkCbV4ZYPKkcSU3nC%2B5J%2FM%2BkMBv7xg9bquvS8xGCTmoFf5tmHcBohBFlLSab%2F4c2nCCX5LnWQBGLODY4o2GPlr3IEszl8T%2FSzKN3Al%2FAjjexW0aGSaQi2K29g3YwRKxtCrbST3N4AiKsHESwbTaBF5AAiFnU&X-Amz-Signature=4323f13ec0b542d01f049045cac1c5393a277c7b0faeb4b27d8e2334e85a1652&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
