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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNQD6EV2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCDNltpePZp9PzGPbuVN8NjK1RJLwdeAv1jdVbYiNcrwIhAKY0sCUMi3caMjJSgRAQ4qFN%2FvhbeRObY2KCHYbbxpnSKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8MZjrahNkufAtYsq3AOAP%2BKKBcU9fGklkhIFy3uLuK68QOzC1XDfGrhvNVXujt%2FDM7dJuz5apJucx3nnlHFM7zLgrbpk6v0CFCe9ZNxV833szjDq8fQEiaGbLkbNBxXn8P4UKk6lrCfKcaMzaA0vxUsN3iE7ji6SQeKXiP%2BZIT3lJhIOu9%2BECguq%2F6G3%2B7G8LealwHxxiOcIXGqU7V%2B8oTfFdsKESZxer8sAd%2B3n%2FYPeemd5Tsc%2FmhcxzO%2BchPGX1OnQ1oESwGseRQGAEoxB4gy6JILNm9YCmnBE1%2FlHXKQqJHKh%2FSKPvZDnDYZNOOwjVO1uGMUeKQ1XRSzczuwLQ8qme4zDBYbi8iTUkTTAWzBDjxfDyO%2F0P35Ol1P%2BFF8QfgXDDEBFCAbu3RCdEf64s2MhKdY8SC49nMRn77yoOxp95MU8Lmibutzz3FMPLW7sZfd6eMdXdH41g4CawOxvmDAScJVzj2GPufhOun1fXAVMm9GU36W2aCuXp5de9T8UF4XMnjlYNWq3o4x7U50XXhDJz19E9uWe8mhGc66AAGyi%2BTEGcaCeCogYIW6xdD3ubIgv6%2Fp8VheqSB1tK88ZRq9xF8Mis7j2Ez6j9SEr8P5SVhXo8luq40Un%2FpKZsNkT3w%2F2yoA9CuCpODCckqe9BjqkAa5MD7%2Fg2zwXhIoeHVeizgvj5yszOcPlVYJ%2FrK89TYFIk1gzcOIEjsXBNRtBhDTPas5GQzUkdfDRGqMFjd1IJR7RLkWKQ4xR3i4lob8mSpxhH8vYaqFmeAh8WMYmNgbDUfMBYvyCKF2D8svjJzoU3Xcg6qg4vKLw3W0E8ENRisBBmXicHIkubfVl57fD3UE%2FOEUmE7whot3PoRDSSuNIjzC1JBWu&X-Amz-Signature=2456b5e2a3d9ef863f37d801a002bf455be8521ebeb2472feed8435aa7a91489&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
