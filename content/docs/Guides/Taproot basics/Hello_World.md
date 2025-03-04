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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZT3MG7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FfU2MQt8Bqu6uIH9niVruj8ZokhgSv5De%2BptBUeQ9RQIgRs2Du8Fc1lLD%2B616P73zvQNSNOmMxh7mhQcjQwJXyAwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpvOEqt9ACgSCwA8ircAyJxo6QIGFOeA3MzqSLfYr60SUMBmmsyR6F6ReLWAOdiKOgJG7lI%2BekH7s2QeBusAwF%2FK6rW6oNICSs14ZD0zzRIcafq%2F3t16qKBLGQnjyvxS9ptCIItFzd6h33ce2rTkQW0dmmaQ1TfMvkyimhelcGZ6fyHD6od3OCYGTePQ0hiIV4xa41mOpJQ7eCADZZglNVasaKQagPaAnUfPjWf7QPjTYYtg3pQLLvPlszLFtiInTLOsqx5GXMcm1%2BGJ7oDSJBTjFx0FhU2zv%2BQMq3lV%2B7HP1gp8%2BaXuLJxIpndCywqxGNWgdIKWheylIYXzEsEdw0v9hZvNLwggYZWGr%2BKYHWSO7VXRz4tP1Ra8jDcY4Ji6Uc9bHKyZ98nI58%2FDs0ZQ0tUb1opYbRFSt7WwdprM5nQc7AulS9KNyOPLhp6UWRfecYx87lOfGf0ce4rC%2FzjDsTBthneTje6d28hsLB0VfKkZdefSDy9E2rrVkfiM%2B2ZfibpjvlhzKaf2Kfjsr5upQ4oBTsTRHBS0SZM1rfSTdSVSJoXvJBkjQKAZ6grdsGFQ3PUqjK17XeBJG6XZPpO9j9t4K9z7ZBUp3cYKLKDvCYRAXcFLudlbn0o0p7kqsypjGaUlLjCb1bdDPNGMKPAmr4GOqUBGYu7zIpn8Zo21beIJK7h1jucKwRhhUQORx8xrf69Twl7%2BqdZtEwvZtAiYzh0ZTN2T10N6BxgpwVjU6AEaODffgrnrT1n4CD9QE623EghJHiKj%2BE4Aj4rZ5OZII1BH5jsz0KkYO7xf566RfRVQ3KVQOcn3qYW%2B6A49KrLCib4uOo0JnoCbtSCWqZmGQkScM%2Bhg46d7fitjyaj2RRlDauJ3b0oFy4B&X-Amz-Signature=71def26647ebfc3dc3aba04b5bd80c3f9317ea18f549ed53424b0bf632086e85&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZT3MG7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FfU2MQt8Bqu6uIH9niVruj8ZokhgSv5De%2BptBUeQ9RQIgRs2Du8Fc1lLD%2B616P73zvQNSNOmMxh7mhQcjQwJXyAwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpvOEqt9ACgSCwA8ircAyJxo6QIGFOeA3MzqSLfYr60SUMBmmsyR6F6ReLWAOdiKOgJG7lI%2BekH7s2QeBusAwF%2FK6rW6oNICSs14ZD0zzRIcafq%2F3t16qKBLGQnjyvxS9ptCIItFzd6h33ce2rTkQW0dmmaQ1TfMvkyimhelcGZ6fyHD6od3OCYGTePQ0hiIV4xa41mOpJQ7eCADZZglNVasaKQagPaAnUfPjWf7QPjTYYtg3pQLLvPlszLFtiInTLOsqx5GXMcm1%2BGJ7oDSJBTjFx0FhU2zv%2BQMq3lV%2B7HP1gp8%2BaXuLJxIpndCywqxGNWgdIKWheylIYXzEsEdw0v9hZvNLwggYZWGr%2BKYHWSO7VXRz4tP1Ra8jDcY4Ji6Uc9bHKyZ98nI58%2FDs0ZQ0tUb1opYbRFSt7WwdprM5nQc7AulS9KNyOPLhp6UWRfecYx87lOfGf0ce4rC%2FzjDsTBthneTje6d28hsLB0VfKkZdefSDy9E2rrVkfiM%2B2ZfibpjvlhzKaf2Kfjsr5upQ4oBTsTRHBS0SZM1rfSTdSVSJoXvJBkjQKAZ6grdsGFQ3PUqjK17XeBJG6XZPpO9j9t4K9z7ZBUp3cYKLKDvCYRAXcFLudlbn0o0p7kqsypjGaUlLjCb1bdDPNGMKPAmr4GOqUBGYu7zIpn8Zo21beIJK7h1jucKwRhhUQORx8xrf69Twl7%2BqdZtEwvZtAiYzh0ZTN2T10N6BxgpwVjU6AEaODffgrnrT1n4CD9QE623EghJHiKj%2BE4Aj4rZ5OZII1BH5jsz0KkYO7xf566RfRVQ3KVQOcn3qYW%2B6A49KrLCib4uOo0JnoCbtSCWqZmGQkScM%2Bhg46d7fitjyaj2RRlDauJ3b0oFy4B&X-Amz-Signature=03b0f9f88b64208239a61ee9c932886ae4d2370307c6e8614139ede59ebedb36&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
