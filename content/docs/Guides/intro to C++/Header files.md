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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRUKIJZU%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDZy2yJCGef%2FUxiuRdJra%2BtwFtvAXHfSZq4wavkd3ABfAiEAsr7XPkNITkai3XbN%2BmKy8DCM6667MJ5mgMZbCEAQZBAq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDFJX%2BuL00SPDxHpl5CrcA4mSuJ1AkXF3nz5mPQGGyqetj8KZvmVXsiofpVbkymTn0vZON2PWJ52yDdBhGQz8vZ2c0SvSJVjBO8z3OOp0XOdlF4ILy08et0W4cTk4ppbx3ZShLspWJqbvKr5eJndUG0HBn2LRH8PN2MPevoCRJvILT5m%2BeXqVpCerURIzmAYye6hn0h%2F2Nb6Jb5cm04pTYUNesoazjS5j3YkYdsnC34MLPIaP4usZlkP%2B0lGzQqnWQ63w6czMqE1Q7MMT1NSMYgimON%2BnuQveeJClioOAyTud%2Fx89sRiEGaxo5nC%2FMuKxT9XR%2B%2Bf6a1e1bFIc5nx3MK6hs0Jo5ErDRFXIzmJKj1SSmS3R33wMEOrIyo7%2FLUDOTauD3sy6GwHylyy7x2YEmcdUNezIAxP1EOgpB2XhGQtOLoVjgeGAVLaQWnz1rsOFr7EtLpCn9t5ylsBTt72x7EEoCMoKhSXFI6M6693VzeL1MfN5CNEmh8sX3Tn4nPYS7MX1Z1srAUPjM4YnvsF0pmr%2B6yu1BAqUFCoB1eCOs%2BG98kh5YMubN2VvOJNKnBTplGr0UB6stKw05vx%2F1rXQhvmBy10mdE4uVOoWS8WFQ8ENCJ4BBjyxEynTtUpp%2F8GZ8YHwgpWmn%2FG5aU0%2FMJPknMMGOqUBT%2FSOzjiSurBqzL%2BCL0DJwhlhJoJ49BfJXiQW1u6fRcFC414rDR4CvCLAUVex4KS%2FU7fzkPBtCNZxCXR9wrZd%2BRxUjOCQVSQdfyret2AZvnUrk28dWyR1MTOSU0wJfQwZa3NMYR%2F%2FOrbnw7swXiZLZZDh2wdD3OBFnsHeiKlHjUsm%2BlrtScaE%2Fccd%2FGZ6Gc525KeYHKNdQITj8PcQyYiJF4Svs6Uy&X-Amz-Signature=766f8bd3635b1028712272bed2a7a29c9245659b876c0be62ac72333e155c8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
