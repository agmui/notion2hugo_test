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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6TZXY5U%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAztz7PvOJaEsvVecSJXAkqnE7RA3FiJICMnlhWbc9c9AiBz4FZJTkBCZ1ae1UM5Kt5kFAyZauVT3e21KwDTMVcj1yqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZtEWHq3QI%2BeBCGesKtwDXGyp3ZF64M2hxrkVOR3JTbNZnlS1dWT6tNad4yMQIpIcskgSGqvhyyMrrADCgold7fuQhHxxcMxAz8rUclq1L0M6U6v54cpFxoMvxJucRCNwpV2SrQ4hXSAHW0QwdDNv%2BqTIcqhRUKBkzeYFNrzJCFORqBQ%2Fn%2B44ZmpwFO5XYnOiFFVqDsjsmms1v27G7sJoFlh6x6BYhzsvgc1DlBZRRXjX5ARPF9jBAURDIdShfY7lijLaVWkB7jf3as1yIfLfLBLhhEYwYIE01SQ2j28KDj3o5wf7%2F%2BAUvOT6AsZU6Xp7PbvA4VEV%2BVLX8LoBb%2BDS0oqXM9geX%2FdAoR9pLIDfeNk0Ki3LpYU8HDIA3Kh4QG85UJSiEXwwMiLMFN2Vv73oidsYeFS4Qpfzt04QeqvATHOaN5N8FGARJaXWzYNF0HqMCk8xCAt7UpzgzoIlUEczPo0zBFbNJr9nM3sucRyxeFKNHSULXyyOsWkhL1aLjk5AwqkzGvfH8sqCJ3S9vCQeyKtdOAo%2FI%2FYHG1yth3g06gqFQUwwzshg7lVOnkjgWjLPVTEzXox7gXi9v%2BpqmJ8NQNr8vaxt1E6NPi7e%2F4O3RoMydoBchShOavfT3nkskEtDRsebMYoMeBOaWgcw8YajvQY6pgGG7OJwFC31oHBMnXu%2FdqVnPLmQAUI1x%2FgUWbTtxDPP5eMR7SN%2BNC8jtCg1HLu5ADU2FfnzlTW1%2F7O%2BPstQNjWujLJF0rkJr1axZ1Rc8NN0lwBtw5HIbcjTaAWiOrWGeD1uL2MkT4rATeRGVtHVZzY35%2BvFSTGeop%2B96ihakGZWtmdWOv4RTmtGExGZS0luRx6hqEGjo7CIeQC3xUvu7OSkMstinopb&X-Amz-Signature=293c58c598816d0e815ef88fd213d6f7f76a905ca2c8807058940062933ab095&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
