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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFZHJCWZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIdNPQAoHkLkNbookXkMFP%2FnTBz5XptsxEwzgE4AYLKAiEAvf7KXRKzRbqAwkS%2Fx1ozDOFd5ei8WL5kjhkSSgBgEXwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9LNMFvnq6j1vqV0yrcA80p3Hi2FUjL8czEfk6%2B0rtFeq40dluD5Lpuq2J3M6ZCwSpG5ZnXyaHHYNYFTFojxP4Owv07%2BWERXLtrNkO6v9BdvArQlTX%2FMQSGSJpoULh5%2FgeeThCgQRZ%2Bmf4XzOLhUXOt2WcGinHHnamsG2MEJvvaEkwPFJetyDszAtEreNnFw2tA1NDiZV1GLIAWEfxGueiUHG%2BTALMY%2F4JmhG%2F5TDafzsRwaj%2FaVszLmLyig%2FgZ29yqeVfpEocLKCqZA%2B1fNfy8v1eDVotsaMrKuoqHxewmfQgoG9i90fDs%2BcCegx9ejK8IONV7JWBgsbk6bLQLziNA5Q5vIYcxyrAtl8iIxsrzEGuIv46ERN8lrAuo3w8NhSGMzCdmRjSfrz%2BjYbsVbZqC%2B8OkZUsmtO2FreY07WOE0sy08S3W6TWZ1FOaDyjRPvXJJ5X0KWY6yB3RXE9QwB6Kjj8%2FW%2FAuNlvvAScQUTQGVVOzNCbzspJAkeNtRQ0BxP9GVe2nMBEaC63cGITncJPqM6OE0BvR7E3WtHmefDLSNI4i7RvWD32ZdTIsehJDBAuafQaf91qjT57RF4niJPeej5J8DCgPObKp46rWegUkXIrmg2w%2FraTI0Dx%2Bpv4BTbCpzxRSkZjfd4ghMKH468MGOqUB4oFGlEitYywCtSdOEQ5CL9VQ%2Fyiu7jQoQSlmVBg8DmlKH1Tz3gbJZhwStYChrE6q0G3kTTRA8Q%2FBQiJ3ivkApCwoxwfYDS6Qb0M52W0IN%2B9PYc5AmQeMtnUQPkx%2FRbhRUAWpSGGShZWJMXTuEoCJ04BuM1DLLBdZACgj7%2BWk%2B9fHANnAiVHwYj1VGe6E9hTx9h3arDh%2BZtpgEshWaze3nlWv76ub&X-Amz-Signature=7be13ec207de03e8f56559fb1cf4780a8579340bd89c328a36e5191a5b635022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFZHJCWZ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIdNPQAoHkLkNbookXkMFP%2FnTBz5XptsxEwzgE4AYLKAiEAvf7KXRKzRbqAwkS%2Fx1ozDOFd5ei8WL5kjhkSSgBgEXwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9LNMFvnq6j1vqV0yrcA80p3Hi2FUjL8czEfk6%2B0rtFeq40dluD5Lpuq2J3M6ZCwSpG5ZnXyaHHYNYFTFojxP4Owv07%2BWERXLtrNkO6v9BdvArQlTX%2FMQSGSJpoULh5%2FgeeThCgQRZ%2Bmf4XzOLhUXOt2WcGinHHnamsG2MEJvvaEkwPFJetyDszAtEreNnFw2tA1NDiZV1GLIAWEfxGueiUHG%2BTALMY%2F4JmhG%2F5TDafzsRwaj%2FaVszLmLyig%2FgZ29yqeVfpEocLKCqZA%2B1fNfy8v1eDVotsaMrKuoqHxewmfQgoG9i90fDs%2BcCegx9ejK8IONV7JWBgsbk6bLQLziNA5Q5vIYcxyrAtl8iIxsrzEGuIv46ERN8lrAuo3w8NhSGMzCdmRjSfrz%2BjYbsVbZqC%2B8OkZUsmtO2FreY07WOE0sy08S3W6TWZ1FOaDyjRPvXJJ5X0KWY6yB3RXE9QwB6Kjj8%2FW%2FAuNlvvAScQUTQGVVOzNCbzspJAkeNtRQ0BxP9GVe2nMBEaC63cGITncJPqM6OE0BvR7E3WtHmefDLSNI4i7RvWD32ZdTIsehJDBAuafQaf91qjT57RF4niJPeej5J8DCgPObKp46rWegUkXIrmg2w%2FraTI0Dx%2Bpv4BTbCpzxRSkZjfd4ghMKH468MGOqUB4oFGlEitYywCtSdOEQ5CL9VQ%2Fyiu7jQoQSlmVBg8DmlKH1Tz3gbJZhwStYChrE6q0G3kTTRA8Q%2FBQiJ3ivkApCwoxwfYDS6Qb0M52W0IN%2B9PYc5AmQeMtnUQPkx%2FRbhRUAWpSGGShZWJMXTuEoCJ04BuM1DLLBdZACgj7%2BWk%2B9fHANnAiVHwYj1VGe6E9hTx9h3arDh%2BZtpgEshWaze3nlWv76ub&X-Amz-Signature=85a72191720d3a291bc60b3624417226e23a43b29953bf00889c432c1cd678ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
