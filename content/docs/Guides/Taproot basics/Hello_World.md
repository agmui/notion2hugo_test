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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFEKDTM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyse931BoYKQcvqDh%2Bu0QOr7DBeYjouSLkcm%2FiWz%2FN2QIgU9cGSA7UF0cd%2FcD9QuNz1pM8zrPvDeLnbtw5ayJMi7AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0tnzqvL3f%2FWQPYvSrcAzX0TGUEBlEURDwdfc3PZpMassqfHUAxxSHAI9%2Fitg%2BpdJ1K9b9yGprkn%2BwuB7CkPBBcXJjRjYLcjh%2B%2FDanGT8CJfa%2BQKum37h5S7n8FRt85wcWcs8sUWopxpkgjp8JkOJd4pwVr0jd6bjMmMikWqdBwSJO5XYzP%2F2%2FeqX2i8DjLUeaU5Vg1GXupx1stQE6tDc%2BwIRFAQhKwacfg78WU9DHRr1f3UfaC4%2B5fCrEvJ4cPf27d3gR72h5hkujpaeMRQm333arGbzGZYA0yiBCgQjwrmSMWwHHwB6BUmdcgrpbHZm9Wf1kIoju873yjVp8vosdgNW6hFzi7F%2BX9mgv1A1m3NeI1PDUXFSdhmV70SmF8W5DXRHNnTFdZ0lAdaMTUztQNU38uA8iQ33l65Z2NVSvUL1nnQY9MhVlP6dxyLUyJn9K81YSpW2YvHCahIp8yeFgmPmMQRLEFAmcOHoVKpDk%2BMtN%2FZXf%2Bni%2FqUcKdzDuhT4Fx1GHvEZigULJg%2FSFLlDqgC9V%2FqUjvC316D2fsURjtITJP9lyDVSwsN47HnMWKKefn5rY5guR7G4zBomV3GgkmlPNPfMNjLwbwvuqmtMamn74B2dEaf12r2ddr8PHE5zrWnEkVYqadDVCCMKyjycIGOqUBdMcEqwCXumjDpHjdabz0qTr23c5hTXMBiW2j6axQo5Vw42Rao9aDvJ7aR9ILcEX5d3BdMmUsTHx1mRbMaCmmCMgXT6AaiA%2BkO6Hiwuse0W6ucMByG4lVZlsPIYpMGVz1CYqHEues%2B6TDjT9WpwdCx0EWKsX0vFrk9UJ0gWcTUj6qx7%2FIzDMmfIdMN7fGlg%2BRm9zw14oPyU2mwyXFbDW31QmtDiMK&X-Amz-Signature=76070d21dd03744e1b27a46433d41f668fcab737d19760c7b5bee952443f729c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFEKDTM%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyse931BoYKQcvqDh%2Bu0QOr7DBeYjouSLkcm%2FiWz%2FN2QIgU9cGSA7UF0cd%2FcD9QuNz1pM8zrPvDeLnbtw5ayJMi7AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0tnzqvL3f%2FWQPYvSrcAzX0TGUEBlEURDwdfc3PZpMassqfHUAxxSHAI9%2Fitg%2BpdJ1K9b9yGprkn%2BwuB7CkPBBcXJjRjYLcjh%2B%2FDanGT8CJfa%2BQKum37h5S7n8FRt85wcWcs8sUWopxpkgjp8JkOJd4pwVr0jd6bjMmMikWqdBwSJO5XYzP%2F2%2FeqX2i8DjLUeaU5Vg1GXupx1stQE6tDc%2BwIRFAQhKwacfg78WU9DHRr1f3UfaC4%2B5fCrEvJ4cPf27d3gR72h5hkujpaeMRQm333arGbzGZYA0yiBCgQjwrmSMWwHHwB6BUmdcgrpbHZm9Wf1kIoju873yjVp8vosdgNW6hFzi7F%2BX9mgv1A1m3NeI1PDUXFSdhmV70SmF8W5DXRHNnTFdZ0lAdaMTUztQNU38uA8iQ33l65Z2NVSvUL1nnQY9MhVlP6dxyLUyJn9K81YSpW2YvHCahIp8yeFgmPmMQRLEFAmcOHoVKpDk%2BMtN%2FZXf%2Bni%2FqUcKdzDuhT4Fx1GHvEZigULJg%2FSFLlDqgC9V%2FqUjvC316D2fsURjtITJP9lyDVSwsN47HnMWKKefn5rY5guR7G4zBomV3GgkmlPNPfMNjLwbwvuqmtMamn74B2dEaf12r2ddr8PHE5zrWnEkVYqadDVCCMKyjycIGOqUBdMcEqwCXumjDpHjdabz0qTr23c5hTXMBiW2j6axQo5Vw42Rao9aDvJ7aR9ILcEX5d3BdMmUsTHx1mRbMaCmmCMgXT6AaiA%2BkO6Hiwuse0W6ucMByG4lVZlsPIYpMGVz1CYqHEues%2B6TDjT9WpwdCx0EWKsX0vFrk9UJ0gWcTUj6qx7%2FIzDMmfIdMN7fGlg%2BRm9zw14oPyU2mwyXFbDW31QmtDiMK&X-Amz-Signature=57d3c2700eeae275d1b46317bcba857cfe41026ba006eca0d9998593147445e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
