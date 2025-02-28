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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2OQWAI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCtLfKsF2a30vJcxML2oXpJlld9mAuVw17R50XltIKRgwIhAJJKysJT113sWkijhBRyXieduT8ECfj7hEcM2%2BPVXnbcKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnZ0ruacJYmoyY4tEq3AMk71psTFki2IN5a0ore22Kv6zcqMUJ1BRifpbJ4HJaiF8jpyEIXw4uZL8vIpPbWOVD%2BhGXMUR99pOO0qk2Pe3JYqzYUvw8uhVXwTMBGF%2BMfDKlAwUoge75k3j9CV2SoYXuQE6W94Doe%2F8BIMd1BkBk4hJBpfVd4BFz0J4BnOtl9dmLcx%2F8z0vCY3Cj89fYecgLbqtur2K%2FpXOopCh265iXmGQ8E8U%2BuKj6STHpL0iikIOx9NQuU0pUZgcGMPPS13CHA46m1gz88%2FukZ5lxRoJHScNmox9YOGzqv6R2XD3bu%2FE9yiwXc3eoYskmD8CvuWwcrjnvcxEQ9I8pO%2FezOgoPjMhIVlNY%2FSZAN%2Fs0Y1tnFLqTPFP%2B18tvffgY5KOUjfk0wEwf7DKaMEHH0bqejuWDEo1rXkWeMNh6%2BxPT5V23iJmsA%2BD8yU2Rju6iA6Qm4JsdIcsiw4DzQygOkPdz94m4z8pRGn1RJ6XqAEkyexHBKRPLIa3fhy1e4NhWyVMP113xp8ecaj2f3J%2FbtR9i8espMrfqznO2Q8ERFKx445LKM%2F1G%2FkKA7gbN80RtriT59o8vU1tDiBUe44qqZ3MMLpSdk%2B5YgLNZft6AN0yfvNwGaGztKX4bkuNuNOZ1bTCC0Ya%2BBjqkASfzymXYP6AUv0DsXHoXXqa%2By0tnvYPaV1zPaqYRZBWkKU6ht4RxdkWepld8NHEVuGQQbUgbbUbjLsCTSX7q2%2FdaEwky3aqVpCT9amIg6pGP1BSf1m9MwbiQs1leYeemRaR4%2BxAMdE%2B43fJtDB4pVKoaPOc9kxXwFwSAKbLD8tO%2B8YXPrmEQwmA3J9aIKJtHnCUbXPfyP%2FJEB22anfM5K%2FkBtdng&X-Amz-Signature=78d4f5bf0748a9920c871af060dcea17c801b8c14fa784fdcd3a57b6cca08a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
