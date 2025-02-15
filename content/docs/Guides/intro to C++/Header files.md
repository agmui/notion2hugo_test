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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RROR7PC%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD95EW6%2F3yN1YBwuNorrItETQ1i5YjqsBDia7RSDQtF%2FgIgLFpnAk6xGRyTOxKYBsO5cmyIGtnOaeWqOXyj%2BGrDue0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCbG9r%2B2D047zKsa7yrcA9F70R%2B4bRucR5GvANQG0Jn8P1F7M0EOkBxOrCfQ0agU2wmxjjwytX7WrLtABgsGC6YiJnV7ynSOKRB0BmN7wBHxYfdZgqvi4%2FuLJO2ct7VOdc4kq3C%2BiidT5jpm%2FxtZ234HhFA%2FtGwqCTqWeB98hOMRYUjbxX0iMpKK5xjAu8X7C3JtSn3LIeD%2Bk%2BFK90A2yf9vBCCLKd7unaQ7pQlarfFqtiN%2FTviTKimLBbq0u8cKfhaufTRV%2FaE2oWIgd7%2BVeQRbVTXmN2wRDRsWU%2B2hpbIRJ4upAcY88444tw8TeTkL4YVyVQmC17pVje3EcjWfXeLdoRYmLRSl1rFqdGkEWeOvJCV805l5GzYGApF%2By5szGTNzCQgYMGuCKbxk8Z%2F7WsLhTiRSlNYYB6%2B93uwYUNaOQCM%2F%2BfnRjWlANDcMt0K%2B9M5SVrxdXr1VC4qOOU%2Fql3coLdmzE2bdGG1jFZvOOnt0WjLwA43zlHjsSMXsjxmFC%2Fb2j5rhli0Sgu1710ZnVecu7D%2BTmihLLHRSkpciL4al0crJDfUwsyoI9MTZh%2Bz83ngfxIydUDCv9jE4oad4%2FpmPYyNkmoCqqdOczHh%2F6773IbgxyCSsSS%2BsDI6Cuqlo9QGpWojZ0RbXZSzcMOnowL0GOqUB8PDUW0ZeSUPyRbGWPM%2BliXp4nuFxCn3xWUr2JbVVn%2FHMepVCteVNY68VZuxkUrb3Lq5HdEoCH%2BjTtWOA9M04u%2BuV5jUK8DUEJ0J%2Blg2wlUA58UmgwA6BBaR8ShttHHUqcxqXrt65%2Bhs3WMOQ9ep8nWYRqt0LwKbtWtNqC%2FKiw1g9XdVo3Gg8FlN7skbgS8mc4tcBa%2BAcFauCXiqjucTeWwL5SDqI&X-Amz-Signature=1d4d93eaf67c899356c7c237d862e0870b1daf1a5d4a8880a545795083b3a578&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
