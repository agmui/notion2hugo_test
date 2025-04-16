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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCA7VSX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGWx5n4uC2i416F9X9zc5pGncPliQyGINPN3oR3tNRlAiB0ZWdWILhqOHVOlcZTyNg030i9YtqSaWVt8mamC%2BNiryr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMoi%2FghS9tqScU2k9CKtwDG59TEj4xbpf96sNE2JngQCpz%2BRkI77Lv4wYbWwD5V12hDwxFfuxVP9WcIx2bzWB8iGSb%2BWWCVPsQNrkwI1yyE8yPzHLDFJz9fxwh9jLKUwSNIPsR%2BHUqrEE%2B1gStSu3DRdEkUvGkVbwvGG8uPrp759LZQ3lefJujo9LDoPYobjE64%2B1azB%2BampByW84g6Mhu%2FoF3xvqc9XNB3BAusjhNiu8axVlY7gPQhwAAZEHAEhiVltdAGfJRZx8iXHhyGEAw8CLoVr5PjWDK8bmGNwUWPIXgauWkgNv%2FIJwWzPfDexJJHHQap%2BJyCX7n37JLQC0EJSSpUlE0VXxyeremCoca3M0%2F%2FK1NS%2BDc%2BOK3UWaZPJ%2BWzrtSTKYGTTqkExpN%2BjiRK%2BDDDaAgro8rJCbBvHIzBFG2hIaiuvBcWONh309qFzOrcmMatXdQIEFuB6zUCdJkpR9kMddUcm3pJ8oKvcE%2BwzNvgwOxzckZQOsQ3T7lcocVRNPwEJvGVvPlij%2F%2BEpQJo4rV8DKegpZt8Mb2OivSam9qhui%2BWnI2hxIYZ7rJOD2MOTLyF7Pth6rcCLuq0dfrtWfpsrHI75hWplb7NX68kvOaJ0Aoc2veiSK1hLq5DLQPpHM9s3TVDPJgXR8wvsD9vwY6pgF5LqedJZJjLnMktqmfILgP3PSQRaTwb9mVfS3XD5ij7%2Bp6uIw1FOTblA601QuY5eLlljQLz0FyWTvrW%2Fwz1UffM1phEGdnqb9sUCD0TnKWKP3s5fAH2t4Luotaltfy9hZnfXIV144%2BCsBXna5d81hDQbl3khciI44F5%2F2kW0mOrTmSaqPSwYbgqOALWRNUuSyjSmqHRbCA4SD6TsbtXmVPdCNx4BWK&X-Amz-Signature=ff07c356c4a7e188cd4781bf8bfe1e82382f708ae35a941abb82ee918cd2c833&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCA7VSX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGWx5n4uC2i416F9X9zc5pGncPliQyGINPN3oR3tNRlAiB0ZWdWILhqOHVOlcZTyNg030i9YtqSaWVt8mamC%2BNiryr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMoi%2FghS9tqScU2k9CKtwDG59TEj4xbpf96sNE2JngQCpz%2BRkI77Lv4wYbWwD5V12hDwxFfuxVP9WcIx2bzWB8iGSb%2BWWCVPsQNrkwI1yyE8yPzHLDFJz9fxwh9jLKUwSNIPsR%2BHUqrEE%2B1gStSu3DRdEkUvGkVbwvGG8uPrp759LZQ3lefJujo9LDoPYobjE64%2B1azB%2BampByW84g6Mhu%2FoF3xvqc9XNB3BAusjhNiu8axVlY7gPQhwAAZEHAEhiVltdAGfJRZx8iXHhyGEAw8CLoVr5PjWDK8bmGNwUWPIXgauWkgNv%2FIJwWzPfDexJJHHQap%2BJyCX7n37JLQC0EJSSpUlE0VXxyeremCoca3M0%2F%2FK1NS%2BDc%2BOK3UWaZPJ%2BWzrtSTKYGTTqkExpN%2BjiRK%2BDDDaAgro8rJCbBvHIzBFG2hIaiuvBcWONh309qFzOrcmMatXdQIEFuB6zUCdJkpR9kMddUcm3pJ8oKvcE%2BwzNvgwOxzckZQOsQ3T7lcocVRNPwEJvGVvPlij%2F%2BEpQJo4rV8DKegpZt8Mb2OivSam9qhui%2BWnI2hxIYZ7rJOD2MOTLyF7Pth6rcCLuq0dfrtWfpsrHI75hWplb7NX68kvOaJ0Aoc2veiSK1hLq5DLQPpHM9s3TVDPJgXR8wvsD9vwY6pgF5LqedJZJjLnMktqmfILgP3PSQRaTwb9mVfS3XD5ij7%2Bp6uIw1FOTblA601QuY5eLlljQLz0FyWTvrW%2Fwz1UffM1phEGdnqb9sUCD0TnKWKP3s5fAH2t4Luotaltfy9hZnfXIV144%2BCsBXna5d81hDQbl3khciI44F5%2F2kW0mOrTmSaqPSwYbgqOALWRNUuSyjSmqHRbCA4SD6TsbtXmVPdCNx4BWK&X-Amz-Signature=c88fb357db86dabd0d2d50d3450d14acef845011a066b8b6871c1c11e5fc96b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
