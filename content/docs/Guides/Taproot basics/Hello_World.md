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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJOVRIT%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYnuz5h0bbdycay15JNVY%2F37XxSVp3Q26%2FJ7ZR4zBzNAIhAMULA6T%2Fs65hg4KBgRmDDoEBuYFnYhhWqzBWvEyIn0K7KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx83K%2BM9u6jQLtJg7kq3AOg6XMtp0YZvb7bNSfD8WnFj2ccDyXfy9IraUHlvwL0qDA%2FHQ8zpq1wDEv7pU9uC4XVO2VMNJtZA3XvOqud6HFBKbZadlVk8gLlGaw3bfPW9fLJhQ92Jzo%2FnrudD681wbi%2FARYSBZOCo5vlVEIOW7xxhXP2Gd8SnBUO%2BmpOEYbzoCUBrXfEtQGb3EjjWxVv6ufcoRMdHzSeDBjf3j9njlyBwix5OXzdLSLg229S6774stenW4XhcuZr0MHqYiOYj%2FiHfG2IcWjokUQkPklqJouKNKDJptI7Sp5E7tdNR2m2WDfm1xPE%2BEUWwp4mXf5l%2FOSXLxwG9fzwXwPD7MAJWjWLs2JXxGOIF2gxehKsPEXGlR8gRePcbjnagIZO3vO7svqzU1u6yQ1QOWUG4eMDTxxjH%2Frd89xNjpytsd1xPbKnJk4azcZ5py9sbB7nq5sytcGDtYwWYTOnj3zdLKm4V%2Budh2A5pz8eGSeVh6K5mM4d8SLjV594Vp0uqeKDCfCgJdLhGOfRW3Ggx5z7C9wOFBlCDedeW3KKHrjZMhlek46tOY%2F9XG%2BHFfl6ADN%2BxTfvFdgrotzMjN6NeZRI7bMUX4yzANChXckvHOYbvMHc2tA8AvWGfwdJY5Cl9JWsDjDFo8DPBjqkAYNaBL%2FEkaNgqR%2BIH6vATW%2BPo8khIR47pOsJJ7%2BOuNH5TgjgjG2E04ngEQAOTC2%2BtbBgJCFE63F88wabCCnjihpuRbAfzWBr1PEmtjbD4c14E1Cz3rrvERHO9SXgs%2ByqNwfdQs%2BEqvq%2Bxn2jZddO238lPeTBIWunEx3PcRHbvAGaTQaUhtdoEhy13dDgatKekmdzCpbUucGq2lrV7oRJ45jztCvW&X-Amz-Signature=5370013ea11da6f64682ce166451803702818e6bf1c1d7891b49e0f7050aa168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJOVRIT%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDYnuz5h0bbdycay15JNVY%2F37XxSVp3Q26%2FJ7ZR4zBzNAIhAMULA6T%2Fs65hg4KBgRmDDoEBuYFnYhhWqzBWvEyIn0K7KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx83K%2BM9u6jQLtJg7kq3AOg6XMtp0YZvb7bNSfD8WnFj2ccDyXfy9IraUHlvwL0qDA%2FHQ8zpq1wDEv7pU9uC4XVO2VMNJtZA3XvOqud6HFBKbZadlVk8gLlGaw3bfPW9fLJhQ92Jzo%2FnrudD681wbi%2FARYSBZOCo5vlVEIOW7xxhXP2Gd8SnBUO%2BmpOEYbzoCUBrXfEtQGb3EjjWxVv6ufcoRMdHzSeDBjf3j9njlyBwix5OXzdLSLg229S6774stenW4XhcuZr0MHqYiOYj%2FiHfG2IcWjokUQkPklqJouKNKDJptI7Sp5E7tdNR2m2WDfm1xPE%2BEUWwp4mXf5l%2FOSXLxwG9fzwXwPD7MAJWjWLs2JXxGOIF2gxehKsPEXGlR8gRePcbjnagIZO3vO7svqzU1u6yQ1QOWUG4eMDTxxjH%2Frd89xNjpytsd1xPbKnJk4azcZ5py9sbB7nq5sytcGDtYwWYTOnj3zdLKm4V%2Budh2A5pz8eGSeVh6K5mM4d8SLjV594Vp0uqeKDCfCgJdLhGOfRW3Ggx5z7C9wOFBlCDedeW3KKHrjZMhlek46tOY%2F9XG%2BHFfl6ADN%2BxTfvFdgrotzMjN6NeZRI7bMUX4yzANChXckvHOYbvMHc2tA8AvWGfwdJY5Cl9JWsDjDFo8DPBjqkAYNaBL%2FEkaNgqR%2BIH6vATW%2BPo8khIR47pOsJJ7%2BOuNH5TgjgjG2E04ngEQAOTC2%2BtbBgJCFE63F88wabCCnjihpuRbAfzWBr1PEmtjbD4c14E1Cz3rrvERHO9SXgs%2ByqNwfdQs%2BEqvq%2Bxn2jZddO238lPeTBIWunEx3PcRHbvAGaTQaUhtdoEhy13dDgatKekmdzCpbUucGq2lrV7oRJ45jztCvW&X-Amz-Signature=37b11f6a2f8a54191a3ef5e214ee8b35693478cffd9c3afdfe6a988457f07584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
