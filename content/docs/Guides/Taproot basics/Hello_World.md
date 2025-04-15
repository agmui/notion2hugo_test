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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGCQKGOZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV04%2B5wDTQB3W82YPi7zuYuVNk7GGfjUxbcpyCy7jkQAiBB1gZj1GYQ%2FXhjaOTbfnsozxfm%2BOGz4pQG%2FAyGauynUCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMnPSE43MmnUvxXsc2KtwDQJ5Dazmcj6ha1Vl3fGQ5Dca9dPPUMFyJlHMWRtYsbnWSf6Xa%2BcfHppmORD46U2g5RkGo4JtYXHDUdCeX654C21ijthN%2Fer2tEVC6sqHkfJtiqtj8Ng%2B0IGqY58IZYeY0xGQy2rPGFTpWp4WU9cILhLiyBO76qy9Bu3dVRb2TBX1Fs7mZNo5jgu0qmMXtmMSgxsnmIV0F0TyWlHJ1p5a8%2Bj7Em7%2B7tRPagLlCt7t87iIVecXbdftDsfctCc%2F%2BBmZa4EhfUq30xb5UUzOEBjv4XZ%2BqM8s%2BkAP7OWLJGrNPFNoYNcIhMssUsoMszZGlP7y7Eb0o%2Byv0NktRDUmGQvgPI3Lo%2BsMU%2FTlaozYqPSy7HY6dvF7y6cQ4D%2BHtxA7g6O9L4UtnXGL2sqq%2Bblv7gqivDufF8fdalalqLVzyHWp%2B9aNUTae5rHWoDFXWUEFIC3v6oUAhPcfWk6RCka6i9CV3pedqiePAKg4t034KqQwKy962FCP49li88fAZS9QsT%2BPEpUPNGXYiWlSCRpA3X6RJ5vqCJXFp3FONqGb2XXtGLGVWgTb26kNCippcI2rsxhZd0wehTLJpE2HspP%2FnHRz%2FaBqdNOM6fjEzldoWcYxvQzPnTFczUpMyCEbjTs8wi4v5vwY6pgHIUBWmL2RRpN8p%2FgM5AZqo%2Fq5Q4FJMsws2YPHZY8pFDiTNOmzFv%2BxNRFjbhlcKeLNbt8QsCydgiqmaFZ%2FpKIHfpohYk%2B1jOYUciH57maajno%2BW2Q9IUd7ZnLPt%2F98Zq2hNBO2YUxZXnLLAPsXmj3Z7Q9koQCEO16OvylKA%2FO%2B98XZKWPdBFavplgl5kiwcSmzUFm0NRJJF%2FXjl8z%2Fuqm5IhtCVi39W&X-Amz-Signature=2eb4f02c54fb784e7bde08bd5721fd6f0dfde72b04ea5c90968bb8bc67255671&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGCQKGOZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV04%2B5wDTQB3W82YPi7zuYuVNk7GGfjUxbcpyCy7jkQAiBB1gZj1GYQ%2FXhjaOTbfnsozxfm%2BOGz4pQG%2FAyGauynUCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMnPSE43MmnUvxXsc2KtwDQJ5Dazmcj6ha1Vl3fGQ5Dca9dPPUMFyJlHMWRtYsbnWSf6Xa%2BcfHppmORD46U2g5RkGo4JtYXHDUdCeX654C21ijthN%2Fer2tEVC6sqHkfJtiqtj8Ng%2B0IGqY58IZYeY0xGQy2rPGFTpWp4WU9cILhLiyBO76qy9Bu3dVRb2TBX1Fs7mZNo5jgu0qmMXtmMSgxsnmIV0F0TyWlHJ1p5a8%2Bj7Em7%2B7tRPagLlCt7t87iIVecXbdftDsfctCc%2F%2BBmZa4EhfUq30xb5UUzOEBjv4XZ%2BqM8s%2BkAP7OWLJGrNPFNoYNcIhMssUsoMszZGlP7y7Eb0o%2Byv0NktRDUmGQvgPI3Lo%2BsMU%2FTlaozYqPSy7HY6dvF7y6cQ4D%2BHtxA7g6O9L4UtnXGL2sqq%2Bblv7gqivDufF8fdalalqLVzyHWp%2B9aNUTae5rHWoDFXWUEFIC3v6oUAhPcfWk6RCka6i9CV3pedqiePAKg4t034KqQwKy962FCP49li88fAZS9QsT%2BPEpUPNGXYiWlSCRpA3X6RJ5vqCJXFp3FONqGb2XXtGLGVWgTb26kNCippcI2rsxhZd0wehTLJpE2HspP%2FnHRz%2FaBqdNOM6fjEzldoWcYxvQzPnTFczUpMyCEbjTs8wi4v5vwY6pgHIUBWmL2RRpN8p%2FgM5AZqo%2Fq5Q4FJMsws2YPHZY8pFDiTNOmzFv%2BxNRFjbhlcKeLNbt8QsCydgiqmaFZ%2FpKIHfpohYk%2B1jOYUciH57maajno%2BW2Q9IUd7ZnLPt%2F98Zq2hNBO2YUxZXnLLAPsXmj3Z7Q9koQCEO16OvylKA%2FO%2B98XZKWPdBFavplgl5kiwcSmzUFm0NRJJF%2FXjl8z%2Fuqm5IhtCVi39W&X-Amz-Signature=71a91683e0c537f885ddcbdf5bef25e44edf61a247d55be619fcef93a9c18494&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
