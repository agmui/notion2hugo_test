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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEXJ5HK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvRbgZs8ySJ6P4fppZ7%2Be%2FotRx2MZOkQxAljPqNi%2B8MgIgXRguHrMoCGBYLYhgz9FUr2qujz%2FM6O9hCX3Kd2yPITEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEZ%2FVk6E%2Fv%2F1okcwECrcA3S4Eju7o4DtlL2YelRvQeAf0TwTrSpPtSOkAFbwVFjld%2FGfXUBX8kKybaUXbWRqV41TRaarU92MgkzQTl35K2cnB8PT4IjHGaL%2BoOY2WFaciYF77Q%2FmUxnJhRhtDSEnunol1vgJO2OKeLEw6pix1xUqG3xO8bMZBoepOl2Q%2BI8VaxAUtKphFYMDqiHFbyJs%2BtiyqC8PQykcfuCgg%2BP39wyTXJvnSeRfhMNiOuT%2FTgKWohUfQS%2B1%2BcfJXhYazh36ATH9UBYuSEgCj3vRD1DMRpwl9JHQHouQJvcFIpNjCWCXawTZZBuQH7b93biJv%2B4A4KhuMmnCly6%2B58Q30Oz3YqE8EVM5wSm06368JhR0KB3KlPa5%2FtOJMl392JPS37pQ7zp%2FMgdhN5BpaMQBKTfkdVt3WJzMN14lqKvViZReBFc2jfgQvhxBABsgL%2FVLVjwWMjLD23woHN60f3wZfK6q01Q4IvN2ov8xXk4daou0rfeOaM0DpYhdOKjY1TRPO4ysnWOIzigZ2zKHB36M0AMgfPbc0FuWUrqZ0VTIrFvjMRY56IVPGq9SrtMpq6XJ%2FhR8Yqyf%2BpLWmufDCZ28o5beReLjMvVXzFpixcolRCkUWb%2BY5pmJZqOwOaTdPo1PMJ2dy78GOqUBKnS0Qoj6oE9Id9J%2FUKiFrbMvcIAO%2BUzDhxiNn40BESZL7hSErmZjGv3hzwWGZFBF9mqG0ZWebBG8nm53rQC67JZ6s1QxFJH6TxHz2UXvydfdA1dGQHgW479k%2BVENsrEpF9e5cdeu7GrFE7wU5NnJ0vim%2F7UiZnxS8XODGBJpO7hJsAPYMT5%2Br6Y7I2oihujFIdoqdZQ3OmLnIYF1lSiExlLvTk87&X-Amz-Signature=4bf15b3f6d8127f55286260552eacdfc63dd19982eda433fc6b9c0f12c1305b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
