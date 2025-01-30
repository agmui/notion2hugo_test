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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MW3KWW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoTSJxhVD86VXTjof2OtbZIuifw9I8HsbQdYC%2Ffy9AqAiBlzhmam%2FcWWeLM9YQUNfpR21Sb0nbozJjjK54Qw4uqnSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRPcLrQW0E%2FBVq1zbKtwDgkRkJ0H8NiXgqqWxUXks8azVMZsZOtBDscfgeU3NuEcTmFok%2B1uz86OEE%2FNvjefiShUNizLuKjqxyZtEHWQK%2FWm4Ct1Ik0cxyseaznmkvgVliU%2BrrEBFVZeo7Gos%2FB%2Fhpu%2FKUPE9%2BkeqaWaNXcS%2F1APVsYuYpPjLD2ylkc4RVPuTdCQhDYtjMZgwGhVPdMcOIUhuanQqhUg9zGp%2BkqTgd%2B4zDvZCsghs%2FwU0oC8H6Jp1BF%2F3mx3qSTY9ZqGNCtoeWv0ZHOuEBJBxF9ENQAKHX%2FbEzDA0Fl6VEd4q0E3zgsOENZLbCsgNXu9cGO2EaBLoCjkXQy0sT%2BgSX4PZd7KYUsNINEM%2BeCaD2GXMOAOt75MqME8GhjLjFyH37nZvfKM53ZSpqMyyvIGFV77OHcWT8oXCz0KemlBaJ0vtwhqY6gbEeIZ45NZX1JgpofLffMNv8022EuLFjDkjEdxtdFAY8XOhvGZOdLZHhnKmlo%2FDAPHYB9wi0mCIENI2%2B2BmiZwuji8NS1HxPSvSEYjfUCwhKqrz9c7MG5SPfHoawFdM21D%2FhMrwxrcvxDOaM9hHtlZUS1fcpP%2BG%2FtRkSxfISqlzt8Y8kxxyzCj5jcctvoYJy7PxiE%2FjqmCC4EX0n%2BYwn5juvAY6pgFJ%2FhkgHORkNAwk6qEvS39EOaGwMJD%2Bb0FMv3PmO8ILC3EWx32dMwwzW3NTO%2Fn0HOOgo8XeepEqghkeqnxwQbjgXpHPixnA76g7XPHaIIph7ig2ZSAbqj%2FYmT2A%2B09sQEXQcDxbz8VtrK9SF3f3zIoR9PkoCLpM6WC2OC8pRHjGjk84MXNc1MM5AgqKTpDDNFUpv07yJo0YKGUv5rqN78XI6ml6%2FrXr&X-Amz-Signature=1f85a34201d2b7a3e6153e5f518ae4005a6fbc3170a332ff3cd189adafc18b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MW3KWW%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoTSJxhVD86VXTjof2OtbZIuifw9I8HsbQdYC%2Ffy9AqAiBlzhmam%2FcWWeLM9YQUNfpR21Sb0nbozJjjK54Qw4uqnSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRPcLrQW0E%2FBVq1zbKtwDgkRkJ0H8NiXgqqWxUXks8azVMZsZOtBDscfgeU3NuEcTmFok%2B1uz86OEE%2FNvjefiShUNizLuKjqxyZtEHWQK%2FWm4Ct1Ik0cxyseaznmkvgVliU%2BrrEBFVZeo7Gos%2FB%2Fhpu%2FKUPE9%2BkeqaWaNXcS%2F1APVsYuYpPjLD2ylkc4RVPuTdCQhDYtjMZgwGhVPdMcOIUhuanQqhUg9zGp%2BkqTgd%2B4zDvZCsghs%2FwU0oC8H6Jp1BF%2F3mx3qSTY9ZqGNCtoeWv0ZHOuEBJBxF9ENQAKHX%2FbEzDA0Fl6VEd4q0E3zgsOENZLbCsgNXu9cGO2EaBLoCjkXQy0sT%2BgSX4PZd7KYUsNINEM%2BeCaD2GXMOAOt75MqME8GhjLjFyH37nZvfKM53ZSpqMyyvIGFV77OHcWT8oXCz0KemlBaJ0vtwhqY6gbEeIZ45NZX1JgpofLffMNv8022EuLFjDkjEdxtdFAY8XOhvGZOdLZHhnKmlo%2FDAPHYB9wi0mCIENI2%2B2BmiZwuji8NS1HxPSvSEYjfUCwhKqrz9c7MG5SPfHoawFdM21D%2FhMrwxrcvxDOaM9hHtlZUS1fcpP%2BG%2FtRkSxfISqlzt8Y8kxxyzCj5jcctvoYJy7PxiE%2FjqmCC4EX0n%2BYwn5juvAY6pgFJ%2FhkgHORkNAwk6qEvS39EOaGwMJD%2Bb0FMv3PmO8ILC3EWx32dMwwzW3NTO%2Fn0HOOgo8XeepEqghkeqnxwQbjgXpHPixnA76g7XPHaIIph7ig2ZSAbqj%2FYmT2A%2B09sQEXQcDxbz8VtrK9SF3f3zIoR9PkoCLpM6WC2OC8pRHjGjk84MXNc1MM5AgqKTpDDNFUpv07yJo0YKGUv5rqN78XI6ml6%2FrXr&X-Amz-Signature=fb9549ff744f7d08969428ed07ee8e3a99ed56c52a90c19e2e6c1568dc5d3e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
