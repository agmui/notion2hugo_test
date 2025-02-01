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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSSVTMBE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSqqGrcLpqRZbazSnPWj1STkvBNb4e%2BaY3SR9%2FBBqvBQIgUQR95JcP5yd4GH2Q2x1pPCARVHwQZN9PGVBy1VJwQ0EqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL7wburW4mS%2BjjeSyrcAziBb17MRt68E99GWqBFh4Vb3gptyWVEz%2FrYriklnjcSDyJmbU8luBJoP7Z1w6%2FD2k%2BywMprq9KfDNsHfONHNPrxDFt8cAF81luoDsgdTQ%2Fd8n06AFH92vweHMWgDQGxt2Y32t9TvA570Pfe53YkU%2F94NX8ro92A2KFWGaVL072giisKFMihuixyqp%2FGxwJcEJ0%2F6nQxWDqdJQ8fHujAaCBIIdvXGEaLWbJyWADA0gP2r3gRVbgyFwn%2FVpi9JevuS5cqmkYxwtGctj6yN2pPrUlX5oO6xR8VQ9pYmIv4maBcLxTgJo91Eyczw4R7oBhCBdiXBhnH%2F7uWUAIWW0M4oFOcSLL8LCMqsMMrobu314BhiPiD8UlvKCudYyxpgC4%2F%2FX2VGLpoZB8KyuYAeCDU%2BGZ0VhxhnXyRz06AzNQy0zH9yOp3iGSVP%2FOdBE5LAleZnsYDlFxSKuQGNuroTkbVeOb%2F2H9sZ7T%2B8tf10zqB1qfYBNPhqBY%2BsSskQbDzVj64FJ5snXVoOvemc%2FydF5nzxGZuVlB2WN4H%2FBazrVNhgekw%2FK2ahLGiwkiVN%2FACEWKvHJqZt%2FN5FQva6TZGrQE9MG34id3JTGVeWy7kB5RqPGTIfIghIaeNxm%2FyAgPHML%2F4%2BbwGOqUBbS7U8tnF5IsKuDHAQwwuPc70cB8qL1DJ55BLK2wI9UWO8wjhJ%2Fa6vZkscRgayTahhjViX%2BAhC2%2FP0%2Bl%2F8ZxGa6eCuYZA40V9F%2FkCPLsDG5avpea2avGtDs8Ri%2FTxlWFdwYbrex9UBPAsczWzRui00%2FGkmHkQci3RNx9TWIF2AASAdHmlNQu%2Fz01PUn4SZwf4%2FUSwaXj75jh4%2FH6l%2Bk%2Fu4BD9hKi4&X-Amz-Signature=2e60b82f34394aa21b40410103c52fcf4eea177498eebba7092a01a94d226217&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
