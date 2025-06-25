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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4YIN2O%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCzk4oMPOXOCuryYWithpXzcgSZNapYme8%2FmL8sdnunwQIhAO2edjeBVdRqiLrVP4zbQ9we1AQecL7P2fg%2FBDYL1l6cKv8DCEwQABoMNjM3NDIzMTgzODA1Igx2AjsEXRbeLnrOQKwq3APDG3j0YVPO86p65znWDNgVNeQME%2Balapp%2BqPaoR4SwvgZfMXIIaStSVwQThNF1xz7HkStEaWvERau3MdNqRHBWuhZ36dx6MiZ9T5f3Bi6hzmWq15sFmsQ4C%2BB5j5xDjrdBQpttTHiSyILuv5b9DBRGOc91dHwK9H%2BpDzmGFOvt7wANcv3%2BZsLaj%2BQPQxkpBD9MIeLAqWBVhkAFdK5FS47opheOwNVSzkinSiOjvNozFqrEZZD%2FiJD0btkkqe%2Fuk9dXjTVp0srREHiE2xepaYcL%2FUqyEIQ3WCoisMODOXqzrEMVifmJguZasJeFdPVCLB0QF7b3wVz%2BAwID52%2F5se%2F815WXZ5GEuaBiYmT%2FZ49tyWUyW9KROtStMzHWVVIPEA558uOOBjNC37SzOWk6zd6tL%2F6tDyi6YxbUBVQidHFYrPTVB5NXVJP4ufTyl8K%2BAEKQEXcyhII5TpwHVdqysBfF%2B8hrVD8wzNHRPNAFeOpQ189b%2FH0OemoHRUa9uH9xHBmzN98SFP8OyKuTbImKtmZEXHJg4WICQzz6OYUwEnFThtcyLD%2BPGEM6Vnnf0NUc0fiMkMNEg8RJ0mRi2ckjxg2R%2Fe3f%2B9mv%2FSghbOSTuL5dXAhW9wrO5D2wd9YtqDDOjPHCBjqkASz%2FvMmz2YNYO%2F0FAoiESLbQs9l%2BRxITRkqEaNsEO45QFDvL9sKO82QMkrUXCbtxaX9mawa05qu4o4g5LxLvmW4MSNSg854KfYQWw7TpRJFIV20FA4s1zA509Zd4x%2Fp832oAs6GxfRjlQ%2F7XQPhxUOtcZUMyWuvb43zBodP7dEMD6GpFR1I4M06yUMTM4d7EDFzxPpObG7ooS6spbn%2FLfjG8fyul&X-Amz-Signature=2520d60d0d4c21d679817aae71e98fbd25da40123f984c568496b80008ed5f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
