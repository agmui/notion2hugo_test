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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGSHN5Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvn6DsvznVnQg9z1wF4HFAi9e7Xn7uOBLF7LW0xdLkFAIhAIUHbY%2BFgvUnFO4AHfptmL9WUEzJDMuLcxXP44atYeCcKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6DfUgNvb2AC37qlEq3APY3EwMFbN7QFf1b1G2QEO%2B6ISBzOhGIKdHvA6FkOrH9Amtcgkmxy2fDaauEgwCLCcjDwSWVD%2Fm7F5SjaeK87enjlWEt04QgibKsEvfGMHDfsqHG08CpIFzYYSKb01XbUD0rw5bZy9pYf3UBM7tuteKuTdTeHSuBT0J%2Fe%2BaqGSp%2B6glreZPt4sdoG3ILWQpnQqfGBFel1EYmEQI17HH%2BUv8aDs9c2rMnm4Lrkpz9Ua%2BUwR%2BSqWhG3G2EVf1NZZIxTKHHFomWVNvE7rgOEBQvO6NWlsytUhnhp52CAs4n%2BePOA4vskKjHF9Mzak5nUf2lFi9ydlsD5yp%2BLglFcVkMrIw%2FZ5Fen7ytcOKyuwUf5ejitq8jP1emqc%2BJ%2FeCahXS7iEnaXCecJSxXLOBqBgsa8LpWMfrWo4u552hKbIz7ElKwp15VOLloIoXaZLFgaYdqIVT%2BGRUdzUSHqoTukeTzVyHGvVcwQ1Tx%2BqT1ZW5rYjLu%2BQW%2BaHFBk%2B3EUD2c9I1%2F%2BkxWLotzdkQKs05pE1lWi7jnM8WwgsS6PoJlDtE4gGcF3d3JJ%2F9EboM8OZY2BRVosHHwPceLFb6puM1TsL636TrgmJ6VPbAUVw8aa5ViU6uzSRkckEIDIM%2F6QPXuzDQoqrEBjqkAaQ4h2adx1mg%2BwQvMP9CvDFtLCc8Vb0OYLbSGzARiyLQMTBetlcz%2BGVeY80O7PGVUpBEiyB0pj0r1GtJ%2FKnDwNdtQdsFyv1O7qVjHRnvWrG8E0xxGsgtdngmA5ko5pTS149f1LL7MRrMCtp9vQGqKNdV91eyePAksBIajs1IAfAZJ2rw83Ps7wOxkp8f7P5bb0BeDa77eQA%2Biy8Pp%2Brl02oyZs3C&X-Amz-Signature=bfad87e295c639ab6a6048f41a349324cf04d0df45d04e6fb294bfb4b0f69196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGSHN5Q%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T025349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvn6DsvznVnQg9z1wF4HFAi9e7Xn7uOBLF7LW0xdLkFAIhAIUHbY%2BFgvUnFO4AHfptmL9WUEzJDMuLcxXP44atYeCcKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6DfUgNvb2AC37qlEq3APY3EwMFbN7QFf1b1G2QEO%2B6ISBzOhGIKdHvA6FkOrH9Amtcgkmxy2fDaauEgwCLCcjDwSWVD%2Fm7F5SjaeK87enjlWEt04QgibKsEvfGMHDfsqHG08CpIFzYYSKb01XbUD0rw5bZy9pYf3UBM7tuteKuTdTeHSuBT0J%2Fe%2BaqGSp%2B6glreZPt4sdoG3ILWQpnQqfGBFel1EYmEQI17HH%2BUv8aDs9c2rMnm4Lrkpz9Ua%2BUwR%2BSqWhG3G2EVf1NZZIxTKHHFomWVNvE7rgOEBQvO6NWlsytUhnhp52CAs4n%2BePOA4vskKjHF9Mzak5nUf2lFi9ydlsD5yp%2BLglFcVkMrIw%2FZ5Fen7ytcOKyuwUf5ejitq8jP1emqc%2BJ%2FeCahXS7iEnaXCecJSxXLOBqBgsa8LpWMfrWo4u552hKbIz7ElKwp15VOLloIoXaZLFgaYdqIVT%2BGRUdzUSHqoTukeTzVyHGvVcwQ1Tx%2BqT1ZW5rYjLu%2BQW%2BaHFBk%2B3EUD2c9I1%2F%2BkxWLotzdkQKs05pE1lWi7jnM8WwgsS6PoJlDtE4gGcF3d3JJ%2F9EboM8OZY2BRVosHHwPceLFb6puM1TsL636TrgmJ6VPbAUVw8aa5ViU6uzSRkckEIDIM%2F6QPXuzDQoqrEBjqkAaQ4h2adx1mg%2BwQvMP9CvDFtLCc8Vb0OYLbSGzARiyLQMTBetlcz%2BGVeY80O7PGVUpBEiyB0pj0r1GtJ%2FKnDwNdtQdsFyv1O7qVjHRnvWrG8E0xxGsgtdngmA5ko5pTS149f1LL7MRrMCtp9vQGqKNdV91eyePAksBIajs1IAfAZJ2rw83Ps7wOxkp8f7P5bb0BeDa77eQA%2Biy8Pp%2Brl02oyZs3C&X-Amz-Signature=49ce3d3809a8c824cec02b556ca3070d08bdcce5a64e59baa5381551f6f82761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
