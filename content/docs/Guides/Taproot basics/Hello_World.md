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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OMEXBMU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCO9AvsK5YvvwV67rFxbaR2ZQym5eD6kaMYTbRuc5Ee5gIgBjwuBrLeTBLVCDxf3ncjWd6qc0VuP1ZfHnAe0T7nOdUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6RXssQbt3HwPXbJSrcA8UFAz3YFg%2FkI8p21CyqQNr0MTF6sqDtLaMjVwK22gyRvM4X4Y6okgU6ZmgrVCCuYqBp%2BnFyon4ODdLeZlr9N9r9Ab29AkiK9r3fXU5tXHPbIPP%2FjoNy8IXpPyPAmtQuY6t301Q%2BmmOxuqrKXr0MUVlLoPhqE7GAmapvZqX4xv0n82OzQOfIBob6BbfI5dNUnMCbzWnnLrh5XDdrT22RRawaU4LJJT1M0G9KOvAFXpmrxuzMg9fnHHDu9yWt4Vb%2FVkHZHWPDvmmdfV%2FeICh8U%2B1GdE9uYXYjXboEQDczvFAofUvV881OZeYle7%2FaAM6QbfmRQ236l%2BWKgrMQsOBHzwtZWX26xwstyRV51H2nLOVcj67gVN8nF6LhBDd%2BD8eQ%2BozQP2GbhzCU7z%2BvJzV0r1R4Bd%2FEDFe1%2FbCT5%2B0Wvp7J8ifRFornAu7xZzeWhHu%2FjadFCv5jHYhOJyaZNiEunISIXRsNi%2Bop6DTK23fhsAczhrekScIIq9wSaeQ%2BPn2qfcNgPJo1JQNBlufvMq0tekA%2Fcm5yISHP2BwwqaGWTjtq3Azk%2FF56m%2B8XTilhbrsu9jZaq3Jpq%2F9YpWBwhUU1QhDsHDNysX%2FnzfFvCuBxCZ3TXBIiZYC4wmIltXrgMKbglsAGOqUBvHX6%2B%2FBPVuVyH6SDHq3b%2FKlTz1T9oWBfNzSGYf0Gx48ZAbcpfmIPKl5%2BOmnlQ1ioPcVhD6GisX6QWPmYvJbxOZoytTNPI6byqe0sYnwrf6cBfRKl6PJqsoc1t3prY6QMihGNDUeUDwLYSdQJBmMWl3UUY378quWQXewLgdNbCAQbFuCW3XXnNfKKXUSVH2Yp9qLdJpzYajOX5ZWSjoOIM%2FWlBYPe&X-Amz-Signature=7dc5da2f16b1da7ace01fec3613b6c336d81305c95ab2d54d30e318b0085ac53&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OMEXBMU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCO9AvsK5YvvwV67rFxbaR2ZQym5eD6kaMYTbRuc5Ee5gIgBjwuBrLeTBLVCDxf3ncjWd6qc0VuP1ZfHnAe0T7nOdUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6RXssQbt3HwPXbJSrcA8UFAz3YFg%2FkI8p21CyqQNr0MTF6sqDtLaMjVwK22gyRvM4X4Y6okgU6ZmgrVCCuYqBp%2BnFyon4ODdLeZlr9N9r9Ab29AkiK9r3fXU5tXHPbIPP%2FjoNy8IXpPyPAmtQuY6t301Q%2BmmOxuqrKXr0MUVlLoPhqE7GAmapvZqX4xv0n82OzQOfIBob6BbfI5dNUnMCbzWnnLrh5XDdrT22RRawaU4LJJT1M0G9KOvAFXpmrxuzMg9fnHHDu9yWt4Vb%2FVkHZHWPDvmmdfV%2FeICh8U%2B1GdE9uYXYjXboEQDczvFAofUvV881OZeYle7%2FaAM6QbfmRQ236l%2BWKgrMQsOBHzwtZWX26xwstyRV51H2nLOVcj67gVN8nF6LhBDd%2BD8eQ%2BozQP2GbhzCU7z%2BvJzV0r1R4Bd%2FEDFe1%2FbCT5%2B0Wvp7J8ifRFornAu7xZzeWhHu%2FjadFCv5jHYhOJyaZNiEunISIXRsNi%2Bop6DTK23fhsAczhrekScIIq9wSaeQ%2BPn2qfcNgPJo1JQNBlufvMq0tekA%2Fcm5yISHP2BwwqaGWTjtq3Azk%2FF56m%2B8XTilhbrsu9jZaq3Jpq%2F9YpWBwhUU1QhDsHDNysX%2FnzfFvCuBxCZ3TXBIiZYC4wmIltXrgMKbglsAGOqUBvHX6%2B%2FBPVuVyH6SDHq3b%2FKlTz1T9oWBfNzSGYf0Gx48ZAbcpfmIPKl5%2BOmnlQ1ioPcVhD6GisX6QWPmYvJbxOZoytTNPI6byqe0sYnwrf6cBfRKl6PJqsoc1t3prY6QMihGNDUeUDwLYSdQJBmMWl3UUY378quWQXewLgdNbCAQbFuCW3XXnNfKKXUSVH2Yp9qLdJpzYajOX5ZWSjoOIM%2FWlBYPe&X-Amz-Signature=2777ec1f5ceb0e3c9b0d6907f25e2ee9ec4680d09c0d03349924bba1fc620b86&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
