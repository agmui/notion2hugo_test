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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZKELH5D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoCfDA5c%2BnOzOYO6aFUFkDFb6H5S6mA1AE1bGSOlW4UgIhAJfKWtP4IU9%2FsplIx9jkbQAZcYdRoyHzIiLnMnzuBeDPKv8DCFUQABoMNjM3NDIzMTgzODA1IgxKes8sQZfFwxUGfq0q3AOeqqnHjejqekzhoycwpWpSdure5fr3HWLG%2B9kC3gFTPgbhkDgBUpiyb5qY6oEnjDHHvEHKlCQALpRAU5f6AnzEXDyNNRq%2BAJfls4FQH2rOGZUL2cehND116LFw0HAP8hYCt4hfxvawIemsGCY70MXS4Qcq390WaPtVl2s5DgteetVDOe87WfWRnsuMLnsS8%2B1GDhiRQjBVxD2ewLlKObZZWf%2BLUlCMZMKpLU6xjRyPridusoM6TgMNq8osqoh84g%2FwyW6ynhsI6pXttQet64TeoAkBnpQOiLZbqQH9krbuyBmqUi6fSCPM3jvPw57G2aqgLeqoN33SZVcmpxQQrFpRPHIQ8nev44xmVp0OV%2BlGGMKIe3HmonDpl4Xw2Tq0YcRjQ2PZ5vwGmHRAJywNgjoCB%2B0UOR1rsPBek%2BR30aLHZXFrPKLSVWhBHlpqIgoZAi9e9FrxUnNNVVlsi4kMzJczMixu2JlupKbT13r%2BLEKJOKqGsmFOQRAIEP8LI0GmgRX3%2FRrCiIQKkHfjIZi9AH3233r4kgLy9rt4qcuVKHsB5vAZjYkKHw0aiaOrf5wRXZBkvsX%2FpV8CxGwuxPpjrdJ%2BCVM51%2FHIukAuXqlVsaokzz4lzZPu468gQECE9zCa6OO%2BBjqkAfMrpqQWxx0hNURBpj608vwNNEtN22OPrAHvHhs2MS91AOIkWQzNeyMwZ%2BEt5qwmW0VDLqOk8hLn9%2FgAmE8cdTsiUbx9Nk3%2F9fubOCm%2Bht1lzWbIMBSK2znYRQF9%2F9xAntwxszK%2FaPtleR74cO%2Fob2%2FvxhI9KPmwZvjTbH7HmP8s2%2BBgVgVrZXEE73NpsBbCaaeGmd4tKpI5D0us%2Fu7JUzR9zmiW&X-Amz-Signature=4dc94d3411ed6c368213ec8dd4b3e0198d95d4372239b40a4899488ab154ce2f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZKELH5D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoCfDA5c%2BnOzOYO6aFUFkDFb6H5S6mA1AE1bGSOlW4UgIhAJfKWtP4IU9%2FsplIx9jkbQAZcYdRoyHzIiLnMnzuBeDPKv8DCFUQABoMNjM3NDIzMTgzODA1IgxKes8sQZfFwxUGfq0q3AOeqqnHjejqekzhoycwpWpSdure5fr3HWLG%2B9kC3gFTPgbhkDgBUpiyb5qY6oEnjDHHvEHKlCQALpRAU5f6AnzEXDyNNRq%2BAJfls4FQH2rOGZUL2cehND116LFw0HAP8hYCt4hfxvawIemsGCY70MXS4Qcq390WaPtVl2s5DgteetVDOe87WfWRnsuMLnsS8%2B1GDhiRQjBVxD2ewLlKObZZWf%2BLUlCMZMKpLU6xjRyPridusoM6TgMNq8osqoh84g%2FwyW6ynhsI6pXttQet64TeoAkBnpQOiLZbqQH9krbuyBmqUi6fSCPM3jvPw57G2aqgLeqoN33SZVcmpxQQrFpRPHIQ8nev44xmVp0OV%2BlGGMKIe3HmonDpl4Xw2Tq0YcRjQ2PZ5vwGmHRAJywNgjoCB%2B0UOR1rsPBek%2BR30aLHZXFrPKLSVWhBHlpqIgoZAi9e9FrxUnNNVVlsi4kMzJczMixu2JlupKbT13r%2BLEKJOKqGsmFOQRAIEP8LI0GmgRX3%2FRrCiIQKkHfjIZi9AH3233r4kgLy9rt4qcuVKHsB5vAZjYkKHw0aiaOrf5wRXZBkvsX%2FpV8CxGwuxPpjrdJ%2BCVM51%2FHIukAuXqlVsaokzz4lzZPu468gQECE9zCa6OO%2BBjqkAfMrpqQWxx0hNURBpj608vwNNEtN22OPrAHvHhs2MS91AOIkWQzNeyMwZ%2BEt5qwmW0VDLqOk8hLn9%2FgAmE8cdTsiUbx9Nk3%2F9fubOCm%2Bht1lzWbIMBSK2znYRQF9%2F9xAntwxszK%2FaPtleR74cO%2Fob2%2FvxhI9KPmwZvjTbH7HmP8s2%2BBgVgVrZXEE73NpsBbCaaeGmd4tKpI5D0us%2Fu7JUzR9zmiW&X-Amz-Signature=6d0fd1f87e6caead7f46866cf33b153618473c8b41449c2228aece1d0dad2f76&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
