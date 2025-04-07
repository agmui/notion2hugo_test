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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GNQSKB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOcL%2BgVrktLHydKZwoJ97PtEEg5LlOGZa%2B424nFGlqqQIgQTCNeam0rr03aLf%2FsDh91hlaHFWCDzrQh8OGA6zMIZkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNIj6Ad5Ba4sFq6jZyrcAxPeXbfYVDeT5Oj1WxDvdU7dKaL9LbfHLxPtriXRFrb92LlXhE8gC6XsYj2VmOU1qWADspMkzb%2FuUfMM3SGcXJSlcvr79ft7iyAOgkajxDgrM2Leh1jmqQ0r5bbQs9mfcKXNFtp5YdRx7cPrEZUkJurGhaTQ7hZB1Qxlw2mzv87LTKeRpMiROMuSClb42d%2FkhC9Bf7ceagHWq5mvxw998%2B6%2FBjfvxlXX0YvNGsIJP%2FGQUYhhtFJA9i9aScfc6BdJgpECCLdCEeA%2FOPToTj2FrcojAG7dIa553nxIN7%2FFoNjdaxHXuiP2K3HPW7WSu3OSfnd6d7G%2B7iP7aK14vHuY0Cvt8Wj8PQHwnBU7fs3apl8hbIYTGUBXzZeHpoUnmUFzkEyFcI3hfqP5FZVTrwoy%2F8FG5ExL0fGlr8kf275ij2HI6eVug4U70DVSurU9GHEsmS8CPHVMzDxosEHK25GwiajPe2WxIOxOWE0vALM%2BmgX3qjzJbL0cr4u1GmGpi3U50RVHINgtFTwBW7LLtvtN5WvGtk4aIQc7jIuP38jeaHKzl0c%2BC1UANkqoMh39H8X%2BPkppP4IeuZXS%2BQ9gd1zYpntYXdI%2FYu7BArXl%2BjL4p1bYiPRn83EZCXrtugQPMPXk0L8GOqUBI1uUy5arratqPedv9Vg5SOFiX7eQ3FM3Vrm0y8TieF7tYT0Pq37ge47DDCBcvGkTonlytcNXTsr%2FuzUxoN%2B0ZLUn0sPH0wtW1JvZJREbATEjzrBMVP4zUricvXCssfXH6YOcY7E82%2FyHt6PA71R2yFTvyRKbv%2BNJ%2FN1NQMobFykdZbyMd2kAQogQQ8UrM6TakyuciRt0MsQQdA1fo0T7Emi6Eid%2B&X-Amz-Signature=de029c5acb3b1e16a7c7e6b396ab2ae40486c7e70b34f0cea03d089f2ef581ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
