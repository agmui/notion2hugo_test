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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SJBHVY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC3V8d8BDNlhlDqd89hRU5z%2FlCV51%2F%2BiEnggvuqj0rd5gIhAIT33GEmH4WBJzave8sYIiBZ%2Fcwk1iiqp6gfpQo03XIlKv8DCGYQABoMNjM3NDIzMTgzODA1IgyyDUTlrFD1b2gbaSYq3AOAoOuu0JAtMJwsES9jVSSuZtKrYXoXFD5Lj7%2Fpj3zVnLMykWikQWbSpGZNlvH8hTymYtNM86a3A3SQ2yuEjNdNhXcmGRwpDZ7%2F8QJxztNWcUy4GeQT3Nry4v66t2YZ3XqYJ1YjHQhMeX6vPXH7AKclDlHyqj8tmnUy9gf6gWhjGA7J7KaIO9mGzaA1zkzBf3Pd9RX2CGBA7iGaFHjmlgsu%2FSoXOJAt3qOmL92H2kkeAf9r7bf2pkyJBvcv0%2BUrbzueBOQGMcUluDiCpS0DfMdEvRpv7yVFYmGgFEc%2FLN7Mpo3xdkhky%2FtT9KQqpxACGYvbPOr3BbrwBLvNBDgjCh97OreGzLA9JnC28Beh0z4wV4cge02Z3nJIgb9Ness%2F2%2FX180Ua%2B6PH3KpF5lq4KVcifF9%2Fi6CbfX9d9yo4YQKDfL8bZAQ1oqKipEeqFAoruN44nBd%2FZWf%2F5ERxFSn%2BJ5Tyz0ERk%2Fvs8sJ2WW1ejpI%2BpO2dTxOadICIDPid4iyAsMpol7uMquPpQ0oQUin8MqmCY6uae7WU0vxbQbFk9TXejyAAcR9qV1V0NhIdZvE%2FD44hIMOJEQraSJYw%2B%2B9oDsWRPzYxt8Mo2VkiRacPTdcNGoEXjw%2BOdvG2PDYDYTCHl%2BDDBjqkARW8y2W3YvGwL2CGS%2FDv5suNAd%2B8toJ3b4D3lHZ0voCNCGTbapjOxAmzfJdx1sP5YYLYK%2F%2FKQwAwNwPd%2FHJ6%2Ba58TNJ0FCRWvqokUN0BmgIY%2B4zZOJhDWw34qY8bgpRhy0vtsjBGSdA2GWLLq%2B85X1k8f89LMRrQSAvggRr1YQ9Pc9npL6G9BTdAE7hf%2BYEB1JBc11M59PpdKPE0oEsr%2BwCLfzqA&X-Amz-Signature=aea8be17b07c33d087634f69aee49c19f43ed03924c34084f082cf5d56b28282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SJBHVY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC3V8d8BDNlhlDqd89hRU5z%2FlCV51%2F%2BiEnggvuqj0rd5gIhAIT33GEmH4WBJzave8sYIiBZ%2Fcwk1iiqp6gfpQo03XIlKv8DCGYQABoMNjM3NDIzMTgzODA1IgyyDUTlrFD1b2gbaSYq3AOAoOuu0JAtMJwsES9jVSSuZtKrYXoXFD5Lj7%2Fpj3zVnLMykWikQWbSpGZNlvH8hTymYtNM86a3A3SQ2yuEjNdNhXcmGRwpDZ7%2F8QJxztNWcUy4GeQT3Nry4v66t2YZ3XqYJ1YjHQhMeX6vPXH7AKclDlHyqj8tmnUy9gf6gWhjGA7J7KaIO9mGzaA1zkzBf3Pd9RX2CGBA7iGaFHjmlgsu%2FSoXOJAt3qOmL92H2kkeAf9r7bf2pkyJBvcv0%2BUrbzueBOQGMcUluDiCpS0DfMdEvRpv7yVFYmGgFEc%2FLN7Mpo3xdkhky%2FtT9KQqpxACGYvbPOr3BbrwBLvNBDgjCh97OreGzLA9JnC28Beh0z4wV4cge02Z3nJIgb9Ness%2F2%2FX180Ua%2B6PH3KpF5lq4KVcifF9%2Fi6CbfX9d9yo4YQKDfL8bZAQ1oqKipEeqFAoruN44nBd%2FZWf%2F5ERxFSn%2BJ5Tyz0ERk%2Fvs8sJ2WW1ejpI%2BpO2dTxOadICIDPid4iyAsMpol7uMquPpQ0oQUin8MqmCY6uae7WU0vxbQbFk9TXejyAAcR9qV1V0NhIdZvE%2FD44hIMOJEQraSJYw%2B%2B9oDsWRPzYxt8Mo2VkiRacPTdcNGoEXjw%2BOdvG2PDYDYTCHl%2BDDBjqkARW8y2W3YvGwL2CGS%2FDv5suNAd%2B8toJ3b4D3lHZ0voCNCGTbapjOxAmzfJdx1sP5YYLYK%2F%2FKQwAwNwPd%2FHJ6%2Ba58TNJ0FCRWvqokUN0BmgIY%2B4zZOJhDWw34qY8bgpRhy0vtsjBGSdA2GWLLq%2B85X1k8f89LMRrQSAvggRr1YQ9Pc9npL6G9BTdAE7hf%2BYEB1JBc11M59PpdKPE0oEsr%2BwCLfzqA&X-Amz-Signature=d76be961538ecd6e7b9185ec16309d67c67b18997fce307b34fb94ae6f9da369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
