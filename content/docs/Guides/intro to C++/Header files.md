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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV74FEHB%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCHEOIh3Nla1OYxiLXEXstm8S08acOz1k18IYMBoVM0zwIhAMzzjB2Vb8pVmppw%2BAns0ybWLQazqrdVW68N848FSkpnKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5dUGzQQmM6O6UwjQq3AOgHhrC0KUvLHgbpdi%2BAr%2FqAyhb%2FUIAbNqwXK2jggnwQddIWPBSJ301TV76qsFdwmfH23VREbYbiIITW9JN1ssoW9YI4BhFOBz0QsuxjJUv7U%2BnJlt%2F%2FeNc%2BygMUxn%2F0Jra33rC98Pek3SHnWF0PLHak99TbwaYqAkbrvRFhHc4j6qYu1LgBw%2FbPLk5Qn6OIZGwojCW9rgcbDYKvopFZxAqzje7bkICH%2FE2KltwC7bf3ZWfhf19GhFc%2FcEW4GOfmWeU86CHTbqyjjJ0uDMWt%2BuEkFFSBGbm0gYIo91i7x1uPrNovMcgVZU2d8in4bubnn3BsSeE7LTG%2FOHRxQ1FzgbHtF%2FGfHy7scye7oMGBEPrctbGt4FuVaHrEnkbo8BEEqKq5exOljkSxUefddu6L58Mo45W2KxgOT5cR1FW4zOT%2FMMY%2BlrR4nNl9KSKiQNNwOWUbcbqoXtV8xSXsoXYVaMYIEHg2PAOyZMPEiJD%2FjgKxMglCr5LRZ1Q0BgnWTu1Sy%2Bmo9AsHWDBJaYAZ%2FK34qjnuJFgrTJ1wjStEVHIyyXvcQj73ejZpA8eT1gr1%2By6cYEUryfUKzKDrwQem5T9vJjHujKo0%2B8HsquuKrQ1AMLmb%2Fq33%2Fm44FR63rqyDzCTyt%2FCBjqkAeIGqlGrBx7lsceCSA48eH3BFsN3eZH771iDcRODsJdGBFxOdwoW6WzqCACopWduoFVyApsZRHWGiV%2FI%2Fxy%2FVrG2KaUXsVKde4IJ2gKye3eEdObLPfQG1a1D41TdEn0AZxT6Vd0of3jvDSYUxRrwDz%2FTnjms0svg8eHIubNPDmv9ZQYOfQ7%2FAEF3FMVX1KqlREi1h6%2FInIfaYJBdkAN2dnArzFQW&X-Amz-Signature=027f64e91436cda4f2650b24e13deb9827e4c6347190d754caf4909072f8187a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
