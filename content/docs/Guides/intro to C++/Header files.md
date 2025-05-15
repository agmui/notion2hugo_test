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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZMIVA4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDSxMYjv1zAkmtxNQXTZpSO8rgQu7KxpyTX21rZ0R%2FgjgIhAMyuFQhUWvLVPWYSMBv%2FsgZKlAN8easHy0xpYH93bR1RKv8DCCUQABoMNjM3NDIzMTgzODA1Igzq39U6Pb2fvFVEATYq3AP7ZCobVPSbMDBOScB5xtPGnIRdtA8FCOpGokIJx0GJyOsyAinhNQT1CwcN2ySZ8b5oyAgBPPmO0EBavn5BjjRzy7FuxQdk52g86DBpcNDc0M%2BknSK3kQJgLPZpnJewNo6AkHxTnDxnTLxQpKPDiYztClbF9PSrzvzI6PO9jKhHMegfHMn2bIOGuaEfDChIiFRqa7tJyyaqHfqhTRd1uk56NTrIysLT670AkemluQH090Cch0KfdkZAKFI8VqMHKerfi8RzYPDwsEfi1gatC14olW%2F4aGvl6x8sW65R0nAl1sRfr%2FG%2Fo4DhCoLVVc7BvLR3v3svN5NayYY3k9pljq4faqLjxBRo%2BBoyHbKg6xY3wLwt6U6k%2Bb505rUPkkzM0w76zqAx%2Bw3Xj7WWEeRjI0TmMlSYis53mlcPedWBVw5YMavfbV2WAbb7z3RxE4ra6P9Uedy03vhINfg5gTTnM4kmzyAZ%2FE0lNeCMRp%2BxK7gho3uTVACscykavtqU72GjAz%2Br5ays0a1xNjWIhCD9XhzUPt5lgr8Y9jKm3g4TfFY%2FHUjBTho1ejgiKYTrPzZOFKeOQXfyDuGqYZgYznxHsILtzFuoJRaa5VvjFGTbkSXpgF9fYTKFPdPQoBcUTTCF0pXBBjqkAUbLc2GqyJV6vlnNeC4zXoSkLLDSh%2FHHz%2BpTg7PxkiozK4lwbCjirBUHOf3pex8bf2bH%2FJx7oUqEupPxmjkClGEJ88Vg1hpVqqP%2F2o4ghIJrVHwXErPolJs40j7ZsRd7BW3BO0%2FtH5X7tTzaEeV1IXa8AObgIdfLd7F6mTFG2P9lvZBA%2FHaOHFDxQu%2BX0fEf1bI5LFxIM6Ioa3JiW7GbvWuBTPhc&X-Amz-Signature=8ea7316cdec48958cd5310babc770817cc09356facffaa001b2d720317c9e24c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
