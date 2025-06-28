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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEPO7HP4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQx1NqBtylxgrkx2KrjrbVPqVMA09%2BzrMVmZbl%2FudpWAiEAq%2BKjd0Kx2SrVq8%2FNMTSqJqf74DyhFNAg2ILfBdWsNGoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEV6RSGf2Qd%2FSNp%2F5yrcA8EUXluldbrgfk0P4KiV8aQ9tY2URj8abPHpxl3aLE548OR82NNtu%2BC2C%2BwKAkIpJ2m9rDZEAzTj9K5p3ZXsVwb4DSBRN25clYrEtGwc53VbYVX3mGvDt5agAj%2FZkhqIIdQjy%2BoBBjP2OnUTWcpjDga%2BxgQr01FGvnTrOHYil29sI%2BTyw7TnjBT3sz%2FS9upSu1hkfJhTNvVBFDlNQWOETZ%2FziIFncMEB4uK%2Bj71tBkivUMfy5QTWgQieG%2Bo5gSsnQeAJ%2FwbP3Ux2OuV23tHw5mBny3RcyGYwy6JGOJEpSLuJWe1ZqJsRtPCvXh7i%2BCzOi6P9xdSBqDK2VLEE2nBURxSod0IP53vJlm7LDH%2FcYt2zikNgCKFsw7caP5oyeA%2FfzCEtCQtMA1bqr9z3RUj%2Bksqymilih07yBZxK1SmgRAJc53QjwqV%2FXlU3rPIRhDoUiRI9PqLad2Hh6z8JBYy861k5awi5TNyuqaEwIR6WcYtkRosrwb%2B75Xbnp%2FT9Iaxm9yoIWF017pj%2BRtCEAjokh7E%2FoXb9okbGbPGrSGNdZ1eOVPuHV8po5M0YCjLcRumktWLeJMrvJUdrK0CTR9ecFnCi9aN%2BZh%2Fv0mwgHBoHm3mpZ0eqcvNw51z04A02MNiP%2F8IGOqUBS8LDtNHYhpMmQiymXPIAMPPLkHrKO%2FgLlAURWEcEXY66yOe7ZCZbxEG9YYlxeYVlXJb7NbgDMpBVrsffqobpE5ZyE6rZaKhaOeUvBuWntNh5LUI6x%2FA1Utp1F%2B6Vn1B5B4nK1MhEJcV%2FWxuSeAZJr28Gym%2B%2Byh6LRn1g8NbBkaWO8lUXdzAii6GT0VDYjpYhc5G4R1SHLq9jA37X301sEAcZ%2FU2w&X-Amz-Signature=5890fc02b7db29fdd7609c6e9a193f8bfbe48d1d78edc5e0f26e13df20d69b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
