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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MYBEOJZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIB8HNVQRol4CLpQ2G3%2F99%2FBtIXcvPHoV9Yi9sDxYS%2BYbAiB6rXEulPrH1ZVGHS8ACCAt6JzlxuCAPAHZp%2BDQSaCaSyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWIPWTeekfKWdZQ9IKtwDmbkcKHzsZ8dc1i8xQsMtT1GKhlj3eUFxpfsaoqdEzvDxZumvr4HD%2FQg2GSeR3iSmHpjDYiWqw8i%2Ft1z5VdXFPHqdXPS7YcHK%2FX9O92N9yctRAd21tH7a9uLQqdQbHIPVty8yma8bbifFOtEVXmJy1te2O8DEZYxBMYF7Ki%2F64A5Qox7qYNlXRTxwXQECZHsuxoclN%2Fy45LN4a%2Bpk8cej4DiyHfQVbaD4Zpz6chircGLcqp2qZPAum9LYsYYFKkt6IR4oo%2BPMHQW0szkvr%2FUZHZHp6U6Nl7uJuYA2rGGzUu6bYNUfmIUoFxo%2BucoCewnErEhpIV8LLOWg4xyW7iFW8Ad%2BA3Xy1QAW5wfzJTKCIPR5juljTe5p9gL9WKojnzaPLS71Iqela79q%2F%2BP4F9YpEa5xf5%2BuyEfr%2FgaxeEiJSgtck1Q99uI8qjuCCvbjVrL9rVLQ4i5cRn5qFr4J5g%2FgDciW90QzTBenZyWKDN0Hv%2FctcF4vqntSJuY%2BkbVm6%2FPi3mA%2F5hqQCY2hWG7zB5dwy%2BUtvReEq%2BmXJKPQq2dcA%2F5X%2BE1BRcgbqMx26XIbsEzhR998t%2FMmnUt%2BOM3fZcudUnZdFHgHJReC%2Box2UjBZ505xACxH5at9fCdMa9QwhbWfvwY6pgHygfhV1QJWVqBOWeNVbJdZTmVZoPvgHHkQU5Taa01dyhm3ql%2F6dmkji%2BNiDNfMOCBycYvkH4uxGVke60o1j0hAgy82rT7cdFPaYVXPDfBMCXneRf8F3hOCBMkKQIoDcbC1BnE%2F%2FMPmZP8zEE3MijptLYK1gIXnqfPXM%2FYwMVlZx7koKUxYt4Y8r83igeoQqQxyAz9pNHKQD%2FRLdeqF65bkImVSeAF8&X-Amz-Signature=bd1775f6302fec987fb314a2c4ca2411c0d875de51ca7a9a517a1d8f4d7ad578&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MYBEOJZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIB8HNVQRol4CLpQ2G3%2F99%2FBtIXcvPHoV9Yi9sDxYS%2BYbAiB6rXEulPrH1ZVGHS8ACCAt6JzlxuCAPAHZp%2BDQSaCaSyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWIPWTeekfKWdZQ9IKtwDmbkcKHzsZ8dc1i8xQsMtT1GKhlj3eUFxpfsaoqdEzvDxZumvr4HD%2FQg2GSeR3iSmHpjDYiWqw8i%2Ft1z5VdXFPHqdXPS7YcHK%2FX9O92N9yctRAd21tH7a9uLQqdQbHIPVty8yma8bbifFOtEVXmJy1te2O8DEZYxBMYF7Ki%2F64A5Qox7qYNlXRTxwXQECZHsuxoclN%2Fy45LN4a%2Bpk8cej4DiyHfQVbaD4Zpz6chircGLcqp2qZPAum9LYsYYFKkt6IR4oo%2BPMHQW0szkvr%2FUZHZHp6U6Nl7uJuYA2rGGzUu6bYNUfmIUoFxo%2BucoCewnErEhpIV8LLOWg4xyW7iFW8Ad%2BA3Xy1QAW5wfzJTKCIPR5juljTe5p9gL9WKojnzaPLS71Iqela79q%2F%2BP4F9YpEa5xf5%2BuyEfr%2FgaxeEiJSgtck1Q99uI8qjuCCvbjVrL9rVLQ4i5cRn5qFr4J5g%2FgDciW90QzTBenZyWKDN0Hv%2FctcF4vqntSJuY%2BkbVm6%2FPi3mA%2F5hqQCY2hWG7zB5dwy%2BUtvReEq%2BmXJKPQq2dcA%2F5X%2BE1BRcgbqMx26XIbsEzhR998t%2FMmnUt%2BOM3fZcudUnZdFHgHJReC%2Box2UjBZ505xACxH5at9fCdMa9QwhbWfvwY6pgHygfhV1QJWVqBOWeNVbJdZTmVZoPvgHHkQU5Taa01dyhm3ql%2F6dmkji%2BNiDNfMOCBycYvkH4uxGVke60o1j0hAgy82rT7cdFPaYVXPDfBMCXneRf8F3hOCBMkKQIoDcbC1BnE%2F%2FMPmZP8zEE3MijptLYK1gIXnqfPXM%2FYwMVlZx7koKUxYt4Y8r83igeoQqQxyAz9pNHKQD%2FRLdeqF65bkImVSeAF8&X-Amz-Signature=b1444928d8688306b1f3bdb6a966ff08f12e5138680e2ba21a3af47419d03687&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
