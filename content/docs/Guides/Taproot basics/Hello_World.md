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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QR7U6FW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCthSFYO0ATzDw9BWjdrQ07bx9hpfsAtKwcb%2Fehk2kneQIhAIAs5ypqCrY9LkEOA%2B5ihZPWUCBnG9tM%2BPaAkJKzGyQ6KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxivuhcQHehMHJbjuoq3AODA1f56C%2FrufUpGn4wm5L726hDwB3LgTi1MuyDZKlMwpFkhLI3waM%2BhGZsII0jVFBX2Grt1aAhxtMy5b15NBEGg3am5hPi1QfzBmFK%2BwPoqXY%2BAKSxTGGw1B6f0seVq%2FRQbfNkosHfjZaBChe2iETNXa5G6%2FVeq9ICkiz2I4pg%2F2Z2shIhdWZyqM9ILu1TYni%2FM2YkN1ce0FFgFHDwEbpZGnydehMhC18WeaUCrZvMFUuEKKxQqDTU4%2FRGiGhG4kWZ7QqVTw0OvEEm0rMs8FT5ZWs7aLaNiSo7N0EioTOX4sEBJDswWxKVqHGPAfGClDdUhruj3dKBrB8Pbm2Y%2FXf%2FwgVp0hswW8M92akJE3yYCgDsbIUcA1lmzI4LnjYgFuZVnsG3uvtnsA%2BQLgG5HmjMgoU1f6IQ0hfN8zIQiiCK85t5qWPaZH22eZY1lH0zEjRWrTDv%2BJzzxlpCkg5ciNsEU6H4WiHvIGag62smSKO%2Bkk0yEA6AVCOQpuiCqfEnfP1ZtYJpzJ8txSvlmPdJFR%2FR2iux0jmclftdNZwuDSSJZwAI8iuoMy6tkNs5zhDvDBOVOtF%2Ba5XbJLE2Vs4FFcY6nFxz5gm70Ifnx1rmmk9kTf6xMi3nCbU2yKp9DTD%2Fkae9BjqkAZg7zS0CJyXg7w7ng%2FeduPUTL%2F0cfQzXC0YNTUOLovt6GRLSDKN2%2FQRMkAYPstV5OC7QOWTwICxmU%2Bd4pkOXAxW%2BK%2BBTc3xnxREVWNH7c5%2FwymtIV0znINs33RzCTtQkjccd5v73cvZoXU8upUZ6MatK78qPWiNgpqH3pIeTFDbIYu%2ByP6fUTlNoaA4BrzqelV5%2FsnMGJ2RoZua7ijJxTGAKgEFM&X-Amz-Signature=1d9fd0785a51c7a6c2082aac373f6138de8120c61d158b69861de144c15df545&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QR7U6FW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCthSFYO0ATzDw9BWjdrQ07bx9hpfsAtKwcb%2Fehk2kneQIhAIAs5ypqCrY9LkEOA%2B5ihZPWUCBnG9tM%2BPaAkJKzGyQ6KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxivuhcQHehMHJbjuoq3AODA1f56C%2FrufUpGn4wm5L726hDwB3LgTi1MuyDZKlMwpFkhLI3waM%2BhGZsII0jVFBX2Grt1aAhxtMy5b15NBEGg3am5hPi1QfzBmFK%2BwPoqXY%2BAKSxTGGw1B6f0seVq%2FRQbfNkosHfjZaBChe2iETNXa5G6%2FVeq9ICkiz2I4pg%2F2Z2shIhdWZyqM9ILu1TYni%2FM2YkN1ce0FFgFHDwEbpZGnydehMhC18WeaUCrZvMFUuEKKxQqDTU4%2FRGiGhG4kWZ7QqVTw0OvEEm0rMs8FT5ZWs7aLaNiSo7N0EioTOX4sEBJDswWxKVqHGPAfGClDdUhruj3dKBrB8Pbm2Y%2FXf%2FwgVp0hswW8M92akJE3yYCgDsbIUcA1lmzI4LnjYgFuZVnsG3uvtnsA%2BQLgG5HmjMgoU1f6IQ0hfN8zIQiiCK85t5qWPaZH22eZY1lH0zEjRWrTDv%2BJzzxlpCkg5ciNsEU6H4WiHvIGag62smSKO%2Bkk0yEA6AVCOQpuiCqfEnfP1ZtYJpzJ8txSvlmPdJFR%2FR2iux0jmclftdNZwuDSSJZwAI8iuoMy6tkNs5zhDvDBOVOtF%2Ba5XbJLE2Vs4FFcY6nFxz5gm70Ifnx1rmmk9kTf6xMi3nCbU2yKp9DTD%2Fkae9BjqkAZg7zS0CJyXg7w7ng%2FeduPUTL%2F0cfQzXC0YNTUOLovt6GRLSDKN2%2FQRMkAYPstV5OC7QOWTwICxmU%2Bd4pkOXAxW%2BK%2BBTc3xnxREVWNH7c5%2FwymtIV0znINs33RzCTtQkjccd5v73cvZoXU8upUZ6MatK78qPWiNgpqH3pIeTFDbIYu%2ByP6fUTlNoaA4BrzqelV5%2FsnMGJ2RoZua7ijJxTGAKgEFM&X-Amz-Signature=9919a60ecc903db5cc533f7fcd4fe002b0ddc52b072ee60e44acc02e8577d44c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
