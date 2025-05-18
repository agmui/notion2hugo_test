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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ISA4Y33%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7eSTHL6HdZnJq6jmv8wWdeRLvRo%2FQXJ0yYZFCR3U%2FLQIgPvzeZlBcHJ4d%2BMwvKG6bKK0Uk0fB8neb81aCiCC5u%2Fcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJOtMks9STgV9jWHcyrcA9tfcb28%2FkzrrC5rayhHcaZ0USRJ1Tfq5H40syHRss3%2Fv0%2B8m5fPVU5MYz3bH%2BluD%2FxrU5aW6GuTLA4vgjfgi1REwzr2GDORE%2FY0UjCtTZIQRy2R0%2Ft7Fy40xFS%2BX80p6zjDf7pjGCHyk4sffzVPf%2FowORC%2Fpl7rfAJ%2BQsU2w5u8EjHiKJErL7aElKzARmA6oeD9ntwPxSF%2FIfE7hZsB973Q1%2FHKuHVATNmLZzCa4Xo3YSo5GnoqeRpO%2BEY8XA9yubVKKnHgZgNV6OAGFWRqnByEBvMCWinLYmKlpoyRmRTumeioLGtftKmP%2FCnaVspQbqys5s%2FbJ%2BTux67OX5suS3v9Kxs2wADSy1%2FOEoonEcWP2atD3VLQldrcXSS%2FjXFzASxLLNRAY7yTRqAqtee3g9JbWMJcSnbwASZ%2F4WbdAm%2BrpN6L%2BAAao6iz%2FQ%2BL6cSUIeHR7AHexzGiQEI8VLrexyjOQOS2NcHsVcSMWrzzwdQXfd6bb7r5ohOsM%2F5ANgiHEDiS%2FGT30r8l271%2B5abmOU3NZWb4d%2BHPIlrc0KSRwTOsxXOl6ps%2FPtw7%2Bj%2F3N45AtMqRK0c0c713lZffe5HE0tfmBqyzWnDmJHd1zPbmpf8JhuvrTl6hgW3y0L88MOrmqMEGOqUBbJ9vyKHZKLBCDtxly43pQ%2FzMFmhDVhPOAL7aRo2tdISrtOLREzGViMfduA%2FF4O%2FTwqrOdTaBVn8ilFyCnJvnSkRr5ZAzMm6qTSVtARN18jvf9jiJE5eUAVgkqoCAdOoMmHmUZuG28%2Bl%2BsKsuv6p71rgXu6RvD%2FO%2BzYQoPejJ5lRSt9iipnHgLuZpeDSU5G4ko02147ERK2aWmsQI3z9YyIL0VvCH&X-Amz-Signature=0fb99c38d074807f4e8b2569e853f17dd0a28f5a57ad65a130cf00e40a7ae65c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
