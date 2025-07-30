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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6GYTNFD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqBQcw55QOFXHCBCVLzmJlqw%2B%2FEKhrjEOBwKREmzH54AiEA2IdmvJ%2Bca5VrJ0epnQLzZncH%2F%2FGk%2BhnHUeXBdoPhCTEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFllBccdKk%2BI0WQ%2B7SrcA98wMb97PZu1josw9GRBtKisGO8uLGpryH2Yue7R%2F0jATOXve3PUNxh6pPjQLldDEk8SIU0h0LOAG2XWv%2FpeLtGaB8NzvkpArO2FQ0cVAIXjvmSWxoWo4ozkNG2SmKUu2HWJVeJiUvdFyJ37oFhDFnCQDSKoPHPFFotH%2BQaaM%2FRSUwiMwMeJkME%2Ff0OGgmf5YLhGOsU1uuIkOYtrATgPHF0UTIAySgIBnZdgal4ZJqj9Z2kB7Gf8RNPmK6ada2aQ5hzLZE%2B9Jij0u%2FIJ1QQ0APzaSm7h%2FP2IKkQDPQ8815t4OpeENTyT1WIemYyzW4Ht%2FNLD2K%2BqZniwy5005hRHxPIVpu8f8u573zskOs0ET%2FScY8wt5vJz2EiV1w7xyj%2FGPlooyxfrXNCDeo4jPqA1Q1aK%2BvFs%2FrM6nV7mCaMGQ1ZALlRxN8mpnfMGhK3HNcbH15BzgzIzFsS3FlVIHJ9ggdnnWLy4se5oI83H4T4uNZISCDpEz2YgXpkmHgS%2F%2B%2BkoXL0dVRrc2qbJg%2BasTseH%2Bkh%2F6RrMX8V8I96t6Z5Oyg%2B3n8c0nf7oAiWmVtaAvzroAJkd6y1WmD3hXQqhp4DuBhTYtTrvzPnl30svUuo%2F5M74qpvv6y%2FFOVtaZ5iSMLrypcQGOqUB8U9zXyOfWXy1b%2BbnERIqP%2BtYgB%2F50nCkn9qqPP384kWMoHsqh85Z36Fq2rVhwDX0YHtYS%2FNkAhqwdVRCLaf1YzjGWgCMdnnT3t%2Fg4g7HY3ChmA1i4XK4bT7RU4P5N45W9f3rbXWZC7MTOWVpQYkWdFzKHLm2meUE6IstpgHxbojsNDeCmeC%2B%2B2bA%2BUujJVTBjdmFdH1RFEWeqR7%2BjX998r3wJIqE&X-Amz-Signature=cec97dc4d6d3d180008eca10d8df8fc0de9df96777e3cefca331d9fd5645ad79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
