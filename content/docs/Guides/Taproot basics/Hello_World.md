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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGKPRB3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGhViSULky5jqkSq52X6a0k3SNgs5JNl0JdFvsLabwcAiEA%2FKPkeFTxrpIm1gtg%2FZ2UGlIzKC0ql9YK%2FGXcantoawUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8aaOwKwHlzYo%2F6JCrcAx1eEeLihTcAAiVT8iR3Iejwb5CS7311f%2B4jLxInHO4UTXrlVLFOU3GGpTv3z3drTgEE%2BGKRtkbKD3MbA1oOZEfmZlG%2BdMCh3xhBj5BmLV56u%2FrgpUcHkyEvcqS9tJzIXmdR%2B6SHCsX5ILJuLDocHWCcF162eBbxjPnGexQVYPj%2Beiplo84ao9oE2vHDNF3BwmqTiEcemgJnD%2F%2Brt8AuCbqNVl9x4IH%2BkFpA4w5kywkir%2BX0oz0%2FKwudS6mgF8V%2F%2BKpcLfhprfBGQ8fvdMEycYFPzqODwZEj6BvkqFBWonHXCqdHBpcGuUXLeadljnqlrEzzv24ksssOod8IWAxhuw%2BzbGnd101Q7aPa%2FPVain9yai1vsrJpmvQqI5wypuxFA7VH%2B%2FXmxzw7SWLDROb8qt0HDaCiADQnw8MTMH2Pf73%2BLJPMvgFn%2Fpviv2Fh9b3rMul1B39FR7MDeLdGO1FTV1UlHZ1xCuC4vL8UR7yR9s8%2BnzKiglaN7%2FzzZMvWnhrl29RT%2BuWpxqMioSo%2Bj4b3KnyZsIwwOxo8dfOq1V3WT1XfhJo1kN%2F4Sv12DvEsd2nHVDNPdrzXsTK5voKaOM%2FRhh9HeQihXOkqfF9mP8k16x00gEZtM%2F1%2F7XnPIsV2MK%2BYtb0GOqUB5XKoeRwL3fN1Q%2BtpO9O1Zb4lj9pxM%2FhqZ1syAecP5DhN87Os8D7t%2FX0qKV%2F5Xs1di8ohHrvQw%2FtkloIQI07NlUw3K9h%2BG47zaNoNbHu9onUik0zvqSfceJ3%2FMMA34N2gPMrfu%2FaHK9O%2FSC7a6%2BhEhFrHbvQYVWrujsBtdndkSlNzRYUy9g8yk0mG0eB6NeTPr7j83lbBuUpi94YdsSgot%2FI7XUg2&X-Amz-Signature=c68a7ce3558dee324dae4b2cb6b20377d4b904c58bffcc99b1a1537753de79bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGKPRB3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGhViSULky5jqkSq52X6a0k3SNgs5JNl0JdFvsLabwcAiEA%2FKPkeFTxrpIm1gtg%2FZ2UGlIzKC0ql9YK%2FGXcantoawUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8aaOwKwHlzYo%2F6JCrcAx1eEeLihTcAAiVT8iR3Iejwb5CS7311f%2B4jLxInHO4UTXrlVLFOU3GGpTv3z3drTgEE%2BGKRtkbKD3MbA1oOZEfmZlG%2BdMCh3xhBj5BmLV56u%2FrgpUcHkyEvcqS9tJzIXmdR%2B6SHCsX5ILJuLDocHWCcF162eBbxjPnGexQVYPj%2Beiplo84ao9oE2vHDNF3BwmqTiEcemgJnD%2F%2Brt8AuCbqNVl9x4IH%2BkFpA4w5kywkir%2BX0oz0%2FKwudS6mgF8V%2F%2BKpcLfhprfBGQ8fvdMEycYFPzqODwZEj6BvkqFBWonHXCqdHBpcGuUXLeadljnqlrEzzv24ksssOod8IWAxhuw%2BzbGnd101Q7aPa%2FPVain9yai1vsrJpmvQqI5wypuxFA7VH%2B%2FXmxzw7SWLDROb8qt0HDaCiADQnw8MTMH2Pf73%2BLJPMvgFn%2Fpviv2Fh9b3rMul1B39FR7MDeLdGO1FTV1UlHZ1xCuC4vL8UR7yR9s8%2BnzKiglaN7%2FzzZMvWnhrl29RT%2BuWpxqMioSo%2Bj4b3KnyZsIwwOxo8dfOq1V3WT1XfhJo1kN%2F4Sv12DvEsd2nHVDNPdrzXsTK5voKaOM%2FRhh9HeQihXOkqfF9mP8k16x00gEZtM%2F1%2F7XnPIsV2MK%2BYtb0GOqUB5XKoeRwL3fN1Q%2BtpO9O1Zb4lj9pxM%2FhqZ1syAecP5DhN87Os8D7t%2FX0qKV%2F5Xs1di8ohHrvQw%2FtkloIQI07NlUw3K9h%2BG47zaNoNbHu9onUik0zvqSfceJ3%2FMMA34N2gPMrfu%2FaHK9O%2FSC7a6%2BhEhFrHbvQYVWrujsBtdndkSlNzRYUy9g8yk0mG0eB6NeTPr7j83lbBuUpi94YdsSgot%2FI7XUg2&X-Amz-Signature=fa43b730aca9ff64ead67760d806396fd5c80e9bc3c55f2a6a80e3f81c28b391&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
