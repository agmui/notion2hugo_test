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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD4LL3J%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDSbw8GcCbhqsseNhhOtEIoeqSi%2ByUE%2Bhot22DlMwvmJAiEAy3uaWVyKxlmTP5N2Ifk42FDqAAp8rmqTK%2F1EXL3WDd0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBx2UT8dXPbuCg9eCrcAwGN%2B55xPkAsdysz91win0yajkD3xxtGTrMYFAu99DGzqviyNaBfxkNSF1QywWtF5VSF6bH05LE2MPk1eP6DQ%2BsGGT36DGgHU5nitKaGqeoTQeGDzU%2BQG3H4rdgDGnmp3PKi9wXIpA8W7j2cLv95F5g%2Bt2BD7n6MYH68KJUfy13IIW4r5H%2FZ2Ahu3Lh%2F4bm%2BAyWy03BuykH2V9IcIIfzG%2F2i7Cm4Af0%2Bc0bTbwKFlNuC7JsYTRlJQyXoPxfFh7%2FhfpKfFBaVLgOfiLowu05%2BNJHrX%2FGZ%2FPTzR5ia2P7ma246VVLIIfMDPSjIk6NbkoDCHwfYTXJ0BF9jalbsr5AQc42E4xdYPdFRR65bvIOSP4K8x8eWEWvNanxTaigHBIue2ThDxQV3vEWxLP9LukIwoUZYc6Ud4javHTs3vhw487deMtewM1i26Obb27tYxGQ3fb6HS504Sdgt7SfHr7F11zqwrUto1z1HzxT6mjkMHy92x%2FN05icYKROmkTpbkKTEHccYQE8vi68C%2BmMzyfenmFldMuY0uQBMDxPCjDRyL%2F4sl%2BxScViUP351QbbBoBE6GjE%2B%2B%2BFb1Hhc5z%2BMl4X42AhBb0OOYxlwjXnx%2FoIsDuvMBSQBGCBwY35maymDMN7k08AGOqUB%2B2qw5aHD2MQ79paN0vYVhwYgFDU9x%2FyLjcMG%2BvQ%2F2GdYA2ErwHC7QeJXua8kjoSc9ubMK5THK94ehq2np65OUvg3qTmEvqlyJzZLBAxOg6jVHSJN5MNloojVi06TdOhLyw5nr5jix4%2FKVPVxRPzQZFfITs3b4NvYBn7x5%2B9KtaOv%2Fg7%2FIcv58E4nDyMj00RRWTYkG6DzQWcVcI028DnZPwsppS6A&X-Amz-Signature=b97fdec30c3d7741fa94f01ffeb7654115a60fb8de6587ed923c84faa6d3dbc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
