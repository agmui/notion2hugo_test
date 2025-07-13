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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEN3PQJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERwhE16fWvi2W8jTIqmZeqMDParquUlNu97ST30qa12AiBbjf84zw%2Fy35gvY2D1J4nLIpaIBNKkUsWMqfGgE46LCSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn8Swfp3oFvqTVPviKtwDaCVTfFN4XM9rUhP9IVFbHlPeQP4U8wbC8pB5ppwtKqfZ8BFJmf%2BcQn3rX0Ia16sNdoKhoFqo4QBLtIr%2B%2BBQGHRv2a%2FMMvIgjAeAi5vRjU%2FcWjVzKfLi88GMsPuhYNjYLLAAdPNbLVWvPhGGSDoqqEd%2FpsfjZpVH%2FuoL94JnGXtJYqXe0A6GVDGfMM9egvRYXD0cTt2SrTQsaFxwUB731ZEdihrRtruUqU4dwSVgfqsiUdgHR9NE90M0Q3z8Fz1U%2BpJYbsQtGpUsu%2BEIJ%2FmPz1dvQXjakuF4XE72jyslIZwkR%2FaEw%2FxeerXZ%2Fl55ciZ29VsVKEM37yEEOlJKMb3kSrb5JbBz08Al9IMEJY08aXX8hpeM0JnX6qCcDcJmO3GfGU%2BVJi5VeW%2FqVvVYfuSdTsrTKBjRzGin%2BdSyQxUJNnuueUQ%2BTYaL81qK9MhjtAsK5ts3n7m3ZfytzC3ajiKUGCJYcp9BRqAxaSC25eD7%2FW4Uu9Cz4iEStTUdP8hKhCdUrqN0QssLE6gtd8MwzZyGJvHmflqLc6YLi8YJkPZ1zWJOTl7Glu%2F6LV%2FG5uZa8%2FmqRVewzLxBgQ0L1WJg%2B3ar%2BMDzm6HFIV3atPSf%2BQLadE6mXyNS2%2BIr30M%2FL2ogw4djMwwY6pgGoCXpl19qiXXppeFZ0mQpRg7U5PHEbPnGEOL8%2BLyI6rkxHaDlON6IbWVuKJEhjrYfLNbJ%2BWDpq7GAhWzPlz64t4%2BDcw16XW4ftkajkgZ7e7i%2Fs1%2FI1tx4J3TC2VHK6%2BGZPbX4Jez6gbnx2T7y%2FwcB84dTPeRDcvhk96g%2FucSeNnWJyEpf%2FSe7JubxO7vipcp7Y3ywh9u96DCrq9K3N9iEuqhk72J02&X-Amz-Signature=4c11913e6d42de6a5da60bd11ec18cd46fc73e59c689589c2ab45cd3f4ab7f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEN3PQJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERwhE16fWvi2W8jTIqmZeqMDParquUlNu97ST30qa12AiBbjf84zw%2Fy35gvY2D1J4nLIpaIBNKkUsWMqfGgE46LCSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn8Swfp3oFvqTVPviKtwDaCVTfFN4XM9rUhP9IVFbHlPeQP4U8wbC8pB5ppwtKqfZ8BFJmf%2BcQn3rX0Ia16sNdoKhoFqo4QBLtIr%2B%2BBQGHRv2a%2FMMvIgjAeAi5vRjU%2FcWjVzKfLi88GMsPuhYNjYLLAAdPNbLVWvPhGGSDoqqEd%2FpsfjZpVH%2FuoL94JnGXtJYqXe0A6GVDGfMM9egvRYXD0cTt2SrTQsaFxwUB731ZEdihrRtruUqU4dwSVgfqsiUdgHR9NE90M0Q3z8Fz1U%2BpJYbsQtGpUsu%2BEIJ%2FmPz1dvQXjakuF4XE72jyslIZwkR%2FaEw%2FxeerXZ%2Fl55ciZ29VsVKEM37yEEOlJKMb3kSrb5JbBz08Al9IMEJY08aXX8hpeM0JnX6qCcDcJmO3GfGU%2BVJi5VeW%2FqVvVYfuSdTsrTKBjRzGin%2BdSyQxUJNnuueUQ%2BTYaL81qK9MhjtAsK5ts3n7m3ZfytzC3ajiKUGCJYcp9BRqAxaSC25eD7%2FW4Uu9Cz4iEStTUdP8hKhCdUrqN0QssLE6gtd8MwzZyGJvHmflqLc6YLi8YJkPZ1zWJOTl7Glu%2F6LV%2FG5uZa8%2FmqRVewzLxBgQ0L1WJg%2B3ar%2BMDzm6HFIV3atPSf%2BQLadE6mXyNS2%2BIr30M%2FL2ogw4djMwwY6pgGoCXpl19qiXXppeFZ0mQpRg7U5PHEbPnGEOL8%2BLyI6rkxHaDlON6IbWVuKJEhjrYfLNbJ%2BWDpq7GAhWzPlz64t4%2BDcw16XW4ftkajkgZ7e7i%2Fs1%2FI1tx4J3TC2VHK6%2BGZPbX4Jez6gbnx2T7y%2FwcB84dTPeRDcvhk96g%2FucSeNnWJyEpf%2FSe7JubxO7vipcp7Y3ywh9u96DCrq9K3N9iEuqhk72J02&X-Amz-Signature=a08614954a092cf5430b2de12b0828f96c6e36fa55e445eb6dcb67a427a863c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
