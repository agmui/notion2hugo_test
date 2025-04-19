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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGSXDJP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHqVDBFikBJ0R3uRECvCiQqylDdVqmmy%2Bmi1VJU8IJu7AiAz7B6gmIAQbN63Z%2BJz7u3%2BC1l5UaqIPdR8WOnKHczcbiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqnQqU23g6ARvL3lgKtwDWKJIBiNjNyqryr1hIPHq50Gy77m902w4jCUEsQ%2F3qIUyT4zrC2oPgZmce0vvZO%2FXEkY%2Bo%2BeEG7%2BEzxNbtVJAUClH0VcieoxFC4YyIzbMXVE0eUspnMUL78z6gK4iwtllweIE9QWw5Qlao%2F94TculaUT7L0kzjosBTZx42h5QF63STX6StT%2FOJ%2Be515QH1lOcyHdUj5KClBKtKVkIa3804KezlaY4PxmBy84l%2BtC763qVHrebgVW41i1%2BXRikJiUcNsPvcaPvNP70pC7JIQoKjwTX1pxcYgsKdSD2b190rPxaUo0tF%2BsiDdI8q2h58A7tJpQ%2BSgK2cizC%2F5aarKC%2BtlFTzc8PWE5egsS3oQXtJ2YYq%2F012HOsYJ2%2BhJdkm4SQ%2FZlAP78owRRXi9IoBl%2BiXrzUSY9%2BvmNmql%2FhIN0F71%2Fiq8T3yqVvK%2BX5qnvLlIS18KvWoJl9x1GcIIW8d9uN5YyOSvA8nNh2f2tQPe5l1xAJqJVWcpqN4W1WQba9ah2R2SwHj9oT2l1OYFE5vOrSESXzGp7sf1Kh5fJLISbY790JYkSrajyWSF1v%2Fq77di1nFkLbM1NyJ8Yy%2FVW9LWWv0854pPRlvqaZz1ZuHuWOzghoDJaI%2FVYIqo%2FHpsEwgNWNwAY6pgFjsSe7YtnS5SnXi9z2KhVUmeOzJJclDLCNzUdQgJdTz0eRy5GFTVhGDu6W820S%2F%2FIH9NFZXDqWzwy%2BtCeD2L55Je5m0QjFok9CgyOoFHnDrn1jcBj6nJ%2F%2F3k0YcTHdNjy%2FOhvJnm0k2OIuK3uirjE00kRYd8yhrjAN%2BTFx0cooXlqYQjmH%2BoyLhUrTzz2N1w3lsKTkCMB3Cpd%2BcdonZpt37UVbIrto&X-Amz-Signature=96d0fa942ec1a743250b6a08af8a5a505a3bccdc2bcdb9085a141fbc6c8a2281&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGSXDJP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHqVDBFikBJ0R3uRECvCiQqylDdVqmmy%2Bmi1VJU8IJu7AiAz7B6gmIAQbN63Z%2BJz7u3%2BC1l5UaqIPdR8WOnKHczcbiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqnQqU23g6ARvL3lgKtwDWKJIBiNjNyqryr1hIPHq50Gy77m902w4jCUEsQ%2F3qIUyT4zrC2oPgZmce0vvZO%2FXEkY%2Bo%2BeEG7%2BEzxNbtVJAUClH0VcieoxFC4YyIzbMXVE0eUspnMUL78z6gK4iwtllweIE9QWw5Qlao%2F94TculaUT7L0kzjosBTZx42h5QF63STX6StT%2FOJ%2Be515QH1lOcyHdUj5KClBKtKVkIa3804KezlaY4PxmBy84l%2BtC763qVHrebgVW41i1%2BXRikJiUcNsPvcaPvNP70pC7JIQoKjwTX1pxcYgsKdSD2b190rPxaUo0tF%2BsiDdI8q2h58A7tJpQ%2BSgK2cizC%2F5aarKC%2BtlFTzc8PWE5egsS3oQXtJ2YYq%2F012HOsYJ2%2BhJdkm4SQ%2FZlAP78owRRXi9IoBl%2BiXrzUSY9%2BvmNmql%2FhIN0F71%2Fiq8T3yqVvK%2BX5qnvLlIS18KvWoJl9x1GcIIW8d9uN5YyOSvA8nNh2f2tQPe5l1xAJqJVWcpqN4W1WQba9ah2R2SwHj9oT2l1OYFE5vOrSESXzGp7sf1Kh5fJLISbY790JYkSrajyWSF1v%2Fq77di1nFkLbM1NyJ8Yy%2FVW9LWWv0854pPRlvqaZz1ZuHuWOzghoDJaI%2FVYIqo%2FHpsEwgNWNwAY6pgFjsSe7YtnS5SnXi9z2KhVUmeOzJJclDLCNzUdQgJdTz0eRy5GFTVhGDu6W820S%2F%2FIH9NFZXDqWzwy%2BtCeD2L55Je5m0QjFok9CgyOoFHnDrn1jcBj6nJ%2F%2F3k0YcTHdNjy%2FOhvJnm0k2OIuK3uirjE00kRYd8yhrjAN%2BTFx0cooXlqYQjmH%2BoyLhUrTzz2N1w3lsKTkCMB3Cpd%2BcdonZpt37UVbIrto&X-Amz-Signature=54bc707a3739b8b02b24ebca3b491c05227e29fb062101d65d530745f99d652d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
