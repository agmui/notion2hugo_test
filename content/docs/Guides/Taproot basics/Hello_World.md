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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPE4YZPX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDNbdiCUQ6TaUFR%2Fu%2BgAawvDUv8EyvwCF39HHWxag3DnQIgbMZWVdN0bJgHEsk8m3UCUueZp0GZvhKzZFiRaWaJ78YqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQMDs7aMLvwao9KzircA61SMIcY7nnJqpESYR2PPj2yPnwT%2FctiOOZMW1Ph2jQTq1P6VPeBMjcaOprYE5Y7%2FYPVSqZszE1SqhCzk%2Fsun7RvQox7s8YXbvfrvKwXSXf0spiNSvjX2MvfVULDk%2Fuk5FEyEggv3hx9s4iEBjAyBfSo6qkBgpQ8lzco3oNqIkgh4pMVaJSS4S3rFEOqc6xvgIF35QDc9ZFAINvLstnq3ysncp43lF9vS01GL3qxs0SB41RbRRD%2FUzzZ4CSwnsZ6b6dICkmtSrE6B09FhefDMekCW5D48QNxk8Oa%2B4qI8tRAO6GOCDdVEqbiZz9qiqGtsaonVv6fto7LQA%2BV7yiJXAf%2BnZr3otuIUwo9EFYu6Tuw9JuuUaf3DfwJYpbsAiLMZkop7An%2B7ArtiGQpJ%2FLbjFw38d1zX0hevGuxv30j4X%2B38%2BmFyokPEzmZfmUljcujhouF5HX7QNNhaaM7v0xztIhj5lFBfeaXUvs0dd%2BoCaSHHHC%2BWsQyp4sp6WupYY4BCUUj6nxXwevYfPJut7WyD5ez6eMsd1VZse%2BNDfFzLYgRaX0oDpVX9NAIckBn3F3rdkKZcGyOG0ubFkm9O%2F%2Bz8QZdBHeIVQlUIRVVZQ%2BkkQudmQDdahEobFmcH8F%2FMPrrh8EGOqUBK3Hxi%2FD6R2%2BVnrItJn6O2be0BlucmK%2BYhXotPVNJ8ZYifdiicPG84fAE3dZ1jcrmnqh7Kgd60pxyaN0NIGBJrtUzK5CRMT4sVwOmdZky2610AUUyBrEf0HgccVD85myxrZJkpQa0an5Uy8T1sYQ9AB8faEls5QDuX%2Fb%2ByYbGpgvzySsxZoxaV8a6VhbvNxH8vn2NUv%2BGw%2Bq%2BWlF8xhjcSNUIxehQ&X-Amz-Signature=657207dfdc51a33e945908bd8e17044fe84a1a4f918e67d9c6250d7d30c8a6e3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPE4YZPX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDNbdiCUQ6TaUFR%2Fu%2BgAawvDUv8EyvwCF39HHWxag3DnQIgbMZWVdN0bJgHEsk8m3UCUueZp0GZvhKzZFiRaWaJ78YqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQMDs7aMLvwao9KzircA61SMIcY7nnJqpESYR2PPj2yPnwT%2FctiOOZMW1Ph2jQTq1P6VPeBMjcaOprYE5Y7%2FYPVSqZszE1SqhCzk%2Fsun7RvQox7s8YXbvfrvKwXSXf0spiNSvjX2MvfVULDk%2Fuk5FEyEggv3hx9s4iEBjAyBfSo6qkBgpQ8lzco3oNqIkgh4pMVaJSS4S3rFEOqc6xvgIF35QDc9ZFAINvLstnq3ysncp43lF9vS01GL3qxs0SB41RbRRD%2FUzzZ4CSwnsZ6b6dICkmtSrE6B09FhefDMekCW5D48QNxk8Oa%2B4qI8tRAO6GOCDdVEqbiZz9qiqGtsaonVv6fto7LQA%2BV7yiJXAf%2BnZr3otuIUwo9EFYu6Tuw9JuuUaf3DfwJYpbsAiLMZkop7An%2B7ArtiGQpJ%2FLbjFw38d1zX0hevGuxv30j4X%2B38%2BmFyokPEzmZfmUljcujhouF5HX7QNNhaaM7v0xztIhj5lFBfeaXUvs0dd%2BoCaSHHHC%2BWsQyp4sp6WupYY4BCUUj6nxXwevYfPJut7WyD5ez6eMsd1VZse%2BNDfFzLYgRaX0oDpVX9NAIckBn3F3rdkKZcGyOG0ubFkm9O%2F%2Bz8QZdBHeIVQlUIRVVZQ%2BkkQudmQDdahEobFmcH8F%2FMPrrh8EGOqUBK3Hxi%2FD6R2%2BVnrItJn6O2be0BlucmK%2BYhXotPVNJ8ZYifdiicPG84fAE3dZ1jcrmnqh7Kgd60pxyaN0NIGBJrtUzK5CRMT4sVwOmdZky2610AUUyBrEf0HgccVD85myxrZJkpQa0an5Uy8T1sYQ9AB8faEls5QDuX%2Fb%2ByYbGpgvzySsxZoxaV8a6VhbvNxH8vn2NUv%2BGw%2Bq%2BWlF8xhjcSNUIxehQ&X-Amz-Signature=b124b2c76d3613f8525d8c5186d757a08d191adf8b4b80e69b56dde50cf78cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
