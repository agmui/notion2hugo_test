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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARJQXSY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHZLIKJueKyae8yttYFdXGIj%2FeDoHxOkdwAITEJl0FSgIhAJSNfHOLzlTXDDhaxGM2GcgT3nnshxKj2hsGsqIsOSd4KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB5FeVtO9s1jWNr4sq3ANtLxsC%2BC1vzEAnGN10Qici6FLZmctTRL9t3WEPFI%2FT5uZ0FKkoA3oVr2GpGlDBxF8CJ78tl8FHK8JpJPmgKrXmwa1FXRlxkrp9lDeHDnHR0PfxaMBh7VmhkkJZMhaI69oJihBI6%2F1KBOEv282trRN2wEWcDJCO3qsS%2Bvft44b%2BY%2F3P%2FPbAspdCkmD2IU3ziDbHQTIdXrSr0e3kn9yyvwJG5OunaIY4P2x%2BOa6VDu8rWlLJ2u6gB20bLaxaJcX94ODi9DdZcunD8AQtI5KxJRFwrgGeYsCuBi1q9XHryArmlHZRcqFrRZXzuZg3JrJDvhxt4UIl1c7i1vtoLW1CrwZQi0jRBS%2Fhg9Rv2MRq91WrgG0F172qNX9KMpVM8oeNK%2FvuseU83k8ulyVjL%2B6%2FowNjaPCtmSqaKYlPtskjt4xD%2BWrqaODmTT64kyQ1xJjhinySHTUVgxHuE6YSdlHR61Znbd78WPFad6f9W0wfS8Sf%2BslSjCEG3PCv3DuOQo4WdesN2qkfDjEGFLA%2F7unuKXSv5toFPlqmX6jms43L9LF%2FD8xUKtsBNw7hYz%2FSOLkGL7TSvS%2FgAmpjqqvAi%2BTVjsWh3kRIx7ur26HA0kt5jkeE6jjpYfh1HoomMxq4EjDc0LzDBjqkAUxhNAiHJmbi1EC7QyBZ7L4tFUbp97NhHybA0tmrlnmBSib2d79tQ24udTM0A0TvEYRVvyti6MYhEKomMdHfDy78qOfwh7fnJUWcZ9ZJoUrTnCSRO1J8D63boX2nMcScb7jpF6n3B9O%2BZmZQ2lqZbbznWdBHTIKuVfy%2FaWMFAh%2Bh%2BwLbgm3AtXrpykdDxPL28esMvx8k3ZW9CGubCEY7cfAkomLE&X-Amz-Signature=00a13a3de976c9df6a193a978c63b8e16c25a53bbebd75b98aa15aa0a37096e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARJQXSY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHZLIKJueKyae8yttYFdXGIj%2FeDoHxOkdwAITEJl0FSgIhAJSNfHOLzlTXDDhaxGM2GcgT3nnshxKj2hsGsqIsOSd4KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB5FeVtO9s1jWNr4sq3ANtLxsC%2BC1vzEAnGN10Qici6FLZmctTRL9t3WEPFI%2FT5uZ0FKkoA3oVr2GpGlDBxF8CJ78tl8FHK8JpJPmgKrXmwa1FXRlxkrp9lDeHDnHR0PfxaMBh7VmhkkJZMhaI69oJihBI6%2F1KBOEv282trRN2wEWcDJCO3qsS%2Bvft44b%2BY%2F3P%2FPbAspdCkmD2IU3ziDbHQTIdXrSr0e3kn9yyvwJG5OunaIY4P2x%2BOa6VDu8rWlLJ2u6gB20bLaxaJcX94ODi9DdZcunD8AQtI5KxJRFwrgGeYsCuBi1q9XHryArmlHZRcqFrRZXzuZg3JrJDvhxt4UIl1c7i1vtoLW1CrwZQi0jRBS%2Fhg9Rv2MRq91WrgG0F172qNX9KMpVM8oeNK%2FvuseU83k8ulyVjL%2B6%2FowNjaPCtmSqaKYlPtskjt4xD%2BWrqaODmTT64kyQ1xJjhinySHTUVgxHuE6YSdlHR61Znbd78WPFad6f9W0wfS8Sf%2BslSjCEG3PCv3DuOQo4WdesN2qkfDjEGFLA%2F7unuKXSv5toFPlqmX6jms43L9LF%2FD8xUKtsBNw7hYz%2FSOLkGL7TSvS%2FgAmpjqqvAi%2BTVjsWh3kRIx7ur26HA0kt5jkeE6jjpYfh1HoomMxq4EjDc0LzDBjqkAUxhNAiHJmbi1EC7QyBZ7L4tFUbp97NhHybA0tmrlnmBSib2d79tQ24udTM0A0TvEYRVvyti6MYhEKomMdHfDy78qOfwh7fnJUWcZ9ZJoUrTnCSRO1J8D63boX2nMcScb7jpF6n3B9O%2BZmZQ2lqZbbznWdBHTIKuVfy%2FaWMFAh%2Bh%2BwLbgm3AtXrpykdDxPL28esMvx8k3ZW9CGubCEY7cfAkomLE&X-Amz-Signature=4abe1c31c9cca26c5be0f3ed9512ff2d4f013c8550c718bab4a5bbf2eb24e015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
