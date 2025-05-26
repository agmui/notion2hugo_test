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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7J4IARX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhDCl0PSlBX7N4VnplPlmYGTfqPXR%2Fz%2BB1zsGDCtzxpAiEAtPHvAWLMQhuFBxe1G97fXVOhWzqhV6CA51rJz0RS0rMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPP6d514L3oKqPIgCCrcAwortBfXAbpAIhGkVqthYHaUuW%2BmDmzrHtMERm2kNP72v%2BI6Oa9zssS17xEkIQm2LtPanvQymAYlPxZh8YK1BdENg31gXLIK3fEltOcmfDIwELwcgL0LIu2UVv%2FEZ5RMvCapnGtLL%2B7jRr9iJkUHnV%2FAHYvaUsNCN7sV%2B52vDOos%2BZ1XlyzLCXV0RNlRgD%2FPAf8kQ2Zmh58KybWUhriPMJRzvwjzh6ShTwYIKC7T9hGaV%2FCLFPM1ng1ct6eJn2WON5EYfrhB%2B4O19MxXVr12XKEg2C5q3TVsI9jQAQx0hhcSk4yzmJbjciuf8RKATyT1Gc0QFSnjdRmzN0BnBcze6t52nAH6j0EdPiLcJ8qMHy2YO6UKgo8nIf0vzfTZY%2Bg%2B0X7wUa4U3UIWj7s0ME%2B6bjVAszwd56VTGSKNuX7Cj2v9%2BIOOWVGiCo%2Bq4t%2BvSnNZ%2BRUmfXo%2F5ilNIrvlTaJMq%2FYY6Okf91LL3X07GPR4Yws%2Bkzt4aDCH%2FNUsH9285cu2TVmNiZ377Cg8XXlnlYOegPmMd3QWs8aeCK7pafkVBOrsAeDUNQmjUAC05RrfwJHiaUQdUUANWY82cUCCM9gMsB7qJPSBC%2FcYS%2BwtDhf7BXNZbfp5OaggAGmhL%2FiEMN%2Br08EGOqUBHsMcSNRkylZ7gDLfDuoEXJJlKeaUOmETHEyvnzfy3AKMqJdb22gyY76aPZEHDpACT797Nuskq0obI68%2BsuKCuEVVxnLcTdp0Dbvb5vNtRi4kL00CGNCFtx7Iexro4jsSLGN4iniS3Y0Rl274yzUgnpeMLle1XW2ip0RZJsRrjk7sc0sKygj7cC9z1Ygw5UIqbqcGJYJsax%2Bnp8EKCgm9n4piFdkX&X-Amz-Signature=fc01213a81847fd307c300289f66f1ca43fce72a8451a2feca1c517cb8e58123&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
