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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZXX62HH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDaHOmX%2B%2F0BTZ1Tu370paLbEQ%2BAlV9giprrYl9zH1P3AAIgRtQlniJJRw3j5l%2BNhdYzMBTaXi0jkULjdjX4VAhDqlEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCvcuF8k4Qk1aovNrSrcA8ds9EvMG4Xi3eEy8dEkLQ2tZvsytE0iMQcluKKWydmimXMW5QuspDqufw9cckVVjamEXU4scE%2BoLj6g52khKwo21vPYrCTEZCj31cPdB%2BBb%2BAlNSug4mxnEK3OmYOXOmvZ1jtnNVPpyAnCZXxcVlLSlBJJe9HUWnZMU%2BeFPUA7ZUL7mwmwWLeNMi5kr2qegw0gQFErMi0iDCXEk9rj6yXPyoWl0uRLG7pooim7uJk1cmOwZchIzWtlk5qd1RFtwLDWIL7TY73a5K2%2FEoE01TcW0O5GFnDFfQksVpKUs8qjArE%2F%2BmIzpvuy0%2Bq8v81BdopoqjhIKvlHLmho54Vlu%2FnxHO8FlFz5HpPMOru%2BYEoFPSrU2XNKsuBjLRAGhAu%2Fl3R%2Bs58oMjUaVuCUv6%2FyhRkG9NsVm8EpJCZmC4Y3nacwqIlxFSDsw7UmnZAkaPPy2E403bYlsf%2BZApffZBeqTAlKTtrhBtvScuhe%2BelsgQRIMeoppT8TlbSaKvu7cO19qscsp6DTzpiSC5j%2FmsBB41WV501uCNhNp72%2Bbjow0cPdAcvFQRH%2F%2FbXOKkQJZc%2BzGBDE6FfUN45arj1bBvQHtENQ4iAqzmWRylrld2K6StUlqZUENAKWXgvn5%2BVV%2FMOrRgL4GOqUBYwKNJY2eToyJ5i9SJuK3LstWytHwGMjAm4g%2FosbXkVbgEWG%2BD8FW%2Fw6uoSnx3k19yYUy0sWTNGdJ%2BgAkOX466OK28Rq7ss85fqQx6p5jyRXMNQ7JjMQYnbeKE8OKV9uoRw9NkMyRr1epThTM7nqxoJoIKVIKUOz2dK4G8neOJ3EKKj5m8iSW1QN9ua7Dr8tubuS24RHiJ8VTngaDokhVtUk9Tn3c&X-Amz-Signature=d0c1fa6fe7da61eddc0e32e49fce0a7b4e7dcac7d4f4a069042eb1c672cb0480&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZXX62HH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDaHOmX%2B%2F0BTZ1Tu370paLbEQ%2BAlV9giprrYl9zH1P3AAIgRtQlniJJRw3j5l%2BNhdYzMBTaXi0jkULjdjX4VAhDqlEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCvcuF8k4Qk1aovNrSrcA8ds9EvMG4Xi3eEy8dEkLQ2tZvsytE0iMQcluKKWydmimXMW5QuspDqufw9cckVVjamEXU4scE%2BoLj6g52khKwo21vPYrCTEZCj31cPdB%2BBb%2BAlNSug4mxnEK3OmYOXOmvZ1jtnNVPpyAnCZXxcVlLSlBJJe9HUWnZMU%2BeFPUA7ZUL7mwmwWLeNMi5kr2qegw0gQFErMi0iDCXEk9rj6yXPyoWl0uRLG7pooim7uJk1cmOwZchIzWtlk5qd1RFtwLDWIL7TY73a5K2%2FEoE01TcW0O5GFnDFfQksVpKUs8qjArE%2F%2BmIzpvuy0%2Bq8v81BdopoqjhIKvlHLmho54Vlu%2FnxHO8FlFz5HpPMOru%2BYEoFPSrU2XNKsuBjLRAGhAu%2Fl3R%2Bs58oMjUaVuCUv6%2FyhRkG9NsVm8EpJCZmC4Y3nacwqIlxFSDsw7UmnZAkaPPy2E403bYlsf%2BZApffZBeqTAlKTtrhBtvScuhe%2BelsgQRIMeoppT8TlbSaKvu7cO19qscsp6DTzpiSC5j%2FmsBB41WV501uCNhNp72%2Bbjow0cPdAcvFQRH%2F%2FbXOKkQJZc%2BzGBDE6FfUN45arj1bBvQHtENQ4iAqzmWRylrld2K6StUlqZUENAKWXgvn5%2BVV%2FMOrRgL4GOqUBYwKNJY2eToyJ5i9SJuK3LstWytHwGMjAm4g%2FosbXkVbgEWG%2BD8FW%2Fw6uoSnx3k19yYUy0sWTNGdJ%2BgAkOX466OK28Rq7ss85fqQx6p5jyRXMNQ7JjMQYnbeKE8OKV9uoRw9NkMyRr1epThTM7nqxoJoIKVIKUOz2dK4G8neOJ3EKKj5m8iSW1QN9ua7Dr8tubuS24RHiJ8VTngaDokhVtUk9Tn3c&X-Amz-Signature=8945d0679b143c24f1a6bfbeffef4dce7c2fd65031545a697bd15abc5a14f277&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
