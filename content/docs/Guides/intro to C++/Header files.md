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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7UA2HG4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGQC29B2IOdJba5DDJ87psihB7HMZ3Mn4qm54DZn%2B7AGAiAg%2FU2i9GJMy88lLqTyoRGYZ5AUOki1GWjgWJv%2Fgg6OLir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMOMGPTao3g2ur%2BeekKtwDCTGP1eIBS8cEFOXgyxFY1RtbwCGk%2Ff8F%2BXPzSMg5a1hGnlVyqtkdwqX43YeLZl2WSE%2B3a88M2iHwR4moZ6JMRp9GuQOFtWtFqKjA3WZiTg%2F0PmW13U0h8whX0SGoy6wors8Evt%2BhLx5hgrVawwP61V%2BGXm6kDtsn%2FjcI7CZks8WsCu%2F0zZp0ygsuNtYu9eqrSsfxthteTLd4xX0h76cityvS850s68YW8GlIXKK1%2BioQXxEye5%2FKBMd2CYs7eeAS1BRFWy27iQb%2Bi1kD3PZWjtqITj%2Bj9fPrQ3kLLOn2eZQ1NrEsM1MLHrjKdYjlE4acvRbeXiEdYrN7bhDX77BqKV7vYT%2Fw5FfRblc8JhPlXVJ3gD05%2FLGK%2BsYsW3m753YeMxkZ3H3XugrCBZudVs3Rg%2BA4%2Foxztdqu4mzrhi7d9iQ06VLlosyzwUN6DJzpJLP4bnjPyi7SP%2B3IB46lm7W13dAh9Acl5jjW2uE6DSLjhMSms2QcOeIQ3FhZr9pz2V0eaP6WoZMGIDODsUAiGcJYZieJWEtlasH6Sxy8hzFRNq%2FxsD8Gm1zrEUp%2F9V6tV0MNvQFybbj31W72MA2rO%2BIz3JnbGemNyq1vSQPt7k59BDfu5oqf2P6GOEZtG9ow6PqWvQY6pgHLKan08yrDqBC%2BonZCVZi0WO38NJ8b0jvE1ADYBUc08icOsENUp3aQGn1bobOKzmHpNJWqnQdz4H9SUDyMgAR7rTuvalMi4VbAV18D28xeBCNcK9paAkBSPmgd2hVo1Xxh5DG8WwS3CZKPhrfj%2BSLofUc6y%2BufKPvEife69i%2Fux6sfjnZ9HJ0vZ5iWyqtUVQSfHu1LUeg%2FOm8DPqcCqd7vV7NJy21i&X-Amz-Signature=d3dbea25248fb2aa17bcc7963e0e036cebcabae7860ff0e797da82ececb32e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
