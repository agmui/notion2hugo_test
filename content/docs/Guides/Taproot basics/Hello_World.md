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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7YUDIR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNrAzAHz0maYriCYUSBDzsU2JU2I2JoSRpfbhWtpquzAiAdKPKsLHLjUZiUnYHjl%2FFhQMZf5zYsZo8%2FrPIFIuaNVir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM4mKGsLCV%2FIq1CXOJKtwDyr%2BIiYPC%2BbcKKVNaI2Q9Z35XCnofH2NgaOsDYdGEbKc1grpB7y7Ne9OMfluEICjSaOuPDwkRXOYJUL1vRkB6XYaL9DCxNyLqby13%2FSl%2BUl5%2BuSfJzdhU5%2BFlYO%2Bgvv2Ujoak%2B7sgaw7O3XwwiKBxFKRgRL%2BTKQpY7hhpjxjbl%2F1NFxIVYTFRbUf2alkQVcOB57sn0x844mpWREEsxALfVPuk6cwyqvfWRobeQbYphC3M3ZyAmMux9vJoMBY9hqlDRJFM4PPOwbtf4wm%2F9YY5QxrbF%2FSa18gYEFTZhSObQTgx%2BFqDg6xHmxJ6NTw5BM2YAibx6i%2FFfE%2Fh48PeCUwjJsxJarmZNgaidXNGnvzOJtlgQWBn5c5Q%2Bhqg1BOSAvzvnyj3yaipHYvT78D9VcnhOxx1RhX1wRxY7X6XaSAzZC1o77e5XNRatiycodx6ZIc1QQdVa45GyFNHzFrOYDb0JWYC9r9Z96yJKNFoPRXW%2FgDtInGKVNh3CspkOVaQClaH4Q8D4TUe2aEswqhJrSPOTZkTc50dOjzHKbspJ8kmF6nphG69TKBC9%2BRnwh3OYqSHPMyR6ybN2HgbhvifHc5oSkw9SXAyQjWfvJIsvk0iuN8n1a1Cqet%2BFSpSsMYwz6K7xAY6pgFS2El3JEGQbMmGt87iZQZ73mXjIvZsKTJUatm%2FSqi0qXRbggMTOHBrWjjBPU8jr7%2FkspzSl%2FSZh56AGIA7IYzydma5a6uDTPx7hESVrUSPaawBRyVOG8RNCTqaHxyl7ct0UtDQhp5RPOVa2yh5tZXfhgavRhOFg4nuj%2BJUqYtahW6m2BRQb3yNDP0PRWJMl0la%2B%2FEDNdCPObyWWVDRE%2Bz6NkiIW2sr&X-Amz-Signature=4dfbc8d1095f536f82c3f0f7cac7e1f29d7226672b963d35139650844e2e6ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7YUDIR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNrAzAHz0maYriCYUSBDzsU2JU2I2JoSRpfbhWtpquzAiAdKPKsLHLjUZiUnYHjl%2FFhQMZf5zYsZo8%2FrPIFIuaNVir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM4mKGsLCV%2FIq1CXOJKtwDyr%2BIiYPC%2BbcKKVNaI2Q9Z35XCnofH2NgaOsDYdGEbKc1grpB7y7Ne9OMfluEICjSaOuPDwkRXOYJUL1vRkB6XYaL9DCxNyLqby13%2FSl%2BUl5%2BuSfJzdhU5%2BFlYO%2Bgvv2Ujoak%2B7sgaw7O3XwwiKBxFKRgRL%2BTKQpY7hhpjxjbl%2F1NFxIVYTFRbUf2alkQVcOB57sn0x844mpWREEsxALfVPuk6cwyqvfWRobeQbYphC3M3ZyAmMux9vJoMBY9hqlDRJFM4PPOwbtf4wm%2F9YY5QxrbF%2FSa18gYEFTZhSObQTgx%2BFqDg6xHmxJ6NTw5BM2YAibx6i%2FFfE%2Fh48PeCUwjJsxJarmZNgaidXNGnvzOJtlgQWBn5c5Q%2Bhqg1BOSAvzvnyj3yaipHYvT78D9VcnhOxx1RhX1wRxY7X6XaSAzZC1o77e5XNRatiycodx6ZIc1QQdVa45GyFNHzFrOYDb0JWYC9r9Z96yJKNFoPRXW%2FgDtInGKVNh3CspkOVaQClaH4Q8D4TUe2aEswqhJrSPOTZkTc50dOjzHKbspJ8kmF6nphG69TKBC9%2BRnwh3OYqSHPMyR6ybN2HgbhvifHc5oSkw9SXAyQjWfvJIsvk0iuN8n1a1Cqet%2BFSpSsMYwz6K7xAY6pgFS2El3JEGQbMmGt87iZQZ73mXjIvZsKTJUatm%2FSqi0qXRbggMTOHBrWjjBPU8jr7%2FkspzSl%2FSZh56AGIA7IYzydma5a6uDTPx7hESVrUSPaawBRyVOG8RNCTqaHxyl7ct0UtDQhp5RPOVa2yh5tZXfhgavRhOFg4nuj%2BJUqYtahW6m2BRQb3yNDP0PRWJMl0la%2B%2FEDNdCPObyWWVDRE%2Bz6NkiIW2sr&X-Amz-Signature=40198f393d4b35fff081906d091d9c831421216de39d95a305f740a565967a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
