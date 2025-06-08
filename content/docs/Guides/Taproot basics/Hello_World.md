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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIMJC4I5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmt7zuEX%2FPojIZq0KTcLrvqjhn9RpQAw9zWZB9FmYUyAiEAht8DD1s7AH2bhVHym1KL3Wxn5MoMG3CRrC0RRVr%2FRTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQdWuLxEZDxQw9BuSrcA7yceudzrEMna7DVTLYQi94ggbDnzbbuCg15UdqYPd5NMqIV9NS2oyAS%2Fmy%2Bcso%2B%2F4Av7pYIwgepzThKVHkye0YVLywEa4ylPM6aDFhLMNdaHR32vJawxjOsqdfYcz95dzqOpNK%2F4jCgfB0RsVk%2BBKPWIj%2FoszI1o3wjgKzO2BUx7ut3fOWnjTncRRe4qD9t3%2FQJRAMiud22hQjoSNOGVRnXyM7IEcnqdN0E4SDLl94bcjTBp7u%2F5grW0uJLngdcrgeCiGD%2F%2FR2v2ypZZVRcmZDBCHcsB%2FlOsU45U1zajFhNW8o1ms2NgqtKMBPaDyR8XbLLriOpFHrskD8sWE1buS%2Bb%2FpF41xc1zdRaFprSbyZP7ocwKvjXdNa3TzrXQfXsxxNU3Ga%2BonnQZ9%2FAmhfIo3rZBF3og9H3NaB111JeV74b4ZH8ZxYZyVCH6B%2Bc1HIBsQ8CumbwSYQdGyUiQpOv6ltr0gUJu2SKJmr2SAkZpQ7MAUdZ5IkcAzM93rcBvkplt1pG68u7R3p%2F7yXiO8cd2gUUdlRbqGgHxr5bL0zgjgHbnnaKU58fJQwzCPpunKZdgC3OogJW8wTek5Kflblz%2Bz5LNAsKBnOaySdBPDrnx3aGsFXhaN7j9Q60CWCgMNrClcIGOqUBFRUi14e9Su7apyaMGu6G6IZy%2B7dCXgqDwSnjA3TzgJ488hRLA8eId1EEIm4jNpu56widvzaKooHprKiyzUN%2BVYzZc8r1E5MtKoTurJED5kViDF37%2FZYZW17Zclu8qAz229%2F1kerjwz1FYmDLQXAmjFV61qCGinV0322zz4vNlmqGUJ%2Bp1OCW9eflrXuCkZJEddoGOXbFc9KD83fUkrluFNZKhH0G&X-Amz-Signature=f3e1e61bded99b73da8e228c4231d391686a6a0a11688d0148b4d9b7b2abf612&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIMJC4I5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmt7zuEX%2FPojIZq0KTcLrvqjhn9RpQAw9zWZB9FmYUyAiEAht8DD1s7AH2bhVHym1KL3Wxn5MoMG3CRrC0RRVr%2FRTMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQdWuLxEZDxQw9BuSrcA7yceudzrEMna7DVTLYQi94ggbDnzbbuCg15UdqYPd5NMqIV9NS2oyAS%2Fmy%2Bcso%2B%2F4Av7pYIwgepzThKVHkye0YVLywEa4ylPM6aDFhLMNdaHR32vJawxjOsqdfYcz95dzqOpNK%2F4jCgfB0RsVk%2BBKPWIj%2FoszI1o3wjgKzO2BUx7ut3fOWnjTncRRe4qD9t3%2FQJRAMiud22hQjoSNOGVRnXyM7IEcnqdN0E4SDLl94bcjTBp7u%2F5grW0uJLngdcrgeCiGD%2F%2FR2v2ypZZVRcmZDBCHcsB%2FlOsU45U1zajFhNW8o1ms2NgqtKMBPaDyR8XbLLriOpFHrskD8sWE1buS%2Bb%2FpF41xc1zdRaFprSbyZP7ocwKvjXdNa3TzrXQfXsxxNU3Ga%2BonnQZ9%2FAmhfIo3rZBF3og9H3NaB111JeV74b4ZH8ZxYZyVCH6B%2Bc1HIBsQ8CumbwSYQdGyUiQpOv6ltr0gUJu2SKJmr2SAkZpQ7MAUdZ5IkcAzM93rcBvkplt1pG68u7R3p%2F7yXiO8cd2gUUdlRbqGgHxr5bL0zgjgHbnnaKU58fJQwzCPpunKZdgC3OogJW8wTek5Kflblz%2Bz5LNAsKBnOaySdBPDrnx3aGsFXhaN7j9Q60CWCgMNrClcIGOqUBFRUi14e9Su7apyaMGu6G6IZy%2B7dCXgqDwSnjA3TzgJ488hRLA8eId1EEIm4jNpu56widvzaKooHprKiyzUN%2BVYzZc8r1E5MtKoTurJED5kViDF37%2FZYZW17Zclu8qAz229%2F1kerjwz1FYmDLQXAmjFV61qCGinV0322zz4vNlmqGUJ%2Bp1OCW9eflrXuCkZJEddoGOXbFc9KD83fUkrluFNZKhH0G&X-Amz-Signature=fba1ec86c362edf7008c00781ff82860f19c05e302fb75584499b2835c418b87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
