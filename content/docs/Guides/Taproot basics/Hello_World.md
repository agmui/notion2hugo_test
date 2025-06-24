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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIAJK4KK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDwwOgKp53mASfg9jri73hkcXCtgUNU7Cr1VoBQ5Htr5AIgfB178y87Uxd6Fa%2Bs5nXcQJzg1FZRrOz%2B18OSeYN5RBIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE06UaoX8m0puPn4EyrcA2dIvPoaye7OCh%2Fi7PsNR%2FEsZX%2B2E35%2Fy8Q0G%2FBJpNRvufNAR30aqFUerbHlmcH2xAeuEe6SPaP%2BCZKeocknEqfKGNzLARJIH4k1gsKJNtR4X8oKB7Q538E4Bwj2UWIBYCwsJK%2BsLJLd1UvANh2lLUx5WbSqKeTObZNhNHt2nbVJ40iknwJ2wiRNF2z2fDYhilNT9cjsiuv08Turl7KR6WTGoz9jYmHbvrgJF3%2FDKVYuj1yo4GsMxeaiV%2BxF1Ib7D2mkmnvynxB5qUDQYmuzl9sl%2BaIDP8Z4TJtmQFFBErRNeApQDGmFqkGwmKghKvBDRhNyaIrYqevIbO1vkukfUjCF5KicRVmGFUx3LtO8UTv9zI6n%2FbSd%2F%2F4NbnsWKL3VTgEMqvzl46wSpGDHhucOZMiFxUi%2FWTZcb44uvEpvvLNuX3Xrlbbd5y%2FsHoUk1xyxk%2BwaB3rrz8w3YqXurtwvMwUBkGJeY1oBX5NuMLx1PC3NRH%2FrEnfQ1Wn%2Fs03ijL%2BD7aWANFXSQmyPldBP1oASbrimCZbWr%2BOqm%2BnFtTfHG68TfbvpVcMXSpqYXWcl5A7GrtugWILt39K0E%2FjTGb7hFwtkmz%2BLj%2B8oHEVolXa25UIBMjccvTuzrtHWmtdaMLv46cIGOqUB38KqBCDRa%2B%2BHbddaFdbYSDtYNJSNDxzqaRIcp%2FhuLVznZcqyZPf94s3fanOam3bTa%2FvbdnVai%2BIuTIcpUqAgoLRnIrrexqEP7yRBKcssHHTZlu8QVDh4FttxFAgcXZQwr3htxlkrqJ1QNn8t%2B%2B5cbvWSmI8ikJMD2Ngt046n0Vsm3X5AIw7Iv%2F501JD%2FyadN0irRprOR3fuwLazG2E5Svq0mziu0&X-Amz-Signature=56b9aed07d22ec5eedc979cf19d06fd4376f5ebaee9735878d5c213fb4eb3ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIAJK4KK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDwwOgKp53mASfg9jri73hkcXCtgUNU7Cr1VoBQ5Htr5AIgfB178y87Uxd6Fa%2Bs5nXcQJzg1FZRrOz%2B18OSeYN5RBIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE06UaoX8m0puPn4EyrcA2dIvPoaye7OCh%2Fi7PsNR%2FEsZX%2B2E35%2Fy8Q0G%2FBJpNRvufNAR30aqFUerbHlmcH2xAeuEe6SPaP%2BCZKeocknEqfKGNzLARJIH4k1gsKJNtR4X8oKB7Q538E4Bwj2UWIBYCwsJK%2BsLJLd1UvANh2lLUx5WbSqKeTObZNhNHt2nbVJ40iknwJ2wiRNF2z2fDYhilNT9cjsiuv08Turl7KR6WTGoz9jYmHbvrgJF3%2FDKVYuj1yo4GsMxeaiV%2BxF1Ib7D2mkmnvynxB5qUDQYmuzl9sl%2BaIDP8Z4TJtmQFFBErRNeApQDGmFqkGwmKghKvBDRhNyaIrYqevIbO1vkukfUjCF5KicRVmGFUx3LtO8UTv9zI6n%2FbSd%2F%2F4NbnsWKL3VTgEMqvzl46wSpGDHhucOZMiFxUi%2FWTZcb44uvEpvvLNuX3Xrlbbd5y%2FsHoUk1xyxk%2BwaB3rrz8w3YqXurtwvMwUBkGJeY1oBX5NuMLx1PC3NRH%2FrEnfQ1Wn%2Fs03ijL%2BD7aWANFXSQmyPldBP1oASbrimCZbWr%2BOqm%2BnFtTfHG68TfbvpVcMXSpqYXWcl5A7GrtugWILt39K0E%2FjTGb7hFwtkmz%2BLj%2B8oHEVolXa25UIBMjccvTuzrtHWmtdaMLv46cIGOqUB38KqBCDRa%2B%2BHbddaFdbYSDtYNJSNDxzqaRIcp%2FhuLVznZcqyZPf94s3fanOam3bTa%2FvbdnVai%2BIuTIcpUqAgoLRnIrrexqEP7yRBKcssHHTZlu8QVDh4FttxFAgcXZQwr3htxlkrqJ1QNn8t%2B%2B5cbvWSmI8ikJMD2Ngt046n0Vsm3X5AIw7Iv%2F501JD%2FyadN0irRprOR3fuwLazG2E5Svq0mziu0&X-Amz-Signature=42d1bdd0b44bd3159f8b2c8f7c485ae1c042d78a66d2984626e0503ccad5ede2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
