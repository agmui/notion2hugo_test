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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LRSWLLV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDMlKJuRSipTmG%2FqF3AywJhFz0pUPiq30LRWifN22xx6QIhANNrx9DzQB9VjfigRANybGF8Qz43UvASu30ulcPA%2Fj0AKv8DCFgQABoMNjM3NDIzMTgzODA1IgzRpd4Zjw29nEbjKE0q3ANbB9Aq1sU7F9gEeb1UfJv7IXtU9ns1JktnuqQ%2FYtXdEzbw17mmNvZPaZjOl2groa%2BsrAnYI7Gl6Kakz7iRkXjx5VT1O%2Ft2NSVi6AXfr%2BziheeU4nylwO7UZIF%2BfbhpR5Z%2BUuLZwgVVQqZSBWKSk1vgLaRSnixZZwHyMFK0bBjfiYCL0KqAUu8cGc%2F44a5IIgeYlgu%2BU7dfkvC0Ntbq5bRnwZ16E8hIIw%2Bp2tRj5NnqEwfsbKXJ9Z4W%2BQA9YklEJMeACT23RE9hCfyZ3aXpcyw%2B6hQVHEpjfJMZ3r2E%2BVffcaxNjhC%2BZ33rbngqq%2FnndAU8gva8sCfK9GDV7OCuyhJCWj7%2F6dqULTSUVeeHI6SdBQvpqKsexRDsQ2wG2EBOTwlZYSSMXyWtqsBBqsbAEksMKhpCnIIJmHRGpF9lygqesnyHj%2BjXY6GytnE74KILoSnLAHBll%2Fb3wo04fWwp5f55uS%2BPH%2BthGRmMs7WgGAN%2FGfRjPDt0ppSBFrZdQH3iR6uY3Uw469udpfpvoVbrMX84WnvaIMy1wucNnc9PpQ9Vr7%2Bp2n4DTND3nccKFGBGBp2IcLBYF%2F8zPjzKR%2FI7Dh4VD%2BFV0DDTO1VWN5RrFftpdxRVv1p%2FSP9A%2FN0RxTC3tajDBjqkAYtA3q2nDG4dXvwKDKQv5%2BL6ejbidnfKpVMptE0tsT3URO73dERDCF%2BJmd7OYP6wehPoR2zsmBADWG210klk1K0tCSglyNx3yKdzsrvA8dbz34iml1BvkDjYaZBJgyP5jDzjuVw%2FKVCPejEZ1NmaQJwQKNzAdUCVyVnTX6MGGboomDu0AVzHUndJeXMZ1PYc4tlOnPOGYdS2EJCd0D519L%2FvF2k1&X-Amz-Signature=914652b3a5761ffd5b42c7186ad8f85d2daf6ed63658269eb7363c59fd174bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LRSWLLV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDMlKJuRSipTmG%2FqF3AywJhFz0pUPiq30LRWifN22xx6QIhANNrx9DzQB9VjfigRANybGF8Qz43UvASu30ulcPA%2Fj0AKv8DCFgQABoMNjM3NDIzMTgzODA1IgzRpd4Zjw29nEbjKE0q3ANbB9Aq1sU7F9gEeb1UfJv7IXtU9ns1JktnuqQ%2FYtXdEzbw17mmNvZPaZjOl2groa%2BsrAnYI7Gl6Kakz7iRkXjx5VT1O%2Ft2NSVi6AXfr%2BziheeU4nylwO7UZIF%2BfbhpR5Z%2BUuLZwgVVQqZSBWKSk1vgLaRSnixZZwHyMFK0bBjfiYCL0KqAUu8cGc%2F44a5IIgeYlgu%2BU7dfkvC0Ntbq5bRnwZ16E8hIIw%2Bp2tRj5NnqEwfsbKXJ9Z4W%2BQA9YklEJMeACT23RE9hCfyZ3aXpcyw%2B6hQVHEpjfJMZ3r2E%2BVffcaxNjhC%2BZ33rbngqq%2FnndAU8gva8sCfK9GDV7OCuyhJCWj7%2F6dqULTSUVeeHI6SdBQvpqKsexRDsQ2wG2EBOTwlZYSSMXyWtqsBBqsbAEksMKhpCnIIJmHRGpF9lygqesnyHj%2BjXY6GytnE74KILoSnLAHBll%2Fb3wo04fWwp5f55uS%2BPH%2BthGRmMs7WgGAN%2FGfRjPDt0ppSBFrZdQH3iR6uY3Uw469udpfpvoVbrMX84WnvaIMy1wucNnc9PpQ9Vr7%2Bp2n4DTND3nccKFGBGBp2IcLBYF%2F8zPjzKR%2FI7Dh4VD%2BFV0DDTO1VWN5RrFftpdxRVv1p%2FSP9A%2FN0RxTC3tajDBjqkAYtA3q2nDG4dXvwKDKQv5%2BL6ejbidnfKpVMptE0tsT3URO73dERDCF%2BJmd7OYP6wehPoR2zsmBADWG210klk1K0tCSglyNx3yKdzsrvA8dbz34iml1BvkDjYaZBJgyP5jDzjuVw%2FKVCPejEZ1NmaQJwQKNzAdUCVyVnTX6MGGboomDu0AVzHUndJeXMZ1PYc4tlOnPOGYdS2EJCd0D519L%2FvF2k1&X-Amz-Signature=02a5ab2e8e15b55212af3d692c1577f4af8a7e4c2654754e70205d8bbaecce00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
