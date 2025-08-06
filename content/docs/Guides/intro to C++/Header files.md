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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXP5PNS6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCH1TtUAHs9EhMBN8BrR3ef84RQHm7cOsISkkVFIe4H4QIhAL%2B3a3l5EL%2BjmPpO9dnFTuSlUM%2B067HuIoypiTN9R%2FIFKv8DCHUQABoMNjM3NDIzMTgzODA1Igw%2FShBS1ds2r6BOnVAq3AN%2BS0%2FQ%2BtlnFLMqnNlh2P2XYapDYrIrxBTROATBYeGDm1BEFT4uFEpaDyOKTTCsYgdlLu3njrasJLBME9JQwsCPn2GJR%2Fa72%2BpvjQHEKj0AItEP2XgRwfWIqoO7TxRg2x2i8j9Ja%2F4vSex%2B%2B7mrwsI1GKQssaQpx5lxOVk41tojnucV7aSj74DmsQq0hc6hJD0CFCZqdxxHyHCrIb9tNq1v7Oeawy13dKEeVMA34mp9K1%2BaqHF9GZJxi5Ajv4yU%2FzS9jcvIRJCzT1adRCUBMvvFlY232tnzEa1ymRk1A0gp%2FZ5FeTxUUpc2Vvi0NQK1O7dNkMg7D%2BsifSwL65Q%2FF2QuNooOE1ld9DIFqecO9iRLNqXQduyIIMaT%2F6fU8eF1VQlA3tVjeVPjOFVVazfZ5guM3ARjbKZH0iB7R%2BLG2qSQbmifJ2so%2BsC7DDAr8MPSLgOzvRNT7rNPl%2FmbR6zh8ZE3rjQl2fpo7vQtU92X%2FBMY7F1AZRBA4tCdAxc2S2SrASRYvI0PoNxyb0gjsaXvS%2F88T%2Bmv4wo1QjxPiL1A8TGc5dBK54KXzZDcpUozwUZoGRJ5urJQ8G9%2Bk%2Bgxiph8AziL6B50cZeD3nuE6jyD5Zml1KLRb1vGuYazX%2FggWTC%2Bhc3EBjqkAdMkFrzETbOczP43HbMR2Ql1eOUA%2FBf3gp19tGGlx3zVIUrPHmZJB%2F%2FX0TMKgpHF6V4zFx%2F43Wc%2Ff1WTnsFOZD%2FOhO%2B4iMkDHsvtUhdor4al%2Bfq9fhVwWLT0cPzJBkc6Cp1Dsfq5y%2F%2BxdY%2FbO4SSuwXSo3ALnviMFyCc6XcT3XenNoBgTnGeusAnaOl%2B0Knl35banp9mc2%2FMkulII1LsWgwMq4s5&X-Amz-Signature=4ee72bdad06dc3e88b052576a282104b08210582c6a86c0d3c00d73f2cd74407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
