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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQCGIJI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCvTMgGWV4Ha6%2F0qnbyDRLjhmwA%2F5KOJFy3rLJV8ud2YAIgTUW4yBr7UNfyydwv%2FskXxB8MEAWOKRwEZRFDrWpRQ7gqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZkT7bcUlQmXWMemCrcA%2BqkkEs1%2FDNS4O%2B7WOAoQd0aZ%2FqdlCn6xpRPIiTEYZB5kHNZxqPFb5Xmfz8maqETEduznww9841dRpFIQmsY7Zlbjp4ew02zTqbqoBYXZ879U8FbvAJs1bGErggg5tTpqUkBNTs5dZJd8SmQchUXAfoVVf0Gb3otfODixXcVTnvoEpV85vyrNEMdyAsUQuMmr9SzBCvXdCFwNhWn8p4s204ws%2FjZHXgEOXIQJaBrA2HtF%2B89p6AABqtokld4uub%2BZcaSJRnd6avGci%2BNzqdMka%2BTob1bo%2Bs83qc%2FU1hiQj8PuYvvbTRjJswt7kq9Bww8xCrYmny%2FnoRn8lmopqkiKov2PormHft%2FKC6EG%2B%2FnJPsfKrDUTnh492%2Brkbzx%2Boodt9nv7KsK8My2OzwK2rcIhF67xKlGCDAwAzdMNSuIMp81WkA2PvT7BmXuENBIwX5jm3xp8x0Rbr6ufwMs9vv3bp%2FcM1qjRhNxZOW5jeB2vglKG7ThxzfPvrU5gukQ%2FCau3tGaUzGu0IqrYfIxytLMH06fjSCo9Il1iEPaSG4S%2FQoL20sGkjPmkrxXjTKTQz3eiuYPfKM%2BJoqeis%2Fe2PY%2F%2ByFdbWOH3CxKTsgd1JhFLUZSOznVLmIt7dOgnsB9MNeZ6sMGOqUBL2cuqzMTD%2B7U%2B240CVEdzINMoqnCHUGCEcF3n6BEEwQnkBrUjFGOatgD0EvzyGNCjVqeSP8bK1vGZSSAQU8ZjZnBCxZe9WyzpJN8uRDNsSGgPVjTjumZin%2Fg%2Fp4QOL1iucxJBo7ZhdlgceVuwTQmhq7y9kayRGv9%2FgjUi7Ls7Y499fJwZC29qnVtu%2BvN7K9JGSr%2BeOWZv7yqurjXtkfov2KBv9op&X-Amz-Signature=ac2ff943ef6aee010ed460da96387e40515969a35085b39b7e69e78055d5a041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQCGIJI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCvTMgGWV4Ha6%2F0qnbyDRLjhmwA%2F5KOJFy3rLJV8ud2YAIgTUW4yBr7UNfyydwv%2FskXxB8MEAWOKRwEZRFDrWpRQ7gqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZkT7bcUlQmXWMemCrcA%2BqkkEs1%2FDNS4O%2B7WOAoQd0aZ%2FqdlCn6xpRPIiTEYZB5kHNZxqPFb5Xmfz8maqETEduznww9841dRpFIQmsY7Zlbjp4ew02zTqbqoBYXZ879U8FbvAJs1bGErggg5tTpqUkBNTs5dZJd8SmQchUXAfoVVf0Gb3otfODixXcVTnvoEpV85vyrNEMdyAsUQuMmr9SzBCvXdCFwNhWn8p4s204ws%2FjZHXgEOXIQJaBrA2HtF%2B89p6AABqtokld4uub%2BZcaSJRnd6avGci%2BNzqdMka%2BTob1bo%2Bs83qc%2FU1hiQj8PuYvvbTRjJswt7kq9Bww8xCrYmny%2FnoRn8lmopqkiKov2PormHft%2FKC6EG%2B%2FnJPsfKrDUTnh492%2Brkbzx%2Boodt9nv7KsK8My2OzwK2rcIhF67xKlGCDAwAzdMNSuIMp81WkA2PvT7BmXuENBIwX5jm3xp8x0Rbr6ufwMs9vv3bp%2FcM1qjRhNxZOW5jeB2vglKG7ThxzfPvrU5gukQ%2FCau3tGaUzGu0IqrYfIxytLMH06fjSCo9Il1iEPaSG4S%2FQoL20sGkjPmkrxXjTKTQz3eiuYPfKM%2BJoqeis%2Fe2PY%2F%2ByFdbWOH3CxKTsgd1JhFLUZSOznVLmIt7dOgnsB9MNeZ6sMGOqUBL2cuqzMTD%2B7U%2B240CVEdzINMoqnCHUGCEcF3n6BEEwQnkBrUjFGOatgD0EvzyGNCjVqeSP8bK1vGZSSAQU8ZjZnBCxZe9WyzpJN8uRDNsSGgPVjTjumZin%2Fg%2Fp4QOL1iucxJBo7ZhdlgceVuwTQmhq7y9kayRGv9%2FgjUi7Ls7Y499fJwZC29qnVtu%2BvN7K9JGSr%2BeOWZv7yqurjXtkfov2KBv9op&X-Amz-Signature=0daa4bd88f7395d6093ada3805ab9a1d3da051026873128ba43ce97947d12a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
