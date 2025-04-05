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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AOU3YM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx7zOqgWsB1adedcAi6NrCtEfgToJ6ILB2GmmOEhulcgIgQrye3hz%2B%2FGhN6J41rfKwNInKuxWFIQR030x%2BpNSjvncq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDDRvRAo%2F7oYG8WimpCrcAzhCBwy8CvVmAjajF059mjm8vOwSNf%2F5Oqh0%2FwyYdaI8qZ9PpeGeiHAdnj12PTi4xSp7GLLKBbYfyO%2FBBCZ73u7eeqhBlxu8R2ZEcGbLXQl4rT20Fr8jlUlGlx4cWMVKk2CE1ZLhyUMIILV7DEYutUmgXY3O375O7gbSYejlT%2BM4sRu10SdbdzcpAfjtoPhF0SQLznSpzjwPBzb%2FWWFwcT7ZQMobWndQW7VKJyg4AZ7QAelkpH0%2FyBvyAc%2BCsctip0hr2mLx%2F%2BtwLJ6CvU%2Bpon%2BEwVb202ennioIFIPW2QFLvGxEVTi9ofTE6hUHMCBs%2FTo3ddiCaXGGf%2FCleWmmMfaIkDyD9CZALOXt4wYDUknpY1nXoKhEziFP3kV9F%2BujpgXaSZgTzY9tGpbnKYXMnpqXiBOkWkgEMFGPFaxP3U26QiQVqkDkmXdG1KZKYgzKBPTM7OLPhnltI6nIFR898GlieS%2BF6cztY28CFR4ro2qZINOBrICre1dwL%2Bk4hPX2OVvaPo3CRpwLfmEGqkojEHJ19nurps4dG1xtgxdtTvihcfh%2FWxuMyjEJnPKThWjSA%2Fk1ffDrMtknZD4849F4Av1FigVAC8wBE2Y6htgb7jfNit8%2BwpA0kZti1Ix4MLDvwb8GOqUBf%2FwnTyU8DUfmBEh6PWqDnFe5XNv9F9nHr%2F1KGhc097q36RcaE7aewfn602lHnBJNTc0ZOWenISA3JlhfmUOTgwkNNVqle8YdZ%2F97K0AZJndYlSuuD4X9uKqIUQyClWMQl9isAdp6AK7BTwM1SPY2gYRBmWQ9%2BfcVmVqvJnv44oCsN%2BeQTWTESVnUW%2FNFcuuH6C5XtSr5LE0uQSVMyYyYjpfywNnq&X-Amz-Signature=df96ba85f21f96904d8cac43f64f4de6baab957fcae9b35bff0a70d5248b6db4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AOU3YM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx7zOqgWsB1adedcAi6NrCtEfgToJ6ILB2GmmOEhulcgIgQrye3hz%2B%2FGhN6J41rfKwNInKuxWFIQR030x%2BpNSjvncq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDDRvRAo%2F7oYG8WimpCrcAzhCBwy8CvVmAjajF059mjm8vOwSNf%2F5Oqh0%2FwyYdaI8qZ9PpeGeiHAdnj12PTi4xSp7GLLKBbYfyO%2FBBCZ73u7eeqhBlxu8R2ZEcGbLXQl4rT20Fr8jlUlGlx4cWMVKk2CE1ZLhyUMIILV7DEYutUmgXY3O375O7gbSYejlT%2BM4sRu10SdbdzcpAfjtoPhF0SQLznSpzjwPBzb%2FWWFwcT7ZQMobWndQW7VKJyg4AZ7QAelkpH0%2FyBvyAc%2BCsctip0hr2mLx%2F%2BtwLJ6CvU%2Bpon%2BEwVb202ennioIFIPW2QFLvGxEVTi9ofTE6hUHMCBs%2FTo3ddiCaXGGf%2FCleWmmMfaIkDyD9CZALOXt4wYDUknpY1nXoKhEziFP3kV9F%2BujpgXaSZgTzY9tGpbnKYXMnpqXiBOkWkgEMFGPFaxP3U26QiQVqkDkmXdG1KZKYgzKBPTM7OLPhnltI6nIFR898GlieS%2BF6cztY28CFR4ro2qZINOBrICre1dwL%2Bk4hPX2OVvaPo3CRpwLfmEGqkojEHJ19nurps4dG1xtgxdtTvihcfh%2FWxuMyjEJnPKThWjSA%2Fk1ffDrMtknZD4849F4Av1FigVAC8wBE2Y6htgb7jfNit8%2BwpA0kZti1Ix4MLDvwb8GOqUBf%2FwnTyU8DUfmBEh6PWqDnFe5XNv9F9nHr%2F1KGhc097q36RcaE7aewfn602lHnBJNTc0ZOWenISA3JlhfmUOTgwkNNVqle8YdZ%2F97K0AZJndYlSuuD4X9uKqIUQyClWMQl9isAdp6AK7BTwM1SPY2gYRBmWQ9%2BfcVmVqvJnv44oCsN%2BeQTWTESVnUW%2FNFcuuH6C5XtSr5LE0uQSVMyYyYjpfywNnq&X-Amz-Signature=2f2a297707a57b8d3bba9eeef844b10c7bc97f64c757ca72955fd2a70f0b0ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
