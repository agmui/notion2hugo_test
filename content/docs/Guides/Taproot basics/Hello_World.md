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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDUY777%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLXM4KtBH1TskWd8tn%2BQCqr0OfkN5BXgwzQx7cJ%2F8w7AIhAJQ0NaY0iyUrOZXQKp1bTqenTY0dZFJfHRd0HA4PGlhcKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxusaPPDWckgUaESXgq3AO5thkFubbQSjVueXlgo9mInj5i987AvkmUBHGII6gUeNTD6eYWdpGj6JEHmNBS1gZlO1J1kFXX4Hi8JZv45kwX7%2FtgAeBlkMMbBQX%2BsgDGT0SdFRloFfCSsLN95aRzjVSZ13XKEndpknoZd1z69UuZDuvlXvUy%2FM6%2FK%2B8QStTi%2FpPdprAJFysuYNh80Mn9xs0UqZajO9I2s%2FkHKIC1C5uL6gJllEU2Q63coRfiwSqtMoh4M%2BNKEtmk2hcFVADCIxyL6Sy2sSHoUhWY3PtShM7V%2BRhyygGa0%2BT0Mbh9scP2kp8qQIeaj6nAPRxgvN2q5MAZN91rcVbHwr9tFBvTKf9FW500UegKQ%2Ffdlv51lU5tkeTdWRjV8rMXfxsp47FQxa4v7GZoPKiENveGDVd4yhYCQCX7g6jaVM%2BCaWbMUF0kJpNVtXlZOEPuif%2F2xpf%2BvU7QLDvpM1AjyJrg7DjFbAhC%2B5l%2BXyfQcBfSBpAjevmtjp8lybQNMKP%2B%2FYY0Uwv2dN5mbd4XnVSIpw5%2BtrtPFEfPeQixT3pOhBvsTnrBeQbXZVhU6wF5JveLOE9ifxLmVLxcS6hyWs9st59X5NoH5Egc5WDya8AHxVCKdkLS9vq92R1lCtiJpYpV%2BruS3TC5psLDBjqkAd7Nq5073Q%2Fbn%2Ftrfs7TSL32odDvw0m0Yl0ePp12sQGWYuCN3ZiF6EcBKX3KPWoIlRH4RjUgNncqMqGdcnBtAYviYMUg2qpud%2BaS912fFYrl0HnpZnqpeoY%2BpHnVMvjhvuIcrv50aSy%2BiMW%2B7%2BPb3djCtKZ8mItOmEDqRs0h1UHJ0FM0fpiSfm62wihdrzEmsx3jvPiVZCCOBdYeKrxyO1ZYSKWP&X-Amz-Signature=76456569699cf4af30c67ff35dc65bd8d38f1efeec7fa4bef4222779d1512d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDDUY777%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLXM4KtBH1TskWd8tn%2BQCqr0OfkN5BXgwzQx7cJ%2F8w7AIhAJQ0NaY0iyUrOZXQKp1bTqenTY0dZFJfHRd0HA4PGlhcKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxusaPPDWckgUaESXgq3AO5thkFubbQSjVueXlgo9mInj5i987AvkmUBHGII6gUeNTD6eYWdpGj6JEHmNBS1gZlO1J1kFXX4Hi8JZv45kwX7%2FtgAeBlkMMbBQX%2BsgDGT0SdFRloFfCSsLN95aRzjVSZ13XKEndpknoZd1z69UuZDuvlXvUy%2FM6%2FK%2B8QStTi%2FpPdprAJFysuYNh80Mn9xs0UqZajO9I2s%2FkHKIC1C5uL6gJllEU2Q63coRfiwSqtMoh4M%2BNKEtmk2hcFVADCIxyL6Sy2sSHoUhWY3PtShM7V%2BRhyygGa0%2BT0Mbh9scP2kp8qQIeaj6nAPRxgvN2q5MAZN91rcVbHwr9tFBvTKf9FW500UegKQ%2Ffdlv51lU5tkeTdWRjV8rMXfxsp47FQxa4v7GZoPKiENveGDVd4yhYCQCX7g6jaVM%2BCaWbMUF0kJpNVtXlZOEPuif%2F2xpf%2BvU7QLDvpM1AjyJrg7DjFbAhC%2B5l%2BXyfQcBfSBpAjevmtjp8lybQNMKP%2B%2FYY0Uwv2dN5mbd4XnVSIpw5%2BtrtPFEfPeQixT3pOhBvsTnrBeQbXZVhU6wF5JveLOE9ifxLmVLxcS6hyWs9st59X5NoH5Egc5WDya8AHxVCKdkLS9vq92R1lCtiJpYpV%2BruS3TC5psLDBjqkAd7Nq5073Q%2Fbn%2Ftrfs7TSL32odDvw0m0Yl0ePp12sQGWYuCN3ZiF6EcBKX3KPWoIlRH4RjUgNncqMqGdcnBtAYviYMUg2qpud%2BaS912fFYrl0HnpZnqpeoY%2BpHnVMvjhvuIcrv50aSy%2BiMW%2B7%2BPb3djCtKZ8mItOmEDqRs0h1UHJ0FM0fpiSfm62wihdrzEmsx3jvPiVZCCOBdYeKrxyO1ZYSKWP&X-Amz-Signature=2823fdc98ce2899b32ba0d93d10c850f4c785e709a48ca2d161694ddc6c98980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
