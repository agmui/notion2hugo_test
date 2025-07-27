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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NJSJ5IZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDCl%2BvVx4i2n%2FeXUcKG4wUgyf8WR7j5JZqGSf6QaCcmZgIhAOC4rqbc053e8U2%2F%2Favgz3Y%2BrO7se6rHRsarF0JIBu3oKv8DCHgQABoMNjM3NDIzMTgzODA1IgwjirAoBxxm3mlgFW4q3AOc2lydlY04TMsxVLGqVVU2SZWGE1Vre2WN6SYxCa8hXJYUnVKfD8o3Xkcqo%2FwzSFDhOJtD1JVSVoSSzoMvlmEsnbY3PsXNLdYDD2dgYjEOnLGx8bD88voJmTljgBDKtrBC5Kh0LcSXFRy4fUzcx2Inmaf%2BfIh4mIlpTqu47Hm6deyz9aYvKyLIU7mtZbztW2PXuiMrnmcPKOcBlKjEVAyCJemLghiZSt0XB%2FUUlrX35c14DMLGmUQM%2BecMgYAhFZV94O8KbXtbVi9hZw6Qs5%2FgLu2G5C2e3Usk7fBWhumD5rq9MtxD6PmnCtfAUrQA6XARwjXd1klhrF5DV5wwWeH2rnb8UcbIX0A3IW9EGaeSPuY%2FrDRBwdPjWRyd7NfFihxKBT5nK9Q1O36RVdtVek39ftZVqOzoga2OVnUD2sIWGyEULezorlWXDHpMbWFEcUaUt4EGT0z00yGJrpWFhkLs2t%2Bx9DxlnW6ko7%2BE4e0UwhOjqDyJtVn6Ckzzfm6JIxxCOPzxinxPnI8BTgoj%2BrNiqeJ2a6%2F95M52u1fVdGzULLLUwfxMMCljMiZgSRJl1xNw0W4GN07g5atnKqe2TmOU9NtzO1wStlQ0xaQTHrvDYk4dhAGe%2FyXlfDfoxTCOgpnEBjqkAUuozT8As6mq%2BJLg4lkb%2BJD0OmCjIeRpF76qazDYG%2F08NgzQPeqWJdLwB%2FfdTmz%2BZUGGGkF6CwcVDJUoZxHZU%2FcLcoJiSlOvPhbQ8couWPGi%2F5TNKiCBILAMla%2BnP52BvZvGgNG19UOBvg0Cf9Vcs%2FmNVXPIIFh4e9OqqpmIyN%2BJqoCcvhwmN7wweCcRUdJhoB0KHkYsqSeA%2BmGnGXi8ogoRFAoV&X-Amz-Signature=93f09439f927fc9a8e8569c5f6d5d83386b2c16d4cbdf5ff25ac2c00db216b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
