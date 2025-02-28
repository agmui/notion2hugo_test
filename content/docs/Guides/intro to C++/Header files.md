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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBYKAVD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFGpQYS%2FM%2FGP53ZCLAn4QGHXSc54sJyiI48HVkmYo03HAiEAlLHqnQoNNKiTjWVIiUC2RXdKP7O2t8uuy%2B%2BY9q5WDrYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOtkJ1CvIQYEwhpzyrcA5a%2BjqMxgaJC7cDGkGGOE%2BfTtj0KjfxdcXjzQor0xz8okn3PUcL1opgXqU7HFf0xRhNBjYFm6IMlwngG07xqn1uqb%2BdvbXpdcxEW7IktyhG%2FNFsbVQ%2ByOJb3VaszxfMnARoorC%2Bmj0%2F5Kc1IqSpXForOJ4E%2FcSIslEi10EjaEQGe2bb3sJSM5g22uEFXQA0I6SvATRkbBxELhsTxYiscYbZw1waw0BH8Y8yUGdTxrNyGwbkHJUIVexr7KA7jCEmKoQDIFCmR6G8RhGDJgKdepDluSIW1ceu%2BPgkZUHlGrbeo0JMLs1qL0%2BOA9Fvpu2ZSmSqWdVD8DixmA6dIqOTR28LYpPsYqtrA2zu%2BBGPnpsK8XFy2pgL8bDhMMrjFFGlJ7SEIDSrRaIOI5Sek%2BKzZcKamWsOnOMrdyW4nPyYRGiQxJnnKDk0%2FiGcs7hSsRtY%2B5xSb9xdfo%2FaC4hfmg1B4RCGkVJtEyEI0IOyEBQcATGgwLw5KztFRT%2BNhec%2Fx3OgEWoRE2JljBB1Fu2OQ28WwoNyNCxS8HgB%2BK%2FprrUopKFepnwWGrikeicbhg4v%2BFi1IOAgrKOviKy2vqLfNdcoDTxz967QssiA1EICN2k0PUtdRHGKGZ66tD2X%2Fl8NBMK6LiL4GOqUBT%2FhDNJHIgEsFX0friGAK5m4mqzFU6CS85t0EgRIcsCeUEbkvifmCF1aRVA6yxJVxrvnpXMwos9J9fKJQO8yrxt1QDHVWQNhH%2FKdzkBqWUmHd2mpVoXrxLBvttZ3eeLxBv%2B51HKtQ4XRvMR1fblXBPUiU6%2FEY2rosEF4Lh%2BKtYwWxDoE2oQ8Q1jMFSTdgzcZTsjDnCsip4bwzd200OKqC41qFvWoN&X-Amz-Signature=40edefbfa1b6db2bc9e90363df213aff032595970eebe6e7a7ddb7d2b3b68c20&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
