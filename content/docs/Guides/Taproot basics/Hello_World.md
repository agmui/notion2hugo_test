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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466325AUG4I%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUQGHCovm%2BwcMiYXeHgDopxCtpglnbaiBiRuBB06i2BAiEAsYc1xSFW9wcB6FJb5zMDU6Yb3at2OE5FKckkod%2BUcg4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqi8k4S2%2BUjaEbBySrcA2vgFI1rQkk3L9tqzSFQolWlzlwybae9ZpGGZyq5VqY2tG9V%2F0enRncrhxErzZIhd%2F0cqydApktmbFgznGykmfTZRrhoeSdakQfSn33xLrPt2CwVqrfBkG9s2jM10co0av4hp8I8%2Fn7qZV316KNJv%2F%2FmEtiqX3ppKkWGhjsTcmIgjOeIZyDeAOn%2FUF%2FZTy8vHCBYaSPYPyv024vm6aljZE4GPozghlHHkJlEIKJT8fq8EJaxjUUiTOUIRvsi%2Bdc5BGl2zW7jXkA4IWEO9Tj3eBXRBKJaTrVy3AV7ABs9YzZtC8yJM%2FHV1yZ7OzR%2BUUDCEA94gJ7NuAuLwaofBCbUosh4pxvsKQUSVv4eNWsYve%2FGFJQZHYIE1WH6rkURNAys4kfBOF6Hms2dVnqmCVtBZSzWdt27DshJRPWLFrQGrKAgkqc8AnA0%2Bu9YzhkLVIYbnwPh6jxfE6DkvFPqgXPq34QeaEqAuBiFyYyBzoVuceX25mp1A8c4CBj0NXW%2BtV%2Fy7U5%2BU7ZKOkNLQSX9u3IEOLPe%2FKq7L42gI8l1breDYAyu2xR05S0lLK1cczu4WseZ08Ac9qoyz2ENvUlLigIOlyT%2FOpd6Wvw1UefQ7v8iyHyAb3p%2BY1B1oYwMrZWfMIS8yb4GOqUBfhbzENFjdMQThn6hK5Os0XYFcKWA3dSyKtPOI6zeGvdOc2hqM%2Fgr92D2S3poOdvIkIXQtVVuVWPJD7soscSZuvZparFZpZnhIs2iS0wFioUPV16fGqwdO6qSlZlecDEVma%2Fe1KQ3MYBGkbdqlD32qdDC0YgEgDR0rvwUB%2BnaW%2BIwdw9EXi3jyk9BdH71LD4oVtM4PWhoNaIjKf2HTyN6ciLuHxZF&X-Amz-Signature=3ab3a91ecfd0813203e8159b79830e5a1d64c4f70ab76843d032b89b294badda&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466325AUG4I%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUQGHCovm%2BwcMiYXeHgDopxCtpglnbaiBiRuBB06i2BAiEAsYc1xSFW9wcB6FJb5zMDU6Yb3at2OE5FKckkod%2BUcg4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqi8k4S2%2BUjaEbBySrcA2vgFI1rQkk3L9tqzSFQolWlzlwybae9ZpGGZyq5VqY2tG9V%2F0enRncrhxErzZIhd%2F0cqydApktmbFgznGykmfTZRrhoeSdakQfSn33xLrPt2CwVqrfBkG9s2jM10co0av4hp8I8%2Fn7qZV316KNJv%2F%2FmEtiqX3ppKkWGhjsTcmIgjOeIZyDeAOn%2FUF%2FZTy8vHCBYaSPYPyv024vm6aljZE4GPozghlHHkJlEIKJT8fq8EJaxjUUiTOUIRvsi%2Bdc5BGl2zW7jXkA4IWEO9Tj3eBXRBKJaTrVy3AV7ABs9YzZtC8yJM%2FHV1yZ7OzR%2BUUDCEA94gJ7NuAuLwaofBCbUosh4pxvsKQUSVv4eNWsYve%2FGFJQZHYIE1WH6rkURNAys4kfBOF6Hms2dVnqmCVtBZSzWdt27DshJRPWLFrQGrKAgkqc8AnA0%2Bu9YzhkLVIYbnwPh6jxfE6DkvFPqgXPq34QeaEqAuBiFyYyBzoVuceX25mp1A8c4CBj0NXW%2BtV%2Fy7U5%2BU7ZKOkNLQSX9u3IEOLPe%2FKq7L42gI8l1breDYAyu2xR05S0lLK1cczu4WseZ08Ac9qoyz2ENvUlLigIOlyT%2FOpd6Wvw1UefQ7v8iyHyAb3p%2BY1B1oYwMrZWfMIS8yb4GOqUBfhbzENFjdMQThn6hK5Os0XYFcKWA3dSyKtPOI6zeGvdOc2hqM%2Fgr92D2S3poOdvIkIXQtVVuVWPJD7soscSZuvZparFZpZnhIs2iS0wFioUPV16fGqwdO6qSlZlecDEVma%2Fe1KQ3MYBGkbdqlD32qdDC0YgEgDR0rvwUB%2BnaW%2BIwdw9EXi3jyk9BdH71LD4oVtM4PWhoNaIjKf2HTyN6ciLuHxZF&X-Amz-Signature=f7edfb5e39010bdfda894e15d8eb0117ec2823d2f63854b6e0c5f64999cd4c44&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
