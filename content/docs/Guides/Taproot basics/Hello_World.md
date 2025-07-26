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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMI3XGDR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGlqOjNWtIx2cmzLTFn4XEkDXdRaOCXLSFwggy3WodD7AiBf0fiW5dBsnlhkJ4%2FgQmUk7p4yY5BoiocAVN35ZmO4jSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMblG%2BAFr3XL0NNydmKtwD38xLnQJklaRSwDzGIS1z8Mk0ChZJHvMKP5cK7Ytefv%2FnmEL7kgUnUfdePU2NfLgCmfqZUeEoqPcf5ubfX%2FdEsxf6wctfx1J35ZNdLiA7HDmh99y8TqrIrw4gIQNpRb0hmk4sblyt%2FnZtgBVD9KK3%2BDTAV0c%2FNjoq8mObrNrWDLO12PcQjBaITm%2Ft6ADijtPurA81hbPn%2BSVoFqDix5R2l4DYGMNtq9hAm6Eo6iOzjoEeGoZIpdGawEvkmK%2FfAPiVhJQr%2B5w5AHxZASCHfe%2BnSHCuqDl8KEApzrZP0oCkTlntS3SGr3SJmlDGB2OsGsaDLPF%2FkmgPcPu0R54AXbRqU0maUDMoPf%2BRej1ga1W1A0UniqojtO7T27PLLDt4wePLdE5ZsS1Hmi0%2FQwOqFsVyMryT9P%2FGrtQdK4HAapoQTjMJTtDbiAuTvN65Apr%2Fs%2F63iZq6ZXrHqV5WyB1QBUm%2B1TsLNtxOe1JXsMARsgMkKrdwKLdsR49buuIVFdOshHOLGMT0aDvRvlQsEomCZX2UaLZSFJTVjP21tDZNgNQgtPuYHE0g%2FeKbXeO%2FjlKbnh%2B7u9BbPjcuGVC72u0FxnIqkQvQXJSLfc3kRO2ATGtk6HmHHZyPh9TaM7wwBIIwyPqSxAY6pgFsKry6Udjj6vNIjEqjF2RGgbVkZ3H4sPIkp4Hd5srbd8Nv1gWN6amJO7Yc5qTQWq6%2B1c0XSHFGvfDIEUXGuvfzWtKMIpwMSdUj%2Bb5g%2Bt9gVlYE1gH3OYlVtS2X5b0zW8katEHjK8dHot8Q0tkqk9vD68XZ3wTuKytslBdy3U2sJBKqmJRoQxMoJWhXm%2Fob8ahHL9xsZtvwClISsaIMUhyRKA%2BVK3uO&X-Amz-Signature=71e65e8fec6d5782e04476dc0a9b0632a1b729f3071ef0221db3777b03e4890e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMI3XGDR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGlqOjNWtIx2cmzLTFn4XEkDXdRaOCXLSFwggy3WodD7AiBf0fiW5dBsnlhkJ4%2FgQmUk7p4yY5BoiocAVN35ZmO4jSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMblG%2BAFr3XL0NNydmKtwD38xLnQJklaRSwDzGIS1z8Mk0ChZJHvMKP5cK7Ytefv%2FnmEL7kgUnUfdePU2NfLgCmfqZUeEoqPcf5ubfX%2FdEsxf6wctfx1J35ZNdLiA7HDmh99y8TqrIrw4gIQNpRb0hmk4sblyt%2FnZtgBVD9KK3%2BDTAV0c%2FNjoq8mObrNrWDLO12PcQjBaITm%2Ft6ADijtPurA81hbPn%2BSVoFqDix5R2l4DYGMNtq9hAm6Eo6iOzjoEeGoZIpdGawEvkmK%2FfAPiVhJQr%2B5w5AHxZASCHfe%2BnSHCuqDl8KEApzrZP0oCkTlntS3SGr3SJmlDGB2OsGsaDLPF%2FkmgPcPu0R54AXbRqU0maUDMoPf%2BRej1ga1W1A0UniqojtO7T27PLLDt4wePLdE5ZsS1Hmi0%2FQwOqFsVyMryT9P%2FGrtQdK4HAapoQTjMJTtDbiAuTvN65Apr%2Fs%2F63iZq6ZXrHqV5WyB1QBUm%2B1TsLNtxOe1JXsMARsgMkKrdwKLdsR49buuIVFdOshHOLGMT0aDvRvlQsEomCZX2UaLZSFJTVjP21tDZNgNQgtPuYHE0g%2FeKbXeO%2FjlKbnh%2B7u9BbPjcuGVC72u0FxnIqkQvQXJSLfc3kRO2ATGtk6HmHHZyPh9TaM7wwBIIwyPqSxAY6pgFsKry6Udjj6vNIjEqjF2RGgbVkZ3H4sPIkp4Hd5srbd8Nv1gWN6amJO7Yc5qTQWq6%2B1c0XSHFGvfDIEUXGuvfzWtKMIpwMSdUj%2Bb5g%2Bt9gVlYE1gH3OYlVtS2X5b0zW8katEHjK8dHot8Q0tkqk9vD68XZ3wTuKytslBdy3U2sJBKqmJRoQxMoJWhXm%2Fob8ahHL9xsZtvwClISsaIMUhyRKA%2BVK3uO&X-Amz-Signature=f1d9018e6b43e08d2e2cac60800a9f2f8d1cb49d03638eeab0f23cfac5691310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
