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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTTJYDU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcIQQZti2YBs7mkzO7g81aMgMj5swa8qOI6pVp9B19OAiEA7mKp%2BZyy0TfQhPs9FVFn%2BNRd3b0jjx9HojMl%2BF5j2QUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzejT4JifemmNusryrcAxnu%2FYcezTFDMGNsVF%2FyyH0F%2F%2Fkij3KB%2BqtVvoyxZueNirMpURbCRjR8ZU5KUlQgvbdij0HtcHausKgARCFMC5GYITY2ywFKvZXS498Op6KbfUzxsiBkekhCZTKtQzYqG8Sy143nId%2B%2Bm5jRHm9ZYJ1ktPHvnAXiuboh1nQ4crSW55Gqq5%2BYwF26eJypRAGArh73YRGzXCViCMohj4YJ%2FeqAxHsBh6P2AemSqnVnrN3hoJv%2BttZ41ERcQdCCQTFJ0TRTc83iCpHIeBmEfkUXBCuwFUvQdcobnpj3fUG62VHayTHmobK%2FuMEaqAs7ygOH%2FoLgFwKV%2BSDe4AeQw%2FncmlWOU0x8Ru11oNCWN5GVQQx16QhS%2BOri%2FUiV9DQ56gv2DpAaRiUgeUM5k1uWIyHhWL38yV0wGVMbWs%2BDUhG7mOTSzFmiaVVcxhwKHZMH0znq%2BgG%2FGJnmjkeOlMem1IuzxU9LNXv89KVh9uHf0idveIiVtm8Rs0%2B6JeqqWdq6Xsvn9uFo2AxcRtSmZ6y5Trjnr3yb0kErIlTAp12nC2WCBOUKmwrCNQIXoL%2BXZaju1cntJ9kGhvIjMjB%2BZZ%2FkiPehnrY6gVvYnnnlHZAvdr7xyrSjjOe4%2BBkOhyySL0F%2FMKLNhsMGOqUBiLNaFvRdMHENmAJxbG0t3mWOfDtzTF45%2Fq%2Bt%2BDwr4ELHCkqA1XyChNitzGjSXt6I1M4bh2eU8ljA72y8B%2BBUMB6lDxn7RkTq4K7ByxJhqwDfndPUpA7MKELGzQpt1ueTUkZizVQ9dnRT8wELbrsszOn4e60J%2B75kka4NSBmPCfq4C3G3LYtKgqLVTyQkXOBAX3i53Zt2OAZPezaTsiGNFD2gIvIn&X-Amz-Signature=ff299dae4ebcd3acb2e6ceffe2154ba2f814d9a6b28e9de9905ad26d009c0dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
