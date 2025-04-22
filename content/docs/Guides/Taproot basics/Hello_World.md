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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOVYXOBK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICYKt4%2BiyK8noPFjEcSIF1rsSLCA%2FtSqmf9asiQslU%2B%2BAiBgVkDE0MKEfb3QXoAhCKzjueVF9I37afe%2By5FJIwAHXSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUFxIk5qcpLg%2BJP1rKtwDydIpJCKP9Wb%2BmoFimeMD4a482W%2Fdqp27avldUDp4%2F7wp73VaaLCNIOkBYvqrWlhJSn5Kjj95tZhUqwsCPu68KQEw41KseJ%2BLVu%2FLiv1CD9alBJG3sJcVzyD5itl7wdeWwwcKOt%2FPyLGcq4LdTts%2Bdvo3YpqCr6HbcMmcnV27CHXfPaedUAU6ReesoQh%2FnHAF0SOnyi9N7DGn1pTCjoppgqK73FL97p3IDi6UPHiPlRnXBolnHk%2FykEZKkOIf07ZqOQA08S2kQpiOvhH0sRM%2FtNbsqImNIcRVNKn9c8%2FbXZ8fiXMM3oFs1LxWkfvtRklCqw9PvKpL2DW3nHN%2F6jn%2FXrJgirTjqxMMs%2BAVDLidMI8Ezw2HHHIssvcXYELBXlLjiWq3MUBkKGScHb2VltW%2F6lYgBYqy93NN1QFfCBWieuvQmQexWrRoNNPEY4N115lL8pgAeICn8ZdduX4jLeu%2B2MfqqIn17mP46rtncmW%2BVB%2Fu4ZKhGDcO7TaWbn%2BnWrUzLduFfHmNw8KGY1NUobEkukDycT1VQtS2O6LLOPYljNPvcrscVaiNG5UpzcOUsWB%2BdTdsDMxYhRT0zGQo1KlcgJNo9o6sdMa%2BBtKWwR%2FDzb10z8E0O2csvryqERAwp4udwAY6pgECDK0AoKM%2BVAQpJZZ77mhJ4OVmXhbBpV1TVDXXDBwAQgEit5yTpwM8zqgwAJD5%2FH0RFxueEN44kpE9w4MDfwKIYoDZEa9bcarsLFVBjaYB8AACMtUhLXgLiVgo5KisbqaOSfenFAoOEVQGgHLiLGKtHsmRRoLB6I9hrgxW6FfEV1NULhBwLmKq%2BH8gRP6toVkESt%2BfdEwGXM%2BZ9xcddDMIJQAluB0W&X-Amz-Signature=cd81db1030d7bb2cb359d47ac33d365b789d2b211b6df7de32acfa771d3f4f93&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOVYXOBK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICYKt4%2BiyK8noPFjEcSIF1rsSLCA%2FtSqmf9asiQslU%2B%2BAiBgVkDE0MKEfb3QXoAhCKzjueVF9I37afe%2By5FJIwAHXSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUFxIk5qcpLg%2BJP1rKtwDydIpJCKP9Wb%2BmoFimeMD4a482W%2Fdqp27avldUDp4%2F7wp73VaaLCNIOkBYvqrWlhJSn5Kjj95tZhUqwsCPu68KQEw41KseJ%2BLVu%2FLiv1CD9alBJG3sJcVzyD5itl7wdeWwwcKOt%2FPyLGcq4LdTts%2Bdvo3YpqCr6HbcMmcnV27CHXfPaedUAU6ReesoQh%2FnHAF0SOnyi9N7DGn1pTCjoppgqK73FL97p3IDi6UPHiPlRnXBolnHk%2FykEZKkOIf07ZqOQA08S2kQpiOvhH0sRM%2FtNbsqImNIcRVNKn9c8%2FbXZ8fiXMM3oFs1LxWkfvtRklCqw9PvKpL2DW3nHN%2F6jn%2FXrJgirTjqxMMs%2BAVDLidMI8Ezw2HHHIssvcXYELBXlLjiWq3MUBkKGScHb2VltW%2F6lYgBYqy93NN1QFfCBWieuvQmQexWrRoNNPEY4N115lL8pgAeICn8ZdduX4jLeu%2B2MfqqIn17mP46rtncmW%2BVB%2Fu4ZKhGDcO7TaWbn%2BnWrUzLduFfHmNw8KGY1NUobEkukDycT1VQtS2O6LLOPYljNPvcrscVaiNG5UpzcOUsWB%2BdTdsDMxYhRT0zGQo1KlcgJNo9o6sdMa%2BBtKWwR%2FDzb10z8E0O2csvryqERAwp4udwAY6pgECDK0AoKM%2BVAQpJZZ77mhJ4OVmXhbBpV1TVDXXDBwAQgEit5yTpwM8zqgwAJD5%2FH0RFxueEN44kpE9w4MDfwKIYoDZEa9bcarsLFVBjaYB8AACMtUhLXgLiVgo5KisbqaOSfenFAoOEVQGgHLiLGKtHsmRRoLB6I9hrgxW6FfEV1NULhBwLmKq%2BH8gRP6toVkESt%2BfdEwGXM%2BZ9xcddDMIJQAluB0W&X-Amz-Signature=e562f48fc6241f009ce18c50568b9209eaecaf8958d08bbeda137dd78cc7d4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
