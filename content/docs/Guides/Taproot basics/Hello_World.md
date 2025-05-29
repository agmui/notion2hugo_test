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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666VIARMZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk4q%2BSVRg0aH%2Fov1%2Fc2GVeanEnmrZ8SswF%2BGY8Fz1cPAiBarvclcTnL8vxgJTZOarqeKsZESAj5mliHxKGeIMJ3KiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKPbR%2FguulnxUGBkKtwD%2BGQKbFkM%2FIDF6rsnMb0DueIMDC8v5pMKgL7tgS6hEcrBNFHwIjP4GXleHtweCLS0uLkNkb89DsopZiOY2GCP0EUdVFmw9xYUOFa3vGvtWKuEIkG8NrSG3bdNwepeDp9EzxGGuG5jIDQLvi4%2BiXx8PKenORaGgg26gTmvef6wzIWQm1J5zR2HpkDJSrQm0pL1M7QLN44ll%2BKUpZ7MyA0FeI2uoIfrFCFpXNxAZTJF01F2x%2Babt8WZo2iHh7c8%2FKmFANs3rL2cKzDaPNFeSbKQ0yyzGCCDc%2FIUdFyGzrRMW6k4%2FnJ8DhfPPmpyqDKiOUzSbs45SfB1pYqO5bIfjge39kWEj%2FlUCFx1KmKVVmmdVgGomJGhknRVP2%2FRTrdvtMoHCJnGj3mnD%2FO9KoVlNNI5mroZOr5ramT%2B3JvJ1P0HZ824pmYKBhIOj%2BF8BeGLvt1CwMEM7NnNnxqdSXykWlIF21Esvj4CzeVjZfVKrKF5RP0YeBZ1FeTHCgxuyh5AnHJ%2BqixsiQtn5DtK8Nw%2FvfYxa2LuwM0p%2Bmsdp1kZpmzFgIGLKiw%2F5pzCR3tthEtumLRle63WXpmkJlbcvwbJ50QkFd4nqn77Ncb6p%2FM%2B%2F6r1Kn6h6RzDVsP07EVbsSAwlrLhwQY6pgHTFeNoTlpPAgKK2iWvfPvfFwtrjeTKii2heuvD4dMMVJgqNbsUQd7Ff807ocatFXaQP6pZ4srnzwWAuJyFn1PIqcud0ULXbUV6qrt%2BYfxAyzLhEnMBr%2BVMlt8joRLi%2FRHWdSp8n8FyqmMht5sT0LIbN%2BVwKafzGRK9%2FziIPKhkbZpQxIXKPL4z8wVFiLJeEkXBORlk0WuStLMaaBGANAUwdClI2xIo&X-Amz-Signature=a5234e39abcf8ecf1aa58c8f916ac0cf5fc582246d46f8f3ea9fcb0488dcf5b8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666VIARMZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGk4q%2BSVRg0aH%2Fov1%2Fc2GVeanEnmrZ8SswF%2BGY8Fz1cPAiBarvclcTnL8vxgJTZOarqeKsZESAj5mliHxKGeIMJ3KiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyKPbR%2FguulnxUGBkKtwD%2BGQKbFkM%2FIDF6rsnMb0DueIMDC8v5pMKgL7tgS6hEcrBNFHwIjP4GXleHtweCLS0uLkNkb89DsopZiOY2GCP0EUdVFmw9xYUOFa3vGvtWKuEIkG8NrSG3bdNwepeDp9EzxGGuG5jIDQLvi4%2BiXx8PKenORaGgg26gTmvef6wzIWQm1J5zR2HpkDJSrQm0pL1M7QLN44ll%2BKUpZ7MyA0FeI2uoIfrFCFpXNxAZTJF01F2x%2Babt8WZo2iHh7c8%2FKmFANs3rL2cKzDaPNFeSbKQ0yyzGCCDc%2FIUdFyGzrRMW6k4%2FnJ8DhfPPmpyqDKiOUzSbs45SfB1pYqO5bIfjge39kWEj%2FlUCFx1KmKVVmmdVgGomJGhknRVP2%2FRTrdvtMoHCJnGj3mnD%2FO9KoVlNNI5mroZOr5ramT%2B3JvJ1P0HZ824pmYKBhIOj%2BF8BeGLvt1CwMEM7NnNnxqdSXykWlIF21Esvj4CzeVjZfVKrKF5RP0YeBZ1FeTHCgxuyh5AnHJ%2BqixsiQtn5DtK8Nw%2FvfYxa2LuwM0p%2Bmsdp1kZpmzFgIGLKiw%2F5pzCR3tthEtumLRle63WXpmkJlbcvwbJ50QkFd4nqn77Ncb6p%2FM%2B%2F6r1Kn6h6RzDVsP07EVbsSAwlrLhwQY6pgHTFeNoTlpPAgKK2iWvfPvfFwtrjeTKii2heuvD4dMMVJgqNbsUQd7Ff807ocatFXaQP6pZ4srnzwWAuJyFn1PIqcud0ULXbUV6qrt%2BYfxAyzLhEnMBr%2BVMlt8joRLi%2FRHWdSp8n8FyqmMht5sT0LIbN%2BVwKafzGRK9%2FziIPKhkbZpQxIXKPL4z8wVFiLJeEkXBORlk0WuStLMaaBGANAUwdClI2xIo&X-Amz-Signature=a2c49b2391fd715d29cb0443e9b0b99787567da5166e1700010014c85117b932&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
