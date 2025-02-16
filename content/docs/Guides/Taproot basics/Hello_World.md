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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S2KNBJ6%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHMvpX%2BTzGcbwUUEYPmSLrxeLZg3eW8mden8iSNIpJ1FAiAu7npL4%2FZYeLYpPXP2vuk6dTGhvjwCoJ9mh67VNMO%2Byyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FSaxnxfZKlxsv8moKtwDXH0uubHP1TpfT4jMYtH8DBIFxL1v%2BlT6Ag4OenH%2FT0cTjOUFtKofojzg8jD4rnLZtMWMFeES64O20%2FfwD%2FLiNgHl9N8myVN8eUwmkYHx1YFsXce8BIOs7Qa9B4gD%2FB997kFEqy38TNWtBmOYNsMzwO4mGHGcv9jT0eZC8OZ1zvueFJgttO5MnFWln82vmzME%2FLjlBvGqCnOyufK0JhxbfMLj5W7ofFAOj4H%2BXojrXqhwLgLqE2juEoAnk6gCQDieOHhICKT%2BWnkWvpUTbXLs7AzvA%2Fu0qjR1P1qRGl91yTdve5Xlp5pbHCl0KgmKcmB0xwWVFLp8tW1anlbhOQVFioOYc8%2BDdrKEP%2BoXLWqzLgxeQezLsUs%2B9RCO7ZKeC4zJRPcAFnbzptCDNORRQNThFDzZ6sb4D3S1JVQtY6p%2FfHCkje%2BbdhJ1bkFlJm45oF1K36aP0mzb6FmX%2Bh4Fu8a5fv%2FHNfCD%2BA9yD6r6wvvFFsYlZNPzuHqF3%2BUkRNgK3evS%2FqRA%2FvMF%2Bmp4oygHgkpZIawh6IxyZXy9%2Buqrz5HztDcuvma3050bfAiS6w3hHF8KQUe4%2BzK1YzhG3PwtLvIeSDVB4B98503msqQMCbhOIgQvghCNLNNf3Gspq6Iw7%2F7FvQY6pgF4PWn4dPh7zhJ4n8k3BSqSsqr%2Fs0wFRk%2B8ksF%2B7MtHiRhZHxKO1b%2FG6b4YAHQ7%2BLhtBharFJzG6rRNemWto1LvNGapdkLMmIl%2FBwsuLg4huj15KPl2PyQrcQTkire1%2F6WCJv4n164A6LjhKTEcAv90MLvSpmsuOZY%2FVdjdd%2BAYAN0tnD%2FkwnCu0SVMsZPj4khFgSsij9yEYRq9v5RgMPDkuuZ2Psbg&X-Amz-Signature=04ab5fc65c955f04395ea4ca179dfd699300fecc75c241fbc0404c0a2df8ab8b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S2KNBJ6%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHMvpX%2BTzGcbwUUEYPmSLrxeLZg3eW8mden8iSNIpJ1FAiAu7npL4%2FZYeLYpPXP2vuk6dTGhvjwCoJ9mh67VNMO%2Byyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM%2FSaxnxfZKlxsv8moKtwDXH0uubHP1TpfT4jMYtH8DBIFxL1v%2BlT6Ag4OenH%2FT0cTjOUFtKofojzg8jD4rnLZtMWMFeES64O20%2FfwD%2FLiNgHl9N8myVN8eUwmkYHx1YFsXce8BIOs7Qa9B4gD%2FB997kFEqy38TNWtBmOYNsMzwO4mGHGcv9jT0eZC8OZ1zvueFJgttO5MnFWln82vmzME%2FLjlBvGqCnOyufK0JhxbfMLj5W7ofFAOj4H%2BXojrXqhwLgLqE2juEoAnk6gCQDieOHhICKT%2BWnkWvpUTbXLs7AzvA%2Fu0qjR1P1qRGl91yTdve5Xlp5pbHCl0KgmKcmB0xwWVFLp8tW1anlbhOQVFioOYc8%2BDdrKEP%2BoXLWqzLgxeQezLsUs%2B9RCO7ZKeC4zJRPcAFnbzptCDNORRQNThFDzZ6sb4D3S1JVQtY6p%2FfHCkje%2BbdhJ1bkFlJm45oF1K36aP0mzb6FmX%2Bh4Fu8a5fv%2FHNfCD%2BA9yD6r6wvvFFsYlZNPzuHqF3%2BUkRNgK3evS%2FqRA%2FvMF%2Bmp4oygHgkpZIawh6IxyZXy9%2Buqrz5HztDcuvma3050bfAiS6w3hHF8KQUe4%2BzK1YzhG3PwtLvIeSDVB4B98503msqQMCbhOIgQvghCNLNNf3Gspq6Iw7%2F7FvQY6pgF4PWn4dPh7zhJ4n8k3BSqSsqr%2Fs0wFRk%2B8ksF%2B7MtHiRhZHxKO1b%2FG6b4YAHQ7%2BLhtBharFJzG6rRNemWto1LvNGapdkLMmIl%2FBwsuLg4huj15KPl2PyQrcQTkire1%2F6WCJv4n164A6LjhKTEcAv90MLvSpmsuOZY%2FVdjdd%2BAYAN0tnD%2FkwnCu0SVMsZPj4khFgSsij9yEYRq9v5RgMPDkuuZ2Psbg&X-Amz-Signature=1b9c99fe9bf5bd81a2d86ac5d8cb0ceebccda85ee10c91a846256ed4680ac543&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
