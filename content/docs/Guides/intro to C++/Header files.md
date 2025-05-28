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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTS5ZWG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7RVHUtgh58UGF5uTLNBxk0pth2MOu%2B6vExKqatA4YMgIgZOgsEGi79S%2BwMO1eJV0YGH9h49020qelw5fBIMsi%2BSQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDInVDGtFzn6MR9bO4CrcA9R1%2FqFSXL%2Fg3Nst%2BksPyLa5ehNDYApxi9zofwMgfdnf%2BHNAkHgnKaJIC%2FMMPdCSP7xNd5e5EuFMoyKN9RkJmVRZcIG%2BSi%2BQE4vt9h6D2Lk9cC6RuqxjBc758Ibrfg3zk2fTTIdtJ5ZzeBT9xF4DQ4pEM3Qbm7%2BR4LlzbgZUHjFoA74h%2BMSSWrrn%2Fez0OkAFJLGIscTz1fXGXiU5M%2BhH%2BwrSiYt5gQ4ErzJ1Da%2F6iDpLKtyIF6KAcz1rN7Xw1awtwgrOTUa%2Bd5oBQr%2FqUqm4bFFrjEZuYIqeg3Nr7KkvSwq3%2FrfnmEx%2F%2Fot7LGjR4cApcBT6MQiwib4C4XopPc4J5foy1yRdziyeSqAKhDH9PkXbLFI2wGHsdhhierxYCLTwgLFfWA8dg4He5Ut9JLdv325vSOVY3wVlBpFFtN55YdsoYEsbE5SGqCQOGkwjPGWCCxM%2FhOTv98om3uTCXDwuArf2tLKopEr4iGIx3FeuKJDwykIChw3i6WlHD61V28hvZDPDTPev%2FC6MBDMqRTLtqtlTt0aJGTHBRMUsKBXSP74YZOJi8H5TakJpyw7cx33zEY4EbovU8vw7%2BfkEZn%2BwH4fZ0eNwXCFtXVHZ0zKrsX6u%2BGVA%2BfDj50kj5kZKMKaY2sEGOqUBaHgcJYaerD50OrKyEjMHaVhVQzIjAnZbpEpxzqY%2Boi7tyxC3mQTytGEKFed3KbNE2kTMSVdWHBuqWHt9tUwzrzFTBKumSqLJGkG1BZY7EB3SPH7tm2XgIKk%2BLvLH5EokHkM09rfBV6HOUnnxPCZFdey2QTPV547mV%2BEbIYtK7VSlCpcBbURTPFtYUmRt492Xotj2K1AO%2FGY9Dxj9FXR1gtDq7ZfH&X-Amz-Signature=3c2adc02aa8067ec1410dbf3f528ffc1487581a00670e634fbce3666176b7c67&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
