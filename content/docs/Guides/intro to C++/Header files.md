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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IBHHM2N%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf97iZ4sZ8nxku3k5Dt9asHYZb5P4y%2B7Sbs8LfI%2FP2pAIgP2cArnn%2F8zZy5WBCTmt3aM7Ja456KyX3q%2FJUe9oTb1AqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoK5Tk3NiQ%2BfmJYCircA2fmsmBD4yESqrfCnhERiTpWOdY4PgufFy9t%2B5ft7yj%2BoO6Tdga1EPrPkVSi0iqwNMYt4ToWngh3a7vwsub0Z7ltB3wtnwFOFp5x35cTvgM5iYMUi00SNLUMkr0EvTgbPy9%2BocUT7QCcCWuaJKXlbbDrxRfjKLZyiYGIqBOi06j1yXkPAofbUg8NyhF0yLH1E24O7zD%2BFcxRcFTBxtQJma7qBhrQgoI0goQGGx2AK0baQI2MteugG5V580sjZbgMjXDk%2F3bacY07ez60YycYtwrWDl8MaJopKVFDssg0qK6fvmS2pFOnv01wfrUv0%2BUmIulB%2FcJKoVEg0%2BsfBN1fnZ5%2FBXLwOL6bAGj7myPGrLHDHN0uzkYX931a3YrShzY2D0E60Wvf3WEFupoWpnygLeCs%2BW9ysUItInDb5oU7RuvYvevlTuFNtO4Tm4kboYNPQcbm41PGtu9dSqMpXZhHG0JJDGf62W1OAA9qOEkr2BdrgxniV9WU%2Fg6Xkuc%2BnntylJohCzxv0aBYfqWeCRyZhWmXnbSBaaUCj3o7xqerCm32Cp7htT%2FHP3hziZNb6Q%2FVxoWPOWXtDxjCOlDP0OjcrTXupfpeL5bdqp3HM8NaMXpXtdCVAlKZnVIOeFF3MJijuMMGOqUBap1gYyqDx0Yf2E5R%2FZjUOmfmMN0E58sNY4mlfJBTjFvJT2nsvVd5PIXurZYUJHa5N6zbFq9ZwNX2vVabffzRMo70%2FA%2FOhuK6B4u2pmwEPQ0jo2LLdhM0Mv5SDm5mbRNrkfNkkgQ4hqXm7uvXGgG%2B9aVfbKaCnw77FRMG7p%2BHXMdqzp%2BTegKBMFv7VqZHE3YMq1hdHvZ142nB%2F4t9PqhXWDmA23wW&X-Amz-Signature=cfdc5630c7c289d87bc8e9a02532cc0cc6a459f969f5c8277712ab0679e862aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
