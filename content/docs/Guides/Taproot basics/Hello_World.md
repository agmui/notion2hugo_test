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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJKXEMM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkUorNQVkYHb37Wg0spnaVGmj0ih2JKAYqxp1nB0nTPgIhAMnawDOBjWATmG19wqOal8oZ0265nxlqXdjyHS7%2Bv3u%2BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAIItLZYAgrVpHtMoq3AMhjkyK815If1UTIMw40VKL68RppGwjcLT9zfptbl2f9CeQ5%2FKd4n8gx4KcvtC3x60ly0AxfamKapJm%2Bdhvz%2Fb1fVubXDqvFKEDKpI%2BnkQDd%2BLx0LAv6gQfMHfGJHC5g%2B5yLxqoPx%2Bwb%2FiPTjcts4hZfvrI0BQDCDd9v7HGl5qcAeu%2B3hBQVM8hIPYZ6tiH7UBiHrm7jjkM2DhSvw8uocGZfzEJsyxfjIwbWk23oaYJXhWtlgyLhScF0DPnohe6bRAdDoRqfftZxjzIVIq2QiljqxEb094%2ByGD8dpa31z6wAhaC2lQjm32P1uBp%2FdXncbzFDvvjAibr%2BAbTmAdoD2SOYiEgjxED9hkdaWu1dgY2H2qNfZ9E9XHwen9GTHyw3%2Br8chXmDQy8BTbp9smokAfO%2FJ0U0CgrvsHYTa6JOCJtexAKl7%2B6I%2FMf3ItZSRRWHX0V%2FACiPTI4ndDd8oRGUCLRCMyPVshqoAXic2vCZyVm0JSNRiHFVafVvm3B3WjUY8WbnXsoikGXOZKUFUau8EYXVoSbKAlH2StRTarL4%2FFe0e%2BwT0usrS81oaBQeQOEfO0hs4XklrcuiSy2F1LTeKpRidGB5kyd%2F2oos0IHgJbkSUu%2FawST0yFhTSKpEDDQif3ABjqkAT6uPsYJperJHCU2e5BdNFBx4vhe14laazZ3GiedkKjFhXy7VL%2BRHDCGRth%2BCJoS%2FTdWn9dtKdSvd%2BxU4c6rd4BI82Y7z%2BE1Zkgsj1tcqsvO85myxxQi85Hm8HBjhpgcwZCiOt0hDl3ueMA96ODUFXRkrgZX4L3U1WJusFUN%2FNYJkUzNwfCJ3vRDVdlOWZjIuWnwNroctxaoDuWeT7M%2FGKfQbEQp&X-Amz-Signature=0e45ae09387032f49ac4d2e97809d9fbdeba6dff92c4dacf8f64c3923e77f1c7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJKXEMM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkUorNQVkYHb37Wg0spnaVGmj0ih2JKAYqxp1nB0nTPgIhAMnawDOBjWATmG19wqOal8oZ0265nxlqXdjyHS7%2Bv3u%2BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAIItLZYAgrVpHtMoq3AMhjkyK815If1UTIMw40VKL68RppGwjcLT9zfptbl2f9CeQ5%2FKd4n8gx4KcvtC3x60ly0AxfamKapJm%2Bdhvz%2Fb1fVubXDqvFKEDKpI%2BnkQDd%2BLx0LAv6gQfMHfGJHC5g%2B5yLxqoPx%2Bwb%2FiPTjcts4hZfvrI0BQDCDd9v7HGl5qcAeu%2B3hBQVM8hIPYZ6tiH7UBiHrm7jjkM2DhSvw8uocGZfzEJsyxfjIwbWk23oaYJXhWtlgyLhScF0DPnohe6bRAdDoRqfftZxjzIVIq2QiljqxEb094%2ByGD8dpa31z6wAhaC2lQjm32P1uBp%2FdXncbzFDvvjAibr%2BAbTmAdoD2SOYiEgjxED9hkdaWu1dgY2H2qNfZ9E9XHwen9GTHyw3%2Br8chXmDQy8BTbp9smokAfO%2FJ0U0CgrvsHYTa6JOCJtexAKl7%2B6I%2FMf3ItZSRRWHX0V%2FACiPTI4ndDd8oRGUCLRCMyPVshqoAXic2vCZyVm0JSNRiHFVafVvm3B3WjUY8WbnXsoikGXOZKUFUau8EYXVoSbKAlH2StRTarL4%2FFe0e%2BwT0usrS81oaBQeQOEfO0hs4XklrcuiSy2F1LTeKpRidGB5kyd%2F2oos0IHgJbkSUu%2FawST0yFhTSKpEDDQif3ABjqkAT6uPsYJperJHCU2e5BdNFBx4vhe14laazZ3GiedkKjFhXy7VL%2BRHDCGRth%2BCJoS%2FTdWn9dtKdSvd%2BxU4c6rd4BI82Y7z%2BE1Zkgsj1tcqsvO85myxxQi85Hm8HBjhpgcwZCiOt0hDl3ueMA96ODUFXRkrgZX4L3U1WJusFUN%2FNYJkUzNwfCJ3vRDVdlOWZjIuWnwNroctxaoDuWeT7M%2FGKfQbEQp&X-Amz-Signature=d7a96c3a512124b4b00e18ba83a7c6ceaf85351d824ce564764e47c4ba1a752d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
