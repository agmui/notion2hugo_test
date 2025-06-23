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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CWFG3U4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCgYfzTe4S2o8OaRCllToHFoph7rwSrNTCIFBC3r0x44wIgH6pTqVh2H7WrGVkZ5FUS%2FNpsQpS157MmGoVtd0Xjzsgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDP%2FD0gxentJxeC5gxyrcA9sDTdQtoz0hu4yka5psWYt9TkbxNj483dp2a29Lz0fBKEcqhXoBr9wFnTpAZ4iWzoYKmeN%2FeU5%2Buqu9RqmCcQILLUmVrBtcoRuMd8oGtPDeg%2B29i%2B81R65toYd3JzSPXe%2FDwiV1M2Lehsfz0A%2F8n58Bay4EsfOUEYRFWGe4jnwIHErOdR8n5zrew3u94XU2s1mH3kU6lC4qKH0nsc3k3Gd4LAU32ZvyQAqQrB0ZGN6w8Beisg3ObqcKQw9aKc9DPPPtY63K4pqgNOTcm91ok9pergs77E8Pqr2NYtpWyJVwE9m5X1GTg6tNJ5X%2FrFmTYApLF4yXvdwcRKgWpcAWMED%2BqsL%2FIZxm1OyB1WBaFxB%2BdHV1qFLlvPXN9xcstXLj8n%2FHJ7eOY5YMyPOKtb7brmMQGsK8KJTPtkkiJpROD5VIEVTq4acWS0bNDQE85ipCHg2%2Bwc2EHjLkl7%2F12AMaX1gg59ehadb3IhNUYwvWmxqK0bcCcqtvc%2FoKLL%2FENyiwYm5A7N2gV3zaK9jGNs9d6hLDJG5MH6%2BARboldguiZsaOsPYJQ%2BilYJi5PmbiD8ecQW%2BeU%2FkLTrUiEWumkOQRNzyNgOY1%2FmmqalpNbAOb5uzpzoik6WS2ymhSBhOvMO%2F05MIGOqUBEWbkpTxR%2FScAeUZfOMaBanSvkqIRPtM8W%2F7cekVIPYPqWJ7AOJGJ7DEaUfsk9WPGnKG5%2FxdKv1P%2Fd18HTKhmwR3BkPmmcz42IEWqjiMjwopAatgE6KpZoFAYAff7tBx5ma9ZapvnpAog4urlHUokM5lkZN2jruS6%2F957bXvcoKOS3C%2FeUl7%2FNLx781XCyOarECDlB2KSDC3cSwnWQQ70eBDcL4tV&X-Amz-Signature=ce506a385dad9c441bd8763ea842b2235ea79784453fae6ee5a7b4dc3672b201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CWFG3U4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCgYfzTe4S2o8OaRCllToHFoph7rwSrNTCIFBC3r0x44wIgH6pTqVh2H7WrGVkZ5FUS%2FNpsQpS157MmGoVtd0Xjzsgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDP%2FD0gxentJxeC5gxyrcA9sDTdQtoz0hu4yka5psWYt9TkbxNj483dp2a29Lz0fBKEcqhXoBr9wFnTpAZ4iWzoYKmeN%2FeU5%2Buqu9RqmCcQILLUmVrBtcoRuMd8oGtPDeg%2B29i%2B81R65toYd3JzSPXe%2FDwiV1M2Lehsfz0A%2F8n58Bay4EsfOUEYRFWGe4jnwIHErOdR8n5zrew3u94XU2s1mH3kU6lC4qKH0nsc3k3Gd4LAU32ZvyQAqQrB0ZGN6w8Beisg3ObqcKQw9aKc9DPPPtY63K4pqgNOTcm91ok9pergs77E8Pqr2NYtpWyJVwE9m5X1GTg6tNJ5X%2FrFmTYApLF4yXvdwcRKgWpcAWMED%2BqsL%2FIZxm1OyB1WBaFxB%2BdHV1qFLlvPXN9xcstXLj8n%2FHJ7eOY5YMyPOKtb7brmMQGsK8KJTPtkkiJpROD5VIEVTq4acWS0bNDQE85ipCHg2%2Bwc2EHjLkl7%2F12AMaX1gg59ehadb3IhNUYwvWmxqK0bcCcqtvc%2FoKLL%2FENyiwYm5A7N2gV3zaK9jGNs9d6hLDJG5MH6%2BARboldguiZsaOsPYJQ%2BilYJi5PmbiD8ecQW%2BeU%2FkLTrUiEWumkOQRNzyNgOY1%2FmmqalpNbAOb5uzpzoik6WS2ymhSBhOvMO%2F05MIGOqUBEWbkpTxR%2FScAeUZfOMaBanSvkqIRPtM8W%2F7cekVIPYPqWJ7AOJGJ7DEaUfsk9WPGnKG5%2FxdKv1P%2Fd18HTKhmwR3BkPmmcz42IEWqjiMjwopAatgE6KpZoFAYAff7tBx5ma9ZapvnpAog4urlHUokM5lkZN2jruS6%2F957bXvcoKOS3C%2FeUl7%2FNLx781XCyOarECDlB2KSDC3cSwnWQQ70eBDcL4tV&X-Amz-Signature=130525210c82f660f0d4fc145c9bb164630a99915a83887e09b2547895f9d210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
