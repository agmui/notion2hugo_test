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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJO2XS67%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJH8jk3XLn4VyWalskSdm2KtIAYzK%2F04WbBDvVlmLNNAiADTV%2FTqm%2BYyPQlJ5JZs7grhTDnWIBzl0e9x3rxd3VDiCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsqB00U79s5EmxvsWKtwD6AlF%2BxB1tmiD54Lt3x9e7kmdLJnS8MLvnR4Wk8GkCWNrVAzY%2BnAfiTL721erhtWmWAlA%2FZJ6WW4%2FNUa%2BONjQe%2BX4W6lIsRxLt0o7a8EKBQIOaNinMqfxzmx83YDVLJs4tjc2tuoexBjwRh4GKGBHLxX1FxwaHLzZE8P4jMrPd2SOP5SHyF4EHDvkibTk%2FaJMKk5cEEhMboDPQhEU%2FEfGs3pQ3sRz%2Bmc2olwNAOd32Qn2d%2FBKJqQDEcTMhcRx4FzdZIUKMho2XUY3jjmdjBcm2VQJtqvBhRiQvEf55GoKj9nlvpV%2FghIEDF%2FIl3CN9kpVf4EPVIDASZYVFqT78uBxVJ9mIRd0ZkB5SDW7I6ON10P9vVVYbH3KuaPXFToiKuqXTnoMnrGJVArt%2BFVCRLQkgBkey7OwaKqtoWqCH4hdoEUeH3SoA71n%2FBkf%2BxWKh2VYp1hK1FrvEX2HE2HBeRETQUh4gtv15E3S0cNsQg8r7eYlOLEDdlgYGbFwBOdYzCE3tXPj6dg4VuTruz%2B82mKcwI2SAv8BTgoSRdlscYdxUPGlUrVvGf5%2B%2FqHXyJ08Nkt2Nod2Su83YAJOT6ZIMjgQldC6XvhIZuxIsbgRAZ28choS9PH7sA6nF1%2FBP5gw8LGHvwY6pgGuJEikYGhl7P8GHUHqL55wNMdV5Dvi6ti3RUlhptF13WjHPSRkOdcK1EV12S0loqHzJihyQAEo0SAqtZXA8Q4vW1kuo9tMCIcZ2Mmm8unA51m7tzFfFxxCQJa9OyG6S06eGyFJc6qyYNMg%2BtcqBSlrgHDDA6NXD%2BhlPqJZoi%2B9hOSLSj1230Qq4t%2FhTGMiheW%2FwVPv6kQWt6xWvglZE8%2FfVSl%2BlA1n&X-Amz-Signature=b8184b18f36b72d444312a1fbcde62d84eef9dd7b2edba7f39b4350d78ecb8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
