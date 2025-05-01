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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GE3KHF6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCZdv8UdW%2BQ8k8n2yIQIhlh2UyldVeIBv%2FYN1FpPas7AwIhAKaBGZ03ihzhQnKZHPLwlZR8jelUc2HSRakHHReB%2FwKMKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzHNHqqdkDlzPxsogq3AMvYmzuW0T7B%2BZDtz5Rl0ln9jLs3hrZtwtBJcfB%2FMiWiUq0%2FVgTmpoitD4o1yKxNyYpUaa%2Fy18CvdHdQAVFmxtIaMn6Wfxb%2BicSBzine2tEIWpXdGciSolGZZfvbJW1kFVEvgJNrfGuBVEi0PUvG8QvQ8i0wesFGoQ%2B6JMSiy6TtOHEODCT5laSsTCMw5HbOgNRoLplWcMQzjaKh86WLamM2h5HZCdbcUJwOwMZt40fI9SuO2GMkbkx3baKOhRfh0UT9%2F1f0mxM2pQ9vEtxoJyWhtcHziygNodXBDWFoUFa75atXEh%2BP5UEj1VoSMkJaWwbS8I7fEiAFS%2F3vq17PIxfSwSeYSp3UWOupcshc6x8pD0PFODMQzWzD18t9NE6nJVoXI47MGJG3fsSk2R27tHMsVSTRUFJrAgJPWnf7oxQTehy1TTsB8Zf%2FEepnAwOcIPz1P2%2BfGlL9MpjQCzrnNoJ4VdLSa5BrdI%2B6dd1iWy%2BuPjJwG6X4MItGpj4XDezT2wML2NqOJoAbDTsI9a4uEKFPeLRJPEzYqSFNyzoIs0p1TbQrNzOmDK730Bt%2BhJiLqrWqcCwrdf9j1rxHLzNhdjC0JolYHpDr6nZ%2BKYvXSs%2BvJ5r8368zyGlxymOqzDGks%2FABjqkAZRNn6pGxEuFy1R9%2BfxrNs5SgEcptnhuEOQC1w8XfB7BkM15LL%2F9ylUW%2BxTYeC3ruyOD4rEpVLT74st4VbKc36Mt1rvgsw1WzIqUw7tFHS3QmarxZnt%2BBF2BDVZgN1czAFKIZYpxuuFmik5lGAyzg%2FMZUM1dmoOkvmGxDuerVJvxRfRJZ5mj8EwzJF4ANo8Zc%2Bz3bJccZGiGlVGPSsAOgEj0BP7O&X-Amz-Signature=405b875d9bb330ae4ef8d11d5ff71c0e16a310ef36815974c7e3868acae6ce35&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GE3KHF6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCZdv8UdW%2BQ8k8n2yIQIhlh2UyldVeIBv%2FYN1FpPas7AwIhAKaBGZ03ihzhQnKZHPLwlZR8jelUc2HSRakHHReB%2FwKMKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzHNHqqdkDlzPxsogq3AMvYmzuW0T7B%2BZDtz5Rl0ln9jLs3hrZtwtBJcfB%2FMiWiUq0%2FVgTmpoitD4o1yKxNyYpUaa%2Fy18CvdHdQAVFmxtIaMn6Wfxb%2BicSBzine2tEIWpXdGciSolGZZfvbJW1kFVEvgJNrfGuBVEi0PUvG8QvQ8i0wesFGoQ%2B6JMSiy6TtOHEODCT5laSsTCMw5HbOgNRoLplWcMQzjaKh86WLamM2h5HZCdbcUJwOwMZt40fI9SuO2GMkbkx3baKOhRfh0UT9%2F1f0mxM2pQ9vEtxoJyWhtcHziygNodXBDWFoUFa75atXEh%2BP5UEj1VoSMkJaWwbS8I7fEiAFS%2F3vq17PIxfSwSeYSp3UWOupcshc6x8pD0PFODMQzWzD18t9NE6nJVoXI47MGJG3fsSk2R27tHMsVSTRUFJrAgJPWnf7oxQTehy1TTsB8Zf%2FEepnAwOcIPz1P2%2BfGlL9MpjQCzrnNoJ4VdLSa5BrdI%2B6dd1iWy%2BuPjJwG6X4MItGpj4XDezT2wML2NqOJoAbDTsI9a4uEKFPeLRJPEzYqSFNyzoIs0p1TbQrNzOmDK730Bt%2BhJiLqrWqcCwrdf9j1rxHLzNhdjC0JolYHpDr6nZ%2BKYvXSs%2BvJ5r8368zyGlxymOqzDGks%2FABjqkAZRNn6pGxEuFy1R9%2BfxrNs5SgEcptnhuEOQC1w8XfB7BkM15LL%2F9ylUW%2BxTYeC3ruyOD4rEpVLT74st4VbKc36Mt1rvgsw1WzIqUw7tFHS3QmarxZnt%2BBF2BDVZgN1czAFKIZYpxuuFmik5lGAyzg%2FMZUM1dmoOkvmGxDuerVJvxRfRJZ5mj8EwzJF4ANo8Zc%2Bz3bJccZGiGlVGPSsAOgEj0BP7O&X-Amz-Signature=ddf4cbedd3d27f5a50dfc5f40e07ce28d391a1b792c78fe3386271930ea84b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
