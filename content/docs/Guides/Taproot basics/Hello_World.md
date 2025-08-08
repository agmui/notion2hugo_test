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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWXCIXF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC7TUJgfJyf65zUAoG7xsQKRrOfPyd2CmwVhAEX9sXcyAIgb2TA1v1ukjNZHsM9AmqVwpgBvGBuATULNYnRKCGjzDgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgnaobCkK2z2kCpjSrcA6Pi%2FGg9VGyCncV3r5KY3%2BPpwhSz5u8LZ450AUS%2BEeXF98A1lp7RC3INQfn1esFLV7e4QsN8JAE3XaDHNO7mj4jPl4Vtw00QY1DByaySRuXpBCGmZByjPFqkpDAV4VlVFt0e1E%2FBXny5YXL6a4c9Os2hLA0qEI5DZXCXMy363zMIzVnmqQ0TAguEiN65Fbm9oee73A9rggCYdJBM1HvoSeA6OQ7qTNdO8pF8fMMjaR4IsghTisIj9U3JVpRfBV2BgGeYNrq1RUfRDD%2B6FjWxHeq6Ybiw3zh4mlM9ElXd9Euwxv2U4h6RQcET17V91%2F%2FJ7XHXkxAPDkxhe1MEp5jYE7o3%2Fvu2kPmZ45bzUsFimYeP3n%2FaBv%2B2fizJ8TxGz9EqGss05jmSOEEhid835ORR7XoKz%2FcxDIZSmNPqQMcIdIGRpLzoHH5DaWuh%2FSkTnJv9K3otMY8FIMEVqZ%2FHjSYF9CbcZCW7Ud0Ail6VH5AdZXW4UAmSLhJy6LLMVwvis2sKlDTFHUgVaEBggrQWHEBfZANaY0ouhJrC8uhVV6%2F0JQLmVVDDZIYSpmyOuTWqoUUt%2B1%2BfOM0XYSbjZbMSYs6C9ueri%2FFzrVgI7eNdJBL318yUVUtU2FeM66pxjTkKMMPf2cQGOqUBnc%2BDs7wuYMC0Rj4Gx2HJ2fcjhKdV8UF%2BRI397Sv1pwQVbJKzDW%2BJfGpRpZpjWwYWciW8%2FJCU3hW9dIyl8nPEahMA%2Bys8FlZlAS2JRUizYW2hPK8FQNYKN8HsIYq5fS%2FOWdx3X4xsZumDiZPQfknlGtTpui4HT1AQfITXZB6J073RA%2FzEFvqnkB1wc2oBkp2zCpLsYmqYXbHBjTwKoN9qS9fOnXiy&X-Amz-Signature=ad6fc2a85c144c951423a9b187f00d919b6417e8b47da58b7b5fffff7602b6cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBWXCIXF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC7TUJgfJyf65zUAoG7xsQKRrOfPyd2CmwVhAEX9sXcyAIgb2TA1v1ukjNZHsM9AmqVwpgBvGBuATULNYnRKCGjzDgqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgnaobCkK2z2kCpjSrcA6Pi%2FGg9VGyCncV3r5KY3%2BPpwhSz5u8LZ450AUS%2BEeXF98A1lp7RC3INQfn1esFLV7e4QsN8JAE3XaDHNO7mj4jPl4Vtw00QY1DByaySRuXpBCGmZByjPFqkpDAV4VlVFt0e1E%2FBXny5YXL6a4c9Os2hLA0qEI5DZXCXMy363zMIzVnmqQ0TAguEiN65Fbm9oee73A9rggCYdJBM1HvoSeA6OQ7qTNdO8pF8fMMjaR4IsghTisIj9U3JVpRfBV2BgGeYNrq1RUfRDD%2B6FjWxHeq6Ybiw3zh4mlM9ElXd9Euwxv2U4h6RQcET17V91%2F%2FJ7XHXkxAPDkxhe1MEp5jYE7o3%2Fvu2kPmZ45bzUsFimYeP3n%2FaBv%2B2fizJ8TxGz9EqGss05jmSOEEhid835ORR7XoKz%2FcxDIZSmNPqQMcIdIGRpLzoHH5DaWuh%2FSkTnJv9K3otMY8FIMEVqZ%2FHjSYF9CbcZCW7Ud0Ail6VH5AdZXW4UAmSLhJy6LLMVwvis2sKlDTFHUgVaEBggrQWHEBfZANaY0ouhJrC8uhVV6%2F0JQLmVVDDZIYSpmyOuTWqoUUt%2B1%2BfOM0XYSbjZbMSYs6C9ueri%2FFzrVgI7eNdJBL318yUVUtU2FeM66pxjTkKMMPf2cQGOqUBnc%2BDs7wuYMC0Rj4Gx2HJ2fcjhKdV8UF%2BRI397Sv1pwQVbJKzDW%2BJfGpRpZpjWwYWciW8%2FJCU3hW9dIyl8nPEahMA%2Bys8FlZlAS2JRUizYW2hPK8FQNYKN8HsIYq5fS%2FOWdx3X4xsZumDiZPQfknlGtTpui4HT1AQfITXZB6J073RA%2FzEFvqnkB1wc2oBkp2zCpLsYmqYXbHBjTwKoN9qS9fOnXiy&X-Amz-Signature=339a0cd7a5ad4bc480dbd3209db817751ee379992554f2de3c6f7c670e59dfce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
