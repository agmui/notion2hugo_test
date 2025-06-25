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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFTR2AZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCH%2BXt8q%2BDobyORq9T4Zq1ogdPZwd0zSEAUvXjWs3%2B%2BuwIgK3eS2fwXDOyS2ZZUd%2FGF8BemYWgfcdupFcI0YFP36qkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAReP195aWWlGe%2BT5yrcA0sHBnkV85ayZVfM53rqmWWENDZfzx4tnqiIuK9wvzy%2FCSdhxX5KhFh8XXiHk%2B8xyiOsz5K9rUWlE%2Bfoh2iGqbC%2BQSh%2B%2FbzuucNm1xBPjXHILVPQigsl4fWKV2Fl2b9w%2BO99aFxyrdwU2mnx8bzsN3ZK3PVCOqjBx5n%2BJX2Uz2uAhiRx3FaIF2yAl4iX%2BjlwhNga3S1qIKn9lzdFiopznrQl2wzd5ZMDMyu8DCJHhKSaBdZn6IHhqWRTeoPWcUKZAJMqm7OeYl2%2BI9AyudRuDM456Hqjvvaw1XIZFhAk4oJkugLvYb0JssHg%2Fw%2F0eiHeQWCEQJtx%2BKtPM9GkqgH%2FEkglpHA5kfbKwiTQodeOpH9ixflTPd%2BDh1syHtuaSs9tlqCZ2g3LVhjBYc%2Fn5%2BJI%2BZwW31RAktrXkaqSJsVLcPDO5SzNOCa2C7Y0y0vb73UM9hP0PJWoCFxqRYn%2BJQEE5pKpd%2Fy3vP%2BYeAKx9w%2B84rmyxqPGgG78gO6ESSkWxjRoZzz8NYnkZ1h4g6lhPGFsyff8pio3LREY1RV0i%2BVZxNcwSnFsvgw%2B6jvbOSXE9E9mfB4oasZ8513s4zvMM8jPACgNoS1BzansiFTfFMF1k00aef9lf7mNc42D8l7FMOPv78IGOqUBoFT0mhTP2x4%2BeWtru2Je1LqSKEGJ6Kr3yRATKPAvKmXiE%2B0G8wyiu6Z1f21LUQJ5w0Kz5xU9qIsVyfPL%2BHLOiOCJFYv6SLZIbnlvet3Tnw%2B4BXkQXTplSzwuHHXDkd2Tphaj%2BdnVOKht9Ere04ihHseM%2F3pC4iNjbxQPHSHR1cYaDW%2FO7hofeZQWQiE4mfrPTygYxge1qEGCI1eWq%2FcMnDEK98DV&X-Amz-Signature=f3c13dbe81571187bef545b0ff3e7fa837386b4718845b41a9116b382a151276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFTR2AZ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCH%2BXt8q%2BDobyORq9T4Zq1ogdPZwd0zSEAUvXjWs3%2B%2BuwIgK3eS2fwXDOyS2ZZUd%2FGF8BemYWgfcdupFcI0YFP36qkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAReP195aWWlGe%2BT5yrcA0sHBnkV85ayZVfM53rqmWWENDZfzx4tnqiIuK9wvzy%2FCSdhxX5KhFh8XXiHk%2B8xyiOsz5K9rUWlE%2Bfoh2iGqbC%2BQSh%2B%2FbzuucNm1xBPjXHILVPQigsl4fWKV2Fl2b9w%2BO99aFxyrdwU2mnx8bzsN3ZK3PVCOqjBx5n%2BJX2Uz2uAhiRx3FaIF2yAl4iX%2BjlwhNga3S1qIKn9lzdFiopznrQl2wzd5ZMDMyu8DCJHhKSaBdZn6IHhqWRTeoPWcUKZAJMqm7OeYl2%2BI9AyudRuDM456Hqjvvaw1XIZFhAk4oJkugLvYb0JssHg%2Fw%2F0eiHeQWCEQJtx%2BKtPM9GkqgH%2FEkglpHA5kfbKwiTQodeOpH9ixflTPd%2BDh1syHtuaSs9tlqCZ2g3LVhjBYc%2Fn5%2BJI%2BZwW31RAktrXkaqSJsVLcPDO5SzNOCa2C7Y0y0vb73UM9hP0PJWoCFxqRYn%2BJQEE5pKpd%2Fy3vP%2BYeAKx9w%2B84rmyxqPGgG78gO6ESSkWxjRoZzz8NYnkZ1h4g6lhPGFsyff8pio3LREY1RV0i%2BVZxNcwSnFsvgw%2B6jvbOSXE9E9mfB4oasZ8513s4zvMM8jPACgNoS1BzansiFTfFMF1k00aef9lf7mNc42D8l7FMOPv78IGOqUBoFT0mhTP2x4%2BeWtru2Je1LqSKEGJ6Kr3yRATKPAvKmXiE%2B0G8wyiu6Z1f21LUQJ5w0Kz5xU9qIsVyfPL%2BHLOiOCJFYv6SLZIbnlvet3Tnw%2B4BXkQXTplSzwuHHXDkd2Tphaj%2BdnVOKht9Ere04ihHseM%2F3pC4iNjbxQPHSHR1cYaDW%2FO7hofeZQWQiE4mfrPTygYxge1qEGCI1eWq%2FcMnDEK98DV&X-Amz-Signature=a1879203ca79c4c9ee06aadd6be44c2feab09bd0e724c632a791ed5011f85bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
