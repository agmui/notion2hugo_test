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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRTZCCP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BUUEMl2flUtVbS8QXv%2BYAHqJ9wUlfv2Bq2KpeBIYYCAiBuaxYmX%2BJ96T64KIYxvpNZYUak5VWV2ChUaZGhxqMGUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8PZ9COtB2sDE8pcxKtwDwVea9X69iZgIzZK%2BN%2FDKd0%2BwhIZO4FaULdTjkulgR3Q80ceypRhGrfxyAVrGG1Vvna2f%2BVMgNiuMZef6D2jpRQ7la8PxCOPHtZZSSzEJVzFwzh%2F%2FeQkKS6KCq4EctCDRlfxRmOPBDKc5v2mhnWx468oG2VvHucj1zUa%2BQhz2mMJ%2B39Zf9gl9Jd3IgE1V3NQhBglAwsnMWS39D2wlV2EDQJagSXS%2BMdHm6IBTth8CK%2FE6iddgIR2nvIiVlEKIzZtETf7WFRFMsS3izwYa0lpO2ZdzCgfRrMW2U%2BsdliMF%2FEnRJ6Hq0SzGdT%2BNN0AMp2%2FImFv6wzyOd0EnTW%2B3S%2BllF5r43%2FMvOTANSj47S4IHKL80PPESEJ37c%2BfrhCHf1Ki0CIk9XSPFCGhihDyb58E6l9U3M8Ao7TOdMONyAsaJoHXui1SOs793HNXb%2F7xv7R%2BJa53UDdWLuhabYr8a8bo%2BLLLyIh1Fbe%2Fl2G9f5X862QbXlg8VzLRGFzq9txQ8z5wLmLPHZcGp7WIIlQgwSVRNBs62EIq2WBgMOd2FBAX9OFyvxZl0ihDv6cQ4dDfKGL3qvnKUXQui19Rj8QwMXpQvV42lL%2F3wSh0%2BCqP9mtwudq5b%2Bc6IBNOneSIl6vMw4b7ixAY6pgGFNr0CfoVbHPnEkRbIWukybmEYXimuwHOhrY3Dv%2BYQga1cDLkddvBmNDE%2FOgHuF0Y8wSbQ4bE5w9PrYomvfQeX1YYdmJpqHO4OeyOwjnO5rWKEHNYHipOAstYiI3derTQ22XNCLLw6JfnnAf3SXMf1gMyhOGsJ%2BiYdm19h%2FCrWVk5YQkCIrTfeL%2Fvp1v%2BwHfFu6yc04QEwnooP%2BQX6ReTZHIVDcktO&X-Amz-Signature=b6ce14accaa8aae34e407038e1d867dae3fd635fb6a2a98718cece8a1b260136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
