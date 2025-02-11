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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UBCC4G%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzqPyZINiuuNCcJjfxaHdKy9iv3IxO%2BGFBvrQRBpWBegIhAJW8T6N30a6xLxNauRmku3G6jr2FumwuE%2BBXjmIHDMByKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkWqqg3Yyu%2FHDxY%2B8q3APOqy3mWAxPpta8bCvbz3CW4sa7HlrC2bJ%2BiQcL3RHRjuWwUfsmObHokPd9uSsmszwkxdKTL6vmc%2BPVSc57JhpsRYQpljonvFgxw0zCTn6E5YJ%2BJKdD7DzY8NRUnC6O7XtkgA0PqCOlHIerAtfjMXVQOFA0pAQW6qxSJTIIBJBm9tNjX%2F8SHaRt3k9bljGZ5Z86FjfzAKngJxj4utGIvPmkei3gkY7GRHFi3lflEVK9ryL9y7l5BzWf6nU8fGpzojvQV9QBCLiswmaUf24IKjZCwshchZs85tK%2BxjK9GbnfOeF603TLwUIOPqza13ZmY6BMUFjzh5%2FRuen1OOjn%2BcM6oh%2BCQZMIfwocB%2BM5kKNpVJazW6t5TBr55LMrhr0ga6H4GTl3%2Fj8rLUID2eFl%2FiZJkarhsefmzKtUoxRtFhK2ajZjdWX4tEEeIbfDc0HA2G6Bv6jzwykTkLxsZoMNgXpLQ59DgynaKh3RJocazlV%2FIiiRlIBKEPl%2BERCsSsXbHShoFrN9%2BPdbYMp4vUuaiK82tythcm18AIdTCPuJEvji%2FbOX%2Fmhg35O4p1tDrMipr34uIWlu4qp1BYoILab7EIlOnX2BntYd0qiksgleCcCaMTsCHCAtQOvakHv2SDCxt6y9BjqkAefkctU%2BfVrqBJ9Vjp1WscBIZOFN%2BKM7hzLfH5q00XAbAH8BiVDElooA8lKbiaISW7ZLmURIzjTLffQbaso15WGzDrx0f57eSz%2F%2Fui0uas7uanOIGHYUBqxRHRM0lgLyghyE4BTba4Pq6P9jpCb6d%2FuaKHwEaUvisYZvgBWvn0IEy6rbVFCL%2BQpmZ%2Bplw1tXSslrskz4blBy2DyOK47yZvIxvlFl&X-Amz-Signature=78a71711e2ffdc62b2906c379421fe62e94fdd75ddf68a633ec85f6c15a4d2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2UBCC4G%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzqPyZINiuuNCcJjfxaHdKy9iv3IxO%2BGFBvrQRBpWBegIhAJW8T6N30a6xLxNauRmku3G6jr2FumwuE%2BBXjmIHDMByKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkWqqg3Yyu%2FHDxY%2B8q3APOqy3mWAxPpta8bCvbz3CW4sa7HlrC2bJ%2BiQcL3RHRjuWwUfsmObHokPd9uSsmszwkxdKTL6vmc%2BPVSc57JhpsRYQpljonvFgxw0zCTn6E5YJ%2BJKdD7DzY8NRUnC6O7XtkgA0PqCOlHIerAtfjMXVQOFA0pAQW6qxSJTIIBJBm9tNjX%2F8SHaRt3k9bljGZ5Z86FjfzAKngJxj4utGIvPmkei3gkY7GRHFi3lflEVK9ryL9y7l5BzWf6nU8fGpzojvQV9QBCLiswmaUf24IKjZCwshchZs85tK%2BxjK9GbnfOeF603TLwUIOPqza13ZmY6BMUFjzh5%2FRuen1OOjn%2BcM6oh%2BCQZMIfwocB%2BM5kKNpVJazW6t5TBr55LMrhr0ga6H4GTl3%2Fj8rLUID2eFl%2FiZJkarhsefmzKtUoxRtFhK2ajZjdWX4tEEeIbfDc0HA2G6Bv6jzwykTkLxsZoMNgXpLQ59DgynaKh3RJocazlV%2FIiiRlIBKEPl%2BERCsSsXbHShoFrN9%2BPdbYMp4vUuaiK82tythcm18AIdTCPuJEvji%2FbOX%2Fmhg35O4p1tDrMipr34uIWlu4qp1BYoILab7EIlOnX2BntYd0qiksgleCcCaMTsCHCAtQOvakHv2SDCxt6y9BjqkAefkctU%2BfVrqBJ9Vjp1WscBIZOFN%2BKM7hzLfH5q00XAbAH8BiVDElooA8lKbiaISW7ZLmURIzjTLffQbaso15WGzDrx0f57eSz%2F%2Fui0uas7uanOIGHYUBqxRHRM0lgLyghyE4BTba4Pq6P9jpCb6d%2FuaKHwEaUvisYZvgBWvn0IEy6rbVFCL%2BQpmZ%2Bplw1tXSslrskz4blBy2DyOK47yZvIxvlFl&X-Amz-Signature=6f36310d0865439311bd5e06a4fe5cf02a6a7c8b08a69fb89f00869270494696&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
