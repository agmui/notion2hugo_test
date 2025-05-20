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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK2ILZWN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2%2F6%2BmFaR%2BX1I4apok7SlxxrPd6q%2BNl%2BHoKz%2BjwRfLFAIgXe3s5AfqABcZ97tlmWhPdi8bmiQb%2FYcaAk4GentpUBcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8EhmXAKCD5%2FnuSnyrcA27BvpJdkTT%2FX5vx%2BscnaRyLbQHbjtgoC1yM%2FXoEsgaARJ5T58bpewbbKB5wdjVNEmy4uWd9hXCbJVhF8Y0Sk3X%2Ftmos%2BR6s53jnmlrFq9bUg9SIod2M9kk%2BSGdLHaV%2BH6D6NSKDI2alXjgYUO8s1Ahpb0ojbdAaLuvwrFDtgS%2FNB86pSZb5SW6vHJ5Irf5ovpycC5lvBDzndqjECMSIxndPxyU5KTm%2FxfuL0EPoK6ylT061sCdRASbSygOPC%2BEXg9wx5DJI%2FBTeRQ5wzfxMhOnsxmHODjHKvBd2w3miNWNlm%2BKs67cEcBzHQSmWTBsiW04bOJASnp%2F8f4RXSy4mP2F%2F1nIbqdtNdyb9cyySwKyZd4NsxyOpZ3QWKRNxAXkQsNymdhPlYlkGWODEApMRoks2odHX%2B4b%2BX6jAkHHsc7qmncIDGsadwDJS1S09EOBWVTwbi8eBo6%2F63JwSqwW9CH4eC16rcsv9aw0R%2FnqW8N7BS3Q8sNF%2FRHJ%2FT%2B91IBTw4Ce%2Bes99Bc8%2BAGr%2Bfjcy9izmpLrYc8VBur6RUCW%2BBm%2FismRD8AX6gA8xSd92GUVmkznFcLyAq%2BSUtm9IIHiwJyLOdkMA9Ci%2B7Ls3Sx%2F1sDpn7k6BA%2Bse5gW5Zo9sMPKZr8EGOqUBfZH%2Bqfzls3r3w5cIb4TjFIchNw2jCa%2F6ydEqD3uqmo9Ha8UB9Oi33DqZe%2FiNwTar2hgf3BMJAf9zgxz3tpMljSq54CYWlBqizmlmj4TYHMUE1QvuyWo86VWomCjzq9guyzV7ieUit0%2B0oKj5zUNeYdc4bkOdgT6mefFdUcy%2B4bU3lq%2B%2BvMB6gbpTKcdcVyIFUr5gl08jVJJO%2BdbmK1hZFH8ujK4r&X-Amz-Signature=63779881c3c27a2ffb8c66e3c4d2a6d6dccfe2e124cb4dc99eaf36f85c31cae4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
