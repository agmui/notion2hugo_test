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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWO3ZQ7%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFnaeP02hmmddt9%2FASolDYg%2BKDEKhuPBxPBCOM%2FKtYTpAiBffucKUFFQ12hgMx50XNkdPExrrhIUKW5VnXJqr99eDCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fsV6AyyZ2SXpGJyKtwDqfmOOOH6rlK4axcsHnicB27w%2BpyfhkBWlqZrblbEE3W%2FD7VygtXbq5OQD%2FVq%2B4CLp5L93%2F0QOKas4UusrD8wM5xdvOx9y0bjnNOKTaZW9WJpsjfRlKCvw82lok1jgx8qlAm6Ns%2BQtufdaf4cc9ExGeg3%2FHuABrYwI3uAAM%2F88Zo9xND6glhczgVXHe4UWWtR8KQNHUMvnwRg%2F%2FJXIMU71KB7NwcG1IIJo%2BUr5RGSWBDHq3m0TpmaKv75fgvP1qhkG2BndCZP71CwCk%2FAS%2FWvv2JWwvSuTCB6GmLvuUKc6EI8MLUSEOPfZt8PIc91BmwAjhWRHxSfjQQVvchnS1azCzdOsGIpIVtn8L4MKUAAp7ELFXQ410WKhGF8pTx7gqZjg%2FSm36bAR%2BiQndB2B%2BJIPUr5dqm6CzOzR3fUHBIHjgcXJXayTzf4kB%2Fwx6WugoeawACmJ45BDu%2FAGYrejF7%2FIbdlvEECIlgmXztMIrxMg1luOWOUXQNptd4Q75VVfkcIFJIgp3UNNVTqxoG3n1MMAIby%2FkjwMAvxlITWBZ0mGOb22UbgSM5yEBmWoKaRj5gTwZXDMIxZSqrMwL9tIZ5pyFi96r9Pq2dU%2Bn%2BlSMi2oToe7NUc7HVd%2BjqmmNgwt8TwvgY6pgGHJAVhzUFAlh2CDPDKVzUQ1q66vA01ZKzfkYXWbJSjW4GjHZ%2B4mHnqYmE3qBDyywSxuyHYIMAtr9%2BRlVV%2BSW%2FdoJORdN0huEqrZrIxiEALb9swcjfc1lRSAf4LOrselC2sVEX4E1Y4FlFfJB4g2j%2BbRbvd%2FgVe7TK%2FP5vSY4ZWc3ssHexRLxRRoSE51078qdqX%2BPUKMui7l9z4dLKUs6t7cEHt6Z4J&X-Amz-Signature=080b551cf382a42b9e34f34043b3d611b71ff51192ac8d93cb32adf428366608&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NWO3ZQ7%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFnaeP02hmmddt9%2FASolDYg%2BKDEKhuPBxPBCOM%2FKtYTpAiBffucKUFFQ12hgMx50XNkdPExrrhIUKW5VnXJqr99eDCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fsV6AyyZ2SXpGJyKtwDqfmOOOH6rlK4axcsHnicB27w%2BpyfhkBWlqZrblbEE3W%2FD7VygtXbq5OQD%2FVq%2B4CLp5L93%2F0QOKas4UusrD8wM5xdvOx9y0bjnNOKTaZW9WJpsjfRlKCvw82lok1jgx8qlAm6Ns%2BQtufdaf4cc9ExGeg3%2FHuABrYwI3uAAM%2F88Zo9xND6glhczgVXHe4UWWtR8KQNHUMvnwRg%2F%2FJXIMU71KB7NwcG1IIJo%2BUr5RGSWBDHq3m0TpmaKv75fgvP1qhkG2BndCZP71CwCk%2FAS%2FWvv2JWwvSuTCB6GmLvuUKc6EI8MLUSEOPfZt8PIc91BmwAjhWRHxSfjQQVvchnS1azCzdOsGIpIVtn8L4MKUAAp7ELFXQ410WKhGF8pTx7gqZjg%2FSm36bAR%2BiQndB2B%2BJIPUr5dqm6CzOzR3fUHBIHjgcXJXayTzf4kB%2Fwx6WugoeawACmJ45BDu%2FAGYrejF7%2FIbdlvEECIlgmXztMIrxMg1luOWOUXQNptd4Q75VVfkcIFJIgp3UNNVTqxoG3n1MMAIby%2FkjwMAvxlITWBZ0mGOb22UbgSM5yEBmWoKaRj5gTwZXDMIxZSqrMwL9tIZ5pyFi96r9Pq2dU%2Bn%2BlSMi2oToe7NUc7HVd%2BjqmmNgwt8TwvgY6pgGHJAVhzUFAlh2CDPDKVzUQ1q66vA01ZKzfkYXWbJSjW4GjHZ%2B4mHnqYmE3qBDyywSxuyHYIMAtr9%2BRlVV%2BSW%2FdoJORdN0huEqrZrIxiEALb9swcjfc1lRSAf4LOrselC2sVEX4E1Y4FlFfJB4g2j%2BbRbvd%2FgVe7TK%2FP5vSY4ZWc3ssHexRLxRRoSE51078qdqX%2BPUKMui7l9z4dLKUs6t7cEHt6Z4J&X-Amz-Signature=c65d968282448d704debb47c48a63a36d4ffd4399d2e317c730ee6aeb6cce303&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
