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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBES5BGH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2SAjqe8fcGUN1V9iITpREL7a12b%2FTjW3cgCnU%2BigsiAiEAhJqN6PllWUYl9jGSqEaCWXTwl1pTiI1zfQl6l4bNFzEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADG0M1ZHNKmmbdsCircA%2FTL6k11BimaZCBJCsaZ2TV9oy8PJ7WPsEHulv%2BG5kZLP1iGX264K7wAioLP4R%2F1wVPqztwy1ZrSvp26KLYnfcRM54oHccA2oBCsQBAMq4Cw0VyeoFJMGmFl3qiQuvr1Lb08vf0%2FfJaskVFnKg7YBmO0ZWrossDBxYws8WvlodUW8QUMs58RLOxrKg9koXh0VGx19s9G4D7ad67x2XkAH4AgvPXikZUen9eV1%2B617t2iwYPgKZM5qSwgxdYNC%2FKmRWBBcuunjLXKrK1kEkfT%2BgHVEMqxBszpwe2sdStCq4R54o%2BTJBIu4H7A66Gjf4TNbfHc2yuXIMwgQA04HOaqo5YVevFoj%2Ff21IqL5SHWJW0hbDVoGKmm336zBn8wCymAu%2FlcQqvl3l3mNRX4Bd1BJ7FGxwxU%2BjosAhZSnoGCVbyv5gtFWiJfUuuq1gfaDijl8g0EdlWxuglhnVTiU6bCWInc98zHaA8rcfmwCV4wgBO5v8edyy85MgiV67VCe7B5Qj%2FlsrmmBR2OB%2FwS45e6yCbfdTFaS6IHfVcsX%2Fid5mWoIEoRCtOaKTnH9jSFZo96j7Q0JUoaBNJ3sTrCEUKvTMSRMaGQiIrVzhXmDqDUe8D8gE3Xrvnj9tumT%2FCaMN%2BKgMMGOqUBxbnjXfDkSwGU1mHpT3v1EjTLiR4DEEvu1yj3Klyx%2BGTkEC3ai6y6yZ74GrUckSMHv%2FrwncQf7rm2cnbWcq5QlhgDSvhNUnmEJ%2BaiF3JNk2YrW2UM9tfrlvAIPHaKMQgMg9eqZO2N7%2B5kyozPCc2PQFa0hKYVVVzR8mlNsS04YxSQtjmjV%2BvNqjpdWqxZWMRnDX8fQ%2BmaLAcEDKh08N2USaKZscg5&X-Amz-Signature=f38c1928c3b8567e77f1c12ca56a22de9a935df24558741b2bbd34d3f545b628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBES5BGH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2SAjqe8fcGUN1V9iITpREL7a12b%2FTjW3cgCnU%2BigsiAiEAhJqN6PllWUYl9jGSqEaCWXTwl1pTiI1zfQl6l4bNFzEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADG0M1ZHNKmmbdsCircA%2FTL6k11BimaZCBJCsaZ2TV9oy8PJ7WPsEHulv%2BG5kZLP1iGX264K7wAioLP4R%2F1wVPqztwy1ZrSvp26KLYnfcRM54oHccA2oBCsQBAMq4Cw0VyeoFJMGmFl3qiQuvr1Lb08vf0%2FfJaskVFnKg7YBmO0ZWrossDBxYws8WvlodUW8QUMs58RLOxrKg9koXh0VGx19s9G4D7ad67x2XkAH4AgvPXikZUen9eV1%2B617t2iwYPgKZM5qSwgxdYNC%2FKmRWBBcuunjLXKrK1kEkfT%2BgHVEMqxBszpwe2sdStCq4R54o%2BTJBIu4H7A66Gjf4TNbfHc2yuXIMwgQA04HOaqo5YVevFoj%2Ff21IqL5SHWJW0hbDVoGKmm336zBn8wCymAu%2FlcQqvl3l3mNRX4Bd1BJ7FGxwxU%2BjosAhZSnoGCVbyv5gtFWiJfUuuq1gfaDijl8g0EdlWxuglhnVTiU6bCWInc98zHaA8rcfmwCV4wgBO5v8edyy85MgiV67VCe7B5Qj%2FlsrmmBR2OB%2FwS45e6yCbfdTFaS6IHfVcsX%2Fid5mWoIEoRCtOaKTnH9jSFZo96j7Q0JUoaBNJ3sTrCEUKvTMSRMaGQiIrVzhXmDqDUe8D8gE3Xrvnj9tumT%2FCaMN%2BKgMMGOqUBxbnjXfDkSwGU1mHpT3v1EjTLiR4DEEvu1yj3Klyx%2BGTkEC3ai6y6yZ74GrUckSMHv%2FrwncQf7rm2cnbWcq5QlhgDSvhNUnmEJ%2BaiF3JNk2YrW2UM9tfrlvAIPHaKMQgMg9eqZO2N7%2B5kyozPCc2PQFa0hKYVVVzR8mlNsS04YxSQtjmjV%2BvNqjpdWqxZWMRnDX8fQ%2BmaLAcEDKh08N2USaKZscg5&X-Amz-Signature=ca6b2c6519b46f1b9c7d7ed4a68f4461a8614ebf99bea1cb8ea452af73f93484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
