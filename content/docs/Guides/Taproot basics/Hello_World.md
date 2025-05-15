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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666KYYQ7Y%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCksg1qRLu20LwuihmKDJPYpAXICARWjPwzJKOygG3P%2BAIgHjPhM%2FLLklml%2FmgyKdCcMHvPU8AFuJwl3soPHZUCUYEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGtnOPv3f0jywrdPxircA6hzgRFJACYRqmD3Qtik%2BdPFp1QujXV4lzLq2EqU%2F6CxXwUClKBJzJvfhXwlbCFzcrA6isck1%2FSlmMKE2zqfJqR%2FvD69su29cq9yyoSOVRkdU%2BAdpj36Bg3xb5FIHcEqROHZ15LG57OxQlKhX4%2FQ3fLj7QXItcd9cI5qMXztc9%2F8ZdbVx6POw07Tjf0yivVfG8Zo9%2FK5fz9DBHAMunPuTOf5MapLA8fihSph901HnIiYOhnA4nY89sxaUmN0D6Jl9NISZnihVQSyi3kRIJfZPQqy%2BLuXbUbK4kQmr2fPn%2Bg%2FFTaJIVSSv5E6A3xCT6MDe4jGIKeC30KJZO3VA1SpiKrCbjK1Ze0Dw1629FiU07P7AMI1a759s%2B%2F%2FkUpykg0wpSU3e5o5aiKlRxa8kmz57uS6IquuQ%2B7OOHYNuUn9cUpDNbKktzMpFiRL4dThvM1t8dH4cm%2F9x93jX1aQ4FpbN9bO11MnWu8LM4Qg0shGRelqePm6r7B8AdUfvXiW%2FJNyXFxYv7NRSJMlCgUopspZHAB9dLi5UtyUzpWPoDLqTVp0bolhVcCR7ylxt%2Fr4el1Iy52LqeAusE1V2lalYnisxPjS795OX9tAS1oS%2Bne7fqlg6X%2BQD3jVyotTbuMQMLT7mMEGOqUBpkX%2BDwkyukAxNt9SLhWaRj4WxGOFhsKa3hxeb2JHvIFjI0hqUrW12Orkfc8NM4wTsUA1rUZkNIYvUbbaPgxjVpx02kNQ5VSXpNSSLIv09FeCPAKW9%2Fu1lUZ%2BwzQ5Kbk4ZY%2Fk4aReUjWsbZ9BvbB1lDfYZHehCpjdQ8Bsj%2BHmcbLesV9o%2BPdiotj65e%2F72DpCMIBarraH4eYcUfuS0GTt8fxbmR3S&X-Amz-Signature=3a90e8c5ddd884242be0a9f01724d75bcd1c5aa8713fd90f8497809e9f413eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666KYYQ7Y%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCksg1qRLu20LwuihmKDJPYpAXICARWjPwzJKOygG3P%2BAIgHjPhM%2FLLklml%2FmgyKdCcMHvPU8AFuJwl3soPHZUCUYEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGtnOPv3f0jywrdPxircA6hzgRFJACYRqmD3Qtik%2BdPFp1QujXV4lzLq2EqU%2F6CxXwUClKBJzJvfhXwlbCFzcrA6isck1%2FSlmMKE2zqfJqR%2FvD69su29cq9yyoSOVRkdU%2BAdpj36Bg3xb5FIHcEqROHZ15LG57OxQlKhX4%2FQ3fLj7QXItcd9cI5qMXztc9%2F8ZdbVx6POw07Tjf0yivVfG8Zo9%2FK5fz9DBHAMunPuTOf5MapLA8fihSph901HnIiYOhnA4nY89sxaUmN0D6Jl9NISZnihVQSyi3kRIJfZPQqy%2BLuXbUbK4kQmr2fPn%2Bg%2FFTaJIVSSv5E6A3xCT6MDe4jGIKeC30KJZO3VA1SpiKrCbjK1Ze0Dw1629FiU07P7AMI1a759s%2B%2F%2FkUpykg0wpSU3e5o5aiKlRxa8kmz57uS6IquuQ%2B7OOHYNuUn9cUpDNbKktzMpFiRL4dThvM1t8dH4cm%2F9x93jX1aQ4FpbN9bO11MnWu8LM4Qg0shGRelqePm6r7B8AdUfvXiW%2FJNyXFxYv7NRSJMlCgUopspZHAB9dLi5UtyUzpWPoDLqTVp0bolhVcCR7ylxt%2Fr4el1Iy52LqeAusE1V2lalYnisxPjS795OX9tAS1oS%2Bne7fqlg6X%2BQD3jVyotTbuMQMLT7mMEGOqUBpkX%2BDwkyukAxNt9SLhWaRj4WxGOFhsKa3hxeb2JHvIFjI0hqUrW12Orkfc8NM4wTsUA1rUZkNIYvUbbaPgxjVpx02kNQ5VSXpNSSLIv09FeCPAKW9%2Fu1lUZ%2BwzQ5Kbk4ZY%2Fk4aReUjWsbZ9BvbB1lDfYZHehCpjdQ8Bsj%2BHmcbLesV9o%2BPdiotj65e%2F72DpCMIBarraH4eYcUfuS0GTt8fxbmR3S&X-Amz-Signature=ec1ffb083ffe07c754c4d76213041ff5f6a495e14b050ebcae19df2e6e85e6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
