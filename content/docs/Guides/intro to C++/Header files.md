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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAYWZIMB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDmDv6M4TnKO2CqsUrcY8267L51m%2BkpqyfhEgbPG6YM6AiBy6xaPJOxTpx2OSPeYmVo%2BpnCPe7XEEG9ZI2UaKNdd5yr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM80bcv%2BltQoHZcFckKtwDJaFg1n%2Ff%2FTSLTEfZ2c7ery526eTYmrgh8fQx1WD07d%2BVcdrI7xyKEbSJlmn9T8O%2FopNpSfxZGFEqOj1V8Dvi%2BDBlPPcyi7HYw6kBL%2B2SjqHeazKVUIeGXpQCZ43N7Je0SWl%2BVh6HPO%2FC2f4ZLiw2PIiwSCoi3EC7wwjObSDSHehfTWKcg0KDy3JoQHUVXyg7Ajwps1mC%2B5d7ei9e8sPHKq3PAJbADmS5af4e5mdk44219Wi8Zn2h1M263%2FBcYkHNHiYbvyltVcR7FExmlWttqMRtFXPmT6YVEnxpI%2F4nyORm2cxi1h%2BHYBEW453LjKugXM4VIPwFsWVwjxOMPPKQ6%2BaWWvPnX1QjggQEw7QVRXNAfNFznmSG3hJorW2KPGiUuic46WPQp6awmPJr4uR6aYaf8X2Tr6%2BrXKJJRLqxEYXsTa%2FVBGiGlQT5S3wohuYa3OvCLDHT0ByKiM7nrmT0UqLyF%2F3T6J6diq8SiYDulrDOwT0oEp7toGpQX6l4AC9eIcDB31cPwFsjgGTNZ1CqAeEAFQLnAE0AD65DiXy2BAe4vv5lenSKgr16Pdl9UjXgCBA2lGznkaKtPAHoZPVsEdzGQED0aB7R6X3o5kh26ufx8EqF0ZqElYcSJz0wrNORwQY6pgHWRxQ50iDsJ%2BAyqaQo99Z05eNFH%2BAHwhjqpdRr84lDqDk8oSr1UFcWjIMsDQ1jEZOa6duCiuRA%2FAkvEu9SCS9UvqUU5SCDdoVFwUiJW9oqimPc0hWXc4Qht8sVBS37qM4%2B%2BCXjf3kfaLIOKbilGApN8RNOv9e%2BksG9k47YVQh%2FeIZf2znJ4EIt%2B5ZfZfyrEhPe3io4VLNKekE2cqnXPSSwswC9NRh%2F&X-Amz-Signature=244e83e22b89082827109d7bf1d37b42377b555778f5bb4cd42310613cff3bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
