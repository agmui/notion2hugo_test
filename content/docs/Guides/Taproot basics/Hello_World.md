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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y6HAMKD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIE4LEfT%2BaoeTiAJGPk9TyqRNSvsLg7Pu6jessSDMeaxNAiEApEvGzSfDM1KnPHLaR1FrATHGp0OGitrSvP1FcYUNvbEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjSOyWqoB91GyG9cyrcA3th9mkIJabN8VCulZEYfl0RTDxSgWChQSc5Wh4ZM8vdVUf26oqMSvUOM4NjMUWceOCti1GNLhlOZrzaXDZLLBGwXKqtznTnHHY5jcDa5Gv5AOLvbodu8wAUxPn8kzq086Q3vqGxDKYlcJOTt1144uI0EA%2B1kx012%2FAYKsVtaywK%2Bvue5VCrrscfskHPUD0CA3fk1MpPpmxo5K%2BNrGnFUtE8Y1nuv4OYoq%2Fy%2BJ0dg4Vzwmlk%2BtzKBt%2FkdhuIFidRKNgzDP6nMjesH0PH7myJAU8G7QDXP7HLcBeVWqRgyZoeE2wsbD4kCJG%2FWeS%2B0%2B4R0Ht%2BWpZjQtFTU4S%2BwKUI3fQHsTLf3huOEZ2fdKu%2F8GN6n10c0K1xZLon30AxA4MQFoNlm%2Fz7xiz0%2F3N7MIbyh1BnkjltJcuRk3Qun6gmz77dCbP4ucG7Z3FoaHGSj6a4xNnTdHOBkAM%2BEMwZkI3EIoog3%2Fa5yx3jmrJ1XPX7xBetrHDXdC5C4172USIr03B6CwMB9SGfkOMXpMbjMZPvktYZaP1uTejd8kbKFRhdXDEdXWF02ge7SMK4T0TbBT28ngH%2BopLuDHKXZh45vKoqj0IPLKspI2DOaziuSUjl%2BhHHmydYKU7R4bhlBnxZML2opb8GOqUBZeRGu7x61MymhHSzV%2B2nz0D7NTcYcJg3xljpGtpVqodPJmkZLoDZOdnJt3lT6n8h9oDDV3s1HL93aDyW7PHAGKf9ehAULI8Xi6cXtXGcdYTPbVxlSCYbTzQNvvCmNccFlo72VPtWfEXNNBpLDeGPorQodr4l5AD4BClDQZ1P9%2F4FLxWvYx0PllUkLPjb4eLVqq%2FMRu8swrr2UVBj5EiycTwSMfnx&X-Amz-Signature=532a8eed522f3a6f61550636d816a93de158372fecb87c77d1875349aceeae22&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y6HAMKD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIE4LEfT%2BaoeTiAJGPk9TyqRNSvsLg7Pu6jessSDMeaxNAiEApEvGzSfDM1KnPHLaR1FrATHGp0OGitrSvP1FcYUNvbEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjSOyWqoB91GyG9cyrcA3th9mkIJabN8VCulZEYfl0RTDxSgWChQSc5Wh4ZM8vdVUf26oqMSvUOM4NjMUWceOCti1GNLhlOZrzaXDZLLBGwXKqtznTnHHY5jcDa5Gv5AOLvbodu8wAUxPn8kzq086Q3vqGxDKYlcJOTt1144uI0EA%2B1kx012%2FAYKsVtaywK%2Bvue5VCrrscfskHPUD0CA3fk1MpPpmxo5K%2BNrGnFUtE8Y1nuv4OYoq%2Fy%2BJ0dg4Vzwmlk%2BtzKBt%2FkdhuIFidRKNgzDP6nMjesH0PH7myJAU8G7QDXP7HLcBeVWqRgyZoeE2wsbD4kCJG%2FWeS%2B0%2B4R0Ht%2BWpZjQtFTU4S%2BwKUI3fQHsTLf3huOEZ2fdKu%2F8GN6n10c0K1xZLon30AxA4MQFoNlm%2Fz7xiz0%2F3N7MIbyh1BnkjltJcuRk3Qun6gmz77dCbP4ucG7Z3FoaHGSj6a4xNnTdHOBkAM%2BEMwZkI3EIoog3%2Fa5yx3jmrJ1XPX7xBetrHDXdC5C4172USIr03B6CwMB9SGfkOMXpMbjMZPvktYZaP1uTejd8kbKFRhdXDEdXWF02ge7SMK4T0TbBT28ngH%2BopLuDHKXZh45vKoqj0IPLKspI2DOaziuSUjl%2BhHHmydYKU7R4bhlBnxZML2opb8GOqUBZeRGu7x61MymhHSzV%2B2nz0D7NTcYcJg3xljpGtpVqodPJmkZLoDZOdnJt3lT6n8h9oDDV3s1HL93aDyW7PHAGKf9ehAULI8Xi6cXtXGcdYTPbVxlSCYbTzQNvvCmNccFlo72VPtWfEXNNBpLDeGPorQodr4l5AD4BClDQZ1P9%2F4FLxWvYx0PllUkLPjb4eLVqq%2FMRu8swrr2UVBj5EiycTwSMfnx&X-Amz-Signature=e539ff6e4fc65eb0a75d8b3774ef0222839f0d54fed8304302965276282e755e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
