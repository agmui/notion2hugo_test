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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4EUJCZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDYvS0Qkd6rcdZS%2FHUrDCH%2B0ppRTL8K%2BDnxGZBJ0RD7agIhAMh3trmrR2OadktzKKCCrg1HufiH62AWR%2BBykntDGvLNKv8DCBEQABoMNjM3NDIzMTgzODA1IgwBmgvFP3F2kR5SJ3Mq3APZqkSAcJa4pxYtg8txnPkmpH%2BviOITDVn2eIRpPNQLCjkuuDXapZrEL%2BnVGF12stzV0voxuvXdfLMrx5xA3kXmqeIi9Bn59dQRAaz7oZswV5Dqy1xS2nICioACYM3R1KCj8gX5EZ8jc2LLNY8aUlF8fzWzsiMCx18qbAfOhosOI2W4sXna2H9AK9uq7sXJfebQ8lbB%2BeLrFpV3JuPKuXcmtLd0h%2FNOW%2Bei5KjwSvcPxN7Fhcr2ZqcNGwa51NfBg%2FwqWb%2Bt1Fo3TV%2BrWtkhe80G1c1EtNEiSFDcrbF0gKZCfJ43kOXFmJXOJ00J52xgNHbVlOkgQGW95YDKYvo9UPqWC8Xtlky3kLPkeSP%2BB1tRFqYjxqyJyz97gXJLt372Ok3mX%2BfPQYtLPTyaevWpeYybFkmh3ZlKFwDbKSv9yhLxniq2pXEj7f4Vvk8RUyutyYXE3PwSDnkoY9ZlQAsArEpyLoxtbEN1LtA2VowmiRLrYvX8E4BPwT8RK3WOXnYdKPUbrXzV3oDTOUrNPsg0YavN358bbZM6dRf88BxxdY2Ummz3kuLH2z%2Ffs47lx0Efa1k6Q22QVeaWphJJvQTXYO0ss1ZsDrCe7hZf4lhoEpI8l28Sclbx4iG%2BCgixMzDOnZHBBjqkASClbHmvYyHwuv9nyFtAxmiKT7tSBb4jWdcYm0jPlQDbaW4wqCm%2B6nCaWqxFC%2BDfD0WZTt6rxj7aFP7e0LVhZEwc3vxXdCyvl3g75Jh%2Fee19NQAg1HPbMQ8L%2F%2BfwJvhrs8n73ROOtn9yMQ1Dcn38kocLri8oBjm%2B0%2Fcn%2FnQ%2BFtJD1rrORsB%2F3b6cCTYvR48N9plh%2FSkmjoGlVP8LuOdrGPyepqJt&X-Amz-Signature=cca4603f72146fd7e2c21386bded8b9ced0a3880fd78a2c61e51cc5d97e1fe3e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4EUJCZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDYvS0Qkd6rcdZS%2FHUrDCH%2B0ppRTL8K%2BDnxGZBJ0RD7agIhAMh3trmrR2OadktzKKCCrg1HufiH62AWR%2BBykntDGvLNKv8DCBEQABoMNjM3NDIzMTgzODA1IgwBmgvFP3F2kR5SJ3Mq3APZqkSAcJa4pxYtg8txnPkmpH%2BviOITDVn2eIRpPNQLCjkuuDXapZrEL%2BnVGF12stzV0voxuvXdfLMrx5xA3kXmqeIi9Bn59dQRAaz7oZswV5Dqy1xS2nICioACYM3R1KCj8gX5EZ8jc2LLNY8aUlF8fzWzsiMCx18qbAfOhosOI2W4sXna2H9AK9uq7sXJfebQ8lbB%2BeLrFpV3JuPKuXcmtLd0h%2FNOW%2Bei5KjwSvcPxN7Fhcr2ZqcNGwa51NfBg%2FwqWb%2Bt1Fo3TV%2BrWtkhe80G1c1EtNEiSFDcrbF0gKZCfJ43kOXFmJXOJ00J52xgNHbVlOkgQGW95YDKYvo9UPqWC8Xtlky3kLPkeSP%2BB1tRFqYjxqyJyz97gXJLt372Ok3mX%2BfPQYtLPTyaevWpeYybFkmh3ZlKFwDbKSv9yhLxniq2pXEj7f4Vvk8RUyutyYXE3PwSDnkoY9ZlQAsArEpyLoxtbEN1LtA2VowmiRLrYvX8E4BPwT8RK3WOXnYdKPUbrXzV3oDTOUrNPsg0YavN358bbZM6dRf88BxxdY2Ummz3kuLH2z%2Ffs47lx0Efa1k6Q22QVeaWphJJvQTXYO0ss1ZsDrCe7hZf4lhoEpI8l28Sclbx4iG%2BCgixMzDOnZHBBjqkASClbHmvYyHwuv9nyFtAxmiKT7tSBb4jWdcYm0jPlQDbaW4wqCm%2B6nCaWqxFC%2BDfD0WZTt6rxj7aFP7e0LVhZEwc3vxXdCyvl3g75Jh%2Fee19NQAg1HPbMQ8L%2F%2BfwJvhrs8n73ROOtn9yMQ1Dcn38kocLri8oBjm%2B0%2Fcn%2FnQ%2BFtJD1rrORsB%2F3b6cCTYvR48N9plh%2FSkmjoGlVP8LuOdrGPyepqJt&X-Amz-Signature=9ef0dabdf3c2a7e3fb4b4e26386e388c8034e823f317482d8d91d56b5ba8602c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
