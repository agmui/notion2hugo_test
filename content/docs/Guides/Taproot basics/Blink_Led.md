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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSE4AFY4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7EjlBT718XR%2BXHwixMtauBID1MBB%2F9IytxqyxqOCWzQIhALzIaWrEy270NLfLFlFHXHI7Ki5os1hEgGh8QwZyxRhiKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGeM2pNDUWQEnlDesq3AMRh5h6fqHk8Ktg4TA18KEZudtybPTeQpCZgs0M5XHuLwsPaNdLugKoZyK85HWPMHm0ldMrQLNU5vB9eo5%2BKHn7LtCysHEuaHQQxxeqhggEgzePTImOJlCHULUJq6tq02CtjAnOgZZqQyJbTb3t1EqHx6nmh%2FRAetQ0ijZKZp%2BYFnFLnIbLdUUdHTCZT771TgpCq4M%2BpK7YxG5QqVOtzVdNSLr%2Fpy717JKmCxIW0jOBMrEWzt9eWP95KTnEzp72Ub0zJYWbpeyO3Ld06xumdI0dUkStpw%2F67YLJK7KQL%2B6tKw4rGKuk1UrlOm5YLuqsxjk0AJp8ek4L0easDEjQib8GToUly0xnj8vDVaTSXeBRDA1jW%2B1ITysHrQb6aTh%2FudWAfKk2rFfKBUN1rVDaJo4uQu33dMA3EafLTujqZZ8LTPToCZrqtycyZx1tTptHGWIwE%2F4zkpynOYAU6HSU2NTykJ1laD9NKlTsiNbMzushXaoAAwOf%2Bj4QzYvnbpfzHXsO3qqginoPP90tVSIyxU6UufzLAD5j1X5Ti9JrWtkLFxbucCxSNNEy87ZaiVXMJLA%2Fh47UretTeU%2FxUYfbymoeLjaHg46fljaxYcfFF3pi%2BAJUx8U1PrLY41STNTDJq%2BbEBjqkAQcIbxw4asJvfY%2BwGNkLmTfP9%2FDDepKxtgpDiO2pEFiNY%2BZuiEaD4VCz%2BiOtik1WtPALQRJRoAmasTYlzIEGZv%2FFIp4pa0e0JzejJlZZ%2FpZ8rallPxlPFY%2FPXaYxtQCah1cTCzBVLyD3O%2BkbBDmN5o4MaZNg%2Bf3tUflBnezxEdrn7ifOIt7H3RUY5qp%2BXLGjaFFy6TPEgsYPNg1BSZNZS5wTBcQD&X-Amz-Signature=fd60fa76bc7a04b0cf70eb1c07a0db30fa93725f962da7592f294e87f4d886e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZBUUKK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOOtKpGI5QOgE1tZNnbnVSEbRD5qF2WL7hVKqNmCNz0AiA2L3YDpfESjxTX%2B%2FRSfIaGQPHqePvrzbdlkqBYjmC6gCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy45Or3LwhhiUzl%2FKtwDrOZzsi%2FBQaKFr8M5Y6mXMuZ3Vfsr9pQrOrCNa9a%2BKckI1IGSL7nRcrqcPN9tHYidUuUtmPjBfPo%2F2BCuaeiNZ6UCBYWqusuqJSk%2FiAJgYwGqcDtBN%2F%2Fwe2mhuRATYGTp5BR4ak2hncGGdm2oraymtSvnQigYgiLMC5hOC41H%2FW%2FC86l9N2ZuYHfjuutBEKgPi7gOv1ypNpcdCROKNw%2Bvq4FNk%2FzLz6g8rj1hOCLouAcenjNxB34gKcCYhpn1I3B9VZPprWkR6O3yapoQMqFiiftDvF7KkxwuTJAOATGlHklT%2FKTEZ4Hx98TE%2FZ3m0HNZmZmcOeExR69Jok7gYbvqVHxE%2BDBhsWc%2BA9O%2BcTFtf4OAKuiC%2BQZ1KVdJqm%2BzDrn09RrDHYKvXItjntWz%2B5PDOYM6COgRpjyfiqnMyb8q9Es53Ke2rCybrpb2X%2B%2F2xJHWGv2vD4PN0eJddgomPFCkxxkL8S7AkBmQiBJuUrUyCT7UY15Qy1ygnvx4p4M%2BgGg7cjUJMn8jvQblrn3ZmiuSUJPzm2PUAlV6AVFAlmDQFy8EQCbCa4vsOLhNCcMdJnUXDh6l8P2nrz5yZ96qRZmYnmw7vXjdZErvqTD7TG%2BNFTkf05jf%2F8P0vcXsxwUwpqvmxAY6pgHhaIw99emU8PPfszhc231kcjfZ7d2XRKNxYD1lx1o81Uf9l8rJDLjIC2md38hy04pSbHT6c3NGfHHgiWRYXtgimz8vWIiDJF2v7enOMgVzEDiLM8EFA9KMipYM1y0pCa32MyOUkYHzsFLGQWskaI6LwRDUshsmpYwks9AB79eTWoa6t2mQNwvTPYabqPo9bPwu%2B6xdHRkeT7BPBQtoiBuPGDJKT6De&X-Amz-Signature=be4165dae7a51ff9275d225fd13b003610ec1c84faf7f6d3623cdaddaca62c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
