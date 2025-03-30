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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T74MBCIN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAvikAB4xUeKHcytedFetpxh6QwrA9BWLCmmY%2FFbYsU%2FAiEApTDaVyaZwt4oWjPFzxGFj8SCnJVXVl2FU29qq8ns5agqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcD6KmfTJmOX8yNIircA3rfEPnCFKuvxihEiqo1wGCrwJtrSpxXPN9t71Wch%2F7w%2B6WtKROKuwAj%2B1N9g765srpxRJtwsVIBcmZFhiR1rrB%2B%2FI5ZJTew5hmIF9AuyyQAjbINVLSAkJDRILbwe%2F%2B4MRG04PswY6v%2Frl2ue8g0F%2Bo72oSMy9mMtbPXoouXCKjf9J3NUz7YvdDR6QV%2B60fhaLxKjQYH5D8%2FZudgwFwUuSZ1rRvfUW%2B8gOzttIX69QYcUQP1z7PKmmYCPl9J47hAvQIJ6JA1UzuDfN0WBtPDJLJ8hzVnNVr53Q4bqZM7197He%2BiY7g9r6jCT3I%2B1YXAcbr8cjkK8HE43gUA7b%2FAWSyYrAWvbq%2BA4lKWRtNN85faS7rRkMnkp2ROp2xQGOQiq7tdADJtu%2BMNv0yrcDdzx2y1fuE8p1UmpO4%2BIsu0EPQ48Xnp56EmYYeuncLVEZjuoTtPW%2B65W7YEcFHcngm6s0JmGgiM3mV2cxhTrC6KOESjOTXuPH%2BKYOEnJ%2BeDaYPEmUCEw4%2FaN9X4DLe1MlFOquXoanEy%2FpuETBGhxoAXAIFLK5AwV0OAIt%2Fjg5LBcOO4GUdswUIGmwXVZlKJuGHcNHlswo%2FbtUeunLSC%2BM3ZSlhnau0pmSv0G%2FqVanfobMO%2Fpor8GOqUBMG0GkTgNbyvvCmaojMxREXNJaDG3DPibSHzIt5REl2yn%2FONNocTrsPAXMVuEb0zUYNu0ClwGGpLb6ZXdRmfEqWRDySLfo0MPQERT7OzQFlE98K8z84bxMFjI12QvRImm3Y%2FRbGdn7R7inng5tT%2BrlETRcdTyUe2u8UXbbN8KP3GEtONk2%2F9gXc%2FcI0ScGCAS1HRJlnx8VXjOo14lN4WEBkqkSn7i&X-Amz-Signature=4d525b6697dba68da94ac59cc5c4ec0686ecedc26e23b1e2685d263cb120e647&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T74MBCIN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAvikAB4xUeKHcytedFetpxh6QwrA9BWLCmmY%2FFbYsU%2FAiEApTDaVyaZwt4oWjPFzxGFj8SCnJVXVl2FU29qq8ns5agqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcD6KmfTJmOX8yNIircA3rfEPnCFKuvxihEiqo1wGCrwJtrSpxXPN9t71Wch%2F7w%2B6WtKROKuwAj%2B1N9g765srpxRJtwsVIBcmZFhiR1rrB%2B%2FI5ZJTew5hmIF9AuyyQAjbINVLSAkJDRILbwe%2F%2B4MRG04PswY6v%2Frl2ue8g0F%2Bo72oSMy9mMtbPXoouXCKjf9J3NUz7YvdDR6QV%2B60fhaLxKjQYH5D8%2FZudgwFwUuSZ1rRvfUW%2B8gOzttIX69QYcUQP1z7PKmmYCPl9J47hAvQIJ6JA1UzuDfN0WBtPDJLJ8hzVnNVr53Q4bqZM7197He%2BiY7g9r6jCT3I%2B1YXAcbr8cjkK8HE43gUA7b%2FAWSyYrAWvbq%2BA4lKWRtNN85faS7rRkMnkp2ROp2xQGOQiq7tdADJtu%2BMNv0yrcDdzx2y1fuE8p1UmpO4%2BIsu0EPQ48Xnp56EmYYeuncLVEZjuoTtPW%2B65W7YEcFHcngm6s0JmGgiM3mV2cxhTrC6KOESjOTXuPH%2BKYOEnJ%2BeDaYPEmUCEw4%2FaN9X4DLe1MlFOquXoanEy%2FpuETBGhxoAXAIFLK5AwV0OAIt%2Fjg5LBcOO4GUdswUIGmwXVZlKJuGHcNHlswo%2FbtUeunLSC%2BM3ZSlhnau0pmSv0G%2FqVanfobMO%2Fpor8GOqUBMG0GkTgNbyvvCmaojMxREXNJaDG3DPibSHzIt5REl2yn%2FONNocTrsPAXMVuEb0zUYNu0ClwGGpLb6ZXdRmfEqWRDySLfo0MPQERT7OzQFlE98K8z84bxMFjI12QvRImm3Y%2FRbGdn7R7inng5tT%2BrlETRcdTyUe2u8UXbbN8KP3GEtONk2%2F9gXc%2FcI0ScGCAS1HRJlnx8VXjOo14lN4WEBkqkSn7i&X-Amz-Signature=e1c8f9a5bd7238c5ac336aba415514ce253a0fc9c46a48f0a37c962a667211aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
