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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVGE5OU%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjAehPxfAt6nQzbRzOVU59gah%2Fow91vT6DcbnplhLPiAiEAn2LUsjTVWPq372yoIbQexcxtrVsXIsSivVMSF1NZP7MqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOdN72GLjS2g38RGSrcA9EgDGhFNcxISu5i7e9KbHZLvehb7G8z%2BFKY0rycGEW9AlOv8yw3Uplw6%2BmOg7xakjlSBLd4FCWEhYVhR9vJFC2KikmUqlJ0N%2F%2FLVqYfI6wCHyJtn36CBLb0n6yZhu4cFyUA38YLqjzJ50mahNlnpEzdye0bIK2L6EPryTKvL3JmDj2U%2Fj069n8A%2Bbp1UaYnKVSlaq8m0lZb1rSP1obzBjH2KMYTwvSVve1wtuMD6%2FzFS6DgasP4y5yL4DFTFAbgduBSnEjmDiH7flFT29hPMurLEW3vE67%2FwPaLijd4qwbuR4LEdH15wuX1klOxtBDoKi7UrA6el%2FXBU%2FAcUy%2F9MdY0Y1x0al3%2F5Da55irPYFDIOO9q0i1IsSTmojhGMWQEAefTzFvGIX41PAuoiZPLrZZ1s%2BKs43YxOOehrEK%2FSSNU6byxtzyFB%2BpanNV1VLnT0%2F9GczDLfERxj5wtfahCXAee5tGC2ff5Aq2JkBeRjV6FisToTuo57A%2BDWfnpxwxR4kxdk4cg9XS2BnO9eQDbdCmPnfWWaChoqrcZ4R3GvpbnpkTjDXg69L5LReaqsajDjRNWRM2FW289cmIoraOnBJD%2BcaE4wYCNu9LKx2H%2FHaHmUm3OTcNJWy33qciZMIrBmNEGOqUBjxWwBdLOyE52eBebJwNrHqatl2fphTOrGrxgaslCedmC7TvVguNSxmnXqe300hh%2FEuvN395%2Bsx%2FYbLzYWbDuOQg8%2BQap7%2BcZ2%2Fa%2BEdqvQyBmWh1N7SqetXMdH6QPSTlVQxgy5ZFGuWSSgkdHZWDFOwDZGIpsKXwn4w5y1qy9qIrQ2OjRyXr6ZEjSZ%2BUw6OHhzKtxl082heVzaSvo%2BbYMA6QpIe3k&X-Amz-Signature=6d28e0a8325441c1ffa3e6637a8c7f1bda191558992e773590b0a1128a915b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVGE5OU%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjAehPxfAt6nQzbRzOVU59gah%2Fow91vT6DcbnplhLPiAiEAn2LUsjTVWPq372yoIbQexcxtrVsXIsSivVMSF1NZP7MqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOdN72GLjS2g38RGSrcA9EgDGhFNcxISu5i7e9KbHZLvehb7G8z%2BFKY0rycGEW9AlOv8yw3Uplw6%2BmOg7xakjlSBLd4FCWEhYVhR9vJFC2KikmUqlJ0N%2F%2FLVqYfI6wCHyJtn36CBLb0n6yZhu4cFyUA38YLqjzJ50mahNlnpEzdye0bIK2L6EPryTKvL3JmDj2U%2Fj069n8A%2Bbp1UaYnKVSlaq8m0lZb1rSP1obzBjH2KMYTwvSVve1wtuMD6%2FzFS6DgasP4y5yL4DFTFAbgduBSnEjmDiH7flFT29hPMurLEW3vE67%2FwPaLijd4qwbuR4LEdH15wuX1klOxtBDoKi7UrA6el%2FXBU%2FAcUy%2F9MdY0Y1x0al3%2F5Da55irPYFDIOO9q0i1IsSTmojhGMWQEAefTzFvGIX41PAuoiZPLrZZ1s%2BKs43YxOOehrEK%2FSSNU6byxtzyFB%2BpanNV1VLnT0%2F9GczDLfERxj5wtfahCXAee5tGC2ff5Aq2JkBeRjV6FisToTuo57A%2BDWfnpxwxR4kxdk4cg9XS2BnO9eQDbdCmPnfWWaChoqrcZ4R3GvpbnpkTjDXg69L5LReaqsajDjRNWRM2FW289cmIoraOnBJD%2BcaE4wYCNu9LKx2H%2FHaHmUm3OTcNJWy33qciZMIrBmNEGOqUBjxWwBdLOyE52eBebJwNrHqatl2fphTOrGrxgaslCedmC7TvVguNSxmnXqe300hh%2FEuvN395%2Bsx%2FYbLzYWbDuOQg8%2BQap7%2BcZ2%2Fa%2BEdqvQyBmWh1N7SqetXMdH6QPSTlVQxgy5ZFGuWSSgkdHZWDFOwDZGIpsKXwn4w5y1qy9qIrQ2OjRyXr6ZEjSZ%2BUw6OHhzKtxl082heVzaSvo%2BbYMA6QpIe3k&X-Amz-Signature=c5998a42ef10ea06900e3c455f96223c9498ed08563b2e1e02982d09e7f43c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
