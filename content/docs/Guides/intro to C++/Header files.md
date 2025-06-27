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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJW5WJH%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD8WAhjxaTQQ1Q2pHXmS1I1xXFmak7Ryhx%2F1z40AfsOWQIgNP%2BYdMKQ9Gdo7K%2BcX3ffmuUvcTXoEe6%2BPKDURK%2BNQ8wq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLBeRByle%2FVZ%2BCMDnircA7y9bbYAYWN6%2BpK%2BrK5Se9zW4dbqoFlC8Qpuqg3Rt6deugJjb37YS2Jv2%2BgHJJpSp81Gh9G4c0jIVVvh4IceLudCBi%2BmDtGxucmOUeJDRneh9oWeNUz62rLlRYVO7tV7ZzrXV2l9wFnJGpqulO0xWhws4398tG0Th7YhPGm3Ag9ZKDvd8lFKiN2mZRHPfhPBWAwTbtSPbKuZGixP%2B3LVcgCuf%2Fztsx4AjWc37AuCiDrDDyK7g9zR9OtCnOXCRCETe0fqNDQyets87W07Y3%2BNlHdRQrVhK82ePqlWOjN5c7XVHSLVGDO5HrzFtR2zDYJxwgkqHaaByguTU2%2BsmMedM3zdScXJ%2BPHSb41qB3%2BYK%2FwFdlblZUKG%2B1HwYYwMvGJUmSrVZUs8ywIfrPMssYCukix1Mwdok65ROoaA56beOiqgcBGUjdVyt7vlcORl1wmAZ7rtXOLvQm5LcqJeDSF9myPbBGxEzrbYA2cE3sCUvsGjp4Lr1cOt9s7hxa8M84jcJeAI3rXk2rdHaHQvsLsLuS5wbdAUnaBJvodvOMbjGl1ZokGK967yVSCx8usQwwLPwHEw6oracFeJlj3mXqh9lkBKizD0owLXPWwI2oJsi298seuHujPW%2BmjTIXXsMKD298IGOqUB%2FfFKPCD%2FGjkI5egDgu5Z%2BTI3Iz16uBbAp3sTxSS4t9oidTfpAho2kpTF0Q6kXcn7X886TAE7JUI5eMRePUiszYTL2ifRZRep%2B8aTzn%2FAoMHSUMei9fodN3xyWIRzlgpjDxqbdNnjQjg60DaUkcXxjhXotCTmC%2BZqVo58Ay9BZh70gAjtmACrfqUSrCEGCSqaI1vvPsRRkyu6cf31whpqEpB4Injb&X-Amz-Signature=d575add7353cb7d78c07ac362915d4755e04c0b96ba9bcf00627952ff82d11fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
