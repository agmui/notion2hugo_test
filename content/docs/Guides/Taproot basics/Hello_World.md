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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZGC2F2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRIuu1DCwBRgHMo8oO3s0K3hHDXDepEWeERHylkAlWZgIgTR1FbOu7g9y4ABa48dlsgJlF6KY96aEvN%2F%2FjjzAk43Iq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFSfDV9Ic2Y3wtoP3ircAyom4PWV6eAzm%2FL15BiYHxX9UDK6368L8Gg6kUqLliTDxdhukL8Cj4wefHBFfTdnVl1o6dE3moQHnVqKIJwW%2BKazbAJLb5Y4vyGhOpB6SUuErmJVazV%2B%2Fdozezf6HPj8CLPJU8gRYNmUADkizG%2Bw1TgN%2FagUHmYnPDvwD17fhAVtgdWL7rtnZamHuWPlKIXR4aAvVYfwzLecUJCGkz%2F8ZhxvokUO%2FkczDe62voZCgYsWvAjzqIBL6iqlg4gDPdsvgkRN52wKfC17j5ADnvCrSRIRICtyVsCs2M86rX3vDFl3ob0wSANbSwu6dh7NvG9PAXdlqv5%2Br%2FdiPlan3mSya%2BU0sTy7BV2y15mVsp0%2FNru6QKiXjw0LQmdEwvYtOBMaFi19Yp2mYctHB8yZCg1fdN9rlykxR0fpG%2BFAgQTrA5RnnVdMPLGc8Efb1FRjW%2FLT8BL2PcviTlVOPTlXZwZ1JiKzYJ3G54Vta0gWUAitj7EjpcUjYWdlN0XYrVO1%2B%2Frgw8Gtvw2A6i7HeQPvOlsR3jjiRGUOj1KU47wXMLnntDl1zGoORMChF49POyOxp54LeQSOMkNc1gf91d%2FinS0yI1insDn8MdfacSNs9Zk47Zvmj%2B32IDm8CIjY22dCMKX2zb0GOqUBqIwtVFWKlCbWM4NeJ4opOfyciY34piZKw6x06S7CkdB43%2BtMqfig6ucSMJrrw56OcAKByinUcit0iyBULcKOf7h9yzPQQ1JaUzbPNJmciRznKBZ%2BQkOBCEyyPJ4t3WMNFliPJFWnuxHKeQrbZdB7rW8n4Y5X5iqC0C1f56U%2FC%2F0JJALjE6gqEfVdAtWUxsWmGH0Q%2FBKWwWorq3gy7SlEfKYZdF%2Bj&X-Amz-Signature=bb50401ee290bda0569bc3286eb900df6cea40a8d9dacfc957cf9e3b2a1dd0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZGC2F2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRIuu1DCwBRgHMo8oO3s0K3hHDXDepEWeERHylkAlWZgIgTR1FbOu7g9y4ABa48dlsgJlF6KY96aEvN%2F%2FjjzAk43Iq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFSfDV9Ic2Y3wtoP3ircAyom4PWV6eAzm%2FL15BiYHxX9UDK6368L8Gg6kUqLliTDxdhukL8Cj4wefHBFfTdnVl1o6dE3moQHnVqKIJwW%2BKazbAJLb5Y4vyGhOpB6SUuErmJVazV%2B%2Fdozezf6HPj8CLPJU8gRYNmUADkizG%2Bw1TgN%2FagUHmYnPDvwD17fhAVtgdWL7rtnZamHuWPlKIXR4aAvVYfwzLecUJCGkz%2F8ZhxvokUO%2FkczDe62voZCgYsWvAjzqIBL6iqlg4gDPdsvgkRN52wKfC17j5ADnvCrSRIRICtyVsCs2M86rX3vDFl3ob0wSANbSwu6dh7NvG9PAXdlqv5%2Br%2FdiPlan3mSya%2BU0sTy7BV2y15mVsp0%2FNru6QKiXjw0LQmdEwvYtOBMaFi19Yp2mYctHB8yZCg1fdN9rlykxR0fpG%2BFAgQTrA5RnnVdMPLGc8Efb1FRjW%2FLT8BL2PcviTlVOPTlXZwZ1JiKzYJ3G54Vta0gWUAitj7EjpcUjYWdlN0XYrVO1%2B%2Frgw8Gtvw2A6i7HeQPvOlsR3jjiRGUOj1KU47wXMLnntDl1zGoORMChF49POyOxp54LeQSOMkNc1gf91d%2FinS0yI1insDn8MdfacSNs9Zk47Zvmj%2B32IDm8CIjY22dCMKX2zb0GOqUBqIwtVFWKlCbWM4NeJ4opOfyciY34piZKw6x06S7CkdB43%2BtMqfig6ucSMJrrw56OcAKByinUcit0iyBULcKOf7h9yzPQQ1JaUzbPNJmciRznKBZ%2BQkOBCEyyPJ4t3WMNFliPJFWnuxHKeQrbZdB7rW8n4Y5X5iqC0C1f56U%2FC%2F0JJALjE6gqEfVdAtWUxsWmGH0Q%2FBKWwWorq3gy7SlEfKYZdF%2Bj&X-Amz-Signature=976402cd754b748fb6044930353ef22ef8fbafc8526c7bd9fd6bcfe0fa18c00a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
