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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QS2KXQE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlZ%2FZ9EqsvzIOoEJ5frFbDkOxTCx8nYXTD5lPybyKLnwIhAK0BLu2rYwoTsMhZAFAsIVTfI6agx%2FErHL%2BXIKlw6yvJKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr0f5dZXWaYcWpONsq3AMQlcy5lu1at7WSDoXsIKVe8YkqzTMvo0OgasVcFe6yxRaGlgGGKpWK9O4FbNJkhGJOdwrT4xgJJQSGu6aTy3hbK34Jp9utyuOWXm1IZDL1kE8l5BlLd%2BgV%2BQ%2F4426olmm0EY0yfDnfDdh4xEYnCeQnmNzY7GbEl6DMxrZjTKscTGVh0XWgmDt8bhB7P75jc7UYSm2VUILA0HBGt7N%2BxomZFctlhiIj4ffuMgccJO13fzw43tKQlqAyL7H0Ztq6PkaQTP6IlLelF91s%2Bjm3mN7DznlZdnoqY1%2ByP1EtHCbY05cyob1%2B9%2FheaZB34c4se8RbHC1rj1IEgl8fSOtT9TY6rnBFp%2FPPSWTduye4EsL1XCQnDVTA3aI2JX2fD73sHZQt6pXFt8cTBdLbC6JXdbiAlnVYxq0OsZQs4chSeE1MGhgsuG7dPfTo%2B%2BjPLNyTCSGvguHyqohOLS5EQ6dt%2BQuTIcyXqiJqT7%2Be6sDnVUBz6mHCp0b5rPo2bvCXsDRwiiiG%2B5QFL%2B5EC13Iykr7rH32uRgvMSexEw85PWZXgog3gUeQ2fXcmjjFXt%2Bm11r25WcIe%2Bts%2FEFkFT69OtiwVjJ2%2BlanI1qzfaMIYdW%2B%2Ff%2FyGkwTlELM6HxfUV8HojCApo%2FDBjqkAQLhQ39MmwLKLCISB%2FBHF3wS%2BnKzOiTXWcLw8nEQ6SS%2FxKShpvbIznQLg4LXEbEwCqv2THi713Z4b%2BJS3BF7K7FPe5cUjjPB6nblpYHW62SdGaiTgfzS%2FnoNG7U4iRuk%2BSfmOz6tRSEqErhTFkPhWVyInuXjGCWCHpfMJUVCvxxjwITTGU7p3L0E6j3XKzEPQVhCVqcAUNcUsPEHTcvze3usK4dE&X-Amz-Signature=f9ca296eb4acfc466de673596c750f4644a14ae5a5d0228a154d78fd91a2be89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QS2KXQE%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlZ%2FZ9EqsvzIOoEJ5frFbDkOxTCx8nYXTD5lPybyKLnwIhAK0BLu2rYwoTsMhZAFAsIVTfI6agx%2FErHL%2BXIKlw6yvJKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr0f5dZXWaYcWpONsq3AMQlcy5lu1at7WSDoXsIKVe8YkqzTMvo0OgasVcFe6yxRaGlgGGKpWK9O4FbNJkhGJOdwrT4xgJJQSGu6aTy3hbK34Jp9utyuOWXm1IZDL1kE8l5BlLd%2BgV%2BQ%2F4426olmm0EY0yfDnfDdh4xEYnCeQnmNzY7GbEl6DMxrZjTKscTGVh0XWgmDt8bhB7P75jc7UYSm2VUILA0HBGt7N%2BxomZFctlhiIj4ffuMgccJO13fzw43tKQlqAyL7H0Ztq6PkaQTP6IlLelF91s%2Bjm3mN7DznlZdnoqY1%2ByP1EtHCbY05cyob1%2B9%2FheaZB34c4se8RbHC1rj1IEgl8fSOtT9TY6rnBFp%2FPPSWTduye4EsL1XCQnDVTA3aI2JX2fD73sHZQt6pXFt8cTBdLbC6JXdbiAlnVYxq0OsZQs4chSeE1MGhgsuG7dPfTo%2B%2BjPLNyTCSGvguHyqohOLS5EQ6dt%2BQuTIcyXqiJqT7%2Be6sDnVUBz6mHCp0b5rPo2bvCXsDRwiiiG%2B5QFL%2B5EC13Iykr7rH32uRgvMSexEw85PWZXgog3gUeQ2fXcmjjFXt%2Bm11r25WcIe%2Bts%2FEFkFT69OtiwVjJ2%2BlanI1qzfaMIYdW%2B%2Ff%2FyGkwTlELM6HxfUV8HojCApo%2FDBjqkAQLhQ39MmwLKLCISB%2FBHF3wS%2BnKzOiTXWcLw8nEQ6SS%2FxKShpvbIznQLg4LXEbEwCqv2THi713Z4b%2BJS3BF7K7FPe5cUjjPB6nblpYHW62SdGaiTgfzS%2FnoNG7U4iRuk%2BSfmOz6tRSEqErhTFkPhWVyInuXjGCWCHpfMJUVCvxxjwITTGU7p3L0E6j3XKzEPQVhCVqcAUNcUsPEHTcvze3usK4dE&X-Amz-Signature=169e7cd60f49af2163aff1f65182448ff4375fd6a90c06ae9f66411bf238bbe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
