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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOJIZOD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKoY4CNbqxGHzjkE9p2XjAcnI0rfRggyti%2Fb71T1JX4QIgJG8hMaSXyEakNt%2BwCHyvOFDXbikN6OxI%2F5nf1l%2FwRJwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPaZGxRVjdkAhHtWzCrcAxMATnW8LxEUTfda2RhdOYzT7TbUfT48S15OT5SA56Tg9Qm%2FEHavlizOrqj4Ab6xTV%2FhNZuSJ%2BqXrQoAbCym09EndosLL55XuVHYKqfeJAcLxQN1MLgc5QN3nFS5rvkzRK18Fl9qeoeaZ5F189sIC8M%2B%2B52ZmqnKYdPo1VvvIKd%2BnIBYKunNOtnikbUYmkpXtFaTxE%2B1ctKKWMhyDw9LIy6kbmfNiSEtG2U1U3GM37cvZiX48PGm4xmD2wCWs5mAVmmUJqw5ZZ9yMka0Pg7JM%2BSJy8njRK1BHF5EANRx%2FXMTG0pk2kcT0KMS9kS9mfWhz2%2BMHhwaasLwF45SSnzyhKcMiQ%2BLn4oxCobvbNdVBHmD8PBS4CRmejwRcB5zlZj60KyMbhuBfyIOZTxq%2B0QyC0BjZKN5sYotVoaZrrzm4jUDiLYrhjauQMD%2BsMJr1Ur0GmoHVxoUPi2bGdlbOy33ysOxLagCPbVPGjwyOido%2BFTmzuPXHV2c8ooRAgXHN6FhmLDW9egOmuIaFM9dl1c2RW5CGnGepBHQQblLnQhZ%2BLjzyMPHbyJwvytGwNzdawvALWUmzup6N6zi7j81Gmh%2FNZSaRlgP5QIp%2Fbvqrxf1%2BD9Kjgdcif%2FtzK3lugZuMO2ctsQGOqUBUstrEPQ9EOoe8sfpTjpKx1mEcYj4zIhw0iwx%2FQow%2FPC%2FNs5sfBGWtJgI395yeEZCMG9wetD%2F%2BDXFVKQuslJWikjPtj6PNUHWCI7uZl20RTaO%2BFDYtWe%2FXznbrnP61fBgs%2BdWKzJq1Mp5eXeB9nMS5nNd1cYldF5RB8g3sD7ka09qjr5xsBFimCKQmYgcgd4Xgcm8WubZvabSFkpm1julJu4oiLju&X-Amz-Signature=6a1f8e9d2be130e792f72facfefae1e0274cdd976353f6bace4add0b9fadea9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOJIZOD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKoY4CNbqxGHzjkE9p2XjAcnI0rfRggyti%2Fb71T1JX4QIgJG8hMaSXyEakNt%2BwCHyvOFDXbikN6OxI%2F5nf1l%2FwRJwqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPaZGxRVjdkAhHtWzCrcAxMATnW8LxEUTfda2RhdOYzT7TbUfT48S15OT5SA56Tg9Qm%2FEHavlizOrqj4Ab6xTV%2FhNZuSJ%2BqXrQoAbCym09EndosLL55XuVHYKqfeJAcLxQN1MLgc5QN3nFS5rvkzRK18Fl9qeoeaZ5F189sIC8M%2B%2B52ZmqnKYdPo1VvvIKd%2BnIBYKunNOtnikbUYmkpXtFaTxE%2B1ctKKWMhyDw9LIy6kbmfNiSEtG2U1U3GM37cvZiX48PGm4xmD2wCWs5mAVmmUJqw5ZZ9yMka0Pg7JM%2BSJy8njRK1BHF5EANRx%2FXMTG0pk2kcT0KMS9kS9mfWhz2%2BMHhwaasLwF45SSnzyhKcMiQ%2BLn4oxCobvbNdVBHmD8PBS4CRmejwRcB5zlZj60KyMbhuBfyIOZTxq%2B0QyC0BjZKN5sYotVoaZrrzm4jUDiLYrhjauQMD%2BsMJr1Ur0GmoHVxoUPi2bGdlbOy33ysOxLagCPbVPGjwyOido%2BFTmzuPXHV2c8ooRAgXHN6FhmLDW9egOmuIaFM9dl1c2RW5CGnGepBHQQblLnQhZ%2BLjzyMPHbyJwvytGwNzdawvALWUmzup6N6zi7j81Gmh%2FNZSaRlgP5QIp%2Fbvqrxf1%2BD9Kjgdcif%2FtzK3lugZuMO2ctsQGOqUBUstrEPQ9EOoe8sfpTjpKx1mEcYj4zIhw0iwx%2FQow%2FPC%2FNs5sfBGWtJgI395yeEZCMG9wetD%2F%2BDXFVKQuslJWikjPtj6PNUHWCI7uZl20RTaO%2BFDYtWe%2FXznbrnP61fBgs%2BdWKzJq1Mp5eXeB9nMS5nNd1cYldF5RB8g3sD7ka09qjr5xsBFimCKQmYgcgd4Xgcm8WubZvabSFkpm1julJu4oiLju&X-Amz-Signature=979bebfb1c871473a56fe3c7f95ea24c219471659dbc34c306142c9a42ed0f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
