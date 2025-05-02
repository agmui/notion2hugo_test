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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4O4AS4T%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGE3E4%2FAjZaXeaqHt%2BRBRPCIbSi657j4AEazhW3W7P8vAiEA5nSZEsn3msJoWWkXS3qgpW9u0X61RxJ%2Byz41%2FY1u7aIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzoykecpG4DUzfG%2FyrcA7trqWPkBnj1xdWzNGjvuD7kz4srTN1HPU17XuJUXAtqP9B9gXddeWKcKUouiuLCjpPor%2B%2FswNSDC%2FbSZ1wHwOy7pBbVOIZp%2BOk%2BbHAeJx0z70RYjqhdCVfD2%2FFnbdMUfpQfkFPatqxnjfQsOGmHWdT7XZeDrX9mjiP6Ibi5eeNCYGmToaYJbuh6D%2BKKt0o3%2F6L29kB5WRHPAZIelnxrTyixa4Yw5rRxajtJWABYmCCDInezFfeE5BEIrJSY50r4JGMsvTNNgC48RV9%2FzlVsSBXaVMNunxi3xV3SR4CPxFaCMV162X70LAHLtQNfeAMUSAA9NXfmECiniGZHBLWVWo2DDF9v15NoD%2Fj8bFqiOv5oanQKiA%2FG2cL4T%2FnV1%2BgfauQX7QYYaQnBb00ruHk7pwN%2BUxspm378XWfoDYkqxZ5xODJFXfMpQsb7RY%2Fp4eB5dDtgKAmIkeyzeJpYkN%2FHIa6ph8MCBbgKbh2zaDkp1JRvNn7WvkJnnkvzZAcC6fp%2BebJS8z1QzV4XKXBc2aLMaXJ2rFMyFX7Ukf3dQbhnZhfm56jBUCUNbpvlCGl5cXlyHCN8FbOQme%2BaQZc02pX%2Btx1UDY4yiDYGKRkru7hKaznKiv%2FRE1oCOsnbLS35MOnk08AGOqUBexb4%2B3TqnqY9NDAEOdGs6FcghUlYOjYwQw1TNRts3H9Ze7ovqiiNOYxkbYS%2BUEdcaG2ArLn7PE4cxUeobsO2tCGjlBpCgufgzkP%2B8Ng3hNNbA8%2BXtUwQWB3Ymr318LtKofBqxDQwZkJsP4MeSf4M09dewLfsDeqmAO6uHdz9z9jMLLaIQwV6xBu07iiBl68%2Bn6rqBie6bQLIGTVY7EASjxyklb7n&X-Amz-Signature=49ffdac9e3683274cc39b5306a2ef1926d25b058dc625a648f189e6417362652&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4O4AS4T%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGE3E4%2FAjZaXeaqHt%2BRBRPCIbSi657j4AEazhW3W7P8vAiEA5nSZEsn3msJoWWkXS3qgpW9u0X61RxJ%2Byz41%2FY1u7aIqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzoykecpG4DUzfG%2FyrcA7trqWPkBnj1xdWzNGjvuD7kz4srTN1HPU17XuJUXAtqP9B9gXddeWKcKUouiuLCjpPor%2B%2FswNSDC%2FbSZ1wHwOy7pBbVOIZp%2BOk%2BbHAeJx0z70RYjqhdCVfD2%2FFnbdMUfpQfkFPatqxnjfQsOGmHWdT7XZeDrX9mjiP6Ibi5eeNCYGmToaYJbuh6D%2BKKt0o3%2F6L29kB5WRHPAZIelnxrTyixa4Yw5rRxajtJWABYmCCDInezFfeE5BEIrJSY50r4JGMsvTNNgC48RV9%2FzlVsSBXaVMNunxi3xV3SR4CPxFaCMV162X70LAHLtQNfeAMUSAA9NXfmECiniGZHBLWVWo2DDF9v15NoD%2Fj8bFqiOv5oanQKiA%2FG2cL4T%2FnV1%2BgfauQX7QYYaQnBb00ruHk7pwN%2BUxspm378XWfoDYkqxZ5xODJFXfMpQsb7RY%2Fp4eB5dDtgKAmIkeyzeJpYkN%2FHIa6ph8MCBbgKbh2zaDkp1JRvNn7WvkJnnkvzZAcC6fp%2BebJS8z1QzV4XKXBc2aLMaXJ2rFMyFX7Ukf3dQbhnZhfm56jBUCUNbpvlCGl5cXlyHCN8FbOQme%2BaQZc02pX%2Btx1UDY4yiDYGKRkru7hKaznKiv%2FRE1oCOsnbLS35MOnk08AGOqUBexb4%2B3TqnqY9NDAEOdGs6FcghUlYOjYwQw1TNRts3H9Ze7ovqiiNOYxkbYS%2BUEdcaG2ArLn7PE4cxUeobsO2tCGjlBpCgufgzkP%2B8Ng3hNNbA8%2BXtUwQWB3Ymr318LtKofBqxDQwZkJsP4MeSf4M09dewLfsDeqmAO6uHdz9z9jMLLaIQwV6xBu07iiBl68%2Bn6rqBie6bQLIGTVY7EASjxyklb7n&X-Amz-Signature=6bee4c0aaa76289fd8979f576e1b37daebf54c111399a14699564e1bafa1019c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
