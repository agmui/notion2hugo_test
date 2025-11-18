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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTYWA3I%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOkEiyOC8tytrj%2F3uNA39%2Bb9VUt2nUgqXcEf%2FzpyZqhAIgWJZcWnrghtlGvQ8iVwvUbl4U0%2FHQJC%2B%2FKgwXtN28OUkqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9UE9gLMntZI9LmcircA8bpjZC47H9yVY0OPXdZh4g4jK%2BKra%2FsF2Hv74uOmeHgygXtcss1GVlyUhvVP%2FyT3SHFQdtylCTfBxpRjQdaecuHI7194BMea9d9%2BFcO3BSs13F6GGbGz5jBJI7bARNOIDCDC59pUoNtCWPxO5urXRITRBD%2BQsbCCq5OkaBF%2BzgXPc2navZqy8lT%2FoBs3ix3dnsRXkRDYCa5jRs%2BEQq0JeqGLn3oi08k%2FIywpwrzr2a6i1Lp40CJt5MPCxHpfClUY20KEiYXZ3R88lyhxNjCOKxgmd68bwCIVI9uSKltefBUrekI2r6xHpC3cE2dDMY2sBht9x6NaofmagYYp3ojpj4NPoBDfMzgJShKYdCixrFpQsnkc1RQn7soxc4LB%2FdDabyQR6ctcOiiPQezh1lRCiQ8qvael9cRluxQnRTDSUkTsLohOmO%2Bf4YD4j7naKRdT0V0RjKZu%2F%2BRggcL017x4uqlk1cJbxJ7d9Uqmr0BSQ4fxl8dNm7Y6Dws9mwWazAq%2Buj4WXbvcLc2HZc2adG4CBF%2BwWLxu5buzU8T7q%2B9eb%2FdUf%2FefQVdu2Jl1R9sUb5bQY8MtCRivGDiNPgCQ5vAJes5mEVSsIPit2glrek3CvPxCKydH2wVpl%2BjTm4sMN2Y78gGOqUBvP4%2BlFvzBHt0o0thzaWg7r1Keqk0Fwf9EpdsYyRlS8L%2B0MMHDqYh5yyBLmMZa%2FqRTddn0pcVlVo2mJcE68iXxXXEcICXpHtzoIozZEELw0e4ez1jF%2FNZtdfBmeK4IPGWhBBmQKi%2BRLHlYPwmAMHkZyDENITG9qMbsccx%2FD7XGsa75kekKXVjkpyXPCkZJ5RTOpeJexkUg58XmH%2BeEgBpWYB%2Fe%2FJD&X-Amz-Signature=1fc1817efcdad58b7b0a2b4baa59fbc00e3b27d9db0fca9f9c0a36bbb53ba10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
