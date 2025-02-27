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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPJ5R2M%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDnzt5mZGQkJbzVqzNeXvHdmMaAArrTzBwU%2F3bnqQSrwwIhAIyH2lOYe8HJgD6vOfdz6KgclHH57SJGUFtSo19EizoWKv8DCHwQABoMNjM3NDIzMTgzODA1Igzfk1E83yn7TpmLCYMq3AMPuhGRNZIzLhF9cirZPvOSBc8f4F9zOkOB%2FBuS9iT1ZoKc4PCjrGh8i8DrYn7ufjUad8osfsOuZj9AfoXEHuRTI9WnOfopqEq38IQKhge%2F0RF%2BXRLCwSKpu7LZTUV%2FWpCF36sX2FNZy3VRWzRl%2FmB0vuA7TqBEEFYIg%2FE2sDoyR1VgoBzv3IvJQIvgXQmHl32vbJvb5cF%2FHBH%2FWeYrtkEUqTXo5mYKdpL%2FCu92r6EzrrfDvfVmSG%2BiwyoMFOx4pwwcZjU%2FnyZc%2FOBVdgbexbvYiVyroCmSPuSxGPoMcUTXpWuvqpZ6XCtYmtma1IApfFN1c3tOke428v0fgST6FBngSf8OMdu%2FNFWqUXZ7awJb6nNxbCj8gRFDMa9pgRJXV7aQ9Ep1THejIK60X%2FRwkXdsv%2F6CNaGeBfPpacCLW3%2F0ixsgH43QXrzegWY1kL98BiQi0x6D40HyF2AwU3nmMzZIejcm1bZAPi5Obyy2R3XnXQffE5Ua048iUS2UJ1EF%2B6T4%2FyTc10vo%2F9CYx1K5XBdrPc%2FUxqQv5gyneEUhx8pZ6hIaXptLlALKla%2BAScs9lN3wgKTo3UQEbe37G1nxnLHXwp6ytQ8RYzQwBk5gY8YRJWUgYVPuEULYNBpaKzDC8IK%2BBjqkAcXofqh4a%2BlabVUcrpCYphPqu3MPCtmOnUJNL5LYMcYep3i4egm3ds5mRyjIpnqr%2BEzQe64R%2FERMzeFkCvqTTczEi5pauCvabyWxvdK3sb2gW7LQToEnoIgMoYGObbtNuQAxQQJwuBZ3%2FgrcNRsIdbyGH%2Bqe5F%2BgVDPeiYkgzAKTWrm0MykWK03ewyHpr%2B7Raun0DvseDC5aNtQInkfRYDEwxHlA&X-Amz-Signature=b6c362cd214f87b4c237266fffdfc8172ed0b00e9084e85413e32a6e42444320&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPJ5R2M%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDnzt5mZGQkJbzVqzNeXvHdmMaAArrTzBwU%2F3bnqQSrwwIhAIyH2lOYe8HJgD6vOfdz6KgclHH57SJGUFtSo19EizoWKv8DCHwQABoMNjM3NDIzMTgzODA1Igzfk1E83yn7TpmLCYMq3AMPuhGRNZIzLhF9cirZPvOSBc8f4F9zOkOB%2FBuS9iT1ZoKc4PCjrGh8i8DrYn7ufjUad8osfsOuZj9AfoXEHuRTI9WnOfopqEq38IQKhge%2F0RF%2BXRLCwSKpu7LZTUV%2FWpCF36sX2FNZy3VRWzRl%2FmB0vuA7TqBEEFYIg%2FE2sDoyR1VgoBzv3IvJQIvgXQmHl32vbJvb5cF%2FHBH%2FWeYrtkEUqTXo5mYKdpL%2FCu92r6EzrrfDvfVmSG%2BiwyoMFOx4pwwcZjU%2FnyZc%2FOBVdgbexbvYiVyroCmSPuSxGPoMcUTXpWuvqpZ6XCtYmtma1IApfFN1c3tOke428v0fgST6FBngSf8OMdu%2FNFWqUXZ7awJb6nNxbCj8gRFDMa9pgRJXV7aQ9Ep1THejIK60X%2FRwkXdsv%2F6CNaGeBfPpacCLW3%2F0ixsgH43QXrzegWY1kL98BiQi0x6D40HyF2AwU3nmMzZIejcm1bZAPi5Obyy2R3XnXQffE5Ua048iUS2UJ1EF%2B6T4%2FyTc10vo%2F9CYx1K5XBdrPc%2FUxqQv5gyneEUhx8pZ6hIaXptLlALKla%2BAScs9lN3wgKTo3UQEbe37G1nxnLHXwp6ytQ8RYzQwBk5gY8YRJWUgYVPuEULYNBpaKzDC8IK%2BBjqkAcXofqh4a%2BlabVUcrpCYphPqu3MPCtmOnUJNL5LYMcYep3i4egm3ds5mRyjIpnqr%2BEzQe64R%2FERMzeFkCvqTTczEi5pauCvabyWxvdK3sb2gW7LQToEnoIgMoYGObbtNuQAxQQJwuBZ3%2FgrcNRsIdbyGH%2Bqe5F%2BgVDPeiYkgzAKTWrm0MykWK03ewyHpr%2B7Raun0DvseDC5aNtQInkfRYDEwxHlA&X-Amz-Signature=2dc58c39045c45603db4f1ef2b846ddf4345d5a7598f8cf88c42cd07e2578cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
