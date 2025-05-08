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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5LNKFC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQp7fmwkmXxYct%2BpUBypUPSXApclcCJM%2FkmTKi5XuUEAiAWFp1kPRz3zCrEggbR9ehafkoRBYQo8zSFalbyfEU3DCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMqwcQXdZ9dphgEE04KtwDVFS%2FWVrUWa4Wji8xP3yJAJvXDNjgwO6J09NjvvTU1I7NY1S8jKdlKcOSa1xn0bJFo%2B2TM6kbMRXtHFnZO3SdS%2FwEW3N6hKDQOfvHk3Ki4ZCdGVY6%2FiCZQJsbvOfejYgKEPrO2z%2BrPmJDEB%2BnkTae%2Bd8sINsd7BgQUe%2BFNOSNilUDsCG%2Frg8NGnDFCCW1LiboKIIrAPtEXzlX02kbY7aJULaWlBlkAO5Ga33%2FtTlj%2Fkj8lCawL0829uewawMTDccItEzk4eDXYnzQ8EV%2BrtKw7nlRG2HPQO4whdGWdV%2Bmq9JdwtHyOQH5gZEjSlrwiKHfUELeqyaN3ZklLkAfjoNQZs2PsyxQ6FbS7pytHRNtKwuwUbvTmudjxtyzoX1fMB%2B%2F6ohvQD2VSpxZ5gDlBx6ag%2BIJ%2FXBZTuDGM7qhBzLjwV3w%2BMlozyWtON0%2FHyHEnM1XiUmrHyQ8yby1zQ2dF5jdRMb8ws6Ww0lU00VjW1YardWV17e2sQ7SNERVyv6mn8baGV2YU%2FGOnc4%2BagXMCbD98t0i7wDyhjOyCQKxVPulgZ0Wgd5KJK%2BdpUAnbljDiSHcrO3DHeYiu%2F7n1GixH%2F8IET6qn6VzzItKi1oAInskN72lyv%2B3TfVdAi8Aa8MwoprzwAY6pgEAun2GhUEVRVk%2BzVkoSQIY4yyCpfxHuNFPaRxJSKIXzufk8dSHjrBy7rzqEn3ZDc8i%2BDCuEKxNvloNa79zgz3et95Zn14n6htJpfR6AqacMd%2FpG5hFKeRm6CaubcvE19LYDeYVRxvFLm6Ub6RpBrZq%2F6BDgEkADlieQ0y3%2F5jUMMwEv2lTM6SbH1NnHARce6Bcq%2FQlIYEb2qhbOEqd7p2C4tM5JOby&X-Amz-Signature=38237f16075bbe1f16280f98823f93a83659e99f0080c6d78dcbfc94743941b2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5LNKFC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQp7fmwkmXxYct%2BpUBypUPSXApclcCJM%2FkmTKi5XuUEAiAWFp1kPRz3zCrEggbR9ehafkoRBYQo8zSFalbyfEU3DCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMqwcQXdZ9dphgEE04KtwDVFS%2FWVrUWa4Wji8xP3yJAJvXDNjgwO6J09NjvvTU1I7NY1S8jKdlKcOSa1xn0bJFo%2B2TM6kbMRXtHFnZO3SdS%2FwEW3N6hKDQOfvHk3Ki4ZCdGVY6%2FiCZQJsbvOfejYgKEPrO2z%2BrPmJDEB%2BnkTae%2Bd8sINsd7BgQUe%2BFNOSNilUDsCG%2Frg8NGnDFCCW1LiboKIIrAPtEXzlX02kbY7aJULaWlBlkAO5Ga33%2FtTlj%2Fkj8lCawL0829uewawMTDccItEzk4eDXYnzQ8EV%2BrtKw7nlRG2HPQO4whdGWdV%2Bmq9JdwtHyOQH5gZEjSlrwiKHfUELeqyaN3ZklLkAfjoNQZs2PsyxQ6FbS7pytHRNtKwuwUbvTmudjxtyzoX1fMB%2B%2F6ohvQD2VSpxZ5gDlBx6ag%2BIJ%2FXBZTuDGM7qhBzLjwV3w%2BMlozyWtON0%2FHyHEnM1XiUmrHyQ8yby1zQ2dF5jdRMb8ws6Ww0lU00VjW1YardWV17e2sQ7SNERVyv6mn8baGV2YU%2FGOnc4%2BagXMCbD98t0i7wDyhjOyCQKxVPulgZ0Wgd5KJK%2BdpUAnbljDiSHcrO3DHeYiu%2F7n1GixH%2F8IET6qn6VzzItKi1oAInskN72lyv%2B3TfVdAi8Aa8MwoprzwAY6pgEAun2GhUEVRVk%2BzVkoSQIY4yyCpfxHuNFPaRxJSKIXzufk8dSHjrBy7rzqEn3ZDc8i%2BDCuEKxNvloNa79zgz3et95Zn14n6htJpfR6AqacMd%2FpG5hFKeRm6CaubcvE19LYDeYVRxvFLm6Ub6RpBrZq%2F6BDgEkADlieQ0y3%2F5jUMMwEv2lTM6SbH1NnHARce6Bcq%2FQlIYEb2qhbOEqd7p2C4tM5JOby&X-Amz-Signature=a9d3b8b54def33cfd319986f16aa14e73a30cb97861004fb8158db7c42e4df14&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
