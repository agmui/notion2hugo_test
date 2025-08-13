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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TCICXTW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcUqH4mPUgWbXzcT%2F0aD1iFfAhNRYE2tNh5KAEs%2BIj3AiA1Y0fNhJ8LLqSyf8y55Lr9b4icvsaoJgKGNz3aMlm%2FbCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMqicEqqBocFc%2FrpNqKtwDLxBXHrLogm6kAnK%2F0wJ%2FLxIyl1mn0Mkc1%2Bn1yH0ikH67Wx4lRdaZKiomEiYjtY1T2YIVKz9Sze1A7WYfor4PEIqIyhFwPHKOmWC9nEngbK8hJBc7wqkEmwK0XKo4QTg9tL519ciCYe1%2FQIUahoEPV3B2n4AWogNs5UwPrz%2FeOW0L98ry7FHtaqdHygQv9TvWJDS%2FWWpqg4Jqwy4dmDRswHuh5Fk2CUW7IVZSbZTv9toibo6dMv9hX4OILhtLMLZzPZNNnX1V12BzMEFhqV5Ncb%2BuKnSEU%2FIvGjTzBPWqFP1%2B0dvQ62RF%2BGZrserXbqVMGqBUILCVzYWHxNB%2Ft2%2BS7gWJbU6Sq20gMgVXcMx4tSpNva8SsFgx2duWqfmAM3fDswgAYMIFw7k1xv4IKD0gsiHQisZwXesikeFKQPqrvZE5xtwMm3MyFUt2zh1v6%2FB8UQRHBLxr6vbATMDJ9O3LJyqCdzFGxxg8KSlYPtBwOAl18Q%2B7XI8EtyIhcknG0jqhNM8eiMQ18V%2BGO1Lk8mwEqQdW8V3jUbbg5uSnT34shsZ2F3wo%2FQc4hXfv2I0QrmUfajQKQ5AR8NUSfn3FIqhSrdSy3Fx24CN%2BnSLXvc7A9v08sjBDkYW25hbCwVYwnp7xxAY6pgHOi4zhT86HRnR663pWAjtGWiXun0MNmqvpmedFgy8ul3HvG5Me%2B4qRs0uskwPJHtfZgsybWYAMIMiky0KgWVGvAqqfrLsv7AJ9pbndipUyESUbbEXsT3zxn93OOoyaFlInIR21dBSvHpW5aT6aUIR0w7r%2FyPIIxlkczbPRWpxUcLShfU%2Fmt0L5ACOXKgKnXyrKkvK2ItX3iNDNDUXF7E2Nl1gojTiZ&X-Amz-Signature=c98321bce4912db5e3b7958a67fdf2ef32f0c9a53afc176bd69e2666bb67643a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
