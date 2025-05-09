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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK4BVA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqmw4N4lQMwwtd1Mv5TBDkdBIxRyMnWhDXC25IahcE1AiEAswXcWDKF5Et1peRf240P%2Fp81rW%2B8W2MnMbhj1218mIYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqOi81grJIz8Tp75yrcA7wJPAYw2uUpvhe7bioeTkl076NP1GEbFt%2FhkYeE05uwDr5P5Sb7uhjZIt1bgL%2BIkoqayrqydmBE8UkMXGZWCGubbejwypHJhqgWV9lQnUuSYucv0SJ8LRfySqg1Q9%2F6YACVC3ARghPT1eprxOuNXfTn5Qyxi8cWTJPovIk8SupH%2FUbq12eb7RazyHMtoq%2Bcaf22kO07GZTEXJXmYyQWHfjjOBK%2BHb1IwY5Ue5jsAvjV3gGVeJ6vYnPmanBBWSqmBl07pwigd0quUKEmG0zAPc2HwKF3KPfj1tRcTSZhEkS4yxsAkwqJlE0h9%2Fl1ddQsMn2TBHKziINm6tsDtbcZdHxKVwLZ%2FC3MPDMhkv%2Fgc%2Bs0F%2FNEZL54yVa%2FByQdmPkwDxMVcUNggfd8O9kU1jNsI7G6V9XM1NRPjg9MuyhmFWvjQ9LBXA%2BAp92dPU0CbVmYTZL74iySLPtKbkPd%2BCuAt1N7i0%2FVKoFJ8vC2BiQ2yAhCKq4cvulPG2gm6Mc2UGqS8ldP3AXulsR7tl%2B0p40D0khfygIbC%2BTJ%2Fubb03FG%2Fi9FeXuVlxuHlsZwNsbpA5opD%2BUkZGslVHsevQ6ge0EvaVZajB85Ujd%2BJr68ksqlpdCotfVXOFms6PJ7cw5WMLK9%2BMAGOqUBqpm6LyMRCizMzv%2BwDLFxts2LEb7LhA9o4DYmf4bCEKQkZmOOBfx4JGzGrsykdG5gRhtbKBWwWvYCe0pkbSeiAh8dbCucKCXyWJqloNA7XNoJDZcKR3ELFsoRZIXAsfjHrmQnKVPXswXuzjn4a00O1H1MDU%2B6WGMXmHJItUnlBtHYpi5qe6Fvsp%2Ffiw4pgEoa20%2F4L0okNZFtD%2BkbGt0Qr8Tzj8UR&X-Amz-Signature=e0a36871f30a11beada45b96d8b68365976fe99e1cdcc1d8492b8d59604da729&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTK4BVA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqmw4N4lQMwwtd1Mv5TBDkdBIxRyMnWhDXC25IahcE1AiEAswXcWDKF5Et1peRf240P%2Fp81rW%2B8W2MnMbhj1218mIYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqOi81grJIz8Tp75yrcA7wJPAYw2uUpvhe7bioeTkl076NP1GEbFt%2FhkYeE05uwDr5P5Sb7uhjZIt1bgL%2BIkoqayrqydmBE8UkMXGZWCGubbejwypHJhqgWV9lQnUuSYucv0SJ8LRfySqg1Q9%2F6YACVC3ARghPT1eprxOuNXfTn5Qyxi8cWTJPovIk8SupH%2FUbq12eb7RazyHMtoq%2Bcaf22kO07GZTEXJXmYyQWHfjjOBK%2BHb1IwY5Ue5jsAvjV3gGVeJ6vYnPmanBBWSqmBl07pwigd0quUKEmG0zAPc2HwKF3KPfj1tRcTSZhEkS4yxsAkwqJlE0h9%2Fl1ddQsMn2TBHKziINm6tsDtbcZdHxKVwLZ%2FC3MPDMhkv%2Fgc%2Bs0F%2FNEZL54yVa%2FByQdmPkwDxMVcUNggfd8O9kU1jNsI7G6V9XM1NRPjg9MuyhmFWvjQ9LBXA%2BAp92dPU0CbVmYTZL74iySLPtKbkPd%2BCuAt1N7i0%2FVKoFJ8vC2BiQ2yAhCKq4cvulPG2gm6Mc2UGqS8ldP3AXulsR7tl%2B0p40D0khfygIbC%2BTJ%2Fubb03FG%2Fi9FeXuVlxuHlsZwNsbpA5opD%2BUkZGslVHsevQ6ge0EvaVZajB85Ujd%2BJr68ksqlpdCotfVXOFms6PJ7cw5WMLK9%2BMAGOqUBqpm6LyMRCizMzv%2BwDLFxts2LEb7LhA9o4DYmf4bCEKQkZmOOBfx4JGzGrsykdG5gRhtbKBWwWvYCe0pkbSeiAh8dbCucKCXyWJqloNA7XNoJDZcKR3ELFsoRZIXAsfjHrmQnKVPXswXuzjn4a00O1H1MDU%2B6WGMXmHJItUnlBtHYpi5qe6Fvsp%2Ffiw4pgEoa20%2F4L0okNZFtD%2BkbGt0Qr8Tzj8UR&X-Amz-Signature=b5506f6002cd40c29110f274e49e49a7af2a3cf7e29405773f0de88716c448d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
