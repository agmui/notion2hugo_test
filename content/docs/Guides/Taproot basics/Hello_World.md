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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFULKBQE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJsugiw%2FVLOd66u6I9S6KNffvOT14fuhWXfMfK6Whn2QIhAOPS4HFeKx%2BO%2Fve%2Fo7I02WCGRQ0xHYkxUD6NBo5RY7m%2BKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUsbWd94dqTltazyUq3APcF7JhDa9mpwh6sOUfR0LbOPrPXSQ8DKx1x7A%2FKAprfKJ0N7BrYgKzMk6BEBHKERUAMhgM%2F4QjTnXY1Lmdre3fgp2YvXKajE5ZcdpacXcjJ0xiiv8Y30wf25uluchekzqMmtrrlADpSZ2vhSDO%2Bnda8oO6YDoea1oqkwklLOxOP39L9fPsk8GrIgh36kQIOOX2YzE1SCW8Oi6617oZ6ngeS5uZAva3gndSrPAi2rfm5CFSOFJtjs81mDJ%2B7jQ2dDkfVAAO7D8y7ZmKwNNLRcJ8XC1hjo44CPUSkS8W4AME6yzUA7rIjATZXU9ZeQiCUyw6z6%2FQJnrDq3co8FyyXdb4aEmutCzFs18CBftH1hAUctcxzYSG1FVg26wROU5SPz7Jk3KIeItJ7VSGJJvEaxI5NXnuwwZUlwStEaHqNFTqybDFIiQYqSDTcp%2FNcjp4Ic0CnZSVP1zxRf7u4nuGkTpFqjodY%2BbUcQiNXFAFoBbKL13KKg8y%2FrutxGQZ4ScInBIzL3%2BQFOJa0BkFIYE%2FLUt5d48v01e%2BpPa%2FIJb2ZRPGVh87bE1qPBFghERBBcz%2FP%2FzwyxL01q2USHHZyrbblNpjDbODWZt6fua8Zt0WKKM%2BIU5kvZx4uusWDJGoBjC%2BwafEBjqkAX7zep41rYs%2FDXmwqkaEP49Enuo0HkslTJLHfJ23FkXZyv3Jd4OlP7ka4ov1lk9BZaoO9bCWsukGNz6Ju%2Flfks3wTojdttESVOY0Zsq11cSYZcNqxX0S3WxQlJd52cPY5kg52h7%2FDYlQBB5Igx3aZDcy7rn0lCakDLNToha6NHMV2sFA%2BIvMaJrb%2BWiESePYc7tuN%2F2U7ofnzjmJpc6IGqMZv2D6&X-Amz-Signature=7dabd1ac33e69f0334b461f9e8e16ec6f1259c186a82d71573a6093df4643f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFULKBQE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJsugiw%2FVLOd66u6I9S6KNffvOT14fuhWXfMfK6Whn2QIhAOPS4HFeKx%2BO%2Fve%2Fo7I02WCGRQ0xHYkxUD6NBo5RY7m%2BKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUsbWd94dqTltazyUq3APcF7JhDa9mpwh6sOUfR0LbOPrPXSQ8DKx1x7A%2FKAprfKJ0N7BrYgKzMk6BEBHKERUAMhgM%2F4QjTnXY1Lmdre3fgp2YvXKajE5ZcdpacXcjJ0xiiv8Y30wf25uluchekzqMmtrrlADpSZ2vhSDO%2Bnda8oO6YDoea1oqkwklLOxOP39L9fPsk8GrIgh36kQIOOX2YzE1SCW8Oi6617oZ6ngeS5uZAva3gndSrPAi2rfm5CFSOFJtjs81mDJ%2B7jQ2dDkfVAAO7D8y7ZmKwNNLRcJ8XC1hjo44CPUSkS8W4AME6yzUA7rIjATZXU9ZeQiCUyw6z6%2FQJnrDq3co8FyyXdb4aEmutCzFs18CBftH1hAUctcxzYSG1FVg26wROU5SPz7Jk3KIeItJ7VSGJJvEaxI5NXnuwwZUlwStEaHqNFTqybDFIiQYqSDTcp%2FNcjp4Ic0CnZSVP1zxRf7u4nuGkTpFqjodY%2BbUcQiNXFAFoBbKL13KKg8y%2FrutxGQZ4ScInBIzL3%2BQFOJa0BkFIYE%2FLUt5d48v01e%2BpPa%2FIJb2ZRPGVh87bE1qPBFghERBBcz%2FP%2FzwyxL01q2USHHZyrbblNpjDbODWZt6fua8Zt0WKKM%2BIU5kvZx4uusWDJGoBjC%2BwafEBjqkAX7zep41rYs%2FDXmwqkaEP49Enuo0HkslTJLHfJ23FkXZyv3Jd4OlP7ka4ov1lk9BZaoO9bCWsukGNz6Ju%2Flfks3wTojdttESVOY0Zsq11cSYZcNqxX0S3WxQlJd52cPY5kg52h7%2FDYlQBB5Igx3aZDcy7rn0lCakDLNToha6NHMV2sFA%2BIvMaJrb%2BWiESePYc7tuN%2F2U7ofnzjmJpc6IGqMZv2D6&X-Amz-Signature=bc8e170b08bebcf6ebca3b2cff513f4f295e18c304f65da711155da2563d07ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
