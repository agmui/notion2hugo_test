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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WILACR4%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy8Y99AlIjUXWr%2FpBL%2B8Zck93ZNB6YpMn7AqYmg1RebAIgandQ8%2FGPnJFS1r6ky9YQd8xi%2FmrJtoiJ9VDPxZhqRgAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeuK45bRKRuuNWjbircA6c0NLZnZ0mZjiiSVMH6LWxftIl8y6gNz7tVcEaI4Fc4fJnUPdZO%2F%2BwWJ946HxKL2ElhQoJPIM4htPAKvzQcVAmwodmCIl5BgL1GbIFCHaTfQpZGqLGcipQPvsTekGrn1PThYC0LAfAQGWsmUXaCEpoI5E7zqvWUSLi4PkkKakRo%2BYCP0K9%2BJxPbFD0z0lBHiY8QGbOZKPHDKRXZWyxXc4NMyNLswAbCDBF0MlAkW1SdTMPq4%2BHFi6X4GXwzHncH0cYF15D8AiEiTLK%2Bvoa1HNLjexc5cIMGeFHQrjdSFxY3wXMLbSk46AItLiIw%2BbsdKsRbggcvhK3DqlUXcvADQSldY%2BlDW6OKUXCIfYFnNlYjc7F%2BnSa6eXAwc360MHhGjCQH%2BYpPzld8nnJ5HiYWFz7DK2sYC8ksmb3gjubx7mwh4JR54KpHu%2FVnAhj1KxZJcj31k8Nto4mMFxABC9k80D6tOrepfcMxKMSCG8dbIpeVuY9Mbtgi2BexLKduuk3vN0HIYPp6ofc%2BXpmINmbHo2B5l%2BNqa34WbZC4Lk5hyCwEBiVJv55mSLDuh1FS1wsqclt55Fl%2F1%2FDmUeJQ%2BlToewgfueW%2FDP8bovQFKiNcEGYAcgZg3pKRMaFR%2BrMIMNT%2BxMMGOqUB6qGDGMn9oNMImpwcR2SbcKYCSoHpilkzQm4b0Ky9aZVMBocVmfdA%2Fr8CtsmuIICqzbjyPV9CWPlDpPyh3gF1Gq1PIMOzDMe8%2BbBuQaotkiyq1MNujJVnD03zm74LUK8R3by8S229ZAbH64CjGEerPeFau4ACqYxSRVRrCBpzhiC9rmP0wrEG9kc73x%2FEDDgXqA7pIxWwsMU9u9iAZgEHlcXrJrC0&X-Amz-Signature=55e603bbe52ac0fe04d0876fd60ffaefcdd7cee8f9fa33b2edf1bec88a6e65a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
