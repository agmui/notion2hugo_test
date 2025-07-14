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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BLB43PM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICoJwFOLRges9FD7fKUFjVSsQrsNSErE1sBdvN4PCUJpAiAXp8UZTgzK1SSlQGjSnwp00qZDZ%2FfNfyar22kFBgp4Vir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMUdKp%2BGohygWUmCxhKtwD8HqEb3Mo%2FCOONIGPHwKS7q%2FNir4YoPx85lXBuWsi8DOnjs9dx6u8I17MIRL4np%2B7CBtfupMqvnEuq5yIdSWE6wPtsnU3hUv9QlpPngZfKoPP%2BrwmxbCpijI5DojDkI0Hru6QrHLqxrLxdmjb89bzCzxPSZLcs3Ivg53bKDh%2BnMYVHjCy%2Fb7N%2BmLmH%2BnhVI2VsYmQgzkUEKHAPyttFr5Wiw%2FC8f4oNxQ6o3lKx9zpc%2BYj6P1338aAeHP5KZ%2F8Ge0dEW0zYaSmt%2FPN1RKZ2lAG9cMPhA8ha3ovcE%2BiiP7u5yvmRtojQkV5H%2F9UpH9eaEhRTmQeUAKccwI46k1OfZnyjs8OnwbTuoOYj2710kP%2BNOeviRDYJExkuTfKUT%2BbI0uZtmt4TBis4YgT0PLSY37fu2Q9eqlFsThPpAaxYZkEanqcI3xiCxrEztpRLTRUd1bnQkmSQ4G%2Fd22FIf6fDyaMqArwPM7dh1sp5%2FCK8ZPN2aaYbgLLsEBtsKyperbF6K22CaZKHZj7M8bZu8qjcieRRPpKhnbpykJHZpyNB3hOArhmFaggCmfPbQT%2BWW7MK1Mz4GGqhsfo3OUnk2hRwy4OIr3nVqOn2h1xtOMfxRGW%2FG%2BX9dcFsf5McA7uUy4w%2BrDSwwY6pgHhEb4nF4CHOAzXr%2BWKDHLN8lLc726FEJGvhb1QaS6xjhtWU6r8f33MmGLKLysj8ItTPtztMDhESKvJNvqsgevSOSgl4GPHb8%2B1e50Osf75ENBrVS8rGC3TL3QJrpZRLngH5tAivk1G7xEhwVmUz6XgtwNCwYmDOd8tnW61Nl430yaTdBaDkJbPUxr9hBjYsqcWC6Q1%2FzwuiGH7jAs%2BzUzRFBPQWYB8&X-Amz-Signature=b8fbeb2cd8b18d4698bb159930d1583ab49c71ddb4204fb5ed74e5a791707c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BLB43PM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICoJwFOLRges9FD7fKUFjVSsQrsNSErE1sBdvN4PCUJpAiAXp8UZTgzK1SSlQGjSnwp00qZDZ%2FfNfyar22kFBgp4Vir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMUdKp%2BGohygWUmCxhKtwD8HqEb3Mo%2FCOONIGPHwKS7q%2FNir4YoPx85lXBuWsi8DOnjs9dx6u8I17MIRL4np%2B7CBtfupMqvnEuq5yIdSWE6wPtsnU3hUv9QlpPngZfKoPP%2BrwmxbCpijI5DojDkI0Hru6QrHLqxrLxdmjb89bzCzxPSZLcs3Ivg53bKDh%2BnMYVHjCy%2Fb7N%2BmLmH%2BnhVI2VsYmQgzkUEKHAPyttFr5Wiw%2FC8f4oNxQ6o3lKx9zpc%2BYj6P1338aAeHP5KZ%2F8Ge0dEW0zYaSmt%2FPN1RKZ2lAG9cMPhA8ha3ovcE%2BiiP7u5yvmRtojQkV5H%2F9UpH9eaEhRTmQeUAKccwI46k1OfZnyjs8OnwbTuoOYj2710kP%2BNOeviRDYJExkuTfKUT%2BbI0uZtmt4TBis4YgT0PLSY37fu2Q9eqlFsThPpAaxYZkEanqcI3xiCxrEztpRLTRUd1bnQkmSQ4G%2Fd22FIf6fDyaMqArwPM7dh1sp5%2FCK8ZPN2aaYbgLLsEBtsKyperbF6K22CaZKHZj7M8bZu8qjcieRRPpKhnbpykJHZpyNB3hOArhmFaggCmfPbQT%2BWW7MK1Mz4GGqhsfo3OUnk2hRwy4OIr3nVqOn2h1xtOMfxRGW%2FG%2BX9dcFsf5McA7uUy4w%2BrDSwwY6pgHhEb4nF4CHOAzXr%2BWKDHLN8lLc726FEJGvhb1QaS6xjhtWU6r8f33MmGLKLysj8ItTPtztMDhESKvJNvqsgevSOSgl4GPHb8%2B1e50Osf75ENBrVS8rGC3TL3QJrpZRLngH5tAivk1G7xEhwVmUz6XgtwNCwYmDOd8tnW61Nl430yaTdBaDkJbPUxr9hBjYsqcWC6Q1%2FzwuiGH7jAs%2BzUzRFBPQWYB8&X-Amz-Signature=b853b131dddca0d63e8c62183e46fda242a54c553150eec70dbc3c67fb71e848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
