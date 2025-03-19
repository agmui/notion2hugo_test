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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2XVW7R%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDVNnPxn5DcxFDkZhg1UEXD5g2WrxRAaPOWWo19fwH%2B2AIhAP0aYn1gg2x0OGgkaWQYgNS7XHWhc8zX4LE011hdtTk2Kv8DCHgQABoMNjM3NDIzMTgzODA1IgxiBjcJLXKHxgaz%2BO4q3AM4wHEXLm%2BU7%2F7m9%2BJknrlo2B6Sp5mppXys%2FDEWF8wRmWHyFh8fi49pyAnszKRcoxhTU3n3Yv9biBS7JkcrusLd0DTR6ppIf5wkjS7gAFJSRNdx5proWwlYSO8u%2FWM927rBA%2Fn3pYOzA1Ju0EDl0KIa6DrG1xIqv3Fqu%2FEJsrCk24VWWetoPEqH8l%2FKZBlc%2FT6OngrlYDHfuMliNSG%2BrmrVAUBZrCHr5z0FUkJC1c03nUqs9XX1ZkKmvUMplvOq8q%2BhnBPEKzQoG%2BD19ef78rDJQ3pxjFDW41rbyqBqz7xxN2X%2Ft2Hn%2FlabCogYmWt1VFk29zfJKNFSy%2B8Fwen4HQKpr2T8cidMmHdRlTrc7x27OSOKYtY6MpwGbPOcAQrkFGaw2cXZq0RYYDwUzyRLXv527Ox7x4Vl6YnAWTHD4TxU2ufdGCpxBA9A6UEvBp%2BuOjYV9SHw%2FDUs3o7QKrWJctSkMAWpbskw%2Fo9KWSAEKcT786v0WOnOk3c2v65lgEn8kQ7grMS8wksWCVSbxtTzB065HA8xU0iLHf6KFvCkpLNVLxxw9SH7%2BBRl1t0U4oYJtJitQCswt6pLtVi9jlCvoETouW7F8mrgfphhlCFZJUje3EkY3rx%2B61BYVmSVJjCCvOu%2BBjqkAWlC7dDf7fwPxHjJgqq9%2FgcaYqPrp2lwRVQbDpD2mu45cT38s4etezZa2Z29LKcYOXo%2FIHTWB4aryFY%2F1o4pHIU51xFHQjErnAqArHC2YkhqAwpEVYslUGtaxBykXC4T3IRe0oq%2FYQKSWnn2uHvft0s3wqBEtt6iuxDOPAZVm9waRogeY%2Fa4U%2B8bNYWNX%2FYx0vg%2Ft7GYV0sSZipoEpg1sZLx5D7Q&X-Amz-Signature=a4055423b80bd02b93c6ead94505d2db937bb991014497d60e9bc0989b29ace2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
