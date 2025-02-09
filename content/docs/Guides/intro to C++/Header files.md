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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CYBXPQ4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhVMFBw%2FhA1vegmamFITHafd0DtmaJnVBYZzmcD0EkYAiEAh08DXmRL0GZ5IH%2Be79NYM6tqL%2BYbUGvBYANo1Nt9yoUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUa8Aqp3KsCZaCxNyrcA0pxWsPdMG2JSU7UTQE0%2FxwZXRcXaw6MNRnbiVqt9chfXhomeijcz2KphkeH6J%2FSvLDNu%2Fl5DzV3fKeVGthXnzmwksPCj1%2BSzi1sw3Hwx%2FFZNIufi72Y5qXMcJj2IekRT6fsJ0NCvsX9nPfnVeq8PPug5oCokrr7CWcGkKqMoT0xjPoBuC3ELLTHxkqZmf1E0SxGK7FpEIP5osiIlmKJVlQG0Di%2BRcEmkjTyE0lECzcViz3Y5quaUwBwgC2vBan5RAnAo49YypuYrnSeey5kbbKlLRDI9ZSOtxmHVfQLLOvqbavzvmwZ%2BAiGA53vXl37cySoMj7%2BMnKdKznkgsliQ02LsnrcxTj6FxYvxsvyjhQsJslOHd%2F9pcjMRrJrQ9vlFrWsAQN9DLwuAd0nmf0ymZixJmTBX4548WTzN04hL3n3DDE2%2B9Q4noafcGtbKcKaFwidtGRxxW9673a488jx8M0BoKBCUsQVaQ73hs4Uu6HM91BNhYyH5ScNVKfzzTEV2jO2%2BhfMf66Ow%2FpjCOWo2LH8xRu%2BbnhcqnIq1TV2niP%2Bmh9x1p1KQzJdVi99xdLLZsr610PCXXxeKL%2Blb%2Fv9zbaHo1vuJfXvmcInk7PjkjeBWMeHL9awEeGddg%2B1MPa%2BoL0GOqUBhsKNjdDCOVCmgyiwlszTMPMdlafrQLZ3vOvaaaT6e%2FS3kipC7S2QCTOmt4KqyjwMljhVaEOgfOSYZWZyo98rtwYNAOzwIBJUATAoIJqt88ErteAV7NfDYWG1LRgcC0%2FvoBXpe4W%2FhewZGFiiJv4lfV18bH9Qpka92qZOdQsODAwbJZarchFqtrP2t2nJK3WZErqsnfK1uf1sDI0SHR7VnUMi0tl0&X-Amz-Signature=7a101e34f608eb38793ae67a7ce84a54cbb7a1706f6e63501a7c6b67e4a0c8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
