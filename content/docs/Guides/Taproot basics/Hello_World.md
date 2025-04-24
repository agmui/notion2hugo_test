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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHCZCDOI%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDi6ACYVudvwf0ZXiWvv3Pbe7vuPTdIwb%2Bd55tmTFMVhAiBDAedSBRB6wdSeGhjxtAVrKwaRrrZwDkQdLxy657AglSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1dP5V41h6trQIfcWKtwDskEyL8DH%2FNb3OxTxVMlVEsRPhR%2BEWMfqnsxwJUH6XHL6qMgv3MF2vWhCZx2FbngyCevEpbFSN4c8MK8ETb2aqBKYuZfm2WYqCx2WXBHL5WB2i%2FbMps398xi3oC%2FNg9Q2eLnqlfx1BWYryBE9vwIGz2iK6shJoffF9bcFmo%2BzIZsTw7YcUBiwjpqsA8z8xO6foZ2y%2FAV2Z9WEXB6TsPHiNdWHRNA6sfdBbAoNmxgu3lFzNw8zonBIcS%2B89bHZDhMuSb6jp8ZCyF6PG2IZ%2FW5MZMiLGjcfHke5FzkukFYlofyQJWqNP7tQvcFY%2BGFUxVKwxfStdn9o4aAGxMLWL5p0qGhyY4l%2BciImiAcsAvQ7dsqq1szCXbcReFIGyoheyoV4gfnQmNz%2FuMzUHzSf1JSoVqka0mFAyLQ9s0hbnwomJUwvbAJG%2BhshAspTaeVspZmgpTGkBViWzAn0XM56hXZvVwvKbVdBK%2FlvfBqxqpRGFWblDVAiQUnofUgH%2BuewTlcFqwECjMuigyHN7wREm2hg28nQYccwZ0cx6h9vMtkknxACgcxMp5F3dwQ73nVy3IQti2bdpIhYMRsdU4JGr0MgtVuQmIzPZXw9eCy0imGR4KbQpggag5rBk6OKu%2FQw%2BoCnwAY6pgFO5equ%2BAMxsOiQvPX0rDSQWmbgqd4WnSYm0Q8KR74Z97iI2BVIyUjBECWFqzus2GUdFg2PPJn9e1zEnBT%2BkexyrqDL5E8UNJhCi%2FdlFWZcsqSr%2FA5M%2BoXDia6eqFWNyzIEmx9EIsB5Y154SgaBx7dgKdGvpTTv0rNXBoqMmVcs%2FEOtP6Mt0PSPpPqN%2BCBQO2VCGgFL2uCdHGckAng2S%2FrtLCipzI6b&X-Amz-Signature=bdb2ec478153e86e44322086e32e606d008e2e4c0164af3677218b9df5927cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHCZCDOI%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDi6ACYVudvwf0ZXiWvv3Pbe7vuPTdIwb%2Bd55tmTFMVhAiBDAedSBRB6wdSeGhjxtAVrKwaRrrZwDkQdLxy657AglSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1dP5V41h6trQIfcWKtwDskEyL8DH%2FNb3OxTxVMlVEsRPhR%2BEWMfqnsxwJUH6XHL6qMgv3MF2vWhCZx2FbngyCevEpbFSN4c8MK8ETb2aqBKYuZfm2WYqCx2WXBHL5WB2i%2FbMps398xi3oC%2FNg9Q2eLnqlfx1BWYryBE9vwIGz2iK6shJoffF9bcFmo%2BzIZsTw7YcUBiwjpqsA8z8xO6foZ2y%2FAV2Z9WEXB6TsPHiNdWHRNA6sfdBbAoNmxgu3lFzNw8zonBIcS%2B89bHZDhMuSb6jp8ZCyF6PG2IZ%2FW5MZMiLGjcfHke5FzkukFYlofyQJWqNP7tQvcFY%2BGFUxVKwxfStdn9o4aAGxMLWL5p0qGhyY4l%2BciImiAcsAvQ7dsqq1szCXbcReFIGyoheyoV4gfnQmNz%2FuMzUHzSf1JSoVqka0mFAyLQ9s0hbnwomJUwvbAJG%2BhshAspTaeVspZmgpTGkBViWzAn0XM56hXZvVwvKbVdBK%2FlvfBqxqpRGFWblDVAiQUnofUgH%2BuewTlcFqwECjMuigyHN7wREm2hg28nQYccwZ0cx6h9vMtkknxACgcxMp5F3dwQ73nVy3IQti2bdpIhYMRsdU4JGr0MgtVuQmIzPZXw9eCy0imGR4KbQpggag5rBk6OKu%2FQw%2BoCnwAY6pgFO5equ%2BAMxsOiQvPX0rDSQWmbgqd4WnSYm0Q8KR74Z97iI2BVIyUjBECWFqzus2GUdFg2PPJn9e1zEnBT%2BkexyrqDL5E8UNJhCi%2FdlFWZcsqSr%2FA5M%2BoXDia6eqFWNyzIEmx9EIsB5Y154SgaBx7dgKdGvpTTv0rNXBoqMmVcs%2FEOtP6Mt0PSPpPqN%2BCBQO2VCGgFL2uCdHGckAng2S%2FrtLCipzI6b&X-Amz-Signature=f5998e5bb8f6acac9f9cfc83bfdfc57907abe74170e56a6dcde2ecd7da95f1df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
