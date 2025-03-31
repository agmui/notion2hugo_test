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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPUQAO7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCxb1IgH6Dn5Cl%2FxPq5BX6He7JrZwZ2yz%2BbAhzSDldTugIhANqOngBYgAgXMvNHuJniCiywTc5jmc95D5FS4fLJl4sTKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZk2HQWHENL6oj3Xcq3AOLXRVYDUymlGNudKBuKPi0qOPf5ymFvEWutfOJrzlcs4ZsJzIyWkTpx4OodEdpwE%2BlbL2hQn99K9bO%2FSoZGzOobkCSCHSP8EJj%2FJn7GJI%2FDDuVleL39OJdIOXzM11AnfQgl%2FkKR0AI9P8f%2BAB%2BFZazbfQ1kkmgwtF99MVlYZIIyV6S2kWs%2FfgrgmRYub8ciBa1cAS8VtRR977f0Tki42DWssXTA%2FJ%2F1C1DKJRkqxIEJZFRGQZmBrudqlpfdAnyM5Pp51WIq0qMregPqkkUMfU8YF3KyAJkUOzGeBIqtMwvd%2FIgkC4rnfeOHfspkmMV7nKT1UB1mdhEnm%2BIYwPOumA03Y38tD6Prhc%2BEzxu3QGGa6FuHyt5OSOML6nSZiYWUxmIWL4dqi5tL4BCOqH6%2BOB1MmasZgWWrnECPC%2FhbTTnjje6kLNyypcCoebScmG93vlaGNHD1qzz0S%2BdCPqRSQ%2BT5%2BEs3l15wK92Af2%2BeSMEGc%2FLFK27oaMJTNvRjobQprLy5bU%2B4y1bJMjIAVhi2Qa32kpYmzVU7iIGGqcUZwxlxtMcXnruV90QYlYS2oh3%2BPM1x0JsgWhlEEH9X6%2FARkEM9viTl1BccpdudSe0pRtUOPLHw9ZECbHW7VZowTCynKu%2FBjqkAVYyIKFHg2wyr5twYEsYkX3vZuhsGy2eIqt%2FkdO4058Y4A9b3JGFeXEd3KV%2F3I1acCw%2BeEVe1wmh8zygffx9%2FsjFerlk%2B64cWTioCKji%2FH0JB25wwTZo%2FwWEoU%2FInB4bgbixxoEAA1lgFWUGp3tCBizWTFC3d%2BpqNFBWfsSJlnTFr0rdpDVVH5gkf%2B%2BbxST9yLYEtYh65xEq8g4jK%2F4rZebUDwIf&X-Amz-Signature=4d5347e5262b029e107b56a223a710236216bec7c2c1175015e0d16d363d4c74&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPUQAO7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCxb1IgH6Dn5Cl%2FxPq5BX6He7JrZwZ2yz%2BbAhzSDldTugIhANqOngBYgAgXMvNHuJniCiywTc5jmc95D5FS4fLJl4sTKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZk2HQWHENL6oj3Xcq3AOLXRVYDUymlGNudKBuKPi0qOPf5ymFvEWutfOJrzlcs4ZsJzIyWkTpx4OodEdpwE%2BlbL2hQn99K9bO%2FSoZGzOobkCSCHSP8EJj%2FJn7GJI%2FDDuVleL39OJdIOXzM11AnfQgl%2FkKR0AI9P8f%2BAB%2BFZazbfQ1kkmgwtF99MVlYZIIyV6S2kWs%2FfgrgmRYub8ciBa1cAS8VtRR977f0Tki42DWssXTA%2FJ%2F1C1DKJRkqxIEJZFRGQZmBrudqlpfdAnyM5Pp51WIq0qMregPqkkUMfU8YF3KyAJkUOzGeBIqtMwvd%2FIgkC4rnfeOHfspkmMV7nKT1UB1mdhEnm%2BIYwPOumA03Y38tD6Prhc%2BEzxu3QGGa6FuHyt5OSOML6nSZiYWUxmIWL4dqi5tL4BCOqH6%2BOB1MmasZgWWrnECPC%2FhbTTnjje6kLNyypcCoebScmG93vlaGNHD1qzz0S%2BdCPqRSQ%2BT5%2BEs3l15wK92Af2%2BeSMEGc%2FLFK27oaMJTNvRjobQprLy5bU%2B4y1bJMjIAVhi2Qa32kpYmzVU7iIGGqcUZwxlxtMcXnruV90QYlYS2oh3%2BPM1x0JsgWhlEEH9X6%2FARkEM9viTl1BccpdudSe0pRtUOPLHw9ZECbHW7VZowTCynKu%2FBjqkAVYyIKFHg2wyr5twYEsYkX3vZuhsGy2eIqt%2FkdO4058Y4A9b3JGFeXEd3KV%2F3I1acCw%2BeEVe1wmh8zygffx9%2FsjFerlk%2B64cWTioCKji%2FH0JB25wwTZo%2FwWEoU%2FInB4bgbixxoEAA1lgFWUGp3tCBizWTFC3d%2BpqNFBWfsSJlnTFr0rdpDVVH5gkf%2B%2BbxST9yLYEtYh65xEq8g4jK%2F4rZebUDwIf&X-Amz-Signature=a42525fb7db06c5b4c09134e7d3bfb0b8cc9045d15b26385840fd8f3edca07dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
