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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXJP5OEN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaC%2FygamY2wZzOMykTTljpCZda1G8fRmMremydhQKaTAiB%2BnCVPmzfmL0AILEO5%2BUTWdl%2FtZAlG%2FRaYDGfPwO2S1ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMGHrk4SvxFpejxeesKtwD8DmPONcwIxknTXp7zqXwLcBG585Oa9cNfBDrpQHEE1jLhogq%2FKvK%2BRj36yB%2BPL5AbTVVDllUpGhS1XnlTxUg2nK83MmiTnK4UycJnEcGmQxR2d4tLkymPUBjTJn1L8QoJZdD59RsaKJrG5ATXUUwEVmN8IINHRjuGtCpA%2FnIn6budlYQqH98VnyPFDojixDQ4JQlzEtRJAZf9tb3MnZQ%2BKuPmVpO1nb8NiSBu8ZcmHlpPeNcC1zuAomzgyMbCd2PbqVaNjotXGvVeWcgs2f%2BH4fqbZfhoD772SwZfdw5rpY38XO8YUUE88niYpe5Ghmde1HFvXEKFpiAa%2FnE9ipAube5bBT4q0GH98T2dBn6nnp6tqeNC9oUeTe207KyhQrM0fJTb%2FBldfEH7ejXmPNt5D81%2FlE9gGzGC0QzY4HWulx3St5qkln4Z3EV7xFkZ2ssOmoy0MWYzrgJU0lY3n%2FVI93RYVnB0BcfGsL2YYO86Wm0n27JGDOF41qhiRTnlkWJ0qEYcNtIaQaPMGG51MmanKSo6WjI24jiRGyXBt1otGNN%2BBj44ZZvObnXE01mhBChHdSELSN4VUvXVeVMj8FsANICeMfwvaMgMsuQOw%2F8uSHbjMsPsKMyv4snxhgwx%2FDrvQY6pgHneL55C0P7T6duTSSBvRNeKOC1xTAjknhCfazfJY8aDbAIZhtcsWU%2F5pkHaW%2B7rQWRVncrzeOO5a6YciWUhT4OcAdtRByzpjhIM0HeYEGNbt71IAXDpOjEWPWK2jvjLqow%2FPvr356ETcER16fSHvwfmlvqFqPczsd7NL70zDd%2BfccRf3mS2CkfF4y3na2K1WJodQvWQDa18a2ZGfgO%2F1w4CIQT9YM9&X-Amz-Signature=b3ca6dc5bc4dfd9a1afc3ebe927e57bdcbe2dbe1ac8bd7f5415b19c7b1ef517b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXJP5OEN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaC%2FygamY2wZzOMykTTljpCZda1G8fRmMremydhQKaTAiB%2BnCVPmzfmL0AILEO5%2BUTWdl%2FtZAlG%2FRaYDGfPwO2S1ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMGHrk4SvxFpejxeesKtwD8DmPONcwIxknTXp7zqXwLcBG585Oa9cNfBDrpQHEE1jLhogq%2FKvK%2BRj36yB%2BPL5AbTVVDllUpGhS1XnlTxUg2nK83MmiTnK4UycJnEcGmQxR2d4tLkymPUBjTJn1L8QoJZdD59RsaKJrG5ATXUUwEVmN8IINHRjuGtCpA%2FnIn6budlYQqH98VnyPFDojixDQ4JQlzEtRJAZf9tb3MnZQ%2BKuPmVpO1nb8NiSBu8ZcmHlpPeNcC1zuAomzgyMbCd2PbqVaNjotXGvVeWcgs2f%2BH4fqbZfhoD772SwZfdw5rpY38XO8YUUE88niYpe5Ghmde1HFvXEKFpiAa%2FnE9ipAube5bBT4q0GH98T2dBn6nnp6tqeNC9oUeTe207KyhQrM0fJTb%2FBldfEH7ejXmPNt5D81%2FlE9gGzGC0QzY4HWulx3St5qkln4Z3EV7xFkZ2ssOmoy0MWYzrgJU0lY3n%2FVI93RYVnB0BcfGsL2YYO86Wm0n27JGDOF41qhiRTnlkWJ0qEYcNtIaQaPMGG51MmanKSo6WjI24jiRGyXBt1otGNN%2BBj44ZZvObnXE01mhBChHdSELSN4VUvXVeVMj8FsANICeMfwvaMgMsuQOw%2F8uSHbjMsPsKMyv4snxhgwx%2FDrvQY6pgHneL55C0P7T6duTSSBvRNeKOC1xTAjknhCfazfJY8aDbAIZhtcsWU%2F5pkHaW%2B7rQWRVncrzeOO5a6YciWUhT4OcAdtRByzpjhIM0HeYEGNbt71IAXDpOjEWPWK2jvjLqow%2FPvr356ETcER16fSHvwfmlvqFqPczsd7NL70zDd%2BfccRf3mS2CkfF4y3na2K1WJodQvWQDa18a2ZGfgO%2F1w4CIQT9YM9&X-Amz-Signature=7ba9fa4f263d1b481ae3191ce7e815861b93aea229110e5c37bd2aadb19b8718&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
