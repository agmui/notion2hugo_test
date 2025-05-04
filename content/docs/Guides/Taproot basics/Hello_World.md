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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGKFDI25%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDKPqvaAeDIpOJcMfTFx2jur7pG9DbCpcwDMyQmhQqm9QIhAKmgOni6k9JQWwmKdeXBl4aE8yrJPMFhKuFGtTSTQdwGKv8DCBoQABoMNjM3NDIzMTgzODA1Igw7y8vwgEghZ0cfhgQq3AO%2F%2BLPPl2w%2Bnz68EzMevwTrh3oCCmRxATv2ycukvN33SmKAdtpm54JrVgGOxsPhMHTGPLkNcl3hdeEp8JN49dyrzg56sNjJNFfdXNFIGX3c5uYGs%2BQBaqlKlL1iL8UGsY9Ka0APLgngQIt1SNapYR2hstuiNXX%2F%2F9mE5io9fpuCg7BYu5nDDkwKSC%2FI1n9bZyMPXs7QkOcfove0%2FPDrYmHTVZMFAJeUOOsUH7LJ1rDvNdD9OxQwogCe9zKT8oh0fDnD69K2k2iP1xInCg5fcNK077z%2Fs2fHUs99B3YIPxpJ%2FgQQlP89CgBEjor4odw%2BssaSzJ2UgFrFO3IqgK%2Bs783qJghJ%2B2t20meOhctclOvcHk5bcJHIRyxD8aO3K4k2iQVskL31qACrE84j8AbW6Zf40NPiX99E1JI6NdpmfdU9y6o%2Fso%2BmjetftI0YlZhYI5oR8MlKkAfaYjyyr3Jj0QeObCYfsEbm5ErdcS56LiiwGONZA2tzpyD%2BI9PCHdpWRVLKl59aRYojYZQY31nr5e49Vp851JDfjr%2FqcEv3xsCA9Qk2YRcAUlOUab1k69zQNaHWlZ0jwD81MuUNNyeP%2Fvjhls8m4HpfrT%2FA3uy16zojanysEOrH8yiFrq7C9zDqut7ABjqkAQlnP6lCbtPS2sW5Hnbr%2FI2VdT6zdHNSyALfAXeA8sipost7C%2FpK4o2YEJQXtIuPWWF3pMlBu6GZNv4667HI%2FerbnfbmW2ZENbL0lQlAvlznFSrr305g%2BHsnqujzKQkSvHQj%2F5Mp9l%2Fxro3l38bob7W7ryZCCPEDa1SENd2%2BOJmN5d9YdXItDiT3Gqu2Hpc7FBKdtj1M2nga4Ijvu%2BFMWOMEwGFT&X-Amz-Signature=f498aecf1dbfad219ea19cb9f7e5656d621945b2e1dcfc8b755708cf1fff1dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGKFDI25%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDKPqvaAeDIpOJcMfTFx2jur7pG9DbCpcwDMyQmhQqm9QIhAKmgOni6k9JQWwmKdeXBl4aE8yrJPMFhKuFGtTSTQdwGKv8DCBoQABoMNjM3NDIzMTgzODA1Igw7y8vwgEghZ0cfhgQq3AO%2F%2BLPPl2w%2Bnz68EzMevwTrh3oCCmRxATv2ycukvN33SmKAdtpm54JrVgGOxsPhMHTGPLkNcl3hdeEp8JN49dyrzg56sNjJNFfdXNFIGX3c5uYGs%2BQBaqlKlL1iL8UGsY9Ka0APLgngQIt1SNapYR2hstuiNXX%2F%2F9mE5io9fpuCg7BYu5nDDkwKSC%2FI1n9bZyMPXs7QkOcfove0%2FPDrYmHTVZMFAJeUOOsUH7LJ1rDvNdD9OxQwogCe9zKT8oh0fDnD69K2k2iP1xInCg5fcNK077z%2Fs2fHUs99B3YIPxpJ%2FgQQlP89CgBEjor4odw%2BssaSzJ2UgFrFO3IqgK%2Bs783qJghJ%2B2t20meOhctclOvcHk5bcJHIRyxD8aO3K4k2iQVskL31qACrE84j8AbW6Zf40NPiX99E1JI6NdpmfdU9y6o%2Fso%2BmjetftI0YlZhYI5oR8MlKkAfaYjyyr3Jj0QeObCYfsEbm5ErdcS56LiiwGONZA2tzpyD%2BI9PCHdpWRVLKl59aRYojYZQY31nr5e49Vp851JDfjr%2FqcEv3xsCA9Qk2YRcAUlOUab1k69zQNaHWlZ0jwD81MuUNNyeP%2Fvjhls8m4HpfrT%2FA3uy16zojanysEOrH8yiFrq7C9zDqut7ABjqkAQlnP6lCbtPS2sW5Hnbr%2FI2VdT6zdHNSyALfAXeA8sipost7C%2FpK4o2YEJQXtIuPWWF3pMlBu6GZNv4667HI%2FerbnfbmW2ZENbL0lQlAvlznFSrr305g%2BHsnqujzKQkSvHQj%2F5Mp9l%2Fxro3l38bob7W7ryZCCPEDa1SENd2%2BOJmN5d9YdXItDiT3Gqu2Hpc7FBKdtj1M2nga4Ijvu%2BFMWOMEwGFT&X-Amz-Signature=0e3f8b5b2d04e6737aa2d07535e1f4bf6d129aa548b3ebfc18c113dd24e5cdd1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
