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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGL27P56%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmz2HEI10ea455FPSIV%2BSBHZW0yMFbF%2Fyju%2BxXZFl4swIhAL5mfCK5o3%2FPsBrVWriQo%2FeS6Pnb%2B8GUq9hMO37V0deUKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF7MIqVKhwk9EfKIAq3AMXtP2vvRLUvxngOUyJ9iQNwiDIC1hmwLdoQTCCT65yyr4lXlTArrLlib4Xjdqm1CwRorV0%2FkV0ER85CFlNy8MYnwp9A1BUdsBC1V6x%2F4G57xI7BUJGraBKsQUqTkDaIuGKcX9XXwGHfwqVEQwM08XrPJmCn4xNaon84BxM%2F1X1jB5OpJPiOu89DeMY11aK6%2FNZ3n4nsvrdfITdi5y2l96w9mNCsmIcHgirINr1%2FATbTKTJGk8A%2FCEjAyJQruK2ihm30YOEE7ZITZ0FpssyDWifwv0465qwEaBhmMwGXOR3WfEYzH7Xx7LQkEHA314YNiN6gGRvhzfqIjplpN%2B25OcUk0cLyaPiDg%2B86OP69AyAgjoJKvPx55adgeD358FEbd97kVgRGBbGeN7%2BN7pmt7b98n0FJ92ruF5P0jUnP%2BeKaGJQq%2F84siob%2FMcETqAdnccwUy%2Bw1s9tehkuG3SuGG3%2FEaVbarMoAK0fuYLT%2FmALOX%2Fgg95OyXgFAW4uDv%2FetevzAxI5lOAUCiHkmQdkNJyJjfpaJAielYoM%2F0OzTi7S5AC2LpDw7qelUazgAeg3h1gLClAOF2U7yk%2Fl6nD5vLa7WQw%2FaCJV%2FMEM72BG9ypd5kYPfSpwUL318NVv4TCzr9jCBjqkASlX0MYCHkfqrQh4NNHcgTAwqR2XuOQE5v7ULcPgG3Xve7VqAaECbarclJ6ekOBiYO%2BvjlbRF460UAbKXTWgdz%2FSsZpcBdgg5b77TT8M%2FOV9xgmm%2FGTV%2Fm4Chty97cY59q7t9AqrQSTOAHrtkIkq4ZqnAZwF3D6JJhbPSTfhBHT35BBU7g0CPiGZxsESMF6vYBTo9BOUlSKZgH3YDHvjP5EL0TuP&X-Amz-Signature=cc2084e8c17c3560fa42617d8e53bdbc90a8b14094c7a643aa99f19ceec6770b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGL27P56%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmz2HEI10ea455FPSIV%2BSBHZW0yMFbF%2Fyju%2BxXZFl4swIhAL5mfCK5o3%2FPsBrVWriQo%2FeS6Pnb%2B8GUq9hMO37V0deUKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF7MIqVKhwk9EfKIAq3AMXtP2vvRLUvxngOUyJ9iQNwiDIC1hmwLdoQTCCT65yyr4lXlTArrLlib4Xjdqm1CwRorV0%2FkV0ER85CFlNy8MYnwp9A1BUdsBC1V6x%2F4G57xI7BUJGraBKsQUqTkDaIuGKcX9XXwGHfwqVEQwM08XrPJmCn4xNaon84BxM%2F1X1jB5OpJPiOu89DeMY11aK6%2FNZ3n4nsvrdfITdi5y2l96w9mNCsmIcHgirINr1%2FATbTKTJGk8A%2FCEjAyJQruK2ihm30YOEE7ZITZ0FpssyDWifwv0465qwEaBhmMwGXOR3WfEYzH7Xx7LQkEHA314YNiN6gGRvhzfqIjplpN%2B25OcUk0cLyaPiDg%2B86OP69AyAgjoJKvPx55adgeD358FEbd97kVgRGBbGeN7%2BN7pmt7b98n0FJ92ruF5P0jUnP%2BeKaGJQq%2F84siob%2FMcETqAdnccwUy%2Bw1s9tehkuG3SuGG3%2FEaVbarMoAK0fuYLT%2FmALOX%2Fgg95OyXgFAW4uDv%2FetevzAxI5lOAUCiHkmQdkNJyJjfpaJAielYoM%2F0OzTi7S5AC2LpDw7qelUazgAeg3h1gLClAOF2U7yk%2Fl6nD5vLa7WQw%2FaCJV%2FMEM72BG9ypd5kYPfSpwUL318NVv4TCzr9jCBjqkASlX0MYCHkfqrQh4NNHcgTAwqR2XuOQE5v7ULcPgG3Xve7VqAaECbarclJ6ekOBiYO%2BvjlbRF460UAbKXTWgdz%2FSsZpcBdgg5b77TT8M%2FOV9xgmm%2FGTV%2Fm4Chty97cY59q7t9AqrQSTOAHrtkIkq4ZqnAZwF3D6JJhbPSTfhBHT35BBU7g0CPiGZxsESMF6vYBTo9BOUlSKZgH3YDHvjP5EL0TuP&X-Amz-Signature=51e0887321f57c96bfea2bb793da20f9478cbdf1ece3f0e7e326d770a27d0568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
