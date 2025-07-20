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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAYFRVOY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMYRfZrvMVd64ZMwt3Dh0nZ543CMHoR3uOj10oEGX7iAIgNPZNDoBAa2cChwHOm2a0FnHnHUhSw7XykDeRY%2FN5tcYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaxSGcfsxZS911UwSrcAzjxc6QlmTeFX%2BNYC4lyFXY7AdJbrkJkX3sb1rwEpAy5FXTd94%2BlFoh96sttxlGItqhTmQQusNyt2SdDwGAbDpk2sZGpHmGxHy3e0A2abzSEeDFASMRN1VDv30RW4%2Fm%2FAdPRKYarF0k2EBw%2Fp%2B9uS9Ofnrguo6KMP%2F5fuHNFdwKO9lbc46Wuid4KX8pktE%2Fij0CPHJmc9iMVUJ5PUfVpPqcw9Ps4J4gaivbUjcwo6yT62sJ9DpJb8oExJ0If1opCC7y6sIcij8lRZtE%2B2mZxuDWrzwq67eAVNsi%2ByGdOMqmr%2BhPBOLxCTLZ3EWwPiMNVJLSWLM6KmdMRkKATLQdk6gAdtSi5u%2BgYB9kbzieLqNbiX5gCseqfX2vApUC8MjKx%2FAEM%2FTj0BUkvYARy7oy3VV1CpiL0LF8TlpQX%2FM6kOigF%2FsFq%2B3wMVlKNbwhRm26nyzCSb2x%2FmaeLL9v2N3ZF3ODbYHpQMhIv7ygmitu6XTdeHFmE%2FFqeRzNJxx7W9BsXex7E%2BZSo74krtyKEODYq3Uj5Pc5pk196GhEcZvAcQJuUQSItqxF9hqB2arAsgmxSu46QIidF4qYMZMY9KjvhWFd%2BrYKgeUv12X6OEZ0zbImD2hcGPJ5j2TMbrN7UMJ2U8cMGOqUBAHcHoJVeHHXXrOSByhKJ4kY7UE3rUQ8o9UNX31lrNUFYDj%2BE%2BHZ6wOl0qD06RYptvILKykWUcjCm%2B6vvZJIU%2F3XWNNS5mxSXv7aTNeclhcCDNQMVZ4BKDBdOD%2BBabkSKXIizE%2BqmtAWFydN89BNH01s61EVxllO4eGZWQDIu6R7bMd9cwhW2h%2BMZtUWW%2BWm9ivTW6wg9HWI9rDUe5nKRZ0SaGGx9&X-Amz-Signature=845353469625148d1c898d31bf2eed2357ea7bc153fef0a0fe9193065f1de841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAYFRVOY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMYRfZrvMVd64ZMwt3Dh0nZ543CMHoR3uOj10oEGX7iAIgNPZNDoBAa2cChwHOm2a0FnHnHUhSw7XykDeRY%2FN5tcYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaxSGcfsxZS911UwSrcAzjxc6QlmTeFX%2BNYC4lyFXY7AdJbrkJkX3sb1rwEpAy5FXTd94%2BlFoh96sttxlGItqhTmQQusNyt2SdDwGAbDpk2sZGpHmGxHy3e0A2abzSEeDFASMRN1VDv30RW4%2Fm%2FAdPRKYarF0k2EBw%2Fp%2B9uS9Ofnrguo6KMP%2F5fuHNFdwKO9lbc46Wuid4KX8pktE%2Fij0CPHJmc9iMVUJ5PUfVpPqcw9Ps4J4gaivbUjcwo6yT62sJ9DpJb8oExJ0If1opCC7y6sIcij8lRZtE%2B2mZxuDWrzwq67eAVNsi%2ByGdOMqmr%2BhPBOLxCTLZ3EWwPiMNVJLSWLM6KmdMRkKATLQdk6gAdtSi5u%2BgYB9kbzieLqNbiX5gCseqfX2vApUC8MjKx%2FAEM%2FTj0BUkvYARy7oy3VV1CpiL0LF8TlpQX%2FM6kOigF%2FsFq%2B3wMVlKNbwhRm26nyzCSb2x%2FmaeLL9v2N3ZF3ODbYHpQMhIv7ygmitu6XTdeHFmE%2FFqeRzNJxx7W9BsXex7E%2BZSo74krtyKEODYq3Uj5Pc5pk196GhEcZvAcQJuUQSItqxF9hqB2arAsgmxSu46QIidF4qYMZMY9KjvhWFd%2BrYKgeUv12X6OEZ0zbImD2hcGPJ5j2TMbrN7UMJ2U8cMGOqUBAHcHoJVeHHXXrOSByhKJ4kY7UE3rUQ8o9UNX31lrNUFYDj%2BE%2BHZ6wOl0qD06RYptvILKykWUcjCm%2B6vvZJIU%2F3XWNNS5mxSXv7aTNeclhcCDNQMVZ4BKDBdOD%2BBabkSKXIizE%2BqmtAWFydN89BNH01s61EVxllO4eGZWQDIu6R7bMd9cwhW2h%2BMZtUWW%2BWm9ivTW6wg9HWI9rDUe5nKRZ0SaGGx9&X-Amz-Signature=07012bc9738a4615961c24c6ee1e3fced2a3b48df5a9ef34c0b006b0c55b4d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
