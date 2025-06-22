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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNUZT3W%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVyH9jlB8N%2BMrgx65TtaQeSZMuJQ2FEx4n8XJRWrNwDAiEArH8rjy5xxDbRHsLzwM6QTRpvfO%2FnJutBnHZaWeAA0vEqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK81YXD6oQLjKigeeircA%2FQxdHYt11%2BVCqm%2FLryEg9kWvn9j%2BHbqowb0a1LI9UTuVSrCqFRK2UvNJtVaNeFPZ5IiyXBryVBXBJMAPLLr4B0BVX%2F5Eg4TVt6a%2FP%2Fc4uWfh6y30tCJx0SSq51F0F70UKO3L9KCKpHLQQ6yPu%2BGq680yOFlfhfMQFV36%2FSNjN0RaK0KvKXWF2GC0EmDSeKjOAK3hLQzW4CGqcRgKDIV9XMDB95r1oKKj%2BGN7oj2MwzGZFpLZnRyw9Pjub9t6W6DstULHR3QJB%2Bh9dcU%2BcUjALPgt50%2FkJcs8KAfc2xLVumidrUcbZLSrbQL4pCm4PPR4mHYfKEmkcDAzAZz9LpNb5aEf7z9X8%2B%2FLV0rXpbW%2BSNzs9vIqgmBJpC%2FCCuDHLnpupxbZlxIHP9SS7FhzwE3eWQEeRB6gf7TnqyM9NWK3Q1nNaqFr4AXzLmntztP8ITGPtZ1983Y2GrMGL8IlYkZSVCUdG1iIJWC9SX5zLgWG9NBzNIkP5vhOUqHscy9%2FlKqWkXCv2EL4lvTMF8RBNpEuNfM0YFfYXgstfC8WA1C7n85NjzjaJq2A2cJ7Ue%2BpVrJUQC1o2zNvY5zxcAI2bdaf9sFeMl2b7m5eQLtSrZlwmLEex4UDbCGo3tJ%2FdSnMJuI3cIGOqUBVaTGHKUD8Orz2sWN2DupGB1HsF0NvC4YvArR87sK8h3Eg9KP9qTxdblwL71ZWiHhtrVJ80Is%2BhGs3wSjrQUBbIt1%2FNgAd088QoSA%2Fn9JA2EM426%2BWgVil0DgNc6%2FJLlJYfYduCE48jTUSO4FvIio5YsTFgV3W%2Fj2uPGI%2BYeKMK37cMbN0JQ86qDTmjNktZYJszA6bRWAY6JSSkZyX%2B3%2BbWEDj1%2BO&X-Amz-Signature=b6b65c7ab2135b63a50d03d79e9854dd11ba59e3e82c4115769e181894e51cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNUZT3W%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVyH9jlB8N%2BMrgx65TtaQeSZMuJQ2FEx4n8XJRWrNwDAiEArH8rjy5xxDbRHsLzwM6QTRpvfO%2FnJutBnHZaWeAA0vEqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK81YXD6oQLjKigeeircA%2FQxdHYt11%2BVCqm%2FLryEg9kWvn9j%2BHbqowb0a1LI9UTuVSrCqFRK2UvNJtVaNeFPZ5IiyXBryVBXBJMAPLLr4B0BVX%2F5Eg4TVt6a%2FP%2Fc4uWfh6y30tCJx0SSq51F0F70UKO3L9KCKpHLQQ6yPu%2BGq680yOFlfhfMQFV36%2FSNjN0RaK0KvKXWF2GC0EmDSeKjOAK3hLQzW4CGqcRgKDIV9XMDB95r1oKKj%2BGN7oj2MwzGZFpLZnRyw9Pjub9t6W6DstULHR3QJB%2Bh9dcU%2BcUjALPgt50%2FkJcs8KAfc2xLVumidrUcbZLSrbQL4pCm4PPR4mHYfKEmkcDAzAZz9LpNb5aEf7z9X8%2B%2FLV0rXpbW%2BSNzs9vIqgmBJpC%2FCCuDHLnpupxbZlxIHP9SS7FhzwE3eWQEeRB6gf7TnqyM9NWK3Q1nNaqFr4AXzLmntztP8ITGPtZ1983Y2GrMGL8IlYkZSVCUdG1iIJWC9SX5zLgWG9NBzNIkP5vhOUqHscy9%2FlKqWkXCv2EL4lvTMF8RBNpEuNfM0YFfYXgstfC8WA1C7n85NjzjaJq2A2cJ7Ue%2BpVrJUQC1o2zNvY5zxcAI2bdaf9sFeMl2b7m5eQLtSrZlwmLEex4UDbCGo3tJ%2FdSnMJuI3cIGOqUBVaTGHKUD8Orz2sWN2DupGB1HsF0NvC4YvArR87sK8h3Eg9KP9qTxdblwL71ZWiHhtrVJ80Is%2BhGs3wSjrQUBbIt1%2FNgAd088QoSA%2Fn9JA2EM426%2BWgVil0DgNc6%2FJLlJYfYduCE48jTUSO4FvIio5YsTFgV3W%2Fj2uPGI%2BYeKMK37cMbN0JQ86qDTmjNktZYJszA6bRWAY6JSSkZyX%2B3%2BbWEDj1%2BO&X-Amz-Signature=cbc72ec4e8e4339d6037613457577db119e5bda6cd9b932f5df8caa5e451941d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
