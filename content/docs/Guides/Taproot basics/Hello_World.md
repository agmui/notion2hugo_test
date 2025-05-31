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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLB4E5D%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgZJ1q%2FddlS0HDfybF9PspA5POqiOmvrMfptU6wpu%2BFAiEAqBpVN01T2mQqOS5%2BjnarNqRLtWoe0IUf6Oejtk6bNTIqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXw0iSqsSogjKWovCrcA8vcLBXrNHOHa0Fi17HndlhLM0VhD7dSSHDRb%2FTPMSstDPffw3VjKs9SwsE5iWmVBtT0czj4E6wQ5%2BqEvM0eO1oNus9SqjGH78CQsp3Y8LJDudehXNGP31MOmDTLjg4qN2v%2FN4rdCB2qMOpGx1rr9sZKgD8fdU7Cqt1UAMJq%2BFbLtVc14vhLTW0cnUMXemDKlEHSymHGcxeBpkGZ1FhKLtwAfYT0T5X%2FRYSbjnrEnGq7pUmhsxvgq3Ask7GOWGPIgJKBpcva%2BDsAUCMhTbE8Jg%2BZR3b%2BV%2F%2Bzv30ELezeW%2BGUMl4FjBXVNHZ94jpYDgdDBmsrZlr1QBmcJCjGnIUacDBFz%2FlrYK1vnx84C6SQxLG9YIaYq%2BnMh9SCfU2xB6RuH8i%2BYe77Ky2OJhKlIIfcqfXTe%2Bx4HJo%2FeQfItLtn3LUwFQUoAQov5dyuJYrnQvL5IYzjBNfwTHhUxJOCDwz02IPGzVWEDOGC6eVtZB2eLF7JHu%2B3QkZNqNwAU28p4G4T9WavM43Jb9Nrrh%2FmbntiX2OWnsuLFSHVRS5qJPhwOWaoaxxIghQBnyeSe8fbk46judikjTqkFUCeRbhFHtCz9RP2RALnTlsJPZa3q6E7O785C4YwFt3vP5BojkCeMK6X6cEGOqUB1cvAZleF31dAzHKIUEo03rha22PviPGdKgmXyHeUhyrpk9rLU7dmWF2U7hk5CmR1UVIaScZzCSdjJxlhkkK4KCCVBRgB7nQ5l4qSWTo%2F8GWmrh7mjVx54UXca40KEZ68DUTbAxoPj2tjQQsUWCmiTfwIYzE7A23xr4Aih%2F3uHUyDtioLsXGexznMAeCz3aO24NVACYCEo%2B8c4oYqXV0lUG%2BxXFZM&X-Amz-Signature=423b7781d72682f1a7b7d30f300eb722c2be10b03958053b48bfa17c2ee32079&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLB4E5D%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgZJ1q%2FddlS0HDfybF9PspA5POqiOmvrMfptU6wpu%2BFAiEAqBpVN01T2mQqOS5%2BjnarNqRLtWoe0IUf6Oejtk6bNTIqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXw0iSqsSogjKWovCrcA8vcLBXrNHOHa0Fi17HndlhLM0VhD7dSSHDRb%2FTPMSstDPffw3VjKs9SwsE5iWmVBtT0czj4E6wQ5%2BqEvM0eO1oNus9SqjGH78CQsp3Y8LJDudehXNGP31MOmDTLjg4qN2v%2FN4rdCB2qMOpGx1rr9sZKgD8fdU7Cqt1UAMJq%2BFbLtVc14vhLTW0cnUMXemDKlEHSymHGcxeBpkGZ1FhKLtwAfYT0T5X%2FRYSbjnrEnGq7pUmhsxvgq3Ask7GOWGPIgJKBpcva%2BDsAUCMhTbE8Jg%2BZR3b%2BV%2F%2Bzv30ELezeW%2BGUMl4FjBXVNHZ94jpYDgdDBmsrZlr1QBmcJCjGnIUacDBFz%2FlrYK1vnx84C6SQxLG9YIaYq%2BnMh9SCfU2xB6RuH8i%2BYe77Ky2OJhKlIIfcqfXTe%2Bx4HJo%2FeQfItLtn3LUwFQUoAQov5dyuJYrnQvL5IYzjBNfwTHhUxJOCDwz02IPGzVWEDOGC6eVtZB2eLF7JHu%2B3QkZNqNwAU28p4G4T9WavM43Jb9Nrrh%2FmbntiX2OWnsuLFSHVRS5qJPhwOWaoaxxIghQBnyeSe8fbk46judikjTqkFUCeRbhFHtCz9RP2RALnTlsJPZa3q6E7O785C4YwFt3vP5BojkCeMK6X6cEGOqUB1cvAZleF31dAzHKIUEo03rha22PviPGdKgmXyHeUhyrpk9rLU7dmWF2U7hk5CmR1UVIaScZzCSdjJxlhkkK4KCCVBRgB7nQ5l4qSWTo%2F8GWmrh7mjVx54UXca40KEZ68DUTbAxoPj2tjQQsUWCmiTfwIYzE7A23xr4Aih%2F3uHUyDtioLsXGexznMAeCz3aO24NVACYCEo%2B8c4oYqXV0lUG%2BxXFZM&X-Amz-Signature=b3ece3187f5d10faa86324fd9c7af71165b144bd60eb0047888e820f719a696d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
