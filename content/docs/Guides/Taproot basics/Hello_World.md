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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDQIZ3L%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWX547yVtNPcUaV3QYDLl23UbdzxQnnIMI3UZQA8DaAAIhALU79p1O%2BsJWdSJdMHGPQJ%2FG7vU6cFO1aqFld2TkqBERKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Bl8W5PoQlRuvAmaUq3ANMWc73h8qxJcqUzQsfgbUAu38SpNQLUAZcQ5Cj%2BBdrk7VQrcIx24Y37LCnBUPrRBNSG7MAdRKCLwIMVfhedcN7946t75HCl5GByIh6DDOBHgbL94ZzHl5cER2ryi8tWbgKpXU7wh0DdiYNy9JtQUmAhrc6erKpGGdUaWrl730GqfTIm4weWXXkCnm1eiVEtvk3n%2BdFeRQFfG2%2FCrtnS%2FVs8fIYlLW0ZkaQ1ectfR0HasEkMz6mWfZucPMNXHXSdaXXiNA%2FBU8OnOy6ZZoyaxcQwojFtrC%2BWt11MsuiO0EnO252WwsvYc87uHyHXhY5EufUm1mygjp0AcAEYOU9Fr81dBBLRoswk5nFccTk7XpVnrnrgYP5afdBBvOk94WI7yc3pXZBiuCH56hs4jVevFMYWaxvVGCdaluDDdBpLeWG%2FJSVCK0Gbs0t7L%2B7dtqbitasM0m2Rb1XcGTzl6IRzWSFNZz2tNAAoy9a4zDIQ%2FB8EnHP8LKxbjgMEWGXZy97uC1Tz3%2BZYOTyDDr%2FJJGyg9MloknDfyW6Zi%2FsTx%2BW9guBDbPGvJP1Y16ZR4Gmh5arRN67irHoUK9275p%2BK635tW4gFxokfqSDMauZp0u%2B7J1a9mrc3aalSMGF8guX6DC4qZ%2B%2BBjqkAVk3tl7%2ByK27lq0Ajq8n18E1NbQhaP8YjTUzaayrwM5PDQCRcUx3B0e3Vk20I9sUHuhLAaSfWjlzJMkfI2J8K%2FQNATuiCMTszmHQJ49q1w2Tu96dPppi%2B3Xk0L968XWYhu3YzdCkB66eYumwjH1LXqTBsQgeMvf%2Bx7PcwjpbmgB11m5%2BnEUGp2vfuL3upt0efwUJWeaopuhfscl5eD7fBBF%2BdrVI&X-Amz-Signature=a3ff5fef9a19a3945d5de8aab7b6e8135163f1c913c32791f8a44aadfc500b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXDQIZ3L%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWX547yVtNPcUaV3QYDLl23UbdzxQnnIMI3UZQA8DaAAIhALU79p1O%2BsJWdSJdMHGPQJ%2FG7vU6cFO1aqFld2TkqBERKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Bl8W5PoQlRuvAmaUq3ANMWc73h8qxJcqUzQsfgbUAu38SpNQLUAZcQ5Cj%2BBdrk7VQrcIx24Y37LCnBUPrRBNSG7MAdRKCLwIMVfhedcN7946t75HCl5GByIh6DDOBHgbL94ZzHl5cER2ryi8tWbgKpXU7wh0DdiYNy9JtQUmAhrc6erKpGGdUaWrl730GqfTIm4weWXXkCnm1eiVEtvk3n%2BdFeRQFfG2%2FCrtnS%2FVs8fIYlLW0ZkaQ1ectfR0HasEkMz6mWfZucPMNXHXSdaXXiNA%2FBU8OnOy6ZZoyaxcQwojFtrC%2BWt11MsuiO0EnO252WwsvYc87uHyHXhY5EufUm1mygjp0AcAEYOU9Fr81dBBLRoswk5nFccTk7XpVnrnrgYP5afdBBvOk94WI7yc3pXZBiuCH56hs4jVevFMYWaxvVGCdaluDDdBpLeWG%2FJSVCK0Gbs0t7L%2B7dtqbitasM0m2Rb1XcGTzl6IRzWSFNZz2tNAAoy9a4zDIQ%2FB8EnHP8LKxbjgMEWGXZy97uC1Tz3%2BZYOTyDDr%2FJJGyg9MloknDfyW6Zi%2FsTx%2BW9guBDbPGvJP1Y16ZR4Gmh5arRN67irHoUK9275p%2BK635tW4gFxokfqSDMauZp0u%2B7J1a9mrc3aalSMGF8guX6DC4qZ%2B%2BBjqkAVk3tl7%2ByK27lq0Ajq8n18E1NbQhaP8YjTUzaayrwM5PDQCRcUx3B0e3Vk20I9sUHuhLAaSfWjlzJMkfI2J8K%2FQNATuiCMTszmHQJ49q1w2Tu96dPppi%2B3Xk0L968XWYhu3YzdCkB66eYumwjH1LXqTBsQgeMvf%2Bx7PcwjpbmgB11m5%2BnEUGp2vfuL3upt0efwUJWeaopuhfscl5eD7fBBF%2BdrVI&X-Amz-Signature=cf5f72b22b480fdd3cf96aec2e04833f0a25355170784666293f58f7c73d1372&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
