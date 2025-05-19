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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYTTIH75%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZJoRJpg3OW2n5jLQtg88JVSr81cmBVpwUVjfgR0ITgIhAIAhKME7EoVW7L7liB%2BQ3JjJPmLWaMpOUAPDeMjiy9UXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkkD4WVukF2hC6AUQq3AMKba3PHCE6aCEyizbGWlnhOeFQKb%2BdSUI5MA3xX64GEO3qG%2F4kJm46QrP40XGpDtCnhJtknemkMMV56IrGJNVPO8XZ4y4razyBZvRdEZMOANUOoqCIi2ccdy%2Fo%2F5PwOcSz8WUQEw8U8fVKSc%2FhOqiOHy5ECeRboQwYMK9bWlrdeOxWIhzuDGu3bcJM4Fg9yHN1sQJDKmAZ4tV4Y2XG1piG4%2F%2B8j5DwQ9vBrKRMaelBajqOoZwVDO7Oepmq6wt0EkBBjXrnhEN8Rg%2BovpXqrimmMqzbKJsaA%2Btj3%2B9mSD4bnGGIoJ6V9SdM1T0d0EWILPAUhRKkTMVcvxdXAOqV%2Fu29X3Pq7gieNTFpAUWWUtVQdNUk3jjJsoKqwINitU%2BqY2sBrfu2CgRMLBaecFsiB2tI5baqVsRZoO9%2B9s2ngLOE1su9W6L%2F6nIxZvQxKVqxU0RIHCLfAqgrEPJSD%2B%2BkIhpwyziqcIKZAJub4bSS7uucczGF0SOYaG9jHPFc5qJzGyWEb%2FGvPNvpgep4j7RtcL%2BsrI0nHmEmsPZXYz4F%2BFSmelLV4KRjhPyBZOzQNdUct%2BpaSCEqPL6pBGtHSxdIGFZpF4NhVFxoHIYTWLaynLhuDuvEIFyMl%2FYWerp1zTDI7KnBBjqkAQiAc4LvR%2F7DOhNT3D3nAFZ7HLU3AYbDrtjV9NiT5DEqA1bs8qS0rtSuFpsUlm%2B6yzSK56h9tNY0UyApi2nArOStqncIyvoViWzXu1yOQ6mFJ1UrstYWSWqjf0j3cIgXuosoc2aqLIRyvXpNjwtzn2IhMfpb8rpaKEveVUi6UatfqvE53tzzQHsCs7iqFFg5ogV6GTkPF%2BdGSbYn9cxAewVkjUep&X-Amz-Signature=15813be906ae3516a700a4f522b6a4ee04cadef0b919ce77815638ff5777fd28&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYTTIH75%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZJoRJpg3OW2n5jLQtg88JVSr81cmBVpwUVjfgR0ITgIhAIAhKME7EoVW7L7liB%2BQ3JjJPmLWaMpOUAPDeMjiy9UXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkkD4WVukF2hC6AUQq3AMKba3PHCE6aCEyizbGWlnhOeFQKb%2BdSUI5MA3xX64GEO3qG%2F4kJm46QrP40XGpDtCnhJtknemkMMV56IrGJNVPO8XZ4y4razyBZvRdEZMOANUOoqCIi2ccdy%2Fo%2F5PwOcSz8WUQEw8U8fVKSc%2FhOqiOHy5ECeRboQwYMK9bWlrdeOxWIhzuDGu3bcJM4Fg9yHN1sQJDKmAZ4tV4Y2XG1piG4%2F%2B8j5DwQ9vBrKRMaelBajqOoZwVDO7Oepmq6wt0EkBBjXrnhEN8Rg%2BovpXqrimmMqzbKJsaA%2Btj3%2B9mSD4bnGGIoJ6V9SdM1T0d0EWILPAUhRKkTMVcvxdXAOqV%2Fu29X3Pq7gieNTFpAUWWUtVQdNUk3jjJsoKqwINitU%2BqY2sBrfu2CgRMLBaecFsiB2tI5baqVsRZoO9%2B9s2ngLOE1su9W6L%2F6nIxZvQxKVqxU0RIHCLfAqgrEPJSD%2B%2BkIhpwyziqcIKZAJub4bSS7uucczGF0SOYaG9jHPFc5qJzGyWEb%2FGvPNvpgep4j7RtcL%2BsrI0nHmEmsPZXYz4F%2BFSmelLV4KRjhPyBZOzQNdUct%2BpaSCEqPL6pBGtHSxdIGFZpF4NhVFxoHIYTWLaynLhuDuvEIFyMl%2FYWerp1zTDI7KnBBjqkAQiAc4LvR%2F7DOhNT3D3nAFZ7HLU3AYbDrtjV9NiT5DEqA1bs8qS0rtSuFpsUlm%2B6yzSK56h9tNY0UyApi2nArOStqncIyvoViWzXu1yOQ6mFJ1UrstYWSWqjf0j3cIgXuosoc2aqLIRyvXpNjwtzn2IhMfpb8rpaKEveVUi6UatfqvE53tzzQHsCs7iqFFg5ogV6GTkPF%2BdGSbYn9cxAewVkjUep&X-Amz-Signature=62a3541e2872102f1f9681f42e37edc5de6f707357e20cd5e9ef9474383c2683&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
