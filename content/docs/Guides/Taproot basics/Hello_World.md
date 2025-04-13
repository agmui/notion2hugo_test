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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5MGUSO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCNzF65HeN2shMX9TMNnfq%2BHtTdzJhthkVBJxp6uaJhzwIhAK7VriZ9Cwjj4oAbnsUv9p04Uet1nEPgiE4jNd7ewcXpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOnpxstZer2qS8UgEq3ANQQefjm%2F6DjcZZ8SF3QSpDXZs3MhsYKAyAYrZvT6hfsT0QPfBG43BFI6xZqVxtHBkuZm5is7ONV5ci5dpGljm1IdAbvW0BMi6jUsIbpZgYWsul9HN13zAzamdPqBg%2FYSyS04aVqcH3uAk1%2BPdLHSQUr44OdRSz5gLki1d8NrKAMMkqlq%2B0VrtmRlnkSidjRdYQaWN5jbgbzrn6kmuY0AktOMshoScyXI%2B%2F2hsNev9czPukqtuSvViPZ3hG7YVtkBTRBn1mCkGAiUEMX0LYL5M86dj0LyoMn%2BS07CCit3TDLOcgXWwNf3MRI0CqN18YpjfdswqrVv%2Bn4soixjdYHXBcbsa9M4mRbDl3S0h2QTk9A16q3jK3ellVKsrUy1lTICJq1A8CPOhR7%2Bdb39JyHiAdF%2BpnxR7jqgNUzYJCce2yWvRT71SiaJs6eXEFeHExgg78RZ5kYFAWDtby2GPE0P0MDVieHkleCIFURcvDRe1NnFMmM55xoF8UCSGjs5WPhvtakV066byuaNSqdxkbOJEEPFCHxIwxwuJ9eol35tgGVyy5DpKhJzsG9uwrkZ2Iz%2BDnHV%2BxLHs0fnrm63n850zloFDZFxA8Cy8Abxh1WFsB%2BeT7qil4Enkek94FcTDzve6%2FBjqkAQfMlU3C5lqTBvDtBRSft8NCyi5pUY0lEuFjs9qMXtXlm03eg2HQLT243drU44tiKTgvIeoa95xKnHDCmzUO7knYHfFHeQielIp140Jbp3sA7TzBEGQSXZHtM3feLCIV4yty%2FoTBzcuHNHg9pg63xE8YyYMjMi2lDLflNFvQzrleb7FPSXcWBQKfAsGs2VtyzqxdViGDM3h3kdatet18JlnA%2Bcp%2B&X-Amz-Signature=d0d91ff38f0bc6ac31dfc17e8f35b17466b18a330851ad63c201f7821143298c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5MGUSO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCNzF65HeN2shMX9TMNnfq%2BHtTdzJhthkVBJxp6uaJhzwIhAK7VriZ9Cwjj4oAbnsUv9p04Uet1nEPgiE4jNd7ewcXpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOnpxstZer2qS8UgEq3ANQQefjm%2F6DjcZZ8SF3QSpDXZs3MhsYKAyAYrZvT6hfsT0QPfBG43BFI6xZqVxtHBkuZm5is7ONV5ci5dpGljm1IdAbvW0BMi6jUsIbpZgYWsul9HN13zAzamdPqBg%2FYSyS04aVqcH3uAk1%2BPdLHSQUr44OdRSz5gLki1d8NrKAMMkqlq%2B0VrtmRlnkSidjRdYQaWN5jbgbzrn6kmuY0AktOMshoScyXI%2B%2F2hsNev9czPukqtuSvViPZ3hG7YVtkBTRBn1mCkGAiUEMX0LYL5M86dj0LyoMn%2BS07CCit3TDLOcgXWwNf3MRI0CqN18YpjfdswqrVv%2Bn4soixjdYHXBcbsa9M4mRbDl3S0h2QTk9A16q3jK3ellVKsrUy1lTICJq1A8CPOhR7%2Bdb39JyHiAdF%2BpnxR7jqgNUzYJCce2yWvRT71SiaJs6eXEFeHExgg78RZ5kYFAWDtby2GPE0P0MDVieHkleCIFURcvDRe1NnFMmM55xoF8UCSGjs5WPhvtakV066byuaNSqdxkbOJEEPFCHxIwxwuJ9eol35tgGVyy5DpKhJzsG9uwrkZ2Iz%2BDnHV%2BxLHs0fnrm63n850zloFDZFxA8Cy8Abxh1WFsB%2BeT7qil4Enkek94FcTDzve6%2FBjqkAQfMlU3C5lqTBvDtBRSft8NCyi5pUY0lEuFjs9qMXtXlm03eg2HQLT243drU44tiKTgvIeoa95xKnHDCmzUO7knYHfFHeQielIp140Jbp3sA7TzBEGQSXZHtM3feLCIV4yty%2FoTBzcuHNHg9pg63xE8YyYMjMi2lDLflNFvQzrleb7FPSXcWBQKfAsGs2VtyzqxdViGDM3h3kdatet18JlnA%2Bcp%2B&X-Amz-Signature=88582d848acd880e99b36228b35f6f19cbaf3ced6a4e9592b8e11eadfadcb3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
