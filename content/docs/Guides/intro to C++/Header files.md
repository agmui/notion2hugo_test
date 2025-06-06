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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2IZWPS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjwjxhTWTdHbwwDj%2Frrw9xAxKpPATn7AueWbJqrH%2FG9AiBt6iSlcMQC8bUWWYwkme%2FA%2B9BeuLGSLMDxYJ2SyyGPXir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMqNl%2FC9VaGVD3D9LbKtwDP%2BTRZ9aR1mSycac8ITrfPJO%2Bb3fmLOyjwv2HlNBq96eBGqEnT4nwRqch4tMgzcJsQi%2F2k%2FblGGoP9qx8LH%2FYZXUDc0nBge0THZ7bU%2B59tTKxBQPUic7QpiEOCumMRLrNQD6mIjR65v%2BgAB9uIXdt0F7CEzRkUl72cRn2yP1H3laOuKRCenKiNR%2B1mudpr7kXKFx7jen558kGdY5%2FLDwf%2B57v178edFU230UpOwrIf4c0zDH5VPt7mZ2qEqQxyCYtB4z614BOpNKIrtdGMDHq2yZX7NQClZICGW3PReq9LQerRmzMWwg0z7pfxf59nPCxi8r0xNnxKQv7Y1tigkJACrFozbZf4pQ1TjkMq4%2FclEyRMq0YLrqLHQsLvHoBzlwhgjDMyKXol6VkTIXA5h1LeZIOTNUxgfocS6f1G7JT2DJwPoGW%2F4L4F62d8HX4a90srw9GV0tWavDWAmGjy5v%2FjEktMgxmfxlATb0lKd8UvOYWyV9KuCjyaC1nToqGdXBudtcgv3%2F0COYmzQosHb5U%2B0fG9SiiH%2BjhMX5%2FLcr1aB4AtBkTXxBp5DcdFdIR%2FkmyMV7HsZdsr%2FO%2FTLz5UjeBIJ5zMzVw2mpmnTaqE8Bui761QS%2BVfDd2ouczouEwqpGNwgY6pgEnDA7nF946p3vk%2F%2F4MCANbsSmncsHeC%2FRHR%2Fu45lrm2ewoDJWI8C4gvLrpdwW5rglGx1ChwODiVXaFkSzZP4Fz%2FZSUGPQ5B5KIe6mU1EXcArQGk3FIs9X9ej2ehao55zPZWmTXyzZQKgL5on2W9xq%2FiIZINwYj3XGNkz1ea%2FKQjt13%2BRVUEaoi2h20X3dR9U5JL9reqwHoUnNHS2naKbwGmfGDpglN&X-Amz-Signature=f83bff695342bb45201415d1b1551e9994af7d0646ea4b522e9095f3aa1ea485&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
