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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK46KV4A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDxPLOob1GoJcECCfD946Mj4pbqEDUGHZzGKD50hGxBEgIhAPpQU8TNW%2FiZCcB4u2xbDogpUSSAmInz2PNGO7DmEUs4Kv8DCC4QABoMNjM3NDIzMTgzODA1Igyjsm%2Fej%2FfjW6gKIh4q3APIau2s8Ps7et%2FkdZlzDr%2FVJntiA3gcZCiv14hOVScw6V4xdwVucSEaSRW6BztLyP6h%2F1EHtecO5LZZU4%2FLobfnQHtav3LZI9gGzj%2BzZ7DMugKpsu7b%2F6NaDTCp5QSSrrwMh1pYjG0BRfJg9dxhhAhTT6%2BUI%2BihiK%2BMcr%2F4dLY56D4JtjfGFXEGcPvbPne0pIFVDnfP9qzyEav7ct58WxOvj%2F8eAzD%2BFVojBNMXVI8EMp%2BEj2T6yz22j8GFZroSWr4X60rOOayJHdwk8U1K5kdSxjNFK%2F8out1sHSL4%2F1blcA87jpstgO%2BM1eGs9ePOYqgF2HBa6nO%2B7HBdUC4blZo44ypvC3AzwCH1iU1jKppCTtd%2Fu6x%2BDpy26GC0hupRFSNiw4E%2BEWfMMhapf%2B7UINjjjV%2FmeYcP7nZSIp1oCkvZCj3uion9CnL8gtBA2GJRugGRC%2F4ObraxGeD2TDz98IbKXLJgXmwl%2FC1QkN3Gl%2BvGtU7iWrkVyeM88c52GsOkVeeDf3zB3dO5r%2B%2B7reDsIb9lonF7OY5PX5s581a%2FU6J4Uf%2FsGPbyfPJo%2BkUpmXFS5c3TTU2hqwALNU9XvpY9whyLW9QTkzImbgrjsB9H0p%2FPvEDGLdFQcN2kYMIA1jCenJ%2FDBjqkAVjiQs217yKOjQwHqMbtg3oFAumuRf6WyoXvdZXbObctBdtM%2FMsfCzdAo%2Fuv0AhdpVoyjTD9qalAj7ZBdOUYwXbD7Pzk2P3sk6FVFkHz%2BRCAEFU5hd7DvbFZeQNqrPqjQ%2FRfICm6dOnoDRSa3s53u949K7R2relY4CbiHhMOug2C%2F30PQPit9G9659OP6lrga5%2Ba7qKVUVOul5o0gCPwfARVcR6P&X-Amz-Signature=540cf72b748e6a2fff6f4dbe30b9c335fb5ae123af7540efe5f503c4aa2d6b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
