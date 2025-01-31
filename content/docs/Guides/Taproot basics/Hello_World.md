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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQEALZC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuO9M%2F2%2FA5v7tKB97RGGn9AgSIxRUGVoxZeKhDiJHKaQIhAIpNN7uAIgHp%2B%2FZWA3foSFOpT8WDz%2FLUom3%2FANwApfIOKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh7UBLB9UJ8m7rB8Qq3AMgTzxxx1mAtZ5GzAkf9sfVWBaNouM3%2FjUiTvpU5%2FxtgjaDgG4gi8snNeacirGIo8VhcxStKqKcgpEWzSvPzdsK6h%2FuQdUU5iFsUx46HMf42G5ltDGKJO3kgdOclo0MvZ5dWv2G0Ay0l%2BenxeAwA3iRHDaRM6hrc8LCZ%2FRcdnq%2BsxyI2H5I1YGRt5uISj6yspDLL9j%2BqKuMeTEC4zCodTn7osjqYs8PbTuxxauk6%2BxkQRN6vHQ7MAy2hBJggTenHzkKVkxklrtNKaJd824g96on76vBCP9AEimrejNr599ESiXI1JqfK4NzbWyfaeEpOEs1uY4F31D%2FgxZBrLVDmhPVNqLf%2B6PsGogpYR9elLYJgBSIP9ZXrLFmM4vrINS%2BCXP3yYmJ8X9ciY7UaFYRJ7rUUJjHdUlJUyzLIJH7br%2BigfSa6DfIHNKs4FS3HEkMKIUPterPXQ6veBavxJUwNcbXh%2FwRShsoS%2F5K%2BcbABgO1sX7WydH%2BHVVbQaYE4r7xvj0vEtX%2BiKrcluoYxJ3HXSPCoVPwO3nv6Ex16wMQOVwC%2F1Jm%2F%2BeAk9rAa%2Bc31J3Uax%2Bds70GDW9UQ%2B5MCZhLP%2FPz2zPOf9QZvLMPUjjZpLRMZChSA5IGY3G1Bkt1EzD24vG8BjqkAXsQPfw3T847mIRoNGFQf0AllgxIPrTIShxU8T%2B7fZojg5Wls4xKd5DtaURubltSIzsbe0B5Gu19nT1k6aBQdD8fFOIJoamNyTfonANwDUjZn853YsKVdFZ48nEoTOzgu1iGCWpfZENG6QacbhDXaA%2BDPQ9k%2B0j3kgms6Gr%2Brbra0uLpi%2B9P%2FepkFK30IAWIKGBrr%2FdW6CCVq%2BprqlgAYDH8fxhp&X-Amz-Signature=9e94f397c9739608131dcb0f173e2ab2850c64dd12e47dbf3999458d54feb6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQEALZC%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuO9M%2F2%2FA5v7tKB97RGGn9AgSIxRUGVoxZeKhDiJHKaQIhAIpNN7uAIgHp%2B%2FZWA3foSFOpT8WDz%2FLUom3%2FANwApfIOKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh7UBLB9UJ8m7rB8Qq3AMgTzxxx1mAtZ5GzAkf9sfVWBaNouM3%2FjUiTvpU5%2FxtgjaDgG4gi8snNeacirGIo8VhcxStKqKcgpEWzSvPzdsK6h%2FuQdUU5iFsUx46HMf42G5ltDGKJO3kgdOclo0MvZ5dWv2G0Ay0l%2BenxeAwA3iRHDaRM6hrc8LCZ%2FRcdnq%2BsxyI2H5I1YGRt5uISj6yspDLL9j%2BqKuMeTEC4zCodTn7osjqYs8PbTuxxauk6%2BxkQRN6vHQ7MAy2hBJggTenHzkKVkxklrtNKaJd824g96on76vBCP9AEimrejNr599ESiXI1JqfK4NzbWyfaeEpOEs1uY4F31D%2FgxZBrLVDmhPVNqLf%2B6PsGogpYR9elLYJgBSIP9ZXrLFmM4vrINS%2BCXP3yYmJ8X9ciY7UaFYRJ7rUUJjHdUlJUyzLIJH7br%2BigfSa6DfIHNKs4FS3HEkMKIUPterPXQ6veBavxJUwNcbXh%2FwRShsoS%2F5K%2BcbABgO1sX7WydH%2BHVVbQaYE4r7xvj0vEtX%2BiKrcluoYxJ3HXSPCoVPwO3nv6Ex16wMQOVwC%2F1Jm%2F%2BeAk9rAa%2Bc31J3Uax%2Bds70GDW9UQ%2B5MCZhLP%2FPz2zPOf9QZvLMPUjjZpLRMZChSA5IGY3G1Bkt1EzD24vG8BjqkAXsQPfw3T847mIRoNGFQf0AllgxIPrTIShxU8T%2B7fZojg5Wls4xKd5DtaURubltSIzsbe0B5Gu19nT1k6aBQdD8fFOIJoamNyTfonANwDUjZn853YsKVdFZ48nEoTOzgu1iGCWpfZENG6QacbhDXaA%2BDPQ9k%2B0j3kgms6Gr%2Brbra0uLpi%2B9P%2FepkFK30IAWIKGBrr%2FdW6CCVq%2BprqlgAYDH8fxhp&X-Amz-Signature=66bfaccadac5d8ebb00e8c6dec12724966c1459fb0074c9601ff44a84ab2e7de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
