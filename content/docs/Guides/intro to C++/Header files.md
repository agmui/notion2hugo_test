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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLWGX5A%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6CKyc9Kr%2F0UfHSuaWfwllywVnk2wpTYuFBlfHNO%2BBOAiAZfR45uRBb6FiC0zvK%2B%2BfbFnQmmhQxICugu2BGgv%2B%2BsSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHqEmEsnOTWJPL3iCKtwDsudrn1fQwdl1FKT1nwrt4yb%2BFDRBlhH3%2BBCMwnzCDCINjJzQ2PChfNlxPDE%2FbvKrti1WwTB3WeqduZBwq6A9zKBEzebiMhehE78J7jmmERhQFXoXmxvT2pGGMXv3%2B0mNQHwa3RbmUdrYIW9SUvCFMKPs2As9i4qwL0OrYX3b2jqufPZ0f%2BojmGzQDKnXkxzHohE3KUxY1mI3dF9gYewQhyWDGfGCzvarb%2BwZqAI15t63gExBGxsA%2F2o2g1IrSymANE8wfIiQyDc3vWwdI6thBxiTZCXKd1%2BEaHj3h6SHju92625cc1rL6cxVg61ZVJlbGhPkTIjZjRcqJde%2F9ci%2Bh4WJtk5F2Ia8z%2F1ZwI01Gzqc33FF5ye0RzhIxtyd1nR6oSb%2FYFpIXvswWncsxmcLlLA70s3VlfDq91TBIgieQmMKQXTBrTVO0jF1eqF%2Fpr4y6AfIqLcFKrVK2YSf8QBL1Lwd%2BfYAoAIUCwR8s0JEj3SXgDUED%2F6digmNUpp4s%2BBojbs11aviu45bXws2lN7kTg2xBIL%2F8dHo%2BPTesJq3ircbgTzdbGZSeV0R0S6lJ0lnnyWHd9oywBGd79k1pFCfEbUMzQArEcFSm0WRu%2BWd6OQhN8uvVTGAC2l68zowjZ2WvgY6pgGiCUPCrE%2FJAOcBe3dVHGGQ5vAkUM4vWc0ADizut4YOGva8q5%2B5O4vFU9RINCIasw0kZZ1vZCfThngi0HtGdNA7riNk7NmSbaeG9e9XUCBOrPEVeY4pcsPYaU57iR4clcNWkhvQ%2Bw82P3kmEqrHNddb%2Bairbm8sjqAauohE5evwSC2jtimpek%2F1TmvnoRDUpmT2wUvikEo9oEUIS31CCINsFZqYsxx3&X-Amz-Signature=14a71a18b9c5ece96ac30ff0d2ac94d8e44cf1d02ea24d56d83ddcf767627d00&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
