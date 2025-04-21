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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYAHU3F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQClKzLZ0D3BoDjM60MWbkj%2FT3Mg0VxNnBHF0rzymWCgewIgUTTo4R83ci5DrYatGodCIekZc%2Bw77mdR%2FKgywiTaTPEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkroPvXEiWFxJumWCrcA6CGQa2xby8YA81E7c8%2BSr%2FTifqyv1iG5fdY2kK08SVZWUsBI7pMTwMlngkPUFkA%2Fi6DprdXmk0rIPE6FPOzuu1eMSUtGyT7As36mPifl4YiAADnjgBGJjiD%2FtxiszngTZvTWLn3VNbMOsWKdH4DX0D%2FJ82pSEMBDB5ZSPLJuO6PCExrl6h6OlsrZMfP05lltX7%2BIe5U2F6GXBzP64oupXKtMo5wTVejblKtJeD9R8s%2F1n2tjPCMCLioflPW1ybXKFj7%2FqvWMu1KQJKtzFBJvwet7X%2FtzRNpVDghnKigyKXAEYvjWdvhz3bHpeImJVi9VheDz0QcDn80lpd5Od%2BuQ83MkEt24sfeehjdd9kNf5e0K4S21azzN35hxEFJQ0dMIuobZrSHazTZHfIeEHAcC7ffo6F4IR04926ysUu%2BuJrf7Zy27e9gA051xu%2FLFrFJ0rpxxSM%2BnFITWRUg%2Bisg8LsiObCtSfqECkWrD3OXCxCyEVSnbmEUI90XJYbZ6kK9rfG6MLwJtuI5LS%2Fg0m%2BgAXJokQWarA%2FMp%2BpSJH6xE910vUgcJZjYQN01AZ%2FGJtc7%2FGuHZXkbuuW%2FC6y05EaBmEKk96%2BjJNvNfoi4LfWnW4xgdYA7JMb7e2raL3cqMNC5msAGOqUBs5qnC1Zil9OZfYZZHLNyl7xsTQAEJAGn%2FecKBxnjrSn08nDJ3Sakztuz5zIHW4hdxS3W1NuImLrO8m6lDrgWtNuzvHk1h9cWiEoLvEAZU6K7focG8Dlg4FT5ThVeFuRE5uZ%2Fl%2BadVhDoWzwYA3pYR3KYEds8NqYDeK2A03Ibce20dX%2BVL524iBpAAxc1ke5sG6RXJQmMr%2F2e0Qb3aiMloRDi0gfn&X-Amz-Signature=e507110dea158512dea6ee4df3e859b739d4acba03c3fde48fedc1e887239c06&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
