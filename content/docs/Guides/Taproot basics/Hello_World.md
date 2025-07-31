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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PN75V3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJwHi9lM0CxLUO8PdgV60%2FHRKB5145dtJFk%2BNoeg98dAiB2T6UiOoqpD%2B7C2YZx89tbRibKP0BBep3qBg7Q1ltQoiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMej20rXA5CRxdLsAhKtwDMgt%2FN3GZp4AmbKNH8DxuEzL1QC4KBxVXWM3vpJjd66OeQVJxjhpeyAvGHJnHf8gVPGGfmORXaX5PF845uH0YlehjyQ7nHlqGG3%2F%2BWWV0tTnjUGrJEmxbWCNtq%2F4fQexhBaKl2RxILKMlmfXs2obgJqtJd7R6%2Brw%2F23tPkUTKSkB1YURk%2Fxsae6QP5OFIQraU%2F4T1NaoQi7qJ7SUe7%2F4%2FIjxbf3eeExmV3YmFiczAqo7NnFxCSjMEs%2BX7KZjupiwN9nimFqcKR3UiJjyx1naH6sC%2BKuhlYDRjOZtVYoU%2B1MpsU%2FEnPAVJUa39W0wwQPyk75jycAd30rly9xRIBDOIl0J1D8NH7Jjm7Wj%2B1XVcZVOR6S5y2qBvGB3e%2BfobTEzZXROBZxoiIk7FoeFuYdxNVvOChIJSzrB45nzPVoKTT6YjTrc3yvZTZGAKWpC53K%2FoZ1R7G0MsR5TpI1ctmV64Gb292jI9pabMmZFYiqNbWelVj8uTIb7i4rT9vaqb%2B23iseiK7E686XKO7yLX1%2FiUvPqU%2F7frctZhmwarR9%2FjmhGTmGtjq6QYFiihv28x7lmMNIdANTPF%2BzS3rsQYVXRk0snstBi57PwsBLO59dExxKkBuunlbtsg81MYwcEw1%2FWrxAY6pgHI7Z5BnoWGnJXv3IiEnHNjdVhp0od1yUT03b5SFlEwn%2BaFB9erURQCZ%2BjDThICMkcS3kBCPCnYBrpeBnaXf%2BAiKMwrox%2BZBvp9xSknlmzZgyHNcUkDNPFkHNNjpUbgxIPBsiA0IROZckAA6fOzDBKib0se94eObOUtgDjitbNKBAz9tyPa5fCC0PzNoUyQAKQPCArepzNFN5o5DIB4g1T1uYf%2B2FWo&X-Amz-Signature=22ddbb789dca62353f543c65104336508594de39f850dc0be5a6ef24df802d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PN75V3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJwHi9lM0CxLUO8PdgV60%2FHRKB5145dtJFk%2BNoeg98dAiB2T6UiOoqpD%2B7C2YZx89tbRibKP0BBep3qBg7Q1ltQoiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMej20rXA5CRxdLsAhKtwDMgt%2FN3GZp4AmbKNH8DxuEzL1QC4KBxVXWM3vpJjd66OeQVJxjhpeyAvGHJnHf8gVPGGfmORXaX5PF845uH0YlehjyQ7nHlqGG3%2F%2BWWV0tTnjUGrJEmxbWCNtq%2F4fQexhBaKl2RxILKMlmfXs2obgJqtJd7R6%2Brw%2F23tPkUTKSkB1YURk%2Fxsae6QP5OFIQraU%2F4T1NaoQi7qJ7SUe7%2F4%2FIjxbf3eeExmV3YmFiczAqo7NnFxCSjMEs%2BX7KZjupiwN9nimFqcKR3UiJjyx1naH6sC%2BKuhlYDRjOZtVYoU%2B1MpsU%2FEnPAVJUa39W0wwQPyk75jycAd30rly9xRIBDOIl0J1D8NH7Jjm7Wj%2B1XVcZVOR6S5y2qBvGB3e%2BfobTEzZXROBZxoiIk7FoeFuYdxNVvOChIJSzrB45nzPVoKTT6YjTrc3yvZTZGAKWpC53K%2FoZ1R7G0MsR5TpI1ctmV64Gb292jI9pabMmZFYiqNbWelVj8uTIb7i4rT9vaqb%2B23iseiK7E686XKO7yLX1%2FiUvPqU%2F7frctZhmwarR9%2FjmhGTmGtjq6QYFiihv28x7lmMNIdANTPF%2BzS3rsQYVXRk0snstBi57PwsBLO59dExxKkBuunlbtsg81MYwcEw1%2FWrxAY6pgHI7Z5BnoWGnJXv3IiEnHNjdVhp0od1yUT03b5SFlEwn%2BaFB9erURQCZ%2BjDThICMkcS3kBCPCnYBrpeBnaXf%2BAiKMwrox%2BZBvp9xSknlmzZgyHNcUkDNPFkHNNjpUbgxIPBsiA0IROZckAA6fOzDBKib0se94eObOUtgDjitbNKBAz9tyPa5fCC0PzNoUyQAKQPCArepzNFN5o5DIB4g1T1uYf%2B2FWo&X-Amz-Signature=69bc13cc7b651004e1e8e9d73260b8e64b7951ece98c71e59352f471c7899e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
