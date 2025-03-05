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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPRCYSH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9fq0fOMF2BIRZbKBYYVqiGmeznUSpaoAb8Vq3I78EFAiA1oF87kCIOTJ5yNBGYZo0ciYSZCrKq7IC1YL%2F1JrquVyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDE%2B9n1enG9ZFsUfPKtwD2x6nGtaarj5fuhhXVIdZgcJWSyHVkIJY1XQ%2B6pj7sv7%2FItn%2FbCFwBLJMj5zYTtWOY6jDOXynESIRHaiSiJMATw8runGwuMD%2FUgFHEu%2FVhOE3bwQPzwwYp1iu%2FPD%2BhRLkZmBa%2BEYg0B7IyoFu3bPNbx8x37pVEqKxhEhVkY9Bjy2p%2Fpy37TjgYnwndnXC4lFljRGcmgClWCVd8rkjOabMnVKPzHRYQAsZtSFIhdbybg2p2h0A38z9BKx6A8dvCRuIAJpyr1c7Z3Cja8Tqp%2Babb5JxIdZG6Wfp2TMOhz%2BPD%2BdEgb3sFtepzwOcC91RUYP1ern%2F2ThcC%2FUqkehoAULZb8rBl63wXvkN20fUjtAzIZ5m%2BcB13jmUhyz5dVTn%2B16Tt5TBMTPIIS76koE11MnvE0egeWXT3mvKQpW0%2BWLuCKj26XDOiIbWrzx0H5%2BmqrEaUX3yK8nRuj6h9XcRWET52IV3cmoB0LkOlFKy6Rc5AS83x420R%2FEXPeo%2Fom97apSMdsfkq%2F4EajD2mAEH5N9sLZZWios%2BhB373iCrm3lzhxaNlIn%2BuwHUgFXJYp0uM4wjMYaQbONHRYv8jYbNQFhBTzSbIv1cApk6ApiON9TCCm7DzESbDy7s6DNKw3Qw3cmfvgY6pgGwrdXM%2FSU9Vo6A6%2BuvpxZghoqJ1DplOlRFSrK0LrxDsoRKgEWQWgBm1tNvLFEnh99w8egslSvaZKzf7V9d6odq9ZoF0p8Az4rchCecwpXaWboufkdxUwwrZ3PsJPU22cWOZ%2BfBTDrbmE5pi%2B0KGpYkS8mCpbl8G434s%2FBStJV7%2Be%2BSI85FAQHYMphpX6vnyl0ZVSOIV0IVKIgam%2BJW4rVF%2FUOOARcq&X-Amz-Signature=4da3b15d29d9ed2783d4a305f01628aae5adff19b91e7baf06829a1066f25d23&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPRCYSH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9fq0fOMF2BIRZbKBYYVqiGmeznUSpaoAb8Vq3I78EFAiA1oF87kCIOTJ5yNBGYZo0ciYSZCrKq7IC1YL%2F1JrquVyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDE%2B9n1enG9ZFsUfPKtwD2x6nGtaarj5fuhhXVIdZgcJWSyHVkIJY1XQ%2B6pj7sv7%2FItn%2FbCFwBLJMj5zYTtWOY6jDOXynESIRHaiSiJMATw8runGwuMD%2FUgFHEu%2FVhOE3bwQPzwwYp1iu%2FPD%2BhRLkZmBa%2BEYg0B7IyoFu3bPNbx8x37pVEqKxhEhVkY9Bjy2p%2Fpy37TjgYnwndnXC4lFljRGcmgClWCVd8rkjOabMnVKPzHRYQAsZtSFIhdbybg2p2h0A38z9BKx6A8dvCRuIAJpyr1c7Z3Cja8Tqp%2Babb5JxIdZG6Wfp2TMOhz%2BPD%2BdEgb3sFtepzwOcC91RUYP1ern%2F2ThcC%2FUqkehoAULZb8rBl63wXvkN20fUjtAzIZ5m%2BcB13jmUhyz5dVTn%2B16Tt5TBMTPIIS76koE11MnvE0egeWXT3mvKQpW0%2BWLuCKj26XDOiIbWrzx0H5%2BmqrEaUX3yK8nRuj6h9XcRWET52IV3cmoB0LkOlFKy6Rc5AS83x420R%2FEXPeo%2Fom97apSMdsfkq%2F4EajD2mAEH5N9sLZZWios%2BhB373iCrm3lzhxaNlIn%2BuwHUgFXJYp0uM4wjMYaQbONHRYv8jYbNQFhBTzSbIv1cApk6ApiON9TCCm7DzESbDy7s6DNKw3Qw3cmfvgY6pgGwrdXM%2FSU9Vo6A6%2BuvpxZghoqJ1DplOlRFSrK0LrxDsoRKgEWQWgBm1tNvLFEnh99w8egslSvaZKzf7V9d6odq9ZoF0p8Az4rchCecwpXaWboufkdxUwwrZ3PsJPU22cWOZ%2BfBTDrbmE5pi%2B0KGpYkS8mCpbl8G434s%2FBStJV7%2Be%2BSI85FAQHYMphpX6vnyl0ZVSOIV0IVKIgam%2BJW4rVF%2FUOOARcq&X-Amz-Signature=7468b643773eb59fc10fc9585c3ba57651c8d673156c203588fc373afc70154a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
