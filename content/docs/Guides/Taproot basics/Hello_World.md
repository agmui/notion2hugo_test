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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWEHV7U%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIGSEkyvoDMNkFbRos7bI5vl%2FY0Zw6HxGzq%2Brx2zvfwFjAiBjbQ2bbWst8Y4tHdDsmNvYJ2FUCh6D9jvZf0j8pNgjdSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRGzXWrYWFBbE%2BanIKtwDzyzoVKzQ4jD78B63ggGV59gCMf0Jzhf%2FYKFupxKq0yuGKnCVb%2BC6kiuX1ThBBocq%2FfUoP4AigKIGWBrtzFskehNdYUP6IjIlqjzyT6mkoD9SWMDCT2yJb5zjha6OsHUDFrPa5OEyg8sm67b3y89pmYfoazssEWCIKX2kj9V%2BfLS551VDF2qkyYHgaF4b6%2BM7kgS3E3gM5LSbJI1y%2F9PEMxdp5w8M9Icnkbrc3Ooo4zTOjVzxEId2eeycgFndOexY%2BQtfzvb%2Fo4gZW5ASD8E9t%2BaOtSlzaqL1jFwdclrSYgTfOwGEjEzG7qLzLDix44xwIdoB%2FgQ3Ayge2cLKLyfUaIT7nTKj2q67Q6X9DCNHfV9m2AnRhyopFah5lAUrIcIfRm3pwmtCVP5UpARmq0usZ4uylYFY8%2B2JJEpgENS9g6P%2FFKExZTB0cY8AIwikeKhsNmlqVrmK32QcjDbGYttlTRABqVNNEL3cl%2BX8Dm%2FfxJDwqXjijiv1y5nH0HTc8ny2QGeSog9nsKTNJuvkcpWk3d%2B0H4%2Bh73N306pZI2EbNOJiRHJCiCfUomX%2FAcsF6Mgzm5N6mvnyMrLG4EG4eZxNYIR5mG7xWP705Ylw%2FeeoQ%2FWLLLO1T79OVdVi4zYwoL7dwwY6pgEBss%2ByUpNZNFA%2FQSGyMFeFW0eaO8eqF%2FN0bgZ8zF7n7m6bHNgGiQwnWxIYgfj9ELQRDfSUF1VN4LNzf6Zmgm5XeVY%2B1Ad0%2FMiU8awuSHN37gPGaolLfHU5wEITwIbIgJ%2FADU8pOcJviTuRfOeMLCYdnsLBIummefwBvAxOHeH2pbzYtfoLLQcOuDKceqjd78SL8JcCSyFE%2F%2BirBhIDzkfqzjatlkz6&X-Amz-Signature=984e5a14fc41398421c0f61ccaf3e4c19c7ff8a45297575242a96a3eeec56145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWEHV7U%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIGSEkyvoDMNkFbRos7bI5vl%2FY0Zw6HxGzq%2Brx2zvfwFjAiBjbQ2bbWst8Y4tHdDsmNvYJ2FUCh6D9jvZf0j8pNgjdSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRGzXWrYWFBbE%2BanIKtwDzyzoVKzQ4jD78B63ggGV59gCMf0Jzhf%2FYKFupxKq0yuGKnCVb%2BC6kiuX1ThBBocq%2FfUoP4AigKIGWBrtzFskehNdYUP6IjIlqjzyT6mkoD9SWMDCT2yJb5zjha6OsHUDFrPa5OEyg8sm67b3y89pmYfoazssEWCIKX2kj9V%2BfLS551VDF2qkyYHgaF4b6%2BM7kgS3E3gM5LSbJI1y%2F9PEMxdp5w8M9Icnkbrc3Ooo4zTOjVzxEId2eeycgFndOexY%2BQtfzvb%2Fo4gZW5ASD8E9t%2BaOtSlzaqL1jFwdclrSYgTfOwGEjEzG7qLzLDix44xwIdoB%2FgQ3Ayge2cLKLyfUaIT7nTKj2q67Q6X9DCNHfV9m2AnRhyopFah5lAUrIcIfRm3pwmtCVP5UpARmq0usZ4uylYFY8%2B2JJEpgENS9g6P%2FFKExZTB0cY8AIwikeKhsNmlqVrmK32QcjDbGYttlTRABqVNNEL3cl%2BX8Dm%2FfxJDwqXjijiv1y5nH0HTc8ny2QGeSog9nsKTNJuvkcpWk3d%2B0H4%2Bh73N306pZI2EbNOJiRHJCiCfUomX%2FAcsF6Mgzm5N6mvnyMrLG4EG4eZxNYIR5mG7xWP705Ylw%2FeeoQ%2FWLLLO1T79OVdVi4zYwoL7dwwY6pgEBss%2ByUpNZNFA%2FQSGyMFeFW0eaO8eqF%2FN0bgZ8zF7n7m6bHNgGiQwnWxIYgfj9ELQRDfSUF1VN4LNzf6Zmgm5XeVY%2B1Ad0%2FMiU8awuSHN37gPGaolLfHU5wEITwIbIgJ%2FADU8pOcJviTuRfOeMLCYdnsLBIummefwBvAxOHeH2pbzYtfoLLQcOuDKceqjd78SL8JcCSyFE%2F%2BirBhIDzkfqzjatlkz6&X-Amz-Signature=ddfefcadd39aab7daabb52f9b1b3e8cfb65d9348f4bcd6dc99fe6a78e141cf77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
