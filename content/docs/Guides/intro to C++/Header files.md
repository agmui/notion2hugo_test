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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UPOHC46%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCAbHsQjEpRbhgEzwoTrmvHqeP1%2B2KKcZ9Sf6tsDkrcVwIgOm3nw8jjH3U5YpNU4QbpWmDJJTYSONaJ%2B2iAnxnbenEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJVFJsPgEcZCCbAffSrcA%2Bqx57682bhgCMAJ8ula5kSN7RFx1MRA5ROPEDP6DYPmi3Z86oOczS24cgxjnu9pAE%2FmB8vHS4OIozeBrgpErTDGvNeexckHCX9WCNwSG1BRQobbVahjyUtzu7U0Qz6VytlSTKKFcJEZTP4lcVkXdIzN5T4ZU9eXMwE7oRt5ckPqLuDNLO%2FyeAOrK5d04RWVga2J4Ba1nVQTRUHd5LdyXv0N2hvXXRoZay2YqKzllFBExRXn2o3I8Wt%2F37zL0NiKHBPS%2FxhN%2B9Al%2FJ%2Fwa%2BpJF20jaeZb2C%2FzQRTKrzWtdrqGYLeyZ6BpjVEq7O1lj91NQMwur%2FpRDuv2NSH8qEK7gvFw1pcxqT6fEWucZJbel%2BHMLTqicPQoSWynX16lRpPR8w64sIm6kiS9cVlkXIXMwnb3r9JE2j7lRzPIQKpB3lvKJHin0xIolUkHHxw9eFgF7GqO3wT2UFRqL5tWtRTQFPUefJotzo9C6fTaBis2h1cBRzHAZs%2FZLnSIfdKqTLv6ARhYuScp8duIwpfqNpodigNrbw43XLboM9mVbinFUk6byN2kGt7LgZ1fdkcMI%2FSAOCCbj7LIEfgy0B5eAAFr6jph7mlbkhVluXoOQuWEjuKZ%2FrRltfrKrXK7ymjUMKqG2sMGOqUByrkKswcvpeNwKLat709b82dXWyIvPuKMmUR0N7riHJ8r2T2YkdO55jhzT0Sxe9TNvCNa9YM96ncSumbhyqL1MMW%2BKE5PYDuQumExaBLSo6jV%2FveBhedwGRIV%2BhCg37Bp0KpWwaLsJOuKNhL2WJCBMJvZzWx0nutii%2F1kwUrE4UHx7DI3YGHBUzxqeq%2FK1YPPeN%2BV%2FUD0TAvDYh0Hyl14KXPc5k4Z&X-Amz-Signature=3c78574677c6d5084ed69012edf1f0fcc1a7ba3c28b6a8df6249bfbe114f3723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
