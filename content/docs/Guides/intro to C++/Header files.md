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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WM3QPBA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCskkZFbDKl1l4WGOy6xTBziQ%2FCBa%2BAd4e1CQ4mrN3wZwIgW%2FnRpl%2FZTcvz7h5TwvjaMIENSqAMxI9QehzGnaSpsYcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKlSu5xU3IwsY9Vr%2FircAwPGqzx6iJ1UL9u1IHjBd5pyuEzvAZGiDahaeOKgwwClSTooP0tgK2bJwqwQmbeYLBWiKF9rLxQJPbCuqMOSf%2F0FbFmKeh1s5dHv%2F%2Fob%2F6lz8uejorX98P%2BikGj08Nfm64dduukqe4hqUn%2BWmG3i9QiKYJfdaHvBPJknCwMoIvrRMVEvVGGORi3DGYF4kxe7MrgAzdL%2Fn87acm83zPd9VfhgZNGPX7tjhF01teMeDrGcgAk2is3ldWbMNjEB7WjWR%2BNTqk%2FL4O7hR1EVLGTLeGwcq57CKCB2EjpOAF6B9e5jYG%2F44Qm%2F5xQ%2FxjciyaN645GGSYbos67jTjh%2FA5rr3ZQgvEvf1TvHmPqig%2Fituo6rMuphn6XdLqk8J0x8Fxb9GYGEcXUjttMf3J%2F2hWrtsO35pQAdBS7q1cDft4EbODfV0rgfQfPuLcSVT8jWB5gReU1fOIUPEcED9AJUUKsJNH7LkEmM4VGBLrKjWKWVGcZZxrsKBZF%2BdytxOZ%2F%2FPDB3lFlVfnMGme0JuzJl3gAOaOR%2FbWiOF24NnzRGS5wLEbhLtSnXgLPuNQOsI12pviOfWsyXGbD9ExQov8iyU67VIVmHXe9oPAqrBpO6MoSHNlFQ6bmyn73SS8XBDyIoMO%2FahL0GOqUBz0Uj9pbxbWwy1xhSyDvdZALRD395MtqLgs3ovPxei%2F5VOMXl0f9LOPQ4LJG91pY5W3UJet0XXyE4LOdKWde4RNAaygsEG7a%2FPy%2BnydYNdybOiMQjPPQxNR3JkMK95G2hCMCRrjxXGqZ8HAlmniaM4cIZ25Q%2FEUUL3AJLEzIxMSQqPv06AjtfmufG%2BAbEHwvqcvy2ielPVDpDVQGyXQ71UCNgUMj%2B&X-Amz-Signature=0fcb6567c806f1ae56f80868d333bbb33d9df9fa423d912c296221cb1a5dddf5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
