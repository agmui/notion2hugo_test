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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=12394ff332f4bb3e13c6cd9ed2b40790de8bf9bc7d25eea78546caadef476531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
