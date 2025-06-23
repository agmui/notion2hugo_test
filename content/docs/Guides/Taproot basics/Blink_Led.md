---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTU4ERNQ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCICeOvFTq0tAEBfIqUlM%2BCFiB%2BDAdMmmj4L9Yw7e7A4iGAiAuzs8OomygBhV5kEM%2FNL4ovUfc8J5KeZFQUnwTfhjtXCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMHrvryAgesIe%2BIgLBKtwDvEiEdNciqQyUAmczduSaPLbjKhOi724XEcNsDZNQTqXfDw0S2qI3gr4pj%2BLxlNIt75LBhhgFNgeph%2BGdi8ZJ6WEMp1%2FWjM9Z%2FvO68Z%2BqGu1OUo5%2F%2FIhTSBH1p1xVjKhWxDd7JhOiRODDjT%2B11pD2JaR4FzBNNj%2FQgQ39Ve%2FPb8rPOHVM36kxjhhHTSQud7gICVwT57rYRsjLZnKc1nBR5Ma%2Bk3cVI6PjbTeqgUlHcdOt5bg9pTjey%2FkPJZovOVunb9ikgSHVjPQvMRP8F1KzTJzhuYm1nOs1g5PDYC2YCVmpAUUA%2Ff3cj0g%2F8KCjeyl4GufO6o4NJAe0UgsLwc0JI4k8qI2S6fKO3uSjn%2B0v6uHqCC7LIjC3AxEbS%2FtIZek5Zb0mW04Ejlg2ykcLXrP7X8mjm5a0myoDkbAFokBmHAtJCLwBMPqic0wIGgdjt393biwK4R2KEPF%2FMl5QrLHTGgdM5SqIB2GNlFFyAbv7Sr9HBhPjKVMd3YaRdbW9MKbQayXQejX4GB10%2BzbfMqWmWbnVOaHq1PvcFFm2w%2Fv7lhaWTdZjTVrpgCbjPAIldKMnu%2FV6ULW%2BuAl1Yq1tRqrMdQgCHO9g1OpX9JNT0RArpWK40qU1mJnN5Mx%2FVcUwqPTkwgY6pgHKwjgZQqfWRTACMOFuWsLioR5XoXcVOwvLJ32tt04zTzrGnr1j%2BtG%2FBTeMRX6eURrV1TuNA4a0mdU9I7cLaFZ7tAQKDxs0YLw5yHT%2FPaIpm48C8InUA8%2BkymZCWrXhtwSP2%2FR0CGqpiXS%2B7vgw8gsI9a2fnEgaED2A8WswA1t06VHhqhGQQiAy6lwWtLVMVNX7cQ%2B2uCwtp%2FKmLzcmmgODRSeaGpDF&X-Amz-Signature=aecde8882c59778836b3b4a9e1bdba1a22ade39a90be709e96a13a685c19ce42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAHXJMN4%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIB7k%2FJGs9uqKHaedRXsDlSGDqvOGanVnVoOzzs%2BYMsf0AiEA7nhhRb6641yG7xe4B0cFdYIpllkaBUvz4xFwTXyzylUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEoEap9IRwUhZU1cDCrcA7RsaYo7cqIBj4MC8gE9lNk%2FvccXUXuiFB%2FlmfglqX9jN%2Bf7jkM6fCyc0MeUZKawemQUXlMfONjKE0c0ZYt1VE9BDT%2BsiBtZiRVOSK%2FcTZVn%2BqgDnhoCgy3N8cthSGRJmQJYbXvJPh%2BymVNxn9TEeA7jXLLSUdrhFe0EjfLdqjtthmjNcA%2F0NJa1qieUNRWxdOjBqUBXYnDcv%2FZkqK0YTqR%2BYvnJiokSpjSeHrZWwkoH8%2FmyHOgostMzoW0utkMHAa1L9Xlocbl0KCQoXc%2BQqJIrZFFL4aGK8Dt59c4Ie2XM4RJVroAt%2BgXVj1gqunJmq9Ns6TBqv4CcTmRsQAkJPFRcbsfPXDPAtDcU7wSnik9Ws2%2BrtUHdqbscApskOJO%2Fxr1zWMsMRsZH36aDZp9utNUI94SBfYpdoc6sYCFf1D%2B2ei%2B7ByRj92haKZoZ0Pklzx2MTTtHX5NbJRr6xW6IhXZwoMBO1LkX4vChcXLEdEw57O%2Fb2JYIZy5f6pHhPiDYrCgOOatuoYQIGLhqiUPKTr%2FrRy5kbSbwFDfkOGBoDrPE9qMR25OipCYLLv5Ow%2BXJo1s9qr0M3wbqD%2Bl7RneMJUGW1zeKxViPLgl%2BO8mPFATqI0I2jAgwmjDoRnJtMKin5cIGOqUBf80rq7R7wMNHDvUiCUbUOmpQ1nwqHAL1XNC7fV2kleldHXDdd5tKI%2FbNQ9KE9QsaFuBvJojnPl14Vub9o%2BDhaA7xI5SP2W04mS%2BadmdVexhSCRFVO9%2FBF5bSf78PZoZQHAmZ7p%2FLEl9Tpob0FFRwwSntrmdWWl8uRECd4%2F5ucIKSa97SrekmPY7jNidH73002INmnk0P913a2dvNGWuqvzXkjtOk&X-Amz-Signature=4cd54f7c5c164288bd12193427f0e7e8b3e45b43676f7c9e3b5b2dd642b9b548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
