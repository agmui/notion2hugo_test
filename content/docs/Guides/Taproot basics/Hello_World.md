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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFKAZKR5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF25Ew6mMusDcYYs247ncDwPCDHH9k7DGTx8ZXhlTxf0AiEAqlRhbAcZEIk6styp1KfV0sqQbubwIU5mNwBW0TPKzsMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMHrLY2YCOSvwY%2BdVyrcA3TF4amRIvK96g2y3lXO4xf6BWrYVddI2nGCrbjmkaeloMWdi3YiQgwTH%2F3yPKWTqu5XYLm3H%2FW8P5ivQUIgTkhF1AmoCg4GC7PlWZGBskQ5kmafMmBcPzymyMnDUr%2BOfgS%2BWO0rizzFIrBN9sPGKRYDXe6jSRe0FWLYf7CpemAmry3leoDLt5xY%2FG5gFjdg3iP1CX39KFa2iPlH6ZALQ8gAfwhl8YJAgXOV5W691fdVlvVZa7L7TKVOwIz%2B9kvcJdlFkNjcHZBSFjK%2Fixfi8o0BjvI8vAcYtQdc903G8iU8RC31C91Lgz92%2FhWN4W9QDc2dnAjeEo2hhsWmEhvHofmsB%2FaRrXP7q7p4anBVUh1Cj2WZ6kBSq%2FZOUowuqRKQN%2Br3tBsAcxbGcTlIE3Mg3MfuOMD0OIkiuruMXdPqR9gLn9tQ6chPkGkdJMRlGRBm2c1w5IUkH3N7jrHeVsVMuN99RttGBA3keFdBcSd3ifQKHiQqntmuTymSYWLjBEz0AmN60aPsa%2BuB1V9mg96wbQd9IHF36aLRjE1EP1IE%2BjWGX%2FPzk3P6J5O0fpCEcFK5dGb8iH1m09mQHpnYdb3ifeLt6mvt3xOzVFEC%2FLWyh6Y2wjoiwnY25sTeFTPGMKDV3MAGOqUBXD0c7uQEOuTmBuRnVvXUCDdLtY7Ic%2BS1Nw4%2BDQyUIk7%2FA2CYl2SKjvFMth5W2881N1FfC47K9kc6hQbdUUlHx5oC%2BqQo4Ra8RS3ojkumecJoFSOsrQfL4o3GmyneI8MVhhwIFj6z6V3XgdYGmgLFsKhgpeGcQwqRKVf2NrMb697Y1zKatQaaM3XvPbRWmbSS88eDAqwZ4EmuSzerA3A4CaXZ91Tu&X-Amz-Signature=533acf565adcc72b834e68fa79e9793dc5ef2d571852c998ee821fb8002cdb19&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFKAZKR5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIF25Ew6mMusDcYYs247ncDwPCDHH9k7DGTx8ZXhlTxf0AiEAqlRhbAcZEIk6styp1KfV0sqQbubwIU5mNwBW0TPKzsMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMHrLY2YCOSvwY%2BdVyrcA3TF4amRIvK96g2y3lXO4xf6BWrYVddI2nGCrbjmkaeloMWdi3YiQgwTH%2F3yPKWTqu5XYLm3H%2FW8P5ivQUIgTkhF1AmoCg4GC7PlWZGBskQ5kmafMmBcPzymyMnDUr%2BOfgS%2BWO0rizzFIrBN9sPGKRYDXe6jSRe0FWLYf7CpemAmry3leoDLt5xY%2FG5gFjdg3iP1CX39KFa2iPlH6ZALQ8gAfwhl8YJAgXOV5W691fdVlvVZa7L7TKVOwIz%2B9kvcJdlFkNjcHZBSFjK%2Fixfi8o0BjvI8vAcYtQdc903G8iU8RC31C91Lgz92%2FhWN4W9QDc2dnAjeEo2hhsWmEhvHofmsB%2FaRrXP7q7p4anBVUh1Cj2WZ6kBSq%2FZOUowuqRKQN%2Br3tBsAcxbGcTlIE3Mg3MfuOMD0OIkiuruMXdPqR9gLn9tQ6chPkGkdJMRlGRBm2c1w5IUkH3N7jrHeVsVMuN99RttGBA3keFdBcSd3ifQKHiQqntmuTymSYWLjBEz0AmN60aPsa%2BuB1V9mg96wbQd9IHF36aLRjE1EP1IE%2BjWGX%2FPzk3P6J5O0fpCEcFK5dGb8iH1m09mQHpnYdb3ifeLt6mvt3xOzVFEC%2FLWyh6Y2wjoiwnY25sTeFTPGMKDV3MAGOqUBXD0c7uQEOuTmBuRnVvXUCDdLtY7Ic%2BS1Nw4%2BDQyUIk7%2FA2CYl2SKjvFMth5W2881N1FfC47K9kc6hQbdUUlHx5oC%2BqQo4Ra8RS3ojkumecJoFSOsrQfL4o3GmyneI8MVhhwIFj6z6V3XgdYGmgLFsKhgpeGcQwqRKVf2NrMb697Y1zKatQaaM3XvPbRWmbSS88eDAqwZ4EmuSzerA3A4CaXZ91Tu&X-Amz-Signature=605d2c27b378c7713779b319b1a1c3c7f9ef697870fd864d99411763f5304591&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
