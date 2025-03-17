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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XZHM7N%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCM1EIfsq%2FBGQC2MA7uGOctC73f5BtMkhmwNWrDl%2FLeAiB%2Bt5AJ7SQA73W3zWNbOnITLdzLvl7zc%2BTo%2B%2FRjEQTLsSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMkPzXOhLRWUz73TvLKtwDyzidQWn735%2Bkv927miI%2Fep0iiqbypiyfke8m1H7t%2FCOlpcrYM1KoZMChCalsZz6GcpZf%2FFN1dw5jKWw0f1Xx15DsSZ0LD6vwUt5Wg4WRegtT2IJhnkec1%2Fb33%2BHuNKLKmhqj2SOKXhE7xOTIQHSj17MHPRG2tOGrR2VNS4aHWkk%2BhFM7qjIo0D7movDDampR%2FKWV839PRFwbLTxEjTkxT5sHmGzkXMGDg0nT1zdzajlcySwnotAV6hvoaS87SWcVp8N5Dhf1JG3s6l1UY1fF5O2RyxGDiWKcT7ga4czA8HLbmWroJ6bPQAS%2FCWxex0rlrMScvxSaj8v5d3zKbeMAt%2BbUMCGpoX%2FOMGBboaVValmfxKbdxye%2BmKCK1kj4PWlleOfAF3jgDN5woltU3iu%2FNjY2%2FwonDG2Td7r6sH%2BbbDkrWDKdP5sYQHi92MD22s0o6V6DaaLqsHNXTw6I61jFX2JtGbYg6Ye0pH9hncviD6ZuJt9DCCmRmndm75cuGrotBox5Q6Z8asvwuYKTbEbT3bLzRLXsUQa%2F7C0x7uRCpG8Beu7AdAhF8oKmyh4n69JrqnxiXGcJVqB0zcwUHZc9C5rJJocwdEPBTp9WF1Jqs7Fs3OQIm6F%2B4Boqs5Mwka%2FfvgY6pgFo1Coa%2FdJhOVHHfHMSDR3a%2BMKOKqStqhSJ4nHjwcn4nleOyOewd2JekSeSJg%2F37VaUGSbrmqu3dhxKxVK1DhNDx4%2BLZR0iJAkhi%2B51SXCZgXcOgQh3owwiU5q%2Bf1DoAe1N0JQbWq9R8rWE2Kc%2F0z%2ByNJ9Pz%2BforgEgYaoIbYUMlktLCa50AAvl9cykFApP0fI8NSMRYqABUJRupnUKR0BG%2FnlOiogU&X-Amz-Signature=e154d75e6ea56a8c0753413f9410236cac870cec535f2a028b731f37d500fb92&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637XZHM7N%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCM1EIfsq%2FBGQC2MA7uGOctC73f5BtMkhmwNWrDl%2FLeAiB%2Bt5AJ7SQA73W3zWNbOnITLdzLvl7zc%2BTo%2B%2FRjEQTLsSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMkPzXOhLRWUz73TvLKtwDyzidQWn735%2Bkv927miI%2Fep0iiqbypiyfke8m1H7t%2FCOlpcrYM1KoZMChCalsZz6GcpZf%2FFN1dw5jKWw0f1Xx15DsSZ0LD6vwUt5Wg4WRegtT2IJhnkec1%2Fb33%2BHuNKLKmhqj2SOKXhE7xOTIQHSj17MHPRG2tOGrR2VNS4aHWkk%2BhFM7qjIo0D7movDDampR%2FKWV839PRFwbLTxEjTkxT5sHmGzkXMGDg0nT1zdzajlcySwnotAV6hvoaS87SWcVp8N5Dhf1JG3s6l1UY1fF5O2RyxGDiWKcT7ga4czA8HLbmWroJ6bPQAS%2FCWxex0rlrMScvxSaj8v5d3zKbeMAt%2BbUMCGpoX%2FOMGBboaVValmfxKbdxye%2BmKCK1kj4PWlleOfAF3jgDN5woltU3iu%2FNjY2%2FwonDG2Td7r6sH%2BbbDkrWDKdP5sYQHi92MD22s0o6V6DaaLqsHNXTw6I61jFX2JtGbYg6Ye0pH9hncviD6ZuJt9DCCmRmndm75cuGrotBox5Q6Z8asvwuYKTbEbT3bLzRLXsUQa%2F7C0x7uRCpG8Beu7AdAhF8oKmyh4n69JrqnxiXGcJVqB0zcwUHZc9C5rJJocwdEPBTp9WF1Jqs7Fs3OQIm6F%2B4Boqs5Mwka%2FfvgY6pgFo1Coa%2FdJhOVHHfHMSDR3a%2BMKOKqStqhSJ4nHjwcn4nleOyOewd2JekSeSJg%2F37VaUGSbrmqu3dhxKxVK1DhNDx4%2BLZR0iJAkhi%2B51SXCZgXcOgQh3owwiU5q%2Bf1DoAe1N0JQbWq9R8rWE2Kc%2F0z%2ByNJ9Pz%2BforgEgYaoIbYUMlktLCa50AAvl9cykFApP0fI8NSMRYqABUJRupnUKR0BG%2FnlOiogU&X-Amz-Signature=08ffc83a96829d87afbaa1bae8615ee1842231d1402f5533f7e76e7a806985a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
