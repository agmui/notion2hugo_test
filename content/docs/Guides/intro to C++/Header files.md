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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKKINES%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnJlmu2THudJDyBlnn9uGsAK%2BbjJ5U2KAqtW%2FcRuCLLAIgYget21ALk5veqo%2Bf95qo0HRhwK%2BULHNfGmwK9yC5j4AqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvh6eLlm6XNXTbTRyrcAyTI1eGa6orOflGvspROxmDHmzAz8Xz%2Btvjlu%2BYo3ZYjjy3id9eEM5JaR1w0Abg8an1M0IdBkrO3DAIISJxHgY2EJd94jLOrL2ukfdiDwJCvTXDIbo9Sak2u1OT6%2BGu4YyKSqz4ZDEWnwnEIRodARwllO4STkAyyE6xnZwxhnQC9rUpy40sOeMQEOvOo5Y8BVbqtJVobK5mn%2FD10tBHL5AXNBsWa2QAqduGhwOuNae0kQCmzAu%2FB7nWFQ244v0nrmgxT1mz%2F97olBQj1RQZAkiUgUhRUTgF07Pe5FiWbfUrMlWq3qlhfHnDhSw%2FShyA1fYhXWYk%2BHBZpBhFb6xXvM6HsrBvEysULbdTzDR4WkRUiwFz%2BoUmq07pBRcweGoIWlxOwVJEsYMSKy%2B7DfMWurQXKYXcPWiBqLsCG4IIrANRTkoLm1oTkvDQfSY1ZlqiBVd3NIbNc5H0%2FpeFCF9BOUny%2B7PTy%2FhveKYWr8LrNM4bY4KKVKCxiHSKy3Vw24pPMl1ukrlfU0xhlRUsF7RmeRF3Fdo2IcPTwpbBG%2F16YkRl55CdJHxk94Htbw%2FcuIrD9kk3ADeiHdGMjsEDvw4RQXtXZXlo9tutrO5RAxctxDQ%2BkR51V%2Bm9rXuimTQ7eMPj6hcMGOqUBTx2OP9TUMgNLpKjuWUKLw6ZEpJJ9y%2FwMtEC5qoDbS42PXRdk3zU0Bv5U%2BfVsQfZglyMhHaUgcieKUqvGvqtmAMSOU%2BANXPbvFLt2GzSK2Ct2Hn8%2FSyzBe4LQ%2FtL4Lhzj6JBx%2F%2F6xtRZ10zxgkLdJ5VVQgCqyhEaFNrHTbd9h57laqUdGnXrir43S7jdqNIIp7CvfZ6z47wYjPIpSr%2B58PGOY9Qre&X-Amz-Signature=08f4a70f2af5170fa0570c200d30d635ebfc1804637897c06c51ab0dcc755b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
