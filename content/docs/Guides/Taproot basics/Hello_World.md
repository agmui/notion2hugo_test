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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JOCJDG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzTysxhpx0fyflixfLXQHUyFh53aI%2BLBbPuu9LL0KzUwIhAIvwNT2O0KnrGolbl%2ByzNzYwQZe90CcgIaVJ%2Fd5IPJ7jKv8DCFcQABoMNjM3NDIzMTgzODA1Igw9wII6PDmEL4Ob8j8q3AOkqmSdId3deG8Q%2BWo52sTp441k0XhDFNj4tO1gxbJ%2FIWG5BWdLKJu1j3WBSdK44uq0RG1L5esYEHWrkeEmN8xETfn4%2B%2BNl0qBKPpICgsc60dYRDnEUAxWqtmkdzZFrPQaYScpNCNaxM8%2F0EvJVhK1fspnZRtGpK83incft7fahwPsWclqLbz1Q8T0x81hRAFIggMGVDmEW6%2B4sHAV2uE8Upbl0CtQIWEmuyTDTgvCFxXLGOTblzYdSZIeW3fa2%2F1aJLmGI%2FijAAzqSoUk2iKR1IOXgNZiMAq5Zr709pSVu64JOVQc2FoNS%2Bhdz7bupFeVXaOYbkZABFZpuVcn%2F6A%2Bt8U54QKkxUYFB9a4PWtsK1r%2FGKYcWpFn7FpJ0IVQrO%2B9drgkh5%2FDrUlyUVdliOg7XywJTCjev0c9Y464M4WOPZfbChhXpE1AFIvThzIt89oZWVCuYClJvnVNm3nHmxaFmuGm3bujboxCh8N8CRgnNV0jZKU2v47Oj2xHMR5RO3A3Q%2F2hwdJWAqxvTKgJQJcfHz0GBaPUOWyN3GH%2FTtIZoXnvhsj3SmQ%2BSFBFJtb8IUF4ouHY6Bcg7C5GM4g%2B0r%2FNB6wGw%2FN8mACsSFG1VIPZgAHbneCuu6%2F3nvOBDnDD%2FrYLABjqkATq6%2BZBgFwreRk9nBkrcrXtCZFkih6GpGqZOqYdUDPXYW41qclA%2BTUGC%2F0q65slKzD5PbRtZF%2BP1mMDi1EHvpUSaN%2BuF1GpQ%2FrN3%2Ff6Z7GnxdwlmzksY6E5eZhEwQIOYlJJQN0q8TKvKonamSLnQ4oQuAV%2Fr8fTh8bQk0bh0i%2FtQYj8PutWFCKid07bOkf3y58xq15yUqVwWH6DENDut7k6FmpiY&X-Amz-Signature=1ba75a864a2eda8a151d1cfa5132362b7215d8bd1471a0dca39e15620054b695&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JOCJDG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzTysxhpx0fyflixfLXQHUyFh53aI%2BLBbPuu9LL0KzUwIhAIvwNT2O0KnrGolbl%2ByzNzYwQZe90CcgIaVJ%2Fd5IPJ7jKv8DCFcQABoMNjM3NDIzMTgzODA1Igw9wII6PDmEL4Ob8j8q3AOkqmSdId3deG8Q%2BWo52sTp441k0XhDFNj4tO1gxbJ%2FIWG5BWdLKJu1j3WBSdK44uq0RG1L5esYEHWrkeEmN8xETfn4%2B%2BNl0qBKPpICgsc60dYRDnEUAxWqtmkdzZFrPQaYScpNCNaxM8%2F0EvJVhK1fspnZRtGpK83incft7fahwPsWclqLbz1Q8T0x81hRAFIggMGVDmEW6%2B4sHAV2uE8Upbl0CtQIWEmuyTDTgvCFxXLGOTblzYdSZIeW3fa2%2F1aJLmGI%2FijAAzqSoUk2iKR1IOXgNZiMAq5Zr709pSVu64JOVQc2FoNS%2Bhdz7bupFeVXaOYbkZABFZpuVcn%2F6A%2Bt8U54QKkxUYFB9a4PWtsK1r%2FGKYcWpFn7FpJ0IVQrO%2B9drgkh5%2FDrUlyUVdliOg7XywJTCjev0c9Y464M4WOPZfbChhXpE1AFIvThzIt89oZWVCuYClJvnVNm3nHmxaFmuGm3bujboxCh8N8CRgnNV0jZKU2v47Oj2xHMR5RO3A3Q%2F2hwdJWAqxvTKgJQJcfHz0GBaPUOWyN3GH%2FTtIZoXnvhsj3SmQ%2BSFBFJtb8IUF4ouHY6Bcg7C5GM4g%2B0r%2FNB6wGw%2FN8mACsSFG1VIPZgAHbneCuu6%2F3nvOBDnDD%2FrYLABjqkATq6%2BZBgFwreRk9nBkrcrXtCZFkih6GpGqZOqYdUDPXYW41qclA%2BTUGC%2F0q65slKzD5PbRtZF%2BP1mMDi1EHvpUSaN%2BuF1GpQ%2FrN3%2Ff6Z7GnxdwlmzksY6E5eZhEwQIOYlJJQN0q8TKvKonamSLnQ4oQuAV%2Fr8fTh8bQk0bh0i%2FtQYj8PutWFCKid07bOkf3y58xq15yUqVwWH6DENDut7k6FmpiY&X-Amz-Signature=3044d3290669883abae285f7730147cff434ca850cc553e1aba8c54a50e9247d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
