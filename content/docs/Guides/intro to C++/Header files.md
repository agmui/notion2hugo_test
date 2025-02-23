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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOHFHWS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgst2VyJbR2ps4%2FjqjjXiZdckD%2BAUER40dzS6JX81LzAIgAZNpv4BELiap1qb9JJ9FmYyMlt8Xf3rgtZU1qvXJPHUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFtHo2sSek4LHVx%2FircA1lAYw%2BWbAi7ZxFS44mVytw6sp%2B6qDcuxmH%2FZDkBVuVWASQEoFW03LwlGV7dd%2F7%2BEgVOFKfMLj8eMRuaDL3tgXHEERF0%2FeZhmir2n%2F0rCwbVS96%2Bh7F2NabwAZ1f04GO8jlyBZtBjLs8Dfueuw1%2FNZQWGQ%2FE%2BEmOKD9gN4dT9wv34wgWaxyG3SK5brylrZZ1RsBHVroB6sIWorXaghUie4jSvm3KoxkizOz3MOOlbgPIRNsuGyA%2BP3yrsfVr47f%2BPuele5ZkbDeE1RmFVdXSBeLl3gBxAgMgFcBB0awRT10RljeHdWtcCRlOWSyC21cqAev%2FKsAMk7LXYgeQp%2BdZrpdISdq6Hb1NIkwlni7XR19xN0OqK1yxvjAcs8z47z2pEXOY%2BuAN%2BLBemTjOk%2BMsBN9tLUjEn6X3PE7YPx%2FL7dATbVCW9p%2FvCSgsSwP41o97zY1p%2FsSCRl5cANuyW6BZI8a1TMqvJkOOWkO7XGUuHmSDrkCsi93zy2cejc1%2FKafMBtMJBhPjBuyw7ECJQVfEehfT3cp5FVAikDcZ0QL0QhheESPu0aVpv0QoPBx%2FvU%2BMAFejy3B5Nk1ZHVYPd0Hdocns78CwQKLFsp%2FMLL378aly55n%2F5ZScqsM%2B9cj0MLPT6r0GOqUBSwzxP%2FXQQ7lWaTRbVmn4A6TU%2FJfeJPWmnx9JPtz%2FY1HN2i1s1ENzR03jfzeRkT5Q3ZPZCnsqPgkJg0Lce2K%2FreoLNK%2Fxt58W%2FfTncf9ymWnoXY3VIi4TX2v7mtho8lcNfk%2Fh3UCRpQEfcCq6bytgNmYpSCg2v%2Bl0RNgEzrLD7GhP2Lp8iwwUXZKZE%2BLdWK4PRtwMs8gDkYrkcCMp63sYqQPQFPrl&X-Amz-Signature=bbce37960a5ddd589b64284018d933ea57103b9423c326866012de1587de383c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
