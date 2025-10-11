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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XDKIJY%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGO8%2BOvGiM3kjp9m65GLj2NKcBaACiW6nUAu2aUfD5FmAiAW7WD4DCtcP11pMXaPuvHJeAyUx6KiqafKZ5Ey%2Fp5B5SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcrop%2BroNJADjTvynKtwDv8aTV5gVU7FgwpTop%2B%2Bahms%2BQ%2BFMThs9F2ZfWajnfhv0LsxXuUncZ4CIVfD1tXJtjh1oUO%2FQIkTauYwlyyzhplkTGJhc8i4Oa14cVG69uf%2FumJr%2BEIQD71vSmIXjkDfsb3wAMnAYfGuOa8qVgB%2B0iimu8SZfBFGwr10V7Iutpb9mhi4L5mqsDy9YZROmkP4Wx8j0ZxmIKm3oER5FkaX%2FTcxM5xH615uv%2FuWLF3l3GGSJDkcWtUdLwl1dGVuG%2FpgpflOkOHt3x9AJpQJk9ni9HJX1lFEElZWE9FHQxcObYur0PkCob%2B87kIataTPOd4G%2Ff6CqBk4VesiC2p7Zh5JxLLBbq8ynGvyRxlzQjUGuYyea%2BPi7w85GvkpmgXJ5xO%2BYWdt6qfzSZEA%2FI%2FWP0AfvJInVv83K%2BQnA8OHtgOYS8w7cLJAkrfuKVthAQyQ9PbjpRXZDNNx6E%2BuPOLBpwSQCc0RdPMvkmpxfSiNmW9TRA3KUKvKh%2FzZWcAMkwKK8nOmvZAF2fn36bkg%2Bp3VBCUI8LFaLeuwSMiX0d0Pr0yyHsGCSRNe7f%2FyMhrvmjGXmZIoP91sPIhdUVkMdptVAraQS9VHS31EK9uQCIIVD632Ajy6H%2BxahYtzSqbM5CuIwsdemxwY6pgFS08oMYzBuH0zlec%2BpQvKSYHof0CXkxKAe5d4QsAQOj51JRi%2B7GU9pSY9Jx5x2WINxwLsy4uIifINQ9M8nt%2Fqkhl%2FKFI7At3nWK4fBp%2FdCZl2zLu3moJb9GMbdBwG0ESiubhfsJyCeSrXvrNxux7ZrW5YOePZTnyt42WmH7UKnIFa19i%2Bl3PTz6K0y6tdvdb2Sl%2BFJoHie8ZtEuH1rXiZ8MrlG%2BYUZ&X-Amz-Signature=4baa57e17123897879fba1995304e8b24196a9d28e6a75e63f65362bb35b7281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XDKIJY%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGO8%2BOvGiM3kjp9m65GLj2NKcBaACiW6nUAu2aUfD5FmAiAW7WD4DCtcP11pMXaPuvHJeAyUx6KiqafKZ5Ey%2Fp5B5SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcrop%2BroNJADjTvynKtwDv8aTV5gVU7FgwpTop%2B%2Bahms%2BQ%2BFMThs9F2ZfWajnfhv0LsxXuUncZ4CIVfD1tXJtjh1oUO%2FQIkTauYwlyyzhplkTGJhc8i4Oa14cVG69uf%2FumJr%2BEIQD71vSmIXjkDfsb3wAMnAYfGuOa8qVgB%2B0iimu8SZfBFGwr10V7Iutpb9mhi4L5mqsDy9YZROmkP4Wx8j0ZxmIKm3oER5FkaX%2FTcxM5xH615uv%2FuWLF3l3GGSJDkcWtUdLwl1dGVuG%2FpgpflOkOHt3x9AJpQJk9ni9HJX1lFEElZWE9FHQxcObYur0PkCob%2B87kIataTPOd4G%2Ff6CqBk4VesiC2p7Zh5JxLLBbq8ynGvyRxlzQjUGuYyea%2BPi7w85GvkpmgXJ5xO%2BYWdt6qfzSZEA%2FI%2FWP0AfvJInVv83K%2BQnA8OHtgOYS8w7cLJAkrfuKVthAQyQ9PbjpRXZDNNx6E%2BuPOLBpwSQCc0RdPMvkmpxfSiNmW9TRA3KUKvKh%2FzZWcAMkwKK8nOmvZAF2fn36bkg%2Bp3VBCUI8LFaLeuwSMiX0d0Pr0yyHsGCSRNe7f%2FyMhrvmjGXmZIoP91sPIhdUVkMdptVAraQS9VHS31EK9uQCIIVD632Ajy6H%2BxahYtzSqbM5CuIwsdemxwY6pgFS08oMYzBuH0zlec%2BpQvKSYHof0CXkxKAe5d4QsAQOj51JRi%2B7GU9pSY9Jx5x2WINxwLsy4uIifINQ9M8nt%2Fqkhl%2FKFI7At3nWK4fBp%2FdCZl2zLu3moJb9GMbdBwG0ESiubhfsJyCeSrXvrNxux7ZrW5YOePZTnyt42WmH7UKnIFa19i%2Bl3PTz6K0y6tdvdb2Sl%2BFJoHie8ZtEuH1rXiZ8MrlG%2BYUZ&X-Amz-Signature=a3f34600da4230f50d5894fa8ff6bb03c34f721f0ce089591f5dfbf00c37469c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
