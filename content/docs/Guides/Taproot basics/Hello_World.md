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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6G562Z%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAkJNS5iW2rca1jN9s%2FEI8V8XgidGwd%2FIYyzO3B7ZI%2BYAiA5PNp%2FbWUYW37In0px5FAz4g7Er%2Fr9%2BkpPBcnNbtITbyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM38SrpBPp7eqeAm22KtwDKiSc0HuKkZM%2F3mxySQ9dHATDqCyPUrVc3NtzbO%2BT7fZ9ctXv4zdlSvrGCT%2Fv9TBHolhLx0bxqqoxkAd5oHlIcFLzCCuMHMQLlnXifhiKqzUDfzy3xO1m7XTOIkI2paCaI0WDksQ4lkItNdx%2FEmKSW%2FREnpowQ3HY%2F5fu0hWjg0GZnGPQqQXEf%2BCUwH2go6Nmsi%2FqPQjzqOs3DGFPjpprXS2RHpRlgHAqWpyNb%2B1bmdsrX10Ef2HBiOligDTFKD%2Br3dmLxeCIxt7UcRmuJ%2B9svAF7fC0EI45oE0HQWojqCoBd77vTaxG8Dg%2FDUQLIFi7CYbP9eup9Lw8Jz433hINGzfa5TH1bsoJS%2F4AX1%2FfNSKypdEqpP6vwq0bYAOw3Wbf70lK4O9H%2BYxG30F1Y9MWPN0xm8uQWAyyud2rK8QIGjd3GK%2F0Cwhu2ohrnWNcDssaSYZXDuPx3dOwlaSiDM3zIieFAlunOMWdRqoaLRuuEtUR6mDkZBh1%2FjZw%2BAdIiDkeP6UOUrkU%2F4q%2FisuCHmMGsDU8LfaLeG7A35wJFwnwcXdHDUX9IaNCvtGWIGEH5zIv45qi%2FIHxv%2BlN7D0%2Bimtsn2mfINYQTXIa%2BCIgg8YKgCZWZBgpdTYUd7ckHXaYwirKuvwY6pgE2PkZ2QyK7liB2y0zkAu8xLYMt%2FnlR%2FrsWxI4sJkLoy5S6OPLylEIViJ%2BkUmSQXpAQahm%2Btox3RGHm7c4KAWU9hHA%2FsJu6Z1sHdCXLn5JRJ7%2BJWa0A5EoK4KbFb%2Bui08iinoOj46elCX5LtvJRSqe762pBk0ydOLtwRtFGWpOhnwBDnb9m1Bs8YxCoft1BySuCoAgi6fsFsCwutaO7t1dAuUPqo9UU&X-Amz-Signature=223b89820cc5b34629a902ae26c231c9d3609aa258e99ddb2863594f34814f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR6G562Z%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAkJNS5iW2rca1jN9s%2FEI8V8XgidGwd%2FIYyzO3B7ZI%2BYAiA5PNp%2FbWUYW37In0px5FAz4g7Er%2Fr9%2BkpPBcnNbtITbyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM38SrpBPp7eqeAm22KtwDKiSc0HuKkZM%2F3mxySQ9dHATDqCyPUrVc3NtzbO%2BT7fZ9ctXv4zdlSvrGCT%2Fv9TBHolhLx0bxqqoxkAd5oHlIcFLzCCuMHMQLlnXifhiKqzUDfzy3xO1m7XTOIkI2paCaI0WDksQ4lkItNdx%2FEmKSW%2FREnpowQ3HY%2F5fu0hWjg0GZnGPQqQXEf%2BCUwH2go6Nmsi%2FqPQjzqOs3DGFPjpprXS2RHpRlgHAqWpyNb%2B1bmdsrX10Ef2HBiOligDTFKD%2Br3dmLxeCIxt7UcRmuJ%2B9svAF7fC0EI45oE0HQWojqCoBd77vTaxG8Dg%2FDUQLIFi7CYbP9eup9Lw8Jz433hINGzfa5TH1bsoJS%2F4AX1%2FfNSKypdEqpP6vwq0bYAOw3Wbf70lK4O9H%2BYxG30F1Y9MWPN0xm8uQWAyyud2rK8QIGjd3GK%2F0Cwhu2ohrnWNcDssaSYZXDuPx3dOwlaSiDM3zIieFAlunOMWdRqoaLRuuEtUR6mDkZBh1%2FjZw%2BAdIiDkeP6UOUrkU%2F4q%2FisuCHmMGsDU8LfaLeG7A35wJFwnwcXdHDUX9IaNCvtGWIGEH5zIv45qi%2FIHxv%2BlN7D0%2Bimtsn2mfINYQTXIa%2BCIgg8YKgCZWZBgpdTYUd7ckHXaYwirKuvwY6pgE2PkZ2QyK7liB2y0zkAu8xLYMt%2FnlR%2FrsWxI4sJkLoy5S6OPLylEIViJ%2BkUmSQXpAQahm%2Btox3RGHm7c4KAWU9hHA%2FsJu6Z1sHdCXLn5JRJ7%2BJWa0A5EoK4KbFb%2Bui08iinoOj46elCX5LtvJRSqe762pBk0ydOLtwRtFGWpOhnwBDnb9m1Bs8YxCoft1BySuCoAgi6fsFsCwutaO7t1dAuUPqo9UU&X-Amz-Signature=47d2e8813f90c5ce88c548ecad1977bbc053f2855e8d0e451a157a409f125e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
