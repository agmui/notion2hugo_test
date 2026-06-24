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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDZIXZE%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDRanqacxZbtMz88LfoX2F0qTVCwalsF4%2F7mwtGKjxusQIhANO0SYwzl9xvoDywfP2GNsxMhVaPgciuSC7HblwII6GrKv8DCCsQABoMNjM3NDIzMTgzODA1IgxDIsho9MZvFlQk%2FHEq3AMqOfhwZFAJ26rA4tMvmuF%2FEzeqnN6gxAHEeWlUCjplvHfHfE6FJ1sIgrQPgaUYtIdYYpyM1ASoUt7HLde9AHGdblHrAkpdmwvCo2N9ATeEPfr1Qu%2FiY7D8SYHqh6FJqutl94m8hitj3q20GBErvTYqa3obcpVoH8T2Io5lsAAL2D6w5s4mPkWtlXx5Ssg83VZV4%2Faw5urzaOK%2FJM2QFH%2FJCStESUTaZJFvPfEaSzQoZ2oG6Wk1w833yzn0yRDPswZVQDfn0L%2FoJxM4%2Bpg05yhdDMB0Z%2FopW5%2BEIxQfNo%2B6ltRW8TmzJaBf2FNM9LjsH%2BCFyvC0hvdjtOJdAH9wV1cSTPW%2F6ZVPs214exBxLNeMbAsio5yCWUg7UR6huil5PXKpEdOHTEIBLFDZ7AiZcjJbfKdWPiK8q6D%2F1ozSDJ8ISoCRKhKH1r8HzkhrmAyQRNlDfMJZ1yCfq0RgJWQZCquK6PDSBFVwtD7Ojc6jI%2B%2FpHIGcCt%2B1rBxCBn%2FaMWVv1N5B22KwjgjCr9%2F3nTlin0%2B1tQuuOYraQMRK7JDI%2B%2FZbknGHN4QMkp52pXGIGH9zqDmhYOn3926ZQjShAV%2Bny3I8bBSqSpDrpadffuojyMlehsrKr4fT2R0E4bKI3zCC8uzRBjqkAdvM4exP%2BEYxPilbY0DzB%2FuxVyCEgQM1%2FN4jyHH18OJKys0ogyIrDV4SNzeOED9tugwAI%2FtyW2fMquD8hbUBrKSvO16HvD5CEmrloA4kJeFxfjY71qgjthPtfogFAhGBhGTsBnOhcGgegiW0ouB5YMdbikYk1770grCHi6TJRXwaeTjBtZ07HCdi8JFaceSmB633TwOSMG%2BudrMnow2loW1EujRF&X-Amz-Signature=bec948ffcb82296461efe4c1cd492f95c9d369a9aeda79af7e347f87f6f11daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDZIXZE%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDRanqacxZbtMz88LfoX2F0qTVCwalsF4%2F7mwtGKjxusQIhANO0SYwzl9xvoDywfP2GNsxMhVaPgciuSC7HblwII6GrKv8DCCsQABoMNjM3NDIzMTgzODA1IgxDIsho9MZvFlQk%2FHEq3AMqOfhwZFAJ26rA4tMvmuF%2FEzeqnN6gxAHEeWlUCjplvHfHfE6FJ1sIgrQPgaUYtIdYYpyM1ASoUt7HLde9AHGdblHrAkpdmwvCo2N9ATeEPfr1Qu%2FiY7D8SYHqh6FJqutl94m8hitj3q20GBErvTYqa3obcpVoH8T2Io5lsAAL2D6w5s4mPkWtlXx5Ssg83VZV4%2Faw5urzaOK%2FJM2QFH%2FJCStESUTaZJFvPfEaSzQoZ2oG6Wk1w833yzn0yRDPswZVQDfn0L%2FoJxM4%2Bpg05yhdDMB0Z%2FopW5%2BEIxQfNo%2B6ltRW8TmzJaBf2FNM9LjsH%2BCFyvC0hvdjtOJdAH9wV1cSTPW%2F6ZVPs214exBxLNeMbAsio5yCWUg7UR6huil5PXKpEdOHTEIBLFDZ7AiZcjJbfKdWPiK8q6D%2F1ozSDJ8ISoCRKhKH1r8HzkhrmAyQRNlDfMJZ1yCfq0RgJWQZCquK6PDSBFVwtD7Ojc6jI%2B%2FpHIGcCt%2B1rBxCBn%2FaMWVv1N5B22KwjgjCr9%2F3nTlin0%2B1tQuuOYraQMRK7JDI%2B%2FZbknGHN4QMkp52pXGIGH9zqDmhYOn3926ZQjShAV%2Bny3I8bBSqSpDrpadffuojyMlehsrKr4fT2R0E4bKI3zCC8uzRBjqkAdvM4exP%2BEYxPilbY0DzB%2FuxVyCEgQM1%2FN4jyHH18OJKys0ogyIrDV4SNzeOED9tugwAI%2FtyW2fMquD8hbUBrKSvO16HvD5CEmrloA4kJeFxfjY71qgjthPtfogFAhGBhGTsBnOhcGgegiW0ouB5YMdbikYk1770grCHi6TJRXwaeTjBtZ07HCdi8JFaceSmB633TwOSMG%2BudrMnow2loW1EujRF&X-Amz-Signature=3521e37956670bfa6ee176674e3c9d896e016cff0bad15d4d3c0cec90d24ecee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
