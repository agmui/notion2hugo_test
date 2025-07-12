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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSEOSGJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmgiDZQhUIe0q3Rc1ufBU6jdqs79kXoB0xMCtFVL0K9AIhALbAMqmzyPjxSkCf7NXC9547tFvGLc6uqmU%2Fhn1l0Vp%2BKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkS7K%2FBY%2F%2BjWoLNusq3APTm1idKU8XbWf2LN1oaP8bCGVW6dRVFiiTtrGXZrpJxH2aF23Kfhz6o2%2Bfb33HrUelCVTxGhMAESX4JUGW4%2FbL%2FCCw%2B%2FaLuI%2FnZ3FDWofxYEGBJQ%2BUZeHmEp41vEyrG57BB85SBfpV2UhnZo0gg0OzBjzOM1VyyzYAMnrgNdw17BIb8licvgdHdsO7b1EC95vJtbql4Jxet9q42faQOLwH4uv2kTVQOGpGz1fMaFsXdOz3OT4EUhkOubl%2Fzu%2Bmlt28Otp0NQrEc7JhNC7EUfrEFJ8e%2BpXCE4RQysWJlqI6aLL%2FwAGEq%2BcajgkZqs95AAT3vd7%2FVIvw81upjYrNEAv4FL1C2tHeoAudYvID%2F5S%2B92GKLVv3BHK2aFR1dtt8nmU7SDOkV8B4%2Bf%2FS1LsNZoUo7FFR7ewvjdiRY1AgCGc4rZKExqr0G4iLdOFUDGxT8Hq7iuPJY1FlAPm0M%2BiXv2qNU5EBaHwqlv1snE5wLU7C0%2FJL18EkiOFiXXmal5OZudOxonCoL8uZy7DrzZ98ufKhMxRRccM0ZsSfkZBBuPBK8ocWnOTvPtRyXWGY1zTm8V0f2pDBIIkBEVeZx07ooJMbFh3kq48s6CFHc50COWVxvYJ3JUSjqzX5SfPxCTDVrsvDBjqkAX9FKOoy0srFMqyh4Ckeg1iKYwpz%2Fi29o3UU%2FlAQsdmeSO5y%2BXaD3I8ksSmtCjFmMaODDV8uDgx8vrnnb2CqLgy4ewfTGzHzUQ2Wf9fENFP0amTfUzgSprWu8FhgJ1HUPzn0quuHFuB%2Bhx2rs83PfTe1CpssAvsyvsJU4Akl8uVCc3h4BaJpmatA%2B8QvZ%2FOBkQEJzdcFb2cJy6zsAW1y284pyPF7&X-Amz-Signature=28d320095a0932d929510b11afd5c8c3e537fa84f2ce47a130a45dfa8e6e15e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSEOSGJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmgiDZQhUIe0q3Rc1ufBU6jdqs79kXoB0xMCtFVL0K9AIhALbAMqmzyPjxSkCf7NXC9547tFvGLc6uqmU%2Fhn1l0Vp%2BKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkS7K%2FBY%2F%2BjWoLNusq3APTm1idKU8XbWf2LN1oaP8bCGVW6dRVFiiTtrGXZrpJxH2aF23Kfhz6o2%2Bfb33HrUelCVTxGhMAESX4JUGW4%2FbL%2FCCw%2B%2FaLuI%2FnZ3FDWofxYEGBJQ%2BUZeHmEp41vEyrG57BB85SBfpV2UhnZo0gg0OzBjzOM1VyyzYAMnrgNdw17BIb8licvgdHdsO7b1EC95vJtbql4Jxet9q42faQOLwH4uv2kTVQOGpGz1fMaFsXdOz3OT4EUhkOubl%2Fzu%2Bmlt28Otp0NQrEc7JhNC7EUfrEFJ8e%2BpXCE4RQysWJlqI6aLL%2FwAGEq%2BcajgkZqs95AAT3vd7%2FVIvw81upjYrNEAv4FL1C2tHeoAudYvID%2F5S%2B92GKLVv3BHK2aFR1dtt8nmU7SDOkV8B4%2Bf%2FS1LsNZoUo7FFR7ewvjdiRY1AgCGc4rZKExqr0G4iLdOFUDGxT8Hq7iuPJY1FlAPm0M%2BiXv2qNU5EBaHwqlv1snE5wLU7C0%2FJL18EkiOFiXXmal5OZudOxonCoL8uZy7DrzZ98ufKhMxRRccM0ZsSfkZBBuPBK8ocWnOTvPtRyXWGY1zTm8V0f2pDBIIkBEVeZx07ooJMbFh3kq48s6CFHc50COWVxvYJ3JUSjqzX5SfPxCTDVrsvDBjqkAX9FKOoy0srFMqyh4Ckeg1iKYwpz%2Fi29o3UU%2FlAQsdmeSO5y%2BXaD3I8ksSmtCjFmMaODDV8uDgx8vrnnb2CqLgy4ewfTGzHzUQ2Wf9fENFP0amTfUzgSprWu8FhgJ1HUPzn0quuHFuB%2Bhx2rs83PfTe1CpssAvsyvsJU4Akl8uVCc3h4BaJpmatA%2B8QvZ%2FOBkQEJzdcFb2cJy6zsAW1y284pyPF7&X-Amz-Signature=2a0f916b0368c21382269b0b463cf14ce364964f7cdd6c65758277b6ec188d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
