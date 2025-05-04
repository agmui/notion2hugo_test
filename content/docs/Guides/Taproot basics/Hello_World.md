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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3ODQNQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCzcSss%2BXYlERVflqYcDqI7avrRgg6ZGtpFg2F%2B7vqzdQIgJfUCkDFNQbRUCANKjXlhEQv0rKBrH%2FQfgbhVzq48qecq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDMbi%2BbRo8nK%2BS%2FFw1SrcA0raaEY7bhMRW3fChMk8RG5BGhAHRxD43UqjSRLpa9vLOy55ZZTxckidU1jikmmehW%2F78Tgn8Xq3s6yiZruCF9qmbFgPKZheEeLZNf4LVnEsEdOyqP%2FQ0osT%2BtgRQekJhifq7kdOxE5kB%2B7CWWFW3%2FS0WsA9tYNeY9AaAnkHAGYFeL0PX1cZWMxtBNuy1ivd4%2FJU8lt%2Fyh8ehLSLieIAd2%2FIIJv51LpYrJQplSmuDkcfiNjUSPBoQTAJQyHY4AA5LdTjyLRDc4vWJAEo%2FFo5KiOdVDVllTY6UBCjqiWFM9B4kV6%2FbUILniNqQi0ECZha6NCwisSgtkfJik08wnkqd5krdQBryds6fB975Ff4LrtHSHiHxy%2BpLssd4Xk7YTwmElSVjzOXzo7Fd0F1%2FlON5g2AblmSbN0a1Kie0zDxHoD6NONBSbq53VsRXXypra5BXcLruv1yEfZ8jDN%2F4kc48ytWNxMDyS%2Fu7EeHtD59jnrsWuCaRdv4AKHJjgxb3QVZ0jQb9fIqRQy%2FySj7ntHMFsxwuSWcck1fBBE%2BrpC%2BupsAokQCzpMJatDyoQ%2FUWUECULUNcS4RkYkDday%2FVT0vVk9WUPpjbEB84ICZ2FBuYTqmyua%2F03YG1D%2BnxcCsMOm63sAGOqUBWccPByNBIjmbIwG6OmiQXXjcCCIEQexRnhDgUcE%2B%2BJ9ub8g0cyHRq0DP6RL0ZOZe1BzMMSJjUKlEfLOciuaB%2BmqpFS1LOoYZYtvvzv2r8%2B7mJobdsRsDyJ1hfjbDvrrrnC6C%2F%2FPb78EG310Dkuli%2FWxK2U83PKsCDJLEyHLeq99QQ1DsZy%2FjOoUKFl6IqdcW4LdAmIjdjP%2F3qMJsXpsCjPxgzUf8&X-Amz-Signature=f3b35abff0eaa5aa9ddb1c18198620fe3aa7af4b7f3e1cfebecf55a7e7ff5e39&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3ODQNQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCzcSss%2BXYlERVflqYcDqI7avrRgg6ZGtpFg2F%2B7vqzdQIgJfUCkDFNQbRUCANKjXlhEQv0rKBrH%2FQfgbhVzq48qecq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDMbi%2BbRo8nK%2BS%2FFw1SrcA0raaEY7bhMRW3fChMk8RG5BGhAHRxD43UqjSRLpa9vLOy55ZZTxckidU1jikmmehW%2F78Tgn8Xq3s6yiZruCF9qmbFgPKZheEeLZNf4LVnEsEdOyqP%2FQ0osT%2BtgRQekJhifq7kdOxE5kB%2B7CWWFW3%2FS0WsA9tYNeY9AaAnkHAGYFeL0PX1cZWMxtBNuy1ivd4%2FJU8lt%2Fyh8ehLSLieIAd2%2FIIJv51LpYrJQplSmuDkcfiNjUSPBoQTAJQyHY4AA5LdTjyLRDc4vWJAEo%2FFo5KiOdVDVllTY6UBCjqiWFM9B4kV6%2FbUILniNqQi0ECZha6NCwisSgtkfJik08wnkqd5krdQBryds6fB975Ff4LrtHSHiHxy%2BpLssd4Xk7YTwmElSVjzOXzo7Fd0F1%2FlON5g2AblmSbN0a1Kie0zDxHoD6NONBSbq53VsRXXypra5BXcLruv1yEfZ8jDN%2F4kc48ytWNxMDyS%2Fu7EeHtD59jnrsWuCaRdv4AKHJjgxb3QVZ0jQb9fIqRQy%2FySj7ntHMFsxwuSWcck1fBBE%2BrpC%2BupsAokQCzpMJatDyoQ%2FUWUECULUNcS4RkYkDday%2FVT0vVk9WUPpjbEB84ICZ2FBuYTqmyua%2F03YG1D%2BnxcCsMOm63sAGOqUBWccPByNBIjmbIwG6OmiQXXjcCCIEQexRnhDgUcE%2B%2BJ9ub8g0cyHRq0DP6RL0ZOZe1BzMMSJjUKlEfLOciuaB%2BmqpFS1LOoYZYtvvzv2r8%2B7mJobdsRsDyJ1hfjbDvrrrnC6C%2F%2FPb78EG310Dkuli%2FWxK2U83PKsCDJLEyHLeq99QQ1DsZy%2FjOoUKFl6IqdcW4LdAmIjdjP%2F3qMJsXpsCjPxgzUf8&X-Amz-Signature=5b9250d3f103e99af1d0107db449d7ab1c00642e12a9dfccb17ec3f7f24eebc8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
