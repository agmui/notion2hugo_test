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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLMQKNI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCdoSJDmsNawxpTNSAITIxHJeetJqkLHtNyEMG3sW7miwIhAMdKqODKIrKxiR9ElJ%2BhPSG2C8NvubXgf4Odz7oRACTZKv8DCD8QABoMNjM3NDIzMTgzODA1Igyq36eIpoM11zNBBQgq3APvFa0RrQ0Ndc2I6L9SZ8W1UIOaTzm%2FWbTCcEcH8g69W%2BGhw%2B48E1fxsTOAVIj88B25vCjrCSeNWZQLRgl7EKsEi7dp0%2BaOMy6Q1EzAoyXGNYl8mqUbdvH%2FZ%2BVsCWY0mQWtVQAEEPQ8TDOo8Y9yvMvsiehyd53z89gH%2F0u%2B%2FPB3YngK%2FfSKc0V6j9sm68k7QZaOiZiYaZBjZFD7EGVL79HeaDXZcLBI8jV%2B2OZuv1ysfGQygOd4N3SraLkRl7KcpcorxIKs0s0EGxjzT1BWdwwaI0bqadmnWT1u6nhqKJm14IWPUPeva9YFvuIGHJiDaAiQrJ%2B88ZI0u9a50mQxISkliDCu3NG27IsoYQ%2FMdxbskzXaTAlfxcq5O8I1fTXvWHRcaREFNGpSTw5DOFhFJ57gXzQ5JxFv3gTBaEPi42O2JBSBS%2Fou1ktqsJUdyvJ1QQh%2BA5IZr5O0m39iq18mk%2BZ7gAJbhAnwX%2BqG8cFUrA7m2nW%2B8L63Qxa4QLuXV8aLXR33T%2B0xe5%2BjQ%2F8SY5kA8t6%2BzQwTaW%2FMnRH%2FCPNSem2Zqw8MCCgKzywUJoQXmCLeB3f4M6iwiqu74R4pPzRl9sJ6bDxxRibZC7HcUvm%2BidX9FLiAMdIgdyw9ZJcs2DDn2vzJBjqkAdpdOAiu31FJW%2BElw65%2Bk8pfKxPaZOsVDavGQ9PnOfzue5GAuQYf4zyYhdFHT%2FxSzsYylNCLhyUKD1Gg82IIyDV9S4BkOh6SUd1pkwvPNyrvR4yeVGhSPknR4ry2P4bpR2vWzGZJwtez%2BdGLKSCAw9K%2FJH14W12i1VjBSaSEOFJTWaXdECfLEshWtA3j%2BPfBakFvDgodl9JJcduuUICYTWOyq4mC&X-Amz-Signature=c50f1f1a55745f97b4ba960c9436cbc6d7f6efc94b2c9289fd913db4708c5c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLMQKNI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCdoSJDmsNawxpTNSAITIxHJeetJqkLHtNyEMG3sW7miwIhAMdKqODKIrKxiR9ElJ%2BhPSG2C8NvubXgf4Odz7oRACTZKv8DCD8QABoMNjM3NDIzMTgzODA1Igyq36eIpoM11zNBBQgq3APvFa0RrQ0Ndc2I6L9SZ8W1UIOaTzm%2FWbTCcEcH8g69W%2BGhw%2B48E1fxsTOAVIj88B25vCjrCSeNWZQLRgl7EKsEi7dp0%2BaOMy6Q1EzAoyXGNYl8mqUbdvH%2FZ%2BVsCWY0mQWtVQAEEPQ8TDOo8Y9yvMvsiehyd53z89gH%2F0u%2B%2FPB3YngK%2FfSKc0V6j9sm68k7QZaOiZiYaZBjZFD7EGVL79HeaDXZcLBI8jV%2B2OZuv1ysfGQygOd4N3SraLkRl7KcpcorxIKs0s0EGxjzT1BWdwwaI0bqadmnWT1u6nhqKJm14IWPUPeva9YFvuIGHJiDaAiQrJ%2B88ZI0u9a50mQxISkliDCu3NG27IsoYQ%2FMdxbskzXaTAlfxcq5O8I1fTXvWHRcaREFNGpSTw5DOFhFJ57gXzQ5JxFv3gTBaEPi42O2JBSBS%2Fou1ktqsJUdyvJ1QQh%2BA5IZr5O0m39iq18mk%2BZ7gAJbhAnwX%2BqG8cFUrA7m2nW%2B8L63Qxa4QLuXV8aLXR33T%2B0xe5%2BjQ%2F8SY5kA8t6%2BzQwTaW%2FMnRH%2FCPNSem2Zqw8MCCgKzywUJoQXmCLeB3f4M6iwiqu74R4pPzRl9sJ6bDxxRibZC7HcUvm%2BidX9FLiAMdIgdyw9ZJcs2DDn2vzJBjqkAdpdOAiu31FJW%2BElw65%2Bk8pfKxPaZOsVDavGQ9PnOfzue5GAuQYf4zyYhdFHT%2FxSzsYylNCLhyUKD1Gg82IIyDV9S4BkOh6SUd1pkwvPNyrvR4yeVGhSPknR4ry2P4bpR2vWzGZJwtez%2BdGLKSCAw9K%2FJH14W12i1VjBSaSEOFJTWaXdECfLEshWtA3j%2BPfBakFvDgodl9JJcduuUICYTWOyq4mC&X-Amz-Signature=485bc27da8b00228e6934b4388ad1dc8b438051385506ce10da9a9209e8eec24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
