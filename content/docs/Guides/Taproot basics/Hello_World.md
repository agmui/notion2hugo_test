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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7H232N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqwV2PaSq6gF5NGYHokyTj4WSArlZF9niDMa5F2u8%2FIAiBWMolf5zLl0mlBY5gt0KRtNDJ3H9C3e7Qk8SuYRX96ayqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM31WgJOaDpSVjor5BKtwDhMhTqjwjKDBAAmTFYnCASiIJ4IA4kaOj3ncq3j%2FSQH9gNQfXkV7GdHr%2F%2BdBALcpHXru50x7lV%2BggXoMS73b7w7%2FNCpxmX8gyUxm59A5K2BLMh1wbX448HsfpCttNLhzbLnupUDxGEf1FNkFnWG5%2BP9Ab%2BrJWjYXAhgOJFqdp3bE2Mz534qgdkUFRKNPAR43kR4akJBregxcw4WsgLEeBKSBkrINKm9oLAwyjWGu9Ueq9tH%2BWezzaJtKRVaIy3RJZrLinh%2BGWShcPusaI6p25ua%2BuDAsQKQ4k6GHlXZSfRin3D7qn1nrCsKJoVoV7NtJz6EBMEmBsAOCBTMcapSup1wKnUR5NiBMAPgNJqzIOpitvSI%2FAJOy4BAHa2CYvB4wtmPa6DFd6BUYNJqReGY9rLdx9R8Knku8FPfTjI4eoNJKOC%2FrZ2dGwoZuFGXLeTOC4zMBrl5F1O66517U6uw4yF1pux3oWlPW4pQBVoFdqAMXz5wbKZLo%2BUypgIDodId1ZUSaO29L60578VTJty4X02mKwF8iBwZUcp1mR5zfU6ltb11ULnozJfGKBbg9xDjeFYgIlcJlnfUewXh8TpV9dGDgQI0WiB98W3bkfExDb3Fd5wo9nZcBA4XRbY8Uw5IWMwAY6pgHGTDwCIq36ri6QCs%2FU3gBHIl1gaPVUKhSyREvtZjNi14PnE3LUHe2aES12NA%2FeNXuMsigpwQafVHhjsqYjP9zf%2BYJPfupPxym5OOa%2Bvlt%2BqbFzRU%2BolA2qA1PLStNX2CAvBkLiDcRQ%2B1KvKT5XWgyI2Pi%2BA8G110harByMRDzz3FJ%2B6M7w4%2F%2BqG0g%2FfMgU0IE9WMjSnQJuD8dpVcZsERJLdMAuSL9a&X-Amz-Signature=a446d2ff970d2ada047652c9a677a7073c6da2c24f49239718e62642ea1f3976&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7H232N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqwV2PaSq6gF5NGYHokyTj4WSArlZF9niDMa5F2u8%2FIAiBWMolf5zLl0mlBY5gt0KRtNDJ3H9C3e7Qk8SuYRX96ayqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM31WgJOaDpSVjor5BKtwDhMhTqjwjKDBAAmTFYnCASiIJ4IA4kaOj3ncq3j%2FSQH9gNQfXkV7GdHr%2F%2BdBALcpHXru50x7lV%2BggXoMS73b7w7%2FNCpxmX8gyUxm59A5K2BLMh1wbX448HsfpCttNLhzbLnupUDxGEf1FNkFnWG5%2BP9Ab%2BrJWjYXAhgOJFqdp3bE2Mz534qgdkUFRKNPAR43kR4akJBregxcw4WsgLEeBKSBkrINKm9oLAwyjWGu9Ueq9tH%2BWezzaJtKRVaIy3RJZrLinh%2BGWShcPusaI6p25ua%2BuDAsQKQ4k6GHlXZSfRin3D7qn1nrCsKJoVoV7NtJz6EBMEmBsAOCBTMcapSup1wKnUR5NiBMAPgNJqzIOpitvSI%2FAJOy4BAHa2CYvB4wtmPa6DFd6BUYNJqReGY9rLdx9R8Knku8FPfTjI4eoNJKOC%2FrZ2dGwoZuFGXLeTOC4zMBrl5F1O66517U6uw4yF1pux3oWlPW4pQBVoFdqAMXz5wbKZLo%2BUypgIDodId1ZUSaO29L60578VTJty4X02mKwF8iBwZUcp1mR5zfU6ltb11ULnozJfGKBbg9xDjeFYgIlcJlnfUewXh8TpV9dGDgQI0WiB98W3bkfExDb3Fd5wo9nZcBA4XRbY8Uw5IWMwAY6pgHGTDwCIq36ri6QCs%2FU3gBHIl1gaPVUKhSyREvtZjNi14PnE3LUHe2aES12NA%2FeNXuMsigpwQafVHhjsqYjP9zf%2BYJPfupPxym5OOa%2Bvlt%2BqbFzRU%2BolA2qA1PLStNX2CAvBkLiDcRQ%2B1KvKT5XWgyI2Pi%2BA8G110harByMRDzz3FJ%2B6M7w4%2F%2BqG0g%2FfMgU0IE9WMjSnQJuD8dpVcZsERJLdMAuSL9a&X-Amz-Signature=8fbc92b322b7e9c841a70f2136f88199c967f45e51e2e00c1def78b266086ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
