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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJCAMHCU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCkPhLW1szhS%2Fg3uXk2Mv3wJ8FGUVyChH1cTCtfl4reiAIhANn8Hhb1lE%2F3UoueHBjCZ7OUAZopyXzm1aVUK%2B1BScrOKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziyG2bqT%2FojgJi3kcq3AOn8xZhBgj4%2F9CgvN88rARjnFNw5GKVpe8VcaUmQ4lRE1cwr1gGa8tEG31C9By3M%2FbQF98yE4PDuk8iR2dbctbe2rgzfRB7KbpyKTU8EPi4mC75E4GntuMq9ovfhCcqz%2FnPNudYHX7Zz4h6jhhMtv5%2B9HWmErn0roraD0tPrt6FWH%2FOMC70ajxpTw2ieTeHxALGo%2FLgX1lfQtOkX1oQHzKbgzn4WJPez9dbCqOzedtoFQ%2BDgtFbWPa4NSIMiiVkYY%2BDXsMlUsoXzbOxpMrPtX437oRD9%2FuZfENyQ6MhpMYt0%2FPvNtoNcTFqsZBY5b%2B6c6dmqoWwdl9ALTaqt60XdvfRH6fTa%2FcZE7QzpfMjtCsP3mKvU2S%2FBhsLUB4GstQU57d68aGMwp0pnGWlXyKOdTTwCeWYM7s8c4PP0YtmkW4SVZtRA9EdwcAWb7yc3LfCAbGMgkm%2Fj5iHPO2ZTr9227uptFSAeTTNd9NY5ZOj8M7RMo%2By4ssvuWT%2FzgRoDkWs18V60j941lLPjN%2BuRxAVOV5cmBL1JR17TbHIlRRYqlWQLfcsuVigDttHAqLU5CjCciN%2FKHcGJzpxfuEKjhOn047ane0mqIobMhfXvLTz%2FPsbeTh7JGrocFz2Ge7ruTC%2Bp8LBBjqkAaxFcW7Ay8ETKazcI5%2F0sQaz2xTGLEiihu4o7w9hKBFUsc45r2uDwlovtjChJf73%2BgQo8mknrW5CcF8smvbjPytY6sXNCrm8V%2FD6SQnAWkok6INllHqSjt2NE2iYcQmFCO6qFV%2FEHfVMY%2BMLiZVVYL0GTR30d80XH99vzvJAVmXfR7Uk9UqJl8R42hhe2bZ%2FllpzekKCkBz0sMDNd0JFP5JUw4Tb&X-Amz-Signature=d918ed5be55c4d2038310cafbab217dae9daa2c2bc7fb0743944e0cedc9a8c08&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJCAMHCU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCkPhLW1szhS%2Fg3uXk2Mv3wJ8FGUVyChH1cTCtfl4reiAIhANn8Hhb1lE%2F3UoueHBjCZ7OUAZopyXzm1aVUK%2B1BScrOKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziyG2bqT%2FojgJi3kcq3AOn8xZhBgj4%2F9CgvN88rARjnFNw5GKVpe8VcaUmQ4lRE1cwr1gGa8tEG31C9By3M%2FbQF98yE4PDuk8iR2dbctbe2rgzfRB7KbpyKTU8EPi4mC75E4GntuMq9ovfhCcqz%2FnPNudYHX7Zz4h6jhhMtv5%2B9HWmErn0roraD0tPrt6FWH%2FOMC70ajxpTw2ieTeHxALGo%2FLgX1lfQtOkX1oQHzKbgzn4WJPez9dbCqOzedtoFQ%2BDgtFbWPa4NSIMiiVkYY%2BDXsMlUsoXzbOxpMrPtX437oRD9%2FuZfENyQ6MhpMYt0%2FPvNtoNcTFqsZBY5b%2B6c6dmqoWwdl9ALTaqt60XdvfRH6fTa%2FcZE7QzpfMjtCsP3mKvU2S%2FBhsLUB4GstQU57d68aGMwp0pnGWlXyKOdTTwCeWYM7s8c4PP0YtmkW4SVZtRA9EdwcAWb7yc3LfCAbGMgkm%2Fj5iHPO2ZTr9227uptFSAeTTNd9NY5ZOj8M7RMo%2By4ssvuWT%2FzgRoDkWs18V60j941lLPjN%2BuRxAVOV5cmBL1JR17TbHIlRRYqlWQLfcsuVigDttHAqLU5CjCciN%2FKHcGJzpxfuEKjhOn047ane0mqIobMhfXvLTz%2FPsbeTh7JGrocFz2Ge7ruTC%2Bp8LBBjqkAaxFcW7Ay8ETKazcI5%2F0sQaz2xTGLEiihu4o7w9hKBFUsc45r2uDwlovtjChJf73%2BgQo8mknrW5CcF8smvbjPytY6sXNCrm8V%2FD6SQnAWkok6INllHqSjt2NE2iYcQmFCO6qFV%2FEHfVMY%2BMLiZVVYL0GTR30d80XH99vzvJAVmXfR7Uk9UqJl8R42hhe2bZ%2FllpzekKCkBz0sMDNd0JFP5JUw4Tb&X-Amz-Signature=00624aa81cd3783e8d4380bcd9dbcd91b4520934ef2afc4a67c7e1fb5c0c7ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
