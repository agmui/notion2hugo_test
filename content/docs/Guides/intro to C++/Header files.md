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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG5UJZ3W%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHDcbzNSRQN%2BScIG3u0wYO3NFvCurwl5iqHfjuQ1UH0eAiAHGz2XCOF2KPiON64kSjJ7w3UOH9q2yIz7RnodkjIhQir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMHu9ZVDgZJ3fKGCEwKtwD1uFHe5G0idqH9%2BS9NICBBFVNof8Ie%2FMNBFL%2BtOkP4Zz6Z%2Fz1GlLTu5VSY%2F8R%2F8loBXi4lSqpQgWfv3MlsMkukiuPkHE6sIv3OG5QlAnoF1waWjLTg3vZxMMNgDYxfzE7zwmnrCWLfryTKGas7vCyt4K1jsX%2BGq%2FC7cr1xGxqe7gVZbcEOOcUVMlD5nHyjFgQx8%2FUnQw59Ikt0K5Ic2ZLF7xLLDl4zIpDQ92Zu9UvEZk7n%2Fz%2BsYvTDhfYcZPg8CX3LJoIMB%2FVHz339WUl%2Fg0uiTBYEBVx5Qo2sx6hGAN%2Fg1gSUs9Zg6ERw40Ez8Fopwfa%2BH4FJnLJCLH3XHRgSwSrcnKeSOc9dsQNR20iF%2BhBboZX0rndX1sqGdVfNiaNLq7gSo6BmgUc6vvNuz4Yp0yfgI0MgxhtaeGpwU0Ki3h5C0kVemYBPEvwQAe8Vbw7VLYNoh4t77Vz4%2BUCpUNShgIVcg%2FfQ%2Beqo7kfF0lbiWAlC0%2BdoizDA%2BYrRPlHxM4CfzttR1I3doWQyGPKdeB3O0Ao1tFAYdEfY3PeyQXBEzneLWrEVsP8d0DYsMxZiWmUxuay6WuGt4c%2Ba2DjbwCH91CNUe1AvVWmMAvQsrhTHo%2B7%2FILG0%2FFxUuc9hRI5ecIwsZPewwY6pgF2aEWFF9y7viOTERyJtnUHMzy8iZHGN7Hm4%2BiuxokIiiLNthdWZ%2Fwe6yHKsoiWrLsru35dGJr23qsd0bOj3bu7jAuPPO2o6uKIV0L7aTd5NhYuaH121B%2Bbh12St5dlShFRg9SNIUVNtH0FfUlh5iUArjF0oUIFPrBkhlcbqbVSRFYaT5IpH%2FrTGFCTOfzY59vogoRpKkGrkbjQ0MgAXLY74OVlGlD1&X-Amz-Signature=9a2180c234b8a306b278bf8e7ab93e17dc4f50047289f541c78f67badcf56066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
