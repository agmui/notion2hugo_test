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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4WNQ6K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHEMvfy9AfZ5TlN77IvfuKxyoBj6YP4SbMVfoBRth9%2FfAiEAit24uKb9ebIZbRVJVXAVqa%2By7CjX%2B5vzipoLA7JGA24qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP4f%2B0CGFNW56qqmircA%2FwxMLwIMlKoGxr%2BoDVRQH3BHSYwZZ7NwxvDykcp1Br2GL5JZUPd1jeup%2F8%2BEH4Zww%2FmxUMiipWWVzXhFlJPosvzDoGnwZUGh%2Bl9FG13BMS8hhteQuOJm9wrx%2B2fiZPMsekchuSJOAs63dJzHof2Un%2BCsVy0PUo82MqxLpbt1JtKXsQgBvzOIOqsS%2FKIJZ0lVZ028H5qDOi%2BquGT%2BboLpLiCbi0FSWDvPaJFwUeD7DvDSnDSY49FShutOaMg1JV2tyHIMGT%2FyI8DM9ZRMhWknghAvpcMM81iLWl5viN%2FAIPaKr1TrQevZBM%2FOAyz5lKS80yKCIR9yGncv%2FWWZ1biobyozigzenjqYxMX09MpwQ3rrsl4NSpEiR6Y2r3fG3JQG%2FDI8I%2FrwN%2FA00ni95lNwTPBCNki5LYIDcWoaFGopxIV1fuL2Vv8CWLV63Kkrb%2BRFhJb09BFaJDNf11YkOQSsp8U5XVCZmydFTYNbAH%2B05hNT7m2bdQdMIMx6xNGTC%2B2XROrhO9xzD25NoZe9Q%2BxY3jO1UVU7tVnNKuVZFQYzBs7aUgx0Np1aouZSIl9yhK7s9pB1ooGEGzRFiVIz%2BTKbLClh3dXNh6PhsXVKbYcyqq7Ss%2BXnka5n3RBmEHWML7NoMQGOqUBtFuP6yZrr5GuAAD%2BS4UDX%2BhikKI6SaWAlHzzAzhaRFgjPNqB0jdq86YQB6qG1%2F%2FRPwasnibxdGTpL55cgbRbzNv19jmpkGGgSoEFtdZFms62nSR0FubVdhRBuCm2WRRZF20xJaYdnUzIS8rlrfNYWTFXeG39qRA%2BsEleYDF5zcjz7arKMTCBxgqq4ttSB%2BcvO7Bsv0sv4RnjGAGrleuOdzoDL4Za&X-Amz-Signature=2cda967b05fc665aad125dc2a469256b85e5f40668e67be9191093119d9ef0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4WNQ6K%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHEMvfy9AfZ5TlN77IvfuKxyoBj6YP4SbMVfoBRth9%2FfAiEAit24uKb9ebIZbRVJVXAVqa%2By7CjX%2B5vzipoLA7JGA24qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP4f%2B0CGFNW56qqmircA%2FwxMLwIMlKoGxr%2BoDVRQH3BHSYwZZ7NwxvDykcp1Br2GL5JZUPd1jeup%2F8%2BEH4Zww%2FmxUMiipWWVzXhFlJPosvzDoGnwZUGh%2Bl9FG13BMS8hhteQuOJm9wrx%2B2fiZPMsekchuSJOAs63dJzHof2Un%2BCsVy0PUo82MqxLpbt1JtKXsQgBvzOIOqsS%2FKIJZ0lVZ028H5qDOi%2BquGT%2BboLpLiCbi0FSWDvPaJFwUeD7DvDSnDSY49FShutOaMg1JV2tyHIMGT%2FyI8DM9ZRMhWknghAvpcMM81iLWl5viN%2FAIPaKr1TrQevZBM%2FOAyz5lKS80yKCIR9yGncv%2FWWZ1biobyozigzenjqYxMX09MpwQ3rrsl4NSpEiR6Y2r3fG3JQG%2FDI8I%2FrwN%2FA00ni95lNwTPBCNki5LYIDcWoaFGopxIV1fuL2Vv8CWLV63Kkrb%2BRFhJb09BFaJDNf11YkOQSsp8U5XVCZmydFTYNbAH%2B05hNT7m2bdQdMIMx6xNGTC%2B2XROrhO9xzD25NoZe9Q%2BxY3jO1UVU7tVnNKuVZFQYzBs7aUgx0Np1aouZSIl9yhK7s9pB1ooGEGzRFiVIz%2BTKbLClh3dXNh6PhsXVKbYcyqq7Ss%2BXnka5n3RBmEHWML7NoMQGOqUBtFuP6yZrr5GuAAD%2BS4UDX%2BhikKI6SaWAlHzzAzhaRFgjPNqB0jdq86YQB6qG1%2F%2FRPwasnibxdGTpL55cgbRbzNv19jmpkGGgSoEFtdZFms62nSR0FubVdhRBuCm2WRRZF20xJaYdnUzIS8rlrfNYWTFXeG39qRA%2BsEleYDF5zcjz7arKMTCBxgqq4ttSB%2BcvO7Bsv0sv4RnjGAGrleuOdzoDL4Za&X-Amz-Signature=664615f27a75c90db30646e598e249c00e65ec46f013373d04500075fb915ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
