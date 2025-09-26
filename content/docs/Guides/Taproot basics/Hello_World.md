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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BMEN672%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg85sm5XfEkvLomaqt99jqVArR27842QuPpTLBv41OtAiBdqBBatD0aeR8z6EXVC7yjkPVVcK86O%2BitOOoZnsXhGSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ5ZHdNxZR1fJb8MlKtwDmOCS6ys3qTOb7xrKTVhGPgMtHrW9%2FZNBvvykxFaNBf8KE%2B82UXY7UrDra7R1TTOakv5UnqJuWEPPzTdxtkNag8K9E4x%2FWcZztZC%2FxiJYjkaG6F8Kh3ndoeCentmnJoqKIVhJj2G%2BbzJXseRfkQabrQXMGvO2r6mdd8OsgbDJ%2F%2FBBSOcaLrVQYLM5WBrKKxLV%2BJA%2Bf6MM2i7mZ6nMgFORPIfAI%2FIjsGXF%2Bvc5I0pOyKfrKs8zAd3PpjmqHFIgkmySGTz57Br2zoRhXUDCGHzfiQz8tMQV9q%2FzP1z23rlNjw84bLBFvHiwukTSyoSbJ%2FM%2B%2B%2FJBKwbQeDC0r77LUJyCxruYx3xo%2Ft%2BjiDKAYKhunEbFLIbtnoshOAmJp%2BoQ%2B19A4QDDEuS5tXCwUQFMKs9DoP2Qi4ph%2FhTISUnaSJLHhpMuU9MOjcS93vNjh92GjfA03GnTKiLue%2F%2FtjeF89S9%2BgQj6zSQJQC6vHi5Nu6dz7lwYXJKZ4KDEr0uscCeFumJw%2FacJVM0hxi4UN1AJdq63ZwAzERjg8o96VWQulrZCv%2F4jd9slcHofx1Ov0zdRproszol2%2B%2BynXC7PbHi9ww6ph1IjFz59P%2FGTVwFsRiF0E0V00eGjwFgTJDGKrKwwnajXxgY6pgG9iJaTJVr9GbofwfeXm%2F0fILJq9j65RJx8xD43Pj661rWXVlaLunlEl0cYHwgIA%2BxReQf9LYaGalynN%2Bdhp054c%2FbYYVRTQN%2BTfg2tjcWliqe%2BI4YEPz0svISE5nhLcZaEv98AGuyuFWo3VsfBIkNcHQiwQXC80kF074YrBZ44SnohmF5vbuDp5X4rQgOxQkDUIJqSSptRbjVVj2wjY6UL1lYljX4y&X-Amz-Signature=965623a9a0b7ee0a3562d02624540e8a015ff1433cde0a42916485bcd4986dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BMEN672%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg85sm5XfEkvLomaqt99jqVArR27842QuPpTLBv41OtAiBdqBBatD0aeR8z6EXVC7yjkPVVcK86O%2BitOOoZnsXhGSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ5ZHdNxZR1fJb8MlKtwDmOCS6ys3qTOb7xrKTVhGPgMtHrW9%2FZNBvvykxFaNBf8KE%2B82UXY7UrDra7R1TTOakv5UnqJuWEPPzTdxtkNag8K9E4x%2FWcZztZC%2FxiJYjkaG6F8Kh3ndoeCentmnJoqKIVhJj2G%2BbzJXseRfkQabrQXMGvO2r6mdd8OsgbDJ%2F%2FBBSOcaLrVQYLM5WBrKKxLV%2BJA%2Bf6MM2i7mZ6nMgFORPIfAI%2FIjsGXF%2Bvc5I0pOyKfrKs8zAd3PpjmqHFIgkmySGTz57Br2zoRhXUDCGHzfiQz8tMQV9q%2FzP1z23rlNjw84bLBFvHiwukTSyoSbJ%2FM%2B%2B%2FJBKwbQeDC0r77LUJyCxruYx3xo%2Ft%2BjiDKAYKhunEbFLIbtnoshOAmJp%2BoQ%2B19A4QDDEuS5tXCwUQFMKs9DoP2Qi4ph%2FhTISUnaSJLHhpMuU9MOjcS93vNjh92GjfA03GnTKiLue%2F%2FtjeF89S9%2BgQj6zSQJQC6vHi5Nu6dz7lwYXJKZ4KDEr0uscCeFumJw%2FacJVM0hxi4UN1AJdq63ZwAzERjg8o96VWQulrZCv%2F4jd9slcHofx1Ov0zdRproszol2%2B%2BynXC7PbHi9ww6ph1IjFz59P%2FGTVwFsRiF0E0V00eGjwFgTJDGKrKwwnajXxgY6pgG9iJaTJVr9GbofwfeXm%2F0fILJq9j65RJx8xD43Pj661rWXVlaLunlEl0cYHwgIA%2BxReQf9LYaGalynN%2Bdhp054c%2FbYYVRTQN%2BTfg2tjcWliqe%2BI4YEPz0svISE5nhLcZaEv98AGuyuFWo3VsfBIkNcHQiwQXC80kF074YrBZ44SnohmF5vbuDp5X4rQgOxQkDUIJqSSptRbjVVj2wjY6UL1lYljX4y&X-Amz-Signature=c8f7dedd507ac2dc27cb3ccbe146c8515b333fdb2a42d515370820a139f086b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
