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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJXTJTB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAYPmd32iHGgxs4BBCwto80Lwngdp8C6EAIDffFinioAIgbU0xVU3sMw5nBt2B8oIt6Hxi0s%2B7LIy96G0T5AKdgQ0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBm4sN%2FTzwIdmyNRWSrcA2uulU%2FF5CJh%2Fz5HQzhp5zG1LKNBicfU3Ls3fQB4W1WxG2KcVwXsxmwb%2F8yxPluhErjOv2%2BjOxBajEKwn9%2Bmt5Q0xoYiDHQuTvV5he9hRqAsvhBDrbON%2FDlyj3TyUnVO0R7DR4Od7qg3EIiG%2F%2FGgmmPR2w7UXbWPivc5KDr12Z8bJn4OGc3q3G9iPpACc0CLPf2breXEZ2hJOfPNrzaWEfeF6zHynMQTuY1yOHHq8QgW%2FNAw5MXpJeiOFbMuX3pMYl3kimpDG9VAmt0kHAwH2F1Fp5PFX7rjvmM%2BYxBYGKyVbOxUuJt0V5XFhDjccSG3P1EBdUpIHXZejCrQsxYcHa%2FK1nuruCM0%2BXBfy790GfJYfSCQjcQRll%2FpXUYBilYt73eEvB%2BX9r%2FtRGx8OLHLcfiSQfr73MF0%2BWbHniYUN5zVaFH%2BW9pAGxKDQDWZ3dLXOHxaRukU02arcdp9EUypQUKGF2fpwF1zMLq4pjkhwIhPaqWaWP%2FrhitawckW3Wqk89DXWkifYcdyE474icFHHXObyPDhimkBwYlpsZcYbreDTAjgoh24KXwj%2BIwh8FqGzIMeVM6NrCw932UUUHjKaRGM8QFKx4WNDaNnEEtvgW%2FU0XMh%2FnVeewynrmaEMIHkw78GOqUBt7sygT2wJC1VCbfIaHyLsZukWB7TOgXv3tBl04QHK7Xl5b7cQMHw0hl1ko5cOAbxiSUqkSf098Ge2jpUkSdMK9CO%2Fkf9mLfiAFyJXat1cg0nYeZO20gZLjeymWnFz9SzwtbgxaFggELYZvY2c2htcNO0GQ2JKtKy874ZmGPMsfzPybZRKCzkpreWOPRe2z94ZAtBSiYU4nG5B3h1yk7yRMQNO8%2B8&X-Amz-Signature=f4f540856caa3b1e487dade769c630e61f9eb1143ccaa4846c6feb0ef3f92902&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
