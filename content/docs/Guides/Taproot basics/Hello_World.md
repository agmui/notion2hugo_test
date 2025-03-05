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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFDMZCE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbyLzKDzWHeRqE0JC%2BfuqfKNR%2FVHZVa1Hihu8wLxbKqAiEAmvWeo%2FdQ6hoUXx8Zb9k8vWmE9dP60xvQFte9r6dXM10q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEpz1NIzCEjv9%2BO%2BFyrcA74A1vfmhexaldbRFwzXJSp%2F1fPsqFioBb0wHaBifMHfnHFj4V5GIoA%2B3NJ2r1jbDHbS%2Fu304nPu36z7UrqHObrPlbdxPTwIXkBt3BpGYX66Z0h3kj%2FbQzlWcYLOlVruzSzGbzcSKd1k%2FXicpQKXaKzVGhr9msG2m28YAfP6cOvmV5YXkogzJPXvNo75ISQJZSxONoN9oEKLFymxsFM%2F2PzpGQUyusLRBM0mIrTwF90gmLKqXP68x4FvOgW6ByVIyTa8GKwY0WKhZIZRgLCd4%2FuG9Ix1Vjt3KLcUVvU%2FejO0XbJY1004PdJWBCewyjBr24D7YSh7%2FTRQdCkcaWujQbRJ2XlyJSuQAIlxIXlOG1kwMSepNVl8wLku2m9kp8n2rJ6KBzO9iZY2E7cakXijr8MC55kVWsq1eBEhBEHAUCXJuFImNYy9%2BJYvbx6EdVbZSN1Jp7VodXiDn5FJyuvi48JVfugutxVtrMllxT%2FG6TH6FlR4g34yW31dcnqUS2lAxvZgn5KRmELBa%2FRE8eMQDXpaMi7iQoDbP3XwkYq8ZRY0vu3RehiWcfS%2FXhQQNodLDB%2F5rtnETQ9l8beU0VehuqBd9aWnfiPjAjD%2BI97o89B5HBSqCqVS9l3S3AdgMKCNoL4GOqUBFY6KnzSnGu7prZL3iQ3I8SOWOnn9yNr7Dgpg6mYBFTzO0fBg1PQG2gHmizLOJrnzs1V%2BA%2FN%2BvXM6ff8VmgR8rn2X%2B1RjFK2dqmh3UlIodAwXZluzfwSH9r7zL76D6XzUlLMYvhp9cyjshGg7dd6mtSHnaOem%2Ba1Mc5R1KtqI6VwyAG3GxlStu%2Fb8x9c79cW2YovbEvGws1Cy%2FpFWJCDDXoK1bJl2&X-Amz-Signature=7e8a71b2b231b543baed61001bd8e3d89a4e7472981b9ee61bb418d93dd29c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFDMZCE%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbyLzKDzWHeRqE0JC%2BfuqfKNR%2FVHZVa1Hihu8wLxbKqAiEAmvWeo%2FdQ6hoUXx8Zb9k8vWmE9dP60xvQFte9r6dXM10q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDEpz1NIzCEjv9%2BO%2BFyrcA74A1vfmhexaldbRFwzXJSp%2F1fPsqFioBb0wHaBifMHfnHFj4V5GIoA%2B3NJ2r1jbDHbS%2Fu304nPu36z7UrqHObrPlbdxPTwIXkBt3BpGYX66Z0h3kj%2FbQzlWcYLOlVruzSzGbzcSKd1k%2FXicpQKXaKzVGhr9msG2m28YAfP6cOvmV5YXkogzJPXvNo75ISQJZSxONoN9oEKLFymxsFM%2F2PzpGQUyusLRBM0mIrTwF90gmLKqXP68x4FvOgW6ByVIyTa8GKwY0WKhZIZRgLCd4%2FuG9Ix1Vjt3KLcUVvU%2FejO0XbJY1004PdJWBCewyjBr24D7YSh7%2FTRQdCkcaWujQbRJ2XlyJSuQAIlxIXlOG1kwMSepNVl8wLku2m9kp8n2rJ6KBzO9iZY2E7cakXijr8MC55kVWsq1eBEhBEHAUCXJuFImNYy9%2BJYvbx6EdVbZSN1Jp7VodXiDn5FJyuvi48JVfugutxVtrMllxT%2FG6TH6FlR4g34yW31dcnqUS2lAxvZgn5KRmELBa%2FRE8eMQDXpaMi7iQoDbP3XwkYq8ZRY0vu3RehiWcfS%2FXhQQNodLDB%2F5rtnETQ9l8beU0VehuqBd9aWnfiPjAjD%2BI97o89B5HBSqCqVS9l3S3AdgMKCNoL4GOqUBFY6KnzSnGu7prZL3iQ3I8SOWOnn9yNr7Dgpg6mYBFTzO0fBg1PQG2gHmizLOJrnzs1V%2BA%2FN%2BvXM6ff8VmgR8rn2X%2B1RjFK2dqmh3UlIodAwXZluzfwSH9r7zL76D6XzUlLMYvhp9cyjshGg7dd6mtSHnaOem%2Ba1Mc5R1KtqI6VwyAG3GxlStu%2Fb8x9c79cW2YovbEvGws1Cy%2FpFWJCDDXoK1bJl2&X-Amz-Signature=6c195d6b1f676e39105dafde9b4846ebc7d9a1fba0b03d1fedead1988034373e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
