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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AZB7X6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BLOy8Qg%2Fea68jPZ4M5Y%2BmeLk7JAZDthIVO2uOSiOqMAiA%2FpDOm2UhGG0q%2BZeLZOItAkLYTJWSTJMNFHbTpS3iJLCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW8LyDRb2lUUx3sBsKtwDUTbvbSuT5cxrkhNY9uSXuRgaqIY4Lqkd2Euw71RLT0iIw0JyOrfGCM4UqgHMtM%2BimlJa%2FgYHRtyN%2FS%2F1eE6ePbcnoeZaC6ttiBvOJIawfJBPuE7cSQz8y7gbnX7QUoRtvBk%2FmuJfa505WrK3JV1DaLWNeDp6aTyF%2BCuSQYSxu9X2QqYnBnEOsI9lTyeMaTA2Nv6G2jtqHd357Mq%2Bi0GN0Jr87RjHm%2BoAS4OtZ4e4AFBFjgHDLqd6zTha2JvcJRJ4OhBmsaYyssCALoy4LI85ienw4lvWtxUtgxuZDeAc5dwWInVCKPxpY489Uh1WRS5e4C78eeO2OrHCFGIbDdiAagf%2BlwB3bwoV%2BWhDaXHilnf868%2FSEkJAVQjVOR89Gb2pAG3eqs1sDGpuQbVE7WNcKHtFkE0QlWYUFH%2B0eJoO5FOsks3SUX1Ffq85BdAYdySnKRZYXDgy2I0URbD4STaPQjZ40526rSUb1IBX%2FwvioXvLSa5Du8OnaU8%2F8GVzs6FhEs6pURoO8nmIihWjG272%2BIvbtZb27H2ha8NrMXwguWm%2FsOyvpwSXJxsfL7qMTKzN3nxTeTt06f4kzDBusiO77LA%2BQ1rd9Kfmm%2BiQObN1XE3T1auNFNzCzBehK%2B8wvfyMwAY6pgHK9Srj%2F2YyplnUj8w6k9sKbFnniJDgyDPjPYfKVw74AxRRjn8wdSZr690P%2BQ66MyM1cfZfyvRTFh1ywCdkam%2BiWwRc6S%2FLuG5BW6zM7ZZDJaKJZl1%2Bz3e20gj0gAhZL%2FhHSX6LlDtBm%2B7TCNLYzqVf0hgbLa1RZyLNpRoGAvpQCo1d44ovi442V5GVWxvq5akwIsGaUvsttnAyd%2F17Ga%2B6zhif1KkB&X-Amz-Signature=6b68798c1fc35249f5b45033844669028483177cb1be7946bec579b57e4ef45c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624AZB7X6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BLOy8Qg%2Fea68jPZ4M5Y%2BmeLk7JAZDthIVO2uOSiOqMAiA%2FpDOm2UhGG0q%2BZeLZOItAkLYTJWSTJMNFHbTpS3iJLCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW8LyDRb2lUUx3sBsKtwDUTbvbSuT5cxrkhNY9uSXuRgaqIY4Lqkd2Euw71RLT0iIw0JyOrfGCM4UqgHMtM%2BimlJa%2FgYHRtyN%2FS%2F1eE6ePbcnoeZaC6ttiBvOJIawfJBPuE7cSQz8y7gbnX7QUoRtvBk%2FmuJfa505WrK3JV1DaLWNeDp6aTyF%2BCuSQYSxu9X2QqYnBnEOsI9lTyeMaTA2Nv6G2jtqHd357Mq%2Bi0GN0Jr87RjHm%2BoAS4OtZ4e4AFBFjgHDLqd6zTha2JvcJRJ4OhBmsaYyssCALoy4LI85ienw4lvWtxUtgxuZDeAc5dwWInVCKPxpY489Uh1WRS5e4C78eeO2OrHCFGIbDdiAagf%2BlwB3bwoV%2BWhDaXHilnf868%2FSEkJAVQjVOR89Gb2pAG3eqs1sDGpuQbVE7WNcKHtFkE0QlWYUFH%2B0eJoO5FOsks3SUX1Ffq85BdAYdySnKRZYXDgy2I0URbD4STaPQjZ40526rSUb1IBX%2FwvioXvLSa5Du8OnaU8%2F8GVzs6FhEs6pURoO8nmIihWjG272%2BIvbtZb27H2ha8NrMXwguWm%2FsOyvpwSXJxsfL7qMTKzN3nxTeTt06f4kzDBusiO77LA%2BQ1rd9Kfmm%2BiQObN1XE3T1auNFNzCzBehK%2B8wvfyMwAY6pgHK9Srj%2F2YyplnUj8w6k9sKbFnniJDgyDPjPYfKVw74AxRRjn8wdSZr690P%2BQ66MyM1cfZfyvRTFh1ywCdkam%2BiWwRc6S%2FLuG5BW6zM7ZZDJaKJZl1%2Bz3e20gj0gAhZL%2FhHSX6LlDtBm%2B7TCNLYzqVf0hgbLa1RZyLNpRoGAvpQCo1d44ovi442V5GVWxvq5akwIsGaUvsttnAyd%2F17Ga%2B6zhif1KkB&X-Amz-Signature=90e66b87a5732dd42c5e55895f38f96e56651857e807ecfcb1def6d3eafff669&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
