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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7V43DL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3PoYXfeGKeVLYv1ilC%2FSru3B7PF47k8QRRnv7p8JdRAiAiqgzHwvdeRLYXQ%2BgPQ2IF%2BGAlpVEQsd1OI3ofLDVzUyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMUUcXhP9dIL6xP7%2BpKtwDEqDp%2FbrUVH0tbpJufrEJlXPp1%2BMvsID7EOqSBZx2IqyMhzeTJ3YShHbE4qR8XPs7sTx3F8OW95LuZO7Y7n08abDVcWqAkMS0Dscl1AlL6tMsl6K%2BB6izi%2FkhW4Gy9vHjGb5PBejDk9P4xFOcRVJxGhXjYU%2FlGPjqVW0G725WFKvCsXezpUjZz2EMRD6MPZAMlkzHJa%2BQ%2BfvrnB6X7KkFEXBufdwIqVABZcVD9Nubb1j%2BHAU%2By7uObdAKqdRGH0rCTKTWKtfxxPvxiCxG6xkc9thb2e9jGfyvVmSP8eePf4UyeHRU9snsyGcls57XX9ues1O2b98DAEYOG6ndLgzDGzx5a%2BStCkoyZWB0uHOD1dSciDQngKGYttHmqOAjeyOn10R4x0Lvv%2FU3U3UDKF8wiZNYZOvi7lIfSO7uIAU0rmV6G1aF%2B%2FlEr5l3giBRMPjIR9po8vTZNMCz6XJOAdf7WO6qY%2Bq4x03r2hnW396gZub4Hjx5vvfz39OCQ%2FMAh9CGqzALKHtfOa7%2BMs%2B2rQh58S2h%2BEB9AemcyxqgpaktM935Wfzc8Xq9dRQQ0m8AsI11lGij9POhY8oCQR08b9w%2Fnm6dF7PNWDOoJ7WfAfQ0%2BV%2BEq65kze1ooXhmuNUw9MO5xAY6pgEmHb0LSdYU8aZw72Jn5OBqdseM7r%2BmiVyID3wGRJhH9Jg6vtRZRUWJvKoZYRIO9NWthS2RE5mWTv6uIy3P3eWmNS3XZwx32qqIxgTyqxx3O%2B71jYfDIcXdkl5V%2Bb8%2BCc5KUSYCI14ZbFvqi%2BoyvDCLViOtpL%2BW87D5I5gVb%2BO1kvWLcnmCIiwv5MUbu611KAhOMLST8tlvHfe286XVWOdE3yrPMRT7&X-Amz-Signature=40ab8e5f5a2c0a8e612db4c22c8ee1a23df2a7cf7e197e017da754bf1b0f47c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7V43DL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3PoYXfeGKeVLYv1ilC%2FSru3B7PF47k8QRRnv7p8JdRAiAiqgzHwvdeRLYXQ%2BgPQ2IF%2BGAlpVEQsd1OI3ofLDVzUyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMUUcXhP9dIL6xP7%2BpKtwDEqDp%2FbrUVH0tbpJufrEJlXPp1%2BMvsID7EOqSBZx2IqyMhzeTJ3YShHbE4qR8XPs7sTx3F8OW95LuZO7Y7n08abDVcWqAkMS0Dscl1AlL6tMsl6K%2BB6izi%2FkhW4Gy9vHjGb5PBejDk9P4xFOcRVJxGhXjYU%2FlGPjqVW0G725WFKvCsXezpUjZz2EMRD6MPZAMlkzHJa%2BQ%2BfvrnB6X7KkFEXBufdwIqVABZcVD9Nubb1j%2BHAU%2By7uObdAKqdRGH0rCTKTWKtfxxPvxiCxG6xkc9thb2e9jGfyvVmSP8eePf4UyeHRU9snsyGcls57XX9ues1O2b98DAEYOG6ndLgzDGzx5a%2BStCkoyZWB0uHOD1dSciDQngKGYttHmqOAjeyOn10R4x0Lvv%2FU3U3UDKF8wiZNYZOvi7lIfSO7uIAU0rmV6G1aF%2B%2FlEr5l3giBRMPjIR9po8vTZNMCz6XJOAdf7WO6qY%2Bq4x03r2hnW396gZub4Hjx5vvfz39OCQ%2FMAh9CGqzALKHtfOa7%2BMs%2B2rQh58S2h%2BEB9AemcyxqgpaktM935Wfzc8Xq9dRQQ0m8AsI11lGij9POhY8oCQR08b9w%2Fnm6dF7PNWDOoJ7WfAfQ0%2BV%2BEq65kze1ooXhmuNUw9MO5xAY6pgEmHb0LSdYU8aZw72Jn5OBqdseM7r%2BmiVyID3wGRJhH9Jg6vtRZRUWJvKoZYRIO9NWthS2RE5mWTv6uIy3P3eWmNS3XZwx32qqIxgTyqxx3O%2B71jYfDIcXdkl5V%2Bb8%2BCc5KUSYCI14ZbFvqi%2BoyvDCLViOtpL%2BW87D5I5gVb%2BO1kvWLcnmCIiwv5MUbu611KAhOMLST8tlvHfe286XVWOdE3yrPMRT7&X-Amz-Signature=3310f6c1fe7ec4b8566f98bfacf7db0506657f964bcdb04659bc2ec2e7bfeed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
