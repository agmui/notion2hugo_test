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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TYDQYMG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLctg%2B%2BKf5QP6xalAR8buFTdGLkmHD5hYiPGTgOhhXYAiEAxyxuPqM4rpEr91V1utlt4flV7z%2Fw%2Fia63sL6GA8iSwkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcoQgZElc%2FrvGvTRircA3YnJRBS4ijz7RYNBzZOZTmJ6u4nAZKyC7BMEbS%2BpMtcw0%2BdEi7E5D%2BDuUH4W3W3%2FAZI77q1YKfB1elk%2FXRzp6tUZ47SztyB%2BxWxs0ZYO7mU2X3Czy7P7HjxOI%2FWfP8PFGI5vKRaBrETO7Y9%2B3Li1%2FqOii9iaO22Erp6y%2F6stMktlFb06jBHIpkekG2K1wBo%2FvMXUgbBNJkNpcNpvSumL%2FONC7RyyJ8BbBbm3mUb0WCsTIlA0tWC8YlGzTyvUjDwAAmaQa3mZ97JLfbg6bIJ1nCI%2F2y7JOQywXZipSB32HikV8L2EYBXS5CMZ4ucD%2BBYcxcuWy4DCrCRZbvBawZA9W1ASJT26SYGMFGQCpEAkYhCluHvESbzfBMIFdCfJQSJ%2B%2BQGTXeEJlgr0r5HSUg1kKAXGJawMOmQj%2BjBIVznXAzIX%2BWaESndV%2FiJWct3NSXXc8X2CBy5hxkuNj21i1nWQqu7OZrqM5%2BpLMytlB%2B0J2RpelkpxQrwa1veOC5LmUvM4topVOnF4S1Fv560Xelg5At%2BmodraMm50p2vQ6UCanMl0Yj07GhqGexadTDI5iJJblfQvciw67xPBqs99zgCM8d%2B6QNYqUk%2Be7UHHXJCv0ZRPSrqY0Eai66qWlqGMN2Zkr4GOqUB%2FCNF7RqaKCejQ3BRsEmnGRfdXfy6k2r3XakldJ1o6XdEaFTBJG8sExXXZKbxlcONXEv7zkRtQ5c%2BaUNdZ98knwFeHpgq%2BlkRAga0e%2FfHF1ze3yT8ZQtCmP9qWt4KdGerd2RyBvT7d6J3TAjIuEZLGK6FE0CXXTIcaKumKYpoIfNQTumrrRrH7AaNkqiHXFMdnKuaqhHHQpQne9FVNHPIqQmwwRF0&X-Amz-Signature=68c9313fa62539c3e12d8fe351403e75ec69997882abd10b4a85bfeb9c220098&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
