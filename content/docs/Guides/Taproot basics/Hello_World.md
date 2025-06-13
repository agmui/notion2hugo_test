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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN7IXHY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDySzFbW8WQhGoVpfyocSOORk1g0w9Djtu%2BCUSNQYT6dgIhAJBudAkeKhmf5YO4RleWcMCvs%2BSRc1V9rE5mrOsywLsfKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJu6t5Rd%2BPUhtooycq3AO8KkDpcFO3URlxGMDtpqqnYlKzd6T7bEH%2BwS3xVAxq7616E36ge0fWRY5UN1Zc9awnjuB%2Fhv5XDYyrbZTTFGNfUkfb4EkEXtlKcHpt2433ANnBArQy%2FQKFVIhNI%2Fgp4kwHl0nxONHdSKVWMCXm%2Fy1LIB94M3SiAkum76bej%2Fo5b4ixEn2wIzTUtSJdhRfWh31pbYstMVzyi%2BaFBTy2IB6WJOpbfbofV9l7wy0YJ1NJlRKv6R6jSpE61L6mTYHWOvDwAz3sWtIB2DotjLCAUjA%2FcV0EmWTvaPxrZDAc6tJmw7Zsjdru6zPP4FVj%2FhsL2RUGDKvAqqEzPIuUqk4mm7xHfTgun%2B4NXHRRiltq6FBLcQbGq%2FeKeEuynqYDGcZFD32woNbHh3CNC%2BzyHU%2B5YZhSdaplp2TYBI%2BWoRD%2FxMjaqMN7JRQ6rYV9XnsYevUMWfa%2FHPU6Muqa5ijthkiIc9LVM4XHdtB4Y1dKohv4Dupdf2BjWBAqzDezM1un26BNn%2F6xTvC%2BQlXCiBBx62%2FWeFpoh2A%2Fm7I7oLeeu2QgOygsUXg2bRJ8s8%2BjUgHAb6a7iLjVG%2BxnR7a4cwmr3hZ3534uQ7t8yFmFXcxN%2BPnC2n3Ba3uTG%2FokisNykGI3LDDM2a7CBjqkATUN4TEfjPlEFmsj7Nxiy6AB1pnnHTfLa1KAz88ZBdPh9hLxnjVAxAlcuaAJW9HTrMl%2FEGzIGoXM6IhMqO7BKGSDnhWawl4NiAjsJIadr%2FTRAPxpTP9ms2HPyF84x9%2FqzBVwxiYuWE3MIcBOvW%2F0SAE6EZF90RlshX2fWEEzRUDdG4BYTa5E8flMR1PE6KAucdB82k9nwyC3GgVY%2BXXx9bk%2BnSnT&X-Amz-Signature=2201e6ff63e70693054bd708a27059c1cecfe33237a8c92f69292bd9fb37835b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXN7IXHY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDySzFbW8WQhGoVpfyocSOORk1g0w9Djtu%2BCUSNQYT6dgIhAJBudAkeKhmf5YO4RleWcMCvs%2BSRc1V9rE5mrOsywLsfKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJu6t5Rd%2BPUhtooycq3AO8KkDpcFO3URlxGMDtpqqnYlKzd6T7bEH%2BwS3xVAxq7616E36ge0fWRY5UN1Zc9awnjuB%2Fhv5XDYyrbZTTFGNfUkfb4EkEXtlKcHpt2433ANnBArQy%2FQKFVIhNI%2Fgp4kwHl0nxONHdSKVWMCXm%2Fy1LIB94M3SiAkum76bej%2Fo5b4ixEn2wIzTUtSJdhRfWh31pbYstMVzyi%2BaFBTy2IB6WJOpbfbofV9l7wy0YJ1NJlRKv6R6jSpE61L6mTYHWOvDwAz3sWtIB2DotjLCAUjA%2FcV0EmWTvaPxrZDAc6tJmw7Zsjdru6zPP4FVj%2FhsL2RUGDKvAqqEzPIuUqk4mm7xHfTgun%2B4NXHRRiltq6FBLcQbGq%2FeKeEuynqYDGcZFD32woNbHh3CNC%2BzyHU%2B5YZhSdaplp2TYBI%2BWoRD%2FxMjaqMN7JRQ6rYV9XnsYevUMWfa%2FHPU6Muqa5ijthkiIc9LVM4XHdtB4Y1dKohv4Dupdf2BjWBAqzDezM1un26BNn%2F6xTvC%2BQlXCiBBx62%2FWeFpoh2A%2Fm7I7oLeeu2QgOygsUXg2bRJ8s8%2BjUgHAb6a7iLjVG%2BxnR7a4cwmr3hZ3534uQ7t8yFmFXcxN%2BPnC2n3Ba3uTG%2FokisNykGI3LDDM2a7CBjqkATUN4TEfjPlEFmsj7Nxiy6AB1pnnHTfLa1KAz88ZBdPh9hLxnjVAxAlcuaAJW9HTrMl%2FEGzIGoXM6IhMqO7BKGSDnhWawl4NiAjsJIadr%2FTRAPxpTP9ms2HPyF84x9%2FqzBVwxiYuWE3MIcBOvW%2F0SAE6EZF90RlshX2fWEEzRUDdG4BYTa5E8flMR1PE6KAucdB82k9nwyC3GgVY%2BXXx9bk%2BnSnT&X-Amz-Signature=354d320213913e8ce808ababac50452fc1ac94e97566dab55e107c41affa49e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
