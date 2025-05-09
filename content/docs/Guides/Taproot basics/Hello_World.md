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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGHRJF5Z%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzH1ZhOE3EMSoSZSu%2BurmqCWllInAOzp1PUffscYRDpAiEA%2BpeVCJTJBIkd1X002raw7C5vcOTxya0eG%2FywAbUCdIUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRYGnxY77tyFs%2B1DircA1NNXoMdBJyPc%2FRa4OasjHN5NRtGPSSjVNETJBnDv4sk7yxLyZLqkKkfq7hTNHkwarNxlv2VNUbMdqQvO5rmIHDWdhm8TMIMFnq2igvrBsYNB3VBwrXI8EtIAec35sdpg2rtEGo25Q88klRVEz0EY%2BQsLnW7NDr2Ntn0V2rpWAc6gMv7rdMcyUWY5mvjUqyRY6LH3yyFjiy%2F%2BAFfjMbbwVComtNJls%2BKvx3XO1e3vduGTN8ASp4zvJ%2Fjzhxdabe084G2B9AiEftUgxANbyb%2F9%2BiMQowf0%2ByMK1tgcGfXphjzcrMXPCZr843x3%2BvCM%2BTAMyy5CPyBZhmWWIY1uDo%2BnlOMqLDiLsQDOKJFn7ybjfBM3YxfrRwftyqdDw7R313k7Y%2Btvu5ZgSQ2v8icc1v9l721GQ3uwM%2BFi4l6LsXTmoTHasoEM9lZrYFbGnS4UAXR9Z%2BDjX620Vcurtel45gjlLZ4aQyrVfjJ1MtZXLKm65B%2FzSs0FLgRbSwnegepmnFzoZK%2Fr7WyxLry0VillqCCM6F8E6j9TBWlX6BFPQHm59sD4fwHJBz7Ad5VdochJMkacBXej9d5%2BK1BDXBbea%2FfXb6B18Gh6O9XRCMQU7iB7wUCyqAIuzSNgrMPXQIRMIzw%2BMAGOqUButRDLkd%2FwqlnypCb6DuQgjVeaIBRNUAt0zf4aXNkFIpBZptsiUCRRebrmxGLld4C3aMkTI1whvUBA05B6Rrafo3XyHUqBPlyiVEhNXYCgknFp0flFe40yWk1ZBLR4iq1Htrt6BCevTIASYjSPmtVFgd%2F4M%2B0Gnh0BkSI6KBJ%2Bzu%2F2fXIkFMkq2e3%2BmZc7LSlRAWQ53l03urkPSw8PX8vle%2BuYk3C&X-Amz-Signature=aa8f4beffce7a628ceb8434cc85f2816d27a4db6b13d98785d7a49e33a840e62&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGHRJF5Z%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzH1ZhOE3EMSoSZSu%2BurmqCWllInAOzp1PUffscYRDpAiEA%2BpeVCJTJBIkd1X002raw7C5vcOTxya0eG%2FywAbUCdIUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRYGnxY77tyFs%2B1DircA1NNXoMdBJyPc%2FRa4OasjHN5NRtGPSSjVNETJBnDv4sk7yxLyZLqkKkfq7hTNHkwarNxlv2VNUbMdqQvO5rmIHDWdhm8TMIMFnq2igvrBsYNB3VBwrXI8EtIAec35sdpg2rtEGo25Q88klRVEz0EY%2BQsLnW7NDr2Ntn0V2rpWAc6gMv7rdMcyUWY5mvjUqyRY6LH3yyFjiy%2F%2BAFfjMbbwVComtNJls%2BKvx3XO1e3vduGTN8ASp4zvJ%2Fjzhxdabe084G2B9AiEftUgxANbyb%2F9%2BiMQowf0%2ByMK1tgcGfXphjzcrMXPCZr843x3%2BvCM%2BTAMyy5CPyBZhmWWIY1uDo%2BnlOMqLDiLsQDOKJFn7ybjfBM3YxfrRwftyqdDw7R313k7Y%2Btvu5ZgSQ2v8icc1v9l721GQ3uwM%2BFi4l6LsXTmoTHasoEM9lZrYFbGnS4UAXR9Z%2BDjX620Vcurtel45gjlLZ4aQyrVfjJ1MtZXLKm65B%2FzSs0FLgRbSwnegepmnFzoZK%2Fr7WyxLry0VillqCCM6F8E6j9TBWlX6BFPQHm59sD4fwHJBz7Ad5VdochJMkacBXej9d5%2BK1BDXBbea%2FfXb6B18Gh6O9XRCMQU7iB7wUCyqAIuzSNgrMPXQIRMIzw%2BMAGOqUButRDLkd%2FwqlnypCb6DuQgjVeaIBRNUAt0zf4aXNkFIpBZptsiUCRRebrmxGLld4C3aMkTI1whvUBA05B6Rrafo3XyHUqBPlyiVEhNXYCgknFp0flFe40yWk1ZBLR4iq1Htrt6BCevTIASYjSPmtVFgd%2F4M%2B0Gnh0BkSI6KBJ%2Bzu%2F2fXIkFMkq2e3%2BmZc7LSlRAWQ53l03urkPSw8PX8vle%2BuYk3C&X-Amz-Signature=76eaa5a9dce10c25a593459ce4d4235c8a07912d8d2be3c8a69fe5a40d6ab745&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
