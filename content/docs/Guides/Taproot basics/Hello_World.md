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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WHD3MEJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDp80P7yGCjsGbDrjyEO3XeP2tmANn9w38S5Yfc76%2FKFgIhAM6CDJono%2FWTwQNc9ej1Ua9uMMHmw4QDgGv7a78zZ%2FQLKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu9kn05iByw4ddjvgq3ANHc70VbtbsdTs%2BCosogIlPnvYfnPJH6C9zFUlftyINnhYatq%2B8alsR7VQkwwQ9o9XLaHhq0soDrQYiXugX7jv0bhoLUT%2FEFyWt%2BaE4U5pDR2McExjrdeQ9D8q240pAVyo3oWlOcXtz6Eo3YJWrV8Bz0KjVyE04F998u94IDTWZaUh1Q9gc6UwjG3TmJEmSg7TvZooN%2Fq%2BHoJlpixpww9863Mnrqswknr1RT7qB4N3Yes663N1PVyWEMRT5AnPjkJJDahBzNl4f5R7AILluCkdhgA%2FX8aY0ZggU15ul9ovTBZbmwR6AaSNeM9l1ypnfmwTo%2FShhED%2FgvgNjImwlqm98U2sJFZj9u5%2F9et6VAJb0QfRuibV16aBPPpuL6g32XW%2BjuicshAcYwrmyZHC2uOPyNu2dySQ2sQtjWz5f1ZrK%2BDVAzJFV3FvKwpRyMKdfZY84fosZsZrh%2B%2BA%2FA17%2FKClLx45PboGIO1n1K9xoqr%2FppDxmJrqHX8zEQo5WNMBGEwQJV1lJ3VbyVvpgcDjEl0s2Aa9oDgOQd1F4LzGy3nQzGgtFnnaxZR%2Fjt9mqdQLrvXrvwjg1t2aQBKY07CFVSiSU17U41FetXsG3iRwpzUnSmcEvKjt6h9%2Fr40hwtDDPudO9BjqkATbQ5yCiImcQ59bTSyClIBd29Z38QjqxTu3BlaPxiskFKVCE0GZxVA7maH1heM%2BbLnwnnTpYDc2UqyJvNM8luS0rwQmbn8HNJrAquu2Gy%2F6lpYV5rWHGCRKScT0wb%2FxOWKa8w0yJTfW3U5wAXlOybZGqwMgCKdQJs8M86arv8%2BknM8GQwnE5YQc%2BTvYa2%2FYkg2JFyqHE%2Ft%2BUN5L8bD7imt4CO43F&X-Amz-Signature=06350af9329826c6c964c7407cf7b4e86437994bc662b4566def4e1382140d91&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WHD3MEJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDp80P7yGCjsGbDrjyEO3XeP2tmANn9w38S5Yfc76%2FKFgIhAM6CDJono%2FWTwQNc9ej1Ua9uMMHmw4QDgGv7a78zZ%2FQLKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu9kn05iByw4ddjvgq3ANHc70VbtbsdTs%2BCosogIlPnvYfnPJH6C9zFUlftyINnhYatq%2B8alsR7VQkwwQ9o9XLaHhq0soDrQYiXugX7jv0bhoLUT%2FEFyWt%2BaE4U5pDR2McExjrdeQ9D8q240pAVyo3oWlOcXtz6Eo3YJWrV8Bz0KjVyE04F998u94IDTWZaUh1Q9gc6UwjG3TmJEmSg7TvZooN%2Fq%2BHoJlpixpww9863Mnrqswknr1RT7qB4N3Yes663N1PVyWEMRT5AnPjkJJDahBzNl4f5R7AILluCkdhgA%2FX8aY0ZggU15ul9ovTBZbmwR6AaSNeM9l1ypnfmwTo%2FShhED%2FgvgNjImwlqm98U2sJFZj9u5%2F9et6VAJb0QfRuibV16aBPPpuL6g32XW%2BjuicshAcYwrmyZHC2uOPyNu2dySQ2sQtjWz5f1ZrK%2BDVAzJFV3FvKwpRyMKdfZY84fosZsZrh%2B%2BA%2FA17%2FKClLx45PboGIO1n1K9xoqr%2FppDxmJrqHX8zEQo5WNMBGEwQJV1lJ3VbyVvpgcDjEl0s2Aa9oDgOQd1F4LzGy3nQzGgtFnnaxZR%2Fjt9mqdQLrvXrvwjg1t2aQBKY07CFVSiSU17U41FetXsG3iRwpzUnSmcEvKjt6h9%2Fr40hwtDDPudO9BjqkATbQ5yCiImcQ59bTSyClIBd29Z38QjqxTu3BlaPxiskFKVCE0GZxVA7maH1heM%2BbLnwnnTpYDc2UqyJvNM8luS0rwQmbn8HNJrAquu2Gy%2F6lpYV5rWHGCRKScT0wb%2FxOWKa8w0yJTfW3U5wAXlOybZGqwMgCKdQJs8M86arv8%2BknM8GQwnE5YQc%2BTvYa2%2FYkg2JFyqHE%2Ft%2BUN5L8bD7imt4CO43F&X-Amz-Signature=adb3ef7a7019774c30bb4fe1e4312c51d068d0c4d42442afbb3799cbd6096ded&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
