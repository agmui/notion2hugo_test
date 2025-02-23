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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIJGNML%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA7420cHyWr6gzoKLnOF5aGJAth%2Fqh%2ByvSbpqsiUIPzAIgP3BHqpj%2Fe3a2vBm2ZaMFlTP4YHUj8r7cHackd%2FPS5c0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FSJM5KAiAm1l%2BADyrcAyis7XLhZDlX7Bjy7BPh88q7ZX0Sy3qUI7vvzd745AKdOrPxdGojvZRHiJwzVzxeckbQnvH8MMdZ8eDdQhbRW5zLRhrTzc8l1bS7OPDmVghpnh85GD6LPcBoGC0uNzKBWZPfq0uRNpgR0WAzFFpGBXebxOhd1Wv82aoxhKdqgw2JGbJFuUyTbrj1XbqDzjBOpWCFU%2Fv6%2BwWaPwaJsR7v9kk3aRtzv%2Fd12Z%2FtBaMPZHUJ%2FJzSzYAyhUHpWW5wWw4Er3%2FHPfu%2BMXevroLGV9XW0KKdonMSep6oEGkxCxxkm33ChS2dXRS9brNDk%2FXHlesZCYQKdpCPv9ULd9F65m8cuxNRZKjgn17nNgWVl%2FonhQpOYYradGmRGczLzIaanQWqxgC7DKwub7%2BBTqVPC7BRAreAmVL%2FiWFggAVl216dxUPpFOcTB0WEbWH90jIfX1A%2Fzcmx6NK7aeaKGl2HYO4D5bYG1BxesoRb2%2Bf2FQRwuiCI7GbGoMvSCs7zVxqqTGRHwXJa91LLBKp0PxuQE5sotLvClCIzLMah1F%2BIc7D75zneKS58BM3UrmGak4Nh88rGNrLotfgqukbcL8PCyvZ67UUcZrjA4v9UURGa7ksB4H0WXLY05tSVRg1ahnyiMKyv6b0GOqUBrgwrToSQMrbUW7ggg11ndXQWK2Crw0OT7lA%2BwgH9yZToqAswrM6jzhWVb1rPV88c%2FSCAlTTy%2FZ%2FeE3aVAUKh8nHa9IL%2B90jvqPzx6mwzLIJYmMzGjhHIW7jMCg5XcSkm7JGtlENwVcb7aF%2B%2F4fUQwE%2F1JQPnctZuwuWAszFStonh0qK6loaA%2B2TvbLLb%2BLrQxwrdVdPIufo5O%2FPnsPK74PTu0%2FfC&X-Amz-Signature=1ce7f372b653903a266463b0b77722fa86e4e180e2b5cd3d48f002c9fcbac8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
