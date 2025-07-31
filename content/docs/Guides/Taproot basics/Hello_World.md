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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7TV3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm70PwV%2F2TNiykqhwtpuiAnaZ4vbGWdvp8Ea5gl4kuRQIhAKqPTj%2BPjyeaaPgrzaH085l4d%2BCa%2FvYczeZLawVZDW1mKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLLcidM7pXyf2T6cMq3APmNIcgaB71%2FqFpJo8OdLjAcuJJVVLNvhS40O1d%2Fl8UQTwkK3IShfvMtBoggHH%2FeQP1HDfQhWCSZsYAWFk7pzQVOc6NbPTr7F4ElVFK8wkXSsE8v%2FUep06H78W9w14qBtENoS5yEM98JJOXjqGhZrqffCGapHCuBpehFT40R97AiHGrqKQhStAs4CrRizA%2FhZ6s94PHeue2ZCe1B9jX9WEqa%2BIMUQWSraEDP9wSbV542HvvHvOfGWEO4d8S8M%2Bg5qDay5wGvJO2lZbjpq85lzlXT4qRTJoG8Q07I7WfigoRQBnovMJIBANRFAylIrqy3tPEzTYYgmywqPNjU08dgBytWS%2FfyWlL5Fi4FHVC4b8pJA%2FKmkKWypWJuoR86qpe3UPVeotp4UmAlUu9h34CN%2FLWpvw9nWMqRoAsNny63OXPlnRCmXrGIlHRht0EJQBPX755wzXsUlwJgEdqLUVDQA5exU4T7p1WUimiaW4Ruq3jZr848Rp4%2BMgyUn6yWIlmY07%2B9EbSYSmzhu3o4ARSeTpPC%2FHveokuJXWOCB%2B9Z4NrkRSY5ULnDdbDtn2I2fdCnBAo7OJzb8Pzp1HU6pCls%2FfmJk2YhlOGok1WPhQ3g692MTHAOoCv5obqjPmaojDvzK%2FEBjqkAXFUhrDfzUmkuA3ARsHkvdwJwb%2FWgmeeGbHfJU62CLvrowsfFnWrW7DSsVcAqoYkregP6AEAIHQC7K4C%2F5M8iOdwJtQWVdKk1zVN7wB9tDqbkFVuF70LPPMcPFZGbjhXa%2FLFZBSQyTp4hlY6lTsxqBSEDmxW2A0Ifrkb4lrH%2Br3ZdRj1JxtzVjR5709VTAyqsmqOwkVoufZ1Nkp4dRz1ZQAmFJLE&X-Amz-Signature=b2b133598de8ccb323fd943a774e8f45ab5f30d337dbaf0166fbf81acdf10667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG7TV3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm70PwV%2F2TNiykqhwtpuiAnaZ4vbGWdvp8Ea5gl4kuRQIhAKqPTj%2BPjyeaaPgrzaH085l4d%2BCa%2FvYczeZLawVZDW1mKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLLcidM7pXyf2T6cMq3APmNIcgaB71%2FqFpJo8OdLjAcuJJVVLNvhS40O1d%2Fl8UQTwkK3IShfvMtBoggHH%2FeQP1HDfQhWCSZsYAWFk7pzQVOc6NbPTr7F4ElVFK8wkXSsE8v%2FUep06H78W9w14qBtENoS5yEM98JJOXjqGhZrqffCGapHCuBpehFT40R97AiHGrqKQhStAs4CrRizA%2FhZ6s94PHeue2ZCe1B9jX9WEqa%2BIMUQWSraEDP9wSbV542HvvHvOfGWEO4d8S8M%2Bg5qDay5wGvJO2lZbjpq85lzlXT4qRTJoG8Q07I7WfigoRQBnovMJIBANRFAylIrqy3tPEzTYYgmywqPNjU08dgBytWS%2FfyWlL5Fi4FHVC4b8pJA%2FKmkKWypWJuoR86qpe3UPVeotp4UmAlUu9h34CN%2FLWpvw9nWMqRoAsNny63OXPlnRCmXrGIlHRht0EJQBPX755wzXsUlwJgEdqLUVDQA5exU4T7p1WUimiaW4Ruq3jZr848Rp4%2BMgyUn6yWIlmY07%2B9EbSYSmzhu3o4ARSeTpPC%2FHveokuJXWOCB%2B9Z4NrkRSY5ULnDdbDtn2I2fdCnBAo7OJzb8Pzp1HU6pCls%2FfmJk2YhlOGok1WPhQ3g692MTHAOoCv5obqjPmaojDvzK%2FEBjqkAXFUhrDfzUmkuA3ARsHkvdwJwb%2FWgmeeGbHfJU62CLvrowsfFnWrW7DSsVcAqoYkregP6AEAIHQC7K4C%2F5M8iOdwJtQWVdKk1zVN7wB9tDqbkFVuF70LPPMcPFZGbjhXa%2FLFZBSQyTp4hlY6lTsxqBSEDmxW2A0Ifrkb4lrH%2Br3ZdRj1JxtzVjR5709VTAyqsmqOwkVoufZ1Nkp4dRz1ZQAmFJLE&X-Amz-Signature=1e605eaac6c7fad6801ceddd19b07341401665485bf3da47d3b295f7dd4264df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
