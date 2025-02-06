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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXQRX2MA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBJ78RdMNYPqM2qR1GMe2RRLMYBAyN9xCuRlRZMFpl%2FoAiEAvEjIFKC%2F6SheEo98CBSsqKw7XJCZmFzcF4q8XxGdwBgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDWTN%2BIXzd%2FjXBaZcyrcA3Vri7RYm6E08p4xHeApIKDIFom%2FSoRSYAp6PuzsCHryrfUU6nm7EcMBmZ98iRIDzzqEhoes3hchx1WAqfz5DK8LSlC3sR4Njl974ACbsQ%2FGXItNPizAj6DhMgJpUBOFUirYQq3CbYUZaQzUda0l1dEE4mq7%2BX4AooCvCwV41Qw%2BUP1iyBZQ5%2FOoDWhZdT5xYAgujdug6J%2BVDfb7wypGmFqGlIDdAnspHj7iCcf5dzU5s9ns6ZuZR9sk9eGyMOFz3yPxpkcb1BRGRIJAAH2Fi8AGJKlW8HpfW6XMC0fPLu72n7wgDnPBrkAK6ADUpEp6LF2JjuEcS61AI93jZIOpRUDY5A24f0xQELKeP1Ogzsm71sn7qWXoTlV%2BpCNJsu0QsgQwRN5%2B0y2ZAf1XpWE8iU%2Ba%2FoHabXHVkhaJLkrI7b4pK0FNEtIX4DbbNu0FuXdv2pegRBrDpmhPJiip7mTL2rrDnXgZcMwDZYNSDpdCi3HKYKCcsx33TBa5teVBpAsStSLbdakxfVSFYHfjczYftDpUSsVXFYgmO7AKZfkTe%2FXyluX2BUE2IsWXtPJ16I8%2B3%2Fjmt2V9GlxOod08cfW2XQ0fArtorpecgMr2H7Zs%2F6RSjchekOoiqjwna6rmMM%2Fsj70GOqUBFATCGmz0XFY8GBKYIDKznQnFjECif7yTMfmXFeDlus%2BoFj8jYof5h3HAUKgqMpdKqTmL2U3DSwFwg8cJq13QrKZB4gwJFOf3bVg1sWUMSTktiJWWxMRhb1kmvonuBWc3oN3pB6qmaaQu1%2FDLoMNmrl1lh%2FoCK%2BL2ywP0uyAeAW%2FT%2Ff%2Fy9kh8RQx%2BinBwOfUSbrgwasxymlsP1c8bT8Lxkmlc%2BncJ&X-Amz-Signature=08ab4c863e2bdcca401ba095a43809f6faa54097ddab2cc8d3455602dd362c38&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXQRX2MA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBJ78RdMNYPqM2qR1GMe2RRLMYBAyN9xCuRlRZMFpl%2FoAiEAvEjIFKC%2F6SheEo98CBSsqKw7XJCZmFzcF4q8XxGdwBgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDWTN%2BIXzd%2FjXBaZcyrcA3Vri7RYm6E08p4xHeApIKDIFom%2FSoRSYAp6PuzsCHryrfUU6nm7EcMBmZ98iRIDzzqEhoes3hchx1WAqfz5DK8LSlC3sR4Njl974ACbsQ%2FGXItNPizAj6DhMgJpUBOFUirYQq3CbYUZaQzUda0l1dEE4mq7%2BX4AooCvCwV41Qw%2BUP1iyBZQ5%2FOoDWhZdT5xYAgujdug6J%2BVDfb7wypGmFqGlIDdAnspHj7iCcf5dzU5s9ns6ZuZR9sk9eGyMOFz3yPxpkcb1BRGRIJAAH2Fi8AGJKlW8HpfW6XMC0fPLu72n7wgDnPBrkAK6ADUpEp6LF2JjuEcS61AI93jZIOpRUDY5A24f0xQELKeP1Ogzsm71sn7qWXoTlV%2BpCNJsu0QsgQwRN5%2B0y2ZAf1XpWE8iU%2Ba%2FoHabXHVkhaJLkrI7b4pK0FNEtIX4DbbNu0FuXdv2pegRBrDpmhPJiip7mTL2rrDnXgZcMwDZYNSDpdCi3HKYKCcsx33TBa5teVBpAsStSLbdakxfVSFYHfjczYftDpUSsVXFYgmO7AKZfkTe%2FXyluX2BUE2IsWXtPJ16I8%2B3%2Fjmt2V9GlxOod08cfW2XQ0fArtorpecgMr2H7Zs%2F6RSjchekOoiqjwna6rmMM%2Fsj70GOqUBFATCGmz0XFY8GBKYIDKznQnFjECif7yTMfmXFeDlus%2BoFj8jYof5h3HAUKgqMpdKqTmL2U3DSwFwg8cJq13QrKZB4gwJFOf3bVg1sWUMSTktiJWWxMRhb1kmvonuBWc3oN3pB6qmaaQu1%2FDLoMNmrl1lh%2FoCK%2BL2ywP0uyAeAW%2FT%2Ff%2Fy9kh8RQx%2BinBwOfUSbrgwasxymlsP1c8bT8Lxkmlc%2BncJ&X-Amz-Signature=39350634320d0af538fcac023e25c26bf3367d1c82cdb251bab5c9e1db19ab0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
