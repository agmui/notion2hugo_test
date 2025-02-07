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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJVPAUU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFuxTUP%2F9zoejsICRKfKL1OcT5lgUw33XbAVg%2FMLPTzAAiBzLAdcvTHyz3imnjqDbP7Q7oum8IGBQZe9Bg%2Fj9Skljir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2F40n4b9pQVs9gx9LKtwDN17M9IKepbrxApDOH3bXTUEK4ef0M7rDwLifc7y%2B%2BH74KMT%2BAwG8it9UUmj6Ba0vhsStYa9BlbWmkrYNioQactHs%2FJtjZM3NBk%2BdQRLY3jEe0IO4mX8yyF652EYnfqCDICViv%2BO8BFRgVWX9RF5JB7p6tdb3BEeBKbdWVZzO4jkFT6PBtUOfml6sEBaS%2B4K5CGCfwChxa5VLCaylsETGoVEnnTSjFD46E4OYG6gR1MzB8iTM2RFJXIV88AYH7kZ1P07DuCH%2Fhir9zIebY506AqApoclNY1aYbgeUceljBg3iOgB2dpyuywDhfKPSbrbndFBRLCRqE%2BpF93bX9sNLGSxoKI%2BnGjgrUiOlNSOFIxl2a0W5Dg4u9ehu5dhdSIUNBzVaYSxfdTfSXSx73v8USDmmFgcUTl8L3h7zPhT%2BdzktEs8yt9YQEcvoB46BxZDDXs9OYvBxRlawhvojwQrIyeGkzfBGhlBa1eSdZVPCwdgkht6DvYIuIZGhNecCa1rHY5ZbW0pOn26hN1BhxOc9TIOrFN3n9HNv%2Fj481NQesmCeHfNgY9a5053lOlpO8T76Ew%2FE9vH7ivmabsS4RGFZRFlVZKNxs41Xg9ca6VNFhtv0VuYZ9eVV49sy%2FKQw1vqWvQY6pgGCefxrK5rvHwiMRpRKw4UdmUl8v6h7iLirn%2BMe3ubdaPVapDVKiufUTSFz8LaqqWqTXAz8Bw8Dm4Romt5syG%2FwKUbgPDVqtbRfY%2Byv0N%2FcYwuRksvgodx%2BA%2BRXYsFvfvIrMiOlFLMDgWN5Rx56KZVKkXTxqXDKo6%2FiPFiLG2EpaCpJCRs3mMWrW8Zrxc5bDPiogMAiUyDXfEhJKBXeSEpIQR%2FXQeYS&X-Amz-Signature=526258246697e9d04a1a7b1afd77362a532ba0cd8c1e08b38dda3f2b37ded71d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJVPAUU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFuxTUP%2F9zoejsICRKfKL1OcT5lgUw33XbAVg%2FMLPTzAAiBzLAdcvTHyz3imnjqDbP7Q7oum8IGBQZe9Bg%2Fj9Skljir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2F40n4b9pQVs9gx9LKtwDN17M9IKepbrxApDOH3bXTUEK4ef0M7rDwLifc7y%2B%2BH74KMT%2BAwG8it9UUmj6Ba0vhsStYa9BlbWmkrYNioQactHs%2FJtjZM3NBk%2BdQRLY3jEe0IO4mX8yyF652EYnfqCDICViv%2BO8BFRgVWX9RF5JB7p6tdb3BEeBKbdWVZzO4jkFT6PBtUOfml6sEBaS%2B4K5CGCfwChxa5VLCaylsETGoVEnnTSjFD46E4OYG6gR1MzB8iTM2RFJXIV88AYH7kZ1P07DuCH%2Fhir9zIebY506AqApoclNY1aYbgeUceljBg3iOgB2dpyuywDhfKPSbrbndFBRLCRqE%2BpF93bX9sNLGSxoKI%2BnGjgrUiOlNSOFIxl2a0W5Dg4u9ehu5dhdSIUNBzVaYSxfdTfSXSx73v8USDmmFgcUTl8L3h7zPhT%2BdzktEs8yt9YQEcvoB46BxZDDXs9OYvBxRlawhvojwQrIyeGkzfBGhlBa1eSdZVPCwdgkht6DvYIuIZGhNecCa1rHY5ZbW0pOn26hN1BhxOc9TIOrFN3n9HNv%2Fj481NQesmCeHfNgY9a5053lOlpO8T76Ew%2FE9vH7ivmabsS4RGFZRFlVZKNxs41Xg9ca6VNFhtv0VuYZ9eVV49sy%2FKQw1vqWvQY6pgGCefxrK5rvHwiMRpRKw4UdmUl8v6h7iLirn%2BMe3ubdaPVapDVKiufUTSFz8LaqqWqTXAz8Bw8Dm4Romt5syG%2FwKUbgPDVqtbRfY%2Byv0N%2FcYwuRksvgodx%2BA%2BRXYsFvfvIrMiOlFLMDgWN5Rx56KZVKkXTxqXDKo6%2FiPFiLG2EpaCpJCRs3mMWrW8Zrxc5bDPiogMAiUyDXfEhJKBXeSEpIQR%2FXQeYS&X-Amz-Signature=059b44ccccc48a97a4816c3374af36e01db0a93999c2cd7e3f7f71f907b6e2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
