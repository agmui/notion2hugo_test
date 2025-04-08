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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKFUCK3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNKNgPF8BPfj5z8lFhB6rIZ2ZM8rZCRUlAA6bIcPfCIAiEA0zfVv%2BwCLcV6RxnUzNBnPo1BOvqZhQR1XywlkuHe8w0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBNot%2BMUHwQNPW3b8CrcA1Co7VA0XwXzIGYaeWZVum9KmSuG0Q4eeISNjM8XVc2Y2C1gkWWBi2zD3W2h3BjxxPaaJQ0XrwUNlEg2lkf3wptrib1NnevutSPtF0iit7UxRiQmRD3EFk5j8J%2Bj1N1Y8FQbPZj2ep0GxivH%2FXZ%2FJO04rBlH02BzfJj%2BnTcaK4QpzrT8ZSBhNRqU7MPwotuuDy%2Fq8cxbs0ft5s7hhfxsgW9KxHIeq5hgwfNUDzfovG1J0hWkvK6zfVfWAR%2FN8PriM0lIfYdkM1L7TW9Xmy20BaiMr9CK7F%2F8D%2BUoHt0gB44nXnxcec%2BRMWqFCAyD9d7wJ3oJCA7JKWeFYWALaLp1caikWkzvwn47ApM%2Bnd192ipoy6EJn6a5IiVj2MdN1RQNfP7j0zC28D8Ba%2BrzeaSYkNhD1Prvgh0uQVXlI9O2CKO82OeIgTfssuiHDzLKUdCbty5Nz3FEjPcznwFcmCEjLTeTrAFYMcJP%2FsQbRB1SjL%2F7y4ZIGrP6wMoN0Oa39riiWtBzjYAdsuLJNiEkyWa%2B43wK4H7rLHjxlA6ovuOfGMnRfvra8l0EklokztE0U%2FCt%2BlycET7rMbfLwI%2F2CtT3dh22OoMu1FDR%2ByeJ%2BYYbEHJqo2qU40Z8xvogWiRTMIGE0r8GOqUB1ZNy56loS2bNXZoJDI6oosUadFFhrGlhCXPBMxaejqazhyZ0sGsRgYESdB495LZn4ifVN27Ov1CEw7RuV05tsm101ZXurPXrc%2Bt4i2gOC3LPJoh5cEZwDXhqKkuUHwj5JJfqyjz%2BsLxSvmr2WIDnut19SuXUbvfWwhCC334yieLUejJYQbJ0Dd9NFF81WD5Dp9rwWa7doQnc3Aur%2BnQrWLMATHaZ&X-Amz-Signature=6d4fb9116c5b006b3de62129ffcb543055abed15677db900583927936237ce41&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
