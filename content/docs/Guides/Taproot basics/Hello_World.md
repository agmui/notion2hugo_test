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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPKIZ7A%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Yx0RtibLYSaep7sDc%2FMOLW5HKYzTUOlV2%2FrEAJeSGQIhAIxPPZuSK3uIBHyjcY0tY9AYkRO3sirtaVDMbpuuGyWUKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFBCcWgEJ2WaRYk54q3AM3c6P0B4wirEvFtU6e5G9euwXu4%2BXorV50yBxbEbCj4Vgil%2Ba6iGoCsH1uAt87sDWPRHsMd7dE76x8pfhiCvQnffZotY32AMyE3WhOHr3J0D03UnVgLpSOgB7ht76jDWbu5MoOvriIAzDIlScfM%2F1JSMSHUGmsVPxe9vyz9ZGtghKKrYPLnj8hXF%2Baa9H5GSKPro8v1WCOkniGieE%2Brz0KeffeI6uPLNovQkbFl%2Bga5RKuulf6EdOqpFCvP7XYOxB%2BCj2bW6oT0wnb5nM71qAj%2BvEOsDYBiAkAK1Ct%2FMhnUc0uJ8%2BmktPb7qLGIyliBxbRWGoWfoboBLWeGToKeAwV6aEZCqBJ1BF%2BHVLhCYmt7%2B%2Fl%2BwGpEfYFV0rsQfHt7OY48KPMigwCg3nLOhcDPBgqJkqI72ahe2kS8xaUWY1SWN9XG65zP9x1e67PJLrRsFK3bVaFjmwqG1jIaqxUxoPYLlSeOa6bo9r79NJJnmdfZ9OOWamOed%2Bowc8cClTj57FPOFftK9JZH7IiMdoidYzq5BviQtjwisoOv8tf9st8NY3%2B%2BbSqtNpazhMokcYSdPjc1kV6vKFpcnM31T2ssxd0U%2FQYSLjyoIkAvMeljtjUgADmkoyuEX8fqPt1tDDS6pXDBjqkAdD3rzIv%2Bk0IlytNLO%2F9YkH8cCwmk0GnAaBUg17m%2BbSZrdvNof5SK2M%2BAnUFLEStN76ebCy1zHFenp4%2FzrlKJNIiYlj3t13j0Tn4quYwMjdRtlyGskM5dq1qvNKlfm5BhMUEVuzu5q1HErxQQEW%2FMaknQNvKf7d26CXW9Lfg57SMYLeQDPb%2F7G%2F%2Bj50%2FqAzFrIWrXuWwuPvgE7Ofw0lAfO69tMdn&X-Amz-Signature=f9ae1ca07a33b1da39a6f2e1212e45610e1a185da1fe7f519b28304515843c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPKIZ7A%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Yx0RtibLYSaep7sDc%2FMOLW5HKYzTUOlV2%2FrEAJeSGQIhAIxPPZuSK3uIBHyjcY0tY9AYkRO3sirtaVDMbpuuGyWUKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFBCcWgEJ2WaRYk54q3AM3c6P0B4wirEvFtU6e5G9euwXu4%2BXorV50yBxbEbCj4Vgil%2Ba6iGoCsH1uAt87sDWPRHsMd7dE76x8pfhiCvQnffZotY32AMyE3WhOHr3J0D03UnVgLpSOgB7ht76jDWbu5MoOvriIAzDIlScfM%2F1JSMSHUGmsVPxe9vyz9ZGtghKKrYPLnj8hXF%2Baa9H5GSKPro8v1WCOkniGieE%2Brz0KeffeI6uPLNovQkbFl%2Bga5RKuulf6EdOqpFCvP7XYOxB%2BCj2bW6oT0wnb5nM71qAj%2BvEOsDYBiAkAK1Ct%2FMhnUc0uJ8%2BmktPb7qLGIyliBxbRWGoWfoboBLWeGToKeAwV6aEZCqBJ1BF%2BHVLhCYmt7%2B%2Fl%2BwGpEfYFV0rsQfHt7OY48KPMigwCg3nLOhcDPBgqJkqI72ahe2kS8xaUWY1SWN9XG65zP9x1e67PJLrRsFK3bVaFjmwqG1jIaqxUxoPYLlSeOa6bo9r79NJJnmdfZ9OOWamOed%2Bowc8cClTj57FPOFftK9JZH7IiMdoidYzq5BviQtjwisoOv8tf9st8NY3%2B%2BbSqtNpazhMokcYSdPjc1kV6vKFpcnM31T2ssxd0U%2FQYSLjyoIkAvMeljtjUgADmkoyuEX8fqPt1tDDS6pXDBjqkAdD3rzIv%2Bk0IlytNLO%2F9YkH8cCwmk0GnAaBUg17m%2BbSZrdvNof5SK2M%2BAnUFLEStN76ebCy1zHFenp4%2FzrlKJNIiYlj3t13j0Tn4quYwMjdRtlyGskM5dq1qvNKlfm5BhMUEVuzu5q1HErxQQEW%2FMaknQNvKf7d26CXW9Lfg57SMYLeQDPb%2F7G%2F%2Bj50%2FqAzFrIWrXuWwuPvgE7Ofw0lAfO69tMdn&X-Amz-Signature=999e61812d9e2196702d4d937a6277af6d07b98be90aa52974e36ff4aa4d5df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
