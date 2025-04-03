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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XNEQUO%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC39PqTN%2BCk6pjFpkUZcZ0%2BU7lbB9mmDlrJqghHGg6LQQIgB6B7QPnlE0e42aIn7%2BKG5AZN8AYzpWHVT1L2jJG966sqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKy5O3oEiU7w%2Bs8nNCrcAxWqnWuH1d0H6NaPtwlos5m2LkbROjrC0fPR9Ku4%2BXQl%2BOSqHC1C1yjYTRfp1aVZF35R9XNTYI5i%2F9SqqxIrzxIgqDt%2B5%2BQ1CjgJ65ljUK9qPozsA%2F00HK%2BQfunNRqCIrAhul55fFqaKu33uscZ7UdcoRjefinb7htT2Kb3lvXp5eYCHViy4JFpplUS6Fp5dHlBfxLVcUOqTJfYfKlR87WFa3iNwaTGSY86WbQhtznrOjAdmmjPoPpvEZkMtLp3CjgSV9WIm7%2FzyybLWkuVwlC%2FmSniyqrBNiWzRoawkMr7UohDsQX2AwIlznzw3gDY6M4ASOcdKHi6eBeGdjziisoNpckZUNnsJ07AJNQHZ0o76o6zScSLd1pfCiXyM8ar7hw1xFm5dh8zXRXkQeR%2FV%2BfyhCAOh9m9tfFSLxqwb3ATI59esZBxQ1k9WdMS2LR3RoleSJa%2BMPntSA9RaE8sx8XIVcWLpwClGpqYlwmaHmDlXzP%2BS27b9Mx%2F%2B4ux%2FfTX5rwWsu6Z4MfF%2F0FTODvPgbx42%2BwGcN5U6jtOPEUTF8%2BgD0iq4VFav5YjQ8nRqvWKtfd0ZbpiwPyNsb9Unb8WKLnEO0dsoib8TpZtuNenMLtOOIpLf3vZmhSSeXfnwMLmEvL8GOqUBRZe5QZktNrX3MlL2WDZnqDS9d4hiWFggB6%2FM3pCbgj5%2FCsmlyocpHIJpJYshG%2B9sBMsV5WMFQslnF8%2B%2BCiUBJrr2%2FQ0TiSnaiTLDvVwOQ1Pctwb4eQKtC6E5CSlXHDXiXgJPWlnr%2BxbR9P6otZt7NWPQRRWSYebdJKhHB4LyhyVaJc0OK8pyJo9JVckfIlCMJ1b5YQCX0E5N9I2ftjjvX10tZv8K&X-Amz-Signature=c90119d3d92e7fe461e5ade00057335872900c2b76cf569cc23231dfb30c8c63&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675XNEQUO%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC39PqTN%2BCk6pjFpkUZcZ0%2BU7lbB9mmDlrJqghHGg6LQQIgB6B7QPnlE0e42aIn7%2BKG5AZN8AYzpWHVT1L2jJG966sqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKy5O3oEiU7w%2Bs8nNCrcAxWqnWuH1d0H6NaPtwlos5m2LkbROjrC0fPR9Ku4%2BXQl%2BOSqHC1C1yjYTRfp1aVZF35R9XNTYI5i%2F9SqqxIrzxIgqDt%2B5%2BQ1CjgJ65ljUK9qPozsA%2F00HK%2BQfunNRqCIrAhul55fFqaKu33uscZ7UdcoRjefinb7htT2Kb3lvXp5eYCHViy4JFpplUS6Fp5dHlBfxLVcUOqTJfYfKlR87WFa3iNwaTGSY86WbQhtznrOjAdmmjPoPpvEZkMtLp3CjgSV9WIm7%2FzyybLWkuVwlC%2FmSniyqrBNiWzRoawkMr7UohDsQX2AwIlznzw3gDY6M4ASOcdKHi6eBeGdjziisoNpckZUNnsJ07AJNQHZ0o76o6zScSLd1pfCiXyM8ar7hw1xFm5dh8zXRXkQeR%2FV%2BfyhCAOh9m9tfFSLxqwb3ATI59esZBxQ1k9WdMS2LR3RoleSJa%2BMPntSA9RaE8sx8XIVcWLpwClGpqYlwmaHmDlXzP%2BS27b9Mx%2F%2B4ux%2FfTX5rwWsu6Z4MfF%2F0FTODvPgbx42%2BwGcN5U6jtOPEUTF8%2BgD0iq4VFav5YjQ8nRqvWKtfd0ZbpiwPyNsb9Unb8WKLnEO0dsoib8TpZtuNenMLtOOIpLf3vZmhSSeXfnwMLmEvL8GOqUBRZe5QZktNrX3MlL2WDZnqDS9d4hiWFggB6%2FM3pCbgj5%2FCsmlyocpHIJpJYshG%2B9sBMsV5WMFQslnF8%2B%2BCiUBJrr2%2FQ0TiSnaiTLDvVwOQ1Pctwb4eQKtC6E5CSlXHDXiXgJPWlnr%2BxbR9P6otZt7NWPQRRWSYebdJKhHB4LyhyVaJc0OK8pyJo9JVckfIlCMJ1b5YQCX0E5N9I2ftjjvX10tZv8K&X-Amz-Signature=2c66373924002bf90d1817d8a0825e6cfb50cc848f3b69f967a838160d09c95d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
