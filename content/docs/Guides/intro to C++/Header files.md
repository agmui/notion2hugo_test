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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644UXSNZD%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwgfyF9tO74N%2BcPck2LveYMTk1YoTQdzTMzZGtdR2JQIgERk4Inu7lGTwsA0MNBWiOxonf8JqRUvksqMJTzMbHusqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuCwYXdoON2e7b0VSrcA6wITfnJYhYzEDAGLpodEBnFn8xfm1s7Yx29PYN%2B7YmLPaEEAGCzI0O5YfueCDkowbECvVaB2a9cNeu5umsQLLqPzRCeOe4vB7I0eTawODCkvNG9n3ic03oyaL5s7H%2FNmyRW3jtwhwdXmZ5mPW2ap3Ht5StHAB%2FzIU2piAtOeSAw33iN2LMhSN72eIeji4V1Leb8Cl8u5PqGo65agrGlHsT0Ps%2Bxvs81zHVr97UJTFpi45OO6eOyBm4mdNOwIOf3NeD3lU%2BzS7%2BNb8TpfCpV0%2FPDufB%2FpI8btVYMQJj%2B9om7T83iCzD8yfLHvtJC5SNCo0AYFtWP8QJfQjkMCHP4bp8hpnkBR2OWhif01umHGJhnNchwKHhteJPyIBhyQ1t2qwfrS%2F2ot9Plbbf20DBrE9PWnxeOq4Qo32IgHdE6qK5ED63v9qiLhJJ56fBWstWH7MzZQsDmSZVjzLluEP5ECxgns7rxUSqdwrS0pfsy%2BJh9i5ZKaJzRzdg5PUIKl7Oe2Pqa%2BovmSy3g92NZ8o6QMtwhqZ4TT896SODUvQXJqaDdzcu644e19efgdiE0NrtvIXpRlguKlRM6tavd%2BO3bv82YltDn%2FsXt42Ccv9ylGQj2v7idXOc7LgkZL2EHMLzyiL8GOqUBNPMO9G%2F6tmOenLLK8WUWvnyZG%2F%2B%2FsVTL5H7GiF8UiKvLiaLUBa6hl%2FjEsseYyF5Khb%2Baol5RAZ915orkcpBSp8lj%2Brp9AXT%2FEZinlWJkK23glc%2FLP4xePTTU%2FEFhetQvLbRW7iATkCY81T2UmkNYIV4TwcESLG6C1oIgMQwdu6yDul6BLnUEZpZGTdvb2qqKlEDkqDXvxOS0s1N37uoL6GrJvmv5&X-Amz-Signature=552a121803d0bf223147fc5ec64d93d2f850228004e071ddd9060c28d986c625&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
