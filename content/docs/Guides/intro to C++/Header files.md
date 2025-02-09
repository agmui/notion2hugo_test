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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCJV4TS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQESM3xNkWzl797eFL4UMTQ%2FJ4dtLIcH4oLLBJpzfetwIgfxnwlgeZR5sW257LLbEHRJrKHUS86IWzXf3myWQYkkYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJMQkvrDiY8kG2quSrcA5V8WU3iKkOdJcAben0s1C1whQKWlxJWEVsWg%2FLLMgcclEuUAAaBWsQ4LHUDIimH2JamyLdM4GN0rWk%2BipNZXXqN%2BwA0B7kARFpFBggWYDqgiDYUcgnEZqomCOvsW1z6FK0uKgTYtjBWkmZiYTZmPEo%2F5FkadLAvzMM%2BcdmogvoO2Lq1LeuugXHDxHgjwR0H90ggTngF1FgIeZJOqi1BRdzJMmg%2FDTgbY5UZXBHuue75820oxYDlxjOXrjuZK4F7JyyE3zt0k%2BhxVVPBEblMpA6pcqrsvPe2KbXxfIyVCdFf8D%2BItFZL5gZy0yTRFq0j2ypwZb11SDPsb7FQzj9DRL4s8QM4Qtj8ASZKE9uJlnstyGghEICNikEqQ4xRxo0QUQ4%2BDTce3P%2Bhb0zM9u9BwBO7mAf7lkNJz3s2LqvnKpF5AyUs8hh4Vh08Xy%2FIY9bWDG6caMAOutiA6kM1l%2BSBGxBl3BwuyiZon84ygv8%2FXchMF2LN4tbeo5YFwx9gFqqdpguOSRSCiH2kw6R5pABk%2BP1lW4IG3%2FEXqzBULGT5U9YyAtVTDkcQjbNC%2FQY0BYRJnGzZTQVwKGF4aFvayLenqSr9h1Gu9GnbGGBTCnFpRslT%2Btpqt8WpgWP3EdvDMMe%2FoL0GOqUBsNiuocECybW8bFQR6PPgAzOnA%2BqLB1pIyvWpYr%2BakkLs%2FE498rIRd4qh7AnnMazXu5yb9ISOhaos0gRf41o2JEVQB%2FCtVYDUeZb4R3lu8YRs3DUamPZWLvoulnRuRZLKJJO5qKrruGjrP94DCDjoHXE4kD%2BImm3Qonl1xR7hox0u4CBdpogXHWUJT5%2FwM%2Bd2lrfeQq2xk0dgaj252zHVOxGoeA3f&X-Amz-Signature=809d0cc76a525914b5ad53b6b13f6e07ebfd28fb91ee43790d8e548dffd4c7d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
