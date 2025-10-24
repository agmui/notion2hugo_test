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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGT6IUDC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICONd6lplQ752vzIif5xcVU9yC9RkyeISTmofSPgVLhrAiEA51Qxg71csIdUmoscDAhQ9PuZpc%2FjYcO90bhcR3a2bTYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGARlRcXRfD4DIEUlircA3CABpSiAj%2BiVvZs%2FdDzKi3QsqAUH2DwU5GULehjj5lz41OheQJV6p2fodwupkJjzuS0YTd7c1EEDbJjpjUISGgwcKwhalIFORBOVb2hkcYy1fxd%2FSFiUuvKpk3s77pTPmcGWwzkHw3ae0PVn2fjbYRxsZEo77gzXIG6ck%2BLJNTaLFGW34GyE0Ye1i0IXbdQ6RndjEvyWgqtEYSkJSkpZKWByS9drg3HDvP%2BEU3aXjro8IwKmXSlteCMVKbbyOrETkYr3LgakFi2lT8CVa133CFEriMyb36GE0pl2E6SzyHQJGFoUgRndPWNrR7u3TJkNhorzMFFyv9MOfdESn50OQZmCZONAxCEf8g38of%2FX4LtCSFYUMsoa2Od1EcyyUU3xJvXjXkTXJPE4Ul%2Fd5h5HBnAAj0v2CKwIIP1ouiAABglumkMw%2FRRCAy9x58ed7vZKN8oDm0LKI3wVIZSCOqLJ2Rz91wjRovtfE5QEyxew2m0JujOl184Hule%2FgCbhJyBGTHnbxUAzg09fAju3WQz%2FZDjjNEfdj0u%2FXsmOhf3INXFajM73v61yo18CU4%2B%2FQCs%2Bz5bhyEoGhJf0aFYLRLNs8OMH6MBAIrAyd%2FjZtuNYhcJaspZHGoeqYK4MYaFMICf68cGOqUBNCj9ppMWvbZigP2U1vGPYkbuGY9nVxHReq4lR%2FI1x4pmoE%2FBwBpg4wqtTaU0nBCR6Kb4Y0AIFTTwFGRBMfNZuOpW4Zxna9AwQa3ISggw2qKJnTsN2CnUxDATKlRVGyhyd8Rjem74%2BjEvmEEGZamR3j6SgjXhIlKOwL%2FXVNPjCkvP3FS0E5KqU14q9tAL7ALq0dV1qU1ziy0QuOmtuBK4JPXrqiRP&X-Amz-Signature=e9d5f9b26a8926ca0e8679ff537620c25349940acd35a7a3cfce9dda50479977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGT6IUDC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICONd6lplQ752vzIif5xcVU9yC9RkyeISTmofSPgVLhrAiEA51Qxg71csIdUmoscDAhQ9PuZpc%2FjYcO90bhcR3a2bTYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGARlRcXRfD4DIEUlircA3CABpSiAj%2BiVvZs%2FdDzKi3QsqAUH2DwU5GULehjj5lz41OheQJV6p2fodwupkJjzuS0YTd7c1EEDbJjpjUISGgwcKwhalIFORBOVb2hkcYy1fxd%2FSFiUuvKpk3s77pTPmcGWwzkHw3ae0PVn2fjbYRxsZEo77gzXIG6ck%2BLJNTaLFGW34GyE0Ye1i0IXbdQ6RndjEvyWgqtEYSkJSkpZKWByS9drg3HDvP%2BEU3aXjro8IwKmXSlteCMVKbbyOrETkYr3LgakFi2lT8CVa133CFEriMyb36GE0pl2E6SzyHQJGFoUgRndPWNrR7u3TJkNhorzMFFyv9MOfdESn50OQZmCZONAxCEf8g38of%2FX4LtCSFYUMsoa2Od1EcyyUU3xJvXjXkTXJPE4Ul%2Fd5h5HBnAAj0v2CKwIIP1ouiAABglumkMw%2FRRCAy9x58ed7vZKN8oDm0LKI3wVIZSCOqLJ2Rz91wjRovtfE5QEyxew2m0JujOl184Hule%2FgCbhJyBGTHnbxUAzg09fAju3WQz%2FZDjjNEfdj0u%2FXsmOhf3INXFajM73v61yo18CU4%2B%2FQCs%2Bz5bhyEoGhJf0aFYLRLNs8OMH6MBAIrAyd%2FjZtuNYhcJaspZHGoeqYK4MYaFMICf68cGOqUBNCj9ppMWvbZigP2U1vGPYkbuGY9nVxHReq4lR%2FI1x4pmoE%2FBwBpg4wqtTaU0nBCR6Kb4Y0AIFTTwFGRBMfNZuOpW4Zxna9AwQa3ISggw2qKJnTsN2CnUxDATKlRVGyhyd8Rjem74%2BjEvmEEGZamR3j6SgjXhIlKOwL%2FXVNPjCkvP3FS0E5KqU14q9tAL7ALq0dV1qU1ziy0QuOmtuBK4JPXrqiRP&X-Amz-Signature=69084e01f2d182738bc83e071d6b2aa4a4eb2a370996a26fa17bbdea90204394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
