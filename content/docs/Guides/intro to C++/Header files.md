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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLTUOQX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCICcumjN8%2B7J0FuLR3qPCYnSjfLkCwL3o6o2N1KavuBuPAiEA2G5gQ6W7i%2Blk%2BC14aJ3l5bf1P9swZc3SoVbAD94I5pgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGdDMBSWbUPxWwADSSrcAy8zxmunyTp%2FfPnGkEgARb0VR3FLUO9j4u2ICucf%2FkWVDrxlKwZ0Mc84aRqRmHMnoaM2DXam1GP3LruHGhVEibmtYcI0t%2Bn1nByoZtL%2Ff4iGqKu2V%2F2Mk1wapG%2BJuRT56kEmJ6m%2BwLapnHm8DkczzZxN4SWNJmcbCJVi4I%2BymtVt7%2FgCLeJPM%2FiWwqcZanHXsII%2Bb7q9TAxO4LZXHKq5UHUafZjEZeWwOAI2FpTIFU59ecH1AG23UEM39zmSOofakl3EPLy62JYHF%2FDhzdDlvFvW57mQEitgAq%2BsAe5IadN9svAPzwXwN9V%2BB4zDfMaAURdqnOdefE4oEUlEzvW1WehzzzXzAqGbjJj6y9WK6ofvJeEx%2Fo%2B5sfZ2ap2tD1AAjaS8C5LKE07W44uOk5KKAiFfpQbpxLb2TTEskhVE4ZKNbfaDMDkxzDJvoGP%2FXlk4HrRKOOSgvQ%2BhZOxZ3lTSARPOIGWdiEmxcPtx4a84MmgfYcpxBz515JW5u3E%2FcXQXLRizvuHf2yBeRg8K3VKTO5BOrAlNu%2BMk5mo5G%2FcbXqGeI%2BR5ZYY56XxMGoeE13UrM3%2BEjx0F4jkVEnsPDC0sWmyVX8D0P3jGt6cAl%2BRCf3hC9JDyKw7ZCw4wwD40MPS%2B88IGOqUBB8a%2B%2F20zpcD%2BXzsHbmNFdJXJVqBZpSmuwpiiSyCDU%2BwN2KGCHgFI70L%2FebgN0BP9p95eL688O4rHasCg3%2FjLfhCqleoXsP6VZ249%2FjOBJ8tIfN%2BpGauhmES28rA0W2mRcwYE4sQxE1Zv9r6XD5%2FEVMNo0t6wd84KDPwgbEVd%2Bu%2B9eGpq68b0GwTtLSxS%2BA6TNdkZek6ZfSXIl9svjlZZPhZoNWIJ&X-Amz-Signature=f93ddab666ebabbf80375bf0c45077ee04fcd52eaacc6dc865b10da6e26e6307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
