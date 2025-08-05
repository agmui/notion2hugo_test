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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQC6I6I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAr35ZUsmDjAUviINxqqbfIA8e9CbJhr1rSJBNTuCFfjAiEAoQAd37ISGxZCrnbsAkr6i7gIBbRsBvtnP4XMvvWn2bgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJE9vqLhqnOh4D6e1CrcA8kDhw5OML7a29j5rGuPF3TBYO1X5vP3QMuTYlAYp5fXRTEC%2BunDEKDyb0qd9jcciOZR4ZW2VQk2AC8tqy4IU61hGRvQjZwDK6pDXw%2BNrxAN79lxj5t3jvOxPeOu7nA6NeP1jfGfva2XJ1BTP2Fv1wEsHhqgTqbJXgPAoMCVtJC1DwLgMtj0iV2zMVHygrVbYzsWp9YDEknd06qEIGVZjJyqnElRruqaeka%2BepK8uVguin3NR3g5i0pyaVTQBGDDJ6LOirWkUyZOJky3O59eKLvMljbaXpGIC%2F6DvZT4G%2BtuSJgUyOGRy1ugbvXyZrvaC1VS1VjV37r33Dm1Qh6sHsIdBUx2FlZH9HMMCfbv%2FZGEXcVulEb5bJ%2FISwtMJU3WgRN%2B2wgBf0%2FgXsxaWTsMn8wCpnPoy9TwclxOG6pkjPN0erDaedz0XBcjsF8SXd3kLnb%2BOtlGnrT7bgon1fkzJlxRKZo2CSbSAlFcFaa8HgbcaJkn4urVfGceyGCHC1fDBKeFB3Gw8z12Iw9hLbbJ2OrxuAuJun400YAYCqcN%2FpHvVWOu65GBdpqKpC%2BQkceWPZ4p3ZjzNWhGzFJroC9kS%2F3tx998M7ycbJqywRbvIC%2F92HrcDGz2OJGBPMiFMMysx8QGOqUBvsD8F87xhIWk0kjzZRcAlsa9NJp3XYQReffWGj4fcjN86r9gUoF8qw8v6imQWKuMdiix5IoEI%2F5xkufl9bx7hucK7mlei22J%2Fr2pBpxUuwS%2B0Of8NmbjhsbR17aMbaCv3ivkK27bdEOSi8DeXictpR6Jbl%2F8f%2FvA5cs5zVbFQ%2B7cM9rfYqmdRNojtBxCv0%2BED0cDtQgZSh44K0%2BsVXEgylStp3Pq&X-Amz-Signature=991c922ae8edc92b0893159ca8392f1432154e89eb9351c3e1e0600951440712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQC6I6I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAr35ZUsmDjAUviINxqqbfIA8e9CbJhr1rSJBNTuCFfjAiEAoQAd37ISGxZCrnbsAkr6i7gIBbRsBvtnP4XMvvWn2bgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJE9vqLhqnOh4D6e1CrcA8kDhw5OML7a29j5rGuPF3TBYO1X5vP3QMuTYlAYp5fXRTEC%2BunDEKDyb0qd9jcciOZR4ZW2VQk2AC8tqy4IU61hGRvQjZwDK6pDXw%2BNrxAN79lxj5t3jvOxPeOu7nA6NeP1jfGfva2XJ1BTP2Fv1wEsHhqgTqbJXgPAoMCVtJC1DwLgMtj0iV2zMVHygrVbYzsWp9YDEknd06qEIGVZjJyqnElRruqaeka%2BepK8uVguin3NR3g5i0pyaVTQBGDDJ6LOirWkUyZOJky3O59eKLvMljbaXpGIC%2F6DvZT4G%2BtuSJgUyOGRy1ugbvXyZrvaC1VS1VjV37r33Dm1Qh6sHsIdBUx2FlZH9HMMCfbv%2FZGEXcVulEb5bJ%2FISwtMJU3WgRN%2B2wgBf0%2FgXsxaWTsMn8wCpnPoy9TwclxOG6pkjPN0erDaedz0XBcjsF8SXd3kLnb%2BOtlGnrT7bgon1fkzJlxRKZo2CSbSAlFcFaa8HgbcaJkn4urVfGceyGCHC1fDBKeFB3Gw8z12Iw9hLbbJ2OrxuAuJun400YAYCqcN%2FpHvVWOu65GBdpqKpC%2BQkceWPZ4p3ZjzNWhGzFJroC9kS%2F3tx998M7ycbJqywRbvIC%2F92HrcDGz2OJGBPMiFMMysx8QGOqUBvsD8F87xhIWk0kjzZRcAlsa9NJp3XYQReffWGj4fcjN86r9gUoF8qw8v6imQWKuMdiix5IoEI%2F5xkufl9bx7hucK7mlei22J%2Fr2pBpxUuwS%2B0Of8NmbjhsbR17aMbaCv3ivkK27bdEOSi8DeXictpR6Jbl%2F8f%2FvA5cs5zVbFQ%2B7cM9rfYqmdRNojtBxCv0%2BED0cDtQgZSh44K0%2BsVXEgylStp3Pq&X-Amz-Signature=fb62b749685a8c640a8d2ec5cbed6e506cfdd68bc86680b2469aeb3d680f0838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
