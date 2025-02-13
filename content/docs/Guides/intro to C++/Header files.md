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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK3WII2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoIZi3EgqvcqW6N2ji9TjKTjRUkGeEzlITWw1eiTTj5AIgdr9OAhi29JHcG7YUoEpO66Aboqxh6EGL75WA%2Bo9JnUUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNWKhuGnCTZ8zRH5FircA%2B4IKjzKJL2bMMoeSyj1X0b4RkmTBtLwCFqnKNQn3G4FnQ%2FeH0s3B2o4VP7bXhlpyzA%2FOtip23xqOMNm3hhRcvgk2xcFwYvXL8IAWu2ELubrGwL%2BiKCkoHTArG97HD%2BJAKOz8OFlzl9vjYvfNOJR7jyD4DrKghWYGEk1ZCuXA3477YDw%2Fqk9DS65WlFAny6FNHK9tAN9sdNlqtpptWl%2Fn8Xn7gLzOuHNugtaJhVVI0WbzPlCDidE%2Bb3%2BYRcN7b4dWGhfskNou6MQ9vGXrTh9nHAmfTDYP3vrJWrIx34TpFs3ZhYBMXHWclUg8V%2FDjpKEuvoXhQ54C9k%2FE0RGXCfJdcmqvleg3L6aE%2FBF8%2BTCrnz4EHEic1NH%2BsesGMCMxAEEhsbTMtxTyJ0LW4od7mOAYAO9HeZMwf8FrwcA6V2EIKk5OIx9ufbTfL7zlVEISMva5NuUbm06qEDYPZk%2B92U8BhiYP1yScFn%2Brxge%2F0efavVaNkbPZnWyPU0FdQ4%2BJUSmji09l4T0riCuRMq6Qjy0886zd%2BubgFmgS15BI4%2F%2F4EuHL9tf%2BC7Ao0jg597opC2QPja695NZvmvCJ39ZqRg5Wb8ebApxb2Tk5EiwJGySnI2cnn08DZuCi3s6VoDoMInaub0GOqUBnMXiMaJ%2F9R2MWvuVldx1mnonWZ45EHP6kv9ZLg2Fh5aYHh2RhpOoijHpq5DdqhjuTIPaRvn%2F0MKtPYs9ndh3FU0LSRcYczqJnDDZKWhFj8Cu4bMbSeeF81HEUC9YQLceg8Tvw%2FdwEv2QpYltrcWH8DfJz8ptZq6LbutcH%2BcwCoU0gwMXRojMH64lSsfjjvh5Xif6%2BpIzIk%2FY7r%2BXHyUTaQwH3r5i&X-Amz-Signature=acbef870ebfd11076bcec6d5bb76a0dece441d970527792adf0413fcb16d513f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
