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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VPW35ND%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK28mkb89xjFUE0BqHXQqvObaFRI0ziXuv4BBGCpuwjAiEAtd0xQnMOAxAQLUi1WurPYTpkUiGkGztbrS5Vv6ht%2Fg4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIddelDLttBHSDQv5CrcA7FmxrqQV3iDM5eVOcxq9xxF%2FLjDA1WKZ8A0BGUSKnPj2V3V9Hbb1ywZf1%2FcTesVFvIs%2FCAldi8KVU85LajPW2hq5YUPi4IVE28h7gfZTbjIy2NX3XlqMg6gMga%2BFfL3sk%2Bho9zvixdukBKWYsqJf3va%2F41HHECSYmaoTWBCm8sxd09atv2DzE37yMSbZ%2FyII0brzj3t4Tk0y9yP2wJj65mTTKJqx0N9yK3alw%2Fw%2BsmwXNcvgCCVAesomRlnJ4Yb4MOT6s6bo5X8ddoeUZuHIVGLEmGhwsLtBtn1A1PhxU6Wsx%2FYpwRxLghYjPgnqrRhn9Rk%2Bv0CaujEx9BfIYCMFNlyJc57ciw3gBzi17Tpb7GBSwZYZ8VI6fSVQOGMZmIS2%2BvMgSIpndSx0wWAHZTUVl9VPnpW%2F5wZgdWiZ6lPDQLtrumdutwd5wZ3iKzw%2ByH6qjoXwBrkZbua%2FPuqgQ9BlIifYbISrCCwAOEpnABfhOQaGqHEkDwIt6wQDVW8zGDRhwKzRcMHvXXpbl01WTyq7vmWl3kv9jClNZBhphsWpfO1UhrjWQAD4RmwIggvlEPtiLRlHI0Xb8pbG1WSpDrXbOcszPXE4f2njf86bUWqvAzrEuWNZaFpnDmr20jOMMCy38QGOqUBywb69gylyYYlbo%2BmQI%2B%2BdOibVswiMtg3e3pJNtO1YGR3DZqq00i77k%2FjpzgM2H2ZX%2FvgAFMWEqSmaqTSQwYkR6wt6rHjb8SGHrPOfuSkkBtEWh5jjnkZK9p2Xt0rgOl9clMy7wrnMwwuCSZ3uI%2Bu7QFlkf8QbkT%2FWc1aTazgfN7%2BoHO9WId1CnMJJkSRdz8BqfYUu60IIeBVVYA4YzZq5iuQp8B9&X-Amz-Signature=6a8cd7491385ad2f4a81e71a42bab6ffacee41051e3c460657246a1388178fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VPW35ND%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK28mkb89xjFUE0BqHXQqvObaFRI0ziXuv4BBGCpuwjAiEAtd0xQnMOAxAQLUi1WurPYTpkUiGkGztbrS5Vv6ht%2Fg4qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIddelDLttBHSDQv5CrcA7FmxrqQV3iDM5eVOcxq9xxF%2FLjDA1WKZ8A0BGUSKnPj2V3V9Hbb1ywZf1%2FcTesVFvIs%2FCAldi8KVU85LajPW2hq5YUPi4IVE28h7gfZTbjIy2NX3XlqMg6gMga%2BFfL3sk%2Bho9zvixdukBKWYsqJf3va%2F41HHECSYmaoTWBCm8sxd09atv2DzE37yMSbZ%2FyII0brzj3t4Tk0y9yP2wJj65mTTKJqx0N9yK3alw%2Fw%2BsmwXNcvgCCVAesomRlnJ4Yb4MOT6s6bo5X8ddoeUZuHIVGLEmGhwsLtBtn1A1PhxU6Wsx%2FYpwRxLghYjPgnqrRhn9Rk%2Bv0CaujEx9BfIYCMFNlyJc57ciw3gBzi17Tpb7GBSwZYZ8VI6fSVQOGMZmIS2%2BvMgSIpndSx0wWAHZTUVl9VPnpW%2F5wZgdWiZ6lPDQLtrumdutwd5wZ3iKzw%2ByH6qjoXwBrkZbua%2FPuqgQ9BlIifYbISrCCwAOEpnABfhOQaGqHEkDwIt6wQDVW8zGDRhwKzRcMHvXXpbl01WTyq7vmWl3kv9jClNZBhphsWpfO1UhrjWQAD4RmwIggvlEPtiLRlHI0Xb8pbG1WSpDrXbOcszPXE4f2njf86bUWqvAzrEuWNZaFpnDmr20jOMMCy38QGOqUBywb69gylyYYlbo%2BmQI%2B%2BdOibVswiMtg3e3pJNtO1YGR3DZqq00i77k%2FjpzgM2H2ZX%2FvgAFMWEqSmaqTSQwYkR6wt6rHjb8SGHrPOfuSkkBtEWh5jjnkZK9p2Xt0rgOl9clMy7wrnMwwuCSZ3uI%2Bu7QFlkf8QbkT%2FWc1aTazgfN7%2BoHO9WId1CnMJJkSRdz8BqfYUu60IIeBVVYA4YzZq5iuQp8B9&X-Amz-Signature=94a2004e60d4429594fedbed2900b67cc014c666ffd13c0912a29317861ef536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
