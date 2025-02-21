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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOZM5UGV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXyvi%2Bm6MWRAAEJtZ4NamYpv3Fof7Jg9E5XHVZW%2FxVnAiBoo9VKDLJQk3IFQw31tfEDjN4QCZsBteHgxGBJi8peYCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2qOEri0xRCgu3%2Fl7KtwD6sAGInir2JmEqVs8KfPGBG%2F1idL36lSkH98TmCHsJqEXsm4MMyRMfSgMtEe3EPStWY8gQpOYaV1%2Fof62axZ40NECnHtbFtgj3CsLE%2B%2F%2BFZlq3oOXs6V54nyaaocMWfHBWAR8rmUZ5ZX77qka%2BkUZ6t8WTdyXsNT7acoye%2FgSbHvSvIg4wmROivFE7q7crmPFfifoOB5e4AXpCNsrevMwnNRDHDCVDtbPfgR9YkaR3W9%2BKZ%2Fjbk02IiWGBHDKgDIxKtI2yrAPduPpzF%2FNP1aOf7lrxdXtOIhNnVNwL9MExhy%2FewQM1%2BZ%2FVYgmE%2F3WvRX4bbeKB9ixMKNHMMwBB0qDad9gyvXtZ5dzzu6TaQozfuVKGIPvFJKPPWQeTlrwt1ocJDvEnc0AHB3Ha5SmFn154k%2BPUPLGmT%2Bmr426DntUsInp5FXcNiq8525Xc1yPRnvjUzAgT7%2FGWdG8%2BDF8D8fUzg1zXq77DMZem4Vyv5YLufndSXgZobWHdUMDqoBvbV1HEjLbMQ%2F0Z%2FbkXEAMb48lHMVsnDX6Fxy7mb6rgHXzvcx%2F7viwJMLFYzpFboKokuhNCrZsCo7V3ZilJnHGOaPI1edLC%2BkyjB8ZorB6b3BYZsYAn%2F67sonXaa353TgwuPvgvQY6pgHFdGAk6c3mFxFVskN6hCu7xA4W6IByzR4THoIQEkHXXajVWtw60VtVgPweFzUw665Q%2BKRS6HWgq0NmF7yr7S7lKAFbdA4ALM4E2%2B7UpdTsWnjrFe3LIroe%2Byuj5WihS4Fs8T70bYRjeumq7tmPZIDsishjQIvyyY%2BAHy0JBInR8kpJ9dSrFeh7bSAsdb69HbYdPuCBxRutivN1nk9Udk%2By24u51RSp&X-Amz-Signature=e1be4a1edbc32bec38031567392790808ac5f701664d5d8754225b4cfa19b6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
