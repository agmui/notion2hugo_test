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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745DCOZC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCgoo0DVHF6VbZnzdEYKL1FsDBXKLGjHLNhSrqLXTzL%2FgIgJYxhA9a%2BhJieWixUinFTnoXIC0sc92t%2FaXNseTzfRjYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BO8b92iT%2FpSnGTNCrcA5TJCe7AQULOdhCdNxDAVdN0e6sp%2BD9gDC1JD2AXQPHaj1ttddyV7fD5P38aT3PW1GVnU8PNFAwlQmMzqd1hITmy2r%2FHbzSO8vqeeR4aJZvp2xZ9%2BxhXtYWLMR2Q2ShPUFAA3kbnrf9ie%2F6eT9qMZWv7vpYKYYy9ktSv1n86bHUDcROrhsuMk%2BKl8%2BIvZ%2BrqXuFgps4sFdqLY2t9Ekg1OZMHR5c7%2FuRkTRNi%2BYB1ZxZt7G7Mo%2FQ9Gp7IWYpWiTdKB8r3FXeEMMVqR%2FeYzfluaMHTRS9ogZhCi1d0echwKl%2FbsA%2BTPtV17X3YHfKrGN5q6qM57RjnDf6T%2FMgVmUorVBWu86%2FVaU4%2F7JMqk2qkZe6xxFxxoLk%2FaYqp6cispcwC48QmiO4RFboQG%2FekRzLk492dhj65Hl5cqQI9721OSt8Vcex4fBFUoP9YysvGL708cn5Kra%2FlTv3BzLitZMjcjPNcCiT592PT9G%2BOHAkDDmZiaB1oLdv%2FiYOs3K7RK%2BCgc9yr0a5ouJqtWkku137o0FZRj4DXm1Eqr%2FwyGjWzpFc3SEs3nUvJY1xM6yi0nHK926q2nhwnI%2Bn5%2FKCXw9YiGjD9s4oCOS4RcKnCfg9m2lirLzLFP3swZGTL7GeyMPPRhL4GOqUB2LLBKibDREXDba6sAntpABKeyvoMWBTLAjZIYte2DxB4WgAqSw8v4T1Ets6UittuesHZkWeBp1oF%2FhpnYAa%2BQm3oDCxyj%2FfuWAI7ZuM7TC4%2Ftj%2FtZ5hI2cRmZUtWL2ijjjW44l%2FFCcR11kJsm6JjUgT5SQsyAakg%2BjEBe8zWQIZQ2D8LWSk7T56i3IqH19BD7jL%2FpZfi2VTxAp5ItDu6wQLEFRJo&X-Amz-Signature=2b6f6e252709596cf928ec1f877414e2aae026061a169a93018e3591ccf6885b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
