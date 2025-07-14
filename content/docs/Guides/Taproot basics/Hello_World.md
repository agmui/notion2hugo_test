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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP2MF2SZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAUWZhGQwMhULybnNMQ3L6zrok7AWq3IQGEFbsm%2F8aX%2BAiEAwXgraKVWPa2I9gyvpd1hGqch4ihtvEa4Z8rdL4ke2kIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFUXLJUytHi1YCMNqircA4skX6XFiXJFw1lDpM%2FETYTnZPz2l0FJ1r3Qq2xcQelztyqkItPljgYYwA58Koni%2B4Rz8tVqHBcC%2FhZVHDbG%2FoUyC0XiGWjxB0NfWz5GDXXBkzdqW5PoKygAOF1BiTj3Cay3iz1bQoa9mcZTCg%2BOwUAyiDpdkwHi5tOzRqiuf1buvIKQ1O2OBvMUlKWHjgyhfZ03P19cr6mUtrSVtsWtFvbWzn1G7eEqoHzwRD1%2FsxrLJ7QWZnOnjBZ%2Fwiwtgm5Dmyr8hSMm9yVplmySx1mhuXcceS4aUYSxOIzlAnypoXYmd%2FHQEkd35w17Okl9oj25rh27nYpdgbM3czbDT%2B%2B4xwO5BDUkf0KaFmguIiCuxwXlqzt3r4FniQSd3zm93KnTPa62CQH8XpVF9iGngGi5QdAsyeX%2BxXP1AHLyk%2BAv%2FSDWL95zf4aCnhUjmjZfREQ4JVJdmYff8JFiMfBt4Vkycvgl63EuWQAaglfcGcVtMm7iupB%2FgyRfLDoQ7yx%2FIJ82ODZMnbsFywxq1pD4LmgSfPMsNzLObn3Ec2Alhk3ecPaOzwoIoNm%2BRfNQsC45NA1CIPGL8GQ5if%2FJBWCkpN23NtMJAy%2B6PxUyJ1PxE6WvR8UiQuddp4NPcHArDuCWMK7b0sMGOqUB%2Fm2zacCkwX3eKenRqquT8A7YKQCevVroDRCUtydFM0J6piRl%2B6IVsZ2dL7%2F8HOcAP5%2FF5FoJICIYCXxfpn8Uvc6tDTIux%2FeRQe0wVv%2BauxLA%2BrSOIuGGAEGSxnmi3L9HF18iQIcOCMAQzzEtyLgcIrUnC0pQPfi33AhgdOOzwViJRJe5BpWzRdodOSVhyDLBIzdqHBIXqIXIZbxZC0IS57zCBX3P&X-Amz-Signature=5fcb6572da8125014a33f6bcfc18ba12a8efd2f233d31b0c708b3a3253ff2b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP2MF2SZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAUWZhGQwMhULybnNMQ3L6zrok7AWq3IQGEFbsm%2F8aX%2BAiEAwXgraKVWPa2I9gyvpd1hGqch4ihtvEa4Z8rdL4ke2kIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFUXLJUytHi1YCMNqircA4skX6XFiXJFw1lDpM%2FETYTnZPz2l0FJ1r3Qq2xcQelztyqkItPljgYYwA58Koni%2B4Rz8tVqHBcC%2FhZVHDbG%2FoUyC0XiGWjxB0NfWz5GDXXBkzdqW5PoKygAOF1BiTj3Cay3iz1bQoa9mcZTCg%2BOwUAyiDpdkwHi5tOzRqiuf1buvIKQ1O2OBvMUlKWHjgyhfZ03P19cr6mUtrSVtsWtFvbWzn1G7eEqoHzwRD1%2FsxrLJ7QWZnOnjBZ%2Fwiwtgm5Dmyr8hSMm9yVplmySx1mhuXcceS4aUYSxOIzlAnypoXYmd%2FHQEkd35w17Okl9oj25rh27nYpdgbM3czbDT%2B%2B4xwO5BDUkf0KaFmguIiCuxwXlqzt3r4FniQSd3zm93KnTPa62CQH8XpVF9iGngGi5QdAsyeX%2BxXP1AHLyk%2BAv%2FSDWL95zf4aCnhUjmjZfREQ4JVJdmYff8JFiMfBt4Vkycvgl63EuWQAaglfcGcVtMm7iupB%2FgyRfLDoQ7yx%2FIJ82ODZMnbsFywxq1pD4LmgSfPMsNzLObn3Ec2Alhk3ecPaOzwoIoNm%2BRfNQsC45NA1CIPGL8GQ5if%2FJBWCkpN23NtMJAy%2B6PxUyJ1PxE6WvR8UiQuddp4NPcHArDuCWMK7b0sMGOqUB%2Fm2zacCkwX3eKenRqquT8A7YKQCevVroDRCUtydFM0J6piRl%2B6IVsZ2dL7%2F8HOcAP5%2FF5FoJICIYCXxfpn8Uvc6tDTIux%2FeRQe0wVv%2BauxLA%2BrSOIuGGAEGSxnmi3L9HF18iQIcOCMAQzzEtyLgcIrUnC0pQPfi33AhgdOOzwViJRJe5BpWzRdodOSVhyDLBIzdqHBIXqIXIZbxZC0IS57zCBX3P&X-Amz-Signature=f969f0ee008259de687287e7b99f300ea7f163d10a2d887acf420a0eb12922fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
