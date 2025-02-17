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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77RNHK3%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDQFn0czww24KlqoLM3I%2F4LTZkM5BDgw6Gy9wGrFhzydwIhAN4Hudq70gJzUm%2B0fLHGojT4lLrI3SnMuXhWEHzOb1qPKv8DCHgQABoMNjM3NDIzMTgzODA1IgzuRrASFcmG4MvtqZ4q3AMzdLikxcdi%2FlypsjvH6V1%2Bpsm%2BVzTesXMGgBnLinZZ3be%2FW82mYo65V8X%2FP7xXGvrMqFarHYPP80EVCrgjEjTls4uz5eGcF4XerzF8mEg1nVSFQLFJn7aBhc11KRxgSBGPOuECxbrVDuV7MUBQUU5YzsmNlWST76gJSOwL0CXBAaI0bkt28iV6YAMnl0Py3wtwtu0qrtpbSRyMPqtpmhfeQ7Wzzwx83SEgxfN1O%2BbyNnFZyYsOG0v%2BZnLCQLIQs0PwNwjGMkjjXLNIGFG9bZ9uLhaCTWd1gYftsJ1RSxoRns4MaogA6B464K5P01erBuuURHCPiRCH%2BwDUL7Qnt1ApBM81ZrEDFCK%2BfH0VM2kRIsZcDSlf2vTBDZN3tSZAAZnk8TUrDyswBb6e9BN6HJnRR0V%2BvdSdJnC3TH%2FbP0cP9VpXtgncnBN4Js4dvt0VkM%2FeRde83j7St3C7Lf1XvnLNjte0GqXD65aJOvI%2Fop5IbeNq8GGUS2zK7jGVrVfZ6khnbOhzq9MSjJ3U2dpCU4PX34xnQbez19ploncdxmszO2%2FksJqaEeyfKqh7j6uxA%2BSjhI8U6HCMNfZxylvmThXz22yTaLZEuo7DXmrVeEtTXmqA9BJaciVSzZ%2F1IDCxls29BjqkAcM4WTG9zQEWDLQKqGQhAFnBuSQuRujOnj9b43Xhe8jCu%2FKHV8WqoRvZz6HNOqO5tYl4av1C%2BtnUR%2F%2FZR9dbt8OT6Cy2BXOH6ld0SZXX8On3kj5%2B9eD58jznMYRU9vipQmG%2BL8U918rWp0fsVV2X1TKYWGSF3d450e%2BBozWIeuZ6%2Bw8l1X0KlGGR%2Bif4bLzunqznSHlevHi%2FGl%2FbV70p3C3FKKsK&X-Amz-Signature=89f6eb405e604c55e2c7c02bdbb6261b9a61b980de8241e151e672da87e24236&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
