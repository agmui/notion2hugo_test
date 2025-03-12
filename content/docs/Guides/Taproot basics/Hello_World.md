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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPANNCC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHaB2kSep22Y6Bw1VQ%2BF8EXQjZEmnLpzDBZ3RmuQ2rAbAiB6bbPLRk6pySVPi5JRF%2Bv8j4phDUlPGEdgnpL%2Fh3jDgyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI4aClWGdHmfqX04xKtwDzXdkJAwDX3xumn2M3ejTx05OABHuttN%2Fos1wr25RvKXZF7zgDIPLmaP0Avij%2BWZD3xSxXkAotFEswOiKlb7lECzvXQ%2BpX2Cjwz7AMzd%2BESKRGqWuKeML71%2BRW2utilqhx2R%2FPDA%2BjjAv%2FYOMCQhmDtcJsPSpLGL0DQFpxZULyJTv4cRu%2BfQZFALUQjtKQIuDkRqhFIXQylfqZ4u99NU2pyXCCnMeHUu5TqAM6i3QZs7R9Tfa5PRR6hygFkVw6EY66lLkIGN5Sb06JzvebuIddisn62f6PWItBkaHLW35azrVX21Rli3Bz7mhdwAUE1cukDXryjpHuC5U47FCHUOQrUXkT6zH10vck6WWvxJaFSpjaeYWRMdV3x9%2Fpw%2FzzTjSZMJz1MeDFcx4cMjXPwaWp4zqMMCJ7iXd2pmX2LXik4OfJjiaKzUuNcboZiwxisXTonpesreNd1MtiWEgVYfqZQQ7kJMHlBlmHb18YHhUL4GXwOAkU8k%2B7owtN2n2L2PVkihm9yUyqTmOTyDa1odJuW62cdF63vcT0cajVMTxg0LwmFJ4AP3kxnbu9Ujpe8W5tGzr6etoR3aHEAwVJBU587L809sSs1CCA0WOLFS9yunrgf971RKpBbPlkPowruTHvgY6pgFuNEXjXAB38rFrSXoh1a4ah4okK4D9efIiA7msPOEJOclebE%2BXmNYtEaFZr2aB3MOi%2BJeeW94%2B%2B2iOtvpKOgBmnPsKJj7jXsHgfjvmlxoimuOsjpmKbfUcCTFCjdnsjxqokR31RLMJ4M6SYdAKXD%2FUiC6TzX63k2hz7Wxwj3zZT1j%2FOWYPA9efcfUrQVecE0%2FYkyF3%2Bp4O6KTs0OihSPQJhHHsI67V&X-Amz-Signature=30915b900e06074826b2a2964a83520fe186c175c9d1bc428387dda727105aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPANNCC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHaB2kSep22Y6Bw1VQ%2BF8EXQjZEmnLpzDBZ3RmuQ2rAbAiB6bbPLRk6pySVPi5JRF%2Bv8j4phDUlPGEdgnpL%2Fh3jDgyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI4aClWGdHmfqX04xKtwDzXdkJAwDX3xumn2M3ejTx05OABHuttN%2Fos1wr25RvKXZF7zgDIPLmaP0Avij%2BWZD3xSxXkAotFEswOiKlb7lECzvXQ%2BpX2Cjwz7AMzd%2BESKRGqWuKeML71%2BRW2utilqhx2R%2FPDA%2BjjAv%2FYOMCQhmDtcJsPSpLGL0DQFpxZULyJTv4cRu%2BfQZFALUQjtKQIuDkRqhFIXQylfqZ4u99NU2pyXCCnMeHUu5TqAM6i3QZs7R9Tfa5PRR6hygFkVw6EY66lLkIGN5Sb06JzvebuIddisn62f6PWItBkaHLW35azrVX21Rli3Bz7mhdwAUE1cukDXryjpHuC5U47FCHUOQrUXkT6zH10vck6WWvxJaFSpjaeYWRMdV3x9%2Fpw%2FzzTjSZMJz1MeDFcx4cMjXPwaWp4zqMMCJ7iXd2pmX2LXik4OfJjiaKzUuNcboZiwxisXTonpesreNd1MtiWEgVYfqZQQ7kJMHlBlmHb18YHhUL4GXwOAkU8k%2B7owtN2n2L2PVkihm9yUyqTmOTyDa1odJuW62cdF63vcT0cajVMTxg0LwmFJ4AP3kxnbu9Ujpe8W5tGzr6etoR3aHEAwVJBU587L809sSs1CCA0WOLFS9yunrgf971RKpBbPlkPowruTHvgY6pgFuNEXjXAB38rFrSXoh1a4ah4okK4D9efIiA7msPOEJOclebE%2BXmNYtEaFZr2aB3MOi%2BJeeW94%2B%2B2iOtvpKOgBmnPsKJj7jXsHgfjvmlxoimuOsjpmKbfUcCTFCjdnsjxqokR31RLMJ4M6SYdAKXD%2FUiC6TzX63k2hz7Wxwj3zZT1j%2FOWYPA9efcfUrQVecE0%2FYkyF3%2Bp4O6KTs0OihSPQJhHHsI67V&X-Amz-Signature=2a3fd76caeb09e33e859a03e8b97c0d06102aeb4f343cc0d47269a7318726dad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
