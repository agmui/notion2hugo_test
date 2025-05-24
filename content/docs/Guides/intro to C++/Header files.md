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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD2Q2IWV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICw5lsxRv8G3t7uVG2fhj0AcpS9iZYcts%2FtieRhPwA4yAiABE5jo%2Bk6bIKome6X0b8Po6oUCaJ0nfvQoq2DASSSg5Cr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMSoVCt6v0On1%2BJcv9KtwDksO0sx2uWTz7EXUNEHf7u4NwN08naafLSA9yWEC6RW6jIfaoQaVh5yOHH3YjQPpoBWgmjmdSKeF8AIH33KGcn4OSBpJ2x53yZmzS6JF7aw0J1TuYgEy2SjoK7c4LY6dw7aMEeBjBIV4vtfbrITGZS6M80nYxU%2FskAVvKqSouclNnSugOjfqPl7RxafRPiJ0LQYq8PQd9Xq%2BAXPE8obdTcmJOAUPkXg9CVIj32%2BXoq%2Bvp8Veeo6UOEWfK%2FJV6e%2FIxqDG%2B7Ln3cAlVeZBBP88icZ2IdaI8DOsQ1Y2kR0rTMGnDoUeGWReGbV27WdIoVHk%2BQUfMwUiBMaihYk96MI3A6aLTSYa7%2FFjnd58rFkiWIzjw02Pf%2FmxyDvRMuf%2BJU0GN7rr79qHFoQD27bdh60KK2%2BnIOrsXVQEAv01MfFn9R2YO%2Fqvwa4vR6rClCXY18iJVwh6FVE4SpjgpbTN3bf0%2BSle%2FfPO6LLjLuodu2qXQhYAOVXV4GKjOpKTXVmMEfA%2BHskd3saOfNDynfVIDqnZSmCtj%2FJzeqsa1YRwp13XS0DvdOdg8nkHQI2ooRnrRJVvmGJreDIkWYBLyZm14eHdRDxT%2FRUuHlQl8Poa4zRxmHyy%2B%2F7eUYa1rbIqx%2BJ0wt4DGwQY6pgHxJi%2BGdUbRSxkOrWTZiIrszDZkfb1Dt9aFZimeP1Ljm1mqBWzVaougRlmu16BWmug7%2BcH%2FxTjJZoeWhauc02oIAmZec8kk957Ma%2BcieqVPcyZgAWrG0hpYRmGfl3TXwCjyFcLO9iH3xN56UkMc6XYbEfVgD7g2iLvE7%2F0bL5cPVyK1hBaGPQ%2FrRpfmI3Jum%2BzJcJ6C3s7S6NZr4Gf%2BJcnVtDgu7oCU&X-Amz-Signature=6597d94b55c964077ebfa69cd2fe2a5332646633b15a2242158991835143f38d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
