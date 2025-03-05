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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJACGZLR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZAoD1Oclt3eSSQHHgbPH7yzhCHLAE1F0CCe1qVU8A%2BgIgF86WWV9n7ul72aVFS%2F%2FCReST76iqZtARFqctJVr9xeQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEP58gij7zZaLItCbircAzPXBsEvz4GUy8ZfH9S8ZeY8YKDklEbCnPBOyYhfhTjR%2BOwWHag5oP1vZ2uqs40qpk8Lbz7GsLs%2FhwCZ9F%2Fc4Nrd1wt9TvMMo4GIAsBxsGFC6QpGaJ%2BQAT5mVvk0li99OVoKBKZ241khBKO%2BJgnnQijfKNlwaQE91lHeQf9G7lBK8Sen1d4yAWiP7ODP%2FMKK0sGlSiwYWeT2xJ%2FWHqyK0TriN2QDqjjp5%2FGtFYSeBmtUR6R5T71mJIJJf3VR9IBUDcj94rQRT0GWZKOqh%2FIt1Qn%2F0BRi0hET5pLc5S36KMtLGAQxMTYgxHPiYRlwcyEz9Q0oboJwkzNGvppr5ih8XjMu0G7VpBRFcXixp5UadEYEUNttL3nrcv62rARRb%2FQ%2FS7MFlj2aLbclpKNGnQ1aGimbeyXYUVhbbz%2B6ELYznsB4VS0CojHNgxusvmw%2FDqhztbBPOybAZzU0SpZJjuxaVnSSexRdgw0kXjPmKsy4Epfal0OHcZN6j4dAl71e0PeyWZIrJfzeYA%2Bt86d%2FwpnUttJEv9haa5U0qhgr4bF42Bp45iA0bsVWu4wUNHa7C%2BTs%2Fxq3jM%2FTbw4zj4K34OkQ%2F5%2BNDYR4tubyKJXvGB0UU6sLD4Z3Iuppur3j5dAPMPvpn74GOqUBuPAl9bWL8z3cVc8zFI8n0RgiCuuaJVH%2F98NYKXx2o4f3zuM%2FCSykNMi4mNBQSB6JjYKoPbZhKDl0HWsphmt8egjFEJQdwH0MZrmFirtcNp01TBn90vVz32mCzr3b8c3cf2NtHqOazfSiArdCSSfvqRTPJCeq6uu08QLp8JkfRzzy5StPieCEmMmBv9QyL0a5WEhgMW0ydKsSUonnh5Bvo43GQjUS&X-Amz-Signature=2fd2f6358af98030d14fc22fce1f538d20e5aeb4e50a371b3d52bb84a9ce51a9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJACGZLR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZAoD1Oclt3eSSQHHgbPH7yzhCHLAE1F0CCe1qVU8A%2BgIgF86WWV9n7ul72aVFS%2F%2FCReST76iqZtARFqctJVr9xeQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEP58gij7zZaLItCbircAzPXBsEvz4GUy8ZfH9S8ZeY8YKDklEbCnPBOyYhfhTjR%2BOwWHag5oP1vZ2uqs40qpk8Lbz7GsLs%2FhwCZ9F%2Fc4Nrd1wt9TvMMo4GIAsBxsGFC6QpGaJ%2BQAT5mVvk0li99OVoKBKZ241khBKO%2BJgnnQijfKNlwaQE91lHeQf9G7lBK8Sen1d4yAWiP7ODP%2FMKK0sGlSiwYWeT2xJ%2FWHqyK0TriN2QDqjjp5%2FGtFYSeBmtUR6R5T71mJIJJf3VR9IBUDcj94rQRT0GWZKOqh%2FIt1Qn%2F0BRi0hET5pLc5S36KMtLGAQxMTYgxHPiYRlwcyEz9Q0oboJwkzNGvppr5ih8XjMu0G7VpBRFcXixp5UadEYEUNttL3nrcv62rARRb%2FQ%2FS7MFlj2aLbclpKNGnQ1aGimbeyXYUVhbbz%2B6ELYznsB4VS0CojHNgxusvmw%2FDqhztbBPOybAZzU0SpZJjuxaVnSSexRdgw0kXjPmKsy4Epfal0OHcZN6j4dAl71e0PeyWZIrJfzeYA%2Bt86d%2FwpnUttJEv9haa5U0qhgr4bF42Bp45iA0bsVWu4wUNHa7C%2BTs%2Fxq3jM%2FTbw4zj4K34OkQ%2F5%2BNDYR4tubyKJXvGB0UU6sLD4Z3Iuppur3j5dAPMPvpn74GOqUBuPAl9bWL8z3cVc8zFI8n0RgiCuuaJVH%2F98NYKXx2o4f3zuM%2FCSykNMi4mNBQSB6JjYKoPbZhKDl0HWsphmt8egjFEJQdwH0MZrmFirtcNp01TBn90vVz32mCzr3b8c3cf2NtHqOazfSiArdCSSfvqRTPJCeq6uu08QLp8JkfRzzy5StPieCEmMmBv9QyL0a5WEhgMW0ydKsSUonnh5Bvo43GQjUS&X-Amz-Signature=bdeb2eaf2f2c9cffc1136c3a71ee67b969ee4a57e0f2e25b0ab7f11eef56688e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
