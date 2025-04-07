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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X32UK5CX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJCx8SLIkLEakGommDv0wWWyh8kHDEIhFJuUzfHP6ReQIhAJFHjsXTwEtRdgSYvU4uwAVQPzK%2Fh8beCBNIqiSiShD4Kv8DCFQQABoMNjM3NDIzMTgzODA1Igz9P2T6o2jEWDFFqdgq3ANo62QfY79H%2Fo9Dv%2FWkdJOteo3bz6I8pX%2F73LsnpclbTzBzk65BIucbeZ6zHdW672zydiuUQZeClW3ET6dL0d4xP4MBY9vlF7P6ndJu6rIuboESU8%2FJIOQ5bGO2oQ4L4s6on6CnjV9HPBXqWrJf8jZq9wAnKKw1dWd77BLbCsJTrixgqzypORlBJvCJ1zzYUimyKLjmswnngtjoHOrpn0jbKIYHHDSqqupCKR3SEm%2BkSPiupmfTG3LRS9xurtbwScvpthUuZoXwFLH1oTt%2B2xnYJC%2B9VE6h%2B2r%2BLJHwo9chJfVWiScM%2F%2B0vdiiKqO3bz7h2SohTF9fElea9P2iJkEMyCUaUYy6ERvmALjTvpLGapRi00%2Fuc%2F9GlVEzXAERldeKiqLwieXp%2Fy26veh%2BQ4FiH8c8EYsrqpUDPmCAzFcH8%2BV6AMskzV%2BMznNxHi90JOW8bQcJA3dMfXZyj0aZpuBNaGenmmQb4SmZYAaUQTsJsIwYmMo2AlhsXzuhuAMbSYVxBUFmZrYyesEcH3gQoWhgiNLN6ScYFRJ82aUgccR3nHgHjxZy1jgEq%2FHJQheZ3GwFMNGYpimQ0rIfcpZ%2BbEINdKE8ySYVizUhu0Jer2YhOuHkrXb2uhztoX7xdWzDIg82%2FBjqkAfIMCCZFvKWjS5E7PlzZCZjyI4LbY6cQiO8hEj6jpLiTVrUqgJ%2BCtFK6BpD%2BXRiAJaqMzQEL2ts1ixMydb1no3GGC5%2F8ghRTd%2Fo3LeIrQoOdyWa7TFWcZDKr%2BygAR1jrg3vJRdc91OuDCIlSfSuxYcoALoJ6SyjHc7gAY7xgVZYCAr%2FK0mJS4AbjvHprv1bAkzIj3%2BllySBmDyaJriVHQO65gKmH&X-Amz-Signature=ea73cda7db25ec2a495ef936ba1c1e0f63010092303a8cde6a70d4411160d062&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X32UK5CX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJCx8SLIkLEakGommDv0wWWyh8kHDEIhFJuUzfHP6ReQIhAJFHjsXTwEtRdgSYvU4uwAVQPzK%2Fh8beCBNIqiSiShD4Kv8DCFQQABoMNjM3NDIzMTgzODA1Igz9P2T6o2jEWDFFqdgq3ANo62QfY79H%2Fo9Dv%2FWkdJOteo3bz6I8pX%2F73LsnpclbTzBzk65BIucbeZ6zHdW672zydiuUQZeClW3ET6dL0d4xP4MBY9vlF7P6ndJu6rIuboESU8%2FJIOQ5bGO2oQ4L4s6on6CnjV9HPBXqWrJf8jZq9wAnKKw1dWd77BLbCsJTrixgqzypORlBJvCJ1zzYUimyKLjmswnngtjoHOrpn0jbKIYHHDSqqupCKR3SEm%2BkSPiupmfTG3LRS9xurtbwScvpthUuZoXwFLH1oTt%2B2xnYJC%2B9VE6h%2B2r%2BLJHwo9chJfVWiScM%2F%2B0vdiiKqO3bz7h2SohTF9fElea9P2iJkEMyCUaUYy6ERvmALjTvpLGapRi00%2Fuc%2F9GlVEzXAERldeKiqLwieXp%2Fy26veh%2BQ4FiH8c8EYsrqpUDPmCAzFcH8%2BV6AMskzV%2BMznNxHi90JOW8bQcJA3dMfXZyj0aZpuBNaGenmmQb4SmZYAaUQTsJsIwYmMo2AlhsXzuhuAMbSYVxBUFmZrYyesEcH3gQoWhgiNLN6ScYFRJ82aUgccR3nHgHjxZy1jgEq%2FHJQheZ3GwFMNGYpimQ0rIfcpZ%2BbEINdKE8ySYVizUhu0Jer2YhOuHkrXb2uhztoX7xdWzDIg82%2FBjqkAfIMCCZFvKWjS5E7PlzZCZjyI4LbY6cQiO8hEj6jpLiTVrUqgJ%2BCtFK6BpD%2BXRiAJaqMzQEL2ts1ixMydb1no3GGC5%2F8ghRTd%2Fo3LeIrQoOdyWa7TFWcZDKr%2BygAR1jrg3vJRdc91OuDCIlSfSuxYcoALoJ6SyjHc7gAY7xgVZYCAr%2FK0mJS4AbjvHprv1bAkzIj3%2BllySBmDyaJriVHQO65gKmH&X-Amz-Signature=1fd12798aef496c8cca730233fdc84af40e43a2f7d3ceacea7b715883f0ecab5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
