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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EOHBWHO%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs%2BxPYZ7z%2BuE9wP9qvNPcdXmxPJGhmEVqXZQnbhwzl%2BQIgc2Za%2FoQVyjXGjbN%2FWkry0ROMJyCpUaDJueZGY7o0qS0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCbkc9YWYpfsQ5jKVSrcAzwStT%2FKD4q2%2BM%2BUaaeb%2FAK5P03rqug0YXq8K4108ltkU1K1Qh4EN9K%2F6TCg%2Fc37Za3EOLL2uXIWIOoEHOJYaL8%2F%2FtvZsmIh9apMWpWMbQUzB261uJiEkV1SuRGpgc4%2F14USy2dT1PoGUUye8iBVhYVXDp1gyCR%2FUE42aX%2BkqJhbMhcHo4C7MWQH4REmLMLObnDvTtuslJFe6ploohHRJhEvS68oQ2RcZpwCn7xFBCu0OMtNYPaF7sbpeFys8lskQanBJlpv8mI%2F2ZvGPAJfZrxUt%2Bqu7qkRMuvOP6rPA6SrXhyWT%2B8IAy6PGYrm2ihZgD6rXXHiI9lIBpkcQHzdZMm9mBy5mqwACNapfaWOph7uLNb7pVWWptGHX54yeQ4wggG7sB8wdXpGu3ySTErOv34jQxC5f%2FAPJD7IE1QMMIad7sZSJW1bC%2Bbi5aqr22WVERYMqWRLtfQoEnBYCxnLrWXNP75EvG72cOyUxWcQS%2BdmFSNDaUdIu0yCaL%2BDvg%2FFgd6D%2B%2FwGTsRiobNXaoWIeFdDiZAciR3o3YXR0qMlp9DFOEkSMX7%2BDURNZ%2FAN6wynAwkLxIujKwod%2B%2FDsnKndS8zy%2Fi75wARtmkicIlN%2FPUVcQfxTUpDl9yQ006ciMJLV9MAGOqUBqqwqE7SCG6R%2FI%2BHLOzxLmKMMfJKWHvYOGFIMEipqhCDvw2pOjd2ITZNbV9oPPK2mQnbvJnFNJ%2BS7mTOljx%2FCkOivZQE2quNDTqHUhkYxrlq3UiKjmzy1ku50u%2BwXsCkQ0%2FZ2DgQWn%2B5cmPS35G0cQhsJM4E9wJ72KxmPSKM2QCqJ3EC%2FyTkRhaYoZdAavqRz%2BHOfoORjVOc7N%2FIcsZ9Bw83%2FPlQJ&X-Amz-Signature=21431ac1d07d4d8252bc5f5ff6d7b677017a792b01489da01febf8d5c542414b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EOHBWHO%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs%2BxPYZ7z%2BuE9wP9qvNPcdXmxPJGhmEVqXZQnbhwzl%2BQIgc2Za%2FoQVyjXGjbN%2FWkry0ROMJyCpUaDJueZGY7o0qS0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCbkc9YWYpfsQ5jKVSrcAzwStT%2FKD4q2%2BM%2BUaaeb%2FAK5P03rqug0YXq8K4108ltkU1K1Qh4EN9K%2F6TCg%2Fc37Za3EOLL2uXIWIOoEHOJYaL8%2F%2FtvZsmIh9apMWpWMbQUzB261uJiEkV1SuRGpgc4%2F14USy2dT1PoGUUye8iBVhYVXDp1gyCR%2FUE42aX%2BkqJhbMhcHo4C7MWQH4REmLMLObnDvTtuslJFe6ploohHRJhEvS68oQ2RcZpwCn7xFBCu0OMtNYPaF7sbpeFys8lskQanBJlpv8mI%2F2ZvGPAJfZrxUt%2Bqu7qkRMuvOP6rPA6SrXhyWT%2B8IAy6PGYrm2ihZgD6rXXHiI9lIBpkcQHzdZMm9mBy5mqwACNapfaWOph7uLNb7pVWWptGHX54yeQ4wggG7sB8wdXpGu3ySTErOv34jQxC5f%2FAPJD7IE1QMMIad7sZSJW1bC%2Bbi5aqr22WVERYMqWRLtfQoEnBYCxnLrWXNP75EvG72cOyUxWcQS%2BdmFSNDaUdIu0yCaL%2BDvg%2FFgd6D%2B%2FwGTsRiobNXaoWIeFdDiZAciR3o3YXR0qMlp9DFOEkSMX7%2BDURNZ%2FAN6wynAwkLxIujKwod%2B%2FDsnKndS8zy%2Fi75wARtmkicIlN%2FPUVcQfxTUpDl9yQ006ciMJLV9MAGOqUBqqwqE7SCG6R%2FI%2BHLOzxLmKMMfJKWHvYOGFIMEipqhCDvw2pOjd2ITZNbV9oPPK2mQnbvJnFNJ%2BS7mTOljx%2FCkOivZQE2quNDTqHUhkYxrlq3UiKjmzy1ku50u%2BwXsCkQ0%2FZ2DgQWn%2B5cmPS35G0cQhsJM4E9wJ72KxmPSKM2QCqJ3EC%2FyTkRhaYoZdAavqRz%2BHOfoORjVOc7N%2FIcsZ9Bw83%2FPlQJ&X-Amz-Signature=8809a1e424bf1577776f11fbdf3aca0778374114fa77127ff74ce15dc5435f09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
