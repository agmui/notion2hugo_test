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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYYRM65%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChJMiS5XShS2x%2Bir78JcapJ0MF3LL38h%2F4KZrb8%2Fu6EgIgNqfVRrKZOcT7SNxcJPH8zbwL%2BOjlxFjMO%2FkXbMOLlLAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiZI404SXsmytcu8CrcA0cyBpVLS4TALMQ2VBtdSIiaNxxB2aa%2B3nHfEu0V56gkrhCYRD2JbpLiaVFXPmbdEOQz%2BnH%2F%2FQoCEQZ1UHiqFvpXzEyVA9LgnbwDPJuNNdcCKA7fEK%2BVc3vBNs42N2F52Lg5lUrURJ%2FpxMy%2BLO6usoWmtLPxKCB6rN7t9BpLcZZ5urSK2uw4%2F96TNJ7obqChBr%2B2qp5MFFe50UmlzeT7FMuHdD1Y9p6pb8ps1jYMwlwe87KzovdILLNDswFppwlL4A9qxyUqHPBMY1xmW%2BtDH9H7F4AGEksBaznNlDNhTsf8RfmRHJYfsUXanJDIGPKy0nkPlmIEz9NYfwD4IyWvKTTZEFAvRdXBTypSIE2mLIWiXXGot6Xx7hJa1UCLdBPlIKukFq62ZmOl%2FA4v%2B16Vig%2BmIX%2BGDCQ2RzTrUIL%2Fc%2FaIb%2BAugNLBPAQraSYZg62GA06Wk6uVSymdDPFufBS6JcJXQbAFdv50%2FvPZIUczxWHgFOOcYYPT0p9n5S829FzKPwML%2FIuv1vE7xwztXXWkNHfbrON2TXe4f4e5dFVuAcmWG0iEyYPIPenY1BieCxclsK0%2FuxVPg%2FVlasEynR5D36%2B3tNqHuevZqSl8GzgjNxJmZn0FNn17YlSAwVLxMOvttcEGOqUBx8T%2BfVJK%2BA77kc%2F6SGOZr51kBWeAr0dFJJs7uV6aMRQq2jQl5pb%2BV6lnwsz%2BPRAEwuxc3%2Fl%2F8yJ7qA4RehgEBGSqJpzQe5wHMLjwRuA0tDDXUDLY2Sbtk%2B03JS%2BkcTPRxNph4oLr3K7IQam4cd3ifVh%2FpFMv1Ul%2B1Wt3Vorssro3oj5MfR0Mro7yr3TRWhn%2FQ6xf1Wc5BEv8i0nkbdEsMeRDxRCs&X-Amz-Signature=8b082e7f8ca10574bd5f0b558bcb8b2e078b2c011ba26362f5453f93b8984901&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCYYRM65%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChJMiS5XShS2x%2Bir78JcapJ0MF3LL38h%2F4KZrb8%2Fu6EgIgNqfVRrKZOcT7SNxcJPH8zbwL%2BOjlxFjMO%2FkXbMOLlLAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiZI404SXsmytcu8CrcA0cyBpVLS4TALMQ2VBtdSIiaNxxB2aa%2B3nHfEu0V56gkrhCYRD2JbpLiaVFXPmbdEOQz%2BnH%2F%2FQoCEQZ1UHiqFvpXzEyVA9LgnbwDPJuNNdcCKA7fEK%2BVc3vBNs42N2F52Lg5lUrURJ%2FpxMy%2BLO6usoWmtLPxKCB6rN7t9BpLcZZ5urSK2uw4%2F96TNJ7obqChBr%2B2qp5MFFe50UmlzeT7FMuHdD1Y9p6pb8ps1jYMwlwe87KzovdILLNDswFppwlL4A9qxyUqHPBMY1xmW%2BtDH9H7F4AGEksBaznNlDNhTsf8RfmRHJYfsUXanJDIGPKy0nkPlmIEz9NYfwD4IyWvKTTZEFAvRdXBTypSIE2mLIWiXXGot6Xx7hJa1UCLdBPlIKukFq62ZmOl%2FA4v%2B16Vig%2BmIX%2BGDCQ2RzTrUIL%2Fc%2FaIb%2BAugNLBPAQraSYZg62GA06Wk6uVSymdDPFufBS6JcJXQbAFdv50%2FvPZIUczxWHgFOOcYYPT0p9n5S829FzKPwML%2FIuv1vE7xwztXXWkNHfbrON2TXe4f4e5dFVuAcmWG0iEyYPIPenY1BieCxclsK0%2FuxVPg%2FVlasEynR5D36%2B3tNqHuevZqSl8GzgjNxJmZn0FNn17YlSAwVLxMOvttcEGOqUBx8T%2BfVJK%2BA77kc%2F6SGOZr51kBWeAr0dFJJs7uV6aMRQq2jQl5pb%2BV6lnwsz%2BPRAEwuxc3%2Fl%2F8yJ7qA4RehgEBGSqJpzQe5wHMLjwRuA0tDDXUDLY2Sbtk%2B03JS%2BkcTPRxNph4oLr3K7IQam4cd3ifVh%2FpFMv1Ul%2B1Wt3Vorssro3oj5MfR0Mro7yr3TRWhn%2FQ6xf1Wc5BEv8i0nkbdEsMeRDxRCs&X-Amz-Signature=1c00f97264ed0fb01a45ea16694b9c678f00ced5bc2c46f064b989ff036d64cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
