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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627T3Q5NF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYmxS08L%2BSChtAKWwPcIEXnMojJ7QVR01smqeyTr6xCgIhAIO%2FPSTCCqxc0ChgWiSbNBg8V%2B2IXIiOPSqoDnAangiXKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw72mm%2Bi3VdCKYbSdEq3AMNid2umb12J6QmzXFKacQ%2F4YgZGOddQF040gAZsVIoq1B8wbS%2BIgaj%2BwhNmEl3Nw2ccKFcKeUgqS0nb2YauhUgZsEJsebme8wVw4GSxfQqeQV7E9zzNWCM5oWaLdBgDRxrNeaaWT3ZXPvTPJEDb%2F47FCTdrEtf%2BVu4aAgMm4%2BcR7s%2BLP%2BmPac%2BG%2BogQomDlBYIg9KJscYeFX8RuV3I8a%2Ff7jz5y%2FPmrfmkq9q4tl0hQs%2FTA4qp96uROK6W1YaN47GaQo7QiN7TRl%2BaSstEc5p4CGV0A8qV6NFUjnYQr1By8l3n5Ts1sSppBIpyDz3FJib6JgAtCipu%2FJE%2BpHCjAqf%2FybWkNiFb8fTYJk7%2BhLUKkx%2FC97WiKqED3nmQ2QkbmB118%2BEI%2BBD5Trf6a4BsOwhmmFdlph1%2F1cGk0JTfpekbBtNgqsuJjK83KEF4pne5sE%2BsxF9fKol9gMP4VlnPyfBGfhES3E56yjHg5TujcT3WqtXA2SWISEuPZNdgu5v27i6%2BlTyvI1dtzIZUsV%2B48faictY9gCwbhXcl%2BJzcixMzYtjhdQHc0fkm0ueX63PB8unheMndCn5R%2FzTN2qW4C4swXegWS8%2FTpsZwNmPU6iUMw3FoQ7FxWPb6IvrrbDDYnoS%2FBjqkAaC7TzyfZDv7USYr6vM5QUGOkEpzNtfDZhiiIAX0Xl8qfTHK9Q3EIXY1cs7q3feFw1S4MYfg1Z0b9iQT3NQkUvtQxDEUo6xRl6rmz0DKqyCssbASaXp2ZH2UWTLnTR5QXrchGoptGJcmCWBCksNbib68THvzGYw4DiNg%2FNSCYjyhnisRkEKTwxvuUkYfp3klGcgTSNjZUNg%2FabAMFCVTrKdt2MpI&X-Amz-Signature=b1d465c102628f7d8607f4134148a18b629131861d64e219c42d8f38c5b0ffda&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
