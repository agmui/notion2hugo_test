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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEL6JZP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtDFAIJ6%2B3GsWmlxhGTVhgkUGy3aeFzIvkENorIZ%2BhoAiBX8EEdG0Vs%2BsgX1ZivppT3QshOsoBUwvo8evxiwg4HEyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMYPDGyBn1cHsCspyBKtwDlncWloORjXPiILZD78ltrVEwnL5bpbA76wWQacfDLVOeD8vWuBN%2F6XY2Jc8WSWyUmeps8IXdkBeWtmywRloO%2B24i3DHSMYtCN5xbVl884V835WfPj7wYmW4vlmTCwHorytTOvBbHHbguV24iv38yY20jaFxW60AinxVKvrrp78BNsXeb1Nc3hwApVEjHIY42QNGuqEmwJ0NciNh3eecGYF9%2BtT%2BIewn%2B%2B20gB9BUV1DUfQHhgsxA3g9Fu4zfs0ujMQNZAL5gug2gzqw%2BEv9oJN%2Fkw6aY5ts2Id1OyfnHHJyhsK0a3vjztGZixXTV7Jm6nRwMeS%2FRAZS3zuBIlHeSm1P0UCOHXSz%2BKRSbgtQqp9NIz4kgtk5O%2B8nQ%2F05cxUKAZIZk%2FUqzIKE%2FHtyw38pE8kFlhD602wT5BwkMESU1nYgls1laC6XUgrR5%2BHgCxpzXtfi3WadBLl4t6BJhSayPChrJ%2BpYAdmRxFcI444jiQciZMXuUao55R9j7fxxQHhjiDO8Ihcbr6q6n7Fx4n7qFPE3x35HjJCKDeXro8fH0YOyk%2BeGrt5gTWfTEN8TS4CefMjYo3Zk5T%2FhtoSLb6ZSBDfvYuZqk1Fit3h8YHmnXjMBjo9PBrjF9AUVn7pcw8YmTvwY6pgGsM4gjp%2F1OS%2FEtBrEV6tUMWYnwcz5fOO4e1gUseG2uapMIx0xxpjSuE6O2NPGjqliQRtJpC1VBzMQSO9Z9cQC6oANcEX2SDdOcP576qIsvSrAn0heIJLU8sl5jFwKeOZRlSjtCaYi%2FrZ3EtxZSkz1sOWyOc4ZFOABfOgUkrSRj2wVrIhy8vFjseecURXeBn9OcuKo%2Ffzmos5lEWg9JDXX%2F3zDUMtVb&X-Amz-Signature=bfedfbcacbbdaa13b2dea749c8622df1c16b184017ff5544b96382ce5a01d0ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
