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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQRU3Q4L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDoxN7%2B5UuB6uloTamBzbtGtrPFT%2BlwjcCiKajXx10OTwIhAMn0DMzhjqHHkL%2BjPMyTOlitdOx1EtIqgHzylFq%2BGBlQKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCTIHqlfXBxz7kMxsq3APatHhJEKZYqbMQN7eczpgPAEewTWcg5a7D6APy%2BhBzaZm0lnVIsCbkV6Pml6HDiYe3skKs9gYXfIMtZofwVqcRMbu4Q8YVGk%2Fdw%2BNn6rGXWAKykKO%2By47vkeIqVD%2FiFLREyvDFgerYGBq01gGIdIN7zqLpD%2FXxYxec88DaNuFsYleWZ6d69xmA09CAspiNVMpRXYpFFzNAmxsg7425KXU7MMW0%2FqHD%2FIyr3E9w0tv6mj9ot3bTxAnGQAy7cR%2BLop3Zq0smgXOk7pC6DMmHRditUstqlMQompV1mZLZyHt6Ehu0tCRcVRFcx4Qp48pSCyDCL3OdPE3OtI8mzPTyxFhQf8f%2FvxiiI2EW1Ary4pAcgATlKZXU08UiW%2BMk6sQ4A0MhYhvXuR8sDKpIAEaDASQIPuhz9cx63RRBvhAfJIRCkVsNk%2ByCN65rchqDgQPx3u6Oqd8jhZRdDTEt%2B3zZdPnAG4E0KO6rdhnStEiwfQF748jwL%2FcZ1PCGChda%2Fvzcfzb3XqTEn%2BjxmpMxMi3c6fU%2BAVh1%2BDFXG7ZnT6AtQoxDVju27TXrIaFp%2FPYpO%2FegNvvLxeMaMcT2V0h9SfMF3b9S1Dh9ahO7yNvTlxliY%2FmosfpA85g%2FwECib9CwCDCJ%2BInBBjqkAYSC2noMQi5B2DfDIdq2xnVD6NY%2F6kHctuX0%2Fi0RUAkjyapWTm5m6KR4g98WQozpdET7hGkxZlMeQGEQthfZ%2FD3xNo0b3PoMY71DBaFqFmFJbAUWQIecbnAJg4fDYmTYeFH%2BvjI2CgmlfXY5pGyJaA4UoPCjhkkSsXxArQ6ov3qjQva29EB5egNyNRAtk1yLxcvLJL3LYq%2FHCQKE%2Fag%2FBR63BEkF&X-Amz-Signature=10e144149a0c513b34af02c00ffb3780864eee6c3cd4d02795fb11afba582b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQRU3Q4L%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDoxN7%2B5UuB6uloTamBzbtGtrPFT%2BlwjcCiKajXx10OTwIhAMn0DMzhjqHHkL%2BjPMyTOlitdOx1EtIqgHzylFq%2BGBlQKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCTIHqlfXBxz7kMxsq3APatHhJEKZYqbMQN7eczpgPAEewTWcg5a7D6APy%2BhBzaZm0lnVIsCbkV6Pml6HDiYe3skKs9gYXfIMtZofwVqcRMbu4Q8YVGk%2Fdw%2BNn6rGXWAKykKO%2By47vkeIqVD%2FiFLREyvDFgerYGBq01gGIdIN7zqLpD%2FXxYxec88DaNuFsYleWZ6d69xmA09CAspiNVMpRXYpFFzNAmxsg7425KXU7MMW0%2FqHD%2FIyr3E9w0tv6mj9ot3bTxAnGQAy7cR%2BLop3Zq0smgXOk7pC6DMmHRditUstqlMQompV1mZLZyHt6Ehu0tCRcVRFcx4Qp48pSCyDCL3OdPE3OtI8mzPTyxFhQf8f%2FvxiiI2EW1Ary4pAcgATlKZXU08UiW%2BMk6sQ4A0MhYhvXuR8sDKpIAEaDASQIPuhz9cx63RRBvhAfJIRCkVsNk%2ByCN65rchqDgQPx3u6Oqd8jhZRdDTEt%2B3zZdPnAG4E0KO6rdhnStEiwfQF748jwL%2FcZ1PCGChda%2Fvzcfzb3XqTEn%2BjxmpMxMi3c6fU%2BAVh1%2BDFXG7ZnT6AtQoxDVju27TXrIaFp%2FPYpO%2FegNvvLxeMaMcT2V0h9SfMF3b9S1Dh9ahO7yNvTlxliY%2FmosfpA85g%2FwECib9CwCDCJ%2BInBBjqkAYSC2noMQi5B2DfDIdq2xnVD6NY%2F6kHctuX0%2Fi0RUAkjyapWTm5m6KR4g98WQozpdET7hGkxZlMeQGEQthfZ%2FD3xNo0b3PoMY71DBaFqFmFJbAUWQIecbnAJg4fDYmTYeFH%2BvjI2CgmlfXY5pGyJaA4UoPCjhkkSsXxArQ6ov3qjQva29EB5egNyNRAtk1yLxcvLJL3LYq%2FHCQKE%2Fag%2FBR63BEkF&X-Amz-Signature=e5366910e04473a1fa352ce095b22fd7a33b238adcc5001f327cb38eb3835f89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
