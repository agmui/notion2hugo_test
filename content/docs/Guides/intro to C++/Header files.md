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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RN5DH6M%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFb4lZ0Aj96ao%2FU7jaGlUTl7hba31ANlTsMt8YzEjWORAiAYq5Y6HQw7Vs3Tz0RcPna6qPjk%2B22hz2ighfLA1Ln%2BuSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMvbnrb7rF0Djay39LKtwDyxD6SVOJv5Oc%2BbEWMpeEZiz3lWm1OtJabCK6eZBExDCawR2b%2FUT7JTZwsyJBiPPjn3ZgMh1HofQFuZA5LDV%2F7QEYSJOz9%2F%2F7nCCWOtLITdeqKbeXOBKSvdZ7Jr53ZsEo8SgpLiTyWH4QtNbAz7OC%2FujHws9wgOaIOCAfzJZqed12WH2aJAuOjLzVTzYRBzJZrMTdz4HhyH8DnEEe2yhUFapZBVZ4gWWZxmyp5xcCD8YQr9nfmi6SFUsDhEyYTxc35XyfDI6W%2FvQ1tjmqyaXXQj0w5ArtOt1vhNEsRawnc89czZJ3I1wupQiCOWQ4u7xZfDnZ07zXXXTP4a0jP4s%2Faolx8gGd7ermOEe81WNeMSCp6DDD%2FKqkuGq71Jjk%2FzZba062B%2FfPPuZXRzmShDZjOz8UbpivLAtjTZHyKT16ZHSuwmGPVPT38nHTxDr0oVT4hZ%2Fs9TufLSpcO9IcZYshz5Rcu1HI79djJizHC95OyO%2Ff6904bjuwXfUz3yS2ZUO0x940FU5zgSwAYnuDzvs5LCA%2FDSKh1eTfCnQlTyWTVeDgeRh88dbgmJ95QfIW7PVDiBLW2EGwm3sffjpZoxw1hj9%2BV3LfIPnXil1lVeccg0jolBr6qWMnDpwhjzkwusjQwwY6pgHOt1pCXwWylIzloEVZglJ6xJMEoCJq5vzNjjHIIGA3h1qYH%2F%2BC232FLjYwJM9RwnVN8Gt2kcvKxuPaSxBS170UQcMNkKmP0r%2B8CBH40y1eqUc89dpqAfsgXcO%2FA4sSiXaCur01vogzRU2Wo3Htc3%2FzU2%2FLXn%2B9xyli1%2FrgH8Nz1z22roDHucOQyiTXgwX%2FPf6t6UYMHEjV192XYPZMBtS3mMkDJg9O&X-Amz-Signature=2f9310a2fc0b02347a7e6d9f3ac430456bfbca4cb4925e8592184e8457cc72fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
