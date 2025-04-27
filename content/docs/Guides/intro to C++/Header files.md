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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3KWEGDT%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtPIC9lRr98iw6cOIf0XXCTPOOrnlKTZ4Mnc%2BW9T0fXAiEA1%2F1seMKtV%2BrL%2F8btuyoeddNg0fqIBTjuxpQvWrnriHcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHb9mYNMY3ZI4snRRircA8XOnwjbbo3fkJD4ewhY2ZA5L4CW2jepi0snUe4qF4D4gaXa0ZkcuL701zYFHQSfx3%2FHV9jrYnZK4OOOR6QZZ7JyeQc0Y07NSfH9adrALxPl5EmHgdomWl8mizH7O3x4YVIekdKz40kJ%2FiqBIz%2FsFuYTXmKULemy29%2FXK5OsahuoOQVvCu73zXhvGXI1UYKN6xTJpHsAQ67wZ%2Fi7rzOUkmb1684bnc8grM8EuEGW8PA8PpcgdnLSDYwGdfNyIMvGGVcCoMMo8Jh0a3kMKeS7NS6tBAKsiS02lBOu7S0%2B6pzIppzwejSOPevg11MYcBctAdAGCFl6tgY4lCdx4KeIl6myHvgzNSBfZIQsEUz%2F0n2Ok9MArO7kZuHSARhqzhHwy8vlXI0nvLOSHKQmoHn3LuASgnpTOpuH9oZQGoAfmFFz7SdT6mj64sos%2FY8PoqJ0aQC9zTx6EsFWlCJoAxunORpDi6YMYpiWo%2BLfOHRmLXETbEv89Ly3OYBrnIZzoxdrvBPGnr3zCB%2FQMY777LDCu7gEureq47nnYJTq2TXKmNmU%2BgnVY9uVkRRDEFcBusT9WQwraKLP1HU9gPUZnNjK2D0hLrIcVHxWLhpe7W%2BEuPAMFhHr3uG9v1%2Fp6qt4MP%2BLuMAGOqUBV05yNidfq6vUBtWHoydB1xzNGkR9BZ%2B70S8v%2Fz2sz9azyafWk%2BfgfItL1wZrwpXktxSjMUyWkqF3Aanal7aUJFp95uUEcclMRA5duLRPKrrBObTD1tqWId%2B%2Fo82ZS1XVwTOpQhDnH85ooHWMKDduRjHaAwY0EtXPvT6l%2BJ%2BX73RguVYNxkiUbiKNb5paTfvybIubi3tyq403cILM1yqfhJ3Vk%2B6c&X-Amz-Signature=dcdcb8818155cd2b7d8737e5e13d65f48a9aff60ca71fec262179adedb7a7543&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
