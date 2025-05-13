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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB6YDYQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDb8MwTQbRWRS9tc2rjc5CqJLQA%2Bhsq3y3G%2BiLGRGokKQIhAPVMFyo9%2BwDECRpOhowVN6gaQz5Y9pD4S0DAg0vM7efhKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxslue5Tj58q3bMSr0q3APkKlI4d4e2xv0Wh2r0UqIJnqC%2BqxbRGLcKMAgwNi3W%2FhGaN%2FGKnC7qj2sebl4red2jt2BKBlxl%2FuweSCOKXF2TAZk0iFHzCXy1HfAvvKfaAEKRV6j%2FcIgtdpCPgc2VQTHEVAbdbb0%2BxwOjIjFuyTQ%2FvnKroOONgQlYj4XO78EdmrLaVAquvtH5PNBwWSrJmqurVpsnc%2BAGGNgLx%2BmP%2BhVW4wyYYd2O%2F89G3VHRphV4N5CcxCl5OWTjW170R1w%2BcbeRltam5MeJt4tva%2FiUYAxGkNGnqggxenL4J00bWxUHhEompksIyItvGuYp2Q7a1L6a5jFHq4%2BhCgpEydXT279iT%2Bv2tIhGmRss4lS53HLRTBgM%2BRWH6VoQVYpXFXNLkGl9NEETvM%2F2COJSPA%2BZQNRaxrAJ%2FH0vTiO8QoVrNoViNC35VYJ7bkRCudA%2BVRT5fAsoGvBJe0mmJ9cYL93uif3Fj%2FccFMl26YAxceiW74ZVeoIEpK02m1Kj8NwQdZELssUq93O048dkDT4aAkL0dPS5rKQr3XzjyoBfTHyTbkWLR5KmPXSv4gFLATh8b2WuhGFTaaOvU6g5a%2BrQld5CL%2BY3DfJJvJsll3d3U4x%2BIHTF%2BeVu9bePyU78WL1hHjCIiozBBjqkAV4IM%2Bu2Ffg4s3nfU3GJMlc6iR1xc1z%2BhOB560GZiF1w9HP71zHjt6wAvZHwmY3qUs%2B4fNa28sslOoXBvHlqdX0Soh6c2V8W2C2U%2F%2F0VtOc7FzyyOW9U06FVL89guFhvHaSpp5Yons81YSmEGXfP57FkdghS2iuuRj7hn4LFkxBYFsKx2txcODRToPnBjkh8Qp6omzALlVkU%2FOVRT%2BMAacxRwqL3&X-Amz-Signature=c7c35ccd868abeec44861b216c306bcc7c34d52d4a5137acc3ec7c6e6c75e60d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB6YDYQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDb8MwTQbRWRS9tc2rjc5CqJLQA%2Bhsq3y3G%2BiLGRGokKQIhAPVMFyo9%2BwDECRpOhowVN6gaQz5Y9pD4S0DAg0vM7efhKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxslue5Tj58q3bMSr0q3APkKlI4d4e2xv0Wh2r0UqIJnqC%2BqxbRGLcKMAgwNi3W%2FhGaN%2FGKnC7qj2sebl4red2jt2BKBlxl%2FuweSCOKXF2TAZk0iFHzCXy1HfAvvKfaAEKRV6j%2FcIgtdpCPgc2VQTHEVAbdbb0%2BxwOjIjFuyTQ%2FvnKroOONgQlYj4XO78EdmrLaVAquvtH5PNBwWSrJmqurVpsnc%2BAGGNgLx%2BmP%2BhVW4wyYYd2O%2F89G3VHRphV4N5CcxCl5OWTjW170R1w%2BcbeRltam5MeJt4tva%2FiUYAxGkNGnqggxenL4J00bWxUHhEompksIyItvGuYp2Q7a1L6a5jFHq4%2BhCgpEydXT279iT%2Bv2tIhGmRss4lS53HLRTBgM%2BRWH6VoQVYpXFXNLkGl9NEETvM%2F2COJSPA%2BZQNRaxrAJ%2FH0vTiO8QoVrNoViNC35VYJ7bkRCudA%2BVRT5fAsoGvBJe0mmJ9cYL93uif3Fj%2FccFMl26YAxceiW74ZVeoIEpK02m1Kj8NwQdZELssUq93O048dkDT4aAkL0dPS5rKQr3XzjyoBfTHyTbkWLR5KmPXSv4gFLATh8b2WuhGFTaaOvU6g5a%2BrQld5CL%2BY3DfJJvJsll3d3U4x%2BIHTF%2BeVu9bePyU78WL1hHjCIiozBBjqkAV4IM%2Bu2Ffg4s3nfU3GJMlc6iR1xc1z%2BhOB560GZiF1w9HP71zHjt6wAvZHwmY3qUs%2B4fNa28sslOoXBvHlqdX0Soh6c2V8W2C2U%2F%2F0VtOc7FzyyOW9U06FVL89guFhvHaSpp5Yons81YSmEGXfP57FkdghS2iuuRj7hn4LFkxBYFsKx2txcODRToPnBjkh8Qp6omzALlVkU%2FOVRT%2BMAacxRwqL3&X-Amz-Signature=bc2020212b1e54eb1d60369138840b5893ee528c16a479522a0ae8bf940be840&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
