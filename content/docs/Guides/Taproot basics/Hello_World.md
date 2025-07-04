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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NACDUCC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFamhgVqcRRJHN1UyXxfjc8RquFyxuBdoaP9Fw4U5bGMAiEAgFsjl3oIedAmEFg8c8OA4p66VdS609FYWhDc0avTGEQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLt%2BGXDhGFKxgIh31CrcAwVgxYcrP7gms8tbX0bluMqnDRw0KSH7B%2FnHJchnc8zwVQB1rd8%2FlpHbJ0mHvZZIX1Wh6mQkICqpt9LZ6GmyiXXGJbd1dlu2%2FhOV5fUfuHF3VhB9AwCUwUqgTsUhN3j%2FzbFCajyYL%2B%2B97qB7aB%2BIXj7tfL7xeiKL8ZZcCI6cpXElFBrBz%2B5ANlBwJJZSkuEkdXDLJegfoEEDhD6EYL9%2FlnPzghplWP7KxUzYDxpceWdCGghQc2paKy8R%2BLPir6A4h%2FQXw7L4bp7H1WaExcjVfJ1qBlv9Bg5BccoBouPf1u%2BAm4L28AYYaGONB2wIwTlhs1ZgzMxtW9YLIPqyEOJZDkH93Gy7D1e475gO3RL5qDLBOV4IUSHoMFtz41WdhhjBl3YBbDd3MgNcvbTwMim7Prn7FMel3Xj7JewequU9RNnhR%2BgbgabtOXGZTB51c4tvRg9MtecpAp8g1wZnOHcVJLtzU%2F4g5%2FVWXWBUQdGKR6Jvv4eP%2B7C%2F5wE3WrRBFC9futjdmE18ioftaqN2b3LmhrNHI%2BAdmu5AfD2Il74RKm0fB69pFLB3pWiIMiOClEBKRflkTO%2Blb%2F1J9C3YkQMRYutDFV%2F3d4c9qjzpwdUW8YwYtc%2FGojybwgeEpXIvMLaNnsMGOqUBA5vNuSQ6L1pGONbDU8V7PJRQK71lYcxOG3xRQhVshVJfanRta2AEZtLsiRWESEJbOo7sjHVvQ9DpPHHEBGk4HpthgeZID465cx8GC3dA%2BRTuXo%2BFfW%2BD0ak3NWpdTVaOFwkrzYe5M5IxBMelv7bK1T86vBASFzp5hNcBnuctJvFVsxFLEHeMPHHKguKenkPo5ReCrGdruY%2FED2z9mWyTVVLrsndR&X-Amz-Signature=a356d08d57060ae2a7937785220be748afcfc0b7e1adaeb18c67bb6337b534ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NACDUCC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFamhgVqcRRJHN1UyXxfjc8RquFyxuBdoaP9Fw4U5bGMAiEAgFsjl3oIedAmEFg8c8OA4p66VdS609FYWhDc0avTGEQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLt%2BGXDhGFKxgIh31CrcAwVgxYcrP7gms8tbX0bluMqnDRw0KSH7B%2FnHJchnc8zwVQB1rd8%2FlpHbJ0mHvZZIX1Wh6mQkICqpt9LZ6GmyiXXGJbd1dlu2%2FhOV5fUfuHF3VhB9AwCUwUqgTsUhN3j%2FzbFCajyYL%2B%2B97qB7aB%2BIXj7tfL7xeiKL8ZZcCI6cpXElFBrBz%2B5ANlBwJJZSkuEkdXDLJegfoEEDhD6EYL9%2FlnPzghplWP7KxUzYDxpceWdCGghQc2paKy8R%2BLPir6A4h%2FQXw7L4bp7H1WaExcjVfJ1qBlv9Bg5BccoBouPf1u%2BAm4L28AYYaGONB2wIwTlhs1ZgzMxtW9YLIPqyEOJZDkH93Gy7D1e475gO3RL5qDLBOV4IUSHoMFtz41WdhhjBl3YBbDd3MgNcvbTwMim7Prn7FMel3Xj7JewequU9RNnhR%2BgbgabtOXGZTB51c4tvRg9MtecpAp8g1wZnOHcVJLtzU%2F4g5%2FVWXWBUQdGKR6Jvv4eP%2B7C%2F5wE3WrRBFC9futjdmE18ioftaqN2b3LmhrNHI%2BAdmu5AfD2Il74RKm0fB69pFLB3pWiIMiOClEBKRflkTO%2Blb%2F1J9C3YkQMRYutDFV%2F3d4c9qjzpwdUW8YwYtc%2FGojybwgeEpXIvMLaNnsMGOqUBA5vNuSQ6L1pGONbDU8V7PJRQK71lYcxOG3xRQhVshVJfanRta2AEZtLsiRWESEJbOo7sjHVvQ9DpPHHEBGk4HpthgeZID465cx8GC3dA%2BRTuXo%2BFfW%2BD0ak3NWpdTVaOFwkrzYe5M5IxBMelv7bK1T86vBASFzp5hNcBnuctJvFVsxFLEHeMPHHKguKenkPo5ReCrGdruY%2FED2z9mWyTVVLrsndR&X-Amz-Signature=33bd9e49e49bb9d56f2d76bafcd24f0368eaf0f55e3fd4f4b5a1ba09eee8ee81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
