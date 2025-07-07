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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUM2R6WP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC8gQVCbTTxw9s74RUPLoeVe9r1FSkwHFo4gkjgDl3XkAIgOShsSfiamX7EuTzh6EmDPyl%2F0ZWCYkyEqe7C1HtHWIYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE%2B3Gydv0dzo4gSOLCrcAx1CCEoEN%2B%2BLkHU4sQPI1SiDfUyH1L6Qj5TJt40OFK%2FD1tvgVHatXp%2B90%2BDhWA2LNqH991IqjqsfmQicRiEazIqZW%2BBbUojT6TcSN%2F8d9zdbJuemwbNeZTVdii54LVfaWU5ViT6OTpQBpb%2BmxMM4HvGtl0Uh5Sc0ENIpVnhvlvuBGnkFnHe87SPYPvt1thlyjQJBChWEMYuevs9HBr8VBvfBxNWWxxidmCoVOeAqmjJOM6ZTcmMK8vYRYkUIipwplhAfTeGVAkrzrj1W9D%2F2DOgEKiu7gi2oFXggcugKVZKJhkqWKvFX9KDGiyLk2m7YsXQN5tKdIvCkUIeVv7EhBg34da6Zob%2FMgdkKtWB%2Fgxhwu0QIh%2B81xOUDyKz0DsEjkibn9E55NwjVTecdtxZMWPWK47Jkpn3MEaf9JfrJuMbugPEwqOX%2BTdtfWaAEmzXDvugt96zkAOZJUOVEzkxIKt8h7pSWZW2Bb3fdTVDd7bykj5quPbdxM1c38TF0DO7UH5Hr5MOODiGC9bMgSI8%2FZmz2KbcwYkSOyBUvcOh4WKyhr6Aa%2F5OKvXG0%2FTdB06ESnIBryDHBGsS9O7hNMgUX9IV4lQ9m7jnsWCwuVJG%2BdDzBRCAw7iMC6YU5jbDcMKeXsMMGOqUBCefNLLXq2n2RpCvdAhghpHqsg1ThYmBVqJZefDkmRrKzOkhtKdSmi%2BStdz2e98oocqABw8irXQI6K0trUtWmzmKqa4ACoZGo%2Fj3%2BHZ%2BSc7jlC1gFNmSiKcSofLXKkjHbsx9MIH7ehoY5EZ6OsGEjk8FdbxyXky7LvcomWLoKkGr%2F8GQALREnfSF9Y%2BChFljMq365%2BDAGO3uQggyBzKTPA6NiU01n&X-Amz-Signature=8a5f80d5183c7d833d224d92b820012fa4c5167092150956f7939a6a37a1c0d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUM2R6WP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC8gQVCbTTxw9s74RUPLoeVe9r1FSkwHFo4gkjgDl3XkAIgOShsSfiamX7EuTzh6EmDPyl%2F0ZWCYkyEqe7C1HtHWIYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE%2B3Gydv0dzo4gSOLCrcAx1CCEoEN%2B%2BLkHU4sQPI1SiDfUyH1L6Qj5TJt40OFK%2FD1tvgVHatXp%2B90%2BDhWA2LNqH991IqjqsfmQicRiEazIqZW%2BBbUojT6TcSN%2F8d9zdbJuemwbNeZTVdii54LVfaWU5ViT6OTpQBpb%2BmxMM4HvGtl0Uh5Sc0ENIpVnhvlvuBGnkFnHe87SPYPvt1thlyjQJBChWEMYuevs9HBr8VBvfBxNWWxxidmCoVOeAqmjJOM6ZTcmMK8vYRYkUIipwplhAfTeGVAkrzrj1W9D%2F2DOgEKiu7gi2oFXggcugKVZKJhkqWKvFX9KDGiyLk2m7YsXQN5tKdIvCkUIeVv7EhBg34da6Zob%2FMgdkKtWB%2Fgxhwu0QIh%2B81xOUDyKz0DsEjkibn9E55NwjVTecdtxZMWPWK47Jkpn3MEaf9JfrJuMbugPEwqOX%2BTdtfWaAEmzXDvugt96zkAOZJUOVEzkxIKt8h7pSWZW2Bb3fdTVDd7bykj5quPbdxM1c38TF0DO7UH5Hr5MOODiGC9bMgSI8%2FZmz2KbcwYkSOyBUvcOh4WKyhr6Aa%2F5OKvXG0%2FTdB06ESnIBryDHBGsS9O7hNMgUX9IV4lQ9m7jnsWCwuVJG%2BdDzBRCAw7iMC6YU5jbDcMKeXsMMGOqUBCefNLLXq2n2RpCvdAhghpHqsg1ThYmBVqJZefDkmRrKzOkhtKdSmi%2BStdz2e98oocqABw8irXQI6K0trUtWmzmKqa4ACoZGo%2Fj3%2BHZ%2BSc7jlC1gFNmSiKcSofLXKkjHbsx9MIH7ehoY5EZ6OsGEjk8FdbxyXky7LvcomWLoKkGr%2F8GQALREnfSF9Y%2BChFljMq365%2BDAGO3uQggyBzKTPA6NiU01n&X-Amz-Signature=0bf7356ac89643c55184e392007e3268d0c4eda298cef6aa18870046e8072a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
