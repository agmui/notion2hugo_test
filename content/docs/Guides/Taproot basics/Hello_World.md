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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQP4X7R%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCZoANghlw2HKHt0ERwGvQ8%2FlaOENi9HgEJePrXqcJB0AIhAJZkNQeslXbWjXFSOrPWSdOeBkcpRouDw0LEZwVpRbtKKv8DCGUQABoMNjM3NDIzMTgzODA1IgywOegwjKGSgLGG%2Fkoq3APM1orfW0fLz7MX8hAswYe8ZKX2hWspBFb%2BhsPBM7D8Ka3VlrRThwSvuFu%2FMb17HQ5UpwOEEilD3Idh4TIQABhCDTqIS8IACbizDJFUdnD7sx8ndjSK1ul8w9EK6ozUXPc3Fzv3GF9rr0eVlzoofE8mpzywSEA3TdL6mI%2BJShQMAFimWlx3zAwiilT6cHCJbuyu9FVJBftfgUnqzyX2AkWj11mAoaDGq1%2BGEeVkPSSckwHoGFbNnKeh5OYByk6xZifFdETggkkWkztVFowsNLca3spbH5ie8ug09mCdEJiMQTgMtlNbrfoTGMAInO4MIq1w56kdYsWmnqtDLNs64nCD7nnJ%2FogQ5k6MIXDybEOFAMPX9t9FiJ1jkveKYkURGnYA7AGb8Nm2vIvKcARm8bUgAUsyDgPJUfWOG0jb%2F%2BgIb%2FWuoBgWFT%2FkwX2tCrNNpE1S8yymo15%2FRiKIkHETnpfxLqdIlKWk2933z6ZYUhV%2BjOB15%2BBufNLdBnr2dj3hMFB7h5xXhCR0GeCyQTC7fu%2F%2Fhq5OeR1XKIkR7fNVWVXaNuBQfDwjAuYQu3%2BjfeddLtcACIT62jV4B8Nkzn8xQUrtLRSX45zlBPBHZHYtbPZQ%2BrQeW1cUohyw4VglZjDiy%2FbCBjqkAeYoTE9RgdI%2FVsG0kZnLLker41lUs%2BUgrkaboICCil%2FSctOaTVHuv6SWkvAWyk%2F%2FebLRkbNitQKs8NZdo7l5FLMSqXDPLQT7fPDVWzKfaELir3k4Gvlvs30%2FSYq%2Bq1im0iizXici%2BNi8Rhz5rXDN34InMQlqtvIgjFhkpajNy6LUAmsMkoI%2FCEgbYk3W5MQbMgMyEDEdKwCLMIH%2FX3vEQv4zv9ED&X-Amz-Signature=df246207005c2da9044947d8ee3fbfc13066bcea85e4add894762af7e17e32a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQP4X7R%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCZoANghlw2HKHt0ERwGvQ8%2FlaOENi9HgEJePrXqcJB0AIhAJZkNQeslXbWjXFSOrPWSdOeBkcpRouDw0LEZwVpRbtKKv8DCGUQABoMNjM3NDIzMTgzODA1IgywOegwjKGSgLGG%2Fkoq3APM1orfW0fLz7MX8hAswYe8ZKX2hWspBFb%2BhsPBM7D8Ka3VlrRThwSvuFu%2FMb17HQ5UpwOEEilD3Idh4TIQABhCDTqIS8IACbizDJFUdnD7sx8ndjSK1ul8w9EK6ozUXPc3Fzv3GF9rr0eVlzoofE8mpzywSEA3TdL6mI%2BJShQMAFimWlx3zAwiilT6cHCJbuyu9FVJBftfgUnqzyX2AkWj11mAoaDGq1%2BGEeVkPSSckwHoGFbNnKeh5OYByk6xZifFdETggkkWkztVFowsNLca3spbH5ie8ug09mCdEJiMQTgMtlNbrfoTGMAInO4MIq1w56kdYsWmnqtDLNs64nCD7nnJ%2FogQ5k6MIXDybEOFAMPX9t9FiJ1jkveKYkURGnYA7AGb8Nm2vIvKcARm8bUgAUsyDgPJUfWOG0jb%2F%2BgIb%2FWuoBgWFT%2FkwX2tCrNNpE1S8yymo15%2FRiKIkHETnpfxLqdIlKWk2933z6ZYUhV%2BjOB15%2BBufNLdBnr2dj3hMFB7h5xXhCR0GeCyQTC7fu%2F%2Fhq5OeR1XKIkR7fNVWVXaNuBQfDwjAuYQu3%2BjfeddLtcACIT62jV4B8Nkzn8xQUrtLRSX45zlBPBHZHYtbPZQ%2BrQeW1cUohyw4VglZjDiy%2FbCBjqkAeYoTE9RgdI%2FVsG0kZnLLker41lUs%2BUgrkaboICCil%2FSctOaTVHuv6SWkvAWyk%2F%2FebLRkbNitQKs8NZdo7l5FLMSqXDPLQT7fPDVWzKfaELir3k4Gvlvs30%2FSYq%2Bq1im0iizXici%2BNi8Rhz5rXDN34InMQlqtvIgjFhkpajNy6LUAmsMkoI%2FCEgbYk3W5MQbMgMyEDEdKwCLMIH%2FX3vEQv4zv9ED&X-Amz-Signature=7b5ed53a9516bffce7eface7a7939cf07d85afa3a129fca91c9d8917724e4936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
