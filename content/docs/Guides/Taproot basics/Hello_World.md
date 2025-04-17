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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3M6TIOO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7brhtYcZQohfJh4CPyGvEk5kbxsp1Vg0XbRXXCaGbrQIhAOGGw4hqV0nVlhSJb8CuZFPzcZ8De2beCJ%2FU9GWbqONfKv8DCFUQABoMNjM3NDIzMTgzODA1IgwpGqksvDDkbT7FaPkq3ANWgQpHdSZH0R4EMg3X6mrLtGklsmgI6gbxmtQ%2FofC1sGhvGTQOuxYzUYi8o4Zyn%2F3MG7bmYOi9Pexu7lbPN3T%2FpX8Q2zzW%2Bfpdf9OvDAZLIky%2Bfy2sT4v5QXul5LSx2dZGVrtSRGb1vS%2BBuop9HyYzvy4ca2d6av3i%2FLcfiF0p%2Fi3DwW%2B3rmNCKcrW7gZfgI2%2FyTBpt8PpXv7xLQW3z7BmjXJaZQzTqxqmqDEdNUyCV3b%2FdE2yH0ZJJG1BQWvnbH4vj31QsYiMWlNmuCOfGql33oL6TAfObOmdcsZlKtOSq7hCl2j1qVlo3q1Eog%2BrI%2BJC0v2bh1c0jrAhKIXa%2BqietonvFhOjN3TpKMBPIt7A7HlojdZNMoxoqy6ih1Tyv3YXUiHnpCLAxx813xjyy2BF71Myxz7Rdrrtpi7bIW2mGeuRRbjSQEouiOt9kMPm5BT72Tt5rstkRiuc95aX1zLFgldaINRYHryUEJCo5MDhN%2B81FrLpuygZ%2B3ifW020JPzKLrI6IYF9A%2F2gs4wCobrAfFFxsuJgWZJtpZaC4qMXvocwNHM%2BuLrsmEph%2FofB0O10GSCbtCgMDSat8NCOBZ07J4Shl1NS83mXb4AJHvyjkH3gkSA7%2FO8tIJ4Q4TD%2F%2BoHABjqkAcFumsqVcjTl1Uz8z4aNrlLXpbaRj6sqUGBSKk50LTrJJmvf90wv8k%2B51QoztLFmogEoz%2Fo7o%2Bgr8uxebgGsAGh47i1FWXyxTWMzS0zslHLl2mnCjuT9Ys4sL2RCkY8wH9RlAhZawa00v7W6M%2Bu0v0zbqUj3lQIBt0RFPM3mwFmw1II2z6MScVy3%2BaLHsgCvy3iTnDWTQVe3uVzYLIONihwFzBsg&X-Amz-Signature=e94fc9cae95e45216fc4d478729dde63935cb0e834f261ea7904d0c86f1ba7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3M6TIOO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7brhtYcZQohfJh4CPyGvEk5kbxsp1Vg0XbRXXCaGbrQIhAOGGw4hqV0nVlhSJb8CuZFPzcZ8De2beCJ%2FU9GWbqONfKv8DCFUQABoMNjM3NDIzMTgzODA1IgwpGqksvDDkbT7FaPkq3ANWgQpHdSZH0R4EMg3X6mrLtGklsmgI6gbxmtQ%2FofC1sGhvGTQOuxYzUYi8o4Zyn%2F3MG7bmYOi9Pexu7lbPN3T%2FpX8Q2zzW%2Bfpdf9OvDAZLIky%2Bfy2sT4v5QXul5LSx2dZGVrtSRGb1vS%2BBuop9HyYzvy4ca2d6av3i%2FLcfiF0p%2Fi3DwW%2B3rmNCKcrW7gZfgI2%2FyTBpt8PpXv7xLQW3z7BmjXJaZQzTqxqmqDEdNUyCV3b%2FdE2yH0ZJJG1BQWvnbH4vj31QsYiMWlNmuCOfGql33oL6TAfObOmdcsZlKtOSq7hCl2j1qVlo3q1Eog%2BrI%2BJC0v2bh1c0jrAhKIXa%2BqietonvFhOjN3TpKMBPIt7A7HlojdZNMoxoqy6ih1Tyv3YXUiHnpCLAxx813xjyy2BF71Myxz7Rdrrtpi7bIW2mGeuRRbjSQEouiOt9kMPm5BT72Tt5rstkRiuc95aX1zLFgldaINRYHryUEJCo5MDhN%2B81FrLpuygZ%2B3ifW020JPzKLrI6IYF9A%2F2gs4wCobrAfFFxsuJgWZJtpZaC4qMXvocwNHM%2BuLrsmEph%2FofB0O10GSCbtCgMDSat8NCOBZ07J4Shl1NS83mXb4AJHvyjkH3gkSA7%2FO8tIJ4Q4TD%2F%2BoHABjqkAcFumsqVcjTl1Uz8z4aNrlLXpbaRj6sqUGBSKk50LTrJJmvf90wv8k%2B51QoztLFmogEoz%2Fo7o%2Bgr8uxebgGsAGh47i1FWXyxTWMzS0zslHLl2mnCjuT9Ys4sL2RCkY8wH9RlAhZawa00v7W6M%2Bu0v0zbqUj3lQIBt0RFPM3mwFmw1II2z6MScVy3%2BaLHsgCvy3iTnDWTQVe3uVzYLIONihwFzBsg&X-Amz-Signature=00622c54961a42dc711c36b1bf72924bac09daf429f04be1f208a0282756dc36&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
