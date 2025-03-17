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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BQRYR2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBicb5pixgg4CkQNZfZn%2BUjVRCP1kIXF2FAEdu9BwdrCAiAIOSd62mZhk5REkHNgFjkRv3nkC%2BjsCsW%2FcsrkLVjhoir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMYN4tS81jSBJ2%2BQxmKtwD%2FSBP5MrSTE4bcmheHNNQ9nczVYmWPW0TMFjuenD3oKnAVY3lH3CRKNPq8l2UugV2ycBqHXK0FVH7yb02nZz%2BvtfrJC7EFVGUz2plB0fLmGlW8l7SSy3p%2FJ4781hujL%2BQ00HvP2DYW9xawcM45Py7EZI7QT0Z38M4WxG%2FPrlPj9mUOyUbMsydF3Hm10ADvw5t482OicmUu9AQd7P6DzVSwy8MDdhLCl03xnBjqaGHYNCYj9Y%2F0YUtTB9Qh0S1Z%2FY07G86M1%2FhvbQXpqa82aZYMX0nLniiJvyGKq1iKMiBtKWjV106S8EVBEQbaKnlWGWoJQHZ1x4Ppjs%2B5TwpcJzJe76qjTCJwhzI6RWdajFad7gy4BScTkxgQAQdMixEJ%2FFLoQOUeaLrcPTMgYgAUN8P5TRg3xQh%2B4raRgMyHecuAV%2FgWZ%2F6yqNXqiMuntY%2FBHV6FLCR91WGtfNzfPHoIwbahffZodRq6pZ2LMFhO1t8YgCw08wHG9KnwQaNx3SJA1oQvW5exgUtBbcFENb0Ps2mdUiroYuc6qNZrcHydaYqVb2HVgcxnoiYBTl%2BJ9AxYLKArE9qMT4yDT67f7XtX4hWJMHEv4%2Bjflc1H6g32VDy4idin1Gzbyhrhee0C9Mw2cXhvgY6pgGjIyCrEAw5KDAn3O2NiB7gJFAYmjGSU5ZXsMTlRSU8iNIuw5%2FV5u1YXTkPsbj%2BJmOi5hP3Wvk2tQlFzBXUS3rlPMMcHtbDROwRY5tJTQbraNAYA83AKGP3tmvLM5jVy6yGqmJeCmdDnjgA6ZdgMxKaX4z0ax92YJvKDNXPS%2FKA9zaVz8VSEXhWJEKF3%2F1h2LtchIS8D0OXa6NdO6cWWyuayxVumqS%2F&X-Amz-Signature=3aed53d26f6a7e9ebb27146ae76b34b3e81d0a80266a83d04a5f79423553c27a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BQRYR2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBicb5pixgg4CkQNZfZn%2BUjVRCP1kIXF2FAEdu9BwdrCAiAIOSd62mZhk5REkHNgFjkRv3nkC%2BjsCsW%2FcsrkLVjhoir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMYN4tS81jSBJ2%2BQxmKtwD%2FSBP5MrSTE4bcmheHNNQ9nczVYmWPW0TMFjuenD3oKnAVY3lH3CRKNPq8l2UugV2ycBqHXK0FVH7yb02nZz%2BvtfrJC7EFVGUz2plB0fLmGlW8l7SSy3p%2FJ4781hujL%2BQ00HvP2DYW9xawcM45Py7EZI7QT0Z38M4WxG%2FPrlPj9mUOyUbMsydF3Hm10ADvw5t482OicmUu9AQd7P6DzVSwy8MDdhLCl03xnBjqaGHYNCYj9Y%2F0YUtTB9Qh0S1Z%2FY07G86M1%2FhvbQXpqa82aZYMX0nLniiJvyGKq1iKMiBtKWjV106S8EVBEQbaKnlWGWoJQHZ1x4Ppjs%2B5TwpcJzJe76qjTCJwhzI6RWdajFad7gy4BScTkxgQAQdMixEJ%2FFLoQOUeaLrcPTMgYgAUN8P5TRg3xQh%2B4raRgMyHecuAV%2FgWZ%2F6yqNXqiMuntY%2FBHV6FLCR91WGtfNzfPHoIwbahffZodRq6pZ2LMFhO1t8YgCw08wHG9KnwQaNx3SJA1oQvW5exgUtBbcFENb0Ps2mdUiroYuc6qNZrcHydaYqVb2HVgcxnoiYBTl%2BJ9AxYLKArE9qMT4yDT67f7XtX4hWJMHEv4%2Bjflc1H6g32VDy4idin1Gzbyhrhee0C9Mw2cXhvgY6pgGjIyCrEAw5KDAn3O2NiB7gJFAYmjGSU5ZXsMTlRSU8iNIuw5%2FV5u1YXTkPsbj%2BJmOi5hP3Wvk2tQlFzBXUS3rlPMMcHtbDROwRY5tJTQbraNAYA83AKGP3tmvLM5jVy6yGqmJeCmdDnjgA6ZdgMxKaX4z0ax92YJvKDNXPS%2FKA9zaVz8VSEXhWJEKF3%2F1h2LtchIS8D0OXa6NdO6cWWyuayxVumqS%2F&X-Amz-Signature=0e5a913bfced674dde978b6aa2e22abe9dcbcb571bdd2dae472891ead7dcdc13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
