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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGBG4YD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0p4ATBKoeh2oCWfTxIvf5UsQnNIGtHlAMqLtLkeu1cAIhAL1dn1h4d6CosmjghMZpcWG6RXNiO5N6BsAwow3Nd9q%2BKv8DCCQQABoMNjM3NDIzMTgzODA1Igx9pL41Ig1sj7Fspncq3ANxmIUY%2Fbz95W9uZP3Mn8xTBb%2FqBc%2FaECD3%2FzPumoQl%2BX6V2%2B2R%2BAIybrFd4fQcqIRx1HYcSB6BTslHYD3hoFXkhgSG9R6jQztMOSW658L0xpUOTIUCZsvyMeMTvAwTZkXvA5CjcpzuXWklDv1ul5hBklK93gTzikIt646RfLTmixgiByD6%2Fqigtjwahy29JCcaSfrwLXNJfAAdxqS6Gs57MrutubJYYthlBffpf3eUN49mROh5T5CjJMv5ZWEmb7wwRTLXYF0iZKMEm6Maub9c8QTRlVZdUwRcd1XgHB3a4Ql2QS7KsBHqBAbawO4E%2BIhnQl2C0O37Tr9GPeOT51CPJp8cuYJR4UHqh%2FK5Kih%2FblVnMHtvDTfYFhlIunld0ECd8GPNJRDa5m6ZNyb%2BotW5HvdC0FCv77E09Px%2BpBjbtELNR8tHblGyFWK4Zv9jGgRMyKw3j8yL%2Bq6il%2F1Yki0DJJCGC%2BQL1UGAdw00K9nua%2FQ7VRjjjoQErSf4M%2BTQ68zWftS5YJSDQnwrY0XxKY8Daq1F0G72pYVi3WN3f%2Bt35GXokK6FhTe6AUIZOj6isU7MR%2FGRyAsg0x5s1BFk2tq3TFfHgU9rT2sI8vr1Ns9Zr38Pg46TuxYCaItVQzDVnLvEBjqkASic9J3mMRL%2BsQFGq7kH4y4n4MobpMi9KKAxLubSlnTwFxX7B4ga2mUw2fXBCssys7acEqxxqjZk%2B2cqakrJnzIC75U8wLzKNm4Mks1UjF%2Ba0FJa8xb9YhgXxD8Nph9f5L5N8LGONSndf0OvOfRhLz8OLFr5LucWsHSomQGeiqSYciPreOHZcJl1ZOweU9Rma61rc8N7p58majuerrzI4AJ5LR1s&X-Amz-Signature=55eda2a203500a2a163dccb2242122285cfbd4fe5cdfda070d901671d37d746f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGBG4YD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0p4ATBKoeh2oCWfTxIvf5UsQnNIGtHlAMqLtLkeu1cAIhAL1dn1h4d6CosmjghMZpcWG6RXNiO5N6BsAwow3Nd9q%2BKv8DCCQQABoMNjM3NDIzMTgzODA1Igx9pL41Ig1sj7Fspncq3ANxmIUY%2Fbz95W9uZP3Mn8xTBb%2FqBc%2FaECD3%2FzPumoQl%2BX6V2%2B2R%2BAIybrFd4fQcqIRx1HYcSB6BTslHYD3hoFXkhgSG9R6jQztMOSW658L0xpUOTIUCZsvyMeMTvAwTZkXvA5CjcpzuXWklDv1ul5hBklK93gTzikIt646RfLTmixgiByD6%2Fqigtjwahy29JCcaSfrwLXNJfAAdxqS6Gs57MrutubJYYthlBffpf3eUN49mROh5T5CjJMv5ZWEmb7wwRTLXYF0iZKMEm6Maub9c8QTRlVZdUwRcd1XgHB3a4Ql2QS7KsBHqBAbawO4E%2BIhnQl2C0O37Tr9GPeOT51CPJp8cuYJR4UHqh%2FK5Kih%2FblVnMHtvDTfYFhlIunld0ECd8GPNJRDa5m6ZNyb%2BotW5HvdC0FCv77E09Px%2BpBjbtELNR8tHblGyFWK4Zv9jGgRMyKw3j8yL%2Bq6il%2F1Yki0DJJCGC%2BQL1UGAdw00K9nua%2FQ7VRjjjoQErSf4M%2BTQ68zWftS5YJSDQnwrY0XxKY8Daq1F0G72pYVi3WN3f%2Bt35GXokK6FhTe6AUIZOj6isU7MR%2FGRyAsg0x5s1BFk2tq3TFfHgU9rT2sI8vr1Ns9Zr38Pg46TuxYCaItVQzDVnLvEBjqkASic9J3mMRL%2BsQFGq7kH4y4n4MobpMi9KKAxLubSlnTwFxX7B4ga2mUw2fXBCssys7acEqxxqjZk%2B2cqakrJnzIC75U8wLzKNm4Mks1UjF%2Ba0FJa8xb9YhgXxD8Nph9f5L5N8LGONSndf0OvOfRhLz8OLFr5LucWsHSomQGeiqSYciPreOHZcJl1ZOweU9Rma61rc8N7p58majuerrzI4AJ5LR1s&X-Amz-Signature=e74d658ec227205cd5c0cd3585e0ccb1fc451f01c3beb8188409a121932b2c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
