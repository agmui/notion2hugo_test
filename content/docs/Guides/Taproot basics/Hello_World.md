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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V576DSDE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDc6bMUVUNZmbueHSlwKviDxj7RNfBfAp7edFfTWXsJXAiEA9l8myAivnNqSR24wmOvrkMSXoj4ClbMNmfw5sly3e%2Bcq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHoqf8csVqxgdoPXRSrcA97SGyHJIU7o5DnLxG1YDt%2F8bOJTAM0ybP2u5Yu%2FdONsmFUbzRwcKGkKnzM9S5oEu9SP1lrnWul%2BJGi27R0E6IbV8st6lUvC6Yxn7PlvZvwCbZaI%2BMZYbJgQaYRfa80B5ePFLXj3ILHO9A27tG4h2VTkXqnSGxb5EB9Bst%2FMNpq3vU0vZMthVoDaw3Y7joMC60dd9FRTKYheTuDCrRaWLmgUMsx1bdeuTzlPmMAJeY7LiLVxEZR4bozas4CocpjJqwF7YQsaDwEWMK1%2B3gK29l97ZHlUjVUY8DgLElKhGkIu4nVjrLF%2BsrgmgGmjO7jvCsID%2BBCehu%2FSPqHRZ0phuw3ndZNnmNH0z2cBJZ1GFH036XYTVty8hxMSDOj4bS1l70vE2rUx1qJOXTsWlyx0AM6fot04nP8ImcUNnxAv%2BU4HvjVkHQEHnPBMFE1UBfV%2FH4SrahSRDEPMsCkCj6Wv0qOSsSlPPcEwY680FX7D%2Bpjo0Ud%2Bsb3TUBIG7tU3sOwqTcamzACPTjyqeebrGHf%2BtjT61%2Fooly6gwCaM1ZH%2BpfnBshM%2B%2B2sWRSKfUqQVPyNwNk7L7RaPXQ%2BGJk6JfIKQuIIVN2esHbEqPR49SmDSYXtmtyerJIPZkzsyOm1VMOiiwr8GOqUBICf8%2BHGD26DklkuKNtppyugqhvFZf9aa2%2Fktj6TMnyomtgrl8FvGA%2BsJHwYqQvMCE9p4xgvRHRZmzCCh9ZtXl21l%2FXX0PlUr7bLW6w4bp%2BWJvQ5ZOSwH0xavkQAfZmIoMvFFkunVyElkG2dULZJmgCq6HBm07PD5r11xutNUB9hy%2F67SQQXVy3odVeVwqnGcCXcFtojxSMuk2CPowwOG672XZcPe&X-Amz-Signature=1cc31538057aeb24334ace407ea3023ece51ba2ff2fb2e4cbc092f5e2f7ef5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V576DSDE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDc6bMUVUNZmbueHSlwKviDxj7RNfBfAp7edFfTWXsJXAiEA9l8myAivnNqSR24wmOvrkMSXoj4ClbMNmfw5sly3e%2Bcq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHoqf8csVqxgdoPXRSrcA97SGyHJIU7o5DnLxG1YDt%2F8bOJTAM0ybP2u5Yu%2FdONsmFUbzRwcKGkKnzM9S5oEu9SP1lrnWul%2BJGi27R0E6IbV8st6lUvC6Yxn7PlvZvwCbZaI%2BMZYbJgQaYRfa80B5ePFLXj3ILHO9A27tG4h2VTkXqnSGxb5EB9Bst%2FMNpq3vU0vZMthVoDaw3Y7joMC60dd9FRTKYheTuDCrRaWLmgUMsx1bdeuTzlPmMAJeY7LiLVxEZR4bozas4CocpjJqwF7YQsaDwEWMK1%2B3gK29l97ZHlUjVUY8DgLElKhGkIu4nVjrLF%2BsrgmgGmjO7jvCsID%2BBCehu%2FSPqHRZ0phuw3ndZNnmNH0z2cBJZ1GFH036XYTVty8hxMSDOj4bS1l70vE2rUx1qJOXTsWlyx0AM6fot04nP8ImcUNnxAv%2BU4HvjVkHQEHnPBMFE1UBfV%2FH4SrahSRDEPMsCkCj6Wv0qOSsSlPPcEwY680FX7D%2Bpjo0Ud%2Bsb3TUBIG7tU3sOwqTcamzACPTjyqeebrGHf%2BtjT61%2Fooly6gwCaM1ZH%2BpfnBshM%2B%2B2sWRSKfUqQVPyNwNk7L7RaPXQ%2BGJk6JfIKQuIIVN2esHbEqPR49SmDSYXtmtyerJIPZkzsyOm1VMOiiwr8GOqUBICf8%2BHGD26DklkuKNtppyugqhvFZf9aa2%2Fktj6TMnyomtgrl8FvGA%2BsJHwYqQvMCE9p4xgvRHRZmzCCh9ZtXl21l%2FXX0PlUr7bLW6w4bp%2BWJvQ5ZOSwH0xavkQAfZmIoMvFFkunVyElkG2dULZJmgCq6HBm07PD5r11xutNUB9hy%2F67SQQXVy3odVeVwqnGcCXcFtojxSMuk2CPowwOG672XZcPe&X-Amz-Signature=44847f527d94f6de9a2fd2d630816ab69bdccbfc01045b58ccbf4a792b5da49a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
