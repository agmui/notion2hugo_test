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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7TRETC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdnGeNERrjX%2BUuHAlwbQFYJSWJyavXYDo%2Fs9JtgWCXCwIgVTsjQdysVBWvvaJCLRW7askRnf7DPj0Rd8fMwtksZSIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXTYdkdfO7TqAipcircA3R%2Baijfsnh5yHQ8EVQ34TYPUAEtUml9%2FffKZOt16VhYxd3ziubO7M1DOhOsxY6ATH3IEJq93dcfQZCZf1TDbdncYJEQb%2BkMpgWbvZnEAY%2FOtkIPiRaPNiTtc%2FgMXC6eJZEx9%2BnujLgjdgsuBawkzREFXCK%2FRCoUsBMAnqGO%2BdetT33XbGz6rRzluN2aPUgcbNoYAoUz8%2BcWD%2B0bJSpmBBkfGOb9%2BD7gfh%2F%2BuCGDEVGeQNFXMHYVnf3sqNnGBkG1J3Rkeygxw3fRAosB948Aq%2F0iNTYmhfbM0ot%2BX6o5Ryf1QXx97Cr3dNXjbgL9ohi9U77BkcwTQqFvBukhluHN%2FQ%2BWBqydi7wPeVwfsVYVyFYMrdT72QHIfaYXtfaqFvZq0OhmOUPRq0Y%2BmlXKetf5fcDsIVIFDsE8SbPJylA4tP4pAfIb9tLxRhvdjJNTbgy9ahVD0p88Nhc3sVKFUnfOdCix5rgf1uKiWarI43tDBVxYf2oZqdn%2BzOfC491cdiqy3GsNoQ8%2BxBC%2Bq2VhnIevoOCHVNSANSATspl6%2Fv0hregknheffTgs7yoGArMk78ujTdJHorfMEuDCS9XcGKcu3ZVQxX%2F7TJ3UIY81oTmvemuOfecz1nKa22u7WR2YMKWziL8GOqUBGJLNxaLhQa1yl8MFmjgj9cX05XWyyP1qaQMa3VJ3zjgxTaN1xeKz%2BrWAVfqAfY3Uld3nbfygybQA9k7K6sdHzyxofNtwMajJnm%2BSr2ocern%2B6sxKb%2Fj%2FzMFEzVUIUjydaseif0FRembWPEqBfmZ221njEpcuqTm%2BkujyOl%2BqPF%2BYvSORKrAmhK%2Fp0fR%2Bfsuv44carjFg2tL87blDKZW%2B6vmocUjH&X-Amz-Signature=50bf7b3d20fbb938916b90d4fd195561b0eea9da680ace0e051ea7746836ce88&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7TRETC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdnGeNERrjX%2BUuHAlwbQFYJSWJyavXYDo%2Fs9JtgWCXCwIgVTsjQdysVBWvvaJCLRW7askRnf7DPj0Rd8fMwtksZSIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXTYdkdfO7TqAipcircA3R%2Baijfsnh5yHQ8EVQ34TYPUAEtUml9%2FffKZOt16VhYxd3ziubO7M1DOhOsxY6ATH3IEJq93dcfQZCZf1TDbdncYJEQb%2BkMpgWbvZnEAY%2FOtkIPiRaPNiTtc%2FgMXC6eJZEx9%2BnujLgjdgsuBawkzREFXCK%2FRCoUsBMAnqGO%2BdetT33XbGz6rRzluN2aPUgcbNoYAoUz8%2BcWD%2B0bJSpmBBkfGOb9%2BD7gfh%2F%2BuCGDEVGeQNFXMHYVnf3sqNnGBkG1J3Rkeygxw3fRAosB948Aq%2F0iNTYmhfbM0ot%2BX6o5Ryf1QXx97Cr3dNXjbgL9ohi9U77BkcwTQqFvBukhluHN%2FQ%2BWBqydi7wPeVwfsVYVyFYMrdT72QHIfaYXtfaqFvZq0OhmOUPRq0Y%2BmlXKetf5fcDsIVIFDsE8SbPJylA4tP4pAfIb9tLxRhvdjJNTbgy9ahVD0p88Nhc3sVKFUnfOdCix5rgf1uKiWarI43tDBVxYf2oZqdn%2BzOfC491cdiqy3GsNoQ8%2BxBC%2Bq2VhnIevoOCHVNSANSATspl6%2Fv0hregknheffTgs7yoGArMk78ujTdJHorfMEuDCS9XcGKcu3ZVQxX%2F7TJ3UIY81oTmvemuOfecz1nKa22u7WR2YMKWziL8GOqUBGJLNxaLhQa1yl8MFmjgj9cX05XWyyP1qaQMa3VJ3zjgxTaN1xeKz%2BrWAVfqAfY3Uld3nbfygybQA9k7K6sdHzyxofNtwMajJnm%2BSr2ocern%2B6sxKb%2Fj%2FzMFEzVUIUjydaseif0FRembWPEqBfmZ221njEpcuqTm%2BkujyOl%2BqPF%2BYvSORKrAmhK%2Fp0fR%2Bfsuv44carjFg2tL87blDKZW%2B6vmocUjH&X-Amz-Signature=7d89ecd254dcc9baa04087cd881c4b0e4bb4a1a03caaf604cac2082c2fce2c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
