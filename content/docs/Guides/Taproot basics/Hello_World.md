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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECRAL3S%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl5Ii4wQrkmUOXkhCEfCbnQoIwTpcPTcV3m0nbCreCBgIganP0FEc%2FZE9xIvvOvFQ7GFgRot%2BKJQONmH3%2FHiiatO0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOjp99MsCkmJtOgHECrcA1VS%2F7MD5Z4zmKtMBQ0fjNJAlBoVXAL%2F8bEL9TaGCiRm9D6HbMhXfVh8kfqZX%2FK3qKh52ltEWJAt9g%2FFBhOB7KFzhPRT%2B9XSH9Aa5UyRVL33Igo69UAN382l2%2F1D5rtoRdXzmvXOqDCNR8P2ZSXmfLf63uzCw7M6wFb8veTw6DYB1YWZRpQXpgOls0xuJwMBhaUVONQveMq13Ifo%2FSRTvKFdFqwIgtLo%2BH3wNjBKq2Gn8Oss%2FNjiT2gFJqcKapn%2Fwhsr5KlprSrt73U5DN5Ny%2FIMsSTGAiOjoGIlOET%2F4QDakArCpUyXIZgxLdHQHMDOAScyo%2BG0xAV8OrekmhvIaiAHUjkSewEiCaDFjiABQRHOwIfomXP%2FtTAKb%2FQ84tt5%2F3tSsS9YF6RXLcZeo%2F0HJhi8QgvPZb6MlOi7IM9iBinW8EJ3Egl%2FbRF54z1TEDELNEBA9FnK8m7IG%2BiW8MnSFmS7OALykFXiG0NEOi8GHd1puh7NfAyomG8i1hgVbjnuPGcnBok0aKHlLO%2FdzGA2Sm%2F9BKnqGZsp2pq68Ds2WP677X3yrkzezVA0c078Knv%2FBdRTZcxaGMtstdpPaQZBa%2FDVTcxTp53jWgabwQ%2BuaOrVhJFC7V45cydCe1D1MOSC7sAGOqUB5DJ0EQS6IxVNBqSFCXaYeGZ5CvU3JPJjZix8Z7a5lXSmSOKLmvxkhN9DNbj0jSQgLzFicfpxYeD7JSwQNNERbSPWoyOqZWecWJ7hR2%2FgNkxjXjhRZH%2BMBP2bdTJ%2FJyb%2F%2Bzk84kzxzaYMw%2B%2FY7UE%2BcArZy%2BiG6Vrh6OMFzYSoBtKoi%2BNBcm9%2Bd0RUp1Gaq3U%2B7t3cwAnScywXvbkWIwbMl1eDBI8M&X-Amz-Signature=e129640d87eebf993bc590d607ce2ca1569b44b35f936022e61b26f999893acc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ECRAL3S%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl5Ii4wQrkmUOXkhCEfCbnQoIwTpcPTcV3m0nbCreCBgIganP0FEc%2FZE9xIvvOvFQ7GFgRot%2BKJQONmH3%2FHiiatO0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOjp99MsCkmJtOgHECrcA1VS%2F7MD5Z4zmKtMBQ0fjNJAlBoVXAL%2F8bEL9TaGCiRm9D6HbMhXfVh8kfqZX%2FK3qKh52ltEWJAt9g%2FFBhOB7KFzhPRT%2B9XSH9Aa5UyRVL33Igo69UAN382l2%2F1D5rtoRdXzmvXOqDCNR8P2ZSXmfLf63uzCw7M6wFb8veTw6DYB1YWZRpQXpgOls0xuJwMBhaUVONQveMq13Ifo%2FSRTvKFdFqwIgtLo%2BH3wNjBKq2Gn8Oss%2FNjiT2gFJqcKapn%2Fwhsr5KlprSrt73U5DN5Ny%2FIMsSTGAiOjoGIlOET%2F4QDakArCpUyXIZgxLdHQHMDOAScyo%2BG0xAV8OrekmhvIaiAHUjkSewEiCaDFjiABQRHOwIfomXP%2FtTAKb%2FQ84tt5%2F3tSsS9YF6RXLcZeo%2F0HJhi8QgvPZb6MlOi7IM9iBinW8EJ3Egl%2FbRF54z1TEDELNEBA9FnK8m7IG%2BiW8MnSFmS7OALykFXiG0NEOi8GHd1puh7NfAyomG8i1hgVbjnuPGcnBok0aKHlLO%2FdzGA2Sm%2F9BKnqGZsp2pq68Ds2WP677X3yrkzezVA0c078Knv%2FBdRTZcxaGMtstdpPaQZBa%2FDVTcxTp53jWgabwQ%2BuaOrVhJFC7V45cydCe1D1MOSC7sAGOqUB5DJ0EQS6IxVNBqSFCXaYeGZ5CvU3JPJjZix8Z7a5lXSmSOKLmvxkhN9DNbj0jSQgLzFicfpxYeD7JSwQNNERbSPWoyOqZWecWJ7hR2%2FgNkxjXjhRZH%2BMBP2bdTJ%2FJyb%2F%2Bzk84kzxzaYMw%2B%2FY7UE%2BcArZy%2BiG6Vrh6OMFzYSoBtKoi%2BNBcm9%2Bd0RUp1Gaq3U%2B7t3cwAnScywXvbkWIwbMl1eDBI8M&X-Amz-Signature=eb78b485a220e9fe811be85b97ebf74478e97f3c8dc1679aa650935eb3e7d608&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
