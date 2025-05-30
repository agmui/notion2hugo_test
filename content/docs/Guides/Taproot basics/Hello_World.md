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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGRKX3J%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfaMblWzoJXQ8%2F9GG1tcSwUDJW3yT7q%2F4LZNYDSAL8wgIhAL0mLv%2FLRd8JruPxYjf9MnfOm%2FO%2F9vYjQ0gI0OaPQHuLKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1IAAH1z%2BsmEHxpdIq3APEaA340VA1%2Byiy5147khm6LGwu3vv9C%2BHDfYXSTN3MVobYBO3tPk3wP5nuHZdnWfw%2BV8r4ROZu7bgf9yVJ6YFKCYEeXpxsVFmgoYglg1RkS%2FwVIHwtaDYmcmo1JLnmW4pfJDMVuXkFEErWbxE%2FKjSIB2HwZ7RrYRA6XbbuzYcqdXRDv4CnUdX6zK3%2Fb1q5BpFTpAmMMmoC7CJS%2FHSoEDS3DuWfEbzgb3WwFEcV1ba0SgI4LIl%2FFkGE4KqNLTIhWbTejxAymwWvNDBOc%2FEYLyavpg%2BJGVMmnrwv2mBtF5ikOlLsPziFZbRsnW1Nrs7qdQje%2FshdLIF9%2Bo2N6vIW%2BwLHSM8X6wAMEsbULLIe5FqylnPaAxKNbtsgxt32dIMT9GZIicPQrsGfSfEkrUndhGUEyKyueCHtcIwEjbE%2BOU%2BpWH%2BGqleM5nK9wGvdZnDr%2FjxTXSKlXJZDAfNjJLatMlAQCH%2Bs8j%2FJqxqL4rVBk%2BxWbaFYz0a0H4Yv3Zqesm3UlMXI9YDueX0wgRxTq2JPz8gTX9pGPeaX8q6BP5qumRzr1tNhSGlru9tmuonLIDgggeiMgnAtL73tVUgJyv%2FOGAvURm24SLJ0kYpTyyJ9TvSIWzTwIqNuc%2BYVhahZLjCzhOXBBjqkAc9n2Y1eHTFqRVHFFqk%2By1xayrBKDoo2sVxmaYViEOkRvnnJ1YeK9dg2Hbm6le3E6meS1T0SjK%2Fkum1KK5Zc1yYLjHSXCYEbD9VmDdIbfvETrGbhD%2BhJrHk0axeHP1RWtdpnai2cIvdipeiRY07GaOyP9xyA3EdVg87I9dWlcRBLjFcg4JLsJpd0xVqOcBb9U03JkqK%2BQHDm0itKv%2FtlbsYSTJFB&X-Amz-Signature=db75d5dc363cfa728d66ff6e72d9498fb461be9c760117c06e034ce3dff35347&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGRKX3J%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfaMblWzoJXQ8%2F9GG1tcSwUDJW3yT7q%2F4LZNYDSAL8wgIhAL0mLv%2FLRd8JruPxYjf9MnfOm%2FO%2F9vYjQ0gI0OaPQHuLKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1IAAH1z%2BsmEHxpdIq3APEaA340VA1%2Byiy5147khm6LGwu3vv9C%2BHDfYXSTN3MVobYBO3tPk3wP5nuHZdnWfw%2BV8r4ROZu7bgf9yVJ6YFKCYEeXpxsVFmgoYglg1RkS%2FwVIHwtaDYmcmo1JLnmW4pfJDMVuXkFEErWbxE%2FKjSIB2HwZ7RrYRA6XbbuzYcqdXRDv4CnUdX6zK3%2Fb1q5BpFTpAmMMmoC7CJS%2FHSoEDS3DuWfEbzgb3WwFEcV1ba0SgI4LIl%2FFkGE4KqNLTIhWbTejxAymwWvNDBOc%2FEYLyavpg%2BJGVMmnrwv2mBtF5ikOlLsPziFZbRsnW1Nrs7qdQje%2FshdLIF9%2Bo2N6vIW%2BwLHSM8X6wAMEsbULLIe5FqylnPaAxKNbtsgxt32dIMT9GZIicPQrsGfSfEkrUndhGUEyKyueCHtcIwEjbE%2BOU%2BpWH%2BGqleM5nK9wGvdZnDr%2FjxTXSKlXJZDAfNjJLatMlAQCH%2Bs8j%2FJqxqL4rVBk%2BxWbaFYz0a0H4Yv3Zqesm3UlMXI9YDueX0wgRxTq2JPz8gTX9pGPeaX8q6BP5qumRzr1tNhSGlru9tmuonLIDgggeiMgnAtL73tVUgJyv%2FOGAvURm24SLJ0kYpTyyJ9TvSIWzTwIqNuc%2BYVhahZLjCzhOXBBjqkAc9n2Y1eHTFqRVHFFqk%2By1xayrBKDoo2sVxmaYViEOkRvnnJ1YeK9dg2Hbm6le3E6meS1T0SjK%2Fkum1KK5Zc1yYLjHSXCYEbD9VmDdIbfvETrGbhD%2BhJrHk0axeHP1RWtdpnai2cIvdipeiRY07GaOyP9xyA3EdVg87I9dWlcRBLjFcg4JLsJpd0xVqOcBb9U03JkqK%2BQHDm0itKv%2FtlbsYSTJFB&X-Amz-Signature=1b7a8e88c21460ad37a248f47758d48ea2699de8913197c40daa3d11e63cd9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
