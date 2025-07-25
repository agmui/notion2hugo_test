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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJCTCXGU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIF3eRlMf5rsOmpimjtN3Fh32GRuXcS%2BLgzuOwCkKZC05AiAyqIpFlN1MS9HvNcXA01G%2B92yKFRVHs79nHvwj04gvdir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMmjmar3J9u%2FN0AKcrKtwDP47H9j%2Bj1SwQG0nnTYRSEI8Ym9YUpUFhMGX0hhF45LXGn1mJGDiASpE36PyIPawBFc%2BBQ3zKZ5%2FxS5TM9jgBYKzPVG9xTxX%2BoZK6PRIzs625Tb%2BAxC9xXUa%2FmfhjmIlWD416148KWRo93LyDWTswFgSAOStnTUXtII4fY6e2%2FDxEkglEsh5R1%2B4qQ90CoofLv9H0Hw5t5AAqOnr1iziqvpYOhdFCcICpxGFmmUpG6oqagJx5P5gMef9jN%2Fc%2BCnfy6oAQ7VILqkCbjNO%2BKmj35hFw42sp2Df%2F5SVHy%2BiVw3nE%2Bm%2FgbuJD3xNxibgCHXjriH8Q0gxPhZxLnTQZTJojJGeBT%2F0ktWn1z4n%2Finb1RI1bJYCK9hkB8kNHlX2rDdbmvyHi36GMb2U8zyPMCrO8W8bcb%2F667OrDr0CbutzD%2BF%2BY8aUeuztXVzK2qHbFPVVjBThQNC3Yt3pPZk3LOaHEZ%2B4CUuGB3ezWKE9yXU%2BcWGAXvjmF3DYcss8i3Le8zA41J%2FUj7Ka4kT1R0pF4%2BtVu1altgIZDibfAjTQ%2FCNyMrymmN0caVoVq2NEEXEUu%2BnU2RVn5%2FH3AQB0AlqdqCMxw1yUhO1eIk4JbivfD6W0vbob4Pkixe2MHi8yUDKsw9qqPxAY6pgGgMRsLxGemBUsOwd9KODr8Qb8mo2IMdrjcUfddawKhg%2BM5qFQWVLF3o3v5i5JOsjplNnapESfqdEkQwhxJ0SkSJPXaobrsjrzgm0RxmzVDTWFOMiF1zT%2BRtJbCsXRZhly1kCKc2n79CKLFmXXRWVOgvHTF0jYGG%2B%2BXm8F%2FtJ%2FJriYd1B12rVWmm8BM0SP5%2BUkLbt0LI0JmIDbikdMqjSXOIxGTFKaU&X-Amz-Signature=9952c1a04e00b17e024661c72d11fc573ffaf4af81373233f338016882ded4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJCTCXGU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIF3eRlMf5rsOmpimjtN3Fh32GRuXcS%2BLgzuOwCkKZC05AiAyqIpFlN1MS9HvNcXA01G%2B92yKFRVHs79nHvwj04gvdir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMmjmar3J9u%2FN0AKcrKtwDP47H9j%2Bj1SwQG0nnTYRSEI8Ym9YUpUFhMGX0hhF45LXGn1mJGDiASpE36PyIPawBFc%2BBQ3zKZ5%2FxS5TM9jgBYKzPVG9xTxX%2BoZK6PRIzs625Tb%2BAxC9xXUa%2FmfhjmIlWD416148KWRo93LyDWTswFgSAOStnTUXtII4fY6e2%2FDxEkglEsh5R1%2B4qQ90CoofLv9H0Hw5t5AAqOnr1iziqvpYOhdFCcICpxGFmmUpG6oqagJx5P5gMef9jN%2Fc%2BCnfy6oAQ7VILqkCbjNO%2BKmj35hFw42sp2Df%2F5SVHy%2BiVw3nE%2Bm%2FgbuJD3xNxibgCHXjriH8Q0gxPhZxLnTQZTJojJGeBT%2F0ktWn1z4n%2Finb1RI1bJYCK9hkB8kNHlX2rDdbmvyHi36GMb2U8zyPMCrO8W8bcb%2F667OrDr0CbutzD%2BF%2BY8aUeuztXVzK2qHbFPVVjBThQNC3Yt3pPZk3LOaHEZ%2B4CUuGB3ezWKE9yXU%2BcWGAXvjmF3DYcss8i3Le8zA41J%2FUj7Ka4kT1R0pF4%2BtVu1altgIZDibfAjTQ%2FCNyMrymmN0caVoVq2NEEXEUu%2BnU2RVn5%2FH3AQB0AlqdqCMxw1yUhO1eIk4JbivfD6W0vbob4Pkixe2MHi8yUDKsw9qqPxAY6pgGgMRsLxGemBUsOwd9KODr8Qb8mo2IMdrjcUfddawKhg%2BM5qFQWVLF3o3v5i5JOsjplNnapESfqdEkQwhxJ0SkSJPXaobrsjrzgm0RxmzVDTWFOMiF1zT%2BRtJbCsXRZhly1kCKc2n79CKLFmXXRWVOgvHTF0jYGG%2B%2BXm8F%2FtJ%2FJriYd1B12rVWmm8BM0SP5%2BUkLbt0LI0JmIDbikdMqjSXOIxGTFKaU&X-Amz-Signature=9f0c70fa07ceeada852a0da6ea6d1628d8739d12f0b3b3b80d47bd63d7df14d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
