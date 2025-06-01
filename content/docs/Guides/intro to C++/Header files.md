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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFZFKKO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZfaBHPPO32RyrgSsOAkeF9wx%2FAS%2FuFE4aUkGIaHoIWQIhAPDBi61RFE7OezhRGPhUG3TWMWfzqQ6di%2Bn4mKVXgKHAKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUwTJHm3BfA13cWIkq3APdliyuseNaXsTUPlHJ3s13xzlJpbESx%2BH%2FQsAh3vDGPPd6jXys2qh8Uny1G4%2BArMsUdhuDA6SkxVPPaev8tQJ5bxeIov%2FvYCO0OC%2FHXXOWQCcVmGzybIh%2Bycu%2BJg3PiRZlPjDwQicOuq2CKBdayXNd6FQYwluRmvlPUgXDMoM%2B71pXWQY3TGjtEUN%2BHzs8FXEralfBsQYwIvYuFTrQJHBBHsXqxJI66LKJYgEJ9rUtt%2B5Wf3dEw7G%2BtzSga74cgfmwB9fiqWkxXHYLO86UpLFV%2B09zK4h4uBkNiKru0dDxBGD9C4Bwl1ZGCFzRCKFcd7T78El37uj%2FtGt8Q3WMm8grA6cgfQZHUpgNQiZxhyLO%2Byao4z42XchZlZXdIrKZd15c7RrJGXTL2v0brhuSuA4a3fulvF2VF7AowvxXNOq95xGHUOUBkNLOZsIk%2Fk4mGUY9rsxun3MnVr7R%2BsFQiU1l25Q5%2BgqV0rIGMbFOp45GsQAjzX2LW%2FC5jZj1IoVWgdSLZEfznN9VcHga2tdTubtKnK%2BgCVozqUv5rq%2FTB76SO6B2ezlnQgtw7Udp0yGNDIdyT%2B3qdYJIQ5H%2BRgSSOV4urbryppmXyeusT2uyE7pI1U5Iab6HtB7PsEXgujCKifDBBjqkAfOvgEvKIb%2B%2BBrUoBVINEMkZcOxq0R%2BO9KYoDNlcnd3NCZPlyqyCSZt5oWamkj7X1c3DavFdL6L56GQohbNH0uwBGN7lABtA98u2m7qGWYUlqxCgu8Ze3qIkAGGp9njupiBoZn%2B2phUnPES4xAzIhGKwkfvvpSTgOlUShJYMbSriw%2BAijSes19AdKmBoLEjM5Q%2FYt4FZo5d8ZG89EJSb1UTayjtB&X-Amz-Signature=d4126434c9a52538040112993ab08582b71590dad58976f7a4dcbb58d4dbc01d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
