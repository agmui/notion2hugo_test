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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLPT6UC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNt4sg8mU742M06OPzyMbdgahbahZQRzWpovNOqIomLwIgG3DbgfGhjgGOQ6jqQQXkBL%2FbXsskO4TLx6kzSOJVBbYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0Pw%2FP5rZdpjeFLDSrcA2EwEtku5pwOabvf1VFbXjDEqpCbpbmLLBf7eP2NUt2D2lKlEdWFsviv6Nd6ziNkBQW28kT8NaTrWHTDBVNbatEPAqkRTRFKqRvb7G8Oqy%2FaOr31fZ0bYeCJmRQr%2BZ1siB2X9sVtriSswtQXVWD3JTtAKl7yzteMr91FtMgUzwKkintS97Vjru%2FNbTt%2FGzYO2x6Nx9aBkSpfB%2FmzOCVbMClo9c%2BYTIZqUsmMFQ58%2Bab%2BjJ3BsC6JcAnVO3EuwH5PNaVwna89yS2G215MbwSzA1vRNToNacTeAcz7JVBQ1jUPZ%2Fa8mTZF4YXZGB6AP14gLtyKuSShSeKA4k5oQd0JyR2sHuM56itqJQFOakYmSAtS2LVOqdDKrS6IbfDZqY131ADKrfpj6f5QdrAOUgQAiroqzCwDwEuCHEGvnU%2BrTpD9epIkNPzP5DBwasknA41l1w7Iueq5iS59YGYB65Tfcj4QAKDRWLN9lp3mEVrXw8NXLx8mY6H97VXuNy5leKzSWC%2FrqLYxE6dNNBrFnX9FrlLoqmEwIceZNNzCvuEkZTlpS7tvS5dxOD0zbyKzEehEMUNf4P4JQlPKhQpzusMDaMHgL1SULpAXPfe37DZ7vhj%2B7Xykb84SYgN9BonEMN%2Fg3MQGOqUBf8%2Bs8J0Iyz%2BJseNccmhh0Jr5upFeJPUhvS5qo95QCLuQrk63CiKazykRgSTUBi6ZkBXzr8ZmT%2BLPIIpVRng3etrrBeDh2cU7tMj7z4H1HW3qMlXFvjc3jxglNf0cYubCZO29CrNBiRuA7Kd2FBkgL0lQzfKFn2LpOh%2F%2B8DU3qcLf2jUBwg4gGWkCYIuh28pvZ%2BH28L3lYr2g5Hz6LsZKv5YgCBGp&X-Amz-Signature=71c6e6e3911f5068acf90a337f41aa6d353ad3bd397c730441f2eff48d30b9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
