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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DCMKGZH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAkWSIftk9lf3jYC3rsIEI8VHvXK7GkWxbTnOYmAJdt%2FAiEA5aJ51JqkGlMl91e9Hedp%2FTD5kuBRjQRi7SwcVzj3cboq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIdhgEzvJVtz4RIGkCrcA89chaLW9HZ71jMyUZ%2B0dcbPKiDbep%2Bzj5LfyebtusOCDbKw4Ut7PvH1RHWzgzxhsD5djUapsy9fHqYGDbkZ7Zz8d8GjxLcF4NvsU9ph1Bjx0hq5raG68WwB0lYfyQAk3YGJ4BigNlkPhLDo%2BXBNcrYbjVjLN1kUQKgL91DLvu060i2Fbr16nwr2b1ocwPeMBOAVDj7ls8oPknYjk2LSuRAUK0C0AI4%2FANeWyh8Sd8Rbm%2BJ2RnCrlJyyaKHWY40t%2FtpGsau9sFNfue%2Bixc63nM3sqtEdyb62K1LqFkhdCpJd3naZ0AVQoJJmeonLMkuoU2XrAHzRXgSEEU02n%2BcMdhdf7gERjXxnsst9D%2BoR1072dPU4PdfSmXV4glPv4INj3XOmnGbyWyZRWF2rOa6MErGCC2QCwi4WmTvT0FUw5i2VrSoVNh9fEbC5%2FrSsUwJ9O7eyA6ypUSV6wCeCjgc7Z%2BnKH56K4EMcZOU3ZzrUsGEmt3Wk2bZP4rP%2FdSn35g6bGD8638PMWjRBA8JDr%2FeGHsnfv%2BABhWpwEg7dG0VWlBBGyUhw%2FhlsecRfgfS1HUuzzPTF%2BWU2RhxurP3zByhA9PZp2toXCXh5ZhgnrFHQDb2Gq8dUb1ltpI1%2B52ayMKmhx70GOqUBIYLUarqiBEXxgNR03zz6JGrHPBrroI%2FJRIQ62G%2FqIQxZQ6p%2FTkssenf1iXduowwb64X8AMxvOFEWwtWdrEQQYR6Q79blyCkgGhQpmy6YvKFDZw%2FucWVj%2BjKTJKS%2F4qRBmHK0yRIK%2Bv%2FZvcU3rJmlSWfWtK%2F%2F5Mw1ocYJApgDnUJ9UsO1RezmL6B8aupF83UqeNRHzrmzGmXz3Z0FLVlmGbowECPM&X-Amz-Signature=b65e5bbfbee05aa51678df13efa07ace873db3c85be672fd609c91f021401ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
