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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7HH6KM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDad%2FVhMYHKDaUkdIxb%2BJROKqJqbwGcAYpzt6pUGYJjlAIgEqeOgEoriOdzMCaLvIJ8wu9DIo9nwwsz396D%2BD95AYEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI31Q2%2F8B4DlZpVatSrcA5rppj2XL%2F5D5yZaYfFamVYFg4Nd9CmH9ruUJsQTKrTc%2BXfyN9N%2BigdDqzrNnE0%2Bb1J1%2Fv46nUVcEt4lgGr%2FoR9%2FXnXWb23x2chaWIAWw75cbNzQ%2B1Z5iKuGEwftMuol8rsX3Ln1RxRWfEPhs2FNi3aueBnl2qBa%2FZ8dPiPPURCeitC8oP7zoEU%2FIbnk9kYMVlu%2FhWgCT2zDw3wfXEOBELRcd3lmKaIE7QrUI0c3ThC94KoKb9CGUsiDIJUABSlTIRqrS%2BjJiJipT%2B92g0WKD93WepEuybUcFYvogWUX8vPfHfA5Kt19UDeB22G43bGVBVmhFzr1sB9l0uYJtnmsgQ1X5MOfpIxx83ejhKVHdy9%2F%2Bq9ZQdaG1yBINXox6Uu6v5as5RvdgdVr3GGm0yR01FatmRmTfL1UEe51cbjeoqFRZVni2TN8djNLb116irW9y%2Fw5ivutqHodQOae%2Bmh7evf%2FePJeu0mVB4BOD6dKpHr%2FMvuMRDXMWdcl%2B5S01bMMKvNMa7EhbIHBS%2Bm5keRcdy86DPLbS5LzHvwWwLMwAVYFs03o8HrSPL04DQbiCdKL%2FnJT84ZXcuOwp%2BZh%2BQHSOd%2B2tKo2%2FKnbN2EUiW%2BDowdr2%2B%2F9CXMCf%2FkN6y3KMJ7Ei78GOqUBCgVswphfOW0K1NSkmMz2LR%2FQttT1Ow7KnTSEJJ3BsrHX4168nPzdiXj83ZzAoEYHSHALX8DTqYj64EDKquwllGJG2b76QS8BjQh8NKU4Q6DrUX3o8IIcpVeTKwcJ4%2BSN%2BFv5T5NpfTllJbB65AhW87%2FhWie4e8Ghopz3jKoXtNp4ZLcyathL44smfsufCIVximUWGLnMS8hJaWXZgKysXl4UMxmZ&X-Amz-Signature=7d03845df8a21da3a5e4f7cd32e2b0faed27cfbb2db632640f99531540d8297c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7HH6KM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDad%2FVhMYHKDaUkdIxb%2BJROKqJqbwGcAYpzt6pUGYJjlAIgEqeOgEoriOdzMCaLvIJ8wu9DIo9nwwsz396D%2BD95AYEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI31Q2%2F8B4DlZpVatSrcA5rppj2XL%2F5D5yZaYfFamVYFg4Nd9CmH9ruUJsQTKrTc%2BXfyN9N%2BigdDqzrNnE0%2Bb1J1%2Fv46nUVcEt4lgGr%2FoR9%2FXnXWb23x2chaWIAWw75cbNzQ%2B1Z5iKuGEwftMuol8rsX3Ln1RxRWfEPhs2FNi3aueBnl2qBa%2FZ8dPiPPURCeitC8oP7zoEU%2FIbnk9kYMVlu%2FhWgCT2zDw3wfXEOBELRcd3lmKaIE7QrUI0c3ThC94KoKb9CGUsiDIJUABSlTIRqrS%2BjJiJipT%2B92g0WKD93WepEuybUcFYvogWUX8vPfHfA5Kt19UDeB22G43bGVBVmhFzr1sB9l0uYJtnmsgQ1X5MOfpIxx83ejhKVHdy9%2F%2Bq9ZQdaG1yBINXox6Uu6v5as5RvdgdVr3GGm0yR01FatmRmTfL1UEe51cbjeoqFRZVni2TN8djNLb116irW9y%2Fw5ivutqHodQOae%2Bmh7evf%2FePJeu0mVB4BOD6dKpHr%2FMvuMRDXMWdcl%2B5S01bMMKvNMa7EhbIHBS%2Bm5keRcdy86DPLbS5LzHvwWwLMwAVYFs03o8HrSPL04DQbiCdKL%2FnJT84ZXcuOwp%2BZh%2BQHSOd%2B2tKo2%2FKnbN2EUiW%2BDowdr2%2B%2F9CXMCf%2FkN6y3KMJ7Ei78GOqUBCgVswphfOW0K1NSkmMz2LR%2FQttT1Ow7KnTSEJJ3BsrHX4168nPzdiXj83ZzAoEYHSHALX8DTqYj64EDKquwllGJG2b76QS8BjQh8NKU4Q6DrUX3o8IIcpVeTKwcJ4%2BSN%2BFv5T5NpfTllJbB65AhW87%2FhWie4e8Ghopz3jKoXtNp4ZLcyathL44smfsufCIVximUWGLnMS8hJaWXZgKysXl4UMxmZ&X-Amz-Signature=1fea6af22c4c48dc33a2ff8a9b88ad79e2d6aed7b9ea39183c118182087c4104&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
