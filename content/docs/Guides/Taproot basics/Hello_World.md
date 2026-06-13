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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXV4TGLP%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFqU9z0OxXjbyIM5xNTIYWQpS1OXPL5hflj5SoOk72S4AiAfhUqmKdHewJzfeisZXsNVPTkqTyzetjW5WddAuNZ1cCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMVykmmouQ6LaRujQpKtwDv%2FK8tjmt%2FJFhC%2BIV1CngSRPxO4XPW29yF1J7WyYbWbcWKrn3oMk7hrm0ZajvnYozFeuMaQT6AgUzH%2Fb%2BcPEGPfICFkYZ8xExD9iAMVabv08dXrVG1Az%2FbPnJSt%2BjGqHu4PoLqPaK%2BbptZFA%2Fgd%2B35yD%2BnnRhU1%2B32BDDWti5ZS2u3Sd3Bcr0gT%2BP4j0RPYF%2BBV7%2BtN7P2Wb1bx9kgD1n5aF3dwO1YdKAHmpekrrGkv%2Flbh6eF4tNwCZF3Hhwk%2BjS9foz0H6poW22eOlH%2B1SL%2BdxNQwnfN2PVd0DXGYWQH5McJzMHgf8%2Boe0zXBvTl%2BCf6moRKIzVia6GbWNvrl0p%2FKzKmfV70RO%2B93z36f%2BDfFE9cxZMh8c5joc%2Fuwsm%2FsNfhJksgfHcUys2eF6%2F2%2FVT%2BLbJkru%2FB3S3I9WkmM8A6PB4eElgFtoHledh4vhCEKMaKe3xIMvI6i8NoKXsiEKoC69LtSjRQNKNCU2Ukjbb%2FP3wB1z0TsYXeHk7%2BMtTEdo0jlHDQCmhBd%2Fg5RR4l7Obvd5mN2IAK2BlDr%2BZgQtrHme%2BpYAxqtYPrDLzeXc7sxA2eAbBQ4K1zbNcIAzK45vqG4EU%2F733RLGhAvu0RPNxULoq%2B%2BiovjyZndAJJWUwovqy0QY6pgETVuvPupisoVTNz93pGI8TK2qBlFuYHeLWtRFEhgIbO70nfyNzhHWDcVPAEZ3bO4X00q6qwUr%2BsTGSXLiwsIAjrPTxbkR2PimMW6F3WzzXstTq2buT5oQNAffYU4bUUhCP9BiRXqbsDRioqh4NYs06%2BGWGLSgk9ScqOkrrc11LrVCsunuKOgpzfcOOS6QhTLDIiuFjoFsnW2Y48IqL4cPKvEi1AHwk&X-Amz-Signature=2f5fcfc08f3f3983b41b3a346d9adc01f812066a472b8fc1e2e8555a07b48a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXV4TGLP%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFqU9z0OxXjbyIM5xNTIYWQpS1OXPL5hflj5SoOk72S4AiAfhUqmKdHewJzfeisZXsNVPTkqTyzetjW5WddAuNZ1cCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMVykmmouQ6LaRujQpKtwDv%2FK8tjmt%2FJFhC%2BIV1CngSRPxO4XPW29yF1J7WyYbWbcWKrn3oMk7hrm0ZajvnYozFeuMaQT6AgUzH%2Fb%2BcPEGPfICFkYZ8xExD9iAMVabv08dXrVG1Az%2FbPnJSt%2BjGqHu4PoLqPaK%2BbptZFA%2Fgd%2B35yD%2BnnRhU1%2B32BDDWti5ZS2u3Sd3Bcr0gT%2BP4j0RPYF%2BBV7%2BtN7P2Wb1bx9kgD1n5aF3dwO1YdKAHmpekrrGkv%2Flbh6eF4tNwCZF3Hhwk%2BjS9foz0H6poW22eOlH%2B1SL%2BdxNQwnfN2PVd0DXGYWQH5McJzMHgf8%2Boe0zXBvTl%2BCf6moRKIzVia6GbWNvrl0p%2FKzKmfV70RO%2B93z36f%2BDfFE9cxZMh8c5joc%2Fuwsm%2FsNfhJksgfHcUys2eF6%2F2%2FVT%2BLbJkru%2FB3S3I9WkmM8A6PB4eElgFtoHledh4vhCEKMaKe3xIMvI6i8NoKXsiEKoC69LtSjRQNKNCU2Ukjbb%2FP3wB1z0TsYXeHk7%2BMtTEdo0jlHDQCmhBd%2Fg5RR4l7Obvd5mN2IAK2BlDr%2BZgQtrHme%2BpYAxqtYPrDLzeXc7sxA2eAbBQ4K1zbNcIAzK45vqG4EU%2F733RLGhAvu0RPNxULoq%2B%2BiovjyZndAJJWUwovqy0QY6pgETVuvPupisoVTNz93pGI8TK2qBlFuYHeLWtRFEhgIbO70nfyNzhHWDcVPAEZ3bO4X00q6qwUr%2BsTGSXLiwsIAjrPTxbkR2PimMW6F3WzzXstTq2buT5oQNAffYU4bUUhCP9BiRXqbsDRioqh4NYs06%2BGWGLSgk9ScqOkrrc11LrVCsunuKOgpzfcOOS6QhTLDIiuFjoFsnW2Y48IqL4cPKvEi1AHwk&X-Amz-Signature=efa7601a6dd0fab7ff6e79c61c85c53a8aef355c30c4becba2755ffa4ab9f782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
