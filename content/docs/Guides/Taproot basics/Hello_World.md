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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACUKTZX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWI2ROw7QQ37Tx4ObRKLkO2CLSWoS8xaqEfqqql4eBWwIgMonTrJJnD2FqjoAxJDgQmZWv1c5HkgaL6MYAIA4HLDcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO4d0II0Mx0AVbP3myrcA4eJyUws6g16m8g8wxi6BjIxtGzHRAwfPVKYkh6YkVjrAnpTv37JWfv1AxEe2Hs9G8u27M2Ip8Ip4xI45VUObPfxZYlBp9drjJ%2Bp6%2BRWStPBDQelBLYfefe4%2BsMkDfRKjmDwRBWCqhCcqFPlaMB5nD9QDeZ%2B4i40GQRlXDGRxNf6vPERp9hUJs9YH3rpXwlyrkN1gfRv0%2BhJQ0JJK1orI1TZ8kmqyiUy8Tg4wEysK3sAQ0dIiQVjcVBBoIEjm70qMQnDDLJ5Zdc1%2B5KO%2BjK9uUxrfK17WOBfWRz3aHv%2BGoRsmZS6jytMekH9KJm5fEjI5nKbYgO6tzymP39gCAt6DOWQe9bLdzQGIdx%2BIkm9tOUHPzKhBolnvY0iKrgZw0MdT3df6JVLARDed4sTgdnj7t2tiMTSTbuKq01ebJIt%2FJlLlCFM5WbEoDjlKpXFftzW1NOLboSCcjmIRLzNXPolWKGTCptY8yMJaS9oUsmRSR%2BXF8xzZpNFvKP3P99QysTCGx54kBwx%2FWnisQ6ILze2FHzSWUzr4yzVQsHaX1I58PJ%2F6QEnEyAkBX9xhVN0k58ck2TcAWJPox209knDpIQ0RkFc8D2mghtcjWEsnh1yhKL4xWi%2FhRj%2FfCJMBC9PMPOi%2Fb8GOqUBlEjvzh%2FpI1I7LIpvcuOyiblYFd1fh3s1gVwgxiaYR2sC1GEVlui3fHDsNvTaD%2F%2BsALSyLOBimDWLvg8Fov2CWnGeFzDxojHYzV4gZguX4a5%2FO2kKq4zJ2%2F9dAFBGX%2FDz3GI%2B2ra36ZyUujBFifEoz96txQMLXPvsEMu7AGkjkV9lfy97ieQXSo%2BJa3j3KjDvTTiKjuypY1bldQcntTMJZjqY%2B4jN&X-Amz-Signature=5529b0542a91d835bbe4744d25d3e99a46bed801f63c3d7ed64dd7671309679d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACUKTZX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWI2ROw7QQ37Tx4ObRKLkO2CLSWoS8xaqEfqqql4eBWwIgMonTrJJnD2FqjoAxJDgQmZWv1c5HkgaL6MYAIA4HLDcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO4d0II0Mx0AVbP3myrcA4eJyUws6g16m8g8wxi6BjIxtGzHRAwfPVKYkh6YkVjrAnpTv37JWfv1AxEe2Hs9G8u27M2Ip8Ip4xI45VUObPfxZYlBp9drjJ%2Bp6%2BRWStPBDQelBLYfefe4%2BsMkDfRKjmDwRBWCqhCcqFPlaMB5nD9QDeZ%2B4i40GQRlXDGRxNf6vPERp9hUJs9YH3rpXwlyrkN1gfRv0%2BhJQ0JJK1orI1TZ8kmqyiUy8Tg4wEysK3sAQ0dIiQVjcVBBoIEjm70qMQnDDLJ5Zdc1%2B5KO%2BjK9uUxrfK17WOBfWRz3aHv%2BGoRsmZS6jytMekH9KJm5fEjI5nKbYgO6tzymP39gCAt6DOWQe9bLdzQGIdx%2BIkm9tOUHPzKhBolnvY0iKrgZw0MdT3df6JVLARDed4sTgdnj7t2tiMTSTbuKq01ebJIt%2FJlLlCFM5WbEoDjlKpXFftzW1NOLboSCcjmIRLzNXPolWKGTCptY8yMJaS9oUsmRSR%2BXF8xzZpNFvKP3P99QysTCGx54kBwx%2FWnisQ6ILze2FHzSWUzr4yzVQsHaX1I58PJ%2F6QEnEyAkBX9xhVN0k58ck2TcAWJPox209knDpIQ0RkFc8D2mghtcjWEsnh1yhKL4xWi%2FhRj%2FfCJMBC9PMPOi%2Fb8GOqUBlEjvzh%2FpI1I7LIpvcuOyiblYFd1fh3s1gVwgxiaYR2sC1GEVlui3fHDsNvTaD%2F%2BsALSyLOBimDWLvg8Fov2CWnGeFzDxojHYzV4gZguX4a5%2FO2kKq4zJ2%2F9dAFBGX%2FDz3GI%2B2ra36ZyUujBFifEoz96txQMLXPvsEMu7AGkjkV9lfy97ieQXSo%2BJa3j3KjDvTTiKjuypY1bldQcntTMJZjqY%2B4jN&X-Amz-Signature=7c1265705a5bd2bdf1be274a16dce47223549e754f066d4fcb985c801cf6892e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
