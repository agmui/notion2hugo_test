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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J53CQIG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBVErTHd3w0opeMaBU03bX6ak8UHxl4GGRICwKOoYwowIhALWNNewrTa%2Fwnp6fYbiTfOVveUQi6Qj%2BWmNv12zZlnazKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzBxm%2BUHOtx1iNIggq3ANd7cItsPDJMbTXZu9ZMjIxKLQjx0dJ5wFuZS0KbtAhwdjE%2BwncB3V0Oe7aSvsVqwuZoCCECDh5mmBqOFHpC9h9y2KvRfbpdsTocpqJ1ZklSnHIPoCmG1vqqFisyaiVd8MOVo%2BRelWa3Zo3ESYY7B%2FYyDHlRv%2BPRY%2Bbhlq3z%2B5VL0Poub3PX5Hfn5eWx9DEHVg%2FUm5E6NOAGpOlC37NihsWzC4JfDgZeYn2%2BAxC3FfV67PasaKtfgVJ6qejWZS1bk0wf8p%2BcavYwTwPL5ATozrGOX8VL2vo2CYhSw6cqT8zFbDYNVZC2Jv%2BON%2Fgdnji8IxCZYibFxilfKLKjYKzTjjBJH6%2Fx4mdbdeIfFaeFm8MiAXLjhII75YjszJQT31Xaf5i3f8Mp%2BInnAXIW%2BPlwTSZPiDrVLBTqPNfeEOJaUC9HtT6O1YowwADYM0wd9wY4kO%2BtCP9keKEOr4141DUm%2FpeJTXrySAZfo%2B0Zi2eSy8xJl32UeCidChIK7VgwY2VZW%2BZZeC3ZNxJN%2Bq2ml0nM52xbvr21zaPPsVcqVv2pLebMCY6p85K56JJ0LkoPIM9VT1K8oaMCm4xR3mbzdWbACKorNJQsnetYSd6RKbkI2SSFr2oex9O3gs8ZoLLjDCjxJ3CBjqkAQJMQZHWLIH31iSTwp%2F6ZFUd8ks%2FvbbUsda5CzlH%2FJQ5tMkQyTTf6hkKW4sFu2MWz2xkBdql2Ee22S%2BGobuuMnlIjggZzGIL6nrz11%2BELYvJSH8NZbQlIgtTkuDBZioBI3PEO1Yj%2Fgqio75VB5Dqq%2BZ%2FF6Oe0LtXwB6gFSGuuN7lhdvfpTrnq9IYGeiAUagL03HxS%2BlYm1JWOWgmZlHNXVmVl3%2FG&X-Amz-Signature=951b67072801dd950b8808dd13bc46692e300ceff390904ef9359b69897d744b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
