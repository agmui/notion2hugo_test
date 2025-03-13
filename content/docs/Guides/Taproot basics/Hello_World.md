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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FYKEVG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFvXyE0Uuc3bzFoXDr9Y4rK3T7GlBJLI5QWCCs0076iAiEA7fJ2Ew%2ByqVp4F36X1PnwJkN%2FBbFUk567lGyY0STd6h8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfAPUBE%2BAF1WV2bjSrcA2GfsG6mD5ypVDAzSmERx4G70t9S9xYb0yZRswSIxieDFjv%2F9I4i9ogxxby%2FLFAzifhXAbS%2BHyKEUKgo418Tx0tbtjGu64DFTMQG9steA91FgaDpce6bGi9ZqLcbtd%2Fv6rlVadHS37FhPM%2FbvLAXb9K48IrfZEARlcw90t1FoX1oxJnvjYoKimB2P6P8BpFR9qNtNDa%2F5sJt%2Bt4MzUqcVMUPAtrC%2FgQv2zZHnsLpJtf6%2FyONgmynUTYS%2FSNh3lfBwJPZ0rO6Gs5zzayGgYCWdz7d3BxKUM5YoIaxVdX5UdL%2BEecC%2FhORc8dyS22hJ%2Fz%2BsYT1vx0MxUYD3k0ss%2BEAXukCk%2Bxuxl41lq9K8eD9dFRjF2wIYOfp6P83FpxLOCTgNLQzeeY4l4sLXI5MnTzHFSdUSEZ7f9Ee8j0N787vZoSwYdYRTynLnf6cqxnncL3OB0jwJmk4K8iFlSBtATFzeLzl5NSjKNf3PdqU7EjDnhEl5v3YhPFerQocfkkGrOFGZSvpF9hKI4N8wDAem%2F2mGNXiBGaHv6n%2BzyYKdz0JuWt8ygTLD3wqsNzLcj%2Fe%2FClIrut6WENHa0lajqkQvCA0%2FVl0aSHwV2te0asJ8GvNVtccBeXIVEXVPFcDzaWPMIjWzL4GOqUBHf5w1RoKFgvi5oWWruUs%2BEYybVbKQR4ASZYbf88ojPY1iuqKYlkBpNwdTCaJ9ZG7SDZyeDUOMls3TAPi2eDc%2FAPE3k211KJOWCPIUVU61oeW9ARN6b5ZXNIKfxs%2BZ0kpQCb3SQ5qzrHO42uf6w6l812hAB28%2Bd1FqT6Kx6GYhX9In1SKUPSicjJVQthj69V%2BHHbASDsBAohchKxwOmnOzVb%2F%2BSL0&X-Amz-Signature=f44d1cc08719366e286d84ff1ae58a1105335fba8434d03bcd193906789aebd8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FYKEVG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFvXyE0Uuc3bzFoXDr9Y4rK3T7GlBJLI5QWCCs0076iAiEA7fJ2Ew%2ByqVp4F36X1PnwJkN%2FBbFUk567lGyY0STd6h8qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfAPUBE%2BAF1WV2bjSrcA2GfsG6mD5ypVDAzSmERx4G70t9S9xYb0yZRswSIxieDFjv%2F9I4i9ogxxby%2FLFAzifhXAbS%2BHyKEUKgo418Tx0tbtjGu64DFTMQG9steA91FgaDpce6bGi9ZqLcbtd%2Fv6rlVadHS37FhPM%2FbvLAXb9K48IrfZEARlcw90t1FoX1oxJnvjYoKimB2P6P8BpFR9qNtNDa%2F5sJt%2Bt4MzUqcVMUPAtrC%2FgQv2zZHnsLpJtf6%2FyONgmynUTYS%2FSNh3lfBwJPZ0rO6Gs5zzayGgYCWdz7d3BxKUM5YoIaxVdX5UdL%2BEecC%2FhORc8dyS22hJ%2Fz%2BsYT1vx0MxUYD3k0ss%2BEAXukCk%2Bxuxl41lq9K8eD9dFRjF2wIYOfp6P83FpxLOCTgNLQzeeY4l4sLXI5MnTzHFSdUSEZ7f9Ee8j0N787vZoSwYdYRTynLnf6cqxnncL3OB0jwJmk4K8iFlSBtATFzeLzl5NSjKNf3PdqU7EjDnhEl5v3YhPFerQocfkkGrOFGZSvpF9hKI4N8wDAem%2F2mGNXiBGaHv6n%2BzyYKdz0JuWt8ygTLD3wqsNzLcj%2Fe%2FClIrut6WENHa0lajqkQvCA0%2FVl0aSHwV2te0asJ8GvNVtccBeXIVEXVPFcDzaWPMIjWzL4GOqUBHf5w1RoKFgvi5oWWruUs%2BEYybVbKQR4ASZYbf88ojPY1iuqKYlkBpNwdTCaJ9ZG7SDZyeDUOMls3TAPi2eDc%2FAPE3k211KJOWCPIUVU61oeW9ARN6b5ZXNIKfxs%2BZ0kpQCb3SQ5qzrHO42uf6w6l812hAB28%2Bd1FqT6Kx6GYhX9In1SKUPSicjJVQthj69V%2BHHbASDsBAohchKxwOmnOzVb%2F%2BSL0&X-Amz-Signature=a8fc0a8912e26c3a36822c49847d260de7d2a875c455bfac3c16b7465b3423cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
