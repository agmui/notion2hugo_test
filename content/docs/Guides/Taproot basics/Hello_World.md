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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPKOKK6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFBYKJ9VZVJ3SRes%2BUXmSZ6pJKS6BsOYQa%2FuDIMjg5KXAiAXTgc%2BQOLl6AExrC%2BAux8erB9pXFXdzPMiYzR12OtmmCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMISd22D9UEM3s50mKtwDhxCy%2B4Sd7JyYVj3JhmBJVc0dkUegLq2V3XpNFsyymNqr3BdCdkLZmlcX13gbsytheBoja3qAhV56Z4ghmDmUyfbsC14oNbCPfQDCjaW3Xt2wXJFS6sD3xmh%2BiSkAk%2FL3BWwIZxzXBEPCEMH4bcLmGeotns9mfNFvyro2wyYSpiANatedaqIfmEMwpySBUCC1ASxLLbl37GWefpLmLK2BvVAgWtNF34sfjEkNMprf4pNtCoEcen75dg%2Fg96zGIoa2LXdCP8t06Sh%2BcOKVOll5k%2BnlrvBd8cc%2B7GAGRWumIy2ZK5F3F39matE5fGQIorLTwe%2BH9cmgXYfuTmzH%2BxNhGC27oOyBOj8vYQfO935pViba9vfEfdMmKFXNTN%2Ft%2BfH2Ff0xlzYfe9WVtl3obJ9EGHWWqKq2%2FlRRVdJbmoGo%2FF0vqaok569YjXIzOMHBRLhfQvQF6ZZyACCvl8z6K5VpbRKOOAQUgYS7ix5jjI0Yzba%2F9TO4mzq1q2dsysW2GHZ61BBqsNfRp56mCQ60hxyU1lywciinr%2FZg9xIDemeQs8PIDraiVizQUrwkngHbtWrnJNuCQ7bxByOjW1a9jrVi7QOprcZwGPzafsSEPsEmK9etKGi8JCg9qd7D0skw34u9vgY6pgFKudg6Ci6kxMtZjzZ1y%2BFerqIl%2FbLhAh0z2JDJuSMzUVY5KoBxSzrlOCbAi6yh5%2FbI4vKery%2Bti4%2B6JnqiTyL0weoTZddeYnEVCeuUlDSs9CoyKJLG8ICTXUfgmvayz%2BePa04dUHp7VtRTlTd79ajORpoSwRjlCjR%2Fa99%2FvuSVKeij2ZMQ0Vt1ZchBxJOWYvLhTs9VdcRcglOAP5JbB63WGG4QF35O&X-Amz-Signature=4d46f454ca5e53b37c8e1a9802fbfd697ebb1ab6bdcb4d43db74d597e7f2f42a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPKOKK6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFBYKJ9VZVJ3SRes%2BUXmSZ6pJKS6BsOYQa%2FuDIMjg5KXAiAXTgc%2BQOLl6AExrC%2BAux8erB9pXFXdzPMiYzR12OtmmCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMISd22D9UEM3s50mKtwDhxCy%2B4Sd7JyYVj3JhmBJVc0dkUegLq2V3XpNFsyymNqr3BdCdkLZmlcX13gbsytheBoja3qAhV56Z4ghmDmUyfbsC14oNbCPfQDCjaW3Xt2wXJFS6sD3xmh%2BiSkAk%2FL3BWwIZxzXBEPCEMH4bcLmGeotns9mfNFvyro2wyYSpiANatedaqIfmEMwpySBUCC1ASxLLbl37GWefpLmLK2BvVAgWtNF34sfjEkNMprf4pNtCoEcen75dg%2Fg96zGIoa2LXdCP8t06Sh%2BcOKVOll5k%2BnlrvBd8cc%2B7GAGRWumIy2ZK5F3F39matE5fGQIorLTwe%2BH9cmgXYfuTmzH%2BxNhGC27oOyBOj8vYQfO935pViba9vfEfdMmKFXNTN%2Ft%2BfH2Ff0xlzYfe9WVtl3obJ9EGHWWqKq2%2FlRRVdJbmoGo%2FF0vqaok569YjXIzOMHBRLhfQvQF6ZZyACCvl8z6K5VpbRKOOAQUgYS7ix5jjI0Yzba%2F9TO4mzq1q2dsysW2GHZ61BBqsNfRp56mCQ60hxyU1lywciinr%2FZg9xIDemeQs8PIDraiVizQUrwkngHbtWrnJNuCQ7bxByOjW1a9jrVi7QOprcZwGPzafsSEPsEmK9etKGi8JCg9qd7D0skw34u9vgY6pgFKudg6Ci6kxMtZjzZ1y%2BFerqIl%2FbLhAh0z2JDJuSMzUVY5KoBxSzrlOCbAi6yh5%2FbI4vKery%2Bti4%2B6JnqiTyL0weoTZddeYnEVCeuUlDSs9CoyKJLG8ICTXUfgmvayz%2BePa04dUHp7VtRTlTd79ajORpoSwRjlCjR%2Fa99%2FvuSVKeij2ZMQ0Vt1ZchBxJOWYvLhTs9VdcRcglOAP5JbB63WGG4QF35O&X-Amz-Signature=c537ede214b672a25b3a087554e9c687b66982936ae3cafa39a192c1960c1f32&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
