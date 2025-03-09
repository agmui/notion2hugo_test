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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRF3VTS%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIA7dUtFJjJFx0yLNT1HNKnVeEGxNijX4Nyx4FlQoPTUwAiEAiuwfv5sA2vDgu37Y1cXZYH8i%2Bzf2PYIEPfsM7L7fO08q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJE5lawb52sFbnLR%2BCrcA5e5bUefN%2FvET1f2vrfeh3LHSNlj%2FQ7sgJegHBz9%2B6W%2FYEjWMuGKNIqh7MVKp6EPdXSvYYlulkI1Lg5ddtgwjG8BIwAAVKSB7L%2B%2B9kpsBO7gttqRXTGCKCt%2FMh2PaI0h4fUy4zfTHt9yEW%2FOHBzl%2FIv9cV2j8nbQIbdQH%2BWrxKU85WTELaXr%2BxlMtHmFbO9zQ7o1Dk7ps9Ko%2FiGIEQ9q5OM5dCj0AlMN3QBULlReaIl3R0%2Bgjc6quZjqSNmGGOtGv%2Fq0gr2Nw1QIce51gBnnR9rTZdaC6w063iIYHm2%2FG6LyeKRH4kUC9buUA8wHCvupq7nZjUEnhbZe4RDSRCLTr3zf%2B41VUIM2fHmPx4jIEXgtVCoGh90BnKif0L%2FtrfsaTvsRKzSfs8d29F5BD1kh5UnH0zdKPnqANHS59gO%2FwB74BHhQQHgTR%2BNZzBEOOkg%2BA7EPOASmeE9uRYydoAB1Mrs2sCPlFUXRSnegWRpulyFJCzH2%2B1%2Fa7Uxv3pgKVisL%2FTUpBa1Izv8ZDTC8VPn%2FNU0bH1TV1pV2md2gtQKLCKQhPnqWsDcN%2FUBYVSIFw113ux4K6zqFKbGVlWmlUehNYQQMmUTmIdJhXiAuoGDAlsMQ153qu7ZwL7cctxrcMKPps74GOqUBHssA0ZQobfuqyyvGrKW%2FSwVL%2BPZXe%2Bxex6lII0KQFXIzlrJ1OA9DZ26eUJuxtiYC2GUOs%2Ba%2Bj2WHZxj8mHuev3O2ND%2FX4M9OnARVlmNGoM0fAPWJUDFETuyVfncR5PEVjdg4mqp3sn4sAZZvTCqGHYewrzjbXwfr8sON1g6BRNfHr3PO3gl81kg%2FfhepFDAqk6acDJdCitsKCOrIfDl0ISJFnNLE&X-Amz-Signature=af36e2802ffe53a08d0d38676e5dee4246e782be13f77452945f084e35e8f043&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
