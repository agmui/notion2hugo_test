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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAW3J77%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDnezMF84a2R8lTtCF2ywvtAOHcK3N7x9zJkhLu2DEvIQIhANlRq765PC24dy7rlGyr8zqLGr%2F9njekPNIN4lE3GrvSKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5un3TNfQ7UUMGLL8q3ANs7owZhPHAkR%2BTtAGOVHLfOWACD4H7veRf97A%2FB6HVrulztEz3wMxw%2FpwLlWbvUs7LFGy4wFAnjZufgz9Y09lMB4J6uBHO91G%2B2NOOTKOVE37RhtSeKTmbMPtsPZA646uTdkxK5ocjPuzYF53ivO9X7A3ZXdus1cBrhxG9MsvNb%2FEW%2FYiDNwjkK2zZnqzVqVDSQCCNVtUcQaNpIni%2F3dXuNfh8ax99c3%2FzOAtNYtEMXC6UVPfjaseC6GTlD8UAeToSZIIadMVdX6aiTayfkZZi%2FaPHypCosfIhh%2B36Vs8gFajZapb%2FYys72pnhmGUevjBlG7LnAHaEn%2FcD6NmPtekVqun5hNc3eSIDp1EAXJhYdVX8SXECHdapDg%2Fep7ssF82y7zWa7QOof1GLEWUHvYJu2XrM2Oiuu0PVbJXl%2BtTO49oUAH3FFwFsyAI2%2BCzbyp%2FtMqYwDfnXq0GuOyFcOK4Yf1bPgdYQz9pubvsTQZ9lZA67P68WYUau552jLUJ1ncin8bCVfzIHP9PXF%2F8Kxl704xVRfyl%2BvS3%2FvRqBpGr3eVgj7qXYwUfvfnOsixfdoMUhOVPQExE2hY36VfS6SCOt5NblbxMr4coOI4YeMZeMgqkazZmFnbOyOC3NJjDc64XBBjqkAbbgDXI2DR7%2F9pPXQPt6E1xByUSKvy07%2Bs45xEhOYdQ5sDoXqvrpN0LIDfvrmmmR5DyHWlsBX7L1kGvkJMovYuwZJpkyy7LIHGMBBeSjqwT695wAMyAcUVriBRncrvkt0UX%2BN3hDOrp4YPgKjpj4WVhZCHumC%2FLb82rIP9QyAH%2FAfgdKOXpC7xwmUbTTEfSdnnjrls7RCPLXIn9oUM265%2FREP8sW&X-Amz-Signature=0b554e3f2975b8e5d2acfc6846ab840f74b34daeae4c657364951d2426cfd8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAW3J77%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDnezMF84a2R8lTtCF2ywvtAOHcK3N7x9zJkhLu2DEvIQIhANlRq765PC24dy7rlGyr8zqLGr%2F9njekPNIN4lE3GrvSKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5un3TNfQ7UUMGLL8q3ANs7owZhPHAkR%2BTtAGOVHLfOWACD4H7veRf97A%2FB6HVrulztEz3wMxw%2FpwLlWbvUs7LFGy4wFAnjZufgz9Y09lMB4J6uBHO91G%2B2NOOTKOVE37RhtSeKTmbMPtsPZA646uTdkxK5ocjPuzYF53ivO9X7A3ZXdus1cBrhxG9MsvNb%2FEW%2FYiDNwjkK2zZnqzVqVDSQCCNVtUcQaNpIni%2F3dXuNfh8ax99c3%2FzOAtNYtEMXC6UVPfjaseC6GTlD8UAeToSZIIadMVdX6aiTayfkZZi%2FaPHypCosfIhh%2B36Vs8gFajZapb%2FYys72pnhmGUevjBlG7LnAHaEn%2FcD6NmPtekVqun5hNc3eSIDp1EAXJhYdVX8SXECHdapDg%2Fep7ssF82y7zWa7QOof1GLEWUHvYJu2XrM2Oiuu0PVbJXl%2BtTO49oUAH3FFwFsyAI2%2BCzbyp%2FtMqYwDfnXq0GuOyFcOK4Yf1bPgdYQz9pubvsTQZ9lZA67P68WYUau552jLUJ1ncin8bCVfzIHP9PXF%2F8Kxl704xVRfyl%2BvS3%2FvRqBpGr3eVgj7qXYwUfvfnOsixfdoMUhOVPQExE2hY36VfS6SCOt5NblbxMr4coOI4YeMZeMgqkazZmFnbOyOC3NJjDc64XBBjqkAbbgDXI2DR7%2F9pPXQPt6E1xByUSKvy07%2Bs45xEhOYdQ5sDoXqvrpN0LIDfvrmmmR5DyHWlsBX7L1kGvkJMovYuwZJpkyy7LIHGMBBeSjqwT695wAMyAcUVriBRncrvkt0UX%2BN3hDOrp4YPgKjpj4WVhZCHumC%2FLb82rIP9QyAH%2FAfgdKOXpC7xwmUbTTEfSdnnjrls7RCPLXIn9oUM265%2FREP8sW&X-Amz-Signature=657289142e95155cc4d2ee7d2ad49b1e6b964e52eca525243ab0fb3347e1d1ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
