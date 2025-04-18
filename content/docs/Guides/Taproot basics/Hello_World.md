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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CIKKSH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCID8CiYBBz%2BAUG5LmfyI27aZK251oZK3X4Poi8YEvOpZ4Ah8tlpQ%2BxEdUqmrLl%2F3nAwV1%2FeyML1Gi8zl1Yk0uk%2BysKv8DCHIQABoMNjM3NDIzMTgzODA1IgyW0bSxerDN8JOxXJ0q3APfdxS0oykNG15yu%2F%2BP26AoH%2B4jn8wT3iLg6mqvsfIpwL1036UBLUsT%2BIbgLCE%2FU0tMZ860DwEN9imA12C6FUvAhdD3H6ou%2FRQxTaLiuYM2Wyjk3khYCLuMAKl7zdFXwm5%2BCT%2Fa8llIeVw4yeuHVmHKG7Dhhiqqh7xx92Ru%2FikLn2NSjAEJG2csnKwz%2Bpt4lBit27pQp0I9ow1xY5V7bXNAmattaCUPyJKsqVTHRCyw2lDuBj9vEOiHCcpYzQRyFxi1xow2DodBOW%2FgqcR9H71UiXeR%2BsqkWF%2FWobjmaaGCw3LOjdVKyI2PXQQ2laVs5S%2F2OgoMOtnbzGBJMtcpVtUX%2BebM8etW3Ww7p5vWQbjDL8YT4nqRJDNvLGUm8ZLc8AXyAstxhnwbefbtPmQ83ryfBLsw5JLyhdh1xdzkq5Ag1VHgthuGlzOsVE3RnEyQADDZ6O2gq4b5U2aklQSpAcdKnc9R%2BQ7i7%2F4%2BRw13A%2B2lkQN17gDoUPl9OxtxdPWKTIfvbOUe5P%2BprZuBsLJXDKcrXbMgH41Fo4O3nYhLQpQC6f0%2F%2FrAw5bumLWD%2BOSomKeOAqrWz8VH%2FCb9j0Ng5e2U0%2B2zQZ7xpfybvkR5G5%2FB9ZhK8URple58e5e16gzDtrIjABjqnAYOthdv%2BVgCNFzG4Fc4S0VjTq8lthPKsYg3KtUsOjsEsPURU2zDujKvhwJPDUeVXa5gPN2pKSPVIZ8FAIj42RqcW98gaUfjKic81vn3zFsNWy268IPVKMk%2BG9fhkZF6iVNeTW7Tn7UFh41NIp4w%2Fp63yb44tExhQfsChelJArJTKBhVl1JkL26GV3SAzgAeKeL%2FmDySzHLVcT1pxkmXAAP2v4pOCT6Mx&X-Amz-Signature=339c594a4d748a49a8d2ba43d624edfe4a6317f4ac0266a031dfe953dd770625&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CIKKSH%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCID8CiYBBz%2BAUG5LmfyI27aZK251oZK3X4Poi8YEvOpZ4Ah8tlpQ%2BxEdUqmrLl%2F3nAwV1%2FeyML1Gi8zl1Yk0uk%2BysKv8DCHIQABoMNjM3NDIzMTgzODA1IgyW0bSxerDN8JOxXJ0q3APfdxS0oykNG15yu%2F%2BP26AoH%2B4jn8wT3iLg6mqvsfIpwL1036UBLUsT%2BIbgLCE%2FU0tMZ860DwEN9imA12C6FUvAhdD3H6ou%2FRQxTaLiuYM2Wyjk3khYCLuMAKl7zdFXwm5%2BCT%2Fa8llIeVw4yeuHVmHKG7Dhhiqqh7xx92Ru%2FikLn2NSjAEJG2csnKwz%2Bpt4lBit27pQp0I9ow1xY5V7bXNAmattaCUPyJKsqVTHRCyw2lDuBj9vEOiHCcpYzQRyFxi1xow2DodBOW%2FgqcR9H71UiXeR%2BsqkWF%2FWobjmaaGCw3LOjdVKyI2PXQQ2laVs5S%2F2OgoMOtnbzGBJMtcpVtUX%2BebM8etW3Ww7p5vWQbjDL8YT4nqRJDNvLGUm8ZLc8AXyAstxhnwbefbtPmQ83ryfBLsw5JLyhdh1xdzkq5Ag1VHgthuGlzOsVE3RnEyQADDZ6O2gq4b5U2aklQSpAcdKnc9R%2BQ7i7%2F4%2BRw13A%2B2lkQN17gDoUPl9OxtxdPWKTIfvbOUe5P%2BprZuBsLJXDKcrXbMgH41Fo4O3nYhLQpQC6f0%2F%2FrAw5bumLWD%2BOSomKeOAqrWz8VH%2FCb9j0Ng5e2U0%2B2zQZ7xpfybvkR5G5%2FB9ZhK8URple58e5e16gzDtrIjABjqnAYOthdv%2BVgCNFzG4Fc4S0VjTq8lthPKsYg3KtUsOjsEsPURU2zDujKvhwJPDUeVXa5gPN2pKSPVIZ8FAIj42RqcW98gaUfjKic81vn3zFsNWy268IPVKMk%2BG9fhkZF6iVNeTW7Tn7UFh41NIp4w%2Fp63yb44tExhQfsChelJArJTKBhVl1JkL26GV3SAzgAeKeL%2FmDySzHLVcT1pxkmXAAP2v4pOCT6Mx&X-Amz-Signature=c9499c3a9791503b0f4ae0caef7b15ee3674288f3e80e9b5486fc68bad6b782a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
