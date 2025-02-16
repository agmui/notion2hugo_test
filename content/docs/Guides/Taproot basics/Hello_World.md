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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJ37EDF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQC56hvqx41K5A1Lv%2BFDnxQCwcr7Y%2F5d18MBzw%2B%2FwmrCVAIhAOuA7bunvn5RDgfZwxTKVokgpy5aH%2BcELrkAOCABiyeYKv8DCGcQABoMNjM3NDIzMTgzODA1IgwdaEz1AbmVlRG0JPUq3AOnat0dheUq7YughYJeMQSpEH1APkZ%2F7Gvss5HyqneTT85K8usRU%2B8FDhv%2BHLhNz%2F2nIy6umJUo%2ByWJu6ATD0qMvUesp5whiBhI%2Ba5wc1E2ZXExNUpojMh87M2ldVtQLJdNE%2FhFnyFXcCfzk1xpXJV5JmtMl1CrNPTf5vvQTzGm3CF4VRrnJyEcnWmBFiwRBeijn%2FPfs6hOqxpM94Gv2OsAI6nRVTpId%2FW04WvxnY7zDYYFs7CeIDnpsUb9AayBQj%2BSzf0y15KNUmBc9YhtxSNaCQvNY7Ey1qWXqrimXkYGH%2BJFVaq1VNTDeRUR%2FvheYumA7BAwxtHYtUJpQWwusmsyO6ND0xrTzpX2ntMRD8Ucvz2iCheUiHF2m%2BMHZzW7YkJ4r3PExxK%2FtP%2BUQILustQYydsRcqNqVCBPUb3FBLpIoMH9ckChlH%2BLnM3d2Yiq3H3iftdCIHMlV7edoqkIdvmOx33ANfeATv2Yr3B74UHtF2d0LyKuPQRBPAWdpkNQJsslbFFdVFTe%2B7Yi9MLBdPcIpcDutLcxsmHN%2FvnEBKJZoCXZxdZluMgcMqoFscb2yfs8anmA0EcPpmk7ArDMFcPIYbjW%2BCyoWEclAksZ6lO%2FoAwbhWPKtpRFPDPppjDiyMm9BjqkAVHA63cUjG3E5f%2FMKtXrPPWY9U9xKW%2F79tCEx0DxnH5c2jSDb4280O0ZpEW4UWbzCqJGo6lzyXsrrCSgj2TlDRw%2BtNSR3dL9iOwOMCfgrSJBg7nFT%2FRwsVmJnEUFUfZ85SHfarEk5pinNfqSIKTiKzUe42gHoe3oTTaVr9ntVVVaT3NDocah6293savLPmAEZzK%2BFA2XyJYFdn9KBuQYl3b9A3yj&X-Amz-Signature=c29d8d510b818083c29631b4958c5278b24e6cb0797a11bce1da6a8298f07d10&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKJ37EDF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQC56hvqx41K5A1Lv%2BFDnxQCwcr7Y%2F5d18MBzw%2B%2FwmrCVAIhAOuA7bunvn5RDgfZwxTKVokgpy5aH%2BcELrkAOCABiyeYKv8DCGcQABoMNjM3NDIzMTgzODA1IgwdaEz1AbmVlRG0JPUq3AOnat0dheUq7YughYJeMQSpEH1APkZ%2F7Gvss5HyqneTT85K8usRU%2B8FDhv%2BHLhNz%2F2nIy6umJUo%2ByWJu6ATD0qMvUesp5whiBhI%2Ba5wc1E2ZXExNUpojMh87M2ldVtQLJdNE%2FhFnyFXcCfzk1xpXJV5JmtMl1CrNPTf5vvQTzGm3CF4VRrnJyEcnWmBFiwRBeijn%2FPfs6hOqxpM94Gv2OsAI6nRVTpId%2FW04WvxnY7zDYYFs7CeIDnpsUb9AayBQj%2BSzf0y15KNUmBc9YhtxSNaCQvNY7Ey1qWXqrimXkYGH%2BJFVaq1VNTDeRUR%2FvheYumA7BAwxtHYtUJpQWwusmsyO6ND0xrTzpX2ntMRD8Ucvz2iCheUiHF2m%2BMHZzW7YkJ4r3PExxK%2FtP%2BUQILustQYydsRcqNqVCBPUb3FBLpIoMH9ckChlH%2BLnM3d2Yiq3H3iftdCIHMlV7edoqkIdvmOx33ANfeATv2Yr3B74UHtF2d0LyKuPQRBPAWdpkNQJsslbFFdVFTe%2B7Yi9MLBdPcIpcDutLcxsmHN%2FvnEBKJZoCXZxdZluMgcMqoFscb2yfs8anmA0EcPpmk7ArDMFcPIYbjW%2BCyoWEclAksZ6lO%2FoAwbhWPKtpRFPDPppjDiyMm9BjqkAVHA63cUjG3E5f%2FMKtXrPPWY9U9xKW%2F79tCEx0DxnH5c2jSDb4280O0ZpEW4UWbzCqJGo6lzyXsrrCSgj2TlDRw%2BtNSR3dL9iOwOMCfgrSJBg7nFT%2FRwsVmJnEUFUfZ85SHfarEk5pinNfqSIKTiKzUe42gHoe3oTTaVr9ntVVVaT3NDocah6293savLPmAEZzK%2BFA2XyJYFdn9KBuQYl3b9A3yj&X-Amz-Signature=22cecef2aae0b14c0a259c6f1392f2f777db3c468b1b43e3a30ed6dcfd914b61&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
