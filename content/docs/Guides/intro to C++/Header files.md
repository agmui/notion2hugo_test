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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDKGLP4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBeqapKfWGHGrGSFtvxykAdilgO7J%2FaT4J%2FpzNKa%2ByauAiBxztC2iDjKPq6f4Fb7%2BJRaa23BpnqG6JslUfFB5N2kkir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMY2nNXkg0WN0LiFq4KtwD7vOSyPLtHr5LEVOJG%2FRcUGiPuAH5%2BQTczXk%2B7yLDWQAV0mc0%2FkdLzW5%2BO2gAeuZ6So3qWECagDdtOmoDCbRzLbkjRGHsCp%2FdxDARk8XnmgFR7KrpGogR90v%2B65pJfqj9i%2BNPTnhZMuqngZxqdn%2FX2rBfzRwGvmyLMXuAvhi8qtrUbwSQ%2Fz4wPvRSJMIaEEP%2Bzgu0e0N0kA1d9mie8%2FQ0rTBwDKIdoJBevYpcEuPJ0hWfDqpJY35Wslbv%2Bx6p45Zst4pgt5h2agFs%2BTtIqX82mREqg5mE82g34JvoWaNRaJeUuMmRMpy55UKDnl3ryOBHcbUxPKvuo0xrW9YqqYts7uU4BaBWvBY9CmJBhQlp4Se%2BwHR6idL%2FRUucnPvjoocu%2FACoG5Bq2ZbuN6m6G8%2Fe5bzHkcLBfznbCqAKJYVEC0ruY0JnE%2B9AI10puB7IuU%2BBXswvhbgx5PdTftkBEsgzbcbXDZ8oO2ulUqf7IdRZrhPGq6MU92z6jE42ZVXQ8wYLnQnlJsugrQKHNlMwMYgFRM2HDxX8zzG0tqh0qF8sgmw9Wk%2BHP1Fs6iwL4GeVDmmS3rmGZFKGlwsWNy8V92JB3RErcgR%2FrtBZaPLUq%2B%2FA66QVRXA6eIdfEdYSrPsw38SSvQY6pgFF%2FdDJUqDbCAhP%2B99bo09CIdUpAjlQFh1IRFq7ekpaYm2%2FfwNHh8GMHudMu4L9BxLMMAXaynT2jZ0tE0rX9KsZ590Kdi0D1WkCbd4fgHbXMAcwQZOXKbb5PqaGcxVXzAOpT8bpzT1bIAcCGp%2BcAJQyuUf0P0hzQ9eKBtQndre0f0U9%2BvRaMVKg3Hv5ULiPD7I6Bg8syjxgTt6nRwqcHFcfe404AE1Q&X-Amz-Signature=4ea9a219a00db1cb4d1de18f1773c25f996964d5a8e9a2677a8b4642037bc97e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
