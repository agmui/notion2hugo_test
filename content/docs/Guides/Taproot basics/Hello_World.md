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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGQ2FIT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCICNbMXclM%2Bj84Ch8yxYAhQka39YqJWglXBtnqCAja0OHAiBNA74TXHDUjch2kHgnc%2FRflsjDf7HoZCGC2dvjnQRdzyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMi042KLdbetiM0LSDKtwD5JyYogge0BcGTFf%2FF9RBL86PcCKrfwUd868dG6vdLRLuUCaqhhEew%2B0GvTUsar1YQKS2QOv3G%2Fa93t2uUfClzBqaUZHJ8EkwA8SmhsaENMskzAvF0QpwFbWApZrl2HQXubhTOc%2FsKBKN4qSgILfbwLAm4lM%2BbWbPP9xunY5TtzPfiqOtszbeMAtYJlSXXGqTrXdaacB0fC8GbvI5RFTFuadTInZU3WYZ79nLAJCyO6a7AM6C7lT%2BxR9IuIpe9F5aKb3EYFxFvOoUOhFP6IQpA4RwLMa%2BWeDN09O36SM%2FYNkYTmT%2F77TQWr1P%2Fw2d9KeSZ7VqkEN5MjY2TNCvsvPGRNzJWauyFHqcX9FIJdZSpIp%2FEDkG5akgEFyjDM%2FFAZ3fRsXDbrWiggWEMqJ8W2RGZ9mB36BPT1RKH7Ghb1Z%2FeKGGvzQZz7MZlszaWF7dxQJSObp8GHoox3Fj9D0NITkX5IE6w6AlLn%2B16GQjc6BWn%2FSGXE8MMCvP%2BtnLQF%2BXtWUPAccI0kbUDjjnxmizEeiSuqHiLa8bJBKlARLyJX45qLcS5Vxghe7OVtoNk%2By5cIsv3U9q2hxJjTExnnB9iEM3t%2BBISyMaW8tdzyzyIO8ES5vnnXB6Tv30zLPTLLgw1vf9wQY6pgGe6zs3fx%2BGl7lPxYQYj6YkjW617lGBvBaPQiHtVSYm8z5Ny38KKgnLFh9qi7wJBZB5Fk%2FbgKgl4YJ5MTloWUQygCxL6ynCnzmKnDuqpzRQVnSSwU0i9ZjUzPAKZ0E8CgCJEWfQRyXqd5F8pc76%2BQqqDhPJ8DByZmMBmj3hqqBGNo89qlrkRb2llpQbWxcl2%2B2eEBMzogH2o%2BCN3x2QsrTHp3Bd1Guo&X-Amz-Signature=c4c1dd85cb92b0d5c59a9142f61fb836b4a52c7a4492a51bc845d042a0ec3165&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXGQ2FIT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCICNbMXclM%2Bj84Ch8yxYAhQka39YqJWglXBtnqCAja0OHAiBNA74TXHDUjch2kHgnc%2FRflsjDf7HoZCGC2dvjnQRdzyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMi042KLdbetiM0LSDKtwD5JyYogge0BcGTFf%2FF9RBL86PcCKrfwUd868dG6vdLRLuUCaqhhEew%2B0GvTUsar1YQKS2QOv3G%2Fa93t2uUfClzBqaUZHJ8EkwA8SmhsaENMskzAvF0QpwFbWApZrl2HQXubhTOc%2FsKBKN4qSgILfbwLAm4lM%2BbWbPP9xunY5TtzPfiqOtszbeMAtYJlSXXGqTrXdaacB0fC8GbvI5RFTFuadTInZU3WYZ79nLAJCyO6a7AM6C7lT%2BxR9IuIpe9F5aKb3EYFxFvOoUOhFP6IQpA4RwLMa%2BWeDN09O36SM%2FYNkYTmT%2F77TQWr1P%2Fw2d9KeSZ7VqkEN5MjY2TNCvsvPGRNzJWauyFHqcX9FIJdZSpIp%2FEDkG5akgEFyjDM%2FFAZ3fRsXDbrWiggWEMqJ8W2RGZ9mB36BPT1RKH7Ghb1Z%2FeKGGvzQZz7MZlszaWF7dxQJSObp8GHoox3Fj9D0NITkX5IE6w6AlLn%2B16GQjc6BWn%2FSGXE8MMCvP%2BtnLQF%2BXtWUPAccI0kbUDjjnxmizEeiSuqHiLa8bJBKlARLyJX45qLcS5Vxghe7OVtoNk%2By5cIsv3U9q2hxJjTExnnB9iEM3t%2BBISyMaW8tdzyzyIO8ES5vnnXB6Tv30zLPTLLgw1vf9wQY6pgGe6zs3fx%2BGl7lPxYQYj6YkjW617lGBvBaPQiHtVSYm8z5Ny38KKgnLFh9qi7wJBZB5Fk%2FbgKgl4YJ5MTloWUQygCxL6ynCnzmKnDuqpzRQVnSSwU0i9ZjUzPAKZ0E8CgCJEWfQRyXqd5F8pc76%2BQqqDhPJ8DByZmMBmj3hqqBGNo89qlrkRb2llpQbWxcl2%2B2eEBMzogH2o%2BCN3x2QsrTHp3Bd1Guo&X-Amz-Signature=60038c83b0419d853035be545a42495fa68560354085e7612dd873c1124a1703&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
