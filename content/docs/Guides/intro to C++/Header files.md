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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EC327O2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDvnPZ%2FSgWaSrD5%2FgIKkXJD1y1HUJmuXLME6adaTVS4awIgG9lgY8x7QZR5N41A00mTou3Kjh%2BcQB9G4bPdek0aoycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlJugIFNV082elGlyrcAysdUXjUz%2BvKQf1t66avEBEF5wjGmA%2FdnIoDOlIOmiws%2BClg7rJiRBdrJ0T62D306HmgR8keDhnEIBqoJ0EfuUnp%2FUijUWDXhCe00WbOgHZfY0H19SAT9eLJfD5qnI6S4eW8xeAFYgt%2FwNQLSodRek66nqHxN1rbg2MKJaBfVu7t4pl2dMfR0dIjlruWN1i7mbjEqT91ggULo2435DH7EUL8B1qTY9ddLEb5eGP3UT23%2FI0ThkRMNGZa0Lua0AdsX9ek7DhXBA1oRWRwovW3OEAyGrfGnawNUXA6SqTQU%2BuIa8BnGyVx7rvbdrBlqjNXTSQTWxXNCr9smcXnn6vOKgT26E5rf10UsvqZ76HiXUNqAjOjb1zV2WSmTNeLvanZZ8ON3SrIHOY4ccDT0V1VprpaZYBy4S4JcxP2RzmwNcBAEMK4Yws3dmgflgCPa0YZXiW5ZfiFKRkKUJg%2Bk81CkyoxM8TM323%2FB7fkVmKAAnyErni9chUpNgDkNTmLuEZSjQV5mLkLqL%2B2Gzdr3P4vmSTbdk8g%2BPiFMHSp0%2F0sRKUjFMzjQ1OV%2B8zvXn2L8yJdJ9VmI2PfGA1Na2kZB%2F9jd1Fj4Tp2AzY%2BFP1CLO7j4l1T%2FAeFT9RaPQOs19i%2BMMHe18AGOqUBmm6rqhsfZaWk2fcUNtglgAL1vCTujdbAJGjk9%2FPOTwqCN1kcAtb6ERxB%2ByvjES4RnVcsp2RMHWa4NfyXQ8B6XD75c9LiEdrUt5TuRQTtAHk%2BDe5mdoOdgdRwnKp7OiCquEtINcZncdMS0cOuONEJKG3z2INFB%2FSyWGNzAtKGs7g8KZadpyHorUzj3I%2FcCVQyyqARBR%2FHgHTunMOaGpMyHD%2BfaNTz&X-Amz-Signature=a9dbe2b2f7ac4bbface4b51e582e7c162dea5f6a80bd07512d032cdbf1560c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
