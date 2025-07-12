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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HN2O3K3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIDr2MYLVPlUZx5nFCA2y%2FlWwZCfD%2FYmA0mDMCh%2FivCOHAh9FO57Qzyf8I3ShXnLEjjO5cmbJVCD2elPJjolf20vyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCElTdCvx0o9p%2Fh5Iq3APthpCQD%2BRG8bLYmIICUYLiZoizbV6zHflVwiXjwi%2FXI6RQ4dZhEz%2FfW6qDXdIrbOujnHat9ciDI28DgP4%2B4D4QXtZxrnZyd0vICQyJPsI69wFWAnTFWDmdeOkISeolhkuDhIzjJcshgo%2BX4wY3MfWcTi7k7JVvuu3BbQMEyGqsTUFoNXF%2BNI3mNMIvo8c4ocAfv%2Bh3RhgxfnHSnozQH7cBr4idYPgm07m%2FTEp%2BbhaZXJslOz8TbC1sLUGv27smwLrdW5D8cptItXXwAjkAiMT%2FVrXst4hgYBqXhc5lUhAWJK905lkYsvhhU7sNNOcRGMVSBdGnYN7W%2BSlOIL9YJkQq50NQSYdG%2Bsai5rRaIAvJoVlTzx%2F%2BVaUrlU7Bz%2F1zu2AXYTb1Oh5W%2Ffh21qSOetD3mY0j0KKx4CkXw%2F8ZmgB%2BOsmEZ%2FfYTv53I3Zsf7069Jf%2Bh7buCiQwR0X0osM3sCotIfbnbp76Cm2RyD7tuWIM2D8JUmUzCJxj%2BQwLHESpI9ANz%2BhovUbLCis70tPq7r6HEikluH0MPRHcvYdFhYuhD3MhrRfeQz0BkKckDpMmjxJAWz9TEyZ9UsUN8Uq5Co4Q371i4f6tWMF9d3F3uv0Zn%2F9DleGd8amm8qlK4TCwrcrDBjqnAblbYBVN5wlQsg1FZQx3%2FsjlVcFo3DmGmf36tP45B%2FwF5MgLMZSO9aJpUzSdIHnwWYMk1NTAEYnKu9DmI1kAP7CzkKglZ6GtTmqPl7w4bajd32Hxa0USY6Asikyn9OE6TcFJSfgE9mCcCV86dRbgMrZy9cI0Iwm%2Fh2UPJjRsWSS%2Foy0HBboZRKmfsmEEOBKS%2BgyMqwSs5IMwMhSL%2FUGsGqkyihES8JWd&X-Amz-Signature=65613e40a7444379b6ff93ba00c446a3d361324162c6940eb16ed338bd830919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HN2O3K3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIDr2MYLVPlUZx5nFCA2y%2FlWwZCfD%2FYmA0mDMCh%2FivCOHAh9FO57Qzyf8I3ShXnLEjjO5cmbJVCD2elPJjolf20vyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCElTdCvx0o9p%2Fh5Iq3APthpCQD%2BRG8bLYmIICUYLiZoizbV6zHflVwiXjwi%2FXI6RQ4dZhEz%2FfW6qDXdIrbOujnHat9ciDI28DgP4%2B4D4QXtZxrnZyd0vICQyJPsI69wFWAnTFWDmdeOkISeolhkuDhIzjJcshgo%2BX4wY3MfWcTi7k7JVvuu3BbQMEyGqsTUFoNXF%2BNI3mNMIvo8c4ocAfv%2Bh3RhgxfnHSnozQH7cBr4idYPgm07m%2FTEp%2BbhaZXJslOz8TbC1sLUGv27smwLrdW5D8cptItXXwAjkAiMT%2FVrXst4hgYBqXhc5lUhAWJK905lkYsvhhU7sNNOcRGMVSBdGnYN7W%2BSlOIL9YJkQq50NQSYdG%2Bsai5rRaIAvJoVlTzx%2F%2BVaUrlU7Bz%2F1zu2AXYTb1Oh5W%2Ffh21qSOetD3mY0j0KKx4CkXw%2F8ZmgB%2BOsmEZ%2FfYTv53I3Zsf7069Jf%2Bh7buCiQwR0X0osM3sCotIfbnbp76Cm2RyD7tuWIM2D8JUmUzCJxj%2BQwLHESpI9ANz%2BhovUbLCis70tPq7r6HEikluH0MPRHcvYdFhYuhD3MhrRfeQz0BkKckDpMmjxJAWz9TEyZ9UsUN8Uq5Co4Q371i4f6tWMF9d3F3uv0Zn%2F9DleGd8amm8qlK4TCwrcrDBjqnAblbYBVN5wlQsg1FZQx3%2FsjlVcFo3DmGmf36tP45B%2FwF5MgLMZSO9aJpUzSdIHnwWYMk1NTAEYnKu9DmI1kAP7CzkKglZ6GtTmqPl7w4bajd32Hxa0USY6Asikyn9OE6TcFJSfgE9mCcCV86dRbgMrZy9cI0Iwm%2Fh2UPJjRsWSS%2Foy0HBboZRKmfsmEEOBKS%2BgyMqwSs5IMwMhSL%2FUGsGqkyihES8JWd&X-Amz-Signature=de94329b5e213d3246813a1cb37014d493d5d78945fc39327f32ea02cca231e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
