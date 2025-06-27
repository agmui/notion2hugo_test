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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYJDEHLD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIH13l8LOBKRRy%2FZZsm%2FquTPRop6odN6T3Yy6hgT2I%2F1hAiEA6rBFQZBc72cHp4nzWPSQpmV%2FG86nffp48TPODr9GMV8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAi3X8B7PUkuSXNKTCrcA4Lsmwg870P2z4OukT2fpIQnsOF%2BiWbwjC8efnqnhLZDSqgg3hdSUfVwV59X00iFsaGbQAjwI0AkGuq%2Fcze2iehSHCfukqHCNvB3jbqVMscvj5LaVtS3NE8AZSnJ8w%2BC8HHyjAyj%2FoFzL8h5Jlg06fD74Itb9QSvymxNYCLvcr%2BlC7OBjS71Mal4GNIcP2u4jeWXi1CNstQQXDMbDzaL88ZTR2kwNAF%2BFyvzYkCogYJW1NNQ9zLbPWpXy95Wt0AkSTJNY7J7x9iYaGizh17bgeAkDvnqSc7Md5PrqVeluOuNuLfs0aGQ8KQuzsdjmmT69KQbwG87k3%2BEvehLgIB9S0WfcggGn2eiwjTRxIS8w58BvH7lNsvIdasPAgplpvRkwF36dLapicLm%2Bj2VuIplP%2Bfcn7GdPqCtmnDgqXs1yv4%2FMCWKUGab2uUUgSoNJMYbYC%2Byg6jKWg0%2BRKDsnAAHqqz%2FbWqiUgkpN9zWhjT2Lb%2B67ZnecGZo4s%2BUcBh%2BpkuoLpHw3HWZNkCcEiX3yKKfQbGBu79ItKPDqSGZc4fPJoummHu8kpOvgngQPP35ANkVgCySPpL%2FohRmHbae0Snt1tUv6N1JcPz46HXPFHHk2pP3ft%2B7pqmVp5mkeiM%2BMJCg%2BMIGOqUBr2uHdLJ5VstuvR9ndIfwAYj3kHRgVWEHaYa5EGu89No6jbczfztdlPZJUH5rZQZDuVkW4beNil5Qs22GeEIOiLMPxmg%2FdpR4UIeQB%2FM%2BWZeqUKPyyWep1X4Xpw8mNHt3WF7yBW7m0PTDwXuf7DSAOd2Afzdw3xGv2Z6WQA4hecdmQxIfvQnB27BsyZ2GK6YaMIEckRBze23d%2FJwiu3ksVoXmFz9I&X-Amz-Signature=1fb664c783c1fd8960a53a90e454d1f563d00eb2e277e8c7491a0b26426297bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYJDEHLD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIH13l8LOBKRRy%2FZZsm%2FquTPRop6odN6T3Yy6hgT2I%2F1hAiEA6rBFQZBc72cHp4nzWPSQpmV%2FG86nffp48TPODr9GMV8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAi3X8B7PUkuSXNKTCrcA4Lsmwg870P2z4OukT2fpIQnsOF%2BiWbwjC8efnqnhLZDSqgg3hdSUfVwV59X00iFsaGbQAjwI0AkGuq%2Fcze2iehSHCfukqHCNvB3jbqVMscvj5LaVtS3NE8AZSnJ8w%2BC8HHyjAyj%2FoFzL8h5Jlg06fD74Itb9QSvymxNYCLvcr%2BlC7OBjS71Mal4GNIcP2u4jeWXi1CNstQQXDMbDzaL88ZTR2kwNAF%2BFyvzYkCogYJW1NNQ9zLbPWpXy95Wt0AkSTJNY7J7x9iYaGizh17bgeAkDvnqSc7Md5PrqVeluOuNuLfs0aGQ8KQuzsdjmmT69KQbwG87k3%2BEvehLgIB9S0WfcggGn2eiwjTRxIS8w58BvH7lNsvIdasPAgplpvRkwF36dLapicLm%2Bj2VuIplP%2Bfcn7GdPqCtmnDgqXs1yv4%2FMCWKUGab2uUUgSoNJMYbYC%2Byg6jKWg0%2BRKDsnAAHqqz%2FbWqiUgkpN9zWhjT2Lb%2B67ZnecGZo4s%2BUcBh%2BpkuoLpHw3HWZNkCcEiX3yKKfQbGBu79ItKPDqSGZc4fPJoummHu8kpOvgngQPP35ANkVgCySPpL%2FohRmHbae0Snt1tUv6N1JcPz46HXPFHHk2pP3ft%2B7pqmVp5mkeiM%2BMJCg%2BMIGOqUBr2uHdLJ5VstuvR9ndIfwAYj3kHRgVWEHaYa5EGu89No6jbczfztdlPZJUH5rZQZDuVkW4beNil5Qs22GeEIOiLMPxmg%2FdpR4UIeQB%2FM%2BWZeqUKPyyWep1X4Xpw8mNHt3WF7yBW7m0PTDwXuf7DSAOd2Afzdw3xGv2Z6WQA4hecdmQxIfvQnB27BsyZ2GK6YaMIEckRBze23d%2FJwiu3ksVoXmFz9I&X-Amz-Signature=78f59054db63a27e3a3d358ac1d26d47d1a5ac40c48771ff79fce5dc3ef3f5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
