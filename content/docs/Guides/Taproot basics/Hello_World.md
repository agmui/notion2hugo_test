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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ACXTD2J%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRqsBSLXFph7f9TG9t1YdXD1Lc6fwASdYHGKnaukRICAiEA%2Bl9SWH5OLJx7ZD4Q6YpfWpP9aaz3qVTXOYhsiPI3tHUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHukJtGm5sbnJPHVdCrcA7UkEu8zpRY8uDQGj4OpNDEkJgaqEXLcu%2FbkzIxtqm0NVxhukCJHjma9zkVE6IejxUd%2BcQhZSRiSS3rY8qKHTrD%2Btz%2FXWXQWk3zGSVAa%2FK6Gw8mOXi6TAGPyGdHLKtNOaLXHBlTrYcWwAFgGxRODKFSA4PgOxPn%2FL56SP5sR4eFtSrIwXOnRTQWJR5RB%2FtD8QNJuFVF5q7AXEgeTeTHH%2BD3BVAkg5GO33RDjHSkqhWUByGLaBywsqgtEDpFR6RfUoPTdVJ3jLwCUOnIl2aVP6Y1VE1plKxq%2FjxxKotXyjabUkIG7omlDBdIz8gKbmgckgj9CWaQibvvYWsgkhSR%2BJZIrUH%2BtIQyYNsnBG2gHkk02F2giaDIFNlsV9H0AsYC6C0NKDAZcfsfIiwkmy%2F8KU7uOsvRKNGX3sAJGI93Z60ecleyUSfaoM%2Fv8q3qqo899ofk1p0S7arHUUxciZzHEk%2B8sHsqXo%2Fo8EMpGOubF50Lzj5IKR%2Fk8mHaUN1wzCL2a%2FiihrOExu8%2Bk016mw4muhzFw%2FOZ6FaNC%2FakubAG3us3I5m5iBLlLWdeBXdgAFZT3rqLYB5aQctFqW0X3BJUGzXUPo%2F%2BhsIXdKIzazD9igFQ2WtlS9rVHxqvOjLvWML%2Bhzr8GOqUBO4MG122AdCeqAghReCi9ZGAdISgvdtdPAGI2ND2GD8cSJtWilSiBE6YmR104arEMT5MlTlsUADVFN8fiEyN%2BYwB2KNm51boyrwN%2FmErh1M9uPH%2BusFJ76lTBhRUtEvRD93t%2Fy5gxQ%2BDax9NiQRNftOSbNwIph6ruNbstHbcitGhWrNI60WaUBGgClcttqmRy0R%2FlgcoIYhJyNI84VnL6NPXMWTgi&X-Amz-Signature=b1267beb7124cbf8e046d8e7079d047f49565d3817410dd7227938c6c70939f9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ACXTD2J%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRqsBSLXFph7f9TG9t1YdXD1Lc6fwASdYHGKnaukRICAiEA%2Bl9SWH5OLJx7ZD4Q6YpfWpP9aaz3qVTXOYhsiPI3tHUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHukJtGm5sbnJPHVdCrcA7UkEu8zpRY8uDQGj4OpNDEkJgaqEXLcu%2FbkzIxtqm0NVxhukCJHjma9zkVE6IejxUd%2BcQhZSRiSS3rY8qKHTrD%2Btz%2FXWXQWk3zGSVAa%2FK6Gw8mOXi6TAGPyGdHLKtNOaLXHBlTrYcWwAFgGxRODKFSA4PgOxPn%2FL56SP5sR4eFtSrIwXOnRTQWJR5RB%2FtD8QNJuFVF5q7AXEgeTeTHH%2BD3BVAkg5GO33RDjHSkqhWUByGLaBywsqgtEDpFR6RfUoPTdVJ3jLwCUOnIl2aVP6Y1VE1plKxq%2FjxxKotXyjabUkIG7omlDBdIz8gKbmgckgj9CWaQibvvYWsgkhSR%2BJZIrUH%2BtIQyYNsnBG2gHkk02F2giaDIFNlsV9H0AsYC6C0NKDAZcfsfIiwkmy%2F8KU7uOsvRKNGX3sAJGI93Z60ecleyUSfaoM%2Fv8q3qqo899ofk1p0S7arHUUxciZzHEk%2B8sHsqXo%2Fo8EMpGOubF50Lzj5IKR%2Fk8mHaUN1wzCL2a%2FiihrOExu8%2Bk016mw4muhzFw%2FOZ6FaNC%2FakubAG3us3I5m5iBLlLWdeBXdgAFZT3rqLYB5aQctFqW0X3BJUGzXUPo%2F%2BhsIXdKIzazD9igFQ2WtlS9rVHxqvOjLvWML%2Bhzr8GOqUBO4MG122AdCeqAghReCi9ZGAdISgvdtdPAGI2ND2GD8cSJtWilSiBE6YmR104arEMT5MlTlsUADVFN8fiEyN%2BYwB2KNm51boyrwN%2FmErh1M9uPH%2BusFJ76lTBhRUtEvRD93t%2Fy5gxQ%2BDax9NiQRNftOSbNwIph6ruNbstHbcitGhWrNI60WaUBGgClcttqmRy0R%2FlgcoIYhJyNI84VnL6NPXMWTgi&X-Amz-Signature=ce637d6f3fa2192952c6eca516fb0939644973cf26723500be6e7b06db1f84ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
