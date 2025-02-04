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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4Z2LVD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQD%2Fybf6RFRTstmfBll1fmkum92FwTgdvK6WEmvlc03oCgIhAMaVwkLvWuejmot51%2FhTFL7xyPbKwBTREsngk%2F5N6jawKv8DCC8QABoMNjM3NDIzMTgzODA1IgxPw73IKtisw8Z5yT4q3AMc6rmTRAKvEc6lodepnyY4hjl4Jgfz%2FGumvx18p%2BMjSGTAFvLTdE%2F6ZUrCrW%2BYj%2BczmlEPZQyTIp65JacHkSRvEJfBFgl13TWxoz%2FfJQwLExSoP2UkMQlonEXYfkAwUjCBBOyE3AGVjAlOvDaJRVa%2FtZM7uK9wj4R0YpE1X3QuBg3qWy5spRTsL2xZ43SqeNgfq8q0JvPRND3ho0CsOd8VELkvu1D%2FfPi8PUQ%2FjjerRSExmZAUnsdPgCBJykoPhTLlJH2%2Bj70H5KEtYzOmjC%2FHMr%2FqjYtbD3WoC8%2FrkKQP97ET4PWM3Guid%2F0X5L69jeiGAjNUlu%2B9WPh9hfGZvMwDzYenrohrMjcV9sf5xVx4lZJSwq2mYCsd1q4ESVloClANZMRFt1vOc6GsUouk871Uzdswo04v1f32rJ%2BwbZAer%2Fc7yf3VjUFQJVfr1eDXKzp8cPmd7z1pn1AxRTsPOzYgjf0WD4Wn%2F%2FORqH3e3PRKZ2BysOXAr40rzmVJSbeYFEqCXenrFZIMyz%2BufCynTOxbRAwi39C7CI%2BoNzrZFRrOOXK%2FSMpBelvcUhBpHKPLxMvH7AE8PzwfVy8D7NDxFAYFp1wwxcXt8NTvxo9PSU6XNoUrIDm975oxfKk2QDCHv4i9BjqkAWcQcbLUi3Q0JGBpNIssgzDucCByK9EhrtsK%2BlxVFpkiYcfzYkuFOX7dqA%2FWFPRSZyjpLYLRvt6%2FZ78mPHSUIwpq1%2Fmf9BvzwoSTAuMKBwivcb%2FNGoHlrtZIFFGISZz6i%2BonwYZaYsHRfpQsxh9APn1%2FrDyHGD32vXwQP%2FKIjCMj49XcjGeCoesR3aWdFi5sVCMZ29JJ%2FnEHLfF9cAB7dB6J6M37&X-Amz-Signature=bd5c52efca15f762e6b821c0456a112e3df2f0b2949f738607dedb1caa686b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO4Z2LVD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQD%2Fybf6RFRTstmfBll1fmkum92FwTgdvK6WEmvlc03oCgIhAMaVwkLvWuejmot51%2FhTFL7xyPbKwBTREsngk%2F5N6jawKv8DCC8QABoMNjM3NDIzMTgzODA1IgxPw73IKtisw8Z5yT4q3AMc6rmTRAKvEc6lodepnyY4hjl4Jgfz%2FGumvx18p%2BMjSGTAFvLTdE%2F6ZUrCrW%2BYj%2BczmlEPZQyTIp65JacHkSRvEJfBFgl13TWxoz%2FfJQwLExSoP2UkMQlonEXYfkAwUjCBBOyE3AGVjAlOvDaJRVa%2FtZM7uK9wj4R0YpE1X3QuBg3qWy5spRTsL2xZ43SqeNgfq8q0JvPRND3ho0CsOd8VELkvu1D%2FfPi8PUQ%2FjjerRSExmZAUnsdPgCBJykoPhTLlJH2%2Bj70H5KEtYzOmjC%2FHMr%2FqjYtbD3WoC8%2FrkKQP97ET4PWM3Guid%2F0X5L69jeiGAjNUlu%2B9WPh9hfGZvMwDzYenrohrMjcV9sf5xVx4lZJSwq2mYCsd1q4ESVloClANZMRFt1vOc6GsUouk871Uzdswo04v1f32rJ%2BwbZAer%2Fc7yf3VjUFQJVfr1eDXKzp8cPmd7z1pn1AxRTsPOzYgjf0WD4Wn%2F%2FORqH3e3PRKZ2BysOXAr40rzmVJSbeYFEqCXenrFZIMyz%2BufCynTOxbRAwi39C7CI%2BoNzrZFRrOOXK%2FSMpBelvcUhBpHKPLxMvH7AE8PzwfVy8D7NDxFAYFp1wwxcXt8NTvxo9PSU6XNoUrIDm975oxfKk2QDCHv4i9BjqkAWcQcbLUi3Q0JGBpNIssgzDucCByK9EhrtsK%2BlxVFpkiYcfzYkuFOX7dqA%2FWFPRSZyjpLYLRvt6%2FZ78mPHSUIwpq1%2Fmf9BvzwoSTAuMKBwivcb%2FNGoHlrtZIFFGISZz6i%2BonwYZaYsHRfpQsxh9APn1%2FrDyHGD32vXwQP%2FKIjCMj49XcjGeCoesR3aWdFi5sVCMZ29JJ%2FnEHLfF9cAB7dB6J6M37&X-Amz-Signature=d69edd856fbcae4b19bb2c99c8ead8e908155647744c46ef0e6c34e24225d2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
