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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDJZ7UF%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHnrmWqijPeWYAdbvAOT4ODwIQj1GPmXNdAuQNIL78qCAiB8f%2BGt%2BJkVsBoDfzdvEWttvgNcVAHX59ICg9B6bAs95CqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLZq%2BWZmQ%2BC2FkfEaKtwDn%2BBncY6FqsAFNiH7i4DdjQ7vruGYzMyHyRsyyX7sDQvdpJxt4DyCoa%2BAOUzmEi2jeRE3I%2B%2Fi6HJ2PFntBC2MHmNihAxlgOLco0Ptgr4Z4MaF7hosJAkQhKpPHkos0VGsA7mhzkgkH%2Bg3JiAVwLlA6LDQvkqvrmE%2FqaZQEPIJSSjhNNH%2Fue57b6ZTjxtFV89vQzLZyd3upz2Vvmb3ztYEyjLrhGzfY1X%2F0xNnz1Zsr5MKVWvLz%2FKWy9jH4XWNLki3XsoeMex8y5llYfY%2FhGfpGr6NLUp9%2FMKYxTe6R767HPe6FeO1gY8DmEnWhOxRS9IWPT4GLqa4D9nBtK3xgG8H%2BpyfbQSyQKlvwyPruyHkjDj0uZnsrccSGFnGIMt2qVBJMNfJAKu7RNJb2%2Bb8k5cP%2FoHnXnoAwjHYEz7KDCWz%2FkfmVn6J%2BeFV%2FFSb9GsJuUbsYmY9kUw1GvAvEZ4f3qayy2Q%2B%2Br3O1T9c%2F1flaksEkCeiwEwvGi0eMm%2Bc43DeLiWX6YdpdH2fUulgA4OBm%2BDvgTL63h47CN34Vmdky7BfDYHvzVzmlpaI%2FKPS09FAWekocuBKyveHodkxEFxyso0QkFWCbrJZErH80kAn4W4XI2AEKHGYrOr97lbbRF8wwdTtyQY6pgEYqvym5detHthUChk9VC69FoLXKVEp5gifYj5rO%2FwvVvA0Wt8EDMVCFtvANRIZxo7uZ%2FWmjluskMRRIPJjKTMh3a9NIIKB1V0Amzqi16U2ZbeMmmlpLC16pqwylOJljc8EWKRVPdH0lILgsQudZZv00m%2FklRQ0fAdiyO0PnNvLDm42jGiFXySvdY4w1J7zvwe3Eg0Ux5NmPMQIqT6JbTbqbncTEymQ&X-Amz-Signature=4dc1a0f6fb02c830b6d0965faf67c9ac04137e325021433b1b4725d9420cbca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDJZ7UF%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHnrmWqijPeWYAdbvAOT4ODwIQj1GPmXNdAuQNIL78qCAiB8f%2BGt%2BJkVsBoDfzdvEWttvgNcVAHX59ICg9B6bAs95CqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLZq%2BWZmQ%2BC2FkfEaKtwDn%2BBncY6FqsAFNiH7i4DdjQ7vruGYzMyHyRsyyX7sDQvdpJxt4DyCoa%2BAOUzmEi2jeRE3I%2B%2Fi6HJ2PFntBC2MHmNihAxlgOLco0Ptgr4Z4MaF7hosJAkQhKpPHkos0VGsA7mhzkgkH%2Bg3JiAVwLlA6LDQvkqvrmE%2FqaZQEPIJSSjhNNH%2Fue57b6ZTjxtFV89vQzLZyd3upz2Vvmb3ztYEyjLrhGzfY1X%2F0xNnz1Zsr5MKVWvLz%2FKWy9jH4XWNLki3XsoeMex8y5llYfY%2FhGfpGr6NLUp9%2FMKYxTe6R767HPe6FeO1gY8DmEnWhOxRS9IWPT4GLqa4D9nBtK3xgG8H%2BpyfbQSyQKlvwyPruyHkjDj0uZnsrccSGFnGIMt2qVBJMNfJAKu7RNJb2%2Bb8k5cP%2FoHnXnoAwjHYEz7KDCWz%2FkfmVn6J%2BeFV%2FFSb9GsJuUbsYmY9kUw1GvAvEZ4f3qayy2Q%2B%2Br3O1T9c%2F1flaksEkCeiwEwvGi0eMm%2Bc43DeLiWX6YdpdH2fUulgA4OBm%2BDvgTL63h47CN34Vmdky7BfDYHvzVzmlpaI%2FKPS09FAWekocuBKyveHodkxEFxyso0QkFWCbrJZErH80kAn4W4XI2AEKHGYrOr97lbbRF8wwdTtyQY6pgEYqvym5detHthUChk9VC69FoLXKVEp5gifYj5rO%2FwvVvA0Wt8EDMVCFtvANRIZxo7uZ%2FWmjluskMRRIPJjKTMh3a9NIIKB1V0Amzqi16U2ZbeMmmlpLC16pqwylOJljc8EWKRVPdH0lILgsQudZZv00m%2FklRQ0fAdiyO0PnNvLDm42jGiFXySvdY4w1J7zvwe3Eg0Ux5NmPMQIqT6JbTbqbncTEymQ&X-Amz-Signature=a8253e87dedafc484921d2f2eba06883e89d01f39814349f1b8def24d7d23c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
