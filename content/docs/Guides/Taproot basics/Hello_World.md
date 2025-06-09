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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQZ6BN4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW87N7fovznuKt8o9quqP%2BrZN2jdTdsDuDU0xgaEubAiEA7wKZfy5NO2rE2iFYyJmchwe9iZnsWbXs4b7g24Frm5EqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxsk85ZoUeWoKsM%2FSrcA39U%2B%2BnYY71FAf9ifgZ9iVgoscFRZ%2BSGLugqZRbwhUX8g%2BZx7L5WGm%2FhNZ22Z%2FFRccVRt3DAVZ2LEYScZiOIZ8UFxcS2akS7tf46U1YgmcgGvUHZWSHrRH28nZpCV0LoXrey2p0RW3wNOLR90labWcjfBGYYD7sBCnEUFgrymlpM4AD9EUu90%2B6eusi7jsA5fG82iW3SRa5ZQ1n3dPHAUE7WKJDRc2Z3Ursp%2F3RhY6nLuMN6x3JAXAVzESbqsxLHZMdx2H9ob5AYHLdqNQKbj4d6BjxoyCUbP3T6JTdTswvxbzwIqQRBn3XnWODB7ig25AkjkjZHaW3j%2BKjiPnpaTrJ%2Fb6BLrOglRe20yU%2F9Rd45z46pKR1MVTsb%2BxP7lzjf88xVndG8jIKKV8X2JsPteQcYftluHVBHHwL5nrWxiIrmebeTKnK7GxjLR3xzzr1LdpD0KJIq9%2BPrvC0a0Iaxyhn3rxiIXheWm%2FORCn9g2kYxMMI7TCVMu42WXU7N0EsjHgnnlP6izeyuhowme2PDchVglKsMh3qbxiS6HtQ%2Bzz3Z6P1HzmEKEgHHBtLxLdEXlELwhVkGA3hnQgA%2BrRrcnuBPubQfkA7j68VqRwyzBgxXXpkI%2FQI2zpNpvHS%2BMMjumMIGOqUBEuRnZCxRZ11KQGawDjUQBEO4dAdH1SaNzrwh0jwuQpgL%2Fg0FfDzjd9PjyCKWKYoOASD0Wg05aE2x9NFeYQ0SaUu1gk3gF5k2BLCqVhctscn3Pxb2Setn688hmsu%2BSMUzwaRKZO98lHtUnw9RJfT3XNLbYN1kpzEEv9pTCyf1msdnFAYCyVTskr9ifZawBBozOxsV5DUnGMhlXD7RqDac5trx%2F%2Bg8&X-Amz-Signature=5f62a7be4acf9db81e81ae352df616761f64e79a57330d1c88f3fa787e78f64b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQZ6BN4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW87N7fovznuKt8o9quqP%2BrZN2jdTdsDuDU0xgaEubAiEA7wKZfy5NO2rE2iFYyJmchwe9iZnsWbXs4b7g24Frm5EqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxsk85ZoUeWoKsM%2FSrcA39U%2B%2BnYY71FAf9ifgZ9iVgoscFRZ%2BSGLugqZRbwhUX8g%2BZx7L5WGm%2FhNZ22Z%2FFRccVRt3DAVZ2LEYScZiOIZ8UFxcS2akS7tf46U1YgmcgGvUHZWSHrRH28nZpCV0LoXrey2p0RW3wNOLR90labWcjfBGYYD7sBCnEUFgrymlpM4AD9EUu90%2B6eusi7jsA5fG82iW3SRa5ZQ1n3dPHAUE7WKJDRc2Z3Ursp%2F3RhY6nLuMN6x3JAXAVzESbqsxLHZMdx2H9ob5AYHLdqNQKbj4d6BjxoyCUbP3T6JTdTswvxbzwIqQRBn3XnWODB7ig25AkjkjZHaW3j%2BKjiPnpaTrJ%2Fb6BLrOglRe20yU%2F9Rd45z46pKR1MVTsb%2BxP7lzjf88xVndG8jIKKV8X2JsPteQcYftluHVBHHwL5nrWxiIrmebeTKnK7GxjLR3xzzr1LdpD0KJIq9%2BPrvC0a0Iaxyhn3rxiIXheWm%2FORCn9g2kYxMMI7TCVMu42WXU7N0EsjHgnnlP6izeyuhowme2PDchVglKsMh3qbxiS6HtQ%2Bzz3Z6P1HzmEKEgHHBtLxLdEXlELwhVkGA3hnQgA%2BrRrcnuBPubQfkA7j68VqRwyzBgxXXpkI%2FQI2zpNpvHS%2BMMjumMIGOqUBEuRnZCxRZ11KQGawDjUQBEO4dAdH1SaNzrwh0jwuQpgL%2Fg0FfDzjd9PjyCKWKYoOASD0Wg05aE2x9NFeYQ0SaUu1gk3gF5k2BLCqVhctscn3Pxb2Setn688hmsu%2BSMUzwaRKZO98lHtUnw9RJfT3XNLbYN1kpzEEv9pTCyf1msdnFAYCyVTskr9ifZawBBozOxsV5DUnGMhlXD7RqDac5trx%2F%2Bg8&X-Amz-Signature=d0cc8283ad94d2ec4a373a1670f208e8967a4fdf0d470c3b3133140ec5e2d238&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
