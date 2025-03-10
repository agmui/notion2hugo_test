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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHYNMVPO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIDnhUrIuozJ5Ane8PYXbZOXNBkYm4NDE5gaIS8Y3afd1AiEA9bR6iKSFowJjRc3veuvFdu6cc1O%2FklDx%2BkwieGsm7WoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoRqN6iZaClbozptCrcAxAAY%2BQs8YbFXRtzT%2FrCWwLe2BHcL1JgTxWl8%2FLvn9TAfpsS6HPvFE4uPSbe6DBbqjEVCUBTaiCYDJkypB%2FNjglbUCWT6f2ofJzSfsIg4kTbZ9T54ySiTUv8LoivxiKQ95eDKwc%2FzraxxCpF2Yp6a63cKWM%2Bk6rkvosHbw1ysBwBClYR%2FyG3LrCPaQAWWo%2FVtA7nR7C%2BDQk8kwA1QVxKW0SD0ERgwhs%2FXnYwVhv3N4vzg4aTtfh9pLXRDLImOLHyE8EsgRZAnXu2lFYw%2B%2FWVzSw7XQKA87kSX%2FYHaVuNwDQ053vsyDJG3xjbKPN2L0WyMdP41nAG1eZAql4Zsku14SWahvkNEZszM9ct%2FsKjOSkq2kGBSS6HY7UtNiwX5v5KrK5wSlwND2sFpyfS%2FHkz7Hkj5KZKHYcPyWdB3zxtP1iANE9qky67YG0Y3YyOfVqPkPZaH0bVyr7Zsn235LMqnc1EADkFx%2F1hhHu4Mrp7I%2BMGIXlsEMINgu7BB5hlPnboWdHCBYR6dr81KLjOMTuKpDRuoSMHFMxF5ppFnsU7Wr1apxeoCpARiaTNNhDRZaR7%2BDG4Ysg%2B%2FXfb18vRelUFT6li3HrcGbo3DrGaW6tmLaZzKORbnJNuML1d2cGZMImpur4GOqUBjzYDO0Wi1b13iNOn5U1OL0BZs822L4ST37bXXwr66C3JLNC80w1fqmc7%2F6dvbgVUpnOHMXTc%2BaZcpVXSJFsSLgjTIi6ITWYlpzezg6WGtJdVuiSmDkg5uqbztop1zoAImwlQb692pnsvWhJWcKDi6e64w3LDBHmk5ryjQF65EEKEmM7rOVrm99ZUab8buwIhKbh4V1hpfO4biPTWBmTvFLs8SbnA&X-Amz-Signature=cb2738452f037800a2bafe09b544245e20ed20619e2181888d0c84920b7e4c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
