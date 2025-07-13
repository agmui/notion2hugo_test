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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXL7L3NW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUwbDcyZepH6UN9tYooNwj5AfrV0d6jxFUno9tDXXkCQIhAPGabzLriy9OLDcg5uJ06Xl7H8HPhtzqhMviHERmySGHKv8DCBgQABoMNjM3NDIzMTgzODA1IgyS6wuYraxlj6BavVIq3APCRT2X8D8JB6z%2FXZeVI4VNLj371NOM0VTz3SN3ZZ9LJDE0EmQHuJH0A9T35ulxRNr0PPji19PaMkzsfwqtr%2FddlPHsQ9OwmNqdKPnad2k0dszqnjBKxcB%2FgYuTPxTaTfnI4i%2Bdk%2B2ZUVx053tbREAY%2FBWZnOHenQMqa8FCFVvYBbghJFlQ2ODc%2B4U0QRbrKY4s%2FUtF1dmaolmazlxlHMDAKpTlBkLnnipbp7i4lpT3N0WxEvsScp6KXE8P13oPw5shJ7c76UPjznCobT83ntUMqYBBGhjSHLbxutAgFnN8jxUa3qLqyzLGY47Qc8ocep7RyWRD8JRkjHSXGdGveaVlrenKhCxkebgraZkNj1%2FRBbVKn688C31xB%2FiSQfd%2BT2BpLf8jxkWOp%2Fl6ohcynazdAEZuLzoQ7I%2BsCf1NCWst2HAWzjp0V%2FvHCUTOgbeOzXrYGirS4zIbVtqozpm1DCmd%2FH1FVAwHApVk3q5wZt7B1gZamlwPsRZyZ8QrAF5O1nff7eUME6ZvHXa%2B%2FpkzhUV2LlP79U1eJkdX%2Fd%2F0v0rv74RiTYpjWyjTK5NwoBSfICz5R0TM5JaxgQZb2OQzgWAs01CHEbSy9oN4O3aPlQzlEdbmMWjU1yjV%2F6ODDzDKls%2FDBjqkAR6web%2BRMtTPteEl3eK2EKlYWQIu3%2BliMnwDrr3irNP3QIdOOlrS5NdWwZNrZFguZnyGOiBqXeOWuAEsBLu0C4GK8m4nR11Pwra6Z3boIf5n6sGJa9FotBTO8uGzz3fTHeOMiBv9t0xmPKXaQPf%2B78vGRA3PpUxTeWGIB56yM90HS6RNTRIqn2NoowSn5L2bLP6%2By%2BJYoDXW0rRjKcpRNzQexq0y&X-Amz-Signature=9475bbe3e730e85ed8a1f6aa0886a9dd54987b32f3da087e7f5802eb172030d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXL7L3NW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUwbDcyZepH6UN9tYooNwj5AfrV0d6jxFUno9tDXXkCQIhAPGabzLriy9OLDcg5uJ06Xl7H8HPhtzqhMviHERmySGHKv8DCBgQABoMNjM3NDIzMTgzODA1IgyS6wuYraxlj6BavVIq3APCRT2X8D8JB6z%2FXZeVI4VNLj371NOM0VTz3SN3ZZ9LJDE0EmQHuJH0A9T35ulxRNr0PPji19PaMkzsfwqtr%2FddlPHsQ9OwmNqdKPnad2k0dszqnjBKxcB%2FgYuTPxTaTfnI4i%2Bdk%2B2ZUVx053tbREAY%2FBWZnOHenQMqa8FCFVvYBbghJFlQ2ODc%2B4U0QRbrKY4s%2FUtF1dmaolmazlxlHMDAKpTlBkLnnipbp7i4lpT3N0WxEvsScp6KXE8P13oPw5shJ7c76UPjznCobT83ntUMqYBBGhjSHLbxutAgFnN8jxUa3qLqyzLGY47Qc8ocep7RyWRD8JRkjHSXGdGveaVlrenKhCxkebgraZkNj1%2FRBbVKn688C31xB%2FiSQfd%2BT2BpLf8jxkWOp%2Fl6ohcynazdAEZuLzoQ7I%2BsCf1NCWst2HAWzjp0V%2FvHCUTOgbeOzXrYGirS4zIbVtqozpm1DCmd%2FH1FVAwHApVk3q5wZt7B1gZamlwPsRZyZ8QrAF5O1nff7eUME6ZvHXa%2B%2FpkzhUV2LlP79U1eJkdX%2Fd%2F0v0rv74RiTYpjWyjTK5NwoBSfICz5R0TM5JaxgQZb2OQzgWAs01CHEbSy9oN4O3aPlQzlEdbmMWjU1yjV%2F6ODDzDKls%2FDBjqkAR6web%2BRMtTPteEl3eK2EKlYWQIu3%2BliMnwDrr3irNP3QIdOOlrS5NdWwZNrZFguZnyGOiBqXeOWuAEsBLu0C4GK8m4nR11Pwra6Z3boIf5n6sGJa9FotBTO8uGzz3fTHeOMiBv9t0xmPKXaQPf%2B78vGRA3PpUxTeWGIB56yM90HS6RNTRIqn2NoowSn5L2bLP6%2By%2BJYoDXW0rRjKcpRNzQexq0y&X-Amz-Signature=02f9af71e4c1bcd78350240ee68a26ffe2554bbad18ee75ee1c9a2f22f03e10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
