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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WWKVWK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsHoICDbf1q7yWzArgNGab5Qkp0n%2BHHU7Jeah5JVn59AiEAuN0wJrytGvM3eRyT%2BeBGFy7VkKfi6rKAx7l2DYj0kSUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1HzNHLEIIJxfAhACrcA9jSaW%2BQTI9D1Ri1sUL1v352x6VsXbhy6nGqpUI7w5m5%2FuyUMJ51TRRYr9E%2Fm6XgXwOzig7pS2CiFYS3xTiw87KbountagB5%2FextFVsQVOyNk0QTH8isn3GVQm%2FhDSsES2aNTFwvDckshowalJoLoX7VnhHonl9yfSLoxqJlP%2F8MkS8Nz9h2kyXMYkaYw54bxaBe5ECLT9spBQLrUAnmml4jOWHf2CkqhKUHU2N9jdKXXctI0dFy6i2I%2FdTj7xCBxwD2gi%2FydPmb6fbnPEGtnD1qB%2B9tRVv2dEDWdIcno0N3uml6EUG%2FhdFM17BDAvlc4vnTDoSyIWV%2F5BWaQB7rlEjf4eF1ilEUvnP2rO%2FrCLe5jLTOEkAr95K3%2BvXIH5JNTblPebTWEr9pWf%2BsR%2BpWDioSwEe5Odzr46ebK5B6JIe12gLvsTTS2HRk7%2BO0uJYAK6t07g1Y3yF3AHB0iWeaAbNfTuN1kI4WBT4YFKu6%2FpMvqi0ug5Yn2u2oNt7RTXPwWwxmvtOibkPX%2Fkr2j9HjJZmxGcu7tIIkJoygCfAN9wkFrT1E7W5xbPXgmmfOqB%2FajsHG1SgP%2BIB%2FyR%2FJ9H3ALEVJbH7GStKE4hRlEk4HS44D2c1xcFP%2FY4yyz1b7MO3xpcQGOqUBPZ6xQBsJBcfcIBuXv3mTV6daLPWL%2BVY4VLMW6qGw8Qdp9Gb%2FEMlek4p0E%2BulfmCz4fQhwtxB3L0TQRkkH77JCmPZG5zzB%2FM%2FE5HFT69PcptGCuJ3IqJkO%2F6PdBzq5w3vNU74meIUfpK5S2GGukjV72OZgCIn5D67Zxu8ftTwdXpru7DFdgRGOmc9UtjK9tIejTX8NCXcgSE%2B6nS4CGyfS6Hwvy0c&X-Amz-Signature=d34a4d2d7617d13d37ce78496b26b9c467ab4f19bf2858d3645f2937bd94b023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WWKVWK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsHoICDbf1q7yWzArgNGab5Qkp0n%2BHHU7Jeah5JVn59AiEAuN0wJrytGvM3eRyT%2BeBGFy7VkKfi6rKAx7l2DYj0kSUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1HzNHLEIIJxfAhACrcA9jSaW%2BQTI9D1Ri1sUL1v352x6VsXbhy6nGqpUI7w5m5%2FuyUMJ51TRRYr9E%2Fm6XgXwOzig7pS2CiFYS3xTiw87KbountagB5%2FextFVsQVOyNk0QTH8isn3GVQm%2FhDSsES2aNTFwvDckshowalJoLoX7VnhHonl9yfSLoxqJlP%2F8MkS8Nz9h2kyXMYkaYw54bxaBe5ECLT9spBQLrUAnmml4jOWHf2CkqhKUHU2N9jdKXXctI0dFy6i2I%2FdTj7xCBxwD2gi%2FydPmb6fbnPEGtnD1qB%2B9tRVv2dEDWdIcno0N3uml6EUG%2FhdFM17BDAvlc4vnTDoSyIWV%2F5BWaQB7rlEjf4eF1ilEUvnP2rO%2FrCLe5jLTOEkAr95K3%2BvXIH5JNTblPebTWEr9pWf%2BsR%2BpWDioSwEe5Odzr46ebK5B6JIe12gLvsTTS2HRk7%2BO0uJYAK6t07g1Y3yF3AHB0iWeaAbNfTuN1kI4WBT4YFKu6%2FpMvqi0ug5Yn2u2oNt7RTXPwWwxmvtOibkPX%2Fkr2j9HjJZmxGcu7tIIkJoygCfAN9wkFrT1E7W5xbPXgmmfOqB%2FajsHG1SgP%2BIB%2FyR%2FJ9H3ALEVJbH7GStKE4hRlEk4HS44D2c1xcFP%2FY4yyz1b7MO3xpcQGOqUBPZ6xQBsJBcfcIBuXv3mTV6daLPWL%2BVY4VLMW6qGw8Qdp9Gb%2FEMlek4p0E%2BulfmCz4fQhwtxB3L0TQRkkH77JCmPZG5zzB%2FM%2FE5HFT69PcptGCuJ3IqJkO%2F6PdBzq5w3vNU74meIUfpK5S2GGukjV72OZgCIn5D67Zxu8ftTwdXpru7DFdgRGOmc9UtjK9tIejTX8NCXcgSE%2B6nS4CGyfS6Hwvy0c&X-Amz-Signature=51c8069292059c2599e65e1b84568aa72afe8c186a2cf8ef2308271622749c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
