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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S467GFIO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO62oggkGxZdDDQOPBwFFiTW2Qg1H5tnQ0ga5FypZUHAiB%2FxgRcrnJj7X4P2CpO5daoiX2A2CGTPbAnxBGxCq8FdyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBUCcNkkT3SxFTr%2FpKtwDQGxylzDZC%2F%2FpRXbJjpsRQZ835xIgfmDRGbrG6TgwDpdmri4lwPR2GohlvO10UkjdgIwWw3bS8KcPRIyWoZjT0Kp3TQh4yOjyd57yJUyDhOw%2B6akmH3RyFw43Za9WNOtZUhrRvt9AT4UasteocaNyqP7w5ATnrnzGqWuPxz43E2DtSeoVhRICCRcQy%2BfpLnguaoJYMJJaMrsFFO12Z1dJeio7Q0iblvrLFvL5yC6VZS9wNZwWQ01XsyEXGBXW9z7AepkmEKeG4%2BDCvp%2FsDV8zy4x1dzypV9jfeEQ3QjLXvKbNJeMWXF7FYL%2FWYO6nR7W3%2BMSKZgp80AbML7huJ0OWkibrp4za6WIZp%2F2vkKtNOz8ebw9K78wjb3x6LaBFW9CWviEr%2F0ylDt5bZbyC3KSjoGvoJFsGyH19BFQfitOvE1l2jmmowS8wC%2FUHxf6Woq%2BP1R%2FySvy%2FAaXXCdvSDcyh73IWA7debbfxuIdvOaJSrpEofH8L4Q8GuzULywERccbm%2BbfBd26SH20xoOQjMpwz9pnVM8HISzFvjHvpdmYgYDiKWor36dXkexdNKzuJmmKeCIxxeDLAN6OpkwDlucwsv6eZzi0su0Ms0RbI82UO7J0F5pWex4pzl9deOlAwlrPWwgY6pgECAnuhpBvIzyoNYxUh73T63rR8Gm9Nu3As%2Bi6w4JAVVkIlDtunoEgTwuPux3ZUuITRIuHOQtQY%2B5x3B3WBsMCEur4R4r5ncCC3G0jdJpOKsrFm%2BNEoGK3DNXqJFG0cQy%2BA9f1NJgyhsG2PBjwsMYegjhWu%2FVUF%2BD3DMNNX1Lo%2FKwuHUu8FCOD8JO1T2J7CUPdvoJFeT3oIXZwqbkIbQ2ghhprVHuRc&X-Amz-Signature=ac12d7aebc5ae50eb534a22777cf3fdc03ccf6cc87e306307cf1677780e36b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
