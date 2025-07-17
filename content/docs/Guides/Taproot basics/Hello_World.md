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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLA4REA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFakJ2pJGvgK%2Bv2nqf7KfH8uQYAkQZj27EmWQiY2ULkLAiAuZlWUkpecD5evQeUOAOBy334uEApQwhYuwpt5nf4vOyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMS8VaRF06knH34LfeKtwD9pNCzqR6A%2B4R5WvCmbPKnbLk1PZ8pxuCawLDoYChZ3fYKF06KYW3gpAOpLSgeN48%2BZ0E3shxJbwkFu9qhym2QKavol9Z4FqQeppEk4zi2s7pkS85Oj5qYmAaXcm4z%2B3cnX9NVCXChj7Fs8EvrhtAFEtm0dITvY1i4fGDrNeTWyN5ZfuWcLxiiIM6wKtTGLHU7EuinQFVHIGk9t5Vn3PwUrDED71XCZKjmMH%2FVrz4B%2B3DReLyyivCGpoHqQg276K91UJsDtcjeRFaenmEoblKuKLCe%2BSQrN2N%2FDmVnRhQwUBSDb7o6BnF8ADCjx1xPAimBaiUahZ1%2Binz%2Bn2sG4QOXgP01qoPiSrPwWtbsZdIhs1488T51WB9YfDZWDFGpIor3lwXFRauGhNKGGC3KM1KAPqBAVXbEHV65FIbtpUq4n57g4T3md8XHKEgxezZnsipZ7kcHRLwAuNidRdES33uQAhpBMsLrK7zliAD%2B12zwQEv227%2Fp2VXl1UEQI%2BerorszLPkqLt6pLPmq6lzobApw0l2UDSbFcldaZV3If3CJ1gV%2FgmkFzyzSYO3iuhtVfcV9%2FNYS9JIqzfUU8YiRmlIswOK3FPYbxbwMVnA4RhLpC41IiwbhUOpyLaZ%2FPIw58fhwwY6pgGGbIPcEE7ItO0Ja6uP3oPxkaM54LQFByayKdSkeZE6w7ePObzGIAlSyW5jCt%2BZI2Jl6Cp0w%2BwCJIO4OyAb8fLIc0DyxQHDo0wl2y%2Fl946QIgrNaEuSRCPfsEL5kiw7qKqYtXs3dU1hSLolg22dIKzFIExgtY%2BVOO1nos4mcdSXoOxw14zgfGN%2FedxUCS%2B3Fk4jq%2FriCmj3Om1NUhM61C0%2FvyHNsCds&X-Amz-Signature=33c52f721f373ec2fdbe34eaf1ad78e87880acdd94e79247f3b0b01082c385f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLA4REA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFakJ2pJGvgK%2Bv2nqf7KfH8uQYAkQZj27EmWQiY2ULkLAiAuZlWUkpecD5evQeUOAOBy334uEApQwhYuwpt5nf4vOyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMS8VaRF06knH34LfeKtwD9pNCzqR6A%2B4R5WvCmbPKnbLk1PZ8pxuCawLDoYChZ3fYKF06KYW3gpAOpLSgeN48%2BZ0E3shxJbwkFu9qhym2QKavol9Z4FqQeppEk4zi2s7pkS85Oj5qYmAaXcm4z%2B3cnX9NVCXChj7Fs8EvrhtAFEtm0dITvY1i4fGDrNeTWyN5ZfuWcLxiiIM6wKtTGLHU7EuinQFVHIGk9t5Vn3PwUrDED71XCZKjmMH%2FVrz4B%2B3DReLyyivCGpoHqQg276K91UJsDtcjeRFaenmEoblKuKLCe%2BSQrN2N%2FDmVnRhQwUBSDb7o6BnF8ADCjx1xPAimBaiUahZ1%2Binz%2Bn2sG4QOXgP01qoPiSrPwWtbsZdIhs1488T51WB9YfDZWDFGpIor3lwXFRauGhNKGGC3KM1KAPqBAVXbEHV65FIbtpUq4n57g4T3md8XHKEgxezZnsipZ7kcHRLwAuNidRdES33uQAhpBMsLrK7zliAD%2B12zwQEv227%2Fp2VXl1UEQI%2BerorszLPkqLt6pLPmq6lzobApw0l2UDSbFcldaZV3If3CJ1gV%2FgmkFzyzSYO3iuhtVfcV9%2FNYS9JIqzfUU8YiRmlIswOK3FPYbxbwMVnA4RhLpC41IiwbhUOpyLaZ%2FPIw58fhwwY6pgGGbIPcEE7ItO0Ja6uP3oPxkaM54LQFByayKdSkeZE6w7ePObzGIAlSyW5jCt%2BZI2Jl6Cp0w%2BwCJIO4OyAb8fLIc0DyxQHDo0wl2y%2Fl946QIgrNaEuSRCPfsEL5kiw7qKqYtXs3dU1hSLolg22dIKzFIExgtY%2BVOO1nos4mcdSXoOxw14zgfGN%2FedxUCS%2B3Fk4jq%2FriCmj3Om1NUhM61C0%2FvyHNsCds&X-Amz-Signature=a39d92d7965fb257c420df79cbde98d48c44e53880c0aa8885c517008a38ddca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
