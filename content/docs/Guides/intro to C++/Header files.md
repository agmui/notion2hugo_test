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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3LBQOM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlzNx0JbC3ZYyMK8heJBVd2R3Gw%2B0xt%2F4mVPuHUygUOwIhAMplKHSs3a1rhaWAC8OjUH5fsksIIqWusRvjg36CyiLuKv8DCDYQABoMNjM3NDIzMTgzODA1IgzQ7Z3UrV%2FJJz0ShAkq3ANIjTgY0taE7JEl532oJEPeHMuNNrlhcLqrsv3NMLaeuuUzGCDN7ObWHLoT%2FHVGkHwa7vxvbvTgq%2BaAmMxI2m5reMYvANgvadWJxahb5QHVRiUP7cXJQItOsvsl6sHABFW%2FdDAp0Os8jpmC6PEVQigooHUh1P7X6Z6ZSOpSZaAQj6HkGBg8cVUBD5Hz4YI039VpBo7OY1rzWtJHYiopExmOMWakx5YZ1ACozBGlVtIQ8hlyN18JgSNpmoVdbZvpgrgrtuTLTExkydiFhMZqy2leOzVpkRY98Kyh%2F9NXlDIO2Ek5SYA5BtZlfUzcBjGD7aUjHrDecw5hX2m61LGoTGnuspG9MDgfnndPnZPqrth8TVNmSrc9%2BSqmQzFyPoy7l0%2BHZrQ%2FwSiOpyhzSnC5J6mp30Gt9woTthnygKAqQj%2BZLwZyTMhQSlLWMrRCkDsW%2BMbmFgQFp9BmEvmGh%2FxDx7xckJ5g%2BLyYVWVFftz2oq2W56tSeqcwcIsIOBvmaelMpy%2FcwYOi5tsTfAPC96e%2BmgsFpY%2FPJdedEYFfMU2OA3aU1sFSBBzbdpWnc95Ez%2BRvN2rsEEZiv7oj9NwcCzXk5X8lCE5uu0J0EZ7wxi7S4g8QDdqftuFZWZiRCUnc1jCKuvO9BjqkAY%2FmOFtqymvexbV65LgMKTV%2BIUP8UkeyLakZI8svsXqoeps5MBWqGZZ1GvIy9XglWMDHL9YOZF8sacLCJPMxOyRUEkTUI7MeB6RbTso8d%2FbW3g4QvnJqvlt3%2BsUZgksIlCnR4moPyLjyXudYeb0HqmUcsVKs9jiMxdcwn5ZZriUcnnFkxyQp%2FeNHARuxf2%2FjxZ5w6pSaEWIhZuoVyrrtS0L9yrB1&X-Amz-Signature=ae74503430b20b49a08b5e81feed843c4c175925ea5338c7da19cf2a6912a09a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
