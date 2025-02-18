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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GCANTX5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCID2jQLQYMK5l7H%2BnlBcQ4XqH%2BdqaWisgskUKatylxRWVAiAMVt1ujckxktochnqFkZQvcxyfeOTKOmc85AnxY6o6MCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMivCBXu2g6ZhusSaRKtwD1KGj93hY1IqPHURhpkXl3MWOAmZviRYHLlO5MAbU9mUjuD1Ml9dZpRh9ZoCKeegdC7urGloB1aZ2vspz2TtRJfRv8WimYgPF2wj9PmSTLpepA8MPth%2FipByXZBoNNkkxnatwvN5ZQy8Qyv4RDXTO%2FBtMvn%2BU4wWiocMZ%2BOfgQXe5eWjsnSkYoKpGYnic20hKK8oJ6XQo9MTjgBgU8Yf0oyUYuJ3PWiitTTJr4pGlRyOLxfpunfOscZq9WESrDXpTaTCz8%2BXtLP%2F1udR5IqaScQhvWJiv%2BC7WZ8HcRH5UbFKlGZKJMVNsqDJ1MCkMpBwAOsmAKPojAueDZGC0Hfca0ntVRhvPw02bblQY8mxO9ZQnnBPe1kHDqk6beguMyFfUDBDHDnWUWTO8bHFw28lJskom75%2BvB9ipEneMiRk4eytV0FadS1HfZf%2BjmW3OE3lh%2FsM%2FfUTS4LVkk63gIuu%2FVg19N%2FSF8%2B5I55oUhbDWjIbK1%2BtZ8eVhUu5X5XJr9Gqky%2BET0sCzztII3Wu7doUAKK%2Fy%2FYLyfqfcO8BqIGVOOxBD5KAT72wpptgrpN7PDtOz62V6249GGAqNEyGPIBBF0s8MaomkXyG0VLammWOB9sh5vuSPZfCqWak3PTow0%2F7QvQY6pgEsgYSQsbDNgTokJcYeqbqoXwrOqnbZv406LRSAuw%2BVGYDzvl%2BngbQCdzB2QVHTiaf2sURS5mrhsGxAM8kA7YIOCGc7HauAavb9iPDNcSWoLIqNN%2BmV4cBwLriqfRYfJbfpxL%2BOSk%2B3NxF%2F0fLbC6ScoPAuMA25YONF5UU39UW4Wh5uHTGzqYXBwjvikGz%2FKhvojry51H0spYcEBODo0z65SkdQv7k2&X-Amz-Signature=34fd67fccf45b28b0b1c33dca9dacd9766d53eb4873351689909bf1b58339a49&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GCANTX5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCID2jQLQYMK5l7H%2BnlBcQ4XqH%2BdqaWisgskUKatylxRWVAiAMVt1ujckxktochnqFkZQvcxyfeOTKOmc85AnxY6o6MCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMivCBXu2g6ZhusSaRKtwD1KGj93hY1IqPHURhpkXl3MWOAmZviRYHLlO5MAbU9mUjuD1Ml9dZpRh9ZoCKeegdC7urGloB1aZ2vspz2TtRJfRv8WimYgPF2wj9PmSTLpepA8MPth%2FipByXZBoNNkkxnatwvN5ZQy8Qyv4RDXTO%2FBtMvn%2BU4wWiocMZ%2BOfgQXe5eWjsnSkYoKpGYnic20hKK8oJ6XQo9MTjgBgU8Yf0oyUYuJ3PWiitTTJr4pGlRyOLxfpunfOscZq9WESrDXpTaTCz8%2BXtLP%2F1udR5IqaScQhvWJiv%2BC7WZ8HcRH5UbFKlGZKJMVNsqDJ1MCkMpBwAOsmAKPojAueDZGC0Hfca0ntVRhvPw02bblQY8mxO9ZQnnBPe1kHDqk6beguMyFfUDBDHDnWUWTO8bHFw28lJskom75%2BvB9ipEneMiRk4eytV0FadS1HfZf%2BjmW3OE3lh%2FsM%2FfUTS4LVkk63gIuu%2FVg19N%2FSF8%2B5I55oUhbDWjIbK1%2BtZ8eVhUu5X5XJr9Gqky%2BET0sCzztII3Wu7doUAKK%2Fy%2FYLyfqfcO8BqIGVOOxBD5KAT72wpptgrpN7PDtOz62V6249GGAqNEyGPIBBF0s8MaomkXyG0VLammWOB9sh5vuSPZfCqWak3PTow0%2F7QvQY6pgEsgYSQsbDNgTokJcYeqbqoXwrOqnbZv406LRSAuw%2BVGYDzvl%2BngbQCdzB2QVHTiaf2sURS5mrhsGxAM8kA7YIOCGc7HauAavb9iPDNcSWoLIqNN%2BmV4cBwLriqfRYfJbfpxL%2BOSk%2B3NxF%2F0fLbC6ScoPAuMA25YONF5UU39UW4Wh5uHTGzqYXBwjvikGz%2FKhvojry51H0spYcEBODo0z65SkdQv7k2&X-Amz-Signature=9bd3cd4b349a63c32d18e8ca7343875ff4297f96bbe213766397e2003e9ce835&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
