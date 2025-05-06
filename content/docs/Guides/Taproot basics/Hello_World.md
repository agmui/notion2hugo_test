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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOEO6W6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FKSZIN17p3yNvsFPjg9rkxHGeKiaAPk%2BWwCIUtxevQwIhAN581%2FnJTR2d8aENIb%2BjlLcZ3XV8BSZfxrJuHZw0oB5aKv8DCD4QABoMNjM3NDIzMTgzODA1IgzFgbx1gBlxL9kG2vYq3ANkOuR1SFjt36SL0qmNqzIGPQEhYGN7555ey9M2SU%2BtMhmZEsCpbdvnKrd%2FTrUJMEWhoem8SB6DZcOKSxLut10Tw1H2Q8VdBZYjnPPhS9qiApVgICK%2BKI71srgh5IQAHgDcFZXPWI7C3Fb9%2BWtCgbrNeWYlzN1Hof6YDrK1a6Gi1BBQkBr0AguEgXnZ8%2Fa4ovGfOHIP5Vcczu43jj9aBjCbWL9lM%2BC1CMcRnh6WwpjdpZxrAtWGxV%2FoNIeTD%2FPfi2fVhBPuVCUBpKDjyhXKsENy2JXYI6mZTx7aRUBfJg87It2L8lzPxFem7u9dTRozuD7KJtCot8TA7%2F6mOIK%2FpSrzFAErCnYF4th7OQrgAtwKTN5Nb%2F%2BAhc3Mmsr2ts%2BYalvwP6ieLd%2BPhc9HSDBvqZggGmGCDOI1oUDlTdHGg82q4MaoarRMg6eJ2IS%2F8QCUVkAQ07Yo6I3xKF9WwqP%2FrY3PXbC49uRrytyPAYQISWJ3eeiR%2BJbWTC9LRClMjCMRafajduXbEGwnG%2BscGmLC4P6GZvKHWaBA%2BQYx0qnd6tMP3Qpc7a8AXoHquXfYEbU5PWYvly%2B8A%2Bm%2Bz%2FyyspDby1pWrvifB6HyPuybnRcq6dN%2BaSqFeJYq3tzwTGL0ZTDlsObABjqkAepSG8yOYRVDgbekLVccgrLk%2BnBlUShzWrF0iP%2BXCKOEaBJbJ%2FROaFHCCuM9HoGMJCcjctl1A2F301gto3EiLSjrT%2ByhSLgFtey0zVLyzbDV8WLAnHFTBOvJUyAccuE4Jwv1gXlU3GhXvGfdPxCvn01RPM%2FhoNRRZDcgZbta1dDshBCSyW0HyUkAp4eBJpprS%2BwzIUB%2FPBWvkSwjHHvApNvb%2F6Bq&X-Amz-Signature=642c534caf8588fbb23e99fe46306cd98f530548d0a708b4c322bc63cd09d8a7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOEO6W6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FKSZIN17p3yNvsFPjg9rkxHGeKiaAPk%2BWwCIUtxevQwIhAN581%2FnJTR2d8aENIb%2BjlLcZ3XV8BSZfxrJuHZw0oB5aKv8DCD4QABoMNjM3NDIzMTgzODA1IgzFgbx1gBlxL9kG2vYq3ANkOuR1SFjt36SL0qmNqzIGPQEhYGN7555ey9M2SU%2BtMhmZEsCpbdvnKrd%2FTrUJMEWhoem8SB6DZcOKSxLut10Tw1H2Q8VdBZYjnPPhS9qiApVgICK%2BKI71srgh5IQAHgDcFZXPWI7C3Fb9%2BWtCgbrNeWYlzN1Hof6YDrK1a6Gi1BBQkBr0AguEgXnZ8%2Fa4ovGfOHIP5Vcczu43jj9aBjCbWL9lM%2BC1CMcRnh6WwpjdpZxrAtWGxV%2FoNIeTD%2FPfi2fVhBPuVCUBpKDjyhXKsENy2JXYI6mZTx7aRUBfJg87It2L8lzPxFem7u9dTRozuD7KJtCot8TA7%2F6mOIK%2FpSrzFAErCnYF4th7OQrgAtwKTN5Nb%2F%2BAhc3Mmsr2ts%2BYalvwP6ieLd%2BPhc9HSDBvqZggGmGCDOI1oUDlTdHGg82q4MaoarRMg6eJ2IS%2F8QCUVkAQ07Yo6I3xKF9WwqP%2FrY3PXbC49uRrytyPAYQISWJ3eeiR%2BJbWTC9LRClMjCMRafajduXbEGwnG%2BscGmLC4P6GZvKHWaBA%2BQYx0qnd6tMP3Qpc7a8AXoHquXfYEbU5PWYvly%2B8A%2Bm%2Bz%2FyyspDby1pWrvifB6HyPuybnRcq6dN%2BaSqFeJYq3tzwTGL0ZTDlsObABjqkAepSG8yOYRVDgbekLVccgrLk%2BnBlUShzWrF0iP%2BXCKOEaBJbJ%2FROaFHCCuM9HoGMJCcjctl1A2F301gto3EiLSjrT%2ByhSLgFtey0zVLyzbDV8WLAnHFTBOvJUyAccuE4Jwv1gXlU3GhXvGfdPxCvn01RPM%2FhoNRRZDcgZbta1dDshBCSyW0HyUkAp4eBJpprS%2BwzIUB%2FPBWvkSwjHHvApNvb%2F6Bq&X-Amz-Signature=c6b434610ae90e690bce82fad2751205dcea00e76af573bccb7eb89f085ef46d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
