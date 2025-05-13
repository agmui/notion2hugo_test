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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6R2ZOJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCID31lEXZze%2BxLV1s%2Bzvnq%2FW6KsUQQtPc4PjV3yhWd1G2AiEAi2uzmILMmoi2Kthu8jksK%2Bt8OypJkkE6EuNOsFV%2BY%2FIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGosvpdbxbRhnUoACrcA4JVaZuin7Lzv2MIdrePTXfhn%2F84TTWJK780t%2BaVNs1pBby6RNi0ebbCEGBTBCFZotKK78Go6lwIVw5%2BuAJ9X8QhZEv1j0RoI5kA%2B%2BPfC5E7fzh8tv7ak9fY8qES8qt8vqcz17TG5Tgao%2BRLe2NsP%2FXTmgSWIasc8i6rMDdAskXgt%2B2Xg3susEzsidkuK0h6up2T52iesOH4VQgWknwzouhzdqH3J%2FeeKdxhVkCPTdfzmgMf%2BuCNy5UC8Vwo6N2oGYuvtq%2Bev6gak3vKsYRY%2BA3Z42sdSb5crSvK5X1uLE2K4Wuv%2FmOjQVypns3I0hYHT0yHglA5G%2FxyA4MFjyIfExXA2EdwOPE7OVKs4Kb%2BGiYKXdqm6wKejKwT%2BLOTjGhyw9gONBQ%2FuqXHkL3TMPGKJacm9gYvq%2B0%2BI9UJi1VBeXtH5FQd35%2F99Gs1u1GtA1LZd1%2Fg1nsQ8Q%2BObeAyPP7lsyJpmlvWsXe0GC%2FvmiEP98sddTxUUHzvAiQhntSbVAXO6e3tHHrWzH1Uo1v88C8EhDW1OtANEJ%2BP9SnYEy91GoHFtOqUUfDVwQ0866Lz%2BvbTio6CIXMB48q1WovstCIss%2FiT2NTLGJhuDFWw8U7BSHnjoznOUvwNU9Pndsw0MILHisEGOqUB%2FXm8W08VMfgUJQ9Y9A6wgJSawRzFWiLUcLiLBBh9Gw9sCwepb2uQY68DSJZaIGn1nQ5CLGzLSeyJHUbsh6hroRBFr2VQpbxAE7XlOssQq279wExkuTu%2FUvzFZiBeltQHqHl1xqh25gcblB1gb7%2F4Q7ugIjjo3U3i3KDpGxky0pcz%2BFo%2FvU5qlFH8puXp3ql3%2FH%2FS7vYI8U5ku2PCxxIqH6u%2BmGUw&X-Amz-Signature=61f98a42fa9171973c3dfc57f2b172c69ba21167bc2f1b8cff01e01382f56f93&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
