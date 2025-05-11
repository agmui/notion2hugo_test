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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMYM7DBE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCcgNP%2F0KZeLGOzrG2I445EjJM3W6rNBghzOijjPuvZpAIgMkx%2Bw8bq6WTSONli%2B9zSmTvzDfWUm10rzqn5MMo44GQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgF3FU3B1bSRztL0SrcA4xScZ2%2FEAEXmVNw1Lngy%2Bs3vCk54iK4exDcLk3tm8%2BfNEv04lggAQ7Y3H6%2BiVNRWK4kFEMu1a1UayhjyAXYsg%2Fz2jla5ORMvoMlg55mvvrvC3lbzFs9tf1Q5f9hivHncrMOc8pjxoKYEmaCZuWfSI4UACepF2uTu6qtbNlRsd2xGPIBQQJ8w%2BjuXSVp5X1e9fCTyD%2FQUrb%2FFAJBe3p6OhWCnIPKZ9G6jJGtHzpHTrbGscUff8swnkfR50Z1dpGHdgoo7zrBdwaJWYv84vI816EQS%2FbQgGIQRRZFey%2Bx0DvIf9mYSn82hQQQvU0eXzbfyK3v3XuqJVc2nJZ%2F6fCe4FTlpHOrNL7iWarAvfh3675FV7YK2Z3PWJCs%2BPJuT6v7iHnrxJWJx%2FpgaaPAfR8QaembG3gklZXhf4tpMkqp%2Bg3Ur5m5ptAagLRX2WXg%2FNL%2BcpT5zixcz5kTUz%2FvLMC3Sf70Z8G8iBw26pSwOGGR2rcHzKgaC6iXoGyiIF3sFFMTY4hD0cfaEKQMLEzZrwOT713JSGMryJRGyYAdc%2F20lJPI%2FiV58k7crSANiKE3cPqdWbLUfCQfoBqSNLTmxENmvJm0nH6JGmqEK4OxiN2ceBgeBZbEg3f0z8B%2FTrOiMLrS%2F8AGOqUB7nVSIEFr2qReoTY8uzIHeScM18exRlpjA0u8prrAhF%2BT4QCuoNZgskn7PkzMKwFX%2BUjJQFAyA4HJ2b1T2gEa9xZsOeVMzfIWg4C3ubA3zyBCDlGIFfY3x7JlymF%2F%2Fb0fLXl8JmQ2nSJsUYAQ1a0tM3ZMWG0ZVYkB0QcwAUHnnz37QW3Fbfey9QIrjATCl3jn6%2Fr1C95Yd4asE42Z%2FJwOjbW3hRuW&X-Amz-Signature=48727a8fc1d63fa08bd3fa68cbd3c1b393a69b042a4a5afd2f357ac444179a09&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
