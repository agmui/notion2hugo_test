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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RIUTXE4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB04c4OqAeksYiOF0LglTRWE2HWkwhgRsKatan8qn9eYAiEAptmS%2FvSGFDC6%2BGuR8vVWZT7lvZacqm7T30BT20sFjZkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BNH5OjwxnONRfjrSrcAyOk%2FzsTsmY2AAPGSPky8xyeDvCQzj7yEtvjsUz0%2BCF4dlmS%2FqWLZKIN1JDd0%2FC90MAlpCH8wW9uPE5HZbAfJvqMAUkrrvCobnoM7FPOE555ASsGH1ptV3X%2FuHLkNBKQiCl9xGctnuaKUb669fvQHSgR2G8SiQyTDpwpj20uCOS8WpYfMz9BYcAqpwByAQdxqTzKB98LLOEDV2%2Fw4L4QTO3Yj3ZGat7ClFHDiXYc4F4WKdhNUWSicJEhpU9BL8HLsFBQzQYn4DTAmoY5tMInERwrglPxIaHVu9okHKBzs8KUG3B2MP1oHboHIhH%2FobPQ4pGeT18PuJd4Ymc89ENbx%2FZy5keleMcCV3NMmcGC7JnIZdz02AWruxEePGJ1cGTQU9jwROyVtR0FkTvVPYLq151AarwuYbu%2FpPF9t750CHhDQ%2BhgsieQpGgHfVmEE%2FwOEY7kLDCxB4bv5%2F1LlGzBr0nQUcJkF0CnMRDz77KoSTwu%2F2ra2rpv1aG0bA6K2tXZMbTd20W7L%2FvBoFlp79O5c4glDbpTog%2FYgLC86ZiVpfIgGjOc4HtHIJJkWYF1zSYzgdVcAJqYL21e5KOIguftrGX6B8ujz9%2Fmyt8lJRxOJLOnJfpv4fCw%2FZCV9bEnMOneo8IGOqUBz8pYzemenNx73GkCvDOTSWq06fBb0XZcaVMID5v04agzDmjib51kGNJjLtpXPCleIu%2BJE8xu9jGW2XVPVNG8aldySnsvwsWcEeBUmWtYSNlCOJj170DKUkSOyRuJJ6m%2BpxKKMYjMROs5Ns7WGHXgg2JcU4nWARGNgK2Nu6f46ijqX3J8g4CBAxzJmVGXhFZupGqiD7JvgbSdNlN8cYp7k%2Fo2YEeZ&X-Amz-Signature=94d281d6ba383efe1e53c72accb09d64d7c773d47c884c50798cb8aeb517f30a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
