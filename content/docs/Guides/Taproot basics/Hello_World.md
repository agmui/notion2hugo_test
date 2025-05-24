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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QNJAI5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDDe1uCJnUt%2Bb%2FkE4Jt0PPEhC6060%2FIRxacKTm3he%2FTxQIhAIOe6k6bTfTHjJinsGEUwo22NbCDlg3%2BsLFYaZZ%2FY4huKv8DCBEQABoMNjM3NDIzMTgzODA1IgwlbmJR7gXgXkt8vOoq3AMwPkaqWR2eJGJrl2Mi2XDktY5nuN2j40dJ00DLW7LtCQgC2AKmqWEfLCPTijczue%2BfUqq2F2%2BEOZyI0Z%2FmhOZqWfX%2BHyjeyGieVzkiY56PJrhI4jvd7YM3pihLnbQtBSiCEX7AoAu0WVS%2BaS8FDsayodmIGXBbuub0EEYC%2BF7hEw5Yqs62HxZi19nfW8Ah%2B58i9ZjcRfJZDhxyzleiv2Vh4sW4dI9uzNTSaC6daHK4vsPmiMBHKc45hBNTmBQZE6hg%2B7T7AHhdL%2B0ttgGtEi0TxP0GIhOTnapOkYfEzdbUhC4t1hkFQRMxrBpiUcW1FzT7Y1QMfhgdQjC90dQj2SSYLNRqzGrXJNGouMNbj3cWJ97Wpw26iiKiTxV%2BhY2Dy%2FJxuC838wnaofpnkK%2BlJgy%2BRPkcUEudHMjR3AEhh%2FAerw2h9avE3BaM0uB54rtllAgwuZUzBkHLBKzGm%2BDxsW8dysZU0oqRyrgKr0yWoBv24UCFFau%2F5Bj%2BsVPDy8lbOP9UPGxttmvewRoyGpEOVQq7zemGlhdKRqpC3%2F3IPzCfBH0gpf8PH6FCsj53RlqUo7QrRl6s5JNdaAABQ4u9h%2B%2FeQ4bbdmTno4PESKauJSTvNz%2B7bJ92No14orUoizCjgMbBBjqkAc1OO98xKRs%2FqGXKAdFQb9yk%2BfyR60%2BsTFDH%2B1pNWcxg%2F3b25nERD6HEUOQGbiPlKP6FS88zD0EC5HWWHRBfum%2FQlpbboaD7afMueU7FXRgrHpJSWj6xFOTz705GFSF5kpso1jhrEbJdHsHY1lwuKGIe6oQeuilMv5C27Vqwueka%2BXEWhkhQqoRxECzWAVNaudGuYYIV9Jhdf9kPeWuAe5wiWlkZ&X-Amz-Signature=1a2e315fdd1560c998492e2df68c818099529d06f2650758501d9a7ac0809aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QNJAI5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDDe1uCJnUt%2Bb%2FkE4Jt0PPEhC6060%2FIRxacKTm3he%2FTxQIhAIOe6k6bTfTHjJinsGEUwo22NbCDlg3%2BsLFYaZZ%2FY4huKv8DCBEQABoMNjM3NDIzMTgzODA1IgwlbmJR7gXgXkt8vOoq3AMwPkaqWR2eJGJrl2Mi2XDktY5nuN2j40dJ00DLW7LtCQgC2AKmqWEfLCPTijczue%2BfUqq2F2%2BEOZyI0Z%2FmhOZqWfX%2BHyjeyGieVzkiY56PJrhI4jvd7YM3pihLnbQtBSiCEX7AoAu0WVS%2BaS8FDsayodmIGXBbuub0EEYC%2BF7hEw5Yqs62HxZi19nfW8Ah%2B58i9ZjcRfJZDhxyzleiv2Vh4sW4dI9uzNTSaC6daHK4vsPmiMBHKc45hBNTmBQZE6hg%2B7T7AHhdL%2B0ttgGtEi0TxP0GIhOTnapOkYfEzdbUhC4t1hkFQRMxrBpiUcW1FzT7Y1QMfhgdQjC90dQj2SSYLNRqzGrXJNGouMNbj3cWJ97Wpw26iiKiTxV%2BhY2Dy%2FJxuC838wnaofpnkK%2BlJgy%2BRPkcUEudHMjR3AEhh%2FAerw2h9avE3BaM0uB54rtllAgwuZUzBkHLBKzGm%2BDxsW8dysZU0oqRyrgKr0yWoBv24UCFFau%2F5Bj%2BsVPDy8lbOP9UPGxttmvewRoyGpEOVQq7zemGlhdKRqpC3%2F3IPzCfBH0gpf8PH6FCsj53RlqUo7QrRl6s5JNdaAABQ4u9h%2B%2FeQ4bbdmTno4PESKauJSTvNz%2B7bJ92No14orUoizCjgMbBBjqkAc1OO98xKRs%2FqGXKAdFQb9yk%2BfyR60%2BsTFDH%2B1pNWcxg%2F3b25nERD6HEUOQGbiPlKP6FS88zD0EC5HWWHRBfum%2FQlpbboaD7afMueU7FXRgrHpJSWj6xFOTz705GFSF5kpso1jhrEbJdHsHY1lwuKGIe6oQeuilMv5C27Vqwueka%2BXEWhkhQqoRxECzWAVNaudGuYYIV9Jhdf9kPeWuAe5wiWlkZ&X-Amz-Signature=821e99b468e8b50ce3d45444c27498e92caa64a755bf64f61e8adb1cd015dcdc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
