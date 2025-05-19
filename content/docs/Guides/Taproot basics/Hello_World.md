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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634XSAT4V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDn906im3hoxXCpCUxLYdgGSKEaVFJyo3nWgtM0KRBmTAiBVGlO%2FQoLEgETRlsNBBz67IYkB5maTVy9TEMKFmsYgiyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2PmOAe9fn8J%2F5FuKtwDO%2BjW8SBi19DEg0fu3Ti3wa3ADMleCXxhI8xA%2FkCl4PY8zjN03m3lHuIn1RXyEgGfwbk8jaOqFV0DUejbOqbGeZKntDn0oJdR2IAFicaa7dwvnDYz737lOEzoCB27W82NrfKOl90g9ipd2RR%2BSkpNov%2BFPsSoeXDKGpCxlKvN0NDQKXuzwAtZyaa%2Bv3nFG0nXoJJCQ5WAfUUFmCZS1Hqj5pAs%2B5Icig68MAGEA3EFqli49vfHHD3NB2VXlPnTWuXyX%2BcJ1BTh0FJqQp4igUd%2FDjUH6E97jqo508qiqUFgPjQLDDC%2BRMAscZJAn66w2jG6B9BnB7LBn4FR%2FGvrvP9oo9UHJ%2F4dBl6KsGbdqfQ9LgaVXzrv3NdMcvdok%2BO%2FAT0R8%2BamSn49DjqpwLGj3TkM6kTY3CkRLMAAIU7NApPekX6JuDNQnlplvbgzO5%2BudZT4XNM8pUI6RqAjEQ9OwUSYM1ANaukh6OJJjFgH8%2FGUx6SnY8huq%2FuK2WEU8YJrgFQqHgLYjj3z7zqer0mc1tSt6Zxkle9jpMSHi4pKsBBxaIixKR1umHRnV8yXu86cTw6njppk0TtbxF7Na2kqvtW8%2BCvyIYJ5nKsiaI%2FicDDf2OoiaMTe196fV9HSZKUwh5OuwQY6pgH7%2B%2B5mfq5xKc7HmBG0ZTiXgmVpEXsQjBQ%2F2u9c0ui%2B%2BvhzoUNbSGzFidF3htp29Ubz%2BTs7%2Bbi9a6jJTP%2BVqyVSOLibrUOxzo2pNQH1PRMvzkmcKOSJ3LXFBwW9zt%2FjeYnRso2IwlArxxU4U63EkTEJm4Kwd43TMF%2BLMiBqnuxpZtG7AXjJ21eRavD7WyhG1nq66vi2fMgNOShbMrhyk8%2BSm2yVqQOO&X-Amz-Signature=3a33e96a47ee1f3a915ac9cb0e19d9281a88d2ece6249c3dca6923b61926fcd7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634XSAT4V%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDn906im3hoxXCpCUxLYdgGSKEaVFJyo3nWgtM0KRBmTAiBVGlO%2FQoLEgETRlsNBBz67IYkB5maTVy9TEMKFmsYgiyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2PmOAe9fn8J%2F5FuKtwDO%2BjW8SBi19DEg0fu3Ti3wa3ADMleCXxhI8xA%2FkCl4PY8zjN03m3lHuIn1RXyEgGfwbk8jaOqFV0DUejbOqbGeZKntDn0oJdR2IAFicaa7dwvnDYz737lOEzoCB27W82NrfKOl90g9ipd2RR%2BSkpNov%2BFPsSoeXDKGpCxlKvN0NDQKXuzwAtZyaa%2Bv3nFG0nXoJJCQ5WAfUUFmCZS1Hqj5pAs%2B5Icig68MAGEA3EFqli49vfHHD3NB2VXlPnTWuXyX%2BcJ1BTh0FJqQp4igUd%2FDjUH6E97jqo508qiqUFgPjQLDDC%2BRMAscZJAn66w2jG6B9BnB7LBn4FR%2FGvrvP9oo9UHJ%2F4dBl6KsGbdqfQ9LgaVXzrv3NdMcvdok%2BO%2FAT0R8%2BamSn49DjqpwLGj3TkM6kTY3CkRLMAAIU7NApPekX6JuDNQnlplvbgzO5%2BudZT4XNM8pUI6RqAjEQ9OwUSYM1ANaukh6OJJjFgH8%2FGUx6SnY8huq%2FuK2WEU8YJrgFQqHgLYjj3z7zqer0mc1tSt6Zxkle9jpMSHi4pKsBBxaIixKR1umHRnV8yXu86cTw6njppk0TtbxF7Na2kqvtW8%2BCvyIYJ5nKsiaI%2FicDDf2OoiaMTe196fV9HSZKUwh5OuwQY6pgH7%2B%2B5mfq5xKc7HmBG0ZTiXgmVpEXsQjBQ%2F2u9c0ui%2B%2BvhzoUNbSGzFidF3htp29Ubz%2BTs7%2Bbi9a6jJTP%2BVqyVSOLibrUOxzo2pNQH1PRMvzkmcKOSJ3LXFBwW9zt%2FjeYnRso2IwlArxxU4U63EkTEJm4Kwd43TMF%2BLMiBqnuxpZtG7AXjJ21eRavD7WyhG1nq66vi2fMgNOShbMrhyk8%2BSm2yVqQOO&X-Amz-Signature=6c74555990886c73d28b4b0ce39dc9851a4ac4fa7f203b5d98638279e2c9ad7c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
