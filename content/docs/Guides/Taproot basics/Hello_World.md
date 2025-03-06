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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UYPEGW%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVojNxIRVrPP21sxuHk9WTA7Zd9y%2B2TM2l5aN8kBaGEAiBkVpImifTskgok13tG1rPPG%2FlIB6968R29uFJFAD96YSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIME9lDCyiX5JorqFaEKtwDUENcRkUYJe9mAkHOzXzc%2Fogxd00HWPCn7UuBodlEDFZ9%2FsyJfhBMg9PDBNpihd2Rc0dCjrZLzXkyC3Yo0toBxQ7SG7sslatpjYX1I0NpGE8SK88%2BYTmAPRtocXAJOAkACTqGg9i40S0Dhp7zyJY2NNSu4ZkcyJKuuhqYhKbagSBmin21Gl5VibGRcqJVF%2FhGRSvk0LeKW2PK7X6P5mWYf4Hy6R%2BfN7S%2B08%2FStwcuSo7Ai5XS5WRYGwmDNBo3i30FRBdPDpyHWF420vAhWNK%2FgKEC85sjVV8VpGUd4CHKvs5IpV2TveDilcMLtoim0oL1OLvVfaT%2B0JwjhYecY%2BHAyDzT21ANOdtijy9uQO6HYIPN0%2Fb2VFmSpm7M1V%2FFf%2F51eW0k50Brxctg8AynYign%2FtoAQy6i9aTX4LfBNK60uJeogXyoErg7eEwlpvlHl7e4Ju3QXA%2FL9GtEPVnIY1rLXTm7PV4Nr9yNoZkbc35ErFiQjyyY%2BgjsaRLsOF%2BP1Mb3lIbGes%2Fs0B71uLxmI9A0GtpeQQnn88WSh9jQZojRQj%2B9kcUqchXDHLBeou9B1LabIiT%2B4uMe%2Butc3Hr%2ByHrpuoEytZskxHprf7e8RW64eWj9WjGj6yCd%2FWxdbi8wquejvgY6pgELK2TjUszPld%2Bso1HiOTOA7teZ0T90qqt5c3q%2BIYdugZ83AyHSdyJCTwTwiAdWfeGy6iH20RDlX0GhnKsTdppMkKfgJUxenHKZaqmWpxrArarJET3DhfSzHN3NJkpMf8LP4jItaIWq2kBOjIraMZVEYQmpvIFdibVzfT7FOFu3ukOhSjyOqwYnTVnUdJ2sp72A3hXAW9pAg7IRO8O4IQmIUjjorVkI&X-Amz-Signature=58bd96776d5602ee33b35432a71f423dde203feafc94d733df5c946e90f9497a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UYPEGW%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVojNxIRVrPP21sxuHk9WTA7Zd9y%2B2TM2l5aN8kBaGEAiBkVpImifTskgok13tG1rPPG%2FlIB6968R29uFJFAD96YSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIME9lDCyiX5JorqFaEKtwDUENcRkUYJe9mAkHOzXzc%2Fogxd00HWPCn7UuBodlEDFZ9%2FsyJfhBMg9PDBNpihd2Rc0dCjrZLzXkyC3Yo0toBxQ7SG7sslatpjYX1I0NpGE8SK88%2BYTmAPRtocXAJOAkACTqGg9i40S0Dhp7zyJY2NNSu4ZkcyJKuuhqYhKbagSBmin21Gl5VibGRcqJVF%2FhGRSvk0LeKW2PK7X6P5mWYf4Hy6R%2BfN7S%2B08%2FStwcuSo7Ai5XS5WRYGwmDNBo3i30FRBdPDpyHWF420vAhWNK%2FgKEC85sjVV8VpGUd4CHKvs5IpV2TveDilcMLtoim0oL1OLvVfaT%2B0JwjhYecY%2BHAyDzT21ANOdtijy9uQO6HYIPN0%2Fb2VFmSpm7M1V%2FFf%2F51eW0k50Brxctg8AynYign%2FtoAQy6i9aTX4LfBNK60uJeogXyoErg7eEwlpvlHl7e4Ju3QXA%2FL9GtEPVnIY1rLXTm7PV4Nr9yNoZkbc35ErFiQjyyY%2BgjsaRLsOF%2BP1Mb3lIbGes%2Fs0B71uLxmI9A0GtpeQQnn88WSh9jQZojRQj%2B9kcUqchXDHLBeou9B1LabIiT%2B4uMe%2Butc3Hr%2ByHrpuoEytZskxHprf7e8RW64eWj9WjGj6yCd%2FWxdbi8wquejvgY6pgELK2TjUszPld%2Bso1HiOTOA7teZ0T90qqt5c3q%2BIYdugZ83AyHSdyJCTwTwiAdWfeGy6iH20RDlX0GhnKsTdppMkKfgJUxenHKZaqmWpxrArarJET3DhfSzHN3NJkpMf8LP4jItaIWq2kBOjIraMZVEYQmpvIFdibVzfT7FOFu3ukOhSjyOqwYnTVnUdJ2sp72A3hXAW9pAg7IRO8O4IQmIUjjorVkI&X-Amz-Signature=665a3f08493fa0f52110a59e2a0da58a98888bb7bdf1547c82d355a1889dff66&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
