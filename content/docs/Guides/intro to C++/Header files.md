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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFXU7FD3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4gwdZ2VgNZUbggfMhZFauUFMRsyqjf0t5hbFKWDnMPAIhAOtd%2BcvYEDgSj2oTQASOZyaOF1MBs3s5wgJFPzePojOyKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzeUAr2dko5UeSLiUq3ANWN8%2Bu4uzNB8KFx%2BxYOaSHK3Q2jTMJRe9j4fX0fo7OI9kZI7qtCG0Bm1s3JzyVENRqdjSIR7iGq4%2BOiOrlMt%2FcYGAupqEqPmdYX1xXnTFxV6LfRO5ZimZOewC0iJXKs5ktL%2BNa8%2F3UD3Crhp%2BZwmiq4iChlENf2SCJxmm%2F6w33HDBoGo7rQfEEKJGq6sNyL8e2LnxewurQxsZa5NVe6Rj8MXtCCO841qWGRJ%2Bj%2FM7pKTlfovJj5rPgZBsMkiNIEkDQ5SZSYpCTELU3o%2B0KD8zypJOJuU67jWIL9Ex0e%2BxXjeq9%2FVdb1ZaIANZDzppzE8O96WMXQOovI0mBu%2FQubu56Lwg4P0gB8dCECCzs5V0RBRYJNoPFsj5AgGw%2BQYDx1OBCTmYS0dEdD29jddnU73rtCCw862%2Bwanm0vZQwN4W4uw%2BhHEugWwYB1jct0ura4qO6ocfe0KKMz42%2Fq%2BBqPoVz52Zhh1MTWCKbQCjvLorEiPTUjpf17JkTjj9psSszp%2FKGsENvNmCkJBO8uOrtRM1T1tMFr6d8sl7rx4Z60HMmX8DVAHykZvydYRB%2FCLQy81%2FbNOxyfRLTjrkg4L8wzH8VMs67%2BIPkaly1v3T8jNdIgiV7hq6URpk8t%2B94pzDv5OG9BjqkAXh72fs5jRkpXKBkcSRxc3TL0EsehT5jHKYnstWVaXHxGuqzHK7LapD71GM40nJDNcDo%2BfYdmHZif5HPW5pynwY4kMj2eLhFN7UVugRnIg%2FS8BmLPVOdd%2FZRZjOKDIn8FcUvr4upy%2Bo%2BhYam63yD2APZjQMap8cakj2FyjIEbdcaJZ7tBWmDFwI%2Fks9tDODBOCWa6SD%2BI8FOFpxMBSyKgdsqWfMx&X-Amz-Signature=e71b296ff6139949869caeb60c88200868604bc8932ce6498f3856a21b96ac39&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
