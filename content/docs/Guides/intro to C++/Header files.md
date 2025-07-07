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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXXNIKWE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD%2BRvUjYs70nze9iG9DoEGCZS8IJavS%2FDn1t6%2BkOSXOYgIgDT7BkHbns88c8E9ea45yJrIz1Bdt1mmrpF6UFBnix58q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDPkZ2g4sjw8BQHAgHircA8J5WVN3v%2FqSVkw1N6v3y4aSzpmaJc75anZtvTFEJTY1OenzOi1QEWFXcyf32pvmfBT0qsILq2pbQD1MaC6C7C9EtWlhv83KGEEdn25xYPw%2BgIQB7u4u25SoGgMyGUE5MP0SrWwjzpVjVIV4VMAX0wHm1buk4LkInqFZqp0hAfJO7UDLc0FUQgc2wxdvTDnp5j4qrLu%2B1THkBV0IALD67Gky83zkEiVFiXEjOL3f24DPGgifD6q67vtQN%2F7jvSSUPQWdCLmux7d%2Bpi0CaQzfzeSne%2F0iJ6LVw2Sjj4KkPuNnWkGz5c2DwM7FJ%2BzD0AbU1o3xn6PgTDNImra4I3Cnyg5mRMbDEiHzpcAALotp%2FakJtBKj8xU2y4yYOAOoIonOwXCziHi0%2FYaqOQwrmRqMVIn6mWrxQz%2Br8q3ReUvUwA8th45UF6sHeeQ56TSAcaO%2Fx1pPJ45WGISsnObNQoA%2F%2BPOybid89sRwO3lUBeuzep5S%2BmZYyimQvgc2C0Sv1MCxYeNZBh7E6DX15gtrYBRtbTzhe2VzKTafRyY%2BqJRigi3l6XHXduUbbSXnfNm4%2B6lFMf0BjI9Gh8Sb9RsjN3L1TwTc4tYoUOlTWwNjNunSE4zRbLVYMcWLXk5yDZP4MLawrcMGOqUBnVKmM0gTrncuY1QprfbUjAHwttkGXLurEtbvSxwXSog5230iXkhQbw2LenIlfk%2FhGX2HOHQ2kOns91WEofe0yIFAwN7AcCm%2BpKWFYUm5s2mk29QA93zggVaBBmwhoEQV%2FJwEaETC%2B9nVdY0T77Kh5OM46wAAVNs7kh6gEIZtcBjzSHM%2Buwr3YB6pJ3UnTcZ7lU6jmZvLUich1x8Navs%2Bl7xZYSh2&X-Amz-Signature=af7d246e36d0d13ac2ac45bf202bba598f159173f79dd9832090ffbe0b9f885c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
