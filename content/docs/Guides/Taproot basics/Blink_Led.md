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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644TGQUV3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEik19ajM5IWPeiuSALdobCZTW7J8zlX4h48bl4n8KtuAiAg5DzKczH4EQAB23Gz5PuGihphFRzG%2BDK2qAwGhMwUcCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtviLNtz7%2FGowhzBcKtwDd6f4y1sMXDedwUm2Zm98X%2BqwdlqxL3go90rgNfPVogfGWzF5hh5fi1H8Vo0kTLCk0N2pUieQEzXw%2Fm2Uxrx8gcyXcJjqJa0ktDdkWnXgP5OTEBEWf5omIxOUGWMr4ZCRaS24fcaTXeqzpOl8OD%2B5SFcskQW%2Fz6y7Y7uZkOgDZTybkaF09BjKixOFEbPwz7tPYXbaF35laMhBWdQqlAwCPeyxOU5tIwokF77VbOdBHRfda8ZoZVrUT3j6UaiVu516JoibYkonPkN%2BDk8R2o3YwpOxP5YhlV5bhlraIFTcNGzLfSuPv8BaWDa7jndV1%2Bnik%2BSWBBuXBTdEere6XFBOjhj1QtQ3HFNXLjWfWPHLUzw0DviNnssiTDqsUE2ZeRl2SugMZkHWfDet%2FRd%2F6IG0pRIFkhjkPKjIn1%2Fne9daS5WgHgf9R6aJdTBMMLFyVCorpDbFK6%2BIdqERgvrFolVNTQtNz6yx%2FUJc3mz6gB8R2G7FzoTlf71wBNg5WjDZB6YsHne0qthHI%2FBfPByrcSnO0OxYDsi%2FBNkNLPpEojSmyZsftYtKzjsWCsvOaeRa9wMnv1np4ui5X0%2FOazzm%2BskTfYoPc7SRRq6tv2xxSHGwhIfFpQ0z6LUmX%2BK61S0wkrnQvgY6pgG7xtaC7FrwPvn5Vi9UwAU%2F6bDrP9%2BNo8e9wqfjKRSA8%2BO92x5m1Ovjdua8DIt9vGUdWOjWZKvIwafVZnPFfcrEcpxS%2Bvq9yMc9mt3mcbLk4jtM5Mhxzotp6d4pNY0Y2QGE2lc4xRZFwtN%2FURH%2FCQqMyC8ZNtklUG2cB42B%2BG8RWFsCWKB3QwNRt0IlOdnAcC7Oh%2BzwIYodWY9CaED8N2V9ihrSZ%2BBU&X-Amz-Signature=70a2fe77c277b305347da0a5be4fd680c4292685a057fb98aa732d3b98648b31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFHYRUE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv8ijhciCXXpCS9Atwo1%2Fnxj%2FNI8kQiVNNyEkUNSrjZAIgAQwCpjFIFRFb4sTsmG9zVbj6T2LALHnNYr0B1QssbXQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMK8bEODKrfMBN4rGircA4L%2BttOUCHMFWA0hwtLDC8Yeks45SK%2FQ22Gfy5Pv25Y5%2FrBgFJtzIRoFSiaZZuByY9Cr30fqrY5Y%2F6GHR7zJ0OXKaqzkTltHDYNsiTFXanKRDmZXKWb7GBP%2BLLWOVfezXbN9G9NR%2BOrCNXLd29wgQuy6rSUg2V27CC46vcrfpjEEqIuVg3UWgCiY%2F3wzTqJ7tC4An2eu17lqogmJ50kOU%2Fx%2FCq70yKqNbaW%2BblsRh5CoE%2F2YuioNHFwXds08jk1SovxateOBp%2FnBbqqHRatfkYc1ZbGSr7tVsAGRZHtxOTp3FXm8lFxzec9WUrrrkyd73%2BfCanW61nDdsQ38fdaFE6I66hDg%2FgsRcGyWN%2FfAVOz67pJYfqvWWrK1Rff0KxiTm7XexHiaH9mZFdFofFi0mjGnKcgIr521J8idRag2tu%2Bx5CGoX4mTMYSB7sIiCi7Sqkhk7jqIPImW7JXun3C%2BqV4wtovtCxdNNFcBN6PUZzd7990c8B6AGjxwlgIKL9hLKyHdKroiLiikGU3G1yFDoq%2FiGXLUxbsiuFbGnPqJGnYG%2BzD6hJcxrPWYkGFvOy6l0I0dh4pVbYQn6BIZ5g69Zg%2FGqhkDqlp0lbLE97Klb508O51DeUNfV7iiNS%2FMMLi50L4GOqUBxAc4SjSX8kPsbBqL79HoVhQlN7Km6pAcXH%2F6IQo6sj307Zjgi1BVM85xUHb7qy89MAxRFd03EeJZuTkwh1bPlzt4FFn4Ki3XX9Kt06eADAiFp7bhK8YtLZE3KfZHvoF3b3QBgacvVdXK0p4Nd0umjvYKUpenrmD8XV7HOnkJ2HOuEAU%2BCeT3wTwVHvt0fKZhugjfTVZ%2FsMwwowzk4uIQMqOlWY%2Bc&X-Amz-Signature=4cb04aac37d359a83cb4ee5d39c6ed345e62df2496bc142a2698eeabe247da7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
