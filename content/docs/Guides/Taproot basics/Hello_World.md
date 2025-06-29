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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645YBMUJU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2FsQzr1iTT0d89cVPeL58URC6nfIcWSan%2FsZbkBPl3AIhAL2HkDSOQ9Qzk2av%2Fs7EuW35DQr05YzryK6Uo%2Fjfy13rKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78q3qIKZYFbYWelkq3APwXWm3qnxt2cTlWFxcqjSF18PfRgivIcv3wF7dmHQkdHFpOS787TvyHaTHz7JRDKsfaZyTMAG8OTZxaPdzevFI2ckR5HyfmkiLG7vdUe8BD4MNb8hhTDc%2FIF%2FOYnmwTaH67zRkA7yh4S1bQNdlJX%2B%2B7ZfwlMYGhkJB%2B0mFPKsnLITvAve59nA8sjB171cFi%2FxtRq0zBKMuTzfSQnYuayfxsUuflok9EyZ4ZMbWQBq1KvgY8VFXmJhI0MXRbHeGNMFKaEidyH%2FJGLLVo%2F4Fmv%2F9ceKaQuNfEBzQtE%2FGza2iPoVy4t%2Beu2D7xlSoSYBPpQyAGbGfO1kbQRfdd05lggKgk6mUt1%2F06awXAfz3I%2BioIZzAxE9xCpaqselSjLihXN%2Bvn%2FQsAtU7dW6a%2Fnu7RsYQXIPCuY4LrJ9cLjrfDq0b8suIwuGjDVasqHhXjKyGdoEhOHiAYHix0VUxKCainqCMD0CklClu7ldSo0mPSd4gdX7g1N696xY963R6MQloBMtVxKS5M4n3ZM3XMiouTgBODnqFAxlpd1xPsrR5wq2c7XrHpN6qdtfNyA2yIWnt40TGy1%2B5eY6YbCwEyXsiyd%2FQqBZdzstw%2FV87fqp9dlqol%2BpMNmKJCdhnY7tMLzDfgITDBjqkAUPIsHLly9lC8YOSqOABmosnhWBhY6KHn%2FXatDOi1OC9VgzV%2F9rZ9Tt0LdiVgC2O9smIE2FeezNUoYkNlhyer%2FrHItvZLXL3oFNZgawtmHUf9asXbEmSxcsULwawuUbFJq%2BYpVO0FICjfYqmiGhjSGrH%2FisgO%2F27mSrtgemOEHJaFWCez2q4RHu3L5tuED0w5hJgKELLJFRO%2BfK1Ha6phKOtqC9B&X-Amz-Signature=59b777c5486c539d8e3591544b0a3732ac16adcc58bf02e5c689751fabc4e1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645YBMUJU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2FsQzr1iTT0d89cVPeL58URC6nfIcWSan%2FsZbkBPl3AIhAL2HkDSOQ9Qzk2av%2Fs7EuW35DQr05YzryK6Uo%2Fjfy13rKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78q3qIKZYFbYWelkq3APwXWm3qnxt2cTlWFxcqjSF18PfRgivIcv3wF7dmHQkdHFpOS787TvyHaTHz7JRDKsfaZyTMAG8OTZxaPdzevFI2ckR5HyfmkiLG7vdUe8BD4MNb8hhTDc%2FIF%2FOYnmwTaH67zRkA7yh4S1bQNdlJX%2B%2B7ZfwlMYGhkJB%2B0mFPKsnLITvAve59nA8sjB171cFi%2FxtRq0zBKMuTzfSQnYuayfxsUuflok9EyZ4ZMbWQBq1KvgY8VFXmJhI0MXRbHeGNMFKaEidyH%2FJGLLVo%2F4Fmv%2F9ceKaQuNfEBzQtE%2FGza2iPoVy4t%2Beu2D7xlSoSYBPpQyAGbGfO1kbQRfdd05lggKgk6mUt1%2F06awXAfz3I%2BioIZzAxE9xCpaqselSjLihXN%2Bvn%2FQsAtU7dW6a%2Fnu7RsYQXIPCuY4LrJ9cLjrfDq0b8suIwuGjDVasqHhXjKyGdoEhOHiAYHix0VUxKCainqCMD0CklClu7ldSo0mPSd4gdX7g1N696xY963R6MQloBMtVxKS5M4n3ZM3XMiouTgBODnqFAxlpd1xPsrR5wq2c7XrHpN6qdtfNyA2yIWnt40TGy1%2B5eY6YbCwEyXsiyd%2FQqBZdzstw%2FV87fqp9dlqol%2BpMNmKJCdhnY7tMLzDfgITDBjqkAUPIsHLly9lC8YOSqOABmosnhWBhY6KHn%2FXatDOi1OC9VgzV%2F9rZ9Tt0LdiVgC2O9smIE2FeezNUoYkNlhyer%2FrHItvZLXL3oFNZgawtmHUf9asXbEmSxcsULwawuUbFJq%2BYpVO0FICjfYqmiGhjSGrH%2FisgO%2F27mSrtgemOEHJaFWCez2q4RHu3L5tuED0w5hJgKELLJFRO%2BfK1Ha6phKOtqC9B&X-Amz-Signature=019c6c9320f43c823ad819bc1b8019a169031c4ece02f1f94c79b604ccfea5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
