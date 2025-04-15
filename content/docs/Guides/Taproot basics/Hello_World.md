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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWEVYDDT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxU%2FRPV0s4OqYZmqms1okGYpyaITHN3nryqffZaq9ZpAiEA9eB801q0%2FZMrtJvSkXbqqjD5QAZ4a2W7psbSw17NSxcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEpTJsA382eXpGZEQyrcA3cZmelEal8uiAiKb6jUVVLJ8UmYDBgWiAQ%2FDgVqKIHMoRPj5Vhm0pbmMzIDLWcurM0OxFv4AVkBRr2uhwujsUouuUShVeZg6uWg3cUdJp3ogh4Xqhf%2BQbRKW4Jrc5dRadV4xsqTuLt7osV%2FzZ9jZ3xYMNoAV2%2B%2BMVuIk6pZFziYx7WTvsemS8qsznKYRAJ7viSUQGSUg1gk6%2BHcF%2BBCt3lchF%2BZ03T%2F6cjPvFlz39R1egWI8BqNJBEUoekT1p3qmofHf7GYA8QaCmtb3z7L8lHGjxMVVRB5YBUTw0UmmNGSjcTkBzZynmmJGZWTzwosEv9kSGUD6Sjw%2B7Pfq4KJAtfwKDmmixeMJ5xJTCW04NPDUlz2jlTFs5zuJl7gtBkDxO3EoiFheH8mwFRu8VVM5NgBmquRNZYk5sz6Pj%2F1o87Y1uzMo5S5i52vePXGQLMNc5tXvbIYq4WE%2FiM5a75eRhwogXTy34JGDBzVFrE%2BtsgowxQ51RzY8KYVK42HGL6eIhacv0r5o1OOma8iRvSiG1OfkosmzjEhJ5sY%2FyX75Rd8%2FLuRSzOhJxZa9%2F4FeJLQY3gUajoLn6ukSOVSM7s8K7Tbs%2FVqgJgRDUbR4mZMfqZ4VhAZHCBJKnZTy7cRMI%2FC%2Bb8GOqUByQNXn3hbPfSzRycW6hcFc7%2Bn04oCmEDcRC0erZdI9wqwez2Ou6FmXlTTpxhaWjUVzNOYxl%2BUF2m8OtxuuNFNsrFBxculSgzm%2Bg6JYIurRjvyUMo7FPm7pZzVa7V%2F1Z5AkFglw03j4qhXtYxfP3HYo%2FnQ1d9nZttuLL99zZe0TfTSa%2B664LIZnlM5i2t6StaLqhWbwsMJqBYeajbx1mL%2BlldgGRmK&X-Amz-Signature=7a970cbe2d23e6990a6e23cf79eec0e1e19526b7fd790e52eea5040b20a91ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWEVYDDT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxU%2FRPV0s4OqYZmqms1okGYpyaITHN3nryqffZaq9ZpAiEA9eB801q0%2FZMrtJvSkXbqqjD5QAZ4a2W7psbSw17NSxcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEpTJsA382eXpGZEQyrcA3cZmelEal8uiAiKb6jUVVLJ8UmYDBgWiAQ%2FDgVqKIHMoRPj5Vhm0pbmMzIDLWcurM0OxFv4AVkBRr2uhwujsUouuUShVeZg6uWg3cUdJp3ogh4Xqhf%2BQbRKW4Jrc5dRadV4xsqTuLt7osV%2FzZ9jZ3xYMNoAV2%2B%2BMVuIk6pZFziYx7WTvsemS8qsznKYRAJ7viSUQGSUg1gk6%2BHcF%2BBCt3lchF%2BZ03T%2F6cjPvFlz39R1egWI8BqNJBEUoekT1p3qmofHf7GYA8QaCmtb3z7L8lHGjxMVVRB5YBUTw0UmmNGSjcTkBzZynmmJGZWTzwosEv9kSGUD6Sjw%2B7Pfq4KJAtfwKDmmixeMJ5xJTCW04NPDUlz2jlTFs5zuJl7gtBkDxO3EoiFheH8mwFRu8VVM5NgBmquRNZYk5sz6Pj%2F1o87Y1uzMo5S5i52vePXGQLMNc5tXvbIYq4WE%2FiM5a75eRhwogXTy34JGDBzVFrE%2BtsgowxQ51RzY8KYVK42HGL6eIhacv0r5o1OOma8iRvSiG1OfkosmzjEhJ5sY%2FyX75Rd8%2FLuRSzOhJxZa9%2F4FeJLQY3gUajoLn6ukSOVSM7s8K7Tbs%2FVqgJgRDUbR4mZMfqZ4VhAZHCBJKnZTy7cRMI%2FC%2Bb8GOqUByQNXn3hbPfSzRycW6hcFc7%2Bn04oCmEDcRC0erZdI9wqwez2Ou6FmXlTTpxhaWjUVzNOYxl%2BUF2m8OtxuuNFNsrFBxculSgzm%2Bg6JYIurRjvyUMo7FPm7pZzVa7V%2F1Z5AkFglw03j4qhXtYxfP3HYo%2FnQ1d9nZttuLL99zZe0TfTSa%2B664LIZnlM5i2t6StaLqhWbwsMJqBYeajbx1mL%2BlldgGRmK&X-Amz-Signature=07e074c59f63919e6502b98f46e1a4dd31c47f8616aaaf560034958b2944847b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
