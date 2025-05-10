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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2YPCT7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSIS%2BH%2Fy6%2BZP9nZwMzl3ybG1pRDSCggcJUe7PIAdcTwIhAJjk3BHLKiLrsjmAG3gnzJa0UsYAAvw%2BV8zDYJC9aZjnKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFeHvycSSynGJrkiwq3AO%2BwFmio30etgWWAGNGgiZ2C%2F3SlGCEJgqG6n6t%2F2eRS3KxyuH6L5KHZmkZYoQgkceTfasmShE9cX2COChGtOm6dJJpvlnRoMEHFIQsHeHJ6BnD9%2BXvmPuE2CSoT66I%2B6ChjjTNEn342bF3AexxWrzwa7LKYQRsqQ1Y4BBhuqBSwcqLVmlJJH7r5JMFlDUaXKB05x1ib3MUQrPJBIGU%2Bk96ckaAF%2F6GLKdfyKqR%2FmwU%2BbaWKGw5X9dbLML226DMlB0CR1nXpVLV9TO3cndVKfHwW4s3oCxq%2FPAjOIYdhQ9H071jHf%2F5jzBYAYF0infHkjuwdl09R%2BgWN0HPWOs3SSBW50kC%2FF1pefET0y8KXqobMcuESA6s9TSeURRIcUu0aaHZXDV7vYxh4yrFj0woKQgCpfDX%2FjewIc%2BDbYYZzC5hLaQcfbdUP2kqfUvMxga%2BY3niWJgEffWEvJhwmje5XwANzEpPlqaMlEShyngbQf%2FDBF4a9YzBO68Eaq9oEmaooPS6%2BO85GdoJQ1YpUPRRkAQFoO2nkwfpm66O4K5BnohhwkU42i7WId%2Bs0M2XgsO1K7pw9DOUe9%2BQcHaY9O2XU01K6qrqMah2OCjwskaTcPIYAlwl33J2WtmfDci%2BrDDQj%2FzABjqkAYHBqemGB38Ycg3hRijtBDtxS%2FHOtnhhSsh20JFpWs3swH6%2B1SGxdLwMEax6e5cCaxKKLWc8f1vnUNx70Ev4DjO3KAd9nrtbCoaDJqOBTvYh0pygaWfueXOBmLnSpUTr6QFWEpBKli2X6s6tkHTVZEwMrwtfSFHYRsKoNw8Jvn%2BsD2h%2FaUz5x%2F6GhDEZ7H5nAVQzo7ilEXLfUTFC3IYHtkVvgZ5%2F&X-Amz-Signature=6b7831447b4c2564a78dc92680ebac2c8db36a1785284cb31353be955f387373&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2YPCT7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSIS%2BH%2Fy6%2BZP9nZwMzl3ybG1pRDSCggcJUe7PIAdcTwIhAJjk3BHLKiLrsjmAG3gnzJa0UsYAAvw%2BV8zDYJC9aZjnKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFeHvycSSynGJrkiwq3AO%2BwFmio30etgWWAGNGgiZ2C%2F3SlGCEJgqG6n6t%2F2eRS3KxyuH6L5KHZmkZYoQgkceTfasmShE9cX2COChGtOm6dJJpvlnRoMEHFIQsHeHJ6BnD9%2BXvmPuE2CSoT66I%2B6ChjjTNEn342bF3AexxWrzwa7LKYQRsqQ1Y4BBhuqBSwcqLVmlJJH7r5JMFlDUaXKB05x1ib3MUQrPJBIGU%2Bk96ckaAF%2F6GLKdfyKqR%2FmwU%2BbaWKGw5X9dbLML226DMlB0CR1nXpVLV9TO3cndVKfHwW4s3oCxq%2FPAjOIYdhQ9H071jHf%2F5jzBYAYF0infHkjuwdl09R%2BgWN0HPWOs3SSBW50kC%2FF1pefET0y8KXqobMcuESA6s9TSeURRIcUu0aaHZXDV7vYxh4yrFj0woKQgCpfDX%2FjewIc%2BDbYYZzC5hLaQcfbdUP2kqfUvMxga%2BY3niWJgEffWEvJhwmje5XwANzEpPlqaMlEShyngbQf%2FDBF4a9YzBO68Eaq9oEmaooPS6%2BO85GdoJQ1YpUPRRkAQFoO2nkwfpm66O4K5BnohhwkU42i7WId%2Bs0M2XgsO1K7pw9DOUe9%2BQcHaY9O2XU01K6qrqMah2OCjwskaTcPIYAlwl33J2WtmfDci%2BrDDQj%2FzABjqkAYHBqemGB38Ycg3hRijtBDtxS%2FHOtnhhSsh20JFpWs3swH6%2B1SGxdLwMEax6e5cCaxKKLWc8f1vnUNx70Ev4DjO3KAd9nrtbCoaDJqOBTvYh0pygaWfueXOBmLnSpUTr6QFWEpBKli2X6s6tkHTVZEwMrwtfSFHYRsKoNw8Jvn%2BsD2h%2FaUz5x%2F6GhDEZ7H5nAVQzo7ilEXLfUTFC3IYHtkVvgZ5%2F&X-Amz-Signature=089c479a2b35e353a0d85e12c27786ca2786d4830ec0f6081c266a4bc5dc3067&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
