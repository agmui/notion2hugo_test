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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKISTPO%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDooiJ9Vt3LNUEu8I1%2F7N0PTYyS3AmPclJ2u9%2B%2FaZgKVwIhAM57lVEkaHSrBVenVWYu2WHHjQ4mFwf9I54D3uAA2pxTKv8DCEcQABoMNjM3NDIzMTgzODA1IgyLJLY7W29yCasTGqkq3ANQCeA8s7YcAjg5iNhB85lyn9ypb11D8PmplDvZAoqQYD3QnHXp3VDSrKYbunf2cqjRNgQ4X7EQJYn5jBnvMBi66zFQXgoZOeQaq%2FftLSVHEGBXIt9qfEc5NX2Q0pGyLM7dkM5lO128DkoLg83cArcwdALB4o9CUxsZahY1woEacXlEERzWg8jvfoHTjFV8EQHMelADM50xwCf2NkuPrCJU3%2BqYeXTcK0mv5uwrDVMj8fUo02HVFjLEcyO%2Bytj9In38J%2FlvzjhZ322jSCb987JV658y4XYHyhA33le8bfK4h%2F2m0YVGMWKpgpBJN6zcstCpTrs2qEhoQxQavs2n7HVKpqIulx349mkHrcg6EpycmWfc%2FtRx1DAmPm6fLfRchKO9MdTQRniP6hz5PnfoVqPdgGuNNXoQCRNoJOadh73Pi59oz0kvhSrMi%2Fuju2YVrUCHIJM327nn0cPGuQzADWvDXKSxL80OWYg%2FfgolUKvHJfrs8%2BQIXr4pOpmSXDtYIGiZt9noATr145FKI%2Bdd3MVQ6WHBMs0bjldLUNZlg2QhmwehEPGN6kL8vEzV9tSvR2UOzK8Vt4WiAb2GzOC0cZQO4cpcI%2FspTV%2Fw5uo%2BF1TWAVaH%2BrtV%2BXp0lvTu7zCx%2Fau%2BBjqkAY4kSLL3dhFFHOgSIfehBR9WW3d0S6DFlRn3StQ6fgZRzMzgYmtbP8up1AhYDsM2gn2YeKWvOPiDh1%2Fufvu26Cz%2Ft%2FM26lBbjHLa5lFoF3y0QiK%2BdHLxukouQmXDPbdna%2BUAdqfUTeBYVg%2F0ZLw0TN%2Fu0bW%2Fuga%2BWeX%2BHcNth9Q89dlDXRGn1bTxen2cRc6rbwkQRtEQcqKpwJ1vdtlxw340VFjY&X-Amz-Signature=1f2f97dda4d1da5105ad38a829e910e3d149f61cebaffc077ac1b5c94ea5a571&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKISTPO%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDooiJ9Vt3LNUEu8I1%2F7N0PTYyS3AmPclJ2u9%2B%2FaZgKVwIhAM57lVEkaHSrBVenVWYu2WHHjQ4mFwf9I54D3uAA2pxTKv8DCEcQABoMNjM3NDIzMTgzODA1IgyLJLY7W29yCasTGqkq3ANQCeA8s7YcAjg5iNhB85lyn9ypb11D8PmplDvZAoqQYD3QnHXp3VDSrKYbunf2cqjRNgQ4X7EQJYn5jBnvMBi66zFQXgoZOeQaq%2FftLSVHEGBXIt9qfEc5NX2Q0pGyLM7dkM5lO128DkoLg83cArcwdALB4o9CUxsZahY1woEacXlEERzWg8jvfoHTjFV8EQHMelADM50xwCf2NkuPrCJU3%2BqYeXTcK0mv5uwrDVMj8fUo02HVFjLEcyO%2Bytj9In38J%2FlvzjhZ322jSCb987JV658y4XYHyhA33le8bfK4h%2F2m0YVGMWKpgpBJN6zcstCpTrs2qEhoQxQavs2n7HVKpqIulx349mkHrcg6EpycmWfc%2FtRx1DAmPm6fLfRchKO9MdTQRniP6hz5PnfoVqPdgGuNNXoQCRNoJOadh73Pi59oz0kvhSrMi%2Fuju2YVrUCHIJM327nn0cPGuQzADWvDXKSxL80OWYg%2FfgolUKvHJfrs8%2BQIXr4pOpmSXDtYIGiZt9noATr145FKI%2Bdd3MVQ6WHBMs0bjldLUNZlg2QhmwehEPGN6kL8vEzV9tSvR2UOzK8Vt4WiAb2GzOC0cZQO4cpcI%2FspTV%2Fw5uo%2BF1TWAVaH%2BrtV%2BXp0lvTu7zCx%2Fau%2BBjqkAY4kSLL3dhFFHOgSIfehBR9WW3d0S6DFlRn3StQ6fgZRzMzgYmtbP8up1AhYDsM2gn2YeKWvOPiDh1%2Fufvu26Cz%2Ft%2FM26lBbjHLa5lFoF3y0QiK%2BdHLxukouQmXDPbdna%2BUAdqfUTeBYVg%2F0ZLw0TN%2Fu0bW%2Fuga%2BWeX%2BHcNth9Q89dlDXRGn1bTxen2cRc6rbwkQRtEQcqKpwJ1vdtlxw340VFjY&X-Amz-Signature=011e50108224df23bf908dc664c29b1a7c6431f4d0dffef0837ba2217ed6ac14&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
