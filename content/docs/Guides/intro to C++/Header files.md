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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752ILAOC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDrUjBY0iriuupbz9kSGfW8lBJAoFfpL7J88W5F3MBDAAIhAP%2F%2B9JytR9Anbcc8aAAn6xgxmJ7B4QbO3Cglq7SGYpG6KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3%2FUMLsuhsFO4ZBSAq3APXduL%2F4xPA8gNqSYJCSpvLgk8SwGWkbVu4a2%2Bq%2BjfqmjiZKbnR30SQxFHDdcuIl0XMBxQE17q5vzaAb9o5wie253MgnwuQXK4U8ung6ajnU3tWORKrr1SQTVh6vGg56p6sVD8cgaAT7ePn29xldV5g5TTTXqz3mQQgT2BhFcdjgjHIz23rDKzZT%2BRft8%2Bnl%2BDv4IyQIihin3rgtLEpksAdfiJUCj9la6uz%2Fzlg2aGf2GHT1WwzM0MyvxqITjXdcWmQSRnalOQRGPe3CQ%2Bxso%2FM9G39jMa7Qd0Lb%2BoT89YK3pOFvjf09er4A6wUFda%2FEfekE3Ggm%2B0bAg5y1MqtaMsj7PY96gvJCSWta5kEfF3Zccws7LNaYg5cUspWOvfXowCgW%2BCUjhugapDqlrRRMtQh6m6XJoLuwPCSsvefxjEQhkjphFeo0%2BkjEUHPsY6QkjAxPeXXU6F9gH53mJp6K2VRw0ovhiV7%2BNP%2FZ%2FK170AyxkgogSXfKGJW0gwv%2B7fnC%2BsYJiAS%2FeEdksNgTiRer3%2BZQPCgHwXzBfNDVGFGC5wpAUXCLMah37487MqerNqk1BBePU23RfkxLISf68eIrGjFPbr3ToYHyuxyi9qWzkRBTsl6cPNy8DBzDlVQ6jCtoKPABjqkAbrOPNpIzJcK08RAAZ57m3%2BIG2pgzIfz2Gz0L7pLrrw5utr5XzzF%2BUkY2oDvN52EqouP6YFjIA2uyCFgfNhx%2BvLn%2FCFRE9xHJimY0E4LGapb8RnlR1sH1n34JPNQimv4M%2FZ3OwP5H3iazdxo9wE5MIX96brn9L4kBW%2BsHW%2BieN1rmajtIXK6Ou9Bcdn6JFKKW0JywhD13GAoGnfJyDsl57Do3PG8&X-Amz-Signature=89793edbb477e44fcfee9ea4e2c46a1398778370e7d88cf10980973f86825254&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
