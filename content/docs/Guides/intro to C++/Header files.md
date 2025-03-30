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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWWFQVI%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDjRwybICvdFi%2BEeCtzP7%2FzRfPZZl%2BkHLFsr9L6NqPxAgIgKDm1O2ehnG%2F3n4pRYtj2ERnKlqUNxHO%2BzyAGOGk7gUoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkeEI5Wk2bCC7uiQCrcA%2BSI8lunUyo96clsP0qmT8NTpnTBB7b28vehMX5TmRzLFl0zrpD3%2BQHlHOqqyk4Kn4QyK9hDBb5wN6gZFPfsTnfnyt2EEWJoMo0NxgPTSsToCtBZpgjuPDjO%2BV51GUwz%2Bkr2q2YcZVZ6POE83HO8S%2BFcM3wOkvjCEOiH%2FGEmFuV1kDGsnqkupn1%2BgQud1xVXquz5YrSxbLazogSv7%2BTmVt8NxRFsDNJiASRfJQHiBaN0FWHXPZtplNrA8N%2BF96HrLfrU70JTRjvJ2CdIasCFaGRyZ9LH5hZql9WtKB2HNT8xwsH%2BC5JKI6fMqnQeC5LzBeadGXsktWx0iHHL7MJ4aSAR5fYcxS%2B2M1Ts9wM3yqIp%2FxnMOWsduDqsH7jrB0AiYPH8GkKaqGCRw1T%2FYdjvCdw5Y5z%2BGs16Vc91ZtR6PrQ1VAR%2BonTmjpLsSlx2D6ol5xuBXbgedErIHuUt2Pqf2THofXhXoB6tyamJ4wnXBV6TyIhw8EX1gLHV6s0YYZS0bLn1%2FKsiwrc4x%2BHCM1rGkLC28kHzwQhfgOOshHuo%2FAaQ%2F87VaZwQi%2FkevziDBK5GEEJov1q2hLEZHUgL4Ui8oSIXuKLXgz1er9%2F8pmg5DkQw4rIwD6RaZTrdjhOhMLvvo78GOqUBHWKaHLqhtU4ian4V5LcYYN%2Beg2yXMGZjTVj%2FEiNxwECD8uHAHZQjRSCwGz2yoze6ip9PeYE8CtJIaAf1vCPwhxjZUQ5yYq62JPOC5JXhhGFhaKC9b9ACle8TZJLGGVRUciWGah92wTQpex0RKMADIK7q8oKsEdBkXOcEv4OTF084Xr9VW7fDAznQCTcoCL%2BIu0MswCCdvLB8TBOy7W1C0uti6cOt&X-Amz-Signature=3de8eaca795e51f724f6dc50985c869df6e507ee7d31200131672edc35f97b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
