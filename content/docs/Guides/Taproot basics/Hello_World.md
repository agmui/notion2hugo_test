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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HTAHLUA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICujQogIMV8VtjVg0Cdpw6UVvqEeNJe%2FBh1AvEueBbNZAiAQzeDamEcVdaZDnbfrHwBpyuPwAt83OO9VZ3jVl2997SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM0PHnuAedwrHthBYKtwDvtW09ES4N9B7EmrNvjbtukzwKRfES56ZQ5nYaD5WPXSissyuYNRkpslWZEokDanGFzQGhQd5shjqPfriLUviFGVBBfFEy9kmn18Or8ymjMvk1Yv26Aod4aMBTVWidSfG6Z3I59%2FhWYLBTVy9ZonZF9VaEw7xOpiFTETqgFnCy0hGioRPY%2B4l4755%2B9DWWL6FSxPRlxzBNvReHNyNW8etCbuvETZNZqyt%2By7mGeC%2FwQfWmAjNjIWp8RjDwnQImtfnD88eozwKeu61kemKpmSZjNrvH1UzcfiJ5Fhk2oOsXQDzPv5pLNmd2Xv2khkoo5Kie35cS3lkK%2FwT3DqHrIgqLWScSF%2F0YyTRk39sqipY5etOeXaFiVxzWO5%2Fxa72CEnCWCtEy7v5bqWyKEp5LdOsFCaCnDVxl2qNzlJfHXE93AfJoxS%2Fdruk%2Fj9tPdGcvuX8Lf8SsIGiYkJIXxAcSHIvEQOZDDMrWQI4rQYIRE4tgUg5CYgBV%2Ff45jhC3uY9Ifqr6rZYuc5D2vJo%2FQFQ4r07twoHb964CG7ctOZwFbLeHL5JHT0HWLkXrK223tyXTZjB4as8F18pHmAI89N4egxboiL0xUkyoKuVE07G%2FCdKkekkX0H%2B2zRgUmps%2FmQw6vvLwgY6pgH7fGWcA12gKNbTQx%2BAf%2F7INzYMJ30yn7Pb8v5qHmT8%2FTr47wYGG3GqKXMnyd4oqUSVfZUWaiRjNgZdj%2Fx9ay%2FF4jrAjA2c%2F%2BYw4G%2F1dxPjGkaVEwJe6gme8LK%2BJNH%2B7wIjRVvzo6sMNBJFdICFYiOWtYy2mm%2BqImu00btHfXnvxJWAalO3gxqARSWhojnhIntF9i3bsz2agY4MHp06aVulHXqkSmXb&X-Amz-Signature=d26841426c41ebd224d4edf78dab64e8fd1d519312e8beeec7c8a769edf6fcb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HTAHLUA%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICujQogIMV8VtjVg0Cdpw6UVvqEeNJe%2FBh1AvEueBbNZAiAQzeDamEcVdaZDnbfrHwBpyuPwAt83OO9VZ3jVl2997SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM0PHnuAedwrHthBYKtwDvtW09ES4N9B7EmrNvjbtukzwKRfES56ZQ5nYaD5WPXSissyuYNRkpslWZEokDanGFzQGhQd5shjqPfriLUviFGVBBfFEy9kmn18Or8ymjMvk1Yv26Aod4aMBTVWidSfG6Z3I59%2FhWYLBTVy9ZonZF9VaEw7xOpiFTETqgFnCy0hGioRPY%2B4l4755%2B9DWWL6FSxPRlxzBNvReHNyNW8etCbuvETZNZqyt%2By7mGeC%2FwQfWmAjNjIWp8RjDwnQImtfnD88eozwKeu61kemKpmSZjNrvH1UzcfiJ5Fhk2oOsXQDzPv5pLNmd2Xv2khkoo5Kie35cS3lkK%2FwT3DqHrIgqLWScSF%2F0YyTRk39sqipY5etOeXaFiVxzWO5%2Fxa72CEnCWCtEy7v5bqWyKEp5LdOsFCaCnDVxl2qNzlJfHXE93AfJoxS%2Fdruk%2Fj9tPdGcvuX8Lf8SsIGiYkJIXxAcSHIvEQOZDDMrWQI4rQYIRE4tgUg5CYgBV%2Ff45jhC3uY9Ifqr6rZYuc5D2vJo%2FQFQ4r07twoHb964CG7ctOZwFbLeHL5JHT0HWLkXrK223tyXTZjB4as8F18pHmAI89N4egxboiL0xUkyoKuVE07G%2FCdKkekkX0H%2B2zRgUmps%2FmQw6vvLwgY6pgH7fGWcA12gKNbTQx%2BAf%2F7INzYMJ30yn7Pb8v5qHmT8%2FTr47wYGG3GqKXMnyd4oqUSVfZUWaiRjNgZdj%2Fx9ay%2FF4jrAjA2c%2F%2BYw4G%2F1dxPjGkaVEwJe6gme8LK%2BJNH%2B7wIjRVvzo6sMNBJFdICFYiOWtYy2mm%2BqImu00btHfXnvxJWAalO3gxqARSWhojnhIntF9i3bsz2agY4MHp06aVulHXqkSmXb&X-Amz-Signature=ab996fd76a5a4270dd79cc46b8da4f43025f4e65d1eff9ce630c255ab38f2648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
