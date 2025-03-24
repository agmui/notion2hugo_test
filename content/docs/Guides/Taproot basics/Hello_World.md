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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE4MLRFD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3PdeB4KzfmVlR0VXqK4Se6AjFplL4ZRPuBhc0NU6PtAiB55kDMLgAYveg8t4GPZB88gQ5tby%2FQMAob45mgndw3XiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdVcudgLTt%2FAYi%2Fa1KtwDGV11TppBOO2gEMoGEXrUlgqI9hIyAyLklmlcOCKAUJQiSzEp7tqByJ%2Fi41PAOWuvw75i7Ars0zTkwvJdj%2FDVtGYCyi9TKWkQLbI%2F4IjQ01SWkar3t5mm5cnjBRZZhl%2Bj0dXM3lcwqUTyY4WtqMq3n078pmiSvbs6Ynx%2FM2c%2BbNGsUC5610UL66vYurnTeN3%2BvoLgDahIzNBqvG7qankdQ6S88kFtXPrcI06yBm%2F%2BFXP8W9ZJzAFA2yn%2BJlq3pS6yckxdd0mFq4HPwsaAWRwT9CmHwfK3UMkiDCzK8yEm61lg2pUu3vxJieKUx9VPZy4DSzZ89qF1Y8Gc0Qmhr92vrJUaajCtPP2VCqXY20kH1yeUZnIWW2JhDfz2TQ0%2F5b4Ytj7i%2BUHY1UNBm48DnvuSaEGRX5H4MKy1bipUmxAAinZAN9rNE%2FfDIbsEsyRDLqy%2BM24%2FXVS9ze9ydLUVS6jHKMtlj6%2FUV%2FYa0lMzA7fTkcq6emjEUnF0ksfuIv6TLVZvXri5YaJIqhthpw%2FokNZ1vb3pHS%2BP0Sj4W3nFJ%2F7XDpnOVtdX8yfP6Nwy8JRUg83MmcGfbC73r7w9mwRkL6l%2Bc4ME3Iu192wWQgeAnI70V0bHAEkAHX%2FNM29YoEcwy5%2BEvwY6pgEcE6J2uwkkNiMeVzZdQOV2cNv16H5SwzWjhXKExjx1%2Fj8uPcBvsMRsRtLBSrod3LeJpKGwUL%2FgEoJWqvSTW6fmrRwALedIisEnTWADoQoQ9hn5emku0Wp6riiM62KVutFXsjD6f6nv26IBNHngTkrLNKCPAb3EKxme1BevSfmaKClkN4Wq4oh0%2F2PAdlfnmTWlw2%2BjYxYmgzynJx0qU%2BNZA7J%2BaOz6&X-Amz-Signature=903798511b1bc5a149329a195e84674d2707930684cbea298d10c4a6be240a85&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE4MLRFD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3PdeB4KzfmVlR0VXqK4Se6AjFplL4ZRPuBhc0NU6PtAiB55kDMLgAYveg8t4GPZB88gQ5tby%2FQMAob45mgndw3XiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdVcudgLTt%2FAYi%2Fa1KtwDGV11TppBOO2gEMoGEXrUlgqI9hIyAyLklmlcOCKAUJQiSzEp7tqByJ%2Fi41PAOWuvw75i7Ars0zTkwvJdj%2FDVtGYCyi9TKWkQLbI%2F4IjQ01SWkar3t5mm5cnjBRZZhl%2Bj0dXM3lcwqUTyY4WtqMq3n078pmiSvbs6Ynx%2FM2c%2BbNGsUC5610UL66vYurnTeN3%2BvoLgDahIzNBqvG7qankdQ6S88kFtXPrcI06yBm%2F%2BFXP8W9ZJzAFA2yn%2BJlq3pS6yckxdd0mFq4HPwsaAWRwT9CmHwfK3UMkiDCzK8yEm61lg2pUu3vxJieKUx9VPZy4DSzZ89qF1Y8Gc0Qmhr92vrJUaajCtPP2VCqXY20kH1yeUZnIWW2JhDfz2TQ0%2F5b4Ytj7i%2BUHY1UNBm48DnvuSaEGRX5H4MKy1bipUmxAAinZAN9rNE%2FfDIbsEsyRDLqy%2BM24%2FXVS9ze9ydLUVS6jHKMtlj6%2FUV%2FYa0lMzA7fTkcq6emjEUnF0ksfuIv6TLVZvXri5YaJIqhthpw%2FokNZ1vb3pHS%2BP0Sj4W3nFJ%2F7XDpnOVtdX8yfP6Nwy8JRUg83MmcGfbC73r7w9mwRkL6l%2Bc4ME3Iu192wWQgeAnI70V0bHAEkAHX%2FNM29YoEcwy5%2BEvwY6pgEcE6J2uwkkNiMeVzZdQOV2cNv16H5SwzWjhXKExjx1%2Fj8uPcBvsMRsRtLBSrod3LeJpKGwUL%2FgEoJWqvSTW6fmrRwALedIisEnTWADoQoQ9hn5emku0Wp6riiM62KVutFXsjD6f6nv26IBNHngTkrLNKCPAb3EKxme1BevSfmaKClkN4Wq4oh0%2F2PAdlfnmTWlw2%2BjYxYmgzynJx0qU%2BNZA7J%2BaOz6&X-Amz-Signature=a198d62c0a2a77359bfa005fa72e24dd877f1ac6811e5e7bf4ee8c36f22acd25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
