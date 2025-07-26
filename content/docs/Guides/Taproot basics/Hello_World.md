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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCKV7TP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID45qHxsLcOWqH8qjA%2Bo7FuHrXzWJPvC%2FNx0kY9e%2FcvQAiEAsKzt%2BgG21hj51vnLvCgbuAQ60O7uZGdQ%2FJGFYzGNgLkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM8u30bm42zmyyAZCyrcA1gpDM28IyJ8W8cgHqPg2vbdgctRamVjjTbW1EdoMGEAFCEeSfNaV3apv1jHUPLQgrZTHdIIkXsjX9mREWnYKZAKsVWj5bniyI7zI%2FDBxxj%2FQzN%2BpPRZpa%2Fm0%2BurMyfHpv4JcIYrFnB1w2cDVi5R6ADGwqeojHLWXn9Y%2BRSkZgBx6i1cMNWM2x16vZNqzG4xRIWAwaeIg8%2FhItVAxSjINpXjbpLKxqr0jiZ7yw3I%2FrbXjIHyhoSD5V9ee8eFZHT7hdAgRgzSA4JkVFT%2Bzwkw%2BXg7Jc1IZEBLfwT0ZdESkAMeb%2FomGs60AeJ69znSx2%2F%2FATHzlNMNAKBeRt2P9%2BdPW9aGcuZ0ESW2SFbGEhBPFGaFj49EIIWS%2BloQg5fHtcIfBsWYgOX%2FApKWQO5EvSQANA02ZBN1R%2BdHVNbAohq5tjr24b1jl1Ls6LRtq3zhjZx8tkhgg0J8ICA2UOPEcPMDRbSxyZGBPcnqCEB58CozsH2TsK5NJPEBQFlddLi6%2Bm4tN4%2Flo%2BBonnzaYveaZuiy15XMsbHzudqen4yTyHu7ru6wL48%2FzZW8eelwGLkIkZBK6MfFTyoG29Oj03icAX%2Fu4munFCSv1J9c40RxEyWO74wwszweb0pQIkkFD%2F0xMPf5ksQGOqUBxOgFMPpOsH8dZiNnHCFO0AbNVhTF5Oqtc9YeRWX8uyiB3%2B%2BZVQ9kIRvrB%2BURHXpp2oeYAsYprHysEWTIT0UNtOSlSXq7FyeuMn2xbWQdSGF5pomVmJqVJ1HGIg7EOIcx0LLZIVShKdz%2FoZH9rLNWTyisRkHkiNYQLtdwXetT1XuGCgeIAOHT6SziqhKmaqPXRqHF5fGBUipvcdjkYTCFR6j1XgBF&X-Amz-Signature=75bdb1b8548234e2cf2b39a6a64e6807fe4d601a95b0992f017aa4a79b2865d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCKV7TP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCID45qHxsLcOWqH8qjA%2Bo7FuHrXzWJPvC%2FNx0kY9e%2FcvQAiEAsKzt%2BgG21hj51vnLvCgbuAQ60O7uZGdQ%2FJGFYzGNgLkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM8u30bm42zmyyAZCyrcA1gpDM28IyJ8W8cgHqPg2vbdgctRamVjjTbW1EdoMGEAFCEeSfNaV3apv1jHUPLQgrZTHdIIkXsjX9mREWnYKZAKsVWj5bniyI7zI%2FDBxxj%2FQzN%2BpPRZpa%2Fm0%2BurMyfHpv4JcIYrFnB1w2cDVi5R6ADGwqeojHLWXn9Y%2BRSkZgBx6i1cMNWM2x16vZNqzG4xRIWAwaeIg8%2FhItVAxSjINpXjbpLKxqr0jiZ7yw3I%2FrbXjIHyhoSD5V9ee8eFZHT7hdAgRgzSA4JkVFT%2Bzwkw%2BXg7Jc1IZEBLfwT0ZdESkAMeb%2FomGs60AeJ69znSx2%2F%2FATHzlNMNAKBeRt2P9%2BdPW9aGcuZ0ESW2SFbGEhBPFGaFj49EIIWS%2BloQg5fHtcIfBsWYgOX%2FApKWQO5EvSQANA02ZBN1R%2BdHVNbAohq5tjr24b1jl1Ls6LRtq3zhjZx8tkhgg0J8ICA2UOPEcPMDRbSxyZGBPcnqCEB58CozsH2TsK5NJPEBQFlddLi6%2Bm4tN4%2Flo%2BBonnzaYveaZuiy15XMsbHzudqen4yTyHu7ru6wL48%2FzZW8eelwGLkIkZBK6MfFTyoG29Oj03icAX%2Fu4munFCSv1J9c40RxEyWO74wwszweb0pQIkkFD%2F0xMPf5ksQGOqUBxOgFMPpOsH8dZiNnHCFO0AbNVhTF5Oqtc9YeRWX8uyiB3%2B%2BZVQ9kIRvrB%2BURHXpp2oeYAsYprHysEWTIT0UNtOSlSXq7FyeuMn2xbWQdSGF5pomVmJqVJ1HGIg7EOIcx0LLZIVShKdz%2FoZH9rLNWTyisRkHkiNYQLtdwXetT1XuGCgeIAOHT6SziqhKmaqPXRqHF5fGBUipvcdjkYTCFR6j1XgBF&X-Amz-Signature=125e271086b8948e958d257955851641921a5079cdac2cb8295e9e3e94ae0d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
