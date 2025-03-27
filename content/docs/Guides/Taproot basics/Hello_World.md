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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJGJ65N%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLpRizrUIW5HCoUg19f0n5ew%2FZcBTDZK5NiiP9psYO3AIhAM75n%2Ff2grR4%2Bu7ZT0H51BQ84gYvtosVEEmwxHf9EiTSKv8DCEoQABoMNjM3NDIzMTgzODA1IgwO7wXPB7CcyGCXdfoq3AMk36dEmsk1mkwQ0WXIUO%2BJjWpfa3uYbcFq4%2BF7Jutuhca8Penw%2FmC36gQoWdWTEPcsB5WSqf9rUWBq33G93lL%2Fr%2FmSKahvFcrA6tSSu%2BeJy55rBwJD939aIF2na%2BS%2F6%2BSCHcArcDoR%2Ffr7bqnS90tvZEl8AhuqGNkYJ%2F6jKKQayZbPCpqgs6EQHuHyaWCR9xR9w0lhoFw1Jfh9Ns0x%2ByrSpfA692DiFHzjqtFSaDxSuhmQP6H2neRIOCPxRMVYz%2FtXIHJ0DmJLcqxUCnCXUqppZJXSdt7gPf5ZyTt22H58JOJBrS4K2AweDCe3bN9h4uuH%2Bn7pIXJ4cleo3hs%2BBLta3ZqjwwOvZEr384KALEMoAifrnen2anMA8vgmHj6RsKLA%2FORGKsYwuuvaDZpa6gi6a3zYb5ss9ApcmHyFjmVmHdLKyZosCUfVXRV7ggZusp1Hc0iSpbQxm8wUljNFQwMzEaDjP0nKlI5DhiBLOimKY80L3G%2B5UgvUhJVUuouICLYDiQSDVZloaTftmSa8gSck6gsPqJCz9HkNurth%2FA891VPvIlwNYulNAdQfky2Yb5nXL78ZD6u6yAQMNsDV97U8O8aBOUJzouKhxneJ%2FuClsLHHeYHNkVkKt0uXRzCVh5a%2FBjqkAUpIoEG2kNAvQC6Re8o%2FckARd%2B9keJpe6ctMZWYyl15X9nMZbexMM1fquPCTeTiIOhTGbvgcFVWlyETfPje87B0Bh1h16oims%2ByaJjNQFipaBV7t%2FPhg3av2AF6XPlksHOgJ8OuaTBRCPsUHD2DZuNMsYGSfnL9tSPGx9dsx14IudYd6r%2F1fLBqWu8htNcrVB8ZXgebdEj47aujv0W5lWuzN9c7Q&X-Amz-Signature=ed4cf6e4f03db82624635be4fedd1dba0e58c67585cc8726683da53d4072c69e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJGJ65N%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLpRizrUIW5HCoUg19f0n5ew%2FZcBTDZK5NiiP9psYO3AIhAM75n%2Ff2grR4%2Bu7ZT0H51BQ84gYvtosVEEmwxHf9EiTSKv8DCEoQABoMNjM3NDIzMTgzODA1IgwO7wXPB7CcyGCXdfoq3AMk36dEmsk1mkwQ0WXIUO%2BJjWpfa3uYbcFq4%2BF7Jutuhca8Penw%2FmC36gQoWdWTEPcsB5WSqf9rUWBq33G93lL%2Fr%2FmSKahvFcrA6tSSu%2BeJy55rBwJD939aIF2na%2BS%2F6%2BSCHcArcDoR%2Ffr7bqnS90tvZEl8AhuqGNkYJ%2F6jKKQayZbPCpqgs6EQHuHyaWCR9xR9w0lhoFw1Jfh9Ns0x%2ByrSpfA692DiFHzjqtFSaDxSuhmQP6H2neRIOCPxRMVYz%2FtXIHJ0DmJLcqxUCnCXUqppZJXSdt7gPf5ZyTt22H58JOJBrS4K2AweDCe3bN9h4uuH%2Bn7pIXJ4cleo3hs%2BBLta3ZqjwwOvZEr384KALEMoAifrnen2anMA8vgmHj6RsKLA%2FORGKsYwuuvaDZpa6gi6a3zYb5ss9ApcmHyFjmVmHdLKyZosCUfVXRV7ggZusp1Hc0iSpbQxm8wUljNFQwMzEaDjP0nKlI5DhiBLOimKY80L3G%2B5UgvUhJVUuouICLYDiQSDVZloaTftmSa8gSck6gsPqJCz9HkNurth%2FA891VPvIlwNYulNAdQfky2Yb5nXL78ZD6u6yAQMNsDV97U8O8aBOUJzouKhxneJ%2FuClsLHHeYHNkVkKt0uXRzCVh5a%2FBjqkAUpIoEG2kNAvQC6Re8o%2FckARd%2B9keJpe6ctMZWYyl15X9nMZbexMM1fquPCTeTiIOhTGbvgcFVWlyETfPje87B0Bh1h16oims%2ByaJjNQFipaBV7t%2FPhg3av2AF6XPlksHOgJ8OuaTBRCPsUHD2DZuNMsYGSfnL9tSPGx9dsx14IudYd6r%2F1fLBqWu8htNcrVB8ZXgebdEj47aujv0W5lWuzN9c7Q&X-Amz-Signature=4eea8f6e8994a3944dca342ae8fa5d7dc52f4701f32d6efc2927f3d1da171e40&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
