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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663J7VJO2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCRCNLTxBdh1NzGK9egesFJJW7tPYPxXVnBR28XpUdaMQIgdOWspv92jE%2Blv70nXYbBS6AQ1GPQHb9DNAQ5GNXb8Z8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPkp%2BIL7SfCBrlov1SrcA%2BjfvIxgGqiLWOTMUw%2B6VmOSKDLcnLOXQlYXncgEDrIjSonFd75E%2F3O8tdwVXqnhngL3PmDbzz%2Fj4cAF7fSw1il%2BKhSi15VmjpZTT5%2F4aTB3cbFkxoKleWyeVS9YGgtJXRcrs6OPCdig5LYaHQgVkO9mlG7RGb6YifnNMWRKZDLNzSfPKoIOOEvFl%2FTcuXe4lpsQHYUrwN0BuFFeFyA6BH25cgpLP6Kn1GmRtY1QZMPQ%2BbRalXWIHDMtztTZ2A7Vv9g8pAt8%2FSM7knvFwUZvMj6JU8Tiv6dGndBEUw1srg1cQJvnw2UEMtSW8QH%2BJZHZJQZxMhztLq1lg4dL4MdZEX6oQC1iAfUXMtnMMHtTO6y5tJFt85QI26SNCzHPF93xGwZQ%2BXymdBnAeSow2uXmBsdk2rrGgX00EQLFkocvopo7ENWZamZ0IzDjXGnv78wLDnVl9vsB0%2BLaWQd4E9VDGV%2BnfSMoq997ardTfXyHh38DY8q78ndAG47w%2BLyTQLG1HiJaUHqLONps37ykuKl3Qd%2FTB9JPoBjCNa1w%2BKxZFI%2BxPcjcdqUvn832AeJwj3wlY8QrkBCF3jRCHIsFHmld463wwpgkg%2B1rUPB72fFQ2lp3sentPKMshzC7Cy2AMLXdob8GOqUBzeniVdP1C0fZcd1UhNlBWRXMK0U4lfAINuEEl4HPYF9kQ0wC7ElGjJxb4QGFwqhBDSb97D9jb2PHVewuJR3hQqhFQ%2BNGB7fI1975CjtePOlc2LSoa9jLNKiULkw91hOj5PFjouNq7H%2BX9u1CdQzoQrmu%2FOJQnBRWaQfRycRLDoQ2DFiARfw%2FjZ%2FXJZ9HRIfS32uzrZ3mI2Pt08mMjdTPrCazxvLJ&X-Amz-Signature=7ab71099ab18d5cbc0425e545872ee8fa37a46d7281190e1c7eca405ec5548b4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663J7VJO2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCRCNLTxBdh1NzGK9egesFJJW7tPYPxXVnBR28XpUdaMQIgdOWspv92jE%2Blv70nXYbBS6AQ1GPQHb9DNAQ5GNXb8Z8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPkp%2BIL7SfCBrlov1SrcA%2BjfvIxgGqiLWOTMUw%2B6VmOSKDLcnLOXQlYXncgEDrIjSonFd75E%2F3O8tdwVXqnhngL3PmDbzz%2Fj4cAF7fSw1il%2BKhSi15VmjpZTT5%2F4aTB3cbFkxoKleWyeVS9YGgtJXRcrs6OPCdig5LYaHQgVkO9mlG7RGb6YifnNMWRKZDLNzSfPKoIOOEvFl%2FTcuXe4lpsQHYUrwN0BuFFeFyA6BH25cgpLP6Kn1GmRtY1QZMPQ%2BbRalXWIHDMtztTZ2A7Vv9g8pAt8%2FSM7knvFwUZvMj6JU8Tiv6dGndBEUw1srg1cQJvnw2UEMtSW8QH%2BJZHZJQZxMhztLq1lg4dL4MdZEX6oQC1iAfUXMtnMMHtTO6y5tJFt85QI26SNCzHPF93xGwZQ%2BXymdBnAeSow2uXmBsdk2rrGgX00EQLFkocvopo7ENWZamZ0IzDjXGnv78wLDnVl9vsB0%2BLaWQd4E9VDGV%2BnfSMoq997ardTfXyHh38DY8q78ndAG47w%2BLyTQLG1HiJaUHqLONps37ykuKl3Qd%2FTB9JPoBjCNa1w%2BKxZFI%2BxPcjcdqUvn832AeJwj3wlY8QrkBCF3jRCHIsFHmld463wwpgkg%2B1rUPB72fFQ2lp3sentPKMshzC7Cy2AMLXdob8GOqUBzeniVdP1C0fZcd1UhNlBWRXMK0U4lfAINuEEl4HPYF9kQ0wC7ElGjJxb4QGFwqhBDSb97D9jb2PHVewuJR3hQqhFQ%2BNGB7fI1975CjtePOlc2LSoa9jLNKiULkw91hOj5PFjouNq7H%2BX9u1CdQzoQrmu%2FOJQnBRWaQfRycRLDoQ2DFiARfw%2FjZ%2FXJZ9HRIfS32uzrZ3mI2Pt08mMjdTPrCazxvLJ&X-Amz-Signature=b4dc611bc2baa14f58afbd2a07ade410f6e6d1f61a972f8d656e5d31f4df411f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
