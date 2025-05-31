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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMRGD5IW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FVo7Mfj8n6qhOZVQUBDylitgoqBHio2LOloDd2DvAFAIgOXMZZXZUFqrI%2Fifbeb%2FAI7C%2BcERLrmi4RByhaWIkPJ8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuz%2BBBhb3CaAYRl6ircA84bWvnDk0igUO%2FWuisbv6pbW7TvwoEIweXUzQ8TFjkhmoNhjosIo%2FE0rdoa0aIVD4ZJzQpv0o6WCDt6buH2%2BHGWM75vute8yVHwdqT3IVe7m7aWHjrA2V6U5qdppro%2BqFqjbuA7Bffl%2FpVeSdbmJqIY1UgYwqdamrxfo59%2B4IxR5Ad5SmHNCBODs84MTTPmaoxzTAqzi5ANyhJf4PnC57rzJvo8MavbttGPvJIfjYI8vh3Hxe0SJkC%2Brbc24s%2FLCoz55lmLRE3WQvKeEb3BDkFbBm5S7cEYA8D98MExuWDcsD1mrjPR9%2FZCqIEHK2ja%2BeeWoT6Myiz5czK73ObnDixUqd49JM8saxMcFLnU%2BkP8Pw96jGOgg6mrdC8hNllpO6ktBlon50AxNo6TOy%2BLmZ7DBfWytgAQ9QcFPlglQffv7qQxiFLbEQlZiiox9HjXcl%2BTTFEZItzrYIB4q8nLJ8BxuISqABzV2%2B03awBplbCwU8e3PefIXXOtvOhvfqa7OPTjkeexc9qfayFr7v4JkCneoYVcHR3tgSYyRcL7Sh%2BH86BO3gOzUNmBvF8t736JKUugPZwEmBWjpxKHOA8I3bgLB0lk9Rm6fsp6erL9%2FQdUpLW1oP2zJ%2BZzaewYMO2e7MEGOqUBBNgZhPRpo2%2FnnfBPX0Rz8Fk4WoBgGdG1440w9DwSpGBjCNQicxtx31kWV%2FXEgMrM0EXShizZUXtqZG0KBhxEhc0ReScrJsMdc0SGbO5jEczLcT7NbB3NGcwSoNabLTg9PShuLLD2mFEvXWu6Gs05lBGg2X0b%2FOFiSSQVLaItyfHXsx2aBa%2FkqmHFIoG9TK4B2g3xsokfdBRx73BvFkLAxAr6WOcP&X-Amz-Signature=e07dc5e41a39d9046db12220ad1584fd62b4df2d7d268e2f9ca5c004e915d321&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
