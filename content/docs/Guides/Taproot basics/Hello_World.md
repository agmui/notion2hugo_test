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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDM6OFC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC2aceZY0Cl1O6MIAjt8wzCckkc3BZrc950KUYJHdAccAiEAnIDw%2FV48A0uxIGSvPjNDYRp9oNkLEXSEdNo8CkgjwyYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDA2BqN84kcpwQKZgyCrcA91TIxvpZSbPlHFr26OMCvjtZsYUTF2dS1IleUR8XMG%2F6D8lsj325yyPIRm6JDmHf3indP4ryyAQP6hMw6SUrCdtlgeWmEZ94u83d3odl2xLZNombMHDI61a%2F24pTV%2BLpZ7rV%2BEnBmE2s9%2FExeQOqBuI7IgVDWgr2%2BVsStJ%2BvAJe1RCFNUgFamZHOc0mIdnproQSyCDWT4gkbISDVgJSuBvvpzInlQF7L17lAdTn45%2FPvOMCvtCI5aBora0wzDSiHNt9egxH4Gl7xXgk%2FOqGQJObfR6Y6y8Cj56ImVW162mN%2F78giC5fL8X7CMrU45436uXs3nj7SIUq1L7UfbO1BhlJ2UC1Fajq6%2FNjBcBlLIm4w7zE%2FZQp7DZ4kpfGrCU4SS6oSmu6YUQ57l1uFRyHD15rxGUMCX%2FYunFt%2Bkiy6fH%2Bl0biMA2qJ2DdN6qPBUFVdIkHTPEstMTFOx3%2Ft2iOkJs29%2BZo8jXzxEJbr5OCeABtrHkLfOxcw0HujbpFWfpLWJQZ5z2ahJMhXsItakUp6wBI5sZySUkosdjdt7%2FaiJ67%2BuOOh9l3MHLwyi2GJ4AO6zlkaMDLeNN5NJr1G4dmGwuW%2BGSdPFUNt0RuhWJO7GKWfue4RRqCQ4b9eBF0MLz6ksQGOqUBib51g5Ap3aqfAs04NyZfvKvabnZl6vabb1QbIsc8SNByO5ggokwu9FrOZ%2FhccaFAs5xuo%2Bq7WLPbHDFFQlMESSfQo1jkabLmHTPuqVEqwV12XjnLR%2BK6n3eP9kCTHvDVxRezdx8blDZ3FCDiseL%2BJ6%2F1IoWZUeI%2FAs2%2FuL8a2KZ75yGOwhSnXNQrhPateswlVmKtEvLJlq8blZq7h4%2FsRpblQKuO&X-Amz-Signature=c1db845b8addb7f71ffed1de0db9f3324355d41f4e8ad439fcc71de385babcd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDM6OFC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC2aceZY0Cl1O6MIAjt8wzCckkc3BZrc950KUYJHdAccAiEAnIDw%2FV48A0uxIGSvPjNDYRp9oNkLEXSEdNo8CkgjwyYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDA2BqN84kcpwQKZgyCrcA91TIxvpZSbPlHFr26OMCvjtZsYUTF2dS1IleUR8XMG%2F6D8lsj325yyPIRm6JDmHf3indP4ryyAQP6hMw6SUrCdtlgeWmEZ94u83d3odl2xLZNombMHDI61a%2F24pTV%2BLpZ7rV%2BEnBmE2s9%2FExeQOqBuI7IgVDWgr2%2BVsStJ%2BvAJe1RCFNUgFamZHOc0mIdnproQSyCDWT4gkbISDVgJSuBvvpzInlQF7L17lAdTn45%2FPvOMCvtCI5aBora0wzDSiHNt9egxH4Gl7xXgk%2FOqGQJObfR6Y6y8Cj56ImVW162mN%2F78giC5fL8X7CMrU45436uXs3nj7SIUq1L7UfbO1BhlJ2UC1Fajq6%2FNjBcBlLIm4w7zE%2FZQp7DZ4kpfGrCU4SS6oSmu6YUQ57l1uFRyHD15rxGUMCX%2FYunFt%2Bkiy6fH%2Bl0biMA2qJ2DdN6qPBUFVdIkHTPEstMTFOx3%2Ft2iOkJs29%2BZo8jXzxEJbr5OCeABtrHkLfOxcw0HujbpFWfpLWJQZ5z2ahJMhXsItakUp6wBI5sZySUkosdjdt7%2FaiJ67%2BuOOh9l3MHLwyi2GJ4AO6zlkaMDLeNN5NJr1G4dmGwuW%2BGSdPFUNt0RuhWJO7GKWfue4RRqCQ4b9eBF0MLz6ksQGOqUBib51g5Ap3aqfAs04NyZfvKvabnZl6vabb1QbIsc8SNByO5ggokwu9FrOZ%2FhccaFAs5xuo%2Bq7WLPbHDFFQlMESSfQo1jkabLmHTPuqVEqwV12XjnLR%2BK6n3eP9kCTHvDVxRezdx8blDZ3FCDiseL%2BJ6%2F1IoWZUeI%2FAs2%2FuL8a2KZ75yGOwhSnXNQrhPateswlVmKtEvLJlq8blZq7h4%2FsRpblQKuO&X-Amz-Signature=446a5b403418ef8916cb5df13c01d4f3788f7b77f4d1aeec03273e4cfbe7c1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
