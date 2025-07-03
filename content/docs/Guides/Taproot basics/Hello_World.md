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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F4ATT5H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCVmwKQX6lIO9kd1%2FRB4jhuGsZ6R69t1c4w2TfkdifN%2FQIgFjggINcSvfo%2FspL7oimYr9B%2BCykZwAjWVpcNw6z9iZkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtVstzTgUGTopKJISrcAynPTDbClAjgQZroRZ3wV%2FrnsCLnLdtUNsYydNeEuZdD%2FOjZlAaFB1d96uP98IlGBg5cyoS7IDE%2B%2FHNvyPPb5V%2Fit8Yfi9whcecb0w49rGURovGDlB1eKP02IPj2dr6NGrjSjroTNdYpaj5o0ztOCEmkFqJjocLkaUgDBJrzU8wYpIwMYQip46H9j2oCoTJ%2ByL1Ffvy9sX8xA6laxfIrUh6AuiO3fiekClkX6LJhn4DM6el0jZpHolOCyZ8PZ%2BpJrTFsSyxY8VLQapl%2FTYmaW5Wbxhm3W8gUIr9cSW7zdlt%2Fss0DZnbxLosaQ9OBjj9YobYY4qCeGWVOyDGctjNTU2jimrVjFVmNXhJeAGpBUJeKf%2F3viIqo9sV%2Bl75F9wW1U13Z4BufqvZFPiP4WfmRBliC0bl7Tqf1kHGAUYXqr52Jgg36dQNbyicqnsY%2FOtjzcVvAzqvp4w%2Fc88S57Zgv7CkjbzZTMbksDUKLwhkP1EHZ6DLfn16F%2B42ODUPIApSifW3xvi18CNsg7LIvrZYRjS6X3uQpC7%2B25rPM%2FGYNuxiGdOVc8wmHdoUn36fhbEMIONp5rGcNdGsEKvsdqR7DOKhOxdgOuekIiAXdpSnU%2B4VktnJNG4uRMwPM1XHEMM%2BvmMMGOqUBX8%2F5REAeXdPXHrHDeURtKJ1HepadEhaXz%2FCHGVwAw0ja3b5CicJ6Vo%2BoATdbezSVhzpscNoxbAXAYBZZQUtW%2Fb25a3z7LFUcYBadNYR4zfN6Cifj1Y7VQMuQI00RbJihTP0vsXvZ%2Fj0hWVxt%2ByGrrAoRWzZceKbKiaFUa8Lz3SiyOn2nWXmnXx4BJdULIB%2FhfLGTf6mCDVnhD%2FS4VKMRnp69fLtP&X-Amz-Signature=fdd108a0ebba48631cfefa1dc63f2c1db0a4ee8d9ab97800cfb42fbeaf080b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F4ATT5H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCVmwKQX6lIO9kd1%2FRB4jhuGsZ6R69t1c4w2TfkdifN%2FQIgFjggINcSvfo%2FspL7oimYr9B%2BCykZwAjWVpcNw6z9iZkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtVstzTgUGTopKJISrcAynPTDbClAjgQZroRZ3wV%2FrnsCLnLdtUNsYydNeEuZdD%2FOjZlAaFB1d96uP98IlGBg5cyoS7IDE%2B%2FHNvyPPb5V%2Fit8Yfi9whcecb0w49rGURovGDlB1eKP02IPj2dr6NGrjSjroTNdYpaj5o0ztOCEmkFqJjocLkaUgDBJrzU8wYpIwMYQip46H9j2oCoTJ%2ByL1Ffvy9sX8xA6laxfIrUh6AuiO3fiekClkX6LJhn4DM6el0jZpHolOCyZ8PZ%2BpJrTFsSyxY8VLQapl%2FTYmaW5Wbxhm3W8gUIr9cSW7zdlt%2Fss0DZnbxLosaQ9OBjj9YobYY4qCeGWVOyDGctjNTU2jimrVjFVmNXhJeAGpBUJeKf%2F3viIqo9sV%2Bl75F9wW1U13Z4BufqvZFPiP4WfmRBliC0bl7Tqf1kHGAUYXqr52Jgg36dQNbyicqnsY%2FOtjzcVvAzqvp4w%2Fc88S57Zgv7CkjbzZTMbksDUKLwhkP1EHZ6DLfn16F%2B42ODUPIApSifW3xvi18CNsg7LIvrZYRjS6X3uQpC7%2B25rPM%2FGYNuxiGdOVc8wmHdoUn36fhbEMIONp5rGcNdGsEKvsdqR7DOKhOxdgOuekIiAXdpSnU%2B4VktnJNG4uRMwPM1XHEMM%2BvmMMGOqUBX8%2F5REAeXdPXHrHDeURtKJ1HepadEhaXz%2FCHGVwAw0ja3b5CicJ6Vo%2BoATdbezSVhzpscNoxbAXAYBZZQUtW%2Fb25a3z7LFUcYBadNYR4zfN6Cifj1Y7VQMuQI00RbJihTP0vsXvZ%2Fj0hWVxt%2ByGrrAoRWzZceKbKiaFUa8Lz3SiyOn2nWXmnXx4BJdULIB%2FhfLGTf6mCDVnhD%2FS4VKMRnp69fLtP&X-Amz-Signature=e96a73893545355bf1b776ace4541fb4a69a58439257ea857ecef7d66265ea6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
