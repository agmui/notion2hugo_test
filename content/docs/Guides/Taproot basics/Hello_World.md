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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7676KXJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2Ff3%2Fg%2Bhpu8wiUFLuHMW5eDwDQOiydUnFSq1vLpwTZwIhAL%2FjaC3G2qIx1dF6mxMgqQS2595BWIr4gAXw%2BhUMfTPpKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9LjqlRk91VI%2FUaZwq3AN7QWfMy9DwZUHiGdF5e33InklJfLaD5hHP0vImO%2FJDlnuc71e6BQC6mKw0bE3VmUqT%2FwLqDqUvKBBi1%2BbidNcJV%2BhINhOQ%2BtiUWgdfBCFNoG0K7KpF7lpaedP0FOggVztO3xubSb3Xh4R1b32zIp%2BMdpzdxgfuYVsHRgKXSMXB8G%2FNfAsgCoaWSmP3ZWeBenufUAILYDWQroxmQu9PZliq%2FWDHv0OIDpwXdlX1z6Dt61UnPN9HaaTZNHVvbUZ5%2BU8tL7PVP4ZOJUUsrVpn4pEjmoB68ymPBY4n6GkUQsnhyYiCfi6EeX%2FcmraZ2avFsMYRiBKjOYmeF8EzYHvC9105vSoYnV7hcKBNdq%2F6lvW5d83RUQtgfBGUXU3gD1lqpztt%2FzGxvzyyBEIF%2FVOpM5rgDWn7Rzk1mPTTMN3UXGz7cSyE%2FQuDGGFcxyXnqUwT48HTRmOP502cYbYLaLirLnRDHN7TLRB6JyYOC7xpquvMNtshYn%2FvFX8GOQJnozFCVw6e38GQ11zWi3lHWvV7UwzJhi2a3m5630YYJ6dOEK%2FIY5W%2B%2FHUXzf%2F%2BdDyto8F50JU6eN6ILAo6II6HCO43YNKBzgtSa1zUBop%2FuR%2Fz33RVSrGz9i4C6mV7kg3pyTDokoe%2FBjqkAaKUiwMZem3K5NPQw0mPOOZVUU7RH2fhoVbALJJjDL6gYL0qZsJ4NH2ETSFTtASjklWlmowMNEiHPMMtP6%2B5L8TYtNOugCho%2FIjHO%2Bvn4i1ZvScolFU8qC4%2F4PIm9Qfi%2B6ZQrSXFwofZJDYvU8kNfJRfJHvJ2%2FYE%2Fg4jTR8coCLWQNIm%2FyMCsnFuky04XfAzz394XNQXzBGAnBl2XINTWI%2FgY3%2BV&X-Amz-Signature=1369d7790473492067e7187e2b6dbed84908eac0e0e46856ba3e7a4b700a49f6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7676KXJ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2Ff3%2Fg%2Bhpu8wiUFLuHMW5eDwDQOiydUnFSq1vLpwTZwIhAL%2FjaC3G2qIx1dF6mxMgqQS2595BWIr4gAXw%2BhUMfTPpKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9LjqlRk91VI%2FUaZwq3AN7QWfMy9DwZUHiGdF5e33InklJfLaD5hHP0vImO%2FJDlnuc71e6BQC6mKw0bE3VmUqT%2FwLqDqUvKBBi1%2BbidNcJV%2BhINhOQ%2BtiUWgdfBCFNoG0K7KpF7lpaedP0FOggVztO3xubSb3Xh4R1b32zIp%2BMdpzdxgfuYVsHRgKXSMXB8G%2FNfAsgCoaWSmP3ZWeBenufUAILYDWQroxmQu9PZliq%2FWDHv0OIDpwXdlX1z6Dt61UnPN9HaaTZNHVvbUZ5%2BU8tL7PVP4ZOJUUsrVpn4pEjmoB68ymPBY4n6GkUQsnhyYiCfi6EeX%2FcmraZ2avFsMYRiBKjOYmeF8EzYHvC9105vSoYnV7hcKBNdq%2F6lvW5d83RUQtgfBGUXU3gD1lqpztt%2FzGxvzyyBEIF%2FVOpM5rgDWn7Rzk1mPTTMN3UXGz7cSyE%2FQuDGGFcxyXnqUwT48HTRmOP502cYbYLaLirLnRDHN7TLRB6JyYOC7xpquvMNtshYn%2FvFX8GOQJnozFCVw6e38GQ11zWi3lHWvV7UwzJhi2a3m5630YYJ6dOEK%2FIY5W%2B%2FHUXzf%2F%2BdDyto8F50JU6eN6ILAo6II6HCO43YNKBzgtSa1zUBop%2FuR%2Fz33RVSrGz9i4C6mV7kg3pyTDokoe%2FBjqkAaKUiwMZem3K5NPQw0mPOOZVUU7RH2fhoVbALJJjDL6gYL0qZsJ4NH2ETSFTtASjklWlmowMNEiHPMMtP6%2B5L8TYtNOugCho%2FIjHO%2Bvn4i1ZvScolFU8qC4%2F4PIm9Qfi%2B6ZQrSXFwofZJDYvU8kNfJRfJHvJ2%2FYE%2Fg4jTR8coCLWQNIm%2FyMCsnFuky04XfAzz394XNQXzBGAnBl2XINTWI%2FgY3%2BV&X-Amz-Signature=4abf3261c556633aa248fe96c1300f1ed3487cf3394935021c1288ba1296cccf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
