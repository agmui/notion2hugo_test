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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GP2VCAO%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T024048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJxAjydfYBphDuhwX72NqQA%2BreInIuwHDO7c4Y4zE9uQIgQOPVSK1SkTDUts6nASBtoH0%2BMU1x7pYK2PVghDJfIKoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxDzTPUSJs7A4%2BPvyrcA9OnnbSMzWfGxDl7QKn7ptxuga%2Bu2QwHCFznsqYQ0jxQnyRimKhEAdqXGOcQrZPoLkXVtBE6TGT4ylVv38%2BxiwtObclvYn8k3onJuB6on7j%2FMcbQVyUDwX%2BWqsvarQ5guwSMMXi%2Bg3EBmFiyxzuBCAi84fXme6ZQKw%2F%2BWEOWLTxO39Eg5d6GyJTC8hreTwvpvbyZvJPrPAA%2BZsiR%2FT2%2FhbvdeVw52OtihFLNAp2f8bsYKfNlkeYyEvZI%2F7tnPAlkAfZaBcnnh%2BXvHDE3%2FmEaNrUiymNrRNLdTSVxj91rvOBEFGId%2FQ%2BvKdvrBO0q1x8hldaXwoTndgv8j3KO20LfbPKspeEG1cv24knC8%2F48Jeym%2F51DeSUFmPtrWdDd76Poz6Hg3FzAx7%2FNes8RB0ZpxYb5l4nwc8I6JyczRRdj%2Bsx6qhrzrWbYNRVqzegE97WeVbEz7WfoF%2Fz26g7S4DIIfh6Na5SOHBAzKz4mC5HukypsW3cMUuERjlKlXkMz3e2jTyXrJyifBnFIwCfRbZ8SoEuXJxq%2FW2kQSwL9SLOQvE9lFugnXckewaedd4sQyTBrKrsN7nAhXA6koN2y7Eo2%2Frw2%2BTLqBGpTd1ezaAUYFrOtvCqikpDPGpgdKmiHMMzsqcEGOqUBvm87qxAMQAMoKmc39vW5Kl8ldf38AF9FDWvvyNUwbgamPGTmw8L9w1v9MHbkvbJ4a5nQmtl1hbMhTbAiH%2FrYr2m%2FP%2FVMq46lLgpoqSF%2Bs9%2BBowCSbLeI8wu0UBp%2F%2F%2BVutug9VgWwWmLwhG20uNEP6GgN7EZfAi33pQi0dvKXMCCZj5OE66%2BM1d9OU5nrr4OndEIQ9hK1fy%2FqbggNuC9sOC6GFhma&X-Amz-Signature=1fdb5b86a035160f3b639b0f38a7cd6dd530f4a7fea5635c3e6d8383f0ca9803&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
