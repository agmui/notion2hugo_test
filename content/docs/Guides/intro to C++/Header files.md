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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677A6NLU5%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2Fzr%2BHuYR%2B%2F%2F22UQdOZPeAuDreiUEvhTA21Uco5%2Fvo2wIgPA6dJuil7NQ4oCnheCCmO310Czi%2Fuzw4LMofLFk2QzAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCCuRhe%2Bu%2B66l9ePCrcAwdCGlMvw%2FxpSSzMDWxyMstOvwBY4FJtwrNd98HUCHXCzSxLT1RmAoIlxnrp%2FV2WnjUvHkapNsi5zNg7r%2BKnqLgFXjtoz4%2F1T6EExak6lIAa7KAkjVdRzziIa1G9jDdyou%2BMw4qN18OROkOF5EOSvZKew4sW%2FPT%2FIGpLjoe5jEbf6nDpaCxBD76eqrz2WCJmU2UdWGVUO24rjdpaECAPPGqnXZ%2BlOyxSoT46N7oxJoFBmWdzPMtXkIZuL5cnV51N8amXbisaLa7X0xsIMyUrDcTZzIeQzT09ThzCz74h0if0kwqa0GMOIpX9G%2FQF8SAEYp052pIhIlTdWuNL5FeGeLGXv61WprT8iSZQoKzF4TWZBn%2F5WBj7opuQXMGYfZWHDQ9NTIn2KqVFWt38ZQl7vcCyfJjh1oysvF3Kq3H4MM1ZI3BtKxAy%2BjKbzcqBIsi%2BiHxM6yp3A3mPVp0ubPYRADjba9a49%2FaDGIDAfEaLZV9oVJnYhG2rb7JqN4juWg7INZ0M5ksso0qgFKdQpAcRMeW9SLU3riqbl61Wot%2F95YtAzjrHwQVaaaeoTyFHHZuCwfjByHX%2FeBbTq8gcpIZii1KWb3MKuDo0Pow7BtRTrNrnvg4%2B5eox72YRth8AMOev58MGOqUBZ0%2BV490kxiSE%2BiXK78x2yZSBT6tVh0J7hqNio6EpxZXTrSNyEEuvf9Grjw1BkXhdSvW68NiwuDdHLBV%2Bur6AKXlUbxbm5gAUPkSvsJben%2Fgx7uworfW%2B5Q9CtMvMg5omv%2FHZJEXSYPpTEagc5D9C5X4dFeh7EgUw67EnA9UsQ4F%2Bba8n5DLzJ3v97qJtl4hXB2z66gSrL62dBK6RYppZxnYPYWz2&X-Amz-Signature=0a48b34d16c668bf3859da1541f22254c5cae0ab378f9794dfeb55d387bb45d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
