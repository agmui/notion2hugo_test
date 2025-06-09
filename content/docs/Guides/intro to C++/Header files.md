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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKQ4GY6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC78tUUfAM5oVfJz0tP%2BeD0xDI0GMducWwQbvOwRSfX5gIhAKezxs9c2h37yrj7jvDL5x4s0qAc3phaUvDaKw0Rgig%2BKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwkJA8Do9jSOkzU68q3AMQ5w52NIa%2BqA0Q0dzg1P47%2BjOIs6Nn8zHe46o1LR6sryv9MJfJg%2ByUnDpaHaGZGOe%2FIZtJwvAgGBf7BIyx2DCWqSw7zS%2B4M%2FK31CW6Wgw40JqRgQoYzuXlqDW%2BigesPsILbYOMKDgHAoq1A7gsPOIqyF2i%2BxScwfSCIgjNFtSHsP8RvgFklT6J9mrExVjnPDIFpTpHf71ah9E%2BVSgzZuFwYD3cQJyYq9dfurYybmTp4IsRL8aVleDAG2DkIsiiG88hQoObhKSQFpaJboI6KdbpI%2BPIFp3OZu4FvY9ZEs3nn93ZFj02%2BCHG83Awd7%2BW37bgBwZHFAcJv3%2FwlkJyqicv1WetkxMMBtOSgwS0jRkuEj4vUwgSW4DcrgdUKvjZvqndefWG2epuWpyXONxDpAtH0OmLEtXIXUQSBBxlFvkLI9QuY3AC4ZgydHFK0d1RD7ycfA7FLYiGF%2BQBqVMmeC2rrqUzUT5NX5fcBbKi8u2HY2Qf%2BdXN%2FFLEQ88uba%2FH4z1vvVnWoQhfTDrmrOuSD2JEHLZ%2Fb%2F4uQUkGyWwl3XJS2QgSTzAkEnMMXbHs1moHz0TrW7NdVKyFYwlywtzpM3aQdj%2FOe4U1xrsWvkxep%2FCu5eZPHQ%2BfWDtLN%2FZhYjDQ7pjCBjqkAWZaJzcst6YXYRXaom1s3HuO3lb60XJOrCo3hIrpzvyHKqXDva%2FJgCVkvgeRSAxqOxiP7C3aO3TkhNdozj4vVZLxgJLSrXFYO4MGAt2TH6e9Yg7vP1NwNntVOnh8Bqkhcz%2BTbWTKzs%2FGxXUadKUdmSEoY1S%2B7Q%2Fwaf%2BcOPOWCbo2kHg0uHdH3FzDqZiXS6pxVY5S4lc3v3yOMty03xJMtwjBH5F2&X-Amz-Signature=f52eb96427fa16929c696c8be55863979d6bd0bbb5107603d9712b5945c963de&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
