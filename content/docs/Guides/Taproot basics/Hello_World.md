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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPFBSKS%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEuY0y%2F%2Bl3ar%2FRpIMpGuaTMDvS3A7B4Ka0S5F2lh4OY1AiEAsDuB%2Bv7mWxzhwF7YuKNTk91VfUsIWwfjSKVbLDpmb6AqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyrSVqOskqeB4PKNCrcAyC4X5oIckEG%2BDe1axMcGmjoyTdTiPVR6GnHgqSHHbWld4EhkMcmtx4OGr8ucS1CT3AsRlL%2BYWdIocVzKFlEeBxmENUA0cj9of7flTIpn5y07v45%2FFFgTaLhhIHV%2BZ8KQLRZDB%2Fkcd5r12CdqIFz2gKR4qhFGT7sjdiUovqdwkD5JkLocDN%2FcVb2hTjmaIiSEOYnS1bUMLcEb7LkFYCNPBh16nL%2BNVt5UylSFSqRFFj3laLz4BeJ93aPgbpEYXveogypGqeQmqxWyH9U9BXGKXAjuRqaVR4gZhxbGmbMDzB%2BBSTFMljFhQ3UpSbQabzJ7tmVE83CtfJJF8Q6xp4YRW54Kw7WTSEfL3Nq%2BlWPgqke%2Bj%2Bg8KKpKjoQX7ezlEN5Ma%2Bmt43eXBrzTSQR3vO1Mv2EFII8vWtHWZcIhTeYyXIuisOaVs8orOPsRvIpVc44sgBIBdIdE5gXfeKX1I6J0rrkj%2F53Rv2znmM0C4vwaLmXPxK89qJ1W2ZZc4IlCAZvE7%2B3eGwETnYceIX%2FrBleB6U%2FOyynooII8Wq3FK2IT97yn%2BCHQco9uHr71bkzK1ywfFhQJoS5mYVNwO%2F%2F4zxQpy1c4nr9SyrKVDFpBLDDXVJEo0mY55szaQ4RZobuMM%2Blrb8GOqUBHS63RtCcox5lZzbyPwN87KezB1dWvrELc1jwn3MD9DbrqmIWPSMDSZCweNM33Hk%2FkELHOLuzWUy3ew%2FnpPQHn01gjG%2FuJJIbZD7tcY8Bwuud6FlhqCsogGVxD1JLpnPQp2e1HGloXTV%2FbHXG2fe%2FqdaiLNXdtpREkTAcWTO226awbkh5JufJ0MY8PL2zlluFs1Ohw5nPQbo7XILkNUTiSwyASJUO&X-Amz-Signature=edc9ff0a14bb6764668937e0b0bcf2ac52d479b855c1997b7bc12ed10d4485c7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TPFBSKS%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEuY0y%2F%2Bl3ar%2FRpIMpGuaTMDvS3A7B4Ka0S5F2lh4OY1AiEAsDuB%2Bv7mWxzhwF7YuKNTk91VfUsIWwfjSKVbLDpmb6AqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyrSVqOskqeB4PKNCrcAyC4X5oIckEG%2BDe1axMcGmjoyTdTiPVR6GnHgqSHHbWld4EhkMcmtx4OGr8ucS1CT3AsRlL%2BYWdIocVzKFlEeBxmENUA0cj9of7flTIpn5y07v45%2FFFgTaLhhIHV%2BZ8KQLRZDB%2Fkcd5r12CdqIFz2gKR4qhFGT7sjdiUovqdwkD5JkLocDN%2FcVb2hTjmaIiSEOYnS1bUMLcEb7LkFYCNPBh16nL%2BNVt5UylSFSqRFFj3laLz4BeJ93aPgbpEYXveogypGqeQmqxWyH9U9BXGKXAjuRqaVR4gZhxbGmbMDzB%2BBSTFMljFhQ3UpSbQabzJ7tmVE83CtfJJF8Q6xp4YRW54Kw7WTSEfL3Nq%2BlWPgqke%2Bj%2Bg8KKpKjoQX7ezlEN5Ma%2Bmt43eXBrzTSQR3vO1Mv2EFII8vWtHWZcIhTeYyXIuisOaVs8orOPsRvIpVc44sgBIBdIdE5gXfeKX1I6J0rrkj%2F53Rv2znmM0C4vwaLmXPxK89qJ1W2ZZc4IlCAZvE7%2B3eGwETnYceIX%2FrBleB6U%2FOyynooII8Wq3FK2IT97yn%2BCHQco9uHr71bkzK1ywfFhQJoS5mYVNwO%2F%2F4zxQpy1c4nr9SyrKVDFpBLDDXVJEo0mY55szaQ4RZobuMM%2Blrb8GOqUBHS63RtCcox5lZzbyPwN87KezB1dWvrELc1jwn3MD9DbrqmIWPSMDSZCweNM33Hk%2FkELHOLuzWUy3ew%2FnpPQHn01gjG%2FuJJIbZD7tcY8Bwuud6FlhqCsogGVxD1JLpnPQp2e1HGloXTV%2FbHXG2fe%2FqdaiLNXdtpREkTAcWTO226awbkh5JufJ0MY8PL2zlluFs1Ohw5nPQbo7XILkNUTiSwyASJUO&X-Amz-Signature=846e086652985083d50fde221d57e54a9f2f2d2496ef67aea8b23388f36638e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
