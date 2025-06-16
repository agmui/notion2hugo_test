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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5EURB5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICETRQ2BfweQLXI4UlLhpqhqGTnTdITvqFMZDyfh652LAiEAmxzpTmuYTvkSq4tN2qaM0FvoaMt9AHGlum4IYU%2F7i%2FQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOa%2FZO2VVCWyUbO9hSrcA%2FBxX5VXQTSbQMinO0TBa2ly9kl8Fn%2BPsGbiORE%2B2BIXfkEb3rGdqW5Lzvm4sNQg8rR1usDiiVfp8kwf59fJBOdJKbi3UWheZBSaqdvkEeswRTCicUP8wevO1HYR5ImBCdsl455jgI30tbPkxTADKlKXvOcugoUgwOU5JS%2B%2F2fq%2ByArj8CWHNY0TQLsr9bpRJIUtIAS6osI35A9nKj578d9PpjNBxm%2FkVRZnoAmgzYVoqMmpFlWIZ90YW5dv4oNLPHcLcHVv3JuSpoCpYASHJiJNm2lQ8F8I1kC7BBSxYM2zRgNlD4udTX7IMRCtoD7yNeSpL3iQV%2FX%2FvJBZaxJ3dcIanwSFRazj7hzcvDH2G4ncE902YsORKl3Ow5msJEB0J%2BGD1CTZRioCR8KoV4Yf%2BJWVBIOt5hFZn5c4N%2B980o3CCIuyVUFIkC7j9XlWxbtxU36zbKM5kWncRRYSSY4YhcbkwocD8absZNvcPQ0VZkOnk%2FBPkzhksPddCPGz%2FEtPSDBNFkx9DOG4akihR3eDvSnV6befOg1GfIagzx8JlK2pF620n0xTU8pUZmlqgWciJx3IG%2Bt%2FeaIrdzzO4wZZA0Qe%2FHV1tZVhHVZ4LzjhZKlFw1CxosSwQXJtIfTCMPKawMIGOqUBPMTJR9n%2Bq3djpdV2v%2Bm7a3CsdUANNNcKi5SLKYvYU%2BqqWu5YwiUZ0Xi%2F5yNbhNLKDNuUccNBZtvXUfxXecY8U7N%2FT0kyKTl%2BgHr33cbFnk%2Bp84pzEGyt5ZllKkOQrM2nxFCPoB4mh5YzhrieN8Q6XZiy52%2Bj4lbbW%2FwppdTSPZvJBdWuukZMNkvNLhLySXjHPYR89zg3MYWQI%2F0Ex8jpmANVfbCi&X-Amz-Signature=9065c206c8903a00b059c9e3e7f275e3d304aed5eb99772f3a54e5e34f3e1e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5EURB5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICETRQ2BfweQLXI4UlLhpqhqGTnTdITvqFMZDyfh652LAiEAmxzpTmuYTvkSq4tN2qaM0FvoaMt9AHGlum4IYU%2F7i%2FQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOa%2FZO2VVCWyUbO9hSrcA%2FBxX5VXQTSbQMinO0TBa2ly9kl8Fn%2BPsGbiORE%2B2BIXfkEb3rGdqW5Lzvm4sNQg8rR1usDiiVfp8kwf59fJBOdJKbi3UWheZBSaqdvkEeswRTCicUP8wevO1HYR5ImBCdsl455jgI30tbPkxTADKlKXvOcugoUgwOU5JS%2B%2F2fq%2ByArj8CWHNY0TQLsr9bpRJIUtIAS6osI35A9nKj578d9PpjNBxm%2FkVRZnoAmgzYVoqMmpFlWIZ90YW5dv4oNLPHcLcHVv3JuSpoCpYASHJiJNm2lQ8F8I1kC7BBSxYM2zRgNlD4udTX7IMRCtoD7yNeSpL3iQV%2FX%2FvJBZaxJ3dcIanwSFRazj7hzcvDH2G4ncE902YsORKl3Ow5msJEB0J%2BGD1CTZRioCR8KoV4Yf%2BJWVBIOt5hFZn5c4N%2B980o3CCIuyVUFIkC7j9XlWxbtxU36zbKM5kWncRRYSSY4YhcbkwocD8absZNvcPQ0VZkOnk%2FBPkzhksPddCPGz%2FEtPSDBNFkx9DOG4akihR3eDvSnV6befOg1GfIagzx8JlK2pF620n0xTU8pUZmlqgWciJx3IG%2Bt%2FeaIrdzzO4wZZA0Qe%2FHV1tZVhHVZ4LzjhZKlFw1CxosSwQXJtIfTCMPKawMIGOqUBPMTJR9n%2Bq3djpdV2v%2Bm7a3CsdUANNNcKi5SLKYvYU%2BqqWu5YwiUZ0Xi%2F5yNbhNLKDNuUccNBZtvXUfxXecY8U7N%2FT0kyKTl%2BgHr33cbFnk%2Bp84pzEGyt5ZllKkOQrM2nxFCPoB4mh5YzhrieN8Q6XZiy52%2Bj4lbbW%2FwppdTSPZvJBdWuukZMNkvNLhLySXjHPYR89zg3MYWQI%2F0Ex8jpmANVfbCi&X-Amz-Signature=a4ea99f379390b5d1953efc9f13d1a0bd9b3d20b417df546a6e1da263589de90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
