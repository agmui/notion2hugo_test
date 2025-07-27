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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q7ZZLWU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEpIo0F9FzC0pbTYop%2FioHW5gaIZnsNp5IoeCPOZC%2FCQAiBKQqTJ6qCwgA8kjUUpEHFCFebfIIVG0A4c6TDRNTFFkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMNoWsbGjHY%2BGZ%2FMF9KtwDQl2apdM2KaX7nuRNmxSZRd0N7NMwPT4aM3OfxxE%2FFhzfbkJIXh4ql4O6RZnjYG85oHaKXOytvtBjxhE5Fc6HGaERAunBiYAIhitC42P7gC0lGdR7x0%2FJQ0tAuX%2FsSGqYl23%2BvQj%2FWi6F4vgkIf2YXScg2ZteD43ZeB5aFWDSIMtZOzSDIM%2FcI23jJmjU4arI%2B5HWyjCwE2XV7VHga6%2FfPOl%2FzNNTZ8LJB9m0sSvLuihrI29RVCXJgH6WMdNEiNv%2FLeNY9dLw%2Fa1EnfDPutOOZdPrml8OTug85NUOrlAfEV72Ln3HVGAgirtmE1e0Hp3VQe7l3ZBzuFsjK1P2OWFVZEwVChCETPmwLqTtlXFq4qWXOD0Dz8YCIyrryxuLmNFv4YYnZoLV8AzWDq3RSokO0LJaUUSlYcKCFOecvZ3eyZHhidwf6LB2Rwi%2FBNuHBkZoj49c40Q45ClmL3l2KBN78C%2BwINxkTlCOHURQzE6%2FHXodFPeWePb%2Bv5fwoQoieR%2BWqFqt66%2FJ7%2B1WQkpJtHHkctm8h1ITTkm1D0Q46QfrauQVs8bkCBL8KdPneraFwLH1IKvyfRsnnI84wawB4K3nf6rLTtybumGn%2BVH3YcM0Gd2MLh0Wq4V4%2F33fd3Qw5bqWxAY6pgHeASvFoKeQc9MRObb%2F%2BeIzAB4nggimYc1tiC0ymd3C0MUjrDPIYWduWco0TNtrxDvCJnTUFvAqtZMkf1Bv7qdkvJNdxQBAbJrBGANpYp9YVgVpl1oD7GsJtwwpkPtPSPYQopB8LNtWhORHyBdw7R%2Fi658zoBil12pNWWh7ciq3iRgha98qESsu2zrws4z7pHWnrxVgf0e%2BGfKgSP2r1V5KANYFUgh0&X-Amz-Signature=fcd62779387e28d32dcb3727c4478a4b0ef0b3878740610c0ed6a082a0431a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q7ZZLWU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEpIo0F9FzC0pbTYop%2FioHW5gaIZnsNp5IoeCPOZC%2FCQAiBKQqTJ6qCwgA8kjUUpEHFCFebfIIVG0A4c6TDRNTFFkyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMNoWsbGjHY%2BGZ%2FMF9KtwDQl2apdM2KaX7nuRNmxSZRd0N7NMwPT4aM3OfxxE%2FFhzfbkJIXh4ql4O6RZnjYG85oHaKXOytvtBjxhE5Fc6HGaERAunBiYAIhitC42P7gC0lGdR7x0%2FJQ0tAuX%2FsSGqYl23%2BvQj%2FWi6F4vgkIf2YXScg2ZteD43ZeB5aFWDSIMtZOzSDIM%2FcI23jJmjU4arI%2B5HWyjCwE2XV7VHga6%2FfPOl%2FzNNTZ8LJB9m0sSvLuihrI29RVCXJgH6WMdNEiNv%2FLeNY9dLw%2Fa1EnfDPutOOZdPrml8OTug85NUOrlAfEV72Ln3HVGAgirtmE1e0Hp3VQe7l3ZBzuFsjK1P2OWFVZEwVChCETPmwLqTtlXFq4qWXOD0Dz8YCIyrryxuLmNFv4YYnZoLV8AzWDq3RSokO0LJaUUSlYcKCFOecvZ3eyZHhidwf6LB2Rwi%2FBNuHBkZoj49c40Q45ClmL3l2KBN78C%2BwINxkTlCOHURQzE6%2FHXodFPeWePb%2Bv5fwoQoieR%2BWqFqt66%2FJ7%2B1WQkpJtHHkctm8h1ITTkm1D0Q46QfrauQVs8bkCBL8KdPneraFwLH1IKvyfRsnnI84wawB4K3nf6rLTtybumGn%2BVH3YcM0Gd2MLh0Wq4V4%2F33fd3Qw5bqWxAY6pgHeASvFoKeQc9MRObb%2F%2BeIzAB4nggimYc1tiC0ymd3C0MUjrDPIYWduWco0TNtrxDvCJnTUFvAqtZMkf1Bv7qdkvJNdxQBAbJrBGANpYp9YVgVpl1oD7GsJtwwpkPtPSPYQopB8LNtWhORHyBdw7R%2Fi658zoBil12pNWWh7ciq3iRgha98qESsu2zrws4z7pHWnrxVgf0e%2BGfKgSP2r1V5KANYFUgh0&X-Amz-Signature=53205e29ac36c6335f15fb089864667dc17a07a638bc9b33e5111c970d20182a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
