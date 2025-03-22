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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWMUJ5P%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBP4PzvXFP9s8CRvnq2Ia2fXl1hV33jJ%2Bwh5xNymIGCLAiAJwvSgKyzEXx2B%2FM5GjfwhwVMzodHnIFJGyB221UFnUyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLFbWR2KG0FhJ9XTTKtwDsVSZBnlIc28RAmvP6skOQThul%2FMx6gUbVpgc%2FVACmQdsepEhTlWXClKAP7lUUnoxks6eJnj2vpqMp9AWgumLq3PBgqHrx1gYYhG6cNxefODBMZQ61gTOtIrx7S2rrkJIUx%2BarLB1%2Bdj7el1TDhKaKaxx9HjHXSFOqI0%2BX8fsu9F7TZwGj7goXLrxSbQdKGokI6hUbXtMkc1g7KVhVWW6SagfEmmemy1oXcABKPOutV3iJDKvws29e2Nh6uuTHGTk5PjGbgvgCikF0sOtPbUBKpfa4R6PZozxRZlbhRkaZJvci7ruiszysLL2SONL0RNeqa%2BRNcwIVwj9oNzGgJ27FGSdpI9%2FUwHdr%2FCLpHK8b7mBwpgao7X9I2Y7A05OUPls1VyA9tXClnJUF09rUCK0Yxd%2BZGsYh6gwtY3gIHHM54OyPvlmVRsnYvj7ye7BNYmtIQXVDHhLA4LElMdWkfkgXY7E0AeEsbNpXoGMLHpFQ%2BntRqqbMrD%2FK7ISM97O13pJJoSiOFsdBSAEhiFd9G8uCYud%2FE5qc%2BG8BJWeZ7y%2BnQ5VIKxE%2FpnY0YsbuaQYQs07N5Cx93e7e4a4rQFvyHThNjl5lF6HN1xT51CiXEnf6jBTpda3T5%2FF9leqqS4wwYr5vgY6pgHLPg2BrP9PEDIZMwT7VaCpRUYwDoxaZ4gjm0UXv5VkjNZpRWjmz2lhUVHbJGA6tEtOb8dL6GlLhj92ZR%2FnsAyZ55zaG%2BC0OIVcdDp3a5X5LKRKTqcr7BIKW51WBM1AW71chDfSuaxj2G1i6ZuAf3u7e8N7Zlr7kD1XVkMpjWk5qQNyqLUeR8sp4zXnz3zENO6xMHJJfZL0DKb3ahqCHj3oZ3kQGHpZ&X-Amz-Signature=0d4fdd712e805381d6d9c06306a63bac750c4bbfed3007a4ca38f0ff9b701ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWMUJ5P%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBP4PzvXFP9s8CRvnq2Ia2fXl1hV33jJ%2Bwh5xNymIGCLAiAJwvSgKyzEXx2B%2FM5GjfwhwVMzodHnIFJGyB221UFnUyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLFbWR2KG0FhJ9XTTKtwDsVSZBnlIc28RAmvP6skOQThul%2FMx6gUbVpgc%2FVACmQdsepEhTlWXClKAP7lUUnoxks6eJnj2vpqMp9AWgumLq3PBgqHrx1gYYhG6cNxefODBMZQ61gTOtIrx7S2rrkJIUx%2BarLB1%2Bdj7el1TDhKaKaxx9HjHXSFOqI0%2BX8fsu9F7TZwGj7goXLrxSbQdKGokI6hUbXtMkc1g7KVhVWW6SagfEmmemy1oXcABKPOutV3iJDKvws29e2Nh6uuTHGTk5PjGbgvgCikF0sOtPbUBKpfa4R6PZozxRZlbhRkaZJvci7ruiszysLL2SONL0RNeqa%2BRNcwIVwj9oNzGgJ27FGSdpI9%2FUwHdr%2FCLpHK8b7mBwpgao7X9I2Y7A05OUPls1VyA9tXClnJUF09rUCK0Yxd%2BZGsYh6gwtY3gIHHM54OyPvlmVRsnYvj7ye7BNYmtIQXVDHhLA4LElMdWkfkgXY7E0AeEsbNpXoGMLHpFQ%2BntRqqbMrD%2FK7ISM97O13pJJoSiOFsdBSAEhiFd9G8uCYud%2FE5qc%2BG8BJWeZ7y%2BnQ5VIKxE%2FpnY0YsbuaQYQs07N5Cx93e7e4a4rQFvyHThNjl5lF6HN1xT51CiXEnf6jBTpda3T5%2FF9leqqS4wwYr5vgY6pgHLPg2BrP9PEDIZMwT7VaCpRUYwDoxaZ4gjm0UXv5VkjNZpRWjmz2lhUVHbJGA6tEtOb8dL6GlLhj92ZR%2FnsAyZ55zaG%2BC0OIVcdDp3a5X5LKRKTqcr7BIKW51WBM1AW71chDfSuaxj2G1i6ZuAf3u7e8N7Zlr7kD1XVkMpjWk5qQNyqLUeR8sp4zXnz3zENO6xMHJJfZL0DKb3ahqCHj3oZ3kQGHpZ&X-Amz-Signature=90b52358791f8a1d0180bbd0742e6b398f85d7438ab9afa9fd8ff744afa5a6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
