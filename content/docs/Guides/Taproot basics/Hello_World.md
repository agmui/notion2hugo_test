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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPFUVYRX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcBbbt21fZ9F2PQb2SMexgUxNxmRGbhafMYRWv%2BULuAgIhAPkcjRTDnPQQNFpsfK7GG8D%2Bb7D4hSIY7%2BE5sEN4WNNVKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK%2FKnRM44WX5t5vxMq3ANB84vQ6nu4aZR93u109u8HhGpzXZt8pyc09wZX7K3JiUGS67SRCiNsrt1ikYRrFb8RMVgVbhiFfk%2BSS6IyaO%2BUdCtVBYNtXAmSZjE4K4dO9ljU8IsZ2%2Fmtx5C8YK0O8xUMJKzFPurssF0mziZuv9ffOIuDa8XjiMRWkMfKUFj%2BxtN8lGaeNddLGUT47z%2F1td3H3SOXtkOpJFj9T2PZs%2FQexD3Vf6cw3z11PekKG4ZkUXN4MQw%2FXvGikHiw5gMwWPswIEKwYeN8caWe8%2F6Np3AeSdPyZSf6FlGWqbDZREG13l45H6n40WteefGikSEF4uvZ711E82KkZPTEUTWbU43yXcd6BfsOTubSmq%2B89qv2rOwPqzcz0xOpLVoWR8riS5Ot%2B2npISCBn6fltZzLmO%2F8G%2BrYk0P5glx%2BOHJNpamkUlVQnq54n4MADoeXu6kt%2FOj0xNPYBJ7iogMeBj6u5j6siv4U8mmJTMjiCabog8urPW%2FTwlBEstRqNCSjevwNPcksski6bgviRV2PW%2Bxzuzba8yuV%2F0%2FgIdfXdso%2BNSwUlqd0xm4jw0EO5LMVzbfKtr8WcwekeStQcrQsx8esQFCMKMQ07ys5Brz9iouuDCrKgPMLsG9sV4RHkcG0UzDDoMjCBjqkAToVv6AEa8pQYgewQIfvXNdG4sS%2BB9NpJl85DvnqnC7e0dIeloCejggQ6F6VILwyOqgFntr%2F6vvtlZU3GlPgslzlTfFQjuOjQOv1sYBolBve5OB2w1ZBTcc%2B4QTnqZmQgEW8wS4p3XWcOJvRrz3MDMqqoF6m%2FXr34xgU7sC2WcGQqTpcRQD1z7aECRwznP4H%2FVfkkKzarIFxZ8U6MVQhUN%2Bb0rqg&X-Amz-Signature=f6c21efbe18c526b27f7cc5dc9fb1baf6c99437f774e052d2d9ee4b8e57a3b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPFUVYRX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcBbbt21fZ9F2PQb2SMexgUxNxmRGbhafMYRWv%2BULuAgIhAPkcjRTDnPQQNFpsfK7GG8D%2Bb7D4hSIY7%2BE5sEN4WNNVKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK%2FKnRM44WX5t5vxMq3ANB84vQ6nu4aZR93u109u8HhGpzXZt8pyc09wZX7K3JiUGS67SRCiNsrt1ikYRrFb8RMVgVbhiFfk%2BSS6IyaO%2BUdCtVBYNtXAmSZjE4K4dO9ljU8IsZ2%2Fmtx5C8YK0O8xUMJKzFPurssF0mziZuv9ffOIuDa8XjiMRWkMfKUFj%2BxtN8lGaeNddLGUT47z%2F1td3H3SOXtkOpJFj9T2PZs%2FQexD3Vf6cw3z11PekKG4ZkUXN4MQw%2FXvGikHiw5gMwWPswIEKwYeN8caWe8%2F6Np3AeSdPyZSf6FlGWqbDZREG13l45H6n40WteefGikSEF4uvZ711E82KkZPTEUTWbU43yXcd6BfsOTubSmq%2B89qv2rOwPqzcz0xOpLVoWR8riS5Ot%2B2npISCBn6fltZzLmO%2F8G%2BrYk0P5glx%2BOHJNpamkUlVQnq54n4MADoeXu6kt%2FOj0xNPYBJ7iogMeBj6u5j6siv4U8mmJTMjiCabog8urPW%2FTwlBEstRqNCSjevwNPcksski6bgviRV2PW%2Bxzuzba8yuV%2F0%2FgIdfXdso%2BNSwUlqd0xm4jw0EO5LMVzbfKtr8WcwekeStQcrQsx8esQFCMKMQ07ys5Brz9iouuDCrKgPMLsG9sV4RHkcG0UzDDoMjCBjqkAToVv6AEa8pQYgewQIfvXNdG4sS%2BB9NpJl85DvnqnC7e0dIeloCejggQ6F6VILwyOqgFntr%2F6vvtlZU3GlPgslzlTfFQjuOjQOv1sYBolBve5OB2w1ZBTcc%2B4QTnqZmQgEW8wS4p3XWcOJvRrz3MDMqqoF6m%2FXr34xgU7sC2WcGQqTpcRQD1z7aECRwznP4H%2FVfkkKzarIFxZ8U6MVQhUN%2Bb0rqg&X-Amz-Signature=351e5ae93c086f0d3b935769f7be6d726de9b57c17ed3551242b693fa1c2512d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
