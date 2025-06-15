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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW76DDH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDNI8SA20spbvIy5jpwjUYD9vZ9NSVjnv%2FICMce1wujGgIhANo2KOft603aqukNuEebdMmDtXx3eXGWsu7COJqlhngxKv8DCEUQABoMNjM3NDIzMTgzODA1IgyJqmvtXRxqfBITjzcq3AML6fKYzFNdZTYr5DFUbU6fU2FA5XGXRK8K4WsOFh9oudgVtkzU%2Fuvw6hjD1O5iRWe3DZuvBbGcBLAVDKYGpnl1KkGVGSOEgK5c9qXUuF%2BbyheyO5slLEg4JYdq7sQ9oce7uISASDh0%2FsETF3TKl7W%2BgJTWStHGaxD3l6II%2BJvluVV%2FfVv3RM8JCrRAsr6JQc2YH1VoTpN%2Fz9dg0pMIt9EFuZlkT%2FZX2oV0ukyR%2F9keObTXfjdA6PJSy9BDzm%2FhwNLsu6Qka21qg4AuppfsTGOSUKuObHnVbf1kRcq0pK25%2BC33xUvY8H6zouFNehQX5RjQnOd4UeQ55IedBjM1lbcl1Sv29F%2FbaJ5%2Fmz4DDIsovd4eOkeQtQHwmUNeMClZ59RcD%2BfvyoPpFusejyF3Bx8396lq1lKhxPCFtGfmmSBGVeP726XDUbbMZYk5ge0WzmNzQZRjiIlB8f0n3Z85SafoVUlGCrfZTxeOu53V6YvhUgwFQ4MzTXn0RytU9G2p0yBGv0R2GgmknejhqeD3X%2F%2FXBTfsm4pHdjVnZ6GM8QwAsLIsqvq6Ew8jhrv6a6LjuwHDHnUyUKgu6O5M8UWDlDF02oyqLT07I8i%2BooMWB1uKM3rbl7uld9Lpe1CK7jDv6brCBjqkAZxGvZ7LnulsaRjJ%2FkwktF0ec3c38A96vH5EulwbQXQuLAfnDKMEz8PKC1oRf4iAFkwkQyE2%2BbvCWcS0kQuEJvtgd4kMD9aqgGFCTC0uTD%2Fn6gQ5dGt%2FjMCdNRnp3AM6UzQ97KUGQVoINQpOIkKthh4XYTuneCpY7q4o3bvaZ67WOdpmph31rRE3U4mrpDHapPmSguVnywnK8T6zxiPShtIzzdyZ&X-Amz-Signature=0d9e12557a590a5759fe44ff9ad999157bfe53f21c774c6e30c87736a94e53b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW76DDH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDNI8SA20spbvIy5jpwjUYD9vZ9NSVjnv%2FICMce1wujGgIhANo2KOft603aqukNuEebdMmDtXx3eXGWsu7COJqlhngxKv8DCEUQABoMNjM3NDIzMTgzODA1IgyJqmvtXRxqfBITjzcq3AML6fKYzFNdZTYr5DFUbU6fU2FA5XGXRK8K4WsOFh9oudgVtkzU%2Fuvw6hjD1O5iRWe3DZuvBbGcBLAVDKYGpnl1KkGVGSOEgK5c9qXUuF%2BbyheyO5slLEg4JYdq7sQ9oce7uISASDh0%2FsETF3TKl7W%2BgJTWStHGaxD3l6II%2BJvluVV%2FfVv3RM8JCrRAsr6JQc2YH1VoTpN%2Fz9dg0pMIt9EFuZlkT%2FZX2oV0ukyR%2F9keObTXfjdA6PJSy9BDzm%2FhwNLsu6Qka21qg4AuppfsTGOSUKuObHnVbf1kRcq0pK25%2BC33xUvY8H6zouFNehQX5RjQnOd4UeQ55IedBjM1lbcl1Sv29F%2FbaJ5%2Fmz4DDIsovd4eOkeQtQHwmUNeMClZ59RcD%2BfvyoPpFusejyF3Bx8396lq1lKhxPCFtGfmmSBGVeP726XDUbbMZYk5ge0WzmNzQZRjiIlB8f0n3Z85SafoVUlGCrfZTxeOu53V6YvhUgwFQ4MzTXn0RytU9G2p0yBGv0R2GgmknejhqeD3X%2F%2FXBTfsm4pHdjVnZ6GM8QwAsLIsqvq6Ew8jhrv6a6LjuwHDHnUyUKgu6O5M8UWDlDF02oyqLT07I8i%2BooMWB1uKM3rbl7uld9Lpe1CK7jDv6brCBjqkAZxGvZ7LnulsaRjJ%2FkwktF0ec3c38A96vH5EulwbQXQuLAfnDKMEz8PKC1oRf4iAFkwkQyE2%2BbvCWcS0kQuEJvtgd4kMD9aqgGFCTC0uTD%2Fn6gQ5dGt%2FjMCdNRnp3AM6UzQ97KUGQVoINQpOIkKthh4XYTuneCpY7q4o3bvaZ67WOdpmph31rRE3U4mrpDHapPmSguVnywnK8T6zxiPShtIzzdyZ&X-Amz-Signature=95ddb9c866119136b83a1c65b59f03fedc77275139053e2c3a2e069cf2b6ebc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
