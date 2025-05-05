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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVFDIICF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBLzROhT8WAQgbT8SXy6hYJAN6gxl%2FaGxPks9os%2BIbJ6AiBhuR3oT4tEKpJ%2FWnOuUhIY8byjNwJTb6INditOI4bABCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMSCjKb3P3nRNcl5UwKtwDnDZpGKvD3vSNsf8yNG%2BIEKXnoRP7a3UJFH51Q2ecWTV93s6%2B0fXuMLNiLEupEUoENfbAUXAQsANrWEsYgl1qOUNtFI2qTgxnSwcXsXVDR4PlTbxsaUl17cThRSIGjDGxPxpiluI6XKGb5%2B%2BX1JUWrjS8eAXhR3TpEidOw047aORUrS43YW4Fb9K54OE41pfAg3odr3dOEUFMSszDnls9QK8lru5XeyWGzmKystW8KX3yor3taTzH%2BH%2BiUnEjshYq%2FWPnJEIdpEB%2Bv0plyec1AXWZtXbQYZZKYpH%2F7thG2lrJ5GGWT%2FZVfVA7xhitGJq5VTCPodoRVM8LPPQFVoXCQtS0fEp%2B2O65ocMWrKUEgUceQGoO4nUPOvHx94%2BQLQbskb4kXSZxvcZp%2FfwQnDNXiaNMNINQzwdS%2BSKxujrlo5oglU57Dm%2BQJ0iDUn5kyUZ1r03h2tdyBQU%2BDIxivc9blJJyj2jNHr4v3NdINiyBarD5Sf4fEiSfyjsC6GjZWfNtiRmGHlW7hZQrX02Kk14eKo2DZmK2ch%2BhVU1cs5y7GG4iF%2BnyVjQX2T1538p%2FnoK9eq%2ByhhwgJQhpIiqTtNvrjmhRVEeoNN2ef7EOcyUzvL41Ays3CIZOPfxZzIcw54LhwAY6pgG6wrqsAj6tqiz9JmbAepxyUQZ99NkaVLbPMhQXnFF5e0kyWBdvnhkPO%2FEzCz76En84GR46kTXyg1wun6nNjNx0%2Bse8qxpUduYGjRc8PsINvufP67WchWmkL2lEGxVx1ehslqdnJX%2BumQyg2hLCNc%2F8S9hLG43r02NQ1tzQhgTzPA1aLPvg0XNGwAfUvDAEPZJZbQhM5SMLxKwVHMTXCPXUtnWqZiFd&X-Amz-Signature=c8f4cf39b6646017c59e85ca502a340bf39b83af94746a2b529eac48a9e0f90a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
