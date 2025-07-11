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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXXUXP4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2Fepa5%2Bk3O%2BL5Bq88Kj57YMImAeFrGSlR925%2FP1ljtAIgfBUcFCkoIrDnxS3jx27iXkDbWEsCpD%2BJK6ty0kSu83kqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEgnenybRSSxI1UJCrcAxYcg8NtTNGcXe0ZvhAUJLZNFO2hvZ1Fl8PUhnwcwIrEP1DC7N6WpSylqW0NnioBunUm%2FPlYPFmBHXYmJIrCVvlBH9E4AdNSGGWYmbqVbtbNBAkdoVA8IX4QcpkQlY6mOs%2FfOeo%2FzkRCFp6UavnkrFE2CwOVYJLQD0Zs3JnYMNDGZZzsycxWqVWxRlhlTQ2%2FQRg27%2Fm5AeA8hnMTZtP8LLIl6AljdhcAFurNPWeNxZZOGY0h9kuzrhFnVcFzHPfBlFpO4RrQaDQTpatE0qoS5U%2BI0WCl35YpIoa7WFGlSlV%2BjPUjWeGRdsx7GRy4XjBznaAuxbKTc4uWHeT8%2FIgvmCKsnRHybFUkVFoOKFGNDNydUUaoR9MosPsgZb90e2FObTVOEHhU8gZRIDAIi81ZkCvOG7ySelN5uOlzLnPPjFSy6NmpZ8tB4TduG8fjbz13JyQHPhvKZbLNB%2BRnY7VU2U%2B8LqRASiaON4C4BDFeji0Xo4%2BFMpca3Ut0KhN8%2BDj9HFIE5%2BJDN7hntCEMDnbAcT2WvhNjtwdwZtwjZ1KrfBK%2FS%2Fhxb1a%2FzcZkFV83nyRdRO%2FZF5CEHX6b0w57YyazmUwoMOxLg%2BwVy7Nxsrbo%2Fb4UM5U0kwPP5Csfb0WLMJjTwsMGOqUB9KrgpxZkY2oQQn%2FtJorRT%2F6bdQpqbqT4gyKXbacXqaG5BGoC1qlJV0ix92JQctSo00wRpCrFxLHNcqa2OLiDF%2FFm4pNyaWEaTrVvtpFznyeSSTEQdKSmzxGxsNHati5OpYavikOk6VaKSpiGazyTIPAOhp7961Mawvq3H3ohLDOWXWmYQYHC%2FHenQ4iuUsDLJg2Gg6AqKyQaFAkleqBIkxw2LfmC&X-Amz-Signature=421fca4146e4bc16abceda75784dc02d555f58a0f79d573fbb8c3836b70a0c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXXUXP4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2Fepa5%2Bk3O%2BL5Bq88Kj57YMImAeFrGSlR925%2FP1ljtAIgfBUcFCkoIrDnxS3jx27iXkDbWEsCpD%2BJK6ty0kSu83kqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEgnenybRSSxI1UJCrcAxYcg8NtTNGcXe0ZvhAUJLZNFO2hvZ1Fl8PUhnwcwIrEP1DC7N6WpSylqW0NnioBunUm%2FPlYPFmBHXYmJIrCVvlBH9E4AdNSGGWYmbqVbtbNBAkdoVA8IX4QcpkQlY6mOs%2FfOeo%2FzkRCFp6UavnkrFE2CwOVYJLQD0Zs3JnYMNDGZZzsycxWqVWxRlhlTQ2%2FQRg27%2Fm5AeA8hnMTZtP8LLIl6AljdhcAFurNPWeNxZZOGY0h9kuzrhFnVcFzHPfBlFpO4RrQaDQTpatE0qoS5U%2BI0WCl35YpIoa7WFGlSlV%2BjPUjWeGRdsx7GRy4XjBznaAuxbKTc4uWHeT8%2FIgvmCKsnRHybFUkVFoOKFGNDNydUUaoR9MosPsgZb90e2FObTVOEHhU8gZRIDAIi81ZkCvOG7ySelN5uOlzLnPPjFSy6NmpZ8tB4TduG8fjbz13JyQHPhvKZbLNB%2BRnY7VU2U%2B8LqRASiaON4C4BDFeji0Xo4%2BFMpca3Ut0KhN8%2BDj9HFIE5%2BJDN7hntCEMDnbAcT2WvhNjtwdwZtwjZ1KrfBK%2FS%2Fhxb1a%2FzcZkFV83nyRdRO%2FZF5CEHX6b0w57YyazmUwoMOxLg%2BwVy7Nxsrbo%2Fb4UM5U0kwPP5Csfb0WLMJjTwsMGOqUB9KrgpxZkY2oQQn%2FtJorRT%2F6bdQpqbqT4gyKXbacXqaG5BGoC1qlJV0ix92JQctSo00wRpCrFxLHNcqa2OLiDF%2FFm4pNyaWEaTrVvtpFznyeSSTEQdKSmzxGxsNHati5OpYavikOk6VaKSpiGazyTIPAOhp7961Mawvq3H3ohLDOWXWmYQYHC%2FHenQ4iuUsDLJg2Gg6AqKyQaFAkleqBIkxw2LfmC&X-Amz-Signature=cc39e3c0fcd32c57333c83ebc609e29be1213c0aec6526f5ea71d8e2e421aae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
