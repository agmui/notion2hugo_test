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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WBB7YXT%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD4%2BI4F9KYvh73tACAMcRyVPxkAK3z%2BcLtkUbuXjjMzrQIhAL6zb%2FrSrjfZzybzQOUPTc1PSthoG0e19iJUrolDg9weKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQGkm69Dm%2FLh1ddccq3AMH%2Fy6fLdXuweUCFxH8NpPTKkhgFqqePn%2B8AfpayzgfWRIsw6oMT2iSv44jxwI1zOClYvjaIvoZ27YBKh4gWWbDLOvRAn4jMvpFjtOyKBaBb5d5TOTV3hm%2BmGJaLJXqbx6QnaOMoo6Yqu3RgEMEw%2Bm5EvfKbpwddMD7lt9%2F050wkIqqapXbFXoyMdtoSXZIUVuIhXSctOWZ75Gc6A%2F7r505jS0Z23puCi1XTHh68fszOfA%2Bk9wsMsMTkKja9OWaqor3L%2FTms6VPEpL4wAC0KEG5fiYDKkM%2B%2Bx2haNAPdEY6k9p4ZQqWM8ZKmRr0QgBsKMlJrjDIXoLW%2F5r3ooODPQf1D9CC9xUIAp6bFK1DzDDh5e0i5rT%2BENgteL9BQG8V6cirS9dnMTllT4MfCOW57TSkRNCoO4YtRPVcUimY%2BLJ701L50eu7igPjiy9FN8gelXr1AGensJiOnpIz8%2FRdeW7NwiV5aUW3%2Bh60HJs5yHrFnGDne7iyFjcNNwd0Wn5dDM7TrKrhn0WBKPjaei6Yw1NKDerUfLK6npUHSMrJY7bprMwj6pw8%2BBExfiwAaDw%2BjXnCi88L2F%2F8cPvbBIoHobqOvPxlv5S5D5dEo17voB%2Bu5kIQedLDaHHMLtIFGjCI%2F9C9BjqkAbc1HA%2FkY0hlTBG%2BcFUIfxxQBwpqaRNLF6Su0QuuXoPnM%2B5R%2BlR39wtnXcl0K9P0qsQNapBHHXBtbtm0n3OMTEsbRh%2BypNPV1rndnCXK%2BmIma6fa8vlVFGI6E6keH5nkqcGV%2Fd1drOwmmZ%2FKNiGKk0c2No%2F11UucYOcwKTYJehFCAviHmy2QDLwTLXSUQ7Uv4Kper2QLF3m9yTAcDFEckDmIwpCt&X-Amz-Signature=e4f3887ec9ea2b2c63073e5b28306ade2ec7d36e7bd880473d750796bc2d13e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
