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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJMU6DL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFGmZGlk8xSvDIXfJ0nj%2FRSI8BZppno6M6AhPkaoJxokAiEAob%2B3quG6a1sfLEa8mRi8TpMDOS5Fd%2FXsGsYMIZmMvzQqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlQ1ZKVKTGVWphyIircA46HVm%2BApadHToSzZeA8OsejDYmu7Nts6DYvxpH26U%2BL8EP9bNsz9ri%2BvJSzuVnxpYcqr46t8rkcJmOGoBR1U1pRNvM%2Fie7K0hZvhEUvoFAsQRuLs32iH5ccwk22cXpuF5Pija3pnKIAvsk4DH9IxBtlk5BfzAwc9y8wGriq3%2Fc4hzqOfQdAaToWzaesTIq0dkcMkoagyIri%2FGbcgAjdXwrky1WanDCJ58JIRPfToQGbQsI9FW8w4YGjawqz2kPoILO9wvru%2BZxAOsMuPhVV4ruXXRVHs9nTtB3A3NXYCtY0HllIkcI63EEXQZSd5%2BZ0Ce1mFI87TES8%2B%2BZ0pGJ9qJwD9wvq61JMy0W2bi9XxFodcxhrhHhco0ZmJPkj2nKkaAyvCfcY%2Ft6VYzw4L3AoB99lyZ4hlzvKkPIrL9YyrlAlGXmM0HA2k8Ku3ffIUdNsUkljk%2Bzfx2y%2FZi0ZsICBfw36QdyUtj2l6COm7wJN5Bs7SzKWJQNT7Zc%2FtVH6np5hY8lep4pAWrZgCE0GpoKJpup%2FNJz7U%2F2X%2BbozgJrtuVjKjie1bO38tjr0sM3uRY2ZPHXpTgiOPutNTMx%2Fh81xLgVKAl%2BXuzQoAJABTc5CwQVmLHiCHLj%2FVb4xzy5OMMaIqsIGOqUBxJjWu6yivcRhq0f8FsFko595%2FdPfcVyrCN50H%2FpjatzepnIhsfpeymEfcPr%2FhQbnjxJCrqA0qlLR2rxkt7f%2B%2Bw9fqarSAilFrXUfhpiQ%2FRhB%2FaOpQMOAkwidZobS7g%2FmoIpQdXymniUrgXu4UomJoydtZVhcbPORdLYNraETVmo3Ec7T4vUk9mh%2F5JlBqmFO3B8%2B5HPJEDtr2AYyS8OP2g3cTC1I&X-Amz-Signature=96c224f83c0b6b3824fae406c571136b99e0905c832d42a35979b433f28ef13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOJMU6DL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFGmZGlk8xSvDIXfJ0nj%2FRSI8BZppno6M6AhPkaoJxokAiEAob%2B3quG6a1sfLEa8mRi8TpMDOS5Fd%2FXsGsYMIZmMvzQqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlQ1ZKVKTGVWphyIircA46HVm%2BApadHToSzZeA8OsejDYmu7Nts6DYvxpH26U%2BL8EP9bNsz9ri%2BvJSzuVnxpYcqr46t8rkcJmOGoBR1U1pRNvM%2Fie7K0hZvhEUvoFAsQRuLs32iH5ccwk22cXpuF5Pija3pnKIAvsk4DH9IxBtlk5BfzAwc9y8wGriq3%2Fc4hzqOfQdAaToWzaesTIq0dkcMkoagyIri%2FGbcgAjdXwrky1WanDCJ58JIRPfToQGbQsI9FW8w4YGjawqz2kPoILO9wvru%2BZxAOsMuPhVV4ruXXRVHs9nTtB3A3NXYCtY0HllIkcI63EEXQZSd5%2BZ0Ce1mFI87TES8%2B%2BZ0pGJ9qJwD9wvq61JMy0W2bi9XxFodcxhrhHhco0ZmJPkj2nKkaAyvCfcY%2Ft6VYzw4L3AoB99lyZ4hlzvKkPIrL9YyrlAlGXmM0HA2k8Ku3ffIUdNsUkljk%2Bzfx2y%2FZi0ZsICBfw36QdyUtj2l6COm7wJN5Bs7SzKWJQNT7Zc%2FtVH6np5hY8lep4pAWrZgCE0GpoKJpup%2FNJz7U%2F2X%2BbozgJrtuVjKjie1bO38tjr0sM3uRY2ZPHXpTgiOPutNTMx%2Fh81xLgVKAl%2BXuzQoAJABTc5CwQVmLHiCHLj%2FVb4xzy5OMMaIqsIGOqUBxJjWu6yivcRhq0f8FsFko595%2FdPfcVyrCN50H%2FpjatzepnIhsfpeymEfcPr%2FhQbnjxJCrqA0qlLR2rxkt7f%2B%2Bw9fqarSAilFrXUfhpiQ%2FRhB%2FaOpQMOAkwidZobS7g%2FmoIpQdXymniUrgXu4UomJoydtZVhcbPORdLYNraETVmo3Ec7T4vUk9mh%2F5JlBqmFO3B8%2B5HPJEDtr2AYyS8OP2g3cTC1I&X-Amz-Signature=12cb6298d4afda007563cfdcec4bb8af458bb66291b6db5b933f709b64fd2438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
