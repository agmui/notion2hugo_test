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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD6HYXAC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9rxmYBQzQZLI32Kbc48ldb%2F1%2BvpMyvdG0%2BOszFvyBUAiEArceD1GLglNdqeRQI8naaq9YheBMIcdYMQZg0krlku2AqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIx2WivQBI7W1UHHZSrcA5xmoi6XdMiIFJRacRuBH45u7m9Wo0UiPJMPpl%2F6LXqmUw5KvjF5OH0a8PgVS0ahWa6Z9e4NOQsuN1COLSgO79HVIQMB%2F3n8G0STEjdoaD1SuorOlNEM3vNNhra%2Ff9MlilOSgGYqgov0V2La6sKQKh2Qkl7eP6a%2FnmOYg4HlRk8ux9TfTjEYrhWl4dJ5%2FA9R%2BAhNkpB3SJe8VR%2BeudL84t0b7htfXkCzMAfth043ysAFMHP%2B6Fw%2BqCPBqH0oK0wO7VXjQBN9%2B93jFR1owt2nLnEcLHux%2F6z3SJIyeZsfcgcaCVEK03v7CmzlNx2Aqc43oePImWFdgRSzZKO7D082We7%2Bibr3sqf%2BZABMpGAbp4FhqlS5d7cing7X9wXmqLgCbm898Jgh8siuW%2BJJw72pojVw6EJE7VJETIJZJzWWFVLhxFyeNQxhH9XMXNDpUbr%2FOEjz7HyVtMk2EJZ3BQLCHizEdEc8R%2F%2F30wakKG4rs5SY45zidO4Oc0Rhe4504u5pe68Aaw5240AXVTpaHuqE0Qf1MVxKj6dTih7x8yRAKWFStdpwW%2BSunpDMsdxFcNx%2BHFYnXc%2BmHIkl6Kuk2bHVft6LQJCc3evGWfnUCMQUQzcmm8gmBDL9Q%2FoSTUVSMIukuMMGOqUBVL%2F84wt%2B6KP31gVgcdgi0Tpn0aFJ5CtlRY4t8uwp8k3fAuAx13Cnk%2BEKHwn7oQsAhD%2BozhGPd5SSQrGyJ7Haz53ORnx1RW%2B8RRXfqehjK2rmtyvZLbubgJD5K8lo8HrpWjXRoT9Zsafu3N1fZyi%2F7FjMmdU3ahHXr0MuEB1dDY3DNLhO1F4M2jRCr1ZJjMjIBCjoYWln%2FSysgOQ3bfL0EgXBPtel&X-Amz-Signature=5a8cc7e5fc2aaa842727f4c1f277cfb4d36753260524773a62a52343cf1a479b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD6HYXAC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9rxmYBQzQZLI32Kbc48ldb%2F1%2BvpMyvdG0%2BOszFvyBUAiEArceD1GLglNdqeRQI8naaq9YheBMIcdYMQZg0krlku2AqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIx2WivQBI7W1UHHZSrcA5xmoi6XdMiIFJRacRuBH45u7m9Wo0UiPJMPpl%2F6LXqmUw5KvjF5OH0a8PgVS0ahWa6Z9e4NOQsuN1COLSgO79HVIQMB%2F3n8G0STEjdoaD1SuorOlNEM3vNNhra%2Ff9MlilOSgGYqgov0V2La6sKQKh2Qkl7eP6a%2FnmOYg4HlRk8ux9TfTjEYrhWl4dJ5%2FA9R%2BAhNkpB3SJe8VR%2BeudL84t0b7htfXkCzMAfth043ysAFMHP%2B6Fw%2BqCPBqH0oK0wO7VXjQBN9%2B93jFR1owt2nLnEcLHux%2F6z3SJIyeZsfcgcaCVEK03v7CmzlNx2Aqc43oePImWFdgRSzZKO7D082We7%2Bibr3sqf%2BZABMpGAbp4FhqlS5d7cing7X9wXmqLgCbm898Jgh8siuW%2BJJw72pojVw6EJE7VJETIJZJzWWFVLhxFyeNQxhH9XMXNDpUbr%2FOEjz7HyVtMk2EJZ3BQLCHizEdEc8R%2F%2F30wakKG4rs5SY45zidO4Oc0Rhe4504u5pe68Aaw5240AXVTpaHuqE0Qf1MVxKj6dTih7x8yRAKWFStdpwW%2BSunpDMsdxFcNx%2BHFYnXc%2BmHIkl6Kuk2bHVft6LQJCc3evGWfnUCMQUQzcmm8gmBDL9Q%2FoSTUVSMIukuMMGOqUBVL%2F84wt%2B6KP31gVgcdgi0Tpn0aFJ5CtlRY4t8uwp8k3fAuAx13Cnk%2BEKHwn7oQsAhD%2BozhGPd5SSQrGyJ7Haz53ORnx1RW%2B8RRXfqehjK2rmtyvZLbubgJD5K8lo8HrpWjXRoT9Zsafu3N1fZyi%2F7FjMmdU3ahHXr0MuEB1dDY3DNLhO1F4M2jRCr1ZJjMjIBCjoYWln%2FSysgOQ3bfL0EgXBPtel&X-Amz-Signature=b20c47229bcff9dc4e51c5f1fb196873a62add99e0608b6d8b0f039e2fe6e409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
