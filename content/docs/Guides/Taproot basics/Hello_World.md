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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UILT5FE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFsVcj7hAcWsHwpVMu7PEDicGmarFcMKKWy20%2FrrIx5fAiBLdMn99dcWFDOJ1gjB9x1tdCoB4zASBBO%2BocNQGBzExCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM9fZkQdx2SRm%2B8VGeKtwDN3mMKuqf5LjUY%2B2DY6SlMW5jhte3vACxMcXd7w%2BCKjukoiXsoOT3yE%2F69PPiSDjygCJtKk2hUNg7ecnQStGyL38q3oRpSH4MLgz%2FPNUT%2BsX%2Fc6ZGX4xilVqzOyYFwddyI1FwmW8j%2FtT9BCa8ndb8YlvJN20WXGO7tldBGdd95vy35ZaZl4MvddS%2BhQCH9Nyu5nZIDU2YrutlyHRralwfTmhTUOTiXnsYC2RkSA4IkajayVqCvMbwMTxPR0sqVrOtk9zonEbfXlw85BK1aZ1SjViQwdPEsLMN%2BXMUrQZcKinL%2BmgtKdhpiik1BUxhXFf%2B4GQ6beboUZ0iucM5EHT0bcxPSmYDUMI6w0iEGobVFpTTh9rJCkRaBmD8CknEc6Mrgs3T1PGQ3ybJiERLGIAYkaTLSDdZKT%2BtBL1y%2FB%2BVz4t7hJum6iaPqV2wP8I5EfN4PupiIRFyZgxA27Nobnz4XomAmQR%2BSIHsyGE3H7P0N86uLO3zDCCcOZNZU1rojmde2qY50v2YLDVmVeps%2BT2DkWaAf9SOz6VWzOHww4OUoAcU5HxdA4oiYOauT6OvBk2xPTB7n6VTu63vFhef26cS10Hdva6J0JR1h4G50g9uVfpwy%2FQELD2J5I1j7EMw1YT2wgY6pgESBZArctYy%2FHR23Luu%2BMOatG5Gf1mtth1TsKYn6vViBO6D5z2rDj%2FXhmo9PLuGPJbwAhiPl090AlgzTeJQhY79gri5y89l%2FPNE0%2BEnE0wCU837RMFZFfpwtlKIrahH4lQVMi2%2Bf2XksD3pAx4BsVQFl%2Bq%2BbryDFTpLRHoQAUJtTm%2Bou5zCqdHjtmtbpmE%2BnyG%2BY%2FX4XSuvAaw691f3pZGtVD0h9cP9&X-Amz-Signature=ea8201e96f902c6329f3201eb4dff08aa9ded609b1c199d65d2310b32015e704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UILT5FE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIFsVcj7hAcWsHwpVMu7PEDicGmarFcMKKWy20%2FrrIx5fAiBLdMn99dcWFDOJ1gjB9x1tdCoB4zASBBO%2BocNQGBzExCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM9fZkQdx2SRm%2B8VGeKtwDN3mMKuqf5LjUY%2B2DY6SlMW5jhte3vACxMcXd7w%2BCKjukoiXsoOT3yE%2F69PPiSDjygCJtKk2hUNg7ecnQStGyL38q3oRpSH4MLgz%2FPNUT%2BsX%2Fc6ZGX4xilVqzOyYFwddyI1FwmW8j%2FtT9BCa8ndb8YlvJN20WXGO7tldBGdd95vy35ZaZl4MvddS%2BhQCH9Nyu5nZIDU2YrutlyHRralwfTmhTUOTiXnsYC2RkSA4IkajayVqCvMbwMTxPR0sqVrOtk9zonEbfXlw85BK1aZ1SjViQwdPEsLMN%2BXMUrQZcKinL%2BmgtKdhpiik1BUxhXFf%2B4GQ6beboUZ0iucM5EHT0bcxPSmYDUMI6w0iEGobVFpTTh9rJCkRaBmD8CknEc6Mrgs3T1PGQ3ybJiERLGIAYkaTLSDdZKT%2BtBL1y%2FB%2BVz4t7hJum6iaPqV2wP8I5EfN4PupiIRFyZgxA27Nobnz4XomAmQR%2BSIHsyGE3H7P0N86uLO3zDCCcOZNZU1rojmde2qY50v2YLDVmVeps%2BT2DkWaAf9SOz6VWzOHww4OUoAcU5HxdA4oiYOauT6OvBk2xPTB7n6VTu63vFhef26cS10Hdva6J0JR1h4G50g9uVfpwy%2FQELD2J5I1j7EMw1YT2wgY6pgESBZArctYy%2FHR23Luu%2BMOatG5Gf1mtth1TsKYn6vViBO6D5z2rDj%2FXhmo9PLuGPJbwAhiPl090AlgzTeJQhY79gri5y89l%2FPNE0%2BEnE0wCU837RMFZFfpwtlKIrahH4lQVMi2%2Bf2XksD3pAx4BsVQFl%2Bq%2BbryDFTpLRHoQAUJtTm%2Bou5zCqdHjtmtbpmE%2BnyG%2BY%2FX4XSuvAaw691f3pZGtVD0h9cP9&X-Amz-Signature=15ea6b4cb414c44fce05a3228fedcdf94b14928f9d0edf66fbbec40dbbdd14b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
