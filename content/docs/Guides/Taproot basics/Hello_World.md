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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF2AKO7K%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaau8H1cvo0ksmJZvu%2Fr87tpghou4X8J3JPC6N7RGjAAiBrC0yhAA8UlQUMziACWbkf2w8C%2B64PSszQ3PhY9APhhyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtHYMKVi8HvH64T3kKtwDEJXF%2FInWof1zUjDhILUgp4YgZWAk7Bwp%2BE2NoNcOqhtve%2BK%2B8Ek0%2B6roj2OGrdjC9fyCE12DMyYy3jeQqnqlvnKswtNdNw%2FYRlU5GsCrJ%2BZfkVBbjI3MUsJxPAS%2Bc0ZIJt9fzq8iZJXM%2F0Z0Q0pokQmU51tGN0ajeI5g2FQfkT3jIJVfXRSAroD2BhtMqGJDgDxIvvJ5Ath%2BS8cPkuLnpuwWFbkiUQv2FhcVzZlKdOyC%2FZwmw4fE%2FYG691QgnS7D3T%2FwKy820dBSiumZZFglLOSFzQopPOd1JiWyJjbzCkoE7lXHkT%2BdfhfkTTmGwH4KwdIGXFPU2vaodApF1vzuspiyfkO2JnQ3dkE6W1uzKmrNu993e2ls8W80DD6AEdCL3Q%2BuTnuZx1GXU%2BHfahtHwZ5fuuogOBJCz7JaOK64CWKGiJqPF82OszgYqg4M%2F1lIKF%2B1vhDRLdI3IsWds%2FdeLsGI1yJ3pUivPTJxmOwk04qMnlihEnvk7I%2FKx8Tt6IGuNV1NpyQazXxkTzR8K5SK2o6pfZlxsjBatzKypoO87mZTKl3IbxuTYuCZAi5IZ%2FNFGyTxHPqm6eAgrVF2uefRctRP5ghnlz3tjVZo2mVAaE1oYKOo1tijAVG9ixww%2FJWkwgY6pgE60KmQKdX5mT%2Bva4ZMkHdWqvxJv1eFLIxZ2zws6fgPcBz%2FhVBOlJMqTiJOXr08C4UwnCRjRg8JGAMzjMYYmindN5SrKkhXfxtG4X1XcF82DF9RdymmbAXJTVeDLmnp5ggwnf747YfblfsDMaobQ%2B3%2BPa15MwDr3CDnWRS0%2BrXD6WbhyJ%2FR%2Bu7R166wItQfbqyx4lCqUyiFb7pLqYtlO0yVgtUc8HZA&X-Amz-Signature=c6e9e5905346e6337bf6cea49cf65487a897510351decc8a5cc9ad303de2ddc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF2AKO7K%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaau8H1cvo0ksmJZvu%2Fr87tpghou4X8J3JPC6N7RGjAAiBrC0yhAA8UlQUMziACWbkf2w8C%2B64PSszQ3PhY9APhhyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtHYMKVi8HvH64T3kKtwDEJXF%2FInWof1zUjDhILUgp4YgZWAk7Bwp%2BE2NoNcOqhtve%2BK%2B8Ek0%2B6roj2OGrdjC9fyCE12DMyYy3jeQqnqlvnKswtNdNw%2FYRlU5GsCrJ%2BZfkVBbjI3MUsJxPAS%2Bc0ZIJt9fzq8iZJXM%2F0Z0Q0pokQmU51tGN0ajeI5g2FQfkT3jIJVfXRSAroD2BhtMqGJDgDxIvvJ5Ath%2BS8cPkuLnpuwWFbkiUQv2FhcVzZlKdOyC%2FZwmw4fE%2FYG691QgnS7D3T%2FwKy820dBSiumZZFglLOSFzQopPOd1JiWyJjbzCkoE7lXHkT%2BdfhfkTTmGwH4KwdIGXFPU2vaodApF1vzuspiyfkO2JnQ3dkE6W1uzKmrNu993e2ls8W80DD6AEdCL3Q%2BuTnuZx1GXU%2BHfahtHwZ5fuuogOBJCz7JaOK64CWKGiJqPF82OszgYqg4M%2F1lIKF%2B1vhDRLdI3IsWds%2FdeLsGI1yJ3pUivPTJxmOwk04qMnlihEnvk7I%2FKx8Tt6IGuNV1NpyQazXxkTzR8K5SK2o6pfZlxsjBatzKypoO87mZTKl3IbxuTYuCZAi5IZ%2FNFGyTxHPqm6eAgrVF2uefRctRP5ghnlz3tjVZo2mVAaE1oYKOo1tijAVG9ixww%2FJWkwgY6pgE60KmQKdX5mT%2Bva4ZMkHdWqvxJv1eFLIxZ2zws6fgPcBz%2FhVBOlJMqTiJOXr08C4UwnCRjRg8JGAMzjMYYmindN5SrKkhXfxtG4X1XcF82DF9RdymmbAXJTVeDLmnp5ggwnf747YfblfsDMaobQ%2B3%2BPa15MwDr3CDnWRS0%2BrXD6WbhyJ%2FR%2Bu7R166wItQfbqyx4lCqUyiFb7pLqYtlO0yVgtUc8HZA&X-Amz-Signature=9aa27408409c795de6bc1e91722d562eba7b400c76f560cb5d69453a1bac81bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
