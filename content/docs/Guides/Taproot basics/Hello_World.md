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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7E4A45%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD0Yivthv3mevOUCLkIGhQc1EEhnMKcdT6Mo45hoUFu7AIgKM8eAEk3vQRE9RKd2yP6MQjWNSEbbPhB0WHOrNfj5SsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkgeXXXevpndbWDcCrcA5RQqbiwLml8YXDCOD8Crxi3Q6TeCVwTtVSmHPNPxSqGFhbmvyJWdM1KxNBkw4R06%2FKHtffxyelOmSbz2RPhUed5%2F3K3%2F4wFtWVmVeDece8oUZiRFA7U4j5ZH01noT9Xt5AdpMikQyUuHRRoJABo4HqU%2BJ2%2BurXzPrBvLAjwpudEYJhZJVQSp1czBNxEcURGvwPbQuOnEyRHf9uvnepjVSxTyX8a6ilACOuOQ5twkIh0LD1atvHC1qMU3nBZ4B28zsLg1A9ZOFYvcdwx%2BnHK5fL4mVhECK2%2BBeNJWyBym7EFfVbdXuVwiZhalAkbS3n29Zez1aNQJvei0mL%2BAtoTwVhYGdpMKTq%2FdfDFsvk1Vh6Gf870w%2FSKzF%2BQWFwBTQZry8snX4AoP3jweHt6uOHjH19p6zWfnWfIxLLcEd9qJSrk3aKnO6RJIGjraYTnXyCDrLp3KFES6HFqFeFB9leeV%2BwoeF4%2BOV6PC28XK6mO5I20XOpG4qtNHGrrcoB6cbAKOsnrD8fYkENFVH%2B7HxCyjGVuKxzx%2FrXNnv4UAw18E6pcwspwXrrv4h1WHo4wTH4DKxkXzQajEC516WXKPd7oo2SB43QO9r0ra%2BdlQ8az%2FBOOANJ63QoLIzF5RErCMJvptb8GOqUB%2BrfadFsoWLDM%2Fb4y2XFhOX2IIhNbqdocHFKm%2FW9uETaAFVJWRMn9DlvXD%2BArHmjWXnvMIlh7MLPyAEhKywDK2tdUxH29eqOS6KJbcYe%2BhvPDvgFv3M9azXr3Vuyc%2BBjm6mVPYM6WqLxFfp8kZgEUCX%2BgTUlIp%2Btk9rXpUp9OEeGWky9gA%2BRwRq2r6VSZQci0mNDOeYLQrt9CSGxPM0nXBWu1w%2FX5&X-Amz-Signature=da7a9cf57018a78425a9e751cfc4ec3fb3c0b3153a245da3b61cdfc9be0ca0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H7E4A45%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD0Yivthv3mevOUCLkIGhQc1EEhnMKcdT6Mo45hoUFu7AIgKM8eAEk3vQRE9RKd2yP6MQjWNSEbbPhB0WHOrNfj5SsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkgeXXXevpndbWDcCrcA5RQqbiwLml8YXDCOD8Crxi3Q6TeCVwTtVSmHPNPxSqGFhbmvyJWdM1KxNBkw4R06%2FKHtffxyelOmSbz2RPhUed5%2F3K3%2F4wFtWVmVeDece8oUZiRFA7U4j5ZH01noT9Xt5AdpMikQyUuHRRoJABo4HqU%2BJ2%2BurXzPrBvLAjwpudEYJhZJVQSp1czBNxEcURGvwPbQuOnEyRHf9uvnepjVSxTyX8a6ilACOuOQ5twkIh0LD1atvHC1qMU3nBZ4B28zsLg1A9ZOFYvcdwx%2BnHK5fL4mVhECK2%2BBeNJWyBym7EFfVbdXuVwiZhalAkbS3n29Zez1aNQJvei0mL%2BAtoTwVhYGdpMKTq%2FdfDFsvk1Vh6Gf870w%2FSKzF%2BQWFwBTQZry8snX4AoP3jweHt6uOHjH19p6zWfnWfIxLLcEd9qJSrk3aKnO6RJIGjraYTnXyCDrLp3KFES6HFqFeFB9leeV%2BwoeF4%2BOV6PC28XK6mO5I20XOpG4qtNHGrrcoB6cbAKOsnrD8fYkENFVH%2B7HxCyjGVuKxzx%2FrXNnv4UAw18E6pcwspwXrrv4h1WHo4wTH4DKxkXzQajEC516WXKPd7oo2SB43QO9r0ra%2BdlQ8az%2FBOOANJ63QoLIzF5RErCMJvptb8GOqUB%2BrfadFsoWLDM%2Fb4y2XFhOX2IIhNbqdocHFKm%2FW9uETaAFVJWRMn9DlvXD%2BArHmjWXnvMIlh7MLPyAEhKywDK2tdUxH29eqOS6KJbcYe%2BhvPDvgFv3M9azXr3Vuyc%2BBjm6mVPYM6WqLxFfp8kZgEUCX%2BgTUlIp%2Btk9rXpUp9OEeGWky9gA%2BRwRq2r6VSZQci0mNDOeYLQrt9CSGxPM0nXBWu1w%2FX5&X-Amz-Signature=0395d9c2b08158419e17f74ac4840a121013635b58e18d07c7a8848cf8257c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
