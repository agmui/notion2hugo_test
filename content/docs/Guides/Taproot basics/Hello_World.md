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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMK2HGSB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanc%2FJWhmJm%2FiG9kYdLsRGPvF4aFyPBY88%2FQasUcEPoAiEAkr6%2FFbZvV4CVqJQ2vOVQnVEAEvWbPXmYth5yDjBWvVcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJ2BpW2po9URB6N79CrcA08QvVN32VuX49mz5hfYnaVHK4qZ0mZX1dPE%2FCSYgNK%2BF6aqW%2BRE9F04GzOWQMKsIPs49iKXkZ1EnJmgtZqzw%2BajWZWCAhfp6A7K4MVTDVWlL8lUTbBARE8ndq3%2F5EdcONfF0ziIPuluSjt1R8G8enL5sZGLER3SBBbu9invCziYJCbhklJgcmBu6GPNIlpNah1qXjU0VzLdpYfFyUaT%2FF%2Fl5e5isl%2BzRpgbFB%2FcoUXQEBIKYxvdMcJ%2BuWoMUq1D9q%2BPm7mQZ5GH8xl5klQcriNXVbA74gAgVkU7P25JSXA2CFjlL8RkiWv3EuUTEvNbLuhhpKQQuWh%2BvmCdKEMErFdP6AbfULGXSoGSF1MKI1nh8%2BDKtmiUErdlVDvnWa7zXiKdoD4mQ2kLNiSqN8wybqpN7H7lhS63UmHt35mnkWcRkch2yvKjKAn9YQdtfx9dxbRkSV2bEFARgsmcA9zICbNQ8N17%2F4PhGpimBoQ9CR35OHdvdhtY%2BTHkty%2BZOzlT%2FCBlHvUypa1gFcrkWCh5d6U9bGyNYgDeuPfsprumJbunXRvu8pzmvClInnqX3qy4eCuoSFdYP8TutMx1lW9hCzJqt5MPNjMqSRS1QtrfN326OY9x8HoX3MorVEDpMOO0kb8GOqUBVBsojXCGRrOMYtdz7ZqxzN2PO41BsBsx1Ot2gYPYPrdOfWTaLN8hogq1u0XjL6YZ1oSkitc4UGLXUcSWzA%2BrIqxEaYxxPNxbmhupY256JOdrY3VtBiyXhCdS1OSoob4ZitwWgEwtXNhOXk5RGz2knl%2BqJT%2Bel47bAzrg6lSBrQsP0dEXIgZXG1QRxd6kIl0%2FjFivEYEx583k3w5w9XLaMq2xFQ9d&X-Amz-Signature=62a5775c3c18370918ea873977510751f6f79ff70aa08b5026843a204667f0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMK2HGSB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHanc%2FJWhmJm%2FiG9kYdLsRGPvF4aFyPBY88%2FQasUcEPoAiEAkr6%2FFbZvV4CVqJQ2vOVQnVEAEvWbPXmYth5yDjBWvVcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJ2BpW2po9URB6N79CrcA08QvVN32VuX49mz5hfYnaVHK4qZ0mZX1dPE%2FCSYgNK%2BF6aqW%2BRE9F04GzOWQMKsIPs49iKXkZ1EnJmgtZqzw%2BajWZWCAhfp6A7K4MVTDVWlL8lUTbBARE8ndq3%2F5EdcONfF0ziIPuluSjt1R8G8enL5sZGLER3SBBbu9invCziYJCbhklJgcmBu6GPNIlpNah1qXjU0VzLdpYfFyUaT%2FF%2Fl5e5isl%2BzRpgbFB%2FcoUXQEBIKYxvdMcJ%2BuWoMUq1D9q%2BPm7mQZ5GH8xl5klQcriNXVbA74gAgVkU7P25JSXA2CFjlL8RkiWv3EuUTEvNbLuhhpKQQuWh%2BvmCdKEMErFdP6AbfULGXSoGSF1MKI1nh8%2BDKtmiUErdlVDvnWa7zXiKdoD4mQ2kLNiSqN8wybqpN7H7lhS63UmHt35mnkWcRkch2yvKjKAn9YQdtfx9dxbRkSV2bEFARgsmcA9zICbNQ8N17%2F4PhGpimBoQ9CR35OHdvdhtY%2BTHkty%2BZOzlT%2FCBlHvUypa1gFcrkWCh5d6U9bGyNYgDeuPfsprumJbunXRvu8pzmvClInnqX3qy4eCuoSFdYP8TutMx1lW9hCzJqt5MPNjMqSRS1QtrfN326OY9x8HoX3MorVEDpMOO0kb8GOqUBVBsojXCGRrOMYtdz7ZqxzN2PO41BsBsx1Ot2gYPYPrdOfWTaLN8hogq1u0XjL6YZ1oSkitc4UGLXUcSWzA%2BrIqxEaYxxPNxbmhupY256JOdrY3VtBiyXhCdS1OSoob4ZitwWgEwtXNhOXk5RGz2knl%2BqJT%2Bel47bAzrg6lSBrQsP0dEXIgZXG1QRxd6kIl0%2FjFivEYEx583k3w5w9XLaMq2xFQ9d&X-Amz-Signature=f505181750e05599e9613d7a3707b7329532c2b3986eaa7f827d0500dd0afb09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
