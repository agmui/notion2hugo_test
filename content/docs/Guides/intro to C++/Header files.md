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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SA5MRC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T003959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIA%2B8xwZc7Bpkfz9SC%2FbEk8CxVPFLdATm2OPVzwd6Z0zhAiEApNbLtjyw4ChJ6xiYnUs1ByeXSs2Fc4hQsaRnrDUq8lsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzFBERkCps3Lm%2BjIircA8N1k6aJ6kkNZpMxyijBrrTAE%2Bw9hPPmDamXDUOT2H6LcIdpwOJcBfZfPr1bVxT%2F81Geag4W4%2FkdJBKbA6sWc3PbVocLiYQZaPSgF1bCs3jnt9mOvzjRb45txNJFGZ%2FPYQ5DvhOeLdEXaqXhJ1X9nD8ENXT%2BcJIdC5tqwqLqjLK2EjShXtBloWTxJsOkQV2FgxZXNsqsCpCuWlhuw3G9QgIlwFuHGad%2BRWmCDHD7jIGur8OsdtN36BKJRnlnzwJJcYcA5uYicmGneq5cShCaTn8%2FKyWoxvanFp2ps%2FI5aAOFbXzlKJEo8phGc7hX6DSLtHekhD1wTMPyNMG8WxkFvf7DpDZOAnNzM530EobSua%2FdPV16EZmGJ8XKvCVblV3C1IxBw259P5ksTgseX%2Fl1f0keC1m%2FxWAe5mo4E837bfDzKQdWxmly%2BF4d6BJCAWDMd%2B14KNnRmQ5M3ofr66jPif%2BPCOV0fCtg55QeZ5vUm7LABMKNWHbXX5VmoHmqxV460SneXPtsCLj%2FcJFaMfmBBMHREj8f7l53yihyb3zF%2BfVF2wAPgpFE5SmUoRHJGvi1bGGqQ%2BsuJsPKxG%2BynGAzWpgMPKqWu6B2ZPD25wGy3IrrlSRdE9jB1BiJW3esMKz8pcAGOqUBIPMCa1gs%2FrgwZgaf8hOATbN06E770QE238nIzND7bLENRib93TdxChVOi0Uwd8KtAXpl1X6yRQxmYYkiA1GptiGFu0KVJnM6ph%2F1LXzoQrb4kMNG9Qa3wEn55gsS9jI1eyiJxOZhff5m1pFyF2DD5SIxeiz9W%2FxPS6BQploKaxZLDb3PpdxEr5aZyNKVxIu9NuTVpzuVDjgjcRHuFxMOWPctp6kV&X-Amz-Signature=34e9fb1eea1d688ce9fd34f5872fb68627d2504d76f10b4fce7ff80de133462a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
