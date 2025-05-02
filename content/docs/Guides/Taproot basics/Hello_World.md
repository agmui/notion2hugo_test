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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGGHD4Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEwUbZJzLouo5LEUh6frZVAwjV7qSFm34xLZzluP9B9iAiEA1j3GPlCS3D2IGMUkQSNmnB%2Ffi6lUJ68UprJAHWQ9Xz4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM2voWcqmss1rK5yircA%2FCq8p0mu08zlbUcXnXdloc5YG5%2FwKiGmuXxSCVqVLi5pay4hfVA4KlXNVk%2FV0EeikX8BcB2hzkyGciAVcA2TRAo5g4%2F6A9P%2FskgHX0xzhf7AtVYyCYr%2BZu%2FsPyno2eWI8LnZELJGxmgiTaF2%2Bxwvozc69juB2k9BZxo4%2BGjGP0UnFXCHRNPovCN5oHTStBe7GaCzCi2Nvj4a7Vb0YziTLvagqaAJ21sINAYNBhE8cF8NDod6x8ESj%2F352q5Qxv5rPS471y4KKNcWAxoeARBW1uHKxXb80yejXE3VtNts%2BMgSF4Qz8OqekQsmzrlkIxXJdtCJ740qrjTVvNfvn9hIX0YarG90kDdo7ehUCnJxMysKPgAmIlVtO1P2zoJRxlLxreVTWxrLLKT%2Bl%2FEuLyLWk6fhneRDlZbunYYnUDX%2Bhx4%2Fa9%2B9XQsQ3lT5brfv5pHwtVOBarcw0037Ck0ooueepyoTXSciAm%2B7cUD6El7O%2B6bX5aaTY8L4U8Vudw33aBC%2BSinmFzsQhIpHHBrADgWgc9F9Vbp0VAEBJiSploegQWn1mGRGXFC3RAgLmm61MlrEnqoMmI9bf5xyscUjl49z8ZMqZlaugwR1uUyis798Y%2Fo7n2PzwI9npAxP1%2BoMKrk08AGOqUB1L7ABpRN2An0x%2FWM8zcxa195Y8B7EpOIGcjYQved9iS06KJco%2BbiLnrbZ0gdQVgX%2BA%2FlBTlvYs9qhQiMkO5n00c38rri%2BINW6IJjGxWRmgNlv9yf1vCCCWTe9m%2B29RTa2HK6OEizBeKkL3Cx33mwvL7p9i5snpyw5mwfuOUnOyo3tPFMsZFBUPseV4PMTa8VrbU9PrjUtlf1mLjzQwdY7LtQna0M&X-Amz-Signature=07bbc49c37ff2abb1616649a9d4ce73a25cf46867d6d8e57bc7059c859aec39a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGGHD4Q%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEwUbZJzLouo5LEUh6frZVAwjV7qSFm34xLZzluP9B9iAiEA1j3GPlCS3D2IGMUkQSNmnB%2Ffi6lUJ68UprJAHWQ9Xz4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM2voWcqmss1rK5yircA%2FCq8p0mu08zlbUcXnXdloc5YG5%2FwKiGmuXxSCVqVLi5pay4hfVA4KlXNVk%2FV0EeikX8BcB2hzkyGciAVcA2TRAo5g4%2F6A9P%2FskgHX0xzhf7AtVYyCYr%2BZu%2FsPyno2eWI8LnZELJGxmgiTaF2%2Bxwvozc69juB2k9BZxo4%2BGjGP0UnFXCHRNPovCN5oHTStBe7GaCzCi2Nvj4a7Vb0YziTLvagqaAJ21sINAYNBhE8cF8NDod6x8ESj%2F352q5Qxv5rPS471y4KKNcWAxoeARBW1uHKxXb80yejXE3VtNts%2BMgSF4Qz8OqekQsmzrlkIxXJdtCJ740qrjTVvNfvn9hIX0YarG90kDdo7ehUCnJxMysKPgAmIlVtO1P2zoJRxlLxreVTWxrLLKT%2Bl%2FEuLyLWk6fhneRDlZbunYYnUDX%2Bhx4%2Fa9%2B9XQsQ3lT5brfv5pHwtVOBarcw0037Ck0ooueepyoTXSciAm%2B7cUD6El7O%2B6bX5aaTY8L4U8Vudw33aBC%2BSinmFzsQhIpHHBrADgWgc9F9Vbp0VAEBJiSploegQWn1mGRGXFC3RAgLmm61MlrEnqoMmI9bf5xyscUjl49z8ZMqZlaugwR1uUyis798Y%2Fo7n2PzwI9npAxP1%2BoMKrk08AGOqUB1L7ABpRN2An0x%2FWM8zcxa195Y8B7EpOIGcjYQved9iS06KJco%2BbiLnrbZ0gdQVgX%2BA%2FlBTlvYs9qhQiMkO5n00c38rri%2BINW6IJjGxWRmgNlv9yf1vCCCWTe9m%2B29RTa2HK6OEizBeKkL3Cx33mwvL7p9i5snpyw5mwfuOUnOyo3tPFMsZFBUPseV4PMTa8VrbU9PrjUtlf1mLjzQwdY7LtQna0M&X-Amz-Signature=5bc19a9a8c02fe4b9660a00fc4d4840650d304973c392bf1f0042060df4455e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
