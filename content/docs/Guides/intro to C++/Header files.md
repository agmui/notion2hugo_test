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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFFXNPMW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRLnM%2FOL6sMdtu9LSl1qFcppbOrggEQcRn31yFoKKlEAiAg%2BgWtr89asezUiEI%2FV5JNWbtHnUPOH8ezgYn5yYlYKyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJtCEscI%2Bek%2B5%2B99sKtwD%2B3P8itcb%2Biy1wK022%2Bwxf71cUQVxPcUl%2FXBAT31N5VkH7nlPqNucLboEwgPhyg2Pg6%2BkJ1Xk7G0yDs%2B7dfXxstzuiPt7krwge0XYehoe5twTDLTW7xIX8JkUxvyeH3wOGzTiAw8b2EK0QWjJWsjlBUk49tmnF9V8EORZptxRbYwDNWMV11s1qvmR3c9JybFUIRdOtEdc9xo6SwqAVQExndJvj5cZyTusZKI28Lvayd0I4CWqLJeyz6E%2BpuRz86YoHWfe9%2Fe00su6IXHAPl8bsNYoarYJ0Z9hVV5C9s26dG0RlHVFwIuKode1BAU6QffYSOeLIzbqfST69KC4Qhy3T4FfHar785ZjNqWhZt3DfgyhWwF8ycib6W0nuWv9yfrOq5c%2Bf%2F%2BTb7AyirAo0uoZMEB33hr9%2BT9KwingAC2GKAuAps1iWg6bqQUVEcZzXjH1DJ6yy7ys4BCgMBk%2FLmbszxrJz8f75BDkcHz3y8Yy%2Fm0QOMk6fldJtWh%2BJgIZTQq4GIVGV%2FUzvZEMDXxrFLLTA9Ng%2Fak6b0junHfTBSrKWniTN2y3WQoO3s%2BPNBA2ZoGnJMYDhf3qRWdeQd2l4IqVqvHpLDrTE0t%2BnzP0Hop0Dz2CXe5crPt5jIZAbO8w7OGavgY6pgGXxubtPOX7yaDGUaafE%2FFIFQX%2FqR2zfpas9rpT44uW%2F0D8LdA7G0x8UV2CT2K9qD06U0EJyaKwlf8eOsyiOJcAkgN73I%2Bh5pqVSdO5G1Gqkl7rjoIXpXSkhCl3%2F78rfDAfHskistClCLQatM1HxmzcvUfT2vlk04a98GxzavuTNFWwYIaadA2jXPD8I6JcqnVNYSedZwzrF9pG%2FKYXdi9qBIOGrv6W&X-Amz-Signature=d73632fd54d6041b5be91a6c083c9e3e7a71d1aa0d6057b554b9d465d2557017&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
