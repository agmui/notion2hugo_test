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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKFXXU7F%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDrm2FczS4tn2OduqnfBn8OsPL3JMy22sOgKyonaii6yAIgfzygA%2FpOvF39cRSnFTbQ0YZs7W3J2RpsTvnwsdCB8VIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4AZ86uUi0qml%2FaeSrcA1%2BAjXEvmnkkgBEA402CSS6%2BGB22HXoczDSOX1kYqQ1O%2Bn6PzRwfZp%2FBTkkNpX5Th2tgp%2FURTHMMlJEcTTexsAoxO2Uf9whn5Ds4xDWbHCxHIMxN%2BA%2BZB8YE74yRFqWdLSV4jFhklT%2FiUbCvHKcYsHfhWAMVH1NqpjKLF%2FsBfRzpksNMDQAc2%2BI%2BdUrjFQmCKlVw7ph6Mk7Q7EGuvwvS8o%2BTJM3kT46WeOIiQNrKtbwu1dEkecmHTOJrLX8RGDdIhUjC5y7Hf9fAzwdJ5ltlGln9%2BkFgupKsNN%2BQYLPxJI5lyGZnNAZMZAgGnDKa17JwBL4G6QxXIuPqoadTJA3eDW8ccL6y5QAS1kFrS13X95q9Thvio5pgSH8E5%2FQT8h1Sq%2B5MTzghR45dJbHtLYKu1OCK%2BEz%2FubEYXd%2FrjycIj3ayUpwZhLfvBH52mLlO%2FGXG%2FB5T0J%2B15wYhx1lAVXRyATsxU1hShw8iQNIFUCLhLyhfB8ad34G1NxTN32ky%2FVfBrzsL0LTbedpI3Cf6v4%2B7DCrgFVH408O2rIfPFthLynz4Olua9WpQa1qgzW73BOA%2B6ntYRk52yobWntGRJA1Y2OefKcvAfnnD9rbaPeHW1GZn55ft0EdA0%2FWnOlnTMIDwm70GOqUBj8LOzEu6dLV9eLCAG7wV%2BeDgFaod5aDXjwWqjgVH1lMdsljsFRvqnX33kHsRa%2FjwfE5ZoJcCSp%2F6uNKaRlsdiCxnyIeOAqGHcQnB1NA1BUogWw%2BpNMEOIfI8q7egGKFlMKt0xp3W6FqzMQtjs%2B4BCgUtgwJdIZ152r%2F3s3%2FRKdkbcy1dhpUtmEd9S1GVg5JvfXPNCiYuijTTmHkvgc3drdpZvSmX&X-Amz-Signature=d7254a2663948993ed9cd2d2c750422ea42447cbc7593f67412d681b68245bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
