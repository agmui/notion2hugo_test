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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDNJA5RQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb38kDADMROD8RRUt7NQzMizDaO8deqBMbJyxIImekvQIhAMDhcJ1%2FW%2F6u1fenIL92c6LkJ83cXEwmxTcHRjNtuD0uKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGmK3%2FdpRm0E7caJsq3AO5mEyOZh8z951V3HdjrquoLzsc7CObrqgjLWV8fpNz7XDRmsOTVxjDzh5Di%2BQGCdS9jo95xtfW%2F94or7KIEKR9k6XJyrgD2G42jVE12KMlUgCqXJfsvQqOt2TH4%2FTGiaUJ18Cn6D%2BxrP3jTwjtj8j%2FLl0T3Mi3tQYy9WmxC%2FjIqkGlbTcLq4zROY7%2BtTeFW45JQPSXjTd2VKs%2FQRipi1ZRK%2BLKveAykVNJ7a%2BoYynlcq2kvlO2ZHOpqEn%2FRW2%2BMdBUmHYUbNyVuGexyJ%2B3okCyjxqDRXdWbheFEYZMGVdjv31JuUYNDqOmrhiAPIt5N42Mr22WLFACD1WxXc7LFdjjLEPbR1fljPIsmwbII%2BuRUFIlnOLsi29bwrC5jjDI7%2BIWMBa4O4CGOnnVsgB7ujAHTgAynPK%2BpaPGJDE8y%2Fks918u44FkBCh%2FJpB8Rl4T0tAR8EjtRSoB%2F9jqDNWPwzty%2BdTJMsRz2CdyBVGpSaYTVcp48Qr8K6ZlppqpPypK5OXPiJl95yQdnhvhvW%2BtkBihipCW2jl5kGWm2oojAf%2B61n6mqNUwD51aUh%2BOSDPo5X3xwwkOGsEeWEMChLcSer%2FVvMV9ol6OBIWmpDLPNszPyl4niQ73nI7cd9dPAjCE4q3BBjqkAQ1WK7JHIdqKIJaDpoUWWnIgRfWc1xksDsUaHCSE9I2eGxLHUUdte21qWJQiKMbtHs7PxU7dyFncj3SmHCur6fFpE78jAQlD2j%2F%2ByWzDCUfM7qiAe3Q2Ehiv5%2FforsGFe8GytmwEmGu9wBBF3jM7TGUFlXq8CT3FU%2BtTy%2BsDAHB%2Bf8071vajUf801hUYKWjwDQYW2Q3uOwrf2eHsPozI4QcRIFY8&X-Amz-Signature=eeb8a0446e8490adfb45262b7cc0c3dbf225cf9919b85530be6679d5a8c57275&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDNJA5RQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb38kDADMROD8RRUt7NQzMizDaO8deqBMbJyxIImekvQIhAMDhcJ1%2FW%2F6u1fenIL92c6LkJ83cXEwmxTcHRjNtuD0uKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGmK3%2FdpRm0E7caJsq3AO5mEyOZh8z951V3HdjrquoLzsc7CObrqgjLWV8fpNz7XDRmsOTVxjDzh5Di%2BQGCdS9jo95xtfW%2F94or7KIEKR9k6XJyrgD2G42jVE12KMlUgCqXJfsvQqOt2TH4%2FTGiaUJ18Cn6D%2BxrP3jTwjtj8j%2FLl0T3Mi3tQYy9WmxC%2FjIqkGlbTcLq4zROY7%2BtTeFW45JQPSXjTd2VKs%2FQRipi1ZRK%2BLKveAykVNJ7a%2BoYynlcq2kvlO2ZHOpqEn%2FRW2%2BMdBUmHYUbNyVuGexyJ%2B3okCyjxqDRXdWbheFEYZMGVdjv31JuUYNDqOmrhiAPIt5N42Mr22WLFACD1WxXc7LFdjjLEPbR1fljPIsmwbII%2BuRUFIlnOLsi29bwrC5jjDI7%2BIWMBa4O4CGOnnVsgB7ujAHTgAynPK%2BpaPGJDE8y%2Fks918u44FkBCh%2FJpB8Rl4T0tAR8EjtRSoB%2F9jqDNWPwzty%2BdTJMsRz2CdyBVGpSaYTVcp48Qr8K6ZlppqpPypK5OXPiJl95yQdnhvhvW%2BtkBihipCW2jl5kGWm2oojAf%2B61n6mqNUwD51aUh%2BOSDPo5X3xwwkOGsEeWEMChLcSer%2FVvMV9ol6OBIWmpDLPNszPyl4niQ73nI7cd9dPAjCE4q3BBjqkAQ1WK7JHIdqKIJaDpoUWWnIgRfWc1xksDsUaHCSE9I2eGxLHUUdte21qWJQiKMbtHs7PxU7dyFncj3SmHCur6fFpE78jAQlD2j%2F%2ByWzDCUfM7qiAe3Q2Ehiv5%2FforsGFe8GytmwEmGu9wBBF3jM7TGUFlXq8CT3FU%2BtTy%2BsDAHB%2Bf8071vajUf801hUYKWjwDQYW2Q3uOwrf2eHsPozI4QcRIFY8&X-Amz-Signature=674506f3923a2a1db5c8284ef29494435fb013969312ac5ba9972fbee5c6fcc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
