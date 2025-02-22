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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGUQC67I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmUcHQ9wn4Co42Bq0NtdLoi7fr%2BgYpAbSC3BC%2Fwq%2FtLAiAMGFY%2BY1Ohhs08NHkRFaiLLELuZux4304vvvXwfXSueyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR0tbl3vFjyB6NnVVKtwDfshILdq0xo5iaf%2BxhpGozhBygnYKrCa6%2B6di%2Btbl26mfQWbFYXgMNwitlwBxdzOKlGYgW1CA0DXkWAfQii%2BgPGyIaddJ5II1nAUTSaEFLc%2BLkvne0C6ZKHBmXzvotOuEe9rQBEaQwnKKIearw8XsMGX%2F4QniCBgzMOdGCz4rY8Ww1lcUWi87YZGv0mbxDU3%2FTD%2BVGkt11TYjQcv%2BTMMIM0kF8yu%2Fa2IE59D%2FNIUS2ucD6oUuRW0%2FKCdZv9nq2TgbBnQKfu3XZi4Ce1UJSYhsSMYQ6DJ2ICFtJ3ZBCq3qMNePEmVZmZrGzWVvRStbeSBwl9dFiOZeg4ZAntTa3Eew9mqXoZ8aTzOJ9Epnk7ioRJGpzpD7Vdyvm3ppJhhyrucFS0cNQ3MD5SwvC7%2FM%2FKIMktGErJp%2BIBBirquO1l2TJH5JmIDbTQAJVwQIN6FOOlhMbmMudAT46m7leMDBzxALB6BJPnQcOaCNfGulfwZXmqCWEto%2FTFCuicMvxUpzWvHfMLhW7wVlRoiukktJODbcb851tPV2tPK%2BvsCSA7iPftd%2FULskcIR%2FaVCrKa3T9XN4%2F8GpDl2CWfDK0N%2BXElNxAckuUbTufU7dX%2B72XvN4tKtu3Ti4UUhvobuV57UwzI7pvQY6pgEQGSbZWG%2FWHs0LcFkXXzPEe1bUbGcriF1QKeWnGPWgnWSUE1DDLLm0MdfR%2Bx3HAL6U7MYQ%2BsxDR7Rs%2B%2F%2FwdeEd0sCGJBuqsGwaLW5ixV%2BDNSh6NwKMEBmoRlw9J%2BNwD7tqM0SEl5hsISRMP3V0UvotnYrDkrEUek%2FTpVrLCA80vJuKmmGYiWQ32IUJNBHOyZVdJsfZZJelS2%2Bwed8dnR86mcAJ2fKy&X-Amz-Signature=5c66ce85f7ce5caf033276df7492861f62e249d9844efbfa4480751b49161586&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGUQC67I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmUcHQ9wn4Co42Bq0NtdLoi7fr%2BgYpAbSC3BC%2Fwq%2FtLAiAMGFY%2BY1Ohhs08NHkRFaiLLELuZux4304vvvXwfXSueyqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR0tbl3vFjyB6NnVVKtwDfshILdq0xo5iaf%2BxhpGozhBygnYKrCa6%2B6di%2Btbl26mfQWbFYXgMNwitlwBxdzOKlGYgW1CA0DXkWAfQii%2BgPGyIaddJ5II1nAUTSaEFLc%2BLkvne0C6ZKHBmXzvotOuEe9rQBEaQwnKKIearw8XsMGX%2F4QniCBgzMOdGCz4rY8Ww1lcUWi87YZGv0mbxDU3%2FTD%2BVGkt11TYjQcv%2BTMMIM0kF8yu%2Fa2IE59D%2FNIUS2ucD6oUuRW0%2FKCdZv9nq2TgbBnQKfu3XZi4Ce1UJSYhsSMYQ6DJ2ICFtJ3ZBCq3qMNePEmVZmZrGzWVvRStbeSBwl9dFiOZeg4ZAntTa3Eew9mqXoZ8aTzOJ9Epnk7ioRJGpzpD7Vdyvm3ppJhhyrucFS0cNQ3MD5SwvC7%2FM%2FKIMktGErJp%2BIBBirquO1l2TJH5JmIDbTQAJVwQIN6FOOlhMbmMudAT46m7leMDBzxALB6BJPnQcOaCNfGulfwZXmqCWEto%2FTFCuicMvxUpzWvHfMLhW7wVlRoiukktJODbcb851tPV2tPK%2BvsCSA7iPftd%2FULskcIR%2FaVCrKa3T9XN4%2F8GpDl2CWfDK0N%2BXElNxAckuUbTufU7dX%2B72XvN4tKtu3Ti4UUhvobuV57UwzI7pvQY6pgEQGSbZWG%2FWHs0LcFkXXzPEe1bUbGcriF1QKeWnGPWgnWSUE1DDLLm0MdfR%2Bx3HAL6U7MYQ%2BsxDR7Rs%2B%2F%2FwdeEd0sCGJBuqsGwaLW5ixV%2BDNSh6NwKMEBmoRlw9J%2BNwD7tqM0SEl5hsISRMP3V0UvotnYrDkrEUek%2FTpVrLCA80vJuKmmGYiWQ32IUJNBHOyZVdJsfZZJelS2%2Bwed8dnR86mcAJ2fKy&X-Amz-Signature=776caf4d9862f93bb996f5fb8e1482984e8fd651699d065ea82a96e71cd19078&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
