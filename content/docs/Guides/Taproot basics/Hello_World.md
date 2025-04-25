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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LAJ4RIN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIaTqfn0v%2BECHTvTrtll2wk3ccqArzbaEqV3Fzjmx9HwIgYcP4E%2FGqUdk6HAglYGod9uYo4nAXRPrmxLK0irDqm5Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOI9ghbL6PpcKwqLQyrcAwmOj1d5v%2FZhMDMbjGzn6ihp9X2LtAQIk9dNJRspPje0OLpdV3YqK0Ql5W0p5k6yQuFLYZqAuI2yndQoJcnp4XiKJL3xkOvQPLk7GImg%2BEYeJbK6rW12xmrZ65lpjRlCeDnNr62kNzf6uAnH0hTJTH0ojCWKZWRZeyEeXzvIsGmQRNZo1wk9Pwa02wDUL9MMU%2BZNwwEmn64jTYl%2FRs9z4gtIny2vu4YLrife8duh6RlQ9kC%2Bl4PPxPOt%2Bhz2uFumexwFWwFsqOtM6Oyp4C0WCQnzvQAmlFnzyUGQMMTipmBc6AVKs8a1hOe3%2FU74TlS7xl4szdrf3HKrYH7FuNFkktGxbjeELHUumfdKJ3xQWVIltytXuHsdH3TMDwhSDmQMlemelS4pDubQN4S8sQELzbrA6ldqwRxeno9v4xUN7hmfw4uBcQhHrIR4G8zNmWpA3t%2Bnx5vmrBYQLrGjiRWmal%2BtEsz3kU%2Bs3qMTsQOdOxMVXP5%2F3Ki7Liq5%2F81nbGywz1yIye9qj2%2BWWhEgFAF2A0dNtmu2ktGZVLCRafs0xqG2QTJSVCZr3%2FKSeoai4TihQuxzUnYP3kc1gfKHdLzIMb3tLde%2FCydOfEuPROB%2BdojAV8%2BF6wlBtlRdbGREMLmisMAGOqUByfSpOA2rLfsEWhKGhLf0I%2Fkyc7JecKgd1yLXWXktd4v5JDN%2F9ift2xa%2BCpSud8lzn%2BmXKFLyF6fn%2B0D5%2BFbpe0NEmvgGfLNO6P7m6hO63yS2BprsL35WPBrm%2ByNQtehaQtQ7J1Esz20he31ZVrqAgN8LSGGpvxc9qd7ojt054m0hjBJ5nCnyqfhDDddybizbzBsW8hg1iM9GL6NWQvE4tWSFIgj1&X-Amz-Signature=3a114cf6d7be0df93fec2e6c01e20b549d1391f8ad06a319ca772bc48789945f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LAJ4RIN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIaTqfn0v%2BECHTvTrtll2wk3ccqArzbaEqV3Fzjmx9HwIgYcP4E%2FGqUdk6HAglYGod9uYo4nAXRPrmxLK0irDqm5Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDOI9ghbL6PpcKwqLQyrcAwmOj1d5v%2FZhMDMbjGzn6ihp9X2LtAQIk9dNJRspPje0OLpdV3YqK0Ql5W0p5k6yQuFLYZqAuI2yndQoJcnp4XiKJL3xkOvQPLk7GImg%2BEYeJbK6rW12xmrZ65lpjRlCeDnNr62kNzf6uAnH0hTJTH0ojCWKZWRZeyEeXzvIsGmQRNZo1wk9Pwa02wDUL9MMU%2BZNwwEmn64jTYl%2FRs9z4gtIny2vu4YLrife8duh6RlQ9kC%2Bl4PPxPOt%2Bhz2uFumexwFWwFsqOtM6Oyp4C0WCQnzvQAmlFnzyUGQMMTipmBc6AVKs8a1hOe3%2FU74TlS7xl4szdrf3HKrYH7FuNFkktGxbjeELHUumfdKJ3xQWVIltytXuHsdH3TMDwhSDmQMlemelS4pDubQN4S8sQELzbrA6ldqwRxeno9v4xUN7hmfw4uBcQhHrIR4G8zNmWpA3t%2Bnx5vmrBYQLrGjiRWmal%2BtEsz3kU%2Bs3qMTsQOdOxMVXP5%2F3Ki7Liq5%2F81nbGywz1yIye9qj2%2BWWhEgFAF2A0dNtmu2ktGZVLCRafs0xqG2QTJSVCZr3%2FKSeoai4TihQuxzUnYP3kc1gfKHdLzIMb3tLde%2FCydOfEuPROB%2BdojAV8%2BF6wlBtlRdbGREMLmisMAGOqUByfSpOA2rLfsEWhKGhLf0I%2Fkyc7JecKgd1yLXWXktd4v5JDN%2F9ift2xa%2BCpSud8lzn%2BmXKFLyF6fn%2B0D5%2BFbpe0NEmvgGfLNO6P7m6hO63yS2BprsL35WPBrm%2ByNQtehaQtQ7J1Esz20he31ZVrqAgN8LSGGpvxc9qd7ojt054m0hjBJ5nCnyqfhDDddybizbzBsW8hg1iM9GL6NWQvE4tWSFIgj1&X-Amz-Signature=f7c8fbf950f6636da839cd7d2be6148ede7b3a58f45f912cadd9ebdfd9618320&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
