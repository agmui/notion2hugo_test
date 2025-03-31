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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZGODJQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDIS8d38bSh%2FxDXRTK1srTs9cRB1eFbiEKpLlxCkGx%2FjQIgDJsa7OdIa2XWVs7qrn6%2BdXzzBeb3f8caztuBJsiLfjYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1NmiL89nVwHg5DNircA2QCtdRwTtoxffmBAdV0JdbrIapiXc5J5VSLfNLP1Oxn5c13xxSX%2BBTPUDphDKdxcGdk7Rd5NlCXahawnG2Hj9N%2BH4NroabdSez1gyy%2F1%2F3eGoED5JZXgNIAsfsYNgX0o7Ss44VT7lAENZcE7ur124W8sTd6zRmJp%2BfKlrLhIFJMvoOstGnvgS9F5gaYsiPYWU8BiOWuKNf1%2BC7toeZTJAVwBY%2BNBssIuOwyujunyFIFdXJO%2Bf%2B1dQkLe530Yp%2FggP0CLdR2W5hHuwlqLYyyxlP6HBLvmdTYjE1DIacwiGWYQOQjSG99gSX1f%2BaQCkjZVNP%2BujVI27P%2FADGHuACgvlXy%2FHMs4yHjpXTaASaU%2FXa1cZKYWo0bJFkIAHLlaFQ2THjvnMEEfUWr4MUPp4%2F55%2BlYZATAALH1g7LKDTTm0h%2FPL2PUNJnCcBlH0ByL9lSSIhds7182X6mGj9Ahx7Hc7uGr%2BbxOUw2VFWWxA3pAIaBp1CqthHjtAxk9nXxq%2B0JFs%2BTJzGfhhoYsnYSwnDazIMBdwFzog56XMod5Mo8BgOyG45XUqMaHwW0upjCQrK0mEwCwuJgl8JxFs6UVe%2BnapfuKhxDJIjCnKVnFl5mkQ4KhtfUU%2BRe7wsu4C31TMLaUqL8GOqUB28YJ6l1llV89hvzxT5xhcM1A7qeuzhUSQAXsFEm2ly%2BQ10v7pCiiUvjhvaDCDBHkD9ciwTIodnARVHLwHdM%2BAzGCkibp7g09N5Wbg8WT7G%2BFCVbn4tt0ZxaKQ45166PdqFXNBmd9gHXRMV809s0UJ8jOGGBOzx2LMoSwngN4NPoWwwc9%2Bt6gyXVeArJRrzknE%2FtfTF53aPtAMHlZer9P8A5iu7uB&X-Amz-Signature=56a877e34f67499d881f95f63bc5d7544a2198898c2dcebdf575c379cda2e2ff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZGODJQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDIS8d38bSh%2FxDXRTK1srTs9cRB1eFbiEKpLlxCkGx%2FjQIgDJsa7OdIa2XWVs7qrn6%2BdXzzBeb3f8caztuBJsiLfjYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1NmiL89nVwHg5DNircA2QCtdRwTtoxffmBAdV0JdbrIapiXc5J5VSLfNLP1Oxn5c13xxSX%2BBTPUDphDKdxcGdk7Rd5NlCXahawnG2Hj9N%2BH4NroabdSez1gyy%2F1%2F3eGoED5JZXgNIAsfsYNgX0o7Ss44VT7lAENZcE7ur124W8sTd6zRmJp%2BfKlrLhIFJMvoOstGnvgS9F5gaYsiPYWU8BiOWuKNf1%2BC7toeZTJAVwBY%2BNBssIuOwyujunyFIFdXJO%2Bf%2B1dQkLe530Yp%2FggP0CLdR2W5hHuwlqLYyyxlP6HBLvmdTYjE1DIacwiGWYQOQjSG99gSX1f%2BaQCkjZVNP%2BujVI27P%2FADGHuACgvlXy%2FHMs4yHjpXTaASaU%2FXa1cZKYWo0bJFkIAHLlaFQ2THjvnMEEfUWr4MUPp4%2F55%2BlYZATAALH1g7LKDTTm0h%2FPL2PUNJnCcBlH0ByL9lSSIhds7182X6mGj9Ahx7Hc7uGr%2BbxOUw2VFWWxA3pAIaBp1CqthHjtAxk9nXxq%2B0JFs%2BTJzGfhhoYsnYSwnDazIMBdwFzog56XMod5Mo8BgOyG45XUqMaHwW0upjCQrK0mEwCwuJgl8JxFs6UVe%2BnapfuKhxDJIjCnKVnFl5mkQ4KhtfUU%2BRe7wsu4C31TMLaUqL8GOqUB28YJ6l1llV89hvzxT5xhcM1A7qeuzhUSQAXsFEm2ly%2BQ10v7pCiiUvjhvaDCDBHkD9ciwTIodnARVHLwHdM%2BAzGCkibp7g09N5Wbg8WT7G%2BFCVbn4tt0ZxaKQ45166PdqFXNBmd9gHXRMV809s0UJ8jOGGBOzx2LMoSwngN4NPoWwwc9%2Bt6gyXVeArJRrzknE%2FtfTF53aPtAMHlZer9P8A5iu7uB&X-Amz-Signature=5a06f4f741944237176219a7eab3a582ca61a6ee72c7709ae39e241cf43d8f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
