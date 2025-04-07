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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOR7QMV7%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDemVGVFpLrzYqt7ZOTBofyaZdkp8D8MuF19wTA9q4ANAiAUVWcWgqmwShNv6JkLT%2BrITBqGMyxYwSe6ShvZ7RNqCCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMtuXkNbg4Wr2hwPjxKtwD5VoHP%2FldczfodAFAQ1DHNxwUXLozO9UbvAQp0XuSBtKs9qpcZl2p6C6CWK2OncTMT6ybu3bDTLyjqoVziNroZsMtHwV0yYmbKp6o2sIBS%2FCvcpblotPjcYyxNWccR%2B8o3YKbBRasaMGSkHQ2HNCY%2BhD8vQaSDVjfJmB0bN%2Bn03e9A6VLjEPfvR5ATuejP3AzmwFa16smNV4bZfjOHo71LKUpfy29gnGpSxf9W1wQ0hNZV9mW%2BufYADqnEhFFQ90oH%2F%2F1Pq%2FMOJBKEnT8Y3M4h%2B2Wcdy6wQvxl79TWnbGe%2BNlPcL77uv6Hma%2BgyNcGP2esLYp9o6sRQ0uhIlvcKfMfa7VYdRC0ZVxMrCi%2FGEHNa3ggBDQve%2BDwhhACV%2BDJnixe662guFlsi24sePKBr3knd8RV3MWFrV%2BHFH6WwKRvEiVOdhwj20vsmU2%2FfXk6KElanKOR8aALJdS19VOkjMKwQx3uECXwPjFufR6ZuYCBBaYr%2FEVOm953PpPQ4OMIni0p%2B%2Fjdk8iNZvKcKnYAIgkOthYcBOCQ8CqLsj5u%2FGkXebmhd1u%2BoL2JCu3pxsjwEq6oYdE9%2FNmL0oaBdLoY1xCyMNL3isOKFtQTDPW00yXq7vFBrRJFW7L2pNMl58w1NTOvwY6pgEuDONpKQJeI%2Fkm%2FnIbQiSuwGDCqTcdTNNujwpd9WUYpD4HPXMQYd8UF4ysl9DthgW9262D3T2VnLX%2FY4EMmDB0sGuYz6Z%2BaQdbgskf%2BnDtJ8Z6w3l20%2F9zn4nqctu9HaWVGqgu%2Fx9rg7pLrbdzIA2lsPtwCwibOH1hK8Lu47VSlH5gQ0ca2pR%2FFS0y4lZ1vc1VayUmFTnJXWsnaWJPuWY9X0ALkfNk&X-Amz-Signature=2b7c6cbf02318d8bfc2b1a766740cf6f35963b428a4474d969e44a593d7b1afa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
