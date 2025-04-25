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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657S5IKGG%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhFqu87q34gPqWAue4ApMUSYeGg4mP3cpx4TUhd9vtJQIgQsZVfu8MLBqHwXPej0xr6XTAOdP2kgOf0dCp6C87Ht0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOayxJfL3F5vYoNriircAybW0PlCTX4lD38Cmwcd3wl4VcVX52WYemSKTHJAPIUC0nljhyohYVbK1yf2rHf55OvZBWDGUX34xr8kbCO6ejKcaNRYOcv7CHU%2BStjmBFsQtXirDoH7oiFxXqvFAn4TyNQfBRHO0jn%2F3a%2Bh7R9eIsbZZ6DvsSB0xzCr6AdfKXqbB7sFZBvWk%2BJRMu9dPI9Xq9%2FFMeKQahRlGV3oqpA%2FGKvLI0UgUeiEjRNikzatYcOM5nS5cRE8o5eF8zrl8wM5Ka0l0NM0zlvwAo3nHQap%2F1IY6IvSQMWx%2BssLrkwk6H4s20fWgE3GkhrCk3ozLri1cfzC4rcC5Q4iMzx3gS9lKhpALMHIVWMTLcwX%2B3EaAECfBel7sAgF8JAahHVrA9J9hCpssejqjxm3hUhRvz6cUD63oZhWrhDQSnS4iJe49chDgBNzs6JkQZ0x9W5qhKghhHiSAJDwUM9y1mjgjyJPmRwozQKDLAZk6YAPkU%2FCaDkA%2FOzNf4c1r3OaLqTqQ6xhCUR99b6rWYlD1kz%2FHAmXtgAxV0pMtZjNMtzwhu5fZSmBHfK7MSp3AX25UReikDrW%2Bh%2FpEej7sQ8nt%2FdZlSQYHWs4E6bjRMRF1CA3qVpT9u%2BmjYMXq0nfi8nTEeJtMJWircAGOqUBPXrJrBw5aJT9DdPsIGeqMeDE4sv9M4TRnZDxrY0GZ2GVOtY8uUYfUB4VTR86aXhmeCcOIK6lXaCiiAHO2IGKzkGOX74P0vA6rH6JFPxs%2BTJityNiYMiFkRY7ZAuohTCfT4OBM6WX4ZQlR4IeLfEXye7kOWQZH6iiWT7xI%2Ff%2BP6Mi6au%2BP3p3uEepvTS3a6y2PRLUSrxPREQEatarHyZV2SFwbL6g&X-Amz-Signature=9ed1a433cf21f03a889dc6b442d17f2c77d35370fac2d9da11b04654f9f27ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
