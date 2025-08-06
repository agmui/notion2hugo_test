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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4NXGS4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGAGw1qhB%2FOh3T8h%2F3FrxyUlFG0EAwwk6187WK4HcMmeAiBhKa3Vtt0u%2BDD5FMgcisSAst7hjUD6Ce8ev7fTS22uVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmuPtVml44GxMbW%2F9KtwD%2FkDwbUv%2FhekdjGIUgDP8%2F2x39sL8U1ZCarg2rZKacBftwElAG3ryLw0zjA%2BtvHF%2BVeVzBWH9JgZPtP5O4l%2FjHmOqYqXkrZUDMuRJKs74PNQC5mD4%2Flbh2U48cMa0XrDHolXgDEvoN2QhBVn9P5qABeWTAzHZOo8b0F54RTOn8dy%2Fgz5W3u9Sv9B84ZBR56jMmWKz2S04s%2BvbJwuUg3S%2FHeuLfb8OSuOCA84CBRlPdGPS%2BPuWbCMYDYBLR5oEf2sU8SLAFUQ6T9J5lBmR7aCnUkhqGaZ0TJBiZgEW0tHQwtigqLTECGHgykrNzihzeTQcAeaNzdkMGpOoEFLBOlSCAsDlgtwDKaEuEGUHph%2FmrD1r%2BG3gGaMYMh4CL%2BBIEiG5n8onM4Vn%2Bm%2FZ7kzSt08wz8WzFxhnuN9Kj6qKxYxv5WZ4OMz3E7htCZ04qnG7fuTZgIrWzrMXCwu2oFr%2FsoHTUOHs1%2BGV8Pj0Vk2BluV0I51zcBlpmodOXu82lWeP7rTZO6LLlVeUe%2BLjyBCTYNssXDEci1C6uDxpaBxHc2O9epJmLH%2B3lPLbf%2FuqlsNx4ExEgfqG9ILEU50kk61KZuuRi4LS8mtJms0H3xhZPY%2Bz1rrxMjdRb6SjLe2ON8QwpM%2FMxAY6pgE6Vvd7Ldx15VK2ULDrcErr9hq35wwwYt%2FtvJyyCEgYmR63s2qt43qgNuVutQGhXPrOVFHk1%2BcCEncqWRJodHIssXbQM%2B2AbMHLNCmsYo%2FJCeKrwcDNGMIwUsQt%2FBlMD610aOGb1qMeNsQR9q56SciU8bUhRmsKTAKBmahIJx9c77foOcTTPanV2%2B7wpq8I9DFd%2F6OhBYpVMZ8q5Xk1TZc3%2F%2BFuPQLf&X-Amz-Signature=f80eb2d78899b7443b2265c97c9058e710acae0d952ac5e0c43f728566f4abc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE4NXGS4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGAGw1qhB%2FOh3T8h%2F3FrxyUlFG0EAwwk6187WK4HcMmeAiBhKa3Vtt0u%2BDD5FMgcisSAst7hjUD6Ce8ev7fTS22uVSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMmuPtVml44GxMbW%2F9KtwD%2FkDwbUv%2FhekdjGIUgDP8%2F2x39sL8U1ZCarg2rZKacBftwElAG3ryLw0zjA%2BtvHF%2BVeVzBWH9JgZPtP5O4l%2FjHmOqYqXkrZUDMuRJKs74PNQC5mD4%2Flbh2U48cMa0XrDHolXgDEvoN2QhBVn9P5qABeWTAzHZOo8b0F54RTOn8dy%2Fgz5W3u9Sv9B84ZBR56jMmWKz2S04s%2BvbJwuUg3S%2FHeuLfb8OSuOCA84CBRlPdGPS%2BPuWbCMYDYBLR5oEf2sU8SLAFUQ6T9J5lBmR7aCnUkhqGaZ0TJBiZgEW0tHQwtigqLTECGHgykrNzihzeTQcAeaNzdkMGpOoEFLBOlSCAsDlgtwDKaEuEGUHph%2FmrD1r%2BG3gGaMYMh4CL%2BBIEiG5n8onM4Vn%2Bm%2FZ7kzSt08wz8WzFxhnuN9Kj6qKxYxv5WZ4OMz3E7htCZ04qnG7fuTZgIrWzrMXCwu2oFr%2FsoHTUOHs1%2BGV8Pj0Vk2BluV0I51zcBlpmodOXu82lWeP7rTZO6LLlVeUe%2BLjyBCTYNssXDEci1C6uDxpaBxHc2O9epJmLH%2B3lPLbf%2FuqlsNx4ExEgfqG9ILEU50kk61KZuuRi4LS8mtJms0H3xhZPY%2Bz1rrxMjdRb6SjLe2ON8QwpM%2FMxAY6pgE6Vvd7Ldx15VK2ULDrcErr9hq35wwwYt%2FtvJyyCEgYmR63s2qt43qgNuVutQGhXPrOVFHk1%2BcCEncqWRJodHIssXbQM%2B2AbMHLNCmsYo%2FJCeKrwcDNGMIwUsQt%2FBlMD610aOGb1qMeNsQR9q56SciU8bUhRmsKTAKBmahIJx9c77foOcTTPanV2%2B7wpq8I9DFd%2F6OhBYpVMZ8q5Xk1TZc3%2F%2BFuPQLf&X-Amz-Signature=4346e910e36a3c720fd0a55797c708e750fd9cfb00d8f6e0960adfe08b01f5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
