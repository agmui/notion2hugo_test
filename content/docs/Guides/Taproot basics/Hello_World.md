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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVGW5FO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7FbsCtIzfnVp8vKR3ViurAQCKK3fLIWnj3smopa57HAiEA6UxmkWV63dWaLeOH%2BzWK4xvtb65Emzw4ab2LY9b7FWoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNEBr7cCpu9qKegImircA1CCEW4IckxkKLjnWPyiIHt3%2B81W%2BkVtn9KjIGvG62ikyVY5D9leswmUUKZjfPTT74y6wF%2Bcdpu62%2BB%2F28CzF%2Bg%2FvqW4fREAoLHORTwYl6kvsGLVV11B8jMA8fUHbhcX7QSWEH%2BRjXkQX45dW1fiObfRY4qwc4E85KuHT0WIt0g1x0aMQ8HhRgh6SEE31t3ltNEgu6Ur00HsC6LF3Cd4bVajbpRLOQ%2BuMUwHX9JrgRjlryWW6GKLUcueyAPcSvzW7fOmIPG%2FKnG5KUXH0errxoabFK%2BwhJSPP7l9KeuAR5Xpwygh4ZJffl3V8iZm1dxXXjWyZiSdVEQKeuL%2BVdJaELeuRXKTaRi73qHlnW%2F9UPMj%2BExSAcBj5ZFSG5aLQYy48YoU8UY2CiogYkg2i8lbwYdEI2TlMRrDt8swM%2BXnD0ZF%2Bz%2FiYbt9AO85yFj5i0EJA5yebxy%2FmUGqrccZ3XoPiAxFr%2FJbea%2BH%2BpZ6M1pDnIlL2s3mngWfpmyCHNQv%2FR4HMQO371Az29xJCVn5oLDYYCPCEMe3O1xKP4oA2A9EYNbvm7diA%2FQezvaYKKRS9VJihKt0epKMktjbP2keygzILF%2FVlKnKZNluetEbdh6S%2FmEgOxZPlbZ0XwaO78rzMPeyztAGOqUBn3ye1d0DWRZZ8CgVuOX4ag4rMREJihAXaHS%2F0EHJp%2BO5WlpCxOplEuOdyRpmRMDv0AruNhyyvby3dLFkLXkhzMkNpX%2FFOAagiNPqw3k9THHQdO0Zf2FbDBq%2B2FLKN38HOvDAyzDzqBB1YBNijGl9B6NdCZ%2BqUusBypXU5zKiThUJkdPeypdXpkO%2BYa7NXB5KF5VQ7X%2FTphO6XOI%2Bc738GKhbucQN&X-Amz-Signature=d17764fdcbbceca0f76a688f29f06b70318e3fef1e3038b0969483aae34591a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHVGW5FO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7FbsCtIzfnVp8vKR3ViurAQCKK3fLIWnj3smopa57HAiEA6UxmkWV63dWaLeOH%2BzWK4xvtb65Emzw4ab2LY9b7FWoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNEBr7cCpu9qKegImircA1CCEW4IckxkKLjnWPyiIHt3%2B81W%2BkVtn9KjIGvG62ikyVY5D9leswmUUKZjfPTT74y6wF%2Bcdpu62%2BB%2F28CzF%2Bg%2FvqW4fREAoLHORTwYl6kvsGLVV11B8jMA8fUHbhcX7QSWEH%2BRjXkQX45dW1fiObfRY4qwc4E85KuHT0WIt0g1x0aMQ8HhRgh6SEE31t3ltNEgu6Ur00HsC6LF3Cd4bVajbpRLOQ%2BuMUwHX9JrgRjlryWW6GKLUcueyAPcSvzW7fOmIPG%2FKnG5KUXH0errxoabFK%2BwhJSPP7l9KeuAR5Xpwygh4ZJffl3V8iZm1dxXXjWyZiSdVEQKeuL%2BVdJaELeuRXKTaRi73qHlnW%2F9UPMj%2BExSAcBj5ZFSG5aLQYy48YoU8UY2CiogYkg2i8lbwYdEI2TlMRrDt8swM%2BXnD0ZF%2Bz%2FiYbt9AO85yFj5i0EJA5yebxy%2FmUGqrccZ3XoPiAxFr%2FJbea%2BH%2BpZ6M1pDnIlL2s3mngWfpmyCHNQv%2FR4HMQO371Az29xJCVn5oLDYYCPCEMe3O1xKP4oA2A9EYNbvm7diA%2FQezvaYKKRS9VJihKt0epKMktjbP2keygzILF%2FVlKnKZNluetEbdh6S%2FmEgOxZPlbZ0XwaO78rzMPeyztAGOqUBn3ye1d0DWRZZ8CgVuOX4ag4rMREJihAXaHS%2F0EHJp%2BO5WlpCxOplEuOdyRpmRMDv0AruNhyyvby3dLFkLXkhzMkNpX%2FFOAagiNPqw3k9THHQdO0Zf2FbDBq%2B2FLKN38HOvDAyzDzqBB1YBNijGl9B6NdCZ%2BqUusBypXU5zKiThUJkdPeypdXpkO%2BYa7NXB5KF5VQ7X%2FTphO6XOI%2Bc738GKhbucQN&X-Amz-Signature=bd6c83c0fb5b25f1680f49a004a76d3fa54183f5d65a594b84c526a2f31b14a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
