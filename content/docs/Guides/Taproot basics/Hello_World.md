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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EJHNUT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKiHXgM6El6E1EnC0U7QN3PsgoQlegsRTU6mfC%2BVFyCQIhAKGxZnNkGn%2FfZaKaTohBrHCYUy6NHGlqYNlrTgrcSQlzKv8DCCoQABoMNjM3NDIzMTgzODA1IgzXGKFMHeBtYoFziEMq3AOnmeG%2BIs0MYnykWRcvY0wh5VJ0HjiP%2F2gzdWmKhXperZgYHZ%2FD6PZDTbvJ24eIaf6uzCZUny2OZNcZkj4d84jMPjv8Xeq%2F1bi7J0%2FZl7dZU7GyAc0PcqVufXJkm%2F9BCCanZOQoDiWJ1Yx5DpSX2mddGo7Mq73MAJu41WzNdJJidaBJKudpa6IGpdZbkemZT2gsVvwEdKIPatoc3ETFXnd%2FE%2FsIfRMR7sgS1at0z%2FEV%2FqZI7za6DUcA6C9cbwj8K%2BiGPXdGwwk05p%2BLky5gfM%2FcVDmoDO0gJ6CtfoavvRJHXEL3kxab8orMC7wv0M9jBZ1wf6ndt6iot67%2FspZODEyU2XU3igrfUZPnsTlooqHqYDX%2F0B9i947HJu4olZEofE1tV%2BzmzuefJEqJ%2FVaSk%2BDIK2hOegYjq%2F44aBFVMjVylod4g8e2KhsIJ4jrDwMNphJBhJmLJiK6xB6S1G070pI3Ip1RAjXg%2FR0aJxWUQ6cjNWepdE2AFsA0tbRxo6MkIwkvD38dnki%2F5EmiSFcUFbZl1w8SM%2FWPtOvB8ZawAp3nys6BGukJTTLeWTx7FfesZAfkVBApq%2FgqypopPnphvKfT3kr009xIm0Ujj3YczcX6J0B3hMep0PHHnSP%2FLjDJtfi%2FBjqkAesYu%2By8A7oDxLuz4%2BYtyTf3xL%2FIiaV3NWIaaXeNLCA83JkD9r%2FkRAhuJE3U8DY8E5uHbp54gSZ60Db2nidusdF1hHqv5UPZ4z%2BNRc1bVL9HnLJ5ZXVM7ZzyvBr9vczDSuB74OX50VZ%2BMM8cu82nQGQFYomxnhYxLoBElBwdxj2xJ4FQahIIgOJPwbGLzzOr8xXxM4CNKfkRkmSEX7GTNzPR36b%2F&X-Amz-Signature=1c69b69464e9db247174f637d290726f224280319ab871f040585314b0c93592&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645EJHNUT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKiHXgM6El6E1EnC0U7QN3PsgoQlegsRTU6mfC%2BVFyCQIhAKGxZnNkGn%2FfZaKaTohBrHCYUy6NHGlqYNlrTgrcSQlzKv8DCCoQABoMNjM3NDIzMTgzODA1IgzXGKFMHeBtYoFziEMq3AOnmeG%2BIs0MYnykWRcvY0wh5VJ0HjiP%2F2gzdWmKhXperZgYHZ%2FD6PZDTbvJ24eIaf6uzCZUny2OZNcZkj4d84jMPjv8Xeq%2F1bi7J0%2FZl7dZU7GyAc0PcqVufXJkm%2F9BCCanZOQoDiWJ1Yx5DpSX2mddGo7Mq73MAJu41WzNdJJidaBJKudpa6IGpdZbkemZT2gsVvwEdKIPatoc3ETFXnd%2FE%2FsIfRMR7sgS1at0z%2FEV%2FqZI7za6DUcA6C9cbwj8K%2BiGPXdGwwk05p%2BLky5gfM%2FcVDmoDO0gJ6CtfoavvRJHXEL3kxab8orMC7wv0M9jBZ1wf6ndt6iot67%2FspZODEyU2XU3igrfUZPnsTlooqHqYDX%2F0B9i947HJu4olZEofE1tV%2BzmzuefJEqJ%2FVaSk%2BDIK2hOegYjq%2F44aBFVMjVylod4g8e2KhsIJ4jrDwMNphJBhJmLJiK6xB6S1G070pI3Ip1RAjXg%2FR0aJxWUQ6cjNWepdE2AFsA0tbRxo6MkIwkvD38dnki%2F5EmiSFcUFbZl1w8SM%2FWPtOvB8ZawAp3nys6BGukJTTLeWTx7FfesZAfkVBApq%2FgqypopPnphvKfT3kr009xIm0Ujj3YczcX6J0B3hMep0PHHnSP%2FLjDJtfi%2FBjqkAesYu%2By8A7oDxLuz4%2BYtyTf3xL%2FIiaV3NWIaaXeNLCA83JkD9r%2FkRAhuJE3U8DY8E5uHbp54gSZ60Db2nidusdF1hHqv5UPZ4z%2BNRc1bVL9HnLJ5ZXVM7ZzyvBr9vczDSuB74OX50VZ%2BMM8cu82nQGQFYomxnhYxLoBElBwdxj2xJ4FQahIIgOJPwbGLzzOr8xXxM4CNKfkRkmSEX7GTNzPR36b%2F&X-Amz-Signature=c3575f0f98b77a83117d7517660d97b062eaa1733f5404f942b280d86f708c24&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
