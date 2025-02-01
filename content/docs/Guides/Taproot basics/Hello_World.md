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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XJGNMYH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9JgdShhKplieMPMwCVjaURv4Sau5qAAMSxnUijpkz7wIgNdI6UY7V8ClkaGZmk5odMV%2BhjnHnczoWQ56Y9RWvaMQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRPF0bhT6BL%2FoaP0yrcA47mTyBek60XvBkijLLf4U%2BGsL57Qacu%2B5w5oanXKfFagdL7Zi0VHVZISjB7B3DBt4VCHXJo7iL%2F9wqVsrTxp1QLB32L4Ra4wVs%2BWyaGzCjb7CCGBuwWJDlAkTLLRoLEoumIgLgZOWiwwFEbJ289HtgK7b%2BzpJN7iAdnHRGtrs0FF2RTSUaYWqufXmu2ZL8GBDIS3LSDclNyV1V443k%2BjR5RLHoPU830rfREV6lGEa2Wv6z6fXZ8YiYls7eikZW7QWrGnMlIVHfxM75TXibK25BjQLp8XCSMCZfDH4VY3qDTHlIgnz6X4Vo5W53ItyQINufcNL1HphO79tRN%2Brntv8ZOtZdOLXmjferw6fBjJ0jBtqQ99jKZEbIjBhZiKI%2BLz%2FousOBWJE8JEoD1viVV1whIR6ezsEDAxhC8RvUt3NKdlaqAE9IzsPViFCt6%2FKrnoy5IvcxefXzBsE%2F7wZZFPt%2BsvO9%2F9ZZgZwNWi%2FjGJAFK3Iz6Dg45%2BRJlp%2F6WAmQke9jiBUz2DW%2FIktFfecyGLfZR4bl4pLPRq9fyUOIRDWMHAEJ7sUo2CPfx4xZTZVSAoxIdAz3By4DoJGoYRLXVL6W23RHLlh%2B%2FcLBjz659PmKlPcjvOSmqbAcPxAT%2BMPqU%2BrwGOqUBtFjv17xrWKGakQ1RBEn332GU7BI0yM9PHq2RyZ0BsSiXqrNkCuj2OIWiUfjG%2BWZh1gDv3nA7Yw4lK46BSIz7LmQpglBTq9j6wK8KFesmYf2Ir4J%2BT4z7T4gpQNE4hhowVuQlid7B24TS6iDtsFvGUp01OvPK61CDMu46PWCou8qWEjZxmHKMEb6TrcrANu5LRcL9r7pAEqovaehOO2EQzvsWd1NS&X-Amz-Signature=874c3d571b1d1ed3b866ddbb6e8a315ce710d6c00b1426a24caf6db68c955fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XJGNMYH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9JgdShhKplieMPMwCVjaURv4Sau5qAAMSxnUijpkz7wIgNdI6UY7V8ClkaGZmk5odMV%2BhjnHnczoWQ56Y9RWvaMQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRPF0bhT6BL%2FoaP0yrcA47mTyBek60XvBkijLLf4U%2BGsL57Qacu%2B5w5oanXKfFagdL7Zi0VHVZISjB7B3DBt4VCHXJo7iL%2F9wqVsrTxp1QLB32L4Ra4wVs%2BWyaGzCjb7CCGBuwWJDlAkTLLRoLEoumIgLgZOWiwwFEbJ289HtgK7b%2BzpJN7iAdnHRGtrs0FF2RTSUaYWqufXmu2ZL8GBDIS3LSDclNyV1V443k%2BjR5RLHoPU830rfREV6lGEa2Wv6z6fXZ8YiYls7eikZW7QWrGnMlIVHfxM75TXibK25BjQLp8XCSMCZfDH4VY3qDTHlIgnz6X4Vo5W53ItyQINufcNL1HphO79tRN%2Brntv8ZOtZdOLXmjferw6fBjJ0jBtqQ99jKZEbIjBhZiKI%2BLz%2FousOBWJE8JEoD1viVV1whIR6ezsEDAxhC8RvUt3NKdlaqAE9IzsPViFCt6%2FKrnoy5IvcxefXzBsE%2F7wZZFPt%2BsvO9%2F9ZZgZwNWi%2FjGJAFK3Iz6Dg45%2BRJlp%2F6WAmQke9jiBUz2DW%2FIktFfecyGLfZR4bl4pLPRq9fyUOIRDWMHAEJ7sUo2CPfx4xZTZVSAoxIdAz3By4DoJGoYRLXVL6W23RHLlh%2B%2FcLBjz659PmKlPcjvOSmqbAcPxAT%2BMPqU%2BrwGOqUBtFjv17xrWKGakQ1RBEn332GU7BI0yM9PHq2RyZ0BsSiXqrNkCuj2OIWiUfjG%2BWZh1gDv3nA7Yw4lK46BSIz7LmQpglBTq9j6wK8KFesmYf2Ir4J%2BT4z7T4gpQNE4hhowVuQlid7B24TS6iDtsFvGUp01OvPK61CDMu46PWCou8qWEjZxmHKMEb6TrcrANu5LRcL9r7pAEqovaehOO2EQzvsWd1NS&X-Amz-Signature=178471e4c9ffc06d6bb398c7b96d6c33d8f433b59d6b28bf7ae36f030281dd55&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
