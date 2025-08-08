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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJW67B3N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFDgIoytcySiQIGEzfmDlAV46k32Lli7r4I3bNGN7YV1AiB5kMSgRH8%2FGcIv70uOWIxJN3Zzz1XszNhmB6itVTfrlCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKp1QoWykFkW%2FvniCKtwDLwrnjcN0qVo0fUbzyUtkFLdgjcbf0OwV4c5tZEThN88aUjlC8hCUfW6SpaiwNAN8tdKkLoK8ZGuFyFF5gIz08thG%2BoA9RCFdoQIbOndcGAMqeZqrgFkeOJFwYDf%2BqMJb4hrcOh99gcrDasiRp9A4GcBmB8pAP5pJ50MsjvfaCvhP5LRTS7yNX7rxjkMf6RNKJGbUEIUBXHiY6mPDCIDsgSSc%2Fn6wVNLEW3vdjJLpJQG3oWfnVsxTtqxNDy2YkgQSwyWTtzFYi%2FzM56ryyo6OPeDc73L6K63%2FtAzJBazJ6KVkw%2FNnM%2FIQN2BAcSWVw%2FyGdU%2FZNsdah6%2FkLYCJwAVxzTv4xhzyiy%2BAeaZBMCUPqIOIOmcd%2BLd1Z6SZnaYuLAtpRrVh2htklsLsWdkr0i%2Bm6g5p0Sho%2BZYh0tsz2NiCa5yQ%2BViUT7VoVIPzyvOLCN3bqddslq0Rj0NxWVo9IlOqADCD3B64OU83HijHqqOzQBz3OGCkjy1kgvyzfAPqdJTe4gjZ%2FWdyoowgoId%2F7klUriWFosXOuJ1iH4w4jNSSac8yWZbf2GopCFw%2FkIIEVV746q0%2BsZJXhLEHO%2BrsgtWulgsN1rFfjgsdT1g9EZHdlbsPktrHKoDn6H6Wi%2Bcwj%2FvVxAY6pgF%2B7V1CPo0HnnxSdt9ycTUAf0bGpKB1sZHVXoRCp9E%2Fat1eC%2FP6zBe0m3A0ru33zOEGBFovsjjZeUPBReJT7N6A43sLgd7CfFjV3sLgVJKuM8Jm5O7UihHbFVM3hfZ0OGc2pSbWMCYX7quvjuw2WSzImiRWOZuiBa2MSrfJTs4WDGmy30ThgaB3SoPB8XSMateb18sJfpR2XxMHFX61m6pQuIAaQXO3&X-Amz-Signature=03c5a7375c70497fb4a2b54052e2d03f3ef9ce03b41100f58a892dd01ba37451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJW67B3N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFDgIoytcySiQIGEzfmDlAV46k32Lli7r4I3bNGN7YV1AiB5kMSgRH8%2FGcIv70uOWIxJN3Zzz1XszNhmB6itVTfrlCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKp1QoWykFkW%2FvniCKtwDLwrnjcN0qVo0fUbzyUtkFLdgjcbf0OwV4c5tZEThN88aUjlC8hCUfW6SpaiwNAN8tdKkLoK8ZGuFyFF5gIz08thG%2BoA9RCFdoQIbOndcGAMqeZqrgFkeOJFwYDf%2BqMJb4hrcOh99gcrDasiRp9A4GcBmB8pAP5pJ50MsjvfaCvhP5LRTS7yNX7rxjkMf6RNKJGbUEIUBXHiY6mPDCIDsgSSc%2Fn6wVNLEW3vdjJLpJQG3oWfnVsxTtqxNDy2YkgQSwyWTtzFYi%2FzM56ryyo6OPeDc73L6K63%2FtAzJBazJ6KVkw%2FNnM%2FIQN2BAcSWVw%2FyGdU%2FZNsdah6%2FkLYCJwAVxzTv4xhzyiy%2BAeaZBMCUPqIOIOmcd%2BLd1Z6SZnaYuLAtpRrVh2htklsLsWdkr0i%2Bm6g5p0Sho%2BZYh0tsz2NiCa5yQ%2BViUT7VoVIPzyvOLCN3bqddslq0Rj0NxWVo9IlOqADCD3B64OU83HijHqqOzQBz3OGCkjy1kgvyzfAPqdJTe4gjZ%2FWdyoowgoId%2F7klUriWFosXOuJ1iH4w4jNSSac8yWZbf2GopCFw%2FkIIEVV746q0%2BsZJXhLEHO%2BrsgtWulgsN1rFfjgsdT1g9EZHdlbsPktrHKoDn6H6Wi%2Bcwj%2FvVxAY6pgF%2B7V1CPo0HnnxSdt9ycTUAf0bGpKB1sZHVXoRCp9E%2Fat1eC%2FP6zBe0m3A0ru33zOEGBFovsjjZeUPBReJT7N6A43sLgd7CfFjV3sLgVJKuM8Jm5O7UihHbFVM3hfZ0OGc2pSbWMCYX7quvjuw2WSzImiRWOZuiBa2MSrfJTs4WDGmy30ThgaB3SoPB8XSMateb18sJfpR2XxMHFX61m6pQuIAaQXO3&X-Amz-Signature=7ce22b92415d0a1d79cca8e738a47a6676dedca963c834f8004017eb73805e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
