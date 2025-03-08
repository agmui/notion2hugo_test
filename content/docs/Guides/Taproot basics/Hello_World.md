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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3QHQDD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIELu%2BAgZAoTDVmyNBlFUZIb3YzBs7TUmQyYZWIEf9NNVAiEAitm6jde8fNBrzB6IgfzhYPEvndCv8C2P3HzJ79r6jzoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPFqGqEDAwfW5lPQeSrcA356Lm0V2Ng6NTlBywaixUBC9eB2q%2FSNeKQQfouyiKrx5VMtd6zcx159ggBT%2FmCWfqC9Gq6El%2B%2BecCGcc0iDkIq9qEG9GnIh8wNifTDMP5LTNTrwEdn0aD%2F7JwwAK%2Fak8WoF9MCMStiCxLIRnDMMaI6WLA9%2FBvbzgcmbx5Jrl9YKsfBNxT9Dmy66bHXC%2FgmiJlUVx3e776tjkdaAjjGhs8S9fp7wnedArPrXHEqoleOa%2BlAfMgdsl5oi4hp305o2UZY2Q7I%2FYJIJRWHvHFDQCaRL5g6s2wcyd2Zj%2Fj0cLylK408gUdx0JE%2BtgV%2BaUrpAlb24SzDLJpOEKCmYuA0g8xBuGKxt3dMsR6g3gaen45VZtKf7W%2F1UTnkhPKaT%2FGnReRmlXRLGKEwgTI1O4nC62zqCzYprD7NhOC8O9YlNvUBf5irZAZ5dSvrJuE4jFOb7ZwLAQiw9VOOu0HA%2F0MU1n5rTgB%2BSrJb%2BkU42iKqpBRGf635Ud44whbqbOJ9O4gSozs1H5f4rk%2Bns0h34fLhZ4N4nSg7cwAML1uOeltLceLBFCuABiIiddR%2FMWLDKhQ16drcrRQYkThv8cjFzsr4ug2B%2BY3UUAtt1LqKgkDzo5RvyARrCq4h%2Bre9D%2Bv6VMJSDsr4GOqUBK0RRrYy39pQZGqK8pCdkMRdTIO8n%2BUaMDur2qtQVlrWhvKUYak7kXkS7OKAgNJLtaj%2FNAtpmPlwiADc0q9qt4CPOo%2B1LJGTBwulaUJuoqhjlI%2FzaTzQx19jo7ON61%2BoXiasV6xZcuOGUhNKg3cm2YKuwjKVp3b6bqLTr3UC%2BD%2BguCXyp674IqFOW8XXTvNea%2F9bXluTQ4yaSQf%2Bz8jETYlEwI9QY&X-Amz-Signature=82f8e2c518e48784179d44d399935da92ef646fab61d1877bbd3352005261faf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3QHQDD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIELu%2BAgZAoTDVmyNBlFUZIb3YzBs7TUmQyYZWIEf9NNVAiEAitm6jde8fNBrzB6IgfzhYPEvndCv8C2P3HzJ79r6jzoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPFqGqEDAwfW5lPQeSrcA356Lm0V2Ng6NTlBywaixUBC9eB2q%2FSNeKQQfouyiKrx5VMtd6zcx159ggBT%2FmCWfqC9Gq6El%2B%2BecCGcc0iDkIq9qEG9GnIh8wNifTDMP5LTNTrwEdn0aD%2F7JwwAK%2Fak8WoF9MCMStiCxLIRnDMMaI6WLA9%2FBvbzgcmbx5Jrl9YKsfBNxT9Dmy66bHXC%2FgmiJlUVx3e776tjkdaAjjGhs8S9fp7wnedArPrXHEqoleOa%2BlAfMgdsl5oi4hp305o2UZY2Q7I%2FYJIJRWHvHFDQCaRL5g6s2wcyd2Zj%2Fj0cLylK408gUdx0JE%2BtgV%2BaUrpAlb24SzDLJpOEKCmYuA0g8xBuGKxt3dMsR6g3gaen45VZtKf7W%2F1UTnkhPKaT%2FGnReRmlXRLGKEwgTI1O4nC62zqCzYprD7NhOC8O9YlNvUBf5irZAZ5dSvrJuE4jFOb7ZwLAQiw9VOOu0HA%2F0MU1n5rTgB%2BSrJb%2BkU42iKqpBRGf635Ud44whbqbOJ9O4gSozs1H5f4rk%2Bns0h34fLhZ4N4nSg7cwAML1uOeltLceLBFCuABiIiddR%2FMWLDKhQ16drcrRQYkThv8cjFzsr4ug2B%2BY3UUAtt1LqKgkDzo5RvyARrCq4h%2Bre9D%2Bv6VMJSDsr4GOqUBK0RRrYy39pQZGqK8pCdkMRdTIO8n%2BUaMDur2qtQVlrWhvKUYak7kXkS7OKAgNJLtaj%2FNAtpmPlwiADc0q9qt4CPOo%2B1LJGTBwulaUJuoqhjlI%2FzaTzQx19jo7ON61%2BoXiasV6xZcuOGUhNKg3cm2YKuwjKVp3b6bqLTr3UC%2BD%2BguCXyp674IqFOW8XXTvNea%2F9bXluTQ4yaSQf%2Bz8jETYlEwI9QY&X-Amz-Signature=7a25d1a855db9f62fc0697a0e04b78e409b34fcf5b56dfad3bc507fcb5ec56e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
