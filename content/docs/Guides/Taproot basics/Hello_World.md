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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y6OXC76%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8J4pa%2BwkP%2FIrWSxIf9I6%2FeXSIKX7szBmxd5R5mTl8dAIhAI6palnkZCeIKXgyru3XX9a8dD54XouOwjFpRCM%2BPCoWKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEcUMrTQbUJG1MtJEq3AN1FMTxUeP3pil%2BgccYIFmMl%2F%2BV74DYRo8Sy2kROW2kiWfiFJsOnqVIC40XSNDUZpty%2B3s2b7XGCd4TC1iVEydjOK6e7%2FxrlX1nsq8DXArE1PzG3aBUJVGK2u5rSNsby5R9poCmDOdvmNZePtzPVV5vg4E6FjBj7b3UgLwev98y6YlIHfpKdV8OpQW8M9mnpdxf1LP%2Bd%2F2Fcrw%2Fc2Cwj0IL%2Fkf8OZhTQzseXN%2BB%2Bp9H4xj6YCTCC5sxUF5GZrmlC6K9LtOofsPJ3zFOiGzvl0um20JWozkFvwzl7lLohpvtZMhB0T%2BiJmbiVSRoz0vb9kQ3DbCif8xABwX23Kx6AXW9G2YcL1cNPb0T4vtfMtw8crConxEdKSA8F6b50fXRLU2k9qa2UOHvAF%2BHuuKPZ4rCNOZpTiCONI6p%2FD15awZgFMdELWSfTTnC%2B7xKpL2ieLVL0nWtEa1fxsgvMV5dW9ZD7uUqh6nPXAn8ho9rSYbQutH61YPgV40PDxCTt%2FnogvmBVB3fTS7bEMR49WWqNl%2FSLfy4Lwrs8QlR0QmvRQOxiuMnrmth87%2FGeHDMgvAUVM%2Bb3PyKVUCCGVwGSt3JK2NQwDH8XfWJSqk9SS1wkZEZRWYxNN%2FRGOAD6BsjcjDN67HEBjqkAbFkTECzkxQvlyv9%2B%2FQUwlpp1panc%2BWKmgG3IHUbMwOGb%2FfzaEdxaDG7bofuYf5QG74jb49kwQ7mYlKVDBJMR0xUmH4ByKBxK7bi5aYJfJf6sw6KffXy6hP3%2BR03vfCQuCYb6KvRCRzosw0C1xWefIzZIMfYVmY0un5ZgI93eU2FVNUfmkL4%2Bx%2BRHY7umK1Z4isf%2Be60EiOF2Nog7i5RJcGeatBO&X-Amz-Signature=7963948f020a85a1fda81867e7fbfe45c269eeaeaa3c6f66ec2bf49492150021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y6OXC76%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8J4pa%2BwkP%2FIrWSxIf9I6%2FeXSIKX7szBmxd5R5mTl8dAIhAI6palnkZCeIKXgyru3XX9a8dD54XouOwjFpRCM%2BPCoWKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEcUMrTQbUJG1MtJEq3AN1FMTxUeP3pil%2BgccYIFmMl%2F%2BV74DYRo8Sy2kROW2kiWfiFJsOnqVIC40XSNDUZpty%2B3s2b7XGCd4TC1iVEydjOK6e7%2FxrlX1nsq8DXArE1PzG3aBUJVGK2u5rSNsby5R9poCmDOdvmNZePtzPVV5vg4E6FjBj7b3UgLwev98y6YlIHfpKdV8OpQW8M9mnpdxf1LP%2Bd%2F2Fcrw%2Fc2Cwj0IL%2Fkf8OZhTQzseXN%2BB%2Bp9H4xj6YCTCC5sxUF5GZrmlC6K9LtOofsPJ3zFOiGzvl0um20JWozkFvwzl7lLohpvtZMhB0T%2BiJmbiVSRoz0vb9kQ3DbCif8xABwX23Kx6AXW9G2YcL1cNPb0T4vtfMtw8crConxEdKSA8F6b50fXRLU2k9qa2UOHvAF%2BHuuKPZ4rCNOZpTiCONI6p%2FD15awZgFMdELWSfTTnC%2B7xKpL2ieLVL0nWtEa1fxsgvMV5dW9ZD7uUqh6nPXAn8ho9rSYbQutH61YPgV40PDxCTt%2FnogvmBVB3fTS7bEMR49WWqNl%2FSLfy4Lwrs8QlR0QmvRQOxiuMnrmth87%2FGeHDMgvAUVM%2Bb3PyKVUCCGVwGSt3JK2NQwDH8XfWJSqk9SS1wkZEZRWYxNN%2FRGOAD6BsjcjDN67HEBjqkAbFkTECzkxQvlyv9%2B%2FQUwlpp1panc%2BWKmgG3IHUbMwOGb%2FfzaEdxaDG7bofuYf5QG74jb49kwQ7mYlKVDBJMR0xUmH4ByKBxK7bi5aYJfJf6sw6KffXy6hP3%2BR03vfCQuCYb6KvRCRzosw0C1xWefIzZIMfYVmY0un5ZgI93eU2FVNUfmkL4%2Bx%2BRHY7umK1Z4isf%2Be60EiOF2Nog7i5RJcGeatBO&X-Amz-Signature=b27047a10dfc81f1780afa786b5e27dc265625e1d34d683e88f2343d30a29945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
