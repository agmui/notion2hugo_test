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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHHWUXE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEwDCzgBoeh9Vbpb81%2FS0mnoKClNKlIKPeSCVXj9A8YAIgQI3RyvlM8Q8cwLLTMdsZeOTJC4mdMyLeRhX2FouaLBUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs2%2BTdeSh1on8R%2FQircA5T6pKrH9kYm1JODYc6XF6ccOFAdbBjRLWHT8HcWsaU0GcWEptyyCksHkByr5PQd%2BPL8OqWX0NU6q2T9%2FSZpgBSwWoOZg%2Bq3tyt9%2FzqjMUpfWCc6gQbYhP3ySS6A2wHRJtJpxAsSpGvV1y8JE0wMZWWCQq%2BC%2BlI8uC3OcAbyrnE57Py3qPBtbp4Z40oi7o7NDzKShsMrDl6Kja8DJo5nIQ5BH1FZDmqSS7S0tCToXKBmlYDm1sh1BJrKyfxLuE7WTT9g%2BupHPU8QH1glQKkHlTxJ%2FnNcRsJwzKlceWmxiOvkRWqLsuqYBO3bwDi6FlmJl%2BYW99SximtgI5%2FLfgwDq5bvVPlFO25oSso8s0iGhqezdI74Hd8ipB9IOTdewUkqCpbN8d8k6Mr7MV%2BiD86XSaFJBt2ihI3EuQbnHGSoOAFDoRhm2qUw2f1fyqm%2FeZtTqSFcOiCPPGED85BZNeV%2BwowuJRFdB7bUPxoe1pTCXegd%2BJk0J7DrgtNpBXHeZhwB1BsqfvzTDoMB2JSuz52133Ss009lEyddsb%2F0VaD2%2FJWRYSqmT6ApbRNRCWFYsWQvW%2BKJsyvd1UdOJLz0MosBCz1JAE5gOG5iaDHrP09f8cFsZLqzLw1yEa6nu8Q1MKOu2b0GOqUBtZ%2Fu286gVaNw%2FTBTtepVm3E5d7Wpf2TDw1iXrSw0q08XLuO8DOMWtwqXLd%2FKkouYk8k5%2F3alri7ZLo4EAMwojfy6k8FocfSAr8kiRSpIaIH48MnVy7KDjjBhLfpnlADJh5wefjwmTwr7KaAste8IVxVrT8arkZz0ai9H70EWsJwBy7jgb2aMk3ev90Fzm7VpPE9jsYEL7AkhlJLfTQ870gwBk7nX&X-Amz-Signature=4a6e8539a08d9c39b15124ce8329be330a306c75dc60852bef27417c4a0559be&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHHWUXE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEwDCzgBoeh9Vbpb81%2FS0mnoKClNKlIKPeSCVXj9A8YAIgQI3RyvlM8Q8cwLLTMdsZeOTJC4mdMyLeRhX2FouaLBUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs2%2BTdeSh1on8R%2FQircA5T6pKrH9kYm1JODYc6XF6ccOFAdbBjRLWHT8HcWsaU0GcWEptyyCksHkByr5PQd%2BPL8OqWX0NU6q2T9%2FSZpgBSwWoOZg%2Bq3tyt9%2FzqjMUpfWCc6gQbYhP3ySS6A2wHRJtJpxAsSpGvV1y8JE0wMZWWCQq%2BC%2BlI8uC3OcAbyrnE57Py3qPBtbp4Z40oi7o7NDzKShsMrDl6Kja8DJo5nIQ5BH1FZDmqSS7S0tCToXKBmlYDm1sh1BJrKyfxLuE7WTT9g%2BupHPU8QH1glQKkHlTxJ%2FnNcRsJwzKlceWmxiOvkRWqLsuqYBO3bwDi6FlmJl%2BYW99SximtgI5%2FLfgwDq5bvVPlFO25oSso8s0iGhqezdI74Hd8ipB9IOTdewUkqCpbN8d8k6Mr7MV%2BiD86XSaFJBt2ihI3EuQbnHGSoOAFDoRhm2qUw2f1fyqm%2FeZtTqSFcOiCPPGED85BZNeV%2BwowuJRFdB7bUPxoe1pTCXegd%2BJk0J7DrgtNpBXHeZhwB1BsqfvzTDoMB2JSuz52133Ss009lEyddsb%2F0VaD2%2FJWRYSqmT6ApbRNRCWFYsWQvW%2BKJsyvd1UdOJLz0MosBCz1JAE5gOG5iaDHrP09f8cFsZLqzLw1yEa6nu8Q1MKOu2b0GOqUBtZ%2Fu286gVaNw%2FTBTtepVm3E5d7Wpf2TDw1iXrSw0q08XLuO8DOMWtwqXLd%2FKkouYk8k5%2F3alri7ZLo4EAMwojfy6k8FocfSAr8kiRSpIaIH48MnVy7KDjjBhLfpnlADJh5wefjwmTwr7KaAste8IVxVrT8arkZz0ai9H70EWsJwBy7jgb2aMk3ev90Fzm7VpPE9jsYEL7AkhlJLfTQ870gwBk7nX&X-Amz-Signature=e0c17dd1afaaaf46ba18200498ece90fcf6df447d316e45a321b9c123330e1ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
