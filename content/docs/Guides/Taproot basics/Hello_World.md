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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOSVLWQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIWUxdXOsAyQCQ6fU2HtlLtJTA%2FlJk8nli%2Bj%2FbEorohAiAgJvoBQAUBw1wwIZxASsiE4D7uLSbsKD6V9UHf4f%2BuVCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMCC1qJFpzRPtUCyzkKtwD%2B%2BXASiWX0WD4tf%2F%2FpXe47k0nUZNFInmhnRGU3JkOSEKuzLrUaRXrDV92lC9Yd9nO8UmFIny45OJCWZjPEbkHztcnFBD%2BBftAjiO1%2Fn3IQVns4%2BgqSVj6%2BROETocSPyEtKhL%2FpyB0%2BROLYP8ffoEGNaGgikwtDC06MyJatyshSgKU26qmuyOOxJjq2drtWR4Se8XqjKaVYCV6872Deyj1qIFk%2FDo8do7Ycwm8%2F07AD02MQOCXRfWRk348gaFmzsjnSDMLYXfubYgVAox0pdBSHS%2FfSZqJ9kjSduHXuzixptfHVGcpgIhO2uyJ6l7b5AW30LZkT8JvI9KVsDPWsUDR9rSzTrUUVtLEx65sZiRvmGUDQinTb%2Ba00ydITa%2FctYISLlkexCEHEHYRSaj4SdgqaCtRNbJfpqJtM85bgeHIgpjx17rirxBTNLjWqqHm8D%2FvIQb2fuEX19%2FAzJCJzb0%2FjZxHPkTitbPeoPufKvax1CQfuKmn8eNdXbgaqvbTXyUSGseugmwQN2TYlCOW%2FE6%2FTfGF1xbyR2lRXT%2FKRnjcFRciuqFVaonyjRTO2q0RnBao9b1I4AfVTqc%2BfErmGxU3SS7YCa8ZQ%2BwpdaaqX6%2B%2BOXPKWA3kbvidNCcCHq8w7rzyvQY6pgGoG1qroEz51SybTN2yWf52nhczRROJgHoiRBq34luYc2rbFRzNWWtyIevUPkgszQMcUKNT0lnPNMJh1JwfnWPF8LPotqZ3YczZI%2BP%2F%2Bx%2FhcruMpR1q1MnGjsRcKQ5b6elx9g%2F8Bzdn9xr9EFywaIrStgHpaMtIqfvyinsRaI8MHBlY9xx%2BtlEtlZw6w%2FBZYieFEeKF1PomRvhSH5B0NeH5shW9dqYf&X-Amz-Signature=47580278cc2e311ba841fbcd732b4439b85807891867028801d30e9e6c349f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOSVLWQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIWUxdXOsAyQCQ6fU2HtlLtJTA%2FlJk8nli%2Bj%2FbEorohAiAgJvoBQAUBw1wwIZxASsiE4D7uLSbsKD6V9UHf4f%2BuVCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMCC1qJFpzRPtUCyzkKtwD%2B%2BXASiWX0WD4tf%2F%2FpXe47k0nUZNFInmhnRGU3JkOSEKuzLrUaRXrDV92lC9Yd9nO8UmFIny45OJCWZjPEbkHztcnFBD%2BBftAjiO1%2Fn3IQVns4%2BgqSVj6%2BROETocSPyEtKhL%2FpyB0%2BROLYP8ffoEGNaGgikwtDC06MyJatyshSgKU26qmuyOOxJjq2drtWR4Se8XqjKaVYCV6872Deyj1qIFk%2FDo8do7Ycwm8%2F07AD02MQOCXRfWRk348gaFmzsjnSDMLYXfubYgVAox0pdBSHS%2FfSZqJ9kjSduHXuzixptfHVGcpgIhO2uyJ6l7b5AW30LZkT8JvI9KVsDPWsUDR9rSzTrUUVtLEx65sZiRvmGUDQinTb%2Ba00ydITa%2FctYISLlkexCEHEHYRSaj4SdgqaCtRNbJfpqJtM85bgeHIgpjx17rirxBTNLjWqqHm8D%2FvIQb2fuEX19%2FAzJCJzb0%2FjZxHPkTitbPeoPufKvax1CQfuKmn8eNdXbgaqvbTXyUSGseugmwQN2TYlCOW%2FE6%2FTfGF1xbyR2lRXT%2FKRnjcFRciuqFVaonyjRTO2q0RnBao9b1I4AfVTqc%2BfErmGxU3SS7YCa8ZQ%2BwpdaaqX6%2B%2BOXPKWA3kbvidNCcCHq8w7rzyvQY6pgGoG1qroEz51SybTN2yWf52nhczRROJgHoiRBq34luYc2rbFRzNWWtyIevUPkgszQMcUKNT0lnPNMJh1JwfnWPF8LPotqZ3YczZI%2BP%2F%2Bx%2FhcruMpR1q1MnGjsRcKQ5b6elx9g%2F8Bzdn9xr9EFywaIrStgHpaMtIqfvyinsRaI8MHBlY9xx%2BtlEtlZw6w%2FBZYieFEeKF1PomRvhSH5B0NeH5shW9dqYf&X-Amz-Signature=24d1eb1872fe5938c15487b96bd08d4fee3fd3e3409860ea69589a96bc3497d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
