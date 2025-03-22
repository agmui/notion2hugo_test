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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3QEPUB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICmuDR7NupF7yfHkYvYA%2FsAyDxpN0wPVrQnyNbx7tyoVAiEAvs%2BO796hPflTtdNIl%2F69g0OTwpMtR573ft4vGvywTowqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FEn5sMc70n3uU%2FircAxdaULvUvhgrBQ0bxa5qdCGLrt9%2BFo71htrvjoYpzEleGZgoy9eNWHToXRX987ddvUAGHCTUgy%2BJ%2BPQK0%2F3VbMR9yBIKm058gEbUxWPiXlbMiIre%2ByJpZTL1qg2JbJqvPdcbw8oHCifDab2vs%2F8SvxM6z57QJQ7Pq9NVISU4cYXITmuOC1p57rZfdafyZms82sx7hHvN5bcaAAPbJvZ8E9R%2FYsyRDluPpITT8bpF8qarncZ9L73zfoc3V2O%2F4jDwhB0xw4p%2FxlOqwagHieC3FAYuLAKOUHLfn1S0%2FrHNjE2cmDUQA4JAtFnQbcoHUOpFDqUR9x6f8qBEkxe45N1NlP5NfakGSbsGZBjEpsd4EjEib5QvIMEtzaaWpVZRWJkQzDa3PBW0o2bbaSpZE9JdRpKoOd5leDMWSUvFnsJKpAWnUsNU49NUCCyOSHq9ai3eCYY8UFImIOro%2F%2BF9Z0NpvRSBB%2Fo0z5hgJ4KCm6IH%2FvztBiQkvEog57pTUPgsQ5R%2B525qc%2F0Jk%2BckPrCUTlJE2k2To4e9vvk03hyl3UtnoL1liCebbcRxazVxMcD7IkdMNFJ9DNhlZkDty3iokrzPuLEQR7SKdqtBglRi%2FJYYUu3UvOi%2Fcb41PCDls%2BhwMKT3974GOqUBqQI7%2F4Z7L1oPZC64pasOxf22CFzc90x7rytFXqJ6icdjfjVZW9gTpilnNm%2B8hk7SMGe80hg7MtTMEYcNYu2yHoHEcG0r8SjHQbIJ5fp9qwA%2BIp6057f8tGLzfpx0bYYQAjKWOA9fe1QznmZoiVapxLYlWaaPsl6OI1WcSXRPJhRyS23UbmrRZt1npSxSKFVwT4MW2FJqceDhaM3q9Eb7N4wWqjto&X-Amz-Signature=d1c35d452288a3ce26ff6c491078005dc09b8d31f1e58f62894dc274e1e2a546&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3QEPUB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICmuDR7NupF7yfHkYvYA%2FsAyDxpN0wPVrQnyNbx7tyoVAiEAvs%2BO796hPflTtdNIl%2F69g0OTwpMtR573ft4vGvywTowqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDl%2FEn5sMc70n3uU%2FircAxdaULvUvhgrBQ0bxa5qdCGLrt9%2BFo71htrvjoYpzEleGZgoy9eNWHToXRX987ddvUAGHCTUgy%2BJ%2BPQK0%2F3VbMR9yBIKm058gEbUxWPiXlbMiIre%2ByJpZTL1qg2JbJqvPdcbw8oHCifDab2vs%2F8SvxM6z57QJQ7Pq9NVISU4cYXITmuOC1p57rZfdafyZms82sx7hHvN5bcaAAPbJvZ8E9R%2FYsyRDluPpITT8bpF8qarncZ9L73zfoc3V2O%2F4jDwhB0xw4p%2FxlOqwagHieC3FAYuLAKOUHLfn1S0%2FrHNjE2cmDUQA4JAtFnQbcoHUOpFDqUR9x6f8qBEkxe45N1NlP5NfakGSbsGZBjEpsd4EjEib5QvIMEtzaaWpVZRWJkQzDa3PBW0o2bbaSpZE9JdRpKoOd5leDMWSUvFnsJKpAWnUsNU49NUCCyOSHq9ai3eCYY8UFImIOro%2F%2BF9Z0NpvRSBB%2Fo0z5hgJ4KCm6IH%2FvztBiQkvEog57pTUPgsQ5R%2B525qc%2F0Jk%2BckPrCUTlJE2k2To4e9vvk03hyl3UtnoL1liCebbcRxazVxMcD7IkdMNFJ9DNhlZkDty3iokrzPuLEQR7SKdqtBglRi%2FJYYUu3UvOi%2Fcb41PCDls%2BhwMKT3974GOqUBqQI7%2F4Z7L1oPZC64pasOxf22CFzc90x7rytFXqJ6icdjfjVZW9gTpilnNm%2B8hk7SMGe80hg7MtTMEYcNYu2yHoHEcG0r8SjHQbIJ5fp9qwA%2BIp6057f8tGLzfpx0bYYQAjKWOA9fe1QznmZoiVapxLYlWaaPsl6OI1WcSXRPJhRyS23UbmrRZt1npSxSKFVwT4MW2FJqceDhaM3q9Eb7N4wWqjto&X-Amz-Signature=dd1492f94faae1ebd5959b00e478f9bf0e53d8391b213bda1b3a86d41c548652&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
