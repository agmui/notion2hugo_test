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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPPDOOA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCVItUx3vwTuMmTV3BziggRsi1RezXgSaOy%2B8brgbLkqwIhAMoPdHGjpp1CUcg8b5eccC%2FMKo0GdP7oik128HlMRivuKv8DCBUQABoMNjM3NDIzMTgzODA1Igwkbq4X5eqQcdXzJUQq3AOzFpzqjeQkxYbUdp1D60uLYcjxcVMOfiFIE%2Bz9vmPBzuWPZFE27f%2FZHFKvRTW2hqvMNNoM8qvjQCkODBo4rSV%2FNXoKxVqbBG2zHSPIeDOXF%2B8O1IpGWVgf54hlDQjZ2o1S1JEoYXfRPl2BbT%2BuyesZ%2BTJwwK%2B4plXg6GvNROzuN3j3SPWvOp7vtgHMFN6AQSm41Uddr5ToC2wNy1r9Wk2hdf6Vy7zt1N%2B4TyJD%2Bi76TP4elIfSsSLtp36c%2BQ9Iz4Kkhe%2BV5iwNkC0z5ug4cZwmAEusiL4NGhhOdBpAWJZL97Xn4AcJ7Ag%2B%2FqfyKwRXwxI5t8JH1jf%2FfkhhtBeTMesjWSlFTgOjeFwN1zkMfxRPSHfFE%2FzeS8oiO2IT8ywRrApT6a8cKWVvpVxOxapEWF4mSndw6AyM3JNnUxzo4xse%2Fl3pBf43Gn%2FREu%2FYszk6RKcTOHI7iu90QegdvGU4bQXFKBkOo%2Ffb9qzaapqPBBzMPc70eLglsAUrF28N1nUHQ5bIE9fyoD3K4Fv%2FTFRgtE8%2FSuwjSz0C4KmWecRX602Wg%2FxXotpR%2B0Aq7i%2BgWvttzMN56YyS1PuhKD3vxoNXMUavZgQeoyFR8BwoY7tJAzZvnGeB3CojJWabgDFFizDrqbDCBjqkASlQGslNRVmYGpUcwbX3plgbbPw7vP2WAjxtTOG4%2BBcBrDD2V8X9Phkxd%2B5G1vkxPybzev3aAQVFLFsSjRyRR5kInplDQBJCg2J2nyP4LExVR%2BLIucCKQLGJb4U8srhekat4SAQGkiRLMpqC9RVC74bwquQVMKpaGA735Y0sPMuYn2snPGCIWNlBUDpygswnq8zGkzN%2B2qJPuGTnegmRmkWAKFWO&X-Amz-Signature=c36c4b694ac5ab115385407c6b90c5c0f06ba6c9f9ffe4b7035ac9e958efa8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPPDOOA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCVItUx3vwTuMmTV3BziggRsi1RezXgSaOy%2B8brgbLkqwIhAMoPdHGjpp1CUcg8b5eccC%2FMKo0GdP7oik128HlMRivuKv8DCBUQABoMNjM3NDIzMTgzODA1Igwkbq4X5eqQcdXzJUQq3AOzFpzqjeQkxYbUdp1D60uLYcjxcVMOfiFIE%2Bz9vmPBzuWPZFE27f%2FZHFKvRTW2hqvMNNoM8qvjQCkODBo4rSV%2FNXoKxVqbBG2zHSPIeDOXF%2B8O1IpGWVgf54hlDQjZ2o1S1JEoYXfRPl2BbT%2BuyesZ%2BTJwwK%2B4plXg6GvNROzuN3j3SPWvOp7vtgHMFN6AQSm41Uddr5ToC2wNy1r9Wk2hdf6Vy7zt1N%2B4TyJD%2Bi76TP4elIfSsSLtp36c%2BQ9Iz4Kkhe%2BV5iwNkC0z5ug4cZwmAEusiL4NGhhOdBpAWJZL97Xn4AcJ7Ag%2B%2FqfyKwRXwxI5t8JH1jf%2FfkhhtBeTMesjWSlFTgOjeFwN1zkMfxRPSHfFE%2FzeS8oiO2IT8ywRrApT6a8cKWVvpVxOxapEWF4mSndw6AyM3JNnUxzo4xse%2Fl3pBf43Gn%2FREu%2FYszk6RKcTOHI7iu90QegdvGU4bQXFKBkOo%2Ffb9qzaapqPBBzMPc70eLglsAUrF28N1nUHQ5bIE9fyoD3K4Fv%2FTFRgtE8%2FSuwjSz0C4KmWecRX602Wg%2FxXotpR%2B0Aq7i%2BgWvttzMN56YyS1PuhKD3vxoNXMUavZgQeoyFR8BwoY7tJAzZvnGeB3CojJWabgDFFizDrqbDCBjqkASlQGslNRVmYGpUcwbX3plgbbPw7vP2WAjxtTOG4%2BBcBrDD2V8X9Phkxd%2B5G1vkxPybzev3aAQVFLFsSjRyRR5kInplDQBJCg2J2nyP4LExVR%2BLIucCKQLGJb4U8srhekat4SAQGkiRLMpqC9RVC74bwquQVMKpaGA735Y0sPMuYn2snPGCIWNlBUDpygswnq8zGkzN%2B2qJPuGTnegmRmkWAKFWO&X-Amz-Signature=75734589af2b37782d1b9b97f7f3d2f3ff63b6a06a9ee9ba2bc9d87dd43bd212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
