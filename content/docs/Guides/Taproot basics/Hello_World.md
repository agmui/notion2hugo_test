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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657H6LSJI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVVFa%2FOPb1rcuccD%2B7HwoqsZueZqVjzbLMPDCk7T57AAiAl%2BpnsjjPYb3lNa4XtfbELzUACS176xwiTcsxyCeuUhCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMse89cHEfmOGpw13CKtwDIbabWaIUr33tzBB8pzT3NHGSn5rhFXTVKWUCyhS6DHhmH%2Fe%2FQeU0Cyao0kcSpgaoiptPM8U4%2FFq1IiNQNueI3GZ4ZxUm%2FNwh5sFkFD1Y6Lam56BwmMG%2BWaVyThBYPg5wfyCGNyzWWJihTgFyFHEdDr0ZQ0cE1toIzUGy%2Fpjo%2BsMkr45HNihg9R%2BlUjARzPJSaVsy%2Bp5sq41Tx1FeaqgsLNQP4LQOucq%2FlP0QwtYtrOLSezzNGacpeFx0QaKQcMR0sKfCgNMEk4IThJZdkawEW9mS%2FPN6RbwaW9GOPl%2F9uOWWOZPF7tawbDa%2BaVj77ECmIiAzFub9JBWgXyRGQ1FQgWcTiqhXQubNACNbwJ5JfiXBSkcu73HNKhipIZWSX6JnxRtfuG%2Fc%2BLs3e5Zs6EjAeiSKifzWw1W0shMew6TOufEsrNFKO9YHpazrp6m6W74PEWalV1fIayy%2BSFUytaJGp%2BTPnJ4pmiFKUWfCAh7NszQ5Nk8ZmftiHN3XvLXv%2FOyIkNoh5Y1K0ejwenDSEVOeS1l8LthO6BGWPeuvzXPu7jR566DG3ZjlPImrO2OtP62cd9hLGe0taLeN%2F6vgXGY3ZnaIqLJ5Pd7by17wqBIGhtfB1CAeApWZBjkn4g8w7rr7wAY6pgFqdnN2tpOZnLF2vAIclkhachrIFvH1qG%2FeC8EkhJCbMspUsa%2BWVavg1%2B02FYMsC6j2vZ92ww6o43qqWcFWuggFsU27tVre2l8TMQvI1MS32NCa3M0dsZ8yC8%2FIMUrV39JzlgPgzncQrS2Ceoh2i3Al8WsfkbIYj5wxaJ3KsVuru8x4FK3iWLG%2F1b9%2Btfuq%2BVQC9mHSzroslc2RkK2RGlOdySZ%2BCQre&X-Amz-Signature=4df1908e08d97923308cbe51448e43093d2d2eac6576f4b0c0aa27d0ffb249bd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657H6LSJI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVVFa%2FOPb1rcuccD%2B7HwoqsZueZqVjzbLMPDCk7T57AAiAl%2BpnsjjPYb3lNa4XtfbELzUACS176xwiTcsxyCeuUhCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMse89cHEfmOGpw13CKtwDIbabWaIUr33tzBB8pzT3NHGSn5rhFXTVKWUCyhS6DHhmH%2Fe%2FQeU0Cyao0kcSpgaoiptPM8U4%2FFq1IiNQNueI3GZ4ZxUm%2FNwh5sFkFD1Y6Lam56BwmMG%2BWaVyThBYPg5wfyCGNyzWWJihTgFyFHEdDr0ZQ0cE1toIzUGy%2Fpjo%2BsMkr45HNihg9R%2BlUjARzPJSaVsy%2Bp5sq41Tx1FeaqgsLNQP4LQOucq%2FlP0QwtYtrOLSezzNGacpeFx0QaKQcMR0sKfCgNMEk4IThJZdkawEW9mS%2FPN6RbwaW9GOPl%2F9uOWWOZPF7tawbDa%2BaVj77ECmIiAzFub9JBWgXyRGQ1FQgWcTiqhXQubNACNbwJ5JfiXBSkcu73HNKhipIZWSX6JnxRtfuG%2Fc%2BLs3e5Zs6EjAeiSKifzWw1W0shMew6TOufEsrNFKO9YHpazrp6m6W74PEWalV1fIayy%2BSFUytaJGp%2BTPnJ4pmiFKUWfCAh7NszQ5Nk8ZmftiHN3XvLXv%2FOyIkNoh5Y1K0ejwenDSEVOeS1l8LthO6BGWPeuvzXPu7jR566DG3ZjlPImrO2OtP62cd9hLGe0taLeN%2F6vgXGY3ZnaIqLJ5Pd7by17wqBIGhtfB1CAeApWZBjkn4g8w7rr7wAY6pgFqdnN2tpOZnLF2vAIclkhachrIFvH1qG%2FeC8EkhJCbMspUsa%2BWVavg1%2B02FYMsC6j2vZ92ww6o43qqWcFWuggFsU27tVre2l8TMQvI1MS32NCa3M0dsZ8yC8%2FIMUrV39JzlgPgzncQrS2Ceoh2i3Al8WsfkbIYj5wxaJ3KsVuru8x4FK3iWLG%2F1b9%2Btfuq%2BVQC9mHSzroslc2RkK2RGlOdySZ%2BCQre&X-Amz-Signature=4db3d0d4ca50d27eeb975e39fca7c90cb4e7f3c4c818ba6a8deb7b3e0ce6e171&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
