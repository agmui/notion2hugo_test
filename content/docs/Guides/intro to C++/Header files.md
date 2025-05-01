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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CLGRDFJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIEPvcHkJuFIKAJDLJ29swwDdV47SFpUTLwiyXs5IDBp4AiEA6VIXeljOFkCaUZwWkgiui%2BLGOEHMhcsWXUPRHr1wvoAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz07fGxqYXm21gqeCrcA9IZ1jY7wPHjWQVX22LZ%2FFmSdVFLtS4yxbQcFXuQm%2FkXqOUBx%2Brio5247wNtjoE2Hh%2FfxeV9e%2BXII2w7n2Ng0bp%2F2ae4NuIrBoAEq0rvmO0SWwu7HY1t0qLodlHBRZrFEIYAYDAmSKs%2BVCW%2FC4nuoimEduuFFsVqItWtW0Y3IacHxw%2FssRqBbg6OO8X5Cnq3CnLg9qQ5YjO%2FPVBbqz4%2Bq7EyBk%2Bb90F6T7m0Pd%2FJ8Kbf7WeyNKcm828e4b9JXvLQKkxxicarWKO8H5Jd0eGCDv868AtIjjWkYdDyrP%2BsWyre50JCJX3rFaI0ikOv9DWb%2FISKhTB5MOSKXJUwfb2ILS76v09USvEJEejYmjU%2FcvpZ9vPHweu5H4V6zRv8mjc3vd3Cpuw250GjcXz479L4nVzVBWwPDfVDEllkcMkako46LSBEg8TxePtJ1%2F5AYpGvI3YL%2BYJajXG2EHKghxKLl1g7hxfRcapyUQWPIbTDQugnnOWiXzjgA91Wv6A1dO9lKlAPKSMNGd0Jn5ocdpsNxr%2BHngK7apDHmRLjeHV2dUVLASkI7lJv7lL2LsOkSE%2BA73TPjnO4%2BJxw%2FQwjAtFCayhuKLh8zRR0tJYQDvmvGEpDcu6GPokc0yPAD%2Bz6MKyezcAGOqUBKmD1JSRTzTN%2Fv9lwnbVZ5BqJU0tiEaAW6t3Xlw3MGpbrG61PGwrNSx3mRVVqkiev4WBOlJpm1ngRfmaS3Z5T0WJoK%2BwOiEloM3KcZImVGS6yCgQOHPUki90pjBzEaj2uPYs1UarV%2Bb9pQ917u%2FE6RUYQX6QSbe47FK9zY%2BbcE%2FUbYIJkb6tev3R7JVuNzqsDOPVkCG8pqCL3KVkaqlyghAIZuSCk&X-Amz-Signature=43596015ef9038607642d3c5ea53f3e309a5b10ecf63d28202386f70f4c54989&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
