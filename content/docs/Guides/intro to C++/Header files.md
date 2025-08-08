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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56ZHALF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDoGE2scaF0PTCPwu8cWDjshUKj7586Iv1OOVxJGPc0qwIgWsfsjkgJy8D0YQ0mkxib%2FOKOaPb6bxjKTNSSbY0io3QqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfE%2BNry28gTZ6y%2FfSrcA9ZfvoWBMEfAuROchDCFwdqzaZdPhlSWQcrKn3D8ORljHPD4nOhQKzv4mhqt5kYMlnYZZojCAFBkfh%2Fbapqtb9ICqAGRLzLRiK3kOojS4EFO0u5EHLFH0AAoY%2FeCVXOhBlEusuXatabSrV9kIbsxlHW9mMSrCGKLABXQ8gymmAISRyHiYX3W6IPLIZw93GGm2aUwwsz8Blg9zxl17lR51osXSPnNSAGSL%2FNgbHT%2FjIRPUiP8npvPkz2Q7FGhTfqoXSeVOvYlFQrgSB6xh4LILxLI9CZrEmk%2BUHLD%2FKh7VJ55CVmcbQv4ZUQLjnjzPj%2FH%2FsSSBA8FaxkZC6D2Qum1cNk%2BbA2%2BFL0JKAZk5IsSMcRupX%2BTvFxGIwvZS%2F9R9KXcMe2j2i1UtFviUom2SZ3gmy8H79ggtelSkHMqfOULymiWWQ72Elhw60hqiNLdKuR6u09jtHC2ruprMYNs%2FvN4Z4olstOUiJ5Buh378PgOHfP3sx%2B%2B%2BGTQinqOZ5AHzLs%2FxYgZZdWtRpHpldKZYUvBl%2Ffats%2BfOck73qCoASBqRvdFW%2BD1T2sBTU4%2FyV%2BNQ6K%2BZpXcXjePQsJIKiY8mDixTlE3TVBxQSvbUlOWAi3JhMcZnX0k9LXfl6kxOdpqMIug1sQGOqUBe6kdQQ1G203dLO7eOoA5HTooPisN7j9OVtVavGjeSvFHckyWmFLKqKIo2hVz2MozTX1sdoqa3yJk%2BYu5I%2BwcqI15JDCad44UkJGGqjkQhEu6zgcsOmCmT9FvkjuHDLQQ0ksJLHGJIrzHDOyFj55uL2tNyARfLd7HXldSOpom607LycWV3CfmuqgNRxvc%2FAi9rD9PkZqs6tmohwHkEl8hA3sOAzw%2B&X-Amz-Signature=6f71b8d4c3bf26ca93f9c8c079272491cb1662a11933e0cc7507e1a9feb4803f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
