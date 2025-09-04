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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NA5XM4G%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWFn1JPVdJ4Ei%2Frv4%2Bz26W5wKg99LoZI3AkpAu7UdhDAiEAk6ys3%2BvBRLecP6BhwkW839ieBzuJrTp3wUoPmN7x%2BD4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBZhe6AxmZZZy7KoHircAwBSHhK7Pf2YkM83aHUg0djSc2FqEgEtOjizOyRg9JNzvfPA%2BICsMDgLM%2FQSNWWih7YGEJ2YzzyG5R3iIxMVd0HotTmjtTM%2Bogo%2FIIRJowqQB9THs7acDVrtxKtUbp1O0ccw3MI%2B8bZvazuMhuSQxVKABpuzqInhl7wb%2B1IU%2FDrBPnz6bmExD79Ru3ORup5cvBQOzQ4baRAC3RQzOb7lNTKBIY3HT3Zex3ccf5KFD2AwYYp%2BK71fr9KjHvExCy9rUwOpyViINL8dSM5IYeJujoETsmMoKukAQSPRjdN%2BRowqMwjCbNpz853MDqKKsprogw9aD5A4zLBIbhIOyEmEZnAZIwYvp6mN3u9HRg6UfdyvkQC7uXVg%2FTH%2BvHIvuRcYcasfVHP7n9fO431c3Wv8V2HYjyvgdg2%2FLVqVu2vdDCBCN6MwbwYL%2FEVOx62F%2Bwo0jnbxYS5k2K7PauKt2a%2B717Lhndl2eQ21V4BwCcZBOMjmbyXFWt0yElahvz9YLpxfw%2F2goubnKib8PCzqNXKjvASzHpFFgnNVbuLzjsYgqZtnW7oweP8tPArr8S8J7bWGPUwSFpWSxBF19cJPz2EHltLjbJJm1KNqdiuOmKIqQb0hvOooc9PQFYr6qxrBMLu248UGOqUBihbTteMEVSt5SHFJ59tWxnPwZWZIrjdYwdcPttZWHVa1aQdvrip7kqPeFceW724ho83rW4os%2FmcaIQrRD2HrzLS3kdEmlSpQINPz7r8EBTmyMxcEmGrVQQNktJHlalef7fU7jNuDhdun6OFqbs62lJsQBIZCVA%2FgBxYVFUiFyo9IE9ghXRQ%2BGJlk7ZAfk8TA74C%2BsSvNJ45yYS6afhQizfMnbisJ&X-Amz-Signature=d1e62df9ed446d807265b1c9a9a7a972ad4c2ad5e3ef74a2477146df5a7ef5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NA5XM4G%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWFn1JPVdJ4Ei%2Frv4%2Bz26W5wKg99LoZI3AkpAu7UdhDAiEAk6ys3%2BvBRLecP6BhwkW839ieBzuJrTp3wUoPmN7x%2BD4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBZhe6AxmZZZy7KoHircAwBSHhK7Pf2YkM83aHUg0djSc2FqEgEtOjizOyRg9JNzvfPA%2BICsMDgLM%2FQSNWWih7YGEJ2YzzyG5R3iIxMVd0HotTmjtTM%2Bogo%2FIIRJowqQB9THs7acDVrtxKtUbp1O0ccw3MI%2B8bZvazuMhuSQxVKABpuzqInhl7wb%2B1IU%2FDrBPnz6bmExD79Ru3ORup5cvBQOzQ4baRAC3RQzOb7lNTKBIY3HT3Zex3ccf5KFD2AwYYp%2BK71fr9KjHvExCy9rUwOpyViINL8dSM5IYeJujoETsmMoKukAQSPRjdN%2BRowqMwjCbNpz853MDqKKsprogw9aD5A4zLBIbhIOyEmEZnAZIwYvp6mN3u9HRg6UfdyvkQC7uXVg%2FTH%2BvHIvuRcYcasfVHP7n9fO431c3Wv8V2HYjyvgdg2%2FLVqVu2vdDCBCN6MwbwYL%2FEVOx62F%2Bwo0jnbxYS5k2K7PauKt2a%2B717Lhndl2eQ21V4BwCcZBOMjmbyXFWt0yElahvz9YLpxfw%2F2goubnKib8PCzqNXKjvASzHpFFgnNVbuLzjsYgqZtnW7oweP8tPArr8S8J7bWGPUwSFpWSxBF19cJPz2EHltLjbJJm1KNqdiuOmKIqQb0hvOooc9PQFYr6qxrBMLu248UGOqUBihbTteMEVSt5SHFJ59tWxnPwZWZIrjdYwdcPttZWHVa1aQdvrip7kqPeFceW724ho83rW4os%2FmcaIQrRD2HrzLS3kdEmlSpQINPz7r8EBTmyMxcEmGrVQQNktJHlalef7fU7jNuDhdun6OFqbs62lJsQBIZCVA%2FgBxYVFUiFyo9IE9ghXRQ%2BGJlk7ZAfk8TA74C%2BsSvNJ45yYS6afhQizfMnbisJ&X-Amz-Signature=0656d4dda1994f21466ea4701b678b2f14651216ddb3b79cdcfe51e7fe3249e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
