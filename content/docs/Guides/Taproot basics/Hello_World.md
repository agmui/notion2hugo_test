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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRB2XC2E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt2j%2FOSCUb5DtvOZbBh55qlJN%2F3xPr5DeMWS4DUTmPYAiA3gjM%2FB2GwT4TIRU4ixumk2wE2UfqsJWyvMaq0J1QU3CqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNaz5ZfCfN9nH%2BBi%2FKtwDI%2BhipQQPMA0cTNIdRnxZmcrzf2VzQQW6oR5XxPqG6OvuQZABxYdBZoOG7Z9lN1BWlHuXODZOZyiXdTRBOM6W%2FgLN68J7LKAC45QvlIEYPD5nX0BpEg4HED3FtzNgU2JvSj4e1rRGxafThiJ7VX0VvdNlQoPpB3ELKP5i0QNFENDA%2BMauuPNY1tFjXL5GqJetK826Y1Ad6c0McUWicoOmxpWZMKe4scsW0vNEE0RzdBxIYvOsDqlCgnJNnTHI%2BU0XC%2BdNhhcC3Vpm4QL%2FzyS4or0JQLlNKExQsMszKBIezk4NW9%2ByDIomUj7Cm8b1Nd4%2BQp9xEJyms7%2BnBs0SxFs6raDSaEy48fNhWT%2FxvPIoPNFGtnVH%2FAb1sTV4n%2F19tmjoRpeQsuI9v%2FZku8h1okWnWdtz7tVypvgF0D5fWyXDKAgjgr2sl7dpaMExqhB9c7Wz1HVZV1XSe6jmubYf6vQj5YUFAC7W6jpU%2BRCWowkj12nOu%2Bd5Up84xXkt8XJrLbhKOGjZnFY48q10iEzI4zIIkWWuJuFMccVwIfbnPf9ZS9JcJuL2512CYpZ2OS6Fat8gTJnxxVFX5TvBPgnOKhT1fiI6%2FkDOEKK8wx2hcw89LsVEmMCF23h2%2BXQkhqQwmp75wwY6pgGCBdagNQ9f0kpD%2FYCDF%2BAcCxYX6ONe2hlHLQYLXDD%2B37b7Q8%2FOUlr5bJhuZE6emOaQyJIXdkorSlMduRL0mAllQKlD679y1a4KTRm9XsW6g9e7KrZZT8szfDMPqfOnYW3fFXJtjzG2AJS97Jz7nmFrn3d9Shwizv4EATH3ZMiveiuazfXbkvJmadDmMnhZzsu4hPJ50iRghfyTDR8JH%2B6bwdhTkdNO&X-Amz-Signature=e4ed9177a3905bb685bb402fbfc2cfa26081753fea0e2c311f6bec0fc2c83a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRB2XC2E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFt2j%2FOSCUb5DtvOZbBh55qlJN%2F3xPr5DeMWS4DUTmPYAiA3gjM%2FB2GwT4TIRU4ixumk2wE2UfqsJWyvMaq0J1QU3CqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNaz5ZfCfN9nH%2BBi%2FKtwDI%2BhipQQPMA0cTNIdRnxZmcrzf2VzQQW6oR5XxPqG6OvuQZABxYdBZoOG7Z9lN1BWlHuXODZOZyiXdTRBOM6W%2FgLN68J7LKAC45QvlIEYPD5nX0BpEg4HED3FtzNgU2JvSj4e1rRGxafThiJ7VX0VvdNlQoPpB3ELKP5i0QNFENDA%2BMauuPNY1tFjXL5GqJetK826Y1Ad6c0McUWicoOmxpWZMKe4scsW0vNEE0RzdBxIYvOsDqlCgnJNnTHI%2BU0XC%2BdNhhcC3Vpm4QL%2FzyS4or0JQLlNKExQsMszKBIezk4NW9%2ByDIomUj7Cm8b1Nd4%2BQp9xEJyms7%2BnBs0SxFs6raDSaEy48fNhWT%2FxvPIoPNFGtnVH%2FAb1sTV4n%2F19tmjoRpeQsuI9v%2FZku8h1okWnWdtz7tVypvgF0D5fWyXDKAgjgr2sl7dpaMExqhB9c7Wz1HVZV1XSe6jmubYf6vQj5YUFAC7W6jpU%2BRCWowkj12nOu%2Bd5Up84xXkt8XJrLbhKOGjZnFY48q10iEzI4zIIkWWuJuFMccVwIfbnPf9ZS9JcJuL2512CYpZ2OS6Fat8gTJnxxVFX5TvBPgnOKhT1fiI6%2FkDOEKK8wx2hcw89LsVEmMCF23h2%2BXQkhqQwmp75wwY6pgGCBdagNQ9f0kpD%2FYCDF%2BAcCxYX6ONe2hlHLQYLXDD%2B37b7Q8%2FOUlr5bJhuZE6emOaQyJIXdkorSlMduRL0mAllQKlD679y1a4KTRm9XsW6g9e7KrZZT8szfDMPqfOnYW3fFXJtjzG2AJS97Jz7nmFrn3d9Shwizv4EATH3ZMiveiuazfXbkvJmadDmMnhZzsu4hPJ50iRghfyTDR8JH%2B6bwdhTkdNO&X-Amz-Signature=1cf622919570be7771647579233736be31b1a5b76d0e67d36ea8fe5e4b686bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
