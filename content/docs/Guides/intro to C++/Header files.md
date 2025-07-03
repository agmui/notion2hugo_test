---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C3ITS2G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC7WuHOHxep56HBhZGTCZw9UDm8bGuQa%2FZXiWaINpGftwIgUiZ8qOMnOjNvpA%2FZEKBWOgtXJPsoMEazxvBkiqotSGUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0FifJpCgMUEASv1ircA2lNFJzm5kSreKCFwLIY4aJdothgXdzylZ0J4VgJ1UGR4MvR4cGmVJPY6lapYq0vnN6YrWzo1aI81IKpUk2rdYDblLKp5a6E4yNrSWaWljg7oEZdUuTqQG9AE3LsLmWmSMgwMsrG1Sd%2FG2T7GcTY7dEegD24NRXBjncgAxyJkeiUWUX4bM0yim74%2FU5JDuygkhOK%2FJ7s2c6%2Fhw2yjY68TJdpbyqIWW%2Bd0Xp7XRFBF3lS8zXOhdyEa9j%2F4FmvSwFcrrTTJH252z5%2FVRsPXn8d2bN6sBIFO%2BxT8nHmT2cPDMTyWh%2FW3bzu3igEWn0GfAo9JuPj6jH5xtUCAeAesOAHig6ra7s1aHb801LV%2FWepVajdEWumMtLOfL8BuS6YYMG5UAq2dhx2GBw2UqqGK%2BWmeXjUDPiWr6l7BPkvYSgZm%2F7IgMNbC5QkMiv2HwNXJYolViTV1faU7y41qP9IlUrHmsCmx%2Ftqch5Pc36yigrn6EDYVEs6yrqPYSXsOfeiLPRQbfxyXRx8OTmzba48UyqppTp%2Bl%2BAJ%2BD0S0eNdEHLUMVvTDppwfRAuPeEjkffJvRcrORtFP3y2gh2oHzeh9%2BmQzDXvjx3H6p1FIwiF%2BBAsKg4LvJH0jGNoe%2BQ%2BYZa1MImvmMMGOqUBEvlsaoZnN0kKZqoGtZzQ2f2JLDxvl%2Fk%2FN26jzz6%2Boigo4j1Au7Pi7SMve5I9GRIwr1Ubb%2BjmlCEp9JBwi6jtd6MyPtWQHgRkfh0ewZIPWDLeEwCdqQeP3Y%2F0bNtUCTteThdv8k6FqdaL3Rsknu8sg15cwilGjRQSnN%2BYh6EYFpLjM0qpSsy3g%2BzXVukgs9tQK24gg8ZmBns7Qh1tMv2Pj5aim80R&X-Amz-Signature=9e130cd1f65cc1e3e21c1d475686f7238efaa6658658278407b5e5ed3529711c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
