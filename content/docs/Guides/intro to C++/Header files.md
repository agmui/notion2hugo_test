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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RZRL2AD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCID3a%2FelI8B1wVA0%2FKbbWAMwlxTc1V1nbLi0b2niDFeHjAiAMc7XooLorDQco6Yp35v4llDH1XMaU60StfQ4ZJtR8gSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMBzUXAl%2BFgdDqJO40KtwDqGQcGFXg9v%2B1%2FxPaFWOAG01g6U2JiNiV9xH%2Flh%2F3ouZmosDufeEwv%2FaBChBddgNrKkxi5qX6O94U34sAZsvEFsfTXpst%2F6cNyxt8I20yx%2BnrdD%2FfaK9VPbv5mnFId0NZJgi8ou%2B6t3BA6djYH9uRt0QzuZbc%2FtPwr0i4juziOUxmcuRrID4JEqMWeYFiDnFlE%2B00B4uomXH30zu6uN4GalSZ2IFIVp4WUjxweTcScXfFFPUwNaML%2FkNw%2F1Dz0%2BLJEHkdX9MPPAlsqthlarps2xKTuek4Bu1JOpY5ddweamX7JjFgeR1Ev040VN8ApiD8u8yF9c%2B%2Fkq3pRHZOgCxMm3PjUTcI5TyYd%2Flrjs1s2tEydMALKi0nhX6s72GrR7eawqFf7U9z50LTCLBaA5TJ7sLBSWd%2BwPMM4Wgem9OHj7K%2BP5F0SezodT0uxpEjpZYQuwAC6OJ1LptdsWrJCtsPPGr7ayp9uPOrvqWC3qehq9fEEWEj06kp4RoOV9L83oHk7kBgRJGzAK%2Bo1qEdBQ2YUkWUlu0Ht2BsjJr7IsUIs1X%2Fd77rLIHHiPE3wU609TiBhqB9U7o8oDULQ3XhxIWHpRIIOYzkH%2B053nfskWh5jg9f5Q9JksjIJk%2FwoDIwh7SnwAY6pgFENScu%2BFCkvxsqAOCAdnMNtqF8%2BAUkUz2CRFUgkL6Qk2Ibq94DuPLnBII7m9KYEnRZELew7bx3kdF0SE4UHdd%2BzueF55Gb0omq%2FlV%2FRjBpMTEStmmWbzc5j6%2B49FU0HL7aSzuXz8XYiW%2FJAlUBSsdlLM43qp5TqTWu9kXLWSDAF6tDJmHLTH9AWkTmJg9i6wG9W3r5%2BBAwuSSb7rmWDuBkjzqhGJZ7&X-Amz-Signature=981b986a8160835e021da5cc238678e4a7b002705c306f85a4e30b92c6ad9daf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
