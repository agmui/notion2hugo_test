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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3F37WAO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDqQGbA6ZZlynNdoLkYFaNfmgOnJerFhpg4a0ongtWjHAIgOkW29mLomWH6zUUYefUKnTCBnXoSicXnMgCFsMVD1NoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4rzVPMlgdPtQ1W7CrcAwzGoid6JQNwDeWvdg%2BVp9%2BdxtPgIAhisVT52RFwVCej9m7VAgR5TxeOcyqQFgoIZJACtJI9V3Yzn9WKSVN1%2FNlGR%2BK5ykVgra%2FFD59lHWMuek7yZWKmgRVgZMRiJAOW6rdivdsvLeT8znP%2FJz0OvlubI%2BId9w%2FDYEP9AMaj92W3IXt0tEy1onCBUx2nNPjEUo%2FIZ7eX3NqUFtrhYwww%2FpH6k61V%2FjGTmL%2BJxWdV2XkiGHN%2F5Z3N%2B434ltuaGzd39Kfa1TCfKqG3bP1RvztEOQGAfi0pm%2BCcGYegNL1nTdgEXkvHLREAAlh2z%2BnZEBREpRFNhp3c7hXWIuI1nR%2FGfOoub8Yy3NAxffqXcYIOEBwWQ3%2F%2FBuxezAAU0%2BZqqtb%2B20V5OKWJ8EeKgQrgHZBrrWvPdZ4zO3k0H%2B5EB%2FB9b1CrXKcR%2FcFD00GetvsAJh7bjv19X60FlafWuf%2FMcq3DWPdET5s53bjLHtfAZbV6TUOt5dyvYBt7F0Joq9z9X2%2BNmppWV5fJ1VmdTZKN70NtUQ6eO8LUTqCF5RoRmnOSomtXqt849bH5tAci2ljeK6Vl55oSuR%2Ff3y4ID%2B%2BSLJfR2%2FSM4sClwqFJf1ZBBfV6Y94M2MjjQr8hh68CXdi%2FMLz6874GOqUBIuDHRrqicQkdMrv7cXYp9VUedEZhwwTBkCL9INcQ0myXLLVdTNIjonWy%2FOv%2FTx7PYam886Y2%2BPDUTYKg81I%2FNml3bqme4CnGKVufvW%2FIA2pE%2FZ0F5AtGE4FeQt%2BaZIddhRqcabc7UXytyXXTUVdQd9bgenOBzWneTwar7Wr6HrvarTDz69CNsJTJlMc0gus43mF3Q8qwnv4zI5z6qDBmc1S7ZHWd&X-Amz-Signature=20492950ed19d5353411cf182364a232a29cf3426aa94a8ac499b56100c004fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
