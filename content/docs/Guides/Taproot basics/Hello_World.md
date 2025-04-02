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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJOPRLH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDJBVodPW%2B41W3WFz3R7frTbirfa1DlTgY0ncOimtoZTAIhAKtzGJs%2BWYCnsg0gA9wJsNUtK60gwc%2BTPyI%2BuRoVEyrCKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXEGdK2aV4%2BGe0v4gq3ANDXhE%2BkAR%2BQbNh3fo843jG%2B79R7s6G8XVVCMLjYQ0plddp2JD03FjQf3jBBSmDQrD4mRLf6POG%2FV1UdkqPA1VnBH2DWoz%2B8ojAykLXZOouHMOeRdtYi7cZx2zqZsPr8V0RpNlKcKo5gkRqBSMQjz0EqlDvrGBBUV2FS2YBm7S4ARLwjqfhpt1vy2gsvBk%2Bjem2K3tq8%2B96c%2FA9Si0RhBHeVQFLQDYja7G1Q%2B5UY23invI0GvGZncoZdf5gwpidIX6IvnRIh27dG0Vz6YiMoOMedTezorJlE68%2F6wsxovUsZ88b5PX7%2FWU1Oo5PS59EjucSOIRfOE8PMkIiC5EFjBKOuElZgVBYp%2FvH4Y8iT5nMOkqP84MOa6lVG74f6ZvyTT74hylB%2FbCozS5BGgrazBm4pL%2BS0lVJxH1UV3xg6fwNdi1hd4oJToTgT%2BrsIRNhl0XZCh%2BAbwMZaAcni1D9Sm5x2DALBlcCWh5%2FmXvp6IUgjMbCNifAnkeIbv2U%2FaBYCan8xnNNfLOrQBSdIDQFIV%2Bhlo0bJ1U2k6IS5C96RPnOIrtSi6cudPE3H6ItrUSqVzc%2FVJuigyoPBvGoGuzo7HSQVhoclz3wzCMlEtW%2FvmaNzgXmLRkoStqLXKZiqzDtpba%2FBjqkARmR5D94Xg2H30oo%2BYenMHr0lEJmIyMLH4r8iB9rLjuep4tsS55Gvm7PUUmTzX0ng48sTxKXq1cEU8wNwJuJ1RQ96EmZMg748%2B86XYhauuWaXTTAolGH%2FQdwgQ3gTfzmZyE0%2FlnsqrBWi8PxT5WqqmJabk%2B56t5uI%2FUJTuHxPV3ubiM25mw%2Fr0%2FtWvTeJEfOyKTG8U%2BHuYG0p01NzaOhoaHgWwYm&X-Amz-Signature=9c8f4f5859744530f143944b1a9349ea36634ce39697cabbdfde9f3e8375fd50&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSJOPRLH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDJBVodPW%2B41W3WFz3R7frTbirfa1DlTgY0ncOimtoZTAIhAKtzGJs%2BWYCnsg0gA9wJsNUtK60gwc%2BTPyI%2BuRoVEyrCKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXEGdK2aV4%2BGe0v4gq3ANDXhE%2BkAR%2BQbNh3fo843jG%2B79R7s6G8XVVCMLjYQ0plddp2JD03FjQf3jBBSmDQrD4mRLf6POG%2FV1UdkqPA1VnBH2DWoz%2B8ojAykLXZOouHMOeRdtYi7cZx2zqZsPr8V0RpNlKcKo5gkRqBSMQjz0EqlDvrGBBUV2FS2YBm7S4ARLwjqfhpt1vy2gsvBk%2Bjem2K3tq8%2B96c%2FA9Si0RhBHeVQFLQDYja7G1Q%2B5UY23invI0GvGZncoZdf5gwpidIX6IvnRIh27dG0Vz6YiMoOMedTezorJlE68%2F6wsxovUsZ88b5PX7%2FWU1Oo5PS59EjucSOIRfOE8PMkIiC5EFjBKOuElZgVBYp%2FvH4Y8iT5nMOkqP84MOa6lVG74f6ZvyTT74hylB%2FbCozS5BGgrazBm4pL%2BS0lVJxH1UV3xg6fwNdi1hd4oJToTgT%2BrsIRNhl0XZCh%2BAbwMZaAcni1D9Sm5x2DALBlcCWh5%2FmXvp6IUgjMbCNifAnkeIbv2U%2FaBYCan8xnNNfLOrQBSdIDQFIV%2Bhlo0bJ1U2k6IS5C96RPnOIrtSi6cudPE3H6ItrUSqVzc%2FVJuigyoPBvGoGuzo7HSQVhoclz3wzCMlEtW%2FvmaNzgXmLRkoStqLXKZiqzDtpba%2FBjqkARmR5D94Xg2H30oo%2BYenMHr0lEJmIyMLH4r8iB9rLjuep4tsS55Gvm7PUUmTzX0ng48sTxKXq1cEU8wNwJuJ1RQ96EmZMg748%2B86XYhauuWaXTTAolGH%2FQdwgQ3gTfzmZyE0%2FlnsqrBWi8PxT5WqqmJabk%2B56t5uI%2FUJTuHxPV3ubiM25mw%2Fr0%2FtWvTeJEfOyKTG8U%2BHuYG0p01NzaOhoaHgWwYm&X-Amz-Signature=e72f7d310569669da6c366454e7b30b965fda57b18f12df9951a8514fcf3cd0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
