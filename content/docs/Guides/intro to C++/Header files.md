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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP5JF2H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCodK%2FhS7iEXh6W%2FGo9c2uxuLVhah%2FQLXgahPXV%2B9qudAIgPppcSFU%2BeDCBtrex3wN88CkWYRph9bAGLV%2F0d452lY8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDlFIWvqOwISM7tZdyrcA2A5PXCtVy93huNMs37grtQu2F48uh1b14KM2Bb29C7mYd09GHJIZe3MQl75gst%2FWt0g8e8b8FBLslH0g%2BitEQ2y6ZkMGKsVE6mEEg9eG4KqhzrT%2FSb8E%2BBPrK9kZ3lhA5Axx3bMOoa63C8vp%2FC%2BEUzNAu6tZZDDm4IpihLpUAxldn9IgyONKz4ZjzqYFVJFbPOJ%2FieJHuJW0FYqUACkW3EFKWsqQBeL3i6Vh4cMTRPDYaPMBInD2OlNjZlm35divowVhWSMDhyIZOSr7VpaRZ33C9YqEoCnLoKmUxpL1B664lAuBZBtuIW4R6BI%2F75dNwim7hgrdbgxGpTUQPt5B4yRQ9PeP%2BQemjG6WFLeMIL%2Bz1ZQwvRZjKY0SU2%2FL9jUFDpTfbZDB8ud%2FwyJ7Nk8qAbRR5RF6Rorm8XKNsw77XYgDbGI3ZlamM5KZ%2FKyQFzFfFZZwtAWQ3ICSDyc9%2FAdeMjJK3Hd19X7DmOfWU6ZpqnOtkZjcjcSW8JrhsZrHOAPC5mspurcvJHYx80RppL%2BkBUbE2j9F4OpEG9y5iGXHvincTllOPDk194mFKhtcnabkLXwV67wmK71Dr5UTjRZbaAQAueBxASA03xYyZhSGgzHJLkibcevQPMMxoPjMPWgoL8GOqUBcLnW6pwMzl%2BkkAidx9T0t4Fpglcf9UCPF5KpoaQDvJM33icKOsjLvZlh%2BJpfLtnW3LOiuL%2FRNUeAGB9mYjJfSNXKNsNzo0nwnqJUq434G7qwMOBkwZdZ20%2FySP%2FqsJm5fkhFU57s6yNuSkTvraQYluXbLhxOXGBeeaS3sJQpGVxRYXyYtCZSBEOhlzwE6iVK30%2FsF9xp%2BmySGnUhdSS4g4fAAY9M&X-Amz-Signature=b6cfbd6d2f934c350612a570f3307b6b97dacdf82b6097b813b22d3276b2c802&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
