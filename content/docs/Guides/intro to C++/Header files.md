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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUFDLCF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYk6pJF71rmtSuM9LGkNInQCiXqaveFTYo%2Bc06rDXuIAiBr23S0l537%2BK06MPsu4AQdZqC44e0H4B8G0z2S3HnSZCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRoGkVzxD1rgBD1jbKtwDeU%2BsdmP1JAinfFvP6HEzLsq%2BRAd1%2BWjPyEq1XjAEZL9eqzDO01%2Bfci2ha2rOLBqctnMqAhTKckM7cgsi1A72ws6CN0%2BohH6EN5OSkn8yiyx7%2F2O2YHM04kCcVCDnxRc54Anl6XfSVWsTb%2FEAm%2FsgOlhyiIGzBncmSEuXrMj19dsdxccQCEEnJ8Y4iRPuUseCQbGwl0bAY8HvEvitbz7OlVdpCnBZT5mV2cuWBDv4h8ARNwMAhlKzuyLx6qxwl%2F6D1Kq9d2Jlsz68PnJ%2BKgpd0MfqEGG2TZoSbVAyj%2BiyHgysO2IxlL4UFXE34Z2I21pi3c0fuunIJmtRkhB3z%2FEvIRZx549BWKiJrEpr4uM%2FPwLNsJRZE8E4UrxVXgwUy%2B1%2F6pert7w7l%2BdiFWL5OWXKzGzsi5Zq8wcRYBw1K%2BxIeVkNdBzPhRbkzYYYTnTuW5wQlZeQnxzCziwe%2FLgtZtux2YQITOMxAaOew3NYraL9h1hqGeJyK7zOv30kICW2e%2Ffq97O%2B9qOSKs6GMUOCoop36zJkT5jYPfbsZwIGjjHLqIS%2FpqjUkYAQxGXArruYnf0pQTtKWt3IQj3hUZM9gLXAOFDUFm4JJFMEWBLrlTYAG%2FpGcluuarUp09NvHTow84%2F8wAY6pgGern%2BCZrwYwGMhfQ1FwTgOPzVJppWu4k%2BCDsxCI9q4pGRYp7vibMMgM5hl7bga3g6236uHhNfEho8iCfSHiaFS4OBj5x2yBwSNQqhHN5E2jRfnE%2BUMQ743H7KTjqI3xA01OAfxtwsUC7t6gO1n2zlOsEI%2BlgFeTsMLWQdSnp2Kth%2FBDjMW7%2Be8BFICRHPeUCnjPL8Wyfcz2%2BPyenqopv8l8MruiefP&X-Amz-Signature=1eb6f643fa14a06757cdca674995d07b21c9cad6fcbf17a857258eaaae219157&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
