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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5R3TW5O%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1Uxuqwp%2FjHMyGQ%2Bx3XV8%2BsdyhWh5VLov%2BSEetYyZrtwIhAOtJGFU6ElGpkUhYkYQGIaR5lkWu5%2BWk8M8izLDkXE%2FQKv8DCF8QABoMNjM3NDIzMTgzODA1IgzTAF8hKAuXLWUibF4q3APYz4Ht0KcTcemFfvSRXbaV1Z4Fys%2FVp%2FdFVL6FZ3bZBTlrqsQWKe7sO8GfxZGL3x77jR5O4g9gF0fSX81Hf36%2BRoSSkHGRISZRVlVRVGKL0CLG8ZgyG2z6CXu9xTmBzyH1Wamk3lLH7ubIozgMMj8TO9kRL8GlrdvhP5FHOTbwVv7YBR40cQN70mkx%2FEBkw%2FuJ3k8lhxPlwPCBa9tPSijW0K2lGVd1ty3k1v%2FUcQwT9UgLTYnKq3SRyn5SHT6cmC6mPmyeppCT8699iSr4n1NsC95hk83RGnQEXOVxIo3FgqkdlR33qWyZjhfpU%2B3YSsuZArF3cNmhXAVCTxxX75%2ByFMxNCSmWCEXb1xLy8gDBEyLFTbIN70353QplPydhRhAykSXGSnrIA1OrbVl1dcCBG2wD%2FrbpqTBIeiYiamOLzYGkI2YDAZOiJmqMfGWuhMr8zPKcXFbxoB6EX0wQMmaXQwcCE9LYRr6tsbZo5rdmk2fmUNGQN07ZpNlsVyxP0XElvlBDxyOa8ggKnncQ9yeieilISB2NYoePWR%2Fc57F8YhDB78tEqSVsszgZ6WoGgIi2acz9f4EqeGo55Ip4WBbo7VB4MRfxD7YyrP4QS2gbjEEQAMYrpac9g6q2bjCy0O3ABjqkAWHNffry8k8K%2F%2FbVFJTHMCmjvBr9EwuvJVKICjiWsX%2FbrKOV2160%2FgMU1U99bP9MW6KJoiaNsw1wTxuHLLMr3TwAEVnYBAkjaVEZlqSgTE1ChorHCw4BPXx%2FEl2kkfVpzrSiiLEn65mvRMa6gHuXiMWE%2Baab2Dmb9shyzC1nAkE01sqfe29jb%2F5rNyccEOJ77L0zYPrpKpoxfuAyPsYg9jdVSgBP&X-Amz-Signature=e8b3c8aa0fa0962310753a32bf63f5a7b9aea70fefad430331421f96d38104cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
