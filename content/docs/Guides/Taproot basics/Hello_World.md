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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQK66ZR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFFKzVaBUsIW6WsXEWYJgRP3RU9FKZvJI6vlo1cjV%2Fa2AiB2FVuSpW760sANLKDqji1isngZW0rmjur2gHactIgeoyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMWrjF8Pd2IM4%2F%2BlyhKtwDrktsP7h%2FnTOlT7ud63AAV4TG5vWZm5kvfXuDaP4e%2FpTTdktE%2FaZxJrohqxIzqw3mOKKceKKd2lv62hy%2BlL213S5XlKGf%2FF6PY%2BuWgJG5C8jsRULQYdj0D1D5Ud3%2FPqQjZ5WCUGC2atSO7zd88fVGWeWOcg%2B5yIkoK%2FRVWqBSRAYEDVw%2FAzdsp3TYfGjnxQ6R3xF7ightDPbDvM9fI7z4Oe%2FX2mPvu2b1kuNZjuJ%2Bx55PZNSleg5wnU5lqK4f9oZk4fP8BhF20fPB4z44nl2COh65kOlwKUcyL52Vh0rE4GcC00YqaBsKuobFjXzAmc%2Biu3QU8Zh7iUsjMFfVsL%2BED3ic456YGIibfvI5PMUS5%2FD%2Fvue%2Fr%2B%2FkTK7%2BV6i00%2BxA0%2FCWUYnEM00mNhUTe7jt5pWz96JNQzffVmAzyNNL%2B6L8TyP7tlUiQr%2BnL7VP23tDaWz3vK%2FrYpEu1yZGs4BotvIwkV%2F1Omd0J2Vbfk089dn8OEU4traTe%2FUpCs6x7LYQz4wH6KdE7v2ZUQTlFHgyctVBJ6727gQUPikBrpfT3XeZZ%2BuGn5luGomP4n0fUTSSMMBytCL76mnj2JDRwSbte8lP1LkwEyo%2F4hg98DCocS0XPVU3TDftvkCxV3kwsOigwwY6pgF1mVnGR9%2BLeWP%2FDyWVxXCvxhuAJc7I7T9arhWQx%2B0aDyUdWL9iAA45IpWPXO645P5tyjxQQKvSplj37g0YgNBk%2Fjwpq71iPHduElIA2LHgDwErTl4GgrcXvzUnwk2xmPa3BFzV%2FzrNoS6E8kZU7A1HF0bCevGGY4BDPQbeY5VDbvcxQ1nworkqvJ3TzCNlbXpx6Lg2q7uuW3LeLBt5y17bAUW0HDgh&X-Amz-Signature=f815bb45ab82b78a7a6bfb0651fb195eca64bf8093ec882084142a948498a309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQK66ZR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFFKzVaBUsIW6WsXEWYJgRP3RU9FKZvJI6vlo1cjV%2Fa2AiB2FVuSpW760sANLKDqji1isngZW0rmjur2gHactIgeoyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMWrjF8Pd2IM4%2F%2BlyhKtwDrktsP7h%2FnTOlT7ud63AAV4TG5vWZm5kvfXuDaP4e%2FpTTdktE%2FaZxJrohqxIzqw3mOKKceKKd2lv62hy%2BlL213S5XlKGf%2FF6PY%2BuWgJG5C8jsRULQYdj0D1D5Ud3%2FPqQjZ5WCUGC2atSO7zd88fVGWeWOcg%2B5yIkoK%2FRVWqBSRAYEDVw%2FAzdsp3TYfGjnxQ6R3xF7ightDPbDvM9fI7z4Oe%2FX2mPvu2b1kuNZjuJ%2Bx55PZNSleg5wnU5lqK4f9oZk4fP8BhF20fPB4z44nl2COh65kOlwKUcyL52Vh0rE4GcC00YqaBsKuobFjXzAmc%2Biu3QU8Zh7iUsjMFfVsL%2BED3ic456YGIibfvI5PMUS5%2FD%2Fvue%2Fr%2B%2FkTK7%2BV6i00%2BxA0%2FCWUYnEM00mNhUTe7jt5pWz96JNQzffVmAzyNNL%2B6L8TyP7tlUiQr%2BnL7VP23tDaWz3vK%2FrYpEu1yZGs4BotvIwkV%2F1Omd0J2Vbfk089dn8OEU4traTe%2FUpCs6x7LYQz4wH6KdE7v2ZUQTlFHgyctVBJ6727gQUPikBrpfT3XeZZ%2BuGn5luGomP4n0fUTSSMMBytCL76mnj2JDRwSbte8lP1LkwEyo%2F4hg98DCocS0XPVU3TDftvkCxV3kwsOigwwY6pgF1mVnGR9%2BLeWP%2FDyWVxXCvxhuAJc7I7T9arhWQx%2B0aDyUdWL9iAA45IpWPXO645P5tyjxQQKvSplj37g0YgNBk%2Fjwpq71iPHduElIA2LHgDwErTl4GgrcXvzUnwk2xmPa3BFzV%2FzrNoS6E8kZU7A1HF0bCevGGY4BDPQbeY5VDbvcxQ1nworkqvJ3TzCNlbXpx6Lg2q7uuW3LeLBt5y17bAUW0HDgh&X-Amz-Signature=0bbaee894bd3747beedcd90136f59c120d58be927357cf03a88e8eeee4f03b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
