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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUT64UMO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7u7E%2BEwrOjcY%2FSvu7DD2gxGIhQr9VpL%2F6uMSQo%2BfPuwIgFmgVmaEpEW0LpYcO1YbsfE%2Fmp0Er%2FoBBLu0eD3AMnIsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKM0nbZE4T9bszwmSSrcA5VKtU1dQ2%2BBGX8VI3mpyuKNsQhg6ch1KI4xQRHLsb6jtchCVgMqXq00dS%2FUZgl6usmbHm9KNAKCdJ31fAVvLX%2F7O0J9wvR6Y5EdGAH5Wnm%2B1D9bqEffpY44%2B72LlZLR1VpaBZiiLE33W%2BrJMyWoEHtswSImwxiCcNHVSWxWfFMiNzeXh%2F91Lfr9fiM1DjzYMARhlEHAbtdVCAb84CuX6gr3kTtPYh5K4eCjmu3%2B7Hik7FnK%2Fqlt7RkN03GKyyjQgMqh5ZOyXmpzIb0x4BlENfTEg8dkVY18p9Pk8%2F0jvNy32GzKKuuNa1QrFaSyxPEgi8Ijs8z0TCQPso9ARybcYD2tm31uLlJ3cKcfosYMjsTcO4FulQxIf8cp%2F6H3tH7z2pWXJ4N76FP51TAeVjml%2F3K7aHtYz7oCScg0WKtTC0lcGD6YiHDn7htAU3sxSqKmV2LBDtfNhhbO4FQTz25gO5WRjyIUbsl14Iobw668EaW4zY%2BsDHV0RuqQOIAYqup%2BP3SieDncoT6odrug7Gn%2FzcMFjqGVnQzPKCAljooIgx%2FN6ELiS4Se%2BXTD%2Fb1xAgwdZC9PRUWF6JS%2FdQd5PGQBKGekMkaKdFwl8NnH8%2Bbne1OKd0j72kuiWdrQd3loMNj49sAGOqUBaYazpREsj7eN74A0iz6jIMHrx2PuQ%2FDJaBQcoyjtLgUCAa%2ByYvrUOo7wbngoKRzxJW8hHaMuoz6B5FhXtt932Ze5NKQZMOjQozpk3svFPY%2BAF2wb0kpdmO2efKO5ARMR%2F4pLvvkpDkGtAsxuubtmJxac%2FnBy8lhBRL0ctqsWWPMSP6v9s1y7mnUvqOymr75Fxu%2BCuUd7YXC6xK0zUNGbm8Ww2zq8&X-Amz-Signature=d0f6aebbed4873b8bbb4d5f40a1875381b5cb36d72390d960a063c7198a9ced3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUT64UMO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7u7E%2BEwrOjcY%2FSvu7DD2gxGIhQr9VpL%2F6uMSQo%2BfPuwIgFmgVmaEpEW0LpYcO1YbsfE%2Fmp0Er%2FoBBLu0eD3AMnIsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKM0nbZE4T9bszwmSSrcA5VKtU1dQ2%2BBGX8VI3mpyuKNsQhg6ch1KI4xQRHLsb6jtchCVgMqXq00dS%2FUZgl6usmbHm9KNAKCdJ31fAVvLX%2F7O0J9wvR6Y5EdGAH5Wnm%2B1D9bqEffpY44%2B72LlZLR1VpaBZiiLE33W%2BrJMyWoEHtswSImwxiCcNHVSWxWfFMiNzeXh%2F91Lfr9fiM1DjzYMARhlEHAbtdVCAb84CuX6gr3kTtPYh5K4eCjmu3%2B7Hik7FnK%2Fqlt7RkN03GKyyjQgMqh5ZOyXmpzIb0x4BlENfTEg8dkVY18p9Pk8%2F0jvNy32GzKKuuNa1QrFaSyxPEgi8Ijs8z0TCQPso9ARybcYD2tm31uLlJ3cKcfosYMjsTcO4FulQxIf8cp%2F6H3tH7z2pWXJ4N76FP51TAeVjml%2F3K7aHtYz7oCScg0WKtTC0lcGD6YiHDn7htAU3sxSqKmV2LBDtfNhhbO4FQTz25gO5WRjyIUbsl14Iobw668EaW4zY%2BsDHV0RuqQOIAYqup%2BP3SieDncoT6odrug7Gn%2FzcMFjqGVnQzPKCAljooIgx%2FN6ELiS4Se%2BXTD%2Fb1xAgwdZC9PRUWF6JS%2FdQd5PGQBKGekMkaKdFwl8NnH8%2Bbne1OKd0j72kuiWdrQd3loMNj49sAGOqUBaYazpREsj7eN74A0iz6jIMHrx2PuQ%2FDJaBQcoyjtLgUCAa%2ByYvrUOo7wbngoKRzxJW8hHaMuoz6B5FhXtt932Ze5NKQZMOjQozpk3svFPY%2BAF2wb0kpdmO2efKO5ARMR%2F4pLvvkpDkGtAsxuubtmJxac%2FnBy8lhBRL0ctqsWWPMSP6v9s1y7mnUvqOymr75Fxu%2BCuUd7YXC6xK0zUNGbm8Ww2zq8&X-Amz-Signature=c8f1d4884c56fef2bb7d529b758cf22ad3f9bd925665ebdce602fc66af128623&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
