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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2R7DJF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3QIOYNfJyPdFNgeufilxjAqxCgFr7tYrKjkHX1aBSuAIgRTwIHu8vkQ6BKyPl9UzYthpdWwkpsqA4ovwNInvU8Ioq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDORy8gTeKCa5OIc1iCrcA7HOs1odBCpgPMfBvViek4w6D8kuME1jGcF0yDTBvLxGfA%2Fko5qfZxj2%2BwBSmFsutrvMDtt%2B7v0Aks9Arn0tamzufnCWhHv5f5qoIX8RsPJe%2BpnH3XhA7cuBpT8ceGdzeCAv1X0NWDGkC6p%2FYhi8yQ%2FE5e1ATbYLFSGupRJw5Ws4hZ4uCQMXQ7xs6Kkcf2wfEv41KCbFKrIEVWak0RRwv2ycRonTBkT6O%2Fl4tDpH08Kp8kWwLv%2FE5tCb4zl2OYsPjNclc9Zpz3jkyJw3Pkh%2B%2F%2F4%2FgSERD5f4IUGvn%2B%2Bch5weKyapEutttSH%2FIgcDk5NpDYz2GnyJS7YL5p42I6skWHkJN5MBzX6YZKdmisuRQulQrTEj6bip1GqDHuyQQlystav%2FUa6sgUrESI5oRRF4iLW98h7amzSSyr4qy12%2F4dIaAkC%2FQHCjXwq8thXg3cTX1L2CwLyZBzeu8DCY%2FlB2EFazQAkH3IH7Ea1LXXTBNf6c9OUfBLmu3UdAUPaey6ugklCRMguNlIB96QrQ2JWurVLokUaJsX5xSkE0Atdcx47dQ2lqLXRBOwL7x0NtkpMOL8oWEeymwK3iddU%2Br3uwcWB%2BOVhOdOV%2Fn9ZfmQeq1Qp%2B95TbBDpXCAt6C%2FhjMMjW8b0GOqUBGYjEJik8KtytmG7ArNhXhdgIKBOfbXJvzhvxPKhghVlZq75gelSWvpUFptIJfL6w8Wgeh5Ruruijco6D6QOegH6%2BTYswXS%2Fd%2BqQdmWAsTj9xu8UHXUGCop7f2k3wVdsatDM6vv5k9tjIZjSfoQKKKK5iGyUoAMch2%2B2ZBLHrqs36jlYSRynWYmBSYsBqbZ4K4XO7WKZPENaRiRtBCcfFOPz2kZ%2BG&X-Amz-Signature=0bf41414127951c363a3290e0508cb2e9d183cd8969aec54f0fc6b9ca8840021&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2R7DJF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3QIOYNfJyPdFNgeufilxjAqxCgFr7tYrKjkHX1aBSuAIgRTwIHu8vkQ6BKyPl9UzYthpdWwkpsqA4ovwNInvU8Ioq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDORy8gTeKCa5OIc1iCrcA7HOs1odBCpgPMfBvViek4w6D8kuME1jGcF0yDTBvLxGfA%2Fko5qfZxj2%2BwBSmFsutrvMDtt%2B7v0Aks9Arn0tamzufnCWhHv5f5qoIX8RsPJe%2BpnH3XhA7cuBpT8ceGdzeCAv1X0NWDGkC6p%2FYhi8yQ%2FE5e1ATbYLFSGupRJw5Ws4hZ4uCQMXQ7xs6Kkcf2wfEv41KCbFKrIEVWak0RRwv2ycRonTBkT6O%2Fl4tDpH08Kp8kWwLv%2FE5tCb4zl2OYsPjNclc9Zpz3jkyJw3Pkh%2B%2F%2F4%2FgSERD5f4IUGvn%2B%2Bch5weKyapEutttSH%2FIgcDk5NpDYz2GnyJS7YL5p42I6skWHkJN5MBzX6YZKdmisuRQulQrTEj6bip1GqDHuyQQlystav%2FUa6sgUrESI5oRRF4iLW98h7amzSSyr4qy12%2F4dIaAkC%2FQHCjXwq8thXg3cTX1L2CwLyZBzeu8DCY%2FlB2EFazQAkH3IH7Ea1LXXTBNf6c9OUfBLmu3UdAUPaey6ugklCRMguNlIB96QrQ2JWurVLokUaJsX5xSkE0Atdcx47dQ2lqLXRBOwL7x0NtkpMOL8oWEeymwK3iddU%2Br3uwcWB%2BOVhOdOV%2Fn9ZfmQeq1Qp%2B95TbBDpXCAt6C%2FhjMMjW8b0GOqUBGYjEJik8KtytmG7ArNhXhdgIKBOfbXJvzhvxPKhghVlZq75gelSWvpUFptIJfL6w8Wgeh5Ruruijco6D6QOegH6%2BTYswXS%2Fd%2BqQdmWAsTj9xu8UHXUGCop7f2k3wVdsatDM6vv5k9tjIZjSfoQKKKK5iGyUoAMch2%2B2ZBLHrqs36jlYSRynWYmBSYsBqbZ4K4XO7WKZPENaRiRtBCcfFOPz2kZ%2BG&X-Amz-Signature=1e33fe40ab8fbacd6b0b9e98201c19ae07e552ce3b888740e9b74cf29b0dada9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
