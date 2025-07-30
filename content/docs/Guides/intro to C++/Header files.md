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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKZWHZ6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM0m3chZ8JcN8idwU2G7E78uZAht%2BTdsGXSWrXDlCxXAiA%2FGoEtZefXWv1wwjTLF1D%2BY7y5YvQLhT8mQ54VaSHcESqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81bC8zkyeHuHdMM%2BKtwDXG9Z1PyZM9SQ%2FlPFeHFMTZEszcuIQ%2Fvv6YL0icV5vbAd%2BGmHgOmXbP%2FLwdV%2BA%2BNhLnuR1jt8jC92W%2F6NLFen2IJ0gRNMPPjcPSzmHT5G12KpuyYotMPBIlSq7xbMmgKjie5cmKoCfMAgvyrXxGm1qs%2F0%2F5gwlMXApdDjlVlqL5OzL19FlRpAENpMMPdqMc%2FsKNP0nWPnJc8KMGwnnfRgs8%2FbPUwv4FQb2quszfXcKCYabBcGNPsbNDA41ZJcYs5upkfOwWQMhijs6sicQCJrHlvRI79ViOt6F545JKGkM8SvnU%2FylxK5Iuh1pITbYxjQ7bSrId403uiQNzvjUPEgfeqf2GrbZnznCbiYyV4B3vrjnuGJnySWQ2D8erVOqhtGWulBrJP1bkYu2Qc7Cpg9UWvL39Df2S%2FCvexSWY3HCjlQkZv96YtoNvXOhVTeZ8Av3jMgSXDsHHp3hc%2BhOtpN4gIFwLOI%2FsbvIS9oALQETFTikc%2FeqJvvjyEZxhtVhG%2Bd%2BKtdFh9YgWsWlXU7EV1gh2AqJq08JGZ0M8Ch8qIcQTZlVDugPMZSNX8Aj%2BJY7mdRtitr2NiU9fX6r1pKVYJ%2FywnbASc7lpG1mDJAcpqBczVGyx8izdFHPrp0Vcsw4sCnxAY6pgFVf5bpT01WXR%2F6dZFaXJCgO2zDNaVJX%2Bq2l3th8XTgoSWiWcfCslQGFQGuA%2FfODX0e11WB5zKB9aFaEnJLK3ItI%2FjVGDi0jG6sA7WujhQt1KFq8K1tyg8t60Qpg%2F73MnRgP7bcaWF5y7YpW%2FC2rogAPVyJXWb6DAtLZNV7DihkZB50Nzgrdgq01b4vQ9Qn6WlPXaic9DoZ8N%2BryfWRr3w2zRcgBNrh&X-Amz-Signature=5bcb3a0c6b34c4bc992da22bb6a0cf4314caf65c4d6b92b77a990a3b12d9754f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
