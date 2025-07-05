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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654RQRQJJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDHstOBsbsRivtb77CDGR25Czkj4ofWlxD0dsu7pxPknAiA0X5%2B%2FK6MK3QSwWVxSSrlT9vMhMw1jNzqTt%2Fgp5ojl3ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMHkrCpG%2BS%2BVKcLtoHKtwDHnwvkE0FteYLGSzuyrMpcm%2F7hT4Vi3OFcTmVDDCh%2B%2FaJGsAm%2BfB%2FYV0m3CLAf0RartD%2B2M3MGQDnXsSOO5wnsk6NNq8IuTt0AViO07JlX2wggjD0GL3gf7ASlRJLlh8k4uamUGO33GN9BFI1aaD3a1kEAJ%2FbDlKyzEEm3nsLNp3yoHWbKs1s0y4Q96mNMTaM8R8kv8C0vsDsb3NkskzfAAGz2%2Baz80Ymk5rFGrWyuRQiNACZlus7hE4%2FjQPXaofIIPoLQCcrTiIzkcjdMNuN0Y%2FgxOjkKHwtsjtVGHPtfPN%2BmTa2FaIqeq6c%2BLhuXZCRjFpdye2Geb0ml4UF6NFXmCG5JCYlX7J4PGhGAqPvPqk29gTj4bGVR866vPYoQF0lKhlgpbjeJeoT4CCsRPKEz2CAR9wMoS4Rk%2BFGBT6w9Q%2F2C6ojfvRSCcQCxVAX9ejpfWUjBCHfjSijMsixdjqVGxI5MeT4Hlug5KSH9BnjLPQ%2B3liG5ssJGHURqb%2B4fE7N%2BVrk8ZuRc5LRwpL9L1YMFS9R6uOV4mx9vUIzsk6vkX71sP6D1CEbojQ1UK3nZFnsF6O7lHXJ9ckzcOiEGmDPiY4Ht6scC0Bsz3m0pFZvZt73lqvbv8zSRhIH91AwiIekwwY6pgGfgeMq8tTizJLCDfyl5hSgUrswlNvWIVEJFwWB3oLQKJfpXxA0BUVegwM%2BKA8FJnQu4cp2Tsjg2xeSlF9twB2L2zsBHj75H7UuKiF3gA0D5SzyIHo1x1QYmGkP%2F6RoX%2FPXCzSmZeb7O5rPA7YkVt3tQsFOPB3JmUoVOvfR5U1U7cynuWROvyyPFa4axvGssE2Sk1qfUo6xP1kppHFZJEvJrzenlFLi&X-Amz-Signature=b5a39e62503f72d3db8855ec7c4b3e4f636fc798bbdf43cd3596096b678299ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654RQRQJJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIDHstOBsbsRivtb77CDGR25Czkj4ofWlxD0dsu7pxPknAiA0X5%2B%2FK6MK3QSwWVxSSrlT9vMhMw1jNzqTt%2Fgp5ojl3ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMHkrCpG%2BS%2BVKcLtoHKtwDHnwvkE0FteYLGSzuyrMpcm%2F7hT4Vi3OFcTmVDDCh%2B%2FaJGsAm%2BfB%2FYV0m3CLAf0RartD%2B2M3MGQDnXsSOO5wnsk6NNq8IuTt0AViO07JlX2wggjD0GL3gf7ASlRJLlh8k4uamUGO33GN9BFI1aaD3a1kEAJ%2FbDlKyzEEm3nsLNp3yoHWbKs1s0y4Q96mNMTaM8R8kv8C0vsDsb3NkskzfAAGz2%2Baz80Ymk5rFGrWyuRQiNACZlus7hE4%2FjQPXaofIIPoLQCcrTiIzkcjdMNuN0Y%2FgxOjkKHwtsjtVGHPtfPN%2BmTa2FaIqeq6c%2BLhuXZCRjFpdye2Geb0ml4UF6NFXmCG5JCYlX7J4PGhGAqPvPqk29gTj4bGVR866vPYoQF0lKhlgpbjeJeoT4CCsRPKEz2CAR9wMoS4Rk%2BFGBT6w9Q%2F2C6ojfvRSCcQCxVAX9ejpfWUjBCHfjSijMsixdjqVGxI5MeT4Hlug5KSH9BnjLPQ%2B3liG5ssJGHURqb%2B4fE7N%2BVrk8ZuRc5LRwpL9L1YMFS9R6uOV4mx9vUIzsk6vkX71sP6D1CEbojQ1UK3nZFnsF6O7lHXJ9ckzcOiEGmDPiY4Ht6scC0Bsz3m0pFZvZt73lqvbv8zSRhIH91AwiIekwwY6pgGfgeMq8tTizJLCDfyl5hSgUrswlNvWIVEJFwWB3oLQKJfpXxA0BUVegwM%2BKA8FJnQu4cp2Tsjg2xeSlF9twB2L2zsBHj75H7UuKiF3gA0D5SzyIHo1x1QYmGkP%2F6RoX%2FPXCzSmZeb7O5rPA7YkVt3tQsFOPB3JmUoVOvfR5U1U7cynuWROvyyPFa4axvGssE2Sk1qfUo6xP1kppHFZJEvJrzenlFLi&X-Amz-Signature=45be1311472d10a980b0cad50580e8d7c6785e15c10b105b9212df66e40f3929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
