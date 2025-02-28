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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDIJ6SZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDqc6gqlLBiFT7%2BnYZKRCNNmY4vbQ%2B7AYJbUOX4HXkAJQIhAPfQ3skrKh5O6pT%2FLeMCIw0nIJbCiFefhmPxZF%2Fkp5K7KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe3jBsD1dlVL81G1Iq3AM3hTykdqHfpzzv9mOsnCiY3TRwK5E4t1VYheonyJrF4ax74BHC%2BTCeMvuiQk1E%2BBB%2Bfueb1sq1HNgta1zgtVNMxqJ2xXC4qiGlu4h66%2FHRQ6bp8etPMqMo6B7kkwW%2BScRXSMHr2NXdY4%2Bgyc4RCGHACjpifrI5bWi7MQaDgD09G%2BbuZtpup%2BD%2B3b1y3MTWbpTSTRpjCgF1QiVAPdElEwGHepv%2BviGZ4SaSUfm%2FhdueJt5Wcg7gfWFHt1UqMhujz8CnkeWBAHplV3DrXzSvD%2BETWBC68EvCIrgGsGqizHLwoaloKCt8AA1b59iFHKmbQbTKVFR3fEzFvxVgT3yqK6sQloz8nNsPAFUUvgungY1ZmIKZTffxpZABjTGwtCEXnS9vF6mlQR%2Fr%2BUJN3DoB0Hth6VWj5xKNfYlYW3wgtO80efwe9uTEVKHy79FTB8ze6Wt%2FOv9lhGkXzml46Oj9haD1oKi012hZajkSKQW4mXrA%2FmUBQuzM6PYpIt6%2BtpTYCt0kNgRTuSOrVmPL1b4kfG2KDGZwDf%2F6L7mZqSAwli2Kp5zFv0JGGQMdvUIhWOux7my5hOoyUby21QB7zfKAfOhODCKLjV98wRU26rvcYDk280mBR7VP3Uju%2BgVpYzCT84S%2BBjqkASdFxUUCEMsZJyqvprsRrA%2BboW5DNjaKNjKmsilQYv8JBSKopI3d9ZSUCHJ5K4e0sbV0vv2j6M5iAHh16nhZ%2FPJxxOvFg%2FFbomxQAXFNq%2Ft1Lk%2BVVU0ejx%2Fq1Hp8kNUs164nvvLmuC0vhydJDD0tdCV%2B41SwaypBHX70v2F84QDuwWauAPBy9EasVTmvKeyFD4i9dhyCWLbq8JvIyvu%2BzhD5tL8D&X-Amz-Signature=46488230cbba83c7d520173c9889b1926e7a769423e5efb4db57ffde1bab15a1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJDIJ6SZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDqc6gqlLBiFT7%2BnYZKRCNNmY4vbQ%2B7AYJbUOX4HXkAJQIhAPfQ3skrKh5O6pT%2FLeMCIw0nIJbCiFefhmPxZF%2Fkp5K7KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe3jBsD1dlVL81G1Iq3AM3hTykdqHfpzzv9mOsnCiY3TRwK5E4t1VYheonyJrF4ax74BHC%2BTCeMvuiQk1E%2BBB%2Bfueb1sq1HNgta1zgtVNMxqJ2xXC4qiGlu4h66%2FHRQ6bp8etPMqMo6B7kkwW%2BScRXSMHr2NXdY4%2Bgyc4RCGHACjpifrI5bWi7MQaDgD09G%2BbuZtpup%2BD%2B3b1y3MTWbpTSTRpjCgF1QiVAPdElEwGHepv%2BviGZ4SaSUfm%2FhdueJt5Wcg7gfWFHt1UqMhujz8CnkeWBAHplV3DrXzSvD%2BETWBC68EvCIrgGsGqizHLwoaloKCt8AA1b59iFHKmbQbTKVFR3fEzFvxVgT3yqK6sQloz8nNsPAFUUvgungY1ZmIKZTffxpZABjTGwtCEXnS9vF6mlQR%2Fr%2BUJN3DoB0Hth6VWj5xKNfYlYW3wgtO80efwe9uTEVKHy79FTB8ze6Wt%2FOv9lhGkXzml46Oj9haD1oKi012hZajkSKQW4mXrA%2FmUBQuzM6PYpIt6%2BtpTYCt0kNgRTuSOrVmPL1b4kfG2KDGZwDf%2F6L7mZqSAwli2Kp5zFv0JGGQMdvUIhWOux7my5hOoyUby21QB7zfKAfOhODCKLjV98wRU26rvcYDk280mBR7VP3Uju%2BgVpYzCT84S%2BBjqkASdFxUUCEMsZJyqvprsRrA%2BboW5DNjaKNjKmsilQYv8JBSKopI3d9ZSUCHJ5K4e0sbV0vv2j6M5iAHh16nhZ%2FPJxxOvFg%2FFbomxQAXFNq%2Ft1Lk%2BVVU0ejx%2Fq1Hp8kNUs164nvvLmuC0vhydJDD0tdCV%2B41SwaypBHX70v2F84QDuwWauAPBy9EasVTmvKeyFD4i9dhyCWLbq8JvIyvu%2BzhD5tL8D&X-Amz-Signature=b88ab27c4c289f282ad93be70dbc71bacfab54c1e388cddb2bd309adb1bc7873&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
