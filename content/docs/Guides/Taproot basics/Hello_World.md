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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52GOXKJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFDF5p10WvXgGldGRwiZRyLvlMzrvO20Cj3TynL50HNQIgB%2FJgSG40vHpJri9tfr9z7OllYuUe%2B3NQ4A9Le%2Fyzmi0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoGPB5JodFM3a4xSrcA0UGYZWAO7uaVwg55GHXC8HrULy4YXqb5gKrWZkrU%2FcUO6478bQjKGOpEZSstQGtUn2cjV%2BU0tFf8%2BlFrP8ixnLPFuuC1Int3e7iwJUgc8JM6lk8StGB5f0Gb3WCbt9TSLq21saT2tY0u66PXXfRdtVWLi9jurW4lBowFEOcXJ1Z79x0w2XLO2TAqp3nAgiX%2BvQH36CkzQG2JorAdNgtBjnoZCj%2BJsW1JZ4OxGdPNpSJsDmgd7BHY6t2QywiKfx7h3MZBX5WAubYEws5RVY%2B9%2B76VwKdt%2FhtwnkfEGvxrSDn5bkGoNJlX9V9%2BHnsgUaXrdGlJ79d9zz9DSjLE0gFtHyx7pP0lGWvhbw9uCnACsBzplPZLeE%2Fclk2meGAZfPzYF0IFHy%2F8B6PFJUeMdrt7fzzoFVqRkB4D1%2BppXmccPtecrOFJEq%2FG%2BS7R4jnsjX9l%2FvEz7d6KHjUSkShl2DEaymaYqWPHnmbaxR8Njm7Gw%2BkDN7HbAqLN7rqzwfFKYmzZgPAtLmyGLrKtCO5eD8nySmRhW3W2bPJtWCOJLGQAtYmmJTZJV24NBT%2FinL8UkIvrUj%2F66AM4JBVytS%2B2pjJ3C4BqNt8farHQHDo2TGVsy%2FclBKVeGzpS2I64b7LMJSF3sQGOqUBjmnOokdtLboPl%2FG%2BW7m1aROsbO4LHW3s0uq5Ee0xKC7bY97wek0j2zsq4A%2FBKz6YLzuD%2FZwdUdIRZyUyd6YkTd%2BlGSjYJ%2B1WPTalZsjZ5Ol4v9tghhRmbp5p0CLdCAyvf0okl2GaLUVpUYNDGKAtJdINzH7eN%2BKZvsb5R8lw21AHtSbT6c0ZPIhtyYX5Myve2mXBTY0B1ZItUx2gPoCsv0m2CkE%2B&X-Amz-Signature=35d61982e9a49bc561f1aef99faca54aab3861b20d8973297ec0915e2d7bfe0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52GOXKJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFDF5p10WvXgGldGRwiZRyLvlMzrvO20Cj3TynL50HNQIgB%2FJgSG40vHpJri9tfr9z7OllYuUe%2B3NQ4A9Le%2Fyzmi0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKoGPB5JodFM3a4xSrcA0UGYZWAO7uaVwg55GHXC8HrULy4YXqb5gKrWZkrU%2FcUO6478bQjKGOpEZSstQGtUn2cjV%2BU0tFf8%2BlFrP8ixnLPFuuC1Int3e7iwJUgc8JM6lk8StGB5f0Gb3WCbt9TSLq21saT2tY0u66PXXfRdtVWLi9jurW4lBowFEOcXJ1Z79x0w2XLO2TAqp3nAgiX%2BvQH36CkzQG2JorAdNgtBjnoZCj%2BJsW1JZ4OxGdPNpSJsDmgd7BHY6t2QywiKfx7h3MZBX5WAubYEws5RVY%2B9%2B76VwKdt%2FhtwnkfEGvxrSDn5bkGoNJlX9V9%2BHnsgUaXrdGlJ79d9zz9DSjLE0gFtHyx7pP0lGWvhbw9uCnACsBzplPZLeE%2Fclk2meGAZfPzYF0IFHy%2F8B6PFJUeMdrt7fzzoFVqRkB4D1%2BppXmccPtecrOFJEq%2FG%2BS7R4jnsjX9l%2FvEz7d6KHjUSkShl2DEaymaYqWPHnmbaxR8Njm7Gw%2BkDN7HbAqLN7rqzwfFKYmzZgPAtLmyGLrKtCO5eD8nySmRhW3W2bPJtWCOJLGQAtYmmJTZJV24NBT%2FinL8UkIvrUj%2F66AM4JBVytS%2B2pjJ3C4BqNt8farHQHDo2TGVsy%2FclBKVeGzpS2I64b7LMJSF3sQGOqUBjmnOokdtLboPl%2FG%2BW7m1aROsbO4LHW3s0uq5Ee0xKC7bY97wek0j2zsq4A%2FBKz6YLzuD%2FZwdUdIRZyUyd6YkTd%2BlGSjYJ%2B1WPTalZsjZ5Ol4v9tghhRmbp5p0CLdCAyvf0okl2GaLUVpUYNDGKAtJdINzH7eN%2BKZvsb5R8lw21AHtSbT6c0ZPIhtyYX5Myve2mXBTY0B1ZItUx2gPoCsv0m2CkE%2B&X-Amz-Signature=1c118af10e5d271534e502f13ed45bfa7bb1d029f7b31c826a36433b7c560351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
