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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R22OVZU%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRQp5kiDu3yMeAXmhDFPFPQrY48tjeGhcmK4DVXJKbhAiEA9lx%2FsW0Ww%2BPOx2VgYJGfy4NSJ8k14aVaaUa5Lv2YqeYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhXPvmQs%2FeCEeisgyrcAyscRNp4qMIV2UeCAc17n0KagCIsVQeHK%2B70D2asyKTlgw%2B64ODaE844QVJRmgf9lDbH1C%2BUKfS3xHAQbO7yMNr1Jw6h%2F8tA7V6qcA5avBiS2r1NxBQMY4vFr1k4bwcroNq4KaOqidDkkdq7Ptlo4W%2BmEBNsCfp%2BhjC5xYwdDF6JyxfFEMBtXpSbFvVHjY4Uz8HTr0%2BwOkw4IhJiIcBViUq8ZV96i4YRLHmtz7ukuxRm7qvdDhBie4KEsFR0KQQLWDpyv086CELpadBHGhQhfZBMwvw3YrRBxuFcF5vPMpX56Sv317vF8sE5b6lk5lllIsm4fvtchQUgPbGh3OHJzYmqtSgwYyDQ6xn%2FnaJJMZoJo8gmYgiKgcpfrAby%2BmX0ikSb0IVgdyCkvpKGsjwe%2Fy5JJWSHGSVw90rx3M79cuxO8GhsrBDc0qMpXApb7t4yXVFKLNP7atG%2B5mL8qBSneP2bZjWpFAWsnCoT2UUqj7xm%2FYk%2FV8ODUyvLh2tDNPqWpRrfotF82B%2BL%2F5b9a8hXXROoT2KC3q4owQ%2BUMl8MKZ4AF6BJswUFZ3uT9lYbTJplsiXgTw3HpPLGSkgBuY50AaH5WUaoDlQEmyCAjA7KIxmt%2BxN3JiJexEg7F64kMMnVh9IGOqUBxqy%2FK%2B7%2BbbwDdwV0VGoICB5yhzVJOKt%2BeerEozGIfsKD7fzznTLe7V79qgweoMyiWVs6ocBIkSbnIYZ8gae8%2FtGJ4j%2Fxa9%2FGAeH3AOU0193tZz55IkD7ODu3DR2IBw9vouWhcPloeT0R6HD%2FoWrHKfr1E0hqQ3TUtquEWHHhWSxJ9X%2FlMtV0iv099JcESOb29k1W441pGBMZSoACoHS5RdrLpUyf&X-Amz-Signature=17b6e1125e08d2236b1dbde999da7ae7d66928036ba2d8df9031453b429dbe01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R22OVZU%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRQp5kiDu3yMeAXmhDFPFPQrY48tjeGhcmK4DVXJKbhAiEA9lx%2FsW0Ww%2BPOx2VgYJGfy4NSJ8k14aVaaUa5Lv2YqeYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhXPvmQs%2FeCEeisgyrcAyscRNp4qMIV2UeCAc17n0KagCIsVQeHK%2B70D2asyKTlgw%2B64ODaE844QVJRmgf9lDbH1C%2BUKfS3xHAQbO7yMNr1Jw6h%2F8tA7V6qcA5avBiS2r1NxBQMY4vFr1k4bwcroNq4KaOqidDkkdq7Ptlo4W%2BmEBNsCfp%2BhjC5xYwdDF6JyxfFEMBtXpSbFvVHjY4Uz8HTr0%2BwOkw4IhJiIcBViUq8ZV96i4YRLHmtz7ukuxRm7qvdDhBie4KEsFR0KQQLWDpyv086CELpadBHGhQhfZBMwvw3YrRBxuFcF5vPMpX56Sv317vF8sE5b6lk5lllIsm4fvtchQUgPbGh3OHJzYmqtSgwYyDQ6xn%2FnaJJMZoJo8gmYgiKgcpfrAby%2BmX0ikSb0IVgdyCkvpKGsjwe%2Fy5JJWSHGSVw90rx3M79cuxO8GhsrBDc0qMpXApb7t4yXVFKLNP7atG%2B5mL8qBSneP2bZjWpFAWsnCoT2UUqj7xm%2FYk%2FV8ODUyvLh2tDNPqWpRrfotF82B%2BL%2F5b9a8hXXROoT2KC3q4owQ%2BUMl8MKZ4AF6BJswUFZ3uT9lYbTJplsiXgTw3HpPLGSkgBuY50AaH5WUaoDlQEmyCAjA7KIxmt%2BxN3JiJexEg7F64kMMnVh9IGOqUBxqy%2FK%2B7%2BbbwDdwV0VGoICB5yhzVJOKt%2BeerEozGIfsKD7fzznTLe7V79qgweoMyiWVs6ocBIkSbnIYZ8gae8%2FtGJ4j%2Fxa9%2FGAeH3AOU0193tZz55IkD7ODu3DR2IBw9vouWhcPloeT0R6HD%2FoWrHKfr1E0hqQ3TUtquEWHHhWSxJ9X%2FlMtV0iv099JcESOb29k1W441pGBMZSoACoHS5RdrLpUyf&X-Amz-Signature=47b76592f6d747f1c12fc4bcd71acb61cd14ba196ec2b3dc1f8c0b7ff7ecaa78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
