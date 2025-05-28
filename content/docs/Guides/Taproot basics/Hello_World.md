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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZU7ADRO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8z7nktiDthTXT2uEtYMf7jP7ACK4M4%2FEb3ZIn11lshwIhANJ3527IlDX7B1la0Q6Pyz8dd%2FBY%2F2AKNKSxjwieH5tWKv8DCHgQABoMNjM3NDIzMTgzODA1IgwA7%2BRim9kzNABQzwwq3AMJgNjOW0rIYoOliemXeuZD%2BFRN8RAxZJ9lhn7sBEEI1lE3eMJfbKJPQT6jmd5hwozO3hFMOdZ7p3%2FvlxJ2MLXmhh%2FIvhkv%2BuXJWiy4cdnOLVu05eYwjwRHVYBM2Ca2lM%2BhpL%2FswMceP2Ii5OkIJJrEqo99mNdU7E6wDB1X61CziIxygub%2FcFueZrT%2FufFf4f9xrow5L4Yv%2FgL%2FkSm7piZj9%2F9KkDStmCTtHns%2BlitvG7If7y1mEEbarkr1hA8v6UWBkE92E3k7D1zALKFOZ5my7%2Bd8PUlj%2FLs0GHFKu9gD5Df8gonbLgQpBAJTNJK4NeCEdPsBkOA%2FPtw%2Fa8YkgrUryiBjTQboAkjk1OauWRAPkZfzTMlQm%2FTeQOOsVunltBkl%2F0x8WR%2FB6xlq4NsYuIhES3esOQOcZIE4K2mqhevRpt7sazV0C5GtFGvS2SAd4hxE7J2fWH5YrLYnJkSaXQRiRGewbzysbtxaECjgtEjJurecHyJmgFlSwWTKwj32WFcbOM9r1o%2FrImKs3N7eORBg8MoooJ9vRCwS1zQ5ZMkquvxUUiJxfPmAanwHNbGlkGpWJWvfFbcoODRi8xdr%2BfHJAmjtz%2Fi4ckG8TGT7g0ylKoTSpYuX9CtzrfztWjDixdzBBjqkAW6RpV9En1%2BVI3N74n35ew0jGCE5Esd3vzaeISR8DCwRokM1IpZaSFK9CNa6BKYb8mziO%2Fjl5k6g%2BZrEfdZQjpgcIrXYhuNI8HBXg9HTwd7QGd4hergMwNpqJDlgdjsxz6mnpFwFo9kXj019IPd3E85fID8YzAvM3bCMJDCRBCLNV3Dj519REuRgSED4dkbVoWnmHKqy3mZGnYItZKd8MGXSsKdm&X-Amz-Signature=0452fb883d647b6f970efca6b40a64fef0dc2fd5ef156fa5c71039384d94fd85&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZU7ADRO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8z7nktiDthTXT2uEtYMf7jP7ACK4M4%2FEb3ZIn11lshwIhANJ3527IlDX7B1la0Q6Pyz8dd%2FBY%2F2AKNKSxjwieH5tWKv8DCHgQABoMNjM3NDIzMTgzODA1IgwA7%2BRim9kzNABQzwwq3AMJgNjOW0rIYoOliemXeuZD%2BFRN8RAxZJ9lhn7sBEEI1lE3eMJfbKJPQT6jmd5hwozO3hFMOdZ7p3%2FvlxJ2MLXmhh%2FIvhkv%2BuXJWiy4cdnOLVu05eYwjwRHVYBM2Ca2lM%2BhpL%2FswMceP2Ii5OkIJJrEqo99mNdU7E6wDB1X61CziIxygub%2FcFueZrT%2FufFf4f9xrow5L4Yv%2FgL%2FkSm7piZj9%2F9KkDStmCTtHns%2BlitvG7If7y1mEEbarkr1hA8v6UWBkE92E3k7D1zALKFOZ5my7%2Bd8PUlj%2FLs0GHFKu9gD5Df8gonbLgQpBAJTNJK4NeCEdPsBkOA%2FPtw%2Fa8YkgrUryiBjTQboAkjk1OauWRAPkZfzTMlQm%2FTeQOOsVunltBkl%2F0x8WR%2FB6xlq4NsYuIhES3esOQOcZIE4K2mqhevRpt7sazV0C5GtFGvS2SAd4hxE7J2fWH5YrLYnJkSaXQRiRGewbzysbtxaECjgtEjJurecHyJmgFlSwWTKwj32WFcbOM9r1o%2FrImKs3N7eORBg8MoooJ9vRCwS1zQ5ZMkquvxUUiJxfPmAanwHNbGlkGpWJWvfFbcoODRi8xdr%2BfHJAmjtz%2Fi4ckG8TGT7g0ylKoTSpYuX9CtzrfztWjDixdzBBjqkAW6RpV9En1%2BVI3N74n35ew0jGCE5Esd3vzaeISR8DCwRokM1IpZaSFK9CNa6BKYb8mziO%2Fjl5k6g%2BZrEfdZQjpgcIrXYhuNI8HBXg9HTwd7QGd4hergMwNpqJDlgdjsxz6mnpFwFo9kXj019IPd3E85fID8YzAvM3bCMJDCRBCLNV3Dj519REuRgSED4dkbVoWnmHKqy3mZGnYItZKd8MGXSsKdm&X-Amz-Signature=6fc4c50583b20f3246ea6f587bc71ee9056a54444b28233d29a84178b6adefa1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
