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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625IBYD37%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY%2BFhJ6bn4Pda%2BY2CNxxlnrLvibGUeAIQ%2FJzxY0A5fJAIgPkr0OSm91CCPyXq2Kl5D%2BzdtTkNfxIC%2FsbAiHPjO69kq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPQ56hk%2FjAt2b6%2FenircAzMZUWT0KUMuaVQRd%2F7NN7D8sIs0rwpydz0ttd72emmX3845QcEAMeYn%2FyYWA2p%2FBXDl4295Pi4KCVk841QwlyluZiFRB7PzTafcqXL%2BFTlVhUyLe2lxZBizEl0KjnCngDlxZf06OHl9dNlU5xBrrIuG5Pn6UrW8iH9n3lDPZUoNgMSHnosnoZNmR6TK2CLgz7TjvX2s06SL97CbZ9EJGGwP%2F9ZjsIoYgPD3odjLt5R322LpRhxAQ19wXkZdQITbGmOGbUydIP8r%2FMelJdJYv7vA6CXuMFkfOE3vFfilG85ukMiHe7ClXkNN%2B2yE8UwLQEdPuigK8j4SAGCNB7LU6AyYsY%2Fv7fdVqLF42plOIcT0YTnDI7m8hfeyf5PgNE5jNdxyv54vcdqVPku6Iidii%2BapEz0uCVcV%2FUrB9NXa%2B%2BwCMoxPxs142dcr%2BjfbgzM1oQbj8FbOoKMppFyE25YXLIPx0Xd3HzQYrdmG0DBNa%2Fn%2BEvkx3SsEF%2BbcVxZemwX2x5AzsFmh0sKxkdUs%2B5taFzUItft4WSBffs5oYAQZDSw7oODP6bXVJyeY1Tk0m5hcUi5EMJoObWkgx3sHFyEfGH05fN7pTXW0ocoUsJ80BYK8m4y5yR7dgVwGqscfMPv%2F88AGOqUB%2BiJZWW2NDHunNrWgVoZhWSDkXKA6fH2PUJfb%2FJL7RVxrj4bKttNK1Fle1ptciUiE8Y47%2Fwci9tLL8qDr71XXcEp41Iz%2B00IyKH%2BAT7bFaD5PmzaQL7UC745bfwEIc02LHCPOITaZ%2B6klbvEWdCI6ndclkfnLxcmoLPRFVxqSIR3PafAcBcYHA%2Fhmz5AKB2Iyu9tRFVdt5VBJcz1vXnagZoMWA0OO&X-Amz-Signature=7c17b181f937856593501192a886a1b8af08ebd579df3218744c82246c5e4474&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
