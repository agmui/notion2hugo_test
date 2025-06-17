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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBEA6US%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNo2EPYnF0%2BYqP%2FX0Kik1M5Siarxdn1%2Bmm3e7KprNmlgIhANdjsjmqd1ir3EC7fjMarW7FKtBvnqiVi9xLw1bKm%2FX%2FKv8DCHUQABoMNjM3NDIzMTgzODA1IgxdGgb%2BHLff%2FsOD8Rgq3APlq6xfXQCy3YF8I6D5HCXbhLYvPVCtfHpyAfwldNrNEp1MWP4oVk76z2abTGwX0jri0NzWMs65fty2JyXJ2fU7BPyFuniKQJLPxmdMGmiCrHJYKzL0U7LX6hKaYcdFXtm8fqpqlZbEXp1iC6v7k%2FmB0N%2B2E%2Bw%2BZT5off5qN0i70Op%2BtmnlcerCsigFQYOgN0mbOgghfVrS6P4RrIfcUyTH6ARwtLzhT7DjQPHVR56VgtOnu%2F8CCfAx0arg1W21e2fx%2BrCQ8fl7TEynLKMS9CRQamgSqwZDtOyBsLUKXFjmJ9%2BN0kKuum1J18x32XJpe%2FClCgJ1HvxMgRxdMTEvYiWo%2Ft3Xzk5QuZNewFKdyZs%2FWSrmLNKh1N1q1RmJVkP02H0XurVsCXM%2BqD%2FLtsM4T%2ByIbG9stcu2DE2Mv7eBrV33JqMmKROgTuWa%2Fw4C8%2FGq3IN%2FENptXR0gzngoAxly15MwRSs3QpSP4kwyXwRgRgGueUO7YwYuU3KNN44qivIHDeEPFsKYNuewz6P2Rj9GnZdLtzl%2BFPKS%2BAZlCwnuP1GTdIb2jRRJxdXHRdG65UcF5U15QWyD8ZzFCnvXCdcRnB3sNdPcxbRBzMij021UFnsnpMhU0OuelHWY29U26zCep8XCBjqkAWrvqYyUp8jJqpgP%2FMEYYk%2B%2FsPHJR4HNhkbn7WNDqHJqyC%2F8KecyhrSmpkLGBzXIRVw8GwAagJhzoyGJbRZGTjB6LezUGXBv3PtgoBQjIkgZPd%2BkkSCXD0Cz3WmH72Zd2ERXgOQS4UQL1flv4pFEg06AOesGGEwpN6oz3bmghbVLlc9BUhh7s9LDT5NPU5aJJn6DWIaO7B4pCxbChyjhs%2FFOnxUw&X-Amz-Signature=7962819176c51cc9c4f8606fafb163ac88ab7c2e77e3a6f500b28b302c2d2cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
