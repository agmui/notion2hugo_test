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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZBQDP4L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDouhQ2m0hWphdv1W3X57qPmzm73cbJvobA8GGzAK2obwIgbqWfMgcYHummlLZNuHVfUPvAaEcoyXdrjjWydzBbH%2Foq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDIsutz7HTb%2F%2FPzmCoCrcA6iS%2BXXsVIVGtqVi5nFk8MHWV53006WqEjkZ4q%2FUaq3aDDh62kyZzIEVjmoY5qRgcuHGvsI%2FaSqAAG6SnIZiQd8ununVN7D9odfiBQAMUIsYlin0BxhGqKqdfbIZUMY2BBZ3Ts56WxdUmOVUnSNuwQJ4VGblgRBtLs2zNDo4DpanU4m2SVLJ%2BvhERo23foRlI3C85Z9osBCHoV2ndN%2BbLZfm2MzKm%2BlEHOkUPJJgDHPXEmgMAJTl3hq4u%2FgSVucpM0dgyvAeOVSMIWqvVypCiOa%2FB6XxOOO4O1K0xKuYMYA9l3BtP806ZGmdVOT4yuMRBo5oruW4II%2FJbNgtF0uBXzTJfmoQhYGle69H%2FFqp4PO2%2F5x3m98mvg4z3Va5bkUe6wxQ5Mj6S4s1Lof%2BN48f1yBVTK1ygrKM1%2FPXy9j%2Fralx6A5imt2F%2F%2BtK4dkpvXZsjZuY65z4uAgZg0fmfr2QbmPEpdfQd2zjdMMnj9craRBIK5H3UmDlbsc6mNcMiNE1%2BhFAlksyYki%2B49DgD92bzlD0qwTfggJadu8iBsuckfRlvX057nLIlVWcuSFCducnZPo8bHWjy%2B8G19xSh3DF4yynL72R7EZ5N16LqPtDJO2kK%2FRb6HOx40JHIcSMMO3Ukb0GOqUBdhH96wjYWA%2Bcl9XL1U2UO5%2B1tfmXVFQjMa28Kz3FUE9YP5%2FeVt6AG7mG0MUr2yO7UVn1YEKJF8q23BuFDXuxnoRaDxvkEcGTOTGrrq1pMbxgYYT%2FMPwMlImAsxD5Bo9mmugGAwA853ZEkQ0VmKPPAgQuf0tF6FU19wSam0U0Sz6RKsKR2MF0ldQZ5hIaohhtzmX4A4l8pKrfGjfEURVA820vqXkk&X-Amz-Signature=fc6b3eb2cb2b6cb00afd53a2f25d3946ef6a67935505ec0e1fc56eb3f1604607&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
