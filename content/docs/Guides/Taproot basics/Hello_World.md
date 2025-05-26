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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GQLKIO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjvfODHMx0cgQx0VMH%2FEHVfn1sjkrQVf3Idzxy7Gb1zAiBOsE%2BQxdyHonCcxZ5nPDyccZqSmSXGc8l4y9Hs%2FlQYUyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMYkOZWerQsP3qunEhKtwDbFBvZte%2FsWnH%2FJ25kVZQK6o8QAk%2BJ65sytXUQSyfGTQZFP%2Fns0Bs50rzOAnxdrpiLr3tPdu41c1OI11w5CNT9db7hC%2B7X0b6bDpwl%2BHS3dOVeO%2BkGVPlcWcvhLaIEyaACvnnPyghGTXjkECmT741UdC%2FP4afOIlBek%2FVOzwExmo6YJxPNHskNqf%2BM8ch73E2dF66dc%2B%2F5UeiuBEfjtr5%2BeRzP9EGt0oMQgRk9l4fareB6xKwghZs6HTW%2F3SPgLXOPqUxUmi5KX06PIK4kX6PRHITIe6KNAFQj%2FcWdWWOpJ5iB7hi5WPzODqETdt6qRHchaObvsdEA2k%2FGyZlhcuciUtjOmzoI2cZFXrN6IaPpaIcOW3hEHyE01GemmHvNlq4XV2pJ%2B6eYXkyz1o4ymYziYSX1AGcupuPIq8Pwl0iMJnl6yLXn%2BHqPPzraKykndHF3nFZZYWQVYaGgTiHb8jE2j38GqAvsJStIROCmDNFIYe3AEQL08BhtuekxIIYvrfF3%2BHuRFeDtmNqdJGY3DjOHFFcVKPVOTnKJZKy6pmjP%2Bxtmm6B0IQg8B1jsDqujkEd18NvKH3K7IuN0Z9aR%2Btylfe7aHfmvuCxS83P%2F9XIT7lTBvWDoIO36fsiOQYwltDSwQY6pgFCR0OS1g6%2FBEa6Cxwf2887h2YCUUQUQmgf01rc5HCLnqsHV4do2p5Xay1N2pQD%2BgSHjl1FiBjMT2JLWPmLAggRmecdYNWszlqR0eSmZwmQOwuwo1lZSvcOATepf5IRIJtx49%2B0ap78fAAdS4TSLn4ezS%2BwK4T5HdpdcWiHgP3iDkvlMfN6m%2BxryQiJcote3k1jP7a%2BeQsqFDAKY3iOev0H8L6rE%2FfU&X-Amz-Signature=b1babe0ff6b18ed1cc5d797b72cc8eb4392d4b96e4c6e9091fb9ef1b60b8341f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6GQLKIO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjvfODHMx0cgQx0VMH%2FEHVfn1sjkrQVf3Idzxy7Gb1zAiBOsE%2BQxdyHonCcxZ5nPDyccZqSmSXGc8l4y9Hs%2FlQYUyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMYkOZWerQsP3qunEhKtwDbFBvZte%2FsWnH%2FJ25kVZQK6o8QAk%2BJ65sytXUQSyfGTQZFP%2Fns0Bs50rzOAnxdrpiLr3tPdu41c1OI11w5CNT9db7hC%2B7X0b6bDpwl%2BHS3dOVeO%2BkGVPlcWcvhLaIEyaACvnnPyghGTXjkECmT741UdC%2FP4afOIlBek%2FVOzwExmo6YJxPNHskNqf%2BM8ch73E2dF66dc%2B%2F5UeiuBEfjtr5%2BeRzP9EGt0oMQgRk9l4fareB6xKwghZs6HTW%2F3SPgLXOPqUxUmi5KX06PIK4kX6PRHITIe6KNAFQj%2FcWdWWOpJ5iB7hi5WPzODqETdt6qRHchaObvsdEA2k%2FGyZlhcuciUtjOmzoI2cZFXrN6IaPpaIcOW3hEHyE01GemmHvNlq4XV2pJ%2B6eYXkyz1o4ymYziYSX1AGcupuPIq8Pwl0iMJnl6yLXn%2BHqPPzraKykndHF3nFZZYWQVYaGgTiHb8jE2j38GqAvsJStIROCmDNFIYe3AEQL08BhtuekxIIYvrfF3%2BHuRFeDtmNqdJGY3DjOHFFcVKPVOTnKJZKy6pmjP%2Bxtmm6B0IQg8B1jsDqujkEd18NvKH3K7IuN0Z9aR%2Btylfe7aHfmvuCxS83P%2F9XIT7lTBvWDoIO36fsiOQYwltDSwQY6pgFCR0OS1g6%2FBEa6Cxwf2887h2YCUUQUQmgf01rc5HCLnqsHV4do2p5Xay1N2pQD%2BgSHjl1FiBjMT2JLWPmLAggRmecdYNWszlqR0eSmZwmQOwuwo1lZSvcOATepf5IRIJtx49%2B0ap78fAAdS4TSLn4ezS%2BwK4T5HdpdcWiHgP3iDkvlMfN6m%2BxryQiJcote3k1jP7a%2BeQsqFDAKY3iOev0H8L6rE%2FfU&X-Amz-Signature=19535224ea7f8c3c0a662be281f45827d7762ec7fd3bc51ea0a2225091d5482f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
