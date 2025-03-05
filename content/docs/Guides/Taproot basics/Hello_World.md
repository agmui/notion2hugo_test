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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT4BZE6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgV%2BXHj%2BPGKMVH%2Fn6VM%2FL%2FZUaKAATdjL7CFLQv6Po6lQIgEx6rmx4l9iiMx3Ebku%2Bbinfp51cx3OeJZoZrVl8j3%2Boq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGqKsPC0PpMhxKrHRyrcA5CGYCDU4wV8tSzcaEsvnfwqz56HxtOd8y5B8aOR2nmOtJpV6u8fPt9J5WZ3onwII5%2BJmyhBPspSt%2BQYmK7bv1jUH673e6XrtA6Gon5YwgAS8Bw7mejdkwxAwyc3Uc6l9JihqFTZZJFu4YDUZeX0GoqqqU%2F0PNbDSlmR4IC0FIUfyVogyPUTsjJ7HoOjQxRAS0WYAaWs%2BP1Pd3Y76eLubmlJsdz5LQdoLB9%2F%2F6NDIsY9N8xHsjKGrV5mwPTgg%2FWKZARkNQbWh45QUMY2V8eHVbz5iTxFa%2FeAzkt5%2Bt%2Fp1alJonAHoYs1y7Mq0ooHdiVkjIP2tXwEwWirDo7aWMOe6zmvKMgaux9FN23L5ZOnV0D%2B7jd09pWLKirI%2BxSw98Ss0r7Hfinu0rTMeeu7d7ifZyAus3MLcjAZCtdZozAZWupq%2BjqqI85XISAMk%2BRA%2FkWUoWpZwOWls6qln3LKhKpkpcr%2Fbh5PA3Nv3G0d7cL9MMVmMFM8yNA4SH847LHGYMqjyQ3PSQ0tiVVQWwzzb1gYFvFs%2FUnS1Wo%2B8d0QDLT6QrQNuWjO6m7dBEn97xJExRxx7GIdCbQYny2zsfqpzoEy31y6rU0qkD0CyF1S0i6IJQteUWLGuge9jh5v2JGUML%2BBo74GOqUB2ccOpregJ7027UhkjVRtWs0KHgl010PWSKZhjyTtD8NWDEECUpi5pRXhyxXUhC%2BnHlB2YfrQeDVZ7m3PwtICtvPLIgLtvIntCXF6sgzgmF738YZa55iWldiDghWTN3R8y9oEvGPzZR18pejglzuecbk7YIVCRu2RDUu5J1VhKSt9nX15k8VbFSvThROP2AaNX%2Fq49cII3tu6POuTdnZJqlEfzpON&X-Amz-Signature=38c53db2ce9f703377092bf31804a22da294d27436d44697d63a05482c11df2e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT4BZE6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgV%2BXHj%2BPGKMVH%2Fn6VM%2FL%2FZUaKAATdjL7CFLQv6Po6lQIgEx6rmx4l9iiMx3Ebku%2Bbinfp51cx3OeJZoZrVl8j3%2Boq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDGqKsPC0PpMhxKrHRyrcA5CGYCDU4wV8tSzcaEsvnfwqz56HxtOd8y5B8aOR2nmOtJpV6u8fPt9J5WZ3onwII5%2BJmyhBPspSt%2BQYmK7bv1jUH673e6XrtA6Gon5YwgAS8Bw7mejdkwxAwyc3Uc6l9JihqFTZZJFu4YDUZeX0GoqqqU%2F0PNbDSlmR4IC0FIUfyVogyPUTsjJ7HoOjQxRAS0WYAaWs%2BP1Pd3Y76eLubmlJsdz5LQdoLB9%2F%2F6NDIsY9N8xHsjKGrV5mwPTgg%2FWKZARkNQbWh45QUMY2V8eHVbz5iTxFa%2FeAzkt5%2Bt%2Fp1alJonAHoYs1y7Mq0ooHdiVkjIP2tXwEwWirDo7aWMOe6zmvKMgaux9FN23L5ZOnV0D%2B7jd09pWLKirI%2BxSw98Ss0r7Hfinu0rTMeeu7d7ifZyAus3MLcjAZCtdZozAZWupq%2BjqqI85XISAMk%2BRA%2FkWUoWpZwOWls6qln3LKhKpkpcr%2Fbh5PA3Nv3G0d7cL9MMVmMFM8yNA4SH847LHGYMqjyQ3PSQ0tiVVQWwzzb1gYFvFs%2FUnS1Wo%2B8d0QDLT6QrQNuWjO6m7dBEn97xJExRxx7GIdCbQYny2zsfqpzoEy31y6rU0qkD0CyF1S0i6IJQteUWLGuge9jh5v2JGUML%2BBo74GOqUB2ccOpregJ7027UhkjVRtWs0KHgl010PWSKZhjyTtD8NWDEECUpi5pRXhyxXUhC%2BnHlB2YfrQeDVZ7m3PwtICtvPLIgLtvIntCXF6sgzgmF738YZa55iWldiDghWTN3R8y9oEvGPzZR18pejglzuecbk7YIVCRu2RDUu5J1VhKSt9nX15k8VbFSvThROP2AaNX%2Fq49cII3tu6POuTdnZJqlEfzpON&X-Amz-Signature=c54eb6358b10a65fa068bf1406f2173f494e790bd7a393623b28a7737fd7c057&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
