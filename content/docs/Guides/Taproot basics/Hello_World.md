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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCONKQYF%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE%2FtoTlYQYWjRh01WAjQq85fbF4RImY%2BcTOwS4u0rftAiBSjMV92%2FzZpuJY%2F2GC30eZ57hSUqUlu35SqddA5GN5uCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN0bpo8yVtq%2FXUPDUKtwDbCIAkdD%2F39b%2FidfPeNTdzy2rPaCi04ZTaaeaI8xxJscMltwEWjGDyR6kws3CsgJjRzvrSRyf5aThCpzXA1erRpYhOUB1b4dfrcm2wmwrr6uvEetanUqjpPCYyfLn2ym9oPwLvYrl9%2BWOHgAmKWVwExIdJcNu2U0LH1QDjjXyGUUOSD4MKvwZW7GbdxbGAi%2FQKIlJR2Lx48A5S495GVMrRcr%2F6zQqfBKUSICOIanfByctdIFiA2tq2tOuUbfhWT6LEq08WHdkYqFG7Q4d2oWxnKoBoXT7I7zZQ%2BqYxYpNApLo1sqXcLncAlEl%2F%2F%2FKP1HJ1BtOv8QlYlEWNfvnMAy2eKDbIXeNokq3xn8cRJYZveKuBUa0bA8Uxt%2F%2FWTCVLwB3nl0gvE0KlYgskGIPvmNBasJwduVPizk57qGaMrPq9uVGdlsHzb4kn1sZvbcPAsRwxIHGZKVchUEryqRZh4hQND44zGDnljA98285yA%2Br%2FoaZHoFraOOtUw0PYIMmMX7l6S1Crq3tlKo8FXhd5KQlLInT%2B19Qk79AUJO2k8QBQoPJbI0XM3RUa8PpKjGscPOIKU314TEEy8h98sIjO8nRIhnmmVjt4iK6RS%2FERQyXeCODu0zAe70Fm%2BGYgEowqJe1yAY6pgG79AhEKYyQvYqjF9UipHzmATHB%2FOb2xorbA38mcpWGHSDRtIyC3XAMq0s10%2BiAd%2Bg9OuY5AS3iJlQaFGaoCAa8TCFnRFECdP%2FkfcmHRzK9BUPS0lMXbrX25Ng8kHw7A7yGRpL1Zfky34IstoVVrBKpgpsVeusqHNX8lWcgYZwM8OKNXFZUwj7BhTebfvqwOdg2bvpVO0Le3v%2ByyrXkNMsxDu7Y%2F3uZ&X-Amz-Signature=a6cc98ed6fa36b6f9d1e610fdacd970707111d0c5a93f6f16e322147fc45dfd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCONKQYF%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE%2FtoTlYQYWjRh01WAjQq85fbF4RImY%2BcTOwS4u0rftAiBSjMV92%2FzZpuJY%2F2GC30eZ57hSUqUlu35SqddA5GN5uCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN0bpo8yVtq%2FXUPDUKtwDbCIAkdD%2F39b%2FidfPeNTdzy2rPaCi04ZTaaeaI8xxJscMltwEWjGDyR6kws3CsgJjRzvrSRyf5aThCpzXA1erRpYhOUB1b4dfrcm2wmwrr6uvEetanUqjpPCYyfLn2ym9oPwLvYrl9%2BWOHgAmKWVwExIdJcNu2U0LH1QDjjXyGUUOSD4MKvwZW7GbdxbGAi%2FQKIlJR2Lx48A5S495GVMrRcr%2F6zQqfBKUSICOIanfByctdIFiA2tq2tOuUbfhWT6LEq08WHdkYqFG7Q4d2oWxnKoBoXT7I7zZQ%2BqYxYpNApLo1sqXcLncAlEl%2F%2F%2FKP1HJ1BtOv8QlYlEWNfvnMAy2eKDbIXeNokq3xn8cRJYZveKuBUa0bA8Uxt%2F%2FWTCVLwB3nl0gvE0KlYgskGIPvmNBasJwduVPizk57qGaMrPq9uVGdlsHzb4kn1sZvbcPAsRwxIHGZKVchUEryqRZh4hQND44zGDnljA98285yA%2Br%2FoaZHoFraOOtUw0PYIMmMX7l6S1Crq3tlKo8FXhd5KQlLInT%2B19Qk79AUJO2k8QBQoPJbI0XM3RUa8PpKjGscPOIKU314TEEy8h98sIjO8nRIhnmmVjt4iK6RS%2FERQyXeCODu0zAe70Fm%2BGYgEowqJe1yAY6pgG79AhEKYyQvYqjF9UipHzmATHB%2FOb2xorbA38mcpWGHSDRtIyC3XAMq0s10%2BiAd%2Bg9OuY5AS3iJlQaFGaoCAa8TCFnRFECdP%2FkfcmHRzK9BUPS0lMXbrX25Ng8kHw7A7yGRpL1Zfky34IstoVVrBKpgpsVeusqHNX8lWcgYZwM8OKNXFZUwj7BhTebfvqwOdg2bvpVO0Le3v%2ByyrXkNMsxDu7Y%2F3uZ&X-Amz-Signature=b9fb50b5965b13759f930744953e1299c206c49e5798375b03d836e6a19c9647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
