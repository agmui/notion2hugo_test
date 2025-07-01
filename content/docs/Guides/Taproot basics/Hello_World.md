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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S733GSN3%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFnZjfWpPPFdwPo1m6l5pgC%2BmKPqH4A6PoO7wsSaX%2FvgIhAMtDXmAQAs67IHv4XuQHWi0eNWWsogGmpy2ZV%2FPxUjoJKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDdj5t1Hchk4xK6sgq3AOQi9dezMRrdeMDZHhLYdw9eJKMDbFzVk%2BopvoRDl6qR%2Bv2sYRPdCYui07nIPRLyCEpDQg7%2BB87cxP0fEHts7v9In%2FCa0yqB5S919ckTSquSgW768iYcPrFfOpTaH1LelyJbbI7UTMryOsh6%2BEceYqm%2FaseCDGH0rrkKi27wVaEl6n9WhGC1gKj%2BM9bNF5NYtflRbxhQoSdTty4nUbtcItFbd%2BaRfrs5IkkHZF4mymLG6J%2Bmi38dU%2BfXMJFbrrJ9pl9%2FKNBVBUPzWayOFAfOw%2FwCkihnn390K17XIbvcRegAjylwHr80do4yctX2dmNURjEGaoYyBD4%2FmrHUxtJkfQ1%2BuEB63CRVtUht6njYNwKaeAkb38HfJPW4BxMRSHzJHL4OTslgyfYUB5kD%2Bd5RMyBFx5lPVgt1wmWNdkwAT3nbOkPbKDZUECiXBOZDtiNpPUCAMho4siiSvmMV4V7NlDkSoKg1J1Si0VeIaJWFfRhkgGkZIhzVLDcUbIMHKjcZMo%2BK%2FZMfC%2BOR0wgrVNYNHZucOMuHXssDlm1vxN9PydLtDkA%2BzHL0cS%2FtSHV6TTClWCTVPlKCAl3XfNysRHYpYOf0xJqP0fZaIkf%2BTmsHGz6mC%2FhmKCtoKCFY2gFKzDDjY7DBjqkATiQ3bbDw%2B%2BqAGpx%2BY4OqtDSYNSZti7onTmG%2BDE9YaoNaIw0kc%2FzAA1LayKrkdHG1lS9vRH7DVV80%2BxtvkYon%2BGjd4M0RyzhXQ0zqzO28%2FhayIY9JqTU1Sm92P8PE9bXt1jLI8wHL%2B84aimZW662IwOP3o1j6K%2FCakXWKj6fyeAl9CGY3duliW86JZ4QeWJ4AaNjFsYfMJlLFZOsfIDCDbHYOUun&X-Amz-Signature=474598ce61ecb5638e76899581aeefd1bbd74b142ff54f0b523fc76a44ad7a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S733GSN3%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T081307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFnZjfWpPPFdwPo1m6l5pgC%2BmKPqH4A6PoO7wsSaX%2FvgIhAMtDXmAQAs67IHv4XuQHWi0eNWWsogGmpy2ZV%2FPxUjoJKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDdj5t1Hchk4xK6sgq3AOQi9dezMRrdeMDZHhLYdw9eJKMDbFzVk%2BopvoRDl6qR%2Bv2sYRPdCYui07nIPRLyCEpDQg7%2BB87cxP0fEHts7v9In%2FCa0yqB5S919ckTSquSgW768iYcPrFfOpTaH1LelyJbbI7UTMryOsh6%2BEceYqm%2FaseCDGH0rrkKi27wVaEl6n9WhGC1gKj%2BM9bNF5NYtflRbxhQoSdTty4nUbtcItFbd%2BaRfrs5IkkHZF4mymLG6J%2Bmi38dU%2BfXMJFbrrJ9pl9%2FKNBVBUPzWayOFAfOw%2FwCkihnn390K17XIbvcRegAjylwHr80do4yctX2dmNURjEGaoYyBD4%2FmrHUxtJkfQ1%2BuEB63CRVtUht6njYNwKaeAkb38HfJPW4BxMRSHzJHL4OTslgyfYUB5kD%2Bd5RMyBFx5lPVgt1wmWNdkwAT3nbOkPbKDZUECiXBOZDtiNpPUCAMho4siiSvmMV4V7NlDkSoKg1J1Si0VeIaJWFfRhkgGkZIhzVLDcUbIMHKjcZMo%2BK%2FZMfC%2BOR0wgrVNYNHZucOMuHXssDlm1vxN9PydLtDkA%2BzHL0cS%2FtSHV6TTClWCTVPlKCAl3XfNysRHYpYOf0xJqP0fZaIkf%2BTmsHGz6mC%2FhmKCtoKCFY2gFKzDDjY7DBjqkATiQ3bbDw%2B%2BqAGpx%2BY4OqtDSYNSZti7onTmG%2BDE9YaoNaIw0kc%2FzAA1LayKrkdHG1lS9vRH7DVV80%2BxtvkYon%2BGjd4M0RyzhXQ0zqzO28%2FhayIY9JqTU1Sm92P8PE9bXt1jLI8wHL%2B84aimZW662IwOP3o1j6K%2FCakXWKj6fyeAl9CGY3duliW86JZ4QeWJ4AaNjFsYfMJlLFZOsfIDCDbHYOUun&X-Amz-Signature=a8a48469ac7a44b6fb2ef6337352ec824a47062d6035c96eafc39e2089822c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
