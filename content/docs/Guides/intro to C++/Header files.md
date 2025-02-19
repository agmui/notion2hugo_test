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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WB3KRMO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAFf2b1gD4kwdLDWtm90LVLAKy8zw%2B1pD89zVtFYvGzzAiEAoTClhOl3O3LNTj%2FkruuvjH0QgW0SaFE%2FO3M1hVph1SgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNK5R8y1ny0IV1EVfircA0LYB%2Bu0InCEB%2F79L4eZGofgWV1vVIq0wDmiQT5K0haoYg837A%2FQfgROP%2BZ%2Bxc7njUSG9fvGsymZ7VvYr%2BU0ILep%2BcG8qB5bPoEEeArvf%2BeINUg%2Fbd0miWe7JESwkAN%2F3YTNyYXSEQulRa9HpbB5dHXiYx4hupWthSyo4zF3UERiPz4EEYnobm7IMBHfFaLdP7Qv4zUwmnMtdQuOsx2m3imQ6Zom9wArpHp0txzG%2BNFpr0VQcxBJbRB4zaN2r3S4C36ZsqRRoEbQ6HiZmhZ9ApUpUU7MnT%2FjP%2FtTS85JrcM9bXBDmZlVrVyQUaxFxmE3NOP%2FgO5TTw2lhlamgOTrsKRWael248DmE3SRUIuuujph6JM0%2BszpiQMhf60x6rIKCOG%2FzzloWVwXQwy1mHwWTBoO0FSyYbaUzz5IVJYBqgq8ZSaY0LWLsrXrk7P8IzgkAtQexjNV6QXlppB1eTCVvi1PCua78vxZAOcltD5lD4uzamGAdgZw3NnMlt7F0pebS7lz4eUrl8pjfk9b9QvRrR4NmXeIF6Ps6K8%2FqipuMy0n4o0aCEzDYm1AhRaUa6fsT%2B2WRR5Xr0w1zkg9esUrpS4YeG41bl%2FKZnUHU9ml5EXpVRS9NSOX0m6MpyZ%2FMI7%2F1b0GOqUBr96y6qzSbELTkY67XoOw5NIWWs7FbnKSt0XllPJQTjGuV7kzXRs8EKnDUXZxxTc0tu75l8zDXFxJoHMzFQ0IBhoPPw3i%2FHdv5gc6IuR0yTc5hHR%2BMQn4GfDq1LErTY928%2B18BYfPaDTPtSF55PhYCg%2BkbmNDUTbN3aRVeijX%2F7MAGvIf427TJNTzO0v5fCSwcuEWF3ZN5Bftf5HUhU7NbHIeMFMn&X-Amz-Signature=5b80ad8b0e46970d8d806b77927463635eb6073910035fc20ab09b5e6faa7c90&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
