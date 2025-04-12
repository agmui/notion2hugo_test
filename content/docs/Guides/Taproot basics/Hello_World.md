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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKG2EMEP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDig8R1PQGAyPNUMreZ1a8rneunQoOLqiFpLFq%2BBoO55AiBiNMUYM2WxFCZ8gkv1UATYFqs%2BzPI3ARQ3kqZ8uSk6aCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QcediuuEzflqRr%2FKtwDBxMXoEEM8HrLHC1FyXj9buvvuwVbWtRt3itl6q0XTXVI7Q8LxJ96ZNn5ytQliKI38c6MwHEd5rISqp6Y94GvQU5gRpafvI9EiWMjwGN7kalX14qY7tK9BGwpdqbGac1uPCHJKQKxfHvBhU%2BDexPb0z6lqsY0pJLyiVcROk%2Bi9vLM4kcPzulDW07bgi0CsMGmyx2NgS8mVQtumuJTBxxZYZadmk44oKhlatuVfzdhpFqxpDhGBXJMBBKRk3pdWQ2AGz7xPY3%2FSQC8cq34GbrTzKJSt%2B%2FpFZ8GR8U0tFy88MnwNGTxsKoyue8Uq90Av39PYqnxCsf694nCKFcPBeWW9P6NQ%2BSYnGGDU12bLLlFFv%2FXqPWXbPIsaA3x8Qn5JioDRlG61cSF3WeSDUazB%2Fbr4PCtNFGFOGNdhPmKwGLLD8liyGfotNBvCxTK44zNSAs6JG0ueuEc%2B7saOWpkVGo7imASTgcDi4pwbD5VMI8f9TKehB9UAFrWYFHLIIOzJJood59bFDPsHdBPt07S%2Fzfb%2BxK1HNWOtWtjCgGoIi9gnOi9zvudW%2Fnz6rZFR0otrsoVECwNk8wzFJ69%2BCkzxgITpsXhDtE7IIHEkOVd2u1NIJX0DvEYxY8tivEiASMw2bfnvwY6pgHTVvVgWPKs2pKheOcSBvE61G8FRJwtLqrGnlmPPsDgeaVJJSltxeHhThrFYUHIvwIoZts%2Bh50hwurZmlwkFBa2EnzAC8PwRmR%2BRuN%2FeEgeGXrDANTz0SXkScw7KWTepJkh3amHQZ2wAbhgw7qFOOSc1z%2BWjBv0sXJQeLJZ2HnfCujyF0TWyNWBzMYwC3K0dROMBMqN75tMEMSmVaRy1jnju66xyE6O&X-Amz-Signature=87169725dba1fef566ddd8c14592ceadcc104fc0982fb0357bbbe2fc37b87665&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKG2EMEP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDig8R1PQGAyPNUMreZ1a8rneunQoOLqiFpLFq%2BBoO55AiBiNMUYM2WxFCZ8gkv1UATYFqs%2BzPI3ARQ3kqZ8uSk6aCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QcediuuEzflqRr%2FKtwDBxMXoEEM8HrLHC1FyXj9buvvuwVbWtRt3itl6q0XTXVI7Q8LxJ96ZNn5ytQliKI38c6MwHEd5rISqp6Y94GvQU5gRpafvI9EiWMjwGN7kalX14qY7tK9BGwpdqbGac1uPCHJKQKxfHvBhU%2BDexPb0z6lqsY0pJLyiVcROk%2Bi9vLM4kcPzulDW07bgi0CsMGmyx2NgS8mVQtumuJTBxxZYZadmk44oKhlatuVfzdhpFqxpDhGBXJMBBKRk3pdWQ2AGz7xPY3%2FSQC8cq34GbrTzKJSt%2B%2FpFZ8GR8U0tFy88MnwNGTxsKoyue8Uq90Av39PYqnxCsf694nCKFcPBeWW9P6NQ%2BSYnGGDU12bLLlFFv%2FXqPWXbPIsaA3x8Qn5JioDRlG61cSF3WeSDUazB%2Fbr4PCtNFGFOGNdhPmKwGLLD8liyGfotNBvCxTK44zNSAs6JG0ueuEc%2B7saOWpkVGo7imASTgcDi4pwbD5VMI8f9TKehB9UAFrWYFHLIIOzJJood59bFDPsHdBPt07S%2Fzfb%2BxK1HNWOtWtjCgGoIi9gnOi9zvudW%2Fnz6rZFR0otrsoVECwNk8wzFJ69%2BCkzxgITpsXhDtE7IIHEkOVd2u1NIJX0DvEYxY8tivEiASMw2bfnvwY6pgHTVvVgWPKs2pKheOcSBvE61G8FRJwtLqrGnlmPPsDgeaVJJSltxeHhThrFYUHIvwIoZts%2Bh50hwurZmlwkFBa2EnzAC8PwRmR%2BRuN%2FeEgeGXrDANTz0SXkScw7KWTepJkh3amHQZ2wAbhgw7qFOOSc1z%2BWjBv0sXJQeLJZ2HnfCujyF0TWyNWBzMYwC3K0dROMBMqN75tMEMSmVaRy1jnju66xyE6O&X-Amz-Signature=66b8207836b4d92f1b9bf399bf34815e8965dc6c8b2c36f99a0dd02c35df2862&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
