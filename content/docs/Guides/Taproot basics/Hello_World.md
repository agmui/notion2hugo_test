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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4VUVRR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDSZ3R5yhQWM%2BozfBrHiwwgOLfNBvV7WPF6Cj0Nzca4BgIhAPa2Nh8LLXDoeRvD4PRleDgvgTjPLSq1aZ8qkpWYABjSKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxcciWJTv%2BkiM58kMq3AOflFZisTh0K4zDuFc7oEAH2bDEPqeTN6R7O2aCXf7eoznVTDWtoJAYxY2U27ARE8hx7kQpXW3jmz9LFCX8IIyt8r8MS7DidzFhf5P7a6FHTCFD%2Fa25kUlgdd6FkHLnq7P5A7LRtIN0BgynCaJJ8FIUiCTOslKSgwK6261A%2FAsnK43SHymDLvoxskOoMfTircsPPcRqE5wD1ss5VhSz3HDAQfkH3IFSardVDC8r4SaIkFSM%2BcmoWjyvfAlt72MrdvBP5tLoc3lwRjxejP1i4bwwBBdB97cyDmwhD3NwgfWO3ZVulAJk%2BvsvvkRjUVBV2Cc6KDWOCs64ziY8BCnYQt77RegY2%2FchfDhwbCMhNJvzxCDnTZnGF%2FIeDNhau9n71mcrGpPeFXUazWCUyYdHMqpEcA7AItlU%2Fa4%2BU3tJVZQHnnQ7W%2FQUarXpiZ7W8rD5x%2FcqSb8R%2Fy1fRzvFvWv%2FbWrxjnqNDTRCz9UgXINfKqffmIDtyFHkUCeVVfiN26YqagNG%2FJIvJwS2%2Fwsi1FgkIyJPt1A%2Bus5%2BCzBSm%2Bn8s8818dLtZnaan8g1hzkELL4QSzhCAkZsb9L86Erz1nY%2FFlqKOcSekJDL%2F6y0r13PmvqggEZ1%2FEfWqElEouECfTCJp%2FK%2BBjqkAd9PgQVeucJnDvgoaa3s2dfDhgAqzIYC%2Bhq5kaE2bp5D07DeabcDq96Nh%2Fk3LcKXct%2F4FJE9D%2FvC5sdOsy5wdH9xeOkPlBBX4C5A2Vi%2FcQlBudC2LprMXaOdgHSQwP%2B6w310z2JsMN3daT0pa1paiIg40btltKKtcbBaNIspbsMkTviONzBfbxsQslgwjSTGX5VuLuX%2F4GJy9zSG%2FwAXmsl%2FerqZ&X-Amz-Signature=759790bd17adec13f572ebdd3c93c3f46cdd0e993020540c7b360753fc0f3fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4VUVRR%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDSZ3R5yhQWM%2BozfBrHiwwgOLfNBvV7WPF6Cj0Nzca4BgIhAPa2Nh8LLXDoeRvD4PRleDgvgTjPLSq1aZ8qkpWYABjSKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxcciWJTv%2BkiM58kMq3AOflFZisTh0K4zDuFc7oEAH2bDEPqeTN6R7O2aCXf7eoznVTDWtoJAYxY2U27ARE8hx7kQpXW3jmz9LFCX8IIyt8r8MS7DidzFhf5P7a6FHTCFD%2Fa25kUlgdd6FkHLnq7P5A7LRtIN0BgynCaJJ8FIUiCTOslKSgwK6261A%2FAsnK43SHymDLvoxskOoMfTircsPPcRqE5wD1ss5VhSz3HDAQfkH3IFSardVDC8r4SaIkFSM%2BcmoWjyvfAlt72MrdvBP5tLoc3lwRjxejP1i4bwwBBdB97cyDmwhD3NwgfWO3ZVulAJk%2BvsvvkRjUVBV2Cc6KDWOCs64ziY8BCnYQt77RegY2%2FchfDhwbCMhNJvzxCDnTZnGF%2FIeDNhau9n71mcrGpPeFXUazWCUyYdHMqpEcA7AItlU%2Fa4%2BU3tJVZQHnnQ7W%2FQUarXpiZ7W8rD5x%2FcqSb8R%2Fy1fRzvFvWv%2FbWrxjnqNDTRCz9UgXINfKqffmIDtyFHkUCeVVfiN26YqagNG%2FJIvJwS2%2Fwsi1FgkIyJPt1A%2Bus5%2BCzBSm%2Bn8s8818dLtZnaan8g1hzkELL4QSzhCAkZsb9L86Erz1nY%2FFlqKOcSekJDL%2F6y0r13PmvqggEZ1%2FEfWqElEouECfTCJp%2FK%2BBjqkAd9PgQVeucJnDvgoaa3s2dfDhgAqzIYC%2Bhq5kaE2bp5D07DeabcDq96Nh%2Fk3LcKXct%2F4FJE9D%2FvC5sdOsy5wdH9xeOkPlBBX4C5A2Vi%2FcQlBudC2LprMXaOdgHSQwP%2B6w310z2JsMN3daT0pa1paiIg40btltKKtcbBaNIspbsMkTviONzBfbxsQslgwjSTGX5VuLuX%2F4GJy9zSG%2FwAXmsl%2FerqZ&X-Amz-Signature=6ed702ecbe6d7748f7b57208b4d1703ae86a96aaefd7171f0152c8ae0129e903&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
