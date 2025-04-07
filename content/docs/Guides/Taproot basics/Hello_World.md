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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFTV6D2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9HZL3hb2xsFh%2FN93bA2dQQ%2B1fmnt7tmhw4kmP%2Ba5BSQIgbBpj9LxV2jr53xHyQYfbflh9eYn7PGbujmCvcssjHrIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOEjBmFc%2BY%2FnGwjSbircAwxfId9udlzDLioPJXe3ATF%2BPp%2BKQkYFxgYQA520O9E86uioYJdoGoFzA6eINU61S%2F%2BdJlJ2MeJ%2FB0xKAW5kSYD6UNCoS8ZDLmNtxCl6zt1%2FO3v%2FBonq5QiDT9zEnkZd4ZXJdxYoVgZUZ5wTBMvbkmWDQ3hKuRXzdntlAg88%2BYsFKgOXx14X3aL2%2BX5d42PE%2B%2FzpuwqMUahNRp6DbRAMWI0zXofW%2BaB3q92eNWoYkBWEDEvE2tNQyBTF857P5Jr9scuDUA3E6Og0gXYSahJBUgUiJbC4X9tnSaBaSYI4oiePHkJmbQjUjomaav0OYqHnPbYbMxPyl9MQBp76kqJQgux5Dk2PGKfdW8FHyJYuVVVHXs4IEjvsU5I1fuCbQ2jfH7DnaaSduFHu%2FOd23VPCcA5QwIAMzi%2FyHmIxEGqdbhRjdmG%2BWZnqhlGsim7mtbj7BZZQgW8xHZKfS5AjwI%2BOaFXZ4CuDP%2BDzAmErMhcFlVl6h8xmwzPRGx0bLIuNbOz7x8ABIgO5KVuPcRS%2Fs9ETFhkVRqVyGPpw5dHWvtRwyBLUXG61aM5ieZL6lKzS9lPu2XVu8mQHkH5%2Bo9xxIXS5ee%2Fui%2F2INe9D7w1kXZ21UB5HhaGFwEV%2FqKJow2n%2BMM6k0L8GOqUBV4HPD7WIshiLiEepFVmHMYJjDYv%2FqSM4j7125PhUNAxmqwsGBQIt%2FsZIy1CZiGBuAfUGX%2FeoNrk5xZyUsx22ANafqfS462Cz3La%2Ft2ZB57UPQiVkkJZFX%2FrFsFaxbnIHT1iXxVwnTlcUjJZBYsK%2Bw5vKFgLBvgRamKqjqQBr8xEx0YBHDwnxDVUrIixH3EDHDCNPmjP3cmevNsU7%2Fjh0SIgmR%2BnB&X-Amz-Signature=281ee26bf024cf1c9f08a285c7f5711888c540dd1a7fa5d7f65618f4a837dc67&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFTV6D2%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9HZL3hb2xsFh%2FN93bA2dQQ%2B1fmnt7tmhw4kmP%2Ba5BSQIgbBpj9LxV2jr53xHyQYfbflh9eYn7PGbujmCvcssjHrIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOEjBmFc%2BY%2FnGwjSbircAwxfId9udlzDLioPJXe3ATF%2BPp%2BKQkYFxgYQA520O9E86uioYJdoGoFzA6eINU61S%2F%2BdJlJ2MeJ%2FB0xKAW5kSYD6UNCoS8ZDLmNtxCl6zt1%2FO3v%2FBonq5QiDT9zEnkZd4ZXJdxYoVgZUZ5wTBMvbkmWDQ3hKuRXzdntlAg88%2BYsFKgOXx14X3aL2%2BX5d42PE%2B%2FzpuwqMUahNRp6DbRAMWI0zXofW%2BaB3q92eNWoYkBWEDEvE2tNQyBTF857P5Jr9scuDUA3E6Og0gXYSahJBUgUiJbC4X9tnSaBaSYI4oiePHkJmbQjUjomaav0OYqHnPbYbMxPyl9MQBp76kqJQgux5Dk2PGKfdW8FHyJYuVVVHXs4IEjvsU5I1fuCbQ2jfH7DnaaSduFHu%2FOd23VPCcA5QwIAMzi%2FyHmIxEGqdbhRjdmG%2BWZnqhlGsim7mtbj7BZZQgW8xHZKfS5AjwI%2BOaFXZ4CuDP%2BDzAmErMhcFlVl6h8xmwzPRGx0bLIuNbOz7x8ABIgO5KVuPcRS%2Fs9ETFhkVRqVyGPpw5dHWvtRwyBLUXG61aM5ieZL6lKzS9lPu2XVu8mQHkH5%2Bo9xxIXS5ee%2Fui%2F2INe9D7w1kXZ21UB5HhaGFwEV%2FqKJow2n%2BMM6k0L8GOqUBV4HPD7WIshiLiEepFVmHMYJjDYv%2FqSM4j7125PhUNAxmqwsGBQIt%2FsZIy1CZiGBuAfUGX%2FeoNrk5xZyUsx22ANafqfS462Cz3La%2Ft2ZB57UPQiVkkJZFX%2FrFsFaxbnIHT1iXxVwnTlcUjJZBYsK%2Bw5vKFgLBvgRamKqjqQBr8xEx0YBHDwnxDVUrIixH3EDHDCNPmjP3cmevNsU7%2Fjh0SIgmR%2BnB&X-Amz-Signature=845bba9c361eaf6d73a049bb17ad0e5ece595e749398d070927a85026ce484db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
