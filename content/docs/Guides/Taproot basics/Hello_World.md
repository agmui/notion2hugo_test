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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76SFEQL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0ohd9jYKlXxpt9e0eRzZ8Bl3OXBZpbT4hZKPKUmSxgAIgYMZQ2mdFebWsZWl%2Fkj0ERbuOn4KUuiguXdBB%2FxZSyIUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEerroVZ4nY23bmN7yrcA%2FGBNwpBc9vgMpPaZqa7JX91EwKrHqtyGp3IP32Rsu%2Fqc%2FjwsiknxDnh8ZU5hkLL33c4TkWQCommYM7f2ynXjUVHpBy4ZP6cG0RrGd5srZ4x08%2F6O5drVO6R5fkRWRJVAVys2RNoswVLqsTwGFvHbI%2B0bfVs3rfWzY631vUrW2FwUraDICYKgpvf3LOZbFawxVZCctYhD%2BFIEtPTYcOKeiSTZhKnmDZVzSAUTNWnnQGsWb%2BXl334htPdhe8Ip%2BKQH7xKNMxe5ggOy4grhA6exQdFJ1wD8qYMDvxAD%2FSe9Wo8XIkxeAPYKeWScLUcvjm7EZ%2FAfwl%2FHOULe%2FK0ZNFejjfJMGv7YPaF0cTxEBcZ3JZElztkygCVoxFJCBZdQfTyrop%2Fezn1cpLYvYUfkeYbaSwWLQ1gtc3NhREsbCqapOyfmRBJnFj5h8%2BxK5pyBrngNekMd7Qg0%2FiY5yHmAK78%2BW4qeIAhHRJc2jt73MOSfUZFG2uGR0tZqUWOyJavE2CIESzQxD8XI6MGXyBqoT4FwjqagWFsTp9PUCBrrLSlFR4ObXLLwilUdSyBVjrGwnv%2Bd7Q9KN1oSVUVlDHkTqiZtS7aKVmA%2BAeWx%2BupNhkHF6gWKbPNqAhNYe3atOy1MPjChMIGOqUBFUmNRW6T%2BuWy%2F%2B%2Bi483PBkXANZzv6wRZ28%2BBAddyCijXisn9dBuQ8EPn%2BnR8iwdhpnYxexl%2BuBifK3PA1B3mwBTHGaoycvzrid3Qlm%2FX3mJQB%2F92O3bX4KBe3hl2fwtEQoorfVBzYc%2FePfV6vZmo8AXycQxIo%2FGlLvugXsqOsOSBCLVNZBVAJSCpwmD0rwQI8%2FgE2Fc3rGT28cu4vzfLeFfDmk5F&X-Amz-Signature=b100a8f8860b723e3c213179e7bfaf5fe549961a56278b11f9ffe085d4830b31&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S76SFEQL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0ohd9jYKlXxpt9e0eRzZ8Bl3OXBZpbT4hZKPKUmSxgAIgYMZQ2mdFebWsZWl%2Fkj0ERbuOn4KUuiguXdBB%2FxZSyIUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEerroVZ4nY23bmN7yrcA%2FGBNwpBc9vgMpPaZqa7JX91EwKrHqtyGp3IP32Rsu%2Fqc%2FjwsiknxDnh8ZU5hkLL33c4TkWQCommYM7f2ynXjUVHpBy4ZP6cG0RrGd5srZ4x08%2F6O5drVO6R5fkRWRJVAVys2RNoswVLqsTwGFvHbI%2B0bfVs3rfWzY631vUrW2FwUraDICYKgpvf3LOZbFawxVZCctYhD%2BFIEtPTYcOKeiSTZhKnmDZVzSAUTNWnnQGsWb%2BXl334htPdhe8Ip%2BKQH7xKNMxe5ggOy4grhA6exQdFJ1wD8qYMDvxAD%2FSe9Wo8XIkxeAPYKeWScLUcvjm7EZ%2FAfwl%2FHOULe%2FK0ZNFejjfJMGv7YPaF0cTxEBcZ3JZElztkygCVoxFJCBZdQfTyrop%2Fezn1cpLYvYUfkeYbaSwWLQ1gtc3NhREsbCqapOyfmRBJnFj5h8%2BxK5pyBrngNekMd7Qg0%2FiY5yHmAK78%2BW4qeIAhHRJc2jt73MOSfUZFG2uGR0tZqUWOyJavE2CIESzQxD8XI6MGXyBqoT4FwjqagWFsTp9PUCBrrLSlFR4ObXLLwilUdSyBVjrGwnv%2Bd7Q9KN1oSVUVlDHkTqiZtS7aKVmA%2BAeWx%2BupNhkHF6gWKbPNqAhNYe3atOy1MPjChMIGOqUBFUmNRW6T%2BuWy%2F%2B%2Bi483PBkXANZzv6wRZ28%2BBAddyCijXisn9dBuQ8EPn%2BnR8iwdhpnYxexl%2BuBifK3PA1B3mwBTHGaoycvzrid3Qlm%2FX3mJQB%2F92O3bX4KBe3hl2fwtEQoorfVBzYc%2FePfV6vZmo8AXycQxIo%2FGlLvugXsqOsOSBCLVNZBVAJSCpwmD0rwQI8%2FgE2Fc3rGT28cu4vzfLeFfDmk5F&X-Amz-Signature=1dbb83e07b6e638c5a5d10ec69de8b7020467559f2b08de891bf0ca1684bf14f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
