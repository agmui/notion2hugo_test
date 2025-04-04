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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNW2X6W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuHoa12JhHH%2FFH%2FnVw7MYcG3eDh07bUxi9FEIvgYJkuQIhAK9jun7O7P65%2FNgUzlaN94lz0D9HRo6AmRWdMJOZU964Kv8DCB8QABoMNjM3NDIzMTgzODA1IgzEAh%2BrM1VW9VTVDkgq3AMvKyeCJYAKB%2B9tZShTGr7hVb32xDHWhFnpJlJc1bHhiTwL77tCsvD9Wi5dh3iUfRee4ojqGMkgIHHYHj2roLSNOIJKpyZRGAOx3kdqzym1%2BSyM6C3RcXkwnLkf0onmK1Dj5xUIvgL8kQBliO7rPmJouhKjwyZgH289M%2F207MbLA0ySQWeCmU2pHJdIugr1Om8qaoa5upcPzcxQ%2FLGuZbaTrUDyjxwcuzNgjJQdl4FNZ9iAclSz4d3stV6%2Fyl9hDOQb25K2cXxz4H47VY3dwb4dF1pg2ObI0jj%2BwgBG6njd4M3%2BZZXgOJr62t0NIYlcFGEU9YkEeg4vFQ2zrbIV0%2BCL0hKvnGuF%2BTSw83VGPicYDqXmYCOpgLggkR3qRLONR3L1MhkSD9%2ByLbNo78nk8aZJYdoXaYhDM1KALdmAchuoTC4e%2B%2FsGi7lJTMAVYOx1SB5J%2BSl5Jn%2FHAVdI2VQ6owPO6k3uddxstWbqLnynj2Pjhpx7lKL5ZZb8vWYuLAJee4yl0IaHZaOVeJoOlChmCIbECAQy%2Bn0ak5%2FhlZMSmhaTmSmRBDDtgEOPN1wWROaePUNWhFTUJTnpVrmykZNzaZmX84cAoxJsdbh99tvHZsvwAS1B2ima92iBZct6vDCBosG%2FBjqkAdNBfGtg3BC4Y6TAI%2BA0Cf2Rn0u0Zm2HyIysl7%2BbeAVk4GVoXKxsqS4GnUCrbUBticxkWBv53ZKCx8FRSqJYaM8XoZbbLFncK7KWUlu9DELBTNIifH8l1mHEelDMGao4PktbQXUax9Drj5tTnwvnQJNIbNSiJIPMhHhHwoOrO2X%2F8TXXB41yMZi97Yex7cYqNNZVKtN0QpZ9VjxnRPqI2WySvxpU&X-Amz-Signature=3449346c1af252cc49847163c3b0aacca074fd5e60d0b0f8266579803ac94b12&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVNW2X6W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuHoa12JhHH%2FFH%2FnVw7MYcG3eDh07bUxi9FEIvgYJkuQIhAK9jun7O7P65%2FNgUzlaN94lz0D9HRo6AmRWdMJOZU964Kv8DCB8QABoMNjM3NDIzMTgzODA1IgzEAh%2BrM1VW9VTVDkgq3AMvKyeCJYAKB%2B9tZShTGr7hVb32xDHWhFnpJlJc1bHhiTwL77tCsvD9Wi5dh3iUfRee4ojqGMkgIHHYHj2roLSNOIJKpyZRGAOx3kdqzym1%2BSyM6C3RcXkwnLkf0onmK1Dj5xUIvgL8kQBliO7rPmJouhKjwyZgH289M%2F207MbLA0ySQWeCmU2pHJdIugr1Om8qaoa5upcPzcxQ%2FLGuZbaTrUDyjxwcuzNgjJQdl4FNZ9iAclSz4d3stV6%2Fyl9hDOQb25K2cXxz4H47VY3dwb4dF1pg2ObI0jj%2BwgBG6njd4M3%2BZZXgOJr62t0NIYlcFGEU9YkEeg4vFQ2zrbIV0%2BCL0hKvnGuF%2BTSw83VGPicYDqXmYCOpgLggkR3qRLONR3L1MhkSD9%2ByLbNo78nk8aZJYdoXaYhDM1KALdmAchuoTC4e%2B%2FsGi7lJTMAVYOx1SB5J%2BSl5Jn%2FHAVdI2VQ6owPO6k3uddxstWbqLnynj2Pjhpx7lKL5ZZb8vWYuLAJee4yl0IaHZaOVeJoOlChmCIbECAQy%2Bn0ak5%2FhlZMSmhaTmSmRBDDtgEOPN1wWROaePUNWhFTUJTnpVrmykZNzaZmX84cAoxJsdbh99tvHZsvwAS1B2ima92iBZct6vDCBosG%2FBjqkAdNBfGtg3BC4Y6TAI%2BA0Cf2Rn0u0Zm2HyIysl7%2BbeAVk4GVoXKxsqS4GnUCrbUBticxkWBv53ZKCx8FRSqJYaM8XoZbbLFncK7KWUlu9DELBTNIifH8l1mHEelDMGao4PktbQXUax9Drj5tTnwvnQJNIbNSiJIPMhHhHwoOrO2X%2F8TXXB41yMZi97Yex7cYqNNZVKtN0QpZ9VjxnRPqI2WySvxpU&X-Amz-Signature=d187b6ab8f0dbb64dd4a4552d023fb27c5683a13fde80f5b4471cd6a2d27ee8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
