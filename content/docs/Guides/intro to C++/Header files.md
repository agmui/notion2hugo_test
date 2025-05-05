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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZXEM65K%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDR9Cnh0OJlBDrCIUU2v2BnPBbnhKBkxkOkQHOGK0TbWQIgKSlMh8ShRhoOcoAQKZ7%2Bc1KuBotiwIGuIrrk35ymqZgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDD%2BZbBnvUghLCLL1AircAzu8Q2iOXH1qPfOPsRLCKeb1I0qpH9PjAoXppte2qcVnVPkVLqoUNuclppCntLXpVQcZ2BkkQ9a7zAVw5IO%2Bb7MeFKQoqjc%2Bnh%2FCL5Xiki77O9bgwcmz4SGHQxVZmL6CweZOdQLrQ7v%2F7%2F3Atyr2R2mmvUgqOPX%2BjmgIcQHSuSzL1hC%2FCiMrkjFrc%2F6YtDt5864skjf9e5rGt%2Be%2BhX681IlfL%2BeFSuJkavGnNVg6Rvzkq9w8BZMoKGAPsCH7d0sG59DEpigqEZuhSAtjTkf%2FgDvWjVNO18ZJN%2BkbNHS5zRUEEF2Qci5nFIg7mUlyRiyPQuRsAHlhi5QYbwquQ8A390AYWBrXRZTyOdbPY%2BCGk5cjq%2FyO6Bdkrnjoswqolp72iswR%2BHL%2Bm9rcmN%2BSiw0LOOM9wDLbYiTWU1LEq%2BDtXCV112LA0vU8t2WEnbI6ppSDqyPtAm57kPXGt5Dr1d1jrVl0hpNSmr%2F9C%2Bu2kpCHqG%2FmURSjGn57%2BLqKiLnmL4kAlOHbbbwFmO6CT46%2BPbij0LS1t26FmM5G19Ws1Q70R2mTX2EMOZr88cY5r%2B3B9G1KrZlwDTPFsTm1IlttYBufXGX7MiQKGtuft7tF%2BKYUfiEjEySagXQ3dimujQujMPGa4cAGOqUBktrBi3CPNJ%2B6ba1c%2FqZaQUJvljXfgIIi88Kzj7%2Bf2KRv9SdSqFE%2BmKRrGWCaDg36W4aWl7Zsw85S6JmC%2B7Iu2iI3XHEptPuhjG1B2PMWGMhXSOrVJpaLT9aSpUp644uxPaYDCC8VFVKV1opadpo6pukrC1lNlcYGz5Cu79OsrSb8ocfJa8%2Fc80uPC1liotK5s2Q7LIi8R%2FuQIPEmit3WjlgaxDYc&X-Amz-Signature=e6e8faa7c80db15230b1b83d6e192704c5981f76f28bfd1737a4904ae7432e47&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
