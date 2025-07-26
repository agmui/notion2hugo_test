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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJKXGSV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGJ6%2Fun%2BLH%2B1n7Jk2n%2FrqxwKC6bLP39qjmaUofazFq5KAiBVhtSbRXBhZNSwmd2uB%2B92%2FePorBp5fc2LAqBnszQXUCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMBH6AHvP8diPLYRW%2FKtwDZbn8MNGt90MgHX%2FyCiNk03Cpt04O%2FvWxjKvUfDCl%2FQZJ%2F7mdNkP%2FMZ8aCMKODkabjRvPe%2BZGKJLpMykOYS0O7BA7Cyn1MOEGvfMDMFYYB0vyuOONp2aziEPFfWUnNny%2FKA%2FDJOaV2jaRV4dV1eA0k77qySxV%2Fgwy8x4RVydBdhfI1mXhroLyjxnvX4G0pmWa5857gnmwfMczlxpg7pVV4xSi1BOhM1UUpVZbv9PDjT7Dtcx9dD3%2FTq40krST48lbkKB%2BloEg1NhcBkHKBZAXPRIs5J2%2FaB4%2FSaqGJjt8FHIJQwjt6sVnZikO7%2F%2FJsMy%2BvBpzaOh0wwysddWseuwYOnwmD5yUxj94ZoP7jkTbD7WYvVeghi7YXLibpCpYPX%2BnHhx31KX1I0e%2FPyD1ku%2B%2B%2FABF3MgyNUuAd%2FyzOH6Mt0krjlJdunYMYHkyktfgCoWxkQKYfJP97cojSOOXJBAj36CaFPHiclj%2FLYx%2Fc8zkLthqDbH%2FezGdk0GWJOz382bCpNkkL84b2Rn2Y6XWQFSObzPTr9jjS0QQbs%2FCMbkzAWaI0gha1uO7N2qPAecMEbA1E2cxZTboevjdf2KHumGury3K5ye9MfGywJ59XL94InBM0zTU%2BRJzb8WDLa4wjOKRxAY6pgFcFu%2FJhF7434ix%2BJngYQpQfTFomI9KMOdhv7U9suDSxZTb0EY6NRuz5%2B9jvQkdlqSZz9J5Btg6s1yisdoBSqrVFmYGxPryW%2FdbyKGcq%2FMEgUaau%2Fc0lM4ixMRSm0nTUZV5WsilLxiNZJ8xYeVW9tZwv4NNszxCv5bP4a5YajxOp8JOck3LDWlgep3jWgd%2FNLuUlkqjVMkgrEyAFxHsxppa0izuSk7N&X-Amz-Signature=d3b6da3ca41c3f1e6d75a6a6140e69a8238f44eb5d90b8489c67fd92725caaca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJKXGSV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGJ6%2Fun%2BLH%2B1n7Jk2n%2FrqxwKC6bLP39qjmaUofazFq5KAiBVhtSbRXBhZNSwmd2uB%2B92%2FePorBp5fc2LAqBnszQXUCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMBH6AHvP8diPLYRW%2FKtwDZbn8MNGt90MgHX%2FyCiNk03Cpt04O%2FvWxjKvUfDCl%2FQZJ%2F7mdNkP%2FMZ8aCMKODkabjRvPe%2BZGKJLpMykOYS0O7BA7Cyn1MOEGvfMDMFYYB0vyuOONp2aziEPFfWUnNny%2FKA%2FDJOaV2jaRV4dV1eA0k77qySxV%2Fgwy8x4RVydBdhfI1mXhroLyjxnvX4G0pmWa5857gnmwfMczlxpg7pVV4xSi1BOhM1UUpVZbv9PDjT7Dtcx9dD3%2FTq40krST48lbkKB%2BloEg1NhcBkHKBZAXPRIs5J2%2FaB4%2FSaqGJjt8FHIJQwjt6sVnZikO7%2F%2FJsMy%2BvBpzaOh0wwysddWseuwYOnwmD5yUxj94ZoP7jkTbD7WYvVeghi7YXLibpCpYPX%2BnHhx31KX1I0e%2FPyD1ku%2B%2B%2FABF3MgyNUuAd%2FyzOH6Mt0krjlJdunYMYHkyktfgCoWxkQKYfJP97cojSOOXJBAj36CaFPHiclj%2FLYx%2Fc8zkLthqDbH%2FezGdk0GWJOz382bCpNkkL84b2Rn2Y6XWQFSObzPTr9jjS0QQbs%2FCMbkzAWaI0gha1uO7N2qPAecMEbA1E2cxZTboevjdf2KHumGury3K5ye9MfGywJ59XL94InBM0zTU%2BRJzb8WDLa4wjOKRxAY6pgFcFu%2FJhF7434ix%2BJngYQpQfTFomI9KMOdhv7U9suDSxZTb0EY6NRuz5%2B9jvQkdlqSZz9J5Btg6s1yisdoBSqrVFmYGxPryW%2FdbyKGcq%2FMEgUaau%2Fc0lM4ixMRSm0nTUZV5WsilLxiNZJ8xYeVW9tZwv4NNszxCv5bP4a5YajxOp8JOck3LDWlgep3jWgd%2FNLuUlkqjVMkgrEyAFxHsxppa0izuSk7N&X-Amz-Signature=f5833db287122e32792c895dcf9e85a3d217cf345315598e7d835d12fd8792b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
