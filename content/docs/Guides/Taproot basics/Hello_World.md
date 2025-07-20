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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HHDUX57%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZxFZlV32DY1QBm1r7q4XAiJqL4B8ajhIr2EtWXKZm2AiBKcTV5j7wWLVl2MphDCBd7DG4G3D18mwfxb8zcepyUMiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbD82NiKNWo5%2Ffn0KtwDKwUS4QjTEqTKe7ipqxUeogDqLhtRxJuVo3g0bwhGu964%2BbuDG86KpTRXzmAFae0U2eD5yE71KTVg8kZAjq9Vyqrc18Igk2iYho6xTYrfI57V9Kp0cOJ6WTZdMth3PXxERPOlhNaMYgKAq6q0vzKrdlIfSD2%2FXGSj2t%2BYMpIhMBDo3jqrJpAfMGBuFwkTdLLWuCRnqRg0GqJXWTOOHzz2AxmNJq5JAbM90og8C14L4dz95jDj9%2BJJG5DKtWtMf42WDDMu84Ks5KHLgSvlfAN%2Fqa8Ss%2BiI%2FCHd%2FkdH%2B006py%2FrZfGviFZn4dOCQ2Qg6zCJDhEhBQFGygTOVGTyUGgd%2BWVJiDbQxjnzs58Xosd%2BtGyDN%2BKguPnaAJWzB5DCeXk0fr7WtlvS4BpBZSzYjrzVK7wZpGSqQc2owKbSCyUKWzlO73co7lZZOi8qYa5vSC9NMP3Fp67HihODaWD5iVxdsMB2%2F69xgQ0Nd9%2BcbuQ1lq26UVLM6HUBbQHS8YmFxwHOKXROL0iElr5LBWlS6HcnvSL%2Bkxbbik5IaoY7lT%2BLGjHpOHCJESuJDVF9gau45GGfQ34Wb4RWxA0pKmNDh2WyJaZuuBEnk28qC3ITmb3foU%2BiEMvhCAsyjPfupWMwvbjywwY6pgEDy%2BlP5mHTeQUT2VQ8ei3ItM%2FfcJ3nqpo4GYs0u9j3yyQOQjiAIypCjbi1scxHjiXnDoRDZPDL6BIn1hRfJneYd02%2BPlAX0yw%2FtEFJ44iyICu3D1LEZXuFcwCfrbH%2FS87RLq%2FU3gjIiveO1a4BcbpnXc1Pf%2FiIKuxmd%2FocwsqqRDSaKWGIx2Pz06mBjuGccXadXlgcGplIZ4CMNb%2BoWQnZ43w126TP&X-Amz-Signature=51028942d668669e12bc88988f413d594a50bd33a85a40d5231593ed4db71dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HHDUX57%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZxFZlV32DY1QBm1r7q4XAiJqL4B8ajhIr2EtWXKZm2AiBKcTV5j7wWLVl2MphDCBd7DG4G3D18mwfxb8zcepyUMiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbD82NiKNWo5%2Ffn0KtwDKwUS4QjTEqTKe7ipqxUeogDqLhtRxJuVo3g0bwhGu964%2BbuDG86KpTRXzmAFae0U2eD5yE71KTVg8kZAjq9Vyqrc18Igk2iYho6xTYrfI57V9Kp0cOJ6WTZdMth3PXxERPOlhNaMYgKAq6q0vzKrdlIfSD2%2FXGSj2t%2BYMpIhMBDo3jqrJpAfMGBuFwkTdLLWuCRnqRg0GqJXWTOOHzz2AxmNJq5JAbM90og8C14L4dz95jDj9%2BJJG5DKtWtMf42WDDMu84Ks5KHLgSvlfAN%2Fqa8Ss%2BiI%2FCHd%2FkdH%2B006py%2FrZfGviFZn4dOCQ2Qg6zCJDhEhBQFGygTOVGTyUGgd%2BWVJiDbQxjnzs58Xosd%2BtGyDN%2BKguPnaAJWzB5DCeXk0fr7WtlvS4BpBZSzYjrzVK7wZpGSqQc2owKbSCyUKWzlO73co7lZZOi8qYa5vSC9NMP3Fp67HihODaWD5iVxdsMB2%2F69xgQ0Nd9%2BcbuQ1lq26UVLM6HUBbQHS8YmFxwHOKXROL0iElr5LBWlS6HcnvSL%2Bkxbbik5IaoY7lT%2BLGjHpOHCJESuJDVF9gau45GGfQ34Wb4RWxA0pKmNDh2WyJaZuuBEnk28qC3ITmb3foU%2BiEMvhCAsyjPfupWMwvbjywwY6pgEDy%2BlP5mHTeQUT2VQ8ei3ItM%2FfcJ3nqpo4GYs0u9j3yyQOQjiAIypCjbi1scxHjiXnDoRDZPDL6BIn1hRfJneYd02%2BPlAX0yw%2FtEFJ44iyICu3D1LEZXuFcwCfrbH%2FS87RLq%2FU3gjIiveO1a4BcbpnXc1Pf%2FiIKuxmd%2FocwsqqRDSaKWGIx2Pz06mBjuGccXadXlgcGplIZ4CMNb%2BoWQnZ43w126TP&X-Amz-Signature=211ae36b96c8040c8ce84c0cae49c55393d266395d5592f1e758816abc2734a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
