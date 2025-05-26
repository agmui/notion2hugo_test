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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WHMO6S2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGJtBlaF0D7palvTETKOXFwuv7KJ4akTw1AjhrEilxvRAiBdID7NftVkRWTeEsjVB4HOLkrvAmJEU6Ve8P5edHd5Air%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMCkRKGfuHRJtJWcp3KtwDetZ%2BMGw%2Bgg8e5yKOmDuzH2sE9p4nNNqfRK85Pu%2FFCFh0eE%2BI4%2Bf%2FSMEjPzEcVpWZj140RkhTrjWbNBaf0dTCCMdkzfmfqt92YfgLSxmoezK9HiXw3BGk06x2UDmd1Z%2BM7gScCuz4Jp1A1LbIvIhthrHXF%2BmQuKKewmcjMlY6g%2BW5cZEBSSW%2FQZOvK%2BPoPCmBsK%2BJtgujeMWEhBQQ0ZlOX9p38DoiBqe6TZUUuai98VxNYMskQuFIXutNhFZw87%2FjSqTEtNedMU0wedsMt8f2OVeZ%2BSTBwagdj%2FcKjh%2FBz%2F42wboEUL09WAUGVb4rn2e7Yn6RhQzjfnA6hgMtfIRYnK5fDEb7jAi3eLnA4kdmcodIyTgNlPoxILpyeWeiXSUYMAZwhacw2OTCwSWx3yOj0PSEMhziMA%2BiBZULElcvh%2BQJwT6NbqbaEbB0Tddzj0QxG4P%2FPmzUX9ApOluMsh3zXEEwQfNHmihul%2B0ia5S8l2SPhQPbUa7qicTyk1UTANltT2PxBt7vs8udK%2FWhPI9AegsWnIhibpGJiNe9phieHeM%2F%2FC0CHT2iKWAIKnXk%2FVtYY%2FcUbpuKn5KT1q84pkeQWThzxdxBVmH5ZNFZJYmycWhujHzu8wDKmfVDUpEwmOHOwQY6pgFPPeRRFulE58hq62oFDRaZCqWFwD5eQ6Ms6VdlwE5AsThBE2gLVsG%2F%2FYR3IbhqyXh%2FwHxIhLxrV1CjTJ5z%2BTyNK2clBYfwD4v0h4H4ceHC3sDKWISyMaGsp1B5gD3hTC1CujvazrZxpgsgKEUCXu6VOsbeSBZhJ2zTRRltdBSnmzn9cfJ5R%2BjegCZKIQxTR45MraDIOW7RJOJOSt2ZqhDRq3bPJ2is&X-Amz-Signature=987b8ba2a0728e273561d5ff39d7155688b13777f16fe72e614c5dc93bddb954&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
