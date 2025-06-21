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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35UPGL6%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEYr1mKgfnXksmT1hNT9XkyGDe9pyOhVt%2B%2F4F%2FzJ4GgIhAOm9MKRrUiCBJi6Q%2B50hU8U7gEBlUm9vJOjMDxHezmOKKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOV0%2BMff4j8exAWnwq3ANNrgUCl0ctAvw5JkqYFrv%2F%2BFILTpaKTl%2BAYANH%2FNlUrWqRxVRVlHFdmwFxq2WrKv6CQedFaIThvmm7X7YWCiiNpnPxk8j0kF4NG2jluVznTatuDDzGXMTXl96hpdOXly9GTH82Z0Wy%2BRPz3doZXWD0S0XA%2BYyKJ7uzA3J8XdH7nUfEhSby1YdtBIqPE4U0A8HQL8%2F4y%2BKp1RfFBJ%2FcxGDI5ReWSLzRK7PbC3GkfufizZ%2BeEm4w8hvZ7bSR%2FVlOHyK0x7XDgKk6StZl1GclhG8Pg8ECoDM6oazHcrZq1an9HN3iGNfiDuR5TSFKGZzv6r0H1hjwhxCHWnznaFBo71sqw5C%2B7TQAuSy3XHCRPXqejBussaaxpE4zDvrxsEjHX7e%2BSUwduG8y%2Frd9BJ4XYEP27POoRtihmfT8c1O%2BOmZPt3s67ZG9wG%2FBuMCyjcyx%2BFCTk1oDR%2F%2FTkm5J0StBA47g1BEYusd1rrRia6wCLvSfncengjdd2A7XaWPKJB8O1b1Op6ed2ZMsYK43pmeJ9z8mPVStCN6Hn8WjiXrxbioY%2FIpJRznUT3f5BI6BcasGYe%2FaTCL32732n%2F1BGCsH%2BPgjry%2FXfle38QnF20lonSTzvwrZW2RuQlYFHJJRpjCOj9vCBjqkAYtiigN0uuzQrrlgIUwiszCfJonfAnr%2FT6nLrFzbUiEpNT8c3Zsbij9wieD6QOwMTpApIj1j1HtdJfOml8OvQPYY%2FARtVX81Nn2Eylx4vJwg%2FgoaDOsdv9Y4M2fpF3q%2FIa7Z1Ba5c9U7xLkyRR0RXqOKGL1GYtMjPW5lDYxZPGgO0XQN3DLJDcl%2BRFTyjM%2FOyRFP0NzoqIzOKq4fGDAgg3%2FyOLfM&X-Amz-Signature=fe1427f572a2b09f3895b0425d4f6c7b17e6956e41b6f705f05f262f7cd03265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
