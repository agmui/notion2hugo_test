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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LU4BZAN%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIBjrl2IH6oKOdipSjgB7CTW6xTDbTBallCG3kaqSW6rkAiEA0NMmlubQtnXmiVs%2BRrgNR5MXm%2BGW%2F%2FRWfvNmtJTFMTAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMWXrkMv%2BB71jqCV0ircA6n6665yhGOp9Fvk25pGP6A1IyEqoR7YvSQ1qZqjknrEE3mh9fFZgwY8utrA%2B9%2Fk%2F9Hd9bFq7Vy4xA71VsxYzuIWR8T85SY2rYFSOgvFLgF0ZRy8JZ0gM7tZfiSkzyoKUhapFoKBxQrhhtg7ZF5N5fZnB6iwnan8R3E4xyk0KSkiGOGBG8yxiCWtizV%2B%2B247EEIN0nsk3mrPxmKgJYl4S1Z6ayoZBXWTS5veDnZnOvcMiJJxzSlcEUHH%2FHoWGqjNSvPmVI9zaI4yYNKU01DXBqzxJSUpFa7o6x9Ge8NcuPvB2BTrQYhDCu5HfALwjH4OzmLpZUF4KP2Ut1elNe0YU%2FofpOx2%2FOQUfi0CB%2Biq4LkWf7hGwAbp%2BlkbKf%2FL38FhSQVir9zm6qkydgTL6K6kzgAj2XNvQiS0OWp%2BAOQeK3ywbbOz4h4%2BculAAzBoJ4T1BQQv%2BBPsdr2Cgh1q0NNkHOczXd6OpGV%2BIYRD1K6Jif5uzip%2FQP61quisVLFoFSy5s9tjrmCneYGYgF5wnnOh9iL40kHBWtCh4cyac0ZOMoTlCa6uYE2JgnIj0Iw7CKtmiuMUKm1DpXZj5ji4h0DMc4g%2B0p%2FY2L%2FX8BJExr1eryuYohtXAHyIrkYMgc8CMJOLtL4GOqUBpRHN3k79VmoOfnGj8cKU7Gn6YUyc%2B1QZHs2jPnd14FB5d0BjjR7xTfEOfiCE%2BUlscbpi3BReSFCTlsUHhG231Z4Ec7%2B%2BKqjGbsQF3tmCSOlrBA0LYNROYDoYAKMdL%2FExrJ8laFPBVGq2umzKT5xAEm1YaDtIAdGfajQETmXqZ%2B7qDwNHQghkb2SQX3o6Qmv16XIJmWe5AV8jbqQx3MYmq2P9X3pg&X-Amz-Signature=272616ecd415061af280773e34859ec509a733509a163bae77ccb36406f5a5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
