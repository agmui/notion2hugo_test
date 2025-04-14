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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUAVXZFT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmSXbPPi3%2FPf6r%2Brg7tK9w1RaSRNPUCtmofY05qwioEQIgDkFdfrZwveSk%2BbmPe2omn5fhY%2FcTU24HyoZzHngVuKUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDc5JRRksbOW03AVoyrcA3JD3g7Z4OAufBc%2FFSVFpTN3HQnfyjaxc0M9SgxervRIRed%2FIQ60y9VwlKdHaM2wrbuDzjORkYFcvHvWHG25Yez925kwBKknzOfXCgTP63yXsRgtpmUNUymjIZWpReUEEOJ9mcKLcbLy0t4bfropkocHjlxB2GT2jpa98lXKXT9pTX5evODsxUbhVUu0SLaaVGhzAebT7zmI7qznQk55167hdW1xfHkxYIEs1xxx0bQrcoHQK2%2BE2kotVqpo0YG%2B5DwyraMjEywqICRLX6Tj%2BEPwQuPUbWFgUx94EGeaRG8gzGovnD%2B56575k%2Bc7FnRteL3QEwL5xkkagS58dw5Q%2B6EeKR1NGeZM4RBB%2Bqg8WcS61Ssh5vSZ1VzYxKtXr2GHFR3FqnKuIf5aGbbZthuBohfAY6IMnadoF%2Fb2YfnW1pkM2L2%2FDHJDCNrQ73ig4I9eCuGMwSzZXJcZWuBdWt0pRhO1ikcMW4quQBFQmaygpA5dDDYeXwWk6sUuNkIxp8evuhD%2F503dao0DTDIz613ANAE7xiTOKx59gHX0seUtTRKLDXH70bmNBvZK8MsPnReCDyy%2FOe8kHHYn6IWWqKFZgODKvtLVaPqidtrQIyvn%2FTcUcgYC4K%2F3Z%2FgUmebpMN3A878GOqUBSQ70PUtZkQ1TLidI%2BnEYh2fUW2u%2F1yDon%2B%2B%2FjHBAvhHOZeH8x4imSTr0410EzHqsI4wTs8UGRUXbf00%2BIcPsyQRjk8sXeh35Sg8XjDiPVsZqENpUnij92OXUo7n0pToq9ANhO16zhCTKtOPHzy87bSXgyBZ7CxujEYEB%2BhWirRq8FcPGi3QS5pBSW%2BSRbJtzo8K4AUeZXM1yRrC7kt1Fz4NgQ4G1&X-Amz-Signature=83ac6fed6ae3716dde8d05ea98521ca838d97ee20ca3547ca2b2ed451d81182f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUAVXZFT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmSXbPPi3%2FPf6r%2Brg7tK9w1RaSRNPUCtmofY05qwioEQIgDkFdfrZwveSk%2BbmPe2omn5fhY%2FcTU24HyoZzHngVuKUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDDc5JRRksbOW03AVoyrcA3JD3g7Z4OAufBc%2FFSVFpTN3HQnfyjaxc0M9SgxervRIRed%2FIQ60y9VwlKdHaM2wrbuDzjORkYFcvHvWHG25Yez925kwBKknzOfXCgTP63yXsRgtpmUNUymjIZWpReUEEOJ9mcKLcbLy0t4bfropkocHjlxB2GT2jpa98lXKXT9pTX5evODsxUbhVUu0SLaaVGhzAebT7zmI7qznQk55167hdW1xfHkxYIEs1xxx0bQrcoHQK2%2BE2kotVqpo0YG%2B5DwyraMjEywqICRLX6Tj%2BEPwQuPUbWFgUx94EGeaRG8gzGovnD%2B56575k%2Bc7FnRteL3QEwL5xkkagS58dw5Q%2B6EeKR1NGeZM4RBB%2Bqg8WcS61Ssh5vSZ1VzYxKtXr2GHFR3FqnKuIf5aGbbZthuBohfAY6IMnadoF%2Fb2YfnW1pkM2L2%2FDHJDCNrQ73ig4I9eCuGMwSzZXJcZWuBdWt0pRhO1ikcMW4quQBFQmaygpA5dDDYeXwWk6sUuNkIxp8evuhD%2F503dao0DTDIz613ANAE7xiTOKx59gHX0seUtTRKLDXH70bmNBvZK8MsPnReCDyy%2FOe8kHHYn6IWWqKFZgODKvtLVaPqidtrQIyvn%2FTcUcgYC4K%2F3Z%2FgUmebpMN3A878GOqUBSQ70PUtZkQ1TLidI%2BnEYh2fUW2u%2F1yDon%2B%2B%2FjHBAvhHOZeH8x4imSTr0410EzHqsI4wTs8UGRUXbf00%2BIcPsyQRjk8sXeh35Sg8XjDiPVsZqENpUnij92OXUo7n0pToq9ANhO16zhCTKtOPHzy87bSXgyBZ7CxujEYEB%2BhWirRq8FcPGi3QS5pBSW%2BSRbJtzo8K4AUeZXM1yRrC7kt1Fz4NgQ4G1&X-Amz-Signature=7fb8bc0df280dc2547201ae72a8386be7799d5c29a175b5750935705000edb32&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
